// VizlyRecharts.tsx
// Recharts renderer — used when renderer="recharts" is passed to VizlyChart.
// Handles: line, area, bar, column, scatter, pie, donut, radar.
//
// Install: npm i recharts

import React from "react";
import {
  LineChart,  BarChart,     AreaChart,   ScatterChart,
  PieChart,   RadarChart,
  Line,       Bar,          Area,        Scatter,
  Pie,        Cell,         Radar,
  XAxis,      YAxis,        CartesianGrid,
  Tooltip,    Legend,       ResponsiveContainer,
  PolarGrid,  PolarAngleAxis, PolarRadiusAxis,
} from "recharts";

// ─────────────────────────────────────────────────────────────────────────────
// Default color palette — override via options.colors
// ─────────────────────────────────────────────────────────────────────────────
const DEFAULT_COLORS = [
  "#3b82f6", "#f59e0b", "#10b981",
  "#f43f5e", "#8b5cf6", "#06b6d4",
];

interface VizlyRechartsProps {
  data:     any[] | any[][];
  type?:    string | string[];
  options?: any;
  height?:  number | string;
  title?:   string | { text: string; align?: string };
}

const VizlyRecharts: React.FC<VizlyRechartsProps> = ({
  data,
  type = "line",
  options = {},
  height = 350,
  title,
}) => {
  const t = String(Array.isArray(type) ? type[0] : type).toLowerCase();
  const colors: string[] = options.colors ?? DEFAULT_COLORS;
  const titleText = typeof title === "string" ? title : title?.text;

  // ── Normalise data ─────────────────────────────────────────────────────────
  // If multi-dataset (array of arrays), flatten to single dataset for
  // single-series charts, or keep as multiple for multi-series.
  const isMulti = Array.isArray(data[0]);
  const datasets: any[][] = isMulti ? (data as any[][]) : [data as any[]];

  // ─────────────────────────────────────────────────────────────────────────
  // PIE / DONUT
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "pie" || t === "donut") {
    const chartData = datasets[0];
    return (
      <div style={{ width: "100%", height }}>
        {titleText && (
          <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
        )}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              innerRadius={t === "donut" ? "50%" : 0}
              outerRadius="75%"
              label={({ name, percent }: { name?: string; percent?: number }) => {
                const pct = ((percent ?? 0) * 100).toFixed(0);
                return `${name ?? ""} ${pct}%`;
              }}
              
            >
              {chartData.map((_: any, i: number) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RADAR
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "radar") {
    return (
      <div style={{ width: "100%", height }}>
        {titleText && (
          <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
        )}
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={datasets[0]}>
            <PolarGrid />
            <PolarAngleAxis dataKey="x" />
            <PolarRadiusAxis />
            <Radar
              name={titleText ?? "Series 1"}
              dataKey="y"
              stroke={colors[0]}
              fill={colors[0]}
              fillOpacity={0.45}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SCATTER
  // ─────────────────────────────────────────────────────────────────────────
  if (t === "scatter") {
    return (
      <div style={{ width: "100%", height }}>s
        {titleText && (
          <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
        )}
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" name="X" />
            <YAxis dataKey="y" name="Y" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            {datasets.map((ds, i) => (
              <Scatter
                key={i}
                name={`Series ${i + 1}`}
                data={ds}
                fill={colors[i % colors.length]}
              />
            ))}
            <Legend />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // LINE / AREA / BAR / COLUMN (XY charts)
  // Supports multiple series via array-of-arrays.
  // ─────────────────────────────────────────────────────────────────────────

  // Merge multiple datasets into a single data array keyed by x value.
  // e.g. [{x:"Jan",s0:120,s1:100}, {x:"Feb",s0:190,s1:170}]
  const mergedData: Record<string, any>[] = [];
  const xValues: string[] = [];

  datasets.forEach((ds) => {
    ds.forEach((point: any) => {
      const xKey = String(point.x ?? point.category ?? "");
      if (!xValues.includes(xKey)) xValues.push(xKey);
    });
  });

  xValues.forEach((xVal) => {
    const row: Record<string, any> = { x: xVal };
    datasets.forEach((ds, i) => {
      const point = ds.find((p: any) => String(p.x ?? p.category ?? "") === xVal);
      row[`s${i}`] = point?.y ?? point?.value ?? null;
    });
    mergedData.push(row);
  });

  // Pick the right Recharts chart/series component
  const ChartComponent = t === "bar" || t === "column" ? BarChart
                       : t === "area"                   ? AreaChart
                       : LineChart;

  const SeriesComponent = t === "bar" || t === "column" ? Bar
                        : t === "area"                   ? Area
                        : Line;

  const seriesNames: string[] = options.series?.map((s: any) => s.name) ?? [];

  return (
    <div style={{ width: "100%", height }}>
      {titleText && (
        <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 500 }}>{titleText}</p>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <ChartComponent data={mergedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="x" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          {datasets.map((_, i) => (
            <SeriesComponent
              key={i}
              type="monotone"
              dataKey={`s${i}`}
              name={seriesNames[i] ?? `Series ${i + 1}`}
              stroke={colors[i % colors.length]}
              fill={colors[i % colors.length]}
              fillOpacity={t === "area" ? 0.25 : 1}
              dot={t === "line" ? { r: 3 } : false}
              strokeWidth={2}
              isAnimationActive
            />
          ))}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
};

export default VizlyRecharts;
