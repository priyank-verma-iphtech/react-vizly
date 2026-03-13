import { transformData } from "./transformData"
import { detectChartType } from "./detectChartType"

export const processChartData = (
 type: string | string[] | undefined,
 data: any[] | any[][]
) => {

 if (!data || data.length === 0) return []

 if (Array.isArray(data[0])) {

   const datasets = data as any[][]

   return datasets.map((dataset, i) => {

     const chartType = Array.isArray(type)
       ? type[i]
       : detectChartType(dataset)

     const transformed = transformData(chartType, dataset)

     return {
       type: chartType,
       ...transformed
     }

   })

 }

 const dataset = data as any[]

 const chartType =
   typeof type === "string"
     ? type
     : detectChartType(dataset)

 const transformed = transformData(chartType, dataset)

 return [{
   type: chartType,
   ...transformed
 }]

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