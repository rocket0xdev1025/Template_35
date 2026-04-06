(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [43432],
  {
    /***/ 290120: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(258551);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var y0 = __c.y0;
        var L = __c.L;
        var fKc = async function (a, b) {
            return a.uta(b, async () => {
              if (a.cYa == null)
                throw Error("Scene document resources are not supported");
              const c = await a.cYa.Kr({ id: b, version: 1 }, void 0),
                d = { id: c.id, files: { c0a: c.content.url, TIa: c.Rc?.url } };
              (0, __c.Zb)(() => {
                a.scenes.set(d.id, d);
              });
              return d;
            });
          },
          iKc = function (a, b) {
            if (a.Lh.Thb && b instanceof gKc) return new hKc(a.Lh.Thb, b);
            throw Error("GltfResource needs GltfResource");
          },
          kKc = function (a) {
            return jKc
              ? new gKc(a)
              : new gKc(a, {
                  environment_sdr:
                    "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
                  environment_gain:
                    "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png",
                });
          },
          lKc = function (a, b, c) {
            let d = b - 1,
              e = 0,
              f = c - 1,
              g = 0;
            for (let h = 0; h < c; h++)
              for (let k = 0; k < b; k++)
                a[3 + (h * b + k) * 4] !== 0 &&
                  ((d = Math.min(d, k)),
                  (e = Math.max(e, k)),
                  (f = Math.min(f, h)),
                  (g = Math.max(g, h)));
            a = g - f + 1;
            return { left: d, top: c - (f + a), width: e - d + 1, height: a };
          },
          mKc = function (a, b, c) {
            const d = a.store.XE ? a.Lh.canvas : a.store.JE;
            if (d) {
              var e = c.getContext("2d");
              if (!e) throw Error("Unable to create 2d context");
              a.store.XE && a.render(!1);
              c.width = b;
              c.height = b;
              e.drawImage(d, 0, 0, b, b);
            }
          },
          nKc = function (a, b) {
            a.store.container = b;
            b.contains(a.Lh.canvas) || b.appendChild(a.Lh.canvas);
          },
          oKc = function (a) {
            if (a.store.Oe) {
              const b = requestAnimationFrame(() => oKc(a));
              a.store.aga = b;
              a.render(a.store.EYa);
            }
          },
          rKc = function ({ Ika: a, Lh: b }) {
            const c = new pKc();
            return new qKc(c, a, b);
          },
          sKc = function (a) {
            var b = __c.z(a.store.container, "Missing container"),
              c = a.vg.TZ;
            b.style.width = 2e3 * a.vg.da + "px";
            b.style.height = 2e3 * a.vg.da + "px";
            b.style.left = `-${c.left * a.vg.da}px`;
            b.style.top = `-${c.top * a.vg.da}px`;
            b.style.position = "absolute";
            c = new Image();
            {
              var d = a.vg;
              b = a.x_(b);
              const e = d.store.XE ? d.Lh.canvas : d.store.JE;
              e
                ? (d.store.XE && (N7(d.Lh, b, b), d.render(!1)),
                  (d = e.toDataURL("image/png")))
                : (d = "");
            }
            c.src = d;
            a.store.iN = c;
          },
          uKc = function (a) {
            var b = __c.z(a.store.container, "Missing container");
            b.style.position = "init";
            b.style.left = "0";
            b.style.top = "0";
            b.style.width = "100%";
            b.style.height = "100%";
            const c = document.createElement("canvas");
            var d = a.vg;
            b = a.x_(b);
            if (d.store.isInitialized) {
              var e = c.getContext("2d");
              if (!e) throw Error("Unable to create 2d context");
              var f = b / 2e3,
                g = d.C8();
              c.width = f * g.width;
              c.height = f * g.height;
              const h = tKc(d.Lh);
              N7(d.Lh, b, b);
              d.render(!1);
              e.drawImage(
                d.Lh.canvas,
                g.left * f,
                g.top * f,
                g.width * f,
                g.height * f,
                0,
                0,
                g.width * f,
                g.height * f
              );
              N7(d.Lh, h.width, h.height);
            } else if (d.store.JE) {
              e = c.getContext("2d");
              if (!e) throw Error("Unable to create 2d context");
              f = d.store.zga;
              g = d.store.HS / 2e3;
              b /= 2e3;
              c.width = Math.round(b * f.width);
              c.height = Math.round(b * f.height);
              e.drawImage(
                d.store.JE,
                f.left * g,
                f.top * g,
                f.width * g,
                f.height * g,
                0,
                0,
                c.width,
                c.height
              );
            }
            d = new Image();
            d.src = c.toDataURL("image/png");
            a.store.iN = d;
            c.width = 1;
            c.height = 1;
          },
          vKc = function (a) {
            const b = a.cn;
            a = __c.GN.create({
              ...__c.hD,
              image: {
                ...__c.bJb,
                media: { ...__c.IEb, id: a.rJ, version: 1 },
                Bb: void 0,
              },
            });
            return O7(b, { fill: a });
          },
          yKc = function ({
            sjb: a,
            mkb: b,
            hkb: c,
            fia: d,
            yzb: e,
            cn: f,
            ora: g,
          }) {
            switch (d) {
              case 1:
                return O7(c, {});
              case 3:
                return O7(wKc, { M9: e || "" });
              case 0:
                return O7(b, {});
              case 2:
                return O7(vKc, { cn: f, rJ: g || "" });
              case 4:
                return O7(a, {});
              case 5:
                return O7(xKc, {});
              default:
                throw new __c.A(d);
            }
          },
          FKc = function ({
            Rp: a,
            je: b,
            cn: c,
            kA: d,
            Lh: e,
            fqa: f,
            exports: g,
            f7: h,
          }) {
            const k = new zKc(),
              l = new AKc(k, a, b, d, e, f, h),
              m = BKc(a),
              n = CKc(a),
              p = () => O7("div", { children: "Error" });
            return DKc(() => {
              P7(() => {
                l.initialize();
                return () => {
                  l.destroy();
                };
              }, []);
              P7(() => {
                l.S2 && l.ki && g.Zlb && g.Zlb();
              });
              return O7(EKc, {
                Ld: l.Ld,
                children: O7(yKc, {
                  fia: l.fia,
                  yzb: l.M9,
                  selected: l.ki,
                  ora: l.ora,
                  cn: c,
                  hkb: n,
                  mkb: m,
                  sjb: p,
                }),
              });
            });
          },
          IKc = function (a) {
            return GKc(({ data: b, Ee: { cn: c }, Ei: { je: d } }) => {
              const e = HKc(
                () => FKc({ Rp: b, je: d, cn: c, ...a }),
                [b, d, c]
              );
              return O7("div", { className: "N73IPQ", children: O7(e, {}) });
            });
          },
          KKc = function (a, b, c) {
            a = a.startSpan("load_resource", c);
            return JKc(a, b);
          },
          JKc = function (a, b) {
            return (typeof b === "function" ? b() : b)
              .catch((c) => {
                a.setStatus("error");
                throw c;
              })
              .finally(() => {
                a.end();
              });
          },
          N7 = function (a, b, c) {
            a.canvas.width = b;
            a.canvas.height = c;
          },
          LKc = function (a, b) {
            a.Fba = a.Fba.filter((c) => c !== b);
          },
          tKc = function (a) {
            return { width: a.canvas.width, height: a.canvas.height };
          },
          NKc = async function (a) {
            a.AQ || (a.AQ = Q7());
            try {
              const [{ default: b, WebGlRenderer: c }, { default: d }] =
                await Promise.all([
                  __webpack_require__.me(19779),
                  __webpack_require__.me(104993),
                ]);
              await b({ path: d });
              a.sQa = c;
            } catch (b) {
              throw (
                ((a.P4 = void 0),
                Error("Failed to initialize renderer", { cause: b }))
              );
            }
            try {
              a.HQ = MKc(a);
            } catch (b) {
              a.J.info(`Unable to initialize WebGL context error: ${b}`),
                R7(() => {
                  a.cva = !0;
                });
            }
          },
          Q7 = function () {
            const a = document.createElement("canvas");
            a.width = 1e3;
            a.height = 1e3;
            a.style.width = "100%";
            a.style.visibility = "visible";
            return a;
          },
          MKc = function (a, b = 0) {
            if (b > 5) throw Error("Unable to recreate context");
            const c = OKc(a);
            a.HQ = new (__c.z(a.sQa))(c);
            a.HQ.onContextLost = () => {
              a.J.info("WebGL context lost for scene widget");
              a.HQ = void 0;
              a.P4 = void 0;
              a.$Fa = () => {
                const d = a.canvas;
                a.AQ = Q7();
                a.sQa && MKc(a, b + 1);
                a.Fba.forEach((e) => e(d));
                a.$Fa = void 0;
              };
            };
            return a.HQ;
          },
          OKc = function (a) {
            a = a.canvas;
            let b;
            const c = (e) => {
              b = e.statusMessage ?? "Unknown";
            };
            a.addEventListener("webglcontextcreationerror", c);
            const d = a.getContext("webgl");
            a.removeEventListener("webglcontextcreationerror", c);
            if (d != null) return d;
            throw Error(b);
          };
        __c.Wp.prototype.uta = __c.fa(8, function (a, b) {
          const c = this.Ci.get(__c.Tp(a));
          if (c != null && c.Q$a != null) {
            const e = this.eY.get(c);
            if (e != null) return Promise.resolve({ ...c, element: e });
          }
          const d = __c.Tp(a);
          if ((a = this.pending.get(d))) return a;
          c != null &&
            c.Q$a != null &&
            (b = async () => {
              const e = await __c.Vp(this, c);
              return { ...c, element: e };
            });
          b = b().finally(() => this.pending.delete(d));
          this.pending.set(d, b);
          return b;
        });
        __c.Xp.prototype.uta = __c.fa(7, function (a, b) {
          var c = this.scenes.get(a);
          if (c) return Promise.resolve(c);
          if ((c = this.pending.get(a))) return c;
          b = b().finally(() => this.pending.delete(a));
          this.pending.set(a, b);
          return b;
        });
        var PKc = __webpack_require__(19779),
          hKc = PKc.GltfRenderer,
          gKc = PKc.GltfResource;
        var S7 = __webpack_require__(186901),
          T7 = S7.EW,
          R7 = S7.h5,
          U7 = S7.mJ,
          V7 = S7.sH,
          W7 = S7.XI;
        var QKc = __webpack_require__(322594),
          O7 = QKc.jsx,
          RKc = QKc.jsxs;
        var X7 = __webpack_require__(205482),
          GKc = X7.memo,
          P7 = X7.useEffect,
          HKc = X7.useMemo,
          SKc = X7.useRef,
          TKc = X7.useState;
        var DKc = __webpack_require__(721226).PA;
        var jKc = __c.uc("1aab289f", !1),
          UKc = class {
            constructor(a) {
              this.Lh = a;
            }
          };
        var VKc = class {
          static G(a) {
            L(a, {
              selected: V7.ref,
              $sa: V7.ref,
              Zsa: V7.ref,
              V9: V7.ref,
              ZAb: V7.ref,
            });
          }
          constructor(a) {
            this.vg = a;
            this.selected = (VKc.G(this), !1);
            this.Zsa = this.$sa = !1;
            this.V9 = 0;
            this.ZAb = !1;
          }
        };
        var qKc = class {
          static G(a) {
            L(a, {
              initialize: W7,
              Cub: W7,
              CMa: W7,
              ycb: W7,
              dispose: W7,
              C8: W7,
              Qka: W7,
              Ndb: W7,
            });
          }
          async initialize(a) {
            this.store.isInitialized ||
              this.store.Ld ||
              ((this.store.Ld = !0),
              (a = kKc(a)),
              (this.store.Jka = a),
              await a.load(),
              a === this.store.Jka &&
                ((this.store.XE = iKc(this.Ika, a)),
                this.Lh.Fba.push(this.Qka),
                this.render(!0),
                R7(() => {
                  this.store.isInitialized = !0;
                  this.store.Ld = !1;
                })));
          }
          Cub(a, b, c = !0) {
            const d = this.C8();
            this.store.TZ = d;
            a = Math.round(Math.min((a.width * 2e3) / d.width, 2e3));
            N7(this.Lh, a, a);
            this.store.HS = a;
            this.store.da = b;
            this.store.EYa = c;
            this.Ndb();
          }
          get HS() {
            return this.store.HS;
          }
          get TZ() {
            return this.store.TZ;
          }
          CMa() {
            this.store.Oe = !1;
            this.store.aga != null &&
              (cancelAnimationFrame(this.store.aga), (this.store.aga = void 0));
          }
          ycb(a) {
            this.store.VR = a;
          }
          async dispose() {
            this.CMa();
            if (
              this.isInitialized &&
              this.store.container?.contains(this.Lh.canvas)
            ) {
              this.store.zga = this.C8();
              var a = document.createElement("canvas");
              mKc(this, this.store.HS, a);
              this.store.JE = a;
            }
            this.store.XE?.dispose();
            this.store.XE = void 0;
            this.store.isInitialized = !1;
            LKc(this.Lh, this.Qka);
            this.store.Ld = !1;
            a = this.store.Jka;
            this.store.Jka = void 0;
            await a?.load();
            a?.dispose();
          }
          C8() {
            if (this.store.Aga && this.store.VR === this.store.Aga?.BIb)
              return this.store.Aga.ia;
            var a = tKc(this.Lh);
            N7(this.Lh, 2e3, 2e3);
            this.render(!1);
            const b = this.Lh.getImageData();
            N7(this.Lh, a.width, a.height);
            a = this.ywb(b.data, b.width, b.height);
            this.store.Aga = { BIb: this.store.VR, ia: a };
            return a;
          }
          get isInitialized() {
            return this.store.isInitialized;
          }
          get Ld() {
            return this.store.Ld;
          }
          get Oe() {
            return this.store.Oe;
          }
          get da() {
            return this.store.da;
          }
          Ndb() {
            this.CMa();
            this.store.Oe = !0;
            oKc(this);
          }
          render(a) {
            this.store.XE?.render({
              distance: 1,
              rotationPhi: this.store.VR.rotation.x,
              rotationTheta: this.store.VR.rotation.y,
              enableGrid: a,
            });
          }
          constructor(a, b, c, d = lKc) {
            this.store = a;
            this.Ika = b;
            this.Lh = c;
            this.ywb = d;
            this.Qka =
              (qKc.G(this),
              (e) => {
                R7(() => {
                  const f = this.store.Jka,
                    g = this.store.container;
                  g &&
                    this.store.isInitialized &&
                    f &&
                    (g.contains(e) && g.removeChild(e),
                    nKc(this, g),
                    this.store.XE?.dispose(),
                    (this.store.XE = void 0),
                    (this.store.XE = iKc(this.Ika, f)),
                    this.Lh.Fba.push(this.Qka),
                    (this.store.isInitialized = !0));
                });
              });
          }
        };
        var pKc = class {
          static G(a) {
            L(a, {
              Oe: V7.ref,
              VR: V7.ref,
              aga: V7.ref,
              JE: V7.ref,
              zga: V7.ref,
              Aga: V7.ref,
              isInitialized: V7.ref,
              Ld: V7.ref,
              da: V7.ref,
              TZ: V7.ref,
            });
          }
          constructor() {
            this.container = (pKc.G(this), void 0);
            this.EYa = this.Oe = !1;
            this.VR = { rotation: { x: 0, y: 0, z: 0 } };
            this.zga = { left: 0, top: 0, width: 1, height: 1 };
            this.Ld = this.isInitialized = !1;
            this.da = 1;
            this.TZ = { left: 0, top: 0, width: 1, height: 1 };
            this.HS = 0;
          }
        };
        var WKc = ({ HAb: a }) =>
            RKc("div", {
              className: "Wfem7A",
              children: [
                O7("div", { className: "CSoSRg" }),
                O7("div", {
                  className: "__J59g",
                  style: {
                    width: a ? "100%" : "init",
                    height: a ? "init" : "100%",
                    aspectRatio: "1",
                  },
                  children: O7("div", { className: "tEhdig" }),
                }),
              ],
            }),
          EKc = ({ children: a, Ld: b }) => {
            const c = SKc(null),
              [d, e] = TKc(!1);
            P7(() => {
              c.current && e(c.current.clientWidth >= c.current.clientHeight);
            }, [c]);
            return b
              ? O7("div", {
                  ref: c,
                  className: "uDEnGQ",
                  children: RKc("div", {
                    className: "E8BDLQ",
                    children: [
                      O7("div", { className: "II7r4Q", children: a }),
                      O7(WKc, { HAb: d }),
                    ],
                  }),
                })
              : a;
          };
        var XKc = ({ FFb: a, EFb: b }) => {
          const c = SKc(null);
          P7(() => {
            const d = c.current;
            c.current && a(c.current);
            return () => {
              d && b();
            };
          }, [c, a, b]);
          return O7("div", {
            ref: c,
            style: { display: "block", position: "absolute" },
          });
        };
        var YKc = class {
          get vg() {
            return this.local.vg;
          }
          constructor(a) {
            this.local = a;
            this.Pxb = (b) => {
              const c = this.vg.TZ;
              b.style.width = 2e3 * this.vg.da + "px";
              b.style.height = 2e3 * this.vg.da + "px";
              b.style.left = `-${c.left * this.vg.da}px`;
              b.style.top = `-${c.top * this.vg.da}px`;
              nKc(this.vg, b);
            };
            this.Oxb = () => {
              var b = this.vg;
              if (b.isInitialized && b.store.container?.contains(b.Lh.canvas)) {
                b.store.zga = b.C8();
                const c = document.createElement("canvas");
                mKc(b, b.store.HS, c);
                b.store.JE = c;
              }
              b.store.container?.removeChild(b.Lh.canvas);
              b.store.container = void 0;
            };
          }
        };
        var CKc = ({ local: a }) => {
          const b = new YKc(a);
          return () => O7(XKc, { FFb: b.Pxb, EFb: b.Oxb });
        };
        var ZKc = ({ iN: a, dGb: b, onDispose: c }) => {
          const d = SKc(null);
          P7(() => {
            d.current && b(d.current);
            return () => c();
          }, [d, b, c]);
          P7(() => {
            d.current &&
              a &&
              ((a.style.width = "100%"),
              (a.style.height = "100%"),
              d.current.firstChild &&
                d.current.removeChild(d.current.firstChild),
              d.current.appendChild(a));
          }, [d, a]);
          return O7("div", {
            ref: d,
            style: { width: "100%", height: "100%" },
          });
        };
        var $Kc = __c.uc("75810be2", !1),
          aLc = class {
            static G(a) {
              L(a, { initialize: W7.bound, dispose: W7.bound, RXa: W7 });
            }
            initialize(a) {
              $Kc ||
                ((this.store.container = a),
                (this.store.SXa = U7(
                  () => [this.vg.store.VR, this.vg.Oe],
                  this.Sxb,
                  { fireImmediately: !1 }
                )),
                (this.store.PXa = U7(() => this.local.Zsa, this.Qxb, {
                  fireImmediately: !0,
                })));
            }
            dispose() {
              this.RXa();
              this.store.SXa?.();
              this.store.SXa = void 0;
              this.store.PXa?.();
              this.store.PXa = void 0;
            }
            get iN() {
              return this.store.iN;
            }
            x_(a) {
              a = a.getBoundingClientRect();
              return Math.max(a.width, a.height) > 100 ? this.vg.HS : 300;
            }
            get vg() {
              return this.local.vg;
            }
            RXa() {
              this.store.iN = void 0;
            }
            constructor(a, b) {
              this.store = a;
              this.local = b;
              this.Sxb =
                (aLc.G(this),
                () => {
                  this.vg.Oe || (this.local.Zsa ? sKc(this) : uKc(this));
                });
              this.Qxb = () => {
                this.local.Zsa ? sKc(this) : uKc(this);
              };
            }
          };
        var bLc = class {
          static G(a) {
            L(a, { iN: V7.ref });
          }
          constructor() {
            this.container = (bLc.G(this), void 0);
          }
        };
        var BKc = ({ local: a }) => {
          const b = new bLc(),
            c = new aLc(b, a);
          return DKc(() =>
            O7(ZKc, { dGb: c.initialize, onDispose: c.dispose, iN: c.iN })
          );
        };
        var xKc = () => O7("div", { className: "_7SJjPA" });
        var wKc = ({ M9: a }) =>
          O7("img", {
            src: a,
            style: {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            },
          });
        var AKc = class {
          static G(a) {
            L(a, {
              initialize: W7,
              destroy: W7,
              fia: T7,
              Ld: T7,
              isError: T7,
              M9: T7,
              ZB: T7,
              ki: T7,
              m0a: W7,
              r0a: W7,
              s0a: W7,
            });
          }
          async initialize() {
            this.store.xsb = U7(() => this.ZB, this.m0a, {
              fireImmediately: !0,
            });
            const a = await fKc(this.kA, this.Rp.D.scene.id);
            R7(() => {
              this.store.scene = a;
            });
          }
          destroy() {
            this.ZB && this.Rp.local.V9--;
            this.Rp.local.V9 === 0 && this.vg.dispose();
            this.store.xsb?.();
            this.store.Zza?.();
            this.store.Yza?.();
            this.store.TXa?.();
          }
          get fia() {
            return (this.KEa && this.ZB && !this.vg.Oe) ||
              (this.ZB && this.KEa && !this.ki) ||
              (!this.ZB && this.KEa)
              ? 0
              : this.IAb && this.vg.Oe
              ? 1
              : this.ora
              ? 2
              : this.M9
              ? 3
              : this.isError
              ? 4
              : 5;
          }
          get Ld() {
            return this.ZB && this.ki && !this.vg.isInitialized;
          }
          get isError() {
            return !!this.store.scene && !this.store.scene.files.TIa;
          }
          get M9() {
            return this.store.scene?.files.TIa;
          }
          get KEa() {
            return this.Rp.local.$sa;
          }
          get ora() {
            return this.Rp.D.config.ref.snapshot?.id;
          }
          get ZB() {
            return !this.f7 && this.je === 30 && !this.Lh.O2a;
          }
          get S2() {
            return this.store.S2;
          }
          get ki() {
            return this.Rp.local.selected;
          }
          get IAb() {
            return this.ZB && this.ki && this.vg.isInitialized;
          }
          get vg() {
            return this.Rp.local.vg;
          }
          get D() {
            return this.Rp.D;
          }
          constructor(a, b, c, d, e, f, g) {
            this.store = a;
            this.Rp = b;
            this.je = c;
            this.kA = d;
            this.Lh = e;
            this.fqa = f;
            this.f7 = g;
            this.byb =
              (AKc.G(this),
              () => {
                if (!this.Rp.local.$sa) {
                  var h = this.vg;
                  h.store.JE &&
                    ((h.store.JE.width = 1),
                    (h.store.JE.height = 1),
                    (h.store.JE = void 0));
                }
              });
            this.m0a = (h, k) => {
              this.store.Zza?.();
              this.store.Yza?.();
              this.store.TXa?.();
              k && this.Rp.local.V9--;
              this.ZB
                ? (this.Rp.local.V9++,
                  (this.store.Zza = U7(
                    () => ({ selected: this.ki, scene: this.store.scene }),
                    ({ selected: l, scene: m }) => this.r0a(l, m),
                    { fireImmediately: !0 }
                  )),
                  (this.store.Yza = U7(
                    () => [
                      this.Rp.D.config.ref.rotationPhi,
                      this.Rp.D.config.ref.rotationTheta,
                    ],
                    this.Vxb,
                    { fireImmediately: !0 }
                  )),
                  (this.store.TXa = U7(() => [this.Rp.local.$sa], this.byb, {
                    fireImmediately: !1,
                  })))
                : (this.store.Zza = U7(
                    () => ({ selected: this.ki }),
                    ({ selected: l }) => this.s0a(l),
                    { fireImmediately: !0 }
                  ));
            };
            this.r0a = async (h, k) => {
              if (k != null)
                if (!h) this.vg.dispose();
                else if (!this.vg.Ld) {
                  var l = __c.z(k.files.c0a);
                  await this.Lh.NSb;
                  this.Lh.O2a ||
                    ((h = this.fqa.startSpan("select")),
                    await KKc(
                      this.fqa,
                      async () => {
                        await this.vg.initialize(l);
                      },
                      h
                    ),
                    h.end());
                }
            };
            this.s0a = (h) => {
              this.store.S2 = this.f7;
              h || (this.store.S2 = !1);
            };
            this.Vxb = () => {
              this.vg.Oe ||
                this.vg.ycb({
                  rotation: {
                    x: this.Rp.D.config.ref.rotationPhi,
                    y: this.Rp.D.config.ref.rotationTheta,
                    z: 0,
                  },
                });
            };
          }
        };
        var zKc = class {
          static G(a) {
            L(a, { scene: V7.ref, S2: V7.ref });
          }
          constructor() {
            this.Yza = (zKc.G(this), void 0);
            this.S2 = !1;
          }
        };
        var cLc = class {
          startSpan(a, b) {
            a = `scene.${a}`;
            return b
              ? this.fb.startSpan(a, b)
              : this.fb.xi(a, {
                  Qq: { name: `editor.${a}`, performance: { zJ: !0 } },
                });
          }
          constructor(a) {
            this.fb = a;
          }
        };
        var dLc = __c.uc("5eb77351", !1),
          eLc =
            (navigator != null &&
              !!navigator.userAgent.match(/iphone|ipad/gi)) ||
            dLc,
          fLc = class {
            static G(a) {
              L(a, { cva: V7.ref });
            }
            get O2a() {
              return this.cva;
            }
            get NSb() {
              this.$Fa && this.$Fa();
              this.P4 || (this.P4 = NKc(this));
              return this.P4;
            }
            get canvas() {
              this.AQ || (this.AQ = Q7());
              return this.AQ;
            }
            get Thb() {
              return this.HQ;
            }
            getImageData() {
              __c.x(this.HQ != null, "WebGlRenderer is not initialized");
              return this.HQ.readPixels();
            }
            constructor(a) {
              this.J = a;
              this.AQ = (fLc.G(this), void 0);
              this.Fba = [];
              this.cva = !1;
              eLc || ((this.AQ = Q7()), (this.P4 = NKc(this)));
            }
          };
        var gLc = __c.UZ()(() => ({
          LYb(a, b, c) {
            return {
              data: {
                D: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: void 0,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              P: { width: b, height: c },
            };
          },
          MYb(a, b, c, d) {
            return {
              data: {
                D: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: b,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              P: { width: c, height: d },
            };
          },
        }));
        var hLc = __c.e_({
          D: __c.d_({
            scene: y0.Mm(1, "SceneRef"),
            config: y0.Mwa(2, {
              snapshot: y0.$Gb(1, "MediaRef"),
              rotationPhi: y0.fYa(2, { min: 0, max: 6.284 }),
              rotationTheta: y0.fYa(3, { min: -1.571, max: 1.571 }),
            }),
          }),
        });
        var iLc, jLc;
        iLc = __c.uc("646956e3", !1);
        jLc = __c.GZ()(({ wi: a, ZL: b }) => {
          var c = b.fb;
          b = b.J.ag("scene_widget_rendering");
          c = new cLc(c);
          const d = new fLc(b),
            e = new UKc(d),
            f =
              navigator != null &&
              !!navigator.userAgent.match(/iphone|ipad/gi) &&
              !iLc;
          b = { f7: f };
          a = IKc({ kA: a.kA, Lh: d, fqa: c, exports: b, f7: f });
          return {
            metadata: {
              type: "scene",
              name: __c.K("6XoKOg"),
              YV: (g) => g.scene.id,
            },
            C6: () => {
              const g = rKc({ Ika: e, Lh: d });
              return new VKc(g);
            },
            D: __c.FZ(a),
            exports: b,
          };
        });
        __c.x_ = {};
        __c.x_.rVb = VKc;
        __c.x_.Bh = gLc;
        __c.x_.Qo = jLc;
        __c.x_.Ch = hLc;
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/c32d16f4c7233eca.js.map
