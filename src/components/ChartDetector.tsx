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
  | "treemap"
  | "radialBar" => {

  if (!Array.isArray(data) || data.length === 0) {
    return "bar";
  }

  const first = data[0];

  // numeric array → bar chart
  if (typeof first === "number") {
    return "bar";
  }

  // bubble
  if (first?.x !== undefined && first?.y !== undefined && first?.z !== undefined) {
    return "bubble";
  }

  // scatter
  if (first?.x !== undefined && first?.y !== undefined && Array.isArray(first.y)) {
    return "scatter";
  }

  // line
  if (first?.x !== undefined && first?.y !== undefined) {
    return "line";
  }

  // pie / donut
  if ("label" in first && "value" in first) {
    return "donut";
  }

  // treemap
  if ("label" in first && "value" in first) {
    return "treemap";
  }

  // radial
  if ("value" in first && data.length === 1) {
    return "radialBar";
  }

  return "bar";
};