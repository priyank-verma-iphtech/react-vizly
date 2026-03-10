import { default as React } from '../../node_modules/react';

export interface VizlyProps {
    data: any[];
    type?: 'line' | 'bar' | 'area' | 'pie' | 'donut';
    options?: any;
    height?: number | string;
}
export interface VizlyRef {
    zoomIn: () => void;
    zoomOut: () => void;
    filter: (newData: any[]) => void;
    reset: () => void;
}
declare const VizlyChart: React.ForwardRefExoticComponent<VizlyProps & React.RefAttributes<VizlyRef>>;
export default VizlyChart;
//# sourceMappingURL=VizlyChart.d.ts.map