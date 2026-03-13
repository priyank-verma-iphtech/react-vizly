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
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

export interface VizlyProps {
  data: any[] | any[][];
  type?: string | string[];
  options?: any;
  height?: number | string;
  title?: string | { text: string; align?: 'left' | 'center' | 'right'; style?: any };
}

export interface VizlyRef {
  reset: () => void;
  toggleFullscreen: () => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    // 1. Memoize Icon to prevent toolbar flickering
    const expandIconHtml = useMemo(() => ReactDOMServer.renderToString(
      <BsArrowsAngleExpand size={14} style={{ color: '#9ca3af', marginTop: '4px' }} />
    ), []);

    const finalType = useMemo(() => {
      if (type) return type;
      if (Array.isArray(data[0])) return (data as any[][]).map((d) => detectChartType(d));
      return detectChartType(data as any[]);
    }, [data, type]);

    const config = useMemo(() => {
      const t = Array.isArray(finalType) ? String(finalType[0]).toLowerCase() : String(finalType).toLowerCase();
      
      let series: any = [];
      let labels: any = [];
      let categories: any = [];
      
      if (Array.isArray(data[0])) {
        series = (data as any[][]).map((d, i) => ({
          name: `Series ${i + 1}`,
          type: Array.isArray(type) ? type[i] : (type || (Array.isArray(finalType) ? finalType[i] : finalType)),
          ...transformData(Array.isArray(finalType) ? (finalType[i] as string) : (finalType as string), d).series[0],
        }));
      } else {
        const transformed = transformData(finalType as string, data as any[]);
        series = transformed.series;
        labels = transformed.labels;
        categories = transformed.categories;
      }

      return {
        ...options,
        chart: {
          id: "vizly-main-chart", 
          type: t === "funnel" || t === "column" ? "bar" : t,
          height: "100%",
          width: "100%",
          toolbar: {
            show: true,
            tools: {
              download: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: [
                {
                  icon: expandIconHtml,
                  index: 6,
                  title: 'Center View',
                  class: 'custom-expand-icon',
                  click: () => setIsExpanded(prev => !prev)
                }
              ],
            },
          },
          ...options.chart,
        },
        series,
        labels: labels?.length ? labels : undefined,
        xaxis: categories?.length ? { categories, ...options.xaxis } : options.xaxis,
        title: {
          text: typeof title === 'string' ? title : title?.text,
          align: (typeof title === 'object' ? title?.align : 'left'),
          ...options.title
        }
      };
    }, [data, finalType, options, title, expandIconHtml, type]);

    // Initialize and update
    useEffect(() => {
      if (!chartRef.current) return;
      if (!chartInstance.current) {
        chartInstance.current = new ApexCharts(chartRef.current, config);
        chartInstance.current.render();
      } else {
        chartInstance.current.updateOptions(config);
      }
    }, [config]);

 // Handle Resize & ESC key
useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsExpanded(false);
  };
  
  // We trigger this whether isExpanded is true OR false 
  // to ensure the chart fits both the modal and the original slot.
  const timer = setTimeout(() => {
    if (chartInstance.current) {
      // This is the "cleanest" way to fix the TS error.
      // It forces the browser to tell ApexCharts: "Your container changed!"
      window.dispatchEvent(new Event('resize'));
    }
  }, 100); // Slightly longer delay to ensure CSS transitions finish

  if (isExpanded) {
    window.addEventListener('keydown', handleEsc);
  }
  
  return () => {
    window.removeEventListener('keydown', handleEsc);
    clearTimeout(timer);
  };
}, [isExpanded]);

    useImperativeHandle(ref, () => ({
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsExpanded(!isExpanded)
    }));

    return (
      <div style={{ height: isExpanded ? '0' : height, width: '100%', position: 'relative' }}>
        <style>{`
          /* Crucial: Ensure the download menu is visible above the overlay */
          .apexcharts-menu { z-index: 1000001 !important; }
          
          .vizly-container-expanded {
            position: fixed !important;
            inset: 0 !important;
            z-index: 1000000 !important;
            background: rgba(0, 0, 0, 0.75);
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .vizly-content-wrapper {
            background: #fff;
            border-radius: 12px;
            width: 90%;
            max-width: 850px;
            height: 550px;
            position: relative;
            padding: 20px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          }

          .vizly-close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            z-index: 10;
            cursor: pointer;
            border: none;
            background: none;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>

        {/* This wrapper acts as either a standard div or a centered modal overlay */}
        <div 
          className={isExpanded ? "vizly-container-expanded" : ""}
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className={isExpanded ? "vizly-content-wrapper" : ""}
            onClick={(e) => e.stopPropagation()}
            style={!isExpanded ? { height: '100%', width: '100%' } : {}}
          >
            {isExpanded && (
              <button className="vizly-close-btn" onClick={() => setIsExpanded(false)}>
                <BsArrowsAngleContract size={18} />
              </button>
            )}
            
            <div 
              ref={chartRef} 
              style={{ 
                height: '100%', 
                width: '100%',
                background: isExpanded ? '#fff' : 'transparent' 
              }} 
            />
          </div>
        </div>
      </div>
    );
  }
);

export default VizlyChart;

// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useMemo,
//   forwardRef,
//   useImperativeHandle
// } from "react";
// import ApexCharts from "apexcharts";
// import { detectChartType } from "../utils/detectChartType";
// import { transformData } from "../utils/transformData";
// import ReactDOMServer from "react-dom/server";
// import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

// export interface VizlyProps {
//   data: any[] | any[][];
//   type?: string | string[];
//   options?: any;
//   height?: number | string;
//   title?: string | { text: string; align?: 'left' | 'center' | 'right'; style?: any };
// }

// export interface VizlyRef {
//   zoomIn: () => void;
//   zoomOut: () => void;
//   reset: () => void;
//   toggleFullscreen: () => void;
// }

// const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
//   ({ data, type, options = {}, height = 350, title }, ref) => {
//     const chartRef = useRef<HTMLDivElement>(null);
//     const modalChartRef = useRef<HTMLDivElement>(null);
//     const chartInstance = useRef<ApexCharts | null>(null);
//     const modalInstance = useRef<ApexCharts | null>(null);
    
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // 1. Memoize the Icon String to prevent re-renders wiping the custom tool
//     const expandIconString = useMemo(() => ReactDOMServer.renderToString(
//       <BsArrowsAngleExpand 
//         size={14} 
//         style={{ color: '#9ca3af', marginTop: '5px', marginLeft: '2px' }} 
//       />
//     ), []);

//     const finalType = useMemo(() => {
//       if (type) return type;
//       if (Array.isArray(data[0])) {
//         return (data as any[][]).map((d) => detectChartType(d));
//       }
//       return detectChartType(data as any[]);
//     }, [data, type]);

//     // 2. Logic to generate configuration for either Main or Modal chart
//     const getChartConfig = (isModal: boolean) => {
//       const t = Array.isArray(finalType)
//         ? String(finalType[0]).toLowerCase()
//         : String(finalType).toLowerCase();

//       let series: any = [];
//       let labels: any = [];
//       let categories: any = [];

//       if (Array.isArray(data[0])) {
//         const datasets = data as any[][];
//         series = datasets.map((d, i) => {
//           const chartType = Array.isArray(type)
//             ? type[i] || (Array.isArray(finalType) ? finalType[i] : finalType)
//             : Array.isArray(finalType) ? finalType[i] : finalType;

//           const transformed = transformData(chartType as string, d);
//           return {
//             name: `Series ${i + 1}`,
//             type: chartType,
//             ...transformed.series[0],
//           };
//         });
//       } else {
//         const transformed = transformData(finalType as string, data as any[]);
//         series = transformed.series;
//         labels = transformed.labels;
//         categories = transformed.categories;
//       }

//       const cfg: any = {
//         ...options,
//         chart: {
//           // CRITICAL: Unique IDs prevent internal event conflicts
//           id: isModal ? "vizly-modal-chart" : "vizly-main-chart",
//           type: t === "funnel" || t === "column" ? "bar" : t,
//           height: "100%",
//           toolbar: {
//             show: true,
//             tools: {
//               download: true,
//               selection: true,
//               zoom: true,
//               zoomin: true,
//               zoomout: true,
//               pan: true,
//               reset: true,
//               customIcons: isModal ? [] : [
//                 {
//                   icon: expandIconString,
//                   index: 6,
//                   title: 'Expand',
//                   class: 'custom-icon',
//                   click: () => setIsModalOpen(true)
//                 }
//               ],
//             },
//           },
//           animations: { enabled: !isModal }, // Faster rendering in modal
//           ...options.chart,
//         },
//         title: {
//           text: typeof title === 'string' ? title : (title?.text || options.title?.text || undefined),
//           align: (typeof title === 'object' ? title?.align : options.title?.align) || 'left',
//           style: { fontSize: '14px', fontWeight: 'bold', ...options.title?.style },
//         },
//         series,
//         labels: labels?.length ? labels : undefined,
//         xaxis: categories?.length ? { ...options.xaxis, categories } : options.xaxis,
//         plotOptions: {
//           ...options.plotOptions,
//           bar: {
//             horizontal: t === "funnel" || t === "rangebar",
//             isFunnel: t === "funnel",
//             ...options.plotOptions?.bar,
//           },
//         },
//         tooltip: { theme: "dark", ...options.tooltip },
//       };

//       return cfg;
//     };

//     // --- MAIN CHART EFFECT ---
//     useEffect(() => {
//       if (!chartRef.current) return;
//       const config = getChartConfig(false);
      
//       if (!chartInstance.current) {
//         chartInstance.current = new ApexCharts(chartRef.current, config);
//         chartInstance.current.render();
//       } else {
//         chartInstance.current.updateOptions(config);
//       }

//       return () => {
//         chartInstance.current?.destroy();
//         chartInstance.current = null;
//       };
//     }, [data, finalType, options, title, expandIconString]);

//     // --- MODAL CHART EFFECT ---
//     useEffect(() => {
//       if (isModalOpen && modalChartRef.current) {
//         const config = getChartConfig(true);
//         // Small delay to ensure the modal container has its dimensions
//         const timer = setTimeout(() => {
//           modalInstance.current = new ApexCharts(modalChartRef.current, config);
//           modalInstance.current.render();
//         }, 50);

//         return () => {
//           clearTimeout(timer);
//           modalInstance.current?.destroy();
//           modalInstance.current = null;
//         };
//       }
//     }, [isModalOpen, data, finalType, options]);

//     useImperativeHandle(ref, () => ({
//       zoomIn: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
//       zoomOut: () => chartInstance.current?.zoomX(undefined as any, undefined as any),
//       reset: () => chartInstance.current?.resetSeries(),
//       toggleFullscreen: () => setIsModalOpen(!isModalOpen)
//     }));

//     return (
//       <div style={{ height, width: '100%', position: 'relative' }}>
//         <div ref={chartRef} style={{ height: '100%', width: '100%' }} />

//         {isModalOpen && (
//           <div style={{
//             position: 'fixed',
//             inset: 0,
//             backgroundColor: 'rgba(0,0,0,0.75)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 99999, // Ensure it's above everything
//           }}>
//             {/* INLINE CSS FIX FOR THE DOWNLOAD MENU */}
//             <style>{`
//               .apexcharts-menu { 
//                 z-index: 100000 !important; 
//                 color: #333 !important;
//               }
//             `}</style>

//             <div style={{
//               width: '90%',
//               maxWidth: '800px',
//               height: '500px',
//               background: '#fff',
//               borderRadius: '12px',
//               padding: '50px 20px 20px 20px',
//               position: 'relative',
//               boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
//             }}>
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   position: 'absolute',
//                   top: 15,
//                   right: 20,
//                   border: 'none',
//                   background: 'transparent',
//                   cursor: 'pointer',
//                   zIndex: 10
//                 }}
//               >
//                 <BsArrowsAngleContract size={20} color="#333" />
//               </button>
              
//               <div ref={modalChartRef} style={{ height: '100%', width: '100%' }} />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// );

// export default VizlyChart;