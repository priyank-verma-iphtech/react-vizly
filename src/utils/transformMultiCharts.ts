import { transformData } from "./transformData";
import { detectChartType } from "./detectChartType";

export const processChartData = (
  type: string | string[] | undefined,
  data: any[] | any[][]
) => {
  if (!data || !Array.isArray(data) || data.length === 0) return [];

  /* -----------------------------------------------------------
     CASE 1: MULTIPLE DATASETS (Mixed/Stacked)
  ----------------------------------------------------------- */
  if (Array.isArray(data[0])) {
    const datasets = data as any[][];
    const allSeries: any[] = [];
    let finalLabels: string[] = [];
    let finalCategories: string[] = [];

    // "line" is the safest base type for mixed charts in ApexCharts
    const outerType = "line";

    datasets.forEach((dataset, i) => {
      // Determine type for this specific series
      const chartType = Array.isArray(type)
        ? type[i] ?? type[0]
        : typeof type === "string"
        ? type
        : detectChartType(dataset);

      const transformed = transformData(chartType, dataset);

      if (transformed.series && Array.isArray(transformed.series)) {
        transformed.series.forEach((s: any) => {
          allSeries.push({
            ...s,
            type: chartType === "column" ? "bar" : chartType, // Map column back to bar for Apex series
            name: s.name || `Series ${allSeries.length + 1}`,
          });
        });
      }

      // Merge Categories: Take the longest array to ensure X-axis coverage
      if ((transformed.labels?.length ?? 0) > finalLabels.length) {
        finalLabels = transformed.labels;
      }
      if ((transformed.categories?.length ?? 0) > finalCategories.length) {
        finalCategories = transformed.categories;
      }
    });

    return [
      {
        type: outerType,
        series: allSeries,
        labels: finalLabels,
        categories: finalCategories,
      },
    ];
  }

  /* -----------------------------------------------------------
     CASE 2: SINGLE DATASET
  ----------------------------------------------------------- */
  const dataset = data as any[];
  const chartType = typeof type === "string" ? type : detectChartType(dataset);
  const transformed = transformData(chartType, dataset);

  return [
    {
      type: chartType,
      ...transformed,
    },
  ];
};