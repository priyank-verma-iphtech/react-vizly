import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle
} from "react";
import ApexCharts from "apexcharts";
import ReactDOMServer from "react-dom/server";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { chartEngine } from "../utils/chartEngine";
import { processChartData } from "../utils/transformMultiCharts";
import { looksLikeDate } from "../utils/transformData";
import VizlyRecharts from "./VizlyRecharts";
import VizlyECharts  from "./VizlyEcharts";
import VizlyPlotly from "./VizlyPlotly";

// 1
const _handlers = new Map<string, () => void>();
if (typeof window !== "undefined") {
  (window as any).__vizlyOpen = (id: string) => _handlers.get(id)?.();
}
let _counter = 0;

export interface VizlyProps {
  data: any[] | any[][];
  type?: string | string[];
  options?: any;
  height?: number | string;
  title?: string | { text: string; align?: "left" | "center" | "right"; style?: any };
  renderer?: "apexcharts" | "recharts" | "echarts" | "plotlycharts";
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  toggleFullscreen: () => void;
}


const ApexRenderer = forwardRef<VizlyRef, Omit<VizlyProps, "renderer">>(
  ({ data, type, options = {}, height = 350, title }, ref) => {

    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 2
    const instanceId = useMemo(() => `vizly-${++_counter}`, []);

    // FIX 1b — keep registry fresh every render so handler is never stale
    useEffect(() => {
      _handlers.set(instanceId, () => setIsModalOpen(true));
      return () => { _handlers.delete(instanceId); };
    }, [instanceId]);

    const expandIconString = useMemo(
      () => ReactDOMServer.renderToString(
        <BsArrowsAngleExpand size={14} style={{ color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }} />
      ), []
    );

    

    const mapApexType = (t: string) => {
      const typeStr = String(t).toLowerCase();
      if (typeStr === "column")    return "bar";
      if (typeStr === "rangebar")  return "rangeBar";
      if (typeStr === "boxplot")   return "boxPlot";   // ← FIX: was missing
      if (typeStr === "polararea") return "polarArea"; // ← FIX: was missing
      if (typeStr === "radialbar") return "radialBar";
      if (typeStr === "waterfall")   return "bar";
      if (typeStr === "histogram")   return "bar";
      if (typeStr === "pyramid")     return "bar";
      if (typeStr === "conefunnel")  return "bar";
      if (typeStr === "funnel")    return "bar";
      if (typeStr === "gauge")       return "radialBar";
      if (typeStr === "nightingale") return "polarArea";
      if (typeStr === "sunburst")    return "treemap";
      if (typeStr === "sankey")      return "bar";
      if (typeStr === "calendar")    return "heatmap";
      if (typeStr === "timeline")    return "rangeBar";

      return typeStr as any;
    };

    const getChartConfig = (isModal: boolean) => {
      const processed = processChartData(type, data);
      if (!processed || processed.length === 0) return { series: [] };
      const { type: dType, series, labels, categories } = processed[0];
      const t = String(dType).toLowerCase();
      const engine = chartEngine[t] || "xy";
    
      const isCircular   = engine === "circular";
      const isRadialBar  = t === "radialbar";
      const isPolarArea  = t === "polararea" || t === "nightingale";
      const isRadar      = t === "radar";
      const isFunnel     = t === "funnel" || t === "conefunnel";
      const isPyramid    = t === "pyramid";
      const isRange      = engine === "range";
      const isGauge      = t === "gauge";
      const isWaterfall  = t === "waterfall";
      const isCalendar   = t === "calendar";
      const isCandlestick = t === "candlestick";
      const isBoxPlot    = t === "boxplot";
    
      // ── Unwrap series based on chart type ─────────────────────────────────
      let finalSeries: any = series;
    
      // Circular (pie, donut, polarArea, nightingale) need flat number array
      if (isCircular || isPolarArea) {
        if (Array.isArray(series) && series.length > 0) {
          if (typeof series[0] === "object" && series[0]?.data) {
            finalSeries = series[0].data;
          } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
            finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
          }
          // else already flat numbers — leave as-is
        }
      }
    
      // RadialBar needs flat number array + labels from the labels[]
      if (isRadialBar) {
        if (Array.isArray(series) && series.length > 0) {
          if (typeof series[0] === "object" && series[0]?.data) {
            finalSeries = series[0].data;
          } else if (typeof series[0] === "object" && !Array.isArray(series[0])) {
            finalSeries = series.map((item: any) => Number(item.y ?? item.value ?? 0));
          }
        }
      }
    
      // Gauge — clamp to 0-100
      if (isGauge) {
        finalSeries = (Array.isArray(finalSeries) ? finalSeries : [finalSeries])
          .map((v: any) => {
            const n = Number(v);
            return isNaN(n) ? 0 : Math.min(100, Math.max(0, n));
          });
      }
    
      // Radar — needs {x, y} objects but category engine gives plain numbers
      // Re-map to {x: category, y: value} format
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
    
      // ── Resolved labels and categories ────────────────────────────────────
      const resolvedLabels: string[] = (isCircular || isRadialBar || isPolarArea)
        ? (labels?.length ? labels : categories?.length ? categories : [])
        : [];
    
      const resolvedCategories: string[] = (() => {
        if (isRadar)              return []; // radar uses {x,y} data, not categories
        if (isCircular)           return [];
        if (isPolarArea)          return [];
        if (isRadialBar)          return [];
        if (isFunnel)             return [];
        if (isRange)              return [];
        return categories?.length ? categories : labels?.length ? labels : [];
      })();
    
      // ── X-axis type ───────────────────────────────────────────────────────
      const xAxisType = (() => {
        if (isCandlestick)        return "datetime";
        if (isRange && !isBoxPlot) {
          const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
          return firstX && looksLikeDate(String(firstX)) ? "datetime" : "numeric";
        }
        return "category";
      })();
    
      return {
        ...options,
        chart: {
          id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
          type: mapApexType(t),
          height: "100%",
          width: "100%",
          stacked: options.stacked ?? false,
          stackType: options.stackType ?? "normal",
          animations: { enabled: true, speed: 800 },
          toolbar: {
            show: true,
            tools: {
              customIcons: isModal ? [] : [{
                icon: expandIconString, index: 6, title: "Expand", class: "custom-icon",
                click: () => setIsModalOpen(true),
              }],
            },
          },
          ...options.chart,
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 },
          ...options.grid,
        },
        series: finalSeries,
        labels: resolvedLabels,
        xaxis: {
          type: xAxisType,
          categories: resolvedCategories,
          ...options.xaxis,
        },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal:   isFunnel || t === "rangebar" || t === "timeline" || isPyramid,
            isFunnel:     isFunnel || t === "conefunnel",
            distributed:  isFunnel || t === "conefunnel" || isWaterfall,
            isFunnelPlot: t === "conefunnel",
            ...options.plotOptions?.bar,
            ...(isWaterfall && !options.plotOptions?.bar?.colors ? {
              colors: {
                ranges: [
                  { from: -Infinity, to: -0.001, color: "#f43f5e" },
                  { from: 0, to: Infinity,        color: "#10b981" },
                ],
              },
            } : {}),
          },
          radialBar: isGauge ? {
            startAngle: -135,
            endAngle: 135,
            hollow: { size: "60%" },
            dataLabels: {
              name:  { show: true, offsetY: -10 },
              value: {
                show: true, fontSize: "24px", fontWeight: 600,
                formatter: (val: number) => `${val}%`,
              },
            },
            track: { background: "#e5e7eb", strokeWidth: "100%" },
            ...options.plotOptions?.radialBar,
          } : {
            // Non-gauge radialBar
            hollow: { size: "30%" },
            dataLabels: {
              name:  { show: true },
              value: { show: true },
              total: { show: true, label: "Total" },
            },
            ...options.plotOptions?.radialBar,
          },
          heatmap: {
            enableShades: true,
            colorScale: { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] },
          },
        },
        title: {
          text: (typeof title === "string" ? title : title?.text ?? options.title?.text) ?? "",
          align: typeof title === "object" ? title.align : options.title?.align || "left",
        },
        tooltip: {
          shared:    !isRange && !isBoxPlot,
          intersect: isRange || isBoxPlot,
          theme: "dark",
          ...options.tooltip,
        },
      };
    };
    // Initialization logic stays mostly the same, but we ensure destruction is awaited
    useEffect(() => {
      let isMounted = true;
      const initChart = async () => {
        if (chartInstance.current) await chartInstance.current.destroy();
        if (!isMounted || !chartRef.current) return;

        chartRef.current.innerHTML = '';
        const config = getChartConfig(false);
        chartInstance.current = new ApexCharts(chartRef.current, config);
        await chartInstance.current.render();
      };
      initChart();
      return () => { isMounted = false; chartInstance.current?.destroy(); };
    }, [data, type, options,title]);

    useEffect(() => {
      if (isModalOpen && modalChartRef.current) {
        const timer = setTimeout(async () => {
          if (modalInstance.current) await modalInstance.current.destroy();
          modalChartRef.current!.innerHTML = '';
          modalInstance.current = new ApexCharts(modalChartRef.current!, getChartConfig(true));
          await modalInstance.current.render();
        }, 350);
        return () => clearTimeout(timer);
      }
    }, [isModalOpen, data, type, options, title]);

    useImperativeHandle(ref, () => ({
      zoomIn: () => chartInstance.current?.zoomX(20, 80),
      zoomOut: () => chartInstance.current?.resetSeries(),
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(!isModalOpen),
    }));

    return (
      <>
      <div
          style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%", position: "relative", overflow: "hidden" }}
 
        >
          <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />

        </div>

        {/* Modal — unchanged from your original */}
        {isModalOpen && (
          <div style={{
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
            animation: "vizlyFadeIn 0.1s ease-out", backdropFilter: "blur(5px)",
          }}>
            <style>{`
              @keyframes vizlyFadeIn  { from { opacity: 0; } to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            `}</style>
            <div style={{
              width: "90%", height: "80%", background: "#fff", borderRadius: "16px",
              padding: "40px", position: "relative",
              animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" }}
              >
                <BsArrowsAngleContract size={18} />
              </button>
              <div ref={modalChartRef} style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        )}
      </>

     
    );
  }
);
const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title, renderer = "apexcharts"}, ref) => {

    if (renderer === "recharts") {
      return (
        <VizlyRecharts
          data={data}
          type={type}
          options={options}
          height={height}
          title={title}
        />
      );
    }

    if (renderer === "echarts") {
      return (
        <VizlyECharts
          data={data}
          type={type}
          options={options}
          height={height}
          title={title}
        />
      );
    }

    if (renderer === "plotlycharts") {
      return (
        <VizlyPlotly
          data={data}
          type={type}
          options={options}
          height={height}
          title={title}
        />
      );
    }

    

    // ── DEFAULT: ApexCharts renderer (all existing code unchanged below) ───
    return (
      <ApexRenderer
        data={data}
        type={type}
        options={options}
        height={height}
        title={title}
        ref={ref}
      />
    );
  }
);




export default VizlyChart;

 