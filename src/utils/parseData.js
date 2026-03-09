export function parseData(data, xKey, yKeys) {
    const categories = data.map(d => d[xKey])
  
    const series = yKeys.map(key => ({
      name: key,
      data: data.map(d => d[key])
    }))
  
    return { categories, series }
  }