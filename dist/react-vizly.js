import { jsxs as j, jsx as o } from "react/jsx-runtime";
import b, { forwardRef as M, useRef as w, useState as R, useMemo as V, useCallback as L, useImperativeHandle as X, useEffect as I } from "react";
import k from "apexcharts";
var E = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, p = b.createContext && /* @__PURE__ */ b.createContext(E), H = ["attr", "size", "title"];
function T(r, t) {
  if (r == null)
    return {};
  var e, a, d = W(r, t);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r);
    for (a = 0; a < f.length; a++)
      e = f[a], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(r, e) && (d[e] = r[e]);
  }
  return d;
}
function W(r, t) {
  if (r == null)
    return {};
  var e = {};
  for (var a in r)
    if ({}.hasOwnProperty.call(r, a)) {
      if (t.indexOf(a) !== -1)
        continue;
      e[a] = r[a];
    }
  return e;
}
function C() {
  return C = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        ({}).hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, C.apply(null, arguments);
}
function B(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    t && (a = a.filter(function(d) {
      return Object.getOwnPropertyDescriptor(r, d).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function O(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? B(Object(e), !0).forEach(function(a) {
      Z(r, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : B(Object(e)).forEach(function(a) {
      Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return r;
}
function Z(r, t, e) {
  return (t = F(t)) in r ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = e, r;
}
function F(r) {
  var t = K(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function K(r, t) {
  if (typeof r != "object" || !r)
    return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(r, t || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function D(r) {
  return r && r.map((t, e) => /* @__PURE__ */ b.createElement(t.tag, O({
    key: e
  }, t.attr), D(t.child)));
}
function A(r) {
  return (t) => /* @__PURE__ */ b.createElement(q, C({
    attr: O({}, r.attr)
  }, t), D(r.child));
}
function q(r) {
  var t = (e) => {
    var {
      attr: a,
      size: d,
      title: f
    } = r, h = T(r, H), i = d || e.size || "1em", s;
    return e.className && (s = e.className), r.className && (s = (s ? s + " " : "") + r.className), /* @__PURE__ */ b.createElement("svg", C({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, a, h, {
      className: s,
      style: O(O({
        color: r.color || e.color
      }, e.style), r.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), f && /* @__PURE__ */ b.createElement("title", null, f), r.children);
  };
  return p !== void 0 ? /* @__PURE__ */ b.createElement(p.Consumer, null, (e) => t(e)) : t(E);
}
function G(r) {
  return A({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(r);
}
function J(r) {
  return A({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(r);
}
const Q = (r) => {
  if (!Array.isArray(r) || r.length === 0)
    return "bar";
  const t = r[0];
  if (typeof t == "number")
    return "donut";
  if ((t == null ? void 0 : t.x) !== void 0 && (t == null ? void 0 : t.y) !== void 0) {
    const e = t.x instanceof Date || typeof t.x == "string" && isNaN(Number(t.x)) && !isNaN(Date.parse(t.x));
    return e ? "area" : typeof t.x == "string" && !e ? "bar" : Array.isArray(t.y) ? "rangeBar" : (t == null ? void 0 : t.z) !== void 0 ? "bubble" : "line";
  }
  return (t == null ? void 0 : t.label) !== void 0 && (t == null ? void 0 : t.value) !== void 0 ? "donut" : "bar";
}, ce = M(
  ({ data: r, type: t, options: e = {}, height: a = 350 }, d) => {
    var P;
    const f = w(null), h = w(null), i = w(null), s = w(null), [S, N] = R(!1), m = V(() => {
      var n;
      return t || ((n = e == null ? void 0 : e.chart) == null ? void 0 : n.type) || Q(r);
    }, [r, t, (P = e == null ? void 0 : e.chart) == null ? void 0 : P.type]), _ = L((n, u) => {
      var x;
      const c = Array.isArray(n) ? n : [];
      return ["pie", "donut", "radialBar"].includes(u) ? c.map(
        (y) => typeof y == "object" ? y.value : y
      ) : u === "bar" && ((x = c[0]) == null ? void 0 : x.x) !== void 0 ? [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: c.map((y) => y.y)
      }] : [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: c
      }];
    }, [e == null ? void 0 : e.seriesName]), v = L((n) => {
      var y, z;
      const u = ["pie", "donut", "radialBar"].includes(m);
      let c = [], g = e == null ? void 0 : e.labels, x = (y = e == null ? void 0 : e.xaxis) == null ? void 0 : y.categories;
      return u ? (c = r.map((l) => typeof l == "object" ? l.value : l), g = r.map((l) => l.label ?? l.x)) : m === "bar" ? ((z = r[0]) == null ? void 0 : z.x) !== void 0 ? (x = r.map((l) => l.x), c = [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: r.map((l) => l.y)
      }]) : c = [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: r
      }] : ["line", "area", "scatter"].includes(m) ? c = [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: r
      }] : m === "rangeBar" ? c = [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: r.map((l) => ({
          x: l.x,
          y: l.y
        }))
      }] : m === "bubble" ? c = [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: r.map((l) => ({
          x: l.x,
          y: l.y,
          z: l.z
        }))
      }] : c = [{
        name: (e == null ? void 0 : e.seriesName) || "Series 1",
        data: r
      }], {
        ...e,
        chart: {
          toolbar: { show: !0 },
          ...e.chart,
          type: m,
          height: n
        },
        series: c,
        labels: g,
        xaxis: {
          ...e == null ? void 0 : e.xaxis,
          categories: x
        }
      };
    }, [r, m, e]);
    return X(d, () => ({
      zoomIn: () => {
        const n = i.current;
        if (!(n != null && n.w))
          return;
        const { min: u, max: c } = n.w.globals.lastXAxis || { min: n.w.globals.minX, max: n.w.globals.maxX }, g = (c - u) * 0.2;
        n.zoomX(u + g, c - g);
      },
      zoomOut: () => {
        var n;
        return (n = i.current) == null ? void 0 : n.resetSeries();
      },
      filter: (n) => {
        var u;
        (u = i.current) == null || u.updateSeries(
          _(n, m)
        );
      },
      reset: () => {
        var n;
        return (n = i.current) == null ? void 0 : n.resetSeries();
      }
    })), I(() => {
      if (!f.current)
        return;
      const n = v(a);
      if (i.current)
        i.current.updateOptions(n, !1, !0);
      else {
        const u = new k(f.current, n);
        i.current = u, u.render().catch(() => {
        });
      }
      return () => {
        i.current && (i.current.destroy(), i.current = null);
      };
    }, [v, a]), I(() => {
      if (S && h.current) {
        const n = v("100%");
        s.current = new k(
          h.current,
          n
        ), s.current.render().catch(() => {
        });
      }
      return () => {
        s.current && (s.current.destroy(), s.current = null);
      };
    }, [S, v]), /* @__PURE__ */ j("div", { style: U, children: [
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => N(!0),
          style: Y,
          title: "Full Screen",
          children: /* @__PURE__ */ o(G, { size: 12 })
        }
      ),
      /* @__PURE__ */ o("div", { ref: f }),
      S && /* @__PURE__ */ o("div", { style: $, children: /* @__PURE__ */ j("div", { style: ee, children: [
        /* @__PURE__ */ j("div", { style: re, children: [
          /* @__PURE__ */ o("h3", { style: { margin: 0 }, children: "Detailed View" }),
          /* @__PURE__ */ o(
            "button",
            {
              onClick: () => N(!1),
              style: te,
              children: /* @__PURE__ */ o(J, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            ref: h,
            style: { flex: 1, width: "100%" }
          }
        )
      ] }) })
    ] });
  }
), U = {
  position: "relative",
  width: "100%",
  background: "#fff"
}, Y = {
  position: "absolute",
  right: "6px",
  top: "6px",
  zIndex: 10,
  background: "#f8fafc",
  cursor: "pointer",
  padding: "6px",
  display: "flex",
  alignItems: "center"
}, $ = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(15,23,42,0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  backdropFilter: "blur(4px)"
}, ee = {
  width: "90%",
  height: "85%",
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "25px",
  display: "flex",
  flexDirection: "column"
}, re = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  paddingBottom: "15px",
  borderBottom: "1px solid #f1f5f9"
}, te = {
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
  ce as VizlyChart
};
