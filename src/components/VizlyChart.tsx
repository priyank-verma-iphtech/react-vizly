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
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  toggleFullscreen: () => void;
}



const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
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

    // FIX 2 — hover state for the React button overlay (see JSX below)
    const [btnVisible, setBtnVisible] = useState(false);

    const expandIconString = useMemo(
      () => ReactDOMServer.renderToString(
        <BsArrowsAngleExpand size={14} style={{ color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }} />
      ), []
    );

    // const expandIconString = useMemo(
    //   () => ReactDOMServer.renderToString(
    //       <BsArrowsAngleExpand size={14} style={{ color: "#9ca3af", marginTop: "5px", marginLeft:"4px" }} />
    //     ), []
    // );

    const mapApexType = (t: string) => {
      const typeStr = String(t).toLowerCase();
      if (typeStr === "column")    return "bar";
      if (typeStr === "funnel")    return "bar";
      if (typeStr === "rangebar")  return "rangeBar";
      if (typeStr === "boxplot")   return "boxPlot";   // ← FIX: was missing
      if (typeStr === "polararea") return "polarArea"; // ← FIX: was missing
      if (typeStr === "radialbar") return "radialBar";

      return typeStr as any;
    };

    const getChartConfig = (isModal: boolean) => {
      const processed = processChartData(type, data);
      if (!processed || processed.length === 0) return { series: [] };

      const { type: dType, series, labels, categories } = processed[0];
      const t = String(dType).toLowerCase();
      const engine = chartEngine[t] || "xy";

      const isCircular = engine === "circular";
      const isRadar = t === "radar";
      
      const isFunnel = t === "funnel";
      const isRange  = engine === "range";
      // FIX: Ensure Pie/Donut get flat arrays, while XY/Bar get Object arrays
      let finalSeries: any = series;
      if (isCircular) {
        // If series is [{data: [10, 20]}], flatten it to [10, 20]
        if (Array.isArray(series) && series[0]?.data) {
          finalSeries = series[0].data;
        } else if (Array.isArray(series) && typeof series[0] === 'object') {
          finalSeries = series.map((item: any) => item.y ?? item.value ?? 0);
        }
      }

      const resolvedLabels: string[] = isCircular
        ? (labels?.length ? labels : categories?.length ? categories : [])
        : [];

      const resolvedCategories: string[] = (() => {
        if (isRadar)    return categories?.length ? categories : labels ?? [];
        if (isCircular) return [];
        if (isFunnel)   return [];
        return categories?.length ? categories : [];
      })();

      // ── FIX 4: xaxis.type for range charts ────────────────────────────────
      // Your original always used "datetime" for range engine charts.
      // When x values are plain strings ("Mon", "Q1", "Team A"), ApexCharts
      // tries to Date.parse() them → gets null yRatio → crash.
      // Only use "datetime" when x values are actual date strings.
      const rangeXAxisType = (() => {
        if (!isRange) return "category";
        const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
        return firstX && looksLikeDate(String(firstX)) ? "datetime" : "category";
      })();

      return {
        ...options,
        chart: {
          id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
          type: mapApexType(t),
          height: "100%",
          width: "100%", // Fix: Containment
          animations: { enabled: true, speed: 800 },
          toolbar: {
            show: true,

            // 3
            tools: {
              // FIX 1c — click routes through window.__vizlyOpen(instanceId)
              // instead of a direct closure, so it is never stale.
              customIcons: isModal ? [] : [{
                icon:  expandIconString,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => (window as any).__vizlyOpen?.(instanceId),
              }],
            },
            // tools: {
            //   customIcons: isModal ? [] : [{
            //     icon: expandIconString, index: 6, title: "Expand", class: "custom-icon",
            //     click: () => setIsModalOpen(true),
            //   }],
            // },
          },
          ...options.chart,
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 }, // Fix: X-axis bleed
          ...options.grid
        },
        series: finalSeries,
        labels: resolvedLabels,     // always [], never undefined
        xaxis: {
          type: isRange ? rangeXAxisType : "category",  // ← uses what you computed above
          categories: resolvedCategories,
          ...options.xaxis,
        },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal: t === "funnel" || t === "rangebar",
            isFunnel: t === "funnel",
            distributed: t === "funnel",
            ...options.plotOptions?.bar,
          },
          heatmap: {
            enableShades: true,
            colorScale: { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] }
          }
        },
        title: {
          text: typeof title === "string" ? title : title?.text || options.title?.text,
          align: typeof title === "object" ? title.align : options.title?.align || "left",
        },
        tooltip: {
          shared: true,
          intersect: false,
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
    }, [isModalOpen]);

    useImperativeHandle(ref, () => ({
      zoomIn: () => chartInstance.current?.zoomX(20, 80),
      zoomOut: () => chartInstance.current?.resetSeries(),
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(!isModalOpen),
    }));

    return (
      <>
      <div
          style={{ height, width: "100%", position: "relative", overflow: "hidden" }}
          onMouseEnter={() => setBtnVisible(true)}
          onMouseLeave={() => setBtnVisible(false)}
        >
          <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />

          {/* Expand button — visible for ALL chart types */}
          <button
            onClick={() => setIsModalOpen(true)}
            title="Expand"
            style={{
              position:            "absolute",
              top:                 "8px",
              right:               "8px",
              width:               "26px",
              height:              "26px",
              display:             "flex",
              alignItems:          "center",
              justifyContent:      "center",
              background:          "rgba(255,255,255,0.9)",
              border:              "0.5px solid rgba(0,0,0,0.12)",
              borderRadius:        "6px",
              cursor:              "pointer",
              zIndex:              10,
              backdropFilter:      "blur(4px)",
              WebkitBackdropFilter:"blur(4px)",
              opacity:             btnVisible ? 1 : 0,
              transform:           btnVisible ? "scale(1)" : "scale(0.82)",
              transition:          "opacity 0.15s ease, transform 0.15s ease",
              pointerEvents:       btnVisible ? "auto" : "none",
            }}
          >
            <BsArrowsAngleExpand size={12} color="#555" />
          </button>
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

export default VizlyChart;

 // <div style={{ height, width: "100%", position: "relative", overflow: "hidden" }}>
      //   <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />
      //   {isModalOpen && (
      //      <div style={{
      //       position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
      //       display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
      //       animation: "vizlyFadeIn 0.1s ease-out", backdropFilter: "blur(5px)"
      //     }}>
      //       <style>{`
      //         @keyframes vizlyFadeIn { from { opacity: 0; } to { opacity: 1; } }
      //         @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      //       `}</style>
      //       <div style={{
      //         width: "90%", height: "80%", background: "#fff", borderRadius: "16px",
      //         padding: "40px", position: "relative",
      //         animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)" 
      //       }}>
      //         <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: 15, right: 15, cursor: "pointer", border: 'none', background: 'transparent' }}>
      //           <BsArrowsAngleContract size={18} />
      //         </button>
      //         <div ref={modalChartRef} style={{ height: "100%", width: "100%" }} />
      //       </div>
      //     </div>
      //   )}
      //</div>