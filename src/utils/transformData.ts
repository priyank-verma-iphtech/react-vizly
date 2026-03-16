import { chartEngine } from "./chartEngine";
 
export const transformData = (type: string, data: any[]) => {
  const engine = chartEngine[type] || "xy";
  let series: any[]    = [];
  let labels: string[] = [];
  let categories: string[] = [];
 
  if (!data || data.length === 0) return { series, labels, categories };
 
  const first = data[0];
  const numericKeys = Object.keys(first).filter(k => typeof first[k] === "number");
  const fallbackCat = Object.keys(first).find(k => typeof first[k] === "string") || "x";
 
  switch (engine) {
 
    // ── Circular (pie, donut, radialBar, polarArea) ───────────────────────────
    case "circular": {
      series = data.map(
        d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? d)
      );
      labels = data.map(
        d => String(d.label ?? d.category ?? d.x ?? "")
      );
      break;
    }
 
    // ── Category (bar, column, radar, funnel) ─────────────────────────────────
    case "category": {
      categories = data.map(
        d => String(d.x ?? d.category ?? d.stage ?? d[fallbackCat])
      );
      series = [
        {
          name: "Series 1",
          data: data.map(
            d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0)
          ),
        },
      ];
      break;
    }
 
    // ── Range (candlestick, boxplot, rangebar) ────────────────────────────────
    case "range": {
      series = [
        {
          data: data.map(d => {
            // Prefer pre-built y array; otherwise normalise flat-property shapes
            const yValue =
              d.y ??
              (d.open  !== undefined ? [d.open,  d.high, d.low,  d.close] :
               d.min   !== undefined ? [d.min,   d.max]                   :
               d.start !== undefined ? [d.start, d.end]                   :
               undefined);
 
            return {
              x: String(d.x ?? d.date ?? d.category ?? d[fallbackCat]),
              y: yValue,
            };
          }),
        },
      ];
      break;
    }
 
    // ── Heatmap ───────────────────────────────────────────────────────────────
    // NOTE: const inside switch MUST be wrapped in a block scope {}
    case "heatmap": {
      const groups = [...new Set(data.map(d => d.group ?? "Series 1"))];
      series = groups.map(group => ({
        name: String(group),
        data: data
          .filter(d => (d.group ?? "Series 1") === group)
          .map(d => ({
            x: String(d.x ?? d.category ?? d[fallbackCat]),
            y: Number(d.value ?? d.y ?? 0),
          })),
      }));
      break;
    }
 
    // ── Treemap ───────────────────────────────────────────────────────────────
    case "treemap": {
      series = [
        {
          data: data.map(d => ({
            x: String(d.x ?? d.name ?? d.category ?? d[fallbackCat]),
            y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0),
          })),
        },
      ];
      break;
    }
 
    // ── XY default (line, area, scatter, bubble) ──────────────────────────────
    default: {
      series = [
        {
          name: "Series 1",
          data: data.map(d => {
            const point: any = {
              x: d.x ?? d[fallbackCat],
              y: d.y ?? d.value ?? 0,
            };
 
            // Use 'in' operator — safer than !== undefined for r/z checks
            if ("z" in d || "r" in d) {
              point.z = d.z ?? d.r;
            }
 
            return point;
          }),
        },
      ];
      break;
    }
  }
 
  return { series, labels, categories };
};


// import { chartEngine } from "./chartEngine";

// export const transformData = (type: string, data: any[]) => {
//   const engine = chartEngine[type] || "xy";
//   let series: any[] = [];
//   let labels: string[] = [];
//   let categories: string[] = [];

//   if (!data || data.length === 0) return { series, labels, categories };

//   const first = data[0];
//   const numericKeys = Object.keys(first).filter(k => typeof first[k] === "number");
//   const fallbackCat = Object.keys(first).find(k => typeof first[k] === "string") || "x";

//   switch (engine) {
//     case "circular":
//       series = data.map(
//         d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? d)
//        );
       
//        labels = data.map(
//         d => String(d.label ?? d.category ?? d.x ?? "")
//        );

//      break;

//       case "category":
//         categories = data.map(
//          d => String(d.x ?? d.category ?? d.stage ?? d[fallbackCat])
//         );
        
//         series = [
//         {
//          name: "Series 1",
//          data: data.map(
//            d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0)
//         )
//         }
//         ];
        
//         break;

//         case "range":
//   series = [{
//     data: data.map(d => ({
//       x: String(d.x ?? d.date ?? d.category ?? d[fallbackCat]),
//       y: d.y
//         ?? (d.open !== undefined
//             ? [d.open, d.high, d.low, d.close]
//             : d.min !== undefined
//             ? [d.min, d.max]
//             : d.start !== undefined
//             ? [d.start, d.end]
//             : undefined)
//           }))
//         }];
//         break;

//         case "heatmap": {
//           const groups = [...new Set(data.map(d => d.group ?? "Series 1"))];
//           series = groups.map(group => ({
//             name: group,
//             data: data
//               .filter(d => (d.group ?? "Series 1") === group)
//               .map(d => ({ x: String(d.x ?? d[fallbackCat]), y: Number(d.value ?? d.y ?? 0) }))
//           }));
//           break;
//         }
            
            
//             case "treemap":
            
//             series = [{
//               data: data.map(d => ({
//                 x: String(d.x ?? d.name ?? d.category ?? d[fallbackCat]),
//                 y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0)
//               }))
//             }];
            
//             break;
            
            
//             default: // XY Engine
            
//             series = [{
//               name: "Series 1",
//               data: data.map(d => {
//                 const point:any = {
//                   x: d.x ?? d[fallbackCat],
//                   y: d.y ?? d.value ?? 0
//                 };
            
//                 if (d.z !== undefined || ('z' in d || 'r' in d)) {
//                   point.z = d.z ?? d.r;
//                 }
            
//                 return point;
//               })
//             }];
            
//             break;
//   }

//   return { series, labels, categories };
// };