import { jsxs as h, Fragment as w, jsx as i } from "react/jsx-runtime";
import { forwardRef as x, useRef as u, useState as z, useImperativeHandle as C, useEffect as p } from "react";
import v from "apexcharts";
const I = (n) => {
  if (!Array.isArray(n) || n.length === 0)
    return "bar";
  const e = n[0];
  return typeof e == "number" ? n.length <= 5 ? "donut" : n.length <= 10 ? "bar" : "area" : (e == null ? void 0 : e.x) !== void 0 && (e == null ? void 0 : e.y) !== void 0 && (e == null ? void 0 : e.z) !== void 0 ? "bubble" : (e == null ? void 0 : e.x) !== void 0 && (e == null ? void 0 : e.y) !== void 0 && Array.isArray(e.y) ? "scatter" : (e == null ? void 0 : e.x) !== void 0 && (e == null ? void 0 : e.y) !== void 0 ? "line" : "label" in e && "value" in e ? "treemap" : "value" in e && n.length === 1 ? "radialBar" : "bar";
}, R = x(
  ({ data: n, options: e, height: f = 350 }, g) => {
    const l = u(null), c = u(null), o = u(null), s = u(null), [a, d] = z(!1), b = I(n), y = (r, t) => t === "pie" || t === "donut" || t === "radialBar" ? r : t === "bubble" || t === "scatter" ? [{ data: r }] : t === "treemap" ? [{ data: r }] : [{ data: r }], m = (r) => ({
      chart: {
        type: b,
        height: r,
        zoom: { enabled: !0 },
        toolbar: {
          show: !0,
          tools: {
            download: !0,
            zoom: !0,
            zoomin: !0,
            zoomout: !0,
            pan: !0,
            reset: !0
          }
        }
      },
      series: y(n, b),
      ...e
    });
    return C(g, () => ({
      zoomIn: () => {
        var r;
        (r = o.current) == null || r.zoomX(10, 50);
      },
      zoomOut: () => {
        var r;
        (r = o.current) == null || r.resetSeries();
      },
      filter: (r) => {
        var t;
        (t = o.current) == null || t.updateSeries([{ data: r }]);
      },
      reset: () => {
        var r;
        (r = o.current) == null || r.resetSeries();
      },
      fullView: () => {
        d(!0);
      }
    })), p(() => {
      if (!l.current)
        return;
      const r = m(f);
      return o.current = new v(l.current, r), o.current.render(), () => {
        var t;
        (t = o.current) == null || t.destroy();
      };
    }, [n, f, e]), p(() => {
      if (!a || !c.current)
        return;
      const r = m("80vh");
      return s.current = new v(
        c.current,
        r
      ), s.current.render(), () => {
        var t;
        (t = s.current) == null || t.destroy();
      };
    }, [a]), /* @__PURE__ */ h(w, { children: [
      /* @__PURE__ */ h("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ i(
          "button",
          {
            style: {
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 10
            },
            onClick: () => d(!0),
            children: "Full View"
          }
        ),
        /* @__PURE__ */ i("div", { ref: l })
      ] }),
      a && /* @__PURE__ */ i(
        "div",
        {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1e3
          },
          children: /* @__PURE__ */ h(
            "div",
            {
              style: {
                width: "90%",
                height: "90%",
                background: "#fff",
                padding: 20,
                position: "relative"
              },
              children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: () => d(!1),
                    style: {
                      position: "absolute",
                      right: 20,
                      top: 20
                    },
                    children: "Close"
                  }
                ),
                /* @__PURE__ */ i("div", { ref: c })
              ]
            }
          )
        }
      )
    ] });
  }
);
export {
  R as VizlyChart
};
