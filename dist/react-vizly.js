import { jsxs as C, jsx as d } from "react/jsx-runtime";
import f, { forwardRef as B, useRef as h, useState as E, useMemo as D, useCallback as S, useImperativeHandle as R, useEffect as O } from "react";
import z from "apexcharts";
var I = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, P = f.createContext && /* @__PURE__ */ f.createContext(I), M = ["attr", "size", "title"];
function _(e, t) {
  if (e == null)
    return {};
  var r, n, s = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (n = 0; n < c.length; n++)
      r = c[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
  }
  return s;
}
function A(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1)
        continue;
      r[n] = e[n];
    }
  return r;
}
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, y.apply(null, arguments);
}
function L(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? L(Object(r), !0).forEach(function(n) {
      T(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T(e, t, r) {
  return (t = V(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V(e) {
  var t = X(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function X(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k(e) {
  return e && e.map((t, r) => /* @__PURE__ */ f.createElement(t.tag, x({
    key: r
  }, t.attr), k(t.child)));
}
function N(e) {
  return (t) => /* @__PURE__ */ f.createElement(H, y({
    attr: x({}, e.attr)
  }, t), k(e.child));
}
function H(e) {
  var t = (r) => {
    var {
      attr: n,
      size: s,
      title: c
    } = e, m = _(e, M), i = s || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ f.createElement("svg", y({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, m, {
      className: l,
      style: x(x({
        color: e.color || r.color
      }, r.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ f.createElement("title", null, c), e.children);
  };
  return P !== void 0 ? /* @__PURE__ */ f.createElement(P.Consumer, null, (r) => t(r)) : t(I);
}
function W(e) {
  return N({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function Z(e) {
  return N({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
const F = (e) => {
  if (!e || e.length === 0)
    return "bar";
  const t = e[0];
  return typeof t == "number" ? "donut" : (t == null ? void 0 : t.x) !== void 0 && (t == null ? void 0 : t.y) !== void 0 ? t.x instanceof Date || !isNaN(Date.parse(t.x)) && isNaN(t.x) ? "area" : Array.isArray(t.y) ? "rangeBar" : "line" : (t == null ? void 0 : t.label) !== void 0 && (t == null ? void 0 : t.value) !== void 0 ? "donut" : "bar";
}, te = B(
  ({ data: e, type: t, options: r = {}, height: n = 350 }, s) => {
    const c = h(null), m = h(null), i = h(null), l = h(null), [v, j] = E(!1), b = D(() => t || F(e), [e, t]), w = S((o, a) => ["pie", "donut", "radialBar"].includes(a) ? o.map((u) => typeof u == "object" ? u.value : u) : [{ name: "Series 1", data: o }], []);
    R(s, () => ({
      zoomIn: () => {
        if (!i.current)
          return;
        const o = i.current, { min: a, max: p } = o.w.globals.lastXAxis || {
          min: o.w.globals.minX,
          max: o.w.globals.maxX
        }, u = (p - a) * 0.2;
        i.current.zoomX(a + u, p - u);
      },
      zoomOut: () => {
        var o;
        return (o = i.current) == null ? void 0 : o.resetSeries();
      },
      filter: (o) => {
        var a;
        (a = i.current) == null || a.updateSeries(w(o, b));
      },
      reset: () => {
        var o;
        return (o = i.current) == null ? void 0 : o.resetSeries();
      },
      download: (o) => {
        const a = l.current || i.current;
        a == null || a.exports.exportToCSV();
      }
    }));
    const g = S((o, a) => {
      var p;
      return {
        ...r,
        chart: {
          ...r.chart,
          type: b,
          height: o,
          toolbar: {
            show: !0,
            // This enables the built-in Download/Zoom/Pan buttons
            tools: {
              download: !0,
              // This adds the 'hamburger' menu for PNG/SVG/CSV
              selection: !0,
              zoom: !0,
              zoomin: !0,
              zoomout: !0,
              pan: !0,
              reset: !0
            },
            autoSelected: "zoom"
          },
          animations: { enabled: !0, easing: "easeinout", speed: 800 }
        },
        series: w(e, b),
        labels: r.labels || ((p = e[0]) != null && p.label ? e.map((u) => u.label) : void 0),
        theme: { mode: "light" }
      };
    }, [e, b, r, w]);
    return O(() => {
      if (!c.current)
        return;
      const o = g(n, !1);
      i.current ? i.current.updateOptions(o) : (i.current = new z(c.current, o), i.current.render());
    }, [g, n]), O(() => {
      if (v && m.current) {
        const o = g("100%", !0);
        l.current = new z(m.current, o), l.current.render();
      }
      return () => {
        var o;
        (o = l.current) == null || o.destroy(), l.current = null;
      };
    }, [v, g]), O(() => () => {
      var o;
      return (o = i.current) == null ? void 0 : o.destroy();
    }, []), /* @__PURE__ */ C("div", { style: K, children: [
      /* @__PURE__ */ d("button", { onClick: () => j(!0), style: q, title: "Full Screen", children: /* @__PURE__ */ d(W, { size: 20 }) }),
      /* @__PURE__ */ d("div", { ref: c }),
      v && /* @__PURE__ */ d("div", { style: G, children: /* @__PURE__ */ C("div", { style: J, children: [
        /* @__PURE__ */ C("div", { style: Q, children: [
          /* @__PURE__ */ d("h3", { style: { margin: 0, fontSize: "1.2rem" }, children: "Detailed Visualization" }),
          /* @__PURE__ */ d("button", { onClick: () => j(!1), style: U, children: /* @__PURE__ */ d(Z, { size: 22 }) })
        ] }),
        /* @__PURE__ */ d("div", { ref: m, style: { flex: 1, width: "100%" } })
      ] }) })
    ] });
  }
), K = {
  position: "relative",
  width: "100%",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "15px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
}, q = {
  position: "absolute",
  right: "15px",
  top: "15px",
  zIndex: 10,
  background: "#f8fafc",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "6px",
  display: "flex",
  alignItems: "center",
  color: "#475569",
  transition: "all 0.2s"
}, G = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(15, 23, 42, 0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  backdropFilter: "blur(4px)"
}, J = {
  width: "90%",
  height: "85%",
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
}, Q = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  paddingBottom: "15px",
  borderBottom: "1px solid #f1f5f9"
}, U = {
  background: "#f1f5f9",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#64748b"
};
export {
  te as VizlyChart
};
