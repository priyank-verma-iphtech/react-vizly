import { jsx as g } from "react/jsx-runtime";
import { forwardRef as x, useRef as y, useMemo as b, useImperativeHandle as h, useEffect as w } from "react";
import k from "apexcharts";
const z = (t) => {
  if (!(t != null && t.length))
    return "bar";
  const e = t[0];
  return typeof e == "number" ? "donut" : Array.isArray(e == null ? void 0 : e.y) ? "rangeBar" : e != null && e.x && !isNaN(Date.parse(e.x)) || typeof e == "object" && Object.keys(e).length > 2 ? "line" : e != null && e.x && typeof e.x == "string" ? "bar" : "line";
}, X = {
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  bar: "category",
  column: "category",
  radar: "category",
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  heatmap: "heatmap",
  treemap: "heatmap",
  rangebar: "range",
  candlestick: "range"
}, C = (t, e) => {
  const i = X[t] || "xy";
  let s = [], m = [], l = [];
  switch (i) {
    case "circular":
      s = e.map((r) => r.y ?? r.value ?? r), m = e.map((r) => r.x ?? r.label);
      break;
    case "category":
      l = e.map((r) => r.x), s = [{
        name: "Series 1",
        data: e.map((r) => r.y)
      }];
      break;
    case "heatmap":
      s = [{
        name: "Series 1",
        data: e.map((r) => ({ x: r.x, y: r.y }))
      }];
      break;
    case "range":
      s = [{ data: e }];
      break;
    default:
      s = [{
        name: "Series 1",
        data: e.map((r) => ({ x: r.x, y: r.y }))
      }];
  }
  return { series: s, labels: m, categories: l };
}, v = x(
  ({ data: t, type: e, options: i = {}, height: s = 350 }, m) => {
    const l = y(null), r = y(null), p = b(() => e || z(t), [t, e]), f = b(() => {
      const n = p.toLowerCase(), { series: u, labels: a, categories: c } = C(n, t), o = {
        ...i,
        chart: {
          ...i.chart,
          type: n === "column" ? "bar" : n,
          height: s
        },
        series: u
      };
      return a != null && a.length && (o.labels = a), c != null && c.length && (o.xaxis = { categories: c }), (n === "bar" || n === "column") && (o.plotOptions = { bar: { horizontal: !1 } }), o;
    }, [t, p]);
    return h(m, () => ({
      zoomIn() {
        var o;
        const n = r.current;
        if (!((o = n == null ? void 0 : n.w) != null && o.globals))
          return;
        const { minX: u, maxX: a } = n.w.globals, c = (a - u) * 0.1;
        n.zoomX(u + c, a - c);
      },
      zoomOut() {
        var o;
        const n = r.current;
        if (!((o = n == null ? void 0 : n.w) != null && o.globals))
          return;
        const { minX: u, maxX: a } = n.w.globals, c = (a - u) * 0.1;
        n.zoomX(u - c, a + c);
      },
      reset() {
        var n;
        (n = r.current) == null || n.resetSeries();
      }
    })), w(() => {
      if (l.current)
        return r.current ? r.current.updateOptions(f) : (r.current = new k(l.current, f), r.current.render()), () => {
          var n;
          (n = r.current) == null || n.destroy(), r.current = null;
        };
    }, [f]), /* @__PURE__ */ g("div", { ref: l });
  }
);
export {
  v as VizlyChart
};
