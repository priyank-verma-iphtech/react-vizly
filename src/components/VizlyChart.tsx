import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import ApexCharts from "apexcharts";
import ReactDOMServer from "react-dom/server";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { chartEngine } from "../utils/chartEngine";
import { processChartData } from "../utils/transformMultiCharts";
import { looksLikeDate } from "../utils/transformData";
import VizlyRecharts from "./VizlyRecharts";
import VizlyECharts from "./VizlyEcharts";
import VizlyPlotly from "./VizlyPlotly";

// ─── Global expand handler registry ──────────────────────────────────────────
const _handlers = new Map<string, () => void>();
if (typeof window !== "undefined") {
  (window as any).__vizlyOpen = (id: string) => _handlers.get(id)?.();
}
let _counter = 0;

// ─── Types ────────────────────────────────────────────────────────────────────
export interface VizlyProps {
  data:      any[] | any[][];
  type?:     string | string[];
  options?:  any;
  height?:   number | string;
  title?:    string | { text: string; align?: "left" | "center" | "right"; style?: any };
  renderer?: "apexcharts" | "recharts" | "echarts" | "plotlycharts";
}

export interface VizlyRef {
  zoomIn:          () => void;
  zoomOut:         () => void;
  reset:           () => void;
  toggleFullscreen:() => void;
}

// ─── Shared ApexCharts theme ──────────────────────────────────────────────────
const APEX_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981", "#f43f5e",
  "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6",
  "#a855f7", "#0ea5e9",
];

const APEX_THEME = {
  // Tooltip
  tooltip: {
    theme:      "dark",
    style:      { fontSize: "13px", fontFamily: "inherit" },
    x:          { show: true },
    y:          { formatter: undefined },
    marker:     { show: true },
    fixed:      { enabled: false },
  },
  // Grid
  grid: {
    borderColor:  "#f1f5f9",
    strokeDashArray: 4,
    xaxis:        { lines: { show: false } },
    yaxis:        { lines: { show: true  } },
    padding:      { left: 20, right: 20, bottom: 10, top: 0 },
  },
  // Axes
  xaxis: {
    axisBorder: { show: false },
    axisTicks:  { show: false },
    labels: {
      style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" },
    },
  },
  yaxis: {
    labels: {
      style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" },
    },
  },
  // Legend
  legend: {
    position:        "bottom" as const,
    horizontalAlign: "center" as const,
    fontSize:        "12px",
    fontFamily:      "inherit",
    labels:          { colors: "#64748b" },
    markers:         { size: 6 },
    itemMargin:      { horizontal: 10, vertical: 4 },
  },
  // Data labels
  dataLabels: { enabled: false },
  // Stroke
  stroke: {
    width: 2.5,
    curve: "smooth" as const,
  },
};

// ─── ApexRenderer ─────────────────────────────────────────────────────────────
const ApexRenderer = forwardRef<VizlyRef, Omit<VizlyProps, "renderer">>(
  ({ data, type, options = {}, height = 350, title }, ref) => {
    const chartRef      = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const instanceId = useMemo(() => `vizly-${++_counter}`, []);

    useEffect(() => {
      _handlers.set(instanceId, () => setIsModalOpen(true));
      return () => { _handlers.delete(instanceId); };
    }, [instanceId]);

    const expandIconString = useMemo(
      () =>
        ReactDOMServer.renderToString(
          <BsArrowsAngleExpand
            size={14}
            style={{ color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }}
          />
        ),
      []
    );

    // ── Type mapper ───────────────────────────────────────────────────────────
    const mapApexType = (t: string) => {
      const s = String(t).toLowerCase();
      const MAP: Record<string, string> = {
        column:      "bar",
        rangebar:    "rangeBar",
        boxplot:     "boxPlot",
        polararea:   "polarArea",
        radialbar:   "radialBar",
        waterfall:   "bar",
        histogram:   "bar",
        pyramid:     "bar",
        conefunnel:  "bar",
        funnel:      "bar",
        gauge:       "radialBar",
        nightingale: "polarArea",
        sunburst:    "treemap",
        sankey:      "bar",
        calendar:    "heatmap",
        timeline:    "rangeBar",
      };
      return (MAP[s] ?? s) as any;
    };

    // ── Config builder ────────────────────────────────────────────────────────
    const getChartConfig = (isModal: boolean) => {
      const processed = processChartData(type, data);
      if (!processed || processed.length === 0) return { series: [] };

      const { type: dType, series, labels, categories } = processed[0];
      const t      = String(dType).toLowerCase();
      const engine = chartEngine[t] || "xy";

      const isCircular    = engine === "circular";
      const isRadialBar   = t === "radialbar";
      const isPolarArea   = t === "polararea" || t === "nightingale";
      const isRadar       = t === "radar";
      const isFunnel      = t === "funnel" || t === "conefunnel";
      const isPyramid     = t === "pyramid";
      const isRange       = engine === "range";
      const isGauge       = t === "gauge";
      const isWaterfall   = t === "waterfall";
      const isCandlestick = t === "candlestick";
      const isBoxPlot     = t === "boxplot";
      const isBar         = t === "bar" || t === "column";
      const isLine        = t === "line";
      const isArea        = t === "area";

      // ── Series unwrapping ────────────────────────────────────────────────
      let finalSeries: any = series;

      if (isCircular || isPolarArea) {
        if (Array.isArray(series) && series.length > 0) {
          if (typeof series[0] === "object" && series[0]?.data) {
            finalSeries = series[0].data;
          } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
            finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
          }
        }
      }

      if (isRadialBar) {
        if (Array.isArray(series) && series.length > 0) {
          if (typeof series[0] === "object" && series[0]?.data) {
            finalSeries = series[0].data;
          } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
            finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
          }
        }
      }

      if (isGauge) {
        finalSeries = (Array.isArray(finalSeries) ? finalSeries : [finalSeries]).map(
          (v: any) => {
            const n = Number(v);
            return isNaN(n) ? 0 : Math.min(100, Math.max(0, n));
          }
        );
      }

      if (isRadar && Array.isArray(series) && series.length > 0) {
        const s0 = series[0];
        if (s0?.data && Array.isArray(s0.data) && typeof s0.data[0] === "number") {
          finalSeries = [{
            name: s0.name ?? "Series 1",
            data: s0.data.map((val: number, i: number) => ({
              x: categories[i] ?? labels[i] ?? `Item ${i + 1}`,
              y: val,
            })),
          }];
        }
      }

      // ── FIX: detect mixed/xy series and clear categories to prevent misalignment
      const allXY =
        Array.isArray(finalSeries) &&
        finalSeries.length > 0 &&
        Array.isArray(finalSeries[0]?.data) &&
        finalSeries[0]?.data?.[0] !== null &&
        typeof finalSeries[0]?.data?.[0] === "object" &&
        "x" in (finalSeries[0]?.data?.[0] ?? {});

      // ── Resolved labels/categories ───────────────────────────────────────
      const resolvedLabels: string[] =
        isCircular || isRadialBar || isPolarArea
          ? labels?.length ? labels : categories?.length ? categories : []
          : [];

      const resolvedCategories: string[] = (() => {
        if (allXY)      return []; // {x,y} series — never set categories
        if (isRadar)    return [];
        if (isCircular) return [];
        if (isPolarArea)return [];
        if (isRadialBar)return [];
        if (isFunnel)   return [];
        if (isRange)    return [];
        return categories?.length ? categories : labels?.length ? labels : [];
      })();

      // ── X-axis type ──────────────────────────────────────────────────────
      const xAxisType = (() => {
        if (isCandlestick) return "datetime";
        if (isRange && !isBoxPlot) {
          const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
          return firstX && looksLikeDate(String(firstX)) ? "datetime" : "numeric";
        }
        return "category";
      })();

      // ── Marker / stroke per type ─────────────────────────────────────────
      const markerSize  = isLine ? 4 : isArea ? 3 : 0;
      const strokeWidth = isBar || isGauge || isCircular || isPolarArea || isRadialBar
        ? 0 : 2.5;

      // ── Build config ─────────────────────────────────────────────────────
      return {
        // Spread user options first so our overrides win
        ...options,

        colors: options.colors ?? APEX_COLORS,

        chart: {
          id:         isModal ? "vizly-modal-chart" : "vizly-main-chart",
          type:       mapApexType(t),
          height:     "100%",
          width:      "100%",
          stacked:    options.stacked ?? false,
          stackType:  options.stackType ?? "normal",
          background: "transparent",
          fontFamily: "inherit",
          animations: {
            enabled:  true,
            speed:    700,
            animateGradually: { enabled: true, delay: 80 },
            dynamicAnimation: { enabled: true, speed: 350 },
          },
          toolbar: {
            show: true,
            tools: {
              download:  true,
              selection: true,
              zoom:      true,
              zoomin:    true,
              zoomout:   true,
              pan:       true,
              reset:     true,
              customIcons: isModal
                ? []
                : [{
                    icon:  expandIconString,
                    index: 6,
                    title: "Expand",
                    class: "custom-icon",
                    click: () => setIsModalOpen(true),
                  }],
            },
            export: {
              csv: { filename: "chart-data" },
              svg: { filename: "chart"      },
              png: { filename: "chart"      },
            },
          },
          dropShadow: { enabled: false },
          ...options.chart,
        },

        // Grid
        grid: {
          ...APEX_THEME.grid,
          ...options.grid,
        },

        // Stroke
        stroke: {
          width:  isBar || isCircular || isPolarArea || isRadialBar || isGauge ? 0 : strokeWidth,
          curve:  "smooth",
          lineCap: "round",
          ...options.stroke,
        },

        // Markers
        markers: {
          size:         markerSize,
          strokeWidth:  0,
          hover:        { size: markerSize + 2 },
          ...options.markers,
        },

        // Fill
        fill: {
          opacity: isArea ? [0.18, 1] : 1,
          type:    isArea ? "solid" : undefined,
          ...options.fill,
        },

        // Series
        series:     finalSeries,
        labels:     resolvedLabels,

        // X-axis
        xaxis: {
          type:        xAxisType,
          categories:  resolvedCategories,
          ...APEX_THEME.xaxis,
          ...options.xaxis,
        },

        // Y-axis
        yaxis: {
          ...APEX_THEME.yaxis,
          ...options.yaxis,
        },

        // Legend
        legend: {
          ...APEX_THEME.legend,
          ...options.legend,
        },

        // Data labels (off by default)
        dataLabels: {
          enabled: false,
          ...options.dataLabels,
        },

        // Plot options
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal:    isFunnel || t === "rangebar" || t === "timeline" || isPyramid,
            isFunnel:      isFunnel || t === "conefunnel",
            distributed:   isFunnel || t === "conefunnel" || isWaterfall,
            isFunnelPlot:  t === "conefunnel",
            borderRadius:  isBar ? 4 : 0,
            columnWidth:   "58%",
            barHeight:     "60%",
            ...options.plotOptions?.bar,
            ...(isWaterfall && !options.plotOptions?.bar?.colors
              ? {
                  colors: {
                    ranges: [
                      { from: -Infinity, to: -0.001, color: "#f43f5e" },
                      { from: 0,         to: Infinity, color: "#10b981" },
                    ],
                  },
                }
              : {}),
          },
          radialBar: isGauge
            ? {
                startAngle: -135,
                endAngle:    135,
                hollow:      { size: "58%", background: "transparent" },
                track: {
                  background:  "#f1f5f9",
                  strokeWidth: "100%",
                  margin:      4,
                },
                dataLabels: {
                  name:  { show: true,  offsetY: -10, fontSize: "13px", color: "#64748b" },
                  value: {
                    show:       true,
                    fontSize:   "26px",
                    fontWeight: 700,
                    color:      "#0f172a",
                    formatter:  (val: number) => `${val}%`,
                  },
                },
                ...options.plotOptions?.radialBar,
              }
            : {
                hollow:      { size: "30%", background: "transparent" },
                track:       { background: "#f1f5f9", strokeWidth: "100%" },
                dataLabels: {
                  name:  { show: true  },
                  value: { show: true  },
                  total: { show: true, label: "Total" },
                },
                ...options.plotOptions?.radialBar,
              },
          pie: {
            donut: {
              size:   "55%",
              labels: {
                show:  true,
                total: {
                  show:      true,
                  showAlways: false,
                  label:     "Total",
                  fontSize:  "13px",
                  color:     "#64748b",
                  fontFamily: "inherit",
                },
              },
            },
            ...options.plotOptions?.pie,
          },
          heatmap: {
            enableShades: true,
            colorScale:   { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] },
          },
        },

        // Title
        title: {
          text:    (typeof title === "string" ? title : title?.text ?? options.title?.text) ?? "",
          align:   typeof title === "object" ? title.align : options.title?.align ?? "left",
          style: {
            fontSize:   "15px",
            fontWeight: "600",
            fontFamily: "inherit",
            color:      "#1e293b",
            ...(typeof title === "object" ? title.style : {}),
          },
          margin:  12,
          offsetY: 4,
          ...options.title,
        },

        // Tooltip
        tooltip: {
          ...APEX_THEME.tooltip,
          shared:    !isRange && !isBoxPlot,
          intersect: isRange  || isBoxPlot,
          ...options.tooltip,
        },

        // Theme
        theme: { mode: "light" as const },
      };
    };

    // ── Mount / update chart ──────────────────────────────────────────────────
    useEffect(() => {
      let isMounted  = true;
      let observer: ResizeObserver | null = null;

      const initChart = async (el: HTMLDivElement) => {
        if (chartInstance.current) {
          await chartInstance.current.destroy();
          chartInstance.current = null;
        }
        if (!isMounted || !el) return;
        el.innerHTML = "";
        const chart = new ApexCharts(el, getChartConfig(false));
        chartInstance.current = chart;
        if (!isMounted) { chart.destroy(); return; }
        await chart.render();
      };

      const tryInit = () => {
        const el = chartRef.current;
        if (!el) return;
        const { width, height: h } = el.getBoundingClientRect();
        if (width > 0 && h > 0) {
          observer?.disconnect();
          initChart(el);
        }
      };

      if (chartRef.current) {
        const { width, height: h } = chartRef.current.getBoundingClientRect();
        if (width > 0 && h > 0) {
          initChart(chartRef.current);
        } else {
          observer = new ResizeObserver(tryInit);
          observer.observe(chartRef.current);
        }
      }

      return () => {
        isMounted = false;
        observer?.disconnect();
        chartInstance.current?.destroy();
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, type, options, title]);

    // ── Modal chart ───────────────────────────────────────────────────────────
    useEffect(() => {
      if (isModalOpen && modalChartRef.current) {
        const timer = setTimeout(async () => {
          if (modalInstance.current) await modalInstance.current.destroy();
          modalChartRef.current!.innerHTML = "";
          modalInstance.current = new ApexCharts(
            modalChartRef.current!,
            getChartConfig(true)
          );
          await modalInstance.current.render();
        }, 350);
        return () => clearTimeout(timer);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen, data, type, options, title]);

    useImperativeHandle(ref, () => ({
      zoomIn:          () => chartInstance.current?.zoomX(20, 80),
      zoomOut:         () => chartInstance.current?.resetSeries(),
      reset:           () => chartInstance.current?.resetSeries(),
      toggleFullscreen:() => setIsModalOpen(prev => !prev),
    }));

    // ── Render ────────────────────────────────────────────────────────────────
    return (
      <>
        <div
          style={{
            height:   typeof height === "number" ? `${height}px` : height,
            width:    "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            ref={chartRef}
            style={{ height: "100%", width: "100%", overflow: "hidden" }}
          />
        </div>

        {/* ── Fullscreen modal ─────────────────────────────────────────────── */}
        {isModalOpen && (
          <div
            style={{
              position:        "fixed",
              inset:           0,
              backgroundColor: "rgba(2,6,23,0.88)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              zIndex:          9999,
              backdropFilter:  "blur(8px)",
              animation:       "vizlyFadeIn 0.15s ease-out",
            }}
          >
            <style>{`
              @keyframes vizlyFadeIn  { from { opacity:0; }                         to { opacity:1; } }
              @keyframes vizlyScaleUp { from { transform:scale(0.93); opacity:0; }  to { transform:scale(1); opacity:1; } }
            `}</style>

            <div
              style={{
                width:        "92%",
                height:       "84%",
                background:   "#ffffff",
                borderRadius: "20px",
                padding:      "40px 36px 28px",
                position:     "relative",
                boxShadow:    "0 32px 80px rgba(0,0,0,0.4)",
                animation:    "vizlyScaleUp 0.35s cubic-bezier(0.16,1,0.3,1)",
                display:      "flex",
                flexDirection:"column",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close fullscreen"
                style={{
                  position:   "absolute",
                  top:        16,
                  right:      16,
                  width:      32,
                  height:     32,
                  borderRadius: "50%",
                  border:     "none",
                  background: "#f1f5f9",
                  cursor:     "pointer",
                  display:    "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#e2e8f0")}
                onMouseLeave={e => (e.currentTarget.style.background = "#f1f5f9")}
              >
                <BsArrowsAngleContract size={14} color="#475569" />
              </button>

              <div
                ref={modalChartRef}
                style={{ flex: 1, width: "100%", minHeight: 0 }}
              />
            </div>
          </div>
        )}
      </>
    );
  }
);

// ─── VizlyChart (router) ──────────────────────────────────────────────────────
const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title, renderer = "apexcharts" }, ref) => {
    if (renderer === "recharts") {
      return (
        <VizlyRecharts
          data={data} type={type} options={options} height={height} title={title}
        />
      );
    }

    if (renderer === "echarts") {
      return (
        <VizlyECharts
          data={data} type={type} options={options} height={height} title={title}
        />
      );
    }

    if (renderer === "plotlycharts") {
      return (
        <VizlyPlotly
          data={data} type={type} options={options} height={height} title={title}
        />
      );
    }

    return (
      <ApexRenderer
        data={data} type={type} options={options} height={height} title={title}
        ref={ref}
      />
    );
  }
);

export default VizlyChart;


// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useMemo,
//   forwardRef,
//   useImperativeHandle
// } from "react";
// import ApexCharts from "apexcharts";
// import ReactDOMServer from "react-dom/server";
// import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
// import { chartEngine } from "../utils/chartEngine";
// import { processChartData } from "../utils/transformMultiCharts";
// import { looksLikeDate } from "../utils/transformData";
// import VizlyRecharts from "./VizlyRecharts";
// import VizlyECharts  from "./VizlyEcharts";
// import VizlyPlotly from "./VizlyPlotly";

// // 1
// const _handlers = new Map<string, () => void>();
// if (typeof window !== "undefined") {
//   (window as any).__vizlyOpen = (id: string) => _handlers.get(id)?.();
// }
// let _counter = 0;

// export interface VizlyProps {
//   data: any[] | any[][];
//   type?: string | string[];
//   options?: any;
//   height?: number | string;
//   title?: string | { text: string; align?: "left" | "center" | "right"; style?: any };
//   renderer?: "apexcharts" | "recharts" | "echarts" | "plotlycharts";
// }

// export interface VizlyRef {
//   zoomIn: () => void;
//   zoomOut: () => void;
//   reset: () => void;
//   toggleFullscreen: () => void;
// }


// const ApexRenderer = forwardRef<VizlyRef, Omit<VizlyProps, "renderer">>(
//   ({ data, type, options = {}, height = 350, title }, ref) => {

//     const chartRef = useRef<HTMLDivElement>(null);
//     const modalChartRef = useRef<HTMLDivElement>(null);
//     const chartInstance = useRef<ApexCharts | null>(null);
//     const modalInstance = useRef<ApexCharts | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // 2
//     const instanceId = useMemo(() => `vizly-${++_counter}`, []);

//     // FIX 1b — keep registry fresh every render so handler is never stale
//     useEffect(() => {
//       _handlers.set(instanceId, () => setIsModalOpen(true));
//       return () => { _handlers.delete(instanceId); };
//     }, [instanceId]);

//     const expandIconString = useMemo(
//       () => ReactDOMServer.renderToString(
//         <BsArrowsAngleExpand size={14} style={{ color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }} />
//       ), []
//     );

    

//     const mapApexType = (t: string) => {
//       const typeStr = String(t).toLowerCase();
//       if (typeStr === "column")    return "bar";
//       if (typeStr === "rangebar")  return "rangeBar";
//       if (typeStr === "boxplot")   return "boxPlot";   // ← FIX: was missing
//       if (typeStr === "polararea") return "polarArea"; // ← FIX: was missing
//       if (typeStr === "radialbar") return "radialBar";
//       if (typeStr === "waterfall")   return "bar";
//       if (typeStr === "histogram")   return "bar";
//       if (typeStr === "pyramid")     return "bar";
//       if (typeStr === "conefunnel")  return "bar";
//       if (typeStr === "funnel")    return "bar";
//       if (typeStr === "gauge")       return "radialBar";
//       if (typeStr === "nightingale") return "polarArea";
//       if (typeStr === "sunburst")    return "treemap";
//       if (typeStr === "sankey")      return "bar";
//       if (typeStr === "calendar")    return "heatmap";
//       if (typeStr === "timeline")    return "rangeBar";

//       return typeStr as any;
//     };

//     const getChartConfig = (isModal: boolean) => {
//       const processed = processChartData(type, data);
//       if (!processed || processed.length === 0) return { series: [] };
//       const { type: dType, series, labels, categories } = processed[0];
//       const t = String(dType).toLowerCase();
//       const engine = chartEngine[t] || "xy";
    
//       const isCircular   = engine === "circular";
//       const isRadialBar  = t === "radialbar";
//       const isPolarArea  = t === "polararea" || t === "nightingale";
//       const isRadar      = t === "radar";
//       const isFunnel     = t === "funnel" || t === "conefunnel";
//       const isPyramid    = t === "pyramid";
//       const isRange      = engine === "range";
//       const isGauge      = t === "gauge";
//       const isWaterfall  = t === "waterfall";
//       const isCalendar   = t === "calendar";
//       const isCandlestick = t === "candlestick";
//       const isBoxPlot    = t === "boxplot";
    
//       // ── Unwrap series based on chart type ─────────────────────────────────
//       let finalSeries: any = series;
    
//       // Circular (pie, donut, polarArea, nightingale) need flat number array
//       if (isCircular || isPolarArea) {
//         if (Array.isArray(series) && series.length > 0) {
//           if (typeof series[0] === "object" && series[0]?.data) {
//             finalSeries = series[0].data;
//           } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
//             finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
//           }
//           // else already flat numbers — leave as-is
//         }
//       }
    
//       // RadialBar needs flat number array + labels from the labels[]
//       if (isRadialBar) {
//         if (Array.isArray(series) && series.length > 0) {
//           if (typeof series[0] === "object" && series[0]?.data) {
//             finalSeries = series[0].data;
//           } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
//             finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
//           }
//         }
//       }
    
//       // Gauge — clamp to 0-100
//       if (isGauge) {
//         finalSeries = (Array.isArray(finalSeries) ? finalSeries : [finalSeries])
//           .map((v: any) => {
//             const n = Number(v);
//             return isNaN(n) ? 0 : Math.min(100, Math.max(0, n));
//           });
//       }
    
//       // Radar — needs {x, y} objects but category engine gives plain numbers
//       // Re-map to {x: category, y: value} format
//       if (isRadar && Array.isArray(series) && series.length > 0) {
//         const s0 = series[0];
//         if (s0?.data && Array.isArray(s0.data) && typeof s0.data[0] === "number") {
//           finalSeries = [{
//             name: s0.name ?? "Series 1",
//             data: s0.data.map((val: number, i: number) => ({
//               x: categories[i] ?? labels[i] ?? `Item ${i + 1}`,
//               y: val,
//             })),
//           }];
//         }
//       }
    
//       // ── Resolved labels and categories ────────────────────────────────────
//       const resolvedLabels: string[] = (isCircular || isRadialBar || isPolarArea)
//         ? (labels?.length ? labels : categories?.length ? categories : [])
//         : [];
    
//       const resolvedCategories: string[] = (() => {
//         if (isRadar)              return []; // radar uses {x,y} data, not categories
//         if (isCircular)           return [];
//         if (isPolarArea)          return [];
//         if (isRadialBar)          return [];
//         if (isFunnel)             return [];
//         if (isRange)              return [];
//         return categories?.length ? categories : labels?.length ? labels : [];
//       })();
    
//       // ── X-axis type ───────────────────────────────────────────────────────
//       const xAxisType = (() => {
//         if (isCandlestick)        return "datetime";
//         if (isRange && !isBoxPlot) {
//           const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
//           return firstX && looksLikeDate(String(firstX)) ? "datetime" : "numeric";
//         }
//         return "category";
//       })();
    
//       return {
//         ...options,
//         chart: {
//           id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
//           type: mapApexType(t),
//           height: "100%",
//           width: "100%",
//           stacked: options.stacked ?? false,
//           stackType: options.stackType ?? "normal",
//           animations: { enabled: true, speed: 800 },
//           toolbar: {
//             show: true,
//             tools: {
//               customIcons: isModal ? [] : [{
//                 icon: expandIconString, index: 6, title: "Expand", class: "custom-icon",
//                 click: () => setIsModalOpen(true),
//               }],
//             },
//           },
//           ...options.chart,
//         },
//         grid: {
//           padding: { left: 20, right: 20, bottom: 10 },
//           ...options.grid,
//         },
//         series: finalSeries,
//         labels: resolvedLabels,
//         xaxis: {
//           type: xAxisType,
//           categories: resolvedCategories,
//           ...options.xaxis,
//         },
//         plotOptions: {
//           ...options.plotOptions,
//           bar: {
//             horizontal:   isFunnel || t === "rangebar" || t === "timeline" || isPyramid,
//             isFunnel:     isFunnel || t === "conefunnel",
//             distributed:  isFunnel || t === "conefunnel" || isWaterfall,
//             isFunnelPlot: t === "conefunnel",
//             ...options.plotOptions?.bar,
//             ...(isWaterfall && !options.plotOptions?.bar?.colors ? {
//               colors: {
//                 ranges: [
//                   { from: -Infinity, to: -0.001, color: "#f43f5e" },
//                   { from: 0, to: Infinity,        color: "#10b981" },
//                 ],
//               },
//             } : {}),
//           },
//           radialBar: isGauge ? {
//             startAngle: -135,
//             endAngle: 135,
//             hollow: { size: "60%" },
//             dataLabels: {
//               name:  { show: true, offsetY: -10 },
//               value: {
//                 show: true, fontSize: "24px", fontWeight: 600,
//                 formatter: (val: number) => `${val}%`,
//               },
//             },
//             track: { background: "#e5e7eb", strokeWidth: "100%" },
//             ...options.plotOptions?.radialBar,
//           } : {
//             // Non-gauge radialBar
//             hollow: { size: "30%" },
//             dataLabels: {
//               name:  { show: true },
//               value: { show: true },
//               total: { show: true, label: "Total" },
//             },
//             ...options.plotOptions?.radialBar,
//           },
//           heatmap: {
//             enableShades: true,
//             colorScale: { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] },
//           },
//         },
//         title: {
//           text: (typeof title === "string" ? title : title?.text ?? options.title?.text) ?? "",
//           align: typeof title === "object" ? title.align : options.title?.align || "left",
//         },
//         tooltip: {
//           shared:    !isRange && !isBoxPlot,
//           intersect: isRange || isBoxPlot,
//           theme: "dark",
//           ...options.tooltip,
//         },
//       };
//     };
//     // Initialization logic stays mostly the same, but we ensure destruction is awaited
//     useEffect(() => {
//       let isMounted = true;
//       const initChart = async () => {
//         if (chartInstance.current) await chartInstance.current.destroy();
//         if (!isMounted || !chartRef.current) return;

//         chartRef.current.innerHTML = '';
//         const config = getChartConfig(false);
//         chartInstance.current = new ApexCharts(chartRef.current, config);
//         await chartInstance.current.render();
//       };
//       initChart();
//       return () => { isMounted = false; chartInstance.current?.destroy(); };
//     }, [data, type, options,title]);

//     useEffect(() => {
//       if (isModalOpen && modalChartRef.current) {
//         const timer = setTimeout(async () => {
//           if (modalInstance.current) await modalInstance.current.destroy();
//           modalChartRef.current!.innerHTML = '';
//           modalInstance.current = new ApexCharts(modalChartRef.current!, getChartConfig(true));
//           await modalInstance.current.render();
//         }, 350);
//         return () => clearTimeout(timer);
//       }
//     }, [isModalOpen, data, type, options, title]);

//     useImperativeHandle(ref, () => ({
//       zoomIn: () => chartInstance.current?.zoomX(20, 80),
//       zoomOut: () => chartInstance.current?.resetSeries(),
//       reset: () => chartInstance.current?.resetSeries(),
//       toggleFullscreen: () => setIsModalOpen(!isModalOpen),
//     }));

//     return (
//       <>
//       <div
//           style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%", position: "relative", overflow: "hidden" }}
 
//         >
//           <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />

//         </div>

//         {/* Modal — unchanged from your original */}
//         {isModalOpen && (
//           <div style={{
//             position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
//             display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
//             animation: "vizlyFadeIn 0.1s ease-out", backdropFilter: "blur(5px)",
//           }}>
//             <style>{`
//               @keyframes vizlyFadeIn  { from { opacity: 0; } to { opacity: 1; } }
//               @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
//             `}</style>
//             <div style={{
//               width: "90%", height: "80%", background: "#fff", borderRadius: "16px",
//               padding: "40px", position: "relative",
//               animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
//             }}>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 style={{ position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" }}
//               >
//                 <BsArrowsAngleContract size={18} />
//               </button>
//               <div ref={modalChartRef} style={{ height: "100%", width: "100%" }} />
//             </div>
//           </div>
//         )}
//       </>

     
//     );
//   }
// );
// const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
//   ({ data, type, options = {}, height = 350, title, renderer = "apexcharts"}, ref) => {

//     if (renderer === "recharts") {
//       return (
//         <VizlyRecharts
//           data={data}
//           type={type}
//           options={options}
//           height={height}
//           title={title}
//         />
//       );
//     }

//     if (renderer === "echarts") {
//       return (
//         <VizlyECharts
//           data={data}
//           type={type}
//           options={options}
//           height={height}
//           title={title}
//         />
//       );
//     }

//     if (renderer === "plotlycharts") {
//       return (
//         <VizlyPlotly
//           data={data}
//           type={type}
//           options={options}
//           height={height}
//           title={title}
//         />
//       );
//     }

    

//     // ── DEFAULT: ApexCharts renderer (all existing code unchanged below) ───
//     return (
//       <ApexRenderer
//         data={data}
//         type={type}
//         options={options}
//         height={height}
//         title={title}
//         ref={ref}
//       />
//     );
//   }
// );




// export default VizlyChart;

 