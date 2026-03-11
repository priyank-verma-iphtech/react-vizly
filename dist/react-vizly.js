import { jsxs as x, jsx as s } from "react/jsx-runtime";
import g, { forwardRef as X, useRef as w, useState as V, useMemo as H, useCallback as W, useImperativeHandle as F, useEffect as R } from "react";
import E from "apexcharts";
var B = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, M = g.createContext && /* @__PURE__ */ g.createContext(B), D = ["attr", "size", "title"];
function K(e, n) {
  if (e == null)
    return {};
  var t, a, u = q(e, n);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(e);
    for (a = 0; a < d.length; a++)
      t = d[a], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (u[t] = e[t]);
  }
  return u;
}
function q(e, n) {
  if (e == null)
    return {};
  var t = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) !== -1)
        continue;
      t[a] = e[a];
    }
  return t;
}
function C() {
  return C = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, C.apply(null, arguments);
}
function N(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function O(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? N(Object(t), !0).forEach(function(a) {
      G(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
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
    var a = t.call(e, n || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function _(e) {
  return e && e.map((n, t) => /* @__PURE__ */ g.createElement(n.tag, O({
    key: t
  }, n.attr), _(n.child)));
}
function z(e) {
  return (n) => /* @__PURE__ */ g.createElement(U, C({
    attr: O({}, e.attr)
  }, n), _(e.child));
}
function U(e) {
  var n = (t) => {
    var {
      attr: a,
      size: u,
      title: d
    } = e, b = K(e, D), y = u || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ g.createElement("svg", C({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, a, b, {
      className: c,
      style: O(O({
        color: e.color || t.color
      }, t.style), e.style),
      height: y,
      width: y,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ g.createElement("title", null, d), e.children);
  };
  return M !== void 0 ? /* @__PURE__ */ g.createElement(M.Consumer, null, (t) => n(t)) : n(B);
}
function Y(e) {
  return z({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "read" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" }, child: [] }, { tag: "path", attr: { d: "M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "12", r: "2.028" }, child: [] }] }] }] })(e);
}
function $(e) {
  return z({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function ee(e) {
  return z({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
const de = X(
  ({ data: e, type: n, options: t = {}, height: a = 350, title: u = "Data Visualization" }, d) => {
    const b = w(null), y = w(null), c = w(null), v = w(null), [j, L] = V(!1), k = H(() => {
      if (n)
        return n;
      if (!e || e.length === 0)
        return "bar";
      const r = e[0];
      return typeof r == "number" ? "donut" : r != null && r.x && Array.isArray(r == null ? void 0 : r.y) ? "rangeBar" : r != null && r.x && typeof (r == null ? void 0 : r.x) == "string" ? "bar" : "line";
    }, [e, n]), p = W((r, i) => {
      var I;
      const l = k.toLowerCase(), f = ["pie", "donut", "radialbar"].includes(l), m = ["heatmap", "treemap"].includes(l), T = ["bar", "column"].includes(l), Z = ["radar", "radaraxis"].includes(l);
      let h = [], S = (t == null ? void 0 : t.labels) || [], P = ((I = t == null ? void 0 : t.xaxis) == null ? void 0 : I.categories) || [];
      return f ? (h = r.map((o) => typeof o == "object" ? o.y ?? o.value : o), S = r.map((o) => String(o.x ?? o.label ?? ""))) : m ? h = [{ data: r }] : T || Z ? (h = t.series || [{
        name: (t == null ? void 0 : t.seriesName) || "Series 1",
        data: r.map((o) => o.y !== void 0 ? o.y : o)
      }], P = r.map((o) => String(o.x ?? ""))) : h = t.series || [{
        name: (t == null ? void 0 : t.seriesName) || "Series 1",
        data: r.map((o) => ({ x: o.x, y: o.y }))
      }], {
        ...t,
        chart: {
          ...t.chart,
          type: l === "column" ? "bar" : l === "radical donut" ? "donut" : l,
          height: i,
          toolbar: { show: !1 },
          animations: { enabled: !0, speed: 800 },
          plotOptions: l === "column" ? { bar: { horizontal: !1 } } : t.plotOptions
        },
        series: h,
        labels: S.length ? S : void 0,
        xaxis: {
          ...t.xaxis,
          categories: P.length ? P : void 0
        }
      };
    }, [k, t]);
    return F(d, () => ({
      zoomIn: () => {
        var m;
        const r = c.current;
        if (!((m = r == null ? void 0 : r.w) != null && m.globals))
          return;
        const { minX: i, maxX: l } = r.w.globals, f = (l - i) * 0.1;
        r.zoomX(i + f, l - f);
      },
      zoomOut: () => {
        var m;
        const r = c.current;
        if (!((m = r == null ? void 0 : r.w) != null && m.globals))
          return;
        const { minX: i, maxX: l } = r.w.globals, f = (l - i) * 0.1;
        r.zoomX(i - f, l + f);
      },
      reset: () => {
        var r;
        (r = c.current) == null || r.resetSeries();
      },
      download: (r) => {
        const i = c.current;
        if (!(i != null && i.exports))
          return;
        const l = u || "chart-export";
        r === "csv" ? i.exports.exportToCSV({ fileName: l }) : r === "svg" ? i.exports.exportToSvg({ fileName: l }) : i.exports.exportToPng({ fileName: l });
      },
      filter: (r) => {
        var l;
        const i = p(r, a);
        (l = c.current) == null || l.updateOptions(i);
      }
    })), R(() => {
      if (!b.current)
        return;
      const r = p(e, a);
      return c.current ? c.current.updateOptions(r) : (c.current = new E(b.current, r), c.current.render()), () => {
        var i;
        (i = c.current) == null || i.destroy(), c.current = null;
      };
    }, [p, e, a]), R(() => {
      if (j && y.current) {
        const r = p(e, "100%");
        v.current = new E(y.current, r), v.current.render();
      }
      return () => {
        var r;
        (r = v.current) == null || r.destroy(), v.current = null;
      };
    }, [j, p, e]), /* @__PURE__ */ x("div", { style: te, children: [
      /* @__PURE__ */ x("div", { style: re, children: [
        /* @__PURE__ */ s("span", { style: ne, children: u }),
        /* @__PURE__ */ x("div", { style: { display: "flex", gap: "6px" }, children: [
          /* @__PURE__ */ s("button", { title: "Reset", onClick: () => {
            var r;
            return (r = d.current) == null ? void 0 : r.reset();
          }, style: A, children: /* @__PURE__ */ s(Y, {}) }),
          /* @__PURE__ */ s("button", { title: "Full Screen", onClick: () => L(!0), style: A, children: /* @__PURE__ */ s($, {}) })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { ref: b }),
      j && /* @__PURE__ */ s("div", { style: ae, children: /* @__PURE__ */ x("div", { style: le, children: [
        /* @__PURE__ */ x("div", { style: ie, children: [
          /* @__PURE__ */ s("h3", { style: { margin: 0 }, children: u }),
          /* @__PURE__ */ s("button", { onClick: () => L(!1), style: ce, children: /* @__PURE__ */ s(ee, {}) })
        ] }),
        /* @__PURE__ */ s("div", { style: { flex: 1, width: "100%" }, ref: y })
      ] }) })
    ] });
  }
), te = { border: "1px solid #e2e8f0", borderRadius: "12px", background: "#fff", overflow: "hidden" }, re = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }, ne = { fontSize: "14px", fontWeight: 600, color: "#475569", fontFamily: "sans-serif" }, A = { background: "#fff", border: "1px solid #e2e8f0", cursor: "pointer", padding: "6px", borderRadius: "6px", display: "flex", alignItems: "center", color: "#64748b" }, ae = { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }, le = { width: "95vw", height: "90vh", background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column" }, ie = { display: "flex", justifyContent: "space-between", marginBottom: "20px" }, ce = { background: "#f1f5f9", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
export {
  de as VizlyChart
};
