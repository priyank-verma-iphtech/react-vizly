export const detectChartType = (data: any[]): string => {
  if (!data || !Array.isArray(data) || data.length === 0) return "bar";
 
  const first = data[0];
 
  if (typeof first === "number") return "donut";
  if (typeof first !== "object" || first === null) return "bar";
 
  // Range / Financial
  if (Array.isArray(first.y)) {
    if (first.y.length === 5) return "boxplot";
    if (first.y.length === 4) return "candlestick";
    if (first.y.length === 2) return "rangebar";
  }
  if (first.open  !== undefined && first.close !== undefined) return "candlestick";
  if (first.min   !== undefined && first.max   !== undefined) return "boxplot";
  if (first.start !== undefined && first.end   !== undefined) return "rangebar";

  if (first.source !== undefined && first.target !== undefined) return "sankey";
  if (first.date   !== undefined && first.value  !== undefined) return "calendar";
  if (first.children !== undefined)                             return "sunburst";
  if (first.isTotal !== undefined || first.cumulative !== undefined) return "waterfall";
  if (first.bin  !== undefined)                                 return "histogram";

 
  // Specialty — use 'in' to avoid false negative when r or z is 0
  if ("r" in first || "z" in first) return "bubble";
  if (first.stage !== undefined)    return "funnel";
  if (first.group !== undefined)    return "heatmap";
  if (first.name  !== undefined && first.value !== undefined) return "treemap";
 
  // Circular
  if (first.label !== undefined && first.value !== undefined) return "donut";
 
  // XY / Category
  if (typeof first.x === "number" && typeof first.y === "number") return "scatter";
  if (typeof first.x === "string" && !isNaN(Date.parse(first.x))) return "line";
 
  return "bar";
};


