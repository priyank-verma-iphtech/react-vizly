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
import { detectChartType } from "../utils/detectChartType";
import { chartEngine }     from "../utils/chartEngine";
import { processChartData } from "../utils/transformMultiCharts";

export interface VizlyProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: "left" | "center" | "right"; style?: any };
}

export interface VizlyRef {
  zoomIn:          () => void;
  zoomOut:         () => void;
  reset:           () => void;
  toggleFullscreen:() => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title }, ref) => {
    const chartRef      = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ── Stable expand-icon string ────────────────────────────────────────────
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

    // ── Map chart type string to the exact casing ApexCharts expects ─────────
    // FIX: added polarArea and radialBar (Apex requires exact camelCase)
    const mapApexType = useCallback((t: string): string => {
      const lower = String(t).toLowerCase();
      if (lower === "column")    return "bar";
      if (lower === "rangebar")  return "rangeBar";
      if (lower === "funnel")    return "bar";
      if (lower === "polararea") return "polarArea";   // ← was missing
      if (lower === "radialbar") return "radialBar";   // ← was missing
      return lower;
    }, []);

    // ── Build full ApexCharts config ─────────────────────────────────────────
    // FIX: wrapped in useCallback so effects can list it as a stable dependency
    const getChartConfig = useCallback(
      (isModal: boolean) => {
        const processed = processChartData(type, data);
        if (!processed || processed.length === 0) return { series: [] };

        const { type: dType, series, labels, categories } = processed[0];
        const t      = String(dType).toLowerCase();
        const engine = chartEngine[t] || "xy";

        const isCircular = engine === "circular";
        const isRadar    = t === "radar";

        // FIX: only flatten when series is actually an object array (not already number[])
        let finalSeries: any = series;
        if (isCircular) {
          if (Array.isArray(series) && typeof series[0] === "object" && series[0]?.data) {
            // [{data: [10, 20, 30]}]  →  [10, 20, 30]
            finalSeries = series[0].data;
          } else if (Array.isArray(series) && typeof series[0] === "object") {
            // [{y: 10}, {y: 20}]  →  [10, 20]
            finalSeries = series.map((item: any) => item.y ?? item.value ?? 0);
          }
          // Already number[]? Leave it untouched (no else branch)
        }

        return {
          ...options,
          chart: {
            id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
            type: mapApexType(t),
            height: "100%",
            width: "100%",
            animations: { enabled: true, speed: 800 },
            toolbar: {
              show: true,
              tools: {
                customIcons: isModal
                  ? []
                  : [
                      {
                        icon:  expandIconString,
                        index: 6,
                        title: "Expand",
                        class: "custom-icon",
                        click: () => setIsModalOpen(true),
                      },
                    ],
              },
            },
            ...options.chart,
          },
          grid: {
            padding: { left: 20, right: 20, bottom: 10 },
            ...options.grid,
          },
          series: finalSeries,

          // FIX: circular types use `labels`; radar uses `xaxis.categories` (see xaxis below)
          labels: isCircular ? (labels?.length ? labels : categories) : undefined,

          xaxis: {
            type: engine === "range" ? "datetime" : "category",
            // FIX: radar needs its axis labels via xaxis.categories, not `labels`
            categories: isRadar
              ? (categories?.length ? categories : labels)
              : categories?.length
              ? categories
              : undefined,
            ...options.xaxis,
          },
          plotOptions: {
            ...options.plotOptions,
            bar: {
              horizontal:  t === "funnel" || t === "rangebar",
              isFunnel:    t === "funnel",
              distributed: t === "funnel",
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

    // ── Main chart init ──────────────────────────────────────────────────────
    // FIX: assign chartInstance.current BEFORE await render() so the cleanup
    //      can always destroy even if the component unmounts mid-render.
    useEffect(() => {
      let isMounted = true;

      const initChart = async () => {
        if (chartInstance.current) {
          await chartInstance.current.destroy();
          chartInstance.current = null;
        }
        if (!isMounted || !chartRef.current) return;

        chartRef.current.innerHTML = "";
        const config   = getChartConfig(false);
        const instance = new ApexCharts(chartRef.current, config);

        chartInstance.current = instance;        // assign BEFORE awaiting render
        await instance.render();

        if (!isMounted) {
          instance.destroy();                    // clean up if unmounted during render
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

    // ── Modal chart init ─────────────────────────────────────────────────────
    // FIX: include data/type/options/title deps so modal never uses stale config
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
    }, [isModalOpen, getChartConfig]);   // getChartConfig already tracks data/type/options/title

    // ── Imperative handle ────────────────────────────────────────────────────
    useImperativeHandle(ref, () => ({
      zoomIn:           () => chartInstance.current?.zoomX(20, 80),
      zoomOut:          () => chartInstance.current?.resetSeries(),
      reset:            () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(prev => !prev),
    }));

    // ── Render ───────────────────────────────────────────────────────────────
    return (
      <div style={{ height, width: "100%", position: "relative", overflow: "hidden" }}>
        <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />

        {isModalOpen && (
          <div
            style={{
              position:       "fixed",
              inset:          0,
              backgroundColor:"rgba(0,0,0,0.85)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              zIndex:         9999,
              animation:      "vizlyFadeIn 0.1s ease-out",
              backdropFilter: "blur(5px)",
            }}
          >
            <style>{`
              @keyframes vizlyFadeIn  { from { opacity: 0; }              to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            `}</style>

            <div
              style={{
                width:     "90%",
                height:    "80%",
                background:"#fff",
                borderRadius: "16px",
                padding:   "40px",
                position:  "relative",
                animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position:  "absolute",
                  top:       15,
                  right:     15,
                  cursor:    "pointer",
                  border:    "none",
                  background:"transparent",
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
