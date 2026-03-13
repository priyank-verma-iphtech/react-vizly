import { chartEngine } from "./chartEngine";
export const transformData = (type: string, data: any[]) => {
  const engine = chartEngine[type] || "xy";
  let series: any[] = [];
  let labels: string[] = [];
  let categories: string[] = [];

  if (!data || data.length === 0) return { series, labels, categories };

  const first = data[0];
  const numericKeys = Object.keys(first).filter(k => typeof first[k] === "number");
  const stringKeys = Object.keys(first).filter(k => typeof first[k] === "string");
  const fallbackCat = stringKeys[0] || "x";
  const fallbackNum = numericKeys[0] || "y";

  switch (engine) {
    case "circular":
      series = data.map(d => Number(d.value ?? d.y ?? d[fallbackNum] ?? d));
      labels = data.map(d => String(d.label ?? d.category ?? d.name ?? d[fallbackCat] ?? ""));
      break;

    case "category":
      categories = data.map(d => String(d.x ?? d.category ?? d.stage ?? d[fallbackCat] ?? ""));
      series = (numericKeys.length > 1 && type !== 'funnel')
        ? numericKeys.map(k => ({ name: k, data: data.map(d => d[k] ?? 0) }))
        : [{ name: "Series 1", data: data.map(d => d.y ?? d.value ?? d[fallbackNum] ?? 0) }];
      break;

    case "xy":
    default:
      series = numericKeys.length > 1
        ? numericKeys.map(k => ({
            name: k,
            data: data.map(d => ({ x: d.x ?? d[fallbackCat], y: d[k] ?? 0 }))
          }))
        : [{
            name: "Series 1",
            data: data.map(d => ({ 
              x: d.x ?? d[fallbackCat], 
              y: d.y ?? d.value ?? d[fallbackNum] ?? 0,
              ...(type === 'bubble' && { z: d.z ?? d.r ?? 15 })
            }))
          }];
      break;

    // ... (Keep Heatmap, Treemap, and Range as they are correctly structured now)
  }

  return { series, labels, categories };
};