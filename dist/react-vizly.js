import { jsx as yt, jsxs as sn } from "react/jsx-runtime";
import Le, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as ln, useEffect as un, useImperativeHandle as Hi } from "react";
import cn from "apexcharts";
function Wi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var pr = { exports: {} }, tt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dr, fn;
function yn() {
  if (fn)
    return dr;
  fn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
  function E(F) {
    if (F == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(F);
  }
  function D() {
    try {
      if (!Object.assign)
        return !1;
      var F = new String("abc");
      if (F[5] = "de", Object.getOwnPropertyNames(F)[0] === "5")
        return !1;
      for (var m = {}, I = 0; I < 10; I++)
        m["_" + String.fromCharCode(I)] = I;
      var P = Object.getOwnPropertyNames(m).map(function(p) {
        return m[p];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var C = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        C[p] = p;
      }), Object.keys(Object.assign({}, C)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return dr = D() ? Object.assign : function(F, m) {
    for (var I, P = E(F), C, p = 1; p < arguments.length; p++) {
      I = Object(arguments[p]);
      for (var M in I)
        l.call(I, M) && (P[M] = I[M]);
      if (u) {
        C = u(I);
        for (var K = 0; K < C.length; K++)
          g.call(I, C[K]) && (P[C[K]] = I[C[K]]);
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
function Ui() {
  if (dn)
    return tt;
  dn = 1;
  var u = yn(), l = Le;
  function g(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, D = 60107, F = 60108, m = 60114, I = 60109, P = 60110, C = 60112, p = 60113, M = 60120, K = 60115, J = 60116, we = 60121, ge = 60117, A = 60119, ee = 60129, Y = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var L = Symbol.for;
    E = L("react.portal"), D = L("react.fragment"), F = L("react.strict_mode"), m = L("react.profiler"), I = L("react.provider"), P = L("react.context"), C = L("react.forward_ref"), p = L("react.suspense"), M = L("react.suspense_list"), K = L("react.memo"), J = L("react.lazy"), we = L("react.block"), ge = L("react.fundamental"), A = L("react.scope"), ee = L("react.debug_trace_mode"), Y = L("react.legacy_hidden");
  }
  function oe(r) {
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
      case m:
        return "Profiler";
      case F:
        return "StrictMode";
      case p:
        return "Suspense";
      case M:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case P:
          return (r.displayName || "Context") + ".Consumer";
        case I:
          return (r._context.displayName || "Context") + ".Provider";
        case C:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case K:
          return oe(r.type);
        case we:
          return oe(r._render);
        case J:
          a = r._payload, r = r._init;
          try {
            return oe(r(a));
          } catch {
          }
      }
    return null;
  }
  var pe = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xe = {};
  function ke(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function N(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ke(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = Xe;
    return a;
  }
  for (var V = new Uint16Array(16), Se = 0; 15 > Se; Se++)
    V[Se] = Se + 1;
  V[15] = 0;
  var X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, De = Object.prototype.hasOwnProperty, Ee = {}, Pe = {};
  function Ne(r) {
    return De.call(Pe, r) ? !0 : De.call(Ee, r) ? !1 : X.test(r) ? Pe[r] = !0 : (Ee[r] = !0, !1);
  }
  function Ae(r, a, i, f) {
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
  function Ge(r, a, i, f) {
    if (a === null || typeof a > "u" || Ae(r, a, i, f))
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
  function q(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    W[r] = new q(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    W[a] = new q(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    W[r] = new q(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    W[r] = new q(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    W[r] = new q(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    W[r] = new q(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    W[r] = new q(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    W[r] = new q(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    W[r] = new q(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Me = /[\-:]([a-z])/g;
  function nt(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      Me,
      nt
    );
    W[a] = new q(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(Me, nt);
    W[a] = new q(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(Me, nt);
    W[a] = new q(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    W[r] = new q(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    W[r] = new q(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Zt = /["'&<>]/;
  function _e(r) {
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
    var i = W.hasOwnProperty(r) ? W[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Ge(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (_e(a) + '"'))) : Ne(r) ? r + '="' + (_e(a) + '"') : "";
  }
  function xt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var it = typeof Object.is == "function" ? Object.is : xt, ae = null, Fe = null, _ = null, He = !1, Ze = !1, Oe = null, je = 0;
  function Re() {
    if (ae === null)
      throw Error(g(321));
    return ae;
  }
  function wt() {
    if (0 < je)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function We() {
    return _ === null ? Fe === null ? (He = !1, Fe = _ = wt()) : (He = !0, _ = Fe) : _.next === null ? (He = !1, _ = _.next = wt()) : (He = !0, _ = _.next), _;
  }
  function Mt(r, a, i, f) {
    for (; Ze; )
      Ze = !1, je += 1, _ = null, i = r(a, f);
    return ot(), i;
  }
  function ot() {
    ae = null, Ze = !1, Fe = null, je = 0, _ = Oe = null;
  }
  function at(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function kt(r, a, i) {
    if (ae = Re(), _ = We(), He) {
      var f = _.queue;
      if (a = f.dispatch, Oe !== null && (i = Oe.get(f), i !== void 0)) {
        Oe.delete(f), f = _.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return _.memoizedState = f, [f, a];
      }
      return [_.memoizedState, a];
    }
    return r = r === at ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, _.memoizedState = r, r = _.queue = { last: null, dispatch: null }, r = r.dispatch = Ke.bind(null, ae, r), [_.memoizedState, r];
  }
  function St(r, a) {
    if (ae = Re(), _ = We(), a = a === void 0 ? null : a, _ !== null) {
      var i = _.memoizedState;
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
    return r = r(), _.memoizedState = [r, a], r;
  }
  function Ke(r, a, i) {
    if (!(25 > je))
      throw Error(g(301));
    if (r === ae)
      if (Ze = !0, r = { action: i, next: null }, Oe === null && (Oe = /* @__PURE__ */ new Map()), i = Oe.get(a), i === void 0)
        Oe.set(a, r);
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
    return ke(r, a), r[a];
  }, useContext: function(r) {
    Re();
    var a = B.threadID;
    return ke(r, a), r[a];
  }, useMemo: St, useReducer: kt, useRef: function(r) {
    ae = Re(), _ = We();
    var a = _.memoizedState;
    return a === null ? (r = { current: r }, _.memoizedState = r) : a;
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
    return (B.identifierPrefix || "") + "R:" + (B.uniqueID++).toString(36);
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
  var Ue = /([A-Z])/g, ut = /^ms-/, me = l.Children.toArray, ct = pe.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, Qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, It = {};
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
      throw Error(g(152, oe(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var y = S.prototype && S.prototype.isReactComponent, te = N(S, a, i, y), G = [], re = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (G === null)
          return null;
      }, enqueueReplaceState: function(Tt, j) {
        re = !0, G = [j];
      }, enqueueSetState: function(Tt, j) {
        if (G === null)
          return null;
        G.push(j);
      } };
      if (y) {
        if (y = new S(b.props, te, H), typeof S.getDerivedStateFromProps == "function") {
          var T = S.getDerivedStateFromProps.call(null, b.props, y.state);
          T != null && (y.state = u({}, y.state, T));
        }
      } else if (ae = {}, y = S(
        b.props,
        te,
        H
      ), y = Mt(S, b.props, y, te), y == null || y.render == null) {
        r = y, Ct(r, S);
        return;
      }
      if (y.props = b.props, y.context = te, y.updater = H, H = y.state, H === void 0 && (y.state = H = null), typeof y.UNSAFE_componentWillMount == "function" || typeof y.componentWillMount == "function")
        if (typeof y.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.UNSAFE_componentWillMount(), G.length) {
          H = G;
          var Z = re;
          if (G = null, re = !1, Z && H.length === 1)
            y.state = H[0];
          else {
            T = Z ? H[0] : y.state;
            var Ie = !0;
            for (Z = Z ? 1 : 0; Z < H.length; Z++) {
              var se = H[Z];
              se = typeof se == "function" ? se.call(y, T, b.props, te) : se, se != null && (Ie ? (Ie = !1, T = u({}, T, se)) : u(T, se));
            }
            y.state = T;
          }
        } else
          G = null;
      if (r = y.render(), Ct(r, S), typeof y.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var le = y.getChildContext();
        for (var de in le)
          if (!(de in b))
            throw Error(g(108, oe(S) || "Unknown", de));
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
      l.isValidElement(i) ? i.type !== D ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : me(i)) : i = me(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Xe, footer: "" };
      var x = V[0];
      if (x === 0) {
        var b = V;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(g(304));
        var y = new Uint16Array(S);
        for (y.set(b), V = y, V[0] = x + 1, b = x; b < S - 1; b++)
          V[b] = b + 1;
        V[S - 1] = 0;
      } else
        V[0] = V[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        V[i] = V[0], V[0] = i;
      }
    }, a.pushProvider = function(i) {
      var f = ++this.contextIndex, k = i.type._context, x = this.threadID;
      ke(k, x);
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
      var k = ct.current;
      ct.current = st;
      try {
        for (var x = [""], b = !1; x[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            V[S] = V[0], V[0] = S;
            break;
          }
          var y = this.stack[this.stack.length - 1];
          if (b || y.childIndex >= y.children.length) {
            var te = y.footer;
            if (te !== "" && (this.previousWasTextNode = !1), this.stack.pop(), y.type === "select")
              this.currentSelectValue = null;
            else if (y.type != null && y.type.type != null && y.type.type.$$typeof === I)
              this.popProvider(y.type);
            else if (y.type === p) {
              this.suspenseDepth--;
              var G = x.pop();
              if (b) {
                b = !1;
                var re = y.fallbackFrame;
                if (!re)
                  throw Error(g(303));
                this.stack.push(re), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += G;
            }
            x[this.suspenseDepth] += te;
          } else {
            var H = y.children[y.childIndex++], T = "";
            try {
              T += this.render(H, y.context, y.domNamespace);
            } catch (Z) {
              throw Z != null && typeof Z.then == "function" ? Error(g(294)) : Z;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += T;
          }
        }
        return x[0];
      } finally {
        ct.current = k, B = f, ot();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? _e(k) : this.previousWasTextNode ? "<!-- -->" + _e(k) : (this.previousWasTextNode = !0, _e(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
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
        case Y:
        case ee:
        case F:
        case m:
        case M:
        case D:
          return i = me(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case p:
          throw Error(g(294));
        case A:
          throw Error(g(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case C:
            ae = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = me(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case K:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case I:
            return x = me(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case P:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ke(x, S), x = me(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case ge:
            throw Error(g(338));
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
      throw Error(g(130, x == null ? x : typeof x, ""));
    }, a.renderDOM = function(i, f, k) {
      var x = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(x)) {
        if (!Qe.test(x))
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
          var y = b.children;
          if (y != null) {
            if (S != null)
              throw Error(g(92));
            if (Array.isArray(y)) {
              if (!(1 >= y.length))
                throw Error(g(93));
              y = y[0];
            }
            S = "" + y;
          }
          S == null && (S = "");
        }
        b = u({}, b, { value: void 0, children: "" + S });
      } else if (x === "select")
        this.currentSelectValue = b.value != null ? b.value : b.defaultValue, b = u({}, b, { value: void 0 });
      else if (x === "option") {
        y = this.currentSelectValue;
        var te = jt(b.children);
        if (y != null) {
          var G = b.value != null ? b.value + "" : te;
          if (S = !1, Array.isArray(y)) {
            for (var re = 0; re < y.length; re++)
              if ("" + y[re] === G) {
                S = !0;
                break;
              }
          } else
            S = "" + y === G;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: te }
          );
        }
      }
      if (S = b) {
        if (lt[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, y = this.makeStaticMarkup, te = this.stack.length === 1, G = "<" + i.type;
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
          var H = S[j];
          if (H != null) {
            if (j === "style") {
              var T = void 0, Z = "", Ie = "";
              for (T in H)
                if (H.hasOwnProperty(T)) {
                  var se = T.indexOf("--") === 0, le = H[T];
                  if (le != null) {
                    if (se)
                      var de = T;
                    else if (de = T, It.hasOwnProperty(de))
                      de = It[de];
                    else {
                      var Tt = de.replace(Ue, "-$1").toLowerCase().replace(ut, "-ms-");
                      de = It[de] = Tt;
                    }
                    Z += Ie + de + ":", Ie = T, se = le == null || typeof le == "boolean" || le === "" ? "" : se || typeof le != "number" || le === 0 || fe.hasOwnProperty(Ie) && fe[Ie] ? ("" + le).trim() : le + "px", Z += se, Ie = ";";
                  }
                }
              H = Z || null;
            }
            T = null, re ? Lt.hasOwnProperty(j) || (T = j, T = Ne(T) && H != null ? T + '="' + (_e(H) + '"') : "") : T = bt(j, H), T && (G += " " + T);
          }
        }
      y || te && (G += ' data-reactroot=""');
      var j = G;
      S = "", Ot.hasOwnProperty(x) ? j += "/>" : (j += ">", S = "</" + i.type + ">");
      e: {
        if (y = b.dangerouslySetInnerHTML, y != null) {
          if (y.__html != null) {
            y = y.__html;
            break e;
          }
        } else if (y = b.children, typeof y == "string" || typeof y == "number") {
          y = _e(y);
          break e;
        }
        y = null;
      }
      return y != null ? (b = [], _t.hasOwnProperty(x) && y.charAt(0) === `
` && (j += `
`), j += y) : b = me(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, j;
    }, r;
  }();
  return tt.renderToNodeStream = function() {
    throw Error(g(207));
  }, tt.renderToStaticMarkup = function(r, a) {
    r = new ft(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, tt.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, tt.renderToString = function(r, a) {
    r = new ft(r, !1, a);
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
var pn;
function Vi() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Le, l = yn();
    function g(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", D = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("warn", e, n);
      }
    }
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("error", e, n);
      }
    }
    function I(e, t, n) {
      {
        var o = D.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var P = 60106, C = 60107, p = 60108, M = 60114, K = 60109, J = 60110, we = 60112, ge = 60113, A = 60120, ee = 60115, Y = 60116, L = 60121, oe = 60117, pe = 60119, Xe = 60129, ke = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var N = Symbol.for;
      N("react.element"), P = N("react.portal"), C = N("react.fragment"), p = N("react.strict_mode"), M = N("react.profiler"), K = N("react.provider"), J = N("react.context"), we = N("react.forward_ref"), ge = N("react.suspense"), A = N("react.suspense_list"), ee = N("react.memo"), Y = N("react.lazy"), L = N("react.block"), N("react.server.block"), oe = N("react.fundamental"), pe = N("react.scope"), N("react.opaque.id"), Xe = N("react.debug_trace_mode"), N("react.offscreen"), ke = N("react.legacy_hidden");
    }
    function V(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Se(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case P:
          return "Portal";
        case M:
          return "Profiler";
        case p:
          return "StrictMode";
        case ge:
          return "Suspense";
        case A:
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
          case we:
            return V(e, e.render, "ForwardRef");
          case ee:
            return X(e.type);
          case L:
            return X(e._render);
          case Y: {
            var o = e, s = o._payload, h = o._init;
            try {
              return X(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var De = !1, Ee = 0, Pe, Ne, Ae, Ge, q, W, Me;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Zt() {
      {
        if (Ee === 0) {
          Pe = console.log, Ne = console.info, Ae = console.warn, Ge = console.error, q = console.group, W = console.groupCollapsed, Me = console.groupEnd;
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
        Ee++;
      }
    }
    function _e() {
      {
        if (Ee--, Ee === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: Pe
            }),
            info: l({}, e, {
              value: Ne
            }),
            warn: l({}, e, {
              value: Ae
            }),
            error: l({}, e, {
              value: Ge
            }),
            group: l({}, e, {
              value: q
            }),
            groupCollapsed: l({}, e, {
              value: W
            }),
            groupEnd: l({}, e, {
              value: Me
            })
          });
        }
        Ee < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var bt = D.ReactCurrentDispatcher, xt;
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
    var ae = !1, Fe;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      Fe = new _();
    }
    function He(e, t) {
      if (!e || ae)
        return "";
      {
        var n = Fe.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ae = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = bt.current, bt.current = null, Zt();
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
            } catch (U) {
              o = U;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (U) {
              o = U;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            o = U;
          }
          e();
        }
      } catch (U) {
        if (U && o && typeof U.stack == "string") {
          for (var v = U.stack.split(`
`), d = o.stack.split(`
`), O = v.length - 1, R = d.length - 1; O >= 1 && R >= 0 && v[O] !== d[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (v[O] !== d[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || v[O] !== d[R]) {
                    var $ = `
` + v[O].replace(" at new ", " at ");
                    return typeof e == "function" && Fe.set(e, $), $;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, bt.current = h, _e(), Error.prepareStackTrace = s;
      }
      var Q = e ? e.displayName || e.name : "", w = Q ? it(Q) : "";
      return typeof e == "function" && Fe.set(e, w), w;
    }
    function Ze(e, t, n) {
      return He(e, !1);
    }
    function Oe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function je(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return He(e, Oe(e));
      if (typeof e == "string")
        return it(e);
      switch (e) {
        case ge:
          return it("Suspense");
        case A:
          return it("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case we:
            return Ze(e.render);
          case ee:
            return je(e.type, t, n);
          case L:
            return Ze(e._render);
          case Y: {
            var o = e, s = o._payload, h = o._init;
            try {
              return je(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = {}, wt = D.ReactDebugCurrentFrame;
    function We(e) {
      if (e) {
        var t = e._owner, n = je(e.type, e._source, t ? t.type : null);
        wt.setExtraStackFrame(n);
      } else
        wt.setExtraStackFrame(null);
    }
    function Mt(e, t, n, o, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
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
            v && !(v instanceof Error) && (We(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof v), We(null)), v instanceof Error && !(v.message in Re) && (Re[v.message] = !0, We(s), m("Failed %s type: %s", n, v.message), We(null));
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
    function Ke(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function Et(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === J && s._context === void 0
          );
          if (!h && !ot.has(e)) {
            ot.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === K ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", X(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ke(s, n), s[n];
        {
          var v = kt(e, t);
          return e.contextTypes && St(e.contextTypes, v, "context"), v;
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
    var lt = 0, fe = 1, Rt = 2, Ue = 3, ut = 4, me = 5, ct = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Qe = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", It = new RegExp("^[" + _t + "][" + Qe + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Ct(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : It.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
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
          case Ue:
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
    function i(e, t, n, o, s, h, c) {
      this.acceptsBooleans = t === Rt || t === Ue || t === ut, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
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
        Ue,
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
        Ue,
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
    var y = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, te = !1;
    function G(e) {
      !te && y.test(e) && (te = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var re = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = re.exec(t);
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
    function T(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function Z(e) {
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
        return s === Ue || s === ut && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, G(t)), o + "=" + Z(t));
      } else if (Ct(e))
        return e + "=" + Z(t);
      return "";
    }
    function le(e, t) {
      return !Ct(e) || t == null ? "" : e + "=" + Z(t);
    }
    function de(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Tt = typeof Object.is == "function" ? Object.is : de, j = null, Nt = null, z = null, Dt = !1, Ht = !1, Ve = null, Wt = 0, kn = 25, Ce = !1, dt;
    function Je() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ce && m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", dt), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, dt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tt(e[n], t[n]))
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
    function er() {
      return z === null ? Nt === null ? (Dt = !1, Nt = z = hr()) : (Dt = !0, z = Nt) : z.next === null ? (Dt = !1, z = z.next = hr()) : (Dt = !0, z = z.next), z;
    }
    function vr(e) {
      j = e, Ce = !1;
    }
    function gr(e, t, n, o) {
      for (; Ht; )
        Ht = !1, Wt += 1, z = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Ce = !1, j = null, Ht = !1, Nt = null, Wt = 0, Ve = null, z = null;
    }
    function En(e, t) {
      var n = pt.threadID;
      return Ke(e, n), Ce && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      dt = "useContext", Je();
      var n = pt.threadID;
      return Ke(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return dt = "useState", yr(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function yr(e, t, n) {
      if (e !== tr && (dt = "useReducer"), j = Je(), z = er(), Dt) {
        var o = z.queue, s = o.dispatch;
        if (Ve !== null) {
          var h = Ve.get(o);
          if (h !== void 0) {
            Ve.delete(o);
            var c = z.memoizedState, v = h;
            do {
              var d = v.action;
              Ce = !0, c = e(c, d), Ce = !1, v = v.next;
            } while (v !== null);
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
      j = Je(), z = er();
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
      var h = e();
      return Ce = !1, z.memoizedState = [h, n], h;
    }
    function In(e) {
      j = Je(), z = er();
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
      dt = "useLayoutEffect", m("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
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
        Ve === null && (Ve = /* @__PURE__ */ new Map());
        var s = Ve.get(t);
        if (s === void 0)
          Ve.set(t, o);
        else {
          for (var h = s; h.next !== null; )
            h = h.next;
          h.next = o;
        }
      }
    }
    function Dn(e, t) {
      return br(function() {
        return e;
      }, t);
    }
    function Pn(e, t, n) {
      return Je(), t(e._source);
    }
    function An(e) {
      return Je(), e;
    }
    function Mn() {
      Je();
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
      useReducer: yr,
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
    }, Ut = "http://www.w3.org/1999/xhtml", wr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", ir = {
      html: Ut,
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
          return Ut;
      }
    }
    function jn(e, t) {
      return e == null || e === Ut ? kr(t) : e === nr && t === "foreignObject" ? Ut : e;
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
      zn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
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
    function Wn(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Un = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pt).forEach(function(e) {
      Un.forEach(function(t) {
        Pt[Wn(t, e)] = Pt[e];
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
        ht.hasOwnProperty(e) && ht[e] || (ht[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        ht.hasOwnProperty(e) && ht[e] || (ht[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jn = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Or, "")));
      }, ei = function(e, t) {
        Rr || (Rr = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ti = function(e, t) {
        Ir || (Ir = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
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
    }, vt = {}, ni = new RegExp("^(aria)-[" + Qe + "]*$"), ii = new RegExp("^(aria)[A-Z][" + Qe + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(vt, t) && vt[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Cr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), vt[t] = !0, !0;
          if (t !== o)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), vt[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), h = Cr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return vt[t] = !0, !1;
          if (t !== h)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), vt[t] = !0, !0;
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
        n.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
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
        t != null && t.value === null && !Tr && (Tr = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
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
      var ne = {}, ci = Object.prototype.hasOwnProperty, Ar = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + Qe + "]*$"), pi = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
      Pr = function(e, t, n, o) {
        if (ci.call(ne, t) && ne[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ne[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var v = c.hasOwnProperty(s) ? c[s] : null;
          if (v != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, v), ne[t] = !0, !0;
          if (Ar.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), ne[t] = !0, !0;
        } else if (Ar.test(t))
          return fi.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ne[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ne[t] = !0, !0;
        if (s === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ne[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ne[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ne[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === lt;
        if (Dr.hasOwnProperty(s)) {
          var R = Dr[s];
          if (R !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ne[t] = !0, !0;
        } else if (!O && t !== s)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), ne[t] = !0, !0;
        return typeof n == "boolean" && ft(t, n, d, !1) ? (n ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ne[t] = !0, !0) : O ? !0 : ft(t, n, d, !1) ? (ne[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === Ue && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ne[t] = !0), !0);
      };
    }
    var hi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var h = Pr(e, s, t[s], n);
          h || o.push(s);
        }
        var c = o.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        o.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function vi(e, t, n) {
      ar(e, t) || hi(e, t, n);
    }
    var qe = u.Children.toArray, ze = [], lr = D.ReactCurrentDispatcher, Vt, ur = null, Mr = function() {
      return "";
    }, _r = function(e) {
      return "";
    }, Fr = function(e, t) {
    }, jr = function(e) {
    }, zr = function(e) {
    }, Lr = function() {
    }, Nr = !1;
    Vt = D.ReactDebugCurrentFrame, Fr = function(e, t) {
      li(e, t), ui(e, t), vi(e, t, null);
    }, _r = function(e) {
      return je(e.type, e._source, null);
    }, jr = function(e) {
      ze.push(e), ze.length === 1 && (ur = Vt.getCurrentStack, Vt.getCurrentStack = Mr);
    }, zr = function(e) {
      var t = ze[ze.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Lr = function() {
      ze.pop(), ze.length === 0 && (Vt.getCurrentStack = ur, ur = null);
    }, Mr = function() {
      if (ze.length === 0)
        return "";
      for (var e = ze[ze.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += _r(s[h]);
      return t;
    };
    var Hr = !1, Wr = !1, Ur = !1, Vr = !1, qr = !1, Br = {}, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = ["value", "defaultValue"], gi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, mi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qr = {};
    function yi(e) {
      if (!Qr.hasOwnProperty(e)) {
        if (!mi.test(e))
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
          var s = o.indexOf("--") === 0, h = e[o];
          s || ri(o, h), h != null && (t += n + (s ? o : bi(o)) + ":", t += Vn(o, h, s), n = ";");
        }
      return t || null;
    }
    function Jr(e, t) {
      {
        var n = e.constructor, o = n && X(n) || "ReactClass", s = o + "." + t;
        if (Br[s])
          return;
        m(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

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
        return qe(e);
      var t = e;
      if (t.type !== C)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return qe(n);
      var o = n;
      return [o];
    }
    function Ei(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !qr && typeof n != "string" && typeof n != "number" && (qr = !0, m("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Oi = Object.prototype.hasOwnProperty, Ri = "style", Ii = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ci(e, t, n, o, s, h) {
      var c = "<" + e, v = ar(t, n);
      for (var d in n)
        if (Oi.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Ri && (O = xi(O));
            var R = null;
            v ? Ii.hasOwnProperty(d) || (R = le(d, O)) : R = se(d, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Ie()), c;
    }
    function en(e, t) {
      if (e === void 0)
        throw Error((X(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (zr(o), typeof s != "function")
          break;
        h(o, s);
      }
      function h(c, v) {
        var d = wi(v), O = Et(v, t, n, d), R = [], $ = !1, Q = {
          isMounted: function($e) {
            return !1;
          },
          enqueueForceUpdate: function($e) {
            if (R === null)
              return Jr($e, "forceUpdate"), null;
          },
          enqueueReplaceState: function($e, mt) {
            $ = !0, R = [mt];
          },
          enqueueSetState: function($e, mt) {
            if (R === null)
              return Jr($e, "setState"), null;
            R.push(mt);
          }
        }, w;
        if (d) {
          if (w = new v(c.props, O, Q), typeof v.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var U = X(v) || "Unknown";
              Zr[U] || (m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, w.state === null ? "null" : "undefined", U), Zr[U] = !0);
            }
            var ie = v.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ie === void 0) {
              var ue = X(v) || "Unknown";
              Gr[ue] || (m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", ue), Gr[ue] = !0);
            }
            ie != null && (w.state = l({}, w.state, ie));
          }
        } else {
          if (v.prototype && typeof v.prototype.render == "function") {
            var ce = X(v) || "Unknown";
            Yr[ce] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ce, ce), Yr[ce] = !0);
          }
          var Be = {};
          if (vr(Be), w = v(c.props, O, Q), w = gr(v, c.props, w, O), w != null && w.render != null) {
            var he = X(v) || "Unknown";
            $r[he] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", he, he, he), $r[he] = !0);
          }
          if (w == null || w.render == null) {
            e = w, en(e, v);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = Q;
        var ye = w.state;
        if (ye === void 0 && (w.state = ye = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Ye = X(v) || "Unknown";
              Xr[Ye] || (F(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Ye
              ), Xr[Ye] = !0);
            }
            typeof v.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof v.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var ve = R, be = $;
            if (R = null, $ = !1, be && ve.length === 1)
              w.state = ve[0];
            else {
              for (var Te = be ? ve[0] : w.state, qt = !0, gt = be ? 1 : 0; gt < ve.length; gt++) {
                var xe = ve[gt], At = typeof xe == "function" ? xe.call(w, Te, c.props, O) : xe;
                At != null && (qt ? (qt = !1, Te = l({}, Te, At)) : l(Te, At));
              }
              w.state = Te;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), en(e, v);
        var et;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = v.childContextTypes;
            if (typeof Bt == "object") {
              et = w.getChildContext();
              for (var Yt in et)
                if (!(Yt in Bt))
                  throw Error((X(v) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", X(v) || "Unknown");
          }
          et && (t = l({}, t, et));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var tn = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var h = Si(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: ir.html,
          children: h,
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
        var s = ++this.contextIndex, h = o.type._context, c = this.threadID;
        Ke(h, c);
        var v = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = v, this.contextProviderStack[s] = o, h[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && m("Unexpected pop.");
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
        var s = pt;
        xr(this);
        var h = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], v = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Ot(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (v || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === K) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === ge) {
                this.suspenseDepth--;
                var $ = c.pop();
                if (v) {
                  v = !1;
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
            var w = d.children[d.childIndex++], U = "";
            jr(this.stack), d.debugElementStack.length = 0;
            try {
              U += this.render(w, d.context, d.domNamespace);
            } catch (ie) {
              if (ie != null && typeof ie.then == "function") {
                if (!De)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ie;
            } finally {
              Lr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += U;
          }
          return c[0];
        } finally {
          lr.current = h, xr(s), mr();
        }
      }, t.render = function(o, s, h) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? T(c) : this.previousWasTextNode ? "<!-- -->" + T(c) : (this.previousWasTextNode = !0, T(c));
        } else {
          var v, d = Ti(o, s, this.threadID);
          if (v = d.child, s = d.context, v === null || v === !1)
            return "";
          if (!u.isValidElement(v)) {
            if (v != null && v.$$typeof != null) {
              var O = v.$$typeof;
              throw Error(O === P ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = qe(v), $ = {
              type: null,
              domNamespace: h,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return $.debugElementStack = [], this.stack.push($), "";
          }
          var Q = v, w = Q.type;
          if (typeof w == "string")
            return this.renderDOM(Q, s, h);
          switch (w) {
            case ke:
            case Xe:
            case p:
            case M:
            case A:
            case C: {
              var U = qe(v.props.children), ie = {
                type: null,
                domNamespace: h,
                children: U,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ie.debugElementStack = [], this.stack.push(ie), "";
            }
            case ge:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case pe:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case we: {
                var ue = v, ce, Be = {};
                vr(Be), ce = w.render(ue.props, ue.ref), ce = gr(w.render, ue.props, ce, ue.ref), ce = qe(ce);
                var he = {
                  type: null,
                  domNamespace: h,
                  children: ce,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case ee: {
                var ye = v, Ye = [u.createElement(w.type, l({
                  ref: ye.ref
                }, ye.props))], ve = {
                  type: null,
                  domNamespace: h,
                  children: Ye,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ve.debugElementStack = [], this.stack.push(ve), "";
              }
              case K: {
                var be = v, Te = be.props, qt = qe(Te.children), gt = {
                  type: be,
                  domNamespace: h,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return gt.debugElementStack = [], this.pushProvider(be), this.stack.push(gt), "";
              }
              case J: {
                var xe = v.type;
                xe._context === void 0 ? xe !== xe.Consumer && (Nr || (Nr = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : xe = xe._context;
                var At = v.props, et = this.threadID;
                Ke(xe, et);
                var Bt = xe[et], Yt = qe(At.children(Bt)), $e = {
                  type: v,
                  domNamespace: h,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return $e.debugElementStack = [], this.stack.push($e), "";
              }
              case oe:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case Y: {
                var mt = v, rn = v.type, _i = rn._payload, Fi = rn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: mt.ref
                }, mt.props))], nn = {
                  type: null,
                  domNamespace: h,
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
            var an = on ? X(on) : null;
            an && (fr += `

Check the render method of \`` + an + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, h) {
        var c = o.type.toLowerCase(), v = h;
        h === ir.html && (v = kr(c)), v === ir.html && c !== o.type && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), yi(c);
        var d = o.props;
        if (c === "input")
          or("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Wr && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Hr && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Hr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (m("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, $ = d.children;
            if ($ != null) {
              if (m("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
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
                var U = Array.isArray(d[w]);
                d.multiple && !U ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && U && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Ur && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ur = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ie = null, ue = this.currentSelectValue, ce = Ei(d.children);
          if (ue != null) {
            var Be;
            if (d.value != null ? Be = d.value + "" : Be = ce, ie = !1, Array.isArray(ue)) {
              for (var he = 0; he < ue.length; he++)
                if ("" + ue[he] === Be) {
                  ie = !0;
                  break;
                }
            } else
              ie = "" + ue === Be;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ie,
              children: ce
            });
          }
        }
        Fr(c, d), Hn(c, d);
        var ye = Ci(o.type, c, d, v, this.makeStaticMarkup, this.stack.length === 1), Ye = "";
        Sr.hasOwnProperty(c) ? ye += "/>" : (ye += ">", Ye = "</" + o.type + ">");
        var ve, be = ki(d);
        be != null ? (ve = [], gi.hasOwnProperty(c) && be.charAt(0) === `
` && (ye += `
`), ye += be) : ve = qe(d.children);
        var Te = {
          domNamespace: jn(h, o.type),
          type: c,
          children: ve,
          childIndex: 0,
          context: s,
          footer: Ye
        };
        return Te.debugElementStack = [], this.stack.push(Te), this.previousWasTextNode = !1, ye;
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
    rt.renderToNodeStream = Ai, rt.renderToStaticMarkup = Pi, rt.renderToStaticNodeStream = Mi, rt.renderToString = Di, rt.version = E;
  }()), rt;
}
process.env.NODE_ENV === "production" ? pr.exports = Ui() : pr.exports = Vi();
var qi = pr.exports;
const Bi = /* @__PURE__ */ Wi(qi);
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, hn = Le.createContext && /* @__PURE__ */ Le.createContext(bn), Yi = ["attr", "size", "title"];
function $i(u, l) {
  if (u == null)
    return {};
  var g, E, D = Xi(u, l);
  if (Object.getOwnPropertySymbols) {
    var F = Object.getOwnPropertySymbols(u);
    for (E = 0; E < F.length; E++)
      g = F[E], l.indexOf(g) === -1 && {}.propertyIsEnumerable.call(u, g) && (D[g] = u[g]);
  }
  return D;
}
function Xi(u, l) {
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
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var g = arguments[l];
      for (var E in g)
        ({}).hasOwnProperty.call(g, E) && (u[E] = g[E]);
    }
    return u;
  }, Xt.apply(null, arguments);
}
function vn(u, l) {
  var g = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(D) {
      return Object.getOwnPropertyDescriptor(u, D).enumerable;
    })), g.push.apply(g, E);
  }
  return g;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var g = arguments[l] != null ? arguments[l] : {};
    l % 2 ? vn(Object(g), !0).forEach(function(E) {
      Gi(u, E, g[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g)) : vn(Object(g)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(g, E));
    });
  }
  return u;
}
function Gi(u, l, g) {
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
function xn(u) {
  return u && u.map((l, g) => /* @__PURE__ */ Le.createElement(l.tag, Gt({
    key: g
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Le.createElement(Qi, Xt({
    attr: Gt({}, u.attr)
  }, l), xn(u.child));
}
function Qi(u) {
  var l = (g) => {
    var {
      attr: E,
      size: D,
      title: F
    } = u, m = $i(u, Yi), I = D || g.size || "1em", P;
    return g.className && (P = g.className), u.className && (P = (P ? P + " " : "") + u.className), /* @__PURE__ */ Le.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, g.attr, E, m, {
      className: P,
      style: Gt(Gt({
        color: u.color || g.color
      }, g.style), u.style),
      height: I,
      width: I,
      xmlns: "http://www.w3.org/2000/svg"
    }), F && /* @__PURE__ */ Le.createElement("title", null, F), u.children);
  };
  return hn !== void 0 ? /* @__PURE__ */ Le.createElement(hn.Consumer, null, (g) => l(g)) : l(bn);
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
  return typeof l == "number" ? "donut" : l.stage && l.value ? "funnel" : l.label && l.value ? "donut" : l.category && l.value ? "polararea" : l.name && l.value ? "treemap" : l.x !== void 0 && l.y !== void 0 && l.value !== void 0 ? "heatmap" : Array.isArray(l.y) && l.y.length === 4 ? "candlestick" : Array.isArray(l.y) && l.y.length === 5 ? "boxplot" : Array.isArray(l.y) && l.y.length === 2 ? "rangebar" : l.x !== void 0 && l.y !== void 0 && l.r !== void 0 ? "bubble" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : l.x && !isNaN(Date.parse(l.x)) ? "line" : l.start !== void 0 && l.end !== void 0 ? "rangebar" : (l.x !== void 0 && l.y !== void 0, "bar");
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
}, mn = (u, l) => {
  const g = to[u] || "xy";
  let E = [], D = [], F = [];
  if (!l || l.length === 0)
    return { series: E, labels: D, categories: F };
  const m = l[0], I = Object.keys(m).filter(
    (C) => typeof m[C] == "number"
  ), P = Object.keys(m).find((C) => typeof m[C] == "string") || "x";
  switch (g) {
    case "circular":
      E = l.map((p) => p.value ?? p.y ?? p), D = l.map(
        (p) => p.label ?? p.category ?? p.name ?? p.x
      );
      break;
    case "category":
      F = l.map(
        (p) => p.x ?? p.category ?? p.stage ?? p[P]
      ), I.length > 1 ? E = I.map((p) => ({
        name: p,
        data: l.map((M) => M[p])
      })) : E = [{
        name: I[0] || "Series 1",
        data: l.map((p) => p.y ?? p.value)
      }];
      break;
    case "range":
      E = [{
        name: "Series 1",
        data: l.map((p) => {
          let M = [];
          return u === "boxplot" ? M = p.y ?? [p.min, p.q1, p.median, p.q3, p.max] : u === "candlestick" ? M = p.y ?? [p.open, p.high, p.low, p.close] : M = p.y ?? [p.start, p.end], {
            x: p.x ?? p.label ?? p.category ?? p.date,
            y: M
          };
        })
      }];
      break;
    case "heatmap":
      const C = {};
      l.forEach((p) => {
        const M = p.group ?? "Series 1";
        C[M] || (C[M] = []), C[M].push({
          x: p.x ?? p.category,
          y: p.value ?? p.y
        });
      }), E = Object.keys(C).map((p) => ({
        name: p,
        data: C[p]
      }));
      break;
    case "treemap":
      E = [{
        data: l.map((p) => ({
          x: p.name,
          y: p.value
        }))
      }];
      break;
    default:
      u === "bubble" ? E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: p.x,
          y: p.y,
          z: p.r ?? p.z
        }))
      }] : I.length > 1 ? E = I.map((p) => ({
        name: p,
        data: l.map((M) => ({
          x: M.x ?? M[P],
          y: M[p]
        }))
      })) : E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: p.x,
          y: p.y
        }))
      }];
  }
  return { series: E, labels: D, categories: F };
}, oo = Li(
  ({ data: u, type: l, options: g = {}, height: E = 350, title: D }, F) => {
    const m = $t(null), I = $t(null), P = $t(null), C = $t(null), [p, M] = Ni(!1), K = ln(
      () => Bi.renderToString(
        /* @__PURE__ */ yt(Ji, { size: 14, style: { color: "#9ca3af", marginTop: "5px", marginRight: "4px" } })
      ),
      []
    ), J = ln(() => l || (Array.isArray(u[0]) ? u.map((A) => gn(A)) : gn(u)), [u, l]), we = (A) => A === "column" ? "bar" : A === "rangebar" ? "rangeBar" : A === "funnel" ? "bar" : A, ge = (A) => {
      var N, V, Se, X;
      const ee = Array.isArray(J) ? J[0] : J, Y = String(ee).toLowerCase();
      let L = [], oe = [], pe = [];
      if (Array.isArray(u[0]))
        L = u.map((Ee, Pe) => {
          var Ge, q, W, Me;
          const Ne = Array.isArray(l) ? l[Pe] : Array.isArray(J) ? J[Pe] : J, Ae = mn(Ne, Ee);
          return pe.length === 0 && (pe = Ae.categories || []), oe.length === 0 && (oe = Ae.labels || []), {
            name: ((q = (Ge = Ae.series) == null ? void 0 : Ge[0]) == null ? void 0 : q.name) || `Series ${Pe + 1}`,
            type: we(Ne),
            data: ((Me = (W = Ae.series) == null ? void 0 : W[0]) == null ? void 0 : Me.data) || []
          };
        });
      else {
        const De = mn(Y, u);
        L = De.series || [], oe = De.labels || [], pe = De.categories || [];
      }
      const Xe = ["pie", "donut", "radialbar", "polararea"].includes(Y), ke = Y === "radar";
      return {
        ...g,
        chart: {
          id: A ? "vizly-modal-chart" : "vizly-main-chart",
          type: we(Y),
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
                  icon: K,
                  index: 6,
                  title: "Expand",
                  class: "custom-icon",
                  click: () => M(!0)
                }
              ]
            }
          },
          animations: { enabled: !A },
          ...g.chart
        },
        series: L.length ? L : [{ data: [] }],
        labels: Xe || ke ? oe.length ? oe : pe : void 0,
        xaxis: {
          ...g.xaxis,
          type: pe.length ? "category" : ((N = g.xaxis) == null ? void 0 : N.type) || "numeric",
          categories: pe.length ? pe : void 0
        },
        plotOptions: {
          ...g.plotOptions,
          bar: {
            horizontal: Y === "funnel",
            isFunnel: Y === "funnel",
            ...(V = g.plotOptions) == null ? void 0 : V.bar
          }
        },
        title: {
          text: typeof D == "string" ? D : (D == null ? void 0 : D.text) || ((Se = g.title) == null ? void 0 : Se.text),
          align: typeof D == "object" ? D.align : ((X = g.title) == null ? void 0 : X.align) || "left"
        },
        tooltip: { theme: "dark", ...g.tooltip }
      };
    };
    return un(() => {
      if (!m.current)
        return;
      const A = ge(!1);
      return P.current && P.current.destroy(), P.current = new cn(m.current, A), P.current.render().catch((ee) => {
        console.error("ApexCharts render error:", ee);
      }), () => {
        var ee;
        (ee = P.current) == null || ee.destroy(), P.current = null;
      };
    }, [u, J, g, D]), un(() => {
      if (p && I.current) {
        const A = ge(!0), ee = setTimeout(() => {
          var Y;
          (Y = C.current) == null || Y.destroy(), C.current = new cn(I.current, A), C.current.render();
        }, 120);
        return () => {
          var Y;
          clearTimeout(ee), (Y = C.current) == null || Y.destroy(), C.current = null;
        };
      }
    }, [p]), Hi(F, () => ({
      zoomIn: () => {
        var A;
        return (A = P.current) == null ? void 0 : A.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var A;
        return (A = P.current) == null ? void 0 : A.zoomX(void 0, void 0);
      },
      reset: () => {
        var A;
        return (A = P.current) == null ? void 0 : A.resetSeries();
      },
      toggleFullscreen: () => M(!p)
    })), /* @__PURE__ */ sn("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ yt("div", { ref: m, style: { height: "100%", width: "100%" } }),
      p && /* @__PURE__ */ yt(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          },
          children: /* @__PURE__ */ sn(
            "div",
            {
              style: {
                width: "90%",
                height: "80%",
                background: "#fff",
                borderRadius: "12px",
                padding: "40px",
                position: "relative"
              },
              children: [
                /* @__PURE__ */ yt(
                  "button",
                  {
                    onClick: () => M(!1),
                    style: { position: "absolute", top: 10, right: 10, cursor: "pointer" },
                    children: /* @__PURE__ */ yt(eo, { size: 20 })
                  }
                ),
                /* @__PURE__ */ yt("div", { ref: I, style: { height: "100%", width: "100%" } })
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
