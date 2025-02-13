/*! JsBarcode v3.8.0 | (c) Johan Lindell | MIT license */
!(function(t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.i = function(t) {
      return t;
    }),
    (e.d = function(t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 12));
})([
  function(t, e, n) {
    "use strict";
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = (e.SET_A = 0),
      a = (e.SET_B = 1),
      u = (e.SET_C = 2),
      s = ((e.SHIFT = 98), (e.START_A = 103)),
      f = (e.START_B = 104),
      c = (e.START_C = 105);
    (e.MODULO = 103),
      (e.STOP = 106),
      (e.SET_BY_CODE = ((o = {}), r(o, s, i), r(o, f, a), r(o, c, u), o)),
      (e.SWAP = { 101: i, 100: a, 99: u }),
      (e.A_START_CHAR = String.fromCharCode(208)),
      (e.B_START_CHAR = String.fromCharCode(209)),
      (e.C_START_CHAR = String.fromCharCode(210)),
      (e.A_CHARS = "[\0-_È-Ï]"),
      (e.B_CHARS = "[ -È-Ï]"),
      (e.C_CHARS = "(Ï*[0-9]{2}Ï*)"),
      (e.BARS = [
        11011001100,
        11001101100,
        11001100110,
        10010011e3,
        10010001100,
        10001001100,
        10011001e3,
        10011000100,
        10001100100,
        11001001e3,
        11001000100,
        11000100100,
        10110011100,
        10011011100,
        10011001110,
        10111001100,
        10011101100,
        10011100110,
        11001110010,
        11001011100,
        11001001110,
        11011100100,
        11001110100,
        11101101110,
        11101001100,
        11100101100,
        11100100110,
        11101100100,
        11100110100,
        11100110010,
        11011011e3,
        11011000110,
        11000110110,
        10100011e3,
        10001011e3,
        10001000110,
        10110001e3,
        10001101e3,
        10001100010,
        11010001e3,
        11000101e3,
        11000100010,
        10110111e3,
        10110001110,
        10001101110,
        10111011e3,
        10111000110,
        10001110110,
        11101110110,
        11010001110,
        11000101110,
        11011101e3,
        11011100010,
        11011101110,
        11101011e3,
        11101000110,
        11100010110,
        11101101e3,
        11101100010,
        11100011010,
        11101111010,
        11001000010,
        11110001010,
        1010011e4,
        10100001100,
        1001011e4,
        10010000110,
        10000101100,
        10000100110,
        1011001e4,
        10110000100,
        1001101e4,
        10011000010,
        10000110100,
        10000110010,
        11000010010,
        1100101e4,
        11110111010,
        11000010100,
        10001111010,
        10100111100,
        10010111100,
        10010011110,
        10111100100,
        10011110100,
        10011110010,
        11110100100,
        11110010100,
        11110010010,
        11011011110,
        11011110110,
        11110110110,
        10101111e3,
        10100011110,
        10001011110,
        10111101e3,
        10111100010,
        11110101e3,
        11110100010,
        10111011110,
        10111101110,
        11101011110,
        11110101110,
        11010000100,
        1101001e4,
        11010011100,
        1100011101011
      ]);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      };
    e.default = function(t, e) {
      return r({}, t, e);
    };
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      u = n(13),
      s = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(0),
      c = (function(t) {
        function e(t, n) {
          r(this, e);
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t.substring(1),
              n
            )
          );
          return (
            (i.bytes = t.split("").map(function(t) {
              return t.charCodeAt(0);
            })),
            i
          );
        }
        return (
          i(e, t),
          a(
            e,
            [
              {
                key: "valid",
                value: function() {
                  return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
                }
              },
              {
                key: "encode",
                value: function() {
                  var t = this.bytes,
                    n = t.shift() - 105,
                    r = f.SET_BY_CODE[n];
                  if (void 0 === r)
                    throw new RangeError(
                      "The encoding does not start with a start character."
                    );
                  var o = e.next(t, 1, r);
                  return {
                    text:
                      this.text === this.data
                        ? this.text.replace(/[^\x20-\x7E]/g, "")
                        : this.text,
                    data:
                      e.getBar(n) +
                      o.result +
                      e.getBar((o.checksum + n) % f.MODULO) +
                      e.getBar(f.STOP)
                  };
                }
              }
            ],
            [
              {
                key: "getBar",
                value: function(t) {
                  return f.BARS[t] ? f.BARS[t].toString() : "";
                }
              },
              {
                key: "correctIndex",
                value: function(t, e) {
                  if (e === f.SET_A) {
                    var n = t.shift();
                    return n < 32 ? n + 64 : n - 32;
                  }
                  return e === f.SET_B
                    ? t.shift() - 32
                    : 10 * (t.shift() - 48) + t.shift() - 48;
                }
              },
              {
                key: "next",
                value: function(t, n, r) {
                  if (!t.length) return { result: "", checksum: 0 };
                  var o = void 0,
                    i = void 0;
                  if (t[0] >= 200) {
                    i = t.shift() - 105;
                    var a = f.SWAP[i];
                    void 0 !== a
                      ? (o = e.next(t, n + 1, a))
                      : ((r !== f.SET_A && r !== f.SET_B) ||
                          i !== f.SHIFT ||
                          (t[0] =
                            r === f.SET_A
                              ? t[0] > 95
                                ? t[0] - 96
                                : t[0]
                              : t[0] < 32
                              ? t[0] + 96
                              : t[0]),
                        (o = e.next(t, n + 1, r)));
                  } else (i = e.correctIndex(t, r)), (o = e.next(t, n + 1, r));
                  var u = e.getBar(i),
                    s = i * n;
                  return { result: u + o.result, checksum: s + o.checksum };
                }
              }
            ]
          ),
          e
        );
      })(s.default);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function(t) {
        function e(t, n) {
          r(this, e);
          var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (i.name = "InvalidInputException"),
            (i.symbology = t),
            (i.input = n),
            (i.message =
              '"' + i.input + '" is not a valid input for ' + i.symbology),
            i
          );
        }
        return i(e, t), e;
      })(Error),
      u = (function(t) {
        function e() {
          r(this, e);
          var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (t.name = "InvalidElementException"),
            (t.message = "Not supported type to render on"),
            t
          );
        }
        return i(e, t), e;
      })(Error),
      s = (function(t) {
        function e() {
          r(this, e);
          var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (t.name = "NoElementException"),
            (t.message = "No element to render on."),
            t
          );
        }
        return i(e, t), e;
      })(Error);
    (e.InvalidInputException = a),
      (e.InvalidElementException = u),
      (e.NoElementException = s);
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      var e = [
        "width",
        "height",
        "textMargin",
        "fontSize",
        "margin",
        "marginTop",
        "marginBottom",
        "marginLeft",
        "marginRight"
      ];
      for (var n in e)
        e.hasOwnProperty(n) &&
          ((n = e[n]), "string" == typeof t[n] && (t[n] = parseInt(t[n], 10)));
      return (
        "string" == typeof t.displayValue &&
          (t.displayValue = "false" != t.displayValue),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = {
      width: 2,
      height: 100,
      format: "auto",
      displayValue: !0,
      fontOptions: "",
      font: "monospace",
      text: void 0,
      textAlign: "center",
      textPosition: "bottom",
      textMargin: 2,
      fontSize: 20,
      background: "#ffffff",
      lineColor: "#000000",
      margin: 10,
      marginTop: void 0,
      marginBottom: void 0,
      marginLeft: void 0,
      marginRight: void 0,
      valid: function() {}
    };
    e.default = r;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      return (
        e.height +
        (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) +
        e.marginTop +
        e.marginBottom
      );
    }
    function o(t, e, n) {
      if (n.displayValue && e < t) {
        if ("center" == n.textAlign) return Math.floor((t - e) / 2);
        if ("left" == n.textAlign) return 0;
        if ("right" == n.textAlign) return Math.floor(t - e);
      }
      return 0;
    }
    function i(t, e, n) {
      for (var i = 0; i < t.length; i++) {
        var a,
          u = t[i],
          f = (0, c.default)(e, u.options);
        a = f.displayValue ? s(u.text, f, n) : 0;
        var l = u.data.length * f.width;
        (u.width = Math.ceil(Math.max(a, l))),
          (u.height = r(u, f)),
          (u.barcodePadding = o(a, l, f));
      }
    }
    function a(t) {
      for (var e = 0, n = 0; n < t.length; n++) e += t[n].width;
      return e;
    }
    function u(t) {
      for (var e = 0, n = 0; n < t.length; n++)
        t[n].height > e && (e = t[n].height);
      return e;
    }
    function s(t, e, n) {
      var r;
      if (n) r = n;
      else {
        if ("undefined" == typeof document) return 0;
        r = document.createElement("canvas").getContext("2d");
      }
      return (
        (r.font = e.fontOptions + " " + e.fontSize + "px " + e.font),
        r.measureText(t).width
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0);
    var f = n(1),
      c = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(f);
    (e.getMaximumHeightOfEncodings = u),
      (e.getEncodingHeight = r),
      (e.getBarcodePadding = o),
      (e.calculateEncodingAttributes = i),
      (e.getTotalWidthOfEncodings = a);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(19);
    e.default = {
      CODE128: r.CODE128,
      CODE128A: r.CODE128A,
      CODE128B: r.CODE128B,
      CODE128C: r.CODE128C
    };
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = (function() {
        function t(e) {
          r(this, t), (this.api = e);
        }
        return (
          o(t, [
            {
              key: "handleCatch",
              value: function(t) {
                if ("InvalidInputException" !== t.name) throw t;
                if (this.api._options.valid === this.api._defaults.valid)
                  throw t.message;
                this.api._options.valid(!1), (this.api.render = function() {});
              }
            },
            {
              key: "wrapBarcodeCall",
              value: function(t) {
                try {
                  var e = t.apply(void 0, arguments);
                  return this.api._options.valid(!0), e;
                } catch (t) {
                  return this.handleCatch(t), this.api;
                }
              }
            }
          ]),
          t
        );
      })();
    e.default = i;
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return (
        (t.marginTop = t.marginTop || t.margin),
        (t.marginBottom = t.marginBottom || t.margin),
        (t.marginRight = t.marginRight || t.margin),
        (t.marginLeft = t.marginLeft || t.margin),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      if ("string" == typeof t) return i(t);
      if (Array.isArray(t)) {
        for (var e = [], n = 0; n < t.length; n++) e.push(o(t[n]));
        return e;
      }
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLImageElement
      )
        return a(t);
      if (
        (t && "svg" === t.nodeName) ||
        ("undefined" != typeof SVGElement && t instanceof SVGElement)
      )
        return {
          element: t,
          options: (0, f.default)(t),
          renderer: l.default.SVGRenderer
        };
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement
      )
        return {
          element: t,
          options: (0, f.default)(t),
          renderer: l.default.CanvasRenderer
        };
      if (t && t.getContext)
        return { element: t, renderer: l.default.CanvasRenderer };
      if (t && "object" === (void 0 === t ? "undefined" : u(t)) && !t.nodeName)
        return { element: t, renderer: l.default.ObjectRenderer };
      throw new d.InvalidElementException();
    }
    function i(t) {
      var e = document.querySelectorAll(t);
      if (0 !== e.length) {
        for (var n = [], r = 0; r < e.length; r++) n.push(o(e[r]));
        return n;
      }
    }
    function a(t) {
      var e = document.createElement("canvas");
      return {
        element: e,
        options: (0, f.default)(t),
        renderer: l.default.CanvasRenderer,
        afterRender: function() {
          t.setAttribute("src", e.toDataURL());
        }
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      s = n(20),
      f = r(s),
      c = n(22),
      l = r(c),
      d = n(3);
    e.default = o;
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      function e(t) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e(t[r]);
        else (t.text = t.text || ""), (t.data = t.data || ""), n.push(t);
      }
      var n = [];
      return e(t), n;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e, n) {
      t = "" + t;
      var r = new e(t, n);
      if (!r.valid()) throw new w.InvalidInputException(r.constructor.name, t);
      var o = r.encode();
      o = (0, d.default)(o);
      for (var i = 0; i < o.length; i++)
        o[i].options = (0, c.default)(n, o[i].options);
      return o;
    }
    function i() {
      return s.default.CODE128 ? "CODE128" : Object.keys(s.default)[0];
    }
    function a(t, e, n) {
      e = (0, d.default)(e);
      for (var r = 0; r < e.length; r++)
        (e[r].options = (0, c.default)(n, e[r].options)),
          (0, h.default)(e[r].options);
      (0, h.default)(n),
        new (0, t.renderer)(t.element, e, n).render(),
        t.afterRender && t.afterRender();
    }
    var u = n(7),
      s = r(u),
      f = n(1),
      c = r(f),
      l = n(11),
      d = r(l),
      p = n(9),
      h = r(p),
      g = n(10),
      v = r(g),
      y = n(4),
      b = r(y),
      _ = n(8),
      m = r(_),
      w = n(3),
      O = n(5),
      C = r(O),
      x = function() {},
      E = function(t, e, n) {
        var r = new x();
        if (void 0 === t) throw Error("No element to render on was provided.");
        return (
          (r._renderProperties = (0, v.default)(t)),
          (r._encodings = []),
          (r._options = C.default),
          (r._errorHandler = new m.default(r)),
          void 0 !== e &&
            ((n = n || {}),
            n.format || (n.format = i()),
            r
              .options(n)
              [n.format](e, n)
              .render()),
          r
        );
      };
    E.getModule = function(t) {
      return s.default[t];
    };
    for (var A in s.default)
      s.default.hasOwnProperty(A) &&
        (function(t, e) {
          x.prototype[e] = x.prototype[e.toUpperCase()] = x.prototype[
            e.toLowerCase()
          ] = function(n, r) {
            var i = this;
            return i._errorHandler.wrapBarcodeCall(function() {
              r.text = void 0 === r.text ? void 0 : "" + r.text;
              var a = (0, c.default)(i._options, r);
              a = (0, b.default)(a);
              var u = t[e],
                s = o(n, u, a);
              return i._encodings.push(s), i;
            });
          };
        })(s.default, A);
    (x.prototype.options = function(t) {
      return (this._options = (0, c.default)(this._options, t)), this;
    }),
      (x.prototype.blank = function(t) {
        var e = new Array(t + 1).join("0");
        return this._encodings.push({ data: e }), this;
      }),
      (x.prototype.init = function() {
        if (this._renderProperties) {
          Array.isArray(this._renderProperties) ||
            (this._renderProperties = [this._renderProperties]);
          var t;
          for (var e in this._renderProperties) {
            t = this._renderProperties[e];
            var n = (0, c.default)(this._options, t.options);
            "auto" == n.format && (n.format = i()),
              this._errorHandler.wrapBarcodeCall(function() {
                var e = n.value,
                  r = s.default[n.format.toUpperCase()],
                  i = o(e, r, n);
                a(t, i, n);
              });
          }
        }
      }),
      (x.prototype.render = function() {
        if (!this._renderProperties) throw new w.NoElementException();
        if (Array.isArray(this._renderProperties))
          for (var t = 0; t < this._renderProperties.length; t++)
            a(this._renderProperties[t], this._encodings, this._options);
        else a(this._renderProperties, this._encodings, this._options);
        return this;
      }),
      (x.prototype._defaults = C.default),
      "undefined" != typeof window && (window.JsBarcode = E),
      "undefined" != typeof jQuery &&
        (jQuery.fn.JsBarcode = function(t, e) {
          var n = [];
          return (
            jQuery(this).each(function() {
              n.push(this);
            }),
            E(n, t, e)
          );
        }),
      (t.exports = E);
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = function t(e, n) {
      r(this, t),
        (this.data = e),
        (this.text = n.text || e),
        (this.options = n);
    };
    e.default = o;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      u = n(2),
      s = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(0),
      c = (function(t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                f.A_START_CHAR + t,
                n
              )
            )
          );
        }
        return (
          i(e, t),
          a(e, [
            {
              key: "valid",
              value: function() {
                return new RegExp("^" + f.A_CHARS + "+$").test(this.data);
              }
            }
          ]),
          e
        );
      })(s.default);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      u = n(2),
      s = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(0),
      c = (function(t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                f.B_START_CHAR + t,
                n
              )
            )
          );
        }
        return (
          i(e, t),
          a(e, [
            {
              key: "valid",
              value: function() {
                return new RegExp("^" + f.B_CHARS + "+$").test(this.data);
              }
            }
          ]),
          e
        );
      })(s.default);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      u = n(2),
      s = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(0),
      c = (function(t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                f.C_START_CHAR + t,
                n
              )
            )
          );
        }
        return (
          i(e, t),
          a(e, [
            {
              key: "valid",
              value: function() {
                return new RegExp("^" + f.C_CHARS + "+$").test(this.data);
              }
            }
          ]),
          e
        );
      })(s.default);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = n(2),
      s = r(u),
      f = n(18),
      c = r(f),
      l = (function(t) {
        function e(t, n) {
          if ((o(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(t)))
            var r = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                (0, c.default)(t),
                n
              )
            );
          else
            var r = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
            );
          return i(r);
        }
        return a(e, t), e;
      })(s.default);
    e.default = l;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      var n = e ? i.A_CHARS : i.B_CHARS,
        a = t.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
      if (a)
        return a[1] + String.fromCharCode(204) + o(t.substring(a[1].length));
      var u = t.match(new RegExp("^" + n + "+"))[0];
      return u.length === t.length
        ? t
        : u + String.fromCharCode(e ? 205 : 206) + r(t.substring(u.length), !e);
    }
    function o(t) {
      var e = s(t),
        n = e.length;
      if (n === t.length) return t;
      t = t.substring(n);
      var o = a(t) >= u(t);
      return e + String.fromCharCode(o ? 206 : 205) + r(t, o);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(0),
      a = function(t) {
        return t.match(new RegExp("^" + i.A_CHARS + "*"))[0].length;
      },
      u = function(t) {
        return t.match(new RegExp("^" + i.B_CHARS + "*"))[0].length;
      },
      s = function(t) {
        return t.match(new RegExp("^" + i.C_CHARS + "*"))[0];
      };
    e.default = function(t) {
      var e = void 0;
      if (s(t).length >= 2) e = i.C_START_CHAR + o(t);
      else {
        var n = a(t) > u(t);
        e = (n ? i.A_START_CHAR : i.B_START_CHAR) + r(t, n);
      }
      return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function(t, e) {
        return String.fromCharCode(203) + e;
      });
    };
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0);
    var o = n(17),
      i = r(o),
      a = n(14),
      u = r(a),
      s = n(15),
      f = r(s),
      c = n(16),
      l = r(c);
    (e.CODE128 = i.default),
      (e.CODE128A = u.default),
      (e.CODE128B = f.default),
      (e.CODE128C = l.default);
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      var e = {};
      for (var n in s.default)
        s.default.hasOwnProperty(n) &&
          (t.hasAttribute("jsbarcode-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())),
          t.hasAttribute("data-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute("data-" + n.toLowerCase())));
      return (
        (e.value =
          t.getAttribute("jsbarcode-value") || t.getAttribute("data-value")),
        (e = (0, a.default)(e))
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(4),
      a = r(i),
      u = n(5),
      s = r(u);
    e.default = o;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(1),
      a = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      u = n(6),
      s = (function() {
        function t(e, n, o) {
          r(this, t),
            (this.canvas = e),
            (this.encodings = n),
            (this.options = o);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function() {
                if (!this.canvas.getContext)
                  throw new Error("The browser does not support canvas.");
                this.prepareCanvas();
                for (var t = 0; t < this.encodings.length; t++) {
                  var e = (0, a.default)(
                    this.options,
                    this.encodings[t].options
                  );
                  this.drawCanvasBarcode(e, this.encodings[t]),
                    this.drawCanvasText(e, this.encodings[t]),
                    this.moveCanvasDrawing(this.encodings[t]);
                }
                this.restoreCanvas();
              }
            },
            {
              key: "prepareCanvas",
              value: function() {
                var t = this.canvas.getContext("2d");
                t.save(),
                  (0, u.calculateEncodingAttributes)(
                    this.encodings,
                    this.options,
                    t
                  );
                var e = (0, u.getTotalWidthOfEncodings)(this.encodings),
                  n = (0, u.getMaximumHeightOfEncodings)(this.encodings);
                (this.canvas.width =
                  e + this.options.marginLeft + this.options.marginRight),
                  (this.canvas.height = n),
                  t.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  this.options.background &&
                    ((t.fillStyle = this.options.background),
                    t.fillRect(0, 0, this.canvas.width, this.canvas.height)),
                  t.translate(this.options.marginLeft, 0);
              }
            },
            {
              key: "drawCanvasBarcode",
              value: function(t, e) {
                var n,
                  r = this.canvas.getContext("2d"),
                  o = e.data;
                (n =
                  "top" == t.textPosition
                    ? t.marginTop + t.fontSize + t.textMargin
                    : t.marginTop),
                  (r.fillStyle = t.lineColor);
                for (var i = 0; i < o.length; i++) {
                  var a = i * t.width + e.barcodePadding;
                  "1" === o[i]
                    ? r.fillRect(a, n, t.width, t.height)
                    : o[i] && r.fillRect(a, n, t.width, t.height * o[i]);
                }
              }
            },
            {
              key: "drawCanvasText",
              value: function(t, e) {
                var n = this.canvas.getContext("2d"),
                  r = t.fontOptions + " " + t.fontSize + "px " + t.font;
                if (t.displayValue) {
                  var o, i;
                  (i =
                    "top" == t.textPosition
                      ? t.marginTop + t.fontSize - t.textMargin
                      : t.height + t.textMargin + t.marginTop + t.fontSize),
                    (n.font = r),
                    "left" == t.textAlign || e.barcodePadding > 0
                      ? ((o = 0), (n.textAlign = "left"))
                      : "right" == t.textAlign
                      ? ((o = e.width - 1), (n.textAlign = "right"))
                      : ((o = e.width / 2), (n.textAlign = "center")),
                    n.fillText(e.text, o, i);
                }
              }
            },
            {
              key: "moveCanvasDrawing",
              value: function(t) {
                this.canvas.getContext("2d").translate(t.width, 0);
              }
            },
            {
              key: "restoreCanvas",
              value: function() {
                this.canvas.getContext("2d").restore();
              }
            }
          ]),
          t
        );
      })();
    e.default = s;
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(21),
      i = r(o),
      a = n(24),
      u = r(a),
      s = n(23),
      f = r(s);
    e.default = {
      CanvasRenderer: i.default,
      SVGRenderer: u.default,
      ObjectRenderer: f.default
    };
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = (function() {
        function t(e, n, o) {
          r(this, t),
            (this.object = e),
            (this.encodings = n),
            (this.options = o);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function() {
                this.object.encodings = this.encodings;
              }
            }
          ]),
          t
        );
      })();
    e.default = i;
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(1),
      a = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      u = n(6),
      s = "http://www.w3.org/2000/svg",
      f = (function() {
        function t(e, n, o) {
          r(this, t),
            (this.svg = e),
            (this.encodings = n),
            (this.options = o),
            (this.document = o.xmlDocument || document);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function() {
                var t = this.options.marginLeft;
                this.prepareSVG();
                for (var e = 0; e < this.encodings.length; e++) {
                  var n = this.encodings[e],
                    r = (0, a.default)(this.options, n.options),
                    o = this.createGroup(t, r.marginTop, this.svg);
                  this.setGroupOptions(o, r),
                    this.drawSvgBarcode(o, r, n),
                    this.drawSVGText(o, r, n),
                    (t += n.width);
                }
              }
            },
            {
              key: "prepareSVG",
              value: function() {
                for (; this.svg.firstChild; )
                  this.svg.removeChild(this.svg.firstChild);
                (0, u.calculateEncodingAttributes)(
                  this.encodings,
                  this.options
                );
                var t = (0, u.getTotalWidthOfEncodings)(this.encodings),
                  e = (0, u.getMaximumHeightOfEncodings)(this.encodings),
                  n = t + this.options.marginLeft + this.options.marginRight;
                this.setSvgAttributes(n, e),
                  this.options.background &&
                    this.drawRect(0, 0, n, e, this.svg).setAttribute(
                      "style",
                      "fill:" + this.options.background + ";"
                    );
              }
            },
            {
              key: "drawSvgBarcode",
              value: function(t, e, n) {
                var r,
                  o = n.data;
                r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
                for (var i = 0, a = 0, u = 0; u < o.length; u++)
                  (a = u * e.width + n.barcodePadding),
                    "1" === o[u]
                      ? i++
                      : i > 0 &&
                        (this.drawRect(
                          a - e.width * i,
                          r,
                          e.width * i,
                          e.height,
                          t
                        ),
                        (i = 0));
                i > 0 &&
                  this.drawRect(
                    a - e.width * (i - 1),
                    r,
                    e.width * i,
                    e.height,
                    t
                  );
              }
            },
            {
              key: "drawSVGText",
              value: function(t, e, n) {
                var r = this.document.createElementNS(s, "text");
                if (e.displayValue) {
                  var o, i;
                  r.setAttribute(
                    "style",
                    "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font
                  ),
                    (i =
                      "top" == e.textPosition
                        ? e.fontSize - e.textMargin
                        : e.height + e.textMargin + e.fontSize),
                    "left" == e.textAlign || n.barcodePadding > 0
                      ? ((o = 0), r.setAttribute("text-anchor", "start"))
                      : "right" == e.textAlign
                      ? ((o = n.width - 1),
                        r.setAttribute("text-anchor", "end"))
                      : ((o = n.width / 2),
                        r.setAttribute("text-anchor", "middle")),
                    r.setAttribute("x", o),
                    r.setAttribute("y", i),
                    r.appendChild(this.document.createTextNode(n.text)),
                    t.appendChild(r);
                }
              }
            },
            {
              key: "setSvgAttributes",
              value: function(t, e) {
                var n = this.svg;
                n.setAttribute("width", t + "px"),
                  n.setAttribute("height", e + "px"),
                  n.setAttribute("x", "0px"),
                  n.setAttribute("y", "0px"),
                  n.setAttribute("viewBox", "0 0 " + t + " " + e),
                  n.setAttribute("xmlns", s),
                  n.setAttribute("version", "1.1"),
                  n.setAttribute("style", "transform: translate(0,0)");
              }
            },
            {
              key: "createGroup",
              value: function(t, e, n) {
                var r = this.document.createElementNS(s, "g");
                return (
                  r.setAttribute(
                    "transform",
                    "translate(" + t + ", " + e + ")"
                  ),
                  n.appendChild(r),
                  r
                );
              }
            },
            {
              key: "setGroupOptions",
              value: function(t, e) {
                t.setAttribute("style", "fill:" + e.lineColor + ";");
              }
            },
            {
              key: "drawRect",
              value: function(t, e, n, r, o) {
                var i = this.document.createElementNS(s, "rect");
                return (
                  i.setAttribute("x", t),
                  i.setAttribute("y", e),
                  i.setAttribute("width", n),
                  i.setAttribute("height", r),
                  o.appendChild(i),
                  i
                );
              }
            }
          ]),
          t
        );
      })();
    e.default = f;
  }
]);
