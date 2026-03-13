import { jsx as mt, jsxs as dr } from "react/jsx-runtime";
import Fe, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as Hi, useEffect as ln, useImperativeHandle as Ui } from "react";
import un from "apexcharts";
function Wi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var hr = { exports: {} }, et = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, cn;
function yn() {
  if (cn)
    return pr;
  cn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function E(M) {
    if (M == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(M);
  }
  function T() {
    try {
      if (!Object.assign)
        return !1;
      var M = new String("abc");
      if (M[5] = "de", Object.getOwnPropertyNames(M)[0] === "5")
        return !1;
      for (var v = {}, C = 0; C < 10; C++)
        v["_" + String.fromCharCode(C)] = C;
      var I = Object.getOwnPropertyNames(v).map(function(m) {
        return v[m];
      });
      if (I.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        A[m] = m;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = T() ? Object.assign : function(M, v) {
    for (var C, I = E(M), A, m = 1; m < arguments.length; m++) {
      C = Object(arguments[m]);
      for (var _ in C)
        l.call(C, _) && (I[_] = C[_]);
      if (u) {
        A = u(C);
        for (var V = 0; V < A.length; V++)
          h.call(C, A[V]) && (I[A[V]] = C[A[V]]);
      }
    }
    return I;
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
var fn;
function Vi() {
  if (fn)
    return et;
  fn = 1;
  var u = yn(), l = Fe;
  function h(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, T = 60107, M = 60108, v = 60114, C = 60109, I = 60110, A = 60112, m = 60113, _ = 60120, V = 60115, Q = 60116, de = 60121, P = 60117, Y = 60119, oe = 60129, re = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var L = Symbol.for;
    E = L("react.portal"), T = L("react.fragment"), M = L("react.strict_mode"), v = L("react.profiler"), C = L("react.provider"), I = L("react.context"), A = L("react.forward_ref"), m = L("react.suspense"), _ = L("react.suspense_list"), V = L("react.memo"), Q = L("react.lazy"), de = L("react.block"), P = L("react.fundamental"), Y = L("react.scope"), oe = L("react.debug_trace_mode"), re = L("react.legacy_hidden");
  }
  function ae(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case T:
        return "Fragment";
      case E:
        return "Portal";
      case v:
        return "Profiler";
      case M:
        return "StrictMode";
      case m:
        return "Suspense";
      case _:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case I:
          return (r.displayName || "Context") + ".Consumer";
        case C:
          return (r._context.displayName || "Context") + ".Provider";
        case A:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case V:
          return ae(r.type);
        case de:
          return ae(r._render);
        case Q:
          a = r._payload, r = r._init;
          try {
            return ae(r(a));
          } catch {
          }
      }
    return null;
  }
  var me = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = {};
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
      a = Ee;
    return a;
  }
  for (var U = new Uint16Array(16), Oe = 0; 15 > Oe; Oe++)
    U[Oe] = Oe + 1;
  U[15] = 0;
  var G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ye = Object.prototype.hasOwnProperty, be = {}, je = {};
  function ze(r) {
    return Ye.call(je, r) ? !0 : Ye.call(be, r) ? !1 : G.test(r) ? je[r] = !0 : (be[r] = !0, !1);
  }
  function $e(r, a, i, f) {
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
  function Xe(r, a, i, f) {
    if (a === null || typeof a > "u" || $e(r, a, i, f))
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
  function q(r, a, i, f, k, w, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = w, this.removeEmptyString = b;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    $[r] = new q(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    $[a] = new q(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    $[r] = new q(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    $[r] = new q(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    $[r] = new q(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    $[r] = new q(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    $[r] = new q(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    $[r] = new q(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    $[r] = new q(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var rt = /[\-:]([a-z])/g;
  function nt(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      rt,
      nt
    );
    $[a] = new q(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(rt, nt);
    $[a] = new q(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(rt, nt);
    $[a] = new q(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    $[r] = new q(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    $[r] = new q(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Zt = /["'&<>]/;
  function Pe(r) {
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
  function bt(r, a) {
    var i = $.hasOwnProperty(r) ? $[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Xe(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Pe(a) + '"'))) : ze(r) ? r + '="' + (Pe(a) + '"') : "";
  }
  function wt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var it = typeof Object.is == "function" ? Object.is : wt, se = null, Ae = null, F = null, Le = !1, Ge = !1, Re = null, Me = 0;
  function Ie() {
    if (se === null)
      throw Error(h(321));
    return se;
  }
  function xt() {
    if (0 < Me)
      throw Error(h(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ne() {
    return F === null ? Ae === null ? (Le = !1, Ae = F = xt()) : (Le = !0, F = Ae) : F.next === null ? (Le = !1, F = F.next = xt()) : (Le = !0, F = F.next), F;
  }
  function Mt(r, a, i, f) {
    for (; Ge; )
      Ge = !1, Me += 1, F = null, i = r(a, f);
    return ot(), i;
  }
  function ot() {
    se = null, Ge = !1, Ae = null, Me = 0, F = Re = null;
  }
  function at(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function kt(r, a, i) {
    if (se = Ie(), F = Ne(), Le) {
      var f = F.queue;
      if (a = f.dispatch, Re !== null && (i = Re.get(f), i !== void 0)) {
        Re.delete(f), f = F.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return F.memoizedState = f, [f, a];
      }
      return [F.memoizedState, a];
    }
    return r = r === at ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, F.memoizedState = r, r = F.queue = { last: null, dispatch: null }, r = r.dispatch = Ze.bind(null, se, r), [F.memoizedState, r];
  }
  function St(r, a) {
    if (se = Ie(), F = Ne(), a = a === void 0 ? null : a, F !== null) {
      var i = F.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!it(a[k], f[k])) {
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
  function Ze(r, a, i) {
    if (!(25 > Me))
      throw Error(h(301));
    if (r === se)
      if (Ge = !0, r = { action: i, next: null }, Re === null && (Re = /* @__PURE__ */ new Map()), i = Re.get(a), i === void 0)
        Re.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function Et() {
  }
  var B = null, st = { readContext: function(r) {
    var a = B.threadID;
    return ve(r, a), r[a];
  }, useContext: function(r) {
    Ie();
    var a = B.threadID;
    return ve(r, a), r[a];
  }, useMemo: St, useReducer: kt, useRef: function(r) {
    se = Ie(), F = Ne();
    var a = F.memoizedState;
    return a === null ? (r = { current: r }, F.memoizedState = r) : a;
  }, useState: function(r) {
    return kt(at, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return St(function() {
      return r;
    }, a);
  }, useImperativeHandle: Et, useEffect: Et, useDebugValue: Et, useDeferredValue: function(r) {
    return Ie(), r;
  }, useTransition: function() {
    return Ie(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (B.identifierPrefix || "") + "R:" + (B.uniqueID++).toString(36);
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
  var Ot = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, lt = u({ menuitem: !0 }, Ot), pe = {
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
  }, Rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pe).forEach(function(r) {
    Rt.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), pe[a] = pe[r];
    });
  });
  var He = /([A-Z])/g, ut = /^ms-/, we = l.Children.toArray, ct = me.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, Ke = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, It = {};
  function jt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var zt = Object.prototype.hasOwnProperty, Lt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function Ct(r, a) {
    if (r === void 0)
      throw Error(h(152, ae(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var y = S.prototype && S.prototype.isReactComponent, ee = N(S, a, i, y), Z = [], te = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (Z === null)
          return null;
      }, enqueueReplaceState: function(Tt, j) {
        te = !0, Z = [j];
      }, enqueueSetState: function(Tt, j) {
        if (Z === null)
          return null;
        Z.push(j);
      } };
      if (y) {
        if (y = new S(b.props, ee, H), typeof S.getDerivedStateFromProps == "function") {
          var D = S.getDerivedStateFromProps.call(null, b.props, y.state);
          D != null && (y.state = u({}, y.state, D));
        }
      } else if (se = {}, y = S(
        b.props,
        ee,
        H
      ), y = Mt(S, b.props, y, ee), y == null || y.render == null) {
        r = y, Ct(r, S);
        return;
      }
      if (y.props = b.props, y.context = ee, y.updater = H, H = y.state, H === void 0 && (y.state = H = null), typeof y.UNSAFE_componentWillMount == "function" || typeof y.componentWillMount == "function")
        if (typeof y.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.UNSAFE_componentWillMount(), Z.length) {
          H = Z;
          var K = te;
          if (Z = null, te = !1, K && H.length === 1)
            y.state = H[0];
          else {
            D = K ? H[0] : y.state;
            var Ce = !0;
            for (K = K ? 1 : 0; K < H.length; K++) {
              var le = H[K];
              le = typeof le == "function" ? le.call(y, D, b.props, ee) : le, le != null && (Ce ? (Ce = !1, D = u({}, D, le)) : u(D, le));
            }
            y.state = D;
          }
        } else
          Z = null;
      if (r = y.render(), Ct(r, S), typeof y.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var ue = y.getChildContext();
        for (var he in ue)
          if (!(he in b))
            throw Error(h(108, ae(S) || "Unknown", he));
      }
      ue && (a = u({}, a, ue));
    }
    for (; l.isValidElement(r); ) {
      var k = r, w = k.type;
      if (typeof w != "function")
        break;
      f(k, w);
    }
    return { child: r, context: a };
  }
  var ft = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== T ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : we(i)) : i = we(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Ee, footer: "" };
      var w = U[0];
      if (w === 0) {
        var b = U;
        w = b.length;
        var S = 2 * w;
        if (!(65536 >= S))
          throw Error(h(304));
        var y = new Uint16Array(S);
        for (y.set(b), U = y, U[0] = w + 1, b = w; b < S - 1; b++)
          U[b] = b + 1;
        U[S - 1] = 0;
      } else
        U[0] = U[w];
      this.threadID = w, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        U[i] = U[0], U[0] = i;
      }
    }, a.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, w = this.threadID;
      ve(k, w);
      var b = k[w];
      this.contextStack[f] = k, this.contextValueStack[f] = b, k[w] = i.props.value;
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
      var k = ct.current;
      ct.current = st;
      try {
        for (var w = [""], b = !1; w[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            U[S] = U[0], U[0] = S;
            break;
          }
          var y = this.stack[this.stack.length - 1];
          if (b || y.childIndex >= y.children.length) {
            var ee = y.footer;
            if (ee !== "" && (this.previousWasTextNode = !1), this.stack.pop(), y.type === "select")
              this.currentSelectValue = null;
            else if (y.type != null && y.type.type != null && y.type.type.$$typeof === C)
              this.popProvider(y.type);
            else if (y.type === m) {
              this.suspenseDepth--;
              var Z = w.pop();
              if (b) {
                b = !1;
                var te = y.fallbackFrame;
                if (!te)
                  throw Error(h(303));
                this.stack.push(te), w[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                w[this.suspenseDepth] += Z;
            }
            w[this.suspenseDepth] += ee;
          } else {
            var H = y.children[y.childIndex++], D = "";
            try {
              D += this.render(H, y.context, y.domNamespace);
            } catch (K) {
              throw K != null && typeof K.then == "function" ? Error(h(294)) : K;
            } finally {
            }
            w.length <= this.suspenseDepth && w.push(""), w[this.suspenseDepth] += D;
          }
        }
        return w[0];
      } finally {
        ct.current = k, B = f, ot();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Pe(k) : this.previousWasTextNode ? "<!-- -->" + Pe(k) : (this.previousWasTextNode = !0, Pe(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? h(257) : h(258, k.toString()));
        return i = we(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var w = i.type;
      if (typeof w == "string")
        return this.renderDOM(i, f, k);
      switch (w) {
        case re:
        case oe:
        case M:
        case v:
        case _:
        case T:
          return i = we(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case m:
          throw Error(h(294));
        case Y:
          throw Error(h(343));
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case A:
            se = {};
            var b = w.render(i.props, i.ref);
            return b = Mt(w.render, i.props, b, i.ref), b = we(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case V:
            return i = [l.createElement(w.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case C:
            return w = we(i.props.children), k = { type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case I:
            w = i.type, b = i.props;
            var S = this.threadID;
            return ve(w, S), w = we(b.children(w[S])), this.stack.push({ type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }), "";
          case P:
            throw Error(h(338));
          case Q:
            return w = i.type, b = w._init, w = b(w._payload), i = [l.createElement(w, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(h(130, w == null ? w : typeof w, ""));
    }, a.renderDOM = function(i, f, k) {
      var w = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(w)) {
        if (!Ke.test(w))
          throw Error(h(65, w));
        Ft[w] = !0;
      }
      var b = i.props;
      if (w === "input")
        b = u({ type: void 0 }, b, { defaultChecked: void 0, defaultValue: void 0, value: b.value != null ? b.value : b.defaultValue, checked: b.checked != null ? b.checked : b.defaultChecked });
      else if (w === "textarea") {
        var S = b.value;
        if (S == null) {
          S = b.defaultValue;
          var y = b.children;
          if (y != null) {
            if (S != null)
              throw Error(h(92));
            if (Array.isArray(y)) {
              if (!(1 >= y.length))
                throw Error(h(93));
              y = y[0];
            }
            S = "" + y;
          }
          S == null && (S = "");
        }
        b = u({}, b, { value: void 0, children: "" + S });
      } else if (w === "select")
        this.currentSelectValue = b.value != null ? b.value : b.defaultValue, b = u({}, b, { value: void 0 });
      else if (w === "option") {
        y = this.currentSelectValue;
        var ee = jt(b.children);
        if (y != null) {
          var Z = b.value != null ? b.value + "" : ee;
          if (S = !1, Array.isArray(y)) {
            for (var te = 0; te < y.length; te++)
              if ("" + y[te] === Z) {
                S = !0;
                break;
              }
          } else
            S = "" + y === Z;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: ee }
          );
        }
      }
      if (S = b) {
        if (lt[w] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(h(137, w));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(h(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(h(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(h(62));
      }
      S = b, y = this.makeStaticMarkup, ee = this.stack.length === 1, Z = "<" + i.type;
      e:
        if (w.indexOf("-") === -1)
          te = typeof S.is == "string";
        else
          switch (w) {
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
          var H = S[j];
          if (H != null) {
            if (j === "style") {
              var D = void 0, K = "", Ce = "";
              for (D in H)
                if (H.hasOwnProperty(D)) {
                  var le = D.indexOf("--") === 0, ue = H[D];
                  if (ue != null) {
                    if (le)
                      var he = D;
                    else if (he = D, It.hasOwnProperty(he))
                      he = It[he];
                    else {
                      var Tt = he.replace(He, "-$1").toLowerCase().replace(ut, "-ms-");
                      he = It[he] = Tt;
                    }
                    K += Ce + he + ":", Ce = D, le = ue == null || typeof ue == "boolean" || ue === "" ? "" : le || typeof ue != "number" || ue === 0 || pe.hasOwnProperty(Ce) && pe[Ce] ? ("" + ue).trim() : ue + "px", K += le, Ce = ";";
                  }
                }
              H = K || null;
            }
            D = null, te ? Lt.hasOwnProperty(j) || (D = j, D = ze(D) && H != null ? D + '="' + (Pe(H) + '"') : "") : D = bt(j, H), D && (Z += " " + D);
          }
        }
      y || ee && (Z += ' data-reactroot=""');
      var j = Z;
      S = "", Ot.hasOwnProperty(w) ? j += "/>" : (j += ">", S = "</" + i.type + ">");
      e: {
        if (y = b.dangerouslySetInnerHTML, y != null) {
          if (y.__html != null) {
            y = y.__html;
            break e;
          }
        } else if (y = b.children, typeof y == "string" || typeof y == "number") {
          y = Pe(y);
          break e;
        }
        y = null;
      }
      return y != null ? (b = [], _t.hasOwnProperty(w) && y.charAt(0) === `
` && (j += `
`), j += y) : b = we(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: w, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, j;
    }, r;
  }();
  return et.renderToNodeStream = function() {
    throw Error(h(207));
  }, et.renderToStaticMarkup = function(r, a) {
    r = new ft(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, et.renderToStaticNodeStream = function() {
    throw Error(h(208));
  }, et.renderToString = function(r, a) {
    r = new ft(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, et.version = "17.0.2", et;
}
var tt = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function qi() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Fe, l = yn();
    function h(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", T = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        C("warn", e, n);
      }
    }
    function v(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        C("error", e, n);
      }
    }
    function C(e, t, n) {
      {
        var o = T.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var p = n.map(function(c) {
          return "" + c;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var I = 60106, A = 60107, m = 60108, _ = 60114, V = 60109, Q = 60110, de = 60112, P = 60113, Y = 60120, oe = 60115, re = 60116, L = 60121, ae = 60117, me = 60119, Ee = 60129, ve = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var N = Symbol.for;
      N("react.element"), I = N("react.portal"), A = N("react.fragment"), m = N("react.strict_mode"), _ = N("react.profiler"), V = N("react.provider"), Q = N("react.context"), de = N("react.forward_ref"), P = N("react.suspense"), Y = N("react.suspense_list"), oe = N("react.memo"), re = N("react.lazy"), L = N("react.block"), N("react.server.block"), ae = N("react.fundamental"), me = N("react.scope"), N("react.opaque.id"), Ee = N("react.debug_trace_mode"), N("react.offscreen"), ve = N("react.legacy_hidden");
    }
    function U(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Oe(e) {
      return e.displayName || "Context";
    }
    function G(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case A:
          return "Fragment";
        case I:
          return "Portal";
        case _:
          return "Profiler";
        case m:
          return "StrictMode";
        case P:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var t = e;
            return Oe(t) + ".Consumer";
          case V:
            var n = e;
            return Oe(n._context) + ".Provider";
          case de:
            return U(e, e.render, "ForwardRef");
          case oe:
            return G(e.type);
          case L:
            return G(e._render);
          case re: {
            var o = e, s = o._payload, p = o._init;
            try {
              return G(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ye = !1, be = 0, je, ze, $e, Xe, q, $, rt;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Zt() {
      {
        if (be === 0) {
          je = console.log, ze = console.info, $e = console.warn, Xe = console.error, q = console.group, $ = console.groupCollapsed, rt = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: nt,
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
        be++;
      }
    }
    function Pe() {
      {
        if (be--, be === 0) {
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
              value: $e
            }),
            error: l({}, e, {
              value: Xe
            }),
            group: l({}, e, {
              value: q
            }),
            groupCollapsed: l({}, e, {
              value: $
            }),
            groupEnd: l({}, e, {
              value: rt
            })
          });
        }
        be < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var bt = T.ReactCurrentDispatcher, wt;
    function it(e, t, n) {
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
    var se = !1, Ae;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new F();
    }
    function Le(e, t) {
      if (!e || se)
        return "";
      {
        var n = Ae.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      se = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = bt.current, bt.current = null, Zt();
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
                    var X = `
` + g[O].replace(" at new ", " at ");
                    return typeof e == "function" && Ae.set(e, X), X;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        se = !1, bt.current = p, Pe(), Error.prepareStackTrace = s;
      }
      var J = e ? e.displayName || e.name : "", x = J ? it(J) : "";
      return typeof e == "function" && Ae.set(e, x), x;
    }
    function Ge(e, t, n) {
      return Le(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Me(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, Re(e));
      if (typeof e == "string")
        return it(e);
      switch (e) {
        case P:
          return it("Suspense");
        case Y:
          return it("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case de:
            return Ge(e.render);
          case oe:
            return Me(e.type, t, n);
          case L:
            return Ge(e._render);
          case re: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Me(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = {}, xt = T.ReactDebugCurrentFrame;
    function Ne(e) {
      if (e) {
        var t = e._owner, n = Me(e.type, e._source, t ? t.type : null);
        xt.setExtraStackFrame(n);
      } else
        xt.setExtraStackFrame(null);
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
            g && !(g instanceof Error) && (Ne(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof g), Ne(null)), g instanceof Error && !(g.message in Ie) && (Ie[g.message] = !0, Ne(s), v("Failed %s type: %s", n, g.message), Ne(null));
          }
      }
    }
    var ot;
    ot = /* @__PURE__ */ new Set();
    var at = {};
    Object.freeze(at);
    function kt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return at;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function St(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function Ze(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Et(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === Q && s._context === void 0
          );
          if (!p && !ot.has(e)) {
            ot.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === V ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", G(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ze(s, n), s[n];
        {
          var g = kt(e, t);
          return e.contextTypes && St(e.contextTypes, g, "context"), g;
        }
      } else {
        var d = kt(e, t);
        return e.contextTypes && St(e.contextTypes, d, "context"), d;
      }
    }
    for (var B = new Uint16Array(16), st = 0; st < 15; st++)
      B[st] = st + 1;
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
    function Ot(e) {
      B[e] = B[0], B[0] = e;
    }
    var lt = 0, pe = 1, Rt = 2, He = 3, ut = 4, we = 5, ct = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ke = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", It = new RegExp("^[" + _t + "][" + Ke + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Ct(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : It.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === lt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ft(e, t, n, o) {
      if (n !== null && n.type === lt)
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
      if (t === null || typeof t > "u" || ft(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case He:
            return !t;
          case ut:
            return t === !1;
          case we:
            return isNaN(t);
          case ct:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, p, c) {
      this.acceptsBooleans = t === Rt || t === He || t === ut, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
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
        lt,
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
        pe,
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
        Rt,
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
        Rt,
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
        He,
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
        He,
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
    }), ["rowSpan", "start"].forEach(function(e) {
      f[e] = new i(
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
    var w = /[\-\:]([a-z])/g, b = function(e) {
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
      var t = e.replace(w, b);
      f[t] = new i(
        t,
        pe,
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
      var t = e.replace(w, b);
      f[t] = new i(
        t,
        pe,
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
      var t = e.replace(w, b);
      f[t] = new i(
        t,
        pe,
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
        pe,
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
      pe,
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
        pe,
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
    var y = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ee = !1;
    function Z(e) {
      !ee && y.test(e) && (ee = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var te = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = te.exec(t);
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
    function D(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function K(e) {
      return '"' + D(e) + '"';
    }
    function Ce() {
      return Ft + '=""';
    }
    function le(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === He || s === ut && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, Z(t)), o + "=" + K(t));
      } else if (Ct(e))
        return e + "=" + K(t);
      return "";
    }
    function ue(e, t) {
      return !Ct(e) || t == null ? "" : e + "=" + K(t);
    }
    function he(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Tt = typeof Object.is == "function" ? Object.is : he, j = null, Nt = null, z = null, Dt = !1, Ht = !1, Ue = null, Ut = 0, kn = 25, Te = !1, dt;
    function Qe() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Te && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", dt), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, dt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tt(e[n], t[n]))
          return !1;
      return !0;
    }
    function vr() {
      if (Ut > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function er() {
      return z === null ? Nt === null ? (Dt = !1, Nt = z = vr()) : (Dt = !0, z = Nt) : z.next === null ? (Dt = !1, z = z.next = vr()) : (Dt = !0, z = z.next), z;
    }
    function gr(e) {
      j = e, Te = !1;
    }
    function yr(e, t, n, o) {
      for (; Ht; )
        Ht = !1, Ut += 1, z = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Te = !1, j = null, Ht = !1, Nt = null, Ut = 0, Ue = null, z = null;
    }
    function En(e, t) {
      var n = pt.threadID;
      return Ze(e, n), Te && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      dt = "useContext", Qe();
      var n = pt.threadID;
      return Ze(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return dt = "useState", br(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function br(e, t, n) {
      if (e !== tr && (dt = "useReducer"), j = Qe(), z = er(), Dt) {
        var o = z.queue, s = o.dispatch;
        if (Ue !== null) {
          var p = Ue.get(o);
          if (p !== void 0) {
            Ue.delete(o);
            var c = z.memoizedState, g = p;
            do {
              var d = g.action;
              Te = !0, c = e(c, d), Te = !1, g = g.next;
            } while (g !== null);
            return z.memoizedState = c, [c, s];
          }
        }
        return [z.memoizedState, s];
      } else {
        Te = !0;
        var O;
        e === tr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Te = !1, z.memoizedState = O;
        var R = z.queue = {
          last: null,
          dispatch: null
        }, X = R.dispatch = Tn.bind(null, j, R);
        return [z.memoizedState, X];
      }
    }
    function wr(e, t) {
      j = Qe(), z = er();
      var n = t === void 0 ? null : t;
      if (z !== null) {
        var o = z.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Sn(n, s))
            return o[0];
        }
      }
      Te = !0;
      var p = e();
      return Te = !1, z.memoizedState = [p, n], p;
    }
    function In(e) {
      j = Qe(), z = er();
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
      dt = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Tn(e, t, n) {
      if (!(Ut < kn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === j) {
        Ht = !0;
        var o = {
          action: n,
          next: null
        };
        Ue === null && (Ue = /* @__PURE__ */ new Map());
        var s = Ue.get(t);
        if (s === void 0)
          Ue.set(t, o);
        else {
          for (var p = s; p.next !== null; )
            p = p.next;
          p.next = o;
        }
      }
    }
    function Dn(e, t) {
      return wr(function() {
        return e;
      }, t);
    }
    function Pn(e, t, n) {
      return Qe(), t(e._source);
    }
    function An(e) {
      return Qe(), e;
    }
    function Mn() {
      Qe();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function _n() {
      return (pt.identifierPrefix || "") + "R:" + (pt.uniqueID++).toString(36);
    }
    function rr() {
    }
    var pt = null;
    function xr(e) {
      pt = e;
    }
    var Fn = {
      readContext: En,
      useContext: On,
      useMemo: wr,
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
      zn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    var Pt = {
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
    function Un(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Wn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pt).forEach(function(e) {
      Wn.forEach(function(t) {
        Pt[Un(t, e)] = Pt[e];
      });
    });
    function Vn(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(Pt.hasOwnProperty(e) && Pt[e]) ? t + "px" : ("" + t).trim();
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
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Rr = /;\s*$/, ht = {}, sr = {}, Ir = !1, Cr = !1, Zn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Kn = function(e) {
        ht.hasOwnProperty(e) && ht[e] || (ht[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        ht.hasOwnProperty(e) && ht[e] || (ht[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jn = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Rr, "")));
      }, ei = function(e, t) {
        Ir || (Ir = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ti = function(e, t) {
        Cr || (Cr = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
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
    }, vt = {}, ni = new RegExp("^(aria)-[" + Ke + "]*$"), ii = new RegExp("^(aria)[A-Z][" + Ke + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(vt, t) && vt[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), vt[t] = !0, !0;
          if (t !== o)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), vt[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), p = Tr.hasOwnProperty(s) ? s : null;
          if (p == null)
            return vt[t] = !0, !1;
          if (t !== p)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), vt[t] = !0, !0;
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
        n.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : n.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
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
        t != null && t.value === null && !Dr && (Dr = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
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
      var ne = {}, ci = Object.prototype.hasOwnProperty, Mr = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + Ke + "]*$"), pi = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
      Ar = function(e, t, n, o) {
        if (ci.call(ne, t) && ne[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ne[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, g), ne[t] = !0, !0;
          if (Mr.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), ne[t] = !0, !0;
        } else if (Mr.test(t))
          return fi.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ne[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ne[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ne[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ne[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ne[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === lt;
        if (Pr.hasOwnProperty(s)) {
          var R = Pr[s];
          if (R !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ne[t] = !0, !0;
        } else if (!O && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), ne[t] = !0, !0;
        return typeof n == "boolean" && ft(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ne[t] = !0, !0) : O ? !0 : ft(t, n, d, !1) ? (ne[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === He && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ne[t] = !0), !0);
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
        o.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function vi(e, t, n) {
      ar(e, t) || hi(e, t, n);
    }
    var We = u.Children.toArray, _e = [], lr = T.ReactCurrentDispatcher, Vt, ur = null, _r = function() {
      return "";
    }, Fr = function(e) {
      return "";
    }, jr = function(e, t) {
    }, zr = function(e) {
    }, Lr = function(e) {
    }, Nr = function() {
    }, Hr = !1;
    Vt = T.ReactDebugCurrentFrame, jr = function(e, t) {
      li(e, t), ui(e, t), vi(e, t, null);
    }, Fr = function(e) {
      return Me(e.type, e._source, null);
    }, zr = function(e) {
      _e.push(e), _e.length === 1 && (ur = Vt.getCurrentStack, Vt.getCurrentStack = _r);
    }, Lr = function(e) {
      var t = _e[_e.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Nr = function() {
      _e.pop(), _e.length === 0 && (Vt.getCurrentStack = ur, ur = null);
    }, _r = function() {
      if (_e.length === 0)
        return "";
      for (var e = _e[_e.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, p = s.length - 1; p >= 0; p--)
          t += Fr(s[p]);
      return t;
    };
    var Ur = !1, Wr = !1, Vr = !1, qr = !1, Br = !1, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = {}, Qr = ["value", "defaultValue"], gi = {
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
    function wi(e) {
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
        var n = e.constructor, o = n && G(n) || "ReactClass", s = o + "." + t;
        if (Yr[s])
          return;
        v(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Yr[s] = !0;
      }
    }
    function xi(e) {
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
        return We(e);
      var t = e;
      if (t.type !== A)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return We(n);
      var o = n;
      return [o];
    }
    function Ei(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Br && typeof n != "string" && typeof n != "number" && (Br = !0, v("Only strings and numbers are supported as <option> children.")));
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
            d === Ri && (O = wi(O));
            var R = null;
            g ? Ii.hasOwnProperty(d) || (R = ue(d, O)) : R = le(d, O), R && (c += " " + R);
          }
        }
      return s || p && (c += " " + Ce()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error((G(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, g) {
        var d = xi(g), O = Et(g, t, n, d), R = [], X = !1, J = {
          isMounted: function(Be) {
            return !1;
          },
          enqueueForceUpdate: function(Be) {
            if (R === null)
              return en(Be, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Be, yt) {
            X = !0, R = [yt];
          },
          enqueueSetState: function(Be, yt) {
            if (R === null)
              return en(Be, "setState"), null;
            R.push(yt);
          }
        }, x;
        if (d) {
          if (x = new g(c.props, O, J), typeof g.getDerivedStateFromProps == "function") {
            if (x.state === null || x.state === void 0) {
              var W = G(g) || "Unknown";
              Kr[W] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", W, x.state === null ? "null" : "undefined", W), Kr[W] = !0);
            }
            var ie = g.getDerivedStateFromProps.call(null, c.props, x.state);
            if (ie === void 0) {
              var ce = G(g) || "Unknown";
              Zr[ce] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", ce), Zr[ce] = !0);
            }
            ie != null && (x.state = l({}, x.state, ie));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var fe = G(g) || "Unknown";
            $r[fe] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", fe, fe), $r[fe] = !0);
          }
          var Ve = {};
          if (gr(Ve), x = g(c.props, O, J), x = yr(g, c.props, x, O), x != null && x.render != null) {
            var ge = G(g) || "Unknown";
            Xr[ge] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ge, ge, ge), Xr[ge] = !0);
          }
          if (x == null || x.render == null) {
            e = x, tn(e, g);
            return;
          }
        }
        x.props = c.props, x.context = O, x.updater = J;
        var xe = x.state;
        if (xe === void 0 && (x.state = xe = null), typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function") {
          if (typeof x.componentWillMount == "function") {
            if (x.componentWillMount.__suppressDeprecationWarning !== !0) {
              var qe = G(g) || "Unknown";
              Gr[qe] || (M(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                qe
              ), Gr[qe] = !0);
            }
            typeof g.getDerivedStateFromProps != "function" && x.componentWillMount();
          }
          if (typeof x.UNSAFE_componentWillMount == "function" && typeof g.getDerivedStateFromProps != "function" && x.UNSAFE_componentWillMount(), R.length) {
            var ye = R, ke = X;
            if (R = null, X = !1, ke && ye.length === 1)
              x.state = ye[0];
            else {
              for (var De = ke ? ye[0] : x.state, qt = !0, gt = ke ? 1 : 0; gt < ye.length; gt++) {
                var Se = ye[gt], At = typeof Se == "function" ? Se.call(x, De, c.props, O) : Se;
                At != null && (qt ? (qt = !1, De = l({}, De, At)) : l(De, At));
              }
              x.state = De;
            }
          } else
            R = null;
        }
        e = x.render(), e === void 0 && x.render._isMockFunction && (e = null), tn(e, g);
        var Je;
        {
          if (typeof x.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Je = x.getChildContext();
              for (var Yt in Je)
                if (!(Yt in Bt))
                  throw Error((G(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", G(g) || "Unknown");
          }
          Je && (t = l({}, t, Je));
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
          context: at,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Ot(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, p = o.type._context, c = this.threadID;
        Ze(p, c);
        var g = p[c];
        this.contextStack[s] = p, this.contextValueStack[s] = g, this.contextProviderStack[s] = o, p[c] = o.props.value;
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
        var s = pt;
        xr(this);
        var p = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], g = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Ot(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (g || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === V) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === P) {
                this.suspenseDepth--;
                var X = c.pop();
                if (g) {
                  g = !1;
                  var J = d.fallbackFrame;
                  if (!J)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(J), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += X;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var x = d.children[d.childIndex++], W = "";
            zr(this.stack), d.debugElementStack.length = 0;
            try {
              W += this.render(x, d.context, d.domNamespace);
            } catch (ie) {
              if (ie != null && typeof ie.then == "function") {
                if (!Ye)
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
          lr.current = p, xr(s), mr();
        }
      }, t.render = function(o, s, p) {
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
              throw Error(O === I ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = We(g), X = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return X.debugElementStack = [], this.stack.push(X), "";
          }
          var J = g, x = J.type;
          if (typeof x == "string")
            return this.renderDOM(J, s, p);
          switch (x) {
            case ve:
            case Ee:
            case m:
            case _:
            case Y:
            case A: {
              var W = We(g.props.children), ie = {
                type: null,
                domNamespace: p,
                children: W,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ie.debugElementStack = [], this.stack.push(ie), "";
            }
            case P:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case me:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof x == "object" && x !== null)
            switch (x.$$typeof) {
              case de: {
                var ce = g, fe, Ve = {};
                gr(Ve), fe = x.render(ce.props, ce.ref), fe = yr(x.render, ce.props, fe, ce.ref), fe = We(fe);
                var ge = {
                  type: null,
                  domNamespace: p,
                  children: fe,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ge.debugElementStack = [], this.stack.push(ge), "";
              }
              case oe: {
                var xe = g, qe = [u.createElement(x.type, l({
                  ref: xe.ref
                }, xe.props))], ye = {
                  type: null,
                  domNamespace: p,
                  children: qe,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ye.debugElementStack = [], this.stack.push(ye), "";
              }
              case V: {
                var ke = g, De = ke.props, qt = We(De.children), gt = {
                  type: ke,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return gt.debugElementStack = [], this.pushProvider(ke), this.stack.push(gt), "";
              }
              case Q: {
                var Se = g.type;
                Se._context === void 0 ? Se !== Se.Consumer && (Hr || (Hr = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : Se = Se._context;
                var At = g.props, Je = this.threadID;
                Ze(Se, Je);
                var Bt = Se[Je], Yt = We(At.children(Bt)), Be = {
                  type: g,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Be.debugElementStack = [], this.stack.push(Be), "";
              }
              case ae:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case re: {
                var yt = g, nn = g.type, _i = nn._payload, Fi = nn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: yt.ref
                }, yt.props))], on = {
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
            var an = J._owner;
            (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? G(an) : null;
            sn && (fr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (x == null ? x : typeof x) + "." + fr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), g = p;
        p === ir.html && (g = Sr(c)), g === ir.html && c !== o.type && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
        var d = o.props;
        if (c === "input")
          or("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Wr && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Ur && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Ur = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !qr && (v("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, X = d.children;
            if (X != null) {
              if (v("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(X)) {
                if (!(X.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                X = X[0];
              }
              R = "" + X;
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
              var x = Qr[J];
              if (d[x] != null) {
                var W = Array.isArray(d[x]);
                d.multiple && !W ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", x) : !d.multiple && W && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", x);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ie = null, ce = this.currentSelectValue, fe = Ei(d.children);
          if (ce != null) {
            var Ve;
            if (d.value != null ? Ve = d.value + "" : Ve = fe, ie = !1, Array.isArray(ce)) {
              for (var ge = 0; ge < ce.length; ge++)
                if ("" + ce[ge] === Ve) {
                  ie = !0;
                  break;
                }
            } else
              ie = "" + ce === Ve;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ie,
              children: fe
            });
          }
        }
        jr(c, d), Hn(c, d);
        var xe = Ci(o.type, c, d, g, this.makeStaticMarkup, this.stack.length === 1), qe = "";
        Er.hasOwnProperty(c) ? xe += "/>" : (xe += ">", qe = "</" + o.type + ">");
        var ye, ke = ki(d);
        ke != null ? (ye = [], gi.hasOwnProperty(c) && ke.charAt(0) === `
` && (xe += `
`), xe += ke) : ye = We(d.children);
        var De = {
          domNamespace: jn(p, o.type),
          type: c,
          children: ye,
          childIndex: 0,
          context: s,
          footer: qe
        };
        return De.debugElementStack = [], this.stack.push(De), this.previousWasTextNode = !1, xe;
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
    tt.renderToNodeStream = Ai, tt.renderToStaticMarkup = Pi, tt.renderToStaticNodeStream = Mi, tt.renderToString = Di, tt.version = E;
  }()), tt;
}
process.env.NODE_ENV === "production" ? hr.exports = Vi() : hr.exports = qi();
var Bi = hr.exports;
const Yi = /* @__PURE__ */ Wi(Bi);
var mn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, pn = Fe.createContext && /* @__PURE__ */ Fe.createContext(mn), $i = ["attr", "size", "title"];
function Xi(u, l) {
  if (u == null)
    return {};
  var h, E, T = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(u);
    for (E = 0; E < M.length; E++)
      h = M[E], l.indexOf(h) === -1 && {}.propertyIsEnumerable.call(u, h) && (T[h] = u[h]);
  }
  return T;
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
function hn(u, l) {
  var h = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(T) {
      return Object.getOwnPropertyDescriptor(u, T).enumerable;
    })), h.push.apply(h, E);
  }
  return h;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var h = arguments[l] != null ? arguments[l] : {};
    l % 2 ? hn(Object(h), !0).forEach(function(E) {
      Zi(u, E, h[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : hn(Object(h)).forEach(function(E) {
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
function bn(u) {
  return u && u.map((l, h) => /* @__PURE__ */ Fe.createElement(l.tag, Gt({
    key: h
  }, l.attr), bn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Fe.createElement(Ji, Xt({
    attr: Gt({}, u.attr)
  }, l), bn(u.child));
}
function Ji(u) {
  var l = (h) => {
    var {
      attr: E,
      size: T,
      title: M
    } = u, v = Xi(u, $i), C = T || h.size || "1em", I;
    return h.className && (I = h.className), u.className && (I = (I ? I + " " : "") + u.className), /* @__PURE__ */ Fe.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, h.attr, E, v, {
      className: I,
      style: Gt(Gt({
        color: u.color || h.color
      }, h.style), u.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ Fe.createElement("title", null, M), u.children);
  };
  return pn !== void 0 ? /* @__PURE__ */ Fe.createElement(pn.Consumer, null, (h) => l(h)) : l(mn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const xn = {
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  bar: "category",
  column: "category",
  radar: "category",
  funnel: "category",
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  polararea: "circular",
  rangebar: "range",
  candlestick: "range",
  boxplot: "range",
  heatmap: "heatmap",
  treemap: "treemap"
}, vn = (u, l) => {
  const h = xn[u] || "xy";
  let E = [], T = [], M = [];
  if (!l || l.length === 0)
    return { series: E, labels: T, categories: M };
  const v = l[0], C = Object.keys(v).filter((A) => typeof v[A] == "number"), I = Object.keys(v).find((A) => typeof v[A] == "string") || "x";
  switch (h) {
    case "circular":
      E = l.map(
        (m) => Number(m.value ?? m.y ?? m[C[0]] ?? m)
      ), T = l.map(
        (m) => String(m.label ?? m.category ?? m.x ?? "")
      );
      break;
    case "category":
      M = l.map(
        (m) => String(m.x ?? m.category ?? m.stage ?? m[I])
      ), E = [
        {
          name: "Series 1",
          data: l.map(
            (m) => Number(m.value ?? m.y ?? m[C[0]] ?? 0)
          )
        }
      ];
      break;
    case "range":
      E = [{
        data: l.map((m) => ({
          x: String(m.x ?? m.date ?? m.category ?? m[I]),
          y: m.y
        }))
      }];
      break;
    case "heatmap":
      E = [...new Set(l.map((m) => m.group ?? "Series 1"))].map((m) => ({
        name: m,
        data: l.filter((_) => (_.group ?? "Series 1") === m).map((_) => ({
          x: String(_.x ?? _.category ?? _[I]),
          y: Number(_.value ?? _.y ?? 0)
        }))
      }));
      break;
    case "treemap":
      E = [{
        data: l.map((m) => ({
          x: String(m.x ?? m.name ?? m.category ?? m[I]),
          y: Number(m.value ?? m.y ?? m[C[0]] ?? 0)
        }))
      }];
      break;
    default:
      E = [{
        name: "Series 1",
        data: l.map((m) => {
          const _ = {
            x: m.x ?? m[I],
            y: m.y ?? m.value ?? 0
          };
          return (m.z !== void 0 || m.r !== void 0) && (_.z = m.z ?? m.r), _;
        })
      }];
      break;
  }
  return { series: E, labels: T, categories: M };
}, gn = (u) => {
  if (!u || !Array.isArray(u) || u.length === 0)
    return "bar";
  const l = u[0];
  if (typeof l == "number")
    return "donut";
  if (typeof l != "object" || l === null)
    return "bar";
  if (Array.isArray(l.y)) {
    if (l.y.length === 5)
      return "boxplot";
    if (l.y.length === 4)
      return "candlestick";
    if (l.y.length === 2)
      return "rangebar";
  }
  return l.open !== void 0 && l.close !== void 0 ? "candlestick" : l.min !== void 0 && l.max !== void 0 ? "boxplot" : l.start !== void 0 && l.end !== void 0 ? "rangebar" : l.r !== void 0 || l.z !== void 0 ? "bubble" : l.stage !== void 0 ? "funnel" : l.group !== void 0 ? "heatmap" : l.name !== void 0 && l.value !== void 0 ? "treemap" : l.label !== void 0 && l.value !== void 0 ? "donut" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : typeof l.x == "string" && !isNaN(Date.parse(l.x)) ? "line" : "bar";
}, ro = (u, l) => {
  if (!l || !Array.isArray(l) || l.length === 0)
    return [];
  if (Array.isArray(l[0])) {
    const M = l, v = [];
    let C = [], I = [];
    const A = "line";
    return M.forEach((m, _) => {
      var de, P;
      const V = Array.isArray(u) ? u[_] ?? u[0] : typeof u == "string" ? u : gn(m), Q = vn(V, m);
      Q.series && Array.isArray(Q.series) && Q.series.forEach((Y) => {
        v.push({
          ...Y,
          type: V === "column" ? "bar" : V,
          // Map column back to bar for Apex series
          name: Y.name || `Series ${v.length + 1}`
        });
      }), (((de = Q.labels) == null ? void 0 : de.length) ?? 0) > C.length && (C = Q.labels), (((P = Q.categories) == null ? void 0 : P.length) ?? 0) > I.length && (I = Q.categories);
    }), [
      {
        type: A,
        series: v,
        labels: C,
        categories: I
      }
    ];
  }
  const h = l, E = typeof u == "string" ? u : gn(h), T = vn(E, h);
  return [
    {
      type: E,
      ...T
    }
  ];
}, ao = Li(
  ({ data: u, type: l, options: h = {}, height: E = 350, title: T }, M) => {
    const v = $t(null), C = $t(null), I = $t(null), A = $t(null), [m, _] = Ni(!1), V = Hi(
      () => Yi.renderToString(
        /* @__PURE__ */ mt(eo, { size: 14, style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" } })
      ),
      []
    ), Q = (P) => {
      const Y = String(P).toLowerCase();
      return Y === "column" ? "bar" : Y === "rangebar" ? "rangeBar" : Y === "funnel" ? "bar" : Y;
    }, de = (P) => {
      var Oe, G, Ye, be, je, ze, $e, Xe;
      const Y = ro(l, u);
      if (!Y || Y.length === 0)
        return { series: [] };
      const { type: oe, series: re, labels: L, categories: ae } = Y[0], me = String(oe).toLowerCase(), Ee = xn[me] || "xy", ve = Ee === "circular", N = me === "radar";
      let U = re;
      return ve && (Array.isArray(re) && ((Oe = re[0]) != null && Oe.data) ? U = re[0].data : Array.isArray(re) && typeof re[0] == "object" && (U = re.map((q) => q.y ?? q.value ?? 0))), {
        ...h,
        chart: {
          id: P ? "vizly-modal-chart" : "vizly-main-chart",
          type: Q(me),
          height: "100%",
          width: "100%",
          // Fix: Containment
          animations: { enabled: !0, speed: 800 },
          toolbar: {
            show: !0,
            tools: {
              customIcons: P ? [] : [{
                icon: V,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => _(!0)
              }]
            }
          },
          ...h.chart
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 },
          // Fix: X-axis bleed
          ...h.grid
        },
        series: U,
        labels: ve || N ? L != null && L.length ? L : ae : void 0,
        xaxis: {
          // Fix: Heatmap and Range charts MUST have 'category' or 'datetime' type
          type: Ee === "category" || Ee === "heatmap" || Ee === "range" ? "category" : ((G = h.xaxis) == null ? void 0 : G.type) || "category",
          categories: ve || N ? void 0 : ae != null && ae.length ? ae : void 0,
          ...h.xaxis
        },
        plotOptions: {
          ...h.plotOptions,
          bar: {
            horizontal: me === "funnel" || me === "rangebar",
            isFunnel: me === "funnel",
            ...(Ye = h.plotOptions) == null ? void 0 : Ye.bar
          },
          heatmap: {
            enableShades: !0,
            colorScale: { ranges: ((ze = (je = (be = h.plotOptions) == null ? void 0 : be.heatmap) == null ? void 0 : je.colorScale) == null ? void 0 : ze.ranges) || [] }
          }
        },
        title: {
          text: typeof T == "string" ? T : (T == null ? void 0 : T.text) || (($e = h.title) == null ? void 0 : $e.text),
          align: typeof T == "object" ? T.align : ((Xe = h.title) == null ? void 0 : Xe.align) || "left"
        },
        tooltip: { theme: "dark", ...h.tooltip }
      };
    };
    return ln(() => {
      let P = !0;
      return (async () => {
        if (I.current && await I.current.destroy(), !P || !v.current)
          return;
        v.current.innerHTML = "";
        const oe = de(!1);
        I.current = new un(v.current, oe), await I.current.render();
      })(), () => {
        var oe;
        P = !1, (oe = I.current) == null || oe.destroy();
      };
    }, [u, l, h]), ln(() => {
      if (m && C.current) {
        const P = setTimeout(async () => {
          A.current && await A.current.destroy(), C.current.innerHTML = "", A.current = new un(C.current, de(!0)), await A.current.render();
        }, 350);
        return () => clearTimeout(P);
      }
    }, [m]), Ui(M, () => ({
      zoomIn: () => {
        var P;
        return (P = I.current) == null ? void 0 : P.zoomX(0, 100);
      },
      zoomOut: () => {
        var P;
        return (P = I.current) == null ? void 0 : P.zoomX(0, 100);
      },
      reset: () => {
        var P;
        return (P = I.current) == null ? void 0 : P.resetSeries();
      },
      toggleFullscreen: () => _(!m)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ mt("div", { ref: v, style: { height: "100%", width: "100%", overflow: "hidden" } }),
      m && /* @__PURE__ */ dr("div", { style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "vizlyFadeIn 0.1s ease-out",
        backdropFilter: "blur(5px)"
      }, children: [
        /* @__PURE__ */ mt("style", { children: `
              @keyframes vizlyFadeIn { from { opacity: 0; } to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            ` }),
        /* @__PURE__ */ dr("div", { style: {
          width: "90%",
          height: "80%",
          background: "#fff",
          borderRadius: "16px",
          padding: "40px",
          position: "relative",
          animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }, children: [
          /* @__PURE__ */ mt("button", { onClick: () => _(!1), style: { position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" }, children: /* @__PURE__ */ mt(to, { size: 18 }) }),
          /* @__PURE__ */ mt("div", { ref: C, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  ao as VizlyChart
};
