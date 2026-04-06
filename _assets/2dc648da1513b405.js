(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 563790: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var GB = __c.GB;
        var pc = __c.pc;
        var ug = __c.ug;
        var nm = __c.nm;
        var L = __c.L;
        var FB = __c.FB;
        var au = __c.au;
        var A = __c.A;
        var K = __c.K;
        var Ol = __c.Ol;
        var z = __c.z;
        var WCc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of e) {
                d = l.la;
                var g = m.column,
                  h = a.layout.cells.get(d, g);
                if (
                  !h ||
                  (l.boundary === "start" ? h.span.cc === d : h.span.ld === d)
                )
                  if (
                    ((d = c.get(`${g.id}:${d.id}`)),
                    (d = l.boundary === "start" ? d?.ma : d?.ya))
                  ) {
                    h = f[f.length - 1];
                    g = (g = b.next(g))
                      ? { column: g, boundary: "start" }
                      : { column: z(b.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.PAa),
                        (k =
                          k.column === m.column && k.boundary === m.boundary);
                    k &&
                      ((k = h.iab),
                      (k = k.la === l.la && k.boundary === l.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.ud === d.ud &&
                    h.ud === 0
                      ? (h.PAa = g)
                      : f.push({
                          iab: l,
                          wNb: m,
                          PAa: g,
                          color: d.color,
                          weight: d.weight,
                          ud: d.ud,
                        });
                  }
              }
            return f;
          },
          XCc = function (a, b, c, d, e, f) {
            const g = [];
            for (const m of e)
              for (const n of d) {
                var h = n.la,
                  k = m.column;
                e = a.layout.cells.get(h, k);
                if (
                  !e ||
                  (m.boundary === "start" ? e.span.mc === k : e.span.Dd === k)
                )
                  if (
                    ((e = c.get(`${k.id}:${h.id}`)),
                    (e = m.boundary === "start" ? e?.ta : e?.Na) &&
                      (m.boundary !== "start" || f(h, k) !== 1))
                  ) {
                    k = g[g.length - 1];
                    h = (h = b.next(h))
                      ? { la: h, boundary: "start" }
                      : { la: z(b.last()), boundary: "end" };
                    var l;
                    if ((l = k))
                      (l = k.SUa),
                        (l =
                          l.column === m.column && l.boundary === m.boundary);
                    l &&
                      ((l = k.VAa),
                      (l = l.la === n.la && l.boundary === n.boundary));
                    l &&
                    k.color === e.color &&
                    k.weight === e.weight &&
                    k.ud === e.ud &&
                    k.ud === 0
                      ? (k.VAa = h)
                      : g.push({
                          SUa: m,
                          MNb: n,
                          VAa: h,
                          color: e.color,
                          weight: e.weight,
                          ud: e.ud,
                        });
                  }
              }
            return g;
          },
          YCc = function (a, b, c, d, e, f) {
            const g = a.Ucb.wqb(d, b.last(), c.last());
            a = (r, t) => {
              const v = g.get(r) || 0,
                w = g.get(t) || 0;
              return v <= w ? r : t;
            };
            const h = new Map();
            if (e.length === 0 || f.length === 0) return h;
            var k = [],
              l = c.previous(f[0].column);
            l && k.push({ column: l, boundary: "start" });
            k.push(...f);
            (f = c.next(f[f.length - 1].column)) &&
              k.push({ column: f, boundary: "start" });
            f = [];
            (l = b.previous(e[0].la)) && f.push({ la: l, boundary: "start" });
            f.push(...e);
            (e = b.next(e[e.length - 1].la)) &&
              f.push({ la: e, boundary: "start" });
            for (const r of k) {
              k = (e = r.boundary === "start" ? r.column : void 0)
                ? c.previous(e)
                : c.last();
              for (const t of f) {
                var m = t.boundary === "start" ? t.la : void 0;
                l = m ? b.previous(m) : b.last();
                var n = e && m && d.get(`${e.id}:${m.id}`),
                  p = e && l && d.get(`${e.id}:${l.id}`);
                m = k && m && d.get(`${k.id}:${m.id}`);
                var q = k && l && d.get(`${k.id}:${l.id}`);
                l = r.boundary === "end" ? m?.Na : n?.ta;
                n = t.boundary === "end" ? p?.ya : n?.ma;
                p = r.boundary === "end" ? q?.Na : p?.ta;
                m = t.boundary === "end" ? q?.ya : m?.ma;
                q = __c.Pla({ ma: p, ya: l, ta: m, Na: n }, a);
                let v;
                switch (q) {
                  case "blockStart":
                    v = p;
                    break;
                  case "blockEnd":
                    v = l;
                    break;
                  case "inlineStart":
                    v = m;
                    break;
                  case "inlineEnd":
                    v = n;
                    break;
                  default:
                    v = void 0;
                }
                const { height: w, width: y } =
                  v?.ud === 1
                    ? { height: v.weight, width: v.weight }
                    : {
                        height: Math.max(m?.weight || 0, n?.weight || 0),
                        width: Math.max(p?.weight || 0, l?.weight || 0),
                      };
                h.set(n6(r, t), __c.Dl(q, w / 2, y / 2));
              }
            }
            return h;
          },
          ZCc = function (a, b, c, d, e, f, g, h) {
            if (f.length === 0 || g.length === 0) return [];
            const k = WCc(b, d, e, f, g);
            h = XCc(b, c, e, f, g, h);
            const l = YCc(a, c, d, e, f, g),
              m = a.rxb(c),
              n = a.Ewb(b, d),
              p = b.direction === "rtl";
            a = k
              .map((q) => {
                var r = q.wNb,
                  t = q.PAa,
                  v = q.iab;
                const w = q.color,
                  y = q.weight;
                q = q.ud;
                const B = p ? -1 : 1,
                  C = l.get(n6(r, v))?.Na,
                  D = l.get(n6(t, v))?.ta;
                if (C != null && D != null) {
                  var E = z(m.get(v.la)),
                    J = z(n.get(r.column));
                  r = z(n.get(t.column));
                  v = v.boundary === "start" ? E.start : E.end;
                  E = J.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: w,
                    weight: y,
                    ud: q,
                    p1: new Ol(E + C * B, v),
                    p2: new Ol(t + D * B, v),
                    ...__c.Il((t - E) * B, q * y, C),
                  };
                }
              })
              .filter(__c.rb);
            return [
              ...h
                .map((q) => {
                  var r = q.SUa,
                    t = q.MNb,
                    v = q.VAa;
                  const w = q.color,
                    y = q.weight;
                  q = q.ud;
                  const B = l.get(n6(r, t))?.ya,
                    C = l.get(n6(r, v))?.ma;
                  if (B != null && C != null) {
                    var D = z(n.get(r.column)),
                      E = z(m.get(t.la));
                    t = z(m.get(v.la));
                    r = r.boundary === "start" ? D.start : D.end;
                    D = E.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: w,
                      weight: y,
                      ud: q,
                      p1: new Ol(r, D + B),
                      p2: new Ol(r, v + C),
                      ...__c.Il(v - D, q * y, B),
                    };
                  }
                })
                .filter(__c.rb),
              ...a,
            ];
          },
          $Cc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Cl(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Cl(d, (e) => `${e.Cm}_${e.Dm}`);
              for (const [, e] of a) {
                const { Dm: f, Cm: g } = e[0];
                a = __c.Cl(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Cm: g, Dm: f });
              }
            }
            return b;
          },
          aDc = function (a, b, c, d, e) {
            return a.vKb(b, c, d, e);
          },
          bDc = function (a, b, c, d, e, f, g, h) {
            var k = __c.dOb;
            const l = f.get().flatMap((p) =>
                d.last() === p
                  ? [
                      { la: p, boundary: "start" },
                      { la: p, boundary: "end" },
                    ]
                  : [{ la: p, boundary: "start" }]
              ),
              m = g.get().flatMap((p) =>
                e.last() === p
                  ? [
                      { column: p, boundary: "start" },
                      { column: p, boundary: "end" },
                    ]
                  : [{ column: p, boundary: "start" }]
              ),
              n = new Map();
            for (const p of f.get())
              for (const q of g.get())
                (f = aDc(k.Ucb, a, b, c, { column: q, la: p })) &&
                  n.set(`${q.id}:${p.id}`, f);
            a = ZCc(k, a, d, e, n, l, m, h);
            return $Cc(a);
          },
          cDc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new A(a);
            }
          },
          dDc = function () {
            const [a] = (0, __c.kb)(() => au());
            return a;
          },
          eDc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.I)(a, { ...b }) });
          },
          fDc = function (a) {
            var b = a.gD;
            const c = a.content,
              d = a.context,
              e = a.es;
            __c.x(c?.wh?.type === "formula");
            const f = c.nk;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.Gua?.({
                  content: __c.sf(__c.Kjb, { ...__c.uJb, value: f.value }),
                  context: d,
                  es: e,
                });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                b = b.Jua?.({ context: d, value: c.TD, valueType: c.nk.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: o6(__c.av, {
                    label: cDc(f.error),
                    children: o6(__c.b8b, { tone: "critical" }),
                  }),
                };
                break;
              default:
                throw new A(f);
            }
            return b ?? a;
          },
          kDc = function (a) {
            const b = a.gD,
              c = a.lb,
              d = a.mg,
              e = a.COb,
              f = a.hb;
            b.Jua = (g) => __c.dRa({ ...g, hb: f });
            b.gRa = (g) => fDc({ ...g, gD: b });
            b.fRa = (g) => gDc({ ...g });
            b.Gua = eDc(hDc({ mg: d, dX: void 0, lb: c }));
            b.iRa = iDc(e, f);
            b.jRa = eDc((g) => o6(jDc, { ...g, hb: f }));
          },
          mDc = function ({
            label: a,
            cb: b,
            width: c,
            height: d,
            scale: e,
            ZUa: f,
          }) {
            return o6("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: p6(__c.Wu, {
                className: q6("ivlMMQ", lDc(f)),
                size: "small",
                alignment: "center",
                children: [b && o6(b, { size: "small" }), a],
              }),
            });
          },
          lDc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          oDc = function ({
            ee: a,
            M0a: b,
            scale: c,
            Nr: d,
            onMouseDown: e,
            onTouchStart: f,
            Or: g,
            Zhb: h,
            pWa: k,
          }) {
            const l = r6(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.fw(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return o6(__c.Xu, {
              gq: "light",
              light: "light",
              ht: "light",
              dark: "light",
              children: (q) =>
                o6("div", {
                  className: q6("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: o6("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: q6("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.xj,
                    children: o6(__c.gv, {
                      className: q6("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: o6(nDc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          qDc = function ({ lb: a }) {
            const b = new pDc(),
              c = new __c.ZT(),
              d = s6((g) => {
                const {
                    scale: h = 1,
                    H0a: k,
                    size: l = "small",
                    Zhb: m = !0,
                  } = g,
                  n = t6((p) => b.Or({ scale: p, size: l, gGa: k }), [l, k]);
                return o6(oDc, {
                  ...g,
                  scale: k ? Math.max(h, k) : h,
                  ee: g.sheet.direction === "rtl",
                  M0a: g.selection != null && b.fBb(g.sheet, a, g.selection),
                  Or: n,
                  Zhb: m,
                  pWa: g.pWa,
                  onMouseDown: g.onMouseDown,
                  onTouchStart: g.onTouchStart,
                });
              }),
              e = s6((g) => {
                const {
                    scale: h = 1,
                    H0a: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    jLb: p,
                  } = g,
                  q = t6((y) => b.Or({ scale: y, size: l, gGa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = t6((y) => n != null && b.rKa(n).has(y), [n]),
                  v = t6((y) => n != null && b.Byb(m, a, n).has(y), [m, n]),
                  w = t6(
                    (y) => {
                      var B = a.layout.xk.zh(m);
                      B = p != null && B.kf(y, p.mc) >= 0 && B.kf(y, p.Dd) <= 0;
                      return t(y)
                        ? B
                          ? "secondary-active"
                          : "primary-active"
                        : v(y)
                        ? B
                          ? "secondary-low"
                          : "primary-low"
                        : B
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return o6(u6, {
                  ...g,
                  pd: h,
                  Rd: r,
                  Or: q,
                  zI: w,
                  wJ: c,
                  lb: a,
                });
              }),
              f = s6((g) => {
                const {
                    scale: h = 1,
                    H0a: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    jLb: p,
                  } = g,
                  q = t6((y) => b.Or({ scale: y, size: l, gGa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = t6((y) => n != null && b.uKa(n).has(y), [n]),
                  v = t6((y) => n != null && b.Cyb(m, a, n).has(y), [m, n]),
                  w = t6(
                    (y) => {
                      var B = a.layout.xk.Ih(m);
                      B = p != null && B.kf(y, p.cc) >= 0 && B.kf(y, p.ld) <= 0;
                      return t(y)
                        ? B
                          ? "secondary-active"
                          : "primary-active"
                        : v(y)
                        ? B
                          ? "secondary-low"
                          : "primary-low"
                        : B
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return o6(v6, {
                  ...g,
                  pd: r,
                  Rd: h,
                  Or: q,
                  zI: w,
                  wJ: c,
                  lb: a,
                });
              });
            return { Cib: d, Bib: e, Dib: f };
          },
          rDc = function (a) {
            const b = a.Ps,
              c = () => null;
            return __c.iu((d) => o6(w6, { ...d, Ps: b, ej: c }));
          },
          sDc = function ({ sheet: a, lb: b, ui: c, da: d, range: e, cd: f }) {
            x6(
              () =>
                y6(() => {
                  if (f.current != null) {
                    var g = d?.get() ?? 1,
                      h = c.get(),
                      k = e
                        ? FB(
                            b.$a,
                            a,
                            { la: e.cc, column: e.mc },
                            { la: e.ld, column: e.Dd }
                          )?.ob()
                        : void 0,
                      l = a.direction === "rtl";
                    f.current.style.transform = `translate(${
                      k ? k.left * g * (l ? 1 : -1) : 0
                    }px, ${k ? -k.top * g : 0}px)`;
                    f.current.style.width = `${h.width * g}px`;
                    f.current.style.height = `${h.height * g}px`;
                  }
                }),
              [a, c, b.layout.xg, b.$a, e, f, d]
            );
          },
          vDc = function ({ onScroll: a }) {
            const b = new tDc(a);
            return {
              lG: b,
              qua: s6((c) =>
                o6(uDc, { sheet: c.sheet, lG: b, children: c.children })
              ),
            };
          },
          yDc = function (a) {
            const b = a.Ps,
              c = a.Re,
              d = a.Wcb,
              e = a.lb,
              f = ({ children: m }) => m,
              g = ({ children: m }) =>
                o6("div", { className: "Vc5nkQ", children: m }),
              { lG: h, qua: k } = vDc({ onScroll: a.onScroll });
            class l extends wDc {
              get rQ() {
                const m = this.props.ha.Er,
                  n = this.props.Mb;
                switch (m) {
                  case "screen":
                    return k;
                  case "print":
                    return n.Tk != null ? g : f;
                  default:
                    throw new A(m);
                }
              }
              componentDidMount() {
                d.Fcb(this.props.item, {
                  Mb: this.props.Mb,
                  ha: this.props.ha,
                });
              }
              componentWillUnmount() {
                d.$ob(this.props.item, {
                  Mb: this.props.Mb,
                  ha: this.props.ha,
                });
              }
              render() {
                d.Fcb(this.props.item, {
                  Mb: this.props.Mb,
                  ha: this.props.ha,
                });
                return o6(xDc, {
                  ...this.props,
                  da: this.da,
                  Ps: b,
                  rQ: this.rQ,
                  ej: this.ej,
                  Wcb: d,
                  lb: e,
                  lG: h,
                });
              }
              constructor(...m) {
                super(...m);
                this.da = z6(() => {
                  const n = this.props.item;
                  var p = this.props.ha,
                    q = p.Er;
                  p = p.Ck;
                  const r = this.props.Mb;
                  switch (q) {
                    case "screen":
                      return p;
                    case "print":
                      if (r.Tk != null) return 1;
                      q = d.vxb(n);
                      if (!q) return 1;
                      ({ width: q } = new __c.Tm(n, q.Mb, { Ck: p }));
                      return q / n.config.width;
                    default:
                      throw new A(q);
                  }
                });
                this.ej = s6((n) =>
                  o6("div", {
                    className: "wKvivQ",
                    children: o6(__c.lRa, { ...this.props, ...n, Re: c }),
                  })
                );
              }
            }
            return { Okb: l, lG: h };
          },
          ADc = function (a) {
            const b = a.Ps,
              c = a.lb,
              d = () => null;
            return (e) => o6(zDc, { ...e, Ps: b, ej: d, lb: c });
          },
          DDc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { kUa: b, DH: b, Xa: {}, dE: {} },
              d = A6(
                () => a.tD.style || c,
                (g) => {
                  Object.assign(a.Vga.style, g.kUa);
                  Object.assign(a.sR.style, g.DH);
                  Object.assign(a.RL.style, g.Xa);
                  Object.assign(a.MH.style, g.dE);
                  g = g?.Xa?.textDecoration;
                  a.RL.classList.toggle("OQx3PQ", g === "underline");
                  a.RL.classList.toggle("_99ezUA", g === "line-through");
                  a.RL.classList.toggle(
                    "kppAqQ",
                    g === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: BDc }
              ),
              e = A6(
                () => a.FEa,
                (g) => {
                  a.RL.classList.toggle("_84KvRA", !g);
                  a.Vga.classList.toggle("_84KvRA", !g);
                  a.sR.classList.toggle("TL_RLA", !g);
                },
                { fireImmediately: !0 }
              ),
              f = A6(
                () => a.renderer,
                (g) => {
                  a.Mha && g?.type !== "react"
                    ? ((a.Mha = void 0), a.sba.remove())
                    : (a.MH.innerHTML = "");
                  switch (g?.type) {
                    case "react":
                      a.Mha = CDc(g.node, a.sba);
                      a.MH.appendChild(a.sba);
                      break;
                    case "dom":
                      g.render(a.MH);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new A(g);
                  }
                  a.aHa();
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
              f();
            };
          },
          BDc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          FDc = function (a) {
            const b = a.hD,
              c = a.lb,
              d = a.jm,
              e = a.SG,
              f = a.mhb,
              g = new EDc(d, c);
            return (h) =>
              o6(B6, {
                ...h,
                SG: e,
                lb: c,
                jm: d,
                hD: b,
                ZDa: g,
                mhb: f?.get(),
              });
          };
        __c.HB.prototype.mra = __c.fa(20, function (a, b, c) {
          const d = [a];
          for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
          return d;
        });
        var n6 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.la.id}-${b.boundary}`,
          hDc =
            ({ mg: a, dX: b, lb: c }) =>
            (d) =>
              (0, __c.I)(__c.pRb, { ...d, mg: a, dX: b, lb: c }),
          GDc = __webpack_require__(322594),
          HDc = GDc.Fragment,
          o6 = GDc.jsx,
          p6 = GDc.jsxs;
        var IDc = __webpack_require__,
          JDc = IDc(208463),
          q6 = IDc.n_x(JDc)();
        var s6 = __webpack_require__(721226).PA;
        var C6 = __webpack_require__(205482),
          D6 = C6.Component,
          wDc = C6.PureComponent,
          t6 = C6.useCallback,
          x6 = C6.useEffect,
          KDc = C6.useLayoutEffect,
          r6 = C6.useMemo,
          E6 = C6.useRef;
        var F6 = __webpack_require__(186901),
          z6 = F6.EW,
          y6 = F6.fm,
          LDc = F6.m3,
          A6 = F6.mJ,
          MDc = F6.MN,
          NDc = F6.O8,
          G6 = F6.sH,
          H6 = F6.XI;
        var ODc = __webpack_require__(536618),
          PDc = ODc.Aj,
          I6 = ODc.iB,
          QDc = ODc.uP;
        var J6 = __webpack_require__(277049)._;
        var K6 = __webpack_require__(269018)._;
        var RDc = __webpack_require__(87387).A;
        var CDc = __webpack_require__(419094).createPortal;
        var SDc = class {
            static G(a) {
              L(a, { viewBox: G6.ref });
            }
            constructor() {
              this.viewBox =
                (SDc.G(this), nm({ top: 0, left: 0, height: 0, width: 0 }));
              this.nMb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          TDc = s6((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = E6(new SDc()),
              d = H6(() => {
                if (a.ita) {
                  var g = a.ita.current;
                  g &&
                    c.current.nMb(
                      nm({
                        top: g.scrollTop,
                        left: g.scrollLeft,
                        height: g.clientHeight,
                        width: g.clientWidth,
                      })
                    );
                }
              });
            x6(() => {
              d();
              a.ita.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.ita.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.ita, d]);
            const e = r6(() => ({ get: () => c.current.viewBox }), []),
              f = r6(
                () => z6(() => __c.im(0, 0, a.sheet.width, a.sheet.height)),
                [a.sheet]
              );
            return p6("div", {
              className: q6("nMvVqA", b),
              children: [
                p6("div", {
                  ref: a.cd,
                  className: "_0YOFPg",
                  children: [
                    o6(a.Ps, { ...a, viewport: e, ui: f }),
                    o6("div", {
                      className: q6("Gdl7fQ", b),
                      children: a.AQa?.get()?.map((g, h) => o6(g, {}, h)),
                    }),
                  ],
                }),
                a.E3b === "visible" &&
                  p6(HDc, {
                    children: [
                      o6("div", {
                        className: q6("_32sKQw", b),
                        children: o6(a.Lkb, { ...a }),
                      }),
                      o6("div", {
                        className: q6("xdIsTQ", b),
                        children: o6(a.Pkb, { ...a }),
                      }),
                      o6("div", {
                        className: q6("rsTRSA", b),
                        children: o6(a.Nkb, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          UDc = s6((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.stream.Z;
              case "text3":
                return __c.Xq.snapshot(a.value).cells.Z();
              default:
                throw new A(a);
            }
          });
        var VDc = 1 / 13.334,
          gDc = eDc(
            s6((a) => {
              var b = a.context;
              const c = a.value,
                d = a.onChange,
                e = b.attrs;
              b = b.container.column;
              __c.x(a.valueType === 3);
              const f = t6(
                  (m) => {
                    d?.(c, m.target.checked);
                  },
                  [d, c]
                ),
                g = e.fontSize ?? ug.Ub.fontSize,
                h = b.width;
              a = r6(() => {
                const m = 20 * g * VDc;
                return `${Math.round(m * Math.min(1, (h - __c.qU * 2) / m))}px`;
              }, [g, h]);
              b = r6(() => {
                var m = e.color ?? ug.Ub.color,
                  n = e.cE ?? ug.Ub.cE;
                const { h: p, s: q, va: r } = __c.yr(m),
                  t = __c.wr(new __c.qr(p, q * 0.59, r * 0.69)).Jp(),
                  v = __c.wr(new __c.qr(p, q * 0.68, r * 0.84)).Jp(),
                  w = __c.Dr(__c.Cr(__c.wr(m), 0.5));
                return {
                  DUa: m,
                  Oob: t,
                  EUa: v,
                  Pob: n !== "transparent" ? n : "#ffffff",
                  Qob: w,
                };
              }, [e]);
              const k = __c.Cu(),
                l = t6(
                  (m) => {
                    m.nativeEvent.cancelable && m.preventDefault();
                    m.stopPropagation();
                    H6(() => {
                      d && d(c, !c);
                    })();
                  },
                  [d, c]
                );
              return o6("label", {
                className: q6("s5Xvtg", { _0YWo_Q: k, agLBbw: d == null }),
                onTouchEnd: l,
                children: p6("div", {
                  className: "nOL94A",
                  style: {
                    "--V8rdkw": a,
                    "--6kHV0A": b.DUa,
                    "--dhlyXQ": b.Oob,
                    "--pMrTCg": b.EUa,
                    "--EyYwbg": b.DUa,
                    "--3ZWdlg": b.EUa,
                    "--81jhOQ": b.Pob,
                    "--Cs3XTw": b.Qob,
                  },
                  children: [
                    o6("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: H6((m) => f(m)),
                      className: "p8DDOg",
                      hidden: !0,
                    }),
                    o6("span", {
                      "aria-hidden": !0,
                      className: q6("l_S_Ng", { iGjddQ: c }),
                      children: o6(WDc, {}),
                    }),
                  ],
                }),
              });
            })
          ),
          WDc = () =>
            o6("svg", {
              className: "_8CNofA",
              viewBox: "0 0 10 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: o6("path", {
                d: "M0.750977 4.5L3.25098 7L9.25098 1",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            });
        var iDc = (a, b) =>
            __c.NQa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.stream.isEmpty)
                for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Ah: c } = __c.ag(ug, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    oa: void 0,
                    writingMode: 1,
                    Ad: "start",
                    Qe: XDc(e, c),
                    hb: b,
                  });
            }),
          XDc = I6(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.stream.Z.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: LDc.structural }
          );
        var YDc, ZDc, $Dc, jDc;
        new ((YDc = class extends J6 {
          constructor() {
            super(jDc);
            ZDc();
          }
        }),
        (() => {
          class a extends ($Dc = D6) {
            static G(b) {
              L(b, { Ah: z6 });
            }
            get Ah() {
              return __c.ag(ug, this.props.context.attrs).Ah;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = o6(this.props.ej, {
                content: b,
                la: c.container.la,
                col: c.container.column,
                Ah: this.Ah,
              });
              return this.Ah === "wrap"
                ? o6("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.G(this);
            }
          }
          ({
            c: [jDc, ZDc],
          } = K6(a, [], [pc], $Dc));
        })(),
        YDc)();
        var aEc = class {
          static mra(a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          }
          static G8(a, b, c) {
            __c.u(a.layout.cols.has(b), "Column not found in sheet");
            __c.u(a.layout.rows.has(c), "Row not found in sheet");
            var d = a.layout.cells.get(c, b);
            const {
              mc: e,
              cc: f,
              Dd: g,
              ld: h,
            } = d?.span || { mc: b, cc: c, Dd: b, ld: c };
            b = a.ma(f);
            c = a.ma(h) + h.height - b;
            d = a.ta(e);
            a = a.ta(g) + g.width - d;
            return nm({ top: b, left: d, width: a, height: c });
          }
        };
        var pDc = class {
          Or({ size: a, scale: b, gGa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.qX * b : __c.$6b * b;
          }
          constructor() {
            this.fBb = I6((a, b, c) => {
              c = c.get();
              const d = b.layout.xk.Ih(a);
              a = b.layout.xk.zh(a);
              return (
                c != null &&
                d.count() === (c.rows?.size || 0) &&
                a.count() === (c.columns?.size || 0)
              );
            });
            this.rKa = PDc((a) => new Set(a.get()?.columns || []), {
              equals: __c.ql,
            });
            this.uKa = PDc((a) => new Set(a.get()?.rows || []), {
              equals: __c.ql,
            });
            this.Byb = I6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.uKa(c);
                b = b.layout.xk.zh(a);
                if (e.size > 0) return new Set(b);
                c = this.rKa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.la, f.column);
                  for (const g of aEc.mra(
                    d ? d.span.mc : f.column,
                    d ? d.span.Dd : f.column,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.ql }
            );
            this.Cyb = I6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.rKa(c);
                b = b.layout.xk.Ih(a);
                if (e.size > 0) return new Set(b);
                c = this.uKa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.la, f.column);
                  for (const g of aEc.mra(
                    d ? d.span.cc : f.la,
                    d ? d.span.ld : f.la,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.ql }
            );
          }
        };
        var bEc,
          cEc,
          dEc,
          eEc,
          fEc,
          gEc,
          hEc = parseInt("4px", 10) || 4,
          iEc = parseInt("0.5px", 10) || 0.5,
          jEc = parseInt("1px", 10) || 1,
          kEc = parseInt("0.5px", 10) || 0.5,
          lEc = parseInt("0.5px", 10) || 0.5,
          mEc = parseInt("1px", 10) || 1,
          nEc = parseInt("0.5px", 10) || 0.5,
          u6;
        new ((bEc = class extends J6 {
          constructor() {
            super(u6);
            dEc();
          }
        }),
        (() => {
          class a extends (eEc = D6) {
            static G(b) {
              L(b, { ee: z6, Dt: z6, ada: z6 });
            }
            get ee() {
              return this.props.sheet.direction === "rtl";
            }
            get Dt() {
              const b = this.props.Nr?.get();
              if (b != null && b.length !== 0) return new __c.fw(b);
            }
            get ada() {
              return this.props.yCa?.()?.get();
            }
            render() {
              return o6(__c.Xu, {
                gq: "light",
                light: "light",
                ht: "light",
                dark: "light",
                children: this.wpb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (u6.G(this),
                H6((c) => {
                  const { onMouseMove: d, sheet: e, pd: f = 1 } = this.props;
                  d?.(c, e, "column", f);
                }));
              this.onMouseLeave = H6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = H6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = H6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.C$a = (c, d, e) => {
                const {
                    sheet: f,
                    lb: g,
                    Or: h,
                    zI: k,
                    S3b: l,
                    pd: m = 1,
                    Rd: n = 1,
                  } = this.props,
                  p = { jNbTIg: !this.ee, gtA7Dw: this.ee };
                var q = e?.sticky
                  ? this.ee
                    ? { right: 0 }
                    : { left: 0 }
                  : void 0;
                q = e?.sticky ? this.ada ?? q : void 0;
                let r = 0;
                const t = g.layout.xg.zh(f),
                  v = t.map((y) => {
                    if (!((c && t.kf(y, c) < 0) || (d && t.kf(y, d) > 0)))
                      return (
                        (r += y.width),
                        o6(
                          oEc,
                          {
                            col: y,
                            label: __c.At(f.Lu(y)),
                            cb: l?.get()?.get(y),
                            Or: h,
                            zI: k,
                            pd: m,
                            Rd: n,
                            start: g.$a.ta(f, y),
                          },
                          y.id
                        )
                      );
                  }),
                  w = this.ee ? { right: r * m } : { left: r * m };
                return p6("div", {
                  style: { height: h(n), width: r * m, ...q },
                  className: q6("Vt2_4w", p, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    v,
                    e?.sticky &&
                      o6("div", {
                        style: { width: hEc * m, ...w },
                        className: q6("HBvlug", "ru3tFQ", p),
                      }),
                  ],
                });
              };
              this.wpb = (c) => {
                var d = this.props.sheet;
                const e = this.props.lb,
                  f = e.layout.xg.u8(d),
                  g = { jNbTIg: !this.ee, gtA7Dw: this.ee };
                d = e.layout.xg.zh(d);
                return p6("div", {
                  ref: this.Dt?.xj,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: q6("xhBZaw", g, c.className),
                  children: [
                    f && this.C$a(void 0, f, { sticky: !0 }),
                    this.C$a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [u6, dEc],
          } = K6(a, [], [pc], eEc));
        })(),
        bEc)();
        var v6;
        new ((cEc = class extends J6 {
          constructor() {
            super(v6);
            fEc();
          }
        }),
        (() => {
          class a extends (gEc = D6) {
            static G(b) {
              L(b, { ee: z6, Dt: z6, ada: z6 });
            }
            get ee() {
              return this.props.sheet.direction === "rtl";
            }
            get Dt() {
              const b = this.props.Nr?.get();
              if (b != null && b.length !== 0) return new __c.fw(b);
            }
            get ada() {
              return this.props.yCa?.()?.get();
            }
            render() {
              return o6(__c.Xu, {
                gq: "light",
                light: "light",
                ht: "light",
                dark: "light",
                children: this.NKb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (v6.G(this),
                H6((c) => {
                  const { onMouseMove: d, sheet: e, Rd: f = 1 } = this.props;
                  d?.(c, e, "row", f);
                }));
              this.onMouseLeave = H6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = H6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = H6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.H$a = (c, d, e) => {
                const {
                    sheet: f,
                    lb: g,
                    Or: h,
                    zI: k,
                    pd: l = 1,
                    Rd: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.ee, gtA7Dw: this.ee };
                var p = e?.sticky ? { top: 0 } : void 0;
                p = e?.sticky ? this.ada ?? p : void 0;
                let q = 0;
                const r = g.layout.xg.Ih(f),
                  t = r.map((v) => {
                    if (!((c && r.kf(v, c) < 0) || (d && r.kf(v, d) > 0))) {
                      q += v.height;
                      var w = `${f.Iv(v) + 1}`;
                      return o6(
                        pEc,
                        {
                          la: v,
                          label: w,
                          zI: k,
                          Or: h,
                          pd: l,
                          Rd: m,
                          start: g.$a.ma(f, v),
                        },
                        v.id
                      );
                    }
                  });
                return p6("div", {
                  style: { height: q * m, width: h(l), ...p },
                  className: q6("_93roJg", n, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    t,
                    e?.sticky &&
                      o6("div", {
                        style: { height: hEc * m },
                        className: q6("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.NKb = (c) => {
                var d = this.props.sheet;
                const e = this.props.lb,
                  f = e.layout.xg.v8(d),
                  g = { jNbTIg: !this.ee, gtA7Dw: this.ee };
                d = e.layout.xg.Ih(d);
                return p6("div", {
                  ref: this.Dt?.xj,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: q6("An9VeA", g, c.className),
                  children: [
                    f && this.H$a(void 0, f, { sticky: !0 }),
                    this.H$a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [v6, fEc],
          } = K6(a, [], [pc], gEc));
        })(),
        cEc)();
        var oEc = s6((a) => {
            const b = a.label,
              c = a.cb,
              d = a.col,
              e = a.zI,
              f = a.Or,
              g = a.pd,
              h = a.Rd,
              k = f(h),
              l = QDc(() => e(d));
            return o6("div", {
              className: q6("_83Rssw", "d2uLIA", lDc(l)),
              style: {
                width: d.width * g,
                height: k,
                borderInlineWidth: `${iEc * g}px`,
                borderBlockStartWidth: `${jEc * g}px`,
                borderBlockEndWidth: `${kEc * g}px`,
                transform: `translateX(${a.start * g}px)`,
              },
              children: o6(mDc, {
                label: b,
                cb: c,
                width: d.width,
                height: f(1),
                scale: h,
                ZUa: l,
              }),
            });
          }),
          pEc = s6((a) => {
            const b = a.label,
              c = a.la,
              d = a.Or,
              e = a.zI,
              f = a.pd,
              g = a.Rd,
              h = d(f),
              k = QDc(() => e(c));
            return o6("div", {
              className: q6("_83Rssw", "JhBzyw", lDc(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${lEc * g}px`,
                borderInlineStartWidth: `${mEc * g}px`,
                borderInlineEndWidth: `${nEc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: o6(mDc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                ZUa: k,
              }),
            });
          });
        var qEc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var rEc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var nDc = __c.HT({ Ip: qEc, medium: rEc });
        var sEc, tEc, uEc, w6;
        new ((sEc = class extends J6 {
          constructor() {
            super(w6);
            tEc();
          }
        }),
        (() => {
          class a extends (uEc = D6) {
            static G(b) {
              L(b, { Lf: z6.struct });
            }
            render() {
              const b = this.props.element;
              return o6(this.props.Ps, {
                sheet: b.D.config,
                container: b,
                ui: this.ui,
                xga: "visible",
                Nr: this.props.Nr,
                Mv: this.props.Mv,
                Sw: this.props.Sw,
                Uw: this.props.Uw,
                da: this.props.da,
                Lf: this.Lf,
                ej: this.props.ej,
                kL: void 0,
              });
            }
            get Lf() {
              return __c.Nt(this.props.element.D.Va, this.props.Jf);
            }
            constructor(...b) {
              super(...b);
              this.ui =
                (w6.G(this),
                z6(() => {
                  const c = this.props.element.D.config;
                  return __c.im(0, 0, c.width, c.height);
                }));
            }
          }
          ({
            c: [w6, tEc],
          } = K6(a, [], [pc], uEc));
        })(),
        sEc)();
        var vEc = class {
          constructor() {
            this.Rqa = new WeakMap();
            this.vxb = (a) => this.Rqa.get(a);
            this.Fcb = (a, b) => {
              this.Rqa.set(a, b);
            };
            this.$ob = (a, b) => {
              const c = this.Rqa.get(a);
              c && c.ha === b.ha && c.Mb === b.Mb && this.Rqa.delete(a);
            };
          }
        };
        var wEc = parseInt("4px", 10) || 4,
          xEc = s6(
            ({ sheet: a, lb: b, ui: c, da: d, range: e, hz: f, jz: g }) => {
              if (e != null && (f || g)) {
                d = d?.get() ?? 1;
                c = c.get();
                var h = a.direction === "rtl",
                  k = { ZJ0G6w: !h, dOI_jA: h };
                a = FB(
                  b.$a,
                  a,
                  { la: e.cc, column: e.mc },
                  { la: e.ld, column: e.Dd }
                )?.ob();
                if (a != null) {
                  if (f && g)
                    return o6("div", {
                      style: {
                        top: (a.top + a.height) * d,
                        width: a.width * d,
                        height: wEc * d,
                      },
                      className: q6("aX8dhQ", "VGcLng"),
                    });
                  if (f)
                    return (
                      (f = a.left + a.width),
                      o6("div", {
                        style: {
                          width: wEc * d,
                          height: c.height * d,
                          ...(h ? { right: f * d } : { left: f * d }),
                        },
                        className: q6("aX8dhQ", "gl1RPg", k),
                      })
                    );
                  if (g)
                    return o6("div", {
                      style: {
                        top: (a.top + a.height) * d,
                        width: c.width * d,
                        height: wEc * d,
                      },
                      className: q6("aX8dhQ", "VGcLng"),
                    });
                }
              }
            }
          );
        var L6 = ({ sheet: a, lb: b, range: c, ui: d, da: e, children: f }) => {
            const g = dDc();
            sDc({ sheet: a, lb: b, ui: d, da: e, range: c, cd: g });
            return o6("div", {
              ref: g,
              className: q6(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: f,
            });
          },
          yEc = ({ sheet: a, lb: b, range: c, ui: d, da: e, children: f }) => {
            const g = dDc();
            sDc({ sheet: a, lb: b, ui: d, da: e, range: c, cd: g });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return o6("div", {
              className: q6("nstn2A", a, "_9sodyg"),
              children: o6("div", {
                ref: g,
                className: q6("nstn2A", a),
                children: f,
              }),
            });
          };
        var uDc = s6(({ sheet: a, children: b, lG: c }) => {
            const d = t6(
                (f) => {
                  c.vLa(a, f);
                },
                [c, a]
              ),
              e = t6(
                (f) => {
                  f != null ? c.mG.set(a, f) : c.mG.delete(a);
                },
                [c, a]
              );
            return o6(__c.B4b, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              Kx: e,
              children: b,
            });
          }),
          tDc = class {
            vLa(a, b) {
              this.onScroll && this.onScroll(a);
              this.hca.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.mG = new WeakMap();
              this.hca = G6.map(new Map(), { deep: !1 });
              this.scrollTo = H6((b, c) => {
                this.mG.get(b)?.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var xDc = s6((a) => {
          const b = a.item,
            c = a.Nr,
            d = a.Mv,
            e = a.sg,
            f = a.measureRef,
            g = a.da,
            h = a.U1a,
            k = a.Mb,
            l = a.Sw,
            m = a.Uw,
            n = a.Ps,
            p = a.rQ,
            q = a.ej,
            r = a.Jf,
            t = a.lb,
            v = a.lG;
          a = r6(() => __c.Nt(b.Va, r), [b, r]);
          const w = r6(
              () =>
                z6(() => {
                  const E = b.config;
                  return __c.im(0, 0, E.width, E.height);
                }),
              [b]
            ),
            y = r6(
              () =>
                s6(({ sheet: E, range: J, hz: M, jz: O }) =>
                  o6(L6, {
                    sheet: E,
                    lb: t,
                    range: J,
                    ui: w,
                    da: g,
                    children: o6(xEc, {
                      sheet: E,
                      lb: t,
                      ui: w,
                      da: g,
                      range: J,
                      hz: M,
                      jz: O,
                    }),
                  })
                ),
              [g, w, t]
            ),
            B = __c.$xa(b.config),
            C = g.get(),
            D = Math.min(B.width * C, k.width);
          x6(
            () =>
              y6(() => {
                var E = b.config.view.freeze.KH
                  ? b.config.layout.Fe.get(b.config.view.freeze.KH)
                  : void 0;
                if (E != null)
                  if (b.config.ta(E) + E.width > D) {
                    if ((E = v.mG.get(b))) E.style.overflowX = "hidden";
                  } else if ((E = v.mG.get(b))) E.style.overflowX = "scroll";
              }),
            [b, k.width, v, C, D]
          );
          return o6("div", {
            ref: f,
            className: "E8r86A",
            style: { width: D },
            children: o6(p, {
              sheet: b,
              children: o6("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: B.width * C, height: B.height * C },
                children: o6("div", {
                  className: "W1ir5A",
                  children: o6(n, {
                    container: e.uk(b),
                    sheet: b.config,
                    ui: w,
                    xga: "visible",
                    Nr: c,
                    Mv: d,
                    da: g,
                    Sw: l,
                    Uw: m,
                    Lf: a,
                    ej: q,
                    kL: y,
                  }),
                }),
              }),
            }),
          });
        });
        var zEc = s6(({ page: a, lb: b, range: c, aG: d }) => {
          var e =
            c != null &&
            c.mc != null &&
            c.cc != null &&
            c.Dd != null &&
            c.ld != null
              ? FB(
                  b.$a,
                  a.sheet,
                  { la: c.cc, column: c.mc },
                  { la: c.ld, column: c.Dd }
                )
              : void 0;
          return o6("div", {
            className: "Gi9pfA",
            children: a.elements.map((f, g) =>
              e == null ? d(f, g) : __c.lm(nm(f)).Vr(e) && d(f, g)
            ),
          });
        });
        var AEc = new __c.ZT(),
          BEc = (a) => __c.qX * a,
          CEc = () => "primary-default",
          zDc = s6(
            ({
              container: a,
              Nr: b,
              Mv: c,
              Sw: d,
              Uw: e,
              S8: f,
              da: g,
              viewport: h,
              lb: k,
              VMb: l,
              Ps: m,
              ej: n,
              aG: p,
              Ppa: q,
              JVb: r,
              pUb: t,
              oUb: v,
            }) => {
              const w = a.page,
                y = r6(
                  () =>
                    z6(() => {
                      {
                        var C = k.$a;
                        var D = w.sheet,
                          E = C.tA.xk.Ih(D),
                          J = C.tA.xk.zh(D);
                        const M = E.first(),
                          O = J.first();
                        E = E.last();
                        J = J.last();
                        C =
                          M && O && E && J
                            ? FB(
                                C,
                                D,
                                { la: M, column: O },
                                { la: E, column: J }
                              )
                            : void 0;
                      }
                      return C ?? __c.im(0, 0, 0, 0);
                    }),
                  [w, k]
                ),
                B = r6(
                  () =>
                    s6(({ sheet: C, range: D, hz: E, jz: J }) =>
                      p6(HDc, {
                        children: [
                          o6(L6, {
                            sheet: w.sheet,
                            lb: k,
                            range: D,
                            ui: y,
                            da: g,
                            children: o6(xEc, {
                              sheet: C,
                              lb: k,
                              ui: y,
                              da: g,
                              range: D,
                              hz: E,
                              jz: J,
                            }),
                          }),
                          p6(yEc, {
                            sheet: w.sheet,
                            lb: k,
                            range: D,
                            ui: y,
                            da: g,
                            children: [
                              r && o6(r, {}),
                              p && o6(zEc, { page: w, lb: k, aG: p, range: D }),
                              v && o6(v, {}),
                              q && q(),
                            ],
                          }),
                          t &&
                            D &&
                            o6(L6, {
                              sheet: w.sheet,
                              lb: k,
                              range: D,
                              ui: y,
                              da: g,
                              children: o6(t, { range: D }),
                            }),
                        ],
                      })
                    ),
                  [w, k, y, g, r, p, v, q, t]
                );
              return l
                ? o6(DEc, {
                    container: a,
                    ui: y,
                    viewport: h,
                    da: g,
                    Nr: b,
                    Mv: c,
                    Sw: d,
                    Uw: e,
                    Ps: m,
                    ej: n,
                    kL: B,
                    lb: k,
                  })
                : o6(m, {
                    sheet: w.sheet,
                    container: a,
                    ui: y,
                    xga: "hidden",
                    Nr: b,
                    Mv: c,
                    Sw: d,
                    Uw: e,
                    S8: f,
                    da: g,
                    viewport: h,
                    ej: n,
                    kL: B,
                  });
            }
          ),
          DEc = s6((a) => {
            const b = a.container,
              c = a.ui,
              d = a.da,
              e = a.viewport,
              f = a.Nr,
              g = a.Mv,
              h = a.Sw,
              k = a.Uw,
              l = a.Ps,
              m = a.ej,
              n = a.kL;
            a = a.lb;
            const p = b.page,
              q = p.sheet.direction === "rtl",
              r = E6(null),
              t = E6(null),
              v = E6(null);
            x6(() => {
              const D = M6({
                sheet: p.sheet,
                Dra: !0,
                Era: !0,
                da: d,
                viewport: e,
              });
              return A6(
                () => D?.get(),
                (E) => {
                  const J = r.current;
                  if (E && J) {
                    var M = p.sheet.direction === "rtl";
                    J.style.position = E.position ?? "sticky";
                    J.style.top = E.top ?? "0px";
                    M
                      ? (J.style.right = E.right ?? "0px")
                      : (J.style.left = E.left ?? "0px");
                    J.style.transform = E.transform ?? "";
                  }
                }
              );
            }, [p.sheet, d, e]);
            x6(() => {
              const D = M6({
                sheet: p.sheet,
                Dra: !1,
                Era: !0,
                da: d,
                viewport: e,
              });
              return A6(
                () => D?.get(),
                (E) => {
                  const J = v.current;
                  E &&
                    J &&
                    ((J.style.position = E.position ?? "sticky"),
                    (J.style.top = E.top ?? "0px"),
                    (J.style.transform = E.transform ?? ""));
                }
              );
            }, [p.sheet, d, e]);
            x6(() => {
              const D = M6({
                sheet: p.sheet,
                Dra: !0,
                Era: !1,
                da: d,
                viewport: e,
              });
              return A6(
                () => D?.get(),
                (E) => {
                  const J = t.current;
                  if (E && J) {
                    var M = p.sheet.direction === "rtl";
                    J.style.position = E.position ?? "sticky";
                    M
                      ? (J.style.right = E.right ?? "0px")
                      : (J.style.left = E.left ?? "0px");
                    J.style.transform = E.transform ?? "";
                  }
                }
              );
            }, [p.sheet, d, e]);
            const w = t6(
                (D, E, J) =>
                  M6({ sheet: D, Dra: E, Era: J, da: d, viewport: e }),
                [d, e]
              ),
              y = r6(
                () => (w ? () => w(p.sheet, !0, !1) : void 0),
                [w, p.sheet]
              ),
              B = r6(
                () => (w ? () => w(p.sheet, !1, !0) : void 0),
                [w, p.sheet]
              ),
              C = d?.get() ?? 1;
            return p6("div", {
              className: q6("OsKKIQ", "cbOp6Q"),
              children: [
                o6("div", {
                  className: "VDFv_A",
                  children: o6(l, {
                    sheet: p.sheet,
                    container: b,
                    ui: c,
                    xga: "hidden",
                    Nr: f,
                    Mv: g,
                    Sw: h,
                    Uw: k,
                    S8: w,
                    da: d,
                    viewport: e,
                    ej: m,
                    kL: n,
                  }),
                }),
                o6("div", {
                  ref: r,
                  className: "_688KWg",
                  children: o6(oDc, { ee: q, M0a: !1, Or: BEc, scale: C }),
                }),
                o6("div", {
                  ref: v,
                  className: "m0cT1w",
                  children: o6(u6, {
                    sheet: p.sheet,
                    pd: C,
                    Rd: C,
                    Or: BEc,
                    zI: CEc,
                    wJ: AEc,
                    yCa: y,
                    lb: a,
                  }),
                }),
                o6("div", {
                  ref: t,
                  className: "zm537g",
                  children: o6(v6, {
                    sheet: p.sheet,
                    pd: C,
                    Rd: C,
                    Or: BEc,
                    zI: CEc,
                    wJ: AEc,
                    yCa: B,
                    lb: a,
                  }),
                }),
              ],
            });
          }),
          M6 = ({ sheet: a, Dra: b, Era: c, da: d, viewport: e }) =>
            z6(() => {
              var f = e?.get().ob();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new Ol(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var EDc = class {
          constructor(a, b) {
            this.jm = a;
            this.lb = b;
            this.zob = __c.qU;
            this.Xwb = I6((c, d, e, f) => {
              e = e.get();
              const g = new WeakMap();
              for (let v = 0; v < e.length; v++) {
                var h = e[v],
                  k = this.Owb(c, d, h);
                if (k) {
                  switch (k) {
                    case "start":
                    case "justify":
                      var l = e[v + 1];
                      if (l == null || !GB(c, this.lb, d, l)) continue;
                      break;
                    case "center":
                      l = e[v + 1];
                      if (l == null || !GB(c, this.lb, d, l)) continue;
                      l = e[v - 1];
                      if (l == null || !GB(c, this.lb, d, l)) continue;
                      break;
                    case "end":
                      l = e[v - 1];
                      if (l == null || !GB(c, this.lb, d, l)) continue;
                      break;
                    default:
                      throw new A(k);
                  }
                  if ((l = f(d, h))) {
                    var m = l.width + (k === "center" ? 0 : this.zob);
                    if (!(h.width > m)) {
                      switch (k) {
                        case "start":
                        case "justify":
                          k = this.lb.$a.ta(c, h);
                          l = k + m;
                          break;
                        case "center":
                          l = this.lb.$a.ta(c, h) + h.width / 2;
                          k = l - m / 2;
                          l += m / 2;
                          break;
                        case "end":
                          l = this.lb.$a.ta(c, h) + h.width;
                          k = l - m;
                          break;
                        default:
                          throw new A(k);
                      }
                      for (m = e.indexOf(h); m >= 0; m--) {
                        var n = e[m],
                          p = m - 1 < 0 || GB(c, this.lb, d, e[m - 1]),
                          q;
                        if ((q = n === h || GB(c, this.lb, d, n))) {
                          q = k;
                          var r = l,
                            t = this.lb.$a.ta(c, n);
                          q = q < t && t < r;
                        }
                        if (q && p) g.set(n, 1);
                        else break;
                      }
                      for (h = e.indexOf(h) + 1; h < e.length; h++) {
                        m = e[h];
                        if ((n = GB(c, this.lb, d, m)))
                          (n = k),
                            (p = l),
                            (q = this.lb.$a.ta(c, m)),
                            (n = n < q && q < p);
                        if (n) g.set(m, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return g;
            });
            this.Owb = (c, d, e) => {
              const f = c.layout.cells.get(d, e);
              if (
                f &&
                (f.ref.content.ref || f.ref.Fa.ref) &&
                f.span.cc === f.span.ld &&
                f.span.mc === f.span.Dd
              ) {
                var g = this.jm.qo(c, d, e);
                c = this.jm.sCa(
                  c,
                  d,
                  e,
                  __c.vg({ Ah: void 0, textAlign: void 0 })
                );
                var { Ah: h, textAlign: k } = __c.ag(ug, c);
                if (h === "overflow")
                  return __c.RQa(
                    k,
                    f.ref.content.ref?.type,
                    f.ref.Fa.ref?.type,
                    g ? () => g.nk.type : void 0
                  );
              }
            };
          }
        };
        var EEc = s6(function (a) {
          const b = a.sheet;
          var c = a.lb,
            d = a.FW;
          const e = a.FSb,
            f = a.da,
            g = a.ZDa,
            h = a.Cwb;
          a = a.overflow;
          const k = dDc();
          KDc(
            () =>
              y6(() => {
                const r = z(k.current),
                  t = f?.get() ?? 1,
                  v = b.height;
                r.style.width = `${b.width * t}px`;
                r.style.height = `${v * t}px`;
              }),
            [k, f, b]
          );
          const l = t6((r) => g.Xwb(b, r, e, h), [g, b, e, h]);
          var m = t6((r, t) => l(r)?.get(t) ?? 0, [l]),
            n = c.layout.xk.Ih(b);
          const p = c.layout.xk.zh(b),
            q = c.layout.xg.Ih(b);
          c = c.layout.xg.zh(b);
          d = bDc(b, n, p, q, c, d, e, m);
          c = b.width;
          m = b.height;
          n = b.direction === "rtl";
          return o6("svg", {
            ref: k,
            role: "presentation",
            className: q6("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${c} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: d.map(({ lines: r, color: t, weight: v, Cm: w, Dm: y }) =>
              o6(
                "path",
                {
                  stroke: t,
                  strokeDasharray: w,
                  strokeDashoffset: y,
                  strokeWidth: v,
                  d: r
                    .map(
                      ({ p1: B, p2: C }) => `M ${B.x} ${B.y} L ${C.x} ${C.y}`
                    )
                    .join(" "),
                },
                `${t}-${v}-${w}-${y}`
              )
            ),
          });
        });
        var FEc;
        FEc = Symbol.iterator;
        var GEc = class {
          get size() {
            return this.lra;
          }
          get([a, b]) {
            return (a = this.dJ.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.dJ.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.dJ.get(a);
            d == null && ((d = new Map()), this.dJ.set(a, d));
            d.set(b, c);
            this.lra++;
            return this;
          }
          clear() {
            this.dJ.clear();
            this.lra = 0;
          }
          delete([a, b]) {
            const c = this.dJ.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.lra--;
            c.size === 0 && this.dJ.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.dJ) for (const [d, e] of c) a([b, d], e);
          }
          *[FEc]() {
            for (const [a, b] of this.dJ)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.lra = 0;
            this.dJ = new Map();
          }
        };
        var HEc,
          IEc,
          JEc,
          KEc,
          LEc,
          MEc,
          NEc,
          OEc,
          PEc = class extends D6 {
            render() {
              const { jka: a, ...b } = this.props,
                c = this.props.sheet;
              return p6("div", {
                ref: this.Zcb,
                className: q6(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.oTa &&
                    o6(N6, {
                      ...b,
                      sheet: c,
                      range: a.oTa.range,
                      hz: !0,
                      jz: !0,
                      className: "_0C8M3w",
                    }),
                  a?.zhb &&
                    o6(N6, {
                      ...b,
                      sheet: c,
                      range: a.zhb.range,
                      hz: !1,
                      jz: !0,
                      className: "_7n44yg",
                    }),
                  a?.P0a &&
                    o6(N6, {
                      ...b,
                      sheet: c,
                      range: a.P0a.range,
                      hz: !0,
                      jz: !1,
                      className: "fF5r6w",
                    }),
                  a?.ogb &&
                    o6(N6, {
                      ...b,
                      sheet: c,
                      range: a.ogb.range,
                      hz: !1,
                      jz: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = y6(() => {
                var b = this.props,
                  c = b.da;
                b = b.ui;
                const d = this.Zcb.current;
                if (d) {
                  c = c ? c.get() : 1;
                  const { width: e, height: f } = b.get();
                  d.style.width = `${e * c}px`;
                  d.style.height = `${f * c}px`;
                }
              });
              __c.gc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.Zcb = au();
            }
          };
        ({
          c: [OEc, JEc],
        } = K6(PEc, [], [pc], D6));
        JEc();
        var N6;
        new ((HEc = class extends J6 {
          constructor() {
            super(N6);
            KEc();
          }
        }),
        (() => {
          class a extends (LEc = D6) {
            static G(b) {
              L(b, { NLa: z6, bounds: z6 });
            }
            get NLa() {
              const b = this.props.viewport,
                c = this.props.hz,
                d = this.props.jz;
              return b == null || (!c && !d)
                ? b
                : z6(() => {
                    const e = b.get().ob();
                    return nm({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.sheet,
                c = this.props.ui,
                d = this.props.container,
                e = this.props.range,
                f = this.props.kL,
                g = this.props.hz,
                h = this.props.jz;
              return p6("div", {
                ref: this.hIa,
                className: q6("i0YQww", this.props.className),
                children: [
                  o6("div", {
                    ref: this.C8a,
                    className: "vUKoKg",
                    children: o6("div", {
                      ref: this.D8a,
                      children: o6(O6, {
                        sheet: b,
                        container: d,
                        ui: c,
                        bounds: e,
                        Nr: this.props.Nr,
                        Mv: this.props.Mv,
                        SG: this.props.SG,
                        ej: this.props.ej,
                        y6: this.props.y6,
                        lb: this.props.lb,
                        da: this.props.da,
                        FW: this.FW,
                        Cea: this.Cea,
                        LY: this.LY,
                      }),
                    }),
                  }),
                  o6(this.rua, {}),
                  f && o6(f, { sheet: b, range: e, hz: g, jz: h }),
                ],
              });
            }
            componentDidMount() {
              const b = y6(() => {
                  var h = this.props,
                    k = h.da,
                    l = h.sheet,
                    m = h.ui,
                    n = h.lb,
                    p = this.hIa.current;
                  const q = this.C8a.current;
                  h = this.D8a.current;
                  var r = this.bounds,
                    t = r.mc;
                  const v = r.Dd,
                    w = r.cc;
                  r = r.ld;
                  k = k ? k.get() : 1;
                  const { width: y, height: B } = m.get();
                  n = (m =
                    w && t && r && v
                      ? FB(
                          n.$a,
                          l,
                          { la: w, column: t },
                          { la: r, column: v }
                        )?.ob()
                      : void 0)
                    ? m.width
                    : y;
                  t = m ? m.height : B;
                  p &&
                    ((p.style.width = `${n * k}px`),
                    (p.style.height = `${t * k}px`));
                  q &&
                    ((q.style.width = `${n * k}px`),
                    (q.style.height = `${t * k}px`));
                  l = l.direction === "rtl";
                  l = m ? m.left * k * (l ? 1 : -1) : 0;
                  p = m ? -m.top * k : 0;
                  h && (h.style.transform = `translate(${l}px, ${p}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.S8;
              const e = this.props.hz,
                f = this.props.jz,
                g = e || f ? d?.(c, e, f) : void 0;
              d = y6(() => {
                const h = this.hIa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const q = g.get();
                    h.style.position = q.position ?? k;
                    h.style.top = q.top ?? l;
                    h.style.left = p ? "unset" : q.left ?? m;
                    h.style.right = p ? q.right ?? n : "unset";
                    h.style.transform = q.transform ?? "unset";
                  }
                }
              });
              __c.gc(this, [b, d]);
            }
            get bounds() {
              var b = this.props.sheet,
                c = this.props.lb,
                d = this.props.range;
              const e = c.layout.xk.Ih(b);
              b = c.layout.xk.zh(b);
              if (b.empty || e.empty)
                return { mc: void 0, Dd: void 0, cc: void 0, ld: void 0 };
              c = d.mc;
              const f = d.Dd,
                g = d.cc;
              d = d.ld;
              const h = b.first(),
                k = e.first(),
                l = b.last(),
                m = e.last();
              return {
                mc: c ? (b.has(c) ? c : void 0) : h,
                Dd: f ? (b.has(f) ? f : void 0) : l,
                cc: g ? (e.has(g) ? g : void 0) : k,
                ld: d ? (e.has(d) ? d : void 0) : m,
              };
            }
            constructor(...b) {
              super(...b);
              this.hIa = (N6.G(this), au());
              this.C8a = au();
              this.D8a = au();
              this.LY = new QEc();
              this.GSb = z6(
                () =>
                  [...this.FW.get().keys()].sort((c, d) =>
                    this.props.lb.layout.xg.Ih(this.props.sheet).kf(c, d)
                  ),
                { equals: __c.rl() }
              );
              this.ESb = z6(
                () =>
                  [...this.Cea.get().keys()].sort((c, d) =>
                    this.props.lb.layout.xg.zh(this.props.sheet).kf(c, d)
                  ),
                { equals: __c.rl() }
              );
              this.rua = s6(() =>
                o6(this.props.Kkb, {
                  FW: this.GSb,
                  FSb: this.ESb,
                  Cwb: this.LY.wka,
                  range: this.props.range,
                })
              );
              this.FW = z6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.da;
                  const e = this.props.lb;
                  var f = this.NLa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d,
                    k =
                      !f && g.cc && g.mc && g.ld && g.Dd
                        ? FB(
                            e.$a,
                            c,
                            { la: g.cc, column: g.mc },
                            { la: g.ld, column: g.Dd }
                          )?.ob()
                        : void 0;
                  const l = f ? f.qa.y - h : k?.top ?? 0;
                  f = f ? f.br.y + h : k?.height ?? 0;
                  h = new Map();
                  k = e.layout.xk.Ih(c);
                  const m = e.layout.xg.Ih(c);
                  for (
                    let n = g.cc;
                    n != null && g.ld != null && k.kf(n, g.ld) <= 0;
                    n = k.next(n)
                  ) {
                    if (!m.has(n)) continue;
                    const p = e.$a.ma(c, n);
                    if (!(p + n.height < l)) {
                      if (p > f) break;
                      h.set(n, p * d);
                    }
                  }
                  return h;
                },
                { equals: LDc.shallow }
              );
              this.Cea = z6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.da;
                  const e = this.props.lb;
                  var f = this.NLa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d,
                    k =
                      !f && g.cc && g.mc && g.ld && g.Dd
                        ? FB(
                            e.$a,
                            c,
                            { la: g.cc, column: g.mc },
                            { la: g.ld, column: g.Dd }
                          )?.ob()
                        : void 0;
                  const l = f ? f.qa.x - h : k?.left ?? 0;
                  f = f ? f.br.x + h : k?.width ?? 0;
                  h = new Map();
                  k = e.layout.xk.zh(c);
                  const m = e.layout.xg.zh(c);
                  for (
                    let n = g.mc;
                    n != null && g.Dd != null && k.kf(n, g.Dd) <= 0;
                    n = k.next(n)
                  ) {
                    if (!m.has(n)) continue;
                    const p = e.$a.ta(c, n);
                    if (!(p + n.width < l)) {
                      if (p > f) break;
                      h.set(n, p * d);
                    }
                  }
                  return h;
                },
                { equals: LDc.shallow }
              );
            }
          }
          ({
            c: [N6, KEc],
          } = K6(a, [], [pc], LEc));
        })(),
        HEc)();
        var QEc = class {
            constructor() {
              this.cells = new GEc();
              this.rJa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = G6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.wka = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = G6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.yVa;
              };
            }
          },
          O6;
        new ((IEc = class extends J6 {
          constructor() {
            super(O6);
            MEc();
          }
        }),
        (() => {
          class a extends (NEc = D6) {
            static G(b) {
              L(b, { aQ: G6.shallow, Dt: z6, OSa: H6, Xha: H6.bound });
            }
            get Dt() {
              const b = this.props.Nr?.get();
              if (b != null && b.length !== 0) return new __c.fw(b);
            }
            render() {
              return p6("div", {
                onMouseDown: this.props.Mv?.onMouseDown,
                onTouchStart: this.props.Mv?.onTouchStart,
                ref: RDc(this.cd, this.Dt?.xj),
                children: [
                  o6("div", { ref: this.qxa, className: "_5YlOqQ" }),
                  o6("div", { ref: this.sxa, className: "_XCmKw" }),
                  this.aQ.map((b) => b.AIb),
                ],
              });
            }
            componentDidMount() {
              const b = A6(
                  () => [
                    this.props.sheet,
                    this.props.Cea.get(),
                    this.props.FW.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.apb();
                    this.OSa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = y6(() => {
                  var e = this.props,
                    f = e.da;
                  e = e.ui;
                  const g = this.cd.current;
                  if (g) {
                    f = f ? f.get() : 1;
                    const { width: h, height: k } = e.get();
                    g.style.width = `${h * f}px`;
                    g.style.height = `${k * f}px`;
                  }
                }),
                d = this.aQ.map((e) => DDc(e));
              __c.gc(this, [c, b, ...d]);
            }
            apb() {
              const b = z(this.qxa.current),
                c = z(this.sxa.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.cPa.length = 0;
              this.aQ.length = 0;
            }
            OSa(b, c) {
              const d = z(this.qxa.current),
                e = z(this.sxa.current),
                f = [],
                g = new Map();
              for (const h of this.cPa)
                c.has(h.la) ? g.set(h.la, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new REc(this.Xha, h)),
                    d.appendChild(c.Wga),
                    e.appendChild(c.Yga),
                    this.cPa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Xha(b, c) {
              const d = this.props.y6,
                e = this.props.lb,
                f = this.props.sheet,
                g = this.props.container,
                h = this.props.LY;
              b = new SEc(
                this.props.SG,
                this.props.ej,
                d(b, c),
                e,
                f,
                b,
                c,
                g,
                h.rJa,
                this.Hka,
                this.Gka
              );
              __c.gc(this, DDc(b));
              this.aQ.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.cd = (O6.G(this), au());
              this.qxa = au();
              this.sxa = au();
              this.cPa = [];
              this.aQ = [];
              this.Hka = I6((c) => {
                const d = this.props.FW.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.Gka = I6((c) => {
                const d = this.props.Cea.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [O6, MEc],
          } = K6(a, [], [pc], NEc));
        })(),
        IEc)();
        var REc = class {
            static G(a) {
              L(a, { update: H6 });
            }
            update(a, b, c) {
              [this.Wga, this.Yga].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.la = b;
              for (const [d] of c)
                (c = this.aQ.get(d)),
                  c ||
                    ((c = this.Xha(d, b)),
                    this.aQ.set(d, c),
                    this.Wga.appendChild(c.Vga),
                    this.Yga.appendChild(c.sR)),
                  c.update(b);
            }
            hide() {
              [this.Wga, this.Yga].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Xha = a;
              this.la = b;
              this.Wga = (REc.G(this), document.createElement("div"));
              this.Yga = document.createElement("div");
              this.aQ = new Map();
            }
          },
          SEc = class {
            static G(a) {
              L(a, {
                Mha: G6.ref,
                la: G6.ref,
                update: H6,
                Qy: z6,
                attrs: z6.struct,
                FEa: z6,
                DH: z6,
                renderer: z6,
                yVa: z6.struct,
              });
            }
            update(a) {
              a !== this.la &&
                ((this.la = a),
                (this.tD.la = a),
                this.Xza && this.Xza(),
                (this.Xza = this.rJa(this.la, this.col, this)));
            }
            get AIb() {
              return this.Mha;
            }
            get Qy() {
              const a = this.sheet.layout.cells.get(this.la, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.tD.attrs;
              return {
                Ah: a?.Ah,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
                cE: a?.cE,
              };
            }
            get FEa() {
              var a = this.tD.span;
              if (!a) return !1;
              if (a.cc === a.ld && a.mc === a.Dd) return !0;
              var b = this.Hka("first");
              const c = this.Hka("last"),
                d = this.Gka("first"),
                e = this.Gka("last");
              if (!(b && c && d && e)) return !1;
              const f = this.lb.layout.xk.Ih(this.sheet),
                g = this.lb.layout.xk.zh(this.sheet);
              b = f.kf(a.cc, b) >= 0 && f.kf(a.cc, c) <= 0 ? a.cc : b;
              a = g.kf(a.mc, d) >= 0 && g.kf(a.mc, e) <= 0 ? a.mc : d;
              return b === this.la && a === this.col;
            }
            get DH() {
              const a = this.sheet,
                b = this.la,
                c = this.col;
              if (!this.container)
                return {
                  type: void 0,
                  container: { config: a },
                  la: b,
                  column: c,
                };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.US(c, b);
                case "sheet-item":
                  return this.container.US(c, b);
                case "sheet-element":
                  return this.container.US(c, b);
                default:
                  throw new A(this.container);
              }
            }
            get renderer() {
              const a = this.Qy;
              if (a && this.FEa && (a.content.ref || a.Fa.ref))
                return this.SG({
                  context: { container: this.DH, attrs: this.attrs },
                  es: this.aHa,
                  ej: this.ej,
                });
            }
            get yVa() {
              this.zVa.reportObserved();
              var a = NDc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.sba : this.MH),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              this.SG = a;
              this.tD = c;
              this.lb = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.rJa = k;
              this.Hka = l;
              this.Gka = m;
              this.Vga = (SEc.G(this), document.createElement("div"));
              this.sR = document.createElement("div");
              this.RL = document.createElement("div");
              this.MH = document.createElement("div");
              this.sba = document.createElement("div");
              this.zVa = MDc("content size atom");
              this.aHa = H6(() => this.zVa.reportChanged());
              this.la = g;
              this.Vga.className = "_2JFriw";
              this.sR.className = "imy9ug";
              this.RL.className = q6("pDMp7w", {
                _0yZ6Qg: this.Qy?.content.ref?.type !== "text3",
                qhF5uA:
                  this.Qy?.content.ref?.type !== "text3" &&
                  this.Qy?.content.ref?.type !== "text2",
              });
              this.MH.className = "_30B9pw";
              this.RL.appendChild(this.MH);
              this.sR.appendChild(this.RL);
              this.sba.className = "G7zH2w";
              this.Xza = k(this.la, this.col, this);
              this.ej = (n) => o6(b, { ...n, es: this.aHa });
            }
          };
        var TEc, UEc, VEc, B6;
        new ((TEc = class extends J6 {
          constructor() {
            super(B6);
            UEc();
          }
        }),
        (() => {
          class a extends (VEc = D6) {
            static G(b) {
              L(b, { jka: z6 });
            }
            render() {
              const {
                  sheet: b,
                  container: c,
                  ui: d,
                  lb: e,
                  Nr: f,
                  Mv: g,
                  S8: h,
                  SG: k,
                  Lf: l,
                  ej: m,
                  viewport: n,
                  kL: p,
                  mhb: q = !1,
                } = this.props,
                r = b.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                t = e.layout.xg.Ih(b);
              if (!e.layout.xg.zh(b).empty && !t.empty)
                return o6("div", {
                  className: q6("SNkrHw", r, { RaA0Nw: q }),
                  ...l,
                  children: o6(OEc, {
                    SG: k,
                    ej: m,
                    Kkb: this.rua,
                    y6: this.y6,
                    lb: e,
                    sheet: b,
                    container: c,
                    ui: d,
                    Nr: f,
                    Mv: g,
                    S8: h,
                    da: this.da,
                    viewport: n,
                    kL: p,
                    jka: this.jka,
                  }),
                });
            }
            get jka() {
              var b = this.props.sheet,
                c = this.props.lb;
              const d = {},
                e = c.layout.xk.v8(b),
                f = c.layout.xk.u8(b);
              var g = c.layout.xk.Ih(b),
                h = c.layout.xk.zh(b);
              b = g.first();
              c = g.last();
              const k = h.first(),
                l = h.last();
              if (b != null && c != null && k != null && l != null)
                return (
                  (h = f ? h.next(f) : k),
                  (g = e ? g.next(e) : b),
                  e && f && (d.oTa = { range: { mc: k, cc: b, Dd: f, ld: e } }),
                  e && h && (d.zhb = { range: { mc: h, cc: b, Dd: l, ld: e } }),
                  f && g && (d.P0a = { range: { mc: k, cc: g, Dd: f, ld: c } }),
                  g && h && (d.ogb = { range: { mc: h, cc: g, Dd: l, ld: c } }),
                  d
                );
            }
            get da() {
              return this.props.da ? this.props.da : z6(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.rua =
                (B6.G(this),
                s6((c) => {
                  const {
                    sheet: d,
                    ui: e,
                    lb: f,
                    ZDa: g,
                    da: h,
                    xga: k = "hidden",
                  } = this.props;
                  return o6(L6, {
                    sheet: d,
                    lb: f,
                    range: c.range,
                    ui: e,
                    da: h,
                    children: o6(EEc, {
                      ...c,
                      sheet: d,
                      lb: f,
                      da: this.da,
                      ZDa: g,
                      overflow: k,
                    }),
                  });
                }));
              this.y6 = (c, d) =>
                new __c.jRa(
                  this.props.jm,
                  this.props.lb,
                  this.props.hD,
                  this.props.sheet,
                  c,
                  d,
                  this.da,
                  this.Sw,
                  this.Uw
                );
              this.Sw = (c, d) => this.props.Sw?.(this.props.sheet, c, d);
              this.Uw = (c, d) => this.props.Uw?.(this.props.sheet, c, d);
            }
          }
          ({
            c: [B6, UEc],
          } = K6(a, [], [pc], VEc));
        })(),
        TEc)();
        __c.tRa = {
          Ozb: function (a) {
            const b = a.Yu,
              c = a.ce,
              d = a.Vd,
              e = a.zo,
              f = a.jm,
              g = a.lb,
              h = a.hD,
              k = a.y4;
            kDc({ gD: a.gD, lb: g, mg: a.mg, COb: a.qV, hb: a.hb });
            const l = FDc({ SG: k, lb: g, jm: f, hD: h });
            b.Nua = ADc({ Ps: l, lb: g });
            c.sua = rDc({ Ps: l });
            ({ Okb: a } = yDc({ Ps: l, Re: e(), Wcb: new vEc(), lb: g }));
            d.mr.Mua = a;
            const { Cib: m, Dib: n, Bib: p } = qDc({ lb: g });
            return {
              SQa: s6((q) =>
                o6(TDc, {
                  ...q,
                  container: void 0,
                  Ps: l,
                  Nkb: m,
                  Pkb: n,
                  Lkb: p,
                  ej: UDc,
                })
              ),
            };
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/2dc648da1513b405.js.map
