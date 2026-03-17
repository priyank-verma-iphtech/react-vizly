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

  // ─────────────────────────────────────────────────────────────────────────
  // Build ECharts option object from your standard data shape
  // ─────────────────────────────────────────────────────────────────────────

  let echartsOption: any = {};

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
