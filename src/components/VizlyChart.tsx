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
  // RESTORED: Add title to the interface so TS doesn't complain
  title?: string | { text: string; align?: 'left' | 'center' | 'right'; style?: any };
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  toggleFullscreen: () => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title }, ref) => { // Destructured title here
    const chartRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
      const handler = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handler);
      return () => document.removeEventListener("fullscreenchange", handler);
    }, []);
   
    const finalType = useMemo(() => {
      if (type) return type;
      if (Array.isArray(data[0])) {
        return (data as any[][]).map((d) => detectChartType(d));
      }
      return detectChartType(data as any[]);
    }, [data, type]);

    const config = useMemo(() => {
      const t = Array.isArray(finalType)
        ? String(finalType[0]).toLowerCase()
        : String(finalType).toLowerCase();

      let series: any = [];
      let labels: any = [];
      let categories: any = [];

      if (Array.isArray(data[0])) {
        const datasets = data as any[][];
        series = datasets.map((d, i) => {
          const chartType = Array.isArray(type)
            ? type[i] || (Array.isArray(finalType) ? finalType[i] : finalType)
            : Array.isArray(finalType) ? finalType[i] : finalType;

          const transformed = transformData(chartType as string, d);
          return {
            name: `Series ${i + 1}`,
            type: chartType,
            ...transformed.series[0],
          };
        });
      } else {
        const transformed = transformData(finalType as string, data as any[]);
        series = transformed.series;
        labels = transformed.labels;
        categories = transformed.categories;
      }

      const cfg: any = {
        ...options,
        chart: {
          type: t === "funnel" || t === "column" ? "bar" : t,
          height: "100%",
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: [
                {
                  icon: isFullscreen 
                    ? `<svg fill="#9ca3af" viewBox="0 0 24 24" width="18" height="18"><path d="M4 14h6v6H8v-4H4v-2zm10 0h6v2h-4v4h-2v-6zM4 4h2v4h4v2H4V4zm10 0h2v4h4v2h-6V4z"/></svg>` 
                    : `<svg fill="#9ca3af" viewBox="0 0 1000 1000" width="18" height="18"><path d="M702 82c-35-18-77 3-77 43v80l-160 160c-18 18-18 47 0 65s47 18 65 0l160-160h80c40 0 61-42 43-77L702 82zM298 918c35 18 77-3 77-43v-80l160-160c18-18 18-47 0-65s-47-18-65 0l-160 160h-80c-40 0-61 42-43 77l111 111z"/></svg>`,
                  index: 6, 
                  title: "Full View",
                  class: 'custom-fullscreen-icon',
                  click: () => {
                    if (!containerRef.current) return;
                    if (!document.fullscreenElement) {
                      containerRef.current.requestFullscreen();
                    } else {
                      document.exitFullscreen();
                    }
                  }
                }
              ],
            },
            autoSelected: "zoom",
          },
          animations: { enabled: true },
          ...options.chart,
        },
       
        title: {
          text: typeof title === 'string' ? title : (title?.text || options.title?.text || undefined),
          align: (typeof title === 'object' ? title?.align : options.title?.align) || 'left',
          margin: options.title?.margin || 10,
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#263238',
            ...options.title?.style
          },
        },
        colors: options.colors || [
          'rgba(0, 143, 251, 0.85)', 
          '#FEB019', 
          'hsl(145, 63%, 42%)', 
          'green'
        ],
        fill: {
          type: options.fill?.type || 'solid', 
          ...options.fill
        },
        series,
        dataLabels: {
          enabled: options.dataLabels?.enabled ?? false,
          ...options.dataLabels,
        },
        plotOptions: {
          ...options.plotOptions,
          bar: {
            horizontal: t === "funnel" || t === "rangebar",
            isFunnel: t === "funnel",
            ...options.plotOptions?.bar,
          },
          bubble: {
            minBubbleRadius: 5,
            maxBubbleRadius: 20,
            ...options.plotOptions?.bubble,
          }
        },
        tooltip: {
          enabled: true,
          theme: "dark",
          ...options.tooltip,
        },
        grid: {
          show: true,
          ...options.grid,
        },
      };

      if (labels?.length) cfg.labels = labels;
      if (categories?.length) {
        cfg.xaxis = { ...options.xaxis, categories };
      }

      if (t === "bar" || t === "column") {
        cfg.plotOptions = {
          ...options.plotOptions,
          bar: {
            
            ...(options.plotOptions?.bar || {}),
            horizontal: false,
          },
        };
      }

      return cfg;
    }, [data, finalType, options, height, title]); 

    useImperativeHandle(ref, () => ({
      zoomIn() {
        const chart = chartInstance.current as any;
        if (!chart?.w?.globals) return;
        const { minX, maxX } = chart.w.globals;
        const diff = (maxX - minX) * 0.1;
        chart.zoomX(minX + diff, maxX - diff);
      },
      zoomOut() {
        const chart = chartInstance.current as any;
        if (!chart?.w?.globals) return;
        const { minX, maxX } = chart.w.globals;
        const diff = (maxX - minX) * 0.1;
        chart.zoomX(minX - diff, maxX + diff);
      },
      reset() {
        chartInstance.current?.resetSeries();
      },
      toggleFullscreen() {
        if (!containerRef.current) return;
        if (!document.fullscreenElement) {
          containerRef.current.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    }));

    useEffect(() => {
      if (!chartRef.current) return;
      if (!chartInstance.current) {
        chartInstance.current = new ApexCharts(chartRef.current, config);
        chartInstance.current.render();
      } else {
        chartInstance.current.updateOptions(config, true, true);
      }
      return () => {
        chartInstance.current?.destroy();
        chartInstance.current = null;
      };
    }, [config]);

    return (
      <div 
        ref={containerRef} 
        style={{ height: height, width: '100%', background: '#fff' }}
      >
        <div ref={chartRef} />
      </div>
    );
  }
);

export default VizlyChart;