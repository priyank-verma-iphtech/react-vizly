import { jsx as at, jsxs as dr, Fragment as Hi } from "react/jsx-runtime";
import Le, { forwardRef as Ui, useRef as Xt, useState as Wi, useMemo as fn, useEffect as pr, useImperativeHandle as Vi } from "react";
import dn from "apexcharts";
function qi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var gr = { exports: {} }, ot = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hr, pn;
function bn() {
  if (pn)
    return hr;
  pn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
  function E(M) {
    if (M == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(M);
  }
  function D() {
    try {
      if (!Object.assign)
        return !1;
      var M = new String("abc");
      if (M[5] = "de", Object.getOwnPropertyNames(M)[0] === "5")
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
  return hr = D() ? Object.assign : function(M, v) {
    for (var C, I = E(M), p, T = 1; T < arguments.length; T++) {
      C = Object(arguments[T]);
      for (var j in C)
        l.call(C, j) && (I[j] = C[j]);
      if (u) {
        p = u(C);
        for (var q = 0; q < p.length; q++)
          g.call(C, p[q]) && (I[p[q]] = C[p[q]]);
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
var hn;
function Bi() {
  if (hn)
    return ot;
  hn = 1;
  var u = bn(), l = Le;
  function g(r) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      o += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, D = 60107, M = 60108, v = 60114, C = 60109, I = 60110, p = 60112, T = 60113, j = 60120, q = 60115, oe = 60116, ee = 60121, se = 60117, _ = 60119, U = 60129, le = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var A = Symbol.for;
    E = A("react.portal"), D = A("react.fragment"), M = A("react.strict_mode"), v = A("react.profiler"), C = A("react.provider"), I = A("react.context"), p = A("react.forward_ref"), T = A("react.suspense"), j = A("react.suspense_list"), q = A("react.memo"), oe = A("react.lazy"), ee = A("react.block"), se = A("react.fundamental"), _ = A("react.scope"), U = A("react.debug_trace_mode"), le = A("react.legacy_hidden");
  }
  function ue(r) {
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
      case M:
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
          var o = r.render;
          return o = o.displayName || o.name || "", r.displayName || (o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef");
        case q:
          return ue(r.type);
        case ee:
          return ue(r._render);
        case oe:
          o = r._payload, r = r._init;
          try {
            return ue(r(o));
          } catch {
          }
      }
    return null;
  }
  var Q = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ce = {};
  function we(r, o) {
    for (var i = r._threadCount | 0; i <= o; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function z(r, o, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return we(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = o[k];
      o = i;
    } else
      o = ce;
    return o;
  }
  for (var $ = new Uint16Array(16), Pe = 0; 15 > Pe; Pe++)
    $[Pe] = Pe + 1;
  $[15] = 0;
  var G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ne = Object.prototype.hasOwnProperty, Oe = {}, Ze = {};
  function Ke(r) {
    return Ne.call(Ze, r) ? !0 : Ne.call(Oe, r) ? !1 : G.test(r) ? Ze[r] = !0 : (Oe[r] = !0, !1);
  }
  function Qe(r, o, i, f) {
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
  function Je(r, o, i, f) {
    if (o === null || typeof o > "u" || Qe(r, o, i, f))
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
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    W[r] = new B(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var o = r[0];
    W[o] = new B(o, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    W[r] = new B(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    W[r] = new B(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    W[r] = new B(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    W[r] = new B(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    W[r] = new B(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    W[r] = new B(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    W[r] = new B(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Ae = /[\-:]([a-z])/g;
  function Me(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var o = r.replace(
      Ae,
      Me
    );
    W[o] = new B(o, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var o = r.replace(Ae, Me);
    W[o] = new B(o, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var o = r.replace(Ae, Me);
    W[o] = new B(o, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    W[r] = new B(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    W[r] = new B(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var lt = /["'&<>]/;
  function ne(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var o = lt.exec(r);
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
  function He(r, o) {
    var i = W.hasOwnProperty(r) ? W[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Je(r, o, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && o === !0 ? r + '=""' : (i.sanitizeURL && (o = "" + o), r + '="' + (ne(o) + '"'))) : Ke(r) ? r + '="' + (ne(o) + '"') : "";
  }
  function Ue(r, o) {
    return r === o && (r !== 0 || 1 / r === 1 / o) || r !== r && o !== o;
  }
  var _e = typeof Object.is == "function" ? Object.is : Ue, fe = null, Fe = null, F = null, We = !1, et = !1, Re = null, je = 0;
  function Ie() {
    if (fe === null)
      throw Error(g(321));
    return fe;
  }
  function kt() {
    if (0 < je)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ve() {
    return F === null ? Fe === null ? (We = !1, Fe = F = kt()) : (We = !0, F = Fe) : F.next === null ? (We = !1, F = F.next = kt()) : (We = !0, F = F.next), F;
  }
  function _t(r, o, i, f) {
    for (; et; )
      et = !1, je += 1, F = null, i = r(o, f);
    return ut(), i;
  }
  function ut() {
    fe = null, et = !1, Fe = null, je = 0, F = Re = null;
  }
  function ct(r, o) {
    return typeof o == "function" ? o(r) : o;
  }
  function St(r, o, i) {
    if (fe = Ie(), F = Ve(), We) {
      var f = F.queue;
      if (o = f.dispatch, Re !== null && (i = Re.get(f), i !== void 0)) {
        Re.delete(f), f = F.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return F.memoizedState = f, [f, o];
      }
      return [F.memoizedState, o];
    }
    return r = r === ct ? typeof o == "function" ? o() : o : i !== void 0 ? i(o) : o, F.memoizedState = r, r = F.queue = { last: null, dispatch: null }, r = r.dispatch = tt.bind(null, fe, r), [F.memoizedState, r];
  }
  function Et(r, o) {
    if (fe = Ie(), F = Ve(), o = o === void 0 ? null : o, F !== null) {
      var i = F.memoizedState;
      if (i !== null && o !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < o.length; k++)
              if (!_e(o[k], f[k])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), F.memoizedState = [r, o], r;
  }
  function tt(r, o, i) {
    if (!(25 > je))
      throw Error(g(301));
    if (r === fe)
      if (et = !0, r = { action: i, next: null }, Re === null && (Re = /* @__PURE__ */ new Map()), i = Re.get(o), i === void 0)
        Re.set(o, r);
      else {
        for (o = i; o.next !== null; )
          o = o.next;
        o.next = r;
      }
  }
  function Ot() {
  }
  var Y = null, ft = { readContext: function(r) {
    var o = Y.threadID;
    return we(r, o), r[o];
  }, useContext: function(r) {
    Ie();
    var o = Y.threadID;
    return we(r, o), r[o];
  }, useMemo: Et, useReducer: St, useRef: function(r) {
    fe = Ie(), F = Ve();
    var o = F.memoizedState;
    return o === null ? (r = { current: r }, F.memoizedState = r) : o;
  }, useState: function(r) {
    return St(ct, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, o) {
    return Et(function() {
      return r;
    }, o);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(r) {
    return Ie(), r;
  }, useTransition: function() {
    return Ie(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (Y.identifierPrefix || "") + "R:" + (Y.uniqueID++).toString(36);
  }, useMutableSource: function(r, o) {
    return Ie(), o(r._source);
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
  var Rt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, dt = u({ menuitem: !0 }, Rt), ge = {
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
  Object.keys(ge).forEach(function(r) {
    It.forEach(function(o) {
      o = o + r.charAt(0).toUpperCase() + r.substring(1), ge[o] = ge[r];
    });
  });
  var qe = /([A-Z])/g, pt = /^ms-/, xe = l.Children.toArray, ht = Q.ReactCurrentDispatcher, Ft = { listing: !0, pre: !0, textarea: !0 }, rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, jt = {}, Ct = {};
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
      throw Error(g(152, ue(o) || "Component"));
  }
  function Jt(r, o, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, te = z(S, o, i, m), Z = [], re = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (Z === null)
          return null;
      }, enqueueReplaceState: function(Dt, L) {
        re = !0, Z = [L];
      }, enqueueSetState: function(Dt, L) {
        if (Z === null)
          return null;
        Z.push(L);
      } };
      if (m) {
        if (m = new S(b.props, te, H), typeof S.getDerivedStateFromProps == "function") {
          var P = S.getDerivedStateFromProps.call(null, b.props, m.state);
          P != null && (m.state = u({}, m.state, P));
        }
      } else if (fe = {}, m = S(
        b.props,
        te,
        H
      ), m = _t(S, b.props, m, te), m == null || m.render == null) {
        r = m, Tt(r, S);
        return;
      }
      if (m.props = b.props, m.context = te, m.updater = H, H = m.state, H === void 0 && (m.state = H = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), Z.length) {
          H = Z;
          var K = re;
          if (Z = null, re = !1, K && H.length === 1)
            m.state = H[0];
          else {
            P = K ? H[0] : m.state;
            var Ce = !0;
            for (K = K ? 1 : 0; K < H.length; K++) {
              var de = H[K];
              de = typeof de == "function" ? de.call(m, P, b.props, te) : de, de != null && (Ce ? (Ce = !1, P = u({}, P, de)) : u(P, de));
            }
            m.state = P;
          }
        } else
          Z = null;
      if (r = m.render(), Tt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var pe = m.getChildContext();
        for (var ye in pe)
          if (!(ye in b))
            throw Error(g(108, ue(S) || "Unknown", ye));
      }
      pe && (o = u({}, o, pe));
    }
    for (; l.isValidElement(r); ) {
      var k = r, w = k.type;
      if (typeof w != "function")
        break;
      f(k, w);
    }
    return { child: r, context: o };
  }
  var vt = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== D ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : xe(i)) : i = xe(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: ce, footer: "" };
      var w = $[0];
      if (w === 0) {
        var b = $;
        w = b.length;
        var S = 2 * w;
        if (!(65536 >= S))
          throw Error(g(304));
        var m = new Uint16Array(S);
        for (m.set(b), $ = m, $[0] = w + 1, b = w; b < S - 1; b++)
          $[b] = b + 1;
        $[S - 1] = 0;
      } else
        $[0] = $[w];
      this.threadID = w, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var o = r.prototype;
    return o.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        $[i] = $[0], $[0] = i;
      }
    }, o.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, w = this.threadID;
      we(k, w);
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
      var k = ht.current;
      ht.current = ft;
      try {
        for (var w = [""], b = !1; w[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            $[S] = $[0], $[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (b || m.childIndex >= m.children.length) {
            var te = m.footer;
            if (te !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === C)
              this.popProvider(m.type);
            else if (m.type === T) {
              this.suspenseDepth--;
              var Z = w.pop();
              if (b) {
                b = !1;
                var re = m.fallbackFrame;
                if (!re)
                  throw Error(g(303));
                this.stack.push(re), w[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                w[this.suspenseDepth] += Z;
            }
            w[this.suspenseDepth] += te;
          } else {
            var H = m.children[m.childIndex++], P = "";
            try {
              P += this.render(H, m.context, m.domNamespace);
            } catch (K) {
              throw K != null && typeof K.then == "function" ? Error(g(294)) : K;
            } finally {
            }
            w.length <= this.suspenseDepth && w.push(""), w[this.suspenseDepth] += P;
          }
        }
        return w[0];
      } finally {
        ht.current = k, Y = f, ut();
      }
    }, o.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? ne(k) : this.previousWasTextNode ? "<!-- -->" + ne(k) : (this.previousWasTextNode = !0, ne(k));
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
        case le:
        case U:
        case M:
        case v:
        case j:
        case D:
          return i = xe(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case T:
          throw Error(g(294));
        case _:
          throw Error(g(343));
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case p:
            fe = {};
            var b = w.render(i.props, i.ref);
            return b = _t(w.render, i.props, b, i.ref), b = xe(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case q:
            return i = [l.createElement(w.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case C:
            return w = xe(i.props.children), k = { type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case I:
            w = i.type, b = i.props;
            var S = this.threadID;
            return we(w, S), w = xe(b.children(w[S])), this.stack.push({ type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }), "";
          case se:
            throw Error(g(338));
          case oe:
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
        if (!rt.test(w))
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
        var te = zt(b.children);
        if (m != null) {
          var Z = b.value != null ? b.value + "" : te;
          if (S = !1, Array.isArray(m)) {
            for (var re = 0; re < m.length; re++)
              if ("" + m[re] === Z) {
                S = !0;
                break;
              }
          } else
            S = "" + m === Z;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: te }
          );
        }
      }
      if (S = b) {
        if (dt[w] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, m = this.makeStaticMarkup, te = this.stack.length === 1, Z = "<" + i.type;
      e:
        if (w.indexOf("-") === -1)
          re = typeof S.is == "string";
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
              re = !1;
              break e;
            default:
              re = !0;
          }
      for (L in S)
        if (Lt.call(S, L)) {
          var H = S[L];
          if (H != null) {
            if (L === "style") {
              var P = void 0, K = "", Ce = "";
              for (P in H)
                if (H.hasOwnProperty(P)) {
                  var de = P.indexOf("--") === 0, pe = H[P];
                  if (pe != null) {
                    if (de)
                      var ye = P;
                    else if (ye = P, Ct.hasOwnProperty(ye))
                      ye = Ct[ye];
                    else {
                      var Dt = ye.replace(qe, "-$1").toLowerCase().replace(pt, "-ms-");
                      ye = Ct[ye] = Dt;
                    }
                    K += Ce + ye + ":", Ce = P, de = pe == null || typeof pe == "boolean" || pe === "" ? "" : de || typeof pe != "number" || pe === 0 || ge.hasOwnProperty(Ce) && ge[Ce] ? ("" + pe).trim() : pe + "px", K += de, Ce = ";";
                  }
                }
              H = K || null;
            }
            P = null, re ? Nt.hasOwnProperty(L) || (P = L, P = Ke(P) && H != null ? P + '="' + (ne(H) + '"') : "") : P = He(L, H), P && (Z += " " + P);
          }
        }
      m || te && (Z += ' data-reactroot=""');
      var L = Z;
      S = "", Rt.hasOwnProperty(w) ? L += "/>" : (L += ">", S = "</" + i.type + ">");
      e: {
        if (m = b.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = b.children, typeof m == "string" || typeof m == "number") {
          m = ne(m);
          break e;
        }
        m = null;
      }
      return m != null ? (b = [], Ft.hasOwnProperty(w) && m.charAt(0) === `
` && (L += `
`), L += m) : b = xe(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: w, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, L;
    }, r;
  }();
  return ot.renderToNodeStream = function() {
    throw Error(g(207));
  }, ot.renderToStaticMarkup = function(r, o) {
    r = new vt(r, !0, o);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, ot.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, ot.renderToString = function(r, o) {
    r = new vt(r, !1, o);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, ot.version = "17.0.2", ot;
}
var st = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Yi() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Le, l = bn();
    function g(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", D = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var a = D.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var I = 60106, p = 60107, T = 60108, j = 60114, q = 60109, oe = 60110, ee = 60112, se = 60113, _ = 60120, U = 60115, le = 60116, A = 60121, ue = 60117, Q = 60119, ce = 60129, we = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var z = Symbol.for;
      z("react.element"), I = z("react.portal"), p = z("react.fragment"), T = z("react.strict_mode"), j = z("react.profiler"), q = z("react.provider"), oe = z("react.context"), ee = z("react.forward_ref"), se = z("react.suspense"), _ = z("react.suspense_list"), U = z("react.memo"), le = z("react.lazy"), A = z("react.block"), z("react.server.block"), ue = z("react.fundamental"), Q = z("react.scope"), z("react.opaque.id"), ce = z("react.debug_trace_mode"), z("react.offscreen"), we = z("react.legacy_hidden");
    }
    function $(e, t, n) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
    }
    function Pe(e) {
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
        case p:
          return "Fragment";
        case I:
          return "Portal";
        case j:
          return "Profiler";
        case T:
          return "StrictMode";
        case se:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            var t = e;
            return Pe(t) + ".Consumer";
          case q:
            var n = e;
            return Pe(n._context) + ".Provider";
          case ee:
            return $(e, e.render, "ForwardRef");
          case U:
            return G(e.type);
          case A:
            return G(e._render);
          case le: {
            var a = e, s = a._payload, h = a._init;
            try {
              return G(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ne = !1, Oe = 0, Ze, Ke, Qe, Je, B, W, Ae;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function lt() {
      {
        if (Oe === 0) {
          Ze = console.log, Ke = console.info, Qe = console.warn, Je = console.error, B = console.group, W = console.groupCollapsed, Ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Me,
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
        Oe++;
      }
    }
    function ne() {
      {
        if (Oe--, Oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: Ze
            }),
            info: l({}, e, {
              value: Ke
            }),
            warn: l({}, e, {
              value: Qe
            }),
            error: l({}, e, {
              value: Je
            }),
            group: l({}, e, {
              value: B
            }),
            groupCollapsed: l({}, e, {
              value: W
            }),
            groupEnd: l({}, e, {
              value: Ae
            })
          });
        }
        Oe < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var He = D.ReactCurrentDispatcher, Ue;
    function _e(e, t, n) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            Ue = a && a[1] || "";
          }
        return `
` + Ue + e;
      }
    }
    var fe = !1, Fe;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      Fe = new F();
    }
    function We(e, t) {
      if (!e || fe)
        return "";
      {
        var n = Fe.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      fe = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = He.current, He.current = null, lt();
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
              a = V;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (V) {
              a = V;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            a = V;
          }
          e();
        }
      } catch (V) {
        if (V && a && typeof V.stack == "string") {
          for (var y = V.stack.split(`
`), d = a.stack.split(`
`), O = y.length - 1, R = d.length - 1; O >= 1 && R >= 0 && y[O] !== d[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (y[O] !== d[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || y[O] !== d[R]) {
                    var X = `
` + y[O].replace(" at new ", " at ");
                    return typeof e == "function" && Fe.set(e, X), X;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        fe = !1, He.current = h, ne(), Error.prepareStackTrace = s;
      }
      var J = e ? e.displayName || e.name : "", x = J ? _e(J) : "";
      return typeof e == "function" && Fe.set(e, x), x;
    }
    function et(e, t, n) {
      return We(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function je(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return We(e, Re(e));
      if (typeof e == "string")
        return _e(e);
      switch (e) {
        case se:
          return _e("Suspense");
        case _:
          return _e("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            return et(e.render);
          case U:
            return je(e.type, t, n);
          case A:
            return et(e._render);
          case le: {
            var a = e, s = a._payload, h = a._init;
            try {
              return je(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = {}, kt = D.ReactDebugCurrentFrame;
    function Ve(e) {
      if (e) {
        var t = e._owner, n = je(e.type, e._source, t ? t.type : null);
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
            } catch (O) {
              y = O;
            }
            y && !(y instanceof Error) && (Ve(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, c, typeof y), Ve(null)), y instanceof Error && !(y.message in Ie) && (Ie[y.message] = !0, Ve(s), v("Failed %s type: %s", n, y.message), Ve(null));
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
      var a = {};
      for (var s in n)
        a[s] = t[s];
      return a;
    }
    function Et(e, t, n) {
      _t(e, t, n, "Component");
    }
    function tt(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Ot(e, t, n, a) {
      if (a) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === oe && s._context === void 0
          );
          if (!h && !ut.has(e)) {
            ut.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === q ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", G(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return tt(s, n), s[n];
        {
          var y = St(e, t);
          return e.contextTypes && Et(e.contextTypes, y, "context"), y;
        }
      } else {
        var d = St(e, t);
        return e.contextTypes && Et(e.contextTypes, d, "context"), d;
      }
    }
    for (var Y = new Uint16Array(16), ft = 0; ft < 15; ft++)
      Y[ft] = ft + 1;
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
    var dt = 0, ge = 1, It = 2, qe = 3, pt = 4, xe = 5, ht = 6, Ft = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", rt = Ft + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", jt = "data-reactroot", Ct = new RegExp("^[" + Ft + "][" + rt + "]*$"), zt = Object.prototype.hasOwnProperty, Lt = {}, Nt = {};
    function Tt(e) {
      return zt.call(Nt, e) ? !0 : zt.call(Lt, e) ? !1 : Ct.test(e) ? (Nt[e] = !0, !0) : (Lt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === dt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vt(e, t, n, a) {
      if (n !== null && n.type === dt)
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
      if (t === null || typeof t > "u" || vt(e, t, n, a))
        return !0;
      if (a)
        return !1;
      if (n !== null)
        switch (n.type) {
          case qe:
            return !t;
          case pt:
            return t === !1;
          case xe:
            return isNaN(t);
          case ht:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function o(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, a, s, h, c) {
      this.acceptsBooleans = t === It || t === qe || t === pt, this.attributeName = a, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
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
        ge,
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
        ge,
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
        ge,
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
        ge,
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
    var S = "xlinkHref";
    f[S] = new i(
      "xlinkHref",
      ge,
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
        ge,
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
    function Z(e) {
      !te && m.test(e) && (te = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var re = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = re.exec(t);
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
    function P(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function K(e) {
      return '"' + P(e) + '"';
    }
    function Ce() {
      return jt + '=""';
    }
    function de(e, t) {
      var n = o(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var a = n.attributeName, s = n.type;
        return s === qe || s === pt && t === !0 ? a + '=""' : (n.sanitizeURL && (t = "" + t, Z(t)), a + "=" + K(t));
      } else if (Tt(e))
        return e + "=" + K(t);
      return "";
    }
    function pe(e, t) {
      return !Tt(e) || t == null ? "" : e + "=" + K(t);
    }
    function ye(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Dt = typeof Object.is == "function" ? Object.is : ye, L = null, Ht = null, N = null, Pt = !1, Ut = !1, Be = null, Wt = 0, En = 25, Te = !1, gt;
    function nt() {
      if (L === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Te && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), L;
    }
    function On(e, t) {
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
    function er() {
      return N === null ? Ht === null ? (Pt = !1, Ht = N = mr()) : (Pt = !0, N = Ht) : N.next === null ? (Pt = !1, N = N.next = mr()) : (Pt = !0, N = N.next), N;
    }
    function br(e) {
      L = e, Te = !1;
    }
    function wr(e, t, n, a) {
      for (; Ut; )
        Ut = !1, Wt += 1, N = null, n = e(t, a);
      return xr(), n;
    }
    function xr() {
      Te = !1, L = null, Ut = !1, Ht = null, Wt = 0, Be = null, N = null;
    }
    function Rn(e, t) {
      var n = yt.threadID;
      return tt(e, n), Te && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function In(e, t) {
      gt = "useContext", nt();
      var n = yt.threadID;
      return tt(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Cn(e) {
      return gt = "useState", kr(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function kr(e, t, n) {
      if (e !== tr && (gt = "useReducer"), L = nt(), N = er(), Pt) {
        var a = N.queue, s = a.dispatch;
        if (Be !== null) {
          var h = Be.get(a);
          if (h !== void 0) {
            Be.delete(a);
            var c = N.memoizedState, y = h;
            do {
              var d = y.action;
              Te = !0, c = e(c, d), Te = !1, y = y.next;
            } while (y !== null);
            return N.memoizedState = c, [c, s];
          }
        }
        return [N.memoizedState, s];
      } else {
        Te = !0;
        var O;
        e === tr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Te = !1, N.memoizedState = O;
        var R = N.queue = {
          last: null,
          dispatch: null
        }, X = R.dispatch = Pn.bind(null, L, R);
        return [N.memoizedState, X];
      }
    }
    function Sr(e, t) {
      L = nt(), N = er();
      var n = t === void 0 ? null : t;
      if (N !== null) {
        var a = N.memoizedState;
        if (a !== null && n !== null) {
          var s = a[1];
          if (On(n, s))
            return a[0];
        }
      }
      Te = !0;
      var h = e();
      return Te = !1, N.memoizedState = [h, n], h;
    }
    function Tn(e) {
      L = nt(), N = er();
      var t = N.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), N.memoizedState = n, n;
      } else
        return t;
    }
    function Dn(e, t) {
      gt = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Pn(e, t, n) {
      if (!(Wt < En))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === L) {
        Ut = !0;
        var a = {
          action: n,
          next: null
        };
        Be === null && (Be = /* @__PURE__ */ new Map());
        var s = Be.get(t);
        if (s === void 0)
          Be.set(t, a);
        else {
          for (var h = s; h.next !== null; )
            h = h.next;
          h.next = a;
        }
      }
    }
    function An(e, t) {
      return Sr(function() {
        return e;
      }, t);
    }
    function Mn(e, t, n) {
      return nt(), t(e._source);
    }
    function _n(e) {
      return nt(), e;
    }
    function Fn() {
      nt();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function jn() {
      return (yt.identifierPrefix || "") + "R:" + (yt.uniqueID++).toString(36);
    }
    function rr() {
    }
    var yt = null;
    function Er(e) {
      yt = e;
    }
    var zn = {
      readContext: Rn,
      useContext: In,
      useMemo: Sr,
      useReducer: kr,
      useRef: Tn,
      useState: Cn,
      useLayoutEffect: Dn,
      useCallback: An,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: rr,
      // Effects are not run in the server environment.
      useEffect: rr,
      // Debugging effect
      useDebugValue: rr,
      useDeferredValue: _n,
      useTransition: Fn,
      useOpaqueIdentifier: jn,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Mn
    }, Vt = "http://www.w3.org/1999/xhtml", Or = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: Vt,
      mathml: Or,
      svg: nr
    };
    function Rr(e) {
      switch (e) {
        case "svg":
          return nr;
        case "math":
          return Or;
        default:
          return Vt;
      }
    }
    function Ln(e, t) {
      return e == null || e === Vt ? Rr(t) : e === nr && t === "foreignObject" ? Vt : e;
    }
    var Nn = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ar(e, t) {
      Nn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    }, Hn = l({
      menuitem: !0
    }, Ir), Un = "__html";
    function Wn(e, t) {
      if (t) {
        if (Hn[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Un in t.dangerouslySetInnerHTML))
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
    function Vn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(At).forEach(function(e) {
      qn.forEach(function(t) {
        At[Vn(t, e)] = At[e];
      });
    });
    function Bn(e, t, n) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !n && typeof t == "number" && t !== 0 && !(At.hasOwnProperty(e) && At[e]) ? t + "px" : ("" + t).trim();
    }
    var Yn = /([A-Z])/g, $n = /^ms-/;
    function Xn(e) {
      return e.replace(Yn, "-$1").toLowerCase().replace($n, "-ms-");
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
    var Cr = function() {
    };
    {
      var Gn = /^(?:webkit|moz|o)[A-Z]/, Zn = /^-ms-/, Kn = /-(.)/g, Tr = /;\s*$/, mt = {}, sr = {}, Dr = !1, Pr = !1, Qn = function(e) {
        return e.replace(Kn, function(t, n) {
          return n.toUpperCase();
        });
      }, Jn = function(e) {
        mt.hasOwnProperty(e) && mt[e] || (mt[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Qn(e.replace(Zn, "ms-"))
        ));
      }, ei = function(e) {
        mt.hasOwnProperty(e) && mt[e] || (mt[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ti = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Tr, "")));
      }, ri = function(e, t) {
        Dr || (Dr = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ni = function(e, t) {
        Pr || (Pr = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Cr = function(e, t) {
        e.indexOf("-") > -1 ? Jn(e) : Gn.test(e) ? ei(e) : Tr.test(t) && ti(e, t), typeof t == "number" && (isNaN(t) ? ri(e, t) : isFinite(t) || ni(e, t));
      };
    }
    var ii = Cr, Ar = {
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
    }, bt = {}, ai = new RegExp("^(aria)-[" + rt + "]*$"), oi = new RegExp("^(aria)[A-Z][" + rt + "]*$"), si = Object.prototype.hasOwnProperty;
    function li(e, t) {
      {
        if (si.call(bt, t) && bt[t])
          return !0;
        if (oi.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), a = Ar.hasOwnProperty(n) ? n : null;
          if (a == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), bt[t] = !0, !0;
          if (t !== a)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), bt[t] = !0, !0;
        }
        if (ai.test(t)) {
          var s = t.toLowerCase(), h = Ar.hasOwnProperty(s) ? s : null;
          if (h == null)
            return bt[t] = !0, !1;
          if (t !== h)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), bt[t] = !0, !0;
        }
      }
      return !0;
    }
    function ui(e, t) {
      {
        var n = [];
        for (var a in t) {
          var s = li(e, a);
          s || n.push(a);
        }
        var h = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function ci(e, t) {
      or(e, t) || ui(e, t);
    }
    var Mr = !1;
    function fi(e, t) {
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
      var ie = {}, di = Object.prototype.hasOwnProperty, jr = /^on./, pi = /^on[^A-Z]/, hi = new RegExp("^(aria)-[" + rt + "]*$"), vi = new RegExp("^(aria)[A-Z][" + rt + "]*$");
      Fr = function(e, t, n, a) {
        if (di.call(ie, t) && ie[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ie[t] = !0, !0;
        if (a != null) {
          var h = a.registrationNameDependencies, c = a.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var y = c.hasOwnProperty(s) ? c[s] : null;
          if (y != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, y), ie[t] = !0, !0;
          if (jr.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), ie[t] = !0, !0;
        } else if (jr.test(t))
          return pi.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ie[t] = !0, !0;
        if (hi.test(t) || vi.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ie[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ie[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ie[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ie[t] = !0, !0;
        var d = o(t), O = d !== null && d.type === dt;
        if (_r.hasOwnProperty(s)) {
          var R = _r[s];
          if (R !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ie[t] = !0, !0;
        } else if (!O && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), ie[t] = !0, !0;
        return typeof n == "boolean" && vt(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ie[t] = !0, !0) : O ? !0 : vt(t, n, d, !1) ? (ie[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === qe && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ie[t] = !0), !0);
      };
    }
    var gi = function(e, t, n) {
      {
        var a = [];
        for (var s in t) {
          var h = Fr(e, s, t[s], n);
          h || a.push(s);
        }
        var c = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : a.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function yi(e, t, n) {
      or(e, t) || gi(e, t, n);
    }
    var Ye = u.Children.toArray, ze = [], lr = D.ReactCurrentDispatcher, qt, ur = null, zr = function() {
      return "";
    }, Lr = function(e) {
      return "";
    }, Nr = function(e, t) {
    }, Hr = function(e) {
    }, Ur = function(e) {
    }, Wr = function() {
    }, Vr = !1;
    qt = D.ReactDebugCurrentFrame, Nr = function(e, t) {
      ci(e, t), fi(e, t), yi(e, t, null);
    }, Lr = function(e) {
      return je(e.type, e._source, null);
    }, Hr = function(e) {
      ze.push(e), ze.length === 1 && (ur = qt.getCurrentStack, qt.getCurrentStack = zr);
    }, Ur = function(e) {
      var t = ze[ze.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Wr = function() {
      ze.pop(), ze.length === 0 && (qt.getCurrentStack = ur, ur = null);
    }, zr = function() {
      if (ze.length === 0)
        return "";
      for (var e = ze[ze.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var a = e[n], s = a.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += Lr(s[h]);
      return t;
    };
    var qr = !1, Br = !1, Yr = !1, $r = !1, Xr = !1, Gr = {}, Zr = {}, Kr = {}, Qr = {}, Jr = {}, en = {}, tn = ["value", "defaultValue"], mi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, bi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, rn = {};
    function wi(e) {
      if (!rn.hasOwnProperty(e)) {
        if (!bi.test(e))
          throw Error("Invalid tag: " + e);
        rn[e] = !0;
      }
    }
    var cr = {}, xi = function(e) {
      if (cr.hasOwnProperty(e))
        return cr[e];
      var t = Xn(e);
      return cr[e] = t, t;
    };
    function ki(e) {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var s = a.indexOf("--") === 0, h = e[a];
          s || ii(a, h), h != null && (t += n + (s ? a : xi(a)) + ":", t += Bn(a, h, s), n = ";");
        }
      return t || null;
    }
    function nn(e, t) {
      {
        var n = e.constructor, a = n && G(n) || "ReactClass", s = a + "." + t;
        if (Gr[s])
          return;
        v(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, a), Gr[s] = !0;
      }
    }
    function Si(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ei(e) {
      var t = e.dangerouslySetInnerHTML;
      if (t != null) {
        if (t.__html != null)
          return t.__html;
      } else {
        var n = e.children;
        if (typeof n == "string" || typeof n == "number")
          return P(n);
      }
      return null;
    }
    function Oi(e) {
      if (!u.isValidElement(e))
        return Ye(e);
      var t = e;
      if (t.type !== p)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return Ye(n);
      var a = n;
      return [a];
    }
    function Ri(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Xr && typeof n != "string" && typeof n != "number" && (Xr = !0, v("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Ii = Object.prototype.hasOwnProperty, Ci = "style", Ti = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Di(e, t, n, a, s, h) {
      var c = "<" + e, y = or(t, n);
      for (var d in n)
        if (Ii.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Ci && (O = ki(O));
            var R = null;
            y ? Ti.hasOwnProperty(d) || (R = pe(d, O)) : R = de(d, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Ce()), c;
    }
    function an(e, t) {
      if (e === void 0)
        throw Error((G(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Pi(e, t, n) {
      for (; u.isValidElement(e); ) {
        var a = e, s = a.type;
        if (Ur(a), typeof s != "function")
          break;
        h(a, s);
      }
      function h(c, y) {
        var d = Si(y), O = Ot(y, t, n, d), R = [], X = !1, J = {
          isMounted: function(Ge) {
            return !1;
          },
          enqueueForceUpdate: function(Ge) {
            if (R === null)
              return nn(Ge, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Ge, xt) {
            X = !0, R = [xt];
          },
          enqueueSetState: function(Ge, xt) {
            if (R === null)
              return nn(Ge, "setState"), null;
            R.push(xt);
          }
        }, x;
        if (d) {
          if (x = new y(c.props, O, J), typeof y.getDerivedStateFromProps == "function") {
            if (x.state === null || x.state === void 0) {
              var V = G(y) || "Unknown";
              en[V] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, x.state === null ? "null" : "undefined", V), en[V] = !0);
            }
            var ae = y.getDerivedStateFromProps.call(null, c.props, x.state);
            if (ae === void 0) {
              var he = G(y) || "Unknown";
              Jr[he] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", he), Jr[he] = !0);
            }
            ae != null && (x.state = l({}, x.state, ae));
          }
        } else {
          if (y.prototype && typeof y.prototype.render == "function") {
            var ve = G(y) || "Unknown";
            Zr[ve] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ve, ve), Zr[ve] = !0);
          }
          var $e = {};
          if (br($e), x = y(c.props, O, J), x = wr(y, c.props, x, O), x != null && x.render != null) {
            var me = G(y) || "Unknown";
            Kr[me] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", me, me, me), Kr[me] = !0);
          }
          if (x == null || x.render == null) {
            e = x, an(e, y);
            return;
          }
        }
        x.props = c.props, x.context = O, x.updater = J;
        var ke = x.state;
        if (ke === void 0 && (x.state = ke = null), typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function") {
          if (typeof x.componentWillMount == "function") {
            if (x.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Xe = G(y) || "Unknown";
              Qr[Xe] || (M(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Xe
              ), Qr[Xe] = !0);
            }
            typeof y.getDerivedStateFromProps != "function" && x.componentWillMount();
          }
          if (typeof x.UNSAFE_componentWillMount == "function" && typeof y.getDerivedStateFromProps != "function" && x.UNSAFE_componentWillMount(), R.length) {
            var be = R, Se = X;
            if (R = null, X = !1, Se && be.length === 1)
              x.state = be[0];
            else {
              for (var De = Se ? be[0] : x.state, Bt = !0, wt = Se ? 1 : 0; wt < be.length; wt++) {
                var Ee = be[wt], Mt = typeof Ee == "function" ? Ee.call(x, De, c.props, O) : Ee;
                Mt != null && (Bt ? (Bt = !1, De = l({}, De, Mt)) : l(De, Mt));
              }
              x.state = De;
            }
          } else
            R = null;
        }
        e = x.render(), e === void 0 && x.render._isMockFunction && (e = null), an(e, y);
        var it;
        {
          if (typeof x.getChildContext == "function") {
            var Yt = y.childContextTypes;
            if (typeof Yt == "object") {
              it = x.getChildContext();
              for (var $t in it)
                if (!($t in Yt))
                  throw Error((G(y) || "Unknown") + '.getChildContext(): key "' + $t + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", G(y) || "Unknown");
          }
          it && (t = l({}, t, it));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var on = /* @__PURE__ */ function() {
      function e(n, a, s) {
        var h = Oi(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: ir.html,
          children: h,
          childIndex: 0,
          context: ct,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = a, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Rt(this.threadID));
      }, t.pushProvider = function(a) {
        var s = ++this.contextIndex, h = a.type._context, c = this.threadID;
        tt(h, c);
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
        var s = yt;
        Er(this);
        var h = lr.current;
        lr.current = zn;
        try {
          for (var c = [""], y = !1; c[0].length < a; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Rt(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (y || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === q) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === se) {
                this.suspenseDepth--;
                var X = c.pop();
                if (y) {
                  y = !1;
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
            var x = d.children[d.childIndex++], V = "";
            Hr(this.stack), d.debugElementStack.length = 0;
            try {
              V += this.render(x, d.context, d.domNamespace);
            } catch (ae) {
              if (ae != null && typeof ae.then == "function") {
                if (!Ne)
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
          lr.current = h, Er(s), xr();
        }
      }, t.render = function(a, s, h) {
        if (typeof a == "string" || typeof a == "number") {
          var c = "" + a;
          return c === "" ? "" : this.makeStaticMarkup ? P(c) : this.previousWasTextNode ? "<!-- -->" + P(c) : (this.previousWasTextNode = !0, P(c));
        } else {
          var y, d = Pi(a, s, this.threadID);
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
          var J = y, x = J.type;
          if (typeof x == "string")
            return this.renderDOM(J, s, h);
          switch (x) {
            case we:
            case ce:
            case T:
            case j:
            case _:
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
            case se:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Q:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof x == "object" && x !== null)
            switch (x.$$typeof) {
              case ee: {
                var he = y, ve, $e = {};
                br($e), ve = x.render(he.props, he.ref), ve = wr(x.render, he.props, ve, he.ref), ve = Ye(ve);
                var me = {
                  type: null,
                  domNamespace: h,
                  children: ve,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return me.debugElementStack = [], this.stack.push(me), "";
              }
              case U: {
                var ke = y, Xe = [u.createElement(x.type, l({
                  ref: ke.ref
                }, ke.props))], be = {
                  type: null,
                  domNamespace: h,
                  children: Xe,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return be.debugElementStack = [], this.stack.push(be), "";
              }
              case q: {
                var Se = y, De = Se.props, Bt = Ye(De.children), wt = {
                  type: Se,
                  domNamespace: h,
                  children: Bt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return wt.debugElementStack = [], this.pushProvider(Se), this.stack.push(wt), "";
              }
              case oe: {
                var Ee = y.type;
                Ee._context === void 0 ? Ee !== Ee.Consumer && (Vr || (Vr = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : Ee = Ee._context;
                var Mt = y.props, it = this.threadID;
                tt(Ee, it);
                var Yt = Ee[it], $t = Ye(Mt.children(Yt)), Ge = {
                  type: y,
                  domNamespace: h,
                  children: $t,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Ge.debugElementStack = [], this.stack.push(Ge), "";
              }
              case ue:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case le: {
                var xt = y, sn = y.type, ji = sn._payload, zi = sn._init, Li = zi(ji), Ni = [u.createElement(Li, l({
                  ref: xt.ref
                }, xt.props))], ln = {
                  type: null,
                  domNamespace: h,
                  children: Ni,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ln.debugElementStack = [], this.stack.push(ln), "";
              }
            }
          var fr = "";
          {
            var un = J._owner;
            (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var cn = un ? G(un) : null;
            cn && (fr += `

Check the render method of \`` + cn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (x == null ? x : typeof x) + "." + fr);
        }
      }, t.renderDOM = function(a, s, h) {
        var c = a.type.toLowerCase(), y = h;
        h === ir.html && (y = Rr(c)), y === ir.html && c !== a.type && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", a.type), wi(c);
        var d = a.props;
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
            for (var J = 0; J < tn.length; J++) {
              var x = tn[J];
              if (d[x] != null) {
                var V = Array.isArray(d[x]);
                d.multiple && !V ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", x) : !d.multiple && V && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", x);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Yr && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Yr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ae = null, he = this.currentSelectValue, ve = Ri(d.children);
          if (he != null) {
            var $e;
            if (d.value != null ? $e = d.value + "" : $e = ve, ae = !1, Array.isArray(he)) {
              for (var me = 0; me < he.length; me++)
                if ("" + he[me] === $e) {
                  ae = !0;
                  break;
                }
            } else
              ae = "" + he === $e;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ae,
              children: ve
            });
          }
        }
        Nr(c, d), Wn(c, d);
        var ke = Di(a.type, c, d, y, this.makeStaticMarkup, this.stack.length === 1), Xe = "";
        Ir.hasOwnProperty(c) ? ke += "/>" : (ke += ">", Xe = "</" + a.type + ">");
        var be, Se = Ei(d);
        Se != null ? (be = [], mi.hasOwnProperty(c) && Se.charAt(0) === `
` && (ke += `
`), ke += Se) : be = Ye(d.children);
        var De = {
          domNamespace: Ln(h, a.type),
          type: c,
          children: be,
          childIndex: 0,
          context: s,
          footer: Xe
        };
        return De.debugElementStack = [], this.stack.push(De), this.previousWasTextNode = !1, ke;
      }, e;
    }();
    function Ai(e, t) {
      var n = new on(e, !1, t);
      try {
        var a = n.read(1 / 0);
        return a;
      } finally {
        n.destroy();
      }
    }
    function Mi(e, t) {
      var n = new on(e, !0, t);
      try {
        var a = n.read(1 / 0);
        return a;
      } finally {
        n.destroy();
      }
    }
    function _i() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Fi() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    st.renderToNodeStream = _i, st.renderToStaticMarkup = Mi, st.renderToStaticNodeStream = Fi, st.renderToString = Ai, st.version = E;
  }()), st;
}
process.env.NODE_ENV === "production" ? gr.exports = Bi() : gr.exports = Yi();
var $i = gr.exports;
const Xi = /* @__PURE__ */ qi($i);
var wn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gn = Le.createContext && /* @__PURE__ */ Le.createContext(wn), Gi = ["attr", "size", "title"];
function Zi(u, l) {
  if (u == null)
    return {};
  var g, E, D = Ki(u, l);
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(u);
    for (E = 0; E < M.length; E++)
      g = M[E], l.indexOf(g) === -1 && {}.propertyIsEnumerable.call(u, g) && (D[g] = u[g]);
  }
  return D;
}
function Ki(u, l) {
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
function yn(u, l) {
  var g = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(D) {
      return Object.getOwnPropertyDescriptor(u, D).enumerable;
    })), g.push.apply(g, E);
  }
  return g;
}
function Zt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var g = arguments[l] != null ? arguments[l] : {};
    l % 2 ? yn(Object(g), !0).forEach(function(E) {
      Qi(u, E, g[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g)) : yn(Object(g)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(g, E));
    });
  }
  return u;
}
function Qi(u, l, g) {
  return (l = Ji(l)) in u ? Object.defineProperty(u, l, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = g, u;
}
function Ji(u) {
  var l = ea(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function ea(u, l) {
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
function xn(u) {
  return u && u.map((l, g) => /* @__PURE__ */ Le.createElement(l.tag, Zt({
    key: g
  }, l.attr), xn(l.child)));
}
function kn(u) {
  return (l) => /* @__PURE__ */ Le.createElement(ta, Gt({
    attr: Zt({}, u.attr)
  }, l), xn(u.child));
}
function ta(u) {
  var l = (g) => {
    var {
      attr: E,
      size: D,
      title: M
    } = u, v = Zi(u, Gi), C = D || g.size || "1em", I;
    return g.className && (I = g.className), u.className && (I = (I ? I + " " : "") + u.className), /* @__PURE__ */ Le.createElement("svg", Gt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, g.attr, E, v, {
      className: I,
      style: Zt(Zt({
        color: u.color || g.color
      }, g.style), u.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ Le.createElement("title", null, M), u.children);
  };
  return gn !== void 0 ? /* @__PURE__ */ Le.createElement(gn.Consumer, null, (g) => l(g)) : l(wn);
}
function ra(u) {
  return kn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function na(u) {
  return kn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const Sn = {
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
}, ia = (u) => !u || u.length < 6 ? !1 : !isNaN(Date.parse(u)) && /\d{4}|\d{2}[-/]\d{2}/.test(u), mn = (u, l) => {
  const g = Sn[u] || "xy";
  let E = [], D = [], M = [];
  if (!l || l.length === 0)
    return { series: E, labels: D, categories: M };
  const v = l[0], C = Object.keys(v).filter((p) => typeof v[p] == "number"), I = Object.keys(v).find((p) => typeof v[p] == "string") || "x";
  switch (g) {
    case "circular": {
      E = l.map((p) => Number(p.value ?? p.y ?? p[C[0]] ?? p)), D = l.map((p) => String(p.label ?? p.category ?? p.x ?? ""));
      break;
    }
    case "category": {
      M = l.map(
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
  return { series: E, labels: D, categories: M };
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
}, aa = (u, l) => {
  if (!l || !Array.isArray(l) || l.length === 0)
    return [];
  if (Array.isArray(l[0])) {
    const M = l, v = [];
    let C = [], I = [];
    const p = Array.isArray(u) ? u[0] : typeof u == "string" ? u : vr(M[0]), T = p === "column" ? "bar" : p ?? "line";
    return M.forEach((j, q) => {
      var se, _;
      const oe = Array.isArray(u) ? u[q] ?? u[0] : typeof u == "string" ? u : vr(j), ee = mn(oe, j);
      Array.isArray(ee.series) && ee.series.forEach((U) => {
        v.push({
          ...U,
          // Map "column" → "bar" for ApexCharts series-level type
          type: oe === "column" ? "bar" : oe,
          name: U.name || `Series ${v.length + 1}`
        });
      }), (((se = ee.labels) == null ? void 0 : se.length) ?? 0) > C.length && (C = ee.labels), (((_ = ee.categories) == null ? void 0 : _.length) ?? 0) > I.length && (I = ee.categories);
    }), [
      {
        type: T,
        series: v,
        labels: C,
        categories: I
      }
    ];
  }
  const g = l, E = typeof u == "string" ? u : vr(g), D = mn(E, g);
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
let oa = 0;
const ca = Ui(
  ({ data: u, type: l, options: g = {}, height: E = 350, title: D }, M) => {
    const v = Xt(null), C = Xt(null), I = Xt(null), p = Xt(null), [T, j] = Wi(!1), q = fn(() => `vizly-${++oa}`, []);
    pr(() => (yr.set(q, () => j(!0)), () => {
      yr.delete(q);
    }), [q]);
    const oe = fn(
      () => Xi.renderToString(
        /* @__PURE__ */ at(ra, { size: 14, style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" } })
      ),
      []
    ), ee = (_) => {
      const U = String(_).toLowerCase();
      return U === "column" || U === "funnel" ? "bar" : U === "rangebar" ? "rangeBar" : U === "boxplot" ? "boxPlot" : U === "polararea" ? "polarArea" : U === "radialbar" ? "radialBar" : U;
    }, se = (_) => {
      var Qe, Je, B, W, Ae, Me, lt;
      const U = aa(l, u);
      if (!U || U.length === 0)
        return { series: [] };
      const { type: le, series: A, labels: ue, categories: Q } = U[0], ce = String(le).toLowerCase(), we = Sn[ce] || "xy", z = we === "circular", $ = ce === "radar", Pe = ce === "funnel", G = we === "range";
      let Ne = A;
      z && (Array.isArray(A) && ((Qe = A[0]) != null && Qe.data) ? Ne = A[0].data : Array.isArray(A) && typeof A[0] == "object" && (Ne = A.map((ne) => ne.y ?? ne.value ?? 0)));
      const Oe = z ? ue != null && ue.length ? ue : Q != null && Q.length ? Q : [] : [], Ze = (() => $ ? Q != null && Q.length ? Q : ue ?? [] : z ? [] : Pe ? [] : Q != null && Q.length ? Q : [])(), Ke = (() => {
        var He, Ue, _e;
        if (!G)
          return "category";
        const ne = Array.isArray(A) ? (_e = (Ue = (He = A[0]) == null ? void 0 : He.data) == null ? void 0 : Ue[0]) == null ? void 0 : _e.x : null;
        return ne && ia(String(ne)) ? "datetime" : "category";
      })();
      return {
        ...g,
        chart: {
          id: _ ? "vizly-modal-chart" : "vizly-main-chart",
          type: ee(ce),
          height: "100%",
          width: "100%",
          // Fix: Containment
          animations: { enabled: !0, speed: 800 },
          toolbar: {
            show: !0,
            tools: {
              customIcons: _ ? [] : [{
                icon: oe,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => j(!0)
              }]
            }
          },
          ...g.chart
        },
        grid: {
          padding: { left: 20, right: 20, bottom: 10 },
          // Fix: X-axis bleed
          ...g.grid
        },
        series: Ne,
        labels: Oe,
        // always [], never undefined
        xaxis: {
          type: G ? Ke : "category",
          // ← uses what you computed above
          categories: Ze,
          ...g.xaxis
        },
        plotOptions: {
          ...g.plotOptions,
          bar: {
            horizontal: ce === "funnel" || ce === "rangebar",
            isFunnel: ce === "funnel",
            distributed: ce === "funnel",
            ...(Je = g.plotOptions) == null ? void 0 : Je.bar
          },
          heatmap: {
            enableShades: !0,
            colorScale: { ranges: ((Ae = (W = (B = g.plotOptions) == null ? void 0 : B.heatmap) == null ? void 0 : W.colorScale) == null ? void 0 : Ae.ranges) || [] }
          }
        },
        title: {
          text: typeof D == "string" ? D : (D == null ? void 0 : D.text) || ((Me = g.title) == null ? void 0 : Me.text),
          align: typeof D == "object" ? D.align : ((lt = g.title) == null ? void 0 : lt.align) || "left"
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
      let _ = !0;
      return (async () => {
        if (I.current && await I.current.destroy(), !_ || !v.current)
          return;
        v.current.innerHTML = "";
        const le = se(!1);
        I.current = new dn(v.current, le), await I.current.render();
      })(), () => {
        var le;
        _ = !1, (le = I.current) == null || le.destroy();
      };
    }, [u, l, g, D]), pr(() => {
      if (T && C.current) {
        const _ = setTimeout(async () => {
          p.current && await p.current.destroy(), C.current.innerHTML = "", p.current = new dn(C.current, se(!0)), await p.current.render();
        }, 350);
        return () => clearTimeout(_);
      }
    }, [T]), Vi(M, () => ({
      zoomIn: () => {
        var _;
        return (_ = I.current) == null ? void 0 : _.zoomX(20, 80);
      },
      zoomOut: () => {
        var _;
        return (_ = I.current) == null ? void 0 : _.resetSeries();
      },
      reset: () => {
        var _;
        return (_ = I.current) == null ? void 0 : _.resetSeries();
      },
      toggleFullscreen: () => j(!T)
    })), /* @__PURE__ */ dr(Hi, { children: [
      /* @__PURE__ */ at(
        "div",
        {
          style: { height: E, width: "100%", position: "relative", overflow: "hidden" },
          children: /* @__PURE__ */ at("div", { ref: v, style: { height: "100%", width: "100%", overflow: "hidden" } })
        }
      ),
      T && /* @__PURE__ */ dr("div", { style: {
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
        /* @__PURE__ */ at("style", { children: `
              @keyframes vizlyFadeIn  { from { opacity: 0; } to { opacity: 1; } }
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
          /* @__PURE__ */ at(
            "button",
            {
              onClick: () => j(!1),
              style: { position: "absolute", top: 15, right: 15, cursor: "pointer", border: "none", background: "transparent" },
              children: /* @__PURE__ */ at(na, { size: 18 })
            }
          ),
          /* @__PURE__ */ at("div", { ref: C, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  ca as VizlyChart
};
