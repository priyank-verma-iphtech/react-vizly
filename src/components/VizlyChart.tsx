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
import { CiMaximize1, CiZoomIn, CiZoomOut, CiRead,} from "react-icons/ci";
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

// --- Smart Inference Engine ---
export const inferChartType = (data: any[]): string => {
  if (!Array.isArray(data) || data.length === 0) return "bar";
  const first = data[0];

  if (typeof first === "number") return "donut";
  if (first?.x !== undefined && first?.y !== undefined) {
    const isDate = first.x instanceof Date || (typeof first.x === "string" && !isNaN(Date.parse(first.x)));
    if (isDate) return "area";
    if (typeof first.x === "string") return "bar";
    return "line";
  }
  return "bar";
};

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title = "Chart View" }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalInstance = useRef<ApexCharts | null>(null);
    const [showModal, setShowModal] = useState(false);

    const finalType = useMemo(() => type || inferChartType(data), [data, type]);

    // --- Configuration Logic (The fix for Bar charts is here) ---
    const getBaseConfig = useCallback((incomingData: any[], chartHeight: number | string) => {
      const isCircular = ["pie", "donut", "radialBar"].includes(finalType);
      const isBar = finalType === "bar";

      let series: any = [];
      let labels = options?.labels;
      let categories = options?.xaxis?.categories;

      if (isCircular) {
        series = incomingData.map(d => typeof d === "object" ? (d.value ?? d.y) : d);
        labels = incomingData.map(d => d.label ?? d.x);
      } else if (isBar) {
        // Bar charts need a simple array of values and categories for labels
        series = [{
          name: options?.seriesName || "Series 1",
          data: incomingData.map(d => d.y ?? d)
        }];
        categories = incomingData.map(d => String(d.x ?? ""));
      } else {
        // Line/Area can handle the [{x, y}] format directly
        series = [{
          name: options?.seriesName || "Series 1",
          data: incomingData
        }];
      }

      return {
        ...options,
        chart: {
          ...options.chart,
          type: finalType,
          height: chartHeight,
          toolbar: { show: false },
          animations: { enabled: true }
        },
        series,
        labels,
        xaxis: { ...options.xaxis, categories }
      };
    }, [finalType, options]);

    // --- Imperative API ---
    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        const chart = chartInstance.current as any;
        if (!chart?.w) return;
        const { min, max } = chart.w.globals.lastXAxis || { min: chart.w.globals.minX, max: chart.w.globals.maxX };
        const range = max - min;
        chart.zoomX(min + range * 0.1, max - range * 0.1);
      },
      zoomOut: () => {
        const chart = chartInstance.current as any;
        if (!chart?.w) return;
        const { min, max } = chart.w.globals.lastXAxis;
        const range = max - min;
        chart.zoomX(min - range * 0.2, max + range * 0.2);
      },
      reset: () => chartInstance.current?.resetSeries(),
      download: (format) => {
        const chart = chartInstance.current as any;
        if (!chart) return;
        if (format === "csv") chart.exports.exportToCSV({ fileName: title });
        if (format === "png") chart.exports.exportToPng({ fileName: title });
        if (format === "svg") chart.exports.exportToSvg({ fileName: title });
      },
      filter: (newData) => {
        chartInstance.current?.updateOptions(getBaseConfig(newData, height));
      }
    }));

    // --- Main Chart Lifecycle ---
    useEffect(() => {
      if (!chartRef.current) return;
      const config = getBaseConfig(data, height);
      if (!chartInstance.current) {
        chartInstance.current = new ApexCharts(chartRef.current, config);
        chartInstance.current.render();
      } else {
        chartInstance.current.updateOptions(config);
      }
      return () => { chartInstance.current?.destroy(); chartInstance.current = null; };
    }, [getBaseConfig, data, height]);

    // --- Modal Chart Lifecycle ---
    useEffect(() => {
      if (showModal && modalChartRef.current) {
        const config = getBaseConfig(data, "100%");
        modalInstance.current = new ApexCharts(modalChartRef.current, config);
        modalInstance.current.render();
      }
      return () => { modalInstance.current?.destroy(); modalInstance.current = null; };
    }, [showModal, getBaseConfig, data]);

    return (
      <div style={wrapperStyle}>
        <div style={toolbarStyle}>
          <span style={titleStyle}>{title}</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button title="Download PNG" onClick={() => (ref as any).current?.download("png")} style={btnStyle}><CiDownload /></button>
            <button title="Zoom In" onClick={() => (ref as any).current?.zoomIn()} style={btnStyle}><CiZoomIn /></button>
            <button title="Zoom Out" onClick={() => (ref as any).current?.zoomOut()} style={btnStyle}><CiZoomOut /></button>
            <button title="Reset" onClick={() => (ref as any).current?.reset()} style={btnStyle}><CiRead /></button>
            <button title="Full View" onClick={() => setShowModal(true)} style={btnStyle}><CiMaximize1 /></button>
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

// --- Styling ---
const wrapperStyle: React.CSSProperties = { border: "1px solid #edf2f7", borderRadius: "12px", background: "#fff", overflow: "hidden", position: 'relative' };
const toolbarStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" };
const titleStyle: React.CSSProperties = { fontSize: "14px", fontWeight: 600, color: "#475569" };
const btnStyle: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", cursor: "pointer", padding: "6px", borderRadius: "6px", display: "flex", alignItems: "center", color: "#64748b" };
const modalOverlayStyle: React.CSSProperties = { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.9)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" };
const modalContentStyle: React.CSSProperties = { width: "90vw", height: "85vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" };
const modalHeaderStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" };
const closeBtnStyle: React.CSSProperties = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: 'flex', alignItems: 'center', justifyContent: 'center' };

export default VizlyChart;