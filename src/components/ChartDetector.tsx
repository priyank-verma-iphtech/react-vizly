export const detectChartType = (
    data: any[]
  ):
    | "line"
    | "bar"
    | "area"
    | "pie"
    | "donut"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "radialBar" => {
  
    if (!Array.isArray(data) || data.length === 0) {
      return "bar";
    }
  
    const first = data[0];
  
    // numeric dataset
    if (typeof first === "number") {
      if (data.length <= 5) return "donut";
      if (data.length <= 10) return "bar";
      return "area";
    }
  
    // bubble
    if (first?.x !== undefined && first?.y !== undefined && first?.z !== undefined) {
      return "bubble";
    }
  
    // scatter
    if (first?.x !== undefined && first?.y !== undefined && Array.isArray(first.y)) {
      return "scatter";
    }
  
    // line / time series
    if (first?.x !== undefined && first?.y !== undefined) {
      return "line";
    }
  
    // treemap
    if ("label" in first && "value" in first) {
      return "treemap";
    }
  
    // radial bar
    if ("value" in first && data.length === 1) {
      return "radialBar";
    }
  
    return "bar";
  };