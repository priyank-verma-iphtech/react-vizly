import { jsx as R } from "react/jsx-runtime";
import { forwardRef as V, useRef as d, useState as T, useEffect as X, useMemo as B, useImperativeHandle as q } from "react";
import D from "apexcharts";
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
}, K = {
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
  const n = K[a] || "xy";
  let l = [], s = [], h = [];
  if (!e || e.length === 0)
    return { series: l, labels: s, categories: h };
  const b = e[0], c = Object.keys(b).filter(
    (r) => typeof b[r] == "number"
  ), u = Object.keys(b).find(
    (r) => typeof b[r] == "string"
  );
  switch (n) {
    case "circular":
      l = e.map((r) => r.value ?? r.y ?? r), s = e.map(
        (r) => r.label ?? r.category ?? r.name ?? r.x
      );
      break;
    case "category":
      h = e.map((r) => r.x ?? r.category ?? r.stage ?? r[u]), c.length > 1 ? l = c.map((r) => ({
        name: r,
        data: e.map((g) => g[r])
      })) : l = [{
        name: c[0] || "Series 1",
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
      }] : c.length > 1 ? l = c.map((r) => ({
        name: r,
        data: e.map((g) => ({
          x: g.x ?? g[u],
          y: g[r]
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
}, G = V(
  ({ data: a, type: e, options: n = {}, height: l = 350, title: s }, h) => {
    const b = d(null), c = d(null), u = d(null), [r, g] = T(!1);
    X(() => {
      const t = () => g(!!document.fullscreenElement);
      return document.addEventListener("fullscreenchange", t), () => document.removeEventListener("fullscreenchange", t);
    }, []);
    const i = B(() => e || (Array.isArray(a[0]) ? a.map((t) => C(t)) : C(a)), [a, e]), x = B(() => {
      var A, w, z, O, S, F, k, E, L;
      const t = Array.isArray(i) ? String(i[0]).toLowerCase() : String(i).toLowerCase();
      let y = [], o = [], f = [];
      if (Array.isArray(a[0]))
        y = a.map((I, v) => {
          const j = Array.isArray(e) && e[v] || (Array.isArray(i) ? i[v] : i), M = H(j, I);
          return {
            name: `Series ${v + 1}`,
            type: j,
            ...M.series[0]
          };
        });
      else {
        const p = H(i, a);
        y = p.series, o = p.labels, f = p.categories;
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
        title: {
          text: typeof s == "string" ? s : (s == null ? void 0 : s.text) || ((A = n.title) == null ? void 0 : A.text) || void 0,
          align: (typeof s == "object" ? s == null ? void 0 : s.align : (w = n.title) == null ? void 0 : w.align) || "left",
          margin: ((z = n.title) == null ? void 0 : z.margin) || 10,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#263238",
            ...(O = n.title) == null ? void 0 : O.style
          }
        },
        colors: n.colors || [
          "rgba(0, 143, 251, 0.85)",
          "#FEB019",
          "hsl(145, 63%, 42%)",
          "green"
        ],
        fill: {
          type: ((S = n.fill) == null ? void 0 : S.type) || "solid",
          ...n.fill
        },
        series: y,
        dataLabels: {
          enabled: ((F = n.dataLabels) == null ? void 0 : F.enabled) ?? !1,
          ...n.dataLabels
        },
        plotOptions: {
          ...n.plotOptions,
          bar: {
            horizontal: t === "funnel" || t === "rangebar",
            isFunnel: t === "funnel",
            ...(k = n.plotOptions) == null ? void 0 : k.bar
          },
          bubble: {
            minBubbleRadius: 5,
            maxBubbleRadius: 20,
            ...(E = n.plotOptions) == null ? void 0 : E.bubble
          }
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
          ...((L = n.plotOptions) == null ? void 0 : L.bar) || {},
          horizontal: !1
        }
      }), m;
    }, [a, i, n, l, s]);
    return q(h, () => ({
      zoomIn() {
        var m;
        const t = u.current;
        if (!((m = t == null ? void 0 : t.w) != null && m.globals))
          return;
        const { minX: y, maxX: o } = t.w.globals, f = (o - y) * 0.1;
        t.zoomX(y + f, o - f);
      },
      zoomOut() {
        var m;
        const t = u.current;
        if (!((m = t == null ? void 0 : t.w) != null && m.globals))
          return;
        const { minX: y, maxX: o } = t.w.globals, f = (o - y) * 0.1;
        t.zoomX(y - f, o + f);
      },
      reset() {
        var t;
        (t = u.current) == null || t.resetSeries();
      },
      toggleFullscreen() {
        c.current && (document.fullscreenElement ? document.exitFullscreen() : c.current.requestFullscreen());
      }
    })), X(() => {
      if (b.current)
        return u.current ? u.current.updateOptions(x, !0, !0) : (u.current = new D(b.current, x), u.current.render()), () => {
          var t;
          (t = u.current) == null || t.destroy(), u.current = null;
        };
    }, [x]), /* @__PURE__ */ R(
      "div",
      {
        ref: c,
        style: { height: l, width: "100%", background: "#fff" },
        children: /* @__PURE__ */ R("div", { ref: b })
      }
    );
  }
);
export {
  G as VizlyChart
};
