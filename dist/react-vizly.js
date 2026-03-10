import { jsxs as d, Fragment as x, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useRef as u, useState as w, useImperativeHandle as C, useEffect as b } from "react";
import m from "apexcharts";
const j = (t) => {
  if (!Array.isArray(t) || t.length === 0)
    return "bar";
  const e = t[0];
  return typeof e == "number" ? t.length <= 5 ? "donut" : t.length <= 10 ? "bar" : "area" : typeof e == "object" && "x" in e && "y" in e && typeof e.y == "number" ? "line" : typeof e == "object" && "x" in e && "y" in e && Array.isArray(e.y) ? "scatter" : typeof e == "object" && "x" in e && "y" in e && "z" in e ? "bubble" : typeof e == "object" && "x" in e && "y" in e && typeof e.y == "number" ? "heatmap" : typeof e == "object" && "label" in e && "value" in e ? "treemap" : typeof e == "object" && "value" in e && t.length === 1 ? "radialBar" : "bar";
}, S = v(
  ({ data: t, options: e, height: h = 350 }, g) => {
    const l = u(null), s = u(null), i = u(null), c = u(null), [f, a] = w(!1), y = j(t), p = (r) => ({
      chart: {
        type: y,
        height: r,
        zoom: { enabled: !0 },
        toolbar: { show: !0 }
      },
      series: y === "donut" || y === "pie" ? t : [{ data: t }],
      ...e
    });
    return C(g, () => ({
      zoomIn: () => {
        var r;
        (r = i.current) == null || r.zoomX(0, 100);
      },
      zoomOut: () => {
        var r;
        (r = i.current) == null || r.resetSeries();
      },
      filter: (r) => {
        var n;
        (n = i.current) == null || n.updateSeries([{ data: r }]);
      },
      reset: () => {
        var r;
        (r = i.current) == null || r.resetSeries();
      },
      fullView: () => {
        a(!0);
      }
    })), b(() => {
      if (!l.current)
        return;
      const r = p(h);
      return i.current = new m(l.current, r), i.current.render(), () => {
        var n;
        (n = i.current) == null || n.destroy();
      };
    }, [t, h, e]), b(() => {
      if (!f || !s.current)
        return;
      const r = p("80vh");
      return c.current = new m(
        s.current,
        r
      ), c.current.render(), () => {
        var n;
        (n = c.current) == null || n.destroy();
      };
    }, [f]), /* @__PURE__ */ d(x, { children: [
      /* @__PURE__ */ d("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ o(
          "button",
          {
            style: {
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 10
            },
            onClick: () => a(!0),
            children: "Full View"
          }
        ),
        /* @__PURE__ */ o("div", { ref: l })
      ] }),
      f && /* @__PURE__ */ o(
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
          children: /* @__PURE__ */ d(
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
                /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: () => a(!1),
                    style: {
                      position: "absolute",
                      right: 20,
                      top: 20
                    },
                    children: "Close"
                  }
                ),
                /* @__PURE__ */ o("div", { ref: s })
              ]
            }
          )
        }
      )
    ] });
  }
);
export {
  S as VizlyChart
};
