(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [6712],
  {
    /***/ 258551: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var d_;
        var y0;
        var L = __c.L;
        var Ra = __c.Ra;
        var $I = __c.$I;
        var G = __c.G;
        var Y = __c.Y;
        var X = __c.X;
        var H = __c.H;
        var fD = __c.fD;
        var sf = __c.sf;
        var Id = __c.Id;
        var jd = __c.jd;
        var A = __c.A;
        var u = __c.u;
        var z = __c.z;
        var x = __c.x;
        var Ca = __c.Ca;
        var mac,
          oac,
          nac,
          qac,
          HZ,
          sac,
          uac,
          tac,
          JZ,
          xac,
          Bac,
          Fac,
          zac,
          OZ,
          PZ,
          Mac,
          Sac,
          NZ,
          Uac,
          QZ,
          Yac,
          Zac,
          cbc,
          VZ,
          WZ,
          dbc,
          XZ,
          YZ,
          ZZ,
          ebc,
          $Z,
          a_,
          b_,
          fbc,
          c_,
          gbc,
          ibc,
          jbc,
          kbc,
          lbc,
          mbc,
          nbc,
          pbc,
          f_,
          g_,
          obc,
          qbc,
          rbc,
          sbc,
          tbc,
          i_,
          ubc,
          vbc,
          xbc,
          ybc,
          Ebc,
          Lbc,
          Wbc,
          Xbc,
          Ybc,
          Zbc,
          A_,
          B_,
          C_,
          acc,
          bcc,
          ccc,
          D_,
          fcc,
          dcc,
          F_,
          H_,
          G_,
          gcc,
          I_,
          icc,
          kcc,
          lcc,
          ncc,
          L_,
          occ,
          Acc,
          Bcc,
          Ccc,
          Dcc,
          Q_,
          pcc,
          M_,
          ucc,
          xcc,
          zcc,
          O_,
          wcc,
          Ecc,
          mcc,
          Gcc,
          Hcc,
          Icc,
          Fcc,
          Lcc,
          Mcc,
          Occ,
          S_,
          bdc,
          Zcc,
          Xcc,
          U_,
          Pcc,
          Scc,
          Rcc,
          Ycc,
          Qcc,
          cdc,
          Wcc,
          Ucc,
          Tcc,
          T_,
          gdc,
          W_,
          hdc,
          idc,
          jdc,
          ldc,
          kdc,
          ndc,
          Z_,
          udc,
          xdc,
          wdc,
          Fbc,
          d0,
          zdc,
          Pbc,
          Qbc,
          Rbc,
          Bdc,
          Cdc,
          Ddc,
          e0,
          Edc,
          Hdc,
          Jdc,
          g0,
          h0,
          i0,
          j0,
          zbc,
          Kdc,
          Odc,
          Qdc,
          Pdc,
          Sdc,
          Rdc,
          Tdc,
          Udc,
          Vdc,
          Zdc,
          $dc,
          bec,
          cec,
          dec,
          eec,
          fec;
        mac = function (a, b) {
          b = a.Ci.get(__c.Tp(b));
          return b != null ? a.eY.get(b) : void 0;
        };
        __c.FZ = function (a) {
          return { type: 1, Component: a };
        };
        __c.GZ = function () {
          return (a) => a;
        };
        oac = function (a, b) {
          b = nac(b);
          return a.origin !== b.OOa
            ? {
                valid: !1,
                error: {
                  message: "Message origin does not match iframe src origin",
                  extra: new Map([
                    ["msg.origin", a.origin],
                    ["iframe.origin", b.OOa],
                  ]),
                },
              }
            : { valid: !0, nca: b.nca };
        };
        nac = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return pac;
          a = new URL(a).origin;
          return a === "null" ? pac : { OOa: a, nca: a };
        };
        qac = function (a, b) {
          if (!a) return Ca("missing 'data' field in MessageEvent");
          const c = a.sandboxCommsSource ?? a.source;
          return c
            ? c !== "iframe"
              ? Ca("invalid source")
              : a.clientId !== b
              ? Ca("unknown client id")
              : (0, __c.Ba)()
            : Ca("'source' is missing in MessageEvent data object");
        };
        HZ = function (a, b) {
          x(!a.disposed, "IFrameHostConnector disposed");
          x(!a.i6.has(b), "Callback already registered");
          a.i6.add(b);
        };
        sac = function (a) {
          a.ke = setTimeout(() => {
            a.v$a(new rac());
          }, 500);
        };
        uac = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.W1.get(d);
          if (e) {
            a.iaa.F5.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.iaa.F5.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.iaa.F5.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof IZ) {
                var h = k;
                k.code === "internal_error"
                  ? a.J.Vb(k, {
                      Ke: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.sJb));
              } else
                a.hKb
                  ? a.J.Vb(k, {
                      Ke: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.dsb.error(k);
              g = tac(a.iaa, c, g, b);
              g.ok ||
                a.J.SR(g.error, {
                  Ke: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.rub)
                try {
                  k(h);
                } catch (l) {
                  a.J.KG(l, { Ke: "Error executing errorObserver" });
                }
          } else
            (h = tac(
              a.iaa,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.J.SR(h.error, {
                  Ke: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        tac = function (a, b, c, d) {
          return a.F5.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        JZ = function (a, b, c, d, e) {
          a.handle(b, async (f) => {
            if (f === void 0)
              throw new IZ({
                code: "internal_error",
                message: `${b}: request cannot be undefined.`,
              });
            f = c.za(f);
            f = await d(f);
            if (e) return e.Ga(f);
          });
        };
        xac = function (a, b) {
          JZ(a, "INIT_DATA", vac, (c) => b.l0a(c), KZ);
          JZ(a, "DATA_RENDER_READY", wac, (c) => b.q0a(c), LZ);
        };
        Bac = async function (a, b) {
          a = await a.EY.request("INTERACTION_MODE_CHANGED", yac.Ga(b));
          a = zac(a, "INTERACTION_MODE_CHANGED");
          return Aac.za(a);
        };
        Fac = function (a, b) {
          JZ(a, "SELECTION_CHANGED", Cac, (c) => b.Zxb(c), MZ);
          JZ(a, "TEXT_CONTENT_CHANGED", Dac, (c) => b.ayb(c), Eac);
        };
        zac = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        OZ = async function (a, b) {
          a = await a.EY.request("RENDER_ELEMENT", Gac.Ga(b));
          a = NZ(a, "RENDER_ELEMENT");
          return Hac.za(a);
        };
        PZ = async function (a, b) {
          a = await a.EY.request("SET_CAPABILITY", Iac.Ga(b));
          a = NZ(a, "SET_CAPABILITY");
          return Jac.za(a);
        };
        Mac = async function (a, b) {
          a = await a.EY.request("SET_EDIT_PANEL_VALUE", Kac.Ga(b));
          a = NZ(a, "SET_EDIT_PANEL_VALUE");
          return Lac.za(a);
        };
        Sac = function (a, b) {
          JZ(a, "INIT_ELEMENT", Nac, (c) => b.WCa(c), Oac);
          JZ(a, "SET_CONFIG", Pac, (c) => b.$xb(c), Qac);
          JZ(a, "RESIZE_EVENT", Rac, (c) => b.ZCa(c));
        };
        NZ = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        Uac = function (a, b) {
          JZ(a, "RESIZE_EVENT", Tac, (c) => b.ZCa(c));
        };
        QZ = function (a, b, c) {
          const d = ({ Kpb: e }) => {
            var f = e.clientId;
            e = e.$Ib;
            if (f !== c.clientId || e !== b)
              return Promise.resolve({
                type: "connection_request_not_matched",
              });
            e = z(a.HY.get(b));
            f = z(e.get(f));
            if (f.connected)
              return Promise.resolve({ type: "already_connected" });
            const { port1: g, port2: h } = new MessageChannel();
            e = new Vac(g, a.J);
            c.Hha(e);
            f.connected = !0;
            return Promise.resolve({
              type: "connection_request_matched",
              port: h,
            });
          };
          z(a.HY.get(b)).set(c.clientId, { handler: d, connected: !1 });
          return d;
        };
        Yac = function (a, b, { kK: c, M2: d, L2: e, N2: f }) {
          a.HY.has(b) ||
            (a.HY.set(b, new Map()),
            HZ(
              a.w9,
              QZ(a, b, {
                clientId: "canva-code-data-sdk",
                Hha: (g) => {
                  const { sWa: h } = c();
                  xac(g, h);
                },
              })
            ),
            d &&
              HZ(
                a.w9,
                QZ(a, b, {
                  clientId: "canva-code-element-sdk",
                  Hha: (g) => {
                    const { htb: h } = d(new Wac(g));
                    Sac(g, h);
                  },
                })
              ),
            e &&
              HZ(
                a.w9,
                QZ(a, b, {
                  clientId: "canva-code-editing-sdk",
                  Hha: (g) => {
                    const { btb: h } = e(new Xac(g));
                    Fac(g, h);
                  },
                })
              ),
            f &&
              HZ(
                a.w9,
                QZ(a, b, {
                  clientId: "canva-code-resizing-sdk",
                  Hha: (g) => {
                    const { uKb: h } = f();
                    Uac(g, h);
                  },
                })
              ));
        };
        Zac = function (a) {
          a = new DOMParser().parseFromString(a, "text/html");
          a = z(a.querySelector("iframe"));
          return {
            id: a.id,
            src: z(a.getAttribute("src")),
            sandbox: a.sandbox.toString(),
            allow: a.allow,
            allowFullscreen: a.allowFullscreen,
          };
        };
        cbc = function ({ je: a, Vu: b, Mw: c, ab: d, J: e, NOa: f }) {
          const g = __c.Ea(() => new $ac(e, f))(),
            h = new abc(g, e),
            k = (l, m) =>
              e.error(l, {
                Ke: "codelet: ",
                extra: new Map(Object.entries(m)),
              });
          return RZ((l) => {
            const { sJa: m, dOa: n } = SZ(
                () => ({
                  sJa: (q) =>
                    Yac(h, q, { kK: l.kK, M2: l.M2, L2: l.L2, N2: l.N2 }),
                  dOa: (q) => {
                    const r = h.HY.get(q);
                    if (r) {
                      for (const w of r.keys()) {
                        var t = r.get(w);
                        if (t?.handler) {
                          var v = h.w9;
                          t = t.handler;
                          x(!v.disposed, "IFrameHostConnector disposed");
                          v.i6.delete(t);
                        }
                      }
                      h.HY.delete(q);
                    }
                  },
                }),
                [l.kK, l.M2, l.L2, l.N2]
              ),
              p = SZ(
                () => (q) =>
                  TZ(bbc, {
                    className: q.className,
                    url: l.url,
                    embed: q.embed,
                    I2: q.I2,
                    sJa: m,
                    dOa: n,
                  }),
                [m, n, l.url]
              );
            return TZ(__c.sx, {
              url: l.url,
              store: b,
              Qn: c,
              kI: k,
              ab: d,
              kV: a > 10,
              hk: l.hk || !1,
              HF: l.HF,
              ojb: p,
            });
          });
        };
        __c.UZ = function () {
          return (a) => a;
        };
        VZ = function (a, b) {
          return b.map((c) => ({ type: a, id: c.id, version: c.version }));
        };
        WZ = function (a) {
          return { kind: 0, LO: a };
        };
        dbc = function () {
          return { kind: 1 };
        };
        XZ = function (a) {
          return { kind: 3, range: a };
        };
        YZ = function (a) {
          return { kind: 2, range: a };
        };
        ZZ = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        ebc = function (a) {
          return { kind: 5, itemType: a };
        };
        $Z = function (a) {
          return { kind: 7, name: a };
        };
        a_ = function (a) {
          return { kind: 8, itemType: a };
        };
        b_ = function (a) {
          return { kind: 10, fields: a };
        };
        fbc = function (a, ...b) {
          return { kind: 11, JXa: a, Oh: b };
        };
        c_ = function (a, b, c) {
          return (d, ...e) => ({ key: d, HLa: a, UF: b, type: c(...e) });
        };
        d_ = __c.d_ = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        gbc = function (a) {
          switch (a.kind) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return !1;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              return !0;
            default:
              throw new A(a);
          }
        };
        __c.e_ = function (a) {
          return () => ({ ...hbc, ...a });
        };
        ibc = function (a, b) {
          a = { ...a.aZ };
          b.pb.every((c) => !!c.fill.Od.ref?.image && !!c.fill.Od.ref?.video) &&
            (a.nt = !0);
          return a;
        };
        jbc = function (a, b) {
          a = { ...a.aZ };
          b.sb.every((c) => !!c.Od.ref?.text) && (a.nt = !0);
          return a;
        };
        kbc = function (a, b) {
          a = { ...a.aZ };
          b.cells.every(
            (c) => !!c.fill.Od.ref?.image && !!c.fill.Od.ref?.video
          ) && (a.nt = !0);
          return a;
        };
        lbc = function (a, b) {
          switch (b.type) {
            case "rect":
              return (
                (a = { ...a.aZ }),
                b.fill.Od.ref?.image && b.fill.Od.ref?.video && (a.nt = !0),
                a
              );
            case "shape":
              return ibc(a, b);
            case "text":
              return (a = { ...a.aZ }), b.Od.ref?.text && (a.nt = !0), a;
            case "chart":
              return { ...a.aZ };
            case "line":
              return jbc(a, b);
            case "grid":
              return kbc(a, b);
            default:
              throw new A(b);
          }
        };
        mbc = function (a, b) {
          return a.e.classes.w4.create(
            {},
            {
              U: { fill: f_(a, b.fill) },
              attributes: { ...g_(a, b), V: () => b.V },
            }
          );
        };
        nbc = function (a, b) {
          return a.e.classes.lfa.create(
            {},
            {
              U: {
                pb: a.e.list(b.pb.map((c) => a.createPath(c))),
                sb: b.sb,
                resizeMode: b.resizeMode,
                slice: b.slice,
              },
              attributes: {
                ...g_(a, b),
                jj: () => b.jj,
                viewBox: () => b.viewBox,
              },
            }
          );
        };
        pbc = function (a, b) {
          return a.e.classes.bua.create(
            {},
            {
              U: {
                cells: a.e.$c(
                  Object.fromEntries(
                    Array.from(b.cells.entries()).map(([c, d]) => [
                      c,
                      obc(a, d),
                    ])
                  )
                ),
              },
              attributes: { ...g_(a, b), layout: () => b.layout },
            }
          );
        };
        f_ = function (a, b) {
          const c = { ref: void 0, set: () => {} };
          return a.e.classes.r4.create(
            {},
            {
              U: {
                image: a.e.computed(() =>
                  qbc(a.Od, c, b.Od.ref?.video).ref == null
                    ? rbc(a.Od, b.image, b.Od.ref?.image)
                    : c
                ),
                video: a.e.computed(() =>
                  rbc(a.Od, c, b.Od.ref?.image).ref == null
                    ? qbc(a.Od, b.video, b.Od.ref?.video)
                    : c
                ),
                Za: b.Za,
              },
              attributes: {
                Im: () => b.Im,
                color: () => b.color,
                Ra: () => b.Ra,
                locked: () => b.locked,
                Ug: () => b.Ug,
                Ql: () => b.Ql,
                ed: () => b.ed,
                flipX: () => b.flipX,
                flipY: () => b.flipY,
              },
            }
          );
        };
        g_ = function (a, b) {
          return {
            height: () => b.height,
            width: () => b.width,
            top: () => b.top,
            left: () => b.left,
            rotation: () => b.rotation,
            uh: () => lbc(a.M3a, b),
            locked: !0,
          };
        };
        obc = function (a, b) {
          return a.e.classes.aua.create(
            {},
            {
              U: { fill: f_(a, b.fill), stroke: b.stroke },
              attributes: { V: () => b.V },
            }
          );
        };
        qbc = function (a, b, c) {
          const d = c ? a.Od?.get(c) : void 0;
          return {
            ref: (d && sbc(d, "video_fill"))?.video.ref ?? b.ref,
            set: (e) =>
              tbc(a, { type: "video_fill", value: { ...__c.hD, video: e } }, c),
          };
        };
        rbc = function (a, b, c) {
          const d = c ? a.Od?.get(c) : void 0;
          return {
            ref: (d && sbc(d, "image_fill"))?.image.ref ?? b.ref,
            set: (e) =>
              tbc(a, { type: "image_fill", value: { ...__c.hD, image: e } }, c),
          };
        };
        sbc = function (a, b) {
          if (a.type !== b)
            throw Error(`Expected override type ${b} but got ${a.type}`);
          return a.value;
        };
        tbc = function (a, b, c) {
          if (!c)
            throw Error(
              "No override key is available, but this is being set on an instance. This is likely an error with the locking logic."
            );
          a.Od.set(c, b);
        };
        i_ = async function (a, b) {
          [a] = await a.Cja([b]);
          return new h_({ id: b.id, url: a.fonts[0].files[0].url });
        };
        ubc = async function (a, b, c) {
          a = await i_(a, c);
          return PZ(b, a);
        };
        vbc = async function (a, b, c, d, e, f, g) {
          try {
            const h = b.$ja.ref?.first(),
              k = a.wa,
              l = await OZ(c, {
                config: b.config,
                PS: k != null && h != null ? await i_(k, h) : void 0,
              });
            a.config.AE?.Usa({ ...l, qI: l.qI?.size }, b, d, e, f, g);
          } catch (h) {
            a.J.KG(h);
          } finally {
            a.fLa();
          }
        };
        xbc = function (a, b) {
          const c = new Map();
          return j_(
            () => {
              const d = new Map();
              a.config.forEach((e, f) => {
                let g;
                const h = c.get(f);
                e.textContent !== h?.textContent &&
                  (g = { ...(g ?? new k_({})), textContent: e.textContent });
                e.backgroundColor !== h?.backgroundColor &&
                  (g = {
                    ...(g ?? new k_({})),
                    backgroundColor: e.backgroundColor,
                  });
                g && d.set(f, g);
                c.set(f, { ...e });
              });
              return d;
            },
            async (d) => b.uca(new wbc({ config: d })),
            { fireImmediately: !0 }
          );
        };
        ybc = function (a, b) {
          return j_(
            () => a.t4b,
            (c) => Bac(b, new yac({ mode: c })),
            { fireImmediately: !0 }
          );
        };
        Ebc = function (a) {
          function b(d, e) {
            var f = c;
            e = e();
            u(!f.gca.has(d));
            e = { document: zbc(f.UVa(d, e.document)), D: zbc(f.UVa(d, e.D)) };
            f.gca.set(d, e);
            return { id: d, Nq: e };
          }
          const c = a.uPa;
          return {
            Ys: b("w:wnJF5T87v", Abc),
            uZ: b("w:xB9fK2LmQ", Bbc),
            Mj: a.AAa
              ? Promise.all([
                  __webpack_require__.me(288639).then(() => __c.l_),
                  __webpack_require__.me(229274).then(() => __c.m_),
                  __webpack_require__.me(89563).then(() => __c.n_),
                  __webpack_require__.me(706140).then(() => __c.o_),
                  __webpack_require__.me(58313).then(() => __c.p_),
                  __webpack_require__.me(879434).then(() => __c.q_),
                  __webpack_require__.me(181007).then(() => __c.r_),
                  __webpack_require__.me(354456).then(() => __c.s_),
                  __webpack_require__.me(920429).then(() => __c.t_),
                  __webpack_require__.me(580825).then(() => __c.u_),
                ]).then(([d, e, f, g, h, k, l, m, n, p]) => ({
                  dZ: b("w:cm9wgGptP", d.Ch),
                  fZ: b("w:yLMS4dWnl", e.Ch),
                  gZ: b("w:2flp30CGQ", f.Ch),
                  hZ: b("w:1Nv6K6Dtv", g.Ch),
                  iZ: b("w:5Nv6K6Dtv", h.Ch),
                  jZ: b("w:6Nv6K6Dtv", k.Ch),
                  kZ: b("w:7Nv6K6Dtv", l.Ch),
                  lZ: b("w:8Nv6K6Dtv", m.Ch),
                  mZ: b("w:9Nv6K6Dtv", n.Ch),
                  eZ: b("w:sSrc7m4Q3", p.Ch),
                }))
              : void 0,
            Sy: b("w:JR4G8hDDg", Cbc),
            uY: b("w:KS5H9iEEh", Dbc),
            form: __webpack_require__
              .me(649e3)
              .then(() => __c.v_)
              .then((d) => b("widget:form", d.Ch)),
            SN: a.HAa
              ? __webpack_require__
                  .me(320784)
                  .then(() => __c.w_)
                  .then((d) => b("w:K7mQ9xR3p", d.Ch))
              : void 0,
            scene: a.MAa
              ? __webpack_require__
                  .me(290120)
                  .then(() => __c.x_)
                  .then((d) => b("w:2pbXJMtm1", d.Ch))
              : void 0,
            button: __webpack_require__
              .me(856598)
              .then(() => __c.y_)
              .then((d) => b("w:PQccHDsCJ", d.Ch)),
          };
        };
        Lbc = function (a) {
          function b({ id: f, Nq: g }, h, k) {
            var l = e;
            h = h(k);
            k = z(l.iKa.gca.get(f));
            u(k.D === g.D);
            u(!l.YVa.has(f));
            g = Fbc(f, h, g);
            l.YVa.set(f, g);
            return g;
          }
          const c = new Gbc(),
            d = a.vPa,
            e = a.tPa;
          return {
            bhc: c,
            Mj: d.Mj
              ? Promise.all([
                  d.Mj,
                  __webpack_require__.me(288639).then(() => __c.l_),
                  __webpack_require__.me(229274).then(() => __c.m_),
                  __webpack_require__.me(89563).then(() => __c.n_),
                  __webpack_require__.me(706140).then(() => __c.o_),
                  __webpack_require__.me(58313).then(() => __c.p_),
                  __webpack_require__.me(879434).then(() => __c.q_),
                  __webpack_require__.me(181007).then(() => __c.r_),
                  __webpack_require__.me(354456).then(() => __c.s_),
                  __webpack_require__.me(920429).then(() => __c.t_),
                  __webpack_require__.me(580825).then(() => __c.u_),
                ]).then(([f, g, h, k, l, m, n, p, q, r, t]) => ({
                  dZ: b(f.dZ, g.Bh, void 0),
                  fZ: b(f.fZ, h.Bh, void 0),
                  gZ: b(f.gZ, k.Bh, void 0),
                  hZ: b(f.hZ, l.Bh, void 0),
                  iZ: b(f.iZ, m.Bh, void 0),
                  jZ: b(f.jZ, n.Bh, void 0),
                  kZ: b(f.kZ, p.Bh, void 0),
                  lZ: b(f.lZ, q.Bh, void 0),
                  mZ: b(f.mZ, r.Bh, void 0),
                  eZ: b(f.eZ, t.Bh, void 0),
                }))
              : void 0,
            scene: d.scene
              ? Promise.all([
                  d.scene,
                  __webpack_require__.me(290120).then(() => __c.x_),
                ]).then(([f, g]) => b(f, g.Bh, void 0))
              : void 0,
            button: Promise.all([
              d.button,
              __webpack_require__.me(856598).then(() => __c.y_),
            ]).then(([f, g]) => b(f, g.Bh, { Zia: c.Zia })),
            Sy: b(d.Sy, Hbc, void 0),
            uY: b(d.uY, Ibc, void 0),
            form: Promise.all([
              d.form,
              __webpack_require__.me(649e3).then(() => __c.v_),
            ]).then(([f, g]) => b(f, g.Bh, void 0)),
            Ys: b(d.Ys, Jbc, void 0),
            uZ: b(d.uZ, Kbc, void 0),
            SN: d.SN
              ? Promise.all([
                  d.SN,
                  __webpack_require__.me(320784).then(() => __c.w_),
                ]).then(([f, g]) => b(f, g.Bh, void 0))
              : void 0,
          };
        };
        Wbc = function (a) {
          const b = a.vPa,
            c = a.Iea,
            d = a.kg,
            e = a.ZL,
            f = a.wi;
          class g extends Mbc {
            async load() {
              const [m, n, p] = await Promise.all([
                  this.Rn,
                  this.loadModule(),
                  Promise.resolve(this.wi),
                ]),
                q = m.id,
                r = m.Nq;
              var t = n.Qo({
                  ZL: {
                    ...e,
                    fb: d.lz(`widgets.rendering.clients.${this.qm}`),
                  },
                  wi: p,
                }),
                v = z(c.iKa.gca.get(q));
              u(v.D === r.D);
              u(!c.nV.has(q));
              Nbc.has(q) || (__c.xAb.set(q, Obc), Nbc.add(q));
              const { mub: w, DFa: y } = Pbc(c, r, t);
              v = Qbc(c, r, t, y);
              t = {
                D: w,
                email: v,
                exports: t.exports,
                metadata: t.metadata,
                dEb: Rbc(r, t.metadata),
                DFa: y,
                e7: t.e7,
              };
              c.nV.set(q, t);
              return { id: q, Nq: r, Pba: t, qm: this.qm };
            }
            constructor(m) {
              super(m.id, m.loadModule);
              this.Rn = m.Rn;
              this.wi = m.wi;
              this.qm = m.qm ?? "default";
            }
          }
          const h = {
            Ys: new g({
              id: "w:wnJF5T87v",
              Rn: Promise.resolve(b.Ys),
              loadModule: () => __webpack_require__.me(196751).then(() => Sbc),
              wi: { zH: f.zH, bE: f.bE },
              qm: "blueprint",
            }),
            uZ: new g({
              id: "w:xB9fK2LmQ",
              Rn: Promise.resolve(b.uZ),
              loadModule: () => __webpack_require__.me(258551).then(() => Tbc),
              wi: { zH: f.zH },
              qm: "documentBlueprint",
            }),
            dZ: b.Mj
              ? new g({
                  id: "w:cm9wgGptP",
                  Rn: b.Mj.then((m) => m.dZ),
                  loadModule: () =>
                    __webpack_require__.me(288639).then(() => __c.l_),
                  wi: void 0,
                  qm: "demo1",
                })
              : null,
            fZ: b.Mj
              ? new g({
                  id: "w:yLMS4dWnl",
                  Rn: b.Mj.then((m) => m.fZ),
                  loadModule: () =>
                    __webpack_require__.me(229274).then(() => __c.m_),
                  wi: void 0,
                  qm: "demo2",
                })
              : null,
            gZ: b.Mj
              ? new g({
                  id: "w:2flp30CGQ",
                  Rn: Promise.resolve(b.Mj.then((m) => m.gZ)),
                  loadModule: () =>
                    __webpack_require__.me(89563).then(() => __c.n_),
                  wi: void 0,
                  qm: "demo3",
                })
              : null,
            hZ: b.Mj
              ? new g({
                  id: "w:1Nv6K6Dtv",
                  Rn: Promise.resolve(b.Mj.then((m) => m.hZ)),
                  loadModule: () =>
                    __webpack_require__.me(706140).then(() => __c.o_),
                  wi: void 0,
                  qm: "demo4",
                })
              : null,
            iZ: b.Mj
              ? new g({
                  id: "w:5Nv6K6Dtv",
                  Rn: Promise.resolve(b.Mj.then((m) => m.iZ)),
                  loadModule: () =>
                    __webpack_require__.me(58313).then(() => __c.p_),
                  wi: void 0,
                  qm: "demo5",
                })
              : null,
            jZ: b.Mj
              ? new g({
                  id: "w:6Nv6K6Dtv",
                  Rn: Promise.resolve(b.Mj.then((m) => m.jZ)),
                  loadModule: () =>
                    __webpack_require__.me(879434).then(() => __c.q_),
                  wi: void 0,
                  qm: "demo6",
                })
              : null,
            kZ: b.Mj
              ? new g({
                  id: "w:7Nv6K6Dtv",
                  Rn: Promise.resolve(b.Mj.then((m) => m.kZ)),
                  loadModule: () =>
                    __webpack_require__.me(181007).then(() => __c.r_),
                  wi: void 0,
                  qm: "demo7",
                })
              : null,
            lZ: b.Mj
              ? new g({
                  id: "w:8Nv6K6Dtv",
                  Rn: Promise.resolve(b.Mj.then((m) => m.lZ)),
                  loadModule: () =>
                    __webpack_require__.me(354456).then(() => __c.s_),
                  wi: void 0,
                  qm: "demo8",
                })
              : null,
            mZ: b.Mj
              ? new g({
                  id: "w:9Nv6K6Dtv",
                  Rn: Promise.resolve(b.Mj.then((m) => m.mZ)),
                  loadModule: () =>
                    __webpack_require__.me(920429).then(() => __c.t_),
                  wi: void 0,
                  qm: "demo9",
                })
              : null,
            eZ: b.Mj
              ? new g({
                  id: "w:sSrc7m4Q3",
                  Rn: Promise.resolve(b.Mj.then((m) => m.eZ)),
                  loadModule: () =>
                    __webpack_require__.me(580825).then(() => __c.u_),
                  wi: void 0,
                  qm: "demo10",
                })
              : null,
            Sy: new g({
              id: "w:JR4G8hDDg",
              Rn: Promise.resolve(b.Sy),
              loadModule: () => __webpack_require__.me(149342).then(() => Ubc),
              wi: { aX: f.aX, wa: f.wa, Pp: f.Pp },
              qm: "codelet",
            }),
            uY: new g({
              id: "w:KS5H9iEEh",
              Rn: Promise.resolve(b.uY),
              loadModule: () => __webpack_require__.me(761582).then(() => Vbc),
              wi: { aX: f.aX, Pp: f.Pp },
              qm: "codelet2",
            }),
            form: new g({
              id: "widget:form",
              Rn: b.form,
              loadModule: () =>
                __webpack_require__.me(649e3).then(() => __c.v_),
              wi: Promise.all([f.sla?.()]).then(([m]) => ({
                dwb: m,
                Eh: f.Eh,
              })),
              qm: "form",
            }),
            SN: b.SN
              ? new g({
                  id: "w:K7mQ9xR3p",
                  Rn: b.SN,
                  loadModule: () =>
                    __webpack_require__.me(320784).then(() => __c.w_),
                  wi: void 0,
                  qm: "navigationMenu",
                })
              : null,
            scene: b.scene
              ? new g({
                  id: "w:2pbXJMtm1",
                  Rn: b.scene,
                  loadModule: () =>
                    __webpack_require__.me(290120).then(() => __c.x_),
                  wi: { kA: f.kA },
                  qm: "scene",
                })
              : null,
            button: new g({
              id: "w:PQccHDsCJ",
              Rn: b.button,
              loadModule: () =>
                __webpack_require__.me(856598).then(() => __c.y_),
              wi: void 0,
              qm: "button",
            }),
          };
          a = new Set([
            "widget:form",
            "w:JR4G8hDDg",
            "w:wnJF5T87v",
            "w:2pbXJMtm1",
            "w:PQccHDsCJ",
          ]);
          const k = [];
          for (var l of Object.values(h))
            l && a.has(l.id) && k.push(l.Hn(Promise.resolve()));
          l = Promise.allSettled(k).then(() => {});
          return {
            nV: {
              Ys: h.Ys.Hn(l),
              uZ: h.uZ.Hn(l),
              Mj: b.Mj && {
                dZ: h.dZ.Hn(l),
                fZ: h.fZ.Hn(l),
                gZ: h.gZ.Hn(l),
                hZ: h.hZ.Hn(l),
                iZ: h.iZ.Hn(l),
                jZ: h.jZ.Hn(l),
                kZ: h.kZ.Hn(l),
                lZ: h.lZ.Hn(l),
                mZ: h.mZ.Hn(l),
                eZ: h.eZ.Hn(l),
              },
              Sy: h.Sy.Hn(l),
              uY: h.uY.Hn(l),
              form: h.form?.Hn(l) ?? void 0,
              SN: h.SN?.Hn(l) ?? void 0,
              scene: h.scene?.Hn(l) ?? void 0,
              button: h.button?.Hn(l) ?? void 0,
            },
            YZa: () => {
              const m = [];
              for (const n of Object.values(h))
                n && m.push(n.Hn(Promise.resolve()));
              return Promise.allSettled(m);
            },
          };
        };
        Xbc = function (a) {
          var b = { document: void 0, D: void 0 };
          const c = new Map();
          for (const d in b) a[d].$L.forEach((e, f) => c.set(f, e));
          return {
            $L: c,
            decode: (d) => {
              const e = new Map(),
                f = {};
              for (const g in d) {
                const h = a[g].decode(d[g]);
                h.bKa.forEach((k, l) => e.set(l, k));
                f[g] = h.data;
              }
              return { bKa: e, data: f };
            },
            encode: (d) => jd(b, (e, f) => a[f].encode(d[f])),
          };
        };
        Ybc = function (a) {
          return () => a;
        };
        Zbc = function (a) {
          return a();
        };
        A_ = function (a, b, c) {
          return new z_([a], b, c);
        };
        B_ = function (a, b, c, d) {
          return new z_([a, b], c, d);
        };
        C_ = function (a, b, c, d) {
          return new $bc(a, b, c, d);
        };
        acc = function (a, b) {
          return b(a);
        };
        bcc = function (a) {
          return (b, c) => ({ kind: 2, name: a, args: [b, c] });
        };
        ccc = function (a) {
          return (b) => ({ kind: 3, name: a, args: b });
        };
        D_ = function (a, b) {
          return a === b || b.map((c) => a.bEa(dcc(c)));
        };
        fcc = function (a, b) {
          return a.sGa(b).map((c) => new ecc(c, (d) => d.props[b]));
        };
        dcc = function (a) {
          u(a instanceof E_);
          return a;
        };
        F_ = function (a) {
          const b = new WeakMap();
          return function (c) {
            let d = b.get(c);
            d == null && ((d = a.call(this, c)), b.set(c, d));
            return d;
          };
        };
        H_ = function (a, b) {
          if (a === b) return !0;
          switch (typeof a) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              return !1;
            case "object":
              if (typeof b !== "object" || a.kind !== b.kind) return !1;
              switch (a.kind) {
                case "array":
                  return b.kind === "array" && G_(a.items, b.items);
                case "set":
                  var c;
                  if ((c = b.kind === "set"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : G_([...a], [...b]));
                  return c;
                case "map":
                  if ((c = b.kind === "map"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : G_(
                              [...a.keys(), ...a.values()],
                              [...b.keys(), ...b.values()]
                            ));
                  return c;
                case "record":
                  return b.kind === "record" && gcc(a.fields, b.fields);
                case "instance":
                  return b.kind === "instance" && a.instance === b.instance;
                default:
                  throw new A(a);
              }
            default:
              throw new A(a);
          }
        };
        G_ = function (a, b) {
          if (a === b) return !0;
          if (a.length !== b.length) return !1;
          for (let c = 0; c < a.length; c++) if (!H_(a[c], b[c])) return !1;
          return !0;
        };
        gcc = function (a, b) {
          if (a === b) return !0;
          const c = Object.keys(a),
            d = Object.keys(b),
            e = new Set([...c, ...d]);
          if (c.length !== e.size || d.length !== e.size) return !1;
          for (const f of e) if (!H_(a[f], b[f])) return !1;
          return !0;
        };
        I_ = function (a) {
          return typeof a === "string" ? JSON.stringify(a) : String(a);
        };
        icc = function (a, b) {
          return a.map((c) => b.map((d) => hcc[0](c, d)));
        };
        kcc = function (a, b, c) {
          return b.map((d) => jcc[a](d, c));
        };
        lcc = function (a, b) {
          return new J_(new K_(new Map(b), a.vars), a.A8);
        };
        ncc = function (a, b, c) {
          for (const [e, f] of c.A8) {
            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
            d = mcc(b, d, (g) => L_(a, g, f.body));
            b = new J_(b.vars, b.A8.define(e, d));
          }
          return L_(a, b, c.body);
        };
        L_ = function (a, b, c) {
          switch (c.kind) {
            case 1:
              return occ(c.value);
            case 2:
              const f = c.args.map((q) => L_(a, b, q));
              c = c.name;
              return typeof c === "string"
                ? b.A8.resolve(c).map((q) => pcc(q, f))
                : qcc[c].map((q) => M_(q, f));
            case 3:
              const g = c.args.map((q) =>
                q.kind !== 13 ? new rcc(L_(a, b, q)) : new scc(L_(a, b, q.L4b))
              );
              c = c.name;
              switch (c) {
                case 0:
                case 1:
                  var d = g.map((q) =>
                    q.MBa(
                      (r) => r.type,
                      (r) => r.type.WT()
                    )
                  );
                  return N_.union(...d)
                    .map(tcc[c])
                    .map((q) => ucc(q, g));
                default:
                  return vcc[c].map((q) => ucc(q, g));
              }
            case 4:
              d = c.name;
              var e = c.param;
              const h = c.body,
                k = L_(a, b, c.BY);
              c = k.type.WT();
              const l = mcc(b, [[e, c]], (q) => L_(a, q, h));
              return kcc(d, c, l.resultType).map((q) => wcc(q, k, l));
            case 5:
              const m = c.entries.map(([q, r]) => [L_(a, b, q), L_(a, b, r)]);
              c = N_.union(...m.map(([q]) => q.type));
              d = N_.union(...m.map(([, q]) => q.type));
              if (!D_(c, N_.primitive))
                throw Error(`key type is not a primitive: ${c}`);
              return icc(c, d).map((q) => xcc(q, m));
            case 6:
              const n = jd(c.fields, (q) => L_(a, b, q));
              c = jd(n, (q) => q.type);
              return (0, ycc[0])(c).map((q) => zcc(q, n));
            case 7:
              d = a.types.resolve(c.name);
              if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
              const p = L_(a, b, { kind: 6, fields: c.args });
              return d.LEb.map((q) => M_(q, [p], { zq: !0 }));
            case 8:
              return (d = L_(a, b, c.base)), Acc(d, c.ycc);
            case 9:
              return Bcc(b, c.name);
            case 10:
              return (d = Id(c.defs, (q) => L_(a, b, q))), Ccc(a, b, d, c.body);
            case 11:
              return (
                (d = L_(a, b, c.test).as(N_.bd)),
                (e = L_(a, b, c.kYb)),
                (c = L_(a, b, c.alternate)),
                Dcc(d, e, c)
              );
            case 12:
              return L_(a, b, c.body).computed();
            default:
              throw new A(c);
          }
        };
        occ = function (a) {
          switch (typeof a) {
            case "string":
              return O_(N_.string, a);
            case "number":
              return O_(N_.number, a);
            case "boolean":
              return O_(N_.bd, a);
            case "undefined":
              return O_(N_.undefined, a);
            default:
              throw new A(a);
          }
        };
        Acc = function (a, b) {
          return a.map((c) =>
            fcc(c, b).map(({ type: d, get: e }) => M_(new z_([c], d, e), [a]))
          );
        };
        Bcc = function (a, b) {
          return a.vars.resolve(b).map((c) => P_.of(c, (d) => d.resolve(b)));
        };
        Ccc = function (a, b, c, d) {
          const e = Id(c, (g) => g.type),
            f = Id(c, (g) => g.evaluate);
          return Ecc(L_(a, lcc(b, e), d), (g) => {
            const h = Id(f, (k) => k(g));
            return new K_(new Map(h), g);
          });
        };
        Dcc = function (a, b, c) {
          return b.map((d, e) =>
            c.map((f, g) => {
              f = N_.union(d, f);
              return P_.of(f, (h) => {
                const k = a(h),
                  l = e(h),
                  m = g(h);
                return () => (k() ? l() : m());
              });
            })
          );
        };
        Q_ = function (a) {
          return (b) => b(a);
        };
        pcc = function ({ Noa: a, resultType: b, evaluate: c }, d) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const e = Fcc(a, (f, g) => d[g].as(f));
          return P_.of(b, (f) => {
            const g = e.map(Q_(f));
            return c(f)(...g);
          });
        };
        M_ = function ({ Noa: a, resultType: b, apply: c }, d, e) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const f = Fcc(a, (g, h) => d[h].as(g));
          return P_.of(b, (g) => {
            g = f.map(Q_(g));
            return Gcc(e?.zq ? Hcc(c) : c, g);
          });
        };
        ucc = function ({ eIb: a, resultType: b, apply: c }, d) {
          let e;
          const f = d.map((g) =>
            g.rwa(
              (h) => h.as(a),
              (h) => h.as(e ?? (e = N_.BY(a)))
            )
          );
          return new P_(b, (g) => {
            const h = Q_(g),
              k = f.map((l) => l.rwa(h, h));
            return () => {
              const l = [];
              k.forEach((m) => {
                m.MBa(
                  (n) => l.push(n()),
                  (n) => l.push(...n())
                );
              });
              return c(l);
            };
          });
        };
        xcc = function (
          { keyType: a, valueType: b, resultType: c, apply: d },
          e
        ) {
          const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
          return new P_(c, (g) => {
            const h = f.map(([k, l]) => [k(g), l(g)]);
            return () => d(h.map(([k, l]) => [k(), l()]));
          });
        };
        zcc = function ({ Cmb: a, resultType: b, apply: c }, d) {
          const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
          if (e.length) throw Error(`too few arguments (missing ${e})`);
          const f = Icc(a, (g, h) => d[h].as(g));
          return new P_(b, (g) => {
            const h = jd(f, Q_(g));
            return () => {
              var k = jd(h, Zbc);
              return c(k);
            };
          });
        };
        O_ = function (a, b) {
          const c = Ybc(b);
          return new P_(a, () => c);
        };
        wcc = function (
          { itemType: a, Ymb: b, resultType: c, reduce: d },
          e,
          f
        ) {
          const g = f.as([a], b),
            h = e.as(N_.BY(a));
          return new P_(c, (k) => {
            const l = h(k),
              m = g(k),
              n = Hcc((p) => {
                p = p.map(Ybc);
                return [p, p.map(m)];
              });
            return () => {
              const [p, q] = n(l());
              return d(p, q);
            };
          });
        };
        Ecc = function (a, b) {
          const c = a.evaluate;
          return new P_(a.type, (d) => c(b(d)));
        };
        mcc = function (a, b, c) {
          const d = b.map((f) => f[0]),
            e = b.map((f) => f[1]);
          return acc(e, (f) =>
            c(lcc(a, new Map(b))).map(
              (g, h) =>
                new Jcc(f, g, (k) => (...l) => {
                  const m = new Map(d.map((n, p) => [n, l[p]]));
                  return h(new K_(new Map(m), k));
                })
            )
          );
        };
        Gcc = function (a, b) {
          switch (b.length) {
            case 0:
              return a;
            case 1:
              const [c] = b;
              return () => a(c());
            case 2:
              const [d, e] = b;
              return () => a(d(), e());
            default:
              return () => {
                var f = b.map(Zbc);
                return a(...f);
              };
          }
        };
        Hcc = function (a) {
          let b;
          return (...c) => {
            if (
              b &&
              b.ehb.length === c.length &&
              b.ehb.every((e, f) => R_.Yg(e, c[f]))
            )
              return b.v;
            const d = a(...c);
            b = { ehb: c, v: d };
            return d;
          };
        };
        Icc = function (a, b) {
          return jd(a, b);
        };
        Fcc = function (a, b) {
          return a.map(b);
        };
        Lcc = function (a, b, c) {
          return new Kcc(a, b, c);
        };
        Mcc = function (a, b) {
          return [...a].map(b)[Symbol.iterator]();
        };
        Occ = function (a, b, c) {
          return new Ncc(a, b, c);
        };
        S_ = function (a, b, c, d) {
          if (d == null) throw a.error(b.LM(c), "not found");
          return d;
        };
        bdc = function (a) {
          function b(r) {
            return m[r.kind](r);
          }
          const c = a.types,
            d = a.values;
          class e {
            static of(r, t, v, w, y, B) {
              return new e(r, v, w, Pcc(y, Qcc(t)), Rcc(B, Qcc(t)));
            }
            map(r) {
              return r(this);
            }
            validate(r) {
              return r
                ? new e(
                    this.dataType,
                    this.gea,
                    this.Dda,
                    Scc(this.decode, r),
                    Pcc(this.encode, r)
                  )
                : this;
            }
            constructor(r, t, v, w, y) {
              this.dataType = r;
              this.gea = t;
              this.Dda = v;
              this.decode = w;
              this.encode = y;
            }
          }
          const f = e.of(
              { kind: 0 },
              "string",
              c.string,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "string", value: v })
            ),
            g = e.of(
              { kind: 1 },
              "boolean",
              c.bd,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "boolean", value: v })
            ),
            h = e
              .of(
                { kind: 2 },
                "double",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "double", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isFinite(v))
                  throw r.error(t, `number is not finite: ${v}`);
              }),
            k = e
              .of(
                { kind: 3 },
                "int32",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "int32", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                  throw r.error(t, `number is not an int32: ${v}`);
              }),
            l = {
              FontRef: e.of(
                { kind: 7, name: "FontRef" },
                "ref",
                c.instance("FontRef"),
                (r) => d.instance("FontRef", r),
                T_("font"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              MediaRef: e.of(
                { kind: 7, name: "MediaRef" },
                "ref",
                c.instance("MediaRef"),
                (r) => d.instance("MediaRef", r),
                T_("media"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              VideoRef: e.of(
                { kind: 7, name: "VideoRef" },
                "ref",
                c.instance("VideoRef"),
                (r) => d.instance("VideoRef", r),
                T_("video"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              AudioRef: e.of(
                { kind: 7, name: "AudioRef" },
                "ref",
                c.instance("AudioRef"),
                (r) => d.instance("AudioRef", r),
                T_("audio"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              EmbedRef: e.of(
                { kind: 7, name: "EmbedRef" },
                "ref",
                c.instance("EmbedRef"),
                (r) => d.instance("EmbedRef", r),
                T_("embed"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              SceneRef: e.of(
                { kind: 7, name: "SceneRef" },
                "ref",
                c.instance("SceneRef"),
                (r) => d.instance("SceneRef", r),
                T_("scene"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              BlueprintRef: e.of(
                { kind: 7, name: "BlueprintRef" },
                "ref",
                c.instance("BlueprintRef"),
                (r) => d.instance("BlueprintRef", r),
                T_("blueprint"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              Fill: e.of(
                { kind: 7, name: "Fill" },
                "fill",
                c.instance("Fill"),
                (r) => d.instance("Fill", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "fill", value: v })
              ),
              Stroke: e.of(
                { kind: 7, name: "Stroke" },
                "stroke",
                c.instance("Stroke"),
                (r) => d.instance("Stroke", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "stroke", value: v })
              ),
              Richtext2: e.of(
                { kind: 7, name: "Richtext2" },
                "text2",
                c.instance("Richtext2"),
                (r) => d.instance("Richtext2", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "text2", value: v })
              ),
            },
            m = {
              [0]: (r) => f.validate(Tcc(r.LO)),
              [1]: () => g,
              [2]: (r) => h.validate(Ucc(r.range)),
              [3]: (r) => k.validate(Ucc(r.range)),
              [4]: (r) =>
                e
                  .of(
                    { kind: 4, values: r.values },
                    Vcc,
                    c.primitive,
                    (t) => t,
                    (t, v, w) => w.value,
                    (t, v, w) => {
                      a: switch (typeof w) {
                        case "string":
                          t = { type: "string", value: w };
                          break a;
                        case "boolean":
                          t = { type: "boolean", value: w };
                          break a;
                        case "number":
                          t = { type: "int32", value: w };
                          break a;
                        default:
                          throw new A(w);
                      }
                      return t;
                    }
                  )
                  .validate(Wcc(r.values)),
              [5]: (r) => {
                const {
                  dataType: t,
                  gea: v,
                  Dda: w,
                  decode: y,
                  encode: B,
                } = b(r.itemType);
                return e.of(
                  { kind: 5, itemType: t },
                  "list",
                  c.array(v),
                  (C) => d.array(C.map(w)),
                  (C, D, E) =>
                    E.value.toArray().map((J, M) => y(C, D.TS(M), J)),
                  (C, D, E) => ({
                    type: "list",
                    value: E.map((J, M) => B(C, D.TS(M), J)),
                  })
                );
              },
              [6]: (r) => {
                const {
                  dataType: t,
                  gea: v,
                  Dda: w,
                  decode: y,
                  encode: B,
                } = b(r.itemType);
                return e.of(
                  { kind: 6, itemType: t },
                  "dict",
                  c.map(c.string, v),
                  (C) => d.map(Id(C, w)),
                  (C, D, E) => Id(E.value.yi(), (J, M) => y(C, D.p8(M), J)),
                  (C, D, E) => ({
                    type: "dict",
                    value: Id(E, (J, M) => B(C, D.p8(M), J)),
                  })
                );
              },
              [7]: (r) => l[r.name],
              [8]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 8, itemType: t },
                  "list",
                  c.undefined,
                  () => {},
                  (y, B, C) =>
                    Occ(
                      C.value,
                      (D) => w(y, B.TS("*"), D),
                      Xcc(v, y, B.TS("*"))
                    ),
                  (y, B, C) => ({
                    type: "list",
                    value: C.map((D, E) => w(y, B.TS(E), D)),
                  })
                );
              },
              [9]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 9, itemType: t },
                  "dict",
                  c.undefined,
                  () => {},
                  (y, B, C) =>
                    Lcc(
                      C.value,
                      (D) => w(y, B.p8("*"), D),
                      Xcc(v, y, B.TS("*"))
                    ),
                  (y, B, C) => ({
                    type: "dict",
                    value: Id(C, (D, E) => w(y, B.p8(E), D)),
                  })
                );
              },
              [10]: (r) => {
                const { decode: t, encode: v } = p.S3a(r.fields);
                return e.of(
                  { kind: 10, fields: r.fields },
                  "dict",
                  c.undefined,
                  () => {},
                  t,
                  v
                );
              },
              [11]: (r) => {
                function t(J, M, O, S) {
                  O = O.get(S);
                  if (O == null)
                    throw J.error(
                      M,
                      `unknown case for discriminator value: ${S}`
                    );
                  return O;
                }
                const v = r.JXa;
                r = r.Oh;
                var w = Object.keys(v);
                u(w.length >= 1, "missing discriminator props");
                u(w.length <= 1, "too many discriminator props: {}", w);
                const y = w[0];
                u(r.length >= 1, "discriminated union has no cases");
                w = new Map();
                for (const J of r) {
                  const M = J.fields[y].type.values,
                    O = b(J);
                  for (const S of M)
                    u(
                      !w.has(S),
                      "discriminator values are not unique across cases: {}",
                      S
                    ),
                      w.set(S, O);
                }
                const { decode: B, encode: C } = b({
                    kind: 4,
                    values: new Set(w.keys()),
                  }),
                  D = Id(w, (J) => J.decode),
                  E = Id(w, (J) => J.encode);
                return e.of(
                  { kind: 11, JXa: v, Oh: r },
                  "dict",
                  c.undefined,
                  () => {},
                  (J, M, O) => {
                    var S = S_(J, M, "k", O.value.get("k"));
                    O = S_(J, M, "v", O.value.get("v"));
                    Ycc(J, M, "dict", O);
                    S = B(J, M, S);
                    return t(J, M, D, S)(J, M, O);
                  },
                  (J, M, O) => {
                    const S = O[y],
                      Q = t(J, M, E, S);
                    return {
                      type: "dict",
                      value: new Map([
                        ["k", C(J, M, S)],
                        ["v", Q(J, M, O)],
                      ]),
                    };
                  }
                );
              },
            },
            n = Symbol("$impl");
          class p {
            static S3a(r) {
              r = jd(r, (w) => q.of(w));
              const t = jd(r, (w) => w.ZOb()),
                v = Object.entries(r);
              return {
                $L: new Map(v.map(([, w]) => w.UOb())),
                $Ob: (w) => {
                  const y = w[n];
                  return new Map(v.map(([, B]) => B.aPb(y)));
                },
                decode: (w, y, B) => {
                  const C = Object.create(null, t);
                  Object.defineProperty(C, n, {
                    enumerable: !1,
                    writable: !1,
                    value: new p(w, y, B.value),
                  });
                  return C;
                },
                encode: (w, y, B) => {
                  const C = v.map(([D, E]) => E.encode(w, y, B[D]));
                  return { type: "dict", value: new Map(C.filter(__c.rb)) };
                },
              };
            }
            HCa(r, t) {
              const v = S_(this.e, this.p, t, this.data.get(t));
              return U_(this.pZa, r.decode, this.e, this.p.LM(t), v);
            }
            FCa(r, t) {
              const v = this.data.get(t);
              if (v != null)
                return U_(this.pZa, r.decode, this.e, this.p.LM(t), v);
            }
            Dcb(r, t, v) {
              this.data.set(t, r.encode(this.e, this.p.LM(t), v));
            }
            wcb(r, t, v) {
              v != null
                ? this.data.set(t, r.encode(this.e, this.p.LM(t), v))
                : this.data.delete(t);
            }
            constructor(r, t, v) {
              this.e = r;
              this.p = t;
              this.data = v;
              this.pZa = new WeakMap();
              this.LTa = new Map();
              this.pxb = Zcc(this.LTa, (w, y) => {
                const B = this;
                return {
                  get ref() {
                    return B.HCa(y, w);
                  },
                  set(C) {
                    B.Dcb(y, w, C);
                  },
                };
              });
              this.dxb = Zcc(this.LTa, (w, y) => {
                const B = this;
                return {
                  get ref() {
                    return B.FCa(y, w);
                  },
                  set(C) {
                    B.wcb(y, w, C);
                  },
                };
              });
            }
          }
          class q {
            static of(r) {
              return new q(r, b(r.type));
            }
            UOb() {
              const r = this.key,
                t = this.Ib,
                v = this.type;
              switch (t.UF) {
                case 0:
                  return [r, v.gea];
                case 1:
                  return [r, c.optional(v.gea)];
                default:
                  throw new A(t.UF);
              }
            }
            aPb(r) {
              const t = this.key,
                v = this.Ib,
                w = this.type;
              switch (v.UF) {
                case 0:
                  return [t, () => w.Dda(r.HCa(w, t))];
                case 1:
                  return [
                    t,
                    () => {
                      const y = r.FCa(w, t);
                      return y != null ? w.Dda(y) : void 0;
                    },
                  ];
                default:
                  throw new A(v.UF);
              }
            }
            ZOb() {
              const r = this.key;
              var t = this.Ib;
              const v = this.type;
              if (gbc(v.dataType) && t.HLa === 1) {
                switch (t.UF) {
                  case 0:
                    t = function () {
                      return this[n].pxb(r, v);
                    };
                    break;
                  case 1:
                    t = function () {
                      return this[n].dxb(r, v);
                    };
                    break;
                  default:
                    throw new A(t.UF);
                }
                return { enumerable: !0, get: t };
              }
              let w;
              switch (t.UF) {
                case 0:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].HCa(v, r);
                    },
                    set(y) {
                      this[n].Dcb(v, r, y);
                    },
                  };
                  break;
                case 1:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].FCa(v, r);
                    },
                    set(y) {
                      this[n].wcb(v, r, y);
                    },
                  };
                  break;
                default:
                  throw new A(t.UF);
              }
              switch (t.HLa) {
                case 0:
                  w.set = void 0;
                  break;
                case 1:
                  break;
                default:
                  throw new A(t.HLa);
              }
              return w;
            }
            encode(r, t, v) {
              const w = this.key,
                y = this.Ib,
                B = this.type;
              switch (y.UF) {
                case 0:
                  return [w, B.encode(r, t.LM(w), S_(r, t, w, v))];
                case 1:
                  return v != null ? [w, B.encode(r, t.LM(w), v)] : void 0;
                default:
                  throw new A(y.UF);
              }
            }
            constructor(r, t) {
              this.Ib = r;
              this.type = t;
              r = r.key;
              u(r > 0 && Number.isInteger(r));
              if (r <= 52)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                  r - 1
                ];
              else {
                for (t = ""; r > 0; )
                  r--,
                    (t =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                        r % 52
                      ] + t),
                    (r = Math.floor(r / 52));
                r = t;
              }
              this.key = r;
            }
          }
          return (r, t) => {
            const v = new $cc(r),
              w = new adc(),
              { $L: y, $Ob: B, decode: C, encode: D } = p.S3a(t);
            return {
              $L: y,
              decode: (E) => {
                E = C(v, w, { type: "dict", value: E });
                return { bKa: B(E), data: E };
              },
              encode: (E) => D(v, w, E).value,
            };
          };
        };
        Zcc = function (a, b) {
          return (c, ...d) => {
            a.has(c) || a.set(c, b(c, ...d));
            return a.get(c);
          };
        };
        Xcc = function (a, b, c) {
          const d = new WeakMap();
          return (e) => U_(d, a, b, c, e);
        };
        U_ = function (a, b, c, d, e) {
          let f = a.get(e);
          f == null && ((f = b(c, d, e)), a.set(e, f));
          return f;
        };
        Pcc = function (a, b) {
          return (c, d, e) => {
            b(c, d, e);
            return a(c, d, e);
          };
        };
        Scc = function (a, b) {
          return (c, d, e) => {
            e = a(c, d, e);
            b(c, d, e);
            return e;
          };
        };
        Rcc = function (a, b) {
          var c = cdc();
          return (d, e, f) => {
            f = a(d, e, f);
            b(d, e, f);
            c(d, e, f);
            return f;
          };
        };
        Ycc = function (a, b, c, d) {
          if (d.type !== c)
            throw a.error(b, `type error: expected ${c}, was ${d.type}`);
        };
        Qcc = function (a) {
          return typeof a === "string"
            ? (b, c, d) => Ycc(b, c, a, d)
            : (b, c, d) => {
                if (!a.has(d.type))
                  throw b.error(
                    c,
                    `type error: expected one of ${[...a].join(" or ")}, was ${
                      d.type
                    }`
                  );
              };
        };
        cdc = function () {
          return (a, b, c) => {
            if (typeof c.value !== ddc[c.type])
              throw a.error(
                b,
                `type error: expected ${c.type}, was ${typeof c.value}`
              );
          };
        };
        Wcc = function (a) {
          return (b, c, d) => {
            if (!a.has(d))
              throw b.error(
                c,
                `expected one of ${[...a].join(" or ")}, was ${d}`
              );
          };
        };
        Ucc = function (a) {
          if (a) {
            var b = a.min,
              c = a.max;
            u(b == null || c == null || b <= c);
            return (d, e, f) => {
              if (b != null && f < b)
                throw d.error(e, `value below min ${b}: ${f}`);
              if (c != null && f > c)
                throw d.error(e, `value above max ${b}: ${f}`);
            };
          }
        };
        Tcc = function (a) {
          if (a)
            return (b, c, d) => {
              if (!a.test(d))
                throw b.error(c, `value does not match regex ${a}: '${d}'`);
            };
        };
        T_ = function (a) {
          return (b, c, d) => {
            if (d.value.type !== a)
              throw b.error(
                c,
                `expected ${edc[a]} resource type, got ${edc[d.value.type]}`
              );
            return { ...d.value, type: a };
          };
        };
        gdc = function (a) {
          return new fdc(typeof a === "function" ? V_(a) : a);
        };
        W_ = function (a) {
          return typeof a === "function";
        };
        hdc = function (a) {
          return { get: () => a, set: X_ };
        };
        idc = function (...a) {
          const b = new Set(),
            c = new Set();
          for (const d of a) for (const e in d) b.has(e) ? c.add(e) : b.add(e);
          if (c.size)
            throw Error(
              `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
            );
        };
        jdc = function (a, b) {
          return () => b(jd(a, (c) => c()));
        };
        ldc = function (a) {
          u(a.length === 1);
          let b;
          return (c) => {
            if (b != null && kdc(b[0], c)) return b[1];
            const d = a(c);
            b = [c, d];
            return d;
          };
        };
        kdc = function (a, b) {
          if (a === b) return !0;
          if (a == null || b == null) return !1;
          const c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (const e of c) if (a[e] !== b[e]) return !1;
          return !0;
        };
        ndc = function (a) {
          var b = mdc;
          return {
            r4: b({
              ko: a.r4,
              args: {},
              Od: {
                U: { image: void 0, video: void 0, Za: void 0 },
                attributes: {
                  Im: void 0,
                  color: void 0,
                  Ra: void 0,
                  locked: void 0,
                  Ug: void 0,
                  Ql: void 0,
                  ed: void 0,
                  flipX: void 0,
                  flipY: void 0,
                },
              },
            }),
            wua: b({
              ko: a.wua,
              args: {},
              Od: {
                U: { fill: void 0 },
                attributes: {
                  weight: void 0,
                  color: void 0,
                  Vc: void 0,
                  We: void 0,
                },
              },
            }),
            tQ: b({
              ko: a.tQ,
              args: { d: void 0 },
              Od: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { V: void 0 },
              },
            }),
            w4: b({
              ko: a.w4,
              args: {},
              Od: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { ...Y_, V: void 0 },
              },
            }),
            lfa: b({
              ko: a.lfa,
              args: {},
              Od: {
                U: {
                  sb: void 0,
                  resizeMode: void 0,
                  slice: void 0,
                  pb: void 0,
                },
                attributes: { ...Y_, jj: void 0, viewBox: void 0 },
              },
            }),
            ofa: b({
              ko: a.ofa,
              args: {},
              Od: {
                U: { text: void 0 },
                attributes: {
                  ...Y_,
                  kB: void 0,
                  Uh: void 0,
                  Ka: void 0,
                  I: void 0,
                  N: void 0,
                  ng: void 0,
                },
              },
            }),
            gQa: b({
              ko: a.gQa,
              args: { url: void 0, I: void 0, N: void 0 },
              Od: { U: {}, attributes: Y_ },
            }),
            bua: b({
              ko: a.bua,
              args: {},
              Od: {
                U: { cells: void 0 },
                attributes: { ...Y_, layout: void 0 },
              },
            }),
            aua: b({
              ko: a.aua,
              args: {},
              Od: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { V: void 0 },
              },
            }),
          };
        };
        Z_ = function (a, b) {
          return (c) => b({ ...a, ...c });
        };
        udc = function () {
          return ndc({
            r4: Z_($_, (a) => sf(__c.GN, a)),
            wua: Z_(odc, (a) => sf(__c.Ty, a)),
            tQ: Z_(pdc, (a) => sf(__c.mR, a)),
            w4: Z_(a0, (a) => sf(__c.eD, { ...a, id: fD.generate() })),
            lfa: Z_(b0, (a) =>
              sf(__c.qH, {
                ...a,
                pb: [],
                viewBox: { top: 0, left: 0, width: 1, height: 1 },
                id: fD.generate(),
              })
            ),
            ofa: Z_(qdc, (a) => sf(__c.BR, { ...a, id: fD.generate() })),
            gQa: Z_(rdc, (a) => sf(__c.CR, { ...a, id: fD.generate() })),
            bua: Z_(sdc, (a) => sf(__c.ER, { ...a, id: fD.generate() })),
            aua: Z_(tdc, (a) => sf(__c.pH, a)),
          });
        };
        xdc = function () {
          return new vdc({})
            .add((a, b) => ({
              FontRef: new a(
                "FontRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "font", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              MediaRef: new a(
                "MediaRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "media", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                type: "video",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                type: "audio",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                type: "embed",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                type: "scene",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              BlueprintRef: new a(
                "BlueprintRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "blueprint", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              Fill: new a("Fill", { color: b.string }, (c) =>
                __c.GN.create({ ...$_, color: c.color })
              ),
            }))
            .add((a, b) => ({
              Stroke: new a(
                "Stroke",
                {
                  color: b.string,
                  weight: b.number,
                  Vc: b.array(b.number),
                  We: b.bd,
                },
                (c) =>
                  __c.Ty.create({
                    ...odc,
                    color: c.color,
                    weight: c.weight,
                    Vc: c.Vc.items,
                    We: c.We,
                  })
              ),
            }))
            .add((a, b) => ({
              Richtext2: new a(
                "Richtext2",
                {
                  hwb: b.array(
                    b.O({ mb: b.string, attrs: b.map(b.string, b.string) })
                  ),
                },
                (c) => {
                  c = c.hwb;
                  const d = __c.$g.Jb();
                  c.items.forEach((e) => {
                    const f = e.fields.mb;
                    d.attrs(__c.tg(e.fields.attrs.items));
                    d.mb(f);
                  });
                  return __c.Yh.create({ ...__c.GF, stream: d.build() });
                }
              ),
            }))
            .add((a, b) => ({
              Path: new a(
                "Path",
                {
                  d: b.string,
                  fill: b.instance("Fill"),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = c.fill;
                  c = __c.mR.create({ ...pdc, d: c.d, fill: $_ });
                  Object.defineProperties(c, {
                    fill: { value: e.instance },
                    stroke: { value: wdc(d) },
                  });
                  return c;
                }
              ),
            }))
            .add((a, b) => ({
              RectElement: new a(
                "RectElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  fill: b.instance("Fill"),
                  V: b.union(b.array(b.number), b.undefined),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = __c.eD.create({
                      ...a0,
                      id: fD.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? a0.rotation,
                      fill: $_,
                      V: c.V?.items ?? a0.V,
                    });
                  Object.defineProperties(e, {
                    fill: { value: c.fill.instance },
                    stroke: { value: wdc(d) },
                  });
                  return e;
                }
              ),
            }))
            .add((a, b) => ({
              ShapeElement: new a(
                "ShapeElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  Ra: b.union(b.number, b.undefined),
                  viewBox: b.O({
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                  }),
                  pb: b.array(b.instance("Path")),
                },
                (c) => {
                  const d = __c.qH.create({
                    ...b0,
                    id: fD.generate(),
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    rotation: c.rotation ?? b0.rotation,
                    Ra: c.Ra ?? b0.Ra,
                    pb: [],
                    viewBox: c.viewBox.fields,
                  });
                  Object.defineProperties(d, {
                    pb: {
                      value: new c0(
                        c.pb.items.map((e) => V_(() => e.instance))
                      ),
                    },
                  });
                  return d;
                }
              ),
            }));
        };
        wdc = function (a) {
          return (
            a && {
              ref: a.instance,
              set() {
                throw Error(
                  "Replacing of stroke on a model unit is not yet supported"
                );
              },
            }
          );
        };
        Fbc = function (a, b, c) {
          return jd(b, (d) => (...e) => {
            const {
              data: f,
              P: { width: g, height: h },
            } = d(...e);
            e = c.D.encode(f.D);
            const k =
              c.document.$L.size > 0 ? c.document.encode(f.document) : void 0;
            return {
              Ec: { ...__c.HEb, app: { id: a, version: 1 } },
              b_b: k,
              jd: e,
              uf: { width: g, height: h },
            };
          });
        };
        d0 = function () {
          throw Error("ref not found");
        };
        zdc = function (a, b) {
          return class extends ydc {
            componentDidCatch(c) {
              a.error(c);
              this.setState({ hasError: !0 });
            }
            render() {
              return this.state.hasError
                ? TZ(__c.tq, {
                    background: "criticalLow",
                    width: "full",
                    height: "full",
                    padding: "0.25u",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    role: "alert",
                    children: TZ(__c.Wu, {
                      size: "xsmall",
                      alignment: "center",
                      children: __c.K("Q6XSow"),
                    }),
                  })
                : TZ(b, { ...this.props });
            }
            constructor(...c) {
              super(...c);
              this.state = { hasError: !1 };
            }
          };
        };
        Pbc = function (a, b, c) {
          const d = c.D,
            e = (c = c.C6) ? new Adc(c) : void 0;
          c = e ? (f) => e.Gc(f.D) : void 0;
          switch (d.type) {
            case 0:
              a = Bdc(a, d, b, c);
              break;
            case 1:
              a = Cdc(a, d, b, c);
              break;
            default:
              throw new A(d);
          }
          return { mub: a, DFa: e };
        };
        Qbc = function (a, b, c, d) {
          c = c.email;
          if (c != null) {
            var e = d ? (g) => d.Gc(g.D) : void 0,
              f = c.type;
            switch (f) {
              case 2:
                return Ddc(a, c, b, e);
              default:
                throw new A(f);
            }
          }
        };
        Rbc = function (a, b) {
          return (c) => {
            if (b)
              return (
                (c = a.D.decode(c.D.jd).data),
                {
                  type: b.type,
                  YV: typeof b.YV === "function" ? b.YV(c) : b.YV,
                  name: typeof b.name === "function" ? b.name(c) : b.name,
                }
              );
          };
        };
        Bdc = function (a, b, c, d) {
          const e = b.Yy,
            { Kva: f, E6: g, Nq: h, FJa: k } = e0(a, c);
          return typeof e === "object"
            ? ((b = a.y3.types),
              (b = b.BY(
                b.union(b.instance("RectElement"), b.instance("ShapeElement"))
              )),
              Edc(
                a,
                f,
                h,
                b,
                e,
                (l) => new f0(() => l().map((m) => m.instance)),
                k
              ))
            : {
                type: 0,
                Yy: (l, m) => {
                  const { document: n, D: p } = h.decode(f(l)).data;
                  m = g(l, m);
                  l = d
                    ? { document: n, D: p, local: d(l) }
                    : { document: n, D: p, local: void 0 };
                  return e(l, m);
                },
                eaa: g0(k),
                NN: h0(k),
                eT: i0(k),
                iV: j0(k),
              };
        };
        Cdc = function (a, b, c, d) {
          const e = b.Component,
            { Kva: f, E6: g, Nq: h, FJa: k } = e0(a, c);
          return {
            type: 1,
            eaa: g0(k),
            NN: h0(k),
            eT: i0(k),
            iV: j0(k),
            Component: zdc(
              a.J,
              k0(({ model: l, je: m, dxa: n, hP: p }) => {
                n = Fdc(a.Ee, l, m, n);
                const q = SZ(() => {
                  const { document: r, D: t } = h.decode(f(l)).data;
                  return d
                    ? { document: r, D: t, local: d(l) }
                    : { document: r, D: t, local: void 0 };
                }, [l]);
                m = g(l, m);
                return TZ(e, { data: q, Ee: n, Ei: m, hP: p });
              })
            ),
          };
        };
        Ddc = function (a, b, c, d) {
          const e = b.Component,
            { Kva: f, E6: g, Nq: h, FJa: k } = e0(a, c);
          return {
            type: 2,
            eaa: g0(k),
            NN: h0(k),
            eT: i0(k),
            iV: j0(k),
            Component: zdc(
              a.J,
              k0(({ model: l, je: m, scale: n }) => {
                const p = Gdc(a.ntb, n),
                  q = SZ(() => {
                    const { document: r, D: t } = h.decode(f(l)).data;
                    return d
                      ? { document: r, D: t, local: d(l) }
                      : { document: r, D: t, local: void 0 };
                  }, [l]);
                m = g(l, m);
                return TZ(e, { data: q, Ee: p, scale: n, Ei: m });
              })
            ),
          };
        };
        e0 = function (a, b) {
          return {
            Kva: (c) => ({ document: Hdc(a, c), D: c.D.jd }),
            E6: (c, d) => a.qta.E6(c, d),
            Nq: Xbc(b),
            FJa: new Idc(),
          };
        };
        Edc = function (a, b, c, d, e, f, g) {
          const h = a.Bya(a.y3, c, d).compile(e);
          return {
            type: 0,
            Yy: (k) => ({ Ja: f(h(b(k))) }),
            NN: h0(g),
            eaa: g0(g),
            eT: i0(g),
            iV: j0(g),
          };
        };
        Hdc = function (a, b) {
          return (
            a.Ca.jn.first(
              (c) =>
                c.app.id === b.D.Ec.app.id &&
                c.app.version === b.D.Ec.app.version
            )?.data ?? __c.GR.create(new Map())
          );
        };
        Jdc = function (a, b) {
          return a.nV.get(b.D.Ec.app.id)?.dEb(b);
        };
        g0 = function (a) {
          return l0((b) => {
            if ((b = a.get(b.D)) && b.size !== 0)
              return Array.from(b)
                .map((c) => c.wka())
                .reduce(
                  (c, d) => ({
                    width: Math.max(c.width, d.width),
                    height: Math.max(c.height, d.height),
                  }),
                  { width: -Infinity, height: -Infinity }
                );
          });
        };
        h0 = function (a) {
          return l0((b, c) => {
            b = a.get(b);
            if (!b || b.size === 0) return c;
            for (const d of b) if (d.NN) return d.NN(c);
            return c;
          });
        };
        i0 = function (a) {
          return l0((b) =>
            (b = a.get(b.D)) && b.size !== 0
              ? Array.from(b).flatMap((c) => c.eT())
              : []
          );
        };
        j0 = function (a) {
          return (b, c) => {
            a.add(b.D, c);
            return () => a.remove(b.D, c);
          };
        };
        zbc = function (a) {
          return { $L: a.$L, decode: Kdc(a.decode), encode: a.encode };
        };
        Kdc = function (a) {
          const b = new WeakMap();
          return (c) => {
            let d = b.get(c);
            d || ((d = a(c)), b.set(c, d));
            return d;
          };
        };
        Odc = function (a) {
          var b = a.rta;
          const c = a.XSb,
            d = a.USb,
            e = a.Lya,
            f = a.y3,
            g = a.J,
            h = a.Ca,
            k = a.Rab,
            l = a.r$a;
          a = new Ldc(a.mo, h);
          const m = new Mdc(h, b, f, e, g, a, c, d);
          b = new Ndc();
          k && k.Pcc((n) => Jdc(m, n));
          l && l((n) => Jdc(m, n));
          return { Iea: m, vy: m, qta: a, expr: b };
        };
        Qdc = function (a, b) {
          if (!a) return "Arial, Helvetica, sans-serif";
          const c = __c.xn(a);
          a = b.find((d) => d.id === c.id && d.version === c.version);
          switch (a?.name) {
            case "Arimo":
            case "Arial":
              return "Arial, Helvetica, sans-serif";
            case "Helvetica":
            case "Helvetica Now":
              return "Helvetica, Arial, sans-serif";
            case "Times New Roman MT":
            case "Times New Roman":
              return '"Times New Roman", Times, serif';
            case "Tahoma":
              return "Tahoma, Geneva, sans-serif";
            case "Trebuchet MS":
              return '"Trebuchet MS", Helvetica, sans-serif';
            case "Lucida Console":
              return '"Lucida Console", Monaco, monospace';
            case "Comic Sans":
              return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
            case "Courier New OS":
            case "Courier New":
              return '"Courier New", monospace';
            case "Georgia Pro":
            case "Georgia":
              return "Georgia, serif";
            case "Verdana Pro":
            case "Verdana":
              return "Verdana, Geneva, sans-serif";
            default:
              return a?.name
                ? `${Pdc(a.name)}, ${"Arial, Helvetica, sans-serif"}`
                : "Arial, Helvetica, sans-serif";
          }
        };
        Pdc = function (a) {
          a = a.replace(/["']/g, "");
          return /[\s,]/.test(a) ? `"${a}"` : a;
        };
        Sdc = function () {
          ({ Gi: a } = { Gi: [] });
          var a;
          return ({ text: b }) => {
            const c = Rdc(b, a);
            return TZ("span", {
              style: {
                ...c,
                display: "table-cell",
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                boxSizing: "border-box",
              },
              children: b.stream.Z,
            });
          };
        };
        Rdc = function (a, b) {
          var c = (q) =>
              [...a.stream.Xo(q)[q]].values().next().value ?? __c.rg.Ub[q],
            d = c("font-family");
          b = Qdc(d, b);
          d = c("font-size");
          var e = c("color"),
            f = c("font-weight"),
            g = c("font-style"),
            h = c("decoration"),
            k = c("strikethrough"),
            l = c("direction"),
            m = c("text-align"),
            n = c("leading");
          c = c("tracking");
          const p = [];
          h === "underline" && p.push("underline");
          k === "strikethrough" && p.push("line-through");
          h = p.length > 0 ? p.join(" ") : "none";
          return {
            color: e,
            fontSize: `${d}px`,
            fontWeight: f,
            fontFamily: b,
            fontStyle: g === "italic" ? "italic" : "normal",
            textDecoration: h,
            direction: l,
            textAlign: Tdc(l, m),
            lineHeight: `${Udc(n)}em`,
            letterSpacing: `${Udc(c)}em`,
          };
        };
        Tdc = function (a, b) {
          const c = {
            start: "left",
            center: "center",
            end: "right",
            justify: "justify",
          };
          if (a !== "rtl") return c[b];
          switch (b) {
            case "start":
              return "end";
            case "end":
              return "start";
            default:
              return c[b];
          }
        };
        Udc = function (a) {
          if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
          return a / 1e3;
        };
        Vdc = function (a) {
          a.CQ && (a.CQ(), (a.CQ = null));
          const b = a.props.Jsb;
          b.forEach((c) => {
            window.addEventListener(c, a.vRa);
          });
          a.CQ = () => {
            b.forEach((c) => {
              window.removeEventListener(c, a.vRa);
            });
          };
        };
        Zdc = function (a) {
          const b = RZ(function (c) {
            const [{ store: d, Ma: e }] = m0(() => {
              const f = new Wdc(),
                g = new Xdc(f);
              return { store: f, Ma: g };
            });
            return TZ(Ydc, {
              Faa: e.reset,
              children: TZ(__c.xYb, {
                Vzb: e,
                Wzb: d,
                E2a: a.Vu.contains(c.url),
                children: ({ hk: f }) => c.children({ hk: f }),
              }),
            });
          });
          return RZ((c) =>
            c.eob && a.ab?.status !== 2
              ? TZ(b, { ...c })
              : c.children({ hk: !1 })
          );
        };
        $dc = function (a) {
          return k0(function (b) {
            return TZ("div", {
              className: "gcYy_A PYuKbg",
              children: TZ(__c.Yv, {
                T7: "both",
                children: ({ width: c, height: d }) =>
                  TZ(a.Hj, {
                    fill: b.fill,
                    Tb: c,
                    tc: d,
                    ue: void 0,
                    animation: void 0,
                    uG: !1,
                    da: void 0,
                    ha: void 0,
                  }),
              }),
            });
          });
        };
        bec = function (a) {
          const b = a.wa,
            c = a.oka,
            d = (e) => {
              e = __c.xn(e);
              b.fz([e], { Xl: !0 });
              return b.Tba(e);
            };
          return k0(function (e) {
            var f = e.SBa;
            const g = e.fontWeight,
              h = e.Awa,
              k = e.Fc,
              l = e.Emb,
              m = e.ariaInvalid,
              n = e.disabled,
              p = e.id,
              q = e.name,
              r = e.inputMode,
              t = e.onBlur,
              v = e.onFocus,
              w = e.onChange,
              y = e.padding,
              B = e.placeholder,
              C = e.c9a,
              D = e.readOnly,
              E = e.outline,
              J = e.paddingInlineEnd,
              M = e.type,
              O = e.value,
              S = e.width;
            e = {
              boxSizing: e.boxSizing,
              color: e.oj,
              fontSize: e.fontSize,
              backgroundColor: e.backgroundColor,
              borderStyle: e.borderStyle,
              borderRadius: e.borderRadius,
              borderWidth: e.borderWidth,
              fontFamily: f && d(f),
              fontWeight: g && __c.Gn(g),
              padding: y,
              paddingInlineEnd: J,
              outline: E,
              width: S,
            };
            [f] = m0(() => c?.Axb());
            return TZ("div", {
              ref: f?.xj,
              className: "BHOPhg PYuKbg",
              children: TZ("input", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: aec(["_6Yde8g", C && "sR0SUA"]),
                disabled: n,
                id: p,
                name: q,
                inputMode: r,
                onBlur: t,
                onFocus: v,
                onChange: w,
                placeholder: B,
                readOnly: D,
                type: M,
                value: O,
                style: {
                  ...e,
                  "--srRiKA": C,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.Pg,
                  "--UBd2ow": h?.focus,
                },
                "data-1p-ignore": !0,
                "data-bwignore": !0,
                "data-lpignore": !0,
                "data-protonpass-ignore": !0,
                "data-form-type": "other",
              }),
            });
          });
        };
        cec = function () {
          return () => TZ(__c.cV, { mediaType: "embed", failed: !1 });
        };
        dec = function (a) {
          return k0(function (b) {
            return TZ("div", {
              className: "oUJNhQ PYuKbg",
              children: TZ(a.Re, {
                text: b.text,
                animation: void 0,
                Ad: "middle",
                oa: void 0,
                hb: void 0,
                Qe: [],
                writingMode: 1,
              }),
            });
          });
        };
        eec = function () {
          return k0(function (a) {
            return TZ("div", {
              className: a.className,
              style: a.style,
              children: a.children,
            });
          });
        };
        fec = function (a) {
          const b = a.wa,
            c = a.oka,
            d = (e) => {
              e = __c.xn(e);
              b.fz([e], { Xl: !0 });
              return b.Tba(e);
            };
          return k0(function (e) {
            var f = e.SBa;
            const g = e.fontSize,
              h = e.fontWeight,
              k = e.Awa,
              l = e.Fc,
              m = e.Emb,
              n = e.ariaInvalid,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.onBlur,
              v = e.onFocus,
              w = e.onChange,
              y = e.padding,
              B = e.paddingInlineEnd,
              C = e.placeholder,
              D = e.c9a,
              E = e.readOnly,
              J = e.resize,
              M = e.outline,
              O = e.rows,
              S = e.value,
              Q = e.width,
              R = e.whiteSpace,
              W = e.wordBreak;
            e = {
              backgroundColor: e.backgroundColor,
              borderRadius: e.borderRadius,
              borderStyle: e.borderStyle,
              borderWidth: e.borderWidth,
              boxSizing: e.boxSizing,
              color: e.oj,
              fontFamily: f && d(f),
              fontSize: g,
              fontWeight: h && __c.Gn(h),
              outline: M,
              padding: y,
              paddingInlineEnd: B,
              resize: J,
              whiteSpace: R,
              width: Q,
              wordBreak: W,
            };
            [f] = m0(() => c?.Axb());
            return TZ("div", {
              ref: f?.xj,
              className: "BHOPhg PYuKbg",
              children: TZ("textarea", {
                "aria-describedby": l,
                "aria-errormessage": m,
                "aria-invalid": n,
                className: aec(["_6Yde8g", D && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                onBlur: t,
                onFocus: v,
                onChange: w,
                placeholder: C,
                rows: O,
                readOnly: E,
                style: {
                  ...e,
                  "--srRiKA": D,
                  "--oiOG3Q": k?.default,
                  "--oGOcXA": k?.Pg,
                  "--UBd2ow": k?.focus,
                },
                value: S,
              }),
            });
          });
        };
        __c.KK.prototype.Bq = __c.fa(5, function () {
          return this.mb("\n");
        });
        __c.sR.prototype.Bq = __c.fa(4, function () {
          this.Jb.Bq();
          return this;
        });
        __c.Bc.prototype.SR = __c.fa(3, function (a, b) {
          this.console.error(...__c.Ac(this, "critical", a, b));
        });
        __c.yI.prototype.SR = __c.fa(2, function (a, b) {
          this.Ew.SR(a, b);
          __c.wI(this, a, "critical", b);
        });
        var gec = class {
            constructor(a) {
              this.ref = a;
            }
          },
          hec = class {
            get ref() {
              return this.box.get();
            }
            constructor(a) {
              this.box = a;
            }
          },
          iec = class {
            get ref() {
              return this.box.ref;
            }
            set() {
              throw Error("cannot set unmodifiable box");
            }
            constructor(a) {
              this.box = a;
            }
          },
          jec = __webpack_require__(322594),
          TZ = jec.jsx,
          kec = jec.jsxs;
        var n0 = __webpack_require__(205482),
          lec = n0.Component,
          k0 = n0.memo,
          ydc = n0.PureComponent,
          o0 = n0.useCallback,
          p0 = n0.useEffect,
          SZ = n0.useMemo,
          m0 = n0.useState;
        var RZ = __webpack_require__(721226).PA;
        var q0 = __webpack_require__(186901),
          V_ = q0.EW,
          mec = q0.fm,
          nec = q0.h5,
          oec = q0.m3,
          j_ = q0.mJ,
          r0 = q0.sH,
          s0 = q0.XI;
        var l0 = __webpack_require__(536618).iB;
        var pec = __webpack_require__,
          qec = pec(208463),
          aec = pec.n_x(qec)();
        var pac = { OOa: "null", nca: "*" };
        var rec = () => [...document.getElementsByTagName("iframe")],
          $ac = class {
            dispose() {
              this.disposed ||
                ((this.disposed = !0),
                this.S0a.removeEventListener("message", this.a1),
                t0.delete(this.eV),
                this.i6.clear());
            }
            constructor(a, b = oac) {
              var c = window;
              this.options = { eV: "codelet" };
              this.J = a;
              this.S0a = c;
              this.NOa = b;
              this.Wwb = rec;
              this.disposed = !1;
              this.a1 = async (d) => {
                const e = d.source;
                var f = d.data;
                if (e) {
                  var g = f?.clientId,
                    h = f?.sandboxCommsSource ?? f?.source;
                  if (!h?.startsWith("react-")) {
                    var k = this.Wwb().find((n) => n.contentWindow === e);
                    if (k) {
                      var l = k.getAttribute("data-process-id");
                      if (l && l.startsWith(this.eV)) {
                        var m = z(k.contentWindow);
                        d = this.NOa(d, k);
                        if (d.valid)
                          if (((f = qac(f, g)), f.ok)) {
                            f = { type: "connection_request_not_matched" };
                            for (const n of this.i6)
                              if (
                                ((f = await n({
                                  Kpb: { $Ib: l, clientId: g },
                                  iframe: k,
                                })),
                                f.type !== "connection_request_not_matched")
                              )
                                break;
                            switch (f.type) {
                              case "connection_request_matched":
                                m.postMessage(
                                  {
                                    source: "parent",
                                    sandboxCommsSource: "parent",
                                    clientId: g,
                                  },
                                  d.nca,
                                  [f.port]
                                );
                                break;
                              case "connection_request_not_matched":
                                this.J.KA(
                                  "received an init message which no listener accepted",
                                  {
                                    extra: new Map([
                                      ["processId", l],
                                      ["data.source", h],
                                      ["data.clientId", g],
                                    ]),
                                  }
                                );
                                this.options.fXb && k.remove();
                                break;
                              case "already_connected":
                                this.J.KA(
                                  "received an init message for a processId & clientId that is already connected",
                                  {
                                    extra: new Map([
                                      ["processId", l],
                                      ["data.source", h],
                                      ["data.clientId", g],
                                    ]),
                                  }
                                );
                                break;
                              default:
                                throw new A(f);
                            }
                          } else
                            this.J.KA(f.error, {
                              extra: new Map([
                                ["data.source", h],
                                ["data.clientId", g],
                              ]),
                            });
                        else
                          d.error &&
                            this.J.info(d.error.message, {
                              extra: d.error.extra,
                            });
                      }
                    }
                  }
                }
              };
              this.eV = this.options.eV ?? `iframe_host_${sec++}`;
              this.i6 = new Set();
              x(
                !t0.has(this.eV),
                `A IFrameHostConnector has already been created with the prefix ${this.options.eV}`
              );
              t0.add(this.eV);
              this.S0a.addEventListener("message", this.a1);
            }
          },
          sec = 0,
          t0 = new Set();
        var IZ = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.sJb = a.message;
            Object.setPrototypeOf(this, IZ.prototype);
          }
        };
        var tec = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.J = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Ba)();
              } catch (e) {
                return this.J.Vb(e), Ca(e);
              }
            };
            this.mGb = (d) => {
              this.J.Vb(d);
            };
            this.a1 = ({ data: d }) => {
              if (d)
                try {
                  this.handler.xJb(d);
                } catch (e) {
                  this.J.Vb(e);
                }
              else
                this.J.error(
                  new IZ({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.a1;
            this.port.onmessageerror = this.mGb;
          }
        };
        var rac = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          uec = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.ke);
              this.wKb(a);
            }
            reject(a) {
              clearTimeout(this.ke);
              this.v$a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.ke);
              this.ke = setTimeout(() => {
                sac(this);
              }, Math.max(this.timeoutMs - 500, 500));
            }
            constructor() {
              this.timeoutMs = 5e3;
              this.p = new Promise((a, b) => {
                this.wKb = a;
                this.v$a = b;
              });
              this.setTimeout();
            }
          };
        var vec = class {
          request(a, b) {
            const c = this.S8a,
              d = new uec(),
              e = this.jKb(),
              f = (async function () {
                c.set(e, { path: a, lKb: d });
                try {
                  const g = await d.promise();
                  return (0, __c.Ba)(g);
                } catch (g) {
                  return g instanceof rac
                    ? Ca(
                        new IZ({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ca(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.J.Vb(b.error, {
                Ke: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.J = b;
            this.jKb = __c.qn;
            this.S8a = new Map();
          }
        };
        var wec = class {
          handle(a, b) {
            if (this.W1.has(a))
              throw new IZ({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.W1.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.iaa = a;
            this.J = b;
            this.hKb = !0;
            this.dsb = c;
            this.W1 = new Map();
            this.rub = new Set();
          }
        };
        var Vac = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.W1.handle(c, d);
              a = new xec(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, lKb: h } = d.S8a.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.J.U4({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: { path: g ?? "unknown" },
                            });
                            h.reject(
                              new IZ({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new A(c);
                        }
                      else
                        f !== "ack" &&
                          d.J.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      uac(this.W1, c);
                      break;
                    default:
                      throw new A(c);
                  }
                },
                a,
                b.ag("bus")
              );
              this.client = new vec(a.pG, b.ag("client"));
              this.W1 = new wec(a, b.ag("requestHandler"));
            }
          },
          xec = class {
            constructor(a, b, c) {
              this.Ska = a;
              this.pG = (d, e, f) =>
                this.F5.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.uGb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Ska({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Ska({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Ska({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.Ska({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new A(d);
                }
              };
              this.F5 = new tec({ xJb: this.uGb }, b, c);
            }
          };
        var vac = H(() => ({}));
        var u0 = H(() => ({ R6: X(1), rd: X(2) }));
        var KZ = H(
          () => ({
            Nj: Y("documentId", 1),
            mj: Y("elementId", 2),
            Uhb: G("websiteContext", 3, u0),
            zEa: __c.iJ("isPreview", 4),
          }),
          { fi: 0 }
        );
        var wac = H(() => ({}));
        var LZ = H(() => ({}));
        var k_ = H(
          () => ({
            textContent: Y("textContent", 1),
            backgroundColor: Y("backgroundColor", 2),
          }),
          { fi: 0 }
        );
        var wbc = H(() => ({ config: (0, __c.mJ)("config", 1, k_) }), {
          fi: 0,
        });
        var yec = H(() => ({}));
        var zec = __c.db(() => [1, 2]);
        var yac = H(() => ({ mode: __c.Sa("mode", 1, zec) }), { fi: 0 });
        var Aac = H(() => ({}));
        var Aec = H(
          () => ({
            top: $I("top", 1),
            left: $I("left", 2),
            width: $I("width", 3),
            height: $I("height", 4),
          }),
          { fi: 0 }
        );
        var Bec = H(
          () => ({
            WYa: X("entityId", 1),
            sXb: __c.Pa("boundingRect", 2, Aec),
          }),
          { fi: 0 }
        );
        var Cac = H(() => ({ selection: G("selection", 1, Bec) }), { fi: 0 });
        var MZ = H(() => ({}));
        var Dac = H(
          () => ({ WYa: X("entityId", 1), textContent: X("textContent", 2) }),
          { fi: 0 }
        );
        var Eac = H(() => ({}));
        var Xac = class {
          async uca(a) {
            a = await this.EY.request("SET_EDITING_CONFIG", wbc.Ga(a));
            a = zac(a, "SET_EDITING_CONFIG");
            return yec.za(a);
          }
          constructor(a) {
            this.EY = a;
          }
        };
        var h_ = H(
          () => ({
            type: __c.F("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
            id: X("id", 1),
            url: X("url", 4),
          }),
          { fi: 0 }
        );
        var Gac = H(
          () => ({ config: Y("config", 1), PS: G("fontEditable", 2, h_) }),
          { fi: 0 }
        );
        var v0 = H(
          () => ({
            type: __c.F("type", "RECOLORABLE", 1, "RECOLORABLE"),
            id: X("id", 1),
            value: X("value", 2),
          }),
          { fi: 0 }
        );
        var Cec = H(
          () => ({
            borderRadius: $I("borderRadius", 1),
            borderWidth: $I("borderWidth", 2),
          }),
          { fi: 0 }
        );
        var w0 = H(
          () => ({
            type: __c.F("type", "BORDERABLE", 2, "BORDERABLE"),
            id: X("id", 1),
            value: __c.Pa("value", 2, Cec),
          }),
          { fi: 0 }
        );
        var Dec = H(() => ({ id: X("id", 1), value: X("value", 2) }), {
          fi: 0,
        });
        var x0 = H(
          () => ({
            type: __c.F("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
            size: $I("size", 21),
          }),
          { fi: 0 }
        );
        var Hac = H(
          () => ({
            config: X("config", 1),
            N1: Ra("recolorables", 4, v0),
            Lnb: Ra("borderables", 5, w0),
            atb: Ra("editPanelValues", 6, Dec),
            qI: G("fontSizeable", 7, x0),
            PS: G("fontEditable", 8, h_),
          }),
          { fi: 0 }
        );
        var Iac = __c.cb(
          () => ({ type: [1, v0, 2, w0, 3, h_, 5, x0] }),
          () => ({}),
          { fi: 0 }
        );
        var Jac = H(() => ({ config: X("config", 1) }), { fi: 0 });
        var Kac = H(() => ({ id: X(1), value: X(2) }));
        var Lac = H(() => ({ config: X(1) }));
        var Nac = H(() => ({ config: X("config", 1) }), { fi: 0 });
        var Oac = H(
          () => ({ config: Y("config", 1), PS: G("fontEditable", 2, h_) }),
          { fi: 0 }
        );
        var Pac = H(
          () => ({
            config: X("config", 1),
            N1: Ra("recolorables", 4, v0),
            Lnb: Ra("borderables", 5, w0),
            PS: G("fontEditable", 6, h_),
            atb: Ra("editPanelValues", 7, Dec),
            qI: G("fontSizeable", 8, x0),
          }),
          { fi: 0 }
        );
        var Qac = H(() => ({}));
        var Eec = H(
          () => ({
            scrollWidth: $I("scrollWidth", 1),
            scrollHeight: $I("scrollHeight", 2),
            offsetWidth: $I("offsetWidth", 3),
            offsetHeight: $I("offsetHeight", 4),
          }),
          { fi: 0 }
        );
        var Rac = H(() => ({ body: __c.Pa("body", 1, Eec) }), { fi: 0 });
        var Wac = class {
          constructor(a) {
            this.EY = a;
          }
        };
        var Fec = H(
          () => ({
            scrollWidth: $I("scrollWidth", 1),
            scrollHeight: $I("scrollHeight", 2),
            offsetWidth: $I("offsetWidth", 3),
            offsetHeight: $I("offsetHeight", 4),
          }),
          { fi: 0 }
        );
        var Tac = H(() => ({ body: __c.Pa("body", 1, Fec) }), { fi: 0 });
        var abc = class {
          constructor(a, b) {
            this.w9 = a;
            this.J = b;
            this.HY = new Map();
          }
        };
        var bbc = k0(function ({
          className: a,
          url: b,
          embed: c,
          I2: d,
          sJa: e,
          dOa: f,
          Lbc: g = Zac,
        }) {
          const h = SZ(() => `${"codelet"}-${b}-${__c.qn()}`, [b]),
            {
              id: k,
              src: l,
              sandbox: m,
              allow: n,
              allowFullscreen: p,
            } = g(z(c.html));
          p0(() => {
            e(h);
            return () => {
              f(h);
            };
          }, [e, f, h]);
          return TZ("div", {
            className: a,
            children: TZ("div", {
              ref: (q) => {
                q && d(q);
              },
              className: "R9vaCQ",
              children: TZ("iframe", {
                id: k,
                className: "_5K1SQ",
                "data-process-id": h,
                src: l,
                title: c.title || __c.K("gs+cqw"),
                sandbox: m,
                allow: n,
                allowFullScreen: p,
              }),
            }),
          });
        });
        var Gec;
        Gec = Symbol.iterator;
        var f0 = class {
          static G(a) {
            L(a, { sn: V_, Tr: V_ });
          }
          get sn() {
            return this.Imb().map((a) => {
              let b = this.$0a.get(a);
              b == null && ((b = `${this.Myb++}`), this.$0a.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Tr() {
            const a = new Map();
            this.sn.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          vl(a) {
            return z(this.Tr.get(a), "ref not found");
          }
          get empty() {
            return !this.sn.length;
          }
          count() {
            return this.sn.length;
          }
          toArray() {
            return this.sn.map((a) => a.ref);
          }
          yi() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get MS() {
            return this.sn[0]?.ref;
          }
          get ZT() {
            return this.sn[this.sn.length - 1]?.ref;
          }
          first(a) {
            return a ? this.sn.find((b) => a(b.ref))?.ref : this.MS;
          }
          last(a) {
            if (!a) return this.ZT;
            const b = this.sn;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.sn;
            for (a = this.vl(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.sn;
            for (a = this.vl(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          kf(a, b) {
            a = this.Tr.get(a);
            b = this.Tr.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Sr(a) {
            return this.sn[this.vl(a)].id;
          }
          has(a) {
            return this.Tr.has(a);
          }
          rq(a) {
            return new __c.IK(this, a);
          }
          map(a) {
            return this.sn.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.sn.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.sn.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.sn.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.sn.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.sn.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.sn.every((b) => a(b.ref, b.id));
          }
          [Gec]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.Imb = a;
            this.Myb = (f0.G(this), 0);
            this.$0a = new WeakMap();
          }
        };
        var Jbc = __c.UZ()(() => ({
            xYb({ ML: a, Gnb: b, version: c }, d, e) {
              e = e && {
                fonts: VZ("font", e.fonts),
                media: VZ("media", e.media),
                zd: VZ("video", e.zd),
                embeds: VZ("embed", e.embeds),
              };
              return {
                data: {
                  D: {
                    ML: a,
                    Ys: {
                      domain: "resource",
                      resource: {
                        ref: { type: "blueprint", id: b, version: c },
                        resources: e,
                      },
                    },
                    type: "instance",
                    Od: void 0,
                  },
                  document: {},
                },
                P: d,
              };
            },
          })),
          Hec = ({ resource: a, bE: b }) => {
            const c = mec(() => {
              __c.Lta(b, a.ref.ref);
            });
            return {
              Ja: new f0(() => {
                const d = mac(b, a.ref.ref);
                return d
                  ? (x(d.type === "group", "Expected group element"),
                    d.Ja.filter(__c.rb).map((e) =>
                      __c.qE.create({ ...e, locked: !0, Ug: !0 })
                    ))
                  : [];
              }),
              ug: c,
            };
          },
          Iec = __c.GZ()(({ wi: { bE: a } }) => ({
            metadata: { type: "blueprint", name: __c.K("iAtEVw") },
            D: {
              type: 0,
              Yy: ({ D: b }) => Hec({ resource: b.Ys.resource, bE: a }),
            },
            exports: {},
          }));
        y0 = __c.y0 = class {};
        y0.val = (a, b) => c_(0, 0, () => b)(a);
        y0.XD = (a, b) => c_(1, 0, () => b)(a);
        y0.ref = (a, b) => c_(0, 0, () => b)(a);
        y0.XGb = () => {
          var a = __c.z0;
          return c_(1, 1, () => a)(1);
        };
        y0.F7a = (a, b) => c_(0, 1, () => b)(a);
        y0.Lra = c_(0, 0, WZ);
        y0.fYa = c_(0, 0, YZ);
        y0.qj = c_(0, 0, ZZ);
        y0.Wx = c_(1, 0, WZ);
        y0.GTa = c_(1, 0, dbc);
        y0.eYa = c_(1, 0, YZ);
        y0.Gma = c_(1, 0, ZZ);
        y0.lF = c_(1, 0, XZ);
        y0.PSa = c_(1, 0, ebc);
        y0.Uz = c_(1, 1, WZ);
        y0.Uaa = c_(1, 1, dbc);
        y0.Sj = c_(1, 1, YZ);
        y0.aHb = c_(1, 1, XZ);
        y0.vC = c_(1, 1, ZZ);
        y0.WGb = c_(1, 1, ebc);
        y0.Mm = c_(0, 0, $Z);
        y0.listRef = c_(0, 0, a_);
        y0.BXa = c_(0, 0, function (a) {
          return { kind: 9, itemType: a };
        });
        y0.Bpa = c_(0, 0, b_);
        y0.wRb = c_(0, 0, fbc);
        y0.$Gb = c_(0, 1, $Z);
        y0.dHb = c_(0, 1, b_);
        y0.Mwa = c_(1, 0, b_);
        y0.D7a = c_(1, 1, $Z);
        y0.ZGb = c_(1, 1, a_);
        y0.yoa = c_(1, 1, b_);
        y0.HMa = WZ;
        y0.Tzb = XZ;
        y0.S9 = $Z;
        y0.D3a = a_;
        y0.ri = b_;
        y0.C3 = fbc;
        y0.XEb = d_({});
        var hbc = Object.freeze({
          document: Object.freeze({}),
          D: Object.freeze({}),
        });
        var Abc = __c.e_({
          D: d_({
            ML: y0.Lra(1),
            Ys: y0.Bpa(2, {
              domain: y0.qj(1, "resource"),
              resource: y0.Mwa(2, {
                ref: y0.Mm(2, "BlueprintRef"),
                resources: y0.dHb(3, {
                  fonts: y0.listRef(1, y0.S9("FontRef")),
                  media: y0.listRef(2, y0.S9("MediaRef")),
                  zd: y0.listRef(3, y0.S9("VideoRef")),
                  embeds: y0.listRef(5, y0.S9("EmbedRef")),
                }),
              }),
            }),
          }),
        });
        var Sbc = { Bh: Jbc, Qo: Iec, Ch: Abc };
        var Jec = class {
          constructor() {
            this.aZ = { nt: !1, AK: !1, LH: !1, dI: !1 };
          }
        };
        var Kec = class {
          create(a) {
            switch (a.type) {
              case "rect":
                return mbc(this, a);
              case "shape":
                return nbc(this, a);
              case "grid":
                return pbc(this, a);
              default:
                const b = __c.KR.snapshot(a);
                return __c.KR.create({
                  ...b,
                  locked: !0,
                  Ug: !0,
                  uh: lbc(this.M3a, a),
                });
            }
          }
          createPath(a) {
            return this.e.classes.tQ.create(
              { d: a.d },
              {
                U: { fill: f_(this, a.fill), stroke: a.stroke },
                attributes: { V: () => a.V },
              }
            );
          }
          constructor(a, b) {
            this.e = a;
            this.Od = b;
            this.M3a = new Jec();
          }
        };
        var Lec = class {
          constructor(a) {
            this.Od = a;
          }
        };
        var Kbc = __c.UZ()(() => ({
            CYb({ ML: a, Gnb: b, type: c }, d) {
              return {
                data: {
                  D: {
                    ML: a,
                    Ys: {
                      domain: "document",
                      id: b,
                      version: 1,
                      Ib:
                        c === "source"
                          ? { type: c }
                          : { type: c, Od: new Map() },
                    },
                  },
                  document: {},
                },
                P: d,
              };
            },
          })),
          Mec = ({ data: a, zH: b, expr: c }) => {
            b = b.wvb(a.ML);
            if (!b) throw Error(`Blueprint set ${a.ML} not found`);
            const d = b.Ci.get(a.Ys.id);
            if (!d)
              throw Error(
                `Blueprint ${a.Ys.id} not found in blueprint set ${a.ML}`
              );
            if (a.Ys.Ib.type === "source") return { Ja: d.vf };
            const e = new Kec(c, new Lec(a.Ys.Ib.Od));
            return { Ja: c.list(() => d.Ja.map((f) => e.create(f))) };
          },
          Nec = __c.GZ()(({ ZL: { expr: a }, wi: { zH: b } }) => ({
            metadata: { type: void 0, name: void 0 },
            D: { type: 0, Yy: ({ D: c }) => Mec({ data: c, zH: b, expr: a }) },
            exports: {},
          }));
        var Oec = y0.C3(
          { type: void 0 },
          y0.ri({ type: y0.qj(1, "boolean"), value: y0.Uaa(2) }),
          y0.ri({
            type: y0.qj(1, "non-negative-double"),
            value: y0.Sj(2, { min: 0 }),
          }),
          y0.ri({ type: y0.qj(1, "double"), value: y0.Sj(2) }),
          y0.ri({ type: y0.qj(1, "string"), value: y0.Uz(2) }),
          y0.ri({ type: y0.qj(1, "richtext2"), value: y0.Mm(2, "Richtext2") }),
          y0.ri({ type: y0.qj(1, "image_fill"), value: y0.Mm(2, "Fill") }),
          y0.ri({ type: y0.qj(1, "video_fill"), value: y0.Mm(2, "Fill") })
        );
        var Pec = y0.ri({ type: y0.qj(1, "source") }),
          Qec = y0.ri({ type: y0.qj(1, "instance"), Od: y0.BXa(2, Oec) }),
          Bbc = __c.e_({
            D: d_({
              ML: y0.Lra(1),
              Ys: y0.Bpa(2, {
                domain: y0.qj(1, "document"),
                id: y0.Lra(2),
                version: y0.lF(3),
                Ib: y0.wRb(4, { type: void 0 }, Pec, Qec),
              }),
            }),
          });
        var Tbc = { Bh: Kbc, Qo: Nec, Ch: Bbc };
        var Rec = class {
            static G(a) {
              L(a, { mj: r0.ref });
            }
            constructor(a) {
              this.mj = (Rec.G(this), void 0);
              this.mj = a;
            }
          },
          Hbc = __c.UZ()(() => ({
            BYb(a, b) {
              return {
                data: {
                  D: {
                    Mxa: { type: "embed", id: a, version: 0 },
                    PUa: b,
                    config: void 0,
                    $ja: void 0,
                  },
                  document: {},
                },
                P: { width: 1366, height: 768 },
              };
            },
          }));
        var Sec = class {};
        var Tec = class {
          static G(a) {
            L(a, { AT: r0.ref, fLa: s0 });
          }
          subscribe(a) {
            this.Qj.add(a);
            return () => {
              this.Qj.delete(a);
            };
          }
          async WCa(a, b, c, d, e, f) {
            const g = a.$ja.ref?.first(),
              h = this.wa;
            b = a.config != null && a.config !== "" ? a.config : b.config;
            this.config.AE?.Usa({ config: b }, a, c, d, e, f);
            let k;
            try {
              k = h != null && g != null ? await i_(h, g) : void 0;
            } catch (l) {
              this.J.Vb(l);
            }
            return new Oac({
              config: a.config != null && a.config !== "" ? a.config : void 0,
              PS: k,
            });
          }
          constructor(a, b, c, d) {
            this.config = a;
            this.wa = b;
            this.J = c;
            this.Pp = d;
            this.Qj = (Tec.G(this), new Set());
            this.AT = !1;
            this.notifyListeners = (e) => {
              this.Qj.forEach((f) => f(e));
            };
            this.M2 = (e, f) => {
              this.lo?.();
              this.lo = void 0;
              const g = (r) => PZ(f, new v0(r)),
                h = this.wa,
                k = h ? (r) => ubc(h, f, r) : void 0,
                l = (r) => Mac(f, new Kac(r)),
                m = (r) => PZ(f, new x0({ size: r })),
                n = {
                  WCa: async (r) => this.WCa(e, r, g, k, m, l),
                  $xb: (r) => {
                    this.config.AE?.Usa(
                      { ...r, qI: r.qI?.size },
                      e,
                      g,
                      k,
                      m,
                      l
                    );
                    return new Qac();
                  },
                  ZCa: this.Nxb,
                },
                p = j_(
                  () => e.config,
                  async (r) => {
                    const t = await OZ(f, { config: r, PS: void 0 });
                    t.config &&
                      t.config !== r &&
                      this.config.AE?.Usa(
                        { ...t, qI: t.qI?.size },
                        e,
                        g,
                        k,
                        m,
                        l
                      );
                  }
                ),
                q = j_(
                  () => e.$ja.ref?.first(),
                  async (r) => {
                    const t = e.config,
                      v = this.wa;
                    r = await OZ(f, {
                      config: t,
                      PS: v != null && r != null ? await i_(v, r) : void 0,
                    });
                    r.config &&
                      r.config !== t &&
                      this.config.AE?.Usa(
                        { ...r, qI: r.qI?.size },
                        e,
                        g,
                        k,
                        m,
                        l
                      );
                  }
                );
              this.lo = () => {
                p();
                q();
              };
              vbc(this, e, f, g, k, m, l);
              return { htb: n };
            };
            this.kK = (e) => {
              const f = this.Pp && new u0({ R6: this.Pp.id, rd: this.Pp.rd });
              return {
                sWa: {
                  l0a: () =>
                    new KZ({ Nj: e.page?.container?.id, mj: e.mj, Uhb: f }),
                  q0a: () => new LZ(),
                },
              };
            };
            this.fLa = () => {
              this.AT = !0;
            };
            this.HF = () => {
              this.lo?.();
            };
            this.Nxb = (e) => {
              this.notifyListeners({
                height: e.body.scrollHeight,
                width: e.body.scrollWidth,
              });
            };
          }
        };
        var Cbc = __c.e_({
          D: d_({
            Mxa: y0.Mm(1, "EmbedRef"),
            PUa: y0.Lra(35),
            config: y0.Uz(29),
            $ja: y0.ZGb(6, y0.S9("FontRef")),
          }),
        });
        var Uec = __c.GZ()(({ wi: a, ZL: b }) => {
            const c = a.aX,
              d = a.wa,
              e = a.Pp,
              f = b.J,
              g = new Sec();
            return {
              metadata: {
                type: "codelet",
                name: __c.K("4kcGvw"),
                YV: (h) => h.PUa,
              },
              C6: () => new Rec(void 0),
              D: __c.FZ(
                RZ(
                  ({
                    data: { D: h, local: k },
                    Ee: { afa: l, akb: m },
                    Ei: n,
                    hP: p,
                  }) => {
                    nec(() => {
                      k.mj = n.mj;
                    });
                    const [q] = m0(() => new Tec(g, d, f, e));
                    p0(() => {
                      p?.(q);
                    }, [q, p]);
                    const r = o0((v) => q.M2(h, v), [h, q]),
                      t = o0(() => q.kK(n), [q, n]);
                    return kec("div", {
                      className: "guWTXA",
                      children: [
                        TZ(l, {
                          url: h.Mxa.id,
                          children: ({ hk: v }) =>
                            TZ(c, {
                              url: h.Mxa.id,
                              hk: v,
                              kK: t,
                              M2: r,
                              HF: q.HF,
                              wac: q.fLa,
                            }),
                        }),
                        n.je > 10 &&
                          h.config != null &&
                          !q.AT &&
                          TZ("div", {
                            className: "djA3nQ",
                            children: TZ(m, {}),
                          }),
                      ],
                    });
                  }
                )
              ),
              exports: { config: g },
            };
          }),
          Ubc = { Bh: Hbc, Qo: Uec, Ch: Cbc };
        var Dbc = __c.e_({
            D: d_({
              Sy: y0.Mwa(
                1,
                d_({
                  Nxa: y0.Mm(1, "EmbedRef"),
                  config: y0.BXa(
                    2,
                    y0.ri({
                      textContent: y0.Uz(1),
                      backgroundColor: y0.Uz(2, /^#[0-9a-f]{6}$/),
                    })
                  ),
                  Geb: y0.Uz(3),
                })
              ),
            }),
          }),
          Ibc = __c.UZ()(() => ({
            AYb(a, b, c) {
              return {
                data: {
                  D: {
                    Sy: {
                      Nxa: { type: "embed", id: a, version: 0 },
                      config: b,
                      Geb: c,
                    },
                  },
                  document: {},
                },
                P: { width: 1366, height: 768 },
              };
            },
          })),
          Vec = class {};
        var Wec = class {
          subscribe(a) {
            this.Qj.add(a);
            return () => {
              this.Qj.delete(a);
            };
          }
          dispose() {
            this.Fi.forEach((a) => a());
            this.Fi = [];
          }
          constructor(a, b) {
            this.config = a;
            this.Pp = b;
            this.Qj = new Set();
            this.Fi = [];
            this.L2 = (c, d, e) => {
              this.dispose();
              this.Fi.push(xbc(c, e));
              this.config.AE && this.Fi.push(ybc(this.config.AE, e));
              return {
                btb: {
                  Zxb: (f) => {
                    if (d == null) return new MZ();
                    this.config.AE?.Hac(d, f.selection);
                    return new MZ();
                  },
                  ayb: (f) => {
                    this.config.AE?.Oac(c, f.WYa, f.textContent);
                    return new Eac();
                  },
                },
              };
            };
            this.N2 = () => ({
              uKb: {
                ZCa: (c) => {
                  const d = {
                    height: c.body.scrollHeight,
                    width: c.body.scrollWidth,
                  };
                  this.Qj.forEach((e) => e(d));
                },
              },
            });
            this.kK = (c) => {
              const d = this.Pp && new u0({ R6: this.Pp.id, rd: this.Pp.rd });
              return {
                sWa: {
                  l0a: () =>
                    new KZ({ Nj: c.page?.container?.id, mj: c.mj, Uhb: d }),
                  q0a: () => new LZ(),
                },
              };
            };
            this.HF = () => {
              this.dispose();
            };
          }
        };
        var Xec = __c.GZ()(({ wi: a }) => {
            const b = a.aX,
              c = a.Pp,
              d = new Vec();
            return {
              metadata: { type: void 0, name: void 0 },
              D: __c.FZ(
                RZ(({ data: { D: e }, Ee: { afa: f }, Ei: g, hP: h }) => {
                  const [k] = m0(() => new Wec(d, c));
                  p0(() => {
                    h?.(k);
                  }, [k, h]);
                  const l = o0(
                      (p) => k.L2(e.Sy.ref, g.mj, p),
                      [g.mj, e.Sy.ref, k]
                    ),
                    m = o0(() => k.N2(), [k]),
                    n = o0(() => k.kK(g), [k, g]);
                  return TZ(f, {
                    url: e.Sy.ref.Nxa.id,
                    children: ({ hk: p }) =>
                      TZ(b, {
                        url: e.Sy.ref.Nxa.id,
                        hk: p,
                        kK: n,
                        L2: l,
                        N2: m,
                        HF: k.HF,
                      }),
                  });
                })
              ),
              exports: { configuration: d },
            };
          }),
          Vbc = { Bh: Ibc, Qo: Xec, Ch: Dbc };
        var Mbc = class {
            Hn(a) {
              this.loading ||
                (this.loading = (a ?? Promise.resolve()).then(() =>
                  this.load()
                ));
              return this.loading;
            }
            constructor(a, b) {
              this.id = a;
              this.loadModule = b;
            }
          },
          Gbc = class {
            static G(a) {
              L(a, { Zia: r0.ref });
            }
            constructor() {
              this.Zia = (Gbc.G(this), void 0);
            }
          };
        var z_ = class {
            static of(a, b, c) {
              return new z_(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Noa = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Zec = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = Yec;
              this.Cmb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          A0 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.eIb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          afc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = $ec;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          $bc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Ymb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var ecc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        __c.bfc = bcc(4);
        __c.B0 = bcc(6);
        __c.cfc = ccc(5);
        __c.C0 = ccc(0);
        var dfc = class {},
          rcc = class extends dfc {
            rwa(a) {
              return new rcc(a(this.value));
            }
            MBa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          scc = class extends dfc {
            rwa(a, b) {
              return new scc(b(this.value));
            }
            MBa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var E_ = class {
            map(a) {
              return a(this);
            }
          },
          D0 = class extends E_ {
            bEa(a) {
              return this === a || a.cMa((b) => this.Y9(b));
            }
            WT() {
              throw Error(`${this} is not iterable`);
            }
            sGa(a) {
              const b = this.propTypes ?? (this.propTypes = this.Tma());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            Tma() {
              throw Error(`${this} is not navigable`);
            }
            VBa(a) {
              a(this);
            }
            cMa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          E0 = class extends D0 {
            Y9(a) {
              return a instanceof E0 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          F0 = class extends D0 {
            Y9(a) {
              return a instanceof F0 && this.ko === a.ko;
            }
            toString() {
              return this.ko.name;
            }
            constructor(a) {
              super();
              this.ko = a;
            }
          },
          G0 = class extends D0 {
            Y9(a) {
              return a instanceof G0 && this.ko === a.ko && D_(this.arg, a.arg);
            }
            toString() {
              return `${this.ko}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.ko = a;
              this.arg = b;
            }
          },
          efc = class extends G0 {
            WT() {
              return this.arg;
            }
            Tma() {
              const a = this.arg;
              return {
                size: N_.number,
                empty: N_.bd,
                get first() {
                  return N_.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          ffc = class extends G0 {
            WT() {
              return this.arg;
            }
            Tma() {
              const a = this.arg;
              return {
                size: N_.number,
                empty: N_.bd,
                get first() {
                  return N_.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          gfc = class extends D0 {
            Y9(a) {
              return (
                a instanceof gfc &&
                D_(this.key, a.key) &&
                D_(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          hfc = class extends D0 {
            Y9(a) {
              return a instanceof hfc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && D_(this.fields[b], c)
                  )
                : !1;
            }
            Tma() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          H0 = class extends E_ {
            bEa(a) {
              return this === a || this.Oh.every((b) => b.bEa(a));
            }
            WT() {
              return N_.union(...this.Oh.map((a) => a.WT()));
            }
            sGa(a) {
              return N_.union(...this.Oh.map((b) => b.sGa(a)));
            }
            VBa(a) {
              this.Oh.forEach((b) => b.VBa(a));
            }
            cMa(a) {
              return this.Oh.some((b) => b.cMa(a));
            }
            toString() {
              return this.Oh.length
                ? this.Oh.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.Oh = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          I0 = new H0([]),
          ifc = new E0("string"),
          jfc = new E0("number"),
          kfc = new E0("boolean"),
          lfc = new E0("undefined"),
          mfc = new H0([ifc, jfc, kfc]),
          nfc = class {
            get never() {
              return I0;
            }
            get string() {
              return ifc;
            }
            get number() {
              return jfc;
            }
            get bd() {
              return kfc;
            }
            get undefined() {
              return lfc;
            }
            get primitive() {
              return mfc;
            }
            optional(a) {
              return N_.union(a, N_.undefined);
            }
            array(a) {
              return new efc(a);
            }
            set(a) {
              return new ffc(a);
            }
            BY(a) {
              return new H0([new efc(a), new ffc(a)]);
            }
            map(a, b) {
              return new gfc(a, b);
            }
            O(a) {
              return new hfc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return I0;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) dcc(d).VBa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return I0;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return D_(d, e) ? e : D_(e, d) ? d : new H0(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => D_(d, e)) ||
                  (c.forEach((e) => D_(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new H0([...c]);
            }
            constructor() {
              this.optional = F_(this.optional);
              this.array = F_(this.array);
              this.set = F_(this.set);
              this.BY = F_(this.BY);
            }
          },
          ofc = class extends nfc {
            instance(a) {
              return new F0(a);
            }
          },
          N_ = new ofc(),
          pfc = class extends nfc {
            instance(a) {
              return new F0(z(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var qfc,
          rfc,
          J0 = Symbol("value"),
          K0 = class {
            get props() {
              return this.Glb ?? (this.Glb = this.Uva());
            }
          },
          sfc = class {
            get size() {
              return this[J0].length;
            }
            get empty() {
              return this[J0].length === 0;
            }
            get first() {
              return this[J0][0];
            }
            constructor(a) {
              this[J0] = a;
            }
          };
        qfc = Symbol.iterator;
        var tfc = class extends K0 {
            Uva() {
              return new sfc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [qfc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, I_).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          ufc = class {
            get size() {
              return this[J0].size;
            }
            get empty() {
              return this[J0].size === 0;
            }
            get first() {
              return this[J0][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[J0] = a;
            }
          };
        rfc = Symbol.iterator;
        var vfc = class extends K0 {
            Uva() {
              return new ufc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [rfc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, I_).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          wfc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${I_(a)}]: ${I_(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          xfc = class extends K0 {
            Uva() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${I_(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          yfc = class {
            toString() {
              return `[instance ${this.ko.name}]`;
            }
            constructor(a, b) {
              this.ko = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          zfc = class {
            array(a) {
              return new tfc(a);
            }
            set(a) {
              return new vfc(a);
            }
            map(a) {
              return new wfc(new Map(a));
            }
            O(a) {
              return new xfc({ ...a });
            }
          },
          Afc = class extends zfc {
            instance(a, b) {
              return new yfc(a, b);
            }
            stringify(a) {
              return I_(a);
            }
            constructor() {
              super();
              this.Yg = H_;
            }
          },
          R_ = new Afc(),
          Bfc = class extends zfc {
            instance(a, b) {
              a = z(this.classes[a]);
              return new yfc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var qcc = {
            [0]: A_(N_.number, N_.number, (a) => -a),
            [1]: A_(N_.string, N_.number, (a) => a.length),
            [2]: A_(N_.bd, N_.bd, (a) => !a),
            [3]: B_(N_.number, N_.number, N_.number, (a, b) => a + b),
            [4]: B_(N_.number, N_.number, N_.number, (a, b) => a - b),
            [5]: B_(N_.number, N_.number, N_.number, (a, b) => a * b),
            [6]: B_(N_.number, N_.number, N_.number, (a, b) => a / b),
            [7]: B_(N_.number, N_.number, N_.number, (a, b) => a % b),
            [8]: B_(N_.string, N_.string, N_.string, (a, b) => a + b),
            [9]: B_(N_.number, N_.number, N_.bd, (a, b) => a === b),
            [10]: B_(N_.number, N_.number, N_.bd, (a, b) => a !== b),
            [11]: B_(N_.number, N_.number, N_.bd, (a, b) => a < b),
            [12]: B_(N_.number, N_.number, N_.bd, (a, b) => a <= b),
            [13]: B_(N_.number, N_.number, N_.bd, (a, b) => a > b),
            [14]: B_(N_.number, N_.number, N_.bd, (a, b) => a >= b),
            [15]: B_(N_.bd, N_.bd, N_.bd, (a, b) => a && b),
            [16]: B_(N_.bd, N_.bd, N_.bd, (a, b) => a || b),
          },
          vcc = {
            [2]: new A0(N_.number, N_.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new A0(N_.number, N_.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new A0(N_.number, N_.number, (a) => Math.max(...a)),
            [5]: new A0(N_.number, N_.number, (a) => Math.min(...a)),
            [6]: new A0(N_.string, N_.string, (a) => a.join("")),
          },
          Cfc = (a) => R_.array(a),
          Dfc = (a) => R_.set(a),
          tcc = {
            [0]: (a) => new A0(a, N_.array(a), Cfc),
            [1]: (a) => new A0(a, N_.set(a), Dfc),
          },
          $ec = (a) => R_.map(a),
          hcc = { [0]: (a, b) => new afc(a, b, N_.map(a, b)) },
          Yec = (a) => R_.O(a),
          ycc = { [0]: (a) => new Zec(a, N_.O(a)) },
          Efc = (a, b) => R_.array(b.map((c) => c())),
          Ffc = (a, b) => R_.array(b.flatMap((c) => c().items)),
          Gfc = (a, b) => R_.array(a.filter((c, d) => b[d]()).map((c) => c())),
          Hfc = (a, b) => b.some((c) => c()),
          Ifc = (a, b) => b.every((c) => c()),
          Jfc = (a, b) => a.find((c, d) => b[d]())?.(),
          jcc = {
            [0]: (a, b) => b.map((c) => C_(a, c, N_.array(c), Efc)),
            [1]: (a, b) =>
              b.WT().map((c) => C_(a, N_.array(c), N_.array(c), Ffc)),
            [2]: (a) => C_(a, N_.bd, N_.array(a), Gfc),
            [3]: (a) => C_(a, N_.bd, N_.bd, Hfc),
            [4]: (a) => C_(a, N_.bd, N_.bd, Ifc),
            [5]: (a) => C_(a, N_.bd, N_.optional(a), Jfc),
          };
        var K_ = class {
          define(a, b) {
            return new K_(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var Lfc = (a, b, c) => {
            const d = J_.create(b.$L),
              e = new Kfc(a);
            return {
              compile: (f) => {
                const g = ncc(e, d, f).as(c);
                return (h) => {
                  h = new K_(new Map(b.decode(h).bKa));
                  return g(h);
                };
              },
            };
          },
          J_ = class {
            static create(a) {
              return new J_(new K_(new Map(a)), new K_(new Map()));
            }
            constructor(a = new K_(new Map()), b = new K_(new Map())) {
              this.vars = a;
              this.A8 = b;
            }
          },
          Kfc = class {
            constructor(a) {
              this.types = a;
            }
          },
          P_ = class {
            static of(a, b) {
              return new P_(a, b);
            }
            as(a) {
              if (!D_(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new P_(this.type, (b) => {
                const c = V_(a(b), { equals: R_.Yg });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          Jcc = class {
            as(a, b) {
              const c = this.Noa,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!D_(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!D_(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Noa = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var vdc = class {
            add(a) {
              a = a(Mfc, this.types);
              return new vdc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.bd;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new A(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.NSa));
                    case "set":
                      return b.set(this.evaluate(a.NSa));
                    default:
                      throw new A(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.NSa);
                      a = this.evaluate(a.FWb);
                      if (!D_(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new A(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.O(jd(a.args, (c) => this.evaluate(c)));
                default:
                  throw new A(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new pfc(this.classes);
              this.values = new Bfc(this.classes);
            }
          },
          Mfc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.LEb = new z_([N_.O(b)], N_.instance(this), (d) =>
                R_.instance(this, c(d.fields))
              );
            }
          };
        var Nfc;
        Nfc = Symbol.iterator;
        var Kcc = class {
          static G(a) {
            L(a, { R$: V_ });
          }
          get R$() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.Eg(b), b));
            return a;
          }
          sv(a) {
            return z(this.R$.get(a));
          }
          J0(a) {
            return a != null ? this.Eg(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.J0(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.Eg(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.Eg(b), c));
          }
          set(a, b) {
            return this.Eg(this.base.set(a, this.kJ(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.Eg(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return Mcc(this.base.entries(), ([a, b]) => [a, this.Eg(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return Mcc(this.base.values(), this.Eg);
          }
          [Nfc]() {
            return this.yi()[Symbol.iterator]();
          }
          yi() {
            return Id(this.base.yi(), this.Eg);
          }
          constructor(a, b, c) {
            this.base = a;
            this.kJ = b;
            this.Eg = c;
            Kcc.G(this);
          }
        };
        var Ofc;
        Ofc = Symbol.iterator;
        var Ncc = class {
          static G(a) {
            L(a, { R$: V_ });
          }
          get R$() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.Eg(b), b));
            return a;
          }
          sv(a) {
            return z(this.R$.get(a));
          }
          J0(a) {
            return a != null ? this.Eg(a) : void 0;
          }
          get empty() {
            return this.base.empty;
          }
          count() {
            return this.base.count();
          }
          toArray() {
            return this.base.toArray().map(this.Eg);
          }
          yi() {
            return Id(this.base.yi(), this.Eg);
          }
          [Ofc]() {
            return this.toArray()[Symbol.iterator]();
          }
          first(a) {
            return this.J0(this.base.first(a && ((b) => a(this.Eg(b)))));
          }
          last(a) {
            return this.J0(this.base.last(a && ((b) => a(this.Eg(b)))));
          }
          next(a, b) {
            return this.J0(
              this.base.next(this.sv(a), b && ((c) => b(this.Eg(c))))
            );
          }
          previous(a, b) {
            return this.J0(
              this.base.previous(this.sv(a), b && ((c) => b(this.Eg(c))))
            );
          }
          kf(a, b) {
            return this.base.kf(this.sv(a), this.sv(b));
          }
          Sr(a) {
            return this.base.Sr(this.sv(a));
          }
          has(a) {
            return this.base.has(this.sv(a));
          }
          set(a, b) {
            return this.Eg(this.base.set(a, this.kJ(b)));
          }
          replace(a, b) {
            return this.Eg(this.base.replace(this.sv(a), this.kJ(b)));
          }
          append(a) {
            return this.Eg(this.base.append(this.kJ(a)));
          }
          prepend(a) {
            return this.Eg(this.base.prepend(this.kJ(a)));
          }
          QI(a, b) {
            return this.Eg(this.base.QI(a && this.sv(a), this.kJ(b)));
          }
          insertBefore(a, b) {
            return this.Eg(this.base.insertBefore(a && this.sv(a), this.kJ(b)));
          }
          iF(a, b) {
            return this.base.iF(a && this.sv(a), b.map(this.kJ)).map(this.Eg);
          }
          delete(a) {
            this.base.delete(this.sv(a));
          }
          vE(a) {
            this.base.vE(a && ((b) => a(this.Eg(b))));
          }
          moveBefore(a, b) {
            this.base.moveBefore(a && this.sv(a), this.sv(b));
          }
          rq(a) {
            return new __c.IK(this, a);
          }
          map(a) {
            return this.base.map((b, c) => a(this.Eg(b), c));
          }
          flatMap(a) {
            return this.base.flatMap((b, c) => a(this.Eg(b), c));
          }
          filter(a) {
            return this.base.filter((b, c) => a(this.Eg(b), c)).map(this.Eg);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.Eg(b), c));
          }
          reduce(a, b) {
            return this.base.reduce((c, d) => a(c, this.Eg(d)), b);
          }
          some(a) {
            return this.base.some((b) => a(this.Eg(b)));
          }
          every(a) {
            return this.base.every((b) => a(this.Eg(b)));
          }
          constructor(a, b, c) {
            this.base = a;
            this.kJ = b;
            this.Eg = c;
            Ncc.G(this);
          }
        };
        var L0 = class {
            LM(a) {
              return new Pfc(this, a);
            }
            p8(a) {
              return new Qfc(this, a);
            }
            TS(a) {
              return new Rfc(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.S$());
            }
          },
          adc = class extends L0 {
            LM(a) {
              return new Sfc(a);
            }
            p8() {
              throw Error();
            }
            TS() {
              throw Error();
            }
            S$() {
              return "(global)";
            }
          },
          Sfc = class extends L0 {
            S$() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          Pfc = class extends L0 {
            S$() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          Qfc = class extends L0 {
            S$() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          Rfc = class extends L0 {
            S$() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          $cc = class {
            error(a, b) {
              return Error(
                `widget '${this.WSb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.WSb = a;
            }
          },
          ddc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          Vcc = new Set(["string", "boolean", "int32"]),
          edc = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var Tfc;
        Tfc = Symbol.iterator;
        var Ufc = class {
          get size() {
            return this.cells.size;
          }
          get(a) {
            return this.cells.get(a)?.get();
          }
          has(a) {
            return this.cells.has(a);
          }
          forEach(a) {
            for (const [b, c] of this.cells.entries()) a(c.get(), b);
          }
          map(a) {
            const b = [];
            for (const [c, d] of this.cells.entries()) b.push(a(d.get(), c));
            return b;
          }
          every(a) {
            for (const [b, c] of this.cells.entries())
              if (!a(c.get(), b)) return !1;
            return !0;
          }
          entries() {
            return this.yi().entries();
          }
          keys() {
            return this.cells.keys();
          }
          *values() {
            for (const a of this.cells.values()) yield a.get();
          }
          yi() {
            const a = new Map();
            for (const [b, c] of this.cells.entries()) a.set(b, c.get());
            return a;
          }
          [Tfc]() {
            return this.yi()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = new Map(a);
          }
        };
        var Vfc;
        Vfc = Symbol.iterator;
        var fdc = class {
          get $c() {
            return this.oNb.get();
          }
          get size() {
            return this.$c.size;
          }
          get(a) {
            return this.$c.get(a);
          }
          has(a) {
            return this.$c.has(a);
          }
          forEach(a) {
            this.$c.forEach(a);
          }
          map(a) {
            return this.$c.map(a);
          }
          every(a) {
            return this.$c.every(a);
          }
          entries() {
            return this.$c.entries();
          }
          keys() {
            return this.$c.keys();
          }
          values() {
            return this.$c.values();
          }
          yi() {
            return this.$c.yi();
          }
          [Vfc]() {
            return this.$c[Symbol.iterator]();
          }
          set(a, b) {
            return this.$c.set(a, b);
          }
          delete(a) {
            return this.$c.delete(a);
          }
          constructor(a) {
            this.oNb = a;
          }
        };
        var Wfc;
        Wfc = Symbol.iterator;
        var Xfc = class {
          get size() {
            return this.$c.size;
          }
          get(a) {
            return this.$c.get(a);
          }
          has(a) {
            return this.$c.has(a);
          }
          forEach(a) {
            this.$c.forEach(a);
          }
          map(a) {
            return this.$c.map(a);
          }
          every(a) {
            return this.$c.every(a);
          }
          entries() {
            return this.$c.entries();
          }
          keys() {
            return this.$c.keys();
          }
          values() {
            return this.$c.values();
          }
          yi() {
            return this.$c.yi();
          }
          [Wfc]() {
            return this.$c[Symbol.iterator]();
          }
          set() {
            return this.my();
          }
          delete() {
            return this.my();
          }
          my() {
            throw Error("dict not modifiable");
          }
          constructor(a) {
            this.$c = a;
          }
        };
        var Yfc,
          Zfc = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        Yfc = Symbol.iterator;
        var c0 = class {
          static G(a) {
            L(a, { Tr: V_, MS: V_, ZT: V_ });
          }
          get Tr() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          vl(a) {
            return z(this.Tr.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          yi() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get MS() {
            return this.cells[0]?.value;
          }
          get ZT() {
            return this.cells[this.cells.length - 1]?.value;
          }
          first(a) {
            return a ? this.cells.find((b) => a(b.value))?.value : this.MS;
          }
          last(a) {
            if (!a) return this.ZT;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.vl(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.vl(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          kf(a, b) {
            a = this.Tr.get(a);
            b = this.Tr.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Sr(a) {
            return this.cells[this.vl(a)].id;
          }
          has(a) {
            return this.Tr.has(a);
          }
          rq(a) {
            return new __c.IK(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [Yfc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (c0.G(this), void 0);
            this.cells = a.map((b, c) => new Zfc(String(c), b));
          }
        };
        var Ndc, mdc, X_, $fc, agc;
        __c.M0 = class {
          map(a, b) {
            const c = this.get,
              d = this.set;
            return new __c.M0(
              () => a(c()),
              (e) => d(b(e))
            );
          }
          project({ get: a, set: b }) {
            const c = this.get,
              d = this.set;
            return new __c.M0(
              () => a(c()),
              (e) => d(b(c(), e))
            );
          }
          constructor(a, b) {
            this.get = a;
            this.set = b;
          }
        };
        Ndc = class {
          read(a) {
            return W_(a) ? a() : a;
          }
          computed(a) {
            const b = V_(a);
            return () => b.get();
          }
          map(a, b) {
            return W_(a) ? () => b(a()) : b(a);
          }
          box(a) {
            return new iec(W_(a) ? new hec(V_(a)) : new gec(a));
          }
          list(a) {
            const b = this.map(
              a,
              (c) => new __c.Kub(new c0(c.map((d) => (W_(d) ? V_(d) : hdc(d)))))
            );
            return W_(b) ? __c.Ng(() => b()) : b;
          }
          $c(a) {
            const b = this.map(a, (c) => {
              c = new Map(
                Object.entries(c).map(([d, e]) => {
                  e = W_(e) ? V_(e) : hdc(e);
                  return [d, e];
                })
              );
              return new Xfc(new Ufc(c));
            });
            return W_(b) ? gdc(() => b()) : b;
          }
          constructor() {
            this.classes = udc();
          }
        };
        mdc = (a) => {
          const b = a.ko,
            c = a.Od,
            d = c.U,
            e = c.attributes;
          idc(a.args, d, e);
          return {
            create: function (f, g) {
              const h = {};
              var k;
              const l = g?.U;
              g = g?.attributes;
              if (l)
                for (const [m, n] of Object.entries(l))
                  u(m in d, "unknown override: '{}'", m),
                    W_(n) ? ((k || (k = {}))[m] = n) : (h[m] = $fc(n));
              if (g)
                for (const [m, n] of Object.entries(g))
                  u(m in e, "unknown override: '{}'", m),
                    (h[m] =
                      n instanceof __c.M0
                        ? n
                        : W_(n)
                        ? { enumerable: !0, get: n, set: X_ }
                        : agc(n));
              if (k)
                return jdc(
                  k,
                  ldc((m) => {
                    const n = b(f);
                    Object.defineProperties(n, { ...h, ...jd(m, $fc) });
                    return n;
                  })
                );
              k = b(f);
              Object.defineProperties(k, h);
              return k;
            },
          };
        };
        X_ = () => {};
        $fc = (a) => ({ enumerable: !0, writable: !1, value: a });
        agc = (a) => ({ enumerable: !0, get: () => a, set: X_ });
        var Y_ = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          locked: void 0,
          uh: void 0,
        };
        var N0 = new Map(),
          O0 = [],
          $_ = Object.freeze({
            Im: void 0,
            image: void 0,
            video: void 0,
            Za: void 0,
            color: void 0,
            Ra: 0,
            locked: !0,
            Ug: !0,
            Ql: void 0,
            ed: void 0,
            K: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
          }),
          pdc = Object.freeze({ fill: $_, stroke: void 0, V: 0 }),
          odc = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: $_,
            Vc: O0,
            We: !1,
          }),
          P0 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            Ra: 0,
            Ki: void 0,
            ga: void 0,
            K: void 0,
            transition: void 0,
            oa: O0,
            dc: O0,
            animation: void 0,
            Wf: void 0,
            link: void 0,
            locked: !0,
            uh: void 0,
            Ug: !0,
            Ql: void 0,
            Va: void 0,
            zu: void 0,
            Mf: O0,
            ZF: N0,
            oG: N0,
            anchor: void 0,
            xh: N0,
          }),
          a0 = Object.freeze({
            ...P0,
            type: "rect",
            fill: $_,
            stroke: void 0,
            V: O0,
          }),
          b0 = Object.freeze({
            ...P0,
            type: "shape",
            slice: void 0,
            jj: void 0,
            sb: O0,
            resizeMode: void 0,
          }),
          qdc = Object.freeze({
            ...P0,
            type: "text",
            text: Object.freeze({ stream: __c.$g.pE("\n"), Rb: N0 }),
            Ka: Object.freeze({ Wa: [] }),
            Xe: void 0,
            placeholder: void 0,
            ng: 1,
            writingMode: void 0,
            I: void 0,
            N: void 0,
            bp: !1,
            kB: void 0,
            Uh: void 0,
            ed: void 0,
          }),
          rdc = Object.freeze({ ...P0, type: "embed" }),
          sdc = Object.freeze({
            ...P0,
            type: "grid",
            cells: N0,
            layout: Object.freeze({
              template: O0,
              nB: O0,
              Al: O0,
              Mu: 0,
              Jv: 0,
            }),
          }),
          tdc = Object.freeze({ fill: $_, stroke: void 0, V: O0 });
        var Ldc = class {
            E6(a, b) {
              const c = a.ad;
              x(c.type !== "body", "Unexpected body context.");
              switch (c.type) {
                case "fixed-page":
                  return {
                    page: this.ij.F_a(c),
                    P: new Q0(a),
                    mj: a.D.id,
                    je: b,
                  };
                case "concatenated-fixed-page":
                  return {
                    page: this.ij.u_a(c),
                    P: new Q0(a),
                    mj: a.D.id,
                    je: b,
                  };
                case "controlled-page":
                  return {
                    page: this.ij.w_a(c),
                    P: new Q0(a),
                    mj: a.D.id,
                    je: b,
                  };
                case "responsive-page":
                  return {
                    page: this.ij.X_a(c),
                    P: new Q0(a),
                    mj: a.D.id,
                    je: b,
                  };
                default:
                  throw new A(c);
              }
            }
            constructor(a, b) {
              this.Zpa = a;
              u(
                b.gg === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.Ca = __c.qh(b);
              this.ij = new bgc(this.Zpa, this.Ca);
            }
          },
          Q0 = class {
            get width() {
              switch (this.container.type) {
                case "controlled-item":
                  return this.container.D.uf?.width || 0;
                case "controlled-page":
                  return 0;
                case "group-element":
                case "controlled-element":
                  return this.container.D.I;
                default:
                  throw new A(this.container);
              }
            }
            get height() {
              switch (this.container.type) {
                case "controlled-item":
                  return this.container.D.uf?.height || 0;
                case "controlled-page":
                  return 0;
                case "group-element":
                case "controlled-element":
                  return this.container.D.N;
                default:
                  throw new A(this.container);
              }
            }
            constructor(a) {
              this.container = a;
            }
          },
          R0 = class {
            getIndex() {
              return this.GI(this.page);
            }
            get id() {
              return this.page.D.id;
            }
            get title() {
              return this.page.D.title;
            }
            get anchor() {
              return this.page.D.anchor;
            }
            get m2a() {
              return this.page.D.vf;
            }
            constructor(a, b) {
              this.page = a;
              this.GI = b;
            }
          },
          cgc = class extends R0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          dgc = class extends R0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          egc = class extends R0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "controlled";
            }
          },
          fgc = class extends R0 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          ggc = class {
            get id() {
              return this.Zpa?.id;
            }
            get extension() {
              return this.Zpa?.extension;
            }
            get language() {
              return this.Ca.D.language;
            }
            constructor(a, b) {
              this.Zpa = a;
              this.Ca = b;
            }
          },
          bgc = class extends ggc {
            static G(a) {
              L(a, {
                ba: V_({ equals: oec.shallow }),
                a6a: V_({ equals: oec.shallow }),
              });
            }
            get ba() {
              return this.Ca.D.ba.map((a) => this.gxb(this.Ca.ve(a)));
            }
            get a6a() {
              return this.Ca.D.ba.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.mo = a;
              this.Ca = b;
              this.type = (bgc.G(this), "fixed");
              this.F_a = l0((c) => new cgc(c, this.GI, this));
              this.u_a = l0((c) => new dgc(c, this.GI, this));
              this.w_a = l0((c) => new egc(c, this.GI, this));
              this.X_a = l0((c) => new fgc(c, this.GI, this));
              this.gxb = l0((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.F_a(c);
                  case "concatenated-fixed-page":
                    return this.u_a(c);
                  case "controlled-page":
                    return this.w_a(c);
                  case "responsive-page":
                    return this.X_a(c);
                  default:
                    throw new A(c);
                }
              });
              this.GI = l0((c) => {
                c = this.Ca.D.ba.has(c.D) ? c.D : void 0;
                return c != null ? this.a6a.indexOf(c) : -1;
              });
            }
          };
        var hgc = class {
          constructor(a) {
            this.iKa = a;
            this.YVa = new Map();
          }
        };
        var igc = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          yi() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            d0();
          },
          previous() {
            d0();
          },
          kf() {
            d0();
          },
          Sr() {
            d0();
          },
          has() {
            return !1;
          },
          rq() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var Idc = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = r0.set(void 0, { deep: !1 })), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new __c.FA();
          }
        };
        var Adc = class {
          Gc(a) {
            let b = this.store.get(a);
            b == null && ((b = this.Rqb()), this.store.set(a, b));
            return b;
          }
          constructor(a) {
            this.Rqb = a;
            this.store = new WeakMap();
          }
        };
        var Nbc = new Set(),
          Obc = { Yy: () => ({ Ja: igc }) },
          Mdc = class {
            static G(a) {
              L(a, { nV: r0.shallow });
            }
            d8(a) {
              return this.nV.get(a)?.D;
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.Ca = a;
              this.iKa = b;
              this.y3 = c;
              this.Bya = d;
              this.J = e;
              this.qta = f;
              this.Ee = g;
              this.ntb = h;
              this.nV = (Mdc.G(this), new Map());
            }
          },
          Fdc = (a, b, c, d) => ({
            ...a,
            afa: (e) => TZ(a.afa, { ...e, eob: d || !1 }),
            hL: (e) => TZ(a.hL, { ...e, je: c, model: b }),
          }),
          Gdc = (a, b) => ({
            ...a,
            ek: (c) => TZ(a.ek, { ...c, scale: b || 1 }),
          });
        var jgc = class {
          static G(a) {
            L(a, { gca: r0.shallow });
          }
          constructor(a) {
            this.UVa = a;
            this.gca = (jgc.G(this), new Map());
          }
        };
        var kgc = class extends lec {
          render() {
            const {
              children: a,
              component: b = "div",
              tJb: c,
              Zna: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.wlb;
                return f;
              }, {}));
            return TZ(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Zna && Vdc(this);
          }
          componentDidUpdate() {
            this.props.Zna && Vdc(this);
          }
          componentWillUnmount() {
            this.CQ && (this.CQ(), (this.CQ = null));
          }
          constructor(...a) {
            super(...a);
            this.dva = this.CQ = null;
            this.wlb = (b) => {
              this.dva = b.nativeEvent;
            };
            this.vRa = (b) => {
              const c = this.props.Zna,
                d = this.dva === b;
              c && !d && c(b);
              this.dva = null;
            };
          }
        };
        var Ydc = (a) =>
          TZ(kgc, {
            tJb: ["onMouseDown", "onTouchStart"],
            Jsb: ["mousedown", "touchstart"],
            Zna: a.Faa,
            children: a.children,
          });
        var Wdc = class {
            static G(a) {
              L(a, { hk: r0.ref });
            }
            constructor() {
              this.hk = (Wdc.G(this), !0);
            }
          },
          Xdc = class {
            static G(a) {
              L(a, {
                onDoubleClick: s0.bound,
                onTouchEnd: s0.bound,
                reset: s0.bound,
              });
            }
            onDoubleClick() {
              this.store.hk = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.cW
                  ? (window.clearTimeout(this.cW),
                    (this.cW = void 0),
                    (this.store.hk = !1))
                  : (this.cW = window.setTimeout(
                      () => (this.cW = void 0),
                      300
                    )));
            }
            reset() {
              this.store.hk = !0;
            }
            rY() {
              this.cW && window.clearTimeout(this.cW);
            }
            constructor(a) {
              this.store = a;
              this.cW = (Xdc.G(this), void 0);
            }
          };
        __c.A_a = {
          Qzb: function ({
            document: a,
            ij: b,
            Pp: c,
            kA: d,
            bE: e,
            zH: f,
            ig: g,
            bja: h,
            wa: k,
            Fg: l,
            hL: m,
            Re: n,
            mg: p,
            je: q,
            ZSb: r,
            Rab: t,
            r$a: v,
            oka: w,
            MOa: y,
          }) {
            const B = g.sla,
              C = g.Eh;
            var D = g.J;
            const E = g.kg,
              J = g.ka,
              M = g.wYa,
              O = g.ab;
            var S = h.Vu;
            const { AAa: Q = !1, MAa: R = !1, HAa: W = !1 } = r ?? {},
              { Qn: ca, Bya: aa } = { Qn: xdc(), Bya: Lfc };
            r = new jgc(bdc(ca));
            const {
              uPa: ea,
              rta: ka,
              Lya: ja,
              y3: pa,
            } = { uPa: r, rta: r, Lya: aa, y3: ca };
            r = Ebc({ uPa: ea, AAa: Q, MAa: R, HAa: W });
            var ya = new hgc(ka);
            const { tPa: ba, Vhb: ra } = { tPa: ya, Vhb: ya };
            ya = Lbc({ vPa: r, tPa: ba });
            D = D.ag("widget");
            S = Zdc({ Vu: S, ab: O });
            const la = cec();
            m = m || eec();
            n = dec({ Re: n });
            p = $dc({ Hj: p });
            const wa = bec({ wa: k, oka: w });
            w = fec({ wa: k, oka: w });
            const {
              Iea: Ja,
              vy: Qa,
              qta: Ga,
              expr: Da,
            } = Odc({
              J: D,
              rta: ka,
              XSb: { afa: S, akb: la, hL: m, ek: n, cn: p, dfa: wa, yua: w },
              USb: { ek: Sdc() },
              Lya: ja,
              y3: pa,
              mo: b,
              Ca: a,
              Rab: t,
              r$a: v,
            });
            a = cbc({
              je: q,
              Vu: h.Vu,
              Mw: h.Mw,
              ab: g.ab,
              J: g.J.ag("codelet"),
              NOa: y,
            });
            const { nV: vb, YZa: Rb } = Wbc({
              vPa: r,
              Iea: Ja,
              kg: E,
              ZL: { J: D, ka: J, Fg: q === 30 ? l : void 0, ab: O, expr: Da },
              wi: {
                kA: d,
                zH: f,
                bE: e,
                wYa: M,
                wa: k,
                Pp: c,
                aX: a,
                sla: B,
                Eh: C,
              },
            });
            return {
              rta: ka,
              vy: Qa,
              ehc: vb,
              chc: ya,
              Vhb: ra,
              qta: Ga,
              YZa: Rb,
            };
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },

    /***/ 196751: (_, __, r) => r(258551),

    /***/ 149342: (_, __, r) => r(258551),

    /***/ 761582: (_, __, r) => r(258551),

    /***/ 751088: (_, __, r) => r(258551),
  },
]);
//# sourceMappingURL=sourcemaps/221c9366bec90182.js.map
