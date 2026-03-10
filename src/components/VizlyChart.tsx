import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState
} from "react";
import ApexCharts from "apexcharts";
import { detectChartType } from "./ChartDetector";

export interface VizlyProps {
  data: any[];
  options?: any;
  height?: number | string;
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  filter: (newData: any[]) => void;
  reset: () => void;
  fullView: () => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, options, height = 350 }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const modalChartRef = useRef<HTMLDivElement>(null);

    const chartInstance = useRef<ApexCharts | null>(null);
    const modalChartInstance = useRef<ApexCharts | null>(null);

    const [showModal, setShowModal] = useState(false);

    const inferredType = detectChartType(data);

    const buildSeries = (data: any[], type: string) => {

      if (type === "pie" || type === "donut" || type === "radialBar") {
        return data;
      }
    
      if (type === "bubble" || type === "scatter") {
        return [{ data }];
      }
    
      if (type === "treemap") {
        return [{ data }];
      }
    
      return [{ data }];
    };

    const buildConfig = (chartHeight: number | string) => ({
      chart: {
        type: inferredType,
        height: chartHeight,
        zoom: { enabled: true },
        toolbar: {
          show: true,
          tools: {
            download: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        }
      },
      series: buildSeries(data, inferredType),
      ...options
    });

    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        chartInstance.current?.zoomX(10, 50);
      },

      zoomOut: () => {
        chartInstance.current?.resetSeries();
      },

      filter: (newData: any[]) => {
        chartInstance.current?.updateSeries([{ data: newData }]);
      },

      reset: () => {
        chartInstance.current?.resetSeries();
      },

      fullView: () => {
        setShowModal(true);
      }
    }));

    useEffect(() => {
      if (!chartRef.current) return;

      const config = buildConfig(height);

      chartInstance.current = new ApexCharts(chartRef.current, config);
      chartInstance.current.render();

      return () => {
        chartInstance.current?.destroy();
      };
    }, [data, height, options]);

    useEffect(() => {
      if (!showModal || !modalChartRef.current) return;

      const config = buildConfig("80vh");

      modalChartInstance.current = new ApexCharts(
        modalChartRef.current,
        config
      );

      modalChartInstance.current.render();

      return () => {
        modalChartInstance.current?.destroy();
      };
    }, [showModal]);

    return (
      <>
        <div style={{ position: "relative" }}>
          <button
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 10
            }}
            onClick={() => setShowModal(true)}
          >
            Full View
          </button>

          <div ref={chartRef} />
        </div>

        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000
            }}
          >
            <div
              style={{
                width: "90%",
                height: "90%",
                background: "#fff",
                padding: 20,
                position: "relative"
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  right: 20,
                  top: 20
                }}
              >
                Close
              </button>

              <div ref={modalChartRef} />
            </div>
          </div>
        )}
      </>
    );
  }
);

export default VizlyChart;