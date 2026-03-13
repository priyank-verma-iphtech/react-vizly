import { jsx as ht, jsxs as dr } from "react/jsx-runtime";
import Me, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as ln, useEffect as un, useImperativeHandle as Hi } from "react";
import cn from "apexcharts";
const fn = (u) => {
  if (!u || u.length === 0)
    return "bar";
  const l = u[0];
  if (typeof l == "number")
    return "donut";
  if (typeof l != "object")
    return "bar";
  if (l.stage && l.value)
    return "funnel";
  if (l.label && l.value)
    return "donut";
  if (l.category && l.value)
    return "polararea";
  if (Array.isArray(l.y)) {
    if (l.y.length === 4)
      return "candlestick";
    if (l.y.length === 5)
      return "boxplot";
    if (l.y.length === 2)
      return "rangebar";
  }
  return l.x !== void 0 && l.y !== void 0 && l.r !== void 0 ? "bubble" : l.start !== void 0 && l.end !== void 0 ? "slope" : (l.x !== void 0 && l.y !== void 0, "bar");
}, Wi = {
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
  treemap: "heatmap",
  rangebar: "range",
  candlestick: "range",
  boxplot: "range"
}, dn = (u, l) => {
  const h = Wi[u] || "xy";
  let E = [], I = [], _ = [];
  if (!l || !Array.isArray(l) || l.length === 0)
    return { series: E, labels: I, categories: _ };
  const g = l[0], P = Object.keys(g).filter((y) => typeof g[y] == "number"), T = Object.keys(g).find((y) => typeof g[y] == "string") || "x";
  switch (h) {
    case "circular":
      E = l.map((y) => Number(typeof y == "number" ? y : y.value ?? y.y ?? 0)), I = l.map((y) => String(y.label ?? y.category ?? y.name ?? y.x ?? "Unknown"));
      break;
    case "category":
      _ = l.map((y) => String(y.x ?? y.category ?? y.stage ?? y[T])), E = P.length > 1 ? P.map((y) => ({ name: y, data: l.map((D) => D[y] ?? 0) })) : [{ name: "Series 1", data: l.map((y) => y.y ?? y.value ?? 0) }];
      break;
    case "range":
      E = [{
        name: "Series 1",
        data: l.map((y) => {
          let D = Array.isArray(y.y) ? y.y : [];
          return D.length === 0 && (u === "boxplot" ? D = [y.min ?? 0, y.q1 ?? 0, y.median ?? 0, y.q3 ?? 0, y.max ?? 0] : u === "candlestick" ? D = [y.open ?? 0, y.high ?? 0, y.low ?? 0, y.close ?? 0] : D = [y.start ?? 0, y.end ?? 0]), { x: y.x ?? y.label ?? y.date ?? "Unknown", y: D };
        })
      }];
      break;
    default:
      E = [{
        name: "Series 1",
        data: l.map((y) => ({
          x: y.x ?? y[T],
          y: y.y ?? y.value ?? 0,
          ...u === "bubble" && { z: y.r ?? y.z ?? 0 }
        }))
      }];
  }
  return { series: E, labels: I, categories: _ };
};
function Ui(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var hr = { exports: {} }, Ze = {};
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
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function E(_) {
    if (_ == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(_);
  }
  function I() {
    try {
      if (!Object.assign)
        return !1;
      var _ = new String("abc");
      if (_[5] = "de", Object.getOwnPropertyNames(_)[0] === "5")
        return !1;
      for (var g = {}, P = 0; P < 10; P++)
        g["_" + String.fromCharCode(P)] = P;
      var T = Object.getOwnPropertyNames(g).map(function(D) {
        return g[D];
      });
      if (T.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        y[D] = D;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = I() ? Object.assign : function(_, g) {
    for (var P, T = E(_), y, D = 1; D < arguments.length; D++) {
      P = Object(arguments[D]);
      for (var te in P)
        l.call(P, te) && (T[te] = P[te]);
      if (u) {
        y = u(P);
        for (var Z = 0; Z < y.length; Z++)
          h.call(P, y[Z]) && (T[y[Z]] = P[y[Z]]);
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
  var u = yn(), l = Me;
  function h(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, I = 60107, _ = 60108, g = 60114, P = 60109, T = 60110, y = 60112, D = 60113, te = 60120, Z = 60115, U = 60116, xe = 60121, A = 60117, $ = 60119, ie = 60129, ce = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var F = Symbol.for;
    E = F("react.portal"), I = F("react.fragment"), _ = F("react.strict_mode"), g = F("react.profiler"), P = F("react.provider"), T = F("react.context"), y = F("react.forward_ref"), D = F("react.suspense"), te = F("react.suspense_list"), Z = F("react.memo"), U = F("react.lazy"), xe = F("react.block"), A = F("react.fundamental"), $ = F("react.scope"), ie = F("react.debug_trace_mode"), ce = F("react.legacy_hidden");
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
      case g:
        return "Profiler";
      case _:
        return "StrictMode";
      case D:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case T:
          return (r.displayName || "Context") + ".Consumer";
        case P:
          return (r._context.displayName || "Context") + ".Provider";
        case y:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case Z:
          return Ie(r.type);
        case xe:
          return Ie(r._render);
        case U:
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
  function L(r, a, i, f) {
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
  var V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qe = Object.prototype.hasOwnProperty, we = {}, vt = {};
  function gt(r) {
    return qe.call(vt, r) ? !0 : qe.call(we, r) ? !1 : V.test(r) ? vt[r] = !0 : (we[r] = !0, !1);
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
  function K(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    B[r] = new K(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    B[a] = new K(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    B[r] = new K(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    B[r] = new K(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    B[r] = new K(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    B[r] = new K(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    B[r] = new K(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    B[r] = new K(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    B[r] = new K(r, 5, !1, r.toLowerCase(), null, !1, !1);
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
    B[a] = new K(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Qe, Je);
    B[a] = new K(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Qe, Je);
    B[a] = new K(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    B[r] = new K(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    B[r] = new K(r, 1, !1, r.toLowerCase(), null, !0, !0);
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
  function mt(r, a) {
    var i = B.hasOwnProperty(r) ? B[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || At(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Te(a) + '"'))) : gt(r) ? r + '="' + (Te(a) + '"') : "";
  }
  function yt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var et = typeof Object.is == "function" ? Object.is : yt, oe = null, De = null, M = null, Fe = !1, Be = !1, ke = null, Pe = 0;
  function Se() {
    if (oe === null)
      throw Error(h(321));
    return oe;
  }
  function bt() {
    if (0 < Pe)
      throw Error(h(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function je() {
    return M === null ? De === null ? (Fe = !1, De = M = bt()) : (Fe = !0, M = De) : M.next === null ? (Fe = !1, M = M.next = bt()) : (Fe = !0, M = M.next), M;
  }
  function Mt(r, a, i, f) {
    for (; Be; )
      Be = !1, Pe += 1, M = null, i = r(a, f);
    return tt(), i;
  }
  function tt() {
    oe = null, Be = !1, De = null, Pe = 0, M = ke = null;
  }
  function rt(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function xt(r, a, i) {
    if (oe = Se(), M = je(), Fe) {
      var f = M.queue;
      if (a = f.dispatch, ke !== null && (i = ke.get(f), i !== void 0)) {
        ke.delete(f), f = M.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return M.memoizedState = f, [f, a];
      }
      return [M.memoizedState, a];
    }
    return r = r === rt ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, M.memoizedState = r, r = M.queue = { last: null, dispatch: null }, r = r.dispatch = Ye.bind(null, oe, r), [M.memoizedState, r];
  }
  function wt(r, a) {
    if (oe = Se(), M = je(), a = a === void 0 ? null : a, M !== null) {
      var i = M.memoizedState;
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
    return r = r(), M.memoizedState = [r, a], r;
  }
  function Ye(r, a, i) {
    if (!(25 > Pe))
      throw Error(h(301));
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
  var q = null, nt = { readContext: function(r) {
    var a = q.threadID;
    return ve(r, a), r[a];
  }, useContext: function(r) {
    Se();
    var a = q.threadID;
    return ve(r, a), r[a];
  }, useMemo: wt, useReducer: xt, useRef: function(r) {
    oe = Se(), M = je();
    var a = M.memoizedState;
    return a === null ? (r = { current: r }, M.memoizedState = r) : a;
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
    return (q.identifierPrefix || "") + "R:" + (q.uniqueID++).toString(36);
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
      throw Error(h(152, Ie(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, J = L(S, a, i, m), X = [], ee = !1, N = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (X === null)
          return null;
      }, enqueueReplaceState: function(It, j) {
        ee = !0, X = [j];
      }, enqueueSetState: function(It, j) {
        if (X === null)
          return null;
        X.push(j);
      } };
      if (m) {
        if (m = new S(b.props, J, N), typeof S.getDerivedStateFromProps == "function") {
          var C = S.getDerivedStateFromProps.call(null, b.props, m.state);
          C != null && (m.state = u({}, m.state, C));
        }
      } else if (oe = {}, m = S(
        b.props,
        J,
        N
      ), m = Mt(S, b.props, m, J), m == null || m.render == null) {
        r = m, Rt(r, S);
        return;
      }
      if (m.props = b.props, m.context = J, m.updater = N, N = m.state, N === void 0 && (m.state = N = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), X.length) {
          N = X;
          var G = ee;
          if (X = null, ee = !1, G && N.length === 1)
            m.state = N[0];
          else {
            C = G ? N[0] : m.state;
            var Ee = !0;
            for (G = G ? 1 : 0; G < N.length; G++) {
              var ae = N[G];
              ae = typeof ae == "function" ? ae.call(m, C, b.props, J) : ae, ae != null && (Ee ? (Ee = !1, C = u({}, C, ae)) : u(C, ae));
            }
            m.state = C;
          }
        } else
          X = null;
      if (r = m.render(), Rt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var se = m.getChildContext();
        for (var de in se)
          if (!(de in b))
            throw Error(h(108, Ie(S) || "Unknown", de));
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
          throw Error(h(304));
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
      var f = q;
      q = this;
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
            var J = m.footer;
            if (J !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === P)
              this.popProvider(m.type);
            else if (m.type === D) {
              this.suspenseDepth--;
              var X = x.pop();
              if (b) {
                b = !1;
                var ee = m.fallbackFrame;
                if (!ee)
                  throw Error(h(303));
                this.stack.push(ee), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += X;
            }
            x[this.suspenseDepth] += J;
          } else {
            var N = m.children[m.childIndex++], C = "";
            try {
              C += this.render(N, m.context, m.domNamespace);
            } catch (G) {
              throw G != null && typeof G.then == "function" ? Error(h(294)) : G;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += C;
          }
        }
        return x[0];
      } finally {
        at.current = k, q = f, tt();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Te(k) : this.previousWasTextNode ? "<!-- -->" + Te(k) : (this.previousWasTextNode = !0, Te(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? h(257) : h(258, k.toString()));
        return i = ge(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, f, k);
      switch (x) {
        case ce:
        case ie:
        case _:
        case g:
        case te:
        case I:
          return i = ge(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case D:
          throw Error(h(294));
        case $:
          throw Error(h(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case y:
            oe = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = ge(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case Z:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case P:
            return x = ge(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case T:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ve(x, S), x = ge(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case A:
            throw Error(h(338));
          case U:
            return x = i.type, b = x._init, x = b(x._payload), i = [l.createElement(x, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(h(130, x == null ? x : typeof x, ""));
    }, a.renderDOM = function(i, f, k) {
      var x = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(x)) {
        if (!$e.test(x))
          throw Error(h(65, x));
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
              throw Error(h(92));
            if (Array.isArray(m)) {
              if (!(1 >= m.length))
                throw Error(h(93));
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
        var J = jt(b.children);
        if (m != null) {
          var X = b.value != null ? b.value + "" : J;
          if (S = !1, Array.isArray(m)) {
            for (var ee = 0; ee < m.length; ee++)
              if ("" + m[ee] === X) {
                S = !0;
                break;
              }
          } else
            S = "" + m === X;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: J }
          );
        }
      }
      if (S = b) {
        if (it[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(h(137, x));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(h(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(h(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(h(62));
      }
      S = b, m = this.makeStaticMarkup, J = this.stack.length === 1, X = "<" + i.type;
      e:
        if (x.indexOf("-") === -1)
          ee = typeof S.is == "string";
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
              ee = !1;
              break e;
            default:
              ee = !0;
          }
      for (j in S)
        if (zt.call(S, j)) {
          var N = S[j];
          if (N != null) {
            if (j === "style") {
              var C = void 0, G = "", Ee = "";
              for (C in N)
                if (N.hasOwnProperty(C)) {
                  var ae = C.indexOf("--") === 0, se = N[C];
                  if (se != null) {
                    if (ae)
                      var de = C;
                    else if (de = C, Ot.hasOwnProperty(de))
                      de = Ot[de];
                    else {
                      var It = de.replace(ze, "-$1").toLowerCase().replace(ot, "-ms-");
                      de = Ot[de] = It;
                    }
                    G += Ee + de + ":", Ee = C, ae = se == null || typeof se == "boolean" || se === "" ? "" : ae || typeof se != "number" || se === 0 || fe.hasOwnProperty(Ee) && fe[Ee] ? ("" + se).trim() : se + "px", G += ae, Ee = ";";
                  }
                }
              N = G || null;
            }
            C = null, ee ? Lt.hasOwnProperty(j) || (C = j, C = gt(C) && N != null ? C + '="' + (Te(N) + '"') : "") : C = mt(j, N), C && (X += " " + C);
          }
        }
      m || J && (X += ' data-reactroot=""');
      var j = X;
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
    throw Error(h(207));
  }, Ze.renderToStaticMarkup = function(r, a) {
    r = new st(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ze.renderToStaticNodeStream = function() {
    throw Error(h(208));
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
    var u = Me, l = yn();
    function h(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", I = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        P("warn", e, n);
      }
    }
    function g(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        P("error", e, n);
      }
    }
    function P(e, t, n) {
      {
        var o = I.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var p = n.map(function(c) {
          return "" + c;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var T = 60106, y = 60107, D = 60108, te = 60114, Z = 60109, U = 60110, xe = 60112, A = 60113, $ = 60120, ie = 60115, ce = 60116, F = 60121, Ie = 60117, Ve = 60119, _e = 60129, ve = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var L = Symbol.for;
      L("react.element"), T = L("react.portal"), y = L("react.fragment"), D = L("react.strict_mode"), te = L("react.profiler"), Z = L("react.provider"), U = L("react.context"), xe = L("react.forward_ref"), A = L("react.suspense"), $ = L("react.suspense_list"), ie = L("react.memo"), ce = L("react.lazy"), F = L("react.block"), L("react.server.block"), Ie = L("react.fundamental"), Ve = L("react.scope"), L("react.opaque.id"), _e = L("react.debug_trace_mode"), L("react.offscreen"), ve = L("react.legacy_hidden");
    }
    function H(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Ce(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case T:
          return "Portal";
        case te:
          return "Profiler";
        case D:
          return "StrictMode";
        case A:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case U:
            var t = e;
            return Ce(t) + ".Consumer";
          case Z:
            var n = e;
            return Ce(n._context) + ".Provider";
          case xe:
            return H(e, e.render, "ForwardRef");
          case ie:
            return V(e.type);
          case F:
            return V(e._render);
          case ce: {
            var o = e, s = o._payload, p = o._init;
            try {
              return V(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = !1, we = 0, vt, gt, Pt, At, K, B, Qe;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Zt() {
      {
        if (we === 0) {
          vt = console.log, gt = console.info, Pt = console.warn, At = console.error, K = console.group, B = console.groupCollapsed, Qe = console.groupEnd;
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
              value: Pt
            }),
            error: l({}, e, {
              value: At
            }),
            group: l({}, e, {
              value: K
            }),
            groupCollapsed: l({}, e, {
              value: B
            }),
            groupEnd: l({}, e, {
              value: Qe
            })
          });
        }
        we < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = I.ReactCurrentDispatcher, yt;
    function et(e, t, n) {
      {
        if (yt === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            yt = o && o[1] || "";
          }
        return `
` + yt + e;
      }
    }
    var oe = !1, De;
    {
      var M = typeof WeakMap == "function" ? WeakMap : Map;
      De = new M();
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
      p = mt.current, mt.current = null, Zt();
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
`), d = o.stack.split(`
`), O = v.length - 1, R = d.length - 1; O >= 1 && R >= 0 && v[O] !== d[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (v[O] !== d[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || v[O] !== d[R]) {
                    var Y = `
` + v[O].replace(" at new ", " at ");
                    return typeof e == "function" && De.set(e, Y), Y;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, mt.current = p, Te(), Error.prepareStackTrace = s;
      }
      var Q = e ? e.displayName || e.name : "", w = Q ? et(Q) : "";
      return typeof e == "function" && De.set(e, w), w;
    }
    function Be(e, t, n) {
      return Fe(e, !1);
    }
    function ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pe(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, ke(e));
      if (typeof e == "string")
        return et(e);
      switch (e) {
        case A:
          return et("Suspense");
        case $:
          return et("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case xe:
            return Be(e.render);
          case ie:
            return Pe(e.type, t, n);
          case F:
            return Be(e._render);
          case ce: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Pe(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = {}, bt = I.ReactDebugCurrentFrame;
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
            var v = void 0;
            try {
              if (typeof e[c] != "function") {
                var d = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              v = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              v = O;
            }
            v && !(v instanceof Error) && (je(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof v), je(null)), v instanceof Error && !(v.message in Se) && (Se[v.message] = !0, je(s), g("Failed %s type: %s", n, v.message), je(null));
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
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === U && s._context === void 0
          );
          if (!p && !tt.has(e)) {
            tt.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === Z ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", V(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ye(s, n), s[n];
        {
          var v = xt(e, t);
          return e.contextTypes && wt(e.contextTypes, v, "context"), v;
        }
      } else {
        var d = xt(e, t);
        return e.contextTypes && wt(e.contextTypes, d, "context"), d;
      }
    }
    for (var q = new Uint16Array(16), nt = 0; nt < 15; nt++)
      q[nt] = nt + 1;
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
    function St(e) {
      q[e] = q[0], q[0] = e;
    }
    var it = 0, fe = 1, Et = 2, ze = 3, ot = 4, ge = 5, at = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Ot = new RegExp("^[" + _t + "][" + $e + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Rt(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : Ot.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
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
    function i(e, t, n, o, s, p, c) {
      this.acceptsBooleans = t === Et || t === ze || t === ot, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
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
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function X(e) {
      !J && m.test(e) && (J = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ee = /["'&<>]/;
    function N(e) {
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
    function C(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : N(e);
    }
    function G(e) {
      return '"' + C(e) + '"';
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
        return s === ze || s === ot && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, X(t)), o + "=" + G(t));
      } else if (Rt(e))
        return e + "=" + G(t);
      return "";
    }
    function se(e, t) {
      return !Rt(e) || t == null ? "" : e + "=" + G(t);
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var It = typeof Object.is == "function" ? Object.is : de, j = null, Nt = null, z = null, Ct = !1, Ht = !1, Le = null, Wt = 0, kn = 25, Oe = !1, lt;
    function Xe() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Oe && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", lt), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, lt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!It(e[n], t[n]))
          return !1;
      return !0;
    }
    function vr() {
      if (Wt > 0)
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
    function mr(e, t, n, o) {
      for (; Ht; )
        Ht = !1, Wt += 1, z = null, n = e(t, o);
      return yr(), n;
    }
    function yr() {
      Oe = !1, j = null, Ht = !1, Nt = null, Wt = 0, Le = null, z = null;
    }
    function En(e, t) {
      var n = ut.threadID;
      return Ye(e, n), Oe && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
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
          var p = Le.get(o);
          if (p !== void 0) {
            Le.delete(o);
            var c = z.memoizedState, v = p;
            do {
              var d = v.action;
              Oe = !0, c = e(c, d), Oe = !1, v = v.next;
            } while (v !== null);
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
        }, Y = R.dispatch = Tn.bind(null, j, R);
        return [z.memoizedState, Y];
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
      var p = e();
      return Oe = !1, z.memoizedState = [p, n], p;
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
      lt = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Tn(e, t, n) {
      if (!(Wt < kn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === j) {
        Ht = !0;
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
      return Xe(), t(e._source);
    }
    function An(e) {
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
      useDeferredValue: An,
      useTransition: Mn,
      useOpaqueIdentifier: _n,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Pn
    }, Ut = "http://www.w3.org/1999/xhtml", kr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: Ut,
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
          return Ut;
      }
    }
    function jn(e, t) {
      return e == null || e === Ut ? Sr(t) : e === nr && t === "foreignObject" ? Ut : e;
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
    function Wn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Un = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Tt).forEach(function(e) {
      Un.forEach(function(t) {
        Tt[Wn(t, e)] = Tt[e];
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
        ct.hasOwnProperty(e) && ct[e] || (ct[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        ct.hasOwnProperty(e) && ct[e] || (ct[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
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
    }, ft = {}, ni = new RegExp("^(aria)-[" + $e + "]*$"), ii = new RegExp("^(aria)[A-Z][" + $e + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(ft, t) && ft[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ft[t] = !0, !0;
          if (t !== o)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ft[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), p = Tr.hasOwnProperty(s) ? s : null;
          if (p == null)
            return ft[t] = !0, !1;
          if (t !== p)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), ft[t] = !0, !0;
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
        n.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : n.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
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
      var re = {}, ci = Object.prototype.hasOwnProperty, Mr = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + $e + "]*$"), pi = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      Ar = function(e, t, n, o) {
        if (ci.call(re, t) && re[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), re[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var v = c.hasOwnProperty(s) ? c[s] : null;
          if (v != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, v), re[t] = !0, !0;
          if (Mr.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), re[t] = !0, !0;
        } else if (Mr.test(t))
          return fi.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), re[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), re[t] = !0, !0;
        if (s === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), re[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), re[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), re[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === it;
        if (Pr.hasOwnProperty(s)) {
          var R = Pr[s];
          if (R !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, R), re[t] = !0, !0;
        } else if (!O && t !== s)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), re[t] = !0, !0;
        return typeof n == "boolean" && st(t, n, d, !1) ? (n ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), re[t] = !0, !0) : O ? !0 : st(t, n, d, !1) ? (re[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === ze && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), re[t] = !0), !0);
      };
    }
    var hi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var p = Ar(e, s, t[s], n);
          p || o.push(s);
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
    var Ne = u.Children.toArray, Ae = [], lr = I.ReactCurrentDispatcher, Vt, ur = null, _r = function() {
      return "";
    }, Fr = function(e) {
      return "";
    }, jr = function(e, t) {
    }, zr = function(e) {
    }, Lr = function(e) {
    }, Nr = function() {
    }, Hr = !1;
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
          var s = o.indexOf("--") === 0, p = e[o];
          s || ri(o, p), p != null && (t += n + (s ? o : bi(o)) + ":", t += Vn(o, p, s), n = ";");
        }
      return t || null;
    }
    function en(e, t) {
      {
        var n = e.constructor, o = n && V(n) || "ReactClass", s = o + "." + t;
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
          return C(n);
      }
      return null;
    }
    function Si(e) {
      if (!u.isValidElement(e))
        return Ne(e);
      var t = e;
      if (t.type !== y)
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
        n != null && (t += n, !Br && typeof n != "string" && typeof n != "number" && (Br = !0, g("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Oi = Object.prototype.hasOwnProperty, Ri = "style", Ii = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ci(e, t, n, o, s, p) {
      var c = "<" + e, v = ar(t, n);
      for (var d in n)
        if (Oi.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Ri && (O = xi(O));
            var R = null;
            v ? Ii.hasOwnProperty(d) || (R = se(d, O)) : R = ae(d, O), R && (c += " " + R);
          }
        }
      return s || p && (c += " " + Ee()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error((V(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, v) {
        var d = wi(v), O = kt(v, t, n, d), R = [], Y = !1, Q = {
          isMounted: function(Ue) {
            return !1;
          },
          enqueueForceUpdate: function(Ue) {
            if (R === null)
              return en(Ue, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Ue, pt) {
            Y = !0, R = [pt];
          },
          enqueueSetState: function(Ue, pt) {
            if (R === null)
              return en(Ue, "setState"), null;
            R.push(pt);
          }
        }, w;
        if (d) {
          if (w = new v(c.props, O, Q), typeof v.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var W = V(v) || "Unknown";
              Kr[W] || (g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", W, w.state === null ? "null" : "undefined", W), Kr[W] = !0);
            }
            var ne = v.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ne === void 0) {
              var le = V(v) || "Unknown";
              Zr[le] || (g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", le), Zr[le] = !0);
            }
            ne != null && (w.state = l({}, w.state, ne));
          }
        } else {
          if (v.prototype && typeof v.prototype.render == "function") {
            var ue = V(v) || "Unknown";
            $r[ue] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ue, ue), $r[ue] = !0);
          }
          var He = {};
          if (gr(He), w = v(c.props, O, Q), w = mr(v, c.props, w, O), w != null && w.render != null) {
            var pe = V(v) || "Unknown";
            Xr[pe] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", pe, pe, pe), Xr[pe] = !0);
          }
          if (w == null || w.render == null) {
            e = w, tn(e, v);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = Q;
        var me = w.state;
        if (me === void 0 && (w.state = me = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var We = V(v) || "Unknown";
              Gr[We] || (_(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                We
              ), Gr[We] = !0);
            }
            typeof v.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof v.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var he = R, ye = Y;
            if (R = null, Y = !1, ye && he.length === 1)
              w.state = he[0];
            else {
              for (var Re = ye ? he[0] : w.state, qt = !0, dt = ye ? 1 : 0; dt < he.length; dt++) {
                var be = he[dt], Dt = typeof be == "function" ? be.call(w, Re, c.props, O) : be;
                Dt != null && (qt ? (qt = !1, Re = l({}, Re, Dt)) : l(Re, Dt));
              }
              w.state = Re;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), tn(e, v);
        var Ge;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = v.childContextTypes;
            if (typeof Bt == "object") {
              Ge = w.getChildContext();
              for (var Yt in Ge)
                if (!(Yt in Bt))
                  throw Error((V(v) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", V(v) || "Unknown");
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
        var p = Si(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: ir.html,
          children: p,
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
        var s = ++this.contextIndex, p = o.type._context, c = this.threadID;
        Ye(p, c);
        var v = p[c];
        this.contextStack[s] = p, this.contextValueStack[s] = v, this.contextProviderStack[s] = o, p[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && g("Unexpected pop.");
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
        var s = ut;
        wr(this);
        var p = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], v = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, St(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (v || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === Z) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === A) {
                this.suspenseDepth--;
                var Y = c.pop();
                if (v) {
                  v = !1;
                  var Q = d.fallbackFrame;
                  if (!Q)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(Q), c[this.suspenseDepth] += "<!--$!-->";
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
          lr.current = p, wr(s), yr();
        }
      }, t.render = function(o, s, p) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? C(c) : this.previousWasTextNode ? "<!-- -->" + C(c) : (this.previousWasTextNode = !0, C(c));
        } else {
          var v, d = Ti(o, s, this.threadID);
          if (v = d.child, s = d.context, v === null || v === !1)
            return "";
          if (!u.isValidElement(v)) {
            if (v != null && v.$$typeof != null) {
              var O = v.$$typeof;
              throw Error(O === T ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Ne(v), Y = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return Y.debugElementStack = [], this.stack.push(Y), "";
          }
          var Q = v, w = Q.type;
          if (typeof w == "string")
            return this.renderDOM(Q, s, p);
          switch (w) {
            case ve:
            case _e:
            case D:
            case te:
            case $:
            case y: {
              var W = Ne(v.props.children), ne = {
                type: null,
                domNamespace: p,
                children: W,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ne.debugElementStack = [], this.stack.push(ne), "";
            }
            case A:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Ve:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case xe: {
                var le = v, ue, He = {};
                gr(He), ue = w.render(le.props, le.ref), ue = mr(w.render, le.props, ue, le.ref), ue = Ne(ue);
                var pe = {
                  type: null,
                  domNamespace: p,
                  children: ue,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pe.debugElementStack = [], this.stack.push(pe), "";
              }
              case ie: {
                var me = v, We = [u.createElement(w.type, l({
                  ref: me.ref
                }, me.props))], he = {
                  type: null,
                  domNamespace: p,
                  children: We,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case Z: {
                var ye = v, Re = ye.props, qt = Ne(Re.children), dt = {
                  type: ye,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return dt.debugElementStack = [], this.pushProvider(ye), this.stack.push(dt), "";
              }
              case U: {
                var be = v.type;
                be._context === void 0 ? be !== be.Consumer && (Hr || (Hr = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : be = be._context;
                var Dt = v.props, Ge = this.threadID;
                Ye(be, Ge);
                var Bt = be[Ge], Yt = Ne(Dt.children(Bt)), Ue = {
                  type: v,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Ue.debugElementStack = [], this.stack.push(Ue), "";
              }
              case Ie:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case ce: {
                var pt = v, nn = v.type, _i = nn._payload, Fi = nn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: pt.ref
                }, pt.props))], on = {
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
            var an = Q._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? V(an) : null;
            sn && (fr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), v = p;
        p === ir.html && (v = Sr(c)), v === ir.html && c !== o.type && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), yi(c);
        var d = o.props;
        if (c === "input")
          or("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Ur && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Ur = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Wr && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !qr && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, Y = d.children;
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
          d = l({}, d, {
            value: void 0,
            children: "" + O
          });
        } else if (c === "select") {
          {
            or("select", d);
            for (var Q = 0; Q < Qr.length; Q++) {
              var w = Qr[Q];
              if (d[w] != null) {
                var W = Array.isArray(d[w]);
                d.multiple && !W ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && W && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ne = null, le = this.currentSelectValue, ue = Ei(d.children);
          if (le != null) {
            var He;
            if (d.value != null ? He = d.value + "" : He = ue, ne = !1, Array.isArray(le)) {
              for (var pe = 0; pe < le.length; pe++)
                if ("" + le[pe] === He) {
                  ne = !0;
                  break;
                }
            } else
              ne = "" + le === He;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ne,
              children: ue
            });
          }
        }
        jr(c, d), Hn(c, d);
        var me = Ci(o.type, c, d, v, this.makeStaticMarkup, this.stack.length === 1), We = "";
        Er.hasOwnProperty(c) ? me += "/>" : (me += ">", We = "</" + o.type + ">");
        var he, ye = ki(d);
        ye != null ? (he = [], gi.hasOwnProperty(c) && ye.charAt(0) === `
` && (me += `
`), me += ye) : he = Ne(d.children);
        var Re = {
          domNamespace: jn(p, o.type),
          type: c,
          children: he,
          childIndex: 0,
          context: s,
          footer: We
        };
        return Re.debugElementStack = [], this.stack.push(Re), this.previousWasTextNode = !1, me;
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
    Ke.renderToNodeStream = Ai, Ke.renderToStaticMarkup = Pi, Ke.renderToStaticNodeStream = Mi, Ke.renderToString = Di, Ke.version = E;
  }()), Ke;
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
}, gn = Me.createContext && /* @__PURE__ */ Me.createContext(bn), $i = ["attr", "size", "title"];
function Xi(u, l) {
  if (u == null)
    return {};
  var h, E, I = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(u);
    for (E = 0; E < _.length; E++)
      h = _[E], l.indexOf(h) === -1 && {}.propertyIsEnumerable.call(u, h) && (I[h] = u[h]);
  }
  return I;
}
function Gi(u, l) {
  if (u == null)
    return {};
  var h = {};
  for (var E in u)
    if ({}.hasOwnProperty.call(u, E)) {
      if (l.indexOf(E) !== -1)
        continue;
      h[E] = u[E];
    }
  return h;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var h = arguments[l];
      for (var E in h)
        ({}).hasOwnProperty.call(h, E) && (u[E] = h[E]);
    }
    return u;
  }, Xt.apply(null, arguments);
}
function mn(u, l) {
  var h = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(I) {
      return Object.getOwnPropertyDescriptor(u, I).enumerable;
    })), h.push.apply(h, E);
  }
  return h;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var h = arguments[l] != null ? arguments[l] : {};
    l % 2 ? mn(Object(h), !0).forEach(function(E) {
      Zi(u, E, h[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : mn(Object(h)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(h, E));
    });
  }
  return u;
}
function Zi(u, l, h) {
  return (l = Ki(l)) in u ? Object.defineProperty(u, l, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = h, u;
}
function Ki(u) {
  var l = Qi(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Qi(u, l) {
  if (typeof u != "object" || !u)
    return u;
  var h = u[Symbol.toPrimitive];
  if (h !== void 0) {
    var E = h.call(u, l || "default");
    if (typeof E != "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function xn(u) {
  return u && u.map((l, h) => /* @__PURE__ */ Me.createElement(l.tag, Gt({
    key: h
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Me.createElement(Ji, Xt({
    attr: Gt({}, u.attr)
  }, l), xn(u.child));
}
function Ji(u) {
  var l = (h) => {
    var {
      attr: E,
      size: I,
      title: _
    } = u, g = Xi(u, $i), P = I || h.size || "1em", T;
    return h.className && (T = h.className), u.className && (T = (T ? T + " " : "") + u.className), /* @__PURE__ */ Me.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, h.attr, E, g, {
      className: T,
      style: Gt(Gt({
        color: u.color || h.color
      }, h.style), u.style),
      height: P,
      width: P,
      xmlns: "http://www.w3.org/2000/svg"
    }), _ && /* @__PURE__ */ Me.createElement("title", null, _), u.children);
  };
  return gn !== void 0 ? /* @__PURE__ */ Me.createElement(gn.Consumer, null, (h) => l(h)) : l(bn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const oo = Li(
  ({ data: u, type: l, options: h = {}, height: E = 350, title: I }, _) => {
    const g = $t(null), P = $t(null), T = $t(null), y = $t(null), [D, te] = Ni(!1), Z = ln(() => Yi.renderToString(
      /* @__PURE__ */ ht(
        eo,
        {
          size: 14,
          style: { color: "#9ca3af", marginTop: "5px", marginLeft: "2px" }
        }
      )
    ), []), U = ln(() => l || (Array.isArray(u[0]) ? u.map((A) => fn(A)) : fn(u)), [u, l]), xe = (A) => {
      var Ve, _e, ve, L;
      const $ = Array.isArray(U) ? String(U[0]).toLowerCase() : String(U).toLowerCase();
      let ie = [], ce = [], F = [];
      if (Array.isArray(u[0]))
        ie = u.map((Ce, V) => {
          const qe = Array.isArray(l) && l[V] || (Array.isArray(U) ? U[V] : U), we = dn(qe, Ce);
          return {
            name: `Series ${V + 1}`,
            type: qe,
            ...we.series[0]
          };
        });
      else {
        const H = dn(U, u);
        ie = H.series, ce = H.labels, F = H.categories;
      }
      return {
        ...h,
        chart: {
          // CRITICAL: Unique IDs prevent internal event conflicts
          id: A ? "vizly-modal-chart" : "vizly-main-chart",
          type: $ === "funnel" || $ === "column" ? "bar" : $,
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
              customIcons: A ? [] : [
                {
                  icon: Z,
                  index: 6,
                  title: "Expand",
                  class: "custom-icon",
                  click: () => te(!0)
                }
              ]
            }
          },
          animations: { enabled: !A },
          // Faster rendering in modal
          ...h.chart
        },
        title: {
          text: typeof I == "string" ? I : (I == null ? void 0 : I.text) || ((Ve = h.title) == null ? void 0 : Ve.text) || void 0,
          align: (typeof I == "object" ? I == null ? void 0 : I.align : (_e = h.title) == null ? void 0 : _e.align) || "left",
          style: { fontSize: "14px", fontWeight: "bold", ...(ve = h.title) == null ? void 0 : ve.style }
        },
        series: ie,
        labels: ce != null && ce.length ? ce : void 0,
        xaxis: F != null && F.length ? { ...h.xaxis, categories: F } : h.xaxis,
        plotOptions: {
          ...h.plotOptions,
          bar: {
            horizontal: $ === "funnel" || $ === "rangebar",
            isFunnel: $ === "funnel",
            ...(L = h.plotOptions) == null ? void 0 : L.bar
          }
        },
        tooltip: { theme: "dark", ...h.tooltip }
      };
    };
    return un(() => {
      if (!g.current)
        return;
      const A = xe(!1);
      return T.current ? T.current.updateOptions(A) : (T.current = new cn(g.current, A), T.current.render()), () => {
        var $;
        ($ = T.current) == null || $.destroy(), T.current = null;
      };
    }, [u, U, h, I, Z]), un(() => {
      if (D && P.current) {
        const A = xe(!0), $ = setTimeout(() => {
          y.current = new cn(P.current, A), y.current.render();
        }, 50);
        return () => {
          var ie;
          clearTimeout($), (ie = y.current) == null || ie.destroy(), y.current = null;
        };
      }
    }, [D, u, U, h]), Hi(_, () => ({
      zoomIn: () => {
        var A;
        return (A = T.current) == null ? void 0 : A.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var A;
        return (A = T.current) == null ? void 0 : A.zoomX(void 0, void 0);
      },
      reset: () => {
        var A;
        return (A = T.current) == null ? void 0 : A.resetSeries();
      },
      toggleFullscreen: () => te(!D)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ ht("div", { ref: g, style: { height: "100%", width: "100%" } }),
      D && /* @__PURE__ */ dr("div", { style: {
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
              onClick: () => te(!1),
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
          /* @__PURE__ */ ht("div", { ref: P, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  oo as VizlyChart
};
