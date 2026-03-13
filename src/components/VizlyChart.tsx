import React, { useEffect, useRef, useState, useMemo, forwardRef, useImperativeHandle } from "react";
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
  colors?: string[];
}

// FIX: Ensure this is explicitly exported for index.ts to find it
export interface VizlyRef {
  reset: () => void;
  toggleFullscreen: () => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(
  ({ data, type, options = {}, height = 350, title, colors }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const expandIconHtml = useMemo(() => ReactDOMServer.renderToString(
      <BsArrowsAngleExpand size={14} style={{ color: '#9ca3af', marginTop: '4px', marginRight: "4px" }} />
    ), []);

    const config = useMemo(() => {
      const finalType = type || (Array.isArray(data[0]) ? data.map(d => detectChartType(d)) : detectChartType(data));
      const isMulti = Array.isArray(data[0]);
      const baseType = Array.isArray(finalType) ? String(finalType[0]) : String(finalType);

      // FIX: Initialize with default empty arrays to satisfy TS2454
      let series: any[] = [];
      let labels: string[] = [];
      let categories: string[] = [];

      if (isMulti) {
        series = (data as any[][]).map((d, i) => {
          const t = Array.isArray(finalType) ? finalType[i] : finalType;
          const res = transformData(t as string, d);
          return { 
            name: `Series ${i + 1}`, 
            type: t === 'funnel' ? 'bar' : t, 
            data: res.series[0]?.data || res.series 
          };
        });
      } else {
        const res = transformData(baseType, data as any[]);
        series = res.series; 
        labels = res.labels; 
        categories = res.categories;
      }

      return {
        ...options,
        colors: colors || options.colors,
        chart: {
          id: "vizly-chart",
          type: (baseType === "funnel" || baseType === "rangebar") ? "bar" : baseType,
          height: "100%",
          toolbar: {
            show: true,
            tools: {
              customIcons: [{
                icon: expandIconHtml, index: 6, title: 'Expand', class: 'custom-icon',
                click: () => setIsExpanded(true)
              }]
            }
          },
          ...options.chart
        },
        series,
        // FIX: Safe access using initialized defaults
        labels: labels && labels.length > 0 ? labels : undefined,
        xaxis: categories && categories.length > 0 
          ? { ...options.xaxis, categories } 
          : options.xaxis,
        title: {
          text: typeof title === 'string' ? title : title?.text,
          align: (typeof title === 'object' ? title?.align : 'left'),
          ...options.title
        },
        plotOptions: {
          ...options.plotOptions,
          bar: { 
            horizontal: baseType === "funnel" || baseType === "rangebar", 
            isFunnel: baseType === "funnel", 
            ...options.plotOptions?.bar 
          }
        }
      };
    }, [data, type, options, title, expandIconHtml, colors]);

    useEffect(() => {
      if (!chartRef.current) return;
      if (chartInstance.current) chartInstance.current.destroy();

      chartInstance.current = new ApexCharts(chartRef.current, config);
      chartInstance.current.render();

      const timer = setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
      return () => { 
        clearTimeout(timer); 
        chartInstance.current?.destroy(); 
      };
    }, [config]);

    useImperativeHandle(ref, () => ({
      reset: () => chartInstance.current?.resetSeries(),
      toggleFullscreen: () => setIsExpanded(!isExpanded)
    }));

    return (
      <div style={{ height: height, width: '100%', position: 'relative' }}>
        <style>{`
          .apexcharts-menu { z-index: 1000001 !important; pointer-events: auto !important; }
          .vizly-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000000; }
          .vizly-modal { width: 90%; max-width: 850px; height: 550px; background: white; border-radius: 12px; padding: 20px; position: relative; }
        `}</style>

        <div className={isExpanded ? "vizly-overlay" : ""} onClick={() => setIsExpanded(false)}>
          <div className={isExpanded ? "vizly-modal" : ""} onClick={e => e.stopPropagation()} style={{ height: isExpanded ? '550px' : '100%' }}>
        
            <div ref={chartRef} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
);

export default VizlyChart;