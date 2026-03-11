import { jsxs as y, jsx as l } from "react/jsx-runtime";
import h, { forwardRef as E, useRef as v, useState as N, useMemo as _, useImperativeHandle as A, useEffect as S } from "react";
import Z from "apexcharts";
var M = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, L = h.createContext && /* @__PURE__ */ h.createContext(M), R = ["attr", "size", "title"];
function B(e, t) {
  if (e == null)
    return {};
  var n, r, s = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (r = 0; r < c.length; r++)
      n = c[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  }
  return s;
}
function D(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      n[r] = e[r];
    }
  return n;
}
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, x.apply(null, arguments);
}
function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? z(Object(n), !0).forEach(function(r) {
      T(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function T(e, t, n) {
  return (t = X(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function X(e) {
  var t = V(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I(e) {
  return e && e.map((t, n) => /* @__PURE__ */ h.createElement(t.tag, w({
    key: n
  }, t.attr), I(t.child)));
}
function p(e) {
  return (t) => /* @__PURE__ */ h.createElement(K, x({
    attr: w({}, e.attr)
  }, t), I(e.child));
}
function K(e) {
  var t = (n) => {
    var {
      attr: r,
      size: s,
      title: c
    } = e, d = B(e, R), f = s || n.size || "1em", a;
    return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), /* @__PURE__ */ h.createElement("svg", x({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, d, {
      className: a,
      style: w(w({
        color: e.color || n.color
      }, n.style), e.style),
      height: f,
      width: f,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ h.createElement("title", null, c), e.children);
  };
  return L !== void 0 ? /* @__PURE__ */ h.createElement(L.Consumer, null, (n) => t(n)) : t(M);
}
function W(e) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_Out" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z" }, child: [] }] }] })(e);
}
function H(e) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Zoom_In" }, child: [{ tag: "path", attr: { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z" }, child: [] }] }] })(e);
}
function q(e) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "read" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" }, child: [] }, { tag: "path", attr: { d: "M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "12", r: "2.028" }, child: [] }] }] }] })(e);
}
function G(e) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Maximize_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }, child: [] }, { tag: "path", attr: { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" }, child: [] }] }] }] })(e);
}
function F(e) {
  return p({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { d: "M12.2248 2.08224C12.4189 1.95407 12.6829 1.97583 12.8537 2.14669C13.0246 2.31756 13.0463 2.58152 12.9182 2.7756L12.8537 2.85372L8.20724 7.50021L12.8537 12.1467L12.9182 12.2248C13.0463 12.4189 13.0246 12.6829 12.8537 12.8537C12.6829 13.0246 12.4189 13.0463 12.2248 12.9182L12.1467 12.8537L7.50021 8.20724L2.85372 12.8537C2.65846 13.049 2.34195 13.049 2.14669 12.8537C1.95143 12.6585 1.95143 12.342 2.14669 12.1467L6.79318 7.50021L2.14669 2.85372L2.08224 2.7756C1.95407 2.58152 1.97583 2.31756 2.14669 2.14669C2.31756 1.97583 2.58152 1.95407 2.7756 2.08224L2.85372 2.14669L7.50021 6.79318L12.1467 2.14669L12.2248 2.08224Z", fill: "currentColor" }, child: [] }] })(e);
}
const J = (e) => {
  if (!e || e.length === 0)
    return "bar";
  const t = e[0];
  return typeof t == "number" ? "donut" : Array.isArray(t == null ? void 0 : t.y) ? "rangeBar" : typeof t == "object" && Object.keys(t).length > 2 ? "line" : t != null && t.x && typeof (t == null ? void 0 : t.x) == "string" ? "bar" : (t != null && t.x && !isNaN(Date.parse(t.x)), "line");
}, Q = (e) => {
  const t = Object.keys(e[0]), n = t[0], r = t.slice(1), s = e.map((d) => d[n]);
  return { series: r.map((d) => ({
    name: d,
    data: e.map((f) => f[d])
  })), categories: s };
}, U = (e, t) => {
  if (!t.length)
    return { series: [] };
  if (Object.keys(t[0]).length > 2) {
    const { series: r, categories: s } = Q(t);
    return {
      series: r,
      categories: s
    };
  }
  return ["donut", "pie", "radialbar"].includes(e) ? {
    series: t.map((r) => r.y ?? r.value ?? r),
    labels: t.map((r) => r.x ?? r.label)
  } : ["bar", "column", "radar"].includes(e) ? {
    series: [{
      name: "Series 1",
      data: t.map((r) => r.y)
    }],
    categories: t.map((r) => r.x)
  } : e === "heatmap" ? {
    series: [{
      name: "Series 1",
      data: t.map((r) => ({ x: r.x, y: r.y }))
    }]
  } : {
    series: [{
      name: "Series 1",
      data: t.map((r) => ({ x: r.x, y: r.y }))
    }]
  };
}, te = E(
  ({ data: e, type: t, options: n = {}, height: r = 350, title: s = "Vizly Chart" }, c) => {
    const d = v(null), f = v(null), a = v(null), b = v(null), [C, O] = N(!1), j = _(() => t || J(e), [e, t]), P = (i, o) => {
      const u = j.toLowerCase(), { series: g, labels: m, categories: k } = U(u, i);
      return {
        ...n,
        chart: {
          ...n.chart,
          type: u === "column" ? "bar" : u,
          height: o,
          toolbar: { show: !1 }
        },
        series: g,
        labels: m,
        xaxis: k ? { categories: k } : n.xaxis
      };
    };
    return A(c, () => ({
      zoomIn() {
        var m;
        const i = a.current;
        if (!((m = i == null ? void 0 : i.w) != null && m.globals))
          return;
        const { minX: o, maxX: u } = i.w.globals, g = (u - o) * 0.1;
        i.zoomX(o + g, u - g);
      },
      zoomOut() {
        var m;
        const i = a.current;
        if (!((m = i == null ? void 0 : i.w) != null && m.globals))
          return;
        const { minX: o, maxX: u } = i.w.globals, g = (u - o) * 0.1;
        i.zoomX(o - g, u + g);
      },
      reset() {
        var i;
        (i = a.current) == null || i.resetSeries();
      },
      download(i) {
        const o = a.current;
        if (!(o != null && o.exports))
          return;
        const u = s;
        i === "csv" ? o.exports.exportToCSV({ fileName: u }) : i === "svg" ? o.exports.exportToSvg({ fileName: u }) : o.exports.exportToPng({ fileName: u });
      }
    })), S(() => {
      if (!d.current)
        return;
      const i = P(e, r);
      return a.current ? a.current.updateOptions(i) : (a.current = new Z(d.current, i), a.current.render()), () => {
        var o;
        (o = a.current) == null || o.destroy(), a.current = null;
      };
    }, [e, j]), S(() => {
      if (C && f.current) {
        const i = P(e, "100%");
        b.current = new Z(f.current, i), b.current.render();
      }
      return () => {
        var i;
        (i = b.current) == null || i.destroy(), b.current = null;
      };
    }, [C]), /* @__PURE__ */ y("div", { style: { border: "1px solid #e2e8f0", borderRadius: 12 }, children: [
      /* @__PURE__ */ y("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        background: "#f8fafc"
      }, children: [
        /* @__PURE__ */ l("span", { children: s }),
        /* @__PURE__ */ y("div", { style: { display: "flex", gap: 6 }, children: [
          /* @__PURE__ */ l("button", { onClick: () => {
            var i;
            return (i = c == null ? void 0 : c.current) == null ? void 0 : i.zoomIn();
          }, children: /* @__PURE__ */ l(H, {}) }),
          /* @__PURE__ */ l("button", { onClick: () => {
            var i;
            return (i = c == null ? void 0 : c.current) == null ? void 0 : i.zoomOut();
          }, children: /* @__PURE__ */ l(W, {}) }),
          /* @__PURE__ */ l("button", { onClick: () => {
            var i;
            return (i = c == null ? void 0 : c.current) == null ? void 0 : i.reset();
          }, children: /* @__PURE__ */ l(q, {}) }),
          /* @__PURE__ */ l("button", { onClick: () => O(!0), children: /* @__PURE__ */ l(G, {}) })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { ref: d }),
      C && /* @__PURE__ */ l("div", { style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ y("div", { style: {
        width: "90vw",
        height: "90vh",
        background: "#fff",
        padding: 20
      }, children: [
        /* @__PURE__ */ y("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ l("h3", { children: s }),
          /* @__PURE__ */ l("button", { onClick: () => O(!1), children: /* @__PURE__ */ l(F, {}) })
        ] }),
        /* @__PURE__ */ l("div", { style: { height: "100%" }, ref: f })
      ] }) })
    ] });
  }
);
export {
  te as VizlyChart
};
