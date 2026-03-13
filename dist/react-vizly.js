import { jsx as mt, jsxs as sn } from "react/jsx-runtime";
import _e, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as ln, useEffect as un, useImperativeHandle as Ui } from "react";
import cn from "apexcharts";
function Hi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var pr = { exports: {} }, Je = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dr, fn;
function mn() {
  if (fn)
    return dr;
  fn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
  function E(L) {
    if (L == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(L);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var L = new String("abc");
      if (L[5] = "de", Object.getOwnPropertyNames(L)[0] === "5")
        return !1;
      for (var y = {}, D = 0; D < 10; D++)
        y["_" + String.fromCharCode(D)] = D;
      var P = Object.getOwnPropertyNames(y).map(function(h) {
        return y[h];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var I = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        I[h] = h;
      }), Object.keys(Object.assign({}, I)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return dr = C() ? Object.assign : function(L, y) {
    for (var D, P = E(L), I, h = 1; h < arguments.length; h++) {
      D = Object(arguments[h]);
      for (var A in D)
        l.call(D, A) && (P[A] = D[A]);
      if (u) {
        I = u(D);
        for (var K = 0; K < I.length; K++)
          v.call(D, I[K]) && (P[I[K]] = D[I[K]]);
      }
    }
    return P;
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
var dn;
function Wi() {
  if (dn)
    return Je;
  dn = 1;
  var u = mn(), l = _e;
  function v(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, C = 60107, L = 60108, y = 60114, D = 60109, P = 60110, I = 60112, h = 60113, A = 60120, K = 60115, J = 60116, ke = 60121, _ = 60117, ee = 60119, B = 60129, pe = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var F = Symbol.for;
    E = F("react.portal"), C = F("react.fragment"), L = F("react.strict_mode"), y = F("react.profiler"), D = F("react.provider"), P = F("react.context"), I = F("react.forward_ref"), h = F("react.suspense"), A = F("react.suspense_list"), K = F("react.memo"), J = F("react.lazy"), ke = F("react.block"), _ = F("react.fundamental"), ee = F("react.scope"), B = F("react.debug_trace_mode"), pe = F("react.legacy_hidden");
  }
  function te(r) {
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
        case P:
          return (r.displayName || "Context") + ".Consumer";
        case D:
          return (r._context.displayName || "Context") + ".Provider";
        case I:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case K:
          return te(r.type);
        case ke:
          return te(r._render);
        case J:
          a = r._payload, r = r._init;
          try {
            return te(r(a));
          } catch {
          }
      }
    return null;
  }
  var Be = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fe = {};
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
      a = Fe;
    return a;
  }
  for (var W = new Uint16Array(16), Se = 0; 15 > Se; Se++)
    W[Se] = Se + 1;
  W[15] = 0;
  var V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tt = Object.prototype.hasOwnProperty, he = {}, je = {};
  function Ee(r) {
    return tt.call(je, r) ? !0 : tt.call(he, r) ? !1 : V.test(r) ? je[r] = !0 : (he[r] = !0, !1);
  }
  function Ye(r, a, i, f) {
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
  function $e(r, a, i, f) {
    if (a === null || typeof a > "u" || Ye(r, a, i, f))
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
  function Z(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    Y[r] = new Z(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    Y[a] = new Z(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    Y[r] = new Z(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    Y[r] = new Z(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    Y[r] = new Z(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    Y[r] = new Z(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    Y[r] = new Z(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    Y[r] = new Z(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    Y[r] = new Z(r, 5, !1, r.toLowerCase(), null, !1, !1);
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
    Y[a] = new Z(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(rt, nt);
    Y[a] = new Z(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(rt, nt);
    Y[a] = new Z(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    Y[r] = new Z(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    Y[r] = new Z(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Zt = /["'&<>]/;
  function De(r) {
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
    var i = Y.hasOwnProperty(r) ? Y[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || $e(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (De(a) + '"'))) : Ee(r) ? r + '="' + (De(a) + '"') : "";
  }
  function xt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var it = typeof Object.is == "function" ? Object.is : xt, ae = null, Pe = null, M = null, ze = !1, Xe = !1, Oe = null, Ae = 0;
  function Re() {
    if (ae === null)
      throw Error(v(321));
    return ae;
  }
  function wt() {
    if (0 < Ae)
      throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Le() {
    return M === null ? Pe === null ? (ze = !1, Pe = M = wt()) : (ze = !0, M = Pe) : M.next === null ? (ze = !1, M = M.next = wt()) : (ze = !0, M = M.next), M;
  }
  function Mt(r, a, i, f) {
    for (; Xe; )
      Xe = !1, Ae += 1, M = null, i = r(a, f);
    return ot(), i;
  }
  function ot() {
    ae = null, Xe = !1, Pe = null, Ae = 0, M = Oe = null;
  }
  function at(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function kt(r, a, i) {
    if (ae = Re(), M = Le(), ze) {
      var f = M.queue;
      if (a = f.dispatch, Oe !== null && (i = Oe.get(f), i !== void 0)) {
        Oe.delete(f), f = M.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return M.memoizedState = f, [f, a];
      }
      return [M.memoizedState, a];
    }
    return r = r === at ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, M.memoizedState = r, r = M.queue = { last: null, dispatch: null }, r = r.dispatch = Ge.bind(null, ae, r), [M.memoizedState, r];
  }
  function St(r, a) {
    if (ae = Re(), M = Le(), a = a === void 0 ? null : a, M !== null) {
      var i = M.memoizedState;
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
    return r = r(), M.memoizedState = [r, a], r;
  }
  function Ge(r, a, i) {
    if (!(25 > Ae))
      throw Error(v(301));
    if (r === ae)
      if (Xe = !0, r = { action: i, next: null }, Oe === null && (Oe = /* @__PURE__ */ new Map()), i = Oe.get(a), i === void 0)
        Oe.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function Et() {
  }
  var q = null, st = { readContext: function(r) {
    var a = q.threadID;
    return ye(r, a), r[a];
  }, useContext: function(r) {
    Re();
    var a = q.threadID;
    return ye(r, a), r[a];
  }, useMemo: St, useReducer: kt, useRef: function(r) {
    ae = Re(), M = Le();
    var a = M.memoizedState;
    return a === null ? (r = { current: r }, M.memoizedState = r) : a;
  }, useState: function(r) {
    return kt(at, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return St(function() {
      return r;
    }, a);
  }, useImperativeHandle: Et, useEffect: Et, useDebugValue: Et, useDeferredValue: function(r) {
    return Re(), r;
  }, useTransition: function() {
    return Re(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (q.identifierPrefix || "") + "R:" + (q.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return Re(), a(r._source);
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
  var Ot = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, lt = u({ menuitem: !0 }, Ot), fe = {
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
  Object.keys(fe).forEach(function(r) {
    Rt.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), fe[a] = fe[r];
    });
  });
  var Ne = /([A-Z])/g, ut = /^ms-/, me = l.Children.toArray, ct = Be.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, Ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, It = {};
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
      throw Error(v(152, te(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, re = N(S, a, i, m), X = [], ne = !1, U = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (X === null)
          return null;
      }, enqueueReplaceState: function(Tt, j) {
        ne = !0, X = [j];
      }, enqueueSetState: function(Tt, j) {
        if (X === null)
          return null;
        X.push(j);
      } };
      if (m) {
        if (m = new S(b.props, re, U), typeof S.getDerivedStateFromProps == "function") {
          var T = S.getDerivedStateFromProps.call(null, b.props, m.state);
          T != null && (m.state = u({}, m.state, T));
        }
      } else if (ae = {}, m = S(
        b.props,
        re,
        U
      ), m = Mt(S, b.props, m, re), m == null || m.render == null) {
        r = m, Ct(r, S);
        return;
      }
      if (m.props = b.props, m.context = re, m.updater = U, U = m.state, U === void 0 && (m.state = U = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), X.length) {
          U = X;
          var G = ne;
          if (X = null, ne = !1, G && U.length === 1)
            m.state = U[0];
          else {
            T = G ? U[0] : m.state;
            var Ie = !0;
            for (G = G ? 1 : 0; G < U.length; G++) {
              var se = U[G];
              se = typeof se == "function" ? se.call(m, T, b.props, re) : se, se != null && (Ie ? (Ie = !1, T = u({}, T, se)) : u(T, se));
            }
            m.state = T;
          }
        } else
          X = null;
      if (r = m.render(), Ct(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var le = m.getChildContext();
        for (var de in le)
          if (!(de in b))
            throw Error(v(108, te(S) || "Unknown", de));
      }
      le && (a = u({}, a, le));
    }
    for (; l.isValidElement(r); ) {
      var k = r, x = k.type;
      if (typeof x != "function")
        break;
      f(k, x);
    }
    return { child: r, context: a };
  }
  var ft = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== C ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : me(i)) : i = me(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Fe, footer: "" };
      var x = W[0];
      if (x === 0) {
        var b = W;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(v(304));
        var m = new Uint16Array(S);
        for (m.set(b), W = m, W[0] = x + 1, b = x; b < S - 1; b++)
          W[b] = b + 1;
        W[S - 1] = 0;
      } else
        W[0] = W[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        W[i] = W[0], W[0] = i;
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
      var f = q;
      q = this;
      var k = ct.current;
      ct.current = st;
      try {
        for (var x = [""], b = !1; x[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            W[S] = W[0], W[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (b || m.childIndex >= m.children.length) {
            var re = m.footer;
            if (re !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === D)
              this.popProvider(m.type);
            else if (m.type === h) {
              this.suspenseDepth--;
              var X = x.pop();
              if (b) {
                b = !1;
                var ne = m.fallbackFrame;
                if (!ne)
                  throw Error(v(303));
                this.stack.push(ne), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += X;
            }
            x[this.suspenseDepth] += re;
          } else {
            var U = m.children[m.childIndex++], T = "";
            try {
              T += this.render(U, m.context, m.domNamespace);
            } catch (G) {
              throw G != null && typeof G.then == "function" ? Error(v(294)) : G;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += T;
          }
        }
        return x[0];
      } finally {
        ct.current = k, q = f, ot();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? De(k) : this.previousWasTextNode ? "<!-- -->" + De(k) : (this.previousWasTextNode = !0, De(k));
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
        case pe:
        case B:
        case L:
        case y:
        case A:
        case C:
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
        case ee:
          throw Error(v(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case I:
            ae = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = me(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case K:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case D:
            return x = me(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case P:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ye(x, S), x = me(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case _:
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
        if (!Ze.test(x))
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
        var re = jt(b.children);
        if (m != null) {
          var X = b.value != null ? b.value + "" : re;
          if (S = !1, Array.isArray(m)) {
            for (var ne = 0; ne < m.length; ne++)
              if ("" + m[ne] === X) {
                S = !0;
                break;
              }
          } else
            S = "" + m === X;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: re }
          );
        }
      }
      if (S = b) {
        if (lt[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, m = this.makeStaticMarkup, re = this.stack.length === 1, X = "<" + i.type;
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
      for (j in S)
        if (zt.call(S, j)) {
          var U = S[j];
          if (U != null) {
            if (j === "style") {
              var T = void 0, G = "", Ie = "";
              for (T in U)
                if (U.hasOwnProperty(T)) {
                  var se = T.indexOf("--") === 0, le = U[T];
                  if (le != null) {
                    if (se)
                      var de = T;
                    else if (de = T, It.hasOwnProperty(de))
                      de = It[de];
                    else {
                      var Tt = de.replace(Ne, "-$1").toLowerCase().replace(ut, "-ms-");
                      de = It[de] = Tt;
                    }
                    G += Ie + de + ":", Ie = T, se = le == null || typeof le == "boolean" || le === "" ? "" : se || typeof le != "number" || le === 0 || fe.hasOwnProperty(Ie) && fe[Ie] ? ("" + le).trim() : le + "px", G += se, Ie = ";";
                  }
                }
              U = G || null;
            }
            T = null, ne ? Lt.hasOwnProperty(j) || (T = j, T = Ee(T) && U != null ? T + '="' + (De(U) + '"') : "") : T = bt(j, U), T && (X += " " + T);
          }
        }
      m || re && (X += ' data-reactroot=""');
      var j = X;
      S = "", Ot.hasOwnProperty(x) ? j += "/>" : (j += ">", S = "</" + i.type + ">");
      e: {
        if (m = b.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = b.children, typeof m == "string" || typeof m == "number") {
          m = De(m);
          break e;
        }
        m = null;
      }
      return m != null ? (b = [], _t.hasOwnProperty(x) && m.charAt(0) === `
` && (j += `
`), j += m) : b = me(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, j;
    }, r;
  }();
  return Je.renderToNodeStream = function() {
    throw Error(v(207));
  }, Je.renderToStaticMarkup = function(r, a) {
    r = new ft(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Je.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Je.renderToString = function(r, a) {
    r = new ft(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Je.version = "17.0.2", Je;
}
var et = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function Vi() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = _e, l = mn();
    function v(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", C = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        D("warn", e, n);
      }
    }
    function y(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        D("error", e, n);
      }
    }
    function D(e, t, n) {
      {
        var o = C.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var p = n.map(function(c) {
          return "" + c;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var P = 60106, I = 60107, h = 60108, A = 60114, K = 60109, J = 60110, ke = 60112, _ = 60113, ee = 60120, B = 60115, pe = 60116, F = 60121, te = 60117, Be = 60119, Fe = 60129, ye = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var N = Symbol.for;
      N("react.element"), P = N("react.portal"), I = N("react.fragment"), h = N("react.strict_mode"), A = N("react.profiler"), K = N("react.provider"), J = N("react.context"), ke = N("react.forward_ref"), _ = N("react.suspense"), ee = N("react.suspense_list"), B = N("react.memo"), pe = N("react.lazy"), F = N("react.block"), N("react.server.block"), te = N("react.fundamental"), Be = N("react.scope"), N("react.opaque.id"), Fe = N("react.debug_trace_mode"), N("react.offscreen"), ye = N("react.legacy_hidden");
    }
    function W(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Se(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case I:
          return "Fragment";
        case P:
          return "Portal";
        case A:
          return "Profiler";
        case h:
          return "StrictMode";
        case _:
          return "Suspense";
        case ee:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            var t = e;
            return Se(t) + ".Consumer";
          case K:
            var n = e;
            return Se(n._context) + ".Provider";
          case ke:
            return W(e, e.render, "ForwardRef");
          case B:
            return V(e.type);
          case F:
            return V(e._render);
          case pe: {
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
    var tt = !1, he = 0, je, Ee, Ye, $e, Z, Y, rt;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Zt() {
      {
        if (he === 0) {
          je = console.log, Ee = console.info, Ye = console.warn, $e = console.error, Z = console.group, Y = console.groupCollapsed, rt = console.groupEnd;
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
        he++;
      }
    }
    function De() {
      {
        if (he--, he === 0) {
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
              value: Ee
            }),
            warn: l({}, e, {
              value: Ye
            }),
            error: l({}, e, {
              value: $e
            }),
            group: l({}, e, {
              value: Z
            }),
            groupCollapsed: l({}, e, {
              value: Y
            }),
            groupEnd: l({}, e, {
              value: rt
            })
          });
        }
        he < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var bt = C.ReactCurrentDispatcher, xt;
    function it(e, t, n) {
      {
        if (xt === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            xt = o && o[1] || "";
          }
        return `
` + xt + e;
      }
    }
    var ae = !1, Pe;
    {
      var M = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new M();
    }
    function ze(e, t) {
      if (!e || ae)
        return "";
      {
        var n = Pe.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ae = !0;
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
          for (var g = H.stack.split(`
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
                    return typeof e == "function" && Pe.set(e, $), $;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, bt.current = p, De(), Error.prepareStackTrace = s;
      }
      var Q = e ? e.displayName || e.name : "", w = Q ? it(Q) : "";
      return typeof e == "function" && Pe.set(e, w), w;
    }
    function Xe(e, t, n) {
      return ze(e, !1);
    }
    function Oe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ae(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ze(e, Oe(e));
      if (typeof e == "string")
        return it(e);
      switch (e) {
        case _:
          return it("Suspense");
        case ee:
          return it("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ke:
            return Xe(e.render);
          case B:
            return Ae(e.type, t, n);
          case F:
            return Xe(e._render);
          case pe: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Ae(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = {}, wt = C.ReactDebugCurrentFrame;
    function Le(e) {
      if (e) {
        var t = e._owner, n = Ae(e.type, e._source, t ? t.type : null);
        wt.setExtraStackFrame(n);
      } else
        wt.setExtraStackFrame(null);
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
            g && !(g instanceof Error) && (Le(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof g), Le(null)), g instanceof Error && !(g.message in Re) && (Re[g.message] = !0, Le(s), y("Failed %s type: %s", n, g.message), Le(null));
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
    function Ge(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Et(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === J && s._context === void 0
          );
          if (!p && !ot.has(e)) {
            ot.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === K ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", V(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ge(s, n), s[n];
        {
          var g = kt(e, t);
          return e.contextTypes && St(e.contextTypes, g, "context"), g;
        }
      } else {
        var d = kt(e, t);
        return e.contextTypes && St(e.contextTypes, d, "context"), d;
      }
    }
    for (var q = new Uint16Array(16), st = 0; st < 15; st++)
      q[st] = st + 1;
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
    function Ot(e) {
      q[e] = q[0], q[0] = e;
    }
    var lt = 0, fe = 1, Rt = 2, Ne = 3, ut = 4, me = 5, ct = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ze = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", It = new RegExp("^[" + _t + "][" + Ze + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Ct(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : It.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
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
          case Ne:
            return !t;
          case ut:
            return t === !1;
          case me:
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
      this.acceptsBooleans = t === Rt || t === Ne || t === ut, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
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
        Ne,
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
        Ne,
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
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, re = !1;
    function X(e) {
      !re && m.test(e) && (re = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ne = /["'&<>]/;
    function U(e) {
      var t = "" + e, n = ne.exec(t);
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
      return typeof e == "boolean" || typeof e == "number" ? "" + e : U(e);
    }
    function G(e) {
      return '"' + T(e) + '"';
    }
    function Ie() {
      return Ft + '=""';
    }
    function se(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === Ne || s === ut && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, X(t)), o + "=" + G(t));
      } else if (Ct(e))
        return e + "=" + G(t);
      return "";
    }
    function le(e, t) {
      return !Ct(e) || t == null ? "" : e + "=" + G(t);
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Tt = typeof Object.is == "function" ? Object.is : de, j = null, Nt = null, z = null, Dt = !1, Ut = !1, Ue = null, Ht = 0, kn = 25, Ce = !1, dt;
    function Ke() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ce && y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", dt), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, dt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tt(e[n], t[n]))
          return !1;
      return !0;
    }
    function hr() {
      if (Ht > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function er() {
      return z === null ? Nt === null ? (Dt = !1, Nt = z = hr()) : (Dt = !0, z = Nt) : z.next === null ? (Dt = !1, z = z.next = hr()) : (Dt = !0, z = z.next), z;
    }
    function vr(e) {
      j = e, Ce = !1;
    }
    function gr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Ht += 1, z = null, n = e(t, o);
      return yr(), n;
    }
    function yr() {
      Ce = !1, j = null, Ut = !1, Nt = null, Ht = 0, Ue = null, z = null;
    }
    function En(e, t) {
      var n = pt.threadID;
      return Ge(e, n), Ce && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      dt = "useContext", Ke();
      var n = pt.threadID;
      return Ge(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return dt = "useState", mr(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function mr(e, t, n) {
      if (e !== tr && (dt = "useReducer"), j = Ke(), z = er(), Dt) {
        var o = z.queue, s = o.dispatch;
        if (Ue !== null) {
          var p = Ue.get(o);
          if (p !== void 0) {
            Ue.delete(o);
            var c = z.memoizedState, g = p;
            do {
              var d = g.action;
              Ce = !0, c = e(c, d), Ce = !1, g = g.next;
            } while (g !== null);
            return z.memoizedState = c, [c, s];
          }
        }
        return [z.memoizedState, s];
      } else {
        Ce = !0;
        var O;
        e === tr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Ce = !1, z.memoizedState = O;
        var R = z.queue = {
          last: null,
          dispatch: null
        }, $ = R.dispatch = Tn.bind(null, j, R);
        return [z.memoizedState, $];
      }
    }
    function br(e, t) {
      j = Ke(), z = er();
      var n = t === void 0 ? null : t;
      if (z !== null) {
        var o = z.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Sn(n, s))
            return o[0];
        }
      }
      Ce = !0;
      var p = e();
      return Ce = !1, z.memoizedState = [p, n], p;
    }
    function In(e) {
      j = Ke(), z = er();
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
      dt = "useLayoutEffect", y("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
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
      return br(function() {
        return e;
      }, t);
    }
    function Pn(e, t, n) {
      return Ke(), t(e._source);
    }
    function An(e) {
      return Ke(), e;
    }
    function Mn() {
      Ke();
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
      useMemo: br,
      useReducer: mr,
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
    }, Wt = "http://www.w3.org/1999/xhtml", wr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: Wt,
      mathml: wr,
      svg: nr
    };
    function kr(e) {
      switch (e) {
        case "svg":
          return nr;
        case "math":
          return wr;
        default:
          return Wt;
      }
    }
    function jn(e, t) {
      return e == null || e === Wt ? kr(t) : e === nr && t === "foreignObject" ? Wt : e;
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
    var Sr = {
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
    }, Sr), Nn = "__html";
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
    function Hn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Wn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pt).forEach(function(e) {
      Wn.forEach(function(t) {
        Pt[Hn(t, e)] = Pt[e];
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
    var Er = function() {
    };
    {
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Or = /;\s*$/, ht = {}, sr = {}, Rr = !1, Ir = !1, Zn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Kn = function(e) {
        ht.hasOwnProperty(e) && ht[e] || (ht[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        ht.hasOwnProperty(e) && ht[e] || (ht[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jn = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Or, "")));
      }, ei = function(e, t) {
        Rr || (Rr = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ti = function(e, t) {
        Ir || (Ir = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Er = function(e, t) {
        e.indexOf("-") > -1 ? Kn(e) : $n.test(e) ? Qn(e) : Or.test(t) && Jn(e, t), typeof t == "number" && (isNaN(t) ? ei(e, t) : isFinite(t) || ti(e, t));
      };
    }
    var ri = Er, Cr = {
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
    }, vt = {}, ni = new RegExp("^(aria)-[" + Ze + "]*$"), ii = new RegExp("^(aria)[A-Z][" + Ze + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(vt, t) && vt[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Cr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), vt[t] = !0, !0;
          if (t !== o)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), vt[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), p = Cr.hasOwnProperty(s) ? s : null;
          if (p == null)
            return vt[t] = !0, !1;
          if (t !== p)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), vt[t] = !0, !0;
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
    var Tr = !1;
    function ui(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Tr && (Tr = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
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
      var ie = {}, ci = Object.prototype.hasOwnProperty, Ar = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + Ze + "]*$"), pi = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
      Pr = function(e, t, n, o) {
        if (ci.call(ie, t) && ie[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ie[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, g), ie[t] = !0, !0;
          if (Ar.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), ie[t] = !0, !0;
        } else if (Ar.test(t))
          return fi.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ie[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ie[t] = !0, !0;
        if (s === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ie[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ie[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ie[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === lt;
        if (Dr.hasOwnProperty(s)) {
          var R = Dr[s];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ie[t] = !0, !0;
        } else if (!O && t !== s)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), ie[t] = !0, !0;
        return typeof n == "boolean" && ft(t, n, d, !1) ? (n ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ie[t] = !0, !0) : O ? !0 : ft(t, n, d, !1) ? (ie[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === Ne && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ie[t] = !0), !0);
      };
    }
    var hi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var p = Pr(e, s, t[s], n);
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
    var He = u.Children.toArray, Me = [], lr = C.ReactCurrentDispatcher, Vt, ur = null, Mr = function() {
      return "";
    }, _r = function(e) {
      return "";
    }, Fr = function(e, t) {
    }, jr = function(e) {
    }, zr = function(e) {
    }, Lr = function() {
    }, Nr = !1;
    Vt = C.ReactDebugCurrentFrame, Fr = function(e, t) {
      li(e, t), ui(e, t), vi(e, t, null);
    }, _r = function(e) {
      return Ae(e.type, e._source, null);
    }, jr = function(e) {
      Me.push(e), Me.length === 1 && (ur = Vt.getCurrentStack, Vt.getCurrentStack = Mr);
    }, zr = function(e) {
      var t = Me[Me.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Lr = function() {
      Me.pop(), Me.length === 0 && (Vt.getCurrentStack = ur, ur = null);
    }, Mr = function() {
      if (Me.length === 0)
        return "";
      for (var e = Me[Me.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, p = s.length - 1; p >= 0; p--)
          t += _r(s[p]);
      return t;
    };
    var Ur = !1, Hr = !1, Wr = !1, Vr = !1, qr = !1, Br = {}, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = ["value", "defaultValue"], gi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, yi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qr = {};
    function mi(e) {
      if (!Qr.hasOwnProperty(e)) {
        if (!yi.test(e))
          throw Error("Invalid tag: " + e);
        Qr[e] = !0;
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
    function Jr(e, t) {
      {
        var n = e.constructor, o = n && V(n) || "ReactClass", s = o + "." + t;
        if (Br[s])
          return;
        y(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Br[s] = !0;
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
          return T(n);
      }
      return null;
    }
    function Si(e) {
      if (!u.isValidElement(e))
        return He(e);
      var t = e;
      if (t.type !== I)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return He(n);
      var o = n;
      return [o];
    }
    function Ei(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !qr && typeof n != "string" && typeof n != "number" && (qr = !0, y("Only strings and numbers are supported as <option> children.")));
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
            g ? Ii.hasOwnProperty(d) || (R = le(d, O)) : R = se(d, O), R && (c += " " + R);
          }
        }
      return s || p && (c += " " + Ie()), c;
    }
    function en(e, t) {
      if (e === void 0)
        throw Error((V(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (zr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, g) {
        var d = wi(g), O = Et(g, t, n, d), R = [], $ = !1, Q = {
          isMounted: function(qe) {
            return !1;
          },
          enqueueForceUpdate: function(qe) {
            if (R === null)
              return Jr(qe, "forceUpdate"), null;
          },
          enqueueReplaceState: function(qe, yt) {
            $ = !0, R = [yt];
          },
          enqueueSetState: function(qe, yt) {
            if (R === null)
              return Jr(qe, "setState"), null;
            R.push(yt);
          }
        }, w;
        if (d) {
          if (w = new g(c.props, O, Q), typeof g.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var H = V(g) || "Unknown";
              Zr[H] || (y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", H, w.state === null ? "null" : "undefined", H), Zr[H] = !0);
            }
            var oe = g.getDerivedStateFromProps.call(null, c.props, w.state);
            if (oe === void 0) {
              var ue = V(g) || "Unknown";
              Gr[ue] || (y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", ue), Gr[ue] = !0);
            }
            oe != null && (w.state = l({}, w.state, oe));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var ce = V(g) || "Unknown";
            Yr[ce] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ce, ce), Yr[ce] = !0);
          }
          var We = {};
          if (vr(We), w = g(c.props, O, Q), w = gr(g, c.props, w, O), w != null && w.render != null) {
            var ve = V(g) || "Unknown";
            $r[ve] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ve, ve, ve), $r[ve] = !0);
          }
          if (w == null || w.render == null) {
            e = w, en(e, g);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = Q;
        var be = w.state;
        if (be === void 0 && (w.state = be = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Ve = V(g) || "Unknown";
              Xr[Ve] || (L(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Ve
              ), Xr[Ve] = !0);
            }
            typeof g.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof g.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var ge = R, xe = $;
            if (R = null, $ = !1, xe && ge.length === 1)
              w.state = ge[0];
            else {
              for (var Te = xe ? ge[0] : w.state, qt = !0, gt = xe ? 1 : 0; gt < ge.length; gt++) {
                var we = ge[gt], At = typeof we == "function" ? we.call(w, Te, c.props, O) : we;
                At != null && (qt ? (qt = !1, Te = l({}, Te, At)) : l(Te, At));
              }
              w.state = Te;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), en(e, g);
        var Qe;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Qe = w.getChildContext();
              for (var Yt in Qe)
                if (!(Yt in Bt))
                  throw Error((V(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", V(g) || "Unknown");
          }
          Qe && (t = l({}, t, Qe));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var tn = /* @__PURE__ */ function() {
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
        Ge(p, c);
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
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === K) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === _) {
                this.suspenseDepth--;
                var $ = c.pop();
                if (g) {
                  g = !1;
                  var Q = d.fallbackFrame;
                  if (!Q)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(Q), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += $;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var w = d.children[d.childIndex++], H = "";
            jr(this.stack), d.debugElementStack.length = 0;
            try {
              H += this.render(w, d.context, d.domNamespace);
            } catch (oe) {
              if (oe != null && typeof oe.then == "function") {
                if (!tt)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw oe;
            } finally {
              Lr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += H;
          }
          return c[0];
        } finally {
          lr.current = p, xr(s), yr();
        }
      }, t.render = function(o, s, p) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? T(c) : this.previousWasTextNode ? "<!-- -->" + T(c) : (this.previousWasTextNode = !0, T(c));
        } else {
          var g, d = Ti(o, s, this.threadID);
          if (g = d.child, s = d.context, g === null || g === !1)
            return "";
          if (!u.isValidElement(g)) {
            if (g != null && g.$$typeof != null) {
              var O = g.$$typeof;
              throw Error(O === P ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = He(g), $ = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return $.debugElementStack = [], this.stack.push($), "";
          }
          var Q = g, w = Q.type;
          if (typeof w == "string")
            return this.renderDOM(Q, s, p);
          switch (w) {
            case ye:
            case Fe:
            case h:
            case A:
            case ee:
            case I: {
              var H = He(g.props.children), oe = {
                type: null,
                domNamespace: p,
                children: H,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return oe.debugElementStack = [], this.stack.push(oe), "";
            }
            case _:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Be:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case ke: {
                var ue = g, ce, We = {};
                vr(We), ce = w.render(ue.props, ue.ref), ce = gr(w.render, ue.props, ce, ue.ref), ce = He(ce);
                var ve = {
                  type: null,
                  domNamespace: p,
                  children: ce,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ve.debugElementStack = [], this.stack.push(ve), "";
              }
              case B: {
                var be = g, Ve = [u.createElement(w.type, l({
                  ref: be.ref
                }, be.props))], ge = {
                  type: null,
                  domNamespace: p,
                  children: Ve,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ge.debugElementStack = [], this.stack.push(ge), "";
              }
              case K: {
                var xe = g, Te = xe.props, qt = He(Te.children), gt = {
                  type: xe,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return gt.debugElementStack = [], this.pushProvider(xe), this.stack.push(gt), "";
              }
              case J: {
                var we = g.type;
                we._context === void 0 ? we !== we.Consumer && (Nr || (Nr = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : we = we._context;
                var At = g.props, Qe = this.threadID;
                Ge(we, Qe);
                var Bt = we[Qe], Yt = He(At.children(Bt)), qe = {
                  type: g,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return qe.debugElementStack = [], this.stack.push(qe), "";
              }
              case te:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case pe: {
                var yt = g, rn = g.type, _i = rn._payload, Fi = rn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: yt.ref
                }, yt.props))], nn = {
                  type: null,
                  domNamespace: p,
                  children: zi,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return nn.debugElementStack = [], this.stack.push(nn), "";
              }
            }
          var fr = "";
          {
            var on = Q._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var an = on ? V(on) : null;
            an && (fr += `

Check the render method of \`` + an + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), g = p;
        p === ir.html && (g = kr(c)), g === ir.html && c !== o.type && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
        var d = o.props;
        if (c === "input")
          or("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Hr && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Hr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Ur && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Ur = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (y("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
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
            for (var Q = 0; Q < Kr.length; Q++) {
              var w = Kr[Q];
              if (d[w] != null) {
                var H = Array.isArray(d[w]);
                d.multiple && !H ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && H && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Wr && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var oe = null, ue = this.currentSelectValue, ce = Ei(d.children);
          if (ue != null) {
            var We;
            if (d.value != null ? We = d.value + "" : We = ce, oe = !1, Array.isArray(ue)) {
              for (var ve = 0; ve < ue.length; ve++)
                if ("" + ue[ve] === We) {
                  oe = !0;
                  break;
                }
            } else
              oe = "" + ue === We;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: oe,
              children: ce
            });
          }
        }
        Fr(c, d), Un(c, d);
        var be = Ci(o.type, c, d, g, this.makeStaticMarkup, this.stack.length === 1), Ve = "";
        Sr.hasOwnProperty(c) ? be += "/>" : (be += ">", Ve = "</" + o.type + ">");
        var ge, xe = ki(d);
        xe != null ? (ge = [], gi.hasOwnProperty(c) && xe.charAt(0) === `
` && (be += `
`), be += xe) : ge = He(d.children);
        var Te = {
          domNamespace: jn(p, o.type),
          type: c,
          children: ge,
          childIndex: 0,
          context: s,
          footer: Ve
        };
        return Te.debugElementStack = [], this.stack.push(Te), this.previousWasTextNode = !1, be;
      }, e;
    }();
    function Di(e, t) {
      var n = new tn(e, !1, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Pi(e, t) {
      var n = new tn(e, !0, t);
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
    et.renderToNodeStream = Ai, et.renderToStaticMarkup = Pi, et.renderToStaticNodeStream = Mi, et.renderToString = Di, et.version = E;
  }()), et;
}
process.env.NODE_ENV === "production" ? pr.exports = Wi() : pr.exports = Vi();
var qi = pr.exports;
const Bi = /* @__PURE__ */ Hi(qi);
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, hn = _e.createContext && /* @__PURE__ */ _e.createContext(bn), Yi = ["attr", "size", "title"];
function $i(u, l) {
  if (u == null)
    return {};
  var v, E, C = Xi(u, l);
  if (Object.getOwnPropertySymbols) {
    var L = Object.getOwnPropertySymbols(u);
    for (E = 0; E < L.length; E++)
      v = L[E], l.indexOf(v) === -1 && {}.propertyIsEnumerable.call(u, v) && (C[v] = u[v]);
  }
  return C;
}
function Xi(u, l) {
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
function vn(u, l) {
  var v = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(C) {
      return Object.getOwnPropertyDescriptor(u, C).enumerable;
    })), v.push.apply(v, E);
  }
  return v;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var v = arguments[l] != null ? arguments[l] : {};
    l % 2 ? vn(Object(v), !0).forEach(function(E) {
      Gi(u, E, v[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(v)) : vn(Object(v)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(v, E));
    });
  }
  return u;
}
function Gi(u, l, v) {
  return (l = Zi(l)) in u ? Object.defineProperty(u, l, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = v, u;
}
function Zi(u) {
  var l = Ki(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Ki(u, l) {
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
  return u && u.map((l, v) => /* @__PURE__ */ _e.createElement(l.tag, Gt({
    key: v
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ _e.createElement(Qi, Xt({
    attr: Gt({}, u.attr)
  }, l), xn(u.child));
}
function Qi(u) {
  var l = (v) => {
    var {
      attr: E,
      size: C,
      title: L
    } = u, y = $i(u, Yi), D = C || v.size || "1em", P;
    return v.className && (P = v.className), u.className && (P = (P ? P + " " : "") + u.className), /* @__PURE__ */ _e.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, v.attr, E, y, {
      className: P,
      style: Gt(Gt({
        color: u.color || v.color
      }, v.style), u.style),
      height: D,
      width: D,
      xmlns: "http://www.w3.org/2000/svg"
    }), L && /* @__PURE__ */ _e.createElement("title", null, L), u.children);
  };
  return hn !== void 0 ? /* @__PURE__ */ _e.createElement(hn.Consumer, null, (v) => l(v)) : l(bn);
}
function Ji(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const gn = (u) => {
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
}, to = {
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
}, yn = (u, l) => {
  const v = to[u] || "xy";
  let E = [], C = [], L = [];
  if (!l || !Array.isArray(l) || l.length === 0)
    return { series: [], labels: [], categories: [] };
  const y = l[0], D = Object.keys(y).filter((I) => typeof y[I] == "number"), P = Object.keys(y).find((I) => typeof y[I] == "string") || "x";
  switch (v) {
    case "circular":
      E = l.map((h) => Number(h.value ?? h.y ?? h[D[0]] ?? 0)), C = l.map((h) => String(h.label ?? h.category ?? h.name ?? h.x ?? "Unknown"));
      break;
    case "category":
      L = l.map((h) => String(h.x ?? h.category ?? h.stage ?? h[P] ?? "Unknown")), D.length > 0 ? E = D.map((h) => ({
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
      const I = {};
      l.forEach((h) => {
        const A = h.group ?? "Series 1";
        I[A] || (I[A] = []), I[A].push({ x: String(h.x ?? h.category ?? "Unknown"), y: h.value ?? h.y ?? 0 });
      }), E = Object.keys(I).map((h) => ({ name: h, data: I[h] }));
      break;
    default:
      u === "bubble" ? E = [{
        name: "Series 1",
        data: l.map((h) => ({ x: h.x ?? 0, y: h.y ?? 0, z: h.r ?? h.z ?? h.value ?? 0 }))
      }] : E = D.map((h) => ({
        name: h,
        data: l.map((A) => ({ x: A.x ?? A[P], y: A[h] ?? 0 }))
      }));
  }
  return { series: E, labels: C, categories: L };
}, oo = Li(
  ({ data: u, type: l, options: v = {}, height: E = 350, title: C }, L) => {
    const y = $t(null), D = $t(null), P = $t(null), I = $t(null), [h, A] = Ni(!1), K = ln(() => Bi.renderToString(
      /* @__PURE__ */ mt(Ji, { size: 14, style: { color: "#9ca3af", marginTop: "5px" } })
    ), []), J = ln(() => l || (Array.isArray(u[0]) ? u.map((_) => gn(_)) : gn(u)), [u, l]), ke = (_) => {
      var ye, N, W, Se;
      const ee = Array.isArray(J) ? J[0] : J, B = String(ee).toLowerCase();
      let pe = [], F = [], te = [];
      if (Array.isArray(u[0]))
        pe = u.map((tt, he) => {
          var Ye, $e;
          const je = Array.isArray(l) ? l[he] : Array.isArray(J) ? J[he] : J, Ee = yn(je, tt);
          return te.length === 0 && (te = Ee.categories || []), F.length === 0 && (F = Ee.labels || []), {
            name: ((Ye = Ee.series[0]) == null ? void 0 : Ye.name) || `Series ${he + 1}`,
            type: je,
            data: (($e = Ee.series[0]) == null ? void 0 : $e.data) || []
          };
        });
      else {
        const V = yn(B, u);
        pe = V.series || [], F = V.labels || [], te = V.categories || [];
      }
      const Be = ["pie", "donut", "radialbar", "polararea"].includes(B), Fe = B === "radar";
      return {
        ...v,
        chart: {
          id: _ ? "vizly-modal-chart" : "vizly-main-chart",
          type: B === "funnel" || B === "column" ? "bar" : Fe ? "radar" : B,
          height: "100%",
          toolbar: {
            show: !0,
            tools: {
              customIcons: _ ? [] : [{
                icon: K,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => A(!0)
              }]
            }
          },
          animations: { enabled: !_ },
          ...v.chart
        },
        // CRITICAL FIX: Always provide arrays, never undefined
        series: pe.length ? pe : Be ? [] : [{ data: [] }],
        labels: Be || Fe ? F.length ? F : te : void 0,
        xaxis: {
          ...v.xaxis,
          type: te.length ? "category" : ((ye = v.xaxis) == null ? void 0 : ye.type) || "numeric",
          categories: te.length ? te : void 0
        },
        plotOptions: {
          ...v.plotOptions,
          bar: {
            horizontal: B === "funnel" || B === "bar",
            isFunnel: B === "funnel",
            ...(N = v.plotOptions) == null ? void 0 : N.bar
          }
        },
        title: {
          text: typeof C == "string" ? C : (C == null ? void 0 : C.text) || ((W = v.title) == null ? void 0 : W.text),
          align: (typeof C == "object" ? C == null ? void 0 : C.align : (Se = v.title) == null ? void 0 : Se.align) || "left"
        },
        tooltip: { theme: "dark", ...v.tooltip }
      };
    };
    return un(() => {
      if (!y.current)
        return;
      const _ = ke(!1);
      return P.current && P.current.destroy(), P.current = new cn(y.current, _), P.current.render().catch((ee) => console.error("ApexRender Error:", ee)), () => {
        var ee;
        (ee = P.current) == null || ee.destroy(), P.current = null;
      };
    }, [u, J, v, C]), un(() => {
      if (h && D.current) {
        const _ = ke(!0), ee = setTimeout(() => {
          I.current && I.current.destroy(), I.current = new cn(D.current, _), I.current.render();
        }, 100);
        return () => {
          var B;
          clearTimeout(ee), (B = I.current) == null || B.destroy(), I.current = null;
        };
      }
    }, [h]), Ui(L, () => ({
      zoomIn: () => {
        var _;
        return (_ = P.current) == null ? void 0 : _.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var _;
        return (_ = P.current) == null ? void 0 : _.zoomX(void 0, void 0);
      },
      reset: () => {
        var _;
        return (_ = P.current) == null ? void 0 : _.resetSeries();
      },
      toggleFullscreen: () => A(!h)
    })), /* @__PURE__ */ sn("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ mt("div", { ref: y, style: { height: "100%", width: "100%" } }),
      h && /* @__PURE__ */ mt("div", { style: { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }, children: /* @__PURE__ */ sn("div", { style: { width: "90%", height: "80%", background: "#fff", borderRadius: "12px", padding: "40px", position: "relative" }, children: [
        /* @__PURE__ */ mt("button", { onClick: () => A(!1), style: { position: "absolute", top: 10, right: 10, cursor: "pointer" }, children: /* @__PURE__ */ mt(eo, { size: 20 }) }),
        /* @__PURE__ */ mt("div", { ref: D, style: { height: "100%", width: "100%" } })
      ] }) })
    ] });
  }
);
export {
  oo as VizlyChart
};
