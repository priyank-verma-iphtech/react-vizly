import { chartEngine } from "./chartEngine"

export const transformData = (type: string, data: any[]) => {

  const engine = chartEngine[type] || "xy"

  let series: any = []
  let labels: string[] = []
  let categories: string[] = []

  if (!data || data.length === 0)
    return { series, labels, categories }

  const first = data[0]

  /* -----------------------------
     DETECT NUMERIC KEYS
     (for multi-series)
  ------------------------------ */

  const numericKeys = Object.keys(first).filter(
    k => typeof first[k] === "number"
  )

  const categoryKey = Object.keys(first).find(
    k => typeof first[k] === "string"
  )

  switch (engine) {

    /* -----------------------------
       CIRCULAR
    ------------------------------ */

    case "circular":

      series = data.map(d => d.value ?? d.y ?? d)

      labels = data.map(
        d => d.label ?? d.category ?? d.name ?? d.x
      )

      break

    /* -----------------------------
       CATEGORY CHARTS
       bar / column / radar / funnel
    ------------------------------ */

    case "category":

      categories = data.map(d => d.x ?? d.category ?? d.stage ?? d[categoryKey!])

      if (numericKeys.length > 1) {

        /* MULTI SERIES */

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

    /* -----------------------------
       HEATMAP
    ------------------------------ */

    case "heatmap":

      series = [{
        name: "Series 1",
        data: data.map(d => ({
          x: d.x,
          y: d.value ?? d.y
        }))
      }]

      break

    /* -----------------------------
       RANGE
       rangebar / candlestick / boxplot
    ------------------------------ */

    case "range":

      series = [{ name:"Series 1", data }]

      break

    /* -----------------------------
       XY
       line / scatter / bubble
    ------------------------------ */

    default:

      if (type === "bubble") {

        series = [{
          name: "Series 1",
          data: data.map(d => ({
            x: d.x,
            y: d.y,
            r: d.r
          }))
        }]

      }

      else if (numericKeys.length > 1) {

        /* MULTI SERIES XY */

        series = numericKeys.map(key => ({
          name: key,
          data: data.map(d => ({
            x: d.x ?? d[categoryKey!],
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