export const detectChartType = (data: any[]): string => {
  if (!data || data.length === 0) return "bar";
  const first = data[0];

  if (typeof first === "number") return "donut";
  if (typeof first !== "object") return "bar";

  // Specialized keys
  if (first.stage && first.value) return "funnel";
  if (first.label && first.value) return "donut";
  if (first.category && first.value) return "polararea";
  
  // Array-based Y values (Range Engine)
  if (Array.isArray(first.y)) {
    if (first.y.length === 4) return "candlestick";
    if (first.y.length === 5) return "boxplot";
    if (first.y.length === 2) return "rangebar";
  }

  // Fallback detections
  if (first.x !== undefined && first.y !== undefined && first.r !== undefined) return "bubble";
  if (first.start !== undefined && first.end !== undefined) return "slope";
  if (first.x !== undefined && first.y !== undefined) return "bar";

  return "bar";
};

// export const detectChartType = (data: any[]): string => {

//    if (!data || data.length === 0) return "bar"
 
//    const first = data[0]
 
//    if (typeof first === "number")
//      return "donut"
 
//    if (typeof first !== "object")
//      return "bar"
 
//    const keys = Object.keys(first)
 
//    const numericValues = Object.values(first).filter(
//      v => typeof v === "number"
//    )
 
//    /* -----------------------------
//       FUNNEL
//    ------------------------------ */
 
//    if (first.stage && first.value)
//      return "funnel"
 
//    /* -----------------------------
//       DONUT / PIE
//    ------------------------------ */
 
//    if (first.label && first.value)
//      return "donut"
 
//    /* -----------------------------
//       POLAR AREA
//    ------------------------------ */
 
//    if (first.category && first.value)
//      return "polararea"
 
//    /* -----------------------------
//       HEATMAP
//    ------------------------------ */
 
//    if (first.x !== undefined && first.y !== undefined && first.value !== undefined)
//      return "heatmap"
 
//    /* -----------------------------
//       TREEMAP
//    ------------------------------ */
 
//    if (first.name && first.value && Array.isArray(first.children))
//      return "treemap"
 
//    /* -----------------------------
//       CANDLESTICK
//       y: [open,high,low,close]
//    ------------------------------ */
 
//    if (Array.isArray(first.y) && first.y.length === 4)
//      return "candlestick"
 
//    /* -----------------------------
//       BOX PLOT
//       y:[min,q1,median,q3,max]
//    ------------------------------ */
 
//    if (Array.isArray(first.y) && first.y.length === 5)
//      return "boxplot"
 
//    /* -----------------------------
//       RANGE BAR
//       y:[start,end]
//    ------------------------------ */
 
//    if (Array.isArray(first.y) && first.y.length === 2)
//      return "rangebar"
 
//    /* -----------------------------
//       BUBBLE
//    ------------------------------ */
 
//    if (first.x !== undefined && first.y !== undefined && first.r !== undefined)
//      return "bubble"
 
//    /* -----------------------------
//       SCATTER
//    ------------------------------ */
 
//    if (typeof first.x === "number" && typeof first.y === "number")
//      return "scatter"
 
//    /* -----------------------------
//       DATE BASED LINE
//    ------------------------------ */
 
//    if (first.x && !isNaN(Date.parse(first.x)))
//      return "line"
 
//    /* -----------------------------
//       SLOPE
//    ------------------------------ */
 
//    if (first.start !== undefined && first.end !== undefined)
//      return "slope"
 
//    /* -----------------------------
//       MULTI SERIES
//    ------------------------------ */
 
//    if (numericValues.length > 1)
//      return "mixed"
 
//    /* -----------------------------
//       CATEGORY BAR
//    ------------------------------ */
 
//    if (first.x !== undefined && first.y !== undefined)
//      return "bar"
 
//    return "bar"
//  }

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