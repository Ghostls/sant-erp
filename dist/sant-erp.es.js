import Me, { useState as O, useEffect as $, useCallback as ze } from "react";
var se = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Sr() {
  if (Le) return W;
  Le = 1;
  var h = Me, m = Symbol.for("react.element"), d = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, i = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(t, l, o) {
    var y, x = {}, F = null, N = null;
    o !== void 0 && (F = "" + o), l.key !== void 0 && (F = "" + l.key), l.ref !== void 0 && (N = l.ref);
    for (y in l) p.call(l, y) && !f.hasOwnProperty(y) && (x[y] = l[y]);
    if (t && t.defaultProps) for (y in l = t.defaultProps, l) x[y] === void 0 && (x[y] = l[y]);
    return { $$typeof: m, type: t, key: F, ref: N, props: x, _owner: i.current };
  }
  return W.Fragment = d, W.jsx = v, W.jsxs = v, W;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Cr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var h = Me, m = Symbol.for("react.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), t = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), M = Symbol.iterator, Y = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = M && e[M] || e[Y];
      return typeof a == "function" ? a : null;
    }
    var P = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
          n[s - 1] = arguments[s];
        We("error", e, n);
      }
    }
    function We(e, a, n) {
      {
        var s = P.ReactDebugCurrentFrame, g = s.getStackAddendum();
        g !== "" && (a += "%s", n = n.concat([g]));
        var b = n.map(function(u) {
          return String(u);
        });
        b.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Ge = !1, $e = !1, Ye = !1, Ue = !1, Ve = !1, le;
    le = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === f || Ve || e === i || e === o || e === y || Ue || e === N || Ge || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === x || e.$$typeof === v || e.$$typeof === t || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Je(e, a, n) {
      var s = e.displayName;
      if (s)
        return s;
      var g = a.displayName || a.name || "";
      return g !== "" ? n + "(" + g + ")" : n;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case d:
          return "Portal";
        case f:
          return "Profiler";
        case i:
          return "StrictMode";
        case o:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case t:
            var a = e;
            return de(a) + ".Consumer";
          case v:
            var n = e;
            return de(n._context) + ".Provider";
          case l:
            return Je(e, e.render, "ForwardRef");
          case x:
            var s = e.displayName || null;
            return s !== null ? s : k(e.type) || "Memo";
          case F: {
            var g = e, b = g._payload, u = g._init;
            try {
              return k(u(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, z = 0, ce, ue, ge, pe, fe, be, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Xe() {
      {
        if (z === 0) {
          ce = console.log, ue = console.info, ge = console.warn, pe = console.error, fe = console.group, be = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        z++;
      }
    }
    function Ke() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: ue
            }),
            warn: I({}, e, {
              value: ge
            }),
            error: I({}, e, {
              value: pe
            }),
            group: I({}, e, {
              value: fe
            }),
            groupCollapsed: I({}, e, {
              value: be
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        z < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, Z;
    function U(e, a, n) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (g) {
            var s = g.stack.trim().match(/\n( *(at )?)/);
            Z = s && s[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, V;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new qe();
    }
    function ye(e, a) {
      if (!e || Q)
        return "";
      {
        var n = V.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      Q = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = q.current, q.current = null, Xe();
      try {
        if (a) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (R) {
              s = R;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (R) {
              s = R;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            s = R;
          }
          e();
        }
      } catch (R) {
        if (R && s && typeof R.stack == "string") {
          for (var c = R.stack.split(`
`), E = s.stack.split(`
`), j = c.length - 1, S = E.length - 1; j >= 1 && S >= 0 && c[j] !== E[S]; )
            S--;
          for (; j >= 1 && S >= 0; j--, S--)
            if (c[j] !== E[S]) {
              if (j !== 1 || S !== 1)
                do
                  if (j--, S--, S < 0 || c[j] !== E[S]) {
                    var T = `
` + c[j].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, T), T;
                  }
                while (j >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Q = !1, q.current = b, Ke(), Error.prepareStackTrace = g;
      }
      var _ = e ? e.displayName || e.name : "", A = _ ? U(_) : "";
      return typeof e == "function" && V.set(e, A), A;
    }
    function Ze(e, a, n) {
      return ye(e, !1);
    }
    function Qe(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function H(e, a, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Qe(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case o:
          return U("Suspense");
        case y:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ze(e.render);
          case x:
            return H(e.type, a, n);
          case F: {
            var s = e, g = s._payload, b = s._init;
            try {
              return H(b(g), a, n);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, xe = {}, ve = P.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var a = e._owner, n = H(e.type, e._source, a ? a.type : null);
        ve.setExtraStackFrame(n);
      } else
        ve.setExtraStackFrame(null);
    }
    function er(e, a, n, s, g) {
      {
        var b = Function.call.bind(B);
        for (var u in e)
          if (b(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var E = Error((s || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              c = e[u](a, u, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              c = j;
            }
            c && !(c instanceof Error) && (J(g), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, u, typeof c), J(null)), c instanceof Error && !(c.message in xe) && (xe[c.message] = !0, J(g), C("Failed %s type: %s", n, c.message), J(null));
          }
      }
    }
    var rr = Array.isArray;
    function ee(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, n = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ar(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Se(e) {
      if (ar(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), je(e);
    }
    var Ce = P.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re;
    function or(e) {
      if (B.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (B.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, a) {
      typeof e.ref == "string" && Ce.current;
    }
    function lr(e, a) {
      {
        var n = function() {
          Ee || (Ee = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function dr(e, a) {
      {
        var n = function() {
          Re || (Re = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, a, n, s, g, b, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ur(e, a, n, s, g) {
      {
        var b, u = {}, c = null, E = null;
        n !== void 0 && (Se(n), c = "" + n), ir(a) && (Se(a.key), c = "" + a.key), or(a) && (E = a.ref, sr(a, g));
        for (b in a)
          B.call(a, b) && !nr.hasOwnProperty(b) && (u[b] = a[b]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (b in j)
            u[b] === void 0 && (u[b] = j[b]);
        }
        if (c || E) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && lr(u, S), E && dr(u, S);
        }
        return cr(e, c, E, g, s, Ce.current, u);
      }
    }
    var re = P.ReactCurrentOwner, Te = P.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var a = e._owner, n = H(e.type, e._source, a ? a.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function Fe() {
      {
        if (re.current) {
          var e = k(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      return "";
    }
    var ke = {};
    function pr(e) {
      {
        var a = Fe();
        if (!a) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (a = `

Check the top-level render call using <` + n + ">.");
        }
        return a;
      }
    }
    function we(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = pr(a);
        if (ke[n])
          return;
        ke[n] = !0;
        var s = "";
        e && e._owner && e._owner !== re.current && (s = " It was passed a child from " + k(e._owner.type) + "."), D(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), D(null);
      }
    }
    function Oe(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            ae(s) && we(s, a);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = Be(e);
          if (typeof g == "function" && g !== e.entries)
            for (var b = g.call(e), u; !(u = b.next()).done; )
              ae(u.value) && we(u.value, a);
        }
      }
    }
    function fr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var n;
        if (typeof a == "function")
          n = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === x))
          n = a.propTypes;
        else
          return;
        if (n) {
          var s = k(a);
          er(n, e.props, "prop", s, e);
        } else if (a.PropTypes !== void 0 && !te) {
          te = !0;
          var g = k(a);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var a = Object.keys(e.props), n = 0; n < a.length; n++) {
          var s = a[n];
          if (s !== "children" && s !== "key") {
            D(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Ie = {};
    function Ae(e, a, n, s, g, b) {
      {
        var u = He(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = gr();
          E ? c += E : c += Fe();
          var j;
          e === null ? j = "null" : ee(e) ? j = "array" : e !== void 0 && e.$$typeof === m ? (j = "<" + (k(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, c);
        }
        var S = ur(e, a, n, g, b);
        if (S == null)
          return S;
        if (u) {
          var T = a.children;
          if (T !== void 0)
            if (s)
              if (ee(T)) {
                for (var _ = 0; _ < T.length; _++)
                  Oe(T[_], e);
                Object.freeze && Object.freeze(T);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(T, e);
        }
        if (B.call(a, "key")) {
          var A = k(e), R = Object.keys(a).filter(function(jr) {
            return jr !== "key";
          }), ne = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[A + ne]) {
            var vr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, A, vr, A), Ie[A + ne] = !0;
          }
        }
        return e === p ? br(S) : fr(S), S;
      }
    }
    function hr(e, a, n) {
      return Ae(e, a, n, !0);
    }
    function mr(e, a, n) {
      return Ae(e, a, n, !1);
    }
    var yr = mr, xr = hr;
    G.Fragment = p, G.jsx = yr, G.jsxs = xr;
  }()), G;
}
process.env.NODE_ENV === "production" ? se.exports = Sr() : se.exports = Cr();
var r = se.exports;
const Er = [
  "SANT-PRO · Interior Premium",
  "SANT-EXT · Exterior 100% Acrílico",
  "SANT-IND · Industrial Epóxica",
  "SANT-ANTI · Anticorrosivo",
  "SANT-BASE · Base Selladora",
  "SANT-ESML · Esmalte Alquídico",
  "SANT-TEX · Texturizado"
], Rr = [
  "Caracas - Distrito Capital",
  "Miranda - Los Valles del Tuy",
  "Carabobo - Valencia",
  "Aragua - Maracay",
  "Zulia - Maracaibo",
  "Bolívar - Puerto Ordaz",
  "Lara - Barquisimeto",
  "Anzoátegui - Barcelona",
  "Táchira - San Cristóbal"
], Tr = [
  { value: "NORMAL", label: "NORMAL — 48–72 h" },
  { value: "URGENT", label: "URGENTE — 24 h" },
  { value: "CRITICAL", label: "CRÍTICO — Mismo día" }
], Fr = [
  { id: "ORD-2847", clientId: "J-30456789-0", clientName: "Constructora Venezolana", product: "SANT-EXT", colorRef: "Blanco Puro", volume: 500, zone: "Caracas", priority: "URGENT", eta: "HOY 18:30", status: "MIXING", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2846", clientId: "J-12345678-9", clientName: "Ferretería El Constructor", product: "SANT-PRO", colorRef: "Crema ST-012", volume: 120, zone: "Valencia", priority: "NORMAL", eta: "MAÑANA 09:00", status: "PENDING", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2845", clientId: "J-40678901-2", clientName: "Hotel Eurobuilding", product: "SANT-IND", colorRef: "Gris Acero", volume: 850, zone: "Caracas", priority: "URGENT", eta: "HOY 20:00", status: "MIXING", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2844", clientId: "G-20000001-0", clientName: "Alcaldía de Maracaibo", product: "SANT-ANTI", colorRef: "Rojo Minio", volume: 1200, zone: "Maracaibo", priority: "NORMAL", eta: "DOC 08:00", status: "DEPLOYED", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2843", clientId: "J-29876543-1", clientName: "Inversiones Kraft C.A.", product: "SANT-BASE", colorRef: "Selladora", volume: 280, zone: "Barquisimeto", priority: "NORMAL", eta: "DOC 14:00", status: "PENDING", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2842", clientId: "J-10234567-8", clientName: "Pinturas & Más S.R.L.", product: "SANT-ESML", colorRef: "Negro Grafito", volume: 95, zone: "Maracay", priority: "NORMAL", eta: "HOY 17:00", status: "DEPLOYED", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2841", clientId: "G-20000002-0", clientName: "Corp. CVG Ferrominera", product: "SANT-IND", colorRef: "Amarillo Seguridad", volume: 2e3, zone: "Pto. Ordaz", priority: "CRITICAL", eta: "DOC 10:00", status: "MIXING", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2840", clientId: "J-30987654-3", clientName: "Urbanización Los Altos", product: "SANT-TEX", colorRef: "Tierra Ocre", volume: 340, zone: "Miranda", priority: "NORMAL", eta: "MAÑANA 11:00", status: "PENDING", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2839", clientId: "J-20543219-5", clientName: "Centro Comercial Sambil", product: "SANT-PRO", colorRef: "Blanco Ártico", volume: 600, zone: "Caracas", priority: "URGENT", eta: "HOY 19:00", status: "DEPLOYED", timestamp: /* @__PURE__ */ new Date() },
  { id: "ORD-2838", clientId: "G-20000003-0", clientName: "Pdvsa Refinería CRP", product: "SANT-IND", colorRef: "Alta Temp.", volume: 3500, zone: "Anzoátegui", priority: "CRITICAL", eta: "MAÑANA 06:00", status: "MIXING", timestamp: /* @__PURE__ */ new Date() }
], Pe = [
  { id: "caracas", city: "Caracas", orders: 89, cx: 195, cy: 90, intensity: "high" },
  { id: "valencia", city: "Valencia", orders: 62, cx: 155, cy: 115, intensity: "high" },
  { id: "maracaibo", city: "Maracaibo", orders: 41, cx: 82, cy: 90, intensity: "medium" },
  { id: "barquisimeto", city: "Barquisimeto", orders: 28, cx: 120, cy: 108, intensity: "medium" },
  { id: "ptoordaz", city: "Puerto Ordaz", orders: 22, cx: 238, cy: 152, intensity: "low" },
  { id: "barcelona", city: "Barcelona", orders: 19, cx: 228, cy: 105, intensity: "low" },
  { id: "maracay", city: "Maracay", orders: 18, cx: 175, cy: 100, intensity: "low" }
], De = ["Caracas", "Valencia", "Maracaibo", "Barquisimeto", "Maracay", "Puerto Ordaz", "Barcelona", "San Cristóbal"], _e = ["SANT-PRO", "SANT-EXT", "SANT-IND", "SANT-ANTI", "SANT-BASE", "SANT-ESML"];
function X() {
  return {
    id: `feed-${Date.now()}-${Math.random()}`,
    city: De[Math.floor(Math.random() * De.length)],
    product: _e[Math.floor(Math.random() * _e.length)],
    volume: Math.floor(Math.random() * 480 + 20),
    timestamp: /* @__PURE__ */ new Date(),
    isNew: !0
  };
}
function kr() {
  return `ORD-${Math.floor(Math.random() * 1e3 + 2900)}`;
}
const wr = ({ starlinkBars: h = 3 }) => {
  const [m, d] = O("");
  return $(() => {
    const p = () => {
      const f = /* @__PURE__ */ new Date(), v = String(f.getUTCHours()).padStart(2, "0"), t = String(f.getUTCMinutes()).padStart(2, "0"), l = String(f.getUTCSeconds()).padStart(2, "0");
      d(`${v}:${t}:${l} UTC`);
    };
    p();
    const i = setInterval(p, 1e3);
    return () => clearInterval(i);
  }, []), /* @__PURE__ */ r.jsxs("header", { style: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "linear-gradient(90deg,rgba(0,0,20,0.97),rgba(0,0,80,0.93),rgba(0,0,20,0.97))",
    borderBottom: "1px solid rgba(255,255,255,0.09)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: 60,
    gap: 16
  }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ r.jsx("div", { style: {
        width: 34,
        height: 34,
        border: "1.5px solid #FF8C00",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,rgba(255,140,0,0.15),rgba(0,0,128,0.3))",
        fontFamily: "var(--mono)",
        fontSize: 11,
        fontWeight: 700,
        color: "#FF8C00",
        letterSpacing: "-0.5px"
      }, children: "VG" }),
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", lineHeight: 1.15 }, children: [
        /* @__PURE__ */ r.jsx("span", { style: { fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", color: "#fff" }, children: "VALKYRON GROUP" }),
        /* @__PURE__ */ r.jsx("span", { style: { fontSize: 9, fontWeight: 400, letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }, children: "SANT ERP · Sistema de Gestión Unificado" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ r.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,140,0,0.08)",
        border: "1px solid rgba(255,140,0,0.25)",
        borderRadius: 20,
        padding: "5px 14px"
      }, children: [
        /* @__PURE__ */ r.jsxs("span", { style: { position: "relative", display: "inline-block", width: 8, height: 8 }, children: [
          /* @__PURE__ */ r.jsx("span", { style: {
            display: "block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#FF8C00"
          } }),
          /* @__PURE__ */ r.jsx("span", { style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#FF8C00",
            animation: "pulse-ring 2s ease-out infinite"
          } })
        ] }),
        /* @__PURE__ */ r.jsx("span", { style: {
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#FF8C00",
          fontWeight: 500
        }, children: "MIA: ACTIVE" })
      ] }),
      /* @__PURE__ */ r.jsx("span", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em" }, children: "SYS_STATUS: NOMINAL" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ r.jsx("span", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }, children: "STARLINK" }),
        /* @__PURE__ */ r.jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 14 }, children: [4, 7, 10, 13].map((p, i) => /* @__PURE__ */ r.jsx("span", { style: {
          width: 3,
          height: p,
          borderRadius: 1,
          background: i < h ? "#FF8C00" : "rgba(255,140,0,0.22)",
          display: "block"
        } }, i)) })
      ] }),
      /* @__PURE__ */ r.jsx("span", { style: {
        fontFamily: "var(--mono)",
        fontSize: 13,
        fontWeight: 500,
        color: "#fff",
        letterSpacing: "0.05em"
      }, children: m })
    ] })
  ] });
}, Or = () => /* @__PURE__ */ r.jsxs("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", stroke: "#FF8C00", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ r.jsx("path", { d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }),
  /* @__PURE__ */ r.jsx("rect", { x: "9", y: "3", width: "6", height: "4", rx: "2" }),
  /* @__PURE__ */ r.jsx("path", { d: "M9 12h6m-6 4h4" })
] }), Ir = () => /* @__PURE__ */ r.jsx("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", stroke: "#FF8C00", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ r.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" }) }), Ar = () => /* @__PURE__ */ r.jsxs("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", stroke: "#FF8C00", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ r.jsx("path", { d: "M12 6v6l4 2" })
] }), Lr = () => /* @__PURE__ */ r.jsxs("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", stroke: "#FF4444", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ r.jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
  /* @__PURE__ */ r.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
  /* @__PURE__ */ r.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
] }), K = ({ icon: h, value: m, label: d, sub: p, trend: i, trendType: f, isAlert: v, blink: t }) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: t ? "active-blink" : void 0,
    style: {
      background: "linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)",
      border: "1px solid rgba(255,255,255,0.09)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: 12,
      padding: 20,
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.3s, transform 0.2s",
      cursor: "default"
    },
    onMouseEnter: (l) => {
      l.currentTarget.style.transform = "translateY(-2px)", l.currentTarget.style.borderColor = "rgba(255,140,0,0.42)";
    },
    onMouseLeave: (l) => {
      l.currentTarget.style.transform = "none", l.currentTarget.style.borderColor = t ? "" : "rgba(255,255,255,0.09)";
    },
    children: [
      /* @__PURE__ */ r.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)", pointerEvents: "none" } }),
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }, children: [
        /* @__PURE__ */ r.jsx("div", { style: {
          width: 36,
          height: 36,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: v ? "rgba(255,60,60,0.15)" : "rgba(255,140,0,0.13)",
          border: `1px solid ${v ? "rgba(255,60,60,0.25)" : "rgba(255,140,0,0.2)"}`
        }, children: h }),
        /* @__PURE__ */ r.jsx("span", { style: {
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.08em",
          padding: "3px 8px",
          borderRadius: 10,
          color: f === "up" ? "#00FF88" : "#FF8C00",
          background: f === "up" ? "rgba(0,255,136,0.1)" : "rgba(255,140,0,0.13)",
          border: `1px solid ${f === "up" ? "rgba(0,255,136,0.22)" : "rgba(255,140,0,0.25)"}`
        }, children: i })
      ] }),
      /* @__PURE__ */ r.jsx("div", { style: {
        fontFamily: "var(--mono)",
        fontSize: 38,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -1,
        marginBottom: 6,
        background: v ? "linear-gradient(135deg,#FF4444,#FF8800)" : "linear-gradient(135deg,#FFFFFF,rgba(255,255,255,0.7))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }, children: m }),
      /* @__PURE__ */ r.jsx("div", { style: { fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }, children: d }),
      /* @__PURE__ */ r.jsx("div", { style: { fontSize: 11, color: "rgba(255,255,255,0.28)", marginTop: 4, fontFamily: "var(--mono)" }, children: p })
    ]
  }
), Nr = ({ data: h }) => /* @__PURE__ */ r.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }, children: [
  /* @__PURE__ */ r.jsx(
    K,
    {
      icon: /* @__PURE__ */ r.jsx(Or, {}),
      value: h.ordersToday.toLocaleString(),
      label: "Pedidos Hoy",
      sub: "último: hace 4 min",
      trend: "▲ 18%",
      trendType: "up",
      blink: !0
    }
  ),
  /* @__PURE__ */ r.jsx(
    K,
    {
      icon: /* @__PURE__ */ r.jsx(Ir, {}),
      value: h.gallonsProduced.toLocaleString(),
      label: "Galones Producidos",
      sub: "meta: 20,000 gal/día",
      trend: "▲ 7%",
      trendType: "up"
    }
  ),
  /* @__PURE__ */ r.jsx(
    K,
    {
      icon: /* @__PURE__ */ r.jsx(Ar, {}),
      value: `${h.systemEfficiency}%`,
      label: "Eficiencia del Sistema",
      sub: "uptime: 99.8%",
      trend: "▲ 2.1%",
      trendType: "up"
    }
  ),
  /* @__PURE__ */ r.jsx(
    K,
    {
      icon: /* @__PURE__ */ r.jsx(Lr, {}),
      value: String(h.activeAlerts),
      label: "Alertas Activas",
      sub: "revisar: zona sur",
      trend: "▼ ACTIVAS",
      trendType: "alert",
      isAlert: !0
    }
  )
] }), L = {
  background: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 8,
  padding: "11px 14px",
  fontFamily: "var(--sans)",
  fontSize: 14,
  color: "#fff",
  outline: "none",
  width: "100%",
  backdropFilter: "blur(10px)",
  transition: "border-color 0.2s, background 0.2s",
  WebkitAppearance: "none"
}, w = {
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
  marginBottom: 6,
  display: "block"
}, oe = {
  clientId: "",
  clientName: "",
  zone: "",
  category: "",
  colorRef: "",
  priority: "NORMAL",
  volume: 200,
  notes: ""
}, Pr = ({ onOrderSubmit: h, feedItems: m }) => {
  const [d, p] = O(oe), i = ze((t, l) => {
    p((o) => ({ ...o, [t]: l }));
  }, []), f = (d.volume - 10) / 990 * 100, v = () => {
    if (!d.clientId.trim() || !d.clientName.trim()) {
      alert("⚠ Por favor completa ID Cliente y Nombre.");
      return;
    }
    h(d, kr()), p(oe);
  };
  return /* @__PURE__ */ r.jsxs("div", { style: {
    background: "linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)",
    border: "1px solid rgba(255,255,255,0.09)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: 12,
    padding: 24,
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ r.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)", pointerEvents: "none" } }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.09)" }, children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("div", { style: { fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }, children: "Módulo Táctico" }),
        /* @__PURE__ */ r.jsx("div", { style: { fontSize: 16, fontWeight: 600, color: "#fff" }, children: "Entrada de Pedido Digital" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 8 }, children: ["VENDEDOR", "EN LÍNEA"].map((t, l) => /* @__PURE__ */ r.jsx("span", { style: {
        fontFamily: "var(--mono)",
        fontSize: 9,
        letterSpacing: "0.2em",
        padding: "3px 8px",
        borderRadius: 4,
        color: l === 0 ? "#FF8C00" : "#00FF88",
        background: l === 0 ? "rgba(255,140,0,0.13)" : "rgba(0,255,136,0.08)",
        border: `1px solid ${l === 0 ? "rgba(255,140,0,0.22)" : "rgba(0,255,136,0.2)"}`
      }, children: t }, t)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }, children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "ID Cliente / RIF" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            style: L,
            type: "text",
            placeholder: "J-12345678-9",
            value: d.clientId,
            onChange: (t) => i("clientId", t.target.value),
            onFocus: (t) => {
              t.target.style.borderColor = "rgba(255,140,0,0.5)", t.target.style.background = "rgba(255,140,0,0.04)";
            },
            onBlur: (t) => {
              t.target.style.borderColor = "rgba(255,255,255,0.09)", t.target.style.background = "rgba(0,0,0,0.4)";
            }
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "Nombre del Cliente" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            style: L,
            type: "text",
            placeholder: "Empresa o persona",
            value: d.clientName,
            onChange: (t) => i("clientName", t.target.value),
            onFocus: (t) => {
              t.target.style.borderColor = "rgba(255,140,0,0.5)", t.target.style.background = "rgba(255,140,0,0.04)";
            },
            onBlur: (t) => {
              t.target.style.borderColor = "rgba(255,255,255,0.09)", t.target.style.background = "rgba(0,0,0,0.4)";
            }
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "Zona de Despacho" }),
        /* @__PURE__ */ r.jsxs(
          "select",
          {
            style: { ...L, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: 36 },
            value: d.zone,
            onChange: (t) => i("zone", t.target.value),
            children: [
              /* @__PURE__ */ r.jsx("option", { value: "", disabled: !0, children: "Seleccionar zona" }),
              Rr.map((t) => /* @__PURE__ */ r.jsx("option", { value: t, children: t }, t))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "Categoría de Pintura" }),
        /* @__PURE__ */ r.jsxs(
          "select",
          {
            style: { ...L, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: 36 },
            value: d.category,
            onChange: (t) => i("category", t.target.value),
            children: [
              /* @__PURE__ */ r.jsx("option", { value: "", disabled: !0, children: "Seleccionar categoría" }),
              Er.map((t) => /* @__PURE__ */ r.jsx("option", { value: t, children: t }, t))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "Referencia / Color" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            style: L,
            type: "text",
            placeholder: "Ej: ST-0042 Blanco Humo",
            value: d.colorRef,
            onChange: (t) => i("colorRef", t.target.value),
            onFocus: (t) => {
              t.target.style.borderColor = "rgba(255,140,0,0.5)", t.target.style.background = "rgba(255,140,0,0.04)";
            },
            onBlur: (t) => {
              t.target.style.borderColor = "rgba(255,255,255,0.09)", t.target.style.background = "rgba(0,0,0,0.4)";
            }
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "Prioridad de Despacho" }),
        /* @__PURE__ */ r.jsx(
          "select",
          {
            style: { ...L, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: 36 },
            value: d.priority,
            onChange: (t) => i("priority", t.target.value),
            children: Tr.map((t) => /* @__PURE__ */ r.jsx("option", { value: t.value, children: t.label }, t.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ r.jsx("label", { style: w, children: "Observaciones Tácticas" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            style: L,
            type: "text",
            placeholder: "Instrucciones especiales de mezcla o entrega…",
            value: d.notes,
            onChange: (t) => i("notes", t.target.value),
            onFocus: (t) => {
              t.target.style.borderColor = "rgba(255,140,0,0.5)", t.target.style.background = "rgba(255,140,0,0.04)";
            },
            onBlur: (t) => {
              t.target.style.borderColor = "rgba(255,255,255,0.09)", t.target.style.background = "rgba(0,0,0,0.4)";
            }
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ r.jsx("label", { style: { ...w, marginBottom: 0 }, children: /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }, children: [
          /* @__PURE__ */ r.jsx("span", { children: "Volumen del Pedido" }),
          /* @__PURE__ */ r.jsxs("span", { style: { fontFamily: "var(--mono)", fontSize: 20, fontWeight: 700, color: "#FF8C00" }, children: [
            d.volume.toLocaleString(),
            /* @__PURE__ */ r.jsx("span", { style: { fontSize: 11, color: "rgba(255,255,255,0.55)", marginLeft: 4 }, children: "gal" })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { style: { position: "relative", height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "visible" }, children: [
          /* @__PURE__ */ r.jsx("div", { style: { height: "100%", width: `${f}%`, background: "linear-gradient(90deg,#000080,#FF8C00)", borderRadius: 3, transition: "width 0.05s" } }),
          /* @__PURE__ */ r.jsx("div", { style: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: `calc(${f}% - 8px)`,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#FF8C00",
            border: "2px solid rgba(0,0,0,0.5)",
            boxShadow: "0 0 8px rgba(255,140,0,0.5)",
            transition: "left 0.05s",
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 10,
              max: 1e3,
              step: 1,
              value: d.volume,
              onChange: (t) => i("volume", Number(t.target.value)),
              style: {
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 0,
                width: "100%",
                opacity: 0,
                cursor: "pointer",
                WebkitAppearance: "none"
              }
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,0.28)", marginTop: 6 }, children: [
          /* @__PURE__ */ r.jsx("span", { children: "10 gal" }),
          /* @__PURE__ */ r.jsx("span", { children: "500 gal" }),
          /* @__PURE__ */ r.jsx("span", { children: "1000 gal" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 12, marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.09)" }, children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => p(oe),
          style: {
            padding: "12px 20px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: "0.05em"
          },
          onMouseEnter: (t) => {
            t.currentTarget.style.borderColor = "rgba(255,255,255,0.22)", t.currentTarget.style.color = "#fff";
          },
          onMouseLeave: (t) => {
            t.currentTarget.style.borderColor = "rgba(255,255,255,0.09)", t.currentTarget.style.color = "rgba(255,255,255,0.55)";
          },
          children: "⌫ LIMPIAR"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: v,
          style: {
            flex: 1,
            padding: "12px 20px",
            background: "linear-gradient(135deg,rgba(255,140,0,0.9),rgba(255,100,0,0.8))",
            border: "1px solid rgba(255,140,0,0.6)",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#000",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (t) => {
            t.currentTarget.style.boxShadow = "0 0 20px rgba(255,140,0,0.35)";
          },
          onMouseLeave: (t) => {
            t.currentTarget.style.boxShadow = "none";
          },
          children: "▶ DESPACHAR PEDIDO"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.09)" }, children: [
      /* @__PURE__ */ r.jsx("div", { style: { fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: 10 }, children: "Telemetría en vivo · Últimos pedidos" }),
      /* @__PURE__ */ r.jsx("div", { style: { maxHeight: 180, overflow: "hidden", display: "flex", flexDirection: "column", gap: 6 }, children: m.slice(0, 6).map((t) => /* @__PURE__ */ r.jsxs("div", { className: "feed-item-enter", style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        background: t.isNew ? "rgba(255,140,0,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${t.isNew ? "rgba(255,140,0,0.18)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 6,
        fontSize: 11
      }, children: [
        /* @__PURE__ */ r.jsx("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#FF8C00", flexShrink: 0, boxShadow: "0 0 6px #FF8C00", display: "block" } }),
        /* @__PURE__ */ r.jsx("span", { style: { fontWeight: 600, color: "#fff", letterSpacing: "0.05em" }, children: t.city }),
        /* @__PURE__ */ r.jsx("span", { style: { color: "rgba(255,255,255,0.45)", margin: "0 2px" }, children: "·" }),
        /* @__PURE__ */ r.jsx("span", { style: { color: "rgba(255,255,255,0.5)", fontFamily: "var(--mono)", fontSize: 10 }, children: t.product }),
        /* @__PURE__ */ r.jsxs("span", { style: { color: "#FF8C00", fontFamily: "var(--mono)", fontWeight: 700, marginLeft: 4 }, children: [
          t.volume,
          " gal"
        ] }),
        /* @__PURE__ */ r.jsx("span", { style: { color: "rgba(255,255,255,0.28)", fontFamily: "var(--mono)", marginLeft: "auto", fontSize: 10 }, children: "ahora" })
      ] }, t.id)) })
    ] })
  ] });
}, Dr = ({ activeOrders: h, activeZones: m }) => {
  const [d, p] = O({ visible: !1, city: "", orders: 0, x: 0, y: 0 }), [i, f] = O(null), v = (o) => {
    f(o.id), p({ visible: !0, city: o.city, orders: o.orders, x: o.cx, y: o.cy }), setTimeout(() => p((y) => ({ ...y, visible: !1 })), 3e3), setTimeout(() => f(null), 2e3);
  }, t = (o) => o === "high" ? 9 : o === "medium" ? 7 : 5.5, l = (o) => o === "high" ? "rgba(255,140,0,0.7)" : o === "medium" ? "rgba(255,100,0,0.5)" : "rgba(255,140,0,0.35)";
  return /* @__PURE__ */ r.jsxs("div", { style: {
    background: "linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)",
    border: "1px solid rgba(255,255,255,0.09)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: 12,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ r.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)", pointerEvents: "none" } }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.09)" }, children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("div", { style: { fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }, children: "Inteligencia Geoespacial" }),
        /* @__PURE__ */ r.jsx("div", { style: { fontSize: 15, fontWeight: 600, color: "#fff" }, children: "Mapa de Calor Nacional" })
      ] }),
      /* @__PURE__ */ r.jsx("span", { style: {
        fontFamily: "var(--mono)",
        fontSize: 9,
        letterSpacing: "0.2em",
        padding: "3px 8px",
        borderRadius: 4,
        color: "#FF8C00",
        background: "rgba(255,140,0,0.13)",
        border: "1px solid rgba(255,140,0,0.22)"
      }, children: "LIVE" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
      { v: h, l: "Pedidos activos" },
      { v: m, l: "Zonas activas" }
    ].map(({ v: o, l: y }) => /* @__PURE__ */ r.jsxs("div", { style: { background: "rgba(0,0,0,0.3)", borderRadius: 6, padding: "8px 10px", border: "1px solid rgba(255,255,255,0.07)" }, children: [
      /* @__PURE__ */ r.jsx("div", { style: { fontFamily: "var(--mono)", fontSize: 16, fontWeight: 700, color: "#fff" }, children: o }),
      /* @__PURE__ */ r.jsx("div", { style: { fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginTop: 2 }, children: y })
    ] }, y)) }),
    /* @__PURE__ */ r.jsx("div", { style: { position: "relative", background: "rgba(0,0,30,0.6)", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(0,0,128,0.3)", minHeight: 240 }, children: /* @__PURE__ */ r.jsxs("svg", { viewBox: "0 0 320 280", xmlns: "http://www.w3.org/2000/svg", style: { width: "100%", height: "100%", minHeight: 240 }, children: [
      /* @__PURE__ */ r.jsxs("defs", { children: [
        /* @__PURE__ */ r.jsxs("radialGradient", { id: "hg-high", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#FF8C00", stopOpacity: "0.65" }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#FF8C00", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ r.jsxs("radialGradient", { id: "hg-medium", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#FF5500", stopOpacity: "0.45" }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#FF5500", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ r.jsxs("radialGradient", { id: "hg-low", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#FF8C00", stopOpacity: "0.3" }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#FF8C00", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ r.jsxs("filter", { id: "spot-glow", children: [
          /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "1.5", result: "blur" }),
          /* @__PURE__ */ r.jsxs("feMerge", { children: [
            /* @__PURE__ */ r.jsx("feMergeNode", { in: "blur" }),
            /* @__PURE__ */ r.jsx("feMergeNode", { in: "SourceGraphic" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M30,80 L45,60 L60,52 L80,48 L100,44 L120,42 L140,40 L160,38 L180,36 L200,38 L220,44 L240,50 L255,58 L268,68 L275,80 L280,95 L278,110 L272,125 L265,140 L258,155 L250,165 L240,170 L228,168 L215,170 L210,180 L215,192 L218,205 L212,215 L200,220 L188,218 L178,210 L168,205 L155,200 L142,198 L130,200 L118,205 L108,212 L98,215 L85,210 L75,200 L68,185 L62,170 L55,158 L46,145 L38,130 L32,115 L28,100 Z",
          fill: "rgba(0,0,128,0.22)",
          stroke: "rgba(0,80,200,0.38)",
          strokeWidth: 1.5
        }
      ),
      /* @__PURE__ */ r.jsx("ellipse", { cx: 82, cy: 115, rx: 14, ry: 20, fill: "rgba(0,60,180,0.38)", stroke: "rgba(0,100,220,0.28)", strokeWidth: 0.8 }),
      /* @__PURE__ */ r.jsx("path", { d: "M108,175 Q140,165 168,155 Q195,148 225,158", fill: "none", stroke: "rgba(0,80,200,0.28)", strokeWidth: 1.5 }),
      Pe.filter((o) => o.intensity !== "low").map((o) => /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: o.cx,
          cy: o.cy,
          r: o.intensity === "high" ? 30 : 22,
          fill: `url(#hg-${o.intensity})`,
          opacity: 0.8
        },
        `glow-${o.id}`
      )),
      Pe.map((o, y) => {
        const x = t(o.intensity), F = l(o.intensity), N = i === o.id, M = o.cx + x + 5, Y = o.cy - 2;
        return /* @__PURE__ */ r.jsxs(
          "g",
          {
            style: { cursor: "pointer" },
            onClick: () => v(o),
            children: [
              /* @__PURE__ */ r.jsx(
                "circle",
                {
                  cx: o.cx,
                  cy: o.cy,
                  r: x,
                  fill: `rgba(255,${o.intensity === "high" ? "140" : "90"},0,0.18)`,
                  stroke: F,
                  strokeWidth: 1.5,
                  filter: "url(#spot-glow)",
                  style: {
                    animation: N ? "hotpulse 0.6s ease-in-out 2" : `hotpulse ${2 + y * 0.4}s ease-in-out infinite`,
                    animationDelay: `${y * 0.3}s`
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(
                "circle",
                {
                  cx: o.cx,
                  cy: o.cy,
                  r: o.intensity === "high" ? 4 : o.intensity === "medium" ? 3.5 : 3,
                  fill: o.intensity === "high" ? "#FF8C00" : o.intensity === "medium" ? "#FF5500" : "#FF7700",
                  opacity: o.intensity === "low" ? 0.65 : 1
                }
              ),
              o.intensity !== "low" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: M,
                    y: Y,
                    fill: "rgba(255,255,255,0.9)",
                    fontSize: o.intensity === "high" ? 9 : 8,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: "700",
                    children: o.city.toUpperCase()
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    x: M,
                    y: Y + 11,
                    fill: "rgba(255,140,0,0.85)",
                    fontSize: o.intensity === "high" ? 8 : 7.5,
                    fontFamily: "JetBrains Mono, monospace",
                    children: [
                      o.orders,
                      " ped"
                    ]
                  }
                )
              ] })
            ]
          },
          o.id
        );
      }),
      d.visible && /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx(
          "rect",
          {
            x: Math.min(d.x + 10, 200),
            y: d.y - 24,
            width: 115,
            height: 38,
            rx: 5,
            fill: "rgba(0,0,0,0.88)",
            stroke: "rgba(255,140,0,0.42)",
            strokeWidth: 1
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            x: Math.min(d.x + 10, 200) + 57.5,
            y: d.y - 9,
            fill: "#FFFFFF",
            fontSize: 9,
            fontWeight: "700",
            fontFamily: "JetBrains Mono, monospace",
            textAnchor: "middle",
            children: d.city.toUpperCase()
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "text",
          {
            x: Math.min(d.x + 10, 200) + 57.5,
            y: d.y + 5,
            fill: "#FF8C00",
            fontSize: 8,
            fontFamily: "JetBrains Mono, monospace",
            textAnchor: "middle",
            children: [
              d.orders,
              " pedidos activos"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
      { color: "#FF8C00", glow: !0, label: "Muy alta demanda" },
      { color: "#FF5500", glow: !1, label: "Alta demanda" },
      { color: "#884400", glow: !1, label: "Media", opacity: 0.7 }
    ].map(({ color: o, glow: y, label: x, opacity: F }) => /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }, children: [
      /* @__PURE__ */ r.jsx("div", { style: { width: 8, height: 8, borderRadius: "50%", background: o, opacity: F, ...y ? { boxShadow: `0 0 6px ${o}` } : {} } }),
      x
    ] }, x)) }),
    /* @__PURE__ */ r.jsx("div", { style: { fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", fontFamily: "var(--mono)", textAlign: "center" }, children: "↑ Clic en un punto para telemetría detallada" })
  ] });
}, _r = ({ status: h }) => {
  const d = {
    PENDING: { label: "Pendiente", color: "#FF8C00", bg: "rgba(255,140,0,0.1)", border: "rgba(255,140,0,0.22)" },
    MIXING: { label: "En Mezcla", color: "#4488FF", bg: "rgba(0,0,128,0.3)", border: "rgba(68,136,255,0.3)" },
    DEPLOYED: { label: "Desplegado", color: "#00FF88", bg: "rgba(0,255,136,0.08)", border: "rgba(0,255,136,0.22)" }
  }[h];
  return /* @__PURE__ */ r.jsxs("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "4px 10px",
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: d.color,
    background: d.bg,
    border: `1px solid ${d.border}`
  }, children: [
    /* @__PURE__ */ r.jsx("span", { style: { width: 5, height: 5, borderRadius: "50%", background: d.color, flexShrink: 0, display: "block" } }),
    d.label
  ] });
}, Mr = [
  { key: "ALL", label: "TODO" },
  { key: "PENDING", label: "PENDIENTE" },
  { key: "MIXING", label: "EN MEZCLA" },
  { key: "DEPLOYED", label: "DESPLEGADO" }
], zr = ({ orders: h }) => {
  const [m, d] = O("ALL"), p = m === "ALL" ? h : h.filter((i) => i.status === m);
  return /* @__PURE__ */ r.jsxs("div", { style: {
    background: "linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 50%,rgba(0,0,128,0.08) 100%)",
    border: "1px solid rgba(255,255,255,0.09)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: 12,
    padding: 24,
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ r.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)", pointerEvents: "none" } }),
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.09)" }, children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("div", { style: { fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }, children: "Base de Datos Táctica" }),
        /* @__PURE__ */ r.jsx("div", { style: { fontSize: 16, fontWeight: 600, color: "#fff" }, children: "Órdenes de Producción en Curso" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { style: { display: "flex", gap: 8 }, children: Mr.map(({ key: i, label: f }) => /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => d(i),
          style: {
            padding: "8px 14px",
            background: m === i ? "rgba(255,140,0,0.12)" : "transparent",
            border: `1px solid ${m === i ? "rgba(255,140,0,0.4)" : "rgba(255,255,255,0.09)"}`,
            borderRadius: 8,
            fontSize: 11,
            fontWeight: m === i ? 600 : 400,
            color: m === i ? "#FF8C00" : "rgba(255,255,255,0.55)",
            cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: "0.08em",
            fontFamily: "var(--sans)"
          },
          children: f
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { fontSize: 10, fontFamily: "var(--mono)", color: "rgba(255,255,255,0.28)", marginBottom: 12, letterSpacing: "0.1em" }, children: [
      p.length,
      " registro",
      p.length !== 1 ? "s" : "",
      " activo",
      p.length !== 1 ? "s" : ""
    ] }),
    /* @__PURE__ */ r.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ r.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { children: ["ID ORDEN", "CLIENTE", "PRODUCTO / REF.", "VOLUMEN", "ZONA", "ETA", "ESTADO"].map((i) => /* @__PURE__ */ r.jsx("th", { style: {
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.28)",
        padding: "10px 16px",
        textAlign: "left",
        borderBottom: "1px solid rgba(255,255,255,0.09)"
      }, children: i }, i)) }) }),
      /* @__PURE__ */ r.jsx("tbody", { children: p.map((i, f) => /* @__PURE__ */ r.jsxs(
        "tr",
        {
          style: { transition: "background 0.15s", background: f % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" },
          onMouseEnter: (v) => v.currentTarget.style.background = "rgba(255,140,0,0.03)",
          onMouseLeave: (v) => v.currentTarget.style.background = f % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
          children: [
            /* @__PURE__ */ r.jsx("td", { style: { padding: "14px 16px", fontFamily: "var(--mono)", fontSize: 13, color: "#FF8C00", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: i.id }),
            /* @__PURE__ */ r.jsx("td", { style: { padding: "14px 16px", fontFamily: "var(--mono)", fontSize: 12, color: "rgba(255,255,255,0.85)", borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: i.clientName }),
            /* @__PURE__ */ r.jsxs("td", { style: { padding: "14px 16px", fontFamily: "var(--sans)", fontSize: 12, color: "rgba(255,255,255,0.75)", borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: [
              /* @__PURE__ */ r.jsx("span", { style: { color: "#FF8C00", fontFamily: "var(--mono)", fontSize: 11, fontWeight: 600, marginRight: 6 }, children: i.product }),
              i.colorRef
            ] }),
            /* @__PURE__ */ r.jsxs("td", { style: { padding: "14px 16px", fontFamily: "var(--mono)", fontSize: 13, color: "#fff", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.04)", whiteSpace: "nowrap" }, children: [
              i.volume.toLocaleString(),
              " ",
              /* @__PURE__ */ r.jsx("span", { style: { fontSize: 10, color: "rgba(255,255,255,0.4)" }, children: "gal" })
            ] }),
            /* @__PURE__ */ r.jsx("td", { style: { padding: "14px 16px", fontFamily: "var(--mono)", fontSize: 11, color: "rgba(255,255,255,0.45)", borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: i.zone }),
            /* @__PURE__ */ r.jsx("td", { style: { padding: "14px 16px", fontFamily: "var(--mono)", fontSize: 11, color: "rgba(255,255,255,0.5)", borderBottom: "1px solid rgba(255,255,255,0.04)", whiteSpace: "nowrap" }, children: i.eta }),
            /* @__PURE__ */ r.jsx("td", { style: { padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: /* @__PURE__ */ r.jsx(_r, { status: i.status }) })
          ]
        },
        i.id
      )) })
    ] }) })
  ] });
}, ie = ({ zone: h, title: m, right: d }) => /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }, children: [
  /* @__PURE__ */ r.jsx("span", { style: {
    fontFamily: "var(--mono)",
    fontSize: 9,
    letterSpacing: "0.2em",
    color: "#FF8C00",
    textTransform: "uppercase"
  }, children: h }),
  /* @__PURE__ */ r.jsx("span", { style: { fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }, children: m }),
  /* @__PURE__ */ r.jsx("div", { style: { flex: 1, height: 1, background: "linear-gradient(90deg,rgba(255,140,0,0.3),transparent)" } }),
  d && /* @__PURE__ */ r.jsx("span", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,0.28)", whiteSpace: "nowrap" }, children: d })
] }), Br = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --obsidian: #050505;
    --naval: #000080;
    --orange: #FF8C00;
    --orange-dim: rgba(255,140,0,0.13);
    --orange-glow: rgba(255,140,0,0.35);
    --glass: rgba(255,255,255,0.04);
    --glass-border: rgba(255,255,255,0.09);
    --glass-border-active: rgba(255,140,0,0.42);
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255,255,255,0.55);
    --text-tertiary: rgba(255,255,255,0.28);
    --naval-glow: rgba(0,80,255,0.15);
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Space Grotesk', sans-serif;
    --grid: 24px;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
  }

  html { background: var(--obsidian); color: var(--text-primary); font-family: var(--sans); font-size: 14px; }
  body {
    min-height: 100vh;
    background:
      radial-gradient(ellipse 80% 60% at 20% 10%, rgba(0,0,128,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 90%, rgba(255,140,0,0.06) 0%, transparent 50%),
      radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,60,0.4) 0%, transparent 70%),
      var(--obsidian);
  }

  /* Scanline overlay */
  body::before {
    content: '';
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none; z-index: 9999;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px);
  }

  input, select, button { font-family: var(--sans); }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,140,0,0.3); border-radius: 2px; }

  @keyframes pulse-ring {
    0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%,-50%) scale(3); opacity: 0; }
  }
  @keyframes hotpulse {
    0%,100% { r: 8; opacity: 0.9; }
    50%      { r: 13; opacity: 0.5; }
  }
  @keyframes feed-in {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes blink-border {
    0%,100% { border-color: rgba(255,140,0,0.15); }
    50%     { border-color: rgba(255,140,0,0.52); }
  }
  @keyframes glow-pulse {
    0%,100% { box-shadow: 0 0 10px rgba(255,140,0,0.2); }
    50%     { box-shadow: 0 0 22px rgba(255,140,0,0.5); }
  }

  .feed-item-enter { animation: feed-in 0.45s ease-out forwards; }
  .active-blink    { animation: blink-border 3s ease-in-out infinite; }
  .glow-pulse      { animation: glow-pulse 2.5s ease-in-out infinite; }
`, Gr = () => {
  const [h, m] = O(Fr), [d, p] = O([]), [i, f] = O({
    ordersToday: 247,
    gallonsProduced: 18450,
    systemEfficiency: 92.3,
    activeAlerts: 3
  });
  $(() => {
    const t = "sant-erp-global-styles";
    if (!document.getElementById(t)) {
      const l = document.createElement("style");
      l.id = t, l.textContent = Br, document.head.appendChild(l);
    }
    return () => {
      const l = document.getElementById(t);
      l && l.remove();
    };
  }, []), $(() => {
    p([X(), X(), X()]);
  }, []), $(() => {
    const t = setInterval(() => {
      const l = X();
      p((o) => [l, ...o].slice(0, 10)), f((o) => ({ ...o, ordersToday: o.ordersToday + 1 }));
    }, 4e3);
    return () => clearInterval(t);
  }, []), $(() => {
    const t = setInterval(() => {
      f((l) => ({
        ...l,
        gallonsProduced: l.gallonsProduced + Math.floor(Math.random() * 15 + 5)
      }));
    }, 8e3);
    return () => clearInterval(t);
  }, []);
  const v = ze((t, l) => {
    const o = {
      id: l,
      clientId: t.clientId,
      clientName: t.clientName,
      product: t.category.split("·")[0].trim(),
      colorRef: t.colorRef || "—",
      volume: t.volume,
      zone: t.zone.split("-")[0].trim(),
      priority: t.priority,
      eta: "PROGRAMANDO...",
      status: "PENDING",
      notes: t.notes,
      timestamp: /* @__PURE__ */ new Date()
    };
    m((x) => [o, ...x]), f((x) => ({ ...x, ordersToday: x.ordersToday + 1 }));
    const y = {
      id: `new-${Date.now()}`,
      city: t.zone.split("-")[0].trim(),
      product: t.category.split("·")[0].trim(),
      volume: t.volume,
      timestamp: /* @__PURE__ */ new Date(),
      isNew: !0
    };
    p((x) => [y, ...x].slice(0, 10));
  }, []);
  return /* @__PURE__ */ r.jsxs("div", { style: { minHeight: "100vh", fontFamily: "'Space Grotesk', sans-serif" }, children: [
    /* @__PURE__ */ r.jsx(wr, { starlinkBars: 3 }),
    /* @__PURE__ */ r.jsxs("div", { style: { padding: 24, display: "flex", flexDirection: "column", gap: 24, maxWidth: 1600, margin: "0 auto" }, children: [
      /* @__PURE__ */ r.jsx(ie, { zone: "ZONA 02", title: "KPI de Alta Luminosidad" }),
      /* @__PURE__ */ r.jsx(Nr, { data: i }),
      /* @__PURE__ */ r.jsx(ie, { zone: "ZONA 03", title: "Núcleo Estratégico" }),
      /* @__PURE__ */ r.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }, children: [
        /* @__PURE__ */ r.jsx(Pr, { onOrderSubmit: v, feedItems: d }),
        /* @__PURE__ */ r.jsx(Dr, { activeOrders: i.ordersToday, activeZones: 9 })
      ] }),
      /* @__PURE__ */ r.jsx(
        ie,
        {
          zone: "ZONA 04",
          title: "Monitor de Logística de Producción",
          right: `${h.length} registros activos`
        }
      ),
      /* @__PURE__ */ r.jsx(zr, { orders: h })
    ] })
  ] });
};
export {
  Rr as DISPATCH_ZONES,
  De as FEED_CITIES,
  _e as FEED_PRODUCTS,
  wr as Header,
  Fr as INITIAL_ORDERS,
  Nr as KPIGrid,
  zr as LogisticsTable,
  Pe as MAP_HOTSPOTS,
  Pr as OrderForm,
  Er as PAINT_CATEGORIES,
  Tr as PRIORITY_OPTIONS,
  Gr as SantERPDashboard,
  ie as SectionHeader,
  Dr as VenezuelaMap,
  Gr as default,
  X as generateFeedItem,
  kr as generateOrderId
};
//# sourceMappingURL=sant-erp.es.js.map
