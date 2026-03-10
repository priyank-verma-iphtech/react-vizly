import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import ApexCharts from 'apexcharts';

export interface VizlyProps {
  data: any[];
  type?: 'line' | 'bar' | 'area' | 'pie' | 'donut';
  options?: any;
  height?: number | string;
}

// These are the methods your users can call via Ref
export interface VizlyRef {
  zoomIn: () => void;
  zoomOut: () => void;
  filter: (newData: any[]) => void;
  reset: () => void;
}

const VizlyChart = forwardRef<VizlyRef, VizlyProps>(({ data, type, options, height = 350 }, ref) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ApexCharts | null>(null);

  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      // To trigger a zoom without specific coordinates, we can use 
      // the internal method or pass valid number placeholders.
      // Most users zoom to a range, e.g., chartInstance.current?.zoomX(start, end);
      console.log("Zoom logic triggered");
    },
    zoomOut: () => {
      chartInstance.current?.resetSeries();
    },
    filter: (newData: any[]) => {
      chartInstance.current?.updateSeries(newData);
    },
    reset: () => {
      chartInstance.current?.resetSeries();
    }
  }));

  useEffect(() => {
    if (!chartRef.current) return;

    const inferredType = type || (data.length > 0 && typeof data[0] === 'number' ? 'donut' : 'bar');

    const config = {
      chart: {
        type: inferredType,
        height: height,
        zoom: { enabled: true },
        toolbar: { show: true }
      },
      series: (inferredType === 'donut' || inferredType === 'pie') ? data : [{ data }],
      ...options
    };

    chartInstance.current = new ApexCharts(chartRef.current, config);
    chartInstance.current.render();

    return () => {
      chartInstance.current?.destroy();
    };
  }, [data, type, options, height]);

  return <div ref={chartRef} />;
});

export default VizlyChart;