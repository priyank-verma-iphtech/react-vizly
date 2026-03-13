export const chartEngine: Record<string, string> = {
  line: "xy", area: "xy", scatter: "xy", bubble: "xy",
  bar: "category", column: "category", radar: "category", funnel: "category",
  pie: "circular", donut: "circular", radialbar: "circular", polararea: "circular",
  rangebar: "range", candlestick: "range", boxplot: "range",
  heatmap: "heatmap", treemap: "treemap",
};

export const detectChartType = (data: any[]): string => {
  if (!data || !Array.isArray(data) || data.length === 0) return "bar";
  const first = data[0];
  if (typeof first === "number") return "donut";
  if (typeof first !== "object" || first === null) return "bar";

  // 1. Range / Financial (Check for specific arrays or property groups)
  if (Array.isArray(first.y)) {
    if (first.y.length === 5) return "boxplot";
    if (first.y.length === 4) return "candlestick";
    if (first.y.length === 2) return "rangebar";
  }
  if (first.open !== undefined && first.close !== undefined) return "candlestick";
  if (first.min !== undefined && first.max !== undefined) return "boxplot";
  if (first.start !== undefined && first.end !== undefined) return "rangebar";

  // 2. Specialty Types
  if (first.r !== undefined || first.z !== undefined) return "bubble";
  if (first.stage !== undefined) return "funnel";
  if (first.group !== undefined) return "heatmap"; // Heatmap needs grouping
  if (first.name !== undefined && first.value !== undefined) return "treemap";

  // 3. Circular
  if (first.label !== undefined && first.value !== undefined) return "donut";

  // 4. XY / Category defaults
  if (typeof first.x === "number" && typeof first.y === "number") return "scatter";
  if (typeof first.x === "string" && !isNaN(Date.parse(first.x))) return "line";

  return "bar";
};