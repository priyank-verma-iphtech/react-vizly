// VizlyChart.tsx
// Main React component. Renders an ApexCharts instance from the
// processed series data, exposes an imperative ref API, and includes
// a fullscreen expand modal.
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
import { processChartData } from "../utils//transformMultiCharts";

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

    // Stable expand-icon HTML string (computed once)
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
    // FIX: ApexCharts is strictly case-sensitive for chart type strings.
    //
    //   "boxplot"   → "boxPlot"   was falling through as lowercase → blank chart
    //   "polararea" → "polarArea" was missing entirely → blank chart
    //   "radialbar" → "radialBar" was missing entirely → blank chart
    //   "rangebar"  → "rangeBar"  carried forward from previous fix
    //   "column"    → "bar"       ApexCharts has no "column" type
    //   "funnel"    → "bar"       funnel is bar + plotOptions.bar.isFunnel:true
    const mapApexType = useCallback((t: string): string => {
      const lower = String(t).toLowerCase();
      if (lower === "column")    return "bar";
      if (lower === "funnel")    return "bar";
      if (lower === "rangebar")  return "rangeBar";
      if (lower === "boxplot")   return "boxPlot";   // ← FIX
      if (lower === "polararea") return "polarArea"; // ← FIX
      if (lower === "radialbar") return "radialBar"; // ← FIX
      return lower;
    }, []);

    // ── Build full ApexCharts config object ──────────────────────────────────
    //
    // Wrapped in useCallback so both effects can list it as a stable dep,
    // preventing the modal from ever closing over stale props.
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

        // FIX: don't flatten circular series when it's already a flat number[].
        //      Previously a flat number[] got mapped through .y / .value → all zeros.
        let finalSeries: any = series;
        if (isCircular) {
          if (Array.isArray(series) && typeof series[0] === "object" && series[0]?.data) {
            // [{data:[10,20,30]}]  →  [10,20,30]
            finalSeries = series[0].data;
          } else if (Array.isArray(series) && typeof series[0] === "object") {
            // [{y:10},{y:20}]  →  [10,20]
            finalSeries = series.map((item: any) => item.y ?? item.value ?? 0);
          }
          // Already number[]? Leave untouched — no else branch needed.
        }

        // FIX: range charts with string x-values ("Mon", "Q1", "Team A") must
        //      NOT use xaxis.type:"datetime".  ApexCharts tries to Date.parse()
        //      those strings, gets NaN, and renders a blank chart.
        //      Only use "datetime" when the first x value is actually a date.
        const rangeXAxisType = (() => {
          if (!isRange) return "category";
          const firstX = Array.isArray(series)
            ? series[0]?.data?.[0]?.x
            : null;
          return firstX && looksLikeDate(String(firstX)) ? "datetime" : "category";
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

          // Top-level `labels` is for circular charts only.
          // FIX: radar must NOT receive top-level labels — it uses xaxis.categories.
          labels: isCircular ? (labels?.length ? labels : categories) : undefined,

          xaxis: {
            // FIX: range charts now detect whether x-values are real dates.
            //      Non-date strings → "category", real ISO dates → "datetime".
            type: isRange ? rangeXAxisType : "category",

            // FIX: radar needs axis labels via xaxis.categories, not top-level labels.
            //      funnel uses {x,y} objects in series.data so no categories needed.
            categories: isRadar
              ? (categories?.length ? categories : labels)
              : (!isCircular && !isFunnel && categories?.length)
              ? categories
              : undefined,

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

    // ── Main chart init / reinit on prop changes ──────────────────────────────
    //
    // FIX: assign chartInstance.current BEFORE await render() so the cleanup
    //      function can always call .destroy() even if unmount happens during
    //      the async render call.
    useEffect(() => {
      let isMounted = true;

      const initChart = async () => {
        if (chartInstance.current) {
          await chartInstance.current.destroy();
          chartInstance.current = null;
        }
        if (!isMounted || !chartRef.current) return;

        chartRef.current.innerHTML = "";
        const instance = new ApexCharts(chartRef.current, getChartConfig(false));
        chartInstance.current = instance;      // ← assign BEFORE await
        await instance.render();

        if (!isMounted) {
          instance.destroy();                  // unmounted during render — clean up
          chartInstance.current = null;
        }
      };

      initChart();

      return () => {
        isMounted = false;
        chartInstance.current?.destroy();
        chartInstance.current = null;
      };
    }, [getChartConfig]);

    // ── Modal chart init (fires after open animation) ─────────────────────────
    //
    // FIX: getChartConfig is stable and already tracks all relevant deps
    //      (data, type, options, title) so listing it here is sufficient —
    //      the modal will never render stale data.
    useEffect(() => {
      if (!isModalOpen || !modalChartRef.current) return;

      const timer = setTimeout(async () => {
        if (modalInstance.current) {
          await modalInstance.current.destroy();
          modalInstance.current = null;
        }
        if (!modalChartRef.current) return;

        modalChartRef.current.innerHTML = "";
        modalInstance.current = new ApexCharts(
          modalChartRef.current,
          getChartConfig(true)
        );
        await modalInstance.current.render();
      }, 350);

      return () => {
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
