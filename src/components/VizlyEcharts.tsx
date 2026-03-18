// VizlyECharts.tsx
// ECharts renderer — used when renderer="echarts" is passed to VizlyChart.
// Best for: heatmap, treemap, gauge, sankey, calendar, sunburst, 3D charts.
//
// Install: npm i echarts echarts-for-react

// VizlyECharts.tsx
import React from "react";
import ReactECharts from "echarts-for-react";

interface VizlyEChartsProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: "left" | "center" | "right"; style?: any };
}

const DEFAULT_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981",
  "#f43f5e", "#8b5cf6", "#06b6d4",
  "#f97316", "#14b8a6", "#a855f7", "#0ea5e9",
];

// ─── Title helper ─────────────────────────────────────────────────────────────
// Converts the VizlyChart title prop into a rich ECharts title config
const resolveTitle = (
  title?: string | { text: string; align?: "left" | "center" | "right"; style?: any }
) => {
  if (!title) return undefined;

  const text   = typeof title === "string" ? title : title.text;
  const align  = typeof title === "object" ? (title.align ?? "left") : "left";
  const style  = typeof title === "object" ? title.style : undefined;

  // Map align → ECharts left position
  const leftMap: Record<string, string> = {
    left:   "4%",
    center: "center",
    right:  "auto",
  };
  const rightMap: Record<string, string | undefined> = {
    left:   undefined,
    center: undefined,
    right:  "4%",
  };

  return {
    text,
    left:  leftMap[align]  ?? "4%",
    right: rightMap[align] ?? undefined,
    top:   8,
    textStyle: {
      fontSize:   15,
      fontWeight: "600",
      color:      "#1e293b",
      fontFamily: "inherit",
      ...style,
    },
  };
};

// ─── Shared chart style ───────────────────────────────────────────────────────
const chartStyle = (height: number | string) => ({
  height: typeof height === "number" ? `${height}px` : height,
  width:  "100%",
});

// ─── Shared base config ───────────────────────────────────────────────────────
const makeBase = (
  titleProp: VizlyEChartsProps["title"],
  colors: string[],
  options: any
) => ({
  color:   colors,
  tooltip: {
    trigger:         "item",
    backgroundColor: "rgba(15,23,42,0.92)",
    borderColor:     "rgba(255,255,255,0.08)",
    borderWidth:     1,
    padding:         [8, 12],
    textStyle:       { color: "#f1f5f9", fontSize: 13, fontFamily: "inherit" },
    extraCssText:    "border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,0.3)",
  },
  ...options,
  // title always last so it overrides any options.title
  title: resolveTitle(titleProp),
});

// ─── Legend config ─────────────────────────────────────────────────────────────
const LEGEND = {
  bottom:    8,
  left:      "center",
  itemWidth: 10,
  itemHeight: 10,
  borderRadius: 5,
  textStyle: { color: "#64748b", fontSize: 12, fontFamily: "inherit" },
};

// ─── Axis config ──────────────────────────────────────────────────────────────
const AXIS_BASE = {
  axisLine:  { lineStyle: { color: "#e2e8f0" } },
  axisTick:  { show: false },
  axisLabel: { color: "#94a3b8", fontSize: 12, fontFamily: "inherit" },
  splitLine: { lineStyle: { color: "#f1f5f9", type: "dashed" } },
};

const CATEGORY_AXIS = (data: string[]) => ({
  type: "category",
  data,
  boundaryGap: true,
  ...AXIS_BASE,
  splitLine: { show: false },
});

const VALUE_AXIS = () => ({
  type: "value",
  ...AXIS_BASE,
});

// ─────────────────────────────────────────────────────────────────────────────

const VizlyECharts: React.FC<VizlyEChartsProps> = ({
  data,
  type = "line",
  options = {},
  height = 350,
  title,
}) => {
  const t        = String(Array.isArray(type) ? type[0] : type).toLowerCase();
  const isMulti  = Array.isArray(data[0]);
  const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];
  const colors   = (options.colors ?? DEFAULT_COLORS) as string[];
  const flat     = datasets[0];
  const base     = makeBase(title, colors, options);

  // ── SANKEY ──────────────────────────────────────────────────────────────────
  if (t === "sankey") {
    const nodeNames = [
      ...new Set(
        flat.flatMap((d: any) => [String(d.source ?? ""), String(d.target ?? "")])
      ),
    ];
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            trigger: "item",
            formatter: (p: any) =>
              p.dataType === "edge"
                ? `${p.data.source} → ${p.data.target}: <b>${p.data.value}</b>`
                : p.name,
          },
          series: [{
            type:      "sankey",
            layout:    "none",
            emphasis:  { focus: "adjacency" },
            nodeAlign: "left",
            data:      nodeNames.map(name => ({ name })),
            links:     flat.map((d: any) => ({
              source: String(d.source),
              target: String(d.target),
              value:  Number(d.value ?? 0),
            })),
            label:     { color: "#334155", fontFamily: "inherit", fontSize: 12 },
            lineStyle: { color: "gradient", curveness: 0.5, opacity: 0.4 },
            itemStyle: { borderWidth: 0 },
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── CALENDAR ────────────────────────────────────────────────────────────────
  if (t === "calendar") {
    const dates     = flat.map((d: any) => String(d.date ?? d.x ?? ""));
    const validDate = dates.find(d => !isNaN(new Date(d).getTime()));
    const year      = validDate
      ? new Date(validDate).getFullYear()
      : new Date().getFullYear();
    const maxVal    = Math.max(...flat.map((d: any) => Number(d.value ?? d.y ?? 0)));

    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.data[0]}<br/>Value: <b>${p.data[1]}</b>`,
          },
          visualMap: {
            min:         0,
            max:         maxVal,
            calculable:  true,
            orient:      "horizontal",
            left:        "center",
            bottom:      8,
            inRange:     { color: ["#e0f2fe", "#0284c7"] },
            textStyle:   { color: "#64748b", fontSize: 11 },
          },
          calendar: {
            top:       56,
            left:      40,
            right:     40,
            cellSize:  ["auto", 14],
            range:     String(year),
            itemStyle: { borderWidth: 1, borderColor: "#f1f5f9" },
            yearLabel: { show: false },
            monthLabel: { color: "#94a3b8", fontSize: 11, fontFamily: "inherit" },
            dayLabel:   { color: "#94a3b8", fontSize: 10, fontFamily: "inherit" },
          },
          series: [{
            type:              "heatmap",
            coordinateSystem:  "calendar",
            data: flat.map((d: any) => [
              String(d.date ?? d.x ?? ""),
              Number(d.value ?? d.y ?? 0),
            ]),
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── SUNBURST ─────────────────────────────────────────────────────────────────
  if (t === "sunburst") {
    const toEChartsTree = (nodes: any[]): any[] =>
      nodes.map(n => ({
        name:     String(n.name ?? ""),
        value:    Number(n.value ?? 0),
        children: n.children ? toEChartsTree(n.children) : undefined,
      }));

    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.name}: <b>${p.value}</b>`,
          },
          series: [{
            type:          "sunburst",
            data:          toEChartsTree(flat),
            radius:        ["12%", "85%"],
            sort:          undefined,
            emphasis:      { focus: "ancestor" },
            label: {
              rotate:     "radial",
              fontSize:   11,
              fontFamily: "inherit",
              color:      "#334155",
            },
            levels: [
              {},
              { r0: "12%", r: "40%", itemStyle: { borderWidth: 2, borderColor: "#fff" }, label: { rotate: 0, fontSize: 13, fontWeight: "600" } },
              { r0: "40%", r: "65%", itemStyle: { borderWidth: 1, borderColor: "#fff" }, label: { rotate: "radial", fontSize: 11 } },
              { r0: "65%", r: "85%", itemStyle: { borderWidth: 1, borderColor: "#fff" }, label: { rotate: "radial", fontSize: 10 } },
            ],
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── GAUGE ────────────────────────────────────────────────────────────────────
  if (t === "gauge") {
    const val  = Number(flat[0]?.value ?? flat[0]?.y ?? flat[0] ?? 0);
    const name = String(flat[0]?.label ?? flat[0]?.name ?? "");

    return (
      <ReactECharts
        option={{
          ...base,
          series: [{
            type:       "gauge",
            startAngle: 210,
            endAngle:   -30,
            min:        0,
            max:        100,
            radius:     "80%",
            pointer: { show: true, length: "65%", width: 5, itemStyle: { color: colors[0] } },
            progress: { show: true, width: 14, itemStyle: { color: colors[0] } },
            axisLine: {
              lineStyle: { width: 14, color: [[1, "#f1f5f9"]] },
            },
            axisTick:  { show: false },
            splitLine: { length: 12, lineStyle: { width: 2, color: "#cbd5e1" } },
            axisLabel: {
              distance:   22,
              color:      "#94a3b8",
              fontSize:   11,
              fontFamily: "inherit",
            },
            anchor: {
              show:      true,
              showAbove: true,
              size:      16,
              itemStyle: { borderWidth: 2, borderColor: colors[0], color: "#fff" },
            },
            title: {
              show:       !!name,
              offsetCenter: [0, "78%"],
              fontSize:   13,
              color:      "#64748b",
              fontFamily: "inherit",
            },
            detail: {
              valueAnimation: true,
              fontSize:       32,
              fontWeight:     "700",
              color:          "#0f172a",
              fontFamily:     "inherit",
              offsetCenter:   [0, "50%"],
              formatter:      (v: number) => `${v.toFixed(0)}%`,
            },
            data: [{ value: val, name }],
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── NIGHTINGALE ──────────────────────────────────────────────────────────────
  if (t === "nightingale") {
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.name}: <b>${p.value}</b> (${p.percent}%)`,
          },
          legend: LEGEND,
          series: [{
            type:         "pie",
            radius:       ["18%", "72%"],
            center:       ["50%", "50%"],
            roseType:     "area",
            itemStyle:    { borderRadius: 6, borderColor: "#fff", borderWidth: 2 },
            label: {
              fontSize:   12,
              fontFamily: "inherit",
              color:      "#475569",
              formatter:  "{b}: {c}",
            },
            emphasis: {
              itemStyle: { shadowBlur: 16, shadowColor: "rgba(0,0,0,0.2)" },
              label:     { fontSize: 14, fontWeight: "600" },
            },
            data: flat.map((d: any, i: number) => ({
              name:      String(d.label ?? d.name ?? d.x ?? `Item ${i + 1}`),
              value:     Number(d.value ?? d.y ?? 0),
              itemStyle: { color: colors[i % colors.length] },
            })),
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
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
      const min    = Math.min(...values);
      const max    = Math.max(...values);
      const bins   = 10;
      const w      = (max - min) / bins || 1;
      const buckets = Array.from({ length: bins }, (_, i) => ({
        label: `${(min + i * w).toFixed(1)}–${(min + (i + 1) * w).toFixed(1)}`,
        count: 0,
      }));
      values.forEach(v => {
        buckets[Math.min(Math.floor((v - min) / w), bins - 1)].count++;
      });
      xData = buckets.map(b => b.label);
      yData = buckets.map(b => b.count);
    }

    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            trigger:   "axis",
            formatter: (p: any) => `${p[0].name}<br/>Count: <b>${p[0].value}</b>`,
          },
          grid:  { left: "4%", right: "4%", bottom: "12%", top: "16%", containLabel: true },
          xAxis: { ...CATEGORY_AXIS(xData), name: "Value", nameTextStyle: { color: "#94a3b8", fontSize: 11 } },
          yAxis: { ...VALUE_AXIS(),         name: "Freq",  nameTextStyle: { color: "#94a3b8", fontSize: 11 } },
          series: [{
            type:      "bar",
            data:      yData,
            barWidth:  "96%",
            barCategoryGap: "0%",
            itemStyle: {
              color:        colors[0],
              borderRadius: [4, 4, 0, 0],
              opacity:      0.9,
            },
            emphasis:  { itemStyle: { opacity: 1 } },
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── WATERFALL ─────────────────────────────────────────────────────────────────
  if (t === "waterfall") {
    let running = 0;
    const placeholders: number[] = [];
    const values:       number[] = [];
    const itemColors:   string[] = [];

    flat.forEach((d: any) => {
      const v = Number(d.y ?? d.value ?? 0);
      placeholders.push(v >= 0 ? running : running + v);
      values.push(Math.abs(v));
      itemColors.push(v >= 0 ? "#10b981" : "#f43f5e");
      running += v;
    });

    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            trigger:   "axis",
            formatter: (params: any[]) => {
              const bar = params.find((p: any) => p.seriesIndex === 1);
              if (!bar) return "";
              const d   = flat[bar.dataIndex];
              const v   = Number(d?.y ?? d?.value ?? 0);
              return `${bar.name}: <b>${v >= 0 ? "+" : ""}${v}</b>`;
            },
          },
          grid:  { left: "4%", right: "4%", bottom: "12%", top: "16%", containLabel: true },
          xAxis: {
            ...CATEGORY_AXIS(flat.map((d: any) => String(d.x ?? d.category ?? ""))),
          },
          yAxis: VALUE_AXIS(),
          series: [
            {
              type:      "bar",
              stack:     "wf",
              itemStyle: { borderColor: "transparent", color: "transparent" },
              emphasis:  { itemStyle: { borderColor: "transparent", color: "transparent" } },
              data:      placeholders,
            },
            {
              type:  "bar",
              stack: "wf",
              data:  values.map((v, i) => ({
                value:     v,
                itemStyle: {
                  color:        itemColors[i],
                  borderRadius: v >= 0 ? [4, 4, 0, 0] : [0, 0, 4, 4],
                  opacity:      0.9,
                },
              })),
              label: {
                show:      true,
                position:  "top",
                fontSize:  12,
                fontFamily: "inherit",
                color:     "#475569",
                formatter: (p: any) => {
                  const orig = Number(flat[p.dataIndex]?.y ?? flat[p.dataIndex]?.value ?? 0);
                  return `${orig >= 0 ? "+" : ""}${orig}`;
                },
              },
            },
          ],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── PYRAMID ───────────────────────────────────────────────────────────────────
  if (t === "pyramid") {
    const sorted = [...flat].sort(
      (a: any, b: any) => Number(b.value ?? b.y ?? 0) - Number(a.value ?? a.y ?? 0)
    );
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.name}: <b>${p.value}</b>`,
          },
          series: [{
            type:      "funnel",
            sort:      "ascending",
            gap:       3,
            left:      "10%",
            width:     "80%",
            minSize:   "4%",
            maxSize:   "100%",
            itemStyle: { borderWidth: 0, borderColor: "#fff" },
            label: {
              show:       true,
              position:   "inside",
              fontSize:   12,
              fontFamily: "inherit",
              color:      "#fff",
              fontWeight: "500",
              formatter:  "{b}: {c}",
            },
            emphasis: {
              label:     { fontSize: 14, fontWeight: "600" },
              itemStyle: { opacity: 0.85 },
            },
            data: sorted.map((d: any, i: number) => ({
              name:      String(d.stage ?? d.x ?? d.label ?? `Level ${i + 1}`),
              value:     Number(d.value ?? d.y ?? 0),
              itemStyle: { color: colors[i % colors.length] },
            })),
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── FUNNEL / CONEFUNNEL ────────────────────────────────────────────────────────
  if (t === "funnel" || t === "conefunnel") {
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.name}: <b>${p.value}</b> (${p.percent}%)`,
          },
          series: [{
            type:      "funnel",
            sort:      "descending",
            gap:       3,
            left:      "10%",
            width:     "80%",
            minSize:   "4%",
            maxSize:   "100%",
            itemStyle: { borderWidth: 0 },
            label: {
              show:       true,
              position:   "inside",
              fontSize:   12,
              fontFamily: "inherit",
              color:      "#fff",
              fontWeight: "500",
              formatter:  "{b}: {c}",
            },
            emphasis: {
              label:     { fontSize: 14, fontWeight: "600" },
              itemStyle: { opacity: 0.85 },
            },
            data: flat.map((d: any, i: number) => ({
              name:      String(d.stage ?? d.x ?? d.label ?? `Step ${i + 1}`),
              value:     Number(d.value ?? d.y ?? 0),
              itemStyle: { color: colors[i % colors.length] },
            })),
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── HEATMAP ────────────────────────────────────────────────────────────────
  if (t === "heatmap") {
    const xLabels = [...new Set(flat.map((d: any) => String(d.x ?? d.category ?? "")))];
    const yLabels = [...new Set(flat.map((d: any) => String(d.group ?? "Series 1")))];
    const maxVal  = Math.max(...flat.map((d: any) => Number(d.value ?? d.y ?? 0)));

    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            position:  "top",
            formatter: (p: any) =>
              `${p.data[1]} / ${p.data[0]}<br/>Value: <b>${p.data[2]}</b>`,
          },
          grid:  { left: "4%", right: "4%", bottom: "18%", top: "16%", containLabel: true },
          xAxis: {
            type:       "category",
            data:       xLabels,
            splitArea:  { show: true, areaStyle: { color: ["#f8fafc", "#ffffff"] } },
            axisLabel:  { color: "#64748b", fontSize: 12, fontFamily: "inherit" },
            axisTick:   { show: false },
            axisLine:   { show: false },
          },
          yAxis: {
            type:       "category",
            data:       yLabels,
            splitArea:  { show: true, areaStyle: { color: ["#f8fafc", "#ffffff"] } },
            axisLabel:  { color: "#64748b", fontSize: 12, fontFamily: "inherit" },
            axisTick:   { show: false },
            axisLine:   { show: false },
          },
          visualMap: {
            min:        0,
            max:        maxVal,
            calculable: true,
            orient:     "horizontal",
            left:       "center",
            bottom:     "2%",
            inRange:    { color: ["#e0f2fe", "#0369a1"] },
            textStyle:  { color: "#64748b", fontSize: 11 },
          },
          series: [{
            type:      "heatmap",
            data:      flat.map((d: any) => [
              String(d.x ?? d.category ?? ""),
              String(d.group ?? "Series 1"),
              Number(d.value ?? d.y ?? 0),
            ]),
            label: {
              show:       true,
              fontSize:   11,
              fontFamily: "inherit",
              color:      "#334155",
            },
            emphasis: {
              itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.2)" },
            },
          }],
          ...options,
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── TREEMAP ────────────────────────────────────────────────────────────────
  if (t === "treemap") {
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.name}: <b>${p.value}</b>`,
          },
          series: [{
            type:           "treemap",
            roam:           false,
            nodeClick:      false,
            breadcrumb:     { show: false },
            data: flat.map((d: any, i: number) => ({
              name:      String(d.name ?? d.x ?? d.category ?? ""),
              value:     Number(d.value ?? d.y ?? 0),
              itemStyle: { color: colors[i % colors.length] },
            })),
            label: {
              show:       true,
              formatter:  "{b}",
              fontSize:   13,
              fontWeight: "500",
              fontFamily: "inherit",
              color:      "#fff",
            },
            upperLabel: { show: false },
            itemStyle:  { borderWidth: 3, borderColor: "#fff", gapWidth: 3 },
            emphasis: {
              itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.2)" },
              label:     { fontSize: 15, fontWeight: "600" },
            },
            levels: [
              { itemStyle: { borderWidth: 3, borderColor: "#fff", gapWidth: 3 } },
            ],
            ...options,
          }],
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── PIE / DONUT ────────────────────────────────────────────────────────────
  if (t === "pie" || t === "donut") {
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            formatter: (p: any) => `${p.name}: <b>${p.value}</b> (${p.percent}%)`,
          },
          legend: LEGEND,
          series: [{
            type:              "pie",
            radius:            t === "donut" ? ["42%", "68%"] : ["0%", "68%"],
            center:            ["50%", "50%"],
            avoidLabelOverlap: true,
            padAngle:          t === "donut" ? 2 : 0,
            itemStyle: {
              borderRadius: 6,
              borderColor:  "#fff",
              borderWidth:  2,
            },
            label: {
              show:       true,
              fontSize:   12,
              fontFamily: "inherit",
              color:      "#475569",
              formatter:  "{b}: {d}%",
            },
            emphasis: {
              itemStyle: { shadowBlur: 16, shadowColor: "rgba(0,0,0,0.2)", scaleSize: 8 },
              label:     { show: true, fontSize: 14, fontWeight: "600" },
            },
            data: flat.map((d: any, i: number) => ({
              name:      String(d.label ?? d.x ?? ""),
              value:     Number(d.value ?? d.y ?? 0),
              itemStyle: { color: colors[i % colors.length] },
            })),
          }],
          ...options,
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── RADAR ──────────────────────────────────────────────────────────────────
  if (t === "radar") {
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: { ...base.tooltip },
          legend:  LEGEND,
          radar: {
            indicator: flat.map((d: any) => ({
              name: String(d.x ?? ""),
              max:  100,
            })),
            axisName: { color: "#64748b", fontSize: 12, fontFamily: "inherit" },
            splitLine: { lineStyle: { color: "#e2e8f0" } },
            splitArea: { areaStyle: { color: ["rgba(248,250,252,0.8)", "rgba(241,245,249,0.6)"] } },
            axisLine:  { lineStyle: { color: "#e2e8f0" } },
          },
          series: [{
            type: "radar",
            data: [{
              value: flat.map((d: any) => Number(d.y ?? 0)),
              name:  typeof title === "string" ? title : title?.text ?? "Series 1",
              areaStyle: { color: colors[0], opacity: 0.2 },
              lineStyle: { color: colors[0], width: 2 },
              itemStyle: { color: colors[0] },
            }],
          }],
          ...options,
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── SCATTER / BUBBLE ───────────────────────────────────────────────────────
  if (t === "scatter" || t === "bubble") {
    return (
      <ReactECharts
        option={{
          ...base,
          tooltip: {
            ...base.tooltip,
            trigger:   "item",
            formatter: (p: any) =>
              t === "bubble"
                ? `x: ${p.data[0]}, y: ${p.data[1]}, size: ${p.data[2]}`
                : `x: ${p.data[0]}, y: ${p.data[1]}`,
          },
          legend: datasets.length > 1 ? { ...LEGEND, data: datasets.map((_, i) => `Series ${i + 1}`) } : undefined,
          grid:   { left: "4%", right: "4%", bottom: "12%", top: "16%", containLabel: true },
          xAxis:  { ...VALUE_AXIS(), name: "X", nameTextStyle: { color: "#94a3b8" } },
          yAxis:  { ...VALUE_AXIS(), name: "Y", nameTextStyle: { color: "#94a3b8" } },
          series: datasets.map((ds, i) => ({
            name:       `Series ${i + 1}`,
            type:       "scatter",
            symbolSize: t === "bubble"
              ? (d: any) => Math.sqrt(d[2] ?? 10) * 4
              : 10,
            data: ds.map((d: any) => [
              Number(d.x ?? 0),
              Number(d.y ?? 0),
              ...(t === "bubble" ? [Number(d.z ?? d.r ?? 10)] : []),
            ]),
            itemStyle: {
              color:   colors[i % colors.length],
              opacity: 0.8,
            },
          })),
          ...options,
        }}
        style={chartStyle(height)}
        opts={{ renderer: "svg" }}
      />
    );
  }

  // ── LINE / AREA / BAR / COLUMN (default) ──────────────────────────────────
  const xLabels = datasets[0].map((d: any) => String(d.x ?? d.category ?? ""));
  const isBar   = t === "bar" || t === "column";
  const isArea  = t === "area";

  return (
    <ReactECharts
      option={{
        ...base,
        tooltip: {
          ...base.tooltip,
          trigger: "axis",
          axisPointer: { type: "shadow", shadowStyle: { color: "rgba(0,0,0,0.04)" } },
        },
        legend: datasets.length > 1 ? LEGEND : undefined,
        grid:   { left: "4%", right: "4%", bottom: "12%", top: "16%", containLabel: true },
        xAxis:  CATEGORY_AXIS(xLabels),
        yAxis:  VALUE_AXIS(),
        series: datasets.map((ds, i) => ({
          name:      `Series ${i + 1}`,
          type:      isBar ? "bar" : "line",
          stack:     options.stacked ? "total" : undefined,
          smooth:    !isBar,
          symbol:    isBar ? undefined : "circle",
          symbolSize: 6,
          areaStyle: isArea
            ? { color: colors[i % colors.length], opacity: 0.15 }
            : undefined,
          itemStyle: {
            color:        colors[i % colors.length],
            borderRadius: isBar ? [4, 4, 0, 0] : undefined,
          },
          lineStyle: isBar ? undefined : { width: 2.5, color: colors[i % colors.length] },
          data:      ds.map((d: any) => Number(d.y ?? d.value ?? 0)),
        })),
        ...options,
      }}
      style={chartStyle(height)}
      opts={{ renderer: "svg" }}
    />
  );
};

export default VizlyECharts;

