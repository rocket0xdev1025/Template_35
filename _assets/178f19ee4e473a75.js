(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [58724],
  {
    /***/ 92309: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(91197);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var q9b = __webpack_require__(322594),
          r9b = q9b.jsx,
          s9b = q9b.jsxs;
        var t9b = __webpack_require__,
          u9b = t9b(208463),
          v9b = t9b.n_x(u9b)();
        var w9b = __webpack_require__,
          x9b = w9b(802496),
          y9b = w9b.n_x(x9b);
        var z9b = __webpack_require__(205482).Component;
        var A9b = __webpack_require__(277049)._;
        var HX = __webpack_require__(186901),
          B9b = HX.EW,
          C9b = HX.m3,
          D9b = HX.mJ,
          E9b = HX.sH,
          IX = HX.XI;
        var F9b = __webpack_require__(269018)._;
        var G9b = __webpack_require__(536618),
          H9b = G9b.iB,
          I9b = G9b.Sx;
        var J9b, K9b, L9b, JX, N9b, M9b;
        new ((J9b = class extends A9b {
          constructor() {
            super(JX);
            K9b();
          }
        }),
        (() => {
          class a extends (L9b = z9b) {
            static G(b) {
              __c.L(b, {
                uo: E9b.ref,
                Sza: B9b,
                componentDidMount: IX,
                j7a: IX.bound,
                onError: IX.bound,
                rY: IX.bound,
              });
            }
            get Sza() {
              const b = this.props.store,
                c = this.props.Ev;
              return !this.uo || (c && !b.Db && !b.Sc?.size);
            }
            componentDidMount() {
              const b = this.props.store;
              this.props.controller.onWaiting();
              __c.gc(this, [
                D9b(
                  () => ({ data: b.animationData?.get(), Sc: b.Sc }),
                  ({ data: c, Sc: d }) => c && this.loadAnimation(c, d),
                  { fireImmediately: !0, equals: C9b.shallow }
                ),
                D9b(
                  () => this.uo && b.Db,
                  (c) => (c ? this.play() : this.pause()),
                  { fireImmediately: !0 }
                ),
                this.rY,
              ]);
            }
            render() {
              const b = this.props.Ev,
                c = this.props.store,
                d = c.Va,
                { ariaHidden: e, ariaLabel: f } = __c.RU(d);
              return s9b("div", {
                className: "UB_yHg",
                children: [
                  this.Sza &&
                    r9b("img", {
                      className: "KYSIUA",
                      src: c.AO,
                      ref: this.q9a,
                      alt: d,
                    }),
                  r9b("div", {
                    className: v9b("KYSIUA", b && this.Sza && "BUTEbw"),
                    ref: this.C0,
                    role: d ? "img" : void 0,
                    "aria-label": f,
                    "aria-hidden": e,
                  }),
                ],
              });
            }
            j7a() {
              this.uo = !0;
              this.props.controller.onCanPlay();
            }
            onError() {
              this.props.controller.onError();
              this.rY();
            }
            seek(b) {
              this.eo &&
                ((b *= 1e3),
                this.props.store.Db
                  ? this.eo.goToAndPlay(b)
                  : this.eo.goToAndStop(b));
            }
            Yo() {
              if (!this.uo) {
                var b = this.q9a.current;
                return b ? __c.xw(b) : void 0;
              }
              if ((b = this.C0.current))
                if ((b = b.getElementsByTagName("svg")[0]))
                  return (
                    (b = M9b(b)),
                    b.state === "fulfilled"
                      ? { type: "image", element: b.value }
                      : void 0
                  );
            }
            play() {
              this.eo?.play();
            }
            pause() {
              this.eo?.pause();
            }
            rY() {
              this.eo &&
                (this.eo.destroy(), (this.eo = void 0), (this.uo = !1));
            }
            loadAnimation(b, c) {
              const d = __c.z(this.C0.current);
              b = JSON.parse(JSON.stringify(b));
              c && c.size > 0 && __c.c9b(b, c);
              this.rY();
              this.eo = y9b().loadAnimation({
                autoplay: !1,
                animationData: b,
                container: d,
                renderer: "svg",
                loop: !0,
              });
              if ((c = d.getElementsByTagName("svg")[0]))
                c.style.transform === "translate3d(0px, 0px, 0px)" &&
                  (c.style.transform = ""),
                  this.eo.goToAndStop(this.props.store.currentTime * 1e3),
                  this.eo.addEventListener("DOMLoaded", this.j7a),
                  this.eo.addEventListener("error", this.onError),
                  this.eo.addEventListener("data_failed", this.onError);
            }
            constructor(...b) {
              super(...b);
              this.C0 = (JX.G(this), __c.au());
              this.q9a = __c.au();
              this.uo = !1;
            }
          }
          ({
            c: [JX, K9b],
          } = F9b(a, [], [__c.pc], L9b));
        })(),
        J9b)();
        N9b = new XMLSerializer();
        M9b = H9b((a) => {
          a = new Blob([N9b.serializeToString(a)], { type: "image/svg+xml" });
          const b = URL.createObjectURL(a);
          return I9b(__c.dT(b).finally(() => URL.revokeObjectURL(b)));
        });
        __c.oTb = {
          get hlb() {
            return JX;
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/178f19ee4e473a75.js.map
