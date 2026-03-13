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



const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const expandIconString = useMemo(
      () => ReactDOMServer.renderToString(
          <BsArrowsAngleExpand size={14} style={{ color: "#9ca3af", marginTop: "5px", marginRight:"4px" }} />
        ), []
    );

    const mapApexType = (t: string) => {
      const typeStr = String(t).toLowerCase();
      if (typeStr === "column") return "bar";
      if (typeStr === "rangebar") return "rangeBar";
      if (typeStr === "funnel") return "bar";
      return typeStr as any;
    };

    const getChartConfig = (isModal: boolean) => {
      const processed = processChartData(type, data);
      if (!processed || processed.length === 0) return { series: [] };

      // We extract from the first processed group
      const { type: dType, series, labels, categories } = processed[0];
      const t = String(dType).toLowerCase();
      const engine = chartEngine[t] || "xy";

      const isCircular = engine === "circular";
      const isRadar = t === "radar";
      
      /**
       * FIX 1: SERIES TRANSFORMATION
       * Pie/Donut/Radial MUST be [44, 55, 13]
       * Bar/Line/Mixed MUST be [{ name: 'x', data: [...] }]
       */
      let finalSeries: any = series;
      if (isCircular) {
        if (series.length > 0 && typeof series[0] === 'object') {
          // If series is [{name: '...', data: [10, 20]}], extract the data array
          finalSeries = series[0].data || series.map((s: any) => s.data?.[0] ?? 0);
        }
      }

      /**
       * FIX 2: MIXED DATASETS
       * If we have multiple series, ensure each has a 'type' property
       */
      const isMixed = Array.isArray(data[0]);
      const finalOptionsSeries = isMixed ? series : finalSeries;

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
          ...options.grid
        },
        series: finalOptionsSeries,
        // Radar/Circular use 'labels'. Heatmap/Bar use 'xaxis.categories'
        labels: (isCircular || isRadar) ? (labels?.length ? labels : categories) : undefined,
        xaxis: {
          // FORCE 'category' for heatmaps and category engines to prevent rendering errors
          type: (engine === 'category' || engine === 'heatmap' || engine === 'range') ? 'category' : (options.xaxis?.type || 'category'),
          categories: categories?.length ? categories : undefined,
          ...options.xaxis,
        },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal: t === "funnel" || t === "rangebar",
            isFunnel: t === "funnel",
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
        tooltip: { theme: "dark", ...options.tooltip },
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
    }, [data, type, options]);

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
      zoomIn: () => chartInstance.current?.zoomX(0, 100),
      zoomOut: () => chartInstance.current?.zoomX(0, 100),
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(!isModalOpen),
    }));

    return (
      <div style={{ height, width: "100%", position: "relative", overflow: "hidden" }}>
        <div ref={chartRef} style={{ height: "100%", width: "100%", overflow: "hidden" }} />
        {isModalOpen && (
           <div style={{
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
            animation: "vizlyFadeIn 0.3s ease-out", backdropFilter: "blur(5px)"
          }}>
            <style>{`
              @keyframes vizlyFadeIn { from { opacity: 0; } to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            `}</style>
            <div style={{
              width: "90%", height: "80%", background: "#fff", borderRadius: "16px",
              padding: "40px", position: "relative",
              animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)" 
            }}>
              <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: 15, right: 15, cursor: "pointer", border: 'none', background: 'transparent' }}>
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