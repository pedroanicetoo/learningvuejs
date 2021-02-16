(function (e) {
  function t(t) {
    for (
      var n, o, c = t[0], i = t[1], s = t[2], l = 0, d = [];
      l < c.length;
      l++
    )
      (o = c[l]), a[o] && d.push(a[o][0]), (a[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    f && f(t);
    while (d.length) d.shift()();
    return u.push.apply(u, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < u.length; t++) {
      for (var r = u[t], n = !0, o = 1; o < r.length; o++) {
        var c = r[o];
        0 !== a[c] && (n = !1);
      }
      n && (u.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { app: 0 },
    a = { app: 0 },
    u = [];
  function c(e) {
    return (
      i.p +
      'js/' +
      ({ curso: 'curso' }[e] || e) +
      '.' +
      { 'chunk-2d0af68d': '6f2b4438', curso: '8209d930' }[e] +
      '.js'
    );
  }
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function (e) {
    var t = [],
      r = { curso: 1 };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        r[e] &&
        t.push(
          (o[e] = new Promise(function (t, r) {
            for (
              var n =
                  'css/' +
                  ({ curso: 'curso' }[e] || e) +
                  '.' +
                  { 'chunk-2d0af68d': '31d6cfe0', curso: 'd5177902' }[e] +
                  '.css',
                a = i.p + n,
                u = document.getElementsByTagName('link'),
                c = 0;
              c < u.length;
              c++
            ) {
              var s = u[c],
                l = s.getAttribute('data-href') || s.getAttribute('href');
              if ('stylesheet' === s.rel && (l === n || l === a)) return t();
            }
            var d = document.getElementsByTagName('style');
            for (c = 0; c < d.length; c++) {
              (s = d[c]), (l = s.getAttribute('data-href'));
              if (l === n || l === a) return t();
            }
            var f = document.createElement('link');
            (f.rel = 'stylesheet'),
              (f.type = 'text/css'),
              (f.onload = t),
              (f.onerror = function (t) {
                var n = (t && t.target && t.target.src) || a,
                  u = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + n + ')',
                  );
                (u.request = n), delete o[e], f.parentNode.removeChild(f), r(u);
              }),
              (f.href = a);
            var p = document.getElementsByTagName('head')[0];
            p.appendChild(f);
          }).then(function () {
            o[e] = 0;
          })),
        );
    var n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var u = new Promise(function (t, r) {
          n = a[e] = [t, r];
        });
        t.push((n[2] = u));
        var s,
          l = document.createElement('script');
        (l.charset = 'utf-8'),
          (l.timeout = 120),
          i.nc && l.setAttribute('nonce', i.nc),
          (l.src = c(e)),
          (s = function (t) {
            (l.onerror = l.onload = null), clearTimeout(d);
            var r = a[e];
            if (0 !== r) {
              if (r) {
                var n = t && ('load' === t.type ? 'missing' : t.type),
                  o = t && t.target && t.target.src,
                  u = new Error(
                    'Loading chunk ' + e + ' failed.\n(' + n + ': ' + o + ')',
                  );
                (u.type = n), (u.request = o), r[1](u);
              }
              a[e] = void 0;
            }
          });
        var d = setTimeout(function () {
          s({ type: 'timeout', target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function (e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (i.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return r;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/'),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var f = l;
  u.push([0, 'chunk-vendors']), r();
})({
  0: function (e, t, r) {
    e.exports = r('56d7');
  },
  '034f': function (e, t, r) {
    'use strict';
    var n = r('64a9'),
      o = r.n(n);
    o.a;
  },
  '56d7': function (e, t, r) {
    'use strict';
    r.r(t);
    r('cadf'), r('551c'), r('f751'), r('097d');
    var n = r('2b0e'),
      o = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          'div',
          { attrs: { id: 'app' } },
          [
            r('h1', { on: { click: e.mostrarRouter } }, [e._v('Logo')]),
            r(
              'nav',
              [
                r('router-link', { attrs: { to: '/' } }, [e._v('Home')]),
                r('router-link', { attrs: { to: '/cursos' } }, [
                  e._v('Cursos'),
                ]),
                r('router-link', { attrs: { to: '/acoes' } }, [e._v('Acoes')]),
              ],
              1,
            ),
            r('router-view'),
            r('router-view', { attrs: { name: 'sidebar' } }),
          ],
          1,
        );
      },
      a = [],
      u = {
        methods: {
          mostrarRouter: function () {
            console.log(this.$route);
          },
        },
      },
      c = u,
      i = (r('034f'), r('2877')),
      s = Object(i['a'])(c, o, a, !1, null, null, null),
      l = s.exports,
      d = r('8c4f'),
      f = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r('h1', { on: { click: e.navegarCursos } }, [
          e._v('Essa é a home'),
        ]);
      },
      p = [],
      h = {
        methods: {
          navegarCursos: function () {
            var e = this;
            setTimeout(function () {
              e.$router.push('acoes');
            }, 1e3);
          },
        },
      },
      v = h,
      m = Object(i['a'])(v, f, p, !1, null, null, null),
      b = m.exports,
      g = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          'div',
          [
            r('h2', [e._v('Ações')]),
            r('router-link', { attrs: { to: '/acoes/aapl' } }, [e._v('Apple')]),
            r('router-link', { attrs: { to: '/acoes/fb' } }, [
              e._v('Facebook'),
            ]),
            r('router-view'),
          ],
          1,
        );
      },
      y = [],
      _ = {},
      w = _,
      k = Object(i['a'])(w, g, y, !1, null, null, null),
      j = k.exports,
      x = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r('div', [
          e.loading
            ? r('div', [e._v('Carregando...')])
            : r('div', [
                r('p', [e._v(e._s(e.simbolo))]),
                r('div', [e._v(e._s(e.acao))]),
              ]),
        ]);
      },
      O = [],
      E = {
        props: ['simbolo'],
        data: function () {
          return { loading: !0, acao: null };
        },
        methods: {
          puxarAcao: function () {
            var e = this;
            (this.loading = !0),
              (this.acao = null),
              fetch(
                'https://api.origamid.dev/stock/'.concat(
                  this.simbolo,
                  '/quote',
                ),
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (t) {
                  (e.acao = t), (e.loading = !1);
                });
          },
        },
        created: function () {
          this.puxarAcao();
        },
        watch: { $route: 'puxarAcao' },
      },
      A = E,
      T = Object(i['a'])(A, x, O, !1, null, null, null),
      P = T.exports,
      C = function () {
        return r.e('chunk-2d0af68d').then(r.bind(null, '0dcf'));
      },
      $ = function () {
        return r.e('curso').then(r.bind(null, '9686'));
      },
      S = function () {
        return r.e('curso').then(r.bind(null, 'd1cf'));
      },
      B = function () {
        return r.e('curso').then(r.bind(null, '8581'));
      };
    n['a'].use(d['a']);
    var M = new d['a']({
      mode: 'history',
      base: '/',
      routes: [
        { path: '/', components: { default: b, sidebar: j } },
        { path: '/origamid', redirect: '/' },
        { path: '*', redirect: '/' },
        {
          path: '/acoes',
          components: { default: j, sidebar: b },
          children: [{ path: ':simbolo', component: P, props: !0 }],
        },
        {
          path: '/cursos',
          component: C,
          props: !0,
          children: [
            {
              name: 'curso',
              path: ':curso',
              component: $,
              props: !0,
              children: [
                { name: 'aulas', path: 'aulas', component: S },
                { name: 'descricao', path: 'descricao', component: B },
              ],
            },
          ],
        },
      ],
      scrollBehavior: function (e, t, r) {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    });
    (n['a'].config.productionTip = !1),
      new n['a']({
        router: M,
        render: function (e) {
          return e(l);
        },
      }).$mount('#app');
  },
  '64a9': function (e, t, r) {},
});
//# sourceMappingURL=app.66d255ba.js.map
