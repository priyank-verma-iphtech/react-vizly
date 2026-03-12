import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle
} from "react";
import ApexCharts from "apexcharts";
import { detectChartType } from "../utils/detectChartType";
import { transformData } from "../utils/transformData";

export interface VizlyProps {
  data: any[] | any[][];
  type?: string | string[];
  options?: any;
  height?: number | string;
  title?: string | { text: string; align?: 'left' | 'center' | 'right'; style?: any };
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
    const containerRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
      const handler = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handler);
      return () => document.removeEventListener("fullscreenchange", handler);
    }, []);

    const config = useMemo(() => {
      const rawType = Array.isArray(type) ? type[0] : (type || detectChartType(Array.isArray(data[0]) ? data[0] : data));
      const t = String(rawType).toLowerCase();

      const transformed = transformData(t, data as any[]);

      const cfg: any = {
        ...options,
        chart: {
          // Essential: Mapping 'column' and 'funnel' to 'bar' engine
          type: (t === "funnel" || t === "column") ? "bar" : t,
          height: "100%",
          id: options.chart?.id || `viz-${Math.random().toString(36).substr(2, 5)}`,
          toolbar: {
            show: true,
            tools: {
              download: true,
              customIcons: [
                {
                  // This is the SVG path for BsArrowsAngleExpand
                  icon: `<svg stroke="currentColor" fill="#9ca3af" stroke-width="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.828 10.172L3 13V10H2v4h4v-1H3l2.828-2.828-1.414-1.414zm4.344 0l1.414 1.414L13 10.172V13h1V9h-4v1h3l-2.828 1.172zM5.828 5.828L3 3v3H2V2h4v1H3l2.828 2.828-1.414-1.414zm4.344 0l1.414-1.414L13 5.828V3h1v4h-4V6h3l-2.828-2.828z"></path></svg>`,
                  index: 6,
                  title: "Toggle Fullscreen",
                  click: () => {
                    if (!document.fullscreenElement) containerRef.current?.requestFullscreen();
                    else document.exitFullscreen();
                  }
                }
              ],
            },
          },
          ...options.chart,
        },
        series: transformed.series,
        labels: transformed.labels || options.labels, // Required for PolarArea/RadialBar
        xaxis: {
          categories: transformed.categories,
          ...options.xaxis
        },
        dataLabels: { enabled: options.dataLabels?.enabled ?? false },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal: t === "funnel" || t === "rangebar",
            isFunnel: t === "funnel",
            ...options.plotOptions?.bar,
          },
          bubble: {
            minBubbleRadius: options.plotOptions?.bubble?.minBubbleRadius ?? 5,
            maxBubbleRadius: options.plotOptions?.bubble?.maxBubbleRadius ?? 20,
          },
          // Radar/RadialBar often need explicit sizing to render well
          radar: { size: options.plotOptions?.radar?.size ?? 140 },
          radialBar: {
            hollow: { size: '70%' },
            ...options.plotOptions?.radialBar
          }
        },
        title: {
          text: typeof title === 'string' ? title : (title?.text || options.title?.text),
          align: (typeof title === 'object' ? title?.align : options.title?.align) || 'left',
          ...options.title
        }
      };

      return cfg;
    }, [data, type, options, title, isFullscreen]);

    // Initialize/Update Chart
    useEffect(() => {
      if (!chartRef.current) return;
      if (!chartInstance.current) {
        chartInstance.current = new ApexCharts(chartRef.current, config);
        chartInstance.current.render();
      } else {
        chartInstance.current.updateOptions(config);
      }
    }, [config]);

    useImperativeHandle(ref, () => ({
      zoomIn: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
      zoomOut: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => {
        if (!document.fullscreenElement) containerRef.current?.requestFullscreen();
        else document.exitFullscreen();
      }
    }));

    return (
      <div 
        ref={containerRef} 
        style={{ 
          height: height, 
          width: '100%', 
          backgroundColor: isFullscreen ? 'rgba(0,0,0,0.5)' : '#fff', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.3s ease'
        }}
      >
        <div 
          ref={chartRef} 
          style={{ 
            width: isFullscreen ? '70%' : '100%', // Makes it "Smaller and in Center"
            height: isFullscreen ? '70%' : '100%',
            backgroundColor: '#fff',
            borderRadius: isFullscreen ? '12px' : '0px', // Modal-like rounded corners
            padding: isFullscreen ? '20px' : '0px',
            boxShadow: isFullscreen ? '0 20px 25px -5px rgba(0,0,0,0.1)' : 'none'
          }} 
        />
      </div>
    );
  }
);

export default VizlyChart;