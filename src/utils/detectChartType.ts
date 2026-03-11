export const detectChartType = (data: any[]) => {

    if (!data || data.length === 0) return "bar"
  
    const first = data[0]
  
    if (typeof first === "number") return "donut"
  
    if (Array.isArray(first?.y)) return "rangeBar"
  
    if (typeof first === "object" && Object.keys(first).length > 2)
      return "line"
  
    if (first?.x && typeof first?.x === "string")
      return "bar"
  
    if (first?.x && !isNaN(Date.parse(first.x)))
      return "line"
  
    return "line"
  
  }