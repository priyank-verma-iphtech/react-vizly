import { jsxs as C, Fragment as ie, jsx as v } from "react/jsx-runtime";
import x, { forwardRef as oe, useRef as k, useState as le, useMemo as se, useEffect as E, useImperativeHandle as ce } from "react";
import U from "apexcharts";
var J = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, $ = x.createContext && /* @__PURE__ */ x.createContext(J), ue = ["attr", "size", "title"];
function fe(r, e) {
  if (r == null)
    return {};
  var n, a, o = ye(r, e);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(r);
    for (a = 0; a < g.length; a++)
      n = g[a], e.indexOf(n) === -1 && {}.propertyIsEnumerable.call(r, n) && (o[n] = r[n]);
  }
  return o;
}
function ye(r, e) {
  if (r == null)
    return {};
  var n = {};
  for (var a in r)
    if ({}.hasOwnProperty.call(r, a)) {
      if (e.indexOf(a) !== -1)
        continue;
      n[a] = r[a];
    }
  return n;
}
function A() {
  return A = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var a in n)
        ({}).hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, A.apply(null, arguments);
}
function G(r, e) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function z(r) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? G(Object(n), !0).forEach(function(a) {
      ge(r, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(a) {
      Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return r;
}
function ge(r, e, n) {
  return (e = pe(e)) in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function pe(r) {
  var e = me(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function me(r, e) {
  if (typeof r != "object" || !r)
    return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(r, e || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Q(r) {
  return r && r.map((e, n) => /* @__PURE__ */ x.createElement(e.tag, z({
    key: n
  }, e.attr), Q(e.child)));
}
function Y(r) {
  return (e) => /* @__PURE__ */ x.createElement(be, A({
    attr: z({}, r.attr)
  }, e), Q(r.child));
}
function be(r) {
  var e = (n) => {
    var {
      attr: a,
      size: o,
      title: g
    } = r, u = fe(r, ue), s = o || n.size || "1em", i;
    return n.className && (i = n.className), r.className && (i = (i ? i + " " : "") + r.className), /* @__PURE__ */ x.createElement("svg", A({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, u, {
      className: i,
      style: z(z({
        color: r.color || n.color
      }, n.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), g && /* @__PURE__ */ x.createElement("title", null, g), r.children);
  };
  return $ !== void 0 ? /* @__PURE__ */ x.createElement($.Consumer, null, (n) => e(n)) : e(J);
}
function he(r) {
  return Y({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(r);
}
function de(r) {
  return Y({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(r);
}
const Z = {
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
}, ve = (r) => !r || r.length < 6 ? !1 : !isNaN(Date.parse(r)) && /\d{4}|\d{2}[-/]\d{2}/.test(r), q = (r, e) => {
  const n = Z[r] || "xy";
  let a = [], o = [], g = [];
  if (!e || e.length === 0)
    return { series: a, labels: o, categories: g };
  const u = e[0], s = Object.keys(u).filter((t) => typeof u[t] == "number"), i = Object.keys(u).find((t) => typeof u[t] == "string") || "x";
  switch (n) {
    case "circular": {
      a = e.map((t) => Number(t.value ?? t.y ?? t[s[0]] ?? t)), o = e.map((t) => String(t.label ?? t.category ?? t.x ?? ""));
      break;
    }
    case "category": {
      g = e.map(
        (t) => String(t.x ?? t.category ?? t[i])
      ), a = [{
        name: "Series 1",
        data: e.map((t) => Number(t.value ?? t.y ?? t[s[0]] ?? 0))
      }];
      break;
    }
    case "funnel": {
      a = [{
        name: "Series 1",
        data: e.map((t) => ({
          x: String(t.stage ?? t.x ?? t.category ?? t[i]),
          y: Number(t.value ?? t.y ?? t[s[0]] ?? 0)
        }))
      }];
      break;
    }
    case "range": {
      a = [{
        name: "Series 1",
        // ← FIX: was missing, caused crash
        data: e.map((t) => {
          const c = t.y ?? (t.open !== void 0 ? [t.open, t.high, t.low, t.close] : t.min !== void 0 ? [t.min, t.max] : t.start !== void 0 ? [t.start, t.end] : void 0);
          return {
            x: String(t.x ?? t.date ?? t.category ?? t[i]),
            y: c
          };
        })
      }];
      break;
    }
    case "heatmap": {
      a = [...new Set(e.map((c) => c.group ?? "Series 1"))].map((c) => ({
        name: String(c),
        data: e.filter((f) => (f.group ?? "Series 1") === c).map((f) => ({
          x: String(f.x ?? f.category ?? f[i]),
          y: Number(f.value ?? f.y ?? 0)
        }))
      }));
      break;
    }
    case "treemap": {
      a = [{
        name: "Series 1",
        data: e.map((t) => ({
          x: String(t.x ?? t.name ?? t.category ?? t[i]),
          y: Number(t.value ?? t.y ?? t[s[0]] ?? 0)
        }))
      }];
      break;
    }
    default: {
      a = [{
        name: "Series 1",
        data: e.map((t) => {
          const c = {
            x: t.x ?? t[i],
            y: t.y ?? t.value ?? 0
          };
          return ("z" in t || "r" in t) && (c.z = t.z ?? t.r), c;
        })
      }];
      break;
    }
  }
  return { series: a, labels: o, categories: g };
}, I = (r) => {
  if (!r || !Array.isArray(r) || r.length === 0)
    return "bar";
  const e = r[0];
  if (typeof e == "number")
    return "donut";
  if (typeof e != "object" || e === null)
    return "bar";
  if (Array.isArray(e.y)) {
    if (e.y.length === 5)
      return "boxplot";
    if (e.y.length === 4)
      return "candlestick";
    if (e.y.length === 2)
      return "rangebar";
  }
  return e.open !== void 0 && e.close !== void 0 ? "candlestick" : e.min !== void 0 && e.max !== void 0 ? "boxplot" : e.start !== void 0 && e.end !== void 0 ? "rangebar" : "r" in e || "z" in e ? "bubble" : e.stage !== void 0 ? "funnel" : e.group !== void 0 ? "heatmap" : e.name !== void 0 && e.value !== void 0 ? "treemap" : e.label !== void 0 && e.value !== void 0 ? "donut" : typeof e.x == "number" && typeof e.y == "number" ? "scatter" : typeof e.x == "string" && !isNaN(Date.parse(e.x)) ? "line" : "bar";
}, xe = (r, e) => {
  if (!e || !Array.isArray(e) || e.length === 0)
    return [];
  if (Array.isArray(e[0])) {
    const g = e, u = [];
    let s = [], i = [];
    const t = Array.isArray(r) ? r[0] : typeof r == "string" ? r : I(g[0]), c = t === "column" ? "bar" : t ?? "line";
    return g.forEach((f, w) => {
      var l, y;
      const O = Array.isArray(r) ? r[w] ?? r[0] : typeof r == "string" ? r : I(f), m = q(O, f);
      Array.isArray(m.series) && m.series.forEach((b) => {
        u.push({
          ...b,
          // Map "column" → "bar" for ApexCharts series-level type
          type: O === "column" ? "bar" : O,
          name: b.name || `Series ${u.length + 1}`
        });
      }), (((l = m.labels) == null ? void 0 : l.length) ?? 0) > s.length && (s = m.labels), (((y = m.categories) == null ? void 0 : y.length) ?? 0) > i.length && (i = m.categories);
    }), [
      {
        type: c,
        series: u,
        labels: s,
        categories: i
      }
    ];
  }
  const n = e, a = typeof r == "string" ? r : I(n), o = q(a, n);
  return [
    {
      type: a,
      ...o
    }
  ];
}, T = /* @__PURE__ */ new Map();
typeof window < "u" && (window.__vizlyOpen = (r) => {
  var e;
  return (e = T.get(r)) == null ? void 0 : e();
});
let we = 0;
const Ce = oe(
  ({ data: r, type: e, options: n = {}, height: a = 350, title: o }, g) => {
    const u = k(null), s = k(null), i = k(null), t = k(null), [c, f] = le(!1), w = se(() => `vizly-${++we}`, []);
    E(() => (T.set(w, () => f(!0)), () => {
      T.delete(w);
    }), [w]);
    const O = (l) => {
      const y = String(l).toLowerCase();
      return y === "column" || y === "funnel" ? "bar" : y === "rangebar" ? "rangeBar" : y === "boxplot" ? "boxPlot" : y === "polararea" ? "polarArea" : y === "radialbar" ? "radialBar" : y;
    }, m = (l) => {
      var L, M, R, H, B, F, V;
      const y = xe(e, r);
      if (!y || y.length === 0)
        return { series: [] };
      const { type: b, series: h, labels: S, categories: p } = y[0], d = String(b).toLowerCase(), _ = Z[d] || "xy", P = _ === "circular", ee = d === "radar", re = d === "funnel", D = _ === "range";
      let N = h;
      P && (Array.isArray(h) && ((L = h[0]) != null && L.data) ? N = h[0].data : Array.isArray(h) && typeof h[0] == "object" && (N = h.map((j) => j.y ?? j.value ?? 0)));
      const te = P ? S != null && S.length ? S : p != null && p.length ? p : [] : [], ne = (() => ee ? p != null && p.length ? p : S ?? [] : P ? [] : re ? [] : p != null && p.length ? p : [])(), ae = (() => {
        var K, W, X;
        if (!D)
          return "category";
        const j = Array.isArray(h) ? (X = (W = (K = h[0]) == null ? void 0 : K.data) == null ? void 0 : W[0]) == null ? void 0 : X.x : null;
        return j && ve(String(j)) ? "datetime" : "category";
      })();
      return {
        ...n,
        chart: {
          id: l ? "vizly-modal-chart" : "vizly-main-chart",
          type: O(d),
          height: "100%",
          width: "100%",
          // Fix: Containment
          animations: { enabled: !0, speed: 800 },
          toolbar: {
            show: !0,
            // 3
            tools: {
              // FIX 1c — click routes through window.__vizlyOpen(instanceId)
              // instead of a direct closure, so it is never stale.
              // customIcons: isModal ? [] : [{
              //   icon:  expandIconString,
              //   index: 6,
              //   title: "Expand",
              //   class: "custom-icon",
              //   click: () => (window as any).__vizlyOpen?.(instanceId),
              // }],
            }
            // tools: {
            //   customIcons: isModal ? [] : [{
            //     icon: expandIconString, index: 6, title: "Expand", class: "custom-icon",
            //     click: () => setIsModalOpen(true),
            //   }],
            // },
          },
          ...n.chart
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 },
          // Fix: X-axis bleed
          ...n.grid
        },
        series: N,
        labels: te,
        // always [], never undefined
        xaxis: {
          type: D ? ae : "category",
          // ← uses what you computed above
          categories: ne,
          ...n.xaxis
        },
        plotOptions: {
          ...n.plotOptions,
          bar: {
            horizontal: d === "funnel" || d === "rangebar",
            isFunnel: d === "funnel",
            distributed: d === "funnel",
            ...(M = n.plotOptions) == null ? void 0 : M.bar
          },
          heatmap: {
            enableShades: !0,
            colorScale: { ranges: ((B = (H = (R = n.plotOptions) == null ? void 0 : R.heatmap) == null ? void 0 : H.colorScale) == null ? void 0 : B.ranges) || [] }
          }
        },
        title: {
          text: typeof o == "string" ? o : (o == null ? void 0 : o.text) || ((F = n.title) == null ? void 0 : F.text),
          align: typeof o == "object" ? o.align : ((V = n.title) == null ? void 0 : V.align) || "left"
        },
        tooltip: {
          shared: !0,
          intersect: !1,
          theme: "dark",
          ...n.tooltip
        }
      };
    };
    return E(() => {
      let l = !0;
      return (async () => {
        if (i.current && await i.current.destroy(), !l || !u.current)
          return;
        u.current.innerHTML = "";
        const b = m(!1);
        i.current = new U(u.current, b), await i.current.render();
      })(), () => {
        var b;
        l = !1, (b = i.current) == null || b.destroy();
      };
    }, [r, e, n, o]), E(() => {
      if (c && s.current) {
        const l = setTimeout(async () => {
          t.current && await t.current.destroy(), s.current.innerHTML = "", t.current = new U(s.current, m(!0)), await t.current.render();
        }, 350);
        return () => clearTimeout(l);
      }
    }, [c]), ce(g, () => ({
      zoomIn: () => {
        var l;
        return (l = i.current) == null ? void 0 : l.zoomX(20, 80);
      },
      zoomOut: () => {
        var l;
        return (l = i.current) == null ? void 0 : l.resetSeries();
      },
      reset: () => {
        var l;
        return (l = i.current) == null ? void 0 : l.resetSeries();
      },
      toggleFullscreen: () => f(!c)
    })), /* @__PURE__ */ C(ie, { children: [
      /* @__PURE__ */ C(
        "div",
        {
          style: { height: a, width: "100%", position: "relative", overflow: "hidden" },
          children: [
            /* @__PURE__ */ v("div", { ref: u, style: { height: "100%", width: "100%", overflow: "hidden" } }),
            /* @__PURE__ */ v(
              "button",
              {
                onClick: () => f(!0),
                title: "Expand",
                style: {
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  width: "26px",
                  height: "26px"
                },
                children: /* @__PURE__ */ v(he, { size: 12, color: "#555" })
              }
            )
          ]
        }
      ),
      c && /* @__PURE__ */ C("div", { style: {
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
        /* @__PURE__ */ v("style", { children: `
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
          /* @__PURE__ */ v(
            "button",
            {
              onClick: () => f(!1),
              style: { position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" },
              children: /* @__PURE__ */ v(de, { size: 18 })
            }
          ),
          /* @__PURE__ */ v("div", { ref: s, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  Ce as VizlyChart
};
