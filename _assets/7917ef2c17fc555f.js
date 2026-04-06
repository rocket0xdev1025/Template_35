(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [70386],
  {
    /***/ 649000: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(258551);
      __web_req__(552854);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var Ca = __c.Ca;
        var x = __c.x;
        var y0 = __c.y0;
        var L = __c.L;
        var ub = __c.ub;
        var uc = __c.uc;
        var hD = __c.hD;
        var zr = __c.zr;
        var K = __c.K;
        var rg = __c.rg;
        var $f = __c.$f;
        var u = __c.u;
        var Yh = __c.Yh;
        var $g = __c.$g;
        var b3 = __c.b3;
        var A = __c.A;
        var Qp = __c.Qp;
        var Pp = __c.Pp;
        var KGc = function (a, b) {
            return (c) => {
              c = a(c);
              if (typeof c === "boolean") return c ? Pp() : Qp(b);
              switch (c.state) {
                case "valid":
                  return c;
                case "invalid":
                  return Qp(b);
                default:
                  throw new A(c);
              }
            };
          },
          LGc = function (a) {
            return (b) => {
              for (const e of a) {
                var c = e,
                  d = b;
                c = (Array.isArray(c) ? KGc(...c) : c)(d);
                c =
                  typeof c === "boolean"
                    ? c
                      ? Pp()
                      : Qp()
                    : c.state === "invalid" && c.error == null
                    ? Qp()
                    : c;
                if (c.state === "invalid") return c;
              }
              return Pp();
            };
          },
          MGc = function (a, b) {
            switch (a.status) {
              case 1:
                return b.SO ? { status: 1, data: b.SO(a.data) } : a;
              case 2:
                return a;
              case 3:
                return b.error ? b3(b.error(a.error)) : a;
              default:
                throw new A(a);
            }
          },
          d7 = function (a, b) {
            const c = b.SO,
              d = b.loading,
              e = b.error;
            switch (a.status) {
              case 1:
                return c ? c(a.data) : b.default?.();
              case 2:
                return d ? d() : b.default?.();
              case 3:
                return e ? e(a.error) : b.default?.();
              default:
                throw new A(a);
            }
          },
          NGc = function (a) {
            if (a.status === 1) return a.data;
          },
          PGc = function (a) {
            const b = OGc(a, a.document.language ?? "en"),
              c = e7((d) => {
                a.qW = d;
              });
            Array.isArray(b) ? c(b) : b.then(c, () => c([]));
          },
          OGc = async function (a, b) {
            try {
              const { qW: c } = await (a.kRb ??
                  (a.kRb = __webpack_require__.me(434895).then(() => __c.QGc))),
                d = JSON.parse(c);
              return Object.values(d[b] ?? {});
            } catch {
              return [];
            }
          },
          RGc = function (a) {
            const b = a.label,
              c = a.Gga,
              d = a.onClick,
              e = a.Ur;
            a = a.padding;
            return f7("button", {
              className: g7(
                "zFy0ZQ",
                e === h7 && "YWvjNg",
                (e === i7 || e === j7) && "y1B_1A"
              ),
              style: {
                "--Wa7Mmg": c.default,
                "--mvXy3w": c.Pg,
                "--www8Xw": c.active,
                "--neon6Q": c.Vm,
                paddingInlineStart: a.ta,
                paddingInlineEnd: a.Na,
                paddingBlockStart: a.ma,
                paddingBlockEnd: a.ya,
              },
              disabled: e !== h7,
              onClick: d,
              onTouchEnd: (f) => {
                f.stopPropagation();
              },
              children: b,
            });
          },
          k7 = function (a, b, c) {
            if (b)
              switch (b.GE) {
                case "required":
                  return a.fBa();
                case "unknown_option_id":
                  return a.mBa();
                case "invalid_format":
                  return c.type === 5 ? a.aBa() : a.$Aa();
                case "invalid_email":
                  return a.ZAa();
                case "out_of_bounds":
                  switch (c?.type) {
                    case 4:
                      return b.params.exact != null
                        ? a.jBa(b.params.exact)
                        : b.params.NX != null
                        ? a.lBa(b.params.NX)
                        : a.kBa(b.params.Yva);
                    case 1:
                    case 2:
                    case 3:
                      return b.params.exact != null
                        ? a.gBa(b.params.exact)
                        : b.params.NX != null
                        ? a.iBa(b.params.NX)
                        : a.hBa(b.params.Yva);
                    case 5:
                      return b.params.exact != null
                        ? a.cBa(b.params.exact)
                        : b.params.NX != null
                        ? a.eBa(b.params.NX)
                        : a.dBa(b.params.Yva);
                    default:
                      throw new A(c);
                  }
                default:
                  throw new A(b);
              }
          },
          SGc = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new A(a);
            }
          },
          TGc = function (a) {
            a = {
              ...__c.GF,
              stream: $g
                .Jb()
                .attrs(a.stream.hh(0))
                .mb(a.stream.Z.trim() + "*\n")
                .build(),
            };
            return Yh.create(a);
          },
          ZGc = function (a) {
            const b = a.OEa,
              c = a.gridGap,
              [d, e] = l7(0),
              f = UGc.count(a.children),
              g = b * f + c * (f - 1),
              h = VGc(null);
            WGc(() => {
              h.current && e(h.current.offsetWidth);
            }, []);
            return f7(XGc, {
              onResize: (k) => e(k.entry?.width ?? 0),
              children: ({ measureRef: k }) =>
                f7("div", {
                  ref: YGc(k, h),
                  className: "lLyTrw",
                  style: {
                    "--7BjzEw": `${b}px`,
                    "--W5t64A": g > d ? 1 : f,
                    "--CEwLjw": `${c}px`,
                  },
                  children: a.children,
                }),
            });
          },
          m7 = function (a, b) {
            return __c.Dr(__c.Cr(__c.wr(a), b));
          },
          $Gc = function (a) {
            const b = a.color;
            a = a.Za;
            return b ? b : a.ref ? a.ref.Jh[0].color : "#ffffff";
          },
          n7 = function (a, b) {
            u(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.Dn(b, (d) => {
              const e = c.get(d) ?? __c.JA(d, a);
              c.set(d, e);
              return e;
            });
          },
          aHc = function (a, b, c) {
            u(!0);
            u(!0);
            u(!0);
            const { va: d, a: e, b: f } = __c.rr(a),
              { va: g, a: h, b: k } = __c.rr(b),
              l = (d + g) / 2;
            var m = (Math.hypot(e, f) + Math.hypot(h, k)) / 2;
            m = 0.5 * (1 - Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7)));
            var n = e * (1 + m),
              p = h * (1 + m),
              q = Math.hypot(n, f),
              r = Math.hypot(p, k);
            m = (q + r) / 2;
            var t = __c.Er((Math.atan2(f, n) * 180) / Math.PI);
            const v = __c.Er((Math.atan2(k, p) * 180) / Math.PI);
            n = Math.abs(t - v) > 180 ? (t + v + 360) / 2 : (t + v) / 2;
            p = r - q;
            q =
              2 *
              Math.sqrt(q * r) *
              Math.sin(
                (((Math.abs(v - t) <= 180
                  ? v - t
                  : v <= t
                  ? v - t + 360
                  : v - t - 360) /
                  2) *
                  Math.PI) /
                  180
              );
            r = 1 + 0.045 * m;
            t =
              1 +
              0.015 *
                m *
                (1 -
                  0.17 * Math.cos(((n - 30) * Math.PI) / 180) +
                  0.24 * Math.cos((2 * n * Math.PI) / 180) +
                  0.32 * Math.cos(((3 * n + 6) * Math.PI) / 180) -
                  0.2 * Math.cos(((4 * n - 63) * Math.PI) / 180));
            return Math.sqrt(
              ((g - d) /
                (1 +
                  (0.015 * (l - 50) ** 2) / Math.sqrt(20 + (l - 50) ** 2))) **
                2 +
                (p / (1 * r)) ** 2 +
                (q / (1 * t)) ** 2 +
                (p / (1 * r)) *
                  (q / (1 * t)) *
                  (-(2 * Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7))) *
                    Math.sin(
                      (30 *
                        Math.exp(-1 * ((n - 275) / 25) ** 2) *
                        2 *
                        Math.PI) /
                        180
                    ))
            ) >= (c ?? 20)
              ? a
              : n7(b, o7);
          },
          bHc = function ({ size: a }) {
            return f7("svg", {
              "aria-hidden": "true",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: f7("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.6592 18.1181L13.7952 4.14664C13.6002 3.74964 13.279 3.42849 12.882 3.23346C11.8907 2.7464 10.6921 3.15525 10.2051 4.14664L3.34116 18.1181C3.20634 18.3925 3.13623 18.6942 3.13623 19C3.13623 20.1045 4.03166 21 5.13623 21H18.8641C19.1698 21 19.4715 20.9298 19.746 20.795C20.7374 20.308 21.1462 19.1095 20.6592 18.1181ZM12.2206 4.57976C12.3199 4.62852 12.4002 4.7088 12.4489 4.80805L19.3129 18.7795C19.4346 19.0273 19.3324 19.327 19.0846 19.4487C19.0159 19.4824 18.9405 19.5 18.8641 19.5H5.13623C4.86009 19.5 4.63623 19.2761 4.63623 19C4.63623 18.9235 4.65376 18.8481 4.68746 18.7795L11.5514 4.80805C11.6732 4.56021 11.9728 4.45799 12.2206 4.57976ZM12.0001 18.25C12.6905 18.25 13.2501 17.6903 13.2501 17C13.2501 16.3096 12.6905 15.75 12.0001 15.75C11.3098 15.75 10.7501 16.3096 10.7501 17C10.7501 17.6903 11.3098 18.25 12.0001 18.25ZM13.0001 9.99995C13.0001 9.44767 12.5524 8.99995 12.0001 8.99995C11.4479 8.99995 11.0001 9.44767 11.0001 9.99995V13.5C11.0001 14.0522 11.4479 14.5 12.0001 14.5C12.5524 14.5 13.0001 14.0522 13.0001 13.5V9.99995Z",
                fill: "#db142c",
              }),
            });
          },
          fHc = function (a) {
            const b = a.vub,
              c = a.Vz,
              d = a.wC,
              e = a.ki,
              f = a.Ur,
              [g, h, k] = p7(() => {
                switch (b) {
                  case 4:
                  case 2:
                    return ["#e3fff0", "#00873d", cHc];
                  case 3:
                    return ["#ffd9df", "#c8001e", dHc];
                  case 1:
                    return [c.Vm, d.Vm];
                  case 0:
                    return e
                      ? [c.selected, d.selected]
                      : f === j7 || f === i7
                      ? [c.Vm, d.Vm]
                      : [c.default];
                  default:
                    throw new A(b);
                }
              }, [b, c.Vm, c.selected, c.default, d.Vm, d.selected, e, f]),
              l = b === 0 || b === 1;
            return f7(eHc, {
              ...a,
              cb: k,
              K_: a.tqa === "s" ? void 0 : e ? d.selected : d.default,
              SEa: h,
              backgroundColor: {
                default: g,
                Pg: l ? c.Pg : g,
                active: l ? c.active : g,
                selected: l ? c.selected : g,
              },
              yyb: !!k,
            });
          },
          eHc = function (a) {
            const b = a.avb,
              c = a.backgroundColor,
              d = a.SEa,
              e = a.V,
              f = a.ki,
              g = a.label,
              h = a.Bkb,
              k = a.onChange;
            var l = a.tqa;
            const m = a.Ur,
              n = a.uIa,
              p = a.cb,
              q = a.K_,
              r = a.yyb,
              t = a.CM,
              v = a.fHb,
              w = a.Sob,
              y = a.Tob,
              B = a.Dxa;
            a = a.Qc;
            const C = q7(),
              D = q7(),
              E = q7(),
              J = VGc(null),
              M = VGc(null),
              O = l === "s" ? "radio" : "checkbox";
            l = p7(() => {
              const Q = g.stream.zn(0);
              return n !== void 0
                ? r7(`${n.value}%`, {
                    ...Q,
                    "font-weight": "bold",
                    color: n.hd,
                    "font-size": $f(rg, Q, "font-size") * gHc,
                  })
                : void 0;
            }, [n, g]);
            const S = m === h7;
            return s7("div", {
              className: g7(
                "VTAQRg",
                !(f || n) && "zt5zlQ",
                S && "A_ugOA",
                (m === i7 || m === j7) && "zMViSA",
                f && "Buj71Q"
              ),
              style: {
                "--_v6jRQ": c.default,
                "--CGAV4g": c.selected,
                "--6wmixw": c.Pg,
                "--LX33kQ": c.active,
                "--T5edVA": `${e}px`,
                "--XYYx_A": `${a / 2}px`,
                padding: `${v}px`,
              },
              onClick: S
                ? (Q) => {
                    M.current?.contains(Q.target) ||
                      J.current?.contains(Q.target) ||
                      J.current?.click();
                  }
                : void 0,
              children: [
                f7("input", {
                  "aria-invalid": !!t,
                  "aria-checked": f,
                  "aria-labelledby": p ? D : void 0,
                  "aria-describedby":
                    n || t ? `${n ? E : ""} ${t || ""}`.trim() : void 0,
                  id: C,
                  name: b,
                  readOnly: m === i7,
                  disabled: m === j7,
                  type: O,
                  value: g.stream.Z,
                  className: "EP8SeA",
                  onChange: S ? k : void 0,
                  onClick: S
                    ? (Q) => {
                        O === "radio" && f && (Q.preventDefault(), k());
                      }
                    : void 0,
                  checked: f,
                  ref: J,
                }),
                n !== void 0 &&
                  f7("div", {
                    className: "GpAzFg",
                    role: "meter",
                    "aria-valuenow": n.value,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "data-percent": n.value,
                    style: { width: `${n.value}%`, "--60vMXA": n.jnb },
                  }),
                s7("label", {
                  className: g7(
                    "rSeRzQ",
                    p && "zSZK5w",
                    O === "checkbox" && "bHM4Bw"
                  ),
                  htmlFor: C,
                  ref: M,
                  children: [
                    !r &&
                      O === "checkbox" &&
                      f7("div", {
                        className: g7("n4ooaw", f && "Jw4Eqw"),
                        style: {
                          "--THA9bg": q,
                          "--KBfK1Q": `${B}px`,
                          "--HgMgMg": hHc(c.selected, w, y),
                        },
                      }),
                    f7("div", { children: f7(h, { text: d ? iHc(g, d) : g }) }),
                  ],
                }),
                l && f7("div", { id: E, children: f7(h, { text: l }) }),
                p && f7(p, { id: D, size: a }),
              ],
            });
          },
          hHc = function (a, b, c) {
            a = encodeURIComponent(a);
            return `url("data:image/svg+xml,%3Csvg width='${c}' height='${b}' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 4.5L3.25 7L9.25 1' stroke='${a}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;
          },
          jHc = function (a) {
            return f7("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: a.size,
              height: a.size,
              "data-testid": t7.pvb,
              children: f7("path", {
                d: "M10.5086 3.2223C11.0966 1.95168 12.9027 1.95168 13.4906 3.2223L15.3964 7.34106C15.5158 7.5992 15.7603 7.77718 16.0427 7.81153L20.546 8.35932C21.9319 8.52791 22.4892 10.2389 21.4683 11.1914L18.1397 14.297C17.9325 14.4903 17.8396 14.7768 17.8939 15.055L18.7667 19.5241C19.0347 20.8967 17.5744 21.9552 16.3533 21.2734L12.4001 19.0659C12.1512 18.9269 11.8481 18.9269 11.5992 19.0659L7.64594 21.2734C6.42485 21.9552 4.96453 20.8967 5.23259 19.5241L6.10534 15.055C6.15967 14.7768 6.06675 14.4903 5.85952 14.297L2.53093 11.1914C1.5101 10.2389 2.06735 8.52791 3.45329 8.35932L7.95656 7.81153C8.23892 7.77718 8.48342 7.5992 8.60286 7.34106L10.5086 3.2223Z",
                fill: a.color,
              }),
            });
          },
          kHc = function (a) {
            return f7("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: a.size,
              height: a.size,
              "data-testid": t7.rHb,
              children: f7("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z",
                fill: a.color,
              }),
            });
          },
          lHc = function (a, b, c) {
            b ?? (b = 0);
            if (
              c != null &&
              ((c > b && a > b && a <= c) || (c < b && a > c && a <= b))
            )
              return "hover";
            if (a <= b) return "selected";
          },
          mHc = function (a) {
            switch (a) {
              case 1:
                return "email";
              case 2:
                return "text";
              default:
                throw new A(a);
            }
          },
          nHc = function (a, b, c, d) {
            const e = (f) => {
              const g = c();
              return g != null ? `${f} | ${b.MGa(g)}` : f;
            };
            switch (a) {
              case 0:
                return e(d ? b.rGa() : b.GPa());
              case 1:
              case 5:
                return e(d ? b.qGa() : b.HPa());
              case 2:
                return b.offline();
              case 3:
                return b.loading();
              case 4:
                return b.bBa();
              case 6:
                return e(b.NMa());
              case 7:
                return e(b.PJa());
              default:
                throw new A(a);
            }
          },
          oHc = function (a, b, c, d, e) {
            if (a === 0) return null;
            a = $g
              .Jb()
              .attrs({
                "font-family": c.fontFamily,
                color: b.hd,
                "font-size": b.ryb,
                "font-weight": "bold",
                "text-align": "center",
                direction: SGc(c.direction),
                "font-kerning": "normal",
                "font-feature-liga": "on",
                "font-feature-clig": "on",
                "font-feature-calt": "on",
              })
              .mb(a === 2 ? d.sya() : d.yDa())
              .Bq();
            a = Yh.create({ stream: a.build(), Rb: new Map() });
            return e(a);
          },
          pHc = function (a) {
            return a.some((b) => {
              switch (b.type) {
                case 4:
                  return !0;
                case 5:
                  return b.variant === 1;
                case 1:
                case 2:
                case 3:
                  return !1;
                default:
                  throw new A(b);
              }
            });
          },
          qHc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          tHc = function (a, b) {
            switch (a.type) {
              case 0:
                var c = rHc(a.options, a.sKa);
                if (!c.length) return { sZ: "", ET: [] };
                a = rHc(b, a.sKa);
                return {
                  sZ: c.map(({ label: d }) => d).join(", "),
                  ET: a.map(({ id: d }) => d),
                };
              case 2:
              case 1:
                return (
                  (c = sHc(b, a.value)), { sZ: a.value, ET: c ? [c.id] : [] }
                );
              default:
                throw new A(a);
            }
          },
          uHc = function (a) {
            switch (a.type) {
              case 0:
                return (
                  (a = rHc(a.options, a.sKa)
                    .map(({ label: b }) => b)
                    .join(", ")),
                  { sZ: a, ET: a }
                );
              case 2:
              case 1:
                return { sZ: a.value, ET: a.value };
              default:
                throw new A(a);
            }
          },
          rHc = function (a, b) {
            const c = [];
            for (const d of a) b.includes(d.id) && c.push(d);
            return c;
          },
          sHc = function (a, b) {
            for (const c of a) if (c.label.trimEnd() === b) return c;
          },
          wHc = function (a) {
            const { min: b = 0, max: c = Infinity } = a;
            if (b !== 0 || c !== Infinity) {
              var d = vHc({ min: b, max: c });
              if (d) return ({ length: e }) => d(e);
            }
          },
          vHc = function (a) {
            const { min: b = -Infinity, max: c = Infinity } = a;
            if (b !== -Infinity || c !== Infinity)
              return (d) => {
                if (b === c) {
                  if (d !== b)
                    return Qp({ GE: "out_of_bounds", params: { exact: b } });
                } else {
                  if (d < b)
                    return Qp({ GE: "out_of_bounds", params: { NX: b } });
                  if (d > c)
                    return Qp({ GE: "out_of_bounds", params: { Yva: c } });
                }
                return Pp();
              };
          },
          xHc = function (a) {
            return a === void 0 ? 1 : a === 0 ? Infinity : a;
          },
          BHc = function (a, b, c) {
            switch (a.type) {
              case "select":
                return new yHc(a, b, c);
              case "text":
                return new zHc(a, b, c);
              case "number":
                return new AHc(a, b, c);
              default:
                throw new A(a);
            }
          },
          CHc = function (a) {
            if (!u7(a, "q")) return 0;
            const b = a.form.fields.first().id ?? "",
              c = v7(a, b, "select");
            a = a.CBa.get(b);
            return a?.eM == null ? 0 : qHc(c.FG, a.eM) ? 2 : 1;
          },
          v7 = function (a, b, c) {
            let d = a.DBa.get(b);
            const e = a.form.fields.first(({ id: f }) => f === b);
            if (!e) throw Error(`Field ${b} is not found`);
            if (c != null && e.type !== c)
              throw Error(`Field ${b} is not the expected type (${c})`);
            (d && d.Ed === e) ||
              ((c = w7(
                () =>
                  a.$Ba.get()?.getContext(a.form.id)?.g2b?.get(b) ??
                  a.CBa.get(b)
              )),
              (d = BHc(e, a.context, c)),
              a.DBa.set(b, d));
            return d;
          },
          FHc = function (a) {
            let b;
            DHc(a.u0, () => {
              b = a.uI?.i5b({ k3b: () => a.form.Cs }).subscribe((c) => {
                x7(() => {
                  a.u0.set(c.results);
                });
              });
            });
            EHc(a.u0, () => {
              b?.unsubscribe();
            });
          },
          u7 = function (a, b) {
            if (a.form.fields.count() !== 1) return !1;
            const c = a.form.fields.first();
            return (
              c.type === "select" &&
              (c.variant?.type === b ||
                (c.variant?.type === void 0 &&
                  a.form.type === (b === "q" ? "quiz" : "poll")))
            );
          },
          HHc = function (a, { GE: b, X$a: c }) {
            const d = a.Fg;
            if (d) {
              switch (b) {
                case 5:
                  b = K("STZx7Q");
                  break;
                default:
                  b = K("izckBA");
              }
              c = c
                ? { PL: K("mQhziQ"), onClick: e7(() => void a.submit()) }
                : void 0;
              d.OD({ CF: b, group: GHc, gH: c });
            }
          },
          IHc = function (a) {
            x7(() => {
              for (const b of a.DBa.values()) b.reset();
            });
          },
          JHc = function (a) {
            return a.map((b) => b.result);
          },
          LHc = function (a, b, c, d) {
            const e = a !== b,
              f = e ? a : n7(a, o7),
              { h: g, s: h, va: k } = __c.yr(f);
            var l = new __c.qr(g, h, k < 10 ? k + 6 : k - 6);
            l = zr(l);
            var m = new __c.qr(g, h, k < 10 ? k + 10 : k - 10);
            m = zr(m);
            return {
              backgroundColor: b,
              accentColor: f,
              Plb: m7(f, e ? 0.5 : 0.12),
              Olb: l,
              Nlb: m,
              Qlb: m7(f, 0.4),
              BM: aHc("#db142c", b),
              ...(function () {
                const n = n7(f, o7);
                return c
                  ? {
                      qyb: c,
                      Q4: c === f ? n : c,
                      Tlb: c === f ? n : c,
                      AH: c,
                      uga: c,
                      ETa: zr(__c.HA(__c.Cr(__c.wr(c), 0.8), __c.wr(b))),
                    }
                  : {
                      qyb: d?.Ra === 1 ? n7(b, o7) : n7(a, o7),
                      Q4: n,
                      Tlb: e ? n7(a, o7) : a,
                      AH: n7(b, o7),
                      uga: n7(b, KHc),
                      ETa: n7(b, o7),
                    };
              })(),
              Pha: f,
              ...(function () {
                if (c)
                  return {
                    s6: m7(c, 0.12),
                    t6: m7(c, 0.3),
                    Oha: m7(c, 0.5),
                    MY: m7(c, 0.1),
                  };
                const n = aHc("#000000", b);
                return {
                  s6: m7(n, 0.08),
                  t6: m7(n, 0.12),
                  Oha: m7(n, 0.5),
                  MY: m7(n, 0.1),
                };
              })(),
              ...(function () {
                if (c)
                  return { mya: m7(c, 0.6), oya: m7(c, 0.5), nya: m7(c, 0.5) };
                const n = aHc("#000000", b, 50),
                  { h: p, s: q, va: r } = __c.yr(n);
                var t = new __c.qr(p, q, r < 10 ? r + 6 : r - 6);
                t = zr(t);
                var v = new __c.qr(p, q, r < 10 ? r + 10 : r - 10);
                v = zr(v);
                return { mya: m7(n, 0.6), oya: m7(t, 0.5), nya: m7(v, 0.5) };
              })(),
            };
          },
          MHc = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new A(a);
            }
          },
          OHc = function (a) {
            return new NHc(a.data.D.value, a.Mr);
          },
          PHc = function (a, b) {
            const c = y7(b);
            b = a.zT.get(c);
            if ((a = a.eda.get(c))) return { status: 1, data: a };
            switch (b) {
              case void 0:
              case "uninitialized":
                return b3();
              case "initializing":
                return { status: 2 };
              case "initialized":
                return { status: 1, data: a };
              default:
                throw new A(b);
            }
          },
          RHc = function (a) {
            return z7(
              () => {
                const b = a.formData.rG,
                  c = a.Mr.getSettings(b);
                return [a.formData.Cs, b, c];
              },
              async ([b, c, d]) => {
                if (d.status === 1) {
                  var e = y7({ Cs: b, submitter: d.data.MMa });
                  d = a.zT.get(e);
                  if (d !== "initialized" && d !== "initializing") {
                    a.zT.set(e, "initializing");
                    var f = await a.uI.o2b({ Cs: b, rG: c });
                    x7(() => {
                      a.zT.get(e) !== "initialized" &&
                        (a.zT.set(e, "initialized"),
                        f.ok && f.value && a.eda.set(e, f.value));
                    });
                  }
                }
              },
              { equals: QHc.structural }
            );
          },
          y7 = function (a) {
            return [a.Cs, JSON.stringify(a.submitter)].join(":");
          },
          VHc = function (a) {
            const b = a.title,
              c = a.id,
              d = a.fields,
              e = a.mia,
              f = a.Bba,
              g = a.kca,
              h = a.borderColor,
              k = a.Se,
              l = a.V,
              m = a.F2b,
              [n, p] = [f, g].map((q) =>
                typeof q === "string" ? q : q.Jh[0].color || "#ffffff"
              );
            return {
              minHeight: 500,
              minWidth: 368,
              id: c,
              Cs: __c.qn(),
              rG: void 0,
              type: "quiz",
              Qi: 18,
              Kj: 18,
              direction: a.direction ?? "l",
              mia: e,
              Bba:
                typeof f === "string" ? { ...hD, color: f } : { ...hD, Za: f },
              kca:
                typeof g === "string" ? { ...hD, color: g } : { ...hD, Za: g },
              border: { ...__c.cJb, color: h ?? n, weight: k ?? 8 },
              V: l ?? 8,
              KWa: {},
              nDa: void 0,
              title: b
                ? {
                    label: A7(b, {
                      "font-size": 35.154,
                      "font-weight": "bold",
                      "text-align": "start",
                      leading: 1200,
                      color: n7(n, o7),
                      "font-family": e,
                      "font-kerning": "normal",
                      "font-feature-liga": "on",
                      "font-feature-clig": "on",
                      "font-feature-calt": "on",
                    }),
                    eJ: "c",
                  }
                : void 0,
              header: {
                aba: 1.953,
                Fq: 1.953,
                Gq: 1.953,
                Tt: 0.64,
                background: SHc,
              },
              G_: !1,
              jra: !1,
              fields: d.map((q) => THc(q, p, e)).slice(0, uc("5684dca7", 10)),
              JS: { Gq: 1.953, Fq: 1.953, Tt: 0.64 },
              footer: {
                label: {
                  type: "text2",
                  text: A7(m.slice(0, uc("f368b7e8", 250)), {
                    "text-align": "center",
                    "font-weight": "bold",
                    color: n === p ? p : n7(n, o7),
                    "font-size": UHc,
                    "font-family": e,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on",
                  }),
                },
                eJ: void 0,
                Tt: 1.953,
                Fq: 1.953,
                Gq: 1.953,
                bba: 0.512,
              },
            };
          },
          THc = function (a, b, c) {
            const d = {
              label: {
                type: "text2",
                text: A7(a.label.slice(0, uc("f368b7e8", 250)), WHc(b, c)),
              },
              TEa: 1,
              required: a.required,
              id: __c.qn(),
              eJ: "c",
              V: 8,
            };
            switch (a.type) {
              case "select":
                const e = [],
                  f = a.options.map((g, h) => {
                    var k = __c.qn();
                    g = g.slice(0, uc("f368b7e8", 250));
                    var l = {
                      color: n7(b, o7),
                      "font-size": 18,
                      "font-family": c,
                      "font-kerning": "normal",
                      "font-feature-liga": "on",
                      "font-feature-clig": "on",
                      "font-feature-calt": "on",
                    };
                    k = { id: k, label: { type: "text2", text: A7(g, l) } };
                    a.variant.type === 2 &&
                      a.variant.uYb.includes(h) &&
                      k.id &&
                      e.push(k.id);
                    return k;
                  });
                return {
                  ...d,
                  type: "select",
                  H0: a.E$b ? 0 : 1,
                  variant: XHc(a.variant),
                  tya: e,
                  options: f.slice(0, uc("55264882", 10)),
                };
              case "text":
                return {
                  ...d,
                  type: "text",
                  placeholder: a.placeholder,
                  variant: YHc(a.variant),
                };
              case "number":
                return {
                  ...d,
                  type: "number",
                  variant: ZHc(a.variant),
                  ...$Hc(a.min, a.max, a.variant),
                };
              default:
                throw new A(a);
            }
          },
          $Hc = function (a, b, c) {
            switch (c.type) {
              case 1:
                return b && a && b < a
                  ? { min: b, max: a }
                  : { min: a, max: b };
              case 2:
                return (
                  (a = Math.max(1, a ?? 1)),
                  (b = Math.min(5, b ?? 5)),
                  { min: Math.min(a, b), max: Math.max(a, b) }
                );
              case 3:
                return { min: 1, max: Math.max(1, Math.min(10, b ?? 10)) };
              case 4:
                return (
                  (a = Math.max(1, a ?? 1)),
                  (b = Math.min(10, b ?? 10)),
                  { min: Math.min(a, b), max: Math.max(a, b) }
                );
              default:
                throw new A(c);
            }
          },
          XHc = function (a) {
            switch (a.type) {
              case 2:
                return { type: "q" };
              case 3:
                return { type: "r" };
              case 1:
                return { type: "p" };
              default:
                throw new A(a);
            }
          },
          YHc = function (a) {
            switch (a.type) {
              case 1:
                return { type: "e" };
              case 2:
                return { type: "f", ZN: a.G4b ? 1 : 3 };
              default:
                throw new A(a);
            }
          },
          ZHc = function (a) {
            switch (a.type) {
              case 1:
                return { type: "a" };
              case 2:
                return { type: "b" };
              case 3:
                return { type: "c" };
              case 4:
                return { type: "d" };
              default:
                throw new A(a);
            }
          },
          WHc = function (a, b) {
            return {
              color: n7(a, o7),
              "font-size": 18,
              "font-family": b,
              "font-weight": "semibold",
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            };
          };
        __c.ry.prototype.uIa = __c.fa(18, function () {
          return __c.my(this, () => __c.Zx(this.operators, "%", this.value));
        });
        var B7 = __webpack_require__(186901),
          w7 = B7.EW,
          x7 = B7.h5,
          aIc = B7.L3,
          QHc = B7.m3,
          z7 = B7.mJ,
          bIc = B7.O8,
          EHc = B7.q$,
          C7 = B7.sH,
          DHc = B7.tC,
          e7 = B7.XI;
        var cIc = __webpack_require__(322594),
          f7 = cIc.jsx,
          s7 = cIc.jsxs;
        var dIc = __webpack_require__,
          eIc = dIc(208463),
          g7 = dIc.n_x(eIc)();
        var D7 = __webpack_require__(205482),
          UGc = D7.Children,
          fIc = D7.createElement,
          gIc = D7.useEffect,
          q7 = D7.useId,
          WGc = D7.useLayoutEffect,
          p7 = D7.useMemo,
          VGc = D7.useRef,
          l7 = D7.useState;
        var E7 = __webpack_require__(721226).PA;
        var YGc = __webpack_require__(87387).A;
        var XGc = __webpack_require__(34741).A;
        var hIc = __webpack_require__(536618).iB;
        var iIc = (a) => ub("JWYKDQ", [a]),
          jIc = () => K("jh7u2w"),
          kIc = (a) => ub("Jj1O+A", [a]),
          lIc = (a) => ub("sUWUOA", [a]),
          mIc = (a) => ub("Q5Pg4w", [a]),
          nIc = (a) => ub("4EBAAA", [a]),
          oIc = () => K("orPgUw"),
          pIc = () => K("WjcAyg"),
          qIc = () => K("CV+PYA"),
          rIc = () => K("As1GTA"),
          sIc = () => K("xSH8Og"),
          tIc = () => K("wutQEA"),
          uIc = (a) => ub("Qso6Xw", [a]),
          vIc = () => K("z/bN8g"),
          wIc = (a) => ub("Aa3fvQ", [a]),
          xIc = () => K("2Q9Q+A"),
          yIc = (a) => ub("6QpLYA", [a]),
          zIc = (a) => ub("SWeX4Q", [a]),
          AIc = () => K("nFbxIQ"),
          BIc = () => K("ktnWSg"),
          CIc = (a) => ub("U28wGg", [a]),
          DIc = () => K("VGvKlQ"),
          EIc = (a) => ub("kbfbNQ", [a]),
          FIc = () => K("fNQh9A"),
          GIc = () => K("i3mNPA"),
          HIc = () => K("zt/K0Q"),
          IIc = () => K("pT68JA"),
          JIc = () => K("g7pHPw");
        var F7 = 0,
          G7 = {
            eBa: F7++,
            $Aa: F7++,
            gBa: F7++,
            U$a: F7++,
            lBa: F7++,
            dBa: F7++,
            bBa: F7++,
            GPa: F7++,
            yDa: F7++,
            PJa: F7++,
            NMa: F7++,
            jBa: F7++,
            ZAa: F7++,
            cBa: F7++,
            loading: F7++,
            rGa: F7++,
            MGa: F7++,
            kBa: F7++,
            offline: F7++,
            fBa: F7++,
            qGa: F7++,
            iBa: F7++,
            hBa: F7++,
            aBa: F7++,
            sya: F7++,
            mBa: F7++,
            wIa: F7++,
            HPa: F7++,
          },
          KIc = class {
            static G(a) {
              L(a, { qW: C7.shallow });
            }
            getText(a, b, c) {
              a = this.qW?.[a];
              c?.length
                ? a
                  ? ((b = this.document.language),
                    (c = new __c.wb(a, b ? __c.Jaa(b) : void 0, __c.Kaa, {
                      ignoreTag: !0,
                    }).format(Object.fromEntries(Object.entries(c)))))
                  : (c = b(...c))
                : (c = a || b());
              return c;
            }
            hBa(...a) {
              return this.getText(G7.hBa, EIc, a);
            }
            bBa() {
              return this.getText(G7.bBa, oIc);
            }
            sya() {
              return this.getText(G7.sya, GIc);
            }
            yDa() {
              return this.getText(G7.yDa, rIc);
            }
            PJa() {
              return this.getText(G7.PJa, sIc);
            }
            MGa(...a) {
              return this.getText(G7.MGa, yIc, a);
            }
            U$a(...a) {
              return this.getText(G7.U$a, lIc, a);
            }
            offline() {
              return this.getText(G7.offline, AIc);
            }
            loading() {
              return this.getText(G7.loading, xIc);
            }
            NMa() {
              return this.getText(G7.NMa, tIc);
            }
            HPa() {
              return this.getText(G7.HPa, IIc);
            }
            GPa() {
              return this.getText(G7.GPa, pIc);
            }
            qGa() {
              return this.getText(G7.qGa, JIc);
            }
            rGa() {
              return this.getText(G7.rGa, qIc);
            }
            wIa() {
              return this.getText(G7.wIa, DIc);
            }
            fBa() {
              return this.getText(G7.fBa, BIc);
            }
            mBa() {
              return this.getText(G7.mBa, HIc);
            }
            aBa() {
              return this.getText(G7.aBa, FIc);
            }
            $Aa() {
              return this.getText(G7.$Aa, jIc);
            }
            jBa(...a) {
              return this.getText(G7.jBa, uIc, a);
            }
            lBa(...a) {
              return this.getText(G7.lBa, mIc, a);
            }
            kBa(...a) {
              return this.getText(G7.kBa, zIc, a);
            }
            cBa(...a) {
              return this.getText(G7.cBa, wIc, a);
            }
            eBa(...a) {
              return this.getText(G7.eBa, iIc, a);
            }
            dBa(...a) {
              return this.getText(G7.dBa, nIc, a);
            }
            gBa(...a) {
              return this.getText(G7.gBa, kIc, a);
            }
            iBa(...a) {
              return this.getText(G7.iBa, CIc, a);
            }
            ZAa() {
              return this.getText(G7.ZAa, vIc);
            }
            constructor(a) {
              this.document = a;
              this.qW = (KIc.G(this), void 0);
              z7(
                () => a.language,
                () => PGc(this),
                { fireImmediately: !0 }
              );
            }
          };
        var LIc = class extends KIc {};
        var MIc = y0.ri({
            type: y0.qj(46, "text2"),
            text: y0.Mm(2423, "Richtext2"),
          }),
          NIc = y0.C3({ type: void 0 }, MIc),
          OIc = {
            id: y0.Uz(35),
            TEa: y0.Sj(37),
            label: y0.ref(38, NIc),
            eJ: y0.vC(2430, "c", "u"),
            V: y0.Sj(29),
            required: y0.Uaa(2331),
          },
          PIc = y0.ri({ id: y0.Uz(35), label: y0.ref(38, NIc) }),
          QIc = y0.ri({ type: y0.qj(46, "r") }),
          RIc = y0.ri({ type: y0.qj(46, "p") }),
          SIc = y0.ri({ type: y0.qj(46, "q") }),
          TIc = y0.C3({ type: void 0 }, QIc, RIc, SIc),
          UIc = y0.ri({
            ...OIc,
            type: y0.qj(46, "select"),
            variant: y0.F7a(48, TIc),
            options: y0.listRef(41, PIc),
            H0: y0.aHb(39, { min: 0 }),
            tya: y0.PSa(1549, y0.HMa()),
          }),
          VIc = y0.ri({ type: y0.qj(46, "e") }),
          WIc = y0.ri({ type: y0.qj(46, "f"), ZN: y0.lF(40, { min: 1 }) }),
          XIc = y0.C3({ type: void 0 }, VIc, WIc),
          YIc = y0.ri({
            ...OIc,
            type: y0.qj(46, "text"),
            variant: y0.ref(48, XIc),
            placeholder: y0.Uz(42),
          }),
          ZIc = y0.ri({ type: y0.qj(46, "a") }),
          $Ic = y0.ri({ type: y0.qj(46, "b") }),
          aJc = y0.ri({ type: y0.qj(46, "c") }),
          bJc = y0.ri({ type: y0.qj(46, "d") }),
          cJc = y0.C3({ type: void 0 }, ZIc, $Ic, aJc, bJc),
          dJc = y0.ri({
            ...OIc,
            type: y0.qj(46, "number"),
            variant: y0.ref(48, cJc),
            min: y0.Sj(1),
            max: y0.Sj(2),
          }),
          eJc = y0.C3({ type: void 0 }, YIc, UIc, dJc),
          fJc = y0.ri({ Fq: y0.Sj(1), Gq: y0.Sj(2), Tt: y0.Sj(3) }),
          gJc = y0.ri({
            label: y0.ref(38, NIc),
            eJ: y0.vC(2, "c", "u"),
            Tt: y0.Sj(3),
            Fq: y0.Sj(4),
            Gq: y0.Sj(5),
            bba: y0.Sj(6),
          }),
          hJc = y0.ri({
            aba: y0.Sj(1),
            Tt: y0.Sj(2),
            Gq: y0.Sj(3),
            Fq: y0.Sj(4),
            background: y0.D7a(5, "Fill"),
          }),
          iJc = y0.ri({
            Qi: y0.Sj(4),
            Kj: y0.Sj(5),
            minHeight: y0.Sj(2062),
            minWidth: y0.Sj(2077),
            type: y0.qj(46, "poll", "quiz"),
            id: y0.Wx(35),
            Cs: y0.Wx(45),
            rG: y0.Uz(27),
            direction: y0.vC(44, "l", "r"),
            mia: y0.Uz(30),
            Bba: y0.Mm(2216, "Fill"),
            kca: y0.Mm(2372, "Fill"),
            border: y0.Mm(28, "Stroke"),
            V: y0.Sj(29),
            G_: y0.Uaa(1802),
            nDa: y0.Uaa(9),
            jra: y0.Uaa(52),
            KWa: y0.F7a(34, y0.ri({})),
            title: y0.yoa(36, {
              label: y0.Mm(1, "Richtext2"),
              eJ: y0.Gma(2430, "c", "u"),
            }),
            header: y0.yoa(1, hJc.fields),
            fields: y0.listRef(32, eJc),
            JS: y0.yoa(6, fJc.fields),
            footer: y0.yoa(1705, gJc.fields),
          }),
          jJc = __c.d_({
            type: y0.qj(37, "poll", "quiz"),
            value: y0.ref(48, iJc),
          });
        var A7 = (a, b) => ({
            ...__c.GF,
            stream: $g
              .Jb()
              .attrs({
                ...b,
                "font-kerning": "normal",
                "font-feature-liga": "on",
                "font-feature-clig": "on",
                "font-feature-calt": "on",
              })
              .mb(a)
              .Bq()
              .build(),
          }),
          r7 = (a, b) => Yh.create(A7(a, b)),
          kJc = {
            thin: "thin",
            extralight: "thin",
            light: "thin",
            normal: "extralight",
            medium: "normal",
            semibold: "normal",
            bold: "normal",
            ultrabold: "normal",
            heavy: "normal",
          };
        var lJc = (14 * __c.JT) / 16,
          SHc = { ...hD, Ra: 1 };
        K("1Vvt4w");
        __c.qn();
        K("4qFSiQ");
        K("W5ifXQ");
        K("8qLU3g");
        K("vuVf+w");
        K("7IUw4A");
        K("hblGCQ");
        K("0ICFJA");
        var t7 = __c.Dv.eZa
          ? {
              statusText: "1t7jg8u",
              pvb: "36iimsp",
              rHb: "1a1nvnm",
              label: "32aek6n",
              o_b: "2tk7d5",
              aec: "2n1bnv6",
              E2b: "2na0kmu",
              G3b: "3qf811p",
              F3b: "246bpa8",
              kdc: "3p3qlie",
              p_b: "3tchg28",
            }
          : {};
        var H7 = E7((a) => {
          const { Ed: b, Ee: c, fp: d, errorMessage: e, CM: f, Y8: g = !0 } = a,
            h = c.ek,
            k = b.label.stream.Xo("font-family")["font-family"];
          var l = b.label.stream.Xo("direction").direction;
          const m = g ? "fieldset" : "div",
            n = g ? "legend" : "label";
          l = l.values().next().value ?? "ltr";
          return s7(m, {
            className: "_4ILOcQ",
            onTouchEnd: (p) => {
              p.stopPropagation();
            },
            dir: l,
            children: [
              b.pdb &&
                f7(n, {
                  htmlFor: g ? void 0 : a.Y7,
                  "data-testid": t7.label,
                  style: { paddingBlockEnd: `${b.padding.IBb}px` },
                  children: f7(h, {
                    text: d.required ? TGc(b.label) : b.label,
                  }),
                }),
              a.children,
              e &&
                f7("div", {
                  id: f,
                  className: "o_7gvw",
                  style: { "--wfznTw": b.Kj, "--qMNgbA": b.Qi * 1.5 },
                  role: "alert",
                  children: f7(h, {
                    text: r7(e ?? "", {
                      "font-family": k.values().next().value,
                      direction: l,
                      "font-size": b.qub,
                      color: b.BM,
                      "text-align": "end",
                    }),
                  }),
                }),
            ],
          });
        });
        var mJc = E7((a) => {
          const b = a.Ed,
            c = a.Ee,
            d = a.fp,
            e = a.kC,
            f = a.Ur,
            g = d.FG,
            h = q7(),
            k = __c.z(d.min);
          a = __c.z(d.max);
          x(k >= 1);
          x(a <= 10);
          a = Array.from({ length: a - k + 1 }, (n, p) => ({ TKb: p + k }));
          const l = k7(e, d.QK, b),
            m = q7();
          return f7(H7, {
            Ed: b,
            Ee: c,
            fp: d,
            errorMessage: l,
            CM: m,
            Y8: !0,
            children: f7(ZGc, {
              OEa: b.sizes.Xwa,
              gridGap: b.gridGap,
              children: a.map(({ TKb: n }) => {
                var p = Number(g);
                const q = `${h}-${n}`,
                  r =
                    f !== h7
                      ? void 0
                      : e7(() => {
                          d.wt = String(n);
                          d.Yw = !0;
                        });
                p = p === n;
                return s7(
                  "div",
                  {
                    className: g7(
                      "dAwWRA",
                      f === h7 && !p && "oKt_Cg",
                      (f === i7 || f === j7) && "HLJxlw",
                      p && "kpt6Eg"
                    ),
                    style: {
                      borderRadius: b.V,
                      padding: `${b.padding.Ja}px`,
                      "--dayejg": b.backgroundColor.default,
                      "--1PG0Mg": b.backgroundColor.Pg,
                      "--9P_0YQ": b.backgroundColor.active,
                      "--1y49lg": b.backgroundColor.selected,
                      "---3Rdqg": b.backgroundColor.Vm,
                      "--Cjk51Q": b.accentColor,
                    },
                    onClick: r,
                    children: [
                      f7("input", {
                        "aria-invalid": !!l,
                        "aria-describedby": l ? m : void 0,
                        checked: p,
                        type: "radio",
                        id: q,
                        name: h,
                        value: n,
                        className: "Mh7mQg",
                        onChange: r,
                        disabled: f === j7,
                        readOnly: f === i7,
                      }),
                      f7("label", {
                        htmlFor: q,
                        className: "_1TTelg",
                        children: f7(c.ek, {
                          text: r7(String(n), {
                            "font-family": $f(
                              rg,
                              b.label.stream.hh(0),
                              "font-family"
                            ),
                            color: p ? b.hd.selected : b.hd.default,
                            "text-align": "center",
                            "font-size": b.sizes.n6,
                          }),
                        }),
                      }),
                    ],
                  },
                  n
                );
              }),
            }),
          });
        });
        var nJc = [
            {
              kaa: 1,
              cb: ({ size: a, color: b }) =>
                s7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  width: a,
                  height: a,
                  children: [
                    f7("path", {
                      fill: b,
                      d: "M12 13.25c2.492 0 3.806 1.625 4.545 3.144l.14.301.028.072a.75.75 0 0 1-1.363.606l-.035-.068-.12-.26C14.571 15.762 13.65 14.75 12 14.75c-1.76 0-2.69 1.151-3.314 2.555a.75.75 0 0 1-1.372-.61C8.024 15.1 9.342 13.25 12 13.25ZM9.402 9.548a.749.749 0 1 1 1.196.904c-.449.593-1.655 1.473-3.389 1.269l-.354-.056-.074-.018a.75.75 0 0 1 .287-1.465l.31.047c1.14.135 1.848-.448 2.024-.681Zm4.146-.146a.75.75 0 0 1 1.05.146c.176.233.885.816 2.024.681l.31-.047a.75.75 0 0 1 .287 1.464l-.075.019-.353.056c-1.734.204-2.94-.676-3.389-1.269a.75.75 0 0 1 .146-1.05Z",
                    }),
                    f7("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                      "clip-rule": "evenodd",
                    }),
                  ],
                }),
              label: K("3Spodw"),
            },
            {
              kaa: 2,
              cb: ({ size: a, color: b }) =>
                s7("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: a,
                  height: a,
                  children: [
                    f7("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M12.001 21.802c-5.405 0-9.801-4.397-9.801-9.801S6.596 2.2 12 2.2s9.801 4.396 9.801 9.801-4.397 9.801-9.801 9.801ZM16.188 9.97a1.011 1.011 0 1 1-2.022 0 1.011 1.011 0 0 1 2.022 0Zm-7.363 1.011a1.011 1.011 0 1 0 0-2.022 1.011 1.011 0 0 0 0 2.022ZM3.7 12.001C3.7 7.424 7.424 3.7 12 3.7s8.301 3.724 8.301 8.301-3.724 8.301-8.301 8.301S3.7 16.578 3.7 12.001Z",
                      fill: b,
                    }),
                    f7("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M12.009 14.458c-1.554 0-2.97.817-3.9 2.15a.875.875 0 0 1-1.436-1c1.213-1.74 3.137-2.9 5.336-2.9 2.2 0 4.123 1.16 5.336 2.9a.875.875 0 0 1-1.435 1c-.93-1.333-2.347-2.15-3.901-2.15Z",
                      fill: b,
                    }),
                  ],
                }),
              label: K("bqTQmw"),
            },
            {
              kaa: 3,
              cb: ({ size: a, color: b }) =>
                s7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  width: a,
                  height: a,
                  children: [
                    f7("path", {
                      fill: b,
                      d: "M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h8ZM8.825 8.959a1.012 1.012 0 1 1 0 2.024 1.012 1.012 0 0 1 0-2.024Zm6.352 0a1.012 1.012 0 1 1 0 2.023 1.012 1.012 0 0 1 0-2.023Z",
                    }),
                    f7("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                      "clip-rule": "evenodd",
                    }),
                  ],
                }),
              label: K("k/uS7g"),
            },
            {
              kaa: 4,
              cb: ({ size: a, color: b }) =>
                f7("svg", {
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: a,
                  height: a,
                  children: f7("path", {
                    "fill-rule": "evenodd",
                    fill: b,
                    d: "M12.001 21.802C6.59595 21.802 2.19995 17.405 2.19995 12.001C2.19995 6.59695 6.59595 2.19995 12.001 2.19995C17.406 2.19995 21.802 6.59595 21.802 12.001C21.802 17.406 17.405 21.802 12.001 21.802ZM16.188 9.96995C16.188 10.5283 15.7353 10.981 15.177 10.981C14.6186 10.981 14.166 10.5283 14.166 9.96995C14.166 9.41159 14.6186 8.95895 15.177 8.95895C15.7353 8.95895 16.188 9.41159 16.188 9.96995ZM8.82495 10.981C9.38331 10.981 9.83595 10.5283 9.83595 9.96998C9.83595 9.41162 9.38331 8.95898 8.82495 8.95898C8.26659 8.95898 7.81395 9.41162 7.81395 9.96998C7.81395 10.5283 8.26659 10.981 8.82495 10.981ZM16.235 13.164C14.498 16.944 9.57695 17.018 7.76595 13.259C7.27595 12.242 5.76695 13.13 6.25495 14.142C8.60795 19.026 15.478 18.984 17.747 14.047C18.215 13.029 16.706 12.139 16.235 13.164ZM3.69995 12.001C3.69995 7.42395 7.42395 3.69995 12.001 3.69995C16.578 3.69995 20.302 7.42395 20.302 12.001C20.302 16.578 16.578 20.302 12.001 20.302C7.42395 20.302 3.69995 16.578 3.69995 12.001Z",
                  }),
                }),
              label: K("ssYkyg"),
            },
            {
              kaa: 5,
              cb: ({ size: a, color: b }) =>
                s7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  width: a,
                  height: a,
                  children: [
                    f7("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M17.799 12.277a.752.752 0 0 1 .951.723c0 3.298-3.156 5.75-6.75 5.75S5.25 16.298 5.25 13a.75.75 0 0 1 .951-.723l.005.002.023.006.094.025c.084.021.208.053.366.09.318.076.775.178 1.323.28 1.1.204 2.551.403 3.988.403 1.437 0 2.887-.2 3.988-.403a26.84 26.84 0 0 0 1.689-.37l.093-.025.024-.006.005-.002Zm-1.537 1.877c-1.15.213-2.699.429-4.262.429-1.563 0-3.113-.216-4.262-.429-.31-.057-.594-.116-.842-.17.54 1.804 2.527 3.266 5.104 3.266s4.563-1.462 5.102-3.266c-.247.054-.53.113-.84.17Z",
                      "clip-rule": "evenodd",
                    }),
                    f7("path", {
                      fill: b,
                      d: "M8.55 8.25c.625 0 1.125.166 1.531.444.291.2.51.443.679.664l.154.212.041.065a.75.75 0 0 1-1.223.855l-.046-.06-.119-.161a1.51 1.51 0 0 0-.336-.338c-.14-.097-.34-.181-.681-.181s-.542.084-.682.18c-.157.109-.29.266-.454.5a.75.75 0 0 1-1.228-.86c.186-.266.444-.609.833-.876.405-.278.906-.444 1.53-.444Zm6.9 0c.625 0 1.126.166 1.531.444.291.2.51.443.68.664l.153.212.041.065a.75.75 0 0 1-1.222.855l-.047-.06-.118-.161a1.512 1.512 0 0 0-.336-.338c-.14-.097-.34-.18-.682-.181-.34 0-.541.084-.681.18-.158.109-.29.266-.454.5a.75.75 0 0 1-1.23-.86c.187-.266.446-.609.834-.876.406-.278.906-.444 1.531-.444Z",
                    }),
                    f7("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                      "clip-rule": "evenodd",
                    }),
                  ],
                }),
              label: K("WKDtIg"),
            },
          ],
          oJc = E7((a) => {
            const b = a.Ed,
              c = a.Ee,
              d = a.fp,
              e = a.kC,
              f = a.Ur,
              g = d.FG;
            x(d.min != null && d.min >= 1);
            x(d.max != null && d.max <= 5);
            a = nJc.slice(d.min - 1, d.max);
            const h = k7(e, d.QK, b),
              k = q7(),
              l = q7();
            return f7(H7, {
              Ed: b,
              Ee: c,
              fp: d,
              errorMessage: h,
              CM: k,
              Y8: !0,
              children: f7(ZGc, {
                OEa: b.sizes.Xwa,
                gridGap: b.gridGap,
                children: a.map(({ kaa: m, cb: n, label: p }) => {
                  const q = Number(g),
                    r = g === String(m),
                    t = `${l}-${m}`,
                    v =
                      f === i7 || f === j7
                        ? void 0
                        : e7(() => {
                            d.wt = String(m);
                          });
                  return s7(
                    "div",
                    {
                      className: g7(
                        "r4VAMw",
                        r && "jc6y_A",
                        (f === i7 || f === j7) && "UpIThA",
                        f === h7 && !r && "SMPq5g"
                      ),
                      style: {
                        "--hMlWEg": b.backgroundColor.default,
                        "---127VA": b.backgroundColor.Pg,
                        "--9x4z1A": b.backgroundColor.active,
                        "--W5Lfog": b.backgroundColor.selected,
                        "--GtGNYg": b.backgroundColor.Vm,
                        "--r8_7Tw": b.accentColor,
                        borderRadius: b.V,
                        padding: `${b.padding.Ja}px`,
                      },
                      onClick: v,
                      children: [
                        f7("input", {
                          "aria-invalid": !!h,
                          "aria-describedby": h ? k : void 0,
                          checked: q === m,
                          type: "radio",
                          id: t,
                          name: l,
                          value: m,
                          className: "Mh7mQg",
                          onChange: v,
                          disabled: f === j7,
                          readOnly: f === i7,
                        }),
                        f7("label", {
                          htmlFor: t,
                          className: "Mh7mQg",
                          children: f7("span", { children: p }),
                        }),
                        f7("div", {
                          className: "aOiRWQ",
                          style: { width: b.sizes.Qc, height: b.sizes.Qc },
                          children: f7(n, {
                            size: b.sizes.Qc,
                            color: r ? b.K_.selected : b.K_.default,
                          }),
                        }),
                      ],
                    },
                    m
                  );
                }),
              }),
            });
          });
        var o7 = ["#000000", "#ffffff"];
        var pJc = E7((a) => {
          const b = a.Ed,
            c = a.Ee,
            d = a.fp,
            e = a.Ur;
          var f = a.kC;
          a = d.FG;
          const g = c.dfa,
            h = !!d.QK,
            k = q7(),
            l = p7(
              () =>
                h
                  ? {
                      default: b.borderColor.error,
                      Pg: b.borderColor.error,
                      focus: b.borderColor.error,
                    }
                  : e === h7 || e === I7
                  ? {
                      default: b.borderColor.default,
                      Pg: b.borderColor.Pg,
                      focus: b.borderColor.focus,
                    }
                  : {
                      default: b.borderColor.default,
                      Pg: b.borderColor.default,
                      focus: b.borderColor.default,
                    },
              [
                b.borderColor.default,
                b.borderColor.error,
                b.borderColor.focus,
                b.borderColor.Pg,
                e,
                h,
              ]
            ),
            m = b.label.stream.hh(0),
            n = kJc[$f(rg, m, "font-weight")];
          f = k7(f, d.QK, b);
          const p = q7();
          return f7(H7, {
            Ed: b,
            Ee: c,
            fp: d,
            errorMessage: f,
            CM: k,
            Y8: !1,
            Y7: p,
            children: s7("div", {
              className: "ybpBnQ",
              children: [
                f7(g, {
                  boxSizing: "border-box",
                  id: p,
                  type: "text",
                  inputMode: "numeric",
                  SBa: $f(rg, m, "font-family"),
                  fontSize: `${b.sizes.n6}px`,
                  oj: b.hd,
                  fontWeight: n,
                  value: a ?? "",
                  name: b.id,
                  backgroundColor: "transparent",
                  borderStyle: "solid",
                  outline: "none",
                  borderWidth: b.sizes.Cwa,
                  Awa: l,
                  borderRadius: b.V,
                  ariaInvalid: h,
                  paddingInlineEnd: h ? b.sizes.Qc * 1.5 : void 0,
                  Fc: h ? k : void 0,
                  onChange: e7((q) => {
                    d.wt = q.target.value;
                  }),
                  onBlur: e7(() => {
                    d.Yw = !0;
                  }),
                  padding: b.padding.Ja,
                  readOnly: e === i7,
                  disabled: e === j7,
                  width: "100%",
                }),
                h &&
                  f7("div", {
                    className: "_3v99oA",
                    style: { "--3tgqzg": `${b.sizes.Qc * 0.4}px` },
                    children: f7(bHc, { size: b.sizes.Qc }),
                  }),
              ],
            }),
          });
        });
        var gHc = 10 / 14,
          qJc = E7((a) => {
            const b = a.Ed,
              c = a.Ee,
              d = a.fp,
              e = a.Ur,
              f = a.aDa;
            a = a.kC;
            const g = b.options,
              { FG: h = [], feedback: k } = d,
              l = q7(),
              m = q7(),
              n = w7(() => k.get()?.eM),
              p = w7(() => k.get()?.vIb),
              q = k7(a, d.QK, b),
              r = e === h7 || e === I7;
            return f7(H7, {
              Ed: b,
              Ee: c,
              fp: d,
              errorMessage: q,
              CM: l,
              children: f7("div", {
                className: "iaCeXQ",
                style: { gridGap: `${b.rowGap}px` },
                children: g.map((t) => {
                  var v = h.includes(t.id);
                  const w = {
                    tqa: b.tqa,
                    avb: `select-${m}`,
                    V: b.V,
                    label: t.label,
                    background: b.Vz,
                    ki: v,
                    Bkb: c.ek,
                    CM: q ? l : void 0,
                    fHb: b.padding.Ja,
                    Sob: b.sizes.Kob,
                    Tob: b.sizes.Mob,
                    Dxa: b.sizes.Dxa,
                    Qc: b.sizes.Qc,
                    Ur: e,
                  };
                  switch (b.type) {
                    case 1:
                      var y = p.get();
                      y = y
                        ? Math.round(
                            (100 * (y.sbc.get(t.id) ?? 0)) / (y.total || 1)
                          )
                        : void 0;
                      return fIc(eHc, {
                        ...w,
                        key: t.id,
                        backgroundColor: {
                          default: y != null ? b.wOa.track : b.Vz.default,
                          Pg: b.Vz.Pg,
                          active: b.Vz.active,
                          selected: y != null ? b.sPa.track : b.Vz.selected,
                        },
                        SEa: v ? b.wC.selected : r ? void 0 : b.wC.Vm,
                        K_: v ? b.wC.selected : b.wC.default,
                        uIa:
                          y != null
                            ? {
                                value: y,
                                jnb: v ? b.sPa.EL : b.wOa.EL,
                                hd: v ? b.sPa.text : b.wOa.text,
                              }
                            : void 0,
                        onChange: e7(() => {
                          d.pNa(t.id);
                          d.Yw = !0;
                          f?.();
                        }),
                      });
                    case 2:
                      return (
                        (v = n.get()),
                        (v =
                          v == null
                            ? 0
                            : v.includes(t.id)
                            ? w.ki
                              ? 4
                              : 2
                            : w.ki
                            ? 3
                            : 1),
                        fIc(fHc, {
                          ...w,
                          key: t.id,
                          Vz: b.Vz,
                          wC: b.wC,
                          vub: v,
                          onChange: e7(() => {
                            d.pNa(t.id);
                            d.Yw = !0;
                          }),
                        })
                      );
                    case 3:
                      return fIc(eHc, {
                        ...w,
                        key: t.id,
                        onChange: e7(() => {
                          d.pNa(t.id);
                          d.Yw = !0;
                        }),
                        K_: v ? b.wC.selected : b.wC.default,
                        SEa: v ? b.wC.selected : r ? void 0 : b.wC.Vm,
                        backgroundColor: {
                          default: b.Vz.default,
                          selected: b.Vz.selected,
                          Pg: b.Vz.Pg,
                          active: b.Vz.active,
                        },
                      });
                    default:
                      throw new A(b);
                  }
                }),
              }),
            });
          }),
          cHc = (a) =>
            f7("div", {
              id: a.id,
              className: "_5MHe6g",
              "aria-label": K("i3mNPA"),
              children: s7("svg", {
                width: a.size,
                height: a.size,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "gBYSAw",
                children: [
                  f7("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "white",
                  }),
                  f7("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "#00873D",
                  }),
                  f7("path", {
                    d: "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z",
                    fill: "white",
                  }),
                ],
              }),
            }),
          dHc = (a) =>
            f7("div", {
              id: a.id,
              className: "_5MHe6g",
              "aria-label": K("As1GTA"),
              children: s7("svg", {
                width: a.size,
                height: a.size,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "gBYSAw",
                children: [
                  f7("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "white",
                  }),
                  f7("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "#C8001E",
                  }),
                  f7("path", {
                    d: "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                    fill: "white",
                  }),
                ],
              }),
            });
        var sJc = E7((a) => {
            const b = a.Ed,
              c = a.Ee,
              d = a.fp,
              e = a.kC,
              f = a.Ur,
              g = d.N3.ok ? d.N3.value : void 0,
              h = q7(),
              k = q7(),
              [l, m] = l7(null);
            x(d.min != null && d.min >= 1);
            x(d.max != null && d.max <= 10);
            const n = k7(e, d.QK, b),
              p = f === h7,
              q = f === h7 || f === I7;
            return f7(H7, {
              Ed: b,
              Ee: c,
              fp: d,
              errorMessage: n,
              CM: k,
              Y8: !0,
              children: f7(ZGc, {
                OEa: b.Qc,
                gridGap: 0,
                children: Array.from({ length: d.max }, (r, t) => {
                  const v = t + 1;
                  r = lHc(v, g, l);
                  t = p
                    ? e7(() => {
                        d.wt = v === g ? "" : String(v);
                        d.Yw = !0;
                      })
                    : void 0;
                  return s7(
                    "label",
                    {
                      className: g7("Rw_cTw", !q && "g0Fw6w"),
                      style: { "--4yIcLg": b.accentColor },
                      onMouseEnter: p ? () => m(v) : void 0,
                      onMouseLeave: p ? () => m(null) : void 0,
                      children: [
                        f7("input", {
                          "aria-invalid": !!n,
                          "aria-describedby": n ? k : void 0,
                          checked: g === v,
                          type: "radio",
                          name: h,
                          value: v,
                          "aria-label": ub("1aqRWg", [v]),
                          className: "Mh7mQg",
                          onClick: t,
                          onChange: rJc,
                          disabled: f === j7,
                          readOnly: f === i7,
                        }),
                        r != null
                          ? f7(jHc, {
                              size: b.Qc,
                              color: q
                                ? r === "hover"
                                  ? b.fillColor.Pg
                                  : b.fillColor.selected
                                : b.fillColor.Vm,
                            })
                          : f7(kHc, {
                              size: b.Qc,
                              color: q
                                ? b.borderColor.default
                                : b.borderColor.Vm,
                            }),
                      ],
                    },
                    v
                  );
                }),
              }),
            });
          }),
          rJc = () => {};
        var tJc = E7((a) => {
          const b = a.Ed,
            c = a.Ee,
            d = a.fp,
            e = a.Ur;
          var f = a.kC;
          a = d.FG;
          const g = c.dfa,
            h = c.yua,
            k = !!d.QK,
            l = q7(),
            m = e === h7 || e === I7;
          var n = p7(
            () =>
              k
                ? {
                    default: b.borderColor.error,
                    Pg: b.borderColor.error,
                    focus: b.borderColor.error,
                  }
                : m
                ? {
                    default: b.borderColor.default,
                    Pg: b.borderColor.Pg,
                    focus: b.borderColor.focus,
                  }
                : {
                    default: b.borderColor.default,
                    Pg: b.borderColor.default,
                    focus: b.borderColor.default,
                  },
            [
              b.borderColor.default,
              b.borderColor.error,
              b.borderColor.focus,
              b.borderColor.Pg,
              m,
              k,
            ]
          );
          const p = b.label.stream.hh(0),
            q = kJc[$f(rg, p, "font-weight")],
            r = q7();
          n = {
            boxSizing: "border-box",
            SBa: $f(rg, p, "font-family"),
            fontSize: `${b.sizes.n6}px`,
            oj: m ? b.hd.default : b.hd.Vm,
            fontWeight: q,
            padding: b.padding.Ja,
            paddingInlineEnd: k ? b.sizes.Qc * 1.5 : void 0,
            c9a: b.placeholder.color,
            width: "100%",
            Awa: n,
            backgroundColor: "transparent",
            borderStyle: "solid",
            outline: "none",
            borderRadius: b.V,
            borderWidth: b.sizes.Cwa,
            ariaInvalid: k,
            Fc: k ? l : void 0,
          };
          f = k7(f, d.QK, b);
          return f7(H7, {
            Ed: b,
            Ee: c,
            fp: d,
            errorMessage: f,
            CM: l,
            Y8: !1,
            Y7: r,
            children: s7("div", {
              className: "DsSAig",
              children: [
                b.ZN > 1
                  ? f7(h, {
                      ...n,
                      rows: b.ZN,
                      id: r,
                      name: b.id,
                      placeholder: b.placeholder.text,
                      disabled: e === j7,
                      readOnly: e === i7,
                      onBlur: e7(() => {
                        d.Yw = !0;
                      }),
                      onChange: e7((t) => {
                        d.wt = t.target.value;
                      }),
                      resize: "none",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      value: a ?? "",
                    })
                  : f7(g, {
                      ...n,
                      type: mHc(b.variant),
                      id: r,
                      name: b.id,
                      disabled: e === j7,
                      readOnly: e === i7,
                      onChange: e7((t) => {
                        d.wt = t.target.value;
                      }),
                      onBlur: e7(() => {
                        d.Yw = !0;
                      }),
                      value: a ?? "",
                      placeholder: b.placeholder.text,
                    }),
                k &&
                  f7("div", {
                    className: g7("Xz8a5Q", b.ZN > 1 && "XsCoFw"),
                    style: { "--ozZJmw": `${b.sizes.Qc * 0.4}px` },
                    children: f7(bHc, { size: b.sizes.Qc }),
                  }),
              ],
            }),
          });
        });
        var uJc = E7((a) => {
          const b = a.messages,
            c = a.footer;
          var d = a.ewb,
            e = nHc(a.aI, b, a.cxb, a.UMb);
          d = {
            "font-family": d.fontFamily,
            "font-size": c.$pb,
            "text-align": "center",
            direction: SGc(d.direction),
            "font-kerning": "normal",
            "font-feature-liga": "on",
            "font-feature-clig": "on",
            "font-feature-calt": "on",
          };
          var f = $g.Jb().attrs(d);
          f.attrs({ color: c.hd }).mb(e).Bq();
          e = Yh.create({ stream: f.build(), Rb: new Map() });
          f = window.location.origin;
          u(!0);
          const g =
            f +
            __c.OA(
              __c.NA(
                new __c.rOa("/form-data-processing"),
                "formUrl",
                window.location.href
              )
            );
          return s7("footer", {
            children: [
              f7("div", {
                "data-testid": t7.statusText,
                children: f7(a.ek, { text: e }),
              }),
              a.footer.lyb &&
                a.aI !== 2 &&
                f7("div", {
                  className: "_4x6reg",
                  children: f7("a", {
                    onClick: (h) => {
                      a.Eh &&
                        (a.Eh.Bna(new __c.lx({ uri: g, target: 1 })),
                        h.preventDefault());
                    },
                    href: g,
                    target: "_blank",
                    onTouchEnd: (h) => {
                      h.stopPropagation();
                    },
                    children: f7(a.ek, {
                      text: Yh.create({
                        stream: $g
                          .Jb()
                          .attrs(d)
                          .attrs({ color: c.hd, decoration: "underline" })
                          .mb(b.wIa())
                          .Bq()
                          .build(),
                        Rb: new Map(),
                      }),
                    }),
                  }),
                }),
            ],
          });
        });
        var vJc = E7((a) => {
          const b = a.header,
            c = a.Ee;
          return s7("div", {
            className: "FnpX4Q",
            style: {
              paddingInlineStart: `${b.padding.ta}px`,
              paddingInlineEnd: `${b.padding.Na}px`,
              paddingBlockStart: `${b.padding.ma}px`,
              paddingBlockEnd: `${b.padding.ya}px`,
            },
            id: a.oyb,
            children: [
              b.background &&
                f7("div", {
                  className: "n9ICbQ",
                  children: f7(c.cn, { fill: b.background }),
                }),
              f7("div", {
                role: "heading",
                "aria-level": 1,
                children: f7(c.ek, { text: b.label }),
              }),
            ],
          });
        });
        var h7 = 0,
          I7 = 1,
          i7 = 2,
          j7 = 3,
          wJc = E7(function (a) {
            const b = a.state,
              c = a.mk,
              d = a.aCa,
              e = a.ilb;
            a = a.Eh;
            const f = b.theme,
              g = b.header,
              h = b.fields,
              k = b.gH,
              l = f.background,
              m = f.V,
              n = f.border,
              p = e.ek,
              q = e.cn,
              [r] = l7(() => C7.box(c));
            gIc(() => {
              x7(() => {
                r.set(c);
              });
            }, [r, c]);
            const [t] = l7(
                () =>
                  new LIc({
                    get language() {
                      return r.get();
                    },
                  })
              ),
              v = p7(() => hIc((E) => f7(p, { text: E })), [p]),
              w = u7(d, "p"),
              y =
                d.aI === 6 || (d.aI === 7 && !w)
                  ? 2
                  : d.aI === 5
                  ? 1
                  : d.kSa
                  ? 0
                  : 3,
              B = d.gp ? null : oHc(CHc(d), b.footer, f, t, v),
              C = !!k && (d.gp || !B),
              D = q7();
            return s7("div", {
              "aria-labelledby": D,
              role: "form",
              className: "_9sCIzQ",
              style: {
                borderRadius: m,
                border: `${n.weight}px solid ${n.color}`,
              },
              children: [
                f7("div", {
                  className: "wNGpBA",
                  children: f7(q, { fill: l }),
                }),
                s7("div", {
                  className: "_6i3kwQ",
                  children: [
                    g && f7(vJc, { header: g, oyb: D, Ee: e }),
                    f7("div", {
                      className: "xIuERA",
                      role: "group",
                      style: {
                        rowGap: b.Z7.rowGap,
                        paddingBlockStart: `${b.Z7.ma}px`,
                        paddingInlineStart: `${b.Z7.ta}px`,
                        paddingBlockEnd: `${b.Z7.ya}px`,
                        paddingInlineEnd: `${b.Z7.Na}px`,
                      },
                      children: h.map((E) =>
                        f7(
                          "div",
                          {
                            className: g7(
                              "_6i3kwQ",
                              "wNH5Fw",
                              !!(
                                E.type === 4 ||
                                (E.type === 5 && E.variant === 3) ||
                                (E.type === 5 && E.variant === 1)
                              ) && "Od1Udw"
                            ),
                            children: (() => {
                              switch (E.type) {
                                case 4:
                                  return f7(tJc, {
                                    Ed: E,
                                    Ee: e,
                                    fp: v7(d, E.id, "text"),
                                    kC: t,
                                    Ur: y,
                                  });
                                case 5:
                                  switch (E.variant) {
                                    case 1:
                                      return f7(pJc, {
                                        Ed: E,
                                        Ee: e,
                                        fp: v7(d, E.id, "number"),
                                        kC: t,
                                        Ur: y,
                                      });
                                    case 2:
                                      return f7(oJc, {
                                        Ed: E,
                                        Ee: e,
                                        fp: v7(d, E.id, "number"),
                                        kC: t,
                                        Ur: y,
                                      });
                                    case 4:
                                      return f7(mJc, {
                                        Ed: E,
                                        Ee: e,
                                        fp: v7(d, E.id, "number"),
                                        kC: t,
                                        Ur: y,
                                      });
                                    case 3:
                                      return f7(sJc, {
                                        Ed: E,
                                        Ee: e,
                                        fp: v7(d, E.id, "number"),
                                        kC: t,
                                        Ur: y,
                                      });
                                    default:
                                      throw new A(E);
                                  }
                                case 1:
                                case 2:
                                case 3:
                                  return f7(qJc, {
                                    Ed: E,
                                    Ee: e,
                                    fp: v7(d, E.id, "select"),
                                    kC: t,
                                    aDa: w ? () => d.aDa(E.id) : void 0,
                                    Ur: y,
                                  });
                                default:
                                  throw new A(E);
                              }
                            })(),
                          },
                          E.id
                        )
                      ),
                    }),
                    s7("div", {
                      className: g7("WwpS_Q"),
                      style: {
                        paddingInlineStart: `${b.h_.ta}px`,
                        paddingInlineEnd: `${b.h_.Na}px`,
                        paddingBlockEnd: `${b.h_.ya}px`,
                      },
                      children: [
                        C &&
                          f7(RGc, {
                            label: v(k.label),
                            Gga: k.backgroundColor,
                            Ur: y,
                            onClick: e7(() => d.submit()),
                            padding: k.padding,
                          }),
                        B &&
                          f7("div", {
                            style: {
                              paddingBlockStart: `${b.h_.lJb}px`,
                              paddingBlockEnd: `${b.h_.kJb}px`,
                            },
                            children: B,
                          }),
                        f7("div", {
                          style: { paddingBlockStart: `${b.h_.bEb}px` },
                          children: f7(uJc, {
                            footer: b.footer,
                            aI: d.aI,
                            messages: t,
                            cxb: () => {
                              var E = u7(d, "p")
                                ? d.u0
                                    .get()
                                    ?.fields.get(d.form.fields.first().id ?? "")
                                    ?.total ?? 0
                                : void 0;
                              return E;
                            },
                            ewb: f,
                            ek: e.ek,
                            Eh: a,
                            UMb: pHc(h),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
          iHc = (a, b) => {
            const c = a.stream.zn(0);
            a = {
              ...__c.GF,
              stream: $g
                .Jb()
                .attrs({ ...c, color: b })
                .mb(a.stream.Z)
                .build(),
            };
            return Yh.create(a);
          };
        var xJc = {
          ie: "form_widget_interacted",
          zf(a) {
            return __c.Sn({
              form_id: a.i_,
              form_type: a.bCa,
              action_group: a.zu,
              action: a.action,
              location: a.location,
              linked_design_id: a.h5b,
              toggle_value: a.BK,
              editing_context: a.Cd == null ? void 0 : __c.Tn(a.Cd),
              performance_context: a.ae == null ? void 0 : __c.Un(a.ae),
              question_type: a.Gcc,
            });
          },
        };
        var J7 = class {
          static G(a) {
            L(a, { O3: w7, Yw: C7.ref, N3: w7, jSa: w7, Obb: w7, QK: w7 });
          }
          reset() {
            this.Yw = !1;
            this.wt = this.empty;
          }
          get O3() {}
          get FG() {
            return this.context.mode === "edit" ? this.empty : this.wt;
          }
          get N3() {
            if (this.isEmpty())
              return this.required ? Ca({ GE: "required" }) : (0, __c.Ba)();
            const a = this.cKa(this.FG);
            if (a.ok) {
              const b = this.jSa(a.value);
              if (b.state === "invalid") return Ca(b.error);
            }
            return a;
          }
          get jSa() {
            const a = this.O3?.filter((b) => !!b);
            return a?.length ? LGc(a) : Pp;
          }
          get Obb() {
            return this.N3.map(() =>
              this.isEmpty() ? void 0 : this.Ga(this.FG)
            );
          }
          get QK() {
            return this.Yw && !this.N3.ok && this.context.mode === "interact"
              ? this.N3.error
              : void 0;
          }
          get required() {
            return !!this.Ed.required;
          }
          isEmpty() {
            const a = this.FG;
            return a.length === 0
              ? !0
              : typeof a === "string"
              ? (a != null && a.trim().length > 0 ? Pp() : Qp()).state ===
                "invalid"
              : !1;
          }
          constructor(a, b, c) {
            this.Ed = a;
            this.context = b;
            this.feedback = c;
            this.Yw = (J7.G(this), !1);
            z7(
              () => NGc(this.context.zma),
              (d) => {
                d &&
                  ((this.wt = (d = d.tmb.get(this.Ed.id ?? ""))
                    ? this.za(d)
                    : this.empty),
                  (this.Yw = !1));
              }
            );
          }
        };
        var yJc = /^\s*-?(?:\d+[, ])*(?:\d*\.)?\d*\s*$/,
          zJc = /[\s,]+/g,
          AHc = class extends J7 {
            static G(a) {
              L(a, { wt: C7.ref });
            }
            get min() {
              return this.Ed.min;
            }
            get max() {
              return this.Ed.max;
            }
            get O3() {
              return [vHc({ min: this.Ed.min, max: this.Ed.max })];
            }
            cKa(a) {
              return a.length <= 50 &&
                yJc.test(a) &&
                ((a = a.replace(zJc, "")),
                (a = Number(a)),
                !isNaN(a) && isFinite(a))
                ? (0, __c.Ba)(a)
                : Ca({ GE: "invalid_format" });
            }
            Ga(a) {
              return {
                type: 2,
                Y7: this.Ed.id ?? "",
                vn: this.Ed.label.text.stream.Z,
                value: a,
              };
            }
            za(a) {
              return uHc(a).ET;
            }
            constructor(...a) {
              super(...a);
              this.type = (AHc.G(this), "number");
              this.wt = this.empty = "";
            }
          };
        var yHc = class extends J7 {
          static G(a) {
            L(a, {
              wt: C7.ref,
              H7a: w7({ equals: QHc.shallow }),
              O3: w7,
              PHa: w7,
            });
          }
          get H7a() {
            return new Set(this.Ed.options.map(({ id: a }) => a ?? ""));
          }
          get O3() {
            return [wHc({ max: xHc(this.Ed.H0) })];
          }
          cKa(a) {
            return a.every((b) => this.H7a.has(b))
              ? (0, __c.Ba)(a.slice())
              : Ca({ GE: "unknown_option_id" });
          }
          Ga(a) {
            return {
              type: 0,
              Y7: this.Ed.id ?? "",
              vn: this.Ed.label.text.stream.Z,
              sKa: a,
              options: this.PHa,
            };
          }
          za(a) {
            return tHc(a, this.PHa).ET;
          }
          get PHa() {
            return this.Ed.options.map((a) => ({
              id: a.id ?? "",
              label: a.label.text.stream.Z,
            }));
          }
          constructor(...a) {
            super(...a);
            this.type = (yHc.G(this), "select");
            this.empty = [];
            this.wt = [];
            this.pNa = (b) => {
              const c = this.FG;
              this.wt = c?.includes(b)
                ? c.filter((d) => d !== b)
                : xHc(this.Ed.H0) > 1 && c?.length
                ? [...c, b]
                : [b];
            };
          }
        };
        var zHc = class extends J7 {
          static G(a) {
            L(a, { wt: C7.ref });
          }
          get O3() {
            const a = uc("b9892c2d", 500);
            return [
              a != null ? wHc({ min: 0, max: a }) : void 0,
              this.Ed.variant.type === "e"
                ? KGc(__c.kLb, { GE: "invalid_email" })
                : void 0,
            ];
          }
          cKa(a) {
            return (0, __c.Ba)(a.trim());
          }
          Ga(a) {
            return {
              type: 1,
              Y7: this.Ed.id ?? "",
              vn: this.Ed.label.text.stream.Z,
              value: a,
            };
          }
          za(a) {
            return uHc(a).ET;
          }
          constructor(...a) {
            super(...a);
            this.type = (zHc.G(this), "text");
            this.wt = this.empty = "";
          }
        };
        var AJc = class {
          static G(a) {
            L(a, { zma: w7, UY: w7 });
          }
          get zma() {
            if (!this.MM || !this.Mr) return { status: 1, data: void 0 };
            const a = this.Mr.getSettings(this.formData.rG);
            switch (a.status) {
              case 2:
              case 3:
                return a;
              default:
                return PHc(this.MM, {
                  Cs: this.formData.Cs,
                  submitter: a.data.MMa,
                });
            }
          }
          get UY() {
            if (!this.Mr) return b3();
            const a = this.Mr.getSettings(this.formData.rG);
            return MGc(a, {
              SO: (b) => ({ Cs: this.formData.Cs, submitter: b.MMa }),
            });
          }
          get mode() {
            return this.$Ba.get()?.getContext(this.formData.id)
              ? "edit"
              : "interact";
          }
          constructor(a, b, c, d) {
            this.formData = a;
            this.Mr = b;
            this.MM = c;
            this.$Ba = d;
            AJc.G(this);
          }
        };
        var GHc = Symbol(),
          BJc = class {
            static G(a) {
              L(a, {
                QT: C7.ref,
                AN: C7.ref,
                eM: w7,
                CBa: w7({ equals: QHc.structural }),
                tP: w7,
                aI: w7,
                kSa: w7,
              });
            }
            get eM() {
              const a = this.Mr?.getSettings(this.form.rG);
              return a?.status === 1 ? a.data.eM : void 0;
            }
            get CBa() {
              var a = NGc(this.context.zma);
              if (a) {
                {
                  var b = this.AN;
                  a = a != null ? this.u0.get() : void 0;
                  var c = this.eM;
                  b = b?.ok ? b.value.bvb : b?.error.bvb;
                  const g = new Map();
                  if (b?.size || a?.fields?.size || c?.size) {
                    var d = new Set([
                      ...(b?.keys() || []),
                      ...(a?.fields.keys() || []),
                      ...(c?.keys() || []),
                    ]);
                    for (f of d) {
                      d = b?.get(f)?.feedback;
                      var e = a?.fields.get(f);
                      e = e ? { vIb: e } : void 0;
                      const h = c?.get(f);
                      d = { ...d, ...e, ...(h ? { eM: h } : void 0) };
                      Object.keys(d).length > 0 && g.set(f, d);
                    }
                  }
                  var f = g;
                }
              } else f = new Map();
              return f;
            }
            get tP() {
              return this.QT
                ? 2
                : d7(this.context.zma, {
                    SO: (a) => (a == null ? 1 : 3),
                    loading: () => 4,
                    error: () => 1,
                  });
            }
            get aI() {
              return this.ab?.status === 2
                ? 2
                : this.uI && this.Mr && this.MM
                ? this.tP === 2
                  ? 6
                  : this.tP === 3
                  ? 7
                  : this.tP === 4
                  ? 3
                  : d7(this.context.UY, {
                      SO: ({ submitter: a }) => (a?.type === "USER" ? 0 : 1),
                      loading: () => 3,
                      error: () => 4,
                    })
                : 5;
            }
            get kSa() {
              if (!this.uI || this.context.mode !== "interact") return !1;
              switch (this.aI) {
                case 1:
                case 0:
                  return !0;
                case 7:
                  return u7(this, "p");
                default:
                  return !1;
              }
            }
            get gp() {
              return this.context.mode === "edit";
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.form = a;
              this.uI = b;
              this.Mr = c;
              this.MM = d;
              this.$Ba = e;
              this.ab = f;
              this.ka = g;
              this.Fg = h;
              this.DBa = (BJc.G(this), new Map());
              this.QT = !1;
              this.u0 = C7.box();
              this.submit = aIc(function* () {
                const k = this.uI,
                  l = this.MM;
                var m = this.context;
                const n = this.ka;
                var p = this.form.fields;
                const q = this.form.rG,
                  r = this.form.Cs,
                  t = this.form.id,
                  v = this.form.type;
                var w =
                  (this.tP === 1 || (u7(this, "p") && this.tP === 3)) &&
                  this.context.mode === "interact";
                if (k && w && l && m.UY.status === 1) {
                  w = !0;
                  m = m.UY.data;
                  var y = [];
                  for (const C of p)
                    (p = v7(this, C.id ?? "")),
                      (p.Yw = !0),
                      (p = p.Obb),
                      p.ok ? w && p.value != null && y.push(p.value) : (w = !1);
                  if (w)
                    if (y.length === 0) this.AN = Ca({ GE: 5, X$a: !1 });
                    else {
                      this.QT = !0;
                      try {
                        const C = yield k.C5b({ rG: q, Cs: r, tmb: y });
                        this.AN = JHc(C);
                        if (C.ok) {
                          var B = C.value.Xec;
                          const D = y7(m);
                          l.eda.set(D, B);
                          l.zT.set(D, "initialized");
                          n?.track(xJc, {
                            i_: t,
                            bCa: v,
                            zu: "interacted",
                            action: "form_submitted",
                            location: "in_form",
                          });
                        }
                      } finally {
                        this.QT = !1;
                      }
                    }
                  else this.AN = Ca({ GE: 6, X$a: !1 });
                  this.AN.ok || HHc(this, this.AN.error);
                }
              });
              this.Nba = aIc(function* () {
                const k = this.uI,
                  l = this.MM,
                  m = this.context,
                  n = this.form.Cs,
                  p =
                    (this.tP === 1 || (u7(this, "p") && this.tP === 3)) &&
                    this.context.mode === "interact";
                if (k && p && l && m.UY.status === 1) {
                  this.QT = !0;
                  try {
                    (yield k.Nba({ Cs: n })).ok
                      ? (this.ka?.track(xJc, {
                          i_: this.form.id,
                          bCa: "poll",
                          zu: "interacted",
                          action: "response_unsubmitted",
                          location: "in_form",
                        }),
                        l.Nba(m.UY.data),
                        (this.AN = void 0))
                      : this.Fg?.OD({
                          CF: K("kgHTHw"),
                          group: GHc,
                          gH: {
                            PL: K("mQhziQ"),
                            onClick: e7(() => this.Nba()),
                          },
                        });
                  } finally {
                    this.QT = !1;
                  }
                }
              });
              this.aDa = aIc(function* (k) {
                v7(this, k, "select").isEmpty()
                  ? (this.ka?.track(xJc, {
                      i_: this.form.id,
                      bCa: "poll",
                      zu: "interacted",
                      action: "response_unsubmitted",
                      location: "in_form",
                    }),
                    yield this.Nba())
                  : yield this.submit();
              });
              z7(
                () => a.Cs,
                () => {
                  this.AN = void 0;
                  this.u0.set(void 0);
                  u7(this, "p") && IHc(this);
                }
              );
              this.context = new AJc(a, c, d, e);
              FHc(this);
            }
          };
        var K7 = Object.freeze({
          Qi: 16,
          Kj: 16,
          h2b: 1.5625,
          JS: { Gq: 1.25, Fq: 1.25, Tt: 1 },
          footer: {
            EHb: 0.625,
            FHb: 1.25,
            Gq: 1.25,
            Fq: 1.25,
            bba: 0.5,
            Bbc: 0.5,
            Abc: 1.25,
          },
          header: { aba: 1.25, Tt: 1, Gq: 1.25, Fq: 1.25 },
        });
        var KHc = ["#cccccc", "#333333"];
        var CJc = uc("4073adf", !1),
          NHc = class {
            get header() {
              if (!this.Ua.G_) return new DJc(this.formData, this.Ua);
            }
            get fields() {
              const a = this.formData.type;
              return this.formData.fields.map((b) => {
                switch (b.type) {
                  case "select":
                    switch (b.variant?.type) {
                      case "p":
                        return new EJc(b, this.Ua);
                      case "q":
                        return new FJc(b, this.Ua);
                      case void 0:
                        switch (a) {
                          case "quiz":
                            return new FJc(b, this.Ua);
                          case "poll":
                            return new EJc(b, this.Ua);
                          default:
                            throw new A(a);
                        }
                      case "r":
                        return new GJc(b, this.Ua);
                      default:
                        throw new A(b.variant);
                    }
                  case "text":
                    switch (b.variant.type) {
                      case "f":
                        return new HJc(b, this.Ua);
                      case "e":
                        return new IJc(b, this.Ua);
                      default:
                        throw new A(b.variant);
                    }
                  case "number":
                    switch (b.variant.type) {
                      case "a":
                        return new JJc(b, this.Ua);
                      case "b":
                        return new KJc(b, this.Ua);
                      case "c":
                        return new LJc(b, this.Ua);
                      case "d":
                        return new MJc(b, this.Ua);
                      default:
                        throw new A(b.variant);
                    }
                  default:
                    throw new A(b);
                }
              });
            }
            get gH() {
              if (
                (this.fields.length !== 1 || this.fields[0].type !== 1) &&
                this.formData.footer.ref
              )
                return {
                  backgroundColor: {
                    default: this.Ua.Aa.accentColor,
                    Pg: this.Ua.Aa.Olb,
                    active: this.Ua.Aa.Nlb,
                    Vm: this.Ua.Aa.Qlb,
                  },
                  label: this.formData.footer.ref?.label.text,
                  padding: {
                    ma: this.Ua.Kj * 0.64,
                    ya: this.Ua.Kj * 0.64,
                    ta: this.Ua.Kj * 0.64,
                    Na: this.Ua.Kj * 0.64,
                  },
                };
            }
            get If() {
              return MGc(this.Ua.If, { SO: (a) => ({ submitter: a.MMa }) });
            }
            get footer() {
              const a =
                  CJc &&
                  d7(this.Ua.If, { SO: (c) => !!c.cdc, default: () => !1 }),
                b = this.Ua.Qi;
              return {
                ryb: b * lJc,
                $pb: b * 0.625,
                lyb: a,
                hd: this.Ua.Aa.ETa,
              };
            }
            get Z7() {
              const a = this.Ua.Kj,
                b = this.formData.JS?.ref;
              return {
                ma: a * 1,
                ta: a * (b?.Gq ?? K7.JS.Gq),
                Na: a * (b?.Fq ?? K7.JS.Fq),
                ya: a * (b?.Tt ?? K7.JS.Tt),
                rowGap: a * 2,
              };
            }
            get h_() {
              const a = !!this.gH,
                b = this.Ua.Kj;
              return {
                ya:
                  b *
                  (this.formData.footer.ref?.Tt ??
                    (a ? K7.footer.EHb : K7.footer.FHb)),
                ta: b * (this.formData.footer.ref?.Gq ?? K7.footer.Gq),
                Na: b * (this.formData.footer.ref?.Fq ?? K7.footer.Fq),
                bEb:
                  b *
                  (this.formData.footer.ref?.bba ?? (a ? K7.footer.bba : 0)),
                lJb: b * 0.64,
                kJb: b * 0.64,
              };
            }
            constructor(a, b) {
              this.formData = a;
              this.Ua = new NJc(a, b);
              this.theme = new OJc(a, this.Ua);
            }
          },
          NJc = class {
            static G(a) {
              L(a, { Aa: w7 });
            }
            get Aa() {
              return LHc(
                this.EO,
                this.nqa,
                this.hSb,
                this.formData.header.ref?.background?.ref
              );
            }
            get EO() {
              return $Gc(this.formData.Bba);
            }
            get nqa() {
              return $Gc(this.formData.kca);
            }
            get direction() {
              return this.formData.direction === "r" ? "r" : "l";
            }
            get If() {
              return this.Mr
                ? this.Mr.getSettings(this.formData.rG)
                : { status: 2 };
            }
            get cFb() {
              return this.formData.fields.count();
            }
            get G_() {
              return this.formData.G_
                ? !0
                : (this.formData.nDa ||
                    this.formData.title.ref?.label == null) &&
                    this.formData.jra === !1;
            }
            get KBa() {
              return this.cFb === 1 && (this.formData.jra ?? !0);
            }
            get Qi() {
              if (this.formData.Qi) return this.formData.Qi;
              const a = $f(rg, this.Oja.label.text.stream.hh(0), "font-size");
              return this.KBa ? a / (this.Oja.TEa ?? 1.5625) : a;
            }
            get Kj() {
              return this.formData.Kj ?? 16;
            }
            get hSb() {
              return this.Oja.eJ === "u"
                ? $f(rg, this.Oja.label.text.stream.hh(0), "color")
                : void 0;
            }
            get Oja() {
              return __c.z(this.formData.fields.first(), "Malformed form data");
            }
            constructor(a, b) {
              this.formData = a;
              this.Mr = b;
              NJc.G(this);
            }
          },
          OJc = class {
            get background() {
              return this.formData.kca;
            }
            get border() {
              return this.formData.border;
            }
            get V() {
              return this.formData.V ?? 0;
            }
            get fontFamily() {
              return this.formData.mia;
            }
            get direction() {
              return this.formData.direction === "r" ? "r" : "l";
            }
            constructor(a, b) {
              this.formData = a;
              this.Ua = b;
            }
          },
          DJc = class {
            get background() {
              return (
                this.formData.header?.ref?.background.ref ?? this.formData.Bba
              );
            }
            get label() {
              var a = this.formData.fields.first();
              return (a = this.Ua.KBa
                ? a.label.text
                : this.formData.title?.ref?.label)
                ? PJc(a, this.Ua.direction)
                : r7("", {
                    "font-size": this.Ua.Qi * 1.953,
                    direction: MHc(this.Ua.direction),
                  });
            }
            get padding() {
              const a = this.formData.header.ref;
              return {
                ma: this.Ua.Kj * (a?.aba ?? K7.header.aba),
                ya: this.Ua.Kj * (a?.Tt ?? K7.header.Tt),
                ta: this.Ua.Kj * (a?.Gq ?? K7.header.Gq),
                Na: this.Ua.Kj * (a?.Fq ?? K7.header.Fq),
              };
            }
            constructor(a, b) {
              this.formData = a;
              this.Ua = b;
            }
          },
          QJc = class {
            get id() {
              return this.Ed.id || "";
            }
            get label() {
              return PJc(this.Ed.label.text, this.Ua.direction);
            }
            get pdb() {
              return !this.Ua.KBa;
            }
            get accentColor() {
              return this.Ua.Aa.accentColor;
            }
            get BM() {
              return this.Ua.Aa.BM;
            }
            get qub() {
              return this.Ua.Qi * 0.8;
            }
            get Qi() {
              return this.Ua.Qi;
            }
            get Kj() {
              return this.Ua.Kj;
            }
            get padding() {
              return { IBb: this.Ua.Kj * 0.512, Ja: this.Ua.Kj * 0.64 };
            }
            constructor(a, b) {
              this.Ed = a;
              this.Ua = b;
            }
          },
          RJc = class extends QJc {
            get placeholder() {
              return {
                color: m7(this.Ua.Aa.AH, 0.5),
                text: this.Ed.placeholder || "",
              };
            }
            get V() {
              return this.Ed.V ?? 8;
            }
            get borderColor() {
              return {
                default: this.Ua.Aa.mya,
                Pg: this.Ua.Aa.oya,
                focus: this.Ua.Aa.nya,
                error: this.Ua.Aa.BM,
              };
            }
            get hd() {
              return { default: this.Ua.Aa.AH, Vm: this.Ua.Aa.uga };
            }
            get sizes() {
              return {
                n6: this.Ua.Qi * 1,
                Qc: this.Ua.Qi * 1.5,
                Cwa: this.Ua.Qi * 0.0625,
              };
            }
            constructor(...a) {
              super(...a);
              this.type = 4;
            }
          },
          HJc = class extends RJc {
            get ZN() {
              return this.Ed.variant.ZN;
            }
            constructor(...a) {
              super(...a);
              this.variant = 2;
            }
          },
          IJc = class extends RJc {
            constructor(...a) {
              super(...a);
              this.ZN = this.variant = 1;
            }
          },
          L7 = class extends QJc {
            get V() {
              return this.Ed.V ?? 8;
            }
            constructor(...a) {
              super(...a);
              this.type = 5;
            }
          },
          JJc = class extends L7 {
            get borderColor() {
              return {
                default: this.Ua.Aa.mya,
                Pg: this.Ua.Aa.oya,
                focus: this.Ua.Aa.nya,
                error: this.Ua.Aa.BM,
              };
            }
            get hd() {
              return this.Ua.Aa.AH;
            }
            get sizes() {
              return {
                n6: this.Ua.Qi * 1,
                Qc: this.Ua.Qi * 1.5,
                Cwa: this.Ua.Qi * 0.0625,
              };
            }
            get gridGap() {
              return this.Ua.Kj * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 1;
            }
          },
          KJc = class extends L7 {
            get backgroundColor() {
              return {
                default: this.Ua.Aa.s6,
                Pg: this.Ua.Aa.t6,
                active: this.Ua.Aa.Oha,
                selected: this.Ua.Aa.Pha,
                error: this.Ua.Aa.BM,
                Vm: this.Ua.Aa.MY,
              };
            }
            get K_() {
              return { default: this.Ua.Aa.AH, selected: this.Ua.Aa.Q4 };
            }
            get sizes() {
              return { Xwa: this.Ua.Qi * 2.5, Qc: this.Ua.Qi * 1.953 };
            }
            get gridGap() {
              return this.Ua.Kj * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 2;
            }
          },
          LJc = class extends L7 {
            get borderColor() {
              return { default: this.Ua.Aa.AH, Vm: this.Ua.Aa.uga };
            }
            get fillColor() {
              return {
                Pg: this.Ua.Aa.t6,
                selected: this.Ua.Aa.Pha,
                Vm: this.Ua.Aa.MY,
              };
            }
            get Qc() {
              return this.Ua.Qi * 2.2;
            }
            get gridGap() {
              return this.Ua.Kj * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 3;
            }
          },
          MJc = class extends L7 {
            get backgroundColor() {
              return {
                default: this.Ua.Aa.s6,
                Pg: this.Ua.Aa.t6,
                active: this.Ua.Aa.Oha,
                selected: this.Ua.Aa.Pha,
                error: this.Ua.Aa.BM,
                Vm: this.Ua.Aa.MY,
              };
            }
            get hd() {
              return { default: this.Ua.Aa.AH, selected: this.Ua.Aa.Q4 };
            }
            get sizes() {
              return { Xwa: this.Ua.Qi * 2.5, n6: this.Ua.Qi * 1 };
            }
            get gridGap() {
              return this.Ua.Kj * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 4;
            }
          },
          TJc = class extends QJc {
            get options() {
              return this.Ed.options.map((a) => new SJc(a, this.Ua));
            }
            get Vz() {
              return {
                default: this.Ua.Aa.s6,
                Pg: this.Ua.Aa.t6,
                active: this.Ua.Aa.Oha,
                selected: this.Ua.Aa.Pha,
                error: this.Ua.Aa.BM,
                Vm: this.Ua.Aa.MY,
              };
            }
            get wC() {
              return {
                default: this.Ua.Aa.AH,
                selected: this.Ua.Aa.Q4,
                Vm: this.Ua.Aa.uga,
              };
            }
            get tqa() {
              return this.Ed.H0 !== void 0 && this.Ed.H0 !== 1 ? "m" : "s";
            }
            get V() {
              return this.Ed.V ?? 8;
            }
            get rowGap() {
              return 0.512 * this.Ua.Kj;
            }
            get sizes() {
              return {
                Qc: this.Ua.Qi * 1,
                Dxa: this.Ua.Qi * 1,
                Kob: this.Ua.Qi * 0.5,
                Mob: this.Ua.Qi * 0.625,
              };
            }
          },
          FJc = class extends TJc {
            static G(a) {
              L(a, { If: w7 });
            }
            get If() {
              return d7(this.Ua.If, {
                SO: (a) =>
                  (a = a.eM.get(this.id) ?? [])
                    ? { status: 1, data: { tya: a } }
                    : b3(),
                loading: () => ({ status: 2 }),
                error: () => b3(),
              });
            }
            constructor(...a) {
              super(...a);
              this.type = (FJc.G(this), 2);
            }
          },
          EJc = class extends TJc {
            get sPa() {
              return {
                text: this.Ua.Aa.Q4,
                track: this.Ua.Aa.Plb,
                EL: this.Ua.Aa.accentColor,
              };
            }
            get wOa() {
              return {
                text: this.Ua.Aa.AH,
                track: this.Ua.Aa.MY,
                EL: this.Ua.Aa.s6,
              };
            }
            constructor(...a) {
              super(...a);
              this.type = 1;
            }
          },
          GJc = class extends TJc {
            constructor(...a) {
              super(...a);
              this.type = 3;
            }
          },
          SJc = class {
            get id() {
              return this.option.id || "";
            }
            get label() {
              return PJc(this.option.label.text, this.Ua.direction);
            }
            constructor(a, b) {
              this.option = a;
              this.Ua = b;
            }
          },
          PJc = hIc((a, b) => {
            const c = Yh.create(Yh.snapshot(a));
            bIc(() => {
              c.stream.setAttributes({ direction: MHc(b) });
            });
            return c;
          });
        var UJc = class {
          static G(a) {
            L(a, { hY: C7.shallow });
          }
          getSettings(a) {
            const b = a || "",
              c = this.hY.get(b);
            if (c) return c;
            x7(() => this.hY.set(b, { status: 2 }));
            this.uI.i3b(a).then(
              (d) => {
                x7(() => {
                  this.hY.set(b, d.ok ? { status: 1, data: d.value } : b3());
                });
              },
              () => {
                x7(() => {
                  this.hY.set(b, b3());
                });
              }
            );
            return __c.z(this.hY.get(b));
          }
          constructor(a) {
            this.uI = a;
            this.hY = (UJc.G(this), new Map());
          }
        };
        var VJc = class {
          static G(a) {
            L(a, { eda: C7.shallow, zT: C7.shallow });
          }
          Nba(a) {
            a = y7(a);
            this.eda.delete(a);
          }
          constructor(a, b, c) {
            this.uI = a;
            this.Mr = b;
            this.formData = c;
            this.eda = (VJc.G(this), new Map());
            this.zT = new Map();
          }
        };
        var UHc = 18 * lJc;
        var WJc = __c.e_({ D: jJc }),
          XJc = __c.UZ()(() => ({
            FYb(a) {
              return {
                data: { D: { type: "quiz", value: VHc(a) }, document: {} },
                P: { width: 500, height: 600 },
              };
            },
          }));
        var YJc;
        YJc = __c.GZ()(
          ({ ZL: { ka: a, Fg: b, ab: c }, wi: { dwb: d, Eh: e } }) => {
            const f = C7.box(),
              g = new WeakMap();
            return {
              metadata: { type: "form", YV: (h) => h.value.id, name: void 0 },
              D: __c.FZ(
                E7(({ data: h, Ee: k, Ei: { page: l } }) => {
                  l = l.container;
                  const m = h.D.value,
                    n = m.id,
                    p = l.id;
                  var q = g.get(m);
                  if (!q || q.i_ !== n || q.ci !== p) {
                    let w;
                    if (d && p) {
                      w = d.J2b.get({ i_: n, ci: p, V1b: l.extension });
                      var r = new UJc(w);
                      var t = new VJc(w, r, m);
                    }
                    q = new BJc(m, w, r, t, f, c, a, b);
                    q = { i_: n, ci: p, Mr: r, MM: t, aCa: q };
                    g.set(m, q);
                  }
                  t = q.Mr;
                  r = q.aCa;
                  const v = q.MM;
                  gIc(() => {
                    if (v) return RHc(v);
                  }, [v]);
                  h = OHc({ data: h, Mr: t });
                  return f7(wJc, {
                    aCa: r,
                    ilb: { ek: k.ek, cn: k.cn, dfa: k.dfa, yua: k.yua },
                    state: h,
                    mk: l.language || "en",
                    Eh: e,
                  });
                })
              ),
              e7: ["responsive"],
              exports: { $sb: f },
            };
          }
        );
        __c.v_ = { Bh: XJc, Qo: YJc, Ch: WJc };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/7917ef2c17fc555f.js.map
