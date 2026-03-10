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
  
    const firstItem = data[0];
  
    // simple numeric array
    if (typeof firstItem === "number") {
      if (data.length <= 5) return "donut";
      if (data.length <= 10) return "bar";
      return "area";
    }
  
    // XY dataset → line chart
    if (
      typeof firstItem === "object" &&
      "x" in firstItem &&
      "y" in firstItem &&
      typeof firstItem.y === "number"
    ) {
      return "line";
    }
  
    // scatter dataset
    if (
      typeof firstItem === "object" &&
      "x" in firstItem &&
      "y" in firstItem &&
      Array.isArray(firstItem.y)
    ) {
      return "scatter";
    }
  
    // bubble dataset
    if (
      typeof firstItem === "object" &&
      "x" in firstItem &&
      "y" in firstItem &&
      "z" in firstItem
    ) {
      return "bubble";
    }
  
    // heatmap dataset
    if (
      typeof firstItem === "object" &&
      "x" in firstItem &&
      "y" in firstItem &&
      typeof firstItem.y === "number"
    ) {
      return "heatmap";
    }
  
    // treemap dataset
    if (
      typeof firstItem === "object" &&
      "label" in firstItem &&
      "value" in firstItem
    ) {
      return "treemap";
    }
  
    // radial bar dataset
    if (
      typeof firstItem === "object" &&
      "value" in firstItem &&
      data.length === 1
    ) {
      return "radialBar";
    }
  
    return "bar";
  };