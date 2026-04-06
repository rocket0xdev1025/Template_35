(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 697478: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(552854);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var $5 = function (a, b) {
            var c = a.jfb.get(b);
            if (c != null) return c;
            c = { value: a.Nq.qu(b) };
            a.jfb.set(b, c);
            a.bfb.set(c, b);
            return c;
          },
          a6 = function (a, b) {
            a = a.bfb.get(b);
            if (a == null) throw new gBc("ref does not exists");
            return a;
          },
          hBc = function () {
            const a = (b) => {
              if (b?.type !== "text2") throw new b6("text2", b);
              return b.value;
            };
            return {
              om: (b) => ({ type: "text2", value: b }),
              ru: (b) => {
                if (b?.type !== "text2") throw new c6("text2", b);
                return b.value;
              },
              qu: a,
              hy: a,
            };
          },
          iBc = __webpack_require__(186901).EW;
        var jBc = class {
            static G(a) {
              __c.L(a, { zXa: iBc });
            }
            get zXa() {
              const a = [];
              for (const b of this.list.value) {
                const c = $5(this, b);
                if (c === void 0)
                  throw new gBc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.zXa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a($5(this, c)) : void 0
              );
              if (b != null) return $5(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a($5(this, c)) : void 0
              );
              if (b != null) return $5(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b($5(this, d)) : void 0;
              a = a6(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return $5(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b($5(this, d)) : void 0;
              a = a6(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return $5(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a($5(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a($5(this, b), c))
                .map((b) => $5(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a($5(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a($5(this, b)));
            }
            constructor(a, b) {
              this.Nq = b;
              this.jfb = (jBc.G(this), new WeakMap());
              this.bfb = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          kBc = class extends jBc {
            replace(a, b) {
              a = a6(this, a);
              b = this.list.value.replace(a, this.Nq.om(b));
              return $5(this, b);
            }
            QI(a, b) {
              a = a != null ? a6(this, a) : void 0;
              b = this.list.value.QI(a, this.Nq.om(b));
              return $5(this, b);
            }
            iF(a, b) {
              a = a != null ? a6(this, a) : void 0;
              return this.list.value
                .iF(
                  a,
                  b.map((c) => this.Nq.om(c))
                )
                .map((c) => $5(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? a6(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.Nq.om(b));
              return $5(this, b);
            }
            append(a) {
              a = this.list.value.append(this.Nq.om(a));
              return $5(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.Nq.om(a));
              return $5(this, a);
            }
            delete(a) {
              a = a6(this, a);
              this.list.value.delete(a);
            }
            vE(a) {
              this.list.value.vE(a ? (b) => a($5(this, b)) : void 0);
            }
            moveBefore(a, b) {
              a = a == null ? void 0 : a6(this, a);
              b = a6(this, b);
              this.list.value.moveBefore(a, b);
            }
          };
        var e6 = class {
            static string(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "string")
                  throw d === "toWidgetData"
                    ? new b6("string", c)
                    : new c6("string", c);
                return c.value;
              };
              return {
                om: (c) => ({ type: "string", value: c }),
                ru: (c) => b(c, "toWidgetState"),
                qu: (c) => b(c, "toWidgetData"),
                hy: (c) => b(c, "toWidgetData"),
              };
            }
            static literal(a, b) {
              if (a.length === 0)
                throw new d6(
                  "At least one value must be provided for literal types."
                );
              const c = new Set(a),
                d = (e, f) => {
                  if (e == null && b != null) return b;
                  if (e?.type !== "string" || !c.has(e.value))
                    throw f === "toWidgetData"
                      ? new b6("literal", e)
                      : new c6("literal", e);
                  return e.value;
                };
              return {
                om: (e) => ({ type: "string", value: e }),
                ru: (e) => d(e, "toWidgetState"),
                qu: (e) => d(e, "toWidgetData"),
                hy: (e) => d(e, "toWidgetData"),
              };
            }
            static integer(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (
                  c?.type !== "int32" ||
                  !Number.isFinite(c.value) ||
                  !Number.isInteger(c.value)
                )
                  throw d === "toWidgetData"
                    ? new b6("integer", c)
                    : new c6("integer", c);
                return c.value;
              };
              return {
                om: (c) => {
                  if (!Number.isFinite(c) || !Number.isInteger(c))
                    throw new lBc("integer", c);
                  return { type: "int32", value: c };
                },
                ru: (c) => b(c, "toWidgetState"),
                qu: (c) => b(c, "toWidgetData"),
                hy: (c) => b(c, "toWidgetData"),
              };
            }
            static double(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "double" || !Number.isFinite(c.value))
                  throw d === "toWidgetData"
                    ? new b6("double", c)
                    : new c6("double", c);
                return c.value;
              };
              return {
                om: (c) => {
                  if (!Number.isFinite(c)) throw new lBc("double", c);
                  return { type: "double", value: c };
                },
                ru: (c) => b(c, "toWidgetState"),
                qu: (c) => b(c, "toWidgetData"),
                hy: (c) => b(c, "toWidgetData"),
              };
            }
            static bd(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "boolean")
                  throw d === "toWidgetData"
                    ? new b6("boolean", c)
                    : new c6("boolean", c);
                return c.value;
              };
              return {
                om: (c) => ({ type: "boolean", value: c }),
                ru: (c) => b(c, "toWidgetState"),
                qu: (c) => b(c, "toWidgetData"),
                hy: (c) => b(c, "toWidgetData"),
              };
            }
            static fill() {
              const a = (b) => {
                if (b?.type !== "fill") throw new b6("fill", b);
                return b.value;
              };
              return {
                om: (b) => ({ type: "fill", value: b }),
                ru: (b) => {
                  if (b?.type !== "fill") throw new c6("fill", b);
                  return b.value;
                },
                qu: a,
                hy: a,
              };
            }
            static stroke() {
              const a = (b) => {
                if (b?.type !== "stroke") throw new b6("stroke", b);
                return b.value;
              };
              return {
                om: (b) => ({ type: "stroke", value: b }),
                ru: (b) => {
                  if (b?.type !== "stroke") throw new c6("stroke", b);
                  return b.value;
                },
                qu: a,
                hy: a,
              };
            }
            static O(a) {
              const b = new Set();
              for (const d of Object.keys(a)) {
                const [e] = a[d];
                if (b.has(e))
                  throw new d6(
                    `Duplicate serialized keys "${e}" found in record schema.`
                  );
                b.add(e);
              }
              const c = (d, e) => {
                if (e?.type !== "dict") throw new b6("record", e);
                const f = {};
                for (const g of Object.keys(a)) {
                  const [h, k] = a[g],
                    l = iBc(
                      () => {
                        const m = e.value.get(h);
                        return k.qu(m);
                      },
                      { keepAlive: !0 }
                    );
                  Object.defineProperty(f, g, {
                    get() {
                      return l.get();
                    },
                    set(m) {
                      d !== "readonly" &&
                        ((m = k.om(m)),
                        m == null ? e.value.delete(h) : e.value.set(h, m));
                    },
                    enumerable: !0,
                  });
                }
                return f;
              };
              return {
                om: (d) => {
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.om(d[f]);
                    k != null && (e[g] = k);
                  }
                  return { type: "dict", value: new Map(Object.entries(e)) };
                },
                ru: (d) => {
                  if (d?.type !== "dict") throw new c6("record", d);
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.ru(d.value.get(g));
                    k != null && (e[f] = k);
                  }
                  return e;
                },
                qu: (d) => c("editable", d),
                hy: (d) => c("readonly", d),
                Ab: (d) => e6.O({ ...a, ...d }),
              };
            }
            static list(a) {
              return {
                om: (b) => ({ type: "list", value: b.map((c) => a.om(c)) }),
                ru: (b) => {
                  if (b?.type !== "list") throw new c6("list", b);
                  return b.value.filter(__c.rb).map((c) => a.ru(c));
                },
                qu: (b) => {
                  if (b?.type !== "list") throw new b6("list", b);
                  return new kBc(b, a);
                },
                hy: (b) => {
                  if (b?.type !== "list") throw new b6("list", b);
                  return new jBc(b, a);
                },
              };
            }
            static optional(a) {
              return {
                om: (b) => {
                  if (b != null) return a.om(b);
                },
                ru: (b) => {
                  if (b != null) return a.ru(b);
                },
                qu: (b) => {
                  if (b != null) return a.qu(b);
                },
                hy: (b) => {
                  if (b != null) return a.hy(b);
                },
              };
            }
            static union(a, b) {
              const c = new Set(Object.keys(a)),
                d = (e) => {
                  if (e?.type !== "dict") throw new b6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new b6("union", e);
                  return { Sga: a[f], Tga: g };
                };
              return {
                om: (e) => {
                  const f = b(e);
                  return {
                    type: "dict",
                    value: new Map([
                      ["k", { type: "string", value: f }],
                      ["v", a[f].om(e)],
                    ]),
                  };
                },
                ru: (e) => {
                  if (e?.type !== "dict") throw new c6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new c6("union", e);
                  const { Sga: h, Tga: k } = { Sga: a[f], Tga: g };
                  return h.ru(k);
                },
                qu: (e) => {
                  const { Sga: f, Tga: g } = d(e);
                  return f.qu(g);
                },
                hy: (e) => {
                  const { Sga: f, Tga: g } = d(e);
                  return f.hy(g);
                },
              };
            }
          },
          d6 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          gBc = class extends d6 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          b6 = class extends d6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          c6 = class extends d6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          lBc = class extends d6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var mBc = {
          If: { status: 2 },
          Yec: new Map(),
          Zec: 0,
          Q3b: void 0,
          dWb: void 0,
          eDa: !1,
          h4b: "unchecked",
          QT: !1,
          Bn: !1,
        };
        var nBc = e6.O({
            type: ["t", e6.literal(["text2"], "text2"), "readonly"],
            text: ["te", hBc()],
          }),
          oBc = e6.union({ text2: nBc }, (a) => a.type),
          pBc = e6.O({ id: ["i", e6.string("")], label: ["l", oBc] }),
          qBc = e6.list(pBc),
          rBc = e6.list(e6.string("")),
          sBc = e6.O({
            id: ["i", e6.string("")],
            label: ["l", oBc],
            eJ: ["tl", e6.literal(["c", "u"], "c")],
            TEa: ["k", e6.optional(e6.double(1))],
            required: ["rq", e6.bd(!1)],
            V: ["c", e6.double(0)],
          }),
          tBc = e6.O({ type: ["t", e6.literal(["r"], "r"), "readonly"] }),
          uBc = e6.O({ type: ["t", e6.literal(["p"], "p"), "readonly"] }),
          vBc = e6.O({ type: ["t", e6.literal(["q"], "q"), "readonly"] }),
          wBc = e6.union({ r: tBc, p: uBc, q: vBc }, (a) => a.type),
          xBc = sBc.Ab({
            type: ["t", e6.literal(["select"], "select"), "readonly"],
            variant: ["v", e6.optional(wBc)],
            options: ["o", qBc],
            H0: ["m", e6.optional(e6.integer(1))],
            tya: ["co", rBc],
          }),
          yBc = e6.O({ type: ["t", e6.literal(["e"], "e"), "readonly"] }),
          zBc = e6.O({
            type: ["t", e6.literal(["f"], "f"), "readonly"],
            ZN: ["n", e6.integer(1)],
          }),
          ABc = e6.union({ e: yBc, f: zBc }, (a) => a.type),
          BBc = sBc.Ab({
            type: ["t", e6.literal(["text"], "text"), "readonly"],
            placeholder: ["p", e6.string("")],
            variant: ["v", ABc],
          }),
          CBc = e6.O({ type: ["t", e6.literal(["a"], "a"), "readonly"] }),
          DBc = e6.O({ type: ["t", e6.literal(["b"], "b"), "readonly"] }),
          EBc = e6.O({ type: ["t", e6.literal(["c"], "c"), "readonly"] }),
          FBc = e6.O({ type: ["t", e6.literal(["d"], "d"), "readonly"] }),
          GBc = e6.union({ a: CBc, b: DBc, c: EBc, d: FBc }, (a) => a.type),
          HBc = sBc.Ab({
            type: ["t", e6.literal(["number"], "number"), "readonly"],
            variant: ["v", GBc],
            min: ["a", e6.optional(e6.double())],
            max: ["b", e6.optional(e6.double())],
          }),
          IBc = e6.union(
            { select: xBc, text: BBc, number: HBc },
            (a) => a.type
          ),
          JBc = e6.list(IBc),
          KBc = e6.O({
            Fq: ["A", e6.optional(e6.double(1))],
            Gq: ["B", e6.optional(e6.double(1))],
            Tt: ["C", e6.optional(e6.double(1))],
          }),
          LBc = e6.O({
            label: ["l", oBc],
            eJ: ["B", e6.optional(e6.literal(["c", "u"]))],
            Tt: ["C", e6.optional(e6.double(1))],
            Gq: ["E", e6.optional(e6.double(1))],
            Fq: ["D", e6.optional(e6.double(1))],
            bba: ["F", e6.optional(e6.double(1))],
          }),
          MBc = e6.O({}),
          NBc = e6.O({
            aba: ["A", e6.double(1.25)],
            Tt: ["B", e6.double(1)],
            Gq: ["C", e6.double(1.25)],
            Fq: ["D", e6.double(1.25)],
            background: ["E", e6.optional(e6.fill())],
          }),
          OBc = e6.O({
            label: ["A", hBc()],
            eJ: ["tl", e6.literal(["c", "u"])],
          }),
          PBc = e6.literal(["l", "r"], "l"),
          QBc = e6.O({
            minHeight: ["mh", e6.double(1)],
            minWidth: ["mw", e6.double(1)],
            type: ["t", e6.literal(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", e6.string()],
            Cs: ["s", e6.string()],
            rG: ["a", e6.optional(e6.string())],
            direction: ["r", PBc],
            mia: ["d", e6.string("")],
            Bba: ["pf", e6.fill()],
            kca: ["sf", e6.fill()],
            border: ["b", e6.stroke()],
            V: ["c", e6.double(0)],
            Qi: ["D", e6.optional(e6.double(16))],
            Kj: ["E", e6.optional(e6.double(16))],
            JS: ["F", e6.optional(KBc)],
            G_: ["hh", e6.bd(!1)],
            nDa: ["I", e6.optional(e6.bd(!1))],
            jra: ["z", e6.bd(!0)],
            KWa: ["h", e6.optional(MBc)],
            title: ["j", e6.optional(OBc)],
            header: ["A", e6.optional(NBc)],
            fields: ["f", JBc],
            footer: ["fo", e6.optional(LBc)],
          }),
          RBc = e6.union({ poll: QBc, quiz: QBc }, (a) => a.type);
        __c.OHa = {
          Mqb: function () {
            return { g4b: mBc, Nq: RBc };
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/8a8566655c2e95e9.js.map
