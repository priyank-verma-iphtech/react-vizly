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
import ReactDOMServer from "react-dom/server";
import { BsArrowsAngleExpand } from "react-icons/bs";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalChartRef = useRef<HTMLDivElement>(null);
    const modalInstance = useRef<ApexCharts | null>(null);

    const iconString = ReactDOMServer.renderToString(
  <BsArrowsAngleExpand 
    size={12} 
    style={{ 
      color: '#9ca3af', 
      verticalAlign: 'middle',
      marginTop: '4px' 
    }} 
  />
);

    
   
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
                  icon: iconString,
                  index: 6, 
                  click: ()=> setIsModalOpen(true)
                  
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
    }, [data, finalType, options, height, title,iconString]); 



   
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

    // --- RENDER MODAL CHART ---
    useEffect(() => {
      if (isModalOpen && modalChartRef.current) {
        // Create a separate instance for the modal
        modalInstance.current = new ApexCharts(modalChartRef.current, {
          ...config,
          chart: { ...config.chart, toolbar: { show: false } } // Clean view for modal
        });
        modalInstance.current.render();
      }
      return () => {
        modalInstance.current?.destroy();
        modalInstance.current = null;
      };
    }, [isModalOpen, config]);


    useImperativeHandle(ref, () => ({
      zoomIn: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
      zoomOut: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsModalOpen(!isModalOpen)
    }));
    return (
      <div style={{ height, width: '100%', position: 'relative' }}>
        <div ref={chartRef} style={{ height: '100%', width: '100%' }} />

        {/* CUSTOM CENTERED SMALL MODAL */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}>
            <div style={{
              width: '90%',
              maxWidth: '600px', // Makes it "not so large"
              height: '450px',   // Fixed height for the modal
              background: '#fff',
              borderRadius: '12px',
              padding: '40px 20px 20px 20px',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 15,
                  border: 'none',
                  background: 'transparent',
                  fontSize: '22px',
                  cursor: 'pointer'
                }}
              >✕</button>
              
              <div ref={modalChartRef} style={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default VizlyChart;