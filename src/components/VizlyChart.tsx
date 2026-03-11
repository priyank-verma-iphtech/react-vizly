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
  download: (type: "png" | "csv" | "svg") => void;
  filter: (newData: any[]) => void;
}

// --- Inference Engine ---
export const inferChartType = (data: any[]): string => {
  if (!Array.isArray(data) || data.length === 0) return "bar";
  const first = data[0];

  if (typeof first === "number") return "donut";
  if (first?.x !== undefined && first?.y !== undefined) {
    const isDate = first.x instanceof Date || (typeof first.x === "string" && !isNaN(Date.parse(first.x)));
    if (isDate) return "area";
    if (typeof first.x === "string") return "bar";
    if (Array.isArray(first.y)) return "rangeBar";
    return "line";
  }
  return "bar";
};

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title = "Chart View" }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [showModal, setShowModal] = useState(false);

    const finalType = useMemo(() => type || inferChartType(data), [data, type]);

    // --- Configuration Generator ---
    const getBaseConfig = useCallback((incomingData: any[], chartHeight: number | string) => {
      const isCircular = ["pie", "donut", "radialBar"].includes(finalType);
      let series = isCircular 
        ? incomingData.map(d => typeof d === "object" ? d.value : d)
        : [{ name: options?.seriesName || "Series 1", data: incomingData }];

      return {
        ...options,
        chart: {
          ...options.chart,
          type: finalType,
          height: chartHeight,
          toolbar: { show: false }, // We use our own custom UI
          animations: { enabled: true }
        },
        series,
        labels: isCircular ? incomingData.map(d => d.label ?? d.x) : options.labels,
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
        chart.zoomX(min - range * 0.1, max + range * 0.1);
      },
      reset: () => chartInstance.current?.resetSeries(),
      download: (format) => {
        // Access internal Apex export method
        const chart = chartInstance.current as any;
        chart.exports.exportToCSV({ fileName: "vizly-data" }); // example for CSV
      },
      filter: (newData) => {
        chartInstance.current?.updateOptions(getBaseConfig(newData, height));
      }
    }));

    // --- Lifecycle ---
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

    return (
      <div style={wrapperStyle}>
        {/* Custom Toolbar */}
        <div style={toolbarStyle}>
          <span style={titleStyle}>{title}</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={() => ref && 'current' in ref && ref.current?.zoomIn()} style={btnStyle}><CiZoomIn /></button>
            <button onClick={() => ref && 'current' in ref && ref.current?.zoomOut()} style={btnStyle}><CiZoomOut /></button>
            <button onClick={() => ref && 'current' in ref && ref.current?.reset()} style={btnStyle}><CiRead /></button>
            <button onClick={() => setShowModal(true)} style={btnStyle}><CiMaximize1 /></button>
          </div>
        </div>

        <div ref={chartRef} />

        {/* Full View Modal */}
        {showModal && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <div style={modalHeaderStyle}>
                <h3>{title} - Detailed View</h3>
                <button onClick={() => setShowModal(false)} style={closeBtnStyle}><RxCross1 /></button>
              </div>
              <div style={{ flex: 1 }} ref={modalChartRef} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

// --- Styling ---
const wrapperStyle: React.CSSProperties = { border: "1px solid #edf2f7", borderRadius: "12px", background: "#fff", overflow: "hidden" };
const toolbarStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid #f1f5f9" };
const titleStyle: React.CSSProperties = { fontSize: "14px", fontWeight: 600, color: "#475569" };
const btnStyle: React.CSSProperties = { background: "none", border: "none", cursor: "pointer", padding: "6px", borderRadius: "4px", display: "flex", alignItems: "center", color: "#64748b" };
const modalOverlayStyle: React.CSSProperties = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" };
const modalContentStyle: React.CSSProperties = { width: "95vw", height: "90vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" };
const modalHeaderStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", marginBottom: "20px" };
const closeBtnStyle: React.CSSProperties = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer" };

export default VizlyChart;