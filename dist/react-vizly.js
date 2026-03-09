import ee, { useState as I, useEffect as re, useRef as te } from "react";
var A = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ne() {
  if (M)
    return R;
  M = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function s(i, a, o) {
    var p = null;
    if (o !== void 0 && (p = "" + o), a.key !== void 0 && (p = "" + a.key), "key" in a) {
      o = {};
      for (var m in a)
        m !== "key" && (o[m] = a[m]);
    } else
      o = a;
    return a = o.ref, {
      $$typeof: t,
      type: i,
      key: p,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return R.Fragment = n, R.jsx = s, R.jsxs = s, R;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function oe() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case G:
            return e.displayName || "Context";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function s(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var l = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), n(e);
      }
    }
    function i(e) {
      if (e === y)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function l() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function v() {
      var e = t(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, r, l, u, j, O) {
      var f = l.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: l,
        _owner: u
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, l, u, j, O) {
      var f = r.children;
      if (f !== void 0)
        if (u)
          if (Q(f)) {
            for (u = 0; u < f.length; u++)
              T(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          T(f);
      if (N.call(r, "key")) {
        f = t(e);
        var x = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        u = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", F[f + u] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          x,
          f
        ), F[f + u] = !0);
      }
      if (f = null, l !== void 0 && (s(l), f = "" + l), p(r) && (s(r.key), f = "" + r.key), "key" in r) {
        l = {};
        for (var w in r)
          w !== "key" && (l[w] = r[w]);
      } else
        l = r;
      return f && m(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        f,
        l,
        a(),
        j,
        O
      );
    }
    function T(e) {
      d(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === g && (e._payload.status === "fulfilled" ? d(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function d(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var b = ee, P = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), k = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, Q = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, $ = {}, Y = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), z = S(i(o)), F = {};
    h.Fragment = y, h.jsx = function(e, r, l) {
      var u = 1e4 > k.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        l,
        !1,
        u ? Error("react-stack-top-frame") : Y,
        u ? S(i(e)) : z
      );
    }, h.jsxs = function(e, r, l) {
      var u = 1e4 > k.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        l,
        !0,
        u ? Error("react-stack-top-frame") : Y,
        u ? S(i(e)) : z
      );
    };
  }()), h;
}
process.env.NODE_ENV === "production" ? A.exports = ne() : A.exports = oe();
var c = A.exports;
function ae({ width: t, height: n, rows: s = 5 }) {
  const i = [];
  for (let a = 0; a <= s; a++) {
    const o = n / s * a;
    i.push(
      /* @__PURE__ */ c.jsx(
        "line",
        {
          x1: 0,
          x2: t,
          y1: o,
          y2: o,
          stroke: "#eee"
        },
        a
      )
    );
  }
  return /* @__PURE__ */ c.jsx("g", { children: i });
}
function se({ point: t }) {
  return t ? /* @__PURE__ */ c.jsxs(
    "div",
    {
      style: {
        position: "absolute",
        left: t.x,
        top: t.y,
        background: "#000",
        color: "#fff",
        padding: "6px 10px",
        fontSize: 12,
        borderRadius: 4
      },
      children: [
        t.label,
        ": ",
        t.value
      ]
    }
  ) : null;
}
function le({ points: t }) {
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: t.map((n, s) => /* @__PURE__ */ c.jsx(
    "text",
    {
      x: n.x,
      y: n.y - 8,
      fontSize: 10,
      textAnchor: "middle",
      children: n.value
    },
    s
  )) });
}
function ce({
  width: t,
  height: n,
  categories: s,
  series: i
}) {
  const [a, o] = I(null), p = Math.max(...i.flatMap((v) => v.data)), m = t / (s.length - 1);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("svg", { width: t, height: n, children: [
      /* @__PURE__ */ c.jsx(ae, { width: t, height: n }),
      i.map((v, E) => {
        const _ = v.data.map((d, b) => ({
          x: b * m,
          y: n - d / p * n,
          value: d,
          label: s[b]
        })), T = _.map(
          (d, b) => `${b === 0 ? "M" : "L"} ${d.x} ${d.y}`
        ).join(" ");
        return /* @__PURE__ */ c.jsxs("g", { children: [
          /* @__PURE__ */ c.jsx(
            "path",
            {
              d: T,
              fill: "none",
              stroke: v.color,
              strokeWidth: 2
            }
          ),
          _.map((d, b) => /* @__PURE__ */ c.jsx(
            "circle",
            {
              cx: d.x,
              cy: d.y,
              r: 4,
              fill: v.color,
              onMouseMove: () => o({
                x: d.x + 20,
                y: d.y,
                value: d.value,
                label: d.label
              })
            },
            b
          )),
          /* @__PURE__ */ c.jsx(le, { points: _ })
        ] }, E);
      })
    ] }),
    /* @__PURE__ */ c.jsx(se, { point: a })
  ] });
}
function ie(t) {
  const [n, s] = I({ width: 0, height: 0 });
  return re(() => {
    if (!t.current)
      return;
    const i = new ResizeObserver((a) => {
      const o = a[0].contentRect;
      s({
        width: o.width,
        height: o.height
      });
    });
    return i.observe(t.current), () => i.disconnect();
  }, [t]), n;
}
function ue(t, n, s) {
  const i = t.map((o) => o[n]), a = s.map((o) => ({
    name: o,
    data: t.map((p) => p[o])
  }));
  return { categories: i, series: a };
}
function fe(t) {
  return t.map((n, s) => ({
    id: s,
    name: n.name,
    data: n.data || [],
    color: n.color || `hsl(${s * 60},70%,50%)`
  }));
}
function de({ series: t }) {
  return /* @__PURE__ */ c.jsx("div", { style: { display: "flex", gap: 10 }, children: t.map((n) => /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", gap: 5 }, children: [
    /* @__PURE__ */ c.jsx(
      "span",
      {
        style: {
          width: 10,
          height: 10,
          background: n.color
        }
      }
    ),
    n.name
  ] }, n.id)) });
}
function pe({
  type: t = "line",
  data: n,
  x: s,
  y: i,
  series: a
}) {
  const o = te(), p = ie(o);
  let m = a, v = [];
  if (n && s && i) {
    const E = ue(n, s, i);
    m = E.series, v = E.categories;
  }
  return m = fe(m), /* @__PURE__ */ c.jsxs("div", { ref: o, style: { width: "100%", height: 400 }, children: [
    /* @__PURE__ */ c.jsx(de, { series: m }),
    t === "line" && /* @__PURE__ */ c.jsx(
      ce,
      {
        width: p.width,
        height: 350,
        categories: v,
        series: m
      }
    )
  ] });
}
export {
  pe as VizlyChart
};
