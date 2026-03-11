import { jsxs as O, jsx as d } from "react/jsx-runtime";
import f, { forwardRef as D, useRef as g, useState as E, useMemo as R, useCallback as S, useImperativeHandle as A, useEffect as P } from "react";
import z from "apexcharts";
var I = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, L = f.createContext && /* @__PURE__ */ f.createContext(I), _ = ["attr", "size", "title"];
function M(e, t) {
  if (e == null)
    return {};
  var r, n, s = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (n = 0; n < c.length; n++)
      r = c[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
  }
  return s;
}
function T(e, t) {
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
function h() {
  return h = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, h.apply(null, arguments);
}
function N(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? N(Object(r), !0).forEach(function(n) {
      V(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V(e, t, r) {
  return (t = X(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X(e) {
  var t = H(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function H(e, t) {
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
  return e && e.map((t, r) => /* @__PURE__ */ f.createElement(t.tag, p({
    key: r
  }, t.attr), k(t.child)));
}
function B(e) {
  return (t) => /* @__PURE__ */ f.createElement(W, h({
    attr: p({}, e.attr)
  }, t), k(e.child));
}
function W(e) {
  var t = (r) => {
    var {
      attr: n,
      size: s,
      title: c
    } = e, m = M(e, _), a = s || r.size || "1em", o;
    return r.className && (o = r.className), e.className && (o = (o ? o + " " : "") + e.className), /* @__PURE__ */ f.createElement("svg", h({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, m, {
      className: o,
      style: p(p({
        color: e.color || r.color
      }, r.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ f.createElement("title", null, c), e.children);
  };
  return L !== void 0 ? /* @__PURE__ */ f.createElement(L.Consumer, null, (r) => t(r)) : t(I);
}
function Z(e) {
  return B({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function F(e) {
  return B({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
const K = (e) => {
  if (!Array.isArray(e) || e.length === 0)
    return "bar";
  const t = e[0];
  return typeof t == "number" ? "donut" : (t == null ? void 0 : t.x) !== void 0 && (t == null ? void 0 : t.y) !== void 0 ? t.x instanceof Date || typeof t.x == "string" && isNaN(Number(t.x)) && !isNaN(Date.parse(t.x)) ? "area" : Array.isArray(t.y) ? "rangeBar" : (t == null ? void 0 : t.z) !== void 0 ? "bubble" : "line" : (t == null ? void 0 : t.label) !== void 0 && (t == null ? void 0 : t.value) !== void 0 ? "donut" : "bar";
}, re = D(
  ({ data: e, type: t, options: r = {}, height: n = 350 }, s) => {
    const c = g(null), m = g(null), a = g(null), o = g(null), [v, j] = E(!1), y = R(() => t || K(e), [e, t]), x = S((i, l) => {
      const u = Array.isArray(i) ? i : [];
      return ["pie", "donut", "radialBar"].includes(l) ? u.length > 0 ? u.map((C) => typeof C == "object" ? C.value : C) : [] : [{ name: (r == null ? void 0 : r.seriesName) || "Series 1", data: u }];
    }, [r == null ? void 0 : r.seriesName]);
    A(s, () => ({
      zoomIn: () => {
        const i = a.current;
        if (!(i != null && i.w))
          return;
        const { min: l, max: u } = i.w.globals.lastXAxis || { min: i.w.globals.minX, max: i.w.globals.maxX }, w = (u - l) * 0.2;
        i.zoomX(l + w, u - w);
      },
      zoomOut: () => {
        var i;
        return (i = a.current) == null ? void 0 : i.resetSeries();
      },
      filter: (i) => {
        var l;
        (l = a.current) == null || l.updateSeries(x(i, y));
      },
      reset: () => {
        var i;
        return (i = a.current) == null ? void 0 : i.resetSeries();
      }
    }));
    const b = S((i) => {
      var l;
      return {
        ...r,
        chart: {
          toolbar: { show: !0 },
          ...r.chart,
          type: y,
          height: i
        },
        series: x(e, y),
        labels: r.labels || ((l = e[0]) != null && l.label ? e.map((u) => u.label) : void 0)
      };
    }, [e, y, r, x]);
    return P(() => {
      if (!c.current)
        return;
      const i = b(n);
      if (a.current)
        a.current.updateOptions(i, !1, !0);
      else {
        const l = new z(c.current, i);
        a.current = l, l.render().catch(() => {
        });
      }
      return () => {
        a.current && (a.current.destroy(), a.current = null);
      };
    }, [b, n]), P(() => {
      if (v && m.current) {
        const i = b("100%");
        o.current = new z(m.current, i), o.current.render().catch(() => {
        });
      }
      return () => {
        o.current && (o.current.destroy(), o.current = null);
      };
    }, [v, b]), /* @__PURE__ */ O("div", { style: q, children: [
      /* @__PURE__ */ d("button", { onClick: () => j(!0), style: G, title: "Full Screen", children: /* @__PURE__ */ d(Z, { size: 20 }) }),
      /* @__PURE__ */ d("div", { ref: c }),
      v && /* @__PURE__ */ d("div", { style: J, children: /* @__PURE__ */ O("div", { style: Q, children: [
        /* @__PURE__ */ O("div", { style: U, children: [
          /* @__PURE__ */ d("h3", { style: { margin: 0 }, children: "Detailed View" }),
          /* @__PURE__ */ d("button", { onClick: () => j(!1), style: Y, children: /* @__PURE__ */ d(F, { size: 22 }) })
        ] }),
        /* @__PURE__ */ d("div", { ref: m, style: { flex: 1, width: "100%" } })
      ] }) })
    ] });
  }
), q = {
  position: "relative",
  width: "100%",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "15px"
}, G = {
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
  alignItems: "center"
}, J = {
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
}, Q = {
  width: "90%",
  height: "85%",
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "25px",
  display: "flex",
  flexDirection: "column"
}, U = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  paddingBottom: "15px",
  borderBottom: "1px solid #f1f5f9"
}, Y = {
  background: "#f1f5f9",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
export {
  re as VizlyChart
};
