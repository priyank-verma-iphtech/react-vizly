import { jsx as xt, jsxs as dr } from "react/jsx-runtime";
import ze, { forwardRef as Ni, useRef as Xt, useState as Hi, useMemo as Ui, useCallback as un, useEffect as cn, useImperativeHandle as Wi } from "react";
import fn from "apexcharts";
function Vi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var vr = { exports: {} }, it = {};
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
  function D() {
    try {
      if (!Object.assign)
        return !1;
      var M = new String("abc");
      if (M[5] = "de", Object.getOwnPropertyNames(M)[0] === "5")
        return !1;
      for (var v = {}, I = 0; I < 10; I++)
        v["_" + String.fromCharCode(I)] = I;
      var O = Object.getOwnPropertyNames(v).map(function(P) {
        return v[P];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(P) {
        p[P] = P;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = D() ? Object.assign : function(M, v) {
    for (var I, O = E(M), p, P = 1; P < arguments.length; P++) {
      I = Object(arguments[P]);
      for (var F in I)
        l.call(I, F) && (O[F] = I[F]);
      if (u) {
        p = u(I);
        for (var G = 0; G < p.length; G++)
          g.call(I, p[G]) && (O[p[G]] = I[p[G]]);
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
    return it;
  pn = 1;
  var u = mn(), l = ze;
  function g(r) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      o += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, D = 60107, M = 60108, v = 60114, I = 60109, O = 60110, p = 60112, P = 60113, F = 60120, G = 60115, ae = 60116, Q = 60121, T = 60117, H = 60119, j = 60129, te = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var z = Symbol.for;
    E = z("react.portal"), D = z("react.fragment"), M = z("react.strict_mode"), v = z("react.profiler"), I = z("react.provider"), O = z("react.context"), p = z("react.forward_ref"), P = z("react.suspense"), F = z("react.suspense_list"), G = z("react.memo"), ae = z("react.lazy"), Q = z("react.block"), T = z("react.fundamental"), H = z("react.scope"), j = z("react.debug_trace_mode"), te = z("react.legacy_hidden");
  }
  function Y(r) {
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
      case P:
        return "Suspense";
      case F:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case O:
          return (r.displayName || "Context") + ".Consumer";
        case I:
          return (r._context.displayName || "Context") + ".Provider";
        case p:
          var o = r.render;
          return o = o.displayName || o.name || "", r.displayName || (o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef");
        case G:
          return Y(r.type);
        case Q:
          return Y(r._render);
        case ae:
          o = r._payload, r = r._init;
          try {
            return Y(r(o));
          } catch {
          }
      }
    return null;
  }
  var Se = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Le = {};
  function ve(r, o) {
    for (var i = r._threadCount | 0; i <= o; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function W(r, o, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ve(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = o[k];
      o = i;
    } else
      o = Le;
    return o;
  }
  for (var V = new Uint16Array(16), Ee = 0; 15 > Ee; Ee++)
    V[Ee] = Ee + 1;
  V[15] = 0;
  var Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ot = Object.prototype.hasOwnProperty, Oe = {}, Ze = {};
  function Ne(r) {
    return ot.call(Ze, r) ? !0 : ot.call(Oe, r) ? !1 : Z.test(r) ? Ze[r] = !0 : (Oe[r] = !0, !1);
  }
  function Ke(r, o, i, f) {
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
  function Qe(r, o, i, f) {
    if (o === null || typeof o > "u" || Ke(r, o, i, f))
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
  function $(r, o, i, f, k, w, b) {
    this.acceptsBooleans = o === 2 || o === 3 || o === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = o, this.sanitizeURL = w, this.removeEmptyString = b;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    q[r] = new $(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var o = r[0];
    q[o] = new $(o, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    q[r] = new $(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    q[r] = new $(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    q[r] = new $(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    q[r] = new $(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    q[r] = new $(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    q[r] = new $(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    q[r] = new $(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var Pe = /[\-:]([a-z])/g;
  function Ae(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var o = r.replace(
      Pe,
      Ae
    );
    q[o] = new $(o, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var o = r.replace(Pe, Ae);
    q[o] = new $(o, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var o = r.replace(Pe, Ae);
    q[o] = new $(o, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    q[r] = new $(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    q[r] = new $(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Me = /["'&<>]/;
  function ge(r) {
    if (typeof r == "boolean" || typeof r == "number")
      return "" + r;
    r = "" + r;
    var o = Me.exec(r);
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
    var i = q.hasOwnProperty(r) ? q[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Qe(r, o, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && o === !0 ? r + '=""' : (i.sanitizeURL && (o = "" + o), r + '="' + (ge(o) + '"'))) : Ne(r) ? r + '="' + (ge(o) + '"') : "";
  }
  function Ue(r, o) {
    return r === o && (r !== 0 || 1 / r === 1 / o) || r !== r && o !== o;
  }
  var st = typeof Object.is == "function" ? Object.is : Ue, le = null, _e = null, _ = null, We = !1, Je = !1, Re = null, Fe = 0;
  function Ce() {
    if (le === null)
      throw Error(g(321));
    return le;
  }
  function kt() {
    if (0 < Fe)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ve() {
    return _ === null ? _e === null ? (We = !1, _e = _ = kt()) : (We = !0, _ = _e) : _.next === null ? (We = !1, _ = _.next = kt()) : (We = !0, _ = _.next), _;
  }
  function _t(r, o, i, f) {
    for (; Je; )
      Je = !1, Fe += 1, _ = null, i = r(o, f);
    return lt(), i;
  }
  function lt() {
    le = null, Je = !1, _e = null, Fe = 0, _ = Re = null;
  }
  function ut(r, o) {
    return typeof o == "function" ? o(r) : o;
  }
  function St(r, o, i) {
    if (le = Ce(), _ = Ve(), We) {
      var f = _.queue;
      if (o = f.dispatch, Re !== null && (i = Re.get(f), i !== void 0)) {
        Re.delete(f), f = _.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return _.memoizedState = f, [f, o];
      }
      return [_.memoizedState, o];
    }
    return r = r === ut ? typeof o == "function" ? o() : o : i !== void 0 ? i(o) : o, _.memoizedState = r, r = _.queue = { last: null, dispatch: null }, r = r.dispatch = et.bind(null, le, r), [_.memoizedState, r];
  }
  function Et(r, o) {
    if (le = Ce(), _ = Ve(), o = o === void 0 ? null : o, _ !== null) {
      var i = _.memoizedState;
      if (i !== null && o !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < o.length; k++)
              if (!st(o[k], f[k])) {
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
  function et(r, o, i) {
    if (!(25 > Fe))
      throw Error(g(301));
    if (r === le)
      if (Je = !0, r = { action: i, next: null }, Re === null && (Re = /* @__PURE__ */ new Map()), i = Re.get(o), i === void 0)
        Re.set(o, r);
      else {
        for (o = i; o.next !== null; )
          o = o.next;
        o.next = r;
      }
  }
  function Ot() {
  }
  var X = null, ct = { readContext: function(r) {
    var o = X.threadID;
    return ve(r, o), r[o];
  }, useContext: function(r) {
    Ce();
    var o = X.threadID;
    return ve(r, o), r[o];
  }, useMemo: Et, useReducer: St, useRef: function(r) {
    le = Ce(), _ = Ve();
    var o = _.memoizedState;
    return o === null ? (r = { current: r }, _.memoizedState = r) : o;
  }, useState: function(r) {
    return St(ut, r);
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
    return (X.identifierPrefix || "") + "R:" + (X.uniqueID++).toString(36);
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
  var Rt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, ft = u({ menuitem: !0 }, Rt), pe = {
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
  }, Ct = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pe).forEach(function(r) {
    Ct.forEach(function(o) {
      o = o + r.charAt(0).toUpperCase() + r.substring(1), pe[o] = pe[r];
    });
  });
  var qe = /([A-Z])/g, dt = /^ms-/, be = l.Children.toArray, pt = Se.ReactCurrentDispatcher, Ft = { listing: !0, pre: !0, textarea: !0 }, tt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, jt = {}, It = {};
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
      throw Error(g(152, Y(o) || "Component"));
  }
  function Jt(r, o, i) {
    function f(b, S) {
      var m = S.prototype && S.prototype.isReactComponent, ne = W(S, o, i, m), J = [], ie = !1, U = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (J === null)
          return null;
      }, enqueueReplaceState: function(Dt, L) {
        ie = !0, J = [L];
      }, enqueueSetState: function(Dt, L) {
        if (J === null)
          return null;
        J.push(L);
      } };
      if (m) {
        if (m = new S(b.props, ne, U), typeof S.getDerivedStateFromProps == "function") {
          var A = S.getDerivedStateFromProps.call(null, b.props, m.state);
          A != null && (m.state = u({}, m.state, A));
        }
      } else if (le = {}, m = S(
        b.props,
        ne,
        U
      ), m = _t(S, b.props, m, ne), m == null || m.render == null) {
        r = m, Tt(r, S);
        return;
      }
      if (m.props = b.props, m.context = ne, m.updater = U, U = m.state, U === void 0 && (m.state = U = null), typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")
        if (typeof m.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && m.UNSAFE_componentWillMount(), J.length) {
          U = J;
          var ee = ie;
          if (J = null, ie = !1, ee && U.length === 1)
            m.state = U[0];
          else {
            A = ee ? U[0] : m.state;
            var Ie = !0;
            for (ee = ee ? 1 : 0; ee < U.length; ee++) {
              var ue = U[ee];
              ue = typeof ue == "function" ? ue.call(m, A, b.props, ne) : ue, ue != null && (Ie ? (Ie = !1, A = u({}, A, ue)) : u(A, ue));
            }
            m.state = A;
          }
        } else
          J = null;
      if (r = m.render(), Tt(r, S), typeof m.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var ce = m.getChildContext();
        for (var he in ce)
          if (!(he in b))
            throw Error(g(108, Y(S) || "Unknown", he));
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
  var ht = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== D ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : be(i)) : i = be(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Le, footer: "" };
      var w = V[0];
      if (w === 0) {
        var b = V;
        w = b.length;
        var S = 2 * w;
        if (!(65536 >= S))
          throw Error(g(304));
        var m = new Uint16Array(S);
        for (m.set(b), V = m, V[0] = w + 1, b = w; b < S - 1; b++)
          V[b] = b + 1;
        V[S - 1] = 0;
      } else
        V[0] = V[w];
      this.threadID = w, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var o = r.prototype;
    return o.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        V[i] = V[0], V[0] = i;
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
      var f = X;
      X = this;
      var k = pt.current;
      pt.current = ct;
      try {
        for (var w = [""], b = !1; w[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            V[S] = V[0], V[0] = S;
            break;
          }
          var m = this.stack[this.stack.length - 1];
          if (b || m.childIndex >= m.children.length) {
            var ne = m.footer;
            if (ne !== "" && (this.previousWasTextNode = !1), this.stack.pop(), m.type === "select")
              this.currentSelectValue = null;
            else if (m.type != null && m.type.type != null && m.type.type.$$typeof === I)
              this.popProvider(m.type);
            else if (m.type === P) {
              this.suspenseDepth--;
              var J = w.pop();
              if (b) {
                b = !1;
                var ie = m.fallbackFrame;
                if (!ie)
                  throw Error(g(303));
                this.stack.push(ie), w[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                w[this.suspenseDepth] += J;
            }
            w[this.suspenseDepth] += ne;
          } else {
            var U = m.children[m.childIndex++], A = "";
            try {
              A += this.render(U, m.context, m.domNamespace);
            } catch (ee) {
              throw ee != null && typeof ee.then == "function" ? Error(g(294)) : ee;
            } finally {
            }
            w.length <= this.suspenseDepth && w.push(""), w[this.suspenseDepth] += A;
          }
        }
        return w[0];
      } finally {
        pt.current = k, X = f, lt();
      }
    }, o.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? ge(k) : this.previousWasTextNode ? "<!-- -->" + ge(k) : (this.previousWasTextNode = !0, ge(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? g(257) : g(258, k.toString()));
        return i = be(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var w = i.type;
      if (typeof w == "string")
        return this.renderDOM(i, f, k);
      switch (w) {
        case te:
        case j:
        case M:
        case v:
        case F:
        case D:
          return i = be(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case P:
          throw Error(g(294));
        case H:
          throw Error(g(343));
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case p:
            le = {};
            var b = w.render(i.props, i.ref);
            return b = _t(w.render, i.props, b, i.ref), b = be(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case G:
            return i = [l.createElement(w.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case I:
            return w = be(i.props.children), k = { type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case O:
            w = i.type, b = i.props;
            var S = this.threadID;
            return ve(w, S), w = be(b.children(w[S])), this.stack.push({ type: i, domNamespace: k, children: w, childIndex: 0, context: f, footer: "" }), "";
          case T:
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
        if (!tt.test(w))
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
          var J = b.value != null ? b.value + "" : ne;
          if (S = !1, Array.isArray(m)) {
            for (var ie = 0; ie < m.length; ie++)
              if ("" + m[ie] === J) {
                S = !0;
                break;
              }
          } else
            S = "" + m === J;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: ne }
          );
        }
      }
      if (S = b) {
        if (ft[w] && (S.children != null || S.dangerouslySetInnerHTML != null))
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
      S = b, m = this.makeStaticMarkup, ne = this.stack.length === 1, J = "<" + i.type;
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
          var U = S[L];
          if (U != null) {
            if (L === "style") {
              var A = void 0, ee = "", Ie = "";
              for (A in U)
                if (U.hasOwnProperty(A)) {
                  var ue = A.indexOf("--") === 0, ce = U[A];
                  if (ce != null) {
                    if (ue)
                      var he = A;
                    else if (he = A, It.hasOwnProperty(he))
                      he = It[he];
                    else {
                      var Dt = he.replace(qe, "-$1").toLowerCase().replace(dt, "-ms-");
                      he = It[he] = Dt;
                    }
                    ee += Ie + he + ":", Ie = A, ue = ce == null || typeof ce == "boolean" || ce === "" ? "" : ue || typeof ce != "number" || ce === 0 || pe.hasOwnProperty(Ie) && pe[Ie] ? ("" + ce).trim() : ce + "px", ee += ue, Ie = ";";
                  }
                }
              U = ee || null;
            }
            A = null, ie ? Nt.hasOwnProperty(L) || (A = L, A = Ne(A) && U != null ? A + '="' + (ge(U) + '"') : "") : A = He(L, U), A && (J += " " + A);
          }
        }
      m || ne && (J += ' data-reactroot=""');
      var L = J;
      S = "", Rt.hasOwnProperty(w) ? L += "/>" : (L += ">", S = "</" + i.type + ">");
      e: {
        if (m = b.dangerouslySetInnerHTML, m != null) {
          if (m.__html != null) {
            m = m.__html;
            break e;
          }
        } else if (m = b.children, typeof m == "string" || typeof m == "number") {
          m = ge(m);
          break e;
        }
        m = null;
      }
      return m != null ? (b = [], Ft.hasOwnProperty(w) && m.charAt(0) === `
` && (L += `
`), L += m) : b = be(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: w, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, L;
    }, r;
  }();
  return it.renderToNodeStream = function() {
    throw Error(g(207));
  }, it.renderToStaticMarkup = function(r, o) {
    r = new ht(r, !0, o);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, it.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, it.renderToString = function(r, o) {
    r = new ht(r, !1, o);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, it.version = "17.0.2", it;
}
var at = {};
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
    var u = ze, l = mn();
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
        I("warn", e, n);
      }
    }
    function v(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        I("error", e, n);
      }
    }
    function I(e, t, n) {
      {
        var a = D.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var h = n.map(function(c) {
          return "" + c;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var O = 60106, p = 60107, P = 60108, F = 60114, G = 60109, ae = 60110, Q = 60112, T = 60113, H = 60120, j = 60115, te = 60116, z = 60121, Y = 60117, Se = 60119, Le = 60129, ve = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var W = Symbol.for;
      W("react.element"), O = W("react.portal"), p = W("react.fragment"), P = W("react.strict_mode"), F = W("react.profiler"), G = W("react.provider"), ae = W("react.context"), Q = W("react.forward_ref"), T = W("react.suspense"), H = W("react.suspense_list"), j = W("react.memo"), te = W("react.lazy"), z = W("react.block"), W("react.server.block"), Y = W("react.fundamental"), Se = W("react.scope"), W("react.opaque.id"), Le = W("react.debug_trace_mode"), W("react.offscreen"), ve = W("react.legacy_hidden");
    }
    function V(e, t, n) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
    }
    function Ee(e) {
      return e.displayName || "Context";
    }
    function Z(e) {
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
        case P:
          return "StrictMode";
        case T:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            var t = e;
            return Ee(t) + ".Consumer";
          case G:
            var n = e;
            return Ee(n._context) + ".Provider";
          case Q:
            return V(e, e.render, "ForwardRef");
          case j:
            return Z(e.type);
          case z:
            return Z(e._render);
          case te: {
            var a = e, s = a._payload, h = a._init;
            try {
              return Z(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ot = !1, Oe = 0, Ze, Ne, Ke, Qe, $, q, Pe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function Me() {
      {
        if (Oe === 0) {
          Ze = console.log, Ne = console.info, Ke = console.warn, Qe = console.error, $ = console.group, q = console.groupCollapsed, Pe = console.groupEnd;
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
        Oe++;
      }
    }
    function ge() {
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
              value: Ne
            }),
            warn: l({}, e, {
              value: Ke
            }),
            error: l({}, e, {
              value: Qe
            }),
            group: l({}, e, {
              value: $
            }),
            groupCollapsed: l({}, e, {
              value: q
            }),
            groupEnd: l({}, e, {
              value: Pe
            })
          });
        }
        Oe < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var He = D.ReactCurrentDispatcher, Ue;
    function st(e, t, n) {
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
    var le = !1, _e;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new _();
    }
    function We(e, t) {
      if (!e || le)
        return "";
      {
        var n = _e.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      le = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = He.current, He.current = null, Me();
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
            } catch (B) {
              a = B;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (B) {
              a = B;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            a = B;
          }
          e();
        }
      } catch (B) {
        if (B && a && typeof B.stack == "string") {
          for (var y = B.stack.split(`
`), d = a.stack.split(`
`), R = y.length - 1, C = d.length - 1; R >= 1 && C >= 0 && y[R] !== d[C]; )
            C--;
          for (; R >= 1 && C >= 0; R--, C--)
            if (y[R] !== d[C]) {
              if (R !== 1 || C !== 1)
                do
                  if (R--, C--, C < 0 || y[R] !== d[C]) {
                    var K = `
` + y[R].replace(" at new ", " at ");
                    return typeof e == "function" && _e.set(e, K), K;
                  }
                while (R >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        le = !1, He.current = h, ge(), Error.prepareStackTrace = s;
      }
      var re = e ? e.displayName || e.name : "", x = re ? st(re) : "";
      return typeof e == "function" && _e.set(e, x), x;
    }
    function Je(e, t, n) {
      return We(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Fe(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return We(e, Re(e));
      if (typeof e == "string")
        return st(e);
      switch (e) {
        case T:
          return st("Suspense");
        case H:
          return st("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return Je(e.render);
          case j:
            return Fe(e.type, t, n);
          case z:
            return Je(e._render);
          case te: {
            var a = e, s = a._payload, h = a._init;
            try {
              return Fe(h(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = {}, kt = D.ReactDebugCurrentFrame;
    function Ve(e) {
      if (e) {
        var t = e._owner, n = Fe(e.type, e._source, t ? t.type : null);
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
            y && !(y instanceof Error) && (Ve(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, c, typeof y), Ve(null)), y instanceof Error && !(y.message in Ce) && (Ce[y.message] = !0, Ve(s), v("Failed %s type: %s", n, y.message), Ve(null));
          }
      }
    }
    var lt;
    lt = /* @__PURE__ */ new Set();
    var ut = {};
    Object.freeze(ut);
    function St(e, t) {
      var n = e.contextTypes;
      if (!n)
        return ut;
      var a = {};
      for (var s in n)
        a[s] = t[s];
      return a;
    }
    function Et(e, t, n) {
      _t(e, t, n, "Component");
    }
    function et(e, t) {
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
          if (!h && !lt.has(e)) {
            lt.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === G ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Z(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return et(s, n), s[n];
        {
          var y = St(e, t);
          return e.contextTypes && Et(e.contextTypes, y, "context"), y;
        }
      } else {
        var d = St(e, t);
        return e.contextTypes && Et(e.contextTypes, d, "context"), d;
      }
    }
    for (var X = new Uint16Array(16), ct = 0; ct < 15; ct++)
      X[ct] = ct + 1;
    X[15] = 0;
    function Kt() {
      var e = X, t = e.length, n = t * 2;
      if (!(n <= 65536))
        throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
      var a = new Uint16Array(n);
      a.set(e), X = a, X[0] = t + 1;
      for (var s = t; s < n - 1; s++)
        X[s] = s + 1;
      return X[n - 1] = 0, t;
    }
    function Qt() {
      var e = X[0];
      return e === 0 ? Kt() : (X[0] = X[e], e);
    }
    function Rt(e) {
      X[e] = X[0], X[0] = e;
    }
    var ft = 0, pe = 1, Ct = 2, qe = 3, dt = 4, be = 5, pt = 6, Ft = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", tt = Ft + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", jt = "data-reactroot", It = new RegExp("^[" + Ft + "][" + tt + "]*$"), zt = Object.prototype.hasOwnProperty, Lt = {}, Nt = {};
    function Tt(e) {
      return zt.call(Nt, e) ? !0 : zt.call(Lt, e) ? !1 : It.test(e) ? (Nt[e] = !0, !0) : (Lt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function Jt(e, t, n) {
      return t !== null ? t.type === ft : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ht(e, t, n, a) {
      if (n !== null && n.type === ft)
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
      if (t === null || typeof t > "u" || ht(e, t, n, a))
        return !0;
      if (a)
        return !1;
      if (n !== null)
        switch (n.type) {
          case qe:
            return !t;
          case dt:
            return t === !1;
          case be:
            return isNaN(t);
          case pt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function o(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, a, s, h, c) {
      this.acceptsBooleans = t === Ct || t === qe || t === dt, this.attributeName = a, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = c;
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
        Ct,
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
        Ct,
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
    }), ["rowSpan", "start"].forEach(function(e) {
      f[e] = new i(
        e,
        be,
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
    function J(e) {
      !ne && m.test(e) && (ne = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ie = /["'&<>]/;
    function U(e) {
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
      return typeof e == "boolean" || typeof e == "number" ? "" + e : U(e);
    }
    function ee(e) {
      return '"' + A(e) + '"';
    }
    function Ie() {
      return jt + '=""';
    }
    function ue(e, t) {
      var n = o(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var a = n.attributeName, s = n.type;
        return s === qe || s === dt && t === !0 ? a + '=""' : (n.sanitizeURL && (t = "" + t, J(t)), a + "=" + ee(t));
      } else if (Tt(e))
        return e + "=" + ee(t);
      return "";
    }
    function ce(e, t) {
      return !Tt(e) || t == null ? "" : e + "=" + ee(t);
    }
    function he(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Dt = typeof Object.is == "function" ? Object.is : he, L = null, Ht = null, N = null, Pt = !1, Ut = !1, Be = null, Wt = 0, Sn = 25, Te = !1, vt;
    function rt() {
      if (L === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Te && v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), L;
    }
    function En(e, t) {
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", vt), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, vt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
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
      L = e, Te = !1;
    }
    function mr(e, t, n, a) {
      for (; Ut; )
        Ut = !1, Wt += 1, N = null, n = e(t, a);
      return br(), n;
    }
    function br() {
      Te = !1, L = null, Ut = !1, Ht = null, Wt = 0, Be = null, N = null;
    }
    function On(e, t) {
      var n = gt.threadID;
      return et(e, n), Te && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e[n];
    }
    function Rn(e, t) {
      vt = "useContext", rt();
      var n = gt.threadID;
      return et(e, n), e[n];
    }
    function tr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Cn(e) {
      return vt = "useState", wr(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function wr(e, t, n) {
      if (e !== tr && (vt = "useReducer"), L = rt(), N = er(), Pt) {
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
        var R;
        e === tr ? R = typeof t == "function" ? t() : t : R = n !== void 0 ? n(t) : t, Te = !1, N.memoizedState = R;
        var C = N.queue = {
          last: null,
          dispatch: null
        }, K = C.dispatch = Dn.bind(null, L, C);
        return [N.memoizedState, K];
      }
    }
    function xr(e, t) {
      L = rt(), N = er();
      var n = t === void 0 ? null : t;
      if (N !== null) {
        var a = N.memoizedState;
        if (a !== null && n !== null) {
          var s = a[1];
          if (En(n, s))
            return a[0];
        }
      }
      Te = !0;
      var h = e();
      return Te = !1, N.memoizedState = [h, n], h;
    }
    function In(e) {
      L = rt(), N = er();
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
      vt = "useLayoutEffect", v("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
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
    function Pn(e, t) {
      return xr(function() {
        return e;
      }, t);
    }
    function An(e, t, n) {
      return rt(), t(e._source);
    }
    function Mn(e) {
      return rt(), e;
    }
    function _n() {
      rt();
      var e = function(t) {
        t();
      };
      return [e, !1];
    }
    function Fn() {
      return (gt.identifierPrefix || "") + "R:" + (gt.uniqueID++).toString(36);
    }
    function rr() {
    }
    var gt = null;
    function kr(e) {
      gt = e;
    }
    var jn = {
      readContext: On,
      useContext: Rn,
      useMemo: xr,
      useReducer: wr,
      useRef: In,
      useState: Cn,
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
      var Xn = /^(?:webkit|moz|o)[A-Z]/, Gn = /^-ms-/, Zn = /-(.)/g, Cr = /;\s*$/, yt = {}, sr = {}, Ir = !1, Tr = !1, Kn = function(e) {
        return e.replace(Zn, function(t, n) {
          return n.toUpperCase();
        });
      }, Qn = function(e) {
        yt.hasOwnProperty(e) && yt[e] || (yt[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kn(e.replace(Gn, "ms-"))
        ));
      }, Jn = function(e) {
        yt.hasOwnProperty(e) && yt[e] || (yt[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ei = function(e, t) {
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Cr, "")));
      }, ti = function(e, t) {
        Ir || (Ir = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ri = function(e, t) {
        Tr || (Tr = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Rr = function(e, t) {
        e.indexOf("-") > -1 ? Qn(e) : Xn.test(e) ? Jn(e) : Cr.test(t) && ei(e, t), typeof t == "number" && (isNaN(t) ? ti(e, t) : isFinite(t) || ri(e, t));
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
    }, mt = {}, ii = new RegExp("^(aria)-[" + tt + "]*$"), ai = new RegExp("^(aria)[A-Z][" + tt + "]*$"), oi = Object.prototype.hasOwnProperty;
    function si(e, t) {
      {
        if (oi.call(mt, t) && mt[t])
          return !0;
        if (ai.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), a = Dr.hasOwnProperty(n) ? n : null;
          if (a == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), mt[t] = !0, !0;
          if (t !== a)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), mt[t] = !0, !0;
        }
        if (ii.test(t)) {
          var s = t.toLowerCase(), h = Dr.hasOwnProperty(s) ? s : null;
          if (h == null)
            return mt[t] = !0, !1;
          if (t !== h)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), mt[t] = !0, !0;
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
      var oe = {}, fi = Object.prototype.hasOwnProperty, _r = /^on./, di = /^on[^A-Z]/, pi = new RegExp("^(aria)-[" + tt + "]*$"), hi = new RegExp("^(aria)[A-Z][" + tt + "]*$");
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
        var d = o(t), R = d !== null && d.type === ft;
        if (Ar.hasOwnProperty(s)) {
          var C = Ar[s];
          if (C !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, C), oe[t] = !0, !0;
        } else if (!R && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), oe[t] = !0, !0;
        return typeof n == "boolean" && ht(t, n, d, !1) ? (n ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), oe[t] = !0, !0) : R ? !0 : ht(t, n, d, !1) ? (oe[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === qe && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), oe[t] = !0), !0);
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
    var Ye = u.Children.toArray, je = [], lr = D.ReactCurrentDispatcher, qt, ur = null, Fr = function() {
      return "";
    }, jr = function(e) {
      return "";
    }, zr = function(e, t) {
    }, Lr = function(e) {
    }, Nr = function(e) {
    }, Hr = function() {
    }, Ur = !1;
    qt = D.ReactDebugCurrentFrame, zr = function(e, t) {
      ui(e, t), ci(e, t), gi(e, t, null);
    }, jr = function(e) {
      return Fe(e.type, e._source, null);
    }, Lr = function(e) {
      je.push(e), je.length === 1 && (ur = qt.getCurrentStack, qt.getCurrentStack = Fr);
    }, Nr = function(e) {
      var t = je[je.length - 1], n = t[t.length - 1];
      n.debugElementStack.push(e);
    }, Hr = function() {
      je.pop(), je.length === 0 && (qt.getCurrentStack = ur, ur = null);
    }, Fr = function() {
      if (je.length === 0)
        return "";
      for (var e = je[je.length - 1], t = "", n = e.length - 1; n >= 0; n--)
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
        var n = e.constructor, a = n && Z(n) || "ReactClass", s = a + "." + t;
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
    function Oi(e) {
      if (e == null)
        return e;
      var t = "";
      return u.Children.forEach(e, function(n) {
        n != null && (t += n, !Yr && typeof n != "string" && typeof n != "number" && (Yr = !0, v("Only strings and numbers are supported as <option> children.")));
      }), t;
    }
    var Ri = Object.prototype.hasOwnProperty, Ci = "style", Ii = {
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
            d === Ci && (R = xi(R));
            var C = null;
            y ? Ii.hasOwnProperty(d) || (C = ce(d, R)) : C = ue(d, R), C && (c += " " + C);
          }
        }
      return s || h && (c += " " + Ie()), c;
    }
    function rn(e, t) {
      if (e === void 0)
        throw Error((Z(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Di(e, t, n) {
      for (; u.isValidElement(e); ) {
        var a = e, s = a.type;
        if (Nr(a), typeof s != "function")
          break;
        h(a, s);
      }
      function h(c, y) {
        var d = ki(y), R = Ot(y, t, n, d), C = [], K = !1, re = {
          isMounted: function(Ge) {
            return !1;
          },
          enqueueForceUpdate: function(Ge) {
            if (C === null)
              return tn(Ge, "forceUpdate"), null;
          },
          enqueueReplaceState: function(Ge, wt) {
            K = !0, C = [wt];
          },
          enqueueSetState: function(Ge, wt) {
            if (C === null)
              return tn(Ge, "setState"), null;
            C.push(wt);
          }
        }, x;
        if (d) {
          if (x = new y(c.props, R, re), typeof y.getDerivedStateFromProps == "function") {
            if (x.state === null || x.state === void 0) {
              var B = Z(y) || "Unknown";
              Qr[B] || (v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", B, x.state === null ? "null" : "undefined", B), Qr[B] = !0);
            }
            var se = y.getDerivedStateFromProps.call(null, c.props, x.state);
            if (se === void 0) {
              var fe = Z(y) || "Unknown";
              Kr[fe] || (v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", fe), Kr[fe] = !0);
            }
            se != null && (x.state = l({}, x.state, se));
          }
        } else {
          if (y.prototype && typeof y.prototype.render == "function") {
            var de = Z(y) || "Unknown";
            Xr[de] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", de, de), Xr[de] = !0);
          }
          var $e = {};
          if (yr($e), x = y(c.props, R, re), x = mr(y, c.props, x, R), x != null && x.render != null) {
            var ye = Z(y) || "Unknown";
            Gr[ye] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ye, ye, ye), Gr[ye] = !0);
          }
          if (x == null || x.render == null) {
            e = x, rn(e, y);
            return;
          }
        }
        x.props = c.props, x.context = R, x.updater = re;
        var we = x.state;
        if (we === void 0 && (x.state = we = null), typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function") {
          if (typeof x.componentWillMount == "function") {
            if (x.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Xe = Z(y) || "Unknown";
              Zr[Xe] || (M(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Xe
              ), Zr[Xe] = !0);
            }
            typeof y.getDerivedStateFromProps != "function" && x.componentWillMount();
          }
          if (typeof x.UNSAFE_componentWillMount == "function" && typeof y.getDerivedStateFromProps != "function" && x.UNSAFE_componentWillMount(), C.length) {
            var me = C, xe = K;
            if (C = null, K = !1, xe && me.length === 1)
              x.state = me[0];
            else {
              for (var De = xe ? me[0] : x.state, Bt = !0, bt = xe ? 1 : 0; bt < me.length; bt++) {
                var ke = me[bt], Mt = typeof ke == "function" ? ke.call(x, De, c.props, R) : ke;
                Mt != null && (Bt ? (Bt = !1, De = l({}, De, Mt)) : l(De, Mt));
              }
              x.state = De;
            }
          } else
            C = null;
        }
        e = x.render(), e === void 0 && x.render._isMockFunction && (e = null), rn(e, y);
        var nt;
        {
          if (typeof x.getChildContext == "function") {
            var Yt = y.childContextTypes;
            if (typeof Yt == "object") {
              nt = x.getChildContext();
              for (var $t in nt)
                if (!($t in Yt))
                  throw Error((Z(y) || "Unknown") + '.getChildContext(): key "' + $t + '" is not defined in childContextTypes.');
            } else
              v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", Z(y) || "Unknown");
          }
          nt && (t = l({}, t, nt));
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
          context: ut,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = a, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Rt(this.threadID));
      }, t.pushProvider = function(a) {
        var s = ++this.contextIndex, h = a.type._context, c = this.threadID;
        et(h, c);
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
        var s = gt;
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
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === G) {
                var C = d.type;
                this.popProvider(C);
              } else if (d.type === T) {
                this.suspenseDepth--;
                var K = c.pop();
                if (y) {
                  y = !1;
                  var re = d.fallbackFrame;
                  if (!re)
                    throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                  this.stack.push(re), c[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  c[this.suspenseDepth] += K;
              }
              c[this.suspenseDepth] += R;
              continue;
            }
            var x = d.children[d.childIndex++], B = "";
            Lr(this.stack), d.debugElementStack.length = 0;
            try {
              B += this.render(x, d.context, d.domNamespace);
            } catch (se) {
              if (se != null && typeof se.then == "function") {
                if (!ot)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw se;
            } finally {
              Hr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += B;
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
            var C = Ye(y), K = {
              type: null,
              domNamespace: h,
              children: C,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return K.debugElementStack = [], this.stack.push(K), "";
          }
          var re = y, x = re.type;
          if (typeof x == "string")
            return this.renderDOM(re, s, h);
          switch (x) {
            case ve:
            case Le:
            case P:
            case F:
            case H:
            case p: {
              var B = Ye(y.props.children), se = {
                type: null,
                domNamespace: h,
                children: B,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return se.debugElementStack = [], this.stack.push(se), "";
            }
            case T:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Se:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof x == "object" && x !== null)
            switch (x.$$typeof) {
              case Q: {
                var fe = y, de, $e = {};
                yr($e), de = x.render(fe.props, fe.ref), de = mr(x.render, fe.props, de, fe.ref), de = Ye(de);
                var ye = {
                  type: null,
                  domNamespace: h,
                  children: de,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return ye.debugElementStack = [], this.stack.push(ye), "";
              }
              case j: {
                var we = y, Xe = [u.createElement(x.type, l({
                  ref: we.ref
                }, we.props))], me = {
                  type: null,
                  domNamespace: h,
                  children: Xe,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return me.debugElementStack = [], this.stack.push(me), "";
              }
              case G: {
                var xe = y, De = xe.props, Bt = Ye(De.children), bt = {
                  type: xe,
                  domNamespace: h,
                  children: Bt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return bt.debugElementStack = [], this.pushProvider(xe), this.stack.push(bt), "";
              }
              case ae: {
                var ke = y.type;
                ke._context === void 0 ? ke !== ke.Consumer && (Ur || (Ur = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : ke = ke._context;
                var Mt = y.props, nt = this.threadID;
                et(ke, nt);
                var Yt = ke[nt], $t = Ye(Mt.children(Yt)), Ge = {
                  type: y,
                  domNamespace: h,
                  children: $t,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return Ge.debugElementStack = [], this.stack.push(Ge), "";
              }
              case Y:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case te: {
                var wt = y, an = y.type, Fi = an._payload, ji = an._init, zi = ji(Fi), Li = [u.createElement(zi, l({
                  ref: wt.ref
                }, wt.props))], on = {
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
            var ln = sn ? Z(sn) : null;
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
            var C = d.defaultValue, K = d.children;
            if (K != null) {
              if (v("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(K)) {
                if (!(K.length <= 1))
                  throw Error("<textarea> can only have at most one child.");
                K = K[0];
              }
              C = "" + K;
            }
            C == null && (C = ""), R = C;
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
                var B = Array.isArray(d[x]);
                d.multiple && !B ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.", x) : !d.multiple && B && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", x);
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
            var $e;
            if (d.value != null ? $e = d.value + "" : $e = de, se = !1, Array.isArray(fe)) {
              for (var ye = 0; ye < fe.length; ye++)
                if ("" + fe[ye] === $e) {
                  se = !0;
                  break;
                }
            } else
              se = "" + fe === $e;
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
        var we = Ti(a.type, c, d, y, this.makeStaticMarkup, this.stack.length === 1), Xe = "";
        Or.hasOwnProperty(c) ? we += "/>" : (we += ">", Xe = "</" + a.type + ">");
        var me, xe = Si(d);
        xe != null ? (me = [], yi.hasOwnProperty(c) && xe.charAt(0) === `
` && (we += `
`), we += xe) : me = Ye(d.children);
        var De = {
          domNamespace: zn(h, a.type),
          type: c,
          children: me,
          childIndex: 0,
          context: s,
          footer: Xe
        };
        return De.debugElementStack = [], this.stack.push(De), this.previousWasTextNode = !1, we;
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
    at.renderToNodeStream = Mi, at.renderToStaticMarkup = Ai, at.renderToStaticNodeStream = _i, at.renderToString = Pi, at.version = E;
  }()), at;
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
}, vn = ze.createContext && /* @__PURE__ */ ze.createContext(bn), Xi = ["attr", "size", "title"];
function Gi(u, l) {
  if (u == null)
    return {};
  var g, E, D = Zi(u, l);
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(u);
    for (E = 0; E < M.length; E++)
      g = M[E], l.indexOf(g) === -1 && {}.propertyIsEnumerable.call(u, g) && (D[g] = u[g]);
  }
  return D;
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
    l && (E = E.filter(function(D) {
      return Object.getOwnPropertyDescriptor(u, D).enumerable;
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
  return u && u.map((l, g) => /* @__PURE__ */ ze.createElement(l.tag, Zt({
    key: g
  }, l.attr), wn(l.child)));
}
function xn(u) {
  return (l) => /* @__PURE__ */ ze.createElement(ea, Gt({
    attr: Zt({}, u.attr)
  }, l), wn(u.child));
}
function ea(u) {
  var l = (g) => {
    var {
      attr: E,
      size: D,
      title: M
    } = u, v = Gi(u, Xi), I = D || g.size || "1em", O;
    return g.className && (O = g.className), u.className && (O = (O ? O + " " : "") + u.className), /* @__PURE__ */ ze.createElement("svg", Gt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, g.attr, E, v, {
      className: O,
      style: Zt(Zt({
        color: u.color || g.color
      }, g.style), u.style),
      height: I,
      width: I,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ ze.createElement("title", null, M), u.children);
  };
  return vn !== void 0 ? /* @__PURE__ */ ze.createElement(vn.Consumer, null, (g) => l(g)) : l(bn);
}
function ta(u) {
  return xn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function ra(u) {
  return xn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const kn = {
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
}, na = (u) => !u || u.length < 6 ? !1 : !isNaN(Date.parse(u)) && /\d{4}|\d{2}[-/]\d{2}/.test(u), yn = (u, l) => {
  const g = kn[u] || "xy";
  let E = [], D = [], M = [];
  if (!l || l.length === 0)
    return { series: E, labels: D, categories: M };
  const v = l[0], I = Object.keys(v).filter((p) => typeof v[p] == "number"), O = Object.keys(v).find((p) => typeof v[p] == "string") || "x";
  switch (g) {
    case "circular": {
      E = l.map((p) => Number(p.value ?? p.y ?? p[I[0]] ?? p)), D = l.map((p) => String(p.label ?? p.category ?? p.x ?? ""));
      break;
    }
    case "category": {
      M = l.map(
        (p) => String(p.x ?? p.category ?? p[O])
      ), E = [{
        name: "Series 1",
        data: l.map((p) => Number(p.value ?? p.y ?? p[I[0]] ?? 0))
      }];
      break;
    }
    case "funnel": {
      E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: String(p.stage ?? p.x ?? p.category ?? p[O]),
          y: Number(p.value ?? p.y ?? p[I[0]] ?? 0)
        }))
      }];
      break;
    }
    case "range": {
      E = [{
        name: "Series 1",
        // ← FIX: was missing, caused crash
        data: l.map((p) => {
          const P = p.y ?? (p.open !== void 0 ? [p.open, p.high, p.low, p.close] : p.min !== void 0 ? [p.min, p.max] : p.start !== void 0 ? [p.start, p.end] : void 0);
          return {
            x: String(p.x ?? p.date ?? p.category ?? p[O]),
            y: P
          };
        })
      }];
      break;
    }
    case "heatmap": {
      E = [...new Set(l.map((P) => P.group ?? "Series 1"))].map((P) => ({
        name: String(P),
        data: l.filter((F) => (F.group ?? "Series 1") === P).map((F) => ({
          x: String(F.x ?? F.category ?? F[O]),
          y: Number(F.value ?? F.y ?? 0)
        }))
      }));
      break;
    }
    case "treemap": {
      E = [{
        name: "Series 1",
        data: l.map((p) => ({
          x: String(p.x ?? p.name ?? p.category ?? p[O]),
          y: Number(p.value ?? p.y ?? p[I[0]] ?? 0)
        }))
      }];
      break;
    }
    default: {
      E = [{
        name: "Series 1",
        data: l.map((p) => {
          const P = {
            x: p.x ?? p[O],
            y: p.y ?? p.value ?? 0
          };
          return ("z" in p || "r" in p) && (P.z = p.z ?? p.r), P;
        })
      }];
      break;
    }
  }
  return { series: E, labels: D, categories: M };
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
    let I = [], O = [];
    const p = Array.isArray(u) ? u[0] : typeof u == "string" ? u : hr(M[0]), P = p === "column" ? "bar" : p ?? "line";
    return M.forEach((F, G) => {
      var T, H;
      const ae = Array.isArray(u) ? u[G] ?? u[0] : typeof u == "string" ? u : hr(F), Q = yn(ae, F);
      Array.isArray(Q.series) && Q.series.forEach((j) => {
        v.push({
          ...j,
          // Map "column" → "bar" for ApexCharts series-level type
          type: ae === "column" ? "bar" : ae,
          name: j.name || `Series ${v.length + 1}`
        });
      }), (((T = Q.labels) == null ? void 0 : T.length) ?? 0) > I.length && (I = Q.labels), (((H = Q.categories) == null ? void 0 : H.length) ?? 0) > O.length && (O = Q.categories);
    }), [
      {
        type: P,
        series: v,
        labels: I,
        categories: O
      }
    ];
  }
  const g = l, E = typeof u == "string" ? u : hr(g), D = yn(E, g);
  return [
    {
      type: E,
      ...D
    }
  ];
}, la = Ni(
  ({ data: u, type: l, options: g = {}, height: E = 350, title: D }, M) => {
    const v = Xt(null), I = Xt(null), O = Xt(null), p = Xt(null), [P, F] = Hi(!1), G = Ui(
      () => $i.renderToString(
        /* @__PURE__ */ xt(
          ta,
          {
            size: 14,
            style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }
          }
        )
      ),
      []
    ), ae = un((T) => {
      const H = String(T).toLowerCase();
      return H === "column" || H === "funnel" ? "bar" : H === "rangebar" ? "rangeBar" : H === "boxplot" ? "boxPlot" : H === "polararea" ? "polarArea" : H === "radialbar" ? "radialBar" : H;
    }, []), Q = un(
      (T) => {
        var Ne, Ke, Qe, $, q, Pe, Ae;
        const H = ia(l, u);
        if (!H || H.length === 0)
          return { series: [] };
        const { type: j, series: te, labels: z, categories: Y } = H[0], Se = String(j).toLowerCase(), Le = kn[Se] || "xy", ve = Le === "circular", W = Se === "radar", V = Se === "funnel", Ee = Le === "range";
        let Z = te;
        ve && (Array.isArray(te) && typeof te[0] == "object" && ((Ne = te[0]) != null && Ne.data) ? Z = te[0].data : Array.isArray(te) && typeof te[0] == "object" && (Z = te.map((Me) => Me.y ?? Me.value ?? 0)));
        const ot = (() => {
          var ge, He, Ue;
          if (!Ee)
            return "category";
          const Me = Array.isArray(te) ? (Ue = (He = (ge = te[0]) == null ? void 0 : ge.data) == null ? void 0 : He[0]) == null ? void 0 : Ue.x : null;
          return Me && na(String(Me)) ? "datetime" : "category";
        })(), Oe = ve ? z != null && z.length ? z : Y != null && Y.length ? Y : [] : [], Ze = (() => W ? Y != null && Y.length ? Y : z ?? [] : ve ? [] : V ? [] : Y != null && Y.length ? Y : [])();
        return {
          ...g,
          chart: {
            id: T ? "vizly-modal-chart" : "vizly-main-chart",
            type: ae(Se),
            height: "100%",
            width: "100%",
            animations: { enabled: !0, speed: 800 },
            toolbar: {
              show: !0,
              tools: {
                customIcons: T ? [] : [{
                  icon: G,
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
          series: Z,
          // FIX: always [] not undefined — ApexCharts crashes on undefined.length
          labels: Oe,
          xaxis: {
            type: Ee ? ot : "category",
            // FIX: always [] not undefined — ApexCharts crashes on undefined.length
            categories: Ze,
            ...g.xaxis
          },
          plotOptions: {
            ...g.plotOptions,
            bar: {
              horizontal: V || Se === "rangebar",
              isFunnel: V,
              distributed: V,
              ...(Ke = g.plotOptions) == null ? void 0 : Ke.bar
            },
            heatmap: {
              enableShades: !0,
              colorScale: {
                ranges: ((q = ($ = (Qe = g.plotOptions) == null ? void 0 : Qe.heatmap) == null ? void 0 : $.colorScale) == null ? void 0 : q.ranges) || []
              }
            }
          },
          title: {
            text: typeof D == "string" ? D : (D == null ? void 0 : D.text) || ((Pe = g.title) == null ? void 0 : Pe.text),
            align: typeof D == "object" ? D.align : ((Ae = g.title) == null ? void 0 : Ae.align) || "left"
          },
          tooltip: {
            shared: !0,
            intersect: !1,
            theme: "dark",
            ...g.tooltip
          }
        };
      },
      [u, l, g, D, G, ae]
    );
    return cn(() => {
      let T = !0;
      return (async () => {
        if (O.current && (await O.current.destroy(), O.current = null), !(!T || !v.current)) {
          v.current.innerHTML = "";
          try {
            const j = new fn(v.current, Q(!1));
            O.current = j, await j.render(), T || (j.destroy(), O.current = null);
          } catch (j) {
            console.error("[VizlyChart] render error:", j);
          }
        }
      })(), () => {
        var j;
        T = !0, T = !1, (j = O.current) == null || j.destroy(), O.current = null;
      };
    }, [Q]), cn(() => {
      if (!P || !I.current)
        return;
      let T = !1;
      const H = setTimeout(async () => {
        if (!(T || !I.current))
          try {
            if (p.current && (await p.current.destroy(), p.current = null), T || !I.current)
              return;
            I.current.innerHTML = "", p.current = new fn(
              I.current,
              Q(!0)
            ), await p.current.render();
          } catch (j) {
            console.error("[VizlyChart] modal render error:", j);
          }
      }, 350);
      return () => {
        var j;
        T = !0, clearTimeout(H), (j = p.current) == null || j.destroy(), p.current = null;
      };
    }, [P, Q]), Wi(M, () => ({
      zoomIn: () => {
        var T;
        return (T = O.current) == null ? void 0 : T.zoomX(20, 80);
      },
      zoomOut: () => {
        var T;
        return (T = O.current) == null ? void 0 : T.resetSeries();
      },
      reset: () => {
        var T;
        return (T = O.current) == null ? void 0 : T.resetSeries();
      },
      toggleFullscreen: () => F((T) => !T)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ xt("div", { ref: v, style: { height: "100%", width: "100%", overflow: "hidden" } }),
      P && /* @__PURE__ */ dr("div", { style: {
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
        /* @__PURE__ */ xt("style", { children: `
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
          /* @__PURE__ */ xt(
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
              children: /* @__PURE__ */ xt(ra, { size: 18 })
            }
          ),
          /* @__PURE__ */ xt("div", { ref: I, style: { height: "100%", width: "100%" } })
        ] })
      ] })
    ] });
  }
);
export {
  la as VizlyChart
};
