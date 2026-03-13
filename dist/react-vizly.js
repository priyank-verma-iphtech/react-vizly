import { jsx as ht, jsxs as dr } from "react/jsx-runtime";
import Me, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as ln, useEffect as un, useImperativeHandle as Ui } from "react";
import cn from "apexcharts";
const fn = (u) => {
  if (!u || u.length === 0)
    return "bar";
  const l = u[0];
  if (typeof l == "number")
    return "donut";
  if (typeof l != "object")
    return "bar";
  const v = Object.values(l).filter(
    (E) => typeof E == "number"
  );
  return l.stage && l.value ? "funnel" : l.label && l.value ? "donut" : l.category && l.value ? "polararea" : l.name && l.value ? "treemap" : l.x !== void 0 && l.y !== void 0 && l.value !== void 0 ? "heatmap" : Array.isArray(l.y) && l.y.length === 4 ? "candlestick" : Array.isArray(l.y) && l.y.length === 5 ? "boxplot" : Array.isArray(l.y) && l.y.length === 2 ? "rangebar" : l.x !== void 0 && l.y !== void 0 && l.r !== void 0 ? "bubble" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : l.x && !isNaN(Date.parse(l.x)) ? "line" : l.start !== void 0 && l.end !== void 0 ? "slope" : v.length > 1 && !l.category ? "mixed" : (l.x !== void 0 && l.y !== void 0, "bar");
}, Hi = {
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  slope: "xy",
  mixed: "xy",
  bar: "category",
  column: "category",
  radar: "category",
  funnel: "category",
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  polararea: "circular",
  heatmap: "heatmap",
  treemap: "treemap",
  rangebar: "range",
  candlestick: "range",
  boxplot: "range"
}, dn = (u, l) => {
  const v = Hi[u] || "xy";
  let E = [], I = [], L = [];
  if (!l || !Array.isArray(l) || l.length === 0)
    return { series: [], labels: [], categories: [] };
  const y = l[0], C = Object.keys(y).filter(
    (A) => typeof y[A] == "number"
  ), T = Object.keys(y).find((A) => typeof y[A] == "string") || "x";
  switch (v) {
    case "circular":
      E = l.map((p) => Number(p.value ?? p.y ?? 0)), I = l.map(
        (p) => String(p.label ?? p.category ?? p.name ?? p.x ?? "Unknown")
      );
      break;
    case "category":
      L = l.map(
        (p) => String(p.x ?? p.category ?? p.stage ?? p[T] ?? "Unknown")
      ), C.length > 1 ? E = C.map((p) => ({
        name: p,
        data: l.map((P) => P[p] ?? 0)
      })) : E = [{
        name: C[0] || "Series 1",
        data: l.map((p) => p.y ?? p.value ?? 0)
      }];
      break;
    case "range":
      E = [{
        name: "Series 1",
        data: l.map((p) => {
          let P = [];
          return u === "boxplot" ? P = Array.isArray(p.y) ? p.y : [p.min, p.q1, p.median, p.q3, p.max] : u === "candlestick" ? P = Array.isArray(p.y) ? p.y : [p.open, p.high, p.low, p.close] : P = Array.isArray(p.y) ? p.y : [p.start, p.end], {
            x: p.x ?? p.label ?? p.category ?? p.date ?? "Unknown",
            y: P
          };
        })
      }];
      break;
    case "heatmap":
      const A = {};
      l.forEach((p) => {
        const P = p.group ?? "Series 1";
        A[P] || (A[P] = []), A[P].push({
          x: String(p.x ?? p.category ?? "Unknown"),
          y: p.value ?? p.y ?? 0
        });
      }), E = Object.keys(A).map((p) => ({
        name: p,
        data: A[p]
      }));
      break;
    case "treemap":
      E = [{
        data: l.map((p) => ({
          x: p.name ?? p.label ?? p.category,
          y: p.value ?? p.y ?? 0
        }))
      }];
      break;
    default:
      u === "bubble" ? E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: p.x ?? 0,
          y: p.y ?? 0,
          z: p.r ?? p.z ?? p.value ?? 0
        }))
      }] : C.length > 1 ? E = C.map((p) => ({
        name: p,
        data: l.map((P) => ({
          x: P.x ?? P[T],
          y: P[p] ?? 0
        }))
      })) : E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: p.x ?? p[T],
          y: p.y ?? p.value ?? 0
        }))
      }];
  }
  return { series: E, labels: I, categories: L };
};
function Wi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var hr = { exports: {} }, Ze = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, pn;
function mn() {
  if (pn)
    return pr;
  pn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
  function E(L) {
    if (L == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(L);
  }
  function I() {
    try {
      if (!Object.assign)
        return !1;
      var L = new String("abc");
      if (L[5] = "de", Object.getOwnPropertyNames(L)[0] === "5")
        return !1;
      for (var y = {}, C = 0; C < 10; C++)
        y["_" + String.fromCharCode(C)] = C;
      var T = Object.getOwnPropertyNames(y).map(function(p) {
        return y[p];
      });
      if (T.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        A[p] = p;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = I() ? Object.assign : function(L, y) {
    for (var C, T = E(L), A, p = 1; p < arguments.length; p++) {
      C = Object(arguments[p]);
      for (var P in C)
        l.call(C, P) && (T[P] = C[P]);
      if (u) {
        A = u(C);
        for (var K = 0; K < A.length; K++)
          v.call(C, A[K]) && (T[A[K]] = C[A[K]]);
      }
    }
    return T;
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
    return Ze;
  hn = 1;
  var u = mn(), l = Me;
  function v(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, I = 60107, L = 60108, y = 60114, C = 60109, T = 60110, A = 60112, p = 60113, P = 60120, K = 60115, V = 60116, xe = 60121, M = 60117, X = 60119, ie = 60129, ce = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var F = Symbol.for;
    E = F("react.portal"), I = F("react.fragment"), L = F("react.strict_mode"), y = F("react.profiler"), C = F("react.provider"), T = F("react.context"), A = F("react.forward_ref"), p = F("react.suspense"), P = F("react.suspense_list"), K = F("react.memo"), V = F("react.lazy"), xe = F("react.block"), M = F("react.fundamental"), X = F("react.scope"), ie = F("react.debug_trace_mode"), ce = F("react.legacy_hidden");
  }
  function Ie(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case I:
        return "Fragment";
      case E:
        return "Portal";
      case y:
        return "Profiler";
      case L:
        return "StrictMode";
      case p:
        return "Suspense";
      case P:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case T:
          return (r.displayName || "Context") + ".Consumer";
        case C:
          return (r._context.displayName || "Context") + ".Provider";
        case A:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case K:
          return Ie(r.type);
        case xe:
          return Ie(r._render);
        case V:
          a = r._payload, r = r._init;
          try {
            return Ie(r(a));
          } catch {
          }
      }
    return null;
  }
  var Ve = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = {};
  function ve(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function N(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ve(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = _e;
    return a;
  }
  for (var H = new Uint16Array(16), Ce = 0; 15 > Ce; Ce++)
    H[Ce] = Ce + 1;
  H[15] = 0;
  var q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qe = Object.prototype.hasOwnProperty, we = {}, vt = {};
  function gt(r) {
    return qe.call(vt, r) ? !0 : qe.call(we, r) ? !1 : q.test(r) ? vt[r] = !0 : (we[r] = !0, !1);
  }
  function At(r, a, i, f) {
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
  function Pt(r, a, i, f) {
    if (a === null || typeof a > "u" || At(r, a, i, f))
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
  function Q(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    Y[r] = new Q(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    Y[a] = new Q(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    Y[r] = new Q(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    Y[r] = new Q(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    Y[r] = new Q(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    Y[r] = new Q(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    Y[r] = new Q(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    Y[r] = new Q(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    Y[r] = new Q(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Qe = /[\-:]([a-z])/g;
  function Je(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Qe,
      Je
    );
    Y[a] = new Q(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Qe, Je);
    Y[a] = new Q(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Qe, Je);
    Y[a] = new Q(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    Y[r] = new Q(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    Y[r] = new Q(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Zt = /["'&<>]/;
  function Te(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var a = Zt.exec(r);
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
  function yt(r, a) {
    var i = Y.hasOwnProperty(r) ? Y[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Pt(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Te(a) + '"'))) : gt(r) ? r + '="' + (Te(a) + '"') : "";
  }
  function mt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var et = typeof Object.is == "function" ? Object.is : mt, oe = null, De = null, _ = null, Fe = !1, Be = !1, ke = null, Ae = 0;
  function Se() {
    if (oe === null)
      throw Error(v(321));
    return oe;
  }
  function bt() {
    if (0 < Ae)
      throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function je() {
    return _ === null ? De === null ? (Fe = !1, De = _ = bt()) : (Fe = !0, _ = De) : _.next === null ? (Fe = !1, _ = _.next = bt()) : (Fe = !0, _ = _.next), _;
  }
  function Mt(r, a, i, f) {
    for (; Be; )
      Be = !1, Ae += 1, _ = null, i = r(a, f);
    return tt(), i;
  }
  function tt() {
    oe = null, Be = !1, De = null, Ae = 0, _ = ke = null;
  }
  function rt(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function xt(r, a, i) {
    if (oe = Se(), _ = je(), Fe) {
      var f = _.queue;
      if (a = f.dispatch, ke !== null && (i = ke.get(f), i !== void 0)) {
        ke.delete(f), f = _.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return _.memoizedState = f, [f, a];
      }
      return [_.memoizedState, a];
    }
    return r = r === rt ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, _.memoizedState = r, r = _.queue = { last: null, dispatch: null }, r = r.dispatch = Ye.bind(null, oe, r), [_.memoizedState, r];
  }
  function wt(r, a) {
    if (oe = Se(), _ = je(), a = a === void 0 ? null : a, _ !== null) {
      var i = _.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!et(a[k], f[k])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), _.memoizedState = [r, a], r;
  }
  function Ye(r, a, i) {
    if (!(25 > Ae))
      throw Error(v(301));
    if (r === oe)
      if (Be = !0, r = { action: i, next: null }, ke === null && (ke = /* @__PURE__ */ new Map()), i = ke.get(a), i === void 0)
        ke.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function kt() {
  }
  var B = null, nt = { readContext: function(r) {
    var a = B.threadID;
    return ve(r, a), r[a];
  }, useContext: function(r) {
    Se();
    var a = B.threadID;
    return ve(r, a), r[a];
  }, useMemo: wt, useReducer: xt, useRef: function(r) {
    oe = Se(), _ = je();
    var a = _.memoizedState;
    return a === null ? (r = { current: r }, _.memoizedState = r) : a;
  }, useState: function(r) {
    return xt(rt, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return wt(function() {
      return r;
    }, a);
  }, useImperativeHandle: kt, useEffect: kt, useDebugValue: kt, useDeferredValue: function(r) {
    return Se(), r;
  }, useTransition: function() {
    return Se(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (B.identifierPrefix || "") + "R:" + (B.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return Se(), a(r._source);
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
  var St = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, it = u({ menuitem: !0 }, St), fe = {
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
  }, Et = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fe).forEach(function(r) {
    Et.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), fe[a] = fe[r];
    });
  });
  var ze = /([A-Z])/g, ot = /^ms-/, ge = l.Children.toArray, at = Ve.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, Ot = {};
  function jt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var zt = Object.prototype.hasOwnProperty, Lt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function Rt(r, a) {
    if (r === void 0)
      throw Error(v(152, Ie(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, ee = N(S, a, i, m), G = [], te = !1, U = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (G === null)
          return null;
      }, enqueueReplaceState: function(It, j) {
        te = !0, G = [j];
      }, enqueueSetState: function(It, j) {
        if (G === null)
          return null;
        G.push(j);
      } };
      if (m) {
        if (m = new S(b.props, ee, U), typeof S.getDerivedStateFromProps == "function") {
          var D = S.getDerivedStateFromProps.call(null, b.props, m.state);
          D != null && (m.state = u({}, m.state, D));
        }
      } else if (oe = {}, m = S(
        b.props,
        ee,
        U
      ), m = Mt(S, b.props, m, ee), m == null || m.render == null) {
        r = m, Rt(r, S);
        return;
      }
      if (m.props = b.props, m.context = ee, m.updater = U, U = m.state, U === void 0 && (m.state = U = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), G.length) {
          U = G;
          var Z = te;
          if (G = null, te = !1, Z && U.length === 1)
            m.state = U[0];
          else {
            D = Z ? U[0] : m.state;
            var Ee = !0;
            for (Z = Z ? 1 : 0; Z < U.length; Z++) {
              var ae = U[Z];
              ae = typeof ae == "function" ? ae.call(m, D, b.props, ee) : ae, ae != null && (Ee ? (Ee = !1, D = u({}, D, ae)) : u(D, ae));
            }
            m.state = D;
          }
        } else
          G = null;
      if (r = m.render(), Rt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var se = m.getChildContext();
        for (var de in se)
          if (!(de in b))
            throw Error(v(108, Ie(S) || "Unknown", de));
      }
      se && (a = u({}, a, se));
    }
    for (; l.isValidElement(r); ) {
      var k = r, x = k.type;
      if (typeof x != "function")
        break;
      f(k, x);
    }
    return { child: r, context: a };
  }
  var st = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== I ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : ge(i)) : i = ge(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: _e, footer: "" };
      var x = H[0];
      if (x === 0) {
        var b = H;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(v(304));
        var m = new Uint16Array(S);
        for (m.set(b), H = m, H[0] = x + 1, b = x; b < S - 1; b++)
          H[b] = b + 1;
        H[S - 1] = 0;
      } else
        H[0] = H[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        H[i] = H[0], H[0] = i;
      }
    }, a.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, x = this.threadID;
      ve(k, x);
      var b = k[x];
      this.contextStack[f] = k, this.contextValueStack[f] = b, k[x] = i.props.value;
    }, a.popProvider = function() {
      var i = this.contextIndex, f = this.contextStack[i], k = this.contextValueStack[i];
      this.contextStack[i] = null, this.contextValueStack[i] = null, this.contextIndex--, f[this.threadID] = k;
    }, a.clearProviders = function() {
      for (var i = this.contextIndex; 0 <= i; i--)
        this.contextStack[i][this.threadID] = this.contextValueStack[i];
    }, a.read = function(i) {
      if (this.exhausted)
        return null;
      var f = B;
      B = this;
      var k = at.current;
      at.current = nt;
      try {
        for (var x = [""], b = !1; x[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            H[S] = H[0], H[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (b || m.childIndex >= m.children.length) {
            var ee = m.footer;
            if (ee !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === C)
              this.popProvider(m.type);
            else if (m.type === p) {
              this.suspenseDepth--;
              var G = x.pop();
              if (b) {
                b = !1;
                var te = m.fallbackFrame;
                if (!te)
                  throw Error(v(303));
                this.stack.push(te), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += G;
            }
            x[this.suspenseDepth] += ee;
          } else {
            var U = m.children[m.childIndex++], D = "";
            try {
              D += this.render(U, m.context, m.domNamespace);
            } catch (Z) {
              throw Z != null && typeof Z.then == "function" ? Error(v(294)) : Z;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += D;
          }
        }
        return x[0];
      } finally {
        at.current = k, B = f, tt();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Te(k) : this.previousWasTextNode ? "<!-- -->" + Te(k) : (this.previousWasTextNode = !0, Te(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? v(257) : v(258, k.toString()));
        return i = ge(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, f, k);
      switch (x) {
        case ce:
        case ie:
        case L:
        case y:
        case P:
        case I:
          return i = ge(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case p:
          throw Error(v(294));
        case X:
          throw Error(v(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case A:
            oe = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = ge(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case K:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case C:
            return x = ge(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case T:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ve(x, S), x = ge(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case M:
            throw Error(v(338));
          case V:
            return x = i.type, b = x._init, x = b(x._payload), i = [l.createElement(x, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(v(130, x == null ? x : typeof x, ""));
    }, a.renderDOM = function(i, f, k) {
      var x = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(x)) {
        if (!$e.test(x))
          throw Error(v(65, x));
        Ft[x] = !0;
      }
      var b = i.props;
      if (x === "input")
        b = u({ type: void 0 }, b, { defaultChecked: void 0, defaultValue: void 0, value: b.value != null ? b.value : b.defaultValue, checked: b.checked != null ? b.checked : b.defaultChecked });
      else if (x === "textarea") {
        var S = b.value;
        if (S == null) {
          S = b.defaultValue;
          var m = b.children;
          if (m != null) {
            if (S != null)
              throw Error(v(92));
            if (Array.isArray(m)) {
              if (!(1 >= m.length))
                throw Error(v(93));
              m = m[0];
            }
            S = "" + m;
          }
          S == null && (S = "");
        }
        b = u({}, b, { value: void 0, children: "" + S });
      } else if (x === "select")
        this.currentSelectValue = b.value != null ? b.value : b.defaultValue, b = u({}, b, { value: void 0 });
      else if (x === "option") {
        m = this.currentSelectValue;
        var ee = jt(b.children);
        if (m != null) {
          var G = b.value != null ? b.value + "" : ee;
          if (S = !1, Array.isArray(m)) {
            for (var te = 0; te < m.length; te++)
              if ("" + m[te] === G) {
                S = !0;
                break;
              }
          } else
            S = "" + m === G;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: ee }
          );
        }
      }
      if (S = b) {
        if (it[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(v(137, x));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(v(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(v(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(v(62));
      }
      S = b, m = this.makeStaticMarkup, ee = this.stack.length === 1, G = "<" + i.type;
      e:
        if (x.indexOf("-") === -1)
          te = typeof S.is == "string";
        else
          switch (x) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              te = !1;
              break e;
            default:
              te = !0;
          }
      for (j in S)
        if (zt.call(S, j)) {
          var U = S[j];
          if (U != null) {
            if (j === "style") {
              var D = void 0, Z = "", Ee = "";
              for (D in U)
                if (U.hasOwnProperty(D)) {
                  var ae = D.indexOf("--") === 0, se = U[D];
                  if (se != null) {
                    if (ae)
                      var de = D;
                    else if (de = D, Ot.hasOwnProperty(de))
                      de = Ot[de];
                    else {
                      var It = de.replace(ze, "-$1").toLowerCase().replace(ot, "-ms-");
                      de = Ot[de] = It;
                    }
                    Z += Ee + de + ":", Ee = D, ae = se == null || typeof se == "boolean" || se === "" ? "" : ae || typeof se != "number" || se === 0 || fe.hasOwnProperty(Ee) && fe[Ee] ? ("" + se).trim() : se + "px", Z += ae, Ee = ";";
                  }
                }
              U = Z || null;
            }
            D = null, te ? Lt.hasOwnProperty(j) || (D = j, D = gt(D) && U != null ? D + '="' + (Te(U) + '"') : "") : D = yt(j, U), D && (G += " " + D);
          }
        }
      m || ee && (G += ' data-reactroot=""');
      var j = G;
      S = "", St.hasOwnProperty(x) ? j += "/>" : (j += ">", S = "</" + i.type + ">");
      e: {
        if (m = b.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = b.children, typeof m == "string" || typeof m == "number") {
          m = Te(m);
          break e;
        }
        m = null;
      }
      return m != null ? (b = [], _t.hasOwnProperty(x) && m.charAt(0) === `
` && (j += `
`), j += m) : b = ge(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, j;
    }, r;
  }();
  return Ze.renderToNodeStream = function() {
    throw Error(v(207));
  }, Ze.renderToStaticMarkup = function(r, a) {
    r = new st(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ze.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Ze.renderToString = function(r, a) {
    r = new st(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ze.version = "17.0.2", Ze;
}
var Ke = {};
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
    var u = Me, l = mn();
    function v(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", I = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        C("warn", e, n);
      }
    }
    function y(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        C("error", e, n);
      }
    }
    function C(e, t, n) {
      {
        var o = I.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var T = 60106, A = 60107, p = 60108, P = 60114, K = 60109, V = 60110, xe = 60112, M = 60113, X = 60120, ie = 60115, ce = 60116, F = 60121, Ie = 60117, Ve = 60119, _e = 60129, ve = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var N = Symbol.for;
      N("react.element"), T = N("react.portal"), A = N("react.fragment"), p = N("react.strict_mode"), P = N("react.profiler"), K = N("react.provider"), V = N("react.context"), xe = N("react.forward_ref"), M = N("react.suspense"), X = N("react.suspense_list"), ie = N("react.memo"), ce = N("react.lazy"), F = N("react.block"), N("react.server.block"), Ie = N("react.fundamental"), Ve = N("react.scope"), N("react.opaque.id"), _e = N("react.debug_trace_mode"), N("react.offscreen"), ve = N("react.legacy_hidden");
    }
    function H(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Ce(e) {
      return e.displayName || "Context";
    }
    function q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case A:
          return "Fragment";
        case T:
          return "Portal";
        case P:
          return "Profiler";
        case p:
          return "StrictMode";
        case M:
          return "Suspense";
        case X:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case V:
            var t = e;
            return Ce(t) + ".Consumer";
          case K:
            var n = e;
            return Ce(n._context) + ".Provider";
          case xe:
            return H(e, e.render, "ForwardRef");
          case ie:
            return q(e.type);
          case F:
            return q(e._render);
          case ce: {
            var o = e, s = o._payload, h = o._init;
            try {
              return q(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = !1, we = 0, vt, gt, At, Pt, Q, Y, Qe;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Zt() {
      {
        if (we === 0) {
          vt = console.log, gt = console.info, At = console.warn, Pt = console.error, Q = console.group, Y = console.groupCollapsed, Qe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
        we++;
      }
    }
    function Te() {
      {
        if (we--, we === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: vt
            }),
            info: l({}, e, {
              value: gt
            }),
            warn: l({}, e, {
              value: At
            }),
            error: l({}, e, {
              value: Pt
            }),
            group: l({}, e, {
              value: Q
            }),
            groupCollapsed: l({}, e, {
              value: Y
            }),
            groupEnd: l({}, e, {
              value: Qe
            })
          });
        }
        we < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = I.ReactCurrentDispatcher, mt;
    function et(e, t, n) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            mt = o && o[1] || "";
          }
        return `
` + mt + e;
      }
    }
    var oe = !1, De;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      De = new _();
    }
    function Fe(e, t) {
      if (!e || oe)
        return "";
      {
        var n = De.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      oe = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = yt.current, yt.current = null, Zt();
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
          for (var g = W.stack.split(`
`), d = o.stack.split(`
`), O = g.length - 1, R = d.length - 1; O >= 1 && R >= 0 && g[O] !== d[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (g[O] !== d[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || g[O] !== d[R]) {
                    var $ = `
` + g[O].replace(" at new ", " at ");
                    return typeof e == "function" && De.set(e, $), $;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, yt.current = h, Te(), Error.prepareStackTrace = s;
      }
      var J = e ? e.displayName || e.name : "", w = J ? et(J) : "";
      return typeof e == "function" && De.set(e, w), w;
    }
    function Be(e, t, n) {
      return Fe(e, !1);
    }
    function ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ae(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, ke(e));
      if (typeof e == "string")
        return et(e);
      switch (e) {
        case M:
          return et("Suspense");
        case X:
          return et("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case xe:
            return Be(e.render);
          case ie:
            return Ae(e.type, t, n);
          case F:
            return Be(e._render);
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
    var Se = {}, bt = I.ReactDebugCurrentFrame;
    function je(e) {
      if (e) {
        var t = e._owner, n = Ae(e.type, e._source, t ? t.type : null);
        bt.setExtraStackFrame(n);
      } else
        bt.setExtraStackFrame(null);
    }
    function Mt(e, t, n, o, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
            var g = void 0;
            try {
              if (typeof e[c] != "function") {
                var d = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              g = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              g = O;
            }
            g && !(g instanceof Error) && (je(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof g), je(null)), g instanceof Error && !(g.message in Se) && (Se[g.message] = !0, je(s), y("Failed %s type: %s", n, g.message), je(null));
          }
      }
    }
    var tt;
    tt = /* @__PURE__ */ new Set();
    var rt = {};
    Object.freeze(rt);
    function xt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return rt;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function wt(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function Ye(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function kt(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === V && s._context === void 0
          );
          if (!h && !tt.has(e)) {
            tt.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === K ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", q(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ye(s, n), s[n];
        {
          var g = xt(e, t);
          return e.contextTypes && wt(e.contextTypes, g, "context"), g;
        }
      } else {
        var d = xt(e, t);
        return e.contextTypes && wt(e.contextTypes, d, "context"), d;
      }
    }
    for (var B = new Uint16Array(16), nt = 0; nt < 15; nt++)
      B[nt] = nt + 1;
    B[15] = 0;
    function Kt() {
      var e = B, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), B = o, B[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        B[s] = s + 1;
      return B[n - 1] = 0, t;
    }
    function Qt() {
      var e = B[0];
      return e === 0 ? Kt() : (B[0] = B[e], e);
    }
    function St(e) {
      B[e] = B[0], B[0] = e;
    }
    var it = 0, fe = 1, Et = 2, ze = 3, ot = 4, ge = 5, at = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Ot = new RegExp("^[" + _t + "][" + $e + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Rt(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : Ot.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === it : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function st(e, t, n, o) {
      if (n !== null && n.type === it)
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
      if (t === null || typeof t > "u" || st(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case ze:
            return !t;
          case ot:
            return t === !1;
          case ge:
            return isNaN(t);
          case at:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, h, c) {
      this.acceptsBooleans = t === Et || t === ze || t === ot, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
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
        it,
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
        Et,
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
        Et,
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
        ze,
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
        ze,
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
        ot,
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
        at,
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
    var x = /[\-\:]([a-z])/g, b = function(e) {
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
      var t = e.replace(x, b);
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
      var t = e.replace(x, b);
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
      var t = e.replace(x, b);
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
    var S = "xlinkHref";
    f[S] = new i(
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
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ee = !1;
    function G(e) {
      !ee && m.test(e) && (ee = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var te = /["'&<>]/;
    function U(e) {
      var t = "" + e, n = te.exec(t);
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
      return typeof e == "boolean" || typeof e == "number" ? "" + e : U(e);
    }
    function Z(e) {
      return '"' + D(e) + '"';
    }
    function Ee() {
      return Ft + '=""';
    }
    function ae(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === ze || s === ot && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, G(t)), o + "=" + Z(t));
      } else if (Rt(e))
        return e + "=" + Z(t);
      return "";
    }
    function se(e, t) {
      return !Rt(e) || t == null ? "" : e + "=" + Z(t);
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var It = typeof Object.is == "function" ? Object.is : de, j = null, Nt = null, z = null, Ct = !1, Ut = !1, Le = null, Ht = 0, kn = 25, Oe = !1, lt;
    function Xe() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Oe && y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", lt), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, lt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!It(e[n], t[n]))
          return !1;
      return !0;
    }
    function vr() {
      if (Ht > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function er() {
      return z === null ? Nt === null ? (Ct = !1, Nt = z = vr()) : (Ct = !0, z = Nt) : z.next === null ? (Ct = !1, z = z.next = vr()) : (Ct = !0, z = z.next), z;
    }
    function gr(e) {
      j = e, Oe = !1;
    }
    function yr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Ht += 1, z = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Oe = !1, j = null, Ut = !1, Nt = null, Ht = 0, Le = null, z = null;
    }
    function En(e, t) {
      var n = ut.threadID;
      return Ye(e, n), Oe && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      lt = "useContext", Xe();
      var n = ut.threadID;
      return Ye(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return lt = "useState", br(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function br(e, t, n) {
      if (e !== tr && (lt = "useReducer"), j = Xe(), z = er(), Ct) {
        var o = z.queue, s = o.dispatch;
        if (Le !== null) {
          var h = Le.get(o);
          if (h !== void 0) {
            Le.delete(o);
            var c = z.memoizedState, g = h;
            do {
              var d = g.action;
              Oe = !0, c = e(c, d), Oe = !1, g = g.next;
            } while (g !== null);
            return z.memoizedState = c, [c, s];
          }
        }
        return [z.memoizedState, s];
      } else {
        Oe = !0;
        var O;
        e === tr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Oe = !1, z.memoizedState = O;
        var R = z.queue = {
          last: null,
          dispatch: null
        }, $ = R.dispatch = Tn.bind(null, j, R);
        return [z.memoizedState, $];
      }
    }
    function xr(e, t) {
      j = Xe(), z = er();
      var n = t === void 0 ? null : t;
      if (z !== null) {
        var o = z.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Sn(n, s))
            return o[0];
        }
      }
      Oe = !0;
      var h = e();
      return Oe = !1, z.memoizedState = [h, n], h;
    }
    function In(e) {
      j = Xe(), z = er();
      var t = z.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), z.memoizedState = n, n;
      } else
        return t;
    }
    function Cn(e, t) {
      lt = "useLayoutEffect", y("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Tn(e, t, n) {
      if (!(Ht < kn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === j) {
        Ut = !0;
        var o = {
          action: n,
          next: null
        };
        Le === null && (Le = /* @__PURE__ */ new Map());
        var s = Le.get(t);
        if (s === void 0)
          Le.set(t, o);
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
    function An(e, t, n) {
      return Xe(), t(e._source);
    }
    function Pn(e) {
      return Xe(), e;
    }
    function Mn() {
      Xe();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function _n() {
      return (ut.identifierPrefix || "") + "R:" + (ut.uniqueID++).toString(36);
    }
    function rr() {
    }
    var ut = null;
    function wr(e) {
      ut = e;
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
      useDeferredValue: Pn,
      useTransition: Mn,
      useOpaqueIdentifier: _n,
      // Subscriptions are not setup in a server environment.
      useMutableSource: An
    }, Wt = "http://www.w3.org/1999/xhtml", kr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: Wt,
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
          return Wt;
      }
    }
    function jn(e, t) {
      return e == null || e === Wt ? Sr(t) : e === nr && t === "foreignObject" ? Wt : e;
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
      zn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    function Un(e, t) {
      if (t) {
        if (Ln[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Nn in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    var Tt = {
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
    Object.keys(Tt).forEach(function(e) {
      Wn.forEach(function(t) {
        Tt[Hn(t, e)] = Tt[e];
      });
    });
    function Vn(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(Tt.hasOwnProperty(e) && Tt[e]) ? t + "px" : ("" + t).trim();
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
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Rr = /;\s*$/, ct = {}, sr = {}, Ir = !1, Cr = !1, Zn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Kn = function(e) {
        ct.hasOwnProperty(e) && ct[e] || (ct[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        ct.hasOwnProperty(e) && ct[e] || (ct[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jn = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Rr, "")));
      }, ei = function(e, t) {
        Ir || (Ir = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ti = function(e, t) {
        Cr || (Cr = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
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
    }, ft = {}, ni = new RegExp("^(aria)-[" + $e + "]*$"), ii = new RegExp("^(aria)[A-Z][" + $e + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(ft, t) && ft[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ft[t] = !0, !0;
          if (t !== o)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ft[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), h = Tr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return ft[t] = !0, !1;
          if (t !== h)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), ft[t] = !0, !0;
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
        n.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
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
        t != null && t.value === null && !Dr && (Dr = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ar = {
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
      var re = {}, ci = Object.prototype.hasOwnProperty, Mr = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + $e + "]*$"), pi = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      Pr = function(e, t, n, o) {
        if (ci.call(re, t) && re[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), re[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, g), re[t] = !0, !0;
          if (Mr.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), re[t] = !0, !0;
        } else if (Mr.test(t))
          return fi.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), re[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), re[t] = !0, !0;
        if (s === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), re[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), re[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), re[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === it;
        if (Ar.hasOwnProperty(s)) {
          var R = Ar[s];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), re[t] = !0, !0;
        } else if (!O && t !== s)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), re[t] = !0, !0;
        return typeof n == "boolean" && st(t, n, d, !1) ? (n ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), re[t] = !0, !0) : O ? !0 : st(t, n, d, !1) ? (re[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === ze && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), re[t] = !0), !0);
      };
    }
    var hi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var h = Pr(e, s, t[s], n);
          h || o.push(s);
        }
        var c = o.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        o.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function vi(e, t, n) {
      ar(e, t) || hi(e, t, n);
    }
    var Ne = u.Children.toArray, Pe = [], lr = I.ReactCurrentDispatcher, Vt, ur = null, _r = function() {
      return "";
    }, Fr = function(e) {
      return "";
    }, jr = function(e, t) {
    }, zr = function(e) {
    }, Lr = function(e) {
    }, Nr = function() {
    }, Ur = !1;
    Vt = I.ReactDebugCurrentFrame, jr = function(e, t) {
      li(e, t), ui(e, t), vi(e, t, null);
    }, Fr = function(e) {
      return Ae(e.type, e._source, null);
    }, zr = function(e) {
      Pe.push(e), Pe.length === 1 && (ur = Vt.getCurrentStack, Vt.getCurrentStack = _r);
    }, Lr = function(e) {
      var t = Pe[Pe.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Nr = function() {
      Pe.pop(), Pe.length === 0 && (Vt.getCurrentStack = ur, ur = null);
    }, _r = function() {
      if (Pe.length === 0)
        return "";
      for (var e = Pe[Pe.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += Fr(s[h]);
      return t;
    };
    var Hr = !1, Wr = !1, Vr = !1, qr = !1, Br = !1, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = {}, Qr = ["value", "defaultValue"], gi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, yi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Jr = {};
    function mi(e) {
      if (!Jr.hasOwnProperty(e)) {
        if (!yi.test(e))
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
        var n = e.constructor, o = n && q(n) || "ReactClass", s = o + "." + t;
        if (Yr[s])
          return;
        y(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

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
        return Ne(e);
      var t = e;
      if (t.type !== A)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return Ne(n);
      var o = n;
      return [o];
    }
    function Ei(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Br && typeof n != "string" && typeof n != "number" && (Br = !0, y("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Oi = Object.prototype.hasOwnProperty, Ri = "style", Ii = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ci(e, t, n, o, s, h) {
      var c = "<" + e, g = ar(t, n);
      for (var d in n)
        if (Oi.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Ri && (O = xi(O));
            var R = null;
            g ? Ii.hasOwnProperty(d) || (R = se(d, O)) : R = ae(d, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Ee()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error((q(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        h(o, s);
      }
      function h(c, g) {
        var d = wi(g), O = kt(g, t, n, d), R = [], $ = !1, J = {
          isMounted: function(We) {
            return !1;
          },
          enqueueForceUpdate: function(We) {
            if (R === null)
              return en(We, "forceUpdate"), null;
          },
          enqueueReplaceState: function(We, pt) {
            $ = !0, R = [pt];
          },
          enqueueSetState: function(We, pt) {
            if (R === null)
              return en(We, "setState"), null;
            R.push(pt);
          }
        }, w;
        if (d) {
          if (w = new g(c.props, O, J), typeof g.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var W = q(g) || "Unknown";
              Kr[W] || (y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", W, w.state === null ? "null" : "undefined", W), Kr[W] = !0);
            }
            var ne = g.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ne === void 0) {
              var le = q(g) || "Unknown";
              Zr[le] || (y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", le), Zr[le] = !0);
            }
            ne != null && (w.state = l({}, w.state, ne));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var ue = q(g) || "Unknown";
            $r[ue] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ue, ue), $r[ue] = !0);
          }
          var Ue = {};
          if (gr(Ue), w = g(c.props, O, J), w = yr(g, c.props, w, O), w != null && w.render != null) {
            var pe = q(g) || "Unknown";
            Xr[pe] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", pe, pe, pe), Xr[pe] = !0);
          }
          if (w == null || w.render == null) {
            e = w, tn(e, g);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = J;
        var ye = w.state;
        if (ye === void 0 && (w.state = ye = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var He = q(g) || "Unknown";
              Gr[He] || (L(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                He
              ), Gr[He] = !0);
            }
            typeof g.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof g.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var he = R, me = $;
            if (R = null, $ = !1, me && he.length === 1)
              w.state = he[0];
            else {
              for (var Re = me ? he[0] : w.state, qt = !0, dt = me ? 1 : 0; dt < he.length; dt++) {
                var be = he[dt], Dt = typeof be == "function" ? be.call(w, Re, c.props, O) : be;
                Dt != null && (qt ? (qt = !1, Re = l({}, Re, Dt)) : l(Re, Dt));
              }
              w.state = Re;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), tn(e, g);
        var Ge;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Ge = w.getChildContext();
              for (var Yt in Ge)
                if (!(Yt in Bt))
                  throw Error((q(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", q(g) || "Unknown");
          }
          Ge && (t = l({}, t, Ge));
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
          context: rt,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), St(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, h = o.type._context, c = this.threadID;
        Ye(h, c);
        var g = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = g, this.contextProviderStack[s] = o, h[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && y("Unexpected pop.");
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
        var s = ut;
        wr(this);
        var h = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], g = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, St(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (g || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === K) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === M) {
                this.suspenseDepth--;
                var $ = c.pop();
                if (g) {
                  g = !1;
                  var J = d.fallbackFrame;
                  if (!J)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(J), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += $;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var w = d.children[d.childIndex++], W = "";
            zr(this.stack), d.debugElementStack.length = 0;
            try {
              W += this.render(w, d.context, d.domNamespace);
            } catch (ne) {
              if (ne != null && typeof ne.then == "function") {
                if (!qe)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ne;
            } finally {
              Nr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += W;
          }
          return c[0];
        } finally {
          lr.current = h, wr(s), mr();
        }
      }, t.render = function(o, s, h) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? D(c) : this.previousWasTextNode ? "<!-- -->" + D(c) : (this.previousWasTextNode = !0, D(c));
        } else {
          var g, d = Ti(o, s, this.threadID);
          if (g = d.child, s = d.context, g === null || g === !1)
            return "";
          if (!u.isValidElement(g)) {
            if (g != null && g.$$typeof != null) {
              var O = g.$$typeof;
              throw Error(O === T ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Ne(g), $ = {
              type: null,
              domNamespace: h,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return $.debugElementStack = [], this.stack.push($), "";
          }
          var J = g, w = J.type;
          if (typeof w == "string")
            return this.renderDOM(J, s, h);
          switch (w) {
            case ve:
            case _e:
            case p:
            case P:
            case X:
            case A: {
              var W = Ne(g.props.children), ne = {
                type: null,
                domNamespace: h,
                children: W,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ne.debugElementStack = [], this.stack.push(ne), "";
            }
            case M:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Ve:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case xe: {
                var le = g, ue, Ue = {};
                gr(Ue), ue = w.render(le.props, le.ref), ue = yr(w.render, le.props, ue, le.ref), ue = Ne(ue);
                var pe = {
                  type: null,
                  domNamespace: h,
                  children: ue,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pe.debugElementStack = [], this.stack.push(pe), "";
              }
              case ie: {
                var ye = g, He = [u.createElement(w.type, l({
                  ref: ye.ref
                }, ye.props))], he = {
                  type: null,
                  domNamespace: h,
                  children: He,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case K: {
                var me = g, Re = me.props, qt = Ne(Re.children), dt = {
                  type: me,
                  domNamespace: h,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return dt.debugElementStack = [], this.pushProvider(me), this.stack.push(dt), "";
              }
              case V: {
                var be = g.type;
                be._context === void 0 ? be !== be.Consumer && (Ur || (Ur = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : be = be._context;
                var Dt = g.props, Ge = this.threadID;
                Ye(be, Ge);
                var Bt = be[Ge], Yt = Ne(Dt.children(Bt)), We = {
                  type: g,
                  domNamespace: h,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return We.debugElementStack = [], this.stack.push(We), "";
              }
              case Ie:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case ce: {
                var pt = g, nn = g.type, _i = nn._payload, Fi = nn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: pt.ref
                }, pt.props))], on = {
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
            var an = J._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? q(an) : null;
            sn && (fr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, h) {
        var c = o.type.toLowerCase(), g = h;
        h === ir.html && (g = Sr(c)), g === ir.html && c !== o.type && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
        var d = o.props;
        if (c === "input")
          or("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Wr && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Hr && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Hr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !qr && (y("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, $ = d.children;
            if ($ != null) {
              if (y("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray($)) {
                if (!($.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                $ = $[0];
              }
              R = "" + $;
            }
            R == null && (R = ""), O = R;
          }
          d = l({}, d, {
            value: void 0,
            children: "" + O
          });
        } else if (c === "select") {
          {
            or("select", d);
            for (var J = 0; J < Qr.length; J++) {
              var w = Qr[J];
              if (d[w] != null) {
                var W = Array.isArray(d[w]);
                d.multiple && !W ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && W && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ne = null, le = this.currentSelectValue, ue = Ei(d.children);
          if (le != null) {
            var Ue;
            if (d.value != null ? Ue = d.value + "" : Ue = ue, ne = !1, Array.isArray(le)) {
              for (var pe = 0; pe < le.length; pe++)
                if ("" + le[pe] === Ue) {
                  ne = !0;
                  break;
                }
            } else
              ne = "" + le === Ue;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ne,
              children: ue
            });
          }
        }
        jr(c, d), Un(c, d);
        var ye = Ci(o.type, c, d, g, this.makeStaticMarkup, this.stack.length === 1), He = "";
        Er.hasOwnProperty(c) ? ye += "/>" : (ye += ">", He = "</" + o.type + ">");
        var he, me = ki(d);
        me != null ? (he = [], gi.hasOwnProperty(c) && me.charAt(0) === `
` && (ye += `
`), ye += me) : he = Ne(d.children);
        var Re = {
          domNamespace: jn(h, o.type),
          type: c,
          children: he,
          childIndex: 0,
          context: s,
          footer: He
        };
        return Re.debugElementStack = [], this.stack.push(Re), this.previousWasTextNode = !1, ye;
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
    function Ai(e, t) {
      var n = new rn(e, !0, t);
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
    function Mi() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ke.renderToNodeStream = Pi, Ke.renderToStaticMarkup = Ai, Ke.renderToStaticNodeStream = Mi, Ke.renderToString = Di, Ke.version = E;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? hr.exports = Vi() : hr.exports = qi();
var Bi = hr.exports;
const Yi = /* @__PURE__ */ Wi(Bi);
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gn = Me.createContext && /* @__PURE__ */ Me.createContext(bn), $i = ["attr", "size", "title"];
function Xi(u, l) {
  if (u == null)
    return {};
  var v, E, I = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var L = Object.getOwnPropertySymbols(u);
    for (E = 0; E < L.length; E++)
      v = L[E], l.indexOf(v) === -1 && {}.propertyIsEnumerable.call(u, v) && (I[v] = u[v]);
  }
  return I;
}
function Gi(u, l) {
  if (u == null)
    return {};
  var v = {};
  for (var E in u)
    if ({}.hasOwnProperty.call(u, E)) {
      if (l.indexOf(E) !== -1)
        continue;
      v[E] = u[E];
    }
  return v;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var v = arguments[l];
      for (var E in v)
        ({}).hasOwnProperty.call(v, E) && (u[E] = v[E]);
    }
    return u;
  }, Xt.apply(null, arguments);
}
function yn(u, l) {
  var v = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(I) {
      return Object.getOwnPropertyDescriptor(u, I).enumerable;
    })), v.push.apply(v, E);
  }
  return v;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var v = arguments[l] != null ? arguments[l] : {};
    l % 2 ? yn(Object(v), !0).forEach(function(E) {
      Zi(u, E, v[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(v)) : yn(Object(v)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(v, E));
    });
  }
  return u;
}
function Zi(u, l, v) {
  return (l = Ki(l)) in u ? Object.defineProperty(u, l, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = v, u;
}
function Ki(u) {
  var l = Qi(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Qi(u, l) {
  if (typeof u != "object" || !u)
    return u;
  var v = u[Symbol.toPrimitive];
  if (v !== void 0) {
    var E = v.call(u, l || "default");
    if (typeof E != "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function xn(u) {
  return u && u.map((l, v) => /* @__PURE__ */ Me.createElement(l.tag, Gt({
    key: v
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Me.createElement(Ji, Xt({
    attr: Gt({}, u.attr)
  }, l), xn(u.child));
}
function Ji(u) {
  var l = (v) => {
    var {
      attr: E,
      size: I,
      title: L
    } = u, y = Xi(u, $i), C = I || v.size || "1em", T;
    return v.className && (T = v.className), u.className && (T = (T ? T + " " : "") + u.className), /* @__PURE__ */ Me.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, v.attr, E, y, {
      className: T,
      style: Gt(Gt({
        color: u.color || v.color
      }, v.style), u.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), L && /* @__PURE__ */ Me.createElement("title", null, L), u.children);
  };
  return gn !== void 0 ? /* @__PURE__ */ Me.createElement(gn.Consumer, null, (v) => l(v)) : l(bn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const oo = Li(
  ({ data: u, type: l, options: v = {}, height: E = 350, title: I }, L) => {
    const y = $t(null), C = $t(null), T = $t(null), A = $t(null), [p, P] = Ni(!1), K = ln(() => Yi.renderToString(
      /* @__PURE__ */ ht(
        eo,
        {
          size: 14,
          style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }
        }
      )
    ), []), V = ln(() => l || (Array.isArray(u[0]) ? u.map((M) => fn(M)) : fn(u)), [u, l]), xe = (M) => {
      var Ve, _e, ve, N;
      const X = Array.isArray(V) ? String(V[0]).toLowerCase() : String(V).toLowerCase();
      let ie = [], ce = [], F = [];
      if (Array.isArray(u[0]))
        ie = u.map((Ce, q) => {
          const qe = Array.isArray(l) && l[q] || (Array.isArray(V) ? V[q] : V), we = dn(qe, Ce);
          return {
            name: `Series ${q + 1}`,
            type: qe,
            ...we.series[0]
          };
        });
      else {
        const H = dn(V, u);
        ie = H.series, ce = H.labels, F = H.categories;
      }
      return {
        ...v,
        chart: {
          // CRITICAL: Unique IDs prevent internal event conflicts
          id: M ? "vizly-modal-chart" : "vizly-main-chart",
          type: X === "funnel" || X === "column" ? "bar" : X,
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
              customIcons: M ? [] : [
                {
                  icon: K,
                  index: 6,
                  title: "Expand",
                  class: "custom-icon",
                  click: () => P(!0)
                }
              ]
            }
          },
          animations: { enabled: !M },
          // Faster rendering in modal
          ...v.chart
        },
        title: {
          text: typeof I == "string" ? I : (I == null ? void 0 : I.text) || ((Ve = v.title) == null ? void 0 : Ve.text) || void 0,
          align: (typeof I == "object" ? I == null ? void 0 : I.align : (_e = v.title) == null ? void 0 : _e.align) || "left",
          style: { fontSize: "14px", fontWeight: "bold", ...(ve = v.title) == null ? void 0 : ve.style }
        },
        series: ie,
        labels: ce != null && ce.length ? ce : void 0,
        xaxis: F != null && F.length ? { ...v.xaxis, categories: F } : v.xaxis,
        plotOptions: {
          ...v.plotOptions,
          bar: {
            horizontal: X === "funnel" || X === "rangebar",
            isFunnel: X === "funnel",
            ...(N = v.plotOptions) == null ? void 0 : N.bar
          }
        },
        tooltip: { theme: "dark", ...v.tooltip }
      };
    };
    return un(() => {
      if (!y.current)
        return;
      const M = xe(!1);
      return T.current ? T.current.updateOptions(M) : (T.current = new cn(y.current, M), T.current.render()), () => {
        var X;
        (X = T.current) == null || X.destroy(), T.current = null;
      };
    }, [u, V, v, I, K]), un(() => {
      if (p && C.current) {
        const M = xe(!0), X = setTimeout(() => {
          A.current = new cn(C.current, M), A.current.render();
        }, 50);
        return () => {
          var ie;
          clearTimeout(X), (ie = A.current) == null || ie.destroy(), A.current = null;
        };
      }
    }, [p, u, V, v]), Ui(L, () => ({
      zoomIn: () => {
        var M;
        return (M = T.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var M;
        return (M = T.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      reset: () => {
        var M;
        return (M = T.current) == null ? void 0 : M.resetSeries();
      },
      toggleFullscreen: () => P(!p)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ ht("div", { ref: y, style: { height: "100%", width: "100%" } }),
      p && /* @__PURE__ */ dr("div", { style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999
        // Ensure it's above everything
      }, children: [
        /* @__PURE__ */ ht("style", { children: `
              .apexcharts-menu { 
                z-index: 100000 !important; 
                color: #333 !important;
              }
            ` }),
        /* @__PURE__ */ dr("div", { style: {
          width: "90%",
          maxWidth: "800px",
          height: "500px",
          background: "#fff",
          borderRadius: "12px",
          padding: "50px 20px 20px 20px",
          position: "relative",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }, children: [
          /* @__PURE__ */ ht(
            "button",
            {
              onClick: () => P(!1),
              style: {
                position: "absolute",
                top: 15,
                right: 20,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                zIndex: 10
              },
              children: /* @__PURE__ */ ht(to, { size: 20, color: "#333" })
            }
          ),
          /* @__PURE__ */ ht("div", { ref: C, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  oo as VizlyChart
};
