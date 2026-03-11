import { jsxs as x, jsx as s } from "react/jsx-runtime";
import g, { forwardRef as X, useRef as C, useState as V, useMemo as H, useCallback as W, useImperativeHandle as F, useEffect as M } from "react";
import R from "apexcharts";
var N = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, B = g.createContext && /* @__PURE__ */ g.createContext(N), D = ["attr", "size", "title"];
function K(e, n) {
  if (e == null)
    return {};
  var t, l, u = q(e, n);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(e);
    for (l = 0; l < d.length; l++)
      t = d[l], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (u[t] = e[t]);
  }
  return u;
}
function q(e, n) {
  if (e == null)
    return {};
  var t = {};
  for (var l in e)
    if ({}.hasOwnProperty.call(e, l)) {
      if (n.indexOf(l) !== -1)
        continue;
      t[l] = e[l];
    }
  return t;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var l in t)
        ({}).hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, j.apply(null, arguments);
}
function E(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    n && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, l);
  }
  return t;
}
function S(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? E(Object(t), !0).forEach(function(l) {
      G(e, l, t[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
    });
  }
  return e;
}
function G(e, n, t) {
  return (n = J(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function J(e) {
  var n = Q(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Q(e, n) {
  if (typeof e != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var l = t.call(e, n || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function _(e) {
  return e && e.map((n, t) => /* @__PURE__ */ g.createElement(n.tag, S({
    key: t
  }, n.attr), _(n.child)));
}
function v(e) {
  return (n) => /* @__PURE__ */ g.createElement(U, j({
    attr: S({}, e.attr)
  }, n), _(e.child));
}
function U(e) {
  var n = (t) => {
    var {
      attr: l,
      size: u,
      title: d
    } = e, y = K(e, D), h = u || t.size || "1em", i;
    return t.className && (i = t.className), e.className && (i = (i ? i + " " : "") + e.className), /* @__PURE__ */ g.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, l, y, {
      className: i,
      style: S(S({
        color: e.color || t.color
      }, t.style), e.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ g.createElement("title", null, d), e.children);
  };
  return B !== void 0 ? /* @__PURE__ */ g.createElement(B.Consumer, null, (t) => n(t)) : n(N);
}
function Y(e) {
  return v({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_Out" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z" }, child: [] }] }] })(e);
}
function $(e) {
  return v({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_In" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z" }, child: [] }] }] })(e);
}
function ee(e) {
  return v({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "read" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" }, child: [] }, { tag: "path", attr: { d: "M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "12", r: "2.028" }, child: [] }] }] }] })(e);
}
function te(e) {
  return v({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function re(e) {
  return v({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
const me = X(
  ({ data: e, type: n, options: t = {}, height: l = 350, title: u = "Data Visualization" }, d) => {
    const y = C(null), h = C(null), i = C(null), w = C(null), [P, k] = V(!1), I = H(() => {
      if (n)
        return n;
      if (!e || e.length === 0)
        return "bar";
      const r = e[0];
      return typeof r == "number" ? "donut" : r != null && r.x && Array.isArray(r == null ? void 0 : r.y) ? "rangeBar" : r != null && r.x && typeof (r == null ? void 0 : r.x) == "string" ? "bar" : "line";
    }, [e, n]), b = W((r, c) => {
      var L;
      const a = I.toLowerCase(), f = ["pie", "donut", "radialbar"].includes(a), m = ["heatmap", "treemap"].includes(a), A = ["bar", "column"].includes(a), T = ["radar", "radaraxis"].includes(a);
      let p = [], Z = (t == null ? void 0 : t.labels) || [], z = ((L = t == null ? void 0 : t.xaxis) == null ? void 0 : L.categories) || [];
      return f ? (p = r.map((o) => typeof o == "object" ? o.y ?? o.value : o), Z = r.map((o) => String(o.x ?? o.label ?? ""))) : m ? p = [{ data: r }] : A || T ? (p = t.series || [{
        name: (t == null ? void 0 : t.seriesName) || "Series 1",
        data: r.map((o) => o.y !== void 0 ? o.y : o)
      }], z = r.map((o) => String(o.x ?? ""))) : p = t.series || [{
        name: (t == null ? void 0 : t.seriesName) || "Series 1",
        data: r.map((o) => ({ x: o.x, y: o.y }))
      }], {
        ...t,
        chart: {
          ...t.chart,
          type: a === "column" ? "bar" : a === "radical donut" ? "donut" : a,
          height: c,
          toolbar: { show: !1 },
          animations: { enabled: !0, speed: 800 },
          plotOptions: a === "column" ? { bar: { horizontal: !1 } } : t.plotOptions
        },
        series: p,
        labels: Z.length ? Z : void 0,
        xaxis: {
          ...t.xaxis,
          categories: z.length ? z : void 0
        }
      };
    }, [I, t]);
    return F(d, () => ({
      zoomIn: () => {
        var m;
        const r = i.current;
        if (!((m = r == null ? void 0 : r.w) != null && m.globals))
          return;
        const { minX: c, maxX: a } = r.w.globals, f = (a - c) * 0.1;
        r.zoomX(c + f, a - f);
      },
      zoomOut: () => {
        var m;
        const r = i.current;
        if (!((m = r == null ? void 0 : r.w) != null && m.globals))
          return;
        const { minX: c, maxX: a } = r.w.globals, f = (a - c) * 0.1;
        r.zoomX(c - f, a + f);
      },
      reset: () => {
        var r;
        (r = i.current) == null || r.resetSeries();
      },
      download: (r) => {
        const c = i.current;
        if (!(c != null && c.exports))
          return;
        const a = u || "chart-export";
        r === "csv" ? c.exports.exportToCSV({ fileName: a }) : r === "svg" ? c.exports.exportToSvg({ fileName: a }) : c.exports.exportToPng({ fileName: a });
      },
      filter: (r) => {
        var a;
        const c = b(r, l);
        (a = i.current) == null || a.updateOptions(c);
      }
    })), M(() => {
      if (!y.current)
        return;
      const r = b(e, l);
      return i.current ? i.current.updateOptions(r) : (i.current = new R(y.current, r), i.current.render()), () => {
        var c;
        (c = i.current) == null || c.destroy(), i.current = null;
      };
    }, [b, e, l]), M(() => {
      if (P && h.current) {
        const r = b(e, "100%");
        w.current = new R(h.current, r), w.current.render();
      }
      return () => {
        var r;
        (r = w.current) == null || r.destroy(), w.current = null;
      };
    }, [P, b, e]), /* @__PURE__ */ x("div", { style: ne, children: [
      /* @__PURE__ */ x("div", { style: le, children: [
        /* @__PURE__ */ s("span", { style: ae, children: u }),
        /* @__PURE__ */ x("div", { style: { display: "flex", gap: "6px" }, children: [
          /* @__PURE__ */ s("button", { title: "Zoom In", onClick: () => {
            var r;
            return (r = d.current) == null ? void 0 : r.zoomIn();
          }, style: O, children: /* @__PURE__ */ s($, {}) }),
          /* @__PURE__ */ s("button", { title: "Zoom Out", onClick: () => {
            var r;
            return (r = d.current) == null ? void 0 : r.zoomOut();
          }, style: O, children: /* @__PURE__ */ s(Y, {}) }),
          /* @__PURE__ */ s("button", { title: "Reset", onClick: () => {
            var r;
            return (r = d.current) == null ? void 0 : r.reset();
          }, style: O, children: /* @__PURE__ */ s(ee, {}) }),
          /* @__PURE__ */ s("button", { title: "Full Screen", onClick: () => k(!0), style: O, children: /* @__PURE__ */ s(te, {}) })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { ref: y }),
      P && /* @__PURE__ */ s("div", { style: ce, children: /* @__PURE__ */ x("div", { style: ie, children: [
        /* @__PURE__ */ x("div", { style: oe, children: [
          /* @__PURE__ */ s("h3", { style: { margin: 0 }, children: u }),
          /* @__PURE__ */ s("button", { onClick: () => k(!1), style: se, children: /* @__PURE__ */ s(re, {}) })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, width: "100%" }, ref: h })
      ] }) })
    ] });
  }
), ne = { border: "1px solid #e2e8f0", borderRadius: "12px", background: "#fff", overflow: "hidden" }, le = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }, ae = { fontSize: "14px", fontWeight: 600, color: "#475569", fontFamily: "sans-serif" }, O = { background: "#fff", border: "1px solid #e2e8f0", cursor: "pointer", padding: "6px", borderRadius: "6px", display: "flex", alignItems: "center", color: "#64748b" }, ce = { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }, ie = { width: "95vw", height: "90vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" }, oe = { display: "flex", justifyContent: "space-between", marginBottom: "20px" }, se = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
export {
  me as VizlyChart
};
