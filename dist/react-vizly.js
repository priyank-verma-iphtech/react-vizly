import { jsx as O } from "react/jsx-runtime";
import { forwardRef as V, useRef as d, useState as R, useEffect as j, useMemo as X, useImperativeHandle as B } from "react";
import T from "apexcharts";
const C = (a) => {
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
}, q = {
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
}, H = (a, e) => {
  const n = q[a] || "xy";
  let l = [], s = [], h = [];
  if (!e || e.length === 0)
    return { series: l, labels: s, categories: h };
  const g = e[0], i = Object.keys(g).filter(
    (r) => typeof g[r] == "number"
  ), c = Object.keys(g).find(
    (r) => typeof g[r] == "string"
  );
  switch (n) {
    case "circular":
      l = e.map((r) => r.value ?? r.y ?? r), s = e.map(
        (r) => r.label ?? r.category ?? r.name ?? r.x
      );
      break;
    case "category":
      h = e.map((r) => r.x ?? r.category ?? r.stage ?? r[c]), i.length > 1 ? l = i.map((r) => ({
        name: r,
        data: e.map((b) => b[r])
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
        data: e.map((b) => ({
          x: b.x ?? b[c],
          y: b[r]
        }))
      })) : l = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.y
        }))
      }];
  }
  return { series: l, labels: s, categories: h };
}, W = V(
  ({ data: a, type: e, options: n = {}, height: l = 350, title: s }, h) => {
    const g = d(null), i = d(null), c = d(null), [r, b] = R(!1);
    j(() => {
      const t = () => b(!!document.fullscreenElement);
      return document.addEventListener("fullscreenchange", t), () => document.removeEventListener("fullscreenchange", t);
    }, []);
    const u = X(() => e || (Array.isArray(a[0]) ? a.map((t) => C(t)) : C(a)), [a, e]), p = X(() => {
      var A, w, z, S, F, k, E;
      const t = Array.isArray(u) ? String(u[0]).toLowerCase() : String(u).toLowerCase();
      let y = [], o = [], f = [];
      if (Array.isArray(a[0]))
        y = a.map((I, x) => {
          const L = Array.isArray(e) && e[x] || (Array.isArray(u) ? u[x] : u), M = H(L, I);
          return {
            name: `Series ${x + 1}`,
            type: L,
            ...M.series[0]
          };
        });
      else {
        const v = H(u, a);
        y = v.series, o = v.labels, f = v.categories;
      }
      const m = {
        ...n,
        chart: {
          type: t === "funnel" || t === "column" ? "bar" : t,
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
                  icon: r ? '<svg fill="#9ca3af" viewBox="0 0 24 24" width="18" height="18"><path d="M4 14h6v6H8v-4H4v-2zm10 0h6v2h-4v4h-2v-6zM4 4h2v4h4v2H4V4zm10 0h2v4h4v2h-6V4z"/></svg>' : '<svg fill="#9ca3af" viewBox="0 0 1000 1000" width="18" height="18"><path d="M702 82c-35-18-77 3-77 43v80l-160 160c-18 18-18 47 0 65s47 18 65 0l160-160h80c40 0 61-42 43-77L702 82zM298 918c35 18 77-3 77-43v-80l160-160c18-18 18-47 0-65s-47-18-65 0l-160 160h-80c-40 0-61 42-43 77l111 111z"/></svg>',
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
          text: typeof s == "string" ? s : (s == null ? void 0 : s.text) || ((A = n.title) == null ? void 0 : A.text) || void 0,
          align: (typeof s == "object" ? s == null ? void 0 : s.align : (w = n.title) == null ? void 0 : w.align) || "left",
          margin: ((z = n.title) == null ? void 0 : z.margin) || 10,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#263238",
            ...(S = n.title) == null ? void 0 : S.style
          }
        },
        colors: n.colors || [
          "rgba(0, 143, 251, 0.85)",
          "#FEB019",
          "hsl(145, 63%, 42%)",
          "green"
        ],
        fill: {
          type: ((F = n.fill) == null ? void 0 : F.type) || "solid",
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
      return o != null && o.length && (m.labels = o), f != null && f.length && (m.xaxis = { ...n.xaxis, categories: f }), (t === "bar" || t === "column") && (m.plotOptions = {
        ...n.plotOptions,
        bar: {
          ...((E = n.plotOptions) == null ? void 0 : E.bar) || {},
          horizontal: !1
        }
      }), m;
    }, [a, u, n, l, s]);
    return B(h, () => ({
      zoomIn() {
        var m;
        const t = c.current;
        if (!((m = t == null ? void 0 : t.w) != null && m.globals))
          return;
        const { minX: y, maxX: o } = t.w.globals, f = (o - y) * 0.1;
        t.zoomX(y + f, o - f);
      },
      zoomOut() {
        var m;
        const t = c.current;
        if (!((m = t == null ? void 0 : t.w) != null && m.globals))
          return;
        const { minX: y, maxX: o } = t.w.globals, f = (o - y) * 0.1;
        t.zoomX(y - f, o + f);
      },
      reset() {
        var t;
        (t = c.current) == null || t.resetSeries();
      },
      toggleFullscreen() {
        i.current && (document.fullscreenElement ? document.exitFullscreen() : i.current.requestFullscreen());
      }
    })), j(() => {
      if (g.current)
        return c.current ? c.current.updateOptions(p, !0, !0) : (c.current = new T(g.current, p), c.current.render()), () => {
          var t;
          (t = c.current) == null || t.destroy(), c.current = null;
        };
    }, [p]), /* @__PURE__ */ O(
      "div",
      {
        ref: i,
        style: { height: l, width: "100%", background: "#fff" },
        children: /* @__PURE__ */ O("div", { ref: g })
      }
    );
  }
);
export {
  W as VizlyChart
};
