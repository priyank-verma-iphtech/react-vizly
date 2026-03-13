import { jsx as bt, jsxs as ln } from "react/jsx-runtime";
import _e, { forwardRef as Li, useRef as _t, useState as Ni, useMemo as dr, useEffect as un, useImperativeHandle as Hi } from "react";
import cn from "apexcharts";
const fn = (u) => {
  if (!u || u.length === 0)
    return "bar";
  const l = u[0];
  if (typeof l == "number")
    return "donut";
  if (typeof l != "object")
    return "bar";
  const f = Object.values(l).filter(
    (E) => typeof E == "number"
  );
  return l.stage && l.value ? "funnel" : l.label && l.value ? "donut" : l.category && l.value ? "polararea" : l.x !== void 0 && l.y !== void 0 && l.value !== void 0 ? "heatmap" : l.name && l.value && Array.isArray(l.children) ? "treemap" : Array.isArray(l.y) && l.y.length === 4 ? "candlestick" : Array.isArray(l.y) && l.y.length === 5 ? "boxplot" : Array.isArray(l.y) && l.y.length === 2 ? "rangebar" : l.x !== void 0 && l.y !== void 0 && l.r !== void 0 ? "bubble" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : l.x && !isNaN(Date.parse(l.x)) ? "line" : l.start !== void 0 && l.end !== void 0 ? "slope" : f.length > 1 ? "mixed" : (l.x !== void 0 && l.y !== void 0, "bar");
}, Wi = {
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
}, dn = (u, l) => {
  const f = Wi[u] || "xy";
  let E = [], C = [], _ = [];
  if (!l || l.length === 0)
    return { series: E, labels: C, categories: _ };
  const g = l[0], I = Object.keys(g).filter(
    (w) => typeof g[w] == "number"
  ), M = Object.keys(g).find(
    (w) => typeof g[w] == "string"
  );
  switch (f) {
    case "circular":
      E = l.map((w) => w.value ?? w.y ?? w), C = l.map(
        (w) => w.label ?? w.category ?? w.name ?? w.x
      );
      break;
    case "category":
      _ = l.map((w) => w.x ?? w.category ?? w.stage ?? w[M]), I.length > 1 ? E = I.map((w) => ({
        name: w,
        data: l.map((P) => P[w])
      })) : E = [{
        name: I[0] || "Series 1",
        data: l.map((w) => w.y ?? w.value)
      }];
      break;
    case "heatmap":
      E = [{
        name: "Series 1",
        data: l.map((w) => ({
          x: w.x,
          y: w.value ?? w.y
        }))
      }];
      break;
    case "range":
      E = [{ name: "Series 1", data: l }];
      break;
    default:
      u === "bubble" ? E = [{
        name: "Series 1",
        data: l.map((w) => ({
          x: w.x,
          y: w.y,
          r: w.r
        }))
      }] : I.length > 1 ? E = I.map((w) => ({
        name: w,
        data: l.map((P) => ({
          x: P.x ?? P[M],
          y: P[w]
        }))
      })) : E = [{
        name: "Series 1",
        data: l.map((w) => ({
          x: w.x,
          y: w.y
        }))
      }];
  }
  return { series: E, labels: C, categories: _ };
};
function Ui(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var hr = { exports: {} }, rt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, pn;
function yn() {
  if (pn)
    return pr;
  pn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function E(_) {
    if (_ == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(_);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var _ = new String("abc");
      if (_[5] = "de", Object.getOwnPropertyNames(_)[0] === "5")
        return !1;
      for (var g = {}, I = 0; I < 10; I++)
        g["_" + String.fromCharCode(I)] = I;
      var M = Object.getOwnPropertyNames(g).map(function(P) {
        return g[P];
      });
      if (M.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(P) {
        w[P] = P;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = C() ? Object.assign : function(_, g) {
    for (var I, M = E(_), w, P = 1; P < arguments.length; P++) {
      I = Object(arguments[P]);
      for (var Q in I)
        l.call(I, Q) && (M[Q] = I[Q]);
      if (u) {
        w = u(I);
        for (var Z = 0; Z < w.length; Z++)
          f.call(I, w[Z]) && (M[w[Z]] = I[w[Z]]);
      }
    }
    return M;
  }, pr;
}
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function Vi() {
  if (hn)
    return rt;
  hn = 1;
  var u = yn(), l = _e;
  function f(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, C = 60107, _ = 60108, g = 60114, I = 60109, M = 60110, w = 60112, P = 60113, Q = 60120, Z = 60115, B = 60116, ne = 60121, T = 60117, ve = 60119, ue = 60129, ce = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var z = Symbol.for;
    E = z("react.portal"), C = z("react.fragment"), _ = z("react.strict_mode"), g = z("react.profiler"), I = z("react.provider"), M = z("react.context"), w = z("react.forward_ref"), P = z("react.suspense"), Q = z("react.suspense_list"), Z = z("react.memo"), B = z("react.lazy"), ne = z("react.block"), T = z("react.fundamental"), ve = z("react.scope"), ue = z("react.debug_trace_mode"), ce = z("react.legacy_hidden");
  }
  function ge(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case C:
        return "Fragment";
      case E:
        return "Portal";
      case g:
        return "Profiler";
      case _:
        return "StrictMode";
      case P:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case M:
          return (r.displayName || "Context") + ".Consumer";
        case I:
          return (r._context.displayName || "Context") + ".Provider";
        case w:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case Z:
          return ge(r.type);
        case ne:
          return ge(r._render);
        case B:
          a = r._payload, r = r._init;
          try {
            return ge(r(a));
          } catch {
          }
      }
    return null;
  }
  var $e = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fe = {};
  function me(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function L(r, a, i, d) {
    if (d && (d = r.contextType, typeof d == "object" && d !== null))
      return me(d, i), d[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = Fe;
    return a;
  }
  for (var U = new Uint16Array(16), Oe = 0; 15 > Oe; Oe++)
    U[Oe] = Oe + 1;
  U[15] = 0;
  var $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xe = Object.prototype.hasOwnProperty, ye = {}, je = {};
  function ze(r) {
    return Xe.call(je, r) ? !0 : Xe.call(ye, r) ? !1 : $.test(r) ? je[r] = !0 : (ye[r] = !0, !1);
  }
  function Ge(r, a, i, d) {
    if (i !== null && i.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d ? !1 : i !== null ? !i.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function Ze(r, a, i, d) {
    if (a === null || typeof a > "u" || Ge(r, a, i, d))
      return !0;
    if (d)
      return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function V(r, a, i, d, k, b, y) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = d, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = b, this.removeEmptyString = y;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    N[r] = new V(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    N[a] = new V(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    N[r] = new V(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    N[r] = new V(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    N[r] = new V(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    N[r] = new V(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    N[r] = new V(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    N[r] = new V(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    N[r] = new V(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Le = /[\-:]([a-z])/g;
  function be(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Le,
      be
    );
    N[a] = new V(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Le, be);
    N[a] = new V(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Le, be);
    N[a] = new V(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    N[r] = new V(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new V("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    N[r] = new V(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var it = /["'&<>]/;
  function xe(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var a = it.exec(r);
    if (a) {
      var i = "", d, k = 0;
      for (d = a.index; d < r.length; d++) {
        switch (r.charCodeAt(d)) {
          case 34:
            a = "&quot;";
            break;
          case 38:
            a = "&amp;";
            break;
          case 39:
            a = "&#x27;";
            break;
          case 60:
            a = "&lt;";
            break;
          case 62:
            a = "&gt;";
            break;
          default:
            continue;
        }
        k !== d && (i += r.substring(k, d)), k = d + 1, i += a;
      }
      r = k !== d ? i + r.substring(k, d) : i;
    }
    return r;
  }
  function xt(r, a) {
    var i = N.hasOwnProperty(r) ? N[r] : null, d;
    return (d = r !== "style") && (d = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), d || Ze(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, d = i.type, d === 3 || d === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (xe(a) + '"'))) : ze(r) ? r + '="' + (xe(a) + '"') : "";
  }
  function wt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var ot = typeof Object.is == "function" ? Object.is : wt, ie = null, Pe = null, A = null, Ne = !1, Ke = !1, Re = null, Ae = 0;
  function Ie() {
    if (ie === null)
      throw Error(f(321));
    return ie;
  }
  function kt() {
    if (0 < Ae)
      throw Error(f(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function He() {
    return A === null ? Pe === null ? (Ne = !1, Pe = A = kt()) : (Ne = !0, A = Pe) : A.next === null ? (Ne = !1, A = A.next = kt()) : (Ne = !0, A = A.next), A;
  }
  function Ft(r, a, i, d) {
    for (; Ke; )
      Ke = !1, Ae += 1, A = null, i = r(a, d);
    return at(), i;
  }
  function at() {
    ie = null, Ke = !1, Pe = null, Ae = 0, A = Re = null;
  }
  function st(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function St(r, a, i) {
    if (ie = Ie(), A = He(), Ne) {
      var d = A.queue;
      if (a = d.dispatch, Re !== null && (i = Re.get(d), i !== void 0)) {
        Re.delete(d), d = A.memoizedState;
        do
          d = r(d, i.action), i = i.next;
        while (i !== null);
        return A.memoizedState = d, [d, a];
      }
      return [A.memoizedState, a];
    }
    return r = r === st ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, A.memoizedState = r, r = A.queue = { last: null, dispatch: null }, r = r.dispatch = Qe.bind(null, ie, r), [A.memoizedState, r];
  }
  function Et(r, a) {
    if (ie = Ie(), A = He(), a = a === void 0 ? null : a, A !== null) {
      var i = A.memoizedState;
      if (i !== null && a !== null) {
        var d = i[1];
        e:
          if (d === null)
            d = !1;
          else {
            for (var k = 0; k < d.length && k < a.length; k++)
              if (!ot(a[k], d[k])) {
                d = !1;
                break e;
              }
            d = !0;
          }
        if (d)
          return i[0];
      }
    }
    return r = r(), A.memoizedState = [r, a], r;
  }
  function Qe(r, a, i) {
    if (!(25 > Ae))
      throw Error(f(301));
    if (r === ie)
      if (Ke = !0, r = { action: i, next: null }, Re === null && (Re = /* @__PURE__ */ new Map()), i = Re.get(a), i === void 0)
        Re.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function Ot() {
  }
  var q = null, lt = { readContext: function(r) {
    var a = q.threadID;
    return me(r, a), r[a];
  }, useContext: function(r) {
    Ie();
    var a = q.threadID;
    return me(r, a), r[a];
  }, useMemo: Et, useReducer: St, useRef: function(r) {
    ie = Ie(), A = He();
    var a = A.memoizedState;
    return a === null ? (r = { current: r }, A.memoizedState = r) : a;
  }, useState: function(r) {
    return St(st, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return Et(function() {
      return r;
    }, a);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(r) {
    return Ie(), r;
  }, useTransition: function() {
    return Ie(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (q.identifierPrefix || "") + "R:" + (q.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return Ie(), a(r._source);
  } }, Kt = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Qt(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  var Rt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, ut = u({ menuitem: !0 }, Rt), fe = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, It = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fe).forEach(function(r) {
    It.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), fe[a] = fe[r];
    });
  });
  var We = /([A-Z])/g, ct = /^ms-/, we = l.Children.toArray, ft = $e.ReactCurrentDispatcher, jt = { listing: !0, pre: !0, textarea: !0 }, Je = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, zt = {}, Ct = {};
  function Lt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var Nt = Object.prototype.hasOwnProperty, Ht = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function Tt(r, a) {
    if (r === void 0)
      throw Error(f(152, ge(a) || "Component"));
  }
  function Jt(r, a, i) {
    function d(y, S) {
      var m = S.prototype && S.prototype.isReactComponent, J = L(S, a, i, m), X = [], ee = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (X === null)
          return null;
      }, enqueueReplaceState: function(Dt, F) {
        ee = !0, X = [F];
      }, enqueueSetState: function(Dt, F) {
        if (X === null)
          return null;
        X.push(F);
      } };
      if (m) {
        if (m = new S(y.props, J, H), typeof S.getDerivedStateFromProps == "function") {
          var D = S.getDerivedStateFromProps.call(null, y.props, m.state);
          D != null && (m.state = u({}, m.state, D));
        }
      } else if (ie = {}, m = S(
        y.props,
        J,
        H
      ), m = Ft(S, y.props, m, J), m == null || m.render == null) {
        r = m, Tt(r, S);
        return;
      }
      if (m.props = y.props, m.context = J, m.updater = H, H = m.state, H === void 0 && (m.state = H = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), X.length) {
          H = X;
          var G = ee;
          if (X = null, ee = !1, G && H.length === 1)
            m.state = H[0];
          else {
            D = G ? H[0] : m.state;
            var Ce = !0;
            for (G = G ? 1 : 0; G < H.length; G++) {
              var oe = H[G];
              oe = typeof oe == "function" ? oe.call(m, D, y.props, J) : oe, oe != null && (Ce ? (Ce = !1, D = u({}, D, oe)) : u(D, oe));
            }
            m.state = D;
          }
        } else
          X = null;
      if (r = m.render(), Tt(r, S), typeof m.getChildContext == "function" && (y = S.childContextTypes, typeof y == "object")) {
        var ae = m.getChildContext();
        for (var de in ae)
          if (!(de in y))
            throw Error(f(108, ge(S) || "Unknown", de));
      }
      ae && (a = u({}, a, ae));
    }
    for (; l.isValidElement(r); ) {
      var k = r, b = k.type;
      if (typeof b != "function")
        break;
      d(k, b);
    }
    return { child: r, context: a };
  }
  var dt = function() {
    function r(i, d, k) {
      l.isValidElement(i) ? i.type !== C ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : we(i)) : i = we(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Fe, footer: "" };
      var b = U[0];
      if (b === 0) {
        var y = U;
        b = y.length;
        var S = 2 * b;
        if (!(65536 >= S))
          throw Error(f(304));
        var m = new Uint16Array(S);
        for (m.set(y), U = m, U[0] = b + 1, y = b; y < S - 1; y++)
          U[y] = y + 1;
        U[S - 1] = 0;
      } else
        U[0] = U[b];
      this.threadID = b, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = d, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        U[i] = U[0], U[0] = i;
      }
    }, a.pushProvider = function(i) {
      var d = ++this.contextIndex, k = i.type._context, b = this.threadID;
      me(k, b);
      var y = k[b];
      this.contextStack[d] = k, this.contextValueStack[d] = y, k[b] = i.props.value;
    }, a.popProvider = function() {
      var i = this.contextIndex, d = this.contextStack[i], k = this.contextValueStack[i];
      this.contextStack[i] = null, this.contextValueStack[i] = null, this.contextIndex--, d[this.threadID] = k;
    }, a.clearProviders = function() {
      for (var i = this.contextIndex; 0 <= i; i--)
        this.contextStack[i][this.threadID] = this.contextValueStack[i];
    }, a.read = function(i) {
      if (this.exhausted)
        return null;
      var d = q;
      q = this;
      var k = ft.current;
      ft.current = lt;
      try {
        for (var b = [""], y = !1; b[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            U[S] = U[0], U[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (y || m.childIndex >= m.children.length) {
            var J = m.footer;
            if (J !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === I)
              this.popProvider(m.type);
            else if (m.type === P) {
              this.suspenseDepth--;
              var X = b.pop();
              if (y) {
                y = !1;
                var ee = m.fallbackFrame;
                if (!ee)
                  throw Error(f(303));
                this.stack.push(ee), b[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                b[this.suspenseDepth] += X;
            }
            b[this.suspenseDepth] += J;
          } else {
            var H = m.children[m.childIndex++], D = "";
            try {
              D += this.render(H, m.context, m.domNamespace);
            } catch (G) {
              throw G != null && typeof G.then == "function" ? Error(f(294)) : G;
            } finally {
            }
            b.length <= this.suspenseDepth && b.push(""), b[this.suspenseDepth] += D;
          }
        }
        return b[0];
      } finally {
        ft.current = k, q = d, at();
      }
    }, a.render = function(i, d, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? xe(k) : this.previousWasTextNode ? "<!-- -->" + xe(k) : (this.previousWasTextNode = !0, xe(k));
      if (d = Jt(i, d, this.threadID), i = d.child, d = d.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? f(257) : f(258, k.toString()));
        return i = we(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: d, footer: "" }), "";
      }
      var b = i.type;
      if (typeof b == "string")
        return this.renderDOM(i, d, k);
      switch (b) {
        case ce:
        case ue:
        case _:
        case g:
        case Q:
        case C:
          return i = we(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: d,
            footer: ""
          }), "";
        case P:
          throw Error(f(294));
        case ve:
          throw Error(f(343));
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case w:
            ie = {};
            var y = b.render(i.props, i.ref);
            return y = Ft(b.render, i.props, y, i.ref), y = we(y), this.stack.push({ type: null, domNamespace: k, children: y, childIndex: 0, context: d, footer: "" }), "";
          case Z:
            return i = [l.createElement(b.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: d, footer: "" }), "";
          case I:
            return b = we(i.props.children), k = { type: i, domNamespace: k, children: b, childIndex: 0, context: d, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case M:
            b = i.type, y = i.props;
            var S = this.threadID;
            return me(b, S), b = we(y.children(b[S])), this.stack.push({ type: i, domNamespace: k, children: b, childIndex: 0, context: d, footer: "" }), "";
          case T:
            throw Error(f(338));
          case B:
            return b = i.type, y = b._init, b = y(b._payload), i = [l.createElement(b, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: d,
              footer: ""
            }), "";
        }
      throw Error(f(130, b == null ? b : typeof b, ""));
    }, a.renderDOM = function(i, d, k) {
      var b = i.type.toLowerCase();
      if (!zt.hasOwnProperty(b)) {
        if (!Je.test(b))
          throw Error(f(65, b));
        zt[b] = !0;
      }
      var y = i.props;
      if (b === "input")
        y = u({ type: void 0 }, y, { defaultChecked: void 0, defaultValue: void 0, value: y.value != null ? y.value : y.defaultValue, checked: y.checked != null ? y.checked : y.defaultChecked });
      else if (b === "textarea") {
        var S = y.value;
        if (S == null) {
          S = y.defaultValue;
          var m = y.children;
          if (m != null) {
            if (S != null)
              throw Error(f(92));
            if (Array.isArray(m)) {
              if (!(1 >= m.length))
                throw Error(f(93));
              m = m[0];
            }
            S = "" + m;
          }
          S == null && (S = "");
        }
        y = u({}, y, { value: void 0, children: "" + S });
      } else if (b === "select")
        this.currentSelectValue = y.value != null ? y.value : y.defaultValue, y = u({}, y, { value: void 0 });
      else if (b === "option") {
        m = this.currentSelectValue;
        var J = Lt(y.children);
        if (m != null) {
          var X = y.value != null ? y.value + "" : J;
          if (S = !1, Array.isArray(m)) {
            for (var ee = 0; ee < m.length; ee++)
              if ("" + m[ee] === X) {
                S = !0;
                break;
              }
          } else
            S = "" + m === X;
          y = u(
            { selected: void 0, children: void 0 },
            y,
            { selected: S, children: J }
          );
        }
      }
      if (S = y) {
        if (ut[b] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(f(137, b));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(f(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(f(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(f(62));
      }
      S = y, m = this.makeStaticMarkup, J = this.stack.length === 1, X = "<" + i.type;
      e:
        if (b.indexOf("-") === -1)
          ee = typeof S.is == "string";
        else
          switch (b) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              ee = !1;
              break e;
            default:
              ee = !0;
          }
      for (F in S)
        if (Nt.call(S, F)) {
          var H = S[F];
          if (H != null) {
            if (F === "style") {
              var D = void 0, G = "", Ce = "";
              for (D in H)
                if (H.hasOwnProperty(D)) {
                  var oe = D.indexOf("--") === 0, ae = H[D];
                  if (ae != null) {
                    if (oe)
                      var de = D;
                    else if (de = D, Ct.hasOwnProperty(de))
                      de = Ct[de];
                    else {
                      var Dt = de.replace(We, "-$1").toLowerCase().replace(ct, "-ms-");
                      de = Ct[de] = Dt;
                    }
                    G += Ce + de + ":", Ce = D, oe = ae == null || typeof ae == "boolean" || ae === "" ? "" : oe || typeof ae != "number" || ae === 0 || fe.hasOwnProperty(Ce) && fe[Ce] ? ("" + ae).trim() : ae + "px", G += oe, Ce = ";";
                  }
                }
              H = G || null;
            }
            D = null, ee ? Ht.hasOwnProperty(F) || (D = F, D = ze(D) && H != null ? D + '="' + (xe(H) + '"') : "") : D = xt(F, H), D && (X += " " + D);
          }
        }
      m || J && (X += ' data-reactroot=""');
      var F = X;
      S = "", Rt.hasOwnProperty(b) ? F += "/>" : (F += ">", S = "</" + i.type + ">");
      e: {
        if (m = y.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = y.children, typeof m == "string" || typeof m == "number") {
          m = xe(m);
          break e;
        }
        m = null;
      }
      return m != null ? (y = [], jt.hasOwnProperty(b) && m.charAt(0) === `
` && (F += `
`), F += m) : y = we(y.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: b, children: y, childIndex: 0, context: d, footer: S }), this.previousWasTextNode = !1, F;
    }, r;
  }();
  return rt.renderToNodeStream = function() {
    throw Error(f(207));
  }, rt.renderToStaticMarkup = function(r, a) {
    r = new dt(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, rt.renderToStaticNodeStream = function() {
    throw Error(f(208));
  }, rt.renderToString = function(r, a) {
    r = new dt(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, rt.version = "17.0.2", rt;
}
var nt = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function qi() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = _e, l = yn();
    function f(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", C = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("warn", e, n);
      }
    }
    function g(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("error", e, n);
      }
    }
    function I(e, t, n) {
      {
        var o = C.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var M = 60106, w = 60107, P = 60108, Q = 60114, Z = 60109, B = 60110, ne = 60112, T = 60113, ve = 60120, ue = 60115, ce = 60116, z = 60121, ge = 60117, $e = 60119, Fe = 60129, me = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var L = Symbol.for;
      L("react.element"), M = L("react.portal"), w = L("react.fragment"), P = L("react.strict_mode"), Q = L("react.profiler"), Z = L("react.provider"), B = L("react.context"), ne = L("react.forward_ref"), T = L("react.suspense"), ve = L("react.suspense_list"), ue = L("react.memo"), ce = L("react.lazy"), z = L("react.block"), L("react.server.block"), ge = L("react.fundamental"), $e = L("react.scope"), L("react.opaque.id"), Fe = L("react.debug_trace_mode"), L("react.offscreen"), me = L("react.legacy_hidden");
    }
    function U(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Oe(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case M:
          return "Portal";
        case Q:
          return "Profiler";
        case P:
          return "StrictMode";
        case T:
          return "Suspense";
        case ve:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            var t = e;
            return Oe(t) + ".Consumer";
          case Z:
            var n = e;
            return Oe(n._context) + ".Provider";
          case ne:
            return U(e, e.render, "ForwardRef");
          case ue:
            return $(e.type);
          case z:
            return $(e._render);
          case ce: {
            var o = e, s = o._payload, h = o._init;
            try {
              return $(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = !1, ye = 0, je, ze, Ge, Ze, V, N, Le;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function it() {
      {
        if (ye === 0) {
          je = console.log, ze = console.info, Ge = console.warn, Ze = console.error, V = console.group, N = console.groupCollapsed, Le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ye++;
      }
    }
    function xe() {
      {
        if (ye--, ye === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: je
            }),
            info: l({}, e, {
              value: ze
            }),
            warn: l({}, e, {
              value: Ge
            }),
            error: l({}, e, {
              value: Ze
            }),
            group: l({}, e, {
              value: V
            }),
            groupCollapsed: l({}, e, {
              value: N
            }),
            groupEnd: l({}, e, {
              value: Le
            })
          });
        }
        ye < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = C.ReactCurrentDispatcher, wt;
    function ot(e, t, n) {
      {
        if (wt === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            wt = o && o[1] || "";
          }
        return `
` + wt + e;
      }
    }
    var ie = !1, Pe;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new A();
    }
    function Ne(e, t) {
      if (!e || ie)
        return "";
      {
        var n = Pe.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ie = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = xt.current, xt.current = null, it();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (W) {
              o = W;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (W) {
              o = W;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            o = W;
          }
          e();
        }
      } catch (W) {
        if (W && o && typeof W.stack == "string") {
          for (var v = W.stack.split(`
`), p = o.stack.split(`
`), O = v.length - 1, R = p.length - 1; O >= 1 && R >= 0 && v[O] !== p[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (v[O] !== p[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || v[O] !== p[R]) {
                    var Y = `
` + v[O].replace(" at new ", " at ");
                    return typeof e == "function" && Pe.set(e, Y), Y;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, xt.current = h, xe(), Error.prepareStackTrace = s;
      }
      var K = e ? e.displayName || e.name : "", x = K ? ot(K) : "";
      return typeof e == "function" && Pe.set(e, x), x;
    }
    function Ke(e, t, n) {
      return Ne(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ae(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ne(e, Re(e));
      if (typeof e == "string")
        return ot(e);
      switch (e) {
        case T:
          return ot("Suspense");
        case ve:
          return ot("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return Ke(e.render);
          case ue:
            return Ae(e.type, t, n);
          case z:
            return Ke(e._render);
          case ce: {
            var o = e, s = o._payload, h = o._init;
            try {
              return Ae(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = {}, kt = C.ReactDebugCurrentFrame;
    function He(e) {
      if (e) {
        var t = e._owner, n = Ae(e.type, e._source, t ? t.type : null);
        kt.setExtraStackFrame(n);
      } else
        kt.setExtraStackFrame(null);
    }
    function Ft(e, t, n, o, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
            var v = void 0;
            try {
              if (typeof e[c] != "function") {
                var p = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              v = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              v = O;
            }
            v && !(v instanceof Error) && (He(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof v), He(null)), v instanceof Error && !(v.message in Ie) && (Ie[v.message] = !0, He(s), g("Failed %s type: %s", n, v.message), He(null));
          }
      }
    }
    var at;
    at = /* @__PURE__ */ new Set();
    var st = {};
    Object.freeze(st);
    function St(e, t) {
      var n = e.contextTypes;
      if (!n)
        return st;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function Et(e, t, n) {
      Ft(e, t, n, "Component");
    }
    function Qe(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Ot(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === B && s._context === void 0
          );
          if (!h && !at.has(e)) {
            at.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === Z ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", $(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Qe(s, n), s[n];
        {
          var v = St(e, t);
          return e.contextTypes && Et(e.contextTypes, v, "context"), v;
        }
      } else {
        var p = St(e, t);
        return e.contextTypes && Et(e.contextTypes, p, "context"), p;
      }
    }
    for (var q = new Uint16Array(16), lt = 0; lt < 15; lt++)
      q[lt] = lt + 1;
    q[15] = 0;
    function Kt() {
      var e = q, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), q = o, q[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        q[s] = s + 1;
      return q[n - 1] = 0, t;
    }
    function Qt() {
      var e = q[0];
      return e === 0 ? Kt() : (q[0] = q[e], e);
    }
    function Rt(e) {
      q[e] = q[0], q[0] = e;
    }
    var ut = 0, fe = 1, It = 2, We = 3, ct = 4, we = 5, ft = 6, jt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Je = jt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", zt = "data-reactroot", Ct = new RegExp("^[" + jt + "][" + Je + "]*$"), Lt = Object.prototype.hasOwnProperty, Nt = {}, Ht = {};
    function Tt(e) {
      return Lt.call(Ht, e) ? !0 : Lt.call(Nt, e) ? !1 : Ct.test(e) ? (Ht[e] = !0, !0) : (Nt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === ut : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function dt(e, t, n, o) {
      if (n !== null && n.type === ut)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
            return !1;
          if (n !== null)
            return !n.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function r(e, t, n, o) {
      if (t === null || typeof t > "u" || dt(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case We:
            return !t;
          case ct:
            return t === !1;
          case we:
            return isNaN(t);
          case ft:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return d.hasOwnProperty(e) ? d[e] : null;
    }
    function i(e, t, n, o, s, h, c) {
      this.acceptsBooleans = t === It || t === We || t === ct, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
    }
    var d = {}, k = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    k.forEach(function(e) {
      d[e] = new i(
        e,
        ut,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      d[t] = new i(
        t,
        fe,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      d[e] = new i(
        e,
        It,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      d[e] = new i(
        e,
        It,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      d[e] = new i(
        e,
        We,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      d[e] = new i(
        e,
        We,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      d[e] = new i(
        e,
        ct,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      d[e] = new i(
        e,
        ft,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      d[e] = new i(
        e,
        we,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var b = /[\-\:]([a-z])/g, y = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(b, y);
      d[t] = new i(
        t,
        fe,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(b, y);
      d[t] = new i(
        t,
        fe,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(b, y);
      d[t] = new i(
        t,
        fe,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      d[e] = new i(
        e,
        fe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var S = "xlinkHref";
    d[S] = new i(
      "xlinkHref",
      fe,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      d[e] = new i(
        e,
        fe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function X(e) {
      !J && m.test(e) && (J = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ee = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = ee.exec(t);
      if (!n)
        return t;
      var o, s = "", h, c = 0;
      for (h = n.index; h < t.length; h++) {
        switch (t.charCodeAt(h)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        c !== h && (s += t.substring(c, h)), c = h + 1, s += o;
      }
      return c !== h ? s + t.substring(c, h) : s;
    }
    function D(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function G(e) {
      return '"' + D(e) + '"';
    }
    function Ce() {
      return zt + '=""';
    }
    function oe(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === We || s === ct && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, X(t)), o + "=" + G(t));
      } else if (Tt(e))
        return e + "=" + G(t);
      return "";
    }
    function ae(e, t) {
      return !Tt(e) || t == null ? "" : e + "=" + G(t);
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Dt = typeof Object.is == "function" ? Object.is : de, F = null, Wt = null, j = null, Pt = !1, Ut = !1, Ue = null, Vt = 0, kn = 25, Te = !1, pt;
    function et() {
      if (F === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Te && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), F;
    }
    function Sn(e, t) {
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", pt), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, pt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dt(e[n], t[n]))
          return !1;
      return !0;
    }
    function vr() {
      if (Vt > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function er() {
      return j === null ? Wt === null ? (Pt = !1, Wt = j = vr()) : (Pt = !0, j = Wt) : j.next === null ? (Pt = !1, j = j.next = vr()) : (Pt = !0, j = j.next), j;
    }
    function gr(e) {
      F = e, Te = !1;
    }
    function mr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Vt += 1, j = null, n = e(t, o);
      return yr(), n;
    }
    function yr() {
      Te = !1, F = null, Ut = !1, Wt = null, Vt = 0, Ue = null, j = null;
    }
    function En(e, t) {
      var n = ht.threadID;
      return Qe(e, n), Te && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      pt = "useContext", et();
      var n = ht.threadID;
      return Qe(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return pt = "useState", br(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function br(e, t, n) {
      if (e !== tr && (pt = "useReducer"), F = et(), j = er(), Pt) {
        var o = j.queue, s = o.dispatch;
        if (Ue !== null) {
          var h = Ue.get(o);
          if (h !== void 0) {
            Ue.delete(o);
            var c = j.memoizedState, v = h;
            do {
              var p = v.action;
              Te = !0, c = e(c, p), Te = !1, v = v.next;
            } while (v !== null);
            return j.memoizedState = c, [c, s];
          }
        }
        return [j.memoizedState, s];
      } else {
        Te = !0;
        var O;
        e === tr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Te = !1, j.memoizedState = O;
        var R = j.queue = {
          last: null,
          dispatch: null
        }, Y = R.dispatch = Tn.bind(null, F, R);
        return [j.memoizedState, Y];
      }
    }
    function xr(e, t) {
      F = et(), j = er();
      var n = t === void 0 ? null : t;
      if (j !== null) {
        var o = j.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Sn(n, s))
            return o[0];
        }
      }
      Te = !0;
      var h = e();
      return Te = !1, j.memoizedState = [h, n], h;
    }
    function In(e) {
      F = et(), j = er();
      var t = j.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), j.memoizedState = n, n;
      } else
        return t;
    }
    function Cn(e, t) {
      pt = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Tn(e, t, n) {
      if (!(Vt < kn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === F) {
        Ut = !0;
        var o = {
          action: n,
          next: null
        };
        Ue === null && (Ue = /* @__PURE__ */ new Map());
        var s = Ue.get(t);
        if (s === void 0)
          Ue.set(t, o);
        else {
          for (var h = s; h.next !== null; )
            h = h.next;
          h.next = o;
        }
      }
    }
    function Dn(e, t) {
      return xr(function() {
        return e;
      }, t);
    }
    function Pn(e, t, n) {
      return et(), t(e._source);
    }
    function An(e) {
      return et(), e;
    }
    function Mn() {
      et();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function _n() {
      return (ht.identifierPrefix || "") + "R:" + (ht.uniqueID++).toString(36);
    }
    function rr() {
    }
    var ht = null;
    function wr(e) {
      ht = e;
    }
    var Fn = {
      readContext: En,
      useContext: On,
      useMemo: xr,
      useReducer: br,
      useRef: In,
      useState: Rn,
      useLayoutEffect: Cn,
      useCallback: Dn,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: rr,
      // Effects are not run in the server environment.
      useEffect: rr,
      // Debugging effect
      useDebugValue: rr,
      useDeferredValue: An,
      useTransition: Mn,
      useOpaqueIdentifier: _n,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Pn
    }, qt = "http://www.w3.org/1999/xhtml", kr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: qt,
      mathml: kr,
      svg: nr
    };
    function Sr(e) {
      switch (e) {
        case "svg":
          return nr;
        case "math":
          return kr;
        default:
          return qt;
      }
    }
    function jn(e, t) {
      return e == null || e === qt ? Sr(t) : e === nr && t === "foreignObject" ? qt : e;
    }
    var zn = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function or(e, t) {
      zn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    var Er = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Ln = l({
      menuitem: !0
    }, Er), Nn = "__html";
    function Hn(e, t) {
      if (t) {
        if (Ln[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Nn in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    var At = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Wn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Un = ["Webkit", "ms", "Moz", "O"];
    Object.keys(At).forEach(function(e) {
      Un.forEach(function(t) {
        At[Wn(t, e)] = At[e];
      });
    });
    function Vn(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(At.hasOwnProperty(e) && At[e]) ? t + "px" : ("" + t).trim();
    }
    var qn = /([A-Z])/g, Bn = /^ms-/;
    function Yn(e) {
      return e.replace(qn, "-$1").toLowerCase().replace(Bn, "-ms-");
    }
    function ar(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Or = function() {
    };
    {
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Rr = /;\s*$/, vt = {}, sr = {}, Ir = !1, Cr = !1, Zn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Kn = function(e) {
        vt.hasOwnProperty(e) && vt[e] || (vt[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        vt.hasOwnProperty(e) && vt[e] || (vt[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jn = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Rr, "")));
      }, ei = function(e, t) {
        Ir || (Ir = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ti = function(e, t) {
        Cr || (Cr = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Or = function(e, t) {
        e.indexOf("-") > -1 ? Kn(e) : $n.test(e) ? Qn(e) : Rr.test(t) && Jn(e, t), typeof t == "number" && (isNaN(t) ? ei(e, t) : isFinite(t) || ti(e, t));
      };
    }
    var ri = Or, Tr = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, gt = {}, ni = new RegExp("^(aria)-[" + Je + "]*$"), ii = new RegExp("^(aria)[A-Z][" + Je + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(gt, t) && gt[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), gt[t] = !0, !0;
          if (t !== o)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), gt[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), h = Tr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return gt[t] = !0, !1;
          if (t !== h)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), gt[t] = !0, !0;
        }
      }
      return !0;
    }
    function si(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = ai(e, o);
          s || n.push(o);
        }
        var h = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function li(e, t) {
      ar(e, t) || si(e, t);
    }
    var Dr = !1;
    function ui(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Dr && (Dr = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Pr = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ar = function() {
    };
    {
      var te = {}, ci = Object.prototype.hasOwnProperty, Mr = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + Je + "]*$"), pi = new RegExp("^(aria)[A-Z][" + Je + "]*$");
      Ar = function(e, t, n, o) {
        if (ci.call(te, t) && te[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), te[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var v = c.hasOwnProperty(s) ? c[s] : null;
          if (v != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, v), te[t] = !0, !0;
          if (Mr.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), te[t] = !0, !0;
        } else if (Mr.test(t))
          return fi.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), te[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), te[t] = !0, !0;
        if (s === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), te[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), te[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), te[t] = !0, !0;
        var p = a(t), O = p !== null && p.type === ut;
        if (Pr.hasOwnProperty(s)) {
          var R = Pr[s];
          if (R !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, R), te[t] = !0, !0;
        } else if (!O && t !== s)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), te[t] = !0, !0;
        return typeof n == "boolean" && dt(t, n, p, !1) ? (n ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), te[t] = !0, !0) : O ? !0 : dt(t, n, p, !1) ? (te[t] = !0, !1) : ((n === "false" || n === "true") && p !== null && p.type === We && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), te[t] = !0), !0);
      };
    }
    var hi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var h = Ar(e, s, t[s], n);
          h || o.push(s);
        }
        var c = o.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        o.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function vi(e, t, n) {
      ar(e, t) || hi(e, t, n);
    }
    var Ve = u.Children.toArray, Me = [], lr = C.ReactCurrentDispatcher, Bt, ur = null, _r = function() {
      return "";
    }, Fr = function(e) {
      return "";
    }, jr = function(e, t) {
    }, zr = function(e) {
    }, Lr = function(e) {
    }, Nr = function() {
    }, Hr = !1;
    Bt = C.ReactDebugCurrentFrame, jr = function(e, t) {
      li(e, t), ui(e, t), vi(e, t, null);
    }, Fr = function(e) {
      return Ae(e.type, e._source, null);
    }, zr = function(e) {
      Me.push(e), Me.length === 1 && (ur = Bt.getCurrentStack, Bt.getCurrentStack = _r);
    }, Lr = function(e) {
      var t = Me[Me.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Nr = function() {
      Me.pop(), Me.length === 0 && (Bt.getCurrentStack = ur, ur = null);
    }, _r = function() {
      if (Me.length === 0)
        return "";
      for (var e = Me[Me.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += Fr(s[h]);
      return t;
    };
    var Wr = !1, Ur = !1, Vr = !1, qr = !1, Br = !1, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = {}, Qr = ["value", "defaultValue"], gi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, mi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Jr = {};
    function yi(e) {
      if (!Jr.hasOwnProperty(e)) {
        if (!mi.test(e))
          throw Error("Invalid tag: " + e);
        Jr[e] = !0;
      }
    }
    var cr = {}, bi = function(e) {
      if (cr.hasOwnProperty(e))
        return cr[e];
      var t = Yn(e);
      return cr[e] = t, t;
    };
    function xi(e) {
      var t = "", n = "";
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          var s = o.indexOf("--") === 0, h = e[o];
          s || ri(o, h), h != null && (t += n + (s ? o : bi(o)) + ":", t += Vn(o, h, s), n = ";");
        }
      return t || null;
    }
    function en(e, t) {
      {
        var n = e.constructor, o = n && $(n) || "ReactClass", s = o + "." + t;
        if (Yr[s])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Yr[s] = !0;
      }
    }
    function wi(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ki(e) {
      var t = e.dangerouslySetInnerHTML;
      if (t != null) {
        if (t.__html != null)
          return t.__html;
      } else {
        var n = e.children;
        if (typeof n == "string" || typeof n == "number")
          return D(n);
      }
      return null;
    }
    function Si(e) {
      if (!u.isValidElement(e))
        return Ve(e);
      var t = e;
      if (t.type !== w)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return Ve(n);
      var o = n;
      return [o];
    }
    function Ei(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Br && typeof n != "string" && typeof n != "number" && (Br = !0, g("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Oi = Object.prototype.hasOwnProperty, Ri = "style", Ii = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ci(e, t, n, o, s, h) {
      var c = "<" + e, v = ar(t, n);
      for (var p in n)
        if (Oi.call(n, p)) {
          var O = n[p];
          if (O != null) {
            p === Ri && (O = xi(O));
            var R = null;
            v ? Ii.hasOwnProperty(p) || (R = ae(p, O)) : R = oe(p, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Ce()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error(($(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        h(o, s);
      }
      function h(c, v) {
        var p = wi(v), O = Ot(v, t, n, p), R = [], Y = !1, K = {
          isMounted: function(Ye) {
            return !1;
          },
          enqueueForceUpdate: function(Ye) {
            if (R === null)
              return en(Ye, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Ye, yt) {
            Y = !0, R = [yt];
          },
          enqueueSetState: function(Ye, yt) {
            if (R === null)
              return en(Ye, "setState"), null;
            R.push(yt);
          }
        }, x;
        if (p) {
          if (x = new v(c.props, O, K), typeof v.getDerivedStateFromProps == "function") {
            if (x.state === null || x.state === void 0) {
              var W = $(v) || "Unknown";
              Kr[W] || (g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", W, x.state === null ? "null" : "undefined", W), Kr[W] = !0);
            }
            var re = v.getDerivedStateFromProps.call(null, c.props, x.state);
            if (re === void 0) {
              var se = $(v) || "Unknown";
              Zr[se] || (g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", se), Zr[se] = !0);
            }
            re != null && (x.state = l({}, x.state, re));
          }
        } else {
          if (v.prototype && typeof v.prototype.render == "function") {
            var le = $(v) || "Unknown";
            $r[le] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", le, le), $r[le] = !0);
          }
          var qe = {};
          if (gr(qe), x = v(c.props, O, K), x = mr(v, c.props, x, O), x != null && x.render != null) {
            var pe = $(v) || "Unknown";
            Xr[pe] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", pe, pe, pe), Xr[pe] = !0);
          }
          if (x == null || x.render == null) {
            e = x, tn(e, v);
            return;
          }
        }
        x.props = c.props, x.context = O, x.updater = K;
        var ke = x.state;
        if (ke === void 0 && (x.state = ke = null), typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function") {
          if (typeof x.componentWillMount == "function") {
            if (x.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Be = $(v) || "Unknown";
              Gr[Be] || (_(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Be
              ), Gr[Be] = !0);
            }
            typeof v.getDerivedStateFromProps != "function" && x.componentWillMount();
          }
          if (typeof x.UNSAFE_componentWillMount == "function" && typeof v.getDerivedStateFromProps != "function" && x.UNSAFE_componentWillMount(), R.length) {
            var he = R, Se = Y;
            if (R = null, Y = !1, Se && he.length === 1)
              x.state = he[0];
            else {
              for (var De = Se ? he[0] : x.state, Yt = !0, mt = Se ? 1 : 0; mt < he.length; mt++) {
                var Ee = he[mt], Mt = typeof Ee == "function" ? Ee.call(x, De, c.props, O) : Ee;
                Mt != null && (Yt ? (Yt = !1, De = l({}, De, Mt)) : l(De, Mt));
              }
              x.state = De;
            }
          } else
            R = null;
        }
        e = x.render(), e === void 0 && x.render._isMockFunction && (e = null), tn(e, v);
        var tt;
        {
          if (typeof x.getChildContext == "function") {
            var $t = v.childContextTypes;
            if (typeof $t == "object") {
              tt = x.getChildContext();
              for (var Xt in tt)
                if (!(Xt in $t))
                  throw Error(($(v) || "Unknown") + '.getChildContext(): key "' + Xt + '" is not defined in childContextTypes.');
            } else
              g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", $(v) || "Unknown");
          }
          tt && (t = l({}, t, tt));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var rn = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var h = Si(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: ir.html,
          children: h,
          childIndex: 0,
          context: st,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Rt(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, h = o.type._context, c = this.threadID;
        Qe(h, c);
        var v = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = v, this.contextProviderStack[s] = o, h[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && g("Unexpected pop.");
        var h = this.contextStack[s], c = this.contextValueStack[s];
        this.contextStack[s] = null, this.contextValueStack[s] = null, this.contextProviderStack[s] = null, this.contextIndex--, h[this.threadID] = c;
      }, t.clearProviders = function() {
        for (var o = this.contextIndex; o >= 0; o--) {
          var s = this.contextStack[o], h = this.contextValueStack[o];
          s[this.threadID] = h;
        }
      }, t.read = function(o) {
        if (this.exhausted)
          return null;
        var s = ht;
        wr(this);
        var h = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], v = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Rt(this.threadID);
              break;
            }
            var p = this.stack[this.stack.length - 1];
            if (v || p.childIndex >= p.children.length) {
              var O = p.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), p.type === "select")
                this.currentSelectValue = null;
              else if (p.type != null && p.type.type != null && p.type.type.$$typeof === Z) {
                var R = p.type;
                this.popProvider(R);
              } else if (p.type === T) {
                this.suspenseDepth--;
                var Y = c.pop();
                if (v) {
                  v = !1;
                  var K = p.fallbackFrame;
                  if (!K)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(K), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += Y;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var x = p.children[p.childIndex++], W = "";
            zr(this.stack), p.debugElementStack.length = 0;
            try {
              W += this.render(x, p.context, p.domNamespace);
            } catch (re) {
              if (re != null && typeof re.then == "function") {
                if (!Xe)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw re;
            } finally {
              Nr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += W;
          }
          return c[0];
        } finally {
          lr.current = h, wr(s), yr();
        }
      }, t.render = function(o, s, h) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? D(c) : this.previousWasTextNode ? "<!-- -->" + D(c) : (this.previousWasTextNode = !0, D(c));
        } else {
          var v, p = Ti(o, s, this.threadID);
          if (v = p.child, s = p.context, v === null || v === !1)
            return "";
          if (!u.isValidElement(v)) {
            if (v != null && v.$$typeof != null) {
              var O = v.$$typeof;
              throw Error(O === M ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Ve(v), Y = {
              type: null,
              domNamespace: h,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return Y.debugElementStack = [], this.stack.push(Y), "";
          }
          var K = v, x = K.type;
          if (typeof x == "string")
            return this.renderDOM(K, s, h);
          switch (x) {
            case me:
            case Fe:
            case P:
            case Q:
            case ve:
            case w: {
              var W = Ve(v.props.children), re = {
                type: null,
                domNamespace: h,
                children: W,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return re.debugElementStack = [], this.stack.push(re), "";
            }
            case T:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case $e:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof x == "object" && x !== null)
            switch (x.$$typeof) {
              case ne: {
                var se = v, le, qe = {};
                gr(qe), le = x.render(se.props, se.ref), le = mr(x.render, se.props, le, se.ref), le = Ve(le);
                var pe = {
                  type: null,
                  domNamespace: h,
                  children: le,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pe.debugElementStack = [], this.stack.push(pe), "";
              }
              case ue: {
                var ke = v, Be = [u.createElement(x.type, l({
                  ref: ke.ref
                }, ke.props))], he = {
                  type: null,
                  domNamespace: h,
                  children: Be,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case Z: {
                var Se = v, De = Se.props, Yt = Ve(De.children), mt = {
                  type: Se,
                  domNamespace: h,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return mt.debugElementStack = [], this.pushProvider(Se), this.stack.push(mt), "";
              }
              case B: {
                var Ee = v.type;
                Ee._context === void 0 ? Ee !== Ee.Consumer && (Hr || (Hr = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : Ee = Ee._context;
                var Mt = v.props, tt = this.threadID;
                Qe(Ee, tt);
                var $t = Ee[tt], Xt = Ve(Mt.children($t)), Ye = {
                  type: v,
                  domNamespace: h,
                  children: Xt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Ye.debugElementStack = [], this.stack.push(Ye), "";
              }
              case ge:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case ce: {
                var yt = v, nn = v.type, _i = nn._payload, Fi = nn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: yt.ref
                }, yt.props))], on = {
                  type: null,
                  domNamespace: h,
                  children: zi,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return on.debugElementStack = [], this.stack.push(on), "";
              }
            }
          var fr = "";
          {
            var an = K._owner;
            (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? $(an) : null;
            sn && (fr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (x == null ? x : typeof x) + "." + fr);
        }
      }, t.renderDOM = function(o, s, h) {
        var c = o.type.toLowerCase(), v = h;
        h === ir.html && (v = Sr(c)), v === ir.html && c !== o.type && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), yi(c);
        var p = o.props;
        if (c === "input")
          or("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !Ur && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Ur = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Wr && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Wr = !0), p = l({
            type: void 0
          }, p, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: p.value != null ? p.value : p.defaultValue,
            checked: p.checked != null ? p.checked : p.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !qr && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          var O = p.value;
          if (O == null) {
            var R = p.defaultValue, Y = p.children;
            if (Y != null) {
              if (g("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(Y)) {
                if (!(Y.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                Y = Y[0];
              }
              R = "" + Y;
            }
            R == null && (R = ""), O = R;
          }
          p = l({}, p, {
            value: void 0,
            children: "" + O
          });
        } else if (c === "select") {
          {
            or("select", p);
            for (var K = 0; K < Qr.length; K++) {
              var x = Qr[K];
              if (p[x] != null) {
                var W = Array.isArray(p[x]);
                p.multiple && !W ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", x) : !p.multiple && W && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", x);
              }
            }
            p.value !== void 0 && p.defaultValue !== void 0 && !Vr && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          }
          this.currentSelectValue = p.value != null ? p.value : p.defaultValue, p = l({}, p, {
            value: void 0
          });
        } else if (c === "option") {
          var re = null, se = this.currentSelectValue, le = Ei(p.children);
          if (se != null) {
            var qe;
            if (p.value != null ? qe = p.value + "" : qe = le, re = !1, Array.isArray(se)) {
              for (var pe = 0; pe < se.length; pe++)
                if ("" + se[pe] === qe) {
                  re = !0;
                  break;
                }
            } else
              re = "" + se === qe;
            p = l({
              selected: void 0,
              children: void 0
            }, p, {
              selected: re,
              children: le
            });
          }
        }
        jr(c, p), Hn(c, p);
        var ke = Ci(o.type, c, p, v, this.makeStaticMarkup, this.stack.length === 1), Be = "";
        Er.hasOwnProperty(c) ? ke += "/>" : (ke += ">", Be = "</" + o.type + ">");
        var he, Se = ki(p);
        Se != null ? (he = [], gi.hasOwnProperty(c) && Se.charAt(0) === `
` && (ke += `
`), ke += Se) : he = Ve(p.children);
        var De = {
          domNamespace: jn(h, o.type),
          type: c,
          children: he,
          childIndex: 0,
          context: s,
          footer: Be
        };
        return De.debugElementStack = [], this.stack.push(De), this.previousWasTextNode = !1, ke;
      }, e;
    }();
    function Di(e, t) {
      var n = new rn(e, !1, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Pi(e, t) {
      var n = new rn(e, !0, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Ai() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Mi() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    nt.renderToNodeStream = Ai, nt.renderToStaticMarkup = Pi, nt.renderToStaticNodeStream = Mi, nt.renderToString = Di, nt.version = E;
  }()), nt;
}
process.env.NODE_ENV === "production" ? hr.exports = Vi() : hr.exports = qi();
var Bi = hr.exports;
const Yi = /* @__PURE__ */ Ui(Bi);
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gn = _e.createContext && /* @__PURE__ */ _e.createContext(bn), $i = ["attr", "size", "title"];
function Xi(u, l) {
  if (u == null)
    return {};
  var f, E, C = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(u);
    for (E = 0; E < _.length; E++)
      f = _[E], l.indexOf(f) === -1 && {}.propertyIsEnumerable.call(u, f) && (C[f] = u[f]);
  }
  return C;
}
function Gi(u, l) {
  if (u == null)
    return {};
  var f = {};
  for (var E in u)
    if ({}.hasOwnProperty.call(u, E)) {
      if (l.indexOf(E) !== -1)
        continue;
      f[E] = u[E];
    }
  return f;
}
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var f = arguments[l];
      for (var E in f)
        ({}).hasOwnProperty.call(f, E) && (u[E] = f[E]);
    }
    return u;
  }, Gt.apply(null, arguments);
}
function mn(u, l) {
  var f = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(C) {
      return Object.getOwnPropertyDescriptor(u, C).enumerable;
    })), f.push.apply(f, E);
  }
  return f;
}
function Zt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var f = arguments[l] != null ? arguments[l] : {};
    l % 2 ? mn(Object(f), !0).forEach(function(E) {
      Zi(u, E, f[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : mn(Object(f)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(f, E));
    });
  }
  return u;
}
function Zi(u, l, f) {
  return (l = Ki(l)) in u ? Object.defineProperty(u, l, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = f, u;
}
function Ki(u) {
  var l = Qi(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Qi(u, l) {
  if (typeof u != "object" || !u)
    return u;
  var f = u[Symbol.toPrimitive];
  if (f !== void 0) {
    var E = f.call(u, l || "default");
    if (typeof E != "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function xn(u) {
  return u && u.map((l, f) => /* @__PURE__ */ _e.createElement(l.tag, Zt({
    key: f
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ _e.createElement(Ji, Gt({
    attr: Zt({}, u.attr)
  }, l), xn(u.child));
}
function Ji(u) {
  var l = (f) => {
    var {
      attr: E,
      size: C,
      title: _
    } = u, g = Xi(u, $i), I = C || f.size || "1em", M;
    return f.className && (M = f.className), u.className && (M = (M ? M + " " : "") + u.className), /* @__PURE__ */ _e.createElement("svg", Gt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, f.attr, E, g, {
      className: M,
      style: Zt(Zt({
        color: u.color || f.color
      }, f.style), u.style),
      height: I,
      width: I,
      xmlns: "http://www.w3.org/2000/svg"
    }), _ && /* @__PURE__ */ _e.createElement("title", null, _), u.children);
  };
  return gn !== void 0 ? /* @__PURE__ */ _e.createElement(gn.Consumer, null, (f) => l(f)) : l(bn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const oo = Li(
  ({ data: u, type: l, options: f = {}, height: E = 350, title: C }, _) => {
    const g = _t(null);
    _t(null);
    const I = _t(null), [M, w] = Ni(!1), P = _t(null), Q = _t(null), Z = dr(() => Yi.renderToString(
      /* @__PURE__ */ bt(
        eo,
        {
          size: 14,
          style: {
            color: "#9ca3af",
            verticalAlign: "middle",
            marginTop: "4px",
            marginLeft: "6px"
          }
        }
      )
    ), []), B = dr(() => l || (Array.isArray(u[0]) ? u.map((T) => fn(T)) : fn(u)), [u, l]), ne = dr(() => {
      var ge, $e, Fe, me, L, U, Oe, $, Xe, ye, je, ze, Ge, Ze, V;
      const T = Array.isArray(B) ? String(B[0]).toLowerCase() : String(B).toLowerCase();
      let ve = [], ue = [], ce = [];
      if (Array.isArray(u[0]))
        ve = u.map((Le, be) => {
          const it = Array.isArray(l) && l[be] || (Array.isArray(B) ? B[be] : B), xe = dn(it, Le);
          return {
            name: `Series ${be + 1}`,
            type: it,
            ...xe.series[0]
          };
        });
      else {
        const N = dn(B, u);
        ve = N.series, ue = N.labels, ce = N.categories;
      }
      const z = {
        ...f,
        chart: {
          type: T === "funnel" || T === "column" ? "bar" : T,
          height: "100%",
          toolbar: {
            show: !0,
            tools: {
              download: !0,
              selection: !0,
              zoom: !0,
              zoomin: !0,
              zoomout: !0,
              pan: !0,
              reset: !0,
              customIcons: [
                {
                  icon: Z,
                  index: 6,
                  click: () => w(!0)
                }
              ]
            },
            autoSelected: "zoom"
          },
          animations: { enabled: !0 },
          ...f.chart
        },
        title: {
          text: typeof C == "string" ? C : (C == null ? void 0 : C.text) || ((ge = f.title) == null ? void 0 : ge.text) || void 0,
          align: (typeof C == "object" ? C == null ? void 0 : C.align : ($e = f.title) == null ? void 0 : $e.align) || "left",
          margin: ((Fe = f.title) == null ? void 0 : Fe.margin) || 10,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#263238",
            ...(me = f.title) == null ? void 0 : me.style
          }
        },
        colors: f.colors || [
          "rgba(0, 143, 251, 0.85)",
          "#FEB019",
          "hsl(145, 63%, 42%)",
          "green"
        ],
        fill: {
          type: ((L = f.fill) == null ? void 0 : L.type) || "solid",
          ...f.fill
        },
        series: ve,
        dataLabels: {
          enabled: ((U = f.dataLabels) == null ? void 0 : U.enabled) ?? !1,
          ...f.dataLabels
        },
        plotOptions: {
          ...f.plotOptions,
          bar: {
            horizontal: T === "funnel" || T === "rangebar",
            isFunnel: T === "funnel",
            ...(Oe = f.plotOptions) == null ? void 0 : Oe.bar
          },
          bubble: {
            minBubbleRadius: ((Xe = ($ = f.plotOptions) == null ? void 0 : $.bubble) == null ? void 0 : Xe.minBubbleRadius) ?? 5,
            maxBubbleRadius: ((je = (ye = f.plotOptions) == null ? void 0 : ye.bubble) == null ? void 0 : je.maxBubbleRadius) ?? 20
          },
          // Radar/RadialBar often need explicit sizing to render well
          radar: { size: ((Ge = (ze = f.plotOptions) == null ? void 0 : ze.radar) == null ? void 0 : Ge.size) ?? 140 },
          radialBar: {
            hollow: { size: "70%" },
            ...(Ze = f.plotOptions) == null ? void 0 : Ze.radialBar
          }
        },
        tooltip: {
          enabled: !0,
          theme: "dark",
          ...f.tooltip
        },
        grid: {
          show: !0,
          ...f.grid
        }
      };
      return ue != null && ue.length && (z.labels = ue), ce != null && ce.length && (z.xaxis = { ...f.xaxis, categories: ce }), (T === "bar" || T === "column") && (z.plotOptions = {
        ...f.plotOptions,
        bar: {
          ...((V = f.plotOptions) == null ? void 0 : V.bar) || {},
          horizontal: !1
        }
      }), z;
    }, [u, B, f, E, C, Z]);
    return un(() => {
      if (g.current)
        return I.current ? I.current.updateOptions(ne, !0, !0) : (I.current = new cn(g.current, ne), I.current.render()), () => {
          var T;
          (T = I.current) == null || T.destroy(), I.current = null;
        };
    }, [ne]), un(() => (M && P.current && (Q.current = new cn(P.current, {
      ...ne,
      chart: { ...ne.chart, toolbar: { show: !1 } }
      // Clean view for modal
    }), Q.current.render()), () => {
      var T;
      (T = Q.current) == null || T.destroy(), Q.current = null;
    }), [M, ne]), Hi(_, () => ({
      zoomIn: () => {
        var T;
        return (T = I.current) == null ? void 0 : T.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var T;
        return (T = I.current) == null ? void 0 : T.zoomX(void 0, void 0);
      },
      reset: () => {
        var T;
        return (T = I.current) == null ? void 0 : T.resetSeries();
      },
      toggleFullscreen: () => w(!M)
    })), /* @__PURE__ */ ln("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ bt("div", { ref: g, style: { height: "100%", width: "100%" } }),
      M && /* @__PURE__ */ bt("div", { style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      }, children: /* @__PURE__ */ ln("div", { style: {
        width: "90%",
        maxWidth: "600px",
        height: "450px",
        background: "#fff",
        borderRadius: "12px",
        padding: "40px 20px 20px 20px",
        position: "relative",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }, children: [
        /* @__PURE__ */ bt(
          "button",
          {
            onClick: () => w(!1),
            style: {
              position: "absolute",
              top: 12,
              right: 15,
              border: "none",
              background: "transparent",
              fontSize: "18px",
              cursor: "pointer"
            },
            children: /* @__PURE__ */ bt(to, { size: 16 })
          }
        ),
        /* @__PURE__ */ bt("div", { ref: P, style: { height: "100%", width: "100%" } })
      ] }) })
    ] });
  }
);
export {
  oo as VizlyChart
};
