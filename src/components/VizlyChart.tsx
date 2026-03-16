// VizlyChart.tsx
// Main React component. Renders an ApexCharts instance from processed
// series data, exposes an imperative ref API, and includes a fullscreen
// expand modal.
//
// Peer deps:  npm i apexcharts react-icons

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import ApexCharts from "apexcharts";
import ReactDOMServer from "react-dom/server";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

import { chartEngine }      from "../utils/chartEngine";
import { looksLikeDate }    from "../utils/transformData";
import { processChartData } from "../utils/transformMultiCharts";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface VizlyProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: "left" | "center" | "right"; style?: any };
}

export interface VizlyRef {
  zoomIn:           () => void;
  zoomOut:          () => void;
  reset:            () => void;
  toggleFullscreen: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title }, ref) => {
    const chartRef      = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    // ── Map type string → exact casing ApexCharts requires ───────────────────
    //
    // ApexCharts is strictly case-sensitive — wrong casing = blank chart.
    //   "boxplot"   → "boxPlot"
    //   "polararea" → "polarArea"
    //   "radialbar" → "radialBar"
    //   "rangebar"  → "rangeBar"
    //   "column"    → "bar"  (ApexCharts has no "column" type)
    //   "funnel"    → "bar"  (funnel is bar + plotOptions.bar.isFunnel:true)
    const mapApexType = useCallback((t: string): string => {
      const lower = String(t).toLowerCase();
      if (lower === "column")    return "bar";
      if (lower === "funnel")    return "bar";
      if (lower === "rangebar")  return "rangeBar";
      if (lower === "boxplot")   return "boxPlot";
      if (lower === "polararea") return "polarArea";
      if (lower === "radialbar") return "radialBar";
      return lower;
    }, []);

    // ── Build full ApexCharts config object ──────────────────────────────────
    const getChartConfig = useCallback(
      (isModal: boolean) => {
        const processed = processChartData(type, data);
        if (!processed || processed.length === 0) return { series: [] };

        const { type: dType, series, labels, categories } = processed[0];
        const t      = String(dType).toLowerCase();
        const engine = chartEngine[t] || "xy";

        const isCircular = engine === "circular";
        const isRadar    = t === "radar";
        const isFunnel   = t === "funnel";
        const isRange    = engine === "range";

        // Flatten circular series only when it's object-shaped.
        // A flat number[] must be left untouched — mapping through
        // .y / .value turns every element into 0.
        let finalSeries: any = series;
        if (isCircular) {
          if (Array.isArray(series) && typeof series[0] === "object" && series[0]?.data) {
            finalSeries = series[0].data;
          } else if (Array.isArray(series) && typeof series[0] === "object") {
            finalSeries = series.map((item: any) => item.y ?? item.value ?? 0);
          }
          // Already number[]? Leave untouched.
        }

        // Detect whether range chart x-values are real dates or plain strings.
        // "Mon", "Q1", "Team A" must NOT use type:"datetime" — ApexCharts
        // tries to Date.parse() them, gets NaN, and renders a blank chart.
        const rangeXAxisType = (() => {
          if (!isRange) return "category";
          const firstX = Array.isArray(series) ? series[0]?.data?.[0]?.x : null;
          return firstX && looksLikeDate(String(firstX)) ? "datetime" : "category";
        })();

        // ── FIX: NEVER pass undefined for labels or categories ───────────────
        //
        // ApexCharts internally calls .length and .slice on these arrays.
        // Passing undefined instead of [] causes:
        //   "Cannot read properties of undefined (reading 'length')"
        //   "Cannot read properties of undefined (reading 'slice')"
        //
        // Rule: always pass [] as the fallback, never undefined / null.

        // Top-level `labels` — circular charts only.
        // Radar uses xaxis.categories instead (see below).
        const resolvedLabels: string[] = isCircular
          ? (labels?.length ? labels : categories?.length ? categories : [])
          : [];                                    // ← [] not undefined for non-circular

        // xaxis.categories
        const resolvedCategories: string[] = (() => {
          if (isRadar)              return categories?.length ? categories : labels ?? [];
          if (isCircular)           return [];     // circular types don't use xaxis.categories
          if (isFunnel)             return [];     // funnel embeds labels in series.data {x,y}
          return categories?.length ? categories : [];  // ← [] not undefined
        })();

        return {
          ...options,
          chart: {
            id:   isModal ? "vizly-modal-chart" : "vizly-main-chart",
            type: mapApexType(t),
            height: "100%",
            width:  "100%",
            animations: { enabled: true, speed: 800 },
            toolbar: {
              show: true,
              tools: {
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
            },
            ...options.chart,
          },

          grid: {
            padding: { left: 20, right: 20, bottom: 10 },
            ...options.grid,
          },

          series: finalSeries,

          // FIX: always [] not undefined — ApexCharts crashes on undefined.length
          labels: resolvedLabels,

          xaxis: {
            type: isRange ? rangeXAxisType : "category",
            // FIX: always [] not undefined — ApexCharts crashes on undefined.length
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
              colorScale: {
                ranges: options.plotOptions?.heatmap?.colorScale?.ranges || [],
              },
            },
          },

          title: {
            text:  typeof title === "string" ? title : title?.text  || options.title?.text,
            align: typeof title === "object"  ? title.align : options.title?.align || "left",
          },

          tooltip: {
            shared:    true,
            intersect: false,
            theme:     "dark",
            ...options.tooltip,
          },
        };
      },
      [data, type, options, title, expandIconString, mapApexType]
    );

    // ── Main chart init ───────────────────────────────────────────────────────
    //
    // FIX: isDestroyed flag guards against React StrictMode double-invoking
    //      effects — without it, the cleanup from the first invoke destroys
    //      the instance while the second invoke's render() is still pending,
    //      causing "Cannot read properties of undefined (reading 'el')".
    //
    // FIX: try/catch around render() — if ApexCharts throws internally
    //      (e.g. bad config), it won't bubble up and crash the React tree.
    useEffect(() => {
      let isMounted   = true;
      let isDestroyed = false;

      const initChart = async () => {
        // Destroy previous instance
        if (chartInstance.current) {
          isDestroyed = true;
          await chartInstance.current.destroy();
          chartInstance.current = null;
          isDestroyed = false;
        }

        // Bail if cleanup already ran (StrictMode second invoke)
        if (!isMounted || !chartRef.current) return;

        chartRef.current.innerHTML = "";

        try {
          const instance = new ApexCharts(chartRef.current, getChartConfig(false));
          chartInstance.current = instance;    // assign BEFORE await render()
          await instance.render();

          // If unmounted during render, destroy immediately
          if (!isMounted) {
            instance.destroy();
            chartInstance.current = null;
          }
        } catch (err) {
          console.error("[VizlyChart] render error:", err);
        }
      };

      initChart();

      return () => {
        isMounted = true; // keep true so pending destroy can complete
        isMounted = false;
        chartInstance.current?.destroy();
        chartInstance.current = null;
      };
    }, [getChartConfig]);

    // ── Modal chart init ──────────────────────────────────────────────────────
    useEffect(() => {
      if (!isModalOpen || !modalChartRef.current) return;

      let cancelled = false;

      const timer = setTimeout(async () => {
        if (cancelled || !modalChartRef.current) return;

        try {
          if (modalInstance.current) {
            await modalInstance.current.destroy();
            modalInstance.current = null;
          }
          if (cancelled || !modalChartRef.current) return;

          modalChartRef.current.innerHTML = "";
          modalInstance.current = new ApexCharts(
            modalChartRef.current,
            getChartConfig(true)
          );
          await modalInstance.current.render();
        } catch (err) {
          console.error("[VizlyChart] modal render error:", err);
        }
      }, 350);

      return () => {
        cancelled = true;
        clearTimeout(timer);
        modalInstance.current?.destroy();
        modalInstance.current = null;
      };
    }, [isModalOpen, getChartConfig]);

    // ── Imperative ref API ────────────────────────────────────────────────────
    useImperativeHandle(ref, () => ({
      zoomIn:           () => chartInstance.current?.zoomX(20, 80),
      zoomOut:          () => chartInstance.current?.resetSeries(),
      reset:            () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(prev => !prev),
    }));

    // ── Render ────────────────────────────────────────────────────────────────
    return (
      <div style={{ height, width: "100%", position: "relative", overflow: "hidden" }}>
        <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />

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
              @keyframes vizlyFadeIn  { from { opacity:0 } to { opacity:1 } }
              @keyframes vizlyScaleUp { from { transform:scale(0.9);opacity:0 } to { transform:scale(1);opacity:1 } }
            `}</style>

            <div style={{
              width:        "90%",
              height:       "80%",
              background:   "#fff",
              borderRadius: "16px",
              padding:      "40px",
              position:     "relative",
              animation:    "vizlyScaleUp 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position:   "absolute",
                  top:        15,
                  right:      15,
                  cursor:     "pointer",
                  border:     "none",
                  background: "transparent",
                }}
              >
                <BsArrowsAngleContract size={18} />
              </button>

              <div ref={modalChartRef} style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default VizlyChart;
