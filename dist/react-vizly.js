import K, { forwardRef as ee, useRef as F, useImperativeHandle as re, useEffect as te } from "react";
import ne from "apexcharts";
var w = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function oe() {
  if (D)
    return _;
  D = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function i(f, c, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), c.key !== void 0 && (l = "" + c.key), "key" in c) {
      s = {};
      for (var a in c)
        a !== "key" && (s[a] = c[a]);
    } else
      s = c;
    return c = s.ref, {
      $$typeof: u,
      type: f,
      key: l,
      ref: c !== void 0 ? c : null,
      props: s
    };
  }
  return _.Fragment = d, _.jsx = i, _.jsxs = i, _;
}
var b = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ae() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case W:
          return "Profiler";
        case M:
          return "StrictMode";
        case G:
          return "Suspense";
        case J:
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
          case V:
            return e.displayName || "Context";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function i(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function f(e) {
      if (e === T)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (x.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function a(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function m() {
      var e = u(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, t, n, v, A) {
      var o = t.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
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
        value: v
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, n, v, A) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (B(o)) {
            for (n = 0; n < o.length; n++)
              P(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          P(o);
      if (x.call(r, "key")) {
        o = u(e);
        var E = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          E,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (i(t), o = "" + t), l(r) && (i(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else
        t = r;
      return o && a(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        o,
        t,
        c(),
        v,
        A
      );
    }
    function P(e) {
      h(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? h(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function h(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var p = K, j = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), V = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, B = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), I = S(f(s)), $ = {};
    b.Fragment = T, b.jsx = function(e, r, t) {
      var n = 1e4 > O.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : Y,
        n ? S(f(e)) : I
      );
    }, b.jsxs = function(e, r, t) {
      var n = 1e4 > O.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : Y,
        n ? S(f(e)) : I
      );
    };
  }()), b;
}
process.env.NODE_ENV === "production" ? w.exports = oe() : w.exports = ae();
var se = w.exports;
const le = ee(({ data: u, type: d, options: i, height: f = 350 }, c) => {
  const s = F(null), l = F(null);
  return re(c, () => ({
    zoomIn: () => {
      console.log("Zoom logic triggered");
    },
    zoomOut: () => {
      var a;
      (a = l.current) == null || a.resetSeries();
    },
    filter: (a) => {
      var m;
      (m = l.current) == null || m.updateSeries(a);
    },
    reset: () => {
      var a;
      (a = l.current) == null || a.resetSeries();
    }
  })), te(() => {
    if (!s.current)
      return;
    const a = d || (u.length > 0 && typeof u[0] == "number" ? "donut" : "bar"), m = {
      chart: {
        type: a,
        height: f,
        zoom: { enabled: !0 },
        toolbar: { show: !0 }
      },
      series: a === "donut" || a === "pie" ? u : [{ data: u }],
      ...i
    };
    return l.current = new ne(s.current, m), l.current.render(), () => {
      var R;
      (R = l.current) == null || R.destroy();
    };
  }, [u, d, i, f]), /* @__PURE__ */ se.jsx("div", { ref: s });
});
export {
  le as VizlyChart
};
