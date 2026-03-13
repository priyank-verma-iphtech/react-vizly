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

  /* --- SPECIFIC PROPERTY MAPPINGS (ordered from most specific to least) --- */

  // Bubble: x, y, r
  if (first.r !== undefined && first.x !== undefined && first.y !== undefined)
    return "bubble";

  // Heatmap: x, value, y (all three present and x is not a date string)
  if (
    first.value !== undefined &&
    first.x !== undefined &&
    first.y !== undefined
  )
    return "heatmap";

  // Rangebar (Gantt style): start, end
  if (first.start !== undefined && first.end !== undefined) return "rangebar";

  // Funnel: stage, value — must be checked before generic value checks
  if (first.stage !== undefined && first.value !== undefined) return "funnel";

  // Treemap: name, value — must NOT have category (that's polararea)
  if (
    first.name !== undefined &&
    first.value !== undefined &&
    first.category === undefined
  )
    return "treemap";

  // Polar Area: category, value — after treemap so name+category+value → polararea
  if (first.category !== undefined && first.value !== undefined)
    return "polararea";

  // BUG FIX: Donut/Pie: label, value — moved after category check
  // { label, value } without a category is a simple pie/donut
  if (first.label !== undefined && first.value !== undefined) return "donut";

  /* --- COORDINATE TYPES --- */

  // Scatter: x (number), y (number)
  if (typeof first.x === "number" && typeof first.y === "number")
    return "scatter";

  // Line: x (date string), y (number)
  if (typeof first.x === "string" && !isNaN(Date.parse(first.x)))
    return "line";

  // Default Bar: x, y present
  if (first.x !== undefined && first.y !== undefined) return "bar";

  return "bar";
};