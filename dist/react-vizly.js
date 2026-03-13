import { jsx as ft, jsxs as sn } from "react/jsx-runtime";
import Te, { forwardRef as zi, useRef as ln, useState as Li, useMemo as fr, useEffect as un, useImperativeHandle as Ni } from "react";
import Hi from "apexcharts";
const cn = (u) => {
  if (!u || u.length === 0)
    return "bar";
  const l = u[0];
  if (typeof l == "number")
    return "donut";
  if (typeof l != "object")
    return "bar";
  const m = Object.values(l).filter(
    (S) => typeof S == "number"
  );
  return l.stage && l.value ? "funnel" : l.label && l.value ? "donut" : l.category && l.value ? "polararea" : l.x !== void 0 && l.y !== void 0 && l.value !== void 0 ? "heatmap" : l.name && l.value && Array.isArray(l.children) ? "treemap" : Array.isArray(l.y) && l.y.length === 4 ? "candlestick" : Array.isArray(l.y) && l.y.length === 5 ? "boxplot" : Array.isArray(l.y) && l.y.length === 2 ? "rangebar" : l.x !== void 0 && l.y !== void 0 && l.r !== void 0 ? "bubble" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : l.x && !isNaN(Date.parse(l.x)) ? "line" : l.start !== void 0 && l.end !== void 0 ? "slope" : m.length > 1 ? "mixed" : (l.x !== void 0 && l.y !== void 0, "bar");
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
}, fn = (u, l) => {
  const m = Wi[u] || "xy";
  let S = [], C = [], M = [];
  if (!l || l.length === 0)
    return { series: S, labels: C, categories: M };
  const v = l[0], I = Object.keys(v).filter(
    (w) => typeof v[w] == "number"
  ), D = Object.keys(v).find(
    (w) => typeof v[w] == "string"
  );
  switch (m) {
    case "circular":
      S = l.map((w) => w.value ?? w.y ?? w), C = l.map(
        (w) => w.label ?? w.category ?? w.name ?? w.x
      );
      break;
    case "category":
      M = l.map((w) => w.x ?? w.category ?? w.stage ?? w[D]), I.length > 1 ? S = I.map((w) => ({
        name: w,
        data: l.map((A) => A[w])
      })) : S = [{
        name: I[0] || "Series 1",
        data: l.map((w) => w.y ?? w.value)
      }];
      break;
    case "heatmap":
      S = [{
        name: "Series 1",
        data: l.map((w) => ({
          x: w.x,
          y: w.value ?? w.y
        }))
      }];
      break;
    case "range":
      S = [{ name: "Series 1", data: l }];
      break;
    default:
      u === "bubble" ? S = [{
        name: "Series 1",
        data: l.map((w) => ({
          x: w.x,
          y: w.y,
          r: w.r
        }))
      }] : I.length > 1 ? S = I.map((w) => ({
        name: w,
        data: l.map((A) => ({
          x: A.x ?? A[D],
          y: A[w]
        }))
      })) : S = [{
        name: "Series 1",
        data: l.map((w) => ({
          x: w.x,
          y: w.y
        }))
      }];
  }
  return { series: S, labels: C, categories: M };
};
function Ui(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var pr = { exports: {} }, $e = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dr, dn;
function mn() {
  if (dn)
    return dr;
  dn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function S(M) {
    if (M == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(M);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var M = new String("abc");
      if (M[5] = "de", Object.getOwnPropertyNames(M)[0] === "5")
        return !1;
      for (var v = {}, I = 0; I < 10; I++)
        v["_" + String.fromCharCode(I)] = I;
      var D = Object.getOwnPropertyNames(v).map(function(A) {
        return v[A];
      });
      if (D.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(A) {
        w[A] = A;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return dr = C() ? Object.assign : function(M, v) {
    for (var I, D = S(M), w, A = 1; A < arguments.length; A++) {
      I = Object(arguments[A]);
      for (var z in I)
        l.call(I, z) && (D[z] = I[z]);
      if (u) {
        w = u(I);
        for (var B = 0; B < w.length; B++)
          m.call(I, w[B]) && (D[w[B]] = I[w[B]]);
      }
    }
    return D;
  }, dr;
}
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function Vi() {
  if (pn)
    return $e;
  pn = 1;
  var u = mn(), l = Te;
  function m(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = 60106, C = 60107, M = 60108, v = 60114, I = 60109, D = 60110, w = 60112, A = 60113, z = 60120, B = 60115, L = 60116, ue = 60121, K = 60117, ce = 60119, te = 60129, pe = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var U = Symbol.for;
    S = U("react.portal"), C = U("react.fragment"), M = U("react.strict_mode"), v = U("react.profiler"), I = U("react.provider"), D = U("react.context"), w = U("react.forward_ref"), A = U("react.suspense"), z = U("react.suspense_list"), B = U("react.memo"), L = U("react.lazy"), ue = U("react.block"), K = U("react.fundamental"), ce = U("react.scope"), te = U("react.debug_trace_mode"), pe = U("react.legacy_hidden");
  }
  function De(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case C:
        return "Fragment";
      case S:
        return "Portal";
      case v:
        return "Profiler";
      case M:
        return "StrictMode";
      case A:
        return "Suspense";
      case z:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case D:
          return (r.displayName || "Context") + ".Consumer";
        case I:
          return (r._context.displayName || "Context") + ".Provider";
        case w:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case B:
          return De(r.type);
        case ue:
          return De(r._render);
        case L:
          a = r._payload, r = r._init;
          try {
            return De(r(a));
          } catch {
          }
      }
    return null;
  }
  var Tt = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dt = {};
  function Pe(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function N(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return Pe(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = dt;
    return a;
  }
  for (var G = new Uint16Array(16), We = 0; 15 > We; We++)
    G[We] = We + 1;
  G[15] = 0;
  var Q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Dt = Object.prototype.hasOwnProperty, Ae = {}, pt = {};
  function ht(r) {
    return Dt.call(pt, r) ? !0 : Dt.call(Ae, r) ? !1 : Q.test(r) ? pt[r] = !0 : (Ae[r] = !0, !1);
  }
  function Pt(r, a, i, f) {
    if (i !== null && i.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : i !== null ? !i.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function At(r, a, i, f) {
    if (a === null || typeof a > "u" || Pt(r, a, i, f))
      return !0;
    if (f)
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
  function X(r, a, i, f, k, b, y) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = b, this.removeEmptyString = y;
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    V[r] = new X(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    V[a] = new X(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    V[r] = new X(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    V[r] = new X(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    V[r] = new X(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    V[r] = new X(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    V[r] = new X(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    V[r] = new X(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    V[r] = new X(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Xe = /[\-:]([a-z])/g;
  function Ze(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Xe,
      Ze
    );
    V[a] = new X(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Xe, Ze);
    V[a] = new X(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Xe, Ze);
    V[a] = new X(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    V[r] = new X(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), V.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    V[r] = new X(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Xt = /["'&<>]/;
  function Oe(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var a = Xt.exec(r);
    if (a) {
      var i = "", f, k = 0;
      for (f = a.index; f < r.length; f++) {
        switch (r.charCodeAt(f)) {
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
        k !== f && (i += r.substring(k, f)), k = f + 1, i += a;
      }
      r = k !== f ? i + r.substring(k, f) : i;
    }
    return r;
  }
  function vt(r, a) {
    var i = V.hasOwnProperty(r) ? V[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || At(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Oe(a) + '"'))) : ht(r) ? r + '="' + (Oe(a) + '"') : "";
  }
  function gt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var Ke = typeof Object.is == "function" ? Object.is : gt, ie = null, Re = null, P = null, Me = !1, Ue = !1, we = null, Ie = 0;
  function xe() {
    if (ie === null)
      throw Error(m(321));
    return ie;
  }
  function mt() {
    if (0 < Ie)
      throw Error(m(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _e() {
    return P === null ? Re === null ? (Me = !1, Re = P = mt()) : (Me = !0, P = Re) : P.next === null ? (Me = !1, P = P.next = mt()) : (Me = !0, P = P.next), P;
  }
  function Mt(r, a, i, f) {
    for (; Ue; )
      Ue = !1, Ie += 1, P = null, i = r(a, f);
    return Qe(), i;
  }
  function Qe() {
    ie = null, Ue = !1, Re = null, Ie = 0, P = we = null;
  }
  function Je(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function yt(r, a, i) {
    if (ie = xe(), P = _e(), Me) {
      var f = P.queue;
      if (a = f.dispatch, we !== null && (i = we.get(f), i !== void 0)) {
        we.delete(f), f = P.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return P.memoizedState = f, [f, a];
      }
      return [P.memoizedState, a];
    }
    return r = r === Je ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, P.memoizedState = r, r = P.queue = { last: null, dispatch: null }, r = r.dispatch = Ve.bind(null, ie, r), [P.memoizedState, r];
  }
  function bt(r, a) {
    if (ie = xe(), P = _e(), a = a === void 0 ? null : a, P !== null) {
      var i = P.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!Ke(a[k], f[k])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), P.memoizedState = [r, a], r;
  }
  function Ve(r, a, i) {
    if (!(25 > Ie))
      throw Error(m(301));
    if (r === ie)
      if (Ue = !0, r = { action: i, next: null }, we === null && (we = /* @__PURE__ */ new Map()), i = we.get(a), i === void 0)
        we.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function wt() {
  }
  var W = null, et = { readContext: function(r) {
    var a = W.threadID;
    return Pe(r, a), r[a];
  }, useContext: function(r) {
    xe();
    var a = W.threadID;
    return Pe(r, a), r[a];
  }, useMemo: bt, useReducer: yt, useRef: function(r) {
    ie = xe(), P = _e();
    var a = P.memoizedState;
    return a === null ? (r = { current: r }, P.memoizedState = r) : a;
  }, useState: function(r) {
    return yt(Je, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return bt(function() {
      return r;
    }, a);
  }, useImperativeHandle: wt, useEffect: wt, useDebugValue: wt, useDeferredValue: function(r) {
    return xe(), r;
  }, useTransition: function() {
    return xe(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (W.identifierPrefix || "") + "R:" + (W.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return xe(), a(r._source);
  } }, Zt = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Kt(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  var xt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, tt = u({ menuitem: !0 }, xt), fe = {
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
  }, kt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fe).forEach(function(r) {
    kt.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), fe[a] = fe[r];
    });
  });
  var Fe = /([A-Z])/g, rt = /^ms-/, ge = l.Children.toArray, nt = Tt.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, Et = {};
  function jt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var zt = Object.prototype.hasOwnProperty, Lt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function St(r, a) {
    if (r === void 0)
      throw Error(m(152, De(a) || "Component"));
  }
  function Qt(r, a, i) {
    function f(y, E) {
      var g = E.prototype && E.prototype.isReactComponent, J = N(E, a, i, g), Y = [], ee = !1, j = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (Y === null)
          return null;
      }, enqueueReplaceState: function(Ot, _) {
        ee = !0, Y = [_];
      }, enqueueSetState: function(Ot, _) {
        if (Y === null)
          return null;
        Y.push(_);
      } };
      if (g) {
        if (g = new E(y.props, J, j), typeof E.getDerivedStateFromProps == "function") {
          var T = E.getDerivedStateFromProps.call(null, y.props, g.state);
          T != null && (g.state = u({}, g.state, T));
        }
      } else if (ie = {}, g = E(
        y.props,
        J,
        j
      ), g = Mt(E, y.props, g, J), g == null || g.render == null) {
        r = g, St(r, E);
        return;
      }
      if (g.props = y.props, g.context = J, g.updater = j, j = g.state, j === void 0 && (g.state = j = null), typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function")
        if (typeof g.componentWillMount == "function" && typeof E.getDerivedStateFromProps != "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && typeof E.getDerivedStateFromProps != "function" && g.UNSAFE_componentWillMount(), Y.length) {
          j = Y;
          var $ = ee;
          if (Y = null, ee = !1, $ && j.length === 1)
            g.state = j[0];
          else {
            T = $ ? j[0] : g.state;
            var ke = !0;
            for ($ = $ ? 1 : 0; $ < j.length; $++) {
              var oe = j[$];
              oe = typeof oe == "function" ? oe.call(g, T, y.props, J) : oe, oe != null && (ke ? (ke = !1, T = u({}, T, oe)) : u(T, oe));
            }
            g.state = T;
          }
        } else
          Y = null;
      if (r = g.render(), St(r, E), typeof g.getChildContext == "function" && (y = E.childContextTypes, typeof y == "object")) {
        var ae = g.getChildContext();
        for (var de in ae)
          if (!(de in y))
            throw Error(m(108, De(E) || "Unknown", de));
      }
      ae && (a = u({}, a, ae));
    }
    for (; l.isValidElement(r); ) {
      var k = r, b = k.type;
      if (typeof b != "function")
        break;
      f(k, b);
    }
    return { child: r, context: a };
  }
  var it = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== C ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : ge(i)) : i = ge(i), i = { type: null, domNamespace: Zt.html, children: i, childIndex: 0, context: dt, footer: "" };
      var b = G[0];
      if (b === 0) {
        var y = G;
        b = y.length;
        var E = 2 * b;
        if (!(65536 >= E))
          throw Error(m(304));
        var g = new Uint16Array(E);
        for (g.set(y), G = g, G[0] = b + 1, y = b; y < E - 1; y++)
          G[y] = y + 1;
        G[E - 1] = 0;
      } else
        G[0] = G[b];
      this.threadID = b, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        G[i] = G[0], G[0] = i;
      }
    }, a.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, b = this.threadID;
      Pe(k, b);
      var y = k[b];
      this.contextStack[f] = k, this.contextValueStack[f] = y, k[b] = i.props.value;
    }, a.popProvider = function() {
      var i = this.contextIndex, f = this.contextStack[i], k = this.contextValueStack[i];
      this.contextStack[i] = null, this.contextValueStack[i] = null, this.contextIndex--, f[this.threadID] = k;
    }, a.clearProviders = function() {
      for (var i = this.contextIndex; 0 <= i; i--)
        this.contextStack[i][this.threadID] = this.contextValueStack[i];
    }, a.read = function(i) {
      if (this.exhausted)
        return null;
      var f = W;
      W = this;
      var k = nt.current;
      nt.current = et;
      try {
        for (var b = [""], y = !1; b[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var E = this.threadID;
            G[E] = G[0], G[0] = E;
            break;
          }
          var g = this.stack[this.stack.length - 1];
          if (y || g.childIndex >= g.children.length) {
            var J = g.footer;
            if (J !== "" && (this.previousWasTextNode = !1), this.stack.pop(), g.type === "select")
              this.currentSelectValue = null;
            else if (g.type != null && g.type.type != null && g.type.type.$$typeof === I)
              this.popProvider(g.type);
            else if (g.type === A) {
              this.suspenseDepth--;
              var Y = b.pop();
              if (y) {
                y = !1;
                var ee = g.fallbackFrame;
                if (!ee)
                  throw Error(m(303));
                this.stack.push(ee), b[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                b[this.suspenseDepth] += Y;
            }
            b[this.suspenseDepth] += J;
          } else {
            var j = g.children[g.childIndex++], T = "";
            try {
              T += this.render(j, g.context, g.domNamespace);
            } catch ($) {
              throw $ != null && typeof $.then == "function" ? Error(m(294)) : $;
            } finally {
            }
            b.length <= this.suspenseDepth && b.push(""), b[this.suspenseDepth] += T;
          }
        }
        return b[0];
      } finally {
        nt.current = k, W = f, Qe();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Oe(k) : this.previousWasTextNode ? "<!-- -->" + Oe(k) : (this.previousWasTextNode = !0, Oe(k));
      if (f = Qt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === S ? m(257) : m(258, k.toString()));
        return i = ge(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var b = i.type;
      if (typeof b == "string")
        return this.renderDOM(i, f, k);
      switch (b) {
        case pe:
        case te:
        case M:
        case v:
        case z:
        case C:
          return i = ge(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case A:
          throw Error(m(294));
        case ce:
          throw Error(m(343));
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case w:
            ie = {};
            var y = b.render(i.props, i.ref);
            return y = Mt(b.render, i.props, y, i.ref), y = ge(y), this.stack.push({ type: null, domNamespace: k, children: y, childIndex: 0, context: f, footer: "" }), "";
          case B:
            return i = [l.createElement(b.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case I:
            return b = ge(i.props.children), k = { type: i, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case D:
            b = i.type, y = i.props;
            var E = this.threadID;
            return Pe(b, E), b = ge(y.children(b[E])), this.stack.push({ type: i, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case K:
            throw Error(m(338));
          case L:
            return b = i.type, y = b._init, b = y(b._payload), i = [l.createElement(b, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(m(130, b == null ? b : typeof b, ""));
    }, a.renderDOM = function(i, f, k) {
      var b = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(b)) {
        if (!qe.test(b))
          throw Error(m(65, b));
        Ft[b] = !0;
      }
      var y = i.props;
      if (b === "input")
        y = u({ type: void 0 }, y, { defaultChecked: void 0, defaultValue: void 0, value: y.value != null ? y.value : y.defaultValue, checked: y.checked != null ? y.checked : y.defaultChecked });
      else if (b === "textarea") {
        var E = y.value;
        if (E == null) {
          E = y.defaultValue;
          var g = y.children;
          if (g != null) {
            if (E != null)
              throw Error(m(92));
            if (Array.isArray(g)) {
              if (!(1 >= g.length))
                throw Error(m(93));
              g = g[0];
            }
            E = "" + g;
          }
          E == null && (E = "");
        }
        y = u({}, y, { value: void 0, children: "" + E });
      } else if (b === "select")
        this.currentSelectValue = y.value != null ? y.value : y.defaultValue, y = u({}, y, { value: void 0 });
      else if (b === "option") {
        g = this.currentSelectValue;
        var J = jt(y.children);
        if (g != null) {
          var Y = y.value != null ? y.value + "" : J;
          if (E = !1, Array.isArray(g)) {
            for (var ee = 0; ee < g.length; ee++)
              if ("" + g[ee] === Y) {
                E = !0;
                break;
              }
          } else
            E = "" + g === Y;
          y = u(
            { selected: void 0, children: void 0 },
            y,
            { selected: E, children: J }
          );
        }
      }
      if (E = y) {
        if (tt[b] && (E.children != null || E.dangerouslySetInnerHTML != null))
          throw Error(m(137, b));
        if (E.dangerouslySetInnerHTML != null) {
          if (E.children != null)
            throw Error(m(60));
          if (!(typeof E.dangerouslySetInnerHTML == "object" && "__html" in E.dangerouslySetInnerHTML))
            throw Error(m(61));
        }
        if (E.style != null && typeof E.style != "object")
          throw Error(m(62));
      }
      E = y, g = this.makeStaticMarkup, J = this.stack.length === 1, Y = "<" + i.type;
      e:
        if (b.indexOf("-") === -1)
          ee = typeof E.is == "string";
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
      for (_ in E)
        if (zt.call(E, _)) {
          var j = E[_];
          if (j != null) {
            if (_ === "style") {
              var T = void 0, $ = "", ke = "";
              for (T in j)
                if (j.hasOwnProperty(T)) {
                  var oe = T.indexOf("--") === 0, ae = j[T];
                  if (ae != null) {
                    if (oe)
                      var de = T;
                    else if (de = T, Et.hasOwnProperty(de))
                      de = Et[de];
                    else {
                      var Ot = de.replace(Fe, "-$1").toLowerCase().replace(rt, "-ms-");
                      de = Et[de] = Ot;
                    }
                    $ += ke + de + ":", ke = T, oe = ae == null || typeof ae == "boolean" || ae === "" ? "" : oe || typeof ae != "number" || ae === 0 || fe.hasOwnProperty(ke) && fe[ke] ? ("" + ae).trim() : ae + "px", $ += oe, ke = ";";
                  }
                }
              j = $ || null;
            }
            T = null, ee ? Lt.hasOwnProperty(_) || (T = _, T = ht(T) && j != null ? T + '="' + (Oe(j) + '"') : "") : T = vt(_, j), T && (Y += " " + T);
          }
        }
      g || J && (Y += ' data-reactroot=""');
      var _ = Y;
      E = "", xt.hasOwnProperty(b) ? _ += "/>" : (_ += ">", E = "</" + i.type + ">");
      e: {
        if (g = y.dangerouslySetInnerHTML, g != null) {
          if (g.__html != null) {
            g = g.__html;
            break e;
          }
        } else if (g = y.children, typeof g == "string" || typeof g == "number") {
          g = Oe(g);
          break e;
        }
        g = null;
      }
      return g != null ? (y = [], _t.hasOwnProperty(b) && g.charAt(0) === `
` && (_ += `
`), _ += g) : y = ge(y.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Kt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: b, children: y, childIndex: 0, context: f, footer: E }), this.previousWasTextNode = !1, _;
    }, r;
  }();
  return $e.renderToNodeStream = function() {
    throw Error(m(207));
  }, $e.renderToStaticMarkup = function(r, a) {
    r = new it(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, $e.renderToStaticNodeStream = function() {
    throw Error(m(208));
  }, $e.renderToString = function(r, a) {
    r = new it(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, $e.version = "17.0.2", $e;
}
var Ge = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function qi() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Te, l = mn();
    function m(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var S = "17.0.2", C = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("warn", e, n);
      }
    }
    function v(e) {
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
        var p = n.map(function(c) {
          return "" + c;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var D = 60106, w = 60107, A = 60108, z = 60114, B = 60109, L = 60110, ue = 60112, K = 60113, ce = 60120, te = 60115, pe = 60116, U = 60121, De = 60117, Tt = 60119, dt = 60129, Pe = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var N = Symbol.for;
      N("react.element"), D = N("react.portal"), w = N("react.fragment"), A = N("react.strict_mode"), z = N("react.profiler"), B = N("react.provider"), L = N("react.context"), ue = N("react.forward_ref"), K = N("react.suspense"), ce = N("react.suspense_list"), te = N("react.memo"), pe = N("react.lazy"), U = N("react.block"), N("react.server.block"), De = N("react.fundamental"), Tt = N("react.scope"), N("react.opaque.id"), dt = N("react.debug_trace_mode"), N("react.offscreen"), Pe = N("react.legacy_hidden");
    }
    function G(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function We(e) {
      return e.displayName || "Context";
    }
    function Q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case D:
          return "Portal";
        case z:
          return "Profiler";
        case A:
          return "StrictMode";
        case K:
          return "Suspense";
        case ce:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            var t = e;
            return We(t) + ".Consumer";
          case B:
            var n = e;
            return We(n._context) + ".Provider";
          case ue:
            return G(e, e.render, "ForwardRef");
          case te:
            return Q(e.type);
          case U:
            return Q(e._render);
          case pe: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Q(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Dt = !1, Ae = 0, pt, ht, Pt, At, X, V, Xe;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function Xt() {
      {
        if (Ae === 0) {
          pt = console.log, ht = console.info, Pt = console.warn, At = console.error, X = console.group, V = console.groupCollapsed, Xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
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
        Ae++;
      }
    }
    function Oe() {
      {
        if (Ae--, Ae === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: pt
            }),
            info: l({}, e, {
              value: ht
            }),
            warn: l({}, e, {
              value: Pt
            }),
            error: l({}, e, {
              value: At
            }),
            group: l({}, e, {
              value: X
            }),
            groupCollapsed: l({}, e, {
              value: V
            }),
            groupEnd: l({}, e, {
              value: Xe
            })
          });
        }
        Ae < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vt = C.ReactCurrentDispatcher, gt;
    function Ke(e, t, n) {
      {
        if (gt === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            gt = o && o[1] || "";
          }
        return `
` + gt + e;
      }
    }
    var ie = !1, Re;
    {
      var P = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new P();
    }
    function Me(e, t) {
      if (!e || ie)
        return "";
      {
        var n = Re.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ie = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = vt.current, vt.current = null, Xt();
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
            } catch (H) {
              o = H;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (H) {
              o = H;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            o = H;
          }
          e();
        }
      } catch (H) {
        if (H && o && typeof H.stack == "string") {
          for (var h = H.stack.split(`
`), d = o.stack.split(`
`), O = h.length - 1, R = d.length - 1; O >= 1 && R >= 0 && h[O] !== d[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (h[O] !== d[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || h[O] !== d[R]) {
                    var q = `
` + h[O].replace(" at new ", " at ");
                    return typeof e == "function" && Re.set(e, q), q;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, vt.current = p, Oe(), Error.prepareStackTrace = s;
      }
      var Z = e ? e.displayName || e.name : "", x = Z ? Ke(Z) : "";
      return typeof e == "function" && Re.set(e, x), x;
    }
    function Ue(e, t, n) {
      return Me(e, !1);
    }
    function we(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ie(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, we(e));
      if (typeof e == "string")
        return Ke(e);
      switch (e) {
        case K:
          return Ke("Suspense");
        case ce:
          return Ke("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ue:
            return Ue(e.render);
          case te:
            return Ie(e.type, t, n);
          case U:
            return Ue(e._render);
          case pe: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Ie(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = {}, mt = C.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var t = e._owner, n = Ie(e.type, e._source, t ? t.type : null);
        mt.setExtraStackFrame(n);
      } else
        mt.setExtraStackFrame(null);
    }
    function Mt(e, t, n, o, s) {
      {
        var p = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (p(e, c)) {
            var h = void 0;
            try {
              if (typeof e[c] != "function") {
                var d = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              h = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              h = O;
            }
            h && !(h instanceof Error) && (_e(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof h), _e(null)), h instanceof Error && !(h.message in xe) && (xe[h.message] = !0, _e(s), v("Failed %s type: %s", n, h.message), _e(null));
          }
      }
    }
    var Qe;
    Qe = /* @__PURE__ */ new Set();
    var Je = {};
    Object.freeze(Je);
    function yt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return Je;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function bt(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function Ve(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function wt(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === L && s._context === void 0
          );
          if (!p && !Qe.has(e)) {
            Qe.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === B ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Q(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ve(s, n), s[n];
        {
          var h = yt(e, t);
          return e.contextTypes && bt(e.contextTypes, h, "context"), h;
        }
      } else {
        var d = yt(e, t);
        return e.contextTypes && bt(e.contextTypes, d, "context"), d;
      }
    }
    for (var W = new Uint16Array(16), et = 0; et < 15; et++)
      W[et] = et + 1;
    W[15] = 0;
    function Zt() {
      var e = W, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), W = o, W[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        W[s] = s + 1;
      return W[n - 1] = 0, t;
    }
    function Kt() {
      var e = W[0];
      return e === 0 ? Zt() : (W[0] = W[e], e);
    }
    function xt(e) {
      W[e] = W[0], W[0] = e;
    }
    var tt = 0, fe = 1, kt = 2, Fe = 3, rt = 4, ge = 5, nt = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", qe = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Et = new RegExp("^[" + _t + "][" + qe + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function St(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : Et.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function Qt(e, t, n) {
      return t !== null ? t.type === tt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function it(e, t, n, o) {
      if (n !== null && n.type === tt)
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
      if (t === null || typeof t > "u" || it(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case Fe:
            return !t;
          case rt:
            return t === !1;
          case ge:
            return isNaN(t);
          case nt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, p, c) {
      this.acceptsBooleans = t === kt || t === Fe || t === rt, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
    }
    var f = {}, k = [
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
      f[e] = new i(
        e,
        tt,
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
      f[t] = new i(
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
      f[e] = new i(
        e,
        kt,
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
      f[e] = new i(
        e,
        kt,
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
      f[e] = new i(
        e,
        Fe,
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
      f[e] = new i(
        e,
        Fe,
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
      f[e] = new i(
        e,
        rt,
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
      f[e] = new i(
        e,
        nt,
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
      f[e] = new i(
        e,
        ge,
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
      f[t] = new i(
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
      f[t] = new i(
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
      f[t] = new i(
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
      f[e] = new i(
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
    var E = "xlinkHref";
    f[E] = new i(
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
      f[e] = new i(
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
    var g = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function Y(e) {
      !J && g.test(e) && (J = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ee = /["'&<>]/;
    function j(e) {
      var t = "" + e, n = ee.exec(t);
      if (!n)
        return t;
      var o, s = "", p, c = 0;
      for (p = n.index; p < t.length; p++) {
        switch (t.charCodeAt(p)) {
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
        c !== p && (s += t.substring(c, p)), c = p + 1, s += o;
      }
      return c !== p ? s + t.substring(c, p) : s;
    }
    function T(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : j(e);
    }
    function $(e) {
      return '"' + T(e) + '"';
    }
    function ke() {
      return Ft + '=""';
    }
    function oe(e, t) {
      var n = a(e);
      if (e !== "style" && Qt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === Fe || s === rt && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, Y(t)), o + "=" + $(t));
      } else if (St(e))
        return e + "=" + $(t);
      return "";
    }
    function ae(e, t) {
      return !St(e) || t == null ? "" : e + "=" + $(t);
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ot = typeof Object.is == "function" ? Object.is : de, _ = null, Nt = null, F = null, Rt = !1, Ht = !1, je = null, Wt = 0, xn = 25, Ee = !1, ot;
    function Be() {
      if (_ === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ee && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), _;
    }
    function kn(e, t) {
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ot), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ot, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ot(e[n], t[n]))
          return !1;
      return !0;
    }
    function hr() {
      if (Wt > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Jt() {
      return F === null ? Nt === null ? (Rt = !1, Nt = F = hr()) : (Rt = !0, F = Nt) : F.next === null ? (Rt = !1, F = F.next = hr()) : (Rt = !0, F = F.next), F;
    }
    function vr(e) {
      _ = e, Ee = !1;
    }
    function gr(e, t, n, o) {
      for (; Ht; )
        Ht = !1, Wt += 1, F = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Ee = !1, _ = null, Ht = !1, Nt = null, Wt = 0, je = null, F = null;
    }
    function En(e, t) {
      var n = at.threadID;
      return Ve(e, n), Ee && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function Sn(e, t) {
      ot = "useContext", Be();
      var n = at.threadID;
      return Ve(e, n), e[n];
    }
    function er(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function On(e) {
      return ot = "useState", yr(
        er,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function yr(e, t, n) {
      if (e !== er && (ot = "useReducer"), _ = Be(), F = Jt(), Rt) {
        var o = F.queue, s = o.dispatch;
        if (je !== null) {
          var p = je.get(o);
          if (p !== void 0) {
            je.delete(o);
            var c = F.memoizedState, h = p;
            do {
              var d = h.action;
              Ee = !0, c = e(c, d), Ee = !1, h = h.next;
            } while (h !== null);
            return F.memoizedState = c, [c, s];
          }
        }
        return [F.memoizedState, s];
      } else {
        Ee = !0;
        var O;
        e === er ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Ee = !1, F.memoizedState = O;
        var R = F.queue = {
          last: null,
          dispatch: null
        }, q = R.dispatch = Cn.bind(null, _, R);
        return [F.memoizedState, q];
      }
    }
    function br(e, t) {
      _ = Be(), F = Jt();
      var n = t === void 0 ? null : t;
      if (F !== null) {
        var o = F.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (kn(n, s))
            return o[0];
        }
      }
      Ee = !0;
      var p = e();
      return Ee = !1, F.memoizedState = [p, n], p;
    }
    function Rn(e) {
      _ = Be(), F = Jt();
      var t = F.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), F.memoizedState = n, n;
      } else
        return t;
    }
    function In(e, t) {
      ot = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Cn(e, t, n) {
      if (!(Wt < xn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === _) {
        Ht = !0;
        var o = {
          action: n,
          next: null
        };
        je === null && (je = /* @__PURE__ */ new Map());
        var s = je.get(t);
        if (s === void 0)
          je.set(t, o);
        else {
          for (var p = s; p.next !== null; )
            p = p.next;
          p.next = o;
        }
      }
    }
    function Tn(e, t) {
      return br(function() {
        return e;
      }, t);
    }
    function Dn(e, t, n) {
      return Be(), t(e._source);
    }
    function Pn(e) {
      return Be(), e;
    }
    function An() {
      Be();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function Mn() {
      return (at.identifierPrefix || "") + "R:" + (at.uniqueID++).toString(36);
    }
    function tr() {
    }
    var at = null;
    function wr(e) {
      at = e;
    }
    var _n = {
      readContext: En,
      useContext: Sn,
      useMemo: br,
      useReducer: yr,
      useRef: Rn,
      useState: On,
      useLayoutEffect: In,
      useCallback: Tn,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: tr,
      // Effects are not run in the server environment.
      useEffect: tr,
      // Debugging effect
      useDebugValue: tr,
      useDeferredValue: Pn,
      useTransition: An,
      useOpaqueIdentifier: Mn,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Dn
    }, Ut = "http://www.w3.org/1999/xhtml", xr = "http://www.w3.org/1998/Math/MathML", rr = "http://www.w3.org/2000/svg", nr = {
      html: Ut,
      mathml: xr,
      svg: rr
    };
    function kr(e) {
      switch (e) {
        case "svg":
          return rr;
        case "math":
          return xr;
        default:
          return Ut;
      }
    }
    function Fn(e, t) {
      return e == null || e === Ut ? kr(t) : e === rr && t === "foreignObject" ? Ut : e;
    }
    var jn = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ir(e, t) {
      jn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    }, zn = l({
      menuitem: !0
    }, Er), Ln = "__html";
    function Nn(e, t) {
      if (t) {
        if (zn[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Ln in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    var It = {
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
    function Hn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Wn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(It).forEach(function(e) {
      Wn.forEach(function(t) {
        It[Hn(t, e)] = It[e];
      });
    });
    function Un(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(It.hasOwnProperty(e) && It[e]) ? t + "px" : ("" + t).trim();
    }
    var Vn = /([A-Z])/g, qn = /^ms-/;
    function Bn(e) {
      return e.replace(Vn, "-$1").toLowerCase().replace(qn, "-ms-");
    }
    function or(e, t) {
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
    var Sr = function() {
    };
    {
      var Yn = /^(?:webkit|moz|o)[A-Z]/, $n = /^-ms-/, Gn = /-(.)/g, Or = /;\s*$/, st = {}, ar = {}, Rr = !1, Ir = !1, Xn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Zn = function(e) {
        st.hasOwnProperty(e) && st[e] || (st[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xn(e.replace($n, "ms-"))
        ));
      }, Kn = function(e) {
        st.hasOwnProperty(e) && st[e] || (st[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Qn = function(e, t) {
        ar.hasOwnProperty(t) && ar[t] || (ar[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Or, "")));
      }, Jn = function(e, t) {
        Rr || (Rr = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ei = function(e, t) {
        Ir || (Ir = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sr = function(e, t) {
        e.indexOf("-") > -1 ? Zn(e) : Yn.test(e) ? Kn(e) : Or.test(t) && Qn(e, t), typeof t == "number" && (isNaN(t) ? Jn(e, t) : isFinite(t) || ei(e, t));
      };
    }
    var ti = Sr, Cr = {
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
    }, lt = {}, ri = new RegExp("^(aria)-[" + qe + "]*$"), ni = new RegExp("^(aria)[A-Z][" + qe + "]*$"), ii = Object.prototype.hasOwnProperty;
    function oi(e, t) {
      {
        if (ii.call(lt, t) && lt[t])
          return !0;
        if (ni.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Cr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lt[t] = !0, !0;
          if (t !== o)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), lt[t] = !0, !0;
        }
        if (ri.test(t)) {
          var s = t.toLowerCase(), p = Cr.hasOwnProperty(s) ? s : null;
          if (p == null)
            return lt[t] = !0, !1;
          if (t !== p)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), lt[t] = !0, !0;
        }
      }
      return !0;
    }
    function ai(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = oi(e, o);
          s || n.push(o);
        }
        var p = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : n.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function si(e, t) {
      or(e, t) || ai(e, t);
    }
    var Tr = !1;
    function li(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Tr && (Tr = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Dr = {
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
    }, Pr = function() {
    };
    {
      var re = {}, ui = Object.prototype.hasOwnProperty, Ar = /^on./, ci = /^on[^A-Z]/, fi = new RegExp("^(aria)-[" + qe + "]*$"), di = new RegExp("^(aria)[A-Z][" + qe + "]*$");
      Pr = function(e, t, n, o) {
        if (ui.call(re, t) && re[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), re[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var h = c.hasOwnProperty(s) ? c[s] : null;
          if (h != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, h), re[t] = !0, !0;
          if (Ar.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), re[t] = !0, !0;
        } else if (Ar.test(t))
          return ci.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), re[t] = !0, !0;
        if (fi.test(t) || di.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), re[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), re[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), re[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), re[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === tt;
        if (Dr.hasOwnProperty(s)) {
          var R = Dr[s];
          if (R !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, R), re[t] = !0, !0;
        } else if (!O && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), re[t] = !0, !0;
        return typeof n == "boolean" && it(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), re[t] = !0, !0) : O ? !0 : it(t, n, d, !1) ? (re[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === Fe && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), re[t] = !0), !0);
      };
    }
    var pi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var p = Pr(e, s, t[s], n);
          p || o.push(s);
        }
        var c = o.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        o.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function hi(e, t, n) {
      or(e, t) || pi(e, t, n);
    }
    var ze = u.Children.toArray, Ce = [], sr = C.ReactCurrentDispatcher, Vt, lr = null, Mr = function() {
      return "";
    }, _r = function(e) {
      return "";
    }, Fr = function(e, t) {
    }, jr = function(e) {
    }, zr = function(e) {
    }, Lr = function() {
    }, Nr = !1;
    Vt = C.ReactDebugCurrentFrame, Fr = function(e, t) {
      si(e, t), li(e, t), hi(e, t, null);
    }, _r = function(e) {
      return Ie(e.type, e._source, null);
    }, jr = function(e) {
      Ce.push(e), Ce.length === 1 && (lr = Vt.getCurrentStack, Vt.getCurrentStack = Mr);
    }, zr = function(e) {
      var t = Ce[Ce.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Lr = function() {
      Ce.pop(), Ce.length === 0 && (Vt.getCurrentStack = lr, lr = null);
    }, Mr = function() {
      if (Ce.length === 0)
        return "";
      for (var e = Ce[Ce.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, p = s.length - 1; p >= 0; p--)
          t += _r(s[p]);
      return t;
    };
    var Hr = !1, Wr = !1, Ur = !1, Vr = !1, qr = !1, Br = {}, Yr = {}, $r = {}, Gr = {}, Xr = {}, Zr = {}, Kr = ["value", "defaultValue"], vi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, gi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qr = {};
    function mi(e) {
      if (!Qr.hasOwnProperty(e)) {
        if (!gi.test(e))
          throw Error("Invalid tag: " + e);
        Qr[e] = !0;
      }
    }
    var ur = {}, yi = function(e) {
      if (ur.hasOwnProperty(e))
        return ur[e];
      var t = Bn(e);
      return ur[e] = t, t;
    };
    function bi(e) {
      var t = "", n = "";
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          var s = o.indexOf("--") === 0, p = e[o];
          s || ti(o, p), p != null && (t += n + (s ? o : yi(o)) + ":", t += Un(o, p, s), n = ";");
        }
      return t || null;
    }
    function Jr(e, t) {
      {
        var n = e.constructor, o = n && Q(n) || "ReactClass", s = o + "." + t;
        if (Br[s])
          return;
        v(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Br[s] = !0;
      }
    }
    function wi(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function xi(e) {
      var t = e.dangerouslySetInnerHTML;
      if (t != null) {
        if (t.__html != null)
          return t.__html;
      } else {
        var n = e.children;
        if (typeof n == "string" || typeof n == "number")
          return T(n);
      }
      return null;
    }
    function ki(e) {
      if (!u.isValidElement(e))
        return ze(e);
      var t = e;
      if (t.type !== w)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return ze(n);
      var o = n;
      return [o];
    }
    function Ei(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !qr && typeof n != "string" && typeof n != "number" && (qr = !0, v("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Si = Object.prototype.hasOwnProperty, Oi = "style", Ri = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ii(e, t, n, o, s, p) {
      var c = "<" + e, h = or(t, n);
      for (var d in n)
        if (Si.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Oi && (O = bi(O));
            var R = null;
            h ? Ri.hasOwnProperty(d) || (R = ae(d, O)) : R = oe(d, O), R && (c += " " + R);
          }
        }
      return s || p && (c += " " + ke()), c;
    }
    function en(e, t) {
      if (e === void 0)
        throw Error((Q(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ci(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (zr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, h) {
        var d = wi(h), O = wt(h, t, n, d), R = [], q = !1, Z = {
          isMounted: function(He) {
            return !1;
          },
          enqueueForceUpdate: function(He) {
            if (R === null)
              return Jr(He, "forceUpdate"), null;
          },
          enqueueReplaceState: function(He, ct) {
            q = !0, R = [ct];
          },
          enqueueSetState: function(He, ct) {
            if (R === null)
              return Jr(He, "setState"), null;
            R.push(ct);
          }
        }, x;
        if (d) {
          if (x = new h(c.props, O, Z), typeof h.getDerivedStateFromProps == "function") {
            if (x.state === null || x.state === void 0) {
              var H = Q(h) || "Unknown";
              Zr[H] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", H, x.state === null ? "null" : "undefined", H), Zr[H] = !0);
            }
            var ne = h.getDerivedStateFromProps.call(null, c.props, x.state);
            if (ne === void 0) {
              var se = Q(h) || "Unknown";
              Xr[se] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", se), Xr[se] = !0);
            }
            ne != null && (x.state = l({}, x.state, ne));
          }
        } else {
          if (h.prototype && typeof h.prototype.render == "function") {
            var le = Q(h) || "Unknown";
            Yr[le] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", le, le), Yr[le] = !0);
          }
          var Le = {};
          if (vr(Le), x = h(c.props, O, Z), x = gr(h, c.props, x, O), x != null && x.render != null) {
            var he = Q(h) || "Unknown";
            $r[he] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", he, he, he), $r[he] = !0);
          }
          if (x == null || x.render == null) {
            e = x, en(e, h);
            return;
          }
        }
        x.props = c.props, x.context = O, x.updater = Z;
        var me = x.state;
        if (me === void 0 && (x.state = me = null), typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function") {
          if (typeof x.componentWillMount == "function") {
            if (x.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Ne = Q(h) || "Unknown";
              Gr[Ne] || (M(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Ne
              ), Gr[Ne] = !0);
            }
            typeof h.getDerivedStateFromProps != "function" && x.componentWillMount();
          }
          if (typeof x.UNSAFE_componentWillMount == "function" && typeof h.getDerivedStateFromProps != "function" && x.UNSAFE_componentWillMount(), R.length) {
            var ve = R, ye = q;
            if (R = null, q = !1, ye && ve.length === 1)
              x.state = ve[0];
            else {
              for (var Se = ye ? ve[0] : x.state, qt = !0, ut = ye ? 1 : 0; ut < ve.length; ut++) {
                var be = ve[ut], Ct = typeof be == "function" ? be.call(x, Se, c.props, O) : be;
                Ct != null && (qt ? (qt = !1, Se = l({}, Se, Ct)) : l(Se, Ct));
              }
              x.state = Se;
            }
          } else
            R = null;
        }
        e = x.render(), e === void 0 && x.render._isMockFunction && (e = null), en(e, h);
        var Ye;
        {
          if (typeof x.getChildContext == "function") {
            var Bt = h.childContextTypes;
            if (typeof Bt == "object") {
              Ye = x.getChildContext();
              for (var Yt in Ye)
                if (!(Yt in Bt))
                  throw Error((Q(h) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", Q(h) || "Unknown");
          }
          Ye && (t = l({}, t, Ye));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var tn = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var p = ki(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: nr.html,
          children: p,
          childIndex: 0,
          context: Je,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Kt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), xt(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, p = o.type._context, c = this.threadID;
        Ve(p, c);
        var h = p[c];
        this.contextStack[s] = p, this.contextValueStack[s] = h, this.contextProviderStack[s] = o, p[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && v("Unexpected pop.");
        var p = this.contextStack[s], c = this.contextValueStack[s];
        this.contextStack[s] = null, this.contextValueStack[s] = null, this.contextProviderStack[s] = null, this.contextIndex--, p[this.threadID] = c;
      }, t.clearProviders = function() {
        for (var o = this.contextIndex; o >= 0; o--) {
          var s = this.contextStack[o], p = this.contextValueStack[o];
          s[this.threadID] = p;
        }
      }, t.read = function(o) {
        if (this.exhausted)
          return null;
        var s = at;
        wr(this);
        var p = sr.current;
        sr.current = _n;
        try {
          for (var c = [""], h = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, xt(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (h || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === B) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === K) {
                this.suspenseDepth--;
                var q = c.pop();
                if (h) {
                  h = !1;
                  var Z = d.fallbackFrame;
                  if (!Z)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(Z), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += q;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var x = d.children[d.childIndex++], H = "";
            jr(this.stack), d.debugElementStack.length = 0;
            try {
              H += this.render(x, d.context, d.domNamespace);
            } catch (ne) {
              if (ne != null && typeof ne.then == "function") {
                if (!Dt)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ne;
            } finally {
              Lr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += H;
          }
          return c[0];
        } finally {
          sr.current = p, wr(s), mr();
        }
      }, t.render = function(o, s, p) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? T(c) : this.previousWasTextNode ? "<!-- -->" + T(c) : (this.previousWasTextNode = !0, T(c));
        } else {
          var h, d = Ci(o, s, this.threadID);
          if (h = d.child, s = d.context, h === null || h === !1)
            return "";
          if (!u.isValidElement(h)) {
            if (h != null && h.$$typeof != null) {
              var O = h.$$typeof;
              throw Error(O === D ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = ze(h), q = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return q.debugElementStack = [], this.stack.push(q), "";
          }
          var Z = h, x = Z.type;
          if (typeof x == "string")
            return this.renderDOM(Z, s, p);
          switch (x) {
            case Pe:
            case dt:
            case A:
            case z:
            case ce:
            case w: {
              var H = ze(h.props.children), ne = {
                type: null,
                domNamespace: p,
                children: H,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ne.debugElementStack = [], this.stack.push(ne), "";
            }
            case K:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Tt:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof x == "object" && x !== null)
            switch (x.$$typeof) {
              case ue: {
                var se = h, le, Le = {};
                vr(Le), le = x.render(se.props, se.ref), le = gr(x.render, se.props, le, se.ref), le = ze(le);
                var he = {
                  type: null,
                  domNamespace: p,
                  children: le,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case te: {
                var me = h, Ne = [u.createElement(x.type, l({
                  ref: me.ref
                }, me.props))], ve = {
                  type: null,
                  domNamespace: p,
                  children: Ne,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ve.debugElementStack = [], this.stack.push(ve), "";
              }
              case B: {
                var ye = h, Se = ye.props, qt = ze(Se.children), ut = {
                  type: ye,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ut.debugElementStack = [], this.pushProvider(ye), this.stack.push(ut), "";
              }
              case L: {
                var be = h.type;
                be._context === void 0 ? be !== be.Consumer && (Nr || (Nr = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : be = be._context;
                var Ct = h.props, Ye = this.threadID;
                Ve(be, Ye);
                var Bt = be[Ye], Yt = ze(Ct.children(Bt)), He = {
                  type: h,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return He.debugElementStack = [], this.stack.push(He), "";
              }
              case De:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case pe: {
                var ct = h, rn = h.type, Mi = rn._payload, _i = rn._init, Fi = _i(Mi), ji = [u.createElement(Fi, l({
                  ref: ct.ref
                }, ct.props))], nn = {
                  type: null,
                  domNamespace: p,
                  children: ji,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return nn.debugElementStack = [], this.stack.push(nn), "";
              }
            }
          var cr = "";
          {
            var on = Z._owner;
            (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (cr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var an = on ? Q(on) : null;
            an && (cr += `

Check the render method of \`` + an + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (x == null ? x : typeof x) + "." + cr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), h = p;
        p === nr.html && (h = kr(c)), h === nr.html && c !== o.type && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
        var d = o.props;
        if (c === "input")
          ir("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Wr && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Hr && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Hr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          ir("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (v("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, q = d.children;
            if (q != null) {
              if (v("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(q)) {
                if (!(q.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                q = q[0];
              }
              R = "" + q;
            }
            R == null && (R = ""), O = R;
          }
          d = l({}, d, {
            value: void 0,
            children: "" + O
          });
        } else if (c === "select") {
          {
            ir("select", d);
            for (var Z = 0; Z < Kr.length; Z++) {
              var x = Kr[Z];
              if (d[x] != null) {
                var H = Array.isArray(d[x]);
                d.multiple && !H ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", x) : !d.multiple && H && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", x);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Ur && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ur = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ne = null, se = this.currentSelectValue, le = Ei(d.children);
          if (se != null) {
            var Le;
            if (d.value != null ? Le = d.value + "" : Le = le, ne = !1, Array.isArray(se)) {
              for (var he = 0; he < se.length; he++)
                if ("" + se[he] === Le) {
                  ne = !0;
                  break;
                }
            } else
              ne = "" + se === Le;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ne,
              children: le
            });
          }
        }
        Fr(c, d), Nn(c, d);
        var me = Ii(o.type, c, d, h, this.makeStaticMarkup, this.stack.length === 1), Ne = "";
        Er.hasOwnProperty(c) ? me += "/>" : (me += ">", Ne = "</" + o.type + ">");
        var ve, ye = xi(d);
        ye != null ? (ve = [], vi.hasOwnProperty(c) && ye.charAt(0) === `
` && (me += `
`), me += ye) : ve = ze(d.children);
        var Se = {
          domNamespace: Fn(p, o.type),
          type: c,
          children: ve,
          childIndex: 0,
          context: s,
          footer: Ne
        };
        return Se.debugElementStack = [], this.stack.push(Se), this.previousWasTextNode = !1, me;
      }, e;
    }();
    function Ti(e, t) {
      var n = new tn(e, !1, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Di(e, t) {
      var n = new tn(e, !0, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Pi() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Ai() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ge.renderToNodeStream = Pi, Ge.renderToStaticMarkup = Di, Ge.renderToStaticNodeStream = Ai, Ge.renderToString = Ti, Ge.version = S;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? pr.exports = Vi() : pr.exports = qi();
var Bi = pr.exports;
const Yi = /* @__PURE__ */ Ui(Bi);
var yn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, vn = Te.createContext && /* @__PURE__ */ Te.createContext(yn), $i = ["attr", "size", "title"];
function Gi(u, l) {
  if (u == null)
    return {};
  var m, S, C = Xi(u, l);
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(u);
    for (S = 0; S < M.length; S++)
      m = M[S], l.indexOf(m) === -1 && {}.propertyIsEnumerable.call(u, m) && (C[m] = u[m]);
  }
  return C;
}
function Xi(u, l) {
  if (u == null)
    return {};
  var m = {};
  for (var S in u)
    if ({}.hasOwnProperty.call(u, S)) {
      if (l.indexOf(S) !== -1)
        continue;
      m[S] = u[S];
    }
  return m;
}
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var m = arguments[l];
      for (var S in m)
        ({}).hasOwnProperty.call(m, S) && (u[S] = m[S]);
    }
    return u;
  }, $t.apply(null, arguments);
}
function gn(u, l) {
  var m = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var S = Object.getOwnPropertySymbols(u);
    l && (S = S.filter(function(C) {
      return Object.getOwnPropertyDescriptor(u, C).enumerable;
    })), m.push.apply(m, S);
  }
  return m;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? gn(Object(m), !0).forEach(function(S) {
      Zi(u, S, m[S]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(m)) : gn(Object(m)).forEach(function(S) {
      Object.defineProperty(u, S, Object.getOwnPropertyDescriptor(m, S));
    });
  }
  return u;
}
function Zi(u, l, m) {
  return (l = Ki(l)) in u ? Object.defineProperty(u, l, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = m, u;
}
function Ki(u) {
  var l = Qi(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Qi(u, l) {
  if (typeof u != "object" || !u)
    return u;
  var m = u[Symbol.toPrimitive];
  if (m !== void 0) {
    var S = m.call(u, l || "default");
    if (typeof S != "object")
      return S;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function bn(u) {
  return u && u.map((l, m) => /* @__PURE__ */ Te.createElement(l.tag, Gt({
    key: m
  }, l.attr), bn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Te.createElement(Ji, $t({
    attr: Gt({}, u.attr)
  }, l), bn(u.child));
}
function Ji(u) {
  var l = (m) => {
    var {
      attr: S,
      size: C,
      title: M
    } = u, v = Gi(u, $i), I = C || m.size || "1em", D;
    return m.className && (D = m.className), u.className && (D = (D ? D + " " : "") + u.className), /* @__PURE__ */ Te.createElement("svg", $t({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, m.attr, S, v, {
      className: D,
      style: Gt(Gt({
        color: u.color || m.color
      }, m.style), u.style),
      height: I,
      width: I,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ Te.createElement("title", null, M), u.children);
  };
  return vn !== void 0 ? /* @__PURE__ */ Te.createElement(vn.Consumer, null, (m) => l(m)) : l(yn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const oo = zi(
  ({ data: u, type: l, options: m = {}, height: S = 350, title: C }, M) => {
    const v = ln(null), I = ln(null), [D, w] = Li(!1), A = fr(() => Yi.renderToString(
      /* @__PURE__ */ ft(eo, { size: 14, style: { color: "#9ca3af", marginTop: "4px" } })
    ), []), z = fr(() => l || (Array.isArray(u[0]) ? u.map((L) => cn(L)) : cn(u)), [u, l]), B = fr(() => {
      const L = Array.isArray(z) ? String(z[0]).toLowerCase() : String(z).toLowerCase();
      let ue = [], K = [], ce = [];
      if (Array.isArray(u[0]))
        ue = u.map((te, pe) => ({
          name: `Series ${pe + 1}`,
          type: Array.isArray(l) ? l[pe] : l || (Array.isArray(z) ? z[pe] : z),
          ...fn(Array.isArray(z) ? z[pe] : z, te).series[0]
        }));
      else {
        const te = fn(z, u);
        ue = te.series, K = te.labels, ce = te.categories;
      }
      return {
        ...m,
        chart: {
          id: "vizly-main-chart",
          type: L === "funnel" || L === "column" ? "bar" : L,
          height: "100%",
          width: "100%",
          toolbar: {
            show: !0,
            tools: {
              download: !0,
              zoom: !0,
              zoomin: !0,
              zoomout: !0,
              pan: !0,
              reset: !0,
              customIcons: [
                {
                  icon: A,
                  index: 6,
                  title: "Center View",
                  class: "custom-expand-icon",
                  click: () => w((te) => !te)
                }
              ]
            }
          },
          ...m.chart
        },
        series: ue,
        labels: K != null && K.length ? K : void 0,
        xaxis: ce != null && ce.length ? { categories: ce, ...m.xaxis } : m.xaxis,
        title: {
          text: typeof C == "string" ? C : C == null ? void 0 : C.text,
          align: typeof C == "object" ? C == null ? void 0 : C.align : "left",
          ...m.title
        }
      };
    }, [u, z, m, C, A, l]);
    return un(() => {
      v.current && (I.current ? I.current.updateOptions(B) : (I.current = new Hi(v.current, B), I.current.render()));
    }, [B]), un(() => {
      const L = (K) => {
        K.key === "Escape" && w(!1);
      }, ue = setTimeout(() => {
        I.current && window.dispatchEvent(new Event("resize"));
      }, 100);
      return D && window.addEventListener("keydown", L), () => {
        window.removeEventListener("keydown", L), clearTimeout(ue);
      };
    }, [D]), Ni(M, () => ({
      reset: () => {
        var L;
        return (L = I.current) == null ? void 0 : L.resetSeries();
      },
      toggleFullscreen: () => w(!D)
    })), /* @__PURE__ */ sn("div", { style: { height: D ? "0" : S, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ ft("style", { children: `
          /* Crucial: Ensure the download menu is visible above the overlay */
          .apexcharts-menu { z-index: 1000001 !important; }
          
          .vizly-container-expanded {
            position: fixed !important;
            inset: 0 !important;
            z-index: 1000000 !important;
            background: rgba(0, 0, 0, 0.75);
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .vizly-content-wrapper {
            background: #fff;
            border-radius: 12px;
            width: 90%;
            max-width: 850px;
            height: 550px;
            position: relative;
            padding: 20px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          }

          .vizly-close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            z-index: 10;
            cursor: pointer;
            border: none;
            background: none;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        ` }),
      /* @__PURE__ */ ft(
        "div",
        {
          className: D ? "vizly-container-expanded" : "",
          onClick: () => w(!1),
          children: /* @__PURE__ */ sn(
            "div",
            {
              className: D ? "vizly-content-wrapper" : "",
              onClick: (L) => L.stopPropagation(),
              style: D ? {} : { height: "100%", width: "100%" },
              children: [
                D && /* @__PURE__ */ ft("button", { className: "vizly-close-btn", onClick: () => w(!1), children: /* @__PURE__ */ ft(to, { size: 18 }) }),
                /* @__PURE__ */ ft(
                  "div",
                  {
                    ref: v,
                    style: {
                      height: "100%",
                      width: "100%",
                      background: D ? "#fff" : "transparent"
                    }
                  }
                )
              ]
            }
          )
        }
      )
    ] });
  }
);
export {
  oo as VizlyChart
};
