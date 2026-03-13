export const detectChartType = (data: any[]): string => {
  // 1. Guard against empty data
  if (!data || !Array.isArray(data) || data.length === 0) return "bar";

  const first = data[0];

  // 2. Handle primitive arrays [10, 20, 30]
  if (typeof first === "number") return "donut";

  // 3. Ensure 'first' is an object before checking properties
  if (typeof first !== "object" || first === null) return "bar";

  /* --- COMPLEX / MULTI-VALUE TYPES (Check these first!) --- */

  if (Array.isArray(first.y)) {
    if (first.y.length === 5) return "boxplot";
    if (first.y.length === 4) return "candlestick";
    if (first.y.length === 2) return "rangebar";
  }

  /* --- SPECIFIC PROPERTY MAPPINGS --- */

  // Bubble: x, y, r
  if (first.r !== undefined && first.x !== undefined && first.y !== undefined) 
    return "bubble";

  // Heatmap: x, y, value
  if (first.value !== undefined && first.x !== undefined && first.y !== undefined) 
    return "heatmap";

  // Funnel: stage, value
  if (first.stage && first.value !== undefined) return "funnel";

  // Treemap: name, value
  if (first.name && first.value !== undefined) return "treemap";

  // Polar Area: category, value
  if (first.category && first.value !== undefined) return "polararea";

  // Donut/Pie: label, value
  if (first.label && first.value !== undefined) return "donut";

  // Rangebar (Gantt style): start, end
  if (first.start !== undefined && first.end !== undefined) return "rangebar";

  /* --- COORDINATE TYPES --- */

  // Scatter: x (number), y (number)
  if (typeof first.x === "number" && typeof first.y === "number") 
    return "scatter";

  // Line: x (date string)
  if (typeof first.x === "string" && !isNaN(Date.parse(first.x))) 
    return "line";

  // Default Bar: x, y
  if (first.x !== undefined && first.y !== undefined) return "bar";

  return "bar";
};