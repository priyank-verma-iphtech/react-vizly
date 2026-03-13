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
import { transformData } from "../utils/transformData";

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

    const finalType = useMemo(() => {
      if (type) return type;
      if (Array.isArray(data[0])) {
        return (data as any[][]).map((d) => detectChartType(d));
      }
      return detectChartType(data as any[]);
    }, [data, type]);

    const mapApexType = (t: string) => {
      const typeStr = String(t).toLowerCase();
      if (typeStr === "column") return "bar";
      if (typeStr === "rangebar") return "rangeBar";
      if (typeStr === "funnel") return "bar";
      return typeStr as any;
    };

    const getChartConfig = (isModal: boolean) => {
      const rawType = Array.isArray(finalType) ? finalType[0] : finalType;
      const t = String(rawType).toLowerCase();

      let series: any[] = [];
      let labels: string[] = [];
      let categories: string[] = [];

      if (Array.isArray(data[0])) {
        const datasets = data as any[][];
        series = datasets.map((d, i) => {
          const chartType = Array.isArray(type) ? type[i] : (Array.isArray(finalType) ? finalType[i] : finalType);
          const transformed = transformData(chartType as string, d);
          if (categories.length === 0) categories = transformed.categories || [];
          if (labels.length === 0) labels = transformed.labels || [];
          return {
            name: transformed.series?.[0]?.name || `Series ${i + 1}`,
            type: mapApexType(chartType as string),
            data: transformed.series?.[0]?.data || [],
          };
        });
      } else {
        const transformed = transformData(t, data as any[]);
        series = transformed.series || [];
        labels = transformed.labels || [];
        categories = transformed.categories || [];
      }

      const isCircular = ["pie", "donut", "radialbar", "polararea"].includes(t);
      const isRadar = t === "radar";

      // CRITICAL: Circular charts MUST have a flat number array, not objects
      const finalSeries = isCircular 
        ? (series[0]?.data ? series[0].data : series) 
        : series;

      return {
        ...options,
        chart: {
          id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
          type: mapApexType(t),
          height: "100%",
          toolbar: {
            show: true,
            tools: {
              customIcons: isModal ? [] : [{
                icon: expandIconString,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => setIsModalOpen(true),
              }],
            },
          },
          animations: { enabled: !isModal },
          ...options.chart,
        },
        series: finalSeries.length ? finalSeries : (isCircular ? [] : [{ data: [] }]),
        labels: isCircular || isRadar ? (labels.length ? labels : categories) : undefined,
        xaxis: {
          ...options.xaxis,
          type: categories.length ? "category" : options.xaxis?.type || "numeric",
          categories: categories.length ? categories : undefined,
        },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal: t === "funnel",
            isFunnel: t === "funnel",
            ...options.plotOptions?.bar,
          },
        },
        title: {
          text: typeof title === "string" ? title : title?.text || options.title?.text,
          align: typeof title === "object" ? title.align : options.title?.align || "left",
        },
        tooltip: { theme: "dark", ...options.tooltip },
      };
    };

    useEffect(() => {
      let isMounted = true;
      const container = chartRef.current;
      if (!container) return;

      const initChart = async () => {
        // 1. Destroy previous instance fully
        if (chartInstance.current) {
          try {
            await chartInstance.current.destroy();
          } catch (e) { /* ignore */ }
        }

        if (!isMounted) return;

        const config = getChartConfig(false);
        // 2. Clear HTML to prevent "el" property collisions
        container.innerHTML = ''; 
        
        chartInstance.current = new ApexCharts(container, config);
        chartInstance.current.render().catch(err => console.error("Render error:", err));
      };

      initChart();

      return () => {
        isMounted = false;
        chartInstance.current?.destroy();
        chartInstance.current = null;
      };
    }, [data, finalType, options, title]);

    useEffect(() => {
      if (isModalOpen && modalChartRef.current) {
        const config = getChartConfig(true);
        const timer = setTimeout(() => {
          if (modalInstance.current) modalInstance.current.destroy();
          modalInstance.current = new ApexCharts(modalChartRef.current!, config);
          modalInstance.current.render();
        }, 150);

        return () => {
          clearTimeout(timer);
          modalInstance.current?.destroy();
          modalInstance.current = null;
        };
      }
    }, [isModalOpen]);

    useImperativeHandle(ref, () => ({
      zoomIn: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
      zoomOut: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(!isModalOpen),
    }));

    return (
      <div style={{ height, width: "100%", position: "relative" }}>
        <div ref={chartRef} style={{ height: "100%", width: "100%" }} />
        {isModalOpen && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }}>
            <div style={{ width: "90%", height: "80%", background: "#fff", borderRadius: "12px", padding: "40px", position: "relative" }}>
              <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: 15, right: 15, border: 'none', background: 'none', cursor: "pointer" }}>
                <BsArrowsAngleContract size={20} />
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