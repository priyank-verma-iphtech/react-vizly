import { jsx as bt, jsxs as dr } from "react/jsx-runtime";
import je, { forwardRef as Ni, useRef as Xt, useState as Hi, useMemo as Ui, useCallback as un, useEffect as cn, useImperativeHandle as Wi } from "react";
import fn from "apexcharts";
function Vi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var vr = { exports: {} }, tt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, dn;
function mn() {
  if (dn)
    return pr;
  dn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
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
      var O = Object.getOwnPropertyNames(v).map(function(D) {
        return v[D];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        p[D] = D;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = T() ? Object.assign : function(M, v) {
    for (var C, O = E(M), p, D = 1; D < arguments.length; D++) {
      C = Object(arguments[D]);
      for (var F in C)
        l.call(C, F) && (O[F] = C[F]);
      if (u) {
        p = u(C);
        for (var $ = 0; $ < p.length; $++)
          g.call(C, p[$]) && (O[p[$]] = C[p[$]]);
      }
    }
    return O;
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
var pn;
function qi() {
  if (pn)
    return tt;
  pn = 1;
  var u = mn(), l = je;
  function g(r) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      o += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, T = 60107, M = 60108, v = 60114, C = 60109, O = 60110, p = 60112, D = 60113, F = 60120, $ = 60115, ae = 60116, Z = 60121, P = 60117, j = 60119, K = 60129, ee = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var z = Symbol.for;
    E = z("react.portal"), T = z("react.fragment"), M = z("react.strict_mode"), v = z("react.profiler"), C = z("react.provider"), O = z("react.context"), p = z("react.forward_ref"), D = z("react.suspense"), F = z("react.suspense_list"), $ = z("react.memo"), ae = z("react.lazy"), Z = z("react.block"), P = z("react.fundamental"), j = z("react.scope"), K = z("react.debug_trace_mode"), ee = z("react.legacy_hidden");
  }
  function te(r) {
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
      case D:
        return "Suspense";
      case F:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case O:
          return (r.displayName || "Context") + ".Consumer";
        case C:
          return (r._context.displayName || "Context") + ".Provider";
        case p:
          var o = r.render;
          return o = o.displayName || o.name || "", r.displayName || (o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef");
        case $:
          return te(r.type);
        case Z:
          return te(r._render);
        case ae:
          o = r._payload, r = r._init;
          try {
            return te(r(o));
          } catch {
          }
      }
    return null;
  }
  var Oe = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ze = {};
  function ve(r, o) {
    for (var i = r._threadCount | 0; i <= o; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function U(r, o, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ve(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = o[k];
      o = i;
    } else
      o = ze;
    return o;
  }
  for (var W = new Uint16Array(16), Re = 0; 15 > Re; Re++)
    W[Re] = Re + 1;
  W[15] = 0;
  var X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nt = Object.prototype.hasOwnProperty, we = {}, Le = {};
  function Ne(r) {
    return nt.call(Le, r) ? !0 : nt.call(we, r) ? !1 : X.test(r) ? Le[r] = !0 : (we[r] = !0, !1);
  }
  function Xe(r, o, i, f) {
    if (i !== null && i.type === 0)
      return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : i !== null ? !i.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function Ge(r, o, i, f) {
    if (o === null || typeof o > "u" || Xe(r, o, i, f))
      return !0;
    if (f)
      return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !o;
        case 4:
          return o === !1;
        case 5:
          return isNaN(o);
        case 6:
          return isNaN(o) || 1 > o;
      }
    return !1;
  }
  function B(r, o, i, f, k, w, b) {
    this.acceptsBooleans = o === 2 || o === 3 || o === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = o, this.sanitizeURL = w, this.removeEmptyString = b;
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    V[r] = new B(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var o = r[0];
    V[o] = new B(o, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    V[r] = new B(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    V[r] = new B(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    V[r] = new B(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    V[r] = new B(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    V[r] = new B(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    V[r] = new B(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    V[r] = new B(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var ge = /[\-:]([a-z])/g;
  function Ae(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var o = r.replace(
      ge,
      Ae
    );
    V[o] = new B(o, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var o = r.replace(ge, Ae);
    V[o] = new B(o, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var o = r.replace(ge, Ae);
    V[o] = new B(o, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    V[r] = new B(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), V.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    V[r] = new B(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var it = /["'&<>]/;
  function ye(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var o = it.exec(r);
    if (o) {
      var i = "", f, k = 0;
      for (f = o.index; f < r.length; f++) {
        switch (r.charCodeAt(f)) {
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
        k !== f && (i += r.substring(k, f)), k = f + 1, i += o;
      }
      r = k !== f ? i + r.substring(k, f) : i;
    }
    return r;
  }
  function wt(r, o) {
    var i = V.hasOwnProperty(r) ? V[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Ge(r, o, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && o === !0 ? r + '=""' : (i.sanitizeURL && (o = "" + o), r + '="' + (ye(o) + '"'))) : Ne(r) ? r + '="' + (ye(o) + '"') : "";
  }
  function xt(r, o) {
    return r === o && (r !== 0 || 1 / r === 1 / o) || r !== r && o !== o;
  }
  var at = typeof Object.is == "function" ? Object.is : xt, le = null, Me = null, _ = null, He = !1, Ze = !1, Ie = null, _e = 0;
  function Ce() {
    if (le === null)
      throw Error(g(321));
    return le;
  }
  function kt() {
    if (0 < _e)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ue() {
    return _ === null ? Me === null ? (He = !1, Me = _ = kt()) : (He = !0, _ = Me) : _.next === null ? (He = !1, _ = _.next = kt()) : (He = !0, _ = _.next), _;
  }
  function _t(r, o, i, f) {
    for (; Ze; )
      Ze = !1, _e += 1, _ = null, i = r(o, f);
    return ot(), i;
  }
  function ot() {
    le = null, Ze = !1, Me = null, _e = 0, _ = Ie = null;
  }
  function st(r, o) {
    return typeof o == "function" ? o(r) : o;
  }
  function St(r, o, i) {
    if (le = Ce(), _ = Ue(), He) {
      var f = _.queue;
      if (o = f.dispatch, Ie !== null && (i = Ie.get(f), i !== void 0)) {
        Ie.delete(f), f = _.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return _.memoizedState = f, [f, o];
      }
      return [_.memoizedState, o];
    }
    return r = r === st ? typeof o == "function" ? o() : o : i !== void 0 ? i(o) : o, _.memoizedState = r, r = _.queue = { last: null, dispatch: null }, r = r.dispatch = Ke.bind(null, le, r), [_.memoizedState, r];
  }
  function Et(r, o) {
    if (le = Ce(), _ = Ue(), o = o === void 0 ? null : o, _ !== null) {
      var i = _.memoizedState;
      if (i !== null && o !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < o.length; k++)
              if (!at(o[k], f[k])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), _.memoizedState = [r, o], r;
  }
  function Ke(r, o, i) {
    if (!(25 > _e))
      throw Error(g(301));
    if (r === le)
      if (Ze = !0, r = { action: i, next: null }, Ie === null && (Ie = /* @__PURE__ */ new Map()), i = Ie.get(o), i === void 0)
        Ie.set(o, r);
      else {
        for (o = i; o.next !== null; )
          o = o.next;
        o.next = r;
      }
  }
  function Ot() {
  }
  var Y = null, lt = { readContext: function(r) {
    var o = Y.threadID;
    return ve(r, o), r[o];
  }, useContext: function(r) {
    Ce();
    var o = Y.threadID;
    return ve(r, o), r[o];
  }, useMemo: Et, useReducer: St, useRef: function(r) {
    le = Ce(), _ = Ue();
    var o = _.memoizedState;
    return o === null ? (r = { current: r }, _.memoizedState = r) : o;
  }, useState: function(r) {
    return St(st, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, o) {
    return Et(function() {
      return r;
    }, o);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(r) {
    return Ce(), r;
  }, useTransition: function() {
    return Ce(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (Y.identifierPrefix || "") + "R:" + (Y.uniqueID++).toString(36);
  }, useMutableSource: function(r, o) {
    return Ce(), o(r._source);
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
  var Rt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, ut = u({ menuitem: !0 }, Rt), pe = {
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
  Object.keys(pe).forEach(function(r) {
    It.forEach(function(o) {
      o = o + r.charAt(0).toUpperCase() + r.substring(1), pe[o] = pe[r];
    });
  });
  var We = /([A-Z])/g, ct = /^ms-/, xe = l.Children.toArray, ft = Oe.ReactCurrentDispatcher, Ft = { listing: !0, pre: !0, textarea: !0 }, Qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, jt = {}, Ct = {};
  function zt(r) {
    if (r == null)
      return r;
    var o = "";
    return l.Children.forEach(r, function(i) {
      i != null && (o += i);
    }), o;
  }
  var Lt = Object.prototype.hasOwnProperty, Nt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function Tt(r, o) {
    if (r === void 0)
      throw Error(g(152, te(o) || "Component"));
  }
  function Jt(r, o, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, ne = U(S, o, i, m), Q = [], ie = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (Q === null)
          return null;
      }, enqueueReplaceState: function(Dt, L) {
        ie = !0, Q = [L];
      }, enqueueSetState: function(Dt, L) {
        if (Q === null)
          return null;
        Q.push(L);
      } };
      if (m) {
        if (m = new S(b.props, ne, H), typeof S.getDerivedStateFromProps == "function") {
          var A = S.getDerivedStateFromProps.call(null, b.props, m.state);
          A != null && (m.state = u({}, m.state, A));
        }
      } else if (le = {}, m = S(
        b.props,
        ne,
        H
      ), m = _t(S, b.props, m, ne), m == null || m.render == null) {
        r = m, Tt(r, S);
        return;
      }
      if (m.props = b.props, m.context = ne, m.updater = H, H = m.state, H === void 0 && (m.state = H = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), Q.length) {
          H = Q;
          var J = ie;
          if (Q = null, ie = !1, J && H.length === 1)
            m.state = H[0];
          else {
            A = J ? H[0] : m.state;
            var Te = !0;
            for (J = J ? 1 : 0; J < H.length; J++) {
              var ue = H[J];
              ue = typeof ue == "function" ? ue.call(m, A, b.props, ne) : ue, ue != null && (Te ? (Te = !1, A = u({}, A, ue)) : u(A, ue));
            }
            m.state = A;
          }
        } else
          Q = null;
      if (r = m.render(), Tt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var ce = m.getChildContext();
        for (var he in ce)
          if (!(he in b))
            throw Error(g(108, te(S) || "Unknown", he));
      }
      ce && (o = u({}, o, ce));
    }
    for (; l.isValidElement(r); ) {
      var k = r, w = k.type;
      if (typeof w != "function")
        break;
      f(k, w);
    }
    return { child: r, context: o };
  }
  var dt = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== T ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : xe(i)) : i = xe(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: ze, footer: "" };
      var w = W[0];
      if (w === 0) {
        var b = W;
        w = b.length;
        var S = 2 * w;
        if (!(65536 >= S))
          throw Error(g(304));
        var m = new Uint16Array(S);
        for (m.set(b), W = m, W[0] = w + 1, b = w; b < S - 1; b++)
          W[b] = b + 1;
        W[S - 1] = 0;
      } else
        W[0] = W[w];
      this.threadID = w, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var o = r.prototype;
    return o.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        W[i] = W[0], W[0] = i;
      }
    }, o.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, w = this.threadID;
      ve(k, w);
      var b = k[w];
      this.contextStack[f] = k, this.contextValueStack[f] = b, k[w] = i.props.value;
    }, o.popProvider = function() {
      var i = this.contextIndex, f = this.contextStack[i], k = this.contextValueStack[i];
      this.contextStack[i] = null, this.contextValueStack[i] = null, this.contextIndex--, f[this.threadID] = k;
    }, o.clearProviders = function() {
      for (var i = this.contextIndex; 0 <= i; i--)
        this.contextStack[i][this.threadID] = this.contextValueStack[i];
    }, o.read = function(i) {
      if (this.exhausted)
        return null;
      var f = Y;
      Y = this;
      var k = ft.current;
      ft.current = lt;
      try {
        for (var w = [""], b = !1; w[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            W[S] = W[0], W[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (b || m.childIndex >= m.children.length) {
            var ne = m.footer;
            if (ne !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === C)
              this.popProvider(m.type);
            else if (m.type === D) {
              this.suspenseDepth--;
              var Q = w.pop();
              if (b) {
                b = !1;
                var ie = m.fallbackFrame;
                if (!ie)
                  throw Error(g(303));
                this.stack.push(ie), w[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                w[this.suspenseDepth] += Q;
            }
            w[this.suspenseDepth] += ne;
          } else {
            var H = m.children[m.childIndex++], A = "";
            try {
              A += this.render(H, m.context, m.domNamespace);
            } catch (J) {
              throw J != null && typeof J.then == "function" ? Error(g(294)) : J;
            } finally {
            }
            w.length <= this.suspenseDepth && w.push(""), w[this.suspenseDepth] += A;
          }
        }
        return w[0];
      } finally {
        ft.current = k, Y = f, ot();
      }
    }, o.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? ye(k) : this.previousWasTextNode ? "<!-- -->" + ye(k) : (this.previousWasTextNode = !0, ye(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? g(257) : g(258, k.toString()));
        return i = xe(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var w = i.type;
      if (typeof w == "string")
        return this.renderDOM(i, f, k);
      switch (w) {
        case ee:
        case K:
        case M:
        case v:
        case F:
        case T:
          return i = xe(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case D:
          throw Error(g(294));
        case j:
          throw Error(g(343));
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case p:
            le = {};
            var b = w.render(i.props, i.ref);
            return b = _t(w.render, i.props, b, i.ref), b = xe(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case $:
            return i = [l.createElement(w.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case C:
            return w = xe(i.props.children), k = { type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case O:
            w = i.type, b = i.props;
            var S = this.threadID;
            return ve(w, S), w = xe(b.children(w[S])), this.stack.push({ type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }), "";
          case P:
            throw Error(g(338));
          case ae:
            return w = i.type, b = w._init, w = b(w._payload), i = [l.createElement(w, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(g(130, w == null ? w : typeof w, ""));
    }, o.renderDOM = function(i, f, k) {
      var w = i.type.toLowerCase();
      if (!jt.hasOwnProperty(w)) {
        if (!Qe.test(w))
          throw Error(g(65, w));
        jt[w] = !0;
      }
      var b = i.props;
      if (w === "input")
        b = u({ type: void 0 }, b, { defaultChecked: void 0, defaultValue: void 0, value: b.value != null ? b.value : b.defaultValue, checked: b.checked != null ? b.checked : b.defaultChecked });
      else if (w === "textarea") {
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
      } else if (w === "select")
        this.currentSelectValue = b.value != null ? b.value : b.defaultValue, b = u({}, b, { value: void 0 });
      else if (w === "option") {
        m = this.currentSelectValue;
        var ne = zt(b.children);
        if (m != null) {
          var Q = b.value != null ? b.value + "" : ne;
          if (S = !1, Array.isArray(m)) {
            for (var ie = 0; ie < m.length; ie++)
              if ("" + m[ie] === Q) {
                S = !0;
                break;
              }
          } else
            S = "" + m === Q;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: ne }
          );
        }
      }
      if (S = b) {
        if (ut[w] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(g(137, w));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(g(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(g(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(g(62));
      }
      S = b, m = this.makeStaticMarkup, ne = this.stack.length === 1, Q = "<" + i.type;
      e:
        if (w.indexOf("-") === -1)
          ie = typeof S.is == "string";
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
              ie = !1;
              break e;
            default:
              ie = !0;
          }
      for (L in S)
        if (Lt.call(S, L)) {
          var H = S[L];
          if (H != null) {
            if (L === "style") {
              var A = void 0, J = "", Te = "";
              for (A in H)
                if (H.hasOwnProperty(A)) {
                  var ue = A.indexOf("--") === 0, ce = H[A];
                  if (ce != null) {
                    if (ue)
                      var he = A;
                    else if (he = A, Ct.hasOwnProperty(he))
                      he = Ct[he];
                    else {
                      var Dt = he.replace(We, "-$1").toLowerCase().replace(ct, "-ms-");
                      he = Ct[he] = Dt;
                    }
                    J += Te + he + ":", Te = A, ue = ce == null || typeof ce == "boolean" || ce === "" ? "" : ue || typeof ce != "number" || ce === 0 || pe.hasOwnProperty(Te) && pe[Te] ? ("" + ce).trim() : ce + "px", J += ue, Te = ";";
                  }
                }
              H = J || null;
            }
            A = null, ie ? Nt.hasOwnProperty(L) || (A = L, A = Ne(A) && H != null ? A + '="' + (ye(H) + '"') : "") : A = wt(L, H), A && (Q += " " + A);
          }
        }
      m || ne && (Q += ' data-reactroot=""');
      var L = Q;
      S = "", Rt.hasOwnProperty(w) ? L += "/>" : (L += ">", S = "</" + i.type + ">");
      e: {
        if (m = b.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = b.children, typeof m == "string" || typeof m == "number") {
          m = ye(m);
          break e;
        }
        m = null;
      }
      return m != null ? (b = [], Ft.hasOwnProperty(w) && m.charAt(0) === `
` && (L += `
`), L += m) : b = xe(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: w, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, L;
    }, r;
  }();
  return tt.renderToNodeStream = function() {
    throw Error(g(207));
  }, tt.renderToStaticMarkup = function(r, o) {
    r = new dt(r, !0, o);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, tt.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, tt.renderToString = function(r, o) {
    r = new dt(r, !1, o);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, tt.version = "17.0.2", tt;
}
var rt = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function Bi() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = je, l = mn();
    function g(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", T = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        C("warn", e, n);
      }
    }
    function v(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        C("error", e, n);
      }
    }
    function C(e, t, n) {
      {
        var a = T.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var O = 60106, p = 60107, D = 60108, F = 60114, $ = 60109, ae = 60110, Z = 60112, P = 60113, j = 60120, K = 60115, ee = 60116, z = 60121, te = 60117, Oe = 60119, ze = 60129, ve = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var U = Symbol.for;
      U("react.element"), O = U("react.portal"), p = U("react.fragment"), D = U("react.strict_mode"), F = U("react.profiler"), $ = U("react.provider"), ae = U("react.context"), Z = U("react.forward_ref"), P = U("react.suspense"), j = U("react.suspense_list"), K = U("react.memo"), ee = U("react.lazy"), z = U("react.block"), U("react.server.block"), te = U("react.fundamental"), Oe = U("react.scope"), U("react.opaque.id"), ze = U("react.debug_trace_mode"), U("react.offscreen"), ve = U("react.legacy_hidden");
    }
    function W(e, t, n) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case O:
          return "Portal";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case P:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            var t = e;
            return Re(t) + ".Consumer";
          case $:
            var n = e;
            return Re(n._context) + ".Provider";
          case Z:
            return W(e, e.render, "ForwardRef");
          case K:
            return X(e.type);
          case z:
            return X(e._render);
          case ee: {
            var a = e, s = a._payload, h = a._init;
            try {
              return X(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var nt = !1, we = 0, Le, Ne, Xe, Ge, B, V, ge;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function it() {
      {
        if (we === 0) {
          Le = console.log, Ne = console.info, Xe = console.warn, Ge = console.error, B = console.group, V = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
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
    function ye() {
      {
        if (we--, we === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: Le
            }),
            info: l({}, e, {
              value: Ne
            }),
            warn: l({}, e, {
              value: Xe
            }),
            error: l({}, e, {
              value: Ge
            }),
            group: l({}, e, {
              value: B
            }),
            groupCollapsed: l({}, e, {
              value: V
            }),
            groupEnd: l({}, e, {
              value: ge
            })
          });
        }
        we < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wt = T.ReactCurrentDispatcher, xt;
    function at(e, t, n) {
      {
        if (xt === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            xt = a && a[1] || "";
          }
        return `
` + xt + e;
      }
    }
    var le = !1, Me;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new _();
    }
    function He(e, t) {
      if (!e || le)
        return "";
      {
        var n = Me.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      le = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = wt.current, wt.current = null, it();
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
            } catch (q) {
              a = q;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (q) {
              a = q;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            a = q;
          }
          e();
        }
      } catch (q) {
        if (q && a && typeof q.stack == "string") {
          for (var y = q.stack.split(`
`), d = a.stack.split(`
`), R = y.length - 1, I = d.length - 1; R >= 1 && I >= 0 && y[R] !== d[I]; )
            I--;
          for (; R >= 1 && I >= 0; R--, I--)
            if (y[R] !== d[I]) {
              if (R !== 1 || I !== 1)
                do
                  if (R--, I--, I < 0 || y[R] !== d[I]) {
                    var G = `
` + y[R].replace(" at new ", " at ");
                    return typeof e == "function" && Me.set(e, G), G;
                  }
                while (R >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        le = !1, wt.current = h, ye(), Error.prepareStackTrace = s;
      }
      var re = e ? e.displayName || e.name : "", x = re ? at(re) : "";
      return typeof e == "function" && Me.set(e, x), x;
    }
    function Ze(e, t, n) {
      return He(e, !1);
    }
    function Ie(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _e(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return He(e, Ie(e));
      if (typeof e == "string")
        return at(e);
      switch (e) {
        case P:
          return at("Suspense");
        case j:
          return at("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Z:
            return Ze(e.render);
          case K:
            return _e(e.type, t, n);
          case z:
            return Ze(e._render);
          case ee: {
            var a = e, s = a._payload, h = a._init;
            try {
              return _e(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = {}, kt = T.ReactDebugCurrentFrame;
    function Ue(e) {
      if (e) {
        var t = e._owner, n = _e(e.type, e._source, t ? t.type : null);
        kt.setExtraStackFrame(n);
      } else
        kt.setExtraStackFrame(null);
    }
    function _t(e, t, n, a, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
            var y = void 0;
            try {
              if (typeof e[c] != "function") {
                var d = Error((a || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              y = e[c](t, c, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              y = R;
            }
            y && !(y instanceof Error) && (Ue(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, c, typeof y), Ue(null)), y instanceof Error && !(y.message in Ce) && (Ce[y.message] = !0, Ue(s), v("Failed %s type: %s", n, y.message), Ue(null));
          }
      }
    }
    var ot;
    ot = /* @__PURE__ */ new Set();
    var st = {};
    Object.freeze(st);
    function St(e, t) {
      var n = e.contextTypes;
      if (!n)
        return st;
      var a = {};
      for (var s in n)
        a[s] = t[s];
      return a;
    }
    function Et(e, t, n) {
      _t(e, t, n, "Component");
    }
    function Ke(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Ot(e, t, n, a) {
      if (a) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === ae && s._context === void 0
          );
          if (!h && !ot.has(e)) {
            ot.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === $ ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", X(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ke(s, n), s[n];
        {
          var y = St(e, t);
          return e.contextTypes && Et(e.contextTypes, y, "context"), y;
        }
      } else {
        var d = St(e, t);
        return e.contextTypes && Et(e.contextTypes, d, "context"), d;
      }
    }
    for (var Y = new Uint16Array(16), lt = 0; lt < 15; lt++)
      Y[lt] = lt + 1;
    Y[15] = 0;
    function Kt() {
      var e = Y, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var a = new Uint16Array(n);
      a.set(e), Y = a, Y[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        Y[s] = s + 1;
      return Y[n - 1] = 0, t;
    }
    function Qt() {
      var e = Y[0];
      return e === 0 ? Kt() : (Y[0] = Y[e], e);
    }
    function Rt(e) {
      Y[e] = Y[0], Y[0] = e;
    }
    var ut = 0, pe = 1, It = 2, We = 3, ct = 4, xe = 5, ft = 6, Ft = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Qe = Ft + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", jt = "data-reactroot", Ct = new RegExp("^[" + Ft + "][" + Qe + "]*$"), zt = Object.prototype.hasOwnProperty, Lt = {}, Nt = {};
    function Tt(e) {
      return zt.call(Nt, e) ? !0 : zt.call(Lt, e) ? !1 : Ct.test(e) ? (Nt[e] = !0, !0) : (Lt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === ut : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function dt(e, t, n, a) {
      if (n !== null && n.type === ut)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
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
    function r(e, t, n, a) {
      if (t === null || typeof t > "u" || dt(e, t, n, a))
        return !0;
      if (a)
        return !1;
      if (n !== null)
        switch (n.type) {
          case We:
            return !t;
          case ct:
            return t === !1;
          case xe:
            return isNaN(t);
          case ft:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function o(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, a, s, h, c) {
      this.acceptsBooleans = t === It || t === We || t === ct, this.attributeName = a, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
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
      f[e] = new i(
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
      f[e] = new i(
        e,
        xe,
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
    var m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ne = !1;
    function Q(e) {
      !ne && m.test(e) && (ne = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ie = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = ie.exec(t);
      if (!n)
        return t;
      var a, s = "", h, c = 0;
      for (h = n.index; h < t.length; h++) {
        switch (t.charCodeAt(h)) {
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
        c !== h && (s += t.substring(c, h)), c = h + 1, s += a;
      }
      return c !== h ? s + t.substring(c, h) : s;
    }
    function A(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function J(e) {
      return '"' + A(e) + '"';
    }
    function Te() {
      return jt + '=""';
    }
    function ue(e, t) {
      var n = o(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var a = n.attributeName, s = n.type;
        return s === We || s === ct && t === !0 ? a + '=""' : (n.sanitizeURL && (t = "" + t, Q(t)), a + "=" + J(t));
      } else if (Tt(e))
        return e + "=" + J(t);
      return "";
    }
    function ce(e, t) {
      return !Tt(e) || t == null ? "" : e + "=" + J(t);
    }
    function he(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Dt = typeof Object.is == "function" ? Object.is : he, L = null, Ht = null, N = null, Pt = !1, Ut = !1, Ve = null, Wt = 0, Sn = 25, De = !1, pt;
    function Je() {
      if (L === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return De && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), L;
    }
    function En(e, t) {
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", pt), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, pt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dt(e[n], t[n]))
          return !1;
      return !0;
    }
    function gr() {
      if (Wt > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function er() {
      return N === null ? Ht === null ? (Pt = !1, Ht = N = gr()) : (Pt = !0, N = Ht) : N.next === null ? (Pt = !1, N = N.next = gr()) : (Pt = !0, N = N.next), N;
    }
    function yr(e) {
      L = e, De = !1;
    }
    function mr(e, t, n, a) {
      for (; Ut; )
        Ut = !1, Wt += 1, N = null, n = e(t, a);
      return br(), n;
    }
    function br() {
      De = !1, L = null, Ut = !1, Ht = null, Wt = 0, Ve = null, N = null;
    }
    function On(e, t) {
      var n = ht.threadID;
      return Ke(e, n), De && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function Rn(e, t) {
      pt = "useContext", Je();
      var n = ht.threadID;
      return Ke(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function In(e) {
      return pt = "useState", wr(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function wr(e, t, n) {
      if (e !== tr && (pt = "useReducer"), L = Je(), N = er(), Pt) {
        var a = N.queue, s = a.dispatch;
        if (Ve !== null) {
          var h = Ve.get(a);
          if (h !== void 0) {
            Ve.delete(a);
            var c = N.memoizedState, y = h;
            do {
              var d = y.action;
              De = !0, c = e(c, d), De = !1, y = y.next;
            } while (y !== null);
            return N.memoizedState = c, [c, s];
          }
        }
        return [N.memoizedState, s];
      } else {
        De = !0;
        var R;
        e === tr ? R = typeof t == "function" ? t() : t : R = n !== void 0 ? n(t) : t, De = !1, N.memoizedState = R;
        var I = N.queue = {
          last: null,
          dispatch: null
        }, G = I.dispatch = Dn.bind(null, L, I);
        return [N.memoizedState, G];
      }
    }
    function xr(e, t) {
      L = Je(), N = er();
      var n = t === void 0 ? null : t;
      if (N !== null) {
        var a = N.memoizedState;
        if (a !== null && n !== null) {
          var s = a[1];
          if (En(n, s))
            return a[0];
        }
      }
      De = !0;
      var h = e();
      return De = !1, N.memoizedState = [h, n], h;
    }
    function Cn(e) {
      L = Je(), N = er();
      var t = N.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), N.memoizedState = n, n;
      } else
        return t;
    }
    function Tn(e, t) {
      pt = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Dn(e, t, n) {
      if (!(Wt < Sn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === L) {
        Ut = !0;
        var a = {
          action: n,
          next: null
        };
        Ve === null && (Ve = /* @__PURE__ */ new Map());
        var s = Ve.get(t);
        if (s === void 0)
          Ve.set(t, a);
        else {
          for (var h = s; h.next !== null; )
            h = h.next;
          h.next = a;
        }
      }
    }
    function Pn(e, t) {
      return xr(function() {
        return e;
      }, t);
    }
    function An(e, t, n) {
      return Je(), t(e._source);
    }
    function Mn(e) {
      return Je(), e;
    }
    function _n() {
      Je();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function Fn() {
      return (ht.identifierPrefix || "") + "R:" + (ht.uniqueID++).toString(36);
    }
    function rr() {
    }
    var ht = null;
    function kr(e) {
      ht = e;
    }
    var jn = {
      readContext: On,
      useContext: Rn,
      useMemo: xr,
      useReducer: wr,
      useRef: Cn,
      useState: In,
      useLayoutEffect: Tn,
      useCallback: Pn,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: rr,
      // Effects are not run in the server environment.
      useEffect: rr,
      // Debugging effect
      useDebugValue: rr,
      useDeferredValue: Mn,
      useTransition: _n,
      useOpaqueIdentifier: Fn,
      // Subscriptions are not setup in a server environment.
      useMutableSource: An
    }, Vt = "http://www.w3.org/1999/xhtml", Sr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: Vt,
      mathml: Sr,
      svg: nr
    };
    function Er(e) {
      switch (e) {
        case "svg":
          return nr;
        case "math":
          return Sr;
        default:
          return Vt;
      }
    }
    function zn(e, t) {
      return e == null || e === Vt ? Er(t) : e === nr && t === "foreignObject" ? Vt : e;
    }
    var Ln = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ar(e, t) {
      Ln[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    var Or = {
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
    }, Nn = l({
      menuitem: !0
    }, Or), Hn = "__html";
    function Un(e, t) {
      if (t) {
        if (Nn[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Hn in t.dangerouslySetInnerHTML))
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
    function Wn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Vn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(At).forEach(function(e) {
      Vn.forEach(function(t) {
        At[Wn(t, e)] = At[e];
      });
    });
    function qn(e, t, n) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !n && typeof t == "number" && t !== 0 && !(At.hasOwnProperty(e) && At[e]) ? t + "px" : ("" + t).trim();
    }
    var Bn = /([A-Z])/g, Yn = /^ms-/;
    function $n(e) {
      return e.replace(Bn, "-$1").toLowerCase().replace(Yn, "-ms-");
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
    var Rr = function() {
    };
    {
      var Xn = /^(?:webkit|moz|o)[A-Z]/, Gn = /^-ms-/, Zn = /-(.)/g, Ir = /;\s*$/, vt = {}, sr = {}, Cr = !1, Tr = !1, Kn = function(e) {
        return e.replace(Zn, function(t, n) {
          return n.toUpperCase();
        });
      }, Qn = function(e) {
        vt.hasOwnProperty(e) && vt[e] || (vt[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kn(e.replace(Gn, "ms-"))
        ));
      }, Jn = function(e) {
        vt.hasOwnProperty(e) && vt[e] || (vt[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ei = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ir, "")));
      }, ti = function(e, t) {
        Cr || (Cr = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ri = function(e, t) {
        Tr || (Tr = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Rr = function(e, t) {
        e.indexOf("-") > -1 ? Qn(e) : Xn.test(e) ? Jn(e) : Ir.test(t) && ei(e, t), typeof t == "number" && (isNaN(t) ? ti(e, t) : isFinite(t) || ri(e, t));
      };
    }
    var ni = Rr, Dr = {
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
    }, gt = {}, ii = new RegExp("^(aria)-[" + Qe + "]*$"), ai = new RegExp("^(aria)[A-Z][" + Qe + "]*$"), oi = Object.prototype.hasOwnProperty;
    function si(e, t) {
      {
        if (oi.call(gt, t) && gt[t])
          return !0;
        if (ai.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), a = Dr.hasOwnProperty(n) ? n : null;
          if (a == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), gt[t] = !0, !0;
          if (t !== a)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), gt[t] = !0, !0;
        }
        if (ii.test(t)) {
          var s = t.toLowerCase(), h = Dr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return gt[t] = !0, !1;
          if (t !== h)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), gt[t] = !0, !0;
        }
      }
      return !0;
    }
    function li(e, t) {
      {
        var n = [];
        for (var a in t) {
          var s = si(e, a);
          s || n.push(a);
        }
        var h = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function ui(e, t) {
      or(e, t) || li(e, t);
    }
    var Pr = !1;
    function ci(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Pr && (Pr = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
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
    }, Mr = function() {
    };
    {
      var oe = {}, fi = Object.prototype.hasOwnProperty, _r = /^on./, di = /^on[^A-Z]/, pi = new RegExp("^(aria)-[" + Qe + "]*$"), hi = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
      Mr = function(e, t, n, a) {
        if (fi.call(oe, t) && oe[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), oe[t] = !0, !0;
        if (a != null) {
          var h = a.registrationNameDependencies, c = a.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var y = c.hasOwnProperty(s) ? c[s] : null;
          if (y != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, y), oe[t] = !0, !0;
          if (_r.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), oe[t] = !0, !0;
        } else if (_r.test(t))
          return di.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), oe[t] = !0, !0;
        if (pi.test(t) || hi.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), oe[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), oe[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), oe[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), oe[t] = !0, !0;
        var d = o(t), R = d !== null && d.type === ut;
        if (Ar.hasOwnProperty(s)) {
          var I = Ar[s];
          if (I !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, I), oe[t] = !0, !0;
        } else if (!R && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), oe[t] = !0, !0;
        return typeof n == "boolean" && dt(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), oe[t] = !0, !0) : R ? !0 : dt(t, n, d, !1) ? (oe[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === We && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), oe[t] = !0), !0);
      };
    }
    var vi = function(e, t, n) {
      {
        var a = [];
        for (var s in t) {
          var h = Mr(e, s, t[s], n);
          h || a.push(s);
        }
        var c = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : a.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function gi(e, t, n) {
      or(e, t) || vi(e, t, n);
    }
    var qe = u.Children.toArray, Fe = [], lr = T.ReactCurrentDispatcher, qt, ur = null, Fr = function() {
      return "";
    }, jr = function(e) {
      return "";
    }, zr = function(e, t) {
    }, Lr = function(e) {
    }, Nr = function(e) {
    }, Hr = function() {
    }, Ur = !1;
    qt = T.ReactDebugCurrentFrame, zr = function(e, t) {
      ui(e, t), ci(e, t), gi(e, t, null);
    }, jr = function(e) {
      return _e(e.type, e._source, null);
    }, Lr = function(e) {
      Fe.push(e), Fe.length === 1 && (ur = qt.getCurrentStack, qt.getCurrentStack = Fr);
    }, Nr = function(e) {
      var t = Fe[Fe.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Hr = function() {
      Fe.pop(), Fe.length === 0 && (qt.getCurrentStack = ur, ur = null);
    }, Fr = function() {
      if (Fe.length === 0)
        return "";
      for (var e = Fe[Fe.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var a = e[n], s = a.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += jr(s[h]);
      return t;
    };
    var Wr = !1, Vr = !1, qr = !1, Br = !1, Yr = !1, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = {}, Qr = {}, Jr = ["value", "defaultValue"], yi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, mi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, en = {};
    function bi(e) {
      if (!en.hasOwnProperty(e)) {
        if (!mi.test(e))
          throw Error("Invalid tag: " + e);
        en[e] = !0;
      }
    }
    var cr = {}, wi = function(e) {
      if (cr.hasOwnProperty(e))
        return cr[e];
      var t = $n(e);
      return cr[e] = t, t;
    };
    function xi(e) {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var s = a.indexOf("--") === 0, h = e[a];
          s || ni(a, h), h != null && (t += n + (s ? a : wi(a)) + ":", t += qn(a, h, s), n = ";");
        }
      return t || null;
    }
    function tn(e, t) {
      {
        var n = e.constructor, a = n && X(n) || "ReactClass", s = a + "." + t;
        if ($r[s])
          return;
        v(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, a), $r[s] = !0;
      }
    }
    function ki(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Si(e) {
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
    function Ei(e) {
      if (!u.isValidElement(e))
        return qe(e);
      var t = e;
      if (t.type !== p)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return qe(n);
      var a = n;
      return [a];
    }
    function Oi(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Yr && typeof n != "string" && typeof n != "number" && (Yr = !0, v("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Ri = Object.prototype.hasOwnProperty, Ii = "style", Ci = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ti(e, t, n, a, s, h) {
      var c = "<" + e, y = or(t, n);
      for (var d in n)
        if (Ri.call(n, d)) {
          var R = n[d];
          if (R != null) {
            d === Ii && (R = xi(R));
            var I = null;
            y ? Ci.hasOwnProperty(d) || (I = ce(d, R)) : I = ue(d, R), I && (c += " " + I);
          }
        }
      return s || h && (c += " " + Te()), c;
    }
    function rn(e, t) {
      if (e === void 0)
        throw Error((X(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Di(e, t, n) {
      for (; u.isValidElement(e); ) {
        var a = e, s = a.type;
        if (Nr(a), typeof s != "function")
          break;
        h(a, s);
      }
      function h(c, y) {
        var d = ki(y), R = Ot(y, t, n, d), I = [], G = !1, re = {
          isMounted: function($e) {
            return !1;
          },
          enqueueForceUpdate: function($e) {
            if (I === null)
              return tn($e, "forceUpdate"), null;
          },
          enqueueReplaceState: function($e, mt) {
            G = !0, I = [mt];
          },
          enqueueSetState: function($e, mt) {
            if (I === null)
              return tn($e, "setState"), null;
            I.push(mt);
          }
        }, x;
        if (d) {
          if (x = new y(c.props, R, re), typeof y.getDerivedStateFromProps == "function") {
            if (x.state === null || x.state === void 0) {
              var q = X(y) || "Unknown";
              Qr[q] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", q, x.state === null ? "null" : "undefined", q), Qr[q] = !0);
            }
            var se = y.getDerivedStateFromProps.call(null, c.props, x.state);
            if (se === void 0) {
              var fe = X(y) || "Unknown";
              Kr[fe] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", fe), Kr[fe] = !0);
            }
            se != null && (x.state = l({}, x.state, se));
          }
        } else {
          if (y.prototype && typeof y.prototype.render == "function") {
            var de = X(y) || "Unknown";
            Xr[de] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", de, de), Xr[de] = !0);
          }
          var Be = {};
          if (yr(Be), x = y(c.props, R, re), x = mr(y, c.props, x, R), x != null && x.render != null) {
            var me = X(y) || "Unknown";
            Gr[me] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", me, me, me), Gr[me] = !0);
          }
          if (x == null || x.render == null) {
            e = x, rn(e, y);
            return;
          }
        }
        x.props = c.props, x.context = R, x.updater = re;
        var ke = x.state;
        if (ke === void 0 && (x.state = ke = null), typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function") {
          if (typeof x.componentWillMount == "function") {
            if (x.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Ye = X(y) || "Unknown";
              Zr[Ye] || (M(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Ye
              ), Zr[Ye] = !0);
            }
            typeof y.getDerivedStateFromProps != "function" && x.componentWillMount();
          }
          if (typeof x.UNSAFE_componentWillMount == "function" && typeof y.getDerivedStateFromProps != "function" && x.UNSAFE_componentWillMount(), I.length) {
            var be = I, Se = G;
            if (I = null, G = !1, Se && be.length === 1)
              x.state = be[0];
            else {
              for (var Pe = Se ? be[0] : x.state, Bt = !0, yt = Se ? 1 : 0; yt < be.length; yt++) {
                var Ee = be[yt], Mt = typeof Ee == "function" ? Ee.call(x, Pe, c.props, R) : Ee;
                Mt != null && (Bt ? (Bt = !1, Pe = l({}, Pe, Mt)) : l(Pe, Mt));
              }
              x.state = Pe;
            }
          } else
            I = null;
        }
        e = x.render(), e === void 0 && x.render._isMockFunction && (e = null), rn(e, y);
        var et;
        {
          if (typeof x.getChildContext == "function") {
            var Yt = y.childContextTypes;
            if (typeof Yt == "object") {
              et = x.getChildContext();
              for (var $t in et)
                if (!($t in Yt))
                  throw Error((X(y) || "Unknown") + '.getChildContext(): key "' + $t + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", X(y) || "Unknown");
          }
          et && (t = l({}, t, et));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var nn = /* @__PURE__ */ function() {
      function e(n, a, s) {
        var h = Ei(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: ir.html,
          children: h,
          childIndex: 0,
          context: st,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = a, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Rt(this.threadID));
      }, t.pushProvider = function(a) {
        var s = ++this.contextIndex, h = a.type._context, c = this.threadID;
        Ke(h, c);
        var y = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = y, this.contextProviderStack[s] = a, h[c] = a.props.value;
      }, t.popProvider = function(a) {
        var s = this.contextIndex;
        (s < 0 || a !== this.contextProviderStack[s]) && v("Unexpected pop.");
        var h = this.contextStack[s], c = this.contextValueStack[s];
        this.contextStack[s] = null, this.contextValueStack[s] = null, this.contextProviderStack[s] = null, this.contextIndex--, h[this.threadID] = c;
      }, t.clearProviders = function() {
        for (var a = this.contextIndex; a >= 0; a--) {
          var s = this.contextStack[a], h = this.contextValueStack[a];
          s[this.threadID] = h;
        }
      }, t.read = function(a) {
        if (this.exhausted)
          return null;
        var s = ht;
        kr(this);
        var h = lr.current;
        lr.current = jn;
        try {
          for (var c = [""], y = !1; c[0].length < a; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Rt(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (y || d.childIndex >= d.children.length) {
              var R = d.footer;
              if (R !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === $) {
                var I = d.type;
                this.popProvider(I);
              } else if (d.type === P) {
                this.suspenseDepth--;
                var G = c.pop();
                if (y) {
                  y = !1;
                  var re = d.fallbackFrame;
                  if (!re)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(re), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += G;
              }
              c[this.suspenseDepth] += R;
              continue;
            }
            var x = d.children[d.childIndex++], q = "";
            Lr(this.stack), d.debugElementStack.length = 0;
            try {
              q += this.render(x, d.context, d.domNamespace);
            } catch (se) {
              if (se != null && typeof se.then == "function") {
                if (!nt)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw se;
            } finally {
              Hr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += q;
          }
          return c[0];
        } finally {
          lr.current = h, kr(s), br();
        }
      }, t.render = function(a, s, h) {
        if (typeof a == "string" || typeof a == "number") {
          var c = "" + a;
          return c === "" ? "" : this.makeStaticMarkup ? A(c) : this.previousWasTextNode ? "<!-- -->" + A(c) : (this.previousWasTextNode = !0, A(c));
        } else {
          var y, d = Di(a, s, this.threadID);
          if (y = d.child, s = d.context, y === null || y === !1)
            return "";
          if (!u.isValidElement(y)) {
            if (y != null && y.$$typeof != null) {
              var R = y.$$typeof;
              throw Error(R === O ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + R.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var I = qe(y), G = {
              type: null,
              domNamespace: h,
              children: I,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return G.debugElementStack = [], this.stack.push(G), "";
          }
          var re = y, x = re.type;
          if (typeof x == "string")
            return this.renderDOM(re, s, h);
          switch (x) {
            case ve:
            case ze:
            case D:
            case F:
            case j:
            case p: {
              var q = qe(y.props.children), se = {
                type: null,
                domNamespace: h,
                children: q,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return se.debugElementStack = [], this.stack.push(se), "";
            }
            case P:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Oe:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof x == "object" && x !== null)
            switch (x.$$typeof) {
              case Z: {
                var fe = y, de, Be = {};
                yr(Be), de = x.render(fe.props, fe.ref), de = mr(x.render, fe.props, de, fe.ref), de = qe(de);
                var me = {
                  type: null,
                  domNamespace: h,
                  children: de,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return me.debugElementStack = [], this.stack.push(me), "";
              }
              case K: {
                var ke = y, Ye = [u.createElement(x.type, l({
                  ref: ke.ref
                }, ke.props))], be = {
                  type: null,
                  domNamespace: h,
                  children: Ye,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return be.debugElementStack = [], this.stack.push(be), "";
              }
              case $: {
                var Se = y, Pe = Se.props, Bt = qe(Pe.children), yt = {
                  type: Se,
                  domNamespace: h,
                  children: Bt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return yt.debugElementStack = [], this.pushProvider(Se), this.stack.push(yt), "";
              }
              case ae: {
                var Ee = y.type;
                Ee._context === void 0 ? Ee !== Ee.Consumer && (Ur || (Ur = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : Ee = Ee._context;
                var Mt = y.props, et = this.threadID;
                Ke(Ee, et);
                var Yt = Ee[et], $t = qe(Mt.children(Yt)), $e = {
                  type: y,
                  domNamespace: h,
                  children: $t,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return $e.debugElementStack = [], this.stack.push($e), "";
              }
              case te:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case ee: {
                var mt = y, an = y.type, Fi = an._payload, ji = an._init, zi = ji(Fi), Li = [u.createElement(zi, l({
                  ref: mt.ref
                }, mt.props))], on = {
                  type: null,
                  domNamespace: h,
                  children: Li,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return on.debugElementStack = [], this.stack.push(on), "";
              }
            }
          var fr = "";
          {
            var sn = re._owner;
            (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var ln = sn ? X(sn) : null;
            ln && (fr += `

Check the render method of \`` + ln + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (x == null ? x : typeof x) + "." + fr);
        }
      }, t.renderDOM = function(a, s, h) {
        var c = a.type.toLowerCase(), y = h;
        h === ir.html && (y = Er(c)), y === ir.html && c !== a.type && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", a.type), bi(c);
        var d = a.props;
        if (c === "input")
          ar("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Vr && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Vr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Wr && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          ar("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !Br && (v("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Br = !0);
          var R = d.value;
          if (R == null) {
            var I = d.defaultValue, G = d.children;
            if (G != null) {
              if (v("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), I != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(G)) {
                if (!(G.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                G = G[0];
              }
              I = "" + G;
            }
            I == null && (I = ""), R = I;
          }
          d = l({}, d, {
            value: void 0,
            children: "" + R
          });
        } else if (c === "select") {
          {
            ar("select", d);
            for (var re = 0; re < Jr.length; re++) {
              var x = Jr[re];
              if (d[x] != null) {
                var q = Array.isArray(d[x]);
                d.multiple && !q ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", x) : !d.multiple && q && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", x);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !qr && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var se = null, fe = this.currentSelectValue, de = Oi(d.children);
          if (fe != null) {
            var Be;
            if (d.value != null ? Be = d.value + "" : Be = de, se = !1, Array.isArray(fe)) {
              for (var me = 0; me < fe.length; me++)
                if ("" + fe[me] === Be) {
                  se = !0;
                  break;
                }
            } else
              se = "" + fe === Be;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: se,
              children: de
            });
          }
        }
        zr(c, d), Un(c, d);
        var ke = Ti(a.type, c, d, y, this.makeStaticMarkup, this.stack.length === 1), Ye = "";
        Or.hasOwnProperty(c) ? ke += "/>" : (ke += ">", Ye = "</" + a.type + ">");
        var be, Se = Si(d);
        Se != null ? (be = [], yi.hasOwnProperty(c) && Se.charAt(0) === `
` && (ke += `
`), ke += Se) : be = qe(d.children);
        var Pe = {
          domNamespace: zn(h, a.type),
          type: c,
          children: be,
          childIndex: 0,
          context: s,
          footer: Ye
        };
        return Pe.debugElementStack = [], this.stack.push(Pe), this.previousWasTextNode = !1, ke;
      }, e;
    }();
    function Pi(e, t) {
      var n = new nn(e, !1, t);
      try {
        var a = n.read(1 / 0);
        return a;
      } finally {
        n.destroy();
      }
    }
    function Ai(e, t) {
      var n = new nn(e, !0, t);
      try {
        var a = n.read(1 / 0);
        return a;
      } finally {
        n.destroy();
      }
    }
    function Mi() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function _i() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    rt.renderToNodeStream = Mi, rt.renderToStaticMarkup = Ai, rt.renderToStaticNodeStream = _i, rt.renderToString = Pi, rt.version = E;
  }()), rt;
}
process.env.NODE_ENV === "production" ? vr.exports = qi() : vr.exports = Bi();
var Yi = vr.exports;
const $i = /* @__PURE__ */ Vi(Yi);
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, vn = je.createContext && /* @__PURE__ */ je.createContext(bn), Xi = ["attr", "size", "title"];
function Gi(u, l) {
  if (u == null)
    return {};
  var g, E, T = Zi(u, l);
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(u);
    for (E = 0; E < M.length; E++)
      g = M[E], l.indexOf(g) === -1 && {}.propertyIsEnumerable.call(u, g) && (T[g] = u[g]);
  }
  return T;
}
function Zi(u, l) {
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
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var g = arguments[l];
      for (var E in g)
        ({}).hasOwnProperty.call(g, E) && (u[E] = g[E]);
    }
    return u;
  }, Gt.apply(null, arguments);
}
function gn(u, l) {
  var g = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(T) {
      return Object.getOwnPropertyDescriptor(u, T).enumerable;
    })), g.push.apply(g, E);
  }
  return g;
}
function Zt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var g = arguments[l] != null ? arguments[l] : {};
    l % 2 ? gn(Object(g), !0).forEach(function(E) {
      Ki(u, E, g[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g)) : gn(Object(g)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(g, E));
    });
  }
  return u;
}
function Ki(u, l, g) {
  return (l = Qi(l)) in u ? Object.defineProperty(u, l, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = g, u;
}
function Qi(u) {
  var l = Ji(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Ji(u, l) {
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
function wn(u) {
  return u && u.map((l, g) => /* @__PURE__ */ je.createElement(l.tag, Zt({
    key: g
  }, l.attr), wn(l.child)));
}
function xn(u) {
  return (l) => /* @__PURE__ */ je.createElement(ea, Gt({
    attr: Zt({}, u.attr)
  }, l), wn(u.child));
}
function ea(u) {
  var l = (g) => {
    var {
      attr: E,
      size: T,
      title: M
    } = u, v = Gi(u, Xi), C = T || g.size || "1em", O;
    return g.className && (O = g.className), u.className && (O = (O ? O + " " : "") + u.className), /* @__PURE__ */ je.createElement("svg", Gt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, g.attr, E, v, {
      className: O,
      style: Zt(Zt({
        color: u.color || g.color
      }, g.style), u.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ je.createElement("title", null, M), u.children);
  };
  return vn !== void 0 ? /* @__PURE__ */ je.createElement(vn.Consumer, null, (g) => l(g)) : l(bn);
}
function ta(u) {
  return xn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function ra(u) {
  return xn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const kn = {
  // XY plane — {x, y} point objects
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  // Category axis — labelled bars / columns / radar
  bar: "category",
  column: "category",
  radar: "category",
  // FIX: funnel gets its own engine.
  // ApexCharts funnel requires {x, y} objects in data[], NOT flat numbers
  // with a separate categories array (which the "category" engine produces).
  funnel: "funnel",
  // Circular — flat number[] + label[]
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  polararea: "circular",
  // Range / Financial — y is [min,max] | [o,h,l,c] | [min,q1,med,q3,max]
  rangebar: "range",
  candlestick: "range",
  boxplot: "range",
  // Specialty
  heatmap: "heatmap",
  treemap: "treemap"
}, na = (u) => !u || u.length < 6 ? !1 : !isNaN(Date.parse(u)) && /\d{4}|\d{2}[-/]\d{2}/.test(u), yn = (u, l) => {
  const g = kn[u] || "xy";
  let E = [], T = [], M = [];
  if (!l || l.length === 0)
    return { series: E, labels: T, categories: M };
  const v = l[0], C = Object.keys(v).filter((p) => typeof v[p] == "number"), O = Object.keys(v).find((p) => typeof v[p] == "string") || "x";
  switch (g) {
    case "circular": {
      E = l.map((p) => Number(p.value ?? p.y ?? p[C[0]] ?? p)), T = l.map((p) => String(p.label ?? p.category ?? p.x ?? ""));
      break;
    }
    case "category": {
      M = l.map(
        (p) => String(p.x ?? p.category ?? p[O])
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
          x: String(p.stage ?? p.x ?? p.category ?? p[O]),
          y: Number(p.value ?? p.y ?? p[C[0]] ?? 0)
        }))
      }];
      break;
    }
    case "range": {
      E = [{
        data: l.map((p) => {
          const D = p.y ?? (p.open !== void 0 ? [p.open, p.high, p.low, p.close] : p.min !== void 0 ? [p.min, p.max] : p.start !== void 0 ? [p.start, p.end] : void 0);
          return {
            x: String(p.x ?? p.date ?? p.category ?? p[O]),
            y: D
          };
        })
      }];
      break;
    }
    case "heatmap": {
      E = [...new Set(l.map((D) => D.group ?? "Series 1"))].map((D) => ({
        name: String(D),
        data: l.filter((F) => (F.group ?? "Series 1") === D).map((F) => ({
          x: String(F.x ?? F.category ?? F[O]),
          y: Number(F.value ?? F.y ?? 0)
        }))
      }));
      break;
    }
    case "treemap": {
      E = [{
        data: l.map((p) => ({
          x: String(p.x ?? p.name ?? p.category ?? p[O]),
          y: Number(p.value ?? p.y ?? p[C[0]] ?? 0)
        }))
      }];
      break;
    }
    default: {
      E = [{
        name: "Series 1",
        data: l.map((p) => {
          const D = {
            x: p.x ?? p[O],
            y: p.y ?? p.value ?? 0
          };
          return ("z" in p || "r" in p) && (D.z = p.z ?? p.r), D;
        })
      }];
      break;
    }
  }
  return { series: E, labels: T, categories: M };
}, hr = (u) => {
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
}, ia = (u, l) => {
  if (!l || !Array.isArray(l) || l.length === 0)
    return [];
  if (Array.isArray(l[0])) {
    const M = l, v = [];
    let C = [], O = [];
    const p = Array.isArray(u) ? u[0] : typeof u == "string" ? u : hr(M[0]), D = p === "column" ? "bar" : p ?? "line";
    return M.forEach((F, $) => {
      var P, j;
      const ae = Array.isArray(u) ? u[$] ?? u[0] : typeof u == "string" ? u : hr(F), Z = yn(ae, F);
      Array.isArray(Z.series) && Z.series.forEach((K) => {
        v.push({
          ...K,
          // Map "column" → "bar" for ApexCharts series-level type
          type: ae === "column" ? "bar" : ae,
          name: K.name || `Series ${v.length + 1}`
        });
      }), (((P = Z.labels) == null ? void 0 : P.length) ?? 0) > C.length && (C = Z.labels), (((j = Z.categories) == null ? void 0 : j.length) ?? 0) > O.length && (O = Z.categories);
    }), [
      {
        type: D,
        series: v,
        labels: C,
        categories: O
      }
    ];
  }
  const g = l, E = typeof u == "string" ? u : hr(g), T = yn(E, g);
  return [
    {
      type: E,
      ...T
    }
  ];
}, la = Ni(
  ({ data: u, type: l, options: g = {}, height: E = 350, title: T }, M) => {
    const v = Xt(null), C = Xt(null), O = Xt(null), p = Xt(null), [D, F] = Hi(!1), $ = Ui(
      () => $i.renderToString(
        /* @__PURE__ */ bt(
          ta,
          {
            size: 14,
            style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }
          }
        )
      ),
      []
    ), ae = un((P) => {
      const j = String(P).toLowerCase();
      return j === "column" || j === "funnel" ? "bar" : j === "rangebar" ? "rangeBar" : j === "boxplot" ? "boxPlot" : j === "polararea" ? "polarArea" : j === "radialbar" ? "radialBar" : j;
    }, []), Z = un(
      (P) => {
        var we, Le, Ne, Xe, Ge, B, V;
        const j = ia(l, u);
        if (!j || j.length === 0)
          return { series: [] };
        const { type: K, series: ee, labels: z, categories: te } = j[0], Oe = String(K).toLowerCase(), ze = kn[Oe] || "xy", ve = ze === "circular", U = Oe === "radar", W = Oe === "funnel", Re = ze === "range";
        let X = ee;
        ve && (Array.isArray(ee) && typeof ee[0] == "object" && ((we = ee[0]) != null && we.data) ? X = ee[0].data : Array.isArray(ee) && typeof ee[0] == "object" && (X = ee.map((ge) => ge.y ?? ge.value ?? 0)));
        const nt = (() => {
          var Ae, it, ye;
          if (!Re)
            return "category";
          const ge = Array.isArray(ee) ? (ye = (it = (Ae = ee[0]) == null ? void 0 : Ae.data) == null ? void 0 : it[0]) == null ? void 0 : ye.x : null;
          return ge && na(String(ge)) ? "datetime" : "category";
        })();
        return {
          ...g,
          chart: {
            id: P ? "vizly-modal-chart" : "vizly-main-chart",
            type: ae(Oe),
            height: "100%",
            width: "100%",
            animations: { enabled: !0, speed: 800 },
            toolbar: {
              show: !0,
              tools: {
                customIcons: P ? [] : [{
                  icon: $,
                  index: 6,
                  title: "Expand",
                  class: "custom-icon",
                  click: () => F(!0)
                }]
              }
            },
            ...g.chart
          },
          grid: {
            padding: { left: 20, right: 20, bottom: 10 },
            ...g.grid
          },
          series: X,
          // Top-level `labels` is for circular charts only.
          // FIX: radar must NOT receive top-level labels — it uses xaxis.categories.
          labels: ve ? z != null && z.length ? z : te : void 0,
          xaxis: {
            // FIX: range charts now detect whether x-values are real dates.
            //      Non-date strings → "category", real ISO dates → "datetime".
            type: Re ? nt : "category",
            // FIX: radar needs axis labels via xaxis.categories, not top-level labels.
            //      funnel uses {x,y} objects in series.data so no categories needed.
            categories: U ? te != null && te.length ? te : z : !ve && !W && (te != null && te.length) ? te : void 0,
            ...g.xaxis
          },
          plotOptions: {
            ...g.plotOptions,
            bar: {
              horizontal: W || Oe === "rangebar",
              isFunnel: W,
              distributed: W,
              ...(Le = g.plotOptions) == null ? void 0 : Le.bar
            },
            heatmap: {
              enableShades: !0,
              colorScale: {
                ranges: ((Ge = (Xe = (Ne = g.plotOptions) == null ? void 0 : Ne.heatmap) == null ? void 0 : Xe.colorScale) == null ? void 0 : Ge.ranges) || []
              }
            }
          },
          title: {
            text: typeof T == "string" ? T : (T == null ? void 0 : T.text) || ((B = g.title) == null ? void 0 : B.text),
            align: typeof T == "object" ? T.align : ((V = g.title) == null ? void 0 : V.align) || "left"
          },
          tooltip: {
            shared: !0,
            intersect: !1,
            theme: "dark",
            ...g.tooltip
          }
        };
      },
      [u, l, g, T, $, ae]
    );
    return cn(() => {
      let P = !0;
      return (async () => {
        if (O.current && (await O.current.destroy(), O.current = null), !P || !v.current)
          return;
        v.current.innerHTML = "";
        const K = new fn(v.current, Z(!1));
        O.current = K, await K.render(), P || (K.destroy(), O.current = null);
      })(), () => {
        var K;
        P = !1, (K = O.current) == null || K.destroy(), O.current = null;
      };
    }, [Z]), cn(() => {
      if (!D || !C.current)
        return;
      const P = setTimeout(async () => {
        p.current && (await p.current.destroy(), p.current = null), C.current && (C.current.innerHTML = "", p.current = new fn(
          C.current,
          Z(!0)
        ), await p.current.render());
      }, 350);
      return () => {
        var j;
        clearTimeout(P), (j = p.current) == null || j.destroy(), p.current = null;
      };
    }, [D, Z]), Wi(M, () => ({
      zoomIn: () => {
        var P;
        return (P = O.current) == null ? void 0 : P.zoomX(20, 80);
      },
      zoomOut: () => {
        var P;
        return (P = O.current) == null ? void 0 : P.resetSeries();
      },
      reset: () => {
        var P;
        return (P = O.current) == null ? void 0 : P.resetSeries();
      },
      toggleFullscreen: () => F((P) => !P)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ bt("div", { ref: v, style: { height: "100%", width: "100%", overflow: "hidden" } }),
      D && /* @__PURE__ */ dr("div", { style: {
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
        /* @__PURE__ */ bt("style", { children: `
              @keyframes vizlyFadeIn  { from { opacity:0 } to { opacity:1 } }
              @keyframes vizlyScaleUp { from { transform:scale(0.9);opacity:0 } to { transform:scale(1);opacity:1 } }
            ` }),
        /* @__PURE__ */ dr("div", { style: {
          width: "90%",
          height: "80%",
          background: "#fff",
          borderRadius: "16px",
          padding: "40px",
          position: "relative",
          animation: "vizlyScaleUp 0.4s cubic-bezier(0.16,1,0.3,1)"
        }, children: [
          /* @__PURE__ */ bt(
            "button",
            {
              onClick: () => F(!1),
              style: {
                position: "absolute",
                top: 15,
                right: 15,
                cursor: "pointer",
                border: "none",
                background: "transparent"
              },
              children: /* @__PURE__ */ bt(ra, { size: 18 })
            }
          ),
          /* @__PURE__ */ bt("div", { ref: C, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  la as VizlyChart
};
