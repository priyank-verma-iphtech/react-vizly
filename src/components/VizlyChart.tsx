import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useMemo,
  useCallback
} from "react";
import ApexCharts from "apexcharts";
import { CiMaximize1, CiZoomIn, CiZoomOut, CiRead, } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

// --- Types ---
export interface VizlyProps {
  data: any[];
  type?: string; 
  options?: any;
  height?: number | string;
  title?: string;
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  download: (format: "png" | "csv" | "svg") => void;
  filter: (newData: any[]) => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title = "Data Visualization" }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [showModal, setShowModal] = useState(false);

    // 1. Inference Engine Logic
    const finalType = useMemo(() => {
      if (type) return type;
      if (!data || data.length === 0) return "bar";
      const first = data[0];
      if (typeof first === "number") return "donut";
      if (first?.x && Array.isArray(first?.y)) return "rangeBar";
      if (first?.x && typeof first?.x === "string") return "bar";
      return "line";
    }, [data, type]);

    // 2. Universal Data Transformer
    const getChartConfig = useCallback((incomingData: any[], chartHeight: number | string) => {
      const t = finalType.toLowerCase();
      
      const isCircular = ["pie", "donut", "radialbar"].includes(t);
      const isHeatmapTreemap = ["heatmap", "treemap"].includes(t);
      const isBarColumn = ["bar", "column"].includes(t);
      const isRadar = ["radar", "radaraxis"].includes(t);

      let series: any = [];
      let labels = options?.labels || [];
      let categories = options?.xaxis?.categories || [];

      // TYPE 1: Circular (Pie, Donut, Radial)
      if (isCircular) {
        series = incomingData.map(d => (typeof d === "object" ? (d.y ?? d.value) : d));
        labels = incomingData.map(d => String(d.x ?? d.label ?? ""));
      } 
      // TYPE 2: Hierarchical (Heatmap, Treemap)
      else if (isHeatmapTreemap) {
        series = [{ data: incomingData }]; // Expects [{x, y}]
      }
      // TYPE 3: Categorical (Bar, Column, Radar)
      else if (isBarColumn || isRadar) {
        series = options.series || [{
          name: options?.seriesName || "Series 1",
          data: incomingData.map(d => (d.y !== undefined ? d.y : d))
        }];
        categories = incomingData.map(d => String(d.x ?? ""));
      }
      // TYPE 4: XY / Range (Line, Area, Scatter, Candlestick, BoxPlot, RangeBar)
      else {
        series = options.series || [{
          name: options?.seriesName || "Series 1",
          data: incomingData.map(d => ({ x: d.x, y: d.y }))
        }];
      }

      return {
        ...options,
        chart: {
          ...options.chart,
          type: t === 'column' ? 'bar' : (t === 'radical donut' ? 'donut' : t),
          height: chartHeight,
          toolbar: { show: false },
          animations: { enabled: true, speed: 800 },
          plotOptions: t === 'column' ? { bar: { horizontal: false } } : options.plotOptions
        },
        series,
        labels: labels.length ? labels : undefined,
        xaxis: {
          ...options.xaxis,
          categories: categories.length ? categories : undefined
        }
      };
    }, [finalType, options]);

    // 3. Imperative API
    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        const chart = chartInstance.current as any;
        if (!chart?.w?.globals) return;
        const { minX, maxX } = chart.w.globals;
        const diff = (maxX - minX) * 0.1;
        chart.zoomX(minX + diff, maxX - diff);
      },
    
      zoomOut: () => {
        const chart = chartInstance.current as any;
        if (!chart?.w?.globals) return;
        const { minX, maxX } = chart.w.globals;
        const diff = (maxX - minX) * 0.1;
        chart.zoomX(minX - diff, maxX + diff);
      },
    
      reset: () => {
        // resetSeries() usually returns the chart to the initial data state
        chartInstance.current?.resetSeries();
      },
    
      download: (format) => {
        const chart = chartInstance.current as any;
        if (!chart?.exports) return;
        
        const fileName = title || "chart-export";
        
        if (format === "csv") {
          chart.exports.exportToCSV({ fileName });
        } else if (format === "svg") {
          chart.exports.exportToSvg({ fileName });
        } else {
          chart.exports.exportToPng({ fileName });
        }
      },
    
      filter: (newData) => {
        const config = getChartConfig(newData, height);
        chartInstance.current?.updateOptions(config);
      }
    }));

    // 4. Lifecycles
    useEffect(() => {
      if (!chartRef.current) return;
      const config = getChartConfig(data, height);
      if (chartInstance.current) {
        chartInstance.current.updateOptions(config);
      } else {
        chartInstance.current = new ApexCharts(chartRef.current, config);
        chartInstance.current.render();
      }
      return () => { chartInstance.current?.destroy(); chartInstance.current = null; };
    }, [getChartConfig, data, height]);

    useEffect(() => {
      if (showModal && modalChartRef.current) {
        const config = getChartConfig(data, "100%");
        modalInstance.current = new ApexCharts(modalChartRef.current, config);
        modalInstance.current.render();
      }
      return () => { modalInstance.current?.destroy(); modalInstance.current = null; };
    }, [showModal, getChartConfig, data]);

    return (
      <div style={wrapperStyle}>
        <div style={toolbarStyle}>
          <span style={titleStyle}>{title}</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            
            <button title="Reset" onClick={() => (ref as any).current?.reset()} style={btnStyle}><CiRead /></button>
            <button title="Full Screen" onClick={() => setShowModal(true)} style={btnStyle}><CiMaximize1 /></button>
          </div>
        </div>

        <div ref={chartRef} />

        {showModal && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <div style={modalHeaderStyle}>
                <h3 style={{ margin: 0 }}>{title}</h3>
                <button onClick={() => setShowModal(false)} style={closeBtnStyle}><RxCross1 /></button>
              </div>
              <div style={{ flex: 1, width: '100%' }} ref={modalChartRef} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

// --- Styles ---
const wrapperStyle: React.CSSProperties = { border: "1px solid #e2e8f0", borderRadius: "12px", background: "#fff", overflow: "hidden" };
const toolbarStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" };
const titleStyle: React.CSSProperties = { fontSize: "14px", fontWeight: 600, color: "#475569", fontFamily: "sans-serif" };
const btnStyle: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", cursor: "pointer", padding: "6px", borderRadius: "6px", display: "flex", alignItems: "center", color: "#64748b" };
const modalOverlayStyle: React.CSSProperties = { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" };
const modalContentStyle: React.CSSProperties = { width: "95vw", height: "90vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" };
const modalHeaderStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", marginBottom: "20px" };
const closeBtnStyle: React.CSSProperties = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: 'flex', alignItems: 'center', justifyContent: 'center' };

export default VizlyChart;