import { extractSeries } from "./extractSeries"

export const transformData = (type: string, data: any[]) => {

  if (!data.length) return { series: [] }

  const keys = Object.keys(data[0])

  // MULTI SERIES
  if (keys.length > 2) {

    const { series, categories } = extractSeries(data)

    return {
      series,
      categories
    }

  }

  // DONUT / PIE
  if (["donut","pie","radialbar"].includes(type)) {

    return {
      series: data.map(d => d.y ?? d.value ?? d),
      labels: data.map(d => d.x ?? d.label)
    }

  }

  // BAR / COLUMN / RADAR
  if (["bar","column","radar"].includes(type)) {

    return {
      series: [{
        name:"Series 1",
        data:data.map(d=>d.y)
      }],
      categories:data.map(d=>d.x)
    }

  }

  // HEATMAP
  if(type==="heatmap"){

    return{
      series:[{
        name:"Series 1",
        data:data.map(d=>({x:d.x,y:d.y}))
      }]
    }

  }

  // DEFAULT (line / area)

  return{
    series:[{
      name:"Series 1",
      data:data.map(d=>({x:d.x,y:d.y}))
    }]
  }

}