import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import ApexCharts from "apexcharts";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { chartEngine } from "../utils/chartEngine";
import { processChartData } from "../utils/transformMultiCharts";
import { looksLikeDate } from "../utils/transformData";
import VizlyRecharts from "./VizlyRecharts";
import VizlyECharts from "./VizlyEcharts";
import VizlyPlotly from "./VizlyPlotly";

// ─── Counter for unique chart IDs ─────────────────────────────────────────────
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
  zoomIn:           () => void;
  zoomOut:          () => void;
  reset:            () => void;
  toggleFullscreen: () => void;
}

// ─── Inline SVG string for ApexCharts toolbar (no external dependency) ────────
const EXPAND_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16"
 height="16" viewBox="0 0 16 16" fill="currentColor" 
 stroke-width="0"
  style="margin-top:4px;margin-left:2px;display:block">
  <path fill-rule="evenodd"
  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.
  5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5
   0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0
    0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"></path>
</svg>`;


// ─── Shared ApexCharts theme ──────────────────────────────────────────────────
const APEX_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981", "#f43f5e",
  "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6",
  "#a855f7", "#0ea5e9",
];

const APEX_THEME = {
  tooltip: {
    theme:  "dark",
    style:  { fontSize: "13px", fontFamily: "inherit" },
    x:      { show: true },
    marker: { show: true },
    fixed:  { enabled: false },
  },
  grid: {
    borderColor:     "#f1f5f9",
    strokeDashArray: 4,
    xaxis:           { lines: { show: false } },
    yaxis:           { lines: { show: true  } },
    padding:         { left: 20, right: 20, bottom: 10, top: 0 },
  },
  xaxis: {
    axisBorder: { show: false },
    axisTicks:  { show: false },
    labels:     { style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" } },
  },
  yaxis: {
    labels: { style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" } },
  },
  legend: {
    position:        "bottom"  as const,
    horizontalAlign: "center"  as const,
    fontSize:        "12px",
    fontFamily:      "inherit",
    labels:          { colors: "#64748b" },
    markers:         { size: 6 },
    itemMargin:      { horizontal: 10, vertical: 4 },
  },
  dataLabels: { enabled: false },
  stroke:     { width: 2.5, curve: "smooth" as const },
};

// ─────────────────────────────────────────────────────────────────────────────
// Floating ExpandButton — used by Recharts / ECharts / Plotly renderers
// (ApexCharts uses the toolbar customIcon instead)
// ─────────────────────────────────────────────────────────────────────────────
const FloatingExpandButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    title="Expand"
    style={{
      position:       "absolute",
      top:            8,
      right:          8,
      cursor:         "pointer",
    }}
   
  >
    <BsArrowsAngleExpand size={18} color="#475569" />
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// ChartModal — shared glassmorphism modal for ALL renderers
// ─────────────────────────────────────────────────────────────────────────────
const MODAL_CHART_HEIGHT = 480;

const ChartModal: React.FC<{
  isOpen:   boolean;
  onClose:  () => void;
  title?:   string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes vizlyFadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes vizlyScaleUp { from{transform:scale(0.95);opacity:0} to{transform:scale(1);opacity:1} }
        .vizly-expand-icon { cursor:pointer; display:inline-flex; align-items:center; }
        .vizly-expand-icon:hover svg path { stroke:#374151 !important; }
      `}</style>

      {/* Backdrop */}
      <div
       
        style={{
          position:             "fixed",
          inset:                0,
          backgroundColor:      "rgba(15,23,42,0.45)",
          zIndex:               9999,
          display:              "flex",
          alignItems:           "center",
          justifyContent:       "center",
          backdropFilter:       "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          animation:            "vizlyFadeIn 0.15s ease-out",
        }}
      >
        {/* Panel */}
        <div
          style={{
            width:                "55vw",        // responsive — 55% of viewport width
            maxWidth:             680,           // cap on large screens
            minWidth:             360,  
            background:           "rgba(255,255,255,0.88)",
            backdropFilter:       "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius:         "18px",
            border:               "1px solid rgba(255,255,255,0.65)",
            padding:              "30px 16px 16px",
            position:             "relative",
            boxShadow:            "0 24px 64px rgba(0,0,0,0.18)",
            animation:            "vizlyScaleUp 0.3s cubic-bezier(0.16,1,0.3,1)",
            overflow:             "hidden",
          }}
        >
          {/* Title */}
          {title && (
            <div style={{
              position:     "absolute",
              top:          14,
              left:         20,
              fontSize:     13,
              fontWeight:   600,
              color:        "#475569",
              fontFamily:   "inherit",
              maxWidth:     "calc(100% - 70px)",
              overflow:     "hidden",
              textOverflow: "ellipsis",
              whiteSpace:   "nowrap",
            }}>
              {title}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position:       "absolute",
              top:            10,
              right:          12,
              cursor:         "pointer",
            }}
          >
            <BsArrowsAngleContract size={12} color="#475569" />
          </button>

          {/* Chart content */}
          <div style={{ width: "100%", height: MODAL_CHART_HEIGHT }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ApexRenderer
// Expand icon lives INSIDE the ApexCharts toolbar, right after the download icon.
// ─────────────────────────────────────────────────────────────────────────────
const ApexRenderer = forwardRef<
  VizlyRef,
  Omit<VizlyProps, "renderer"> & { resolvedHeight: number | string }
>(({ data, type, options = {}, resolvedHeight, title }, ref) => {

  const chartRef      = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ApexCharts | null>(null);
  const instanceId    = useMemo(() => `vizly-${++_counter}`, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ── Type mapper ─────────────────────────────────────────────────────────────
  const mapApexType = (t: string) => {
    const MAP: Record<string, string> = {
      column: "bar", rangebar: "rangeBar", boxplot: "boxPlot",
      polararea: "polarArea", radialbar: "radialBar", waterfall: "bar",
      histogram: "bar", pyramid: "bar", conefunnel: "bar", funnel: "bar",
      gauge: "radialBar", nightingale: "polarArea", sunburst: "treemap",
      sankey: "bar", calendar: "heatmap", timeline: "rangeBar",
    };
    return (MAP[String(t).toLowerCase()] ?? t) as any;
  };

  // ── Config builder ──────────────────────────────────────────────────────────
  const getChartConfig = (forModal = false) => {
    const processed = processChartData(type, data);
    if (!processed || processed.length === 0) return { series: [] };

    const { type: dType, series, labels, categories } = processed[0];
    const t      = String(dType).toLowerCase();
    const engine = chartEngine[t] || "xy";

    const typeArray  = Array.isArray(type) ? (type as string[]) : [t];
    const isMixed    = Array.isArray(data[0]) && typeArray.length > 1;
    const mixedTypes = isMixed ? typeArray.map(mt => String(mt).toLowerCase()) : [t];

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

    // ── Series unwrapping ──────────────────────────────────────────────────
    let finalSeries: any = series;

    if (isCircular || isPolarArea) {
      if (Array.isArray(series) && series.length > 0) {
        if (typeof series[0] === "object" && series[0]?.data)
          finalSeries = series[0].data;
        else if (typeof series[0] === "object" && !Array.isArray(series[0]))
          finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
      }
    }
    if (isRadialBar && Array.isArray(series) && series.length > 0) {
      if (typeof series[0] === "object" && series[0]?.data)
        finalSeries = series[0].data;
      else if (typeof series[0] === "object" && !Array.isArray(series[0]))
        finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
    }
    if (isGauge) {
      finalSeries = (Array.isArray(finalSeries) ? finalSeries : [finalSeries])
        .map((v: any) => { const n = Number(v); return isNaN(n) ? 0 : Math.min(100, Math.max(0, n)); });
    }
    if (isRadar && Array.isArray(series) && series.length > 0) {
      const s0 = series[0];
      if (s0?.data && Array.isArray(s0.data) && typeof s0.data[0] === "number") {
        finalSeries = [{
          name: s0.name ?? "Series 1",
          data: s0.data.map((val: number, i: number) => ({
            x: categories[i] ?? labels[i] ?? `Item ${i + 1}`, y: val,
          })),
        }];
      }
    }

    const allXY =
      Array.isArray(finalSeries) && finalSeries.length > 0 &&
      Array.isArray(finalSeries[0]?.data) &&
      finalSeries[0]?.data?.[0] !== null &&
      typeof finalSeries[0]?.data?.[0] === "object" &&
      "x" in (finalSeries[0]?.data?.[0] ?? {});

    const resolvedLabels: string[] =
      isCircular || isRadialBar || isPolarArea
        ? (labels?.length ? labels : categories?.length ? categories : [])
        : [];

    const resolvedCategories: string[] = (() => {
      if (allXY || isRadar || isCircular || isPolarArea || isRadialBar || isFunnel || isRange) return [];
      return categories?.length ? categories : labels?.length ? labels : [];
    })();

    const xAxisType = isCandlestick ? "datetime"
      : (isRange && !isBoxPlot
          ? (Array.isArray(series) && looksLikeDate(String(series[0]?.data?.[0]?.x ?? "")) ? "datetime" : "numeric")
          : "category");

    const markerSize  = isLine ? 4 : isArea ? 3 : 0;
    const strokeWidth = isBar || isGauge || isCircular || isPolarArea || isRadialBar ? 0 : 2.5;

    return {
      ...options,
      colors: options.colors ?? APEX_COLORS,

      chart: {
        id:         forModal ? `${instanceId}-modal` : instanceId,
        type:       mapApexType(t),
        height:     "100%",
        width:      "100%",
        stacked:    options.stacked ?? false,
        background: "transparent",
        fontFamily: "inherit",
        animations: {
          enabled:          true,
          speed:            700,
          animateGradually: { enabled: true, delay: 80 },
        },
        toolbar: {
          show:  true,
          tools: {
            download:  true,
            selection: true,
            zoom:      true,
            zoomin:    true,
            zoomout:   true,
            pan:       true,
            reset:     true,
            // ── Expand icon — placed right after download (index: -1) ──────
            customIcons: forModal ? [] : [
              {
                icon:  EXPAND_ICON_SVG,
                index: -1,           // immediately after the download icon
                title: "Expand",
                class: "vizly-expand-icon",
                click: () => setIsModalOpen(true),
              },
            ],
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

      grid:   { ...APEX_THEME.grid,  ...options.grid  },

      stroke: {
        width: isMixed
          ? mixedTypes.map(mt => mt === "bar" || mt === "column" ? 0 : 2.5)
          : (isBar || isCircular || isPolarArea || isRadialBar || isGauge ? 0 : strokeWidth),
        curve:   "smooth",
        lineCap: "round",
        ...options.stroke,
      },

      markers: {
        size: isMixed
          ? mixedTypes.map(mt => mt === "line" ? 4 : mt === "area" ? 3 : 0)
          : markerSize,
        strokeWidth: 0,
        hover: {
          size: isMixed
            ? mixedTypes.map(mt => mt === "line" ? 6 : mt === "area" ? 5 : 0)
            : markerSize + 2,
        },
        ...options.markers,
      },

      fill: {
        opacity: isMixed
          ? mixedTypes.map(mt => mt === "area" ? 0.18 : 1)
          : isArea ? [0.18, 1] : 1,
        ...options.fill,
      },

      series:   finalSeries,
      labels:   resolvedLabels,

      xaxis: {
        type:       xAxisType,
        categories: resolvedCategories,
        position:   "bottom",
        ...APEX_THEME.xaxis,
        ...options.xaxis,
      },

      yaxis:      { ...APEX_THEME.yaxis,  ...options.yaxis  },
      legend:     { ...APEX_THEME.legend, ...options.legend },
      dataLabels: { enabled: false,       ...options.dataLabels },

      plotOptions: {
        ...options.plotOptions,
        bar: {
          horizontal:   !isMixed && (isFunnel || t === "rangebar" || t === "timeline" || isPyramid),
          isFunnel:     isFunnel || t === "conefunnel",
          distributed:  isFunnel || t === "conefunnel" || isWaterfall,
          isFunnelPlot: t === "conefunnel",
          borderRadius: isBar ? 4 : 0,
          columnWidth:  "58%",
          barHeight:    "60%",
          ...options.plotOptions?.bar,
          ...(isWaterfall && !options.plotOptions?.bar?.colors ? {
            colors: {
              ranges: [
                { from: -Infinity, to: -0.001, color: "#f43f5e" },
                { from: 0,         to: Infinity, color: "#10b981" },
              ],
            },
          } : {}),
        },
        radialBar: isGauge
          ? {
              startAngle: -135,
              endAngle:    135,
              hollow:      { size: "58%", background: "transparent" },
              track:       { background: "#f1f5f9", strokeWidth: "100%", margin: 4 },
              dataLabels: {
                name:  { show: true, offsetY: -10, fontSize: "13px", color: "#64748b" },
                value: { show: true, fontSize: "26px", fontWeight: 700, color: "#0f172a", formatter: (v: number) => `${v}%` },
              },
              ...options.plotOptions?.radialBar,
            }
          : {
              hollow:      { size: "30%", background: "transparent" },
              track:       { background: "#f1f5f9", strokeWidth: "100%" },
              dataLabels:  { name: { show: true }, value: { show: true }, total: { show: true, label: "Total" } },
              ...options.plotOptions?.radialBar,
            },
        pie: {
          donut: {
            size:   "55%",
            labels: {
              show:  true,
              total: { show: true, label: "Total", fontSize: "13px", color: "#64748b", fontFamily: "inherit" },
            },
          },
          ...options.plotOptions?.pie,
        },
        heatmap: {
          enableShades: true,
          colorScale:   { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] },
        },
      },

      title: {
        text:   (typeof title === "string" ? title : (title as any)?.text ?? options.title?.text) ?? "",
        align:  typeof title === "object"  ? (title as any).align : options.title?.align ?? "left",
        style: {
          fontSize:   "15px",
          fontWeight: "600",
          fontFamily: "inherit",
          color:      "#1e293b",
          ...(typeof title === "object" ? (title as any).style : {}),
        },
        margin:  12,
        offsetY: 4,
        ...options.title,
      },

      tooltip: {
        ...APEX_THEME.tooltip,
        shared:    !isRange && !isBoxPlot,
        intersect:  isRange  || isBoxPlot,
        ...options.tooltip,
      },

      theme: { mode: "light" as const },
    };
  };

  // ── Mount / update chart ────────────────────────────────────────────────────
  useEffect(() => {
    let isMounted = true;
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
      if (width > 0 && h > 0) { observer?.disconnect(); initChart(el); }
    };

    if (chartRef.current) {
      const { width, height: h } = chartRef.current.getBoundingClientRect();
      if (width > 0 && h > 0) initChart(chartRef.current);
      else { observer = new ResizeObserver(tryInit); observer.observe(chartRef.current); }
    }

    return () => {
      isMounted = false;
      observer?.disconnect();
      chartInstance.current?.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, type, options, title, resolvedHeight]);

  useImperativeHandle(ref, () => ({
    zoomIn:           () => chartInstance.current?.zoomX(20, 80),
    zoomOut:          () => chartInstance.current?.resetSeries(),
    reset:            () => chartInstance.current?.resetSeries(),
    toggleFullscreen: () => setIsModalOpen(prev => !prev),
  }));

  // ── Modal chart ref ─────────────────────────────────────────────────────────
  const modalChartRef      = useRef<HTMLDivElement>(null);
  const modalChartInstance = useRef<ApexCharts | null>(null);

  useEffect(() => {
    if (!isModalOpen || !modalChartRef.current) return;
    let cancelled = false;

    const timer = setTimeout(async () => {
      if (cancelled || !modalChartRef.current) return;
      if (modalChartInstance.current) {
        await modalChartInstance.current.destroy();
        modalChartInstance.current = null;
      }
      modalChartRef.current.innerHTML = "";
      const chart = new ApexCharts(modalChartRef.current, getChartConfig(true));
      modalChartInstance.current = chart;
      if (!cancelled) await chart.render();
    }, 80);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      modalChartInstance.current?.destroy();
      modalChartInstance.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <>
      {/* Main chart — full size in card */}
      <div
        ref={chartRef}
        style={{ height: "100%", width: "100%", overflow: "hidden" }}
      />

      {/* Modal with fresh ApexCharts instance */}
      <ChartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={typeof title === "string" ? title : (title as any)?.text}
      >
        <div
          ref={modalChartRef}
          style={{ width: "100%", height: "100%" }}
        />
      </ChartModal>
    </>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// VizlyChart — public API
// ApexCharts  → expand icon lives inside the toolbar (next to download)
// Other renderers → floating expand button overlay (top-right of container)
// ─────────────────────────────────────────────────────────────────────────────
const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title, renderer = "apexcharts" }, ref) => {

    const apexRef   = useRef<VizlyRef>(null);
    const titleText = typeof title === "string" ? title : (title as any)?.text ?? "";

    // For non-Apex renderers, manage modal state here
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      zoomIn:           () => apexRef.current?.zoomIn(),
      zoomOut:          () => apexRef.current?.zoomOut(),
      reset:            () => apexRef.current?.reset(),
      toggleFullscreen: () => apexRef.current?.toggleFullscreen(),
    }));

    // ── ApexCharts — toolbar icon handles expand, no extra wrapper needed ──
    if (renderer === "apexcharts" || !renderer) {
      return (
        <div style={{
          position: "relative",
          width:    "100%",
          height:   typeof height === "number" ? `${height}px` : height,
          overflow: "hidden",
        }}>
          <ApexRenderer
            ref={apexRef}
            data={data}
            type={type}
            options={options}
            resolvedHeight={height}
            title={title}
          />
        </div>
      );
    }

    // ── Recharts / ECharts / Plotly — floating button + shared modal ──────
    const renderInner = (modalHeight: number) => {
      const h = modalHeight > 0 ? modalHeight : height;

      if (renderer === "recharts") {
        return (
          <VizlyRecharts
            data={data} type={type} options={options} height={h} title={title}
          />
        );
      }
      if (renderer === "echarts") {
        return (
          <VizlyECharts
            data={data} type={type} options={options} height={h} title={title}
          />
        );
      }
      if (renderer === "plotlycharts") {
        return (
          <VizlyPlotly
            data={data} type={type} options={options} height={h} title={title}
          />
        );
      }
      return null;
    };

    return (
      <>
        {/* Card */}
        <div style={{
          position: "relative",
          width:    "100%",
          height:   typeof height === "number" ? `${height}px` : height,
          overflow: "hidden",
        }}>
          {renderInner(0)}

          {/* Floating expand button — top right */}
          <FloatingExpandButton onClick={() => setIsOpen(true)} />
        </div>

        {/* Modal */}
        <ChartModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={titleText}
        >
          {isOpen && renderInner(MODAL_CHART_HEIGHT)}
        </ChartModal>
      </>
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
//   useImperativeHandle,
// } from "react";
// import ApexCharts from "apexcharts";
// import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
// import { chartEngine } from "../utils/chartEngine";
// import { processChartData } from "../utils/transformMultiCharts";
// import { looksLikeDate } from "../utils/transformData";
// import VizlyRecharts from "./VizlyRecharts";
// import VizlyECharts from "./VizlyEcharts";
// import VizlyPlotly from "./VizlyPlotly";

// // ─── Counter for unique chart IDs ─────────────────────────────────────────────
// let _counter = 0;

// // ─── Types ────────────────────────────────────────────────────────────────────
// export interface VizlyProps {
//   data:      any[] | any[][];
//   type?:     string | string[];
//   options?:  any;
//   height?:   number | string;
//   title?:    string | { text: string; align?: "left" | "center" | "right"; style?: any };
//   renderer?: "apexcharts" | "recharts" | "echarts" | "plotlycharts";
// }

// export interface VizlyRef {
//   zoomIn:           () => void;
//   zoomOut:          () => void;
//   reset:            () => void;
//   toggleFullscreen: () => void;
// }

// // ─── Shared ApexCharts theme ──────────────────────────────────────────────────
// const APEX_COLORS = [
//   "#3b82f6", "#f59e0b", "#10b981", "#f43f5e",
//   "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6",
//   "#a855f7", "#0ea5e9",
// ];

// const APEX_THEME = {
//   tooltip: {
//     theme:  "dark",
//     style:  { fontSize: "13px", fontFamily: "inherit" },
//     x:      { show: true },
//     marker: { show: true },
//     fixed:  { enabled: false },
//   },
//   grid: {
//     borderColor:     "#f1f5f9",
//     strokeDashArray: 4,
//     xaxis:           { lines: { show: false } },
//     yaxis:           { lines: { show: true  } },
//     padding:         { left: 20, right: 20, bottom: 10, top: 0 },
//   },
//   xaxis: {
//     axisBorder: { show: false },
//     axisTicks:  { show: false },
//     labels:     { style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" } },
//   },
//   yaxis: {
//     labels: { style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" } },
//   },
//   legend: {
//     position:        "bottom"  as const,
//     horizontalAlign: "center"  as const,
//     fontSize:        "12px",
//     fontFamily:      "inherit",
//     labels:          { colors: "#64748b" },
//     markers:         { size: 6 },
//     itemMargin:      { horizontal: 10, vertical: 4 },
//   },
//   dataLabels: { enabled: false },
//   stroke:     { width: 2.5, curve: "smooth" as const },
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // ExpandButton — always-visible top-right button
// // ─────────────────────────────────────────────────────────────────────────────
// const ExpandButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     title="Expand"
//     style={{
//       position:       "absolute",
//       top:            8,
//       right:          8,
//       cursor:         "pointer",
      
//     }}
//   >
//     <BsArrowsAngleExpand size={18} color="#475569" />
//   </button>
// );


// const MODAL_CHART_HEIGHT = 520;

// const ChartModal: React.FC<{
//   isOpen:   boolean;
//   onClose:  () => void;
//   title?:   string;
//   children: React.ReactNode;
// }> = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;
//   return (
//     <>
//       <style>{`
//         @keyframes vizlyFadeIn  { from { opacity:0; } to { opacity:1; } }
//         @keyframes vizlyScaleUp { from { transform:scale(0.95); opacity:0; } to { transform:scale(1); opacity:1; } }
//       `}</style>

//       {/* Backdrop */}
//       <div
//         onClick={e => { if (e.target === e.currentTarget) onClose(); }}
//         style={{
//           position:             "fixed",
//           inset:                0,
//           backgroundColor:      "rgba(15,23,42,0.45)",
//           zIndex:               9999,
//           display:              "flex",
//           alignItems:           "center",
//           justifyContent:       "center",
//           backdropFilter:       "blur(12px)",
//           WebkitBackdropFilter: "blur(12px)",
//           animation:            "vizlyFadeIn 0.15s ease-out",
//         }}
//       >
//         {/* Modal panel */}
//         <div
//           style={{   
//             width:                "50%",
//             height:               "50%",
//             maxWidth:              500,
//             maxHeight:             500,
//             background:           "rgba(255,255,255,0.88)",
//             backdropFilter:       "blur(24px)",
//             WebkitBackdropFilter: "blur(24px)",
//             borderRadius:         "18px",
//             border:               "1px solid rgba(255,255,255,0.65)",
//             padding:              "44px 24px 24px",
//             position:             "relative",
//             boxShadow:            "0 24px 64px rgba(0,0,0,0.18)",
//             animation:            "vizlyScaleUp 0.3s cubic-bezier(0.16,1,0.3,1)",
//             overflow:             "hidden",
//           }}
//         >
//           {/* Title */}
//           {title && (
//             <div style={{
//               position:     "absolute",
//               top:          14,
//               left:         18,
//               fontSize:     13,
//               fontWeight:   600,
//               color:        "#475569",
//               fontFamily:   "inherit",
//               maxWidth:     "calc(100% - 70px)",
//               overflow:     "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace:   "nowrap",
//             }}>
//               {title}
//             </div>
//           )}

//           {/* Close */}
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             style={{
//               position:       "absolute",
//               top:            14,
//               right:          14,
//               cursor:         "pointer",
//             }}

//           >
//             <BsArrowsAngleContract size={18} color="#475569" />
//           </button>

//           {/* Chart */}
//           <div style={{ width: "100%", height: MODAL_CHART_HEIGHT }}>
//             {children}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // ChartWrapper — wraps ANY renderer with expand button + modal
// // ─────────────────────────────────────────────────────────────────────────────
// const ChartWrapper: React.FC<{
//   height:    number | string;
//   titleText: string;
//   renderChart: (modalHeight: number) => React.ReactNode;
// }> = ({ height, titleText, renderChart }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Card with expand button */}
//       <div style={{
//         position: "relative",
//         width:    "100%",
//         height:   typeof height === "number" ? `${height}px` : height,
//         overflow: "hidden",
//       }}>
//         {renderChart(0)}
//         <ExpandButton onClick={() => setIsOpen(true)} />
//       </div>

//       {/* Modal — renders a fresh instance of the same chart at MODAL_CHART_HEIGHT */}
//       <ChartModal
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         title={titleText}
//       >
//         {isOpen && renderChart(MODAL_CHART_HEIGHT)}
//       </ChartModal>
//     </>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // ApexRenderer — pure chart, no expand logic (handled by ChartWrapper)
// // ─────────────────────────────────────────────────────────────────────────────
// const ApexRenderer = forwardRef<VizlyRef, Omit<VizlyProps, "renderer"> & { resolvedHeight: number | string }>(
//   ({ data, type, options = {}, resolvedHeight, title }, ref) => {
//     const chartRef      = useRef<HTMLDivElement>(null);
//     const chartInstance = useRef<ApexCharts | null>(null);
//     const instanceId    = useMemo(() => `vizly-${++_counter}`, []);

//     // ── Type mapper ───────────────────────────────────────────────────────────
//     const mapApexType = (t: string) => {
//       const MAP: Record<string, string> = {
//         column: "bar", rangebar: "rangeBar", boxplot: "boxPlot",
//         polararea: "polarArea", radialbar: "radialBar", waterfall: "bar",
//         histogram: "bar", pyramid: "bar", conefunnel: "bar", funnel: "bar",
//         gauge: "radialBar", nightingale: "polarArea", sunburst: "treemap",
//         sankey: "bar", calendar: "heatmap", timeline: "rangeBar",
//       };
//       return (MAP[String(t).toLowerCase()] ?? t) as any;
//     };

//     // ── Config builder ────────────────────────────────────────────────────────
//     const getChartConfig = () => {
//       const processed = processChartData(type, data);
//       if (!processed || processed.length === 0) return { series: [] };

//       const { type: dType, series, labels, categories } = processed[0];
//       const t      = String(dType).toLowerCase();
//       const engine = chartEngine[t] || "xy";

//       const typeArray  = Array.isArray(type) ? (type as string[]) : [t];
//       const isMixed    = Array.isArray(data[0]) && typeArray.length > 1;
//       const mixedTypes = isMixed ? typeArray.map(mt => String(mt).toLowerCase()) : [t];

//       const isCircular    = engine === "circular";
//       const isRadialBar   = t === "radialbar";
//       const isPolarArea   = t === "polararea" || t === "nightingale";
//       const isRadar       = t === "radar";
//       const isFunnel      = t === "funnel" || t === "conefunnel";
//       const isPyramid     = t === "pyramid";
//       const isRange       = engine === "range";
//       const isGauge       = t === "gauge";
//       const isWaterfall   = t === "waterfall";
//       const isCandlestick = t === "candlestick";
//       const isBoxPlot     = t === "boxplot";
//       const isBar         = t === "bar" || t === "column";
//       const isLine        = t === "line";
//       const isArea        = t === "area";

//       let finalSeries: any = series;

//       if (isCircular || isPolarArea) {
//         if (Array.isArray(series) && series.length > 0) {
//           if (typeof series[0] === "object" && series[0]?.data)
//             finalSeries = series[0].data;
//           else if (typeof series[0] === "object" && !Array.isArray(series[0]))
//             finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
//         }
//       }
//       if (isRadialBar && Array.isArray(series) && series.length > 0) {
//         if (typeof series[0] === "object" && series[0]?.data)
//           finalSeries = series[0].data;
//         else if (typeof series[0] === "object" && !Array.isArray(series[0]))
//           finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
//       }
//       if (isGauge) {
//         finalSeries = (Array.isArray(finalSeries) ? finalSeries : [finalSeries])
//           .map((v: any) => { const n = Number(v); return isNaN(n) ? 0 : Math.min(100, Math.max(0, n)); });
//       }
//       if (isRadar && Array.isArray(series) && series.length > 0) {
//         const s0 = series[0];
//         if (s0?.data && Array.isArray(s0.data) && typeof s0.data[0] === "number") {
//           finalSeries = [{
//             name: s0.name ?? "Series 1",
//             data: s0.data.map((val: number, i: number) => ({
//               x: categories[i] ?? labels[i] ?? `Item ${i + 1}`, y: val,
//             })),
//           }];
//         }
//       }

//       const allXY =
//         Array.isArray(finalSeries) && finalSeries.length > 0 &&
//         Array.isArray(finalSeries[0]?.data) &&
//         finalSeries[0]?.data?.[0] !== null &&
//         typeof finalSeries[0]?.data?.[0] === "object" &&
//         "x" in (finalSeries[0]?.data?.[0] ?? {});

//       const resolvedLabels: string[] =
//         isCircular || isRadialBar || isPolarArea
//           ? (labels?.length ? labels : categories?.length ? categories : [])
//           : [];

//       const resolvedCategories: string[] = (() => {
//         if (allXY || isRadar || isCircular || isPolarArea || isRadialBar || isFunnel || isRange) return [];
//         return categories?.length ? categories : labels?.length ? labels : [];
//       })();

//       const xAxisType = isCandlestick ? "datetime"
//         : (isRange && !isBoxPlot
//             ? (Array.isArray(series) && looksLikeDate(String(series[0]?.data?.[0]?.x ?? "")) ? "datetime" : "numeric")
//             : "category");

//       const markerSize  = isLine ? 4 : isArea ? 3 : 0;
//       const strokeWidth = isBar || isGauge || isCircular || isPolarArea || isRadialBar ? 0 : 2.5;

//       return {
//         ...options,
//         colors: options.colors ?? APEX_COLORS,
//         chart: {
//           id:         `vizly-${instanceId}`,
//           type:       mapApexType(t),
//           height:     "100%",
//           width:      "100%",
//           stacked:    options.stacked ?? false,
//           background: "transparent",
//           fontFamily: "inherit",
//           animations: { enabled: true, speed: 700, animateGradually: { enabled: true, delay: 80 } },
//           toolbar: {
//             show: true,
//             tools: { download: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, customIcons: [] },
//             export: { csv: { filename: "chart-data" }, svg: { filename: "chart" }, png: { filename: "chart" } },
//           },
//           dropShadow: { enabled: false },
//           ...options.chart,
//         },
//         grid:   { ...APEX_THEME.grid,  ...options.grid  },
//         stroke: {
//           width: isMixed
//             ? mixedTypes.map(mt => mt === "bar" || mt === "column" ? 0 : 2.5)
//             : (isBar || isCircular || isPolarArea || isRadialBar || isGauge ? 0 : strokeWidth),
//           curve: "smooth", lineCap: "round", ...options.stroke,
//         },
//         markers: {
//           size: isMixed ? mixedTypes.map(mt => mt === "line" ? 4 : mt === "area" ? 3 : 0) : markerSize,
//           strokeWidth: 0,
//           hover: { size: isMixed ? mixedTypes.map(mt => mt === "line" ? 6 : mt === "area" ? 5 : 0) : markerSize + 2 },
//           ...options.markers,
//         },
//         fill: {
//           opacity: isMixed ? mixedTypes.map(mt => mt === "area" ? 0.18 : 1) : isArea ? [0.18, 1] : 1,
//           ...options.fill,
//         },
//         series:   finalSeries,
//         labels:   resolvedLabels,
//         xaxis:    { type: xAxisType, categories: resolvedCategories, position: "bottom", ...APEX_THEME.xaxis, ...options.xaxis },
//         yaxis:    { ...APEX_THEME.yaxis,  ...options.yaxis  },
//         legend:   { ...APEX_THEME.legend, ...options.legend },
//         dataLabels: { enabled: false, ...options.dataLabels },
//         plotOptions: {
//           ...options.plotOptions,
//           bar: {
//             horizontal:   !isMixed && (isFunnel || t === "rangebar" || t === "timeline" || isPyramid),
//             isFunnel:     isFunnel || t === "conefunnel",
//             distributed:  isFunnel || t === "conefunnel" || isWaterfall,
//             isFunnelPlot: t === "conefunnel",
//             borderRadius: isBar ? 4 : 0,
//             columnWidth:  "58%",
//             barHeight:    "60%",
//             ...options.plotOptions?.bar,
//             ...(isWaterfall && !options.plotOptions?.bar?.colors ? {
//               colors: { ranges: [{ from: -Infinity, to: -0.001, color: "#f43f5e" }, { from: 0, to: Infinity, color: "#10b981" }] },
//             } : {}),
//           },
//           radialBar: isGauge
//             ? { startAngle: -135, endAngle: 135, hollow: { size: "58%", background: "transparent" }, track: { background: "#f1f5f9", strokeWidth: "100%", margin: 4 }, dataLabels: { name: { show: true, offsetY: -10, fontSize: "13px", color: "#64748b" }, value: { show: true, fontSize: "26px", fontWeight: 700, color: "#0f172a", formatter: (v: number) => `${v}%` } }, ...options.plotOptions?.radialBar }
//             : { hollow: { size: "30%", background: "transparent" }, track: { background: "#f1f5f9", strokeWidth: "100%" }, dataLabels: { name: { show: true }, value: { show: true }, total: { show: true, label: "Total" } }, ...options.plotOptions?.radialBar },
//           pie: { donut: { size: "55%", labels: { show: true, total: { show: true, label: "Total", fontSize: "13px", color: "#64748b", fontFamily: "inherit" } } }, ...options.plotOptions?.pie },
//           heatmap: { enableShades: true, colorScale: { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] } },
//         },
//         title: {
//           text:   (typeof title === "string" ? title : (title as any)?.text ?? options.title?.text) ?? "",
//           align:  typeof title === "object" ? (title as any).align : options.title?.align ?? "left",
//           style:  { fontSize: "15px", fontWeight: "600", fontFamily: "inherit", color: "#1e293b", ...(typeof title === "object" ? (title as any).style : {}) },
//           margin: 12, offsetY: 4, ...options.title,
//         },
//         tooltip: { ...APEX_THEME.tooltip, shared: !isRange && !isBoxPlot, intersect: isRange || isBoxPlot, ...options.tooltip },
//         theme: { mode: "light" as const },
//       };
//     };

//     // ── Mount chart ───────────────────────────────────────────────────────────
//     useEffect(() => {
//       let isMounted = true;
//       let observer: ResizeObserver | null = null;

//       const initChart = async (el: HTMLDivElement) => {
//         if (chartInstance.current) { await chartInstance.current.destroy(); chartInstance.current = null; }
//         if (!isMounted || !el) return;
//         el.innerHTML = "";
//         const chart = new ApexCharts(el, getChartConfig());
//         chartInstance.current = chart;
//         if (!isMounted) { chart.destroy(); return; }
//         await chart.render();
//       };

//       const tryInit = () => {
//         const el = chartRef.current;
//         if (!el) return;
//         const { width, height: h } = el.getBoundingClientRect();
//         if (width > 0 && h > 0) { observer?.disconnect(); initChart(el); }
//       };

//       if (chartRef.current) {
//         const { width, height: h } = chartRef.current.getBoundingClientRect();
//         if (width > 0 && h > 0) initChart(chartRef.current);
//         else { observer = new ResizeObserver(tryInit); observer.observe(chartRef.current); }
//       }

//       return () => { isMounted = false; observer?.disconnect(); chartInstance.current?.destroy(); };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [data, type, options, title, resolvedHeight]);

//     useImperativeHandle(ref, () => ({
//       zoomIn:           () => chartInstance.current?.zoomX(20, 80),
//       zoomOut:          () => chartInstance.current?.resetSeries(),
//       reset:            () => chartInstance.current?.resetSeries(),
//       toggleFullscreen: () => {},
//     }));

//     return <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />;
//   }
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // VizlyChart — public API
// // Adds universal expand button + modal to every renderer
// // ─────────────────────────────────────────────────────────────────────────────
// const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
//   ({ data, type, options = {}, height = 350, title, renderer = "apexcharts" }, ref) => {

//     const apexRef    = useRef<VizlyRef>(null);
//     const titleText  = typeof title === "string" ? title : (title as any)?.text ?? "";

//     useImperativeHandle(ref, () => ({
//       zoomIn:           () => apexRef.current?.zoomIn(),
//       zoomOut:          () => apexRef.current?.zoomOut(),
//       reset:            () => apexRef.current?.reset(),
//       toggleFullscreen: () => {},
//     }));

//     // ── Recharts ──────────────────────────────────────────────────────────────
//     if (renderer === "recharts") {
//       return (
//         <ChartWrapper height={height} titleText={titleText} renderChart={mh => (
//           <VizlyRecharts
//             data={data} type={type} options={options}
//             height={mh > 0 ? mh : height}
//             title={title}
//           />
//         )} />
//       );
//     }

//     // ── ECharts ───────────────────────────────────────────────────────────────
//     if (renderer === "echarts") {
//       return (
//         <ChartWrapper height={height} titleText={titleText} renderChart={mh => (
//           <VizlyECharts
//             data={data} type={type} options={options}
//             height={mh > 0 ? mh : height}
//             title={title}
//           />
//         )} />
//       );
//     }

//     // ── Plotly ────────────────────────────────────────────────────────────────
//     if (renderer === "plotlycharts") {
//       return (
//         <ChartWrapper height={height} titleText={titleText} renderChart={mh => (
//           <VizlyPlotly
//             data={data} type={type} options={options}
//             height={mh > 0 ? mh : height}
//             title={title}
//           />
//         )} />
//       );
//     }

//     // ── ApexCharts (default) ──────────────────────────────────────────────────
//     return (
//       <ChartWrapper height={height} titleText={titleText} renderChart={mh => (
//         <ApexRenderer
//           ref={mh > 0 ? undefined : apexRef}
//           data={data} type={type} options={options}
//           resolvedHeight={mh > 0 ? mh : height}
//           title={title}
//         />
//       )} />
//     );
//   }
// );

// export default VizlyChart;


// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useMemo,
//   forwardRef,
//   useImperativeHandle,
// } from "react";
// import ApexCharts from "apexcharts";
// import ReactDOMServer from "react-dom/server";
// import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
// import { chartEngine } from "../utils/chartEngine";
// import { processChartData } from "../utils/transformMultiCharts";
// import { looksLikeDate } from "../utils/transformData";
// import VizlyRecharts from "./VizlyRecharts";
// import VizlyECharts from "./VizlyEcharts";
// import VizlyPlotly from "./VizlyPlotly";

// // ─── Global expand handler registry ──────────────────────────────────────────
// const _handlers = new Map<string, () => void>();
// if (typeof window !== "undefined") {
//   (window as any).__vizlyOpen = (id: string) => _handlers.get(id)?.();
// }
// let _counter = 0;

// // ─── Types ────────────────────────────────────────────────────────────────────
// export interface VizlyProps {
//   data:      any[] | any[][];
//   type?:     string | string[];
//   options?:  any;
//   height?:   number | string;
//   title?:    string | { text: string; align?: "left" | "center" | "right"; style?: any };
//   renderer?: "apexcharts" | "recharts" | "echarts" | "plotlycharts";
// }

// export interface VizlyRef {
//   zoomIn:          () => void;
//   zoomOut:         () => void;
//   reset:           () => void;
//   toggleFullscreen:() => void;
// }

// // ─── Shared ApexCharts theme ──────────────────────────────────────────────────
// const APEX_COLORS = [
//   "#3b82f6", "#f59e0b", "#10b981", "#f43f5e",
//   "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6",
//   "#a855f7", "#0ea5e9",
// ];

// const APEX_THEME = {
//   // Tooltip
//   tooltip: {
//     theme:      "dark",
//     style:      { fontSize: "13px", fontFamily: "inherit" },
//     x:          { show: true },
//     y:          { formatter: undefined },
//     marker:     { show: true },
//     fixed:      { enabled: false },
//   },
//   // Grid
//   grid: {
//     borderColor:  "#f1f5f9",
//     strokeDashArray: 4,
//     xaxis:        { lines: { show: false } },
//     yaxis:        { lines: { show: true  } },
//     padding:      { left: 20, right: 20, bottom: 10, top: 0 },
//   },
//   // Axes
//   xaxis: {
//     axisBorder: { show: false },
//     axisTicks:  { show: false },
//     labels: {
//       style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" },
//     },
//   },
//   yaxis: {
//     labels: {
//       style: { colors: "#94a3b8", fontSize: "12px", fontFamily: "inherit" },
//     },
//   },
//   // Legend
//   legend: {
//     position:        "bottom" as const,
//     horizontalAlign: "center" as const,
//     fontSize:        "12px",
//     fontFamily:      "inherit",
//     labels:          { colors: "#64748b" },
//     markers:         { size: 6 },
//     itemMargin:      { horizontal: 10, vertical: 4 },
//   },
//   // Data labels
//   dataLabels: { enabled: false },
//   // Stroke
//   stroke: {
//     width: 2.5,
//     curve: "smooth" as const,
//   },
// };

// // ─── ApexRenderer ─────────────────────────────────────────────────────────────
// const ApexRenderer = forwardRef<VizlyRef, Omit<VizlyProps, "renderer">>(
//   ({ data, type, options = {}, height = 350, title }, ref) => {
//     const chartRef      = useRef<HTMLDivElement>(null);
//     const modalChartRef = useRef<HTMLDivElement>(null);
//     const chartInstance = useRef<ApexCharts | null>(null);
//     const modalInstance = useRef<ApexCharts | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const instanceId = useMemo(() => `vizly-${++_counter}`, []);

//     useEffect(() => {
//       _handlers.set(instanceId, () => setIsModalOpen(true));
//       return () => { _handlers.delete(instanceId); };
//     }, [instanceId]);

//     const expandIconString = useMemo(
//       () =>
//         ReactDOMServer.renderToString(
//           <BsArrowsAngleExpand
//             size={14}
//             style={{ color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }}
//           />
//         ),
//       []
//     );

//     // ── Type mapper ───────────────────────────────────────────────────────────
//     const mapApexType = (t: string) => {
//       const s = String(t).toLowerCase();
//       const MAP: Record<string, string> = {
//         column:      "bar",
//         rangebar:    "rangeBar",
//         boxplot:     "boxPlot",
//         polararea:   "polarArea",
//         radialbar:   "radialBar",
//         waterfall:   "bar",
//         histogram:   "bar",
//         pyramid:     "bar",
//         conefunnel:  "bar",
//         funnel:      "bar",
//         gauge:       "radialBar",
//         nightingale: "polarArea",
//         sunburst:    "treemap",
//         sankey:      "bar",
//         calendar:    "heatmap",
//         timeline:    "rangeBar",
//       };
//       return (MAP[s] ?? s) as any;
//     };
    
    
//     // ── Config builder ────────────────────────────────────────────────────────
//     const getChartConfig = (isModal: boolean) => {
//       const processed = processChartData(type, data);
//       if (!processed || processed.length === 0) return { series: [] };

//       const { type: dType, series, labels, categories } = processed[0];
//       const t      = String(dType).toLowerCase();
//       const typeArray = Array.isArray(type) ? (type as string[]) : [t];
//       const isMixed = Array.isArray(data[0]) && typeArray.length > 1;
//       const mixedTypes = isMixed
//       ? typeArray.map(t => String(t).toLowerCase())
//       : [t];
//       const engine = chartEngine[t] || "xy";

//       const isCircular    = engine === "circular";
//       const isRadialBar   = t === "radialbar";
//       const isPolarArea   = t === "polararea" || t === "nightingale";
//       const isRadar       = t === "radar";
//       const isFunnel      = t === "funnel" || t === "conefunnel";
//       const isPyramid     = t === "pyramid";
//       const isRange       = engine === "range";
//       const isGauge       = t === "gauge";
//       const isWaterfall   = t === "waterfall";
//       const isCandlestick = t === "candlestick";
//       const isBoxPlot     = t === "boxplot";
//       const isBar         = t === "bar" || t === "column";
//       const isLine        = t === "line";
//       const isArea        = t === "area";

//       // ── Series unwrapping ────────────────────────────────────────────────
//       let finalSeries: any = series;

//       if (isCircular || isPolarArea) {
//         if (Array.isArray(series) && series.length > 0) {
//           if (typeof series[0] === "object" && series[0]?.data) {
//             finalSeries = series[0].data;
//           } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
//             finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
//           }
//         }
//       }

//       if (isRadialBar) {
//         if (Array.isArray(series) && series.length > 0) {
//           if (typeof series[0] === "object" && series[0]?.data) {
//             finalSeries = series[0].data;
//           } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
//             finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
//           }
//         }
//       }

//       if (isGauge) {
//         finalSeries = (Array.isArray(finalSeries) ? finalSeries : [finalSeries]).map(
//           (v: any) => {
//             const n = Number(v);
//             return isNaN(n) ? 0 : Math.min(100, Math.max(0, n));
//           }
//         );
//       }

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

//       // ── FIX: detect mixed/xy series and clear categories to prevent misalignment
//       const allXY =
//         Array.isArray(finalSeries) &&
//         finalSeries.length > 0 &&
//         Array.isArray(finalSeries[0]?.data) &&
//         finalSeries[0]?.data?.[0] !== null &&
//         typeof finalSeries[0]?.data?.[0] === "object" &&
//         "x" in (finalSeries[0]?.data?.[0] ?? {});

//       // ── Resolved labels/categories ───────────────────────────────────────
//       const resolvedLabels: string[] =
//         isCircular || isRadialBar || isPolarArea
//           ? labels?.length ? labels : categories?.length ? categories : []
//           : [];

//       const resolvedCategories: string[] = (() => {
//         if (allXY)      return []; // {x,y} series — never set categories
//         if (isRadar)    return [];
//         if (isCircular) return [];
//         if (isPolarArea)return [];
//         if (isRadialBar)return [];
//         if (isFunnel)   return [];
//         if (isRange)    return [];
//         return categories?.length ? categories : labels?.length ? labels : [];
//       })();

//       // ── X-axis type ──────────────────────────────────────────────────────
//       const xAxisType = (() => {
//         if (isCandlestick) return "datetime";
//         if (isRange && !isBoxPlot) {
//           const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
//           return firstX && looksLikeDate(String(firstX)) ? "datetime" : "numeric";
//         }
//         return "category";
//       })();

//       // ── Marker / stroke per type ─────────────────────────────────────────
//       const markerSize  = isLine ? 4 : isArea ? 3 : 0;
//       const strokeWidth = isBar || isGauge || isCircular || isPolarArea || isRadialBar
//         ? 0 : 2.5;

//       // ── Build config ─────────────────────────────────────────────────────
//       return {
//         // Spread user options first so our overrides win
//         ...options,

//         colors: options.colors ?? APEX_COLORS,

//         chart: {
//           id:         isModal ? "vizly-modal-chart" : "vizly-main-chart",
//           type:       mapApexType(t),
//           height:     "100%",
//           width:      "100%",
//           stacked:    options.stacked ?? false,
//           stackType:  options.stackType ?? "normal",
//           background: "transparent",
//           fontFamily: "inherit",
//           animations: {
//             enabled:  true,
//             speed:    700,
//             animateGradually: { enabled: true, delay: 80 },
//             dynamicAnimation: { enabled: true, speed: 350 },
//           },
//           toolbar: {
//             show: true,
//             tools: {
//               download:  true,
//               selection: true,
//               zoom:      true,
//               zoomin:    true,
//               zoomout:   true,
//               pan:       true,
//               reset:     true,
//               customIcons: isModal
//                 ? []
//                 : [{
//                     icon:  expandIconString,
//                     index: 6,
//                     title: "Expand",
//                     class: "custom-icon",
//                     click: () => setIsModalOpen(true),
//                   }],
//             },
//             export: {
//               csv: { filename: "chart-data" },
//               svg: { filename: "chart"      },
//               png: { filename: "chart"      },
//             },
//           },
//           dropShadow: { enabled: false },
//           ...options.chart,
//         },

//         // Grid
//         grid: {
//           ...APEX_THEME.grid,
//           ...options.grid,
//         },

//         // Stroke
//         stroke: {
//           width: isMixed
//             ? mixedTypes.map(mt =>
//                 mt === "bar" || mt === "column" ? 0 : 2.5
//               )
//             : (isBar || isCircular || isPolarArea || isRadialBar || isGauge ? 0 : strokeWidth),
//           curve:   "smooth",
//           lineCap: "round",
//           ...options.stroke,
//         },

//         // Markers
//         markers: {
//           size: isMixed
//             ? mixedTypes.map(mt =>
//                 mt === "line" ? 4 : mt === "area" ? 3 : 0
//               )
//             : markerSize,
//           strokeWidth: 0,
//           hover: {
//             size: isMixed
//               ? mixedTypes.map(mt =>
//                   mt === "line" ? 6 : mt === "area" ? 5 : 0
//                 )
//               : markerSize + 2,
//           },
//           ...options.markers,
//         },

//         // Fill
//         fill: {
//           opacity: isMixed
//             ? mixedTypes.map(mt => mt === "area" ? 0.18 : 1)
//             : isArea ? [0.18, 1] : 1,
//           ...options.fill,
//         },

//         // Series
//         series:     finalSeries,
//         labels:     resolvedLabels,

//         // X-axis
//         xaxis: {
//           type:        xAxisType,
//           categories:  resolvedCategories,
//           position:   "bottom", 
//           ...APEX_THEME.xaxis,
//           ...options.xaxis,
//         },

//         // Y-axis
//         yaxis: {
//           ...APEX_THEME.yaxis,
//           ...options.yaxis,
//         },

//         // Legend
//         legend: {
//           ...APEX_THEME.legend,
//           ...options.legend,
//         },

//         // Data labels (off by default)
//         dataLabels: {
//           enabled: false,
//           ...options.dataLabels,
//         },

//         // Plot options
//         plotOptions: {
//           ...options.plotOptions,
//           bar: {
//             horizontal: !isMixed && (isFunnel || t === "rangebar" || t === "timeline" || isPyramid),
//             isFunnel:      isFunnel || t === "conefunnel",
//             distributed:   isFunnel || t === "conefunnel" || isWaterfall,
//             isFunnelPlot:  t === "conefunnel",
//             borderRadius:  isBar ? 4 : 0,
//             columnWidth:   "58%",
//             barHeight:     "60%",
//             ...options.plotOptions?.bar,
//             ...(isWaterfall && !options.plotOptions?.bar?.colors
//               ? {
//                   colors: {
//                     ranges: [
//                       { from: -Infinity, to: -0.001, color: "#f43f5e" },
//                       { from: 0,         to: Infinity, color: "#10b981" },
//                     ],
//                   },
//                 }
//               : {}),
//           },
//           radialBar: isGauge
//             ? {
//                 startAngle: -135,
//                 endAngle:    135,
//                 hollow:      { size: "58%", background: "transparent" },
//                 track: {
//                   background:  "#f1f5f9",
//                   strokeWidth: "100%",
//                   margin:      4,
//                 },
//                 dataLabels: {
//                   name:  { show: true,  offsetY: -10, fontSize: "13px", color: "#64748b" },
//                   value: {
//                     show:       true,
//                     fontSize:   "26px",
//                     fontWeight: 700,
//                     color:      "#0f172a",
//                     formatter:  (val: number) => `${val}%`,
//                   },
//                 },
//                 ...options.plotOptions?.radialBar,
//               }
//             : {
//                 hollow:      { size: "30%", background: "transparent" },
//                 track:       { background: "#f1f5f9", strokeWidth: "100%" },
//                 dataLabels: {
//                   name:  { show: true  },
//                   value: { show: true  },
//                   total: { show: true, label: "Total" },
//                 },
//                 ...options.plotOptions?.radialBar,
//               },
//           pie: {
//             donut: {
//               size:   "55%",
//               labels: {
//                 show:  true,
//                 total: {
//                   show:      true,
//                   showAlways: false,
//                   label:     "Total",
//                   fontSize:  "13px",
//                   color:     "#64748b",
//                   fontFamily: "inherit",
//                 },
//               },
//             },
//             ...options.plotOptions?.pie,
//           },
//           heatmap: {
//             enableShades: true,
//             colorScale:   { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] },
//           },
//         },

//         // Title
//         title: {
//           text:    (typeof title === "string" ? title : title?.text ?? options.title?.text) ?? "",
//           align:   typeof title === "object" ? title.align : options.title?.align ?? "left",
//           style: {
//             fontSize:   "15px",
//             fontWeight: "600",
//             fontFamily: "inherit",
//             color:      "#1e293b",
//             ...(typeof title === "object" ? title.style : {}),
//           },
//           margin:  12,
//           offsetY: 4,
//           ...options.title,
//         },

//         // Tooltip
//         tooltip: {
//           ...APEX_THEME.tooltip,
//           shared:    !isRange && !isBoxPlot,
//           intersect: isRange  || isBoxPlot,
//           ...options.tooltip,
//         },

//         // Theme
//         theme: { mode: "light" as const },
//       };
//     };

//     // ── Mount / update chart ──────────────────────────────────────────────────
//     useEffect(() => {
//       let isMounted  = true;
//       let observer: ResizeObserver | null = null;

//       const initChart = async (el: HTMLDivElement) => {
//         if (chartInstance.current) {
//           await chartInstance.current.destroy();
//           chartInstance.current = null;
//         }
//         if (!isMounted || !el) return;
//         el.innerHTML = "";
//         const chart = new ApexCharts(el, getChartConfig(false));
//         chartInstance.current = chart;
//         if (!isMounted) { chart.destroy(); return; }
//         await chart.render();
//       };

//       const tryInit = () => {
//         const el = chartRef.current;
//         if (!el) return;
//         const { width, height: h } = el.getBoundingClientRect();
//         if (width > 0 && h > 0) {
//           observer?.disconnect();
//           initChart(el);
//         }
//       };

//       if (chartRef.current) {
//         const { width, height: h } = chartRef.current.getBoundingClientRect();
//         if (width > 0 && h > 0) {
//           initChart(chartRef.current);
//         } else {
//           observer = new ResizeObserver(tryInit);
//           observer.observe(chartRef.current);
//         }
//       }

//       return () => {
//         isMounted = false;
//         observer?.disconnect();
//         chartInstance.current?.destroy();
//       };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [data, type, options, title]);

//     // ── Modal chart ───────────────────────────────────────────────────────────
//     useEffect(() => {
//       if (isModalOpen && modalChartRef.current) {
//         const timer = setTimeout(async () => {
//           if (modalInstance.current) await modalInstance.current.destroy();
//           modalChartRef.current!.innerHTML = "";
//           modalInstance.current = new ApexCharts(
//             modalChartRef.current!,
//             getChartConfig(true)
//           );
//           await modalInstance.current.render();
//         }, 350);
//         return () => clearTimeout(timer);
//       }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [isModalOpen, data, type, options, title]);

//     useImperativeHandle(ref, () => ({
//       zoomIn:          () => chartInstance.current?.zoomX(20, 80),
//       zoomOut:         () => chartInstance.current?.resetSeries(),
//       reset:           () => chartInstance.current?.resetSeries(),
//       toggleFullscreen:() => setIsModalOpen(prev => !prev),
//     }));

//     // ── Render ────────────────────────────────────────────────────────────────
//     return (
//       <>
//         <div
//           style={{
//             height:   typeof height === "number" ? `${height}px` : height,
//             width:    "100%",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             ref={chartRef}
//             style={{ height: "100%", width: "100%", overflow: "hidden" }}
//           />
//         </div>

//         {/* ── Fullscreen modal ─────────────────────────────────────────────── */}
//         {isModalOpen && (
//           <div
//             style={{
//               position:        "fixed",
//               inset:           0,
//               backgroundColor: "rgba(15,23,42,0.45)",
//               display:         "flex",
//               alignItems:      "center",
//               justifyContent:  "center",
//               zIndex:          9999,
//               backdropFilter:  "blur(12px)",
//               animation:       "vizlyFadeIn 0.15s ease-out",
//             }}
//           >
//             <style>{`
//               @keyframes vizlyFadeIn  { from { opacity:0; }                         to { opacity:1; } }
//               @keyframes vizlyScaleUp { from { transform:scale(0.93); opacity:0; }  to { transform:scale(1); opacity:1; } }
//             `}</style>

//             <div
//               style={{
//                 width:        "50%",
//                 height:       "50%",
//                 maxWidth:     500,
//                 maxHeight:    500,
//                 background:   "rgba(255,255,255,0.82)",       // ← transparent/glass
//                 backdropFilter: "blur(20px)",
//                 WebkitBackdropFilter: "blur(20px)",
//                 borderRadius: "20px",
//                 padding:      "25px 25px 20px",
//                 position:     "relative",
//                 boxShadow:    "0 20px 60px rgba(0,0,0,0.2)",
//                 animation:    "vizlyScaleUp 0.35s cubic-bezier(0.16,1,0.3,1)",
//                 display:      "flex",
//                 flexDirection:"column",
//               }}
//             >
//               {/* Close button */} 
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 aria-label="Close fullscreen"
//                 style={{
//                   position:   "absolute",
//                   top:        14,
//                   right:      14,
//                   cursor:     "pointer",
//                 }}
//                 onMouseEnter={e => (e.currentTarget.style.background = "#e2e8f0")}
//                 onMouseLeave={e => (e.currentTarget.style.background = "#f1f5f9")}
//               >
//                 <BsArrowsAngleContract size={18} color="#475569" />
//               </button>

//               <div
//                 ref={modalChartRef}
//                 style={{ flex: 1, width: "100%", minHeight: 0 }}
//               />
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// );

// // ─── VizlyChart (router) ──────────────────────────────────────────────────────
// const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
//   ({ data, type, options = {}, height = 350, title, renderer = "apexcharts" }, ref) => {
//     if (renderer === "recharts") {
//       return (
//         <VizlyRecharts
//           data={data} type={type} options={options} height={height} title={title}
//         />
//       );
//     }

//     if (renderer === "echarts") {
//       return (
//         <VizlyECharts
//           data={data} type={type} options={options} height={height} title={title}
//         />
//       );
//     }

//     if (renderer === "plotlycharts") {
//       return (
//         <VizlyPlotly
//           data={data} type={type} options={options} height={height} title={title}
//         />
//       );
//     }

//     return (
//       <ApexRenderer
//         data={data} type={type} options={options} height={height} title={title}
//         ref={ref}
//       />
//     );
//   }
// );

// export default VizlyChart;


