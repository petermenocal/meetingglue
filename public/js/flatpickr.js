/* flatpickr v4.5.7,, @license MIT */
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).flatpickr = t());
})(this, function() {
  "use strict";
  var e = function() {
      return (e =
        Object.assign ||
        function(e) {
          for (var t, n = 1, a = arguments.length; n < a; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    },
    t = [
      "onChange",
      "onClose",
      "onDayCreate",
      "onDestroy",
      "onKeyDown",
      "onMonthChange",
      "onOpen",
      "onParseConfig",
      "onReady",
      "onValueUpdate",
      "onYearChange",
      "onPreCalendarPosition"
    ],
    n = {
      _disable: [],
      _enable: [],
      allowInput: !1,
      altFormat: "F j, Y",
      altInput: !1,
      altInputClass: "form-control input",
      animate:
        "object" == typeof window &&
        -1 === window.navigator.userAgent.indexOf("MSIE"),
      ariaDateFormat: "F j, Y",
      clickOpens: !0,
      closeOnSelect: !0,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: !1,
      enable: [],
      enableSeconds: !1,
      enableTime: !1,
      errorHandler: function(e) {
        return "undefined" != typeof console && console.warn(e);
      },
      getWeek: function(e) {
        var t = new Date(e.getTime());
        t.setHours(0, 0, 0, 0),
          t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
        var n = new Date(t.getFullYear(), 0, 4);
        return (
          1 +
          Math.round(
            ((t.getTime() - n.getTime()) / 864e5 - 3 + ((n.getDay() + 6) % 7)) /
              7
          )
        );
      },
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: !1,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      nextArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: !1,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: void 0,
      prevArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: !1,
      showMonths: 1,
      static: !1,
      time_24hr: !1,
      weekNumbers: !1,
      wrap: !1
    },
    a = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function(e) {
        var t = e % 100;
        if (t > 3 && t < 21) return "th";
        switch (t % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year"
    },
    i = function(e) {
      return ("0" + e).slice(-2);
    },
    o = function(e) {
      return !0 === e ? 1 : 0;
    };
  function r(e, t, n) {
    var a;
    return (
      void 0 === n && (n = !1),
      function() {
        var i = this,
          o = arguments;
        null !== a && clearTimeout(a),
          (a = window.setTimeout(function() {
            (a = null), n || e.apply(i, o);
          }, t)),
          n && !a && e.apply(i, o);
      }
    );
  }
  var l = function(e) {
    return e instanceof Array ? e : [e];
  };
  function c(e, t, n) {
    if (!0 === n) return e.classList.add(t);
    e.classList.remove(t);
  }
  function d(e, t, n) {
    var a = window.document.createElement(e);
    return (
      (t = t || ""),
      (n = n || ""),
      (a.className = t),
      void 0 !== n && (a.textContent = n),
      a
    );
  }
  function s(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  function u(e, t) {
    var n = d("div", "numInputWrapper"),
      a = d("input", "numInput " + e),
      i = d("span", "arrowUp"),
      o = d("span", "arrowDown");
    if (
      (-1 === navigator.userAgent.indexOf("MSIE 9.0")
        ? (a.type = "number")
        : ((a.type = "text"), (a.pattern = "\\d*")),
      void 0 !== t)
    )
      for (var r in t) a.setAttribute(r, t[r]);
    return n.appendChild(a), n.appendChild(i), n.appendChild(o), n;
  }
  var f = function() {},
    m = function(e, t, n) {
      return n.months[t ? "shorthand" : "longhand"][e];
    },
    g = {
      D: f,
      F: function(e, t, n) {
        e.setMonth(n.months.longhand.indexOf(t));
      },
      G: function(e, t) {
        e.setHours(parseFloat(t));
      },
      H: function(e, t) {
        e.setHours(parseFloat(t));
      },
      J: function(e, t) {
        e.setDate(parseFloat(t));
      },
      K: function(e, t, n) {
        e.setHours(
          (e.getHours() % 12) + 12 * o(new RegExp(n.amPM[1], "i").test(t))
        );
      },
      M: function(e, t, n) {
        e.setMonth(n.months.shorthand.indexOf(t));
      },
      S: function(e, t) {
        e.setSeconds(parseFloat(t));
      },
      U: function(e, t) {
        return new Date(1e3 * parseFloat(t));
      },
      W: function(e, t) {
        var n = parseInt(t);
        return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0);
      },
      Y: function(e, t) {
        e.setFullYear(parseFloat(t));
      },
      Z: function(e, t) {
        return new Date(t);
      },
      d: function(e, t) {
        e.setDate(parseFloat(t));
      },
      h: function(e, t) {
        e.setHours(parseFloat(t));
      },
      i: function(e, t) {
        e.setMinutes(parseFloat(t));
      },
      j: function(e, t) {
        e.setDate(parseFloat(t));
      },
      l: f,
      m: function(e, t) {
        e.setMonth(parseFloat(t) - 1);
      },
      n: function(e, t) {
        e.setMonth(parseFloat(t) - 1);
      },
      s: function(e, t) {
        e.setSeconds(parseFloat(t));
      },
      u: function(e, t) {
        return new Date(parseFloat(t));
      },
      w: f,
      y: function(e, t) {
        e.setFullYear(2e3 + parseFloat(t));
      }
    },
    p = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      u: "(.+)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})"
    },
    h = {
      Z: function(e) {
        return e.toISOString();
      },
      D: function(e, t, n) {
        return t.weekdays.shorthand[h.w(e, t, n)];
      },
      F: function(e, t, n) {
        return m(h.n(e, t, n) - 1, !1, t);
      },
      G: function(e, t, n) {
        return i(h.h(e, t, n));
      },
      H: function(e) {
        return i(e.getHours());
      },
      J: function(e, t) {
        return void 0 !== t.ordinal
          ? e.getDate() + t.ordinal(e.getDate())
          : e.getDate();
      },
      K: function(e, t) {
        return t.amPM[o(e.getHours() > 11)];
      },
      M: function(e, t) {
        return m(e.getMonth(), !0, t);
      },
      S: function(e) {
        return i(e.getSeconds());
      },
      U: function(e) {
        return e.getTime() / 1e3;
      },
      W: function(e, t, n) {
        return n.getWeek(e);
      },
      Y: function(e) {
        return e.getFullYear();
      },
      d: function(e) {
        return i(e.getDate());
      },
      h: function(e) {
        return e.getHours() % 12 ? e.getHours() % 12 : 12;
      },
      i: function(e) {
        return i(e.getMinutes());
      },
      j: function(e) {
        return e.getDate();
      },
      l: function(e, t) {
        return t.weekdays.longhand[e.getDay()];
      },
      m: function(e) {
        return i(e.getMonth() + 1);
      },
      n: function(e) {
        return e.getMonth() + 1;
      },
      s: function(e) {
        return e.getSeconds();
      },
      u: function(e) {
        return e.getTime();
      },
      w: function(e) {
        return e.getDay();
      },
      y: function(e) {
        return String(e.getFullYear()).substring(2);
      }
    },
    v = function(e) {
      var t = e.config,
        i = void 0 === t ? n : t,
        o = e.l10n,
        r = void 0 === o ? a : o;
      return function(e, t, n) {
        var a = n || r;
        return void 0 !== i.formatDate
          ? i.formatDate(e, t, a)
          : t
              .split("")
              .map(function(t, n, o) {
                return h[t] && "\\" !== o[n - 1]
                  ? h[t](e, a, i)
                  : "\\" !== t
                  ? t
                  : "";
              })
              .join("");
      };
    },
    D = function(e) {
      var t = e.config,
        i = void 0 === t ? n : t,
        o = e.l10n,
        r = void 0 === o ? a : o;
      return function(e, t, a, o) {
        if (0 === e || e) {
          var l,
            c = o || r,
            d = e;
          if (e instanceof Date) l = new Date(e.getTime());
          else if ("string" != typeof e && void 0 !== e.toFixed)
            l = new Date(e);
          else if ("string" == typeof e) {
            var s = t || (i || n).dateFormat,
              u = String(e).trim();
            if ("today" === u) (l = new Date()), (a = !0);
            else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
            else if (i && i.parseDate) l = i.parseDate(e, s);
            else {
              l =
                i && i.noCalendar
                  ? new Date(new Date().setHours(0, 0, 0, 0))
                  : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
              for (
                var f = void 0, m = [], h = 0, v = 0, D = "";
                h < s.length;
                h++
              ) {
                var w = s[h],
                  b = "\\" === w,
                  y = "\\" === s[h - 1] || b;
                if (p[w] && !y) {
                  D += p[w];
                  var C = new RegExp(D).exec(e);
                  C &&
                    (f = !0) &&
                    m["Y" !== w ? "push" : "unshift"]({
                      fn: g[w],
                      val: C[++v]
                    });
                } else b || (D += ".");
                m.forEach(function(e) {
                  var t = e.fn,
                    n = e.val;
                  return (l = t(l, n, c) || l);
                });
              }
              l = f ? l : void 0;
            }
          }
          if (l instanceof Date && !isNaN(l.getTime()))
            return !0 === a && l.setHours(0, 0, 0, 0), l;
          i.errorHandler(new Error("Invalid date provided: " + d));
        }
      };
    };
  function w(e, t, n) {
    return (
      void 0 === n && (n = !0),
      !1 !== n
        ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
          new Date(t.getTime()).setHours(0, 0, 0, 0)
        : e.getTime() - t.getTime()
    );
  }
  var b = function(e, t, n) {
      return e > Math.min(t, n) && e < Math.max(t, n);
    },
    y = { DAY: 864e5 };
  "function" != typeof Object.assign &&
    (Object.assign = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      if (!e) throw TypeError("Cannot convert undefined or null to object");
      for (
        var a = function(t) {
            t &&
              Object.keys(t).forEach(function(n) {
                return (e[n] = t[n]);
              });
          },
          i = 0,
          o = t;
        i < o.length;
        i++
      ) {
        a(o[i]);
      }
      return e;
    });
  var C = 300;
  function M(n, f) {
    var g = { config: e({}, E.defaultConfig), l10n: a };
    function h(e) {
      return e.bind(g);
    }
    function M() {
      var e = g.config;
      (!1 === e.weekNumbers && 1 === e.showMonths) ||
        (!0 !== e.noCalendar &&
          window.requestAnimationFrame(function() {
            if (
              (void 0 !== g.calendarContainer &&
                ((g.calendarContainer.style.visibility = "hidden"),
                (g.calendarContainer.style.display = "block")),
              void 0 !== g.daysContainer)
            ) {
              var t = (g.days.offsetWidth + 1) * e.showMonths;
              (g.daysContainer.style.width = t + "px"),
                (g.calendarContainer.style.width =
                  t +
                  (void 0 !== g.weekWrapper ? g.weekWrapper.offsetWidth : 0) +
                  "px"),
                g.calendarContainer.style.removeProperty("visibility"),
                g.calendarContainer.style.removeProperty("display");
            }
          }));
    }
    function x(e) {
      0 === g.selectedDates.length && ne(),
        void 0 !== e &&
          "blur" !== e.type &&
          (function(e) {
            e.preventDefault();
            var t = "keydown" === e.type,
              n = e.target;
            void 0 !== g.amPM &&
              e.target === g.amPM &&
              (g.amPM.textContent =
                g.l10n.amPM[o(g.amPM.textContent === g.l10n.amPM[0])]);
            var a = parseFloat(n.getAttribute("min")),
              r = parseFloat(n.getAttribute("max")),
              l = parseFloat(n.getAttribute("step")),
              c = parseInt(n.value, 10),
              d = e.delta || (t ? (38 === e.which ? 1 : -1) : 0),
              s = c + l * d;
            if (void 0 !== n.value && 2 === n.value.length) {
              var u = n === g.hourElement,
                f = n === g.minuteElement;
              s < a
                ? ((s = r + s + o(!u) + (o(u) && o(!g.amPM))),
                  f && Y(void 0, -1, g.hourElement))
                : s > r &&
                  ((s = n === g.hourElement ? s - r - o(!g.amPM) : a),
                  f && Y(void 0, 1, g.hourElement)),
                g.amPM &&
                  u &&
                  (1 === l ? s + c === 23 : Math.abs(s - c) > l) &&
                  (g.amPM.textContent =
                    g.l10n.amPM[o(g.amPM.textContent === g.l10n.amPM[0])]),
                (n.value = i(s));
            }
          })(e);
      var t = g._input.value;
      T(), ve(), g._input.value !== t && g._debouncedChange();
    }
    function T() {
      if (void 0 !== g.hourElement && void 0 !== g.minuteElement) {
        var e,
          t,
          n = (parseInt(g.hourElement.value.slice(-2), 10) || 0) % 24,
          a = (parseInt(g.minuteElement.value, 10) || 0) % 60,
          i =
            void 0 !== g.secondElement
              ? (parseInt(g.secondElement.value, 10) || 0) % 60
              : 0;
        void 0 !== g.amPM &&
          ((e = n),
          (t = g.amPM.textContent),
          (n = (e % 12) + 12 * o(t === g.l10n.amPM[1])));
        var r =
          void 0 !== g.config.minTime ||
          (g.config.minDate &&
            g.minDateHasTime &&
            g.latestSelectedDateObj &&
            0 === w(g.latestSelectedDateObj, g.config.minDate, !0));
        if (
          void 0 !== g.config.maxTime ||
          (g.config.maxDate &&
            g.maxDateHasTime &&
            g.latestSelectedDateObj &&
            0 === w(g.latestSelectedDateObj, g.config.maxDate, !0))
        ) {
          var l =
            void 0 !== g.config.maxTime ? g.config.maxTime : g.config.maxDate;
          (n = Math.min(n, l.getHours())) === l.getHours() &&
            (a = Math.min(a, l.getMinutes())),
            a === l.getMinutes() && (i = Math.min(i, l.getSeconds()));
        }
        if (r) {
          var c =
            void 0 !== g.config.minTime ? g.config.minTime : g.config.minDate;
          (n = Math.max(n, c.getHours())) === c.getHours() &&
            (a = Math.max(a, c.getMinutes())),
            a === c.getMinutes() && (i = Math.max(i, c.getSeconds()));
        }
        O(n, a, i);
      }
    }
    function k(e) {
      var t = e || g.latestSelectedDateObj;
      t && O(t.getHours(), t.getMinutes(), t.getSeconds());
    }
    function I() {
      var e = g.config.defaultHour,
        t = g.config.defaultMinute,
        n = g.config.defaultSeconds;
      if (void 0 !== g.config.minDate) {
        var a = g.config.minDate.getHours(),
          i = g.config.minDate.getMinutes();
        (e = Math.max(e, a)) === a && (t = Math.max(i, t)),
          e === a && t === i && (n = g.config.minDate.getSeconds());
      }
      if (void 0 !== g.config.maxDate) {
        var o = g.config.maxDate.getHours(),
          r = g.config.maxDate.getMinutes();
        (e = Math.min(e, o)) === o && (t = Math.min(r, t)),
          e === o && t === r && (n = g.config.maxDate.getSeconds());
      }
      O(e, t, n);
    }
    function O(e, t, n) {
      void 0 !== g.latestSelectedDateObj &&
        g.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
        g.hourElement &&
          g.minuteElement &&
          !g.isMobile &&
          ((g.hourElement.value = i(
            g.config.time_24hr ? e : ((12 + e) % 12) + 12 * o(e % 12 == 0)
          )),
          (g.minuteElement.value = i(t)),
          void 0 !== g.amPM && (g.amPM.textContent = g.l10n.amPM[o(e >= 12)]),
          void 0 !== g.secondElement && (g.secondElement.value = i(n)));
    }
    function S(e) {
      var t = parseInt(e.target.value) + (e.delta || 0);
      (t / 1e3 > 1 || ("Enter" === e.key && !/[^\d]/.test(t.toString()))) &&
        V(t);
    }
    function _(e, t, n, a) {
      return t instanceof Array
        ? t.forEach(function(t) {
            return _(e, t, n, a);
          })
        : e instanceof Array
        ? e.forEach(function(e) {
            return _(e, t, n, a);
          })
        : (e.addEventListener(t, n, a),
          void g._handlers.push({
            element: e,
            event: t,
            handler: n,
            options: a
          }));
    }
    function N(e) {
      return function(t) {
        1 === t.which && e(t);
      };
    }
    function F() {
      fe("onChange");
    }
    function P(e) {
      var t =
        void 0 !== e
          ? g.parseDate(e)
          : g.latestSelectedDateObj ||
            (g.config.minDate && g.config.minDate > g.now
              ? g.config.minDate
              : g.config.maxDate && g.config.maxDate < g.now
              ? g.config.maxDate
              : g.now);
      try {
        void 0 !== t &&
          ((g.currentYear = t.getFullYear()), (g.currentMonth = t.getMonth()));
      } catch (e) {
        (e.message = "Invalid date supplied: " + t), g.config.errorHandler(e);
      }
      g.redraw();
    }
    function A(e) {
      ~e.target.className.indexOf("arrow") &&
        Y(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    function Y(e, t, n) {
      var a = e && e.target,
        i = n || (a && a.parentNode && a.parentNode.firstChild),
        o = me("increment");
      (o.delta = t), i && i.dispatchEvent(o);
    }
    function j(e, t, n, a) {
      var i = Z(t, !0),
        o = d("span", "flatpickr-day " + e, t.getDate().toString());
      return (
        (o.dateObj = t),
        (o.$i = a),
        o.setAttribute("aria-label", g.formatDate(t, g.config.ariaDateFormat)),
        -1 === e.indexOf("hidden") &&
          0 === w(t, g.now) &&
          ((g.todayDateElem = o),
          o.classList.add("today"),
          o.setAttribute("aria-current", "date")),
        i
          ? ((o.tabIndex = -1),
            ge(t) &&
              (o.classList.add("selected"),
              (g.selectedDateElem = o),
              "range" === g.config.mode &&
                (c(
                  o,
                  "startRange",
                  g.selectedDates[0] && 0 === w(t, g.selectedDates[0], !0)
                ),
                c(
                  o,
                  "endRange",
                  g.selectedDates[1] && 0 === w(t, g.selectedDates[1], !0)
                ),
                "nextMonthDay" === e && o.classList.add("inRange"))))
          : o.classList.add("disabled"),
        "range" === g.config.mode &&
          (function(e) {
            return (
              !("range" !== g.config.mode || g.selectedDates.length < 2) &&
              w(e, g.selectedDates[0]) >= 0 &&
              w(e, g.selectedDates[1]) <= 0
            );
          })(t) &&
          !ge(t) &&
          o.classList.add("inRange"),
        g.weekNumbers &&
          1 === g.config.showMonths &&
          "prevMonthDay" !== e &&
          n % 7 == 1 &&
          g.weekNumbers.insertAdjacentHTML(
            "beforeend",
            "<span class='flatpickr-day'>" + g.config.getWeek(t) + "</span>"
          ),
        fe("onDayCreate", o),
        o
      );
    }
    function H(e) {
      e.focus(), "range" === g.config.mode && ee(e);
    }
    function L(e) {
      for (
        var t = e > 0 ? 0 : g.config.showMonths - 1,
          n = e > 0 ? g.config.showMonths : -1,
          a = t;
        a != n;
        a += e
      )
        for (
          var i = g.daysContainer.children[a],
            o = e > 0 ? 0 : i.children.length - 1,
            r = e > 0 ? i.children.length : -1,
            l = o;
          l != r;
          l += e
        ) {
          var c = i.children[l];
          if (-1 === c.className.indexOf("hidden") && Z(c.dateObj)) return c;
        }
    }
    function W(e, t) {
      var n = Q(document.activeElement || document.body),
        a =
          void 0 !== e
            ? e
            : n
            ? document.activeElement
            : void 0 !== g.selectedDateElem && Q(g.selectedDateElem)
            ? g.selectedDateElem
            : void 0 !== g.todayDateElem && Q(g.todayDateElem)
            ? g.todayDateElem
            : L(t > 0 ? 1 : -1);
      return void 0 === a
        ? g._input.focus()
        : n
        ? void (function(e, t) {
            for (
              var n =
                  -1 === e.className.indexOf("Month")
                    ? e.dateObj.getMonth()
                    : g.currentMonth,
                a = t > 0 ? g.config.showMonths : -1,
                i = t > 0 ? 1 : -1,
                o = n - g.currentMonth;
              o != a;
              o += i
            )
              for (
                var r = g.daysContainer.children[o],
                  l =
                    n - g.currentMonth === o
                      ? e.$i + t
                      : t < 0
                      ? r.children.length - 1
                      : 0,
                  c = r.children.length,
                  d = l;
                d >= 0 && d < c && d != (t > 0 ? c : -1);
                d += i
              ) {
                var s = r.children[d];
                if (
                  -1 === s.className.indexOf("hidden") &&
                  Z(s.dateObj) &&
                  Math.abs(e.$i - d) >= Math.abs(t)
                )
                  return H(s);
              }
            g.changeMonth(i), W(L(i), 0);
          })(a, t)
        : H(a);
    }
    function R(e, t) {
      for (
        var n = (new Date(e, t, 1).getDay() - g.l10n.firstDayOfWeek + 7) % 7,
          a = g.utils.getDaysInMonth((t - 1 + 12) % 12),
          i = g.utils.getDaysInMonth(t),
          o = window.document.createDocumentFragment(),
          r = g.config.showMonths > 1,
          l = r ? "prevMonthDay hidden" : "prevMonthDay",
          c = r ? "nextMonthDay hidden" : "nextMonthDay",
          s = a + 1 - n,
          u = 0;
        s <= a;
        s++, u++
      )
        o.appendChild(j(l, new Date(e, t - 1, s), s, u));
      for (s = 1; s <= i; s++, u++)
        o.appendChild(j("", new Date(e, t, s), s, u));
      for (
        var f = i + 1;
        f <= 42 - n && (1 === g.config.showMonths || u % 7 != 0);
        f++, u++
      )
        o.appendChild(j(c, new Date(e, t + 1, f % i), f, u));
      var m = d("div", "dayContainer");
      return m.appendChild(o), m;
    }
    function B() {
      if (void 0 !== g.daysContainer) {
        s(g.daysContainer), g.weekNumbers && s(g.weekNumbers);
        for (
          var e = document.createDocumentFragment(), t = 0;
          t < g.config.showMonths;
          t++
        ) {
          var n = new Date(g.currentYear, g.currentMonth, 1);
          n.setMonth(g.currentMonth + t),
            e.appendChild(R(n.getFullYear(), n.getMonth()));
        }
        g.daysContainer.appendChild(e),
          (g.days = g.daysContainer.firstChild),
          "range" === g.config.mode && 1 === g.selectedDates.length && ee();
      }
    }
    function K() {
      var e = d("div", "flatpickr-month"),
        t = window.document.createDocumentFragment(),
        n = d("span", "cur-month"),
        a = u("cur-year", { tabindex: "-1" }),
        i = a.getElementsByTagName("input")[0];
      i.setAttribute("aria-label", g.l10n.yearAriaLabel),
        g.config.minDate &&
          i.setAttribute("min", g.config.minDate.getFullYear().toString()),
        g.config.maxDate &&
          (i.setAttribute("max", g.config.maxDate.getFullYear().toString()),
          (i.disabled =
            !!g.config.minDate &&
            g.config.minDate.getFullYear() === g.config.maxDate.getFullYear()));
      var o = d("div", "flatpickr-current-month");
      return (
        o.appendChild(n),
        o.appendChild(a),
        t.appendChild(o),
        e.appendChild(t),
        { container: e, yearElement: i, monthElement: n }
      );
    }
    function J() {
      s(g.monthNav),
        g.monthNav.appendChild(g.prevMonthNav),
        g.config.showMonths && ((g.yearElements = []), (g.monthElements = []));
      for (var e = g.config.showMonths; e--; ) {
        var t = K();
        g.yearElements.push(t.yearElement),
          g.monthElements.push(t.monthElement),
          g.monthNav.appendChild(t.container);
      }
      g.monthNav.appendChild(g.nextMonthNav);
    }
    function U() {
      g.weekdayContainer
        ? s(g.weekdayContainer)
        : (g.weekdayContainer = d("div", "flatpickr-weekdays"));
      for (var e = g.config.showMonths; e--; ) {
        var t = d("div", "flatpickr-weekdaycontainer");
        g.weekdayContainer.appendChild(t);
      }
      return q(), g.weekdayContainer;
    }
    function q() {
      var e = g.l10n.firstDayOfWeek,
        t = g.l10n.weekdays.shorthand.slice();
      e > 0 &&
        e < t.length &&
        (t = t.splice(e, t.length).concat(t.splice(0, e)));
      for (var n = g.config.showMonths; n--; )
        g.weekdayContainer.children[n].innerHTML =
          "\n      <span class='flatpickr-weekday'>\n        " +
          t.join("</span><span class='flatpickr-weekday'>") +
          "\n      </span>\n      ";
    }
    function $(e, t) {
      void 0 === t && (t = !0);
      var n = t ? e : e - g.currentMonth;
      (n < 0 && !0 === g._hidePrevMonthArrow) ||
        (n > 0 && !0 === g._hideNextMonthArrow) ||
        ((g.currentMonth += n),
        (g.currentMonth < 0 || g.currentMonth > 11) &&
          ((g.currentYear += g.currentMonth > 11 ? 1 : -1),
          (g.currentMonth = (g.currentMonth + 12) % 12),
          fe("onYearChange")),
        B(),
        fe("onMonthChange"),
        pe());
    }
    function z(e) {
      return (
        !(!g.config.appendTo || !g.config.appendTo.contains(e)) ||
        g.calendarContainer.contains(e)
      );
    }
    function G(e) {
      if (g.isOpen && !g.config.inline) {
        var t =
            "function" == typeof (r = e).composedPath
              ? r.composedPath()[0]
              : r.target,
          n = z(t),
          a =
            t === g.input ||
            t === g.altInput ||
            g.element.contains(t) ||
            (e.path &&
              e.path.indexOf &&
              (~e.path.indexOf(g.input) || ~e.path.indexOf(g.altInput))),
          i =
            "blur" === e.type
              ? a && e.relatedTarget && !z(e.relatedTarget)
              : !a && !n && !z(e.relatedTarget),
          o = !g.config.ignoredFocusElements.some(function(e) {
            return e.contains(t);
          });
        i &&
          o &&
          (g.close(),
          "range" === g.config.mode &&
            1 === g.selectedDates.length &&
            (g.clear(!1), g.redraw()));
      }
      var r;
    }
    function V(e) {
      if (
        !(
          !e ||
          (g.config.minDate && e < g.config.minDate.getFullYear()) ||
          (g.config.maxDate && e > g.config.maxDate.getFullYear())
        )
      ) {
        var t = e,
          n = g.currentYear !== t;
        (g.currentYear = t || g.currentYear),
          g.config.maxDate && g.currentYear === g.config.maxDate.getFullYear()
            ? (g.currentMonth = Math.min(
                g.config.maxDate.getMonth(),
                g.currentMonth
              ))
            : g.config.minDate &&
              g.currentYear === g.config.minDate.getFullYear() &&
              (g.currentMonth = Math.max(
                g.config.minDate.getMonth(),
                g.currentMonth
              )),
          n && (g.redraw(), fe("onYearChange"));
      }
    }
    function Z(e, t) {
      void 0 === t && (t = !0);
      var n = g.parseDate(e, void 0, t);
      if (
        (g.config.minDate &&
          n &&
          w(n, g.config.minDate, void 0 !== t ? t : !g.minDateHasTime) < 0) ||
        (g.config.maxDate &&
          n &&
          w(n, g.config.maxDate, void 0 !== t ? t : !g.maxDateHasTime) > 0)
      )
        return !1;
      if (0 === g.config.enable.length && 0 === g.config.disable.length)
        return !0;
      if (void 0 === n) return !1;
      for (
        var a = g.config.enable.length > 0,
          i = a ? g.config.enable : g.config.disable,
          o = 0,
          r = void 0;
        o < i.length;
        o++
      ) {
        if ("function" == typeof (r = i[o]) && r(n)) return a;
        if (r instanceof Date && void 0 !== n && r.getTime() === n.getTime())
          return a;
        if ("string" == typeof r && void 0 !== n) {
          var l = g.parseDate(r, void 0, !0);
          return l && l.getTime() === n.getTime() ? a : !a;
        }
        if (
          "object" == typeof r &&
          void 0 !== n &&
          r.from &&
          r.to &&
          n.getTime() >= r.from.getTime() &&
          n.getTime() <= r.to.getTime()
        )
          return a;
      }
      return !a;
    }
    function Q(e) {
      return (
        void 0 !== g.daysContainer &&
        (-1 === e.className.indexOf("hidden") && g.daysContainer.contains(e))
      );
    }
    function X(e) {
      var t = e.target === g._input,
        n = g.config.allowInput,
        a = g.isOpen && (!n || !t),
        i = g.config.inline && t && !n;
      if (13 === e.keyCode && t) {
        if (n)
          return (
            g.setDate(
              g._input.value,
              !0,
              e.target === g.altInput ? g.config.altFormat : g.config.dateFormat
            ),
            e.target.blur()
          );
        g.open();
      } else if (z(e.target) || a || i) {
        var o = !!g.timeContainer && g.timeContainer.contains(e.target);
        switch (e.keyCode) {
          case 13:
            o ? (x(), le()) : ce(e);
            break;
          case 27:
            e.preventDefault(), le();
            break;
          case 8:
          case 46:
            t && !g.config.allowInput && (e.preventDefault(), g.clear());
            break;
          case 37:
          case 39:
            if (o) g.hourElement && g.hourElement.focus();
            else if (
              (e.preventDefault(),
              void 0 !== g.daysContainer &&
                (!1 === n ||
                  (document.activeElement && Q(document.activeElement))))
            ) {
              var r = 39 === e.keyCode ? 1 : -1;
              e.ctrlKey
                ? (e.stopPropagation(), $(r), W(L(1), 0))
                : W(void 0, r);
            }
            break;
          case 38:
          case 40:
            e.preventDefault();
            var l = 40 === e.keyCode ? 1 : -1;
            (g.daysContainer && void 0 !== e.target.$i) || e.target === g.input
              ? e.ctrlKey
                ? (e.stopPropagation(), V(g.currentYear - l), W(L(1), 0))
                : o || W(void 0, 7 * l)
              : g.config.enableTime &&
                (!o && g.hourElement && g.hourElement.focus(),
                x(e),
                g._debouncedChange());
            break;
          case 9:
            if (o) {
              var c = [
                  g.hourElement,
                  g.minuteElement,
                  g.secondElement,
                  g.amPM
                ].filter(function(e) {
                  return e;
                }),
                d = c.indexOf(e.target);
              if (-1 !== d) {
                var s = c[d + (e.shiftKey ? -1 : 1)];
                void 0 !== s
                  ? (e.preventDefault(), s.focus())
                  : e.shiftKey && (e.preventDefault(), g._input.focus());
              }
            }
        }
      }
      if (void 0 !== g.amPM && e.target === g.amPM)
        switch (e.key) {
          case g.l10n.amPM[0].charAt(0):
          case g.l10n.amPM[0].charAt(0).toLowerCase():
            (g.amPM.textContent = g.l10n.amPM[0]), T(), ve();
            break;
          case g.l10n.amPM[1].charAt(0):
          case g.l10n.amPM[1].charAt(0).toLowerCase():
            (g.amPM.textContent = g.l10n.amPM[1]), T(), ve();
        }
      fe("onKeyDown", e);
    }
    function ee(e) {
      if (
        1 === g.selectedDates.length &&
        (!e ||
          (e.classList.contains("flatpickr-day") &&
            !e.classList.contains("disabled")))
      ) {
        for (
          var t = e
              ? e.dateObj.getTime()
              : g.days.firstElementChild.dateObj.getTime(),
            n = g.parseDate(g.selectedDates[0], void 0, !0).getTime(),
            a = Math.min(t, g.selectedDates[0].getTime()),
            i = Math.max(t, g.selectedDates[0].getTime()),
            o = g.daysContainer.lastChild.lastChild.dateObj.getTime(),
            r = !1,
            l = 0,
            c = 0,
            d = a;
          d < o;
          d += y.DAY
        )
          Z(new Date(d), !0) ||
            ((r = r || (d > a && d < i)),
            d < n && (!l || d > l)
              ? (l = d)
              : d > n && (!c || d < c) && (c = d));
        for (var s = 0; s < g.config.showMonths; s++)
          for (
            var u = g.daysContainer.children[s],
              f = g.daysContainer.children[s - 1],
              m = function(a, i) {
                var o = u.children[a],
                  d = o.dateObj.getTime(),
                  m = (l > 0 && d < l) || (c > 0 && d > c);
                return m
                  ? (o.classList.add("notAllowed"),
                    ["inRange", "startRange", "endRange"].forEach(function(e) {
                      o.classList.remove(e);
                    }),
                    "continue")
                  : r && !m
                  ? "continue"
                  : ([
                      "startRange",
                      "inRange",
                      "endRange",
                      "notAllowed"
                    ].forEach(function(e) {
                      o.classList.remove(e);
                    }),
                    void (
                      void 0 !== e &&
                      (e.classList.add(
                        t < g.selectedDates[0].getTime()
                          ? "startRange"
                          : "endRange"
                      ),
                      (!u.contains(e) &&
                        s > 0 &&
                        f &&
                        f.lastChild.dateObj.getTime() >= d) ||
                        (n < t && d === n
                          ? o.classList.add("startRange")
                          : n > t && d === n && o.classList.add("endRange"),
                        d >= l &&
                          (0 === c || d <= c) &&
                          b(d, n, t) &&
                          o.classList.add("inRange")))
                    ));
              },
              p = 0,
              h = u.children.length;
            p < h;
            p++
          )
            m(p);
      }
    }
    function te() {
      !g.isOpen || g.config.static || g.config.inline || oe();
    }
    function ne() {
      g.setDate(
        void 0 !== g.config.minDate
          ? new Date(g.config.minDate.getTime())
          : new Date(),
        !1
      ),
        I(),
        ve();
    }
    function ae(e) {
      return function(t) {
        var n = (g.config["_" + e + "Date"] = g.parseDate(
            t,
            g.config.dateFormat
          )),
          a = g.config["_" + ("min" === e ? "max" : "min") + "Date"];
        void 0 !== n &&
          (g["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
            n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
          g.selectedDates &&
            ((g.selectedDates = g.selectedDates.filter(function(e) {
              return Z(e);
            })),
            g.selectedDates.length || "min" !== e || k(n),
            ve()),
          g.daysContainer &&
            (re(),
            void 0 !== n
              ? (g.currentYearElement[e] = n.getFullYear().toString())
              : g.currentYearElement.removeAttribute(e),
            (g.currentYearElement.disabled =
              !!a && void 0 !== n && a.getFullYear() === n.getFullYear()));
      };
    }
    function ie() {
      "object" != typeof g.config.locale &&
        void 0 === E.l10ns[g.config.locale] &&
        g.config.errorHandler(
          new Error("flatpickr: invalid locale " + g.config.locale)
        ),
        (g.l10n = e(
          {},
          E.l10ns.default,
          "object" == typeof g.config.locale
            ? g.config.locale
            : "default" !== g.config.locale
            ? E.l10ns[g.config.locale]
            : void 0
        )),
        (p.K =
          "(" +
          g.l10n.amPM[0] +
          "|" +
          g.l10n.amPM[1] +
          "|" +
          g.l10n.amPM[0].toLowerCase() +
          "|" +
          g.l10n.amPM[1].toLowerCase() +
          ")"),
        (g.formatDate = v(g)),
        (g.parseDate = D({ config: g.config, l10n: g.l10n }));
    }
    function oe(e) {
      if (void 0 !== g.calendarContainer) {
        fe("onPreCalendarPosition");
        var t = e || g._positionElement,
          n = Array.prototype.reduce.call(
            g.calendarContainer.children,
            function(e, t) {
              return e + t.offsetHeight;
            },
            0
          ),
          a = g.calendarContainer.offsetWidth,
          i = g.config.position.split(" "),
          o = i[0],
          r = i.length > 1 ? i[1] : null,
          l = t.getBoundingClientRect(),
          d = window.innerHeight - l.bottom,
          s = "above" === o || ("below" !== o && d < n && l.top > n),
          u = window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
        if (
          (c(g.calendarContainer, "arrowTop", !s),
          c(g.calendarContainer, "arrowBottom", s),
          !g.config.inline)
        ) {
          var f =
              window.pageXOffset +
              l.left -
              (null != r && "center" === r ? (a - l.width) / 2 : 0),
            m = window.document.body.offsetWidth - l.right,
            p = f + a > window.document.body.offsetWidth,
            h = m + a > window.document.body.offsetWidth;
          if ((c(g.calendarContainer, "rightMost", p), !g.config.static))
            if (((g.calendarContainer.style.top = u + "px"), p))
              if (h) {
                var v = document.styleSheets[0];
                if (void 0 === v) return;
                var D = window.document.body.offsetWidth,
                  w = Math.max(0, D / 2 - a / 2),
                  b = v.cssRules.length,
                  y = "{left:" + l.left + "px;right:auto;}";
                c(g.calendarContainer, "rightMost", !1),
                  c(g.calendarContainer, "centerMost", !0),
                  v.insertRule(
                    ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                      y,
                    b
                  ),
                  (g.calendarContainer.style.left = w + "px"),
                  (g.calendarContainer.style.right = "auto");
              } else
                (g.calendarContainer.style.left = "auto"),
                  (g.calendarContainer.style.right = m + "px");
            else
              (g.calendarContainer.style.left = f + "px"),
                (g.calendarContainer.style.right = "auto");
        }
      }
    }
    function re() {
      g.config.noCalendar || g.isMobile || (pe(), B());
    }
    function le() {
      g._input.focus(),
        -1 !== window.navigator.userAgent.indexOf("MSIE") ||
        void 0 !== navigator.msMaxTouchPoints
          ? setTimeout(g.close, 0)
          : g.close();
    }
    function ce(e) {
      e.preventDefault(), e.stopPropagation();
      var t = (function e(t, n) {
        return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0;
      })(e.target, function(e) {
        return (
          e.classList &&
          e.classList.contains("flatpickr-day") &&
          !e.classList.contains("disabled") &&
          !e.classList.contains("notAllowed")
        );
      });
      if (void 0 !== t) {
        var n = t,
          a = (g.latestSelectedDateObj = new Date(n.dateObj.getTime())),
          i =
            (a.getMonth() < g.currentMonth ||
              a.getMonth() > g.currentMonth + g.config.showMonths - 1) &&
            "range" !== g.config.mode;
        if (((g.selectedDateElem = n), "single" === g.config.mode))
          g.selectedDates = [a];
        else if ("multiple" === g.config.mode) {
          var o = ge(a);
          o ? g.selectedDates.splice(parseInt(o), 1) : g.selectedDates.push(a);
        } else
          "range" === g.config.mode &&
            (2 === g.selectedDates.length && g.clear(!1, !1),
            (g.latestSelectedDateObj = a),
            g.selectedDates.push(a),
            0 !== w(a, g.selectedDates[0], !0) &&
              g.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime();
              }));
        if ((T(), i)) {
          var r = g.currentYear !== a.getFullYear();
          (g.currentYear = a.getFullYear()),
            (g.currentMonth = a.getMonth()),
            r && fe("onYearChange"),
            fe("onMonthChange");
        }
        if (
          (pe(),
          B(),
          ve(),
          g.config.enableTime &&
            setTimeout(function() {
              return (g.showTimeInput = !0);
            }, 50),
          i || "range" === g.config.mode || 1 !== g.config.showMonths
            ? void 0 !== g.selectedDateElem &&
              void 0 === g.hourElement &&
              g.selectedDateElem &&
              g.selectedDateElem.focus()
            : H(n),
          void 0 !== g.hourElement &&
            void 0 !== g.hourElement &&
            g.hourElement.focus(),
          g.config.closeOnSelect)
        ) {
          var l = "single" === g.config.mode && !g.config.enableTime,
            c =
              "range" === g.config.mode &&
              2 === g.selectedDates.length &&
              !g.config.enableTime;
          (l || c) && le();
        }
        F();
      }
    }
    (g.parseDate = D({ config: g.config, l10n: g.l10n })),
      (g._handlers = []),
      (g._bind = _),
      (g._setHoursFromDate = k),
      (g._positionCalendar = oe),
      (g.changeMonth = $),
      (g.changeYear = V),
      (g.clear = function(e, t) {
        void 0 === e && (e = !0);
        void 0 === t && (t = !0);
        (g.input.value = ""), void 0 !== g.altInput && (g.altInput.value = "");
        void 0 !== g.mobileInput && (g.mobileInput.value = "");
        (g.selectedDates = []),
          (g.latestSelectedDateObj = void 0),
          !0 === t &&
            ((g.currentYear = g._initialDate.getFullYear()),
            (g.currentMonth = g._initialDate.getMonth()));
        (g.showTimeInput = !1), !0 === g.config.enableTime && I();
        g.redraw(), e && fe("onChange");
      }),
      (g.close = function() {
        (g.isOpen = !1),
          g.isMobile ||
            (void 0 !== g.calendarContainer &&
              g.calendarContainer.classList.remove("open"),
            void 0 !== g._input && g._input.classList.remove("active"));
        fe("onClose");
      }),
      (g._createElement = d),
      (g.destroy = function() {
        void 0 !== g.config && fe("onDestroy");
        for (var e = g._handlers.length; e--; ) {
          var t = g._handlers[e];
          t.element.removeEventListener(t.event, t.handler, t.options);
        }
        if (((g._handlers = []), g.mobileInput))
          g.mobileInput.parentNode &&
            g.mobileInput.parentNode.removeChild(g.mobileInput),
            (g.mobileInput = void 0);
        else if (g.calendarContainer && g.calendarContainer.parentNode)
          if (g.config.static && g.calendarContainer.parentNode) {
            var n = g.calendarContainer.parentNode;
            if ((n.lastChild && n.removeChild(n.lastChild), n.parentNode)) {
              for (; n.firstChild; ) n.parentNode.insertBefore(n.firstChild, n);
              n.parentNode.removeChild(n);
            }
          } else
            g.calendarContainer.parentNode.removeChild(g.calendarContainer);
        g.altInput &&
          ((g.input.type = "text"),
          g.altInput.parentNode &&
            g.altInput.parentNode.removeChild(g.altInput),
          delete g.altInput);
        g.input &&
          ((g.input.type = g.input._type),
          g.input.classList.remove("flatpickr-input"),
          g.input.removeAttribute("readonly"),
          (g.input.value = ""));
        [
          "_showTimeInput",
          "latestSelectedDateObj",
          "_hideNextMonthArrow",
          "_hidePrevMonthArrow",
          "__hideNextMonthArrow",
          "__hidePrevMonthArrow",
          "isMobile",
          "isOpen",
          "selectedDateElem",
          "minDateHasTime",
          "maxDateHasTime",
          "days",
          "daysContainer",
          "_input",
          "_positionElement",
          "innerContainer",
          "rContainer",
          "monthNav",
          "todayDateElem",
          "calendarContainer",
          "weekdayContainer",
          "prevMonthNav",
          "nextMonthNav",
          "currentMonthElement",
          "currentYearElement",
          "navigationCurrentMonth",
          "selectedDateElem",
          "config"
        ].forEach(function(e) {
          try {
            delete g[e];
          } catch (e) {}
        });
      }),
      (g.isEnabled = Z),
      (g.jumpToDate = P),
      (g.open = function(e, t) {
        void 0 === t && (t = g._positionElement);
        if (!0 === g.isMobile)
          return (
            e && (e.preventDefault(), e.target && e.target.blur()),
            void 0 !== g.mobileInput &&
              (g.mobileInput.focus(), g.mobileInput.click()),
            void fe("onOpen")
          );
        if (g._input.disabled || g.config.inline) return;
        var n = g.isOpen;
        (g.isOpen = !0),
          n ||
            (g.calendarContainer.classList.add("open"),
            g._input.classList.add("active"),
            fe("onOpen"),
            oe(t));
        !0 === g.config.enableTime &&
          !0 === g.config.noCalendar &&
          (0 === g.selectedDates.length && ne(),
          !1 !== g.config.allowInput ||
            (void 0 !== e && g.timeContainer.contains(e.relatedTarget)) ||
            setTimeout(function() {
              return g.hourElement.select();
            }, 50));
      }),
      (g.redraw = re),
      (g.set = function(e, n) {
        null !== e && "object" == typeof e
          ? Object.assign(g.config, e)
          : ((g.config[e] = n),
            void 0 !== de[e]
              ? de[e].forEach(function(e) {
                  return e();
                })
              : t.indexOf(e) > -1 && (g.config[e] = l(n)));
        g.redraw(), ve(!1);
      }),
      (g.setDate = function(e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = g.config.dateFormat);
        if ((0 !== e && !e) || (e instanceof Array && 0 === e.length))
          return g.clear(t);
        se(e, n),
          (g.showTimeInput = g.selectedDates.length > 0),
          (g.latestSelectedDateObj = g.selectedDates[0]),
          g.redraw(),
          P(),
          k(),
          ve(t),
          t && fe("onChange");
      }),
      (g.toggle = function(e) {
        if (!0 === g.isOpen) return g.close();
        g.open(e);
      });
    var de = { locale: [ie, q], showMonths: [J, M, U] };
    function se(e, t) {
      var n = [];
      if (e instanceof Array)
        n = e.map(function(e) {
          return g.parseDate(e, t);
        });
      else if (e instanceof Date || "number" == typeof e)
        n = [g.parseDate(e, t)];
      else if ("string" == typeof e)
        switch (g.config.mode) {
          case "single":
          case "time":
            n = [g.parseDate(e, t)];
            break;
          case "multiple":
            n = e.split(g.config.conjunction).map(function(e) {
              return g.parseDate(e, t);
            });
            break;
          case "range":
            n = e.split(g.l10n.rangeSeparator).map(function(e) {
              return g.parseDate(e, t);
            });
        }
      else
        g.config.errorHandler(
          new Error("Invalid date supplied: " + JSON.stringify(e))
        );
      (g.selectedDates = n.filter(function(e) {
        return e instanceof Date && Z(e, !1);
      })),
        "range" === g.config.mode &&
          g.selectedDates.sort(function(e, t) {
            return e.getTime() - t.getTime();
          });
    }
    function ue(e) {
      return e
        .slice()
        .map(function(e) {
          return "string" == typeof e ||
            "number" == typeof e ||
            e instanceof Date
            ? g.parseDate(e, void 0, !0)
            : e && "object" == typeof e && e.from && e.to
            ? {
                from: g.parseDate(e.from, void 0),
                to: g.parseDate(e.to, void 0)
              }
            : e;
        })
        .filter(function(e) {
          return e;
        });
    }
    function fe(e, t) {
      if (void 0 !== g.config) {
        var n = g.config[e];
        if (void 0 !== n && n.length > 0)
          for (var a = 0; n[a] && a < n.length; a++)
            n[a](g.selectedDates, g.input.value, g, t);
        "onChange" === e &&
          (g.input.dispatchEvent(me("change")),
          g.input.dispatchEvent(me("input")));
      }
    }
    function me(e) {
      var t = document.createEvent("Event");
      return t.initEvent(e, !0, !0), t;
    }
    function ge(e) {
      for (var t = 0; t < g.selectedDates.length; t++)
        if (0 === w(g.selectedDates[t], e)) return "" + t;
      return !1;
    }
    function pe() {
      g.config.noCalendar ||
        g.isMobile ||
        !g.monthNav ||
        (g.yearElements.forEach(function(e, t) {
          var n = new Date(g.currentYear, g.currentMonth, 1);
          n.setMonth(g.currentMonth + t),
            (g.monthElements[t].textContent =
              m(n.getMonth(), g.config.shorthandCurrentMonth, g.l10n) + " "),
            (e.value = n.getFullYear().toString());
        }),
        (g._hidePrevMonthArrow =
          void 0 !== g.config.minDate &&
          (g.currentYear === g.config.minDate.getFullYear()
            ? g.currentMonth <= g.config.minDate.getMonth()
            : g.currentYear < g.config.minDate.getFullYear())),
        (g._hideNextMonthArrow =
          void 0 !== g.config.maxDate &&
          (g.currentYear === g.config.maxDate.getFullYear()
            ? g.currentMonth + 1 > g.config.maxDate.getMonth()
            : g.currentYear > g.config.maxDate.getFullYear())));
    }
    function he(e) {
      return g.selectedDates
        .map(function(t) {
          return g.formatDate(t, e);
        })
        .filter(function(e, t, n) {
          return (
            "range" !== g.config.mode ||
            g.config.enableTime ||
            n.indexOf(e) === t
          );
        })
        .join(
          "range" !== g.config.mode
            ? g.config.conjunction
            : g.l10n.rangeSeparator
        );
    }
    function ve(e) {
      if ((void 0 === e && (e = !0), 0 === g.selectedDates.length))
        return g.clear(e);
      void 0 !== g.mobileInput &&
        g.mobileFormatStr &&
        (g.mobileInput.value =
          void 0 !== g.latestSelectedDateObj
            ? g.formatDate(g.latestSelectedDateObj, g.mobileFormatStr)
            : ""),
        (g.input.value = he(g.config.dateFormat)),
        void 0 !== g.altInput && (g.altInput.value = he(g.config.altFormat)),
        !1 !== e && fe("onValueUpdate");
    }
    function De(e) {
      e.preventDefault();
      var t = g.prevMonthNav.contains(e.target),
        n = g.nextMonthNav.contains(e.target);
      t || n
        ? $(t ? -1 : 1)
        : g.yearElements.indexOf(e.target) >= 0
        ? e.target.select()
        : e.target.classList.contains("arrowUp")
        ? g.changeYear(g.currentYear + 1)
        : e.target.classList.contains("arrowDown") &&
          g.changeYear(g.currentYear - 1);
    }
    return (
      (function() {
        (g.element = g.input = n),
          (g.isOpen = !1),
          (function() {
            var a = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile"
              ],
              i = e({}, f, JSON.parse(JSON.stringify(n.dataset || {}))),
              o = {};
            (g.config.parseDate = i.parseDate),
              (g.config.formatDate = i.formatDate),
              Object.defineProperty(g.config, "enable", {
                get: function() {
                  return g.config._enable;
                },
                set: function(e) {
                  g.config._enable = ue(e);
                }
              }),
              Object.defineProperty(g.config, "disable", {
                get: function() {
                  return g.config._disable;
                },
                set: function(e) {
                  g.config._disable = ue(e);
                }
              });
            var r = "time" === i.mode;
            i.dateFormat ||
              (!i.enableTime && !r) ||
              (o.dateFormat =
                i.noCalendar || r
                  ? "H:i" + (i.enableSeconds ? ":S" : "")
                  : E.defaultConfig.dateFormat +
                    " H:i" +
                    (i.enableSeconds ? ":S" : "")),
              i.altInput &&
                (i.enableTime || r) &&
                !i.altFormat &&
                (o.altFormat =
                  i.noCalendar || r
                    ? "h:i" + (i.enableSeconds ? ":S K" : " K")
                    : E.defaultConfig.altFormat +
                      " h:i" +
                      (i.enableSeconds ? ":S" : "") +
                      " K"),
              Object.defineProperty(g.config, "minDate", {
                get: function() {
                  return g.config._minDate;
                },
                set: ae("min")
              }),
              Object.defineProperty(g.config, "maxDate", {
                get: function() {
                  return g.config._maxDate;
                },
                set: ae("max")
              });
            var c = function(e) {
              return function(t) {
                g.config["min" === e ? "_minTime" : "_maxTime"] = g.parseDate(
                  t,
                  "H:i"
                );
              };
            };
            Object.defineProperty(g.config, "minTime", {
              get: function() {
                return g.config._minTime;
              },
              set: c("min")
            }),
              Object.defineProperty(g.config, "maxTime", {
                get: function() {
                  return g.config._maxTime;
                },
                set: c("max")
              }),
              "time" === i.mode &&
                ((g.config.noCalendar = !0), (g.config.enableTime = !0)),
              Object.assign(g.config, o, i);
            for (var d = 0; d < a.length; d++)
              g.config[a[d]] =
                !0 === g.config[a[d]] || "true" === g.config[a[d]];
            t
              .filter(function(e) {
                return void 0 !== g.config[e];
              })
              .forEach(function(e) {
                g.config[e] = l(g.config[e] || []).map(h);
              }),
              (g.isMobile =
                !g.config.disableMobile &&
                !g.config.inline &&
                "single" === g.config.mode &&
                !g.config.disable.length &&
                !g.config.enable.length &&
                !g.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ));
            for (var d = 0; d < g.config.plugins.length; d++) {
              var s = g.config.plugins[d](g) || {};
              for (var u in s)
                t.indexOf(u) > -1
                  ? (g.config[u] = l(s[u])
                      .map(h)
                      .concat(g.config[u]))
                  : void 0 === i[u] && (g.config[u] = s[u]);
            }
            fe("onParseConfig");
          })(),
          ie(),
          (g.input = g.config.wrap ? n.querySelector("[data-input]") : n),
          g.input
            ? ((g.input._type = g.input.type),
              (g.input.type = "text"),
              g.input.classList.add("flatpickr-input"),
              (g._input = g.input),
              g.config.altInput &&
                ((g.altInput = d(
                  g.input.nodeName,
                  g.input.className + " " + g.config.altInputClass
                )),
                (g._input = g.altInput),
                (g.altInput.placeholder = g.input.placeholder),
                (g.altInput.disabled = g.input.disabled),
                (g.altInput.required = g.input.required),
                (g.altInput.tabIndex = g.input.tabIndex),
                (g.altInput.type = "text"),
                g.input.setAttribute("type", "hidden"),
                !g.config.static &&
                  g.input.parentNode &&
                  g.input.parentNode.insertBefore(
                    g.altInput,
                    g.input.nextSibling
                  )),
              g.config.allowInput ||
                g._input.setAttribute("readonly", "readonly"),
              (g._positionElement = g.config.positionElement || g._input))
            : g.config.errorHandler(
                new Error("Invalid input element specified")
              ),
          (function() {
            (g.selectedDates = []),
              (g.now = g.parseDate(g.config.now) || new Date());
            var e =
              g.config.defaultDate ||
              (("INPUT" !== g.input.nodeName &&
                "TEXTAREA" !== g.input.nodeName) ||
              !g.input.placeholder ||
              g.input.value !== g.input.placeholder
                ? g.input.value
                : null);
            e && se(e, g.config.dateFormat),
              (g._initialDate =
                g.selectedDates.length > 0
                  ? g.selectedDates[0]
                  : g.config.minDate &&
                    g.config.minDate.getTime() > g.now.getTime()
                  ? g.config.minDate
                  : g.config.maxDate &&
                    g.config.maxDate.getTime() < g.now.getTime()
                  ? g.config.maxDate
                  : g.now),
              (g.currentYear = g._initialDate.getFullYear()),
              (g.currentMonth = g._initialDate.getMonth()),
              g.selectedDates.length > 0 &&
                (g.latestSelectedDateObj = g.selectedDates[0]),
              void 0 !== g.config.minTime &&
                (g.config.minTime = g.parseDate(g.config.minTime, "H:i")),
              void 0 !== g.config.maxTime &&
                (g.config.maxTime = g.parseDate(g.config.maxTime, "H:i")),
              (g.minDateHasTime =
                !!g.config.minDate &&
                (g.config.minDate.getHours() > 0 ||
                  g.config.minDate.getMinutes() > 0 ||
                  g.config.minDate.getSeconds() > 0)),
              (g.maxDateHasTime =
                !!g.config.maxDate &&
                (g.config.maxDate.getHours() > 0 ||
                  g.config.maxDate.getMinutes() > 0 ||
                  g.config.maxDate.getSeconds() > 0)),
              Object.defineProperty(g, "showTimeInput", {
                get: function() {
                  return g._showTimeInput;
                },
                set: function(e) {
                  (g._showTimeInput = e),
                    g.calendarContainer &&
                      c(g.calendarContainer, "showTimeInput", e),
                    g.isOpen && oe();
                }
              });
          })(),
          (g.utils = {
            getDaysInMonth: function(e, t) {
              return (
                void 0 === e && (e = g.currentMonth),
                void 0 === t && (t = g.currentYear),
                1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0)
                  ? 29
                  : g.l10n.daysInMonth[e]
              );
            }
          }),
          g.isMobile ||
            (function() {
              var e = window.document.createDocumentFragment();
              if (
                ((g.calendarContainer = d("div", "flatpickr-calendar")),
                (g.calendarContainer.tabIndex = -1),
                !g.config.noCalendar)
              ) {
                if (
                  (e.appendChild(
                    ((g.monthNav = d("div", "flatpickr-months")),
                    (g.yearElements = []),
                    (g.monthElements = []),
                    (g.prevMonthNav = d("span", "flatpickr-prev-month")),
                    (g.prevMonthNav.innerHTML = g.config.prevArrow),
                    (g.nextMonthNav = d("span", "flatpickr-next-month")),
                    (g.nextMonthNav.innerHTML = g.config.nextArrow),
                    J(),
                    Object.defineProperty(g, "_hidePrevMonthArrow", {
                      get: function() {
                        return g.__hidePrevMonthArrow;
                      },
                      set: function(e) {
                        g.__hidePrevMonthArrow !== e &&
                          (c(g.prevMonthNav, "disabled", e),
                          (g.__hidePrevMonthArrow = e));
                      }
                    }),
                    Object.defineProperty(g, "_hideNextMonthArrow", {
                      get: function() {
                        return g.__hideNextMonthArrow;
                      },
                      set: function(e) {
                        g.__hideNextMonthArrow !== e &&
                          (c(g.nextMonthNav, "disabled", e),
                          (g.__hideNextMonthArrow = e));
                      }
                    }),
                    (g.currentYearElement = g.yearElements[0]),
                    pe(),
                    g.monthNav)
                  ),
                  (g.innerContainer = d("div", "flatpickr-innerContainer")),
                  g.config.weekNumbers)
                ) {
                  var t = (function() {
                      g.calendarContainer.classList.add("hasWeeks");
                      var e = d("div", "flatpickr-weekwrapper");
                      e.appendChild(
                        d("span", "flatpickr-weekday", g.l10n.weekAbbreviation)
                      );
                      var t = d("div", "flatpickr-weeks");
                      return (
                        e.appendChild(t), { weekWrapper: e, weekNumbers: t }
                      );
                    })(),
                    n = t.weekWrapper,
                    a = t.weekNumbers;
                  g.innerContainer.appendChild(n),
                    (g.weekNumbers = a),
                    (g.weekWrapper = n);
                }
                (g.rContainer = d("div", "flatpickr-rContainer")),
                  g.rContainer.appendChild(U()),
                  g.daysContainer ||
                    ((g.daysContainer = d("div", "flatpickr-days")),
                    (g.daysContainer.tabIndex = -1)),
                  B(),
                  g.rContainer.appendChild(g.daysContainer),
                  g.innerContainer.appendChild(g.rContainer),
                  e.appendChild(g.innerContainer);
              }
              g.config.enableTime &&
                e.appendChild(
                  (function() {
                    g.calendarContainer.classList.add("hasTime"),
                      g.config.noCalendar &&
                        g.calendarContainer.classList.add("noCalendar"),
                      (g.timeContainer = d("div", "flatpickr-time")),
                      (g.timeContainer.tabIndex = -1);
                    var e = d("span", "flatpickr-time-separator", ":"),
                      t = u("flatpickr-hour");
                    g.hourElement = t.getElementsByTagName("input")[0];
                    var n = u("flatpickr-minute");
                    if (
                      ((g.minuteElement = n.getElementsByTagName("input")[0]),
                      (g.hourElement.tabIndex = g.minuteElement.tabIndex = -1),
                      (g.hourElement.value = i(
                        g.latestSelectedDateObj
                          ? g.latestSelectedDateObj.getHours()
                          : g.config.time_24hr
                          ? g.config.defaultHour
                          : (function(e) {
                              switch (e % 24) {
                                case 0:
                                case 12:
                                  return 12;
                                default:
                                  return e % 12;
                              }
                            })(g.config.defaultHour)
                      )),
                      (g.minuteElement.value = i(
                        g.latestSelectedDateObj
                          ? g.latestSelectedDateObj.getMinutes()
                          : g.config.defaultMinute
                      )),
                      g.hourElement.setAttribute(
                        "step",
                        g.config.hourIncrement.toString()
                      ),
                      g.minuteElement.setAttribute(
                        "step",
                        g.config.minuteIncrement.toString()
                      ),
                      g.hourElement.setAttribute(
                        "min",
                        g.config.time_24hr ? "0" : "1"
                      ),
                      g.hourElement.setAttribute(
                        "max",
                        g.config.time_24hr ? "23" : "12"
                      ),
                      g.minuteElement.setAttribute("min", "0"),
                      g.minuteElement.setAttribute("max", "59"),
                      g.timeContainer.appendChild(t),
                      g.timeContainer.appendChild(e),
                      g.timeContainer.appendChild(n),
                      g.config.time_24hr &&
                        g.timeContainer.classList.add("time24hr"),
                      g.config.enableSeconds)
                    ) {
                      g.timeContainer.classList.add("hasSeconds");
                      var a = u("flatpickr-second");
                      (g.secondElement = a.getElementsByTagName("input")[0]),
                        (g.secondElement.value = i(
                          g.latestSelectedDateObj
                            ? g.latestSelectedDateObj.getSeconds()
                            : g.config.defaultSeconds
                        )),
                        g.secondElement.setAttribute(
                          "step",
                          g.minuteElement.getAttribute("step")
                        ),
                        g.secondElement.setAttribute("min", "0"),
                        g.secondElement.setAttribute("max", "59"),
                        g.timeContainer.appendChild(
                          d("span", "flatpickr-time-separator", ":")
                        ),
                        g.timeContainer.appendChild(a);
                    }
                    return (
                      g.config.time_24hr ||
                        ((g.amPM = d(
                          "span",
                          "flatpickr-am-pm",
                          g.l10n.amPM[
                            o(
                              (g.latestSelectedDateObj
                                ? g.hourElement.value
                                : g.config.defaultHour) > 11
                            )
                          ]
                        )),
                        (g.amPM.title = g.l10n.toggleTitle),
                        (g.amPM.tabIndex = -1),
                        g.timeContainer.appendChild(g.amPM)),
                      g.timeContainer
                    );
                  })()
                ),
                c(g.calendarContainer, "rangeMode", "range" === g.config.mode),
                c(g.calendarContainer, "animate", !0 === g.config.animate),
                c(g.calendarContainer, "multiMonth", g.config.showMonths > 1),
                g.calendarContainer.appendChild(e);
              var r =
                void 0 !== g.config.appendTo &&
                void 0 !== g.config.appendTo.nodeType;
              if (
                (g.config.inline || g.config.static) &&
                (g.calendarContainer.classList.add(
                  g.config.inline ? "inline" : "static"
                ),
                g.config.inline &&
                  (!r && g.element.parentNode
                    ? g.element.parentNode.insertBefore(
                        g.calendarContainer,
                        g._input.nextSibling
                      )
                    : void 0 !== g.config.appendTo &&
                      g.config.appendTo.appendChild(g.calendarContainer)),
                g.config.static)
              ) {
                var l = d("div", "flatpickr-wrapper");
                g.element.parentNode &&
                  g.element.parentNode.insertBefore(l, g.element),
                  l.appendChild(g.element),
                  g.altInput && l.appendChild(g.altInput),
                  l.appendChild(g.calendarContainer);
              }
              g.config.static ||
                g.config.inline ||
                (void 0 !== g.config.appendTo
                  ? g.config.appendTo
                  : window.document.body
                ).appendChild(g.calendarContainer);
            })(),
          (function() {
            if (
              (g.config.wrap &&
                ["open", "close", "toggle", "clear"].forEach(function(e) {
                  Array.prototype.forEach.call(
                    g.element.querySelectorAll("[data-" + e + "]"),
                    function(t) {
                      return _(t, "click", g[e]);
                    }
                  );
                }),
              g.isMobile)
            )
              !(function() {
                var e = g.config.enableTime
                  ? g.config.noCalendar
                    ? "time"
                    : "datetime-local"
                  : "date";
                (g.mobileInput = d(
                  "input",
                  g.input.className + " flatpickr-mobile"
                )),
                  (g.mobileInput.step = g.input.getAttribute("step") || "any"),
                  (g.mobileInput.tabIndex = 1),
                  (g.mobileInput.type = e),
                  (g.mobileInput.disabled = g.input.disabled),
                  (g.mobileInput.required = g.input.required),
                  (g.mobileInput.placeholder = g.input.placeholder),
                  (g.mobileFormatStr =
                    "datetime-local" === e
                      ? "Y-m-d\\TH:i:S"
                      : "date" === e
                      ? "Y-m-d"
                      : "H:i:S"),
                  g.selectedDates.length > 0 &&
                    (g.mobileInput.defaultValue = g.mobileInput.value = g.formatDate(
                      g.selectedDates[0],
                      g.mobileFormatStr
                    )),
                  g.config.minDate &&
                    (g.mobileInput.min = g.formatDate(
                      g.config.minDate,
                      "Y-m-d"
                    )),
                  g.config.maxDate &&
                    (g.mobileInput.max = g.formatDate(
                      g.config.maxDate,
                      "Y-m-d"
                    )),
                  (g.input.type = "hidden"),
                  void 0 !== g.altInput && (g.altInput.type = "hidden");
                try {
                  g.input.parentNode &&
                    g.input.parentNode.insertBefore(
                      g.mobileInput,
                      g.input.nextSibling
                    );
                } catch (e) {}
                _(g.mobileInput, "change", function(e) {
                  g.setDate(e.target.value, !1, g.mobileFormatStr),
                    fe("onChange"),
                    fe("onClose");
                });
              })();
            else {
              var e = r(te, 50);
              (g._debouncedChange = r(F, C)),
                g.daysContainer &&
                  !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                  _(g.daysContainer, "mouseover", function(e) {
                    "range" === g.config.mode && ee(e.target);
                  }),
                _(window.document.body, "keydown", X),
                g.config.static || _(g._input, "keydown", X),
                g.config.inline || g.config.static || _(window, "resize", e),
                void 0 !== window.ontouchstart
                  ? _(window.document, "click", G)
                  : _(window.document, "mousedown", N(G)),
                _(window.document, "focus", G, { capture: !0 }),
                !0 === g.config.clickOpens &&
                  (_(g._input, "focus", g.open),
                  _(g._input, "mousedown", N(g.open))),
                void 0 !== g.daysContainer &&
                  (_(g.monthNav, "mousedown", N(De)),
                  _(g.monthNav, ["keyup", "increment"], S),
                  _(g.daysContainer, "mousedown", N(ce))),
                void 0 !== g.timeContainer &&
                  void 0 !== g.minuteElement &&
                  void 0 !== g.hourElement &&
                  (_(g.timeContainer, ["increment"], x),
                  _(g.timeContainer, "blur", x, { capture: !0 }),
                  _(g.timeContainer, "mousedown", N(A)),
                  _(
                    [g.hourElement, g.minuteElement],
                    ["focus", "click"],
                    function(e) {
                      return e.target.select();
                    }
                  ),
                  void 0 !== g.secondElement &&
                    _(g.secondElement, "focus", function() {
                      return g.secondElement && g.secondElement.select();
                    }),
                  void 0 !== g.amPM &&
                    _(
                      g.amPM,
                      "mousedown",
                      N(function(e) {
                        x(e), F();
                      })
                    ));
            }
          })(),
          (g.selectedDates.length || g.config.noCalendar) &&
            (g.config.enableTime &&
              k(
                g.config.noCalendar
                  ? g.latestSelectedDateObj || g.config.minDate
                  : void 0
              ),
            ve(!1)),
          M(),
          (g.showTimeInput = g.selectedDates.length > 0 || g.config.noCalendar);
        var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !g.isMobile && a && oe(), fe("onReady");
      })(),
      g
    );
  }
  function x(e, t) {
    for (
      var n = Array.prototype.slice.call(e).filter(function(e) {
          return e instanceof HTMLElement;
        }),
        a = [],
        i = 0;
      i < n.length;
      i++
    ) {
      var o = n[i];
      try {
        if (null !== o.getAttribute("data-fp-omit")) continue;
        void 0 !== o._flatpickr &&
          (o._flatpickr.destroy(), (o._flatpickr = void 0)),
          (o._flatpickr = M(o, t || {})),
          a.push(o._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }
    return 1 === a.length ? a[0] : a;
  }
  "undefined" != typeof HTMLElement &&
    ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(
      e
    ) {
      return x(this, e);
    }),
    (HTMLElement.prototype.flatpickr = function(e) {
      return x([this], e);
    }));
  var E = function(e, t) {
    return "string" == typeof e
      ? x(window.document.querySelectorAll(e), t)
      : e instanceof Node
      ? x([e], t)
      : x(e, t);
  };
  return (
    (E.defaultConfig = n),
    (E.l10ns = { en: e({}, a), default: e({}, a) }),
    (E.localize = function(t) {
      E.l10ns.default = e({}, E.l10ns.default, t);
    }),
    (E.setDefaults = function(t) {
      E.defaultConfig = e({}, E.defaultConfig, t);
    }),
    (E.parseDate = D({})),
    (E.formatDate = v({})),
    (E.compareDates = w),
    "undefined" != typeof jQuery &&
      (jQuery.fn.flatpickr = function(e) {
        return x(this, e);
      }),
    (Date.prototype.fp_incr = function(e) {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
      );
    }),
    "undefined" != typeof window && (window.flatpickr = E),
    E
  );
});
