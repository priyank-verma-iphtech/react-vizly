import { jsx as V } from "react/jsx-runtime";
import { forwardRef as X, useRef as x, useMemo as F, useImperativeHandle as E, useEffect as I } from "react";
import R from "apexcharts";
const O = (a) => {
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
}, M = {
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
}, j = (a, e) => {
  const n = M[a] || "xy";
  let l = [], s = [], b = [];
  if (!e || e.length === 0)
    return { series: l, labels: s, categories: b };
  const g = e[0], i = Object.keys(g).filter(
    (r) => typeof g[r] == "number"
  ), o = Object.keys(g).find(
    (r) => typeof g[r] == "string"
  );
  switch (n) {
    case "circular":
      l = e.map((r) => r.value ?? r.y ?? r), s = e.map(
        (r) => r.label ?? r.category ?? r.name ?? r.x
      );
      break;
    case "category":
      b = e.map((r) => r.x ?? r.category ?? r.stage ?? r[o]), i.length > 1 ? l = i.map((r) => ({
        name: r,
        data: e.map((m) => m[r])
      })) : l = [{
        name: i[0] || "Series 1",
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
      }] : i.length > 1 ? l = i.map((r) => ({
        name: r,
        data: e.map((m) => ({
          x: m.x ?? m[o],
          y: m[r]
        }))
      })) : l = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.y
        }))
      }];
  }
  return { series: l, labels: s, categories: b };
}, D = X(
  ({ data: a, type: e, options: n = {}, height: l = 350, title: s }, b) => {
    const g = x(null), i = x(null), o = x(null), r = F(() => e || (Array.isArray(a[0]) ? a.map((t) => O(t)) : O(a)), [a, e]), m = F(() => {
      var v, d, A, w, z, k, S;
      const t = Array.isArray(r) ? String(r[0]).toLowerCase() : String(r).toLowerCase();
      let y = [], c = [], u = [];
      if (Array.isArray(a[0]))
        y = a.map((C, p) => {
          const L = Array.isArray(e) && e[p] || (Array.isArray(r) ? r[p] : r), H = j(L, C);
          return {
            name: `Series ${p + 1}`,
            type: L,
            ...H.series[0]
          };
        });
      else {
        const h = j(r, a);
        y = h.series, c = h.labels, u = h.categories;
      }
      const f = {
        ...n,
        chart: {
          type: t === "column" ? "bar" : t,
          height: "100%",
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
                  icon: `<svg stroke="currentColor" fill="#9ca3af" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="display:block; margin: 3px; color: #666;">
                  <path d="M5.828 10.172L3 13V10H2v4h4v-1H3l2.828-2.828-1.414-1.414zm4.344 0l1.414 1.414L13 10.172V13h1V9h-4v1h3l-2.828 1.172zM5.828 5.828L3 3v3H2V2h4v1H3l2.828 2.828-1.414-1.414zm4.344 0l1.414-1.414L13 5.828V3h1v4h-4V6h3l-2.828-2.828z"></path>
                </svg>`,
                  index: 6,
                  title: "Full View",
                  class: "custom-fullscreen-icon",
                  click: () => {
                    i.current && (document.fullscreenElement ? document.exitFullscreen() : i.current.requestFullscreen());
                  }
                }
              ]
            },
            autoSelected: "zoom"
          },
          animations: { enabled: !0 },
          ...n.chart
        },
        title: {
          text: typeof s == "string" ? s : (s == null ? void 0 : s.text) || ((v = n.title) == null ? void 0 : v.text) || void 0,
          align: (typeof s == "object" ? s == null ? void 0 : s.align : (d = n.title) == null ? void 0 : d.align) || "left",
          margin: ((A = n.title) == null ? void 0 : A.margin) || 10,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#263238",
            ...(w = n.title) == null ? void 0 : w.style
          }
        },
        colors: n.colors || [
          "rgba(0, 143, 251, 0.85)",
          "#FEB019",
          "hsl(145, 63%, 42%)",
          "green"
        ],
        fill: {
          type: ((z = n.fill) == null ? void 0 : z.type) || "solid",
          ...n.fill
        },
        series: y,
        dataLabels: {
          enabled: ((k = n.dataLabels) == null ? void 0 : k.enabled) ?? !1,
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
      return c != null && c.length && (f.labels = c), u != null && u.length && (f.xaxis = { ...n.xaxis, categories: u }), (t === "bar" || t === "column") && (f.plotOptions = {
        ...n.plotOptions,
        bar: {
          ...((S = n.plotOptions) == null ? void 0 : S.bar) || {},
          horizontal: !1
        }
      }), f;
    }, [a, r, n, l, s]);
    return E(b, () => ({
      zoomIn() {
        var f;
        const t = o.current;
        if (!((f = t == null ? void 0 : t.w) != null && f.globals))
          return;
        const { minX: y, maxX: c } = t.w.globals, u = (c - y) * 0.1;
        t.zoomX(y + u, c - u);
      },
      zoomOut() {
        var f;
        const t = o.current;
        if (!((f = t == null ? void 0 : t.w) != null && f.globals))
          return;
        const { minX: y, maxX: c } = t.w.globals, u = (c - y) * 0.1;
        t.zoomX(y - u, c + u);
      },
      reset() {
        var t;
        (t = o.current) == null || t.resetSeries();
      },
      toggleFullscreen() {
        i.current && (document.fullscreenElement ? document.exitFullscreen() : i.current.requestFullscreen());
      }
    })), I(() => {
      if (g.current)
        return o.current ? o.current.updateOptions(m, !0, !0) : (o.current = new R(g.current, m), o.current.render()), () => {
          var t;
          (t = o.current) == null || t.destroy(), o.current = null;
        };
    }, [m]), /* @__PURE__ */ V(
      "div",
      {
        ref: i,
        style: { height: l, width: "100%", background: "#fff" },
        children: /* @__PURE__ */ V("div", { ref: g })
      }
    );
  }
);
export {
  D as VizlyChart
};
