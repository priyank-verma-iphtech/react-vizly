/**
 * Smart Inference Engine for ApexCharts
 * Detects the best chart type based on data structure.
 */
 export const inferChartType = (data: any[]): string => {
  // 1. Guard Clause
  if (!Array.isArray(data) || data.length === 0) return "bar";

  const first = data[0];

  // 2. Simple Numeric Array -> Pie/Donut
  // Example: [10, 20, 30]
  if (typeof first === "number") return "donut";

  // 3. Handle Apex "Series" Format 
  // Example: [{ name: 'Series 1', data: [...] }]
  if (first?.data && Array.isArray(first.data)) {
    const sample = first.data[0];
    if (sample?.x && (sample.x instanceof Date || isDateString(sample.x))) {
      return "area"; // Time-series looks better as Area
    }
    return "bar";
  }

  // 4. Bubble Chart Check (Must have x, y, and z)
  if (first?.x !== undefined && first?.y !== undefined && first?.z !== undefined) {
    return "bubble";
  }

  // 5. Range Bar / BoxPlot Check (y is an array)
  // Example: { x: 'Category', y: [10, 20] }
  if (first?.x !== undefined && Array.isArray(first?.y)) {
    return "rangeBar";
  }

  // 6. Label/Value Pairs -> Donut
  // Example: { label: 'Apple', value: 10 }
  if (first?.label !== undefined && first?.value !== undefined) {
    return "donut";
  }

  // 7. Coordinate Pairs -> Line
  // Example: { x: 10, y: 20 }
  if (first?.x !== undefined && first?.y !== undefined) {
    // Check if X is a date for smooth time-series
    if (first.x instanceof Date || isDateString(first.x)) return "area";
    return "line";
  }

  // 8. Default Fallback
  return "bar";
};

/**
 * Helper to safely check if a string is a date without false positives for simple numbers
 */
const isDateString = (val: any): boolean => {
  if (typeof val !== "string") return false;
  // Prevents "2023" (number string) from being caught, but allows "2023-01-01"
  return isNaN(Number(val)) && !isNaN(Date.parse(val));
};