export const detectChartType = (data: any[]) => {

    if (!data?.length) return "bar"
  
    const first = data[0]
  
    if (typeof first === "number") return "donut"
  
    if (Array.isArray(first?.y)) return "rangeBar"
  
    if (first?.x && !isNaN(Date.parse(first.x))) return "line"
  
    if (typeof first === "object" && Object.keys(first).length > 2)
      return "line"
  
    if (first?.x && typeof first.x === "string")
      return "bar"
  
    return "line"
  }