import { jsx as R } from "react/jsx-runtime";
import { forwardRef as V, useRef as y, useState as j, useEffect as C, useMemo as B, useImperativeHandle as E } from "react";
import I from "apexcharts";
const H = (s) => {
  if (!s || s.length === 0)
    return "bar";
  const e = s[0];
  if (typeof e == "number")
    return "donut";
  if (typeof e != "object")
    return "bar";
  const t = Object.values(e).filter(
    (a) => typeof a == "number"
  );
  return e.stage && e.value ? "funnel" : e.label && e.value ? "donut" : e.category && e.value ? "polararea" : e.x !== void 0 && e.y !== void 0 && e.value !== void 0 ? "heatmap" : e.name && e.value && Array.isArray(e.children) ? "treemap" : Array.isArray(e.y) && e.y.length === 4 ? "candlestick" : Array.isArray(e.y) && e.y.length === 5 ? "boxplot" : Array.isArray(e.y) && e.y.length === 2 ? "rangebar" : e.x !== void 0 && e.y !== void 0 && e.r !== void 0 ? "bubble" : typeof e.x == "number" && typeof e.y == "number" ? "scatter" : e.x && !isNaN(Date.parse(e.x)) ? "line" : e.start !== void 0 && e.end !== void 0 ? "slope" : t.length > 1 ? "mixed" : (e.x !== void 0 && e.y !== void 0, "bar");
}, M = {
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  bar: "category",
  column: "category",
  radar: "category",
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  heatmap: "heatmap",
  treemap: "heatmap",
  rangebar: "range",
  candlestick: "range"
}, T = (s, e) => {
  const t = M[s] || "xy";
  let a = [], l = [], b = [];
  if (!e || e.length === 0)
    return { series: a, labels: l, categories: b };
  const c = e[0], u = Object.keys(c).filter(
    (r) => typeof c[r] == "number"
  ), i = Object.keys(c).find(
    (r) => typeof c[r] == "string"
  );
  switch (t) {
    case "circular":
      a = e.map((r) => r.value ?? r.y ?? r), l = e.map(
        (r) => r.label ?? r.category ?? r.name ?? r.x
      );
      break;
    case "category":
      b = e.map((r) => r.x ?? r.category ?? r.stage ?? r[i]), u.length > 1 ? a = u.map((r) => ({
        name: r,
        data: e.map((o) => o[r])
      })) : a = [{
        name: u[0] || "Series 1",
        data: e.map((r) => r.y ?? r.value)
      }];
      break;
    case "heatmap":
      a = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.value ?? r.y
        }))
      }];
      break;
    case "range":
      a = [{ name: "Series 1", data: e }];
      break;
    default:
      s === "bubble" ? a = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.y,
          r: r.r
        }))
      }] : u.length > 1 ? a = u.map((r) => ({
        name: r,
        data: e.map((o) => ({
          x: o.x ?? o[i],
          y: o[r]
        }))
      })) : a = [{
        name: "Series 1",
        data: e.map((r) => ({
          x: r.x,
          y: r.y
        }))
      }];
  }
  return { series: a, labels: l, categories: b };
}, X = V(
  ({ data: s, type: e, options: t = {}, height: a = 350, title: l }, b) => {
    const c = y(null), u = y(null), i = y(null), [r, o] = j(!1);
    C(() => {
      const n = () => o(!!document.fullscreenElement);
      return document.addEventListener("fullscreenchange", n), () => document.removeEventListener("fullscreenchange", n);
    }, []);
    const m = B(() => {
      var h, p, d, x, v, w, z, A, k, O, S, F;
      const n = Array.isArray(e) ? e[0] : e || H(Array.isArray(s[0]) ? s[0] : s), f = String(n).toLowerCase(), g = T(f, s);
      return {
        ...t,
        chart: {
          // Essential: Mapping 'column' and 'funnel' to 'bar' engine
          type: f === "funnel" || f === "column" ? "bar" : f,
          height: "100%",
          id: ((h = t.chart) == null ? void 0 : h.id) || `viz-${Math.random().toString(36).substr(2, 5)}`,
          toolbar: {
            show: !0,
            tools: {
              download: !0,
              customIcons: [
                {
                  // This is the SVG path for BsArrowsAngleExpand
                  icon: '<svg stroke="currentColor" fill="#9ca3af" stroke-width="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.828 10.172L3 13V10H2v4h4v-1H3l2.828-2.828-1.414-1.414zm4.344 0l1.414 1.414L13 10.172V13h1V9h-4v1h3l-2.828 1.172zM5.828 5.828L3 3v3H2V2h4v1H3l2.828 2.828-1.414-1.414zm4.344 0l1.414-1.414L13 5.828V3h1v4h-4V6h3l-2.828-2.828z"></path></svg>',
                  index: 6,
                  title: "Toggle Fullscreen",
                  click: () => {
                    var L;
                    document.fullscreenElement ? document.exitFullscreen() : (L = u.current) == null || L.requestFullscreen();
                  }
                }
              ]
            }
          },
          ...t.chart
        },
        series: g.series,
        labels: g.labels || t.labels,
        // Required for PolarArea/RadialBar
        xaxis: {
          categories: g.categories,
          ...t.xaxis
        },
        dataLabels: { enabled: ((p = t.dataLabels) == null ? void 0 : p.enabled) ?? !1 },
        plotOptions: {
          ...t.plotOptions,
          bar: {
            horizontal: f === "funnel" || f === "rangebar",
            isFunnel: f === "funnel",
            ...(d = t.plotOptions) == null ? void 0 : d.bar
          },
          bubble: {
            minBubbleRadius: ((v = (x = t.plotOptions) == null ? void 0 : x.bubble) == null ? void 0 : v.minBubbleRadius) ?? 5,
            maxBubbleRadius: ((z = (w = t.plotOptions) == null ? void 0 : w.bubble) == null ? void 0 : z.maxBubbleRadius) ?? 20
          },
          // Radar/RadialBar often need explicit sizing to render well
          radar: { size: ((k = (A = t.plotOptions) == null ? void 0 : A.radar) == null ? void 0 : k.size) ?? 140 },
          radialBar: {
            hollow: { size: "70%" },
            ...(O = t.plotOptions) == null ? void 0 : O.radialBar
          }
        },
        title: {
          text: typeof l == "string" ? l : (l == null ? void 0 : l.text) || ((S = t.title) == null ? void 0 : S.text),
          align: (typeof l == "object" ? l == null ? void 0 : l.align : (F = t.title) == null ? void 0 : F.align) || "left",
          ...t.title
        }
      };
    }, [s, e, t, l, r]);
    return C(() => {
      c.current && (i.current ? i.current.updateOptions(m) : (i.current = new I(c.current, m), i.current.render()));
    }, [m]), E(b, () => ({
      zoomIn: () => {
        var n;
        return (n = i.current) == null ? void 0 : n.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var n;
        return (n = i.current) == null ? void 0 : n.zoomX(void 0, void 0);
      },
      reset: () => {
        var n;
        return (n = i.current) == null ? void 0 : n.resetSeries();
      },
      toggleFullscreen: () => {
        var n;
        document.fullscreenElement ? document.exitFullscreen() : (n = u.current) == null || n.requestFullscreen();
      }
    })), /* @__PURE__ */ R(
      "div",
      {
        ref: u,
        style: {
          height: a,
          width: "100%",
          backgroundColor: r ? "rgba(0,0,0,0.5)" : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s ease"
        },
        children: /* @__PURE__ */ R(
          "div",
          {
            ref: c,
            style: {
              width: r ? "70%" : "100%",
              // Makes it "Smaller and in Center"
              height: r ? "70%" : "100%",
              backgroundColor: "#fff",
              borderRadius: r ? "12px" : "0px",
              // Modal-like rounded corners
              padding: r ? "20px" : "0px",
              boxShadow: r ? "0 20px 25px -5px rgba(0,0,0,0.1)" : "none"
            }
          }
        )
      }
    );
  }
);
export {
  X as VizlyChart
};
