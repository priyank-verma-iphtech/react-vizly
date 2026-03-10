import { jsx as m } from "react/jsx-runtime";
import { forwardRef as p, useRef as i, useImperativeHandle as d, useEffect as a } from "react";
import g from "apexcharts";
const z = p(({ data: t, type: u, options: c, height: s = 350 }, l) => {
  const o = i(null), r = i(null);
  return d(l, () => ({
    zoomIn: () => {
      console.log("Zoom logic triggered");
    },
    zoomOut: () => {
      var e;
      (e = r.current) == null || e.resetSeries();
    },
    filter: (e) => {
      var n;
      (n = r.current) == null || n.updateSeries(e);
    },
    reset: () => {
      var e;
      (e = r.current) == null || e.resetSeries();
    }
  })), a(() => {
    if (!o.current)
      return;
    const e = u || (t.length > 0 && typeof t[0] == "number" ? "donut" : "bar"), n = {
      chart: {
        type: e,
        height: s,
        zoom: { enabled: !0 },
        toolbar: { show: !0 }
      },
      series: e === "donut" || e === "pie" ? t : [{ data: t }],
      ...c
    };
    return r.current = new g(o.current, n), r.current.render(), () => {
      var f;
      (f = r.current) == null || f.destroy();
    };
  }, [t, u, c, s]), /* @__PURE__ */ m("div", { ref: o });
});
export {
  z as VizlyChart
};
