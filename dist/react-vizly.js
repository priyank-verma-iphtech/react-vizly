import { jsx as w } from "react/jsx-runtime";
import { forwardRef as X, useRef as p, useMemo as z, useImperativeHandle as j, useEffect as C } from "react";
import E from "apexcharts";
const S = (a) => {
  if (!a || a.length === 0)
    return "bar";
  const e = a[0];
  if (typeof e == "number")
    return "donut";
  if (typeof e != "object")
    return "bar";
  const n = Object.values(e).filter(
    (l) => typeof l == "number"
  );
  return e.stage && e.value ? "funnel" : e.label && e.value ? "donut" : e.category && e.value ? "polararea" : e.x !== void 0 && e.y !== void 0 && e.value !== void 0 ? "heatmap" : e.name && e.value && Array.isArray(e.children) ? "treemap" : Array.isArray(e.y) && e.y.length === 4 ? "candlestick" : Array.isArray(e.y) && e.y.length === 5 ? "boxplot" : Array.isArray(e.y) && e.y.length === 2 ? "rangebar" : e.x !== void 0 && e.y !== void 0 && e.r !== void 0 ? "bubble" : typeof e.x == "number" && typeof e.y == "number" ? "scatter" : e.x && !isNaN(Date.parse(e.x)) ? "line" : e.start !== void 0 && e.end !== void 0 ? "slope" : n.length > 1 ? "mixed" : (e.x !== void 0 && e.y !== void 0, "bar");
}, L = {
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
}, k = (a, e) => {
  const n = L[a] || "xy";
  let l = [], b = [], y = [];
  if (!e || e.length === 0)
    return { series: l, labels: b, categories: y };
  const c = e[0], s = Object.keys(c).filter(
    (r) => typeof c[r] == "number"
  ), i = Object.keys(c).find(
    (r) => typeof c[r] == "string"
  );
  switch (n) {
    case "circular":
      l = e.map((r) => r.value ?? r.y ?? r), b = e.map(
        (r) => r.label ?? r.category ?? r.name ?? r.x
      );
      break;
    case "category":
      y = e.map((r) => r.x ?? r.category ?? r.stage ?? r[i]), s.length > 1 ? l = s.map((r) => ({
        name: r,
        data: e.map((t) => t[r])
      })) : l = [{
        name: s[0] || "Series 1",
        data: e.map((r) => r.y ?? r.value)
      }];
      break;
    case "heatmap":
      l = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.value ?? r.y
        }))
      }];
      break;
    case "range":
      l = [{ name: "Series 1", data: e }];
      break;
    default:
      a === "bubble" ? l = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.y,
          r: r.r
        }))
      }] : s.length > 1 ? l = s.map((r) => ({
        name: r,
        data: e.map((t) => ({
          x: t.x ?? t[i],
          y: t[r]
        }))
      })) : l = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.y
        }))
      }];
  }
  return { series: l, labels: b, categories: y };
}, R = X(
  ({ data: a, type: e, options: n = {}, height: l = 350 }, b) => {
    const y = p(null), c = p(null), s = p(null), i = z(() => e || (Array.isArray(a[0]) ? a.map((t) => S(t)) : S(a)), [a, e]), r = z(() => {
      var x, v, d;
      const t = Array.isArray(i) ? String(i[0]).toLowerCase() : String(i).toLowerCase();
      let m = [], o = [], u = [];
      if (Array.isArray(a[0]))
        m = a.map((O, h) => {
          const A = Array.isArray(e) && e[h] || (Array.isArray(i) ? i[h] : i), F = k(A, O);
          return {
            name: `Series ${h + 1}`,
            type: A,
            ...F.series[0]
          };
        });
      else {
        const g = k(i, a);
        m = g.series, o = g.labels, u = g.categories;
      }
      const f = {
        ...n,
        // Spread early so defaults can override or be overridden
        chart: {
          type: t === "column" ? "bar" : t,
          height: "100%",
          // Use 100% of the container ref
          toolbar: {
            show: !0,
            tools: {
              download: !0,
              selection: !0,
              zoom: !0,
              zoomin: !0,
              zoomout: !0,
              pan: !0,
              reset: !0,
              customIcons: [
                {
                  icon: '<svg fill="#000000" viewBox="0 0 24 24" width="20px" height="20px"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
                  index: 6,
                  class: "custom-fullscreen-icon",
                  click: () => {
                    c.current && (document.fullscreenElement ? document.exitFullscreen() : c.current.requestFullscreen());
                  }
                }
              ]
            },
            autoSelected: "zoom"
          },
          animations: { enabled: !0 },
          ...n.chart
        },
        // Accept any color format (RGBA, Hex, HSL) from user options
        colors: n.colors || [
          "rgba(0, 143, 251, 0.85)",
          "#FEB019",
          "hsl(145, 63%, 42%)",
          "green"
        ],
        fill: {
          // Set type to 'solid' by default to respect RGBA transparency
          type: ((x = n.fill) == null ? void 0 : x.type) || "solid",
          ...n.fill
        },
        series: m,
        dataLabels: {
          enabled: ((v = n.dataLabels) == null ? void 0 : v.enabled) ?? !1,
          ...n.dataLabels
        },
        tooltip: {
          enabled: !0,
          theme: "dark",
          ...n.tooltip
        },
        grid: {
          show: !0,
          ...n.grid
        }
      };
      return o != null && o.length && (f.labels = o), u != null && u.length && (f.xaxis = { ...n.xaxis, categories: u }), (t === "bar" || t === "column") && (f.plotOptions = {
        ...n.plotOptions,
        bar: {
          ...((d = n.plotOptions) == null ? void 0 : d.bar) || {},
          horizontal: !1
        }
      }), f;
    }, [a, i, n, l]);
    return j(b, () => ({
      zoomIn() {
        var f;
        const t = s.current;
        if (!((f = t == null ? void 0 : t.w) != null && f.globals))
          return;
        const { minX: m, maxX: o } = t.w.globals, u = (o - m) * 0.1;
        t.zoomX(m + u, o - u);
      },
      zoomOut() {
        var f;
        const t = s.current;
        if (!((f = t == null ? void 0 : t.w) != null && f.globals))
          return;
        const { minX: m, maxX: o } = t.w.globals, u = (o - m) * 0.1;
        t.zoomX(m - u, o + u);
      },
      reset() {
        var t;
        (t = s.current) == null || t.resetSeries();
      },
      toggleFullscreen() {
        c.current && (document.fullscreenElement ? document.exitFullscreen() : c.current.requestFullscreen());
      }
    })), C(() => {
      if (y.current)
        return s.current ? s.current.updateOptions(r, !0, !0) : (s.current = new E(y.current, r), s.current.render()), () => {
          var t;
          (t = s.current) == null || t.destroy(), s.current = null;
        };
    }, [r]), /* @__PURE__ */ w(
      "div",
      {
        ref: c,
        style: { height: l, width: "100%", background: "#fff" },
        children: /* @__PURE__ */ w("div", { ref: y })
      }
    );
  }
);
export {
  R as VizlyChart
};
