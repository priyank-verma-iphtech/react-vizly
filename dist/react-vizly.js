import { jsx as Js, jsxs as kf } from "react/jsx-runtime";
import hu, { forwardRef as mf, useRef as Qs, useState as Uf, useMemo as Sf, useEffect as Pf, useImperativeHandle as Yf } from "react";
import Ff from "apexcharts";
import af from "react-dom";
const pf = (he) => {
  if (!he || he.length === 0)
    return "bar";
  const re = he[0];
  if (typeof re == "number")
    return "donut";
  if (typeof re != "object")
    return "bar";
  const _ = Object.values(re).filter(
    (xe) => typeof xe == "number"
  );
  return re.stage && re.value ? "funnel" : re.label && re.value ? "donut" : re.category && re.value ? "polararea" : re.x !== void 0 && re.y !== void 0 && re.value !== void 0 ? "heatmap" : re.name && re.value && Array.isArray(re.children) ? "treemap" : Array.isArray(re.y) && re.y.length === 4 ? "candlestick" : Array.isArray(re.y) && re.y.length === 5 ? "boxplot" : Array.isArray(re.y) && re.y.length === 2 ? "rangebar" : re.x !== void 0 && re.y !== void 0 && re.r !== void 0 ? "bubble" : typeof re.x == "number" && typeof re.y == "number" ? "scatter" : re.x && !isNaN(Date.parse(re.x)) ? "line" : re.start !== void 0 && re.end !== void 0 ? "slope" : _.length > 1 ? "mixed" : (re.x !== void 0 && re.y !== void 0, "bar");
}, Gf = {
  line: "xy",
  area: "xy",
  scatter: "xy",
  bubble: "xy",
  bar: "category",
  column: "category",
  radar: "category",
  pie: "circular",
  donut: "circular",
  radialbar: "circular",
  heatmap: "heatmap",
  treemap: "heatmap",
  rangebar: "range",
  candlestick: "range"
}, Af = (he, re) => {
  const _ = Gf[he] || "xy";
  let xe = [], pn = [], gt = [];
  if (!re || re.length === 0)
    return { series: xe, labels: pn, categories: gt };
  const Hn = re[0], vn = Object.keys(Hn).filter(
    (ve) => typeof Hn[ve] == "number"
  ), Kt = Object.keys(Hn).find(
    (ve) => typeof Hn[ve] == "string"
  );
  switch (_) {
    case "circular":
      xe = re.map((ve) => ve.value ?? ve.y ?? ve), pn = re.map(
        (ve) => ve.label ?? ve.category ?? ve.name ?? ve.x
      );
      break;
    case "category":
      gt = re.map((ve) => ve.x ?? ve.category ?? ve.stage ?? ve[Kt]), vn.length > 1 ? xe = vn.map((ve) => ({
        name: ve,
        data: re.map((Ht) => Ht[ve])
      })) : xe = [{
        name: vn[0] || "Series 1",
        data: re.map((ve) => ve.y ?? ve.value)
      }];
      break;
    case "heatmap":
      xe = [{
        name: "Series 1",
        data: re.map((ve) => ({
          x: ve.x,
          y: ve.value ?? ve.y
        }))
      }];
      break;
    case "range":
      xe = [{ name: "Series 1", data: re }];
      break;
    default:
      he === "bubble" ? xe = [{
        name: "Series 1",
        data: re.map((ve) => ({
          x: ve.x,
          y: ve.y,
          r: ve.r
        }))
      }] : vn.length > 1 ? xe = vn.map((ve) => ({
        name: ve,
        data: re.map((Ht) => ({
          x: Ht.x ?? Ht[Kt],
          y: Ht[ve]
        }))
      })) : xe = [{
        name: "Series 1",
        data: re.map((ve) => ({
          x: ve.x,
          y: ve.y
        }))
      }];
  }
  return { series: xe, labels: pn, categories: gt };
};
var Us = {}, Vs = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var If;
function Xf() {
  if (If)
    return Vs;
  If = 1;
  var he = hu, re = af;
  function _(i) {
    var o = "https://react.dev/errors/" + i;
    if (1 < arguments.length) {
      o += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        o += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + i + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var xe = Symbol.for("react.transitional.element"), pn = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), Hn = Symbol.for("react.strict_mode"), vn = Symbol.for("react.profiler"), Kt = Symbol.for("react.consumer"), ve = Symbol.for("react.context"), Ht = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), N = Symbol.for("react.scope"), _i = Symbol.for("react.activity"), ha = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.memo_cache_sentinel"), Di = Symbol.for("react.view_transition"), ui = Symbol.iterator;
  function It(i) {
    return i === null || typeof i != "object" ? null : (i = ui && i[ui] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  var Ee = Array.isArray;
  function yr(i, o) {
    var f = i.length & 3, g = i.length - f, T = o;
    for (o = 0; o < g; ) {
      var C = i.charCodeAt(o) & 255 | (i.charCodeAt(++o) & 255) << 8 | (i.charCodeAt(++o) & 255) << 16 | (i.charCodeAt(++o) & 255) << 24;
      ++o, C = 3432918353 * (C & 65535) + ((3432918353 * (C >>> 16) & 65535) << 16) & 4294967295, C = C << 15 | C >>> 17, C = 461845907 * (C & 65535) + ((461845907 * (C >>> 16) & 65535) << 16) & 4294967295, T ^= C, T = T << 13 | T >>> 19, T = 5 * (T & 65535) + ((5 * (T >>> 16) & 65535) << 16) & 4294967295, T = (T & 65535) + 27492 + (((T >>> 16) + 58964 & 65535) << 16);
    }
    switch (C = 0, f) {
      case 3:
        C ^= (i.charCodeAt(o + 2) & 255) << 16;
      case 2:
        C ^= (i.charCodeAt(o + 1) & 255) << 8;
      case 1:
        C ^= i.charCodeAt(o) & 255, C = 3432918353 * (C & 65535) + ((3432918353 * (C >>> 16) & 65535) << 16) & 4294967295, C = C << 15 | C >>> 17, T ^= 461845907 * (C & 65535) + ((461845907 * (C >>> 16) & 65535) << 16) & 4294967295;
    }
    return T ^= i.length, T ^= T >>> 16, T = 2246822507 * (T & 65535) + ((2246822507 * (T >>> 16) & 65535) << 16) & 4294967295, T ^= T >>> 13, T = 3266489909 * (T & 65535) + ((3266489909 * (T >>> 16) & 65535) << 16) & 4294967295, (T ^ T >>> 16) >>> 0;
  }
  var vt = Object.assign, bn = Object.prototype.hasOwnProperty, et = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), zo = {}, Bo = {};
  function Li(i) {
    return bn.call(Bo, i) ? !0 : bn.call(zo, i) ? !1 : et.test(i) ? Bo[i] = !0 : (zo[i] = !0, !1);
  }
  var Mt = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), ge = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), J = /["'&<>]/;
  function ue(i) {
    if (typeof i == "boolean" || typeof i == "number" || typeof i == "bigint")
      return "" + i;
    i = "" + i;
    var o = J.exec(i);
    if (o) {
      var f = "", g, T = 0;
      for (g = o.index; g < i.length; g++) {
        switch (i.charCodeAt(g)) {
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
        T !== g && (f += i.slice(T, g)), T = g + 1, f += o;
      }
      i = T !== g ? f + i.slice(T, g) : f;
    }
    return i;
  }
  var zl = /([A-Z])/g, zi = /^ms-/, ie = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function m(i) {
    return ie.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
  }
  var me = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, wr = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Qe = Wt.d;
  Wt.d = {
    f: Qe.f,
    r: Qe.r,
    D: El,
    C: mt,
    L: Ta,
    m: pc,
    X: Vu,
    S: $t,
    M: yu
  };
  var Tr = [], nt = null, kc = /(<\/|<)(s)(cript)/gi;
  function Bl(i, o, f, g) {
    return "" + o + (f === "s" ? "\\u0073" : "\\u0053") + g;
  }
  function qt(i, o, f, g, T) {
    return {
      idPrefix: i === void 0 ? "" : i,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: f,
      bootstrapScripts: g,
      bootstrapModules: T,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function tt(i, o, f, g) {
    return {
      insertionMode: i,
      selectedValue: o,
      tagScope: f,
      viewTransition: g
    };
  }
  function Sc(i, o, f) {
    var g = i.tagScope & -25;
    switch (o) {
      case "noscript":
        return tt(2, null, g | 1, null);
      case "select":
        return tt(
          2,
          f.value != null ? f.value : f.defaultValue,
          g,
          null
        );
      case "svg":
        return tt(4, null, g, null);
      case "picture":
        return tt(2, null, g | 2, null);
      case "math":
        return tt(5, null, g, null);
      case "foreignObject":
        return tt(2, null, g, null);
      case "table":
        return tt(6, null, g, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return tt(7, null, g, null);
      case "colgroup":
        return tt(9, null, g, null);
      case "tr":
        return tt(8, null, g, null);
      case "head":
        if (2 > i.insertionMode)
          return tt(3, null, g, null);
        break;
      case "html":
        if (i.insertionMode === 0)
          return tt(1, null, g, null);
    }
    return 6 <= i.insertionMode || 2 > i.insertionMode ? tt(2, null, g, null) : i.tagScope !== g ? tt(
      i.insertionMode,
      i.selectedValue,
      g,
      null
    ) : i;
  }
  function Ae(i) {
    return i === null ? null : {
      update: i.update,
      enter: "none",
      exit: "none",
      share: i.update,
      name: i.autoName,
      autoName: i.autoName,
      nameIdx: 0
    };
  }
  function rt(i, o) {
    return o.tagScope & 32 && (i.instructions |= 128), tt(
      o.insertionMode,
      o.selectedValue,
      o.tagScope | 12,
      Ae(o.viewTransition)
    );
  }
  function on(i, o) {
    i = Ae(o.viewTransition);
    var f = o.tagScope | 16;
    return i !== null && i.share !== "none" && (f |= 64), tt(
      o.insertionMode,
      o.selectedValue,
      f,
      i
    );
  }
  var Rt = /* @__PURE__ */ new Map();
  function da(i, o) {
    if (typeof o != "object")
      throw Error(_(62));
    var f = !0, g;
    for (g in o)
      if (bn.call(o, g)) {
        var T = o[g];
        if (T != null && typeof T != "boolean" && T !== "") {
          if (g.indexOf("--") === 0) {
            var C = ue(g);
            T = ue(("" + T).trim());
          } else
            C = Rt.get(g), C === void 0 && (C = ue(
              g.replace(zl, "-$1").toLowerCase().replace(zi, "-ms-")
            ), Rt.set(g, C)), T = typeof T == "number" ? T === 0 || Mt.has(g) ? "" + T : T + "px" : ue(("" + T).trim());
          f ? (f = !1, i.push(' style="', C, ":", T)) : i.push(";", C, ":", T);
        }
      }
    f || i.push('"');
  }
  function Bi(i, o, f) {
    f && typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '=""');
  }
  function Ot(i, o, f) {
    typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && i.push(" ", o, '="', ue(f), '"');
  }
  var xr = ue(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  );
  function Tl(i, o) {
    this.push('<input type="hidden"'), bt(i), Ot(this, "name", o), Ot(this, "value", i), this.push("/>");
  }
  function bt(i) {
    if (typeof i != "string")
      throw Error(_(480));
  }
  function xl(i, o) {
    if (typeof o.$$FORM_ACTION == "function") {
      var f = i.nextFormID++;
      i = i.idPrefix + f;
      try {
        var g = o.$$FORM_ACTION(i);
        if (g) {
          var T = g.data;
          T != null && T.forEach(bt);
        }
        return g;
      } catch (C) {
        if (typeof C == "object" && C !== null && typeof C.then == "function")
          throw C;
      }
    }
    return null;
  }
  function Pc(i, o, f, g, T, C, P, Y) {
    var I = null;
    if (typeof g == "function") {
      var H = xl(o, g);
      H !== null ? (Y = H.name, g = H.action || "", T = H.encType, C = H.method, P = H.target, I = H.data) : (i.push(" ", "formAction", '="', xr, '"'), P = C = T = g = Y = null, Xu(o, f));
    }
    return Y != null && Ve(i, "name", Y), g != null && Ve(i, "formAction", g), T != null && Ve(i, "formEncType", T), C != null && Ve(i, "formMethod", C), P != null && Ve(i, "formTarget", P), I;
  }
  function Ve(i, o, f) {
    switch (o) {
      case "className":
        Ot(i, "class", f);
        break;
      case "tabIndex":
        Ot(i, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ot(i, o, f);
        break;
      case "style":
        da(i, f);
        break;
      case "src":
      case "href":
        if (f === "")
          break;
      case "action":
      case "formAction":
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean")
          break;
        f = m("" + f), i.push(" ", o, '="', ue(f), '"');
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        Bi(i, o.toLowerCase(), f);
        break;
      case "xlinkHref":
        if (typeof f == "function" || typeof f == "symbol" || typeof f == "boolean")
          break;
        f = m("" + f), i.push(" ", "xlink:href", '="', ue(f), '"');
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '="', ue(f), '"');
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        f && typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '=""');
        break;
      case "capture":
      case "download":
        f === !0 ? i.push(" ", o, '=""') : f !== !1 && typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '="', ue(f), '"');
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f && i.push(" ", o, '="', ue(f), '"');
        break;
      case "rowSpan":
      case "start":
        typeof f == "function" || typeof f == "symbol" || isNaN(f) || i.push(" ", o, '="', ue(f), '"');
        break;
      case "xlinkActuate":
        Ot(i, "xlink:actuate", f);
        break;
      case "xlinkArcrole":
        Ot(i, "xlink:arcrole", f);
        break;
      case "xlinkRole":
        Ot(i, "xlink:role", f);
        break;
      case "xlinkShow":
        Ot(i, "xlink:show", f);
        break;
      case "xlinkTitle":
        Ot(i, "xlink:title", f);
        break;
      case "xlinkType":
        Ot(i, "xlink:type", f);
        break;
      case "xmlBase":
        Ot(i, "xml:base", f);
        break;
      case "xmlLang":
        Ot(i, "xml:lang", f);
        break;
      case "xmlSpace":
        Ot(i, "xml:space", f);
        break;
      default:
        if ((!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = ge.get(o) || o, Li(o))) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var g = o.toLowerCase().slice(0, 5);
              if (g !== "data-" && g !== "aria-")
                return;
          }
          i.push(" ", o, '="', ue(f), '"');
        }
    }
  }
  function jt(i, o, f) {
    if (o != null) {
      if (f != null)
        throw Error(_(60));
      if (typeof o != "object" || !("__html" in o))
        throw Error(_(61));
      o = o.__html, o != null && i.push("" + o);
    }
  }
  function Rn(i) {
    var o = "";
    return he.Children.forEach(i, function(f) {
      f != null && (o += f);
    }), o;
  }
  function Xu(i, o) {
    if (!(i.instructions & 16)) {
      i.instructions |= 16;
      var f = o.preamble, g = o.bootstrapChunks;
      (f.htmlChunks || f.headChunks) && g.length === 0 ? (g.push(o.startInlineScript), Yo(g, i), g.push(
        ">",
        `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
        "<\/script>"
      )) : g.unshift(
        o.startInlineScript,
        ">",
        `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
        "<\/script>"
      );
    }
  }
  function qn(i, o) {
    i.push(Wn("link"));
    for (var f in o)
      if (bn.call(o, f)) {
        var g = o[f];
        if (g != null)
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(_(399, "link"));
            default:
              Ve(i, f, g);
          }
      }
    return i.push("/>"), null;
  }
  var du = /(<\/|<)(s)(tyle)/gi;
  function gu(i, o, f, g) {
    return "" + o + (f === "s" ? "\\73 " : "\\53 ") + g;
  }
  function si(i, o, f) {
    i.push(Wn(f));
    for (var g in o)
      if (bn.call(o, g)) {
        var T = o[g];
        if (T != null)
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(_(399, f));
            default:
              Ve(i, g, T);
          }
      }
    return i.push("/>"), null;
  }
  function vu(i, o) {
    i.push(Wn("title"));
    var f = null, g = null, T;
    for (T in o)
      if (bn.call(o, T)) {
        var C = o[T];
        if (C != null)
          switch (T) {
            case "children":
              f = C;
              break;
            case "dangerouslySetInnerHTML":
              g = C;
              break;
            default:
              Ve(i, T, C);
          }
      }
    return i.push(">"), o = Array.isArray(f) ? 2 > f.length ? f[0] : null : f, typeof o != "function" && typeof o != "symbol" && o !== null && o !== void 0 && i.push(ue("" + o)), jt(i, g, f), i.push(ba("title")), null;
  }
  function Ho(i, o) {
    i.push(Wn("script"));
    var f = null, g = null, T;
    for (T in o)
      if (bn.call(o, T)) {
        var C = o[T];
        if (C != null)
          switch (T) {
            case "children":
              f = C;
              break;
            case "dangerouslySetInnerHTML":
              g = C;
              break;
            default:
              Ve(i, T, C);
          }
      }
    return i.push(">"), jt(i, g, f), typeof f == "string" && i.push(("" + f).replace(kc, Bl)), i.push(ba("script")), null;
  }
  function ga(i, o, f) {
    i.push(Wn(f));
    var g = f = null, T;
    for (T in o)
      if (bn.call(o, T)) {
        var C = o[T];
        if (C != null)
          switch (T) {
            case "children":
              f = C;
              break;
            case "dangerouslySetInnerHTML":
              g = C;
              break;
            default:
              Ve(i, T, C);
          }
      }
    return i.push(">"), jt(i, g, f), f;
  }
  function Hi(i, o, f) {
    i.push(Wn(f));
    var g = f = null, T;
    for (T in o)
      if (bn.call(o, T)) {
        var C = o[T];
        if (C != null)
          switch (T) {
            case "children":
              f = C;
              break;
            case "dangerouslySetInnerHTML":
              g = C;
              break;
            default:
              Ve(i, T, C);
          }
      }
    return i.push(">"), jt(i, g, f), typeof f == "string" ? (i.push(ue(f)), null) : f;
  }
  var va = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Wo = /* @__PURE__ */ new Map();
  function Wn(i) {
    var o = Wo.get(i);
    if (o === void 0) {
      if (!va.test(i))
        throw Error(_(65, i));
      o = "<" + i, Wo.set(i, o);
    }
    return o;
  }
  function An(i, o, f, g, T, C, P, Y, I) {
    switch (o) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        i.push(Wn("a"));
        var H = null, K = null, Q;
        for (Q in f)
          if (bn.call(f, Q)) {
            var ae = f[Q];
            if (ae != null)
              switch (Q) {
                case "children":
                  H = ae;
                  break;
                case "dangerouslySetInnerHTML":
                  K = ae;
                  break;
                case "href":
                  ae === "" ? Ot(i, "href", "") : Ve(i, Q, ae);
                  break;
                default:
                  Ve(i, Q, ae);
              }
          }
        if (i.push(">"), jt(i, K, H), typeof H == "string") {
          i.push(ue(H));
          var be = null;
        } else
          be = H;
        return be;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        i.push(Wn("select"));
        var Le = null, Pe = null, Te;
        for (Te in f)
          if (bn.call(f, Te)) {
            var Ie = f[Te];
            if (Ie != null)
              switch (Te) {
                case "children":
                  Le = Ie;
                  break;
                case "dangerouslySetInnerHTML":
                  Pe = Ie;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Ve(
                    i,
                    Te,
                    Ie
                  );
              }
          }
        return i.push(">"), jt(i, Pe, Le), Le;
      case "option":
        var Se = Y.selectedValue;
        i.push(Wn("option"));
        var _n = null, ze = null, Xe = null, ln = null, _e;
        for (_e in f)
          if (bn.call(f, _e)) {
            var mn = f[_e];
            if (mn != null)
              switch (_e) {
                case "children":
                  _n = mn;
                  break;
                case "selected":
                  Xe = mn;
                  break;
                case "dangerouslySetInnerHTML":
                  ln = mn;
                  break;
                case "value":
                  ze = mn;
                default:
                  Ve(
                    i,
                    _e,
                    mn
                  );
              }
          }
        if (Se != null) {
          var $e = ze !== null ? "" + ze : Rn(_n);
          if (Ee(Se)) {
            for (var er = 0; er < Se.length; er++)
              if ("" + Se[er] === $e) {
                i.push(' selected=""');
                break;
              }
          } else
            "" + Se === $e && i.push(' selected=""');
        } else
          Xe && i.push(' selected=""');
        return i.push(">"), jt(i, ln, _n), _n;
      case "textarea":
        i.push(Wn("textarea"));
        var cn = null, Je = null, en = null, Me;
        for (Me in f)
          if (bn.call(f, Me)) {
            var nn = f[Me];
            if (nn != null)
              switch (Me) {
                case "children":
                  en = nn;
                  break;
                case "value":
                  cn = nn;
                  break;
                case "defaultValue":
                  Je = nn;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(_(91));
                default:
                  Ve(
                    i,
                    Me,
                    nn
                  );
              }
          }
        if (cn === null && Je !== null && (cn = Je), i.push(">"), en != null) {
          if (cn != null)
            throw Error(_(92));
          if (Ee(en)) {
            if (1 < en.length)
              throw Error(_(93));
            cn = "" + en[0];
          }
          cn = "" + en;
        }
        return typeof cn == "string" && cn[0] === `
` && i.push(`
`), cn !== null && i.push(ue("" + cn)), null;
      case "input":
        i.push(Wn("input"));
        var Pt = null, He = null, qi = null, Ei = null, nr = null, rl = null, ll = null, il = null, Vl = null, Ri;
        for (Ri in f)
          if (bn.call(f, Ri)) {
            var Tt = f[Ri];
            if (Tt != null)
              switch (Ri) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(399, "input"));
                case "name":
                  Pt = Tt;
                  break;
                case "formAction":
                  He = Tt;
                  break;
                case "formEncType":
                  qi = Tt;
                  break;
                case "formMethod":
                  Ei = Tt;
                  break;
                case "formTarget":
                  nr = Tt;
                  break;
                case "defaultChecked":
                  Vl = Tt;
                  break;
                case "defaultValue":
                  ll = Tt;
                  break;
                case "checked":
                  il = Tt;
                  break;
                case "value":
                  rl = Tt;
                  break;
                default:
                  Ve(
                    i,
                    Ri,
                    Tt
                  );
              }
          }
        var Ma = Pc(
          i,
          g,
          T,
          He,
          qi,
          Ei,
          nr,
          Pt
        );
        return il !== null ? Bi(i, "checked", il) : Vl !== null && Bi(i, "checked", Vl), rl !== null ? Ve(i, "value", rl) : ll !== null && Ve(i, "value", ll), i.push("/>"), Ma != null && Ma.forEach(Tl, i), null;
      case "button":
        i.push(Wn("button"));
        var Oa = null, rc = null, Nc = null, vo = null, ji = null, tr = null, lc = null, rr;
        for (rr in f)
          if (bn.call(f, rr)) {
            var qr = f[rr];
            if (qr != null)
              switch (rr) {
                case "children":
                  Oa = qr;
                  break;
                case "dangerouslySetInnerHTML":
                  rc = qr;
                  break;
                case "name":
                  Nc = qr;
                  break;
                case "formAction":
                  vo = qr;
                  break;
                case "formEncType":
                  ji = qr;
                  break;
                case "formMethod":
                  tr = qr;
                  break;
                case "formTarget":
                  lc = qr;
                  break;
                default:
                  Ve(
                    i,
                    rr,
                    qr
                  );
              }
          }
        var Ci = Pc(
          i,
          g,
          T,
          vo,
          ji,
          tr,
          lc,
          Nc
        );
        if (i.push(">"), Ci != null && Ci.forEach(Tl, i), jt(i, rc, Oa), typeof Oa == "string") {
          i.push(ue(Oa));
          var ic = null;
        } else
          ic = Oa;
        return ic;
      case "form":
        i.push(Wn("form"));
        var ki = null, mc = null, ot = null, ac = null, $i = null, bo = null, _a;
        for (_a in f)
          if (bn.call(f, _a)) {
            var jn = f[_a];
            if (jn != null)
              switch (_a) {
                case "children":
                  ki = jn;
                  break;
                case "dangerouslySetInnerHTML":
                  mc = jn;
                  break;
                case "action":
                  ot = jn;
                  break;
                case "encType":
                  ac = jn;
                  break;
                case "method":
                  $i = jn;
                  break;
                case "target":
                  bo = jn;
                  break;
                default:
                  Ve(
                    i,
                    _a,
                    jn
                  );
              }
          }
        var jr = null, Be = null;
        if (typeof ot == "function") {
          var Si = xl(
            g,
            ot
          );
          Si !== null ? (ot = Si.action || "", ac = Si.encType, $i = Si.method, bo = Si.target, jr = Si.data, Be = Si.name) : (i.push(
            " ",
            "action",
            '="',
            xr,
            '"'
          ), bo = $i = ac = ot = null, Xu(g, T));
        }
        if (ot != null && Ve(i, "action", ot), ac != null && Ve(i, "encType", ac), $i != null && Ve(i, "method", $i), bo != null && Ve(i, "target", bo), i.push(">"), Be !== null && (i.push('<input type="hidden"'), Ot(i, "name", Be), i.push("/>"), jr != null && jr.forEach(Tl, i)), jt(i, mc, ki), typeof ki == "string") {
          i.push(ue(ki));
          var yo = null;
        } else
          yo = ki;
        return yo;
      case "menuitem":
        i.push(Wn("menuitem"));
        for (var ea in f)
          if (bn.call(f, ea)) {
            var Un = f[ea];
            if (Un != null)
              switch (ea) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(400));
                default:
                  Ve(
                    i,
                    ea,
                    Un
                  );
              }
          }
        return i.push(">"), null;
      case "object":
        i.push(Wn("object"));
        var Pr = null, na = null, Da;
        for (Da in f)
          if (bn.call(f, Da)) {
            var al = f[Da];
            if (al != null)
              switch (Da) {
                case "children":
                  Pr = al;
                  break;
                case "dangerouslySetInnerHTML":
                  na = al;
                  break;
                case "data":
                  var Yt = m("" + al);
                  if (Yt === "")
                    break;
                  i.push(
                    " ",
                    "data",
                    '="',
                    ue(Yt),
                    '"'
                  );
                  break;
                default:
                  Ve(
                    i,
                    Da,
                    al
                  );
              }
          }
        if (i.push(">"), jt(i, na, Pr), typeof Pr == "string") {
          i.push(ue(Pr));
          var wo = null;
        } else
          wo = Pr;
        return wo;
      case "title":
        var lr = Y.tagScope & 1, pu = Y.tagScope & 4;
        if (Y.insertionMode === 4 || lr || f.itemProp != null)
          var La = vu(
            i,
            f
          );
        else
          pu ? La = null : (vu(T.hoistableChunks, f), La = void 0);
        return La;
      case "link":
        var oc = Y.tagScope & 1, Uc = Y.tagScope & 4, Yc = f.rel, Kl = f.href, za = f.precedence;
        if (Y.insertionMode === 4 || oc || f.itemProp != null || typeof Yc != "string" || typeof Kl != "string" || Kl === "") {
          qn(i, f);
          var Ba = null;
        } else if (f.rel === "stylesheet")
          if (typeof za != "string" || f.disabled != null || f.onLoad || f.onError)
            Ba = qn(
              i,
              f
            );
          else {
            var ir = T.styles.get(za), cc = g.styleResources.hasOwnProperty(Kl) ? g.styleResources[Kl] : void 0;
            if (cc !== null) {
              g.styleResources[Kl] = null, ir || (ir = {
                precedence: ue(za),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, T.styles.set(za, ir));
              var uc = {
                state: 0,
                props: vt({}, f, {
                  "data-precedence": f.precedence,
                  precedence: null
                })
              };
              if (cc) {
                cc.length === 2 && Ac(uc.props, cc);
                var Au = T.preloads.stylesheets.get(Kl);
                Au && 0 < Au.length ? Au.length = 0 : uc.state = 1;
              }
              ir.sheets.set(Kl, uc), P && P.stylesheets.add(uc);
            } else if (ir) {
              var Iu = ir.sheets.get(Kl);
              Iu && P && P.stylesheets.add(Iu);
            }
            I && i.push("<!-- -->"), Ba = null;
          }
        else
          f.onLoad || f.onError ? Ba = qn(
            i,
            f
          ) : (I && i.push("<!-- -->"), Ba = Uc ? null : qn(T.hoistableChunks, f));
        return Ba;
      case "script":
        var Gc = Y.tagScope & 1, Mu = f.async;
        if (typeof f.src != "string" || !f.src || !Mu || typeof Mu == "function" || typeof Mu == "symbol" || f.onLoad || f.onError || Y.insertionMode === 4 || Gc || f.itemProp != null)
          var Ou = Ho(
            i,
            f
          );
        else {
          var ct = f.src;
          if (f.type === "module")
            var Xc = g.moduleScriptResources, sc = T.preloads.moduleScripts;
          else
            Xc = g.scriptResources, sc = T.preloads.scripts;
          var fc = Xc.hasOwnProperty(ct) ? Xc[ct] : void 0;
          if (fc !== null) {
            Xc[ct] = null;
            var Zc = f;
            if (fc) {
              fc.length === 2 && (Zc = vt({}, f), Ac(Zc, fc));
              var _u = sc.get(ct);
              _u && (_u.length = 0);
            }
            var Jc = [];
            T.scripts.add(Jc), Ho(Jc, Zc);
          }
          I && i.push("<!-- -->"), Ou = null;
        }
        return Ou;
      case "style":
        var Qc = Y.tagScope & 1, ta = f.precedence, ol = f.href, ts = f.nonce;
        if (Y.insertionMode === 4 || Qc || f.itemProp != null || typeof ta != "string" || typeof ol != "string" || ol === "") {
          i.push(Wn("style"));
          var Ha = null, hc = null, Al;
          for (Al in f)
            if (bn.call(f, Al)) {
              var To = f[Al];
              if (To != null)
                switch (Al) {
                  case "children":
                    Ha = To;
                    break;
                  case "dangerouslySetInnerHTML":
                    hc = To;
                    break;
                  default:
                    Ve(
                      i,
                      Al,
                      To
                    );
                }
            }
          i.push(">");
          var ra = Array.isArray(Ha) ? 2 > Ha.length ? Ha[0] : null : Ha;
          typeof ra != "function" && typeof ra != "symbol" && ra !== null && ra !== void 0 && i.push(("" + ra).replace(du, gu)), jt(i, hc, Ha), i.push(ba("style"));
          var dc = null;
        } else {
          var la = T.styles.get(ta);
          if ((g.styleResources.hasOwnProperty(ol) ? g.styleResources[ol] : void 0) !== null) {
            g.styleResources[ol] = null, la || (la = {
              precedence: ue(ta),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, T.styles.set(ta, la));
            var rs = T.nonce.style;
            if (!rs || rs === ts) {
              la.hrefs.push(ue(ol));
              var ls = la.rules, Il = null, xo = null, $r;
              for ($r in f)
                if (bn.call(f, $r)) {
                  var ia = f[$r];
                  if (ia != null)
                    switch ($r) {
                      case "children":
                        Il = ia;
                        break;
                      case "dangerouslySetInnerHTML":
                        xo = ia;
                    }
                }
              var Wa = Array.isArray(Il) ? 2 > Il.length ? Il[0] : null : Il;
              typeof Wa != "function" && typeof Wa != "symbol" && Wa !== null && Wa !== void 0 && ls.push(
                ("" + Wa).replace(du, gu)
              ), jt(ls, xo, Il);
            }
          }
          la && P && P.styles.add(la), I && i.push("<!-- -->"), dc = void 0;
        }
        return dc;
      case "meta":
        var cl = Y.tagScope & 1, Du = Y.tagScope & 4;
        if (Y.insertionMode === 4 || cl || f.itemProp != null)
          var is = si(
            i,
            f,
            "meta"
          );
        else
          I && i.push("<!-- -->"), is = Du ? null : typeof f.charSet == "string" ? si(T.charsetChunks, f, "meta") : f.name === "viewport" ? si(T.viewportChunks, f, "meta") : si(T.hoistableChunks, f, "meta");
        return is;
      case "listing":
      case "pre":
        i.push(Wn(o));
        var Eo = null, l = null, a;
        for (a in f)
          if (bn.call(f, a)) {
            var s = f[a];
            if (s != null)
              switch (a) {
                case "children":
                  Eo = s;
                  break;
                case "dangerouslySetInnerHTML":
                  l = s;
                  break;
                default:
                  Ve(
                    i,
                    a,
                    s
                  );
              }
          }
        if (i.push(">"), l != null) {
          if (Eo != null)
            throw Error(_(60));
          if (typeof l != "object" || !("__html" in l))
            throw Error(_(61));
          var v = l.__html;
          v != null && (typeof v == "string" && 0 < v.length && v[0] === `
` ? i.push(`
`, v) : i.push("" + v));
        }
        return typeof Eo == "string" && Eo[0] === `
` && i.push(`
`), Eo;
      case "img":
        var w = Y.tagScope & 3, R = f.src, k = f.srcSet;
        if (!(f.loading === "lazy" || !R && !k || typeof R != "string" && R != null || typeof k != "string" && k != null || f.fetchPriority === "low" || w) && (typeof R != "string" || R[4] !== ":" || R[0] !== "d" && R[0] !== "D" || R[1] !== "a" && R[1] !== "A" || R[2] !== "t" && R[2] !== "T" || R[3] !== "a" && R[3] !== "A") && (typeof k != "string" || k[4] !== ":" || k[0] !== "d" && k[0] !== "D" || k[1] !== "a" && k[1] !== "A" || k[2] !== "t" && k[2] !== "T" || k[3] !== "a" && k[3] !== "A")) {
          P !== null && Y.tagScope & 64 && (P.suspenseyImages = !0);
          var D = typeof f.sizes == "string" ? f.sizes : void 0, p = k ? k + `
` + (D || "") : R, L = T.preloads.images, U = L.get(p);
          if (U)
            (f.fetchPriority === "high" || 10 > T.highImagePreloads.size) && (L.delete(p), T.highImagePreloads.add(U));
          else if (!g.imageResources.hasOwnProperty(p)) {
            g.imageResources[p] = Tr;
            var X = f.crossOrigin, se = typeof X == "string" ? X === "use-credentials" ? X : "" : void 0, ce = T.headers, Ye;
            ce && 0 < ce.remainingCapacity && typeof f.srcSet != "string" && (f.fetchPriority === "high" || 500 > ce.highImagePreloads.length) && (Ye = In(R, "image", {
              imageSrcSet: f.srcSet,
              imageSizes: f.sizes,
              crossOrigin: se,
              integrity: f.integrity,
              nonce: f.nonce,
              type: f.type,
              fetchPriority: f.fetchPriority,
              referrerPolicy: f.refererPolicy
            }), 0 <= (ce.remainingCapacity -= Ye.length + 2)) ? (T.resets.image[p] = Tr, ce.highImagePreloads && (ce.highImagePreloads += ", "), ce.highImagePreloads += Ye) : (U = [], qn(U, {
              rel: "preload",
              as: "image",
              href: k ? void 0 : R,
              imageSrcSet: k,
              imageSizes: D,
              crossOrigin: se,
              integrity: f.integrity,
              type: f.type,
              fetchPriority: f.fetchPriority,
              referrerPolicy: f.referrerPolicy
            }), f.fetchPriority === "high" || 10 > T.highImagePreloads.size ? T.highImagePreloads.add(U) : (T.bulkPreloads.add(U), L.set(p, U)));
          }
        }
        return si(i, f, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return si(i, f, o);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > Y.insertionMode) {
          var Fe = C || T.preamble;
          if (Fe.headChunks)
            throw Error(_(545, "`<head>`"));
          C !== null && i.push("<!--head-->"), Fe.headChunks = [];
          var Ge = ga(
            Fe.headChunks,
            f,
            "head"
          );
        } else
          Ge = Hi(
            i,
            f,
            "head"
          );
        return Ge;
      case "body":
        if (2 > Y.insertionMode) {
          var Yn = C || T.preamble;
          if (Yn.bodyChunks)
            throw Error(_(545, "`<body>`"));
          C !== null && i.push("<!--body-->"), Yn.bodyChunks = [];
          var Pn = ga(
            Yn.bodyChunks,
            f,
            "body"
          );
        } else
          Pn = Hi(
            i,
            f,
            "body"
          );
        return Pn;
      case "html":
        if (Y.insertionMode === 0) {
          var Gt = C || T.preamble;
          if (Gt.htmlChunks)
            throw Error(_(545, "`<html>`"));
          C !== null && i.push("<!--html-->"), Gt.htmlChunks = [""];
          var Dr = ga(
            Gt.htmlChunks,
            f,
            "html"
          );
        } else
          Dr = Hi(
            i,
            f,
            "html"
          );
        return Dr;
      default:
        if (o.indexOf("-") !== -1) {
          i.push(Wn(o));
          var ul = null, pe = null, ar;
          for (ar in f)
            if (bn.call(f, ar)) {
              var $n = f[ar];
              if ($n != null) {
                var Fr = ar;
                switch (ar) {
                  case "children":
                    ul = $n;
                    break;
                  case "dangerouslySetInnerHTML":
                    pe = $n;
                    break;
                  case "style":
                    da(i, $n);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    Fr = "class";
                  default:
                    if (Li(ar) && typeof $n != "function" && typeof $n != "symbol" && $n !== !1) {
                      if ($n === !0)
                        $n = "";
                      else if (typeof $n == "object")
                        continue;
                      i.push(
                        " ",
                        Fr,
                        '="',
                        ue($n),
                        '"'
                      );
                    }
                }
              }
            }
          return i.push(">"), jt(i, pe, ul), ul;
        }
    }
    return Hi(i, f, o);
  }
  var Fc = /* @__PURE__ */ new Map();
  function ba(i) {
    var o = Fc.get(i);
    return o === void 0 && (o = "</" + i + ">", Fc.set(i, o)), o;
  }
  function Zu(i, o) {
    i = i.preamble, i.htmlChunks === null && o.htmlChunks && (i.htmlChunks = o.htmlChunks), i.headChunks === null && o.headChunks && (i.headChunks = o.headChunks), i.bodyChunks === null && o.bodyChunks && (i.bodyChunks = o.bodyChunks);
  }
  function bu(i, o) {
    o = o.bootstrapChunks;
    for (var f = 0; f < o.length - 1; f++)
      i.push(o[f]);
    return f < o.length ? (f = o[f], o.length = 0, i.push(f)) : !0;
  }
  function tl(i, o, f) {
    if (i.push('<!--$?--><template id="'), f === null)
      throw Error(_(395));
    return i.push(o.boundaryPrefix), o = f.toString(16), i.push(o), i.push('"></template>');
  }
  function Hl(i, o, f, g) {
    switch (f.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return i.push('<div hidden id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 4:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 5:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 6:
        return i.push('<table hidden id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 7:
        return i.push('<table hidden><tbody id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 8:
        return i.push('<table hidden><tr id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 9:
        return i.push('<table hidden><colgroup id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      default:
        throw Error(_(397));
    }
  }
  function Ju(i, o) {
    switch (o.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return i.push("</div>");
      case 4:
        return i.push("</svg>");
      case 5:
        return i.push("</math>");
      case 6:
        return i.push("</table>");
      case 7:
        return i.push("</tbody></table>");
      case 8:
        return i.push("</tr></table>");
      case 9:
        return i.push("</colgroup></table>");
      default:
        throw Error(_(397));
    }
  }
  var ya = /[<\u2028\u2029]/g;
  function Qn(i) {
    return JSON.stringify(i).replace(
      ya,
      function(o) {
        switch (o) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var Wi = /[&><\u2028\u2029]/g;
  function Ni(i) {
    return JSON.stringify(i).replace(
      Wi,
      function(o) {
        switch (o) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var wa = !1, Nt = !0;
  function Or(i) {
    var o = i.rules, f = i.hrefs, g = 0;
    if (f.length) {
      for (this.push(nt.startInlineStyle), this.push(' media="not all" data-precedence="'), this.push(i.precedence), this.push('" data-href="'); g < f.length - 1; g++)
        this.push(f[g]), this.push(" ");
      for (this.push(f[g]), this.push('">'), g = 0; g < o.length; g++)
        this.push(o[g]);
      Nt = this.push("</style>"), wa = !0, o.length = 0, f.length = 0;
    }
  }
  function yn(i) {
    return i.state !== 2 ? wa = !0 : !1;
  }
  function No(i, o, f) {
    return wa = !1, Nt = !0, nt = f, o.styles.forEach(Or, i), nt = null, o.stylesheets.forEach(yn), wa && (f.stylesToHoist = !0), Nt;
  }
  function Xr(i) {
    for (var o = 0; o < i.length; o++)
      this.push(i[o]);
    i.length = 0;
  }
  var Ke = [];
  function Qu(i) {
    qn(Ke, i.props);
    for (var o = 0; o < Ke.length; o++)
      this.push(Ke[o]);
    Ke.length = 0, i.state = 2;
  }
  function Ue(i) {
    var o = 0 < i.sheets.size;
    i.sheets.forEach(Qu, this), i.sheets.clear();
    var f = i.rules, g = i.hrefs;
    if (!o || g.length) {
      if (this.push(nt.startInlineStyle), this.push(' data-precedence="'), this.push(i.precedence), i = 0, g.length) {
        for (this.push('" data-href="'); i < g.length - 1; i++)
          this.push(g[i]), this.push(" ");
        this.push(g[i]);
      }
      for (this.push('">'), i = 0; i < f.length; i++)
        this.push(f[i]);
      this.push("</style>"), f.length = 0, g.length = 0;
    }
  }
  function mo(i) {
    if (i.state === 0) {
      i.state = 1;
      var o = i.props;
      for (qn(Ke, {
        rel: "preload",
        as: "style",
        href: i.props.href,
        crossOrigin: o.crossOrigin,
        fetchPriority: o.fetchPriority,
        integrity: o.integrity,
        media: o.media,
        hrefLang: o.hrefLang,
        referrerPolicy: o.referrerPolicy
      }), i = 0; i < Ke.length; i++)
        this.push(Ke[i]);
      Ke.length = 0;
    }
  }
  function Uo(i) {
    i.sheets.forEach(mo, this), i.sheets.clear();
  }
  function Yo(i, o) {
    !(o.instructions & 32) && (o.instructions |= 32, i.push(
      ' id="',
      ue("_" + o.idPrefix + "R_"),
      '"'
    ));
  }
  function Wl(i, o) {
    i.push("[");
    var f = "[";
    o.stylesheets.forEach(function(g) {
      if (g.state !== 2)
        if (g.state === 3)
          i.push(f), g = Ni(
            "" + g.props.href
          ), i.push(g), i.push("]"), f = ",[";
        else {
          i.push(f);
          var T = g.props["data-precedence"], C = g.props, P = m("" + g.props.href);
          P = Ni(P), i.push(P), T = "" + T, i.push(","), T = Ni(T), i.push(T);
          for (var Y in C)
            if (bn.call(C, Y) && (T = C[Y], T != null))
              switch (Y) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(399, "link"));
                default:
                  sn(
                    i,
                    Y,
                    T
                  );
              }
          i.push("]"), f = ",[", g.state = 3;
        }
    }), i.push("]");
  }
  function sn(i, o, f) {
    var g = o.toLowerCase();
    switch (typeof f) {
      case "function":
      case "symbol":
        return;
    }
    switch (o) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        g = "class", o = "" + f;
        break;
      case "hidden":
        if (f === !1)
          return;
        o = "";
        break;
      case "src":
      case "href":
        f = m(f), o = "" + f;
        break;
      default:
        if (2 < o.length && (o[0] === "o" || o[0] === "O") && (o[1] === "n" || o[1] === "N") || !Li(o))
          return;
        o = "" + f;
    }
    i.push(","), g = Ni(g), i.push(g), i.push(","), g = Ni(o), i.push(g);
  }
  function qe() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
  }
  function El(i) {
    var o = at || null;
    if (o) {
      var f = o.resumableState, g = o.renderState;
      if (typeof i == "string" && i) {
        if (!f.dnsResources.hasOwnProperty(i)) {
          f.dnsResources[i] = null, f = g.headers;
          var T, C;
          (C = f && 0 < f.remainingCapacity) && (C = (T = "<" + ("" + i).replace(
            Ic,
            no
          ) + ">; rel=dns-prefetch", 0 <= (f.remainingCapacity -= T.length + 2))), C ? (g.resets.dns[i] = null, f.preconnects && (f.preconnects += ", "), f.preconnects += T) : (T = [], qn(T, { href: i, rel: "dns-prefetch" }), g.preconnects.add(T));
        }
        go(o);
      }
    } else
      Qe.D(i);
  }
  function mt(i, o) {
    var f = at || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (typeof i == "string" && i) {
        var C = o === "use-credentials" ? "credentials" : typeof o == "string" ? "anonymous" : "default";
        if (!g.connectResources[C].hasOwnProperty(i)) {
          g.connectResources[C][i] = null, g = T.headers;
          var P, Y;
          if (Y = g && 0 < g.remainingCapacity) {
            if (Y = "<" + ("" + i).replace(
              Ic,
              no
            ) + ">; rel=preconnect", typeof o == "string") {
              var I = ("" + o).replace(
                Zr,
                xa
              );
              Y += '; crossorigin="' + I + '"';
            }
            Y = (P = Y, 0 <= (g.remainingCapacity -= P.length + 2));
          }
          Y ? (T.resets.connect[C][i] = null, g.preconnects && (g.preconnects += ", "), g.preconnects += P) : (C = [], qn(C, {
            rel: "preconnect",
            href: i,
            crossOrigin: o
          }), T.preconnects.add(C));
        }
        go(f);
      }
    } else
      Qe.C(i, o);
  }
  function Ta(i, o, f) {
    var g = at || null;
    if (g) {
      var T = g.resumableState, C = g.renderState;
      if (o && i) {
        switch (o) {
          case "image":
            if (f)
              var P = f.imageSrcSet, Y = f.imageSizes, I = f.fetchPriority;
            var H = P ? P + `
` + (Y || "") : i;
            if (T.imageResources.hasOwnProperty(H))
              return;
            T.imageResources[H] = Tr, T = C.headers;
            var K;
            T && 0 < T.remainingCapacity && typeof P != "string" && I === "high" && (K = In(i, o, f), 0 <= (T.remainingCapacity -= K.length + 2)) ? (C.resets.image[H] = Tr, T.highImagePreloads && (T.highImagePreloads += ", "), T.highImagePreloads += K) : (T = [], qn(
              T,
              vt(
                { rel: "preload", href: P ? void 0 : i, as: o },
                f
              )
            ), I === "high" ? C.highImagePreloads.add(T) : (C.bulkPreloads.add(T), C.preloads.images.set(H, T)));
            break;
          case "style":
            if (T.styleResources.hasOwnProperty(i))
              return;
            P = [], qn(
              P,
              vt({ rel: "preload", href: i, as: o }, f)
            ), T.styleResources[i] = !f || typeof f.crossOrigin != "string" && typeof f.integrity != "string" ? Tr : [f.crossOrigin, f.integrity], C.preloads.stylesheets.set(i, P), C.bulkPreloads.add(P);
            break;
          case "script":
            if (T.scriptResources.hasOwnProperty(i))
              return;
            P = [], C.preloads.scripts.set(i, P), C.bulkPreloads.add(P), qn(
              P,
              vt({ rel: "preload", href: i, as: o }, f)
            ), T.scriptResources[i] = !f || typeof f.crossOrigin != "string" && typeof f.integrity != "string" ? Tr : [f.crossOrigin, f.integrity];
            break;
          default:
            if (T.unknownResources.hasOwnProperty(o)) {
              if (P = T.unknownResources[o], P.hasOwnProperty(i))
                return;
            } else
              P = {}, T.unknownResources[o] = P;
            if (P[i] = Tr, (T = C.headers) && 0 < T.remainingCapacity && o === "font" && (H = In(i, o, f), 0 <= (T.remainingCapacity -= H.length + 2)))
              C.resets.font[i] = Tr, T.fontPreloads && (T.fontPreloads += ", "), T.fontPreloads += H;
            else
              switch (T = [], i = vt({ rel: "preload", href: i, as: o }, f), qn(T, i), o) {
                case "font":
                  C.fontPreloads.add(T);
                  break;
                default:
                  C.bulkPreloads.add(T);
              }
        }
        go(g);
      }
    } else
      Qe.L(i, o, f);
  }
  function pc(i, o) {
    var f = at || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (i) {
        var C = o && typeof o.as == "string" ? o.as : "script";
        switch (C) {
          case "script":
            if (g.moduleScriptResources.hasOwnProperty(i))
              return;
            C = [], g.moduleScriptResources[i] = !o || typeof o.crossOrigin != "string" && typeof o.integrity != "string" ? Tr : [o.crossOrigin, o.integrity], T.preloads.moduleScripts.set(i, C);
            break;
          default:
            if (g.moduleUnknownResources.hasOwnProperty(C)) {
              var P = g.unknownResources[C];
              if (P.hasOwnProperty(i))
                return;
            } else
              P = {}, g.moduleUnknownResources[C] = P;
            C = [], P[i] = Tr;
        }
        qn(C, vt({ rel: "modulepreload", href: i }, o)), T.bulkPreloads.add(C), go(f);
      }
    } else
      Qe.m(i, o);
  }
  function $t(i, o, f) {
    var g = at || null;
    if (g) {
      var T = g.resumableState, C = g.renderState;
      if (i) {
        o = o || "default";
        var P = C.styles.get(o), Y = T.styleResources.hasOwnProperty(i) ? T.styleResources[i] : void 0;
        Y !== null && (T.styleResources[i] = null, P || (P = {
          precedence: ue(o),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, C.styles.set(o, P)), o = {
          state: 0,
          props: vt(
            { rel: "stylesheet", href: i, "data-precedence": o },
            f
          )
        }, Y && (Y.length === 2 && Ac(o.props, Y), (C = C.preloads.stylesheets.get(i)) && 0 < C.length ? C.length = 0 : o.state = 1), P.sheets.set(i, o), go(g));
      }
    } else
      Qe.S(i, o, f);
  }
  function Vu(i, o) {
    var f = at || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (i) {
        var C = g.scriptResources.hasOwnProperty(i) ? g.scriptResources[i] : void 0;
        C !== null && (g.scriptResources[i] = null, o = vt({ src: i, async: !0 }, o), C && (C.length === 2 && Ac(o, C), i = T.preloads.scripts.get(i)) && (i.length = 0), i = [], T.scripts.add(i), Ho(i, o), go(f));
      }
    } else
      Qe.X(i, o);
  }
  function yu(i, o) {
    var f = at || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (i) {
        var C = g.moduleScriptResources.hasOwnProperty(
          i
        ) ? g.moduleScriptResources[i] : void 0;
        C !== null && (g.moduleScriptResources[i] = null, o = vt({ src: i, type: "module", async: !0 }, o), C && (C.length === 2 && Ac(o, C), i = T.preloads.moduleScripts.get(i)) && (i.length = 0), i = [], T.scripts.add(i), Ho(i, o), go(f));
      }
    } else
      Qe.M(i, o);
  }
  function Ac(i, o) {
    i.crossOrigin == null && (i.crossOrigin = o[0]), i.integrity == null && (i.integrity = o[1]);
  }
  function In(i, o, f) {
    i = ("" + i).replace(
      Ic,
      no
    ), o = ("" + o).replace(
      Zr,
      xa
    ), o = "<" + i + '>; rel=preload; as="' + o + '"';
    for (var g in f)
      bn.call(f, g) && (i = f[g], typeof i == "string" && (o += "; " + g.toLowerCase() + '="' + ("" + i).replace(
        Zr,
        xa
      ) + '"'));
    return o;
  }
  var Ic = /[<>\r\n]/g;
  function no(i) {
    switch (i) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var Zr = /["';,\r\n]/g;
  function xa(i) {
    switch (i) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function Ku(i) {
    this.styles.add(i);
  }
  function qu(i) {
    this.stylesheets.add(i);
  }
  function to(i, o) {
    o.styles.forEach(Ku, i), o.stylesheets.forEach(qu, i), o.suspenseyImages && (i.suspenseyImages = !0);
  }
  function ro(i, o) {
    var f = i.idPrefix, g = [], T = i.bootstrapScriptContent, C = i.bootstrapScripts, P = i.bootstrapModules;
    T !== void 0 && (g.push("<script"), Yo(g, i), g.push(
      ">",
      ("" + T).replace(kc, Bl),
      "<\/script>"
    )), T = f + "P:";
    var Y = f + "S:";
    f += "B:";
    var I = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Set(), Pe = {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    };
    if (C !== void 0)
      for (var Te = 0; Te < C.length; Te++) {
        var Ie = C[Te], Se, _n = void 0, ze = void 0, Xe = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: void 0
        };
        typeof Ie == "string" ? Xe.href = Se = Ie : (Xe.href = Se = Ie.src, Xe.integrity = ze = typeof Ie.integrity == "string" ? Ie.integrity : void 0, Xe.crossOrigin = _n = typeof Ie == "string" || Ie.crossOrigin == null ? void 0 : Ie.crossOrigin === "use-credentials" ? "use-credentials" : ""), Ie = i;
        var ln = Se;
        Ie.scriptResources[ln] = null, Ie.moduleScriptResources[ln] = null, Ie = [], qn(Ie, Xe), ae.add(Ie), g.push('<script src="', ue(Se), '"'), typeof ze == "string" && g.push(
          ' integrity="',
          ue(ze),
          '"'
        ), typeof _n == "string" && g.push(
          ' crossorigin="',
          ue(_n),
          '"'
        ), Yo(g, i), g.push(' async=""><\/script>');
      }
    if (P !== void 0)
      for (C = 0; C < P.length; C++)
        Xe = P[C], _n = Se = void 0, ze = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: void 0
        }, typeof Xe == "string" ? ze.href = Te = Xe : (ze.href = Te = Xe.src, ze.integrity = _n = typeof Xe.integrity == "string" ? Xe.integrity : void 0, ze.crossOrigin = Se = typeof Xe == "string" || Xe.crossOrigin == null ? void 0 : Xe.crossOrigin === "use-credentials" ? "use-credentials" : ""), Xe = i, Ie = Te, Xe.scriptResources[Ie] = null, Xe.moduleScriptResources[Ie] = null, Xe = [], qn(Xe, ze), ae.add(Xe), g.push(
          '<script type="module" src="',
          ue(Te),
          '"'
        ), typeof _n == "string" && g.push(
          ' integrity="',
          ue(_n),
          '"'
        ), typeof Se == "string" && g.push(
          ' crossorigin="',
          ue(Se),
          '"'
        ), Yo(g, i), g.push(' async=""><\/script>');
    return {
      placeholderPrefix: T,
      segmentPrefix: Y,
      boundaryPrefix: f,
      startInlineScript: "<script",
      startInlineStyle: "<style",
      preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
      externalRuntimeScript: null,
      bootstrapChunks: g,
      importMapChunks: [],
      onHeaders: void 0,
      headers: null,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: I,
      fontPreloads: H,
      highImagePreloads: K,
      styles: Q,
      bootstrapScripts: ae,
      scripts: be,
      bulkPreloads: Le,
      preloads: Pe,
      nonce: { script: void 0, style: void 0 },
      stylesToHoist: !1,
      generateStaticMarkup: o
    };
  }
  function Nl(i, o, f, g) {
    return f.generateStaticMarkup ? (i.push(ue(o)), !1) : (o === "" ? i = g : (g && i.push("<!-- -->"), i.push(ue(o)), i = !0), i);
  }
  function ml(i, o, f, g) {
    o.generateStaticMarkup || f && g && i.push("<!-- -->");
  }
  var Mc = Function.prototype.bind, Go = Symbol.for("react.client.reference");
  function Xo(i) {
    if (i == null)
      return null;
    if (typeof i == "function")
      return i.$$typeof === Go ? null : i.displayName || i.name || null;
    if (typeof i == "string")
      return i;
    switch (i) {
      case gt:
        return "Fragment";
      case vn:
        return "Profiler";
      case Hn:
        return "StrictMode";
      case W:
        return "Suspense";
      case Ce:
        return "SuspenseList";
      case _i:
        return "Activity";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case pn:
          return "Portal";
        case ve:
          return i.displayName || "Context";
        case Kt:
          return (i._context.displayName || "Context") + ".Consumer";
        case Ht:
          var o = i.render;
          return i = i.displayName, i || (i = o.displayName || o.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case Et:
          return o = i.displayName || null, o !== null ? o : Xo(i.type) || "Memo";
        case $:
          o = i._payload, i = i._init;
          try {
            return Xo(i(o));
          } catch {
          }
      }
    return null;
  }
  var yt = {}, lo = null;
  function Zo(i, o) {
    if (i !== o) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var f = o.parent;
      if (i === null) {
        if (f !== null)
          throw Error(_(401));
      } else {
        if (f === null)
          throw Error(_(401));
        Zo(i, f);
      }
      o.context._currentValue2 = o.value;
    }
  }
  function Oc(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Oc(i);
  }
  function Ul(i) {
    var o = i.parent;
    o !== null && Ul(o), i.context._currentValue2 = i.value;
  }
  function Jo(i, o) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null)
      throw Error(_(402));
    i.depth === o.depth ? Zo(i, o) : Jo(i, o);
  }
  function Er(i, o) {
    var f = o.parent;
    if (f === null)
      throw Error(_(402));
    i.depth === f.depth ? Zo(i, f) : Er(i, f), o.context._currentValue2 = o.value;
  }
  function Rl(i) {
    var o = lo;
    o !== i && (o === null ? Ul(i) : i === null ? Oc(o) : o.depth === i.depth ? Zo(o, i) : o.depth > i.depth ? Jo(o, i) : Er(o, i), lo = i);
  }
  var wu = {
    enqueueSetState: function(i, o) {
      i = i._reactInternals, i.queue !== null && i.queue.push(o);
    },
    enqueueReplaceState: function(i, o) {
      i = i._reactInternals, i.replace = !0, i.queue = [o];
    },
    enqueueForceUpdate: function() {
    }
  }, Qo = { id: 1, overflow: "" };
  function Rr(i, o, f) {
    var g = i.id;
    i = i.overflow;
    var T = 32 - Vo(g) - 1;
    g &= ~(1 << T), f += 1;
    var C = 32 - Vo(o) + T;
    if (30 < C) {
      var P = T - T % 5;
      return C = (g & (1 << P) - 1).toString(32), g >>= P, T -= P, {
        id: 1 << 32 - Vo(o) + T | f << T | g,
        overflow: C + i
      };
    }
    return {
      id: 1 << C | f << T | g,
      overflow: i
    };
  }
  var Vo = Math.clz32 ? Math.clz32 : Cr, mi = Math.log, io = Math.LN2;
  function Cr(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (mi(i) / io | 0) | 0;
  }
  function Ct() {
  }
  var kn = Error(_(460));
  function Tu(i, o, f) {
    switch (f = i[f], f === void 0 ? i.push(o) : f !== o && (o.then(Ct, Ct), o = f), o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Ct, Ct) : (i = o, i.status = "pending", i.then(
          function(g) {
            if (o.status === "pending") {
              var T = o;
              T.status = "fulfilled", T.value = g;
            }
          },
          function(g) {
            if (o.status === "pending") {
              var T = o;
              T.status = "rejected", T.reason = g;
            }
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
        throw fi = o, kn;
    }
  }
  var fi = null;
  function Cl() {
    if (fi === null)
      throw Error(_(459));
    var i = fi;
    return fi = null, i;
  }
  function xu(i, o) {
    return i === o && (i !== 0 || 1 / i === 1 / o) || i !== i && o !== o;
  }
  var hi = typeof Object.is == "function" ? Object.is : xu, Yl = null, ao = null, di = null, gi = null, oo = null, Oe = null, kl = !1, lt = !1, Gl = 0, wt = 0, Ui = -1, Ea = 0, Xl = null, vi = null, it = 0;
  function bi() {
    if (Yl === null)
      throw Error(_(321));
    return Yl;
  }
  function yi() {
    if (0 < it)
      throw Error(_(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ra() {
    return Oe === null ? oo === null ? (kl = !1, oo = Oe = yi()) : (kl = !0, Oe = oo) : Oe.next === null ? (kl = !1, Oe = Oe.next = yi()) : (kl = !0, Oe = Oe.next), Oe;
  }
  function Yi() {
    var i = Xl;
    return Xl = null, i;
  }
  function Ca() {
    gi = di = ao = Yl = null, lt = !1, oo = null, it = 0, Oe = vi = null;
  }
  function kr(i, o) {
    return typeof o == "function" ? o(i) : o;
  }
  function ka(i, o, f) {
    if (Yl = bi(), Oe = Ra(), kl) {
      var g = Oe.queue;
      if (o = g.dispatch, vi !== null && (f = vi.get(g), f !== void 0)) {
        vi.delete(g), g = Oe.memoizedState;
        do
          g = i(g, f.action), f = f.next;
        while (f !== null);
        return Oe.memoizedState = g, [g, o];
      }
      return [Oe.memoizedState, o];
    }
    return i = i === kr ? typeof o == "function" ? o() : o : f !== void 0 ? f(o) : o, Oe.memoizedState = i, i = Oe.queue = { last: null, dispatch: null }, i = i.dispatch = Eu.bind(
      null,
      Yl,
      i
    ), [Oe.memoizedState, i];
  }
  function Sl(i, o) {
    if (Yl = bi(), Oe = Ra(), o = o === void 0 ? null : o, Oe !== null) {
      var f = Oe.memoizedState;
      if (f !== null && o !== null) {
        var g = f[1];
        e:
          if (g === null)
            g = !1;
          else {
            for (var T = 0; T < g.length && T < o.length; T++)
              if (!hi(o[T], g[T])) {
                g = !1;
                break e;
              }
            g = !0;
          }
        if (g)
          return f[0];
      }
    }
    return i = i(), Oe.memoizedState = [i, o], i;
  }
  function Eu(i, o, f) {
    if (25 <= it)
      throw Error(_(301));
    if (i === Yl)
      if (lt = !0, i = { action: f, next: null }, vi === null && (vi = /* @__PURE__ */ new Map()), f = vi.get(o), f === void 0)
        vi.set(o, i);
      else {
        for (o = f; o.next !== null; )
          o = o.next;
        o.next = i;
      }
  }
  function Ru() {
    throw Error(_(440));
  }
  function Cu() {
    throw Error(_(394));
  }
  function co() {
    throw Error(_(479));
  }
  function uo(i, o, f) {
    bi();
    var g = wt++, T = di;
    if (typeof i.$$FORM_ACTION == "function") {
      var C = null, P = gi;
      T = T.formState;
      var Y = i.$$IS_SIGNATURE_EQUAL;
      if (T !== null && typeof Y == "function") {
        var I = T[1];
        Y.call(i, T[2], T[3]) && (C = f !== void 0 ? "p" + f : "k" + yr(
          JSON.stringify([P, null, g]),
          0
        ), I === C && (Ui = g, o = T[0]));
      }
      var H = i.bind(null, o);
      return i = function(Q) {
        H(Q);
      }, typeof H.$$FORM_ACTION == "function" && (i.$$FORM_ACTION = function(Q) {
        Q = H.$$FORM_ACTION(Q), f !== void 0 && (f += "", Q.action = f);
        var ae = Q.data;
        return ae && (C === null && (C = f !== void 0 ? "p" + f : "k" + yr(
          JSON.stringify([
            P,
            null,
            g
          ]),
          0
        )), ae.append("$ACTION_KEY", C)), Q;
      }), [o, i, !1];
    }
    var K = i.bind(null, o);
    return [
      o,
      function(Q) {
        K(Q);
      },
      !1
    ];
  }
  function so(i) {
    var o = Ea;
    return Ea += 1, Xl === null && (Xl = []), Tu(Xl, i, o);
  }
  function kt() {
    throw Error(_(393));
  }
  var ju = {
    readContext: function(i) {
      return i._currentValue2;
    },
    use: function(i) {
      if (i !== null && typeof i == "object") {
        if (typeof i.then == "function")
          return so(i);
        if (i.$$typeof === ve)
          return i._currentValue2;
      }
      throw Error(_(438, String(i)));
    },
    useContext: function(i) {
      return bi(), i._currentValue2;
    },
    useMemo: Sl,
    useReducer: ka,
    useRef: function(i) {
      Yl = bi(), Oe = Ra();
      var o = Oe.memoizedState;
      return o === null ? (i = { current: i }, Oe.memoizedState = i) : o;
    },
    useState: function(i) {
      return ka(kr, i);
    },
    useInsertionEffect: Ct,
    useLayoutEffect: Ct,
    useCallback: function(i, o) {
      return Sl(function() {
        return i;
      }, o);
    },
    useImperativeHandle: Ct,
    useEffect: Ct,
    useDebugValue: Ct,
    useDeferredValue: function(i, o) {
      return bi(), o !== void 0 ? o : i;
    },
    useTransition: function() {
      return bi(), [!1, Cu];
    },
    useId: function() {
      var i = ao.treeContext, o = i.overflow;
      i = i.id, i = (i & ~(1 << 32 - Vo(i) - 1)).toString(32) + o;
      var f = Gi;
      if (f === null)
        throw Error(_(404));
      return o = Gl++, i = "_" + f.idPrefix + "R_" + i, 0 < o && (i += "H" + o.toString(32)), i + "_";
    },
    useSyncExternalStore: function(i, o, f) {
      if (f === void 0)
        throw Error(_(407));
      return f();
    },
    useOptimistic: function(i) {
      return bi(), [i, co];
    },
    useActionState: uo,
    useFormState: uo,
    useHostTransitionStatus: function() {
      return bi(), wr;
    },
    useMemoCache: function(i) {
      for (var o = Array(i), f = 0; f < i; f++)
        o[f] = ci;
      return o;
    },
    useCacheRefresh: function() {
      return kt;
    },
    useEffectEvent: function() {
      return Ru;
    }
  }, Gi = null, Ko = {
    getCacheForType: function() {
      throw Error(_(248));
    },
    cacheSignal: function() {
      throw Error(_(248));
    }
  }, _c, wi;
  function Xi(i) {
    if (_c === void 0)
      try {
        throw Error();
      } catch (f) {
        var o = f.stack.trim().match(/\n( *(at )?)/);
        _c = o && o[1] || "", wi = -1 < f.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < f.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _c + i + wi;
  }
  var fo = !1;
  function Pl(i, o) {
    if (!i || fo)
      return "";
    fo = !0;
    var f = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var g = {
        DetermineComponentFrameRoot: function() {
          try {
            if (o) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (be) {
                  var ae = be;
                }
                Reflect.construct(i, [], Q);
              } else {
                try {
                  Q.call();
                } catch (be) {
                  ae = be;
                }
                i.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (be) {
                ae = be;
              }
              (Q = i()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (be) {
            if (be && ae && typeof be.stack == "string")
              return [be.stack, ae.stack];
          }
          return [null, null];
        }
      };
      g.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var T = Object.getOwnPropertyDescriptor(
        g.DetermineComponentFrameRoot,
        "name"
      );
      T && T.configurable && Object.defineProperty(
        g.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var C = g.DetermineComponentFrameRoot(), P = C[0], Y = C[1];
      if (P && Y) {
        var I = P.split(`
`), H = Y.split(`
`);
        for (T = g = 0; g < I.length && !I[g].includes("DetermineComponentFrameRoot"); )
          g++;
        for (; T < H.length && !H[T].includes(
          "DetermineComponentFrameRoot"
        ); )
          T++;
        if (g === I.length || T === H.length)
          for (g = I.length - 1, T = H.length - 1; 1 <= g && 0 <= T && I[g] !== H[T]; )
            T--;
        for (; 1 <= g && 0 <= T; g--, T--)
          if (I[g] !== H[T]) {
            if (g !== 1 || T !== 1)
              do
                if (g--, T--, 0 > T || I[g] !== H[T]) {
                  var K = `
` + I[g].replace(" at new ", " at ");
                  return i.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", i.displayName)), K;
                }
              while (1 <= g && 0 <= T);
            break;
          }
      }
    } finally {
      fo = !1, Error.prepareStackTrace = f;
    }
    return (f = i ? i.displayName || i.name : "") ? Xi(f) : "";
  }
  function Zi(i) {
    if (typeof i == "string")
      return Xi(i);
    if (typeof i == "function")
      return i.prototype && i.prototype.isReactComponent ? Pl(i, !0) : Pl(i, !1);
    if (typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case Ht:
          return Pl(i.render, !1);
        case Et:
          return Pl(i.type, !1);
        case $:
          var o = i, f = o._payload;
          o = o._init;
          try {
            i = o(f);
          } catch {
            return Xi("Lazy");
          }
          return Zi(i);
      }
      if (typeof i.name == "string") {
        e: {
          f = i.name, o = i.env;
          var g = i.debugLocation;
          if (g != null && (i = Error.prepareStackTrace, Error.prepareStackTrace = void 0, g = g.stack, Error.prepareStackTrace = i, g.startsWith(`Error: react-stack-top-frame
`) && (g = g.slice(29)), i = g.indexOf(`
`), i !== -1 && (g = g.slice(i + 1)), i = g.indexOf("react_stack_bottom_frame"), i !== -1 && (i = g.lastIndexOf(`
`, i)), i = i !== -1 ? g = g.slice(0, i) : "", g = i.lastIndexOf(`
`), i = g === -1 ? i : i.slice(g + 1), i.indexOf(f) !== -1)) {
            f = `
` + i;
            break e;
          }
          f = Xi(
            f + (o ? " [" + o + "]" : "")
          );
        }
        return f;
      }
    }
    switch (i) {
      case Ce:
        return Xi("SuspenseList");
      case W:
        return Xi("Suspense");
    }
    return "";
  }
  function Ji(i, o) {
    return (500 < o.byteSize || !1) && o.contentPreamble === null;
  }
  function ku(i) {
    if (typeof i == "object" && i !== null && typeof i.environmentName == "string") {
      var o = i.environmentName;
      i = [i].slice(0), typeof i[0] == "string" ? i.splice(
        0,
        1,
        "[%s] " + i[0],
        " " + o + " "
      ) : i.splice(0, 0, "[%s]", " " + o + " "), i.unshift(console), o = Mc.apply(console.error, i), o();
    } else
      console.error(i);
    return null;
  }
  function vs(i, o, f, g, T, C, P, Y, I, H, K) {
    var Q = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = i, this.renderState = o, this.rootFormatContext = f, this.progressiveChunkSize = g === void 0 ? 12800 : g, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = Q, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = T === void 0 ? ku : T, this.onPostpone = H === void 0 ? Ct : H, this.onAllReady = C === void 0 ? Ct : C, this.onShellReady = P === void 0 ? Ct : P, this.onShellError = Y === void 0 ? Ct : Y, this.onFatalError = I === void 0 ? Ct : I, this.formState = K === void 0 ? null : K;
  }
  function Sa(i, o, f, g, T, C, P, Y, I, H, K, Q) {
    return o = new vs(
      o,
      f,
      g,
      T,
      C,
      P,
      Y,
      I,
      H,
      K,
      Q
    ), f = Jr(
      o,
      0,
      null,
      g,
      !1,
      !1
    ), f.parentFlushed = !0, i = jo(
      o,
      null,
      i,
      -1,
      null,
      f,
      null,
      null,
      o.abortableTasks,
      null,
      g,
      null,
      Qo,
      null,
      null
    ), Qr(i), o.pingedTasks.push(i), o;
  }
  var at = null;
  function Zl(i, o) {
    i.pingedTasks.push(o), i.pingedTasks.length === 1 && (i.flushScheduled = i.destination !== null, es(i));
  }
  function qo(i, o, f, g, T) {
    return f = {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      row: o,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: f,
      errorDigest: null,
      contentState: qe(),
      fallbackState: qe(),
      contentPreamble: g,
      fallbackPreamble: T,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    }, o !== null && (o.pendingTasks++, g = o.boundaries, g !== null && (i.allPendingTasks++, f.pendingTasks++, g.push(f)), i = o.inheritedHoistables, i !== null && to(f.contentState, i)), f;
  }
  function jo(i, o, f, g, T, C, P, Y, I, H, K, Q, ae, be, Le) {
    i.allPendingTasks++, T === null ? i.pendingRootTasks++ : T.pendingTasks++, be !== null && be.pendingTasks++;
    var Pe = {
      replay: null,
      node: f,
      childIndex: g,
      ping: function() {
        return Zl(i, Pe);
      },
      blockedBoundary: T,
      blockedSegment: C,
      blockedPreamble: P,
      hoistableState: Y,
      abortSet: I,
      keyPath: H,
      formatContext: K,
      context: Q,
      treeContext: ae,
      row: be,
      componentStack: Le,
      thenableState: o
    };
    return I.add(Pe), Pe;
  }
  function Dc(i, o, f, g, T, C, P, Y, I, H, K, Q, ae, be) {
    i.allPendingTasks++, C === null ? i.pendingRootTasks++ : C.pendingTasks++, ae !== null && ae.pendingTasks++, f.pendingTasks++;
    var Le = {
      replay: f,
      node: g,
      childIndex: T,
      ping: function() {
        return Zl(i, Le);
      },
      blockedBoundary: C,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: P,
      abortSet: Y,
      keyPath: I,
      formatContext: H,
      context: K,
      treeContext: Q,
      row: ae,
      componentStack: be,
      thenableState: o
    };
    return Y.add(Le), Le;
  }
  function Jr(i, o, f, g, T, C) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: o,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: g,
      boundary: f,
      lastPushedText: T,
      textEmbedded: C
    };
  }
  function Qr(i) {
    var o = i.node;
    if (typeof o == "object" && o !== null)
      switch (o.$$typeof) {
        case xe:
          i.componentStack = { parent: i.componentStack, type: o.type };
      }
  }
  function _r(i) {
    return i === null ? null : { parent: i.parent, type: "Suspense Fallback" };
  }
  function Vr(i) {
    var o = {};
    return i && Object.defineProperty(o, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var f = "", g = i;
          do
            f += Zi(g.type), g = g.parent;
          while (g);
          var T = f;
        } catch (C) {
          T = `
Error generating stack: ` + C.message + `
` + C.stack;
        }
        return Object.defineProperty(o, "componentStack", {
          value: T
        }), T;
      }
    }), o;
  }
  function wn(i, o, f) {
    if (i = i.onError, o = i(o, f), o == null || typeof o == "string")
      return o;
  }
  function Kr(i, o) {
    var f = i.onShellError, g = i.onFatalError;
    f(o), g(o), i.destination !== null ? (i.status = 14, i.destination.destroy(o)) : (i.status = 13, i.fatalError = o);
  }
  function Mn(i, o) {
    Fl(i, o.next, o.hoistables);
  }
  function Fl(i, o, f) {
    for (; o !== null; ) {
      f !== null && (to(o.hoistables, f), o.inheritedHoistables = f);
      var g = o.boundaries;
      if (g !== null) {
        o.boundaries = null;
        for (var T = 0; T < g.length; T++) {
          var C = g[T];
          f !== null && to(C.contentState, f), Ql(i, C, null, null);
        }
      }
      if (o.pendingTasks--, 0 < o.pendingTasks)
        break;
      f = o.hoistables, o = o.next;
    }
  }
  function Lc(i, o) {
    var f = o.boundaries;
    if (f !== null && o.pendingTasks === f.length) {
      for (var g = !0, T = 0; T < f.length; T++) {
        var C = f[T];
        if (C.pendingTasks !== 1 || C.parentFlushed || Ji(i, C)) {
          g = !1;
          break;
        }
      }
      g && Fl(i, o, o.hoistables);
    }
  }
  function zc(i) {
    var o = {
      pendingTasks: 1,
      boundaries: null,
      hoistables: qe(),
      inheritedHoistables: null,
      together: !1,
      next: null
    };
    return i !== null && 0 < i.pendingTasks && (o.pendingTasks++, o.boundaries = [], i.next = o), o;
  }
  function Bc(i, o, f, g, T) {
    var C = o.keyPath, P = o.treeContext, Y = o.row;
    o.keyPath = f, f = g.length;
    var I = null;
    if (o.replay !== null) {
      var H = o.replay.slots;
      if (H !== null && typeof H == "object")
        for (var K = 0; K < f; K++) {
          var Q = T !== "backwards" && T !== "unstable_legacy-backwards" ? K : f - 1 - K, ae = g[Q];
          o.row = I = zc(
            I
          ), o.treeContext = Rr(P, f, Q);
          var be = H[Q];
          typeof be == "number" ? (nc(i, o, be, ae, Q), delete H[Q]) : _t(i, o, ae, Q), --I.pendingTasks === 0 && Mn(i, I);
        }
      else
        for (H = 0; H < f; H++)
          K = T !== "backwards" && T !== "unstable_legacy-backwards" ? H : f - 1 - H, Q = g[K], o.row = I = zc(I), o.treeContext = Rr(P, f, K), _t(i, o, Q, K), --I.pendingTasks === 0 && Mn(i, I);
    } else if (T !== "backwards" && T !== "unstable_legacy-backwards")
      for (T = 0; T < f; T++)
        H = g[T], o.row = I = zc(I), o.treeContext = Rr(
          P,
          f,
          T
        ), _t(i, o, H, T), --I.pendingTasks === 0 && Mn(i, I);
    else {
      for (T = o.blockedSegment, H = T.children.length, K = T.chunks.length, Q = f - 1; 0 <= Q; Q--) {
        ae = g[Q], o.row = I = zc(
          I
        ), o.treeContext = Rr(P, f, Q), be = Jr(
          i,
          K,
          null,
          o.formatContext,
          Q === 0 ? T.lastPushedText : !0,
          !0
        ), T.children.splice(H, 0, be), o.blockedSegment = be;
        try {
          _t(i, o, ae, Q), ml(
            be.chunks,
            i.renderState,
            be.lastPushedText,
            be.textEmbedded
          ), be.status = 1, --I.pendingTasks === 0 && Mn(i, I);
        } catch (Le) {
          throw be.status = i.status === 12 ? 3 : 4, Le;
        }
      }
      o.blockedSegment = T, T.lastPushedText = !1;
    }
    Y !== null && I !== null && 0 < I.pendingTasks && (Y.pendingTasks++, I.next = Y), o.treeContext = P, o.row = Y, o.keyPath = C;
  }
  function $o(i, o, f, g, T, C) {
    var P = o.thenableState;
    for (o.thenableState = null, Yl = {}, ao = o, di = i, gi = f, wt = Gl = 0, Ui = -1, Ea = 0, Xl = P, i = g(T, C); lt; )
      lt = !1, wt = Gl = 0, Ui = -1, Ea = 0, it += 1, Oe = null, i = g(T, C);
    return Ca(), i;
  }
  function Ti(i, o, f, g, T, C, P) {
    var Y = !1;
    if (C !== 0 && i.formState !== null) {
      var I = o.blockedSegment;
      if (I !== null) {
        Y = !0, I = I.chunks;
        for (var H = 0; H < C; H++)
          H === P ? I.push("<!--F!-->") : I.push("<!--F-->");
      }
    }
    C = o.keyPath, o.keyPath = f, T ? (f = o.treeContext, o.treeContext = Rr(f, 1, 0), _t(i, o, g, -1), o.treeContext = f) : Y ? _t(i, o, g, -1) : Sr(i, o, g, -1), o.keyPath = C;
  }
  function ec(i, o, f, g, T, C) {
    if (typeof g == "function")
      if (g.prototype && g.prototype.isReactComponent) {
        var P = T;
        if ("ref" in T) {
          P = {};
          for (var Y in T)
            Y !== "ref" && (P[Y] = T[Y]);
        }
        var I = g.defaultProps;
        if (I) {
          P === T && (P = vt({}, P, T));
          for (var H in I)
            P[H] === void 0 && (P[H] = I[H]);
        }
        T = P, P = yt, I = g.contextType, typeof I == "object" && I !== null && (P = I._currentValue2), P = new g(T, P);
        var K = P.state !== void 0 ? P.state : null;
        if (P.updater = wu, P.props = T, P.state = K, I = { queue: [], replace: !1 }, P._reactInternals = I, C = g.contextType, P.context = typeof C == "object" && C !== null ? C._currentValue2 : yt, C = g.getDerivedStateFromProps, typeof C == "function" && (C = C(T, K), K = C == null ? K : vt({}, K, C), P.state = K), typeof g.getDerivedStateFromProps != "function" && typeof P.getSnapshotBeforeUpdate != "function" && (typeof P.UNSAFE_componentWillMount == "function" || typeof P.componentWillMount == "function"))
          if (g = P.state, typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount(), g !== P.state && wu.enqueueReplaceState(
            P,
            P.state,
            null
          ), I.queue !== null && 0 < I.queue.length)
            if (g = I.queue, C = I.replace, I.queue = null, I.replace = !1, C && g.length === 1)
              P.state = g[0];
            else {
              for (I = C ? g[0] : P.state, K = !0, C = C ? 1 : 0; C < g.length; C++)
                H = g[C], H = typeof H == "function" ? H.call(P, I, T, void 0) : H, H != null && (K ? (K = !1, I = vt({}, I, H)) : vt(I, H));
              P.state = I;
            }
          else
            I.queue = null;
        if (g = P.render(), i.status === 12)
          throw null;
        T = o.keyPath, o.keyPath = f, Sr(i, o, g, -1), o.keyPath = T;
      } else {
        if (g = $o(i, o, f, g, T, void 0), i.status === 12)
          throw null;
        Ti(
          i,
          o,
          f,
          g,
          Gl !== 0,
          wt,
          Ui
        );
      }
    else if (typeof g == "string")
      if (P = o.blockedSegment, P === null)
        P = T.children, I = o.formatContext, K = o.keyPath, o.formatContext = Sc(I, g, T), o.keyPath = f, _t(i, o, P, -1), o.formatContext = I, o.keyPath = K;
      else {
        if (K = An(
          P.chunks,
          g,
          T,
          i.resumableState,
          i.renderState,
          o.blockedPreamble,
          o.hoistableState,
          o.formatContext,
          P.lastPushedText
        ), P.lastPushedText = !1, I = o.formatContext, C = o.keyPath, o.keyPath = f, (o.formatContext = Sc(I, g, T)).insertionMode === 3) {
          f = Jr(
            i,
            0,
            null,
            o.formatContext,
            !1,
            !1
          ), P.preambleChildren.push(f), o.blockedSegment = f;
          try {
            f.status = 6, _t(i, o, K, -1), ml(
              f.chunks,
              i.renderState,
              f.lastPushedText,
              f.textEmbedded
            ), f.status = 1;
          } finally {
            o.blockedSegment = P;
          }
        } else
          _t(i, o, K, -1);
        o.formatContext = I, o.keyPath = C;
        e: {
          switch (o = P.chunks, i = i.resumableState, g) {
            case "title":
            case "style":
            case "script":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break e;
            case "body":
              if (1 >= I.insertionMode) {
                i.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (I.insertionMode === 0) {
                i.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= I.insertionMode)
                break e;
          }
          o.push(ba(g));
        }
        P.lastPushedText = !1;
      }
    else {
      switch (g) {
        case ha:
        case Hn:
        case vn:
        case gt:
          g = o.keyPath, o.keyPath = f, Sr(i, o, T.children, -1), o.keyPath = g;
          return;
        case _i:
          g = o.blockedSegment, g === null ? T.mode !== "hidden" && (g = o.keyPath, o.keyPath = f, _t(i, o, T.children, -1), o.keyPath = g) : T.mode !== "hidden" && (i.renderState.generateStaticMarkup || g.chunks.push("<!--&-->"), g.lastPushedText = !1, P = o.keyPath, o.keyPath = f, _t(i, o, T.children, -1), o.keyPath = P, i.renderState.generateStaticMarkup || g.chunks.push("<!--/&-->"), g.lastPushedText = !1);
          return;
        case Ce:
          e: {
            if (g = T.children, T = T.revealOrder, T === "forwards" || T === "backwards" || T === "unstable_legacy-backwards") {
              if (Ee(g)) {
                Bc(i, o, f, g, T);
                break e;
              }
              if ((P = It(g)) && (P = P.call(g))) {
                if (I = P.next(), !I.done) {
                  do
                    I = P.next();
                  while (!I.done);
                  Bc(i, o, f, g, T);
                }
                break e;
              }
            }
            T === "together" ? (T = o.keyPath, P = o.row, I = o.row = zc(null), I.boundaries = [], I.together = !0, o.keyPath = f, Sr(i, o, g, -1), --I.pendingTasks === 0 && Mn(i, I), o.keyPath = T, o.row = P, P !== null && 0 < I.pendingTasks && (P.pendingTasks++, I.next = P)) : (T = o.keyPath, o.keyPath = f, Sr(i, o, g, -1), o.keyPath = T);
          }
          return;
        case Di:
        case N:
          throw Error(_(343));
        case W:
          e:
            if (o.replay !== null) {
              g = o.keyPath, P = o.formatContext, I = o.row, o.keyPath = f, o.formatContext = on(
                i.resumableState,
                P
              ), o.row = null, f = T.children;
              try {
                _t(i, o, f, -1);
              } finally {
                o.keyPath = g, o.formatContext = P, o.row = I;
              }
            } else {
              g = o.keyPath, C = o.formatContext;
              var Q = o.row, ae = o.blockedBoundary;
              H = o.blockedPreamble;
              var be = o.hoistableState;
              Y = o.blockedSegment;
              var Le = T.fallback;
              T = T.children;
              var Pe = /* @__PURE__ */ new Set(), Te = qo(
                i,
                o.row,
                Pe,
                null,
                null
              );
              i.trackedPostpones !== null && (Te.trackedContentKeyPath = f);
              var Ie = Jr(
                i,
                Y.chunks.length,
                Te,
                o.formatContext,
                !1,
                !1
              );
              Y.children.push(Ie), Y.lastPushedText = !1;
              var Se = Jr(
                i,
                0,
                null,
                o.formatContext,
                !1,
                !1
              );
              if (Se.parentFlushed = !0, i.trackedPostpones !== null) {
                P = o.componentStack, I = [f[0], "Suspense Fallback", f[2]], K = [I[1], I[2], [], null], i.trackedPostpones.workingMap.set(I, K), Te.trackedFallbackNode = K, o.blockedSegment = Ie, o.blockedPreamble = Te.fallbackPreamble, o.keyPath = I, o.formatContext = rt(
                  i.resumableState,
                  C
                ), o.componentStack = _r(P), Ie.status = 6;
                try {
                  _t(i, o, Le, -1), ml(
                    Ie.chunks,
                    i.renderState,
                    Ie.lastPushedText,
                    Ie.textEmbedded
                  ), Ie.status = 1;
                } catch (_n) {
                  throw Ie.status = i.status === 12 ? 3 : 4, _n;
                } finally {
                  o.blockedSegment = Y, o.blockedPreamble = H, o.keyPath = g, o.formatContext = C;
                }
                o = jo(
                  i,
                  null,
                  T,
                  -1,
                  Te,
                  Se,
                  Te.contentPreamble,
                  Te.contentState,
                  o.abortSet,
                  f,
                  on(
                    i.resumableState,
                    o.formatContext
                  ),
                  o.context,
                  o.treeContext,
                  null,
                  P
                ), Qr(o), i.pingedTasks.push(o);
              } else {
                o.blockedBoundary = Te, o.blockedPreamble = Te.contentPreamble, o.hoistableState = Te.contentState, o.blockedSegment = Se, o.keyPath = f, o.formatContext = on(
                  i.resumableState,
                  C
                ), o.row = null, Se.status = 6;
                try {
                  if (_t(i, o, T, -1), ml(
                    Se.chunks,
                    i.renderState,
                    Se.lastPushedText,
                    Se.textEmbedded
                  ), Se.status = 1, St(Te, Se), Te.pendingTasks === 0 && Te.status === 0) {
                    if (Te.status = 1, !Ji(i, Te)) {
                      Q !== null && --Q.pendingTasks === 0 && Mn(i, Q), i.pendingRootTasks === 0 && o.blockedPreamble && Aa(i);
                      break e;
                    }
                  } else
                    Q !== null && Q.together && Lc(i, Q);
                } catch (_n) {
                  Te.status = 4, i.status === 12 ? (Se.status = 3, P = i.fatalError) : (Se.status = 4, P = _n), I = Vr(o.componentStack), K = wn(
                    i,
                    P,
                    I
                  ), Te.errorDigest = K, Fa(i, Te);
                } finally {
                  o.blockedBoundary = ae, o.blockedPreamble = H, o.hoistableState = be, o.blockedSegment = Y, o.keyPath = g, o.formatContext = C, o.row = Q;
                }
                o = jo(
                  i,
                  null,
                  Le,
                  -1,
                  ae,
                  Ie,
                  Te.fallbackPreamble,
                  Te.fallbackState,
                  Pe,
                  [f[0], "Suspense Fallback", f[2]],
                  rt(
                    i.resumableState,
                    o.formatContext
                  ),
                  o.context,
                  o.treeContext,
                  o.row,
                  _r(
                    o.componentStack
                  )
                ), Qr(o), i.pingedTasks.push(o);
              }
            }
          return;
      }
      if (typeof g == "object" && g !== null)
        switch (g.$$typeof) {
          case Ht:
            if ("ref" in T)
              for (Le in P = {}, T)
                Le !== "ref" && (P[Le] = T[Le]);
            else
              P = T;
            g = $o(
              i,
              o,
              f,
              g.render,
              P,
              C
            ), Ti(
              i,
              o,
              f,
              g,
              Gl !== 0,
              wt,
              Ui
            );
            return;
          case Et:
            ec(i, o, f, g.type, T, C);
            return;
          case ve:
            if (I = T.children, P = o.keyPath, T = T.value, K = g._currentValue2, g._currentValue2 = T, C = lo, lo = g = {
              parent: C,
              depth: C === null ? 0 : C.depth + 1,
              context: g,
              parentValue: K,
              value: T
            }, o.context = g, o.keyPath = f, Sr(i, o, I, -1), i = lo, i === null)
              throw Error(_(403));
            i.context._currentValue2 = i.parentValue, i = lo = i.parent, o.context = i, o.keyPath = P;
            return;
          case Kt:
            T = T.children, g = T(g._context._currentValue2), T = o.keyPath, o.keyPath = f, Sr(i, o, g, -1), o.keyPath = T;
            return;
          case $:
            if (P = g._init, g = P(g._payload), i.status === 12)
              throw null;
            ec(i, o, f, g, T, C);
            return;
        }
      throw Error(
        _(130, g == null ? g : typeof g, "")
      );
    }
  }
  function nc(i, o, f, g, T) {
    var C = o.replay, P = o.blockedBoundary, Y = Jr(
      i,
      0,
      null,
      o.formatContext,
      !1,
      !1
    );
    Y.id = f, Y.parentFlushed = !0;
    try {
      o.replay = null, o.blockedSegment = Y, _t(i, o, g, T), Y.status = 1, P === null ? i.completedRootSegment = Y : (St(P, Y), P.parentFlushed && i.partialBoundaries.push(P));
    } finally {
      o.replay = C, o.blockedSegment = null;
    }
  }
  function Sr(i, o, f, g) {
    o.replay !== null && typeof o.replay.slots == "number" ? nc(i, o, o.replay.slots, f, g) : (o.node = f, o.childIndex = g, f = o.componentStack, Qr(o), On(i, o), o.componentStack = f);
  }
  function On(i, o) {
    var f = o.node, g = o.childIndex;
    if (f !== null) {
      if (typeof f == "object") {
        switch (f.$$typeof) {
          case xe:
            var T = f.type, C = f.key, P = f.props;
            f = P.ref;
            var Y = f !== void 0 ? f : null, I = Xo(T), H = C ?? (g === -1 ? 0 : g);
            if (C = [o.keyPath, I, H], o.replay !== null)
              e: {
                var K = o.replay;
                for (g = K.nodes, f = 0; f < g.length; f++) {
                  var Q = g[f];
                  if (H === Q[1]) {
                    if (Q.length === 4) {
                      if (I !== null && I !== Q[0])
                        throw Error(
                          _(490, Q[0], I)
                        );
                      var ae = Q[2];
                      I = Q[3], H = o.node, o.replay = {
                        nodes: ae,
                        slots: I,
                        pendingTasks: 1
                      };
                      try {
                        if (ec(i, o, C, T, P, Y), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
                          throw Error(_(488));
                        o.replay.pendingTasks--;
                      } catch (ln) {
                        if (typeof ln == "object" && ln !== null && (ln === kn || typeof ln.then == "function"))
                          throw o.node === H ? o.replay = K : g.splice(f, 1), ln;
                        o.replay.pendingTasks--, P = Vr(o.componentStack), C = i, i = o.blockedBoundary, T = ln, P = wn(C, T, P), pl(
                          C,
                          i,
                          ae,
                          I,
                          T,
                          P
                        );
                      }
                      o.replay = K;
                    } else {
                      if (T !== W)
                        throw Error(
                          _(
                            490,
                            "Suspense",
                            Xo(T) || "Unknown"
                          )
                        );
                      n: {
                        K = void 0, T = Q[5], Y = Q[2], I = Q[3], H = Q[4] === null ? [] : Q[4][2], Q = Q[4] === null ? null : Q[4][3];
                        var be = o.keyPath, Le = o.formatContext, Pe = o.row, Te = o.replay, Ie = o.blockedBoundary, Se = o.hoistableState, _n = P.children, ze = P.fallback, Xe = /* @__PURE__ */ new Set();
                        P = qo(
                          i,
                          o.row,
                          Xe,
                          null,
                          null
                        ), P.parentFlushed = !0, P.rootSegmentID = T, o.blockedBoundary = P, o.hoistableState = P.contentState, o.keyPath = C, o.formatContext = on(
                          i.resumableState,
                          Le
                        ), o.row = null, o.replay = {
                          nodes: Y,
                          slots: I,
                          pendingTasks: 1
                        };
                        try {
                          if (_t(i, o, _n, -1), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
                            throw Error(_(488));
                          if (o.replay.pendingTasks--, P.pendingTasks === 0 && P.status === 0) {
                            P.status = 1, i.completedBoundaries.push(P);
                            break n;
                          }
                        } catch (ln) {
                          P.status = 4, ae = Vr(o.componentStack), K = wn(
                            i,
                            ln,
                            ae
                          ), P.errorDigest = K, o.replay.pendingTasks--, i.clientRenderedBoundaries.push(P);
                        } finally {
                          o.blockedBoundary = Ie, o.hoistableState = Se, o.replay = Te, o.keyPath = be, o.formatContext = Le, o.row = Pe;
                        }
                        ae = Dc(
                          i,
                          null,
                          {
                            nodes: H,
                            slots: Q,
                            pendingTasks: 0
                          },
                          ze,
                          -1,
                          Ie,
                          P.fallbackState,
                          Xe,
                          [C[0], "Suspense Fallback", C[2]],
                          rt(
                            i.resumableState,
                            o.formatContext
                          ),
                          o.context,
                          o.treeContext,
                          o.row,
                          _r(
                            o.componentStack
                          )
                        ), Qr(ae), i.pingedTasks.push(ae);
                      }
                    }
                    g.splice(f, 1);
                    break e;
                  }
                }
              }
            else
              ec(i, o, C, T, P, Y);
            return;
          case pn:
            throw Error(_(257));
          case $:
            if (ae = f._init, f = ae(f._payload), i.status === 12)
              throw null;
            Sr(i, o, f, g);
            return;
        }
        if (Ee(f)) {
          je(i, o, f, g);
          return;
        }
        if ((ae = It(f)) && (ae = ae.call(f))) {
          if (f = ae.next(), !f.done) {
            P = [];
            do
              P.push(f.value), f = ae.next();
            while (!f.done);
            je(i, o, P, g);
          }
          return;
        }
        if (typeof f.then == "function")
          return o.thenableState = null, Sr(i, o, so(f), g);
        if (f.$$typeof === ve)
          return Sr(
            i,
            o,
            f._currentValue2,
            g
          );
        throw g = Object.prototype.toString.call(f), Error(
          _(
            31,
            g === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : g
          )
        );
      }
      typeof f == "string" ? (g = o.blockedSegment, g !== null && (g.lastPushedText = Nl(
        g.chunks,
        f,
        i.renderState,
        g.lastPushedText
      ))) : (typeof f == "number" || typeof f == "bigint") && (g = o.blockedSegment, g !== null && (g.lastPushedText = Nl(
        g.chunks,
        "" + f,
        i.renderState,
        g.lastPushedText
      )));
    }
  }
  function je(i, o, f, g) {
    var T = o.keyPath;
    if (g !== -1 && (o.keyPath = [o.keyPath, "Fragment", g], o.replay !== null)) {
      for (var C = o.replay, P = C.nodes, Y = 0; Y < P.length; Y++) {
        var I = P[Y];
        if (I[1] === g) {
          g = I[2], I = I[3], o.replay = { nodes: g, slots: I, pendingTasks: 1 };
          try {
            if (je(i, o, f, -1), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
              throw Error(_(488));
            o.replay.pendingTasks--;
          } catch (Q) {
            if (typeof Q == "object" && Q !== null && (Q === kn || typeof Q.then == "function"))
              throw Q;
            o.replay.pendingTasks--, f = Vr(o.componentStack);
            var H = o.blockedBoundary, K = Q;
            f = wn(i, K, f), pl(
              i,
              H,
              g,
              I,
              K,
              f
            );
          }
          o.replay = C, P.splice(Y, 1);
          break;
        }
      }
      o.keyPath = T;
      return;
    }
    if (C = o.treeContext, P = f.length, o.replay !== null && (Y = o.replay.slots, Y !== null && typeof Y == "object")) {
      for (g = 0; g < P; g++)
        I = f[g], o.treeContext = Rr(C, P, g), H = Y[g], typeof H == "number" ? (nc(i, o, H, I, g), delete Y[g]) : _t(i, o, I, g);
      o.treeContext = C, o.keyPath = T;
      return;
    }
    for (Y = 0; Y < P; Y++)
      g = f[Y], o.treeContext = Rr(C, P, Y), _t(i, o, g, Y);
    o.treeContext = C, o.keyPath = T;
  }
  function Qi(i, o, f) {
    if (f.status = 5, f.rootSegmentID = i.nextSegmentId++, i = f.trackedContentKeyPath, i === null)
      throw Error(_(486));
    var g = f.trackedFallbackNode, T = [], C = o.workingMap.get(i);
    return C === void 0 ? (f = [
      i[1],
      i[2],
      T,
      null,
      g,
      f.rootSegmentID
    ], o.workingMap.set(i, f), Nn(f, i[0], o), f) : (C[4] = g, C[5] = f.rootSegmentID, C);
  }
  function Pa(i, o, f, g) {
    g.status = 5;
    var T = f.keyPath, C = f.blockedBoundary;
    if (C === null)
      g.id = i.nextSegmentId++, o.rootSlots = g.id, i.completedRootSegment !== null && (i.completedRootSegment.status = 5);
    else {
      if (C !== null && C.status === 0) {
        var P = Qi(
          i,
          o,
          C
        );
        if (C.trackedContentKeyPath === T && f.childIndex === -1) {
          g.id === -1 && (g.id = g.parentFlushed ? C.rootSegmentID : i.nextSegmentId++), P[3] = g.id;
          return;
        }
      }
      if (g.id === -1 && (g.id = g.parentFlushed && C !== null ? C.rootSegmentID : i.nextSegmentId++), f.childIndex === -1)
        T === null ? o.rootSlots = g.id : (f = o.workingMap.get(T), f === void 0 ? (f = [T[1], T[2], [], g.id], Nn(f, T[0], o)) : f[3] = g.id);
      else {
        if (T === null) {
          if (i = o.rootSlots, i === null)
            i = o.rootSlots = {};
          else if (typeof i == "number")
            throw Error(_(491));
        } else if (C = o.workingMap, P = C.get(T), P === void 0)
          i = {}, P = [T[1], T[2], [], i], C.set(T, P), Nn(P, T[0], o);
        else if (i = P[3], i === null)
          i = P[3] = {};
        else if (typeof i == "number")
          throw Error(_(491));
        i[f.childIndex] = g.id;
      }
    }
  }
  function Fa(i, o) {
    i = i.trackedPostpones, i !== null && (o = o.trackedContentKeyPath, o !== null && (o = i.workingMap.get(o), o !== void 0 && (o.length = 4, o[2] = [], o[3] = null)));
  }
  function Vi(i, o, f) {
    return Dc(
      i,
      f,
      o.replay,
      o.node,
      o.childIndex,
      o.blockedBoundary,
      o.hoistableState,
      o.abortSet,
      o.keyPath,
      o.formatContext,
      o.context,
      o.treeContext,
      o.row,
      o.componentStack
    );
  }
  function Su(i, o, f) {
    var g = o.blockedSegment, T = Jr(
      i,
      g.chunks.length,
      null,
      o.formatContext,
      g.lastPushedText,
      !0
    );
    return g.children.push(T), g.lastPushedText = !1, jo(
      i,
      f,
      o.node,
      o.childIndex,
      o.blockedBoundary,
      T,
      o.blockedPreamble,
      o.hoistableState,
      o.abortSet,
      o.keyPath,
      o.formatContext,
      o.context,
      o.treeContext,
      o.row,
      o.componentStack
    );
  }
  function _t(i, o, f, g) {
    var T = o.formatContext, C = o.context, P = o.keyPath, Y = o.treeContext, I = o.componentStack, H = o.blockedSegment;
    if (H === null) {
      H = o.replay;
      try {
        return Sr(i, o, f, g);
      } catch (ae) {
        if (Ca(), f = ae === kn ? Cl() : ae, i.status !== 12 && typeof f == "object" && f !== null) {
          if (typeof f.then == "function") {
            g = ae === kn ? Yi() : null, i = Vi(i, o, g).ping, f.then(i, i), o.formatContext = T, o.context = C, o.keyPath = P, o.treeContext = Y, o.componentStack = I, o.replay = H, Rl(C);
            return;
          }
          if (f.message === "Maximum call stack size exceeded") {
            f = ae === kn ? Yi() : null, f = Vi(i, o, f), i.pingedTasks.push(f), o.formatContext = T, o.context = C, o.keyPath = P, o.treeContext = Y, o.componentStack = I, o.replay = H, Rl(C);
            return;
          }
        }
      }
    } else {
      var K = H.children.length, Q = H.chunks.length;
      try {
        return Sr(i, o, f, g);
      } catch (ae) {
        if (Ca(), H.children.length = K, H.chunks.length = Q, f = ae === kn ? Cl() : ae, i.status !== 12 && typeof f == "object" && f !== null) {
          if (typeof f.then == "function") {
            H = f, f = ae === kn ? Yi() : null, i = Su(i, o, f).ping, H.then(i, i), o.formatContext = T, o.context = C, o.keyPath = P, o.treeContext = Y, o.componentStack = I, Rl(C);
            return;
          }
          if (f.message === "Maximum call stack size exceeded") {
            H = ae === kn ? Yi() : null, H = Su(i, o, H), i.pingedTasks.push(H), o.formatContext = T, o.context = C, o.keyPath = P, o.treeContext = Y, o.componentStack = I, Rl(C);
            return;
          }
        }
      }
    }
    throw o.formatContext = T, o.context = C, o.keyPath = P, o.treeContext = Y, Rl(C), f;
  }
  function bs(i) {
    var o = i.blockedBoundary, f = i.blockedSegment;
    f !== null && (f.status = 3, Ql(this, o, i.row, f));
  }
  function pl(i, o, f, g, T, C) {
    for (var P = 0; P < f.length; P++) {
      var Y = f[P];
      if (Y.length === 4)
        pl(
          i,
          o,
          Y[2],
          Y[3],
          T,
          C
        );
      else {
        Y = Y[5];
        var I = i, H = C, K = qo(
          I,
          null,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        K.parentFlushed = !0, K.rootSegmentID = Y, K.status = 4, K.errorDigest = H, K.parentFlushed && I.clientRenderedBoundaries.push(K);
      }
    }
    if (f.length = 0, g !== null) {
      if (o === null)
        throw Error(_(487));
      if (o.status !== 4 && (o.status = 4, o.errorDigest = C, o.parentFlushed && i.clientRenderedBoundaries.push(o)), typeof g == "object")
        for (var Q in g)
          delete g[Q];
    }
  }
  function $u(i, o, f) {
    var g = i.blockedBoundary, T = i.blockedSegment;
    if (T !== null) {
      if (T.status === 6)
        return;
      T.status = 3;
    }
    var C = Vr(i.componentStack);
    if (g === null) {
      if (o.status !== 13 && o.status !== 14) {
        if (g = i.replay, g === null) {
          o.trackedPostpones !== null && T !== null ? (g = o.trackedPostpones, wn(o, f, C), Pa(o, g, i, T), Ql(o, null, i.row, T)) : (wn(o, f, C), Kr(o, f));
          return;
        }
        g.pendingTasks--, g.pendingTasks === 0 && 0 < g.nodes.length && (T = wn(o, f, C), pl(
          o,
          null,
          g.nodes,
          g.slots,
          f,
          T
        )), o.pendingRootTasks--, o.pendingRootTasks === 0 && Jl(o);
      }
    } else {
      var P = o.trackedPostpones;
      if (g.status !== 4) {
        if (P !== null && T !== null)
          return wn(o, f, C), Pa(o, P, i, T), g.fallbackAbortableTasks.forEach(function(Y) {
            return $u(Y, o, f);
          }), g.fallbackAbortableTasks.clear(), Ql(o, g, i.row, T);
        g.status = 4, T = wn(o, f, C), g.status = 4, g.errorDigest = T, Fa(o, g), g.parentFlushed && o.clientRenderedBoundaries.push(g);
      }
      g.pendingTasks--, T = g.row, T !== null && --T.pendingTasks === 0 && Mn(o, T), g.fallbackAbortableTasks.forEach(function(Y) {
        return $u(Y, o, f);
      }), g.fallbackAbortableTasks.clear();
    }
    i = i.row, i !== null && --i.pendingTasks === 0 && Mn(o, i), o.allPendingTasks--, o.allPendingTasks === 0 && tc(o);
  }
  function Pu(i, o) {
    try {
      var f = i.renderState, g = f.onHeaders;
      if (g) {
        var T = f.headers;
        if (T) {
          f.headers = null;
          var C = T.preconnects;
          if (T.fontPreloads && (C && (C += ", "), C += T.fontPreloads), T.highImagePreloads && (C && (C += ", "), C += T.highImagePreloads), !o) {
            var P = f.styles.values(), Y = P.next();
            e:
              for (; 0 < T.remainingCapacity && !Y.done; Y = P.next())
                for (var I = Y.value.sheets.values(), H = I.next(); 0 < T.remainingCapacity && !H.done; H = I.next()) {
                  var K = H.value, Q = K.props, ae = Q.href, be = K.props, Le = In(be.href, "style", {
                    crossOrigin: be.crossOrigin,
                    integrity: be.integrity,
                    nonce: be.nonce,
                    type: be.type,
                    fetchPriority: be.fetchPriority,
                    referrerPolicy: be.referrerPolicy,
                    media: be.media
                  });
                  if (0 <= (T.remainingCapacity -= Le.length + 2))
                    f.resets.style[ae] = Tr, C && (C += ", "), C += Le, f.resets.style[ae] = typeof Q.crossOrigin == "string" || typeof Q.integrity == "string" ? [Q.crossOrigin, Q.integrity] : Tr;
                  else
                    break e;
                }
          }
          g(C ? { Link: C } : {});
        }
      }
    } catch (Pe) {
      wn(i, Pe, {});
    }
  }
  function Jl(i) {
    i.trackedPostpones === null && Pu(i, !0), i.trackedPostpones === null && Aa(i), i.onShellError = Ct, i = i.onShellReady, i();
  }
  function tc(i) {
    Pu(
      i,
      i.trackedPostpones === null ? !0 : i.completedRootSegment === null || i.completedRootSegment.status !== 5
    ), Aa(i), i = i.onAllReady, i();
  }
  function St(i, o) {
    if (o.chunks.length === 0 && o.children.length === 1 && o.children[0].boundary === null && o.children[0].id === -1) {
      var f = o.children[0];
      f.id = o.id, f.parentFlushed = !0, f.status !== 1 && f.status !== 3 && f.status !== 4 || St(i, f);
    } else
      i.completedSegments.push(o);
  }
  function Ql(i, o, f, g) {
    if (f !== null && (--f.pendingTasks === 0 ? Mn(i, f) : f.together && Lc(i, f)), i.allPendingTasks--, o === null) {
      if (g !== null && g.parentFlushed) {
        if (i.completedRootSegment !== null)
          throw Error(_(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && Jl(i);
    } else if (o.pendingTasks--, o.status !== 4)
      if (o.pendingTasks === 0) {
        if (o.status === 0 && (o.status = 1), g !== null && g.parentFlushed && (g.status === 1 || g.status === 3) && St(o, g), o.parentFlushed && i.completedBoundaries.push(o), o.status === 1)
          f = o.row, f !== null && to(f.hoistables, o.contentState), Ji(i, o) || (o.fallbackAbortableTasks.forEach(bs, i), o.fallbackAbortableTasks.clear(), f !== null && --f.pendingTasks === 0 && Mn(i, f)), i.pendingRootTasks === 0 && i.trackedPostpones === null && o.contentPreamble !== null && Aa(i);
        else if (o.status === 5 && (o = o.row, o !== null)) {
          if (i.trackedPostpones !== null) {
            f = i.trackedPostpones;
            var T = o.next;
            if (T !== null && (g = T.boundaries, g !== null))
              for (T.boundaries = null, T = 0; T < g.length; T++) {
                var C = g[T];
                Qi(i, f, C), Ql(i, C, null, null);
              }
          }
          --o.pendingTasks === 0 && Mn(i, o);
        }
      } else
        g === null || !g.parentFlushed || g.status !== 1 && g.status !== 3 || (St(o, g), o.completedSegments.length === 1 && o.parentFlushed && i.partialBoundaries.push(o)), o = o.row, o !== null && o.together && Lc(i, o);
    i.allPendingTasks === 0 && tc(i);
  }
  function es(i) {
    if (i.status !== 14 && i.status !== 13) {
      var o = lo, f = me.H;
      me.H = ju;
      var g = me.A;
      me.A = Ko;
      var T = at;
      at = i;
      var C = Gi;
      Gi = i.resumableState;
      try {
        var P = i.pingedTasks, Y;
        for (Y = 0; Y < P.length; Y++) {
          var I = P[Y], H = i, K = I.blockedSegment;
          if (K === null) {
            var Q = H;
            if (I.replay.pendingTasks !== 0) {
              Rl(I.context);
              try {
                if (typeof I.replay.slots == "number" ? nc(
                  Q,
                  I,
                  I.replay.slots,
                  I.node,
                  I.childIndex
                ) : On(Q, I), I.replay.pendingTasks === 1 && 0 < I.replay.nodes.length)
                  throw Error(_(488));
                I.replay.pendingTasks--, I.abortSet.delete(I), Ql(
                  Q,
                  I.blockedBoundary,
                  I.row,
                  null
                );
              } catch (Me) {
                Ca();
                var ae = Me === kn ? Cl() : Me;
                if (typeof ae == "object" && ae !== null && typeof ae.then == "function") {
                  var be = I.ping;
                  ae.then(be, be), I.thenableState = Me === kn ? Yi() : null;
                } else {
                  I.replay.pendingTasks--, I.abortSet.delete(I);
                  var Le = Vr(I.componentStack);
                  H = void 0;
                  var Pe = Q, Te = I.blockedBoundary, Ie = Q.status === 12 ? Q.fatalError : ae, Se = I.replay.nodes, _n = I.replay.slots;
                  H = wn(
                    Pe,
                    Ie,
                    Le
                  ), pl(
                    Pe,
                    Te,
                    Se,
                    _n,
                    Ie,
                    H
                  ), Q.pendingRootTasks--, Q.pendingRootTasks === 0 && Jl(Q), Q.allPendingTasks--, Q.allPendingTasks === 0 && tc(Q);
                }
              } finally {
              }
            }
          } else if (Q = void 0, Pe = K, Pe.status === 0) {
            Pe.status = 6, Rl(I.context);
            var ze = Pe.children.length, Xe = Pe.chunks.length;
            try {
              On(H, I), ml(
                Pe.chunks,
                H.renderState,
                Pe.lastPushedText,
                Pe.textEmbedded
              ), I.abortSet.delete(I), Pe.status = 1, Ql(
                H,
                I.blockedBoundary,
                I.row,
                Pe
              );
            } catch (Me) {
              Ca(), Pe.children.length = ze, Pe.chunks.length = Xe;
              var ln = Me === kn ? Cl() : H.status === 12 ? H.fatalError : Me;
              if (H.status === 12 && H.trackedPostpones !== null) {
                var _e = H.trackedPostpones, mn = Vr(I.componentStack);
                I.abortSet.delete(I), wn(H, ln, mn), Pa(H, _e, I, Pe), Ql(
                  H,
                  I.blockedBoundary,
                  I.row,
                  Pe
                );
              } else if (typeof ln == "object" && ln !== null && typeof ln.then == "function") {
                Pe.status = 0, I.thenableState = Me === kn ? Yi() : null;
                var $e = I.ping;
                ln.then($e, $e);
              } else {
                var er = Vr(I.componentStack);
                I.abortSet.delete(I), Pe.status = 4;
                var cn = I.blockedBoundary, Je = I.row;
                if (Je !== null && --Je.pendingTasks === 0 && Mn(H, Je), H.allPendingTasks--, Q = wn(
                  H,
                  ln,
                  er
                ), cn === null)
                  Kr(H, ln);
                else if (cn.pendingTasks--, cn.status !== 4) {
                  cn.status = 4, cn.errorDigest = Q, Fa(H, cn);
                  var en = cn.row;
                  en !== null && --en.pendingTasks === 0 && Mn(H, en), cn.parentFlushed && H.clientRenderedBoundaries.push(cn), H.pendingRootTasks === 0 && H.trackedPostpones === null && cn.contentPreamble !== null && Aa(H);
                }
                H.allPendingTasks === 0 && tc(H);
              }
            } finally {
            }
          }
        }
        P.splice(0, Y), i.destination !== null && Wc(i, i.destination);
      } catch (Me) {
        wn(i, Me, {}), Kr(i, Me);
      } finally {
        Gi = C, me.H = f, me.A = g, f === ju && Rl(o), at = T;
      }
    }
  }
  function pa(i, o, f) {
    o.preambleChildren.length && f.push(o.preambleChildren);
    for (var g = !1, T = 0; T < o.children.length; T++)
      g = Hc(
        i,
        o.children[T],
        f
      ) || g;
    return g;
  }
  function Hc(i, o, f) {
    var g = o.boundary;
    if (g === null)
      return pa(
        i,
        o,
        f
      );
    var T = g.contentPreamble, C = g.fallbackPreamble;
    if (T === null || C === null)
      return !1;
    switch (g.status) {
      case 1:
        if (Zu(i.renderState, T), i.byteSize += g.byteSize, o = g.completedSegments[0], !o)
          throw Error(_(391));
        return pa(
          i,
          o,
          f
        );
      case 5:
        if (i.trackedPostpones !== null)
          return !0;
      case 4:
        if (o.status === 1)
          return Zu(i.renderState, C), pa(
            i,
            o,
            f
          );
      default:
        return !0;
    }
  }
  function Aa(i) {
    if (i.completedRootSegment && i.completedPreambleSegments === null) {
      var o = [], f = i.byteSize, g = Hc(
        i,
        i.completedRootSegment,
        o
      ), T = i.renderState.preamble;
      g === !1 || T.headChunks && T.bodyChunks ? i.completedPreambleSegments = o : i.byteSize = f;
    }
  }
  function Ut(i, o, f, g) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        f.id = i.nextSegmentId++;
      case 5:
        return g = f.id, f.lastPushedText = !1, f.textEmbedded = !1, i = i.renderState, o.push('<template id="'), o.push(i.placeholderPrefix), i = g.toString(16), o.push(i), o.push('"></template>');
      case 1:
        f.status = 2;
        var T = !0, C = f.chunks, P = 0;
        f = f.children;
        for (var Y = 0; Y < f.length; Y++) {
          for (T = f[Y]; P < T.index; P++)
            o.push(C[P]);
          T = Ki(i, o, T, g);
        }
        for (; P < C.length - 1; P++)
          o.push(C[P]);
        return P < C.length && (T = o.push(C[P])), T;
      case 3:
        return !0;
      default:
        throw Error(_(390));
    }
  }
  var Dt = 0;
  function Ki(i, o, f, g) {
    var T = f.boundary;
    if (T === null)
      return Ut(i, o, f, g);
    if (T.parentFlushed = !0, T.status === 4) {
      var C = T.row;
      return C !== null && --C.pendingTasks === 0 && Mn(i, C), i.renderState.generateStaticMarkup || (T = T.errorDigest, o.push("<!--$!-->"), o.push("<template"), T && (o.push(' data-dgst="'), T = ue(T), o.push(T), o.push('"')), o.push("></template>")), Ut(i, o, f, g), i = i.renderState.generateStaticMarkup ? !0 : o.push("<!--/$-->"), i;
    }
    if (T.status !== 1)
      return T.status === 0 && (T.rootSegmentID = i.nextSegmentId++), 0 < T.completedSegments.length && i.partialBoundaries.push(T), tl(
        o,
        i.renderState,
        T.rootSegmentID
      ), g && to(g, T.fallbackState), Ut(i, o, f, g), o.push("<!--/$-->");
    if (!ho && Ji(i, T) && Dt + T.byteSize > i.progressiveChunkSize)
      return T.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(T), tl(
        o,
        i.renderState,
        T.rootSegmentID
      ), Ut(i, o, f, g), o.push("<!--/$-->");
    if (Dt += T.byteSize, g && to(g, T.contentState), f = T.row, f !== null && Ji(i, T) && --f.pendingTasks === 0 && Mn(i, f), i.renderState.generateStaticMarkup || o.push("<!--$-->"), f = T.completedSegments, f.length !== 1)
      throw Error(_(391));
    return Ki(i, o, f[0], g), i = i.renderState.generateStaticMarkup ? !0 : o.push("<!--/$-->"), i;
  }
  function Sn(i, o, f, g) {
    return Hl(
      o,
      i.renderState,
      f.parentFormatContext,
      f.id
    ), Ki(i, o, f, g), Ju(o, f.parentFormatContext);
  }
  function fn(i, o, f) {
    Dt = f.byteSize;
    for (var g = f.completedSegments, T = 0; T < g.length; T++)
      Ia(
        i,
        o,
        f,
        g[T]
      );
    g.length = 0, g = f.row, g !== null && Ji(i, f) && --g.pendingTasks === 0 && Mn(i, g), No(
      o,
      f.contentState,
      i.renderState
    ), g = i.resumableState, i = i.renderState, T = f.rootSegmentID, f = f.contentState;
    var C = i.stylesToHoist;
    return i.stylesToHoist = !1, o.push(i.startInlineScript), o.push(">"), C ? (!(g.instructions & 4) && (g.instructions |= 4, o.push(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
    )), !(g.instructions & 2) && (g.instructions |= 2, o.push(
      `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
    )), g.instructions & 8 ? o.push('$RR("') : (g.instructions |= 8, o.push(
      `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
    ))) : (!(g.instructions & 2) && (g.instructions |= 2, o.push(
      `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
    )), o.push('$RC("')), g = T.toString(16), o.push(i.boundaryPrefix), o.push(g), o.push('","'), o.push(i.segmentPrefix), o.push(g), C ? (o.push('",'), Wl(o, f)) : o.push('"'), f = o.push(")<\/script>"), bu(o, i) && f;
  }
  function Ia(i, o, f, g) {
    if (g.status === 2)
      return !0;
    var T = f.contentState, C = g.id;
    if (C === -1) {
      if ((g.id = f.rootSegmentID) === -1)
        throw Error(_(392));
      return Sn(i, o, g, T);
    }
    return C === f.rootSegmentID ? Sn(i, o, g, T) : (Sn(i, o, g, T), f = i.resumableState, i = i.renderState, o.push(i.startInlineScript), o.push(">"), f.instructions & 1 ? o.push('$RS("') : (f.instructions |= 1, o.push(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    )), o.push(i.segmentPrefix), C = C.toString(16), o.push(C), o.push('","'), o.push(i.placeholderPrefix), o.push(C), o = o.push('")<\/script>'), o);
  }
  var ho = !1;
  function Wc(i, o) {
    try {
      if (!(0 < i.pendingRootTasks)) {
        var f, g = i.completedRootSegment;
        if (g !== null) {
          if (g.status === 5)
            return;
          var T = i.completedPreambleSegments;
          if (T === null)
            return;
          Dt = i.byteSize;
          var C = i.resumableState, P = i.renderState, Y = P.preamble, I = Y.htmlChunks, H = Y.headChunks, K;
          if (I) {
            for (K = 0; K < I.length; K++)
              o.push(I[K]);
            if (H)
              for (K = 0; K < H.length; K++)
                o.push(H[K]);
            else {
              var Q = Wn("head");
              o.push(Q), o.push(">");
            }
          } else if (H)
            for (K = 0; K < H.length; K++)
              o.push(H[K]);
          var ae = P.charsetChunks;
          for (K = 0; K < ae.length; K++)
            o.push(ae[K]);
          ae.length = 0, P.preconnects.forEach(Xr, o), P.preconnects.clear();
          var be = P.viewportChunks;
          for (K = 0; K < be.length; K++)
            o.push(be[K]);
          be.length = 0, P.fontPreloads.forEach(Xr, o), P.fontPreloads.clear(), P.highImagePreloads.forEach(Xr, o), P.highImagePreloads.clear(), nt = P, P.styles.forEach(Ue, o), nt = null;
          var Le = P.importMapChunks;
          for (K = 0; K < Le.length; K++)
            o.push(Le[K]);
          Le.length = 0, P.bootstrapScripts.forEach(Xr, o), P.scripts.forEach(Xr, o), P.scripts.clear(), P.bulkPreloads.forEach(Xr, o), P.bulkPreloads.clear(), C.instructions |= 32;
          var Pe = P.hoistableChunks;
          for (K = 0; K < Pe.length; K++)
            o.push(Pe[K]);
          for (C = Pe.length = 0; C < T.length; C++) {
            var Te = T[C];
            for (P = 0; P < Te.length; P++)
              Ki(i, o, Te[P], null);
          }
          var Ie = i.renderState.preamble, Se = Ie.headChunks;
          if (Ie.htmlChunks || Se) {
            var _n = ba("head");
            o.push(_n);
          }
          var ze = Ie.bodyChunks;
          if (ze)
            for (T = 0; T < ze.length; T++)
              o.push(ze[T]);
          Ki(i, o, g, null), i.completedRootSegment = null;
          var Xe = i.renderState;
          if (i.allPendingTasks !== 0 || i.clientRenderedBoundaries.length !== 0 || i.completedBoundaries.length !== 0 || i.trackedPostpones !== null && (i.trackedPostpones.rootNodes.length !== 0 || i.trackedPostpones.rootSlots !== null)) {
            var ln = i.resumableState;
            if (!(ln.instructions & 64)) {
              if (ln.instructions |= 64, o.push(Xe.startInlineScript), !(ln.instructions & 32)) {
                ln.instructions |= 32;
                var _e = "_" + ln.idPrefix + "R_";
                o.push(' id="');
                var mn = ue(_e);
                o.push(mn), o.push('"');
              }
              o.push(">"), o.push(
                "requestAnimationFrame(function(){$RT=performance.now()});"
              ), o.push("<\/script>");
            }
          }
          bu(o, Xe);
        }
        var $e = i.renderState;
        g = 0;
        var er = $e.viewportChunks;
        for (g = 0; g < er.length; g++)
          o.push(er[g]);
        er.length = 0, $e.preconnects.forEach(Xr, o), $e.preconnects.clear(), $e.fontPreloads.forEach(Xr, o), $e.fontPreloads.clear(), $e.highImagePreloads.forEach(
          Xr,
          o
        ), $e.highImagePreloads.clear(), $e.styles.forEach(Uo, o), $e.scripts.forEach(Xr, o), $e.scripts.clear(), $e.bulkPreloads.forEach(Xr, o), $e.bulkPreloads.clear();
        var cn = $e.hoistableChunks;
        for (g = 0; g < cn.length; g++)
          o.push(cn[g]);
        cn.length = 0;
        var Je = i.clientRenderedBoundaries;
        for (f = 0; f < Je.length; f++) {
          var en = Je[f];
          $e = o;
          var Me = i.resumableState, nn = i.renderState, Pt = en.rootSegmentID, He = en.errorDigest;
          $e.push(nn.startInlineScript), $e.push(">"), Me.instructions & 4 ? $e.push('$RX("') : (Me.instructions |= 4, $e.push(
            '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
          )), $e.push(nn.boundaryPrefix);
          var qi = Pt.toString(16);
          if ($e.push(qi), $e.push('"'), He) {
            $e.push(",");
            var Ei = Qn(
              He || ""
            );
            $e.push(Ei);
          }
          var nr = $e.push(")<\/script>");
          if (!nr) {
            i.destination = null, f++, Je.splice(0, f);
            return;
          }
        }
        Je.splice(0, f);
        var rl = i.completedBoundaries;
        for (f = 0; f < rl.length; f++)
          if (!fn(i, o, rl[f])) {
            i.destination = null, f++, rl.splice(0, f);
            return;
          }
        rl.splice(0, f), ho = !0;
        var ll = i.partialBoundaries;
        for (f = 0; f < ll.length; f++) {
          var il = ll[f];
          e: {
            Je = i, en = o, Dt = il.byteSize;
            var Vl = il.completedSegments;
            for (nr = 0; nr < Vl.length; nr++)
              if (!Ia(
                Je,
                en,
                il,
                Vl[nr]
              )) {
                nr++, Vl.splice(0, nr);
                var Ri = !1;
                break e;
              }
            Vl.splice(0, nr);
            var Tt = il.row;
            Tt !== null && Tt.together && il.pendingTasks === 1 && (Tt.pendingTasks === 1 ? Fl(
              Je,
              Tt,
              Tt.hoistables
            ) : Tt.pendingTasks--), Ri = No(
              en,
              il.contentState,
              Je.renderState
            );
          }
          if (!Ri) {
            i.destination = null, f++, ll.splice(0, f);
            return;
          }
        }
        ll.splice(0, f), ho = !1;
        var Ma = i.completedBoundaries;
        for (f = 0; f < Ma.length; f++)
          if (!fn(i, o, Ma[f])) {
            i.destination = null, f++, Ma.splice(0, f);
            return;
          }
        Ma.splice(0, f);
      }
    } finally {
      ho = !1, i.allPendingTasks === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && (i.flushScheduled = !1, f = i.resumableState, f.hasBody && (ll = ba("body"), o.push(ll)), f.hasHtml && (f = ba("html"), o.push(f)), i.status = 14, o.push(null), i.destination = null);
    }
  }
  function go(i) {
    if (i.flushScheduled === !1 && i.pingedTasks.length === 0 && i.destination !== null) {
      i.flushScheduled = !0;
      var o = i.destination;
      o ? Wc(i, o) : i.flushScheduled = !1;
    }
  }
  function Fu(i, o) {
    if (i.status === 13)
      i.status = 14, o.destroy(i.fatalError);
    else if (i.status !== 14 && i.destination === null) {
      i.destination = o;
      try {
        Wc(i, o);
      } catch (f) {
        wn(i, f, {}), Kr(i, f);
      }
    }
  }
  function ys(i, o) {
    (i.status === 11 || i.status === 10) && (i.status = 12);
    try {
      var f = i.abortableTasks;
      if (0 < f.size) {
        var g = o === void 0 ? Error(_(432)) : typeof o == "object" && o !== null && typeof o.then == "function" ? Error(_(530)) : o;
        i.fatalError = g, f.forEach(function(T) {
          return $u(T, i, g);
        }), f.clear();
      }
      i.destination !== null && Wc(i, i.destination);
    } catch (T) {
      wn(i, T, {}), Kr(i, T);
    }
  }
  function Nn(i, o, f) {
    if (o === null)
      f.rootNodes.push(i);
    else {
      var g = f.workingMap, T = g.get(o);
      T === void 0 && (T = [o[1], o[2], [], null], g.set(o, T), Nn(T, o[0], f)), T[2].push(i);
    }
  }
  function xi() {
  }
  function ns(i, o, f, g) {
    var T = !1, C = null, P = "", Y = !1;
    if (o = qt(o ? o.identifierPrefix : void 0), i = Sa(
      i,
      o,
      ro(o, f),
      tt(0, null, 0, null),
      1 / 0,
      xi,
      void 0,
      function() {
        Y = !0;
      },
      void 0,
      void 0,
      void 0
    ), i.flushScheduled = i.destination !== null, es(i), i.status === 10 && (i.status = 11), i.trackedPostpones === null && Pu(i, i.pendingRootTasks === 0), ys(i, g), Fu(i, {
      push: function(I) {
        return I !== null && (P += I), !0;
      },
      destroy: function(I) {
        T = !0, C = I;
      }
    }), T && C !== g)
      throw C;
    if (!Y)
      throw Error(_(426));
    return P;
  }
  return Vs.renderToStaticMarkup = function(i, o) {
    return ns(
      i,
      o,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, Vs.renderToString = function(i, o) {
    return ns(
      i,
      o,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, Vs.version = "19.2.4", Vs;
}
var Ds = {};
/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mf;
function Zf() {
  if (Mf)
    return Ds;
  Mf = 1;
  var he = hu, re = af;
  function _(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        a += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var xe = Symbol.for("react.transitional.element"), pn = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), Hn = Symbol.for("react.strict_mode"), vn = Symbol.for("react.profiler"), Kt = Symbol.for("react.consumer"), ve = Symbol.for("react.context"), Ht = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), N = Symbol.for("react.scope"), _i = Symbol.for("react.activity"), ha = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.memo_cache_sentinel"), Di = Symbol.for("react.view_transition"), ui = Symbol.iterator;
  function It(l) {
    return l === null || typeof l != "object" ? null : (l = ui && l[ui] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ee = Array.isArray;
  function yr(l, a) {
    var s = l.length & 3, v = l.length - s, w = a;
    for (a = 0; a < v; ) {
      var R = l.charCodeAt(a) & 255 | (l.charCodeAt(++a) & 255) << 8 | (l.charCodeAt(++a) & 255) << 16 | (l.charCodeAt(++a) & 255) << 24;
      ++a, R = 3432918353 * (R & 65535) + ((3432918353 * (R >>> 16) & 65535) << 16) & 4294967295, R = R << 15 | R >>> 17, R = 461845907 * (R & 65535) + ((461845907 * (R >>> 16) & 65535) << 16) & 4294967295, w ^= R, w = w << 13 | w >>> 19, w = 5 * (w & 65535) + ((5 * (w >>> 16) & 65535) << 16) & 4294967295, w = (w & 65535) + 27492 + (((w >>> 16) + 58964 & 65535) << 16);
    }
    switch (R = 0, s) {
      case 3:
        R ^= (l.charCodeAt(a + 2) & 255) << 16;
      case 2:
        R ^= (l.charCodeAt(a + 1) & 255) << 8;
      case 1:
        R ^= l.charCodeAt(a) & 255, R = 3432918353 * (R & 65535) + ((3432918353 * (R >>> 16) & 65535) << 16) & 4294967295, R = R << 15 | R >>> 17, w ^= 461845907 * (R & 65535) + ((461845907 * (R >>> 16) & 65535) << 16) & 4294967295;
    }
    return w ^= l.length, w ^= w >>> 16, w = 2246822507 * (w & 65535) + ((2246822507 * (w >>> 16) & 65535) << 16) & 4294967295, w ^= w >>> 13, w = 3266489909 * (w & 65535) + ((3266489909 * (w >>> 16) & 65535) << 16) & 4294967295, (w ^ w >>> 16) >>> 0;
  }
  var vt = new MessageChannel(), bn = [];
  vt.port1.onmessage = function() {
    var l = bn.shift();
    l && l();
  };
  function et(l) {
    bn.push(l), vt.port2.postMessage(null);
  }
  function zo(l) {
    setTimeout(function() {
      throw l;
    });
  }
  var Bo = Promise, Li = typeof queueMicrotask == "function" ? queueMicrotask : function(l) {
    Bo.resolve(null).then(l).catch(zo);
  }, Mt = null, ge = 0;
  function J(l, a) {
    if (a.byteLength !== 0)
      if (2048 < a.byteLength)
        0 < ge && (l.enqueue(
          new Uint8Array(Mt.buffer, 0, ge)
        ), Mt = new Uint8Array(2048), ge = 0), l.enqueue(a);
      else {
        var s = Mt.length - ge;
        s < a.byteLength && (s === 0 ? l.enqueue(Mt) : (Mt.set(a.subarray(0, s), ge), l.enqueue(Mt), a = a.subarray(s)), Mt = new Uint8Array(2048), ge = 0), Mt.set(a, ge), ge += a.byteLength;
      }
  }
  function ue(l, a) {
    return J(l, a), !0;
  }
  function zl(l) {
    Mt && 0 < ge && (l.enqueue(new Uint8Array(Mt.buffer, 0, ge)), Mt = null, ge = 0);
  }
  var zi = new TextEncoder();
  function ie(l) {
    return zi.encode(l);
  }
  function m(l) {
    return zi.encode(l);
  }
  function me(l) {
    return l.byteLength;
  }
  function Wt(l, a) {
    typeof l.error == "function" ? l.error(a) : l.close();
  }
  var wr = Object.assign, Qe = Object.prototype.hasOwnProperty, Tr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nt = {}, kc = {};
  function Bl(l) {
    return Qe.call(kc, l) ? !0 : Qe.call(nt, l) ? !1 : Tr.test(l) ? kc[l] = !0 : (nt[l] = !0, !1);
  }
  var qt = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), tt = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Sc = /["'&<>]/;
  function Ae(l) {
    if (typeof l == "boolean" || typeof l == "number" || typeof l == "bigint")
      return "" + l;
    l = "" + l;
    var a = Sc.exec(l);
    if (a) {
      var s = "", v, w = 0;
      for (v = a.index; v < l.length; v++) {
        switch (l.charCodeAt(v)) {
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
        w !== v && (s += l.slice(w, v)), w = v + 1, s += a;
      }
      l = w !== v ? s + l.slice(w, v) : s;
    }
    return l;
  }
  var rt = /([A-Z])/g, on = /^ms-/, Rt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function da(l) {
    return Rt.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Bi = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xr = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Tl = Ot.d;
  Ot.d = {
    f: Tl.f,
    r: Tl.r,
    D: $u,
    C: Pu,
    L: Jl,
    m: tc,
    X: Ql,
    S: St,
    M: es
  };
  var bt = [], xl = null;
  m('"></template>');
  var Pc = m("<script"), Ve = m("<\/script>"), jt = m('<script src="'), Rn = m('<script type="module" src="'), Xu = m(' nonce="'), qn = m(' integrity="'), du = m(' crossorigin="'), gu = m(' async=""><\/script>'), si = m("<style"), vu = /(<\/|<)(s)(cript)/gi;
  function Ho(l, a, s, v) {
    return "" + a + (s === "s" ? "\\u0073" : "\\u0053") + v;
  }
  var ga = m(
    '<script type="importmap">'
  ), Hi = m("<\/script>");
  function va(l, a, s, v, w, R) {
    s = typeof a == "string" ? a : a && a.script;
    var k = s === void 0 ? Pc : m(
      '<script nonce="' + Ae(s) + '"'
    ), D = typeof a == "string" ? void 0 : a && a.style, p = D === void 0 ? si : m(
      '<style nonce="' + Ae(D) + '"'
    ), L = l.idPrefix, U = [], X = l.bootstrapScriptContent, se = l.bootstrapScripts, ce = l.bootstrapModules;
    if (X !== void 0 && (U.push(k), Qi(U, l), U.push(
      qe,
      ie(
        ("" + X).replace(vu, Ho)
      ),
      Ve
    )), X = [], v !== void 0 && (X.push(ga), X.push(
      ie(
        ("" + JSON.stringify(v)).replace(vu, Ho)
      )
    ), X.push(Hi)), v = w ? {
      preconnects: "",
      fontPreloads: "",
      highImagePreloads: "",
      remainingCapacity: 2 + (typeof R == "number" ? R : 2e3)
    } : null, w = {
      placeholderPrefix: m(L + "P:"),
      segmentPrefix: m(L + "S:"),
      boundaryPrefix: m(L + "B:"),
      startInlineScript: k,
      startInlineStyle: p,
      preamble: Wn(),
      externalRuntimeScript: null,
      bootstrapChunks: U,
      importMapChunks: X,
      onHeaders: w,
      headers: v,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: /* @__PURE__ */ new Set(),
      fontPreloads: /* @__PURE__ */ new Set(),
      highImagePreloads: /* @__PURE__ */ new Set(),
      styles: /* @__PURE__ */ new Map(),
      bootstrapScripts: /* @__PURE__ */ new Set(),
      scripts: /* @__PURE__ */ new Set(),
      bulkPreloads: /* @__PURE__ */ new Set(),
      preloads: {
        images: /* @__PURE__ */ new Map(),
        stylesheets: /* @__PURE__ */ new Map(),
        scripts: /* @__PURE__ */ new Map(),
        moduleScripts: /* @__PURE__ */ new Map()
      },
      nonce: { script: s, style: D },
      hoistableState: null,
      stylesToHoist: !1
    }, se !== void 0)
      for (v = 0; v < se.length; v++)
        L = se[v], D = k = void 0, p = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: a
        }, typeof L == "string" ? p.href = R = L : (p.href = R = L.src, p.integrity = D = typeof L.integrity == "string" ? L.integrity : void 0, p.crossOrigin = k = typeof L == "string" || L.crossOrigin == null ? void 0 : L.crossOrigin === "use-credentials" ? "use-credentials" : ""), L = l, X = R, L.scriptResources[X] = null, L.moduleScriptResources[X] = null, L = [], In(L, p), w.bootstrapScripts.add(L), U.push(
          jt,
          ie(Ae(R)),
          yn
        ), s && U.push(
          Xu,
          ie(Ae(s)),
          yn
        ), typeof D == "string" && U.push(
          qn,
          ie(Ae(D)),
          yn
        ), typeof k == "string" && U.push(
          du,
          ie(Ae(k)),
          yn
        ), Qi(U, l), U.push(gu);
    if (ce !== void 0)
      for (a = 0; a < ce.length; a++)
        D = ce[a], R = v = void 0, k = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: s
        }, typeof D == "string" ? k.href = se = D : (k.href = se = D.src, k.integrity = R = typeof D.integrity == "string" ? D.integrity : void 0, k.crossOrigin = v = typeof D == "string" || D.crossOrigin == null ? void 0 : D.crossOrigin === "use-credentials" ? "use-credentials" : ""), D = l, p = se, D.scriptResources[p] = null, D.moduleScriptResources[p] = null, D = [], In(D, k), w.bootstrapScripts.add(D), U.push(
          Rn,
          ie(Ae(se)),
          yn
        ), s && U.push(
          Xu,
          ie(Ae(s)),
          yn
        ), typeof R == "string" && U.push(
          qn,
          ie(Ae(R)),
          yn
        ), typeof v == "string" && U.push(
          du,
          ie(Ae(v)),
          yn
        ), Qi(U, l), U.push(gu);
    return w;
  }
  function Wo(l, a, s, v, w) {
    return {
      idPrefix: l === void 0 ? "" : l,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: s,
      bootstrapScripts: v,
      bootstrapModules: w,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function Wn() {
    return { htmlChunks: null, headChunks: null, bodyChunks: null };
  }
  function An(l, a, s, v) {
    return {
      insertionMode: l,
      selectedValue: a,
      tagScope: s,
      viewTransition: v
    };
  }
  function Fc(l) {
    return An(
      l === "http://www.w3.org/2000/svg" ? 4 : l === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
      null,
      0,
      null
    );
  }
  function ba(l, a, s) {
    var v = l.tagScope & -25;
    switch (a) {
      case "noscript":
        return An(2, null, v | 1, null);
      case "select":
        return An(
          2,
          s.value != null ? s.value : s.defaultValue,
          v,
          null
        );
      case "svg":
        return An(4, null, v, null);
      case "picture":
        return An(2, null, v | 2, null);
      case "math":
        return An(5, null, v, null);
      case "foreignObject":
        return An(2, null, v, null);
      case "table":
        return An(6, null, v, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return An(7, null, v, null);
      case "colgroup":
        return An(9, null, v, null);
      case "tr":
        return An(8, null, v, null);
      case "head":
        if (2 > l.insertionMode)
          return An(3, null, v, null);
        break;
      case "html":
        if (l.insertionMode === 0)
          return An(1, null, v, null);
    }
    return 6 <= l.insertionMode || 2 > l.insertionMode ? An(2, null, v, null) : l.tagScope !== v ? An(
      l.insertionMode,
      l.selectedValue,
      v,
      null
    ) : l;
  }
  function Zu(l) {
    return l === null ? null : {
      update: l.update,
      enter: "none",
      exit: "none",
      share: l.update,
      name: l.autoName,
      autoName: l.autoName,
      nameIdx: 0
    };
  }
  function bu(l, a) {
    return a.tagScope & 32 && (l.instructions |= 128), An(
      a.insertionMode,
      a.selectedValue,
      a.tagScope | 12,
      Zu(a.viewTransition)
    );
  }
  function tl(l, a) {
    l = Zu(a.viewTransition);
    var s = a.tagScope | 16;
    return l !== null && l.share !== "none" && (s |= 64), An(
      a.insertionMode,
      a.selectedValue,
      s,
      l
    );
  }
  var Hl = m("<!-- -->");
  function Ju(l, a, s, v) {
    return a === "" ? v : (v && l.push(Hl), l.push(ie(Ae(a))), !0);
  }
  var ya = /* @__PURE__ */ new Map(), Qn = m(' style="'), Wi = m(":"), Ni = m(";");
  function wa(l, a) {
    if (typeof a != "object")
      throw Error(_(62));
    var s = !0, v;
    for (v in a)
      if (Qe.call(a, v)) {
        var w = a[v];
        if (w != null && typeof w != "boolean" && w !== "") {
          if (v.indexOf("--") === 0) {
            var R = ie(Ae(v));
            w = ie(
              Ae(("" + w).trim())
            );
          } else
            R = ya.get(v), R === void 0 && (R = m(
              Ae(
                v.replace(rt, "-$1").toLowerCase().replace(on, "-ms-")
              )
            ), ya.set(v, R)), w = typeof w == "number" ? w === 0 || qt.has(v) ? ie("" + w) : ie(w + "px") : ie(
              Ae(("" + w).trim())
            );
          s ? (s = !1, l.push(
            Qn,
            R,
            Wi,
            w
          )) : l.push(Ni, R, Wi, w);
        }
      }
    s || l.push(yn);
  }
  var Nt = m(" "), Or = m('="'), yn = m('"'), No = m('=""');
  function Xr(l, a, s) {
    s && typeof s != "function" && typeof s != "symbol" && l.push(Nt, ie(a), No);
  }
  function Ke(l, a, s) {
    typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && l.push(
      Nt,
      ie(a),
      Or,
      ie(Ae(s)),
      yn
    );
  }
  var Qu = m(
    Ae(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    )
  ), Ue = m('<input type="hidden"');
  function mo(l, a) {
    this.push(Ue), Uo(l), Ke(this, "name", a), Ke(this, "value", l), this.push(El);
  }
  function Uo(l) {
    if (typeof l != "string")
      throw Error(_(480));
  }
  function Yo(l, a) {
    if (typeof a.$$FORM_ACTION == "function") {
      var s = l.nextFormID++;
      l = l.idPrefix + s;
      try {
        var v = a.$$FORM_ACTION(l);
        if (v) {
          var w = v.data;
          w != null && w.forEach(Uo);
        }
        return v;
      } catch (R) {
        if (typeof R == "object" && R !== null && typeof R.then == "function")
          throw R;
      }
    }
    return null;
  }
  function Wl(l, a, s, v, w, R, k, D) {
    var p = null;
    if (typeof v == "function") {
      var L = Yo(a, v);
      L !== null ? (D = L.name, v = L.action || "", w = L.encType, R = L.method, k = L.target, p = L.data) : (l.push(
        Nt,
        ie("formAction"),
        Or,
        Qu,
        yn
      ), k = R = w = v = D = null, Vu(a, s));
    }
    return D != null && sn(l, "name", D), v != null && sn(l, "formAction", v), w != null && sn(l, "formEncType", w), R != null && sn(l, "formMethod", R), k != null && sn(l, "formTarget", k), p;
  }
  function sn(l, a, s) {
    switch (a) {
      case "className":
        Ke(l, "class", s);
        break;
      case "tabIndex":
        Ke(l, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ke(l, a, s);
        break;
      case "style":
        wa(l, s);
        break;
      case "src":
      case "href":
        if (s === "")
          break;
      case "action":
      case "formAction":
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean")
          break;
        s = da("" + s), l.push(
          Nt,
          ie(a),
          Or,
          ie(Ae(s)),
          yn
        );
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        Xr(l, a.toLowerCase(), s);
        break;
      case "xlinkHref":
        if (typeof s == "function" || typeof s == "symbol" || typeof s == "boolean")
          break;
        s = da("" + s), l.push(
          Nt,
          ie("xlink:href"),
          Or,
          ie(Ae(s)),
          yn
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof s != "function" && typeof s != "symbol" && l.push(
          Nt,
          ie(a),
          Or,
          ie(Ae(s)),
          yn
        );
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol" && l.push(
          Nt,
          ie(a),
          No
        );
        break;
      case "capture":
      case "download":
        s === !0 ? l.push(
          Nt,
          ie(a),
          No
        ) : s !== !1 && typeof s != "function" && typeof s != "symbol" && l.push(
          Nt,
          ie(a),
          Or,
          ie(Ae(s)),
          yn
        );
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s && l.push(
          Nt,
          ie(a),
          Or,
          ie(Ae(s)),
          yn
        );
        break;
      case "rowSpan":
      case "start":
        typeof s == "function" || typeof s == "symbol" || isNaN(s) || l.push(
          Nt,
          ie(a),
          Or,
          ie(Ae(s)),
          yn
        );
        break;
      case "xlinkActuate":
        Ke(l, "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        Ke(l, "xlink:arcrole", s);
        break;
      case "xlinkRole":
        Ke(l, "xlink:role", s);
        break;
      case "xlinkShow":
        Ke(l, "xlink:show", s);
        break;
      case "xlinkTitle":
        Ke(l, "xlink:title", s);
        break;
      case "xlinkType":
        Ke(l, "xlink:type", s);
        break;
      case "xmlBase":
        Ke(l, "xml:base", s);
        break;
      case "xmlLang":
        Ke(l, "xml:lang", s);
        break;
      case "xmlSpace":
        Ke(l, "xml:space", s);
        break;
      default:
        if ((!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = tt.get(a) || a, Bl(a))) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var v = a.toLowerCase().slice(0, 5);
              if (v !== "data-" && v !== "aria-")
                return;
          }
          l.push(
            Nt,
            ie(a),
            Or,
            ie(Ae(s)),
            yn
          );
        }
    }
  }
  var qe = m(">"), El = m("/>");
  function mt(l, a, s) {
    if (a != null) {
      if (s != null)
        throw Error(_(60));
      if (typeof a != "object" || !("__html" in a))
        throw Error(_(61));
      a = a.__html, a != null && l.push(ie("" + a));
    }
  }
  function Ta(l) {
    var a = "";
    return he.Children.forEach(l, function(s) {
      s != null && (a += s);
    }), a;
  }
  var pc = m(' selected=""'), $t = m(
    `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
  );
  function Vu(l, a) {
    if (!(l.instructions & 16)) {
      l.instructions |= 16;
      var s = a.preamble, v = a.bootstrapChunks;
      (s.htmlChunks || s.headChunks) && v.length === 0 ? (v.push(a.startInlineScript), Qi(v, l), v.push(
        qe,
        $t,
        Ve
      )) : v.unshift(
        a.startInlineScript,
        qe,
        $t,
        Ve
      );
    }
  }
  var yu = m("<!--F!-->"), Ac = m("<!--F-->");
  function In(l, a) {
    l.push(yt("link"));
    for (var s in a)
      if (Qe.call(a, s)) {
        var v = a[s];
        if (v != null)
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(_(399, "link"));
            default:
              sn(l, s, v);
          }
      }
    return l.push(El), null;
  }
  var Ic = /(<\/|<)(s)(tyle)/gi;
  function no(l, a, s, v) {
    return "" + a + (s === "s" ? "\\73 " : "\\53 ") + v;
  }
  function Zr(l, a, s) {
    l.push(yt(s));
    for (var v in a)
      if (Qe.call(a, v)) {
        var w = a[v];
        if (w != null)
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(_(399, s));
            default:
              sn(l, v, w);
          }
      }
    return l.push(El), null;
  }
  function xa(l, a) {
    l.push(yt("title"));
    var s = null, v = null, w;
    for (w in a)
      if (Qe.call(a, w)) {
        var R = a[w];
        if (R != null)
          switch (w) {
            case "children":
              s = R;
              break;
            case "dangerouslySetInnerHTML":
              v = R;
              break;
            default:
              sn(l, w, R);
          }
      }
    return l.push(qe), a = Array.isArray(s) ? 2 > s.length ? s[0] : null : s, typeof a != "function" && typeof a != "symbol" && a !== null && a !== void 0 && l.push(ie(Ae("" + a))), mt(l, v, s), l.push(Ul("title")), null;
  }
  var Ku = m("<!--head-->"), qu = m("<!--body-->"), to = m("<!--html-->");
  function ro(l, a) {
    l.push(yt("script"));
    var s = null, v = null, w;
    for (w in a)
      if (Qe.call(a, w)) {
        var R = a[w];
        if (R != null)
          switch (w) {
            case "children":
              s = R;
              break;
            case "dangerouslySetInnerHTML":
              v = R;
              break;
            default:
              sn(l, w, R);
          }
      }
    return l.push(qe), mt(l, v, s), typeof s == "string" && l.push(
      ie(("" + s).replace(vu, Ho))
    ), l.push(Ul("script")), null;
  }
  function Nl(l, a, s) {
    l.push(yt(s));
    var v = s = null, w;
    for (w in a)
      if (Qe.call(a, w)) {
        var R = a[w];
        if (R != null)
          switch (w) {
            case "children":
              s = R;
              break;
            case "dangerouslySetInnerHTML":
              v = R;
              break;
            default:
              sn(l, w, R);
          }
      }
    return l.push(qe), mt(l, v, s), s;
  }
  function ml(l, a, s) {
    l.push(yt(s));
    var v = s = null, w;
    for (w in a)
      if (Qe.call(a, w)) {
        var R = a[w];
        if (R != null)
          switch (w) {
            case "children":
              s = R;
              break;
            case "dangerouslySetInnerHTML":
              v = R;
              break;
            default:
              sn(l, w, R);
          }
      }
    return l.push(qe), mt(l, v, s), typeof s == "string" ? (l.push(ie(Ae(s))), null) : s;
  }
  var Mc = m(`
`), Go = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Xo = /* @__PURE__ */ new Map();
  function yt(l) {
    var a = Xo.get(l);
    if (a === void 0) {
      if (!Go.test(l))
        throw Error(_(65, l));
      a = m("<" + l), Xo.set(l, a);
    }
    return a;
  }
  var lo = m("<!DOCTYPE html>");
  function Zo(l, a, s, v, w, R, k, D, p) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        l.push(yt("a"));
        var L = null, U = null, X;
        for (X in s)
          if (Qe.call(s, X)) {
            var se = s[X];
            if (se != null)
              switch (X) {
                case "children":
                  L = se;
                  break;
                case "dangerouslySetInnerHTML":
                  U = se;
                  break;
                case "href":
                  se === "" ? Ke(l, "href", "") : sn(l, X, se);
                  break;
                default:
                  sn(l, X, se);
              }
          }
        if (l.push(qe), mt(l, U, L), typeof L == "string") {
          l.push(ie(Ae(L)));
          var ce = null;
        } else
          ce = L;
        return ce;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        l.push(yt("select"));
        var Ye = null, Fe = null, Ge;
        for (Ge in s)
          if (Qe.call(s, Ge)) {
            var Yn = s[Ge];
            if (Yn != null)
              switch (Ge) {
                case "children":
                  Ye = Yn;
                  break;
                case "dangerouslySetInnerHTML":
                  Fe = Yn;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  sn(
                    l,
                    Ge,
                    Yn
                  );
              }
          }
        return l.push(qe), mt(l, Fe, Ye), Ye;
      case "option":
        var Pn = D.selectedValue;
        l.push(yt("option"));
        var Gt = null, Dr = null, ul = null, pe = null, ar;
        for (ar in s)
          if (Qe.call(s, ar)) {
            var $n = s[ar];
            if ($n != null)
              switch (ar) {
                case "children":
                  Gt = $n;
                  break;
                case "selected":
                  ul = $n;
                  break;
                case "dangerouslySetInnerHTML":
                  pe = $n;
                  break;
                case "value":
                  Dr = $n;
                default:
                  sn(
                    l,
                    ar,
                    $n
                  );
              }
          }
        if (Pn != null) {
          var Fr = Dr !== null ? "" + Dr : Ta(Gt);
          if (Ee(Pn)) {
            for (var Pi = 0; Pi < Pn.length; Pi++)
              if ("" + Pn[Pi] === Fr) {
                l.push(pc);
                break;
              }
          } else
            "" + Pn === Fr && l.push(pc);
        } else
          ul && l.push(pc);
        return l.push(qe), mt(l, pe, Gt), Gt;
      case "textarea":
        l.push(yt("textarea"));
        var Gn = null, Na = null, sl = null, or;
        for (or in s)
          if (Qe.call(s, or)) {
            var Ml = s[or];
            if (Ml != null)
              switch (or) {
                case "children":
                  sl = Ml;
                  break;
                case "value":
                  Gn = Ml;
                  break;
                case "defaultValue":
                  Na = Ml;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(_(91));
                default:
                  sn(
                    l,
                    or,
                    Ml
                  );
              }
          }
        if (Gn === null && Na !== null && (Gn = Na), l.push(qe), sl != null) {
          if (Gn != null)
            throw Error(_(92));
          if (Ee(sl)) {
            if (1 < sl.length)
              throw Error(_(93));
            Gn = "" + sl[0];
          }
          Gn = "" + sl;
        }
        return typeof Gn == "string" && Gn[0] === `
` && l.push(Mc), Gn !== null && l.push(
          ie(Ae("" + Gn))
        ), null;
      case "input":
        l.push(yt("input"));
        var cr = null, ma = null, Ro = null, pr = null, Co = null, ur = null, Ua = null, Lu = null, Dn = null, ko;
        for (ko in s)
          if (Qe.call(s, ko)) {
            var Ol = s[ko];
            if (Ol != null)
              switch (ko) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(399, "input"));
                case "name":
                  cr = Ol;
                  break;
                case "formAction":
                  ma = Ol;
                  break;
                case "formEncType":
                  Ro = Ol;
                  break;
                case "formMethod":
                  pr = Ol;
                  break;
                case "formTarget":
                  Co = Ol;
                  break;
                case "defaultChecked":
                  Dn = Ol;
                  break;
                case "defaultValue":
                  Ua = Ol;
                  break;
                case "checked":
                  Lu = Ol;
                  break;
                case "value":
                  ur = Ol;
                  break;
                default:
                  sn(
                    l,
                    ko,
                    Ol
                  );
              }
          }
        var Vc = Wl(
          l,
          v,
          w,
          ma,
          Ro,
          pr,
          Co,
          cr
        );
        return Lu !== null ? Xr(l, "checked", Lu) : Dn !== null && Xr(l, "checked", Dn), ur !== null ? sn(l, "value", ur) : Ua !== null && sn(l, "value", Ua), l.push(El), Vc != null && Vc.forEach(mo, l), null;
      case "button":
        l.push(yt("button"));
        var Ya = null, Kc = null, qc = null, So = null, aa = null, jc = null, ql = null, Ga;
        for (Ga in s)
          if (Qe.call(s, Ga)) {
            var Xa = s[Ga];
            if (Xa != null)
              switch (Ga) {
                case "children":
                  Ya = Xa;
                  break;
                case "dangerouslySetInnerHTML":
                  Kc = Xa;
                  break;
                case "name":
                  qc = Xa;
                  break;
                case "formAction":
                  So = Xa;
                  break;
                case "formEncType":
                  aa = Xa;
                  break;
                case "formMethod":
                  jc = Xa;
                  break;
                case "formTarget":
                  ql = Xa;
                  break;
                default:
                  sn(
                    l,
                    Ga,
                    Xa
                  );
              }
          }
        var as = Wl(
          l,
          v,
          w,
          So,
          aa,
          jc,
          ql,
          qc
        );
        if (l.push(qe), as != null && as.forEach(mo, l), mt(l, Kc, Ya), typeof Ya == "string") {
          l.push(
            ie(Ae(Ya))
          );
          var fl = null;
        } else
          fl = Ya;
        return fl;
      case "form":
        l.push(yt("form"));
        var os = null, el = null, oa = null, Fi = null, $c = null, eu = null, nu;
        for (nu in s)
          if (Qe.call(s, nu)) {
            var Za = s[nu];
            if (Za != null)
              switch (nu) {
                case "children":
                  os = Za;
                  break;
                case "dangerouslySetInnerHTML":
                  el = Za;
                  break;
                case "action":
                  oa = Za;
                  break;
                case "encType":
                  Fi = Za;
                  break;
                case "method":
                  $c = Za;
                  break;
                case "target":
                  eu = Za;
                  break;
                default:
                  sn(
                    l,
                    nu,
                    Za
                  );
              }
          }
        var cs = null, zu = null;
        if (typeof oa == "function") {
          var Po = Yo(
            v,
            oa
          );
          Po !== null ? (oa = Po.action || "", Fi = Po.encType, $c = Po.method, eu = Po.target, cs = Po.data, zu = Po.name) : (l.push(
            Nt,
            ie("action"),
            Or,
            Qu,
            yn
          ), eu = $c = Fi = oa = null, Vu(v, w));
        }
        if (oa != null && sn(l, "action", oa), Fi != null && sn(l, "encType", Fi), $c != null && sn(l, "method", $c), eu != null && sn(l, "target", eu), l.push(qe), zu !== null && (l.push(Ue), Ke(l, "name", zu), l.push(El), cs != null && cs.forEach(mo, l)), mt(l, el, os), typeof os == "string") {
          l.push(
            ie(Ae(os))
          );
          var us = null;
        } else
          us = os;
        return us;
      case "menuitem":
        l.push(yt("menuitem"));
        for (var tu in s)
          if (Qe.call(s, tu)) {
            var ws = s[tu];
            if (ws != null)
              switch (tu) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(400));
                default:
                  sn(
                    l,
                    tu,
                    ws
                  );
              }
          }
        return l.push(qe), null;
      case "object":
        l.push(yt("object"));
        var Bu = null, Ts = null, ru;
        for (ru in s)
          if (Qe.call(s, ru)) {
            var Fo = s[ru];
            if (Fo != null)
              switch (ru) {
                case "children":
                  Bu = Fo;
                  break;
                case "dangerouslySetInnerHTML":
                  Ts = Fo;
                  break;
                case "data":
                  var Ss = da("" + Fo);
                  if (Ss === "")
                    break;
                  l.push(
                    Nt,
                    ie("data"),
                    Or,
                    ie(Ae(Ss)),
                    yn
                  );
                  break;
                default:
                  sn(
                    l,
                    ru,
                    Fo
                  );
              }
          }
        if (l.push(qe), mt(l, Ts, Bu), typeof Bu == "string") {
          l.push(
            ie(Ae(Bu))
          );
          var Ps = null;
        } else
          Ps = Bu;
        return Ps;
      case "title":
        var jl = D.tagScope & 1, ss = D.tagScope & 4;
        if (D.insertionMode === 4 || jl || s.itemProp != null)
          var Fs = xa(
            l,
            s
          );
        else
          ss ? Fs = null : (xa(w.hoistableChunks, s), Fs = void 0);
        return Fs;
      case "link":
        var Lt = D.tagScope & 1, pi = D.tagScope & 4, sr = s.rel, ca = s.href, hl = s.precedence;
        if (D.insertionMode === 4 || Lt || s.itemProp != null || typeof sr != "string" || typeof ca != "string" || ca === "") {
          In(l, s);
          var un = null;
        } else if (s.rel === "stylesheet")
          if (typeof hl != "string" || s.disabled != null || s.onLoad || s.onError)
            un = In(
              l,
              s
            );
          else {
            var Lr = w.styles.get(hl), Ai = v.styleResources.hasOwnProperty(ca) ? v.styleResources[ca] : void 0;
            if (Ai !== null) {
              v.styleResources[ca] = null, Lr || (Lr = {
                precedence: ie(Ae(hl)),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, w.styles.set(hl, Lr));
              var ut = {
                state: 0,
                props: wr({}, s, {
                  "data-precedence": s.precedence,
                  precedence: null
                })
              };
              if (Ai) {
                Ai.length === 2 && pa(ut.props, Ai);
                var gc = w.preloads.stylesheets.get(ca);
                gc && 0 < gc.length ? gc.length = 0 : ut.state = 1;
              }
              Lr.sheets.set(ca, ut), k && k.stylesheets.add(ut);
            } else if (Lr) {
              var lu = Lr.sheets.get(ca);
              lu && k && k.stylesheets.add(lu);
            }
            p && l.push(Hl), un = null;
          }
        else
          s.onLoad || s.onError ? un = In(
            l,
            s
          ) : (p && l.push(Hl), un = pi ? null : In(w.hoistableChunks, s));
        return un;
      case "script":
        var fs = D.tagScope & 1, po = s.async;
        if (typeof s.src != "string" || !s.src || !po || typeof po == "function" || typeof po == "symbol" || s.onLoad || s.onError || D.insertionMode === 4 || fs || s.itemProp != null)
          var Ja = ro(
            l,
            s
          );
        else {
          var vc = s.src;
          if (s.type === "module")
            var _l = v.moduleScriptResources, Qa = w.preloads.moduleScripts;
          else
            _l = v.scriptResources, Qa = w.preloads.scripts;
          var bc = _l.hasOwnProperty(vc) ? _l[vc] : void 0;
          if (bc !== null) {
            _l[vc] = null;
            var t = s;
            if (bc) {
              bc.length === 2 && (t = wr({}, s), pa(t, bc));
              var r = Qa.get(vc);
              r && (r.length = 0);
            }
            var u = [];
            w.scripts.add(u), ro(u, t);
          }
          p && l.push(Hl), Ja = null;
        }
        return Ja;
      case "style":
        var d = D.tagScope & 1, y = s.precedence, E = s.href, F = s.nonce;
        if (D.insertionMode === 4 || d || s.itemProp != null || typeof y != "string" || typeof E != "string" || E === "") {
          l.push(yt("style"));
          var M = null, V = null, z;
          for (z in s)
            if (Qe.call(s, z)) {
              var Z = s[z];
              if (Z != null)
                switch (z) {
                  case "children":
                    M = Z;
                    break;
                  case "dangerouslySetInnerHTML":
                    V = Z;
                    break;
                  default:
                    sn(
                      l,
                      z,
                      Z
                    );
                }
            }
          l.push(qe);
          var le = Array.isArray(M) ? 2 > M.length ? M[0] : null : M;
          typeof le != "function" && typeof le != "symbol" && le !== null && le !== void 0 && l.push(
            ie(("" + le).replace(Ic, no))
          ), mt(l, V, M), l.push(Ul("style"));
          var fe = null;
        } else {
          var oe = w.styles.get(y);
          if ((v.styleResources.hasOwnProperty(E) ? v.styleResources[E] : void 0) !== null) {
            v.styleResources[E] = null, oe || (oe = {
              precedence: ie(
                Ae(y)
              ),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, w.styles.set(y, oe));
            var j = w.nonce.style;
            if (!j || j === F) {
              oe.hrefs.push(
                ie(Ae(E))
              );
              var We = oe.rules, Cn = null, ke = null, tn;
              for (tn in s)
                if (Qe.call(s, tn)) {
                  var Xt = s[tn];
                  if (Xt != null)
                    switch (tn) {
                      case "children":
                        Cn = Xt;
                        break;
                      case "dangerouslySetInnerHTML":
                        ke = Xt;
                    }
                }
              var Zt = Array.isArray(Cn) ? 2 > Cn.length ? Cn[0] : null : Cn;
              typeof Zt != "function" && typeof Zt != "symbol" && Zt !== null && Zt !== void 0 && We.push(
                ie(
                  ("" + Zt).replace(Ic, no)
                )
              ), mt(We, ke, Cn);
            }
          }
          oe && k && k.styles.add(oe), p && l.push(Hl), fe = void 0;
        }
        return fe;
      case "meta":
        var an = D.tagScope & 1, Ft = D.tagScope & 4;
        if (D.insertionMode === 4 || an || s.itemProp != null)
          var $l = Zr(
            l,
            s,
            "meta"
          );
        else
          p && l.push(Hl), $l = Ft ? null : typeof s.charSet == "string" ? Zr(w.charsetChunks, s, "meta") : s.name === "viewport" ? Zr(w.viewportChunks, s, "meta") : Zr(w.hoistableChunks, s, "meta");
        return $l;
      case "listing":
      case "pre":
        l.push(yt(a));
        var Ar = null, de = null, hn;
        for (hn in s)
          if (Qe.call(s, hn)) {
            var dn = s[hn];
            if (dn != null)
              switch (hn) {
                case "children":
                  Ar = dn;
                  break;
                case "dangerouslySetInnerHTML":
                  de = dn;
                  break;
                default:
                  sn(
                    l,
                    hn,
                    dn
                  );
              }
          }
        if (l.push(qe), de != null) {
          if (Ar != null)
            throw Error(_(60));
          if (typeof de != "object" || !("__html" in de))
            throw Error(_(61));
          var Tn = de.__html;
          Tn != null && (typeof Tn == "string" && 0 < Tn.length && Tn[0] === `
` ? l.push(Mc, ie(Tn)) : l.push(ie("" + Tn)));
        }
        return typeof Ar == "string" && Ar[0] === `
` && l.push(Mc), Ar;
      case "img":
        var Xn = D.tagScope & 3, Ze = s.src, De = s.srcSet;
        if (!(s.loading === "lazy" || !Ze && !De || typeof Ze != "string" && Ze != null || typeof De != "string" && De != null || s.fetchPriority === "low" || Xn) && (typeof Ze != "string" || Ze[4] !== ":" || Ze[0] !== "d" && Ze[0] !== "D" || Ze[1] !== "a" && Ze[1] !== "A" || Ze[2] !== "t" && Ze[2] !== "T" || Ze[3] !== "a" && Ze[3] !== "A") && (typeof De != "string" || De[4] !== ":" || De[0] !== "d" && De[0] !== "D" || De[1] !== "a" && De[1] !== "A" || De[2] !== "t" && De[2] !== "T" || De[3] !== "a" && De[3] !== "A")) {
          k !== null && D.tagScope & 64 && (k.suspenseyImages = !0);
          var fr = typeof s.sizes == "string" ? s.sizes : void 0, gn = De ? De + `
` + (fr || "") : Ze, Jt = w.preloads.images, Ln = Jt.get(gn);
          if (Ln)
            (s.fetchPriority === "high" || 10 > w.highImagePreloads.size) && (Jt.delete(gn), w.highImagePreloads.add(Ln));
          else if (!v.imageResources.hasOwnProperty(gn)) {
            v.imageResources[gn] = bt;
            var zr = s.crossOrigin, Ao = typeof zr == "string" ? zr === "use-credentials" ? zr : "" : void 0, Br = w.headers, ei;
            Br && 0 < Br.remainingCapacity && typeof s.srcSet != "string" && (s.fetchPriority === "high" || 500 > Br.highImagePreloads.length) && (ei = Hc(Ze, "image", {
              imageSrcSet: s.srcSet,
              imageSizes: s.sizes,
              crossOrigin: Ao,
              integrity: s.integrity,
              nonce: s.nonce,
              type: s.type,
              fetchPriority: s.fetchPriority,
              referrerPolicy: s.refererPolicy
            }), 0 <= (Br.remainingCapacity -= ei.length + 2)) ? (w.resets.image[gn] = bt, Br.highImagePreloads && (Br.highImagePreloads += ", "), Br.highImagePreloads += ei) : (Ln = [], In(Ln, {
              rel: "preload",
              as: "image",
              href: De ? void 0 : Ze,
              imageSrcSet: De,
              imageSizes: fr,
              crossOrigin: Ao,
              integrity: s.integrity,
              type: s.type,
              fetchPriority: s.fetchPriority,
              referrerPolicy: s.referrerPolicy
            }), s.fetchPriority === "high" || 10 > w.highImagePreloads.size ? w.highImagePreloads.add(Ln) : (w.bulkPreloads.add(Ln), Jt.set(gn, Ln)));
          }
        }
        return Zr(l, s, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return Zr(l, s, a);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > D.insertionMode) {
          var ni = R || w.preamble;
          if (ni.headChunks)
            throw Error(_(545, "`<head>`"));
          R !== null && l.push(Ku), ni.headChunks = [];
          var ti = Nl(
            ni.headChunks,
            s,
            "head"
          );
        } else
          ti = ml(
            l,
            s,
            "head"
          );
        return ti;
      case "body":
        if (2 > D.insertionMode) {
          var zt = R || w.preamble;
          if (zt.bodyChunks)
            throw Error(_(545, "`<body>`"));
          R !== null && l.push(qu), zt.bodyChunks = [];
          var e = Nl(
            zt.bodyChunks,
            s,
            "body"
          );
        } else
          e = ml(
            l,
            s,
            "body"
          );
        return e;
      case "html":
        if (D.insertionMode === 0) {
          var n = R || w.preamble;
          if (n.htmlChunks)
            throw Error(_(545, "`<html>`"));
          R !== null && l.push(to), n.htmlChunks = [lo];
          var c = Nl(
            n.htmlChunks,
            s,
            "html"
          );
        } else
          c = ml(
            l,
            s,
            "html"
          );
        return c;
      default:
        if (a.indexOf("-") !== -1) {
          l.push(yt(a));
          var h = null, b = null, x;
          for (x in s)
            if (Qe.call(s, x)) {
              var S = s[x];
              if (S != null) {
                var A = x;
                switch (x) {
                  case "children":
                    h = S;
                    break;
                  case "dangerouslySetInnerHTML":
                    b = S;
                    break;
                  case "style":
                    wa(l, S);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    A = "class";
                  default:
                    if (Bl(x) && typeof S != "function" && typeof S != "symbol" && S !== !1) {
                      if (S === !0)
                        S = "";
                      else if (typeof S == "object")
                        continue;
                      l.push(
                        Nt,
                        ie(A),
                        Or,
                        ie(Ae(S)),
                        yn
                      );
                    }
                }
              }
            }
          return l.push(qe), mt(l, b, h), h;
        }
    }
    return ml(l, s, a);
  }
  var Oc = /* @__PURE__ */ new Map();
  function Ul(l) {
    var a = Oc.get(l);
    return a === void 0 && (a = m("</" + l + ">"), Oc.set(l, a)), a;
  }
  function Jo(l, a) {
    l = l.preamble, l.htmlChunks === null && a.htmlChunks && (l.htmlChunks = a.htmlChunks), l.headChunks === null && a.headChunks && (l.headChunks = a.headChunks), l.bodyChunks === null && a.bodyChunks && (l.bodyChunks = a.bodyChunks);
  }
  function Er(l, a) {
    a = a.bootstrapChunks;
    for (var s = 0; s < a.length - 1; s++)
      J(l, a[s]);
    return s < a.length ? (s = a[s], a.length = 0, ue(l, s)) : !0;
  }
  var Rl = m(
    "requestAnimationFrame(function(){$RT=performance.now()});"
  ), wu = m('<template id="'), Qo = m('"></template>'), Rr = m("<!--&-->"), Vo = m("<!--/&-->"), mi = m("<!--$-->"), io = m(
    '<!--$?--><template id="'
  ), Cr = m('"></template>'), Ct = m("<!--$!-->"), kn = m("<!--/$-->"), Tu = m("<template"), fi = m('"'), Cl = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="'), m(' data-cstck="');
  var xu = m("></template>");
  function hi(l, a, s) {
    if (J(l, io), s === null)
      throw Error(_(395));
    return J(l, a.boundaryPrefix), J(l, ie(s.toString(16))), ue(l, Cr);
  }
  var Yl = m('<div hidden id="'), ao = m('">'), di = m("</div>"), gi = m(
    '<svg aria-hidden="true" style="display:none" id="'
  ), oo = m('">'), Oe = m("</svg>"), kl = m(
    '<math aria-hidden="true" style="display:none" id="'
  ), lt = m('">'), Gl = m("</math>"), wt = m('<table hidden id="'), Ui = m('">'), Ea = m("</table>"), Xl = m('<table hidden><tbody id="'), vi = m('">'), it = m("</tbody></table>"), bi = m('<table hidden><tr id="'), yi = m('">'), Ra = m("</tr></table>"), Yi = m(
    '<table hidden><colgroup id="'
  ), Ca = m('">'), kr = m("</colgroup></table>");
  function ka(l, a, s, v) {
    switch (s.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return J(l, Yl), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, ao);
      case 4:
        return J(l, gi), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, oo);
      case 5:
        return J(l, kl), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, lt);
      case 6:
        return J(l, wt), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, Ui);
      case 7:
        return J(l, Xl), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, vi);
      case 8:
        return J(l, bi), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, yi);
      case 9:
        return J(l, Yi), J(l, a.segmentPrefix), J(l, ie(v.toString(16))), ue(l, Ca);
      default:
        throw Error(_(397));
    }
  }
  function Sl(l, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return ue(l, di);
      case 4:
        return ue(l, Oe);
      case 5:
        return ue(l, Gl);
      case 6:
        return ue(l, Ea);
      case 7:
        return ue(l, it);
      case 8:
        return ue(l, Ra);
      case 9:
        return ue(l, kr);
      default:
        throw Error(_(397));
    }
  }
  var Eu = m(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  ), Ru = m('$RS("'), Cu = m('","'), co = m('")<\/script>');
  m('<template data-rsi="" data-sid="'), m('" data-pid="');
  var uo = m(
    `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
  );
  ie(
    `$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),
H=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(B){var z=
document.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=
performance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);`
  );
  var so = m('$RC("'), kt = m(
    `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
  ), ju = m('$RR("'), Gi = m('","'), Ko = m('",'), _c = m('"'), wi = m(")<\/script>");
  m('<template data-rci="" data-bid="'), m('<template data-rri="" data-bid="'), m('" data-sid="'), m('" data-sty="');
  var Xi = m(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
  ), fo = m(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
  ), Pl = m('$RX("'), Zi = m('"'), Ji = m(","), ku = m(")<\/script>");
  m('<template data-rxi="" data-bid="'), m('" data-dgst="'), m('" data-msg="'), m('" data-stck="'), m('" data-cstck="');
  var vs = /[<\u2028\u2029]/g;
  function Sa(l) {
    return JSON.stringify(l).replace(
      vs,
      function(a) {
        switch (a) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var at = /[&><\u2028\u2029]/g;
  function Zl(l) {
    return JSON.stringify(l).replace(
      at,
      function(a) {
        switch (a) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var qo = m(
    ' media="not all" data-precedence="'
  ), jo = m('" data-href="'), Dc = m('">'), Jr = m("</style>"), Qr = !1, _r = !0;
  function Vr(l) {
    var a = l.rules, s = l.hrefs, v = 0;
    if (s.length) {
      for (J(this, xl.startInlineStyle), J(this, qo), J(this, l.precedence), J(this, jo); v < s.length - 1; v++)
        J(this, s[v]), J(this, $o);
      for (J(this, s[v]), J(this, Dc), v = 0; v < a.length; v++)
        J(this, a[v]);
      _r = ue(
        this,
        Jr
      ), Qr = !0, a.length = 0, s.length = 0;
    }
  }
  function wn(l) {
    return l.state !== 2 ? Qr = !0 : !1;
  }
  function Kr(l, a, s) {
    return Qr = !1, _r = !0, xl = s, a.styles.forEach(Vr, l), xl = null, a.stylesheets.forEach(wn), Qr && (s.stylesToHoist = !0), _r;
  }
  function Mn(l) {
    for (var a = 0; a < l.length; a++)
      J(this, l[a]);
    l.length = 0;
  }
  var Fl = [];
  function Lc(l) {
    In(Fl, l.props);
    for (var a = 0; a < Fl.length; a++)
      J(this, Fl[a]);
    Fl.length = 0, l.state = 2;
  }
  var zc = m(' data-precedence="'), Bc = m('" data-href="'), $o = m(" "), Ti = m('">'), ec = m("</style>");
  function nc(l) {
    var a = 0 < l.sheets.size;
    l.sheets.forEach(Lc, this), l.sheets.clear();
    var s = l.rules, v = l.hrefs;
    if (!a || v.length) {
      if (J(this, xl.startInlineStyle), J(this, zc), J(this, l.precedence), l = 0, v.length) {
        for (J(this, Bc); l < v.length - 1; l++)
          J(this, v[l]), J(this, $o);
        J(this, v[l]);
      }
      for (J(this, Ti), l = 0; l < s.length; l++)
        J(this, s[l]);
      J(this, ec), s.length = 0, v.length = 0;
    }
  }
  function Sr(l) {
    if (l.state === 0) {
      l.state = 1;
      var a = l.props;
      for (In(Fl, {
        rel: "preload",
        as: "style",
        href: l.props.href,
        crossOrigin: a.crossOrigin,
        fetchPriority: a.fetchPriority,
        integrity: a.integrity,
        media: a.media,
        hrefLang: a.hrefLang,
        referrerPolicy: a.referrerPolicy
      }), l = 0; l < Fl.length; l++)
        J(this, Fl[l]);
      Fl.length = 0;
    }
  }
  function On(l) {
    l.sheets.forEach(Sr, this), l.sheets.clear();
  }
  m('<link rel="expect" href="#'), m('" blocking="render"/>');
  var je = m(' id="');
  function Qi(l, a) {
    !(a.instructions & 32) && (a.instructions |= 32, l.push(
      je,
      ie(Ae("_" + a.idPrefix + "R_")),
      yn
    ));
  }
  var Pa = m("["), Fa = m(",["), Vi = m(","), Su = m("]");
  function _t(l, a) {
    J(l, Pa);
    var s = Pa;
    a.stylesheets.forEach(function(v) {
      if (v.state !== 2)
        if (v.state === 3)
          J(l, s), J(
            l,
            ie(
              Zl("" + v.props.href)
            )
          ), J(l, Su), s = Fa;
        else {
          J(l, s);
          var w = v.props["data-precedence"], R = v.props, k = da("" + v.props.href);
          J(
            l,
            ie(Zl(k))
          ), w = "" + w, J(l, Vi), J(
            l,
            ie(Zl(w))
          );
          for (var D in R)
            if (Qe.call(R, D) && (w = R[D], w != null))
              switch (D) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(399, "link"));
                default:
                  bs(
                    l,
                    D,
                    w
                  );
              }
          J(l, Su), s = Fa, v.state = 3;
        }
    }), J(l, Su);
  }
  function bs(l, a, s) {
    var v = a.toLowerCase();
    switch (typeof s) {
      case "function":
      case "symbol":
        return;
    }
    switch (a) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        v = "class", a = "" + s;
        break;
      case "hidden":
        if (s === !1)
          return;
        a = "";
        break;
      case "src":
      case "href":
        s = da(s), a = "" + s;
        break;
      default:
        if (2 < a.length && (a[0] === "o" || a[0] === "O") && (a[1] === "n" || a[1] === "N") || !Bl(a))
          return;
        a = "" + s;
    }
    J(l, Vi), J(
      l,
      ie(Zl(v))
    ), J(l, Vi), J(
      l,
      ie(Zl(a))
    );
  }
  function pl() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
  }
  function $u(l) {
    var a = Be || null;
    if (a) {
      var s = a.resumableState, v = a.renderState;
      if (typeof l == "string" && l) {
        if (!s.dnsResources.hasOwnProperty(l)) {
          s.dnsResources[l] = null, s = v.headers;
          var w, R;
          (R = s && 0 < s.remainingCapacity) && (R = (w = "<" + ("" + l).replace(
            Aa,
            Ut
          ) + ">; rel=dns-prefetch", 0 <= (s.remainingCapacity -= w.length + 2))), R ? (v.resets.dns[l] = null, s.preconnects && (s.preconnects += ", "), s.preconnects += w) : (w = [], In(w, { href: l, rel: "dns-prefetch" }), v.preconnects.add(w));
        }
        ia(a);
      }
    } else
      Tl.D(l);
  }
  function Pu(l, a) {
    var s = Be || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (typeof l == "string" && l) {
        var R = a === "use-credentials" ? "credentials" : typeof a == "string" ? "anonymous" : "default";
        if (!v.connectResources[R].hasOwnProperty(l)) {
          v.connectResources[R][l] = null, v = w.headers;
          var k, D;
          if (D = v && 0 < v.remainingCapacity) {
            if (D = "<" + ("" + l).replace(
              Aa,
              Ut
            ) + ">; rel=preconnect", typeof a == "string") {
              var p = ("" + a).replace(
                Dt,
                Ki
              );
              D += '; crossorigin="' + p + '"';
            }
            D = (k = D, 0 <= (v.remainingCapacity -= k.length + 2));
          }
          D ? (w.resets.connect[R][l] = null, v.preconnects && (v.preconnects += ", "), v.preconnects += k) : (R = [], In(R, {
            rel: "preconnect",
            href: l,
            crossOrigin: a
          }), w.preconnects.add(R));
        }
        ia(s);
      }
    } else
      Tl.C(l, a);
  }
  function Jl(l, a, s) {
    var v = Be || null;
    if (v) {
      var w = v.resumableState, R = v.renderState;
      if (a && l) {
        switch (a) {
          case "image":
            if (s)
              var k = s.imageSrcSet, D = s.imageSizes, p = s.fetchPriority;
            var L = k ? k + `
` + (D || "") : l;
            if (w.imageResources.hasOwnProperty(L))
              return;
            w.imageResources[L] = bt, w = R.headers;
            var U;
            w && 0 < w.remainingCapacity && typeof k != "string" && p === "high" && (U = Hc(l, a, s), 0 <= (w.remainingCapacity -= U.length + 2)) ? (R.resets.image[L] = bt, w.highImagePreloads && (w.highImagePreloads += ", "), w.highImagePreloads += U) : (w = [], In(
              w,
              wr(
                { rel: "preload", href: k ? void 0 : l, as: a },
                s
              )
            ), p === "high" ? R.highImagePreloads.add(w) : (R.bulkPreloads.add(w), R.preloads.images.set(L, w)));
            break;
          case "style":
            if (w.styleResources.hasOwnProperty(l))
              return;
            k = [], In(
              k,
              wr({ rel: "preload", href: l, as: a }, s)
            ), w.styleResources[l] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? bt : [s.crossOrigin, s.integrity], R.preloads.stylesheets.set(l, k), R.bulkPreloads.add(k);
            break;
          case "script":
            if (w.scriptResources.hasOwnProperty(l))
              return;
            k = [], R.preloads.scripts.set(l, k), R.bulkPreloads.add(k), In(
              k,
              wr({ rel: "preload", href: l, as: a }, s)
            ), w.scriptResources[l] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? bt : [s.crossOrigin, s.integrity];
            break;
          default:
            if (w.unknownResources.hasOwnProperty(a)) {
              if (k = w.unknownResources[a], k.hasOwnProperty(l))
                return;
            } else
              k = {}, w.unknownResources[a] = k;
            if (k[l] = bt, (w = R.headers) && 0 < w.remainingCapacity && a === "font" && (L = Hc(l, a, s), 0 <= (w.remainingCapacity -= L.length + 2)))
              R.resets.font[l] = bt, w.fontPreloads && (w.fontPreloads += ", "), w.fontPreloads += L;
            else
              switch (w = [], l = wr({ rel: "preload", href: l, as: a }, s), In(w, l), a) {
                case "font":
                  R.fontPreloads.add(w);
                  break;
                default:
                  R.bulkPreloads.add(w);
              }
        }
        ia(v);
      }
    } else
      Tl.L(l, a, s);
  }
  function tc(l, a) {
    var s = Be || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (l) {
        var R = a && typeof a.as == "string" ? a.as : "script";
        switch (R) {
          case "script":
            if (v.moduleScriptResources.hasOwnProperty(l))
              return;
            R = [], v.moduleScriptResources[l] = !a || typeof a.crossOrigin != "string" && typeof a.integrity != "string" ? bt : [a.crossOrigin, a.integrity], w.preloads.moduleScripts.set(l, R);
            break;
          default:
            if (v.moduleUnknownResources.hasOwnProperty(R)) {
              var k = v.unknownResources[R];
              if (k.hasOwnProperty(l))
                return;
            } else
              k = {}, v.moduleUnknownResources[R] = k;
            R = [], k[l] = bt;
        }
        In(R, wr({ rel: "modulepreload", href: l }, a)), w.bulkPreloads.add(R), ia(s);
      }
    } else
      Tl.m(l, a);
  }
  function St(l, a, s) {
    var v = Be || null;
    if (v) {
      var w = v.resumableState, R = v.renderState;
      if (l) {
        a = a || "default";
        var k = R.styles.get(a), D = w.styleResources.hasOwnProperty(l) ? w.styleResources[l] : void 0;
        D !== null && (w.styleResources[l] = null, k || (k = {
          precedence: ie(Ae(a)),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, R.styles.set(a, k)), a = {
          state: 0,
          props: wr(
            { rel: "stylesheet", href: l, "data-precedence": a },
            s
          )
        }, D && (D.length === 2 && pa(a.props, D), (R = R.preloads.stylesheets.get(l)) && 0 < R.length ? R.length = 0 : a.state = 1), k.sheets.set(l, a), ia(v));
      }
    } else
      Tl.S(l, a, s);
  }
  function Ql(l, a) {
    var s = Be || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (l) {
        var R = v.scriptResources.hasOwnProperty(l) ? v.scriptResources[l] : void 0;
        R !== null && (v.scriptResources[l] = null, a = wr({ src: l, async: !0 }, a), R && (R.length === 2 && pa(a, R), l = w.preloads.scripts.get(l)) && (l.length = 0), l = [], w.scripts.add(l), ro(l, a), ia(s));
      }
    } else
      Tl.X(l, a);
  }
  function es(l, a) {
    var s = Be || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (l) {
        var R = v.moduleScriptResources.hasOwnProperty(
          l
        ) ? v.moduleScriptResources[l] : void 0;
        R !== null && (v.moduleScriptResources[l] = null, a = wr({ src: l, type: "module", async: !0 }, a), R && (R.length === 2 && pa(a, R), l = w.preloads.moduleScripts.get(l)) && (l.length = 0), l = [], w.scripts.add(l), ro(l, a), ia(s));
      }
    } else
      Tl.M(l, a);
  }
  function pa(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a[0]), l.integrity == null && (l.integrity = a[1]);
  }
  function Hc(l, a, s) {
    l = ("" + l).replace(
      Aa,
      Ut
    ), a = ("" + a).replace(
      Dt,
      Ki
    ), a = "<" + l + '>; rel=preload; as="' + a + '"';
    for (var v in s)
      Qe.call(s, v) && (l = s[v], typeof l == "string" && (a += "; " + v.toLowerCase() + '="' + ("" + l).replace(
        Dt,
        Ki
      ) + '"'));
    return a;
  }
  var Aa = /[<>\r\n]/g;
  function Ut(l) {
    switch (l) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var Dt = /["';,\r\n]/g;
  function Ki(l) {
    switch (l) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function Sn(l) {
    this.styles.add(l);
  }
  function fn(l) {
    this.stylesheets.add(l);
  }
  function Ia(l, a) {
    a.styles.forEach(Sn, l), a.stylesheets.forEach(fn, l), a.suspenseyImages && (l.suspenseyImages = !0);
  }
  function ho(l) {
    return 0 < l.stylesheets.size || l.suspenseyImages;
  }
  var Wc = Function.prototype.bind, go = Symbol.for("react.client.reference");
  function Fu(l) {
    if (l == null)
      return null;
    if (typeof l == "function")
      return l.$$typeof === go ? null : l.displayName || l.name || null;
    if (typeof l == "string")
      return l;
    switch (l) {
      case gt:
        return "Fragment";
      case vn:
        return "Profiler";
      case Hn:
        return "StrictMode";
      case W:
        return "Suspense";
      case Ce:
        return "SuspenseList";
      case _i:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pn:
          return "Portal";
        case ve:
          return l.displayName || "Context";
        case Kt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ht:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Et:
          return a = l.displayName || null, a !== null ? a : Fu(l.type) || "Memo";
        case $:
          a = l._payload, l = l._init;
          try {
            return Fu(l(a));
          } catch {
          }
      }
    return null;
  }
  var ys = {}, Nn = null;
  function xi(l, a) {
    if (l !== a) {
      l.context._currentValue = l.parentValue, l = l.parent;
      var s = a.parent;
      if (l === null) {
        if (s !== null)
          throw Error(_(401));
      } else {
        if (s === null)
          throw Error(_(401));
        xi(l, s);
      }
      a.context._currentValue = a.value;
    }
  }
  function ns(l) {
    l.context._currentValue = l.parentValue, l = l.parent, l !== null && ns(l);
  }
  function i(l) {
    var a = l.parent;
    a !== null && i(a), l.context._currentValue = l.value;
  }
  function o(l, a) {
    if (l.context._currentValue = l.parentValue, l = l.parent, l === null)
      throw Error(_(402));
    l.depth === a.depth ? xi(l, a) : o(l, a);
  }
  function f(l, a) {
    var s = a.parent;
    if (s === null)
      throw Error(_(402));
    l.depth === s.depth ? xi(l, s) : f(l, s), a.context._currentValue = a.value;
  }
  function g(l) {
    var a = Nn;
    a !== l && (a === null ? i(l) : l === null ? ns(a) : a.depth === l.depth ? xi(a, l) : a.depth > l.depth ? o(a, l) : f(a, l), Nn = l);
  }
  var T = {
    enqueueSetState: function(l, a) {
      l = l._reactInternals, l.queue !== null && l.queue.push(a);
    },
    enqueueReplaceState: function(l, a) {
      l = l._reactInternals, l.replace = !0, l.queue = [a];
    },
    enqueueForceUpdate: function() {
    }
  }, C = { id: 1, overflow: "" };
  function P(l, a, s) {
    var v = l.id;
    l = l.overflow;
    var w = 32 - Y(v) - 1;
    v &= ~(1 << w), s += 1;
    var R = 32 - Y(a) + w;
    if (30 < R) {
      var k = w - w % 5;
      return R = (v & (1 << k) - 1).toString(32), v >>= k, w -= k, {
        id: 1 << 32 - Y(a) + w | s << w | v,
        overflow: R + l
      };
    }
    return {
      id: 1 << R | s << w | v,
      overflow: l
    };
  }
  var Y = Math.clz32 ? Math.clz32 : K, I = Math.log, H = Math.LN2;
  function K(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (I(l) / H | 0) | 0;
  }
  function Q() {
  }
  var ae = Error(_(460));
  function be(l, a, s) {
    switch (s = l[s], s === void 0 ? l.push(a) : s !== a && (a.then(Q, Q), a = s), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw a.reason;
      default:
        switch (typeof a.status == "string" ? a.then(Q, Q) : (l = a, l.status = "pending", l.then(
          function(v) {
            if (a.status === "pending") {
              var w = a;
              w.status = "fulfilled", w.value = v;
            }
          },
          function(v) {
            if (a.status === "pending") {
              var w = a;
              w.status = "rejected", w.reason = v;
            }
          }
        )), a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw a.reason;
        }
        throw Le = a, ae;
    }
  }
  var Le = null;
  function Pe() {
    if (Le === null)
      throw Error(_(459));
    var l = Le;
    return Le = null, l;
  }
  function Te(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var Ie = typeof Object.is == "function" ? Object.is : Te, Se = null, _n = null, ze = null, Xe = null, ln = null, _e = null, mn = !1, $e = !1, er = 0, cn = 0, Je = -1, en = 0, Me = null, nn = null, Pt = 0;
  function He() {
    if (Se === null)
      throw Error(_(321));
    return Se;
  }
  function qi() {
    if (0 < Pt)
      throw Error(_(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ei() {
    return _e === null ? ln === null ? (mn = !1, ln = _e = qi()) : (mn = !0, _e = ln) : _e.next === null ? (mn = !1, _e = _e.next = qi()) : (mn = !0, _e = _e.next), _e;
  }
  function nr() {
    var l = Me;
    return Me = null, l;
  }
  function rl() {
    Xe = ze = _n = Se = null, $e = !1, ln = null, Pt = 0, _e = nn = null;
  }
  function ll(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function il(l, a, s) {
    if (Se = He(), _e = Ei(), mn) {
      var v = _e.queue;
      if (a = v.dispatch, nn !== null && (s = nn.get(v), s !== void 0)) {
        nn.delete(v), v = _e.memoizedState;
        do
          v = l(v, s.action), s = s.next;
        while (s !== null);
        return _e.memoizedState = v, [v, a];
      }
      return [_e.memoizedState, a];
    }
    return l = l === ll ? typeof a == "function" ? a() : a : s !== void 0 ? s(a) : a, _e.memoizedState = l, l = _e.queue = { last: null, dispatch: null }, l = l.dispatch = Ri.bind(
      null,
      Se,
      l
    ), [_e.memoizedState, l];
  }
  function Vl(l, a) {
    if (Se = He(), _e = Ei(), a = a === void 0 ? null : a, _e !== null) {
      var s = _e.memoizedState;
      if (s !== null && a !== null) {
        var v = s[1];
        e:
          if (v === null)
            v = !1;
          else {
            for (var w = 0; w < v.length && w < a.length; w++)
              if (!Ie(a[w], v[w])) {
                v = !1;
                break e;
              }
            v = !0;
          }
        if (v)
          return s[0];
      }
    }
    return l = l(), _e.memoizedState = [l, a], l;
  }
  function Ri(l, a, s) {
    if (25 <= Pt)
      throw Error(_(301));
    if (l === Se)
      if ($e = !0, l = { action: s, next: null }, nn === null && (nn = /* @__PURE__ */ new Map()), s = nn.get(a), s === void 0)
        nn.set(a, l);
      else {
        for (a = s; a.next !== null; )
          a = a.next;
        a.next = l;
      }
  }
  function Tt() {
    throw Error(_(440));
  }
  function Ma() {
    throw Error(_(394));
  }
  function Oa() {
    throw Error(_(479));
  }
  function rc(l, a, s) {
    He();
    var v = cn++, w = ze;
    if (typeof l.$$FORM_ACTION == "function") {
      var R = null, k = Xe;
      w = w.formState;
      var D = l.$$IS_SIGNATURE_EQUAL;
      if (w !== null && typeof D == "function") {
        var p = w[1];
        D.call(l, w[2], w[3]) && (R = s !== void 0 ? "p" + s : "k" + yr(
          JSON.stringify([k, null, v]),
          0
        ), p === R && (Je = v, a = w[0]));
      }
      var L = l.bind(null, a);
      return l = function(X) {
        L(X);
      }, typeof L.$$FORM_ACTION == "function" && (l.$$FORM_ACTION = function(X) {
        X = L.$$FORM_ACTION(X), s !== void 0 && (s += "", X.action = s);
        var se = X.data;
        return se && (R === null && (R = s !== void 0 ? "p" + s : "k" + yr(
          JSON.stringify([
            k,
            null,
            v
          ]),
          0
        )), se.append("$ACTION_KEY", R)), X;
      }), [a, l, !1];
    }
    var U = l.bind(null, a);
    return [
      a,
      function(X) {
        U(X);
      },
      !1
    ];
  }
  function Nc(l) {
    var a = en;
    return en += 1, Me === null && (Me = []), be(Me, l, a);
  }
  function vo() {
    throw Error(_(393));
  }
  var ji = {
    readContext: function(l) {
      return l._currentValue;
    },
    use: function(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function")
          return Nc(l);
        if (l.$$typeof === ve)
          return l._currentValue;
      }
      throw Error(_(438, String(l)));
    },
    useContext: function(l) {
      return He(), l._currentValue;
    },
    useMemo: Vl,
    useReducer: il,
    useRef: function(l) {
      Se = He(), _e = Ei();
      var a = _e.memoizedState;
      return a === null ? (l = { current: l }, _e.memoizedState = l) : a;
    },
    useState: function(l) {
      return il(ll, l);
    },
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useCallback: function(l, a) {
      return Vl(function() {
        return l;
      }, a);
    },
    useImperativeHandle: Q,
    useEffect: Q,
    useDebugValue: Q,
    useDeferredValue: function(l, a) {
      return He(), a !== void 0 ? a : l;
    },
    useTransition: function() {
      return He(), [!1, Ma];
    },
    useId: function() {
      var l = _n.treeContext, a = l.overflow;
      l = l.id, l = (l & ~(1 << 32 - Y(l) - 1)).toString(32) + a;
      var s = tr;
      if (s === null)
        throw Error(_(404));
      return a = er++, l = "_" + s.idPrefix + "R_" + l, 0 < a && (l += "H" + a.toString(32)), l + "_";
    },
    useSyncExternalStore: function(l, a, s) {
      if (s === void 0)
        throw Error(_(407));
      return s();
    },
    useOptimistic: function(l) {
      return He(), [l, Oa];
    },
    useActionState: rc,
    useFormState: rc,
    useHostTransitionStatus: function() {
      return He(), xr;
    },
    useMemoCache: function(l) {
      for (var a = Array(l), s = 0; s < l; s++)
        a[s] = ci;
      return a;
    },
    useCacheRefresh: function() {
      return vo;
    },
    useEffectEvent: function() {
      return Tt;
    }
  }, tr = null, lc = {
    getCacheForType: function() {
      throw Error(_(248));
    },
    cacheSignal: function() {
      throw Error(_(248));
    }
  }, rr, qr;
  function Ci(l) {
    if (rr === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        rr = a && a[1] || "", qr = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + rr + l + qr;
  }
  var ic = !1;
  function ki(l, a) {
    if (!l || ic)
      return "";
    ic = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var v = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (ce) {
                  var se = ce;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (ce) {
                  se = ce;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ce) {
                se = ce;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (ce) {
            if (ce && se && typeof ce.stack == "string")
              return [ce.stack, se.stack];
          }
          return [null, null];
        }
      };
      v.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var w = Object.getOwnPropertyDescriptor(
        v.DetermineComponentFrameRoot,
        "name"
      );
      w && w.configurable && Object.defineProperty(
        v.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var R = v.DetermineComponentFrameRoot(), k = R[0], D = R[1];
      if (k && D) {
        var p = k.split(`
`), L = D.split(`
`);
        for (w = v = 0; v < p.length && !p[v].includes("DetermineComponentFrameRoot"); )
          v++;
        for (; w < L.length && !L[w].includes(
          "DetermineComponentFrameRoot"
        ); )
          w++;
        if (v === p.length || w === L.length)
          for (v = p.length - 1, w = L.length - 1; 1 <= v && 0 <= w && p[v] !== L[w]; )
            w--;
        for (; 1 <= v && 0 <= w; v--, w--)
          if (p[v] !== L[w]) {
            if (v !== 1 || w !== 1)
              do
                if (v--, w--, 0 > w || p[v] !== L[w]) {
                  var U = `
` + p[v].replace(" at new ", " at ");
                  return l.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", l.displayName)), U;
                }
              while (1 <= v && 0 <= w);
            break;
          }
      }
    } finally {
      ic = !1, Error.prepareStackTrace = s;
    }
    return (s = l ? l.displayName || l.name : "") ? Ci(s) : "";
  }
  function mc(l) {
    if (typeof l == "string")
      return Ci(l);
    if (typeof l == "function")
      return l.prototype && l.prototype.isReactComponent ? ki(l, !0) : ki(l, !1);
    if (typeof l == "object" && l !== null) {
      switch (l.$$typeof) {
        case Ht:
          return ki(l.render, !1);
        case Et:
          return ki(l.type, !1);
        case $:
          var a = l, s = a._payload;
          a = a._init;
          try {
            l = a(s);
          } catch {
            return Ci("Lazy");
          }
          return mc(l);
      }
      if (typeof l.name == "string") {
        e: {
          s = l.name, a = l.env;
          var v = l.debugLocation;
          if (v != null && (l = Error.prepareStackTrace, Error.prepareStackTrace = void 0, v = v.stack, Error.prepareStackTrace = l, v.startsWith(`Error: react-stack-top-frame
`) && (v = v.slice(29)), l = v.indexOf(`
`), l !== -1 && (v = v.slice(l + 1)), l = v.indexOf("react_stack_bottom_frame"), l !== -1 && (l = v.lastIndexOf(`
`, l)), l = l !== -1 ? v = v.slice(0, l) : "", v = l.lastIndexOf(`
`), l = v === -1 ? l : l.slice(v + 1), l.indexOf(s) !== -1)) {
            s = `
` + l;
            break e;
          }
          s = Ci(
            s + (a ? " [" + a + "]" : "")
          );
        }
        return s;
      }
    }
    switch (l) {
      case Ce:
        return Ci("SuspenseList");
      case W:
        return Ci("Suspense");
    }
    return "";
  }
  function ot(l, a) {
    return (500 < a.byteSize || ho(a.contentState)) && a.contentPreamble === null;
  }
  function ac(l) {
    if (typeof l == "object" && l !== null && typeof l.environmentName == "string") {
      var a = l.environmentName;
      l = [l].slice(0), typeof l[0] == "string" ? l.splice(
        0,
        1,
        "%c%s%c " + l[0],
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + a + " ",
        ""
      ) : l.splice(
        0,
        0,
        "%c%s%c",
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + a + " ",
        ""
      ), l.unshift(console), a = Wc.apply(console.error, l), a();
    } else
      console.error(l);
    return null;
  }
  function $i(l, a, s, v, w, R, k, D, p, L, U) {
    var X = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = l, this.renderState = a, this.rootFormatContext = s, this.progressiveChunkSize = v === void 0 ? 12800 : v, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = X, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = w === void 0 ? ac : w, this.onPostpone = L === void 0 ? Q : L, this.onAllReady = R === void 0 ? Q : R, this.onShellReady = k === void 0 ? Q : k, this.onShellError = D === void 0 ? Q : D, this.onFatalError = p === void 0 ? Q : p, this.formState = U === void 0 ? null : U;
  }
  function bo(l, a, s, v, w, R, k, D, p, L, U, X) {
    return a = new $i(
      a,
      s,
      v,
      w,
      R,
      k,
      D,
      p,
      L,
      U,
      X
    ), s = Pr(
      a,
      0,
      null,
      v,
      !1,
      !1
    ), s.parentFlushed = !0, l = ea(
      a,
      null,
      l,
      -1,
      null,
      s,
      null,
      null,
      a.abortableTasks,
      null,
      v,
      null,
      C,
      null,
      null
    ), na(l), a.pingedTasks.push(l), a;
  }
  function _a(l, a, s, v, w, R, k, D, p, L, U) {
    return l = bo(
      l,
      a,
      s,
      v,
      w,
      R,
      k,
      D,
      p,
      L,
      U,
      void 0
    ), l.trackedPostpones = {
      workingMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      rootSlots: null
    }, l;
  }
  function jn(l, a, s, v, w, R, k, D, p) {
    return s = new $i(
      a.resumableState,
      s,
      a.rootFormatContext,
      a.progressiveChunkSize,
      v,
      w,
      R,
      k,
      D,
      p,
      null
    ), s.nextSegmentId = a.nextSegmentId, typeof a.replaySlots == "number" ? (v = Pr(
      s,
      0,
      null,
      a.rootFormatContext,
      !1,
      !1
    ), v.parentFlushed = !0, l = ea(
      s,
      null,
      l,
      -1,
      null,
      v,
      null,
      null,
      s.abortableTasks,
      null,
      a.rootFormatContext,
      null,
      C,
      null,
      null
    ), na(l), s.pingedTasks.push(l), s) : (l = Un(
      s,
      null,
      {
        nodes: a.replayNodes,
        slots: a.replaySlots,
        pendingTasks: 0
      },
      l,
      -1,
      null,
      null,
      s.abortableTasks,
      null,
      a.rootFormatContext,
      null,
      C,
      null,
      null
    ), na(l), s.pingedTasks.push(l), s);
  }
  function jr(l, a, s, v, w, R, k, D, p) {
    return l = jn(
      l,
      a,
      s,
      v,
      w,
      R,
      k,
      D,
      p
    ), l.trackedPostpones = {
      workingMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      rootSlots: null
    }, l;
  }
  var Be = null;
  function Si(l, a) {
    l.pingedTasks.push(a), l.pingedTasks.length === 1 && (l.flushScheduled = l.destination !== null, l.trackedPostpones !== null || l.status === 10 ? Li(function() {
      return ts(l);
    }) : et(function() {
      return ts(l);
    }));
  }
  function yo(l, a, s, v, w) {
    return s = {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      row: a,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: s,
      errorDigest: null,
      contentState: pl(),
      fallbackState: pl(),
      contentPreamble: v,
      fallbackPreamble: w,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    }, a !== null && (a.pendingTasks++, v = a.boundaries, v !== null && (l.allPendingTasks++, s.pendingTasks++, v.push(s)), l = a.inheritedHoistables, l !== null && Ia(s.contentState, l)), s;
  }
  function ea(l, a, s, v, w, R, k, D, p, L, U, X, se, ce, Ye) {
    l.allPendingTasks++, w === null ? l.pendingRootTasks++ : w.pendingTasks++, ce !== null && ce.pendingTasks++;
    var Fe = {
      replay: null,
      node: s,
      childIndex: v,
      ping: function() {
        return Si(l, Fe);
      },
      blockedBoundary: w,
      blockedSegment: R,
      blockedPreamble: k,
      hoistableState: D,
      abortSet: p,
      keyPath: L,
      formatContext: U,
      context: X,
      treeContext: se,
      row: ce,
      componentStack: Ye,
      thenableState: a
    };
    return p.add(Fe), Fe;
  }
  function Un(l, a, s, v, w, R, k, D, p, L, U, X, se, ce) {
    l.allPendingTasks++, R === null ? l.pendingRootTasks++ : R.pendingTasks++, se !== null && se.pendingTasks++, s.pendingTasks++;
    var Ye = {
      replay: s,
      node: v,
      childIndex: w,
      ping: function() {
        return Si(l, Ye);
      },
      blockedBoundary: R,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: k,
      abortSet: D,
      keyPath: p,
      formatContext: L,
      context: U,
      treeContext: X,
      row: se,
      componentStack: ce,
      thenableState: a
    };
    return D.add(Ye), Ye;
  }
  function Pr(l, a, s, v, w, R) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: a,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: v,
      boundary: s,
      lastPushedText: w,
      textEmbedded: R
    };
  }
  function na(l) {
    var a = l.node;
    if (typeof a == "object" && a !== null)
      switch (a.$$typeof) {
        case xe:
          l.componentStack = { parent: l.componentStack, type: a.type };
      }
  }
  function Da(l) {
    return l === null ? null : { parent: l.parent, type: "Suspense Fallback" };
  }
  function al(l) {
    var a = {};
    return l && Object.defineProperty(a, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var s = "", v = l;
          do
            s += mc(v.type), v = v.parent;
          while (v);
          var w = s;
        } catch (R) {
          w = `
Error generating stack: ` + R.message + `
` + R.stack;
        }
        return Object.defineProperty(a, "componentStack", {
          value: w
        }), w;
      }
    }), a;
  }
  function Yt(l, a, s) {
    if (l = l.onError, a = l(a, s), a == null || typeof a == "string")
      return a;
  }
  function wo(l, a) {
    var s = l.onShellError, v = l.onFatalError;
    s(a), v(a), l.destination !== null ? (l.status = 14, Wt(l.destination, a)) : (l.status = 13, l.fatalError = a);
  }
  function lr(l, a) {
    pu(l, a.next, a.hoistables);
  }
  function pu(l, a, s) {
    for (; a !== null; ) {
      s !== null && (Ia(a.hoistables, s), a.inheritedHoistables = s);
      var v = a.boundaries;
      if (v !== null) {
        a.boundaries = null;
        for (var w = 0; w < v.length; w++) {
          var R = v[w];
          s !== null && Ia(R.contentState, s), ol(l, R, null, null);
        }
      }
      if (a.pendingTasks--, 0 < a.pendingTasks)
        break;
      s = a.hoistables, a = a.next;
    }
  }
  function La(l, a) {
    var s = a.boundaries;
    if (s !== null && a.pendingTasks === s.length) {
      for (var v = !0, w = 0; w < s.length; w++) {
        var R = s[w];
        if (R.pendingTasks !== 1 || R.parentFlushed || ot(l, R)) {
          v = !1;
          break;
        }
      }
      v && pu(l, a, a.hoistables);
    }
  }
  function oc(l) {
    var a = {
      pendingTasks: 1,
      boundaries: null,
      hoistables: pl(),
      inheritedHoistables: null,
      together: !1,
      next: null
    };
    return l !== null && 0 < l.pendingTasks && (a.pendingTasks++, a.boundaries = [], l.next = a), a;
  }
  function Uc(l, a, s, v, w) {
    var R = a.keyPath, k = a.treeContext, D = a.row;
    a.keyPath = s, s = v.length;
    var p = null;
    if (a.replay !== null) {
      var L = a.replay.slots;
      if (L !== null && typeof L == "object")
        for (var U = 0; U < s; U++) {
          var X = w !== "backwards" && w !== "unstable_legacy-backwards" ? U : s - 1 - U, se = v[X];
          a.row = p = oc(
            p
          ), a.treeContext = P(k, s, X);
          var ce = L[X];
          typeof ce == "number" ? (Ba(l, a, ce, se, X), delete L[X]) : ct(l, a, se, X), --p.pendingTasks === 0 && lr(l, p);
        }
      else
        for (L = 0; L < s; L++)
          U = w !== "backwards" && w !== "unstable_legacy-backwards" ? L : s - 1 - L, X = v[U], a.row = p = oc(p), a.treeContext = P(k, s, U), ct(l, a, X, U), --p.pendingTasks === 0 && lr(l, p);
    } else if (w !== "backwards" && w !== "unstable_legacy-backwards")
      for (w = 0; w < s; w++)
        L = v[w], a.row = p = oc(p), a.treeContext = P(
          k,
          s,
          w
        ), ct(l, a, L, w), --p.pendingTasks === 0 && lr(l, p);
    else {
      for (w = a.blockedSegment, L = w.children.length, U = w.chunks.length, X = s - 1; 0 <= X; X--) {
        se = v[X], a.row = p = oc(
          p
        ), a.treeContext = P(k, s, X), ce = Pr(
          l,
          U,
          null,
          a.formatContext,
          X === 0 ? w.lastPushedText : !0,
          !0
        ), w.children.splice(L, 0, ce), a.blockedSegment = ce;
        try {
          ct(l, a, se, X), ce.lastPushedText && ce.textEmbedded && ce.chunks.push(Hl), ce.status = 1, ta(l, a.blockedBoundary, ce), --p.pendingTasks === 0 && lr(l, p);
        } catch (Ye) {
          throw ce.status = l.status === 12 ? 3 : 4, Ye;
        }
      }
      a.blockedSegment = w, w.lastPushedText = !1;
    }
    D !== null && p !== null && 0 < p.pendingTasks && (D.pendingTasks++, p.next = D), a.treeContext = k, a.row = D, a.keyPath = R;
  }
  function Yc(l, a, s, v, w, R) {
    var k = a.thenableState;
    for (a.thenableState = null, Se = {}, _n = a, ze = l, Xe = s, cn = er = 0, Je = -1, en = 0, Me = k, l = v(w, R); $e; )
      $e = !1, cn = er = 0, Je = -1, en = 0, Pt += 1, _e = null, l = v(w, R);
    return rl(), l;
  }
  function Kl(l, a, s, v, w, R, k) {
    var D = !1;
    if (R !== 0 && l.formState !== null) {
      var p = a.blockedSegment;
      if (p !== null) {
        D = !0, p = p.chunks;
        for (var L = 0; L < R; L++)
          L === k ? p.push(yu) : p.push(Ac);
      }
    }
    R = a.keyPath, a.keyPath = s, w ? (s = a.treeContext, a.treeContext = P(s, 1, 0), ct(l, a, v, -1), a.treeContext = s) : D ? ct(l, a, v, -1) : ir(l, a, v, -1), a.keyPath = R;
  }
  function za(l, a, s, v, w, R) {
    if (typeof v == "function")
      if (v.prototype && v.prototype.isReactComponent) {
        var k = w;
        if ("ref" in w) {
          k = {};
          for (var D in w)
            D !== "ref" && (k[D] = w[D]);
        }
        var p = v.defaultProps;
        if (p) {
          k === w && (k = wr({}, k, w));
          for (var L in p)
            k[L] === void 0 && (k[L] = p[L]);
        }
        w = k, k = ys, p = v.contextType, typeof p == "object" && p !== null && (k = p._currentValue), k = new v(w, k);
        var U = k.state !== void 0 ? k.state : null;
        if (k.updater = T, k.props = w, k.state = U, p = { queue: [], replace: !1 }, k._reactInternals = p, R = v.contextType, k.context = typeof R == "object" && R !== null ? R._currentValue : ys, R = v.getDerivedStateFromProps, typeof R == "function" && (R = R(w, U), U = R == null ? U : wr({}, U, R), k.state = U), typeof v.getDerivedStateFromProps != "function" && typeof k.getSnapshotBeforeUpdate != "function" && (typeof k.UNSAFE_componentWillMount == "function" || typeof k.componentWillMount == "function"))
          if (v = k.state, typeof k.componentWillMount == "function" && k.componentWillMount(), typeof k.UNSAFE_componentWillMount == "function" && k.UNSAFE_componentWillMount(), v !== k.state && T.enqueueReplaceState(
            k,
            k.state,
            null
          ), p.queue !== null && 0 < p.queue.length)
            if (v = p.queue, R = p.replace, p.queue = null, p.replace = !1, R && v.length === 1)
              k.state = v[0];
            else {
              for (p = R ? v[0] : k.state, U = !0, R = R ? 1 : 0; R < v.length; R++)
                L = v[R], L = typeof L == "function" ? L.call(k, p, w, void 0) : L, L != null && (U ? (U = !1, p = wr({}, p, L)) : wr(p, L));
              k.state = p;
            }
          else
            p.queue = null;
        if (v = k.render(), l.status === 12)
          throw null;
        w = a.keyPath, a.keyPath = s, ir(l, a, v, -1), a.keyPath = w;
      } else {
        if (v = Yc(l, a, s, v, w, void 0), l.status === 12)
          throw null;
        Kl(
          l,
          a,
          s,
          v,
          er !== 0,
          cn,
          Je
        );
      }
    else if (typeof v == "string")
      if (k = a.blockedSegment, k === null)
        k = w.children, p = a.formatContext, U = a.keyPath, a.formatContext = ba(p, v, w), a.keyPath = s, ct(l, a, k, -1), a.formatContext = p, a.keyPath = U;
      else {
        if (U = Zo(
          k.chunks,
          v,
          w,
          l.resumableState,
          l.renderState,
          a.blockedPreamble,
          a.hoistableState,
          a.formatContext,
          k.lastPushedText
        ), k.lastPushedText = !1, p = a.formatContext, R = a.keyPath, a.keyPath = s, (a.formatContext = ba(p, v, w)).insertionMode === 3) {
          s = Pr(
            l,
            0,
            null,
            a.formatContext,
            !1,
            !1
          ), k.preambleChildren.push(s), a.blockedSegment = s;
          try {
            s.status = 6, ct(l, a, U, -1), s.lastPushedText && s.textEmbedded && s.chunks.push(Hl), s.status = 1, ta(l, a.blockedBoundary, s);
          } finally {
            a.blockedSegment = k;
          }
        } else
          ct(l, a, U, -1);
        a.formatContext = p, a.keyPath = R;
        e: {
          switch (a = k.chunks, l = l.resumableState, v) {
            case "title":
            case "style":
            case "script":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break e;
            case "body":
              if (1 >= p.insertionMode) {
                l.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (p.insertionMode === 0) {
                l.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= p.insertionMode)
                break e;
          }
          a.push(Ul(v));
        }
        k.lastPushedText = !1;
      }
    else {
      switch (v) {
        case ha:
        case Hn:
        case vn:
        case gt:
          v = a.keyPath, a.keyPath = s, ir(l, a, w.children, -1), a.keyPath = v;
          return;
        case _i:
          v = a.blockedSegment, v === null ? w.mode !== "hidden" && (v = a.keyPath, a.keyPath = s, ct(l, a, w.children, -1), a.keyPath = v) : w.mode !== "hidden" && (v.chunks.push(Rr), v.lastPushedText = !1, k = a.keyPath, a.keyPath = s, ct(l, a, w.children, -1), a.keyPath = k, v.chunks.push(Vo), v.lastPushedText = !1);
          return;
        case Ce:
          e: {
            if (v = w.children, w = w.revealOrder, w === "forwards" || w === "backwards" || w === "unstable_legacy-backwards") {
              if (Ee(v)) {
                Uc(l, a, s, v, w);
                break e;
              }
              if ((k = It(v)) && (k = k.call(v))) {
                if (p = k.next(), !p.done) {
                  do
                    p = k.next();
                  while (!p.done);
                  Uc(l, a, s, v, w);
                }
                break e;
              }
            }
            w === "together" ? (w = a.keyPath, k = a.row, p = a.row = oc(null), p.boundaries = [], p.together = !0, a.keyPath = s, ir(l, a, v, -1), --p.pendingTasks === 0 && lr(l, p), a.keyPath = w, a.row = k, k !== null && 0 < p.pendingTasks && (k.pendingTasks++, p.next = k)) : (w = a.keyPath, a.keyPath = s, ir(l, a, v, -1), a.keyPath = w);
          }
          return;
        case Di:
        case N:
          throw Error(_(343));
        case W:
          e:
            if (a.replay !== null) {
              v = a.keyPath, k = a.formatContext, p = a.row, a.keyPath = s, a.formatContext = tl(
                l.resumableState,
                k
              ), a.row = null, s = w.children;
              try {
                ct(l, a, s, -1);
              } finally {
                a.keyPath = v, a.formatContext = k, a.row = p;
              }
            } else {
              v = a.keyPath, R = a.formatContext;
              var X = a.row;
              L = a.blockedBoundary, D = a.blockedPreamble;
              var se = a.hoistableState, ce = a.blockedSegment, Ye = w.fallback;
              w = w.children;
              var Fe = /* @__PURE__ */ new Set(), Ge = 2 > a.formatContext.insertionMode ? yo(
                l,
                a.row,
                Fe,
                Wn(),
                Wn()
              ) : yo(
                l,
                a.row,
                Fe,
                null,
                null
              );
              l.trackedPostpones !== null && (Ge.trackedContentKeyPath = s);
              var Yn = Pr(
                l,
                ce.chunks.length,
                Ge,
                a.formatContext,
                !1,
                !1
              );
              ce.children.push(Yn), ce.lastPushedText = !1;
              var Pn = Pr(
                l,
                0,
                null,
                a.formatContext,
                !1,
                !1
              );
              if (Pn.parentFlushed = !0, l.trackedPostpones !== null) {
                k = a.componentStack, p = [s[0], "Suspense Fallback", s[2]], U = [p[1], p[2], [], null], l.trackedPostpones.workingMap.set(p, U), Ge.trackedFallbackNode = U, a.blockedSegment = Yn, a.blockedPreamble = Ge.fallbackPreamble, a.keyPath = p, a.formatContext = bu(
                  l.resumableState,
                  R
                ), a.componentStack = Da(k), Yn.status = 6;
                try {
                  ct(l, a, Ye, -1), Yn.lastPushedText && Yn.textEmbedded && Yn.chunks.push(Hl), Yn.status = 1, ta(l, L, Yn);
                } catch (Gt) {
                  throw Yn.status = l.status === 12 ? 3 : 4, Gt;
                } finally {
                  a.blockedSegment = ce, a.blockedPreamble = D, a.keyPath = v, a.formatContext = R;
                }
                a = ea(
                  l,
                  null,
                  w,
                  -1,
                  Ge,
                  Pn,
                  Ge.contentPreamble,
                  Ge.contentState,
                  a.abortSet,
                  s,
                  tl(
                    l.resumableState,
                    a.formatContext
                  ),
                  a.context,
                  a.treeContext,
                  null,
                  k
                ), na(a), l.pingedTasks.push(a);
              } else {
                a.blockedBoundary = Ge, a.blockedPreamble = Ge.contentPreamble, a.hoistableState = Ge.contentState, a.blockedSegment = Pn, a.keyPath = s, a.formatContext = tl(
                  l.resumableState,
                  R
                ), a.row = null, Pn.status = 6;
                try {
                  if (ct(l, a, w, -1), Pn.lastPushedText && Pn.textEmbedded && Pn.chunks.push(Hl), Pn.status = 1, ta(l, Ge, Pn), Qc(Ge, Pn), Ge.pendingTasks === 0 && Ge.status === 0) {
                    if (Ge.status = 1, !ot(l, Ge)) {
                      X !== null && --X.pendingTasks === 0 && lr(l, X), l.pendingRootTasks === 0 && a.blockedPreamble && Al(l);
                      break e;
                    }
                  } else
                    X !== null && X.together && La(l, X);
                } catch (Gt) {
                  Ge.status = 4, l.status === 12 ? (Pn.status = 3, k = l.fatalError) : (Pn.status = 4, k = Gt), p = al(a.componentStack), U = Yt(
                    l,
                    k,
                    p
                  ), Ge.errorDigest = U, Gc(l, Ge);
                } finally {
                  a.blockedBoundary = L, a.blockedPreamble = D, a.hoistableState = se, a.blockedSegment = ce, a.keyPath = v, a.formatContext = R, a.row = X;
                }
                a = ea(
                  l,
                  null,
                  Ye,
                  -1,
                  L,
                  Yn,
                  Ge.fallbackPreamble,
                  Ge.fallbackState,
                  Fe,
                  [s[0], "Suspense Fallback", s[2]],
                  bu(
                    l.resumableState,
                    a.formatContext
                  ),
                  a.context,
                  a.treeContext,
                  a.row,
                  Da(
                    a.componentStack
                  )
                ), na(a), l.pingedTasks.push(a);
              }
            }
          return;
      }
      if (typeof v == "object" && v !== null)
        switch (v.$$typeof) {
          case Ht:
            if ("ref" in w)
              for (ce in k = {}, w)
                ce !== "ref" && (k[ce] = w[ce]);
            else
              k = w;
            v = Yc(
              l,
              a,
              s,
              v.render,
              k,
              R
            ), Kl(
              l,
              a,
              s,
              v,
              er !== 0,
              cn,
              Je
            );
            return;
          case Et:
            za(l, a, s, v.type, w, R);
            return;
          case ve:
            if (p = w.children, k = a.keyPath, w = w.value, U = v._currentValue, v._currentValue = w, R = Nn, Nn = v = {
              parent: R,
              depth: R === null ? 0 : R.depth + 1,
              context: v,
              parentValue: U,
              value: w
            }, a.context = v, a.keyPath = s, ir(l, a, p, -1), l = Nn, l === null)
              throw Error(_(403));
            l.context._currentValue = l.parentValue, l = Nn = l.parent, a.context = l, a.keyPath = k;
            return;
          case Kt:
            w = w.children, v = w(v._context._currentValue), w = a.keyPath, a.keyPath = s, ir(l, a, v, -1), a.keyPath = w;
            return;
          case $:
            if (k = v._init, v = k(v._payload), l.status === 12)
              throw null;
            za(l, a, s, v, w, R);
            return;
        }
      throw Error(
        _(130, v == null ? v : typeof v, "")
      );
    }
  }
  function Ba(l, a, s, v, w) {
    var R = a.replay, k = a.blockedBoundary, D = Pr(
      l,
      0,
      null,
      a.formatContext,
      !1,
      !1
    );
    D.id = s, D.parentFlushed = !0;
    try {
      a.replay = null, a.blockedSegment = D, ct(l, a, v, w), D.status = 1, ta(l, k, D), k === null ? l.completedRootSegment = D : (Qc(k, D), k.parentFlushed && l.partialBoundaries.push(k));
    } finally {
      a.replay = R, a.blockedSegment = null;
    }
  }
  function ir(l, a, s, v) {
    a.replay !== null && typeof a.replay.slots == "number" ? Ba(l, a, a.replay.slots, s, v) : (a.node = s, a.childIndex = v, s = a.componentStack, na(a), cc(l, a), a.componentStack = s);
  }
  function cc(l, a) {
    var s = a.node, v = a.childIndex;
    if (s !== null) {
      if (typeof s == "object") {
        switch (s.$$typeof) {
          case xe:
            var w = s.type, R = s.key, k = s.props;
            s = k.ref;
            var D = s !== void 0 ? s : null, p = Fu(w), L = R ?? (v === -1 ? 0 : v);
            if (R = [a.keyPath, p, L], a.replay !== null)
              e: {
                var U = a.replay;
                for (v = U.nodes, s = 0; s < v.length; s++) {
                  var X = v[s];
                  if (L === X[1]) {
                    if (X.length === 4) {
                      if (p !== null && p !== X[0])
                        throw Error(
                          _(490, X[0], p)
                        );
                      var se = X[2];
                      p = X[3], L = a.node, a.replay = {
                        nodes: se,
                        slots: p,
                        pendingTasks: 1
                      };
                      try {
                        if (za(l, a, R, w, k, D), a.replay.pendingTasks === 1 && 0 < a.replay.nodes.length)
                          throw Error(_(488));
                        a.replay.pendingTasks--;
                      } catch (pe) {
                        if (typeof pe == "object" && pe !== null && (pe === ae || typeof pe.then == "function"))
                          throw a.node === L ? a.replay = U : v.splice(s, 1), pe;
                        a.replay.pendingTasks--, k = al(a.componentStack), R = l, l = a.blockedBoundary, w = pe, k = Yt(R, w, k), sc(
                          R,
                          l,
                          se,
                          p,
                          w,
                          k
                        );
                      }
                      a.replay = U;
                    } else {
                      if (w !== W)
                        throw Error(
                          _(
                            490,
                            "Suspense",
                            Fu(w) || "Unknown"
                          )
                        );
                      n: {
                        U = void 0, w = X[5], D = X[2], p = X[3], L = X[4] === null ? [] : X[4][2], X = X[4] === null ? null : X[4][3];
                        var ce = a.keyPath, Ye = a.formatContext, Fe = a.row, Ge = a.replay, Yn = a.blockedBoundary, Pn = a.hoistableState, Gt = k.children, Dr = k.fallback, ul = /* @__PURE__ */ new Set();
                        k = 2 > a.formatContext.insertionMode ? yo(
                          l,
                          a.row,
                          ul,
                          Wn(),
                          Wn()
                        ) : yo(
                          l,
                          a.row,
                          ul,
                          null,
                          null
                        ), k.parentFlushed = !0, k.rootSegmentID = w, a.blockedBoundary = k, a.hoistableState = k.contentState, a.keyPath = R, a.formatContext = tl(
                          l.resumableState,
                          Ye
                        ), a.row = null, a.replay = {
                          nodes: D,
                          slots: p,
                          pendingTasks: 1
                        };
                        try {
                          if (ct(l, a, Gt, -1), a.replay.pendingTasks === 1 && 0 < a.replay.nodes.length)
                            throw Error(_(488));
                          if (a.replay.pendingTasks--, k.pendingTasks === 0 && k.status === 0) {
                            k.status = 1, l.completedBoundaries.push(k);
                            break n;
                          }
                        } catch (pe) {
                          k.status = 4, se = al(a.componentStack), U = Yt(
                            l,
                            pe,
                            se
                          ), k.errorDigest = U, a.replay.pendingTasks--, l.clientRenderedBoundaries.push(k);
                        } finally {
                          a.blockedBoundary = Yn, a.hoistableState = Pn, a.replay = Ge, a.keyPath = ce, a.formatContext = Ye, a.row = Fe;
                        }
                        se = Un(
                          l,
                          null,
                          {
                            nodes: L,
                            slots: X,
                            pendingTasks: 0
                          },
                          Dr,
                          -1,
                          Yn,
                          k.fallbackState,
                          ul,
                          [R[0], "Suspense Fallback", R[2]],
                          bu(
                            l.resumableState,
                            a.formatContext
                          ),
                          a.context,
                          a.treeContext,
                          a.row,
                          Da(
                            a.componentStack
                          )
                        ), na(se), l.pingedTasks.push(se);
                      }
                    }
                    v.splice(s, 1);
                    break e;
                  }
                }
              }
            else
              za(l, a, R, w, k, D);
            return;
          case pn:
            throw Error(_(257));
          case $:
            if (se = s._init, s = se(s._payload), l.status === 12)
              throw null;
            ir(l, a, s, v);
            return;
        }
        if (Ee(s)) {
          uc(l, a, s, v);
          return;
        }
        if ((se = It(s)) && (se = se.call(s))) {
          if (s = se.next(), !s.done) {
            k = [];
            do
              k.push(s.value), s = se.next();
            while (!s.done);
            uc(l, a, k, v);
          }
          return;
        }
        if (typeof s.then == "function")
          return a.thenableState = null, ir(l, a, Nc(s), v);
        if (s.$$typeof === ve)
          return ir(
            l,
            a,
            s._currentValue,
            v
          );
        throw v = Object.prototype.toString.call(s), Error(
          _(
            31,
            v === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : v
          )
        );
      }
      typeof s == "string" ? (v = a.blockedSegment, v !== null && (v.lastPushedText = Ju(
        v.chunks,
        s,
        l.renderState,
        v.lastPushedText
      ))) : (typeof s == "number" || typeof s == "bigint") && (v = a.blockedSegment, v !== null && (v.lastPushedText = Ju(
        v.chunks,
        "" + s,
        l.renderState,
        v.lastPushedText
      )));
    }
  }
  function uc(l, a, s, v) {
    var w = a.keyPath;
    if (v !== -1 && (a.keyPath = [a.keyPath, "Fragment", v], a.replay !== null)) {
      for (var R = a.replay, k = R.nodes, D = 0; D < k.length; D++) {
        var p = k[D];
        if (p[1] === v) {
          v = p[2], p = p[3], a.replay = { nodes: v, slots: p, pendingTasks: 1 };
          try {
            if (uc(l, a, s, -1), a.replay.pendingTasks === 1 && 0 < a.replay.nodes.length)
              throw Error(_(488));
            a.replay.pendingTasks--;
          } catch (X) {
            if (typeof X == "object" && X !== null && (X === ae || typeof X.then == "function"))
              throw X;
            a.replay.pendingTasks--, s = al(a.componentStack);
            var L = a.blockedBoundary, U = X;
            s = Yt(l, U, s), sc(
              l,
              L,
              v,
              p,
              U,
              s
            );
          }
          a.replay = R, k.splice(D, 1);
          break;
        }
      }
      a.keyPath = w;
      return;
    }
    if (R = a.treeContext, k = s.length, a.replay !== null && (D = a.replay.slots, D !== null && typeof D == "object")) {
      for (v = 0; v < k; v++)
        p = s[v], a.treeContext = P(R, k, v), L = D[v], typeof L == "number" ? (Ba(l, a, L, p, v), delete D[v]) : ct(l, a, p, v);
      a.treeContext = R, a.keyPath = w;
      return;
    }
    for (D = 0; D < k; D++)
      v = s[D], a.treeContext = P(R, k, D), ct(l, a, v, D);
    a.treeContext = R, a.keyPath = w;
  }
  function Au(l, a, s) {
    if (s.status = 5, s.rootSegmentID = l.nextSegmentId++, l = s.trackedContentKeyPath, l === null)
      throw Error(_(486));
    var v = s.trackedFallbackNode, w = [], R = a.workingMap.get(l);
    return R === void 0 ? (s = [
      l[1],
      l[2],
      w,
      null,
      v,
      s.rootSegmentID
    ], a.workingMap.set(l, s), Du(s, l[0], a), s) : (R[4] = v, R[5] = s.rootSegmentID, R);
  }
  function Iu(l, a, s, v) {
    v.status = 5;
    var w = s.keyPath, R = s.blockedBoundary;
    if (R === null)
      v.id = l.nextSegmentId++, a.rootSlots = v.id, l.completedRootSegment !== null && (l.completedRootSegment.status = 5);
    else {
      if (R !== null && R.status === 0) {
        var k = Au(
          l,
          a,
          R
        );
        if (R.trackedContentKeyPath === w && s.childIndex === -1) {
          v.id === -1 && (v.id = v.parentFlushed ? R.rootSegmentID : l.nextSegmentId++), k[3] = v.id;
          return;
        }
      }
      if (v.id === -1 && (v.id = v.parentFlushed && R !== null ? R.rootSegmentID : l.nextSegmentId++), s.childIndex === -1)
        w === null ? a.rootSlots = v.id : (s = a.workingMap.get(w), s === void 0 ? (s = [w[1], w[2], [], v.id], Du(s, w[0], a)) : s[3] = v.id);
      else {
        if (w === null) {
          if (l = a.rootSlots, l === null)
            l = a.rootSlots = {};
          else if (typeof l == "number")
            throw Error(_(491));
        } else if (R = a.workingMap, k = R.get(w), k === void 0)
          l = {}, k = [w[1], w[2], [], l], R.set(w, k), Du(k, w[0], a);
        else if (l = k[3], l === null)
          l = k[3] = {};
        else if (typeof l == "number")
          throw Error(_(491));
        l[s.childIndex] = v.id;
      }
    }
  }
  function Gc(l, a) {
    l = l.trackedPostpones, l !== null && (a = a.trackedContentKeyPath, a !== null && (a = l.workingMap.get(a), a !== void 0 && (a.length = 4, a[2] = [], a[3] = null)));
  }
  function Mu(l, a, s) {
    return Un(
      l,
      s,
      a.replay,
      a.node,
      a.childIndex,
      a.blockedBoundary,
      a.hoistableState,
      a.abortSet,
      a.keyPath,
      a.formatContext,
      a.context,
      a.treeContext,
      a.row,
      a.componentStack
    );
  }
  function Ou(l, a, s) {
    var v = a.blockedSegment, w = Pr(
      l,
      v.chunks.length,
      null,
      a.formatContext,
      v.lastPushedText,
      !0
    );
    return v.children.push(w), v.lastPushedText = !1, ea(
      l,
      s,
      a.node,
      a.childIndex,
      a.blockedBoundary,
      w,
      a.blockedPreamble,
      a.hoistableState,
      a.abortSet,
      a.keyPath,
      a.formatContext,
      a.context,
      a.treeContext,
      a.row,
      a.componentStack
    );
  }
  function ct(l, a, s, v) {
    var w = a.formatContext, R = a.context, k = a.keyPath, D = a.treeContext, p = a.componentStack, L = a.blockedSegment;
    if (L === null) {
      L = a.replay;
      try {
        return ir(l, a, s, v);
      } catch (se) {
        if (rl(), s = se === ae ? Pe() : se, l.status !== 12 && typeof s == "object" && s !== null) {
          if (typeof s.then == "function") {
            v = se === ae ? nr() : null, l = Mu(l, a, v).ping, s.then(l, l), a.formatContext = w, a.context = R, a.keyPath = k, a.treeContext = D, a.componentStack = p, a.replay = L, g(R);
            return;
          }
          if (s.message === "Maximum call stack size exceeded") {
            s = se === ae ? nr() : null, s = Mu(l, a, s), l.pingedTasks.push(s), a.formatContext = w, a.context = R, a.keyPath = k, a.treeContext = D, a.componentStack = p, a.replay = L, g(R);
            return;
          }
        }
      }
    } else {
      var U = L.children.length, X = L.chunks.length;
      try {
        return ir(l, a, s, v);
      } catch (se) {
        if (rl(), L.children.length = U, L.chunks.length = X, s = se === ae ? Pe() : se, l.status !== 12 && typeof s == "object" && s !== null) {
          if (typeof s.then == "function") {
            L = s, s = se === ae ? nr() : null, l = Ou(l, a, s).ping, L.then(l, l), a.formatContext = w, a.context = R, a.keyPath = k, a.treeContext = D, a.componentStack = p, g(R);
            return;
          }
          if (s.message === "Maximum call stack size exceeded") {
            L = se === ae ? nr() : null, L = Ou(l, a, L), l.pingedTasks.push(L), a.formatContext = w, a.context = R, a.keyPath = k, a.treeContext = D, a.componentStack = p, g(R);
            return;
          }
        }
      }
    }
    throw a.formatContext = w, a.context = R, a.keyPath = k, a.treeContext = D, g(R), s;
  }
  function Xc(l) {
    var a = l.blockedBoundary, s = l.blockedSegment;
    s !== null && (s.status = 3, ol(this, a, l.row, s));
  }
  function sc(l, a, s, v, w, R) {
    for (var k = 0; k < s.length; k++) {
      var D = s[k];
      if (D.length === 4)
        sc(
          l,
          a,
          D[2],
          D[3],
          w,
          R
        );
      else {
        D = D[5];
        var p = l, L = R, U = yo(
          p,
          null,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        U.parentFlushed = !0, U.rootSegmentID = D, U.status = 4, U.errorDigest = L, U.parentFlushed && p.clientRenderedBoundaries.push(U);
      }
    }
    if (s.length = 0, v !== null) {
      if (a === null)
        throw Error(_(487));
      if (a.status !== 4 && (a.status = 4, a.errorDigest = R, a.parentFlushed && l.clientRenderedBoundaries.push(a)), typeof v == "object")
        for (var X in v)
          delete v[X];
    }
  }
  function fc(l, a, s) {
    var v = l.blockedBoundary, w = l.blockedSegment;
    if (w !== null) {
      if (w.status === 6)
        return;
      w.status = 3;
    }
    var R = al(l.componentStack);
    if (v === null) {
      if (a.status !== 13 && a.status !== 14) {
        if (v = l.replay, v === null) {
          a.trackedPostpones !== null && w !== null ? (v = a.trackedPostpones, Yt(a, s, R), Iu(a, v, l, w), ol(a, null, l.row, w)) : (Yt(a, s, R), wo(a, s));
          return;
        }
        v.pendingTasks--, v.pendingTasks === 0 && 0 < v.nodes.length && (w = Yt(a, s, R), sc(
          a,
          null,
          v.nodes,
          v.slots,
          s,
          w
        )), a.pendingRootTasks--, a.pendingRootTasks === 0 && _u(a);
      }
    } else {
      var k = a.trackedPostpones;
      if (v.status !== 4) {
        if (k !== null && w !== null)
          return Yt(a, s, R), Iu(a, k, l, w), v.fallbackAbortableTasks.forEach(function(D) {
            return fc(D, a, s);
          }), v.fallbackAbortableTasks.clear(), ol(a, v, l.row, w);
        v.status = 4, w = Yt(a, s, R), v.status = 4, v.errorDigest = w, Gc(a, v), v.parentFlushed && a.clientRenderedBoundaries.push(v);
      }
      v.pendingTasks--, w = v.row, w !== null && --w.pendingTasks === 0 && lr(a, w), v.fallbackAbortableTasks.forEach(function(D) {
        return fc(D, a, s);
      }), v.fallbackAbortableTasks.clear();
    }
    l = l.row, l !== null && --l.pendingTasks === 0 && lr(a, l), a.allPendingTasks--, a.allPendingTasks === 0 && Jc(a);
  }
  function Zc(l, a) {
    try {
      var s = l.renderState, v = s.onHeaders;
      if (v) {
        var w = s.headers;
        if (w) {
          s.headers = null;
          var R = w.preconnects;
          if (w.fontPreloads && (R && (R += ", "), R += w.fontPreloads), w.highImagePreloads && (R && (R += ", "), R += w.highImagePreloads), !a) {
            var k = s.styles.values(), D = k.next();
            e:
              for (; 0 < w.remainingCapacity && !D.done; D = k.next())
                for (var p = D.value.sheets.values(), L = p.next(); 0 < w.remainingCapacity && !L.done; L = p.next()) {
                  var U = L.value, X = U.props, se = X.href, ce = U.props, Ye = Hc(ce.href, "style", {
                    crossOrigin: ce.crossOrigin,
                    integrity: ce.integrity,
                    nonce: ce.nonce,
                    type: ce.type,
                    fetchPriority: ce.fetchPriority,
                    referrerPolicy: ce.referrerPolicy,
                    media: ce.media
                  });
                  if (0 <= (w.remainingCapacity -= Ye.length + 2))
                    s.resets.style[se] = bt, R && (R += ", "), R += Ye, s.resets.style[se] = typeof X.crossOrigin == "string" || typeof X.integrity == "string" ? [X.crossOrigin, X.integrity] : bt;
                  else
                    break e;
                }
          }
          v(R ? { Link: R } : {});
        }
      }
    } catch (Fe) {
      Yt(l, Fe, {});
    }
  }
  function _u(l) {
    l.trackedPostpones === null && Zc(l, !0), l.trackedPostpones === null && Al(l), l.onShellError = Q, l = l.onShellReady, l();
  }
  function Jc(l) {
    Zc(
      l,
      l.trackedPostpones === null ? !0 : l.completedRootSegment === null || l.completedRootSegment.status !== 5
    ), Al(l), l = l.onAllReady, l();
  }
  function Qc(l, a) {
    if (a.chunks.length === 0 && a.children.length === 1 && a.children[0].boundary === null && a.children[0].id === -1) {
      var s = a.children[0];
      s.id = a.id, s.parentFlushed = !0, s.status !== 1 && s.status !== 3 && s.status !== 4 || Qc(l, s);
    } else
      l.completedSegments.push(a);
  }
  function ta(l, a, s) {
    if (me !== null) {
      s = s.chunks;
      for (var v = 0, w = 0; w < s.length; w++)
        v += s[w].byteLength;
      a === null ? l.byteSize += v : a.byteSize += v;
    }
  }
  function ol(l, a, s, v) {
    if (s !== null && (--s.pendingTasks === 0 ? lr(l, s) : s.together && La(l, s)), l.allPendingTasks--, a === null) {
      if (v !== null && v.parentFlushed) {
        if (l.completedRootSegment !== null)
          throw Error(_(389));
        l.completedRootSegment = v;
      }
      l.pendingRootTasks--, l.pendingRootTasks === 0 && _u(l);
    } else if (a.pendingTasks--, a.status !== 4)
      if (a.pendingTasks === 0) {
        if (a.status === 0 && (a.status = 1), v !== null && v.parentFlushed && (v.status === 1 || v.status === 3) && Qc(a, v), a.parentFlushed && l.completedBoundaries.push(a), a.status === 1)
          s = a.row, s !== null && Ia(s.hoistables, a.contentState), ot(l, a) || (a.fallbackAbortableTasks.forEach(Xc, l), a.fallbackAbortableTasks.clear(), s !== null && --s.pendingTasks === 0 && lr(l, s)), l.pendingRootTasks === 0 && l.trackedPostpones === null && a.contentPreamble !== null && Al(l);
        else if (a.status === 5 && (a = a.row, a !== null)) {
          if (l.trackedPostpones !== null) {
            s = l.trackedPostpones;
            var w = a.next;
            if (w !== null && (v = w.boundaries, v !== null))
              for (w.boundaries = null, w = 0; w < v.length; w++) {
                var R = v[w];
                Au(l, s, R), ol(l, R, null, null);
              }
          }
          --a.pendingTasks === 0 && lr(l, a);
        }
      } else
        v === null || !v.parentFlushed || v.status !== 1 && v.status !== 3 || (Qc(a, v), a.completedSegments.length === 1 && a.parentFlushed && l.partialBoundaries.push(a)), a = a.row, a !== null && a.together && La(l, a);
    l.allPendingTasks === 0 && Jc(l);
  }
  function ts(l) {
    if (l.status !== 14 && l.status !== 13) {
      var a = Nn, s = Bi.H;
      Bi.H = ji;
      var v = Bi.A;
      Bi.A = lc;
      var w = Be;
      Be = l;
      var R = tr;
      tr = l.resumableState;
      try {
        var k = l.pingedTasks, D;
        for (D = 0; D < k.length; D++) {
          var p = k[D], L = l, U = p.blockedSegment;
          if (U === null) {
            var X = L;
            if (p.replay.pendingTasks !== 0) {
              g(p.context);
              try {
                if (typeof p.replay.slots == "number" ? Ba(
                  X,
                  p,
                  p.replay.slots,
                  p.node,
                  p.childIndex
                ) : cc(X, p), p.replay.pendingTasks === 1 && 0 < p.replay.nodes.length)
                  throw Error(_(488));
                p.replay.pendingTasks--, p.abortSet.delete(p), ol(
                  X,
                  p.blockedBoundary,
                  p.row,
                  null
                );
              } catch (or) {
                rl();
                var se = or === ae ? Pe() : or;
                if (typeof se == "object" && se !== null && typeof se.then == "function") {
                  var ce = p.ping;
                  se.then(ce, ce), p.thenableState = or === ae ? nr() : null;
                } else {
                  p.replay.pendingTasks--, p.abortSet.delete(p);
                  var Ye = al(p.componentStack);
                  L = void 0;
                  var Fe = X, Ge = p.blockedBoundary, Yn = X.status === 12 ? X.fatalError : se, Pn = p.replay.nodes, Gt = p.replay.slots;
                  L = Yt(
                    Fe,
                    Yn,
                    Ye
                  ), sc(
                    Fe,
                    Ge,
                    Pn,
                    Gt,
                    Yn,
                    L
                  ), X.pendingRootTasks--, X.pendingRootTasks === 0 && _u(X), X.allPendingTasks--, X.allPendingTasks === 0 && Jc(X);
                }
              } finally {
              }
            }
          } else if (X = void 0, Fe = U, Fe.status === 0) {
            Fe.status = 6, g(p.context);
            var Dr = Fe.children.length, ul = Fe.chunks.length;
            try {
              cc(L, p), Fe.lastPushedText && Fe.textEmbedded && Fe.chunks.push(Hl), p.abortSet.delete(p), Fe.status = 1, ta(L, p.blockedBoundary, Fe), ol(
                L,
                p.blockedBoundary,
                p.row,
                Fe
              );
            } catch (or) {
              rl(), Fe.children.length = Dr, Fe.chunks.length = ul;
              var pe = or === ae ? Pe() : L.status === 12 ? L.fatalError : or;
              if (L.status === 12 && L.trackedPostpones !== null) {
                var ar = L.trackedPostpones, $n = al(p.componentStack);
                p.abortSet.delete(p), Yt(L, pe, $n), Iu(L, ar, p, Fe), ol(
                  L,
                  p.blockedBoundary,
                  p.row,
                  Fe
                );
              } else if (typeof pe == "object" && pe !== null && typeof pe.then == "function") {
                Fe.status = 0, p.thenableState = or === ae ? nr() : null;
                var Fr = p.ping;
                pe.then(Fr, Fr);
              } else {
                var Pi = al(p.componentStack);
                p.abortSet.delete(p), Fe.status = 4;
                var Gn = p.blockedBoundary, Na = p.row;
                if (Na !== null && --Na.pendingTasks === 0 && lr(L, Na), L.allPendingTasks--, X = Yt(
                  L,
                  pe,
                  Pi
                ), Gn === null)
                  wo(L, pe);
                else if (Gn.pendingTasks--, Gn.status !== 4) {
                  Gn.status = 4, Gn.errorDigest = X, Gc(L, Gn);
                  var sl = Gn.row;
                  sl !== null && --sl.pendingTasks === 0 && lr(L, sl), Gn.parentFlushed && L.clientRenderedBoundaries.push(Gn), L.pendingRootTasks === 0 && L.trackedPostpones === null && Gn.contentPreamble !== null && Al(L);
                }
                L.allPendingTasks === 0 && Jc(L);
              }
            } finally {
            }
          }
        }
        k.splice(0, D), l.destination !== null && xo(l, l.destination);
      } catch (or) {
        Yt(l, or, {}), wo(l, or);
      } finally {
        tr = R, Bi.H = s, Bi.A = v, s === ji && g(a), Be = w;
      }
    }
  }
  function Ha(l, a, s) {
    a.preambleChildren.length && s.push(a.preambleChildren);
    for (var v = !1, w = 0; w < a.children.length; w++)
      v = hc(
        l,
        a.children[w],
        s
      ) || v;
    return v;
  }
  function hc(l, a, s) {
    var v = a.boundary;
    if (v === null)
      return Ha(
        l,
        a,
        s
      );
    var w = v.contentPreamble, R = v.fallbackPreamble;
    if (w === null || R === null)
      return !1;
    switch (v.status) {
      case 1:
        if (Jo(l.renderState, w), l.byteSize += v.byteSize, a = v.completedSegments[0], !a)
          throw Error(_(391));
        return Ha(
          l,
          a,
          s
        );
      case 5:
        if (l.trackedPostpones !== null)
          return !0;
      case 4:
        if (a.status === 1)
          return Jo(l.renderState, R), Ha(
            l,
            a,
            s
          );
      default:
        return !0;
    }
  }
  function Al(l) {
    if (l.completedRootSegment && l.completedPreambleSegments === null) {
      var a = [], s = l.byteSize, v = hc(
        l,
        l.completedRootSegment,
        a
      ), w = l.renderState.preamble;
      v === !1 || w.headChunks && w.bodyChunks ? l.completedPreambleSegments = a : l.byteSize = s;
    }
  }
  function To(l, a, s, v) {
    switch (s.parentFlushed = !0, s.status) {
      case 0:
        s.id = l.nextSegmentId++;
      case 5:
        return v = s.id, s.lastPushedText = !1, s.textEmbedded = !1, l = l.renderState, J(a, wu), J(a, l.placeholderPrefix), l = ie(v.toString(16)), J(a, l), ue(a, Qo);
      case 1:
        s.status = 2;
        var w = !0, R = s.chunks, k = 0;
        s = s.children;
        for (var D = 0; D < s.length; D++) {
          for (w = s[D]; k < w.index; k++)
            J(a, R[k]);
          w = dc(l, a, w, v);
        }
        for (; k < R.length - 1; k++)
          J(a, R[k]);
        return k < R.length && (w = ue(a, R[k])), w;
      case 3:
        return !0;
      default:
        throw Error(_(390));
    }
  }
  var ra = 0;
  function dc(l, a, s, v) {
    var w = s.boundary;
    if (w === null)
      return To(l, a, s, v);
    if (w.parentFlushed = !0, w.status === 4) {
      var R = w.row;
      R !== null && --R.pendingTasks === 0 && lr(l, R), w = w.errorDigest, ue(a, Ct), J(a, Tu), w && (J(a, Cl), J(a, ie(Ae(w))), J(
        a,
        fi
      )), ue(a, xu), To(l, a, s, v);
    } else if (w.status !== 1)
      w.status === 0 && (w.rootSegmentID = l.nextSegmentId++), 0 < w.completedSegments.length && l.partialBoundaries.push(w), hi(
        a,
        l.renderState,
        w.rootSegmentID
      ), v && Ia(v, w.fallbackState), To(l, a, s, v);
    else if (!Il && ot(l, w) && (ra + w.byteSize > l.progressiveChunkSize || ho(w.contentState)))
      w.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(w), hi(
        a,
        l.renderState,
        w.rootSegmentID
      ), To(l, a, s, v);
    else {
      if (ra += w.byteSize, v && Ia(v, w.contentState), s = w.row, s !== null && ot(l, w) && --s.pendingTasks === 0 && lr(l, s), ue(a, mi), s = w.completedSegments, s.length !== 1)
        throw Error(_(391));
      dc(l, a, s[0], v);
    }
    return ue(a, kn);
  }
  function la(l, a, s, v) {
    return ka(
      a,
      l.renderState,
      s.parentFormatContext,
      s.id
    ), dc(l, a, s, v), Sl(a, s.parentFormatContext);
  }
  function rs(l, a, s) {
    ra = s.byteSize;
    for (var v = s.completedSegments, w = 0; w < v.length; w++)
      ls(
        l,
        a,
        s,
        v[w]
      );
    v.length = 0, v = s.row, v !== null && ot(l, s) && --v.pendingTasks === 0 && lr(l, v), Kr(
      a,
      s.contentState,
      l.renderState
    ), v = l.resumableState, l = l.renderState, w = s.rootSegmentID, s = s.contentState;
    var R = l.stylesToHoist;
    return l.stylesToHoist = !1, J(a, l.startInlineScript), J(a, qe), R ? (!(v.instructions & 4) && (v.instructions |= 4, J(a, Xi)), !(v.instructions & 2) && (v.instructions |= 2, J(a, uo)), v.instructions & 8 ? J(a, ju) : (v.instructions |= 8, J(a, kt))) : (!(v.instructions & 2) && (v.instructions |= 2, J(a, uo)), J(a, so)), v = ie(w.toString(16)), J(a, l.boundaryPrefix), J(a, v), J(a, Gi), J(a, l.segmentPrefix), J(a, v), R ? (J(a, Ko), _t(a, s)) : J(a, _c), s = ue(a, wi), Er(a, l) && s;
  }
  function ls(l, a, s, v) {
    if (v.status === 2)
      return !0;
    var w = s.contentState, R = v.id;
    if (R === -1) {
      if ((v.id = s.rootSegmentID) === -1)
        throw Error(_(392));
      return la(l, a, v, w);
    }
    return R === s.rootSegmentID ? la(l, a, v, w) : (la(l, a, v, w), s = l.resumableState, l = l.renderState, J(a, l.startInlineScript), J(a, qe), s.instructions & 1 ? J(a, Ru) : (s.instructions |= 1, J(a, Eu)), J(a, l.segmentPrefix), R = ie(R.toString(16)), J(a, R), J(a, Cu), J(a, l.placeholderPrefix), J(a, R), a = ue(a, co), a);
  }
  var Il = !1;
  function xo(l, a) {
    Mt = new Uint8Array(2048), ge = 0;
    try {
      if (!(0 < l.pendingRootTasks)) {
        var s, v = l.completedRootSegment;
        if (v !== null) {
          if (v.status === 5)
            return;
          var w = l.completedPreambleSegments;
          if (w === null)
            return;
          ra = l.byteSize;
          var R = l.resumableState, k = l.renderState, D = k.preamble, p = D.htmlChunks, L = D.headChunks, U;
          if (p) {
            for (U = 0; U < p.length; U++)
              J(a, p[U]);
            if (L)
              for (U = 0; U < L.length; U++)
                J(a, L[U]);
            else
              J(a, yt("head")), J(a, qe);
          } else if (L)
            for (U = 0; U < L.length; U++)
              J(a, L[U]);
          var X = k.charsetChunks;
          for (U = 0; U < X.length; U++)
            J(a, X[U]);
          X.length = 0, k.preconnects.forEach(Mn, a), k.preconnects.clear();
          var se = k.viewportChunks;
          for (U = 0; U < se.length; U++)
            J(a, se[U]);
          se.length = 0, k.fontPreloads.forEach(Mn, a), k.fontPreloads.clear(), k.highImagePreloads.forEach(Mn, a), k.highImagePreloads.clear(), xl = k, k.styles.forEach(nc, a), xl = null;
          var ce = k.importMapChunks;
          for (U = 0; U < ce.length; U++)
            J(a, ce[U]);
          ce.length = 0, k.bootstrapScripts.forEach(Mn, a), k.scripts.forEach(Mn, a), k.scripts.clear(), k.bulkPreloads.forEach(Mn, a), k.bulkPreloads.clear(), p || L || (R.instructions |= 32);
          var Ye = k.hoistableChunks;
          for (U = 0; U < Ye.length; U++)
            J(a, Ye[U]);
          for (R = Ye.length = 0; R < w.length; R++) {
            var Fe = w[R];
            for (k = 0; k < Fe.length; k++)
              dc(l, a, Fe[k], null);
          }
          var Ge = l.renderState.preamble, Yn = Ge.headChunks;
          (Ge.htmlChunks || Yn) && J(a, Ul("head"));
          var Pn = Ge.bodyChunks;
          if (Pn)
            for (w = 0; w < Pn.length; w++)
              J(a, Pn[w]);
          dc(l, a, v, null), l.completedRootSegment = null;
          var Gt = l.renderState;
          if (l.allPendingTasks !== 0 || l.clientRenderedBoundaries.length !== 0 || l.completedBoundaries.length !== 0 || l.trackedPostpones !== null && (l.trackedPostpones.rootNodes.length !== 0 || l.trackedPostpones.rootSlots !== null)) {
            var Dr = l.resumableState;
            if (!(Dr.instructions & 64)) {
              if (Dr.instructions |= 64, J(a, Gt.startInlineScript), !(Dr.instructions & 32)) {
                Dr.instructions |= 32;
                var ul = "_" + Dr.idPrefix + "R_";
                J(a, je), J(
                  a,
                  ie(Ae(ul))
                ), J(a, yn);
              }
              J(a, qe), J(a, Rl), ue(a, Ve);
            }
          }
          Er(a, Gt);
        }
        var pe = l.renderState;
        v = 0;
        var ar = pe.viewportChunks;
        for (v = 0; v < ar.length; v++)
          J(a, ar[v]);
        ar.length = 0, pe.preconnects.forEach(Mn, a), pe.preconnects.clear(), pe.fontPreloads.forEach(Mn, a), pe.fontPreloads.clear(), pe.highImagePreloads.forEach(
          Mn,
          a
        ), pe.highImagePreloads.clear(), pe.styles.forEach(On, a), pe.scripts.forEach(Mn, a), pe.scripts.clear(), pe.bulkPreloads.forEach(Mn, a), pe.bulkPreloads.clear();
        var $n = pe.hoistableChunks;
        for (v = 0; v < $n.length; v++)
          J(a, $n[v]);
        $n.length = 0;
        var Fr = l.clientRenderedBoundaries;
        for (s = 0; s < Fr.length; s++) {
          var Pi = Fr[s];
          pe = a;
          var Gn = l.resumableState, Na = l.renderState, sl = Pi.rootSegmentID, or = Pi.errorDigest;
          J(
            pe,
            Na.startInlineScript
          ), J(pe, qe), Gn.instructions & 4 ? J(pe, Pl) : (Gn.instructions |= 4, J(pe, fo)), J(pe, Na.boundaryPrefix), J(pe, ie(sl.toString(16))), J(pe, Zi), or && (J(
            pe,
            Ji
          ), J(
            pe,
            ie(
              Sa(or || "")
            )
          ));
          var Ml = ue(
            pe,
            ku
          );
          if (!Ml) {
            l.destination = null, s++, Fr.splice(0, s);
            return;
          }
        }
        Fr.splice(0, s);
        var cr = l.completedBoundaries;
        for (s = 0; s < cr.length; s++)
          if (!rs(l, a, cr[s])) {
            l.destination = null, s++, cr.splice(0, s);
            return;
          }
        cr.splice(0, s), zl(a), Mt = new Uint8Array(2048), ge = 0, Il = !0;
        var ma = l.partialBoundaries;
        for (s = 0; s < ma.length; s++) {
          var Ro = ma[s];
          e: {
            Fr = l, Pi = a, ra = Ro.byteSize;
            var pr = Ro.completedSegments;
            for (Ml = 0; Ml < pr.length; Ml++)
              if (!ls(
                Fr,
                Pi,
                Ro,
                pr[Ml]
              )) {
                Ml++, pr.splice(0, Ml);
                var Co = !1;
                break e;
              }
            pr.splice(0, Ml);
            var ur = Ro.row;
            ur !== null && ur.together && Ro.pendingTasks === 1 && (ur.pendingTasks === 1 ? pu(
              Fr,
              ur,
              ur.hoistables
            ) : ur.pendingTasks--), Co = Kr(
              Pi,
              Ro.contentState,
              Fr.renderState
            );
          }
          if (!Co) {
            l.destination = null, s++, ma.splice(0, s);
            return;
          }
        }
        ma.splice(0, s), Il = !1;
        var Ua = l.completedBoundaries;
        for (s = 0; s < Ua.length; s++)
          if (!rs(l, a, Ua[s])) {
            l.destination = null, s++, Ua.splice(0, s);
            return;
          }
        Ua.splice(0, s);
      }
    } finally {
      Il = !1, l.allPendingTasks === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 ? (l.flushScheduled = !1, s = l.resumableState, s.hasBody && J(a, Ul("body")), s.hasHtml && J(a, Ul("html")), zl(a), l.status = 14, a.close(), l.destination = null) : zl(a);
    }
  }
  function $r(l) {
    l.flushScheduled = l.destination !== null, Li(function() {
      return ts(l);
    }), et(function() {
      l.status === 10 && (l.status = 11), l.trackedPostpones === null && Zc(l, l.pendingRootTasks === 0);
    });
  }
  function ia(l) {
    l.flushScheduled === !1 && l.pingedTasks.length === 0 && l.destination !== null && (l.flushScheduled = !0, et(function() {
      var a = l.destination;
      a ? xo(l, a) : l.flushScheduled = !1;
    }));
  }
  function Wa(l, a) {
    if (l.status === 13)
      l.status = 14, Wt(a, l.fatalError);
    else if (l.status !== 14 && l.destination === null) {
      l.destination = a;
      try {
        xo(l, a);
      } catch (s) {
        Yt(l, s, {}), wo(l, s);
      }
    }
  }
  function cl(l, a) {
    (l.status === 11 || l.status === 10) && (l.status = 12);
    try {
      var s = l.abortableTasks;
      if (0 < s.size) {
        var v = a === void 0 ? Error(_(432)) : typeof a == "object" && a !== null && typeof a.then == "function" ? Error(_(530)) : a;
        l.fatalError = v, s.forEach(function(w) {
          return fc(w, l, v);
        }), s.clear();
      }
      l.destination !== null && xo(l, l.destination);
    } catch (w) {
      Yt(l, w, {}), wo(l, w);
    }
  }
  function Du(l, a, s) {
    if (a === null)
      s.rootNodes.push(l);
    else {
      var v = s.workingMap, w = v.get(a);
      w === void 0 && (w = [a[1], a[2], [], null], v.set(a, w), Du(w, a[0], s)), w[2].push(l);
    }
  }
  function is(l) {
    var a = l.trackedPostpones;
    if (a === null || a.rootNodes.length === 0 && a.rootSlots === null)
      return l.trackedPostpones = null;
    if (l.completedRootSegment === null || l.completedRootSegment.status !== 5 && l.completedPreambleSegments !== null) {
      var s = l.nextSegmentId, v = a.rootSlots, w = l.resumableState;
      w.bootstrapScriptContent = void 0, w.bootstrapScripts = void 0, w.bootstrapModules = void 0;
    } else {
      s = 0, v = -1, w = l.resumableState;
      var R = l.renderState;
      w.nextFormID = 0, w.hasBody = !1, w.hasHtml = !1, w.unknownResources = { font: R.resets.font }, w.dnsResources = R.resets.dns, w.connectResources = R.resets.connect, w.imageResources = R.resets.image, w.styleResources = R.resets.style, w.scriptResources = {}, w.moduleUnknownResources = {}, w.moduleScriptResources = {}, w.instructions = 0;
    }
    return {
      nextSegmentId: s,
      rootFormatContext: l.rootFormatContext,
      progressiveChunkSize: l.progressiveChunkSize,
      resumableState: l.resumableState,
      replayNodes: a.rootNodes,
      replaySlots: v
    };
  }
  function Eo() {
    var l = he.version;
    if (l !== "19.2.4")
      throw Error(
        _(
          527,
          l,
          "19.2.4"
        )
      );
  }
  return Eo(), Eo(), Ds.prerender = function(l, a) {
    return new Promise(function(s, v) {
      var w = a ? a.onHeaders : void 0, R;
      w && (R = function(U) {
        w(new Headers(U));
      });
      var k = Wo(
        a ? a.identifierPrefix : void 0,
        a ? a.unstable_externalRuntimeSrc : void 0,
        a ? a.bootstrapScriptContent : void 0,
        a ? a.bootstrapScripts : void 0,
        a ? a.bootstrapModules : void 0
      ), D = _a(
        l,
        k,
        va(
          k,
          void 0,
          a ? a.unstable_externalRuntimeSrc : void 0,
          a ? a.importMap : void 0,
          R,
          a ? a.maxHeadersLength : void 0
        ),
        Fc(a ? a.namespaceURI : void 0),
        a ? a.progressiveChunkSize : void 0,
        a ? a.onError : void 0,
        function() {
          var U = new ReadableStream(
            {
              type: "bytes",
              pull: function(X) {
                Wa(D, X);
              },
              cancel: function(X) {
                D.destination = null, cl(D, X);
              }
            },
            { highWaterMark: 0 }
          );
          U = { postponed: is(D), prelude: U }, s(U);
        },
        void 0,
        void 0,
        v,
        a ? a.onPostpone : void 0
      );
      if (a && a.signal) {
        var p = a.signal;
        if (p.aborted)
          cl(D, p.reason);
        else {
          var L = function() {
            cl(D, p.reason), p.removeEventListener("abort", L);
          };
          p.addEventListener("abort", L);
        }
      }
      $r(D);
    });
  }, Ds.renderToReadableStream = function(l, a) {
    return new Promise(function(s, v) {
      var w, R, k = new Promise(function(ce, Ye) {
        R = ce, w = Ye;
      }), D = a ? a.onHeaders : void 0, p;
      D && (p = function(ce) {
        D(new Headers(ce));
      });
      var L = Wo(
        a ? a.identifierPrefix : void 0,
        a ? a.unstable_externalRuntimeSrc : void 0,
        a ? a.bootstrapScriptContent : void 0,
        a ? a.bootstrapScripts : void 0,
        a ? a.bootstrapModules : void 0
      ), U = bo(
        l,
        L,
        va(
          L,
          a ? a.nonce : void 0,
          a ? a.unstable_externalRuntimeSrc : void 0,
          a ? a.importMap : void 0,
          p,
          a ? a.maxHeadersLength : void 0
        ),
        Fc(a ? a.namespaceURI : void 0),
        a ? a.progressiveChunkSize : void 0,
        a ? a.onError : void 0,
        R,
        function() {
          var ce = new ReadableStream(
            {
              type: "bytes",
              pull: function(Ye) {
                Wa(U, Ye);
              },
              cancel: function(Ye) {
                U.destination = null, cl(U, Ye);
              }
            },
            { highWaterMark: 0 }
          );
          ce.allReady = k, s(ce);
        },
        function(ce) {
          k.catch(function() {
          }), v(ce);
        },
        w,
        a ? a.onPostpone : void 0,
        a ? a.formState : void 0
      );
      if (a && a.signal) {
        var X = a.signal;
        if (X.aborted)
          cl(U, X.reason);
        else {
          var se = function() {
            cl(U, X.reason), X.removeEventListener("abort", se);
          };
          X.addEventListener("abort", se);
        }
      }
      $r(U);
    });
  }, Ds.resume = function(l, a, s) {
    return new Promise(function(v, w) {
      var R, k, D = new Promise(function(X, se) {
        k = X, R = se;
      }), p = jn(
        l,
        a,
        va(
          a.resumableState,
          s ? s.nonce : void 0,
          void 0,
          void 0,
          void 0,
          void 0
        ),
        s ? s.onError : void 0,
        k,
        function() {
          var X = new ReadableStream(
            {
              type: "bytes",
              pull: function(se) {
                Wa(p, se);
              },
              cancel: function(se) {
                p.destination = null, cl(p, se);
              }
            },
            { highWaterMark: 0 }
          );
          X.allReady = D, v(X);
        },
        function(X) {
          D.catch(function() {
          }), w(X);
        },
        R,
        s ? s.onPostpone : void 0
      );
      if (s && s.signal) {
        var L = s.signal;
        if (L.aborted)
          cl(p, L.reason);
        else {
          var U = function() {
            cl(p, L.reason), L.removeEventListener("abort", U);
          };
          L.addEventListener("abort", U);
        }
      }
      $r(p);
    });
  }, Ds.resumeAndPrerender = function(l, a, s) {
    return new Promise(function(v, w) {
      var R = jr(
        l,
        a,
        va(
          a.resumableState,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0
        ),
        s ? s.onError : void 0,
        function() {
          var p = new ReadableStream(
            {
              type: "bytes",
              pull: function(L) {
                Wa(R, L);
              },
              cancel: function(L) {
                R.destination = null, cl(R, L);
              }
            },
            { highWaterMark: 0 }
          );
          p = { postponed: is(R), prelude: p }, v(p);
        },
        void 0,
        void 0,
        w,
        s ? s.onPostpone : void 0
      );
      if (s && s.signal) {
        var k = s.signal;
        if (k.aborted)
          cl(R, k.reason);
        else {
          var D = function() {
            cl(R, k.reason), k.removeEventListener("abort", D);
          };
          k.addEventListener("abort", D);
        }
      }
      $r(R);
    });
  }, Ds.version = "19.2.4", Ds;
}
var Ks = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Of;
function Jf() {
  return Of || (Of = 1, process.env.NODE_ENV !== "production" && function() {
    function he(t, r, u, d) {
      return "" + r + (u === "s" ? "\\73 " : "\\53 ") + d;
    }
    function re(t, r, u, d) {
      return "" + r + (u === "s" ? "\\u0073" : "\\u0053") + d;
    }
    function _(t) {
      return t === null || typeof t != "object" ? null : (t = $o && t[$o] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function xe(t) {
      return t = Object.prototype.toString.call(t), t.slice(8, t.length - 1);
    }
    function pn(t) {
      var r = JSON.stringify(t);
      return '"' + t + '"' === r ? t : r;
    }
    function gt(t) {
      switch (typeof t) {
        case "string":
          return JSON.stringify(
            10 >= t.length ? t : t.slice(0, 10) + "..."
          );
        case "object":
          return Ti(t) ? "[...]" : t !== null && t.$$typeof === Sr ? "client" : (t = xe(t), t === "Object" ? "{...}" : t);
        case "function":
          return t.$$typeof === Sr ? "client" : (t = t.displayName || t.name) ? "function " + t : "function";
        default:
          return String(t);
      }
    }
    function Hn(t) {
      if (typeof t == "string")
        return t;
      switch (t) {
        case _r:
          return "Suspense";
        case Vr:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Qr:
            return Hn(t.render);
          case wn:
            return Hn(t.type);
          case Kr:
            var r = t._payload;
            t = t._init;
            try {
              return Hn(t(r));
            } catch {
            }
        }
      return "";
    }
    function vn(t, r) {
      var u = xe(t);
      if (u !== "Object" && u !== "Array")
        return u;
      var d = -1, y = 0;
      if (Ti(t))
        if (nc.has(t)) {
          var E = nc.get(t);
          u = "<" + Hn(E) + ">";
          for (var F = 0; F < t.length; F++) {
            var M = t[F];
            M = typeof M == "string" ? M : typeof M == "object" && M !== null ? "{" + vn(M) + "}" : "{" + gt(M) + "}", "" + F === r ? (d = u.length, y = M.length, u += M) : u = 15 > M.length && 40 > u.length + M.length ? u + M : u + "{...}";
          }
          u += "</" + Hn(E) + ">";
        } else {
          for (u = "[", E = 0; E < t.length; E++)
            0 < E && (u += ", "), F = t[E], F = typeof F == "object" && F !== null ? vn(F) : gt(F), "" + E === r ? (d = u.length, y = F.length, u += F) : u = 10 > F.length && 40 > u.length + F.length ? u + F : u + "...";
          u += "]";
        }
      else if (t.$$typeof === Sa)
        u = "<" + Hn(t.type) + "/>";
      else {
        if (t.$$typeof === Sr)
          return "client";
        if (ec.has(t)) {
          for (u = ec.get(t), u = "<" + (Hn(u) || "..."), E = Object.keys(t), F = 0; F < E.length; F++) {
            u += " ", M = E[F], u += pn(M) + "=";
            var V = t[M], z = M === r && typeof V == "object" && V !== null ? vn(V) : gt(V);
            typeof V != "string" && (z = "{" + z + "}"), M === r ? (d = u.length, y = z.length, u += z) : u = 10 > z.length && 40 > u.length + z.length ? u + z : u + "...";
          }
          u += ">";
        } else {
          for (u = "{", E = Object.keys(t), F = 0; F < E.length; F++)
            0 < F && (u += ", "), M = E[F], u += pn(M) + ": ", V = t[M], V = typeof V == "object" && V !== null ? vn(V) : gt(V), M === r ? (d = u.length, y = V.length, u += V) : u = 10 > V.length && 40 > u.length + V.length ? u + V : u + "...";
          u += "}";
        }
      }
      return r === void 0 ? u : -1 < d && 0 < y ? (t = " ".repeat(d) + "^".repeat(y), `
  ` + u + `
  ` + t) : `
  ` + u;
    }
    function Kt(t, r) {
      var u = t.length & 3, d = t.length - u, y = r;
      for (r = 0; r < d; ) {
        var E = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24;
        ++r, E = 3432918353 * (E & 65535) + ((3432918353 * (E >>> 16) & 65535) << 16) & 4294967295, E = E << 15 | E >>> 17, E = 461845907 * (E & 65535) + ((461845907 * (E >>> 16) & 65535) << 16) & 4294967295, y ^= E, y = y << 13 | y >>> 19, y = 5 * (y & 65535) + ((5 * (y >>> 16) & 65535) << 16) & 4294967295, y = (y & 65535) + 27492 + (((y >>> 16) + 58964 & 65535) << 16);
      }
      switch (E = 0, u) {
        case 3:
          E ^= (t.charCodeAt(r + 2) & 255) << 16;
        case 2:
          E ^= (t.charCodeAt(r + 1) & 255) << 8;
        case 1:
          E ^= t.charCodeAt(r) & 255, E = 3432918353 * (E & 65535) + ((3432918353 * (E >>> 16) & 65535) << 16) & 4294967295, E = E << 15 | E >>> 17, y ^= 461845907 * (E & 65535) + ((461845907 * (E >>> 16) & 65535) << 16) & 4294967295;
      }
      return y ^= t.length, y ^= y >>> 16, y = 2246822507 * (y & 65535) + ((2246822507 * (y >>> 16) & 65535) << 16) & 4294967295, y ^= y >>> 13, y = 3266489909 * (y & 65535) + ((3266489909 * (y >>> 16) & 65535) << 16) & 4294967295, (y ^ y >>> 16) >>> 0;
    }
    function ve(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Ht(t) {
      try {
        return W(t), !1;
      } catch {
        return !0;
      }
    }
    function W(t) {
      return "" + t;
    }
    function Ce(t, r) {
      if (Ht(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          ve(t)
        ), W(t);
    }
    function Et(t, r) {
      if (Ht(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          ve(t)
        ), W(t);
    }
    function $(t) {
      if (Ht(t))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          ve(t)
        ), W(t);
    }
    function N(t) {
      return je.call(Fa, t) ? !0 : je.call(Pa, t) ? !1 : Qi.test(t) ? Fa[t] = !0 : (Pa[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function _i(t, r) {
      _t[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), r.onChange || r.readOnly || r.disabled || r.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function ha(t, r) {
      if (je.call(pl, r) && pl[r])
        return !0;
      if (Pu.test(r)) {
        if (t = "aria-" + r.slice(4).toLowerCase(), t = bs.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            r
          ), pl[r] = !0;
        if (r !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            r,
            t
          ), pl[r] = !0;
      }
      if ($u.test(r)) {
        if (t = r.toLowerCase(), t = bs.hasOwnProperty(t) ? t : null, t == null)
          return pl[r] = !0, !1;
        r !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          r,
          t
        ), pl[r] = !0);
      }
      return !0;
    }
    function ci(t, r) {
      var u = [], d;
      for (d in r)
        ha(t, d) || u.push(d);
      r = u.map(function(y) {
        return "`" + y + "`";
      }).join(", "), u.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        t
      ) : 1 < u.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        t
      );
    }
    function Di(t, r, u, d) {
      if (je.call(St, r) && St[r])
        return !0;
      var y = r.toLowerCase();
      if (y === "onfocusin" || y === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), St[r] = !0;
      if (typeof u == "function" && (t === "form" && r === "action" || t === "input" && r === "formAction" || t === "button" && r === "formAction"))
        return !0;
      if (d != null) {
        if (t = d.possibleRegistrationNames, d.registrationNameDependencies.hasOwnProperty(r))
          return !0;
        if (d = t.hasOwnProperty(y) ? t[y] : null, d != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            r,
            d
          ), St[r] = !0;
        if (Ql.test(r))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            r
          ), St[r] = !0;
      } else if (Ql.test(r))
        return es.test(r) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          r
        ), St[r] = !0;
      if (pa.test(r) || Hc.test(r))
        return !0;
      if (y === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), St[r] = !0;
      if (y === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), St[r] = !0;
      if (y === "is" && u !== null && u !== void 0 && typeof u != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof u
        ), St[r] = !0;
      if (typeof u == "number" && isNaN(u))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          r
        ), St[r] = !0;
      if (tc.hasOwnProperty(y)) {
        if (y = tc[y], y !== r)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            r,
            y
          ), St[r] = !0;
      } else if (r !== y)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          r,
          y
        ), St[r] = !0;
      switch (r) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof u) {
        case "boolean":
          switch (r) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return y = r.toLowerCase().slice(0, 5), y === "data-" || y === "aria-" ? !0 : (u ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                u,
                r,
                r,
                u,
                r
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                u,
                r,
                r,
                u,
                r,
                r,
                r
              ), St[r] = !0);
          }
        case "function":
        case "symbol":
          return St[r] = !0, !1;
        case "string":
          if (u === "false" || u === "true") {
            switch (r) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              u,
              r,
              u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              r,
              u
            ), St[r] = !0;
          }
      }
      return !0;
    }
    function ui(t, r, u) {
      var d = [], y;
      for (y in r)
        Di(t, y, r[y], u) || d.push(y);
      r = d.map(function(E) {
        return "`" + E + "`";
      }).join(", "), d.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        t
      ) : 1 < d.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        t
      );
    }
    function It(t) {
      return t.replace(Dt, function(r, u) {
        return u.toUpperCase();
      });
    }
    function Ee(t) {
      if (typeof t == "boolean" || typeof t == "number" || typeof t == "bigint")
        return "" + t;
      $(t), t = "" + t;
      var r = Wc.exec(t);
      if (r) {
        var u = "", d, y = 0;
        for (d = r.index; d < t.length; d++) {
          switch (t.charCodeAt(d)) {
            case 34:
              r = "&quot;";
              break;
            case 38:
              r = "&amp;";
              break;
            case 39:
              r = "&#x27;";
              break;
            case 60:
              r = "&lt;";
              break;
            case 62:
              r = "&gt;";
              break;
            default:
              continue;
          }
          y !== d && (u += t.slice(y, d)), y = d + 1, u += r;
        }
        t = y !== d ? u + t.slice(y, d) : u;
      }
      return t;
    }
    function yr(t) {
      return ys.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function vt(t) {
      return $(t), ("" + t).replace(ae, re);
    }
    function bn(t, r, u, d, y) {
      return {
        idPrefix: t === void 0 ? "" : t,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: u,
        bootstrapScripts: d,
        bootstrapModules: y,
        instructions: o,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function et(t, r, u, d) {
      return {
        insertionMode: t,
        selectedValue: r,
        tagScope: u,
        viewTransition: d
      };
    }
    function zo(t, r, u) {
      var d = t.tagScope & -25;
      switch (r) {
        case "noscript":
          return et(Te, null, d | 1, null);
        case "select":
          return et(
            Te,
            u.value != null ? u.value : u.defaultValue,
            d,
            null
          );
        case "svg":
          return et(Se, null, d, null);
        case "picture":
          return et(Te, null, d | 2, null);
        case "math":
          return et(_n, null, d, null);
        case "foreignObject":
          return et(Te, null, d, null);
        case "table":
          return et(ze, null, d, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return et(
            Xe,
            null,
            d,
            null
          );
        case "colgroup":
          return et(
            _e,
            null,
            d,
            null
          );
        case "tr":
          return et(
            ln,
            null,
            d,
            null
          );
        case "head":
          if (t.insertionMode < Te)
            return et(
              Ie,
              null,
              d,
              null
            );
          break;
        case "html":
          if (t.insertionMode === Le)
            return et(
              Pe,
              null,
              d,
              null
            );
      }
      return t.insertionMode >= ze || t.insertionMode < Te ? et(Te, null, d, null) : t.tagScope !== d ? et(
        t.insertionMode,
        t.selectedValue,
        d,
        null
      ) : t;
    }
    function Bo(t) {
      return t === null ? null : {
        update: t.update,
        enter: "none",
        exit: "none",
        share: t.update,
        name: t.autoName,
        autoName: t.autoName,
        nameIdx: 0
      };
    }
    function Li(t, r) {
      return r.tagScope & 32 && (t.instructions |= 128), et(
        r.insertionMode,
        r.selectedValue,
        r.tagScope | 12,
        Bo(r.viewTransition)
      );
    }
    function Mt(t, r) {
      t = Bo(r.viewTransition);
      var u = r.tagScope | 16;
      return t !== null && t.share !== "none" && (u |= 64), et(
        r.insertionMode,
        r.selectedValue,
        u,
        t
      );
    }
    function ge(t, r) {
      if (typeof r != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var u = !0, d;
      for (d in r)
        if (je.call(r, d)) {
          var y = r[d];
          if (y != null && typeof y != "boolean" && y !== "") {
            if (d.indexOf("--") === 0) {
              var E = Ee(d);
              Et(y, d), y = Ee(("" + y).trim());
            } else {
              E = d;
              var F = y;
              if (-1 < E.indexOf("-")) {
                var M = E;
                Sn.hasOwnProperty(M) && Sn[M] || (Sn[M] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  M,
                  It(M.replace(Ut, "ms-"))
                ));
              } else if (Aa.test(E))
                M = E, Sn.hasOwnProperty(M) && Sn[M] || (Sn[M] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  M,
                  M.charAt(0).toUpperCase() + M.slice(1)
                ));
              else if (Ki.test(F)) {
                M = E;
                var V = F;
                fn.hasOwnProperty(V) && fn[V] || (fn[V] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  M,
                  V.replace(
                    Ki,
                    ""
                  )
                ));
              }
              typeof F == "number" && (isNaN(F) ? Ia || (Ia = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                E
              )) : isFinite(F) || ho || (ho = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                E
              ))), E = d, F = mn.get(E), F !== void 0 || (F = Ee(
                E.replace(go, "-$1").toLowerCase().replace(Fu, "-ms-")
              ), mn.set(E, F)), E = F, typeof y == "number" ? y = y === 0 || Vi.has(d) ? "" + y : y + "px" : (Et(y, d), y = Ee(
                ("" + y).trim()
              ));
            }
            u ? (u = !1, t.push(
              $e,
              E,
              er,
              y
            )) : t.push(cn, E, er, y);
          }
        }
      u || t.push(Me);
    }
    function J(t, r, u) {
      u && typeof u != "function" && typeof u != "symbol" && t.push(Je, r, nn);
    }
    function ue(t, r, u) {
      typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && t.push(
        Je,
        r,
        en,
        Ee(u),
        Me
      );
    }
    function zl(t, r) {
      this.push('<input type="hidden"'), zi(t), ue(this, "name", r), ue(this, "value", t), this.push(qi);
    }
    function zi(t) {
      if (typeof t != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function ie(t, r) {
      if (typeof r.$$FORM_ACTION == "function") {
        var u = t.nextFormID++;
        t = t.idPrefix + u;
        try {
          var d = r.$$FORM_ACTION(t);
          if (d) {
            var y = d.data;
            y != null && y.forEach(zi);
          }
          return d;
        } catch (E) {
          if (typeof E == "object" && E !== null && typeof E.then == "function")
            throw E;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            E
          );
        }
      }
      return null;
    }
    function m(t, r, u, d, y, E, F, M) {
      var V = null;
      if (typeof d == "function") {
        M === null || Ma || (Ma = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), y === null && E === null || rc || (rc = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), F === null || Oa || (Oa = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var z = ie(r, d);
        z !== null ? (M = z.name, d = z.action || "", y = z.encType, E = z.method, F = z.target, V = z.data) : (t.push(
          Je,
          "formAction",
          en,
          Pt,
          Me
        ), F = E = y = d = M = null, Tr(r, u));
      }
      return M != null && me(t, "name", M), d != null && me(t, "formAction", d), y != null && me(t, "formEncType", y), E != null && me(t, "formMethod", E), F != null && me(t, "formTarget", F), V;
    }
    function me(t, r, u) {
      switch (r) {
        case "className":
          ue(t, "class", u);
          break;
        case "tabIndex":
          ue(t, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ue(t, r, u);
          break;
        case "style":
          ge(t, u);
          break;
        case "src":
        case "href":
          if (u === "") {
            console.error(
              r === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              r,
              r
            );
            break;
          }
        case "action":
        case "formAction":
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          Ce(u, r), u = yr("" + u), t.push(
            Je,
            r,
            en,
            Ee(u),
            Me
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          J(t, r.toLowerCase(), u);
          break;
        case "xlinkHref":
          if (typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          Ce(u, r), u = yr("" + u), t.push(
            Je,
            "xlink:href",
            en,
            Ee(u),
            Me
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof u != "function" && typeof u != "symbol" && t.push(
            Je,
            r,
            en,
            Ee(u),
            Me
          );
          break;
        case "inert":
          u !== "" || be[r] || (be[r] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            r
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          u && typeof u != "function" && typeof u != "symbol" && t.push(Je, r, nn);
          break;
        case "capture":
        case "download":
          u === !0 ? t.push(Je, r, nn) : u !== !1 && typeof u != "function" && typeof u != "symbol" && t.push(
            Je,
            r,
            en,
            Ee(u),
            Me
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u && t.push(
            Je,
            r,
            en,
            Ee(u),
            Me
          );
          break;
        case "rowSpan":
        case "start":
          typeof u == "function" || typeof u == "symbol" || isNaN(u) || t.push(
            Je,
            r,
            en,
            Ee(u),
            Me
          );
          break;
        case "xlinkActuate":
          ue(t, "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          ue(t, "xlink:arcrole", u);
          break;
        case "xlinkRole":
          ue(t, "xlink:role", u);
          break;
        case "xlinkShow":
          ue(t, "xlink:show", u);
          break;
        case "xlinkTitle":
          ue(t, "xlink:title", u);
          break;
        case "xlinkType":
          ue(t, "xlink:type", u);
          break;
        case "xmlBase":
          ue(t, "xml:base", u);
          break;
        case "xmlLang":
          ue(t, "xml:lang", u);
          break;
        case "xmlSpace":
          ue(t, "xml:space", u);
          break;
        default:
          if ((!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Su.get(r) || r, N(r))) {
            switch (typeof u) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var d = r.toLowerCase().slice(0, 5);
                if (d !== "data-" && d !== "aria-")
                  return;
            }
            t.push(
              Je,
              r,
              en,
              Ee(u),
              Me
            );
          }
      }
    }
    function Wt(t, r, u) {
      if (r != null) {
        if (u != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof r != "object" || !("__html" in r))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        r = r.__html, r != null && ($(r), t.push("" + r));
      }
    }
    function wr(t, r) {
      var u = t[r];
      u != null && (u = Ti(u), t.multiple && !u ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        r
      ) : !t.multiple && u && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        r
      ));
    }
    function Qe(t) {
      var r = "";
      return ku.Children.forEach(t, function(u) {
        u != null && (r += u, il || typeof u == "string" || typeof u == "number" || typeof u == "bigint" || (il = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), r;
    }
    function Tr(t, r) {
      if ((t.instructions & 16) === o) {
        t.instructions |= 16;
        var u = r.preamble, d = r.bootstrapChunks;
        (u.htmlChunks || u.headChunks) && d.length === 0 ? (d.push(r.startInlineScript), si(d, t), d.push(
          He,
          Nc,
          Q
        )) : d.unshift(
          r.startInlineScript,
          He,
          Nc,
          Q
        );
      }
    }
    function nt(t, r) {
      t.push(rt("link"));
      for (var u in r)
        if (je.call(r, u)) {
          var d = r[u];
          if (d != null)
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                me(t, u, d);
            }
        }
      return t.push(qi), null;
    }
    function kc(t) {
      return $(t), ("" + t).replace(vo, he);
    }
    function Bl(t, r, u) {
      t.push(rt(u));
      for (var d in r)
        if (je.call(r, d)) {
          var y = r[d];
          if (y != null)
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  u + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                me(t, d, y);
            }
        }
      return t.push(qi), null;
    }
    function qt(t, r) {
      t.push(rt("title"));
      var u = null, d = null, y;
      for (y in r)
        if (je.call(r, y)) {
          var E = r[y];
          if (E != null)
            switch (y) {
              case "children":
                u = E;
                break;
              case "dangerouslySetInnerHTML":
                d = E;
                break;
              default:
                me(t, y, E);
            }
        }
      return t.push(He), r = Array.isArray(u) ? 2 > u.length ? u[0] : null : u, typeof r != "function" && typeof r != "symbol" && r !== null && r !== void 0 && t.push(Ee("" + r)), Wt(t, d, u), t.push(Rt("title")), null;
    }
    function tt(t, r) {
      t.push(rt("script"));
      var u = null, d = null, y;
      for (y in r)
        if (je.call(r, y)) {
          var E = r[y];
          if (E != null)
            switch (y) {
              case "children":
                u = E;
                break;
              case "dangerouslySetInnerHTML":
                d = E;
                break;
              default:
                me(t, y, E);
            }
        }
      return t.push(He), u != null && typeof u != "string" && (r = typeof u == "number" ? "a number for children" : Array.isArray(u) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        r
      )), Wt(t, d, u), typeof u == "string" && t.push(vt(u)), t.push(Rt("script")), null;
    }
    function Sc(t, r, u) {
      t.push(rt(u));
      var d = u = null, y;
      for (y in r)
        if (je.call(r, y)) {
          var E = r[y];
          if (E != null)
            switch (y) {
              case "children":
                u = E;
                break;
              case "dangerouslySetInnerHTML":
                d = E;
                break;
              default:
                me(t, y, E);
            }
        }
      return t.push(He), Wt(t, d, u), u;
    }
    function Ae(t, r, u) {
      t.push(rt(u));
      var d = u = null, y;
      for (y in r)
        if (je.call(r, y)) {
          var E = r[y];
          if (E != null)
            switch (y) {
              case "children":
                u = E;
                break;
              case "dangerouslySetInnerHTML":
                d = E;
                break;
              default:
                me(t, y, E);
            }
        }
      return t.push(He), Wt(t, d, u), typeof u == "string" ? (t.push(Ee(u)), null) : u;
    }
    function rt(t) {
      var r = lc.get(t);
      if (r === void 0) {
        if (!tr.test(t))
          throw Error("Invalid tag: " + t);
        r = "<" + t, lc.set(t, r);
      }
      return r;
    }
    function on(t, r, u, d, y, E, F, M, V) {
      ci(r, u), r !== "input" && r !== "textarea" && r !== "select" || u == null || u.value !== null || Jl || (Jl = !0, r === "select" && u.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        r
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        r
      ));
      e:
        if (r.indexOf("-") === -1)
          var z = !1;
        else
          switch (r) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              z = !1;
              break e;
            default:
              z = !0;
          }
      switch (z || typeof u.is == "string" || ui(r, u, null), !u.suppressContentEditableWarning && u.contentEditable && u.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), M.insertionMode !== Se && M.insertionMode !== _n && r.indexOf("-") === -1 && r.toLowerCase() !== r && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        r
      ), r) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          t.push(rt("a"));
          var Z = null, le = null, fe;
          for (fe in u)
            if (je.call(u, fe)) {
              var oe = u[fe];
              if (oe != null)
                switch (fe) {
                  case "children":
                    Z = oe;
                    break;
                  case "dangerouslySetInnerHTML":
                    le = oe;
                    break;
                  case "href":
                    oe === "" ? ue(t, "href", "") : me(t, fe, oe);
                    break;
                  default:
                    me(t, fe, oe);
                }
            }
          if (t.push(He), Wt(t, le, Z), typeof Z == "string") {
            t.push(Ee(Z));
            var j = null;
          } else
            j = Z;
          return j;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          _i("select", u), wr(u, "value"), wr(u, "defaultValue"), u.value === void 0 || u.defaultValue === void 0 || rl || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), rl = !0), t.push(rt("select"));
          var We = null, Cn = null, ke;
          for (ke in u)
            if (je.call(u, ke)) {
              var tn = u[ke];
              if (tn != null)
                switch (ke) {
                  case "children":
                    We = tn;
                    break;
                  case "dangerouslySetInnerHTML":
                    Cn = tn;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    me(
                      t,
                      ke,
                      tn
                    );
                }
            }
          return t.push(He), Wt(t, Cn, We), We;
        case "option":
          var Xt = M.selectedValue;
          t.push(rt("option"));
          var Zt = null, an = null, Ft = null, $l = null, Ar;
          for (Ar in u)
            if (je.call(u, Ar)) {
              var de = u[Ar];
              if (de != null)
                switch (Ar) {
                  case "children":
                    Zt = de;
                    break;
                  case "selected":
                    Ft = de, Ri || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), Ri = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    $l = de;
                    break;
                  case "value":
                    an = de;
                  default:
                    me(
                      t,
                      Ar,
                      de
                    );
                }
            }
          if (Xt != null) {
            if (an !== null) {
              Ce(an, "value");
              var hn = "" + an;
            } else
              $l === null || Vl || (Vl = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), hn = Qe(Zt);
            if (Ti(Xt)) {
              for (var dn = 0; dn < Xt.length; dn++)
                if (Ce(Xt[dn], "value"), "" + Xt[dn] === hn) {
                  t.push(' selected=""');
                  break;
                }
            } else
              Ce(Xt, "select.value"), "" + Xt === hn && t.push(' selected=""');
          } else
            Ft && t.push(' selected=""');
          return t.push(He), Wt(t, $l, Zt), Zt;
        case "textarea":
          _i("textarea", u), u.value === void 0 || u.defaultValue === void 0 || ll || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), ll = !0), t.push(rt("textarea"));
          var Tn = null, Xn = null, Ze = null, De;
          for (De in u)
            if (je.call(u, De)) {
              var fr = u[De];
              if (fr != null)
                switch (De) {
                  case "children":
                    Ze = fr;
                    break;
                  case "value":
                    Tn = fr;
                    break;
                  case "defaultValue":
                    Xn = fr;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    me(
                      t,
                      De,
                      fr
                    );
                }
            }
          if (Tn === null && Xn !== null && (Tn = Xn), t.push(He), Ze != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), Tn != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Ti(Ze)) {
              if (1 < Ze.length)
                throw Error("<textarea> can only have at most one child.");
              $(Ze[0]), Tn = "" + Ze[0];
            }
            $(Ze), Tn = "" + Ze;
          }
          return typeof Tn == "string" && Tn[0] === `
` && t.push(ji), Tn !== null && (Ce(Tn, "value"), t.push(Ee("" + Tn))), null;
        case "input":
          _i("input", u), t.push(rt("input"));
          var gn = null, Jt = null, Ln = null, zr = null, Ao = null, Br = null, ei = null, ni = null, ti = null, zt;
          for (zt in u)
            if (je.call(u, zt)) {
              var e = u[zt];
              if (e != null)
                switch (zt) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    gn = e;
                    break;
                  case "formAction":
                    Jt = e;
                    break;
                  case "formEncType":
                    Ln = e;
                    break;
                  case "formMethod":
                    zr = e;
                    break;
                  case "formTarget":
                    Ao = e;
                    break;
                  case "defaultChecked":
                    ti = e;
                    break;
                  case "defaultValue":
                    ei = e;
                    break;
                  case "checked":
                    ni = e;
                    break;
                  case "value":
                    Br = e;
                    break;
                  default:
                    me(
                      t,
                      zt,
                      e
                    );
                }
            }
          Jt === null || u.type === "image" || u.type === "submit" || Tt || (Tt = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var n = m(
            t,
            d,
            y,
            Jt,
            Ln,
            zr,
            Ao,
            gn
          );
          return ni === null || ti === null || nr || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), nr = !0), Br === null || ei === null || Ei || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), Ei = !0), ni !== null ? J(t, "checked", ni) : ti !== null && J(t, "checked", ti), Br !== null ? me(t, "value", Br) : ei !== null && me(t, "value", ei), t.push(qi), n != null && n.forEach(zl, t), null;
        case "button":
          t.push(rt("button"));
          var c = null, h = null, b = null, x = null, S = null, A = null, G = null, O;
          for (O in u)
            if (je.call(u, O)) {
              var B = u[O];
              if (B != null)
                switch (O) {
                  case "children":
                    c = B;
                    break;
                  case "dangerouslySetInnerHTML":
                    h = B;
                    break;
                  case "name":
                    b = B;
                    break;
                  case "formAction":
                    x = B;
                    break;
                  case "formEncType":
                    S = B;
                    break;
                  case "formMethod":
                    A = B;
                    break;
                  case "formTarget":
                    G = B;
                    break;
                  default:
                    me(
                      t,
                      O,
                      B
                    );
                }
            }
          x === null || u.type == null || u.type === "submit" || Tt || (Tt = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var ee = m(
            t,
            d,
            y,
            x,
            S,
            A,
            G,
            b
          );
          if (t.push(He), ee != null && ee.forEach(zl, t), Wt(t, h, c), typeof c == "string") {
            t.push(Ee(c));
            var te = null;
          } else
            te = c;
          return te;
        case "form":
          t.push(rt("form"));
          var ne = null, q = null, Re = null, xn = null, we = null, Ne = null, Vn;
          for (Vn in u)
            if (je.call(u, Vn)) {
              var st = u[Vn];
              if (st != null)
                switch (Vn) {
                  case "children":
                    ne = st;
                    break;
                  case "dangerouslySetInnerHTML":
                    q = st;
                    break;
                  case "action":
                    Re = st;
                    break;
                  case "encType":
                    xn = st;
                    break;
                  case "method":
                    we = st;
                    break;
                  case "target":
                    Ne = st;
                    break;
                  default:
                    me(
                      t,
                      Vn,
                      st
                    );
                }
            }
          var rn = null, ye = null;
          if (typeof Re == "function") {
            xn === null && we === null || rc || (rc = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), Ne === null || Oa || (Oa = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var ft = ie(
              d,
              Re
            );
            ft !== null ? (Re = ft.action || "", xn = ft.encType, we = ft.method, Ne = ft.target, rn = ft.data, ye = ft.name) : (t.push(
              Je,
              "action",
              en,
              Pt,
              Me
            ), Ne = we = xn = Re = null, Tr(d, y));
          }
          if (Re != null && me(t, "action", Re), xn != null && me(t, "encType", xn), we != null && me(t, "method", we), Ne != null && me(t, "target", Ne), t.push(He), ye !== null && (t.push('<input type="hidden"'), ue(t, "name", ye), t.push(qi), rn != null && rn.forEach(
            zl,
            t
          )), Wt(t, q, ne), typeof ne == "string") {
            t.push(Ee(ne));
            var hr = null;
          } else
            hr = ne;
          return hr;
        case "menuitem":
          t.push(rt("menuitem"));
          for (var En in u)
            if (je.call(u, En)) {
              var zn = u[En];
              if (zn != null)
                switch (En) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    me(
                      t,
                      En,
                      zn
                    );
                }
            }
          return t.push(He), null;
        case "object":
          t.push(rt("object"));
          var Hr = null, Qt = null, pt;
          for (pt in u)
            if (je.call(u, pt)) {
              var Bn = u[pt];
              if (Bn != null)
                switch (pt) {
                  case "children":
                    Hr = Bn;
                    break;
                  case "dangerouslySetInnerHTML":
                    Qt = Bn;
                    break;
                  case "data":
                    Ce(Bn, "data");
                    var xt = yr("" + Bn);
                    if (xt === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        pt,
                        pt
                      );
                      break;
                    }
                    t.push(
                      Je,
                      "data",
                      en,
                      Ee(xt),
                      Me
                    );
                    break;
                  default:
                    me(
                      t,
                      pt,
                      Bn
                    );
                }
            }
          if (t.push(He), Wt(t, Qt, Hr), typeof Hr == "string") {
            t.push(Ee(Hr));
            var Wr = null;
          } else
            Wr = Hr;
          return Wr;
        case "title":
          var nl = M.tagScope & 1, At = M.tagScope & 4;
          if (je.call(u, "children")) {
            var Zn = u.children, dr = Array.isArray(Zn) ? 2 > Zn.length ? Zn[0] : null : Zn;
            Array.isArray(Zn) && 1 < Zn.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              Zn.length
            ) : typeof dr == "function" || typeof dr == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof dr == "function" ? "a Function" : "a Sybmol"
            ) : dr && dr.toString === {}.toString && (dr.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (M.insertionMode === Se || nl || u.itemProp != null)
            var Nr = qt(
              t,
              u
            );
          else
            At ? Nr = null : (qt(y.hoistableChunks, u), Nr = void 0);
          return Nr;
        case "link":
          var gr = M.tagScope & 1, Ii = M.tagScope & 4, mr = u.rel, ht = u.href, dl = u.precedence;
          if (M.insertionMode === Se || gr || u.itemProp != null || typeof mr != "string" || typeof ht != "string" || ht === "") {
            mr === "stylesheet" && typeof u.precedence == "string" && (typeof ht == "string" && ht || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              ht === null ? "`null`" : ht === void 0 ? "`undefined`" : ht === "" ? "an empty string" : 'something with type "' + typeof ht + '"'
            )), nt(t, u);
            var Bt = null;
          } else if (u.rel === "stylesheet")
            if (typeof dl != "string" || u.disabled != null || u.onLoad || u.onError) {
              if (typeof dl == "string") {
                if (u.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (u.onLoad || u.onError) {
                  var Hu = u.onLoad && u.onError ? "`onLoad` and `onError` props" : u.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    Hu,
                    Hu
                  );
                }
              }
              Bt = nt(
                t,
                u
              );
            } else {
              var ri = y.styles.get(dl), Kn = d.styleResources.hasOwnProperty(
                ht
              ) ? d.styleResources[ht] : void 0;
              if (Kn !== I) {
                d.styleResources[ht] = I, ri || (ri = {
                  precedence: Ee(dl),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, y.styles.set(dl, ri));
                var gl = {
                  state: w,
                  props: On({}, u, {
                    "data-precedence": u.precedence,
                    precedence: null
                  })
                };
                if (Kn) {
                  Kn.length === 2 && va(gl.props, Kn);
                  var vr = y.preloads.stylesheets.get(ht);
                  vr && 0 < vr.length ? vr.length = 0 : gl.state = R;
                }
                ri.sheets.set(ht, gl), F && F.stylesheets.add(gl);
              } else if (ri) {
                var yc = ri.sheets.get(ht);
                yc && F && F.stylesheets.add(yc);
              }
              V && t.push("<!-- -->"), Bt = null;
            }
          else
            u.onLoad || u.onError ? Bt = nt(
              t,
              u
            ) : (V && t.push("<!-- -->"), Bt = Ii ? null : nt(y.hoistableChunks, u));
          return Bt;
        case "script":
          var Io = M.tagScope & 1, Dl = u.async;
          if (typeof u.src != "string" || !u.src || !Dl || typeof Dl == "function" || typeof Dl == "symbol" || u.onLoad || u.onError || M.insertionMode === Se || Io || u.itemProp != null)
            var Mo = tt(
              t,
              u
            );
          else {
            var Ur = u.src;
            if (u.type === "module")
              var wc = d.moduleScriptResources, Wu = y.preloads.moduleScripts;
            else
              wc = d.scriptResources, Wu = y.preloads.scripts;
            var vl = wc.hasOwnProperty(Ur) ? wc[Ur] : void 0;
            if (vl !== I) {
              wc[Ur] = I;
              var Tc = u;
              if (vl) {
                vl.length === 2 && (Tc = On({}, u), va(Tc, vl));
                var br = Wu.get(Ur);
                br && (br.length = 0);
              }
              var Oo = [];
              y.scripts.add(Oo), tt(Oo, Tc);
            }
            V && t.push("<!-- -->"), Mo = null;
          }
          return Mo;
        case "style":
          var Va = M.tagScope & 1;
          if (je.call(u, "children")) {
            var ua = u.children, bl = Array.isArray(ua) ? 2 > ua.length ? ua[0] : null : ua;
            (typeof bl == "function" || typeof bl == "symbol" || Array.isArray(bl)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof bl == "function" ? "a Function" : typeof bl == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var yl = u.precedence, li = u.href, Yr = u.nonce;
          if (M.insertionMode === Se || Va || u.itemProp != null || typeof yl != "string" || typeof li != "string" || li === "") {
            t.push(rt("style"));
            var Vt = null, sa = null, ii;
            for (ii in u)
              if (je.call(u, ii)) {
                var Ka = u[ii];
                if (Ka != null)
                  switch (ii) {
                    case "children":
                      Vt = Ka;
                      break;
                    case "dangerouslySetInnerHTML":
                      sa = Ka;
                      break;
                    default:
                      me(
                        t,
                        ii,
                        Ka
                      );
                  }
              }
            t.push(He);
            var Mi = Array.isArray(Vt) ? 2 > Vt.length ? Vt[0] : null : Vt;
            typeof Mi != "function" && typeof Mi != "symbol" && Mi !== null && Mi !== void 0 && t.push(kc(Mi)), Wt(
              t,
              sa,
              Vt
            ), t.push(Rt("style"));
            var hs = null;
          } else {
            li.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              li
            );
            var Ir = y.styles.get(yl), Ll = d.styleResources.hasOwnProperty(li) ? d.styleResources[li] : void 0;
            if (Ll !== I) {
              d.styleResources[li] = I, Ll && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                li
              ), Ir || (Ir = {
                precedence: Ee(yl),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, y.styles.set(
                yl,
                Ir
              ));
              var xc = y.nonce.style;
              if (xc && xc !== Yr)
                console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce "%s" that was included with this render.',
                  yl,
                  Yr,
                  xc
                );
              else {
                !xc && Yr && console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.',
                  yl,
                  Yr
                ), Ir.hrefs.push(
                  Ee(li)
                );
                var iu = Ir.rules, au = null, zs = null, qa;
                for (qa in u)
                  if (je.call(u, qa)) {
                    var _o = u[qa];
                    if (_o != null)
                      switch (qa) {
                        case "children":
                          au = _o;
                          break;
                        case "dangerouslySetInnerHTML":
                          zs = _o;
                      }
                  }
                var ja = Array.isArray(au) ? 2 > au.length ? au[0] : null : au;
                typeof ja != "function" && typeof ja != "symbol" && ja !== null && ja !== void 0 && iu.push(kc(ja)), Wt(iu, zs, au);
              }
            }
            Ir && F && F.styles.add(Ir), V && t.push("<!-- -->"), hs = void 0;
          }
          return hs;
        case "meta":
          var ou = M.tagScope & 1, ps = M.tagScope & 4;
          if (M.insertionMode === Se || ou || u.itemProp != null)
            var xs = Bl(
              t,
              u,
              "meta"
            );
          else
            V && t.push("<!-- -->"), xs = ps ? null : typeof u.charSet == "string" ? Bl(y.charsetChunks, u, "meta") : u.name === "viewport" ? Bl(y.viewportChunks, u, "meta") : Bl(
              y.hoistableChunks,
              u,
              "meta"
            );
          return xs;
        case "listing":
        case "pre":
          t.push(rt(r));
          var Mr = null, ai = null, $a;
          for ($a in u)
            if (je.call(u, $a)) {
              var Nu = u[$a];
              if (Nu != null)
                switch ($a) {
                  case "children":
                    Mr = Nu;
                    break;
                  case "dangerouslySetInnerHTML":
                    ai = Nu;
                    break;
                  default:
                    me(
                      t,
                      $a,
                      Nu
                    );
                }
            }
          if (t.push(He), ai != null) {
            if (Mr != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof ai != "object" || !("__html" in ai))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var wl = ai.__html;
            wl != null && (typeof wl == "string" && 0 < wl.length && wl[0] === `
` ? t.push(ji, wl) : ($(wl), t.push("" + wl)));
          }
          return typeof Mr == "string" && Mr[0] === `
` && t.push(ji), Mr;
        case "img":
          var dt = M.tagScope & 3, Jn = u.src, Fn = u.srcSet;
          if (!(u.loading === "lazy" || !Jn && !Fn || typeof Jn != "string" && Jn != null || typeof Fn != "string" && Fn != null || u.fetchPriority === "low" || dt) && (typeof Jn != "string" || Jn[4] !== ":" || Jn[0] !== "d" && Jn[0] !== "D" || Jn[1] !== "a" && Jn[1] !== "A" || Jn[2] !== "t" && Jn[2] !== "T" || Jn[3] !== "a" && Jn[3] !== "A") && (typeof Fn != "string" || Fn[4] !== ":" || Fn[0] !== "d" && Fn[0] !== "D" || Fn[1] !== "a" && Fn[1] !== "A" || Fn[2] !== "t" && Fn[2] !== "T" || Fn[3] !== "a" && Fn[3] !== "A")) {
            F !== null && M.tagScope & 64 && (F.suspenseyImages = !0);
            var Es = typeof u.sizes == "string" ? u.sizes : void 0, Do = Fn ? Fn + `
` + (Es || "") : Jn, mu = y.preloads.images, Lo = mu.get(Do);
            if (Lo)
              (u.fetchPriority === "high" || 10 > y.highImagePreloads.size) && (mu.delete(Do), y.highImagePreloads.add(Lo));
            else if (!d.imageResources.hasOwnProperty(Do)) {
              d.imageResources[Do] = H;
              var Ec = u.crossOrigin, Uu = typeof Ec == "string" ? Ec === "use-credentials" ? Ec : "" : void 0, Rc = y.headers, cu;
              Rc && 0 < Rc.remainingCapacity && typeof u.srcSet != "string" && (u.fetchPriority === "high" || 500 > Rc.highImagePreloads.length) && (cu = Wo(Jn, "image", {
                imageSrcSet: u.srcSet,
                imageSizes: u.sizes,
                crossOrigin: Uu,
                integrity: u.integrity,
                nonce: u.nonce,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.refererPolicy
              }), 0 <= (Rc.remainingCapacity -= cu.length + 2)) ? (y.resets.image[Do] = H, Rc.highImagePreloads && (Rc.highImagePreloads += ", "), Rc.highImagePreloads += cu) : (Lo = [], nt(Lo, {
                rel: "preload",
                as: "image",
                href: Fn ? void 0 : Jn,
                imageSrcSet: Fn,
                imageSizes: Es,
                crossOrigin: Uu,
                integrity: u.integrity,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.referrerPolicy
              }), u.fetchPriority === "high" || 10 > y.highImagePreloads.size ? y.highImagePreloads.add(Lo) : (y.bulkPreloads.add(Lo), mu.set(Do, Lo)));
            }
          }
          return Bl(t, u, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Bl(t, u, r);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (M.insertionMode < Te) {
            var uu = E || y.preamble;
            if (uu.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            E !== null && t.push("<!--head-->"), uu.headChunks = [];
            var ds = Sc(
              uu.headChunks,
              u,
              "head"
            );
          } else
            ds = Ae(
              t,
              u,
              "head"
            );
          return ds;
        case "body":
          if (M.insertionMode < Te) {
            var Rs = E || y.preamble;
            if (Rs.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            E !== null && t.push("<!--body-->"), Rs.bodyChunks = [];
            var As = Sc(
              Rs.bodyChunks,
              u,
              "body"
            );
          } else
            As = Ae(
              t,
              u,
              "body"
            );
          return As;
        case "html":
          if (M.insertionMode === Le) {
            var Yu = E || y.preamble;
            if (Yu.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            E !== null && t.push("<!--html-->"), Yu.htmlChunks = [U];
            var Gu = Sc(
              Yu.htmlChunks,
              u,
              "html"
            );
          } else
            Gu = Ae(
              t,
              u,
              "html"
            );
          return Gu;
        default:
          if (r.indexOf("-") !== -1) {
            t.push(rt(r));
            var Cc = null, eo = null, fa;
            for (fa in u)
              if (je.call(u, fa)) {
                var Gr = u[fa];
                if (Gr != null) {
                  var su = fa;
                  switch (fa) {
                    case "children":
                      Cc = Gr;
                      break;
                    case "dangerouslySetInnerHTML":
                      eo = Gr;
                      break;
                    case "style":
                      ge(t, Gr);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      su = "class";
                    default:
                      if (N(fa) && typeof Gr != "function" && typeof Gr != "symbol" && Gr !== !1) {
                        if (Gr === !0)
                          Gr = "";
                        else if (typeof Gr == "object")
                          continue;
                        t.push(
                          Je,
                          su,
                          en,
                          Ee(Gr),
                          Me
                        );
                      }
                  }
                }
              }
            return t.push(He), Wt(
              t,
              eo,
              Cc
            ), Cc;
          }
      }
      return Ae(t, u, r);
    }
    function Rt(t) {
      var r = rr.get(t);
      return r === void 0 && (r = "</" + t + ">", rr.set(t, r)), r;
    }
    function da(t, r) {
      t = t.preamble, t.htmlChunks === null && r.htmlChunks && (t.htmlChunks = r.htmlChunks), t.headChunks === null && r.headChunks && (t.headChunks = r.headChunks), t.bodyChunks === null && r.bodyChunks && (t.bodyChunks = r.bodyChunks);
    }
    function Bi(t, r) {
      r = r.bootstrapChunks;
      for (var u = 0; u < r.length - 1; u++)
        t.push(r[u]);
      return u < r.length ? (u = r[u], r.length = 0, t.push(u)) : !0;
    }
    function Ot(t, r, u) {
      if (t.push(mc), u === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return t.push(r.boundaryPrefix), r = u.toString(16), t.push(r), t.push(ot);
    }
    function xr(t, r, u, d) {
      switch (u.insertionMode) {
        case Le:
        case Pe:
        case Ie:
        case Te:
          return t.push(ea), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(Un);
        case Se:
          return t.push(na), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(Da);
        case _n:
          return t.push(Yt), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(wo);
        case ze:
          return t.push(pu), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(La);
        case Xe:
          return t.push(Uc), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(Yc);
        case ln:
          return t.push(za), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(Ba);
        case _e:
          return t.push(cc), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(uc);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Tl(t, r) {
      switch (r.insertionMode) {
        case Le:
        case Pe:
        case Ie:
        case Te:
          return t.push(Pr);
        case Se:
          return t.push(al);
        case _n:
          return t.push(lr);
        case ze:
          return t.push(oc);
        case Xe:
          return t.push(Kl);
        case ln:
          return t.push(ir);
        case _e:
          return t.push(Au);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function bt(t) {
      return JSON.stringify(t).replace(
        To,
        function(r) {
          switch (r) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function xl(t) {
      return JSON.stringify(t).replace(
        ra,
        function(r) {
          switch (r) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function Pc(t) {
      var r = t.rules, u = t.hrefs;
      0 < r.length && u.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var d = 0;
      if (u.length) {
        for (this.push(K.startInlineStyle), this.push(dc), this.push(t.precedence), this.push(la); d < u.length - 1; d++)
          this.push(u[d]), this.push(cl);
        for (this.push(u[d]), this.push(rs), d = 0; d < r.length; d++)
          this.push(r[d]);
        xo = this.push(ls), Il = !0, r.length = 0, u.length = 0;
      }
    }
    function Ve(t) {
      return t.state !== k ? Il = !0 : !1;
    }
    function jt(t, r, u) {
      return Il = !1, xo = !0, K = u, r.styles.forEach(Pc, t), K = null, r.stylesheets.forEach(Ve), Il && (u.stylesToHoist = !0), xo;
    }
    function Rn(t) {
      for (var r = 0; r < t.length; r++)
        this.push(t[r]);
      t.length = 0;
    }
    function Xu(t) {
      nt($r, t.props);
      for (var r = 0; r < $r.length; r++)
        this.push($r[r]);
      $r.length = 0, t.state = k;
    }
    function qn(t) {
      var r = 0 < t.sheets.size;
      t.sheets.forEach(Xu, this), t.sheets.clear();
      var u = t.rules, d = t.hrefs;
      if (!r || d.length) {
        if (this.push(K.startInlineStyle), this.push(ia), this.push(t.precedence), t = 0, d.length) {
          for (this.push(Wa); t < d.length - 1; t++)
            this.push(d[t]), this.push(cl);
          this.push(d[t]);
        }
        for (this.push(Du), t = 0; t < u.length; t++)
          this.push(u[t]);
        this.push(is), u.length = 0, d.length = 0;
      }
    }
    function du(t) {
      if (t.state === w) {
        t.state = R;
        var r = t.props;
        for (nt($r, {
          rel: "preload",
          as: "style",
          href: t.props.href,
          crossOrigin: r.crossOrigin,
          fetchPriority: r.fetchPriority,
          integrity: r.integrity,
          media: r.media,
          hrefLang: r.hrefLang,
          referrerPolicy: r.referrerPolicy
        }), t = 0; t < $r.length; t++)
          this.push($r[t]);
        $r.length = 0;
      }
    }
    function gu(t) {
      t.sheets.forEach(du, this), t.sheets.clear();
    }
    function si(t, r) {
      (r.instructions & P) === o && (r.instructions |= P, t.push(
        Eo,
        Ee("_" + r.idPrefix + "R_"),
        Me
      ));
    }
    function vu(t, r) {
      t.push(l);
      var u = l;
      r.stylesheets.forEach(function(d) {
        if (d.state !== k)
          if (d.state === D)
            t.push(u), d = d.props.href, Ce(d, "href"), d = xl("" + d), t.push(d), t.push(v), u = a;
          else {
            t.push(u);
            var y = d.props["data-precedence"], E = d.props, F = yr("" + d.props.href);
            F = xl(F), t.push(F), Ce(y, "precedence"), y = "" + y, t.push(s), y = xl(y), t.push(y);
            for (var M in E)
              if (je.call(E, M) && (y = E[M], y != null))
                switch (M) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Ho(
                      t,
                      M,
                      y
                    );
                }
            t.push(v), u = a, d.state = D;
          }
      }), t.push(v);
    }
    function Ho(t, r, u) {
      var d = r.toLowerCase();
      switch (typeof u) {
        case "function":
        case "symbol":
          return;
      }
      switch (r) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          d = "class", Ce(u, d), r = "" + u;
          break;
        case "hidden":
          if (u === !1)
            return;
          r = "";
          break;
        case "src":
        case "href":
          u = yr(u), Ce(u, d), r = "" + u;
          break;
        default:
          if (2 < r.length && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N") || !N(r))
            return;
          Ce(u, d), r = "" + u;
      }
      t.push(s), d = xl(d), t.push(d), t.push(s), d = xl(r), t.push(d);
    }
    function ga() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
    }
    function Hi(t, r, u, d) {
      (t.scriptResources.hasOwnProperty(u) || t.moduleScriptResources.hasOwnProperty(u)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        u
      ), t.scriptResources[u] = I, t.moduleScriptResources[u] = I, t = [], nt(t, d), r.bootstrapScripts.add(t);
    }
    function va(t, r) {
      t.crossOrigin == null && (t.crossOrigin = r[0]), t.integrity == null && (t.integrity = r[1]);
    }
    function Wo(t, r, u) {
      t = Wn(t), r = Fc(r, "as"), r = "<" + t + '>; rel=preload; as="' + r + '"';
      for (var d in u)
        je.call(u, d) && (t = u[d], typeof t == "string" && (r += "; " + d.toLowerCase() + '="' + Fc(
          t,
          d
        ) + '"'));
      return r;
    }
    function Wn(t) {
      return Ce(t, "href"), ("" + t).replace(
        p,
        An
      );
    }
    function An(t) {
      switch (t) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Fc(t, r) {
      return Ht(t) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        r,
        ve(t)
      ), W(t)), ("" + t).replace(
        L,
        ba
      );
    }
    function ba(t) {
      switch (t) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Zu(t) {
      this.styles.add(t);
    }
    function bu(t) {
      this.stylesheets.add(t);
    }
    function tl(t, r) {
      r.styles.forEach(Zu, t), r.stylesheets.forEach(bu, t), r.suspenseyImages && (t.suspenseyImages = !0);
    }
    function Hl(t, r) {
      var u = t.idPrefix, d = [], y = t.bootstrapScriptContent, E = t.bootstrapScripts, F = t.bootstrapModules;
      if (y !== void 0 && (d.push("<script"), si(d, t), d.push(
        He,
        vt(y),
        Q
      )), u = {
        placeholderPrefix: u + "P:",
        segmentPrefix: u + "S:",
        boundaryPrefix: u + "B:",
        startInlineScript: "<script",
        startInlineStyle: "<style",
        preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
        externalRuntimeScript: null,
        bootstrapChunks: d,
        importMapChunks: [],
        onHeaders: void 0,
        headers: null,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: { script: void 0, style: void 0 },
        hoistableState: null,
        stylesToHoist: !1
      }, E !== void 0)
        for (y = 0; y < E.length; y++) {
          var M = E[y], V, z = void 0, Z = void 0, le = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: void 0
          };
          typeof M == "string" ? le.href = V = M : (le.href = V = M.src, le.integrity = Z = typeof M.integrity == "string" ? M.integrity : void 0, le.crossOrigin = z = typeof M == "string" || M.crossOrigin == null ? void 0 : M.crossOrigin === "use-credentials" ? "use-credentials" : ""), Hi(t, u, V, le), d.push(
            '<script src="',
            Ee(V),
            Me
          ), typeof Z == "string" && d.push(
            ' integrity="',
            Ee(Z),
            Me
          ), typeof z == "string" && d.push(
            ' crossorigin="',
            Ee(z),
            Me
          ), si(d, t), d.push(' async=""><\/script>');
        }
      if (F !== void 0)
        for (E = 0; E < F.length; E++)
          y = F[E], z = V = void 0, Z = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
          }, typeof y == "string" ? Z.href = M = y : (Z.href = M = y.src, Z.integrity = z = typeof y.integrity == "string" ? y.integrity : void 0, Z.crossOrigin = V = typeof y == "string" || y.crossOrigin == null ? void 0 : y.crossOrigin === "use-credentials" ? "use-credentials" : ""), Hi(
            t,
            u,
            M,
            Z
          ), d.push(
            '<script type="module" src="',
            Ee(M),
            Me
          ), typeof z == "string" && d.push(
            ' integrity="',
            Ee(z),
            Me
          ), typeof V == "string" && d.push(
            ' crossorigin="',
            Ee(V),
            Me
          ), si(d, t), d.push(' async=""><\/script>');
      return {
        placeholderPrefix: u.placeholderPrefix,
        segmentPrefix: u.segmentPrefix,
        boundaryPrefix: u.boundaryPrefix,
        startInlineScript: u.startInlineScript,
        startInlineStyle: u.startInlineStyle,
        preamble: u.preamble,
        externalRuntimeScript: u.externalRuntimeScript,
        bootstrapChunks: u.bootstrapChunks,
        importMapChunks: u.importMapChunks,
        onHeaders: u.onHeaders,
        headers: u.headers,
        resets: u.resets,
        charsetChunks: u.charsetChunks,
        viewportChunks: u.viewportChunks,
        hoistableChunks: u.hoistableChunks,
        preconnects: u.preconnects,
        fontPreloads: u.fontPreloads,
        highImagePreloads: u.highImagePreloads,
        styles: u.styles,
        bootstrapScripts: u.bootstrapScripts,
        scripts: u.scripts,
        bulkPreloads: u.bulkPreloads,
        preloads: u.preloads,
        nonce: u.nonce,
        stylesToHoist: u.stylesToHoist,
        generateStaticMarkup: r
      };
    }
    function Ju(t, r, u, d) {
      return u.generateStaticMarkup ? (t.push(Ee(r)), !1) : (r === "" ? t = d : (d && t.push("<!-- -->"), t.push(Ee(r)), t = !0), t);
    }
    function ya(t, r, u, d) {
      r.generateStaticMarkup || u && d && t.push("<!-- -->");
    }
    function Qn(t) {
      if (t == null)
        return null;
      if (typeof t == "function")
        return t.$$typeof === se ? null : t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Zl:
          return "Fragment";
        case jo:
          return "Profiler";
        case qo:
          return "StrictMode";
        case _r:
          return "Suspense";
        case Vr:
          return "SuspenseList";
        case Fl:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case at:
            return "Portal";
          case Jr:
            return t.displayName || "Context";
          case Dc:
            return (t._context.displayName || "Context") + ".Consumer";
          case Qr:
            var r = t.render;
            return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case wn:
            return r = t.displayName || null, r !== null ? r : Qn(t.type) || "Memo";
          case Kr:
            r = t._payload, t = t._init;
            try {
              return Qn(t(r));
            } catch {
            }
        }
      return null;
    }
    function Wi(t, r) {
      if (t !== r) {
        t.context._currentValue2 = t.parentValue, t = t.parent;
        var u = r.parent;
        if (t === null) {
          if (u !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (u === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          Wi(t, u);
        }
        r.context._currentValue2 = r.value;
      }
    }
    function Ni(t) {
      t.context._currentValue2 = t.parentValue, t = t.parent, t !== null && Ni(t);
    }
    function wa(t) {
      var r = t.parent;
      r !== null && wa(r), t.context._currentValue2 = t.value;
    }
    function Nt(t, r) {
      if (t.context._currentValue2 = t.parentValue, t = t.parent, t === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      t.depth === r.depth ? Wi(t, r) : Nt(t, r);
    }
    function Or(t, r) {
      var u = r.parent;
      if (u === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      t.depth === u.depth ? Wi(t, u) : Or(t, u), r.context._currentValue2 = r.value;
    }
    function yn(t) {
      var r = Fe;
      r !== t && (r === null ? wa(t) : t === null ? Ni(r) : r.depth === t.depth ? Wi(r, t) : r.depth > t.depth ? Nt(r, t) : Or(r, t), Fe = t);
    }
    function No(t) {
      if (t !== null && typeof t != "function") {
        var r = String(t);
        Pi.has(r) || (Pi.add(r), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Xr(t, r) {
      t = (t = t.constructor) && Qn(t) || "ReactClass";
      var u = t + "." + r;
      Ge[u] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        r,
        t
      ), Ge[u] = !0);
    }
    function Ke(t, r, u) {
      var d = t.id;
      t = t.overflow;
      var y = 32 - sl(d) - 1;
      d &= ~(1 << y), u += 1;
      var E = 32 - sl(r) + y;
      if (30 < E) {
        var F = y - y % 5;
        return E = (d & (1 << F) - 1).toString(32), d >>= F, y -= F, {
          id: 1 << 32 - sl(r) + y | u << y | d,
          overflow: E + t
        };
      }
      return {
        id: 1 << E | u << y | d,
        overflow: t
      };
    }
    function Qu(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (or(t) / Ml | 0) | 0;
    }
    function Ue() {
    }
    function mo(t, r, u) {
      switch (u = t[u], u === void 0 ? t.push(r) : u !== r && (r.then(Ue, Ue), r = u), r.status) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw r.reason;
        default:
          switch (typeof r.status == "string" ? r.then(Ue, Ue) : (t = r, t.status = "pending", t.then(
            function(d) {
              if (r.status === "pending") {
                var y = r;
                y.status = "fulfilled", y.value = d;
              }
            },
            function(d) {
              if (r.status === "pending") {
                var y = r;
                y.status = "rejected", y.reason = d;
              }
            }
          )), r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
          }
          throw ma = r, cr;
      }
    }
    function Uo() {
      if (ma === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = ma;
      return ma = null, t;
    }
    function Yo(t, r) {
      return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
    }
    function Wl() {
      if (pr === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return ql && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), pr;
    }
    function sn() {
      if (0 < jc)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function qe() {
      return Dn === null ? Lu === null ? (ko = !1, Lu = Dn = sn()) : (ko = !0, Dn = Lu) : Dn.next === null ? (ko = !1, Dn = Dn.next = sn()) : (ko = !0, Dn = Dn.next), Dn;
    }
    function El() {
      var t = So;
      return So = null, t;
    }
    function mt() {
      ql = !1, Ua = ur = Co = pr = null, Ol = !1, Lu = null, jc = 0, Dn = aa = null;
    }
    function Ta(t) {
      return ql && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), t._currentValue2;
    }
    function pc(t, r) {
      return typeof r == "function" ? r(t) : r;
    }
    function $t(t, r, u) {
      if (t !== pc && (Ga = "useReducer"), pr = Wl(), Dn = qe(), ko) {
        if (u = Dn.queue, r = u.dispatch, aa !== null) {
          var d = aa.get(u);
          if (d !== void 0) {
            aa.delete(u), u = Dn.memoizedState;
            do {
              var y = d.action;
              ql = !0, u = t(u, y), ql = !1, d = d.next;
            } while (d !== null);
            return Dn.memoizedState = u, [u, r];
          }
        }
        return [Dn.memoizedState, r];
      }
      return ql = !0, t = t === pc ? typeof r == "function" ? r() : r : u !== void 0 ? u(r) : r, ql = !1, Dn.memoizedState = t, t = Dn.queue = { last: null, dispatch: null }, t = t.dispatch = yu.bind(
        null,
        pr,
        t
      ), [Dn.memoizedState, t];
    }
    function Vu(t, r) {
      if (pr = Wl(), Dn = qe(), r = r === void 0 ? null : r, Dn !== null) {
        var u = Dn.memoizedState;
        if (u !== null && r !== null) {
          e: {
            var d = u[1];
            if (d === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                Ga
              ), d = !1;
            else {
              r.length !== d.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                Ga,
                "[" + r.join(", ") + "]",
                "[" + d.join(", ") + "]"
              );
              for (var y = 0; y < d.length && y < r.length; y++)
                if (!Ro(r[y], d[y])) {
                  d = !1;
                  break e;
                }
              d = !0;
            }
          }
          if (d)
            return u[0];
        }
      }
      return ql = !0, t = t(), ql = !1, Dn.memoizedState = [t, r], t;
    }
    function yu(t, r, u) {
      if (25 <= jc)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (t === pr)
        if (Ol = !0, t = { action: u, next: null }, aa === null && (aa = /* @__PURE__ */ new Map()), u = aa.get(r), u === void 0)
          aa.set(r, t);
        else {
          for (r = u; r.next !== null; )
            r = r.next;
          r.next = t;
        }
    }
    function Ac() {
      throw Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      );
    }
    function In() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Ic() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function no(t, r, u) {
      Wl();
      var d = Ya++, y = ur;
      if (typeof t.$$FORM_ACTION == "function") {
        var E = null, F = Ua;
        y = y.formState;
        var M = t.$$IS_SIGNATURE_EQUAL;
        if (y !== null && typeof M == "function") {
          var V = y[1];
          M.call(t, y[2], y[3]) && (E = u !== void 0 ? "p" + u : "k" + Kt(
            JSON.stringify([
              F,
              null,
              d
            ]),
            0
          ), V === E && (Kc = d, r = y[0]));
        }
        var z = t.bind(null, r);
        return t = function(le) {
          z(le);
        }, typeof z.$$FORM_ACTION == "function" && (t.$$FORM_ACTION = function(le) {
          le = z.$$FORM_ACTION(le), u !== void 0 && (Ce(u, "target"), u += "", le.action = u);
          var fe = le.data;
          return fe && (E === null && (E = u !== void 0 ? "p" + u : "k" + Kt(
            JSON.stringify([
              F,
              null,
              d
            ]),
            0
          )), fe.append("$ACTION_KEY", E)), le;
        }), [r, t, !1];
      }
      var Z = t.bind(null, r);
      return [
        r,
        function(le) {
          Z(le);
        },
        !1
      ];
    }
    function Zr(t) {
      var r = qc;
      return qc += 1, So === null && (So = []), mo(So, t, r);
    }
    function xa() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function Ku() {
    }
    function qu() {
      if (el === 0) {
        oa = console.log, Fi = console.info, $c = console.warn, eu = console.error, nu = console.group, Za = console.groupCollapsed, cs = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: Ku,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      el++;
    }
    function to() {
      if (el--, el === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: On({}, t, { value: oa }),
          info: On({}, t, { value: Fi }),
          warn: On({}, t, { value: $c }),
          error: On({}, t, { value: eu }),
          group: On({}, t, { value: nu }),
          groupCollapsed: On({}, t, { value: Za }),
          groupEnd: On({}, t, { value: cs })
        });
      }
      0 > el && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ro(t) {
      var r = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = r, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), r = t.indexOf(`
`), r !== -1 && (t = t.slice(r + 1)), r = t.indexOf("react_stack_bottom_frame"), r !== -1 && (r = t.lastIndexOf(
        `
`,
        r
      )), r !== -1)
        t = t.slice(0, r);
      else
        return "";
      return t;
    }
    function Nl(t) {
      if (zu === void 0)
        try {
          throw Error();
        } catch (u) {
          var r = u.stack.trim().match(/\n( *(at )?)/);
          zu = r && r[1] || "", Po = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + zu + t + Po;
    }
    function ml(t, r) {
      if (!t || us)
        return "";
      var u = tu.get(t);
      if (u !== void 0)
        return u;
      us = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = Nn.H, Nn.H = null, qu();
      try {
        var y = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var fe = function() {
                  throw Error();
                };
                if (Object.defineProperty(fe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(fe, []);
                  } catch (j) {
                    var oe = j;
                  }
                  Reflect.construct(t, [], fe);
                } else {
                  try {
                    fe.call();
                  } catch (j) {
                    oe = j;
                  }
                  t.call(fe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (j) {
                  oe = j;
                }
                (fe = t()) && typeof fe.catch == "function" && fe.catch(function() {
                });
              }
            } catch (j) {
              if (j && oe && typeof j.stack == "string")
                return [j.stack, oe.stack];
            }
            return [null, null];
          }
        };
        y.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var E = Object.getOwnPropertyDescriptor(
          y.DetermineComponentFrameRoot,
          "name"
        );
        E && E.configurable && Object.defineProperty(
          y.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var F = y.DetermineComponentFrameRoot(), M = F[0], V = F[1];
        if (M && V) {
          var z = M.split(`
`), Z = V.split(`
`);
          for (F = E = 0; E < z.length && !z[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          for (; F < Z.length && !Z[F].includes(
            "DetermineComponentFrameRoot"
          ); )
            F++;
          if (E === z.length || F === Z.length)
            for (E = z.length - 1, F = Z.length - 1; 1 <= E && 0 <= F && z[E] !== Z[F]; )
              F--;
          for (; 1 <= E && 0 <= F; E--, F--)
            if (z[E] !== Z[F]) {
              if (E !== 1 || F !== 1)
                do
                  if (E--, F--, 0 > F || z[E] !== Z[F]) {
                    var le = `
` + z[E].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", t.displayName)), typeof t == "function" && tu.set(t, le), le;
                  }
                while (1 <= E && 0 <= F);
              break;
            }
        }
      } finally {
        us = !1, Nn.H = d, to(), Error.prepareStackTrace = u;
      }
      return z = (z = t ? t.displayName || t.name : "") ? Nl(z) : "", typeof t == "function" && tu.set(t, z), z;
    }
    function Mc(t) {
      if (typeof t == "string")
        return Nl(t);
      if (typeof t == "function")
        return t.prototype && t.prototype.isReactComponent ? ml(t, !0) : ml(t, !1);
      if (typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Qr:
            return ml(t.render, !1);
          case wn:
            return ml(t.type, !1);
          case Kr:
            var r = t, u = r._payload;
            r = r._init;
            try {
              t = r(u);
            } catch {
              return Nl("Lazy");
            }
            return Mc(t);
        }
        if (typeof t.name == "string") {
          e: {
            if (u = t.name, r = t.env, t = t.debugLocation, t != null) {
              t = ro(t);
              var d = t.lastIndexOf(`
`);
              if (t = d === -1 ? t : t.slice(d + 1), t.indexOf(u) !== -1) {
                u = `
` + t;
                break e;
              }
            }
            u = Nl(
              u + (r ? " [" + r + "]" : "")
            );
          }
          return u;
        }
      }
      switch (t) {
        case Vr:
          return Nl("SuspenseList");
        case _r:
          return Nl("Suspense");
      }
      return "";
    }
    function Go(t, r) {
      return (500 < r.byteSize || !1) && r.contentPreamble === null;
    }
    function Xo(t) {
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var r = t.environmentName;
        t = [t].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          "[%s] " + t[0],
          " " + r + " "
        ) : t.splice(0, 0, "[%s]", " " + r + " "), t.unshift(console), r = X.apply(console.error, t), r();
      } else
        console.error(t);
      return null;
    }
    function yt(t, r, u, d, y, E, F, M, V, z, Z) {
      var le = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = t, this.renderState = r, this.rootFormatContext = u, this.progressiveChunkSize = d === void 0 ? 12800 : d, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = le, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = y === void 0 ? Xo : y, this.onPostpone = z === void 0 ? Ue : z, this.onAllReady = E === void 0 ? Ue : E, this.onShellReady = F === void 0 ? Ue : F, this.onShellError = M === void 0 ? Ue : M, this.onFatalError = V === void 0 ? Ue : V, this.formState = Z === void 0 ? null : Z, this.didWarnForKey = null;
    }
    function lo(t, r, u, d, y, E, F, M, V, z, Z, le) {
      var fe = ss();
      return 1e3 < fe - Ps && (Nn.recentlyCreatedOwnerStacks = 0, Ps = fe), r = new yt(
        r,
        u,
        d,
        y,
        E,
        F,
        M,
        V,
        z,
        Z,
        le
      ), u = Er(
        r,
        0,
        null,
        d,
        !1,
        !1
      ), u.parentFlushed = !0, t = Ul(
        r,
        null,
        t,
        -1,
        null,
        u,
        null,
        null,
        r.abortableTasks,
        null,
        d,
        null,
        Na,
        null,
        null,
        ce,
        null
      ), Rr(t), r.pingedTasks.push(t), r;
    }
    function Zo(t, r) {
      t.pingedTasks.push(r), t.pingedTasks.length === 1 && (t.flushScheduled = t.destination !== null, Eu(t));
    }
    function Oc(t, r, u, d, y) {
      return u = {
        status: pi,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        row: r,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: u,
        errorDigest: null,
        contentState: ga(),
        fallbackState: ga(),
        contentPreamble: d,
        fallbackPreamble: y,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      }, r !== null && (r.pendingTasks++, d = r.boundaries, d !== null && (t.allPendingTasks++, u.pendingTasks++, d.push(u)), t = r.inheritedHoistables, t !== null && tl(u.contentState, t)), u;
    }
    function Ul(t, r, u, d, y, E, F, M, V, z, Z, le, fe, oe, j, We, Cn) {
      t.allPendingTasks++, y === null ? t.pendingRootTasks++ : y.pendingTasks++, oe !== null && oe.pendingTasks++;
      var ke = {
        replay: null,
        node: u,
        childIndex: d,
        ping: function() {
          return Zo(t, ke);
        },
        blockedBoundary: y,
        blockedSegment: E,
        blockedPreamble: F,
        hoistableState: M,
        abortSet: V,
        keyPath: z,
        formatContext: Z,
        context: le,
        treeContext: fe,
        row: oe,
        componentStack: j,
        thenableState: r
      };
      return ke.debugTask = Cn, V.add(ke), ke;
    }
    function Jo(t, r, u, d, y, E, F, M, V, z, Z, le, fe, oe, j, We) {
      t.allPendingTasks++, E === null ? t.pendingRootTasks++ : E.pendingTasks++, fe !== null && fe.pendingTasks++, u.pendingTasks++;
      var Cn = {
        replay: u,
        node: d,
        childIndex: y,
        ping: function() {
          return Zo(t, Cn);
        },
        blockedBoundary: E,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: F,
        abortSet: M,
        keyPath: V,
        formatContext: z,
        context: Z,
        treeContext: le,
        row: fe,
        componentStack: oe,
        thenableState: r
      };
      return Cn.debugTask = We, M.add(Cn), Cn;
    }
    function Er(t, r, u, d, y, E) {
      return {
        status: pi,
        parentFlushed: !1,
        id: -1,
        index: r,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: d,
        boundary: u,
        lastPushedText: y,
        textEmbedded: E
      };
    }
    function Rl() {
      if (fl === null || fl.componentStack === null)
        return "";
      var t = fl.componentStack;
      try {
        var r = "";
        if (typeof t.type == "string")
          r += Nl(t.type);
        else if (typeof t.type == "function") {
          if (!t.owner) {
            var u = r, d = t.type, y = d ? d.displayName || d.name : "", E = y ? Nl(y) : "";
            r = u + E;
          }
        } else
          t.owner || (r += Mc(t.type));
        for (; t; )
          u = null, t.debugStack != null ? u = ro(
            t.debugStack
          ) : (E = t, E.stack != null && (u = typeof E.stack != "string" ? E.stack = ro(
            E.stack
          ) : E.stack)), (t = t.owner) && u && (r += `
` + u);
        var F = r;
      } catch (M) {
        F = `
Error generating stack: ` + M.message + `
` + M.stack;
      }
      return F;
    }
    function wu(t, r) {
      if (r != null)
        for (var u = r.length - 1; 0 <= u; u--) {
          var d = r[u];
          if (typeof d.name == "string" || typeof d.time == "number")
            break;
          if (d.awaited != null) {
            var y = d.debugStack == null ? d.awaited : d;
            if (y.debugStack !== void 0) {
              t.componentStack = {
                parent: t.componentStack,
                type: d,
                owner: y.owner,
                stack: y.debugStack
              }, t.debugTask = y.debugTask;
              break;
            }
          }
        }
    }
    function Qo(t, r) {
      if (r != null)
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          typeof d.name == "string" && d.debugStack !== void 0 && (t.componentStack = {
            parent: t.componentStack,
            type: d,
            owner: d.owner,
            stack: d.debugStack
          }, t.debugTask = d.debugTask);
        }
    }
    function Rr(t) {
      var r = t.node;
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Sa:
            var u = r.type, d = r._owner, y = r._debugStack;
            Qo(t, r._debugInfo), t.debugTask = r._debugTask, t.componentStack = {
              parent: t.componentStack,
              type: u,
              owner: d,
              stack: y
            };
            break;
          case Kr:
            Qo(t, r._debugInfo);
            break;
          default:
            typeof r.then == "function" && Qo(t, r._debugInfo);
        }
    }
    function Vo(t) {
      return t === null ? null : {
        parent: t.parent,
        type: "Suspense Fallback",
        owner: t.owner,
        stack: t.stack
      };
    }
    function mi(t) {
      var r = {};
      return t && Object.defineProperty(r, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var u = "", d = t;
            do
              u += Mc(d.type), d = d.parent;
            while (d);
            var y = u;
          } catch (E) {
            y = `
Error generating stack: ` + E.message + `
` + E.stack;
          }
          return Object.defineProperty(r, "componentStack", {
            value: y
          }), y;
        }
      }), r;
    }
    function io(t, r, u, d, y) {
      t.errorDigest = r, u instanceof Error ? (r = String(u.message), u = String(u.stack)) : (r = typeof u == "object" && u !== null ? vn(u) : String(u), u = null), y = y ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, t.errorMessage = y + r, t.errorStack = u !== null ? y + u : null, t.errorComponentStack = d.componentStack;
    }
    function Cr(t, r, u, d) {
      if (t = t.onError, r = d ? d.run(t.bind(null, r, u)) : t(r, u), r != null && typeof r != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof r
        );
      else
        return r;
    }
    function Ct(t, r, u, d) {
      u = t.onShellError;
      var y = t.onFatalError;
      d ? (d.run(u.bind(null, r)), d.run(y.bind(null, r))) : (u(r), y(r)), t.destination !== null ? (t.status = Ai, t.destination.destroy(r)) : (t.status = 13, t.fatalError = r);
    }
    function kn(t, r) {
      Tu(t, r.next, r.hoistables);
    }
    function Tu(t, r, u) {
      for (; r !== null; ) {
        u !== null && (tl(r.hoistables, u), r.inheritedHoistables = u);
        var d = r.boundaries;
        if (d !== null) {
          r.boundaries = null;
          for (var y = 0; y < d.length; y++) {
            var E = d[y];
            u !== null && tl(
              E.contentState,
              u
            ), Sl(t, E, null, null);
          }
        }
        if (r.pendingTasks--, 0 < r.pendingTasks)
          break;
        u = r.hoistables, r = r.next;
      }
    }
    function fi(t, r) {
      var u = r.boundaries;
      if (u !== null && r.pendingTasks === u.length) {
        for (var d = !0, y = 0; y < u.length; y++) {
          var E = u[y];
          if (E.pendingTasks !== 1 || E.parentFlushed || Go(t, E)) {
            d = !1;
            break;
          }
        }
        d && Tu(t, r, r.hoistables);
      }
    }
    function Cl(t) {
      var r = {
        pendingTasks: 1,
        boundaries: null,
        hoistables: ga(),
        inheritedHoistables: null,
        together: !1,
        next: null
      };
      return t !== null && 0 < t.pendingTasks && (r.pendingTasks++, r.boundaries = [], t.next = r), r;
    }
    function xu(t, r, u, d, y) {
      var E = r.keyPath, F = r.treeContext, M = r.row, V = r.componentStack, z = r.debugTask;
      Qo(r, r.node.props.children._debugInfo), r.keyPath = u, u = d.length;
      var Z = null;
      if (r.replay !== null) {
        var le = r.replay.slots;
        if (le !== null && typeof le == "object")
          for (var fe = 0; fe < u; fe++) {
            var oe = y !== "backwards" && y !== "unstable_legacy-backwards" ? fe : u - 1 - fe, j = d[oe];
            r.row = Z = Cl(
              Z
            ), r.treeContext = Ke(F, u, oe);
            var We = le[oe];
            typeof We == "number" ? (di(t, r, We, j, oe), delete le[oe]) : it(t, r, j, oe), --Z.pendingTasks === 0 && kn(t, Z);
          }
        else
          for (le = 0; le < u; le++)
            fe = y !== "backwards" && y !== "unstable_legacy-backwards" ? le : u - 1 - le, oe = d[fe], lt(t, r, oe), r.row = Z = Cl(Z), r.treeContext = Ke(F, u, fe), it(t, r, oe, fe), --Z.pendingTasks === 0 && kn(t, Z);
      } else if (y !== "backwards" && y !== "unstable_legacy-backwards")
        for (y = 0; y < u; y++)
          le = d[y], lt(t, r, le), r.row = Z = Cl(Z), r.treeContext = Ke(
            F,
            u,
            y
          ), it(t, r, le, y), --Z.pendingTasks === 0 && kn(t, Z);
      else {
        for (y = r.blockedSegment, le = y.children.length, fe = y.chunks.length, oe = u - 1; 0 <= oe; oe--) {
          j = d[oe], r.row = Z = Cl(
            Z
          ), r.treeContext = Ke(F, u, oe), We = Er(
            t,
            fe,
            null,
            r.formatContext,
            oe === 0 ? y.lastPushedText : !0,
            !0
          ), y.children.splice(le, 0, We), r.blockedSegment = We, lt(t, r, j);
          try {
            it(t, r, j, oe), ya(
              We.chunks,
              t.renderState,
              We.lastPushedText,
              We.textEmbedded
            ), We.status = sr, --Z.pendingTasks === 0 && kn(t, Z);
          } catch (Cn) {
            throw We.status = t.status === 12 ? hl : un, Cn;
          }
        }
        r.blockedSegment = y, y.lastPushedText = !1;
      }
      M !== null && Z !== null && 0 < Z.pendingTasks && (M.pendingTasks++, Z.next = M), r.treeContext = F, r.row = M, r.keyPath = E, r.componentStack = V, r.debugTask = z;
    }
    function hi(t, r, u, d, y, E) {
      var F = r.thenableState;
      for (r.thenableState = null, pr = {}, Co = r, ur = t, Ua = u, ql = !1, Ya = Vc = 0, Kc = -1, qc = 0, So = F, t = Bu(d, y, E); Ol; )
        Ol = !1, Ya = Vc = 0, Kc = -1, qc = 0, jc += 1, Dn = null, t = d(y, E);
      return mt(), t;
    }
    function Yl(t, r, u, d, y, E, F) {
      var M = !1;
      if (E !== 0 && t.formState !== null) {
        var V = r.blockedSegment;
        if (V !== null) {
          M = !0, V = V.chunks;
          for (var z = 0; z < E; z++)
            z === F ? V.push("<!--F!-->") : V.push("<!--F-->");
        }
      }
      E = r.keyPath, r.keyPath = u, y ? (u = r.treeContext, r.treeContext = Ke(u, 1, 0), it(t, r, d, -1), r.treeContext = u) : M ? it(t, r, d, -1) : Oe(t, r, d, -1), r.keyPath = E;
    }
    function ao(t, r, u, d, y, E) {
      if (typeof d == "function")
        if (d.prototype && d.prototype.isReactComponent) {
          var F = y;
          if ("ref" in y) {
            F = {};
            for (var M in y)
              M !== "ref" && (F[M] = y[M]);
          }
          var V = d.defaultProps;
          if (V) {
            F === y && (F = On({}, F, y));
            for (var z in V)
              F[z] === void 0 && (F[z] = V[z]);
          }
          var Z = F, le = ce, fe = d.contextType;
          if ("contextType" in d && fe !== null && (fe === void 0 || fe.$$typeof !== Jr) && !Fr.has(d)) {
            Fr.add(d);
            var oe = fe === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof fe != "object" ? " However, it is set to a " + typeof fe + "." : fe.$$typeof === Dc ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(fe).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              Qn(d) || "Component",
              oe
            );
          }
          typeof fe == "object" && fe !== null && (le = fe._currentValue2);
          var j = new d(Z, le);
          if (typeof d.getDerivedStateFromProps == "function" && (j.state === null || j.state === void 0)) {
            var We = Qn(d) || "Component";
            Pn.has(We) || (Pn.add(We), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              We,
              j.state === null ? "null" : "undefined",
              We
            ));
          }
          if (typeof d.getDerivedStateFromProps == "function" || typeof j.getSnapshotBeforeUpdate == "function") {
            var Cn = null, ke = null, tn = null;
            if (typeof j.componentWillMount == "function" && j.componentWillMount.__suppressDeprecationWarning !== !0 ? Cn = "componentWillMount" : typeof j.UNSAFE_componentWillMount == "function" && (Cn = "UNSAFE_componentWillMount"), typeof j.componentWillReceiveProps == "function" && j.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ke = "componentWillReceiveProps" : typeof j.UNSAFE_componentWillReceiveProps == "function" && (ke = "UNSAFE_componentWillReceiveProps"), typeof j.componentWillUpdate == "function" && j.componentWillUpdate.__suppressDeprecationWarning !== !0 ? tn = "componentWillUpdate" : typeof j.UNSAFE_componentWillUpdate == "function" && (tn = "UNSAFE_componentWillUpdate"), Cn !== null || ke !== null || tn !== null) {
              var Xt = Qn(d) || "Component", Zt = typeof d.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              Dr.has(Xt) || (Dr.add(
                Xt
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                Xt,
                Zt,
                Cn !== null ? `
  ` + Cn : "",
                ke !== null ? `
  ` + ke : "",
                tn !== null ? `
  ` + tn : ""
              ));
            }
          }
          var an = Qn(d) || "Component";
          j.render || (d.prototype && typeof d.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            an
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            an
          )), !j.getInitialState || j.getInitialState.isReactClassApproved || j.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            an
          ), j.getDefaultProps && !j.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            an
          ), j.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            an
          ), d.childContextTypes && !$n.has(d) && ($n.add(d), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            an
          )), d.contextTypes && !ar.has(d) && (ar.add(d), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            an
          )), typeof j.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            an
          ), d.prototype && d.prototype.isPureReactComponent && typeof j.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Qn(d) || "A pure component"
          ), typeof j.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            an
          ), typeof j.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            an
          ), typeof j.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            an
          ), typeof j.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            an
          );
          var Ft = j.props !== Z;
          j.props !== void 0 && Ft && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            an
          ), j.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            an,
            an
          ), typeof j.getSnapshotBeforeUpdate != "function" || typeof j.componentDidUpdate == "function" || Gt.has(d) || (Gt.add(d), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Qn(d)
          )), typeof j.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            an
          ), typeof j.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            an
          ), typeof d.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            an
          );
          var $l = j.state;
          $l && (typeof $l != "object" || Ti($l)) && console.error("%s.state: must be set to an object or null", an), typeof j.getChildContext == "function" && typeof d.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            an
          );
          var Ar = j.state !== void 0 ? j.state : null;
          j.updater = Gn, j.props = Z, j.state = Ar;
          var de = { queue: [], replace: !1 };
          j._reactInternals = de;
          var hn = d.contextType;
          if (j.context = typeof hn == "object" && hn !== null ? hn._currentValue2 : ce, j.state === Z) {
            var dn = Qn(d) || "Component";
            ul.has(
              dn
            ) || (ul.add(
              dn
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              dn
            ));
          }
          var Tn = d.getDerivedStateFromProps;
          if (typeof Tn == "function") {
            var Xn = Tn(
              Z,
              Ar
            );
            if (Xn === void 0) {
              var Ze = Qn(d) || "Component";
              pe.has(Ze) || (pe.add(Ze), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                Ze
              ));
            }
            var De = Xn == null ? Ar : On({}, Ar, Xn);
            j.state = De;
          }
          if (typeof d.getDerivedStateFromProps != "function" && typeof j.getSnapshotBeforeUpdate != "function" && (typeof j.UNSAFE_componentWillMount == "function" || typeof j.componentWillMount == "function")) {
            var fr = j.state;
            if (typeof j.componentWillMount == "function") {
              if (j.componentWillMount.__suppressDeprecationWarning !== !0) {
                var gn = Qn(d) || "Unknown";
                Yn[gn] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  gn
                ), Yn[gn] = !0);
              }
              j.componentWillMount();
            }
            if (typeof j.UNSAFE_componentWillMount == "function" && j.UNSAFE_componentWillMount(), fr !== j.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Qn(d) || "Component"
            ), Gn.enqueueReplaceState(
              j,
              j.state,
              null
            )), de.queue !== null && 0 < de.queue.length) {
              var Jt = de.queue, Ln = de.replace;
              if (de.queue = null, de.replace = !1, Ln && Jt.length === 1)
                j.state = Jt[0];
              else {
                for (var zr = Ln ? Jt[0] : j.state, Ao = !0, Br = Ln ? 1 : 0; Br < Jt.length; Br++) {
                  var ei = Jt[Br], ni = typeof ei == "function" ? ei.call(
                    j,
                    zr,
                    Z,
                    void 0
                  ) : ei;
                  ni != null && (Ao ? (Ao = !1, zr = On(
                    {},
                    zr,
                    ni
                  )) : On(zr, ni));
                }
                j.state = zr;
              }
            } else
              de.queue = null;
          }
          var ti = ru(j);
          if (t.status === 12)
            throw null;
          j.props !== Z && (Ja || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Qn(d) || "a component"
          ), Ja = !0);
          var zt = r.keyPath;
          r.keyPath = u, Oe(t, r, ti, -1), r.keyPath = zt;
        } else {
          if (d.prototype && typeof d.prototype.render == "function") {
            var e = Qn(d) || "Unknown";
            gc[e] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              e,
              e
            ), gc[e] = !0);
          }
          var n = hi(
            t,
            r,
            u,
            d,
            y,
            void 0
          );
          if (t.status === 12)
            throw null;
          var c = Vc !== 0, h = Ya, b = Kc;
          if (d.contextTypes) {
            var x = Qn(d) || "Unknown";
            lu[x] || (lu[x] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              x
            ));
          }
          if (d && d.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            d.displayName || d.name || "Component"
          ), typeof d.getDerivedStateFromProps == "function") {
            var S = Qn(d) || "Unknown";
            po[S] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              S
            ), po[S] = !0);
          }
          if (typeof d.contextType == "object" && d.contextType !== null) {
            var A = Qn(d) || "Unknown";
            fs[A] || (console.error(
              "%s: Function components do not support contextType.",
              A
            ), fs[A] = !0);
          }
          Yl(
            t,
            r,
            u,
            n,
            c,
            h,
            b
          );
        }
      else if (typeof d == "string") {
        var G = r.blockedSegment;
        if (G === null) {
          var O = y.children, B = r.formatContext, ee = r.keyPath;
          r.formatContext = zo(B, d, y), r.keyPath = u, it(t, r, O, -1), r.formatContext = B, r.keyPath = ee;
        } else {
          var te = on(
            G.chunks,
            d,
            y,
            t.resumableState,
            t.renderState,
            r.blockedPreamble,
            r.hoistableState,
            r.formatContext,
            G.lastPushedText
          );
          G.lastPushedText = !1;
          var ne = r.formatContext, q = r.keyPath;
          if (r.keyPath = u, (r.formatContext = zo(
            ne,
            d,
            y
          )).insertionMode === Ie) {
            var Re = Er(
              t,
              0,
              null,
              r.formatContext,
              !1,
              !1
            );
            G.preambleChildren.push(Re), r.blockedSegment = Re;
            try {
              Re.status = 6, it(t, r, te, -1), ya(
                Re.chunks,
                t.renderState,
                Re.lastPushedText,
                Re.textEmbedded
              ), Re.status = sr;
            } finally {
              r.blockedSegment = G;
            }
          } else
            it(t, r, te, -1);
          r.formatContext = ne, r.keyPath = q;
          e: {
            var xn = G.chunks, we = t.resumableState;
            switch (d) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break e;
              case "body":
                if (ne.insertionMode <= Pe) {
                  we.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (ne.insertionMode === Le) {
                  we.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (ne.insertionMode <= Pe)
                  break e;
            }
            xn.push(Rt(d));
          }
          G.lastPushedText = !1;
        }
      } else {
        switch (d) {
          case Lc:
          case qo:
          case jo:
          case Zl:
            var Ne = r.keyPath;
            r.keyPath = u, Oe(t, r, y.children, -1), r.keyPath = Ne;
            return;
          case Fl:
            var Vn = r.blockedSegment;
            if (Vn === null) {
              if (y.mode !== "hidden") {
                var st = r.keyPath;
                r.keyPath = u, it(t, r, y.children, -1), r.keyPath = st;
              }
            } else if (y.mode !== "hidden") {
              t.renderState.generateStaticMarkup || Vn.chunks.push("<!--&-->"), Vn.lastPushedText = !1;
              var rn = r.keyPath;
              r.keyPath = u, it(t, r, y.children, -1), r.keyPath = rn, t.renderState.generateStaticMarkup || Vn.chunks.push("<!--/&-->"), Vn.lastPushedText = !1;
            }
            return;
          case Vr:
            e: {
              var ye = y.children, ft = y.revealOrder;
              if (ft === "forwards" || ft === "backwards" || ft === "unstable_legacy-backwards") {
                if (Ti(ye)) {
                  xu(
                    t,
                    r,
                    u,
                    ye,
                    ft
                  );
                  break e;
                }
                var hr = _(ye);
                if (hr) {
                  var En = hr.call(ye);
                  if (En) {
                    oo(
                      r,
                      ye,
                      -1,
                      En,
                      hr
                    );
                    var zn = En.next();
                    if (!zn.done) {
                      var Hr = [];
                      do
                        Hr.push(zn.value), zn = En.next();
                      while (!zn.done);
                      xu(
                        t,
                        r,
                        u,
                        ye,
                        ft
                      );
                    }
                    break e;
                  }
                }
              }
              if (ft === "together") {
                var Qt = r.keyPath, pt = r.row, Bn = r.row = Cl(null);
                Bn.boundaries = [], Bn.together = !0, r.keyPath = u, Oe(t, r, ye, -1), --Bn.pendingTasks === 0 && kn(t, Bn), r.keyPath = Qt, r.row = pt, pt !== null && 0 < Bn.pendingTasks && (pt.pendingTasks++, Bn.next = pt);
              } else {
                var xt = r.keyPath;
                r.keyPath = u, Oe(t, r, ye, -1), r.keyPath = xt;
              }
            }
            return;
          case Bc:
          case Mn:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case _r:
            e:
              if (r.replay !== null) {
                var Wr = r.keyPath, nl = r.formatContext, At = r.row;
                r.keyPath = u, r.formatContext = Mt(
                  t.resumableState,
                  nl
                ), r.row = null;
                var Zn = y.children;
                try {
                  it(t, r, Zn, -1);
                } finally {
                  r.keyPath = Wr, r.formatContext = nl, r.row = At;
                }
              } else {
                var dr = r.keyPath, Nr = r.formatContext, gr = r.row, Ii = r.blockedBoundary, mr = r.blockedPreamble, ht = r.hoistableState, dl = r.blockedSegment, Bt = y.fallback, Hu = y.children, ri = /* @__PURE__ */ new Set(), Kn = Oc(
                  t,
                  r.row,
                  ri,
                  null,
                  null
                );
                t.trackedPostpones !== null && (Kn.trackedContentKeyPath = u);
                var gl = Er(
                  t,
                  dl.chunks.length,
                  Kn,
                  r.formatContext,
                  !1,
                  !1
                );
                dl.children.push(gl), dl.lastPushedText = !1;
                var vr = Er(
                  t,
                  0,
                  null,
                  r.formatContext,
                  !1,
                  !1
                );
                if (vr.parentFlushed = !0, t.trackedPostpones !== null) {
                  var yc = r.componentStack, Io = [
                    u[0],
                    "Suspense Fallback",
                    u[2]
                  ], Dl = [
                    Io[1],
                    Io[2],
                    [],
                    null
                  ];
                  t.trackedPostpones.workingMap.set(
                    Io,
                    Dl
                  ), Kn.trackedFallbackNode = Dl, r.blockedSegment = gl, r.blockedPreamble = Kn.fallbackPreamble, r.keyPath = Io, r.formatContext = Li(
                    t.resumableState,
                    Nr
                  ), r.componentStack = Vo(
                    yc
                  ), gl.status = 6;
                  try {
                    it(t, r, Bt, -1), ya(
                      gl.chunks,
                      t.renderState,
                      gl.lastPushedText,
                      gl.textEmbedded
                    ), gl.status = sr;
                  } catch (iu) {
                    throw gl.status = t.status === 12 ? hl : un, iu;
                  } finally {
                    r.blockedSegment = dl, r.blockedPreamble = mr, r.keyPath = dr, r.formatContext = Nr;
                  }
                  var Mo = Ul(
                    t,
                    null,
                    Hu,
                    -1,
                    Kn,
                    vr,
                    Kn.contentPreamble,
                    Kn.contentState,
                    r.abortSet,
                    u,
                    Mt(
                      t.resumableState,
                      r.formatContext
                    ),
                    r.context,
                    r.treeContext,
                    null,
                    yc,
                    ce,
                    r.debugTask
                  );
                  Rr(Mo), t.pingedTasks.push(Mo);
                } else {
                  r.blockedBoundary = Kn, r.blockedPreamble = Kn.contentPreamble, r.hoistableState = Kn.contentState, r.blockedSegment = vr, r.keyPath = u, r.formatContext = Mt(
                    t.resumableState,
                    Nr
                  ), r.row = null, vr.status = 6;
                  try {
                    if (it(t, r, Hu, -1), ya(
                      vr.chunks,
                      t.renderState,
                      vr.lastPushedText,
                      vr.textEmbedded
                    ), vr.status = sr, ka(Kn, vr), Kn.pendingTasks === 0 && Kn.status === pi) {
                      if (Kn.status = sr, !Go(t, Kn)) {
                        gr !== null && --gr.pendingTasks === 0 && kn(t, gr), t.pendingRootTasks === 0 && r.blockedPreamble && co(t);
                        break e;
                      }
                    } else
                      gr !== null && gr.together && fi(t, gr);
                  } catch (iu) {
                    if (Kn.status = Lt, t.status === 12) {
                      vr.status = hl;
                      var Ur = t.fatalError;
                    } else
                      vr.status = un, Ur = iu;
                    var wc = mi(r.componentStack), Wu = Cr(
                      t,
                      Ur,
                      wc,
                      r.debugTask
                    );
                    io(
                      Kn,
                      Wu,
                      Ur,
                      wc,
                      !1
                    ), Ea(t, Kn);
                  } finally {
                    r.blockedBoundary = Ii, r.blockedPreamble = mr, r.hoistableState = ht, r.blockedSegment = dl, r.keyPath = dr, r.formatContext = Nr, r.row = gr;
                  }
                  var vl = Ul(
                    t,
                    null,
                    Bt,
                    -1,
                    Ii,
                    gl,
                    Kn.fallbackPreamble,
                    Kn.fallbackState,
                    ri,
                    [u[0], "Suspense Fallback", u[2]],
                    Li(
                      t.resumableState,
                      r.formatContext
                    ),
                    r.context,
                    r.treeContext,
                    r.row,
                    Vo(
                      r.componentStack
                    ),
                    ce,
                    r.debugTask
                  );
                  Rr(vl), t.pingedTasks.push(vl);
                }
              }
            return;
        }
        if (typeof d == "object" && d !== null)
          switch (d.$$typeof) {
            case Qr:
              if ("ref" in y) {
                var Tc = {};
                for (var br in y)
                  br !== "ref" && (Tc[br] = y[br]);
              } else
                Tc = y;
              var Oo = hi(
                t,
                r,
                u,
                d.render,
                Tc,
                E
              );
              Yl(
                t,
                r,
                u,
                Oo,
                Vc !== 0,
                Ya,
                Kc
              );
              return;
            case wn:
              ao(t, r, u, d.type, y, E);
              return;
            case Jr:
              var Va = y.value, ua = y.children, bl = r.context, yl = r.keyPath, li = d._currentValue2;
              d._currentValue2 = Va, d._currentRenderer2 !== void 0 && d._currentRenderer2 !== null && d._currentRenderer2 !== Ye && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), d._currentRenderer2 = Ye;
              var Yr = Fe, Vt = {
                parent: Yr,
                depth: Yr === null ? 0 : Yr.depth + 1,
                context: d,
                parentValue: li,
                value: Va
              };
              Fe = Vt, r.context = Vt, r.keyPath = u, Oe(t, r, ua, -1);
              var sa = Fe;
              if (sa === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              sa.context !== d && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), sa.context._currentValue2 = sa.parentValue, d._currentRenderer2 !== void 0 && d._currentRenderer2 !== null && d._currentRenderer2 !== Ye && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), d._currentRenderer2 = Ye;
              var ii = Fe = sa.parent;
              r.context = ii, r.keyPath = yl, bl !== r.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case Dc:
              var Ka = d._context, Mi = y.children;
              typeof Mi != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var hs = Mi(Ka._currentValue2), Ir = r.keyPath;
              r.keyPath = u, Oe(t, r, hs, -1), r.keyPath = Ir;
              return;
            case Kr:
              var Ll = Ss(d);
              if (t.status === 12)
                throw null;
              ao(t, r, u, Ll, y, E);
              return;
          }
        var xc = "";
        throw (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (xc += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((d == null ? d : typeof d) + "." + xc)
        );
      }
    }
    function di(t, r, u, d, y) {
      var E = r.replay, F = r.blockedBoundary, M = Er(
        t,
        0,
        null,
        r.formatContext,
        !1,
        !1
      );
      M.id = u, M.parentFlushed = !0;
      try {
        r.replay = null, r.blockedSegment = M, it(t, r, d, y), M.status = sr, F === null ? t.completedRootSegment = M : (ka(F, M), F.parentFlushed && t.partialBoundaries.push(F));
      } finally {
        r.replay = E, r.blockedSegment = null;
      }
    }
    function gi(t, r, u, d, y, E, F, M, V, z) {
      E = z.nodes;
      for (var Z = 0; Z < E.length; Z++) {
        var le = E[Z];
        if (y === le[1]) {
          if (le.length === 4) {
            if (d !== null && d !== le[0])
              throw Error(
                "Expected the resume to render <" + le[0] + "> in this slot but instead it rendered <" + d + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var fe = le[2];
            d = le[3], y = r.node, r.replay = { nodes: fe, slots: d, pendingTasks: 1 };
            try {
              if (ao(t, r, u, F, M, V), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (Ft) {
              if (typeof Ft == "object" && Ft !== null && (Ft === cr || typeof Ft.then == "function"))
                throw r.node === y ? r.replay = z : E.splice(Z, 1), Ft;
              r.replay.pendingTasks--, F = mi(r.componentStack), M = t, t = r.blockedBoundary, u = Ft, V = d, d = Cr(M, u, F, r.debugTask), yi(
                M,
                t,
                fe,
                V,
                u,
                d,
                F,
                !1
              );
            }
            r.replay = z;
          } else {
            if (F !== _r)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Qn(F) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              z = void 0, d = le[5], F = le[2], V = le[3], y = le[4] === null ? [] : le[4][2], le = le[4] === null ? null : le[4][3];
              var oe = r.keyPath, j = r.formatContext, We = r.row, Cn = r.replay, ke = r.blockedBoundary, tn = r.hoistableState, Xt = M.children, Zt = M.fallback, an = /* @__PURE__ */ new Set();
              M = Oc(
                t,
                r.row,
                an,
                null,
                null
              ), M.parentFlushed = !0, M.rootSegmentID = d, r.blockedBoundary = M, r.hoistableState = M.contentState, r.keyPath = u, r.formatContext = Mt(
                t.resumableState,
                j
              ), r.row = null, r.replay = { nodes: F, slots: V, pendingTasks: 1 };
              try {
                if (it(t, r, Xt, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (r.replay.pendingTasks--, M.pendingTasks === 0 && M.status === pi) {
                  M.status = sr, t.completedBoundaries.push(M);
                  break e;
                }
              } catch (Ft) {
                M.status = Lt, fe = mi(r.componentStack), z = Cr(
                  t,
                  Ft,
                  fe,
                  r.debugTask
                ), io(M, z, Ft, fe, !1), r.replay.pendingTasks--, t.clientRenderedBoundaries.push(M);
              } finally {
                r.blockedBoundary = ke, r.hoistableState = tn, r.replay = Cn, r.keyPath = oe, r.formatContext = j, r.row = We;
              }
              M = Jo(
                t,
                null,
                { nodes: y, slots: le, pendingTasks: 0 },
                Zt,
                -1,
                ke,
                M.fallbackState,
                an,
                [u[0], "Suspense Fallback", u[2]],
                Li(
                  t.resumableState,
                  r.formatContext
                ),
                r.context,
                r.treeContext,
                r.row,
                Vo(
                  r.componentStack
                ),
                ce,
                r.debugTask
              ), Rr(M), t.pingedTasks.push(M);
            }
          }
          E.splice(Z, 1);
          break;
        }
      }
    }
    function oo(t, r, u, d, y) {
      d === r ? (u !== -1 || t.componentStack === null || typeof t.componentStack.type != "function" || Object.prototype.toString.call(t.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(d) !== "[object Generator]") && (vc || console.error(
        "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
      ), vc = !0) : r.entries !== y || _l || (console.error(
        "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
      ), _l = !0);
    }
    function Oe(t, r, u, d) {
      r.replay !== null && typeof r.replay.slots == "number" ? di(t, r, r.replay.slots, u, d) : (r.node = u, r.childIndex = d, u = r.componentStack, d = r.debugTask, Rr(r), kl(t, r), r.componentStack = u, r.debugTask = d);
    }
    function kl(t, r) {
      var u = r.node, d = r.childIndex;
      if (u !== null) {
        if (typeof u == "object") {
          switch (u.$$typeof) {
            case Sa:
              var y = u.type, E = u.key;
              u = u.props;
              var F = u.ref;
              F = F !== void 0 ? F : null;
              var M = r.debugTask, V = Qn(y);
              E = E ?? (d === -1 ? 0 : d);
              var z = [r.keyPath, V, E];
              r.replay !== null ? M ? M.run(
                gi.bind(
                  null,
                  t,
                  r,
                  z,
                  V,
                  E,
                  d,
                  y,
                  u,
                  F,
                  r.replay
                )
              ) : gi(
                t,
                r,
                z,
                V,
                E,
                d,
                y,
                u,
                F,
                r.replay
              ) : M ? M.run(
                ao.bind(
                  null,
                  t,
                  r,
                  z,
                  y,
                  u,
                  F
                )
              ) : ao(t, r, z, y, u, F);
              return;
            case at:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case Kr:
              if (y = Ss(u), t.status === 12)
                throw null;
              Oe(t, r, y, d);
              return;
          }
          if (Ti(u)) {
            Gl(t, r, u, d);
            return;
          }
          if ((E = _(u)) && (y = E.call(u))) {
            if (oo(r, u, d, y, E), u = y.next(), !u.done) {
              E = [];
              do
                E.push(u.value), u = y.next();
              while (!u.done);
              Gl(t, r, E, d);
            }
            return;
          }
          if (typeof u.then == "function")
            return r.thenableState = null, Oe(
              t,
              r,
              Zr(u),
              d
            );
          if (u.$$typeof === Jr)
            return Oe(
              t,
              r,
              u._currentValue2,
              d
            );
          throw t = Object.prototype.toString.call(u), Error(
            "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof u == "string" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = Ju(
          r.chunks,
          u,
          t.renderState,
          r.lastPushedText
        ))) : typeof u == "number" || typeof u == "bigint" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = Ju(
          r.chunks,
          "" + u,
          t.renderState,
          r.lastPushedText
        ))) : (typeof u == "function" && (t = u.displayName || u.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          t,
          t
        )), typeof u == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(u)
        ));
      }
    }
    function lt(t, r, u) {
      if (u !== null && typeof u == "object" && (u.$$typeof === Sa || u.$$typeof === at) && u._store && (!u._store.validated && u.key == null || u._store.validated === 2)) {
        if (typeof u._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        u._store.validated = 1;
        var d = t.didWarnForKey;
        if (d == null && (d = t.didWarnForKey = /* @__PURE__ */ new WeakSet()), t = r.componentStack, t !== null && !d.has(t)) {
          d.add(t);
          var y = Qn(u.type);
          d = u._owner;
          var E = t.owner;
          if (t = "", E && typeof E.type < "u") {
            var F = Qn(E.type);
            F && (t = `

Check the render method of \`` + F + "`.");
          }
          t || y && (t = `

Check the top-level render call using <` + y + ">."), y = "", d != null && E !== d && (E = null, typeof d.type < "u" ? E = Qn(d.type) : typeof d.name == "string" && (E = d.name), E && (y = " It was passed a child from " + E + ".")), d = r.componentStack, r.componentStack = {
            parent: r.componentStack,
            type: u.type,
            owner: u._owner,
            stack: u._debugStack
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            t,
            y
          ), r.componentStack = d;
        }
      }
    }
    function Gl(t, r, u, d) {
      var y = r.keyPath, E = r.componentStack, F = r.debugTask;
      if (Qo(r, r.node._debugInfo), d !== -1 && (r.keyPath = [r.keyPath, "Fragment", d], r.replay !== null)) {
        for (var M = r.replay, V = M.nodes, z = 0; z < V.length; z++) {
          var Z = V[z];
          if (Z[1] === d) {
            d = Z[2], Z = Z[3], r.replay = { nodes: d, slots: Z, pendingTasks: 1 };
            try {
              if (Gl(t, r, u, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (j) {
              if (typeof j == "object" && j !== null && (j === cr || typeof j.then == "function"))
                throw j;
              r.replay.pendingTasks--;
              var le = mi(r.componentStack);
              u = r.blockedBoundary;
              var fe = j, oe = Z;
              Z = Cr(
                t,
                fe,
                le,
                r.debugTask
              ), yi(
                t,
                u,
                d,
                oe,
                fe,
                Z,
                le,
                !1
              );
            }
            r.replay = M, V.splice(z, 1);
            break;
          }
        }
        r.keyPath = y, r.componentStack = E, r.debugTask = F;
        return;
      }
      if (M = r.treeContext, V = u.length, r.replay !== null && (z = r.replay.slots, z !== null && typeof z == "object")) {
        for (d = 0; d < V; d++)
          Z = u[d], r.treeContext = Ke(
            M,
            V,
            d
          ), fe = z[d], typeof fe == "number" ? (di(t, r, fe, Z, d), delete z[d]) : it(t, r, Z, d);
        r.treeContext = M, r.keyPath = y, r.componentStack = E, r.debugTask = F;
        return;
      }
      for (z = 0; z < V; z++)
        d = u[z], lt(t, r, d), r.treeContext = Ke(M, V, z), it(t, r, d, z);
      r.treeContext = M, r.keyPath = y, r.componentStack = E, r.debugTask = F;
    }
    function wt(t, r, u) {
      if (u.status = Lr, u.rootSegmentID = t.nextSegmentId++, t = u.trackedContentKeyPath, t === null)
        throw Error(
          "It should not be possible to postpone at the root. This is a bug in React."
        );
      var d = u.trackedFallbackNode, y = [], E = r.workingMap.get(t);
      return E === void 0 ? (u = [
        t[1],
        t[2],
        y,
        null,
        d,
        u.rootSegmentID
      ], r.workingMap.set(t, u), Pl(u, t[0], r), u) : (E[4] = d, E[5] = u.rootSegmentID, E);
    }
    function Ui(t, r, u, d) {
      d.status = Lr;
      var y = u.keyPath, E = u.blockedBoundary;
      if (E === null)
        d.id = t.nextSegmentId++, r.rootSlots = d.id, t.completedRootSegment !== null && (t.completedRootSegment.status = Lr);
      else {
        if (E !== null && E.status === pi) {
          var F = wt(
            t,
            r,
            E
          );
          if (E.trackedContentKeyPath === y && u.childIndex === -1) {
            d.id === -1 && (d.id = d.parentFlushed ? E.rootSegmentID : t.nextSegmentId++), F[3] = d.id;
            return;
          }
        }
        if (d.id === -1 && (d.id = d.parentFlushed && E !== null ? E.rootSegmentID : t.nextSegmentId++), u.childIndex === -1)
          y === null ? r.rootSlots = d.id : (u = r.workingMap.get(y), u === void 0 ? (u = [y[1], y[2], [], d.id], Pl(u, y[0], r)) : u[3] = d.id);
        else {
          if (y === null) {
            if (t = r.rootSlots, t === null)
              t = r.rootSlots = {};
            else if (typeof t == "number")
              throw Error(
                "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
              );
          } else if (E = r.workingMap, F = E.get(y), F === void 0)
            t = {}, F = [y[1], y[2], [], t], E.set(y, F), Pl(F, y[0], r);
          else if (t = F[3], t === null)
            t = F[3] = {};
          else if (typeof t == "number")
            throw Error(
              "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
            );
          t[u.childIndex] = d.id;
        }
      }
    }
    function Ea(t, r) {
      t = t.trackedPostpones, t !== null && (r = r.trackedContentKeyPath, r !== null && (r = t.workingMap.get(r), r !== void 0 && (r.length = 4, r[2] = [], r[3] = null)));
    }
    function Xl(t, r, u) {
      return Jo(
        t,
        u,
        r.replay,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.row,
        r.componentStack,
        ce,
        r.debugTask
      );
    }
    function vi(t, r, u) {
      var d = r.blockedSegment, y = Er(
        t,
        d.chunks.length,
        null,
        r.formatContext,
        d.lastPushedText,
        !0
      );
      return d.children.push(y), d.lastPushedText = !1, Ul(
        t,
        u,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        y,
        r.blockedPreamble,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.row,
        r.componentStack,
        ce,
        r.debugTask
      );
    }
    function it(t, r, u, d) {
      var y = r.formatContext, E = r.context, F = r.keyPath, M = r.treeContext, V = r.componentStack, z = r.debugTask, Z = r.blockedSegment;
      if (Z === null) {
        Z = r.replay;
        try {
          return Oe(t, r, u, d);
        } catch (oe) {
          if (mt(), u = oe === cr ? Uo() : oe, t.status !== 12 && typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              d = oe === cr ? El() : null, t = Xl(
                t,
                r,
                d
              ).ping, u.then(t, t), r.formatContext = y, r.context = E, r.keyPath = F, r.treeContext = M, r.componentStack = V, r.replay = Z, r.debugTask = z, yn(E);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              u = oe === cr ? El() : null, u = Xl(t, r, u), t.pingedTasks.push(u), r.formatContext = y, r.context = E, r.keyPath = F, r.treeContext = M, r.componentStack = V, r.replay = Z, r.debugTask = z, yn(E);
              return;
            }
          }
        }
      } else {
        var le = Z.children.length, fe = Z.chunks.length;
        try {
          return Oe(t, r, u, d);
        } catch (oe) {
          if (mt(), Z.children.length = le, Z.chunks.length = fe, u = oe === cr ? Uo() : oe, t.status !== 12 && typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              Z = u, u = oe === cr ? El() : null, t = vi(t, r, u).ping, Z.then(t, t), r.formatContext = y, r.context = E, r.keyPath = F, r.treeContext = M, r.componentStack = V, r.debugTask = z, yn(E);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              Z = oe === cr ? El() : null, Z = vi(t, r, Z), t.pingedTasks.push(Z), r.formatContext = y, r.context = E, r.keyPath = F, r.treeContext = M, r.componentStack = V, r.debugTask = z, yn(E);
              return;
            }
          }
        }
      }
      throw r.formatContext = y, r.context = E, r.keyPath = F, r.treeContext = M, yn(E), u;
    }
    function bi(t) {
      var r = t.blockedBoundary, u = t.blockedSegment;
      u !== null && (u.status = hl, Sl(this, r, t.row, u));
    }
    function yi(t, r, u, d, y, E, F, M) {
      for (var V = 0; V < u.length; V++) {
        var z = u[V];
        if (z.length === 4)
          yi(
            t,
            r,
            z[2],
            z[3],
            y,
            E,
            F,
            M
          );
        else {
          var Z = t;
          z = z[5];
          var le = y, fe = E, oe = F, j = M, We = Oc(
            Z,
            null,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          We.parentFlushed = !0, We.rootSegmentID = z, We.status = Lt, io(
            We,
            fe,
            le,
            oe,
            j
          ), We.parentFlushed && Z.clientRenderedBoundaries.push(We);
        }
      }
      if (u.length = 0, d !== null) {
        if (r === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (r.status !== Lt && (r.status = Lt, io(
          r,
          E,
          y,
          F,
          M
        ), r.parentFlushed && t.clientRenderedBoundaries.push(r)), typeof d == "object")
          for (var Cn in d)
            delete d[Cn];
      }
    }
    function Ra(t, r, u) {
      var d = t.blockedBoundary, y = t.blockedSegment;
      if (y !== null) {
        if (y.status === 6)
          return;
        y.status = hl;
      }
      var E = mi(t.componentStack), F = t.node;
      if (F !== null && typeof F == "object" && wu(t, F._debugInfo), d === null) {
        if (r.status !== 13 && r.status !== Ai) {
          if (d = t.replay, d === null) {
            r.trackedPostpones !== null && y !== null ? (d = r.trackedPostpones, Cr(r, u, E, t.debugTask), Ui(r, d, t, y), Sl(r, null, t.row, y)) : (Cr(r, u, E, t.debugTask), Ct(r, u, E, t.debugTask));
            return;
          }
          d.pendingTasks--, d.pendingTasks === 0 && 0 < d.nodes.length && (y = Cr(r, u, E, null), yi(
            r,
            null,
            d.nodes,
            d.slots,
            u,
            y,
            E,
            !0
          )), r.pendingRootTasks--, r.pendingRootTasks === 0 && Ca(r);
        }
      } else {
        if (F = r.trackedPostpones, d.status !== Lt) {
          if (F !== null && y !== null)
            return Cr(r, u, E, t.debugTask), Ui(r, F, t, y), d.fallbackAbortableTasks.forEach(function(M) {
              return Ra(M, r, u);
            }), d.fallbackAbortableTasks.clear(), Sl(r, d, t.row, y);
          d.status = Lt, y = Cr(
            r,
            u,
            E,
            t.debugTask
          ), d.status = Lt, io(d, y, u, E, !0), Ea(r, d), d.parentFlushed && r.clientRenderedBoundaries.push(d);
        }
        d.pendingTasks--, E = d.row, E !== null && --E.pendingTasks === 0 && kn(r, E), d.fallbackAbortableTasks.forEach(function(M) {
          return Ra(M, r, u);
        }), d.fallbackAbortableTasks.clear();
      }
      t = t.row, t !== null && --t.pendingTasks === 0 && kn(r, t), r.allPendingTasks--, r.allPendingTasks === 0 && kr(r);
    }
    function Yi(t, r) {
      try {
        var u = t.renderState, d = u.onHeaders;
        if (d) {
          var y = u.headers;
          if (y) {
            u.headers = null;
            var E = y.preconnects;
            if (y.fontPreloads && (E && (E += ", "), E += y.fontPreloads), y.highImagePreloads && (E && (E += ", "), E += y.highImagePreloads), !r) {
              var F = u.styles.values(), M = F.next();
              e:
                for (; 0 < y.remainingCapacity && !M.done; M = F.next())
                  for (var V = M.value.sheets.values(), z = V.next(); 0 < y.remainingCapacity && !z.done; z = V.next()) {
                    var Z = z.value, le = Z.props, fe = le.href, oe = Z.props, j = Wo(
                      oe.href,
                      "style",
                      {
                        crossOrigin: oe.crossOrigin,
                        integrity: oe.integrity,
                        nonce: oe.nonce,
                        type: oe.type,
                        fetchPriority: oe.fetchPriority,
                        referrerPolicy: oe.referrerPolicy,
                        media: oe.media
                      }
                    );
                    if (0 <= (y.remainingCapacity -= j.length + 2))
                      u.resets.style[fe] = H, E && (E += ", "), E += j, u.resets.style[fe] = typeof le.crossOrigin == "string" || typeof le.integrity == "string" ? [le.crossOrigin, le.integrity] : H;
                    else
                      break e;
                  }
            }
            d(E ? { Link: E } : {});
          }
        }
      } catch (We) {
        Cr(t, We, {}, null);
      }
    }
    function Ca(t) {
      t.trackedPostpones === null && Yi(t, !0), t.trackedPostpones === null && co(t), t.onShellError = Ue, t = t.onShellReady, t();
    }
    function kr(t) {
      Yi(
        t,
        t.trackedPostpones === null ? !0 : t.completedRootSegment === null || t.completedRootSegment.status !== Lr
      ), co(t), t = t.onAllReady, t();
    }
    function ka(t, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null && r.children[0].id === -1) {
        var u = r.children[0];
        u.id = r.id, u.parentFlushed = !0, u.status !== sr && u.status !== hl && u.status !== un || ka(t, u);
      } else
        t.completedSegments.push(r);
    }
    function Sl(t, r, u, d) {
      if (u !== null && (--u.pendingTasks === 0 ? kn(t, u) : u.together && fi(t, u)), t.allPendingTasks--, r === null) {
        if (d !== null && d.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          t.completedRootSegment = d;
        }
        t.pendingRootTasks--, t.pendingRootTasks === 0 && Ca(t);
      } else if (r.pendingTasks--, r.status !== Lt)
        if (r.pendingTasks === 0) {
          if (r.status === pi && (r.status = sr), d !== null && d.parentFlushed && (d.status === sr || d.status === hl) && ka(r, d), r.parentFlushed && t.completedBoundaries.push(r), r.status === sr)
            u = r.row, u !== null && tl(u.hoistables, r.contentState), Go(t, r) || (r.fallbackAbortableTasks.forEach(
              bi,
              t
            ), r.fallbackAbortableTasks.clear(), u !== null && --u.pendingTasks === 0 && kn(t, u)), t.pendingRootTasks === 0 && t.trackedPostpones === null && r.contentPreamble !== null && co(t);
          else if (r.status === Lr && (r = r.row, r !== null)) {
            if (t.trackedPostpones !== null) {
              u = t.trackedPostpones;
              var y = r.next;
              if (y !== null && (d = y.boundaries, d !== null))
                for (y.boundaries = null, y = 0; y < d.length; y++) {
                  var E = d[y];
                  wt(t, u, E), Sl(t, E, null, null);
                }
            }
            --r.pendingTasks === 0 && kn(t, r);
          }
        } else
          d === null || !d.parentFlushed || d.status !== sr && d.status !== hl || (ka(r, d), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)), r = r.row, r !== null && r.together && fi(t, r);
      t.allPendingTasks === 0 && kr(t);
    }
    function Eu(t) {
      if (t.status !== Ai && t.status !== 13) {
        var r = Fe, u = Nn.H;
        Nn.H = Xa;
        var d = Nn.A;
        Nn.A = os;
        var y = ut;
        ut = t;
        var E = Nn.getCurrentStack;
        Nn.getCurrentStack = Rl;
        var F = as;
        as = t.resumableState;
        try {
          var M = t.pingedTasks, V;
          for (V = 0; V < M.length; V++) {
            var z = t, Z = M[V], le = Z.blockedSegment;
            if (le === null) {
              var fe = void 0, oe = z;
              if (z = Z, z.replay.pendingTasks !== 0) {
                yn(z.context), fe = fl, fl = z;
                try {
                  if (typeof z.replay.slots == "number" ? di(
                    oe,
                    z,
                    z.replay.slots,
                    z.node,
                    z.childIndex
                  ) : kl(oe, z), z.replay.pendingTasks === 1 && 0 < z.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  z.replay.pendingTasks--, z.abortSet.delete(z), Sl(
                    oe,
                    z.blockedBoundary,
                    z.row,
                    null
                  );
                } catch (Ln) {
                  mt();
                  var j = Ln === cr ? Uo() : Ln;
                  if (typeof j == "object" && j !== null && typeof j.then == "function") {
                    var We = z.ping;
                    j.then(We, We), z.thenableState = Ln === cr ? El() : null;
                  } else {
                    z.replay.pendingTasks--, z.abortSet.delete(z);
                    var Cn = mi(z.componentStack), ke = void 0, tn = oe, Xt = z.blockedBoundary, Zt = oe.status === 12 ? oe.fatalError : j, an = Cn, Ft = z.replay.nodes, $l = z.replay.slots;
                    ke = Cr(
                      tn,
                      Zt,
                      an,
                      z.debugTask
                    ), yi(
                      tn,
                      Xt,
                      Ft,
                      $l,
                      Zt,
                      ke,
                      an,
                      !1
                    ), oe.pendingRootTasks--, oe.pendingRootTasks === 0 && Ca(oe), oe.allPendingTasks--, oe.allPendingTasks === 0 && kr(oe);
                  }
                } finally {
                  fl = fe;
                }
              }
            } else if (oe = fe = void 0, ke = Z, tn = le, tn.status === pi) {
              tn.status = 6, yn(ke.context), oe = fl, fl = ke;
              var Ar = tn.children.length, de = tn.chunks.length;
              try {
                kl(z, ke), ya(
                  tn.chunks,
                  z.renderState,
                  tn.lastPushedText,
                  tn.textEmbedded
                ), ke.abortSet.delete(ke), tn.status = sr, Sl(
                  z,
                  ke.blockedBoundary,
                  ke.row,
                  tn
                );
              } catch (Ln) {
                mt(), tn.children.length = Ar, tn.chunks.length = de;
                var hn = Ln === cr ? Uo() : z.status === 12 ? z.fatalError : Ln;
                if (z.status === 12 && z.trackedPostpones !== null) {
                  var dn = z.trackedPostpones, Tn = mi(ke.componentStack);
                  ke.abortSet.delete(ke), Cr(
                    z,
                    hn,
                    Tn,
                    ke.debugTask
                  ), Ui(
                    z,
                    dn,
                    ke,
                    tn
                  ), Sl(
                    z,
                    ke.blockedBoundary,
                    ke.row,
                    tn
                  );
                } else if (typeof hn == "object" && hn !== null && typeof hn.then == "function") {
                  tn.status = pi, ke.thenableState = Ln === cr ? El() : null;
                  var Xn = ke.ping;
                  hn.then(Xn, Xn);
                } else {
                  var Ze = mi(
                    ke.componentStack
                  );
                  ke.abortSet.delete(ke), tn.status = un;
                  var De = ke.blockedBoundary, fr = ke.row, gn = ke.debugTask;
                  if (fr !== null && --fr.pendingTasks === 0 && kn(z, fr), z.allPendingTasks--, fe = Cr(
                    z,
                    hn,
                    Ze,
                    gn
                  ), De === null)
                    Ct(
                      z,
                      hn,
                      Ze,
                      gn
                    );
                  else if (De.pendingTasks--, De.status !== Lt) {
                    De.status = Lt, io(
                      De,
                      fe,
                      hn,
                      Ze,
                      !1
                    ), Ea(z, De);
                    var Jt = De.row;
                    Jt !== null && --Jt.pendingTasks === 0 && kn(z, Jt), De.parentFlushed && z.clientRenderedBoundaries.push(De), z.pendingRootTasks === 0 && z.trackedPostpones === null && De.contentPreamble !== null && co(z);
                  }
                  z.allPendingTasks === 0 && kr(z);
                }
              } finally {
                fl = oe;
              }
            }
          }
          M.splice(0, V), t.destination !== null && Ko(
            t,
            t.destination
          );
        } catch (Ln) {
          M = {}, Cr(t, Ln, M, null), Ct(t, Ln, M, null);
        } finally {
          as = F, Nn.H = u, Nn.A = d, Nn.getCurrentStack = E, u === Xa && yn(r), ut = y;
        }
      }
    }
    function Ru(t, r, u) {
      r.preambleChildren.length && u.push(r.preambleChildren);
      for (var d = !1, y = 0; y < r.children.length; y++)
        d = Cu(
          t,
          r.children[y],
          u
        ) || d;
      return d;
    }
    function Cu(t, r, u) {
      var d = r.boundary;
      if (d === null)
        return Ru(
          t,
          r,
          u
        );
      var y = d.contentPreamble, E = d.fallbackPreamble;
      if (y === null || E === null)
        return !1;
      switch (d.status) {
        case sr:
          if (da(t.renderState, y), t.byteSize += d.byteSize, r = d.completedSegments[0], !r)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return Ru(
            t,
            r,
            u
          );
        case Lr:
          if (t.trackedPostpones !== null)
            return !0;
        case Lt:
          if (r.status === sr)
            return da(t.renderState, E), Ru(
              t,
              r,
              u
            );
        default:
          return !0;
      }
    }
    function co(t) {
      if (t.completedRootSegment && t.completedPreambleSegments === null) {
        var r = [], u = t.byteSize, d = Cu(
          t,
          t.completedRootSegment,
          r
        ), y = t.renderState.preamble;
        d === !1 || y.headChunks && y.bodyChunks ? t.completedPreambleSegments = r : t.byteSize = u;
      }
    }
    function uo(t, r, u, d) {
      switch (u.parentFlushed = !0, u.status) {
        case pi:
          u.id = t.nextSegmentId++;
        case Lr:
          return d = u.id, u.lastPushedText = !1, u.textEmbedded = !1, t = t.renderState, r.push(Ci), r.push(t.placeholderPrefix), t = d.toString(16), r.push(t), r.push(ic);
        case sr:
          u.status = ca;
          var y = !0, E = u.chunks, F = 0;
          u = u.children;
          for (var M = 0; M < u.length; M++) {
            for (y = u[M]; F < y.index; F++)
              r.push(E[F]);
            y = so(t, r, y, d);
          }
          for (; F < E.length - 1; F++)
            r.push(E[F]);
          return F < E.length && (y = r.push(E[F])), y;
        case hl:
          return !0;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function so(t, r, u, d) {
      var y = u.boundary;
      if (y === null)
        return uo(t, r, u, d);
      if (y.parentFlushed = !0, y.status === Lt) {
        var E = y.row;
        if (E !== null && --E.pendingTasks === 0 && kn(t, E), !t.renderState.generateStaticMarkup) {
          var F = y.errorDigest, M = y.errorMessage;
          E = y.errorStack, y = y.errorComponentStack, r.push(ac), r.push(bo), F && (r.push(jn), F = Ee(F), r.push(F), r.push(
            _a
          )), M && (r.push(jr), M = Ee(M), r.push(M), r.push(
            _a
          )), E && (r.push(Be), E = Ee(E), r.push(E), r.push(
            _a
          )), y && (r.push(Si), E = Ee(y), r.push(E), r.push(
            _a
          )), r.push(yo);
        }
        return uo(t, r, u, d), t = t.renderState.generateStaticMarkup ? !0 : r.push($i), t;
      }
      if (y.status !== sr)
        return y.status === pi && (y.rootSegmentID = t.nextSegmentId++), 0 < y.completedSegments.length && t.partialBoundaries.push(y), Ot(
          r,
          t.renderState,
          y.rootSegmentID
        ), d && tl(d, y.fallbackState), uo(t, r, u, d), r.push($i);
      if (!bc && Go(t, y) && Qa + y.byteSize > t.progressiveChunkSize)
        return y.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(y), Ot(
          r,
          t.renderState,
          y.rootSegmentID
        ), uo(t, r, u, d), r.push($i);
      if (Qa += y.byteSize, d && tl(d, y.contentState), u = y.row, u !== null && Go(t, y) && --u.pendingTasks === 0 && kn(t, u), t.renderState.generateStaticMarkup || r.push(ki), u = y.completedSegments, u.length !== 1)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      return so(t, r, u[0], d), t = t.renderState.generateStaticMarkup ? !0 : r.push($i), t;
    }
    function kt(t, r, u, d) {
      return xr(
        r,
        t.renderState,
        u.parentFormatContext,
        u.id
      ), so(t, r, u, d), Tl(r, u.parentFormatContext);
    }
    function ju(t, r, u) {
      Qa = u.byteSize;
      for (var d = u.completedSegments, y = 0; y < d.length; y++)
        Gi(
          t,
          r,
          u,
          d[y]
        );
      d.length = 0, d = u.row, d !== null && Go(t, u) && --d.pendingTasks === 0 && kn(t, d), jt(
        r,
        u.contentState,
        t.renderState
      ), d = t.resumableState, t = t.renderState, y = u.rootSegmentID, u = u.contentState;
      var E = t.stylesToHoist;
      return t.stylesToHoist = !1, r.push(t.startInlineScript), r.push(He), E ? ((d.instructions & T) === o && (d.instructions |= T, r.push(ta)), (d.instructions & g) === o && (d.instructions |= g, r.push(ct)), (d.instructions & C) === o ? (d.instructions |= C, r.push(sc)) : r.push(fc)) : ((d.instructions & g) === o && (d.instructions |= g, r.push(ct)), r.push(Xc)), d = y.toString(16), r.push(t.boundaryPrefix), r.push(d), r.push(Zc), r.push(t.segmentPrefix), r.push(d), E ? (r.push(_u), vu(r, u)) : r.push(Jc), u = r.push(Qc), Bi(r, t) && u;
    }
    function Gi(t, r, u, d) {
      if (d.status === ca)
        return !0;
      var y = u.contentState, E = d.id;
      if (E === -1) {
        if ((d.id = u.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return kt(
          t,
          r,
          d,
          y
        );
      }
      return E === u.rootSegmentID ? kt(
        t,
        r,
        d,
        y
      ) : (kt(t, r, d, y), u = t.resumableState, t = t.renderState, r.push(t.startInlineScript), r.push(He), (u.instructions & f) === o ? (u.instructions |= f, r.push(Iu)) : r.push(Gc), r.push(t.segmentPrefix), E = E.toString(16), r.push(E), r.push(Mu), r.push(t.placeholderPrefix), r.push(E), r = r.push(Ou), r);
    }
    function Ko(t, r) {
      try {
        if (!(0 < t.pendingRootTasks)) {
          var u, d = t.completedRootSegment;
          if (d !== null) {
            if (d.status === Lr)
              return;
            var y = t.completedPreambleSegments;
            if (y === null)
              return;
            Qa = t.byteSize;
            var E = t.resumableState, F = t.renderState, M = F.preamble, V = M.htmlChunks, z = M.headChunks, Z;
            if (V) {
              for (Z = 0; Z < V.length; Z++)
                r.push(V[Z]);
              if (z)
                for (Z = 0; Z < z.length; Z++)
                  r.push(z[Z]);
              else {
                var le = rt("head");
                r.push(le), r.push(He);
              }
            } else if (z)
              for (Z = 0; Z < z.length; Z++)
                r.push(z[Z]);
            var fe = F.charsetChunks;
            for (Z = 0; Z < fe.length; Z++)
              r.push(fe[Z]);
            fe.length = 0, F.preconnects.forEach(Rn, r), F.preconnects.clear();
            var oe = F.viewportChunks;
            for (Z = 0; Z < oe.length; Z++)
              r.push(oe[Z]);
            oe.length = 0, F.fontPreloads.forEach(Rn, r), F.fontPreloads.clear(), F.highImagePreloads.forEach(Rn, r), F.highImagePreloads.clear(), K = F, F.styles.forEach(qn, r), K = null;
            var j = F.importMapChunks;
            for (Z = 0; Z < j.length; Z++)
              r.push(j[Z]);
            j.length = 0, F.bootstrapScripts.forEach(Rn, r), F.scripts.forEach(Rn, r), F.scripts.clear(), F.bulkPreloads.forEach(Rn, r), F.bulkPreloads.clear(), E.instructions |= P;
            var We = F.hoistableChunks;
            for (Z = 0; Z < We.length; Z++)
              r.push(We[Z]);
            for (E = We.length = 0; E < y.length; E++) {
              var Cn = y[E];
              for (F = 0; F < Cn.length; F++)
                so(t, r, Cn[F], null);
            }
            var ke = t.renderState.preamble, tn = ke.headChunks;
            if (ke.htmlChunks || tn) {
              var Xt = Rt("head");
              r.push(Xt);
            }
            var Zt = ke.bodyChunks;
            if (Zt)
              for (y = 0; y < Zt.length; y++)
                r.push(Zt[y]);
            so(t, r, d, null), t.completedRootSegment = null;
            var an = t.renderState;
            if (t.allPendingTasks !== 0 || t.clientRenderedBoundaries.length !== 0 || t.completedBoundaries.length !== 0 || t.trackedPostpones !== null && (t.trackedPostpones.rootNodes.length !== 0 || t.trackedPostpones.rootSlots !== null)) {
              var Ft = t.resumableState;
              if ((Ft.instructions & Y) === o) {
                if (Ft.instructions |= Y, r.push(an.startInlineScript), (Ft.instructions & P) === o) {
                  Ft.instructions |= P;
                  var $l = "_" + Ft.idPrefix + "R_";
                  r.push(Eo);
                  var Ar = Ee($l);
                  r.push(Ar), r.push(Me);
                }
                r.push(He), r.push(qr), r.push(Q);
              }
            }
            Bi(r, an);
          }
          var de = t.renderState;
          d = 0;
          var hn = de.viewportChunks;
          for (d = 0; d < hn.length; d++)
            r.push(hn[d]);
          hn.length = 0, de.preconnects.forEach(Rn, r), de.preconnects.clear(), de.fontPreloads.forEach(Rn, r), de.fontPreloads.clear(), de.highImagePreloads.forEach(
            Rn,
            r
          ), de.highImagePreloads.clear(), de.styles.forEach(gu, r), de.scripts.forEach(Rn, r), de.scripts.clear(), de.bulkPreloads.forEach(Rn, r), de.bulkPreloads.clear();
          var dn = de.hoistableChunks;
          for (d = 0; d < dn.length; d++)
            r.push(dn[d]);
          dn.length = 0;
          var Tn = t.clientRenderedBoundaries;
          for (u = 0; u < Tn.length; u++) {
            var Xn = Tn[u];
            de = r;
            var Ze = t.resumableState, De = t.renderState, fr = Xn.rootSegmentID, gn = Xn.errorDigest, Jt = Xn.errorMessage, Ln = Xn.errorStack, zr = Xn.errorComponentStack;
            de.push(De.startInlineScript), de.push(He), (Ze.instructions & T) === o ? (Ze.instructions |= T, de.push(ol)) : de.push(ts), de.push(De.boundaryPrefix);
            var Ao = fr.toString(16);
            if (de.push(Ao), de.push(Ha), gn || Jt || Ln || zr) {
              de.push(hc);
              var Br = bt(
                gn || ""
              );
              de.push(Br);
            }
            if (Jt || Ln || zr) {
              de.push(hc);
              var ei = bt(
                Jt || ""
              );
              de.push(ei);
            }
            if (Ln || zr) {
              de.push(hc);
              var ni = bt(
                Ln || ""
              );
              de.push(ni);
            }
            if (zr) {
              de.push(hc);
              var ti = bt(zr);
              de.push(ti);
            }
            var zt = de.push(
              Al
            );
            if (!zt) {
              t.destination = null, u++, Tn.splice(0, u);
              return;
            }
          }
          Tn.splice(0, u);
          var e = t.completedBoundaries;
          for (u = 0; u < e.length; u++)
            if (!ju(
              t,
              r,
              e[u]
            )) {
              t.destination = null, u++, e.splice(0, u);
              return;
            }
          e.splice(0, u), bc = !0;
          var n = t.partialBoundaries;
          for (u = 0; u < n.length; u++) {
            e: {
              Tn = t, Xn = r;
              var c = n[u];
              Qa = c.byteSize;
              var h = c.completedSegments;
              for (zt = 0; zt < h.length; zt++)
                if (!Gi(
                  Tn,
                  Xn,
                  c,
                  h[zt]
                )) {
                  zt++, h.splice(0, zt);
                  var b = !1;
                  break e;
                }
              h.splice(0, zt);
              var x = c.row;
              x !== null && x.together && c.pendingTasks === 1 && (x.pendingTasks === 1 ? Tu(
                Tn,
                x,
                x.hoistables
              ) : x.pendingTasks--), b = jt(
                Xn,
                c.contentState,
                Tn.renderState
              );
            }
            if (!b) {
              t.destination = null, u++, n.splice(0, u);
              return;
            }
          }
          n.splice(0, u), bc = !1;
          var S = t.completedBoundaries;
          for (u = 0; u < S.length; u++)
            if (!ju(t, r, S[u])) {
              t.destination = null, u++, S.splice(0, u);
              return;
            }
          S.splice(0, u);
        }
      } finally {
        bc = !1, t.allPendingTasks === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.flushScheduled = !1, u = t.resumableState, u.hasBody && (n = Rt("body"), r.push(n)), u.hasHtml && (u = Rt("html"), r.push(u)), t.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), t.status = Ai, r.push(null), t.destination = null);
      }
    }
    function _c(t) {
      t.flushScheduled = t.destination !== null, Eu(t), t.status === 10 && (t.status = 11), t.trackedPostpones === null && Yi(t, t.pendingRootTasks === 0);
    }
    function wi(t) {
      if (t.flushScheduled === !1 && t.pingedTasks.length === 0 && t.destination !== null) {
        t.flushScheduled = !0;
        var r = t.destination;
        r ? Ko(t, r) : t.flushScheduled = !1;
      }
    }
    function Xi(t, r) {
      if (t.status === 13)
        t.status = Ai, r.destroy(t.fatalError);
      else if (t.status !== Ai && t.destination === null) {
        t.destination = r;
        try {
          Ko(t, r);
        } catch (u) {
          r = {}, Cr(t, u, r, null), Ct(t, u, r, null);
        }
      }
    }
    function fo(t, r) {
      (t.status === 11 || t.status === 10) && (t.status = 12);
      try {
        var u = t.abortableTasks;
        if (0 < u.size) {
          var d = r === void 0 ? Error("The render was aborted by the server without a reason.") : typeof r == "object" && r !== null && typeof r.then == "function" ? Error("The render was aborted by the server with a promise.") : r;
          t.fatalError = d, u.forEach(function(y) {
            var E = fl, F = Nn.getCurrentStack;
            fl = y, Nn.getCurrentStack = Rl;
            try {
              Ra(y, t, d);
            } finally {
              fl = E, Nn.getCurrentStack = F;
            }
          }), u.clear();
        }
        t.destination !== null && Ko(t, t.destination);
      } catch (y) {
        r = {}, Cr(t, y, r, null), Ct(t, y, r, null);
      }
    }
    function Pl(t, r, u) {
      if (r === null)
        u.rootNodes.push(t);
      else {
        var d = u.workingMap, y = d.get(r);
        y === void 0 && (y = [r[1], r[2], [], null], d.set(r, y), Pl(y, r[0], u)), y[2].push(t);
      }
    }
    function Zi() {
    }
    function Ji(t, r, u, d) {
      var y = !1, E = null, F = "", M = !1;
      if (r = bn(
        r ? r.identifierPrefix : void 0
      ), t = lo(
        t,
        r,
        Hl(r, u),
        et(Le, null, 0, null),
        1 / 0,
        Zi,
        void 0,
        function() {
          M = !0;
        },
        void 0,
        void 0,
        void 0
      ), _c(t), fo(t, d), Xi(t, {
        push: function(V) {
          return V !== null && (F += V), !0;
        },
        destroy: function(V) {
          y = !0, E = V;
        }
      }), y && E !== d)
        throw E;
      if (!M)
        throw Error(
          "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
        );
      return F;
    }
    var ku = hu, vs = af, Sa = Symbol.for("react.transitional.element"), at = Symbol.for("react.portal"), Zl = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), Dc = Symbol.for("react.consumer"), Jr = Symbol.for("react.context"), Qr = Symbol.for("react.forward_ref"), _r = Symbol.for("react.suspense"), Vr = Symbol.for("react.suspense_list"), wn = Symbol.for("react.memo"), Kr = Symbol.for("react.lazy"), Mn = Symbol.for("react.scope"), Fl = Symbol.for("react.activity"), Lc = Symbol.for("react.legacy_hidden"), zc = Symbol.for("react.memo_cache_sentinel"), Bc = Symbol.for("react.view_transition"), $o = Symbol.iterator, Ti = Array.isArray, ec = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), Sr = Symbol.for("react.client.reference"), On = Object.assign, je = Object.prototype.hasOwnProperty, Qi = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Pa = {}, Fa = {}, Vi = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Su = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), _t = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, bs = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
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
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
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
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, pl = {}, $u = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Pu = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Jl = !1, tc = {
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
      fetchpriority: "fetchPriority",
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
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
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
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
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
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
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
    }, St = {}, Ql = /^on./, es = /^on[^A-Z]/, pa = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hc = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Aa = /^(?:webkit|moz|o)[A-Z]/, Ut = /^-ms-/, Dt = /-(.)/g, Ki = /;\s*$/, Sn = {}, fn = {}, Ia = !1, ho = !1, Wc = /["'&<>]/, go = /([A-Z])/g, Fu = /^ms-/, ys = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Nn = ku.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xi = vs.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ns = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), i = xi.d;
    xi.d = {
      f: i.f,
      r: i.r,
      D: function(t) {
        var r = ut || null;
        if (r) {
          var u = r.resumableState, d = r.renderState;
          if (typeof t == "string" && t) {
            if (!u.dnsResources.hasOwnProperty(t)) {
              u.dnsResources[t] = I, u = d.headers;
              var y, E;
              (E = u && 0 < u.remainingCapacity) && (E = (y = "<" + Wn(t) + ">; rel=dns-prefetch", 0 <= (u.remainingCapacity -= y.length + 2))), E ? (d.resets.dns[t] = I, u.preconnects && (u.preconnects += ", "), u.preconnects += y) : (y = [], nt(y, { href: t, rel: "dns-prefetch" }), d.preconnects.add(y));
            }
            wi(r);
          }
        } else
          i.D(t);
      },
      C: function(t, r) {
        var u = ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (typeof t == "string" && t) {
            var E = r === "use-credentials" ? "credentials" : typeof r == "string" ? "anonymous" : "default";
            if (!d.connectResources[E].hasOwnProperty(t)) {
              d.connectResources[E][t] = I, d = y.headers;
              var F, M;
              if (M = d && 0 < d.remainingCapacity) {
                if (M = "<" + Wn(t) + ">; rel=preconnect", typeof r == "string") {
                  var V = Fc(
                    r,
                    "crossOrigin"
                  );
                  M += '; crossorigin="' + V + '"';
                }
                M = (F = M, 0 <= (d.remainingCapacity -= F.length + 2));
              }
              M ? (y.resets.connect[E][t] = I, d.preconnects && (d.preconnects += ", "), d.preconnects += F) : (E = [], nt(E, {
                rel: "preconnect",
                href: t,
                crossOrigin: r
              }), y.preconnects.add(E));
            }
            wi(u);
          }
        } else
          i.C(t, r);
      },
      L: function(t, r, u) {
        var d = ut || null;
        if (d) {
          var y = d.resumableState, E = d.renderState;
          if (r && t) {
            switch (r) {
              case "image":
                if (u)
                  var F = u.imageSrcSet, M = u.imageSizes, V = u.fetchPriority;
                var z = F ? F + `
` + (M || "") : t;
                if (y.imageResources.hasOwnProperty(z))
                  return;
                y.imageResources[z] = H, y = E.headers;
                var Z;
                y && 0 < y.remainingCapacity && typeof F != "string" && V === "high" && (Z = Wo(t, r, u), 0 <= (y.remainingCapacity -= Z.length + 2)) ? (E.resets.image[z] = H, y.highImagePreloads && (y.highImagePreloads += ", "), y.highImagePreloads += Z) : (y = [], nt(
                  y,
                  On(
                    {
                      rel: "preload",
                      href: F ? void 0 : t,
                      as: r
                    },
                    u
                  )
                ), V === "high" ? E.highImagePreloads.add(y) : (E.bulkPreloads.add(y), E.preloads.images.set(z, y)));
                break;
              case "style":
                if (y.styleResources.hasOwnProperty(t))
                  return;
                F = [], nt(
                  F,
                  On({ rel: "preload", href: t, as: r }, u)
                ), y.styleResources[t] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? H : [u.crossOrigin, u.integrity], E.preloads.stylesheets.set(t, F), E.bulkPreloads.add(F);
                break;
              case "script":
                if (y.scriptResources.hasOwnProperty(t))
                  return;
                F = [], E.preloads.scripts.set(t, F), E.bulkPreloads.add(F), nt(
                  F,
                  On({ rel: "preload", href: t, as: r }, u)
                ), y.scriptResources[t] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? H : [u.crossOrigin, u.integrity];
                break;
              default:
                if (y.unknownResources.hasOwnProperty(r)) {
                  if (F = y.unknownResources[r], F.hasOwnProperty(t))
                    return;
                } else
                  F = {}, y.unknownResources[r] = F;
                if (F[t] = H, (y = E.headers) && 0 < y.remainingCapacity && r === "font" && (z = Wo(t, r, u), 0 <= (y.remainingCapacity -= z.length + 2)))
                  E.resets.font[t] = H, y.fontPreloads && (y.fontPreloads += ", "), y.fontPreloads += z;
                else
                  switch (y = [], t = On(
                    { rel: "preload", href: t, as: r },
                    u
                  ), nt(y, t), r) {
                    case "font":
                      E.fontPreloads.add(y);
                      break;
                    default:
                      E.bulkPreloads.add(y);
                  }
            }
            wi(d);
          }
        } else
          i.L(t, r, u);
      },
      m: function(t, r) {
        var u = ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (t) {
            var E = r && typeof r.as == "string" ? r.as : "script";
            switch (E) {
              case "script":
                if (d.moduleScriptResources.hasOwnProperty(t))
                  return;
                E = [], d.moduleScriptResources[t] = !r || typeof r.crossOrigin != "string" && typeof r.integrity != "string" ? H : [r.crossOrigin, r.integrity], y.preloads.moduleScripts.set(t, E);
                break;
              default:
                if (d.moduleUnknownResources.hasOwnProperty(E)) {
                  var F = d.unknownResources[E];
                  if (F.hasOwnProperty(t))
                    return;
                } else
                  F = {}, d.moduleUnknownResources[E] = F;
                E = [], F[t] = H;
            }
            nt(
              E,
              On({ rel: "modulepreload", href: t }, r)
            ), y.bulkPreloads.add(E), wi(u);
          }
        } else
          i.m(t, r);
      },
      X: function(t, r) {
        var u = ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (t) {
            var E = d.scriptResources.hasOwnProperty(
              t
            ) ? d.scriptResources[t] : void 0;
            E !== I && (d.scriptResources[t] = I, r = On({ src: t, async: !0 }, r), E && (E.length === 2 && va(r, E), t = y.preloads.scripts.get(t)) && (t.length = 0), t = [], y.scripts.add(t), tt(t, r), wi(u));
          }
        } else
          i.X(t, r);
      },
      S: function(t, r, u) {
        var d = ut || null;
        if (d) {
          var y = d.resumableState, E = d.renderState;
          if (t) {
            r = r || "default";
            var F = E.styles.get(r), M = y.styleResources.hasOwnProperty(t) ? y.styleResources[t] : void 0;
            M !== I && (y.styleResources[t] = I, F || (F = {
              precedence: Ee(r),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, E.styles.set(r, F)), r = {
              state: w,
              props: On(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": r
                },
                u
              )
            }, M && (M.length === 2 && va(r.props, M), (E = E.preloads.stylesheets.get(t)) && 0 < E.length ? E.length = 0 : r.state = R), F.sheets.set(t, r), wi(d));
          }
        } else
          i.S(t, r, u);
      },
      M: function(t, r) {
        var u = ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (t) {
            var E = d.moduleScriptResources.hasOwnProperty(t) ? d.moduleScriptResources[t] : void 0;
            E !== I && (d.moduleScriptResources[t] = I, r = On(
              { src: t, type: "module", async: !0 },
              r
            ), E && (E.length === 2 && va(r, E), t = y.preloads.moduleScripts.get(t)) && (t.length = 0), t = [], y.scripts.add(t), tt(t, r), wi(u));
          }
        } else
          i.M(t, r);
      }
    };
    var o = 0, f = 1, g = 2, T = 4, C = 8, P = 32, Y = 64, I = null, H = [];
    Object.freeze(H);
    var K = null, Q = "<\/script>", ae = /(<\/|<)(s)(cript)/gi, be = {}, Le = 0, Pe = 1, Te = 2, Ie = 3, Se = 4, _n = 5, ze = 6, Xe = 7, ln = 8, _e = 9, mn = /* @__PURE__ */ new Map(), $e = ' style="', er = ":", cn = ";", Je = " ", en = '="', Me = '"', nn = '=""', Pt = Ee(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    ), He = ">", qi = "/>", Ei = !1, nr = !1, rl = !1, ll = !1, il = !1, Vl = !1, Ri = !1, Tt = !1, Ma = !1, Oa = !1, rc = !1, Nc = `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, vo = /(<\/|<)(s)(tyle)/gi, ji = `
`, tr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, lc = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), qr = "requestAnimationFrame(function(){$RT=performance.now()});", Ci = '<template id="', ic = '"></template>', ki = "<!--$-->", mc = '<!--$?--><template id="', ot = '"></template>', ac = "<!--$!-->", $i = "<!--/$-->", bo = "<template", _a = '"', jn = ' data-dgst="', jr = ' data-msg="', Be = ' data-stck="', Si = ' data-cstck="', yo = "></template>", ea = '<div hidden id="', Un = '">', Pr = "</div>", na = '<svg aria-hidden="true" style="display:none" id="', Da = '">', al = "</svg>", Yt = '<math aria-hidden="true" style="display:none" id="', wo = '">', lr = "</math>", pu = '<table hidden id="', La = '">', oc = "</table>", Uc = '<table hidden><tbody id="', Yc = '">', Kl = "</tbody></table>", za = '<table hidden><tr id="', Ba = '">', ir = "</tr></table>", cc = '<table hidden><colgroup id="', uc = '">', Au = "</colgroup></table>", Iu = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', Gc = '$RS("', Mu = '","', Ou = '")<\/script>', ct = `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`, Xc = '$RC("', sc = `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`, fc = '$RR("', Zc = '","', _u = '",', Jc = '"', Qc = ")<\/script>", ta = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};', ol = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', ts = '$RX("', Ha = '"', hc = ",", Al = ")<\/script>", To = /[<\u2028\u2029]/g, ra = /[&><\u2028\u2029]/g, dc = ' media="not all" data-precedence="', la = '" data-href="', rs = '">', ls = "</style>", Il = !1, xo = !0, $r = [], ia = ' data-precedence="', Wa = '" data-href="', cl = " ", Du = '">', is = "</style>", Eo = ' id="', l = "[", a = ",[", s = ",", v = "]", w = 0, R = 1, k = 2, D = 3, p = /[<>\r\n]/g, L = /["';,\r\n]/g, U = "", X = Function.prototype.bind, se = Symbol.for("react.client.reference"), ce = {};
    Object.freeze(ce);
    var Ye = {}, Fe = null, Ge = {}, Yn = {}, Pn = /* @__PURE__ */ new Set(), Gt = /* @__PURE__ */ new Set(), Dr = /* @__PURE__ */ new Set(), ul = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Set(), ar = /* @__PURE__ */ new Set(), $n = /* @__PURE__ */ new Set(), Fr = /* @__PURE__ */ new Set(), Pi = /* @__PURE__ */ new Set(), Gn = {
      enqueueSetState: function(t, r, u) {
        var d = t._reactInternals;
        d.queue === null ? Xr(t, "setState") : (d.queue.push(r), u != null && No(u));
      },
      enqueueReplaceState: function(t, r, u) {
        t = t._reactInternals, t.replace = !0, t.queue = [r], u != null && No(u);
      },
      enqueueForceUpdate: function(t, r) {
        t._reactInternals.queue === null ? Xr(t, "forceUpdate") : r != null && No(r);
      }
    }, Na = { id: 1, overflow: "" }, sl = Math.clz32 ? Math.clz32 : Qu, or = Math.log, Ml = Math.LN2, cr = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), ma = null, Ro = typeof Object.is == "function" ? Object.is : Yo, pr = null, Co = null, ur = null, Ua = null, Lu = null, Dn = null, ko = !1, Ol = !1, Vc = 0, Ya = 0, Kc = -1, qc = 0, So = null, aa = null, jc = 0, ql = !1, Ga, Xa = {
      readContext: Ta,
      use: function(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function")
            return Zr(t);
          if (t.$$typeof === Jr)
            return Ta(t);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(t)
        );
      },
      useContext: function(t) {
        return Ga = "useContext", Wl(), t._currentValue2;
      },
      useMemo: Vu,
      useReducer: $t,
      useRef: function(t) {
        pr = Wl(), Dn = qe();
        var r = Dn.memoizedState;
        return r === null ? (t = { current: t }, Object.seal(t), Dn.memoizedState = t) : r;
      },
      useState: function(t) {
        return Ga = "useState", $t(pc, t);
      },
      useInsertionEffect: Ue,
      useLayoutEffect: Ue,
      useCallback: function(t, r) {
        return Vu(function() {
          return t;
        }, r);
      },
      useImperativeHandle: Ue,
      useEffect: Ue,
      useDebugValue: Ue,
      useDeferredValue: function(t, r) {
        return Wl(), r !== void 0 ? r : t;
      },
      useTransition: function() {
        return Wl(), [!1, In];
      },
      useId: function() {
        var t = Co.treeContext, r = t.overflow;
        t = t.id, t = (t & ~(1 << 32 - sl(t) - 1)).toString(32) + r;
        var u = as;
        if (u === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return r = Vc++, t = "_" + u.idPrefix + "R_" + t, 0 < r && (t += "H" + r.toString(32)), t + "_";
      },
      useSyncExternalStore: function(t, r, u) {
        if (u === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return u();
      },
      useOptimistic: function(t) {
        return Wl(), [t, Ic];
      },
      useActionState: no,
      useFormState: no,
      useHostTransitionStatus: function() {
        return Wl(), ns;
      },
      useMemoCache: function(t) {
        for (var r = Array(t), u = 0; u < t; u++)
          r[u] = zc;
        return r;
      },
      useCacheRefresh: function() {
        return xa;
      },
      useEffectEvent: function() {
        return Ac;
      }
    }, as = null, fl = null, os = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      cacheSignal: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return fl === null ? null : fl.componentStack;
      }
    }, el = 0, oa, Fi, $c, eu, nu, Za, cs;
    Ku.__reactDisabledLog = !0;
    var zu, Po, us = !1, tu = new (typeof WeakMap == "function" ? WeakMap : Map)(), ws = {
      react_stack_bottom_frame: function(t, r, u) {
        return t(r, u);
      }
    }, Bu = ws.react_stack_bottom_frame.bind(ws), Ts = {
      react_stack_bottom_frame: function(t) {
        return t.render();
      }
    }, ru = Ts.react_stack_bottom_frame.bind(Ts), Fo = {
      react_stack_bottom_frame: function(t) {
        var r = t._init;
        return r(t._payload);
      }
    }, Ss = Fo.react_stack_bottom_frame.bind(Fo), Ps = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var jl = performance, ss = function() {
        return jl.now();
      };
    else {
      var Fs = Date;
      ss = function() {
        return Fs.now();
      };
    }
    var Lt = 4, pi = 0, sr = 1, ca = 2, hl = 3, un = 4, Lr = 5, Ai = 14, ut = null, gc = {}, lu = {}, fs = {}, po = {}, Ja = !1, vc = !1, _l = !1, Qa = 0, bc = !1;
    Ks.renderToStaticMarkup = function(t, r) {
      return Ji(
        t,
        r,
        !0,
        'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, Ks.renderToString = function(t, r) {
      return Ji(
        t,
        r,
        !1,
        'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, Ks.version = "19.2.4";
  }()), Ks;
}
var Ls = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _f;
function Qf() {
  return _f || (_f = 1, process.env.NODE_ENV !== "production" && function() {
    function he(e, n, c, h) {
      return "" + n + (c === "s" ? "\\73 " : "\\53 ") + h;
    }
    function re(e, n, c, h) {
      return "" + n + (c === "s" ? "\\u0073" : "\\u0053") + h;
    }
    function _(e) {
      return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function xe(e) {
      return e = Object.prototype.toString.call(e), e.slice(8, e.length - 1);
    }
    function pn(e) {
      var n = JSON.stringify(e);
      return '"' + e + '"' === n ? e : n;
    }
    function gt(e) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(
            10 >= e.length ? e : e.slice(0, 10) + "..."
          );
        case "object":
          return Jl(e) ? "[...]" : e !== null && e.$$typeof === Ql ? "client" : (e = xe(e), e === "Object" ? "{...}" : e);
        case "function":
          return e.$$typeof === Ql ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
        default:
          return String(e);
      }
    }
    function Hn(e) {
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qi:
          return "Suspense";
        case Pa:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case je:
            return Hn(e.render);
          case Fa:
            return Hn(e.type);
          case Vi:
            var n = e._payload;
            e = e._init;
            try {
              return Hn(e(n));
            } catch {
            }
        }
      return "";
    }
    function vn(e, n) {
      var c = xe(e);
      if (c !== "Object" && c !== "Array")
        return c;
      var h = -1, b = 0;
      if (Jl(e))
        if (St.has(e)) {
          var x = St.get(e);
          c = "<" + Hn(x) + ">";
          for (var S = 0; S < e.length; S++) {
            var A = e[S];
            A = typeof A == "string" ? A : typeof A == "object" && A !== null ? "{" + vn(A) + "}" : "{" + gt(A) + "}", "" + S === n ? (h = c.length, b = A.length, c += A) : c = 15 > A.length && 40 > c.length + A.length ? c + A : c + "{...}";
          }
          c += "</" + Hn(x) + ">";
        } else {
          for (c = "[", x = 0; x < e.length; x++)
            0 < x && (c += ", "), S = e[x], S = typeof S == "object" && S !== null ? vn(S) : gt(S), "" + x === n ? (h = c.length, b = S.length, c += S) : c = 10 > S.length && 40 > c.length + S.length ? c + S : c + "...";
          c += "]";
        }
      else if (e.$$typeof === Bc)
        c = "<" + Hn(e.type) + "/>";
      else {
        if (e.$$typeof === Ql)
          return "client";
        if (tc.has(e)) {
          for (c = tc.get(e), c = "<" + (Hn(c) || "..."), x = Object.keys(e), S = 0; S < x.length; S++) {
            c += " ", A = x[S], c += pn(A) + "=";
            var G = e[A], O = A === n && typeof G == "object" && G !== null ? vn(G) : gt(G);
            typeof G != "string" && (O = "{" + O + "}"), A === n ? (h = c.length, b = O.length, c += O) : c = 10 > O.length && 40 > c.length + O.length ? c + O : c + "...";
          }
          c += ">";
        } else {
          for (c = "{", x = Object.keys(e), S = 0; S < x.length; S++)
            0 < S && (c += ", "), A = x[S], c += pn(A) + ": ", G = e[A], G = typeof G == "object" && G !== null ? vn(G) : gt(G), A === n ? (h = c.length, b = G.length, c += G) : c = 10 > G.length && 40 > c.length + G.length ? c + G : c + "...";
          c += "}";
        }
      }
      return n === void 0 ? c : -1 < h && 0 < b ? (e = " ".repeat(h) + "^".repeat(b), `
  ` + c + `
  ` + e) : `
  ` + c;
    }
    function Kt(e, n) {
      var c = e.length & 3, h = e.length - c, b = n;
      for (n = 0; n < h; ) {
        var x = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24;
        ++n, x = 3432918353 * (x & 65535) + ((3432918353 * (x >>> 16) & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, x = 461845907 * (x & 65535) + ((461845907 * (x >>> 16) & 65535) << 16) & 4294967295, b ^= x, b = b << 13 | b >>> 19, b = 5 * (b & 65535) + ((5 * (b >>> 16) & 65535) << 16) & 4294967295, b = (b & 65535) + 27492 + (((b >>> 16) + 58964 & 65535) << 16);
      }
      switch (x = 0, c) {
        case 3:
          x ^= (e.charCodeAt(n + 2) & 255) << 16;
        case 2:
          x ^= (e.charCodeAt(n + 1) & 255) << 8;
        case 1:
          x ^= e.charCodeAt(n) & 255, x = 3432918353 * (x & 65535) + ((3432918353 * (x >>> 16) & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, b ^= 461845907 * (x & 65535) + ((461845907 * (x >>> 16) & 65535) << 16) & 4294967295;
      }
      return b ^= e.length, b ^= b >>> 16, b = 2246822507 * (b & 65535) + ((2246822507 * (b >>> 16) & 65535) << 16) & 4294967295, b ^= b >>> 13, b = 3266489909 * (b & 65535) + ((3266489909 * (b >>> 16) & 65535) << 16) & 4294967295, (b ^ b >>> 16) >>> 0;
    }
    function ve(e) {
      pa.push(e), es.port2.postMessage(null);
    }
    function Ht(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function W(e, n) {
      if (n.byteLength !== 0)
        if (2048 < n.byteLength)
          0 < Dt && (e.enqueue(
            new Uint8Array(Ut.buffer, 0, Dt)
          ), Ut = new Uint8Array(2048), Dt = 0), e.enqueue(n);
        else {
          var c = Ut.length - Dt;
          c < n.byteLength && (c === 0 ? e.enqueue(Ut) : (Ut.set(
            n.subarray(0, c),
            Dt
          ), e.enqueue(Ut), n = n.subarray(c)), Ut = new Uint8Array(2048), Dt = 0), Ut.set(n, Dt), Dt += n.byteLength;
        }
    }
    function Ce(e, n) {
      return W(e, n), !0;
    }
    function Et(e) {
      Ut && 0 < Dt && (e.enqueue(
        new Uint8Array(Ut.buffer, 0, Dt)
      ), Ut = null, Dt = 0);
    }
    function $(e) {
      return Ki.encode(e);
    }
    function N(e) {
      return e = Ki.encode(e), 2048 < e.byteLength && console.error(
        "precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."
      ), e;
    }
    function _i(e) {
      return e.byteLength;
    }
    function ha(e, n) {
      typeof e.error == "function" ? e.error(n) : e.close();
    }
    function ci(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Di(e) {
      try {
        return ui(e), !1;
      } catch {
        return !0;
      }
    }
    function ui(e) {
      return "" + e;
    }
    function It(e, n) {
      if (Di(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          n,
          ci(e)
        ), ui(e);
    }
    function Ee(e, n) {
      if (Di(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          n,
          ci(e)
        ), ui(e);
    }
    function yr(e) {
      if (Di(e))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          ci(e)
        ), ui(e);
    }
    function vt(e) {
      return fn.call(Wc, e) ? !0 : fn.call(ho, e) ? !1 : Ia.test(e) ? Wc[e] = !0 : (ho[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function bn(e, n) {
      ys[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), n.onChange || n.readOnly || n.disabled || n.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function et(e, n) {
      if (fn.call(xi, n) && xi[n])
        return !0;
      if (i.test(n)) {
        if (e = "aria-" + n.slice(4).toLowerCase(), e = Nn.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            n
          ), xi[n] = !0;
        if (n !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            n,
            e
          ), xi[n] = !0;
      }
      if (ns.test(n)) {
        if (e = n.toLowerCase(), e = Nn.hasOwnProperty(e) ? e : null, e == null)
          return xi[n] = !0, !1;
        n !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          n,
          e
        ), xi[n] = !0);
      }
      return !0;
    }
    function zo(e, n) {
      var c = [], h;
      for (h in n)
        et(e, h) || c.push(h);
      n = c.map(function(b) {
        return "`" + b + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        n,
        e
      ) : 1 < c.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        n,
        e
      );
    }
    function Bo(e, n, c, h) {
      if (fn.call(g, n) && g[n])
        return !0;
      var b = n.toLowerCase();
      if (b === "onfocusin" || b === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), g[n] = !0;
      if (typeof c == "function" && (e === "form" && n === "action" || e === "input" && n === "formAction" || e === "button" && n === "formAction"))
        return !0;
      if (h != null) {
        if (e = h.possibleRegistrationNames, h.registrationNameDependencies.hasOwnProperty(n))
          return !0;
        if (h = e.hasOwnProperty(b) ? e[b] : null, h != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            n,
            h
          ), g[n] = !0;
        if (T.test(n))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            n
          ), g[n] = !0;
      } else if (T.test(n))
        return C.test(n) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          n
        ), g[n] = !0;
      if (P.test(n) || Y.test(n))
        return !0;
      if (b === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), g[n] = !0;
      if (b === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), g[n] = !0;
      if (b === "is" && c !== null && c !== void 0 && typeof c != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof c
        ), g[n] = !0;
      if (typeof c == "number" && isNaN(c))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          n
        ), g[n] = !0;
      if (f.hasOwnProperty(b)) {
        if (b = f[b], b !== n)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            n,
            b
          ), g[n] = !0;
      } else if (n !== b)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          n,
          b
        ), g[n] = !0;
      switch (n) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof c) {
        case "boolean":
          switch (n) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return b = n.toLowerCase().slice(0, 5), b === "data-" || b === "aria-" ? !0 : (c ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                c,
                n,
                n,
                c,
                n
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                c,
                n,
                n,
                c,
                n,
                n,
                n
              ), g[n] = !0);
          }
        case "function":
        case "symbol":
          return g[n] = !0, !1;
        case "string":
          if (c === "false" || c === "true") {
            switch (n) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              c,
              n,
              c === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              n,
              c
            ), g[n] = !0;
          }
      }
      return !0;
    }
    function Li(e, n, c) {
      var h = [], b;
      for (b in n)
        Bo(e, b, n[b], c) || h.push(b);
      n = h.map(function(x) {
        return "`" + x + "`";
      }).join(", "), h.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        n,
        e
      ) : 1 < h.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        n,
        e
      );
    }
    function Mt(e) {
      return e.replace(K, function(n, c) {
        return c.toUpperCase();
      });
    }
    function ge(e) {
      if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint")
        return "" + e;
      yr(e), e = "" + e;
      var n = Te.exec(e);
      if (n) {
        var c = "", h, b = 0;
        for (h = n.index; h < e.length; h++) {
          switch (e.charCodeAt(h)) {
            case 34:
              n = "&quot;";
              break;
            case 38:
              n = "&amp;";
              break;
            case 39:
              n = "&#x27;";
              break;
            case 60:
              n = "&lt;";
              break;
            case 62:
              n = "&gt;";
              break;
            default:
              continue;
          }
          b !== h && (c += e.slice(b, h)), b = h + 1, c += n;
        }
        e = b !== h ? c + e.slice(b, h) : c;
      }
      return e;
    }
    function J(e) {
      return _n.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ue(e) {
      return yr(e), ("" + e).replace(Ma, re);
    }
    function zl(e, n, c, h, b, x) {
      c = typeof n == "string" ? n : n && n.script;
      var S = c === void 0 ? qi : N(
        '<script nonce="' + ge(c) + '"'
      ), A = typeof n == "string" ? void 0 : n && n.style, G = A === void 0 ? Tt : N(
        '<style nonce="' + ge(A) + '"'
      ), O = e.idPrefix, B = [], ee = e.bootstrapScriptContent, te = e.bootstrapScripts, ne = e.bootstrapModules;
      if (ee !== void 0 && (B.push(S), tl(B, e), B.push(
        Un,
        $(
          ue(ee)
        ),
        Ei
      )), ee = [], h !== void 0 && (ee.push(Oa), ee.push(
        $(
          ue(JSON.stringify(h))
        )
      ), ee.push(rc)), b && typeof x == "number" && 0 >= x && console.error(
        "React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.",
        x === 0 ? "zero" : x
      ), h = b ? {
        preconnects: "",
        fontPreloads: "",
        highImagePreloads: "",
        remainingCapacity: 2 + (typeof x == "number" ? x : 2e3)
      } : null, b = {
        placeholderPrefix: N(O + "P:"),
        segmentPrefix: N(O + "S:"),
        boundaryPrefix: N(O + "B:"),
        startInlineScript: S,
        startInlineStyle: G,
        preamble: ie(),
        externalRuntimeScript: null,
        bootstrapChunks: B,
        importMapChunks: ee,
        onHeaders: b,
        headers: h,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: { script: c, style: A },
        hoistableState: null,
        stylesToHoist: !1
      }, te !== void 0)
        for (h = 0; h < te.length; h++)
          x = te[h], G = A = void 0, O = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: n
          }, typeof x == "string" ? O.href = S = x : (O.href = S = x.src, O.integrity = G = typeof x.integrity == "string" ? x.integrity : void 0, O.crossOrigin = A = typeof x == "string" || x.crossOrigin == null ? void 0 : x.crossOrigin === "use-credentials" ? "use-credentials" : ""), Qn(
            e,
            b,
            S,
            O
          ), B.push(
            nr,
            $(ge(S)),
            Be
          ), c && B.push(
            ll,
            $(ge(c)),
            Be
          ), typeof G == "string" && B.push(
            il,
            $(ge(G)),
            Be
          ), typeof A == "string" && B.push(
            Vl,
            $(ge(A)),
            Be
          ), tl(B, e), B.push(Ri);
      if (ne !== void 0)
        for (n = 0; n < ne.length; n++)
          te = ne[n], S = x = void 0, A = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: c
          }, typeof te == "string" ? A.href = h = te : (A.href = h = te.src, A.integrity = S = typeof te.integrity == "string" ? te.integrity : void 0, A.crossOrigin = x = typeof te == "string" || te.crossOrigin == null ? void 0 : te.crossOrigin === "use-credentials" ? "use-credentials" : ""), Qn(
            e,
            b,
            h,
            A
          ), B.push(
            rl,
            $(ge(h)),
            Be
          ), c && B.push(
            ll,
            $(ge(c)),
            Be
          ), typeof S == "string" && B.push(
            il,
            $(ge(S)),
            Be
          ), typeof x == "string" && B.push(
            Vl,
            $(ge(x)),
            Be
          ), tl(B, e), B.push(Ri);
      return b;
    }
    function zi(e, n, c, h, b) {
      return {
        idPrefix: e === void 0 ? "" : e,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: c,
        bootstrapScripts: h,
        bootstrapModules: b,
        instructions: mn,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function ie() {
      return { htmlChunks: null, headChunks: null, bodyChunks: null };
    }
    function m(e, n, c, h) {
      return {
        insertionMode: e,
        selectedValue: n,
        tagScope: c,
        viewTransition: h
      };
    }
    function me(e) {
      return m(
        e === "http://www.w3.org/2000/svg" ? rr : e === "http://www.w3.org/1998/Math/MathML" ? qr : vo,
        null,
        0,
        null
      );
    }
    function Wt(e, n, c) {
      var h = e.tagScope & -25;
      switch (n) {
        case "noscript":
          return m(tr, null, h | 1, null);
        case "select":
          return m(
            tr,
            c.value != null ? c.value : c.defaultValue,
            h,
            null
          );
        case "svg":
          return m(rr, null, h, null);
        case "picture":
          return m(tr, null, h | 2, null);
        case "math":
          return m(qr, null, h, null);
        case "foreignObject":
          return m(tr, null, h, null);
        case "table":
          return m(Ci, null, h, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return m(
            ic,
            null,
            h,
            null
          );
        case "colgroup":
          return m(
            mc,
            null,
            h,
            null
          );
        case "tr":
          return m(
            ki,
            null,
            h,
            null
          );
        case "head":
          if (e.insertionMode < tr)
            return m(
              lc,
              null,
              h,
              null
            );
          break;
        case "html":
          if (e.insertionMode === vo)
            return m(
              ji,
              null,
              h,
              null
            );
      }
      return e.insertionMode >= Ci || e.insertionMode < tr ? m(tr, null, h, null) : e.tagScope !== h ? m(
        e.insertionMode,
        e.selectedValue,
        h,
        null
      ) : e;
    }
    function wr(e) {
      return e === null ? null : {
        update: e.update,
        enter: "none",
        exit: "none",
        share: e.update,
        name: e.autoName,
        autoName: e.autoName,
        nameIdx: 0
      };
    }
    function Qe(e, n) {
      return n.tagScope & 32 && (e.instructions |= 128), m(
        n.insertionMode,
        n.selectedValue,
        n.tagScope | 12,
        wr(n.viewTransition)
      );
    }
    function Tr(e, n) {
      e = wr(n.viewTransition);
      var c = n.tagScope | 16;
      return e !== null && e.share !== "none" && (c |= 64), m(
        n.insertionMode,
        n.selectedValue,
        c,
        e
      );
    }
    function nt(e, n, c, h) {
      return n === "" ? h : (h && e.push(ot), e.push($(ge(n))), !0);
    }
    function kc(e, n) {
      if (typeof n != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var c = !0, h;
      for (h in n)
        if (fn.call(n, h)) {
          var b = n[h];
          if (b != null && typeof b != "boolean" && b !== "") {
            if (h.indexOf("--") === 0) {
              var x = $(ge(h));
              Ee(b, h), b = $(
                ge(("" + b).trim())
              );
            } else {
              x = h;
              var S = b;
              if (-1 < x.indexOf("-")) {
                var A = x;
                ae.hasOwnProperty(A) && ae[A] || (ae[A] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  A,
                  Mt(A.replace(H, "ms-"))
                ));
              } else if (I.test(x))
                A = x, ae.hasOwnProperty(A) && ae[A] || (ae[A] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  A,
                  A.charAt(0).toUpperCase() + A.slice(1)
                ));
              else if (Q.test(S)) {
                A = x;
                var G = S;
                be.hasOwnProperty(G) && be[G] || (be[G] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  A,
                  G.replace(
                    Q,
                    ""
                  )
                ));
              }
              typeof S == "number" && (isNaN(S) ? Le || (Le = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                x
              )) : isFinite(S) || Pe || (Pe = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                x
              ))), x = h, S = ac.get(x), S !== void 0 || (S = N(
                ge(
                  x.replace(Ie, "-$1").toLowerCase().replace(Se, "-ms-")
                )
              ), ac.set(x, S)), x = S, typeof b == "number" ? b = b === 0 || go.has(h) ? $("" + b) : $(b + "px") : (Ee(b, h), b = $(
                ge(("" + b).trim())
              ));
            }
            c ? (c = !1, e.push(
              $i,
              x,
              bo,
              b
            )) : e.push(_a, x, bo, b);
          }
        }
      c || e.push(Be);
    }
    function Bl(e, n, c) {
      c && typeof c != "function" && typeof c != "symbol" && e.push(
        jn,
        $(n),
        Si
      );
    }
    function qt(e, n, c) {
      typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && e.push(
        jn,
        $(n),
        jr,
        $(ge(c)),
        Be
      );
    }
    function tt(e, n) {
      this.push(ea), Sc(e), qt(this, "name", n), qt(this, "value", e), this.push(Pr);
    }
    function Sc(e) {
      if (typeof e != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function Ae(e, n) {
      if (typeof n.$$FORM_ACTION == "function") {
        var c = e.nextFormID++;
        e = e.idPrefix + c;
        try {
          var h = n.$$FORM_ACTION(e);
          if (h) {
            var b = h.data;
            b != null && b.forEach(Sc);
          }
          return h;
        } catch (x) {
          if (typeof x == "object" && x !== null && typeof x.then == "function")
            throw x;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            x
          );
        }
      }
      return null;
    }
    function rt(e, n, c, h, b, x, S, A) {
      var G = null;
      if (typeof h == "function") {
        A === null || oc || (oc = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), b === null && x === null || Yc || (Yc = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), S === null || Uc || (Uc = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var O = Ae(n, h);
        O !== null ? (A = O.name, h = O.action || "", b = O.encType, x = O.method, S = O.target, G = O.data) : (e.push(
          jn,
          $("formAction"),
          jr,
          yo,
          Be
        ), S = x = b = h = A = null, Ot(n, c));
      }
      return A != null && on(e, "name", A), h != null && on(e, "formAction", h), b != null && on(e, "formEncType", b), x != null && on(e, "formMethod", x), S != null && on(e, "formTarget", S), G;
    }
    function on(e, n, c) {
      switch (n) {
        case "className":
          qt(e, "class", c);
          break;
        case "tabIndex":
          qt(e, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          qt(e, n, c);
          break;
        case "style":
          kc(e, c);
          break;
        case "src":
        case "href":
          if (c === "") {
            console.error(
              n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              n,
              n
            );
            break;
          }
        case "action":
        case "formAction":
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          It(c, n), c = J("" + c), e.push(
            jn,
            $(n),
            jr,
            $(ge(c)),
            Be
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          Bl(e, n.toLowerCase(), c);
          break;
        case "xlinkHref":
          if (typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          It(c, n), c = J("" + c), e.push(
            jn,
            $("xlink:href"),
            jr,
            $(ge(c)),
            Be
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof c != "function" && typeof c != "symbol" && e.push(
            jn,
            $(n),
            jr,
            $(ge(c)),
            Be
          );
          break;
        case "inert":
          c !== "" || Nc[n] || (Nc[n] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            n
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" && e.push(
            jn,
            $(n),
            Si
          );
          break;
        case "capture":
        case "download":
          c === !0 ? e.push(
            jn,
            $(n),
            Si
          ) : c !== !1 && typeof c != "function" && typeof c != "symbol" && e.push(
            jn,
            $(n),
            jr,
            $(ge(c)),
            Be
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c && e.push(
            jn,
            $(n),
            jr,
            $(ge(c)),
            Be
          );
          break;
        case "rowSpan":
        case "start":
          typeof c == "function" || typeof c == "symbol" || isNaN(c) || e.push(
            jn,
            $(n),
            jr,
            $(ge(c)),
            Be
          );
          break;
        case "xlinkActuate":
          qt(e, "xlink:actuate", c);
          break;
        case "xlinkArcrole":
          qt(e, "xlink:arcrole", c);
          break;
        case "xlinkRole":
          qt(e, "xlink:role", c);
          break;
        case "xlinkShow":
          qt(e, "xlink:show", c);
          break;
        case "xlinkTitle":
          qt(e, "xlink:title", c);
          break;
        case "xlinkType":
          qt(e, "xlink:type", c);
          break;
        case "xmlBase":
          qt(e, "xml:base", c);
          break;
        case "xmlLang":
          qt(e, "xml:lang", c);
          break;
        case "xmlSpace":
          qt(e, "xml:space", c);
          break;
        default:
          if ((!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Fu.get(n) || n, vt(n))) {
            switch (typeof c) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var h = n.toLowerCase().slice(0, 5);
                if (h !== "data-" && h !== "aria-")
                  return;
            }
            e.push(
              jn,
              $(n),
              jr,
              $(ge(c)),
              Be
            );
          }
      }
    }
    function Rt(e, n, c) {
      if (n != null) {
        if (c != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof n != "object" || !("__html" in n))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        n = n.__html, n != null && (yr(n), e.push($("" + n)));
      }
    }
    function da(e, n) {
      var c = e[n];
      c != null && (c = Jl(c), e.multiple && !c ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        n
      ) : !e.multiple && c && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        n
      ));
    }
    function Bi(e) {
      var n = "";
      return Lc.Children.forEach(e, function(c) {
        c != null && (n += c, wo || typeof c == "string" || typeof c == "number" || typeof c == "bigint" || (wo = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), n;
    }
    function Ot(e, n) {
      if ((e.instructions & 16) === mn) {
        e.instructions |= 16;
        var c = n.preamble, h = n.bootstrapChunks;
        (c.htmlChunks || c.headChunks) && h.length === 0 ? (h.push(n.startInlineScript), tl(h, e), h.push(
          Un,
          za,
          Ei
        )) : h.unshift(
          n.startInlineScript,
          Un,
          za,
          Ei
        );
      }
    }
    function xr(e, n) {
      e.push(Rn("link"));
      for (var c in n)
        if (fn.call(n, c)) {
          var h = n[c];
          if (h != null)
            switch (c) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                on(e, c, h);
            }
        }
      return e.push(Pr), null;
    }
    function Tl(e) {
      return yr(e), ("" + e).replace(cc, he);
    }
    function bt(e, n, c) {
      e.push(Rn(c));
      for (var h in n)
        if (fn.call(n, h)) {
          var b = n[h];
          if (b != null)
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  c + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                on(e, h, b);
            }
        }
      return e.push(Pr), null;
    }
    function xl(e, n) {
      e.push(Rn("title"));
      var c = null, h = null, b;
      for (b in n)
        if (fn.call(n, b)) {
          var x = n[b];
          if (x != null)
            switch (b) {
              case "children":
                c = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                on(e, b, x);
            }
        }
      return e.push(Un), n = Array.isArray(c) ? 2 > c.length ? c[0] : null : c, typeof n != "function" && typeof n != "symbol" && n !== null && n !== void 0 && e.push($(ge("" + n))), Rt(e, h, c), e.push(qn("title")), null;
    }
    function Pc(e, n) {
      e.push(Rn("script"));
      var c = null, h = null, b;
      for (b in n)
        if (fn.call(n, b)) {
          var x = n[b];
          if (x != null)
            switch (b) {
              case "children":
                c = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                on(e, b, x);
            }
        }
      return e.push(Un), c != null && typeof c != "string" && (n = typeof c == "number" ? "a number for children" : Array.isArray(c) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        n
      )), Rt(e, h, c), typeof c == "string" && e.push($(ue(c))), e.push(qn("script")), null;
    }
    function Ve(e, n, c) {
      e.push(Rn(c));
      var h = c = null, b;
      for (b in n)
        if (fn.call(n, b)) {
          var x = n[b];
          if (x != null)
            switch (b) {
              case "children":
                c = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                on(e, b, x);
            }
        }
      return e.push(Un), Rt(e, h, c), c;
    }
    function jt(e, n, c) {
      e.push(Rn(c));
      var h = c = null, b;
      for (b in n)
        if (fn.call(n, b)) {
          var x = n[b];
          if (x != null)
            switch (b) {
              case "children":
                c = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                on(e, b, x);
            }
        }
      return e.push(Un), Rt(e, h, c), typeof c == "string" ? (e.push($(ge(c))), null) : c;
    }
    function Rn(e) {
      var n = Ou.get(e);
      if (n === void 0) {
        if (!Mu.test(e))
          throw Error("Invalid tag: " + e);
        n = N("<" + e), Ou.set(e, n);
      }
      return n;
    }
    function Xu(e, n, c, h, b, x, S, A, G) {
      zo(n, c), n !== "input" && n !== "textarea" && n !== "select" || c == null || c.value !== null || o || (o = !0, n === "select" && c.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        n
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        n
      ));
      e:
        if (n.indexOf("-") === -1)
          var O = !1;
        else
          switch (n) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              O = !1;
              break e;
            default:
              O = !0;
          }
      switch (O || typeof c.is == "string" || Li(n, c, null), !c.suppressContentEditableWarning && c.contentEditable && c.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), A.insertionMode !== rr && A.insertionMode !== qr && n.indexOf("-") === -1 && n.toLowerCase() !== n && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        n
      ), n) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          e.push(Rn("a"));
          var B = null, ee = null, te;
          for (te in c)
            if (fn.call(c, te)) {
              var ne = c[te];
              if (ne != null)
                switch (te) {
                  case "children":
                    B = ne;
                    break;
                  case "dangerouslySetInnerHTML":
                    ee = ne;
                    break;
                  case "href":
                    ne === "" ? qt(e, "href", "") : on(e, te, ne);
                    break;
                  default:
                    on(e, te, ne);
                }
            }
          if (e.push(Un), Rt(e, ee, B), typeof B == "string") {
            e.push($(ge(B)));
            var q = null;
          } else
            q = B;
          return q;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          bn("select", c), da(c, "value"), da(c, "defaultValue"), c.value === void 0 || c.defaultValue === void 0 || al || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), al = !0), e.push(Rn("select"));
          var Re = null, xn = null, we;
          for (we in c)
            if (fn.call(c, we)) {
              var Ne = c[we];
              if (Ne != null)
                switch (we) {
                  case "children":
                    Re = Ne;
                    break;
                  case "dangerouslySetInnerHTML":
                    xn = Ne;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    on(
                      e,
                      we,
                      Ne
                    );
                }
            }
          return e.push(Un), Rt(e, xn, Re), Re;
        case "option":
          var Vn = A.selectedValue;
          e.push(Rn("option"));
          var st = null, rn = null, ye = null, ft = null, hr;
          for (hr in c)
            if (fn.call(c, hr)) {
              var En = c[hr];
              if (En != null)
                switch (hr) {
                  case "children":
                    st = En;
                    break;
                  case "selected":
                    ye = En, pu || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), pu = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    ft = En;
                    break;
                  case "value":
                    rn = En;
                  default:
                    on(
                      e,
                      hr,
                      En
                    );
                }
            }
          if (Vn != null) {
            if (rn !== null) {
              It(rn, "value");
              var zn = "" + rn;
            } else
              ft === null || lr || (lr = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), zn = Bi(st);
            if (Jl(Vn)) {
              for (var Hr = 0; Hr < Vn.length; Hr++)
                if (It(Vn[Hr], "value"), "" + Vn[Hr] === zn) {
                  e.push(Kl);
                  break;
                }
            } else
              It(Vn, "select.value"), "" + Vn === zn && e.push(Kl);
          } else
            ye && e.push(Kl);
          return e.push(Un), Rt(e, ft, st), st;
        case "textarea":
          bn("textarea", c), c.value === void 0 || c.defaultValue === void 0 || Yt || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), Yt = !0), e.push(Rn("textarea"));
          var Qt = null, pt = null, Bn = null, xt;
          for (xt in c)
            if (fn.call(c, xt)) {
              var Wr = c[xt];
              if (Wr != null)
                switch (xt) {
                  case "children":
                    Bn = Wr;
                    break;
                  case "value":
                    Qt = Wr;
                    break;
                  case "defaultValue":
                    pt = Wr;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    on(
                      e,
                      xt,
                      Wr
                    );
                }
            }
          if (Qt === null && pt !== null && (Qt = pt), e.push(Un), Bn != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), Qt != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Jl(Bn)) {
              if (1 < Bn.length)
                throw Error("<textarea> can only have at most one child.");
              yr(Bn[0]), Qt = "" + Bn[0];
            }
            yr(Bn), Qt = "" + Bn;
          }
          return typeof Qt == "string" && Qt[0] === `
` && e.push(Gc), Qt !== null && (It(Qt, "value"), e.push(
            $(ge("" + Qt))
          )), null;
        case "input":
          bn("input", c), e.push(Rn("input"));
          var nl = null, At = null, Zn = null, dr = null, Nr = null, gr = null, Ii = null, mr = null, ht = null, dl;
          for (dl in c)
            if (fn.call(c, dl)) {
              var Bt = c[dl];
              if (Bt != null)
                switch (dl) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    nl = Bt;
                    break;
                  case "formAction":
                    At = Bt;
                    break;
                  case "formEncType":
                    Zn = Bt;
                    break;
                  case "formMethod":
                    dr = Bt;
                    break;
                  case "formTarget":
                    Nr = Bt;
                    break;
                  case "defaultChecked":
                    ht = Bt;
                    break;
                  case "defaultValue":
                    Ii = Bt;
                    break;
                  case "checked":
                    mr = Bt;
                    break;
                  case "value":
                    gr = Bt;
                    break;
                  default:
                    on(
                      e,
                      dl,
                      Bt
                    );
                }
            }
          At === null || c.type === "image" || c.type === "submit" || La || (La = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var Hu = rt(
            e,
            h,
            b,
            At,
            Zn,
            dr,
            Nr,
            nl
          );
          return mr === null || ht === null || Da || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), Da = !0), gr === null || Ii === null || na || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), na = !0), mr !== null ? Bl(e, "checked", mr) : ht !== null && Bl(e, "checked", ht), gr !== null ? on(e, "value", gr) : Ii !== null && on(e, "value", Ii), e.push(Pr), Hu != null && Hu.forEach(tt, e), null;
        case "button":
          e.push(Rn("button"));
          var ri = null, Kn = null, gl = null, vr = null, yc = null, Io = null, Dl = null, Mo;
          for (Mo in c)
            if (fn.call(c, Mo)) {
              var Ur = c[Mo];
              if (Ur != null)
                switch (Mo) {
                  case "children":
                    ri = Ur;
                    break;
                  case "dangerouslySetInnerHTML":
                    Kn = Ur;
                    break;
                  case "name":
                    gl = Ur;
                    break;
                  case "formAction":
                    vr = Ur;
                    break;
                  case "formEncType":
                    yc = Ur;
                    break;
                  case "formMethod":
                    Io = Ur;
                    break;
                  case "formTarget":
                    Dl = Ur;
                    break;
                  default:
                    on(
                      e,
                      Mo,
                      Ur
                    );
                }
            }
          vr === null || c.type == null || c.type === "submit" || La || (La = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var wc = rt(
            e,
            h,
            b,
            vr,
            yc,
            Io,
            Dl,
            gl
          );
          if (e.push(Un), wc != null && wc.forEach(tt, e), Rt(e, Kn, ri), typeof ri == "string") {
            e.push(
              $(ge(ri))
            );
            var Wu = null;
          } else
            Wu = ri;
          return Wu;
        case "form":
          e.push(Rn("form"));
          var vl = null, Tc = null, br = null, Oo = null, Va = null, ua = null, bl;
          for (bl in c)
            if (fn.call(c, bl)) {
              var yl = c[bl];
              if (yl != null)
                switch (bl) {
                  case "children":
                    vl = yl;
                    break;
                  case "dangerouslySetInnerHTML":
                    Tc = yl;
                    break;
                  case "action":
                    br = yl;
                    break;
                  case "encType":
                    Oo = yl;
                    break;
                  case "method":
                    Va = yl;
                    break;
                  case "target":
                    ua = yl;
                    break;
                  default:
                    on(
                      e,
                      bl,
                      yl
                    );
                }
            }
          var li = null, Yr = null;
          if (typeof br == "function") {
            Oo === null && Va === null || Yc || (Yc = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), ua === null || Uc || (Uc = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var Vt = Ae(
              h,
              br
            );
            Vt !== null ? (br = Vt.action || "", Oo = Vt.encType, Va = Vt.method, ua = Vt.target, li = Vt.data, Yr = Vt.name) : (e.push(
              jn,
              $("action"),
              jr,
              yo,
              Be
            ), ua = Va = Oo = br = null, Ot(h, b));
          }
          if (br != null && on(e, "action", br), Oo != null && on(e, "encType", Oo), Va != null && on(e, "method", Va), ua != null && on(e, "target", ua), e.push(Un), Yr !== null && (e.push(ea), qt(e, "name", Yr), e.push(Pr), li != null && li.forEach(
            tt,
            e
          )), Rt(e, Tc, vl), typeof vl == "string") {
            e.push(
              $(ge(vl))
            );
            var sa = null;
          } else
            sa = vl;
          return sa;
        case "menuitem":
          e.push(Rn("menuitem"));
          for (var ii in c)
            if (fn.call(c, ii)) {
              var Ka = c[ii];
              if (Ka != null)
                switch (ii) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    on(
                      e,
                      ii,
                      Ka
                    );
                }
            }
          return e.push(Un), null;
        case "object":
          e.push(Rn("object"));
          var Mi = null, hs = null, Ir;
          for (Ir in c)
            if (fn.call(c, Ir)) {
              var Ll = c[Ir];
              if (Ll != null)
                switch (Ir) {
                  case "children":
                    Mi = Ll;
                    break;
                  case "dangerouslySetInnerHTML":
                    hs = Ll;
                    break;
                  case "data":
                    It(Ll, "data");
                    var xc = J("" + Ll);
                    if (xc === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        Ir,
                        Ir
                      );
                      break;
                    }
                    e.push(
                      jn,
                      $("data"),
                      jr,
                      $(ge(xc)),
                      Be
                    );
                    break;
                  default:
                    on(
                      e,
                      Ir,
                      Ll
                    );
                }
            }
          if (e.push(Un), Rt(e, hs, Mi), typeof Mi == "string") {
            e.push(
              $(ge(Mi))
            );
            var iu = null;
          } else
            iu = Mi;
          return iu;
        case "title":
          var au = A.tagScope & 1, zs = A.tagScope & 4;
          if (fn.call(c, "children")) {
            var qa = c.children, _o = Array.isArray(qa) ? 2 > qa.length ? qa[0] : null : qa;
            Array.isArray(qa) && 1 < qa.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              qa.length
            ) : typeof _o == "function" || typeof _o == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof _o == "function" ? "a Function" : "a Sybmol"
            ) : _o && _o.toString === {}.toString && (_o.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (A.insertionMode === rr || au || c.itemProp != null)
            var ja = xl(
              e,
              c
            );
          else
            zs ? ja = null : (xl(b.hoistableChunks, c), ja = void 0);
          return ja;
        case "link":
          var ou = A.tagScope & 1, ps = A.tagScope & 4, xs = c.rel, Mr = c.href, ai = c.precedence;
          if (A.insertionMode === rr || ou || c.itemProp != null || typeof xs != "string" || typeof Mr != "string" || Mr === "") {
            xs === "stylesheet" && typeof c.precedence == "string" && (typeof Mr == "string" && Mr || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              Mr === null ? "`null`" : Mr === void 0 ? "`undefined`" : Mr === "" ? "an empty string" : 'something with type "' + typeof Mr + '"'
            )), xr(e, c);
            var $a = null;
          } else if (c.rel === "stylesheet")
            if (typeof ai != "string" || c.disabled != null || c.onLoad || c.onError) {
              if (typeof ai == "string") {
                if (c.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (c.onLoad || c.onError) {
                  var Nu = c.onLoad && c.onError ? "`onLoad` and `onError` props" : c.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    Nu,
                    Nu
                  );
                }
              }
              $a = xr(
                e,
                c
              );
            } else {
              var wl = b.styles.get(ai), dt = h.styleResources.hasOwnProperty(
                Mr
              ) ? h.styleResources[Mr] : void 0;
              if (dt !== nn) {
                h.styleResources[Mr] = nn, wl || (wl = {
                  precedence: $(ge(ai)),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, b.styles.set(ai, wl));
                var Jn = {
                  state: aa,
                  props: Sn({}, c, {
                    "data-precedence": c.precedence,
                    precedence: null
                  })
                };
                if (dt) {
                  dt.length === 2 && Wi(Jn.props, dt);
                  var Fn = b.preloads.stylesheets.get(Mr);
                  Fn && 0 < Fn.length ? Fn.length = 0 : Jn.state = jc;
                }
                wl.sheets.set(Mr, Jn), S && S.stylesheets.add(Jn);
              } else if (wl) {
                var Es = wl.sheets.get(Mr);
                Es && S && S.stylesheets.add(Es);
              }
              G && e.push(ot), $a = null;
            }
          else
            c.onLoad || c.onError ? $a = xr(
              e,
              c
            ) : (G && e.push(ot), $a = ps ? null : xr(b.hoistableChunks, c));
          return $a;
        case "script":
          var Do = A.tagScope & 1, mu = c.async;
          if (typeof c.src != "string" || !c.src || !mu || typeof mu == "function" || typeof mu == "symbol" || c.onLoad || c.onError || A.insertionMode === rr || Do || c.itemProp != null)
            var Lo = Pc(
              e,
              c
            );
          else {
            var Ec = c.src;
            if (c.type === "module")
              var Uu = h.moduleScriptResources, Rc = b.preloads.moduleScripts;
            else
              Uu = h.scriptResources, Rc = b.preloads.scripts;
            var cu = Uu.hasOwnProperty(Ec) ? Uu[Ec] : void 0;
            if (cu !== nn) {
              Uu[Ec] = nn;
              var uu = c;
              if (cu) {
                cu.length === 2 && (uu = Sn({}, c), Wi(uu, cu));
                var ds = Rc.get(Ec);
                ds && (ds.length = 0);
              }
              var Rs = [];
              b.scripts.add(Rs), Pc(Rs, uu);
            }
            G && e.push(ot), Lo = null;
          }
          return Lo;
        case "style":
          var As = A.tagScope & 1;
          if (fn.call(c, "children")) {
            var Yu = c.children, Gu = Array.isArray(Yu) ? 2 > Yu.length ? Yu[0] : null : Yu;
            (typeof Gu == "function" || typeof Gu == "symbol" || Array.isArray(Gu)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof Gu == "function" ? "a Function" : typeof Gu == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var Cc = c.precedence, eo = c.href, fa = c.nonce;
          if (A.insertionMode === rr || As || c.itemProp != null || typeof Cc != "string" || typeof eo != "string" || eo === "") {
            e.push(Rn("style"));
            var Gr = null, su = null, Is;
            for (Is in c)
              if (fn.call(c, Is)) {
                var Bs = c[Is];
                if (Bs != null)
                  switch (Is) {
                    case "children":
                      Gr = Bs;
                      break;
                    case "dangerouslySetInnerHTML":
                      su = Bs;
                      break;
                    default:
                      on(
                        e,
                        Is,
                        Bs
                      );
                  }
              }
            e.push(Un);
            var Cs = Array.isArray(Gr) ? 2 > Gr.length ? Gr[0] : null : Gr;
            typeof Cs != "function" && typeof Cs != "symbol" && Cs !== null && Cs !== void 0 && e.push(
              $(Tl(Cs))
            ), Rt(
              e,
              su,
              Gr
            ), e.push(qn("style"));
            var js = null;
          } else {
            eo.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              eo
            );
            var gs = b.styles.get(Cc), $s = h.styleResources.hasOwnProperty(eo) ? h.styleResources[eo] : void 0;
            if ($s !== nn) {
              h.styleResources[eo] = nn, $s && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                eo
              ), gs || (gs = {
                precedence: $(
                  ge(Cc)
                ),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, b.styles.set(
                Cc,
                gs
              ));
              var Ms = b.nonce.style;
              if (Ms && Ms !== fa)
                console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce "%s" that was included with this render.',
                  Cc,
                  fa,
                  Ms
                );
              else {
                !Ms && fa && console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.',
                  Cc,
                  fa
                ), gs.hrefs.push(
                  $(ge(eo))
                );
                var Hs = gs.rules, Ws = null, vf = null, ef;
                for (ef in c)
                  if (fn.call(c, ef)) {
                    var of = c[ef];
                    if (of != null)
                      switch (ef) {
                        case "children":
                          Ws = of;
                          break;
                        case "dangerouslySetInnerHTML":
                          vf = of;
                      }
                  }
                var Ys = Array.isArray(Ws) ? 2 > Ws.length ? Ws[0] : null : Ws;
                typeof Ys != "function" && typeof Ys != "symbol" && Ys !== null && Ys !== void 0 && Hs.push(
                  $(Tl(Ys))
                ), Rt(Hs, vf, Ws);
              }
            }
            gs && S && S.styles.add(gs), G && e.push(ot), js = void 0;
          }
          return js;
        case "meta":
          var Hf = A.tagScope & 1, Wf = A.tagScope & 4;
          if (A.insertionMode === rr || Hf || c.itemProp != null)
            var bf = bt(
              e,
              c,
              "meta"
            );
          else
            G && e.push(ot), bf = Wf ? null : typeof c.charSet == "string" ? bt(b.charsetChunks, c, "meta") : c.name === "viewport" ? bt(b.viewportChunks, c, "meta") : bt(
              b.hoistableChunks,
              c,
              "meta"
            );
          return bf;
        case "listing":
        case "pre":
          e.push(Rn(n));
          var Gs = null, Xs = null, Zs;
          for (Zs in c)
            if (fn.call(c, Zs)) {
              var nf = c[Zs];
              if (nf != null)
                switch (Zs) {
                  case "children":
                    Gs = nf;
                    break;
                  case "dangerouslySetInnerHTML":
                    Xs = nf;
                    break;
                  default:
                    on(
                      e,
                      Zs,
                      nf
                    );
                }
            }
          if (e.push(Un), Xs != null) {
            if (Gs != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof Xs != "object" || !("__html" in Xs))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var ks = Xs.__html;
            ks != null && (typeof ks == "string" && 0 < ks.length && ks[0] === `
` ? e.push(Gc, $(ks)) : (yr(ks), e.push($("" + ks))));
          }
          return typeof Gs == "string" && Gs[0] === `
` && e.push(Gc), Gs;
        case "img":
          var Nf = A.tagScope & 3, Oi = c.src, oi = c.srcSet;
          if (!(c.loading === "lazy" || !Oi && !oi || typeof Oi != "string" && Oi != null || typeof oi != "string" && oi != null || c.fetchPriority === "low" || Nf) && (typeof Oi != "string" || Oi[4] !== ":" || Oi[0] !== "d" && Oi[0] !== "D" || Oi[1] !== "a" && Oi[1] !== "A" || Oi[2] !== "t" && Oi[2] !== "T" || Oi[3] !== "a" && Oi[3] !== "A") && (typeof oi != "string" || oi[4] !== ":" || oi[0] !== "d" && oi[0] !== "D" || oi[1] !== "a" && oi[1] !== "A" || oi[2] !== "t" && oi[2] !== "T" || oi[3] !== "a" && oi[3] !== "A")) {
            S !== null && A.tagScope & 64 && (S.suspenseyImages = !0);
            var yf = typeof c.sizes == "string" ? c.sizes : void 0, Ns = oi ? oi + `
` + (yf || "") : Oi, cf = b.preloads.images, Os = cf.get(Ns);
            if (Os)
              (c.fetchPriority === "high" || 10 > b.highImagePreloads.size) && (cf.delete(Ns), b.highImagePreloads.add(Os));
            else if (!h.imageResources.hasOwnProperty(Ns)) {
              h.imageResources[Ns] = Pt;
              var uf = c.crossOrigin, wf = typeof uf == "string" ? uf === "use-credentials" ? uf : "" : void 0, _s = b.headers, sf;
              _s && 0 < _s.remainingCapacity && typeof c.srcSet != "string" && (c.fetchPriority === "high" || 500 > _s.highImagePreloads.length) && (sf = Ni(Oi, "image", {
                imageSrcSet: c.srcSet,
                imageSizes: c.sizes,
                crossOrigin: wf,
                integrity: c.integrity,
                nonce: c.nonce,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.refererPolicy
              }), 0 <= (_s.remainingCapacity -= sf.length + 2)) ? (b.resets.image[Ns] = Pt, _s.highImagePreloads && (_s.highImagePreloads += ", "), _s.highImagePreloads += sf) : (Os = [], xr(Os, {
                rel: "preload",
                as: "image",
                href: oi ? void 0 : Oi,
                imageSrcSet: oi,
                imageSizes: yf,
                crossOrigin: wf,
                integrity: c.integrity,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.referrerPolicy
              }), c.fetchPriority === "high" || 10 > b.highImagePreloads.size ? b.highImagePreloads.add(Os) : (b.bulkPreloads.add(Os), cf.set(Ns, Os)));
            }
          }
          return bt(e, c, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return bt(e, c, n);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (A.insertionMode < tr) {
            var ff = x || b.preamble;
            if (ff.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            x !== null && e.push(uc), ff.headChunks = [];
            var Tf = Ve(
              ff.headChunks,
              c,
              "head"
            );
          } else
            Tf = jt(
              e,
              c,
              "head"
            );
          return Tf;
        case "body":
          if (A.insertionMode < tr) {
            var hf = x || b.preamble;
            if (hf.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            x !== null && e.push(Au), hf.bodyChunks = [];
            var xf = Ve(
              hf.bodyChunks,
              c,
              "body"
            );
          } else
            xf = jt(
              e,
              c,
              "body"
            );
          return xf;
        case "html":
          if (A.insertionMode === vo) {
            var df = x || b.preamble;
            if (df.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            x !== null && e.push(Iu), df.htmlChunks = [ct];
            var Ef = Ve(
              df.htmlChunks,
              c,
              "html"
            );
          } else
            Ef = jt(
              e,
              c,
              "html"
            );
          return Ef;
        default:
          if (n.indexOf("-") !== -1) {
            e.push(Rn(n));
            var gf = null, Rf = null, ms;
            for (ms in c)
              if (fn.call(c, ms)) {
                var fu = c[ms];
                if (fu != null) {
                  var Cf = ms;
                  switch (ms) {
                    case "children":
                      gf = fu;
                      break;
                    case "dangerouslySetInnerHTML":
                      Rf = fu;
                      break;
                    case "style":
                      kc(e, fu);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      Cf = "class";
                    default:
                      if (vt(ms) && typeof fu != "function" && typeof fu != "symbol" && fu !== !1) {
                        if (fu === !0)
                          fu = "";
                        else if (typeof fu == "object")
                          continue;
                        e.push(
                          jn,
                          $(Cf),
                          jr,
                          $(
                            ge(fu)
                          ),
                          Be
                        );
                      }
                  }
                }
              }
            return e.push(Un), Rt(
              e,
              Rf,
              gf
            ), gf;
          }
      }
      return jt(e, c, n);
    }
    function qn(e) {
      var n = Xc.get(e);
      return n === void 0 && (n = N("</" + e + ">"), Xc.set(e, n)), n;
    }
    function du(e, n) {
      e = e.preamble, e.htmlChunks === null && n.htmlChunks && (e.htmlChunks = n.htmlChunks), e.headChunks === null && n.headChunks && (e.headChunks = n.headChunks), e.bodyChunks === null && n.bodyChunks && (e.bodyChunks = n.bodyChunks);
    }
    function gu(e, n) {
      n = n.bootstrapChunks;
      for (var c = 0; c < n.length - 1; c++)
        W(e, n[c]);
      return c < n.length ? (c = n[c], n.length = 0, Ce(e, c)) : !0;
    }
    function si(e, n, c) {
      if (W(e, ta), c === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return W(e, n.boundaryPrefix), W(e, $(c.toString(16))), Ce(e, ol);
    }
    function vu(e, n, c, h) {
      switch (c.insertionMode) {
        case vo:
        case ji:
        case lc:
        case tr:
          return W(e, ls), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, Il);
        case rr:
          return W(e, $r), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, ia);
        case qr:
          return W(e, cl), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, Du);
        case Ci:
          return W(e, Eo), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, l);
        case ic:
          return W(e, s), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, v);
        case ki:
          return W(e, R), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, k);
        case mc:
          return W(e, p), W(e, n.segmentPrefix), W(e, $(h.toString(16))), Ce(e, L);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ho(e, n) {
      switch (n.insertionMode) {
        case vo:
        case ji:
        case lc:
        case tr:
          return Ce(e, xo);
        case rr:
          return Ce(e, Wa);
        case qr:
          return Ce(e, is);
        case Ci:
          return Ce(e, a);
        case ic:
          return Ce(e, w);
        case ki:
          return Ce(e, D);
        case mc:
          return Ce(e, U);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ga(e) {
      return JSON.stringify(e).replace(
        sl,
        function(n) {
          switch (n) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function Hi(e) {
      return JSON.stringify(e).replace(
        or,
        function(n) {
          switch (n) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function va(e) {
      var n = e.rules, c = e.hrefs;
      0 < n.length && c.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var h = 0;
      if (c.length) {
        for (W(this, He.startInlineStyle), W(this, Ml), W(this, e.precedence), W(this, cr); h < c.length - 1; h++)
          W(this, c[h]), W(this, Dn);
        for (W(this, c[h]), W(this, ma), h = 0; h < n.length; h++)
          W(this, n[h]);
        Co = Ce(
          this,
          Ro
        ), pr = !0, n.length = 0, c.length = 0;
      }
    }
    function Wo(e) {
      return e.state !== ql ? pr = !0 : !1;
    }
    function Wn(e, n, c) {
      return pr = !1, Co = !0, He = c, n.styles.forEach(va, e), He = null, n.stylesheets.forEach(Wo), pr && (c.stylesToHoist = !0), Co;
    }
    function An(e) {
      for (var n = 0; n < e.length; n++)
        W(this, e[n]);
      e.length = 0;
    }
    function Fc(e) {
      xr(ur, e.props);
      for (var n = 0; n < ur.length; n++)
        W(this, ur[n]);
      ur.length = 0, e.state = ql;
    }
    function ba(e) {
      var n = 0 < e.sheets.size;
      e.sheets.forEach(Fc, this), e.sheets.clear();
      var c = e.rules, h = e.hrefs;
      if (!n || h.length) {
        if (W(this, He.startInlineStyle), W(this, Ua), W(this, e.precedence), e = 0, h.length) {
          for (W(this, Lu); e < h.length - 1; e++)
            W(this, h[e]), W(this, Dn);
          W(this, h[e]);
        }
        for (W(this, ko), e = 0; e < c.length; e++)
          W(this, c[e]);
        W(this, Ol), c.length = 0, h.length = 0;
      }
    }
    function Zu(e) {
      if (e.state === aa) {
        e.state = jc;
        var n = e.props;
        for (xr(ur, {
          rel: "preload",
          as: "style",
          href: e.props.href,
          crossOrigin: n.crossOrigin,
          fetchPriority: n.fetchPriority,
          integrity: n.integrity,
          media: n.media,
          hrefLang: n.hrefLang,
          referrerPolicy: n.referrerPolicy
        }), e = 0; e < ur.length; e++)
          W(this, ur[e]);
        ur.length = 0;
      }
    }
    function bu(e) {
      e.sheets.forEach(Zu, this), e.sheets.clear();
    }
    function tl(e, n) {
      (n.instructions & en) === mn && (n.instructions |= en, e.push(
        Vc,
        $(
          ge("_" + n.idPrefix + "R_")
        ),
        Be
      ));
    }
    function Hl(e, n) {
      W(e, Ya);
      var c = Ya;
      n.stylesheets.forEach(function(h) {
        if (h.state !== ql)
          if (h.state === Ga)
            W(e, c), h = h.props.href, It(h, "href"), W(
              e,
              $(
                Hi("" + h)
              )
            ), W(e, So), c = Kc;
          else {
            W(e, c);
            var b = h.props["data-precedence"], x = h.props, S = J("" + h.props.href);
            W(
              e,
              $(Hi(S))
            ), It(b, "precedence"), b = "" + b, W(e, qc), W(
              e,
              $(Hi(b))
            );
            for (var A in x)
              if (fn.call(x, A) && (b = x[A], b != null))
                switch (A) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Ju(
                      e,
                      A,
                      b
                    );
                }
            W(e, So), c = Kc, h.state = Ga;
          }
      }), W(e, So);
    }
    function Ju(e, n, c) {
      var h = n.toLowerCase();
      switch (typeof c) {
        case "function":
        case "symbol":
          return;
      }
      switch (n) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          h = "class", It(c, h), n = "" + c;
          break;
        case "hidden":
          if (c === !1)
            return;
          n = "";
          break;
        case "src":
        case "href":
          c = J(c), It(c, h), n = "" + c;
          break;
        default:
          if (2 < n.length && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N") || !vt(n))
            return;
          It(c, h), n = "" + c;
      }
      W(e, qc), W(
        e,
        $(Hi(h))
      ), W(e, qc), W(
        e,
        $(Hi(n))
      );
    }
    function ya() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
    }
    function Qn(e, n, c, h) {
      (e.scriptResources.hasOwnProperty(c) || e.moduleScriptResources.hasOwnProperty(c)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        c
      ), e.scriptResources[c] = nn, e.moduleScriptResources[c] = nn, e = [], xr(e, h), n.bootstrapScripts.add(e);
    }
    function Wi(e, n) {
      e.crossOrigin == null && (e.crossOrigin = n[0]), e.integrity == null && (e.integrity = n[1]);
    }
    function Ni(e, n, c) {
      e = wa(e), n = Or(n, "as"), n = "<" + e + '>; rel=preload; as="' + n + '"';
      for (var h in c)
        fn.call(c, h) && (e = c[h], typeof e == "string" && (n += "; " + h.toLowerCase() + '="' + Or(
          e,
          h
        ) + '"'));
      return n;
    }
    function wa(e) {
      return It(e, "href"), ("" + e).replace(
        Xa,
        Nt
      );
    }
    function Nt(e) {
      switch (e) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Or(e, n) {
      return Di(e) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        n,
        ci(e)
      ), ui(e)), ("" + e).replace(
        as,
        yn
      );
    }
    function yn(e) {
      switch (e) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function No(e) {
      this.styles.add(e);
    }
    function Xr(e) {
      this.stylesheets.add(e);
    }
    function Ke(e, n) {
      n.styles.forEach(No, e), n.stylesheets.forEach(Xr, e), n.suspenseyImages && (e.suspenseyImages = !0);
    }
    function Qu(e) {
      return 0 < e.stylesheets.size || e.suspenseyImages;
    }
    function Ue(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === os ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ti:
          return "Fragment";
        case nc:
          return "Profiler";
        case ec:
          return "StrictMode";
        case Qi:
          return "Suspense";
        case Pa:
          return "SuspenseList";
        case _t:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $o:
            return "Portal";
          case On:
            return e.displayName || "Context";
          case Sr:
            return (e._context.displayName || "Context") + ".Consumer";
          case je:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Fa:
            return n = e.displayName || null, n !== null ? n : Ue(e.type) || "Memo";
          case Vi:
            n = e._payload, e = e._init;
            try {
              return Ue(e(n));
            } catch {
            }
        }
      return null;
    }
    function mo(e, n) {
      if (e !== n) {
        e.context._currentValue = e.parentValue, e = e.parent;
        var c = n.parent;
        if (e === null) {
          if (c !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (c === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          mo(e, c);
        }
        n.context._currentValue = n.value;
      }
    }
    function Uo(e) {
      e.context._currentValue = e.parentValue, e = e.parent, e !== null && Uo(e);
    }
    function Yo(e) {
      var n = e.parent;
      n !== null && Yo(n), e.context._currentValue = e.value;
    }
    function Wl(e, n) {
      if (e.context._currentValue = e.parentValue, e = e.parent, e === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === n.depth ? mo(e, n) : Wl(e, n);
    }
    function sn(e, n) {
      var c = n.parent;
      if (c === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === c.depth ? mo(e, c) : sn(e, c), n.context._currentValue = n.value;
    }
    function qe(e) {
      var n = Fi;
      n !== e && (n === null ? Yo(e) : e === null ? Uo(n) : n.depth === e.depth ? mo(n, e) : n.depth > e.depth ? Wl(n, e) : sn(n, e), Fi = e);
    }
    function El(e) {
      if (e !== null && typeof e != "function") {
        var n = String(e);
        Bu.has(n) || (Bu.add(n), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function mt(e, n) {
      e = (e = e.constructor) && Ue(e) || "ReactClass";
      var c = e + "." + n;
      $c[c] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        n,
        e
      ), $c[c] = !0);
    }
    function Ta(e, n, c) {
      var h = e.id;
      e = e.overflow;
      var b = 32 - Fo(h) - 1;
      h &= ~(1 << b), c += 1;
      var x = 32 - Fo(n) + b;
      if (30 < x) {
        var S = b - b % 5;
        return x = (h & (1 << S) - 1).toString(32), h >>= S, b -= S, {
          id: 1 << 32 - Fo(n) + b | c << b | h,
          overflow: x + e
        };
      }
      return {
        id: 1 << x | c << b | h,
        overflow: e
      };
    }
    function pc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ss(e) / Ps | 0) | 0;
    }
    function $t() {
    }
    function Vu(e, n, c) {
      switch (c = e[c], c === void 0 ? e.push(n) : c !== n && (n.then($t, $t), n = c), n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw n.reason;
        default:
          switch (typeof n.status == "string" ? n.then($t, $t) : (e = n, e.status = "pending", e.then(
            function(h) {
              if (n.status === "pending") {
                var b = n;
                b.status = "fulfilled", b.value = h;
              }
            },
            function(h) {
              if (n.status === "pending") {
                var b = n;
                b.status = "rejected", b.reason = h;
              }
            }
          )), n.status) {
            case "fulfilled":
              return n.value;
            case "rejected":
              throw n.reason;
          }
          throw ss = n, jl;
      }
    }
    function yu() {
      if (ss === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = ss;
      return ss = null, e;
    }
    function Ac(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    function In() {
      if (Lt === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return _l && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), Lt;
    }
    function Ic() {
      if (0 < vc)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function no() {
      return un === null ? hl === null ? (Lr = !1, hl = un = Ic()) : (Lr = !0, un = hl) : un.next === null ? (Lr = !1, un = un.next = Ic()) : (Lr = !0, un = un.next), un;
    }
    function Zr() {
      var e = po;
      return po = null, e;
    }
    function xa() {
      _l = !1, ca = sr = pi = Lt = null, Ai = !1, hl = null, vc = 0, un = Ja = null;
    }
    function Ku(e) {
      return _l && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), e._currentValue;
    }
    function qu(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function to(e, n, c) {
      if (e !== qu && (Qa = "useReducer"), Lt = In(), un = no(), Lr) {
        if (c = un.queue, n = c.dispatch, Ja !== null) {
          var h = Ja.get(c);
          if (h !== void 0) {
            Ja.delete(c), c = un.memoizedState;
            do {
              var b = h.action;
              _l = !0, c = e(c, b), _l = !1, h = h.next;
            } while (h !== null);
            return un.memoizedState = c, [c, n];
          }
        }
        return [un.memoizedState, n];
      }
      return _l = !0, e = e === qu ? typeof n == "function" ? n() : n : c !== void 0 ? c(n) : n, _l = !1, un.memoizedState = e, e = un.queue = { last: null, dispatch: null }, e = e.dispatch = Nl.bind(
        null,
        Lt,
        e
      ), [un.memoizedState, e];
    }
    function ro(e, n) {
      if (Lt = In(), un = no(), n = n === void 0 ? null : n, un !== null) {
        var c = un.memoizedState;
        if (c !== null && n !== null) {
          e: {
            var h = c[1];
            if (h === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                Qa
              ), h = !1;
            else {
              n.length !== h.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                Qa,
                "[" + n.join(", ") + "]",
                "[" + h.join(", ") + "]"
              );
              for (var b = 0; b < h.length && b < n.length; b++)
                if (!Fs(n[b], h[b])) {
                  h = !1;
                  break e;
                }
              h = !0;
            }
          }
          if (h)
            return c[0];
        }
      }
      return _l = !0, e = e(), _l = !1, un.memoizedState = [e, n], e;
    }
    function Nl(e, n, c) {
      if (25 <= vc)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (e === Lt)
        if (Ai = !0, e = { action: c, next: null }, Ja === null && (Ja = /* @__PURE__ */ new Map()), c = Ja.get(n), c === void 0)
          Ja.set(n, e);
        else {
          for (n = c; n.next !== null; )
            n = n.next;
          n.next = e;
        }
    }
    function ml() {
      throw Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      );
    }
    function Mc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Go() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function Xo(e, n, c) {
      In();
      var h = gc++, b = sr;
      if (typeof e.$$FORM_ACTION == "function") {
        var x = null, S = ca;
        b = b.formState;
        var A = e.$$IS_SIGNATURE_EQUAL;
        if (b !== null && typeof A == "function") {
          var G = b[1];
          A.call(e, b[2], b[3]) && (x = c !== void 0 ? "p" + c : "k" + Kt(
            JSON.stringify([
              S,
              null,
              h
            ]),
            0
          ), G === x && (lu = h, n = b[0]));
        }
        var O = e.bind(null, n);
        return e = function(ee) {
          O(ee);
        }, typeof O.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(ee) {
          ee = O.$$FORM_ACTION(ee), c !== void 0 && (It(c, "target"), c += "", ee.action = c);
          var te = ee.data;
          return te && (x === null && (x = c !== void 0 ? "p" + c : "k" + Kt(
            JSON.stringify([
              S,
              null,
              h
            ]),
            0
          )), te.append("$ACTION_KEY", x)), ee;
        }), [n, e, !1];
      }
      var B = e.bind(null, n);
      return [
        n,
        function(ee) {
          B(ee);
        },
        !1
      ];
    }
    function yt(e) {
      var n = fs;
      return fs += 1, po === null && (po = []), Vu(po, e, n);
    }
    function lo() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function Zo() {
    }
    function Oc() {
      if (d === 0) {
        y = console.log, E = console.info, F = console.warn, M = console.error, V = console.group, z = console.groupCollapsed, Z = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Zo,
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
      d++;
    }
    function Ul() {
      if (d--, d === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Sn({}, e, { value: y }),
          info: Sn({}, e, { value: E }),
          warn: Sn({}, e, { value: F }),
          error: Sn({}, e, { value: M }),
          group: Sn({}, e, { value: V }),
          groupCollapsed: Sn({}, e, { value: z }),
          groupEnd: Sn({}, e, { value: Z })
        });
      }
      0 > d && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Jo(e) {
      var n = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = n, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), n = e.indexOf(`
`), n !== -1 && (e = e.slice(n + 1)), n = e.indexOf("react_stack_bottom_frame"), n !== -1 && (n = e.lastIndexOf(
        `
`,
        n
      )), n !== -1)
        e = e.slice(0, n);
      else
        return "";
      return e;
    }
    function Er(e) {
      if (le === void 0)
        try {
          throw Error();
        } catch (c) {
          var n = c.stack.trim().match(/\n( *(at )?)/);
          le = n && n[1] || "", fe = -1 < c.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < c.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + le + e + fe;
    }
    function Rl(e, n) {
      if (!e || oe)
        return "";
      var c = j.get(e);
      if (c !== void 0)
        return c;
      oe = !0, c = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var h = null;
      h = ze.H, ze.H = null, Oc();
      try {
        var b = {
          DetermineComponentFrameRoot: function() {
            try {
              if (n) {
                var te = function() {
                  throw Error();
                };
                if (Object.defineProperty(te.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(te, []);
                  } catch (q) {
                    var ne = q;
                  }
                  Reflect.construct(e, [], te);
                } else {
                  try {
                    te.call();
                  } catch (q) {
                    ne = q;
                  }
                  e.call(te.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (q) {
                  ne = q;
                }
                (te = e()) && typeof te.catch == "function" && te.catch(function() {
                });
              }
            } catch (q) {
              if (q && ne && typeof q.stack == "string")
                return [q.stack, ne.stack];
            }
            return [null, null];
          }
        };
        b.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var x = Object.getOwnPropertyDescriptor(
          b.DetermineComponentFrameRoot,
          "name"
        );
        x && x.configurable && Object.defineProperty(
          b.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var S = b.DetermineComponentFrameRoot(), A = S[0], G = S[1];
        if (A && G) {
          var O = A.split(`
`), B = G.split(`
`);
          for (S = x = 0; x < O.length && !O[x].includes(
            "DetermineComponentFrameRoot"
          ); )
            x++;
          for (; S < B.length && !B[S].includes(
            "DetermineComponentFrameRoot"
          ); )
            S++;
          if (x === O.length || S === B.length)
            for (x = O.length - 1, S = B.length - 1; 1 <= x && 0 <= S && O[x] !== B[S]; )
              S--;
          for (; 1 <= x && 0 <= S; x--, S--)
            if (O[x] !== B[S]) {
              if (x !== 1 || S !== 1)
                do
                  if (x--, S--, 0 > S || O[x] !== B[S]) {
                    var ee = `
` + O[x].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), typeof e == "function" && j.set(e, ee), ee;
                  }
                while (1 <= x && 0 <= S);
              break;
            }
        }
      } finally {
        oe = !1, ze.H = h, Ul(), Error.prepareStackTrace = c;
      }
      return O = (O = e ? e.displayName || e.name : "") ? Er(O) : "", typeof e == "function" && j.set(e, O), O;
    }
    function wu(e) {
      if (typeof e == "string")
        return Er(e);
      if (typeof e == "function")
        return e.prototype && e.prototype.isReactComponent ? Rl(e, !0) : Rl(e, !1);
      if (typeof e == "object" && e !== null) {
        switch (e.$$typeof) {
          case je:
            return Rl(e.render, !1);
          case Fa:
            return Rl(e.type, !1);
          case Vi:
            var n = e, c = n._payload;
            n = n._init;
            try {
              e = n(c);
            } catch {
              return Er("Lazy");
            }
            return wu(e);
        }
        if (typeof e.name == "string") {
          e: {
            if (c = e.name, n = e.env, e = e.debugLocation, e != null) {
              e = Jo(e);
              var h = e.lastIndexOf(`
`);
              if (e = h === -1 ? e : e.slice(h + 1), e.indexOf(c) !== -1) {
                c = `
` + e;
                break e;
              }
            }
            c = Er(
              c + (n ? " [" + n + "]" : "")
            );
          }
          return c;
        }
      }
      switch (e) {
        case Pa:
          return Er("SuspenseList");
        case Qi:
          return Er("Suspense");
      }
      return "";
    }
    function Qo() {
      var e = $l();
      1e3 < e - an && (ze.recentlyCreatedOwnerStacks = 0, an = e);
    }
    function Rr(e, n) {
      return (500 < n.byteSize || Qu(n.contentState)) && n.contentPreamble === null;
    }
    function Vo(e) {
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var n = e.environmentName;
        e = [e].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          "%c%s%c " + e[0],
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + n + " ",
          ""
        ) : e.splice(
          0,
          0,
          "%c%s%c",
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + n + " ",
          ""
        ), e.unshift(console), n = fl.apply(console.error, e), n();
      } else
        console.error(e);
      return null;
    }
    function mi(e, n, c, h, b, x, S, A, G, O, B) {
      var ee = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = n, this.rootFormatContext = c, this.progressiveChunkSize = h === void 0 ? 12800 : h, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = ee, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = b === void 0 ? Vo : b, this.onPostpone = O === void 0 ? $t : O, this.onAllReady = x === void 0 ? $t : x, this.onShellReady = S === void 0 ? $t : S, this.onShellError = A === void 0 ? $t : A, this.onFatalError = G === void 0 ? $t : G, this.formState = B === void 0 ? null : B, this.didWarnForKey = null;
    }
    function io(e, n, c, h, b, x, S, A, G, O, B, ee) {
      return Qo(), n = new mi(
        n,
        c,
        h,
        b,
        x,
        S,
        A,
        G,
        O,
        B,
        ee
      ), c = hi(
        n,
        0,
        null,
        h,
        !1,
        !1
      ), c.parentFlushed = !0, e = Cl(
        n,
        null,
        e,
        -1,
        null,
        c,
        null,
        null,
        n.abortableTasks,
        null,
        h,
        null,
        ru,
        null,
        null,
        el,
        null
      ), gi(e), n.pingedTasks.push(e), n;
    }
    function Cr(e, n, c, h, b, x, S, A, G, O, B) {
      return e = io(
        e,
        n,
        c,
        h,
        b,
        x,
        S,
        A,
        G,
        O,
        B,
        void 0
      ), e.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      }, e;
    }
    function Ct(e, n, c, h, b, x, S, A, G) {
      return Qo(), c = new mi(
        n.resumableState,
        c,
        n.rootFormatContext,
        n.progressiveChunkSize,
        h,
        b,
        x,
        S,
        A,
        G,
        null
      ), c.nextSegmentId = n.nextSegmentId, typeof n.replaySlots == "number" ? (h = hi(
        c,
        0,
        null,
        n.rootFormatContext,
        !1,
        !1
      ), h.parentFlushed = !0, e = Cl(
        c,
        null,
        e,
        -1,
        null,
        h,
        null,
        null,
        c.abortableTasks,
        null,
        n.rootFormatContext,
        null,
        ru,
        null,
        null,
        el,
        null
      ), gi(e), c.pingedTasks.push(e), c) : (e = xu(
        c,
        null,
        {
          nodes: n.replayNodes,
          slots: n.replaySlots,
          pendingTasks: 0
        },
        e,
        -1,
        null,
        null,
        c.abortableTasks,
        null,
        n.rootFormatContext,
        null,
        ru,
        null,
        null,
        el,
        null
      ), gi(e), c.pingedTasks.push(e), c);
    }
    function kn(e, n, c, h, b, x, S, A, G) {
      return e = Ct(
        e,
        n,
        c,
        h,
        b,
        x,
        S,
        A,
        G
      ), e.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      }, e;
    }
    function Tu(e, n) {
      e.pingedTasks.push(n), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? Aa(function() {
        return Ji(e);
      }) : ve(function() {
        return Ji(e);
      }));
    }
    function fi(e, n, c, h, b) {
      return c = {
        status: hn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        row: n,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: c,
        errorDigest: null,
        contentState: ya(),
        fallbackState: ya(),
        contentPreamble: h,
        fallbackPreamble: b,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      }, n !== null && (n.pendingTasks++, h = n.boundaries, h !== null && (e.allPendingTasks++, c.pendingTasks++, h.push(c)), e = n.inheritedHoistables, e !== null && Ke(c.contentState, e)), c;
    }
    function Cl(e, n, c, h, b, x, S, A, G, O, B, ee, te, ne, q, Re, xn) {
      e.allPendingTasks++, b === null ? e.pendingRootTasks++ : b.pendingTasks++, ne !== null && ne.pendingTasks++;
      var we = {
        replay: null,
        node: c,
        childIndex: h,
        ping: function() {
          return Tu(e, we);
        },
        blockedBoundary: b,
        blockedSegment: x,
        blockedPreamble: S,
        hoistableState: A,
        abortSet: G,
        keyPath: O,
        formatContext: B,
        context: ee,
        treeContext: te,
        row: ne,
        componentStack: q,
        thenableState: n
      };
      return we.debugTask = xn, G.add(we), we;
    }
    function xu(e, n, c, h, b, x, S, A, G, O, B, ee, te, ne, q, Re) {
      e.allPendingTasks++, x === null ? e.pendingRootTasks++ : x.pendingTasks++, te !== null && te.pendingTasks++, c.pendingTasks++;
      var xn = {
        replay: c,
        node: h,
        childIndex: b,
        ping: function() {
          return Tu(e, xn);
        },
        blockedBoundary: x,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: S,
        abortSet: A,
        keyPath: G,
        formatContext: O,
        context: B,
        treeContext: ee,
        row: te,
        componentStack: ne,
        thenableState: n
      };
      return xn.debugTask = Re, A.add(xn), xn;
    }
    function hi(e, n, c, h, b, x) {
      return {
        status: hn,
        parentFlushed: !1,
        id: -1,
        index: n,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: h,
        boundary: c,
        lastPushedText: b,
        textEmbedded: x
      };
    }
    function Yl() {
      if (r === null || r.componentStack === null)
        return "";
      var e = r.componentStack;
      try {
        var n = "";
        if (typeof e.type == "string")
          n += Er(e.type);
        else if (typeof e.type == "function") {
          if (!e.owner) {
            var c = n, h = e.type, b = h ? h.displayName || h.name : "", x = b ? Er(b) : "";
            n = c + x;
          }
        } else
          e.owner || (n += wu(e.type));
        for (; e; )
          c = null, e.debugStack != null ? c = Jo(
            e.debugStack
          ) : (x = e, x.stack != null && (c = typeof x.stack != "string" ? x.stack = Jo(
            x.stack
          ) : x.stack)), (e = e.owner) && c && (n += `
` + c);
        var S = n;
      } catch (A) {
        S = `
Error generating stack: ` + A.message + `
` + A.stack;
      }
      return S;
    }
    function ao(e, n) {
      if (n != null)
        for (var c = n.length - 1; 0 <= c; c--) {
          var h = n[c];
          if (typeof h.name == "string" || typeof h.time == "number")
            break;
          if (h.awaited != null) {
            var b = h.debugStack == null ? h.awaited : h;
            if (b.debugStack !== void 0) {
              e.componentStack = {
                parent: e.componentStack,
                type: h,
                owner: b.owner,
                stack: b.debugStack
              }, e.debugTask = b.debugTask;
              break;
            }
          }
        }
    }
    function di(e, n) {
      if (n != null)
        for (var c = 0; c < n.length; c++) {
          var h = n[c];
          typeof h.name == "string" && h.debugStack !== void 0 && (e.componentStack = {
            parent: e.componentStack,
            type: h,
            owner: h.owner,
            stack: h.debugStack
          }, e.debugTask = h.debugTask);
        }
    }
    function gi(e) {
      var n = e.node;
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case Bc:
            var c = n.type, h = n._owner, b = n._debugStack;
            di(e, n._debugInfo), e.debugTask = n._debugTask, e.componentStack = {
              parent: e.componentStack,
              type: c,
              owner: h,
              stack: b
            };
            break;
          case Vi:
            di(e, n._debugInfo);
            break;
          default:
            typeof n.then == "function" && di(e, n._debugInfo);
        }
    }
    function oo(e) {
      return e === null ? null : {
        parent: e.parent,
        type: "Suspense Fallback",
        owner: e.owner,
        stack: e.stack
      };
    }
    function Oe(e) {
      var n = {};
      return e && Object.defineProperty(n, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var c = "", h = e;
            do
              c += wu(h.type), h = h.parent;
            while (h);
            var b = c;
          } catch (x) {
            b = `
Error generating stack: ` + x.message + `
` + x.stack;
          }
          return Object.defineProperty(n, "componentStack", {
            value: b
          }), b;
        }
      }), n;
    }
    function kl(e, n, c, h, b) {
      e.errorDigest = n, c instanceof Error ? (n = String(c.message), c = String(c.stack)) : (n = typeof c == "object" && c !== null ? vn(c) : String(c), c = null), b = b ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, e.errorMessage = b + n, e.errorStack = c !== null ? b + c : null, e.errorComponentStack = h.componentStack;
    }
    function lt(e, n, c, h) {
      if (e = e.onError, n = h ? h.run(e.bind(null, n, c)) : e(n, c), n != null && typeof n != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof n
        );
      else
        return n;
    }
    function Gl(e, n, c, h) {
      c = e.onShellError;
      var b = e.onFatalError;
      h ? (h.run(c.bind(null, n)), h.run(b.bind(null, n))) : (c(n), b(n)), e.destination !== null ? (e.status = fr, ha(e.destination, n)) : (e.status = 13, e.fatalError = n);
    }
    function wt(e, n) {
      Ui(e, n.next, n.hoistables);
    }
    function Ui(e, n, c) {
      for (; n !== null; ) {
        c !== null && (Ke(n.hoistables, c), n.inheritedHoistables = c);
        var h = n.boundaries;
        if (h !== null) {
          n.boundaries = null;
          for (var b = 0; b < h.length; b++) {
            var x = h[b];
            c !== null && Ke(
              x.contentState,
              c
            ), Zi(e, x, null, null);
          }
        }
        if (n.pendingTasks--, 0 < n.pendingTasks)
          break;
        c = n.hoistables, n = n.next;
      }
    }
    function Ea(e, n) {
      var c = n.boundaries;
      if (c !== null && n.pendingTasks === c.length) {
        for (var h = !0, b = 0; b < c.length; b++) {
          var x = c[b];
          if (x.pendingTasks !== 1 || x.parentFlushed || Rr(e, x)) {
            h = !1;
            break;
          }
        }
        h && Ui(e, n, n.hoistables);
      }
    }
    function Xl(e) {
      var n = {
        pendingTasks: 1,
        boundaries: null,
        hoistables: ya(),
        inheritedHoistables: null,
        together: !1,
        next: null
      };
      return e !== null && 0 < e.pendingTasks && (n.pendingTasks++, n.boundaries = [], e.next = n), n;
    }
    function vi(e, n, c, h, b) {
      var x = n.keyPath, S = n.treeContext, A = n.row, G = n.componentStack, O = n.debugTask;
      di(n, n.node.props.children._debugInfo), n.keyPath = c, c = h.length;
      var B = null;
      if (n.replay !== null) {
        var ee = n.replay.slots;
        if (ee !== null && typeof ee == "object")
          for (var te = 0; te < c; te++) {
            var ne = b !== "backwards" && b !== "unstable_legacy-backwards" ? te : c - 1 - te, q = h[ne];
            n.row = B = Xl(
              B
            ), n.treeContext = Ta(S, c, ne);
            var Re = ee[ne];
            typeof Re == "number" ? (Ra(e, n, Re, q, ne), delete ee[ne]) : kt(e, n, q, ne), --B.pendingTasks === 0 && wt(e, B);
          }
        else
          for (ee = 0; ee < c; ee++)
            te = b !== "backwards" && b !== "unstable_legacy-backwards" ? ee : c - 1 - ee, ne = h[te], Sl(e, n, ne), n.row = B = Xl(B), n.treeContext = Ta(S, c, te), kt(e, n, ne, te), --B.pendingTasks === 0 && wt(e, B);
      } else if (b !== "backwards" && b !== "unstable_legacy-backwards")
        for (b = 0; b < c; b++)
          ee = h[b], Sl(e, n, ee), n.row = B = Xl(B), n.treeContext = Ta(
            S,
            c,
            b
          ), kt(e, n, ee, b), --B.pendingTasks === 0 && wt(e, B);
      else {
        for (b = n.blockedSegment, ee = b.children.length, te = b.chunks.length, ne = c - 1; 0 <= ne; ne--) {
          q = h[ne], n.row = B = Xl(
            B
          ), n.treeContext = Ta(S, c, ne), Re = hi(
            e,
            te,
            null,
            n.formatContext,
            ne === 0 ? b.lastPushedText : !0,
            !0
          ), b.children.splice(ee, 0, Re), n.blockedSegment = Re, Sl(e, n, q);
          try {
            kt(e, n, q, ne), Re.lastPushedText && Re.textEmbedded && Re.chunks.push(ot), Re.status = dn, Pl(e, n.blockedBoundary, Re), --B.pendingTasks === 0 && wt(e, B);
          } catch (xn) {
            throw Re.status = e.status === 12 ? Xn : Ze, xn;
          }
        }
        n.blockedSegment = b, b.lastPushedText = !1;
      }
      A !== null && B !== null && 0 < B.pendingTasks && (A.pendingTasks++, B.next = A), n.treeContext = S, n.row = A, n.keyPath = x, n.componentStack = G, n.debugTask = O;
    }
    function it(e, n, c, h, b, x) {
      var S = n.thenableState;
      for (n.thenableState = null, Lt = {}, pi = n, sr = e, ca = c, _l = !1, gc = ut = 0, lu = -1, fs = 0, po = S, e = Cn(h, b, x); Ai; )
        Ai = !1, gc = ut = 0, lu = -1, fs = 0, vc += 1, un = null, e = h(b, x);
      return xa(), e;
    }
    function bi(e, n, c, h, b, x, S) {
      var A = !1;
      if (x !== 0 && e.formState !== null) {
        var G = n.blockedSegment;
        if (G !== null) {
          A = !0, G = G.chunks;
          for (var O = 0; O < x; O++)
            O === S ? G.push(Ba) : G.push(ir);
        }
      }
      x = n.keyPath, n.keyPath = c, b ? (c = n.treeContext, n.treeContext = Ta(c, 1, 0), kt(e, n, h, -1), n.treeContext = c) : A ? kt(e, n, h, -1) : kr(e, n, h, -1), n.keyPath = x;
    }
    function yi(e, n, c, h, b, x) {
      if (typeof h == "function")
        if (h.prototype && h.prototype.isReactComponent) {
          var S = b;
          if ("ref" in b) {
            S = {};
            for (var A in b)
              A !== "ref" && (S[A] = b[A]);
          }
          var G = h.defaultProps;
          if (G) {
            S === b && (S = Sn({}, S, b));
            for (var O in G)
              S[O] === void 0 && (S[O] = G[O]);
          }
          var B = S, ee = el, te = h.contextType;
          if ("contextType" in h && te !== null && (te === void 0 || te.$$typeof !== On) && !ws.has(h)) {
            ws.add(h);
            var ne = te === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof te != "object" ? " However, it is set to a " + typeof te + "." : te.$$typeof === Sr ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(te).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              Ue(h) || "Component",
              ne
            );
          }
          typeof te == "object" && te !== null && (ee = te._currentValue);
          var q = new h(B, ee);
          if (typeof h.getDerivedStateFromProps == "function" && (q.state === null || q.state === void 0)) {
            var Re = Ue(h) || "Component";
            nu.has(Re) || (nu.add(Re), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              Re,
              q.state === null ? "null" : "undefined",
              Re
            ));
          }
          if (typeof h.getDerivedStateFromProps == "function" || typeof q.getSnapshotBeforeUpdate == "function") {
            var xn = null, we = null, Ne = null;
            if (typeof q.componentWillMount == "function" && q.componentWillMount.__suppressDeprecationWarning !== !0 ? xn = "componentWillMount" : typeof q.UNSAFE_componentWillMount == "function" && (xn = "UNSAFE_componentWillMount"), typeof q.componentWillReceiveProps == "function" && q.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? we = "componentWillReceiveProps" : typeof q.UNSAFE_componentWillReceiveProps == "function" && (we = "UNSAFE_componentWillReceiveProps"), typeof q.componentWillUpdate == "function" && q.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ne = "componentWillUpdate" : typeof q.UNSAFE_componentWillUpdate == "function" && (Ne = "UNSAFE_componentWillUpdate"), xn !== null || we !== null || Ne !== null) {
              var Vn = Ue(h) || "Component", st = typeof h.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              cs.has(Vn) || (cs.add(
                Vn
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                Vn,
                st,
                xn !== null ? `
  ` + xn : "",
                we !== null ? `
  ` + we : "",
                Ne !== null ? `
  ` + Ne : ""
              ));
            }
          }
          var rn = Ue(h) || "Component";
          q.render || (h.prototype && typeof h.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            rn
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            rn
          )), !q.getInitialState || q.getInitialState.isReactClassApproved || q.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            rn
          ), q.getDefaultProps && !q.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            rn
          ), q.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            rn
          ), h.childContextTypes && !tu.has(h) && (tu.add(h), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            rn
          )), h.contextTypes && !us.has(h) && (us.add(h), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            rn
          )), typeof q.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            rn
          ), h.prototype && h.prototype.isPureReactComponent && typeof q.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Ue(h) || "A pure component"
          ), typeof q.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            rn
          ), typeof q.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            rn
          ), typeof q.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            rn
          ), typeof q.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            rn
          );
          var ye = q.props !== B;
          q.props !== void 0 && ye && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            rn
          ), q.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            rn,
            rn
          ), typeof q.getSnapshotBeforeUpdate != "function" || typeof q.componentDidUpdate == "function" || Za.has(h) || (Za.add(h), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Ue(h)
          )), typeof q.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            rn
          ), typeof q.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            rn
          ), typeof h.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            rn
          );
          var ft = q.state;
          ft && (typeof ft != "object" || Jl(ft)) && console.error("%s.state: must be set to an object or null", rn), typeof q.getChildContext == "function" && typeof h.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            rn
          );
          var hr = q.state !== void 0 ? q.state : null;
          q.updater = Ts, q.props = B, q.state = hr;
          var En = { queue: [], replace: !1 };
          q._reactInternals = En;
          var zn = h.contextType;
          if (q.context = typeof zn == "object" && zn !== null ? zn._currentValue : el, q.state === B) {
            var Hr = Ue(h) || "Component";
            zu.has(
              Hr
            ) || (zu.add(
              Hr
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              Hr
            ));
          }
          var Qt = h.getDerivedStateFromProps;
          if (typeof Qt == "function") {
            var pt = Qt(
              B,
              hr
            );
            if (pt === void 0) {
              var Bn = Ue(h) || "Component";
              Po.has(Bn) || (Po.add(Bn), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                Bn
              ));
            }
            var xt = pt == null ? hr : Sn({}, hr, pt);
            q.state = xt;
          }
          if (typeof h.getDerivedStateFromProps != "function" && typeof q.getSnapshotBeforeUpdate != "function" && (typeof q.UNSAFE_componentWillMount == "function" || typeof q.componentWillMount == "function")) {
            var Wr = q.state;
            if (typeof q.componentWillMount == "function") {
              if (q.componentWillMount.__suppressDeprecationWarning !== !0) {
                var nl = Ue(h) || "Unknown";
                eu[nl] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  nl
                ), eu[nl] = !0);
              }
              q.componentWillMount();
            }
            if (typeof q.UNSAFE_componentWillMount == "function" && q.UNSAFE_componentWillMount(), Wr !== q.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Ue(h) || "Component"
            ), Ts.enqueueReplaceState(
              q,
              q.state,
              null
            )), En.queue !== null && 0 < En.queue.length) {
              var At = En.queue, Zn = En.replace;
              if (En.queue = null, En.replace = !1, Zn && At.length === 1)
                q.state = At[0];
              else {
                for (var dr = Zn ? At[0] : q.state, Nr = !0, gr = Zn ? 1 : 0; gr < At.length; gr++) {
                  var Ii = At[gr], mr = typeof Ii == "function" ? Ii.call(
                    q,
                    dr,
                    B,
                    void 0
                  ) : Ii;
                  mr != null && (Nr ? (Nr = !1, dr = Sn(
                    {},
                    dr,
                    mr
                  )) : Sn(dr, mr));
                }
                q.state = dr;
              }
            } else
              En.queue = null;
          }
          var ht = tn(q);
          if (e.status === 12)
            throw null;
          q.props !== B && (Br || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Ue(h) || "a component"
          ), Br = !0);
          var dl = n.keyPath;
          n.keyPath = c, kr(e, n, ht, -1), n.keyPath = dl;
        } else {
          if (h.prototype && typeof h.prototype.render == "function") {
            var Bt = Ue(h) || "Unknown";
            Jt[Bt] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              Bt,
              Bt
            ), Jt[Bt] = !0);
          }
          var Hu = it(
            e,
            n,
            c,
            h,
            b,
            void 0
          );
          if (e.status === 12)
            throw null;
          var ri = ut !== 0, Kn = gc, gl = lu;
          if (h.contextTypes) {
            var vr = Ue(h) || "Unknown";
            Ln[vr] || (Ln[vr] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              vr
            ));
          }
          if (h && h.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            h.displayName || h.name || "Component"
          ), typeof h.getDerivedStateFromProps == "function") {
            var yc = Ue(h) || "Unknown";
            Ao[yc] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              yc
            ), Ao[yc] = !0);
          }
          if (typeof h.contextType == "object" && h.contextType !== null) {
            var Io = Ue(h) || "Unknown";
            zr[Io] || (console.error(
              "%s: Function components do not support contextType.",
              Io
            ), zr[Io] = !0);
          }
          bi(
            e,
            n,
            c,
            Hu,
            ri,
            Kn,
            gl
          );
        }
      else if (typeof h == "string") {
        var Dl = n.blockedSegment;
        if (Dl === null) {
          var Mo = b.children, Ur = n.formatContext, wc = n.keyPath;
          n.formatContext = Wt(Ur, h, b), n.keyPath = c, kt(e, n, Mo, -1), n.formatContext = Ur, n.keyPath = wc;
        } else {
          var Wu = Xu(
            Dl.chunks,
            h,
            b,
            e.resumableState,
            e.renderState,
            n.blockedPreamble,
            n.hoistableState,
            n.formatContext,
            Dl.lastPushedText
          );
          Dl.lastPushedText = !1;
          var vl = n.formatContext, Tc = n.keyPath;
          if (n.keyPath = c, (n.formatContext = Wt(
            vl,
            h,
            b
          )).insertionMode === lc) {
            var br = hi(
              e,
              0,
              null,
              n.formatContext,
              !1,
              !1
            );
            Dl.preambleChildren.push(br), n.blockedSegment = br;
            try {
              br.status = 6, kt(e, n, Wu, -1), br.lastPushedText && br.textEmbedded && br.chunks.push(ot), br.status = dn, Pl(e, n.blockedBoundary, br);
            } finally {
              n.blockedSegment = Dl;
            }
          } else
            kt(e, n, Wu, -1);
          n.formatContext = vl, n.keyPath = Tc;
          e: {
            var Oo = Dl.chunks, Va = e.resumableState;
            switch (h) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break e;
              case "body":
                if (vl.insertionMode <= ji) {
                  Va.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (vl.insertionMode === vo) {
                  Va.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (vl.insertionMode <= ji)
                  break e;
            }
            Oo.push(qn(h));
          }
          Dl.lastPushedText = !1;
        }
      } else {
        switch (h) {
          case bs:
          case ec:
          case nc:
          case Ti:
            var ua = n.keyPath;
            n.keyPath = c, kr(e, n, b.children, -1), n.keyPath = ua;
            return;
          case _t:
            var bl = n.blockedSegment;
            if (bl === null) {
              if (b.mode !== "hidden") {
                var yl = n.keyPath;
                n.keyPath = c, kt(e, n, b.children, -1), n.keyPath = yl;
              }
            } else if (b.mode !== "hidden") {
              bl.chunks.push(_u), bl.lastPushedText = !1;
              var li = n.keyPath;
              n.keyPath = c, kt(e, n, b.children, -1), n.keyPath = li, bl.chunks.push(Jc), bl.lastPushedText = !1;
            }
            return;
          case Pa:
            e: {
              var Yr = b.children, Vt = b.revealOrder;
              if (Vt === "forwards" || Vt === "backwards" || Vt === "unstable_legacy-backwards") {
                if (Jl(Yr)) {
                  vi(
                    e,
                    n,
                    c,
                    Yr,
                    Vt
                  );
                  break e;
                }
                var sa = _(Yr);
                if (sa) {
                  var ii = sa.call(Yr);
                  if (ii) {
                    Ca(
                      n,
                      Yr,
                      -1,
                      ii,
                      sa
                    );
                    var Ka = ii.next();
                    if (!Ka.done) {
                      var Mi = [];
                      do
                        Mi.push(Ka.value), Ka = ii.next();
                      while (!Ka.done);
                      vi(
                        e,
                        n,
                        c,
                        Yr,
                        Vt
                      );
                    }
                    break e;
                  }
                }
              }
              if (Vt === "together") {
                var hs = n.keyPath, Ir = n.row, Ll = n.row = Xl(null);
                Ll.boundaries = [], Ll.together = !0, n.keyPath = c, kr(e, n, Yr, -1), --Ll.pendingTasks === 0 && wt(e, Ll), n.keyPath = hs, n.row = Ir, Ir !== null && 0 < Ll.pendingTasks && (Ir.pendingTasks++, Ll.next = Ir);
              } else {
                var xc = n.keyPath;
                n.keyPath = c, kr(e, n, Yr, -1), n.keyPath = xc;
              }
            }
            return;
          case $u:
          case Su:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case Qi:
            e:
              if (n.replay !== null) {
                var iu = n.keyPath, au = n.formatContext, zs = n.row;
                n.keyPath = c, n.formatContext = Tr(
                  e.resumableState,
                  au
                ), n.row = null;
                var qa = b.children;
                try {
                  kt(e, n, qa, -1);
                } finally {
                  n.keyPath = iu, n.formatContext = au, n.row = zs;
                }
              } else {
                var _o = n.keyPath, ja = n.formatContext, ou = n.row, ps = n.blockedBoundary, xs = n.blockedPreamble, Mr = n.hoistableState, ai = n.blockedSegment, $a = b.fallback, Nu = b.children, wl = /* @__PURE__ */ new Set(), dt = n.formatContext.insertionMode < tr ? fi(
                  e,
                  n.row,
                  wl,
                  ie(),
                  ie()
                ) : fi(
                  e,
                  n.row,
                  wl,
                  null,
                  null
                );
                e.trackedPostpones !== null && (dt.trackedContentKeyPath = c);
                var Jn = hi(
                  e,
                  ai.chunks.length,
                  dt,
                  n.formatContext,
                  !1,
                  !1
                );
                ai.children.push(Jn), ai.lastPushedText = !1;
                var Fn = hi(
                  e,
                  0,
                  null,
                  n.formatContext,
                  !1,
                  !1
                );
                if (Fn.parentFlushed = !0, e.trackedPostpones !== null) {
                  var Es = n.componentStack, Do = [
                    c[0],
                    "Suspense Fallback",
                    c[2]
                  ], mu = [
                    Do[1],
                    Do[2],
                    [],
                    null
                  ];
                  e.trackedPostpones.workingMap.set(
                    Do,
                    mu
                  ), dt.trackedFallbackNode = mu, n.blockedSegment = Jn, n.blockedPreamble = dt.fallbackPreamble, n.keyPath = Do, n.formatContext = Qe(
                    e.resumableState,
                    ja
                  ), n.componentStack = oo(
                    Es
                  ), Jn.status = 6;
                  try {
                    kt(e, n, $a, -1), Jn.lastPushedText && Jn.textEmbedded && Jn.chunks.push(ot), Jn.status = dn, Pl(e, ps, Jn);
                  } catch (Hs) {
                    throw Jn.status = e.status === 12 ? Xn : Ze, Hs;
                  } finally {
                    n.blockedSegment = ai, n.blockedPreamble = xs, n.keyPath = _o, n.formatContext = ja;
                  }
                  var Lo = Cl(
                    e,
                    null,
                    Nu,
                    -1,
                    dt,
                    Fn,
                    dt.contentPreamble,
                    dt.contentState,
                    n.abortSet,
                    c,
                    Tr(
                      e.resumableState,
                      n.formatContext
                    ),
                    n.context,
                    n.treeContext,
                    null,
                    Es,
                    el,
                    n.debugTask
                  );
                  gi(Lo), e.pingedTasks.push(Lo);
                } else {
                  n.blockedBoundary = dt, n.blockedPreamble = dt.contentPreamble, n.hoistableState = dt.contentState, n.blockedSegment = Fn, n.keyPath = c, n.formatContext = Tr(
                    e.resumableState,
                    ja
                  ), n.row = null, Fn.status = 6;
                  try {
                    if (kt(e, n, Nu, -1), Fn.lastPushedText && Fn.textEmbedded && Fn.chunks.push(ot), Fn.status = dn, Pl(e, dt, Fn), fo(dt, Fn), dt.pendingTasks === 0 && dt.status === hn) {
                      if (dt.status = dn, !Rr(e, dt)) {
                        ou !== null && --ou.pendingTasks === 0 && wt(e, ou), e.pendingRootTasks === 0 && n.blockedPreamble && Sa(e);
                        break e;
                      }
                    } else
                      ou !== null && ou.together && Ea(e, ou);
                  } catch (Hs) {
                    if (dt.status = de, e.status === 12) {
                      Fn.status = Xn;
                      var Ec = e.fatalError;
                    } else
                      Fn.status = Ze, Ec = Hs;
                    var Uu = Oe(n.componentStack), Rc = lt(
                      e,
                      Ec,
                      Uu,
                      n.debugTask
                    );
                    kl(
                      dt,
                      Rc,
                      Ec,
                      Uu,
                      !1
                    ), co(e, dt);
                  } finally {
                    n.blockedBoundary = ps, n.blockedPreamble = xs, n.hoistableState = Mr, n.blockedSegment = ai, n.keyPath = _o, n.formatContext = ja, n.row = ou;
                  }
                  var cu = Cl(
                    e,
                    null,
                    $a,
                    -1,
                    ps,
                    Jn,
                    dt.fallbackPreamble,
                    dt.fallbackState,
                    wl,
                    [c[0], "Suspense Fallback", c[2]],
                    Qe(
                      e.resumableState,
                      n.formatContext
                    ),
                    n.context,
                    n.treeContext,
                    n.row,
                    oo(
                      n.componentStack
                    ),
                    el,
                    n.debugTask
                  );
                  gi(cu), e.pingedTasks.push(cu);
                }
              }
            return;
        }
        if (typeof h == "object" && h !== null)
          switch (h.$$typeof) {
            case je:
              if ("ref" in b) {
                var uu = {};
                for (var ds in b)
                  ds !== "ref" && (uu[ds] = b[ds]);
              } else
                uu = b;
              var Rs = it(
                e,
                n,
                c,
                h.render,
                uu,
                x
              );
              bi(
                e,
                n,
                c,
                Rs,
                ut !== 0,
                gc,
                lu
              );
              return;
            case Fa:
              yi(e, n, c, h.type, b, x);
              return;
            case On:
              var As = b.value, Yu = b.children, Gu = n.context, Cc = n.keyPath, eo = h._currentValue;
              h._currentValue = As, h._currentRenderer !== void 0 && h._currentRenderer !== null && h._currentRenderer !== oa && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), h._currentRenderer = oa;
              var fa = Fi, Gr = {
                parent: fa,
                depth: fa === null ? 0 : fa.depth + 1,
                context: h,
                parentValue: eo,
                value: As
              };
              Fi = Gr, n.context = Gr, n.keyPath = c, kr(e, n, Yu, -1);
              var su = Fi;
              if (su === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              su.context !== h && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), su.context._currentValue = su.parentValue, h._currentRenderer !== void 0 && h._currentRenderer !== null && h._currentRenderer !== oa && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), h._currentRenderer = oa;
              var Is = Fi = su.parent;
              n.context = Is, n.keyPath = Cc, Gu !== n.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case Sr:
              var Bs = h._context, Cs = b.children;
              typeof Cs != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var js = Cs(Bs._currentValue), gs = n.keyPath;
              n.keyPath = c, kr(e, n, js, -1), n.keyPath = gs;
              return;
            case Vi:
              var $s = Zt(h);
              if (e.status === 12)
                throw null;
              yi(e, n, c, $s, b, x);
              return;
          }
        var Ms = "";
        throw (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Ms += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((h == null ? h : typeof h) + "." + Ms)
        );
      }
    }
    function Ra(e, n, c, h, b) {
      var x = n.replay, S = n.blockedBoundary, A = hi(
        e,
        0,
        null,
        n.formatContext,
        !1,
        !1
      );
      A.id = c, A.parentFlushed = !0;
      try {
        n.replay = null, n.blockedSegment = A, kt(e, n, h, b), A.status = dn, Pl(e, S, A), S === null ? e.completedRootSegment = A : (fo(S, A), S.parentFlushed && e.partialBoundaries.push(S));
      } finally {
        n.replay = x, n.blockedSegment = null;
      }
    }
    function Yi(e, n, c, h, b, x, S, A, G, O) {
      x = O.nodes;
      for (var B = 0; B < x.length; B++) {
        var ee = x[B];
        if (b === ee[1]) {
          if (ee.length === 4) {
            if (h !== null && h !== ee[0])
              throw Error(
                "Expected the resume to render <" + ee[0] + "> in this slot but instead it rendered <" + h + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var te = ee[2];
            h = ee[3], b = n.node, n.replay = { nodes: te, slots: h, pendingTasks: 1 };
            try {
              if (yi(e, n, c, S, A, G), n.replay.pendingTasks === 1 && 0 < n.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              n.replay.pendingTasks--;
            } catch (ye) {
              if (typeof ye == "object" && ye !== null && (ye === jl || typeof ye.then == "function"))
                throw n.node === b ? n.replay = O : x.splice(B, 1), ye;
              n.replay.pendingTasks--, S = Oe(n.componentStack), A = e, e = n.blockedBoundary, c = ye, G = h, h = lt(A, c, S, n.debugTask), Gi(
                A,
                e,
                te,
                G,
                c,
                h,
                S,
                !1
              );
            }
            n.replay = O;
          } else {
            if (S !== Qi)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Ue(S) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              O = void 0, h = ee[5], S = ee[2], G = ee[3], b = ee[4] === null ? [] : ee[4][2], ee = ee[4] === null ? null : ee[4][3];
              var ne = n.keyPath, q = n.formatContext, Re = n.row, xn = n.replay, we = n.blockedBoundary, Ne = n.hoistableState, Vn = A.children, st = A.fallback, rn = /* @__PURE__ */ new Set();
              A = n.formatContext.insertionMode < tr ? fi(
                e,
                n.row,
                rn,
                ie(),
                ie()
              ) : fi(
                e,
                n.row,
                rn,
                null,
                null
              ), A.parentFlushed = !0, A.rootSegmentID = h, n.blockedBoundary = A, n.hoistableState = A.contentState, n.keyPath = c, n.formatContext = Tr(
                e.resumableState,
                q
              ), n.row = null, n.replay = { nodes: S, slots: G, pendingTasks: 1 };
              try {
                if (kt(e, n, Vn, -1), n.replay.pendingTasks === 1 && 0 < n.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (n.replay.pendingTasks--, A.pendingTasks === 0 && A.status === hn) {
                  A.status = dn, e.completedBoundaries.push(A);
                  break e;
                }
              } catch (ye) {
                A.status = de, te = Oe(n.componentStack), O = lt(
                  e,
                  ye,
                  te,
                  n.debugTask
                ), kl(A, O, ye, te, !1), n.replay.pendingTasks--, e.clientRenderedBoundaries.push(A);
              } finally {
                n.blockedBoundary = we, n.hoistableState = Ne, n.replay = xn, n.keyPath = ne, n.formatContext = q, n.row = Re;
              }
              A = xu(
                e,
                null,
                { nodes: b, slots: ee, pendingTasks: 0 },
                st,
                -1,
                we,
                A.fallbackState,
                rn,
                [c[0], "Suspense Fallback", c[2]],
                Qe(
                  e.resumableState,
                  n.formatContext
                ),
                n.context,
                n.treeContext,
                n.row,
                oo(
                  n.componentStack
                ),
                el,
                n.debugTask
              ), gi(A), e.pingedTasks.push(A);
            }
          }
          x.splice(B, 1);
          break;
        }
      }
    }
    function Ca(e, n, c, h, b) {
      h === n ? (c !== -1 || e.componentStack === null || typeof e.componentStack.type != "function" || Object.prototype.toString.call(e.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(h) !== "[object Generator]") && (ei || console.error(
        "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
      ), ei = !0) : n.entries !== b || ni || (console.error(
        "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
      ), ni = !0);
    }
    function kr(e, n, c, h) {
      n.replay !== null && typeof n.replay.slots == "number" ? Ra(e, n, n.replay.slots, c, h) : (n.node = c, n.childIndex = h, c = n.componentStack, h = n.debugTask, gi(n), ka(e, n), n.componentStack = c, n.debugTask = h);
    }
    function ka(e, n) {
      var c = n.node, h = n.childIndex;
      if (c !== null) {
        if (typeof c == "object") {
          switch (c.$$typeof) {
            case Bc:
              var b = c.type, x = c.key;
              c = c.props;
              var S = c.ref;
              S = S !== void 0 ? S : null;
              var A = n.debugTask, G = Ue(b);
              x = x ?? (h === -1 ? 0 : h);
              var O = [n.keyPath, G, x];
              n.replay !== null ? A ? A.run(
                Yi.bind(
                  null,
                  e,
                  n,
                  O,
                  G,
                  x,
                  h,
                  b,
                  c,
                  S,
                  n.replay
                )
              ) : Yi(
                e,
                n,
                O,
                G,
                x,
                h,
                b,
                c,
                S,
                n.replay
              ) : A ? A.run(
                yi.bind(
                  null,
                  e,
                  n,
                  O,
                  b,
                  c,
                  S
                )
              ) : yi(e, n, O, b, c, S);
              return;
            case $o:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case Vi:
              if (b = Zt(c), e.status === 12)
                throw null;
              kr(e, n, b, h);
              return;
          }
          if (Jl(c)) {
            Eu(e, n, c, h);
            return;
          }
          if ((x = _(c)) && (b = x.call(c))) {
            if (Ca(n, c, h, b, x), c = b.next(), !c.done) {
              x = [];
              do
                x.push(c.value), c = b.next();
              while (!c.done);
              Eu(e, n, x, h);
            }
            return;
          }
          if (typeof c.then == "function")
            return n.thenableState = null, kr(
              e,
              n,
              yt(c),
              h
            );
          if (c.$$typeof === On)
            return kr(
              e,
              n,
              c._currentValue,
              h
            );
          throw e = Object.prototype.toString.call(c), Error(
            "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof c == "string" ? (n = n.blockedSegment, n !== null && (n.lastPushedText = nt(
          n.chunks,
          c,
          e.renderState,
          n.lastPushedText
        ))) : typeof c == "number" || typeof c == "bigint" ? (n = n.blockedSegment, n !== null && (n.lastPushedText = nt(
          n.chunks,
          "" + c,
          e.renderState,
          n.lastPushedText
        ))) : (typeof c == "function" && (e = c.displayName || c.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          e,
          e
        )), typeof c == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(c)
        ));
      }
    }
    function Sl(e, n, c) {
      if (c !== null && typeof c == "object" && (c.$$typeof === Bc || c.$$typeof === $o) && c._store && (!c._store.validated && c.key == null || c._store.validated === 2)) {
        if (typeof c._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        c._store.validated = 1;
        var h = e.didWarnForKey;
        if (h == null && (h = e.didWarnForKey = /* @__PURE__ */ new WeakSet()), e = n.componentStack, e !== null && !h.has(e)) {
          h.add(e);
          var b = Ue(c.type);
          h = c._owner;
          var x = e.owner;
          if (e = "", x && typeof x.type < "u") {
            var S = Ue(x.type);
            S && (e = `

Check the render method of \`` + S + "`.");
          }
          e || b && (e = `

Check the top-level render call using <` + b + ">."), b = "", h != null && x !== h && (x = null, typeof h.type < "u" ? x = Ue(h.type) : typeof h.name == "string" && (x = h.name), x && (b = " It was passed a child from " + x + ".")), h = n.componentStack, n.componentStack = {
            parent: n.componentStack,
            type: c.type,
            owner: c._owner,
            stack: c._debugStack
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            e,
            b
          ), n.componentStack = h;
        }
      }
    }
    function Eu(e, n, c, h) {
      var b = n.keyPath, x = n.componentStack, S = n.debugTask;
      if (di(n, n.node._debugInfo), h !== -1 && (n.keyPath = [n.keyPath, "Fragment", h], n.replay !== null)) {
        for (var A = n.replay, G = A.nodes, O = 0; O < G.length; O++) {
          var B = G[O];
          if (B[1] === h) {
            h = B[2], B = B[3], n.replay = { nodes: h, slots: B, pendingTasks: 1 };
            try {
              if (Eu(e, n, c, -1), n.replay.pendingTasks === 1 && 0 < n.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              n.replay.pendingTasks--;
            } catch (q) {
              if (typeof q == "object" && q !== null && (q === jl || typeof q.then == "function"))
                throw q;
              n.replay.pendingTasks--;
              var ee = Oe(n.componentStack);
              c = n.blockedBoundary;
              var te = q, ne = B;
              B = lt(
                e,
                te,
                ee,
                n.debugTask
              ), Gi(
                e,
                c,
                h,
                ne,
                te,
                B,
                ee,
                !1
              );
            }
            n.replay = A, G.splice(O, 1);
            break;
          }
        }
        n.keyPath = b, n.componentStack = x, n.debugTask = S;
        return;
      }
      if (A = n.treeContext, G = c.length, n.replay !== null && (O = n.replay.slots, O !== null && typeof O == "object")) {
        for (h = 0; h < G; h++)
          B = c[h], n.treeContext = Ta(
            A,
            G,
            h
          ), te = O[h], typeof te == "number" ? (Ra(e, n, te, B, h), delete O[h]) : kt(e, n, B, h);
        n.treeContext = A, n.keyPath = b, n.componentStack = x, n.debugTask = S;
        return;
      }
      for (O = 0; O < G; O++)
        h = c[O], Sl(e, n, h), n.treeContext = Ta(A, G, O), kt(e, n, h, O);
      n.treeContext = A, n.keyPath = b, n.componentStack = x, n.debugTask = S;
    }
    function Ru(e, n, c) {
      if (c.status = De, c.rootSegmentID = e.nextSegmentId++, e = c.trackedContentKeyPath, e === null)
        throw Error(
          "It should not be possible to postpone at the root. This is a bug in React."
        );
      var h = c.trackedFallbackNode, b = [], x = n.workingMap.get(e);
      return x === void 0 ? (c = [
        e[1],
        e[2],
        b,
        null,
        h,
        c.rootSegmentID
      ], n.workingMap.set(e, c), Kr(c, e[0], n), c) : (x[4] = h, x[5] = c.rootSegmentID, x);
    }
    function Cu(e, n, c, h) {
      h.status = De;
      var b = c.keyPath, x = c.blockedBoundary;
      if (x === null)
        h.id = e.nextSegmentId++, n.rootSlots = h.id, e.completedRootSegment !== null && (e.completedRootSegment.status = De);
      else {
        if (x !== null && x.status === hn) {
          var S = Ru(
            e,
            n,
            x
          );
          if (x.trackedContentKeyPath === b && c.childIndex === -1) {
            h.id === -1 && (h.id = h.parentFlushed ? x.rootSegmentID : e.nextSegmentId++), S[3] = h.id;
            return;
          }
        }
        if (h.id === -1 && (h.id = h.parentFlushed && x !== null ? x.rootSegmentID : e.nextSegmentId++), c.childIndex === -1)
          b === null ? n.rootSlots = h.id : (c = n.workingMap.get(b), c === void 0 ? (c = [b[1], b[2], [], h.id], Kr(c, b[0], n)) : c[3] = h.id);
        else {
          if (b === null) {
            if (e = n.rootSlots, e === null)
              e = n.rootSlots = {};
            else if (typeof e == "number")
              throw Error(
                "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
              );
          } else if (x = n.workingMap, S = x.get(b), S === void 0)
            e = {}, S = [b[1], b[2], [], e], x.set(b, S), Kr(S, b[0], n);
          else if (e = S[3], e === null)
            e = S[3] = {};
          else if (typeof e == "number")
            throw Error(
              "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
            );
          e[c.childIndex] = h.id;
        }
      }
    }
    function co(e, n) {
      e = e.trackedPostpones, e !== null && (n = n.trackedContentKeyPath, n !== null && (n = e.workingMap.get(n), n !== void 0 && (n.length = 4, n[2] = [], n[3] = null)));
    }
    function uo(e, n, c) {
      return xu(
        e,
        c,
        n.replay,
        n.node,
        n.childIndex,
        n.blockedBoundary,
        n.hoistableState,
        n.abortSet,
        n.keyPath,
        n.formatContext,
        n.context,
        n.treeContext,
        n.row,
        n.componentStack,
        el,
        n.debugTask
      );
    }
    function so(e, n, c) {
      var h = n.blockedSegment, b = hi(
        e,
        h.chunks.length,
        null,
        n.formatContext,
        h.lastPushedText,
        !0
      );
      return h.children.push(b), h.lastPushedText = !1, Cl(
        e,
        c,
        n.node,
        n.childIndex,
        n.blockedBoundary,
        b,
        n.blockedPreamble,
        n.hoistableState,
        n.abortSet,
        n.keyPath,
        n.formatContext,
        n.context,
        n.treeContext,
        n.row,
        n.componentStack,
        el,
        n.debugTask
      );
    }
    function kt(e, n, c, h) {
      var b = n.formatContext, x = n.context, S = n.keyPath, A = n.treeContext, G = n.componentStack, O = n.debugTask, B = n.blockedSegment;
      if (B === null) {
        B = n.replay;
        try {
          return kr(e, n, c, h);
        } catch (ne) {
          if (xa(), c = ne === jl ? yu() : ne, e.status !== 12 && typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              h = ne === jl ? Zr() : null, e = uo(
                e,
                n,
                h
              ).ping, c.then(e, e), n.formatContext = b, n.context = x, n.keyPath = S, n.treeContext = A, n.componentStack = G, n.replay = B, n.debugTask = O, qe(x);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              c = ne === jl ? Zr() : null, c = uo(e, n, c), e.pingedTasks.push(c), n.formatContext = b, n.context = x, n.keyPath = S, n.treeContext = A, n.componentStack = G, n.replay = B, n.debugTask = O, qe(x);
              return;
            }
          }
        }
      } else {
        var ee = B.children.length, te = B.chunks.length;
        try {
          return kr(e, n, c, h);
        } catch (ne) {
          if (xa(), B.children.length = ee, B.chunks.length = te, c = ne === jl ? yu() : ne, e.status !== 12 && typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              B = c, c = ne === jl ? Zr() : null, e = so(e, n, c).ping, B.then(e, e), n.formatContext = b, n.context = x, n.keyPath = S, n.treeContext = A, n.componentStack = G, n.debugTask = O, qe(x);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              B = ne === jl ? Zr() : null, B = so(e, n, B), e.pingedTasks.push(B), n.formatContext = b, n.context = x, n.keyPath = S, n.treeContext = A, n.componentStack = G, n.debugTask = O, qe(x);
              return;
            }
          }
        }
      }
      throw n.formatContext = b, n.context = x, n.keyPath = S, n.treeContext = A, qe(x), c;
    }
    function ju(e) {
      var n = e.blockedBoundary, c = e.blockedSegment;
      c !== null && (c.status = Xn, Zi(this, n, e.row, c));
    }
    function Gi(e, n, c, h, b, x, S, A) {
      for (var G = 0; G < c.length; G++) {
        var O = c[G];
        if (O.length === 4)
          Gi(
            e,
            n,
            O[2],
            O[3],
            b,
            x,
            S,
            A
          );
        else {
          var B = e;
          O = O[5];
          var ee = b, te = x, ne = S, q = A, Re = fi(
            B,
            null,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          Re.parentFlushed = !0, Re.rootSegmentID = O, Re.status = de, kl(
            Re,
            te,
            ee,
            ne,
            q
          ), Re.parentFlushed && B.clientRenderedBoundaries.push(Re);
        }
      }
      if (c.length = 0, h !== null) {
        if (n === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (n.status !== de && (n.status = de, kl(
          n,
          x,
          b,
          S,
          A
        ), n.parentFlushed && e.clientRenderedBoundaries.push(n)), typeof h == "object")
          for (var xn in h)
            delete h[xn];
      }
    }
    function Ko(e, n, c) {
      var h = e.blockedBoundary, b = e.blockedSegment;
      if (b !== null) {
        if (b.status === 6)
          return;
        b.status = Xn;
      }
      var x = Oe(e.componentStack), S = e.node;
      if (S !== null && typeof S == "object" && ao(e, S._debugInfo), h === null) {
        if (n.status !== 13 && n.status !== fr) {
          if (h = e.replay, h === null) {
            n.trackedPostpones !== null && b !== null ? (h = n.trackedPostpones, lt(n, c, x, e.debugTask), Cu(n, h, e, b), Zi(n, null, e.row, b)) : (lt(n, c, x, e.debugTask), Gl(n, c, x, e.debugTask));
            return;
          }
          h.pendingTasks--, h.pendingTasks === 0 && 0 < h.nodes.length && (b = lt(n, c, x, null), Gi(
            n,
            null,
            h.nodes,
            h.slots,
            c,
            b,
            x,
            !0
          )), n.pendingRootTasks--, n.pendingRootTasks === 0 && wi(n);
        }
      } else {
        if (S = n.trackedPostpones, h.status !== de) {
          if (S !== null && b !== null)
            return lt(n, c, x, e.debugTask), Cu(n, S, e, b), h.fallbackAbortableTasks.forEach(function(A) {
              return Ko(A, n, c);
            }), h.fallbackAbortableTasks.clear(), Zi(n, h, e.row, b);
          h.status = de, b = lt(
            n,
            c,
            x,
            e.debugTask
          ), h.status = de, kl(h, b, c, x, !0), co(n, h), h.parentFlushed && n.clientRenderedBoundaries.push(h);
        }
        h.pendingTasks--, x = h.row, x !== null && --x.pendingTasks === 0 && wt(n, x), h.fallbackAbortableTasks.forEach(function(A) {
          return Ko(A, n, c);
        }), h.fallbackAbortableTasks.clear();
      }
      e = e.row, e !== null && --e.pendingTasks === 0 && wt(n, e), n.allPendingTasks--, n.allPendingTasks === 0 && Xi(n);
    }
    function _c(e, n) {
      try {
        var c = e.renderState, h = c.onHeaders;
        if (h) {
          var b = c.headers;
          if (b) {
            c.headers = null;
            var x = b.preconnects;
            if (b.fontPreloads && (x && (x += ", "), x += b.fontPreloads), b.highImagePreloads && (x && (x += ", "), x += b.highImagePreloads), !n) {
              var S = c.styles.values(), A = S.next();
              e:
                for (; 0 < b.remainingCapacity && !A.done; A = S.next())
                  for (var G = A.value.sheets.values(), O = G.next(); 0 < b.remainingCapacity && !O.done; O = G.next()) {
                    var B = O.value, ee = B.props, te = ee.href, ne = B.props, q = Ni(
                      ne.href,
                      "style",
                      {
                        crossOrigin: ne.crossOrigin,
                        integrity: ne.integrity,
                        nonce: ne.nonce,
                        type: ne.type,
                        fetchPriority: ne.fetchPriority,
                        referrerPolicy: ne.referrerPolicy,
                        media: ne.media
                      }
                    );
                    if (0 <= (b.remainingCapacity -= q.length + 2))
                      c.resets.style[te] = Pt, x && (x += ", "), x += q, c.resets.style[te] = typeof ee.crossOrigin == "string" || typeof ee.integrity == "string" ? [ee.crossOrigin, ee.integrity] : Pt;
                    else
                      break e;
                  }
            }
            h(x ? { Link: x } : {});
          }
        }
      } catch (Re) {
        lt(e, Re, {}, null);
      }
    }
    function wi(e) {
      e.trackedPostpones === null && _c(e, !0), e.trackedPostpones === null && Sa(e), e.onShellError = $t, e = e.onShellReady, e();
    }
    function Xi(e) {
      _c(
        e,
        e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== De
      ), Sa(e), e = e.onAllReady, e();
    }
    function fo(e, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null && n.children[0].id === -1) {
        var c = n.children[0];
        c.id = n.id, c.parentFlushed = !0, c.status !== dn && c.status !== Xn && c.status !== Ze || fo(e, c);
      } else
        e.completedSegments.push(n);
    }
    function Pl(e, n, c) {
      if (_i !== null) {
        c = c.chunks;
        for (var h = 0, b = 0; b < c.length; b++)
          h += c[b].byteLength;
        n === null ? e.byteSize += h : n.byteSize += h;
      }
    }
    function Zi(e, n, c, h) {
      if (c !== null && (--c.pendingTasks === 0 ? wt(e, c) : c.together && Ea(e, c)), e.allPendingTasks--, n === null) {
        if (h !== null && h.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          e.completedRootSegment = h;
        }
        e.pendingRootTasks--, e.pendingRootTasks === 0 && wi(e);
      } else if (n.pendingTasks--, n.status !== de)
        if (n.pendingTasks === 0) {
          if (n.status === hn && (n.status = dn), h !== null && h.parentFlushed && (h.status === dn || h.status === Xn) && fo(n, h), n.parentFlushed && e.completedBoundaries.push(n), n.status === dn)
            c = n.row, c !== null && Ke(c.hoistables, n.contentState), Rr(e, n) || (n.fallbackAbortableTasks.forEach(
              ju,
              e
            ), n.fallbackAbortableTasks.clear(), c !== null && --c.pendingTasks === 0 && wt(e, c)), e.pendingRootTasks === 0 && e.trackedPostpones === null && n.contentPreamble !== null && Sa(e);
          else if (n.status === De && (n = n.row, n !== null)) {
            if (e.trackedPostpones !== null) {
              c = e.trackedPostpones;
              var b = n.next;
              if (b !== null && (h = b.boundaries, h !== null))
                for (b.boundaries = null, b = 0; b < h.length; b++) {
                  var x = h[b];
                  Ru(e, c, x), Zi(e, x, null, null);
                }
            }
            --n.pendingTasks === 0 && wt(e, n);
          }
        } else
          h === null || !h.parentFlushed || h.status !== dn && h.status !== Xn || (fo(n, h), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)), n = n.row, n !== null && n.together && Ea(e, n);
      e.allPendingTasks === 0 && Xi(e);
    }
    function Ji(e) {
      if (e.status !== fr && e.status !== 13) {
        var n = Fi, c = ze.H;
        ze.H = bc;
        var h = ze.A;
        ze.A = u;
        var b = gn;
        gn = e;
        var x = ze.getCurrentStack;
        ze.getCurrentStack = Yl;
        var S = t;
        t = e.resumableState;
        try {
          var A = e.pingedTasks, G;
          for (G = 0; G < A.length; G++) {
            var O = e, B = A[G], ee = B.blockedSegment;
            if (ee === null) {
              var te = void 0, ne = O;
              if (O = B, O.replay.pendingTasks !== 0) {
                qe(O.context), te = r, r = O;
                try {
                  if (typeof O.replay.slots == "number" ? Ra(
                    ne,
                    O,
                    O.replay.slots,
                    O.node,
                    O.childIndex
                  ) : ka(ne, O), O.replay.pendingTasks === 1 && 0 < O.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  O.replay.pendingTasks--, O.abortSet.delete(O), Zi(
                    ne,
                    O.blockedBoundary,
                    O.row,
                    null
                  );
                } catch (Zn) {
                  xa();
                  var q = Zn === jl ? yu() : Zn;
                  if (typeof q == "object" && q !== null && typeof q.then == "function") {
                    var Re = O.ping;
                    q.then(Re, Re), O.thenableState = Zn === jl ? Zr() : null;
                  } else {
                    O.replay.pendingTasks--, O.abortSet.delete(O);
                    var xn = Oe(O.componentStack), we = void 0, Ne = ne, Vn = O.blockedBoundary, st = ne.status === 12 ? ne.fatalError : q, rn = xn, ye = O.replay.nodes, ft = O.replay.slots;
                    we = lt(
                      Ne,
                      st,
                      rn,
                      O.debugTask
                    ), Gi(
                      Ne,
                      Vn,
                      ye,
                      ft,
                      st,
                      we,
                      rn,
                      !1
                    ), ne.pendingRootTasks--, ne.pendingRootTasks === 0 && wi(ne), ne.allPendingTasks--, ne.allPendingTasks === 0 && Xi(ne);
                  }
                } finally {
                  r = te;
                }
              }
            } else if (ne = te = void 0, we = B, Ne = ee, Ne.status === hn) {
              Ne.status = 6, qe(we.context), ne = r, r = we;
              var hr = Ne.children.length, En = Ne.chunks.length;
              try {
                ka(O, we), Ne.lastPushedText && Ne.textEmbedded && Ne.chunks.push(ot), we.abortSet.delete(we), Ne.status = dn, Pl(
                  O,
                  we.blockedBoundary,
                  Ne
                ), Zi(
                  O,
                  we.blockedBoundary,
                  we.row,
                  Ne
                );
              } catch (Zn) {
                xa(), Ne.children.length = hr, Ne.chunks.length = En;
                var zn = Zn === jl ? yu() : O.status === 12 ? O.fatalError : Zn;
                if (O.status === 12 && O.trackedPostpones !== null) {
                  var Hr = O.trackedPostpones, Qt = Oe(we.componentStack);
                  we.abortSet.delete(we), lt(
                    O,
                    zn,
                    Qt,
                    we.debugTask
                  ), Cu(
                    O,
                    Hr,
                    we,
                    Ne
                  ), Zi(
                    O,
                    we.blockedBoundary,
                    we.row,
                    Ne
                  );
                } else if (typeof zn == "object" && zn !== null && typeof zn.then == "function") {
                  Ne.status = hn, we.thenableState = Zn === jl ? Zr() : null;
                  var pt = we.ping;
                  zn.then(pt, pt);
                } else {
                  var Bn = Oe(
                    we.componentStack
                  );
                  we.abortSet.delete(we), Ne.status = Ze;
                  var xt = we.blockedBoundary, Wr = we.row, nl = we.debugTask;
                  if (Wr !== null && --Wr.pendingTasks === 0 && wt(O, Wr), O.allPendingTasks--, te = lt(
                    O,
                    zn,
                    Bn,
                    nl
                  ), xt === null)
                    Gl(
                      O,
                      zn,
                      Bn,
                      nl
                    );
                  else if (xt.pendingTasks--, xt.status !== de) {
                    xt.status = de, kl(
                      xt,
                      te,
                      zn,
                      Bn,
                      !1
                    ), co(O, xt);
                    var At = xt.row;
                    At !== null && --At.pendingTasks === 0 && wt(O, At), xt.parentFlushed && O.clientRenderedBoundaries.push(xt), O.pendingRootTasks === 0 && O.trackedPostpones === null && xt.contentPreamble !== null && Sa(O);
                  }
                  O.allPendingTasks === 0 && Xi(O);
                }
              } finally {
                r = ne;
              }
            }
          }
          A.splice(0, G), e.destination !== null && Jr(
            e,
            e.destination
          );
        } catch (Zn) {
          A = {}, lt(e, Zn, A, null), Gl(e, Zn, A, null);
        } finally {
          t = S, ze.H = c, ze.A = h, ze.getCurrentStack = x, c === bc && qe(n), gn = b;
        }
      }
    }
    function ku(e, n, c) {
      n.preambleChildren.length && c.push(n.preambleChildren);
      for (var h = !1, b = 0; b < n.children.length; b++)
        h = vs(
          e,
          n.children[b],
          c
        ) || h;
      return h;
    }
    function vs(e, n, c) {
      var h = n.boundary;
      if (h === null)
        return ku(
          e,
          n,
          c
        );
      var b = h.contentPreamble, x = h.fallbackPreamble;
      if (b === null || x === null)
        return !1;
      switch (h.status) {
        case dn:
          if (du(e.renderState, b), e.byteSize += h.byteSize, n = h.completedSegments[0], !n)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return ku(
            e,
            n,
            c
          );
        case De:
          if (e.trackedPostpones !== null)
            return !0;
        case de:
          if (n.status === dn)
            return du(e.renderState, x), ku(
              e,
              n,
              c
            );
        default:
          return !0;
      }
    }
    function Sa(e) {
      if (e.completedRootSegment && e.completedPreambleSegments === null) {
        var n = [], c = e.byteSize, h = vs(
          e,
          e.completedRootSegment,
          n
        ), b = e.renderState.preamble;
        h === !1 || b.headChunks && b.bodyChunks ? e.completedPreambleSegments = n : e.byteSize = c;
      }
    }
    function at(e, n, c, h) {
      switch (c.parentFlushed = !0, c.status) {
        case hn:
          c.id = e.nextSegmentId++;
        case De:
          return h = c.id, c.lastPushedText = !1, c.textEmbedded = !1, e = e.renderState, W(n, fc), W(n, e.placeholderPrefix), e = $(h.toString(16)), W(n, e), Ce(n, Zc);
        case dn:
          c.status = Tn;
          var b = !0, x = c.chunks, S = 0;
          c = c.children;
          for (var A = 0; A < c.length; A++) {
            for (b = c[A]; S < b.index; S++)
              W(n, x[S]);
            b = Zl(e, n, b, h);
          }
          for (; S < x.length - 1; S++)
            W(n, x[S]);
          return S < x.length && (b = Ce(n, x[S])), b;
        case Xn:
          return !0;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function Zl(e, n, c, h) {
      var b = c.boundary;
      if (b === null)
        return at(e, n, c, h);
      if (b.parentFlushed = !0, b.status === de) {
        var x = b.row;
        x !== null && --x.pendingTasks === 0 && wt(e, x), x = b.errorDigest;
        var S = b.errorMessage, A = b.errorStack;
        b = b.errorComponentStack, Ce(n, ts), W(n, hc), x && (W(n, To), W(n, $(ge(x))), W(
          n,
          Al
        )), S && (W(n, ra), W(
          n,
          $(ge(S))
        ), W(
          n,
          Al
        )), A && (W(n, dc), W(
          n,
          $(ge(A))
        ), W(
          n,
          Al
        )), b && (W(n, la), W(
          n,
          $(ge(b))
        ), W(
          n,
          Al
        )), Ce(n, rs), at(e, n, c, h);
      } else if (b.status !== dn)
        b.status === hn && (b.rootSegmentID = e.nextSegmentId++), 0 < b.completedSegments.length && e.partialBoundaries.push(b), si(
          n,
          e.renderState,
          b.rootSegmentID
        ), h && Ke(h, b.fallbackState), at(e, n, c, h);
      else if (!zt && Rr(e, b) && (ti + b.byteSize > e.progressiveChunkSize || Qu(b.contentState)))
        b.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(b), si(
          n,
          e.renderState,
          b.rootSegmentID
        ), at(e, n, c, h);
      else {
        if (ti += b.byteSize, h && Ke(h, b.contentState), c = b.row, c !== null && Rr(e, b) && --c.pendingTasks === 0 && wt(e, c), Ce(n, Qc), c = b.completedSegments, c.length !== 1)
          throw Error(
            "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
          );
        Zl(e, n, c[0], h);
      }
      return Ce(n, Ha);
    }
    function qo(e, n, c, h) {
      return vu(
        n,
        e.renderState,
        c.parentFormatContext,
        c.id
      ), Zl(e, n, c, h), Ho(n, c.parentFormatContext);
    }
    function jo(e, n, c) {
      ti = c.byteSize;
      for (var h = c.completedSegments, b = 0; b < h.length; b++)
        Dc(
          e,
          n,
          c,
          h[b]
        );
      h.length = 0, h = c.row, h !== null && Rr(e, c) && --h.pendingTasks === 0 && wt(e, h), Wn(
        n,
        c.contentState,
        e.renderState
      ), h = e.resumableState, e = e.renderState, b = c.rootSegmentID, c = c.contentState;
      var x = e.stylesToHoist;
      return e.stylesToHoist = !1, W(n, e.startInlineScript), W(n, Un), x ? ((h.instructions & cn) === mn && (h.instructions |= cn, W(n, ar)), (h.instructions & er) === mn && (h.instructions |= er, W(n, Fe)), (h.instructions & Je) === mn ? (h.instructions |= Je, W(
        n,
        Yn
      )) : W(n, Pn)) : ((h.instructions & er) === mn && (h.instructions |= er, W(n, Fe)), W(n, Ge)), h = $(b.toString(16)), W(n, e.boundaryPrefix), W(n, h), W(n, Gt), W(n, e.segmentPrefix), W(n, h), x ? (W(n, Dr), Hl(n, c)) : W(n, ul), c = Ce(n, pe), gu(n, e) && c;
    }
    function Dc(e, n, c, h) {
      if (h.status === Tn)
        return !0;
      var b = c.contentState, x = h.id;
      if (x === -1) {
        if ((h.id = c.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return qo(
          e,
          n,
          h,
          b
        );
      }
      return x === c.rootSegmentID ? qo(
        e,
        n,
        h,
        b
      ) : (qo(e, n, h, b), c = e.resumableState, e = e.renderState, W(n, e.startInlineScript), W(n, Un), (c.instructions & $e) === mn ? (c.instructions |= $e, W(n, X)) : W(n, se), W(n, e.segmentPrefix), x = $(x.toString(16)), W(n, x), W(n, ce), W(n, e.placeholderPrefix), W(n, x), n = Ce(n, Ye), n);
    }
    function Jr(e, n) {
      Ut = new Uint8Array(2048), Dt = 0;
      try {
        if (!(0 < e.pendingRootTasks)) {
          var c, h = e.completedRootSegment;
          if (h !== null) {
            if (h.status === De)
              return;
            var b = e.completedPreambleSegments;
            if (b === null)
              return;
            ti = e.byteSize;
            var x = e.resumableState, S = e.renderState, A = S.preamble, G = A.htmlChunks, O = A.headChunks, B;
            if (G) {
              for (B = 0; B < G.length; B++)
                W(n, G[B]);
              if (O)
                for (B = 0; B < O.length; B++)
                  W(n, O[B]);
              else
                W(n, Rn("head")), W(n, Un);
            } else if (O)
              for (B = 0; B < O.length; B++)
                W(n, O[B]);
            var ee = S.charsetChunks;
            for (B = 0; B < ee.length; B++)
              W(n, ee[B]);
            ee.length = 0, S.preconnects.forEach(An, n), S.preconnects.clear();
            var te = S.viewportChunks;
            for (B = 0; B < te.length; B++)
              W(n, te[B]);
            te.length = 0, S.fontPreloads.forEach(An, n), S.fontPreloads.clear(), S.highImagePreloads.forEach(An, n), S.highImagePreloads.clear(), He = S, S.styles.forEach(ba, n), He = null;
            var ne = S.importMapChunks;
            for (B = 0; B < ne.length; B++)
              W(n, ne[B]);
            ne.length = 0, S.bootstrapScripts.forEach(An, n), S.scripts.forEach(An, n), S.scripts.clear(), S.bulkPreloads.forEach(An, n), S.bulkPreloads.clear(), G || O || (x.instructions |= en);
            var q = S.hoistableChunks;
            for (B = 0; B < q.length; B++)
              W(n, q[B]);
            for (x = q.length = 0; x < b.length; x++) {
              var Re = b[x];
              for (S = 0; S < Re.length; S++)
                Zl(e, n, Re[S], null);
            }
            var xn = e.renderState.preamble, we = xn.headChunks;
            (xn.htmlChunks || we) && W(n, qn("head"));
            var Ne = xn.bodyChunks;
            if (Ne)
              for (b = 0; b < Ne.length; b++)
                W(n, Ne[b]);
            Zl(e, n, h, null), e.completedRootSegment = null;
            var Vn = e.renderState;
            if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
              var st = e.resumableState;
              if ((st.instructions & Me) === mn) {
                if (st.instructions |= Me, W(n, Vn.startInlineScript), (st.instructions & en) === mn) {
                  st.instructions |= en;
                  var rn = "_" + st.idPrefix + "R_";
                  W(n, Vc), W(
                    n,
                    $(ge(rn))
                  ), W(n, Be);
                }
                W(n, Un), W(n, sc), Ce(n, Ei);
              }
            }
            gu(n, Vn);
          }
          var ye = e.renderState;
          h = 0;
          var ft = ye.viewportChunks;
          for (h = 0; h < ft.length; h++)
            W(
              n,
              ft[h]
            );
          ft.length = 0, ye.preconnects.forEach(An, n), ye.preconnects.clear(), ye.fontPreloads.forEach(An, n), ye.fontPreloads.clear(), ye.highImagePreloads.forEach(
            An,
            n
          ), ye.highImagePreloads.clear(), ye.styles.forEach(bu, n), ye.scripts.forEach(An, n), ye.scripts.clear(), ye.bulkPreloads.forEach(An, n), ye.bulkPreloads.clear();
          var hr = ye.hoistableChunks;
          for (h = 0; h < hr.length; h++)
            W(
              n,
              hr[h]
            );
          hr.length = 0;
          var En = e.clientRenderedBoundaries;
          for (c = 0; c < En.length; c++) {
            var zn = En[c];
            ye = n;
            var Hr = e.resumableState, Qt = e.renderState, pt = zn.rootSegmentID, Bn = zn.errorDigest, xt = zn.errorMessage, Wr = zn.errorStack, nl = zn.errorComponentStack;
            W(
              ye,
              Qt.startInlineScript
            ), W(ye, Un), (Hr.instructions & cn) === mn ? (Hr.instructions |= cn, W(ye, $n)) : W(ye, Fr), W(
              ye,
              Qt.boundaryPrefix
            ), W(ye, $(pt.toString(16))), W(ye, Pi), (Bn || xt || Wr || nl) && (W(
              ye,
              Gn
            ), W(
              ye,
              $(
                ga(Bn || "")
              )
            )), (xt || Wr || nl) && (W(
              ye,
              Gn
            ), W(
              ye,
              $(
                ga(xt || "")
              )
            )), (Wr || nl) && (W(
              ye,
              Gn
            ), W(
              ye,
              $(
                ga(Wr || "")
              )
            )), nl && (W(
              ye,
              Gn
            ), W(
              ye,
              $(
                ga(nl)
              )
            ));
            var At = Ce(
              ye,
              Na
            );
            if (!At) {
              e.destination = null, c++, En.splice(0, c);
              return;
            }
          }
          En.splice(0, c);
          var Zn = e.completedBoundaries;
          for (c = 0; c < Zn.length; c++)
            if (!jo(
              e,
              n,
              Zn[c]
            )) {
              e.destination = null, c++, Zn.splice(0, c);
              return;
            }
          Zn.splice(0, c), Et(n), Ut = new Uint8Array(2048), Dt = 0, zt = !0;
          var dr = e.partialBoundaries;
          for (c = 0; c < dr.length; c++) {
            e: {
              En = e, zn = n;
              var Nr = dr[c];
              ti = Nr.byteSize;
              var gr = Nr.completedSegments;
              for (At = 0; At < gr.length; At++)
                if (!Dc(
                  En,
                  zn,
                  Nr,
                  gr[At]
                )) {
                  At++, gr.splice(0, At);
                  var Ii = !1;
                  break e;
                }
              gr.splice(0, At);
              var mr = Nr.row;
              mr !== null && mr.together && Nr.pendingTasks === 1 && (mr.pendingTasks === 1 ? Ui(
                En,
                mr,
                mr.hoistables
              ) : mr.pendingTasks--), Ii = Wn(
                zn,
                Nr.contentState,
                En.renderState
              );
            }
            if (!Ii) {
              e.destination = null, c++, dr.splice(0, c);
              return;
            }
          }
          dr.splice(0, c), zt = !1;
          var ht = e.completedBoundaries;
          for (c = 0; c < ht.length; c++)
            if (!jo(e, n, ht[c])) {
              e.destination = null, c++, ht.splice(0, c);
              return;
            }
          ht.splice(0, c);
        }
      } finally {
        zt = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, c = e.resumableState, c.hasBody && W(n, qn("body")), c.hasHtml && W(n, qn("html")), Et(n), e.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), e.status = fr, n.close(), e.destination = null) : Et(n);
      }
    }
    function Qr(e) {
      e.flushScheduled = e.destination !== null, Aa(function() {
        return Ji(e);
      }), ve(function() {
        e.status === 10 && (e.status = 11), e.trackedPostpones === null && _c(e, e.pendingRootTasks === 0);
      });
    }
    function _r(e) {
      e.flushScheduled === !1 && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, ve(function() {
        var n = e.destination;
        n ? Jr(e, n) : e.flushScheduled = !1;
      }));
    }
    function Vr(e, n) {
      if (e.status === 13)
        e.status = fr, ha(n, e.fatalError);
      else if (e.status !== fr && e.destination === null) {
        e.destination = n;
        try {
          Jr(e, n);
        } catch (c) {
          n = {}, lt(e, c, n, null), Gl(e, c, n, null);
        }
      }
    }
    function wn(e, n) {
      (e.status === 11 || e.status === 10) && (e.status = 12);
      try {
        var c = e.abortableTasks;
        if (0 < c.size) {
          var h = n === void 0 ? Error("The render was aborted by the server without a reason.") : typeof n == "object" && n !== null && typeof n.then == "function" ? Error("The render was aborted by the server with a promise.") : n;
          e.fatalError = h, c.forEach(function(b) {
            var x = r, S = ze.getCurrentStack;
            r = b, ze.getCurrentStack = Yl;
            try {
              Ko(b, e, h);
            } finally {
              r = x, ze.getCurrentStack = S;
            }
          }), c.clear();
        }
        e.destination !== null && Jr(e, e.destination);
      } catch (b) {
        n = {}, lt(e, b, n, null), Gl(e, b, n, null);
      }
    }
    function Kr(e, n, c) {
      if (n === null)
        c.rootNodes.push(e);
      else {
        var h = c.workingMap, b = h.get(n);
        b === void 0 && (b = [n[1], n[2], [], null], h.set(n, b), Kr(b, n[0], c)), b[2].push(e);
      }
    }
    function Mn(e) {
      var n = e.trackedPostpones;
      if (n === null || n.rootNodes.length === 0 && n.rootSlots === null)
        return e.trackedPostpones = null;
      if (e.completedRootSegment === null || e.completedRootSegment.status !== De && e.completedPreambleSegments !== null) {
        var c = e.nextSegmentId, h = n.rootSlots, b = e.resumableState;
        b.bootstrapScriptContent = void 0, b.bootstrapScripts = void 0, b.bootstrapModules = void 0;
      } else {
        c = 0, h = -1, b = e.resumableState;
        var x = e.renderState;
        b.nextFormID = 0, b.hasBody = !1, b.hasHtml = !1, b.unknownResources = { font: x.resets.font }, b.dnsResources = x.resets.dns, b.connectResources = x.resets.connect, b.imageResources = x.resets.image, b.styleResources = x.resets.style, b.scriptResources = {}, b.moduleUnknownResources = {}, b.moduleScriptResources = {}, b.instructions = mn;
      }
      return {
        nextSegmentId: c,
        rootFormatContext: e.rootFormatContext,
        progressiveChunkSize: e.progressiveChunkSize,
        resumableState: e.resumableState,
        replayNodes: n.rootNodes,
        replaySlots: h
      };
    }
    function Fl() {
      var e = Lc.version;
      if (e !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }
    var Lc = hu, zc = af, Bc = Symbol.for("react.transitional.element"), $o = Symbol.for("react.portal"), Ti = Symbol.for("react.fragment"), ec = Symbol.for("react.strict_mode"), nc = Symbol.for("react.profiler"), Sr = Symbol.for("react.consumer"), On = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), Qi = Symbol.for("react.suspense"), Pa = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Vi = Symbol.for("react.lazy"), Su = Symbol.for("react.scope"), _t = Symbol.for("react.activity"), bs = Symbol.for("react.legacy_hidden"), pl = Symbol.for("react.memo_cache_sentinel"), $u = Symbol.for("react.view_transition"), Pu = Symbol.iterator, Jl = Array.isArray, tc = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), Ql = Symbol.for("react.client.reference"), es = new MessageChannel(), pa = [];
    es.port1.onmessage = function() {
      var e = pa.shift();
      e && e();
    };
    var Hc = Promise, Aa = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
      Hc.resolve(null).then(e).catch(Ht);
    }, Ut = null, Dt = 0, Ki = new TextEncoder(), Sn = Object.assign, fn = Object.prototype.hasOwnProperty, Ia = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), ho = {}, Wc = {}, go = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Fu = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), ys = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Nn = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
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
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
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
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, xi = {}, ns = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), i = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), o = !1, f = {
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
      fetchpriority: "fetchPriority",
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
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
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
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
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
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
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
    }, g = {}, T = /^on./, C = /^on[^A-Z]/, P = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Y = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), I = /^(?:webkit|moz|o)[A-Z]/, H = /^-ms-/, K = /-(.)/g, Q = /;\s*$/, ae = {}, be = {}, Le = !1, Pe = !1, Te = /["'&<>]/, Ie = /([A-Z])/g, Se = /^ms-/, _n = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ze = Lc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xe = zc.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ln = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), _e = Xe.d;
    Xe.d = {
      f: _e.f,
      r: _e.r,
      D: function(e) {
        var n = gn || null;
        if (n) {
          var c = n.resumableState, h = n.renderState;
          if (typeof e == "string" && e) {
            if (!c.dnsResources.hasOwnProperty(e)) {
              c.dnsResources[e] = nn, c = h.headers;
              var b, x;
              (x = c && 0 < c.remainingCapacity) && (x = (b = "<" + wa(e) + ">; rel=dns-prefetch", 0 <= (c.remainingCapacity -= b.length + 2))), x ? (h.resets.dns[e] = nn, c.preconnects && (c.preconnects += ", "), c.preconnects += b) : (b = [], xr(b, { href: e, rel: "dns-prefetch" }), h.preconnects.add(b));
            }
            _r(n);
          }
        } else
          _e.D(e);
      },
      C: function(e, n) {
        var c = gn || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (typeof e == "string" && e) {
            var x = n === "use-credentials" ? "credentials" : typeof n == "string" ? "anonymous" : "default";
            if (!h.connectResources[x].hasOwnProperty(e)) {
              h.connectResources[x][e] = nn, h = b.headers;
              var S, A;
              if (A = h && 0 < h.remainingCapacity) {
                if (A = "<" + wa(e) + ">; rel=preconnect", typeof n == "string") {
                  var G = Or(
                    n,
                    "crossOrigin"
                  );
                  A += '; crossorigin="' + G + '"';
                }
                A = (S = A, 0 <= (h.remainingCapacity -= S.length + 2));
              }
              A ? (b.resets.connect[x][e] = nn, h.preconnects && (h.preconnects += ", "), h.preconnects += S) : (x = [], xr(x, {
                rel: "preconnect",
                href: e,
                crossOrigin: n
              }), b.preconnects.add(x));
            }
            _r(c);
          }
        } else
          _e.C(e, n);
      },
      L: function(e, n, c) {
        var h = gn || null;
        if (h) {
          var b = h.resumableState, x = h.renderState;
          if (n && e) {
            switch (n) {
              case "image":
                if (c)
                  var S = c.imageSrcSet, A = c.imageSizes, G = c.fetchPriority;
                var O = S ? S + `
` + (A || "") : e;
                if (b.imageResources.hasOwnProperty(O))
                  return;
                b.imageResources[O] = Pt, b = x.headers;
                var B;
                b && 0 < b.remainingCapacity && typeof S != "string" && G === "high" && (B = Ni(e, n, c), 0 <= (b.remainingCapacity -= B.length + 2)) ? (x.resets.image[O] = Pt, b.highImagePreloads && (b.highImagePreloads += ", "), b.highImagePreloads += B) : (b = [], xr(
                  b,
                  Sn(
                    {
                      rel: "preload",
                      href: S ? void 0 : e,
                      as: n
                    },
                    c
                  )
                ), G === "high" ? x.highImagePreloads.add(b) : (x.bulkPreloads.add(b), x.preloads.images.set(O, b)));
                break;
              case "style":
                if (b.styleResources.hasOwnProperty(e))
                  return;
                S = [], xr(
                  S,
                  Sn({ rel: "preload", href: e, as: n }, c)
                ), b.styleResources[e] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? Pt : [c.crossOrigin, c.integrity], x.preloads.stylesheets.set(e, S), x.bulkPreloads.add(S);
                break;
              case "script":
                if (b.scriptResources.hasOwnProperty(e))
                  return;
                S = [], x.preloads.scripts.set(e, S), x.bulkPreloads.add(S), xr(
                  S,
                  Sn({ rel: "preload", href: e, as: n }, c)
                ), b.scriptResources[e] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? Pt : [c.crossOrigin, c.integrity];
                break;
              default:
                if (b.unknownResources.hasOwnProperty(n)) {
                  if (S = b.unknownResources[n], S.hasOwnProperty(e))
                    return;
                } else
                  S = {}, b.unknownResources[n] = S;
                if (S[e] = Pt, (b = x.headers) && 0 < b.remainingCapacity && n === "font" && (O = Ni(e, n, c), 0 <= (b.remainingCapacity -= O.length + 2)))
                  x.resets.font[e] = Pt, b.fontPreloads && (b.fontPreloads += ", "), b.fontPreloads += O;
                else
                  switch (b = [], e = Sn(
                    { rel: "preload", href: e, as: n },
                    c
                  ), xr(b, e), n) {
                    case "font":
                      x.fontPreloads.add(b);
                      break;
                    default:
                      x.bulkPreloads.add(b);
                  }
            }
            _r(h);
          }
        } else
          _e.L(e, n, c);
      },
      m: function(e, n) {
        var c = gn || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (e) {
            var x = n && typeof n.as == "string" ? n.as : "script";
            switch (x) {
              case "script":
                if (h.moduleScriptResources.hasOwnProperty(e))
                  return;
                x = [], h.moduleScriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? Pt : [n.crossOrigin, n.integrity], b.preloads.moduleScripts.set(e, x);
                break;
              default:
                if (h.moduleUnknownResources.hasOwnProperty(x)) {
                  var S = h.unknownResources[x];
                  if (S.hasOwnProperty(e))
                    return;
                } else
                  S = {}, h.moduleUnknownResources[x] = S;
                x = [], S[e] = Pt;
            }
            xr(
              x,
              Sn({ rel: "modulepreload", href: e }, n)
            ), b.bulkPreloads.add(x), _r(c);
          }
        } else
          _e.m(e, n);
      },
      X: function(e, n) {
        var c = gn || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (e) {
            var x = h.scriptResources.hasOwnProperty(
              e
            ) ? h.scriptResources[e] : void 0;
            x !== nn && (h.scriptResources[e] = nn, n = Sn({ src: e, async: !0 }, n), x && (x.length === 2 && Wi(n, x), e = b.preloads.scripts.get(e)) && (e.length = 0), e = [], b.scripts.add(e), Pc(e, n), _r(c));
          }
        } else
          _e.X(e, n);
      },
      S: function(e, n, c) {
        var h = gn || null;
        if (h) {
          var b = h.resumableState, x = h.renderState;
          if (e) {
            n = n || "default";
            var S = x.styles.get(n), A = b.styleResources.hasOwnProperty(e) ? b.styleResources[e] : void 0;
            A !== nn && (b.styleResources[e] = nn, S || (S = {
              precedence: $(ge(n)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, x.styles.set(n, S)), n = {
              state: aa,
              props: Sn(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": n
                },
                c
              )
            }, A && (A.length === 2 && Wi(n.props, A), (x = x.preloads.stylesheets.get(e)) && 0 < x.length ? x.length = 0 : n.state = jc), S.sheets.set(e, n), _r(h));
          }
        } else
          _e.S(e, n, c);
      },
      M: function(e, n) {
        var c = gn || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (e) {
            var x = h.moduleScriptResources.hasOwnProperty(e) ? h.moduleScriptResources[e] : void 0;
            x !== nn && (h.moduleScriptResources[e] = nn, n = Sn(
              { src: e, type: "module", async: !0 },
              n
            ), x && (x.length === 2 && Wi(n, x), e = b.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], b.scripts.add(e), Pc(e, n), _r(c));
          }
        } else
          _e.M(e, n);
      }
    };
    var mn = 0, $e = 1, er = 2, cn = 4, Je = 8, en = 32, Me = 64, nn = null, Pt = [];
    Object.freeze(Pt);
    var He = null;
    N('"></template>');
    var qi = N("<script"), Ei = N("<\/script>"), nr = N('<script src="'), rl = N('<script type="module" src="'), ll = N(' nonce="'), il = N(' integrity="'), Vl = N(' crossorigin="'), Ri = N(' async=""><\/script>'), Tt = N("<style"), Ma = /(<\/|<)(s)(cript)/gi, Oa = N(
      '<script type="importmap">'
    ), rc = N("<\/script>"), Nc = {}, vo = 0, ji = 1, tr = 2, lc = 3, rr = 4, qr = 5, Ci = 6, ic = 7, ki = 8, mc = 9, ot = N("<!-- -->"), ac = /* @__PURE__ */ new Map(), $i = N(' style="'), bo = N(":"), _a = N(";"), jn = N(" "), jr = N('="'), Be = N('"'), Si = N('=""'), yo = N(
      ge(
        "javascript:throw new Error('React form unexpectedly submitted.')"
      )
    ), ea = N('<input type="hidden"'), Un = N(">"), Pr = N("/>"), na = !1, Da = !1, al = !1, Yt = !1, wo = !1, lr = !1, pu = !1, La = !1, oc = !1, Uc = !1, Yc = !1, Kl = N(' selected=""'), za = N(
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
    ), Ba = N("<!--F!-->"), ir = N("<!--F-->"), cc = /(<\/|<)(s)(tyle)/gi, uc = N("<!--head-->"), Au = N("<!--body-->"), Iu = N("<!--html-->"), Gc = N(`
`), Mu = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ou = /* @__PURE__ */ new Map(), ct = N("<!DOCTYPE html>"), Xc = /* @__PURE__ */ new Map(), sc = N(
      "requestAnimationFrame(function(){$RT=performance.now()});"
    ), fc = N('<template id="'), Zc = N('"></template>'), _u = N("<!--&-->"), Jc = N("<!--/&-->"), Qc = N("<!--$-->"), ta = N(
      '<!--$?--><template id="'
    ), ol = N('"></template>'), ts = N("<!--$!-->"), Ha = N("<!--/$-->"), hc = N("<template"), Al = N('"'), To = N(' data-dgst="'), ra = N(' data-msg="'), dc = N(' data-stck="'), la = N(' data-cstck="'), rs = N("></template>"), ls = N('<div hidden id="'), Il = N('">'), xo = N("</div>"), $r = N(
      '<svg aria-hidden="true" style="display:none" id="'
    ), ia = N('">'), Wa = N("</svg>"), cl = N(
      '<math aria-hidden="true" style="display:none" id="'
    ), Du = N('">'), is = N("</math>"), Eo = N('<table hidden id="'), l = N('">'), a = N("</table>"), s = N(
      '<table hidden><tbody id="'
    ), v = N('">'), w = N("</tbody></table>"), R = N('<table hidden><tr id="'), k = N('">'), D = N("</tr></table>"), p = N(
      '<table hidden><colgroup id="'
    ), L = N('">'), U = N("</colgroup></table>"), X = N(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ), se = N('$RS("'), ce = N('","'), Ye = N('")<\/script>');
    N('<template data-rsi="" data-sid="'), N('" data-pid="');
    var Fe = N(
      `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
    );
    $(
      `$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),
H=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(B){var z=
document.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=
performance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);`
    );
    var Ge = N('$RC("'), Yn = N(
      `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
    ), Pn = N('$RR("'), Gt = N('","'), Dr = N('",'), ul = N('"'), pe = N(")<\/script>");
    N('<template data-rci="" data-bid="'), N('<template data-rri="" data-bid="'), N('" data-sid="'), N('" data-sty="');
    var ar = N(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
    ), $n = N(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
    ), Fr = N('$RX("'), Pi = N('"'), Gn = N(","), Na = N(")<\/script>");
    N('<template data-rxi="" data-bid="'), N('" data-dgst="'), N('" data-msg="'), N('" data-stck="'), N('" data-cstck="');
    var sl = /[<\u2028\u2029]/g, or = /[&><\u2028\u2029]/g, Ml = N(
      ' media="not all" data-precedence="'
    ), cr = N('" data-href="'), ma = N('">'), Ro = N("</style>"), pr = !1, Co = !0, ur = [], Ua = N(' data-precedence="'), Lu = N('" data-href="'), Dn = N(" "), ko = N('">'), Ol = N("</style>");
    N('<link rel="expect" href="#'), N('" blocking="render"/>');
    var Vc = N(' id="'), Ya = N("["), Kc = N(",["), qc = N(","), So = N("]"), aa = 0, jc = 1, ql = 2, Ga = 3, Xa = /[<>\r\n]/g, as = /["';,\r\n]/g, fl = Function.prototype.bind, os = Symbol.for("react.client.reference"), el = {};
    Object.freeze(el);
    var oa = {}, Fi = null, $c = {}, eu = {}, nu = /* @__PURE__ */ new Set(), Za = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set(), zu = /* @__PURE__ */ new Set(), Po = /* @__PURE__ */ new Set(), us = /* @__PURE__ */ new Set(), tu = /* @__PURE__ */ new Set(), ws = /* @__PURE__ */ new Set(), Bu = /* @__PURE__ */ new Set(), Ts = {
      enqueueSetState: function(e, n, c) {
        var h = e._reactInternals;
        h.queue === null ? mt(e, "setState") : (h.queue.push(n), c != null && El(c));
      },
      enqueueReplaceState: function(e, n, c) {
        e = e._reactInternals, e.replace = !0, e.queue = [n], c != null && El(c);
      },
      enqueueForceUpdate: function(e, n) {
        e._reactInternals.queue === null ? mt(e, "forceUpdate") : n != null && El(n);
      }
    }, ru = { id: 1, overflow: "" }, Fo = Math.clz32 ? Math.clz32 : pc, Ss = Math.log, Ps = Math.LN2, jl = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), ss = null, Fs = typeof Object.is == "function" ? Object.is : Ac, Lt = null, pi = null, sr = null, ca = null, hl = null, un = null, Lr = !1, Ai = !1, ut = 0, gc = 0, lu = -1, fs = 0, po = null, Ja = null, vc = 0, _l = !1, Qa, bc = {
      readContext: Ku,
      use: function(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function")
            return yt(e);
          if (e.$$typeof === On)
            return Ku(e);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(e)
        );
      },
      useContext: function(e) {
        return Qa = "useContext", In(), e._currentValue;
      },
      useMemo: ro,
      useReducer: to,
      useRef: function(e) {
        Lt = In(), un = no();
        var n = un.memoizedState;
        return n === null ? (e = { current: e }, Object.seal(e), un.memoizedState = e) : n;
      },
      useState: function(e) {
        return Qa = "useState", to(qu, e);
      },
      useInsertionEffect: $t,
      useLayoutEffect: $t,
      useCallback: function(e, n) {
        return ro(function() {
          return e;
        }, n);
      },
      useImperativeHandle: $t,
      useEffect: $t,
      useDebugValue: $t,
      useDeferredValue: function(e, n) {
        return In(), n !== void 0 ? n : e;
      },
      useTransition: function() {
        return In(), [!1, Mc];
      },
      useId: function() {
        var e = pi.treeContext, n = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - Fo(e) - 1)).toString(32) + n;
        var c = t;
        if (c === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return n = ut++, e = "_" + c.idPrefix + "R_" + e, 0 < n && (e += "H" + n.toString(32)), e + "_";
      },
      useSyncExternalStore: function(e, n, c) {
        if (c === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return c();
      },
      useOptimistic: function(e) {
        return In(), [e, Go];
      },
      useActionState: Xo,
      useFormState: Xo,
      useHostTransitionStatus: function() {
        return In(), ln;
      },
      useMemoCache: function(e) {
        for (var n = Array(e), c = 0; c < e; c++)
          n[c] = pl;
        return n;
      },
      useCacheRefresh: function() {
        return lo;
      },
      useEffectEvent: function() {
        return ml;
      }
    }, t = null, r = null, u = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      cacheSignal: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return r === null ? null : r.componentStack;
      }
    }, d = 0, y, E, F, M, V, z, Z;
    Zo.__reactDisabledLog = !0;
    var le, fe, oe = !1, j = new (typeof WeakMap == "function" ? WeakMap : Map)(), We = {
      react_stack_bottom_frame: function(e, n, c) {
        return e(n, c);
      }
    }, Cn = We.react_stack_bottom_frame.bind(We), ke = {
      react_stack_bottom_frame: function(e) {
        return e.render();
      }
    }, tn = ke.react_stack_bottom_frame.bind(ke), Xt = {
      react_stack_bottom_frame: function(e) {
        var n = e._init;
        return n(e._payload);
      }
    }, Zt = Xt.react_stack_bottom_frame.bind(Xt), an = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var Ft = performance, $l = function() {
        return Ft.now();
      };
    else {
      var Ar = Date;
      $l = function() {
        return Ar.now();
      };
    }
    var de = 4, hn = 0, dn = 1, Tn = 2, Xn = 3, Ze = 4, De = 5, fr = 14, gn = null, Jt = {}, Ln = {}, zr = {}, Ao = {}, Br = !1, ei = !1, ni = !1, ti = 0, zt = !1;
    Fl(), Fl(), Ls.prerender = function(e, n) {
      return new Promise(function(c, h) {
        var b = n ? n.onHeaders : void 0, x;
        b && (x = function(B) {
          b(new Headers(B));
        });
        var S = zi(
          n ? n.identifierPrefix : void 0,
          n ? n.unstable_externalRuntimeSrc : void 0,
          n ? n.bootstrapScriptContent : void 0,
          n ? n.bootstrapScripts : void 0,
          n ? n.bootstrapModules : void 0
        ), A = Cr(
          e,
          S,
          zl(
            S,
            void 0,
            n ? n.unstable_externalRuntimeSrc : void 0,
            n ? n.importMap : void 0,
            x,
            n ? n.maxHeadersLength : void 0
          ),
          me(n ? n.namespaceURI : void 0),
          n ? n.progressiveChunkSize : void 0,
          n ? n.onError : void 0,
          function() {
            var B = new ReadableStream(
              {
                type: "bytes",
                pull: function(ee) {
                  Vr(A, ee);
                },
                cancel: function(ee) {
                  A.destination = null, wn(A, ee);
                }
              },
              { highWaterMark: 0 }
            );
            B = {
              postponed: Mn(A),
              prelude: B
            }, c(B);
          },
          void 0,
          void 0,
          h,
          n ? n.onPostpone : void 0
        );
        if (n && n.signal) {
          var G = n.signal;
          if (G.aborted)
            wn(A, G.reason);
          else {
            var O = function() {
              wn(A, G.reason), G.removeEventListener("abort", O);
            };
            G.addEventListener("abort", O);
          }
        }
        Qr(A);
      });
    }, Ls.renderToReadableStream = function(e, n) {
      return new Promise(function(c, h) {
        var b, x, S = new Promise(function(ne, q) {
          x = ne, b = q;
        }), A = n ? n.onHeaders : void 0, G;
        A && (G = function(ne) {
          A(new Headers(ne));
        });
        var O = zi(
          n ? n.identifierPrefix : void 0,
          n ? n.unstable_externalRuntimeSrc : void 0,
          n ? n.bootstrapScriptContent : void 0,
          n ? n.bootstrapScripts : void 0,
          n ? n.bootstrapModules : void 0
        ), B = io(
          e,
          O,
          zl(
            O,
            n ? n.nonce : void 0,
            n ? n.unstable_externalRuntimeSrc : void 0,
            n ? n.importMap : void 0,
            G,
            n ? n.maxHeadersLength : void 0
          ),
          me(n ? n.namespaceURI : void 0),
          n ? n.progressiveChunkSize : void 0,
          n ? n.onError : void 0,
          x,
          function() {
            var ne = new ReadableStream(
              {
                type: "bytes",
                pull: function(q) {
                  Vr(B, q);
                },
                cancel: function(q) {
                  B.destination = null, wn(B, q);
                }
              },
              { highWaterMark: 0 }
            );
            ne.allReady = S, c(ne);
          },
          function(ne) {
            S.catch(function() {
            }), h(ne);
          },
          b,
          n ? n.onPostpone : void 0,
          n ? n.formState : void 0
        );
        if (n && n.signal) {
          var ee = n.signal;
          if (ee.aborted)
            wn(B, ee.reason);
          else {
            var te = function() {
              wn(B, ee.reason), ee.removeEventListener("abort", te);
            };
            ee.addEventListener("abort", te);
          }
        }
        Qr(B);
      });
    }, Ls.resume = function(e, n, c) {
      return new Promise(function(h, b) {
        var x, S, A = new Promise(function(ee, te) {
          S = ee, x = te;
        }), G = Ct(
          e,
          n,
          zl(
            n.resumableState,
            c ? c.nonce : void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          c ? c.onError : void 0,
          S,
          function() {
            var ee = new ReadableStream(
              {
                type: "bytes",
                pull: function(te) {
                  Vr(G, te);
                },
                cancel: function(te) {
                  G.destination = null, wn(G, te);
                }
              },
              { highWaterMark: 0 }
            );
            ee.allReady = A, h(ee);
          },
          function(ee) {
            A.catch(function() {
            }), b(ee);
          },
          x,
          c ? c.onPostpone : void 0
        );
        if (c && c.signal) {
          var O = c.signal;
          if (O.aborted)
            wn(G, O.reason);
          else {
            var B = function() {
              wn(G, O.reason), O.removeEventListener("abort", B);
            };
            O.addEventListener("abort", B);
          }
        }
        Qr(G);
      });
    }, Ls.resumeAndPrerender = function(e, n, c) {
      return new Promise(function(h, b) {
        var x = kn(
          e,
          n,
          zl(
            n.resumableState,
            void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          c ? c.onError : void 0,
          function() {
            var G = new ReadableStream(
              {
                type: "bytes",
                pull: function(O) {
                  Vr(x, O);
                },
                cancel: function(O) {
                  x.destination = null, wn(x, O);
                }
              },
              { highWaterMark: 0 }
            );
            G = { postponed: Mn(x), prelude: G }, h(G);
          },
          void 0,
          void 0,
          b,
          c ? c.onPostpone : void 0
        );
        if (c && c.signal) {
          var S = c.signal;
          if (S.aborted)
            wn(x, S.reason);
          else {
            var A = function() {
              wn(x, S.reason), S.removeEventListener("abort", A);
            };
            S.addEventListener("abort", A);
          }
        }
        Qr(x);
      });
    }, Ls.version = "19.2.4";
  }()), Ls;
}
var qs, tf;
process.env.NODE_ENV === "production" ? (qs = Xf(), tf = Zf()) : (qs = Jf(), tf = Qf());
Us.version = qs.version;
Us.renderToString = qs.renderToString;
Us.renderToStaticMarkup = qs.renderToStaticMarkup;
Us.renderToReadableStream = tf.renderToReadableStream;
Us.resume = tf.resume;
var zf = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Df = hu.createContext && /* @__PURE__ */ hu.createContext(zf), Vf = ["attr", "size", "title"];
function Kf(he, re) {
  if (he == null)
    return {};
  var _, xe, pn = qf(he, re);
  if (Object.getOwnPropertySymbols) {
    var gt = Object.getOwnPropertySymbols(he);
    for (xe = 0; xe < gt.length; xe++)
      _ = gt[xe], re.indexOf(_) === -1 && {}.propertyIsEnumerable.call(he, _) && (pn[_] = he[_]);
  }
  return pn;
}
function qf(he, re) {
  if (he == null)
    return {};
  var _ = {};
  for (var xe in he)
    if ({}.hasOwnProperty.call(he, xe)) {
      if (re.indexOf(xe) !== -1)
        continue;
      _[xe] = he[xe];
    }
  return _;
}
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(he) {
    for (var re = 1; re < arguments.length; re++) {
      var _ = arguments[re];
      for (var xe in _)
        ({}).hasOwnProperty.call(_, xe) && (he[xe] = _[xe]);
    }
    return he;
  }, rf.apply(null, arguments);
}
function Lf(he, re) {
  var _ = Object.keys(he);
  if (Object.getOwnPropertySymbols) {
    var xe = Object.getOwnPropertySymbols(he);
    re && (xe = xe.filter(function(pn) {
      return Object.getOwnPropertyDescriptor(he, pn).enumerable;
    })), _.push.apply(_, xe);
  }
  return _;
}
function lf(he) {
  for (var re = 1; re < arguments.length; re++) {
    var _ = arguments[re] != null ? arguments[re] : {};
    re % 2 ? Lf(Object(_), !0).forEach(function(xe) {
      jf(he, xe, _[xe]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(he, Object.getOwnPropertyDescriptors(_)) : Lf(Object(_)).forEach(function(xe) {
      Object.defineProperty(he, xe, Object.getOwnPropertyDescriptor(_, xe));
    });
  }
  return he;
}
function jf(he, re, _) {
  return (re = $f(re)) in he ? Object.defineProperty(he, re, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : he[re] = _, he;
}
function $f(he) {
  var re = eh(he, "string");
  return typeof re == "symbol" ? re : re + "";
}
function eh(he, re) {
  if (typeof he != "object" || !he)
    return he;
  var _ = he[Symbol.toPrimitive];
  if (_ !== void 0) {
    var xe = _.call(he, re || "default");
    if (typeof xe != "object")
      return xe;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (re === "string" ? String : Number)(he);
}
function Bf(he) {
  return he && he.map((re, _) => /* @__PURE__ */ hu.createElement(re.tag, lf({
    key: _
  }, re.attr), Bf(re.child)));
}
function nh(he) {
  return (re) => /* @__PURE__ */ hu.createElement(th, rf({
    attr: lf({}, he.attr)
  }, re), Bf(he.child));
}
function th(he) {
  var re = (_) => {
    var {
      attr: xe,
      size: pn,
      title: gt
    } = he, Hn = Kf(he, Vf), vn = pn || _.size || "1em", Kt;
    return _.className && (Kt = _.className), he.className && (Kt = (Kt ? Kt + " " : "") + he.className), /* @__PURE__ */ hu.createElement("svg", rf({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, _.attr, xe, Hn, {
      className: Kt,
      style: lf(lf({
        color: he.color || _.color
      }, _.style), he.style),
      height: vn,
      width: vn,
      xmlns: "http://www.w3.org/2000/svg"
    }), gt && /* @__PURE__ */ hu.createElement("title", null, gt), he.children);
  };
  return Df !== void 0 ? /* @__PURE__ */ hu.createElement(Df.Consumer, null, (_) => re(_)) : re(zf);
}
function rh(he) {
  return nh({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" }, child: [] }] })(he);
}
const ch = mf(
  ({ data: he, type: re, options: _ = {}, height: xe = 350, title: pn }, gt) => {
    const Hn = Qs(null);
    Qs(null);
    const vn = Qs(null), Kt = Us.renderToString(/* @__PURE__ */ Js(rh, { size: 18 })), [ve, Ht] = Uf(!1), W = Qs(null), Ce = Qs(null), Et = Sf(() => re || (Array.isArray(he[0]) ? he.map((N) => pf(N)) : pf(he)), [he, re]), $ = Sf(() => {
      var ui, It, Ee, yr, vt, bn, et, zo, Bo, Li, Mt, ge, J, ue, zl;
      const N = Array.isArray(Et) ? String(Et[0]).toLowerCase() : String(Et).toLowerCase();
      let _i = [], ha = [], ci = [];
      if (Array.isArray(he[0]))
        _i = he.map((ie, m) => {
          const me = Array.isArray(re) && re[m] || (Array.isArray(Et) ? Et[m] : Et), Wt = Af(me, ie);
          return {
            name: `Series ${m + 1}`,
            type: me,
            ...Wt.series[0]
          };
        });
      else {
        const zi = Af(Et, he);
        _i = zi.series, ha = zi.labels, ci = zi.categories;
      }
      const Di = {
        ..._,
        chart: {
          type: N === "funnel" || N === "column" ? "bar" : N,
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
              customIcons: [
                {
                  icon: Kt,
                  index: 6,
                  click: () => Ht
                }
              ]
            },
            autoSelected: "zoom"
          },
          animations: { enabled: !0 },
          ..._.chart
        },
        title: {
          text: typeof pn == "string" ? pn : (pn == null ? void 0 : pn.text) || ((ui = _.title) == null ? void 0 : ui.text) || void 0,
          align: (typeof pn == "object" ? pn == null ? void 0 : pn.align : (It = _.title) == null ? void 0 : It.align) || "left",
          margin: ((Ee = _.title) == null ? void 0 : Ee.margin) || 10,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#263238",
            ...(yr = _.title) == null ? void 0 : yr.style
          }
        },
        colors: _.colors || [
          "rgba(0, 143, 251, 0.85)",
          "#FEB019",
          "hsl(145, 63%, 42%)",
          "green"
        ],
        fill: {
          type: ((vt = _.fill) == null ? void 0 : vt.type) || "solid",
          ..._.fill
        },
        series: _i,
        dataLabels: {
          enabled: ((bn = _.dataLabels) == null ? void 0 : bn.enabled) ?? !1,
          ..._.dataLabels
        },
        plotOptions: {
          ..._.plotOptions,
          bar: {
            horizontal: N === "funnel" || N === "rangebar",
            isFunnel: N === "funnel",
            ...(et = _.plotOptions) == null ? void 0 : et.bar
          },
          bubble: {
            minBubbleRadius: ((Bo = (zo = _.plotOptions) == null ? void 0 : zo.bubble) == null ? void 0 : Bo.minBubbleRadius) ?? 5,
            maxBubbleRadius: ((Mt = (Li = _.plotOptions) == null ? void 0 : Li.bubble) == null ? void 0 : Mt.maxBubbleRadius) ?? 20
          },
          // Radar/RadialBar often need explicit sizing to render well
          radar: { size: ((J = (ge = _.plotOptions) == null ? void 0 : ge.radar) == null ? void 0 : J.size) ?? 140 },
          radialBar: {
            hollow: { size: "70%" },
            ...(ue = _.plotOptions) == null ? void 0 : ue.radialBar
          }
        },
        tooltip: {
          enabled: !0,
          theme: "dark",
          ..._.tooltip
        },
        grid: {
          show: !0,
          ..._.grid
        }
      };
      return ha != null && ha.length && (Di.labels = ha), ci != null && ci.length && (Di.xaxis = { ..._.xaxis, categories: ci }), (N === "bar" || N === "column") && (Di.plotOptions = {
        ..._.plotOptions,
        bar: {
          ...((zl = _.plotOptions) == null ? void 0 : zl.bar) || {},
          horizontal: !1
        }
      }), Di;
    }, [he, Et, _, xe, pn, Kt]);
    return Pf(() => {
      if (Hn.current)
        return vn.current ? vn.current.updateOptions($, !0, !0) : (vn.current = new Ff(Hn.current, $), vn.current.render()), () => {
          var N;
          (N = vn.current) == null || N.destroy(), vn.current = null;
        };
    }, [$]), Pf(() => (ve && W.current && (Ce.current = new Ff(W.current, {
      ...$,
      chart: { ...$.chart, toolbar: { show: !1 } }
      // Clean view for modal
    }), Ce.current.render()), () => {
      var N;
      (N = Ce.current) == null || N.destroy(), Ce.current = null;
    }), [ve, $]), Yf(gt, () => ({
      zoomIn: () => {
        var N;
        return (N = vn.current) == null ? void 0 : N.zoomX(void 0, void 0);
      },
      zoomOut: () => {
        var N;
        return (N = vn.current) == null ? void 0 : N.zoomX(void 0, void 0);
      },
      reset: () => {
        var N;
        return (N = vn.current) == null ? void 0 : N.resetSeries();
      },
      toggleFullscreen: () => Ht(!ve)
    })), /* @__PURE__ */ kf("div", { style: { height: xe, width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ Js("div", { ref: Hn, style: { height: "100%", width: "100%" } }),
      ve && /* @__PURE__ */ Js("div", { style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      }, children: /* @__PURE__ */ kf("div", { style: {
        width: "90%",
        maxWidth: "600px",
        // Makes it "not so large"
        height: "450px",
        // Fixed height for the modal
        background: "#fff",
        borderRadius: "12px",
        padding: "40px 20px 20px 20px",
        position: "relative",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }, children: [
        /* @__PURE__ */ Js(
          "button",
          {
            onClick: () => Ht(!1),
            style: {
              position: "absolute",
              top: 10,
              right: 15,
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer"
            },
            children: "✕"
          }
        ),
        /* @__PURE__ */ Js("div", { ref: W, style: { height: "100%", width: "100%" } })
      ] }) })
    ] });
  }
);
export {
  ch as VizlyChart
};
