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
import { CiMaximize1 } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

// --- Types ---
export interface VizlyProps {
  data: any[];
  type?: string; 
  options?: any;
  height?: number | string;
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  filter: (newData: any[]) => void;
  reset: () => void;
  download: (type: "png" | "csv" | "svg") => void;
}

// --- Optimized Inference Engine ---
export const inferChartType = (data: any[]): string => {
  if (!data || data.length === 0) return 'bar';
  const first = data[0];

  // Simple number array -> Donut
  if (typeof first === 'number') return 'donut';

  // Coordinate data (x, y)
  if (first?.x !== undefined && first?.y !== undefined) {
    // Check if x is a date-like string or object
    const isDate = first.x instanceof Date || (!isNaN(Date.parse(first.x)) && isNaN(first.x));
    if (isDate) return 'area'; 
    if (Array.isArray(first.y)) return 'rangeBar';
    return 'line';
  }

  // Label/Value pairs
  if (first?.label !== undefined && first?.value !== undefined) return 'donut';

  return 'bar'; // Reliable default
};

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350 }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const modalChartInstance = useRef<ApexCharts | null>(null);

    const [showModal, setShowModal] = useState(false);

    // 1. Determine Type
    const finalType = useMemo(() => type || inferChartType(data), [data, type]);

    // 2. Format Series
    const formatSeries = useCallback((incomingData: any[], chartType: string) => {
      const isCircular = ["pie", "donut", "radialBar"].includes(chartType);
      if (isCircular) {
        return incomingData.map(item => (typeof item === 'object' ? item.value : item));
      }
      return [{ name: "Series 1", data: incomingData }];
    }, []);

    // 3. Imperative API (Exposing internal Apex methods)
    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        if (!chartInstance.current) return;
      
        // Cast to 'any' to bypass the missing 'w' property definition in TS
        const internalChart = chartInstance.current as any;
        const { min, max } = internalChart.w.globals.lastXAxis || { 
          min: internalChart.w.globals.minX, 
          max: internalChart.w.globals.maxX 
        };
      
        const diff = (max - min) * 0.2;
        chartInstance.current.zoomX(min + diff, max - diff);
      },
      zoomOut: () => chartInstance.current?.resetSeries(),
      filter: (newData: any[]) => {
        chartInstance.current?.updateSeries(formatSeries(newData, finalType));
      },
      reset: () => chartInstance.current?.resetSeries(),
      download: (format: "png" | "csv" | "svg") => {
        // Triggers the built-in Apex export
        const chart = modalChartInstance.current || chartInstance.current;
        const base64 = chart?.exports.exportToCSV(); // Example for CSV
        // For standard formats, Apex's toolbar is more reliable
      }
    }));

    // 4. Config Generator
    const getBaseConfig = useCallback((chartHeight: number | string, isModal: boolean) => {
      return {
        ...options,
        chart: {
          ...options.chart,
          type: finalType,
          height: chartHeight,
          toolbar: {
            show: true, // This enables the built-in Download/Zoom/Pan buttons
            tools: {
              download: true, // This adds the 'hamburger' menu for PNG/SVG/CSV
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true
            },
            autoSelected: 'zoom' 
          },
          animations: { enabled: true, easing: 'easeinout', speed: 800 }
        },
        series: formatSeries(data, finalType),
        labels: options.labels || (data[0]?.label ? data.map((d: any) => d.label) : undefined),
        theme: { mode: 'light' }
      };
    }, [data, finalType, options, formatSeries]);

    // 5. Initialize/Update Main Chart
    useEffect(() => {
      if (!chartRef.current) return;

      const config = getBaseConfig(height, false);

      if (!chartInstance.current) {
        chartInstance.current = new ApexCharts(chartRef.current, config);
        chartInstance.current.render();
      } else {
        chartInstance.current.updateOptions(config);
      }
    }, [getBaseConfig, height]);

    // 6. Initialize Modal Chart
    useEffect(() => {
      if (showModal && modalChartRef.current) {
        const config = getBaseConfig("100%", true);
        modalChartInstance.current = new ApexCharts(modalChartRef.current, config);
        modalChartInstance.current.render();
      }
      return () => {
        modalChartInstance.current?.destroy();
        modalChartInstance.current = null;
      };
    }, [showModal, getBaseConfig]);

    // Cleanup
    useEffect(() => {
      return () => chartInstance.current?.destroy();
    }, []);

    return (
      <div style={containerStyle}>
        <button onClick={() => setShowModal(true)} style={iconButtonStyle} title="Full Screen">
          <CiMaximize1 size={20} />
        </button>

        <div ref={chartRef} />

        {showModal && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <div style={modalHeaderStyle}>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Detailed Visualization</h3>
                <button onClick={() => setShowModal(false)} style={closeButtonStyle}>
                  <RxCross1 size={22} />
                </button>
              </div>
              <div ref={modalChartRef} style={{ flex: 1, width: '100%' }} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

// --- Styles ---
const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "15px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
};

const iconButtonStyle: React.CSSProperties = {
  position: "absolute",
  right: "15px",
  top: "15px",
  zIndex: 10,
  background: "#f8fafc",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "6px",
  display: "flex",
  alignItems: "center",
  color: "#475569",
  transition: "all 0.2s"
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0, left: 0,
  width: "100vw", height: "100vh",
  backgroundColor: "rgba(15, 23, 42, 0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  backdropFilter: "blur(4px)"
};

const modalContentStyle: React.CSSProperties = {
  width: "90%",
  height: "85%",
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
};

const modalHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  paddingBottom: "15px",
  borderBottom: "1px solid #f1f5f9"
};

const closeButtonStyle: React.CSSProperties = {
  background: "#f1f5f9",
  border: "none",
  borderRadius: "50%",
  width: "36px", height: "36px",
  display: "flex", alignItems: "center", justifyContent: "center",
  cursor: "pointer",
  color: "#64748b"
};

export default VizlyChart;