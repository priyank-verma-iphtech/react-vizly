import { transformData }   from "./transformData";
import { detectChartType } from "./detectChartType";
 
export const processChartData = (
  type: string | string[] | undefined,
  data: any[] | any[][]
) => {
  if (!data || !Array.isArray(data) || data.length === 0) return [];
 
  /* ─────────────────────────────────────────────────────────────────────────
     CASE 1: MULTIPLE DATASETS  (Mixed / Stacked)
  ───────────────────────────────────────────────────────────────────────── */
  if (Array.isArray(data[0])) {
    const datasets       = data as any[][];
    const allSeries: any[] = [];
    let finalLabels: string[]     = [];
    let finalCategories: string[] = [];
 
    // Derive the chart-level type from the FIRST series (not hardcoded "line").
    // ApexCharts mixed charts require chart.type === first-series type.
    const firstType = Array.isArray(type)
      ? type[0]
      : typeof type === "string"
      ? type
      : detectChartType(datasets[0]);
 
    const outerType = firstType === "column" ? "bar" : (firstType ?? "line");
 
    datasets.forEach((dataset, i) => {
      const chartType = Array.isArray(type)
        ? (type[i] ?? type[0])
        : typeof type === "string"
        ? type
        : detectChartType(dataset);
 
      const transformed = transformData(chartType, dataset);
 
      if (Array.isArray(transformed.series)) {
        transformed.series.forEach((s: any) => {
          allSeries.push({
            ...s,
            // Map "column" → "bar" for ApexCharts series-level type
            type: chartType === "column" ? "bar" : chartType,
            name: s.name || `Series ${allSeries.length + 1}`,
          });
        });
      }
 
      // Keep the longest label / category arrays so X-axis is fully covered
      if ((transformed.labels?.length ?? 0) > finalLabels.length) {
        finalLabels = transformed.labels;
      }
      if ((transformed.categories?.length ?? 0) > finalCategories.length) {
        finalCategories = transformed.categories;
      }
    });
 
    return [
      {
        type:       outerType,
        series:     allSeries,
        labels:     finalLabels,
        categories: finalCategories,
      },
    ];
  }
 
  /* ─────────────────────────────────────────────────────────────────────────
     CASE 2: SINGLE DATASET
  ───────────────────────────────────────────────────────────────────────── */
  const dataset   = data as any[];
  const chartType = typeof type === "string" ? type : detectChartType(dataset);
  const transformed = transformData(chartType, dataset);
 
  return [
    {
      type: chartType,
      ...transformed,
    },
  ];
};

