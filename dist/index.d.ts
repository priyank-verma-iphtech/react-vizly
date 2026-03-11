import { default as default_2 } from 'react';

export declare const VizlyChart: default_2.ForwardRefExoticComponent<VizlyProps & default_2.RefAttributes<VizlyRef>>;

export declare interface VizlyProps {
    data: any[];
    type?: string;
    options?: any;
    height?: number | string;
    title?: string;
}

export declare interface VizlyRef {
    zoomIn: () => void;
    zoomOut: () => void;
    reset: () => void;
    download: (format: "png" | "csv" | "svg") => void;
    filter: (newData: any[]) => void;
}

export { }
