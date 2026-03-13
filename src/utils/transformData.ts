import { chartEngine } from "./chartEngine";

export const transformData = (type: string, data: any[]) => {
  const engine = chartEngine[type] || "xy";
  let series: any[] = [];
  let labels: string[] = [];
  let categories: string[] = [];

  if (!data || data.length === 0) return { series, labels, categories };

  const first = data[0];
  const numericKeys = Object.keys(first).filter(k => typeof first[k] === "number");
  const fallbackCat = Object.keys(first).find(k => typeof first[k] === "string") || "x";

  switch (engine) {
    case "circular":
      series = data.map(d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? d));
      labels = data.map(d => String(d.label ?? d.category ?? d.x ?? ""));
      break;

    case "category":
      categories = data.map(d => String(d.x ?? d.category ?? d.stage ?? d[fallbackCat]));
      series = [{
        name: "Series 1",
        data: data.map(d => d.value ?? d.y ?? d[numericKeys[0]] ?? 0)
      }];
      break;

    case "range":
      series = [{
        data: data.map(d => ({
          x: String(d.x ?? d.date ?? d.category ?? d[fallbackCat]),
          y: Array.isArray(d.y) ? d.y : [
            d.open ?? d.min ?? d.start,
            d.high ?? d.q1 ?? d.end,
            d.low ?? d.median,
            d.close ?? d.q3,
            d.max
          ].filter(v => v !== undefined)
        }))
      }];
      break;

    case "heatmap":
    case "treemap":
      series = [{
        name: type,
        data: data.map(d => ({
          x: String(d.x ?? d.name ?? d.category ?? d[fallbackCat]),
          y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0)
        }))
      }];
      break;

    default: // XY Engine
      series = [{
        name: "Series 1",
        data: data.map(d => ({
          x: d.x ?? d[fallbackCat],
          y: d.y ?? d.value ?? 0,
          z: d.z ?? d.r ?? 15 // Bubble radius fallback
        }))
      }];
      break;
  }

  return { series, labels, categories };
};