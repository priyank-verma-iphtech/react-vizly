import { jsx as vt, jsxs as dr } from "react/jsx-runtime";
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
  const y = l[0], T = Object.keys(y).filter((P) => typeof y[P] == "number"), D = Object.keys(y).find((P) => typeof y[P] == "string") || "x";
  switch (v) {
    case "circular":
      E = l.map((h) => Number(h.value ?? h.y ?? h[T[0]] ?? 0)), I = l.map((h) => String(h.label ?? h.category ?? h.name ?? h.x ?? "Unknown"));
      break;
    case "category":
      L = l.map((h) => String(h.x ?? h.category ?? h.stage ?? h[D] ?? "Unknown")), T.length > 0 ? E = T.map((h) => ({
        name: h,
        data: l.map((A) => A[h] ?? 0)
      })) : E = [{
        name: "Series 1",
        data: l.map((h) => h.y ?? h.value ?? 0)
      }];
      break;
    case "range":
      E = [{
        name: "Series 1",
        data: l.map((h) => {
          let A = [];
          return u === "boxplot" ? A = Array.isArray(h.y) ? h.y : [h.min, h.q1, h.median, h.q3, h.max] : u === "candlestick" ? A = Array.isArray(h.y) ? h.y : [h.open, h.high, h.low, h.close] : A = Array.isArray(h.y) ? h.y : [h.start, h.end], { x: h.x ?? h.label ?? h.category ?? h.date ?? "Unknown", y: A };
        })
      }];
      break;
    case "heatmap":
      const P = {};
      l.forEach((h) => {
        const A = h.group ?? "Series 1";
        P[A] || (P[A] = []), P[A].push({ x: String(h.x ?? h.category ?? "Unknown"), y: h.value ?? h.y ?? 0 });
      }), E = Object.keys(P).map((h) => ({ name: h, data: P[h] }));
      break;
    default:
      u === "bubble" ? E = [{
        name: "Series 1",
        data: l.map((h) => ({ x: h.x ?? 0, y: h.y ?? 0, z: h.r ?? h.z ?? h.value ?? 0 }))
      }] : E = T.map((h) => ({
        name: h,
        data: l.map((A) => ({ x: A.x ?? A[D], y: A[h] ?? 0 }))
      }));
  }
  return { series: E, labels: I, categories: L };
};
function Wi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var hr = { exports: {} }, Ke = {};
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
      for (var y = {}, T = 0; T < 10; T++)
        y["_" + String.fromCharCode(T)] = T;
      var D = Object.getOwnPropertyNames(y).map(function(h) {
        return y[h];
      });
      if (D.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        P[h] = h;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = I() ? Object.assign : function(L, y) {
    for (var T, D = E(L), P, h = 1; h < arguments.length; h++) {
      T = Object(arguments[h]);
      for (var A in T)
        l.call(T, A) && (D[A] = T[A]);
      if (u) {
        P = u(T);
        for (var K = 0; K < P.length; K++)
          v.call(T, P[K]) && (D[P[K]] = T[P[K]]);
      }
    }
    return D;
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
    return Ke;
  hn = 1;
  var u = mn(), l = Me;
  function v(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, I = 60107, L = 60108, y = 60114, T = 60109, D = 60110, P = 60112, h = 60113, A = 60120, K = 60115, J = 60116, ke = 60121, M = 60117, ce = 60119, q = 60129, ge = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var _ = Symbol.for;
    E = _("react.portal"), I = _("react.fragment"), L = _("react.strict_mode"), y = _("react.profiler"), T = _("react.provider"), D = _("react.context"), P = _("react.forward_ref"), h = _("react.suspense"), A = _("react.suspense_list"), K = _("react.memo"), J = _("react.lazy"), ke = _("react.block"), M = _("react.fundamental"), ce = _("react.scope"), q = _("react.debug_trace_mode"), ge = _("react.legacy_hidden");
  }
  function $(r) {
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
      case h:
        return "Suspense";
      case A:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case D:
          return (r.displayName || "Context") + ".Consumer";
        case T:
          return (r._context.displayName || "Context") + ".Provider";
        case P:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case K:
          return $(r.type);
        case ke:
          return $(r._render);
        case J:
          a = r._payload, r = r._init;
          try {
            return $(r(a));
          } catch {
          }
      }
    return null;
  }
  var Ve = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = {};
  function ye(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function N(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ye(f, i), f[i];
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
  var X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qe = Object.prototype.hasOwnProperty, pe = {}, Be = {};
  function gt(r) {
    return qe.call(Be, r) ? !0 : qe.call(pe, r) ? !1 : X.test(r) ? Be[r] = !0 : (pe[r] = !0, !1);
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
  function Q(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    B[r] = new Q(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    B[a] = new Q(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    B[r] = new Q(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    B[r] = new Q(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    B[r] = new Q(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    B[r] = new Q(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    B[r] = new Q(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    B[r] = new Q(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    B[r] = new Q(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Je = /[\-:]([a-z])/g;
  function et(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Je,
      et
    );
    B[a] = new Q(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Je, et);
    B[a] = new Q(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Je, et);
    B[a] = new Q(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    B[r] = new Q(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    B[r] = new Q(r, 1, !1, r.toLowerCase(), null, !0, !0);
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
    var i = B.hasOwnProperty(r) ? B[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || At(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Te(a) + '"'))) : gt(r) ? r + '="' + (Te(a) + '"') : "";
  }
  function mt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var tt = typeof Object.is == "function" ? Object.is : mt, oe = null, De = null, F = null, Fe = !1, Ye = !1, Se = null, Pe = 0;
  function Ee() {
    if (oe === null)
      throw Error(v(321));
    return oe;
  }
  function bt() {
    if (0 < Pe)
      throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function je() {
    return F === null ? De === null ? (Fe = !1, De = F = bt()) : (Fe = !0, F = De) : F.next === null ? (Fe = !1, F = F.next = bt()) : (Fe = !0, F = F.next), F;
  }
  function Mt(r, a, i, f) {
    for (; Ye; )
      Ye = !1, Pe += 1, F = null, i = r(a, f);
    return rt(), i;
  }
  function rt() {
    oe = null, Ye = !1, De = null, Pe = 0, F = Se = null;
  }
  function nt(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function xt(r, a, i) {
    if (oe = Ee(), F = je(), Fe) {
      var f = F.queue;
      if (a = f.dispatch, Se !== null && (i = Se.get(f), i !== void 0)) {
        Se.delete(f), f = F.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return F.memoizedState = f, [f, a];
      }
      return [F.memoizedState, a];
    }
    return r = r === nt ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, F.memoizedState = r, r = F.queue = { last: null, dispatch: null }, r = r.dispatch = $e.bind(null, oe, r), [F.memoizedState, r];
  }
  function wt(r, a) {
    if (oe = Ee(), F = je(), a = a === void 0 ? null : a, F !== null) {
      var i = F.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!tt(a[k], f[k])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), F.memoizedState = [r, a], r;
  }
  function $e(r, a, i) {
    if (!(25 > Pe))
      throw Error(v(301));
    if (r === oe)
      if (Ye = !0, r = { action: i, next: null }, Se === null && (Se = /* @__PURE__ */ new Map()), i = Se.get(a), i === void 0)
        Se.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function kt() {
  }
  var V = null, it = { readContext: function(r) {
    var a = V.threadID;
    return ye(r, a), r[a];
  }, useContext: function(r) {
    Ee();
    var a = V.threadID;
    return ye(r, a), r[a];
  }, useMemo: wt, useReducer: xt, useRef: function(r) {
    oe = Ee(), F = je();
    var a = F.memoizedState;
    return a === null ? (r = { current: r }, F.memoizedState = r) : a;
  }, useState: function(r) {
    return xt(nt, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return wt(function() {
      return r;
    }, a);
  }, useImperativeHandle: kt, useEffect: kt, useDebugValue: kt, useDeferredValue: function(r) {
    return Ee(), r;
  }, useTransition: function() {
    return Ee(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (V.identifierPrefix || "") + "R:" + (V.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return Ee(), a(r._source);
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
  var St = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, ot = u({ menuitem: !0 }, St), fe = {
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
  var ze = /([A-Z])/g, at = /^ms-/, me = l.Children.toArray, st = Ve.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, Xe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, Ot = {};
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
      throw Error(v(152, $(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, te = N(S, a, i, m), G = [], re = !1, U = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (G === null)
          return null;
      }, enqueueReplaceState: function(It, j) {
        re = !0, G = [j];
      }, enqueueSetState: function(It, j) {
        if (G === null)
          return null;
        G.push(j);
      } };
      if (m) {
        if (m = new S(b.props, te, U), typeof S.getDerivedStateFromProps == "function") {
          var C = S.getDerivedStateFromProps.call(null, b.props, m.state);
          C != null && (m.state = u({}, m.state, C));
        }
      } else if (oe = {}, m = S(
        b.props,
        te,
        U
      ), m = Mt(S, b.props, m, te), m == null || m.render == null) {
        r = m, Rt(r, S);
        return;
      }
      if (m.props = b.props, m.context = te, m.updater = U, U = m.state, U === void 0 && (m.state = U = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), G.length) {
          U = G;
          var Z = re;
          if (G = null, re = !1, Z && U.length === 1)
            m.state = U[0];
          else {
            C = Z ? U[0] : m.state;
            var Oe = !0;
            for (Z = Z ? 1 : 0; Z < U.length; Z++) {
              var ae = U[Z];
              ae = typeof ae == "function" ? ae.call(m, C, b.props, te) : ae, ae != null && (Oe ? (Oe = !1, C = u({}, C, ae)) : u(C, ae));
            }
            m.state = C;
          }
        } else
          G = null;
      if (r = m.render(), Rt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var se = m.getChildContext();
        for (var de in se)
          if (!(de in b))
            throw Error(v(108, $(S) || "Unknown", de));
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
  var lt = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== I ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : me(i)) : i = me(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: _e, footer: "" };
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
      ye(k, x);
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
      var f = V;
      V = this;
      var k = st.current;
      st.current = it;
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
            var te = m.footer;
            if (te !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === T)
              this.popProvider(m.type);
            else if (m.type === h) {
              this.suspenseDepth--;
              var G = x.pop();
              if (b) {
                b = !1;
                var re = m.fallbackFrame;
                if (!re)
                  throw Error(v(303));
                this.stack.push(re), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += G;
            }
            x[this.suspenseDepth] += te;
          } else {
            var U = m.children[m.childIndex++], C = "";
            try {
              C += this.render(U, m.context, m.domNamespace);
            } catch (Z) {
              throw Z != null && typeof Z.then == "function" ? Error(v(294)) : Z;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += C;
          }
        }
        return x[0];
      } finally {
        st.current = k, V = f, rt();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Te(k) : this.previousWasTextNode ? "<!-- -->" + Te(k) : (this.previousWasTextNode = !0, Te(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? v(257) : v(258, k.toString()));
        return i = me(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, f, k);
      switch (x) {
        case ge:
        case q:
        case L:
        case y:
        case A:
        case I:
          return i = me(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case h:
          throw Error(v(294));
        case ce:
          throw Error(v(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case P:
            oe = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = me(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case K:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case T:
            return x = me(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case D:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ye(x, S), x = me(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case M:
            throw Error(v(338));
          case J:
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
        if (!Xe.test(x))
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
        var te = jt(b.children);
        if (m != null) {
          var G = b.value != null ? b.value + "" : te;
          if (S = !1, Array.isArray(m)) {
            for (var re = 0; re < m.length; re++)
              if ("" + m[re] === G) {
                S = !0;
                break;
              }
          } else
            S = "" + m === G;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: te }
          );
        }
      }
      if (S = b) {
        if (ot[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, m = this.makeStaticMarkup, te = this.stack.length === 1, G = "<" + i.type;
      e:
        if (x.indexOf("-") === -1)
          re = typeof S.is == "string";
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
              re = !1;
              break e;
            default:
              re = !0;
          }
      for (j in S)
        if (zt.call(S, j)) {
          var U = S[j];
          if (U != null) {
            if (j === "style") {
              var C = void 0, Z = "", Oe = "";
              for (C in U)
                if (U.hasOwnProperty(C)) {
                  var ae = C.indexOf("--") === 0, se = U[C];
                  if (se != null) {
                    if (ae)
                      var de = C;
                    else if (de = C, Ot.hasOwnProperty(de))
                      de = Ot[de];
                    else {
                      var It = de.replace(ze, "-$1").toLowerCase().replace(at, "-ms-");
                      de = Ot[de] = It;
                    }
                    Z += Oe + de + ":", Oe = C, ae = se == null || typeof se == "boolean" || se === "" ? "" : ae || typeof se != "number" || se === 0 || fe.hasOwnProperty(Oe) && fe[Oe] ? ("" + se).trim() : se + "px", Z += ae, Oe = ";";
                  }
                }
              U = Z || null;
            }
            C = null, re ? Lt.hasOwnProperty(j) || (C = j, C = gt(C) && U != null ? C + '="' + (Te(U) + '"') : "") : C = yt(j, U), C && (G += " " + C);
          }
        }
      m || te && (G += ' data-reactroot=""');
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
`), j += m) : b = me(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, j;
    }, r;
  }();
  return Ke.renderToNodeStream = function() {
    throw Error(v(207));
  }, Ke.renderToStaticMarkup = function(r, a) {
    r = new lt(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ke.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Ke.renderToString = function(r, a) {
    r = new lt(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ke.version = "17.0.2", Ke;
}
var Qe = {};
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
        T("warn", e, n);
      }
    }
    function y(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        T("error", e, n);
      }
    }
    function T(e, t, n) {
      {
        var o = I.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var p = n.map(function(c) {
          return "" + c;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var D = 60106, P = 60107, h = 60108, A = 60114, K = 60109, J = 60110, ke = 60112, M = 60113, ce = 60120, q = 60115, ge = 60116, _ = 60121, $ = 60117, Ve = 60119, _e = 60129, ye = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var N = Symbol.for;
      N("react.element"), D = N("react.portal"), P = N("react.fragment"), h = N("react.strict_mode"), A = N("react.profiler"), K = N("react.provider"), J = N("react.context"), ke = N("react.forward_ref"), M = N("react.suspense"), ce = N("react.suspense_list"), q = N("react.memo"), ge = N("react.lazy"), _ = N("react.block"), N("react.server.block"), $ = N("react.fundamental"), Ve = N("react.scope"), N("react.opaque.id"), _e = N("react.debug_trace_mode"), N("react.offscreen"), ye = N("react.legacy_hidden");
    }
    function H(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Ce(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case P:
          return "Fragment";
        case D:
          return "Portal";
        case A:
          return "Profiler";
        case h:
          return "StrictMode";
        case M:
          return "Suspense";
        case ce:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            var t = e;
            return Ce(t) + ".Consumer";
          case K:
            var n = e;
            return Ce(n._context) + ".Provider";
          case ke:
            return H(e, e.render, "ForwardRef");
          case q:
            return X(e.type);
          case _:
            return X(e._render);
          case ge: {
            var o = e, s = o._payload, p = o._init;
            try {
              return X(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = !1, pe = 0, Be, gt, Pt, At, Q, B, Je;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function Zt() {
      {
        if (pe === 0) {
          Be = console.log, gt = console.info, Pt = console.warn, At = console.error, Q = console.group, B = console.groupCollapsed, Je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
        pe++;
      }
    }
    function Te() {
      {
        if (pe--, pe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: Be
            }),
            info: l({}, e, {
              value: gt
            }),
            warn: l({}, e, {
              value: Pt
            }),
            error: l({}, e, {
              value: At
            }),
            group: l({}, e, {
              value: Q
            }),
            groupCollapsed: l({}, e, {
              value: B
            }),
            groupEnd: l({}, e, {
              value: Je
            })
          });
        }
        pe < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = I.ReactCurrentDispatcher, mt;
    function tt(e, t, n) {
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
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      De = new F();
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
      var p;
      p = yt.current, yt.current = null, Zt();
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
                    var Y = `
` + g[O].replace(" at new ", " at ");
                    return typeof e == "function" && De.set(e, Y), Y;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, yt.current = p, Te(), Error.prepareStackTrace = s;
      }
      var ee = e ? e.displayName || e.name : "", w = ee ? tt(ee) : "";
      return typeof e == "function" && De.set(e, w), w;
    }
    function Ye(e, t, n) {
      return Fe(e, !1);
    }
    function Se(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pe(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, Se(e));
      if (typeof e == "string")
        return tt(e);
      switch (e) {
        case M:
          return tt("Suspense");
        case ce:
          return tt("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ke:
            return Ye(e.render);
          case q:
            return Pe(e.type, t, n);
          case _:
            return Ye(e._render);
          case ge: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Pe(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = {}, bt = I.ReactDebugCurrentFrame;
    function je(e) {
      if (e) {
        var t = e._owner, n = Pe(e.type, e._source, t ? t.type : null);
        bt.setExtraStackFrame(n);
      } else
        bt.setExtraStackFrame(null);
    }
    function Mt(e, t, n, o, s) {
      {
        var p = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (p(e, c)) {
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
            g && !(g instanceof Error) && (je(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof g), je(null)), g instanceof Error && !(g.message in Ee) && (Ee[g.message] = !0, je(s), y("Failed %s type: %s", n, g.message), je(null));
          }
      }
    }
    var rt;
    rt = /* @__PURE__ */ new Set();
    var nt = {};
    Object.freeze(nt);
    function xt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return nt;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function wt(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function $e(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function kt(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === J && s._context === void 0
          );
          if (!p && !rt.has(e)) {
            rt.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === K ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", X(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return $e(s, n), s[n];
        {
          var g = xt(e, t);
          return e.contextTypes && wt(e.contextTypes, g, "context"), g;
        }
      } else {
        var d = xt(e, t);
        return e.contextTypes && wt(e.contextTypes, d, "context"), d;
      }
    }
    for (var V = new Uint16Array(16), it = 0; it < 15; it++)
      V[it] = it + 1;
    V[15] = 0;
    function Kt() {
      var e = V, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), V = o, V[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        V[s] = s + 1;
      return V[n - 1] = 0, t;
    }
    function Qt() {
      var e = V[0];
      return e === 0 ? Kt() : (V[0] = V[e], e);
    }
    function St(e) {
      V[e] = V[0], V[0] = e;
    }
    var ot = 0, fe = 1, Et = 2, ze = 3, at = 4, me = 5, st = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Xe = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Ot = new RegExp("^[" + _t + "][" + Xe + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Rt(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : Ot.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === ot : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function lt(e, t, n, o) {
      if (n !== null && n.type === ot)
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
      if (t === null || typeof t > "u" || lt(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case ze:
            return !t;
          case at:
            return t === !1;
          case me:
            return isNaN(t);
          case st:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, p, c) {
      this.acceptsBooleans = t === Et || t === ze || t === at, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
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
        st,
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
        me,
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
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, te = !1;
    function G(e) {
      !te && m.test(e) && (te = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var re = /["'&<>]/;
    function U(e) {
      var t = "" + e, n = re.exec(t);
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
    function C(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : U(e);
    }
    function Z(e) {
      return '"' + C(e) + '"';
    }
    function Oe() {
      return Ft + '=""';
    }
    function ae(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === ze || s === at && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, G(t)), o + "=" + Z(t));
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
    var It = typeof Object.is == "function" ? Object.is : de, j = null, Nt = null, z = null, Ct = !1, Ut = !1, Le = null, Ht = 0, kn = 25, Re = !1, ut;
    function Ge() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Re && y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ut), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ut, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
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
      j = e, Re = !1;
    }
    function yr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Ht += 1, z = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Re = !1, j = null, Ut = !1, Nt = null, Ht = 0, Le = null, z = null;
    }
    function En(e, t) {
      var n = ct.threadID;
      return $e(e, n), Re && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      ut = "useContext", Ge();
      var n = ct.threadID;
      return $e(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return ut = "useState", br(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function br(e, t, n) {
      if (e !== tr && (ut = "useReducer"), j = Ge(), z = er(), Ct) {
        var o = z.queue, s = o.dispatch;
        if (Le !== null) {
          var p = Le.get(o);
          if (p !== void 0) {
            Le.delete(o);
            var c = z.memoizedState, g = p;
            do {
              var d = g.action;
              Re = !0, c = e(c, d), Re = !1, g = g.next;
            } while (g !== null);
            return z.memoizedState = c, [c, s];
          }
        }
        return [z.memoizedState, s];
      } else {
        Re = !0;
        var O;
        e === tr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Re = !1, z.memoizedState = O;
        var R = z.queue = {
          last: null,
          dispatch: null
        }, Y = R.dispatch = Tn.bind(null, j, R);
        return [z.memoizedState, Y];
      }
    }
    function xr(e, t) {
      j = Ge(), z = er();
      var n = t === void 0 ? null : t;
      if (z !== null) {
        var o = z.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Sn(n, s))
            return o[0];
        }
      }
      Re = !0;
      var p = e();
      return Re = !1, z.memoizedState = [p, n], p;
    }
    function In(e) {
      j = Ge(), z = er();
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
      ut = "useLayoutEffect", y("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
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
          for (var p = s; p.next !== null; )
            p = p.next;
          p.next = o;
        }
      }
    }
    function Dn(e, t) {
      return xr(function() {
        return e;
      }, t);
    }
    function Pn(e, t, n) {
      return Ge(), t(e._source);
    }
    function An(e) {
      return Ge(), e;
    }
    function Mn() {
      Ge();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function _n() {
      return (ct.identifierPrefix || "") + "R:" + (ct.uniqueID++).toString(36);
    }
    function rr() {
    }
    var ct = null;
    function wr(e) {
      ct = e;
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
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Rr = /;\s*$/, ft = {}, sr = {}, Ir = !1, Cr = !1, Zn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Kn = function(e) {
        ft.hasOwnProperty(e) && ft[e] || (ft[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        ft.hasOwnProperty(e) && ft[e] || (ft[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
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
    }, dt = {}, ni = new RegExp("^(aria)-[" + Xe + "]*$"), ii = new RegExp("^(aria)[A-Z][" + Xe + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(dt, t) && dt[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), dt[t] = !0, !0;
          if (t !== o)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), dt[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), p = Tr.hasOwnProperty(s) ? s : null;
          if (p == null)
            return dt[t] = !0, !1;
          if (t !== p)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), dt[t] = !0, !0;
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
        var p = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : n.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
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
      var ne = {}, ci = Object.prototype.hasOwnProperty, Mr = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + Xe + "]*$"), pi = new RegExp("^(aria)[A-Z][" + Xe + "]*$");
      Ar = function(e, t, n, o) {
        if (ci.call(ne, t) && ne[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ne[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, g), ne[t] = !0, !0;
          if (Mr.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), ne[t] = !0, !0;
        } else if (Mr.test(t))
          return fi.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ne[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ne[t] = !0, !0;
        if (s === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ne[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ne[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ne[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === ot;
        if (Pr.hasOwnProperty(s)) {
          var R = Pr[s];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ne[t] = !0, !0;
        } else if (!O && t !== s)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), ne[t] = !0, !0;
        return typeof n == "boolean" && lt(t, n, d, !1) ? (n ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ne[t] = !0, !0) : O ? !0 : lt(t, n, d, !1) ? (ne[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === ze && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ne[t] = !0), !0);
      };
    }
    var hi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var p = Ar(e, s, t[s], n);
          p || o.push(s);
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
    var Ne = u.Children.toArray, Ae = [], lr = I.ReactCurrentDispatcher, Vt, ur = null, _r = function() {
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
      return Pe(e.type, e._source, null);
    }, zr = function(e) {
      Ae.push(e), Ae.length === 1 && (ur = Vt.getCurrentStack, Vt.getCurrentStack = _r);
    }, Lr = function(e) {
      var t = Ae[Ae.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Nr = function() {
      Ae.pop(), Ae.length === 0 && (Vt.getCurrentStack = ur, ur = null);
    }, _r = function() {
      if (Ae.length === 0)
        return "";
      for (var e = Ae[Ae.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, p = s.length - 1; p >= 0; p--)
          t += Fr(s[p]);
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
          var s = o.indexOf("--") === 0, p = e[o];
          s || ri(o, p), p != null && (t += n + (s ? o : bi(o)) + ":", t += Vn(o, p, s), n = ";");
        }
      return t || null;
    }
    function en(e, t) {
      {
        var n = e.constructor, o = n && X(n) || "ReactClass", s = o + "." + t;
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
          return C(n);
      }
      return null;
    }
    function Si(e) {
      if (!u.isValidElement(e))
        return Ne(e);
      var t = e;
      if (t.type !== P)
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
    function Ci(e, t, n, o, s, p) {
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
      return s || p && (c += " " + Oe()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error((X(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, g) {
        var d = wi(g), O = kt(g, t, n, d), R = [], Y = !1, ee = {
          isMounted: function(We) {
            return !1;
          },
          enqueueForceUpdate: function(We) {
            if (R === null)
              return en(We, "forceUpdate"), null;
          },
          enqueueReplaceState: function(We, ht) {
            Y = !0, R = [ht];
          },
          enqueueSetState: function(We, ht) {
            if (R === null)
              return en(We, "setState"), null;
            R.push(ht);
          }
        }, w;
        if (d) {
          if (w = new g(c.props, O, ee), typeof g.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var W = X(g) || "Unknown";
              Kr[W] || (y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", W, w.state === null ? "null" : "undefined", W), Kr[W] = !0);
            }
            var ie = g.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ie === void 0) {
              var le = X(g) || "Unknown";
              Zr[le] || (y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", le), Zr[le] = !0);
            }
            ie != null && (w.state = l({}, w.state, ie));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var ue = X(g) || "Unknown";
            $r[ue] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ue, ue), $r[ue] = !0);
          }
          var Ue = {};
          if (gr(Ue), w = g(c.props, O, ee), w = yr(g, c.props, w, O), w != null && w.render != null) {
            var he = X(g) || "Unknown";
            Xr[he] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", he, he, he), Xr[he] = !0);
          }
          if (w == null || w.render == null) {
            e = w, tn(e, g);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = ee;
        var be = w.state;
        if (be === void 0 && (w.state = be = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var He = X(g) || "Unknown";
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
            var ve = R, xe = Y;
            if (R = null, Y = !1, xe && ve.length === 1)
              w.state = ve[0];
            else {
              for (var Ie = xe ? ve[0] : w.state, qt = !0, pt = xe ? 1 : 0; pt < ve.length; pt++) {
                var we = ve[pt], Dt = typeof we == "function" ? we.call(w, Ie, c.props, O) : we;
                Dt != null && (qt ? (qt = !1, Ie = l({}, Ie, Dt)) : l(Ie, Dt));
              }
              w.state = Ie;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), tn(e, g);
        var Ze;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Ze = w.getChildContext();
              for (var Yt in Ze)
                if (!(Yt in Bt))
                  throw Error((X(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", X(g) || "Unknown");
          }
          Ze && (t = l({}, t, Ze));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var rn = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var p = Si(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: ir.html,
          children: p,
          childIndex: 0,
          context: nt,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), St(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, p = o.type._context, c = this.threadID;
        $e(p, c);
        var g = p[c];
        this.contextStack[s] = p, this.contextValueStack[s] = g, this.contextProviderStack[s] = o, p[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && y("Unexpected pop.");
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
        var s = ct;
        wr(this);
        var p = lr.current;
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
                var Y = c.pop();
                if (g) {
                  g = !1;
                  var ee = d.fallbackFrame;
                  if (!ee)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(ee), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += Y;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var w = d.children[d.childIndex++], W = "";
            zr(this.stack), d.debugElementStack.length = 0;
            try {
              W += this.render(w, d.context, d.domNamespace);
            } catch (ie) {
              if (ie != null && typeof ie.then == "function") {
                if (!qe)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ie;
            } finally {
              Nr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += W;
          }
          return c[0];
        } finally {
          lr.current = p, wr(s), mr();
        }
      }, t.render = function(o, s, p) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? C(c) : this.previousWasTextNode ? "<!-- -->" + C(c) : (this.previousWasTextNode = !0, C(c));
        } else {
          var g, d = Ti(o, s, this.threadID);
          if (g = d.child, s = d.context, g === null || g === !1)
            return "";
          if (!u.isValidElement(g)) {
            if (g != null && g.$$typeof != null) {
              var O = g.$$typeof;
              throw Error(O === D ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Ne(g), Y = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return Y.debugElementStack = [], this.stack.push(Y), "";
          }
          var ee = g, w = ee.type;
          if (typeof w == "string")
            return this.renderDOM(ee, s, p);
          switch (w) {
            case ye:
            case _e:
            case h:
            case A:
            case ce:
            case P: {
              var W = Ne(g.props.children), ie = {
                type: null,
                domNamespace: p,
                children: W,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ie.debugElementStack = [], this.stack.push(ie), "";
            }
            case M:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Ve:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case ke: {
                var le = g, ue, Ue = {};
                gr(Ue), ue = w.render(le.props, le.ref), ue = yr(w.render, le.props, ue, le.ref), ue = Ne(ue);
                var he = {
                  type: null,
                  domNamespace: p,
                  children: ue,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case q: {
                var be = g, He = [u.createElement(w.type, l({
                  ref: be.ref
                }, be.props))], ve = {
                  type: null,
                  domNamespace: p,
                  children: He,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ve.debugElementStack = [], this.stack.push(ve), "";
              }
              case K: {
                var xe = g, Ie = xe.props, qt = Ne(Ie.children), pt = {
                  type: xe,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pt.debugElementStack = [], this.pushProvider(xe), this.stack.push(pt), "";
              }
              case J: {
                var we = g.type;
                we._context === void 0 ? we !== we.Consumer && (Ur || (Ur = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : we = we._context;
                var Dt = g.props, Ze = this.threadID;
                $e(we, Ze);
                var Bt = we[Ze], Yt = Ne(Dt.children(Bt)), We = {
                  type: g,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return We.debugElementStack = [], this.stack.push(We), "";
              }
              case $:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case ge: {
                var ht = g, nn = g.type, _i = nn._payload, Fi = nn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: ht.ref
                }, ht.props))], on = {
                  type: null,
                  domNamespace: p,
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
            var an = ee._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? X(an) : null;
            sn && (fr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), g = p;
        p === ir.html && (g = Sr(c)), g === ir.html && c !== o.type && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
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
            var R = d.defaultValue, Y = d.children;
            if (Y != null) {
              if (y("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
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
          d = l({}, d, {
            value: void 0,
            children: "" + O
          });
        } else if (c === "select") {
          {
            or("select", d);
            for (var ee = 0; ee < Qr.length; ee++) {
              var w = Qr[ee];
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
          var ie = null, le = this.currentSelectValue, ue = Ei(d.children);
          if (le != null) {
            var Ue;
            if (d.value != null ? Ue = d.value + "" : Ue = ue, ie = !1, Array.isArray(le)) {
              for (var he = 0; he < le.length; he++)
                if ("" + le[he] === Ue) {
                  ie = !0;
                  break;
                }
            } else
              ie = "" + le === Ue;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ie,
              children: ue
            });
          }
        }
        jr(c, d), Un(c, d);
        var be = Ci(o.type, c, d, g, this.makeStaticMarkup, this.stack.length === 1), He = "";
        Er.hasOwnProperty(c) ? be += "/>" : (be += ">", He = "</" + o.type + ">");
        var ve, xe = ki(d);
        xe != null ? (ve = [], gi.hasOwnProperty(c) && xe.charAt(0) === `
` && (be += `
`), be += xe) : ve = Ne(d.children);
        var Ie = {
          domNamespace: jn(p, o.type),
          type: c,
          children: ve,
          childIndex: 0,
          context: s,
          footer: He
        };
        return Ie.debugElementStack = [], this.stack.push(Ie), this.previousWasTextNode = !1, be;
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
    Qe.renderToNodeStream = Ai, Qe.renderToStaticMarkup = Pi, Qe.renderToStaticNodeStream = Mi, Qe.renderToString = Di, Qe.version = E;
  }()), Qe;
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
    } = u, y = Xi(u, $i), T = I || v.size || "1em", D;
    return v.className && (D = v.className), u.className && (D = (D ? D + " " : "") + u.className), /* @__PURE__ */ Me.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, v.attr, E, y, {
      className: D,
      style: Gt(Gt({
        color: u.color || v.color
      }, v.style), u.style),
      height: T,
      width: T,
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
    const y = $t(null), T = $t(null), D = $t(null), P = $t(null), [h, A] = Ni(!1), K = ln(() => Yi.renderToString(
      /* @__PURE__ */ vt(
        eo,
        {
          size: 14,
          style: { color: "#9ca3af", marginTop: "5px", marginLeft: "2px" }
        }
      )
    ), []), J = ln(() => l || (Array.isArray(u[0]) ? u.map((M) => fn(M)) : fn(u)), [u, l]), ke = (M) => {
      var Ve, _e, ye, N;
      const q = (Array.isArray(J) ? String(J[0]) : String(J)).toLowerCase();
      let ge = [], _ = [], $ = [];
      if (Array.isArray(u[0]))
        u.forEach((Ce, X) => {
          const qe = Array.isArray(l) ? l[X] : Array.isArray(J) ? J[X] : J, pe = dn(qe, Ce);
          $.length === 0 && ($ = pe.categories), _.length === 0 && (_ = pe.labels), pe.series.forEach((Be) => {
            ge.push({ ...Be, type: qe });
          });
        });
      else {
        const H = dn(q, u);
        ge = H.series, _ = H.labels, $ = H.categories;
      }
      return {
        ...v,
        chart: {
          id: M ? "vizly-modal-chart" : "vizly-main-chart",
          // Funnel and Column are essentially 'bar' types in Apex
          type: q === "funnel" || q === "column" || q === "bar" ? "bar" : q === "radar" ? "radar" : q,
          height: "100%",
          toolbar: {
            show: !0,
            tools: {
              customIcons: M ? [] : [{
                icon: K,
                index: 6,
                class: "custom-icon",
                click: () => A(!0)
              }]
            }
          },
          animations: { enabled: !M },
          ...v.chart
        },
        series: ge,
        labels: _ != null && _.length ? _ : void 0,
        xaxis: {
          // IMPORTANT: Explicitly set type to category for Bar/Column/Radar
          type: $ != null && $.length ? "category" : ((Ve = v.xaxis) == null ? void 0 : Ve.type) || "numeric",
          categories: $ != null && $.length ? $ : void 0,
          ...v.xaxis
        },
        plotOptions: {
          ...v.plotOptions,
          bar: {
            horizontal: q === "funnel" || q === "bar",
            // Funnel must be horizontal
            isFunnel: q === "funnel",
            columnWidth: "70%",
            ...(_e = v.plotOptions) == null ? void 0 : _e.bar
          }
        },
        title: {
          text: typeof I == "string" ? I : (I == null ? void 0 : I.text) || ((ye = v.title) == null ? void 0 : ye.text),
          align: (typeof I == "object" ? I == null ? void 0 : I.align : (N = v.title) == null ? void 0 : N.align) || "left"
        },
        tooltip: { theme: "dark", ...v.tooltip }
      };
    };
    return un(() => {
      if (!y.current)
        return;
      const M = ke(!1);
      return D.current ? D.current.updateOptions(M) : (D.current = new cn(y.current, M), D.current.render()), () => {
        var ce;
        (ce = D.current) == null || ce.destroy(), D.current = null;
      };
    }, [u, J, v, I, K]), un(() => {
      if (h && T.current) {
        const M = ke(!0), ce = setTimeout(() => {
          P.current = new cn(T.current, M), P.current.render();
        }, 50);
        return () => {
          var q;
          clearTimeout(ce), (q = P.current) == null || q.destroy(), P.current = null;
        };
      }
    }, [h, u, J, v]), Ui(L, () => ({
      zoomIn: () => {
        var M;
        return (M = D.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var M;
        return (M = D.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      reset: () => {
        var M;
        return (M = D.current) == null ? void 0 : M.resetSeries();
      },
      toggleFullscreen: () => A(!h)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ vt("div", { ref: y, style: { height: "100%", width: "100%" } }),
      h && /* @__PURE__ */ dr("div", { style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999
        // Ensure it's above everything
      }, children: [
        /* @__PURE__ */ vt("style", { children: `
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
          /* @__PURE__ */ vt(
            "button",
            {
              onClick: () => A(!1),
              style: {
                position: "absolute",
                top: 15,
                right: 20,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                zIndex: 10
              },
              children: /* @__PURE__ */ vt(to, { size: 20, color: "#333" })
            }
          ),
          /* @__PURE__ */ vt("div", { ref: T, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  oo as VizlyChart
};
