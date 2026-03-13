import { jsx as yt, jsxs as dr } from "react/jsx-runtime";
import Fe, { forwardRef as Li, useRef as $t, useState as Ni, useMemo as ln, useEffect as un, useImperativeHandle as Ui } from "react";
import cn from "apexcharts";
const fn = (u) => {
  if (!u || u.length === 0)
    return "bar";
  const l = u[0];
  if (typeof l == "number")
    return "donut";
  if (typeof l != "object")
    return "bar";
  const h = Object.values(l).filter(
    (E) => typeof E == "number"
  );
  return l.stage && l.value ? "funnel" : l.label && l.value ? "donut" : l.category && l.value ? "polararea" : l.name && l.value ? "treemap" : l.x !== void 0 && l.y !== void 0 && l.value !== void 0 ? "heatmap" : Array.isArray(l.y) && l.y.length === 4 ? "candlestick" : Array.isArray(l.y) && l.y.length === 5 ? "boxplot" : Array.isArray(l.y) && l.y.length === 2 ? "rangebar" : l.x !== void 0 && l.y !== void 0 && l.r !== void 0 ? "bubble" : typeof l.x == "number" && typeof l.y == "number" ? "scatter" : l.x && !isNaN(Date.parse(l.x)) ? "line" : l.start !== void 0 && l.end !== void 0 ? "slope" : h.length > 1 && !l.category ? "mixed" : (l.x !== void 0 && l.y !== void 0, "bar");
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
  treemap: "treemap",
  rangebar: "range",
  candlestick: "range",
  boxplot: "range"
}, dn = (u, l) => {
  const h = Hi[u] || "xy";
  let E = [], z = [], I = [];
  if (!l || !Array.isArray(l) || l.length === 0)
    return { series: [], labels: [], categories: [] };
  const m = l[0], D = Object.keys(m).filter(
    (C) => typeof m[C] == "number"
  ), F = Object.keys(m).find((C) => typeof m[C] == "string") || "x";
  switch (h) {
    case "circular":
      E = l.map((v) => Number(v.value ?? v.y ?? 0)), z = l.map(
        (v) => String(v.label ?? v.category ?? v.name ?? "Unknown")
      );
      break;
    case "category":
      const C = l.map(
        (v) => String(v.x ?? v.category ?? v.stage ?? v[F] ?? "Unknown")
      );
      u === "radar" ? z = C : I = C, D.length > 1 ? E = D.map((v) => ({
        name: v,
        data: l.map((T) => T[v] ?? 0)
      })) : E = [
        {
          name: D[0] || "Series 1",
          data: l.map((v) => v.y ?? v.value ?? 0)
        }
      ];
      break;
    case "range":
      E = [
        {
          name: "Series 1",
          data: l.map((v) => {
            let T = [];
            return u === "boxplot" ? T = Array.isArray(v.y) ? v.y : [v.min, v.q1, v.median, v.q3, v.max] : u === "candlestick" ? T = Array.isArray(v.y) ? v.y : [v.open, v.high, v.low, v.close] : T = Array.isArray(v.y) ? v.y : [v.start, v.end], {
              x: v.x ?? v.label ?? v.category ?? v.date ?? "Unknown",
              y: T
            };
          })
        }
      ];
      break;
    case "heatmap":
      const P = {};
      l.forEach((v) => {
        const T = v.group || "Series 1";
        P[T] || (P[T] = []), P[T].push({
          x: String(v.x ?? "Unknown"),
          y: v.value ?? v.y ?? 0
        });
      }), E = Object.keys(P).map((v) => ({
        name: v,
        data: P[v]
      }));
      break;
    case "treemap":
      E = [
        {
          data: l.map((v) => ({
            x: v.name,
            y: v.value
          }))
        }
      ];
      break;
    default:
      u === "bubble" ? E = [
        {
          name: "Series 1",
          data: l.map((v) => ({
            x: v.x ?? 0,
            y: v.y ?? 0,
            z: v.r ?? v.z ?? v.value ?? 0
          }))
        }
      ] : D.length > 1 ? E = D.map((v) => ({
        name: v,
        data: l.map((T) => ({
          x: T.x ?? T[F],
          y: T[v] ?? 0
        }))
      })) : E = [
        {
          name: "Series 1",
          data: l.map((v) => ({
            x: v.x ?? v[F],
            y: v.y ?? v.value ?? 0
          }))
        }
      ];
      break;
  }
  return { series: E, labels: z, categories: I };
};
function Wi(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var hr = { exports: {} }, Ze = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, pn;
function mn() {
  if (pn)
    return pr;
  pn = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function E(I) {
    if (I == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(I);
  }
  function z() {
    try {
      if (!Object.assign)
        return !1;
      var I = new String("abc");
      if (I[5] = "de", Object.getOwnPropertyNames(I)[0] === "5")
        return !1;
      for (var m = {}, D = 0; D < 10; D++)
        m["_" + String.fromCharCode(D)] = D;
      var F = Object.getOwnPropertyNames(m).map(function(P) {
        return m[P];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var C = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(P) {
        C[P] = P;
      }), Object.keys(Object.assign({}, C)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = z() ? Object.assign : function(I, m) {
    for (var D, F = E(I), C, P = 1; P < arguments.length; P++) {
      D = Object(arguments[P]);
      for (var v in D)
        l.call(D, v) && (F[v] = D[v]);
      if (u) {
        C = u(D);
        for (var T = 0; T < C.length; T++)
          h.call(D, C[T]) && (F[C[T]] = D[C[T]]);
      }
    }
    return F;
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
var hn;
function Vi() {
  if (hn)
    return Ze;
  hn = 1;
  var u = mn(), l = Fe;
  function h(r) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1; i < arguments.length; i++)
      a += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = 60106, z = 60107, I = 60108, m = 60114, D = 60109, F = 60110, C = 60112, P = 60113, v = 60120, T = 60115, ve = 60116, Y = 60121, ge = 60117, ke = 60119, M = 60129, W = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var j = Symbol.for;
    E = j("react.portal"), z = j("react.fragment"), I = j("react.strict_mode"), m = j("react.profiler"), D = j("react.provider"), F = j("react.context"), C = j("react.forward_ref"), P = j("react.suspense"), v = j("react.suspense_list"), T = j("react.memo"), ve = j("react.lazy"), Y = j("react.block"), ge = j("react.fundamental"), ke = j("react.scope"), M = j("react.debug_trace_mode"), W = j("react.legacy_hidden");
  }
  function ie(r) {
    if (r == null)
      return null;
    if (typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case z:
        return "Fragment";
      case E:
        return "Portal";
      case m:
        return "Profiler";
      case I:
        return "StrictMode";
      case P:
        return "Suspense";
      case v:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case F:
          return (r.displayName || "Context") + ".Consumer";
        case D:
          return (r._context.displayName || "Context") + ".Provider";
        case C:
          var a = r.render;
          return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case T:
          return ie(r.type);
        case Y:
          return ie(r._render);
        case ve:
          a = r._payload, r = r._init;
          try {
            return ie(r(a));
          } catch {
          }
      }
    return null;
  }
  var Se = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = {};
  function ye(r, a) {
    for (var i = r._threadCount | 0; i <= a; i++)
      r[i] = r._currentValue2, r._threadCount = i + 1;
  }
  function U(r, a, i, f) {
    if (f && (f = r.contextType, typeof f == "object" && f !== null))
      return ye(f, i), f[i];
    if (r = r.contextTypes) {
      i = {};
      for (var k in r)
        i[k] = a[k];
      a = i;
    } else
      a = Qe;
    return a;
  }
  for (var q = new Uint16Array(16), Ee = 0; 15 > Ee; Ee++)
    q[Ee] = Ee + 1;
  q[15] = 0;
  var K = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oe = Object.prototype.hasOwnProperty, de = {}, je = {};
  function Je(r) {
    return Oe.call(je, r) ? !0 : Oe.call(de, r) ? !1 : K.test(r) ? je[r] = !0 : (de[r] = !0, !1);
  }
  function et(r, a, i, f) {
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
  function Pt(r, a, i, f) {
    if (a === null || typeof a > "u" || et(r, a, i, f))
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
  function Q(r, a, i, f, k, x, b) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = f, this.attributeNamespace = k, this.mustUseProperty = i, this.propertyName = r, this.type = a, this.sanitizeURL = x, this.removeEmptyString = b;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    $[r] = new Q(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var a = r[0];
    $[a] = new Q(a, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    $[r] = new Q(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    $[r] = new Q(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    $[r] = new Q(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    $[r] = new Q(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    $[r] = new Q(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    $[r] = new Q(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    $[r] = new Q(r, 5, !1, r.toLowerCase(), null, !1, !1);
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
    $[a] = new Q(a, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var a = r.replace(tt, rt);
    $[a] = new Q(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var a = r.replace(tt, rt);
    $[a] = new Q(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    $[r] = new Q(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    $[r] = new Q(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var Zt = /["'&<>]/;
  function Ae(r) {
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
  function mt(r, a) {
    var i = $.hasOwnProperty(r) ? $[r] : null, f;
    return (f = r !== "style") && (f = i !== null ? i.type === 0 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")), f || Pt(r, a, i, !1) ? "" : i !== null ? (r = i.attributeName, f = i.type, f === 3 || f === 4 && a === !0 ? r + '=""' : (i.sanitizeURL && (a = "" + a), r + '="' + (Ae(a) + '"'))) : Je(r) ? r + '="' + (Ae(a) + '"') : "";
  }
  function bt(r, a) {
    return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
  }
  var nt = typeof Object.is == "function" ? Object.is : bt, oe = null, Pe = null, _ = null, ze = !1, Be = !1, Re = null, Me = 0;
  function Ie() {
    if (oe === null)
      throw Error(h(321));
    return oe;
  }
  function xt() {
    if (0 < Me)
      throw Error(h(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Le() {
    return _ === null ? Pe === null ? (ze = !1, Pe = _ = xt()) : (ze = !0, _ = Pe) : _.next === null ? (ze = !1, _ = _.next = xt()) : (ze = !0, _ = _.next), _;
  }
  function Mt(r, a, i, f) {
    for (; Be; )
      Be = !1, Me += 1, _ = null, i = r(a, f);
    return it(), i;
  }
  function it() {
    oe = null, Be = !1, Pe = null, Me = 0, _ = Re = null;
  }
  function ot(r, a) {
    return typeof a == "function" ? a(r) : a;
  }
  function wt(r, a, i) {
    if (oe = Ie(), _ = Le(), ze) {
      var f = _.queue;
      if (a = f.dispatch, Re !== null && (i = Re.get(f), i !== void 0)) {
        Re.delete(f), f = _.memoizedState;
        do
          f = r(f, i.action), i = i.next;
        while (i !== null);
        return _.memoizedState = f, [f, a];
      }
      return [_.memoizedState, a];
    }
    return r = r === ot ? typeof a == "function" ? a() : a : i !== void 0 ? i(a) : a, _.memoizedState = r, r = _.queue = { last: null, dispatch: null }, r = r.dispatch = Ye.bind(null, oe, r), [_.memoizedState, r];
  }
  function kt(r, a) {
    if (oe = Ie(), _ = Le(), a = a === void 0 ? null : a, _ !== null) {
      var i = _.memoizedState;
      if (i !== null && a !== null) {
        var f = i[1];
        e:
          if (f === null)
            f = !1;
          else {
            for (var k = 0; k < f.length && k < a.length; k++)
              if (!nt(a[k], f[k])) {
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
  function Ye(r, a, i) {
    if (!(25 > Me))
      throw Error(h(301));
    if (r === oe)
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
  var B = null, at = { readContext: function(r) {
    var a = B.threadID;
    return ye(r, a), r[a];
  }, useContext: function(r) {
    Ie();
    var a = B.threadID;
    return ye(r, a), r[a];
  }, useMemo: kt, useReducer: wt, useRef: function(r) {
    oe = Ie(), _ = Le();
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
  var Et = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, st = u({ menuitem: !0 }, Et), ce = {
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
  Object.keys(ce).forEach(function(r) {
    Ot.forEach(function(a) {
      a = a + r.charAt(0).toUpperCase() + r.substring(1), ce[a] = ce[r];
    });
  });
  var Ne = /([A-Z])/g, lt = /^ms-/, me = l.Children.toArray, ut = Se.ReactCurrentDispatcher, _t = { listing: !0, pre: !0, textarea: !0 }, $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = {}, Rt = {};
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
      throw Error(h(152, ie(a) || "Component"));
  }
  function Jt(r, a, i) {
    function f(b, S) {
      var y = S.prototype && S.prototype.isReactComponent, ee = U(S, a, i, y), G = [], te = !1, H = { isMounted: function() {
        return !1;
      }, enqueueForceUpdate: function() {
        if (G === null)
          return null;
      }, enqueueReplaceState: function(Ct, L) {
        te = !0, G = [L];
      }, enqueueSetState: function(Ct, L) {
        if (G === null)
          return null;
        G.push(L);
      } };
      if (y) {
        if (y = new S(b.props, ee, H), typeof S.getDerivedStateFromProps == "function") {
          var A = S.getDerivedStateFromProps.call(null, b.props, y.state);
          A != null && (y.state = u({}, y.state, A));
        }
      } else if (oe = {}, y = S(
        b.props,
        ee,
        H
      ), y = Mt(S, b.props, y, ee), y == null || y.render == null) {
        r = y, It(r, S);
        return;
      }
      if (y.props = b.props, y.context = ee, y.updater = H, H = y.state, H === void 0 && (y.state = H = null), typeof y.UNSAFE_componentWillMount == "function" || typeof y.componentWillMount == "function")
        if (typeof y.componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && typeof S.getDerivedStateFromProps != "function" && y.UNSAFE_componentWillMount(), G.length) {
          H = G;
          var Z = te;
          if (G = null, te = !1, Z && H.length === 1)
            y.state = H[0];
          else {
            A = Z ? H[0] : y.state;
            var Ce = !0;
            for (Z = Z ? 1 : 0; Z < H.length; Z++) {
              var ae = H[Z];
              ae = typeof ae == "function" ? ae.call(y, A, b.props, ee) : ae, ae != null && (Ce ? (Ce = !1, A = u({}, A, ae)) : u(A, ae));
            }
            y.state = A;
          }
        } else
          G = null;
      if (r = y.render(), It(r, S), typeof y.getChildContext == "function" && (b = S.childContextTypes, typeof b == "object")) {
        var se = y.getChildContext();
        for (var fe in se)
          if (!(fe in b))
            throw Error(h(108, ie(S) || "Unknown", fe));
      }
      se && (a = u({}, a, se));
    }
    for (; l.isValidElement(r); ) {
      var k = r, x = k.type;
      if (typeof x != "function")
        break;
      f(k, x);
    }
    return { child: r, context: a };
  }
  var ct = function() {
    function r(i, f, k) {
      l.isValidElement(i) ? i.type !== z ? i = [i] : (i = i.props.children, i = l.isValidElement(i) ? [i] : me(i)) : i = me(i), i = { type: null, domNamespace: Kt.html, children: i, childIndex: 0, context: Qe, footer: "" };
      var x = q[0];
      if (x === 0) {
        var b = q;
        x = b.length;
        var S = 2 * x;
        if (!(65536 >= S))
          throw Error(h(304));
        var y = new Uint16Array(S);
        for (y.set(b), q = y, q[0] = x + 1, b = x; b < S - 1; b++)
          q[b] = b + 1;
        q[S - 1] = 0;
      } else
        q[0] = q[x];
      this.threadID = x, this.stack = [i], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = f, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = k && k.identifierPrefix || "";
    }
    var a = r.prototype;
    return a.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var i = this.threadID;
        q[i] = q[0], q[0] = i;
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
      var f = B;
      B = this;
      var k = ut.current;
      ut.current = at;
      try {
        for (var x = [""], b = !1; x[0].length < i; ) {
          if (this.stack.length === 0) {
            this.exhausted = !0;
            var S = this.threadID;
            q[S] = q[0], q[0] = S;
            break;
          }
          var y = this.stack[this.stack.length - 1];
          if (b || y.childIndex >= y.children.length) {
            var ee = y.footer;
            if (ee !== "" && (this.previousWasTextNode = !1), this.stack.pop(), y.type === "select")
              this.currentSelectValue = null;
            else if (y.type != null && y.type.type != null && y.type.type.$$typeof === D)
              this.popProvider(y.type);
            else if (y.type === P) {
              this.suspenseDepth--;
              var G = x.pop();
              if (b) {
                b = !1;
                var te = y.fallbackFrame;
                if (!te)
                  throw Error(h(303));
                this.stack.push(te), x[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                x[this.suspenseDepth] += G;
            }
            x[this.suspenseDepth] += ee;
          } else {
            var H = y.children[y.childIndex++], A = "";
            try {
              A += this.render(H, y.context, y.domNamespace);
            } catch (Z) {
              throw Z != null && typeof Z.then == "function" ? Error(h(294)) : Z;
            } finally {
            }
            x.length <= this.suspenseDepth && x.push(""), x[this.suspenseDepth] += A;
          }
        }
        return x[0];
      } finally {
        ut.current = k, B = f, it();
      }
    }, a.render = function(i, f, k) {
      if (typeof i == "string" || typeof i == "number")
        return k = "" + i, k === "" ? "" : this.makeStaticMarkup ? Ae(k) : this.previousWasTextNode ? "<!-- -->" + Ae(k) : (this.previousWasTextNode = !0, Ae(k));
      if (f = Jt(i, f, this.threadID), i = f.child, f = f.context, i === null || i === !1)
        return "";
      if (!l.isValidElement(i)) {
        if (i != null && i.$$typeof != null)
          throw k = i.$$typeof, Error(k === E ? h(257) : h(258, k.toString()));
        return i = me(i), this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
      }
      var x = i.type;
      if (typeof x == "string")
        return this.renderDOM(i, f, k);
      switch (x) {
        case W:
        case M:
        case I:
        case m:
        case v:
        case z:
          return i = me(i.props.children), this.stack.push({
            type: null,
            domNamespace: k,
            children: i,
            childIndex: 0,
            context: f,
            footer: ""
          }), "";
        case P:
          throw Error(h(294));
        case ke:
          throw Error(h(343));
      }
      if (typeof x == "object" && x !== null)
        switch (x.$$typeof) {
          case C:
            oe = {};
            var b = x.render(i.props, i.ref);
            return b = Mt(x.render, i.props, b, i.ref), b = me(b), this.stack.push({ type: null, domNamespace: k, children: b, childIndex: 0, context: f, footer: "" }), "";
          case T:
            return i = [l.createElement(x.type, u({ ref: i.ref }, i.props))], this.stack.push({ type: null, domNamespace: k, children: i, childIndex: 0, context: f, footer: "" }), "";
          case D:
            return x = me(i.props.children), k = { type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }, this.pushProvider(i), this.stack.push(k), "";
          case F:
            x = i.type, b = i.props;
            var S = this.threadID;
            return ye(x, S), x = me(b.children(x[S])), this.stack.push({ type: i, domNamespace: k, children: x, childIndex: 0, context: f, footer: "" }), "";
          case ge:
            throw Error(h(338));
          case ve:
            return x = i.type, b = x._init, x = b(x._payload), i = [l.createElement(x, u({ ref: i.ref }, i.props))], this.stack.push({
              type: null,
              domNamespace: k,
              children: i,
              childIndex: 0,
              context: f,
              footer: ""
            }), "";
        }
      throw Error(h(130, x == null ? x : typeof x, ""));
    }, a.renderDOM = function(i, f, k) {
      var x = i.type.toLowerCase();
      if (!Ft.hasOwnProperty(x)) {
        if (!$e.test(x))
          throw Error(h(65, x));
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
      } else if (x === "select")
        this.currentSelectValue = b.value != null ? b.value : b.defaultValue, b = u({}, b, { value: void 0 });
      else if (x === "option") {
        y = this.currentSelectValue;
        var ee = jt(b.children);
        if (y != null) {
          var G = b.value != null ? b.value + "" : ee;
          if (S = !1, Array.isArray(y)) {
            for (var te = 0; te < y.length; te++)
              if ("" + y[te] === G) {
                S = !0;
                break;
              }
          } else
            S = "" + y === G;
          b = u(
            { selected: void 0, children: void 0 },
            b,
            { selected: S, children: ee }
          );
        }
      }
      if (S = b) {
        if (st[x] && (S.children != null || S.dangerouslySetInnerHTML != null))
          throw Error(h(137, x));
        if (S.dangerouslySetInnerHTML != null) {
          if (S.children != null)
            throw Error(h(60));
          if (!(typeof S.dangerouslySetInnerHTML == "object" && "__html" in S.dangerouslySetInnerHTML))
            throw Error(h(61));
        }
        if (S.style != null && typeof S.style != "object")
          throw Error(h(62));
      }
      S = b, y = this.makeStaticMarkup, ee = this.stack.length === 1, G = "<" + i.type;
      e:
        if (x.indexOf("-") === -1)
          te = typeof S.is == "string";
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
              te = !1;
              break e;
            default:
              te = !0;
          }
      for (L in S)
        if (zt.call(S, L)) {
          var H = S[L];
          if (H != null) {
            if (L === "style") {
              var A = void 0, Z = "", Ce = "";
              for (A in H)
                if (H.hasOwnProperty(A)) {
                  var ae = A.indexOf("--") === 0, se = H[A];
                  if (se != null) {
                    if (ae)
                      var fe = A;
                    else if (fe = A, Rt.hasOwnProperty(fe))
                      fe = Rt[fe];
                    else {
                      var Ct = fe.replace(Ne, "-$1").toLowerCase().replace(lt, "-ms-");
                      fe = Rt[fe] = Ct;
                    }
                    Z += Ce + fe + ":", Ce = A, ae = se == null || typeof se == "boolean" || se === "" ? "" : ae || typeof se != "number" || se === 0 || ce.hasOwnProperty(Ce) && ce[Ce] ? ("" + se).trim() : se + "px", Z += ae, Ce = ";";
                  }
                }
              H = Z || null;
            }
            A = null, te ? Lt.hasOwnProperty(L) || (A = L, A = Je(A) && H != null ? A + '="' + (Ae(H) + '"') : "") : A = mt(L, H), A && (G += " " + A);
          }
        }
      y || ee && (G += ' data-reactroot=""');
      var L = G;
      S = "", Et.hasOwnProperty(x) ? L += "/>" : (L += ">", S = "</" + i.type + ">");
      e: {
        if (y = b.dangerouslySetInnerHTML, y != null) {
          if (y.__html != null) {
            y = y.__html;
            break e;
          }
        } else if (y = b.children, typeof y == "string" || typeof y == "number") {
          y = Ae(y);
          break e;
        }
        y = null;
      }
      return y != null ? (b = [], _t.hasOwnProperty(x) && y.charAt(0) === `
` && (L += `
`), L += y) : b = me(b.children), i = i.type, k = k == null || k === "http://www.w3.org/1999/xhtml" ? Qt(i) : k === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : k, this.stack.push({ domNamespace: k, type: x, children: b, childIndex: 0, context: f, footer: S }), this.previousWasTextNode = !1, L;
    }, r;
  }();
  return Ze.renderToNodeStream = function() {
    throw Error(h(207));
  }, Ze.renderToStaticMarkup = function(r, a) {
    r = new ct(r, !0, a);
    try {
      return r.read(1 / 0);
    } finally {
      r.destroy();
    }
  }, Ze.renderToStaticNodeStream = function() {
    throw Error(h(208));
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
var vn;
function qi() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Fe, l = mn();
    function h(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var E = "17.0.2", z = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        D("warn", e, n);
      }
    }
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        D("error", e, n);
      }
    }
    function D(e, t, n) {
      {
        var o = z.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var p = n.map(function(c) {
          return "" + c;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var F = 60106, C = 60107, P = 60108, v = 60114, T = 60109, ve = 60110, Y = 60112, ge = 60113, ke = 60120, M = 60115, W = 60116, j = 60121, ie = 60117, Se = 60119, Qe = 60129, ye = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var U = Symbol.for;
      U("react.element"), F = U("react.portal"), C = U("react.fragment"), P = U("react.strict_mode"), v = U("react.profiler"), T = U("react.provider"), ve = U("react.context"), Y = U("react.forward_ref"), ge = U("react.suspense"), ke = U("react.suspense_list"), M = U("react.memo"), W = U("react.lazy"), j = U("react.block"), U("react.server.block"), ie = U("react.fundamental"), Se = U("react.scope"), U("react.opaque.id"), Qe = U("react.debug_trace_mode"), U("react.offscreen"), ye = U("react.legacy_hidden");
    }
    function q(e, t, n) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? n + "(" + o + ")" : n);
    }
    function Ee(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case F:
          return "Portal";
        case v:
          return "Profiler";
        case P:
          return "StrictMode";
        case ge:
          return "Suspense";
        case ke:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ve:
            var t = e;
            return Ee(t) + ".Consumer";
          case T:
            var n = e;
            return Ee(n._context) + ".Provider";
          case Y:
            return q(e, e.render, "ForwardRef");
          case M:
            return K(e.type);
          case j:
            return K(e._render);
          case W: {
            var o = e, s = o._payload, p = o._init;
            try {
              return K(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Oe = !1, de = 0, je, Je, et, Pt, Q, $, tt;
    function rt() {
    }
    rt.__reactDisabledLog = !0;
    function Zt() {
      {
        if (de === 0) {
          je = console.log, Je = console.info, et = console.warn, Pt = console.error, Q = console.group, $ = console.groupCollapsed, tt = console.groupEnd;
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
        de++;
      }
    }
    function Ae() {
      {
        if (de--, de === 0) {
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
              value: Pt
            }),
            group: l({}, e, {
              value: Q
            }),
            groupCollapsed: l({}, e, {
              value: $
            }),
            groupEnd: l({}, e, {
              value: tt
            })
          });
        }
        de < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = z.ReactCurrentDispatcher, bt;
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
    var oe = !1, Pe;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new _();
    }
    function ze(e, t) {
      if (!e || oe)
        return "";
      {
        var n = Pe.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      oe = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = mt.current, mt.current = null, Zt();
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
                    var X = `
` + g[O].replace(" at new ", " at ");
                    return typeof e == "function" && Pe.set(e, X), X;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, mt.current = p, Ae(), Error.prepareStackTrace = s;
      }
      var J = e ? e.displayName || e.name : "", w = J ? nt(J) : "";
      return typeof e == "function" && Pe.set(e, w), w;
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
        case ge:
          return nt("Suspense");
        case ke:
          return nt("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return Be(e.render);
          case M:
            return Me(e.type, t, n);
          case j:
            return Be(e._render);
          case W: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Me(p(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = {}, xt = z.ReactDebugCurrentFrame;
    function Le(e) {
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
          var p = (
            // Allow null for conditional declaration
            s === null || s !== void 0 && s.$$typeof === ve && s._context === void 0
          );
          if (!p && !it.has(e)) {
            it.add(e);
            var c = "";
            s === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? c = " However, it is set to a " + typeof s + "." : s.$$typeof === T ? c = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", K(e) || "Component", c);
          }
        }
        if (typeof s == "object" && s !== null)
          return Ye(s, n), s[n];
        {
          var g = wt(e, t);
          return e.contextTypes && kt(e.contextTypes, g, "context"), g;
        }
      } else {
        var d = wt(e, t);
        return e.contextTypes && kt(e.contextTypes, d, "context"), d;
      }
    }
    for (var B = new Uint16Array(16), at = 0; at < 15; at++)
      B[at] = at + 1;
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
    function Et(e) {
      B[e] = B[0], B[0] = e;
    }
    var st = 0, ce = 1, Ot = 2, Ne = 3, lt = 4, me = 5, ut = 6, _t = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = _t + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ft = "data-reactroot", Rt = new RegExp("^[" + _t + "][" + $e + "]*$"), jt = Object.prototype.hasOwnProperty, zt = {}, Lt = {};
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
          case me:
            return isNaN(t);
          case ut:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function a(e) {
      return f.hasOwnProperty(e) ? f[e] : null;
    }
    function i(e, t, n, o, s, p, c) {
      this.acceptsBooleans = t === Ot || t === Ne || t === lt, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = c;
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
      f[t] = new i(
        t,
        ce,
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
      f[e] = new i(
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
        ce,
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
        ce,
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
        ce,
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
        ce,
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
      ce,
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
        ce,
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
    function G(e) {
      !ee && y.test(e) && (ee = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
    function A(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : H(e);
    }
    function Z(e) {
      return '"' + A(e) + '"';
    }
    function Ce() {
      return Ft + '=""';
    }
    function ae(e, t) {
      var n = a(e);
      if (e !== "style" && Jt(e, n, !1) || r(e, t, n, !1))
        return "";
      if (n !== null) {
        var o = n.attributeName, s = n.type;
        return s === Ne || s === lt && t === !0 ? o + '=""' : (n.sanitizeURL && (t = "" + t, G(t)), o + "=" + Z(t));
      } else if (It(e))
        return e + "=" + Z(t);
      return "";
    }
    function se(e, t) {
      return !It(e) || t == null ? "" : e + "=" + Z(t);
    }
    function fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ct = typeof Object.is == "function" ? Object.is : fe, L = null, Nt = null, N = null, Tt = !1, Ut = !1, Ue = null, Ht = 0, kn = 25, Te = !1, ft;
    function Xe() {
      if (L === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Te && m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), L;
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
    function vr() {
      if (Ht > 0)
        throw Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function er() {
      return N === null ? Nt === null ? (Tt = !1, Nt = N = vr()) : (Tt = !0, N = Nt) : N.next === null ? (Tt = !1, N = N.next = vr()) : (Tt = !0, N = N.next), N;
    }
    function gr(e) {
      L = e, Te = !1;
    }
    function yr(e, t, n, o) {
      for (; Ut; )
        Ut = !1, Ht += 1, N = null, n = e(t, o);
      return mr(), n;
    }
    function mr() {
      Te = !1, L = null, Ut = !1, Nt = null, Ht = 0, Ue = null, N = null;
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
      return ft = "useState", br(
        tr,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function br(e, t, n) {
      if (e !== tr && (ft = "useReducer"), L = Xe(), N = er(), Tt) {
        var o = N.queue, s = o.dispatch;
        if (Ue !== null) {
          var p = Ue.get(o);
          if (p !== void 0) {
            Ue.delete(o);
            var c = N.memoizedState, g = p;
            do {
              var d = g.action;
              Te = !0, c = e(c, d), Te = !1, g = g.next;
            } while (g !== null);
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
        }, X = R.dispatch = Tn.bind(null, L, R);
        return [N.memoizedState, X];
      }
    }
    function xr(e, t) {
      L = Xe(), N = er();
      var n = t === void 0 ? null : t;
      if (N !== null) {
        var o = N.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Sn(n, s))
            return o[0];
        }
      }
      Te = !0;
      var p = e();
      return Te = !1, N.memoizedState = [p, n], p;
    }
    function In(e) {
      L = Xe(), N = er();
      var t = N.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), N.memoizedState = n, n;
      } else
        return t;
    }
    function Cn(e, t) {
      ft = "useLayoutEffect", m("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Tn(e, t, n) {
      if (!(Ht < kn))
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === L) {
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
      return xr(function() {
        return e;
      }, t);
    }
    function An(e, t, n) {
      return Xe(), t(e._source);
    }
    function Pn(e) {
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
    function wr(e) {
      dt = e;
    }
    var Fn = {
      readContext: En,
      useContext: On,
      useMemo: xr,
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
      useDeferredValue: Pn,
      useTransition: Mn,
      useOpaqueIdentifier: _n,
      // Subscriptions are not setup in a server environment.
      useMutableSource: An
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
      zn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    var Or = function() {
    };
    {
      var $n = /^(?:webkit|moz|o)[A-Z]/, Xn = /^-ms-/, Gn = /-(.)/g, Rr = /;\s*$/, pt = {}, sr = {}, Ir = !1, Cr = !1, Zn = function(e) {
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
        sr.hasOwnProperty(t) && sr[t] || (sr[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Rr, "")));
      }, ei = function(e, t) {
        Ir || (Ir = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ti = function(e, t) {
        Cr || (Cr = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
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
    }, ht = {}, ni = new RegExp("^(aria)-[" + $e + "]*$"), ii = new RegExp("^(aria)[A-Z][" + $e + "]*$"), oi = Object.prototype.hasOwnProperty;
    function ai(e, t) {
      {
        if (oi.call(ht, t) && ht[t])
          return !0;
        if (ii.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Tr.hasOwnProperty(n) ? n : null;
          if (o == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ht[t] = !0, !0;
          if (t !== o)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ht[t] = !0, !0;
        }
        if (ni.test(t)) {
          var s = t.toLowerCase(), p = Tr.hasOwnProperty(s) ? s : null;
          if (p == null)
            return ht[t] = !0, !1;
          if (t !== p)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), ht[t] = !0, !0;
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
        n.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : n.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
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
        t != null && t.value === null && !Dr && (Dr = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
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
    }, Pr = function() {
    };
    {
      var re = {}, ci = Object.prototype.hasOwnProperty, Mr = /^on./, fi = /^on[^A-Z]/, di = new RegExp("^(aria)-[" + $e + "]*$"), pi = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      Pr = function(e, t, n, o) {
        if (ci.call(re, t) && re[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), re[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, c = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var g = c.hasOwnProperty(s) ? c[s] : null;
          if (g != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, g), re[t] = !0, !0;
          if (Mr.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), re[t] = !0, !0;
        } else if (Mr.test(t))
          return fi.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), re[t] = !0, !0;
        if (di.test(t) || pi.test(t))
          return !0;
        if (s === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), re[t] = !0, !0;
        if (s === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), re[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), re[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), re[t] = !0, !0;
        var d = a(t), O = d !== null && d.type === st;
        if (Ar.hasOwnProperty(s)) {
          var R = Ar[s];
          if (R !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, R), re[t] = !0, !0;
        } else if (!O && t !== s)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), re[t] = !0, !0;
        return typeof n == "boolean" && ct(t, n, d, !1) ? (n ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), re[t] = !0, !0) : O ? !0 : ct(t, n, d, !1) ? (re[t] = !0, !1) : ((n === "false" || n === "true") && d !== null && d.type === Ne && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), re[t] = !0), !0);
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
        o.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : o.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function vi(e, t, n) {
      ar(e, t) || hi(e, t, n);
    }
    var He = u.Children.toArray, _e = [], lr = z.ReactCurrentDispatcher, Vt, ur = null, _r = function() {
      return "";
    }, Fr = function(e) {
      return "";
    }, jr = function(e, t) {
    }, zr = function(e) {
    }, Lr = function(e) {
    }, Nr = function() {
    }, Ur = !1;
    Vt = z.ReactDebugCurrentFrame, jr = function(e, t) {
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
    var Hr = !1, Wr = !1, Vr = !1, qr = !1, Br = !1, Yr = {}, $r = {}, Xr = {}, Gr = {}, Zr = {}, Kr = {}, Qr = ["value", "defaultValue"], gi = {
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
    function xi(e) {
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
        var n = e.constructor, o = n && K(n) || "ReactClass", s = o + "." + t;
        if (Yr[s])
          return;
        m(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Yr[s] = !0;
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
          return A(n);
      }
      return null;
    }
    function Si(e) {
      if (!u.isValidElement(e))
        return He(e);
      var t = e;
      if (t.type !== C)
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
        n != null && (t += n, !Br && typeof n != "string" && typeof n != "number" && (Br = !0, m("Only strings and numbers are supported as <option> children.")));
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
            g ? Ii.hasOwnProperty(d) || (R = se(d, O)) : R = ae(d, O), R && (c += " " + R);
          }
        }
      return s || p && (c += " " + Ce()), c;
    }
    function tn(e, t) {
      if (e === void 0)
        throw Error((K(t) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
    }
    function Ti(e, t, n) {
      for (; u.isValidElement(e); ) {
        var o = e, s = o.type;
        if (Lr(o), typeof s != "function")
          break;
        p(o, s);
      }
      function p(c, g) {
        var d = wi(g), O = St(g, t, n, d), R = [], X = !1, J = {
          isMounted: function(qe) {
            return !1;
          },
          enqueueForceUpdate: function(qe) {
            if (R === null)
              return en(qe, "forceUpdate"), null;
          },
          enqueueReplaceState: function(qe, gt) {
            X = !0, R = [gt];
          },
          enqueueSetState: function(qe, gt) {
            if (R === null)
              return en(qe, "setState"), null;
            R.push(gt);
          }
        }, w;
        if (d) {
          if (w = new g(c.props, O, J), typeof g.getDerivedStateFromProps == "function") {
            if (w.state === null || w.state === void 0) {
              var V = K(g) || "Unknown";
              Kr[V] || (m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, w.state === null ? "null" : "undefined", V), Kr[V] = !0);
            }
            var ne = g.getDerivedStateFromProps.call(null, c.props, w.state);
            if (ne === void 0) {
              var le = K(g) || "Unknown";
              Zr[le] || (m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", le), Zr[le] = !0);
            }
            ne != null && (w.state = l({}, w.state, ne));
          }
        } else {
          if (g.prototype && typeof g.prototype.render == "function") {
            var ue = K(g) || "Unknown";
            $r[ue] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ue, ue), $r[ue] = !0);
          }
          var We = {};
          if (gr(We), w = g(c.props, O, J), w = yr(g, c.props, w, O), w != null && w.render != null) {
            var pe = K(g) || "Unknown";
            Xr[pe] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", pe, pe, pe), Xr[pe] = !0);
          }
          if (w == null || w.render == null) {
            e = w, tn(e, g);
            return;
          }
        }
        w.props = c.props, w.context = O, w.updater = J;
        var be = w.state;
        if (be === void 0 && (w.state = be = null), typeof w.UNSAFE_componentWillMount == "function" || typeof w.componentWillMount == "function") {
          if (typeof w.componentWillMount == "function") {
            if (w.componentWillMount.__suppressDeprecationWarning !== !0) {
              var Ve = K(g) || "Unknown";
              Gr[Ve] || (I(
                // keep this warning in sync with ReactStrictModeWarning.js
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                Ve
              ), Gr[Ve] = !0);
            }
            typeof g.getDerivedStateFromProps != "function" && w.componentWillMount();
          }
          if (typeof w.UNSAFE_componentWillMount == "function" && typeof g.getDerivedStateFromProps != "function" && w.UNSAFE_componentWillMount(), R.length) {
            var he = R, xe = X;
            if (R = null, X = !1, xe && he.length === 1)
              w.state = he[0];
            else {
              for (var De = xe ? he[0] : w.state, qt = !0, vt = xe ? 1 : 0; vt < he.length; vt++) {
                var we = he[vt], At = typeof we == "function" ? we.call(w, De, c.props, O) : we;
                At != null && (qt ? (qt = !1, De = l({}, De, At)) : l(De, At));
              }
              w.state = De;
            }
          } else
            R = null;
        }
        e = w.render(), e === void 0 && w.render._isMockFunction && (e = null), tn(e, g);
        var Ge;
        {
          if (typeof w.getChildContext == "function") {
            var Bt = g.childContextTypes;
            if (typeof Bt == "object") {
              Ge = w.getChildContext();
              for (var Yt in Ge)
                if (!(Yt in Bt))
                  throw Error((K(g) || "Unknown") + '.getChildContext(): key "' + Yt + '" is not defined in childContextTypes.');
            } else
              m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", K(g) || "Unknown");
          }
          Ge && (t = l({}, t, Ge));
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
          context: ot,
          footer: ""
        };
        c.debugElementStack = [], this.threadID = Qt(), this.stack = [c], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = o, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = s && s.identifierPrefix || "", this.contextProviderStack = [];
      }
      var t = e.prototype;
      return t.destroy = function() {
        this.exhausted || (this.exhausted = !0, this.clearProviders(), Et(this.threadID));
      }, t.pushProvider = function(o) {
        var s = ++this.contextIndex, p = o.type._context, c = this.threadID;
        Ye(p, c);
        var g = p[c];
        this.contextStack[s] = p, this.contextValueStack[s] = g, this.contextProviderStack[s] = o, p[c] = o.props.value;
      }, t.popProvider = function(o) {
        var s = this.contextIndex;
        (s < 0 || o !== this.contextProviderStack[s]) && m("Unexpected pop.");
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
        var s = dt;
        wr(this);
        var p = lr.current;
        lr.current = Fn;
        try {
          for (var c = [""], g = !1; c[0].length < o; ) {
            if (this.stack.length === 0) {
              this.exhausted = !0, Et(this.threadID);
              break;
            }
            var d = this.stack[this.stack.length - 1];
            if (g || d.childIndex >= d.children.length) {
              var O = d.footer;
              if (O !== "" && (this.previousWasTextNode = !1), this.stack.pop(), d.type === "select")
                this.currentSelectValue = null;
              else if (d.type != null && d.type.type != null && d.type.type.$$typeof === T) {
                var R = d.type;
                this.popProvider(R);
              } else if (d.type === ge) {
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
            var w = d.children[d.childIndex++], V = "";
            zr(this.stack), d.debugElementStack.length = 0;
            try {
              V += this.render(w, d.context, d.domNamespace);
            } catch (ne) {
              if (ne != null && typeof ne.then == "function") {
                if (!Oe)
                  throw Error("ReactDOMServer does not yet support Suspense.");
              } else
                throw ne;
            } finally {
              Nr();
            }
            c.length <= this.suspenseDepth && c.push(""), c[this.suspenseDepth] += V;
          }
          return c[0];
        } finally {
          lr.current = p, wr(s), mr();
        }
      }, t.render = function(o, s, p) {
        if (typeof o == "string" || typeof o == "number") {
          var c = "" + o;
          return c === "" ? "" : this.makeStaticMarkup ? A(c) : this.previousWasTextNode ? "<!-- -->" + A(c) : (this.previousWasTextNode = !0, A(c));
        } else {
          var g, d = Ti(o, s, this.threadID);
          if (g = d.child, s = d.context, g === null || g === !1)
            return "";
          if (!u.isValidElement(g)) {
            if (g != null && g.$$typeof != null) {
              var O = g.$$typeof;
              throw Error(O === F ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + O.toString() + ". This is likely a bug in React. Please file an issue.");
            }
            var R = He(g), X = {
              type: null,
              domNamespace: p,
              children: R,
              childIndex: 0,
              context: s,
              footer: ""
            };
            return X.debugElementStack = [], this.stack.push(X), "";
          }
          var J = g, w = J.type;
          if (typeof w == "string")
            return this.renderDOM(J, s, p);
          switch (w) {
            case ye:
            case Qe:
            case P:
            case v:
            case ke:
            case C: {
              var V = He(g.props.children), ne = {
                type: null,
                domNamespace: p,
                children: V,
                childIndex: 0,
                context: s,
                footer: ""
              };
              return ne.debugElementStack = [], this.stack.push(ne), "";
            }
            case ge:
              throw Error("ReactDOMServer does not yet support Suspense.");
            case Se:
              throw Error("ReactDOMServer does not yet support scope components.");
          }
          if (typeof w == "object" && w !== null)
            switch (w.$$typeof) {
              case Y: {
                var le = g, ue, We = {};
                gr(We), ue = w.render(le.props, le.ref), ue = yr(w.render, le.props, ue, le.ref), ue = He(ue);
                var pe = {
                  type: null,
                  domNamespace: p,
                  children: ue,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return pe.debugElementStack = [], this.stack.push(pe), "";
              }
              case M: {
                var be = g, Ve = [u.createElement(w.type, l({
                  ref: be.ref
                }, be.props))], he = {
                  type: null,
                  domNamespace: p,
                  children: Ve,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return he.debugElementStack = [], this.stack.push(he), "";
              }
              case T: {
                var xe = g, De = xe.props, qt = He(De.children), vt = {
                  type: xe,
                  domNamespace: p,
                  children: qt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return vt.debugElementStack = [], this.pushProvider(xe), this.stack.push(vt), "";
              }
              case ve: {
                var we = g.type;
                we._context === void 0 ? we !== we.Consumer && (Ur || (Ur = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : we = we._context;
                var At = g.props, Ge = this.threadID;
                Ye(we, Ge);
                var Bt = we[Ge], Yt = He(At.children(Bt)), qe = {
                  type: g,
                  domNamespace: p,
                  children: Yt,
                  childIndex: 0,
                  context: s,
                  footer: ""
                };
                return qe.debugElementStack = [], this.stack.push(qe), "";
              }
              case ie:
                throw Error("ReactDOMServer does not yet support the fundamental API.");
              case W: {
                var gt = g, nn = g.type, _i = nn._payload, Fi = nn._init, ji = Fi(_i), zi = [u.createElement(ji, l({
                  ref: gt.ref
                }, gt.props))], on = {
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
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fr += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = an ? K(an) : null;
            sn && (fr += `

Check the render method of \`` + sn + "`.");
          }
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (w == null ? w : typeof w) + "." + fr);
        }
      }, t.renderDOM = function(o, s, p) {
        var c = o.type.toLowerCase(), g = p;
        p === ir.html && (g = Sr(c)), g === ir.html && c !== o.type && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o.type), mi(c);
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
          or("textarea", d), d.value !== void 0 && d.defaultValue !== void 0 && !qr && (m("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qr = !0);
          var O = d.value;
          if (O == null) {
            var R = d.defaultValue, X = d.children;
            if (X != null) {
              if (m("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
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
              var w = Qr[J];
              if (d[w] != null) {
                var V = Array.isArray(d[w]);
                d.multiple && !V ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.", w) : !d.multiple && V && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", w);
              }
            }
            d.value !== void 0 && d.defaultValue !== void 0 && !Vr && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0);
          }
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {
            value: void 0
          });
        } else if (c === "option") {
          var ne = null, le = this.currentSelectValue, ue = Ei(d.children);
          if (le != null) {
            var We;
            if (d.value != null ? We = d.value + "" : We = ue, ne = !1, Array.isArray(le)) {
              for (var pe = 0; pe < le.length; pe++)
                if ("" + le[pe] === We) {
                  ne = !0;
                  break;
                }
            } else
              ne = "" + le === We;
            d = l({
              selected: void 0,
              children: void 0
            }, d, {
              selected: ne,
              children: ue
            });
          }
        }
        jr(c, d), Un(c, d);
        var be = Ci(o.type, c, d, g, this.makeStaticMarkup, this.stack.length === 1), Ve = "";
        Er.hasOwnProperty(c) ? be += "/>" : (be += ">", Ve = "</" + o.type + ">");
        var he, xe = ki(d);
        xe != null ? (he = [], gi.hasOwnProperty(c) && xe.charAt(0) === `
` && (be += `
`), be += xe) : he = He(d.children);
        var De = {
          domNamespace: jn(p, o.type),
          type: c,
          children: he,
          childIndex: 0,
          context: s,
          footer: Ve
        };
        return De.debugElementStack = [], this.stack.push(De), this.previousWasTextNode = !1, be;
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
    function Ai(e, t) {
      var n = new rn(e, !0, t);
      try {
        var o = n.read(1 / 0);
        return o;
      } finally {
        n.destroy();
      }
    }
    function Pi() {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Mi() {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ke.renderToNodeStream = Pi, Ke.renderToStaticMarkup = Ai, Ke.renderToStaticNodeStream = Mi, Ke.renderToString = Di, Ke.version = E;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? hr.exports = Vi() : hr.exports = qi();
var Bi = hr.exports;
const Yi = /* @__PURE__ */ Wi(Bi);
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
  var h, E, z = Gi(u, l);
  if (Object.getOwnPropertySymbols) {
    var I = Object.getOwnPropertySymbols(u);
    for (E = 0; E < I.length; E++)
      h = I[E], l.indexOf(h) === -1 && {}.propertyIsEnumerable.call(u, h) && (z[h] = u[h]);
  }
  return z;
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
function yn(u, l) {
  var h = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(u);
    l && (E = E.filter(function(z) {
      return Object.getOwnPropertyDescriptor(u, z).enumerable;
    })), h.push.apply(h, E);
  }
  return h;
}
function Gt(u) {
  for (var l = 1; l < arguments.length; l++) {
    var h = arguments[l] != null ? arguments[l] : {};
    l % 2 ? yn(Object(h), !0).forEach(function(E) {
      Zi(u, E, h[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : yn(Object(h)).forEach(function(E) {
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
function xn(u) {
  return u && u.map((l, h) => /* @__PURE__ */ Fe.createElement(l.tag, Gt({
    key: h
  }, l.attr), xn(l.child)));
}
function wn(u) {
  return (l) => /* @__PURE__ */ Fe.createElement(Ji, Xt({
    attr: Gt({}, u.attr)
  }, l), xn(u.child));
}
function Ji(u) {
  var l = (h) => {
    var {
      attr: E,
      size: z,
      title: I
    } = u, m = Xi(u, $i), D = z || h.size || "1em", F;
    return h.className && (F = h.className), u.className && (F = (F ? F + " " : "") + u.className), /* @__PURE__ */ Fe.createElement("svg", Xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, h.attr, E, m, {
      className: F,
      style: Gt(Gt({
        color: u.color || h.color
      }, h.style), u.style),
      height: D,
      width: D,
      xmlns: "http://www.w3.org/2000/svg"
    }), I && /* @__PURE__ */ Fe.createElement("title", null, I), u.children);
  };
  return gn !== void 0 ? /* @__PURE__ */ Fe.createElement(gn.Consumer, null, (h) => l(h)) : l(bn);
}
function eo(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(u);
}
function to(u) {
  return wn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707" }, child: [] }] })(u);
}
const oo = Li(
  ({ data: u, type: l, options: h = {}, height: E = 350, colors: z, title: I }, m) => {
    const D = $t(null), F = $t(null), C = $t(null), P = $t(null), [v, T] = Ni(!1), ve = ln(() => Yi.renderToString(
      /* @__PURE__ */ yt(
        eo,
        {
          size: 14,
          style: { color: "#9ca3af", marginTop: "5px", marginLeft: "4px" }
        }
      )
    ), []), Y = ln(() => !u || u.length === 0 ? "bar" : l || (Array.isArray(u == null ? void 0 : u[0]) ? u.map((M) => fn(M)) : fn(u)), [u, l]), ge = (M) => {
      const W = M.toLowerCase();
      return W === "funnel" || W === "column" || W === "rangebar" ? "bar" : W;
    }, ke = (M) => {
      var ye, U, q, Ee;
      const W = Array.isArray(Y) ? String(Y[0]).toLowerCase() : String(Y).toLowerCase();
      let j = [], ie = [], Se = [];
      if (Array.isArray(u == null ? void 0 : u[0]))
        j = u.flatMap((Oe, de) => {
          const je = Array.isArray(l) && l[de] || (Array.isArray(Y) ? Y[de] : Y);
          return dn(je, Oe).series.map((et) => ({
            ...et,
            type: ge(je)
          }));
        });
      else {
        const Oe = dn(Y, u);
        j = Oe.series, ie = Oe.labels, Se = Oe.categories;
      }
      return {
        ...h,
        colors: h.colors || z,
        chart: {
          id: M ? "vizly-modal-chart" : "vizly-main-chart",
          type: ge(W),
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
              customIcons: M ? [] : [
                {
                  icon: ve,
                  index: 6,
                  title: "Expand",
                  class: "custom-icon",
                  click: () => T(!0)
                }
              ]
            }
          },
          animations: { enabled: !M },
          ...h.chart
        },
        title: {
          text: typeof I == "string" ? I : (I == null ? void 0 : I.text) || ((ye = h.title) == null ? void 0 : ye.text),
          align: typeof I == "object" ? I == null ? void 0 : I.align : ((U = h.title) == null ? void 0 : U.align) || "left",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            ...(q = h.title) == null ? void 0 : q.style
          }
        },
        series: j,
        labels: ie != null && ie.length ? ie : void 0,
        xaxis: W !== "radar" && (Se != null && Se.length) ? { ...h.xaxis, categories: Se } : h.xaxis,
        plotOptions: {
          ...h.plotOptions,
          bar: {
            horizontal: W === "funnel" || W === "rangebar",
            isFunnel: W === "funnel",
            ...(Ee = h.plotOptions) == null ? void 0 : Ee.bar
          }
        },
        tooltip: {
          theme: "dark",
          ...h.tooltip
        }
      };
    };
    return un(() => {
      if (!D.current)
        return;
      const M = ke(!1);
      return C.current && C.current.destroy(), C.current = new cn(D.current, M), C.current.render(), setTimeout(() => window.dispatchEvent(new Event("resize")), 100), () => {
        var W;
        (W = C.current) == null || W.destroy(), C.current = null;
      };
    }, [u, Y, h, I, z, ve]), un(() => {
      if (!v || !F.current)
        return;
      const M = ke(!0), W = setTimeout(() => {
        P.current && P.current.destroy(), P.current = new cn(F.current, M), P.current.render();
      }, 50);
      return () => {
        var j;
        clearTimeout(W), (j = P.current) == null || j.destroy(), P.current = null;
      };
    }, [v, u, Y, h]), Ui(m, () => ({
      zoomIn: () => {
        var M;
        return (M = C.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var M;
        return (M = C.current) == null ? void 0 : M.zoomX(void 0, void 0);
      },
      reset: () => {
        var M;
        return (M = C.current) == null ? void 0 : M.resetSeries();
      },
      toggleFullscreen: () => T(!v)
    })), /* @__PURE__ */ dr("div", { style: { height: E, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ yt("div", { ref: D, style: { height: "100%", width: "100%" } }),
      v && /* @__PURE__ */ dr(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999
          },
          children: [
            /* @__PURE__ */ yt("style", { children: `
              .apexcharts-menu{
                z-index:100000!important;
                color:#333!important;
              }
            ` }),
            /* @__PURE__ */ dr(
              "div",
              {
                style: {
                  width: "90%",
                  maxWidth: "900px",
                  height: "550px",
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "50px 20px 20px",
                  position: "relative",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                },
                children: [
                  /* @__PURE__ */ yt(
                    "button",
                    {
                      onClick: () => T(!1),
                      style: {
                        position: "absolute",
                        top: 15,
                        right: 20,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        zIndex: 10
                      },
                      children: /* @__PURE__ */ yt(to, { size: 20, color: "#333" })
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
          ]
        }
      )
    ] });
  }
);
export {
  oo as VizlyChart
};
