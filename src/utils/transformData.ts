import { chartEngine } from "./chartEngine"

export const transformData = (type: string, data: any[]) => {

  const engine = chartEngine[type] || "xy"

  let series: any = []
  let labels: string[] = []
  let categories: string[] = []

  switch (engine) {

    case "circular":

      series = data.map(d => d.y ?? d.value ?? d)
      labels = data.map(d => d.x ?? d.label)

      break

    case "category":

      categories = data.map(d => d.x)

      series = [{
        name: "Series 1",
        data: data.map(d => d.y)
      }]

      break

    case "heatmap":

      series = [{
        name: "Series 1",
        data: data.map(d => ({ x: d.x, y: d.y }))
      }]

      break

    case "range":

      series = [{ data }]

      break

    default:

      series = [{
        name: "Series 1",
        data: data.map(d => ({ x: d.x, y: d.y }))
      }]
  }

  return { series, labels, categories }
}