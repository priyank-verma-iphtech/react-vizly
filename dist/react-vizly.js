import { jsx as Ze, jsxs as Xt, Fragment as Wi } from "react/jsx-runtime";
import He, { forwardRef as Vi, useRef as Gt, useState as fn, useMemo as dn, useEffect as pr, useImperativeHandle as qi } from "react";
import pn from "apexcharts";
function Bi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var gr = { exports: {} }, nt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hr, hn;
function wn() {
  if (hn)
    return hr;
  hn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
  function E(_) {
    if (_ == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(_);
  }
  function D() {
    try {
      if (!Object.assign)
        return !1;
      var _ = new String("abc");
      if (_[5] = "de", Object.getOwnPropertyNames(_)[0] === "5")
        return !1;
      for (var v = {}, C = 0; C < 10; C++)
        v["_" + String.fromCharCode(C)] = C;
      var I = Object.getOwnPropertyNames(v).map(function(T) {
        return v[T];
      });
      if (I.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        p[T] = T;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return hr = D() ? Object.assign : function(_, v) {
    for (var C, I = E(_), p, T = 1; T < arguments.length; T++) {
      C = Object(arguments[T]);
      for (var j in C)
        l.call(C, j) && (I[j] = C[j]);
      if (u) {
        p = u(C);
        for (var W = 0; W < p.length; W++)
          g.call(C, p[W]) && (I[p[W]] = C[p[W]]);
      }
    }
    return I;
  }, hr;
}
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Yi() {
  if (vn)
    return nt;
  vn = 1;
  var u = wn(), l = He;
  function g(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, D = 60107, _ = 60108, v = 60114, C = 60109, I = 60110, p = 60112, T = 60113, j = 60120, W = 60115, te = 60116, Q = 60121, pe = 60117, ye = 60119, he = 60129, z = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var P = Symbol.for;
    E = P("react.portal"), D = P("react.fragment"), _ = P("react.strict_mode"), v = P("react.profiler"), C = P("react.provider"), I = P("react.context"), p = P("react.forward_ref"), T = P("react.suspense"), j = P("react.suspense_list"), W = P("react.memo"), te = P("react.lazy"), Q = P("react.block"), pe = P("react.fundamental"), ye = P("react.scope"), he = P("react.debug_trace_mode"), z = P("react.legacy_hidden");
  }
  function ie(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case D:
        return "Fragment";
      case E:
        return "Portal";
      case v:
        return "Profiler";
      case _:
        return "StrictMode";
      case T:
        return "Suspense";
      case j:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case I:
          return (r.displayName || "Context") + ".Consumer";
        case C:
          return (r._context.displayName || "Context") + ".Provider";
        case p:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case W:
          return ie(r.type);
        case Q:
          return ie(r._render);
        case te:
          a = r._payload, r = r._init;
          try {
            return ie(r(a));
          } catch {
          }
      }
    return null;
  }
  var se = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = {};
  function q(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function M(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return q(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = ke;
    return a;
  }
  for (var B = new Uint16Array(16), Se = 0; 15 > Se; Se++)
    B[Se] = Se + 1;
  B[15] = 0;
  var K = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ot = Object.prototype.hasOwnProperty, Ee = {}, _e = {};
  function Ke(r) {
    return ot.call(_e, r) ? !0 : ot.call(Ee, r) ? !1 : K.test(r) ? _e[r] = !0 : (Ee[r] = !0, !1);
  }
  function at(r, a, i, f) {
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
  function st(r, a, i, f) {
    if (a === null || typeof a > "u" || at(r, a, i, f))
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
  function Y(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    U[r] = new Y(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    U[a] = new Y(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    U[r] = new Y(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    U[r] = new Y(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    U[r] = new Y(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    U[r] = new Y(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    U[r] = new Y(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    U[r] = new Y(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    U[r] = new Y(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Fe = /[\-:]([a-z])/g;
  function je(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Fe,
      je
    );
    U[a] = new Y(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Fe, je);
    U[a] = new Y(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Fe, je);
    U[a] = new Y(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    U[r] = new Y(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    U[r] = new Y(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var lt = /["'&<>]/;
  function me(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var a = lt.exec(r);
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
  function Ue(r, a) {
    var i = U.hasOwnProperty(r) ? U[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || st(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (me(a) + '"'))) : Ke(r) ? r + '="' + (me(a) + '"') : "";
  }
  function le(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var ze = typeof Object.is == "function" ? Object.is : le, J = null, be = null, F = null, We = !1, Qe = !1, Te = null, Le = 0;
  function De() {
    if (J === null)
      throw Error(g(321));
    return J;
  }
  function kt() {
    if (0 < Le)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ve() {
    return F === null ? be === null ? (We = !1, be = F = kt()) : (We = !0, F = be) : F.next === null ? (We = !1, F = F.next = kt()) : (We = !0, F = F.next), F;
  }
  function _t(r, a, i, f) {
    for (; Qe; )
      Qe = !1, Le += 1, F = null, i = r(a, f);
    return ut(), i;
  }
  function ut() {
    J = null, Qe = !1, be = null, Le = 0, F = Te = null;
  }
  function ct(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function St(r, a, i) {
    if (J = De(), F = Ve(), We) {
      var f = F.queue;
      if (a = f.dispatch, Te !== null && (i = Te.get(f), i !== void 0)) {
        Te.delete(f), f = F.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return F.memoizedState = f, [f, a];
      }
      return [F.memoizedState, a];
    }
    return r = r === ct ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, F.memoizedState = r, r = F.queue = { last: null, dispatch: null }, r = r.dispatch = Je.bind(null, J, r), [F.memoizedState, r];
  }
  function Et(r, a) {
    if (J = De(), F = Ve(), a = a === void 0 ? null : a, F !== null) {
      var i = F.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!ze(a[k], f[k])) {
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
  function Je(r, a, i) {
    if (!(25 > Le))
      throw Error(g(301));
    if (r === J)
      if (Qe = !0, r = { action: i, next: null }, Te === null && (Te = /* @__PURE__ */ new Map()), i = Te.get(a), i === void 0)
        Te.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function Ot() {
  }
  var $ = null, ft = { readContext: function(r) {
    var a = $.threadID;
    return q(r, a), r[a];
  }, useContext: function(r) {
    De();
    var a = $.threadID;
    return q(r, a), r[a];
  }, useMemo: Et, useReducer: St, useRef: function(r) {
    J = De(), F = Ve();
    var a = F.memoizedState;
    return a === null ? (r = { current: r }, F.memoizedState = r) : a;
  }, useState: function(r) {
    return St(ct, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return Et(function() {
      return r;
    }, a);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(r) {
    return De(), r;
  }, useTransition: function() {
    return De(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return ($.identifierPrefix || "") + "R:" + ($.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return De(), a(r._source);
  } }, Qt = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Jt(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  var Rt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, dt = u({ menuitem: !0 }, Rt), ve = {
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
  Object.keys(ve).forEach(function(r) {
    It.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), ve[a] = ve[r];
    });
  });
  var qe = /([A-Z])/g, pt = /^ms-/, Oe = l.Children.toArray, ht = se.ReactCurrentDispatcher, Ft = { listing: !0, pre: !0, textarea: !0 }, et = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, jt = {}, Ct = {};
  function zt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var Lt = Object.prototype.hasOwnProperty, Nt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function Tt(r, a) {
    if (r === void 0)
      throw Error(g(152, ie(a) || "Component"));
  }
  function er(r, a, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, re = M(S, a, i, m), G = [], ne = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (G === null)
          return null;
      }, enqueueReplaceState: function(Dt, L) {
        ne = !0, G = [L];
      }, enqueueSetState: function(Dt, L) {
        if (G === null)
          return null;
        G.push(L);
      } };
      if (m) {
        if (m = new S(b.props, re, H), typeof S.getDerivedStateFromProps == "function") {
          var A = S.getDerivedStateFromProps.call(null, b.props, m.state);
          A != null && (m.state = u({}, m.state, A));
        }
      } else if (J = {}, m = S(
        b.props,
        re,
        H
      ), m = _t(S, b.props, m, re), m == null || m.render == null) {
        r = m, Tt(r, S);
        return;
      }
      if (m.props = b.props, m.context = re, m.updater = H, H = m.state, H === void 0 && (m.state = H = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), G.length) {
          H = G;
          var Z = ne;
          if (G = null, ne = !1, Z && H.length === 1)
            m.state = H[0];
          else {
            A = Z ? H[0] : m.state;
            var Pe = !0;
            for (Z = Z ? 1 : 0; Z < H.length; Z++) {
              var ue = H[Z];
              ue = typeof ue == "function" ? ue.call(m, A, b.props, re) : ue, ue != null && (Pe ? (Pe = !1, A = u({}, A, ue)) : u(A, ue));
            }
            m.state = A;
          }
        } else
          G = null;
      if (r = m.render(), Tt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var ce = m.getChildContext();
        for (var ge in ce)
          if (!(ge in b))
            throw Error(g(108, ie(S) || "Unknown", ge));
      }
      ce && (a = u({}, a, ce));
    }
    for (; l.isValidElement(r); ) {
      var k = r, x = k.type;
      if (typeof x != "function")
        break;
      f(k, x);
    }
    return { child: r, context: a };
  }
  var vt = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== D ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : Oe(i)) : i = Oe(i), i = { type: null, domNamespace: Qt.html, children: i, childIndex: 0, context: ke, footer: "" };
      var x = B[0];
      if (x === 0) {
        var b = B;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(g(304));
        var m = new Uint16Array(S);
        for (m.set(b), B = m, B[0] = x + 1, b = x; b < S - 1; b++)
          B[b] = b + 1;
        B[S - 1] = 0;
      } else
        B[0] = B[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        B[i] = B[0], B[0] = i;
      }
    }, a.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, x = this.threadID;
      q(k, x);
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
      var f = $;
      $ = this;
      var k = ht.current;
      ht.current = ft;
      try {
        for (var x = [""], b = !1; x[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            B[S] = B[0], B[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (b || m.childIndex >= m.children.length) {
            var re = m.footer;
            if (re !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === C)
              this.popProvider(m.type);
            else if (m.type === T) {
              this.suspenseDepth--;
              var G = x.pop();
              if (b) {
                b = !1;
                var ne = m.fallbackFrame;
                if (!ne)
                  throw Error(g(303));
                this.stack.push(ne), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += G;
            }
            x[this.suspenseDepth] += re;
          } else {
            var H = m.children[m.childIndex++], A = "";
            try {
              A += this.render(H, m.context, m.domNamespace);
            } catch (Z) {
              throw Z != null && typeof Z.then == "function" ? Error(g(294)) : Z;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += A;
          }
        }
        return x[0];
      } finally {
        ht.current = k, $ = f, ut();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? me(k) : this.previousWasTextNode ? "<!-- -->" + me(k) : (this.previousWasTextNode = !0, me(k));
      if (f = er(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? g(257) : g(258, k.toString()));
        return i = Oe(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, f, k);
      switch (x) {
        case z:
        case he:
        case _:
        case v:
        case j:
        case D:
          return i = Oe(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case T:
          throw Error(g(294));
        case ye:
          throw Error(g(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case p:
            J = {};
            var b = x.render(i.props, i.ref);
            return b = _t(x.render, i.props, b, i.ref), b = Oe(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case W:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case C:
            return x = Oe(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case I:
            x = i.type, b = i.props;
            var S = this.threadID;
            return q(x, S), x = Oe(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case pe:
            throw Error(g(338));
          case te:
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
      if (!jt.hasOwnProperty(x)) {
        if (!et.test(x))
          throw Error(g(65, x));
        jt[x] = !0;
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
              throw Error(g(92));
            if (Array.isArray(m)) {
              if (!(1 >= m.length))
                throw Error(g(93));
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
        var re = zt(b.children);
        if (m != null) {
          var G = b.value != null ? b.value + "" : re;
          if (S = !1, Array.isArray(m)) {
            for (var ne = 0; ne < m.length; ne++)
              if ("" + m[ne] === G) {
                S = !0;
                break;
              }
          } else
            S = "" + m === G;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: re }
          );
        }
      }
      if (S = b) {
        if (dt[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, m = this.makeStaticMarkup, re = this.stack.length === 1, G = "<" + i.type;
      e:
        if (x.indexOf("-") === -1)
          ne = typeof S.is == "string";
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
              ne = !1;
              break e;
            default:
              ne = !0;
          }
      for (L in S)
        if (Lt.call(S, L)) {
          var H = S[L];
          if (H != null) {
            if (L === "style") {
              var A = void 0, Z = "", Pe = "";
              for (A in H)
                if (H.hasOwnProperty(A)) {
                  var ue = A.indexOf("--") === 0, ce = H[A];
                  if (ce != null) {
                    if (ue)
                      var ge = A;
                    else if (ge = A, Ct.hasOwnProperty(ge))
                      ge = Ct[ge];
                    else {
                      var Dt = ge.replace(qe, "-$1").toLowerCase().replace(pt, "-ms-");
                      ge = Ct[ge] = Dt;
                    }
                    Z += Pe + ge + ":", Pe = A, ue = ce == null || typeof ce == "boolean" || ce === "" ? "" : ue || typeof ce != "number" || ce === 0 || ve.hasOwnProperty(Pe) && ve[Pe] ? ("" + ce).trim() : ce + "px", Z += ue, Pe = ";";
                  }
                }
              H = Z || null;
            }
            A = null, ne ? Nt.hasOwnProperty(L) || (A = L, A = Ke(A) && H != null ? A + '="' + (me(H) + '"') : "") : A = Ue(L, H), A && (G += " " + A);
          }
        }
      m || re && (G += ' data-reactroot=""');
      var L = G;
      S = "", Rt.hasOwnProperty(x) ? L += "/>" : (L += ">", S = "</" + i.type + ">");
      e: {
        if (m = b.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = b.children, typeof m == "string" || typeof m == "number") {
          m = me(m);
          break e;
        }
        m = null;
      }
      return m != null ? (b = [], Ft.hasOwnProperty(x) && m.charAt(0) === `
` && (L += `
`), L += m) : b = Oe(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Jt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, L;
    }, r;
  }();
  return nt.renderToNodeStream = function() {
    throw Error(g(207));
  }, nt.renderToStaticMarkup = function(r, a) {
    r = new vt(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, nt.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, nt.renderToString = function(r, a) {
    r = new vt(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, nt.version = "17.0.2", nt;
}
var it = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function $i() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = He, l = wn();
    function g(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", D = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
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
        var o = D.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var I = 60106, p = 60107, T = 60108, j = 60114, W = 60109, te = 60110, Q = 60112, pe = 60113, ye = 60120, he = 60115, z = 60116, P = 60121, ie = 60117, se = 60119, ke = 60129, q = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var M = Symbol.for;
      M("react.element"), I = M("react.portal"), p = M("react.fragment"), T = M("react.strict_mode"), j = M("react.profiler"), W = M("react.provider"), te = M("react.context"), Q = M("react.forward_ref"), pe = M("react.suspense"), ye = M("react.suspense_list"), he = M("react.memo"), z = M("react.lazy"), P = M("react.block"), M("react.server.block"), ie = M("react.fundamental"), se = M("react.scope"), M("react.opaque.id"), ke = M("react.debug_trace_mode"), M("react.offscreen"), q = M("react.legacy_hidden");
    }
    function B(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Se(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case I:
          return "Portal";
        case j:
          return "Profiler";
        case T:
          return "StrictMode";
        case pe:
          return "Suspense";
        case ye:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case te:
            var t = e;
            return Se(t) + ".Consumer";
          case W:
            var n = e;
            return Se(n._context) + ".Provider";
          case Q:
            return B(e, e.render, "ForwardRef");
          case he:
            return K(e.type);
          case P:
            return K(e._render);
          case z: {
            var o = e, s = o._payload, h = o._init;
            try {
              return K(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ot = !1, Ee = 0, _e, Ke, at, st, Y, U, Fe;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function lt() {
      {
        if (Ee === 0) {
          _e = console.log, Ke = console.info, at = console.warn, st = console.error, Y = console.group, U = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
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
        Ee++;
      }
    }
    function me() {
      {
        if (Ee--, Ee === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: _e
            }),
            info: l({}, e, {
              value: Ke
            }),
            warn: l({}, e, {
              value: at
            }),
            error: l({}, e, {
              value: st
            }),
            group: l({}, e, {
              value: Y
            }),
            groupCollapsed: l({}, e, {
              value: U
            }),
            groupEnd: l({}, e, {
              value: Fe
            })
          });
        }
        Ee < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ue = D.ReactCurrentDispatcher, le;
    function ze(e, t, n) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            le = o && o[1] || "";
          }
        return `
` + le + e;
      }
    }
    var J = !1, be;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      be = new F();
    }
    function We(e, t) {
      if (!e || J)
        return "";
      {
        var n = be.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      J = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = Ue.current, Ue.current = null, lt();
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
            } catch (V) {
              o = V;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (V) {
              o = V;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            o = V;
          }
          e();
        }
      } catch (V) {
        if (V && o && typeof V.stack == "string") {
          for (var y = V.stack.split(`
`), d = o.stack.split(`
`), O = y.length - 1, R = d.length - 1; O >= 1 && R >= 0 && y[O] !== d[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (y[O] !== d[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || y[O] !== d[R]) {
                    var X = `
` + y[O].replace(" at new ", " at ");
                    return typeof e == "function" && be.set(e, X), X;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        J = !1, Ue.current = h, me(), Error.prepareStackTrace = s;
      }
      var ee = e ? e.displayName || e.name : "", w = ee ? ze(ee) : "";
      return typeof e == "function" && be.set(e, w), w;
    }
    function Qe(e, t, n) {
      return We(e, !1);
    }
    function Te(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Le(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return We(e, Te(e));
      if (typeof e == "string")
        return ze(e);
      switch (e) {
        case pe:
          return ze("Suspense");
        case ye:
          return ze("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return Qe(e.render);
          case he:
            return Le(e.type, t, n);
          case P:
            return Qe(e._render);
          case z: {
            var o = e, s = o._payload, h = o._init;
            try {
              return Le(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var De = {}, kt = D.ReactDebugCurrentFrame;
    function Ve(e) {
      if (e) {
        var t = e._owner, n = Le(e.type, e._source, t ? t.type : null);
        kt.setExtraStackFrame(n);
      } else
        kt.setExtraStackFrame(null);
    }
    function _t(e, t, n, o, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
            var y = void 0;
            try {
              if (typeof e[c] != "function") {
                var d = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              y = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              y = O;
            }
            y && !(y instanceof Error) && (Ve(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof y), Ve(null)), y instanceof Error && !(y.message in De) && (De[y.message] = !0, Ve(s), v("Failed %s type: %s", n, y.message), Ve(null));
          }
      }
    }
    var ut;
    ut = /* @__PURE__ */ new Set();
    var ct = {};
    Object.freeze(ct);
    function St(e, t) {
      var n = e.contextTypes;
      if (!n)
        return ct;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function Et(e, t, n) {
      _t(e, t, n, "Component");
    }
    function Je(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Ot(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === te && s._context === void 0
          );
          if (!h && !ut.has(e)) {
            ut.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === W ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", K(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Je(s, n), s[n];
        {
          var y = St(e, t);
          return e.contextTypes && Et(e.contextTypes, y, "context"), y;
        }
      } else {
        var d = St(e, t);
        return e.contextTypes && Et(e.contextTypes, d, "context"), d;
      }
    }
    for (var $ = new Uint16Array(16), ft = 0; ft < 15; ft++)
      $[ft] = ft + 1;
    $[15] = 0;
    function Qt() {
      var e = $, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), $ = o, $[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        $[s] = s + 1;
      return $[n - 1] = 0, t;
    }
    function Jt() {
      var e = $[0];
      return e === 0 ? Qt() : ($[0] = $[e], e);
    }
    function Rt(e) {
      $[e] = $[0], $[0] = e;
    }
    var dt = 0, ve = 1, It = 2, qe = 3, pt = 4, Oe = 5, ht = 6, Ft = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", et = Ft + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", jt = "data-reactroot", Ct = new RegExp("^[" + Ft + "][" + et + "]*$"), zt = Object.prototype.hasOwnProperty, Lt = {}, Nt = {};
    function Tt(e) {
      return zt.call(Nt, e) ? !0 : zt.call(Lt, e) ? !1 : Ct.test(e) ? (Nt[e] = !0, !0) : (Lt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function er(e, t, n) {
      return t !== null ? t.type === dt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vt(e, t, n, o) {
      if (n !== null && n.type === dt)
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
      if (t === null || typeof t > "u" || vt(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case qe:
            return !t;
          case pt:
            return t === !1;
          case Oe:
            return isNaN(t);
          case ht:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, h, c) {
      this.acceptsBooleans = t === It || t === qe || t === pt, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
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
        dt,
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
        ve,
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
      f[e] = new i(
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
      f[e] = new i(
        e,
        qe,
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
        qe,
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
        pt,
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
        ht,
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
        Oe,
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
        ve,
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
        ve,
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
        ve,
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
        ve,
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
      ve,
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
        ve,
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
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, re = !1;
    function G(e) {
      !re && m.test(e) && (re = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ne = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = ne.exec(t);
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
    function A(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function Z(e) {
      return '"' + A(e) + '"';
    }
    function Pe() {
      return jt + '=""';
    }
    function ue(e, t) {
      var n = a(e);
      if (e !== "style" && er(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === qe || s === pt && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, G(t)), o + "=" + Z(t));
      } else if (Tt(e))
        return e + "=" + Z(t);
      return "";
    }
    function ce(e, t) {
      return !Tt(e) || t == null ? "" : e + "=" + Z(t);
    }
    function ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Dt = typeof Object.is == "function" ? Object.is : ge, L = null, Ht = null, N = null, Pt = !1, Ut = !1, Be = null, Wt = 0, Rn = 25, Ae = !1, gt;
    function tt() {
      if (L === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ae && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), L;
    }
    function In(e, t) {
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", gt), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, gt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dt(e[n], t[n]))
          return !1;
      return !0;
    }
    function mr() {
      if (Wt > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function tr() {
      return N === null ? Ht === null ? (Pt = !1, Ht = N = mr()) : (Pt = !0, N = Ht) : N.next === null ? (Pt = !1, N = N.next = mr()) : (Pt = !0, N = N.next), N;
    }
    function br(e) {
      L = e, Ae = !1;
    }
    function xr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Wt += 1, N = null, n = e(t, o);
      return wr(), n;
    }
    function wr() {
      Ae = !1, L = null, Ut = !1, Ht = null, Wt = 0, Be = null, N = null;
    }
    function Cn(e, t) {
      var n = yt.threadID;
      return Je(e, n), Ae && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function Tn(e, t) {
      gt = "useContext", tt();
      var n = yt.threadID;
      return Je(e, n), e[n];
    }
    function rr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dn(e) {
      return gt = "useState", kr(
        rr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function kr(e, t, n) {
      if (e !== rr && (gt = "useReducer"), L = tt(), N = tr(), Pt) {
        var o = N.queue, s = o.dispatch;
        if (Be !== null) {
          var h = Be.get(o);
          if (h !== void 0) {
            Be.delete(o);
            var c = N.memoizedState, y = h;
            do {
              var d = y.action;
              Ae = !0, c = e(c, d), Ae = !1, y = y.next;
            } while (y !== null);
            return N.memoizedState = c, [c, s];
          }
        }
        return [N.memoizedState, s];
      } else {
        Ae = !0;
        var O;
        e === rr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Ae = !1, N.memoizedState = O;
        var R = N.queue = {
          last: null,
          dispatch: null
        }, X = R.dispatch = Mn.bind(null, L, R);
        return [N.memoizedState, X];
      }
    }
    function Sr(e, t) {
      L = tt(), N = tr();
      var n = t === void 0 ? null : t;
      if (N !== null) {
        var o = N.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (In(n, s))
            return o[0];
        }
      }
      Ae = !0;
      var h = e();
      return Ae = !1, N.memoizedState = [h, n], h;
    }
    function Pn(e) {
      L = tt(), N = tr();
      var t = N.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), N.memoizedState = n, n;
      } else
        return t;
    }
    function An(e, t) {
      gt = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Mn(e, t, n) {
      if (!(Wt < Rn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === L) {
        Ut = !0;
        var o = {
          action: n,
          next: null
        };
        Be === null && (Be = /* @__PURE__ */ new Map());
        var s = Be.get(t);
        if (s === void 0)
          Be.set(t, o);
        else {
          for (var h = s; h.next !== null; )
            h = h.next;
          h.next = o;
        }
      }
    }
    function _n(e, t) {
      return Sr(function() {
        return e;
      }, t);
    }
    function Fn(e, t, n) {
      return tt(), t(e._source);
    }
    function jn(e) {
      return tt(), e;
    }
    function zn() {
      tt();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function Ln() {
      return (yt.identifierPrefix || "") + "R:" + (yt.uniqueID++).toString(36);
    }
    function nr() {
    }
    var yt = null;
    function Er(e) {
      yt = e;
    }
    var Nn = {
      readContext: Cn,
      useContext: Tn,
      useMemo: Sr,
      useReducer: kr,
      useRef: Pn,
      useState: Dn,
      useLayoutEffect: An,
      useCallback: _n,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: nr,
      // Effects are not run in the server environment.
      useEffect: nr,
      // Debugging effect
      useDebugValue: nr,
      useDeferredValue: jn,
      useTransition: zn,
      useOpaqueIdentifier: Ln,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Fn
    }, Vt = "http://www.w3.org/1999/xhtml", Or = "http://www.w3.org/1998/Math/MathML", ir = "http://www.w3.org/2000/svg", or = {
      html: Vt,
      mathml: Or,
      svg: ir
    };
    function Rr(e) {
      switch (e) {
        case "svg":
          return ir;
        case "math":
          return Or;
        default:
          return Vt;
      }
    }
    function Hn(e, t) {
      return e == null || e === Vt ? Rr(t) : e === ir && t === "foreignObject" ? Vt : e;
    }
    var Un = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ar(e, t) {
      Un[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    var Ir = {
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
    }, Wn = l({
      menuitem: !0
    }, Ir), Vn = "__html";
    function qn(e, t) {
      if (t) {
        if (Wn[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Vn in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
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
    function Bn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Yn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(At).forEach(function(e) {
      Yn.forEach(function(t) {
        At[Bn(t, e)] = At[e];
      });
    });
    function $n(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(At.hasOwnProperty(e) && At[e]) ? t + "px" : ("" + t).trim();
    }
    var Xn = /([A-Z])/g, Gn = /^ms-/;
    function Zn(e) {
      return e.replace(Xn, "-$1").toLowerCase().replace(Gn, "-ms-");
    }
    function sr(e, t) {
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
    var Cr = function() {
    };
    {
      var Kn = /^(?:webkit|moz|o)[A-Z]/, Qn = /^-ms-/, Jn = /-(.)/g, Tr = /;\s*$/, mt = {}, lr = {}, Dr = !1, Pr = !1, ei = function(e) {
        return e.replace(Jn, function(t, n) {
          return n.toUpperCase();
        });
      }, ti = function(e) {
        mt.hasOwnProperty(e) && mt[e] || (mt[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ei(e.replace(Qn, "ms-"))
        ));
      }, ri = function(e) {
        mt.hasOwnProperty(e) && mt[e] || (mt[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ni = function(e, t) {
        lr.hasOwnProperty(t) && lr[t] || (lr[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Tr, "")));
      }, ii = function(e, t) {
        Dr || (Dr = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, oi = function(e, t) {
        Pr || (Pr = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Cr = function(e, t) {
        e.indexOf("-") > -1 ? ti(e) : Kn.test(e) ? ri(e) : Tr.test(t) && ni(e, t), typeof t == "number" && (isNaN(t) ? ii(e, t) : isFinite(t) || oi(e, t));
      };
    }
    var ai = Cr, Ar = {
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
    }, bt = {}, si = new RegExp("^(aria)-[" + et + "]*$"), li = new RegExp("^(aria)[A-Z][" + et + "]*$"), ui = Object.prototype.hasOwnProperty;
    function ci(e, t) {
      {
        if (ui.call(bt, t) && bt[t])
          return !0;
        if (li.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Ar.hasOwnProperty(n) ? n : null;
          if (o == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), bt[t] = !0, !0;
          if (t !== o)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), bt[t] = !0, !0;
        }
        if (si.test(t)) {
          var s = t.toLowerCase(), h = Ar.hasOwnProperty(s) ? s : null;
          if (h == null)
            return bt[t] = !0, !1;
          if (t !== h)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), bt[t] = !0, !0;
        }
      }
      return !0;
    }
    function fi(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = ci(e, o);
          s || n.push(o);
        }
        var h = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function di(e, t) {
      sr(e, t) || fi(e, t);
    }
    var Mr = !1;
    function pi(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Mr && (Mr = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _r = {
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
    }, Fr = function() {
    };
    {
      var oe = {}, hi = Object.prototype.hasOwnProperty, jr = /^on./, vi = /^on[^A-Z]/, gi = new RegExp("^(aria)-[" + et + "]*$"), yi = new RegExp("^(aria)[A-Z][" + et + "]*$");
      Fr = function(e, t, n, o) {
        if (hi.call(oe, t) && oe[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), oe[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var y = c.hasOwnProperty(s) ? c[s] : null;
          if (y != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, y), oe[t] = !0, !0;
          if (jr.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), oe[t] = !0, !0;
        } else if (jr.test(t))
          return vi.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), oe[t] = !0, !0;
        if (gi.test(t) || yi.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), oe[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), oe[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), oe[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), oe[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === dt;
        if (_r.hasOwnProperty(s)) {
          var R = _r[s];
          if (R !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, R), oe[t] = !0, !0;
        } else if (!O && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), oe[t] = !0, !0;
        return typeof n == "boolean" && vt(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), oe[t] = !0, !0) : O ? !0 : vt(t, n, d, !1) ? (oe[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === qe && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), oe[t] = !0), !0);
      };
    }
    var mi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var h = Fr(e, s, t[s], n);
          h || o.push(s);
        }
        var c = o.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        o.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function bi(e, t, n) {
      sr(e, t) || mi(e, t, n);
    }
    var Ye = u.Children.toArray, Ne = [], ur = D.ReactCurrentDispatcher, qt, cr = null, zr = function() {
      return "";
    }, Lr = function(e) {
      return "";
    }, Nr = function(e, t) {
    }, Hr = function(e) {
    }, Ur = function(e) {
    }, Wr = function() {
    }, Vr = !1;
    qt = D.ReactDebugCurrentFrame, Nr = function(e, t) {
      di(e, t), pi(e, t), bi(e, t, null);
    }, Lr = function(e) {
      return Le(e.type, e._source, null);
    }, Hr = function(e) {
      Ne.push(e), Ne.length === 1 && (cr = qt.getCurrentStack, qt.getCurrentStack = zr);
    }, Ur = function(e) {
      var t = Ne[Ne.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Wr = function() {
      Ne.pop(), Ne.length === 0 && (qt.getCurrentStack = cr, cr = null);
    }, zr = function() {
      if (Ne.length === 0)
        return "";
      for (var e = Ne[Ne.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += Lr(s[h]);
      return t;
    };
    var qr = !1, Br = !1, Yr = !1, $r = !1, Xr = !1, Gr = {}, Zr = {}, Kr = {}, Qr = {}, Jr = {}, en = {}, tn = ["value", "defaultValue"], xi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, wi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, rn = {};
    function ki(e) {
      if (!rn.hasOwnProperty(e)) {
        if (!wi.test(e))
          throw Error("Invalid tag: " + e);
        rn[e] = !0;
      }
    }
    var fr = {}, Si = function(e) {
      if (fr.hasOwnProperty(e))
        return fr[e];
      var t = Zn(e);
      return fr[e] = t, t;
    };
    function Ei(e) {
      var t = "", n = "";
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          var s = o.indexOf("--") === 0, h = e[o];
          s || ai(o, h), h != null && (t += n + (s ? o : Si(o)) + ":", t += $n(o, h, s), n = ";");
        }
      return t || null;
    }
    function nn(e, t) {
      {
        var n = e.constructor, o = n && K(n) || "ReactClass", s = o + "." + t;
        if (Gr[s])
          return;
        v(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Gr[s] = !0;
      }
    }
    function Oi(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ri(e) {
      var t = e.dangerouslySetInnerHTML;
      if (t != null) {
        if (t.__html != null)
          return t.__html;
      } else {
        var n = e.children;
        if (typeof n == "string" || typeof n == "number")
          return A(n);
      }
      return null;
    }
    function Ii(e) {
      if (!u.isValidElement(e))
        return Ye(e);
      var t = e;
      if (t.type !== p)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return Ye(n);
      var o = n;
      return [o];
    }
    function Ci(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Xr && typeof n != "string" && typeof n != "number" && (Xr = !0, v("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Ti = Object.prototype.hasOwnProperty, Di = "style", Pi = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ai(e, t, n, o, s, h) {
      var c = "<" + e, y = sr(t, n);
      for (var d in n)
        if (Ti.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Di && (O = Ei(O));
            var R = null;
            y ? Pi.hasOwnProperty(d) || (R = ce(d, O)) : R = ue(d, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Pe()), c;
    }
    function on(e, t) {
      if (e === void 0)
        throw Error((K(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Mi(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Ur(o), typeof s != "function")
          break;
        h(o, s);
      }
      function h(c, y) {
        var d = Oi(y), O = Ot(y, t, n, d), R = [], X = !1, ee = {
          isMounted: function(Ge) {
            return !1;
          },
          enqueueForceUpdate: function(Ge) {
            if (R === null)
              return nn(Ge, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Ge, wt) {
            X = !0, R = [wt];
          },
          enqueueSetState: function(Ge, wt) {
            if (R === null)
              return nn(Ge, "setState"), null;
            R.push(wt);
          }
        }, w;
        if (d) {
          if (w = new y(c.props, O, ee), typeof y.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var V = K(y) || "Unknown";
              en[V] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, w.state === null ? "null" : "undefined", V), en[V] = !0);
            }
            var ae = y.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ae === void 0) {
              var fe = K(y) || "Unknown";
              Jr[fe] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", fe), Jr[fe] = !0);
            }
            ae != null && (w.state = l({}, w.state, ae));
          }
        } else {
          if (y.prototype && typeof y.prototype.render == "function") {
            var de = K(y) || "Unknown";
            Zr[de] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", de, de), Zr[de] = !0);
          }
          var $e = {};
          if (br($e), w = y(c.props, O, ee), w = xr(y, c.props, w, O), w != null && w.render != null) {
            var xe = K(y) || "Unknown";
            Kr[xe] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", xe, xe, xe), Kr[xe] = !0);
          }
          if (w == null || w.render == null) {
            e = w, on(e, y);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = ee;
        var Re = w.state;
        if (Re === void 0 && (w.state = Re = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Xe = K(y) || "Unknown";
              Qr[Xe] || (_(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Xe
              ), Qr[Xe] = !0);
            }
            typeof y.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof y.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var we = R, Ie = X;
            if (R = null, X = !1, Ie && we.length === 1)
              w.state = we[0];
            else {
              for (var Me = Ie ? we[0] : w.state, Bt = !0, xt = Ie ? 1 : 0; xt < we.length; xt++) {
                var Ce = we[xt], Mt = typeof Ce == "function" ? Ce.call(w, Me, c.props, O) : Ce;
                Mt != null && (Bt ? (Bt = !1, Me = l({}, Me, Mt)) : l(Me, Mt));
              }
              w.state = Me;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), on(e, y);
        var rt;
        {
          if (typeof w.getChildContext == "function") {
            var Yt = y.childContextTypes;
            if (typeof Yt == "object") {
              rt = w.getChildContext();
              for (var $t in rt)
                if (!($t in Yt))
                  throw Error((K(y) || "Unknown") + '.getChildContext(): key "' + $t + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", K(y) || "Unknown");
          }
          rt && (t = l({}, t, rt));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var an = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var h = Ii(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: or.html,
          children: h,
          childIndex: 0,
          context: ct,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Jt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Rt(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, h = o.type._context, c = this.threadID;
        Je(h, c);
        var y = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = y, this.contextProviderStack[s] = o, h[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && v("Unexpected pop.");
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
        var s = yt;
        Er(this);
        var h = ur.current;
        ur.current = Nn;
        try {
          for (var c = [""], y = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Rt(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (y || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === W) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === pe) {
                this.suspenseDepth--;
                var X = c.pop();
                if (y) {
                  y = !1;
                  var ee = d.fallbackFrame;
                  if (!ee)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(ee), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += X;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var w = d.children[d.childIndex++], V = "";
            Hr(this.stack), d.debugElementStack.length = 0;
            try {
              V += this.render(w, d.context, d.domNamespace);
            } catch (ae) {
              if (ae != null && typeof ae.then == "function") {
                if (!ot)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ae;
            } finally {
              Wr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += V;
          }
          return c[0];
        } finally {
          ur.current = h, Er(s), wr();
        }
      }, t.render = function(o, s, h) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? A(c) : this.previousWasTextNode ? "<!-- -->" + A(c) : (this.previousWasTextNode = !0, A(c));
        } else {
          var y, d = Mi(o, s, this.threadID);
          if (y = d.child, s = d.context, y === null || y === !1)
            return "";
          if (!u.isValidElement(y)) {
            if (y != null && y.$$typeof != null) {
              var O = y.$$typeof;
              throw Error(O === I ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Ye(y), X = {
              type: null,
              domNamespace: h,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return X.debugElementStack = [], this.stack.push(X), "";
          }
          var ee = y, w = ee.type;
          if (typeof w == "string")
            return this.renderDOM(ee, s, h);
          switch (w) {
            case q:
            case ke:
            case T:
            case j:
            case ye:
            case p: {
              var V = Ye(y.props.children), ae = {
                type: null,
                domNamespace: h,
                children: V,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ae.debugElementStack = [], this.stack.push(ae), "";
            }
            case pe:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case se:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case Q: {
                var fe = y, de, $e = {};
                br($e), de = w.render(fe.props, fe.ref), de = xr(w.render, fe.props, de, fe.ref), de = Ye(de);
                var xe = {
                  type: null,
                  domNamespace: h,
                  children: de,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return xe.debugElementStack = [], this.stack.push(xe), "";
              }
              case he: {
                var Re = y, Xe = [u.createElement(w.type, l({
                  ref: Re.ref
                }, Re.props))], we = {
                  type: null,
                  domNamespace: h,
                  children: Xe,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return we.debugElementStack = [], this.stack.push(we), "";
              }
              case W: {
                var Ie = y, Me = Ie.props, Bt = Ye(Me.children), xt = {
                  type: Ie,
                  domNamespace: h,
                  children: Bt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return xt.debugElementStack = [], this.pushProvider(Ie), this.stack.push(xt), "";
              }
              case te: {
                var Ce = y.type;
                Ce._context === void 0 ? Ce !== Ce.Consumer && (Vr || (Vr = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : Ce = Ce._context;
                var Mt = y.props, rt = this.threadID;
                Je(Ce, rt);
                var Yt = Ce[rt], $t = Ye(Mt.children(Yt)), Ge = {
                  type: y,
                  domNamespace: h,
                  children: $t,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Ge.debugElementStack = [], this.stack.push(Ge), "";
              }
              case ie:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case z: {
                var wt = y, sn = y.type, Li = sn._payload, Ni = sn._init, Hi = Ni(Li), Ui = [u.createElement(Hi, l({
                  ref: wt.ref
                }, wt.props))], ln = {
                  type: null,
                  domNamespace: h,
                  children: Ui,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ln.debugElementStack = [], this.stack.push(ln), "";
              }
            }
          var dr = "";
          {
            var un = ee._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (dr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var cn = un ? K(un) : null;
            cn && (dr += `

Check the render method of \`` + cn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + dr);
        }
      }, t.renderDOM = function(o, s, h) {
        var c = o.type.toLowerCase(), y = h;
        h === or.html && (y = Rr(c)), y === or.html && c !== o.type && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), ki(c);
        var d = o.props;
        if (c === "input")
          ar("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Br && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Br = !0), d.value !== void 0 && d.defaultValue !== void 0 && !qr && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), qr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          ar("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !$r && (v("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), $r = !0);
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
            ar("select", d);
            for (var ee = 0; ee < tn.length; ee++) {
              var w = tn[ee];
              if (d[w] != null) {
                var V = Array.isArray(d[w]);
                d.multiple && !V ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && V && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Yr && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Yr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ae = null, fe = this.currentSelectValue, de = Ci(d.children);
          if (fe != null) {
            var $e;
            if (d.value != null ? $e = d.value + "" : $e = de, ae = !1, Array.isArray(fe)) {
              for (var xe = 0; xe < fe.length; xe++)
                if ("" + fe[xe] === $e) {
                  ae = !0;
                  break;
                }
            } else
              ae = "" + fe === $e;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ae,
              children: de
            });
          }
        }
        Nr(c, d), qn(c, d);
        var Re = Ai(o.type, c, d, y, this.makeStaticMarkup, this.stack.length === 1), Xe = "";
        Ir.hasOwnProperty(c) ? Re += "/>" : (Re += ">", Xe = "</" + o.type + ">");
        var we, Ie = Ri(d);
        Ie != null ? (we = [], xi.hasOwnProperty(c) && Ie.charAt(0) === `
` && (Re += `
`), Re += Ie) : we = Ye(d.children);
        var Me = {
          domNamespace: Hn(h, o.type),
          type: c,
          children: we,
          childIndex: 0,
          context: s,
          footer: Xe
        };
        return Me.debugElementStack = [], this.stack.push(Me), this.previousWasTextNode = !1, Re;
      }, e;
    }();
    function _i(e, t) {
      var n = new an(e, !1, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Fi(e, t) {
      var n = new an(e, !0, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function ji() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function zi() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    it.renderToNodeStream = ji, it.renderToStaticMarkup = Fi, it.renderToStaticNodeStream = zi, it.renderToString = _i, it.version = E;
  }()), it;
}
process.env.NODE_ENV === "production" ? gr.exports = Yi() : gr.exports = $i();
var Xi = gr.exports;
const Gi = /* @__PURE__ */ Bi(Xi);
var kn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, yn = He.createContext && /* @__PURE__ */ He.createContext(kn), Zi = ["attr", "size", "title"];
function Ki(u, l) {
  if (u == null)
    return {};
  var g, E, D = Qi(u, l);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(u);
    for (E = 0; E < _.length; E++)
      g = _[E], l.indexOf(g) === -1 && {}.propertyIsEnumerable.call(u, g) && (D[g] = u[g]);
  }
  return D;
}
function Qi(u, l) {
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
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var g = arguments[l];
      for (var E in g)
        ({}).hasOwnProperty.call(g, E) && (u[E] = g[E]);
    }
    return u;
  }, Zt.apply(null, arguments);
}
function mn(u, l) {
  var g = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(D) {
      return Object.getOwnPropertyDescriptor(u, D).enumerable;
    })), g.push.apply(g, E);
  }
  return g;
}
function Kt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var g = arguments[l] != null ? arguments[l] : {};
    l % 2 ? mn(Object(g), !0).forEach(function(E) {
      Ji(u, E, g[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g)) : mn(Object(g)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(g, E));
    });
  }
  return u;
}
function Ji(u, l, g) {
  return (l = eo(l)) in u ? Object.defineProperty(u, l, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = g, u;
}
function eo(u) {
  var l = to(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function to(u, l) {
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
function Sn(u) {
  return u && u.map((l, g) => /* @__PURE__ */ He.createElement(l.tag, Kt({
    key: g
  }, l.attr), Sn(l.child)));
}
function En(u) {
  return (l) => /* @__PURE__ */ He.createElement(ro, Zt({
    attr: Kt({}, u.attr)
  }, l), Sn(u.child));
}
function ro(u) {
  var l = (g) => {
    var {
      attr: E,
      size: D,
      title: _
    } = u, v = Ki(u, Zi), C = D || g.size || "1em", I;
    return g.className && (I = g.className), u.className && (I = (I ? I + " " : "") + u.className), /* @__PURE__ */ He.createElement("svg", Zt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, g.attr, E, v, {
      className: I,
      style: Kt(Kt({
        color: u.color || g.color
      }, g.style), u.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), _ && /* @__PURE__ */ He.createElement("title", null, _), u.children);
  };
  return yn !== void 0 ? /* @__PURE__ */ He.createElement(yn.Consumer, null, (g) => l(g)) : l(kn);
}
function bn(u) {
  return En({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function no(u) {
  return En({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const On = {
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
}, io = (u) => !u || u.length < 6 ? !1 : !isNaN(Date.parse(u)) && /\d{4}|\d{2}[-/]\d{2}/.test(u), xn = (u, l) => {
  const g = On[u] || "xy";
  let E = [], D = [], _ = [];
  if (!l || l.length === 0)
    return { series: E, labels: D, categories: _ };
  const v = l[0], C = Object.keys(v).filter((p) => typeof v[p] == "number"), I = Object.keys(v).find((p) => typeof v[p] == "string") || "x";
  switch (g) {
    case "circular": {
      E = l.map((p) => Number(p.value ?? p.y ?? p[C[0]] ?? p)), D = l.map((p) => String(p.label ?? p.category ?? p.x ?? ""));
      break;
    }
    case "category": {
      _ = l.map(
        (p) => String(p.x ?? p.category ?? p[I])
      ), E = [{
        name: "Series 1",
        data: l.map((p) => Number(p.value ?? p.y ?? p[C[0]] ?? 0))
      }];
      break;
    }
    case "funnel": {
      E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: String(p.stage ?? p.x ?? p.category ?? p[I]),
          y: Number(p.value ?? p.y ?? p[C[0]] ?? 0)
        }))
      }];
      break;
    }
    case "range": {
      E = [{
        name: "Series 1",
        // ← FIX: was missing, caused crash
        data: l.map((p) => {
          const T = p.y ?? (p.open !== void 0 ? [p.open, p.high, p.low, p.close] : p.min !== void 0 ? [p.min, p.max] : p.start !== void 0 ? [p.start, p.end] : void 0);
          return {
            x: String(p.x ?? p.date ?? p.category ?? p[I]),
            y: T
          };
        })
      }];
      break;
    }
    case "heatmap": {
      E = [...new Set(l.map((T) => T.group ?? "Series 1"))].map((T) => ({
        name: String(T),
        data: l.filter((j) => (j.group ?? "Series 1") === T).map((j) => ({
          x: String(j.x ?? j.category ?? j[I]),
          y: Number(j.value ?? j.y ?? 0)
        }))
      }));
      break;
    }
    case "treemap": {
      E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: String(p.x ?? p.name ?? p.category ?? p[I]),
          y: Number(p.value ?? p.y ?? p[C[0]] ?? 0)
        }))
      }];
      break;
    }
    default: {
      E = [{
        name: "Series 1",
        data: l.map((p) => {
          const T = {
            x: p.x ?? p[I],
            y: p.y ?? p.value ?? 0
          };
          return ("z" in p || "r" in p) && (T.z = p.z ?? p.r), T;
        })
      }];
      break;
    }
  }
  return { series: E, labels: D, categories: _ };
}, vr = (u) => {
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
  return l.open !== void 0 && l.close !== void 0 ? "candlestick" : l.min !== void 0 && l.max !== void 0 ? "boxplot" : l.start !== void 0 && l.end !== void 0 ? "rangebar" : "r" in l || "z" in l ? "bubble" : l.stage !== void 0 ? "funnel" : l.group !== void 0 ? "heatmap" : l.name !== void 0 && l.value !== void 0 ? "treemap" : l.label !== void 0 && l.value !== void 0 ? "donut" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : typeof l.x == "string" && !isNaN(Date.parse(l.x)) ? "line" : "bar";
}, oo = (u, l) => {
  if (!l || !Array.isArray(l) || l.length === 0)
    return [];
  if (Array.isArray(l[0])) {
    const _ = l, v = [];
    let C = [], I = [];
    const p = Array.isArray(u) ? u[0] : typeof u == "string" ? u : vr(_[0]), T = p === "column" ? "bar" : p ?? "line";
    return _.forEach((j, W) => {
      var pe, ye;
      const te = Array.isArray(u) ? u[W] ?? u[0] : typeof u == "string" ? u : vr(j), Q = xn(te, j);
      Array.isArray(Q.series) && Q.series.forEach((he) => {
        v.push({
          ...he,
          // Map "column" → "bar" for ApexCharts series-level type
          type: te === "column" ? "bar" : te,
          name: he.name || `Series ${v.length + 1}`
        });
      }), (((pe = Q.labels) == null ? void 0 : pe.length) ?? 0) > C.length && (C = Q.labels), (((ye = Q.categories) == null ? void 0 : ye.length) ?? 0) > I.length && (I = Q.categories);
    }), [
      {
        type: T,
        series: v,
        labels: C,
        categories: I
      }
    ];
  }
  const g = l, E = typeof u == "string" ? u : vr(g), D = xn(E, g);
  return [
    {
      type: E,
      ...D
    }
  ];
}, yr = /* @__PURE__ */ new Map();
typeof window < "u" && (window.__vizlyOpen = (u) => {
  var l;
  return (l = yr.get(u)) == null ? void 0 : l();
});
let ao = 0;
const co = Vi(
  ({ data: u, type: l, options: g = {}, height: E = 350, title: D }, _) => {
    const v = Gt(null), C = Gt(null), I = Gt(null), p = Gt(null), [T, j] = fn(!1), W = dn(() => `vizly-${++ao}`, []);
    pr(() => (yr.set(W, () => j(!0)), () => {
      yr.delete(W);
    }), [W]);
    const [te, Q] = fn(!1), pe = dn(
      () => Gi.renderToString(
        /* @__PURE__ */ Ze(bn, { size: 14, style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" } })
      ),
      []
    ), ye = (z) => {
      const P = String(z).toLowerCase();
      return P === "column" || P === "funnel" ? "bar" : P === "rangebar" ? "rangeBar" : P === "boxplot" ? "boxPlot" : P === "polararea" ? "polarArea" : P === "radialbar" ? "radialBar" : P;
    }, he = (z) => {
      var Y, U, Fe, je, lt, me, Ue;
      const P = oo(l, u);
      if (!P || P.length === 0)
        return { series: [] };
      const { type: ie, series: se, labels: ke, categories: q } = P[0], M = String(ie).toLowerCase(), B = On[M] || "xy", Se = B === "circular", K = M === "radar", ot = M === "funnel", Ee = B === "range";
      let _e = se;
      Se && (Array.isArray(se) && ((Y = se[0]) != null && Y.data) ? _e = se[0].data : Array.isArray(se) && typeof se[0] == "object" && (_e = se.map((le) => le.y ?? le.value ?? 0)));
      const Ke = Se ? ke != null && ke.length ? ke : q != null && q.length ? q : [] : [], at = (() => K ? q != null && q.length ? q : ke ?? [] : Se ? [] : ot ? [] : q != null && q.length ? q : [])(), st = (() => {
        var ze, J, be;
        if (!Ee)
          return "category";
        const le = Array.isArray(se) ? (be = (J = (ze = se[0]) == null ? void 0 : ze.data) == null ? void 0 : J[0]) == null ? void 0 : be.x : null;
        return le && io(String(le)) ? "datetime" : "category";
      })();
      return {
        ...g,
        chart: {
          id: z ? "vizly-modal-chart" : "vizly-main-chart",
          type: ye(M),
          height: "100%",
          width: "100%",
          // Fix: Containment
          animations: { enabled: !0, speed: 800 },
          toolbar: {
            show: !0,
            // 3
            tools: {
              // FIX 1c — click routes through window.__vizlyOpen(instanceId)
              // instead of a direct closure, so it is never stale.
              customIcons: z ? [] : [{
                icon: pe,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => {
                  var le;
                  return (le = window.__vizlyOpen) == null ? void 0 : le.call(window, W);
                }
              }]
            }
            // tools: {
            //   customIcons: isModal ? [] : [{
            //     icon: expandIconString, index: 6, title: "Expand", class: "custom-icon",
            //     click: () => setIsModalOpen(true),
            //   }],
            // },
          },
          ...g.chart
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 },
          // Fix: X-axis bleed
          ...g.grid
        },
        series: _e,
        labels: Ke,
        // always [], never undefined
        xaxis: {
          type: Ee ? st : "category",
          // ← uses what you computed above
          categories: at,
          ...g.xaxis
        },
        plotOptions: {
          ...g.plotOptions,
          bar: {
            horizontal: M === "funnel" || M === "rangebar",
            isFunnel: M === "funnel",
            distributed: M === "funnel",
            ...(U = g.plotOptions) == null ? void 0 : U.bar
          },
          heatmap: {
            enableShades: !0,
            colorScale: { ranges: ((lt = (je = (Fe = g.plotOptions) == null ? void 0 : Fe.heatmap) == null ? void 0 : je.colorScale) == null ? void 0 : lt.ranges) || [] }
          }
        },
        title: {
          text: typeof D == "string" ? D : (D == null ? void 0 : D.text) || ((me = g.title) == null ? void 0 : me.text),
          align: typeof D == "object" ? D.align : ((Ue = g.title) == null ? void 0 : Ue.align) || "left"
        },
        tooltip: {
          shared: !0,
          intersect: !1,
          theme: "dark",
          ...g.tooltip
        }
      };
    };
    return pr(() => {
      let z = !0;
      return (async () => {
        if (I.current && await I.current.destroy(), !z || !v.current)
          return;
        v.current.innerHTML = "";
        const ie = he(!1);
        I.current = new pn(v.current, ie), await I.current.render();
      })(), () => {
        var ie;
        z = !1, (ie = I.current) == null || ie.destroy();
      };
    }, [u, l, g, D]), pr(() => {
      if (T && C.current) {
        const z = setTimeout(async () => {
          p.current && await p.current.destroy(), C.current.innerHTML = "", p.current = new pn(C.current, he(!0)), await p.current.render();
        }, 350);
        return () => clearTimeout(z);
      }
    }, [T]), qi(_, () => ({
      zoomIn: () => {
        var z;
        return (z = I.current) == null ? void 0 : z.zoomX(20, 80);
      },
      zoomOut: () => {
        var z;
        return (z = I.current) == null ? void 0 : z.resetSeries();
      },
      reset: () => {
        var z;
        return (z = I.current) == null ? void 0 : z.resetSeries();
      },
      toggleFullscreen: () => j(!T)
    })), /* @__PURE__ */ Xt(Wi, { children: [
      /* @__PURE__ */ Xt(
        "div",
        {
          style: { height: E, width: "100%", position: "relative", overflow: "hidden" },
          onMouseEnter: () => Q(!0),
          onMouseLeave: () => Q(!1),
          children: [
            /* @__PURE__ */ Ze("div", { ref: v, style: { height: "100%", width: "100%", overflow: "hidden" } }),
            /* @__PURE__ */ Ze(
              "button",
              {
                onClick: () => j(!0),
                title: "Expand",
                style: {
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  width: "26px",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  border: "0.5px solid rgba(0,0,0,0.12)",
                  borderRadius: "6px",
                  cursor: "pointer",
                  zIndex: 10,
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  opacity: te ? 1 : 0,
                  transform: te ? "scale(1)" : "scale(0.82)",
                  transition: "opacity 0.15s ease, transform 0.15s ease",
                  pointerEvents: te ? "auto" : "none"
                },
                children: /* @__PURE__ */ Ze(bn, { size: 12, color: "#555" })
              }
            )
          ]
        }
      ),
      T && /* @__PURE__ */ Xt("div", { style: {
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
        /* @__PURE__ */ Ze("style", { children: `
              @keyframes vizlyFadeIn  { from { opacity: 0; } to { opacity: 1; } }
              @keyframes vizlyScaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            ` }),
        /* @__PURE__ */ Xt("div", { style: {
          width: "90%",
          height: "80%",
          background: "#fff",
          borderRadius: "16px",
          padding: "40px",
          position: "relative",
          animation: "vizlyScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }, children: [
          /* @__PURE__ */ Ze(
            "button",
            {
              onClick: () => j(!1),
              style: { position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" },
              children: /* @__PURE__ */ Ze(no, { size: 18 })
            }
          ),
          /* @__PURE__ */ Ze("div", { ref: C, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  co as VizlyChart
};
