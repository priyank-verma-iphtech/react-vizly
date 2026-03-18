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

    const firstType = Array.isArray(type)
      ? type[0]
      : typeof type === "string"
      ? type
      : detectChartType(datasets[0]);

    // FIX 1 — if ANY series is "line", use "line" as outer chart.type.
    // ApexCharts mixed charts render correctly when the outer type is "line".
    // Previously "column" mapped to "bar" which caused the line series to
    // be silently dropped.
    const typeList = Array.isArray(type)
      ? (type as string[])
      : [firstType ?? "line"];

    const hasLine = typeList.some(
      (t) => String(t).toLowerCase() === "line"
    );
    const hasArea = typeList.some(
      (t) => String(t).toLowerCase() === "area"
    );

    const outerType = hasLine ? "line"
                    : hasArea ? "area"
                    : firstType === "column" ? "bar"
                    : (firstType ?? "line");

    datasets.forEach((dataset, i) => {
      const chartType = Array.isArray(type)
        ? (type[i] ?? type[0])
        : typeof type === "string"
        ? type
        : detectChartType(dataset);

      const transformed = transformData(chartType, dataset);

      if (Array.isArray(transformed.series)) {
        transformed.series.forEach((s: any) => {
          let seriesData = s.data;

          // FIX 2 — normalize plain-number arrays (produced by the "category"
          // engine for bar/column) into {x, y} objects so they share the same
          // format as "xy" engine series (line/area).
          // Without this, ApexCharts cannot align mixed series on the x-axis
          // and silently drops the mismatched series.
          if (
            Array.isArray(seriesData) &&
            seriesData.length > 0 &&
            typeof seriesData[0] === "number"
          ) {
            const cats = transformed.categories?.length
              ? transformed.categories
              : dataset.map((d: any) =>
                  String(d.x ?? d.category ?? "")
                );
            seriesData = seriesData.map((val: number, idx: number) => ({
              x: cats[idx] ?? `Item ${idx + 1}`,
              y: val,
            }));
          }

          allSeries.push({
            ...s,
            data: seriesData,
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

    // FIX 3 — when all series are in {x,y} object format, clear
    // finalCategories so getChartConfig does NOT set xaxis.categories.
    // If both categories and {x,y} data are present, ApexCharts ignores
    // the object x values and uses category index instead — breaking alignment.
    const allXY =
      allSeries.length > 0 &&
      allSeries.every(
        (s) =>
          Array.isArray(s.data) &&
          s.data.length > 0 &&
          typeof s.data[0] === "object" &&
          s.data[0] !== null &&
          "x" in s.data[0]
      );

    if (allXY) {
      finalCategories = [];
    }

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

// import { transformData }   from "./transformData";
// import { detectChartType } from "./detectChartType";
 
// export const processChartData = (
//   type: string | string[] | undefined,
//   data: any[] | any[][]
// ) => {
//   if (!data || !Array.isArray(data) || data.length === 0) return [];
 
//   /* ─────────────────────────────────────────────────────────────────────────
//      CASE 1: MULTIPLE DATASETS  (Mixed / Stacked)
//   ───────────────────────────────────────────────────────────────────────── */
//   if (Array.isArray(data[0])) {
//     const datasets       = data as any[][];
//     const allSeries: any[] = [];
//     let finalLabels: string[] = [];
//     let finalCategories: string[] = [];
 
//     // Derive the chart-level type from the FIRST series (not hardcoded "line").
//     // ApexCharts mixed charts require chart.type === first-series type.
//     const firstType = Array.isArray(type)
//       ? type[0]
//       : typeof type === "string"
//       ? type
//       : detectChartType(datasets[0]);

//       const typeList = Array.isArray(type)
//       ? (type as string[])
//       : [firstType ?? "line"];

//     const hasLine = typeList.some(
//       (t) => String(t).toLowerCase() === "line"
//     );
//     const hasArea = typeList.some(
//       (t) => String(t).toLowerCase() === "area"
//     );
 
//     const outerType = hasLine ? "line"
//     : hasArea ? "area"
//     : firstType === "column" ? "bar"
//     : (firstType ?? "line");

 
//     datasets.forEach((dataset, i) => {
//       const chartType = Array.isArray(type)
//         ? (type[i] ?? type[0])
//         : typeof type === "string" 
//         ? type
//         : detectChartType(dataset);
 
//       const transformed = transformData(chartType, dataset);
 
//       if (Array.isArray(transformed.series)) {
//         transformed.series.forEach((s: any) => {
//           allSeries.push({
//             ...s,
//             // Map "column" → "bar" for ApexCharts series-level type
//             type: chartType === "column" ? "bar" : chartType,
//             name: s.name || `Series ${allSeries.length + 1}`,
//           });
//         });
//       }
 
//       // Keep the longest label / category arrays so X-axis is fully covered
//       if ((transformed.labels?.length ?? 0) > finalLabels.length) {
//         finalLabels = transformed.labels;
//       }
//       if ((transformed.categories?.length ?? 0) > finalCategories.length) {
//         finalCategories = transformed.categories;
//       }
//     });
 
//     return [
//       {
//         type:       outerType,
//         series:     allSeries,
//         labels:     finalLabels,
//         categories: finalCategories,
//       },
//     ];
//   }
 
//   /* ─────────────────────────────────────────────────────────────────────────
//      CASE 2: SINGLE DATASET
//   ───────────────────────────────────────────────────────────────────────── */
//   const dataset   = data as any[];
//   const chartType = typeof type === "string" ? type : detectChartType(dataset);
//   const transformed = transformData(chartType, dataset);
 
//   return [
//     {
//       type: chartType,
//       ...transformed,
//     },
//   ];
// };

