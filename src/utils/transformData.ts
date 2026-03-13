import { chartEngine } from "./chartEngine"

export const transformData = (type: string, data: any[]) => {

 const engine = chartEngine[type] || "xy"

 let series: any[] = []
 let labels: string[] = []
 let categories: string[] = []

 if (!data || data.length === 0)
   return { series, labels, categories }

 const first = data[0]

 const numericKeys = Object.keys(first).filter(
   k => typeof first[k] === "number"
 )

 const categoryKey =
   Object.keys(first).find(k => typeof first[k] === "string") || "x"

 switch (engine) {

   /* CIRCULAR CHARTS */

   case "circular":

     series = data.map(d => d.value ?? d.y ?? d)

     labels = data.map(
       d => d.label ?? d.category ?? d.name ?? d.x
     )

     break

   /* CATEGORY CHARTS */

   case "category":

     categories = data.map(
       d => d.x ?? d.category ?? d.stage ?? d[categoryKey]
     )

     if (numericKeys.length > 1) {

       series = numericKeys.map(key => ({
         name: key,
         data: data.map(d => d[key])
       }))

     } else {

       series = [{
         name: numericKeys[0] || "Series 1",
         data: data.map(d => d.y ?? d.value)
       }]

     }

     break

   /* RANGE CHARTS */

   case "range":

     series = [{
       name: "Series 1",
       data: data.map(d => {

         let yVal: number[] = []

         if (type === "boxplot")
           yVal = d.y ?? [d.min, d.q1, d.median, d.q3, d.max]

         else if (type === "candlestick")
           yVal = d.y ?? [d.open, d.high, d.low, d.close]

         else
           yVal = d.y ?? [d.start, d.end]

         return {
           x: d.x ?? d.label ?? d.category ?? d.date,
           y: yVal
         }

       })
     }]

     break

   /* HEATMAP */

   case "heatmap":

     const groups: Record<string, any[]> = {}

     data.forEach(d => {

       const key = d.group ?? "Series 1"

       if (!groups[key]) groups[key] = []

       groups[key].push({
         x: d.x ?? d.category,
         y: d.value ?? d.y
       })

     })

     series = Object.keys(groups).map(k => ({
       name: k,
       data: groups[k]
     }))

     break

   /* TREEMAP */

   case "treemap":

     series = [{
       data: data.map(d => ({
         x: d.name,
         y: d.value
       }))
     }]

     break

   /* XY CHARTS */

   default:

     if (type === "bubble") {

       series = [{
         name: "Series 1",
         data: data.map(d => ({
           x: d.x,
           y: d.y,
           z: d.r ?? d.z
         }))
       }]

     }

     else if (numericKeys.length > 1) {

       series = numericKeys.map(key => ({
         name: key,
         data: data.map(d => ({
           x: d.x ?? d[categoryKey],
           y: d[key]
         }))
       }))

     }

     else {

       series = [{
         name: "Series 1",
         data: data.map(d => ({
           x: d.x,
           y: d.y
         }))
       }]

     }

 }

 return { series, labels, categories }

}

// import { chartEngine } from "./chartEngine";

// export const transformData = (type: string, data: any[]) => {

//   const engine = chartEngine[type] || "xy";

//   let series: any = [];
//   let labels: string[] = [];
//   let categories: string[] = [];

//   if (!data || !Array.isArray(data) || data.length === 0) {
//     return { series: [], labels: [], categories: [] };
//   }

//   const first = data[0];

//   const numericKeys = Object.keys(first).filter(
//     (k) => typeof first[k] === "number"
//   );

//   const categoryKey =
//     Object.keys(first).find((k) => typeof first[k] === "string") || "x";

//   switch (engine) {

//     /* -----------------------------
//        PIE / DONUT / POLAR / RADIAL
//     ------------------------------ */

//     case "circular":

//       series = data.map((d) => Number(d.value ?? d.y ?? 0));

//       labels = data.map(
//         (d) => String(d.label ?? d.category ?? d.name ?? d.x ?? "Unknown")
//       );

//       break;

//     /* -----------------------------
//        CATEGORY
//        bar / column / radar / funnel
//     ------------------------------ */

//     case "category":

//       categories = data.map((d) =>
//         String(d.x ?? d.category ?? d.stage ?? d[categoryKey] ?? "Unknown")
//       );

//       if (numericKeys.length > 1) {

//         series = numericKeys.map((key) => ({
//           name: key,
//           data: data.map((d) => d[key] ?? 0)
//         }));

//       } else {

//         series = [{
//           name: numericKeys[0] || "Series 1",
//           data: data.map((d) => d.y ?? d.value ?? 0)
//         }];

//       }

//       break;

//     /* -----------------------------
//        RANGE
//        boxplot / rangebar / candlestick
//     ------------------------------ */

//     case "range":

//       series = [{
//         name: "Series 1",
//         data: data.map((d) => {

//           let yVal: number[] = [];

//           if (type === "boxplot") {

//             yVal = Array.isArray(d.y)
//               ? d.y
//               : [d.min, d.q1, d.median, d.q3, d.max];

//           }

//           else if (type === "candlestick") {

//             yVal = Array.isArray(d.y)
//               ? d.y
//               : [d.open, d.high, d.low, d.close];

//           }

//           else {

//             yVal = Array.isArray(d.y)
//               ? d.y
//               : [d.start, d.end];

//           }

//           return {
//             x: d.x ?? d.label ?? d.category ?? d.date ?? "Unknown",
//             y: yVal
//           };

//         })
//       }];

//       break;

//     /* -----------------------------
//        HEATMAP
//     ------------------------------ */

//     case "heatmap":

//       const groups: Record<string, any[]> = {};

//       data.forEach((d) => {

//         const key = d.group ?? "Series 1";

//         if (!groups[key]) groups[key] = [];

//         groups[key].push({
//           x: String(d.x ?? d.category ?? "Unknown"),
//           y: d.value ?? d.y ?? 0
//         });

//       });

//       series = Object.keys(groups).map((k) => ({
//         name: k,
//         data: groups[k]
//       }));

//       break;

//     /* -----------------------------
//        TREEMAP
//     ------------------------------ */

//     case "treemap":

//       series = [{
//         data: data.map((d) => ({
//           x: d.name ?? d.label ?? d.category,
//           y: d.value ?? d.y ?? 0
//         }))
//       }];

//       break;

//     /* -----------------------------
//        XY charts
//        line / scatter / bubble
//     ------------------------------ */

//     default:

//       if (type === "bubble") {

//         series = [{
//           name: "Series 1",
//           data: data.map((d) => ({
//             x: d.x ?? 0,
//             y: d.y ?? 0,
//             z: d.r ?? d.z ?? d.value ?? 0
//           }))
//         }];

//       }

//       else if (numericKeys.length > 1) {

//         series = numericKeys.map((key) => ({
//           name: key,
//           data: data.map((d) => ({
//             x: d.x ?? d[categoryKey],
//             y: d[key] ?? 0
//           }))
//         }));

//       }

//       else {

//         series = [{
//           name: "Series 1",
//           data: data.map((d) => ({
//             x: d.x ?? d[categoryKey],
//             y: d.y ?? d.value ?? 0
//           }))
//         }];

//       }

//   }

//   return { series, labels, categories };
// };

// import { chartEngine } from "./chartEngine"

// export const transformData = (type: string, data: any[]) => {

//   const engine = chartEngine[type] || "xy"

//   let series: any = []
//   let labels: string[] = []
//   let categories: string[] = []

//   if (!data || data.length === 0)
//     return { series, labels, categories }

//   const first = data[0]

//   /* -----------------------------
//      DETECT NUMERIC KEYS
//      (for multi-series)
//   ------------------------------ */

//   const numericKeys = Object.keys(first).filter(
//     k => typeof first[k] === "number"
//   )

//   const categoryKey = Object.keys(first).find(
//     k => typeof first[k] === "string"
//   )

//   switch (engine) {

//     /* -----------------------------
//        CIRCULAR
//     ------------------------------ */

//     case "circular":

//       series = data.map(d => d.value ?? d.y ?? d)

//       labels = data.map(
//         d => d.label ?? d.category ?? d.name ?? d.x
//       )

//       break

//     /* -----------------------------
//        CATEGORY CHARTS
//        bar / column / radar / funnel
//     ------------------------------ */

//     case "category":

//       categories = data.map(d => d.x ?? d.category ?? d.stage ?? d[categoryKey!])

//       if (numericKeys.length > 1) {

//         /* MULTI SERIES */

//         series = numericKeys.map(key => ({
//           name: key,
//           data: data.map(d => d[key])
//         }))

//       } else {

//         series = [{
//           name: numericKeys[0] || "Series 1",
//           data: data.map(d => d.y ?? d.value)
//         }]

//       }

//       break

//     /* -----------------------------
//        HEATMAP
//     ------------------------------ */

//     case "heatmap":

//       series = [{
//         name: "Series 1",
//         data: data.map(d => ({
//           x: d.x,
//           y: d.value ?? d.y
//         }))
//       }]

//       break

//     /* -----------------------------
//    RANGE 
//    rangebar / candlestick / boxplot
// ------------------------------ */
// case "range":
//   // Apex expects series[0].data to be an array of objects with an 'y' property 
//   // that is itself an ARRAY of numbers: [min, q1, median, q3, max] or [start, end]
  
//   series = [{
//     name: "Series 1",
//     data: data.map(d => {
//       // 1. Boxplot logic: expects [min, q1, median, q3, max]
//       if (type === 'boxplot') {
//         return {
//           x: d.x ?? d.label ?? d.category,
//           y: d.y ?? [d.min, d.q1, d.median, d.q3, d.max]
//         };
//       }
      
//       // 2. Candlestick logic: expects [open, high, low, close]
//       if (type === 'candlestick') {
//         return {
//           x: d.x ?? d.date,
//           y: d.y ?? [d.open, d.high, d.low, d.close]
//         };
//       }

//       // 3. RangeBar / Timeline logic: expects [start, end]
//       return {
//         x: d.x ?? d.label ?? d.category,
//         y: d.y ?? [d.start, d.end]
//       };
//     })
//   }];
//   break;
//     /* -----------------------------
//        XY
//        line / scatter / bubble
//     ------------------------------ */

//     default:

//       if (type === "bubble") {

//         series = [{
//           name: "Series 1",
//           data: data.map(d => ({
//             x: d.x,
//             y: d.y,
//             r: d.r
//           }))
//         }]

//       }

//       else if (numericKeys.length > 1) {

//         /* MULTI SERIES XY */

//         series = numericKeys.map(key => ({
//           name: key,
//           data: data.map(d => ({
//             x: d.x ?? d[categoryKey!],
//             y: d[key]
//           }))
//         }))

//       }

//       else {

//         series = [{
//           name: "Series 1",
//           data: data.map(d => ({
//             x: d.x,
//             y: d.y
//           }))
//         }]

//       }

//   }

//   return { series, labels, categories }

// }

// import { chartEngine } from "./chartEngine"

// export const transformData = (type: string, data: any[]) => {

//   const engine = chartEngine[type] || "xy"

//   let series: any = []
//   let labels: string[] = []
//   let categories: string[] = []

//   switch (engine) {

//     /* -----------------------------
//        PIE / DONUT / RADIAL / POLAR
//     ------------------------------ */

//     case "circular":

//       series = data.map(d => d.y ?? d.value ?? d)

//       labels = data.map(
//         d => d.label ?? d.category ?? d.name ?? d.x
//       )

//       break

//     /* -----------------------------
//        CATEGORY CHARTS
//        bar, column, radar, funnel
//     ------------------------------ */

//     case "category":

//       categories = data.map(d => d.x ?? d.category ?? d.stage)

//       series = [{
//         name: "Series 1",
//         data: data.map(d => d.y ?? d.value)
//       }]

//       break

//     /* -----------------------------
//        HEATMAP
//     ------------------------------ */

//     case "heatmap":

//       series = [{
//         name: "Series 1",
//         data: data.map(d => ({
//           x: d.x,
//           y: d.value ?? d.y
//         }))
//       }]

//       break

//     /* -----------------------------
//        RANGE
//        rangebar / candlestick / boxplot
//     ------------------------------ */

//     case "range":

//       series = [{
//         name: "Series 1",
//         data
//       }]

//       break

//     /* -----------------------------
//        BUBBLE
//     ------------------------------ */

//     case "xy":

//       if (type === "bubble") {

//         series = [{
//           name: "Series 1",
//           data: data.map(d => ({
//             x: d.x,
//             y: d.y,
//             r: d.r
//           }))
//         }]

//       }

//       else {

//         series = [{
//           name: "Series 1",
//           data: data.map(d => ({
//             x: d.x,
//             y: d.y
//           }))
//         }]

//       }

//       break

//     default:

//       series = [{
//         name: "Series 1",
//         data
//       }]
//   }

//   return { series, labels, categories }

// }