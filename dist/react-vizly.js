import { jsx as Tt, jsxs as _i } from "react/jsx-runtime";
import Ae, { forwardRef as Fi, useRef as an, useState as ji, useMemo as sn, useEffect as zi, useImperativeHandle as Li } from "react";
import Ni from "apexcharts";
const ln = (u) => {
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
  treemap: "heatmap",
  rangebar: "range",
  candlestick: "range",
  boxplot: "range"
}, un = (u, l) => {
  const g = Hi[u] || "xy";
  let E = [], I = [], M = [];
  if (!l || !Array.isArray(l) || l.length === 0)
    return { series: E, labels: I, categories: M };
  const y = l[0], T = Object.keys(y).filter((m) => typeof y[m] == "number"), P = Object.keys(y).find((m) => typeof y[m] == "string") || "x";
  switch (g) {
    case "circular":
      E = l.map((m) => Number(typeof m == "number" ? m : m.value ?? m.y ?? 0)), I = l.map((m) => String(m.label ?? m.category ?? m.name ?? m.x ?? "Unknown"));
      break;
    case "category":
      M = l.map((m) => String(m.x ?? m.category ?? m.stage ?? m[P])), E = T.length > 1 ? T.map((m) => ({ name: m, data: l.map((D) => D[m] ?? 0) })) : [{ name: "Series 1", data: l.map((m) => m.y ?? m.value ?? 0) }];
      break;
    case "range":
      E = [{
        name: "Series 1",
        data: l.map((m) => {
          let D = Array.isArray(m.y) ? m.y : [];
          return D.length === 0 && (u === "boxplot" ? D = [m.min ?? 0, m.q1 ?? 0, m.median ?? 0, m.q3 ?? 0, m.max ?? 0] : u === "candlestick" ? D = [m.open ?? 0, m.high ?? 0, m.low ?? 0, m.close ?? 0] : D = [m.start ?? 0, m.end ?? 0]), { x: m.x ?? m.label ?? m.date ?? "Unknown", y: D };
        })
      }];
      break;
    default:
      E = [{
        name: "Series 1",
        data: l.map((m) => ({
          x: m.x ?? m[P],
          y: m.y ?? m.value ?? 0,
          ...u === "bubble" && { z: m.r ?? m.z ?? 0 }
        }))
      }];
  }
  return { series: E, labels: I, categories: M };
};
function Ui(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var dr = { exports: {} }, Xe = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fr, cn;
function vn() {
  if (cn)
    return fr;
  cn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
  function E(M) {
    if (M == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(M);
  }
  function I() {
    try {
      if (!Object.assign)
        return !1;
      var M = new String("abc");
      if (M[5] = "de", Object.getOwnPropertyNames(M)[0] === "5")
        return !1;
      for (var y = {}, T = 0; T < 10; T++)
        y["_" + String.fromCharCode(T)] = T;
      var P = Object.getOwnPropertyNames(y).map(function(D) {
        return y[D];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        m[D] = D;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fr = I() ? Object.assign : function(M, y) {
    for (var T, P = E(M), m, D = 1; D < arguments.length; D++) {
      T = Object(arguments[D]);
      for (var ne in T)
        l.call(T, ne) && (P[ne] = T[ne]);
      if (u) {
        m = u(T);
        for (var Y = 0; Y < m.length; Y++)
          g.call(T, m[Y]) && (P[m[Y]] = T[m[Y]]);
      }
    }
    return P;
  }, fr;
}
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function Wi() {
  if (fn)
    return Xe;
  fn = 1;
  var u = vn(), l = Ae;
  function g(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, I = 60107, M = 60108, y = 60114, T = 60109, P = 60110, m = 60112, D = 60113, ne = 60120, Y = 60115, N = 60116, fe = 60121, Z = 60117, ge = 60119, de = 60129, pe = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var L = Symbol.for;
    E = L("react.portal"), I = L("react.fragment"), M = L("react.strict_mode"), y = L("react.profiler"), T = L("react.provider"), P = L("react.context"), m = L("react.forward_ref"), D = L("react.suspense"), ne = L("react.suspense_list"), Y = L("react.memo"), N = L("react.lazy"), fe = L("react.block"), Z = L("react.fundamental"), ge = L("react.scope"), de = L("react.debug_trace_mode"), pe = L("react.legacy_hidden");
  }
  function K(r) {
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
      case M:
        return "StrictMode";
      case D:
        return "Suspense";
      case ne:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case P:
          return (r.displayName || "Context") + ".Consumer";
        case T:
          return (r._context.displayName || "Context") + ".Provider";
        case m:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case Y:
          return K(r.type);
        case fe:
          return K(r._render);
        case N:
          a = r._payload, r = r._init;
          try {
            return K(r(a));
          } catch {
          }
      }
    return null;
  }
  var We = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ie = {};
  function ye(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function j(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ye(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = Ie;
    return a;
  }
  for (var $ = new Uint16Array(16), Ve = 0; 15 > Ve; Ve++)
    $[Ve] = Ve + 1;
  $[15] = 0;
  var Q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Dt = Object.prototype.hasOwnProperty, Me = {}, pt = {};
  function ht(r) {
    return Dt.call(pt, r) ? !0 : Dt.call(Me, r) ? !1 : Q.test(r) ? pt[r] = !0 : (Me[r] = !0, !1);
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
  function G(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    W[r] = new G(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    W[a] = new G(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    W[r] = new G(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    W[r] = new G(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    W[r] = new G(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    W[r] = new G(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    W[r] = new G(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    W[r] = new G(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    W[r] = new G(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Ke = /[\-:]([a-z])/g;
  function Qe(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Ke,
      Qe
    );
    W[a] = new G(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Ke, Qe);
    W[a] = new G(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Ke, Qe);
    W[a] = new G(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    W[r] = new G(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    W[r] = new G(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Xt = /["'&<>]/;
  function Ce(r) {
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
    var i = W.hasOwnProperty(r) ? W[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || At(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Ce(a) + '"'))) : ht(r) ? r + '="' + (Ce(a) + '"') : "";
  }
  function gt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var Je = typeof Object.is == "function" ? Object.is : gt, ie = null, Te = null, A = null, _e = !1, qe = !1, ke = null, De = 0;
  function Se() {
    if (ie === null)
      throw Error(g(321));
    return ie;
  }
  function yt() {
    if (0 < De)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Fe() {
    return A === null ? Te === null ? (_e = !1, Te = A = yt()) : (_e = !0, A = Te) : A.next === null ? (_e = !1, A = A.next = yt()) : (_e = !0, A = A.next), A;
  }
  function Mt(r, a, i, f) {
    for (; qe; )
      qe = !1, De += 1, A = null, i = r(a, f);
    return et(), i;
  }
  function et() {
    ie = null, qe = !1, Te = null, De = 0, A = ke = null;
  }
  function tt(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function mt(r, a, i) {
    if (ie = Se(), A = Fe(), _e) {
      var f = A.queue;
      if (a = f.dispatch, ke !== null && (i = ke.get(f), i !== void 0)) {
        ke.delete(f), f = A.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return A.memoizedState = f, [f, a];
      }
      return [A.memoizedState, a];
    }
    return r = r === tt ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, A.memoizedState = r, r = A.queue = { last: null, dispatch: null }, r = r.dispatch = Be.bind(null, ie, r), [A.memoizedState, r];
  }
  function bt(r, a) {
    if (ie = Se(), A = Fe(), a = a === void 0 ? null : a, A !== null) {
      var i = A.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!Je(a[k], f[k])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), A.memoizedState = [r, a], r;
  }
  function Be(r, a, i) {
    if (!(25 > De))
      throw Error(g(301));
    if (r === ie)
      if (qe = !0, r = { action: i, next: null }, ke === null && (ke = /* @__PURE__ */ new Map()), i = ke.get(a), i === void 0)
        ke.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function xt() {
  }
  var U = null, rt = { readContext: function(r) {
    var a = U.threadID;
    return ye(r, a), r[a];
  }, useContext: function(r) {
    Se();
    var a = U.threadID;
    return ye(r, a), r[a];
  }, useMemo: bt, useReducer: mt, useRef: function(r) {
    ie = Se(), A = Fe();
    var a = A.memoizedState;
    return a === null ? (r = { current: r }, A.memoizedState = r) : a;
  }, useState: function(r) {
    return mt(tt, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return bt(function() {
      return r;
    }, a);
  }, useImperativeHandle: xt, useEffect: xt, useDebugValue: xt, useDeferredValue: function(r) {
    return Se(), r;
  }, useTransition: function() {
    return Se(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (U.identifierPrefix || "") + "R:" + (U.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return Se(), a(r._source);
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
  var wt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, nt = u({ menuitem: !0 }, wt), ue = {
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
  Object.keys(ue).forEach(function(r) {
    kt.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), ue[a] = ue[r];
    });
  });
  var je = /([A-Z])/g, it = /^ms-/, me = l.Children.toArray, ot = We.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, Ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, St = {};
  function jt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var zt = Object.prototype.hasOwnProperty, Lt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function Et(r, a) {
    if (r === void 0)
      throw Error(g(152, K(a) || "Component"));
  }
  function Qt(r, a, i) {
    function f(b, S) {
      var v = S.prototype && S.prototype.isReactComponent, J = j(S, a, i, v), q = [], ee = !1, z = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (q === null)
          return null;
      }, enqueueReplaceState: function(Ot, _) {
        ee = !0, q = [_];
      }, enqueueSetState: function(Ot, _) {
        if (q === null)
          return null;
        q.push(_);
      } };
      if (v) {
        if (v = new S(b.props, J, z), typeof S.getDerivedStateFromProps == "function") {
          var C = S.getDerivedStateFromProps.call(null, b.props, v.state);
          C != null && (v.state = u({}, v.state, C));
        }
      } else if (ie = {}, v = S(
        b.props,
        J,
        z
      ), v = Mt(S, b.props, v, J), v == null || v.render == null) {
        r = v, Et(r, S);
        return;
      }
      if (v.props = b.props, v.context = J, v.updater = z, z = v.state, z === void 0 && (v.state = z = null), typeof v.UNSAFE_componentWillMount == "function" || typeof v.componentWillMount == "function")
        if (typeof v.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && v.UNSAFE_componentWillMount(), q.length) {
          z = q;
          var B = ee;
          if (q = null, ee = !1, B && z.length === 1)
            v.state = z[0];
          else {
            C = B ? z[0] : v.state;
            var Ee = !0;
            for (B = B ? 1 : 0; B < z.length; B++) {
              var oe = z[B];
              oe = typeof oe == "function" ? oe.call(v, C, b.props, J) : oe, oe != null && (Ee ? (Ee = !1, C = u({}, C, oe)) : u(C, oe));
            }
            v.state = C;
          }
        } else
          q = null;
      if (r = v.render(), Et(r, S), typeof v.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var ae = v.getChildContext();
        for (var ce in ae)
          if (!(ce in b))
            throw Error(g(108, K(S) || "Unknown", ce));
      }
      ae && (a = u({}, a, ae));
    }
    for (; l.isValidElement(r); ) {
      var k = r, x = k.type;
      if (typeof x != "function")
        break;
      f(k, x);
    }
    return { child: r, context: a };
  }
  var at = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== I ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : me(i)) : i = me(i), i = { type: null, domNamespace: Zt.html, children: i, childIndex: 0, context: Ie, footer: "" };
      var x = $[0];
      if (x === 0) {
        var b = $;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(g(304));
        var v = new Uint16Array(S);
        for (v.set(b), $ = v, $[0] = x + 1, b = x; b < S - 1; b++)
          $[b] = b + 1;
        $[S - 1] = 0;
      } else
        $[0] = $[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        $[i] = $[0], $[0] = i;
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
      var f = U;
      U = this;
      var k = ot.current;
      ot.current = rt;
      try {
        for (var x = [""], b = !1; x[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            $[S] = $[0], $[0] = S;
            break;
          }
          var v = this.stack[this.stack.length - 1];
          if (b || v.childIndex >= v.children.length) {
            var J = v.footer;
            if (J !== "" && (this.previousWasTextNode = !1), this.stack.pop(), v.type === "select")
              this.currentSelectValue = null;
            else if (v.type != null && v.type.type != null && v.type.type.$$typeof === T)
              this.popProvider(v.type);
            else if (v.type === D) {
              this.suspenseDepth--;
              var q = x.pop();
              if (b) {
                b = !1;
                var ee = v.fallbackFrame;
                if (!ee)
                  throw Error(g(303));
                this.stack.push(ee), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += q;
            }
            x[this.suspenseDepth] += J;
          } else {
            var z = v.children[v.childIndex++], C = "";
            try {
              C += this.render(z, v.context, v.domNamespace);
            } catch (B) {
              throw B != null && typeof B.then == "function" ? Error(g(294)) : B;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += C;
          }
        }
        return x[0];
      } finally {
        ot.current = k, U = f, et();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Ce(k) : this.previousWasTextNode ? "<!-- -->" + Ce(k) : (this.previousWasTextNode = !0, Ce(k));
      if (f = Qt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? g(257) : g(258, k.toString()));
        return i = me(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, f, k);
      switch (x) {
        case pe:
        case de:
        case M:
        case y:
        case ne:
        case I:
          return i = me(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case D:
          throw Error(g(294));
        case ge:
          throw Error(g(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case m:
            ie = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = me(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case Y:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case T:
            return x = me(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case P:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ye(x, S), x = me(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case Z:
            throw Error(g(338));
          case N:
            return x = i.type, b = x._init, x = b(x._payload), i = [l.createElement(x, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(g(130, x == null ? x : typeof x, ""));
    }, a.renderDOM = function(i, f, k) {
      var x = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(x)) {
        if (!Ye.test(x))
          throw Error(g(65, x));
        Ft[x] = !0;
      }
      var b = i.props;
      if (x === "input")
        b = u({ type: void 0 }, b, { defaultChecked: void 0, defaultValue: void 0, value: b.value != null ? b.value : b.defaultValue, checked: b.checked != null ? b.checked : b.defaultChecked });
      else if (x === "textarea") {
        var S = b.value;
        if (S == null) {
          S = b.defaultValue;
          var v = b.children;
          if (v != null) {
            if (S != null)
              throw Error(g(92));
            if (Array.isArray(v)) {
              if (!(1 >= v.length))
                throw Error(g(93));
              v = v[0];
            }
            S = "" + v;
          }
          S == null && (S = "");
        }
        b = u({}, b, { value: void 0, children: "" + S });
      } else if (x === "select")
        this.currentSelectValue = b.value != null ? b.value : b.defaultValue, b = u({}, b, { value: void 0 });
      else if (x === "option") {
        v = this.currentSelectValue;
        var J = jt(b.children);
        if (v != null) {
          var q = b.value != null ? b.value + "" : J;
          if (S = !1, Array.isArray(v)) {
            for (var ee = 0; ee < v.length; ee++)
              if ("" + v[ee] === q) {
                S = !0;
                break;
              }
          } else
            S = "" + v === q;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: J }
          );
        }
      }
      if (S = b) {
        if (nt[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(g(137, x));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(g(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(g(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(g(62));
      }
      S = b, v = this.makeStaticMarkup, J = this.stack.length === 1, q = "<" + i.type;
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
      for (_ in S)
        if (zt.call(S, _)) {
          var z = S[_];
          if (z != null) {
            if (_ === "style") {
              var C = void 0, B = "", Ee = "";
              for (C in z)
                if (z.hasOwnProperty(C)) {
                  var oe = C.indexOf("--") === 0, ae = z[C];
                  if (ae != null) {
                    if (oe)
                      var ce = C;
                    else if (ce = C, St.hasOwnProperty(ce))
                      ce = St[ce];
                    else {
                      var Ot = ce.replace(je, "-$1").toLowerCase().replace(it, "-ms-");
                      ce = St[ce] = Ot;
                    }
                    B += Ee + ce + ":", Ee = C, oe = ae == null || typeof ae == "boolean" || ae === "" ? "" : oe || typeof ae != "number" || ae === 0 || ue.hasOwnProperty(Ee) && ue[Ee] ? ("" + ae).trim() : ae + "px", B += oe, Ee = ";";
                  }
                }
              z = B || null;
            }
            C = null, ee ? Lt.hasOwnProperty(_) || (C = _, C = ht(C) && z != null ? C + '="' + (Ce(z) + '"') : "") : C = vt(_, z), C && (q += " " + C);
          }
        }
      v || J && (q += ' data-reactroot=""');
      var _ = q;
      S = "", wt.hasOwnProperty(x) ? _ += "/>" : (_ += ">", S = "</" + i.type + ">");
      e: {
        if (v = b.dangerouslySetInnerHTML, v != null) {
          if (v.__html != null) {
            v = v.__html;
            break e;
          }
        } else if (v = b.children, typeof v == "string" || typeof v == "number") {
          v = Ce(v);
          break e;
        }
        v = null;
      }
      return v != null ? (b = [], _t.hasOwnProperty(x) && v.charAt(0) === `
` && (_ += `
`), _ += v) : b = me(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Kt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, _;
    }, r;
  }();
  return Xe.renderToNodeStream = function() {
    throw Error(g(207));
  }, Xe.renderToStaticMarkup = function(r, a) {
    r = new at(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Xe.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, Xe.renderToString = function(r, a) {
    r = new at(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Xe.version = "17.0.2", Xe;
}
var Ze = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Vi() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Ae, l = vn();
    function g(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", I = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
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
    var P = 60106, m = 60107, D = 60108, ne = 60114, Y = 60109, N = 60110, fe = 60112, Z = 60113, ge = 60120, de = 60115, pe = 60116, L = 60121, K = 60117, We = 60119, Ie = 60129, ye = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var j = Symbol.for;
      j("react.element"), P = j("react.portal"), m = j("react.fragment"), D = j("react.strict_mode"), ne = j("react.profiler"), Y = j("react.provider"), N = j("react.context"), fe = j("react.forward_ref"), Z = j("react.suspense"), ge = j("react.suspense_list"), de = j("react.memo"), pe = j("react.lazy"), L = j("react.block"), j("react.server.block"), K = j("react.fundamental"), We = j("react.scope"), j("react.opaque.id"), Ie = j("react.debug_trace_mode"), j("react.offscreen"), ye = j("react.legacy_hidden");
    }
    function $(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Ve(e) {
      return e.displayName || "Context";
    }
    function Q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case P:
          return "Portal";
        case ne:
          return "Profiler";
        case D:
          return "StrictMode";
        case Z:
          return "Suspense";
        case ge:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return Ve(t) + ".Consumer";
          case Y:
            var n = e;
            return Ve(n._context) + ".Provider";
          case fe:
            return $(e, e.render, "ForwardRef");
          case de:
            return Q(e.type);
          case L:
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
    var Dt = !1, Me = 0, pt, ht, Pt, At, G, W, Ke;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function Xt() {
      {
        if (Me === 0) {
          pt = console.log, ht = console.info, Pt = console.warn, At = console.error, G = console.group, W = console.groupCollapsed, Ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
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
        Me++;
      }
    }
    function Ce() {
      {
        if (Me--, Me === 0) {
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
              value: G
            }),
            groupCollapsed: l({}, e, {
              value: W
            }),
            groupEnd: l({}, e, {
              value: Ke
            })
          });
        }
        Me < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vt = I.ReactCurrentDispatcher, gt;
    function Je(e, t, n) {
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
    var ie = !1, Te;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      Te = new A();
    }
    function _e(e, t) {
      if (!e || ie)
        return "";
      {
        var n = Te.get(e);
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
                    var V = `
` + h[O].replace(" at new ", " at ");
                    return typeof e == "function" && Te.set(e, V), V;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, vt.current = p, Ce(), Error.prepareStackTrace = s;
      }
      var X = e ? e.displayName || e.name : "", w = X ? Je(X) : "";
      return typeof e == "function" && Te.set(e, w), w;
    }
    function qe(e, t, n) {
      return _e(e, !1);
    }
    function ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function De(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, ke(e));
      if (typeof e == "string")
        return Je(e);
      switch (e) {
        case Z:
          return Je("Suspense");
        case ge:
          return Je("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case fe:
            return qe(e.render);
          case de:
            return De(e.type, t, n);
          case L:
            return qe(e._render);
          case pe: {
            var o = e, s = o._payload, p = o._init;
            try {
              return De(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = {}, yt = I.ReactDebugCurrentFrame;
    function Fe(e) {
      if (e) {
        var t = e._owner, n = De(e.type, e._source, t ? t.type : null);
        yt.setExtraStackFrame(n);
      } else
        yt.setExtraStackFrame(null);
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
            h && !(h instanceof Error) && (Fe(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof h), Fe(null)), h instanceof Error && !(h.message in Se) && (Se[h.message] = !0, Fe(s), y("Failed %s type: %s", n, h.message), Fe(null));
          }
      }
    }
    var et;
    et = /* @__PURE__ */ new Set();
    var tt = {};
    Object.freeze(tt);
    function mt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return tt;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function bt(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function Be(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function xt(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === N && s._context === void 0
          );
          if (!p && !et.has(e)) {
            et.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === Y ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Q(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Be(s, n), s[n];
        {
          var h = mt(e, t);
          return e.contextTypes && bt(e.contextTypes, h, "context"), h;
        }
      } else {
        var d = mt(e, t);
        return e.contextTypes && bt(e.contextTypes, d, "context"), d;
      }
    }
    for (var U = new Uint16Array(16), rt = 0; rt < 15; rt++)
      U[rt] = rt + 1;
    U[15] = 0;
    function Zt() {
      var e = U, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), U = o, U[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        U[s] = s + 1;
      return U[n - 1] = 0, t;
    }
    function Kt() {
      var e = U[0];
      return e === 0 ? Zt() : (U[0] = U[e], e);
    }
    function wt(e) {
      U[e] = U[0], U[0] = e;
    }
    var nt = 0, ue = 1, kt = 2, je = 3, it = 4, me = 5, ot = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ye = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", St = new RegExp("^[" + _t + "][" + Ye + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Et(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : St.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Qt(e, t, n) {
      return t !== null ? t.type === nt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function at(e, t, n, o) {
      if (n !== null && n.type === nt)
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
      if (t === null || typeof t > "u" || at(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case je:
            return !t;
          case it:
            return t === !1;
          case me:
            return isNaN(t);
          case ot:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, p, c) {
      this.acceptsBooleans = t === kt || t === je || t === it, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      f[t] = new i(
        t,
        ue,
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
        je,
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
        je,
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
        ue,
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
        ue,
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
        ue,
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
        ue,
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
      ue,
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
        ue,
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
    var v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function q(e) {
      !J && v.test(e) && (J = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ee = /["'&<>]/;
    function z(e) {
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
      return typeof e == "boolean" || typeof e == "number" ? "" + e : z(e);
    }
    function B(e) {
      return '"' + C(e) + '"';
    }
    function Ee() {
      return Ft + '=""';
    }
    function oe(e, t) {
      var n = a(e);
      if (e !== "style" && Qt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === je || s === it && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, q(t)), o + "=" + B(t));
      } else if (Et(e))
        return e + "=" + B(t);
      return "";
    }
    function ae(e, t) {
      return !Et(e) || t == null ? "" : e + "=" + B(t);
    }
    function ce(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ot = typeof Object.is == "function" ? Object.is : ce, _ = null, Nt = null, F = null, Rt = !1, Ht = !1, ze = null, Ut = 0, mn = 25, Oe = !1, st;
    function $e() {
      if (_ === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Oe && y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), _;
    }
    function bn(e, t) {
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", st), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, st, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ot(e[n], t[n]))
          return !1;
      return !0;
    }
    function pr() {
      if (Ut > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Jt() {
      return F === null ? Nt === null ? (Rt = !1, Nt = F = pr()) : (Rt = !0, F = Nt) : F.next === null ? (Rt = !1, F = F.next = pr()) : (Rt = !0, F = F.next), F;
    }
    function hr(e) {
      _ = e, Oe = !1;
    }
    function vr(e, t, n, o) {
      for (; Ht; )
        Ht = !1, Ut += 1, F = null, n = e(t, o);
      return gr(), n;
    }
    function gr() {
      Oe = !1, _ = null, Ht = !1, Nt = null, Ut = 0, ze = null, F = null;
    }
    function xn(e, t) {
      var n = lt.threadID;
      return Be(e, n), Oe && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function wn(e, t) {
      st = "useContext", $e();
      var n = lt.threadID;
      return Be(e, n), e[n];
    }
    function er(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function kn(e) {
      return st = "useState", yr(
        er,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function yr(e, t, n) {
      if (e !== er && (st = "useReducer"), _ = $e(), F = Jt(), Rt) {
        var o = F.queue, s = o.dispatch;
        if (ze !== null) {
          var p = ze.get(o);
          if (p !== void 0) {
            ze.delete(o);
            var c = F.memoizedState, h = p;
            do {
              var d = h.action;
              Oe = !0, c = e(c, d), Oe = !1, h = h.next;
            } while (h !== null);
            return F.memoizedState = c, [c, s];
          }
        }
        return [F.memoizedState, s];
      } else {
        Oe = !0;
        var O;
        e === er ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Oe = !1, F.memoizedState = O;
        var R = F.queue = {
          last: null,
          dispatch: null
        }, V = R.dispatch = On.bind(null, _, R);
        return [F.memoizedState, V];
      }
    }
    function mr(e, t) {
      _ = $e(), F = Jt();
      var n = t === void 0 ? null : t;
      if (F !== null) {
        var o = F.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (bn(n, s))
            return o[0];
        }
      }
      Oe = !0;
      var p = e();
      return Oe = !1, F.memoizedState = [p, n], p;
    }
    function Sn(e) {
      _ = $e(), F = Jt();
      var t = F.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), F.memoizedState = n, n;
      } else
        return t;
    }
    function En(e, t) {
      st = "useLayoutEffect", y("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function On(e, t, n) {
      if (!(Ut < mn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === _) {
        Ht = !0;
        var o = {
          action: n,
          next: null
        };
        ze === null && (ze = /* @__PURE__ */ new Map());
        var s = ze.get(t);
        if (s === void 0)
          ze.set(t, o);
        else {
          for (var p = s; p.next !== null; )
            p = p.next;
          p.next = o;
        }
      }
    }
    function Rn(e, t) {
      return mr(function() {
        return e;
      }, t);
    }
    function In(e, t, n) {
      return $e(), t(e._source);
    }
    function Cn(e) {
      return $e(), e;
    }
    function Tn() {
      $e();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function Dn() {
      return (lt.identifierPrefix || "") + "R:" + (lt.uniqueID++).toString(36);
    }
    function tr() {
    }
    var lt = null;
    function br(e) {
      lt = e;
    }
    var Pn = {
      readContext: xn,
      useContext: wn,
      useMemo: mr,
      useReducer: yr,
      useRef: Sn,
      useState: kn,
      useLayoutEffect: En,
      useCallback: Rn,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: tr,
      // Effects are not run in the server environment.
      useEffect: tr,
      // Debugging effect
      useDebugValue: tr,
      useDeferredValue: Cn,
      useTransition: Tn,
      useOpaqueIdentifier: Dn,
      // Subscriptions are not setup in a server environment.
      useMutableSource: In
    }, Wt = "http://www.w3.org/1999/xhtml", xr = "http://www.w3.org/1998/Math/MathML", rr = "http://www.w3.org/2000/svg", nr = {
      html: Wt,
      mathml: xr,
      svg: rr
    };
    function wr(e) {
      switch (e) {
        case "svg":
          return rr;
        case "math":
          return xr;
        default:
          return Wt;
      }
    }
    function An(e, t) {
      return e == null || e === Wt ? wr(t) : e === rr && t === "foreignObject" ? Wt : e;
    }
    var Mn = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ir(e, t) {
      Mn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    var kr = {
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
    }, _n = l({
      menuitem: !0
    }, kr), Fn = "__html";
    function jn(e, t) {
      if (t) {
        if (_n[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Fn in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
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
    function zn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ln = ["Webkit", "ms", "Moz", "O"];
    Object.keys(It).forEach(function(e) {
      Ln.forEach(function(t) {
        It[zn(t, e)] = It[e];
      });
    });
    function Nn(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(It.hasOwnProperty(e) && It[e]) ? t + "px" : ("" + t).trim();
    }
    var Hn = /([A-Z])/g, Un = /^ms-/;
    function Wn(e) {
      return e.replace(Hn, "-$1").toLowerCase().replace(Un, "-ms-");
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
      var Vn = /^(?:webkit|moz|o)[A-Z]/, qn = /^-ms-/, Bn = /-(.)/g, Er = /;\s*$/, ut = {}, ar = {}, Or = !1, Rr = !1, Yn = function(e) {
        return e.replace(Bn, function(t, n) {
          return n.toUpperCase();
        });
      }, $n = function(e) {
        ut.hasOwnProperty(e) && ut[e] || (ut[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Yn(e.replace(qn, "ms-"))
        ));
      }, Gn = function(e) {
        ut.hasOwnProperty(e) && ut[e] || (ut[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Xn = function(e, t) {
        ar.hasOwnProperty(t) && ar[t] || (ar[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Er, "")));
      }, Zn = function(e, t) {
        Or || (Or = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Kn = function(e, t) {
        Rr || (Rr = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sr = function(e, t) {
        e.indexOf("-") > -1 ? $n(e) : Vn.test(e) ? Gn(e) : Er.test(t) && Xn(e, t), typeof t == "number" && (isNaN(t) ? Zn(e, t) : isFinite(t) || Kn(e, t));
      };
    }
    var Qn = Sr, Ir = {
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
    }, ct = {}, Jn = new RegExp("^(aria)-[" + Ye + "]*$"), ei = new RegExp("^(aria)[A-Z][" + Ye + "]*$"), ti = Object.prototype.hasOwnProperty;
    function ri(e, t) {
      {
        if (ti.call(ct, t) && ct[t])
          return !0;
        if (ei.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Ir.hasOwnProperty(n) ? n : null;
          if (o == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ct[t] = !0, !0;
          if (t !== o)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ct[t] = !0, !0;
        }
        if (Jn.test(t)) {
          var s = t.toLowerCase(), p = Ir.hasOwnProperty(s) ? s : null;
          if (p == null)
            return ct[t] = !0, !1;
          if (t !== p)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), ct[t] = !0, !0;
        }
      }
      return !0;
    }
    function ni(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = ri(e, o);
          s || n.push(o);
        }
        var p = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : n.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function ii(e, t) {
      or(e, t) || ni(e, t);
    }
    var Cr = !1;
    function oi(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Cr && (Cr = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Tr = {
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
    }, Dr = function() {
    };
    {
      var te = {}, ai = Object.prototype.hasOwnProperty, Pr = /^on./, si = /^on[^A-Z]/, li = new RegExp("^(aria)-[" + Ye + "]*$"), ui = new RegExp("^(aria)[A-Z][" + Ye + "]*$");
      Dr = function(e, t, n, o) {
        if (ai.call(te, t) && te[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), te[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var h = c.hasOwnProperty(s) ? c[s] : null;
          if (h != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, h), te[t] = !0, !0;
          if (Pr.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), te[t] = !0, !0;
        } else if (Pr.test(t))
          return si.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), te[t] = !0, !0;
        if (li.test(t) || ui.test(t))
          return !0;
        if (s === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), te[t] = !0, !0;
        if (s === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), te[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), te[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), te[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === nt;
        if (Tr.hasOwnProperty(s)) {
          var R = Tr[s];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), te[t] = !0, !0;
        } else if (!O && t !== s)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), te[t] = !0, !0;
        return typeof n == "boolean" && at(t, n, d, !1) ? (n ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), te[t] = !0, !0) : O ? !0 : at(t, n, d, !1) ? (te[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === je && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), te[t] = !0), !0);
      };
    }
    var ci = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var p = Dr(e, s, t[s], n);
          p || o.push(s);
        }
        var c = o.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        o.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function fi(e, t, n) {
      or(e, t) || ci(e, t, n);
    }
    var Le = u.Children.toArray, Pe = [], sr = I.ReactCurrentDispatcher, Vt, lr = null, Ar = function() {
      return "";
    }, Mr = function(e) {
      return "";
    }, _r = function(e, t) {
    }, Fr = function(e) {
    }, jr = function(e) {
    }, zr = function() {
    }, Lr = !1;
    Vt = I.ReactDebugCurrentFrame, _r = function(e, t) {
      ii(e, t), oi(e, t), fi(e, t, null);
    }, Mr = function(e) {
      return De(e.type, e._source, null);
    }, Fr = function(e) {
      Pe.push(e), Pe.length === 1 && (lr = Vt.getCurrentStack, Vt.getCurrentStack = Ar);
    }, jr = function(e) {
      var t = Pe[Pe.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, zr = function() {
      Pe.pop(), Pe.length === 0 && (Vt.getCurrentStack = lr, lr = null);
    }, Ar = function() {
      if (Pe.length === 0)
        return "";
      for (var e = Pe[Pe.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, p = s.length - 1; p >= 0; p--)
          t += Mr(s[p]);
      return t;
    };
    var Nr = !1, Hr = !1, Ur = !1, Wr = !1, Vr = !1, qr = {}, Br = {}, Yr = {}, $r = {}, Gr = {}, Xr = {}, Zr = ["value", "defaultValue"], di = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, pi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Kr = {};
    function hi(e) {
      if (!Kr.hasOwnProperty(e)) {
        if (!pi.test(e))
          throw Error("Invalid tag: " + e);
        Kr[e] = !0;
      }
    }
    var ur = {}, vi = function(e) {
      if (ur.hasOwnProperty(e))
        return ur[e];
      var t = Wn(e);
      return ur[e] = t, t;
    };
    function gi(e) {
      var t = "", n = "";
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          var s = o.indexOf("--") === 0, p = e[o];
          s || Qn(o, p), p != null && (t += n + (s ? o : vi(o)) + ":", t += Nn(o, p, s), n = ";");
        }
      return t || null;
    }
    function Qr(e, t) {
      {
        var n = e.constructor, o = n && Q(n) || "ReactClass", s = o + "." + t;
        if (qr[s])
          return;
        y(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), qr[s] = !0;
      }
    }
    function yi(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function mi(e) {
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
    function bi(e) {
      if (!u.isValidElement(e))
        return Le(e);
      var t = e;
      if (t.type !== m)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return Le(n);
      var o = n;
      return [o];
    }
    function xi(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Vr && typeof n != "string" && typeof n != "number" && (Vr = !0, y("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var wi = Object.prototype.hasOwnProperty, ki = "style", Si = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ei(e, t, n, o, s, p) {
      var c = "<" + e, h = or(t, n);
      for (var d in n)
        if (wi.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === ki && (O = gi(O));
            var R = null;
            h ? Si.hasOwnProperty(d) || (R = ae(d, O)) : R = oe(d, O), R && (c += " " + R);
          }
        }
      return s || p && (c += " " + Ee()), c;
    }
    function Jr(e, t) {
      if (e === void 0)
        throw Error((Q(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Oi(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (jr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, h) {
        var d = yi(h), O = xt(h, t, n, d), R = [], V = !1, X = {
          isMounted: function(Ue) {
            return !1;
          },
          enqueueForceUpdate: function(Ue) {
            if (R === null)
              return Qr(Ue, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Ue, dt) {
            V = !0, R = [dt];
          },
          enqueueSetState: function(Ue, dt) {
            if (R === null)
              return Qr(Ue, "setState"), null;
            R.push(dt);
          }
        }, w;
        if (d) {
          if (w = new h(c.props, O, X), typeof h.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var H = Q(h) || "Unknown";
              Xr[H] || (y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", H, w.state === null ? "null" : "undefined", H), Xr[H] = !0);
            }
            var re = h.getDerivedStateFromProps.call(null, c.props, w.state);
            if (re === void 0) {
              var se = Q(h) || "Unknown";
              Gr[se] || (y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", se), Gr[se] = !0);
            }
            re != null && (w.state = l({}, w.state, re));
          }
        } else {
          if (h.prototype && typeof h.prototype.render == "function") {
            var le = Q(h) || "Unknown";
            Br[le] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", le, le), Br[le] = !0);
          }
          var Ne = {};
          if (hr(Ne), w = h(c.props, O, X), w = vr(h, c.props, w, O), w != null && w.render != null) {
            var he = Q(h) || "Unknown";
            Yr[he] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", he, he, he), Yr[he] = !0);
          }
          if (w == null || w.render == null) {
            e = w, Jr(e, h);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = X;
        var be = w.state;
        if (be === void 0 && (w.state = be = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var He = Q(h) || "Unknown";
              $r[He] || (M(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                He
              ), $r[He] = !0);
            }
            typeof h.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof h.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var ve = R, xe = V;
            if (R = null, V = !1, xe && ve.length === 1)
              w.state = ve[0];
            else {
              for (var Re = xe ? ve[0] : w.state, qt = !0, ft = xe ? 1 : 0; ft < ve.length; ft++) {
                var we = ve[ft], Ct = typeof we == "function" ? we.call(w, Re, c.props, O) : we;
                Ct != null && (qt ? (qt = !1, Re = l({}, Re, Ct)) : l(Re, Ct));
              }
              w.state = Re;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), Jr(e, h);
        var Ge;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = h.childContextTypes;
            if (typeof Bt == "object") {
              Ge = w.getChildContext();
              for (var Yt in Ge)
                if (!(Yt in Bt))
                  throw Error((Q(h) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", Q(h) || "Unknown");
          }
          Ge && (t = l({}, t, Ge));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var en = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var p = bi(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: nr.html,
          children: p,
          childIndex: 0,
          context: tt,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Kt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), wt(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, p = o.type._context, c = this.threadID;
        Be(p, c);
        var h = p[c];
        this.contextStack[s] = p, this.contextValueStack[s] = h, this.contextProviderStack[s] = o, p[c] = o.props.value;
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
        var s = lt;
        br(this);
        var p = sr.current;
        sr.current = Pn;
        try {
          for (var c = [""], h = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, wt(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (h || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === Y) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === Z) {
                this.suspenseDepth--;
                var V = c.pop();
                if (h) {
                  h = !1;
                  var X = d.fallbackFrame;
                  if (!X)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(X), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += V;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var w = d.children[d.childIndex++], H = "";
            Fr(this.stack), d.debugElementStack.length = 0;
            try {
              H += this.render(w, d.context, d.domNamespace);
            } catch (re) {
              if (re != null && typeof re.then == "function") {
                if (!Dt)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw re;
            } finally {
              zr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += H;
          }
          return c[0];
        } finally {
          sr.current = p, br(s), gr();
        }
      }, t.render = function(o, s, p) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? C(c) : this.previousWasTextNode ? "<!-- -->" + C(c) : (this.previousWasTextNode = !0, C(c));
        } else {
          var h, d = Oi(o, s, this.threadID);
          if (h = d.child, s = d.context, h === null || h === !1)
            return "";
          if (!u.isValidElement(h)) {
            if (h != null && h.$$typeof != null) {
              var O = h.$$typeof;
              throw Error(O === P ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Le(h), V = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return V.debugElementStack = [], this.stack.push(V), "";
          }
          var X = h, w = X.type;
          if (typeof w == "string")
            return this.renderDOM(X, s, p);
          switch (w) {
            case ye:
            case Ie:
            case D:
            case ne:
            case ge:
            case m: {
              var H = Le(h.props.children), re = {
                type: null,
                domNamespace: p,
                children: H,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return re.debugElementStack = [], this.stack.push(re), "";
            }
            case Z:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case We:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case fe: {
                var se = h, le, Ne = {};
                hr(Ne), le = w.render(se.props, se.ref), le = vr(w.render, se.props, le, se.ref), le = Le(le);
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
              case de: {
                var be = h, He = [u.createElement(w.type, l({
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
              case Y: {
                var xe = h, Re = xe.props, qt = Le(Re.children), ft = {
                  type: xe,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ft.debugElementStack = [], this.pushProvider(xe), this.stack.push(ft), "";
              }
              case N: {
                var we = h.type;
                we._context === void 0 ? we !== we.Consumer && (Lr || (Lr = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : we = we._context;
                var Ct = h.props, Ge = this.threadID;
                Be(we, Ge);
                var Bt = we[Ge], Yt = Le(Ct.children(Bt)), Ue = {
                  type: h,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Ue.debugElementStack = [], this.stack.push(Ue), "";
              }
              case K:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case pe: {
                var dt = h, tn = h.type, Di = tn._payload, Pi = tn._init, Ai = Pi(Di), Mi = [u.createElement(Ai, l({
                  ref: dt.ref
                }, dt.props))], rn = {
                  type: null,
                  domNamespace: p,
                  children: Mi,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return rn.debugElementStack = [], this.stack.push(rn), "";
              }
            }
          var cr = "";
          {
            var nn = X._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (cr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var on = nn ? Q(nn) : null;
            on && (cr += `

Check the render method of \`` + on + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + cr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), h = p;
        p === nr.html && (h = wr(c)), h === nr.html && c !== o.type && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), hi(c);
        var d = o.props;
        if (c === "input")
          ir("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Hr && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Hr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Nr && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Nr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          ir("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !Wr && (y("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, V = d.children;
            if (V != null) {
              if (y("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(V)) {
                if (!(V.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                V = V[0];
              }
              R = "" + V;
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
            for (var X = 0; X < Zr.length; X++) {
              var w = Zr[X];
              if (d[w] != null) {
                var H = Array.isArray(d[w]);
                d.multiple && !H ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && H && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Ur && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ur = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var re = null, se = this.currentSelectValue, le = xi(d.children);
          if (se != null) {
            var Ne;
            if (d.value != null ? Ne = d.value + "" : Ne = le, re = !1, Array.isArray(se)) {
              for (var he = 0; he < se.length; he++)
                if ("" + se[he] === Ne) {
                  re = !0;
                  break;
                }
            } else
              re = "" + se === Ne;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: re,
              children: le
            });
          }
        }
        _r(c, d), jn(c, d);
        var be = Ei(o.type, c, d, h, this.makeStaticMarkup, this.stack.length === 1), He = "";
        kr.hasOwnProperty(c) ? be += "/>" : (be += ">", He = "</" + o.type + ">");
        var ve, xe = mi(d);
        xe != null ? (ve = [], di.hasOwnProperty(c) && xe.charAt(0) === `
` && (be += `
`), be += xe) : ve = Le(d.children);
        var Re = {
          domNamespace: An(p, o.type),
          type: c,
          children: ve,
          childIndex: 0,
          context: s,
          footer: He
        };
        return Re.debugElementStack = [], this.stack.push(Re), this.previousWasTextNode = !1, be;
      }, e;
    }();
    function Ri(e, t) {
      var n = new en(e, !1, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Ii(e, t) {
      var n = new en(e, !0, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Ci() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Ti() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ze.renderToNodeStream = Ci, Ze.renderToStaticMarkup = Ii, Ze.renderToStaticNodeStream = Ti, Ze.renderToString = Ri, Ze.version = E;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? dr.exports = Wi() : dr.exports = Vi();
var qi = dr.exports;
const Bi = /* @__PURE__ */ Ui(qi);
var gn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, pn = Ae.createContext && /* @__PURE__ */ Ae.createContext(gn), Yi = ["attr", "size", "title"];
function $i(u, l) {
  if (u == null)
    return {};
  var g, E, I = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(u);
    for (E = 0; E < M.length; E++)
      g = M[E], l.indexOf(g) === -1 && {}.propertyIsEnumerable.call(u, g) && (I[g] = u[g]);
  }
  return I;
}
function Gi(u, l) {
  if (u == null)
    return {};
  var g = {};
  for (var E in u)
    if ({}.hasOwnProperty.call(u, E)) {
      if (l.indexOf(E) !== -1)
        continue;
      g[E] = u[E];
    }
  return g;
}
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var g = arguments[l];
      for (var E in g)
        ({}).hasOwnProperty.call(g, E) && (u[E] = g[E]);
    }
    return u;
  }, $t.apply(null, arguments);
}
function hn(u, l) {
  var g = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(I) {
      return Object.getOwnPropertyDescriptor(u, I).enumerable;
    })), g.push.apply(g, E);
  }
  return g;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var g = arguments[l] != null ? arguments[l] : {};
    l % 2 ? hn(Object(g), !0).forEach(function(E) {
      Xi(u, E, g[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g)) : hn(Object(g)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(g, E));
    });
  }
  return u;
}
function Xi(u, l, g) {
  return (l = Zi(l)) in u ? Object.defineProperty(u, l, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = g, u;
}
function Zi(u) {
  var l = Ki(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Ki(u, l) {
  if (typeof u != "object" || !u)
    return u;
  var g = u[Symbol.toPrimitive];
  if (g !== void 0) {
    var E = g.call(u, l || "default");
    if (typeof E != "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function yn(u) {
  return u && u.map((l, g) => /* @__PURE__ */ Ae.createElement(l.tag, Gt({
    key: g
  }, l.attr), yn(l.child)));
}
function Qi(u) {
  return (l) => /* @__PURE__ */ Ae.createElement(Ji, $t({
    attr: Gt({}, u.attr)
  }, l), yn(u.child));
}
function Ji(u) {
  var l = (g) => {
    var {
      attr: E,
      size: I,
      title: M
    } = u, y = $i(u, Yi), T = I || g.size || "1em", P;
    return g.className && (P = g.className), u.className && (P = (P ? P + " " : "") + u.className), /* @__PURE__ */ Ae.createElement("svg", $t({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, g.attr, E, y, {
      className: P,
      style: Gt(Gt({
        color: u.color || g.color
      }, g.style), u.style),
      height: T,
      width: T,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ Ae.createElement("title", null, M), u.children);
  };
  return pn !== void 0 ? /* @__PURE__ */ Ae.createElement(pn.Consumer, null, (g) => l(g)) : l(gn);
}
function eo(u) {
  return Qi({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
const io = Fi(
  ({ data: u, type: l, options: g = {}, height: E = 350, title: I, colors: M }, y) => {
    const T = an(null), P = an(null), [m, D] = ji(!1), ne = sn(() => Bi.renderToString(
      /* @__PURE__ */ Tt(eo, { size: 14, style: { color: "#9ca3af", marginTop: "4px", marginRight: "4px" } })
    ), []), Y = sn(() => {
      var L;
      const N = l || (Array.isArray(u[0]) ? u.map((K) => ln(K)) : ln(u)), fe = Array.isArray(u[0]), Z = Array.isArray(N) ? String(N[0]) : String(N);
      let ge = [], de = [], pe = [];
      if (fe)
        ge = u.map((K, We) => {
          var j;
          const Ie = Array.isArray(N) ? N[We] : N, ye = un(Ie, K);
          return {
            name: `Series ${We + 1}`,
            type: Ie === "funnel" ? "bar" : Ie,
            data: ((j = ye.series[0]) == null ? void 0 : j.data) || ye.series
          };
        });
      else {
        const K = un(Z, u);
        ge = K.series, de = K.labels, pe = K.categories;
      }
      return {
        ...g,
        colors: M || g.colors,
        chart: {
          id: "vizly-chart",
          type: Z === "funnel" || Z === "rangebar" ? "bar" : Z,
          height: "100%",
          toolbar: {
            show: !0,
            tools: {
              customIcons: [{
                icon: ne,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => D(!0)
              }]
            }
          },
          ...g.chart
        },
        series: ge,
        // FIX: Safe access using initialized defaults
        labels: de && de.length > 0 ? de : void 0,
        xaxis: pe && pe.length > 0 ? { ...g.xaxis, categories: pe } : g.xaxis,
        title: {
          text: typeof I == "string" ? I : I == null ? void 0 : I.text,
          align: typeof I == "object" ? I == null ? void 0 : I.align : "left",
          ...g.title
        },
        plotOptions: {
          ...g.plotOptions,
          bar: {
            horizontal: Z === "funnel" || Z === "rangebar",
            isFunnel: Z === "funnel",
            ...(L = g.plotOptions) == null ? void 0 : L.bar
          }
        }
      };
    }, [u, l, g, I, ne, M]);
    return zi(() => {
      if (!T.current)
        return;
      P.current && P.current.destroy(), P.current = new Ni(T.current, Y), P.current.render();
      const N = setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
      return () => {
        var fe;
        clearTimeout(N), (fe = P.current) == null || fe.destroy();
      };
    }, [Y]), Li(y, () => ({
      reset: () => {
        var N;
        return (N = P.current) == null ? void 0 : N.resetSeries();
      },
      toggleFullscreen: () => D(!m)
    })), /* @__PURE__ */ _i("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ Tt("style", { children: `
          .apexcharts-menu { z-index: 1000001 !important; pointer-events: auto !important; }
          .vizly-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000000; }
          .vizly-modal { width: 90%; max-width: 850px; height: 550px; background: white; border-radius: 12px; padding: 20px; position: relative; }
        ` }),
      /* @__PURE__ */ Tt("div", { className: m ? "vizly-overlay" : "", onClick: () => D(!1), children: /* @__PURE__ */ Tt("div", { className: m ? "vizly-modal" : "", onClick: (N) => N.stopPropagation(), style: { height: m ? "550px" : "100%" }, children: /* @__PURE__ */ Tt("div", { ref: T, style: { height: "100%", width: "100%" } }) }) })
    ] });
  }
);
export {
  io as VizlyChart
};
