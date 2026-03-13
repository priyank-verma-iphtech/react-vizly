import { jsx as yt, jsxs as sn } from "react/jsx-runtime";
import Fe, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as ln, useEffect as un, useImperativeHandle as Ui } from "react";
import cn from "apexcharts";
function Hi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var pr = { exports: {} }, Ze = {};
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
  function E(D) {
    if (D == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(D);
  }
  function L() {
    try {
      if (!Object.assign)
        return !1;
      var D = new String("abc");
      if (D[5] = "de", Object.getOwnPropertyNames(D)[0] === "5")
        return !1;
      for (var m = {}, C = 0; C < 10; C++)
        m["_" + String.fromCharCode(C)] = C;
      var F = Object.getOwnPropertyNames(m).map(function(f) {
        return m[f];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var I = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        I[f] = f;
      }), Object.keys(Object.assign({}, I)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return dr = L() ? Object.assign : function(D, m) {
    for (var C, F = E(D), I, f = 1; f < arguments.length; f++) {
      C = Object(arguments[f]);
      for (var P in C)
        l.call(C, P) && (F[P] = C[P]);
      if (u) {
        I = u(C);
        for (var $ = 0; $ < I.length; $++)
          v.call(C, I[$]) && (F[I[$]] = C[I[$]]);
      }
    }
    return F;
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
    return Ze;
  dn = 1;
  var u = mn(), l = Fe;
  function v(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, L = 60107, D = 60108, m = 60114, C = 60109, F = 60110, I = 60112, f = 60113, P = 60120, $ = 60115, xe = 60116, fe = 60121, he = 60117, we = 60119, M = 60129, N = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var A = Symbol.for;
    E = A("react.portal"), L = A("react.fragment"), D = A("react.strict_mode"), m = A("react.profiler"), C = A("react.provider"), F = A("react.context"), I = A("react.forward_ref"), f = A("react.suspense"), P = A("react.suspense_list"), $ = A("react.memo"), xe = A("react.lazy"), fe = A("react.block"), he = A("react.fundamental"), we = A("react.scope"), M = A("react.debug_trace_mode"), N = A("react.legacy_hidden");
  }
  function ne(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case L:
        return "Fragment";
      case E:
        return "Portal";
      case m:
        return "Profiler";
      case D:
        return "StrictMode";
      case f:
        return "Suspense";
      case P:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case F:
          return (r.displayName || "Context") + ".Consumer";
        case C:
          return (r._context.displayName || "Context") + ".Provider";
        case I:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case $:
          return ne(r.type);
        case fe:
          return ne(r._render);
        case xe:
          a = r._payload, r = r._init;
          try {
            return ne(r(a));
          } catch {
          }
      }
    return null;
  }
  var ke = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = {};
  function ve(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function U(r, a, i, d) {
    if (d && (d = r.contextType, typeof d == "object" && d !== null))
      return ve(d, i), d[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = Qe;
    return a;
  }
  for (var V = new Uint16Array(16), Se = 0; 15 > Se; Se++)
    V[Se] = Se + 1;
  V[15] = 0;
  var Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ee = Object.prototype.hasOwnProperty, Oe = {}, je = {};
  function Je(r) {
    return Ee.call(je, r) ? !0 : Ee.call(Oe, r) ? !1 : Z.test(r) ? je[r] = !0 : (Oe[r] = !0, !1);
  }
  function et(r, a, i, d) {
    if (i !== null && i.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d ? !1 : i !== null ? !i.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function At(r, a, i, d) {
    if (a === null || typeof a > "u" || et(r, a, i, d))
      return !0;
    if (d)
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
  function K(r, a, i, d, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = d, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
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
  var tt = /[\-:]([a-z])/g;
  function rt(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      tt,
      rt
    );
    B[a] = new K(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(tt, rt);
    B[a] = new K(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(tt, rt);
    B[a] = new K(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    B[r] = new K(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    B[r] = new K(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Zt = /["'&<>]/;
  function Pe(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var a = Zt.exec(r);
    if (a) {
      var i = "", d, k = 0;
      for (d = a.index; d < r.length; d++) {
        switch (r.charCodeAt(d)) {
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
        k !== d && (i += r.substring(k, d)), k = d + 1, i += a;
      }
      r = k !== d ? i + r.substring(k, d) : i;
    }
    return r;
  }
  function mt(r, a) {
    var i = B.hasOwnProperty(r) ? B[r] : null, d;
    return (d = r !== "style") && (d = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), d || At(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, d = i.type, d === 3 || d === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Pe(a) + '"'))) : Je(r) ? r + '="' + (Pe(a) + '"') : "";
  }
  function bt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var nt = typeof Object.is == "function" ? Object.is : bt, ie = null, Ae = null, _ = null, ze = !1, Be = !1, Re = null, Me = 0;
  function Ie() {
    if (ie === null)
      throw Error(v(321));
    return ie;
  }
  function xt() {
    if (0 < Me)
      throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Le() {
    return _ === null ? Ae === null ? (ze = !1, Ae = _ = xt()) : (ze = !0, _ = Ae) : _.next === null ? (ze = !1, _ = _.next = xt()) : (ze = !0, _ = _.next), _;
  }
  function Mt(r, a, i, d) {
    for (; Be; )
      Be = !1, Me += 1, _ = null, i = r(a, d);
    return it(), i;
  }
  function it() {
    ie = null, Be = !1, Ae = null, Me = 0, _ = Re = null;
  }
  function ot(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function wt(r, a, i) {
    if (ie = Ie(), _ = Le(), ze) {
      var d = _.queue;
      if (a = d.dispatch, Re !== null && (i = Re.get(d), i !== void 0)) {
        Re.delete(d), d = _.memoizedState;
        do
          d = r(d, i.action), i = i.next;
        while (i !== null);
        return _.memoizedState = d, [d, a];
      }
      return [_.memoizedState, a];
    }
    return r = r === ot ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, _.memoizedState = r, r = _.queue = { last: null, dispatch: null }, r = r.dispatch = Ye.bind(null, ie, r), [_.memoizedState, r];
  }
  function kt(r, a) {
    if (ie = Ie(), _ = Le(), a = a === void 0 ? null : a, _ !== null) {
      var i = _.memoizedState;
      if (i !== null && a !== null) {
        var d = i[1];
        e:
          if (d === null)
            d = !1;
          else {
            for (var k = 0; k < d.length && k < a.length; k++)
              if (!nt(a[k], d[k])) {
                d = !1;
                break e;
              }
            d = !0;
          }
        if (d)
          return i[0];
      }
    }
    return r = r(), _.memoizedState = [r, a], r;
  }
  function Ye(r, a, i) {
    if (!(25 > Me))
      throw Error(v(301));
    if (r === ie)
      if (Be = !0, r = { action: i, next: null }, Re === null && (Re = /* @__PURE__ */ new Map()), i = Re.get(a), i === void 0)
        Re.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function St() {
  }
  var q = null, at = { readContext: function(r) {
    var a = q.threadID;
    return ve(r, a), r[a];
  }, useContext: function(r) {
    Ie();
    var a = q.threadID;
    return ve(r, a), r[a];
  }, useMemo: kt, useReducer: wt, useRef: function(r) {
    ie = Ie(), _ = Le();
    var a = _.memoizedState;
    return a === null ? (r = { current: r }, _.memoizedState = r) : a;
  }, useState: function(r) {
    return wt(ot, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return kt(function() {
      return r;
    }, a);
  }, useImperativeHandle: St, useEffect: St, useDebugValue: St, useDeferredValue: function(r) {
    return Ie(), r;
  }, useTransition: function() {
    return Ie(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (q.identifierPrefix || "") + "R:" + (q.uniqueID++).toString(36);
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
  var Et = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, st = u({ menuitem: !0 }, Et), ue = {
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
  }, Ot = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ue).forEach(function(r) {
    Ot.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), ue[a] = ue[r];
    });
  });
  var Ne = /([A-Z])/g, lt = /^ms-/, ge = l.Children.toArray, ut = ke.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, Rt = {};
  function jt(r) {
    if (r == null)
      return r;
    var a = "";
    return l.Children.forEach(r, function(i) {
      i != null && (a += i);
    }), a;
  }
  var zt = Object.prototype.hasOwnProperty, Lt = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
  function It(r, a) {
    if (r === void 0)
      throw Error(v(152, ne(a) || "Component"));
  }
  function Jt(r, a, i) {
    function d(b, S) {
      var y = S.prototype && S.prototype.isReactComponent, J = U(S, a, i, y), X = [], ee = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (X === null)
          return null;
      }, enqueueReplaceState: function(Ct, j) {
        ee = !0, X = [j];
      }, enqueueSetState: function(Ct, j) {
        if (X === null)
          return null;
        X.push(j);
      } };
      if (y) {
        if (y = new S(b.props, J, H), typeof S.getDerivedStateFromProps == "function") {
          var T = S.getDerivedStateFromProps.call(null, b.props, y.state);
          T != null && (y.state = u({}, y.state, T));
        }
      } else if (ie = {}, y = S(
        b.props,
        J,
        H
      ), y = Mt(S, b.props, y, J), y == null || y.render == null) {
        r = y, It(r, S);
        return;
      }
      if (y.props = b.props, y.context = J, y.updater = H, H = y.state, H === void 0 && (y.state = H = null), typeof y.UNSAFE_componentWillMount == "function" || typeof y.componentWillMount == "function")
        if (typeof y.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.UNSAFE_componentWillMount(), X.length) {
          H = X;
          var G = ee;
          if (X = null, ee = !1, G && H.length === 1)
            y.state = H[0];
          else {
            T = G ? H[0] : y.state;
            var Ce = !0;
            for (G = G ? 1 : 0; G < H.length; G++) {
              var oe = H[G];
              oe = typeof oe == "function" ? oe.call(y, T, b.props, J) : oe, oe != null && (Ce ? (Ce = !1, T = u({}, T, oe)) : u(T, oe));
            }
            y.state = T;
          }
        } else
          X = null;
      if (r = y.render(), It(r, S), typeof y.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var ae = y.getChildContext();
        for (var ce in ae)
          if (!(ce in b))
            throw Error(v(108, ne(S) || "Unknown", ce));
      }
      ae && (a = u({}, a, ae));
    }
    for (; l.isValidElement(r); ) {
      var k = r, x = k.type;
      if (typeof x != "function")
        break;
      d(k, x);
    }
    return { child: r, context: a };
  }
  var ct = function() {
    function r(i, d, k) {
      l.isValidElement(i) ? i.type !== L ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : ge(i)) : i = ge(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Qe, footer: "" };
      var x = V[0];
      if (x === 0) {
        var b = V;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(v(304));
        var y = new Uint16Array(S);
        for (y.set(b), V = y, V[0] = x + 1, b = x; b < S - 1; b++)
          V[b] = b + 1;
        V[S - 1] = 0;
      } else
        V[0] = V[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = d, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        V[i] = V[0], V[0] = i;
      }
    }, a.pushProvider = function(i) {
      var d = ++this.contextIndex, k = i.type._context, x = this.threadID;
      ve(k, x);
      var b = k[x];
      this.contextStack[d] = k, this.contextValueStack[d] = b, k[x] = i.props.value;
    }, a.popProvider = function() {
      var i = this.contextIndex, d = this.contextStack[i], k = this.contextValueStack[i];
      this.contextStack[i] = null, this.contextValueStack[i] = null, this.contextIndex--, d[this.threadID] = k;
    }, a.clearProviders = function() {
      for (var i = this.contextIndex; 0 <= i; i--)
        this.contextStack[i][this.threadID] = this.contextValueStack[i];
    }, a.read = function(i) {
      if (this.exhausted)
        return null;
      var d = q;
      q = this;
      var k = ut.current;
      ut.current = at;
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
            var J = y.footer;
            if (J !== "" && (this.previousWasTextNode = !1), this.stack.pop(), y.type === "select")
              this.currentSelectValue = null;
            else if (y.type != null && y.type.type != null && y.type.type.$$typeof === C)
              this.popProvider(y.type);
            else if (y.type === f) {
              this.suspenseDepth--;
              var X = x.pop();
              if (b) {
                b = !1;
                var ee = y.fallbackFrame;
                if (!ee)
                  throw Error(v(303));
                this.stack.push(ee), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += X;
            }
            x[this.suspenseDepth] += J;
          } else {
            var H = y.children[y.childIndex++], T = "";
            try {
              T += this.render(H, y.context, y.domNamespace);
            } catch (G) {
              throw G != null && typeof G.then == "function" ? Error(v(294)) : G;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += T;
          }
        }
        return x[0];
      } finally {
        ut.current = k, q = d, it();
      }
    }, a.render = function(i, d, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Pe(k) : this.previousWasTextNode ? "<!-- -->" + Pe(k) : (this.previousWasTextNode = !0, Pe(k));
      if (d = Jt(i, d, this.threadID), i = d.child, d = d.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? v(257) : v(258, k.toString()));
        return i = ge(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: d, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, d, k);
      switch (x) {
        case N:
        case M:
        case D:
        case m:
        case P:
        case L:
          return i = ge(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: d,
            footer: ""
          }), "";
        case f:
          throw Error(v(294));
        case we:
          throw Error(v(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case I:
            ie = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = ge(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: d, footer: "" }), "";
          case $:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: d, footer: "" }), "";
          case C:
            return x = ge(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: d, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case F:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ve(x, S), x = ge(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: d, footer: "" }), "";
          case he:
            throw Error(v(338));
          case xe:
            return x = i.type, b = x._init, x = b(x._payload), i = [l.createElement(x, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: d,
              footer: ""
            }), "";
        }
      throw Error(v(130, x == null ? x : typeof x, ""));
    }, a.renderDOM = function(i, d, k) {
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
          var y = b.children;
          if (y != null) {
            if (S != null)
              throw Error(v(92));
            if (Array.isArray(y)) {
              if (!(1 >= y.length))
                throw Error(v(93));
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
        var J = jt(b.children);
        if (y != null) {
          var X = b.value != null ? b.value + "" : J;
          if (S = !1, Array.isArray(y)) {
            for (var ee = 0; ee < y.length; ee++)
              if ("" + y[ee] === X) {
                S = !0;
                break;
              }
          } else
            S = "" + y === X;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: J }
          );
        }
      }
      if (S = b) {
        if (st[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, y = this.makeStaticMarkup, J = this.stack.length === 1, X = "<" + i.type;
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
          var H = S[j];
          if (H != null) {
            if (j === "style") {
              var T = void 0, G = "", Ce = "";
              for (T in H)
                if (H.hasOwnProperty(T)) {
                  var oe = T.indexOf("--") === 0, ae = H[T];
                  if (ae != null) {
                    if (oe)
                      var ce = T;
                    else if (ce = T, Rt.hasOwnProperty(ce))
                      ce = Rt[ce];
                    else {
                      var Ct = ce.replace(Ne, "-$1").toLowerCase().replace(lt, "-ms-");
                      ce = Rt[ce] = Ct;
                    }
                    G += Ce + ce + ":", Ce = T, oe = ae == null || typeof ae == "boolean" || ae === "" ? "" : oe || typeof ae != "number" || ae === 0 || ue.hasOwnProperty(Ce) && ue[Ce] ? ("" + ae).trim() : ae + "px", G += oe, Ce = ";";
                  }
                }
              H = G || null;
            }
            T = null, ee ? Lt.hasOwnProperty(j) || (T = j, T = Je(T) && H != null ? T + '="' + (Pe(H) + '"') : "") : T = mt(j, H), T && (X += " " + T);
          }
        }
      y || J && (X += ' data-reactroot=""');
      var j = X;
      S = "", Et.hasOwnProperty(x) ? j += "/>" : (j += ">", S = "</" + i.type + ">");
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
      return y != null ? (b = [], _t.hasOwnProperty(x) && y.charAt(0) === `
` && (j += `
`), j += y) : b = ge(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: d, footer: S }), this.previousWasTextNode = !1, j;
    }, r;
  }();
  return Ze.renderToNodeStream = function() {
    throw Error(v(207));
  }, Ze.renderToStaticMarkup = function(r, a) {
    r = new ct(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ze.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Ze.renderToString = function(r, a) {
    r = new ct(r, !1, a);
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
var pn;
function Vi() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Fe, l = mn();
    function v(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", L = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        C("warn", e, n);
      }
    }
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        C("error", e, n);
      }
    }
    function C(e, t, n) {
      {
        var o = L.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var F = 60106, I = 60107, f = 60108, P = 60114, $ = 60109, xe = 60110, fe = 60112, he = 60113, we = 60120, M = 60115, N = 60116, A = 60121, ne = 60117, ke = 60119, Qe = 60129, ve = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var U = Symbol.for;
      U("react.element"), F = U("react.portal"), I = U("react.fragment"), f = U("react.strict_mode"), P = U("react.profiler"), $ = U("react.provider"), xe = U("react.context"), fe = U("react.forward_ref"), he = U("react.suspense"), we = U("react.suspense_list"), M = U("react.memo"), N = U("react.lazy"), A = U("react.block"), U("react.server.block"), ne = U("react.fundamental"), ke = U("react.scope"), U("react.opaque.id"), Qe = U("react.debug_trace_mode"), U("react.offscreen"), ve = U("react.legacy_hidden");
    }
    function V(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Se(e) {
      return e.displayName || "Context";
    }
    function Z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case I:
          return "Fragment";
        case F:
          return "Portal";
        case P:
          return "Profiler";
        case f:
          return "StrictMode";
        case he:
          return "Suspense";
        case we:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case xe:
            var t = e;
            return Se(t) + ".Consumer";
          case $:
            var n = e;
            return Se(n._context) + ".Provider";
          case fe:
            return V(e, e.render, "ForwardRef");
          case M:
            return Z(e.type);
          case A:
            return Z(e._render);
          case N: {
            var o = e, s = o._payload, h = o._init;
            try {
              return Z(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ee = !1, Oe = 0, je, Je, et, At, K, B, tt;
    function rt() {
    }
    rt.__reactDisabledLog = !0;
    function Zt() {
      {
        if (Oe === 0) {
          je = console.log, Je = console.info, et = console.warn, At = console.error, K = console.group, B = console.groupCollapsed, tt = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: rt,
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
    function Pe() {
      {
        if (Oe--, Oe === 0) {
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
              value: Je
            }),
            warn: l({}, e, {
              value: et
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
              value: tt
            })
          });
        }
        Oe < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = L.ReactCurrentDispatcher, bt;
    function nt(e, t, n) {
      {
        if (bt === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            bt = o && o[1] || "";
          }
        return `
` + bt + e;
      }
    }
    var ie = !1, Ae;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new _();
    }
    function ze(e, t) {
      if (!e || ie)
        return "";
      {
        var n = Ae.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ie = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = mt.current, mt.current = null, Zt();
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
`), p = o.stack.split(`
`), O = g.length - 1, R = p.length - 1; O >= 1 && R >= 0 && g[O] !== p[R]; )
            R--;
          for (; O >= 1 && R >= 0; O--, R--)
            if (g[O] !== p[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || g[O] !== p[R]) {
                    var Y = `
` + g[O].replace(" at new ", " at ");
                    return typeof e == "function" && Ae.set(e, Y), Y;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, mt.current = h, Pe(), Error.prepareStackTrace = s;
      }
      var Q = e ? e.displayName || e.name : "", w = Q ? nt(Q) : "";
      return typeof e == "function" && Ae.set(e, w), w;
    }
    function Be(e, t, n) {
      return ze(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Me(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ze(e, Re(e));
      if (typeof e == "string")
        return nt(e);
      switch (e) {
        case he:
          return nt("Suspense");
        case we:
          return nt("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case fe:
            return Be(e.render);
          case M:
            return Me(e.type, t, n);
          case A:
            return Be(e._render);
          case N: {
            var o = e, s = o._payload, h = o._init;
            try {
              return Me(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = {}, xt = L.ReactDebugCurrentFrame;
    function Le(e) {
      if (e) {
        var t = e._owner, n = Me(e.type, e._source, t ? t.type : null);
        xt.setExtraStackFrame(n);
      } else
        xt.setExtraStackFrame(null);
    }
    function Mt(e, t, n, o, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
            var g = void 0;
            try {
              if (typeof e[c] != "function") {
                var p = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              g = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              g = O;
            }
            g && !(g instanceof Error) && (Le(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof g), Le(null)), g instanceof Error && !(g.message in Ie) && (Ie[g.message] = !0, Le(s), m("Failed %s type: %s", n, g.message), Le(null));
          }
      }
    }
    var it;
    it = /* @__PURE__ */ new Set();
    var ot = {};
    Object.freeze(ot);
    function wt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return ot;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function kt(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function Ye(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function St(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === xe && s._context === void 0
          );
          if (!h && !it.has(e)) {
            it.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === $ ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Z(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ye(s, n), s[n];
        {
          var g = wt(e, t);
          return e.contextTypes && kt(e.contextTypes, g, "context"), g;
        }
      } else {
        var p = wt(e, t);
        return e.contextTypes && kt(e.contextTypes, p, "context"), p;
      }
    }
    for (var q = new Uint16Array(16), at = 0; at < 15; at++)
      q[at] = at + 1;
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
    function Et(e) {
      q[e] = q[0], q[0] = e;
    }
    var st = 0, ue = 1, Ot = 2, Ne = 3, lt = 4, ge = 5, ut = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Rt = new RegExp("^[" + _t + "][" + $e + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function It(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : Rt.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === st : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ct(e, t, n, o) {
      if (n !== null && n.type === st)
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
      if (t === null || typeof t > "u" || ct(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case Ne:
            return !t;
          case lt:
            return t === !1;
          case ge:
            return isNaN(t);
          case ut:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return d.hasOwnProperty(e) ? d[e] : null;
    }
    function i(e, t, n, o, s, h, c) {
      this.acceptsBooleans = t === Ot || t === Ne || t === lt, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
    }
    var d = {}, k = [
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
      d[e] = new i(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      d[t] = new i(
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
      d[e] = new i(
        e,
        Ot,
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
      d[e] = new i(
        e,
        Ot,
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
      d[e] = new i(
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
      d[e] = new i(
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
      d[e] = new i(
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
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      d[e] = new i(
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
    }), ["rowSpan", "start"].forEach(function(e) {
      d[e] = new i(
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
      d[t] = new i(
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
      d[t] = new i(
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
      d[t] = new i(
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
      d[e] = new i(
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
    d[S] = new i(
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
      d[e] = new i(
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
    var y = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function X(e) {
      !J && y.test(e) && (J = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ee = /["'&<>]/;
    function H(e) {
      var t = "" + e, n = ee.exec(t);
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
    function G(e) {
      return '"' + T(e) + '"';
    }
    function Ce() {
      return Ft + '=""';
    }
    function oe(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === Ne || s === lt && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, X(t)), o + "=" + G(t));
      } else if (It(e))
        return e + "=" + G(t);
      return "";
    }
    function ae(e, t) {
      return !It(e) || t == null ? "" : e + "=" + G(t);
    }
    function ce(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ct = typeof Object.is == "function" ? Object.is : ce, j = null, Nt = null, z = null, Tt = !1, Ut = !1, Ue = null, Ht = 0, kn = 25, Te = !1, ft;
    function Xe() {
      if (j === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Te && m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), j;
    }
    function Sn(e, t) {
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ft), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ft, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ct(e[n], t[n]))
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
      return z === null ? Nt === null ? (Tt = !1, Nt = z = hr()) : (Tt = !0, z = Nt) : z.next === null ? (Tt = !1, z = z.next = hr()) : (Tt = !0, z = z.next), z;
    }
    function vr(e) {
      j = e, Te = !1;
    }
    function gr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Ht += 1, z = null, n = e(t, o);
      return yr(), n;
    }
    function yr() {
      Te = !1, j = null, Ut = !1, Nt = null, Ht = 0, Ue = null, z = null;
    }
    function En(e, t) {
      var n = dt.threadID;
      return Ye(e, n), Te && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function On(e, t) {
      ft = "useContext", Xe();
      var n = dt.threadID;
      return Ye(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Rn(e) {
      return ft = "useState", mr(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function mr(e, t, n) {
      if (e !== tr && (ft = "useReducer"), j = Xe(), z = er(), Tt) {
        var o = z.queue, s = o.dispatch;
        if (Ue !== null) {
          var h = Ue.get(o);
          if (h !== void 0) {
            Ue.delete(o);
            var c = z.memoizedState, g = h;
            do {
              var p = g.action;
              Te = !0, c = e(c, p), Te = !1, g = g.next;
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
        }, Y = R.dispatch = Tn.bind(null, j, R);
        return [z.memoizedState, Y];
      }
    }
    function br(e, t) {
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
      Te = !0;
      var h = e();
      return Te = !1, z.memoizedState = [h, n], h;
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
      ft = "useLayoutEffect", m("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
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
      return (dt.identifierPrefix || "") + "R:" + (dt.uniqueID++).toString(36);
    }
    function rr() {
    }
    var dt = null;
    function xr(e) {
      dt = e;
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
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    var Dt = {
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
    Object.keys(Dt).forEach(function(e) {
      Wn.forEach(function(t) {
        Dt[Hn(t, e)] = Dt[e];
      });
    });
    function Vn(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(Dt.hasOwnProperty(e) && Dt[e]) ? t + "px" : ("" + t).trim();
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
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Or = /;\s*$/, pt = {}, sr = {}, Rr = !1, Ir = !1, Zn = function(e) {
        return e.replace(Gn, function(t, n) {
          return n.toUpperCase();
        });
      }, Kn = function(e) {
        pt.hasOwnProperty(e) && pt[e] || (pt[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zn(e.replace(Xn, "ms-"))
        ));
      }, Qn = function(e) {
        pt.hasOwnProperty(e) && pt[e] || (pt[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
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
    }, ht = {}, ni = new RegExp("^(aria)-[" + $e + "]*$"), ii = new RegExp("^(aria)[A-Z][" + $e + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(ht, t) && ht[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Cr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ht[t] = !0, !0;
          if (t !== o)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ht[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), h = Cr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return ht[t] = !0, !1;
          if (t !== h)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), ht[t] = !0, !0;
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
      var te = {}, ci = Object.prototype.hasOwnProperty, Ar = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + $e + "]*$"), pi = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      Pr = function(e, t, n, o) {
        if (ci.call(te, t) && te[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), te[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, g), te[t] = !0, !0;
          if (Ar.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), te[t] = !0, !0;
        } else if (Ar.test(t))
          return fi.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), te[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), te[t] = !0, !0;
        if (s === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), te[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), te[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), te[t] = !0, !0;
        var p = a(t), O = p !== null && p.type === st;
        if (Dr.hasOwnProperty(s)) {
          var R = Dr[s];
          if (R !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, R), te[t] = !0, !0;
        } else if (!O && t !== s)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), te[t] = !0, !0;
        return typeof n == "boolean" && ct(t, n, p, !1) ? (n ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), te[t] = !0, !0) : O ? !0 : ct(t, n, p, !1) ? (te[t] = !0, !1) : ((n === "false" || n === "true") && p !== null && p.type === Ne && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), te[t] = !0), !0);
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
        o.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function vi(e, t, n) {
      ar(e, t) || hi(e, t, n);
    }
    var He = u.Children.toArray, _e = [], lr = L.ReactCurrentDispatcher, Vt, ur = null, Mr = function() {
      return "";
    }, _r = function(e) {
      return "";
    }, Fr = function(e, t) {
    }, jr = function(e) {
    }, zr = function(e) {
    }, Lr = function() {
    }, Nr = !1;
    Vt = L.ReactDebugCurrentFrame, Fr = function(e, t) {
      li(e, t), ui(e, t), vi(e, t, null);
    }, _r = function(e) {
      return Me(e.type, e._source, null);
    }, jr = function(e) {
      _e.push(e), _e.length === 1 && (ur = Vt.getCurrentStack, Vt.getCurrentStack = Mr);
    }, zr = function(e) {
      var t = _e[_e.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Lr = function() {
      _e.pop(), _e.length === 0 && (Vt.getCurrentStack = ur, ur = null);
    }, Mr = function() {
      if (_e.length === 0)
        return "";
      for (var e = _e[_e.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += _r(s[h]);
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
          var s = o.indexOf("--") === 0, h = e[o];
          s || ri(o, h), h != null && (t += n + (s ? o : bi(o)) + ":", t += Vn(o, h, s), n = ";");
        }
      return t || null;
    }
    function Jr(e, t) {
      {
        var n = e.constructor, o = n && Z(n) || "ReactClass", s = o + "." + t;
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
      var c = "<" + e, g = ar(t, n);
      for (var p in n)
        if (Oi.call(n, p)) {
          var O = n[p];
          if (O != null) {
            p === Ri && (O = xi(O));
            var R = null;
            g ? Ii.hasOwnProperty(p) || (R = ae(p, O)) : R = oe(p, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Ce()), c;
    }
    function en(e, t) {
      if (e === void 0)
        throw Error((Z(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (zr(o), typeof s != "function")
          break;
        h(o, s);
      }
      function h(c, g) {
        var p = wi(g), O = St(g, t, n, p), R = [], Y = !1, Q = {
          isMounted: function(qe) {
            return !1;
          },
          enqueueForceUpdate: function(qe) {
            if (R === null)
              return Jr(qe, "forceUpdate"), null;
          },
          enqueueReplaceState: function(qe, gt) {
            Y = !0, R = [gt];
          },
          enqueueSetState: function(qe, gt) {
            if (R === null)
              return Jr(qe, "setState"), null;
            R.push(gt);
          }
        }, w;
        if (p) {
          if (w = new g(c.props, O, Q), typeof g.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var W = Z(g) || "Unknown";
              Zr[W] || (m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", W, w.state === null ? "null" : "undefined", W), Zr[W] = !0);
            }
            var re = g.getDerivedStateFromProps.call(null, c.props, w.state);
            if (re === void 0) {
              var se = Z(g) || "Unknown";
              Gr[se] || (m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", se), Gr[se] = !0);
            }
            re != null && (w.state = l({}, w.state, re));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var le = Z(g) || "Unknown";
            Yr[le] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", le, le), Yr[le] = !0);
          }
          var We = {};
          if (vr(We), w = g(c.props, O, Q), w = gr(g, c.props, w, O), w != null && w.render != null) {
            var de = Z(g) || "Unknown";
            $r[de] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", de, de, de), $r[de] = !0);
          }
          if (w == null || w.render == null) {
            e = w, en(e, g);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = Q;
        var ye = w.state;
        if (ye === void 0 && (w.state = ye = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Ve = Z(g) || "Unknown";
              Xr[Ve] || (D(
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
            var pe = R, me = Y;
            if (R = null, Y = !1, me && pe.length === 1)
              w.state = pe[0];
            else {
              for (var De = me ? pe[0] : w.state, qt = !0, vt = me ? 1 : 0; vt < pe.length; vt++) {
                var be = pe[vt], Pt = typeof be == "function" ? be.call(w, De, c.props, O) : be;
                Pt != null && (qt ? (qt = !1, De = l({}, De, Pt)) : l(De, Pt));
              }
              w.state = De;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), en(e, g);
        var Ge;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Ge = w.getChildContext();
              for (var Yt in Ge)
                if (!(Yt in Bt))
                  throw Error((Z(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", Z(g) || "Unknown");
          }
          Ge && (t = l({}, t, Ge));
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
          context: ot,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Et(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, h = o.type._context, c = this.threadID;
        Ye(h, c);
        var g = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = g, this.contextProviderStack[s] = o, h[c] = o.props.value;
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
        var s = dt;
        xr(this);
        var h = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], g = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Et(this.threadID);
              break;
            }
            var p = this.stack[this.stack.length - 1];
            if (g || p.childIndex >= p.children.length) {
              var O = p.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), p.type === "select")
                this.currentSelectValue = null;
              else if (p.type != null && p.type.type != null && p.type.type.$$typeof === $) {
                var R = p.type;
                this.popProvider(R);
              } else if (p.type === he) {
                this.suspenseDepth--;
                var Y = c.pop();
                if (g) {
                  g = !1;
                  var Q = p.fallbackFrame;
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
            var w = p.children[p.childIndex++], W = "";
            jr(this.stack), p.debugElementStack.length = 0;
            try {
              W += this.render(w, p.context, p.domNamespace);
            } catch (re) {
              if (re != null && typeof re.then == "function") {
                if (!Ee)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw re;
            } finally {
              Lr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += W;
          }
          return c[0];
        } finally {
          lr.current = h, xr(s), yr();
        }
      }, t.render = function(o, s, h) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? T(c) : this.previousWasTextNode ? "<!-- -->" + T(c) : (this.previousWasTextNode = !0, T(c));
        } else {
          var g, p = Ti(o, s, this.threadID);
          if (g = p.child, s = p.context, g === null || g === !1)
            return "";
          if (!u.isValidElement(g)) {
            if (g != null && g.$$typeof != null) {
              var O = g.$$typeof;
              throw Error(O === F ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = He(g), Y = {
              type: null,
              domNamespace: h,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return Y.debugElementStack = [], this.stack.push(Y), "";
          }
          var Q = g, w = Q.type;
          if (typeof w == "string")
            return this.renderDOM(Q, s, h);
          switch (w) {
            case ve:
            case Qe:
            case f:
            case P:
            case we:
            case I: {
              var W = He(g.props.children), re = {
                type: null,
                domNamespace: h,
                children: W,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return re.debugElementStack = [], this.stack.push(re), "";
            }
            case he:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case ke:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case fe: {
                var se = g, le, We = {};
                vr(We), le = w.render(se.props, se.ref), le = gr(w.render, se.props, le, se.ref), le = He(le);
                var de = {
                  type: null,
                  domNamespace: h,
                  children: le,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return de.debugElementStack = [], this.stack.push(de), "";
              }
              case M: {
                var ye = g, Ve = [u.createElement(w.type, l({
                  ref: ye.ref
                }, ye.props))], pe = {
                  type: null,
                  domNamespace: h,
                  children: Ve,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pe.debugElementStack = [], this.stack.push(pe), "";
              }
              case $: {
                var me = g, De = me.props, qt = He(De.children), vt = {
                  type: me,
                  domNamespace: h,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return vt.debugElementStack = [], this.pushProvider(me), this.stack.push(vt), "";
              }
              case xe: {
                var be = g.type;
                be._context === void 0 ? be !== be.Consumer && (Nr || (Nr = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : be = be._context;
                var Pt = g.props, Ge = this.threadID;
                Ye(be, Ge);
                var Bt = be[Ge], Yt = He(Pt.children(Bt)), qe = {
                  type: g,
                  domNamespace: h,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return qe.debugElementStack = [], this.stack.push(qe), "";
              }
              case ne:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case N: {
                var gt = g, rn = g.type, _i = rn._payload, Fi = rn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: gt.ref
                }, gt.props))], nn = {
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
            var an = on ? Z(on) : null;
            an && (fr += `

Check the render method of \`` + an + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, h) {
        var c = o.type.toLowerCase(), g = h;
        h === ir.html && (g = kr(c)), g === ir.html && c !== o.type && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
        var p = o.props;
        if (c === "input")
          or("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !Hr && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Hr = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Ur && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Ur = !0), p = l({
            type: void 0
          }, p, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: p.value != null ? p.value : p.defaultValue,
            checked: p.checked != null ? p.checked : p.defaultChecked
          });
        else if (c === "textarea") {
          or("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !Vr && (m("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          var O = p.value;
          if (O == null) {
            var R = p.defaultValue, Y = p.children;
            if (Y != null) {
              if (m("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
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
          p = l({}, p, {
            value: void 0,
            children: "" + O
          });
        } else if (c === "select") {
          {
            or("select", p);
            for (var Q = 0; Q < Kr.length; Q++) {
              var w = Kr[Q];
              if (p[w] != null) {
                var W = Array.isArray(p[w]);
                p.multiple && !W ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !p.multiple && W && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            p.value !== void 0 && p.defaultValue !== void 0 && !Wr && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wr = !0);
          }
          this.currentSelectValue = p.value != null ? p.value : p.defaultValue, p = l({}, p, {
            value: void 0
          });
        } else if (c === "option") {
          var re = null, se = this.currentSelectValue, le = Ei(p.children);
          if (se != null) {
            var We;
            if (p.value != null ? We = p.value + "" : We = le, re = !1, Array.isArray(se)) {
              for (var de = 0; de < se.length; de++)
                if ("" + se[de] === We) {
                  re = !0;
                  break;
                }
            } else
              re = "" + se === We;
            p = l({
              selected: void 0,
              children: void 0
            }, p, {
              selected: re,
              children: le
            });
          }
        }
        Fr(c, p), Un(c, p);
        var ye = Ci(o.type, c, p, g, this.makeStaticMarkup, this.stack.length === 1), Ve = "";
        Sr.hasOwnProperty(c) ? ye += "/>" : (ye += ">", Ve = "</" + o.type + ">");
        var pe, me = ki(p);
        me != null ? (pe = [], gi.hasOwnProperty(c) && me.charAt(0) === `
` && (ye += `
`), ye += me) : pe = He(p.children);
        var De = {
          domNamespace: jn(h, o.type),
          type: c,
          children: pe,
          childIndex: 0,
          context: s,
          footer: Ve
        };
        return De.debugElementStack = [], this.stack.push(De), this.previousWasTextNode = !1, ye;
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
    Ke.renderToNodeStream = Ai, Ke.renderToStaticMarkup = Pi, Ke.renderToStaticNodeStream = Mi, Ke.renderToString = Di, Ke.version = E;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? pr.exports = Wi() : pr.exports = Vi();
var qi = pr.exports;
const Bi = /* @__PURE__ */ Hi(qi), hn = (u) => {
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
}, Yi = {
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
}, vn = (u, l) => {
  const v = Yi[u] || "xy";
  let E = [], L = [], D = [];
  if (!l || !Array.isArray(l) || l.length === 0)
    return { series: [], labels: [], categories: [] };
  const m = l[0], C = Object.keys(m).filter(
    (I) => typeof m[I] == "number"
  ), F = Object.keys(m).find((I) => typeof m[I] == "string") || "x";
  switch (v) {
    case "circular":
      E = l.map((f) => Number(f.value ?? f.y ?? 0)), L = l.map(
        (f) => String(f.label ?? f.category ?? f.name ?? f.x ?? "Unknown")
      );
      break;
    case "category":
      D = l.map(
        (f) => String(f.x ?? f.category ?? f.stage ?? f[F] ?? "Unknown")
      ), C.length > 1 ? E = C.map((f) => ({
        name: f,
        data: l.map((P) => P[f] ?? 0)
      })) : E = [{
        name: C[0] || "Series 1",
        data: l.map((f) => f.y ?? f.value ?? 0)
      }];
      break;
    case "range":
      E = [{
        name: "Series 1",
        data: l.map((f) => {
          let P = [];
          return u === "boxplot" ? P = Array.isArray(f.y) ? f.y : [f.min, f.q1, f.median, f.q3, f.max] : u === "candlestick" ? P = Array.isArray(f.y) ? f.y : [f.open, f.high, f.low, f.close] : P = Array.isArray(f.y) ? f.y : [f.start, f.end], {
            x: f.x ?? f.label ?? f.category ?? f.date ?? "Unknown",
            y: P
          };
        })
      }];
      break;
    case "heatmap":
      const I = {};
      l.forEach((f) => {
        const P = f.group ?? "Series 1";
        I[P] || (I[P] = []), I[P].push({
          x: String(f.x ?? f.category ?? "Unknown"),
          y: f.value ?? f.y ?? 0
        });
      }), E = Object.keys(I).map((f) => ({
        name: f,
        data: I[f]
      }));
      break;
    case "treemap":
      E = [{
        data: l.map((f) => ({
          x: f.name ?? f.label ?? f.category,
          y: f.value ?? f.y ?? 0
        }))
      }];
      break;
    default:
      u === "bubble" ? E = [{
        name: "Series 1",
        data: l.map((f) => ({
          x: f.x ?? 0,
          y: f.y ?? 0,
          z: f.r ?? f.z ?? f.value ?? 0
        }))
      }] : C.length > 1 ? E = C.map((f) => ({
        name: f,
        data: l.map((P) => ({
          x: P.x ?? P[F],
          y: P[f] ?? 0
        }))
      })) : E = [{
        name: "Series 1",
        data: l.map((f) => ({
          x: f.x ?? f[F],
          y: f.y ?? f.value ?? 0
        }))
      }];
  }
  return { series: E, labels: L, categories: D };
};
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gn = Fe.createContext && /* @__PURE__ */ Fe.createContext(bn), $i = ["attr", "size", "title"];
function Xi(u, l) {
  if (u == null)
    return {};
  var v, E, L = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var D = Object.getOwnPropertySymbols(u);
    for (E = 0; E < D.length; E++)
      v = D[E], l.indexOf(v) === -1 && {}.propertyIsEnumerable.call(u, v) && (L[v] = u[v]);
  }
  return L;
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
    l && (E = E.filter(function(L) {
      return Object.getOwnPropertyDescriptor(u, L).enumerable;
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
  return u && u.map((l, v) => /* @__PURE__ */ Fe.createElement(l.tag, Gt({
    key: v
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Fe.createElement(Ji, Xt({
    attr: Gt({}, u.attr)
  }, l), xn(u.child));
}
function Ji(u) {
  var l = (v) => {
    var {
      attr: E,
      size: L,
      title: D
    } = u, m = Xi(u, $i), C = L || v.size || "1em", F;
    return v.className && (F = v.className), u.className && (F = (F ? F + " " : "") + u.className), /* @__PURE__ */ Fe.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, v.attr, E, m, {
      className: F,
      style: Gt(Gt({
        color: u.color || v.color
      }, v.style), u.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), D && /* @__PURE__ */ Fe.createElement("title", null, D), u.children);
  };
  return gn !== void 0 ? /* @__PURE__ */ Fe.createElement(gn.Consumer, null, (v) => l(v)) : l(bn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const oo = Li(
  ({ data: u, type: l, options: v = {}, height: E = 350, colors: L, title: D }, m) => {
    const C = $t(null), F = $t(null), I = $t(null), f = $t(null), [P, $] = Ni(!1), xe = ln(
      () => Bi.renderToString(
        /* @__PURE__ */ yt(eo, { size: 14, style: { color: "#9ca3af" } })
      ),
      []
    ), fe = ln(() => !u || u.length === 0 ? "bar" : l || (Array.isArray(u[0]) ? u.map((M) => hn(M)) : hn(u)), [u, l]), he = (M) => {
      const N = M.toLowerCase();
      return N === "column" || N === "funnel" ? "bar" : N === "rangebar" ? "rangeBar" : N;
    }, we = (M = !1) => {
      var ve, U, V, Se;
      const N = Array.isArray(fe) ? String(fe[0]) : String(fe);
      let A = [], ne = [], ke = [];
      if (Array.isArray(u[0]))
        A = u.flatMap((Ee, Oe) => {
          const je = Array.isArray(l) && l[Oe] || N;
          return vn(je, Ee).series.map((et) => ({
            ...et,
            type: he(je)
          }));
        });
      else {
        const Ee = vn(N, u);
        A = Ee.series, ne = Ee.labels, ke = Ee.categories;
      }
      return {
        ...v,
        colors: v.colors || L,
        chart: {
          id: M ? "vizly-modal" : "vizly-main",
          type: he(N),
          height: "100%",
          stacked: v.stacked ?? !1,
          animations: {
            enabled: !M
          },
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
                  icon: xe,
                  index: 6,
                  title: "Expand",
                  class: "vizly-expand",
                  click: () => $(!0)
                }
              ]
            }
          },
          ...v.chart
        },
        title: {
          text: typeof D == "string" ? D : (D == null ? void 0 : D.text) || ((ve = v.title) == null ? void 0 : ve.text),
          align: typeof D == "object" ? D.align : ((U = v.title) == null ? void 0 : U.align) || "left",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            ...(V = v.title) == null ? void 0 : V.style
          }
        },
        series: A,
        labels: ne != null && ne.length ? ne : void 0,
        xaxis: ke != null && ke.length ? { ...v.xaxis, categories: ke } : v.xaxis,
        plotOptions: {
          ...v.plotOptions,
          bar: {
            horizontal: N === "funnel" || N === "rangebar",
            isFunnel: N === "funnel",
            ...(Se = v.plotOptions) == null ? void 0 : Se.bar
          }
        },
        tooltip: {
          theme: "dark",
          ...v.tooltip
        }
      };
    };
    return un(() => {
      if (!C.current)
        return;
      const M = we(!1);
      return I.current && I.current.destroy(), I.current = new cn(C.current, M), I.current.render(), setTimeout(
        () => window.dispatchEvent(new Event("resize")),
        100
      ), () => {
        var N;
        (N = I.current) == null || N.destroy(), I.current = null;
      };
    }, [u, fe, v, L, D]), un(() => {
      if (!P || !F.current)
        return;
      const M = we(!0), N = setTimeout(() => {
        var A;
        (A = f.current) == null || A.destroy(), f.current = new cn(F.current, M), f.current.render();
      }, 50);
      return () => {
        var A;
        clearTimeout(N), (A = f.current) == null || A.destroy(), f.current = null;
      };
    }, [P]), Ui(m, () => ({
      zoomIn: () => {
        var M;
        return (M = I.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var M;
        return (M = I.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      reset: () => {
        var M;
        return (M = I.current) == null ? void 0 : M.resetSeries();
      },
      toggleFullscreen: () => $(!P)
    })), /* @__PURE__ */ sn("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ yt("div", { ref: C, style: { height: "100%", width: "100%" } }),
      P && /* @__PURE__ */ yt(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999
          },
          children: /* @__PURE__ */ sn(
            "div",
            {
              style: {
                width: "90%",
                maxWidth: "900px",
                height: "550px",
                background: "#fff",
                borderRadius: "12px",
                padding: "50px 20px 20px",
                position: "relative"
              },
              children: [
                /* @__PURE__ */ yt(
                  "button",
                  {
                    onClick: () => $(!1),
                    style: {
                      position: "absolute",
                      top: 15,
                      right: 20,
                      border: "none",
                      background: "transparent",
                      cursor: "pointer"
                    },
                    children: /* @__PURE__ */ yt(to, { size: 20 })
                  }
                ),
                /* @__PURE__ */ yt(
                  "div",
                  {
                    ref: F,
                    style: { height: "100%", width: "100%" }
                  }
                )
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
