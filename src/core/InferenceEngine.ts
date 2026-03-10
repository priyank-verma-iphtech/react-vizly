// src/core/InferenceEngine.ts
export const inferChartType = (data: any[]): string => {
    if (!data || data.length === 0) return 'line';
  
    const firstEntry = data[0];
  
    // 1. If data is a simple list of numbers -> Pie/Donut
    if (typeof firstEntry === 'number') return 'pie';
  
    // 2. If it's an object with a 'data' array (Series format)
    if (firstEntry.data && Array.isArray(firstEntry.data)) {
      const sample = firstEntry.data[0];
      
      // Check if X is a date or timestamp
      if (sample.x instanceof Date || !isNaN(Date.parse(sample.x))) {
        return 'area'; // Time-series looks best as Area
      }
    }
  
    return 'bar'; // Default fallback
  };