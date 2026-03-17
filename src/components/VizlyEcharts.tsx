// VizlyECharts.tsx
// ECharts renderer — used when renderer="echarts" is passed to VizlyChart.
// Best for: heatmap, treemap, gauge, sankey, calendar, sunburst, 3D charts.
//
// Install: npm i echarts echarts-for-react

import React from "react";
import ReactECharts from "echarts-for-react";

interface VizlyEChartsProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: string };
}

const DEFAULT_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981",
  "#f43f5e", "#8b5cf6", "#06b6d4",
];

const VizlyECharts: React.FC<VizlyEChartsProps> = ({
  data,
  type = "line",
  options = {},
  height = 350,
  title,
}) => {
  const t = String(Array.isArray(type) ? type[0] : type).toLowerCase();
  const titleText = typeof title === "string" ? title : title?.text;
  const isMulti   = Array.isArray(data[0]);
  const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];
  const colors    = (options.colors ?? DEFAULT_COLORS) as string[];
  const flat      = datasets[0];
  const base = {
    title:   titleText ? { text: titleText, left: "center" } : undefined,
    tooltip: { trigger: "item" },
    color:   colors,
    ...options,
  };


  // ─────────────────────────────────────────────────────────────────────────
  // Build ECharts option object from your standard data shape
  // ─────────────────────────────────────────────────────────────────────────

  let echartsOption: any = {};

  if (t === "sankey") {
    const nodeNames = [...new Set(flat.flatMap((d: any) => [String(d.source ?? ""), String(d.target ?? "")]))];
    return <ReactECharts option={{
      ...base,
      series: [{
        type: "sankey",
        layout: "none",
        emphasis: { focus: "adjacency" },
        data:  nodeNames.map(name => ({ name })),
        links: flat.map((d: any) => ({ source: String(d.source), target: String(d.target), value: Number(d.value ?? 0) })),
        lineStyle: { color: "gradient", curveness: 0.5 },
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── CALENDAR ────────────────────────────────────────────────────────────────
  if (t === "calendar") {
    const dates     = flat.map((d: any) => String(d.date ?? d.x ?? ""));
    const validDate = dates.find(d => !isNaN(new Date(d).getTime()));
    const year      = validDate ? new Date(validDate).getFullYear() : new Date().getFullYear();
    return <ReactECharts option={{
      ...base,
      tooltip: { formatter: (p: any) => `${p.data[0]}: ${p.data[1]}` },
      visualMap: {
        min: 0,
        max: Math.max(...flat.map((d: any) => Number(d.value ?? d.y ?? 0))),
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: 20,
      },
      calendar: {
        top: 80, left: 30, right: 30,
        cellSize: ["auto", 13],
        range: String(year),
        itemStyle: { borderWidth: 0.5 },
        yearLabel: { show: false },
      },
      series: [{
        type: "heatmap",
        coordinateSystem: "calendar",
        data: flat.map((d: any) => [String(d.date ?? d.x ?? ""), Number(d.value ?? d.y ?? 0)]),
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── SUNBURST ─────────────────────────────────────────────────────────────────
  if (t === "sunburst") {
    const toEChartsTree = (nodes: any[]): any[] =>
      nodes.map(n => ({
        name:     String(n.name ?? ""),
        value:    Number(n.value ?? 0),
        children: n.children ? toEChartsTree(n.children) : undefined,
      }));
    return <ReactECharts option={{
      ...base,
      tooltip: { trigger: "item" },
      series: [{
        type: "sunburst",
        data: toEChartsTree(flat),
        radius: ["15%", "80%"],
        label: { rotate: "radial" },
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── GAUGE ────────────────────────────────────────────────────────────────────
  if (t === "gauge") {
    const val  = Number(flat[0]?.value ?? flat[0]?.y ?? flat[0] ?? 0);
    const name = String(flat[0]?.label ?? flat[0]?.name ?? "");
    return <ReactECharts option={{
      ...base,
      series: [{
        type: "gauge",
        startAngle: 200, endAngle: -20,
        min: 0, max: 100,
        pointer: { show: true },
        progress: { show: true, width: 18 },
        axisLine: { lineStyle: { width: 18 } },
        axisTick: { show: false },
        splitLine: { length: 15, lineStyle: { width: 2, color: "#999" } },
        axisLabel: { distance: 25, color: "#999", fontSize: 12 },
        anchor: { show: true, showAbove: true, size: 20, itemStyle: { borderWidth: 2 } },
        title: { show: !!name },
        detail: {
          valueAnimation: true,
          fontSize: 28,
          offsetCenter: [0, "70%"],
          formatter: (v: number) => `${v.toFixed(0)}%`,
        },
        data: [{ value: val, name }],
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── NIGHTINGALE (Rose chart) ──────────────────────────────────────────────────
  if (t === "nightingale") {
    return <ReactECharts option={{
      ...base,
      legend: { top: "bottom" },
      toolbox: { show: false },
      series: [{
        type: "pie",
        radius: ["20%", "70%"],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: { borderRadius: 4 },
        data: flat.map((d: any, i: number) => ({
          name:  String(d.label ?? d.name ?? d.x ?? `Item ${i + 1}`),
          value: Number(d.value ?? d.y ?? 0),
        })),
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── HISTOGRAM ────────────────────────────────────────────────────────────────
  if (t === "histogram") {
    const isPreBinned = flat[0]?.bin !== undefined || flat[0]?.count !== undefined;
    let xData: string[];
    let yData: number[];

    if (isPreBinned) {
      xData = flat.map((d: any) => String(d.bin ?? d.x ?? ""));
      yData = flat.map((d: any) => Number(d.count ?? d.y ?? 0));
    } else {
      const values = flat.map((d: any) => Number(d.value ?? d.y ?? 0));
      const min = Math.min(...values);
      const max = Math.max(...values);
      const bins = 10;
      const w    = (max - min) / bins || 1;
      const buckets = Array.from({ length: bins }, (_, i) => ({ label: `${(min + i * w).toFixed(1)}`, count: 0 }));
      values.forEach(v => { const idx = Math.min(Math.floor((v - min) / w), bins - 1); buckets[idx].count++; });
      xData = buckets.map(b => b.label);
      yData = buckets.map(b => b.count);
    }

    return <ReactECharts option={{
      ...base,
      tooltip: { trigger: "axis" },
      xAxis:   { type: "category", data: xData, name: "Value" },
      yAxis:   { type: "value",    name: "Frequency" },
      series:  [{ type: "bar", data: yData, barWidth: "95%", itemStyle: { color: colors[0] } }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── WATERFALL ─────────────────────────────────────────────────────────────────
  if (t === "waterfall") {
    // Build placeholder (transparent) + value series
    let running = 0;
    const placeholders: number[] = [];
    const values: number[]       = [];
    const itemColors: string[]   = [];

    flat.forEach((d: any) => {
      const v = Number(d.y ?? d.value ?? 0);
      placeholders.push(v >= 0 ? running : running + v);
      values.push(Math.abs(v));
      itemColors.push(v >= 0 ? "#10b981" : "#f43f5e");
      running += v;
    });

    return <ReactECharts option={{
      ...base,
      tooltip: {
        trigger: "axis",
        formatter: (params: any[]) => {
          const bar = params.find((p: any) => p.seriesIndex === 1);
          if (!bar) return "";
          const d   = flat[bar.dataIndex];
          const v   = Number(d?.y ?? d?.value ?? 0);
          return `${bar.name}: ${v >= 0 ? "+" : ""}${v}`;
        },
      },
      xAxis:  { type: "category", data: flat.map((d: any) => String(d.x ?? d.category ?? "")) },
      yAxis:  { type: "value" },
      series: [
        {
          type:      "bar",
          stack:     "total",
          itemStyle: { borderColor: "transparent", color: "transparent" },
          emphasis:  { itemStyle: { borderColor: "transparent", color: "transparent" } },
          data:      placeholders,
        },
        {
          type:  "bar",
          stack: "total",
          data:  values.map((v, i) => ({ value: v, itemStyle: { color: itemColors[i] } })),
          label: {
            show:      true,
            position:  "top",
            formatter: (p: any) => {
              const orig = Number(flat[p.dataIndex]?.y ?? flat[p.dataIndex]?.value ?? 0);
              return `${orig >= 0 ? "+" : ""}${orig}`;
            },
          },
        },
      ],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── PYRAMID ───────────────────────────────────────────────────────────────────
  if (t === "pyramid") {
    const sorted = [...flat].sort((a: any, b: any) => Number(b.value ?? b.y ?? 0) - Number(a.value ?? a.y ?? 0));
    return <ReactECharts option={{
      ...base,
      series: [{
        type:     "funnel",
        sort:     "ascending",
        gap:      2,
        label:    { show: true, position: "inside" },
        data: sorted.map((d: any, i: number) => ({
          name:  String(d.stage ?? d.x ?? d.label ?? `Level ${i + 1}`),
          value: Number(d.value ?? d.y ?? 0),
        })),
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }

  // ── FUNNEL / CONEFUNNEL ────────────────────────────────────────────────────────
  if (t === "funnel" || t === "conefunnel") {
    return <ReactECharts option={{
      ...base,
      series: [{
        type:     "funnel",
        sort:     "descending",
        gap:      2,
        label:    { show: true, position: "inside" },
        data: flat.map((d: any, i: number) => ({
          name:  String(d.stage ?? d.x ?? d.label ?? `Step ${i + 1}`),
          value: Number(d.value ?? d.y ?? 0),
        })),
      }],
    }} style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }} opts={{ renderer: "svg" }} />;
  }
  // ── HEATMAP ────────────────────────────────────────────────────────────────
  if (t === "heatmap") {
    const flat = datasets[0];
    const xLabels = [...new Set(flat.map((d: any) => String(d.x ?? d.category ?? "")))];
    const yLabels = [...new Set(flat.map((d: any) => String(d.group ?? "Series 1")))];

    echartsOption = {
      title:   { text: titleText },
      tooltip: { position: "top" },
      grid:    { height: "60%", top: "10%" },
      xAxis:   { type: "category", data: xLabels, splitArea: { show: true } },
      yAxis:   { type: "category", data: yLabels, splitArea: { show: true } },
      visualMap: {
        min: 0,
        max: Math.max(...flat.map((d: any) => Number(d.value ?? d.y ?? 0))),
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "5%",
      },
      series: [{
        name: titleText ?? "Heatmap",
        type: "heatmap",
        data: flat.map((d: any) => [
          String(d.x ?? d.category ?? ""),
          String(d.group ?? "Series 1"),
          Number(d.value ?? d.y ?? 0),
        ]),
        label: { show: true },
        emphasis: { itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.5)" } },
      }],
      ...options,
    };
  }

  // ── TREEMAP ────────────────────────────────────────────────────────────────
  else if (t === "treemap") {
    const flat = datasets[0];
    echartsOption = {
      title:   { text: titleText },
      tooltip: { formatter: (info: any) => `${info.name}: ${info.value}` },
      series: [{
        type: "treemap",
        data: flat.map((d: any) => ({
          name:  String(d.name ?? d.x ?? d.category ?? ""),
          value: Number(d.value ?? d.y ?? 0),
        })),
        label:    { show: true, formatter: "{b}" },
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
      }],
      ...options,
    };
  }

  // ── PIE / DONUT ────────────────────────────────────────────────────────────
  else if (t === "pie" || t === "donut") {
    const flat = datasets[0];
    echartsOption = {
      title:   { text: titleText, left: "center" },
      tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
      legend:  { orient: "vertical", left: "left" },
      series: [{
        type:        "pie",
        radius:      t === "donut" ? ["40%", "70%"] : "60%",
        avoidLabelOverlap: true,
        data: flat.map((d: any) => ({
          name:  String(d.label ?? d.x ?? ""),
          value: Number(d.value ?? d.y ?? 0),
        })),
        emphasis: {
          itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.5)" },
        },
      }],
      ...options,
    };
  }

  // ── RADAR ──────────────────────────────────────────────────────────────────
  else if (t === "radar") {
    const flat = datasets[0];
    echartsOption = {
      title:   { text: titleText },
      tooltip: {},
      radar: {
        indicator: flat.map((d: any) => ({
          name: String(d.x ?? ""),
          max:  100,
        })),
      },
      series: [{
        type: "radar",
        data: [{
          value: flat.map((d: any) => Number(d.y ?? 0)),
          name:  titleText ?? "Series 1",
        }],
      }],
      ...options,
    };
  }

  // ── SCATTER / BUBBLE ───────────────────────────────────────────────────────
  else if (t === "scatter" || t === "bubble") {
    echartsOption = {
      title:   { text: titleText },
      tooltip: { trigger: "item" },
      xAxis:   { scale: true },
      yAxis:   { scale: true },
      series: datasets.map((ds, i) => ({
        name:        `Series ${i + 1}`,
        type:        "scatter",
        symbolSize:  t === "bubble"
          ? (d: any) => Math.sqrt(d[2] ?? 10) * 4
          : 10,
        data: ds.map((d: any) => [
          Number(d.x ?? 0),
          Number(d.y ?? 0),
          ...(t === "bubble" ? [Number(d.z ?? d.r ?? 10)] : []),
        ]),
        itemStyle: { color: DEFAULT_COLORS[i % DEFAULT_COLORS.length] },
      })),
      ...options,
    };
  }

  // ── LINE / AREA / BAR / COLUMN (default) ───────────────────────────────────
  else {
    const xLabels = datasets[0].map((d: any) => String(d.x ?? d.category ?? ""));

    echartsOption = {
      title:   { text: titleText },
      tooltip: { trigger: "axis" },
      legend:  { top: 30 },
      grid:    { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis:   { type: "category", boundaryGap: t === "bar" || t === "column", data: xLabels },
      yAxis:   { type: "value" },
      series: datasets.map((ds, i) => ({
        name: `Series ${i + 1}`,
        type: t === "bar" || t === "column" ? "bar" : "line",
        stack: options.stacked ? "total" : undefined,
        areaStyle: t === "area" ? { opacity: 0.25 } : undefined,
        smooth: t === "line" || t === "area",
        data:  ds.map((d: any) => Number(d.y ?? d.value ?? 0)),
        itemStyle: { color: DEFAULT_COLORS[i % DEFAULT_COLORS.length] },
      })),
      ...options,
    };
  }

  return (
    <ReactECharts
      option={echartsOption}
      style={{ height: typeof height === "number" ? `${height}px` : height, width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default VizlyECharts;
