import { jsx as gt, jsxs as ln } from "react/jsx-runtime";
import Fe, { forwardRef as Ni, useRef as $t, useState as Hi, useMemo as un, useEffect as cn, useImperativeHandle as Wi } from "react";
import fn from "apexcharts";
function Ui(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var pr = { exports: {} }, Qe = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hr, dn;
function mn() {
  if (dn)
    return hr;
  dn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
  function E(F) {
    if (F == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(F);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var F = new String("abc");
      if (F[5] = "de", Object.getOwnPropertyNames(F)[0] === "5")
        return !1;
      for (var v = {}, I = 0; I < 10; I++)
        v["_" + String.fromCharCode(I)] = I;
      var T = Object.getOwnPropertyNames(v).map(function(_) {
        return v[_];
      });
      if (T.join("") !== "0123456789")
        return !1;
      var M = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        M[_] = _;
      }), Object.keys(Object.assign({}, M)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return hr = C() ? Object.assign : function(F, v) {
    for (var I, T = E(F), M, _ = 1; _ < arguments.length; _++) {
      I = Object(arguments[_]);
      for (var S in I)
        l.call(I, S) && (T[S] = I[S]);
      if (u) {
        M = u(I);
        for (var z = 0; z < M.length; z++)
          p.call(I, M[z]) && (T[M[z]] = I[M[z]]);
      }
    }
    return T;
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
function Vi() {
  if (hn)
    return Qe;
  hn = 1;
  var u = mn(), l = Fe;
  function p(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, C = 60107, F = 60108, v = 60114, I = 60109, T = 60110, M = 60112, _ = 60113, S = 60120, z = 60115, K = 60116, ve = 60121, oe = 60117, P = 60119, U = 60129, fe = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var A = Symbol.for;
    E = A("react.portal"), C = A("react.fragment"), F = A("react.strict_mode"), v = A("react.profiler"), I = A("react.provider"), T = A("react.context"), M = A("react.forward_ref"), _ = A("react.suspense"), S = A("react.suspense_list"), z = A("react.memo"), K = A("react.lazy"), ve = A("react.block"), oe = A("react.fundamental"), P = A("react.scope"), U = A("react.debug_trace_mode"), fe = A("react.legacy_hidden");
  }
  function ee(r) {
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
      case v:
        return "Profiler";
      case F:
        return "StrictMode";
      case _:
        return "Suspense";
      case S:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case T:
          return (r.displayName || "Context") + ".Consumer";
        case I:
          return (r._context.displayName || "Context") + ".Provider";
        case M:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case z:
          return ee(r.type);
        case ve:
          return ee(r._render);
        case K:
          a = r._payload, r = r._init;
          try {
            return ee(r(a));
          } catch {
          }
      }
    return null;
  }
  var Ee = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = {};
  function de(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function H(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return de(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var x in r)
        i[x] = a[x];
      a = i;
    } else
      a = ge;
    return a;
  }
  for (var B = new Uint16Array(16), De = 0; 15 > De; De++)
    B[De] = De + 1;
  B[15] = 0;
  var X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ye = Object.prototype.hasOwnProperty, be = {}, je = {};
  function ze(r) {
    return Ye.call(je, r) ? !0 : Ye.call(be, r) ? !1 : X.test(r) ? je[r] = !0 : (be[r] = !0, !1);
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
  function Q(r, a, i, f, x, b, m) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = x, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = b, this.removeEmptyString = m;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    Y[r] = new Q(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    Y[a] = new Q(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    Y[r] = new Q(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    Y[r] = new Q(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    Y[r] = new Q(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    Y[r] = new Q(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    Y[r] = new Q(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    Y[r] = new Q(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    Y[r] = new Q(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var et = /[\-:]([a-z])/g;
  function tt(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var a = r.replace(
      et,
      tt
    );
    Y[a] = new Q(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(et, tt);
    Y[a] = new Q(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(et, tt);
    Y[a] = new Q(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    Y[r] = new Q(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    Y[r] = new Q(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Kt = /["'&<>]/;
  function Pe(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var a = Kt.exec(r);
    if (a) {
      var i = "", f, x = 0;
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
        x !== f && (i += r.substring(x, f)), x = f + 1, i += a;
      }
      r = x !== f ? i + r.substring(x, f) : i;
    }
    return r;
  }
  function yt(r, a) {
    var i = Y.hasOwnProperty(r) ? Y[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || At(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Pe(a) + '"'))) : ze(r) ? r + '="' + (Pe(a) + '"') : "";
  }
  function mt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var rt = typeof Object.is == "function" ? Object.is : mt, ae = null, Ae = null, j = null, Le = !1, $e = !1, Oe = null, Me = 0;
  function Re() {
    if (ae === null)
      throw Error(p(321));
    return ae;
  }
  function bt() {
    if (0 < Me)
      throw Error(p(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ne() {
    return j === null ? Ae === null ? (Le = !1, Ae = j = bt()) : (Le = !0, j = Ae) : j.next === null ? (Le = !1, j = j.next = bt()) : (Le = !0, j = j.next), j;
  }
  function Mt(r, a, i, f) {
    for (; $e; )
      $e = !1, Me += 1, j = null, i = r(a, f);
    return nt(), i;
  }
  function nt() {
    ae = null, $e = !1, Ae = null, Me = 0, j = Oe = null;
  }
  function it(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function wt(r, a, i) {
    if (ae = Re(), j = Ne(), Le) {
      var f = j.queue;
      if (a = f.dispatch, Oe !== null && (i = Oe.get(f), i !== void 0)) {
        Oe.delete(f), f = j.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return j.memoizedState = f, [f, a];
      }
      return [j.memoizedState, a];
    }
    return r = r === it ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, j.memoizedState = r, r = j.queue = { last: null, dispatch: null }, r = r.dispatch = Xe.bind(null, ae, r), [j.memoizedState, r];
  }
  function xt(r, a) {
    if (ae = Re(), j = Ne(), a = a === void 0 ? null : a, j !== null) {
      var i = j.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var x = 0; x < f.length && x < a.length; x++)
              if (!rt(a[x], f[x])) {
                f = !1;
                break e;
              }
            f = !0;
          }
        if (f)
          return i[0];
      }
    }
    return r = r(), j.memoizedState = [r, a], r;
  }
  function Xe(r, a, i) {
    if (!(25 > Me))
      throw Error(p(301));
    if (r === ae)
      if ($e = !0, r = { action: i, next: null }, Oe === null && (Oe = /* @__PURE__ */ new Map()), i = Oe.get(a), i === void 0)
        Oe.set(a, r);
      else {
        for (a = i; a.next !== null; )
          a = a.next;
        a.next = r;
      }
  }
  function kt() {
  }
  var q = null, ot = { readContext: function(r) {
    var a = q.threadID;
    return de(r, a), r[a];
  }, useContext: function(r) {
    Re();
    var a = q.threadID;
    return de(r, a), r[a];
  }, useMemo: xt, useReducer: wt, useRef: function(r) {
    ae = Re(), j = Ne();
    var a = j.memoizedState;
    return a === null ? (r = { current: r }, j.memoizedState = r) : a;
  }, useState: function(r) {
    return wt(it, r);
  }, useLayoutEffect: function() {
  }, useCallback: function(r, a) {
    return xt(function() {
      return r;
    }, a);
  }, useImperativeHandle: kt, useEffect: kt, useDebugValue: kt, useDeferredValue: function(r) {
    return Re(), r;
  }, useTransition: function() {
    return Re(), [function(r) {
      r();
    }, !1];
  }, useOpaqueIdentifier: function() {
    return (q.identifierPrefix || "") + "R:" + (q.uniqueID++).toString(36);
  }, useMutableSource: function(r, a) {
    return Re(), a(r._source);
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
  var St = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, at = u({ menuitem: !0 }, St), he = {
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
  Object.keys(he).forEach(function(r) {
    Et.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), he[a] = he[r];
    });
  });
  var He = /([A-Z])/g, st = /^ms-/, we = l.Children.toArray, lt = Ee.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, Ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, Ot = {};
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
      throw Error(p(152, ee(a) || "Component"));
  }
  function er(r, a, i) {
    function f(m, k) {
      var y = k.prototype && k.prototype.isReactComponent, te = H(k, a, i, y), G = [], re = !1, W = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (G === null)
          return null;
      }, enqueueReplaceState: function(It, L) {
        re = !0, G = [L];
      }, enqueueSetState: function(It, L) {
        if (G === null)
          return null;
        G.push(L);
      } };
      if (y) {
        if (y = new k(m.props, te, W), typeof k.getDerivedStateFromProps == "function") {
          var D = k.getDerivedStateFromProps.call(null, m.props, y.state);
          D != null && (y.state = u({}, y.state, D));
        }
      } else if (ae = {}, y = k(
        m.props,
        te,
        W
      ), y = Mt(k, m.props, y, te), y == null || y.render == null) {
        r = y, Rt(r, k);
        return;
      }
      if (y.props = m.props, y.context = te, y.updater = W, W = y.state, W === void 0 && (y.state = W = null), typeof y.UNSAFE_componentWillMount == "function" || typeof y.componentWillMount == "function")
        if (typeof y.componentWillMount == "function" && typeof k.getDerivedStateFromProps != "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && typeof k.getDerivedStateFromProps != "function" && y.UNSAFE_componentWillMount(), G.length) {
          W = G;
          var Z = re;
          if (G = null, re = !1, Z && W.length === 1)
            y.state = W[0];
          else {
            D = Z ? W[0] : y.state;
            var Ie = !0;
            for (Z = Z ? 1 : 0; Z < W.length; Z++) {
              var se = W[Z];
              se = typeof se == "function" ? se.call(y, D, m.props, te) : se, se != null && (Ie ? (Ie = !1, D = u({}, D, se)) : u(D, se));
            }
            y.state = D;
          }
        } else
          G = null;
      if (r = y.render(), Rt(r, k), typeof y.getChildContext == "function" && (m = k.childContextTypes, typeof m == "object")) {
        var le = y.getChildContext();
        for (var pe in le)
          if (!(pe in m))
            throw Error(p(108, ee(k) || "Unknown", pe));
      }
      le && (a = u({}, a, le));
    }
    for (; l.isValidElement(r); ) {
      var x = r, b = x.type;
      if (typeof b != "function")
        break;
      f(x, b);
    }
    return { child: r, context: a };
  }
  var ut = function() {
    function r(i, f, x) {
      l.isValidElement(i) ? i.type !== C ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : we(i)) : i = we(i), i = { type: null, domNamespace: Qt.html, children: i, childIndex: 0, context: ge, footer: "" };
      var b = B[0];
      if (b === 0) {
        var m = B;
        b = m.length;
        var k = 2 * b;
        if (!(65536 >= k))
          throw Error(p(304));
        var y = new Uint16Array(k);
        for (y.set(m), B = y, B[0] = b + 1, m = b; m < k - 1; m++)
          B[m] = m + 1;
        B[k - 1] = 0;
      } else
        B[0] = B[b];
      this.threadID = b, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = x && x.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        B[i] = B[0], B[0] = i;
      }
    }, a.pushProvider = function(i) {
      var f = ++this.contextIndex, x = i.type._context, b = this.threadID;
      de(x, b);
      var m = x[b];
      this.contextStack[f] = x, this.contextValueStack[f] = m, x[b] = i.props.value;
    }, a.popProvider = function() {
      var i = this.contextIndex, f = this.contextStack[i], x = this.contextValueStack[i];
      this.contextStack[i] = null, this.contextValueStack[i] = null, this.contextIndex--, f[this.threadID] = x;
    }, a.clearProviders = function() {
      for (var i = this.contextIndex; 0 <= i; i--)
        this.contextStack[i][this.threadID] = this.contextValueStack[i];
    }, a.read = function(i) {
      if (this.exhausted)
        return null;
      var f = q;
      q = this;
      var x = lt.current;
      lt.current = ot;
      try {
        for (var b = [""], m = !1; b[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var k = this.threadID;
            B[k] = B[0], B[0] = k;
            break;
          }
          var y = this.stack[this.stack.length - 1];
          if (m || y.childIndex >= y.children.length) {
            var te = y.footer;
            if (te !== "" && (this.previousWasTextNode = !1), this.stack.pop(), y.type === "select")
              this.currentSelectValue = null;
            else if (y.type != null && y.type.type != null && y.type.type.$$typeof === I)
              this.popProvider(y.type);
            else if (y.type === _) {
              this.suspenseDepth--;
              var G = b.pop();
              if (m) {
                m = !1;
                var re = y.fallbackFrame;
                if (!re)
                  throw Error(p(303));
                this.stack.push(re), b[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                b[this.suspenseDepth] += G;
            }
            b[this.suspenseDepth] += te;
          } else {
            var W = y.children[y.childIndex++], D = "";
            try {
              D += this.render(W, y.context, y.domNamespace);
            } catch (Z) {
              throw Z != null && typeof Z.then == "function" ? Error(p(294)) : Z;
            } finally {
            }
            b.length <= this.suspenseDepth && b.push(""), b[this.suspenseDepth] += D;
          }
        }
        return b[0];
      } finally {
        lt.current = x, q = f, nt();
      }
    }, a.render = function(i, f, x) {
      if (typeof i == "string" || typeof i == "number")
        return x = "" + i, x === "" ? "" : this.makeStaticMarkup ? Pe(x) : this.previousWasTextNode ? "<!-- -->" + Pe(x) : (this.previousWasTextNode = !0, Pe(x));
      if (f = er(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw x = i.$$typeof, Error(x === E ? p(257) : p(258, x.toString()));
        return i = we(i), this.stack.push({ type: null, domNamespace: x, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var b = i.type;
      if (typeof b == "string")
        return this.renderDOM(i, f, x);
      switch (b) {
        case fe:
        case U:
        case F:
        case v:
        case S:
        case C:
          return i = we(i.props.children), this.stack.push({
            type: null,
            domNamespace: x,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case _:
          throw Error(p(294));
        case P:
          throw Error(p(343));
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case M:
            ae = {};
            var m = b.render(i.props, i.ref);
            return m = Mt(b.render, i.props, m, i.ref), m = we(m), this.stack.push({ type: null, domNamespace: x, children: m, childIndex: 0, context: f, footer: "" }), "";
          case z:
            return i = [l.createElement(b.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: x, children: i, childIndex: 0, context: f, footer: "" }), "";
          case I:
            return b = we(i.props.children), x = { type: i, domNamespace: x, children: b, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(x), "";
          case T:
            b = i.type, m = i.props;
            var k = this.threadID;
            return de(b, k), b = we(m.children(b[k])), this.stack.push({ type: i, domNamespace: x, children: b, childIndex: 0, context: f, footer: "" }), "";
          case oe:
            throw Error(p(338));
          case K:
            return b = i.type, m = b._init, b = m(b._payload), i = [l.createElement(b, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: x,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(p(130, b == null ? b : typeof b, ""));
    }, a.renderDOM = function(i, f, x) {
      var b = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(b)) {
        if (!Ge.test(b))
          throw Error(p(65, b));
        Ft[b] = !0;
      }
      var m = i.props;
      if (b === "input")
        m = u({ type: void 0 }, m, { defaultChecked: void 0, defaultValue: void 0, value: m.value != null ? m.value : m.defaultValue, checked: m.checked != null ? m.checked : m.defaultChecked });
      else if (b === "textarea") {
        var k = m.value;
        if (k == null) {
          k = m.defaultValue;
          var y = m.children;
          if (y != null) {
            if (k != null)
              throw Error(p(92));
            if (Array.isArray(y)) {
              if (!(1 >= y.length))
                throw Error(p(93));
              y = y[0];
            }
            k = "" + y;
          }
          k == null && (k = "");
        }
        m = u({}, m, { value: void 0, children: "" + k });
      } else if (b === "select")
        this.currentSelectValue = m.value != null ? m.value : m.defaultValue, m = u({}, m, { value: void 0 });
      else if (b === "option") {
        y = this.currentSelectValue;
        var te = jt(m.children);
        if (y != null) {
          var G = m.value != null ? m.value + "" : te;
          if (k = !1, Array.isArray(y)) {
            for (var re = 0; re < y.length; re++)
              if ("" + y[re] === G) {
                k = !0;
                break;
              }
          } else
            k = "" + y === G;
          m = u(
            { selected: void 0, children: void 0 },
            m,
            { selected: k, children: te }
          );
        }
      }
      if (k = m) {
        if (at[b] && (k.children != null || k.dangerouslySetInnerHTML != null))
          throw Error(p(137, b));
        if (k.dangerouslySetInnerHTML != null) {
          if (k.children != null)
            throw Error(p(60));
          if (!(typeof k.dangerouslySetInnerHTML == "object" && "__html" in k.dangerouslySetInnerHTML))
            throw Error(p(61));
        }
        if (k.style != null && typeof k.style != "object")
          throw Error(p(62));
      }
      k = m, y = this.makeStaticMarkup, te = this.stack.length === 1, G = "<" + i.type;
      e:
        if (b.indexOf("-") === -1)
          re = typeof k.is == "string";
        else
          switch (b) {
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
      for (L in k)
        if (zt.call(k, L)) {
          var W = k[L];
          if (W != null) {
            if (L === "style") {
              var D = void 0, Z = "", Ie = "";
              for (D in W)
                if (W.hasOwnProperty(D)) {
                  var se = D.indexOf("--") === 0, le = W[D];
                  if (le != null) {
                    if (se)
                      var pe = D;
                    else if (pe = D, Ot.hasOwnProperty(pe))
                      pe = Ot[pe];
                    else {
                      var It = pe.replace(He, "-$1").toLowerCase().replace(st, "-ms-");
                      pe = Ot[pe] = It;
                    }
                    Z += Ie + pe + ":", Ie = D, se = le == null || typeof le == "boolean" || le === "" ? "" : se || typeof le != "number" || le === 0 || he.hasOwnProperty(Ie) && he[Ie] ? ("" + le).trim() : le + "px", Z += se, Ie = ";";
                  }
                }
              W = Z || null;
            }
            D = null, re ? Lt.hasOwnProperty(L) || (D = L, D = ze(D) && W != null ? D + '="' + (Pe(W) + '"') : "") : D = yt(L, W), D && (G += " " + D);
          }
        }
      y || te && (G += ' data-reactroot=""');
      var L = G;
      k = "", St.hasOwnProperty(b) ? L += "/>" : (L += ">", k = "</" + i.type + ">");
      e: {
        if (y = m.dangerouslySetInnerHTML, y != null) {
          if (y.__html != null) {
            y = y.__html;
            break e;
          }
        } else if (y = m.children, typeof y == "string" || typeof y == "number") {
          y = Pe(y);
          break e;
        }
        y = null;
      }
      return y != null ? (m = [], _t.hasOwnProperty(b) && y.charAt(0) === `
` && (L += `
`), L += y) : m = we(m.children), i = i.type, x = x == null || x === "http://www.w3.org/1999/xhtml" ? Jt(i) : x === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : x, this.stack.push({ domNamespace: x, type: b, children: m, childIndex: 0, context: f, footer: k }), this.previousWasTextNode = !1, L;
    }, r;
  }();
  return Qe.renderToNodeStream = function() {
    throw Error(p(207));
  }, Qe.renderToStaticMarkup = function(r, a) {
    r = new ut(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Qe.renderToStaticNodeStream = function() {
    throw Error(p(208));
  }, Qe.renderToString = function(r, a) {
    r = new ut(r, !1, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Qe.version = "17.0.2", Qe;
}
var Je = {};
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function qi() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Fe, l = mn();
    function p(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", C = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("warn", e, n);
      }
    }
    function v(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        I("error", e, n);
      }
    }
    function I(e, t, n) {
      {
        var o = C.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var T = 60106, M = 60107, _ = 60108, S = 60114, z = 60109, K = 60110, ve = 60112, oe = 60113, P = 60120, U = 60115, fe = 60116, A = 60121, ee = 60117, Ee = 60119, ge = 60129, de = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var H = Symbol.for;
      H("react.element"), T = H("react.portal"), M = H("react.fragment"), _ = H("react.strict_mode"), S = H("react.profiler"), z = H("react.provider"), K = H("react.context"), ve = H("react.forward_ref"), oe = H("react.suspense"), P = H("react.suspense_list"), U = H("react.memo"), fe = H("react.lazy"), A = H("react.block"), H("react.server.block"), ee = H("react.fundamental"), Ee = H("react.scope"), H("react.opaque.id"), ge = H("react.debug_trace_mode"), H("react.offscreen"), de = H("react.legacy_hidden");
    }
    function B(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function De(e) {
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
        case M:
          return "Fragment";
        case T:
          return "Portal";
        case S:
          return "Profiler";
        case _:
          return "StrictMode";
        case oe:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case K:
            var t = e;
            return De(t) + ".Consumer";
          case z:
            var n = e;
            return De(n._context) + ".Provider";
          case ve:
            return B(e, e.render, "ForwardRef");
          case U:
            return X(e.type);
          case A:
            return X(e._render);
          case fe: {
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
    var Ye = !1, be = 0, je, ze, Pt, At, Q, Y, et;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function Kt() {
      {
        if (be === 0) {
          je = console.log, ze = console.info, Pt = console.warn, At = console.error, Q = console.group, Y = console.groupCollapsed, et = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: tt,
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
              value: Pt
            }),
            error: l({}, e, {
              value: At
            }),
            group: l({}, e, {
              value: Q
            }),
            groupCollapsed: l({}, e, {
              value: Y
            }),
            groupEnd: l({}, e, {
              value: et
            })
          });
        }
        be < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = C.ReactCurrentDispatcher, mt;
    function rt(e, t, n) {
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
    var ae = !1, Ae;
    {
      var j = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new j();
    }
    function Le(e, t) {
      if (!e || ae)
        return "";
      {
        var n = Ae.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ae = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = yt.current, yt.current = null, Kt();
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
          for (var g = V.stack.split(`
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
                    return typeof e == "function" && Ae.set(e, $), $;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, yt.current = h, Pe(), Error.prepareStackTrace = s;
      }
      var J = e ? e.displayName || e.name : "", w = J ? rt(J) : "";
      return typeof e == "function" && Ae.set(e, w), w;
    }
    function $e(e, t, n) {
      return Le(e, !1);
    }
    function Oe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Me(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, Oe(e));
      if (typeof e == "string")
        return rt(e);
      switch (e) {
        case oe:
          return rt("Suspense");
        case P:
          return rt("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ve:
            return $e(e.render);
          case U:
            return Me(e.type, t, n);
          case A:
            return $e(e._render);
          case fe: {
            var o = e, s = o._payload, h = o._init;
            try {
              return Me(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = {}, bt = C.ReactDebugCurrentFrame;
    function Ne(e) {
      if (e) {
        var t = e._owner, n = Me(e.type, e._source, t ? t.type : null);
        bt.setExtraStackFrame(n);
      } else
        bt.setExtraStackFrame(null);
    }
    function Mt(e, t, n, o, s) {
      {
        var h = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (h(e, c)) {
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
            g && !(g instanceof Error) && (Ne(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof g), Ne(null)), g instanceof Error && !(g.message in Re) && (Re[g.message] = !0, Ne(s), v("Failed %s type: %s", n, g.message), Ne(null));
          }
      }
    }
    var nt;
    nt = /* @__PURE__ */ new Set();
    var it = {};
    Object.freeze(it);
    function wt(e, t) {
      var n = e.contextTypes;
      if (!n)
        return it;
      var o = {};
      for (var s in n)
        o[s] = t[s];
      return o;
    }
    function xt(e, t, n) {
      Mt(e, t, n, "Component");
    }
    function Xe(e, t) {
      for (var n = e._threadCount | 0; n <= t; n++)
        e[n] = e._currentValue2, e._threadCount = n + 1;
    }
    function kt(e, t, n, o) {
      if (o) {
        var s = e.contextType;
        if ("contextType" in e) {
          var h = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === K && s._context === void 0
          );
          if (!h && !nt.has(e)) {
            nt.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === z ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", X(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Xe(s, n), s[n];
        {
          var g = wt(e, t);
          return e.contextTypes && xt(e.contextTypes, g, "context"), g;
        }
      } else {
        var d = wt(e, t);
        return e.contextTypes && xt(e.contextTypes, d, "context"), d;
      }
    }
    for (var q = new Uint16Array(16), ot = 0; ot < 15; ot++)
      q[ot] = ot + 1;
    q[15] = 0;
    function Qt() {
      var e = q, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var o = new Uint16Array(n);
      o.set(e), q = o, q[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        q[s] = s + 1;
      return q[n - 1] = 0, t;
    }
    function Jt() {
      var e = q[0];
      return e === 0 ? Qt() : (q[0] = q[e], e);
    }
    function St(e) {
      q[e] = q[0], q[0] = e;
    }
    var at = 0, he = 1, Et = 2, He = 3, st = 4, we = 5, lt = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ge = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Ot = new RegExp("^[" + _t + "][" + Ge + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
    function Rt(e) {
      return jt.call(Lt, e) ? !0 : jt.call(zt, e) ? !1 : Ot.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function er(e, t, n) {
      return t !== null ? t.type === at : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ut(e, t, n, o) {
      if (n !== null && n.type === at)
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
      if (t === null || typeof t > "u" || ut(e, t, n, o))
        return !0;
      if (o)
        return !1;
      if (n !== null)
        switch (n.type) {
          case He:
            return !t;
          case st:
            return t === !1;
          case we:
            return isNaN(t);
          case lt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, h, c) {
      this.acceptsBooleans = t === Et || t === He || t === st, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
    }
    var f = {}, x = [
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
    x.forEach(function(e) {
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      f[t] = new i(
        t,
        he,
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
    var b = /[\-\:]([a-z])/g, m = function(e) {
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
      var t = e.replace(b, m);
      f[t] = new i(
        t,
        he,
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
      var t = e.replace(b, m);
      f[t] = new i(
        t,
        he,
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
      var t = e.replace(b, m);
      f[t] = new i(
        t,
        he,
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
        he,
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
    var k = "xlinkHref";
    f[k] = new i(
      "xlinkHref",
      he,
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
        he,
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
      !te && y.test(e) && (te = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var re = /["'&<>]/;
    function W(e) {
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
    function D(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : W(e);
    }
    function Z(e) {
      return '"' + D(e) + '"';
    }
    function Ie() {
      return Ft + '=""';
    }
    function se(e, t) {
      var n = a(e);
      if (e !== "style" && er(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === He || s === st && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, G(t)), o + "=" + Z(t));
      } else if (Rt(e))
        return e + "=" + Z(t);
      return "";
    }
    function le(e, t) {
      return !Rt(e) || t == null ? "" : e + "=" + Z(t);
    }
    function pe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var It = typeof Object.is == "function" ? Object.is : pe, L = null, Nt = null, N = null, Ct = !1, Ht = !1, We = null, Wt = 0, Sn = 25, Ce = !1, ct;
    function Ze() {
      if (L === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ce && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), L;
    }
    function En(e, t) {
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ct), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ct, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
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
    function tr() {
      return N === null ? Nt === null ? (Ct = !1, Nt = N = vr()) : (Ct = !0, N = Nt) : N.next === null ? (Ct = !1, N = N.next = vr()) : (Ct = !0, N = N.next), N;
    }
    function gr(e) {
      L = e, Ce = !1;
    }
    function yr(e, t, n, o) {
      for (; Ht; )
        Ht = !1, Wt += 1, N = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Ce = !1, L = null, Ht = !1, Nt = null, Wt = 0, We = null, N = null;
    }
    function On(e, t) {
      var n = ft.threadID;
      return Xe(e, n), Ce && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function Rn(e, t) {
      ct = "useContext", Ze();
      var n = ft.threadID;
      return Xe(e, n), e[n];
    }
    function rr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function In(e) {
      return ct = "useState", br(
        rr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function br(e, t, n) {
      if (e !== rr && (ct = "useReducer"), L = Ze(), N = tr(), Ct) {
        var o = N.queue, s = o.dispatch;
        if (We !== null) {
          var h = We.get(o);
          if (h !== void 0) {
            We.delete(o);
            var c = N.memoizedState, g = h;
            do {
              var d = g.action;
              Ce = !0, c = e(c, d), Ce = !1, g = g.next;
            } while (g !== null);
            return N.memoizedState = c, [c, s];
          }
        }
        return [N.memoizedState, s];
      } else {
        Ce = !0;
        var O;
        e === rr ? O = typeof t == "function" ? t() : t : O = n !== void 0 ? n(t) : t, Ce = !1, N.memoizedState = O;
        var R = N.queue = {
          last: null,
          dispatch: null
        }, $ = R.dispatch = Dn.bind(null, L, R);
        return [N.memoizedState, $];
      }
    }
    function wr(e, t) {
      L = Ze(), N = tr();
      var n = t === void 0 ? null : t;
      if (N !== null) {
        var o = N.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (En(n, s))
            return o[0];
        }
      }
      Ce = !0;
      var h = e();
      return Ce = !1, N.memoizedState = [h, n], h;
    }
    function Cn(e) {
      L = Ze(), N = tr();
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
      ct = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Dn(e, t, n) {
      if (!(Wt < Sn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === L) {
        Ht = !0;
        var o = {
          action: n,
          next: null
        };
        We === null && (We = /* @__PURE__ */ new Map());
        var s = We.get(t);
        if (s === void 0)
          We.set(t, o);
        else {
          for (var h = s; h.next !== null; )
            h = h.next;
          h.next = o;
        }
      }
    }
    function Pn(e, t) {
      return wr(function() {
        return e;
      }, t);
    }
    function An(e, t, n) {
      return Ze(), t(e._source);
    }
    function Mn(e) {
      return Ze(), e;
    }
    function _n() {
      Ze();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function Fn() {
      return (ft.identifierPrefix || "") + "R:" + (ft.uniqueID++).toString(36);
    }
    function nr() {
    }
    var ft = null;
    function xr(e) {
      ft = e;
    }
    var jn = {
      readContext: On,
      useContext: Rn,
      useMemo: wr,
      useReducer: br,
      useRef: Cn,
      useState: In,
      useLayoutEffect: Tn,
      useCallback: Pn,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: nr,
      // Effects are not run in the server environment.
      useEffect: nr,
      // Debugging effect
      useDebugValue: nr,
      useDeferredValue: Mn,
      useTransition: _n,
      useOpaqueIdentifier: Fn,
      // Subscriptions are not setup in a server environment.
      useMutableSource: An
    }, Ut = "http://www.w3.org/1999/xhtml", kr = "http://www.w3.org/1998/Math/MathML", ir = "http://www.w3.org/2000/svg", or = {
      html: Ut,
      mathml: kr,
      svg: ir
    };
    function Sr(e) {
      switch (e) {
        case "svg":
          return ir;
        case "math":
          return kr;
        default:
          return Ut;
      }
    }
    function zn(e, t) {
      return e == null || e === Ut ? Sr(t) : e === ir && t === "foreignObject" ? Ut : e;
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
    }, Nn = l({
      menuitem: !0
    }, Er), Hn = "__html";
    function Wn(e, t) {
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
    function Un(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Vn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Tt).forEach(function(e) {
      Vn.forEach(function(t) {
        Tt[Un(t, e)] = Tt[e];
      });
    });
    function qn(e, t, n) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !n && typeof t == "number" && t !== 0 && !(Tt.hasOwnProperty(e) && Tt[e]) ? t + "px" : ("" + t).trim();
    }
    var Bn = /([A-Z])/g, Yn = /^ms-/;
    function $n(e) {
      return e.replace(Bn, "-$1").toLowerCase().replace(Yn, "-ms-");
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
    var Or = function() {
    };
    {
      var Xn = /^(?:webkit|moz|o)[A-Z]/, Gn = /^-ms-/, Zn = /-(.)/g, Rr = /;\s*$/, dt = {}, lr = {}, Ir = !1, Cr = !1, Kn = function(e) {
        return e.replace(Zn, function(t, n) {
          return n.toUpperCase();
        });
      }, Qn = function(e) {
        dt.hasOwnProperty(e) && dt[e] || (dt[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kn(e.replace(Gn, "ms-"))
        ));
      }, Jn = function(e) {
        dt.hasOwnProperty(e) && dt[e] || (dt[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ei = function(e, t) {
        lr.hasOwnProperty(t) && lr[t] || (lr[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Rr, "")));
      }, ti = function(e, t) {
        Ir || (Ir = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ri = function(e, t) {
        Cr || (Cr = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Or = function(e, t) {
        e.indexOf("-") > -1 ? Qn(e) : Xn.test(e) ? Jn(e) : Rr.test(t) && ei(e, t), typeof t == "number" && (isNaN(t) ? ti(e, t) : isFinite(t) || ri(e, t));
      };
    }
    var ni = Or, Tr = {
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
    }, ht = {}, ii = new RegExp("^(aria)-[" + Ge + "]*$"), oi = new RegExp("^(aria)[A-Z][" + Ge + "]*$"), ai = Object.prototype.hasOwnProperty;
    function si(e, t) {
      {
        if (ai.call(ht, t) && ht[t])
          return !0;
        if (oi.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ht[t] = !0, !0;
          if (t !== o)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ht[t] = !0, !0;
        }
        if (ii.test(t)) {
          var s = t.toLowerCase(), h = Tr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return ht[t] = !0, !1;
          if (t !== h)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), ht[t] = !0, !0;
        }
      }
      return !0;
    }
    function li(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = si(e, o);
          s || n.push(o);
        }
        var h = n.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        n.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function ui(e, t) {
      sr(e, t) || li(e, t);
    }
    var Dr = !1;
    function ci(e, t) {
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
      var ne = {}, fi = Object.prototype.hasOwnProperty, Mr = /^on./, di = /^on[^A-Z]/, hi = new RegExp("^(aria)-[" + Ge + "]*$"), pi = new RegExp("^(aria)[A-Z][" + Ge + "]*$");
      Ar = function(e, t, n, o) {
        if (fi.call(ne, t) && ne[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ne[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, g), ne[t] = !0, !0;
          if (Mr.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), ne[t] = !0, !0;
        } else if (Mr.test(t))
          return di.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ne[t] = !0, !0;
        if (hi.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ne[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ne[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ne[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ne[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === at;
        if (Pr.hasOwnProperty(s)) {
          var R = Pr[s];
          if (R !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ne[t] = !0, !0;
        } else if (!O && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), ne[t] = !0, !0;
        return typeof n == "boolean" && ut(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ne[t] = !0, !0) : O ? !0 : ut(t, n, d, !1) ? (ne[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === He && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ne[t] = !0), !0);
      };
    }
    var vi = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var h = Ar(e, s, t[s], n);
          h || o.push(s);
        }
        var c = o.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        o.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function gi(e, t, n) {
      sr(e, t) || vi(e, t, n);
    }
    var Ue = u.Children.toArray, _e = [], ur = C.ReactCurrentDispatcher, Vt, cr = null, _r = function() {
      return "";
    }, Fr = function(e) {
      return "";
    }, jr = function(e, t) {
    }, zr = function(e) {
    }, Lr = function(e) {
    }, Nr = function() {
    }, Hr = !1;
    Vt = C.ReactDebugCurrentFrame, jr = function(e, t) {
      ui(e, t), ci(e, t), gi(e, t, null);
    }, Fr = function(e) {
      return Me(e.type, e._source, null);
    }, zr = function(e) {
      _e.push(e), _e.length === 1 && (cr = Vt.getCurrentStack, Vt.getCurrentStack = _r);
    }, Lr = function(e) {
      var t = _e[_e.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Nr = function() {
      _e.pop(), _e.length === 0 && (Vt.getCurrentStack = cr, cr = null);
    }, _r = function() {
      if (_e.length === 0)
        return "";
      for (var e = _e[_e.length - 1], t = "", n = e.length - 1; n >= 0; n--)
        for (var o = e[n], s = o.debugElementStack, h = s.length - 1; h >= 0; h--)
          t += Fr(s[h]);
      return t;
    };
    var Wr = !1, Ur = !1, Vr = !1, qr = !1, Br = !1, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = {}, Qr = ["value", "defaultValue"], yi = {
      listing: !0,
      pre: !0,
      textarea: !0
    }, mi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Jr = {};
    function bi(e) {
      if (!Jr.hasOwnProperty(e)) {
        if (!mi.test(e))
          throw Error("Invalid tag: " + e);
        Jr[e] = !0;
      }
    }
    var fr = {}, wi = function(e) {
      if (fr.hasOwnProperty(e))
        return fr[e];
      var t = $n(e);
      return fr[e] = t, t;
    };
    function xi(e) {
      var t = "", n = "";
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          var s = o.indexOf("--") === 0, h = e[o];
          s || ni(o, h), h != null && (t += n + (s ? o : wi(o)) + ":", t += qn(o, h, s), n = ";");
        }
      return t || null;
    }
    function en(e, t) {
      {
        var n = e.constructor, o = n && X(n) || "ReactClass", s = o + "." + t;
        if (Yr[s])
          return;
        v(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Yr[s] = !0;
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
          return D(n);
      }
      return null;
    }
    function Ei(e) {
      if (!u.isValidElement(e))
        return Ue(e);
      var t = e;
      if (t.type !== M)
        return [t];
      var n = t.props.children;
      if (!u.isValidElement(n))
        return Ue(n);
      var o = n;
      return [o];
    }
    function Oi(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Br && typeof n != "string" && typeof n != "number" && (Br = !0, v("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Ri = Object.prototype.hasOwnProperty, Ii = "style", Ci = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function Ti(e, t, n, o, s, h) {
      var c = "<" + e, g = sr(t, n);
      for (var d in n)
        if (Ri.call(n, d)) {
          var O = n[d];
          if (O != null) {
            d === Ii && (O = xi(O));
            var R = null;
            g ? Ci.hasOwnProperty(d) || (R = le(d, O)) : R = se(d, O), R && (c += " " + R);
          }
        }
      return s || h && (c += " " + Ie()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error((X(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Di(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        h(o, s);
      }
      function h(c, g) {
        var d = ki(g), O = kt(g, t, n, d), R = [], $ = !1, J = {
          isMounted: function(Be) {
            return !1;
          },
          enqueueForceUpdate: function(Be) {
            if (R === null)
              return en(Be, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Be, vt) {
            $ = !0, R = [vt];
          },
          enqueueSetState: function(Be, vt) {
            if (R === null)
              return en(Be, "setState"), null;
            R.push(vt);
          }
        }, w;
        if (d) {
          if (w = new g(c.props, O, J), typeof g.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var V = X(g) || "Unknown";
              Kr[V] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, w.state === null ? "null" : "undefined", V), Kr[V] = !0);
            }
            var ie = g.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ie === void 0) {
              var ue = X(g) || "Unknown";
              Zr[ue] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", ue), Zr[ue] = !0);
            }
            ie != null && (w.state = l({}, w.state, ie));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var ce = X(g) || "Unknown";
            $r[ce] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ce, ce), $r[ce] = !0);
          }
          var Ve = {};
          if (gr(Ve), w = g(c.props, O, J), w = yr(g, c.props, w, O), w != null && w.render != null) {
            var ye = X(g) || "Unknown";
            Xr[ye] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ye, ye, ye), Xr[ye] = !0);
          }
          if (w == null || w.render == null) {
            e = w, tn(e, g);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = J;
        var xe = w.state;
        if (xe === void 0 && (w.state = xe = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var qe = X(g) || "Unknown";
              Gr[qe] || (F(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                qe
              ), Gr[qe] = !0);
            }
            typeof g.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof g.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var me = R, ke = $;
            if (R = null, $ = !1, ke && me.length === 1)
              w.state = me[0];
            else {
              for (var Te = ke ? me[0] : w.state, qt = !0, pt = ke ? 1 : 0; pt < me.length; pt++) {
                var Se = me[pt], Dt = typeof Se == "function" ? Se.call(w, Te, c.props, O) : Se;
                Dt != null && (qt ? (qt = !1, Te = l({}, Te, Dt)) : l(Te, Dt));
              }
              w.state = Te;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), tn(e, g);
        var Ke;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Ke = w.getChildContext();
              for (var Yt in Ke)
                if (!(Yt in Bt))
                  throw Error((X(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", X(g) || "Unknown");
          }
          Ke && (t = l({}, t, Ke));
        }
      }
      return {
        child: e,
        context: t
      };
    }
    var rn = /* @__PURE__ */ function() {
      function e(n, o, s) {
        var h = Ei(n), c = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: or.html,
          children: h,
          childIndex: 0,
          context: it,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Jt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), St(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, h = o.type._context, c = this.threadID;
        Xe(h, c);
        var g = h[c];
        this.contextStack[s] = h, this.contextValueStack[s] = g, this.contextProviderStack[s] = o, h[c] = o.props.value;
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
        var s = ft;
        xr(this);
        var h = ur.current;
        ur.current = jn;
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
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === z) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === oe) {
                this.suspenseDepth--;
                var $ = c.pop();
                if (g) {
                  g = !1;
                  var J = d.fallbackFrame;
                  if (!J)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(J), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += $;
              }
              c[this.suspenseDepth] += O;
              continue;
            }
            var w = d.children[d.childIndex++], V = "";
            zr(this.stack), d.debugElementStack.length = 0;
            try {
              V += this.render(w, d.context, d.domNamespace);
            } catch (ie) {
              if (ie != null && typeof ie.then == "function") {
                if (!Ye)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ie;
            } finally {
              Nr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += V;
          }
          return c[0];
        } finally {
          ur.current = h, xr(s), mr();
        }
      }, t.render = function(o, s, h) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? D(c) : this.previousWasTextNode ? "<!-- -->" + D(c) : (this.previousWasTextNode = !0, D(c));
        } else {
          var g, d = Di(o, s, this.threadID);
          if (g = d.child, s = d.context, g === null || g === !1)
            return "";
          if (!u.isValidElement(g)) {
            if (g != null && g.$$typeof != null) {
              var O = g.$$typeof;
              throw Error(O === T ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = Ue(g), $ = {
              type: null,
              domNamespace: h,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return $.debugElementStack = [], this.stack.push($), "";
          }
          var J = g, w = J.type;
          if (typeof w == "string")
            return this.renderDOM(J, s, h);
          switch (w) {
            case de:
            case ge:
            case _:
            case S:
            case P:
            case M: {
              var V = Ue(g.props.children), ie = {
                type: null,
                domNamespace: h,
                children: V,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ie.debugElementStack = [], this.stack.push(ie), "";
            }
            case oe:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Ee:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case ve: {
                var ue = g, ce, Ve = {};
                gr(Ve), ce = w.render(ue.props, ue.ref), ce = yr(w.render, ue.props, ce, ue.ref), ce = Ue(ce);
                var ye = {
                  type: null,
                  domNamespace: h,
                  children: ce,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ye.debugElementStack = [], this.stack.push(ye), "";
              }
              case U: {
                var xe = g, qe = [u.createElement(w.type, l({
                  ref: xe.ref
                }, xe.props))], me = {
                  type: null,
                  domNamespace: h,
                  children: qe,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return me.debugElementStack = [], this.stack.push(me), "";
              }
              case z: {
                var ke = g, Te = ke.props, qt = Ue(Te.children), pt = {
                  type: ke,
                  domNamespace: h,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pt.debugElementStack = [], this.pushProvider(ke), this.stack.push(pt), "";
              }
              case K: {
                var Se = g.type;
                Se._context === void 0 ? Se !== Se.Consumer && (Hr || (Hr = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : Se = Se._context;
                var Dt = g.props, Ke = this.threadID;
                Xe(Se, Ke);
                var Bt = Se[Ke], Yt = Ue(Dt.children(Bt)), Be = {
                  type: g,
                  domNamespace: h,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Be.debugElementStack = [], this.stack.push(Be), "";
              }
              case ee:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case fe: {
                var vt = g, nn = g.type, Fi = nn._payload, ji = nn._init, zi = ji(Fi), Li = [u.createElement(zi, l({
                  ref: vt.ref
                }, vt.props))], on = {
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
          var dr = "";
          {
            var an = J._owner;
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (dr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? X(an) : null;
            sn && (dr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + dr);
        }
      }, t.renderDOM = function(o, s, h) {
        var c = o.type.toLowerCase(), g = h;
        h === or.html && (g = Sr(c)), g === or.html && c !== o.type && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), bi(c);
        var d = o.props;
        if (c === "input")
          ar("input", d), d.checked !== void 0 && d.defaultChecked !== void 0 && !Ur && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Ur = !0), d.value !== void 0 && d.defaultValue !== void 0 && !Wr && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", d.type), Wr = !0), d = l({
            type: void 0
          }, d, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: d.value != null ? d.value : d.defaultValue,
            checked: d.checked != null ? d.checked : d.defaultChecked
          });
        else if (c === "textarea") {
          ar("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !qr && (v("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, $ = d.children;
            if ($ != null) {
              if (v("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
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
            ar("select", d);
            for (var J = 0; J < Qr.length; J++) {
              var w = Qr[J];
              if (d[w] != null) {
                var V = Array.isArray(d[w]);
                d.multiple && !V ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && V && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ie = null, ue = this.currentSelectValue, ce = Oi(d.children);
          if (ue != null) {
            var Ve;
            if (d.value != null ? Ve = d.value + "" : Ve = ce, ie = !1, Array.isArray(ue)) {
              for (var ye = 0; ye < ue.length; ye++)
                if ("" + ue[ye] === Ve) {
                  ie = !0;
                  break;
                }
            } else
              ie = "" + ue === Ve;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ie,
              children: ce
            });
          }
        }
        jr(c, d), Wn(c, d);
        var xe = Ti(o.type, c, d, g, this.makeStaticMarkup, this.stack.length === 1), qe = "";
        Er.hasOwnProperty(c) ? xe += "/>" : (xe += ">", qe = "</" + o.type + ">");
        var me, ke = Si(d);
        ke != null ? (me = [], yi.hasOwnProperty(c) && ke.charAt(0) === `
` && (xe += `
`), xe += ke) : me = Ue(d.children);
        var Te = {
          domNamespace: zn(h, o.type),
          type: c,
          children: me,
          childIndex: 0,
          context: s,
          footer: qe
        };
        return Te.debugElementStack = [], this.stack.push(Te), this.previousWasTextNode = !1, xe;
      }, e;
    }();
    function Pi(e, t) {
      var n = new rn(e, !1, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Ai(e, t) {
      var n = new rn(e, !0, t);
      try {
        var o = n.read(1 / 0);
        return o;
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
    Je.renderToNodeStream = Mi, Je.renderToStaticMarkup = Ai, Je.renderToStaticNodeStream = _i, Je.renderToString = Pi, Je.version = E;
  }()), Je;
}
process.env.NODE_ENV === "production" ? pr.exports = Vi() : pr.exports = qi();
var Bi = pr.exports;
const Yi = /* @__PURE__ */ Ui(Bi);
var bn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, vn = Fe.createContext && /* @__PURE__ */ Fe.createContext(bn), $i = ["attr", "size", "title"];
function Xi(u, l) {
  if (u == null)
    return {};
  var p, E, C = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var F = Object.getOwnPropertySymbols(u);
    for (E = 0; E < F.length; E++)
      p = F[E], l.indexOf(p) === -1 && {}.propertyIsEnumerable.call(u, p) && (C[p] = u[p]);
  }
  return C;
}
function Gi(u, l) {
  if (u == null)
    return {};
  var p = {};
  for (var E in u)
    if ({}.hasOwnProperty.call(u, E)) {
      if (l.indexOf(E) !== -1)
        continue;
      p[E] = u[E];
    }
  return p;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var p = arguments[l];
      for (var E in p)
        ({}).hasOwnProperty.call(p, E) && (u[E] = p[E]);
    }
    return u;
  }, Xt.apply(null, arguments);
}
function gn(u, l) {
  var p = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(C) {
      return Object.getOwnPropertyDescriptor(u, C).enumerable;
    })), p.push.apply(p, E);
  }
  return p;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var p = arguments[l] != null ? arguments[l] : {};
    l % 2 ? gn(Object(p), !0).forEach(function(E) {
      Zi(u, E, p[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(p)) : gn(Object(p)).forEach(function(E) {
      Object.defineProperty(u, E, Object.getOwnPropertyDescriptor(p, E));
    });
  }
  return u;
}
function Zi(u, l, p) {
  return (l = Ki(l)) in u ? Object.defineProperty(u, l, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : u[l] = p, u;
}
function Ki(u) {
  var l = Qi(u, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Qi(u, l) {
  if (typeof u != "object" || !u)
    return u;
  var p = u[Symbol.toPrimitive];
  if (p !== void 0) {
    var E = p.call(u, l || "default");
    if (typeof E != "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function wn(u) {
  return u && u.map((l, p) => /* @__PURE__ */ Fe.createElement(l.tag, Gt({
    key: p
  }, l.attr), wn(l.child)));
}
function xn(u) {
  return (l) => /* @__PURE__ */ Fe.createElement(Ji, Xt({
    attr: Gt({}, u.attr)
  }, l), wn(u.child));
}
function Ji(u) {
  var l = (p) => {
    var {
      attr: E,
      size: C,
      title: F
    } = u, v = Xi(u, $i), I = C || p.size || "1em", T;
    return p.className && (T = p.className), u.className && (T = (T ? T + " " : "") + u.className), /* @__PURE__ */ Fe.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, p.attr, E, v, {
      className: T,
      style: Gt(Gt({
        color: u.color || p.color
      }, p.style), u.style),
      height: I,
      width: I,
      xmlns: "http://www.w3.org/2000/svg"
    }), F && /* @__PURE__ */ Fe.createElement("title", null, F), u.children);
  };
  return vn !== void 0 ? /* @__PURE__ */ Fe.createElement(vn.Consumer, null, (p) => l(p)) : l(bn);
}
function eo(u) {
  return xn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return xn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const Zt = (u) => {
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
  return l.r !== void 0 && l.x !== void 0 && l.y !== void 0 ? "bubble" : l.value !== void 0 && l.x !== void 0 && l.y !== void 0 ? "heatmap" : l.start !== void 0 && l.end !== void 0 ? "rangebar" : l.stage !== void 0 && l.value !== void 0 ? "funnel" : l.name !== void 0 && l.value !== void 0 && l.category === void 0 ? "treemap" : l.category !== void 0 && l.value !== void 0 ? "polararea" : l.label !== void 0 && l.value !== void 0 ? "donut" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : typeof l.x == "string" && !isNaN(Date.parse(l.x)) ? "line" : (l.x !== void 0 && l.y !== void 0, "bar");
}, kn = {
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
}, yn = (u, l) => {
  const p = kn[u] || "xy";
  let E = [], C = [], F = [];
  if (!l || l.length === 0)
    return { series: E, labels: C, categories: F };
  const v = l[0], I = Object.keys(v).filter((S) => typeof v[S] == "number"), M = Object.keys(v).filter((S) => typeof v[S] == "string")[0] || "x", _ = I[0] || "y";
  switch (p) {
    case "circular":
      E = l.map((S) => Number(S.value ?? S.y ?? S[_] ?? S)), C = l.map((S) => String(S.label ?? S.category ?? S.name ?? S[M] ?? ""));
      break;
    case "category":
      F = l.map((S) => String(S.x ?? S.category ?? S.stage ?? S[M] ?? "")), E = I.length > 1 && u !== "funnel" ? I.map((S) => ({ name: S, data: l.map((z) => z[S] ?? 0) })) : [{ name: "Series 1", data: l.map((S) => S.y ?? S.value ?? S[_] ?? 0) }];
      break;
    case "xy":
    default:
      E = I.length > 1 ? I.map((S) => ({
        name: S,
        data: l.map((z) => ({ x: z.x ?? z[M], y: z[S] ?? 0 }))
      })) : [{
        name: "Series 1",
        data: l.map((S) => ({
          x: S.x ?? S[M],
          y: S.y ?? S.value ?? S[_] ?? 0,
          ...u === "bubble" && { z: S.z ?? S.r ?? 15 }
        }))
      }];
      break;
  }
  return { series: E, labels: C, categories: F };
}, ro = (u, l) => {
  if (!l || !Array.isArray(l) || l.length === 0)
    return [];
  if (Array.isArray(l[0])) {
    const F = l, v = [];
    let I = [], T = [];
    const M = "line";
    return F.forEach((_, S) => {
      var ve, oe;
      const z = Array.isArray(u) ? u[S] ?? u[0] : typeof u == "string" ? u : Zt(_), K = yn(z, _);
      K.series && Array.isArray(K.series) && K.series.forEach((P) => {
        v.push({
          ...P,
          // Attach per-series type so ApexCharts renders mixed correctly
          type: z,
          name: P.name || `Series ${v.length + 1}`
        });
      }), I.length === 0 && ((ve = K.labels) != null && ve.length) && (I = K.labels), T.length === 0 && ((oe = K.categories) != null && oe.length) && (T = K.categories);
    }), [
      {
        type: M,
        series: v,
        labels: I,
        categories: T
      }
    ];
  }
  const p = l, E = typeof u == "string" ? u : Zt(p), C = yn(E, p);
  return [
    {
      type: E,
      ...C
    }
  ];
}, ao = Ni(
  ({ data: u, type: l, options: p = {}, height: E = 350, title: C }, F) => {
    const v = $t(null), I = $t(null), T = $t(null), M = $t(null), [_, S] = Hi(!1), z = un(
      () => Yi.renderToString(
        /* @__PURE__ */ gt(eo, { size: 14, style: { color: "#9ca3af", marginTop: "5px", marginRight: "4px" } })
      ),
      []
    ), K = un(() => l || (Array.isArray(u[0]) ? u.map((P) => Zt(P)) : Zt(u)), [u, l]), ve = (P) => {
      const U = String(P).toLowerCase();
      return U === "column" ? "bar" : U === "rangebar" ? "rangeBar" : U === "funnel" ? "bar" : U;
    }, oe = (P) => {
      var X, Ye, be, je, ze;
      const U = ro(l, u);
      if (!U || U.length === 0)
        return { series: [] };
      const {
        type: fe,
        series: A,
        labels: ee,
        categories: Ee
      } = U[0], ge = String(fe).toLowerCase(), de = kn[ge] || "xy", H = de === "circular", B = ge === "radar", De = H ? (X = A[0]) != null && X.data ? A[0].data : Array.isArray(A) && typeof A[0] != "object" ? A : [] : A;
      return {
        ...p,
        chart: {
          id: P ? "vizly-modal-chart" : "vizly-main-chart",
          type: ve(ge),
          height: "100%",
          animations: { enabled: !P },
          toolbar: {
            show: !0,
            tools: {
              customIcons: P ? [] : [{
                icon: z,
                index: 6,
                title: "Expand",
                class: "custom-icon",
                click: () => S(!0)
              }]
            }
          },
          ...p.chart
        },
        series: De,
        // Radar and Circular charts use labels
        labels: H || B ? ee != null && ee.length ? ee : Ee : void 0,
        xaxis: {
          // FORCE 'category' for bar/radar/funnel/heatmap
          type: de === "category" || de === "heatmap" || de === "range" ? "category" : ((Ye = p.xaxis) == null ? void 0 : Ye.type) || "category",
          categories: Ee != null && Ee.length ? Ee : void 0,
          ...p.xaxis
        },
        plotOptions: {
          ...p.plotOptions,
          bar: {
            horizontal: ge === "funnel" || ge === "rangebar",
            isFunnel: ge === "funnel",
            ...(be = p.plotOptions) == null ? void 0 : be.bar
          }
        },
        title: {
          text: typeof C == "string" ? C : (C == null ? void 0 : C.text) || ((je = p.title) == null ? void 0 : je.text),
          align: typeof C == "object" ? C.align : ((ze = p.title) == null ? void 0 : ze.align) || "left"
        },
        tooltip: { theme: "dark", ...p.tooltip }
      };
    };
    return cn(() => {
      let P = !0;
      const U = v.current;
      return U ? ((async () => {
        if (T.current)
          try {
            await T.current.destroy();
          } catch {
          }
        if (!P)
          return;
        const A = oe(!1);
        U.innerHTML = "", T.current = new fn(U, A), T.current.render().catch((ee) => console.error("Render error:", ee));
      })(), () => {
        var A;
        P = !1, (A = T.current) == null || A.destroy(), T.current = null;
      }) : void 0;
    }, [u, K, p, C]), cn(() => {
      if (_ && I.current) {
        const P = oe(!0), U = setTimeout(() => {
          M.current && M.current.destroy(), M.current = new fn(I.current, P), M.current.render();
        }, 150);
        return () => {
          var fe;
          clearTimeout(U), (fe = M.current) == null || fe.destroy(), M.current = null;
        };
      }
    }, [_]), Wi(F, () => ({
      zoomIn: () => {
        var P;
        return (P = T.current) == null ? void 0 : P.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var P;
        return (P = T.current) == null ? void 0 : P.zoomX(void 0, void 0);
      },
      reset: () => {
        var P;
        return (P = T.current) == null ? void 0 : P.resetSeries();
      },
      toggleFullscreen: () => S(!_)
    })), /* @__PURE__ */ ln("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ gt("div", { ref: v, style: { height: "100%", width: "100%" } }),
      _ && /* @__PURE__ */ gt("div", { style: { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }, children: /* @__PURE__ */ ln("div", { style: { width: "90%", height: "80%", background: "#fff", borderRadius: "12px", padding: "40px", position: "relative" }, children: [
        /* @__PURE__ */ gt("button", { onClick: () => S(!1), style: { position: "absolute", top: 15, right: 15, border: "none", background: "none", cursor: "pointer" }, children: /* @__PURE__ */ gt(to, { size: 20 }) }),
        /* @__PURE__ */ gt("div", { ref: I, style: { height: "100%", width: "100%" } })
      ] }) })
    ] });
  }
);
export {
  ao as VizlyChart
};
