import { chartEngine } from "./chartEngine";
 

export const looksLikeDate = (v: string): boolean => {
  if (!v || v.length < 6) return false;
  return !isNaN(Date.parse(v)) && /\d{4}|\d{2}[-/]\d{2}/.test(v);
};
 

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


    case "gauge": {
      const val = Number(
        Array.isArray(data) && data.length === 1
          ? (data[0].value ?? data[0].y ?? data[0])
          : data[0]?.value ?? data[0]?.y ?? 0
      );
      // Clamp to 0–100 for radialBar compatibility
      const clamped = isNaN(val) ? 0 : Math.min(100, Math.max(0, val));
      series = [clamped];
      labels = [String(data[0]?.label ?? data[0]?.name ?? "")];
      break;
    }

 
    // ── Category (bar, column, radar) ─────────────────────────────────────────
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
     
    // water fall

    case "waterfall": {
      series = [{
        name: "Series 1",
        data: data.map(d => ({
          x: String(d.x ?? d.label ?? d.category ?? d[fallbackCat]),
          y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0),
        })),
      }];
      break;
    }

    // ── Funnel ────────────────────────────────────────────────────────────────
    // ApexCharts funnel REQUIRES {x, y} objects inside data[].
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
 
  
    case "pyramid": {
      const sorted = [...data].sort(
        (a, b) => Number(a.value ?? a.y ?? 0) - Number(b.value ?? b.y ?? 0)
      );
      series = [{
        name: "Series 1",
        data: sorted.map(d => ({
          x: String(d.stage ?? d.x ?? d.category ?? d[fallbackCat]),
          y: Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0),
        })),
      }];
      break;
    }

    case "histogram": {
      const isPreBinned = first.bin !== undefined || first.count !== undefined;
 
      if (isPreBinned) {
        categories = data.map(d => String(d.bin ?? d.x ?? ""));
        series = [{
          name: "Frequency",
          data: data.map(d => Number(d.count ?? d.y ?? d.value ?? 0)),
        }];
      } else {
        // Auto-bin raw values into 10 equal-width buckets
        const values = data.map(d => Number(d.value ?? d.y ?? d[numericKeys[0]] ?? 0));
        const min    = Math.min(...values);
        const max    = Math.max(...values);
        const bins   = 10;
        const width  = (max - min) / bins || 1;
 
        const buckets = Array.from({ length: bins }, (_, i) => ({
          label: `${(min + i * width).toFixed(1)}–${(min + (i + 1) * width).toFixed(1)}`,
          count: 0,
        }));
 
        values.forEach(v => {
          const idx = Math.min(Math.floor((v - min) / width), bins - 1);
          buckets[idx].count++;
        });
 
        categories = buckets.map(b => b.label);
        series = [{
          name: "Frequency",
          data: buckets.map(b => b.count),
        }];
      }
      break;
    } 

    case "sunburst": {
      // Flatten hierarchy to treemap-compatible format for ApexCharts
      const flatten = (nodes: any[], depth = 0): any[] =>
        nodes.flatMap(n => [
          { x: String(n.name ?? ""), y: Number(n.value ?? 0) },
          ...(n.children ? flatten(n.children, depth + 1) : []),
        ]);
 
      series = [{ data: flatten(data) }];
      break;
    }
    
    case "sankey": {
      const nodeNames = [...new Set(
        data.flatMap((d: any) => [String(d.source ?? ""), String(d.target ?? "")])
      )];
      series = [{
        nodes: nodeNames.map(name => ({ name })),
        links: data.map(d => ({
          source: String(d.source ?? ""),
          target: String(d.target ?? ""),
          value:  Number(d.value ?? 0),
        })),
      }];
      break;
    }
     
    case "calendar": {
      const grouped: Record<string, { x: string; y: number }[]> = {};
      data.forEach((d: any) => {
        const dateStr = String(d.date ?? d.x ?? "");
        const date    = new Date(dateStr);
        if (isNaN(date.getTime())) return;
        const month = date.toLocaleString("default", { month: "short", year: "numeric" });
        const day   = date.toLocaleString("default", { weekday: "short" });
        if (!grouped[month]) grouped[month] = [];
        grouped[month].push({ x: day, y: Number(d.value ?? d.y ?? 0) });
      });
      series = Object.entries(grouped).map(([month, days]) => ({
        name: month,
        data: days,
      }));
      break;
    }


    case "range": {
      series = [{
        name: "Series 1",                        // ← FIX: was missing, caused crash
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
        name: "Series 1",
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
          // Use 'in' — avoids false negative when z or r is exactly 0
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