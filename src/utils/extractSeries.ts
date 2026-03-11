export const extractSeries = (data: any[]) => {

    const keys = Object.keys(data[0])
  
    const categoryKey = keys[0]
  
    const valueKeys = keys.slice(1)
  
    const categories = data.map(d => d[categoryKey])
  
    const series = valueKeys.map(key => ({
      name: key,
      data: data.map(d => d[key])
    }))
  
    return { series, categories }
  
  }