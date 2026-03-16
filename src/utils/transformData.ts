import { chartEngine } from "./chartEngine";
 
// ─────────────────────────────────────────────────────────────────────────────
// Helper
// ─────────────────────────────────────────────────────────────────────────────
 
/**
 * Returns true only when a string is a real parseable date (ISO / RFC).
 * Plain labels like "Mon", "Q1", "Team A" return false.
 *
 * Used by VizlyChart to avoid setting xaxis.type:"datetime" on
 * string-labelled range charts — ApexCharts cannot parse those as
 * timestamps and renders a blank chart.
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
 
    // ── Range (candlestick, boxPlot, rangeBar) ────────────────────────────────
    // FIX 1: Added `name` field — ApexCharts internally accesses
    //         series[i].name and crashes with `.length of undefined` when
    //         name is missing. Previously this case had no name field at all.
    //
    // FIX 2: Normalise flat-property shapes into y arrays:
    //   candlestick: { open, high, low, close } → y:[o,h,l,c]
    //   boxplot:     { min, max }               → y:[min,max]
    //   rangebar:    { start, end }             → y:[start,end]
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