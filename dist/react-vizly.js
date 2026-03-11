import { jsxs as b, jsx as c } from "react/jsx-runtime";
import m, { forwardRef as E, useRef as O, useState as _, useMemo as D, useCallback as T, useImperativeHandle as V, useEffect as N } from "react";
import L from "apexcharts";
var B = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, M = m.createContext && /* @__PURE__ */ m.createContext(B), X = ["attr", "size", "title"];
function W(e, r) {
  if (e == null)
    return {};
  var t, l, o = H(e, r);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (l = 0; l < u.length; l++)
      t = u[l], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function H(e, r) {
  if (e == null)
    return {};
  var t = {};
  for (var l in e)
    if ({}.hasOwnProperty.call(e, l)) {
      if (r.indexOf(l) !== -1)
        continue;
      t[l] = e[l];
    }
  return t;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var l in t)
        ({}).hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, j.apply(null, arguments);
}
function A(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    r && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, l);
  }
  return t;
}
function S(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? A(Object(t), !0).forEach(function(l) {
      F(e, l, t[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
    });
  }
  return e;
}
function F(e, r, t) {
  return (r = G(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function G(e) {
  var r = K(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function K(e, r) {
  if (typeof e != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var l = t.call(e, r || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function R(e) {
  return e && e.map((r, t) => /* @__PURE__ */ m.createElement(r.tag, S({
    key: t
  }, r.attr), R(r.child)));
}
function x(e) {
  return (r) => /* @__PURE__ */ m.createElement(q, j({
    attr: S({}, e.attr)
  }, r), R(e.child));
}
function q(e) {
  var r = (t) => {
    var {
      attr: l,
      size: o,
      title: u
    } = e, h = W(e, X), g = o || t.size || "1em", i;
    return t.className && (i = t.className), e.className && (i = (i ? i + " " : "") + e.className), /* @__PURE__ */ m.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, l, h, {
      className: i,
      style: S(S({
        color: e.color || t.color
      }, t.style), e.style),
      height: g,
      width: g,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && /* @__PURE__ */ m.createElement("title", null, u), e.children);
  };
  return M !== void 0 ? /* @__PURE__ */ m.createElement(M.Consumer, null, (t) => r(t)) : r(B);
}
function J(e) {
  return x({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_Out" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z" }, child: [] }] }] })(e);
}
function Q(e) {
  return x({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_In" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z" }, child: [] }] }] })(e);
}
function U(e) {
  return x({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "read" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" }, child: [] }, { tag: "path", attr: { d: "M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "12", r: "2.028" }, child: [] }] }] }] })(e);
}
function Y(e) {
  return x({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function $(e) {
  return x({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
const ee = (e) => {
  if (!Array.isArray(e) || e.length === 0)
    return "bar";
  const r = e[0];
  return typeof r == "number" ? "donut" : (r == null ? void 0 : r.x) !== void 0 && (r == null ? void 0 : r.y) !== void 0 ? r.x instanceof Date || typeof r.x == "string" && !isNaN(Date.parse(r.x)) ? "area" : typeof r.x == "string" ? "bar" : "line" : "bar";
}, de = E(
  ({ data: e, type: r, options: t = {}, height: l = 350, title: o = "Chart View" }, u) => {
    const h = O(null), g = O(null), i = O(null), v = O(null), [P, Z] = _(!1), w = D(() => r || ee(e), [e, r]), y = T((n, a) => {
      var z;
      const d = ["pie", "donut", "radialBar"].includes(w), f = w === "bar";
      let C = [], k = t == null ? void 0 : t.labels, I = (z = t == null ? void 0 : t.xaxis) == null ? void 0 : z.categories;
      return d ? (C = n.map((s) => typeof s == "object" ? s.value ?? s.y : s), k = n.map((s) => s.label ?? s.x)) : f ? (C = [{
        name: (t == null ? void 0 : t.seriesName) || "Series 1",
        data: n.map((s) => s.y ?? s)
      }], I = n.map((s) => String(s.x ?? ""))) : C = [{
        name: (t == null ? void 0 : t.seriesName) || "Series 1",
        data: n
      }], {
        ...t,
        chart: {
          ...t.chart,
          type: w,
          height: a,
          toolbar: { show: !1 },
          animations: { enabled: !0 }
        },
        series: C,
        labels: k,
        xaxis: { ...t.xaxis, categories: I }
      };
    }, [w, t]);
    return V(u, () => ({
      zoomIn: () => {
        const n = i.current;
        if (!(n != null && n.w))
          return;
        const { min: a, max: d } = n.w.globals.lastXAxis || { min: n.w.globals.minX, max: n.w.globals.maxX }, f = d - a;
        n.zoomX(a + f * 0.1, d - f * 0.1);
      },
      zoomOut: () => {
        const n = i.current;
        if (!(n != null && n.w))
          return;
        const { min: a, max: d } = n.w.globals.lastXAxis, f = d - a;
        n.zoomX(a - f * 0.2, d + f * 0.2);
      },
      reset: () => {
        var n;
        return (n = i.current) == null ? void 0 : n.resetSeries();
      },
      download: (n) => {
        const a = i.current;
        a && (n === "csv" && a.exports.exportToCSV({ fileName: o }), n === "png" && a.exports.exportToPng({ fileName: o }), n === "svg" && a.exports.exportToSvg({ fileName: o }));
      },
      filter: (n) => {
        var a;
        (a = i.current) == null || a.updateOptions(y(n, l));
      }
    })), N(() => {
      if (!h.current)
        return;
      const n = y(e, l);
      return i.current ? i.current.updateOptions(n) : (i.current = new L(h.current, n), i.current.render()), () => {
        var a;
        (a = i.current) == null || a.destroy(), i.current = null;
      };
    }, [y, e, l]), N(() => {
      if (P && g.current) {
        const n = y(e, "100%");
        v.current = new L(g.current, n), v.current.render();
      }
      return () => {
        var n;
        (n = v.current) == null || n.destroy(), v.current = null;
      };
    }, [P, y, e]), /* @__PURE__ */ b("div", { style: te, children: [
      /* @__PURE__ */ b("div", { style: re, children: [
        /* @__PURE__ */ c("span", { style: ne, children: o }),
        /* @__PURE__ */ b("div", { style: { display: "flex", gap: "6px" }, children: [
          /* @__PURE__ */ c("button", { title: "Download PNG", onClick: () => {
            var n;
            return (n = u.current) == null ? void 0 : n.download("png");
          }, style: p, children: /* @__PURE__ */ c(CiDownload, {}) }),
          /* @__PURE__ */ c("button", { title: "Zoom In", onClick: () => {
            var n;
            return (n = u.current) == null ? void 0 : n.zoomIn();
          }, style: p, children: /* @__PURE__ */ c(Q, {}) }),
          /* @__PURE__ */ c("button", { title: "Zoom Out", onClick: () => {
            var n;
            return (n = u.current) == null ? void 0 : n.zoomOut();
          }, style: p, children: /* @__PURE__ */ c(J, {}) }),
          /* @__PURE__ */ c("button", { title: "Reset", onClick: () => {
            var n;
            return (n = u.current) == null ? void 0 : n.reset();
          }, style: p, children: /* @__PURE__ */ c(U, {}) }),
          /* @__PURE__ */ c("button", { title: "Full View", onClick: () => Z(!0), style: p, children: /* @__PURE__ */ c(Y, {}) })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { ref: h }),
      P && /* @__PURE__ */ c("div", { style: le, children: /* @__PURE__ */ b("div", { style: ae, children: [
        /* @__PURE__ */ b("div", { style: ie, children: [
          /* @__PURE__ */ c("h3", { style: { margin: 0 }, children: o }),
          /* @__PURE__ */ c("button", { onClick: () => Z(!1), style: ce, children: /* @__PURE__ */ c($, {}) })
        ] }),
        /* @__PURE__ */ c("div", { style: { flex: 1, width: "100%" }, ref: g })
      ] }) })
    ] });
  }
), te = { border: "1px solid #edf2f7", borderRadius: "12px", background: "#fff", overflow: "hidden", position: "relative" }, re = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }, ne = { fontSize: "14px", fontWeight: 600, color: "#475569" }, p = { background: "#fff", border: "1px solid #e2e8f0", cursor: "pointer", padding: "6px", borderRadius: "6px", display: "flex", alignItems: "center", color: "#64748b" }, le = { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.9)", zIndex: 1e3, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }, ae = { width: "90vw", height: "85vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" }, ie = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }, ce = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
export {
  de as VizlyChart
};
