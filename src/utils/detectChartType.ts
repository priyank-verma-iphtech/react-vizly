export const detectChartType = (data: any[]): string => {

  if (!data || data.length === 0) return "bar"
 
  const first = data[0]
 
  if (typeof first === "number") return "donut"
 
  if (first.stage && first.value) return "funnel"
 
  if (first.label && first.value) return "donut"
 
  if (first.category && first.value) return "polararea"
 
  if (first.name && first.value) return "treemap"
 
  if (first.x !== undefined && first.y !== undefined && first.value !== undefined)
    return "heatmap"
 
  if (Array.isArray(first.y) && first.y.length === 4)
    return "candlestick"
 
  if (Array.isArray(first.y) && first.y.length === 5)
    return "boxplot"
 
  if (Array.isArray(first.y) && first.y.length === 2)
    return "rangebar"
 
  if (first.x !== undefined && first.y !== undefined && first.r !== undefined)
    return "bubble"
 
  if (typeof first.x === "number" && typeof first.y === "number")
    return "scatter"
 
  if (first.x && !isNaN(Date.parse(first.x)))
    return "line"
 
  if (first.start !== undefined && first.end !== undefined)
    return "rangebar"
 
  if (first.x !== undefined && first.y !== undefined)
    return "bar"
 
  return "bar"
 
 }

// export const detectChartType = (data: any[]) => {

//    if (!data || data.length === 0) return "bar"
 
//    const first = data[0]
 
//    /* -----------------------------
//       FUNNEL
//    ------------------------------ */
 
//    if (first?.stage && first?.value)
//      return "funnel"
 
//    /* -----------------------------
//       DONUT / PIE
//    ------------------------------ */
 
//    if (first?.label && first?.value)
//      return "donut"
 
//    if (typeof first === "number")
//      return "donut"
 
//    /* -----------------------------
//       POLAR AREA
//    ------------------------------ */
 
//    if (first?.category && first?.value)
//      return "polararea"
 
//    /* -----------------------------
//       CANDLESTICK
//       y: [open, high, low, close]
//    ------------------------------ */
 
//    if (Array.isArray(first?.y) && first.y.length === 4)
//      return "candlestick"
 
//    /* -----------------------------
//       BOX PLOT
//       y: [min,q1,median,q3,max]
//    ------------------------------ */
 
//    if (Array.isArray(first?.y) && first.y.length === 5)
//      return "boxplot"
 
//    /* -----------------------------
//       RANGE BAR / TIMELINE
//       y: [start,end]
//    ------------------------------ */
 
//    if (Array.isArray(first?.y) && first.y.length === 2)
//      return "rangebar"
 
//    /* -----------------------------
//       BUBBLE
//       x,y,r
//    ------------------------------ */
 
//    if (
//      first?.x !== undefined &&
//      first?.y !== undefined &&
//      first?.r !== undefined
//    )
//      return "bubble"
 
//    /* -----------------------------
//       SCATTER
//    ------------------------------ */
 
//    if (typeof first?.x === "number")
//      return "scatter"
 
//    /* -----------------------------
//       LINE (date based)
//    ------------------------------ */
 
//    if (first?.x && !isNaN(Date.parse(first.x)))
//      return "line"
 
//    /* -----------------------------
//       MULTI SERIES
//    ------------------------------ */
 
//    if (typeof first === "object" && Object.keys(first).length > 2)
//      return "mixed"
 
//    /* -----------------------------
//       DEFAULT
//    ------------------------------ */
 
//    return "bar"
//  }

 // Bar  [{ x:"Jan",y:20 },{ x:"Feb",y:40 }]
 // Line [{ x:"2024-01-01",y:20 }]
 // Donut  [{ label:"Chrome",value:60 }]
 // candlestick [{ x:"2024-01-01", y:[30,40,25,35] }]
 // BoxPlot [{ x:"Jan", y:[10,20,30,40,50] }]
 // Range Bar / timeline  [{ x:"Task A", y:[1,5] }]
 // scatter   [{ x:10, y:20 }]
 // multi series  [{ month:"Jan", sales:40, profit:20 }]
 // bubble  { x:10, y:20, r:15 }
 // polar area  { category:"A", value:30 }
 // funnel  { stage:"Visit", value:500 }
 // mixed  { month:"Jan", sales:40, profit:20 }
 //  Heat map [{ x:"Mon", y:"Morning", value:30 }]
 // Tree map  [{ name:"Asia", value:100, children:[...] }]