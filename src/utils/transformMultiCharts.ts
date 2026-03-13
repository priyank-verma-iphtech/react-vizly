import { transformData } from "./transformData";
import { detectChartType } from "./detectChartType";

export const processChartData = (
  type: string | string[] | undefined,
  data: any[] | any[][]
) => {
  if (!data || !Array.isArray(data) || data.length === 0) return [];

  /* CASE 1: MULTIPLE DATASETS (e.g., [[{x:1, y:2}], [{x:1, y:5}]]) */
  if (Array.isArray(data[0])) {
    const datasets = data as any[][];
    
    // We need to collect all series into one flat array for the chart
    const allSeries: any[] = [];
    let finalLabels: string[] = [];
    let finalCategories: string[] = [];
    let primaryType = "line"; 

    datasets.forEach((dataset, i) => {
      // Determine type for this specific dataset
      const chartType = Array.isArray(type)
        ? type[i] || type[0]
        : (typeof type === "string" ? type : detectChartType(dataset));

      if (i === 0) primaryType = chartType;

      const transformed = transformData(chartType, dataset);

      // Add the series from this dataset to our master list
      if (transformed.series && Array.isArray(transformed.series)) {
        transformed.series.forEach((s: any) => {
          allSeries.push({
            ...s,
            type: chartType, // Important for mixed charts
            name: s.name || `Series ${allSeries.length + 1}`
          });
        });
      }

      // Sync labels/categories from the first dataset that has them
      if (finalLabels.length === 0 && transformed.labels?.length) {
        finalLabels = transformed.labels;
      }
      if (finalCategories.length === 0 && transformed.categories?.length) {
        finalCategories = transformed.categories;
      }
    });

    return [{
      type: primaryType,
      series: allSeries,
      labels: finalLabels,
      categories: finalCategories
    }];
  }

  /* CASE 2: SINGLE DATASET (e.g., [{x:1, y:2}, {x:2, y:4}]) */
  const dataset = data as any[];
  const chartType = typeof type === "string" ? type : detectChartType(dataset);
  const transformed = transformData(chartType, dataset);

  return [{
    type: chartType,
    ...transformed
  }];
};