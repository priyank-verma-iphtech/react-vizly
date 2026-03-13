import { chartEngine } from "./chartEngine";

export const transformData = (type: string, data: any[]) => {
  const engine = chartEngine[type] || "xy";

  let series: any = [];
  let labels: string[] = [];
  let categories: string[] = [];

  // 1. Safety Guard: If no data, return empty structures immediately
  if (!data || !Array.isArray(data) || data.length === 0) {
    return { series: [], labels: [], categories: [] };
  }

  const first = data[0];

  // Detect keys for mapping
  const numericKeys = Object.keys(first).filter(
    (k) => typeof first[k] === "number"
  );

  const categoryKey = Object.keys(first).find(
    (k) => typeof first[k] === "string"
  ) || "x";

  switch (engine) {
    /* ---------------------------------------------------------
       CIRCULAR (Pie, Donut, RadialBar)
       Apex expects: series = [44, 55, 13]
    --------------------------------------------------------- */
    case "circular":
      // Map to a flat array of numbers. Fallback to 0 to prevent 'length' errors.
      series = data.map((d) => {
        const val = typeof d === "number" ? d : (d.value ?? d.y ?? d.amount ?? 0);
        return Number(val);
      });

      labels = data.map(
        (d) => String(d.label ?? d.category ?? d.name ?? d.x ?? "Unknown")
      );
      break;

    /* ---------------------------------------------------------
       CATEGORY (Bar, Column, Radar, Funnel)
       Apex expects: series = [{ name: 'S1', data: [1, 2, 3] }]
    --------------------------------------------------------- */
    case "category":
      categories = data.map((d) => 
        String(d.x ?? d.category ?? d.stage ?? d[categoryKey] ?? "Unknown")
      );

      if (numericKeys.length > 1) {
        series = numericKeys.map((key) => ({
          name: key,
          data: data.map((d) => d[key] ?? 0),
        }));
      } else {
        series = [{
          name: numericKeys[0] || "Series 1",
          data: data.map((d) => d.y ?? d.value ?? d[numericKeys[0]] ?? 0),
        }];
      }
      break;

    /* ---------------------------------------------------------
       RANGE (Boxplot, Candlestick, RangeBar)
       Apex expects: y = [number, number, ...]
    --------------------------------------------------------- */
    case "range":
      series = [{
        name: "Series 1",
        data: data.map((d) => {
          let yVal: number[] = [];

          if (type === "boxplot") {
            // Must be [Min, Q1, Median, Q3, Max]
            yVal = [
              d.min ?? 0,
              d.q1 ?? 0,
              d.median ?? 0,
              d.q3 ?? 0,
              d.max ?? 0
            ];
          } else if (type === "candlestick") {
            // Must be [Open, High, Low, Close]
            yVal = [d.open ?? 0, d.high ?? 0, d.low ?? 0, d.close ?? 0];
          } else {
            // RangeBar / Timeline: [Start, End]
            yVal = [d.start ?? 0, d.end ?? 0];
          }

          return {
            x: d.x ?? d.label ?? d.category ?? d.date ?? "Unknown",
            y: yVal,
          };
        }),
      }];
      break;

    /* ---------------------------------------------------------
       HEATMAP
    --------------------------------------------------------- */
    case "heatmap":
      series = [{
        name: "Series 1",
        data: data.map((d) => ({
          x: String(d.x ?? "Unknown"),
          y: d.value ?? d.y ?? 0,
        })),
      }];
      break;

    /* ---------------------------------------------------------
       XY (Line, Area, Scatter, Bubble)
       Apex expects: series = [{ data: [{ x: 1, y: 2 }] }]
    --------------------------------------------------------- */
    default:
      if (type === "bubble") {
        series = [{
          name: "Series 1",
          data: data.map((d) => ({
            x: d.x ?? 0,
            y: d.y ?? 0,
            z: d.r ?? d.z ?? d.value ?? 0, // 'z' is the radius in bubbles
          })),
        }];
      } else if (numericKeys.length > 1) {
        series = numericKeys.map((key) => ({
          name: key,
          data: data.map((d) => ({
            x: d.x ?? d[categoryKey] ?? "Unknown",
            y: d[key] ?? 0,
          })),
        }));
      } else {
        series = [{
          name: "Series 1",
          data: data.map((d) => ({
            x: d.x ?? d[categoryKey] ?? "Unknown",
            y: d.y ?? d.value ?? d[numericKeys[0]] ?? 0,
          })),
        }];
      }
      break;
  }

  return { series, labels, categories };
};

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