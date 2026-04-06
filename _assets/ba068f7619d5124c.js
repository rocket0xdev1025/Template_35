(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [69798],
  {
    /***/ 91197: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var b9b, GX, d9b;
        b9b = function (a) {
          return Array.isArray(a.k) && typeof a.k[0] === "object";
        };
        __c.c9b = function (a, b) {
          if (a.assets)
            for (var c of a.assets)
              if ("layers" in c)
                for (const e of c.layers) {
                  if (e.ty !== 4) continue;
                  const f = [];
                  var d = e.shapes ?? [];
                  for (const g of d) (d = GX(g, b)), f.push(d);
                  e.shapes = f;
                }
          if (a.layers)
            for (const e of a.layers)
              if (e.ty === 4) {
                a = [];
                c = e.shapes ?? [];
                for (const f of c) (c = GX(f, b)), a.push(c);
                e.shapes = a;
              }
        };
        GX = function (a, b) {
          switch (a.ty) {
            case "fl":
            case "st":
              if (b9b(a.c)) break;
              const d = d9b(a.c.k)?.Jp();
              if (d) {
                var c = Array.from(b.keys()).find((e) => e === d);
                c &&
                  b.get(c) !== void 0 &&
                  ((b = b.get(c)),
                  (b = __c.vr(b)),
                  (a.c.k = [b.r / 255, b.g / 255, b.b / 255, 1]));
              }
              break;
            case "gr":
              c = [];
              for (const e of a.it) {
                const f = GX(e, b);
                c.push(f);
              }
              a.it = c;
          }
          return a;
        };
        d9b = function (a) {
          if (a.length === 4)
            return (
              (a = a.map((b) => Number((b * 255).toFixed(2)))),
              new __c.nr(a[0], a[1], a[2])
            );
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/ba068f7619d5124c.js.map
