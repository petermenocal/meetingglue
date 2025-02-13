!(function(e, t) {
  if ("function" == typeof define && define.amd)
    define("Parallax", ["module"], t);
  else if ("undefined" != typeof exports) t(module);
  else {
    var n = { exports: {} };
    t(n), (e.Parallax = n.exports);
  }
})(this, function(e) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  var t = (function() {
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    return function(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    };
  })();
  function r(e, t) {
    var n = void 0;
    return (
      (n = "string" == typeof e ? (t || document).querySelectorAll(e) : e),
      Array.prototype.slice.call(n)
    );
  }
  function s(e) {
    return void 0 === e;
  }
  var n,
    o = function(o) {
      o = o || {};
      var a = {},
        h = Array.prototype.slice;
      return (
        Object.defineProperties(o, {
          on: {
            value: function(e, t) {
              return "function" == typeof t && (a[e] = a[e] || []).push(t), o;
            },
            enumerable: !1,
            writable: !1,
            configurable: !1
          },
          off: {
            value: function(e, t) {
              if ("*" != e || t)
                if (t)
                  for (var n, i = a[e], r = 0; (n = i && i[r]); ++r)
                    n == t && i.splice(r--, 1);
                else delete a[e];
              else a = {};
              return o;
            },
            enumerable: !1,
            writable: !1,
            configurable: !1
          },
          one: {
            value: function(t, n) {
              return o.on(t, function e() {
                o.off(t, e), n.apply(o, arguments);
              });
            },
            enumerable: !1,
            writable: !1,
            configurable: !1
          },
          trigger: {
            value: function(e) {
              var t,
                n,
                i,
                r = arguments.length - 1,
                s = new Array(r);
              for (i = 0; i < r; i++) s[i] = arguments[i + 1];
              for (t = h.call(a[e] || [], 0), i = 0; (n = t[i]); ++i)
                n.apply(o, s);
              return (
                a["*"] && "*" != e && o.trigger.apply(o, ["*", e].concat(s)), o
              );
            },
            enumerable: !1,
            writable: !1,
            configurable: !1
          }
        }),
        o
      );
    },
    a =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function(e) {
        setTimeout(e, 1e3 / 60);
      },
    h = (function() {
      function e() {
        i(this, e),
          o(this),
          (this.resizeTimer = null),
          (this.tick = !1),
          this.bind();
      }
      return (
        t(e, [
          {
            key: "bind",
            value: function() {
              var e = this;
              return (
                window.addEventListener(
                  "scroll",
                  function() {
                    return e.scroll();
                  },
                  !0
                ),
                window.addEventListener(
                  "mousewheel",
                  function() {
                    return e.scroll();
                  },
                  !0
                ),
                window.addEventListener(
                  "touchmove",
                  function() {
                    return e.scroll();
                  },
                  !0
                ),
                window.addEventListener(
                  "resize",
                  function() {
                    return e.resize();
                  },
                  !0
                ),
                window.addEventListener(
                  "orientationchange",
                  function() {
                    return e.resize();
                  },
                  !0
                ),
                (window.onload = function() {
                  return e.scroll();
                }),
                this
              );
            }
          },
          {
            key: "scroll",
            value: function() {
              var e = this;
              return (
                this.tick ||
                  ((this.tick = !this.tick),
                  a(function() {
                    return e.update();
                  })),
                this
              );
            }
          },
          {
            key: "update",
            value: function() {
              return (
                this.trigger("scroll", this.scrollTop),
                (this.tick = !this.tick),
                this
              );
            }
          },
          {
            key: "resize",
            value: function() {
              var e = this;
              return (
                this.resizeTimer && clearTimeout(this.resizeTimer),
                (this.resizeTimer = setTimeout(function() {
                  return e.trigger("resize", e.size);
                }, 20)),
                this
              );
            }
          },
          {
            key: "scrollTop",
            get: function() {
              var e =
                (window.pageYOffset || document.scrollTop) -
                (document.clientTop || 0);
              return window.isNaN(e) ? 0 : e;
            }
          },
          {
            key: "height",
            get: function() {
              return window.innerHeight;
            }
          },
          {
            key: "width",
            get: function() {
              return window.innerWidth;
            }
          },
          {
            key: "size",
            get: function() {
              return { width: this.width, height: this.height };
            }
          }
        ]),
        e
      );
    })(),
    l = (function(e, t) {
      for (var n = ["ms", "o", "Moz", "webkit"], i = n.length; i--; ) {
        var r = n[i],
          s = r
            ? r + t[0].toUpperCase() + t.substr(1)
            : t.toLowerCase() + t.substr(1);
        if (s in e) return s;
      }
      return "";
    })(document.createElement("div").style, "transform"),
    u = (((n = document.createElement("div")).style[l] =
      "matrix(1, 0, 0, 1, 0, 0)"),
    /matrix/g.test(n.style.cssText)),
    c = (function() {
      function n(e, t) {
        i(this, n),
          o(this),
          (this.opts = t),
          (this.element = e),
          (this.wrapper = e.parentNode),
          (this.isLoaded = !1),
          (this.initial = e.cloneNode(!0));
      }
      return (
        t(n, [
          {
            key: "load",
            value: function() {
              var e = this,
                t = void 0 !== this.element.complete,
                n = void 0 !== this.element.oncanplay;
              return (
                t && !this.element.complete
                  ? (this.element.onload = function() {
                      return e.onElementLoaded();
                    })
                  : n && !this.element.oncanplay
                  ? (this.element.onload = this.element.oncanplay = function() {
                      return e.onElementLoaded();
                    })
                  : this.onElementLoaded(),
                this
              );
            }
          },
          {
            key: "destroy",
            value: function() {
              this.element.parentNode.replaceChild(this.initial, this.element),
                this.off("*");
            }
          },
          {
            key: "onElementLoaded",
            value: function() {
              return (
                (this.isLoaded = !0),
                this.update(),
                (this.element.style.willChange = "transform"),
                this.trigger("loaded", this.element),
                this
              );
            }
          },
          {
            key: "update",
            value: function() {
              var e,
                t,
                n =
                  (this.element.naturalWidth ||
                    this.element.width ||
                    this.element.offsetWidth) /
                  (this.element.naturalHeight ||
                    this.element.height ||
                    this.element.offsetHeight),
                i = this.size,
                r = void 0,
                s = void 0;
              return (
                (r =
                  i.width / n <= i.height
                    ? ((s = i.height * n), i.height)
                    : ((s = i.width), i.width / n)) <=
                  i.height + i.height * this.opts.safeHeight &&
                  ((s += s * this.opts.safeHeight),
                  (r += r * this.opts.safeHeight)),
                (e = -~~((r - i.height) / 2)),
                (t = -~~((s - i.width) / 2)),
                (this.element.width = s),
                (this.element.height = r),
                (this.element.style.top = e + "px"),
                (this.element.style.left = t + "px"),
                this
              );
            }
          },
          {
            key: "draw",
            value: function(e) {
              var t = e.scrollTop,
                n = (e.width, e.height),
                i = this.size,
                r = ~~(
                  ((this.offset.top + i.height * this.opts.center + n / 2 - t) /
                    n -
                    1) *
                  ((this.element.height / i.height / 2) * this.opts.intensity) *
                  10
                );
              return (
                (this.element.style[l] = u
                  ? "matrix(1,0,0,1, 0, " + -r + ")"
                  : "translate(0, " + -r + "px)"),
                this
              );
            }
          },
          {
            key: "bounds",
            get: function() {
              return this.wrapper.getBoundingClientRect();
            }
          },
          {
            key: "offset",
            get: function() {
              return {
                top: this.wrapper.offsetTop,
                left: this.wrapper.offsetLeft
              };
            }
          },
          {
            key: "size",
            get: function() {
              var e = this.bounds;
              return { height: 0 | e.height, width: 0 | e.width };
            }
          }
        ]),
        n
      );
    })(),
    f = void 0,
    d = (function() {
      function n() {
        var e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          i(this, n),
          o(this),
          (this.opts = t),
          (this.selector = e),
          (this.canvases = []),
          (this.bound = !1),
          null !== e && this.add(e),
          f || (f = new h()),
          this
        );
      }
      return (
        t(n, [
          {
            key: "init",
            value: function() {
              if (this.bound)
                throw "The parallax instance has already been initialized";
              return (
                this.canvases.length || null === this.selector
                  ? ((this.elementsLoaded = 0), this.bind())
                  : console.warn(
                      'No elements were found with the selector "' +
                        this.selector +
                        '"'
                    ),
                this
              );
            }
          },
          {
            key: "bind",
            value: function() {
              var i = this;
              return (
                (this._onResize = function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return i.resize.apply(i, t);
                }),
                (this._onScroll = function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return i.scroll.apply(i, t);
                }),
                f.on("resize", this._onResize),
                f.on("scroll", this._onScroll),
                this.canvases.forEach(function(e) {
                  e.one("loaded", function() {
                    return i.onCanvasLoaded(e);
                  }),
                    e.load();
                }),
                (this.bound = !0),
                this
              );
            }
          },
          {
            key: "refresh",
            value: function() {
              return this._onResize(f.size), this._onScroll(f.scrollTop), this;
            }
          },
          {
            key: "onCanvasLoaded",
            value: function(e) {
              return (
                this.trigger("element:loaded", e.element, e),
                this.elementsLoaded++,
                e.draw(f),
                this.elementsLoaded == this.canvases.length &&
                  this.trigger("elements:loaded"),
                this
              );
            }
          },
          {
            key: "scroll",
            value: function(e) {
              for (
                var t = this.opts.offsetYBounds,
                  n = f,
                  i = n.height,
                  r = n.width,
                  s = this.canvases.length;
                s--;

              ) {
                var o = this.canvases[s],
                  a = o.size.height,
                  h = o.offset;
                o.isLoaded &&
                  e + f.height + t > h.top &&
                  h.top + a > e - t &&
                  (o.draw({ height: i, scrollTop: e, width: r }),
                  this.trigger("draw", o.element));
              }
              return this.trigger("update", e), this;
            }
          },
          {
            key: "add",
            value: function(e) {
              var t = this,
                n = this.createCanvases(r(e));
              return (
                this.bound &&
                  n.forEach(function(e) {
                    e.one("loaded", function() {
                      return t.onCanvasLoaded(e);
                    }),
                      e.load();
                  }),
                (this.canvases = this.canvases.concat(n)),
                this
              );
            }
          },
          {
            key: "remove",
            value: function(e) {
              var n = this;
              return (
                r(e).forEach(function(e) {
                  for (var t = n.canvases.length; t--; )
                    if (e == n.canvases[t].element) {
                      n.canvases[t].destroy(), n.canvases.splice(t, 1);
                      break;
                    }
                }),
                this
              );
            }
          },
          {
            key: "destroy",
            value: function() {
              return (
                this.off("*"),
                (this.canvases = []),
                f.off("resize", this._onResize).off("scroll", this._onScroll),
                this
              );
            }
          },
          {
            key: "resize",
            value: function(e) {
              for (var t = this.canvases.length; t--; ) {
                var n = this.canvases[t];
                if (!n.isLoaded) return;
                n.update().draw(f);
              }
              return this.trigger("resize"), this;
            }
          },
          {
            key: "createCanvases",
            value: function(e) {
              var r = this;
              return e.map(function(e) {
                var t,
                  n,
                  i = ((t = e),
                  n
                    ? t.dataset[n] || t.getAttribute("data-" + n)
                    : t.dataset ||
                      Array.prototype.slice
                        .call(t.attributes)
                        .reduce(function(e, t) {
                          var n;
                          return (
                            /data-/.test(t.name) &&
                              (e[
                                ((n = t.name),
                                n.replace(/-(\w)/g, function(e, t) {
                                  return t.toUpperCase();
                                }))
                              ] = t.value),
                            e
                          );
                        }, {}));
                return new c(e, {
                  intensity: s(i.intensity) ? r.opts.intensity : +i.intensity,
                  center: s(i.center) ? r.opts.center : +i.center,
                  safeHeight: s(i.safeHeight)
                    ? r.opts.safeHeight
                    : +i.safeHeight
                });
              });
            }
          },
          {
            key: "opts",
            set: function(e) {
              (this._defaults = {
                offsetYBounds: 50,
                intensity: 30,
                center: 0.5,
                safeHeight: 0.15
              }),
                (function(e) {
                  for (var t = void 0, n = arguments, i = 1; i < n.length; ++i)
                    if ((t = n[i])) for (var r in t) e[r] = t[r];
                })(this._defaults, e);
            },
            get: function() {
              return this._defaults;
            }
          }
        ]),
        n
      );
    })();
  e.exports = d;
});
