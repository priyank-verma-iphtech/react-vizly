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
}

// --- Smart Inference Engine ---
export const inferChartType = (data: any[]): string => {
  if (!Array.isArray(data) || data.length === 0) return 'bar';
  
  const first = data[0];

  // Simple number array -> Donut/Pie
  if (typeof first === 'number') return 'donut';

  // Coordinate data (x, y)
  if (first?.x !== undefined && first?.y !== undefined) {
    // Check if x is a date string or object
    const isDate = first.x instanceof Date || 
                  (typeof first.x === 'string' && isNaN(Number(first.x)) && !isNaN(Date.parse(first.x)));
    
    if (isDate) return 'area'; 
    if (Array.isArray(first.y)) return 'rangeBar';
    if (first?.z !== undefined) return 'bubble';
    return 'line';
  }

  // Label/Value pairs
  if (first?.label !== undefined && first?.value !== undefined) return 'donut';

  return 'bar';
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

    // 2. Safe Data Formatter (Prevents .slice errors)
    const formatSeries = useCallback((incomingData: any[], chartType: string) => {
      const safeData = Array.isArray(incomingData) ? incomingData : [];
      const isCircular = ["pie", "donut", "radialBar"].includes(chartType);

      if (isCircular) {
        return safeData.length > 0 
          ? safeData.map(item => (typeof item === 'object' ? item.value : item))
          : [];
      }
      return [{ name: options?.seriesName || "Series 1", data: safeData }];
    }, [options?.seriesName]);

    // 3. Imperative API (Exposing internal Apex methods safely)
    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        const chart = chartInstance.current as any;
        if (!chart?.w) return;
        const { min, max } = chart.w.globals.lastXAxis || { min: chart.w.globals.minX, max: chart.w.globals.maxX };
        const diff = (max - min) * 0.2;
        chart.zoomX(min + diff, max - diff);
      },
      zoomOut: () => chartInstance.current?.resetSeries(),
      filter: (newData: any[]) => {
        chartInstance.current?.updateSeries(formatSeries(newData, finalType));
      },
      reset: () => chartInstance.current?.resetSeries(),
    }));

    // 4. Config Generator
    const getBaseConfig = useCallback((chartHeight: number | string) => {
      return {
        ...options,
        chart: {
          toolbar: { show: true },
          ...options.chart,
          type: finalType,
          height: chartHeight,
        },
        series: formatSeries(data, finalType),
        labels: options.labels || (data[0]?.label ? data.map((d: any) => d.label) : undefined),
      };
    }, [data, finalType, options, formatSeries]);

    // 5. Main Chart Lifecycle
    useEffect(() => {
      if (!chartRef.current) return;

      const config = getBaseConfig(height);

      if (!chartInstance.current) {
        const newChart = new ApexCharts(chartRef.current, config);
        chartInstance.current = newChart;
        newChart.render().catch(() => {}); // Catch silent render errors
      } else {
        chartInstance.current.updateOptions(config, false, true);
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null; // Important: Clear ref on unmount
        }
      };
    }, [getBaseConfig, height]);

    // 6. Modal Chart Lifecycle
    useEffect(() => {
      if (showModal && modalChartRef.current) {
        const config = getBaseConfig("100%");
        modalChartInstance.current = new ApexCharts(modalChartRef.current, config);
        modalChartInstance.current.render().catch(() => {});
      }
      return () => {
        if (modalChartInstance.current) {
          modalChartInstance.current.destroy();
          modalChartInstance.current = null;
        }
      };
    }, [showModal, getBaseConfig]);

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
                <h3 style={{ margin: 0 }}>Detailed View</h3>
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
  position: "relative", width: "100%", background: "#fff",
  border: "1px solid #e2e8f0", borderRadius: "12px", padding: "15px"
};

const iconButtonStyle: React.CSSProperties = {
  position: "absolute", right: "15px", top: "15px", zIndex: 10,
  background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "6px",
  cursor: "pointer", padding: "6px", display: "flex", alignItems: "center"
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
  backgroundColor: "rgba(15, 23, 42, 0.9)", display: "flex",
  justifyContent: "center", alignItems: "center", zIndex: 9999, backdropFilter: "blur(4px)"
};

const modalContentStyle: React.CSSProperties = {
  width: "90%", height: "85%", backgroundColor: "#fff", borderRadius: "16px",
  padding: "25px", display: "flex", flexDirection: "column"
};

const modalHeaderStyle: React.CSSProperties = {
  display: "flex", justifyContent: "space-between", alignItems: "center",
  marginBottom: "20px", paddingBottom: "15px", borderBottom: "1px solid #f1f5f9"
};

const closeButtonStyle: React.CSSProperties = {
  background: "#f1f5f9", border: "none", borderRadius: "50%",
  width: "36px", height: "36px", cursor: "pointer", display: "flex",
  alignItems: "center", justifyContent: "center"
};

export default VizlyChart;