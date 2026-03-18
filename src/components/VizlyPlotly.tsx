// VizlyPlotly.tsx
// Plotly renderer — used when renderer="plotly" is passed to VizlyChart.
// Handles: line, area, bar, column, scatter, bubble, pie, donut,
//          candlestick, boxplot, heatmap, funnel, radar (polar), rangebar.
//
// Install:  npm i react-plotly.js plotly.js
// Types:    npm i -D @types/react-plotly.js @types/plotly.js


// VizlyPlotly.tsx
import React from "react";
import Plot from "react-plotly.js";
import type { Layout, Config, Data } from "plotly.js";

// ─── Color palette ────────────────────────────────────────────────────────────
const DEFAULT_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981", "#f43f5e",
  "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6",
  "#a855f7", "#0ea5e9",
];

interface VizlyPlotlyProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: "left" | "center" | "right"; style?: any };
}

// ─── Title helper ─────────────────────────────────────────────────────────────
const resolveTitle = (
  title?: string | { text: string; align?: "left" | "center" | "right"; style?: any }
): Partial<Layout["title"]> | undefined => {
  if (!title) return undefined;
  const text  = typeof title === "string" ? title : title.text;
  const align = (typeof title === "object" ? title.align : "left") ?? "left";
  const xMap  = { left: 0.02, center: 0.5, right: 0.98 };
  const anchorMap: Record<string, "left" | "center" | "right"> = {
    left: "left", center: "center", right: "right",
  };
  return {
    text,
    x:      xMap[align] ?? 0.02,
    xanchor: anchorMap[align] ?? "left",
    y:      0.98,
    yanchor: "top",
    font:   { size: 15, color: "#1e293b", family: "inherit", ...((typeof title === "object" ? title.style : undefined) ?? {}) },
    pad:    { b: 8 },
  };
};

// ─── Shared tooltip style ─────────────────────────────────────────────────────
const HOVERLABEL = {
  bgcolor:     "#0f172a",
  bordercolor: "rgba(255,255,255,0.1)",
  font:        { color: "#f1f5f9", size: 13, family: "inherit" },
};

// ─── Shared axis style ────────────────────────────────────────────────────────
const AXIS = (overrides: Partial<Layout["xaxis"]> & Record<string, any> = {}) => ({
  showgrid:      true,
  gridcolor:     "#f1f5f9",
  gridwidth:     1,
  zeroline:      false,
  showline:      false,
  tickfont:      { color: "#94a3b8", size: 12, family: "inherit" },
  titlefont:     { color: "#64748b", size: 12, family: "inherit" },
  ...overrides,
});

// ─── Shared layout factory ────────────────────────────────────────────────────
const makeLayout = (
  title:   VizlyPlotlyProps["title"],
  height:  number | string,
  options: any,
  extra:   Partial<Layout> & Record<string, any> = {}
): Partial<Layout> => {
  const h = typeof height === "number" ? height : parseInt(String(height), 10) || 350;
  const hasTitle = !!title;
  return {
    title:         resolveTitle(title) as any,
    height:        h,
    margin:        { t: hasTitle ? 48 : 20, r: 24, b: 52, l: 56, pad: 4 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor:  "rgba(0,0,0,0)",
    font:          { family: "inherit", size: 12, color: "#475569" },
    showlegend:    true,
    legend: {
      orientation: "h",
      y:           -0.18,
      x:           0.5,
      xanchor:     "center",
      font:        { size: 12, color: "#64748b", family: "inherit" },
      bgcolor:     "rgba(0,0,0,0)",
    },
    colorway:      options.colors ?? DEFAULT_COLORS,
    hoverlabel:    HOVERLABEL,
    hovermode:     "closest",
    ...extra,
    ...options.layout,
  };
};

// ─── Shared config ────────────────────────────────────────────────────────────
const makeConfig = (options: any): Partial<Config> => ({
  responsive:             true,
  displaylogo:            false,
  modeBarButtonsToRemove: ["toImage", "sendDataToCloud"] as any,
  displayModeBar:         "hover" as any,
  ...options.config,
});

// ─────────────────────────────────────────────────────────────────────────────

const VizlyPlotly: React.FC<VizlyPlotlyProps> = ({
  data,
  type = "line",
  options = {},
  height = 350,
  title,
}) => {
  const t        = String(Array.isArray(type) ? type[0] : type).toLowerCase();
  const colors   = (options.colors ?? DEFAULT_COLORS) as string[];
  const isMulti  = Array.isArray(data[0]);
  const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];
  const flat     = datasets[0];
  const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];

  const layout = makeLayout(title, height, options);
  const config = makeConfig(options);

  // ── SANKEY ──────────────────────────────────────────────────────────────────
  if (t === "sankey") {
    const nodeNames = [...new Set(
      flat.flatMap((d: any) => [String(d.source ?? ""), String(d.target ?? "")])
    )] as string[];

    const nodeColors = nodeNames.map((_, i) => colors[i % colors.length]);

    const plotData: Data[] = [{
      type: "sankey" as any,
      arrangement: "snap",
      node: {
        pad:       20,
        thickness: 16,
        label:     nodeNames,
        color:     nodeColors,
        line:      { color: "#fff", width: 1 },
      },
      link: {
        source: flat.map((d: any) => nodeNames.indexOf(String(d.source))),
        target: flat.map((d: any) => nodeNames.indexOf(String(d.target))),
        value:  flat.map((d: any) => Number(d.value ?? 0)),
        color:  flat.map((d: any) => {
          const idx = nodeNames.indexOf(String(d.source));
          return (nodeColors[idx] ?? colors[0]) + "40";
        }),
      },
    }];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, { margin: { t: title ? 48 : 20, r: 24, b: 20, l: 24 } })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── GAUGE ────────────────────────────────────────────────────────────────────
  if (t === "gauge") {
    const raw = flat[0];
    const val = Number(typeof raw === "number" ? raw : (raw?.value ?? raw?.y ?? raw ?? 0));
    const name = String(raw?.label ?? raw?.name ?? "");

    const plotData: Data[] = [{
      type:   "indicator" as any,
      mode:   "gauge+number+delta",
      value:  val,
      number: { font: { size: 32, color: "#0f172a", family: "inherit" }, suffix: "%" },
      delta:  { reference: 50, increasing: {
        symbol:    "triangle-up",           // ← required by the type
        line:      { color: "#10b981", width: 1.5 },
        fillcolor: "#10b981",
      } as any,
      decreasing: {
        symbol:    "triangle-down",         // ← required by the type
        line:      { color: "#f43f5e", width: 1.5 },
        fillcolor: "#f43f5e",
      } as any, },
      title:  { text: name, font: { size: 13, color: "#64748b", family: "inherit" } },
      gauge: {
        axis: {
          range:    [0, 100],
          tickfont: { size: 11, color: "#94a3b8", family: "inherit" },
          tickcolor: "#e2e8f0",
        },
        bar:       { color: colors[0], thickness: 0.25 },
        bgcolor:   "#f8fafc",
        borderwidth: 0,
        steps: [
          { range: [0,   33], color: "#f0fdf4" },
          { range: [33,  66], color: "#fefce8" },
          { range: [66, 100], color: "#fff1f2" },
        ],
        threshold: {
          line:      { color: colors[0], width: 3 },
          thickness: 0.85,
          value:     val,
        },
      },
    }];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          margin: { t: title ? 48 : 30, r: 30, b: 30, l: 30 },
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── SUNBURST ─────────────────────────────────────────────────────────────────
  if (t === "sunburst") {
    const plotData: Data[] = [{
      type:    "sunburst" as any,
      labels:  flat.map((d: any) => d.x ?? d.name ?? ""),
      values:  flat.map((d: any) => d.y ?? d.value ?? 0),
      parents: flat.map((d: any) => d.parent ?? ""),
      marker: {
        colors,
        line: { color: "#fff", width: 2 },
      },
      textfont:     { family: "inherit", size: 12 },
      hovertemplate: "%{label}: %{value}<extra></extra>",
      branchvalues: "total",
    }];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, { margin: { t: title ? 48 : 20, r: 20, b: 20, l: 20 } })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── CALENDAR ─────────────────────────────────────────────────────────────────
  if (t === "calendar") {
    const plotData: Data[] = datasets.map((ds: any) => ({
      type:       "heatmap" as any,
      x:          ds.map((d: any) => d.x),
      y:          ds.map((d: any) => d.name ?? d.group ?? ""),
      z:          ds.map((d: any) => d.y ?? d.value ?? 0),
      colorscale: [
        [0,   "#e0f2fe"],
        [0.5, "#38bdf8"],
        [1,   "#0369a1"],
      ],
      showscale:    true,
      hoverongaps:  false,
      hovertemplate: "%{x} / %{y}: <b>%{z}</b><extra></extra>",
      colorbar: {
        thickness: 12,
        len:       0.7,
        tickfont:  { size: 11, color: "#94a3b8", family: "inherit" },
        outlinewidth: 0,
      },
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          xaxis: AXIS({ showgrid: false }),
          yaxis: AXIS({ showgrid: false }),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── WATERFALL ─────────────────────────────────────────────────────────────────
  if (t === "waterfall") {
    const plotData: Data[] = [{
      type:        "waterfall" as any,
      orientation: "v",
      measure:     flat.map((_: any, i: number) =>
        i === flat.length - 1 ? "total" : "relative"
      ),
      x:           flat.map((d: any) => String(d.label ?? d.x ?? "")),
      y:           flat.map((d: any) => Number(d.value ?? d.y ?? 0)),
      text:        flat.map((d: any) => {
        const v = Number(d.value ?? d.y ?? 0);
        return v >= 0 ? `+${v}` : String(v);
      }),
      textposition: "outside",
      textfont:    { size: 12, color: "#475569", family: "inherit" },
      connector: {
        mode: "spanning",
        line: { color: "#cbd5e1", width: 1, dash: "dot" },
      },
      decreasing:  { marker: { color: "#f43f5e", line: { color: "#dc2626", width: 1 } } },
      increasing:  { marker: { color: "#10b981", line: { color: "#059669", width: 1 } } },
      totals:      { marker: { color: "#3b82f6", line: { color: "#2563eb", width: 1 } } },
      hovertemplate: "%{x}: <b>%{y}</b><extra></extra>",
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          xaxis: AXIS({ showgrid: false }),
          yaxis: AXIS(),
          showlegend: false,
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── PYRAMID ───────────────────────────────────────────────────────────────────
  if (t === "pyramid") {
    const plotData: Data[] = [{
      type:         "funnel" as any,
      y:            flat.map((d: any) => String(d.x ?? d.stage ?? "")),
      x:            flat.map((d: any) => Number(d.y ?? d.value ?? 0)),
      marker: {
        color: flat.map((_: any, i: number) => colors[i % colors.length]),
        line:  { color: "#fff", width: 1.5 },
      },
      textinfo:     "value+percent initial",
      textfont:     { color: "#fff", size: 12, family: "inherit" },
      hovertemplate: "%{y}: <b>%{x}</b> (%{percentInitial})<extra></extra>",
      connector:    { visible: false },
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          funnelmode:  "stack" as any,
          showlegend:  false,
          yaxis:       AXIS({ showgrid: false, tickfont: { color: "#475569", size: 12, family: "inherit" } }),
          xaxis:       AXIS({ showgrid: true }),
          margin:      { t: title ? 48 : 20, r: 60, b: 40, l: 120 },
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── HISTOGRAM ────────────────────────────────────────────────────────────────
  if (t === "histogram") {
    const isPreBinned = flat[0]?.bin !== undefined || flat[0]?.count !== undefined;
    const xData: (string | number)[] = [];
    const yData: number[] = [];

    if (isPreBinned) {
      flat.forEach((d: any) => {
        xData.push(String(d.bin ?? d.x ?? ""));
        yData.push(Number(d.count ?? d.y ?? 0));
      });
    } else {
      const values = flat.map((d: any) => Number(d.value ?? d.y ?? 0));
      const min = Math.min(...values), max = Math.max(...values);
      const bins = 10, w = (max - min) / bins || 1;
      const buckets = Array.from({ length: bins }, (_, i) => ({
        label: `${(min + i * w).toFixed(1)}–${(min + (i + 1) * w).toFixed(1)}`,
        count: 0,
      }));
      values.forEach(v => {
        buckets[Math.min(Math.floor((v - min) / w), bins - 1)].count++;
      });
      buckets.forEach(b => { xData.push(b.label); yData.push(b.count); });
    }

    const plotData: Data[] = [{
      type:          "bar" as any,
      x:             xData,
      y:             yData,
      marker: {
        color:       colors[0],
        opacity:     0.9,
        line:        { color: "#fff", width: 1 },
      },
      hovertemplate: "%{x}: <b>%{y}</b><extra></extra>",
    }];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          showlegend: false,
          bargap:     0.02,
          xaxis:      AXIS({ showgrid: false, title: { text: "Value",     font: { size: 12, color: "#64748b" } } }),
          yaxis:      AXIS({ title: { text: "Frequency", font: { size: 12, color: "#64748b" } } }),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── NIGHTINGALE ───────────────────────────────────────────────────────────────
  if (t === "nightingale") {
    const plotData = datasets.map((ds: any[], i: number) => ({
      type:  "barpolar" as any,
      r:     ds.map((d: any) => Number(d.value ?? d.y ?? 0)),
      theta: ds.map((d: any) => String(d.label ?? d.x ?? "")),
      name:  seriesNames[i] ?? `Series ${i + 1}`,
      marker: {
        color:   ds.map((_: any, j: number) => colors[j % colors.length]),
        opacity: 0.85,
        line:    { color: "#fff", width: 1 },
      },
      hovertemplate: "%{theta}: <b>%{r}</b><extra></extra>",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          polar: {
            radialaxis: {
              visible:   true,
              tickfont:  { size: 10, color: "#94a3b8", family: "inherit" },
              gridcolor: "#e2e8f0",
            },
            angularaxis: {
              tickfont:  { size: 12, color: "#475569", family: "inherit" },
              gridcolor: "#e2e8f0",
            },
            bgcolor: "rgba(0,0,0,0)",
          },
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── PIE / DONUT ───────────────────────────────────────────────────────────────
  if (t === "pie" || t === "donut") {
    const plotData: Data[] = [{
      type:          "pie" as any,
      labels:        flat.map((d: any) => String(d.label ?? d.name ?? d.x ?? "")),
      values:        flat.map((d: any) => Number(d.value ?? d.y ?? 0)),
      hole:          t === "donut" ? 0.52 : 0,
      marker: {
        colors,
        line: { color: "#fff", width: 2 },
      },
      textinfo:      "label+percent",
      textfont:      { size: 12, family: "inherit" },
      hovertemplate: "%{label}: <b>%{value}</b> (%{percent})<extra></extra>",
      pull:          flat.map(() => 0.01),
    }];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          margin: { t: title ? 48 : 20, r: 20, b: 20, l: 20 },
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── RADAR ─────────────────────────────────────────────────────────────────────
  if (t === "radar") {
    const plotData: Data[] = datasets.map((ds, i) => ({
      type:  "scatterpolar" as any,
      r:     [...ds.map((d: any) => Number(d.y ?? 0)), Number(ds[0]?.y ?? 0)],
      theta: [...ds.map((d: any) => String(d.x ?? "")), String(ds[0]?.x ?? "")],
      fill:  "toself",
      name:  seriesNames[i] ?? `Series ${i + 1}`,
      line:  { color: colors[i % colors.length], width: 2 },
      fillcolor: colors[i % colors.length] + "25",
      marker:    { color: colors[i % colors.length], size: 6 },
      hovertemplate: "%{theta}: <b>%{r}</b><extra></extra>",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          polar: {
            radialaxis: {
              visible:   true,
              range:     [0, 100],
              tickfont:  { size: 10, color: "#94a3b8", family: "inherit" },
              gridcolor: "#e2e8f0",
              linecolor: "#e2e8f0",
            },
            angularaxis: {
              tickfont:  { size: 12, color: "#475569", family: "inherit" },
              gridcolor: "#e2e8f0",
              linecolor: "#e2e8f0",
            },
            bgcolor: "rgba(0,0,0,0)",
          },
          margin: { t: title ? 48 : 20, r: 60, b: 60, l: 60 },
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── SCATTER ───────────────────────────────────────────────────────────────────
  if (t === "scatter") {
    const plotData: Data[] = datasets.map((ds, i) => ({
      type:   "scatter" as any,
      mode:   "markers",
      x:      ds.map((d: any) => d.x ?? 0),
      y:      ds.map((d: any) => Number(d.y ?? 0)),
      name:   seriesNames[i] ?? `Series ${i + 1}`,
      marker: {
        color:   colors[i % colors.length],
        size:    9,
        opacity: 0.8,
        line:    { color: "#fff", width: 1 },
      },
      hovertemplate: "(%{x}, %{y})<extra>%{fullData.name}</extra>",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          xaxis: AXIS(),
          yaxis: AXIS(),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── BUBBLE ────────────────────────────────────────────────────────────────────
  if (t === "bubble") {
    const plotData: Data[] = datasets.map((ds, i) => ({
      type:   "scatter" as any,
      mode:   "markers",
      x:      ds.map((d: any) => d.x ?? 0),
      y:      ds.map((d: any) => Number(d.y ?? 0)),
      name:   seriesNames[i] ?? `Series ${i + 1}`,
      marker: {
        color:    colors[i % colors.length],
        size:     ds.map((d: any) => Math.sqrt(Number(d.z ?? d.r ?? 10)) * 4),
        sizemode: "diameter",
        opacity:  0.75,
        line:     { color: "#fff", width: 1.5 },
      },
      text:          ds.map((d: any) => `Size: ${d.z ?? d.r ?? 0}`),
      hovertemplate: "x: %{x}, y: %{y}<br>%{text}<extra>%{fullData.name}</extra>",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          xaxis: AXIS(),
          yaxis: AXIS(),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── CANDLESTICK ───────────────────────────────────────────────────────────────
  if (t === "candlestick") {
    const plotData: Data[] = [{
      type:  "candlestick" as any,
      x:     flat.map((d: any) => String(d.x ?? d.date ?? "")),
      open:  flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[0] : (d.open  ?? 0))),
      high:  flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[1] : (d.high  ?? 0))),
      low:   flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[2] : (d.low   ?? 0))),
      close: flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[3] : (d.close ?? 0))),
      name:  typeof title === "string" ? title : title?.text ?? "OHLC",
      increasing: { symbol: "triangle-up",   line: { color: "#10b981", width: 1.5 }, fillcolor: "#10b981" } as any,
decreasing: { symbol: "triangle-down", line: { color: "#f43f5e", width: 1.5 }, fillcolor: "#f43f5e" } as any,
      hovertemplate:
        "O: %{open}  H: %{high}<br>L: %{low}  C: %{close}<extra></extra>",
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          showlegend: false,
          xaxis:      AXIS({ showgrid: false, rangeslider: { visible: false } }),
          yaxis:      AXIS({ showgrid: true }),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── BOXPLOT ───────────────────────────────────────────────────────────────────
  if (t === "boxplot") {
    const plotData: Data[] = flat.map((d: any, i: number) => ({
      type:      "box" as any,
      name:      String(d.x ?? `Group ${i + 1}`),
      y:         Array.isArray(d.y) ? d.y : [d.min ?? 0, d.max ?? 0],
      marker: {
        color:   colors[i % colors.length],
        size:    5,
        line:    { color: "#fff", width: 1 },
      },
      line:      { color: colors[i % colors.length] },
      fillcolor: colors[i % colors.length] + "40",
      boxpoints:    false,
      hoveron:   "boxes",
      hovertemplate: "%{y}<extra>%{fullData.name}</extra>",
    } as Data));

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          showlegend: false,
          xaxis:      AXIS({ showgrid: false }),
          yaxis:      AXIS(),
          boxmode:    "group" as any,
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── HEATMAP ───────────────────────────────────────────────────────────────────
  if (t === "heatmap") {
    const xLabels = [...new Set(flat.map((d: any) =>
      String(d.x ?? d.category ?? "")))] as string[];
    const yLabels = [...new Set(flat.map((d: any) =>
      String(d.group ?? "Series 1")))] as string[];

    const z = yLabels.map(yLabel =>
      xLabels.map(xLabel => {
        const entry = flat.find(
          (d: any) =>
            String(d.group ?? "Series 1") === yLabel &&
            String(d.x ?? d.category ?? "") === xLabel
        );
        return Number(entry?.value ?? entry?.y ?? 0);
      })
    );

    const plotData: Data[] = [{
      type:          "heatmap" as any,
      x:             xLabels,
      y:             yLabels,
      z,
      colorscale:    [[0, "#e0f2fe"], [0.5, "#38bdf8"], [1, "#0369a1"]],
      showscale:     true,
      hovertemplate: "%{y} / %{x}: <b>%{z}</b><extra></extra>",
      colorbar: {
        thickness:    12,
        outlinewidth: 0,
        tickfont:     { size: 11, color: "#94a3b8", family: "inherit" },
      },
      xgap: 2,
      ygap: 2,
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          xaxis: AXIS({ showgrid: false }),
          yaxis: AXIS({ showgrid: false }),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── FUNNEL ────────────────────────────────────────────────────────────────────
  if (t === "funnel" || t === "conefunnel") {
    const plotData: Data[] = [{
      type:         "funnel" as any,
      y:            flat.map((d: any) => String(d.stage ?? d.x ?? "")),
      x:            flat.map((d: any) => Number(d.y ?? d.value ?? 0)),
      textposition: "inside",
      textinfo:     "value+percent initial",
      textfont:     { color: "#fff", size: 12, family: "inherit" },
      marker: {
        color: flat.map((_: any, i: number) => colors[i % colors.length]),
        line:  { color: "#fff", width: 1.5 },
      },
      connector:    { fillcolor: "#f8fafc", line: { color: "#e2e8f0", width: 1 } },
      hovertemplate: "%{y}: <b>%{x}</b> (%{percentInitial})<extra></extra>",
    } as Data];

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          showlegend: false,
          funnelmode: "stack" as any,
          margin:     { t: title ? 48 : 20, r: 60, b: 20, l: 140 },
          yaxis:      AXIS({ showgrid: false }),
          xaxis:      AXIS(),
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── RANGEBAR (Gantt) ──────────────────────────────────────────────────────────
  if (t === "rangebar") {
    const plotData: Data[] = flat.map((d: any, i: number) => {
      const start = Number(Array.isArray(d.y) ? d.y[0] : (d.start ?? 0));
      const end   = Number(Array.isArray(d.y) ? d.y[1] : (d.end   ?? 0));
      return {
        type:          "bar" as any,
        orientation:   "h",
        name:          String(d.x ?? `Task ${i + 1}`),
        x:             [end - start],
        y:             [String(d.x ?? `Task ${i + 1}`)],
        base:          [start],
        marker: {
          color: colors[i % colors.length],
          line:  { color: "#fff", width: 1 },
        },
        hovertemplate: `%{y}: ${start} → ${end}<extra></extra>`,
        width:         0.5,
      } as Data;
    });

    return (
      <Plot
        data={plotData}
        layout={makeLayout(title, height, options, {
          barmode:    "overlay",
          showlegend: false,
          xaxis:      AXIS({ title: { text: "Duration", font: { size: 12, color: "#64748b" } } }),
          yaxis:      AXIS({ showgrid: false, autorange: "reversed" as any }),
          margin:     { t: title ? 48 : 20, r: 24, b: 52, l: 110 },
        })}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    );
  }

  // ── LINE / AREA / BAR / COLUMN (default) ──────────────────────────────────────
  const plotData: Data[] = datasets.map((ds, i) => {
    const isBar  = t === "bar" || t === "column";
    const isArea = t === "area";

    return {
      type:        isBar ? "bar" : "scatter",
      mode:        isBar ? undefined : "lines+markers",
      orientation: t === "bar" ? "h" : undefined,
      name:        seriesNames[i] ?? `Series ${i + 1}`,
      x: isBar
        ? ds.map((d: any) => Number(d.y ?? d.value ?? 0))
        : ds.map((d: any) => String(d.x ?? d.category ?? "")),
      y: isBar
        ? ds.map((d: any) => String(d.x ?? ""))
        : ds.map((d: any) => Number(d.y ?? d.value ?? 0)),
      fill:      isArea ? "tozeroy" : undefined,
      fillcolor: isArea ? colors[i % colors.length] + "20" : undefined,
      line: isBar ? undefined : {
        color:  colors[i % colors.length],
        width:  2.5,
        shape:  "spline",
      },
      marker: {
        color:   colors[i % colors.length],
        size:    isBar ? undefined : 6,
        opacity: 0.9,
        line:    isBar ? { color: "#fff", width: 0.5 } : { color: "#fff", width: 1 },
      },
      hovertemplate: isBar
        ? "%{y}: <b>%{x}</b><extra>%{fullData.name}</extra>"
        : "%{x}: <b>%{y}</b><extra>%{fullData.name}</extra>",
    } as Data;
  });

  return (
    <Plot
      data={plotData}
      layout={makeLayout(title, height, options, {
        barmode: t === "column" ? "group" : undefined,
        xaxis:   AXIS({ showgrid: t !== "bar" }),
        yaxis:   AXIS({ showgrid: t !== "column" }),
      })}
      config={config}
      style={{ width: "100%" }}
      useResizeHandler
    />
  );
};

export default VizlyPlotly;

// import React from "react";
// import Plot  from "react-plotly.js";


// // ─────────────────────────────────────────────────────────────────────────────
// import type { Layout, Config, Data } from "plotly.js";

// // ─────────────────────────────────────────────────────────────────────────────
// // Default color palette — override via options.colors
// // ─────────────────────────────────────────────────────────────────────────────
// const DEFAULT_COLORS = [
//   "#3b82f6", "#f59e0b", "#10b981",
//   "#f43f5e", "#8b5cf6", "#06b6d4",
// ];

// interface VizlyPlotlyProps {
//   data:     any[] | any[][];
//   type?:    string | string[];
//   options?: any;
//   height?:  number | string;
//   title?:   string | { text: string; align?: string };
// }

// const VizlyPlotly: React.FC<VizlyPlotlyProps> = ({
//   data,
//   type = "line",
//   options = {},
//   height = 350,
//   title,
// }) => {
//   const t = String(Array.isArray(type) ? type[0] : type).toLowerCase();
//   const colors: string[]  = options.colors ?? DEFAULT_COLORS;
//   const titleText: string = typeof title === "string" ? title : (title?.text ?? "");

//   // ── Normalise data ─────────────────────────────────────────────────────────
//   const isMulti   = Array.isArray(data[0]);
//   const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];
//   const flat      = datasets[0];
//   const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];
//   const baseLayout: Partial<Layout> = {
//     title:         { text: titleText, font: { size: 14 } },
//     height:        typeof height === "number" ? height : parseInt(String(height), 10) || 350,
//     margin:        { t: titleText ? 40 : 20, r: 20, b: 50, l: 50 },
//     paper_bgcolor: "rgba(0,0,0,0)",
//     plot_bgcolor:  "rgba(0,0,0,0)",
//     font:          { family: "inherit", size: 12 },
//     showlegend:    true,
//     colorway:      colors,
//     ...options.layout,
//   };

//   const baseConfig: Partial<Config> = {
//     responsive:  true,
//     displaylogo: false,
//     modeBarButtonsToRemove: ["toImage"],  // only remove what's valid
//     ...options.config,
//   };


//   if (t === "sankey") {
//     // Reach into the series generated by transformData
//     const sankeyData = datasets[0][0]?.nodes ? datasets[0][0] : (datasets[0] as any);
//     const nodes = sankeyData.nodes || [];
//     const links = sankeyData.links || [];
//     const labels = nodes.map((n: any) => n.name);

//     const plotData: Data[] = [{
//       type: "sankey",
//       node: { pad: 15, thickness: 20, label: labels, color: colors },
//       link: {
//         source: links.map((l: any) => labels.indexOf(l.source)),
//         target: links.map((l: any) => labels.indexOf(l.target)),
//         value: links.map((l: any) => l.value),
//       },
//     } as any];

//     return <Plot data={plotData} layout={baseLayout} config={baseConfig} style={{ width: "100%" }} useResizeHandler />;
//   }
  
//   if (t === "gauge") {
//     const raw = datasets[0][0];
//     const val = Number(typeof raw === "number" ? raw : (raw?.value ?? raw?.y ?? raw ?? 0));
//     const plotData: Data[] = [{
//       type: "indicator",
//       mode: "gauge+number",
//       value: val,
//       gauge: {
//         axis: { range: [null, 100] },
//         bar: { color: colors[0] },
//       },
//     } as any];
//     return <Plot data={plotData} layout={baseLayout} config={baseConfig} style={{ width: "100%" }} useResizeHandler />;
//   }
  
//   if (t === "sunburst") {
//     const flat = datasets[0];
//     const plotData: Data[] = [{
//       type: "sunburst",
//       labels: flat.map((d: any) => d.x),
//       values: flat.map((d: any) => d.y),
//       parents: flat.map((d: any) => d.parent ?? ""),
//       marker: { colors },
//     } as any];
//     return <Plot data={plotData} layout={baseLayout} config={baseConfig} style={{ width: "100%" }} useResizeHandler />;
//   }

//   if (t === "calendar") {
//     // We'll treat this as a specialized heatmap for Plotly
//     const plotData: Data[] = datasets.map((ds: any) => ({
//       type: "heatmap" as any,
//       x: ds.map((d: any) => d.x), // Days
//       y: ds.map((d: any) => d.name), // Months/Weeks
//       z: ds.map((d: any) => d.y),
//       colorscale: "Viridis",
//       showscale: false
//     } as Data));
  
//     return (
//       <Plot data={plotData} layout={baseLayout} config={baseConfig} style={{ width: "100%" }} useResizeHandler />
//     );
//   }


  
//   if (t === "waterfall") {
//     const flat = datasets[0];
//     const plotData: Data[] = [{
//       type: "waterfall" as any,
//       orientation: "v",
//       measure: flat.map((_: any, i: number) => (i === flat.length - 1 ? "total" : "relative")),
//       x: flat.map((d: any) => String(d.label ?? d.x ?? "")),
//       y: flat.map((d: any) => Number(d.value ?? d.y ?? 0)),
//       connector: { line: { color: "rgb(63, 63, 63)", width: 1, dash: "dot" } },
//       decreasing: { marker: { color: "#ef4444" } },
//       increasing: { marker: { color: "#10b981" } },
//       totals: { marker: { color: "#3b82f6" } }
//     } as Data];
  
//     return (
//       <Plot data={plotData} layout={baseLayout} config={baseConfig} style={{ width: "100%" }} useResizeHandler />
//     );
//   }

//   if (t === "pyramid") {
//     const engineData = flat;
//     const plotData: Data[] = [{
//       type: "funnel" as any,
//       y: engineData.map((d: any) => String(d.x ?? d.stage ?? "")),
//       x: engineData.map((d: any) => Number(d.y ?? d.value ?? 0)),
//       marker: { color: colors },
//       textinfo: "value+percent initial",
//     } as Data];
  
//     return (
//       <Plot
//         data={plotData}
//         // Cast the merged layout to any to fix the "funnelmode" TS error
//         layout={{ 
//           ...baseLayout, 
//           funnelmode: "stack" 
//         } as any}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }
   
//   if (t === "histogram") {
   
//     const isPreBinned = flat[0]?.bin !== undefined || flat[0]?.count !== undefined;
//     const xData: (string | number)[] = [];
//     const yData: number[] = [];
//     if (isPreBinned) {
//         flat.forEach((d: any) => { xData.push(String(d.bin ?? d.x ?? "")); yData.push(Number(d.count ?? d.y ?? 0)); });
//       } else {
//         const values = flat.map((d: any) => Number(d.value ?? d.y ?? 0));
//         const min = Math.min(...values), max = Math.max(...values);
//         const bins = 10, w = (max - min) / bins || 1;
//         const buckets = Array.from({ length: bins }, (_, i) => ({
//           label: `${(min + i * w).toFixed(1)}`, count: 0,
//         }));
//         values.forEach(v => { buckets[Math.min(Math.floor((v - min) / w), bins - 1)].count++; });
//         buckets.forEach(b => { xData.push(b.label); yData.push(b.count); });
//       }
//     const plotData: Data[] = [{
//       type: "bar",
//       x: xData,
//       y: yData,
//       marker: { color: colors[0] }
//     } as any];
  
//     return (
//       <Plot data={plotData} layout={baseLayout} config={baseConfig} style={{ width: "100%" }} useResizeHandler />
//     );
//   }
   
//   if (t === "nightingale") {
//     // Check if data is wrapped in the engine's series object
    
  
//     const plotData = datasets.map((ds: any[], i: number) => ({
//         type: "barpolar" as any,
//         r: ds.map((d: any) => Number(d.value ?? d.y ?? 0)),
//         theta: ds.map((d: any) => String(d.label ?? d.x ?? "")),
//         name: seriesNames[i] ?? `Series ${i + 1}`,
//         marker: { color: ds.map((_: any, j: number) => colors[j % colors.length]) },
//       } as Data))
//     return (
//       <Plot
//         data={plotData}
//         layout={{ ...baseLayout, polar: {  radialaxis: { visible: true } } }}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }







//   // PIE / DONUT
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "pie" || t === "donut") {
//     const flat = datasets[0];
//     // FIX A continued: use Data[] instead of Plotly.Data[]
//     const plotData: Data[] = [{
//       type:          "pie",
//       labels:        flat.map((d: any) => String(d.label ?? d.name ?? d.x ?? "")),
//       values:        flat.map((d: any) => Number(d.value ?? d.y ?? 0)),
//       hole:          t === "donut" ? 0.5 : 0,
//       marker:        { colors },
//       textinfo:      "label+percent",
//       hovertemplate: "%{label}: %{value} (%{percent})<extra></extra>",
//     } as Data];

//     return (
//       <Plot
//         data={plotData}
//         layout={baseLayout}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // RADAR (polar chart in Plotly)
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "radar") {
//     const plotData: Data[] = datasets.map((ds, i) => ({
//       type:      "scatterpolar" as any,
//       r:          ds.map((d: any) => Number(d.y ?? 0)),
//       theta:      ds.map((d: any) => String(d.x ?? "")),
//       fill:      "toself",
//       name:      `Series ${i + 1}`,
//       line:      { color: colors[i % colors.length] },
//       fillcolor: colors[i % colors.length] + "40",
//     } as Data));

//     return (
//       <Plot
//         data={plotData}
//         layout={{ ...baseLayout, polar: { radialaxis: { visible: true } } }}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // SCATTER
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "scatter") {
//     const plotData: Data[] = datasets.map((ds, i) => ({
//       type:   "scatter" as any,
//       mode:   "markers",
//       x:       ds.map((d: any) => d.x ?? 0),
//       y:       ds.map((d: any) => Number(d.y ?? 0)),
//       name:   `Series ${i + 1}`,
//       marker: { color: colors[i % colors.length], size: 8 },
//     } as Data));

//     return (
//       <Plot
//         data={plotData}
//         layout={baseLayout}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // BUBBLE  (z controls marker size)
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "bubble") {
//     const plotData: Data[] = datasets.map((ds, i) => ({
//       type:   "scatter" as any,
//       mode:   "markers",
//       x:       ds.map((d: any) => d.x ?? 0),
//       y:       ds.map((d: any) => Number(d.y ?? 0)),
//       name:   `Series ${i + 1}`,
//       marker: {
//         color:    colors[i % colors.length],
//         size:     ds.map((d: any) => Math.sqrt(Number(d.z ?? d.r ?? 10)) * 4),
//         sizemode: "diameter",
//         opacity:  0.75,
//       },
//       text:          ds.map((d: any) => `Size: ${d.z ?? d.r ?? 0}`),
//       hovertemplate: "X: %{x}<br>Y: %{y}<br>%{text}<extra></extra>",
//     } as Data));

//     return (
//       <Plot
//         data={plotData}
//         layout={baseLayout}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // CANDLESTICK
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "candlestick") {
//     const flat = datasets[0];
//     const plotData: Data[] = [{
//       type:  "candlestick" as any,
//       x:      flat.map((d: any) => String(d.x ?? d.date ?? "")),
//       open:   flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[0] : (d.open  ?? 0))),
//       high:   flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[1] : (d.high  ?? 0))),
//       low:    flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[2] : (d.low   ?? 0))),
//       close:  flat.map((d: any) => Number(Array.isArray(d.y) ? d.y[3] : (d.close ?? 0))),
//       name:  titleText || "OHLC",
//     } as Data];

//     return (
//       <Plot
//         data={plotData}
//         layout={{ ...baseLayout, xaxis: { rangeslider: { visible: false } } }}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // BOXPLOT
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "boxplot") {
//     const flat = datasets[0];
//     const plotData: Data[] = flat.map((d: any, i: number) => ({
//       type:      "box" as any,
//       name:      String(d.x ?? `Group ${i + 1}`),
//       y:          Array.isArray(d.y) ? d.y : [d.min ?? 0, d.max ?? 0],
//       marker:    { color: colors[i % colors.length] },
//       boxpoints: false,
//     } as Data));

//     return (
//       <Plot
//         data={plotData}
//         layout={baseLayout}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // HEATMAP
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "heatmap") {
//     const flat    = datasets[0];
//     const xLabels = [...new Set(flat.map((d: any) => String(d.x ?? d.category ?? "")))] as string[];
//     const yLabels = [...new Set(flat.map((d: any) => String(d.group ?? "Series 1")))]   as string[];

//     const z = yLabels.map((yLabel) =>
//       xLabels.map((xLabel) => {
//         const entry = flat.find(
//           (d: any) =>
//             String(d.group ?? "Series 1") === yLabel &&
//             String(d.x ?? d.category ?? "") === xLabel
//         );
//         return Number(entry?.value ?? entry?.y ?? 0);
//       })
//     );

//     const plotData: Data[] = [{
//       type:       "heatmap" as any,
//       x:           xLabels,
//       y:           yLabels,
//       z,
//       colorscale: "Blues",
//       showscale:  true,
//     } as Data];

//     return (
//       <Plot
//         data={plotData}
//         layout={baseLayout}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // FUNNEL
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "funnel") {
//     const flat = datasets[0];
//     const plotData: Data[] = [{
//       type:         "funnel" as any,
//       y:             flat.map((d: any) => String(d.stage ?? d.x ?? "")),
//       x:             flat.map((d: any) => Number(d.y ?? d.value ?? 0)),
//       textposition: "inside",
//       textinfo:     "value+percent initial",
//       marker:       { color: colors },
//     } as Data];

//     return (
//       <Plot
//         data={plotData}
//         layout={baseLayout}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // RANGEBAR (Gantt-style)
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "rangebar") {
//     const flat = datasets[0];
//     const plotData: Data[] = flat.map((d: any, i: number) => {
//       const start = Number(Array.isArray(d.y) ? d.y[0] : (d.start ?? 0));
//       const end   = Number(Array.isArray(d.y) ? d.y[1] : (d.end   ?? 0));
//       return {
//         type:          "bar" as any,
//         orientation:   "h",
//         name:          String(d.x ?? `Task ${i + 1}`),
//         x:              [end - start],
//         y:              [String(d.x ?? `Task ${i + 1}`)],
//         base:           [start],
//         marker:        { color: colors[i % colors.length] },
//         hovertemplate: `%{y}: ${start} → ${end}<extra></extra>`,
//       } as Data;
//     });

//     return (
//       <Plot
//         data={plotData}
//         layout={{ ...baseLayout, barmode: "overlay", showlegend: false }}
//         config={baseConfig}
//         style={{ width: "100%" }}
//         useResizeHandler
//       />
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // LINE / AREA / BAR / COLUMN  (default — supports multiple series)
//   // ─────────────────────────────────────────────────────────────────────────
// //   const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];

//   const plotData: Data[] = datasets.map((ds, i) => {
//     const isBar  = t === "bar" || t === "column";
//     const isArea = t === "area";

//     return {
//       type:        isBar ? "bar" : "scatter",
//       mode:        isBar ? undefined : "lines+markers",
//       orientation: t === "bar" ? "h" : undefined,
//       name:        seriesNames[i] ?? `Series ${i + 1}`,
//       x:            isBar
//                      ? ds.map((d: any) => Number(d.y ?? d.value ?? 0))
//                      : ds.map((d: any) => String(d.x ?? d.category ?? "")),
//       y:            isBar
//                      ? ds.map((d: any) => String(d.x ?? ""))
//                      : ds.map((d: any) => Number(d.y ?? d.value ?? 0)),
//       fill:        isArea ? "tozeroy"  : undefined,
//       fillcolor:   isArea ? colors[i % colors.length] + "30" : undefined,
//       line:        isBar ? undefined : {
//                      color: colors[i % colors.length],
//                      width: 2,
//                      shape: "spline",
//                    },
//       marker:      { color: colors[i % colors.length], size: isBar ? undefined : 5 },
//     } as Data;
//   });

//   return (
//     <Plot
//       data={plotData}
//       layout={{
//         ...baseLayout,
//         barmode: t === "column" ? "group" : undefined,
//         xaxis:   { showgrid: true, gridcolor: "#e5e7eb" },
//         yaxis:   { showgrid: true, gridcolor: "#e5e7eb" },
//       }}
//       config={baseConfig}
//       style={{ width: "100%" }}
//       useResizeHandler
//     />
//   );
// };

// export default VizlyPlotly;
