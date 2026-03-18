// VizlyRecharts.tsx
// Recharts renderer — used when renderer="recharts" is passed to VizlyChart.
// Handles: line, area, bar, column, scatter, pie, donut, radar.
//
// Install: npm i recharts

// VizlyRecharts.tsx
import React from "react";
import {
  LineChart,   BarChart,      AreaChart,    ScatterChart,
  PieChart,    RadarChart,
  Line,        Bar,           Area,         Scatter,
  Pie,         Cell,          Radar,
  XAxis,       YAxis,         CartesianGrid,
  Tooltip,     Legend,        ResponsiveContainer,
  PolarGrid,   PolarAngleAxis, PolarRadiusAxis,
  ReferenceLine,
} from "recharts";

// ─── Color palette ────────────────────────────────────────────────────────────
const DEFAULT_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981", "#f43f5e",
  "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6",
];

interface VizlyRechartsProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: "left" | "center" | "right"; style?: any };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const px = (h: number | string) =>
  typeof h === "number" ? `${h}px` : h;

// Title component — supports left / center / right alignment
const ChartTitle = ({
  title,
}: {
  title?: string | { text: string; align?: "left" | "center" | "right"; style?: any };
}) => {
  if (!title) return null;
  const text   = typeof title === "string" ? title : title.text;
  const align  = (typeof title === "object" ? title.align : "left") ?? "left";
  const style  = typeof title === "object" ? title.style : undefined;
  const justifyMap = { left: "flex-start", center: "center", right: "flex-end" };
  return (
    <div style={{
      display:        "flex",
      justifyContent: justifyMap[align] ?? "flex-start",
      marginBottom:   10,
    }}>
      <span style={{
        fontSize:   15,
        fontWeight: 600,
        color:      "#1e293b",
        letterSpacing: "-0.2px",
        ...style,
      }}>
        {text}
      </span>
    </div>
  );
};

// Shared custom tooltip wrapper
const TooltipWrapper = ({ active, payload, label, formatter }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background:   "#0f172a",
      border:       "1px solid rgba(255,255,255,0.08)",
      borderRadius: 8,
      padding:      "8px 12px",
      fontSize:     13,
      color:        "#f1f5f9",
      boxShadow:    "0 4px 20px rgba(0,0,0,0.35)",
      minWidth:     120,
    }}>
      {label !== undefined && (
        <div style={{ color: "#94a3b8", marginBottom: 4, fontSize: 11 }}>{label}</div>
      )}
      {formatter
        ? formatter(payload)
        : payload.map((p: any, i: number) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <span style={{ color: "#94a3b8" }}>{p.name}:</span>
              <span style={{ fontWeight: 600 }}>{p.value}</span>
            </div>
          ))
      }
    </div>
  );
};

// Shared axis tick style
const TICK = { fontSize: 12, fill: "#94a3b8", fontFamily: "inherit" };
const GRID_COLOR = "#f1f5f9";
const AXIS_COLOR = "#e2e8f0";

// ─────────────────────────────────────────────────────────────────────────────

const VizlyRecharts: React.FC<VizlyRechartsProps> = ({
  data,
  type = "line",
  options = {},
  height = 350,
  title,
}) => {
  const t      = String(Array.isArray(type) ? type[0] : type).toLowerCase();
  const colors = (options.colors ?? DEFAULT_COLORS) as string[];
  const isMulti   = Array.isArray(data[0]);
  const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];

  // ── GAUGE ──────────────────────────────────────────────────────────────────
  if (t === "gauge") {
    const raw = datasets[0][0];
    const val = Math.min(100, Math.max(0, Number(
      typeof raw === "number" ? raw : (raw?.value ?? raw?.y ?? 0)
    )));
    const gaugeData = [
      { value: val,       fill: colors[0] },
      { value: 100 - val, fill: "#f1f5f9"  },
    ];
    // Color zones: green 0-50, amber 50-75, red 75-100
    const arcColor = val < 50 ? "#10b981" : val < 75 ? "#f59e0b" : "#f43f5e";

    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1, position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={gaugeData}
                dataKey="value"
                cx="50%" cy="75%"
                startAngle={180} endAngle={0}
                innerRadius="55%" outerRadius="78%"
                stroke="none"
                isAnimationActive
              >
                <Cell fill={arcColor} />
                <Cell fill="#f1f5f9" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center value overlay */}
          <div style={{
            position:   "absolute",
            bottom:     "18%",
            left:       "50%",
            transform:  "translateX(-50%)",
            textAlign:  "center",
            pointerEvents: "none",
          }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#0f172a", lineHeight: 1 }}>
              {val}%
            </div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>
              {val < 50 ? "Low" : val < 75 ? "Moderate" : "High"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── PYRAMID ────────────────────────────────────────────────────────────────
  if (t === "pyramid") {
    const rawData = datasets[0][0]?.data || datasets[0];
    const maxVal  = Math.max(...rawData.map((d: any) => Number(d.y ?? d.value ?? 0)));
    const pyramidData = rawData.map((d: any) => ({
      name:   String(d.x ?? ""),
      value:  Number(d.y ?? d.value ?? 0),
      spacer: (maxVal - Number(d.y ?? d.value ?? 0)) / 2,
    }));

    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pyramidData} layout="vertical" margin={{ top: 4, right: 24, bottom: 4, left: 8 }}>
              <XAxis type="number" hide axisLine={false} tickLine={false} />
              <YAxis
                dataKey="name" type="category"
                tick={{ ...TICK, fill: "#475569", fontSize: 13 }}
                axisLine={false} tickLine={false} width={90}
              />
              <Tooltip content={<TooltipWrapper />} />
              <Bar dataKey="spacer" stackId="a" fill="transparent" isAnimationActive={false} />
              <Bar dataKey="value" stackId="a" radius={[0, 4, 4, 0]}>
                {pyramidData.map((_: any, i: number) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // ── WATERFALL ──────────────────────────────────────────────────────────────
  if (t === "waterfall") {
    const rawData = datasets[0];
    let currentTotal = 0;
    const waterfallData = rawData.map((d: any, i: number) => {
      const val     = Number(d.value ?? d.y ?? 0);
      const isTotal = i === rawData.length - 1;
      const start   = currentTotal;
      if (!isTotal) currentTotal += val;
      const end = isTotal ? currentTotal : start + val;
      return {
        name: String(d.x ?? d.label ?? ""),
        base: isTotal ? 0 : Math.min(start, end),
        size: isTotal ? Math.abs(currentTotal) : Math.abs(val),
        fill: isTotal ? colors[1] ?? "#6366f1" : val >= 0 ? "#10b981" : "#f43f5e",
        orig: val,
      };
    });

    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={waterfallData} margin={{ top: 16, right: 24, bottom: 8, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
              <XAxis dataKey="name" tick={TICK} axisLine={{ stroke: AXIS_COLOR }} tickLine={false} />
              <YAxis tick={TICK} axisLine={false} tickLine={false} />
              <Tooltip
                content={({ active, payload }: any) => {
                  if (!active || !payload?.length) return null;
                  const d = payload.find((p: any) => p.dataKey === "size");
                  if (!d) return null;
                  const orig = waterfallData[d.payload?.name ? waterfallData.findIndex((w: any) => w.name === d.payload.name) : 0]?.orig ?? 0;
                  return (
                    <TooltipWrapper
                      active={active}
                      label={d.payload?.name}
                      payload={[{ ...d, name: "Value", value: orig >= 0 ? `+${orig}` : orig, color: d.payload?.fill }]}
                    />
                  );
                }}
              />
              <ReferenceLine y={0} stroke={AXIS_COLOR} />
              <Bar dataKey="base" stackId="wf" fill="transparent" isAnimationActive={false} />
              <Bar dataKey="size" stackId="wf" radius={[4, 4, 0, 0]}>
                {waterfallData.map((entry: any, i: number) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // ── HISTOGRAM ──────────────────────────────────────────────────────────────
  if (t === "histogram") {
    const raw = datasets[0];
    const isPreBinned = raw[0]?.bin !== undefined || raw[0]?.count !== undefined;
    let chartData: { x: string; y: number }[];

    if (isPreBinned) {
      chartData = raw.map((d: any) => ({
        x: String(d.bin ?? d.x ?? ""),
        y: Number(d.count ?? d.y ?? 0),
      }));
    } else {
      const values = raw.map((d: any) => Number(d.value ?? d.y ?? 0));
      const min = Math.min(...values), max = Math.max(...values);
      const bins = 10, w = (max - min) / bins || 1;
      const buckets = Array.from({ length: bins }, (_, i) => ({
        x: `${(min + i * w).toFixed(1)}–${(min + (i + 1) * w).toFixed(1)}`,
        y: 0,
      }));
      values.forEach(v => { buckets[Math.min(Math.floor((v - min) / w), bins - 1)].y++; });
      chartData = buckets;
    }

    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap={2} margin={{ top: 8, right: 24, bottom: 8, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
              <XAxis
                dataKey="x" tick={{ ...TICK, fontSize: 10 }}
                axisLine={{ stroke: AXIS_COLOR }} tickLine={false}
                interval="preserveStartEnd"
                label={{ value: "Value", position: "insideBottom", offset: -4, fill: "#64748b", fontSize: 11 }}
              />
              <YAxis
                tick={TICK} axisLine={false} tickLine={false}
                label={{ value: "Frequency", angle: -90, position: "insideLeft", offset: 8, fill: "#64748b", fontSize: 11 }}
              />
              <Tooltip content={<TooltipWrapper />} />
              <Bar dataKey="y" name="Count" fill={colors[0]} radius={[3, 3, 0, 0]} opacity={0.9} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // ── PIE / DONUT ────────────────────────────────────────────────────────────
  if (t === "pie" || t === "donut") {
    const chartData = datasets[0];

    // Custom label renderer
    const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
      const RADIAN = Math.PI / 180;
      const radius = outerRadius + 24;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      if (percent < 0.04) return null; // skip tiny slices
      return (
        <text x={x} y={y} fill="#475569" textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central" fontSize={12} fontFamily="inherit">
          {`${name} ${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="label"
                cx="50%" cy="50%"
                innerRadius={t === "donut" ? "48%" : 0}
                outerRadius="70%"
                paddingAngle={t === "donut" ? 2 : 0}
                labelLine={false}
                label={renderLabel}
                isAnimationActive
              >
                {chartData.map((_: any, i: number) => (
                  <Cell
                    key={i}
                    fill={colors[i % colors.length]}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }: any) => {
                  if (!active || !payload?.length) return null;
                  const p = payload[0];
                  return (
                    <TooltipWrapper
                      active={active}
                      payload={[{ name: p.name, value: `${p.value} (${((p.payload.percent ?? 0) * 100 || 0).toFixed(1)}%)`, color: p.payload.fill }]}
                    />
                  );
                }}
              />
              <Legend
                iconType="circle" iconSize={8}
                wrapperStyle={{ fontSize: 12, color: "#64748b", paddingTop: 8 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // ── RADAR ──────────────────────────────────────────────────────────────────
  if (t === "radar") {
    const titleText = typeof title === "string" ? title : title?.text;
    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={datasets[0]} margin={{ top: 8, right: 32, bottom: 8, left: 32 }}>
              <PolarGrid stroke={GRID_COLOR} />
              <PolarAngleAxis
                dataKey="x"
                tick={{ fontSize: 12, fill: "#64748b", fontFamily: "inherit" }}
              />
              <PolarRadiusAxis
                tick={{ fontSize: 10, fill: "#94a3b8" }}
                axisLine={false} tickLine={false}
              />
              <Radar
                name={titleText ?? "Series 1"}
                dataKey="y"
                stroke={colors[0]}
                fill={colors[0]}
                fillOpacity={0.2}
                strokeWidth={2}
                dot={{ r: 4, fill: colors[0], strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Tooltip content={<TooltipWrapper />} />
              <Legend
                iconType="circle" iconSize={8}
                wrapperStyle={{ fontSize: 12, color: "#64748b" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // ── SCATTER ────────────────────────────────────────────────────────────────
  if (t === "scatter") {
    return (
      <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
        <ChartTitle title={title} />
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 8, right: 24, bottom: 8, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
              <XAxis dataKey="x" name="X" type="number" tick={TICK} axisLine={{ stroke: AXIS_COLOR }} tickLine={false} />
              <YAxis dataKey="y" name="Y" type="number" tick={TICK} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3", stroke: "#e2e8f0" }}
                content={({ active, payload }: any) => {
                  if (!active || !payload?.length) return null;
                  const p = payload[0]?.payload;
                  return (
                    <TooltipWrapper
                      active={active}
                      payload={[
                        { name: "x", value: p?.x, color: colors[0] },
                        { name: "y", value: p?.y, color: colors[0] },
                      ]}
                    />
                  );
                }}
              />
              {datasets.map((ds, i) => (
                <Scatter
                  key={i}
                  name={`Series ${i + 1}`}
                  data={ds}
                  fill={colors[i % colors.length]}
                  fillOpacity={0.8}
                />
              ))}
              <Legend
                iconType="circle" iconSize={8}
                wrapperStyle={{ fontSize: 12, color: "#64748b" }}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // ── LINE / AREA / BAR / COLUMN ─────────────────────────────────────────────
  // Merge datasets into [{x, s0, s1, ...}] format
  const mergedData: Record<string, any>[] = [];
  const xValues: string[] = [];

  datasets.forEach(ds => {
    ds.forEach((point: any) => {
      const xKey = String(point.x ?? point.category ?? "");
      if (!xValues.includes(xKey)) xValues.push(xKey);
    });
  });

  xValues.forEach(xVal => {
    const row: Record<string, any> = { x: xVal };
    datasets.forEach((ds, i) => {
      const point = ds.find((p: any) => String(p.x ?? p.category ?? "") === xVal);
      row[`s${i}`] = point?.y ?? point?.value ?? null;
    });
    mergedData.push(row);
  });

  const isBar    = t === "bar" || t === "column";
  const isArea   = t === "area";
  const isLine   = t === "line";

  const ChartComponent = isBar ? BarChart : isArea ? AreaChart : LineChart;
  const SeriesComponent = isBar ? Bar : isArea ? Area : Line;

  const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];

  return (
    <div style={{ width: "100%", height: px(height), display: "flex", flexDirection: "column" }}>
      <ChartTitle title={title} />
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent
            data={mergedData}
            margin={{ top: 8, right: 24, bottom: 8, left: 8 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
            <XAxis
              dataKey="x"
              tick={TICK}
              axisLine={{ stroke: AXIS_COLOR }}
              tickLine={false}
            />
            <YAxis
              tick={TICK}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip
              content={<TooltipWrapper />}
              cursor={isBar
                ? { fill: "rgba(0,0,0,0.04)" }
                : { stroke: "#e2e8f0", strokeDasharray: "4 4" }
              }
            />
            <Legend
              iconType={isBar ? "square" : "circle"}
              iconSize={8}
              wrapperStyle={{ fontSize: 12, color: "#64748b", paddingTop: 4 }}
            />
            {datasets.map((_, i) => (
              <SeriesComponent
                key={i}
                type="monotone"
                dataKey={`s${i}`}
                name={seriesNames[i] ?? `Series ${i + 1}`}
                stroke={colors[i % colors.length]}
                fill={colors[i % colors.length]}
                fillOpacity={isArea ? 0.15 : 1}
                dot={isLine ? { r: 3, fill: colors[i % colors.length], strokeWidth: 0 } : false}
                activeDot={isLine ? { r: 5, strokeWidth: 0 } : undefined}
                strokeWidth={isBar ? 0 : 2.5}
                radius={isBar ? ([4, 4, 0, 0] as any) : undefined}
                isAnimationActive
              />
            ))}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VizlyRecharts;


// import React from "react";
// import {
//   LineChart,  BarChart,     AreaChart,   ScatterChart,
//   PieChart,   RadarChart,
//   Line,       Bar,          Area,        Scatter,
//   Pie,        Cell,         Radar,
//   XAxis,      YAxis,        CartesianGrid,
//   Tooltip,    Legend,       ResponsiveContainer,
//   PolarGrid,  PolarAngleAxis, PolarRadiusAxis,
// } from "recharts";

// // ─────────────────────────────────────────────────────────────────────────────
// // Default color palette — override via options.colors
// // ─────────────────────────────────────────────────────────────────────────────
// const DEFAULT_COLORS = [
//   "#3b82f6", "#f59e0b", "#10b981",
//   "#f43f5e", "#8b5cf6", "#06b6d4",
// ];

// interface VizlyRechartsProps {
//   data:     any[] | any[][];
//   type?:    string | string[];
//   options?: any;
//   height?:  number | string;
//   title?:   string | { text: string; align?: string };
// }

// const VizlyRecharts: React.FC<VizlyRechartsProps> = ({
//   data,
//   type = "line",
//   options = {},
//   height = 350,
//   title,
// }) => {
//   const t = String(Array.isArray(type) ? type[0] : type).toLowerCase();
//   const colors: string[] = options.colors ?? DEFAULT_COLORS;
//   const titleText = typeof title === "string" ? title : title?.text;

//   // ── Normalise data ─────────────────────────────────────────────────────────
//   // If multi-dataset (array of arrays), flatten to single dataset for
//   // single-series charts, or keep as multiple for multi-series.
//   const isMulti = Array.isArray(data[0]);
//   const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];

//   // ─────────────────────────────────────────────────────────────────────────
// // ─────────────────────────────────────────────────────────────────────────
//   // GAUGE (Implemented as a PieChart with a needle/specific start angle)
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "gauge") {
//     const raw = datasets[0][0];
//     const val = Number(
//     typeof raw === "number" ? raw : (raw?.value ?? raw?.y ?? raw ?? 0)
//     );
//     const gaugeData = [
//       { value: val, fill: colors[0] },
//       { value: 100 - val, fill: "#e5e7eb" },
//     ];
//     return (
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         {titleText && <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>}
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={gaugeData}
//               dataKey="value"
//               cx="50%" cy="80%"
//               startAngle={180} endAngle={0}
//               innerRadius="60%" outerRadius="80%"
//               stroke="none"
//             >
//             {gaugeData.map((entry, i) => (
//              <Cell key={i} fill={entry.fill} />
//              ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//         <div style={{ textAlign: 'center', marginTop: '-40px', fontSize: '24px', fontWeight: 'bold' }}>{val}%</div>
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // PYRAMID / FUNNEL (Horizontal centered BarChart)
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "pyramid") {
//     const rawData = datasets[0][0]?.data || datasets[0];
//     const maxVal = Math.max(...rawData.map((d: any) => d.y ?? 0));
    
//     // We create a "spacer" bar to center the pyramid
//     const pyramidData = rawData.map((d: any) => ({
//       name: d.x,
//       value: d.y,
//       spacer: (maxVal - (d.y ?? 0)) / 2
//     }));

//     return (
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={pyramidData} layout="vertical" stackOffset="none">
//             <XAxis type="number" hide />
//             <YAxis dataKey="name" type="category" />
//             <Tooltip />
//             <Bar dataKey="spacer" stackId="a" fill="transparent" isAnimationActive={false} />
//             <Bar dataKey="value" stackId="a" fill={colors[0]}>
//                {pyramidData.map((_: any, i: number) => (
//                 <Cell key={i} fill={colors[i % colors.length]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // WATERFALL
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "waterfall") {
//     const rawData = datasets[0];
//     let currentTotal = 0;
//     const waterfallData = rawData.map((d: any, i: number) => {
//       const val = Number(d.value ?? d.y ?? 0);
//       const isTotal = i === rawData.length - 1;
//       const start = currentTotal;
//       if (!isTotal) currentTotal += val;
//       const end = isTotal ? currentTotal : start + val;
//       return {
//         name: d.x ?? d.label,
//         base: isTotal ? 0 : Math.min(start, end),
//         size: isTotal ? Math.abs(currentTotal) : Math.abs(val),
//         fill: isTotal ? colors[1] : val >= 0 ? colors[0] : "#ef4444",
//       };
//     });

//     return (
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={waterfallData}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="base" stackId="wf" fill="transparent" isAnimationActive={false} />
//             <Bar dataKey="size" stackId="wf">
//             {waterfallData.map((entry: any, i: number) => (
//             <Cell key={i} fill={entry.fill} />
//             ))}
//            </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // HISTOGRAM
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "histogram") {
//     const raw = datasets[0];
//     const isPreBinned = raw[0]?.bin !== undefined || raw[0]?.count !== undefined;
//     let chartData: { x: string; y: number }[];
//     if (isPreBinned) {
//       chartData = raw.map((d: any) => ({ x: String(d.bin ?? d.x ?? ""), y: Number(d.count ?? d.y ?? 0) }));
//     } else {
//       const values = raw.map((d: any) => Number(d.value ?? d.y ?? 0));
//       const min = Math.min(...values), max = Math.max(...values);
//       const bins = 10, w = (max - min) / bins || 1;
//       const buckets = Array.from({ length: bins }, (_, i) => ({ x: `${(min + i * w).toFixed(1)}`, y: 0 }));
//       values.forEach(v => { buckets[Math.min(Math.floor((v - min) / w), bins - 1)].y++; });
//       chartData = buckets;
//     }
//     return (                                          // ← was missing
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={chartData} barCategoryGap={0}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="x" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="y" fill={colors[0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }



//   // PIE / DONUT
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "pie" || t === "donut") {
//     const chartData = datasets[0];
//     return (
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         {titleText && (
//           <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
//         )}
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={chartData}
//               dataKey="value"
//               nameKey="label"
//               cx="50%"
//               cy="50%"
//               innerRadius={t === "donut" ? "50%" : 0}
//               outerRadius="75%"
//               label={({ name, percent }: { name?: string; percent?: number }) => {
//                 const pct = ((percent ?? 0) * 100).toFixed(0);
//                 return `${name ?? ""} ${pct}%`;
//               }}
              
//             >
//               {chartData.map((_: any, i: number) => (
//                 <Cell key={i} fill={colors[i % colors.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // RADAR
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "radar") {
//     return (
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         {titleText && (
//           <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
//         )}
//         <ResponsiveContainer width="100%" height="100%">
//           <RadarChart data={datasets[0]}>
//             <PolarGrid />
//             <PolarAngleAxis dataKey="x" />
//             <PolarRadiusAxis />
//             <Radar
//               name={titleText ?? "Series 1"}
//               dataKey="y"
//               stroke={colors[0]}
//               fill={colors[0]}
//               fillOpacity={0.45}
//             />
//             <Tooltip />
//             <Legend />
//           </RadarChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // SCATTER
//   // ─────────────────────────────────────────────────────────────────────────
//   if (t === "scatter") {
//     return (
//       <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//         {titleText && (
//           <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
//         )}
//         <ResponsiveContainer width="100%" height="100%">
//           <ScatterChart>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="x" name="X" />
//             <YAxis dataKey="y" name="Y" />
//             <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//             {datasets.map((ds, i) => (
//               <Scatter
//                 key={i}
//                 name={`Series ${i + 1}`}
//                 data={ds}
//                 fill={colors[i % colors.length]}
//               />
//             ))}
//             <Legend />
//           </ScatterChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   // LINE / AREA / BAR / COLUMN (XY charts)
//   // Supports multiple series via array-of-arrays.
//   // ─────────────────────────────────────────────────────────────────────────

//   // Merge multiple datasets into a single data array keyed by x value.
//   // e.g. [{x:"Jan",s0:120,s1:100}, {x:"Feb",s0:190,s1:170}]
//   const mergedData: Record<string, any>[] = [];
//   const xValues: string[] = [];

//   datasets.forEach((ds) => {
//     ds.forEach((point: any) => {
//       const xKey = String(point.x ?? point.category ?? "");
//       if (!xValues.includes(xKey)) xValues.push(xKey);
//     });
//   });

//   xValues.forEach((xVal) => {
//     const row: Record<string, any> = { x: xVal };
//     datasets.forEach((ds, i) => {
//       const point = ds.find((p: any) => String(p.x ?? p.category ?? "") === xVal);
//       row[`s${i}`] = point?.y ?? point?.value ?? null;
//     });
//     mergedData.push(row);
//   });

//   // Pick the right Recharts chart/series component
//   const ChartComponent = t === "bar" || t === "column" ? BarChart
//                        : t === "area"                   ? AreaChart
//                        : LineChart;

//   const SeriesComponent = t === "bar" || t === "column" ? Bar
//                         : t === "area"                   ? Area
//                         : Line;

//   const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];

//   return (
//     <div style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height }}>
//       {titleText && (
//         <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
//       )}
//       <ResponsiveContainer width="100%" height="100%">
//         <ChartComponent data={mergedData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//           <XAxis dataKey="x" tick={{ fontSize: 12 }} />
//           <YAxis tick={{ fontSize: 12 }} />
//           <Tooltip />
//           <Legend />
//           {datasets.map((_, i) => (
//             <SeriesComponent
//               key={i}
//               type="monotone"
//               dataKey={`s${i}`}
//               name={seriesNames[i] ?? `Series ${i + 1}`}
//               stroke={colors[i % colors.length]}
//               fill={colors[i % colors.length]}
//               fillOpacity={t === "area" ? 0.25 : 1}
//               dot={t === "line" ? { r: 3 } : false}
//               strokeWidth={2}
//               isAnimationActive
//             />
//           ))}
//         </ChartComponent>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default VizlyRecharts;
