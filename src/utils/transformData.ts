// transformData.ts
// Converts a flat data[] into { series, labels, categories } that
// ApexCharts understands, based on the engine type from chartEngine.
 
import { chartEngine } from "./chartEngine";
 
// ─────────────────────────────────────────────────────────────────────────────
// Helper
// ─────────────────────────────────────────────────────────────────────────────
 
/**
 * Returns true only when a string is a real parseable date (ISO / RFC).
 * Plain labels like "Mon", "Q1", "Team A" return false.
 *
 * Used by the range engine to avoid setting xaxis.type:"datetime" on
 * string-labelled charts — ApexCharts cannot parse those as timestamps
 * and renders a blank chart.
 */
export const looksLikeDate = (v: string): boolean => {
  if (!v || v.length < 6) return false;
  return !isNaN(Date.parse(v)) && /\d{4}|\d{2}[-/]\d{2}/.test(v);
};
 
// ─────────────────────────────────────────────────────────────────────────────
// Main transform
// ─────────────────────────────────────────────────────────────────────────────
 
export const transformData = (type: string, data: any[]) => {
  const engine = chartEngine[type] || "xy";
  let series: any[]        = [];
  let labels: string[]     = [];
  let categories: string[] = [];
 
  if (!data || data.length === 0) return { series, labels, categories };
 
  const first       = data[0];
  const numericKeys = Object.keys(first).filter(k => typeof first[k] === "number");
  const fallbackCat = Object.keys(first).find(k => typeof first[k] === "string") || "x";
 
  switch (engine) {
 
    // ── Circular (pie, donut, radialBar, polarArea) ───────────────────────────
    case "circular": {
      series = data.map(d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? d));
      labels = data.map(d => String(d.label ?? d.category ?? d.x ?? ""));
      break;
    }
 
    // ── Category (bar, column, radar) ─────────────────────────────────────────
    // NOTE: funnel is NOT here — it has its own engine case below.
    case "category": {
      categories = data.map(
        d => String(d.x ?? d.category ?? d[fallbackCat])
      );
      series = [{
        name: "Series 1",
        data: data.map(d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0)),
      }];
      break;
    }
 
    // ── Funnel ────────────────────────────────────────────────────────────────
    // FIX: ApexCharts funnel REQUIRES {x, y} objects inside data[].
    //      The old "category" engine produced flat numbers + a separate
    //      categories array — ApexCharts funnel does NOT support that shape
    //      and renders a blank chart.
    case "funnel": {
      series = [{
        name: "Series 1",
        data: data.map(d => ({
          x: String(d.stage ?? d.x ?? d.category ?? d[fallbackCat]),
          y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0),
        })),
      }];
      break;
    }
 
    // ── Range (candlestick, boxPlot, rangeBar) ────────────────────────────────
    // FIX: normalise flat-property shapes into y arrays so all three range
    //      types accept the "natural" data shape their names imply:
    //        candlestick: { open, high, low, close }  → y:[o,h,l,c]
    //        boxplot:     { min, max }                → y:[min,max]
    //        rangebar:    { start, end }              → y:[start,end]
    case "range": {
      series = [{
        data: data.map(d => {
          const yValue =
            d.y ??
            (d.open  !== undefined ? [d.open,  d.high, d.low, d.close] :
             d.min   !== undefined ? [d.min,   d.max]                  :
             d.start !== undefined ? [d.start, d.end]                  :
             undefined);
 
          return {
            x: String(d.x ?? d.date ?? d.category ?? d[fallbackCat]),
            y: yValue,
          };
        }),
      }];
      break;
    }
 
    // ── Heatmap ───────────────────────────────────────────────────────────────
    // FIX: const inside a switch case must be in a block scope {}.
    //      Without braces this throws in strict TypeScript / strict mode.
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
      series = [{
        data: data.map(d => ({
          x: String(d.x ?? d.name ?? d.category ?? d[fallbackCat]),
          y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0),
        })),
      }];
      break;
    }
 
    // ── XY default (line, area, scatter, bubble) ──────────────────────────────
    default: {
      series = [{
        name: "Series 1",
        data: data.map(d => {
          const point: any = {
            x: d.x ?? d[fallbackCat],
            y: d.y ?? d.value ?? 0,
          };
          // FIX: use 'in' operator — avoids false negative when z or r is 0
          if ("z" in d || "r" in d) {
            point.z = d.z ?? d.r;
          }
          return point;
        }),
      }];
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