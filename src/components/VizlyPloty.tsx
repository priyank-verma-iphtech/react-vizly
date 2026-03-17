// VizlyPlotly.tsx
// Plotly renderer — used when renderer="plotly" is passed to VizlyChart.
// Handles: line, area, bar, column, scatter, bubble, pie, donut,
//          candlestick, boxplot, heatmap, funnel, radar (polar), rangebar.
//
// Install:  npm i react-plotly.js plotly.js
// Types:    npm i -D @types/react-plotly.js @types/plotly.js

import React from "react";
import Plot  from "react-plotly.js";

// ─────────────────────────────────────────────────────────────────────────────
// FIX A: Import Plotly types explicitly.
//
// `import Plot from "react-plotly.js"` only imports the React component —
// it does NOT bring in the `Plotly` namespace.
// Using `Partial<Plotly.Layout>` without this import causes:
//   "Cannot find namespace 'Plotly'" TypeScript compile error.
//
// We import the types from "plotly.js" (the underlying library) using
// `import type` so it is erased at runtime (no extra bundle cost).
// ─────────────────────────────────────────────────────────────────────────────
import type { Layout, Config, Data } from "plotly.js";

// ─────────────────────────────────────────────────────────────────────────────
// Default color palette — override via options.colors
// ─────────────────────────────────────────────────────────────────────────────
const DEFAULT_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981",
  "#f43f5e", "#8b5cf6", "#06b6d4",
];

interface VizlyPlotlyProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: string };
}

const VizlyPlotly: React.FC<VizlyPlotlyProps> = ({
  data,
  type = "line",
  options = {},
  height = 350,
  title,
}) => {
  const t = String(Array.isArray(type) ? type[0] : type).toLowerCase();
  const colors: string[]  = options.colors ?? DEFAULT_COLORS;
  const titleText: string = typeof title === "string" ? title : (title?.text ?? "");

  // ── Normalise data ─────────────────────────────────────────────────────────
  const isMulti   = Array.isArray(data[0]);
  const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];

  // ── Shared layout defaults ─────────────────────────────────────────────────
  // FIX A continued: use `Partial<Layout>` instead of `Partial<Plotly.Layout>`
  const baseLayout: Partial<Layout> = {
    title:         { text: titleText, font: { size: 14 } },
    height:        typeof height === "number" ? height : parseInt(String(height), 10) || 350,
    margin:        { t: titleText ? 40 : 20, r: 20, b: 50, l: 50 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor:  "rgba(0,0,0,0)",
    font:          { family: "inherit", size: 12 },
    showlegend:    true,
    colorway:      colors,
    ...options.layout,
  };

  // FIX A continued: use `Partial<Config>` instead of `Partial<Plotly.Config>`
  // FIX B: removed "sendDataToCloud" — not a valid Plotly modeBar button name.
  //        Valid names: "zoom2d","pan2d","select2d","lasso2d","zoomIn2d",
  //        "zoomOut2d","autoScale2d","resetScale2d","toImage","toggleSpikelines" etc.
  const baseConfig: Partial<Config> = {
    responsive:  true,
    displaylogo: false,
    modeBarButtonsToRemove: ["toImage"],  // only remove what's valid
    ...options.config,
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PIE / DONUT
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "pie" || t === "donut") {
    const flat = datasets[0];
    // FIX A continued: use Data[] instead of Plotly.Data[]
    const plotData: Data[] = [{
      type:          "pie",
      labels:        flat.map((d: any) => String(d.label ?? d.name ?? d.x ?? "")),
      values:        flat.map((d: any) => Number(d.value ?? d.y ?? 0)),
      hole:          t === "donut" ? 0.5 : 0,
      marker:        { colors },
      textinfo:      "label+percent",
      hovertemplate: "%{label}: %{value} (%{percent})<extra></extra>",
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={baseLayout}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RADAR (polar chart in Plotly)
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "radar") {
    const plotData: Data[] = datasets.map((ds, i) => ({
      type:      "scatterpolar" as any,
      r:          ds.map((d: any) => Number(d.y ?? 0)),
      theta:      ds.map((d: any) => String(d.x ?? "")),
      fill:      "toself",
      name:      `Series ${i + 1}`,
      line:      { color: colors[i % colors.length] },
      fillcolor: colors[i % colors.length] + "40",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={{ ...baseLayout, polar: { radialaxis: { visible: true } } }}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SCATTER
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "scatter") {
    const plotData: Data[] = datasets.map((ds, i) => ({
      type:   "scatter" as any,
      mode:   "markers",
      x:       ds.map((d: any) => d.x ?? 0),
      y:       ds.map((d: any) => Number(d.y ?? 0)),
      name:   `Series ${i + 1}`,
      marker: { color: colors[i % colors.length], size: 8 },
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={baseLayout}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // BUBBLE  (z controls marker size)
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "bubble") {
    const plotData: Data[] = datasets.map((ds, i) => ({
      type:   "scatter" as any,
      mode:   "markers",
      x:       ds.map((d: any) => d.x ?? 0),
      y:       ds.map((d: any) => Number(d.y ?? 0)),
      name:   `Series ${i + 1}`,
      marker: {
        color:    colors[i % colors.length],
        size:     ds.map((d: any) => Math.sqrt(Number(d.z ?? d.r ?? 10)) * 4),
        sizemode: "diameter",
        opacity:  0.75,
      },
      text:          ds.map((d: any) => `Size: ${d.z ?? d.r ?? 0}`),
      hovertemplate: "X: %{x}<br>Y: %{y}<br>%{text}<extra></extra>",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={baseLayout}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CANDLESTICK
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "candlestick") {
    const flat = datasets[0];
    const plotData: Data[] = [{
      type:  "candlestick" as any,
      x:      flat.map((d: any) => String(d.x ?? d.date ?? "")),
      open:   flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[0] : (d.open  ?? 0))),
      high:   flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[1] : (d.high  ?? 0))),
      low:    flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[2] : (d.low   ?? 0))),
      close:  flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[3] : (d.close ?? 0))),
      name:  titleText || "OHLC",
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={{ ...baseLayout, xaxis: { rangeslider: { visible: false } } }}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // BOXPLOT
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "boxplot") {
    const flat = datasets[0];
    const plotData: Data[] = flat.map((d: any, i: number) => ({
      type:      "box" as any,
      name:      String(d.x ?? `Group ${i + 1}`),
      y:          Array.isArray(d.y) ? d.y : [d.min ?? 0, d.max ?? 0],
      marker:    { color: colors[i % colors.length] },
      boxpoints: false,
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={baseLayout}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // HEATMAP
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "heatmap") {
    const flat    = datasets[0];
    const xLabels = [...new Set(flat.map((d: any) => String(d.x ?? d.category ?? "")))] as string[];
    const yLabels = [...new Set(flat.map((d: any) => String(d.group ?? "Series 1")))]   as string[];

    const z = yLabels.map((yLabel) =>
      xLabels.map((xLabel) => {
        const entry = flat.find(
          (d: any) =>
            String(d.group ?? "Series 1") === yLabel &&
            String(d.x ?? d.category ?? "") === xLabel
        );
        return Number(entry?.value ?? entry?.y ?? 0);
      })
    );

    const plotData: Data[] = [{
      type:       "heatmap" as any,
      x:           xLabels,
      y:           yLabels,
      z,
      colorscale: "Blues",
      showscale:  true,
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={baseLayout}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // FUNNEL
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "funnel") {
    const flat = datasets[0];
    const plotData: Data[] = [{
      type:         "funnel" as any,
      y:             flat.map((d: any) => String(d.stage ?? d.x ?? "")),
      x:             flat.map((d: any) => Number(d.y ?? d.value ?? 0)),
      textposition: "inside",
      textinfo:     "value+percent initial",
      marker:       { color: colors },
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={baseLayout}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RANGEBAR (Gantt-style)
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "rangebar") {
    const flat = datasets[0];
    const plotData: Data[] = flat.map((d: any, i: number) => {
      const start = Number(Array.isArray(d.y) ? d.y[0] : (d.start ?? 0));
      const end   = Number(Array.isArray(d.y) ? d.y[1] : (d.end   ?? 0));
      return {
        type:          "bar" as any,
        orientation:   "h",
        name:          String(d.x ?? `Task ${i + 1}`),
        x:              [end - start],
        y:              [String(d.x ?? `Task ${i + 1}`)],
        base:           [start],
        marker:        { color: colors[i % colors.length] },
        hovertemplate: `%{y}: ${start} → ${end}<extra></extra>`,
      } as Data;
    });

    return (
      <Plot
        data={plotData}
        layout={{ ...baseLayout, barmode: "overlay", showlegend: false }}
        config={baseConfig}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // LINE / AREA / BAR / COLUMN  (default — supports multiple series)
  // ─────────────────────────────────────────────────────────────────────────
  const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];

  const plotData: Data[] = datasets.map((ds, i) => {
    const isBar  = t === "bar" || t === "column";
    const isArea = t === "area";

    return {
      type:        isBar ? "bar" : "scatter",
      mode:        isBar ? undefined : "lines+markers",
      orientation: t === "bar" ? "h" : undefined,
      name:        seriesNames[i] ?? `Series ${i + 1}`,
      x:            isBar
                     ? ds.map((d: any) => Number(d.y ?? d.value ?? 0))
                     : ds.map((d: any) => String(d.x ?? d.category ?? "")),
      y:            isBar
                     ? ds.map((d: any) => String(d.x ?? ""))
                     : ds.map((d: any) => Number(d.y ?? d.value ?? 0)),
      fill:        isArea ? "tozeroy"  : undefined,
      fillcolor:   isArea ? colors[i % colors.length] + "30" : undefined,
      line:        isBar ? undefined : {
                     color: colors[i % colors.length],
                     width: 2,
                     shape: "spline",
                   },
      marker:      { color: colors[i % colors.length], size: isBar ? undefined : 5 },
    } as Data;
  });

  return (
    <Plot
      data={plotData}
      layout={{
        ...baseLayout,
        barmode: t === "column" ? "group" : undefined,
        xaxis:   { showgrid: true, gridcolor: "#e5e7eb" },
        yaxis:   { showgrid: true, gridcolor: "#e5e7eb" },
      }}
      config={baseConfig}
      style={{ width: "100%" }}
      useResizeHandler
    />
  );
};

export default VizlyPlotly;
