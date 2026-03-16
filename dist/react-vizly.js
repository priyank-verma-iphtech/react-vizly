import { jsxs as C, Fragment as Z, jsx as y } from "react/jsx-runtime";
import { forwardRef as _, useRef as I, useState as K, useCallback as ee, useEffect as P, useImperativeHandle as re } from "react";
import W from "apexcharts";
const q = {
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  bar: "category",
  column: "category",
  radar: "category",
  funnel: "category",
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  polararea: "circular",
  rangebar: "range",
  candlestick: "range",
  boxplot: "range",
  heatmap: "heatmap",
  treemap: "treemap"
}, $ = (a, r) => {
  const i = q[a] || "xy";
  let l = [], c = [], m = [];
  if (!r || r.length === 0)
    return { series: l, labels: c, categories: m };
  const f = r[0], p = Object.keys(f).filter((e) => typeof f[e] == "number"), n = Object.keys(f).find((e) => typeof f[e] == "string") || "x";
  switch (i) {
    case "circular": {
      l = r.map((e) => Number(e.value ?? e.y ?? e[p[0]] ?? e)), c = r.map((e) => String(e.label ?? e.category ?? e.x ?? ""));
      break;
    }
    case "category": {
      m = r.map(
        (e) => String(e.x ?? e.category ?? e[n])
      ), l = [{
        name: "Series 1",
        data: r.map((e) => Number(e.value ?? e.y ?? e[p[0]] ?? 0))
      }];
      break;
    }
    case "funnel": {
      l = [{
        name: "Series 1",
        data: r.map((e) => ({
          x: String(e.stage ?? e.x ?? e.category ?? e[n]),
          y: Number(e.value ?? e.y ?? e[p[0]] ?? 0)
        }))
      }];
      break;
    }
    case "range": {
      l = [{
        name: "Series 1",
        // ← FIX: was missing, caused crash
        data: r.map((e) => {
          const o = e.y ?? (e.open !== void 0 ? [e.open, e.high, e.low, e.close] : e.min !== void 0 ? [e.min, e.max] : e.start !== void 0 ? [e.start, e.end] : void 0);
          return {
            x: String(e.x ?? e.date ?? e.category ?? e[n]),
            y: o
          };
        })
      }];
      break;
    }
    case "heatmap": {
      l = [...new Set(r.map((o) => o.group ?? "Series 1"))].map((o) => ({
        name: String(o),
        data: r.filter((u) => (u.group ?? "Series 1") === o).map((u) => ({
          x: String(u.x ?? u.category ?? u[n]),
          y: Number(u.value ?? u.y ?? 0)
        }))
      }));
      break;
    }
    case "treemap": {
      l = [{
        name: "Series 1",
        data: r.map((e) => ({
          x: String(e.x ?? e.name ?? e.category ?? e[n]),
          y: Number(e.value ?? e.y ?? e[p[0]] ?? 0)
        }))
      }];
      break;
    }
    default: {
      l = [{
        name: "Series 1",
        data: r.map((e) => {
          const o = {
            x: e.x ?? e[n],
            y: e.y ?? e.value ?? 0
          };
          return ("z" in e || "r" in e) && (o.z = e.z ?? e.r), o;
        })
      }];
      break;
    }
  }
  return { series: l, labels: c, categories: m };
}, T = (a) => {
  if (!a || !Array.isArray(a) || a.length === 0)
    return "bar";
  const r = a[0];
  if (typeof r == "number")
    return "donut";
  if (typeof r != "object" || r === null)
    return "bar";
  if (Array.isArray(r.y)) {
    if (r.y.length === 5)
      return "boxplot";
    if (r.y.length === 4)
      return "candlestick";
    if (r.y.length === 2)
      return "rangebar";
  }
  return r.open !== void 0 && r.close !== void 0 ? "candlestick" : r.min !== void 0 && r.max !== void 0 ? "boxplot" : r.start !== void 0 && r.end !== void 0 ? "rangebar" : "r" in r || "z" in r ? "bubble" : r.stage !== void 0 ? "funnel" : r.group !== void 0 ? "heatmap" : r.name !== void 0 && r.value !== void 0 ? "treemap" : r.label !== void 0 && r.value !== void 0 ? "donut" : typeof r.x == "number" && typeof r.y == "number" ? "scatter" : typeof r.x == "string" && !isNaN(Date.parse(r.x)) ? "line" : "bar";
}, te = (a, r) => {
  if (!r || !Array.isArray(r) || r.length === 0)
    return [];
  if (Array.isArray(r[0])) {
    const m = r, f = [];
    let p = [], n = [];
    const e = Array.isArray(a) ? a[0] : typeof a == "string" ? a : T(m[0]), o = e === "column" ? "bar" : e ?? "line";
    return m.forEach((u, S) => {
      var d, t;
      const x = Array.isArray(a) ? a[S] ?? a[0] : typeof a == "string" ? a : T(u), b = $(x, u);
      Array.isArray(b.series) && b.series.forEach((s) => {
        f.push({
          ...s,
          // Map "column" → "bar" for ApexCharts series-level type
          type: x === "column" ? "bar" : x,
          name: s.name || `Series ${f.length + 1}`
        });
      }), (((d = b.labels) == null ? void 0 : d.length) ?? 0) > p.length && (p = b.labels), (((t = b.categories) == null ? void 0 : t.length) ?? 0) > n.length && (n = b.categories);
    }), [
      {
        type: o,
        series: f,
        labels: p,
        categories: n
      }
    ];
  }
  const i = r, l = typeof a == "string" ? a : T(i), c = $(l, i);
  return [
    {
      type: l,
      ...c
    }
  ];
}, ae = () => /* @__PURE__ */ y(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 13,
    height: 13,
    viewBox: "0 0 16 16",
    fill: "#555",
    "aria-hidden": "true",
    children: /* @__PURE__ */ y(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
      }
    )
  }
), ne = () => /* @__PURE__ */ y(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "#444",
    "aria-hidden": "true",
    children: /* @__PURE__ */ y(
      "path",
      {
        fillRule: "evenodd",
        d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707zM.172.172a.5.5 0 0 1 .707 0l4.096 4.096V1.5a.5.5 0 0 1 1 0v3.975a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1 0-1h2.768L.172.879a.5.5 0 0 1 0-.707zM15.828 15.828a.5.5 0 0 1-.707 0l-4.096-4.096V14.5a.5.5 0 0 1-1 0v-3.975a.5.5 0 0 1 .5-.5H14.5a.5.5 0 0 1 0 1h-2.768l4.096 4.096a.5.5 0 0 1 0 .707z"
      }
    )
  }
), le = _(
  ({ data: a, type: r, options: i = {}, height: l = 350, title: c }, m) => {
    const f = I(null), p = I(null), n = I(null), e = I(null), [o, u] = K(!1), [S, x] = K(!1), b = (t) => {
      const s = String(t).toLowerCase();
      return s === "column" ? "bar" : s === "rangebar" ? "rangeBar" : s === "funnel" ? "bar" : s === "boxplot" ? "boxPlot" : s === "polararea" ? "polarArea" : s === "radialbar" ? "radialBar" : s;
    }, d = ee((t) => {
      var j, N, O, E, F, B, D;
      const s = te(r, a);
      if (!s || s.length === 0)
        return { series: [] };
      const { type: v, series: h, labels: z, categories: g } = s[0], k = String(v).toLowerCase(), L = q[k] || "xy", V = L === "circular", G = k === "radar", A = k === "funnel", R = L === "range";
      let H = h;
      V && (Array.isArray(h) && ((j = h[0]) != null && j.data) ? H = h[0].data : Array.isArray(h) && typeof h[0] == "object" && (H = h.map((w) => w.y ?? w.value ?? 0)));
      const J = V ? z != null && z.length ? z : g != null && g.length ? g : [] : [], Q = (() => G ? g != null && g.length ? g : z ?? [] : V ? [] : A ? [] : g != null && g.length ? g : [])(), Y = (() => {
        var M, X, U;
        if (!R)
          return "category";
        const w = Array.isArray(h) ? (U = (X = (M = h[0]) == null ? void 0 : M.data) == null ? void 0 : X[0]) == null ? void 0 : U.x : null;
        return w && !isNaN(Date.parse(String(w))) && /\d{4}|\d{2}[-/]\d{2}/.test(String(w)) ? "datetime" : "category";
      })();
      return {
        ...i,
        chart: {
          id: t ? "vizly-modal-chart" : "vizly-main-chart",
          type: b(k),
          height: "100%",
          width: "100%",
          animations: { enabled: !0, speed: 800 },
          toolbar: {
            // CHANGED: toolbar.show false for inline chart, true for modal.
            // customIcons removed entirely — React button overlay handles
            // expand for ALL chart types without ApexCharts involvement.
            show: t,
            tools: {
              download: t,
              selection: t,
              zoom: t,
              zoomin: t,
              zoomout: t,
              pan: t,
              reset: t,
              customIcons: []
              // always empty
            }
          },
          ...i.chart
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 },
          ...i.grid
        },
        series: H,
        labels: J,
        xaxis: {
          type: R ? Y : "category",
          categories: Q,
          ...i.xaxis
        },
        plotOptions: {
          ...i.plotOptions,
          bar: {
            horizontal: A || k === "rangebar",
            isFunnel: A,
            distributed: A,
            ...(N = i.plotOptions) == null ? void 0 : N.bar
          },
          heatmap: {
            enableShades: !0,
            colorScale: { ranges: ((F = (E = (O = i.plotOptions) == null ? void 0 : O.heatmap) == null ? void 0 : E.colorScale) == null ? void 0 : F.ranges) || [] }
          }
        },
        title: {
          text: typeof c == "string" ? c : (c == null ? void 0 : c.text) || ((B = i.title) == null ? void 0 : B.text),
          align: typeof c == "object" ? c.align : ((D = i.title) == null ? void 0 : D.align) || "left"
        },
        tooltip: {
          shared: !0,
          intersect: !1,
          theme: "dark",
          ...i.tooltip
        }
      };
    }, [a, r, i, c]);
    return P(() => {
      let t = !0;
      return (async () => {
        if (n.current && await n.current.destroy(), !t || !f.current)
          return;
        f.current.innerHTML = "";
        const v = d(!1);
        n.current = new W(f.current, v), await n.current.render();
      })(), () => {
        var v;
        t = !1, (v = n.current) == null || v.destroy();
      };
    }, [d]), P(() => {
      if (o && p.current) {
        const t = setTimeout(async () => {
          e.current && await e.current.destroy(), p.current.innerHTML = "", e.current = new W(p.current, d(!0)), await e.current.render();
        }, 350);
        return () => clearTimeout(t);
      }
    }, [o, d]), re(m, () => ({
      zoomIn: () => {
        var t;
        return (t = n.current) == null ? void 0 : t.zoomX(20, 80);
      },
      zoomOut: () => {
        var t;
        return (t = n.current) == null ? void 0 : t.resetSeries();
      },
      reset: () => {
        var t;
        return (t = n.current) == null ? void 0 : t.resetSeries();
      },
      toggleFullscreen: () => u(!o)
    })), // CHANGED: wrapper gets onMouseEnter/Leave + position:relative
    // (it already had position:relative so that part is the same)
    /* @__PURE__ */ C(Z, { children: [
      /* @__PURE__ */ C(
        "div",
        {
          style: { height: l, width: "100%", position: "relative", overflow: "hidden" },
          onMouseEnter: () => x(!0),
          onMouseLeave: () => x(!1),
          children: [
            /* @__PURE__ */ y("div", { ref: f, style: { height: "100%", width: "100%", overflow: "hidden" } }),
            /* @__PURE__ */ y(
              "button",
              {
                onClick: () => u(!0),
                title: "Expand",
                style: {
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  border: "0.5px solid rgba(0,0,0,0.12)",
                  borderRadius: "6px",
                  cursor: "pointer",
                  zIndex: 10,
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  // fade + scale in on hover, invisible otherwise
                  opacity: S ? 1 : 0,
                  transform: S ? "scale(1)" : "scale(0.82)",
                  transition: "opacity 0.15s ease, transform 0.15s ease",
                  pointerEvents: S ? "auto" : "none"
                },
                children: /* @__PURE__ */ y(ae, {})
              }
            )
          ]
        }
      ),
      o && /* @__PURE__ */ C("div", { style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "vizlyFadeIn 0.1s ease-out",
        backdropFilter: "blur(5px)"
      }, children: [
        /* @__PURE__ */ y("style", { children: `
              @keyframes vizlyFadeIn  { from { opacity: 0; } to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            ` }),
        /* @__PURE__ */ C("div", { style: {
          width: "90%",
          height: "80%",
          background: "#fff",
          borderRadius: "16px",
          padding: "40px",
          position: "relative",
          animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }, children: [
          /* @__PURE__ */ y(
            "button",
            {
              onClick: () => u(!1),
              style: { position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" },
              children: /* @__PURE__ */ y(ne, {})
            }
          ),
          /* @__PURE__ */ y("div", { ref: p, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  le as VizlyChart
};
