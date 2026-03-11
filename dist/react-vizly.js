import { jsxs as x, jsx as s } from "react/jsx-runtime";
import g, { forwardRef as B, useRef as O, useState as E, useMemo as _, useCallback as A, useImperativeHandle as T, useEffect as L } from "react";
import z from "apexcharts";
var N = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, I = g.createContext && /* @__PURE__ */ g.createContext(N), X = ["attr", "size", "title"];
function V(e, n) {
  if (e == null)
    return {};
  var r, l, f = W(e, n);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(e);
    for (l = 0; l < d.length; l++)
      r = d[l], n.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (f[r] = e[r]);
  }
  return f;
}
function W(e, n) {
  if (e == null)
    return {};
  var r = {};
  for (var l in e)
    if ({}.hasOwnProperty.call(e, l)) {
      if (n.indexOf(l) !== -1)
        continue;
      r[l] = e[l];
    }
  return r;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var l in r)
        ({}).hasOwnProperty.call(r, l) && (e[l] = r[l]);
    }
    return e;
  }, j.apply(null, arguments);
}
function M(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    n && (l = l.filter(function(f) {
      return Object.getOwnPropertyDescriptor(e, f).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function S(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? M(Object(r), !0).forEach(function(l) {
      F(e, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return e;
}
function F(e, n, r) {
  return (n = H(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function H(e) {
  var n = D(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function D(e, n) {
  if (typeof e != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(e, n || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function R(e) {
  return e && e.map((n, r) => /* @__PURE__ */ g.createElement(n.tag, S({
    key: r
  }, n.attr), R(n.child)));
}
function y(e) {
  return (n) => /* @__PURE__ */ g.createElement(K, j({
    attr: S({}, e.attr)
  }, n), R(e.child));
}
function K(e) {
  var n = (r) => {
    var {
      attr: l,
      size: f,
      title: d
    } = e, p = V(e, X), h = f || r.size || "1em", o;
    return r.className && (o = r.className), e.className && (o = (o ? o + " " : "") + e.className), /* @__PURE__ */ g.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, l, p, {
      className: o,
      style: S(S({
        color: e.color || r.color
      }, r.style), e.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ g.createElement("title", null, d), e.children);
  };
  return I !== void 0 ? /* @__PURE__ */ g.createElement(I.Consumer, null, (r) => n(r)) : n(N);
}
function q(e) {
  return y({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_Out" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z" }, child: [] }] }] })(e);
}
function G(e) {
  return y({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_In" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z" }, child: [] }] }] })(e);
}
function J(e) {
  return y({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "read" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" }, child: [] }, { tag: "path", attr: { d: "M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "12", r: "2.028" }, child: [] }] }] }] })(e);
}
function Q(e) {
  return y({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function U(e) {
  return y({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
function Y(e) {
  return y({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, child: [] }, { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "15", x2: "12", y2: "3" }, child: [] }] })(e);
}
const se = B(
  ({ data: e, type: n, options: r = {}, height: l = 350, title: f = "Data Visualization" }, d) => {
    const p = O(null), h = O(null), o = O(null), w = O(null), [k, P] = E(!1), Z = _(() => {
      if (n)
        return n;
      if (!e || e.length === 0)
        return "bar";
      const t = e[0];
      return typeof t == "number" ? "donut" : t != null && t.x && Array.isArray(t == null ? void 0 : t.y) ? "rangeBar" : t != null && t.x && typeof (t == null ? void 0 : t.x) == "string" ? "bar" : "line";
    }, [e, n]), b = A((t, c) => {
      const i = Z.toLowerCase();
      let u = [], m = [], C = [];
      return ["donut", "pie", "radialbar"].includes(i) ? (u = t.map((a) => a.y ?? a.value ?? a), m = t.map((a) => a.x ?? a.label ?? "")) : ["bar", "column"].includes(i) ? (C = t.map((a) => a.x ?? ""), u = [{
        name: (r == null ? void 0 : r.seriesName) || "Series 1",
        data: t.map((a) => a.y ?? a)
      }]) : i === "radar" ? (C = t.map((a) => a.x ?? ""), u = [{
        name: (r == null ? void 0 : r.seriesName) || "Series 1",
        data: t.map((a) => a.y ?? a)
      }]) : i === "heatmap" ? u = [{
        name: "Series 1",
        data: t.map((a) => ({
          x: a.x,
          y: a.y
        }))
      }] : u = [{
        name: (r == null ? void 0 : r.seriesName) || "Series 1",
        data: t.map((a) => ({
          x: a.x,
          y: a.y
        }))
      }], {
        ...r,
        chart: {
          ...r.chart,
          type: i === "column" ? "bar" : i,
          height: c,
          toolbar: { show: !1 }
        },
        series: u,
        labels: m.length ? m : void 0,
        xaxis: C.length ? { categories: C } : r.xaxis
      };
    }, [Z, r]);
    return T(d, () => ({
      zoomIn: () => {
        var m;
        const t = o.current;
        if (!((m = t == null ? void 0 : t.w) != null && m.globals))
          return;
        const { minX: c, maxX: i } = t.w.globals, u = (i - c) * 0.1;
        t.zoomX(c + u, i - u);
      },
      zoomOut: () => {
        var m;
        const t = o.current;
        if (!((m = t == null ? void 0 : t.w) != null && m.globals))
          return;
        const { minX: c, maxX: i } = t.w.globals, u = (i - c) * 0.1;
        t.zoomX(c - u, i + u);
      },
      reset: () => {
        var t;
        (t = o.current) == null || t.resetSeries();
      },
      download: (t) => {
        const c = o.current;
        if (!(c != null && c.exports))
          return;
        const i = f || "chart-export";
        t === "csv" ? c.exports.exportToCSV({ fileName: i }) : t === "svg" ? c.exports.exportToSvg({ fileName: i }) : c.exports.exportToPng({ fileName: i });
      },
      filter: (t) => {
        var i;
        const c = b(t, l);
        (i = o.current) == null || i.updateOptions(c);
      }
    })), L(() => {
      if (!p.current)
        return;
      const t = b(e, l);
      return o.current ? o.current.updateOptions(t) : (o.current = new z(p.current, t), o.current.render()), () => {
        var c;
        (c = o.current) == null || c.destroy(), o.current = null;
      };
    }, [b, e, l]), L(() => {
      if (k && h.current) {
        const t = b(e, "100%");
        w.current = new z(h.current, t), w.current.render();
      }
      return () => {
        var t;
        (t = w.current) == null || t.destroy(), w.current = null;
      };
    }, [k, b, e]), /* @__PURE__ */ x("div", { style: $, children: [
      /* @__PURE__ */ x("div", { style: ee, children: [
        /* @__PURE__ */ s("span", { style: te, children: f }),
        /* @__PURE__ */ x("div", { style: { display: "flex", gap: "6px" }, children: [
          /* @__PURE__ */ s("button", { title: "Download", onClick: () => {
            var t;
            return (t = d.current) == null ? void 0 : t.download();
          }, style: v, children: /* @__PURE__ */ s(Y, {}) }),
          /* @__PURE__ */ s("button", { title: "Zoom In", onClick: () => {
            var t;
            return (t = d.current) == null ? void 0 : t.zoomIn();
          }, style: v, children: /* @__PURE__ */ s(G, {}) }),
          /* @__PURE__ */ s("button", { title: "Zoom Out", onClick: () => {
            var t;
            return (t = d.current) == null ? void 0 : t.zoomOut();
          }, style: v, children: /* @__PURE__ */ s(q, {}) }),
          /* @__PURE__ */ s("button", { title: "Reset", onClick: () => {
            var t;
            return (t = d.current) == null ? void 0 : t.reset();
          }, style: v, children: /* @__PURE__ */ s(J, {}) }),
          /* @__PURE__ */ s("button", { title: "Full Screen", onClick: () => P(!0), style: v, children: /* @__PURE__ */ s(Q, {}) })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { ref: p }),
      k && /* @__PURE__ */ s("div", { style: re, children: /* @__PURE__ */ x("div", { style: ne, children: [
        /* @__PURE__ */ x("div", { style: le, children: [
          /* @__PURE__ */ s("h3", { style: { margin: 0 }, children: f }),
          /* @__PURE__ */ s("button", { onClick: () => P(!1), style: ae, children: /* @__PURE__ */ s(U, {}) })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, width: "100%" }, ref: h })
      ] }) })
    ] });
  }
), $ = { border: "1px solid #e2e8f0", borderRadius: "12px", background: "#fff", overflow: "hidden" }, ee = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }, te = { fontSize: "14px", fontWeight: 600, color: "#475569", fontFamily: "sans-serif" }, v = { background: "#fff", border: "1px solid #e2e8f0", cursor: "pointer", padding: "6px", borderRadius: "6px", display: "flex", alignItems: "center", color: "#64748b" }, re = { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }, ne = { width: "95vw", height: "90vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" }, le = { display: "flex", justifyContent: "space-between", marginBottom: "20px" }, ae = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
export {
  se as VizlyChart
};
