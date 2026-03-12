import React, {
  useEffect,
  useRef,
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
}

export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  toggleFullscreen: () => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350 }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);

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

      // Logic to handle multiple datasets or single dataset
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
        ...options, // Spread early so defaults can override or be overridden
        chart: {
          type: t === "column" ? "bar" : t,
          height: "100%", // Use 100% of the container ref
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
                  icon: '<svg fill="#000000" viewBox="0 0 24 24" width="20px" height="20px"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
                  index: 6, 
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
        // Accept any color format (RGBA, Hex, HSL) from user options
        colors: options.colors || [
          'rgba(0, 143, 251, 0.85)', 
          '#FEB019', 
          'hsl(145, 63%, 42%)', 
          'green'
        ],
    
        fill: {
          // Set type to 'solid' by default to respect RGBA transparency
          type: options.fill?.type || 'solid', 
          ...options.fill
        },
    
        series,
        dataLabels: {
          enabled: options.dataLabels?.enabled ?? false,
          ...options.dataLabels,
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
    }, [data, finalType, options, height]);

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