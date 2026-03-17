import { default as default_2 } from 'react';

export declare const VizlyChart: default_2.ForwardRefExoticComponent<VizlyProps & default_2.RefAttributes<VizlyRef>>;

export declare interface VizlyProps {
    data: any[] | any[][];
    type?: string | string[];
    options?: any;
    height?: number | string;
    title?: string | {
        text: string;
        align?: "left" | "center" | "right";
        style?: any;
    };
    renderer?: "apexcharts" | "recharts" | "echarts" | "plotlycharts";
}

export declare interface VizlyRef {
    zoomIn: () => void;
    zoomOut: () => void;
    reset: () => void;
    toggleFullscreen: () => void;
}

export { }
