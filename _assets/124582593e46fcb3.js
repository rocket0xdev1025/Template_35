(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [20716],
  {
    /***/ 856598: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(258551);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var y0 = __c.y0;
        var pFc = function (a, b, c = 1) {
            b = Math.min(a.weight, b);
            if (b !== 0)
              return {
                borderWidth: `${b * c}px`,
                borderStyle: "solid",
                borderColor:
                  a.color ??
                  a.fill.color ??
                  a.fill.Za.ref?.Jh[0]?.color ??
                  "transparent",
              };
          },
          qFc = function (a) {
            if (a.color) return { backgroundColor: a.color };
            if (a.Za.ref && a.Za.ref.type === "linear")
              return {
                backgroundColor: a.Za.ref?.Jh[0]?.color,
                background: `linear-gradient(${
                  a.Za.ref.rotation
                }deg, ${a.Za.ref?.Jh.map((b) => `${b.color}`).join(",")})`,
              };
            if (a.Za.ref && a.Za.ref.type === "radial") {
              const b = a.Za.ref.center.left,
                c = a.Za.ref.center.top,
                d = a.Za.ref?.Jh.map((e) => `${e.color}`).join(",");
              return {
                backgroundColor: a.Za.ref?.Jh[0]?.color,
                background: `radial-gradient(circle at ${`${Math.round(
                  b * 100
                )}%`} ${`${Math.round(c * 100)}%`}, ${d})`,
              };
            }
            return {};
          },
          rFc = __webpack_require__(322594),
          Q6 = rFc.jsx,
          sFc = rFc.jsxs;
        __webpack_require__(186901);
        var tFc = __webpack_require__(721226).PA;
        var uFc = new RegExp(
            /^(https?|ftp|tel|sms|mailto|shortcuts):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/i
          ),
          vFc = __c.e_({
            D: __c.d_({
              label: y0.Mm(1, "Richtext2"),
              link: y0.Uz(2, uFc),
              background: y0.Mm(3, "Fill"),
              V: y0.lF(4, { min: 0, max: 100 }),
              border: y0.D7a(5, "Stroke"),
            }),
          });
        var wFc = __c.UZ()((a) => ({
          createDefault(b) {
            var c = a.Zia?.eZb ?? __c.rg.Ub["font-family"];
            c = {
              ...(b?.attrs ?? {}),
              "font-family": b?.attrs?.["font-family"] ?? c,
              "font-size": b?.attrs?.["font-size"] ?? 20,
              color: b?.attrs?.color ?? "#ffffff",
              "text-align": b?.attrs?.["text-align"] ?? "center",
            };
            return {
              data: {
                D: {
                  label: {
                    ...__c.GF,
                    stream: __c.$g
                      .Jb()
                      .attrs(c)
                      .mb(b?.label ?? __c.K("4sGMlw"))
                      .mb("\n")
                      .build(),
                  },
                  link: b?.link,
                  background: b?.background ?? { ...__c.hD, color: "#0ba84a" },
                  V: b?.V ?? 25,
                  border: b?.border,
                },
                document: {},
              },
              P: b?.P ?? { width: 300, height: 50 },
            };
          },
        }));
        var xFc = __c.GZ()(() => ({
          metadata: { type: "button", name: __c.K("xdElgQ") },
          D: __c.FZ(
            tFc(({ data: { D: a }, Ee: b }) =>
              sFc("div", {
                className: "_2Z_Fmg",
                children: [
                  Q6("div", {
                    className: "_0mvZOQ",
                    style: {
                      borderRadius: `${a.V}px`,
                      border: a.border.ref
                        ? `solid ${a.border.ref.weight}px  ${a.border.ref.color}`
                        : void 0,
                    },
                    children: Q6(b.cn, { fill: a.background }),
                  }),
                  Q6("div", {
                    className: "ZcsBDg",
                    children: Q6("div", {
                      className: "vyKiIw",
                      children: Q6(b.ek, { text: a.label }),
                    }),
                  }),
                ],
              })
            )
          ),
          email: {
            type: 2,
            Component: tFc(
              ({ data: { D: a }, Ee: b, Ei: { P: c }, scale: d }) => {
                var e = c.width * d;
                e = (e = a.border.ref ? pFc(a.border.ref, e / 2, d) : void 0)
                  ? `${e.borderWidth} ${e.borderStyle} ${e.borderColor}`
                  : void 0;
                const f = a.V ? a.V * d : 0;
                return Q6("a", {
                  href: a.link ?? "#",
                  "ses:no-track": "",
                  target: "_blank",
                  rel: "noopener",
                  style: {
                    display: "table",
                    width: "100%",
                    height: `${c.height * d}px`,
                    textDecoration: "none",
                    borderCollapse: "separate",
                    boxSizing: "border-box",
                    borderSpacing: 0,
                    padding: "8px",
                    ...qFc(a.background),
                    ...(e
                      ? {
                          borderTop: e,
                          borderBottom: e,
                          borderLeft: e,
                          borderRight: e,
                        }
                      : {}),
                    ...(f
                      ? {
                          borderTopLeftRadius: `${f}px`,
                          borderTopRightRadius: `${f}px`,
                          borderBottomLeftRadius: `${f}px`,
                          borderBottomRightRadius: `${f}px`,
                        }
                      : {}),
                  },
                  children: Q6(b.ek, { text: a.label }),
                });
              }
            ),
          },
          exports: {},
          e7: ["fixed"],
        }));
        __c.y_ = { Bh: wFc, Qo: xFc, Ch: vFc };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/124582593e46fcb3.js.map
