export const detectChartType = (data: any[]): any => {
  if (!Array.isArray(data) || data.length === 0) return "bar";
  
  const first = data[0];

  if (typeof first === "number") return "bar";
  if (first?.z !== undefined) return "bubble";
  if (Array.isArray(first?.y)) return "rangeBar"; // Apex uses rangeBar for array Y
  if (first?.label !== undefined && first?.value !== undefined) return "donut";
  if (first?.x !== undefined && first?.y !== undefined) return "line";
  
  return "bar";
};