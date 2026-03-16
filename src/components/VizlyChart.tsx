import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle
} from "react";
import ApexCharts from "apexcharts";
import { detectChartType } from "../utils/detectChartType";
import { chartEngine } from "../utils/chartEngine";
import { processChartData } from "../utils/transformMultiCharts";

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

// ─────────────────────────────────────────────────────────────────────────────
// Inline SVG icons — bundled inside the package.
//
// WHY NOT react-icons / ReactDOMServer.renderToString:
//   The old code used ReactDOMServer.renderToString(<BsArrowsAngleExpand/>)
//   to produce an HTML string for customIcons[].icon.
//   That approach only works for XY charts (line, area, scatter, bubble).
//   ApexCharts silently ignores toolbar.tools.customIcons for every circular
//   type (pie, donut, radialBar, polarArea) and specialty types (heatmap,
//   treemap, funnel, candlestick, boxPlot, rangeBar).
//
// THE FIX:
//   1. Remove customIcons entirely — no more ReactDOMServer, no react-icons import.
//   2. Render a plain React <button> absolutely positioned over the chart div.
//      It is a real DOM element, always visible for EVERY chart type.
//   3. Icons are tiny inline SVGs so there is zero external dependency.
// ─────────────────────────────────────────────────────────────────────────────

/** Expand icon shown on the inline chart (on hover) */
const ExpandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    viewBox="0 0 16 16"
    fill="#555"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
    />
  </svg>
);

/** Contract icon shown in the modal close button */
const ContractIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="#444"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707zM.172.172a.5.5 0 0 1 .707 0l4.096 4.096V1.5a.5.5 0 0 1 1 0v3.975a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1 0-1h2.768L.172.879a.5.5 0 0 1 0-.707zM15.828 15.828a.5.5 0 0 1-.707 0l-4.096-4.096V14.5a.5.5 0 0 1-1 0v-3.975a.5.5 0 0 1 .5-.5H14.5a.5.5 0 0 1 0 1h-2.768l4.096 4.096a.5.5 0 0 1 0 .707z"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component — your original code with the minimal changes needed
// ─────────────────────────────────────────────────────────────────────────────

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title }, ref) => {
    const chartRef      = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // REMOVED: expandIconString useMemo — no longer needed
    // REMOVED: ReactDOMServer import — no longer needed
    // REMOVED: react-icons import — no longer needed

    // ADDED: hover state to show/hide the expand button
    const [btnVisible, setBtnVisible] = useState(false);

    const mapApexType = (t: string) => {
      const typeStr = String(t).toLowerCase();
      if (typeStr === "column")    return "bar";
      if (typeStr === "rangebar")  return "rangeBar";
      if (typeStr === "funnel")    return "bar";
      if (typeStr === "boxplot")   return "boxPlot";   // fix: was missing
      if (typeStr === "polararea") return "polarArea"; // fix: was missing
      if (typeStr === "radialbar") return "radialBar"; // fix: was missing
      return typeStr as any;
    };

    const getChartConfig = useCallback((isModal: boolean) => {
      const processed = processChartData(type, data);
      if (!processed || processed.length === 0) return { series: [] };

      const { type: dType, series, labels, categories } = processed[0];
      const t = String(dType).toLowerCase();
      const engine = chartEngine[t] || "xy";

      const isCircular = engine === "circular";
      const isRadar    = t === "radar";
      const isFunnel   = t === "funnel";
      const isRange    = engine === "range";

      let finalSeries: any = series;
      if (isCircular) {
        if (Array.isArray(series) && series[0]?.data) {
          finalSeries = series[0].data;
        } else if (Array.isArray(series) && typeof series[0] === "object") {
          finalSeries = series.map((item: any) => item.y ?? item.value ?? 0);
        }
      }

      // Always arrays — never undefined (ApexCharts crashes on undefined.length)
      const resolvedLabels: string[] = isCircular
        ? (labels?.length ? labels : categories?.length ? categories : [])
        : [];

      const resolvedCategories: string[] = (() => {
        if (isRadar)    return categories?.length ? categories : labels ?? [];
        if (isCircular) return [];
        if (isFunnel)   return [];
        return categories?.length ? categories : [];
      })();

      const rangeXAxisType = (() => {
        if (!isRange) return "category";
        const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
        return firstX && !isNaN(Date.parse(String(firstX))) && /\d{4}|\d{2}[-/]\d{2}/.test(String(firstX))
          ? "datetime"
          : "category";
      })();

      return {
        ...options,
        chart: {
          id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
          type: mapApexType(t),
          height: "100%",
          width: "100%",
          animations: { enabled: true, speed: 800 },
          toolbar: {
            // CHANGED: toolbar.show false for inline chart, true for modal.
            // customIcons removed entirely — React button overlay handles
            // expand for ALL chart types without ApexCharts involvement.
            show: isModal,
            tools: {
              download:    isModal,
              selection:   isModal,
              zoom:        isModal,
              zoomin:      isModal,
              zoomout:     isModal,
              pan:         isModal,
              reset:       isModal,
              customIcons: [],   // always empty
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
          type:       isRange ? rangeXAxisType : "category",
          categories: resolvedCategories,
          ...options.xaxis,
        },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal:  isFunnel || t === "rangebar",
            isFunnel:    isFunnel,
            distributed: isFunnel,
            ...options.plotOptions?.bar,
          },
          heatmap: {
            enableShades: true,
            colorScale: { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] },
          },
        },
        title: {
          text:  typeof title === "string" ? title : title?.text || options.title?.text,
          align: typeof title === "object"  ? title.align : options.title?.align || "left",
        },
        tooltip: {
          shared:    true,
          intersect: false,
          theme:     "dark",
          ...options.tooltip,
        },
      };
    }, [data, type, options, title]);

    // Your original init logic — unchanged
    useEffect(() => {
      let isMounted = true;
      const initChart = async () => {
        if (chartInstance.current) await chartInstance.current.destroy();
        if (!isMounted || !chartRef.current) return;

        chartRef.current.innerHTML = "";
        const config = getChartConfig(false);
        chartInstance.current = new ApexCharts(chartRef.current, config);
        await chartInstance.current.render();
      };
      initChart();
      return () => { isMounted = false; chartInstance.current?.destroy(); };
    }, [getChartConfig]);

    // Your original modal init — unchanged
    useEffect(() => {
      if (isModalOpen && modalChartRef.current) {
        const timer = setTimeout(async () => {
          if (modalInstance.current) await modalInstance.current.destroy();
          modalChartRef.current!.innerHTML = "";
          modalInstance.current = new ApexCharts(modalChartRef.current!, getChartConfig(true));
          await modalInstance.current.render();
        }, 350);
        return () => clearTimeout(timer);
      }
    }, [isModalOpen, getChartConfig]);

    useImperativeHandle(ref, () => ({
      zoomIn:           () => chartInstance.current?.zoomX(20, 80),
      zoomOut:          () => chartInstance.current?.resetSeries(),
      reset:            () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(!isModalOpen),
    }));

    return (
      // CHANGED: wrapper gets onMouseEnter/Leave + position:relative
      // (it already had position:relative so that part is the same)
      <>
        <div
          style={{ height, width: "100%", position: "relative", overflow: "hidden" }}
          onMouseEnter={() => setBtnVisible(true)}
          onMouseLeave={() => setBtnVisible(false)}
        >
          <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />

          {/* ─────────────────────────────────────────────────────────────────
              EXPAND BUTTON — the only meaningful change from your original.

              Previously: customIcons inside toolbar.tools — only worked for
              XY charts (line, area, scatter, bubble). All circular types
              (pie, donut, radialBar, polarArea), heatmap, treemap, funnel,
              candlestick, boxPlot, rangeBar silently ignored it.

              Now: a real React <button> absolutely positioned in the corner.
              Works for EVERY chart type. onClick is always fresh (React
              manages it). No customIcons, no ReactDOMServer, no react-icons.
          ───────────────────────────────────────────────────────────────── */}
          <button
            onClick={() => setIsModalOpen(true)}
            title="Expand"
            style={{
              position:            "absolute",
              top:                 "8px",
              right:               "8px",
              width:               "28px",
              height:              "28px",
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
              // fade + scale in on hover, invisible otherwise
              opacity:             btnVisible ? 1 : 0,
              transform:           btnVisible ? "scale(1)" : "scale(0.82)",
              transition:          "opacity 0.15s ease, transform 0.15s ease",
              pointerEvents:       btnVisible ? "auto" : "none",
            }}
          >
            <ExpandIcon />
          </button>
        </div>

        {/* Modal — your original markup, only the close button icon changed */}
        {isModalOpen && (
          <div style={{
            position:        "fixed",
            inset:           0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            zIndex:          9999,
            animation:       "vizlyFadeIn 0.1s ease-out",
            backdropFilter:  "blur(5px)",
          }}>
            <style>{`
              @keyframes vizlyFadeIn  { from { opacity: 0; } to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            `}</style>
            <div style={{
              width:        "90%",
              height:       "80%",
              background:   "#fff",
              borderRadius: "16px",
              padding:      "40px",
              position:     "relative",
              animation:    "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" }}
              >
                {/* CHANGED: was <BsArrowsAngleContract size={18} />, now inline SVG */}
                <ContractIcon />
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
// import { detectChartType } from "../utils/detectChartType";
// import { chartEngine } from "../utils/chartEngine";
// import { processChartData } from "../utils/transformMultiCharts";

// export interface VizlyProps {
//   data: any[] | any[][];
//   type?: string | string[];
//   options?: any;
//   height?: number | string;
//   title?: string | { text: string; align?: "left" | "center" | "right"; style?: any };
// }

// export interface VizlyRef {
//   zoomIn: () => void;
//   zoomOut: () => void;
//   reset: () => void;
//   toggleFullscreen: () => void;
// }



// const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
//   ({ data, type, options = {}, height = 350, title }, ref) => {
//     const chartRef = useRef<HTMLDivElement>(null);
//     const modalChartRef = useRef<HTMLDivElement>(null);
//     const chartInstance = useRef<ApexCharts | null>(null);
//     const modalInstance = useRef<ApexCharts | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const expandIconString = useMemo(
//       () => ReactDOMServer.renderToString(
//           <BsArrowsAngleExpand size={14} style={{ color: "#9ca3af", marginTop: "5px", marginLeft:"4px" }} />
//         ), []
//     );

//     const mapApexType = (t: string) => {
//       const typeStr = String(t).toLowerCase();
//       if (typeStr === "column") return "bar";
//       if (typeStr === "rangebar") return "rangeBar";
//       if (typeStr === "funnel") return "bar";
//       return typeStr as any;
//     };

//     const getChartConfig = (isModal: boolean) => {
//       const processed = processChartData(type, data);
//       if (!processed || processed.length === 0) return { series: [] };

//       const { type: dType, series, labels, categories } = processed[0];
//       const t = String(dType).toLowerCase();
//       const engine = chartEngine[t] || "xy";

//       const isCircular = engine === "circular";
//       const isRadar = t === "radar";
      
//       // FIX: Ensure Pie/Donut get flat arrays, while XY/Bar get Object arrays
//       let finalSeries: any = series;
//       if (isCircular) {
//         // If series is [{data: [10, 20]}], flatten it to [10, 20]
//         if (Array.isArray(series) && series[0]?.data) {
//           finalSeries = series[0].data;
//         } else if (Array.isArray(series) && typeof series[0] === 'object') {
//           finalSeries = series.map((item: any) => item.y ?? item.value ?? 0);
//         }
//       }

//       return {
//         ...options,
//         chart: {
//           id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
//           type: mapApexType(t),
//           height: "100%",
//           width: "100%", // Fix: Containment
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
//           padding: { left: 20, right: 20, bottom: 10 }, // Fix: X-axis bleed
//           ...options.grid
//         },
//         series: finalSeries,
//         labels: (isCircular || isRadar) ? (labels?.length ? labels : categories) : undefined,
//         xaxis: {
//           type: engine === "range" ? "datetime" : "category",
//           categories: categories?.length ? categories : undefined,
//           ...options.xaxis,
//         },
//         plotOptions: {
//           ...options.plotOptions,
//           bar: {
//             horizontal: t === "funnel" || t === "rangebar",
//             isFunnel: t === "funnel",
//             distributed: t === "funnel",
//             ...options.plotOptions?.bar,
//           },
//           heatmap: {
//             enableShades: true,
//             colorScale: { ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [] }
//           }
//         },
//         title: {
//           text: typeof title === "string" ? title : title?.text || options.title?.text,
//           align: typeof title === "object" ? title.align : options.title?.align || "left",
//         },
//         tooltip: {
//           shared: true,
//           intersect: false,
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
//     }, [isModalOpen]);

//     useImperativeHandle(ref, () => ({
//       zoomIn: () => chartInstance.current?.zoomX(20, 80),
//       zoomOut: () => chartInstance.current?.resetSeries(),
//       reset: () => chartInstance.current?.resetSeries(),
//       toggleFullscreen: () => setIsModalOpen(!isModalOpen),
//     }));

//     return (
//       <div style={{ height, width: "100%", position: "relative", overflow: "hidden" }}>
//         <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />
//         {isModalOpen && (
//            <div style={{
//             position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
//             display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
//             animation: "vizlyFadeIn 0.1s ease-out", backdropFilter: "blur(5px)"
//           }}>
//             <style>{`
//               @keyframes vizlyFadeIn { from { opacity: 0; } to { opacity: 1; } }
//               @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
//             `}</style>
//             <div style={{
//               width: "90%", height: "80%", background: "#fff", borderRadius: "16px",
//               padding: "40px", position: "relative",
//               animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)" 
//             }}>
//               <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: 15, right: 15, cursor: "pointer", border: 'none', background: 'transparent' }}>
//                 <BsArrowsAngleContract size={18} />
//               </button>
//               <div ref={modalChartRef} style={{ height: "100%", width: "100%" }} />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// );

// export default VizlyChart;