import { transformData } from "./transformData";
import { detectChartType } from "./detectChartType";

export const processChartData = (
  type: string | string[] | undefined,
  data: any[] | any[][]
) => {
  if (!data || !Array.isArray(data) || data.length === 0) return [];

  /* -----------------------------------------------------------
     CASE 1: MULTIPLE DATASETS  e.g. [[{x,y}], [{x,y}]]
     BUG FIX: For mixed charts ApexCharts requires:
       - chart.type = "line" (or any valid base, commonly "line")
       - Each series object has its OWN `type` property
     Returning the first dataset's type as the outer type causes
     ApexCharts to override the per-series types, breaking mixed charts.
     Solution: always use "line" as the outer type for multi-dataset
     scenarios and rely on per-series `type` fields.
  ----------------------------------------------------------- */
  if (Array.isArray(data[0])) {
    const datasets = data as any[][];

    const allSeries: any[] = [];
    let finalLabels: string[] = [];
    let finalCategories: string[] = [];

    // BUG FIX: Use "line" as the canonical outer type for mixed charts
    // instead of primaryType (the first dataset's detected type).
    // ApexCharts uses the outer `chart.type` only as a fallback for
    // series that don't specify their own `type`.
    const outerType = "line";

    datasets.forEach((dataset, i) => {
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
            // Attach per-series type so ApexCharts renders mixed correctly
            type: chartType,
            name: s.name || `Series ${allSeries.length + 1}`,
          });
        });
      }

      if (finalLabels.length === 0 && transformed.labels?.length) {
        finalLabels = transformed.labels;
      }
      if (finalCategories.length === 0 && transformed.categories?.length) {
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
     CASE 2: SINGLE DATASET  e.g. [{x, y}, {x, y}]
  ----------------------------------------------------------- */
  const dataset = data as any[];
  const chartType =
    typeof type === "string" ? type : detectChartType(dataset);
  const transformed = transformData(chartType, dataset);

  return [
    {
      type: chartType,
      ...transformed,
    },
  ];
};