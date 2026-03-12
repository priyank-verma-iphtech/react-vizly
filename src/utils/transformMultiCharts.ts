import { transformData } from "./transformData"
import { detectChartType } from "./detectChartType"

export const processChartData = (
  type: string | string[] | undefined,
  data: any[] | any[][]
) => {

  if (!data || data.length === 0) return []

  /* -----------------------------
     MULTIPLE DATASETS
  ------------------------------ */

  if (Array.isArray(data[0])) {

    const datasets = data as any[][]

    return datasets.map((dataset, i) => {

      const chartType =
        Array.isArray(type)
          ? type[i]
          : detectChartType(dataset)

      const transformed = transformData(chartType, dataset)

      return {
        type: chartType,
        ...transformed
      }

    })

  }

  /* -----------------------------
     SINGLE DATASET
  ------------------------------ */

  const dataset = data as any[]

  /* -----------------------------
     MIXED CHART
  ------------------------------ */

  if (Array.isArray(type)) {

    const transformed = transformData(type[0], dataset)

    const series = transformed.series.map((s: any, i: number) => ({
      ...s,
      type: type[i] || type[0]
    }))

    return [
      {
        type: "mixed",
        series,
        labels: transformed.labels,
        categories: transformed.categories
      }
    ]

  }

  /* -----------------------------
     SINGLE TYPE
  ------------------------------ */

  const chartType =
    typeof type === "string"
      ? type
      : detectChartType(dataset)

  const transformed = transformData(chartType, dataset)

  return [
    {
      type: chartType,
      ...transformed
    }
  ]

}

// import { transformData } from "./transformData"
// import { detectChartType } from "./detectChartType"

// export const transformMultiCharts = (
//   types: string[] | undefined,
//   datasets: any[][]
// ) => {

//   if (!datasets || datasets.length === 0) return []

//   return datasets.map((data, i) => {

//     /* chart type from array OR auto detect */

//     const type =
//       (types && types[i]) ||
//       detectChartType(data)

//     const transformed = transformData(type, data)

//     return {
//       type,
//       data,
//       ...transformed
//     }

//   })

// }