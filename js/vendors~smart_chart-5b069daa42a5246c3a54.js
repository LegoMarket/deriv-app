(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~smart_chart"],{

/***/ "./node_modules/smartcharts-beta/dist/smartcharts.js":
/*!***********************************************************!*\
  !*** ./node_modules/smartcharts-beta/dist/smartcharts.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

! function(e, t) {
     true ? module.exports = t(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js"), __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js"), __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")) : undefined
}(window, function(e, t, r, n, i) {
    return function(e) {
        function t(t) {
            for (var r, i, a = t[0], o = t[1], s = 0, l = []; s < a.length; s++) i = a[s], n[i] && l.push(n[i][0]), n[i] = 0;
            for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            for (c && c(t); l.length;) l.shift()()
        }
        var r = {},
            n = {
                0: 0
            };

        function i(t) {
            if (r[t]) return r[t].exports;
            var n = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        i.e = function(e) {
            var t = [],
                r = n[e];
            if (0 !== r)
                if (r) t.push(r[2]);
                else {
                    var a = new Promise(function(t, i) {
                        r = n[e] = [t, i]
                    });
                    t.push(r[2] = a);
                    var o, s = document.getElementsByTagName("head")[0],
                        c = document.createElement("script");
                    c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = function(e) {
                        return i.p + "" + ({
                            1: "de-po",
                            2: "es-po",
                            3: "fr-po",
                            4: "id-po",
                            5: "it-po",
                            6: "nl-po",
                            7: "pl-po",
                            8: "pt-po",
                            9: "ru-po",
                            10: "th-po",
                            11: "vi-po",
                            12: "zh_cn-po",
                            13: "zh_tw-po",
                            14: "chartiq",
                            15: "html2canvas",
                            16: "vendors~resize-observer-polyfill"
                        } [e] || e) + "-" + {
                            1: "b5298e",
                            2: "501a93",
                            3: "b22a23",
                            4: "84a55e",
                            5: "c5f18d",
                            6: "87665a",
                            7: "71cdc6",
                            8: "230860",
                            9: "398092",
                            10: "f09e47",
                            11: "0526d0",
                            12: "7904a7",
                            13: "b0653c",
                            14: "7f9d83",
                            15: "a582dc",
                            16: "5a8bd4"
                        } [e] + ".smartcharts.js"
                    }(e), o = function(t) {
                        c.onerror = c.onload = null, clearTimeout(l);
                        var r = n[e];
                        if (0 !== r) {
                            if (r) {
                                var i = t && ("load" === t.type ? "missing" : t.type),
                                    a = t && t.target && t.target.src,
                                    o = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + a + ")");
                                o.type = i, o.request = a, r[1](o)
                            }
                            n[e] = void 0
                        }
                    };
                    var l = setTimeout(function() {
                        o({
                            type: "timeout",
                            target: c
                        })
                    }, 12e4);
                    c.onerror = c.onload = o, s.appendChild(c)
                } return Promise.all(t)
        }, i.m = e, i.c = r, i.d = function(e, t, r) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) i.d(r, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return r
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i.oe = function(e) {
            throw console.error(e), e
        };
        var a = window.webpackJsonpsmartcharts = window.webpackJsonpsmartcharts || [],
            o = a.push.bind(a);
        a.push = t, a = a.slice();
        for (var s = 0; s < a.length; s++) t(a[s]);
        var c = o;
        return i(i.s = 167)
    }([function(t, r) {
        t.exports = e
    }, function(e, r) {
        e.exports = t
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return n
        }), r.d(t, "a", function() {
            return i
        }), r.d(t, "c", function() {
            return a
        }), r.d(t, "e", function() {
            return o
        }), r.d(t, "d", function() {
            return s
        });
        var n = Object.freeze({
                ChartTitle: "Chart Title",
                CategoricalDisplay: "Categorical Display",
                ChartControl: "Chart Control"
            }),
            i = Object.freeze({
                MarketSelector: "Market Selector",
                Favorite: "Favorite",
                ChartSetting: "Chart Setting",
                ChartSize: "Chart Size",
                ChartType: "Chart Type",
                Comparison: "Comparison",
                DrawTools: "Draw Tools",
                Download: "Download",
                Indicator: "Indicator",
                Interval: "Interval",
                Template: "Template"
            });

        function a() {}

        function o() {}

        function s(e, t, r) {}
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = (r(93), {
                id: "ic-baseline-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-baseline-normal-usage",
                toString: function() {
                    return this.url
                }
            }),
            o = {
                id: "ic-candle-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-candle-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            s = {
                id: "ic-dot-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-dot-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            c = {
                id: "ic-linedot-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-linedot-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            l = {
                id: "ic-heikin-ashi-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-heikin-ashi-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            u = {
                id: "ic-hollowcandle-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-hollowcandle-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            h = {
                id: "ic-kagi-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-kagi-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            d = {
                id: "ic-line-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-line-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            p = {
                id: "ic-linebreak-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-linebreak-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            f = {
                id: "ic-ohlc-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-ohlc-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            m = {
                id: "ic-pointfigure-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-pointfigure-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            y = {
                id: "ic-rangebars-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-rangebars-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            b = {
                id: "ic-renko-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-renko-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            g = {
                id: "ic-spline-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-spline-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            v = {
                id: "table-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#table-usage",
                toString: function() {
                    return this.url
                }
            },
            w = {
                id: "ic-png-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-png-usage",
                toString: function() {
                    return this.url
                }
            },
            S = {
                id: "ic-csv-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-csv-usage",
                toString: function() {
                    return this.url
                }
            },
            k = {
                id: "ic-zoomin-light-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-zoomin-light-usage",
                toString: function() {
                    return this.url
                }
            },
            x = {
                id: "ic-close-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-close-usage",
                toString: function() {
                    return this.url
                }
            },
            C = {
                id: "ic-close-circle-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-close-circle-usage",
                toString: function() {
                    return this.url
                }
            },
            O = {
                id: "ic-comparison-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-comparison-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            E = {
                id: "ic-crosshair-off-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-crosshair-off-usage",
                toString: function() {
                    return this.url
                }
            },
            T = {
                id: "ic-crosshair-on-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-crosshair-on-usage",
                toString: function() {
                    return this.url
                }
            },
            P = {
                id: "ic-crosshair-tooltip-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-crosshair-tooltip-usage",
                toString: function() {
                    return this.url
                }
            },
            _ = r(23),
            D = {
                id: "ic-clear-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-clear-usage",
                toString: function() {
                    return this.url
                }
            },
            j = {
                id: "ic-drawingtools-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-drawingtools-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            A = {
                id: "ic-indicator-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-indicator-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            N = {
                id: "ic-measure-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-measure-usage",
                toString: function() {
                    return this.url
                }
            },
            I = {
                id: "ic-zoomout-light-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-zoomout-light-usage",
                toString: function() {
                    return this.url
                }
            },
            z = {
                id: "ic-favorite-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-favorite-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            L = {
                id: "ic-charttemplate-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-charttemplate-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            M = {
                id: "ic-tick-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-tick-usage",
                toString: function() {
                    return this.url
                }
            },
            R = {
                id: "ic-time-usage",
                viewBox: "0 0 12 12",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-time-usage",
                toString: function() {
                    return this.url
                }
            },
            H = {
                id: "ic-active-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-active-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            B = {
                id: "ic-commodities-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-commodities-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            F = {
                id: "ic-forex-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-forex-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            q = {
                id: "ic-indices-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-indices-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            U = {
                id: "ic-otc-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-otc-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            V = {
                id: "ic-volatility-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-volatility-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            W = {
                id: "ic-search-normal-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-search-normal-usage",
                toString: function() {
                    return this.url
                }
            },
            Q = r(17),
            G = {
                id: "ic-dropdown-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-dropdown-usage",
                toString: function() {
                    return this.url
                }
            },
            K = {
                id: "ic-download-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-download-usage",
                toString: function() {
                    return this.url
                }
            },
            Y = {
                id: "ic-position-left-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-position-left-usage",
                toString: function() {
                    return this.url
                }
            },
            X = {
                id: "ic-position-bottom-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-position-bottom-usage",
                toString: function() {
                    return this.url
                }
            },
            J = {
                id: "ic-back-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-back-usage",
                toString: function() {
                    return this.url
                }
            },
            Z = {
                id: "ic-pencil-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-pencil-usage",
                toString: function() {
                    return this.url
                }
            },
            $ = {
                id: "warning-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#warning-usage",
                toString: function() {
                    return this.url
                }
            },
            ee = {
                id: "error-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#error-usage",
                toString: function() {
                    return this.url
                }
            },
            te = {
                id: "success-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#success-usage",
                toString: function() {
                    return this.url
                }
            },
            re = {
                id: "info-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#info-usage",
                toString: function() {
                    return this.url
                }
            },
            ne = {
                id: "ic-placeholder-usage",
                viewBox: "0 0 16 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-placeholder-usage",
                toString: function() {
                    return this.url
                }
            },
            ie = {
                id: "aud-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#aud-usage",
                toString: function() {
                    return this.url
                }
            },
            ae = {
                id: "cad-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#cad-usage",
                toString: function() {
                    return this.url
                }
            },
            oe = {
                id: "chf-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#chf-usage",
                toString: function() {
                    return this.url
                }
            },
            se = {
                id: "eur-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#eur-usage",
                toString: function() {
                    return this.url
                }
            },
            ce = {
                id: "gbp-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#gbp-usage",
                toString: function() {
                    return this.url
                }
            },
            le = {
                id: "jpy-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#jpy-usage",
                toString: function() {
                    return this.url
                }
            },
            ue = {
                id: "mxn-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#mxn-usage",
                toString: function() {
                    return this.url
                }
            },
            he = {
                id: "nok-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#nok-usage",
                toString: function() {
                    return this.url
                }
            },
            de = {
                id: "nzd-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#nzd-usage",
                toString: function() {
                    return this.url
                }
            },
            pe = {
                id: "pln-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#pln-usage",
                toString: function() {
                    return this.url
                }
            },
            fe = {
                id: "sek-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#sek-usage",
                toString: function() {
                    return this.url
                }
            },
            me = {
                id: "usd-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#usd-usage",
                toString: function() {
                    return this.url
                }
            },
            ye = {
                id: "portugal-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#portugal-usage",
                toString: function() {
                    return this.url
                }
            },
            be = {
                id: "russia-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#russia-usage",
                toString: function() {
                    return this.url
                }
            },
            ge = {
                id: "thailand-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#thailand-usage",
                toString: function() {
                    return this.url
                }
            },
            ve = {
                id: "indonesia-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#indonesia-usage",
                toString: function() {
                    return this.url
                }
            },
            we = {
                id: "vietnam-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#vietnam-usage",
                toString: function() {
                    return this.url
                }
            },
            Se = {
                id: "italy-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#italy-usage",
                toString: function() {
                    return this.url
                }
            },
            ke = {
                id: "chinese-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#chinese-usage",
                toString: function() {
                    return this.url
                }
            },
            xe = {
                id: "chinese-traditional-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#chinese-traditional-usage",
                toString: function() {
                    return this.url
                }
            },
            Ce = {
                id: "german-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#german-usage",
                toString: function() {
                    return this.url
                }
            },
            Oe = {
                id: "hong kong-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#hong kong-usage",
                toString: function() {
                    return this.url
                }
            },
            Ee = {
                id: "french-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#french-usage",
                toString: function() {
                    return this.url
                }
            },
            Te = {
                id: "dutch-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#dutch-usage",
                toString: function() {
                    return this.url
                }
            },
            Pe = {
                id: "spanish-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#spanish-usage",
                toString: function() {
                    return this.url
                }
            },
            _e = {
                id: "wallstreet-usage",
                viewBox: "0 0 24 16",
                url: r.p + "sprite-606f3c.smartcharts.svg#wallstreet-usage",
                toString: function() {
                    return this.url
                }
            },
            De = {
                id: "ic-oilusd-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-oilusd-usage",
                toString: function() {
                    return this.url
                }
            },
            je = {
                id: "ic-metal-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-metal-usage",
                toString: function() {
                    return this.url
                }
            },
            Ae = {
                id: "ic-10-index-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-10-index-usage",
                toString: function() {
                    return this.url
                }
            },
            Ne = {
                id: "ic-25-index-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-25-index-usage",
                toString: function() {
                    return this.url
                }
            },
            Ie = {
                id: "ic-50-index-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-50-index-usage",
                toString: function() {
                    return this.url
                }
            },
            ze = {
                id: "ic-75-index-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-75-index-usage",
                toString: function() {
                    return this.url
                }
            },
            Le = {
                id: "ic-100-index-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-100-index-usage",
                toString: function() {
                    return this.url
                }
            },
            Me = {
                id: "ic-marketbear-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-marketbear-usage",
                toString: function() {
                    return this.url
                }
            },
            Re = {
                id: "ic-marketbull-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-marketbull-usage",
                toString: function() {
                    return this.url
                }
            },
            He = {
                id: "ic-otcbadge-usage",
                viewBox: "0 0 13 9",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-otcbadge-usage",
                toString: function() {
                    return this.url
                }
            },
            Be = {
                id: "ic-smartfx-placeholder-usage",
                viewBox: "0 0 32 32",
                url: r.p + "sprite-606f3c.smartcharts.svg#ic-smartfx-placeholder-usage",
                toString: function() {
                    return this.url
                }
            };

        function Fe() {
            return (Fe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function qe(e, t) {
            if (null == e) return {};
            var r, n, i = function(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
            return i
        }
        r.d(t, "t", function() {
            return Ve
        }), r.d(t, "e", function() {
            return We
        }), r.d(t, "f", function() {
            return Qe
        }), r.d(t, "q", function() {
            return Ge
        }), r.d(t, "C", function() {
            return Ke
        }), r.d(t, "w", function() {
            return Ye
        }), r.d(t, "x", function() {
            return Xe
        }), r.d(t, "A", function() {
            return Je
        }), r.d(t, "B", function() {
            return Ze
        }), r.d(t, "D", function() {
            return $e
        }), r.d(t, "F", function() {
            return et
        }), r.d(t, "H", function() {
            return tt
        }), r.d(t, "K", function() {
            return rt
        }), r.d(t, "L", function() {
            return nt
        }), r.d(t, "Q", function() {
            return it
        }), r.d(t, "b", function() {
            return at
        }), r.d(t, "U", function() {
            return ot
        }), r.d(t, "j", function() {
            return st
        }), r.d(t, "i", function() {
            return ct
        }), r.d(t, "k", function() {
            return lt
        }), r.d(t, "l", function() {
            return ut
        }), r.d(t, "m", function() {
            return ht
        }), r.d(t, "n", function() {
            return dt
        }), r.d(t, "p", function() {
            return pt
        }), r.d(t, "h", function() {
            return ft
        }), r.d(t, "s", function() {
            return mt
        }), r.d(t, "y", function() {
            return yt
        }), r.d(t, "E", function() {
            return bt
        }), r.d(t, "V", function() {
            return gt
        }), r.d(t, "O", function() {
            return vt
        }), r.d(t, "G", function() {
            return wt
        }), r.d(t, "o", function() {
            return St
        }), r.d(t, "R", function() {
            return kt
        }), r.d(t, "S", function() {
            return xt
        }), r.d(t, "T", function() {
            return Ct
        }), r.d(t, "M", function() {
            return Ot
        }), r.d(t, "N", function() {
            return Tt
        }), r.d(t, "c", function() {
            return Pt
        }), r.d(t, "u", function() {
            return _t
        }), r.d(t, "r", function() {
            return Dt
        }), r.d(t, "J", function() {
            return jt
        }), r.d(t, "I", function() {
            return At
        }), r.d(t, "d", function() {
            return Nt
        }), r.d(t, "W", function() {
            return zt
        }), r.d(t, "P", function() {
            return Lt
        }), r.d(t, "g", function() {
            return Mt
        }), r.d(t, "v", function() {
            return Ht
        }), r.d(t, "z", function() {
            return Bt
        }), r.d(t, "a", function() {
            return Gt
        });
        var Ue = function(e) {
                return function(t) {
                    var n = t.className,
                        a = t["tooltip-title"],
                        o = qe(t, ["className", "tooltip-title"]);
                    n = "ic-icon ".concat(n || "");
                    var s = e.viewBox.split(" ").slice(2);
                    return i.a.createElement("span", Fe({
                        className: n,
                        "tooltip-title": a
                    }, o), i.a.createElement("svg", {
                        width: s[0],
                        height: s[1]
                    }, i.a.createElement("use", {
                        xlinkHref: r.p + e.url
                    })), a && i.a.createElement(i.a.Fragment, null, i.a.createElement("br", null), i.a.createElement("span", {
                        className: "ic-subtitle"
                    }, a)))
                }
            },
            Ve = Ue(Z),
            We = Ue(a),
            Qe = Ue(o),
            Ge = Ue(s),
            Ke = Ue(c),
            Ye = Ue(l),
            Xe = Ue(u),
            Je = Ue(h),
            Ze = Ue(p),
            $e = Ue(d),
            et = Ue(f),
            tt = Ue(m),
            rt = Ue(y),
            nt = Ue(b),
            it = Ue(v),
            at = Ue(k),
            ot = Ue(k),
            st = Ue(x),
            ct = Ue(C),
            lt = Ue(O),
            ut = Ue(E),
            ht = Ue(T),
            dt = Ue(P),
            pt = Ue(_.a),
            ft = Ue(D),
            mt = Ue(j),
            yt = Ue(A),
            bt = Ue(N),
            gt = Ue(I),
            vt = Ue(g),
            wt = Ue(w),
            St = Ue(S),
            kt = (Ue(z), Ue(L)),
            xt = Ue(M),
            Ct = Ue(R),
            Ot = Ue(W),
            Et = Ue(Q.a),
            Tt = Ue(Q.a),
            Pt = Ue(G),
            _t = Ue(z),
            Dt = Ue(K),
            jt = Ue(Y),
            At = Ue(X),
            Nt = Ue(J),
            It = Ue(je),
            zt = {
                info: Ue(re),
                success: Ue(te),
                warning: Ue($),
                error: Ue(ee)
            },
            Lt = Ue(ne),
            Mt = {
                active: Ue(H),
                commodities: Ue(B),
                favorite: Ue(z),
                forex: Ue(F),
                indices: Ue(q),
                stocks: Ue(U),
                volidx: Ue(V),
                indicators: Ue(A)
            },
            Rt = {
                AUD: Ue(ie),
                CAD: Ue(ae),
                CHF: Ue(oe),
                EUR: Ue(se),
                GBP: Ue(ce),
                JPY: Ue(le),
                MXN: Ue(ue),
                NOK: Ue(he),
                NZD: Ue(de),
                PLN: Ue(pe),
                SEK: Ue(fe),
                USD: Ue(me),
                HongKong: Ue(Oe),
                Dutch: Ue(Te),
                German: Ue(Ce),
                French: Ue(Ee),
                Spanish: Ue(Pe),
                WallStreet: Ue(_e)
            },
            Ht = {
                USD: Ue(me),
                German: Ue(Ce),
                French: Ue(Ee),
                Portugal: Ue(ye),
                Russia: Ue(be),
                Thailand: Ue(ge),
                Indonesia: Ue(ve),
                Vietnam: Ue(we),
                Italy: Ue(Se),
                Chinese: Ue(ke),
                ChineseTraditional: Ue(xe),
                Poland: Ue(pe)
            },
            Bt = {
                SPC: Rt.USD,
                AS51: Rt.AUD,
                HSI: Rt.HongKong,
                N225: Rt.JPY,
                AEX: Rt.Dutch,
                FCHI: Rt.French,
                SSMI: Rt.CHF,
                GDAXI: Rt.German,
                frxBROUSD: Ue(De),
                frxXAUUSD: It,
                frxXPDUSD: It,
                frxXPTUSD: It,
                frxXAGUSD: It,
                R_10: Ue(Ae),
                R_25: Ue(Ne),
                R_50: Ue(Ie),
                R_75: Ue(ze),
                R_100: Ue(Le),
                RDBEAR: Ue(Me),
                RDBULL: Ue(Re)
            };

        function Ft(e, t, r) {
            return function(n) {
                var a = n.className,
                    o = qe(n, ["className"]);
                return i.a.createElement("span", Fe({
                    className: "".concat(r, " ").concat(a)
                }, o), i.a.createElement(e, null), i.a.createElement(t, null))
            }
        }

        function qt(e, t) {
            var r = Rt[e],
                n = Rt[t];
            Bt["frx".concat(e).concat(t)] = Ft(r, n, "ic-frx")
        }
        var Ut = Ue(He),
            Vt = Ue(Be);

        function Wt(e, t) {
            var r = Rt[e];
            Bt[t] = Ft(r, Ut, "ic-otc")
        }

        function Qt(e) {
            var t = Rt[e];
            Bt["WLD".concat(e)] = Ft(Vt, t, "ic-wld")
        }
        qt("AUD", "JPY"), qt("AUD", "USD"), qt("EUR", "AUD"), qt("EUR", "CHF"), qt("EUR", "JPY"), qt("EUR", "CAD"), qt("EUR", "GBP"), qt("EUR", "USD"), qt("GBP", "AUD"), qt("GBP", "JPY"), qt("GBP", "USD"), qt("USD", "CAD"), qt("USD", "CHF"), qt("USD", "JPY"), qt("AUD", "CAD"), qt("AUD", "CHF"), qt("AUD", "NZD"), qt("AUD", "PLN"), qt("EUR", "NZD"), qt("GBP", "CAD"), qt("GBP", "CHF"), qt("GBP", "NOK"), qt("GBP", "NZD"), qt("GBP", "PLN"), qt("NZD", "JPY"), qt("NZD", "USD"), qt("USD", "MXN"), qt("USD", "NOK"), qt("USD", "PLN"), qt("USD", "SEK"), Qt("AUD"), Qt("EUR"), Qt("GBP"), Qt("USD"), Wt("Dutch", "OTC_AEX"), Wt("GBP", "OTC_FTSE"), Wt("EUR", "OTC_SX5E"), Wt("French", "OTC_FCHI"), Wt("German", "OTC_GDAXI"), Wt("JPY", "OTC_N225"), Wt("Spanish", "OTC_IBEX35"), Wt("USD", "OTC_SPC"), Wt("WallStreet", "OTC_DJI"), Wt("USD", "OTC_NDX"), Wt("CHF", "OTC_SSMI"), Wt("HongKong", "OTC_HSI"), Wt("AUD", "OTC_AS51");
        var Gt = {
            delete: pt,
            edit: Et
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return f
        });
        var n = r(0),
            i = r.n(n),
            a = r(22);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    d(e, t, r[t])
                })
            }
            return e
        }

        function d(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function p(e, t) {
            return function(r) {
                var o = function(o) {
                        function d(n) {
                            var i;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, d);
                            var o = (i = c(this, l(d).call(this, n))).props.mainStore;
                            i.store = new t(o);
                            return i.store.updateProps && i.store.updateProps(n), i.injectedComponent = Object(a.inject)(function(t, r) {
                                return h({}, e(i.store), r)
                            })(r), i
                        }
                        return function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && u(e, t)
                            }(d, n["Component"]),
                            function(e, t, r) {
                                t && s(e.prototype, t), r && s(e, r)
                            }(d, [{
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    this.store.updateProps && this.store.updateProps(e)
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this.store.destructor && this.store.destructor()
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    return i.a.createElement(this.injectedComponent)
                                }
                            }]), d
                    }(),
                    d = r.displayName || r.name || r.constructor && r.constructor.name || "Unknown";
                return o.displayName = "unbox-".concat(d), Object(a.inject)(function(e) {
                    return {
                        mainStore: e
                    }
                })(o)
            }
        }

        function f(e, t) {
            return void 0 === t ? function(e) {
                var t = function(t, r) {
                    return h({}, e(t), r)
                };
                return function(e) {
                    return Object(a.inject)(t)(e)
                }
            }(e) : p(e, t)
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    i(e, t, r[t])
                })
            }
            return e
        }

        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function a(e) {
            var t = localStorage.getItem(e);
            if (null !== t) try {
                return JSON.parse(t)
            } catch (e) {
                return
            }
        }

        function o(e) {
            return void 0 !== e && !isNaN(e)
        }
        r.d(t, "e", function() {
            return a
        }), r.d(t, "m", function() {
            return o
        }), r.d(t, "j", function() {
            return s
        }), r.d(t, "h", function() {
            return c
        }), r.d(t, "o", function() {
            return l
        }), r.d(t, "n", function() {
            return u
        }), r.d(t, "g", function() {
            return h
        }), r.d(t, "l", function() {
            return d
        }), r.d(t, "k", function() {
            return p
        }), r.d(t, "i", function() {
            return f
        }), r.d(t, "p", function() {
            return m
        }), r.d(t, "b", function() {
            return y
        }), r.d(t, "a", function() {
            return b
        }), r.d(t, "f", function() {
            return g
        }), r.d(t, "d", function() {
            return v
        }), r.d(t, "c", function() {
            return w
        });
        var s = function(e) {
                var t = e.timeUnit,
                    r = e.interval;
                return null === t && "day" === r ? "day" : "minute" === t && r % 60 == 0 ? "hour" : "second" === t ? "tick" : t
            },
            c = function(e) {
                var t = e.timeUnit,
                    r = t,
                    n = e.interval;
                return "day" === n ? (r = 86400, n = 1) : "minute" === t ? r = 60 : "second" === t && (r = 1), r * n
            };

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e, t) {
                    return e < t
                },
                r = e.slice(0);
            return e.sort(function(e, n) {
                var i = t(e, n);
                return 0 === i ? r.indexOf(e) - r.indexOf(n) : i
            }), e
        }

        function u(e, t) {
            return !(!e || !t || +e.DT != +t.DT || e.Close !== t.Close || e.Open !== t.Open || e.Volume !== t.Volume)
        }

        function h(e, t, r, n) {
            var i = new Blob([t], {
                type: r
            });
            if (navigator.msSaveBlob) navigator.msSaveBlob(i, e);
            else {
                var a = "image/png;" === r ? t : URL.createObjectURL(i),
                    o = document.createElement("a");
                if (void 0 !== o.download) return o.setAttribute("href", a), o.setAttribute("download", e), o.style.visibility = "hidden", document.body.appendChild(o), o.click(), void document.body.removeChild(o);
                if (n)
                    if ("image/png;" === r) n.document.write('<iframe src="'.concat(a, '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'));
                    else
                        for (var s = t.split("\n"), c = 0; c < s.length; c++) n.document.write("".concat(s[c], "<br/>"))
            }
        }

        function d(e) {
            return e.getTime() / 1e3 - 60 * e.getTimezoneOffset() | 0
        }

        function p(e) {
            return new Date(1e3 * e).toISOString().substring(0, 19)
        }

        function f(e) {
            return new Date(1e3 * e)
        }

        function m(e, t, r) {
            var n = !1;
            for (var i in t) void 0 !== t[i] && e[i] !== t[i] && (e[i] = t[i], n = !0);
            n && r && r()
        }

        function y(e) {
            var t = 1,
                r = "second";
            return 86400 === e ? r = "day" : e > 0 && (t = e / 60, r = "minute"), {
                interval: t,
                timeUnit: r
            }
        }

        function b(e, t) {
            return {
                second: 0,
                minute: 60,
                day: 86400
            } [t] * e
        }

        function g(e) {
            var t = e / 1e3;
            if (t <= 0) return null;
            var r = function(e) {
                    return "0".concat(e).slice(-2)
                },
                n = r(Math.trunc(t % 60)),
                i = r(Math.trunc(t / 60 % 60)),
                a = Math.trunc(t / 3600 % 24);
            return a = a ? "".concat(a, ":") : "", "".concat(a).concat(i, ":").concat(n)
        }

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    return e
                },
                r = [],
                i = n({}, e, {
                    data: r
                });
            if (e.hasSubcategory) {
                var a = !0,
                    o = !1,
                    s = void 0;
                try {
                    for (var c, l = e.data[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
                        var u = c.value,
                            h = [],
                            d = n({}, u, {
                                data: h
                            }),
                            p = !0,
                            f = !1,
                            m = void 0;
                        try {
                            for (var y, b = u.data[Symbol.iterator](); !(p = (y = b.next()).done); p = !0) {
                                var g = y.value;
                                h.push(t(g))
                            }
                        } catch (e) {
                            f = !0, m = e
                        } finally {
                            try {
                                p || null == b.return || b.return()
                            } finally {
                                if (f) throw m
                            }
                        }
                        r.push(d)
                    }
                } catch (e) {
                    o = !0, s = e
                } finally {
                    try {
                        a || null == l.return || l.return()
                    } finally {
                        if (o) throw s
                    }
                }
            } else {
                var v = !0,
                    w = !1,
                    S = void 0;
                try {
                    for (var k, x = e.data[Symbol.iterator](); !(v = (k = x.next()).done); v = !0) {
                        var C = k.value;
                        r.push(t(C))
                    }
                } catch (e) {
                    w = !0, S = e
                } finally {
                    try {
                        v || null == x.return || x.return()
                    } finally {
                        if (w) throw S
                    }
                }
            }
            return i
        }

        function w(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    return e
                },
                r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                    var c = o.value;
                    r.push(v(c, t))
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
    }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "Translation", function() {
            return s
        }), r.d(t, "t", function() {
            return c
        });
        var n = r(59),
            i = r.n(n);

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = {},
            s = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.lang = t
                }
                return function(e, t, r) {
                    t && a(e.prototype, t), r && a(e, r)
                }(e, [{
                    key: "setLanguage",
                    value: function(e) {
                        var t = this;
                        o[e] || "en" === e ? this.lang = e : r(92)("./".concat(e, ".po")).then(function(r) {
                            r ? (o[e] = r, t.lang = e) : console.error("Unsupported language:", e)
                        })
                    }
                }, {
                    key: "translate",
                    value: function() {
                        for (var e = o[this.lang], t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        if (!e) return this.replace(r[0], r[1]);
                        var a, s = i.a[r[0]]; {
                            if ("string" == typeof r[1]) throw new Error("Plural conversion not working!");
                            a = e[s], a = this.replace(a, r[1]) || r[0]
                        }
                        return a
                    }
                }, {
                    key: "replace",
                    value: function(e, t) {
                        if (!t) return e;
                        for (var r = Object.keys(t); r.length;) {
                            var n = r.shift();
                            e = e.replace("[".concat(n, "]"), t[n])
                        }
                        return e
                    }
                }]), e
            }(),
            c = new s
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return m
        });
        var n, i, a, o, s, c = r(1),
            l = r(4),
            u = r(44),
            h = r(18);

        function d(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function f(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var m = (n = c.action.bound, i = c.action.bound, o = f((a = function() {
            function e(t, r) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.onContextReady = function() {
                    n.modalNode = n.mainStore.chart.modalNode
                }, d(this, "modalNode", o, this), d(this, "route", s, this), this.connect = Object(l.a)(function(e) {
                    var t = e.chart;
                    return {
                        setOpen: n.setOpen,
                        open: n.open,
                        onTitleClick: n.onTitleClick,
                        DropdownDialog: n.DropDownDialog,
                        modalNode: n.modalNode,
                        isMobile: t.isMobile,
                        shouldRenderDialogs: t.shouldRenderDialogs
                    }
                }), this.mainStore = t, this.dialog = new u.a(t), Object(c.reaction)(function() {
                    return n.open
                }, function() {
                    return n.blurInput()
                }), Object(c.when)(function() {
                    return n.mainStore.chart.context
                }, this.onContextReady), r && r.route && (this.route = r.route), this.DropDownDialog = this.dialog.connect(h.a)
            }
            return function(e, t, r) {
                t && p(e.prototype, t), r && p(e, r)
            }(e, [{
                key: "setOpen",
                value: function(e) {
                    this.dialog.setOpen(e), this.routingStore.updateRoute(this.route, e)
                }
            }, {
                key: "blurInput",
                value: function() {
                    var e = this.context.stx;
                    !1 === this.open ? (document.activeElement.blur(), e.modalEnd()) : e.modalBegin(), e.allowScroll = e.allowZoom = !this.open
                }
            }, {
                key: "onTitleClick",
                value: function(e) {
                    e && e.stopPropagation(), this.setOpen(!this.open)
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "routingStore",
                get: function() {
                    return this.mainStore.routing
                }
            }, {
                key: "open",
                get: function() {
                    return this.dialog.open
                }
            }]), e
        }()).prototype, "modalNode", [c.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), s = f(a.prototype, "route", [c.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }), f(a.prototype, "open", [c.computed], Object.getOwnPropertyDescriptor(a.prototype, "open"), a.prototype), f(a.prototype, "setOpen", [n], Object.getOwnPropertyDescriptor(a.prototype, "setOpen"), a.prototype), f(a.prototype, "onTitleClick", [i], Object.getOwnPropertyDescriptor(a.prototype, "onTitleClick"), a.prototype), a)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(45),
            o = r.n(a),
            s = r(39),
            c = r(3);

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function h(e, t) {
            return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var f = function(e) {
            function t() {
                var e, r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return (r = h(this, (e = d(t)).call.apply(e, [this].concat(i)))).onOverlayClick = function(e) {
                    "cq-menu-overlay" === e.target.className && r.props.setOpen(!1)
                }, r
            }
            return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(t, n["Component"]),
                function(e, t, r) {
                    t && u(e.prototype, t), r && u(e, r)
                }(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.open,
                            r = e.className,
                            n = e.children,
                            a = e.title,
                            l = e.onTitleClick,
                            u = e.DropdownDialog,
                            h = e.isMobile,
                            d = e.isFullscreen,
                            p = e.modalNode,
                            f = e.enabled,
                            m = void 0 === f || f,
                            y = e.shouldRenderDialogs,
                            b = i.a.Children.map(n, function(e, t) {
                                return 0 === t ? e : null
                            }),
                            g = i.a.Children.map(n, function(e, t) {
                                return 0 !== t ? e : null
                            }),
                            v = y && i.a.createElement(s.CSSTransition, {
                                in: t,
                                timeout: 150,
                                classNames: "cq-menu-dropdown"
                            }, i.a.createElement(u, {
                                className: "cq-menu-dropdown",
                                isMobile: h,
                                isFullscreen: d
                            }, a && i.a.createElement("div", {
                                className: "title"
                            }, i.a.createElement("div", {
                                className: "title-text"
                            }, a), i.a.createElement(c.j, {
                                className: "icon-close-menu",
                                onClick: l
                            })), g));
                        return m && i.a.createElement("div", {
                            className: "ciq-menu ciq-enabled ".concat(r || "", " ").concat(t ? "stxMenuActive" : "")
                        }, i.a.createElement("div", {
                            className: "cq-menu-btn",
                            onClick: l
                        }, b), h && p && o.a.createPortal(i.a.createElement("div", {
                            className: "cq-modal-dropdown ".concat(r || "", " ").concat(t ? "stxMenuActive" : "")
                        }, i.a.createElement("div", {
                            className: "cq-menu-overlay",
                            onClick: this.onOverlayClick
                        }, v)), p) || v) || i.a.createElement("div", {
                            className: "ciq-menu ciq-disabled ".concat(r || "")
                        }, i.a.createElement("div", {
                            className: "cq-menu-btn"
                        }, b))
                    }
                }]), t
        }();
        f.Title = function(e) {
            return e.children
        }, f.Body = function(e) {
            return e.children
        }, t.a = f
    }, function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "g", function() {
            return m
        }), r.d(t, "b", function() {
            return y
        }), r.d(t, "f", function() {
            return b
        }), r.d(t, "a", function() {
            return g
        }), r.d(t, "h", function() {
            return v
        }), r.d(t, "e", function() {
            return w
        }), r.d(t, "d", function() {
            return S
        }), r.d(t, "i", function() {
            return k
        }), r.d(t, "c", function() {
            return x
        });
        var n = r(0),
            i = r.n(n),
            a = r(3);
        r(121);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function u(e, t, r) {
            return t && l(e.prototype, t), r && l(e, r), e
        }

        function h(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function p(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var m = function(e) {
                function t() {
                    var e, r;
                    c(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = h(this, (e = d(t)).call.apply(e, [this].concat(i)))).onChange = function(e) {
                        r.props.onChange(e.currentTarget.value)
                    }, r
                }
                return p(t, i.a.Component), u(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return this.props.value !== e.value
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.min,
                            r = void 0 === t ? 1 : t,
                            n = e.max,
                            a = void 0 === n ? 10 : n,
                            o = e.step,
                            s = void 0 === o ? 1 : o,
                            c = e.value,
                            l = Math.round(120 * (c - r) / (a - r));
                        return i.a.createElement("div", {
                            className: "cq-slider"
                        }, i.a.createElement("div", {
                            className: "cq-slider-range"
                        }, i.a.createElement("div", {
                            className: "cq-slider-bar"
                        }), i.a.createElement("div", {
                            className: "cq-slider-active-bar",
                            style: {
                                width: l
                            }
                        }), i.a.createElement("input", {
                            type: "range",
                            min: r,
                            max: a,
                            step: s,
                            onChange: this.onChange,
                            value: c
                        })), i.a.createElement("div", {
                            className: "value"
                        }, c))
                    }
                }]), t
            }(),
            y = function(e) {
                function t() {
                    var e, r;
                    c(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = h(this, (e = d(t)).call.apply(e, [this].concat(i)))).state = {
                        open: !1
                    }, r.titleRef = null, r.onClick = function() {
                        return r.setState(function(e) {
                            return {
                                open: !e.open
                            }
                        })
                    }, r.close = function(e) {
                        e.target !== r.titleRef && r.setState({
                            open: !1
                        })
                    }, r
                }
                return p(t, i.a.Component), u(t, [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("click", this.close, !1)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("click", this.close)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.rows,
                            n = t.children,
                            o = t.title,
                            s = t.onRowClick,
                            c = t.className,
                            l = this.state.open;
                        return i.a.createElement("div", {
                            className: "".concat(c || "", " cq-dropdown")
                        }, i.a.createElement("div", {
                            className: "title ".concat(l ? "active" : ""),
                            onClick: this.onClick,
                            ref: function(t) {
                                e.titleRef = t
                            }
                        }, o, i.a.createElement(a.c, null)), i.a.createElement("div", {
                            className: "dropdown ".concat(l ? "active" : "")
                        }, r.map(function(e, t) {
                            return i.a.createElement("div", {
                                key: t,
                                className: "row",
                                onClick: function() {
                                    return s && s(e)
                                }
                            }, n(e))
                        })))
                    }
                }]), t
            }(),
            b = function(e) {
                function t() {
                    var e, r;
                    c(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = h(this, (e = d(t)).call.apply(e, [this].concat(i)))).patterns = [{
                        width: 1,
                        pattern: "solid"
                    }, {
                        width: 3,
                        pattern: "solid"
                    }, {
                        width: 5,
                        pattern: "solid"
                    }, {
                        width: 1,
                        pattern: "dotted"
                    }, {
                        width: 3,
                        pattern: "dotted"
                    }, {
                        width: 5,
                        pattern: "dotted"
                    }, {
                        width: 1,
                        pattern: "dashed"
                    }, {
                        width: 3,
                        pattern: "dashed"
                    }, {
                        width: 5,
                        pattern: "dashed"
                    }, {
                        width: 0,
                        pattern: "none"
                    }], r
                }
                return p(t, i.a.Component), u(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.pattern,
                            r = e.lineWidth,
                            n = e.onChange,
                            a = "none" !== t ? i.a.createElement("span", {
                                className: "option ".concat(t, "-").concat(r)
                            }) : i.a.createElement("span", {
                                className: "none"
                            }, "None");
                        return i.a.createElement(y, {
                            rows: this.patterns,
                            title: a,
                            onRowClick: n
                        }, function(e) {
                            return "none" !== e.pattern ? i.a.createElement("span", {
                                className: "option ".concat(e.pattern, "-").concat(e.width)
                            }) : i.a.createElement("span", {
                                className: "none"
                            }, "None")
                        })
                    }
                }]), t
            }(),
            g = function(e) {
                function t() {
                    var e, r;
                    c(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = h(this, (e = d(t)).call.apply(e, [this].concat(i)))).colorMap = [
                        ["#ffffff", "#e1e1e1", "#cccccc", "#b7b7b7", "#a0a0a5", "#898989", "#707070", "#626262", "#555555", "#464646", "#363636", "#262626", "#1d1d1d", "#000000"],
                        ["#f4977c", "#f7ac84", "#fbc58d", "#fff69e", "#c4de9e", "#85c99e", "#7fcdc7", "#75d0f4", "#81a8d7", "#8594c8", "#8983bc", "#a187bd", "#bb8dbe", "#f29bc1"],
                        ["#ef6c53", "#f38d5b", "#f8ae63", "#fff371", "#acd277", "#43b77a", "#2ebbb3", "#00bff0", "#4a8dc8", "#5875b7", "#625da6", "#8561a7", "#a665a7", "#ee6fa9"],
                        ["#ea1d2c", "#ee652e", "#f4932f", "#fff126", "#8ec648", "#00a553", "#00a99c", "#00afed", "#0073ba", "#0056a4", "#323390", "#66308f", "#912a8e", "#e9088c"],
                        ["#9b0b16", "#9e4117", "#a16118", "#c6b920", "#5a852d", "#007238", "#00746a", "#0077a1", "#004c7f", "#003570", "#1d1762", "#441261", "#62095f", "#9c005d"],
                        ["#770001", "#792e03", "#7b4906", "#817a0b", "#41661e", "#005827", "#005951", "#003b5c", "#001d40", "#000e35", "#04002c", "#19002b", "#2c002a", "#580028"]
                    ], r.state = {
                        open: !1
                    }, r.titleRef = null, r.onClick = function() {
                        return r.setState(function(e) {
                            return {
                                open: !e.open
                            }
                        })
                    }, r.close = function(e) {
                        e.target !== r.titleRef && r.setState({
                            open: !1
                        })
                    }, r
                }
                return p(t, i.a.Component), u(t, [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("click", this.close, !1)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("click", this.close)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return this.state.open !== t.open
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.color,
                            n = t.setColor,
                            a = "auto" === r ? "#000000" : r;
                        return i.a.createElement("div", {
                            className: "cq-color-picker"
                        }, i.a.createElement("div", {
                            ref: function(t) {
                                e.titleRef = t
                            },
                            className: "title",
                            style: {
                                backgroundColor: a
                            },
                            onClick: this.onClick
                        }), i.a.createElement("div", {
                            className: "dropdown ".concat(this.state.open ? "open" : "")
                        }, this.colorMap.map(function(e, t) {
                            return i.a.createElement("div", {
                                key: t,
                                className: "row"
                            }, e.map(function(e) {
                                return i.a.createElement("div", {
                                    key: e,
                                    className: "tile-color",
                                    style: {
                                        backgroundColor: e
                                    },
                                    onClick: function() {
                                        return n(e)
                                    }
                                })
                            }))
                        })))
                    }
                }]), t
            }(),
            v = function(e) {
                var t = e.value,
                    r = e.onChange;
                return i.a.createElement("div", {
                    className: "cq-switch ".concat(t ? "on" : "off"),
                    onClick: function() {
                        return r(!t)
                    }
                }, i.a.createElement("div", {
                    className: "handle"
                }))
            },
            w = function(e) {
                function t() {
                    var e, r;
                    c(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = h(this, (e = d(t)).call.apply(e, [this].concat(i)))).state = {}, r.fireOnChange = function() {
                        var e = r.props,
                            t = e.min,
                            n = e.max,
                            i = e.onChange,
                            a = function(e) {
                                return r.setState({
                                    value: e
                                }, function() {
                                    return i(r.state.value)
                                })
                            };
                        void 0 !== n && r.state.value > n ? a(n) : void 0 !== t && r.state.value < t ? a(t) : i(r.state.value)
                    }, r.onUpdateValue = function(e) {
                        r.setState({
                            value: e.target.value
                        })
                    }, r.fireOnEnter = function(e) {
                        "Enter" === e.key && r.fireOnChange()
                    }, r
                }
                return p(t, i.a.Component), u(t, [{
                    key: "componentWillMount",
                    value: function() {
                        var e = this.props.value;
                        this.setState({
                            originalValue: e,
                            value: e
                        })
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = e.value;
                        t !== this.state.originalValue && this.setState({
                            originalValue: t,
                            value: t
                        }, this.fireOnChange)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return this.state.value !== t.value
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.min,
                            r = e.max,
                            n = e.step;
                        return i.a.createElement("input", {
                            type: "number",
                            value: this.state.value,
                            onBlur: this.fireOnChange,
                            onChange: this.onUpdateValue,
                            onKeyPress: this.fireOnEnter,
                            min: t,
                            max: r,
                            step: n
                        })
                    }
                }]), t
            }(),
            S = function(e) {
                var t = e.value,
                    r = e.onChange,
                    n = t.Value,
                    a = t.Color,
                    o = function(e) {
                        return r({
                            Color: a,
                            Value: e
                        })
                    };
                return i.a.createElement("span", {
                    className: "cq-numbercolorpicker"
                }, i.a.createElement(w, {
                    value: n,
                    onChange: function(e) {
                        return o(e)
                    }
                }), i.a.createElement(g, {
                    color: a,
                    setColor: function(e) {
                        return function(e) {
                            return r({
                                Color: e,
                                Value: n
                            })
                        }(e)
                    }
                }))
            },
            k = function(e) {
                var t = e.className,
                    r = e.children,
                    n = e.active,
                    a = e.onChange;
                return i.a.createElement("div", {
                    onClick: function() {
                        return a(!n)
                    },
                    className: "".concat(t || "", " ").concat(n ? "active" : "", " cq-toggle")
                }, r)
            },
            x = function(e) {
                var t = e.onChange,
                    r = e.value,
                    n = ["Default", "Helvetica", "Courier", "Garamond", "Palatino", "Times New Roman"],
                    a = function(e) {
                        return t(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    s(e, t, r[t])
                                })
                            }
                            return e
                        }({}, r, e))
                    },
                    o = r.family,
                    c = r.style,
                    l = r.weight,
                    u = r.size;
                return i.a.createElement("span", {
                    className: "cq-fontsetting"
                }, i.a.createElement(k, {
                    onChange: function(e) {
                        return a({
                            weight: e ? "bold" : void 0
                        })
                    },
                    active: !!l
                }, i.a.createElement("div", {
                    className: "cq-text-icon"
                }, i.a.createElement("b", null, "B"))), i.a.createElement(k, {
                    active: !!c,
                    onChange: function(e) {
                        return a({
                            style: e ? "italic" : void 0
                        })
                    }
                }, i.a.createElement("div", {
                    className: "cq-text-icon"
                }, i.a.createElement("i", null, "i"))), i.a.createElement(y, {
                    className: "cq-changefontsize",
                    rows: [8, 10, 12, 13, 14, 16, 20, 28, 36, 48, 64],
                    title: u || "13px",
                    onRowClick: function(e) {
                        return a({
                            size: "".concat(e, "px")
                        })
                    }
                }, function(e) {
                    return i.a.createElement("span", {
                        className: "option"
                    }, e)
                }), i.a.createElement(y, {
                    className: "cq-changefontfamily",
                    rows: n,
                    title: o || n[0],
                    onRowClick: function(e) {
                        return a({
                            family: e
                        })
                    }
                }, function(e) {
                    return i.a.createElement("span", {
                        className: "option"
                    }, e)
                }))
            }
    }, function(e, t, r) {
        "use strict";

        function n() {
            var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                n = new Promise(function(r, n) {
                    e = r, t = n
                });
            return n.resolve = function(t) {
                n.isPending = !1, e(t)
            }, n.reject = function(e) {
                n.isPending = !1, t(e)
            }, n.data = r, n
        }
        r.d(t, "a", function() {
            return n
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = (r(137), r(14)),
            o = r.n(a),
            s = function(e) {
                var t = e.onSelectItem,
                    r = e.updateScrollSpy,
                    n = e.setScrollPanel,
                    a = e.ResultsPanel,
                    s = e.FilterPanel,
                    c = e.SearchInput,
                    l = e.isMobile,
                    u = e.height,
                    h = e.id,
                    d = e.searchInputClassName;
                return i.a.createElement("div", {
                    className: "cq-categorical-display",
                    style: {
                        height: u
                    },
                    id: h
                }, i.a.createElement("div", {
                    className: "cq-lookup-filters"
                }, i.a.createElement(c, {
                    searchInputClassName: d
                }), i.a.createElement(s, null)), i.a.createElement(o.a, {
                    className: "cq-scroll-panel",
                    onScroll: r,
                    ref: n,
                    style: {
                        width: l ? "100%" : "312px"
                    }
                }, i.a.createElement(a, {
                    onSelectItem: t,
                    id: h
                })))
            },
            c = r(57),
            l = r(50),
            u = r(58);
        r.d(t, "b", function() {
            return s
        }), r.d(t, "c", function() {
            return c.a
        }), r.d(t, "d", function() {
            return l.b
        }), r.d(t, "a", function() {
            return l.a
        }), r.d(t, "e", function() {
            return u.a
        })
    }, function(e, t, r) {
        "use strict";
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        var i = {
                emitDelay: 10,
                strictMode: !1
            },
            a = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? i : arguments[0];
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = void 0,
                        n = void 0;
                    r = t.hasOwnProperty("emitDelay") ? t.emitDelay : i.emitDelay, this._emitDelay = r, n = t.hasOwnProperty("strictMode") ? t.strictMode : i.strictMode, this._strictMode = n, this._listeners = {}, this.events = []
                }
                return n(e, [{
                    key: "_addListenner",
                    value: function(e, t, r) {
                        if ("function" != typeof t) throw TypeError("listener must be a function"); - 1 === this.events.indexOf(e) ? (this._listeners[e] = [{
                            once: r,
                            fn: t
                        }], this.events.push(e)) : this._listeners[e].push({
                            once: r,
                            fn: t
                        })
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        this._addListenner(e, t, !1)
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        this._addListenner(e, t, !0)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        var r = this,
                            n = this.events.indexOf(e);
                        e && -1 !== n && (t ? function() {
                            var i = [],
                                a = r._listeners[e];
                            a.forEach(function(e, r) {
                                e.fn === t && i.unshift(r)
                            }), i.forEach(function(e) {
                                a.splice(e, 1)
                            }), a.length || (r.events.splice(n, 1), delete r._listeners[e])
                        }() : (delete this._listeners[e], this.events.splice(n, 1)))
                    }
                }, {
                    key: "_applyEvents",
                    value: function(e, t) {
                        var r = this._listeners[e];
                        if (r && r.length) {
                            var n = [];
                            r.forEach(function(e, r) {
                                e.fn.apply(null, t), e.once && n.unshift(r)
                            }), n.forEach(function(e) {
                                r.splice(e, 1)
                            })
                        } else if (this._strictMode) throw "No listeners specified for event: " + e
                    }
                }, {
                    key: "emit",
                    value: function(e) {
                        for (var t = this, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        this._emitDelay ? setTimeout(function() {
                            t._applyEvents.call(t, e, n)
                        }, this._emitDelay) : this._applyEvents(e, n)
                    }
                }, {
                    key: "emitSync",
                    value: function(e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        this._applyEvents(e, r)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._listeners = {}, this.events = []
                    }
                }]), e
            }();
        e.exports = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Scrollbars = void 0;
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(97));
        t.default = n.default, t.Scrollbars = n.default
    }, function(e, t, r) {
        "use strict";
        var n = r(5),
            i = r(11);

        function a(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function o(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var o = e.apply(t, r);

                    function s(e) {
                        a(o, n, i, s, c, "next", e)
                    }

                    function c(e) {
                        a(o, n, i, s, c, "throw", e)
                    }
                    s(void 0)
                })
            }
        }

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var c = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.clockStarted = !1, this.clockStartedPromise = new i.a, this._timeResponse = function(e) {
                    if (e.error && (t.clockStarted = !1), t.clockStarted) {
                        var r = e.time,
                            i = Object(n.l)(new Date);
                        t.serverTimeAtResponse = r + (i - t.clientTimeAtRequest) / 2;
                        clearInterval(t.updateTimeInterval), t.updateTimeInterval = setInterval(function() {
                            t.serverTimeAtResponse += 1
                        }, 1e3)
                    } else t.init()
                }
            }
            return function(e, t, r) {
                t && s(e.prototype, t), r && s(e, r)
            }(e, [{
                key: "init",
                value: function() {
                    var e = o(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._api = t, this.clockStarted) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.clockStarted = !0, clearInterval(this.getTimeInterval), e.next = 6, this.requestTime();
                                case 6:
                                    this.getTimeInterval = setInterval(this.requestTime.bind(this), 3e4), e.next = 10;
                                    break;
                                case 9:
                                    return e.abrupt("return", this.clockStartedPromise);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "requestTime",
                value: function() {
                    var e = o(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.clientTimeAtRequest = Object(n.l)(new Date), e.next = 3, this._api.getServerTime().then(this._timeResponse);
                                case 3:
                                    this.clockStartedPromise.resolve();
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getEpoch",
                value: function() {
                    if (this.serverTimeAtResponse) return this.serverTimeAtResponse;
                    throw new Error("Server time is undefined!")
                }
            }, {
                key: "getLocalDate",
                value: function() {
                    return Object(n.i)(this.getEpoch())
                }
            }, {
                key: "getUTCDate",
                value: function() {
                    return CIQ.strToDateTime(Object(n.k)(this.getEpoch()))
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return this._instance || (this._instance = new e), this._instance
                }
            }]), e
        }();
        c._instance = void 0, t.a = c
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return n
        });
        var n = []
    }, function(e, t, r) {
        "use strict";
        t.a = {
            id: "ic-edit-usage",
            viewBox: "0 0 16 16",
            url: r.p + "sprite-606f3c.smartcharts.svg#ic-edit-usage",
            toString: function() {
                return this.url
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n);
        r(117);
        t.a = function(e) {
            var t = e.open,
                r = e.children,
                n = e.onContainerClick,
                a = e.className;
            return i.a.createElement("div", {
                className: "".concat(a || "cq-dialog", " ").concat(t ? " open" : ""),
                onClick: n
            }, r)
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return x
        });
        var n, i, a, o, s, c, l, u, h, d, p, f = r(1),
            m = r(4),
            y = r(18),
            b = r(7);

        function g(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function v(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function w(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function S(e, t, r) {
            return t && w(e.prototype, t), r && w(e, r), e
        }

        function k(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var x = (n = f.action.bound, i = f.action.bound, a = f.action.bound, o = f.action.bound, s = f.action.bound, l = k((c = function() {
            function e(t) {
                var r = this,
                    n = t.mainStore,
                    i = t.getContext,
                    a = t.onDeleted,
                    o = t.favoritesId,
                    s = t.onChanged;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), v(this, "items", l, this), v(this, "title", u, this), v(this, "description", h, this), v(this, "id", d, this), v(this, "activeTab", p, this), this.connect = Object(m.a)(function() {
                    return {
                        items: r.items,
                        title: r.title,
                        description: r.description,
                        activeTab: r.activeTab,
                        showTabs: r.showTabs,
                        setOpen: r.setOpen,
                        onTabClick: r.onTabClick,
                        onDeleteClick: r.onDeleted ? r.onDeleteClick : void 0,
                        favoritesId: r.favoritesId,
                        onResetClick: r.onResetClick,
                        onItemChange: r.onItemChange,
                        Dialog: r.Dialog,
                        open: r.open,
                        id: r.id
                    }
                }), this.getContext = i, this.onDeleted = a, this.favoritesId = o, this.onChanged = s, this.menu = new b.a(n, {
                    route: "indicator-setting"
                }), this.Dialog = this.menu.dialog.connect(y.a)
            }
            return S(e, [{
                key: "showTabs",
                get: function() {
                    return !!this.description
                }
            }]), S(e, [{
                key: "setOpen",
                value: function(e) {
                    return this.menu.setOpen(e)
                }
            }, {
                key: "onDeleteClick",
                value: function() {
                    this.onDeleted(), this.menu.setOpen(!1)
                }
            }, {
                key: "onTabClick",
                value: function(e) {
                    this.activeTab = e
                }
            }, {
                key: "onResetClick",
                value: function() {
                    var e = this.items.map(function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    g(e, t, r[t])
                                })
                            }
                            return e
                        }({}, e, {
                            value: e.defaultValue
                        })
                    });
                    this.items = e, this.onChanged(e)
                }
            }, {
                key: "onItemChange",
                value: function(e, t) {
                    var r = this.items.find(function(t) {
                        return t.id === e
                    });
                    r && r.value !== t && (r.value = t, this.items = this.items.slice(0), this.onChanged(this.items))
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "open",
                get: function() {
                    return this.menu.open
                }
            }]), e
        }()).prototype, "items", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }), u = k(c.prototype, "title", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }), h = k(c.prototype, "description", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }), d = k(c.prototype, "id", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), p = k(c.prototype, "activeTab", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "settings"
            }
        }), k(c.prototype, "showTabs", [f.computed], Object.getOwnPropertyDescriptor(c.prototype, "showTabs"), c.prototype), k(c.prototype, "open", [f.computed], Object.getOwnPropertyDescriptor(c.prototype, "open"), c.prototype), k(c.prototype, "setOpen", [n], Object.getOwnPropertyDescriptor(c.prototype, "setOpen"), c.prototype), k(c.prototype, "onDeleteClick", [i], Object.getOwnPropertyDescriptor(c.prototype, "onDeleteClick"), c.prototype), k(c.prototype, "onTabClick", [a], Object.getOwnPropertyDescriptor(c.prototype, "onTabClick"), c.prototype), k(c.prototype, "onResetClick", [o], Object.getOwnPropertyDescriptor(c.prototype, "onResetClick"), c.prototype), k(c.prototype, "onItemChange", [s], Object.getOwnPropertyDescriptor(c.prototype, "onItemChange"), c.prototype), c)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(10),
                o = r(3),
                s = r(40),
                c = (r(135), function(e) {
                    var t = e.items,
                        r = e.onItemChange,
                        n = {
                            switch: function(e) {
                                return i.a.createElement(a.h, {
                                    value: e.value,
                                    onChange: function(t) {
                                        return r(e.id, t)
                                    }
                                })
                            },
                            colorpicker: function(e) {
                                return i.a.createElement(a.a, {
                                    color: e.value,
                                    setColor: function(t) {
                                        return r(e.id, t)
                                    }
                                })
                            },
                            pattern: function(e) {
                                var n = t.find(function(e) {
                                    return "lineWidth" === e.id
                                }).value;
                                return i.a.createElement(a.f, {
                                    pattern: e.value,
                                    lineWidth: n,
                                    onChange: function(e) {
                                        r("pattern", e.pattern), r("lineWidth", e.width)
                                    }
                                })
                            },
                            select: function(e) {
                                return i.a.createElement(a.b, {
                                    rows: Object.keys(e.options),
                                    title: e.value,
                                    onRowClick: function(t) {
                                        return r(e.id, t)
                                    }
                                }, function(e) {
                                    return e
                                })
                            },
                            number: function(e) {
                                return i.a.createElement(a.g, {
                                    min: e.min || 1,
                                    step: e.step || 1,
                                    max: e.max || 100,
                                    value: e.value,
                                    onChange: function(t) {
                                        return r(e.id, t)
                                    }
                                })
                            },
                            numericinput: function(e) {
                                return i.a.createElement("span", {
                                    className: "ciq-num-input"
                                }, i.a.createElement(a.e, {
                                    value: e.value,
                                    onChange: function(t) {
                                        return r(e.id, t)
                                    },
                                    min: e.min,
                                    step: e.step,
                                    max: e.max
                                }))
                            },
                            numbercolorpicker: function(e) {
                                return i.a.createElement(a.d, {
                                    value: e.value,
                                    onChange: function(t) {
                                        return r(e.id, t)
                                    }
                                })
                            },
                            font: function(e) {
                                return i.a.createElement(a.c, {
                                    value: e.value,
                                    onChange: function(t) {
                                        return r(e.id, t)
                                    }
                                })
                            }
                        };
                    return i.a.createElement("div", {
                        className: "items"
                    }, t.map(function(e) {
                        return n[e.type] && i.a.createElement("div", {
                            key: e.id,
                            className: "item"
                        }, i.a.createElement("div", {
                            className: "title"
                        }, i.a.createElement("span", null, e.title), n[e.type](e)))
                    }))
                }),
                l = function(t) {
                    var r = t.onResetClick;
                    return i.a.createElement("div", {
                        className: "reset",
                        onClick: r
                    }, e.translate("RESET"))
                },
                u = function(t) {
                    var r = t.setOpen;
                    return i.a.createElement("div", {
                        className: "done",
                        onClick: function() {
                            return r(!1)
                        }
                    }, e.translate("DONE"))
                },
                h = function(e) {
                    var t = e.onTabClick,
                        r = e.activeTab;
                    return i.a.createElement("div", {
                        className: "tabs"
                    }, i.a.createElement("div", {
                        onClick: function() {
                            return t("settings")
                        },
                        className: "settings" === r ? "active" : ""
                    }, " Settings"), i.a.createElement("div", {
                        onClick: function() {
                            return t("description")
                        },
                        className: "description" === r ? "active" : ""
                    }, " Description"), i.a.createElement("div", {
                        className: "active-border ".concat("settings" === r ? "first" : "second")
                    }))
                };
            t.a = function(e) {
                var t = e.id,
                    r = e.items,
                    n = e.title,
                    a = e.description,
                    d = e.activeTab,
                    p = e.setOpen,
                    f = e.showTabs,
                    m = e.onTabClick,
                    y = e.onDeleteClick,
                    b = e.favoritesId,
                    g = e.onResetClick,
                    v = e.onItemChange,
                    w = e.Dialog,
                    S = e.open;
                return i.a.createElement("div", {
                    className: "cq-dialog-overlay ".concat(S ? "cq-dialog-active" : "")
                }, i.a.createElement(w, {
                    className: "cq-dialog cq-settings-dialog"
                }, i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                    className: "titlebar ".concat(f ? "" : "no-tabs")
                }, i.a.createElement("div", {
                    className: "title"
                }, n), i.a.createElement("div", {
                    className: "icons"
                }, y && i.a.createElement(o.p, {
                    onClick: y,
                    className: "margin"
                }), b && i.a.createElement(s.a, {
                    id: t,
                    category: b
                }))), f && i.a.createElement(h, {
                    activeTab: d,
                    onTabClick: m
                }), "settings" === d ? i.a.createElement(i.a.Fragment, null, i.a.createElement(c, {
                    items: r,
                    onItemChange: v
                }), i.a.createElement("div", {
                    className: "buttons"
                }, i.a.createElement(l, {
                    onResetClick: g
                }), i.a.createElement(u, {
                    setOpen: p
                }))) : i.a.createElement("div", {
                    className: "description"
                }, a))))
            }
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return I
            });
            var n, i, a, o, s, c, l, u, h, d, p, f, m, y, b, g, v, w, S = r(0),
                k = r.n(S),
                x = r(1),
                C = r(4),
                O = r(5),
                E = r(73),
                T = r(12);

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function D(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function j(e, t, r, n) {
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }

            function A(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function N(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var I = (n = x.action.bound, i = x.action.bound, a = x.action.bound, o = x.action.bound, s = x.action.bound, c = x.action.bound, l = x.action.bound, u = x.action.bound, d = N((h = function() {
                function t(e) {
                    var r = this,
                        n = e.getCategoricalItems,
                        i = e.onSelectItem,
                        a = e.getIsShown,
                        o = e.getActiveCategory,
                        s = e.activeOptions,
                        c = e.placeholderText,
                        l = e.favoritesId,
                        u = e.mainStore,
                        h = e.id,
                        S = e.getCurrentActiveCategory,
                        O = e.getCurrentActiveSubCategory,
                        P = e.searchInputClassName;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), j(this, "isShown", d, this), j(this, "scrollPanel", p, this), j(this, "filterText", f, this), j(this, "activeCategoryKey", m, this), j(this, "focusedCategoryKey", y, this), j(this, "isScrollingDown", b, this), this.scrollTop = void 0, j(this, "activeHeadKey", g, this), j(this, "activeHeadTop", v, this), j(this, "activeHeadOffset", w, this), this.isUserScrolling = !0, this.lastFilteredItems = [], this.connect = Object(C.a)(function() {
                        return {
                            filteredItems: r.filteredItems,
                            updateScrollSpy: r.updateScrollSpy,
                            setScrollPanel: r.setScrollPanel,
                            isScrollingDown: r.isScrollingDown,
                            scrollUp: r.scrollUp,
                            scrollDown: r.scrollDown,
                            onSelectItem: r.onSelectItem,
                            ResultsPanel: r.ResultsPanel,
                            FilterPanel: r.FilterPanel,
                            SearchInput: r.SearchInput,
                            isMobile: r.chart.isMobile,
                            height: r.height
                        }
                    }), Object(x.reaction)(a, function() {
                        if (a()) {
                            r.focusedCategoryKey = null, r.activeCategoryKey = r.getCurrentActiveCategory ? r.getCurrentActiveCategory() : "favorite", r.activeSubCategory = r.getCurrentActiveSubCategory ? r.getCurrentActiveSubCategory() : "";
                            var e = r.categoryElements[r.activeCategoryKey],
                                t = r.id ? ".".concat(r.id, "-subcategory-item-").concat(r.activeSubCategory) : ".subcategory-item-".concat(r.activeSubCategory),
                                n = r.mainStore.chart.rootNode.querySelector(t);
                            r.activeHeadKey = r.activeCategoryKey || null, e && (r.pauseScrollSpy = !0, r.isUserScrolling = !1, r.scrollPanel.scrollTop(e.offsetTop), n && r.scrollPanel.scrollTop(e.offsetTop + n.offsetTop - 40), setTimeout(function() {
                                r.pauseScrollSpy = !1
                            }, 20)), r.isInit || r.init(), u.chart.isMobile || setTimeout(function() {
                                r.searchInput.current.focus()
                            }, 0)
                        }
                    }), this.getCategoricalItems = n, this.onSelectItem = i, this.getActiveCategory = o, this.favoritesId = l, this.id = h, this.categoryElements = {}, this.mainStore = u, this.getCurrentActiveCategory = S, this.getCurrentActiveSubCategory = O, this.isInit = !1, this.searchInput = k.a.createRef(), this.searchInputClassName = P;
                    var _ = Object(C.a)(function() {
                            return {
                                favoritesId: l,
                                id: h
                            }
                        })(T.d),
                        D = Object(C.a)(function() {
                            return {
                                activeOptions: s,
                                favoritesId: l
                            }
                        })(T.a),
                        A = function(e) {
                            return "active" === e && void 0 !== r.getActiveCategory ? D : _
                        };
                    this.ResultsPanel = Object(C.a)(function() {
                        return {
                            filteredItems: r.filteredItems,
                            setCategoryElement: r.setCategoryElement,
                            getItemType: A,
                            activeHeadTop: r.activeHeadTop,
                            activeHeadKey: r.activeHeadKey,
                            activeHeadOffset: r.activeHeadOffset
                        }
                    })(T.e), this.FilterPanel = Object(C.a)(function(e) {
                        return {
                            isMobile: e.chart.isMobile,
                            filteredItems: r.filteredItems,
                            handleFilterClick: r.handleFilterClick,
                            activeCategoryKey: r.activeCategoryKey,
                            focusedCategoryKey: r.focusedCategoryKey
                        }
                    })(T.c), this.SearchInput = Object(C.a)(function() {
                        return {
                            placeholder: c,
                            value: r.filterText,
                            onChange: r.setFilterText,
                            searchInput: r.searchInput,
                            searchInputClassName: r.searchInputClassName
                        }
                    })(E.a)
                }
                return function(e, t, r) {
                    t && A(e.prototype, t), r && A(e, r)
                }(t, [{
                    key: "updateScrollSpy",
                    value: function() {
                        if (!this.pauseScrollSpy && this.scrollPanel && 0 !== this.filteredItems.length) {
                            var e = this.scrollPanel.container.getBoundingClientRect().top,
                                t = 0,
                                r = null,
                                n = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var o, s = this.filteredItems[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                    var c = o.value,
                                        l = this.categoryElements[c.categoryId];
                                    if (!l) return;
                                    var u = l.getBoundingClientRect(),
                                        h = u.top - e;
                                    if (h < 0) {
                                        r = c.categoryId;
                                        var d = u.height + h - 40;
                                        t = d < 0 ? d : 0
                                    }
                                }
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            var p = this.scrollPanel.getValues().top;
                            this.scrollTop > p ? this.scrollUp() : this.scrollDown(), this.activeHeadOffset = this.chart.isMobile ? this.scrollPanel.container.offsetTop : 0, this.scrollTop = p, this.focusedCategoryKey = r || this.filteredItems[0].categoryId, this.activeHeadTop = t, this.activeHeadKey = 0 === this.scrollTop ? null : this.focusedCategoryKey
                        }
                    }
                }, {
                    key: "scrollUp",
                    value: function() {
                        this.isScrollingDown = !1
                    }
                }, {
                    key: "scrollDown",
                    value: function() {
                        this.isScrollingDown = this.isUserScrolling, this.isUserScrolling = !0
                    }
                }, {
                    key: "init",
                    value: function() {
                        if (this.isInit = !0, "" === this.activeCategoryKey && this.filteredItems.length > 0) {
                            var e = !0,
                                t = !1,
                                r = void 0;
                            try {
                                for (var n, i = this.filteredItems[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
                                    var a = n.value;
                                    if (this.categoryElements[a.categoryId]) {
                                        this.activeCategoryKey = a.categoryId;
                                        break
                                    }
                                }
                            } catch (e) {
                                t = !0, r = e
                            } finally {
                                try {
                                    e || null == i.return || i.return()
                                } finally {
                                    if (t) throw r
                                }
                            }
                        }
                    }
                }, {
                    key: "setCategoryElement",
                    value: function(e, t) {
                        this.categoryElements[t] = e
                    }
                }, {
                    key: "setFilterText",
                    value: function(e) {
                        var t = this;
                        this.filterText = e, this.isUserScrolling = !1, setTimeout(function() {
                            t.updateScrollSpy()
                        }, 0)
                    }
                }, {
                    key: "handleFilterClick",
                    value: function(e) {
                        var t = this,
                            r = this.categoryElements[e.categoryId];
                        r && (this.pauseScrollSpy = !0, this.isUserScrolling = !1, this.scrollPanel.scrollTop(r.offsetTop), this.focusedCategoryKey = e.categoryId, this.activeHeadKey = null, setTimeout(function() {
                            t.pauseScrollSpy = !1
                        }, 20))
                    }
                }, {
                    key: "setScrollPanel",
                    value: function(e) {
                        this.scrollPanel = e
                    }
                }, {
                    key: "chart",
                    get: function() {
                        return this.mainStore.chart
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.chart.context
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this.chart.chartContainerHeight - (this.chart.isMobile ? 0 : 120)
                    }
                }, {
                    key: "favoritesCategory",
                    get: function() {
                        var t = this;
                        this.pauseScrollSpy = !0;
                        var r = {
                            categoryName: e.translate("Favorites"),
                            categoryId: "favorite",
                            hasSubcategory: !1,
                            emptyDescription: e.translate("There are no favorites yet."),
                            data: Object.keys(this.mainStore.favorites.favoritesMap[this.favoritesId]) || []
                        };
                        return setTimeout(function() {
                            t.pauseScrollSpy = !1
                        }, 20), r
                    }
                }, {
                    key: "filteredItems",
                    get: function() {
                        var e = Object(O.c)(this.getCategoricalItems());
                        if (this.favoritesId) {
                            var t = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))), n.forEach(function(t) {
                                            D(e, t, r[t])
                                        })
                                    }
                                    return e
                                }({}, this.favoritesCategory),
                                r = t.data.filter(function(e) {
                                    return "string" != typeof e
                                });
                            e.forEach(function(e) {
                                var n = function e(r) {
                                    var n = [];
                                    return r.hasSubcategory ? r.data.forEach(function(t) {
                                        var r = e(t);
                                        n.push.apply(n, _(r))
                                    }) : t.data.forEach(function(e) {
                                        if ("string" == typeof e) {
                                            var t = r.data.find(function(t) {
                                                return t.itemId === e
                                            });
                                            t && n.push(t)
                                        }
                                    }), n
                                }(e);
                                r.push.apply(r, _(n))
                            }), t.data = r.filter(function(e) {
                                return e
                            }), e.unshift(t)
                        }
                        if (this.getActiveCategory) {
                            var n = Object(O.d)(this.getActiveCategory());
                            e.unshift(n)
                        }
                        if ("" === this.filterText) return this.lastFilteredItems = e, e;
                        var i = !1,
                            a = this.filterText.split(" ").filter(function(e) {
                                return "" !== e
                            }).map(function(e) {
                                return e.toLowerCase().trim()
                            }),
                            o = function(e) {
                                e.data = e.data.filter(function(e) {
                                    return function(e) {
                                        return a.reduce(function(t, r) {
                                            return e.toLowerCase().includes(r) && t
                                        }, !0)
                                    }(e.display || "object" === P(e.dataObject) && e.dataObject.symbol)
                                }), e.data.length && (i = !0)
                            },
                            s = !0,
                            c = !1,
                            l = void 0;
                        try {
                            for (var u, h = e[Symbol.iterator](); !(s = (u = h.next()).done); s = !0) {
                                var d = u.value;
                                if (d.hasSubcategory) {
                                    var p = !0,
                                        f = !1,
                                        m = void 0;
                                    try {
                                        for (var y, b = d.data[Symbol.iterator](); !(p = (y = b.next()).done); p = !0) {
                                            o(y.value)
                                        }
                                    } catch (e) {
                                        f = !0, m = e
                                    } finally {
                                        try {
                                            p || null == b.return || b.return()
                                        } finally {
                                            if (f) throw m
                                        }
                                    }
                                } else o(d)
                            }
                        } catch (e) {
                            c = !0, l = e
                        } finally {
                            try {
                                s || null == h.return || h.return()
                            } finally {
                                if (c) throw l
                            }
                        }
                        return i || (e = this.lastFilteredItems), this.pauseScrollSpy || (this.lastFilteredItems = e), e
                    }
                }]), t
            }()).prototype, "isShown", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), p = N(h.prototype, "scrollPanel", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), f = N(h.prototype, "filterText", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), m = N(h.prototype, "activeCategoryKey", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), y = N(h.prototype, "focusedCategoryKey", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = N(h.prototype, "isScrollingDown", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), g = N(h.prototype, "activeHeadKey", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {}
            }), v = N(h.prototype, "activeHeadTop", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), w = N(h.prototype, "activeHeadOffset", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {}
            }), N(h.prototype, "updateScrollSpy", [n], Object.getOwnPropertyDescriptor(h.prototype, "updateScrollSpy"), h.prototype), N(h.prototype, "scrollUp", [i], Object.getOwnPropertyDescriptor(h.prototype, "scrollUp"), h.prototype), N(h.prototype, "scrollDown", [a], Object.getOwnPropertyDescriptor(h.prototype, "scrollDown"), h.prototype), N(h.prototype, "init", [o], Object.getOwnPropertyDescriptor(h.prototype, "init"), h.prototype), N(h.prototype, "favoritesCategory", [x.computed], Object.getOwnPropertyDescriptor(h.prototype, "favoritesCategory"), h.prototype), N(h.prototype, "filteredItems", [x.computed], Object.getOwnPropertyDescriptor(h.prototype, "filteredItems"), h.prototype), N(h.prototype, "setCategoryElement", [s], Object.getOwnPropertyDescriptor(h.prototype, "setCategoryElement"), h.prototype), N(h.prototype, "setFilterText", [c], Object.getOwnPropertyDescriptor(h.prototype, "setFilterText"), h.prototype), N(h.prototype, "handleFilterClick", [l], Object.getOwnPropertyDescriptor(h.prototype, "handleFilterClick"), h.prototype), N(h.prototype, "setScrollPanel", [u], Object.getOwnPropertyDescriptor(h.prototype, "setScrollPanel"), h.prototype), h)
        }).call(this, r(6).t)
    }, function(e, t) {
        e.exports = r
    }, function(e, t, r) {
        "use strict";
        t.a = {
            id: "ic-delete-usage",
            viewBox: "0 0 16 16",
            url: r.p + "sprite-606f3c.smartcharts.svg#ic-delete-usage",
            toString: function() {
                return this.url
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4),
                o = r(3);
            r(95);
            t.a = Object(a.a)(function(e) {
                var t = e.chartType;
                return {
                    chartId: e.state.chartId,
                    ChartTypeMenu: t.ChartTypeMenu,
                    ChartTypeList: t.ChartTypeList,
                    menuOpen: t.menu.open,
                    onChange: t.setTypeFromUI,
                    setOpen: t.menu.setOpen,
                    showAggregateDialog: t.showAggregateDialog,
                    Type: t.type,
                    updateProps: t.updateProps
                }
            })(function(t) {
                var r = t.chartId,
                    n = t.ChartTypeList,
                    a = t.ChartTypeMenu,
                    s = t.enabled,
                    c = t.menuOpen,
                    l = t.onChange,
                    u = t.setOpen,
                    h = t.showAggregateDialog,
                    d = t.Type,
                    p = t.updateProps;
                if (void 0 === d) return null;
                return p(l), i.a.createElement(a, {
                    className: "ciq-display ciq-chart-types",
                    enabled: s,
                    title: e.translate("Chart types")
                }, i.a.createElement(a.Title, null, i.a.createElement(d.icon, {
                    className: "ic-icon-with-sub ".concat(c ? "active" : ""),
                    "tooltip-title": e.translate(d.text)
                })), i.a.createElement(a.Body, null, i.a.createElement("div", {
                    className: "body"
                }, i.a.createElement(n, {
                    height: 260,
                    onItemClick: function(e, t) {
                        d.id !== t.id && l(t.id, t.candleOnly, r), u(!1)
                    }
                }, function(e) {
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
                        className: "left"
                    }, i.a.createElement(e.icon, {
                        className: "margin ".concat(e.active ? "active" : "")
                    }), i.a.createElement("span", {
                        className: "ciq-icon-text"
                    }, e.text)), e.settingsOnClick && i.a.createElement("span", {
                        className: "ciq-aggregate-setting",
                        onClick: function() {
                            return h(e.id)
                        }
                    }, i.a.createElement(o.N, null)))
                }))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(42),
                o = r(4),
                s = r(3);
            t.a = Object(o.a)(function(e) {
                var t = e.studies,
                    r = e.chart;
                return {
                    isOpened: t.open,
                    setOpen: t.setOpen,
                    StudyMenu: t.StudyMenu,
                    menuOpen: t.menu.open,
                    StudyCategoricalDisplay: t.StudyCategoricalDisplay,
                    isMobile: r.isMobile,
                    activeStudiesNo: t.activeStudies.data.length
                }
            })(function(t) {
                var r = t.isOpened,
                    n = t.setOpen,
                    o = t.StudyMenu,
                    c = t.menuOpen,
                    l = t.StudyCategoricalDisplay,
                    u = t.isMobile,
                    h = t.activeStudiesNo,
                    d = t.searchInputClassName;
                return i.a.createElement(o, {
                    className: "ciq-studies",
                    isOpened: r,
                    setOpen: n,
                    isMobile: u,
                    title: u ? e.translate("Indicators") : ""
                }, i.a.createElement(o.Title, null, i.a.createElement(s.y, {
                    className: "ic-icon-with-sub ".concat(c ? "active" : ""),
                    "tooltip-title": e.translate("Indicators")
                }), i.a.createElement(a.a, {
                    notificationCount: h
                })), i.a.createElement(o.Body, null, i.a.createElement(l, {
                    searchInputClassName: d
                })))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4),
                o = r(42),
                s = r(3);
            t.a = Object(a.a)(function(e) {
                var t = e.comparison,
                    r = e.chart;
                return {
                    ComparisonSelector: t.ComparisonSelector,
                    ComparisonMenu: t.ComparisonMenu,
                    menuOpen: t.menu.open,
                    isMobile: r.isMobile,
                    activeComparisonsNo: t.comparisonSymbols.length
                }
            })(function(t) {
                var r = t.ComparisonSelector,
                    n = t.ComparisonMenu,
                    a = t.menuOpen,
                    c = t.isMobile,
                    l = t.activeComparisonsNo,
                    u = t.searchInputClassName;
                return i.a.createElement(n, {
                    className: "cq-comparison-new cq-symbols-display",
                    isMobile: c,
                    title: c ? e.translate("Comparison") : ""
                }, i.a.createElement(n.Title, null, i.a.createElement(s.k, {
                    className: "ic-icon-with-sub ".concat(a ? "active" : ""),
                    "tooltip-title": e.translate("Comparison")
                }), i.a.createElement(o.a, {
                    notificationCount: l
                })), i.a.createElement(n.Body, null, i.a.createElement(r, {
                    searchInputClassName: u
                })))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(14),
                o = r.n(a),
                s = r(4),
                c = r(43),
                l = r(3),
                u = (r(119), function(e) {
                    var t = e.view,
                        r = e.remove,
                        n = e.onClick;
                    return i.a.createElement("div", {
                        className: "ciq-list-item",
                        onClick: n
                    }, i.a.createElement("span", {
                        className: "ciq-list-item-text"
                    }, t.name), i.a.createElement(l.p, {
                        onClick: r
                    }))
                });
            t.a = Object(s.a)(function(e) {
                var t = e.view;
                return {
                    ViewsMenu: t.ViewsMenu,
                    views: c.a.views,
                    routes: t.routes,
                    onOverwrite: t.onOverwrite,
                    onCancel: t.onCancel,
                    onChange: t.onChange,
                    remove: t.remove,
                    onSubmit: t.onSubmit,
                    applyLayout: t.applyLayout,
                    menuOpen: t.menu.dialog.open,
                    inputRef: t.inputRef,
                    currentRoute: t.currentRoute,
                    templateName: t.templateName
                }
            })(function(t) {
                var r = t.ViewsMenu,
                    n = t.menuOpen,
                    a = t.views,
                    s = t.currentRoute,
                    c = t.routes,
                    h = c.add,
                    d = c.main,
                    p = c.overwrite,
                    f = c.cancel,
                    m = t.onChange,
                    y = t.onSubmit,
                    b = t.applyLayout,
                    g = t.remove,
                    v = t.inputRef,
                    w = t.templateName,
                    S = t.searchInputClassName;
                return i.a.createElement(r, {
                    className: "ciq-views",
                    title: e.translate("Templates")
                }, i.a.createElement(r.Title, {
                    className: "cq-menu-btn"
                }, i.a.createElement(l.R, {
                    className: "ic-icon-with-sub ".concat(n ? "active" : ""),
                    "tooltip-title": e.translate("Templates")
                })), i.a.createElement(r.Body, null, i.a.createElement("div", {
                    className: "content"
                }, "overwrite" !== s ? "" : i.a.createElement("div", {
                    className: "ovrwrit-alrt"
                }, i.a.createElement("div", {
                    className: "ovrwrit-alrt-title"
                }, i.a.createElement(l.W.warning, null), i.a.createElement("span", null, w + e.translate(" already exists.")), i.a.createElement("span", null, e.translate("Would you like to overwrite it?"))), i.a.createElement("div", {
                    className: "ovrwrit-alrt-buttons"
                }, i.a.createElement("div", {
                    onClick: d
                }, e.translate("CANCEL")), i.a.createElement("div", {
                    onClick: p
                }, e.translate("OVERWRITE")))), i.a.createElement("div", {
                    className: "template-name"
                }, "add" === s ? i.a.createElement("span", {
                    className: "add"
                }, i.a.createElement(l.d, {
                    onClick: f
                }), i.a.createElement("input", {
                    ref: v,
                    className: "view-input ".concat(S || ""),
                    value: w,
                    placeholder: e.translate("Template name"),
                    maxLength: 20,
                    onChange: m,
                    onKeyUp: y
                })) : i.a.createElement("span", {
                    className: "add-new",
                    onClick: d
                }, " ", e.translate("Add new"), " "), i.a.createElement("span", {
                    className: "icon"
                }, "add" === s ? i.a.createElement(l.S, {
                    className: "tick-icon",
                    onClick: h
                }) : i.a.createElement(l.b, {
                    className: "add-icon",
                    onClick: d
                }))), i.a.createElement(o.a, {
                    className: "ciq-list"
                }, a.map(function(e, t) {
                    return i.a.createElement(u, {
                        view: e,
                        key: e.name,
                        onClick: function(e) {
                            return b(t, e)
                        },
                        remove: function(e) {
                            return g(t, e)
                        }
                    })
                })))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4),
                o = r(3),
                s = r(10);
            t.a = Object(a.a)(function(e) {
                var t = e.crosshair;
                return {
                    toggleState: function() {
                        return t.toggleState()
                    },
                    state: "number" != typeof t.state ? 0 : t.state
                }
            })(function(t) {
                var r = t.toggleState,
                    n = t.state,
                    a = [o.l, o.m, o.n][n];
                return i.a.createElement("div", {
                    className: "ciq-menu cq-crosshair-toggle"
                }, i.a.createElement("div", {
                    className: "cq-menu-btn"
                }, i.a.createElement(s.i, {
                    active: 0 !== n,
                    onChange: r
                }, i.a.createElement(a, {
                    className: "ic-icon-with-sub",
                    "tooltip-title": e.translate("Crosshair")
                }))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4);
            r(123);
            t.a = Object(a.a)(function(e) {
                var t = e.timeperiod;
                return {
                    chartId: e.state.chartId,
                    timeUnit: t.timeUnit,
                    interval: t.interval,
                    interval_display: t.interval_display,
                    isMobile: t.mainStore.chart.isMobile,
                    onChange: t.setGranularity,
                    setOpen: t.menu.setOpen,
                    TimePeriodMenu: t.TimePeriodMenu,
                    timeUnit_display: t.timeUnit_display,
                    updateProps: t.updateProps
                }
            })(function(t) {
                var r = t.chartId,
                    n = t.enabled,
                    a = t.interval,
                    o = t.timeUnit,
                    s = t.interval_display,
                    c = t.isMobile,
                    l = t.onChange,
                    u = t.setOpen,
                    h = t.TimePeriodMenu,
                    d = t.timeUnit_display,
                    p = function(e) {
                        l(e, r), u(!1)
                    };
                return (0, t.updateProps)(l), i.a.createElement(h, {
                    className: "ciq-period",
                    enabled: n,
                    title: c ? e.translate("Interval") : ""
                }, i.a.createElement(h.Title, null, i.a.createElement("div", {
                    className: "bt-priod"
                }, i.a.createElement("span", {
                    className: "ic-priod"
                }, i.a.createElement("span", {
                    className: "interval_display"
                }, s), i.a.createElement("span", {
                    className: "unit_display"
                }, d)), i.a.createElement("br", null), i.a.createElement("span", {
                    className: "ic-subtitle"
                }, e.translate("Interval")))), i.a.createElement(h.Body, null, i.a.createElement("div", {
                    className: "cq-interval"
                }, i.a.createElement("div", {
                    className: "timeUnit"
                }, i.a.createElement("span", {
                    className: "tick" === o ? "selected" : ""
                }, e.translate("Tick")), i.a.createElement("span", {
                    className: "minute" === o ? "selected" : ""
                }, e.translate("Minute")), i.a.createElement("span", {
                    className: "hour" === o ? "selected" : ""
                }, e.translate("Hour")), i.a.createElement("span", {
                    className: "day" === o ? "selected" : ""
                }, e.translate("Day"))), i.a.createElement("div", {
                    className: "interval"
                }, i.a.createElement("div", {
                    className: "row"
                }, i.a.createElement("span", {
                    onClick: function() {
                        return p(0)
                    },
                    className: "tick" === o && 1 === a ? "selected" : ""
                }, "1")), i.a.createElement("div", {
                    className: "row"
                }, i.a.createElement("span", {
                    onClick: function() {
                        return p(60)
                    },
                    className: "minute" === o && 1 === a ? "selected" : ""
                }, "1"), i.a.createElement("span", {
                    onClick: function() {
                        return p(120)
                    },
                    className: 2 === a ? "selected" : ""
                }, "2"), i.a.createElement("span", {
                    onClick: function() {
                        return p(180)
                    },
                    className: 3 === a ? "selected" : ""
                }, "3"), i.a.createElement("span", {
                    onClick: function() {
                        return p(300)
                    },
                    className: 5 === a ? "selected" : ""
                }, "5"), i.a.createElement("span", {
                    onClick: function() {
                        return p(600)
                    },
                    className: 10 === a ? "selected" : ""
                }, "10"), i.a.createElement("span", {
                    onClick: function() {
                        return p(900)
                    },
                    className: 15 === a ? "selected" : ""
                }, "15"), i.a.createElement("span", {
                    onClick: function() {
                        return p(1800)
                    },
                    className: 30 === a ? "selected" : ""
                }, "30")), i.a.createElement("div", {
                    className: "row"
                }, i.a.createElement("span", {
                    onClick: function() {
                        return p(3600)
                    },
                    className: 60 === a ? "selected" : ""
                }, "1"), i.a.createElement("span", {
                    onClick: function() {
                        return p(7200)
                    },
                    className: 120 === a ? "selected" : ""
                }, "2"), i.a.createElement("span", {
                    onClick: function() {
                        return p(14400)
                    },
                    className: 240 === a ? "selected" : ""
                }, "4"), i.a.createElement("span", {
                    onClick: function() {
                        return p(28800)
                    },
                    className: 480 === a ? "selected" : ""
                }, "8")), i.a.createElement("div", {
                    className: "row"
                }, i.a.createElement("span", {
                    onClick: function() {
                        return p(86400)
                    },
                    className: "day" === o ? "selected" : ""
                }, "1"))))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(3),
                o = (r(125), r(4));
            t.a = Object(o.a)(function(e) {
                var t = e.chartSize;
                return {
                    zoomIn: t.zoomIn,
                    zoomOut: t.zoomOut
                }
            })(function(t) {
                var r = t.zoomIn,
                    n = t.zoomOut;
                return i.a.createElement("div", {
                    className: "ciq-menu cq-chart-size"
                }, i.a.createElement("div", {
                    className: "cq-menu-btn"
                }, i.a.createElement(a.V, {
                    className: "ic-icon-with-sub cq-zoom-out",
                    "tooltip-title": e.translate("Zoom out"),
                    onClick: n
                })), i.a.createElement("div", {
                    className: "cq-menu-btn"
                }, i.a.createElement(a.U, {
                    className: "ic-icon-with-sub cq-zoom-in",
                    "tooltip-title": e.translate("Zoom in"),
                    onClick: r
                })))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(14),
                o = r.n(a),
                s = r(4),
                c = r(3);
            r(127);
            t.a = Object(s.a)(function(e) {
                var t = e.drawTools;
                return {
                    clearAll: t.clearAll,
                    selectTool: t.selectTool,
                    DrawToolsMenu: t.DrawToolsMenu,
                    menuOpen: t.menu.open,
                    drawToolsItems: t.drawToolsItems
                }
            })(function(t) {
                var r = t.clearAll,
                    n = t.selectTool,
                    a = t.DrawToolsMenu,
                    s = t.menuOpen,
                    l = t.drawToolsItems;
                return i.a.createElement(a, {
                    className: "ciq-draw-tools",
                    title: e.translate("Draw tools")
                }, i.a.createElement(a.Title, null, i.a.createElement(c.s, {
                    className: "ic-icon-with-sub ".concat(s ? "active" : ""),
                    "tooltip-title": e.translate("Draw tools")
                })), i.a.createElement(a.Body, null, i.a.createElement("div", {
                    className: "body"
                }, i.a.createElement(o.a, {
                    autoHeight: !0,
                    autoHeightMax: 260,
                    className: "ciq-list"
                }, i.a.createElement("div", {
                    className: "cq-draw-buttons"
                }, i.a.createElement("div", {
                    className: "cq-draw-button",
                    onClick: r
                }, i.a.createElement(c.h, null), i.a.createElement("span", null, e.translate("Clear All"))), i.a.createElement("div", {
                    className: "cq-draw-button",
                    onClick: function() {
                        return n("measure")
                    },
                    style: {
                        display: "none"
                    }
                }, i.a.createElement(c.E, null), i.a.createElement("span", null, e.translate("Measure")))), l.map(function(e) {
                    return i.a.createElement("div", {
                        key: e.id,
                        className: "ciq-list-item",
                        onClick: function() {
                            return n(e.id)
                        }
                    }, e.text)
                })))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4),
                o = r(3);
            r(131);
            t.a = Object(a.a)(function(e) {
                var t = e.share;
                return {
                    ShareMenu: t.ShareMenu,
                    menuOpen: t.menu.dialog.open,
                    downloadPNG: t.downloadPNG,
                    downloadCSV: t.downloadCSV,
                    isLoadingPNG: t.isLoadingPNG
                }
            })(function(t) {
                var r = t.ShareMenu,
                    n = t.menuOpen,
                    a = t.downloadCSV,
                    s = t.downloadPNG,
                    c = t.isLoadingPNG;
                return i.a.createElement(r, {
                    className: "cq-download",
                    title: e.translate("Download Chart")
                }, i.a.createElement(r.Title, null, i.a.createElement(o.r, {
                    className: "ic-icon-with-sub ".concat(n ? "active" : ""),
                    "tooltip-title": e.translate("Download")
                })), i.a.createElement(r.Body, null, i.a.createElement("div", {
                    className: "body"
                }, i.a.createElement("div", {
                    className: "content"
                }, i.a.createElement("div", {
                    className: "ciq-list ciq-list-download"
                }, i.a.createElement("div", {
                    className: "ciq-list-item",
                    onClick: s
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Download as PNG"), c && i.a.createElement("span", {
                    className: "cq-loading"
                })), i.a.createElement(o.G, null)), i.a.createElement("div", {
                    className: "ciq-list-item",
                    onClick: a
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Download as CSV")), i.a.createElement(o.o, null)))))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(4),
            o = r(3),
            s = (r(140), function(e) {
                var t = e.item,
                    r = e.AnimatedPrice,
                    n = e.onDeleteItem;
                return i.a.createElement("div", {
                    className: "cq-comparison-item"
                }, i.a.createElement("span", {
                    className: "left"
                }, i.a.createElement("span", {
                    className: "cq-comparison-swatch",
                    style: {
                        backgroundColor: t.color
                    }
                }), i.a.createElement("span", {
                    className: "cq-comparison-label"
                }, t.symbolObject.name)), i.a.createElement("span", {
                    className: "right"
                }, i.a.createElement(r, null), i.a.createElement(o.p, {
                    className: "ciq-close",
                    onClick: function() {
                        return n(t.symbolObject)
                    }
                })))
            });
        t.a = Object(a.a)(function(e) {
            var t = e.comparisonList;
            return {
                comparisonSymbols: t.comparisonSymbols,
                animatedPrices: t.animatedPrices,
                onDeleteItem: t.onDeleteItem
            }
        })(function(e) {
            var t = e.comparisonSymbols,
                r = e.animatedPrices,
                n = e.onDeleteItem;
            return i.a.createElement("div", {
                className: "cq-comparison"
            }, t.map(function(e, t) {
                return i.a.createElement(s, {
                    key: e.symbolObject.symbol,
                    item: e,
                    onDeleteItem: n,
                    AnimatedPrice: r[t]
                })
            }))
        })
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4);
            r(142);
            t.a = Object(a.a)(function(e) {
                var t = e.chartTitle,
                    r = e.chart;
                return {
                    chartId: e.state.chartId,
                    ChartTitleMenu: t.ChartTitleMenu,
                    currentSymbol: t.currentSymbol,
                    isMobile: r.isMobile,
                    MarketSelector: t.MarketSelector,
                    onChange: t.setSymbol,
                    setMenuOpen: t.menu.setOpen,
                    SymbolSelectButton: t.SymbolSelectButton
                }
            })(function(t) {
                var r = t.chartId,
                    n = t.ChartTitleMenu,
                    a = t.currentSymbol,
                    o = t.enabled,
                    s = t.isMobile,
                    c = t.MarketSelector,
                    l = t.onChange,
                    u = t.SymbolSelectButton,
                    h = t.setMenuOpen,
                    d = t.searchInputClassName;
                return a ? i.a.createElement(n, {
                    enabled: o,
                    className: "cq-chart-title stx-show cq-symbols-display",
                    isFullscreen: !0,
                    title: s ? e.translate("Underlying Assets") : ""
                }, i.a.createElement(n.Title, null, i.a.createElement(u, null)), i.a.createElement(n.Body, null, i.a.createElement(c, {
                    searchInputClassName: d,
                    onSelectItem: function(e) {
                        e.symbol !== a.symbol && l(e.symbol, r), h(!1)
                    }
                }))) : null
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4);
            r(144);
            t.a = Object(a.a)(function(e) {
                var t = e.assetInformation;
                return {
                    price: t.price,
                    open: t.open,
                    close: t.close,
                    high: t.high,
                    low: t.low,
                    visible: t.visible
                }
            })(function(t) {
                var r = t.price,
                    n = t.open,
                    a = t.close,
                    o = t.high,
                    s = t.low,
                    c = t.visible;
                return i.a.createElement("div", {
                    className: "ciq-asset-information ".concat(c ? "" : "hide")
                }, r && i.a.createElement("div", null, " ", i.a.createElement("div", null, e.translate("SPOT"), ":"), " ", i.a.createElement("div", null, r), " "), n && i.a.createElement("div", null, " ", i.a.createElement("div", null, e.translate("OPEN"), ":"), " ", i.a.createElement("div", null, n), " "), a && i.a.createElement("div", null, " ", i.a.createElement("div", null, e.translate("CLOSE"), ":"), " ", i.a.createElement("div", null, a), " "), o && i.a.createElement("div", null, " ", i.a.createElement("div", null, e.translate("HIGH"), ":"), " ", i.a.createElement("div", null, o), " "), s && i.a.createElement("div", null, " ", i.a.createElement("div", null, e.translate("LOW"), ":"), " ", i.a.createElement("div", null, s), " "))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(4);
        t.a = Object(a.a)(function(e) {
            var t = e.currentSpot;
            return {
                left: t.left,
                top: t.top,
                show: t.show
            }
        })(function(e) {
            var t = e.left,
                r = e.top;
            return e.show && i.a.createElement("span", {
                className: "cq-spot",
                style: {
                    top: r,
                    left: t
                }
            })
        })
    }, function(e, t, r) {
        "use strict";
        var n, i, a, o, s, c, l, u, h, d, p, f, m, y, b = r(0),
            g = r.n(b),
            v = r(4),
            w = r(1),
            S = r(13),
            k = r.n(S);

        function x(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function C(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function O(e, t, r) {
            return t && C(e.prototype, t), r && C(e, r), e
        }

        function E(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var T, P, _, D, j, A, N = (n = w.action.bound, i = w.action.bound, a = w.action.bound, o = w.action.bound, s = w.action.bound, l = E((c = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._relative = !1, x(this, "draggable", l, this), x(this, "isDragging", u, this), x(this, "visible", h, this), x(this, "top", d, this), x(this, "_price", p, this), x(this, "zIndex", f, this), x(this, "offScreen", m, this), x(this, "uncentered", y, this), this.onContextReady = function() {
                    r._injectionId = r.stx.append("draw", r._draw.bind(r))
                }, this.init = function() {
                    var e = function(e, t) {
                        r.visible && r.draggable && t.call(r, e)
                    };
                    CIQ.safeDrag(r._line, function(t) {
                        return e(t, r._startDrag)
                    }, function(t) {
                        return e(t, r._dragLine)
                    }, function(t) {
                        return e(t, r._endDrag)
                    })
                }, this.connect = Object(v.a)(function() {
                    return {
                        priceDisplay: r.priceDisplay,
                        visible: r.visible,
                        setDragLine: r.setDragLine,
                        className: r.className,
                        draggable: r.draggable,
                        isDragging: r.isDragging,
                        init: r.init,
                        zIndex: r.zIndex,
                        offScreen: r.offScreen,
                        uncentered: r.uncentered,
                        top: r.top
                    }
                }), this.mainStore = t, this._emitter = new k.a({
                    emitDelay: 0
                }), Object(w.when)(function() {
                    return r.context
                }, this.onContextReady)
            }
            return O(e, [{
                key: "pip",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol.decimal_places
                }
            }]), O(e, [{
                key: "destructor",
                value: function() {
                    this.stx.removeInjection(this._injectionId)
                }
            }, {
                key: "setDragLine",
                value: function(e) {
                    this._line = e, this._line && this._draw()
                }
            }, {
                key: "_modalBegin",
                value: function() {
                    this.stx.grabbingScreen || (this.stx.editingAnnotation = !0, this.stx.modalBegin())
                }
            }, {
                key: "_modalEnd",
                value: function() {
                    this.stx.modalEnd(), this.stx.editingAnnotation = !1
                }
            }, {
                key: "_startDrag",
                value: function() {
                    this._modalBegin(), this.isDragging = !0, this._initialPosition = this.top, this._startDragPrice = this._price
                }
            }, {
                key: "_dragLine",
                value: function(e) {
                    if (this._line) {
                        var t = this._initialPosition + e.displacementY + 2,
                            r = this._priceFromLocation(t);
                        this._priceConstrainer && (r = this._priceConstrainer(r)), this.relative && (r -= this.stx.currentQuote().Close), this.price = r
                    }
                }
            }, {
                key: "_endDrag",
                value: function() {
                    this._modalEnd(), this.isDragging = !1, this._startDragPrice.toFixed(this.pip) !== this._price.toFixed(this.pip) && this._emitter.emit(e.EVENT_DRAG_RELEASED, this._price)
                }
            }, {
                key: "_locationFromPrice",
                value: function(e) {
                    return this.stx.pixelFromPrice(e, this.chart.panel) - this.chart.panel.top
                }
            }, {
                key: "_priceFromLocation",
                value: function(e) {
                    return this.stx.valueFromPixel(e + this.chart.panel.top, this.chart.panel)
                }
            }, {
                key: "_updateTop",
                value: function() {
                    if (null !== this.stx.currentQuote()) {
                        var e = this._locationFromPrice(this.realPrice);
                        e < 0 ? (this.uncentered = !0, e < -2 && (this.offScreen = !0), e = 0) : e + 4 > this.chart.panel.height ? (this.uncentered = !0, e + 4 - this.chart.panel.height > 2 && (this.offScreen = !0), e = this.chart.panel.height - 4) : (this.uncentered = !1, this.offScreen = !1), this.top = 0 | Math.round(e)
                    }
                }
            }, {
                key: "_draw",
                value: function() {
                    this.visible && this._line && this._updateTop()
                }
            }, {
                key: "onPriceChanged",
                value: function(t) {
                    this._emitter.on(e.EVENT_PRICE_CHANGED, t)
                }
            }, {
                key: "onDragReleased",
                value: function(t) {
                    this._emitter.on(e.EVENT_DRAG_RELEASED, t)
                }
            }, {
                key: "priceDisplay",
                get: function() {
                    var e = this._price.toFixed(this.pip);
                    return this.relative && this._price > 0 && (e = "+".concat(e)), e
                }
            }, {
                key: "price",
                get: function() {
                    return this._price
                },
                set: function(t) {
                    t !== this._price && (this._price = t, this._draw(), this._emitter.emit(e.EVENT_PRICE_CHANGED, this._price))
                }
            }, {
                key: "relative",
                get: function() {
                    return this._relative
                },
                set: function(e) {
                    if (this._relative !== e) {
                        this._relative = e;
                        var t = this.stx.currentQuote(),
                            r = t ? t.Close : 0;
                        this._relative && (r = -r), this.price = this._price + r
                    }
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "chart",
                get: function() {
                    return this.stx.chart
                }
            }, {
                key: "priceConstrainer",
                set: function(e) {
                    this._priceConstrainer = e
                }
            }, {
                key: "realPrice",
                get: function() {
                    return this.relative ? this.stx.currentQuote().Close + this._price : this._price
                }
            }], [{
                key: "EVENT_PRICE_CHANGED",
                get: function() {
                    return "EVENT_PRICE_CHANGED"
                }
            }, {
                key: "EVENT_DRAG_RELEASED",
                get: function() {
                    return "EVENT_DRAG_RELEASED"
                }
            }]), e
        }()).prototype, "draggable", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }), u = E(c.prototype, "isDragging", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), h = E(c.prototype, "visible", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }), d = E(c.prototype, "top", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), p = E(c.prototype, "_price", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), f = E(c.prototype, "zIndex", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), m = E(c.prototype, "offScreen", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), y = E(c.prototype, "uncentered", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), E(c.prototype, "pip", [w.computed], Object.getOwnPropertyDescriptor(c.prototype, "pip"), c.prototype), E(c.prototype, "priceDisplay", [w.computed], Object.getOwnPropertyDescriptor(c.prototype, "priceDisplay"), c.prototype), E(c.prototype, "setDragLine", [n], Object.getOwnPropertyDescriptor(c.prototype, "setDragLine"), c.prototype), E(c.prototype, "_startDrag", [i], Object.getOwnPropertyDescriptor(c.prototype, "_startDrag"), c.prototype), E(c.prototype, "_dragLine", [a], Object.getOwnPropertyDescriptor(c.prototype, "_dragLine"), c.prototype), E(c.prototype, "_endDrag", [o], Object.getOwnPropertyDescriptor(c.prototype, "_endDrag"), c.prototype), E(c.prototype, "_updateTop", [s], Object.getOwnPropertyDescriptor(c.prototype, "_updateTop"), c.prototype), c);

        function I(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function z(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var L = (P = z((T = function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), I(this, "top", P, this), I(this, "bottom", _, this), I(this, "visible", D, this), I(this, "className", j, this), I(this, "right", A, this), this.connect = Object(v.a)(function() {
                    return {
                        top: r.top,
                        bottom: r.bottom,
                        visible: r.visible,
                        className: r.className,
                        right: r.right
                    }
                }), this.className = t
            }).prototype, "top", [w.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), _ = z(T.prototype, "bottom", [w.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), D = z(T.prototype, "visible", [w.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), j = z(T.prototype, "className", [w.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), A = z(T.prototype, "right", [w.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), T),
            M = r(11);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function H(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function B(e, t) {
            return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function F(e) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function q(e, t) {
            return (q = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var U, V, W, Q, G, K, Y, X, J, Z, $, ee, te, re, ne, ie = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), B(this, F(t).apply(this, arguments))
                }
                return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && q(e, t)
                    }(t, b["Component"]),
                    function(e, t, r) {
                        t && H(e.prototype, t), r && H(e, r)
                    }(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.init()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.top,
                                r = e.className,
                                n = e.draggable,
                                i = e.isDragging,
                                a = e.priceDisplay,
                                o = e.setDragLine,
                                s = e.visible,
                                c = e.zIndex,
                                l = e.uncentered,
                                u = e.offScreen,
                                h = e.lineStyle,
                                d = e.color,
                                p = e.foregroundColor,
                                f = e.width;
                            return g.a.createElement("div", {
                                className: "chart-line horizontal ".concat(n ? "draggable" : "", " ").concat(i ? "dragging" : "", " ").concat(r || ""),
                                style: {
                                    top: t,
                                    zIndex: c,
                                    color: p,
                                    borderColor: d
                                },
                                ref: o,
                                hidden: !s,
                                uncentered: l ? "true" : void 0,
                                "off-screen": u ? "true" : void 0
                            }, g.a.createElement("div", {
                                className: "drag-line",
                                style: {
                                    borderTopStyle: h
                                }
                            }), g.a.createElement("div", {
                                className: "draggable-area"
                            }), g.a.createElement("div", {
                                className: "drag-price",
                                style: {
                                    backgroundColor: d,
                                    width: f
                                }
                            }, g.a.createElement("div", {
                                className: "price"
                            }, a)))
                        }
                    }]), t
            }(),
            ae = function(e) {
                var t = e.top,
                    r = e.bottom,
                    n = e.visible,
                    i = e.className,
                    a = e.right;
                return g.a.createElement("div", {
                    className: "shade ".concat(i || "", " ").concat(n ? "" : "hidden"),
                    style: {
                        top: t,
                        bottom: r,
                        right: a
                    }
                })
            },
            oe = r(5);

        function se(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function ce(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function le(e, t, r) {
            return t && ce(e.prototype, t), r && ce(e, r), e
        }

        function ue(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var he = (U = w.action.bound, V = w.action.bound, W = w.action.bound, Q = w.action.bound, K = ue((G = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), se(this, "shadeColor", K, this), se(this, "color", Y, this), se(this, "foregroundColor", X, this), se(this, "isBetweenShadeVisible", J, this), se(this, "isTopShadeVisible", Z, this), se(this, "isBottomShadeVisible", $, this), se(this, "hidePriceLines", ee, this), se(this, "lineStyle", te, this), se(this, "isInitialized", re, this), se(this, "initializePromise", ne, this), this._shadeState = void 0, this._onBarrierChange = null, this._fireOnBarrierChange = function() {
                    var e = r._high_barrier.visible ? +r._high_barrier.price.toFixed(r.pip) : void 0,
                        t = r._low_barrier.visible ? +r._low_barrier.price.toFixed(r.pip) : void 0;
                    r._onBarrierChange && r._onBarrierChange({
                        high: e,
                        low: t
                    })
                }, this.mainStore = t, this._high_barrier = new N(this.mainStore), this._low_barrier = new N(this.mainStore), this._high_barrier.onPriceChanged(this._drawShadedArea), this._low_barrier.onPriceChanged(this._drawShadedArea), this._high_barrier.onDragReleased(this._fireOnBarrierChange), this._low_barrier.onDragReleased(this._fireOnBarrierChange), this._injectionId = this.stx.append("draw", this._drawShadedArea), this._setupConstrainBarrierPrices(), this._listenerId = this.stx.addEventListener("newChart", this.init), this.aboveShadeStore = new L("top-shade"), this.betweenShadeStore = new L("between-shade"), this.belowShadeStore = new L("bottom-shade"), this.AboveShade = this.aboveShadeStore.connect(ae), this.BetweenShade = this.betweenShadeStore.connect(ae), this.BelowShade = this.belowShadeStore.connect(ae), this.shadeState = e.SHADE_NONE_SINGLE, this.context && this.stx.currentQuote() && this.init(), this.HighPriceLine = this._high_barrier.connect(ie), this.LowPriceLine = this._low_barrier.connect(ie)
            }
            return le(e, [{
                key: "pip",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol.decimal_places
                }
            }, {
                key: "yAxisWidth",
                get: function() {
                    return this.mainStore.chart.yAxiswidth
                }
            }, {
                key: "priceLabelWidth",
                get: function() {
                    return this.yAxisWidth + 1
                }
            }], [{
                key: "SHADE_NONE_SINGLE",
                get: function() {
                    return "SHADE_NONE_SINGLE"
                }
            }, {
                key: "SHADE_NONE_DOUBLE",
                get: function() {
                    return "SHADE_NONE_DOUBLE"
                }
            }, {
                key: "SHADE_ABOVE",
                get: function() {
                    return "SHADE_ABOVE"
                }
            }, {
                key: "SHADE_BELOW",
                get: function() {
                    return "SHADE_BELOW"
                }
            }, {
                key: "SHADE_BETWEEN",
                get: function() {
                    return "SHADE_BETWEEN"
                }
            }, {
                key: "SHADE_OUTSIDE",
                get: function() {
                    return "SHADE_OUTSIDE"
                }
            }, {
                key: "BARRIER_CHANGED",
                get: function() {
                    return "BARRIER_CHANGED"
                }
            }]), le(e, [{
                key: "init",
                value: function() {
                    this.isInitialized = !0, this.initializePromise.resolve()
                }
            }, {
                key: "setDefaultBarrier",
                value: function() {
                    var e = this.relative ? 0 : this.stx.currentQuote().Close,
                        t = this.chart.yAxis.priceTick;
                    this._high_barrier.price = e + t, this._low_barrier.price = e - t, this._high_barrier._updateTop(), this._low_barrier._updateTop(), this._drawShadedArea()
                }
            }, {
                key: "updateProps",
                value: function(e) {
                    var t = this,
                        r = e.color,
                        n = e.foregroundColor,
                        i = e.shadeColor,
                        a = e.shade,
                        o = e.high,
                        s = e.low,
                        c = e.relative,
                        l = e.draggable,
                        u = e.onChange,
                        h = e.hidePriceLines,
                        d = e.lineStyle;
                    this.initializePromise.then(Object(w.action)(function() {
                        r && (t.color = r), n && (t.foregroundColor = n), i && (t.shadeColor = i), a && (t.shadeState = "SHADE_".concat(a).toUpperCase()), void 0 !== c && (t.relative = c), void 0 !== l && (t.draggable = l), Object(oe.m)(o) && (t.high_barrier = o), Object(oe.m)(s) && (t.low_barrier = s), u && (t.onBarrierChange = u), t.lineStyle = d, t.hidePriceLines = !!h
                    }))
                }
            }, {
                key: "destructor",
                value: function() {
                    this.stx.removeInjection(this._injectionId), this.stx.removeEventListener(this._listenerId), this._high_barrier.destructor(), this._low_barrier.destructor()
                }
            }, {
                key: "_setupConstrainBarrierPrices",
                value: function() {
                    var e = this;
                    this._high_barrier.priceConstrainer = function(t) {
                        var r = e._low_barrier.visible && t < e._low_barrier.realPrice ? e._high_barrier.realPrice : t;
                        return e.mainStore.chart.calculateYaxisWidth(r), r
                    }, this._low_barrier.priceConstrainer = function(t) {
                        var r = t > e._high_barrier.realPrice ? e._low_barrier.realPrice : t;
                        return e.mainStore.chart.calculateYaxisWidth(r), r
                    }
                }
            }, {
                key: "_drawShadedArea",
                value: function() {
                    if (this.isInitialized && (this._optimizeTop(this._low_barrier), this._optimizeTop(this._high_barrier), this._shadeState === e.SHADE_ABOVE ? this._shadeAbove() : this._shadeState === e.SHADE_BELOW ? this._shadeBelow() : this._shadeState === e.SHADE_BETWEEN ? this._shadeBetween() : this._shadeState === e.SHADE_OUTSIDE && this._shadeOutside(), this._low_barrier.visible && this._isBarriersOffScreen())) {
                        var t = 0 === this._high_barrier.top ? null : 101;
                        this._high_barrier.zIndex = t
                    }
                }
            }, {
                key: "_isBarriersOffScreen",
                value: function() {
                    return this._high_barrier.offScreen && this._low_barrier.offScreen
                }
            }, {
                key: "_calcBottomShade",
                value: function(e) {
                    return this.chart.panel.height - e.top
                }
            }, {
                key: "_optimizeTop",
                value: function(e) {
                    e.top + 30 > this.chart.panel.height ? e.top = this.chart.panel.height - 30 : e.top < 10 && (e.top = 10)
                }
            }, {
                key: "_shadeBetween",
                value: function() {
                    var e = this._calcBottomShade(this._low_barrier);
                    this.betweenShadeStore.top = this._high_barrier.top, this.betweenShadeStore.bottom = e, this.betweenShadeStore.right = this.yAxisWidth
                }
            }, {
                key: "_shadeBelow",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._high_barrier;
                    this.belowShadeStore.top = e.top, this.belowShadeStore.bottom = 0, this.belowShadeStore.right = this.yAxisWidth
                }
            }, {
                key: "_shadeAbove",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._high_barrier,
                        t = this._calcBottomShade(e);
                    this.aboveShadeStore.top = 0, this.aboveShadeStore.bottom = t, this.aboveShadeStore.right = this.yAxisWidth
                }
            }, {
                key: "_shadeOutside",
                value: function() {
                    this._shadeAbove(this._high_barrier), this._shadeBelow(this._low_barrier)
                }
            }, {
                key: "high_barrier",
                get: function() {
                    return this._high_barrier.price
                },
                set: function(e) {
                    this._high_barrier.price = e
                }
            }, {
                key: "low_barrier",
                get: function() {
                    return this._low_barrier.price
                },
                set: function(e) {
                    this._low_barrier.price = e
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "chart",
                get: function() {
                    return this.stx.chart
                }
            }, {
                key: "onBarrierChange",
                set: function(e) {
                    this._onBarrierChange !== e && (this._onBarrierChange = e)
                }
            }, {
                key: "shadeState",
                get: function() {
                    return this._shadeState
                },
                set: function(t) {
                    if (this._shadeState !== t) {
                        if (this._shadeState = t, this._shadeState === e.SHADE_NONE_SINGLE || this._shadeState === e.SHADE_NONE_DOUBLE) this.aboveShadeStore.visible = !1, this.betweenShadeStore.visible = !1, this.belowShadeStore.visible = !1;
                        else {
                            var r = this._shadeState === e.SHADE_ABOVE || this._shadeState === e.SHADE_OUTSIDE,
                                n = this._shadeState === e.SHADE_BELOW || this._shadeState === e.SHADE_OUTSIDE,
                                i = this._shadeState === e.SHADE_BETWEEN;
                            this.aboveShadeStore.visible = r, this.betweenShadeStore.visible = i, this.belowShadeStore.visible = n, this._drawShadedArea()
                        }
                        var a = this._shadeState === e.SHADE_OUTSIDE || this._shadeState === e.SHADE_BETWEEN || this._shadeState === e.SHADE_NONE_DOUBLE,
                            o = this._low_barrier.visible;
                        this._low_barrier.visible = a, this.isInitialized && a && !o && this._low_barrier.realPrice >= this._high_barrier.realPrice && (this._low_barrier.price = this._high_barrier.price - this.chart.yAxis.priceTick)
                    }
                }
            }, {
                key: "relative",
                get: function() {
                    return this._high_barrier.relative
                },
                set: function(e) {
                    this._high_barrier.relative = e, this._low_barrier.relative = e
                }
            }, {
                key: "draggable",
                get: function() {
                    return this._high_barrier.draggable
                },
                set: function(e) {
                    this._high_barrier.draggable = e, this._low_barrier.draggable = e
                }
            }]), e
        }()).prototype, "shadeColor", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), Y = ue(G.prototype, "color", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), X = ue(G.prototype, "foregroundColor", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), J = ue(G.prototype, "isBetweenShadeVisible", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), Z = ue(G.prototype, "isTopShadeVisible", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), $ = ue(G.prototype, "isBottomShadeVisible", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), ee = ue(G.prototype, "hidePriceLines", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), te = ue(G.prototype, "lineStyle", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {}
        }), re = ue(G.prototype, "isInitialized", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), ne = ue(G.prototype, "initializePromise", [w.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new M.a
            }
        }), ue(G.prototype, "pip", [w.computed], Object.getOwnPropertyDescriptor(G.prototype, "pip"), G.prototype), ue(G.prototype, "yAxisWidth", [w.computed], Object.getOwnPropertyDescriptor(G.prototype, "yAxisWidth"), G.prototype), ue(G.prototype, "priceLabelWidth", [w.computed], Object.getOwnPropertyDescriptor(G.prototype, "priceLabelWidth"), G.prototype), ue(G.prototype, "init", [U], Object.getOwnPropertyDescriptor(G.prototype, "init"), G.prototype), ue(G.prototype, "updateProps", [V], Object.getOwnPropertyDescriptor(G.prototype, "updateProps"), G.prototype), ue(G.prototype, "destructor", [W], Object.getOwnPropertyDescriptor(G.prototype, "destructor"), G.prototype), ue(G.prototype, "_drawShadedArea", [Q], Object.getOwnPropertyDescriptor(G.prototype, "_drawShadedArea"), G.prototype), G);
        t.a = Object(v.a)(function(e) {
            return {
                HighPriceLine: e.HighPriceLine,
                LowPriceLine: e.LowPriceLine,
                AboveShade: e.AboveShade,
                BetweenShade: e.BetweenShade,
                BelowShade: e.BelowShade,
                shadeColor: e.shadeColor,
                color: e.color,
                foregroundColor: e.foregroundColor,
                hidePriceLines: e.hidePriceLines,
                lineStyle: e.lineStyle,
                isInitialized: e.isInitialized,
                destructor: e.destructor,
                priceLabelWidth: e.priceLabelWidth
            }
        }, he)(function(e) {
            var t = e.shadeColor,
                r = void 0 === t ? "#39b19d" : t,
                n = e.color,
                i = void 0 === n ? "#39b19d" : n,
                a = e.foregroundColor,
                o = void 0 === a ? "#ffffff" : a,
                s = e.HighPriceLine,
                c = e.LowPriceLine,
                l = e.AboveShade,
                u = e.BetweenShade,
                h = e.BelowShade,
                d = e.hidePriceLines,
                p = e.lineStyle,
                f = e.isInitialized,
                m = e.priceLabelWidth;
            return f && g.a.createElement("div", {
                className: "barrier ".concat(d ? "hide-pricelines" : ""),
                style: {
                    "--shade-color": r
                }
            }, g.a.createElement(s, {
                width: m,
                lineStyle: p,
                color: i,
                foregroundColor: o
            }), g.a.createElement(c, {
                width: m,
                lineStyle: p,
                color: i,
                foregroundColor: o
            }), g.a.createElement(l, null), g.a.createElement(u, null), g.a.createElement(h, null))
        })
    }, function(e, t, r) {
        "use strict";
        var n, i, a, o, s, c, l, u, h = r(0),
            d = r.n(h),
            p = r(4),
            f = r(1),
            m = r(5);

        function y(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function b(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function g(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var v = (n = f.action.bound, i = f.action.bound, a = f.action.bound, o = f.action.bound, c = g((s = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.yPositioner = "value", this.xPositioner = "epoch", this.tick = void 0, this.isDistantFuture = void 0, this.className = void 0, this.children = void 0, this.x = void 0, this.y = void 0, y(this, "display", c, this), y(this, "left", l, this), y(this, "bottom", u, this), this.mainStore = t, this.chartStore = t.chart, this.stx = this.mainStore.chart.context.stx, this.chart = this.stx.chart, this.panel = this.chart.panel, this.yAxis = this.panel.yAxis, this.mainStore.chart.feed.onPagination(this.updateMarkerTick), this._listenerId = this.stx.addEventListener("newChart", this.updateMarkerTick), this._injectionId = this.stx.prepend("positionMarkers", this.updateMarkerTick)
            }
            return function(e, t, r) {
                t && b(e.prototype, t), r && b(e, r)
            }(e, [{
                key: "destructor",
                value: function() {
                    this._injectionId && this.stx.removeInjection(this._injectionId), this._listenerId && this.stx.removeEventListener(this._listenerId), this.mainStore.chart.feed && this.mainStore.chart.feed.offPagination(this.updateMarkerTick), this._injectionId = null, this._listenerId = null
                }
            }, {
                key: "updateProps",
                value: function(e) {
                    var t = e.children,
                        r = e.className,
                        n = e.y,
                        i = e.yPositioner,
                        a = e.x,
                        o = e.xPositioner;
                    this.className = r, this.children = t;
                    var s = !1,
                        c = !1;
                    Object(m.p)(this, {
                        x: a,
                        xPositioner: o
                    }, function() {
                        s = !0
                    }), Object(m.p)(this, {
                        y: n,
                        yPositioner: i
                    }, function() {
                        c = !0
                    }), s ? this.updateMarkerTick() : c && this.updateMarkerTick()
                }
            }, {
                key: "updatePosition",
                value: function() {
                    if (this.shouldDrawMarkers && this.stx && this.stx.masterData && !(this.stx.masterData.length <= 0)) {
                        if (this.isDistantFuture && this.chart.xaxis && this.chart.xaxis.length > 0) {
                            var e = this.getDummyMarker();
                            this.stx.futureTickIfDisplayed(e), e.tick && (this.tick = e.tick, this.isDistantFuture = !1)
                        }
                        var t, r = null;
                        if ("none" !== this.xPositioner) {
                            var n = this.getDummyMarker();
                            if ("none" !== this.yPositioner && null === this.tick) return void this.hideMarker();
                            if ("date" === n.params.xPositioner && !this.isDistantFuture && this.stx.masterData[this.tick] && this.stx.masterData[this.tick].DT.valueOf() !== n.params.x.valueOf()) {
                                if ("none" !== this.yPositioner && this.stx.masterData[this.stx.masterData.length - 1].DT.valueOf() < n.params.x.valueOf()) return void this.hideMarker();
                                this.stx.updateChartData({
                                    DT: n.params.x,
                                    Close: null
                                }, null, {
                                    fillGaps: !0
                                }), this.stx.createDataSet(), this.stx.setMarkerTick(n), this.tick = n.tick, "value" !== this.yPositioner && "on_candle" !== this.yPositioner && "top" !== this.yPositioner && (this.yPositioner = "none")
                            }
                            if ("bar" === this.xPositioner && this.x) {
                                if (this.x < this.chart.xaxis.length) {
                                    var i = this.chart.xaxis[this.x];
                                    i && (r = i.data)
                                }
                                t = this.stx.pixelFromBar(this.x, this.chart)
                            } else this.tick < this.stx.chart.dataSet.length && (r = this.stx.chart.dataSet[this.tick]), t = this.stx.pixelFromTick(this.tick, this.chart) - this.chart.left;
                            if (r || (r = this.stx.chart.dataSet[this.stx.chart.dataSet.length - 1]), t < -150 || t > this.chart.width + 150) return void this.hideMarker()
                        }
                        if (this.left = t || null, this.left) {
                            var a, o = this.stx.chart.highLowBars || this.stx.highLowBars[this.stx.layout.chartType],
                                s = this.chart.defaultPlotField;
                            if (s && !o || (s = "Close"), this.yPositioner.indexOf("candle") > -1 && this.left) {
                                var c = this.stx.barFromPixel(this.left, this.chart);
                                c >= 0 && ((r = this.chart.xaxis[c].data) || (r = this.stx.chart.dataSet[this.stx.chart.dataSet.length - 1]))
                            }
                            if ("none" === this.yPositioner.toLowerCase()) return this.bottom = 200 === this.stx.chart.yAxis.initialMarginBottom ? 125 : 20, void this.showMarker();
                            var l = this.panel.yAxis.bottom,
                                u = 0;
                            "value" === this.yPositioner && this.y ? u = l - this.stx.pixelFromPrice(this.y, this.panel, this.yAxis) : "under_candle" === this.yPositioner && r ? (a = r[s], o && (a = this.stx.getBarBounds(r).low), u = l - this.stx.pixelFromPrice(a, this.panel, this.yAxis)) : "on_candle" === this.yPositioner && r ? (a = r[s], o && (a = (r.Low + r.High) / 2), u = l - this.stx.pixelFromPrice(a, this.panel, this.yAxis)) : "top" === this.yPositioner ? u = l : r && (a = r[s], o && (a = this.stx.getBarBounds(r).high), u = l - this.stx.pixelFromPrice(a, this.panel, this.yAxis)), u < 0 || u > l ? this.hideMarker() : (this.bottom = 0 | u, this.showMarker())
                        } else this.hideMarker()
                    }
                }
            }, {
                key: "updateMarkerTick",
                value: function() {
                    var e = this.getDummyMarker();
                    if (this.stx.setMarkerTick(e), this.tick = e.tick, e.params.future) {
                        if (this.isDistantFuture = !0, !this.chart.xaxis || !this.chart.xaxis.length) return void this.hideMarker();
                        this.stx.futureTickIfDisplayed(e), this.tick = e.tick, null !== this.tick && (this.isDistantFuture = !1)
                    }
                    null !== this.tick ? this.updatePosition() : (this.stx.updateChartData({
                        DT: e.params.x,
                        Close: null
                    }, null, {
                        fillGaps: !0
                    }), this.stx.createDataSet(), this.stx.setMarkerTick(e), this.tick = e.tick, null !== this.tick ? ("value" !== this.yPositioner && "on_candle" !== this.yPositioner && "top" !== this.yPositioner && (this.yPositioner = "none"), this.updatePosition()) : this.hideMarker())
                }
            }, {
                key: "getDummyMarker",
                value: function() {
                    var e = this.x,
                        t = this.xPositioner;
                    return "epoch" === this.xPositioner && (t = "date", e = CIQ.strToDateTime(Object(m.k)(e))), {
                        chart: this.chart,
                        params: {
                            x: e,
                            xPositioner: t
                        }
                    }
                }
            }, {
                key: "hideMarker",
                value: function() {
                    this.display = "none"
                }
            }, {
                key: "showMarker",
                value: function() {
                    this.display = void 0
                }
            }, {
                key: "shouldDrawMarkers",
                get: function() {
                    return this.stx.chart.isScrollLocationChanged
                }
            }]), e
        }()).prototype, "display", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), l = g(s.prototype, "left", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), u = g(s.prototype, "bottom", [f.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), g(s.prototype, "shouldDrawMarkers", [f.computed], Object.getOwnPropertyDescriptor(s.prototype, "shouldDrawMarkers"), s.prototype), g(s.prototype, "destructor", [n], Object.getOwnPropertyDescriptor(s.prototype, "destructor"), s.prototype), g(s.prototype, "updateProps", [i], Object.getOwnPropertyDescriptor(s.prototype, "updateProps"), s.prototype), g(s.prototype, "updatePosition", [a], Object.getOwnPropertyDescriptor(s.prototype, "updatePosition"), s.prototype), g(s.prototype, "updateMarkerTick", [o], Object.getOwnPropertyDescriptor(s.prototype, "updateMarkerTick"), s.prototype), s);
        r(163), t.a = Object(p.a)(function(e) {
            return {
                left: e.left,
                bottom: e.bottom,
                children: e.children,
                className: e.className,
                display: e.display
            }
        }, v)(function(e) {
            var t = e.display,
                r = e.left,
                n = e.bottom,
                i = e.children,
                a = e.className;
            return d.a.createElement("div", {
                className: "stx-marker ".concat(a || ""),
                style: {
                    display: t,
                    left: r,
                    bottom: n
                }
            }, i)
        })
    }, function(e, t) {
        e.exports = n
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(3),
            o = r(46),
            s = r(2);

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function u(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var p = function(e) {
            function t(e) {
                var r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (r = u(this, h(t).call(this, e))).store = o.a.getInstance(), r.onFavoriteUpdate = function() {
                    var e = r.props,
                        t = e.category,
                        n = e.id,
                        i = r.isFavorite(t, n);
                    i !== r.state.isFavorite && (r.setState({
                        isFavorite: i
                    }), Object(s.d)(s.b.CategoricalDisplay, s.a.Favorite, "".concat(i ? "Add " : "Remove ", " ").concat(n)))
                }, r.onClick = function(e) {
                    e.stopPropagation(), e.nativeEvent.isHandledByDialog = !0;
                    var t = r.props,
                        n = t.category,
                        i = t.id;
                    r.toggleFavorite(n, i)
                }, r.store.onFavoriteUpdate(r.onFavoriteUpdate), r.isFavorite = r.store.isFavorite, r.toggleFavorite = r.store.toggleFavorite;
                var n = r.props,
                    i = n.category,
                    a = n.id;
                return r.state = {
                    isFavorite: r.isFavorite(i, a)
                }, r
            }
            return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(t, n["Component"]),
                function(e, t, r) {
                    t && l(e.prototype, t), r && l(e, r)
                }(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return this.state.isFavorite !== t.isFavorite
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.store.offFavoriteUpdate(this.onFavoriteUpdate)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.category,
                            r = e.id,
                            n = this.state.isFavorite;
                        return t && r ? i.a.createElement(a.u, {
                            onClick: this.onClick,
                            className: "ciq-favorite ".concat(n ? "ciq-active-favorite" : "")
                        }) : null
                    }
                }]), t
        }();
        t.a = p
    }, function(e, t, r) {
        e.exports = r(146)()
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n);
        t.a = function(e) {
            var t = e.notificationCount;
            return t ? i.a.createElement("span", {
                className: "notification-badge ".concat(t > 9 ? "x2" : "")
            }, t) : null
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return E
        });
        var n, i, a, o, s, c, l, u, h, d, p, f, m, y, b, g = r(1),
            v = r(5),
            w = r(7),
            S = r(8),
            k = r(2);

        function x(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function C(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function O(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var E = (n = g.action.bound, i = g.action.bound, a = g.action.bound, o = g.action.bound, s = g.action.bound, c = g.action.bound, l = g.action.bound, u = g.action.bound, b = y = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), x(this, "templateName", p, this), x(this, "currentRoute", f, this), x(this, "routes", m, this), this.inputRef = function(e) {
                    e && e.focus()
                }, this.mainStore = t, this.menu = new w.a(t, {
                    route: "templates"
                }), this.ViewsMenu = this.menu.connect(S.a)
            }
            return function(e, t, r) {
                t && C(e.prototype, t), r && C(e, r)
            }(e, [{
                key: "onChange",
                value: function(e) {
                    this.templateName = e.target.value
                }
            }, {
                key: "onSubmit",
                value: function(e) {
                    13 === e.keyCode && (this.saveViews(), Object(k.d)(k.b.ChartControl, k.a.Template, "Save Template"))
                }
            }, {
                key: "onCancel",
                value: function() {
                    this.templateName = "", this.updateRoute("main")
                }
            }, {
                key: "updateRoute",
                value: function(e) {
                    this.currentRoute = e
                }
            }, {
                key: "saveViews",
                value: function() {
                    var t = this;
                    if (e.views.some(function(e) {
                            return e.name.toLowerCase() === t.templateName.toLowerCase()
                        })) this.updateRoute("overwrite");
                    else if (this.templateName.length > 0) {
                        this.updateRoute("main");
                        var r = this.stx.exportLayout();
                        e.views.push({
                            name: this.templateName,
                            layout: r
                        }), e.updateLocalStorage(), this.templateName = ""
                    }
                }
            }, {
                key: "overwrite",
                value: function() {
                    var t = this,
                        r = this.stx.exportLayout(),
                        n = e.views.findIndex(function(e) {
                            return e.name.toLowerCase() === t.templateName.toLowerCase()
                        });
                    e.views[n].layout = r, e.views[n].name = this.templateName, e.updateLocalStorage(), this.updateRoute("main"), this.templateName = ""
                }
            }, {
                key: "remove",
                value: function(t, r) {
                    e.views = e.views.filter(function(e, r) {
                        return t !== r
                    }), r.nativeEvent.is_item_removed = !0, e.updateLocalStorage(), Object(k.d)(k.b.ChartControl, k.a.Template, "Remove Template")
                }
            }, {
                key: "applyLayout",
                value: function(t, r) {
                    var n = this;
                    if (!r.nativeEvent.is_item_removed) {
                        this.loader && this.loader.show(), this.mainStore.state.setChartIsReady(!1);
                        var i = this.stx;
                        setTimeout(function() {
                            i.importLayout(e.views[t].layout, {
                                managePeriodicity: !0,
                                preserveTicksAndCandleWidth: !0,
                                cb: function() {
                                    i.changeOccurred("layout"), n.mainStore.studies.updateActiveStudies(), n.loader && n.loader.hide(), n.mainStore.state.setChartIsReady(!0)
                                }
                            });
                            var r = e.views[t].layout.chartType;
                            "mountain" === r && .5 === e.views[t].layout.tension && (r = "spline");
                            n.mainStore.chartType.setType(r), n.menu.setOpen(!1), Object(k.d)(k.b.ChartControl, k.a.Template, "Load Template")
                        }, 100)
                    }
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "loader",
                get: function() {
                    return this.mainStore.loader
                }
            }], [{
                key: "updateLocalStorage",
                value: function() {
                    CIQ.localStorageSetItem("cq-views", JSON.stringify(e.views))
                }
            }]), e
        }(), y.views = Object(v.e)("cq-views") || [], O(h = b, "views", [g.observable], (d = (d = Object.getOwnPropertyDescriptor(h, "views")) ? d.value : void 0, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            initializer: function() {
                return d
            }
        }), h), p = O(h.prototype, "templateName", [g.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }), f = O(h.prototype, "currentRoute", [g.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return "main"
            }
        }), m = O(h.prototype, "routes", [g.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return {
                    add: function() {
                        return e.saveViews()
                    },
                    main: function() {
                        return e.updateRoute("add")
                    },
                    cancel: function() {
                        return e.onCancel()
                    },
                    overwrite: function() {
                        return e.overwrite()
                    }
                }
            }
        }), O(h.prototype, "onChange", [n], Object.getOwnPropertyDescriptor(h.prototype, "onChange"), h.prototype), O(h.prototype, "onSubmit", [i], Object.getOwnPropertyDescriptor(h.prototype, "onSubmit"), h.prototype), O(h.prototype, "onCancel", [a], Object.getOwnPropertyDescriptor(h.prototype, "onCancel"), h.prototype), O(h.prototype, "updateRoute", [o], Object.getOwnPropertyDescriptor(h.prototype, "updateRoute"), h.prototype), O(h.prototype, "saveViews", [s], Object.getOwnPropertyDescriptor(h.prototype, "saveViews"), h.prototype), O(h.prototype, "overwrite", [c], Object.getOwnPropertyDescriptor(h.prototype, "overwrite"), h.prototype), O(h.prototype, "remove", [l], Object.getOwnPropertyDescriptor(h.prototype, "remove"), h.prototype), O(h.prototype, "applyLayout", [u], Object.getOwnPropertyDescriptor(h.prototype, "applyLayout"), h.prototype), h)
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return y
        });
        var n, i, a, o, s, c, l, u = r(1),
            h = r(60),
            d = r.n(h),
            p = r(4);

        function f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function m(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var y = (n = u.action.bound, i = u.action.bound, a = u.action.bound, o = u.action.bound, c = m((s = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e),
                function(e, t, r, n) {
                    r && Object.defineProperty(e, t, {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(this, "open", c, this), this.setOpen = d()(function(e) {
                    r.openDialog(e)
                }, 300, {
                    leading: !0,
                    trailing: !1
                }), this.handleClickOutside = function(e) {
                    var t = !1;
                    "which" in e ? t = 3 === e.which : "button" in e && (t = 2 === e.button), e.isHandledByDialog || t || r.setOpen(!1)
                }, this.closeOnEscape = function(e) {
                    27 === e.keyCode && r.setOpen(!1)
                }, this.connect = Object(p.a)(function() {
                    return {
                        open: r.open,
                        setOpen: r.setOpen,
                        onContainerClick: r.onContainerClick,
                        chartHeight: r.mainStore.chart.chartHeight,
                        chartContainerHeight: r.mainStore.chart.chartContainerHeight,
                        isMobile: r.mainStore.chart.isMobile
                    }
                }), this.mainStore = t, Object(u.when)(function() {
                    return r.context
                }, function() {
                    r.routingStore.registerDialog(r)
                })
            }
            return function(e, t, r) {
                t && f(e.prototype, t), r && f(e, r)
            }(e, [{
                key: "openDialog",
                value: function(e) {
                    this.open !== e && (this.open = e, this.open ? this.register() : this.unregister(), !0 === e ? (l && l.openDialog(!1), l = this) : l = void 0)
                }
            }, {
                key: "register",
                value: function() {
                    document.addEventListener("click", this.handleClickOutside, !1), document.addEventListener("keydown", this.closeOnEscape, !1)
                }
            }, {
                key: "unregister",
                value: function() {
                    document.removeEventListener("click", this.handleClickOutside), document.removeEventListener("keydown", this.closeOnEscape)
                }
            }, {
                key: "onContainerClick",
                value: function(e) {
                    e.nativeEvent.isHandledByDialog = !0
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "routingStore",
                get: function() {
                    return this.mainStore.routing
                }
            }]), e
        }()).prototype, "open", [u.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), m(s.prototype, "openDialog", [n], Object.getOwnPropertyDescriptor(s.prototype, "openDialog"), s.prototype), m(s.prototype, "register", [i], Object.getOwnPropertyDescriptor(s.prototype, "register"), s.prototype), m(s.prototype, "unregister", [a], Object.getOwnPropertyDescriptor(s.prototype, "unregister"), s.prototype), m(s.prototype, "onContainerClick", [o], Object.getOwnPropertyDescriptor(s.prototype, "onContainerClick"), s.prototype), s)
    }, function(e, t) {
        e.exports = i
    }, function(e, t, r) {
        "use strict";
        var n, i, a, o, s, c, l = r(13),
            u = r.n(l),
            h = r(1),
            d = r(5);

        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function f(e, t, r) {
            return t && p(e.prototype, t), r && p(e, r), e
        }

        function m(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var y = (n = h.action.bound, i = h.action.bound, c = s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e),
                function(e, t, r, n) {
                    r && Object.defineProperty(e, t, {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(this, "favoritesMap", o, this), this._emitter = new u.a({
                    emitDelay: 0
                })
            }
            return f(e, null, [{
                key: "getInstance",
                value: function() {
                    return e.instance || (e.instance = new e), e.instance
                }
            }, {
                key: "EVENT_FAVORITES_UPDATE",
                get: function() {
                    return "EVENT_FAVORITES_UPDATE"
                }
            }]), f(e, [{
                key: "onFavoriteUpdate",
                value: function(t) {
                    this._emitter.on(e.EVENT_FAVORITES_UPDATE, t)
                }
            }, {
                key: "offFavoriteUpdate",
                value: function(t) {
                    this._emitter.off(e.EVENT_FAVORITES_UPDATE, t)
                }
            }, {
                key: "isFavorite",
                value: function(e, t) {
                    return t in this.favoritesMap[e]
                }
            }, {
                key: "toggleFavorite",
                value: function(t, r) {
                    var n = this.favoritesMap[t];
                    n[r] ? delete n[r] : n[r] = !0, this._emitter.emit(e.EVENT_FAVORITES_UPDATE, {
                        category: t,
                        id: r,
                        value: n[r] || !1
                    }), this.saveFavorites()
                }
            }, {
                key: "saveFavorites",
                value: function() {
                    var e = {};
                    for (var t in this.favoritesMap) {
                        var r = [];
                        for (var n in this.favoritesMap[t]) r.push(n);
                        e[t] = r
                    }
                    CIQ.localStorageSetItem("cq-favorites", JSON.stringify(e))
                }
            }]), e
        }(), s.instance = void 0, o = m((a = c).prototype, "favoritesMap", [h.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return function() {
                    var e = Object(d.e)("cq-favorites");
                    if (e) {
                        var t = {};
                        for (var r in e) {
                            var n = {},
                                i = !0,
                                a = !1,
                                o = void 0;
                            try {
                                for (var s, c = e[r][Symbol.iterator](); !(i = (s = c.next()).done); i = !0) n[s.value] = !0
                            } catch (e) {
                                a = !0, o = e
                            } finally {
                                try {
                                    i || null == c.return || c.return()
                                } finally {
                                    if (a) throw o
                                }
                            }
                            t[r] = n
                        }
                        return t
                    }
                }() || {
                    indicators: {},
                    "chartTitle&Comparison": {}
                }
            }
        }), m(a.prototype, "isFavorite", [n], Object.getOwnPropertyDescriptor(a.prototype, "isFavorite"), a.prototype), m(a.prototype, "toggleFavorite", [i], Object.getOwnPropertyDescriptor(a.prototype, "toggleFavorite"), a.prototype), a);
        t.a = y
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return p
        });
        var n, i, a, o, s, c = r(1),
            l = r(4);

        function u(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function d(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var p = (n = c.action.bound, a = d((i = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), u(this, "price", a, this), u(this, "isIncrease", o, this), u(this, "status", s, this), this.oldPrice = "", this.connect = Object(l.a)(function() {
                    return {
                        price: t.price,
                        isIncrease: t.isIncrease,
                        status: t.status,
                        className: t.className
                    }
                })
            }
            return function(e, t, r) {
                t && h(e.prototype, t), r && h(e, r)
            }(e, [{
                key: "setPrice",
                value: function(e, t) {
                    var r = t || +this.oldPrice,
                        n = +e,
                        i = !1;
                    if (n > r) i = !0, this.status = "up";
                    else {
                        if (!(n < r)) return void(this.status = "");
                        this.status = "down"
                    }
                    this.price = e, this.oldPrice = this.price, this.isIncrease = i
                }
            }]), e
        }()).prototype, "price", [c.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }), o = d(i.prototype, "isIncrease", [c.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), s = d(i.prototype, "status", [c.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }), d(i.prototype, "setPrice", [n], Object.getOwnPropertyDescriptor(i.prototype, "setPrice"), i.prototype), i)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n);
        t.a = function(e) {
            var t = e.isIncrease,
                r = e.price,
                n = e.className,
                a = "cq-animated-price ".concat(n || "", " ").concat(t ? "cq-up" : "cq-down");
            return i.a.createElement(i.a.Fragment, null, !r && i.a.createElement("span", {
                className: "cq-comparison-loader stx-show"
            }), i.a.createElement("div", {
                className: a
            }, r))
        }
    }, function(e, t, r) {
        "use strict";
        var n, i, a, o, s = r(1),
            c = r(5),
            l = r(11);

        function u(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function h(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function d(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function f(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var m = (n = s.action.bound, a = f((i = function() {
                function e(t, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), d(this, "changes", a, this), d(this, "categorizedSymbols", o, this), this.symbolMap = {}, this.symbolsPromise = new l.a, this.isRetrievingSymbols = !1, this._api = t, this._tradingTimes = r
                }
                return function(e, t, r) {
                    t && p(e.prototype, t), r && p(e, r)
                }(e, [{
                    key: "retrieveActiveSymbols",
                    value: function() {
                        var e = function(e) {
                            return function() {
                                var t = this,
                                    r = arguments;
                                return new Promise(function(n, i) {
                                    var a = e.apply(t, r);

                                    function o(e) {
                                        h(a, n, i, o, s, "next", e)
                                    }

                                    function s(e) {
                                        h(a, n, i, o, s, "throw", e)
                                    }
                                    o(void 0)
                                })
                            }
                        }(regeneratorRuntime.mark(function e() {
                            var t, r, n, i, a, o, c, l, u = this;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isRetrievingSymbols) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, this.symbolsPromise;
                                    case 3:
                                        return e.abrupt("return", this.activeSymbols);
                                    case 4:
                                        return this.isRetrievingSymbols = !0, e.next = 7, this._api.getActiveSymbols();
                                    case 7:
                                        for (t = e.sent, r = t.active_symbols, this.processedSymbols = this._processSymbols(r), this.categorizedSymbols = this._categorizeActiveSymbols(this.processedSymbols), n = !0, i = !1, a = void 0, e.prev = 14, o = this.processedSymbols[Symbol.iterator](); !(n = (c = o.next()).done); n = !0) l = c.value, this.symbolMap[l.symbol] = l;
                                        e.next = 22;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(14), i = !0, a = e.t0;
                                    case 22:
                                        e.prev = 22, e.prev = 23, n || null == o.return || o.return();
                                    case 25:
                                        if (e.prev = 25, !i) {
                                            e.next = 28;
                                            break
                                        }
                                        throw a;
                                    case 28:
                                        return e.finish(25);
                                    case 29:
                                        return e.finish(22);
                                    case 30:
                                        return this._tradingTimes.onMarketOpenCloseChanged(Object(s.action)(function(e) {
                                            for (var t in e) {
                                                var r = u.symbolMap[t];
                                                r && (r.exchange_is_open = e[t])
                                            }
                                            u.changes = e
                                        })), this.symbolsPromise.resolve(), e.abrupt("return", this.activeSymbols);
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [14, 18, 22, 30],
                                [23, , 25, 29]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getSymbolObj",
                    value: function(e) {
                        return this.symbolMap[e]
                    }
                }, {
                    key: "_processSymbols",
                    value: function(e) {
                        var t = [];
                        Object(c.o)(e, function(e, t) {
                            return e.submarket_display_name.localeCompare(t.submarket_display_name)
                        });
                        var r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                                var s = a.value;
                                t.push({
                                    symbol: s.symbol,
                                    name: s.display_name,
                                    market: s.market,
                                    market_display_name: s.market_display_name,
                                    submarket_display_name: s.submarket_display_name,
                                    exchange_is_open: !!s.exchange_is_open,
                                    decimal_places: s.pip.toString().length - 2
                                })
                            }
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                r || null == o.return || o.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        for (var l = ["forex", "indices", "stocks", "commodities", "volidx"], u = [], h = 0; h < l.length; h++)
                            for (var d = l[h], p = 0; p < t.length; p++) {
                                var f = t[p];
                                d === f.market && u.push(f)
                            }
                        return u
                    }
                }, {
                    key: "_categorizeActiveSymbols",
                    value: function(e) {
                        var t = [],
                            r = e[0],
                            n = function(e) {
                                return {
                                    subcategoryName: e.submarket_display_name,
                                    data: []
                                }
                            },
                            i = function(e) {
                                return {
                                    categoryName: e.market_display_name,
                                    categoryId: e.market,
                                    hasSubcategory: !0,
                                    data: []
                                }
                            },
                            a = n(r),
                            o = i(r),
                            s = !0,
                            c = !1,
                            l = void 0;
                        try {
                            for (var u, h = e[Symbol.iterator](); !(s = (u = h.next()).done); s = !0) {
                                var d = u.value;
                                o.categoryName !== d.market_display_name && (o.data.push(a), t.push(o), a = n(d), o = i(d)), a.subcategoryName !== d.submarket_display_name && (o.data.push(a), a = n(d)), a.data.push({
                                    enabled: !0,
                                    itemId: d.symbol,
                                    display: d.name,
                                    dataObject: d
                                })
                            }
                        } catch (e) {
                            c = !0, l = e
                        } finally {
                            try {
                                s || null == h.return || h.return()
                            } finally {
                                if (c) throw l
                            }
                        }
                        return o.data.push(a), t.push(o), t
                    }
                }, {
                    key: "activeSymbols",
                    get: function() {
                        var e = this;
                        return Object(c.c)(this.categorizedSymbols, function(t) {
                            var r = t.dataObject.symbol;
                            return r in e.changes && (t.dataObject.exchange_is_open = e.changes[r]),
                                function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))), n.forEach(function(t) {
                                            u(e, t, r[t])
                                        })
                                    }
                                    return e
                                }({}, t)
                        })
                    }
                }]), e
            }()).prototype, "changes", [s.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return {}
                }
            }), o = f(i.prototype, "categorizedSymbols", [s.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), f(i.prototype, "retrieveActiveSymbols", [n], Object.getOwnPropertyDescriptor(i.prototype, "retrieveActiveSymbols"), i.prototype), f(i.prototype, "activeSymbols", [s.computed], Object.getOwnPropertyDescriptor(i.prototype, "activeSymbols"), i.prototype), i),
            y = r(13),
            b = r.n(y),
            g = r(15);

        function v(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function w(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var a = e.apply(t, r);

                    function o(e) {
                        v(a, n, i, o, s, "next", e)
                    }

                    function s(e) {
                        v(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                })
            }
        }

        function S(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function k(e, t, r) {
            return t && S(e.prototype, t), r && S(e, r), e
        }
        var x = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.isInitialized = !1, this.tradingTimesPromise = new l.a, this._api = t, this._serverTime = g.a.getInstance(), this._emitter = new b.a({
                    emitDelay: 0
                })
            }
            return k(e, null, [{
                key: "EVENT_MARKET_OPEN_CLOSE_CHANGE",
                get: function() {
                    return "EVENT_MARKET_OPEN_CLOSE_CHANGE"
                }
            }, {
                key: "FEED_UNAVAILABLE",
                get: function() {
                    return "chartonly"
                }
            }]), k(e, [{
                key: "destructor",
                value: function() {
                    this._updateTimer && clearTimeout(this._updateTimer)
                }
            }, {
                key: "initialize",
                value: function() {
                    var t = w(regeneratorRuntime.mark(function t() {
                        var r, n = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this._serverTime.init(this._api);
                                case 2:
                                    if (!this.isInitialized) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", this.tradingTimesPromise);
                                case 4:
                                    if (this.isInitialized = !0, this.lastUpdateDate = this._serverTime.getLocalDate().toISOString().substring(0, 10), this._tradingTimesMap) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 9, this._updateTradeTimes();
                                case 9:
                                    return this.tradingTimesPromise.resolve(), r = function() {
                                        var t = w(regeneratorRuntime.mark(function t() {
                                            var i, a, o, s, c, l, u, h;
                                            return regeneratorRuntime.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (i = n._updateMarketOpenClosed(), Object.keys(i).length > 0 && n._emitter.emit(e.EVENT_MARKET_OPEN_CLOSE_CHANGE, i), a = n._nextUpdateDate()) {
                                                            t.next = 14;
                                                            break
                                                        }
                                                        for (l in o = n._serverTime.getLocalDate(), (s = new Date("".concat(n.lastUpdateDate, "T00:00:00Z"))).setDate(s.getDate() + 1), n.lastUpdateDate = (o > s ? o : s).toISOString().substring(0, 10), c = {}, n._tradingTimesMap) c[l] = n._tradingTimesMap[l].isOpened;
                                                        return t.next = 12, n._updateTradeTimes();
                                                    case 12:
                                                        for (u in n._tradingTimesMap) n._tradingTimesMap[u].isOpened = c[u];
                                                        a = s;
                                                    case 14:
                                                        h = a - n._serverTime.getLocalDate(), n._updateTimer = setTimeout(r, h);
                                                    case 16:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t, this)
                                        }));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(), t.next = 13, r();
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "_updateMarketOpenClosed",
                value: function() {
                    var e = {};
                    for (var t in this._tradingTimesMap) {
                        var r = this._calcIsMarketOpened(t);
                        this._tradingTimesMap[t].isOpened !== r && (this._tradingTimesMap[t].isOpened = r, e[t] = r)
                    }
                    return e
                }
            }, {
                key: "_updateTradeTimes",
                value: function() {
                    var e = w(regeneratorRuntime.mark(function e() {
                        var t, r, n, i, a, o, s, c, l, u, h, d, p, f, m, y, b, g, v, w, S, k, x, C, O, E, T = this;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._api.getTradingTimes(this.lastUpdateDate);
                                case 2:
                                    if (!(t = e.sent).error) {
                                        e.next = 7;
                                        break
                                    }
                                    return r = t.error, console.error("Error getting trading times on ".concat(this.lastUpdateDate, ": [").concat(r.code, '] "').concat(r.message, '"')), e.abrupt("return");
                                case 7:
                                    n = this._serverTime.getLocalDate(), i = n.toISOString().substring(0, 11), a = function(e) {
                                        return new Date("".concat(i).concat(e, "Z"))
                                    }, this._tradingTimesMap = {}, o = t.trading_times.markets, s = !0, c = !1, l = void 0, e.prev = 15, u = o[Symbol.iterator]();
                                case 17:
                                    if (s = (h = u.next()).done) {
                                        e.next = 68;
                                        break
                                    }
                                    d = h.value, p = d.submarkets, f = !0, m = !1, y = void 0, e.prev = 23, b = p[Symbol.iterator]();
                                case 25:
                                    if (f = (g = b.next()).done) {
                                        e.next = 51;
                                        break
                                    }
                                    for (v = g.value, w = v.symbols, S = !0, k = !1, x = void 0, e.prev = 31, C = function() {
                                            var e = E.value,
                                                t = e.times,
                                                r = e.symbol,
                                                n = e.feed_license,
                                                i = e.delay_amount,
                                                o = t.open,
                                                s = t.close,
                                                c = void 0,
                                                l = 1 === o.length && "00:00:00" === o[0] && "23:59:59" === s[0],
                                                u = 1 === o.length && "--" === o[0] && "--" === s[0];
                                            l || u || (c = o.map(function(e, t) {
                                                return {
                                                    open: a(e),
                                                    close: a(s[t])
                                                }
                                            })), T._tradingTimesMap[r] = {
                                                feed_license: n,
                                                delay_amount: i || 0,
                                                times: c,
                                                isOpenAllDay: l,
                                                isClosedAllDay: u
                                            }
                                        }, O = w[Symbol.iterator](); !(S = (E = O.next()).done); S = !0) C();
                                    e.next = 40;
                                    break;
                                case 36:
                                    e.prev = 36, e.t0 = e.catch(31), k = !0, x = e.t0;
                                case 40:
                                    e.prev = 40, e.prev = 41, S || null == O.return || O.return();
                                case 43:
                                    if (e.prev = 43, !k) {
                                        e.next = 46;
                                        break
                                    }
                                    throw x;
                                case 46:
                                    return e.finish(43);
                                case 47:
                                    return e.finish(40);
                                case 48:
                                    f = !0, e.next = 25;
                                    break;
                                case 51:
                                    e.next = 57;
                                    break;
                                case 53:
                                    e.prev = 53, e.t1 = e.catch(23), m = !0, y = e.t1;
                                case 57:
                                    e.prev = 57, e.prev = 58, f || null == b.return || b.return();
                                case 60:
                                    if (e.prev = 60, !m) {
                                        e.next = 63;
                                        break
                                    }
                                    throw y;
                                case 63:
                                    return e.finish(60);
                                case 64:
                                    return e.finish(57);
                                case 65:
                                    s = !0, e.next = 17;
                                    break;
                                case 68:
                                    e.next = 74;
                                    break;
                                case 70:
                                    e.prev = 70, e.t2 = e.catch(15), c = !0, l = e.t2;
                                case 74:
                                    e.prev = 74, e.prev = 75, s || null == u.return || u.return();
                                case 77:
                                    if (e.prev = 77, !c) {
                                        e.next = 80;
                                        break
                                    }
                                    throw l;
                                case 80:
                                    return e.finish(77);
                                case 81:
                                    return e.finish(74);
                                case 82:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [15, 70, 74, 82],
                            [23, 53, 57, 65],
                            [31, 36, 40, 48],
                            [41, , 43, 47],
                            [58, , 60, 64],
                            [75, , 77, 81]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isFeedUnavailable",
                value: function(t) {
                    if (this._tradingTimesMap) return t in this._tradingTimesMap ? this._tradingTimesMap[t].feed_license === e.FEED_UNAVAILABLE : (console.error("Symbol not in _tradingTimesMap:", t, " trading map:", this._tradingTimesMap), !1)
                }
            }, {
                key: "getDelayedMinutes",
                value: function(e) {
                    return this._tradingTimesMap[e].delay_amount
                }
            }, {
                key: "isMarketOpened",
                value: function(e) {
                    if (this._tradingTimesMap) return e in this._tradingTimesMap ? this._tradingTimesMap[e].isOpened : (console.error("Symbol not in _tradingTimesMap:", e, " trading map:", this._tradingTimesMap), !1)
                }
            }, {
                key: "_calcIsMarketOpened",
                value: function(t) {
                    var r = this._serverTime.getLocalDate(),
                        n = this._tradingTimesMap[t],
                        i = n.times,
                        a = n.feed_license,
                        o = n.isOpenAllDay;
                    if (n.isClosedAllDay || a === e.FEED_UNAVAILABLE) return !1;
                    if (o) return !0;
                    var s = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var u, h = i[Symbol.iterator](); !(s = (u = h.next()).done); s = !0) {
                            var d = u.value,
                                p = d.open,
                                f = d.close;
                            if (r >= p && r < f) return !0
                        }
                    } catch (e) {
                        c = !0, l = e
                    } finally {
                        try {
                            s || null == h.return || h.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                    return !1
                }
            }, {
                key: "_nextUpdateDate",
                value: function() {
                    var t, r = this._serverTime.getLocalDate();
                    for (var n in this._tradingTimesMap) {
                        var i = this._tradingTimesMap[n],
                            a = i.times,
                            o = i.feed_license,
                            s = i.isOpenAllDay,
                            c = i.isClosedAllDay;
                        if (!s && !c && o !== e.FEED_UNAVAILABLE) {
                            var l = !0,
                                u = !1,
                                h = void 0;
                            try {
                                for (var d, p = a[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                                    var f = d.value,
                                        m = f.open,
                                        y = f.close;
                                    m > r && (!t || m < t) && (t = m), y > r && (!t || y < t) && (t = y)
                                }
                            } catch (e) {
                                u = !0, h = e
                            } finally {
                                try {
                                    l || null == p.return || p.return()
                                } finally {
                                    if (u) throw h
                                }
                            }
                        }
                    }
                    return t
                }
            }, {
                key: "onMarketOpenCloseChanged",
                value: function(t) {
                    this._emitter.on(e.EVENT_MARKET_OPEN_CLOSE_CHANGE, t)
                }
            }]), e
        }();

        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    O(e, t, r[t])
                })
            }
            return e
        }

        function O(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function E(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function T(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function P(e, t, r) {
            return t && T(e.prototype, t), r && T(e, r), e
        }
        var _ = function() {
            function e(t, r, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.streamRequests = {}, this.tradingTimesCache = null, this.requestAPI = t, this.requestSubscribe = r, this.requestForget = n
            }
            return P(e, null, [{
                key: "DEFAULT_COUNT",
                get: function() {
                    return 1e3
                }
            }]), P(e, [{
                key: "getActiveSymbols",
                value: function() {
                    return this.requestAPI({
                        active_symbols: "brief",
                        product_type: "basic"
                    })
                }
            }, {
                key: "getServerTime",
                value: function() {
                    return this.requestAPI({
                        time: 1
                    })
                }
            }, {
                key: "getTradingTimes",
                value: function() {
                    var e = function(e) {
                        return function() {
                            var t = this,
                                r = arguments;
                            return new Promise(function(n, i) {
                                var a = e.apply(t, r);

                                function o(e) {
                                    E(a, n, i, o, s, "next", e)
                                }

                                function s(e) {
                                    E(a, n, i, o, s, "throw", e)
                                }
                                o(void 0)
                            })
                        }
                    }(regeneratorRuntime.mark(function e() {
                        var t, r, n = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.length > 0 && void 0 !== n[0] ? n[0] : "today", !this.tradingTimesCache || this.tradingTimesCache.trading_times !== t) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", C({}, this.tradingTimesCache));
                                case 3:
                                    return e.next = 5, this.requestAPI({
                                        trading_times: t
                                    });
                                case 5:
                                    return r = e.sent, "today" !== t && (this.tradingTimesCache = C({}, r)), e.abrupt("return", r);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getTickHistory",
                value: function(t) {
                    var r = e.createTickHistoryRequest(t);
                    return this.requestAPI(r)
                }
            }, {
                key: "subscribeTickHistory",
                value: function(t, r) {
                    var n = this._getKey(t),
                        i = e.createTickHistoryRequest(C({}, t, {
                            subscribe: 1
                        }));
                    this.streamRequests[n] = {
                        request: i,
                        callback: r
                    }, this.requestSubscribe(C({}, i), r)
                }
            }, {
                key: "forget",
                value: function(e) {
                    var t = this._getKey(e),
                        r = this.streamRequests[t],
                        n = r.request,
                        i = r.callback;
                    return delete this.streamRequests[t], this.requestForget(n, i)
                }
            }, {
                key: "_getKey",
                value: function(e) {
                    var t = e.symbol,
                        r = e.granularity;
                    return "".concat(t, "-").concat(r)
                }
            }], [{
                key: "createTickHistoryRequest",
                value: function(t) {
                    var r = t.symbol,
                        n = t.granularity,
                        i = t.start,
                        a = t.end,
                        o = t.subscribe,
                        s = t.adjust_start_time,
                        c = void 0 === s ? 1 : s,
                        l = t.count,
                        u = {
                            ticks_history: r,
                            style: +n ? "candles" : "ticks",
                            end: "latest",
                            count: l || e.DEFAULT_COUNT
                        };
                    return n && (u.granularity = +n), c && (u.adjust_start_time = c), o && (u.subscribe = 1), i && (delete u.count, u.start = i), a && (u.end = a), u
                }
            }]), e
        }();
        r.d(t, "a", function() {
            return m
        }), r.d(t, "c", function() {
            return x
        }), r.d(t, "b", function() {
            return _
        })
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "b", function() {
                return d
            }), r.d(t, "a", function() {
                return p
            });
            var n = r(0),
                i = r.n(n),
                a = r(3),
                o = r(40),
                s = function(e) {
                    var t = e.id;
                    if (!t || !a.z[t]) return "";
                    var r = a.z[t];
                    return i.a.createElement(r, {
                        className: "ic-".concat(t)
                    })
                },
                c = function(e) {
                    var t = e.item,
                        r = t.itemId,
                        n = t.display;
                    return i.a.createElement("div", {
                        className: "left"
                    }, i.a.createElement(s, {
                        id: r
                    }), i.a.createElement("span", {
                        className: "ciq-item-display"
                    }, n))
                },
                l = function(t) {
                    var r = t.favoritesId,
                        n = t.item,
                        a = n.dataObject,
                        s = n.itemId;
                    return i.a.createElement("div", {
                        className: "right"
                    }, a && (void 0 === a.exchange_is_open || a.exchange_is_open) ? "" : i.a.createElement("span", {
                        className: "closed-market"
                    }, e.translate("CLOSED")), i.a.createElement(o.a, {
                        category: r,
                        id: s
                    }))
                },
                u = function(e) {
                    var t = e.opt,
                        r = e.item,
                        n = a.a[t.id];
                    return i.a.createElement("span", {
                        className: "ic-".concat(t.id),
                        onClick: function(e) {
                            return t.onClick && t.onClick(r.dataObject, e)
                        }
                    }, n && i.a.createElement(n, null), t.renderChild && t.renderChild(r))
                },
                h = function(e) {
                    var t = e.activeOptions,
                        r = e.item;
                    return t && i.a.createElement("span", {
                        className: "cq-active-options"
                    }, t.map(function(e) {
                        return i.a.createElement(u, {
                            key: e.id,
                            opt: e,
                            item: r
                        })
                    }))
                },
                d = function(e) {
                    var t = e.onSelectItem,
                        r = e.item,
                        n = e.favoritesId,
                        a = e.id,
                        o = a ? "".concat(a, "-subcategory-item-").concat(r.itemId) : "subcategory-item-".concat(r.itemId);
                    return i.a.createElement("div", {
                        className: "cq-item ".concat(r.selected ? "selected " : "", " ").concat(o),
                        onClick: function(e) {
                            return r.enabled && t(r.dataObject, e)
                        },
                        disabled: !r.enabled
                    }, i.a.createElement(c, {
                        item: r
                    }), i.a.createElement(l, {
                        item: r,
                        favoritesId: n
                    }))
                },
                p = function(e) {
                    var t = e.item,
                        r = e.favoritesId,
                        n = e.activeOptions;
                    return i.a.createElement("div", {
                        className: "cq-active-item"
                    }, i.a.createElement(c, {
                        item: t
                    }), i.a.createElement("div", {
                        className: "right"
                    }, i.a.createElement(h, {
                        activeOptions: n,
                        item: t
                    }), i.a.createElement(o.a, {
                        category: r,
                        id: t.itemId
                    })))
                }
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(39),
                o = r(4),
                s = r(10),
                c = r(3),
                l = (r(129), function(t) {
                    var r = t.value,
                        n = t.onChange;
                    return i.a.createElement("div", {
                        className: "ciq-list-item"
                    }, i.a.createElement("span", {
                        className: "ciq-icon-text"
                    }, e.translate("Asset Information")), i.a.createElement("div", {
                        className: "ciq-action"
                    }, i.a.createElement(s.h, {
                        value: r,
                        onChange: n
                    })))
                }),
                u = function(t) {
                    var r = t.position,
                        n = t.setPosition;
                    return i.a.createElement("div", {
                        className: "ciq-list-item ciq-list-item-position"
                    }, i.a.createElement("span", {
                        className: "ciq-icon-text"
                    }, e.translate("Position")), i.a.createElement("div", {
                        className: "ciq-action"
                    }, i.a.createElement(c.I, {
                        onClick: function() {
                            return n("bottom")
                        },
                        className: "".concat("bottom" === r ? "active" : "")
                    }), i.a.createElement(c.J, {
                        onClick: function() {
                            return n("left")
                        },
                        className: "".concat("left" === r ? "active" : "")
                    })))
                };
            t.a = Object(o.a)(function(e) {
                var t = e.chartSetting,
                    r = e.chart;
                return {
                    assetInformation: t.assetInformation,
                    ChartSettingMenu: t.ChartSettingMenu,
                    closeMenu: t.menu.onTitleClick,
                    countdown: t.countdown,
                    historical: t.historical,
                    isMobile: r.isMobile,
                    isAutoScale: t.isAutoScale,
                    languages: t.languages,
                    menuOpen: t.menu.dialog.open,
                    position: t.position,
                    selectedLanguage: t.language,
                    setAssetInformation: t.setAssetInformation,
                    setAutoScale: t.setAutoScale,
                    setHistorical: t.setHistorical,
                    setLanguage: t.setLanguage,
                    setPosition: t.setPosition,
                    setTheme: t.setTheme,
                    setView: t.setView,
                    showCountdown: t.showCountdown,
                    theme: t.theme,
                    view: t.view
                }
            })(function(t) {
                var r = t.assetInformation,
                    n = t.ChartSettingMenu,
                    o = t.closeMenu,
                    h = t.countdown,
                    d = t.historical,
                    p = t.isAutoScale,
                    f = t.isMobile,
                    m = t.languages,
                    y = t.menuOpen,
                    b = t.position,
                    g = t.selectedLanguage,
                    v = t.setAssetInformation,
                    w = t.setAutoScale,
                    S = t.setHistorical,
                    k = t.setLanguage,
                    x = t.setPosition,
                    C = t.setTheme,
                    O = t.setView,
                    E = t.showCountdown,
                    T = t.view,
                    P = t.theme;
                return i.a.createElement(n, {
                    className: "cq-chart-setting"
                }, i.a.createElement(n.Title, null, i.a.createElement(c.N, {
                    className: "ic-icon-with-sub ".concat(y ? "active" : ""),
                    "tooltip-title": e.translate("Settings")
                })), i.a.createElement(n.Body, null, i.a.createElement("div", {
                    className: "cq-setting-container container-".concat("" === T ? "main" : T)
                }, i.a.createElement(a.CSSTransition, {
                    in: "" === T,
                    timeout: 250,
                    classNames: "cq-setting-main animate",
                    unmountOnExit: !0
                }, i.a.createElement("div", null, i.a.createElement("div", {
                    className: "title"
                }, i.a.createElement("div", {
                    className: "title-text"
                }, " ", e.translate("Settings"), " "), i.a.createElement(c.j, {
                    className: "icon-close-menu",
                    onClick: function() {
                        return o()
                    }
                })), i.a.createElement("div", {
                    className: "body"
                }, i.a.createElement("div", {
                    className: "ciq-list ciq-list-setting"
                }, f ? "" : i.a.createElement(u, {
                    setPosition: x,
                    position: b
                }), i.a.createElement("div", {
                    className: "ciq-list-item"
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Auto Scale")), i.a.createElement("div", {
                    className: "ciq-action"
                }, i.a.createElement(s.h, {
                    value: p,
                    onChange: w
                }))), i.a.createElement("div", {
                    className: "ciq-list-item"
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Dark Mode")), i.a.createElement("div", {
                    className: "ciq-action"
                }, i.a.createElement(s.h, {
                    value: "dark" === P,
                    onChange: function(e) {
                        return C(e ? "dark" : "light")
                    }
                }))), i.a.createElement("div", {
                    className: "ciq-list-item"
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Countdown")), i.a.createElement("div", {
                    className: "ciq-action"
                }, i.a.createElement(s.h, {
                    value: h,
                    onChange: E
                }))), f ? "" : i.a.createElement(l, {
                    value: r,
                    onChange: v
                }), i.a.createElement("div", {
                    className: "ciq-list-item"
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Historical Data Mode")), i.a.createElement("div", {
                    className: "ciq-action"
                }, i.a.createElement(s.h, {
                    value: d,
                    onChange: S
                }))), i.a.createElement("div", {
                    className: "ciq-list-item ciq-list-item-lng",
                    onClick: function() {
                        return O("language")
                    }
                }, i.a.createElement("span", {
                    className: "ciq-icon-text"
                }, e.translate("Language")), i.a.createElement("div", {
                    className: "ciq-action"
                }, g.icon)))))), i.a.createElement(a.CSSTransition, {
                    in: "language" === T,
                    timeout: 250,
                    classNames: "cq-setting-language animate",
                    unmountOnExit: !0
                }, i.a.createElement("div", null, i.a.createElement("div", {
                    className: "title"
                }, i.a.createElement(c.d, {
                    className: "icon-back-menu",
                    onClick: function() {
                        return O()
                    }
                }), i.a.createElement("div", {
                    className: "title-text"
                }, e.translate("Language"))), i.a.createElement("div", {
                    className: "body"
                }, i.a.createElement("div", {
                    className: "ciq-list ciq-list-language"
                }, m.map(function(e) {
                    return i.a.createElement("div", {
                        className: "ciq-list-item ".concat(g.key === e.key ? "selected" : ""),
                        key: e.key,
                        onClick: function() {
                            return k(e.key)
                        }
                    }, e.icon, i.a.createElement("span", {
                        className: "ciq-icon-text"
                    }, e.name))
                }))))))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        t.a = {
            id: "ic-down-usage",
            viewBox: "0 0 16 16",
            url: r.p + "sprite-606f3c.smartcharts.svg#ic-down-usage",
            toString: function() {
                return this.url
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "b", function() {
                return c
            }), r.d(t, "a", function() {
                return l
            });
            var n = r(0),
                i = r.n(n),
                a = r(3),
                o = r(77),
                s = function(e) {
                    var t = e.symbol,
                        r = e.ChartPrice,
                        n = e.isSymbolOpen,
                        o = e.symbolOpenTime,
                        s = a.z[t.symbol] || a.P,
                        c = !n && o.openTime,
                        l = !n && !o.openTime;
                    return i.a.createElement(i.a.Fragment, null, s && i.a.createElement(s, {
                        className: "ic-".concat(t.symbol)
                    }), i.a.createElement("div", {
                        className: "cq-symbol-info"
                    }, i.a.createElement("div", {
                        className: "cq-symbol ".concat(l ? "closed-no-opentime" : "")
                    }, t.name), n && i.a.createElement(r, null), c && i.a.createElement(u, {
                        symbolOpenTime: o
                    })))
                },
                c = function(t) {
                    var r = t.symbol,
                        n = t.ChartPrice,
                        o = t.isSymbolOpen,
                        c = t.symbolOpenTime;
                    return i.a.createElement("div", {
                        className: "cq-symbol-select-btn"
                    }, i.a.createElement(s, {
                        symbol: r,
                        ChartPrice: n,
                        symbolOpenTime: c,
                        isSymbolOpen: o
                    }), !o && i.a.createElement("div", {
                        className: "cq-symbol-closed-text"
                    }, e.translate("CLOSED")), i.a.createElement(a.c, {
                        className: "cq-symbol-dropdown"
                    }))
                },
                l = function(e) {
                    var t = e.isVisible,
                        r = e.status,
                        n = e.todayChange,
                        a = e.todayChangePercent,
                        o = e.SpotPrice;
                    return t && i.a.createElement("div", {
                        className: "cq-chart-price"
                    }, i.a.createElement(o, {
                        className: "cq-current-price"
                    }), i.a.createElement("div", {
                        className: "divider"
                    }, "-"), i.a.createElement("div", {
                        className: "cq-change ".concat(r)
                    }, i.a.createElement("span", {
                        className: "cq-todays-change"
                    }, n || 0), i.a.createElement("span", {
                        className: "cq-todays-change-percent"
                    }, "(", a, "%)"), " "))
                },
                u = function(t) {
                    return i.a.createElement("div", {
                        className: "cq-chart-closed"
                    }, i.a.createElement(a.T, {
                        className: "cq-closed-icon"
                    }), i.a.createElement("div", {
                        className: "cq-closed-opening"
                    }, e.translate("Opens in:"), "  ", i.a.createElement("span", {
                        className: "cq-closed-opening-time"
                    }, i.a.createElement(o.a, {
                        symbolOpenTime: t
                    }))))
                }
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var i = function() {
            function e(t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.node = t, this.context = r, this.injections = []
            }
            return function(e, t, r) {
                t && n(e.prototype, t), r && n(e, r)
            }(e, [{
                key: "addInjection",
                value: function(e, t, r) {
                    this.injections.push(this.context.stx[e](t, r))
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var e = 0; e < this.injections.length; e++) this.context.stx.removeInjection(this.injections[e]);
                    this.injections = []
                }
            }]), e
        }();

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = function() {
            function e(t, r) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.keyup = function(e) {
                    var t = e.which;
                    if (n.implementAndroidWorkaround) return n.androidWorkaroundKeyup(e), void(n.implementAndroidWorkaround = !1);
                    switch (t) {
                        case 16:
                            return n.shift = !1, void n.cb({
                                key: t,
                                e: e,
                                keystroke: n
                            });
                        case 17:
                        case 18:
                            return n.ctrl = !1, void n.cb({
                                key: t,
                                e: e,
                                keystroke: n
                            });
                        case 91:
                            return n.cmd = !1, void n.cb({
                                key: t,
                                e: e,
                                keystroke: n
                            })
                    }
                    n.key && n.cb({
                        key: n.key,
                        e: e,
                        keystroke: n
                    })
                }, this.keydown = function(e) {
                    if (n.downValue = e.target.value, !n.noKeyCapture) {
                        var t = e.which;
                        if (229 === t && CIQ.isAndroid) n.implementAndroidWorkaround = !0;
                        else if (n.ctrl || !(91 !== t && t >= 48 && t <= 222 || 32 === t)) {
                            switch (t) {
                                case 91:
                                    return void(n.cmd = !0);
                                case 16:
                                    return void(n.shift = !0);
                                case 17:
                                case 18:
                                    return void(n.ctrl = !0);
                                case 20:
                                    return void(n.capsLock = !n.capsLock)
                            }
                            8 === t && (t = "backspace"), 9 === t && (t = "tab"), 13 === t && (t = "enter"), 27 === t && (t = "escape"), 33 === t && (t = "page up"), 34 === t && (t = "page down"), 35 === t && (t = "end"), 36 === t && (t = "home"), 45 === t && (t = "insert"), 46 === t && (t = "delete"), n.key = t, 37 !== t && 38 !== t && 39 !== t && 40 !== t || (37 === t && (t = "left"), 38 === t && (t = "up"), 39 === t && (t = "right"), 40 === t && (t = "down"), n.key = null, n.cb({
                                key: t,
                                e: e,
                                keystroke: n
                            }))
                        }
                    }
                }, this.keypress = function(e) {
                    if (!n.noKeyCapture) {
                        var t = e.which;
                        t < 32 || t > 222 || (n.key = t)
                    }
                }, this.onblur = function(e) {
                    n.ctrl = !1, n.cb({
                        key: 17,
                        e: e,
                        keystroke: n
                    })
                }, this.node = t, this.cb = r, this.initialize(), this.shift = !1, this.ctrl = !1, this.cmd = !1, this.capsLock = !1, this.downValue = ""
            }
            return function(e, t, r) {
                t && a(e.prototype, t), r && a(e, r)
            }(e, [{
                key: "androidWorkaroundKeyup",
                value: function(e) {
                    var t, r = e.target.value;
                    t = r.length > this.downValue.length ? r.charCodeAt(r.length - 1) : "delete", this.cb({
                        key: t,
                        e: e,
                        keystroke: this
                    })
                }
            }, {
                key: "initialize",
                value: function() {
                    this.node.addEventListener("keyup", this.keyup), this.node.addEventListener("keydown", this.keydown), this.node.addEventListener("keypress", this.keypress), window.addEventListener("blur", this.onblur)
                }
            }]), e
        }();
        o.noKeyCapture = !1;
        var s = o,
            c = r(16);

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var f = function(e) {
            function t(e, r, n) {
                var i;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (i = function(e, t) {
                    return !t || "object" !== l(t) && "function" != typeof t ? p(e) : t
                }(this, h(t).call(this, e, r, n))).node = e, i.context = r, i.params = n || {}, t.instance = p(p(i));
                var a = p(p(i));
                return i.keystroke = new s(e, function() {
                    a.handler.apply(a, arguments)
                }), i
            }
            return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(t, i),
                function(e, t, r) {
                    t && u(e.prototype, t), r && u(e, r)
                }(t, [{
                    key: "setActiveContext",
                    value: function(e) {
                        this.context = e
                    }
                }, {
                    key: "processKeyStrokeClaims",
                    value: function(e, t, r, n) {
                        for (var i = c.a.length - 1; i > -1; i--) {
                            var a = c.a[i].helper.keyStroke(e, t, r, n);
                            if (a) return a.allowDefault || r.preventDefault(), !0
                        }
                        return !1
                    }
                }, {
                    key: "addClaim",
                    value: function(e) {
                        c.a.push({
                            helper: e
                        })
                    }
                }, {
                    key: "removeClaim",
                    value: function(e) {
                        for (var t = 0; t < c.a.length; t++)
                            if (c.a[t].helper === e) return void c.a.splice(t, 1)
                    }
                }, {
                    key: "handler",
                    value: function(e) {
                        if (this.context) {
                            var t = this.context.stx;
                            if (!t.editingAnnotation) {
                                var r = e.e,
                                    n = e.key,
                                    i = e.keystroke,
                                    a = e.e.target.tagName;
                                switch (n) {
                                    case 16:
                                        t.shift = i.shift;
                                        break;
                                    case 17:
                                    case 18:
                                        t.ctrl = i.ctrl;
                                        break;
                                    case 91:
                                        t.cmd = i.cmd;
                                        break;
                                    case 20:
                                        this.capsLock = !this.capsLock
                                }!CIQ.ChartEngine.drawingLine && this.processKeyStrokeClaims(this, n, r, i) || "escape" !== n && this.context.isModal() || "INPUT" !== a && "TEXTAREA" !== a && this.params.cb && this.params.cb(n, this) && r.preventDefault()
                            }
                        }
                    }
                }], [{
                    key: "defaultHotKeys",
                    value: function(e, t) {
                        var r = t.context.stx,
                            n = 1;
                        switch (e) {
                            case "up":
                                r.zoomIn();
                                break;
                            case "down":
                                r.zoomOut();
                                break;
                            case "home":
                                r.home(), r.headsUpHR();
                                break;
                            case "end":
                                r.chart.scroll = r.chart.dataSet.length, r.draw(), r.headsUpHR();
                                break;
                            case "left":
                                r.ctrl ? r.zoomOut() : (n = 1, (r.shift || t.capsLock) && (n = Math.max(5, 5 * (8 - Math.round(r.layout.candleWidth)))), r.chart.scroll + n >= r.chart.dataSet.length && (n = r.chart.dataSet.length - r.chart.scroll), r.chart.scroll += n, r.draw(), r.headsUpHR());
                                break;
                            case "right":
                                r.ctrl ? r.zoomIn() : (n = 1, (r.shift || t.capsLock) && (n = Math.max(5, 5 * (8 - Math.round(r.layout.candleWidth)))), r.chart.scroll -= n, r.draw(), r.headsUpHR());
                                break;
                            case "delete":
                            case "backspace":
                                if (CIQ.ChartEngine.drawingLine) r.undo();
                                else {
                                    if (!r.anyHighlighted) return !1;
                                    r.deleteHighlighted()
                                }
                                break;
                            case "escape":
                                CIQ.ChartEngine.drawingLine && r.undo();
                                break;
                            default:
                                return !1
                        }
                        return !0
                    }
                }]), t
        }();
        f.instance = null;
        t.a = f
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r(45),
            a = r.n(i);
        var o = r(4);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var d = "cq-inchart-",
            p = function(e) {
                function t(e) {
                    var r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = l(this, u(t).call(this, e));
                    var n = e.at,
                        i = void 0 === n ? "holder" : n;
                    return e.contextPromise.then(function(e) {
                        var t = "".concat(d).concat(i),
                            n = e.topNode.querySelector(".".concat(t));
                        n || (n = function(e) {
                            var t = document.createElement("div");
                            return t.innerHTML = e, t.firstChild
                        }('<div class="'.concat(t, '"></div>')), e.stx.chart.panel[i].appendChild(n)), r.container = n, r.forceUpdate()
                    }), r
                }
                return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && h(e, t)
                    }(t, n["Component"]),
                    function(e, t, r) {
                        t && c(e.prototype, t), r && c(e, r)
                    }(t, [{
                        key: "render",
                        value: function() {
                            return this.container ? a.a.createPortal(this.props.children, this.container) : null
                        }
                    }]), t
            }();
        t.a = Object(o.a)(function(e) {
            return {
                contextPromise: e.chart.contextPromise
            }
        })(p)
    }, function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return s
            });
            var n = r(0),
                i = r.n(n),
                a = r(3),
                o = function(t) {
                    var r = t.focusedCategoryKey,
                        n = t.activeCategoryKey,
                        o = t.handleFilterClick,
                        s = t.category,
                        c = t.isMobile,
                        l = a.g[s.categoryId],
                        u = r && r.length ? r === s.categoryId : n === s.categoryId;
                    return i.a.createElement("div", {
                        className: "cq-filter ".concat(u ? "cq-active-filter" : "", " ").concat(c ? "" : "cq-hover-style"),
                        onClick: function(e) {
                            return o(s, e)
                        }
                    }, l && i.a.createElement(l, {
                        className: "ic-".concat(s.categoryId)
                    }), i.a.createElement("span", {
                        className: "cq-filter-text"
                    }, e.translate(s.categoryName)))
                },
                s = function(e) {
                    var t = e.filteredItems,
                        r = e.handleFilterClick,
                        n = e.focusedCategoryKey,
                        a = e.activeCategoryKey,
                        s = e.isMobile;
                    return i.a.createElement("div", {
                        className: "cq-filter-panel"
                    }, t.map(function(e) {
                        return i.a.createElement(o, {
                            key: e.categoryId,
                            category: e,
                            handleFilterClick: r,
                            activeCategoryKey: a,
                            focusedCategoryKey: n,
                            isMobile: s
                        })
                    }))
                }
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return s
            });
            var n = r(0),
                i = r.n(n);

            function a(e) {
                var t = 0;
                if (e.hasSubcategory) {
                    var r = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var a, o = e.data[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                            t += a.value.data.length
                        }
                    } catch (e) {
                        n = !0, i = e
                    } finally {
                        try {
                            r || null == o.return || o.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                } else t += e.data.length;
                return t
            }
            var o = function(t) {
                    var r = t.category,
                        n = t.Item,
                        o = t.setCategoryElement,
                        s = t.onSelectItem,
                        c = t.activeHeadKey,
                        l = t.activeHeadTop,
                        u = t.activeHeadOffset;
                    return i.a.createElement("div", {
                        className: "category category-".concat(r.categoryId),
                        ref: function(e) {
                            return o(e, r.categoryId)
                        }
                    }, i.a.createElement("div", {
                        className: function(e, t, r) {
                            var n = "";
                            return t === e && (n = r < 0 ? "sticky-bottom" : "sticky-top"), "category-title ".concat(n)
                        }(r.categoryId, c, l),
                        style: {
                            top: c === r.categoryId ? u : null
                        }
                    }, e.translate(r.categoryName)), r.hasSubcategory ? r.data.map(function(t) {
                        return a(t) > 0 && i.a.createElement("div", {
                            className: "category-content",
                            key: t.subcategoryName
                        }, i.a.createElement("div", {
                            className: "subcategory"
                        }, e.translate(t.subcategoryName)), t.data.map(function(e) {
                            return i.a.createElement(n, {
                                key: e.display,
                                item: e,
                                onSelectItem: s
                            })
                        }))
                    }) : r.data.length > 0 && i.a.createElement("div", {
                        className: "category-content"
                    }, r.data.map(function(e, t) {
                        return i.a.createElement(n, {
                            key: "".concat(e.display, "-").concat(t),
                            item: e,
                            onSelectItem: s
                        })
                    })), 0 === a(r) && r.emptyDescription && i.a.createElement("div", {
                        className: "category-content"
                    }, i.a.createElement("div", {
                        className: "empty-category"
                    }, e.translate(r.emptyDescription))))
                },
                s = function(e) {
                    var t = e.filteredItems,
                        r = e.onSelectItem,
                        n = e.getItemType,
                        s = e.setCategoryElement,
                        c = e.activeHeadKey,
                        l = e.activeHeadTop,
                        u = e.activeHeadOffset;
                    return i.a.createElement("div", {
                        className: "results-panel"
                    }, t.map(function(e) {
                        return (a(e) > 0 || e.emptyDescription) && i.a.createElement(o, {
                            key: e.categoryId,
                            Item: n(e.categoryId),
                            category: e,
                            setCategoryElement: s,
                            onSelectItem: r,
                            activeHeadKey: c,
                            activeHeadTop: l,
                            activeHeadOffset: u
                        })
                    }))
                }
        }).call(this, r(6).t)
    }, function(e, t) {
        e.exports = {
            " already exists.": 0,
            "[symbol] feed is delayed by [delay] minutes": 1,
            "[symbol] market is now opened.": 2,
            "[symbol] market is presently closed.": 3,
            '"Mass Index" or "Doji Star"': 4,
            Active: 5,
            "Add New": 6,
            Annotation: 7,
            "Asset Information": 8,
            "Auto Scale": 9,
            "Average Line": 10,
            Baseline: 11,
            "Box Size": 12,
            C: 13,
            Callout: 14,
            CANCEL: 15,
            Candle: 16,
            Change: 17,
            Channel: 18,
            "Chart data is not available for this symbol.": 19,
            "Chart Table": 20,
            "Chart types": 21,
            "Clear All": 22,
            Close: 23,
            CLOSE: 24,
            CLOSED: 25,
            "Colored Dot": 26,
            Comparison: 27,
            Continuous: 28,
            Countdown: 29,
            Crosshair: 30,
            Crossline: 31,
            "Dark Mode": 32,
            Date: 33,
            Day: 34,
            DONE: 35,
            Doodle: 36,
            Dot: 37,
            Download: 38,
            "Download as CSV": 39,
            "Download as PNG": 40,
            "Download Chart": 41,
            "Draw tools": 42,
            Ellipse: 43,
            Favorites: 44,
            "Fib Arc": 45,
            "Fib Fan": 46,
            "Fib Retracement": 47,
            "Fib Time Zone": 48,
            "Gann Fan": 49,
            Gartley: 50,
            H: 51,
            "Heikin Ashi": 52,
            High: 53,
            HIGH: 54,
            "Historical Data Mode": 55,
            "Hollow Candle": 56,
            Horizontal: 57,
            Hour: 58,
            Indicators: 59,
            Interval: 60,
            Kagi: 61,
            L: 62,
            Language: 63,
            "Last digits stats for latest 1000 ticks on ": 64,
            Line: 65,
            "Line Break": 66,
            Low: 67,
            LOW: 68,
            Measure: 69,
            Minute: 70,
            O: 71,
            OHLC: 72,
            Open: 73,
            OPEN: 74,
            OVERWRITE: 75,
            Pitchfork: 76,
            "Point & Figure": 77,
            Position: 78,
            "Price Lines": 79,
            "Quadrant Lines": 80,
            Range: 81,
            "Range Bars": 82,
            Ray: 83,
            Rectangle: 84,
            "Regression Line": 85,
            Renko: 86,
            RESET: 87,
            "Retrieving Chart Data...": 88,
            "Retrieving Chart Engine...": 89,
            "Retrieving Market Symbols...": 90,
            "Retrieving Trading Times...": 91,
            Reversal: 92,
            "Reversal Percentage": 93,
            "right-click to delete": 94,
            "right-click to manage": 95,
            "Search...": 96,
            Segment: 97,
            Settings: 98,
            "Shape - Arrow": 99,
            "Shape - Check": 100,
            "Shape - Cross": 101,
            "Shape - Focus": 102,
            "Shape - Heart": 103,
            "Shape - Star": 104,
            "Speed Resistance Arc": 105,
            "Speed Resistance Line": 106,
            Spline: 107,
            SPOT: 108,
            "Streaming for [symbol] is not available due to license restrictions": 109,
            Table: 110,
            "Template name": 111,
            Templates: 112,
            "There are no active comparisons yet.": 113,
            "There are no active indicators yet.": 114,
            "There are no favorites yet.": 115,
            Tick: 116,
            "Time Cycle": 117,
            "Tirone Levels": 118,
            "Underlying Assets": 119,
            Vertical: 120,
            "Would you like to overwrite it?": 121,
            "Zoom in": 122,
            "Zoom out": 123,
            RSI: 124,
            Period: 125,
            "Show Zones": 126,
            OverBought: 127,
            OverSold: 128,
            "Moving Average": 129,
            Field: 130,
            Type: 131,
            Offset: 132,
            MA: 133,
            MACD: 134,
            "Fast MA Period": 135,
            "Slow MA Period": 136,
            "Signal Period": 137,
            Signal: 138,
            "Increasing Bar": 139,
            "Decreasing Bar": 140,
            Stochastics: 141,
            Smooth: 142,
            Fast: 143,
            Slow: 144,
            Aroon: 145,
            "Aroon Up": 146,
            "Aroon Down": 147,
            "Aroon Oscillator": 148,
            "Linear Reg R2": 149,
            RSquared: 150,
            "Linear Reg Forecast": 151,
            Forecast: 152,
            "Linear Reg Intercept": 153,
            Intercept: 154,
            "Time Series Forecast": 155,
            "Vertical Horizontal Filter": 156,
            Result: 157,
            TRIX: 158,
            "Standard Deviation": 159,
            "Standard Deviations": 160,
            "Moving Average Type": 161,
            "Trade Volume Index": 162,
            "Min Tick Value": 163,
            "Swing Index": 164,
            "Limit Move Value": 165,
            "Accumulative Swing Index": 166,
            "Price Rate of Change": 167,
            "Volume Rate of Change": 168,
            "Momentum Indicator": 169,
            "Price Volume Trend": 170,
            "Positive Volume Index": 171,
            Index: 172,
            "Negative Volume Index": 173,
            "On Balance Volume": 174,
            "Stochastic Momentum Index": 175,
            "%K Periods": 176,
            "%K Smoothing Periods": 177,
            "%K Double Smoothing Periods": 178,
            "%D Periods": 179,
            "%D Moving Average Type": 180,
            "%K": 181,
            "%D": 182,
            "Historical Volatility": 183,
            "Days Per Year": 184,
            "Pretty Good Oscillator": 185,
            "Ultimate Oscillator": 186,
            "Cycle 1": 187,
            "Cycle 2": 188,
            "Cycle 3": 189,
            "Volume Oscillator": 190,
            "Short Cycle": 191,
            "Long Cycle": 192,
            "Points Or Percent": 193,
            "Twiggs Money Flow": 194,
            "Chaikin Money Flow": 195,
            "Chaikin Volatility": 196,
            "Rate Of Change": 197,
            "Price Oscillator": 198,
            "Ease of Movement": 199,
            "Commodity Channel Index": 200,
            "Detrended Price Oscillator": 201,
            "True Range": 202,
            "Average True Range": 203,
            ATR: 204,
            "Ehler Fisher Transform": 205,
            EF: 206,
            "EF Trigger": 207,
            "Schaff Trend Cycle": 208,
            QStick: 209,
            "Coppock Curve": 210,
            "Short RoC": 211,
            "Long RoC": 212,
            "Chande Momentum Oscillator": 213,
            "Chande Forecast Oscillator": 214,
            "Intraday Momentum Index": 215,
            RAVI: 216,
            "Random Walk Index": 217,
            "Random Walk High": 218,
            "Random Walk Low": 219,
            "ADX/DMS": 220,
            "Smoothing Period": 221,
            Series: 222,
            Shading: 223,
            Histogram: 224,
            "+DI": 225,
            "-DI": 226,
            ADX: 227,
            "Positive Bar": 228,
            "Negative Bar": 229,
            "High Low Bands": 230,
            "Shift Percentage": 231,
            "Channel Fill": 232,
            "High Low Top": 233,
            "High Low Median": 234,
            "High Low Bottom": 235,
            "High Minus Low": 236,
            "Median Price": 237,
            "Moving Average Envelope": 238,
            "Shift Type": 239,
            Shift: 240,
            "MA Env Top": 241,
            "MA Env Median": 242,
            "MA Env Bottom": 243,
            "Fractal Chaos Bands": 244,
            "Fractal High": 245,
            "Fractal Low": 246,
            "Fractal Channel": 247,
            "Fractal Chaos Oscillator": 248,
            "Gopalakrishnan Range Index": 249,
            "Prime Number Bands": 250,
            "Prime Bands Top": 251,
            "Prime Bands Bottom": 252,
            "Prime Bands Channel": 253,
            "Prime Number Oscillator": 254,
            "Tolerance Percentage": 255,
            "Bollinger Bands": 256,
            "Bollinger Bands Top": 257,
            "Bollinger Bands Median": 258,
            "Bollinger Bands Bottom": 259,
            "Donchian Channel": 260,
            "High Period": 261,
            "Low Period": 262,
            "Donchian High": 263,
            "Donchian Median": 264,
            "Donchian Low": 265,
            "Highest High Value": 266,
            "Lowest Low Value": 267,
            "Mass Index": 268,
            "Bulge Threshold": 269,
            "Keltner Channel": 270,
            "Keltner Top": 271,
            "Keltner Median": 272,
            "Keltner Bottom": 273,
            "Parabolic SAR": 274,
            "Minimum AF": 275,
            "Maximum AF": 276,
            "Klinger Volume Oscillator": 277,
            "Signal Periods": 278,
            Klinger: 279,
            KlingerSignal: 280,
            "Elder Ray Index": 281,
            "Elder Bull Power": 282,
            "Elder Bear Power": 283,
            "Elder Force Index": 284,
            "Linear Reg Slope": 285,
            Slope: 286,
            "Center Of Gravity": 287,
            "Typical Price": 288,
            "Weighted Close": 289,
            "Money Flow Index": 290,
            "Williams %R": 291,
            "Accumulation/Distribution": 292,
            "Use Volume": 293,
            "Volume Chart": 294,
            "Up Volume": 295,
            "Down Volume": 296,
            "Volume Underlay": 297,
            "Valuation Lines": 298,
            "Average Type": 299,
            "Display Average": 300,
            "Display 1 Standard Deviation (1σ)": 301,
            "Display 2 Standard Deviation (2σ)": 302,
            "Display 3 Standard Deviation (3σ)": 303,
            Average: 304,
            "1 Standard Deviation (1σ)": 305,
            "2 Standard Deviation (2σ)": 306,
            "3 Standard Deviation (3σ)": 307,
            "Correlation Coefficient": 308,
            "Price Momentum Oscillator": 309,
            "Double Smoothing Period": 310,
            PMO: 311,
            PMOSignal: 312,
            "Relative Volatility": 313,
            "STD Period": 314,
            "Rel Vol": 315,
            "Awesome Oscillator": 316,
            "Market Facilitation Index": 317,
            "Scale Factor": 318,
            Green: 319,
            Fade: 320,
            Fake: 321,
            Squat: 322,
            "ATR Bands": 323,
            "ATR Bands Top": 324,
            "ATR Bands Bottom": 325,
            "ATR Bands Channel": 326,
            "STARC Bands": 327,
            "MA Period": 328,
            Multiplier: 329,
            "STARC Bands Top": 330,
            "STARC Bands Median": 331,
            "STARC Bands Bottom": 332,
            "ATR Trailing Stops": 333,
            "Plot Type": 334,
            HighLow: 335,
            "Buy Stops": 336,
            "Sell Stops": 337,
            "Bollinger %b": 338,
            "%b": 339,
            "Bollinger Bandwidth": 340,
            Bandwidth: 341,
            "Donchian Width": 342,
            "Relative Vigor Index": 343,
            "Rel Vig": 344,
            RelVigSignal: 345,
            "Elder Impulse System": 346,
            Bullish: 347,
            Bearish: 348,
            Neutral: 349,
            "Pivot Points": 350,
            Pivot: 351,
            "Resistance 1": 352,
            "Support 1": 353,
            "Resistance 2": 354,
            "Support 2": 355,
            "Resistance 3": 356,
            "Support 3": 357,
            VWAP: 358,
            Alligator: 359,
            "Jaw Period": 360,
            "Jaw Offset": 361,
            "Teeth Period": 362,
            "Teeth Offset": 363,
            "Lips Period": 364,
            "Lips Offset": 365,
            "Show Fractals": 366,
            Jaw: 367,
            Teeth: 368,
            Lips: 369,
            "Gator Oscillator": 370,
            "Ichimoku Clouds": 371,
            "Conversion Line Period": 372,
            "Base Line Period": 373,
            "Leading Span B Period": 374,
            "Lagging Span Period": 375,
            "Conversion Line": 376,
            "Base Line": 377,
            "Leading Span A": 378,
            "Leading Span B": 379,
            "Lagging Span": 380,
            "Price Relative": 381,
            "Comparison Symbol": 382,
            "Performance Index": 383,
            Gain: 384,
            Loss: 385,
            Beta: 386,
            "Ulcer Index": 387,
            "Balance of Power": 388,
            "Trend Intensity Index": 389,
            TII: 390,
            "Choppiness Index": 391,
            "Disparity Index": 392,
            "Rainbow Moving Average": 393,
            SMA1: 394,
            SMA2: 395,
            SMA3: 396,
            SMA4: 397,
            SMA5: 398,
            SMA6: 399,
            SMA7: 400,
            SMA8: 401,
            SMA9: 402,
            SMA10: 403,
            "Rainbow Oscillator": 404,
            "HHV/LLV Lookback": 405,
            "Pring's Know Sure Thing": 406,
            "Lightest Rate of Change Period": 407,
            "Lightest SMA Period": 408,
            "Light Rate of Change Period": 409,
            "Light SMA Period": 410,
            "Heavy Rate of Change Period": 411,
            "Heavy SMA Period": 412,
            "Heaviest Rate of Change Period": 413,
            "Heaviest SMA Period": 414,
            KST: 415,
            KSTSignal: 416,
            "Pring's Special K": 417,
            "Darvas Box": 418,
            "ATH Lookback Period": 419,
            "Exit Field": 420,
            "Ghost Boxes": 421,
            "Stop Levels": 422,
            "Level Offset": 423,
            "Price Minimum": 424,
            "Volume Spike": 425,
            "Volume % of Avg": 426,
            Darvas: 427,
            Ghost: 428,
            Levels: 429,
            Supertrend: 430,
            Uptrend: 431,
            Downtrend: 432,
            "Volume Profile": 433,
            "Bars Color": 434,
            "Vortex Indicator": 435,
            "+VI": 436,
            "-VI": 437,
            ZigZag: 438,
            "Distance(%)": 439,
            "Psychological Line": 440,
            "Moving Average Deviation": 441,
            "Shinohara Intensity Ratio": 442,
            "Strong Ratio": 443,
            "Weak Ratio": 444,
            Closed: 445,
            "Opens in:": 446
        }
    }, function(e, t, r) {
        (function(t) {
            var r = "Expected a function",
                n = NaN,
                i = "[object Symbol]",
                a = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                l = parseInt,
                u = "object" == typeof t && t && t.Object === Object && t,
                h = "object" == typeof self && self && self.Object === Object && self,
                d = u || h || Function("return this")(),
                p = Object.prototype.toString,
                f = Math.max,
                m = Math.min,
                y = function() {
                    return d.Date.now()
                };

            function b(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function g(e) {
                if ("number" == typeof e) return e;
                if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e
                        }(e) && p.call(e) == i
                    }(e)) return n;
                if (b(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = b(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(a, "");
                var r = s.test(e);
                return r || c.test(e) ? l(e.slice(2), r ? 2 : 8) : o.test(e) ? n : +e
            }
            e.exports = function(e, t, n) {
                var i, a, o, s, c, l, u = 0,
                    h = !1,
                    d = !1,
                    p = !0;
                if ("function" != typeof e) throw new TypeError(r);

                function v(t) {
                    var r = i,
                        n = a;
                    return i = a = void 0, u = t, s = e.apply(n, r)
                }

                function w(e) {
                    var r = e - l;
                    return void 0 === l || r >= t || r < 0 || d && e - u >= o
                }

                function S() {
                    var e = y();
                    if (w(e)) return k(e);
                    c = setTimeout(S, function(e) {
                        var r = t - (e - l);
                        return d ? m(r, o - (e - u)) : r
                    }(e))
                }

                function k(e) {
                    return c = void 0, p && i ? v(e) : (i = a = void 0, s)
                }

                function x() {
                    var e = y(),
                        r = w(e);
                    if (i = arguments, a = this, l = e, r) {
                        if (void 0 === c) return function(e) {
                            return u = e, c = setTimeout(S, t), h ? v(e) : s
                        }(l);
                        if (d) return c = setTimeout(S, t), v(l)
                    }
                    return void 0 === c && (c = setTimeout(S, t)), s
                }
                return t = g(t) || 0, b(n) && (h = !!n.leading, o = (d = "maxWait" in n) ? f(g(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p), x.cancel = function() {
                    void 0 !== c && clearTimeout(c), u = 0, i = l = a = c = void 0
                }, x.flush = function() {
                    return void 0 === c ? s : k(y())
                }, x
            }
        }).call(this, r(56))
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return g
            });
            var n, i, a, o, s, c, l = r(1),
                u = r(7),
                h = r(5),
                d = r(8),
                p = r(15),
                f = r(2);

            function m(e, t, r, n) {
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }

            function y(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function b(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var g = (n = l.action.bound, i = l.action.bound, a = l.action.bound, s = b((o = function() {
                function t(e) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), m(this, "timeUnit", s, this), m(this, "interval", c, this), this.onGranularityChange = void 0, this.remain = null, this.onContextReady = function() {
                        var e = r.context.stx.layout,
                            t = e.timeUnit,
                            n = e.interval;
                        r.timeUnit = Object(h.j)({
                            timeUnit: t,
                            interval: n
                        }), r.interval = n, r.updateCountdown(), Object(l.reaction)(function() {
                            return [r.timeUnit, r.interval, r.mainStore.chartSetting.countdown, r.mainStore.chartType.type]
                        }, r.updateCountdown.bind(r)), r.context.stx.addEventListener("newChart", r.updateDisplay)
                    }, this.countdownInterval = null, this.mainStore = e, Object(l.when)(function() {
                        return r.context
                    }, this.onContextReady), this.menu = new u.a(e, {
                        route: "time-period"
                    }), this.TimePeriodMenu = this.menu.connect(d.a), this._serverTime = p.a.getInstance()
                }
                return function(e, t, r) {
                    t && y(e.prototype, t), r && y(e, r)
                }(t, [{
                    key: "clearCountdown",
                    value: function() {
                        this.countdownInterval && clearInterval(this.countdownInterval), this._injectionId && this.context.stx.removeInjection(this._injectionId), this._injectionId = void 0, this.countdownInterval = void 0, this.context.stx.draw()
                    }
                }, {
                    key: "updateCountdown",
                    value: function() {
                        var e = this,
                            t = this.context.stx;
                        this.remain = null, this.clearCountdown();
                        var r = function() {
                                if (t.isDestroyed || e.isTick) e.clearCountdown();
                                else {
                                    var r = t.chart.dataSet;
                                    if (r && 0 !== r.length) {
                                        var n = e._serverTime.getUTCDate() - r[r.length - 1].DT;
                                        e.remain = Object(h.f)(1e3 * Object(h.h)(t.layout) - n), t.draw()
                                    }
                                }
                            },
                            n = !this.mainStore.chartType.isAggregateChart;
                        this.mainStore.chartSetting.countdown && !this.isTick && n && (this._injectionId || (this._injectionId = t.append("draw", function() {
                            e.isTick ? e.clearCountdown() : e.remain && null !== t.currentQuote() && (t.yaxisLabelStyle = "rect", t.labelType = "countdown", t.createYAxisLabel(t.chart.panel, e.remain, e.remainLabelY, "#15212d", "#FFFFFF"), t.labelType = null, t.yaxisLabelStyle = "roundRectArrow")
                        })), this.countdownInterval || (this.countdownInterval = setInterval(r, 1e3), r()))
                    }
                }, {
                    key: "setGranularity",
                    value: function(e) {
                        void 0 === this.mainStore.state.granularity ? (Object(f.d)(f.b.ChartControl, f.a.Interval, e.toString()), this.mainStore.chart.changeSymbol(void 0, e)) : console.error("Setting granularity does nothing since granularity prop is set. Consider overriding the onChange prop in <TimePeriod />")
                    }
                }, {
                    key: "updateProps",
                    value: function(e) {
                        void 0 !== this.mainStore.state.granularity && (this.onGranularityChange = "function" == typeof e ? e : function() {}, this.onGranularityChange(this.mainStore.state.granularity))
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        var e = this.context.stx;
                        this.timeUnit = Object(h.j)(e.layout), this.interval = e.layout.interval
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "loader",
                    get: function() {
                        return this.mainStore.loader
                    }
                }, {
                    key: "isTick",
                    get: function() {
                        return "tick" === this.timeUnit
                    }
                }, {
                    key: "remainLabelY",
                    get: function() {
                        var e = this.context.stx,
                            t = e.chart.currentPriceLabelY + 24;
                        return e.chart.currentPriceLabelY > e.chart.panel.bottom - 66 ? t = (t = e.chart.panel.bottom - 66) < e.chart.currentPriceLabelY - 24 ? t : e.chart.currentPriceLabelY - 24 : e.chart.currentPriceLabelY < e.chart.panel.top && (t = 36), t
                    }
                }, {
                    key: "timeUnit_display",
                    get: function() {
                        if (this.timeUnit) return e.translate(this.timeUnit.replace(/(\w)/, function(e) {
                            return e.toUpperCase()
                        }))
                    }
                }, {
                    key: "interval_display",
                    get: function() {
                        return this.interval % 60 == 0 ? this.interval / 60 : +this.interval ? this.interval : 1
                    }
                }, {
                    key: "display",
                    get: function() {
                        var e = this.timeUnit ? this.timeUnit[0] : "";
                        return this.interval_display + e
                    }
                }]), t
            }()).prototype, "timeUnit", [l.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), c = b(o.prototype, "interval", [l.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b(o.prototype, "setGranularity", [n], Object.getOwnPropertyDescriptor(o.prototype, "setGranularity"), o.prototype), b(o.prototype, "updateProps", [i], Object.getOwnPropertyDescriptor(o.prototype, "updateProps"), o.prototype), b(o.prototype, "updateDisplay", [a], Object.getOwnPropertyDescriptor(o.prototype, "updateDisplay"), o.prototype), b(o.prototype, "remainLabelY", [l.computed], Object.getOwnPropertyDescriptor(o.prototype, "remainLabelY"), o.prototype), b(o.prototype, "timeUnit_display", [l.computed], Object.getOwnPropertyDescriptor(o.prototype, "timeUnit_display"), o.prototype), b(o.prototype, "interval_display", [l.computed], Object.getOwnPropertyDescriptor(o.prototype, "interval_display"), o.prototype), b(o.prototype, "display", [l.computed], Object.getOwnPropertyDescriptor(o.prototype, "display"), o.prototype), o)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n, i, a, o, s, c, l, u, h, d, p, f, m, y, b, g, v, w, S, k, x, C, O, E, T, P, _, D = r(1),
                j = r(49),
                A = r(91),
                N = r(63),
                I = r(54),
                z = r(64),
                L = r(90),
                M = r(65),
                R = r(5),
                H = r(11),
                B = r(66),
                F = r(17),
                q = r(23),
                U = r(52),
                V = r(67),
                W = r(68);

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        G(e, t, r[t])
                    })
                }
                return e
            }

            function G(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function K(e) {
                return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Y(e, t, r, n) {
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }

            function X(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function J(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }

            function Z(e) {
                var t = e.viewBox.split(" ").slice(2);
                return '<svg width="'.concat(t[0], '" height="').concat(t[1], '"><use xlink:href="').concat(r.p + e.url, '" /></svg>')
            }
            var $ = (n = D.action.bound, i = D.action.bound, a = D.action.bound, o = D.action.bound, s = D.action.bound, c = D.action.bound, l = D.action.bound, u = D.action.bound, h = D.action.bound, d = D.action.bound, p = D.action.bound, f = D.action.bound, _ = P = function() {
                function t(e) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.RANGE_PADDING_PX = 125, this.contextPromise = new H.a, this.rootNode = null, this.stxx = null, this.api = null, this.defaults = {
                        granularity: 0,
                        chartType: "mountain"
                    }, this.granularity = void 0, this.enableRouting = null, this.chartNode = null, this.chartControlsNode = null, this.holderStyle = void 0, this.state = void 0, this.onMessage = null, Y(this, "containerWidth", y, this), Y(this, "context", b, this), Y(this, "currentActiveSymbol", g, this), Y(this, "isChartAvailable", v, this), Y(this, "chartHeight", w, this), Y(this, "chartContainerHeight", S, this), Y(this, "isMobile", k, this), Y(this, "cursorInChart", x, this), Y(this, "shouldRenderDialogs", C, this), Y(this, "yAxiswidth", O, this), this.updateCanvas = function() {
                        n.stxx && (n.stxx.slider && n.stxx.slider.display(n.stxx.layout.rangeSlider), n.stxx.resizeChart())
                    }, this.init = function(e, t, i) {
                        n.loader.show(), n.mainStore.state.setChartIsReady(!1), n.loader.setState("chart-engine"), window.CIQ ? n._initChart(e, t, i) : r.e(14).then(r.t.bind(null, 181, 7)).then(Object(D.action)(function(r) {
                            var a = r.CIQ,
                                o = r.SplinePlotter;
                            a.ChartEngine.htmlControls.baselineHandle = '<div class="stx-baseline-handle" style="display: none;">'.concat(Z(B.a), "</div>"), a.ChartEngine.htmlControls.iconsTemplate = '<div class="stx-panel-control"><div class="stx-panel-title"></div><div class="stx-btn-panel"><span class="stx-ico-up">'.concat(Z(U.a), '</span></div><div class="stx-btn-panel"><span class="stx-ico-focus">').concat(Z(W.a), '</span></div><div class="stx-btn-panel"><span class="stx-ico-down">').concat(Z(U.a), '</span></div><div class="stx-btn-panel"><span class="stx-ico-edit">').concat(Z(F.a), '</span></div><div class="stx-btn-panel"><span class="stx-ico-close">').concat(Z(q.a), "</span></div></div>"), a.ChartEngine.htmlControls.mSticky = '<div class="stx_sticky"> <span class="mStickyInterior"></span> <span class="mStickyRightClick"><span class="overlayEdit stx-btn" style="display:none"><span class="ic-edit">'.concat(Z(F.a), '</span><span class="ic-delete">').concat(Z(q.a), '</span></span> <span class="overlayTrashCan stx-btn" style="display:none"><span class="ic-edit">').concat(Z(F.a), '</span><span class="ic-delete">').concat(Z(q.a), '</span></span> <span class="mouseDeleteInstructions"><span>(</span><span class="mouseDeleteText">right-click to delete</span><span class="mouseManageText">right-click to manage</span><span>)</span></span></span></div>'), a.ChartEngine.htmlControls.home = '<div class="stx_jump_today" style="display:none">'.concat(Z(V.a), "</div>"), window.CIQ = a, o.plotSpline = M.a, n._initChart(e, t, i)
                        }))
                    }, this.onMarketOpenClosedChange = function(e) {
                        var t = n.stxx.getSymbols().map(function(e) {
                                return e.symbolObject
                            }),
                            r = !1,
                            i = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var s, c = t[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                var l = s.value,
                                    u = l.symbol,
                                    h = l.name;
                                u in e && (e[u] ? (r = !0, n.mainStore.state.setChartTheme(n.mainStore.chartSetting.theme, !1), n.mainStore.state.setChartClosed(!1), n.mainStore.notifier.notifyMarketOpen(h)) : (n.mainStore.state.setChartTheme(n.mainStore.chartSetting.theme, !0), n.mainStore.state.setChartClosed(!0), n.mainStore.notifier.notifyMarketClose(h)))
                            }
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                i || null == c.return || c.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        r && n.refreshChart()
                    }, Y(this, "calculateYaxisWidth", E, this), Y(this, "updateYaxisWidth", T, this), this.mainStore = e
                }
                return function(e, t, r) {
                    t && X(e.prototype, t), r && X(e, r)
                }(t, [{
                    key: "updateHeight",
                    value: function(e) {
                        var t = this.mainStore.chartSetting.historical && this.isMobile,
                            r = "bottom" === (e || this.mainStore.chartSetting.position) && this.stateStore.chartControlsWidgets ? 40 : 0;
                        this.chartHeight = this.chartNode.offsetHeight, this.chartContainerHeight = this.chartHeight - r - (t ? 45 : 0)
                    }
                }, {
                    key: "resizeScreen",
                    value: function() {
                        this.context && (this.modalNode.clientWidth >= 1280 ? this.containerWidth = 1280 : this.modalNode.clientWidth >= 900 ? this.containerWidth = 900 : this.containerWidth = 480, this.updateHeight(), this.updateCanvas(), setTimeout(this.updateCanvas, this.isMobile ? 500 : 100))
                    }
                }, {
                    key: "_initChart",
                    value: function(n, i, a) {
                        var o = this,
                            s = this;
                        Object(A.a)(), CIQ.ChartEngine.prototype.registerHTMLElements = function() {
                            var e = this.chart.container;
                            for (var t in CIQ.ChartEngine.htmlControls)
                                if (void 0 === this.chart[t] && void 0 === this.controls[t]) {
                                    if (!this.allowZoom && "chartControls" === t) continue;
                                    var r = this.container.querySelector(".".concat(t), e);
                                    if (r) this.chart[t] = r, this.controls[t] = r;
                                    else {
                                        var n = CIQ.ChartEngine.htmlControls[t];
                                        if (!n) continue;
                                        var i = document.createElement("DIV");
                                        i.innerHTML = n, r = i.firstChild, e.appendChild(r), this.chart[t] = r, this.controls[t] = r, CIQ.appendClassName(r, t)
                                    }
                                } var a = this.controls.chartControls,
                                o = this.controls.home;
                            if (a) {
                                var s = this.container.querySelector(".stx-zoom-in", a),
                                    c = this.container.querySelector(".stx-zoom-out", a);
                                CIQ.safeClickTouch(s, function(e) {
                                    return function(t) {
                                        e.zoomIn(t), t.stopPropagation()
                                    }
                                }(this)), CIQ.safeClickTouch(c, function(e) {
                                    return function(t) {
                                        e.zoomOut(t), t.stopPropagation()
                                    }
                                }(this)), CIQ.touchDevice || (this.makeModal(s), this.makeModal(c))
                            }
                            o && (CIQ.safeClickTouch(o, function(e) {
                                return function(t) {
                                    t.stopPropagation(), e.home({
                                        animate: !0
                                    })
                                }
                            }(this)), CIQ.touchDevice || this.makeModal(o))
                        }, CIQ.ChartEngine.prototype.home = function(e) {
                            this.swipe.amplitude = 0;
                            var t = this.layout;

                            function r(e) {
                                for (var t in e.panels)
                                    for (var r = e.panels[t].yaxisLHS.concat(e.panels[t].yaxisRHS), n = 0; n < r.length; n++) e.calculateYAxisMargins(r[n])
                            }

                            function n(e, t, n) {
                                return function() {
                                    r(e), t.scroll = n, e.draw()
                                }
                            }
                            if ("object" !== K(e) && (e = {
                                    maintainWhitespace: e
                                }), void 0 === e.maintainWhitespace && (e.maintainWhitespace = !0), this.cancelTouchSingleClick = !0, this.chart.dataSet && this.chart.dataSet.length) {
                                this.micropixels = 0;
                                var i = Math.floor(this.chart.width / t.candleWidth);
                                for (var a in this.charts) {
                                    var o = this.charts[a];
                                    if (!e.chart || e.chart === o) {
                                        var c = 0;
                                        e.maintainWhitespace && this.preferences.whitespace >= 0 && (c = this.preferences.whitespace), (e.whitespace || 0 === e.whitespace) && (c = e.whitespace);
                                        var l = this.getLabelOffsetInPixels(o, t.chartType);
                                        l > c && (c = l);
                                        var u = Math.min(i, o.dataSet.length);
                                        for (this.chart.allowScrollPast && (u = i), this.micropixels = this.chart.width - u * t.candleWidth - c, this.preferences.whitespace = c; this.micropixels > t.candleWidth;) u++, this.micropixels -= t.candleWidth;
                                        for (; this.micropixels < 0;) u--, this.micropixels += t.candleWidth;
                                        if (this.micropixels -= t.candleWidth, u++, this.mainSeriesRenderer && this.mainSeriesRenderer.standaloneBars || this.standaloneBars[t.chartType] || (this.micropixels += t.candleWidth / 2), this.isHistoricalMode() && s.isMobile ? u = parseInt(.8 * u, 10) : this.isHistoricalMode() && (u = parseInt(.9 * u, 10)), e.animate) {
                                            this.scrollTo(o, u, n(this, o, u))
                                        } else o.scroll = u, r(this)
                                    }
                                }
                                this.draw()
                            } else this.draw()
                        }, CIQ.ChartEngine.prototype.isHistoricalMode = function() {
                            return !!s.stateStore.endEpoch
                        }, this.rootNode = n, this.modalNode = i, this.chartNode = this.rootNode.querySelector(".ciq-chart-area"), this.chartControlsNode = this.rootNode.querySelector(".cq-chart-controls"), CIQ.Plotter.prototype.getYAxisWidth = function() {
                            return o.yAxiswidth
                        }, CIQ.ChartEngine.prototype.createYAxisLabel = function(e, t, r, n, i, a, o) {
                            if (!1 !== e.yAxis.drawPriceLabels && !e.yAxis.noDraw) {
                                var s = o || e.yAxis;
                                if (!s.noDraw && s.width) {
                                    var c = a || this.chart.context,
                                        l = 0;
                                    this.canvasFont("stx_price_label", c);
                                    var u, h = this.drawBorders ? 3 : 0,
                                        d = c.measureText(t).width;
                                    try {
                                        u = d + 9 > s.width ? d + h + 18 : s.width + 9
                                    } catch (e) {
                                        u = s.width
                                    }
                                    u -= 14, this.chart.yAxis.width < u ? (this.chart.yAxis.width = u, this.calculateYAxisPositions()) : u = this.chart.yAxis.width;
                                    var p = this.width - this.chart.yAxis.width,
                                        f = (u - d) / 2;
                                    s.width < 0 && (p += s.width - u), "left" === (null === s.position ? e.chart.yAxis.position : s.position) && (u *= -1, s.width < 0 && (p -= s.width + u), l = -3, c.textAlign = "right"), r + 12 > s.bottom && (r = s.bottom - 12), r - 12 < s.top && (r = s.top + 12), void 0 === CIQ[this.yaxisLabelStyle] && (this.yaxisLabelStyle = "roundRectArrow");
                                    var m = this.yaxisLabelStyle;
                                    s.yaxisLabelStyle && (m = s.yaxisLabelStyle), "crosshair" !== this.labelType && "countdown" !== this.labelType && (p += 14, f -= 8);
                                    var y = {
                                        ctx: c,
                                        x: p,
                                        y: r,
                                        top: r - 12,
                                        width: u,
                                        height: 24,
                                        radius: l,
                                        backgroundColor: n,
                                        fill: !0,
                                        stroke: !1,
                                        margin: {
                                            left: f,
                                            top: 1
                                        },
                                        txt: t,
                                        color: i
                                    };
                                    CIQ[m](y)
                                }
                            }
                        };
                        var c = a.symbol,
                            l = a.chartType,
                            u = a.granularity,
                            h = a.requestAPI,
                            d = a.requestSubscribe,
                            p = a.requestForget,
                            f = a.isMobile,
                            m = a.enableRouting,
                            y = a.onMessage,
                            b = a.settings,
                            g = a.onSettingsChange;
                        this.api = new j.b(h, d, p), this.tradingTimes = t.tradingTimes || (t.tradingTimes = new j.c(this.api)), this.activeSymbols = t.activeSymbols || (t.activeSymbols = new j.a(this.api, this.tradingTimes));
                        var v = this.mainStore.chartSetting;
                        v.setSettings(b), v.onSettingsChange = g, this.isMobile = f, this.state = this.mainStore.state, this.mainStore.notifier.onMessage = y, this.granularity = void 0 !== u ? u : this.defaults.granularity;
                        var w = {
                                maxMasterDataSize: 5e3,
                                markerDelay: null,
                                container: this.rootNode.querySelector(".chartContainer"),
                                controls: {
                                    chartControls: null
                                },
                                preferences: {
                                    currentPriceLine: !0,
                                    whitespace: f ? 50 : 150
                                },
                                chart: {
                                    yAxis: {
                                        initialMarginTop: 125,
                                        initialMarginBottom: 100,
                                        displayBorder: !0,
                                        justifyRight: !1
                                    },
                                    xAxis: {
                                        displayBorder: !0
                                    },
                                    gaplines: !0,
                                    dynamicYAxis: !0
                                },
                                minimumLeftBars: 2,
                                yTolerance: 999999
                            },
                            S = {
                                chartType: l || this.defaults.chartType
                            };
                        "spline" === S.chartType && (S.chartType = "mountain", w.chart.tension = S.tension = .5);
                        var k = this.getRangeSpan();
                        k && (S = Q({}, S, k)), w.layout = S;
                        var x = this.stxx = new CIQ.ChartEngine(w);
                        x.isAutoScale = b && !1 !== b.isAutoScale, t.chartCount += 1;
                        var C = x.chart.panel.holder.parentElement.querySelector(".mouseDeleteText"),
                            O = x.chart.panel.holder.parentElement.querySelector(".mouseManageText");
                        C.textContent = e.translate("right-click to delete"), O.textContent = e.translate("right-click to manage"), this.state.isAnimationEnabled && Object(z.a)(x, {
                            stayPut: !0
                        }), this.feed = new L.a(this.api, x, this.mainStore, this.tradingTimes), x.attachQuoteFeed(this.feed, {
                            refreshInterval: null
                        }), this.enableRouting = m, this.enableRouting && this.routingStore.handleRouting(), this.holderStyle = x.chart.panel.holder.style;
                        var E = new N.a(x, this.rootNode);
                        void 0 === t.keystrokeHub && (t.keystrokeHub = new I.a(document.body, null, {
                            cb: I.a.defaultHotKeys
                        }));
                        var T = this.mainStore.studies;
                        x.callbacks.studyOverlayEdit = T.editStudy, x.callbacks.studyPanelEdit = T.editStudy, this.loader.setState("market-symbol"), this.activeSymbols.retrieveActiveSymbols().then(function() {
                            o.loader.setState("trading-time"), o.tradingTimes.initialize().then(Object(D.action)(function() {
                                x.isDestroyed || (o.state.restoreLayout() || o.changeSymbol(c || Object.keys(o.activeSymbols.symbolMap)[0], o.granularity), o.context = E, o.chartClosedOpenThemeChange(!o.currentActiveSymbol.exchange_is_open), o.mainStore.chart.tradingTimes.onMarketOpenCloseChanged(Object(D.action)(function(e) {
                                    for (var t in e) o.currentActiveSymbol.symbol === t && o.chartClosedOpenThemeChange(!e[t])
                                })), o.state.importedLayout && o.state.importLayout(), x.container.addEventListener("mouseenter", o.onMouseEnter), x.container.addEventListener("mouseleave", o.onMouseLeave), o.contextPromise.resolve(o.context), o.resizeScreen(), Object(D.reaction)(function() {
                                    return [o.state.symbol, o.state.granularity]
                                }, function() {
                                    (void 0 !== o.state.symbol || void 0 !== o.state.granularity && !o.state.importedLayout) && o.changeSymbol(o.state.symbol, o.state.granularity)
                                }), o.tradingTimes.onMarketOpenCloseChanged(o.onMarketOpenClosedChange), setTimeout(Object(D.action)(function() {
                                    o.shouldRenderDialogs = !0
                                }), 500))
                            }))
                        }), "ResizeObserver" in window ? (this.resizeObserver = new ResizeObserver(this.resizeScreen), this.resizeObserver.observe(i)) : r.e(16).then(r.bind(null, 182)).then(function(e) {
                            var t = e.default;
                            window.ResizeObserver = t, !x.isDestroyed && i && (o.resizeObserver = new t(o.resizeScreen), o.resizeObserver.observe(i))
                        })
                    }
                }, {
                    key: "chartClosedOpenThemeChange",
                    value: function(e) {
                        this.mainStore.state.setChartClosed(e), this.mainStore.state.setChartTheme(this.mainStore.chartSetting.theme, e)
                    }
                }, {
                    key: "onMouseEnter",
                    value: function() {
                        this.cursorInChart = !0
                    }
                }, {
                    key: "onMouseLeave",
                    value: function() {
                        this.cursorInChart = !1
                    }
                }, {
                    key: "updateCurrentActiveSymbol",
                    value: function() {
                        var e = this.stxx.chart.symbolObject;
                        this.currentActiveSymbol = e, this.stxx.chart.yAxis.decimalPlaces = e.decimal_places, this.setMainSeriesDisplay(e.name)
                    }
                }, {
                    key: "setChartAvailability",
                    value: function(e) {
                        this.isChartAvailable = e
                    }
                }, {
                    key: "changeSymbol",
                    value: function(e, t) {
                        if ("string" == typeof e && (e = this.activeSymbols.getSymbolObj(e)), !(e && this.currentActiveSymbol) || e.symbol !== this.currentActiveSymbol.symbol || void 0 === t || t !== this.granularity) {
                            var r;
                            if (void 0 !== t && (this.granularity = t, r = {
                                    periodicity: Object(R.b)(t)
                                }), void 0 === r && e)
                                for (var n in this.stxx.chart.series) this.stxx.removeSeries(n);
                            this.newChart(e, r), e && this.updateCurrentActiveSymbol()
                        }
                    }
                }, {
                    key: "newChart",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentActiveSymbol,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        this.stxx.chart.symbolDisplay = t.name, this.loader.show(), this.mainStore.state.setChartIsReady(!1);
                        this.yAxiswidth = 0;
                        var n = this.getRangeSpan();
                        this.stxx.newChart(t, null, null, function(r) {
                            e.setMainSeriesDisplay(t.name), e.loader.hide(), e.mainStore.state.setChartIsReady(!0), r || (e.state.restoreDrawings(), e.mainStore.chart.feed.scaleChart())
                        }, Q({}, r, n)), this.chartClosedOpenThemeChange(!t.exchange_is_open)
                    }
                }, {
                    key: "getRangeSpan",
                    value: function() {
                        var e, t = this.state,
                            r = t.startEpoch,
                            n = t.endEpoch,
                            i = this.chartNode.clientWidth / this.RANGE_PADDING_PX,
                            a = ((n || r) - (r || n)) / i | 0;
                        if (r || n) {
                            var o = r ? CIQ.strToDateTime(Object(R.k)(r - a)) : void 0,
                                s = n ? CIQ.strToDateTime(Object(R.k)(n + a)) : void 0,
                                c = Object(R.b)(this.granularity);
                            return o && (e = {
                                base: "all",
                                periodicity: c
                            }), {
                                range: {
                                    dtLeft: o,
                                    dtRight: s,
                                    periodicity: c,
                                    goIntoFuture: !0,
                                    goIntoPast: !0
                                },
                                span: e
                            }
                        }
                    }
                }, {
                    key: "setMainSeriesDisplay",
                    value: function(e) {
                        this.stxx.chart.seriesRenderers._main_series.seriesParams[0].display = e, this.stxx.chart.seriesRenderers._main_series.seriesParams[0].field = "Close"
                    }
                }, {
                    key: "refreshChart",
                    value: function() {
                        this.newChart()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        t.chartCount -= 1, this.resizeObserver && this.resizeObserver.disconnect(), this.tradingTimes && 0 === t.chartCount && (t.tradingTimes = null, this.tradingTimes.destructor()), this.feed && (this.feed.unsubscribeAll(), this.feed = null), t.keystrokeHub.context === this.context && t.keystrokeHub.setActiveContext(null), this.stxx && (this.stxx.container.removeEventListener("mouseenter", this.onMouseEnter), this.stxx.container.removeEventListener("mouseleave", this.onMouseLeave), this.stxx.updateChartData = function() {}, this.stxx.isDestroyed = !0, this.stxx.destroy(), this.stxx = null)
                    }
                }, {
                    key: "loader",
                    get: function() {
                        return this.mainStore.loader
                    }
                }, {
                    key: "routingStore",
                    get: function() {
                        return this.mainStore.routing
                    }
                }, {
                    key: "stateStore",
                    get: function() {
                        return this.mainStore.state
                    }
                }, {
                    key: "pip",
                    get: function() {
                        return this.currentActiveSymbol.decimal_places
                    }
                }, {
                    key: "categorizedSymbols",
                    get: function() {
                        var e = this;
                        if (!this.activeSymbols || 0 === this.activeSymbols.categorizedSymbols.length) return [];
                        var t = this.activeSymbols.activeSymbols;
                        return Object(R.c)(t, function(t) {
                            return Q({}, t, {
                                selected: t.dataObject.symbol === e.currentActiveSymbol.symbol
                            })
                        })
                    }
                }]), t
            }(), P.keystrokeHub = void 0, P.chartCount = 0, P.tradingTimes = void 0, P.activeSymbols = void 0, y = J((m = _).prototype, "containerWidth", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = J(m.prototype, "context", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = J(m.prototype, "currentActiveSymbol", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), v = J(m.prototype, "isChartAvailable", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), w = J(m.prototype, "chartHeight", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), S = J(m.prototype, "chartContainerHeight", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), k = J(m.prototype, "isMobile", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), x = J(m.prototype, "cursorInChart", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), C = J(m.prototype, "shouldRenderDialogs", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), O = J(m.prototype, "yAxiswidth", [D.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), J(m.prototype, "pip", [D.computed], Object.getOwnPropertyDescriptor(m.prototype, "pip"), m.prototype), J(m.prototype, "resizeScreen", [n], Object.getOwnPropertyDescriptor(m.prototype, "resizeScreen"), m.prototype), J(m.prototype, "_initChart", [i], Object.getOwnPropertyDescriptor(m.prototype, "_initChart"), m.prototype), J(m.prototype, "categorizedSymbols", [D.computed], Object.getOwnPropertyDescriptor(m.prototype, "categorizedSymbols"), m.prototype), J(m.prototype, "onMouseEnter", [a], Object.getOwnPropertyDescriptor(m.prototype, "onMouseEnter"), m.prototype), J(m.prototype, "onMouseLeave", [o], Object.getOwnPropertyDescriptor(m.prototype, "onMouseLeave"), m.prototype), J(m.prototype, "updateCurrentActiveSymbol", [s], Object.getOwnPropertyDescriptor(m.prototype, "updateCurrentActiveSymbol"), m.prototype), J(m.prototype, "setChartAvailability", [c], Object.getOwnPropertyDescriptor(m.prototype, "setChartAvailability"), m.prototype), J(m.prototype, "changeSymbol", [l], Object.getOwnPropertyDescriptor(m.prototype, "changeSymbol"), m.prototype), E = J(m.prototype, "calculateYaxisWidth", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    var e = this;
                    return function(t) {
                        if (t) {
                            var r = e.context.stx.chart.context.measureText(t.toFixed(e.pip)).width + 20;
                            r > e.yAxiswidth && (e.yAxiswidth = r, e.stxx.chart.yAxis.width = r, e.stxx.calculateYAxisPositions(), e.stxx.draw())
                        }
                    }
                }
            }), T = J(m.prototype, "updateYaxisWidth", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    var e = this;
                    return function() {
                        if (e.stxx.masterData && e.stxx.masterData.length) {
                            var t = e.context.stx.currentQuote();
                            if (t && t.Close) e.calculateYaxisWidth(t.Close);
                            else {
                                var r = e.stxx.masterData.find(function(e) {
                                    return e.Close
                                });
                                r && e.calculateYaxisWidth(r.Close)
                            }
                        }
                    }
                }
            }), J(m.prototype, "newChart", [d], Object.getOwnPropertyDescriptor(m.prototype, "newChart"), m.prototype), J(m.prototype, "refreshChart", [p], Object.getOwnPropertyDescriptor(m.prototype, "refreshChart"), m.prototype), J(m.prototype, "destroy", [f], Object.getOwnPropertyDescriptor(m.prototype, "destroy"), m.prototype), m);
            t.a = $
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var i = function() {
            function e(t, r, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.params = n || {}, this.stx = t, this.topNode = r;
                var i = e.assembleContext(r);
                this.advertised = {}, r.CIQ.UI.context = this;
                for (var a = 0; a < i.Components.length; a++) i.Components[a].setContextPrivate(this)
            }
            return function(e, t, r) {
                t && n(e.prototype, t), r && n(e, r)
            }(e, [{
                key: "advertiseAs",
                value: function(e, t) {
                    this.advertised[t] = e
                }
            }, {
                key: "getAdvertised",
                value: function(e) {
                    return this.advertised[e]
                }
            }, {
                key: "setLoader",
                value: function(e) {
                    this.loader = e
                }
            }, {
                key: "isModal",
                value: function() {
                    return "" !== this.stx.openDialog
                }
            }], [{
                key: "assembleContext",
                value: function(e) {
                    return e.CIQ || (e.CIQ = {}), e.CIQ.UI || (e.CIQ.UI = {}), e.CIQ.UI.Components || (e.CIQ.UI.Components = []), e.CIQ.UI
                }
            }]), e
        }();
        t.a = i
    }, function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            var n = {
                stayPut: !1,
                ticksFromEdgeOfScreen: 5,
                granularity: 1e6
            };
            t = CIQ.extend(n, t), n.tension && (e.chart.tension = t.tension), e.tickAnimator = r || new CIQ.EaseMachine(Math.easeOutCubic, 500);
            var i = !1,
                a = null;
            e.addEventListener(["symbolChange", "layout"], function(e) {
                i = !1, a = null
            }), e.prepend("updateCurrentMarketData", function(e, t, r, n) {
                t || (t = this.chart), n && n.fromTrade && (t.closePendingAnimation || 0 === t.closePendingAnimation) && (n.finalClose = t.closePendingAnimation)
            }), e.append("updateChartData", function(e, t, r) {
                if (this.mainSeriesRenderer && this.mainSeriesRenderer.supportsAnimation) return !1;
                if ((t = t || this.chart).lockScroll) {
                    var n = e[e.length - 1],
                        i = t.dataSegment[t.dataSegment.length - 1];
                    if (!n || !i) return;
                    n.DT > i.DT && t.scroll <= t.dataSegment.length && t.scroll++
                }
            }), e.prepend("updateChartData", function(e, r, n) {
                var o = this;
                if (r || (r = o.chart), r && r.defaultChartStyleConfig && "none" != r.defaultChartStyleConfig && (void 0 === n || !n.animationEntry && !n.secondarySeries)) {
                    var s = o.tickAnimator,
                        c = this.mainSeriesRenderer && this.mainSeriesRenderer.supportsAnimation;
                    if (c) {
                        if (!s) return void console.warn("Animation plug-in can not run because the tickAnimator has not been declared. See instructions in animation.js");
                        if (this.prevSymbol != r.symbol && (this.prevQuote = 0, r.closePendingAnimation = null, this.prevSymbol = r.symbol), T(), s.stop(), e.length > 2) return
                    }
                    var l = CIQ.clone(n);
                    l || (l = {}), l.animationEntry = !0, l.bypassGovernor = !0, l.noCreateDataSet = !1, l.firstLoop = !0;
                    var u = this.chart.symbol,
                        h = this.layout.periodicity,
                        d = this.layout.interval,
                        p = this.layout.timeUnit;
                    if (c) {
                        var f = e[e.length - 1];
                        this.prevQuote = this.currentQuote();
                        var m = !1;
                        if (1 == h && 2 == e.length && (this.prevQuote = e[0], E(this.prevQuote)), !f || !f.Close || !this.prevQuote) {
                            if (this.prevQuote && r.lockScroll && (null === f.Close && (s.stop(), T()), null !== r.entryTick && void 0 !== r.entryTick)) {
                                var y = r.dataSet.length - r.entryTick + 1;
                                this.setMaxTicks(y + 3), r.scroll = y + 1
                            }
                            return !1
                        }
                        if (null === this.prevQuote.Close) {
                            var b = this.chart.dataSet[this.chart.dataSet.length - 2];
                            if (!b || !b.Close) return !1;
                            this.prevQuote = b
                        }
                        if (this.extendedHours && r.market.market_def) {
                            var g = f.DT;
                            if (CIQ.ChartEngine.isDailyInterval(d)) i = !r.market.isMarketDate(g);
                            else if (!a || a <= g) {
                                var v = r.market.getSession(g);
                                i = !("" === v || this.layout.marketSessions && this.layout.marketSessions[v]), a = r.market[i ? "getNextOpen" : "getNextClose"](g)
                            }
                            if (i) return this.draw(), !1
                        }
                        var w = h;
                        "second" == d || "second" == p ? w *= 1e3 : "minute" != d && "minute" != p || (w *= 6e4), isNaN(d) || (w *= d), m = "day" == d || "day" == p ? f.DT.getDate() != this.prevQuote.DT.getDate() : "week" == d || "week" == p ? f.DT.getDate() >= this.prevQuote.DT.getDate() + 7 : "month" == d || "month" == p ? f.DT.getMonth() != this.prevQuote.DT.getMonth() : f.DT.getTime() >= this.prevQuote.DT.getTime() + w;
                        var S = !(this.mainSeriesRenderer && this.mainSeriesRenderer.standaloneBars || this.standaloneBars[this.layout.chartType]),
                            k = 0;
                        if (m) {
                            if (!this.animations.zoom.hasCompleted) return !1;
                            var x = this.layout.candleWidth;
                            if (r.scroll <= r.maxTicks && !r.lockScroll)
                                for (; this.micropixels > 0;) r.scroll++, this.micropixels -= x;
                            if (r.scroll <= r.maxTicks && !r.lockScroll) this.previousMicroPixels = this.micropixels, this.nextMicroPixels = this.micropixels + x, k = -1 * x, r.dataSegment && r.dataSegment.length < r.maxTicks - t.ticksFromEdgeOfScreen && !t.stayPut && (r.scroll++, this.nextMicroPixels = this.micropixels), r.animatingHorizontalScroll = S && !r.lockScroll, r.previousDataSetLength = r.dataSet.length;
                            else if (r.lockScroll)
                                if (void 0 !== r.entryTick && null !== r.entryTick) {
                                    var C = r.dataSet.length - r.entryTick + 1;
                                    this.setMaxTicks(C + 3), r.scroll = C + 1
                                } else this.setMaxTicks(r.dataSet.length + (Math.floor(r.dataSet.length / 5) || 2)), r.scroll = r.dataSet.length + (Math.floor(r.dataSet.length / 10) || 1);
                            else r.scroll += 1
                        }
                        r.closePendingAnimation = f.Close;
                        var O = m && !S ? f.Open : this.prevQuote.Close;
                        return s.run(function(e, n, i) {
                            return function(a) {
                                var c = a.Close;
                                if (!r.dataSet.length || u != r.symbol || h != o.layout.periodicity || d != o.layout.interval || p != o.layout.timeUnit) return s.stop(), void T();
                                var f = CIQ.clone(e);
                                f.Close = Math.round(c * t.granularity) / t.granularity, r.animatingHorizontalScroll && (o.micropixels = a.micropixels, r.lastTickOffset = a.lineOffset), l.updateDataSegmentInPlace = !s.hasCompleted;
                                var m = [f];
                                i && m.unshift(n), o.updateChartData(m, r, l), l.firstLoop = !1, s.hasCompleted && T()
                            }
                        }(f, CIQ.clone(this.prevQuote), m), {
                            Close: O,
                            micropixels: this.nextMicroPixels,
                            lineOffset: k
                        }, {
                            Close: f.Close,
                            micropixels: this.micropixels,
                            lineOffset: 0
                        }), !0
                    }
                }

                function E(e) {
                    if (r.masterData)
                        for (var t = r.masterData.length - 1; t >= 0; t--) {
                            var n = r.masterData[t];
                            if (n.Close || 0 === n.Close) return n.Close = e.Close, e.LastSize && (n.LastSize = e.LastSize), e.LastTime && (n.LastTime = e.LastTime), o.updateCurrentMarketData({
                                Close: n.Close,
                                DT: n.DT,
                                LastSize: n.LastSize,
                                LastTime: n.LastTime
                            }), void o.createDataSet(null, null, {
                                appending: !0
                            })
                        }
                }

                function T() {
                    if (r.animatingHorizontalScroll && (r.animatingHorizontalScroll = !1, o.micropixels = o.nextMicroPixels = o.previousMicroPixels, r.lastTickOffset = 0), null !== r.closePendingAnimation) {
                        var e = r.closePendingAnimation;
                        r.closePendingAnimation = null, E({
                            Close: e
                        })
                    }
                }
            })
        }
        r.d(t, "a", function() {
            return n
        })
    }, function(e, t, r) {
        "use strict";

        function n(e, t, r, n) {
            function i(r) {
                var n = e[r],
                    i = e[r + 1],
                    a = e[r + 2],
                    o = e[r + 3],
                    s = e[r + 4],
                    c = e[r + 5];
                if (isNaN(n) || isNaN(a) || isNaN(s) || isNaN(i) || isNaN(o) || isNaN(c)) return null;
                var l = Math.sqrt(Math.pow(a - n, 2) + Math.pow(o - i, 2)),
                    u = Math.sqrt(Math.pow(s - a, 2) + Math.pow(c - o, 2)),
                    h = t * l / (l + u),
                    d = t - h;
                return [a + h * (n - s), o + h * (i - c), a - d * (n - s), o - d * (i - c)]
            }(!t || t < 0) && (t = 0);
            for (var a = [], o = e.length, s = 0; s < o - 4; s += 2) a = a.concat(i(s));
            if (null !== a) {
                n || (n = []);
                var c = 0;
                r.moveTo(e[0], e[1]), u(0), r.quadraticCurveTo(a[0], a[1], e[2], e[3]);
                for (var l = 2; l < o - 5; l += 2) u(l), r.bezierCurveTo(a[2 * l - 2], a[2 * l - 1], a[2 * l], a[2 * l + 1], e[l + 2], e[l + 3]);
                u(o - 4), r.quadraticCurveTo(a[2 * o - 10], a[2 * o - 9], e[o - 2], e[o - 1])
            }

            function u(t) {
                if (c !== n.length) {
                    var i = n[c];
                    i.coord[0] === e[t] && i.coord[1] === e[t + 1] && (r.stroke(), r.strokeStyle = i.color, r.setLineDash(i.pattern), r.lineDashOffset = 0, r.lineWidth = i.width, r.beginPath(), r.moveTo(e[t], e[t + 1]), c++)
                }
            }
        }
        r.d(t, "a", function() {
            return n
        })
    }, function(e, t, r) {
        "use strict";
        t.a = {
            id: "resize-icon-usage",
            viewBox: "0 0 6 14",
            url: r.p + "sprite-606f3c.smartcharts.svg#resize-icon-usage",
            toString: function() {
                return this.url
            }
        }
    }, function(e, t, r) {
        "use strict";
        t.a = {
            id: "jump-to-today-usage",
            viewBox: "0 0 15.1 13.4",
            url: r.p + "sprite-606f3c.smartcharts.svg#jump-to-today-usage",
            toString: function() {
                return this.url
            }
        }
    }, function(e, t, r) {
        "use strict";
        t.a = {
            id: "ic-maximize-usage",
            viewBox: "0 0 16 16",
            url: r.p + "sprite-606f3c.smartcharts.svg#ic-maximize-usage",
            toString: function() {
                return this.url
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return T
            });
            var n, i, a, o, s, c, l, u = r(1),
                h = r(7),
                d = r(70),
                p = r(3),
                f = r(19),
                m = r(71),
                y = r(8),
                b = r(20),
                g = r(2);

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        w(e, t, r[t])
                    })
                }
                return e
            }

            function w(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function S(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function k(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }

            function C() {
                return [{
                    id: "mountain",
                    text: e.translate("Line"),
                    candleOnly: !1,
                    icon: p.D
                }, {
                    id: "line",
                    text: e.translate("Dot"),
                    candleOnly: !1,
                    icon: p.q
                }, {
                    id: "colored_line",
                    text: e.translate("Colored Dot"),
                    candleOnly: !1,
                    icon: p.C
                }, {
                    id: "spline",
                    text: e.translate("Spline"),
                    candleOnly: !1,
                    icon: p.O
                }, {
                    id: "baseline",
                    text: e.translate("Baseline"),
                    candleOnly: !1,
                    icon: p.e
                }, {
                    id: "candle",
                    text: e.translate("Candle"),
                    candleOnly: !0,
                    icon: p.f
                }, {
                    id: "colored_bar",
                    text: e.translate("OHLC"),
                    candleOnly: !0,
                    icon: p.F
                }, {
                    id: "hollow_candle",
                    text: e.translate("Hollow Candle"),
                    candleOnly: !0,
                    icon: p.x
                }, {
                    id: "heikinashi",
                    text: e.translate("Heikin Ashi"),
                    candleOnly: !0,
                    icon: p.w
                }, {
                    id: "kagi",
                    text: e.translate("Kagi"),
                    candleOnly: !0,
                    icon: p.A,
                    settingsOnClick: !0
                }, {
                    id: "linebreak",
                    text: e.translate("Line Break"),
                    candleOnly: !0,
                    icon: p.B,
                    settingsOnClick: !0
                }, {
                    id: "renko",
                    text: e.translate("Renko"),
                    candleOnly: !0,
                    icon: p.L,
                    settingsOnClick: !0
                }, {
                    id: "rangebars",
                    text: e.translate("Range Bars"),
                    candleOnly: !0,
                    icon: p.K,
                    settingsOnClick: !0
                }, {
                    id: "pandf",
                    text: e.translate("Point & Figure"),
                    candleOnly: !0,
                    icon: p.H,
                    settingsOnClick: !0
                }, {
                    id: "table",
                    text: e.translate("Table"),
                    candleOnly: !1,
                    icon: p.Q
                }]
            }
            var O = C().filter(function(e) {
                    return !e.candleOnly
                }).map(function(e) {
                    return e.id
                }),
                E = C().filter(function(e) {
                    return e.settingsOnClick
                });
            var T = (n = u.action.bound, i = u.action.bound, a = u.action.bound, o = u.action.bound, s = u.action.bound, l = x((c = function() {
                function t(r) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t, r, n) {
                        r && Object.defineProperty(e, t, {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                            writable: r.writable,
                            value: r.initializer ? r.initializer.call(n) : void 0
                        })
                    }(this, "type", l, this), this.onChartTypeChanged = void 0, this.onContextReady = function() {
                        n.aggregates = {
                            heikinashi: !0,
                            kagi: {
                                title: e.translate("Kagi"),
                                inputs: [{
                                    id: "kagi",
                                    title: e.translate("Reversal Percentage"),
                                    type: "numericinput"
                                }]
                            },
                            renko: {
                                title: e.translate("Renko"),
                                inputs: [{
                                    id: "renko",
                                    title: e.translate("Range"),
                                    type: "numericinput"
                                }]
                            },
                            linebreak: {
                                title: e.translate("Line Break"),
                                inputs: [{
                                    id: "priceLines",
                                    title: e.translate("Price Lines"),
                                    type: "numericinput",
                                    max: 10,
                                    step: 1,
                                    min: 1
                                }]
                            },
                            rangebars: {
                                title: e.translate("Range Bars"),
                                inputs: [{
                                    id: "range",
                                    title: e.translate("Range"),
                                    type: "numericinput"
                                }]
                            },
                            pandf: {
                                title: e.translate("Point & Figure"),
                                inputs: [{
                                    id: "box",
                                    title: e.translate("Box Size"),
                                    type: "numericinput"
                                }, {
                                    id: "reversal",
                                    title: e.translate("Reversal"),
                                    type: "numericinput"
                                }]
                            }
                        }, n.chartTypes = C(), n.setChartTypeFromLayout(n.stx.layout), Object(u.reaction)(function() {
                            return n.mainStore.state.chartType
                        }, function() {
                            void 0 !== n.mainStore.state.chartType && n.setType(n.mainStore.state.chartType)
                        })
                    }, this.updateAggregate = function(e) {
                        var t = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                                var s = a.value,
                                    c = s.id,
                                    l = s.value,
                                    u = CIQ.deriveFromObjectChain(n.stx.layout, c);
                                u.obj[u.member] = l
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                t || null == o.return || o.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        n.stx.changeOccurred("layout"), n.stx.createDataSet(), n.stx.draw()
                    }, this.mainStore = r, Object(u.when)(function() {
                        return n.context
                    }, this.onContextReady), this.menu = new h.a(r, {
                        route: "chart-type"
                    }), this.list = new d.a({
                        getContext: function() {
                            return n.context
                        },
                        getItems: function() {
                            return n.types
                        }
                    }), this.settingsDialog = new f.a({
                        mainStore: r,
                        onChanged: function(e) {
                            return n.updateAggregate(e)
                        }
                    }), this.ChartTypeMenu = this.menu.connect(y.a), this.ChartTypeList = this.list.connect(m.a), this.AggregateChartSettingsDialog = this.settingsDialog.connect(b.a)
                }
                return function(e, t, r) {
                    t && k(e.prototype, t), r && k(e, r)
                }(t, [{
                    key: "setTypeFromUI",
                    value: function(e) {
                        void 0 === this.chartTypeProp ? this.setType(e) : console.error("Changing chart type does nothing because chartType prop is being set. Consider overriding the onChange prop in <ChartTypes />")
                    }
                }, {
                    key: "setType",
                    value: function(e) {
                        Object(g.d)(g.b.ChartControl, g.a.ChartType, e), "string" == typeof e && (e = this.types.find(function(t) {
                            return t.id === e
                        })), e.id !== this.type.id && ("table" !== e.id ? ("spline" === e.id ? (this.stx.chart.tension = this.stx.layout.tension = .5, this.stx.setChartType("mountain")) : (this.stx.chart.tension = 0, delete this.stx.layout.tension, this.aggregates[e.id] ? (this.stx.chart.baseline.userLevel = !1, this.stx.setAggregationType(e.id), this.stx.chart.baseline.userLevel = null) : this.stx.setChartType(e.id)), this.type = e) : this.mainStore.chartTable.setOpen(!0))
                    }
                }, {
                    key: "updateProps",
                    value: function(e) {
                        this.onChartTypeChanged = e
                    }
                }, {
                    key: "showAggregateDialog",
                    value: function(e) {
                        var t = this;
                        e !== this.type.id && this.setType(e);
                        var r = this.aggregates[e];
                        this.settingsDialog.title = r.title;
                        var n = r.inputs.map(function(e) {
                            var r = e.id,
                                n = S(e, ["id"]),
                                i = "box" === r || "reversal" === r ? "pandf.".concat(r) : r,
                                a = CIQ.deriveFromObjectChain(t.stx.layout, i),
                                o = a.obj[a.member],
                                s = t.stx.chart.defaultChartStyleConfig[r];
                            return v({
                                id: i,
                                value: void 0 != o ? o : s,
                                defaultValue: s
                            }, n)
                        });
                        this.settingsDialog.items = n, this.settingsDialog.setOpen(!0)
                    }
                }, {
                    key: "setChartTypeFromLayout",
                    value: function(e) {
                        var t = this.getChartTypeFromLayout(e),
                            r = this.chartTypes.findIndex(function(e) {
                                return e.id === t
                            });
                        this.type = this.chartTypes[r]
                    }
                }, {
                    key: "getChartTypeFromLayout",
                    value: function(e) {
                        return e.tension ? "spline" : this.aggregates[e.aggregationType] ? e.aggregationType : e.chartType
                    }
                }, {
                    key: "isTypeCandle",
                    value: function(e) {
                        return "string" == typeof e && (e = this.types.find(function(t) {
                            return t.id === e
                        })), -1 === O.indexOf(e.id)
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }, {
                    key: "chartTypeProp",
                    get: function() {
                        return this.mainStore.state.chartType
                    }
                }, {
                    key: "isCandle",
                    get: function() {
                        return -1 === O.indexOf(this.type.id)
                    }
                }, {
                    key: "isAggregateChart",
                    get: function() {
                        var e = this;
                        return !!E.find(function(t) {
                            return t.id === e.stx.layout.aggregationType
                        })
                    }
                }, {
                    key: "types",
                    get: function() {
                        var e = this,
                            t = "tick" === this.mainStore.timeperiod.timeUnit;
                        return void 0 === this.chartTypes && (this.chartTypes = C()), this.chartTypes.map(function(r) {
                            return v({}, r, {
                                active: r.id === e.type.id,
                                disabled: !!r.candleOnly && t
                            })
                        })
                    }
                }]), t
            }()).prototype, "type", [u.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "mountain"
                }
            }), x(c.prototype, "setTypeFromUI", [n], Object.getOwnPropertyDescriptor(c.prototype, "setTypeFromUI"), c.prototype), x(c.prototype, "setType", [i], Object.getOwnPropertyDescriptor(c.prototype, "setType"), c.prototype), x(c.prototype, "updateProps", [a], Object.getOwnPropertyDescriptor(c.prototype, "updateProps"), c.prototype), x(c.prototype, "showAggregateDialog", [o], Object.getOwnPropertyDescriptor(c.prototype, "showAggregateDialog"), c.prototype), x(c.prototype, "types", [u.computed], Object.getOwnPropertyDescriptor(c.prototype, "types"), c.prototype), x(c.prototype, "setChartTypeFromLayout", [s], Object.getOwnPropertyDescriptor(c.prototype, "setChartTypeFromLayout"), c.prototype), c)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return c
        });
        var n, i, a = r(1),
            o = r(4);

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var c = (n = a.action.bound, function(e, t, r, n, i) {
            var a = {};
            Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null)
        }((i = function() {
            function e(t) {
                var r = this,
                    n = t.getContext,
                    i = t.getItems,
                    a = t.onItemSelected;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.connect = Object(o.a)(function() {
                    return {
                        items: r.getItems(),
                        onItemClick: r.onItemClick
                    }
                }), this.getContext = n, this.getItems = i, this.onItemSelected = a
            }
            return function(e, t, r) {
                t && s(e.prototype, t), r && s(e, r)
            }(e, [{
                key: "onItemClick",
                value: function(e, t) {
                    this.onItemSelected(t)
                }
            }]), e
        }()).prototype, "onItemClick", [n], Object.getOwnPropertyDescriptor(i.prototype, "onItemClick"), i.prototype), i)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(14),
            o = r.n(a);
        r(133);
        t.a = function(e) {
            var t = e.height,
                r = e.items,
                n = e.onItemClick,
                a = e.children,
                s = "function" == typeof a ? a : function(e) {
                    return e.text
                };
            return i.a.createElement(o.a, {
                className: "ciq-list",
                autoHeight: !0,
                style: t && {
                    height: "".concat(t, "px")
                }
            }, r.map(function(e, t) {
                return i.a.createElement("div", {
                    key: e.id,
                    className: function(e) {
                        return "ciq-list-item" + " ".concat(e.disabled ? "disabled" : "") + " ".concat(e.active ? "active" : "")
                    }(e),
                    onClick: function() {
                        return n(t, e)
                    }
                }, s(e))
            }))
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return E
            });
            var n, i, a, o, s, c, l, u, h, d = r(1),
                p = r(7),
                f = r(21),
                m = r(19),
                y = r(20),
                b = r(8),
                g = r(12),
                v = r(2);

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        x(e, t, r[t])
                    })
                }
                return e
            }

            function x(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function O(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var E = (n = d.action.bound, i = d.action.bound, a = d.action.bound, o = d.action.bound, s = d.action.bound, c = d.action.bound, l = d.action.bound, h = O((u = function() {
                function t(r) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.onContextReady = function() {
                            n.stx.callbacks.studyOverlayEdit = n.editStudy, n.stx.callbacks.studyPanelEdit = n.editStudy, n.stx.append("createDataSet", n.renderLegend), n.stx.append("drawPanels", function() {
                                var e = Object.keys(n.stx.panels)[1];
                                e && (n.stx.panels[e].up.style.display = "none")
                            }), n.renderLegend()
                        }, this.previousStudies = {}, this.searchInputClassName = void 0,
                        function(e, t, r, n) {
                            r && Object.defineProperty(e, t, {
                                enumerable: r.enumerable,
                                configurable: r.configurable,
                                writable: r.writable,
                                value: r.initializer ? r.initializer.call(n) : void 0
                            })
                        }(this, "activeStudies", h, this), this.renderLegend = function() {
                            n.shouldRenderLegend() && n.updateActiveStudies()
                        }, this.mainStore = r, Object(d.when)(function() {
                            return n.context
                        }, this.onContextReady), this.menu = new p.a(r, {
                            route: "indicators"
                        }), this.categoricalDisplay = new f.a({
                            activeOptions: [{
                                id: "edit",
                                onClick: function(e) {
                                    return n.editStudy(e)
                                }
                            }, {
                                id: "delete",
                                onClick: function(e) {
                                    return n.deleteStudy(e)
                                }
                            }],
                            getIsShown: function() {
                                return n.menu.open
                            },
                            getCategoricalItems: function() {
                                return n.categorizedStudies
                            },
                            getActiveCategory: function() {
                                return n.activeStudies
                            },
                            onSelectItem: this.onSelectItem.bind(this),
                            placeholderText: e.translate('"Mass Index" or "Doji Star"'),
                            favoritesId: "indicators",
                            mainStore: r,
                            searchInputClassName: function() {
                                return n.searchInputClassName
                            }
                        }), this.settingsDialog = new m.a({
                            mainStore: r,
                            onDeleted: function() {
                                return n.deleteStudy(n.helper)
                            },
                            favoritesId: "indicators",
                            onChanged: function(e) {
                                return n.updateStudy(n.helper.sd, e)
                            }
                        }), this.StudyCategoricalDisplay = this.categoricalDisplay.connect(g.b), this.StudyMenu = this.menu.connect(b.a), this.StudySettingsDialog = this.settingsDialog.connect(y.a)
                }
                return function(e, t, r) {
                    t && C(e.prototype, t), r && C(e, r)
                }(t, [{
                    key: "onSelectItem",
                    value: function(e) {
                        var t = CIQ.Studies.addStudy(this.stx, e);
                        this.changeStudyPanelTitle(t), Object(v.d)(v.b.ChartControl, v.a.Indicator, "Add ".concat(e)), this.menu.setOpen(!1)
                    }
                }, {
                    key: "updateProps",
                    value: function(e) {
                        this.searchInputClassName = e
                    }
                }, {
                    key: "editStudy",
                    value: function(t) {
                        var r = new CIQ.Studies.DialogHelper(t);
                        this.helper = r, Object(v.d)(v.b.ChartControl, v.a.Indicator, "Edit ".concat(r.name));
                        var n = r.attributes,
                            i = r.inputs.map(function(t) {
                                return k({
                                    id: t.name,
                                    title: e.translate(t.heading),
                                    value: t.value,
                                    defaultValue: t.defaultInput,
                                    type: "checkbox" === t.type ? "switch" : t.type,
                                    options: t.options || null
                                }, n[t.name], {
                                    category: "inputs"
                                })
                            }),
                            a = r.outputs.map(function(t) {
                                return {
                                    id: t.name,
                                    title: e.translate(t.heading),
                                    defaultValue: t.defaultOutput,
                                    value: t.color,
                                    type: "colorpicker",
                                    category: "outputs"
                                }
                            }),
                            o = r.parameters.map(function(t) {
                                var r = k({
                                    title: e.translate(t.heading)
                                }, n[t.name], {
                                    category: "parameters"
                                });
                                if (t.defaultValue.constructor === Boolean) return k({}, r, {
                                    id: "".concat(t.name, "Enabled"),
                                    value: t.value,
                                    defaultValue: t.defaultValue,
                                    type: "switch"
                                });
                                if (t.defaultValue.constructor === Number) return k({}, r, {
                                    id: t.name,
                                    type: "numbercolorpicker",
                                    defaultValue: {
                                        Color: t.defaultColor,
                                        Value: t.defaultValue
                                    },
                                    value: {
                                        Color: t.color,
                                        Value: t.value
                                    }
                                });
                                throw new Error("Unrecognised parameter!")
                            });
                        this.settingsDialog.id = t.sd.type, this.settingsDialog.items = S(a).concat(S(i), S(o)), this.settingsDialog.title = e.translate(t.sd.libraryEntry.name), this.settingsDialog.description = "", this.settingsDialog.setOpen(!0)
                    }
                }, {
                    key: "deleteStudy",
                    value: function(e) {
                        var t = this,
                            r = e.sd;
                        Object(v.d)(v.b.ChartControl, v.a.Indicator, "Remove ".concat(r.name)), r.permanent || setTimeout(function() {
                            CIQ.Studies.removeStudy(t.stx, r), t.renderLegend()
                        }, 0)
                    }
                }, {
                    key: "updateStudy",
                    value: function(t, r) {
                        var n = {},
                            i = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var s, c = r[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                var l = s.value,
                                    u = l.id,
                                    h = l.category,
                                    d = l.value;
                                if ("numbercolorpicker" === l.type ? t[h]["".concat(u, "Color")] !== d.Color || t[h]["".concat(u, "Value")] !== d.Value : t[h][u] !== d)
                                    if (n[h] = n[h] || {}, "object" === w(d))
                                        for (var p in d) n[h]["".concat(u).concat(p)] = d[p];
                                    else n[h][u] = d
                            }
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                i || null == c.return || c.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        0 !== Object.keys(n).length && (this.helper.updateStudy(n), this.updateActiveStudies(), this.stx.draw(), this.changeStudyPanelTitle(this.helper.sd), this.settingsDialog.title = e.translate(this.helper.sd.libraryEntry.name))
                    }
                }, {
                    key: "changeStudyPanelTitle",
                    value: function(e) {
                        this.mainStore.chart.isMobile && (this.stx.panels[e.panel].display = e.type, this.stx.draw(), this.mainStore.state.saveLayout())
                    }
                }, {
                    key: "shouldRenderLegend",
                    value: function() {
                        var e = this.stx;
                        if (!e.layout.studies) return !1;
                        if (CIQ.objLength(this.previousStudies) === CIQ.objLength(e.layout.studies)) {
                            var t = !1;
                            for (var r in e.layout.studies)
                                if (!this.previousStudies[r]) {
                                    t = !0;
                                    break
                                } if (!t) return !1
                        }
                        return this.previousStudies = CIQ.shallowClone(e.layout.studies), !0
                    }
                }, {
                    key: "updateActiveStudies",
                    value: function() {
                        var t = this,
                            r = this.stx,
                            n = [];
                        Object.keys(r.layout.studies || []).forEach(function(i) {
                            var a = r.layout.studies[i];
                            a.customLegend || n.push({
                                enabled: !0,
                                display: t.mainStore.chart.isMobile ? e.translate(a.libraryEntry.name) : a.inputs.display,
                                dataObject: {
                                    stx: r,
                                    sd: a,
                                    inputs: a.inputs,
                                    outputs: a.outputs,
                                    parameters: a.parameters
                                }
                            })
                        }), this.activeStudies.data = n
                    }
                }, {
                    key: "clearStudies",
                    value: function() {
                        this.context && this.context.advertised.Layout.clearStudies()
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }, {
                    key: "categorizedStudies",
                    get: function() {
                        var t = [],
                            r = {
                                Beta: !0
                            };
                        return Object.keys(CIQ.Studies.studyLibrary).forEach(function(n) {
                            if (!r[n]) {
                                var i = CIQ.Studies.studyLibrary[n];
                                t.push({
                                    enabled: !0,
                                    display: e.translate(i.name),
                                    dataObject: n,
                                    itemId: n
                                })
                            }
                        }), [{
                            categoryName: e.translate("Indicators"),
                            categoryId: "indicators",
                            hasSubcategory: !1,
                            data: t
                        }]
                    }
                }]), t
            }()).prototype, "activeStudies", [d.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return {
                        categoryName: e.translate("Active"),
                        categoryId: "active",
                        hasSubcategory: !1,
                        emptyDescription: e.translate("There are no active indicators yet."),
                        data: []
                    }
                }
            }), O(u.prototype, "onSelectItem", [n], Object.getOwnPropertyDescriptor(u.prototype, "onSelectItem"), u.prototype), O(u.prototype, "updateProps", [i], Object.getOwnPropertyDescriptor(u.prototype, "updateProps"), u.prototype), O(u.prototype, "editStudy", [a], Object.getOwnPropertyDescriptor(u.prototype, "editStudy"), u.prototype), O(u.prototype, "deleteStudy", [o], Object.getOwnPropertyDescriptor(u.prototype, "deleteStudy"), u.prototype), O(u.prototype, "updateStudy", [s], Object.getOwnPropertyDescriptor(u.prototype, "updateStudy"), u.prototype), O(u.prototype, "updateActiveStudies", [c], Object.getOwnPropertyDescriptor(u.prototype, "updateActiveStudies"), u.prototype), O(u.prototype, "clearStudies", [l], Object.getOwnPropertyDescriptor(u.prototype, "clearStudies"), u.prototype), u)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(3),
            o = r(4);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var d = function(e) {
            function t() {
                var e, r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return (r = l(this, (e = u(t)).call.apply(e, [this].concat(i)))).clearFilterText = function() {
                    r.props.onChange("")
                }, r.onChange = function(e) {
                    r.props.onChange(e.target.value)
                }, r
            }
            return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(t, n["Component"]),
                function(e, t, r) {
                    t && c(e.prototype, t), r && c(e, r)
                }(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.placeholder,
                            r = e.value,
                            n = e.searchInput,
                            o = e.searchInputClassName;
                        return i.a.createElement("div", {
                            className: "cq-lookup-input ".concat("" !== r.trim() ? "active" : "")
                        }, i.a.createElement("input", {
                            className: o,
                            value: r,
                            ref: n,
                            onChange: this.onChange,
                            type: "text",
                            spellCheck: "off",
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            placeholder: t
                        }), i.a.createElement(a.M, null), i.a.createElement(a.i, {
                            className: "icon-reset",
                            onClick: this.clearFilterText
                        }))
                    }
                }]), t
        }();
        t.a = Object(o.a)(function(e) {
            return {
                isMobile: e.chart.isMobile
            }
        })(d)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return k
            });
            var n, i, a, o, s, c, l, u, h = r(0),
                d = r.n(h),
                p = r(1),
                f = r(7),
                m = r(21),
                y = r(12),
                b = r(8),
                g = r(2);

            function v(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function w(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var S = ["#8ec648", "#00afed", "#ee652e", "#912a8e", "#fff126", "#e9088c", "#ea1d2c", "#00a553", "#00a99c", "#0056a4", "#f4932f", "#0073ba", "#66308f", "#323390"],
                k = (n = p.action.bound, i = p.action.bound, a = p.action.bound, o = p.action.bound, s = p.action.bound, c = p.action.bound, u = w((l = function() {
                    function t(r) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t, r, n) {
                            r && Object.defineProperty(e, t, {
                                enumerable: r.enumerable,
                                configurable: r.configurable,
                                writable: r.writable,
                                value: r.initializer ? r.initializer.call(n) : void 0
                            })
                        }(this, "comparisonSymbols", u, this), this.currentActiveSymbol = void 0, this.searchInputClassName = void 0, this.onContextReady = function() {
                            var e = n.context.stx,
                                t = n.mainStore.chart.feed;
                            n.currentActiveSymbol = e.chart.symbol, e.addEventListener("symbolChange", n.onSymbolChange), t.onComparisonDataUpdate(n.updateComparisonPrices), n.updateComparisons()
                        }, this.mainStore = r, this.menu = new f.a(r, {
                            route: "comparison"
                        }), this.ComparisonMenu = this.menu.connect(b.a), this.categoricalDisplay = new m.a({
                            getActiveCategory: function() {
                                return n.activeComparisons
                            },
                            getCategoricalItems: function() {
                                return n.mainStore.chart.categorizedSymbols
                            },
                            getIsShown: function() {
                                return n.menu.open
                            },
                            activeOptions: [{
                                id: "cmp-color",
                                renderChild: function(e) {
                                    return d.a.createElement("span", {
                                        style: {
                                            backgroundColor: e.dataObject.color
                                        }
                                    })
                                }
                            }, {
                                id: "delete",
                                onClick: this.onDeleteItem
                            }],
                            onSelectItem: this.onSelectItem.bind(this),
                            placeholderText: e.translate("Search..."),
                            favoritesId: "chartTitle&Comparison",
                            mainStore: r,
                            searchInputClassName: function() {
                                return n.searchInputClassName
                            }
                        }), this.ComparisonSelector = this.categoricalDisplay.connect(y.b), Object(p.when)(function() {
                            return n.context
                        }, this.onContextReady)
                    }
                    return function(e, t, r) {
                        t && v(e.prototype, t), r && v(e, r)
                    }(t, [{
                        key: "updateProps",
                        value: function(e) {
                            this.searchInputClassName = e
                        }
                    }, {
                        key: "updateComparisonPrices",
                        value: function(e) {
                            var t = this.comparisonSymbols.find(function(t) {
                                return t.symbolObject.symbol === e.symbol
                            });
                            t ? (t.price = e.Close, t.prevPrice = e.prevClose) : this.updateComparisons()
                        }
                    }, {
                        key: "removeComparison",
                        value: function(e) {
                            this.context.stx.removeSeries(e.symbol)
                        }
                    }, {
                        key: "onDeleteItem",
                        value: function(e) {
                            var t = e.symbolObject;
                            Object(g.d)(g.b.ChartControl, g.a.Comparison, "Remove ".concat(t.name)), this.removeComparison(t)
                        }
                    }, {
                        key: "removeAll",
                        value: function() {
                            var e = this;
                            this.comparisonSymbols.forEach(function(t) {
                                e.onDeleteItem(t)
                            })
                        }
                    }, {
                        key: "onSelectItem",
                        value: function(e) {
                            var t = this;
                            Object(g.d)(g.b.ChartControl, g.a.Comparison, "Add ".concat(e.name));
                            for (var r = this.context, n = this.getSwatchColor() || "auto", i = r.stx, a = {
                                    symbolObject: e,
                                    isComparison: !0,
                                    display: e.name,
                                    fillGaps: !0,
                                    gapDisplayStyle: !0,
                                    color: n,
                                    pattern: null,
                                    width: 1,
                                    data: {
                                        useDefaultQuoteFeed: !0
                                    },
                                    forceData: !0
                                }, o = i.getSeries({
                                    symbolObject: e
                                }), s = 0; s < o.length; s++)
                                if (o[s].parameters.isComparison) return;
                            r.stx.chart.symbol !== e.symbol && (this.comparisonSymbols.push({
                                color: n,
                                symbolObject: e
                            }), i.addSeries(e.symbol, a, function(e, r) {
                                e && (t.removeComparison(r.parameters.symbolObject), r.parameters.error = !0)
                            })), this.menu.setOpen(!1)
                        }
                    }, {
                        key: "getSwatchColor",
                        value: function() {
                            var e = this.context.stx,
                                t = "",
                                r = {};
                            for (var n in e.chart.series) {
                                var i = e.chart.series[n];
                                i.parameters.isComparison && (r[i.parameters.color] = !0)
                            }
                            for (var a = 0; a < S.length; a++)
                                if (!r[S[a]]) {
                                    t = S[a];
                                    break
                                } return t
                        }
                    }, {
                        key: "onSymbolChange",
                        value: function(e) {
                            if ("master" === e.action) {
                                var t = this.context.stx;
                                if (this.currentActiveSymbol !== t.chart.symbol) {
                                    for (var r in this.comparisonSymbols = [], t.chart.series) "study" !== t.chart.series[r].parameters.bucket && t.removeSeries(r);
                                    this.currentActiveSymbol = t.chart.symbol
                                }
                            } else this.updateComparisons()
                        }
                    }, {
                        key: "updateComparisons",
                        value: function() {
                            if (this.context) {
                                var e = this.context.stx,
                                    t = Object.keys(e.chart.series);
                                if (t.length !== this.comparisonSymbols.length) {
                                    var r = [],
                                        n = e.currentQuote();
                                    if (n)
                                        for (var i = 0; i < t.length; i++) {
                                            var a = t[i],
                                                o = e.chart.series[a].parameters,
                                                s = n[a],
                                                c = this.mainStore.chart.activeSymbols.getSymbolObj(o.symbolObject.symbol);
                                            r.push({
                                                color: o.color,
                                                price: s && s.Close,
                                                prevPrice: s && s.iqPrevClose,
                                                symbolObject: c
                                            })
                                        }
                                    this.comparisonSymbols = r
                                }
                            }
                        }
                    }, {
                        key: "context",
                        get: function() {
                            return this.mainStore.chart.context
                        }
                    }, {
                        key: "activeComparisons",
                        get: function() {
                            var t = [],
                                r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var a, o = this.comparisonSymbols[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                                    var s = a.value;
                                    t.push({
                                        enabled: !0,
                                        selected: !1,
                                        display: s.symbolObject.name,
                                        itemId: s.symbolObject.symbol,
                                        dataObject: s
                                    })
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    r || null == o.return || o.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                            return {
                                categoryName: e.translate("Active"),
                                categoryId: "active",
                                hasSubcategory: !1,
                                emptyDescription: e.translate("There are no active comparisons yet."),
                                data: t
                            }
                        }
                    }]), t
                }()).prototype, "comparisonSymbols", [p.observable], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), w(l.prototype, "updateProps", [n], Object.getOwnPropertyDescriptor(l.prototype, "updateProps"), l.prototype), w(l.prototype, "updateComparisonPrices", [i], Object.getOwnPropertyDescriptor(l.prototype, "updateComparisonPrices"), l.prototype), w(l.prototype, "activeComparisons", [p.computed], Object.getOwnPropertyDescriptor(l.prototype, "activeComparisons"), l.prototype), w(l.prototype, "onDeleteItem", [a], Object.getOwnPropertyDescriptor(l.prototype, "onDeleteItem"), l.prototype), w(l.prototype, "removeAll", [o], Object.getOwnPropertyDescriptor(l.prototype, "removeAll"), l.prototype), w(l.prototype, "onSelectItem", [s], Object.getOwnPropertyDescriptor(l.prototype, "onSelectItem"), l.prototype), w(l.prototype, "onSymbolChange", [c], Object.getOwnPropertyDescriptor(l.prototype, "onSymbolChange"), l.prototype), l)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return g
            });
            var n, i, a, o, s, c, l = r(1),
                u = r(7),
                h = r(19),
                d = r(8),
                p = r(20),
                f = r(2);

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function y(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var b = function(e) {
                    return (e.charAt(0).toUpperCase() + e.slice(1)).replace(/([a-z](?=[A-Z]))/g, "$1 ")
                },
                g = (n = l.action.bound, i = l.action.bound, a = l.action.bound, o = l.action.bound, s = l.action.bound, y((c = function() {
                    function t(r) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.activeDrawing = null, this.drawToolsItems = [], this.onContextReady = function() {
                            document.addEventListener("keydown", n.closeOnEscape, !1), n.stx.addEventListener("drawing", n.noTool), n.stx.prepend("deleteHighlighted", n.onDeleteHighlighted), n.drawToolsItems = [{
                                id: "annotation",
                                text: e.translate("Annotation")
                            }, {
                                id: "average",
                                text: e.translate("Average Line")
                            }, {
                                id: "callout",
                                text: e.translate("Callout")
                            }, {
                                id: "channel",
                                text: e.translate("Channel")
                            }, {
                                id: "continuous",
                                text: e.translate("Continuous")
                            }, {
                                id: "crossline",
                                text: e.translate("Crossline")
                            }, {
                                id: "freeform",
                                text: e.translate("Doodle")
                            }, {
                                id: "ellipse",
                                text: e.translate("Ellipse")
                            }, {
                                id: "retracement",
                                text: e.translate("Fib Retracement")
                            }, {
                                id: "fibarc",
                                text: e.translate("Fib Arc")
                            }, {
                                id: "fibfan",
                                text: e.translate("Fib Fan")
                            }, {
                                id: "fibtimezone",
                                text: e.translate("Fib Time Zone")
                            }, {
                                id: "gannfan",
                                text: e.translate("Gann Fan")
                            }, {
                                id: "gartley",
                                text: e.translate("Gartley")
                            }, {
                                id: "horizontal",
                                text: e.translate("Horizontal")
                            }, {
                                id: "line",
                                text: e.translate("Line")
                            }, {
                                id: "pitchfork",
                                text: e.translate("Pitchfork")
                            }, {
                                id: "quadrant",
                                text: e.translate("Quadrant Lines")
                            }, {
                                id: "ray",
                                text: e.translate("Ray")
                            }, {
                                id: "rectangle",
                                text: e.translate("Rectangle")
                            }, {
                                id: "regression",
                                text: e.translate("Regression Line")
                            }, {
                                id: "segment",
                                text: e.translate("Segment")
                            }, {
                                id: "arrow",
                                text: e.translate("Shape - Arrow")
                            }, {
                                id: "check",
                                text: e.translate("Shape - Check")
                            }, {
                                id: "xcross",
                                text: e.translate("Shape - Cross")
                            }, {
                                id: "focusarrow",
                                text: e.translate("Shape - Focus")
                            }, {
                                id: "heart",
                                text: e.translate("Shape - Heart")
                            }, {
                                id: "star",
                                text: e.translate("Shape - Star")
                            }, {
                                id: "speedarc",
                                text: e.translate("Speed Resistance Arc")
                            }, {
                                id: "speedline",
                                text: e.translate("Speed Resistance Line")
                            }, {
                                id: "timecycle",
                                text: e.translate("Time Cycle")
                            }, {
                                id: "tirone",
                                text: e.translate("Tirone Levels")
                            }, {
                                id: "vertical",
                                text: e.translate("Vertical")
                            }]
                        }, this.closeOnEscape = function(e) {
                            27 === e.keyCode && n.stx.changeVectorType("")
                        }, this.noTool = function() {
                            var e = n.stx.drawingObjects.length;
                            (n.menu.open && n.context || n._pervDrawingObjectCount !== e) && n.stx.changeVectorType(""), n._pervDrawingObjectCount = e
                        }, this.mainStore = r, this.menu = new u.a(r, {
                            route: "draw-tool"
                        }), this.DrawToolsMenu = this.menu.connect(d.a), this.settingsDialog = new h.a({
                            mainStore: r,
                            onDeleted: this.onDeleted,
                            onChanged: this.onChanged
                        }), this.DrawToolsSettingsDialog = this.settingsDialog.connect(p.a), Object(l.when)(function() {
                            return n.context
                        }, this.onContextReady), Object(l.reaction)(function() {
                            return n.menu.open
                        }, this.noTool)
                    }
                    return function(e, t, r) {
                        t && m(e.prototype, t), r && m(e, r)
                    }(t, [{
                        key: "onDeleteHighlighted",
                        value: function() {
                            var e = !0,
                                t = !1,
                                r = void 0;
                            try {
                                for (var n, i = this.stx.drawingObjects[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
                                    var a = n.value;
                                    if (a.highlighted && !a.permanent) return this.showDrawToolDialog(a), !0
                                }
                            } catch (e) {
                                t = !0, r = e
                            } finally {
                                try {
                                    e || null == i.return || i.return()
                                } finally {
                                    if (t) throw r
                                }
                            }
                            return !1
                        }
                    }, {
                        key: "showDrawToolDialog",
                        value: function(e) {
                            Object(f.d)(f.b.ChartControl, f.a.DrawTools, "Edit ".concat(e.name));
                            e.abort();
                            var t = CIQ.Drawing.getDrawingParameters(this.stx, e.name),
                                r = {
                                    color: "colorpicker",
                                    fillColor: "colorpicker",
                                    pattern: "pattern",
                                    axisLabel: "switch",
                                    font: "font",
                                    lineWidth: "none"
                                };
                            this.settingsDialog.items = Object.keys(t).filter(function(t) {
                                return !((e.name.startsWith("fib") || "retracement" === e.name) && "pattern" === t)
                            }).map(function(n) {
                                return {
                                    id: n,
                                    title: b(n),
                                    value: e[n],
                                    defaultValue: t[n],
                                    type: r[n]
                                }
                            }), this.activeDrawing = e, this.activeDrawing.highlighted = !1, this.settingsDialog.title = b(e.name), this.settingsDialog.setOpen(!0)
                        }
                    }, {
                        key: "clearAll",
                        value: function() {
                            Object(f.d)(f.b.ChartControl, f.a.DrawTools, "Clear All"), this.stx.clearDrawings()
                        }
                    }, {
                        key: "selectTool",
                        value: function(e) {
                            Object(f.d)(f.b.ChartControl, f.a.DrawTools, "Add ".concat(e));
                            var t = this.context.stx;
                            t.clearMeasure(), t.changeVectorType(e), this.menu.setOpen(!1)
                        }
                    }, {
                        key: "onChanged",
                        value: function(e) {
                            var t = !0,
                                r = !1,
                                n = void 0;
                            try {
                                for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                    var o = i.value;
                                    this.activeDrawing[o.id] = o.value
                                }
                            } catch (e) {
                                r = !0, n = e
                            } finally {
                                try {
                                    t || null == a.return || a.return()
                                } finally {
                                    if (r) throw n
                                }
                            }
                            this.activeDrawing.highlighted = !1, this.activeDrawing.adjust(), this.mainStore.state.saveDrawings()
                        }
                    }, {
                        key: "onDeleted",
                        value: function() {
                            Object(f.d)(f.b.ChartControl, f.a.DrawTools, "Remove ".concat(this.activeDrawing.name)), this.stx.removeDrawing(this.activeDrawing), this.activeDrawing = null
                        }
                    }, {
                        key: "context",
                        get: function() {
                            return this.mainStore.chart.context
                        }
                    }, {
                        key: "stx",
                        get: function() {
                            return this.context.stx
                        }
                    }]), t
                }()).prototype, "onDeleteHighlighted", [n], Object.getOwnPropertyDescriptor(c.prototype, "onDeleteHighlighted"), c.prototype), y(c.prototype, "clearAll", [i], Object.getOwnPropertyDescriptor(c.prototype, "clearAll"), c.prototype), y(c.prototype, "selectTool", [a], Object.getOwnPropertyDescriptor(c.prototype, "selectTool"), c.prototype), y(c.prototype, "onChanged", [o], Object.getOwnPropertyDescriptor(c.prototype, "onChanged"), c.prototype), y(c.prototype, "onDeleted", [s], Object.getOwnPropertyDescriptor(c.prototype, "onDeleted"), c.prototype), c)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return x
            });
            var n, i, a, o, s, c, l, u = r(1),
                h = r(7),
                d = r(47),
                p = r(21),
                f = r(8),
                m = r(12),
                y = r(48),
                b = r(53),
                g = r(4),
                v = r(15);

            function w(e, t, r, n) {
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }

            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function k(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var x = (n = u.action.bound, i = u.action.bound, a = u.action.bound, s = k((o = function() {
                function t(r) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), w(this, "todayChange", s, this), w(this, "todayChangePercent", c, this), w(this, "isVisible", l, this), this.searchInputClassName = void 0, this.onContextReady = function() {
                        n.chart.feed.onMasterDataUpdate(n.update), n.update(), n.tradingTimes.onMarketOpenCloseChanged(Object(u.action)(function(e) {
                            for (var t in e) n.currentSymbol.symbol === t && (n.currentSymbol.exchange_is_open = e[t])
                        }))
                    }, this.mainStore = r, Object(u.when)(function() {
                        return n.context
                    }, this.onContextReady), this.menu = new h.a(r, {
                        route: "chart-title"
                    }), this.animatedPrice = new d.a, this.categoricalDisplay = new p.a({
                        getCategoricalItems: function() {
                            return n.mainStore.chart.categorizedSymbols
                        },
                        getIsShown: function() {
                            return n.menu.open
                        },
                        placeholderText: e.translate("Search..."),
                        favoritesId: "chartTitle&Comparison",
                        mainStore: r,
                        id: "market_dropdown",
                        getCurrentActiveCategory: function() {
                            return n.mainStore.chart.currentActiveSymbol ? n.mainStore.chart.currentActiveSymbol.market : "favorite"
                        },
                        getCurrentActiveSubCategory: function() {
                            return n.mainStore.chart.currentActiveSymbol ? n.mainStore.chart.currentActiveSymbol.symbol : ""
                        },
                        searchInputClassName: function() {
                            return n.searchInputClassName
                        }
                    }), this.serverTime = v.a.getInstance(), this.ChartTitleMenu = this.menu.connect(f.a), this.MarketSelector = this.categoricalDisplay.connect(m.b);
                    var i = this.animatedPrice.connect(y.a),
                        a = Object(g.a)(function() {
                            return {
                                isVisible: n.isVisible && n.isShowChartPrice,
                                status: n.animatedPrice.status,
                                todayChange: n.todayChange,
                                todayChangePercent: n.todayChangePercent,
                                SpotPrice: i
                            }
                        })(b.a);
                    this.SymbolSelectButton = Object(g.a)(function() {
                        return {
                            symbol: n.currentSymbol,
                            ChartPrice: a,
                            isSymbolOpen: n.isSymbolOpen,
                            symbolOpenTime: n.symbolOpenTime
                        }
                    })(b.b)
                }
                return function(e, t, r) {
                    t && S(e.prototype, t), r && S(e, r)
                }(t, [{
                    key: "updateProps",
                    value: function(e) {
                        this.searchInputClassName = e
                    }
                }, {
                    key: "setSymbol",
                    value: function(e) {
                        void 0 === this.mainStore.state.symbol ? this.chart.changeSymbol(e) : console.error("Changing symbol does nothing because symbol prop is being set. Consider overriding the onChange prop in <ChartTitle />")
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        if (this.currentSymbol && (this.isVisible = e || !this.isShowChartPrice, this.isVisible)) {
                            var t = e.Close;
                            if (t) {
                                t = t.toFixed(this.decimalPlaces);
                                var r = e.prevClose || this.animatedPrice.price;
                                this.animatedPrice.setPrice(t, r), r && (this.todayChange = Math.abs(t - r).toFixed(this.decimalPlaces), this.todayChangePercent = (this.todayChange / r * 100).toFixed(2))
                            }
                        }
                    }
                }, {
                    key: "chart",
                    get: function() {
                        return this.mainStore.chart
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "currentSymbol",
                    get: function() {
                        return this.mainStore.chart.currentActiveSymbol
                    }
                }, {
                    key: "isSymbolOpen",
                    get: function() {
                        return this.currentSymbol.exchange_is_open
                    }
                }, {
                    key: "decimalPlaces",
                    get: function() {
                        return this.mainStore.chart.currentActiveSymbol.decimal_places
                    }
                }, {
                    key: "isShowChartPrice",
                    get: function() {
                        return this.mainStore.chart.isChartAvailable
                    }
                }, {
                    key: "tradingTimes",
                    get: function() {
                        return this.mainStore.chart.tradingTimes
                    }
                }, {
                    key: "symbolOpenTime",
                    get: function() {
                        var e = this.tradingTimes._tradingTimesMap[this.currentSymbol.symbol].times,
                            t = this.serverTime.getLocalDate().getTime(),
                            r = e ? e.find(function(e) {
                                return e.open.getTime() > t
                            }) : null;
                        return r instanceof Date || (r = null), {
                            openTime: r
                        }
                    }
                }]), t
            }()).prototype, "todayChange", [u.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), c = k(o.prototype, "todayChangePercent", [u.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), l = k(o.prototype, "isVisible", [u.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), k(o.prototype, "currentSymbol", [u.computed], Object.getOwnPropertyDescriptor(o.prototype, "currentSymbol"), o.prototype), k(o.prototype, "isSymbolOpen", [u.computed], Object.getOwnPropertyDescriptor(o.prototype, "isSymbolOpen"), o.prototype), k(o.prototype, "decimalPlaces", [u.computed], Object.getOwnPropertyDescriptor(o.prototype, "decimalPlaces"), o.prototype), k(o.prototype, "isShowChartPrice", [u.computed], Object.getOwnPropertyDescriptor(o.prototype, "isShowChartPrice"), o.prototype), k(o.prototype, "tradingTimes", [u.computed], Object.getOwnPropertyDescriptor(o.prototype, "tradingTimes"), o.prototype), k(o.prototype, "symbolOpenTime", [u.computed], Object.getOwnPropertyDescriptor(o.prototype, "symbolOpenTime"), o.prototype), k(o.prototype, "updateProps", [n], Object.getOwnPropertyDescriptor(o.prototype, "updateProps"), o.prototype), k(o.prototype, "setSymbol", [i], Object.getOwnPropertyDescriptor(o.prototype, "setSymbol"), o.prototype), k(o.prototype, "update", [a], Object.getOwnPropertyDescriptor(o.prototype, "update"), o.prototype), o)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return d
        });
        var n = r(0),
            i = r.n(n),
            a = r(5),
            o = r(15);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var d = function(e) {
            function t(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (r = l(this, u(t).call(this, e))).serverTime = o.a.getInstance(), r.state = {
                    time: r.serverTime.getLocalDate().getTime()
                }, r
            }
            return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(t, i.a.Component),
                function(e, t, r) {
                    t && c(e.prototype, t), r && c(e, r)
                }(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.timerInterval = setInterval(function() {
                            return e.tick()
                        }, 1e3)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timerInterval)
                    }
                }, {
                    key: "tick",
                    value: function() {
                        this.setState({
                            time: this.serverTime.getLocalDate().getTime()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = null,
                            t = (this.props.symbolOpenTime.symbolOpenTime || {}).openTime || null;
                        return t && (e = Object(a.f)(t.getTime() - this.state.time)), i.a.createElement("span", null, e)
                    }
                }]), t
        }()
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return j
            });
            var n, i, a, o, s, c, l, u, h, d, p, f, m, y, b, g, v, w, S = r(0),
                k = r.n(S),
                x = r(1),
                C = r(7),
                O = r(3),
                E = r(8),
                T = r(2);

            function P(e, t, r, n) {
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }

            function _(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function D(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var j = (n = x.action.bound, i = x.action.bound, a = x.action.bound, o = x.action.bound, s = x.action.bound, c = x.action.bound, l = x.action.bound, u = x.action.bound, h = x.action.bound, p = D((d = function() {
                function t(e) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.languages = [{
                        key: "en",
                        name: "English",
                        icon: k.a.createElement(O.v.USD, null)
                    }, {
                        key: "pt",
                        name: "Português",
                        icon: k.a.createElement(O.v.Portugal, null)
                    }, {
                        key: "de",
                        name: "Deutsch",
                        icon: k.a.createElement(O.v.German, null)
                    }, {
                        key: "ru",
                        name: "Русский",
                        icon: k.a.createElement(O.v.Russia, null)
                    }, {
                        key: "fr",
                        name: "French",
                        icon: k.a.createElement(O.v.French, null)
                    }, {
                        key: "th",
                        name: "Thai",
                        icon: k.a.createElement(O.v.Thailand, null)
                    }, {
                        key: "id",
                        name: "Indonesia",
                        icon: k.a.createElement(O.v.Indonesia, null)
                    }, {
                        key: "vi",
                        name: "Tiếng Việt",
                        icon: k.a.createElement(O.v.Vietnam, null)
                    }, {
                        key: "it",
                        name: "Italiano",
                        icon: k.a.createElement(O.v.Italy, null)
                    }, {
                        key: "zh_cn",
                        name: "简体中文",
                        icon: k.a.createElement(O.v.Chinese, null)
                    }, {
                        key: "pl",
                        name: "Polish",
                        icon: k.a.createElement(O.v.Poland, null)
                    }, {
                        key: "zh_tw",
                        name: "繁體中文",
                        icon: k.a.createElement(O.v.ChineseTraditional, null)
                    }], this.defaultLanguage = {}, this.onSettingsChange = void 0, P(this, "assetInformation", p, this), P(this, "view", f, this), P(this, "language", m, this), P(this, "position", y, this), P(this, "theme", b, this), P(this, "countdown", g, this), P(this, "historical", v, this), P(this, "isAutoScale", w, this), this.defaultLanguage = this.languages[0], this.mainStore = e, this.menu = new C.a(e, {
                        route: "setting"
                    }), this.ChartSettingMenu = this.menu.connect(E.a), Object(x.reaction)(function() {
                        return e.state.settings
                    }, function() {
                        r.setSettings(e.state.settings)
                    })
                }
                return function(e, t, r) {
                    t && _(e.prototype, t), r && _(e, r)
                }(t, [{
                    key: "setSettings",
                    value: function(e) {
                        if (void 0 !== e) {
                            var t = e.assetInformation,
                                r = e.countdown,
                                n = e.historical,
                                i = e.language,
                                a = e.position,
                                o = e.isAutoScale,
                                s = e.theme;
                            void 0 !== s && this.setTheme(s), void 0 !== a && this.setPosition(a), void 0 !== r && this.showCountdown(r), void 0 !== i && this.setLanguage(i), void 0 !== t && this.setAssetInformation(t), void 0 !== n && this.setHistorical(n), void 0 !== o && this.setAutoScale(o)
                        }
                    }
                }, {
                    key: "saveSetting",
                    value: function() {
                        this.onSettingsChange && this.onSettingsChange({
                            assetInformation: this.assetInformation,
                            countdown: this.countdown,
                            historical: this.historical,
                            language: this.language.key,
                            position: this.position,
                            isAutoScale: this.isAutoScale,
                            theme: this.theme
                        })
                    }
                }, {
                    key: "setView",
                    value: function(e) {
                        this.view = e || ""
                    }
                }, {
                    key: "setLanguage",
                    value: function(t) {
                        t !== this.language.key && (this.language = this.languages.find(function(e) {
                            return e.key === t
                        }), e.setLanguage(t), Object(T.d)(T.b.ChartControl, T.a.ChartSetting, "Change language to ".concat(t)), this.saveSetting())
                    }
                }, {
                    key: "setTheme",
                    value: function(e) {
                        this.theme !== e && (this.theme = e, this.context && (this.mainStore.state.setChartTheme(e), this.mainStore.crosshair.setFloatPriceLabelStyle(e)), Object(T.d)(T.b.ChartControl, T.a.ChartSetting, "Change theme to ".concat(e)), this.saveSetting())
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        var t = this;
                        this.position !== e && (this.position = e, this.context && this.stx.clearStyles(), Object(T.d)(T.b.ChartControl, T.a.ChartSetting, "Change Position"), this.saveSetting(), setTimeout(function() {
                            t.mainStore.chart.resizeScreen()
                        }, 10), this.menu.setOpen(!1))
                    }
                }, {
                    key: "setAssetInformation",
                    value: function(e) {
                        this.assetInformation !== e && (this.assetInformation = e, Object(T.d)(T.b.ChartControl, T.a.ChartSetting, "".concat(e ? "Show" : "Hide", " Asset Information")), this.saveSetting())
                    }
                }, {
                    key: "showCountdown",
                    value: function(e) {
                        this.countdown !== e && (this.countdown = e, Object(T.d)(T.b.ChartControl, T.a.ChartSetting, "".concat(e ? "Show" : "Hide", " Countdown")), this.saveSetting())
                    }
                }, {
                    key: "setHistorical",
                    value: function(e) {
                        var t = this;
                        this.historical !== e && (this.historical = e, this.saveSetting(), setTimeout(function() {
                            t.mainStore.chart.resizeScreen()
                        }, 10), this.menu.setOpen(!1))
                    }
                }, {
                    key: "setAutoScale",
                    value: function(e) {
                        this.isAutoScale !== e && (this.isAutoScale = e, Object(T.d)(T.b.ChartControl, T.a.ChartSetting, " Change AutoScale to ".concat(e)), this.saveSetting())
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }]), t
            }()).prototype, "assetInformation", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), f = D(d.prototype, "view", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), m = D(d.prototype, "language", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return this.languages[0]
                }
            }), y = D(d.prototype, "position", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "bottom"
                }
            }), b = D(d.prototype, "theme", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "light"
                }
            }), g = D(d.prototype, "countdown", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), v = D(d.prototype, "historical", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), w = D(d.prototype, "isAutoScale", [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), D(d.prototype, "setSettings", [n], Object.getOwnPropertyDescriptor(d.prototype, "setSettings"), d.prototype), D(d.prototype, "setView", [i], Object.getOwnPropertyDescriptor(d.prototype, "setView"), d.prototype), D(d.prototype, "setLanguage", [a], Object.getOwnPropertyDescriptor(d.prototype, "setLanguage"), d.prototype), D(d.prototype, "setTheme", [o], Object.getOwnPropertyDescriptor(d.prototype, "setTheme"), d.prototype), D(d.prototype, "setPosition", [s], Object.getOwnPropertyDescriptor(d.prototype, "setPosition"), d.prototype), D(d.prototype, "setAssetInformation", [c], Object.getOwnPropertyDescriptor(d.prototype, "setAssetInformation"), d.prototype), D(d.prototype, "showCountdown", [l], Object.getOwnPropertyDescriptor(d.prototype, "showCountdown"), d.prototype), D(d.prototype, "setHistorical", [u], Object.getOwnPropertyDescriptor(d.prototype, "setHistorical"), d.prototype), D(d.prototype, "setAutoScale", [h], Object.getOwnPropertyDescriptor(d.prototype, "setAutoScale"), d.prototype), d)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return p
            });
            var n, i, a, o, s, c, l = r(1);

            function u(e, t, r, n) {
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }

            function h(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r, n, i) {
                var a = {};
                return Object.keys(n).forEach(function(e) {
                    a[e] = n[e]
                }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                    return n(e, t, r) || r
                }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
            }
            var p = (n = l.action.bound, i = l.action.bound, a = l.action.bound, s = d((o = function() {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), u(this, "isActive", s, this), u(this, "currentState", c, this), this.states = {}, this.states = {
                        "chart-engine": e.translate("Retrieving Chart Engine..."),
                        "market-symbol": e.translate("Retrieving Market Symbols..."),
                        "trading-time": e.translate("Retrieving Trading Times..."),
                        "chart-data": e.translate("Retrieving Chart Data...")
                    }
                }
                return function(e, t, r) {
                    t && h(e.prototype, t), r && h(e, r)
                }(t, [{
                    key: "setState",
                    value: function(e) {
                        this.states[e] ? this.currentState = this.states[e] : console.error("Wrong state requested!")
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.isActive = !0
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.isActive = !1
                    }
                }]), t
            }()).prototype, "isActive", [l.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), c = d(o.prototype, "currentState", [l.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), d(o.prototype, "setState", [n], Object.getOwnPropertyDescriptor(o.prototype, "setState"), o.prototype), d(o.prototype, "show", [i], Object.getOwnPropertyDescriptor(o.prototype, "show"), o.prototype), d(o.prototype, "hide", [a], Object.getOwnPropertyDescriptor(o.prototype, "hide"), o.prototype), o)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            function r(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var i = function() {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.onMessage = void 0
                }
                return function(e, t, r) {
                    t && n(e.prototype, t), r && n(e, r)
                }(t, [{
                    key: "notify",
                    value: function(e) {
                        this.onMessage && this.onMessage(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), i.forEach(function(t) {
                                    r(e, t, n[t])
                                })
                            }
                            return e
                        }({
                            type: "warning"
                        }, e))
                    }
                }, {
                    key: "notifyMarketOpen",
                    value: function(r) {
                        this.notify({
                            text: e.translate("[symbol] market is now opened.", {
                                symbol: r
                            }),
                            type: "info",
                            category: t.CATEGORY_ACTIVE_SYMBOL
                        })
                    }
                }, {
                    key: "notifyMarketClose",
                    value: function(r) {
                        this.notify({
                            text: e.translate("[symbol] market is presently closed.", {
                                symbol: r
                            }),
                            category: t.CATEGORY_ACTIVE_SYMBOL
                        })
                    }
                }, {
                    key: "notifyDelayedMarket",
                    value: function(r, n) {
                        this.notify({
                            text: e.translate("[symbol] feed is delayed by [delay] minutes", {
                                symbol: r,
                                delay: n
                            }),
                            category: t.CATEGORY_ACTIVE_SYMBOL
                        })
                    }
                }, {
                    key: "notifyFeedUnavailable",
                    value: function(r) {
                        this.notify({
                            text: e.translate("Streaming for [symbol] is not available due to license restrictions", {
                                symbol: r
                            }),
                            type: "error",
                            category: t.CATEGORY_ACTIVE_SYMBOL
                        })
                    }
                }], [{
                    key: "CATEGORY_ACTIVE_SYMBOL",
                    get: function() {
                        return "activesymbol"
                    }
                }]), t
            }();
            t.a = i
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(55),
                o = r(33),
                s = r(34),
                c = r(35),
                l = r(82),
                u = r(37),
                h = r(83),
                d = r(36),
                p = r(84),
                f = r(85),
                m = r(86),
                y = (r(156), r(16), r(87)),
                b = r(88),
                g = r(4),
                v = r(2),
                w = r(89);

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k() {
                return (k = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function x(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function O(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function T(e, t) {
                return (T = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var P = function(t) {
                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = O(this, E(r).call(this, e))).defaultTopWidgets = function() {
                        return i.a.createElement(i.a.Fragment, null, i.a.createElement(s.a, null), i.a.createElement(c.a, null), i.a.createElement(o.a, null))
                    }, t.modalNode = i.a.createRef(), t.root = i.a.createRef(), t
                }
                return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && T(e, t)
                    }(r, n["Component"]),
                    function(e, t, r) {
                        t && C(e.prototype, t), r && C(e, r)
                    }(r, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.updateProps,
                                r = e.init,
                                n = x(e, ["updateProps", "init"]);
                            Object(v.c)(), Object(v.e)(), t(n), r(this.root.current, this.modalNode.current, n)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            (0, e.updateProps)(x(e, ["updateProps"]))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.destroy()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                r = t.bottomWidgets,
                                n = t.DrawToolsSettingsDialog,
                                o = t.StudySettingsDialog,
                                s = t.isMobile,
                                c = void 0 !== s && s,
                                g = t.isOnPagination,
                                v = t.isChartAvailable,
                                S = t.barriers,
                                x = void 0 === S ? [] : S,
                                C = t.children,
                                O = t.chartControlsWidgets,
                                E = t.AggregateChartSettingsDialog,
                                T = t.topWidgets,
                                P = t.chartContainerHeight,
                                _ = t.containerWidth,
                                D = t.isChartClosed,
                                j = t.isDrawing,
                                A = t.theme,
                                N = t.position,
                                I = t.showLastDigitStats,
                                z = "cq-chart-control-".concat(O && N && !c ? N : "bottom"),
                                L = c ? "" : "smartcharts-".concat(_),
                                M = T || this.defaultTopWidgets,
                                R = !r && I ? m.a : r,
                                H = C && C.length ? "smartcharts--has-markers" : "";
                            return i.a.createElement("div", {
                                className: "smartcharts smartcharts-".concat(A, " ").concat(L, " ").concat(H)
                            }, i.a.createElement("div", {
                                className: "smartcharts-".concat(c ? "mobile" : "desktop"),
                                ref: this.modalNode
                            }, i.a.createElement("div", {
                                className: "cq-context",
                                ref: this.root
                            }, i.a.createElement("div", {
                                className: " ".concat(z)
                            }, i.a.createElement("div", {
                                className: "ciq-chart-area"
                            }, i.a.createElement("div", {
                                className: "ciq-chart ".concat(D ? "closed-chart" : "")
                            }, i.a.createElement(a.a, {
                                at: "holder"
                            }, x.map(function(e, t) {
                                return i.a.createElement(u.a, k({
                                    key: "barrier-".concat(t)
                                }, e))
                            })), i.a.createElement(a.a, {
                                at: "subholder"
                            }, C, g && i.a.createElement(w.a, null), i.a.createElement(d.a, null)), i.a.createElement("div", {
                                className: "cq-top-ui-widgets"
                            }, i.a.createElement(M, null)), i.a.createElement("div", {
                                className: "chartContainer ".concat(j ? "ciq-draw-mode" : ""),
                                style: {
                                    height: P
                                }
                            }, i.a.createElement(b.a, null), i.a.createElement(p.a, null)), i.a.createElement(l.a, null), !v && i.a.createElement("div", {
                                className: "cq-chart-unavailable"
                            }, e.translate("Chart data is not available for this symbol.")), i.a.createElement(h.a, null, R && i.a.createElement(R, null))), null !== O && i.a.createElement(y.a, {
                                widgets: O
                            })))), i.a.createElement(n, null), i.a.createElement(E, null), i.a.createElement(o, null), i.a.createElement(f.a, null)))
                        }
                    }]), r
            }();
            t.a = Object(g.a)(function(e) {
                var t = e.chart,
                    r = e.drawTools,
                    n = e.studies,
                    i = e.chartSetting,
                    a = e.chartType,
                    o = e.state,
                    s = e.drawingCursor;
                return {
                    init: t.init,
                    destroy: t.destroy,
                    StudySettingsDialog: n.StudySettingsDialog,
                    DrawToolsSettingsDialog: r.DrawToolsSettingsDialog,
                    AggregateChartSettingsDialog: a.AggregateChartSettingsDialog,
                    isChartAvailable: t.isChartAvailable,
                    updateProps: o.updateProps,
                    chartContainerHeight: t.chartContainerHeight,
                    containerWidth: t.containerWidth,
                    isChartClosed: o.isChartClosed,
                    isDrawing: s.isDrawing,
                    theme: i.theme,
                    position: i.position,
                    showLastDigitStats: o.showLastDigitStats,
                    isOnPagination: o.isOnPagination
                }
            })(P)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(4);
        t.a = Object(a.a)(function(e) {
            var t = e.loader;
            return {
                isActive: t.isActive,
                currentState: t.currentState
            }
        })(function(e) {
            var t = e.isActive,
                r = e.currentState;
            return i.a.createElement("div", {
                className: "cq-loader ".concat(t ? "show" : "")
            }, i.a.createElement("div", {
                className: "cq-loader-spin"
            }), i.a.createElement("div", {
                className: "cq-loader-status"
            }, r))
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(41),
            o = r.n(a),
            s = r(4);
        r(148);

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function u(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var p = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), u(this, h(t).apply(this, arguments))
            }
            return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(t, i.a.Component),
                function(e, t, r) {
                    t && l(e.prototype, t), r && l(e, r)
                }(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        var t = e.nextChildren;
                        return i.a.Children.count(this.props.children) !== i.a.Children.count(t)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        i.a.Children.count(this.props.children) ? this.props.updateChartMargin(200) : this.props.updateChartMargin(100)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.bottom,
                            r = e.isReadyToShow,
                            n = e.children,
                            a = e.top;
                        if (!r) return null;
                        var o = {
                            top: a,
                            bottom: t
                        };
                        return i.a.createElement("div", {
                            className: "cq-bottom-ui-widgets",
                            style: o
                        }, n)
                    }
                }]), t
        }();
        p.propTypes = {
            bottom: o.a.number,
            isReadyToShow: o.a.bool,
            top: o.a.number,
            updateChartMargin: o.a.func.isRequired
        }, p.defaultProps = {
            bottom: 0,
            isReadyToShow: !1,
            top: 0
        }, t.a = Object(s.a)(function(e) {
            var t = e.bottomWidgetsContainer;
            return {
                bottom: t.bottom,
                isReadyToShow: t.isReadyToShow,
                top: t.top,
                updateChartMargin: t.updateChartMargin
            }
        })(p)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(4),
            o = (r(150), r(3));
        t.a = Object(a.a)(function(e) {
            var t = e.drawingCursor;
            return {
                top: t.top,
                left: t.left,
                display: t.display
            }
        })(function(e) {
            var t = e.display,
                r = e.left,
                n = e.top;
            return i.a.createElement("div", {
                className: "drawing-mouse-pointer",
                style: {
                    top: n,
                    left: r,
                    display: t
                }
            }, i.a.createElement(o.t, null))
        })
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(14),
                o = r(3),
                s = r(4);
            r(152);
            t.a = Object(s.a)(function(e) {
                var t = e.chart,
                    r = e.chartTable;
                return {
                    isMobile: t.isMobile,
                    tableData: r.tableData,
                    Dialog: r.Dialog,
                    open: r.open,
                    isTick: r.isTick,
                    symbol: r.symbol,
                    setOpen: r.setOpen
                }
            })(function(t) {
                var r = t.isMobile,
                    n = t.tableData,
                    s = t.Dialog,
                    c = t.open,
                    l = t.isTick,
                    u = t.symbol,
                    h = t.setOpen,
                    d = o.z[u.symbol] || o.P,
                    p = l ? "320px" : "565px";
                return i.a.createElement("div", {
                    className: "cq-dialog-overlay ".concat(c ? "cq-dialog-active" : ""),
                    style: {
                        "--table-width": p
                    }
                }, i.a.createElement(s, {
                    className: "cq-dialog ciq-chart-dialog"
                }, i.a.createElement(i.a.Fragment, null, r && i.a.createElement("div", {
                    className: "cq-titlebar"
                }, d && i.a.createElement(d, {
                    className: "ic-".concat(u.symbol)
                }), i.a.createElement("div", {
                    className: "cq-title"
                }, "".concat(u.name, " ").concat(e.translate("Chart Table"))), i.a.createElement(o.j, {
                    className: "icon-close-menu",
                    onClick: function() {
                        return h(!1)
                    }
                })), i.a.createElement(a.Scrollbars, {
                    autoHeight: !0,
                    autoHeightMax: "80vh",
                    className: "ciq-list"
                }, r ? i.a.createElement("table", {
                    className: "ciq-chart-table"
                }, i.a.createElement("tbody", null, n.map(function(t, r) {
                    return i.a.createElement("tr", {
                        className: "ciq-table-row",
                        key: "chartTable-".concat(r)
                    }, i.a.createElement("td", null, i.a.createElement("div", {
                        className: "ciq-table-cell"
                    }, i.a.createElement("div", {
                        className: "ciq-table-date"
                    }, t.Date), i.a.createElement("div", {
                        className: "".concat(t.Status ? t.Status : "up")
                    }, t.Change), i.a.createElement("div", {
                        className: "cq-change ".concat(t.Status)
                    })), i.a.createElement("div", {
                        className: "ciq-table-cell"
                    }, l && i.a.createElement("div", null, i.a.createElement("span", null, e.translate("Close")), t.Close), !l && [i.a.createElement("div", {
                        key: "item-open"
                    }, i.a.createElement("span", null, e.translate("O")), t.Open), i.a.createElement("div", {
                        key: "item-high"
                    }, i.a.createElement("span", null, e.translate("H")), t.High), i.a.createElement("div", {
                        key: "item-low"
                    }, i.a.createElement("span", null, e.translate("L")), t.Low), i.a.createElement("div", {
                        key: "item-close"
                    }, i.a.createElement("span", null, e.translate("C")), t.Close)])))
                }))) : i.a.createElement("table", {
                    className: "ciq-chart-table"
                }, i.a.createElement("thead", null, i.a.createElement("tr", {
                    className: "ciq-table-head"
                }, i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, e.translate("Date")), l ? i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, e.translate("Tick")) : i.a.createElement(i.a.Fragment, null, i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, e.translate("Open")), i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, e.translate("High")), i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, e.translate("Low")), i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, e.translate("Close"))), i.a.createElement("th", {
                    className: "ciq-table-cell"
                }, i.a.createElement("div", {
                    className: "cq-change-cell"
                }, e.translate("Change"), i.a.createElement(o.j, {
                    className: "icon-close-menu",
                    onClick: function() {
                        return h(!1)
                    }
                }))))), i.a.createElement("tbody", null, n.map(function(e, t) {
                    return i.a.createElement("tr", {
                        key: "chartTable-".concat(t),
                        className: "ciq-table-row"
                    }, i.a.createElement("td", {
                        className: "ciq-table-cell"
                    }, e.Date), l && i.a.createElement("td", {
                        className: "ciq-table-cell"
                    }, e.Close), !l && [i.a.createElement("td", {
                        key: "td-open",
                        className: "ciq-table-cell"
                    }, e.Open), i.a.createElement("td", {
                        key: "td-high",
                        className: "ciq-table-cell"
                    }, e.High), i.a.createElement("td", {
                        key: "td-low",
                        className: "ciq-table-cell"
                    }, e.Low), i.a.createElement("td", {
                        key: "td-close",
                        className: "ciq-table-cell"
                    }, e.Close)], i.a.createElement("td", {
                        className: "ciq-table-cell"
                    }, i.a.createElement("div", {
                        className: "cq-change-cell"
                    }, i.a.createElement("div", {
                        className: "".concat(e.Status ? e.Status : "up")
                    }, e.Change), i.a.createElement("div", {
                        className: "cq-change ".concat(e.Status)
                    }))))
                })))))))
            })
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(0),
                i = r.n(n),
                a = r(4);
            r(154);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function c(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function u(e, t) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var h = function(e) {
                    var t = e.x,
                        r = e.bar;
                    return i.a.createElement("div", {
                        className: "cq-bar ".concat(r.cName),
                        style: {
                            height: "".concat(5 * r.height, "%"),
                            left: 35 * t
                        }
                    }, i.a.createElement("div", {
                        className: "cq-bar-value ".concat(r.height && "show")
                    }, "".concat(r.height.toFixed(1), "%")), i.a.createElement("span", {
                        className: "cq-bar-title"
                    }, t))
                },
                d = function(t) {
                    function r() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), c(this, l(r).apply(this, arguments))
                    }
                    return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && u(e, t)
                        }(r, i.a.Component),
                        function(e, t, r) {
                            t && s(e.prototype, t), r && s(e, r)
                        }(r, [{
                            key: "componentDidMount",
                            value: function() {
                                this.props.showLastDigitStats()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                var t = e.marketDisplayName;
                                this.props.marketDisplayName !== t && this.props.changeSymbol()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.props.showLastDigitStats()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = this.props,
                                    r = t.isVisible,
                                    n = t.bars,
                                    a = t.marketDisplayName;
                                return i.a.createElement("div", {
                                    className: "cq-last-digits ".concat(r ? "show" : "")
                                }, i.a.createElement("div", {
                                    className: "cq-bars"
                                }, n.map(function(e, t) {
                                    return i.a.createElement(h, {
                                        key: "bar-".concat(t),
                                        x: t,
                                        bar: e
                                    })
                                })), i.a.createElement("div", {
                                    className: "cq-bar-footer"
                                }, e.translate("Last digits stats for latest 1000 ticks on ") + a))
                            }
                        }]), r
                }();
            t.a = Object(a.a)(function(e) {
                var t = e.lastDigitStats;
                return {
                    showLastDigitStats: t.showLastDigitStats,
                    isVisible: t.isVisible,
                    bars: t.bars,
                    marketDisplayName: t.marketDisplayName,
                    changeSymbol: t.changeSymbol
                }
            })(d)
        }).call(this, r(6).t)
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(4),
            o = r(24),
            s = r(25),
            c = r(26),
            l = r(27),
            u = r(28),
            h = r(29),
            d = r(30),
            p = r(31),
            f = r(32),
            m = (r(159), function(e) {
                var t = e.isMobile;
                return i.a.createElement(i.a.Fragment, null, t ? "" : i.a.createElement(u.a, null), i.a.createElement(o.a, null), i.a.createElement(h.a, null), i.a.createElement(s.a, null), i.a.createElement(c.a, null), i.a.createElement(p.a, null), i.a.createElement(l.a, null), i.a.createElement(f.a, null), t ? "" : i.a.createElement(d.a, null))
            });
        t.a = Object(a.a)(function(e) {
            var t = e.chart,
                r = e.chartType,
                n = e.studies,
                i = e.comparison,
                a = e.drawTools,
                o = e.view,
                s = e.share,
                c = e.timeperiod,
                l = e.chartSetting;
            return {
                isMobile: t.isMobile,
                context: t.context,
                hasOpenMenu: r.menu.open || n.menu.open || i.menu.open || a.menu.open || o.menu.open || s.menu.open || c.menu.open || l.menu.open
            }
        })(function(e) {
            var t = e.isMobile,
                r = e.hasOpenMenu,
                n = e.widgets,
                a = e.context,
                o = n || m;
            return i.a.createElement("div", {
                className: "cq-chart-controls ".concat(r ? " active" : "")
            }, a ? i.a.createElement(o, {
                isMobile: t
            }) : null)
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(4);
        r(161);
        t.a = Object(a.a)(function(e) {
            var t = e.crosshair,
                r = e.chart;
            return {
                left: t.left,
                top: t.top,
                rows: t.rows,
                isArrowLeft: t.isArrowLeft,
                state: t.state,
                cursorInChart: r.cursorInChart
            }
        })(function(e) {
            var t = e.left,
                r = e.top,
                n = e.rows,
                a = e.state,
                o = e.isArrowLeft,
                s = e.cursorInChart;
            return i.a.createElement("div", {
                className: "cq-crosshair ".concat(2 === a && s ? "active" : ""),
                style: {
                    left: t,
                    top: r
                }
            }, i.a.createElement("div", {
                className: "cq-crosshair-content ".concat(o ? "arrow-left" : "arrow-right")
            }, n.map(function(e) {
                return i.a.createElement("div", {
                    className: "row",
                    key: e.name
                }, i.a.createElement("span", null, "DT" !== e.name ? "".concat(e.name, ":") : e.value), i.a.createElement("span", null, "DT" !== e.name ? e.value : ""))
            })))
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            i = r.n(n),
            a = r(38),
            o = r(4);
        r(165);
        t.a = Object(o.a)(function(e) {
            return {
                epoch: e.state.paginationEndEpoch
            }
        })(function(e) {
            var t = e.epoch;
            return i.a.createElement(a.a, {
                x: t,
                xPositioner: "epoch",
                className: "pagination"
            }, i.a.createElement("div", {
                className: "pagination__loader"
            }, i.a.createElement("div", {
                className: "pagination__loader-background"
            })))
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(13),
            i = r.n(n),
            a = r(1),
            o = r(5);

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return function(e, t, r) {
                t && s(e.prototype, t), r && s(e, r)
            }(e, null, [{
                key: "formatHistory",
                value: function(e) {
                    var t = e.history,
                        r = e.candles;
                    if (t) {
                        var n = t.times;
                        return t.prices.map(function(e, t) {
                            return {
                                Date: Object(o.k)(+n[t]),
                                Close: +e
                            }
                        })
                    }
                    if (r) return r.map(function(e) {
                        return {
                            Date: Object(o.k)(+e.epoch),
                            Open: +e.open,
                            High: +e.high,
                            Low: +e.low,
                            Close: +e.close
                        }
                    })
                }
            }, {
                key: "formatTick",
                value: function(e) {
                    var t = e.tick,
                        r = e.ohlc;
                    return t ? {
                        Date: Object(o.k)(+t.epoch),
                        Close: +t.quote
                    } : r ? {
                        Date: Object(o.k)(+r.open_time),
                        Open: +r.open,
                        High: +r.high,
                        Low: +r.low,
                        Close: +r.close
                    } : void 0
                }
            }]), e
        }();

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    u(e, t, r[t])
                })
            }
            return e
        }

        function u(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function h(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function d(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var a = e.apply(t, r);

                    function o(e) {
                        h(a, n, i, o, s, "next", e)
                    }

                    function s(e) {
                        h(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                })
            }
        }

        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function f(e, t, r) {
            return t && p(e.prototype, t), r && p(e, r), e
        }
        var m = function() {
            function e(t, r, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.lastStreamEpoch = void 0, this._binaryApi = r, this._stx = n, this._request = t, this._emitter = new i.a({
                    emitDelay: 0
                })
            }
            return f(e, null, [{
                key: "EVENT_CHART_DATA",
                get: function() {
                    return "EVENT_CHART_DATA"
                }
            }]), f(e, [{
                key: "initialFetch",
                value: function() {
                    var e = d(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._startSubscribe(this._request);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "pause",
                value: function() {}
            }, {
                key: "resume",
                value: function() {
                    var e = d(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.lastStreamEpoch) {
                                        e.next = 6;
                                        break
                                    }
                                    return t = l({}, this._request, {
                                        start: this.lastStreamEpoch
                                    }), e.next = 4, this._startSubscribe(t);
                                case 4:
                                    return r = e.sent, e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "forget",
                value: function() {
                    this.lastStreamEpoch = void 0, this._emitter.off(e.EVENT_CHART_DATA)
                }
            }, {
                key: "_startSubscribe",
                value: function() {
                    var e = d(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    throw new Error("Please override!");
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "_processHistoryResponse",
                value: function(t) {
                    if (t.error) throw new Error(t.error);
                    var r = c.formatHistory(t);
                    if (!r) {
                        var n = "Unexpected response: ".concat(t);
                        throw new Error({
                            message: n
                        })
                    }
                    return this.lastStreamEpoch = e.getLatestEpoch(t), r
                }
            }, {
                key: "onChartData",
                value: function(t) {
                    this._emitter.on(e.EVENT_CHART_DATA, t)
                }
            }], [{
                key: "getLatestEpoch",
                value: function(e) {
                    var t = e.candles,
                        r = e.history;
                    if (t) return t[t.length - 1].epoch;
                    if (r) {
                        var n = r.times;
                        return n[n.length - 1]
                    }
                }
            }, {
                key: "getEpochFromTick",
                value: function(e) {
                    var t = e.tick,
                        r = e.ohlc;
                    return t ? t.epoch : r.open_time
                }
            }]), e
        }();

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    g(e, t, r[t])
                })
            }
            return e
        }

        function g(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function v(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function w(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var a = e.apply(t, r);

                    function o(e) {
                        v(a, n, i, o, s, "next", e)
                    }

                    function s(e) {
                        v(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                })
            }
        }

        function S(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function k(e, t) {
            return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function x(e, t, r) {
            return (x = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = C(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function C(e) {
            return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function O(e, t) {
            return (O = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var E = function(e) {
                function t(e, r, n, i) {
                    var a;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (a = k(this, C(t).call(this, e, r, n)))._timerId = void 0, a.UPDATE_INTERVAL = 3e3, a.onUpdateDelayedFeed = w(regeneratorRuntime.mark(function e() {
                        var t, r, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!a.lastStreamEpoch) {
                                        e.next = 9;
                                        break
                                    }
                                    return t = b({}, a._request, {
                                        start: a.lastStreamEpoch,
                                        adjust_start_time: 0
                                    }), e.next = 4, a._binaryApi.getTickHistory(t);
                                case 4:
                                    r = e.sent, n = a._processHistoryResponse(r), a._emitter.emit(m.EVENT_CHART_DATA, n), e.next = 11;
                                    break;
                                case 9:
                                    console.error("Unable to update delayed feed without epoch from last tick"), a._endTimer();
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), a._request = b({}, a._request, {
                        start: a._request.start - 60 * i
                    }), a
                }
                return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && O(e, t)
                    }(t, m),
                    function(e, t, r) {
                        t && S(e.prototype, t), r && S(e, r)
                    }(t, [{
                        key: "pause",
                        value: function() {
                            this._endTimer()
                        }
                    }, {
                        key: "_startSubscribe",
                        value: function() {
                            var e = w(regeneratorRuntime.mark(function e(t) {
                                var r, n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this._binaryApi.getTickHistory(t);
                                        case 2:
                                            return r = e.sent, n = this._processHistoryResponse(r), this._startTimer(), e.abrupt("return", n);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "forget",
                        value: function() {
                            this._endTimer(), x(C(t.prototype), "forget", this).call(this)
                        }
                    }, {
                        key: "_startTimer",
                        value: function() {
                            this._timerId || (this._timerId = setInterval(this.onUpdateDelayedFeed, this.UPDATE_INTERVAL))
                        }
                    }, {
                        key: "_endTimer",
                        value: function() {
                            this._timerId && (clearInterval(this._timerId), this._timerId = void 0)
                        }
                    }]), t
            }(),
            T = r(11);

        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function D(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function j(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var a = e.apply(t, r);

                    function o(e) {
                        D(a, n, i, o, s, "next", e)
                    }

                    function s(e) {
                        D(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                })
            }
        }

        function A(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function N(e, t) {
            return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function I(e, t, r) {
            return (I = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = z(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function z(e) {
            return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function L(e, t) {
            return (L = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var M = function(e) {
                function t() {
                    var e, r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = N(this, (e = z(t)).call.apply(e, [this].concat(i))))._tickCallback = void 0, r
                }
                return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && L(e, t)
                    }(t, m),
                    function(e, t, r) {
                        t && A(e.prototype, t), r && A(e, r)
                    }(t, [{
                        key: "pause",
                        value: function() {
                            this._tickCallback = void 0
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            var e = j(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this._tickCallback) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("You cannot resume an active stream!");
                                        case 2:
                                            return e.abrupt("return", I(z(t.prototype), "resume", this).call(this));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_startSubscribe",
                        value: function() {
                            var e = j(regeneratorRuntime.mark(function e(t) {
                                var r, n, i, a, o, s;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = this._getProcessTickHistoryClosure(), n = _(r, 2), i = n[0], a = n[1], this._binaryApi.subscribeTickHistory(t, a), e.next = 4, i;
                                        case 4:
                                            return o = e.sent, s = this._processHistoryResponse(o), this._tickCallback = a, e.abrupt("return", s);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "forget",
                        value: function() {
                            if (this._tickCallback) {
                                var e = this._request,
                                    r = e.symbol,
                                    n = e.granularity;
                                this._binaryApi.forget({
                                    symbol: r,
                                    granularity: n
                                }), this._tickCallback = void 0
                            }
                            I(z(t.prototype), "forget", this).call(this)
                        }
                    }, {
                        key: "_getProcessTickHistoryClosure",
                        value: function() {
                            var e = this,
                                t = !1,
                                r = new T.a;
                            return [r, function(n) {
                                e._stx.isDestroyed ? console.error("No data should be coming in when chart is destroyed!") : t ? e._onTick(n) : (r.resolve(n), t = !0)
                            }]
                        }
                    }, {
                        key: "_onTick",
                        value: function(e) {
                            this.lastStreamEpoch = +m.getEpochFromTick(e);
                            var t = [c.formatTick(e)];
                            this._emitter.emit(m.EVENT_CHART_DATA, t)
                        }
                    }]), t
            }(),
            R = r(15);

        function H(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    F(e, t, r[t])
                })
            }
            return e
        }

        function F(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function q(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function U(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var a = e.apply(t, r);

                    function o(e) {
                        q(a, n, i, o, s, "next", e)
                    }

                    function s(e) {
                        q(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                })
            }
        }

        function V(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function W(e, t, r) {
            return t && V(e.prototype, t), r && V(e, r), e
        }
        var Q = function() {
            function e(t, r, n, s) {
                var c = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._activeStreams = {}, this._isConnectionOpened = !0, this.onRangeChanged = function(e) {
                    var t = Object(o.b)(c.granularity),
                        r = (c.granularity || 1) * c._stx.chart.maxTicks,
                        n = null,
                        i = null;
                    if (c._mainStore.state.setChartIsReady(!1), c.endEpoch) n = CIQ.strToDateTime(Object(o.k)(c.startEpoch || c.endEpoch - r)), i = CIQ.strToDateTime(Object(o.k)(c.endEpoch));
                    else if (c.startEpoch) {
                        var a = c._getKey({
                            symbol: c._mainStore.state.symbol,
                            granularity: c._mainStore.state.granularity
                        });
                        c._activeStreams[a] && c._forgetStream(a), n = c.startEpoch ? CIQ.strToDateTime(Object(o.k)(c.startEpoch)) : void 0
                    }
                    c._stx.setRange({
                        dtLeft: n,
                        dtRight: i,
                        periodicity: t,
                        forceLoad: e
                    }, function() {
                        c.endEpoch || c.startEpoch ? c.scaleChart() : (c._stx.home(), delete c._stx.layout.range), c._mainStore.state.saveLayout(), c._mainStore.state.setChartIsReady(!0)
                    })
                }, this._stx = r, this._binaryApi = t, this._mainStore = n, this._serverTime = R.a.getInstance(), this._tradingTimes = s, Object(a.reaction)(function() {
                    return n.state.isConnectionOpened
                }, this.onConnectionChanged.bind(this)), this._emitter = new i.a({
                    emitDelay: 0
                })
            }
            return W(e, [{
                key: "startEpoch",
                get: function() {
                    return this._mainStore.state.startEpoch
                }
            }, {
                key: "endEpoch",
                get: function() {
                    return this._mainStore.state.endEpoch
                }
            }, {
                key: "granularity",
                get: function() {
                    return this._mainStore.chart.granularity
                }
            }, {
                key: "context",
                get: function() {
                    return this._mainStore.chart.context
                }
            }, {
                key: "loader",
                get: function() {
                    return this._mainStore.loader
                }
            }, {
                key: "margin",
                get: function() {
                    return this._mainStore.state.margin
                }
            }], [{
                key: "EVENT_MASTER_DATA_UPDATE",
                get: function() {
                    return "EVENT_MASTER_DATA_UPDATE"
                }
            }, {
                key: "EVENT_COMPARISON_DATA_UPDATE",
                get: function() {
                    return "EVENT_COMPARISON_DATA_UPDATE"
                }
            }, {
                key: "EVENT_START_PAGINATION",
                get: function() {
                    return "EVENT_START_PAGINATION"
                }
            }, {
                key: "EVENT_ON_PAGINATION",
                get: function() {
                    return "EVENT_ON_PAGINATION"
                }
            }]), W(e, [{
                key: "scaleChart",
                value: function() {
                    this.startEpoch && (this.endEpoch ? (this._stx.chart.isDisplayFullMode = !1, this._stx.chart.lockScroll = !1) : (this._stx.maxMasterDataSize = 0, this._stx.chart.lockScroll = !0), this._stx.setMaxTicks(this._stx.chart.dataSet.length + (Math.floor(this._stx.chart.dataSet.length / 5) || 2)), this._stx.chart.scroll = this._stx.chart.dataSet.length + (Math.floor(this._stx.chart.dataSet.length / 10) || 1), this._stx.chart.isScrollLocationChanged = !0, this._stx.draw())
                }
            }, {
                key: "subscribe",
                value: function() {}
            }, {
                key: "unsubscribe",
                value: function(e) {
                    var t = e.symbol,
                        r = e.period,
                        n = e.interval,
                        i = Object(o.a)(r, n),
                        a = this._getKey({
                            symbol: t,
                            granularity: i
                        });
                    this._forgetStream(a)
                }
            }, {
                key: "_forgetStream",
                value: function(e) {
                    this._activeStreams[e] && (this._activeStreams[e].forget(), delete this._activeStreams[e])
                }
            }, {
                key: "fetchInitialData",
                value: function() {
                    var e = U(regeneratorRuntime.mark(function e(t, r, n, i, a) {
                        var s, l, u, h, d, p, f, m, y, b, g, v, w, S, k, x, C, O, T, P = this;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (s = i.period, l = i.interval, u = i.symbolObject, h = Object(o.a)(s, l), d = this._getKey({
                                            symbol: t,
                                            granularity: h
                                        }), p = this._serverTime.getLocalDate(), r = r > p ? p : r, f = this._stx.chart.symbol !== t, m = this.startEpoch || Math.floor(r / 1e3 | 0), m = this.margin && this.startEpoch ? m - this.margin : m, y = this.margin && this.endEpoch ? this.endEpoch + this.margin : this.endEpoch, f && (m -= 60 * r.getTimezoneOffset()), b = f ? t : void 0, g = u.name, this.loader.setState("chart-data"), !this._tradingTimes.isFeedUnavailable(t)) {
                                        e.next = 19;
                                        break
                                    }
                                    return this._mainStore.notifier.notifyFeedUnavailable(g), v = {
                                        quotes: []
                                    }, f ? v = B({
                                        error: "StreamingNotAllowed",
                                        suppressAlert: !0
                                    }, v) : this._mainStore.chart.setChartAvailability(!1), a(v), e.abrupt("return");
                                case 19:
                                    if (w = {
                                            start: m,
                                            symbol: t,
                                            granularity: h
                                        }, S = !1, !y) {
                                        e.next = 26;
                                        break
                                    }
                                    w.end = y, S = !0, e.next = 51;
                                    break;
                                case 26:
                                    if (!this._tradingTimes.isMarketOpened(t)) {
                                        e.next = 49;
                                        break
                                    }
                                    return (C = this._tradingTimes.getDelayedMinutes(t)) > 0 ? (this._mainStore.notifier.notifyDelayedMarket(g, C), x = new E(w, this._binaryApi, this._stx, C)) : x = new M(w, this._binaryApi, this._stx), e.prev = 29, e.next = 32, x.initialFetch();
                                case 32:
                                    k = e.sent, e.next = 41;
                                    break;
                                case 35:
                                    return e.prev = 35, e.t0 = e.catch(29), O = e.t0.message, this._mainStore.notifier.notify({
                                        text: O,
                                        category: "activesymbol"
                                    }), a({
                                        quotes: []
                                    }), e.abrupt("return");
                                case 41:
                                    if (x.onChartData(function(e) {
                                            (f || t === P._stx.chart.symbol) && P._appendChartData(e, d, b)
                                        }), f || this._stx.chart.symbol === t) {
                                        e.next = 46;
                                        break
                                    }
                                    return a({
                                        quotes: []
                                    }), x.forget(), e.abrupt("return");
                                case 46:
                                    this._activeStreams[d] = x, e.next = 51;
                                    break;
                                case 49:
                                    this._mainStore.notifier.notifyMarketClose(g), S = !0;
                                case 51:
                                    if (!S) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.next = 54, this._binaryApi.getTickHistory(w);
                                case 54:
                                    T = e.sent, k = c.formatHistory(T);
                                case 56:
                                    if (k) {
                                        e.next = 60;
                                        break
                                    }
                                    return console.error("No quotes found!!"), a({
                                        quotes: []
                                    }), e.abrupt("return");
                                case 60:
                                    k = this._trimQuotes(k), a({
                                        quotes: k
                                    }), this._mainStore.chart.updateYaxisWidth(), this.scaleChart(), this._emitDataUpdate(k, b);
                                case 65:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [29, 35]
                        ])
                    }));
                    return function(t, r, n, i, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "fetchPaginationData",
                value: function() {
                    var t = U(regeneratorRuntime.mark(function t(r, n, i, a, s) {
                        var c, l, u, h, d;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return c = Object(o.l)(i), l = Object(o.l)(n), u = a.period, h = a.interval, d = Object(o.a)(u, h), this._stx.chart.symbol === r && this._emitter.emit(e.EVENT_START_PAGINATION, {
                                        start: l,
                                        end: c
                                    }), t.next = 8, this._getPaginationData(r, d, l, c, s);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function(e, r, n, i, a) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "_getPaginationData",
                value: function() {
                    var t = U(regeneratorRuntime.mark(function t(r, n, i, a, o) {
                        var s, l, u, h, d, p, f;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (s = this._stx.chart.symbol === r, !(this.startEpoch || this.endEpoch && a > this.endEpoch)) {
                                        t.next = 5;
                                        break
                                    }
                                    return o({
                                        moreAvailable: !1,
                                        quotes: []
                                    }), s && this._emitter.emit(e.EVENT_ON_PAGINATION, {
                                        start: i,
                                        end: a
                                    }), t.abrupt("return");
                                case 5:
                                    if (l = this._serverTime.getEpoch(), u = l - Math.ceil(2.8 * 365 * 24 * 60 * 60), h = {
                                            quotes: []
                                        }, !(a > u)) {
                                        t.next = 29;
                                        break
                                    }
                                    return t.prev = 9, t.next = 12, this._binaryApi.getTickHistory({
                                        symbol: r,
                                        granularity: n,
                                        start: Math.floor(Math.max(i, u)),
                                        end: a
                                    });
                                case 12:
                                    if (d = t.sent, void 0 !== (p = e.getFirstEpoch(d)) && p !== a) {
                                        t.next = 22;
                                        break
                                    }
                                    if (!((f = i - (a - i)) <= u)) {
                                        t.next = 19;
                                        break
                                    }
                                    return o({
                                        moreAvailable: !1,
                                        quotes: []
                                    }), t.abrupt("return");
                                case 19:
                                    return t.next = 21, this._getPaginationData(r, n, f, a, o);
                                case 21:
                                    return t.abrupt("return");
                                case 22:
                                    h.quotes = c.formatHistory(d), t.next = 29;
                                    break;
                                case 25:
                                    t.prev = 25, t.t0 = t.catch(9), console.error(t.t0), h = {
                                        error: t.t0
                                    };
                                case 29:
                                    o(h), s && this._emitter.emit(e.EVENT_ON_PAGINATION, {
                                        start: i,
                                        end: a
                                    });
                                case 31:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [9, 25]
                        ])
                    }));
                    return function(e, r, n, i, a) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "unsubscribeAll",
                value: function() {
                    for (var e = Object.keys(this._activeStreams), t = 0; t < e.length; t++) {
                        var r = e[t];
                        this._forgetStream(r)
                    }
                }
            }, {
                key: "_forgetIfEndEpoch",
                value: function(e) {
                    var t = this._activeStreams[e],
                        r = !0;
                    if (t) {
                        var n = t.lastStreamEpoch;
                        return this.endEpoch && n + this.granularity > this.endEpoch ? (this._activeStreams[e] && 0 === this.granularity && !this._mainStore.state.isStaticChart && CIQ.strToDateTime(Object(o.k)(this.endEpoch)).valueOf() >= this._stx.chart.dataSet.slice(-1)[0].DT.valueOf() && (r = !1), this._forgetStream(e)) : r = !1, r
                    }
                }
            }, {
                key: "_appendChartData",
                value: function(e, t, r) {
                    !this._forgetIfEndEpoch(t) || this._activeStreams[t] ? (this.endEpoch && CIQ.strToDateTime(Object(o.k)(this.endEpoch)).valueOf() !== this._stx.chart.dataSet.slice(-1)[0].DT.valueOf() && (this._stx.updateChartData([{
                        DT: CIQ.strToDateTime(Object(o.k)(this.endEpoch)),
                        Close: null
                    }], null, {
                        fillGaps: !0
                    }), this._stx.createDataSet()), r ? this._stx.updateChartData(e, null, {
                        secondarySeries: r,
                        noCreateDataSet: !0
                    }) : this._stx.updateChartData(e, null, {
                        allowReplaceOHL: !0
                    }), this._emitDataUpdate(e, r)) : e = []
                }
            }, {
                key: "_emitDataUpdate",
                value: function(t, r) {
                    var n = t[t.length - 2],
                        i = void 0 !== n ? n.Close : void 0,
                        a = B({}, t[t.length - 1], {
                            prevClose: i
                        });
                    r ? this._emitter.emit(e.EVENT_COMPARISON_DATA_UPDATE, B({
                        symbol: r
                    }, a)) : (this._emitter.emit(e.EVENT_MASTER_DATA_UPDATE, a), this._mainStore.chart.setChartAvailability(!0))
                }
            }, {
                key: "onMasterDataUpdate",
                value: function(t) {
                    this._emitter.on(e.EVENT_MASTER_DATA_UPDATE, t)
                }
            }, {
                key: "offMasterDataUpdate",
                value: function(t) {
                    this._emitter.off(e.EVENT_MASTER_DATA_UPDATE, t)
                }
            }, {
                key: "onComparisonDataUpdate",
                value: function(t) {
                    this._emitter.on(e.EVENT_COMPARISON_DATA_UPDATE, t)
                }
            }, {
                key: "onPagination",
                value: function(t) {
                    this._emitter.on(e.EVENT_ON_PAGINATION, t)
                }
            }, {
                key: "offPagination",
                value: function(t) {
                    this._emitter.off(e.EVENT_ON_PAGINATION, t)
                }
            }, {
                key: "onStartPagination",
                value: function(t) {
                    this._emitter.on(e.EVENT_START_PAGINATION, t)
                }
            }, {
                key: "offStartPagination",
                value: function(t) {
                    this._emitter.off(e.EVENT_START_PAGINATION, t)
                }
            }, {
                key: "onConnectionChanged",
                value: function() {
                    var e = this._mainStore.state.isConnectionOpened;
                    void 0 !== e && e !== this._isConnectionOpened && (this._isConnectionOpened = e, e ? this._onConnectionReopened() : this._onConnectionClosed())
                }
            }, {
                key: "_onConnectionClosed",
                value: function() {
                    for (var e in this._activeStreams) this._activeStreams[e].pause();
                    this._connectionClosedDate = new Date
                }
            }, {
                key: "_onConnectionReopened",
                value: function() {
                    var e = Object.keys(this._activeStreams);
                    if (0 !== e.length) {
                        var t = this._unpackKey(e[0]).granularity;
                        if (((new Date - this._connectionClosedDate) / 1e3 | 0) >= (t || 1) * this._stx.chart.maxTicks) this._mainStore.chart.refreshChart();
                        else
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                this._resumeStream(n)
                            }
                        this._connectionClosedDate = void 0
                    }
                }
            }, {
                key: "_resumeStream",
                value: function(e) {
                    var t = this,
                        r = this._unpackKey(e).symbol,
                        n = this._stx.chart.symbol !== r ? r : void 0;
                    this._activeStreams[e].resume().then(function(r) {
                        t._appendChartData(r, e, n)
                    })
                }
            }, {
                key: "_getKey",
                value: function(e) {
                    var t = e.symbol,
                        r = e.granularity;
                    return "".concat(t, "-").concat(r)
                }
            }, {
                key: "_unpackKey",
                value: function(e) {
                    var t = H(e.split("-"), 2);
                    return {
                        symbol: t[0],
                        granularity: +t[1]
                    }
                }
            }, {
                key: "_trimQuotes",
                value: function() {
                    var e = this,
                        t = null,
                        r = null,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!n.length) return [];
                    if (this.startEpoch && this.margin && (t = n.findIndex(function(t) {
                            return CIQ.strToDateTime(t.Date) >= CIQ.strToDateTime(Object(o.k)(e.startEpoch))
                        })) > -1 && (n = n.slice(t - 1)), this.endEpoch && this.margin && (r = n.findIndex(function(t) {
                            return CIQ.strToDateTime(t.Date) >= CIQ.strToDateTime(Object(o.k)(e.endEpoch))
                        })) > -1) {
                        var i = n[r].Date === Object(o.k)(this.endEpoch) ? 2 : 1;
                        n = n.slice(0, r + i)
                    }
                    return n
                }
            }], [{
                key: "getFirstEpoch",
                value: function(e) {
                    var t = e.candles,
                        r = e.history;
                    return t && t.length > 0 ? t[0].epoch : r && r.times.length > 0 ? +r.times[0] : void 0
                }
            }]), e
        }();
        r.d(t, "a", function() {
            return Q
        })
    }, function(e, t, r) {
        "use strict";
        t.a = function() {
            CIQ.ChartEngine.prototype.drawCurrentHR = function() {
                if (!this.runPrepend("drawCurrentHR", arguments)) {
                    var e, t, r = this.mainSeriesRenderer || {};
                    if (!r.noCurrentHR) {
                        var n = r.highLowBars || this.highLowBars[this.layout.chartType];
                        for (var i in this.charts) {
                            var a = this.charts[i],
                                o = a.panel,
                                s = o.yAxis;
                            if (!o.hidden && !1 !== s.drawCurrentPriceLabel && !s.noDraw && r.params) {
                                var c = s.whichSet;
                                if (c || (c = "dataSet"), !this.isHistoricalModeSet || "dataSegment" === c) {
                                    var l = a[c].length,
                                        u = this.layout.candleWidth;
                                    if ("dataSegment" == c)
                                        for (; l > (a.width - this.micropixels + u / 2 + 1) / u;) l--;
                                    if (l && a[c][l - 1]) {
                                        var h, d, p, f = a.defaultPlotField;
                                        f && !n || (f = "Close");
                                        do {
                                            if (d = h = a[c][--l][f], 0 === l) break
                                        } while (null === d);
                                        if ("dataSet" == c && a.currentQuote) d = a.currentQuote[f];
                                        else if (a[c].length >= 2) {
                                            var m = a[c][l - 1];
                                            m && (h = m[f])
                                        }
                                        d < h ? (e = this.canvasStyle("stx_current_hr_down").backgroundColor, t = this.canvasStyle("stx_current_hr_down").color) : (e = this.canvasStyle("stx_current_hr_up").backgroundColor, t = this.canvasStyle("stx_current_hr_up").color), a.transformFunc && (d = a.transformFunc(this, a, d));
                                        var y = Math.max(o.yAxis.printDecimalPlaces, o.chart.decimalPlaces);
                                        (s.maxDecimalPlaces || 0 === s.maxDecimalPlaces) && (y = Math.min(y, s.maxDecimalPlaces)), p = s.priceFormatter ? s.priceFormatter(this, o, d, y) : this.formatYAxisPrice(d, o, y);
                                        var b = this.pixelFromTransformedValue(d, o);
                                        a.currentPriceLabelY = b, this.createYAxisLabel(o, p, b, e, t);
                                        var g = o.left,
                                            v = o.right,
                                            w = this.currentQuote();
                                        w && (g = this.pixelFromTick(w.tick, a) + (a.lastTickOffset || 0), v -= .4 * this.chart.context.measureText(p).width), v += 24, !0 === this.preferences.currentPriceLine && this.isHome() && this.plotLine(g, v, b, b, e, "segment", o.chart.context, o, {
                                            pattern: "dashed",
                                            lineWidth: 1,
                                            opacity: .8
                                        })
                                    }
                                }
                            }
                        }
                        this.runAppend("drawCurrentHR", arguments)
                    }
                }
            }, CIQ.ChartEngine.prototype.prepend("headsUpHR", function() {
                this.currentPanel && (this.yaxisLabelStyle = "rect", this.labelType = "crosshair")
            }), CIQ.ChartEngine.prototype.append("headsUpHR", function() {
                this.yaxisLabelStyle = "roundRectArrow", this.labelType = null
            }), CIQ.Plotter.prototype.drawText = function(e, t) {
                for (var r = 0; r < t.text.length; r++) {
                    var n = t.text[r],
                        i = n.width ? n.width : e.measureText(n.text).width,
                        a = this.getYAxisWidth() ? (this.getYAxisWidth() - i) / 2 : 0;
                    if (n.bg) {
                        var o = n.height ? n.height : 12,
                            s = e.fillStyle;
                        e.fillStyle = n.bg, "right" === e.textAlign ? e.fillRect(n.x, n.y - o / 2, -i, -o) : e.fillRect(n.x, n.y - o / 2, i, o), e.fillStyle = s
                    }
                    e.fillText(n.text, n.x + a, n.y)
                }
            }, CIQ.ChartEngine.prototype.prepend("resizeChart", function() {
                this.isAutoScale && this.chart.xaxis && this.chart.xaxis.length && (this.customCandleWidth = this.layout.candleWidth, this.customChartWidth = this.chart.width, this.customScroll = this.chart.scroll)
            }), CIQ.ChartEngine.prototype.append("resizeChart", function() {
                if (this.isAutoScale && this.customChartWidth) {
                    var e = this.customChartWidth / this.customCandleWidth;
                    this.layout.candleWidth = this.chart.width / e, this.chart.scroll = this.customScroll, this.draw()
                }
            }), CIQ.ChartEngine.prototype.setMaxTicks = function(e, t) {
                t || (t = {}), (e = Math.round(e)) < 2 && (e = 2);
                var r = t.padding ? t.padding : 0;
                this.layout.candleWidth = (this.chart.width - r) / e, this.layout.candleWidth || (this.layout.candleWidth = 8), this.chart.maxTicks = Math.round((this.chart.width - r) / this.layout.candleWidth - .499), (t.padding || 0 === t.padding) && (this.chart.scroll = e + 1)
            }
        }
    }, function(e, t, r) {
        var n = {
            "./de.po": [168, 1],
            "./es.po": [169, 2],
            "./fr.po": [170, 3],
            "./id.po": [171, 4],
            "./it.po": [172, 5],
            "./nl.po": [173, 6],
            "./pl.po": [174, 7],
            "./pt.po": [175, 8],
            "./ru.po": [176, 9],
            "./th.po": [177, 10],
            "./vi.po": [178, 11],
            "./zh_cn.po": [179, 12],
            "./zh_tw.po": [180, 13]
        };

        function i(e) {
            var t = n[e];
            return t ? r.e(t[1]).then(function() {
                var e = t[0];
                return r.t(e, 7)
            }) : Promise.resolve().then(function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            })
        }
        i.keys = function() {
            return Object.keys(n)
        }, i.id = 92, e.exports = i
    }, function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            a = r(98),
            o = b(a),
            s = b(r(101)),
            c = r(0),
            l = b(r(107)),
            u = b(r(110)),
            h = r(111),
            d = b(r(112)),
            p = b(r(113)),
            f = b(r(114)),
            m = r(115),
            y = r(116);

        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var g = function(e) {
            function t(e) {
                var r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [this, e].concat(i)));
                return o.getScrollLeft = o.getScrollLeft.bind(o), o.getScrollTop = o.getScrollTop.bind(o), o.getScrollWidth = o.getScrollWidth.bind(o), o.getScrollHeight = o.getScrollHeight.bind(o), o.getClientWidth = o.getClientWidth.bind(o), o.getClientHeight = o.getClientHeight.bind(o), o.getPaddingWidth = o.getPaddingWidth.bind(o), o.getPaddingHeight = o.getPaddingHeight.bind(o), o.getValues = o.getValues.bind(o), o.getThumbHorizontalWidth = o.getThumbHorizontalWidth.bind(o), o.getThumbVerticalHeight = o.getThumbVerticalHeight.bind(o), o.getScrollLeftForOffset = o.getScrollLeftForOffset.bind(o), o.getScrollTopForOffset = o.getScrollTopForOffset.bind(o), o.scrollLeft = o.scrollLeft.bind(o), o.scrollTop = o.scrollTop.bind(o), o.scrollToLeft = o.scrollToLeft.bind(o), o.scrollToTop = o.scrollToTop.bind(o), o.scrollToRight = o.scrollToRight.bind(o), o.scrollToBottom = o.scrollToBottom.bind(o), o.handleTrackMouseEnter = o.handleTrackMouseEnter.bind(o), o.handleTrackMouseLeave = o.handleTrackMouseLeave.bind(o), o.handleHorizontalTrackMouseDown = o.handleHorizontalTrackMouseDown.bind(o), o.handleVerticalTrackMouseDown = o.handleVerticalTrackMouseDown.bind(o), o.handleHorizontalThumbMouseDown = o.handleHorizontalThumbMouseDown.bind(o), o.handleVerticalThumbMouseDown = o.handleVerticalThumbMouseDown.bind(o), o.handleWindowResize = o.handleWindowResize.bind(o), o.handleScroll = o.handleScroll.bind(o), o.handleDrag = o.handleDrag.bind(o), o.handleDragEnd = o.handleDragEnd.bind(o), o.pollScrollbarWidth = o.pollScrollbarWidth.bind(o), o.state = {
                    didMountUniversal: !1,
                    scrollbarWidth: 17
                }, o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, c.Component), i(t, [{
                key: "componentDidMount",
                value: function() {
                    this.addListeners(), this.update(), this.componentDidMountUniversal()
                }
            }, {
                key: "componentDidMountUniversal",
                value: function() {
                    this.props.universal && this.setState({
                        didMountUniversal: !0
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.update()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.removeListeners(), (0, a.cancel)(this.requestFrame), clearTimeout(this.hideTracksTimeout), clearInterval(this.detectScrollingInterval)
                }
            }, {
                key: "getScrollLeft",
                value: function() {
                    return this.view ? this.view.scrollLeft : 0
                }
            }, {
                key: "getScrollTop",
                value: function() {
                    return this.view ? this.view.scrollTop : 0
                }
            }, {
                key: "getScrollWidth",
                value: function() {
                    return this.view ? this.view.scrollWidth - this.getPaddingWidth() : 0
                }
            }, {
                key: "getScrollHeight",
                value: function() {
                    return this.view ? this.view.scrollHeight - this.getPaddingHeight() : 0
                }
            }, {
                key: "getClientWidth",
                value: function() {
                    return this.view ? this.view.clientWidth - this.getPaddingWidth() : 0
                }
            }, {
                key: "getClientHeight",
                value: function() {
                    return this.view ? this.view.clientHeight - this.getPaddingHeight() : 0
                }
            }, {
                key: "getPaddingWidth",
                value: function() {
                    return m.scrollbarSize
                }
            }, {
                key: "getPaddingHeight",
                value: function() {
                    return m.scrollbarSize
                }
            }, {
                key: "getValues",
                value: function() {
                    if (!this.view) return null;
                    var e = this.view || {},
                        t = e.offsetWidth,
                        r = void 0 === t ? 0 : t,
                        n = e.scrollLeft,
                        i = void 0 === n ? 0 : n,
                        a = e.scrollTop,
                        o = void 0 === a ? 0 : a,
                        s = e.scrollWidth,
                        c = void 0 === s ? 0 : s,
                        l = e.scrollHeight,
                        u = void 0 === l ? 0 : l,
                        h = e.clientWidth,
                        d = void 0 === h ? 0 : h,
                        p = e.clientHeight,
                        f = void 0 === p ? 0 : p,
                        m = c - this.getPaddingWidth(),
                        y = u - this.getPaddingHeight(),
                        b = d - this.getPaddingWidth(),
                        g = f - this.getPaddingHeight();
                    return {
                        left: i / (m - b) || 0,
                        top: o / (y - g) || 0,
                        offsetWidth: r,
                        realClientWidth: d,
                        realClientHeight: f,
                        scrollLeft: i,
                        scrollTop: o,
                        scrollWidth: m,
                        scrollHeight: y,
                        clientWidth: b,
                        clientHeight: g
                    }
                }
            }, {
                key: "getThumbHorizontalWidth",
                value: function() {
                    var e = this.props,
                        t = e.thumbSize,
                        r = e.thumbMinSize,
                        n = this.view,
                        i = n.scrollWidth,
                        a = n.clientWidth,
                        o = i - this.getPaddingWidth(),
                        s = a - this.getPaddingWidth(),
                        c = (0, p.default)(this.trackHorizontal),
                        l = Math.ceil(s / o * c);
                    return o <= s ? 0 : t || Math.max(l, r)
                }
            }, {
                key: "getThumbVerticalHeight",
                value: function() {
                    var e = this.props,
                        t = e.thumbSize,
                        r = e.thumbMinSize,
                        n = this.view,
                        i = n.scrollHeight,
                        a = n.clientHeight,
                        o = i - this.getPaddingHeight(),
                        s = a - this.getPaddingHeight(),
                        c = (0, f.default)(this.trackVertical),
                        l = Math.ceil(s / o * c);
                    return o <= s ? 0 : t || Math.max(l, r)
                }
            }, {
                key: "getScrollLeftForOffset",
                value: function(e) {
                    var t = this.view,
                        r = t.scrollWidth,
                        n = t.clientWidth,
                        i = r - this.getPaddingWidth(),
                        a = n - this.getPaddingWidth();
                    return e / ((0, p.default)(this.trackHorizontal) - this.getThumbHorizontalWidth()) * (i - a)
                }
            }, {
                key: "getScrollTopForOffset",
                value: function(e) {
                    var t = this.view,
                        r = t.scrollHeight,
                        n = t.clientHeight,
                        i = r - this.getPaddingHeight(),
                        a = n - this.getPaddingHeight();
                    return e / ((0, f.default)(this.trackVertical) - this.getThumbVerticalHeight()) * (i - a)
                }
            }, {
                key: "scrollLeft",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.view && (this.view.scrollLeft = e)
                }
            }, {
                key: "scrollTop",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.view && (this.view.scrollTop = e)
                }
            }, {
                key: "scrollToLeft",
                value: function() {
                    this.view && (this.view.scrollLeft = 0)
                }
            }, {
                key: "scrollToTop",
                value: function() {
                    this.view && (this.view.scrollTop = 0)
                }
            }, {
                key: "scrollToRight",
                value: function() {
                    this.view && (this.view.scrollLeft = this.view.scrollWidth - this.getPaddingWidth())
                }
            }, {
                key: "scrollToBottom",
                value: function() {
                    this.view && (this.view.scrollTop = this.view.scrollHeight - this.getPaddingHeight())
                }
            }, {
                key: "addListeners",
                value: function() {
                    if ("undefined" != typeof document && this.view) {
                        var e = this.view,
                            t = this.trackHorizontal,
                            r = this.trackVertical,
                            n = this.thumbHorizontal,
                            i = this.thumbVertical;
                        e.addEventListener("scroll", this.handleScroll), t.addEventListener("mouseenter", this.handleTrackMouseEnter), t.addEventListener("mouseleave", this.handleTrackMouseLeave), t.addEventListener("mousedown", this.handleHorizontalTrackMouseDown), r.addEventListener("mouseenter", this.handleTrackMouseEnter), r.addEventListener("mouseleave", this.handleTrackMouseLeave), r.addEventListener("mousedown", this.handleVerticalTrackMouseDown), n.addEventListener("mousedown", this.handleHorizontalThumbMouseDown), i.addEventListener("mousedown", this.handleVerticalThumbMouseDown), window.addEventListener("resize", this.handleWindowResize), this.pollScrollbarWidthTimer = setTimeout(this.pollScrollbarWidth, 3e3)
                    }
                }
            }, {
                key: "removeListeners",
                value: function() {
                    if ("undefined" != typeof document && this.view) {
                        var e = this.view,
                            t = this.trackHorizontal,
                            r = this.trackVertical,
                            n = this.thumbHorizontal,
                            i = this.thumbVertical;
                        e && e.removeEventListener("scroll", this.handleScroll), t && (t.removeEventListener("mouseenter", this.handleTrackMouseEnter), t.removeEventListener("mouseleave", this.handleTrackMouseLeave), t.removeEventListener("mousedown", this.handleHorizontalTrackMouseDown)), r && (r.removeEventListener("mouseenter", this.handleTrackMouseEnter), r.removeEventListener("mouseleave", this.handleTrackMouseLeave), r.removeEventListener("mousedown", this.handleVerticalTrackMouseDown)), n && n.removeEventListener("mousedown", this.handleHorizontalThumbMouseDown), i && i.removeEventListener("mousedown", this.handleVerticalThumbMouseDown), window.removeEventListener("resize", this.handleWindowResize), this.pollScrollbarWidthTimer && clearTimeout(this.pollScrollbarWidthTimer), this.teardownDragging()
                    }
                }
            }, {
                key: "pollScrollbarWidth",
                value: function() {
                    var e = this;
                    this.raf(function() {
                        e.detectScrollbarWidthChange(e.getValues()) ? e._update(function() {
                            e.pollScrollbarWidthTimer = setTimeout(e.pollScrollbarWidth, 3e3)
                        }) : e.pollScrollbarWidthTimer = setTimeout(e.pollScrollbarWidth, 3e3)
                    })
                }
            }, {
                key: "detectScrollbarWidthChange",
                value: function(e) {
                    var t = this,
                        r = e.scrollLeft,
                        n = e.scrollTop;
                    (0, h.invalidateScrollbarWidth)();
                    var i = (0, h.getScrollbarWidth)(e),
                        a = i !== this.state.scrollbarWidth && i !== this.state.scrollbarWidth + 1;
                    return a && this.setState({
                        scrollbarWidth: i
                    }, function() {
                        var e = t.getValues(),
                            a = e.clientHeight,
                            o = e.scrollHeight,
                            s = Math.abs(o - a - n) <= i;
                        t.scrollLeft(r), s ? t.scrollTop(o - a) : t.scrollTop(n)
                    }), a
                }
            }, {
                key: "handleScroll",
                value: function(e) {
                    var t = this,
                        r = this.props,
                        n = r.onScroll,
                        i = r.onScrollFrame;
                    n && n(e), this.update(function(e) {
                        var r = e.scrollLeft,
                            n = e.scrollTop;
                        t.viewScrollLeft = r, t.viewScrollTop = n, i && i(e)
                    }), this.detectScrolling()
                }
            }, {
                key: "handleScrollStart",
                value: function() {
                    var e = this.props.onScrollStart;
                    e && e(), this.handleScrollStartAutoHide()
                }
            }, {
                key: "handleScrollStartAutoHide",
                value: function() {
                    this.props.autoHide && this.showTracks()
                }
            }, {
                key: "handleScrollStop",
                value: function() {
                    var e = this.props.onScrollStop;
                    e && e(), this.handleScrollStopAutoHide()
                }
            }, {
                key: "handleScrollStopAutoHide",
                value: function() {
                    this.props.autoHide && this.hideTracks()
                }
            }, {
                key: "handleWindowResize",
                value: function() {
                    this.update()
                }
            }, {
                key: "handleHorizontalTrackMouseDown",
                value: function(e) {
                    e.preventDefault();
                    var t = e.target,
                        r = e.clientX,
                        n = t.getBoundingClientRect().left,
                        i = this.getThumbHorizontalWidth(),
                        a = Math.abs(n - r) - i / 2;
                    this.view.scrollLeft = this.getScrollLeftForOffset(a)
                }
            }, {
                key: "handleVerticalTrackMouseDown",
                value: function(e) {
                    e.preventDefault();
                    var t = e.target,
                        r = e.clientY,
                        n = t.getBoundingClientRect().top,
                        i = this.getThumbVerticalHeight(),
                        a = Math.abs(n - r) - i / 2;
                    this.view.scrollTop = this.getScrollTopForOffset(a)
                }
            }, {
                key: "handleHorizontalThumbMouseDown",
                value: function(e) {
                    e.preventDefault(), this.handleDragStart(e);
                    var t = e.target,
                        r = e.clientX,
                        n = t.offsetWidth,
                        i = t.getBoundingClientRect().left;
                    this.prevPageX = n - (r - i)
                }
            }, {
                key: "handleVerticalThumbMouseDown",
                value: function(e) {
                    e.preventDefault(), this.handleDragStart(e);
                    var t = e.target,
                        r = e.clientY,
                        n = t.offsetHeight,
                        i = t.getBoundingClientRect().top;
                    this.prevPageY = n - (r - i)
                }
            }, {
                key: "setupDragging",
                value: function() {
                    (0, s.default)(document.body, m.disableSelectStyle), document.addEventListener("mousemove", this.handleDrag), document.addEventListener("mouseup", this.handleDragEnd), document.onselectstart = d.default
                }
            }, {
                key: "teardownDragging",
                value: function() {
                    (0, s.default)(document.body, m.disableSelectStyleReset), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleDragEnd), document.onselectstart = void 0
                }
            }, {
                key: "handleDragStart",
                value: function(e) {
                    this.dragging = !0, e.stopImmediatePropagation(), this.setupDragging()
                }
            }, {
                key: "handleDrag",
                value: function(e) {
                    if (this.prevPageX) {
                        var t = e.clientX,
                            r = -this.trackHorizontal.getBoundingClientRect().left + t - (this.getThumbHorizontalWidth() - this.prevPageX);
                        this.view.scrollLeft = this.getScrollLeftForOffset(r)
                    }
                    if (this.prevPageY) {
                        var n = e.clientY,
                            i = -this.trackVertical.getBoundingClientRect().top + n - (this.getThumbVerticalHeight() - this.prevPageY);
                        this.view.scrollTop = this.getScrollTopForOffset(i)
                    }
                    return !1
                }
            }, {
                key: "handleDragEnd",
                value: function() {
                    this.dragging = !1, this.prevPageX = this.prevPageY = 0, this.teardownDragging(), this.handleDragEndAutoHide()
                }
            }, {
                key: "handleDragEndAutoHide",
                value: function() {
                    this.props.autoHide && this.hideTracks()
                }
            }, {
                key: "handleTrackMouseEnter",
                value: function() {
                    this.trackMouseOver = !0, this.handleTrackMouseEnterAutoHide()
                }
            }, {
                key: "handleTrackMouseEnterAutoHide",
                value: function() {
                    this.props.autoHide && this.showTracks()
                }
            }, {
                key: "handleTrackMouseLeave",
                value: function() {
                    this.trackMouseOver = !1, this.handleTrackMouseLeaveAutoHide()
                }
            }, {
                key: "handleTrackMouseLeaveAutoHide",
                value: function() {
                    this.props.autoHide && this.hideTracks()
                }
            }, {
                key: "showTracks",
                value: function() {
                    clearTimeout(this.hideTracksTimeout), (0, s.default)(this.trackHorizontal, {
                        opacity: 1
                    }), (0, s.default)(this.trackVertical, {
                        opacity: 1
                    })
                }
            }, {
                key: "hideTracks",
                value: function() {
                    var e = this;
                    if (!this.dragging && !this.scrolling && !this.trackMouseOver) {
                        var t = this.props.autoHideTimeout;
                        clearTimeout(this.hideTracksTimeout), this.hideTracksTimeout = setTimeout(function() {
                            (0, s.default)(e.trackHorizontal, {
                                opacity: 0
                            }), (0, s.default)(e.trackVertical, {
                                opacity: 0
                            })
                        }, t)
                    }
                }
            }, {
                key: "detectScrolling",
                value: function() {
                    var e = this;
                    this.scrolling || (this.scrolling = !0, this.handleScrollStart(), this.detectScrollingInterval = setInterval(function() {
                        e.lastViewScrollLeft === e.viewScrollLeft && e.lastViewScrollTop === e.viewScrollTop && (clearInterval(e.detectScrollingInterval), e.scrolling = !1, e.handleScrollStop()), e.lastViewScrollLeft = e.viewScrollLeft, e.lastViewScrollTop = e.viewScrollTop
                    }, 100))
                }
            }, {
                key: "raf",
                value: function(e) {
                    var t = this;
                    this.requestFrame && o.default.cancel(this.requestFrame), this.requestFrame = (0, o.default)(function() {
                        t.requestFrame = void 0, e()
                    })
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this;
                    this.raf(function() {
                        t._update(function(r) {
                            t.detectScrollbarWidthChange(r), "function" == typeof e && e(r)
                        })
                    })
                }
            }, {
                key: "_update",
                value: function(e) {
                    var t = this.props,
                        r = t.onUpdate,
                        n = t.hideTracksWhenNotNeeded;
                    if (this.container.scrollTop = 0, this.container.scrollLeft = 0, this.view) {
                        var i = this.getValues(),
                            a = i.scrollLeft,
                            o = i.clientWidth,
                            c = i.scrollWidth,
                            l = (0, p.default)(this.trackHorizontal),
                            u = this.getThumbHorizontalWidth(),
                            h = {
                                width: u,
                                transform: "translateX(" + a / (c - o) * (l - u) + "px)"
                            },
                            d = i.scrollTop,
                            m = i.clientHeight,
                            y = i.scrollHeight,
                            b = (0, f.default)(this.trackVertical),
                            g = this.getThumbVerticalHeight(),
                            v = {
                                height: g,
                                transform: "translateY(" + d / (y - m) * (b - g) + "px)"
                            };
                        if (n) {
                            var w = {
                                    visibility: c > o ? "visible" : "hidden"
                                },
                                S = {
                                    visibility: y > m ? "visible" : "hidden"
                                };
                            (0, s.default)(this.trackHorizontal, w), (0, s.default)(this.trackVertical, S)
                        }(0, s.default)(this.thumbHorizontal, h), (0, s.default)(this.thumbVertical, v), r && r(i), "function" == typeof e && e(i)
                    } else "function" == typeof e && e()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        r = (t.onScroll, t.onScrollFrame, t.onScrollStart, t.onScrollStop, t.onUpdate, t.renderView),
                        i = t.renderTrackHorizontal,
                        a = t.renderTrackVertical,
                        o = t.renderThumbHorizontal,
                        s = t.renderThumbVertical,
                        l = t.tagName,
                        h = (t.hideTracksWhenNotNeeded, t.autoHide),
                        d = (t.autoHideTimeout, t.autoHideDuration),
                        p = (t.thumbSize, t.thumbMinSize, t.universal),
                        f = t.autoHeight,
                        y = t.autoHeightMin,
                        b = t.autoHeightMax,
                        g = t.style,
                        v = t.children,
                        w = function(e, t) {
                            var r = {};
                            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                            return r
                        }(t, ["onScroll", "onScrollFrame", "onScrollStart", "onScrollStop", "onUpdate", "renderView", "renderTrackHorizontal", "renderTrackVertical", "renderThumbHorizontal", "renderThumbVertical", "tagName", "hideTracksWhenNotNeeded", "autoHide", "autoHideTimeout", "autoHideDuration", "thumbSize", "thumbMinSize", "universal", "autoHeight", "autoHeightMin", "autoHeightMax", "style", "children"]),
                        S = this.state,
                        k = S.didMountUniversal,
                        x = S.scrollbarWidth,
                        C = n({}, m.containerStyleDefault, f && n({}, m.containerStyleAutoHeight, {
                            minHeight: y,
                            maxHeight: b
                        }), g),
                        O = n({}, m.viewStyleDefault, {
                            marginRight: -this.getPaddingWidth() + (x ? -x : 0),
                            marginBottom: -this.getPaddingHeight() + (x ? -x : 0),
                            width: "calc(100% + " + (m.scrollbarSize + x) + "px)"
                        }, f && n({}, m.viewStyleAutoHeight, {
                            minHeight: (0, u.default)(y) ? "calc(" + y + " + " + (this.getPaddingHeight() + x) + "px)" : y + this.getPaddingHeight() + x,
                            maxHeight: (0, u.default)(b) ? "calc(" + b + " + " + (this.getPaddingHeight() + x) + "px)" : b + this.getPaddingHeight() + x
                        }), f && p && !k && {
                            minHeight: y,
                            maxHeight: b
                        }, p && !k && m.viewStyleUniversalInitial),
                        E = n({}, m.viewWrapperStyleDefault, f && n({}, m.viewWrapperStyleAutoHeight)),
                        T = n({}, m.viewWrappedStyleDefault),
                        P = {
                            transition: "opacity " + d + "ms",
                            opacity: 0
                        },
                        _ = n({}, m.trackHorizontalStyleDefault, h && P, p && !k && {
                            display: "none"
                        }),
                        D = n({}, m.trackVerticalStyleDefault, h && P, p && !k && {
                            display: "none"
                        });
                    return (0, c.createElement)(l, {
                        className: w.className ? w.className : "",
                        style: C,
                        ref: function(t) {
                            e.container = t
                        }
                    }, [(0, c.createElement)("div", {
                        style: O,
                        key: "view",
                        ref: function(t) {
                            e.view = t
                        }
                    }, [(0, c.createElement)("div", {
                        style: E,
                        key: "viewWrapper",
                        ref: function(t) {
                            e.viewWrapper = t
                        }
                    }, [(0, c.cloneElement)(r({
                        style: T
                    }), {
                        key: "viewWrapped",
                        ref: function(t) {
                            e.viewWrapped = t
                        }
                    }, v)])]), (0, c.cloneElement)(i({
                        style: _
                    }), {
                        key: "trackHorizontal",
                        ref: function(t) {
                            e.trackHorizontal = t
                        }
                    }, (0, c.cloneElement)(o({
                        style: m.thumbHorizontalStyleDefault
                    }), {
                        ref: function(t) {
                            e.thumbHorizontal = t
                        }
                    })), (0, c.cloneElement)(a({
                        style: D
                    }), {
                        key: "trackVertical",
                        ref: function(t) {
                            e.trackVertical = t
                        }
                    }, (0, c.cloneElement)(s({
                        style: m.thumbVerticalStyleDefault
                    }), {
                        ref: function(t) {
                            e.thumbVertical = t
                        }
                    }))])
                }
            }]), t
        }();
        t.default = g, g.propTypes = {
            onScroll: l.default.func,
            onScrollFrame: l.default.func,
            onScrollStart: l.default.func,
            onScrollStop: l.default.func,
            onUpdate: l.default.func,
            renderView: l.default.func,
            renderTrackHorizontal: l.default.func,
            renderTrackVertical: l.default.func,
            renderThumbHorizontal: l.default.func,
            renderThumbVertical: l.default.func,
            tagName: l.default.string,
            thumbSize: l.default.number,
            thumbMinSize: l.default.number,
            hideTracksWhenNotNeeded: l.default.bool,
            autoHide: l.default.bool,
            autoHideTimeout: l.default.number,
            autoHideDuration: l.default.number,
            autoHeight: l.default.bool,
            autoHeightMin: l.default.oneOfType([l.default.number, l.default.string]),
            autoHeightMax: l.default.oneOfType([l.default.number, l.default.string]),
            universal: l.default.bool,
            style: l.default.object,
            children: l.default.node
        }, g.defaultProps = {
            renderView: y.renderViewDefault,
            renderTrackHorizontal: y.renderTrackHorizontalDefault,
            renderTrackVertical: y.renderTrackVerticalDefault,
            renderThumbHorizontal: y.renderThumbHorizontalDefault,
            renderThumbVertical: y.renderThumbVerticalDefault,
            tagName: "div",
            thumbMinSize: 30,
            hideTracksWhenNotNeeded: !1,
            autoHide: !1,
            autoHideTimeout: 1e3,
            autoHideDuration: 200,
            autoHeight: !1,
            autoHeightMin: 0,
            autoHeightMax: 200,
            universal: !1
        }
    }, function(e, t, r) {
        (function(t) {
            for (var n = r(99), i = "undefined" == typeof window ? t : window, a = ["moz", "webkit"], o = "AnimationFrame", s = i["request" + o], c = i["cancel" + o] || i["cancelRequest" + o], l = 0; !s && l < a.length; l++) s = i[a[l] + "Request" + o], c = i[a[l] + "Cancel" + o] || i[a[l] + "CancelRequest" + o];
            if (!s || !c) {
                var u = 0,
                    h = 0,
                    d = [];
                s = function(e) {
                    if (0 === d.length) {
                        var t = n(),
                            r = Math.max(0, 1e3 / 60 - (t - u));
                        u = r + t, setTimeout(function() {
                            var e = d.slice(0);
                            d.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(u)
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e
                                    }, 0)
                                }
                        }, Math.round(r))
                    }
                    return d.push({
                        handle: ++h,
                        callback: e,
                        cancelled: !1
                    }), h
                }, c = function(e) {
                    for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return s.call(i, e)
            }, e.exports.cancel = function() {
                c.apply(i, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = i), e.requestAnimationFrame = s, e.cancelAnimationFrame = c
            }
        }).call(this, r(56))
    }, function(e, t, r) {
        (function(t) {
            (function() {
                var r, n, i, a, o, s;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function() {
                    return (r() - o) / 1e6
                }, n = t.hrtime, a = (r = function() {
                    var e;
                    return 1e9 * (e = n())[0] + e[1]
                })(), s = 1e9 * t.uptime(), o = a - s) : Date.now ? (e.exports = function() {
                    return Date.now() - i
                }, i = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        }).call(this, r(100))
    }, function(e, t) {
        var r, n, i = e.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                r = a
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                n = o
            }
        }();
        var c, l = [],
            u = !1,
            h = -1;

        function d() {
            u && c && (u = !1, c.length ? l = c.concat(l) : h = -1, l.length && p())
        }

        function p() {
            if (!u) {
                var e = s(d);
                u = !0;
                for (var t = l.length; t;) {
                    for (c = l, l = []; ++h < t;) c && c[h].run();
                    h = -1, t = l.length
                }
                c = null, u = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function f(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            l.push(new f(e, t)), 1 !== l.length || u || s(p)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(e, t, r) {
        var n = r(102),
            i = r(103),
            a = {
                float: "cssFloat"
            },
            o = r(106);

        function s(e, t, r) {
            var s = a[t];
            if (void 0 === s && (s = function(e) {
                    var t = i(e),
                        r = n(t);
                    return a[t] = a[e] = a[r] = r, r
                }(t)), s) {
                if (void 0 === r) return e.style[s];
                e.style[s] = o(s, r)
            }
        }

        function c() {
            2 === arguments.length ? "string" == typeof arguments[1] ? arguments[0].style.cssText = arguments[1] : function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && s(e, r, t[r])
            }(arguments[0], arguments[1]) : s(arguments[0], arguments[1], arguments[2])
        }
        e.exports = c, e.exports.set = c, e.exports.get = function(e, t) {
            return Array.isArray(t) ? t.reduce(function(t, r) {
                return t[r] = s(e, r || ""), t
            }, {}) : s(e, t || "")
        }
    }, function(e, t) {
        var r = null,
            n = ["Webkit", "Moz", "O", "ms"];
        e.exports = function(e) {
            r || (r = document.createElement("div"));
            var t = r.style;
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), a = n.length; a >= 0; a--) {
                var o = n[a] + i;
                if (o in t) return o
            }
            return !1
        }
    }, function(e, t, r) {
        var n = r(104);
        e.exports = function(e) {
            return n(e).replace(/\s(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }
    }, function(e, t, r) {
        var n = r(105);
        e.exports = function(e) {
            return n(e).replace(/[\W_]+(.|$)/g, function(e, t) {
                return t ? " " + t : ""
            }).trim()
        }
    }, function(e, t) {
        e.exports = function(e) {
            return r.test(e) ? e.toLowerCase() : n.test(e) ? (function(e) {
                return e.replace(a, function(e, t) {
                    return t ? " " + t : ""
                })
            }(e) || e).toLowerCase() : i.test(e) ? function(e) {
                return e.replace(o, function(e, t, r) {
                    return t + " " + r.toLowerCase().split("").join(" ")
                })
            }(e).toLowerCase() : e.toLowerCase()
        };
        var r = /\s/,
            n = /(_|-|\.|:)/,
            i = /([a-z][A-Z]|[A-Z][a-z])/;
        var a = /[\W_]+(.|$)/g;
        var o = /(.)([A-Z]+)/g
    }, function(e, t) {
        var r = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        e.exports = function(e, t) {
            return "number" != typeof t || r[e] ? t : t + "px"
        }
    }, function(e, t, r) {
        e.exports = r(108)()
    }, function(e, t, r) {
        "use strict";
        var n = r(109);

        function i() {}
        e.exports = function() {
            function e(e, t, r, i, a, o) {
                if (o !== n) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return r.checkPropTypes = i, r.PropTypes = r, r
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return "string" == typeof e
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.invalidateScrollbarWidth = function() {
            n = !1
        };
        var n = !1;

        function i(e) {
            return !1 !== n ? n : (n = e && "undefined" != typeof document ? e.offsetWidth - e.realClientWidth : 0) || 0
        }
        t.default = i, t.getScrollbarWidth = i
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return !1
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.clientWidth,
                r = getComputedStyle(e),
                n = r.paddingLeft,
                i = r.paddingRight;
            return t - parseFloat(n) - parseFloat(i)
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.clientHeight,
                r = getComputedStyle(e),
                n = r.paddingTop,
                i = r.paddingBottom;
            return t - parseFloat(n) - parseFloat(i)
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.scrollbarSize = 100;
        t.containerStyleDefault = {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%"
        }, t.viewWrapperStyleDefault = {
            paddingRight: n,
            paddingBottom: n,
            width: "auto",
            minWidth: "100%",
            boxSizing: "border-box",
            verticalAlign: "top",
            display: "inline-block"
        }, t.viewWrappedStyleDefault = {
            position: "relative",
            display: "block",
            verticalAlign: "top",
            width: "100%",
            boxSizing: "border-box"
        }, t.containerStyleAutoHeight = {
            height: "auto"
        }, t.viewStyleDefault = {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "scroll",
            MsOverflowStyle: "scrollbar",
            WebkitOverflowScrolling: "touch",
            height: "auto",
            boxSizing: "content-box"
        }, t.viewStyleAutoHeight = {
            position: "relative",
            top: void 0,
            left: void 0,
            right: void 0,
            bottom: void 0
        }, t.viewStyleUniversalInitial = {
            overflow: "hidden",
            marginRight: 0,
            marginBottom: 0
        }, t.trackHorizontalStyleDefault = {
            position: "absolute",
            height: 6
        }, t.trackVerticalStyleDefault = {
            position: "absolute",
            width: 6
        }, t.thumbHorizontalStyleDefault = {
            position: "relative",
            display: "block",
            height: "100%"
        }, t.thumbVerticalStyleDefault = {
            position: "relative",
            display: "block",
            width: "100%"
        }, t.disableSelectStyle = {
            userSelect: "none"
        }, t.disableSelectStyleReset = {
            userSelect: ""
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.renderViewDefault = function(e) {
            return i.default.createElement("div", e)
        }, t.renderTrackHorizontalDefault = function(e) {
            var t = e.style,
                r = a(e, ["style"]),
                o = n({}, t, {
                    right: 2,
                    bottom: 2,
                    left: 2,
                    borderRadius: 3
                });
            return i.default.createElement("div", n({
                style: o
            }, r))
        }, t.renderTrackVerticalDefault = function(e) {
            var t = e.style,
                r = a(e, ["style"]),
                o = n({}, t, {
                    right: 2,
                    bottom: 2,
                    top: 2,
                    borderRadius: 3
                });
            return i.default.createElement("div", n({
                style: o
            }, r))
        }, t.renderThumbHorizontalDefault = function(e) {
            var t = e.style,
                r = a(e, ["style"]),
                o = n({}, t, {
                    cursor: "pointer",
                    borderRadius: "inherit",
                    backgroundColor: "rgba(0,0,0,.2)"
                });
            return i.default.createElement("div", n({
                style: o
            }, r))
        }, t.renderThumbVerticalDefault = function(e) {
            var t = e.style,
                r = a(e, ["style"]),
                o = n({}, t, {
                    cursor: "pointer",
                    borderRadius: "inherit",
                    backgroundColor: "rgba(0,0,0,.2)"
                });
            return i.default.createElement("div", n({
                style: o
            }, r))
        };
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(0));

        function a(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
    }, function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        "use strict";
        var n = r(147);

        function i() {}

        function a() {}
        a.resetWarningCache = i, e.exports = function() {
            function e(e, t, r, i, a, o) {
                if (o !== n) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: i
            };
            return r.PropTypes = r, r
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        e.exports = {
            lightchartgrid: "rgba(0,0,0,0.04)",
            darkchartgrid: "#191c31",
            lightchartmountainborder: "#999cac",
            darkchartmountainborder: "#fff",
            lightcandletextclosed: "rgba(0,0,0,0.16)",
            darkcandletextclosed: "rgba(127,131,151,0.3)",
            lightcandlebgclosed: "#d6d6d6",
            darkcandlebgclosed: "#303342",
            lightchartclosedcandle: "#d6d6d6",
            darkchartclosedcandle: "#303342",
            lightchartbg: "#fff",
            darkchartbg: "#101320",
            lightfloatlabelsbg: "rgba(127,131,151,0.88)",
            darkfloatlabelsbg: "#2a3052"
        }
    }, , function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i, a, o, s, c, l, u = r(37),
            h = r(11),
            d = r(24),
            p = r(25),
            f = r(26),
            m = r(27),
            y = r(28),
            b = r(29),
            g = r(30),
            v = r(31),
            w = r(51),
            S = r(32),
            k = r(0),
            x = r.n(k),
            C = r(22),
            O = r(1);

        function E(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function T(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function P(e, t, r) {
            return t && T(e.prototype, t), r && T(e, r), e
        }

        function _(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var D, j, A, N, I, z, L, M = (n = O.action.bound, a = _((i = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), E(this, "bottom", a, this), E(this, "isReadyToShow", o, this), E(this, "mainChartHeight", s, this), E(this, "top", c, this), E(this, "totalHeight", l, this), this.initial = function() {
                        r.stx.append("drawPanels", function() {
                            return r.updateChartHeight()
                        }), r.isReadyToShow = !0
                    }, this.updateChartMargin = function(e) {
                        r.context && r.stx && (r.stx.chart.yAxis.initialMarginBottom = e, r.stx.calculateYAxisMargins(r.stx.chart.panel.yAxis), r.stx.draw())
                    }, this.mainStore = t, Object(O.when)(function() {
                        return r.context
                    }, this.initial)
                }
                return P(e, [{
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }]), P(e, [{
                    key: "updateChartHeight",
                    value: function() {
                        var e = this;
                        this.mainChartHeight = this.stx.panels.chart.height, this.totalHeight = Object.keys(this.stx.panels).reduce(function(t, r) {
                            return t + e.stx.panels[r].height
                        }, 0);
                        var t = this.totalHeight > this.mainChartHeight ? 0 : 30,
                            r = this.mainStore.state.chartControlsWidgets ? 40 : 0;
                        this.top = this.mainChartHeight - t - 200, this.bottom = this.totalHeight - this.mainChartHeight + t + r
                    }
                }]), e
            }()).prototype, "bottom", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), o = _(i.prototype, "isReadyToShow", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), s = _(i.prototype, "mainChartHeight", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), c = _(i.prototype, "top", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), l = _(i.prototype, "totalHeight", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), _(i.prototype, "updateChartHeight", [n], Object.getOwnPropertyDescriptor(i.prototype, "updateChartHeight"), i.prototype), i),
            R = r(61),
            H = r(62),
            B = r(69),
            F = r(72),
            q = r(74),
            U = r(75),
            V = r(76);

        function W(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function Q(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function G(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var K, Y, X, J, Z, $ = (D = O.action.bound, G((j = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.onContextReady = function() {
                        r.stx.prepend("headsUpHR", r.update), r.stx.prepend("createXAxis", r.update)
                    }, W(this, "price", A, this), W(this, "open", N, this), W(this, "high", I, this), W(this, "low", z, this), W(this, "close", L, this), this.mainStore = t, Object(O.when)(function() {
                        return r.context
                    }, this.onContextReady)
                }
                return function(e, t, r) {
                    t && Q(e.prototype, t), r && Q(e, r)
                }(e, [{
                    key: "update",
                    value: function() {
                        if (this.visible) {
                            var e = this.stx.barFromPixel(this.stx.cx),
                                t = this.stx.chart.xaxis[e];
                            if (t) {
                                var r = t.data || {},
                                    n = r.Open,
                                    i = r.High,
                                    a = r.Low,
                                    o = r.Close;
                                this.open = n && !this.isTick ? n.toFixed(this.decimalPlaces) : null, this.high = i && !this.isTick ? i.toFixed(this.decimalPlaces) : null, this.low = a && !this.isTick ? a.toFixed(this.decimalPlaces) : null, this.close = o && !this.isTick ? o.toFixed(this.decimalPlaces) : null, this.price = o ? o.toFixed(this.decimalPlaces) : null
                            }
                        }
                    }
                }, {
                    key: "decimalPlaces",
                    get: function() {
                        return this.mainStore.chart.currentActiveSymbol.decimal_places
                    }
                }, {
                    key: "isTick",
                    get: function() {
                        return "tick" === this.mainStore.timeperiod.timeUnit
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "visible",
                    get: function() {
                        return !this.mainStore.chart.isMobile && this.mainStore.chartSetting.assetInformation
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }]), e
            }()).prototype, "decimalPlaces", [O.computed], Object.getOwnPropertyDescriptor(j.prototype, "decimalPlaces"), j.prototype), G(j.prototype, "isTick", [O.computed], Object.getOwnPropertyDescriptor(j.prototype, "isTick"), j.prototype), G(j.prototype, "update", [D], Object.getOwnPropertyDescriptor(j.prototype, "update"), j.prototype), A = G(j.prototype, "price", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = G(j.prototype, "open", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = G(j.prototype, "high", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = G(j.prototype, "low", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = G(j.prototype, "close", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j),
            ee = r(47),
            te = r(48);

        function re(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ne(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var ie, ae, oe, se, ce, le, ue, he, de, pe = (K = O.action.bound, Y = O.action.bound, X = O.action.bound, Z = ne((J = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(e, t, r, n) {
                        r && Object.defineProperty(e, t, {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                            writable: r.writable,
                            value: r.initializer ? r.initializer.call(n) : void 0
                        })
                    }(this, "animatedPrices", Z, this), this.animatedPriceStore = [], this.mainStore = t, Object(O.reaction)(function() {
                        return r.comparisonSymbols.length
                    }, this.syncAnimatedPricesWithComparisons), Object(O.reaction)(function() {
                        return r.comparisonSymbols.map(function(e) {
                            return e.price
                        })
                    }, this.updatePrices)
                }
                return function(e, t, r) {
                    t && re(e.prototype, t), r && re(e, r)
                }(e, [{
                    key: "syncAnimatedPricesWithComparisons",
                    value: function() {
                        var e = this.comparisonSymbols.length - this.animatedPrices.length;
                        if (e > 0)
                            for (; 0 != e--;) {
                                var t = new ee.a;
                                this.animatedPriceStore.push(t), this.animatedPrices = this.animatedPrices.concat([t.connect(te.a)])
                            } else if (e < 0)
                                for (; 0 != e++;) this.animatedPrices.pop(), this.animatedPriceStore.pop()
                    }
                }, {
                    key: "updatePrices",
                    value: function() {
                        var e = this;
                        this.comparisonSymbols.map(function(t, r) {
                            var n = t.price,
                                i = t.prevPrice;
                            e.animatedPriceStore[r].setPrice(n, i)
                        })
                    }
                }, {
                    key: "onDeleteItem",
                    value: function(e) {
                        this.mainStore.comparison.removeComparison(e)
                    }
                }, {
                    key: "comparisonSymbols",
                    get: function() {
                        return this.mainStore.comparison.comparisonSymbols
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }]), e
            }()).prototype, "animatedPrices", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), ne(J.prototype, "syncAnimatedPricesWithComparisons", [K], Object.getOwnPropertyDescriptor(J.prototype, "syncAnimatedPricesWithComparisons"), J.prototype), ne(J.prototype, "updatePrices", [Y], Object.getOwnPropertyDescriptor(J.prototype, "updatePrices"), J.prototype), ne(J.prototype, "onDeleteItem", [X], Object.getOwnPropertyDescriptor(J.prototype, "onDeleteItem"), J.prototype), J),
            fe = r(43),
            me = r(5),
            ye = r(9),
            be = r.n(ye);

        function ge(e) {
            return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ve(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function we(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Se(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var ke, xe, Ce, Oe, Ee, Te = (ie = O.action.bound, ae = O.action.bound, oe = O.action.bound, Se((se = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), ve(this, "top", ce, this), ve(this, "left", le, this), ve(this, "rows", ue, this), ve(this, "state", he, this), ve(this, "isArrowLeft", de, this), this.node = null, this.lastBar = {}, this.showChange = !1, this.showSeries = !0, this.showStudies = !0, this.hide = function() {
                        r.top = 0, r.left = -5e4
                    }, this.onContextReady = function() {
                        var e = r.stx.layout.crosshair;
                        r.state = "number" != typeof e ? 2 : e, r.setCrosshairState(r.state), r.stx.append("headsUpHR", r.renderCrosshairTooltip)
                    }, this.mainStore = t, Object(O.when)(function() {
                        return r.context
                    }, this.onContextReady)
                }
                return function(e, t, r) {
                    t && we(e.prototype, t), r && we(e, r)
                }(e, [{
                    key: "setFloatPriceLabelStyle",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.mainStore.chartSetting.theme;
                        2 === this.state ? (this.stx.setStyle("stx-float-price", "color", "transparent"), this.stx.setStyle("stx-float-price", "background-color", "transparent"), this.stx.controls.floatDate.style.color = "transparent", this.stx.controls.floatDate.style.backgroundColor = "transparent", this.stx.controls.crossX.style.height = "calc(100% - ".concat(this.stx.xaxisHeight, "px)")) : (this.stx.setStyle("stx-float-price", "color", "#fff"), this.stx.setStyle("stx-float-price", "background-color", be.a["".concat(e, "floatlabelsbg")]), this.stx.controls.floatDate.style.color = "#fff", this.stx.controls.floatDate.style.backgroundColor = be.a["".concat(e, "floatlabelsbg")], this.stx.controls.crossX.style.height = "100%")
                    }
                }, {
                    key: "toggleState",
                    value: function() {
                        var e = (this.state + 1) % 3;
                        this.setCrosshairState(e), this.mainStore.state.saveLayout()
                    }
                }, {
                    key: "setCrosshairState",
                    value: function(e) {
                        this.state = e, this.stx.layout.crosshair = e, this.stx.doDisplayCrosshairs()
                    }
                }, {
                    key: "renderCrosshairTooltip",
                    value: function() {
                        var e = this.stx.controls.floatDate.innerHTML;
                        if (e) {
                            var t = e.substring(0, 2);
                            this.stx.controls.floatDate.innerHTML = e.replace(e.substring(0, 2), e.substring(3, 5)).replace(e.substring(2, 5), "-".concat(t))
                        }
                        if (this.setFloatPriceLabelStyle(), 2 === this.state) {
                            var r = this.stx,
                                n = r.controls,
                                i = n.crossX,
                                a = n.crossY;
                            if (!(i && "none" === i.style.display || a && "none" === a.style.display)) {
                                var o = r.barFromPixel(r.cx),
                                    s = r.chart.dataSegment[o];
                                if (s) {
                                    var c, l = !0;
                                    if (void 0 !== s && s && s.DT && (c = !0, s.High && r.pixelFromPrice(s.High), s.Low && r.pixelFromPrice(s.Low), r.highLowBars[r.layout.chartType] || s.Close && (r.pixelFromPrice(s.Close) - 15, r.pixelFromPrice(s.Close) + 15)), !(CIQ.ChartEngine.insideChart && r.layout.crosshair && r.displayCrosshairs) || r.overXAxis || r.overYAxis || r.openDialog || r.activeDrawing || r.grabbingScreen || !c || !l) return this.hide(), void(this.lastBar = {});
                                    Object(me.n)(s, this.lastBar) && o !== r.chart.dataSegment.length - 1 || (this.updateRows(s), this.lastBar = s), this.updateTooltipPosition()
                                } else this.hide()
                            }
                        }
                    }
                }, {
                    key: "updateRows",
                    value: function(e) {
                        var t = this.stx,
                            r = {},
                            n = [],
                            i = t.chart.panel,
                            a = i.yAxis;
                        if (n.push({
                                member: "DT",
                                display: "DT",
                                panel: i,
                                yAxis: a
                            }), r.DT = r.Close = 1, this.showChange && CIQ.ChartEngine.isDailyInterval(t.layout.interval) && n.push({
                                member: "Change",
                                display: "Change",
                                panel: i,
                                yAxis: a
                            }), this.showOhl) {
                            for (var o = ["Open", "Close", "High", "Low"], s = 0; s < o.length; s++) {
                                var c = o[s];
                                n.push({
                                    member: c,
                                    display: c,
                                    panel: i,
                                    yAxis: a
                                })
                            }
                            r.Open = r.High = r.Low = 1
                        }
                        if (this.showSeries) {
                            var l = t.chart.seriesRenderers;
                            for (var u in l) {
                                var h = l[u],
                                    d = t.panels[h.params.panel],
                                    p = h.params.yAxis;
                                !p && h.params.shareYAxis && (p = d.yAxis);
                                for (var f = 0; f < h.seriesParams.length; f++) {
                                    var m = h.seriesParams[f];
                                    if (m.display === this.activeSymbol.symbol) {
                                        var y = this.activeSymbol.name;
                                        n.push({
                                            member: "Close",
                                            display: y,
                                            panel: d,
                                            yAxis: p
                                        }), r[y] = 1
                                    } else {
                                        var b = m.symbol,
                                            g = m.field;
                                        b ? g && b !== g && (b = CIQ.createObjectChainNames(b, g)[0]) : b = g;
                                        var v = m.display || m.symbol || m.field;
                                        !b || r[v] && void 0 !== m.symbol || (n.push({
                                            member: b,
                                            display: v,
                                            panel: d,
                                            yAxis: p
                                        }), r[v] = 1)
                                    }
                                }
                            }
                        }
                        if (this.showStudies) {
                            var w = t.layout.studies;
                            for (var S in w) {
                                var k = t.panels[w[S].panel],
                                    x = k.yAxis;
                                for (var C in w[S].outputMap) C && !r[C] && (n.push({
                                    member: C,
                                    display: C,
                                    panel: k,
                                    yAxis: x
                                }), r[C] = 1);
                                var O = "".concat(S, "_hist");
                                if (!r[O]) {
                                    n.push({
                                        member: O,
                                        display: O,
                                        panel: k,
                                        yAxis: x
                                    });
                                    var E = "".concat(S, "_hist1"),
                                        T = "".concat(S, "_hist2");
                                    n.push({
                                        member: E,
                                        display: E,
                                        panel: k,
                                        yAxis: x
                                    }), n.push({
                                        member: T,
                                        display: T,
                                        panel: k,
                                        yAxis: x
                                    }), r[O] = 1
                                }
                            }
                        }
                        for (var P = [], _ = 0; _ < n.length; _++) {
                            var D = n[_],
                                j = D.member,
                                A = D.display,
                                N = D.panel,
                                I = D.yAxis,
                                z = this.decimalPlaces;
                            I && (N !== N.chart.panel ? I.decimalPlaces || 0 === I.decimalPlaces ? z = I.decimalPlaces : (I.maxDecimalPlaces || 0 === I.maxDecimalPlaces) && (z = I.maxDecimalPlaces) : (z = Math.max(I.printDecimalPlaces, N.chart.decimalPlaces), (I.maxDecimalPlaces || 0 === I.maxDecimalPlaces) && (z = Math.min(z, I.maxDecimalPlaces))));
                            var L = null,
                                M = CIQ.existsInObjectChain(e, j);
                            M ? L = M.obj[M.member] : "Change" === j && (L = e.Close - e.iqPrevClose);
                            var R = A.replace(/^(Result )(.*)/, "$2");
                            if ((L || 0 === L) && ("DT" === j || "object" !== ge(L) || L.Close || 0 === L.Close)) {
                                var H = "";
                                if ((L.Close || 0 === L.Close) && (L = L.Close), L.constructor === Number) H = I ? I.originalPriceFormatter && I.originalPriceFormatter.func ? I.originalPriceFormatter.func(t, N, L, z) : I.priceFormatter && I.priceFormatter !== CIQ.Comparison.priceFormat ? I.priceFormatter(t, N, L, z) : t.formatYAxisPrice(L, N, z, I) : L.toFixed(z);
                                else if (L.constructor === Date) {
                                    var B = t.controls.floatDate;
                                    if ("DT" === j && B && B.innerHTML) {
                                        if (t.chart.xAxis.noDraw) continue;
                                        H = B.innerHTML
                                    } else H = CIQ.yyyymmdd(L), CIQ.ChartEngine.isDailyInterval(t.layout.interval) || (H += " ".concat(L.toTimeString().substr(0, 8)))
                                } else H = L;
                                P.push({
                                    name: R.toUpperCase(),
                                    value: H
                                })
                            }
                        }
                        this.rows = P
                    }
                }, {
                    key: "updateTooltipPosition",
                    value: function() {
                        this.left = CIQ.ChartEngine.crosshairX - this.stx.left, this.top = CIQ.ChartEngine.crosshairY - this.stx.top, this.isArrowLeft = this.left <= 315
                    }
                }, {
                    key: "activeSymbol",
                    get: function() {
                        return this.mainStore.chart.currentActiveSymbol
                    }
                }, {
                    key: "decimalPlaces",
                    get: function() {
                        return this.activeSymbol.decimal_places
                    }
                }, {
                    key: "showOhl",
                    get: function() {
                        return "second" !== this.stx.layout.timeUnit
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }]), e
            }()).prototype, "activeSymbol", [O.computed], Object.getOwnPropertyDescriptor(se.prototype, "activeSymbol"), se.prototype), Se(se.prototype, "decimalPlaces", [O.computed], Object.getOwnPropertyDescriptor(se.prototype, "decimalPlaces"), se.prototype), ce = Se(se.prototype, "top", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), le = Se(se.prototype, "left", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return -5e4
                }
            }), ue = Se(se.prototype, "rows", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), he = Se(se.prototype, "state", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }), de = Se(se.prototype, "isArrowLeft", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), Se(se.prototype, "setFloatPriceLabelStyle", [ie], Object.getOwnPropertyDescriptor(se.prototype, "setFloatPriceLabelStyle"), se.prototype), Se(se.prototype, "toggleState", [ae], Object.getOwnPropertyDescriptor(se.prototype, "toggleState"), se.prototype), Se(se.prototype, "renderCrosshairTooltip", [oe], Object.getOwnPropertyDescriptor(se.prototype, "renderCrosshairTooltip"), se.prototype), se),
            Pe = r(7),
            _e = r(8),
            De = r(2);

        function je(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Ae(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var Ne, Ie, ze, Le, Me = (ke = O.action.bound, xe = O.action.bound, Ce = O.action.bound, Ae((Oe = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(e, t, r, n) {
                        r && Object.defineProperty(e, t, {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                            writable: r.writable,
                            value: r.initializer ? r.initializer.call(n) : void 0
                        })
                    }(this, "isLoadingPNG", Ee, this), this.onContextReady = function() {
                        r.screenshotArea = r.context.topNode.querySelector(".ciq-chart")
                    }, this.mainStore = t, this.menu = new Pe.a(t, {
                        route: "download"
                    }), Object(O.when)(function() {
                        return r.context
                    }, this.onContextReady), this.ShareMenu = this.menu.connect(_e.a)
                }
                return function(e, t, r) {
                    t && je(e.prototype, t), r && je(e, r)
                }(e, [{
                    key: "createNewTab",
                    value: function() {
                        return navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) ? window.open() : null
                    }
                }, {
                    key: "downloadPNG",
                    value: function() {
                        var e = this;
                        this.isLoadingPNG = !0;
                        var t = this.createNewTab();
                        r.e(15).then(r.t.bind(null, 184, 7)).then(function(r) {
                            CIQ.appendClassName(e.screenshotArea, "ciq-screenshot"), r.default(e.screenshotArea).then(function(r) {
                                return e._onCanvasReady(r, t)
                            })
                        }), Object(De.d)(De.b.ChartControl, De.a.Download, "Download PNG")
                    }
                }, {
                    key: "_onCanvasReady",
                    value: function(e, t) {
                        var r = e.toDataURL("image/png");
                        Object(me.g)("".concat((new Date).toUTCString(), ".png"), r, "image/png;", t), this.isLoadingPNG = !1, CIQ.unappendClassName(this.screenshotArea, "ciq-screenshot")
                    }
                }, {
                    key: "downloadCSV",
                    value: function() {
                        var e = this,
                            t = "tick" === this.timeUnit,
                            r = ["Date,Time,".concat(t ? this.marketDisplayName : "Open,High,Low,Close")];
                        this.stx.masterData.forEach(function(n) {
                            var i = n.DT,
                                a = n.Open,
                                o = n.High,
                                s = n.Low,
                                c = n.Close,
                                l = i.getFullYear(),
                                u = i.getMonth() + 1,
                                h = i.getDate(),
                                d = i.getHours(),
                                p = i.getMinutes(),
                                f = i.getSeconds(),
                                m = f > 9 ? ":".concat(f) : ":0".concat(f),
                                y = "".concat(l, "-").concat(u > 9 ? u : "0".concat(u), "-").concat(h > 9 ? h : "0".concat(h)),
                                b = "".concat(d > 9 ? d : "0".concat(d), ":").concat(p > 9 ? p : "0".concat(p)).concat(t ? m : "");
                            t && c && r.push("".concat(y, ",").concat(b, ",").concat(c)), !t && a && o && s && c && r.push([y, b, a.toFixed(e.decimalPlaces), o.toFixed(e.decimalPlaces), s.toFixed(e.decimalPlaces), c.toFixed(e.decimalPlaces)].join(","))
                        }), Object(me.g)("".concat(this.marketDisplayName, " (").concat(this.timeperiodDisplay, ").csv"), r.join("\n"), "text/csv;charset=utf-8;", this.createNewTab()), Object(De.d)(De.b.ChartControl, De.a.Download, "Download CSV")
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.mainStore.chart.context
                    }
                }, {
                    key: "stx",
                    get: function() {
                        return this.context.stx
                    }
                }, {
                    key: "timeUnit",
                    get: function() {
                        return this.mainStore.timeperiod.timeUnit
                    }
                }, {
                    key: "timeperiodDisplay",
                    get: function() {
                        return this.mainStore.timeperiod.display
                    }
                }, {
                    key: "marketDisplayName",
                    get: function() {
                        return this.mainStore.chart.currentActiveSymbol.market_display_name
                    }
                }, {
                    key: "decimalPlaces",
                    get: function() {
                        return this.mainStore.chart.currentActiveSymbol.decimal_places
                    }
                }]), e
            }()).prototype, "timeUnit", [O.computed], Object.getOwnPropertyDescriptor(Oe.prototype, "timeUnit"), Oe.prototype), Ae(Oe.prototype, "timeperiodDisplay", [O.computed], Object.getOwnPropertyDescriptor(Oe.prototype, "timeperiodDisplay"), Oe.prototype), Ae(Oe.prototype, "marketDisplayName", [O.computed], Object.getOwnPropertyDescriptor(Oe.prototype, "marketDisplayName"), Oe.prototype), Ae(Oe.prototype, "decimalPlaces", [O.computed], Object.getOwnPropertyDescriptor(Oe.prototype, "decimalPlaces"), Oe.prototype), Ee = Ae(Oe.prototype, "isLoadingPNG", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Ae(Oe.prototype, "downloadPNG", [ke], Object.getOwnPropertyDescriptor(Oe.prototype, "downloadPNG"), Oe.prototype), Ae(Oe.prototype, "_onCanvasReady", [xe], Object.getOwnPropertyDescriptor(Oe.prototype, "_onCanvasReady"), Oe.prototype), Ae(Oe.prototype, "downloadCSV", [Ce], Object.getOwnPropertyDescriptor(Oe.prototype, "downloadCSV"), Oe.prototype), Oe),
            Re = r(78),
            He = r(79),
            Be = r(46);

        function Fe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function qe(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var Ue, Ve, We, Qe, Ge, Ke = (Ne = O.action.bound, Ie = O.action.bound, Le = qe((ze = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e),
                function(e, t, r, n) {
                    r && Object.defineProperty(e, t, {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(this, "stx", Le, this), this.onContextReady = function() {
                    r.stx = r.mainStore.chart.context.stx
                }, this.mainStore = t, Object(O.when)(function() {
                    return r.mainStore.chart.context
                }, this.onContextReady)
            }
            return function(e, t, r) {
                t && Fe(e.prototype, t), r && Fe(e, r)
            }(e, [{
                key: "zoomIn",
                value: function() {
                    Object(De.d)(De.b.ChartControl, De.a.ChartSize, "zoom In"), this.stx && this.stx.zoomIn()
                }
            }, {
                key: "zoomOut",
                value: function() {
                    Object(De.d)(De.b.ChartControl, De.a.ChartSize, "zoom Out"), this.stx && this.stx.zoomOut()
                }
            }]), e
        }()).prototype, "stx", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), qe(ze.prototype, "zoomIn", [Ne], Object.getOwnPropertyDescriptor(ze.prototype, "zoomIn"), ze.prototype), qe(ze.prototype, "zoomOut", [Ie], Object.getOwnPropertyDescriptor(ze.prototype, "zoomOut"), ze.prototype), ze);

        function Ye(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Xe(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var Je, Ze, $e, et, tt, rt = [],
            nt = (Ue = O.action.bound, Ve = O.action.bound, We = O.action.bound, Qe = O.action.bound, Xe((Ge = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.mainStore = t
                }
                return function(e, t, r) {
                    t && Ye(e.prototype, t), r && Ye(e, r)
                }(e, [{
                    key: "handleRouting",
                    value: function() {
                        var e = this;
                        window.addEventListener("hashchange", function() {
                            "" === window.history.state.urlPath.replace("#", "") && e.closeAll()
                        }, !1)
                    }
                }, {
                    key: "updateRoute",
                    value: function(e, t) {
                        var r = this.mainStore.chart.enableRouting;
                        r && t && e ? (window.history.replaceState({
                            urlPath: "#"
                        }, "", "#"), window.history.pushState({
                            urlPath: "#".concat(e)
                        }, "", "#".concat(e))) : r && !t && e && window.history.replaceState({
                            urlPath: "#"
                        }, "", "#")
                    }
                }, {
                    key: "registerDialog",
                    value: function(e) {
                        rt.push(e)
                    }
                }, {
                    key: "closeAll",
                    value: function() {
                        rt.forEach(function(e) {
                            return e.setOpen(!1)
                        })
                    }
                }]), e
            }()).prototype, "handleRouting", [Ue], Object.getOwnPropertyDescriptor(Ge.prototype, "handleRouting"), Ge.prototype), Xe(Ge.prototype, "updateRoute", [Ve], Object.getOwnPropertyDescriptor(Ge.prototype, "updateRoute"), Ge.prototype), Xe(Ge.prototype, "registerDialog", [We], Object.getOwnPropertyDescriptor(Ge.prototype, "registerDialog"), Ge.prototype), Xe(Ge.prototype, "closeAll", [Qe], Object.getOwnPropertyDescriptor(Ge.prototype, "closeAll"), Ge.prototype), Ge);

        function it(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function at(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ot(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var st, ct, lt, ut, ht, dt, pt, ft, mt, yt, bt, gt = (Je = O.action.bound, $e = ot((Ze = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), it(this, "top", $e, this), it(this, "left", et, this), it(this, "show", tt, this), this.onContextReady = function() {
                    r.mainStore.state.isAnimationEnabled && r.stx.append("draw", r.updateSpot)
                }, this.mainStore = t, Object(O.when)(function() {
                    return r.context
                }, this.onContextReady)
            }
            return function(e, t, r) {
                t && at(e.prototype, t), r && at(e, r)
            }(e, [{
                key: "updateSpot",
                value: function() {
                    if (this.state.endEpoch) this.show = !1;
                    else {
                        var e = this.stx.chart,
                            t = this.stx.layout,
                            r = this.stx.mainSeriesRenderer,
                            n = !0;
                        if (e.dataSet && e.dataSet.length && r) {
                            var i = e.panel,
                                a = this.stx.currentQuote();
                            if (!a) return;
                            var o = a.Close,
                                s = this.stx.pixelFromTick(a.tick, e) + (e.lastTickOffset || 0),
                                c = this.stx.pixelFromPrice(o, i);
                            e.yAxis.left > s && e.yAxis.top <= c && e.yAxis.bottom >= c ? (this.top = +c.toFixed(this.pip), Math.abs(this.left - s) >= 1 && (this.left = Math.round(s))) : n = !1
                        }
                        this.show = n && !this.state.endEpoch && "candle" !== t.chartType && "colored_bar" !== t.chartType && "hollow_candle" !== t.chartType
                    }
                }
            }, {
                key: "pip",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol.decimal_places
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "state",
                get: function() {
                    return this.mainStore.state
                }
            }]), e
        }()).prototype, "top", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), et = ot(Ze.prototype, "left", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), tt = ot(Ze.prototype, "show", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), ot(Ze.prototype, "pip", [O.computed], Object.getOwnPropertyDescriptor(Ze.prototype, "pip"), Ze.prototype), ot(Ze.prototype, "updateSpot", [Je], Object.getOwnPropertyDescriptor(Ze.prototype, "updateSpot"), Ze.prototype), Ze);

        function vt(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function wt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function St(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var kt, xt, Ct, Ot, Et, Tt, Pt, _t, Dt, jt, At, Nt, It, zt, Lt, Mt, Rt, Ht, Bt, Ft, qt, Ut, Vt, Wt, Qt, Gt, Kt, Yt, Xt = (st = O.action.bound, ct = O.action.bound, lt = O.action.bound, ht = St((ut = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), vt(this, "isDrawing", ht, this), vt(this, "top", dt, this), vt(this, "left", pt, this), vt(this, "display", ft, this), this.onContextReady = function() {
                    r.stx.append("mousemoveinner", r.onMouseMove), r.stx.container.addEventListener("touchend", r.onTouchEnd)
                }, vt(this, "onMouseMove", mt, this), vt(this, "onTouchEnd", yt, this), vt(this, "updateDisplay", bt, this), this.mainStore = t, Object(O.when)(function() {
                    return r.context
                }, this.onContextReady)
            }
            return function(e, t, r) {
                t && wt(e.prototype, t), r && wt(e, r)
            }(e, [{
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }]), e
        }()).prototype, "isDrawing", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), dt = St(ut.prototype, "top", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), pt = St(ut.prototype, "left", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), ft = St(ut.prototype, "display", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), mt = St(ut.prototype, "onMouseMove", [st], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function(t, r) {
                    e.isDrawing = e.stx.currentVectorParameters.vectorType, e.isDrawing ? (e.display = "block", e.left = t - e.stx.left, e.top = r - e.stx.top - 16) : e.display = "none"
                }
            }
        }), yt = St(ut.prototype, "onTouchEnd", [ct], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    setTimeout(e.updateDisplay, 500)
                }
            }
        }), bt = St(ut.prototype, "updateDisplay", [lt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                var e = this;
                return function() {
                    e.isDrawing = e.stx.currentVectorParameters.vectorType, e.isDrawing || (e.display = "none")
                }
            }
        }), ut);

        function Jt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function Zt(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function $t(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function er(e, t, r) {
            return t && $t(e.prototype, t), r && $t(e, r), e
        }

        function tr(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var rr, nr, ir, ar, or, sr, cr = (kt = O.action.bound, xt = O.action.bound, Ct = O.action.bound, Ot = O.action.bound, Et = O.action.bound, Tt = O.action.bound, _t = tr((Pt = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), Zt(this, "granularity", _t, this), Zt(this, "chartType", Dt, this), Zt(this, "startEpoch", jt, this), Zt(this, "startEpochMargin", At, this), Zt(this, "endEpoch", Nt, this), Zt(this, "endEpochMargin", It, this), Zt(this, "symbol", zt, this), Zt(this, "isConnectionOpened", Lt, this), Zt(this, "isChartReady", Mt, this), Zt(this, "chartStatusListener", Rt, this), Zt(this, "settings", Ht, this), Zt(this, "showLastDigitStats", Bt, this), Zt(this, "scrollToEpoch", Ft, this), Zt(this, "onExportLayout", qt, this), Zt(this, "clearChart", Ut, this), Zt(this, "importedLayout", Vt, this), Zt(this, "isOnPagination", Wt, this), Zt(this, "paginationEndEpoch", Qt, this), Zt(this, "isChartClosed", Gt, this), Zt(this, "isStaticChart", Kt, this), this.chartControlsWidgets = void 0, Zt(this, "onContextReady", Yt, this), this.scrollChartToLeft = function() {
                        if (r.mainStore.chart.feed.offMasterDataUpdate(r.scrollChartToLeft), r.stxx.chart.entryTick = null, r.scrollToEpoch && !r.startEpoch) {
                            var e = r.stxx.chart.dataSet.find(function(e) {
                                return e.DT.valueOf() === CIQ.strToDateTime(Object(me.k)(r.scrollToEpoch)).valueOf()
                            });
                            e || (e = {
                                DT: CIQ.strToDateTime(Object(me.k)(r.scrollToEpoch)),
                                Close: null
                            }, r.stxx.updateChartData(e, null, {
                                fillGaps: !0
                            }), r.stxx.createDataSet()), r.stxx.maxMasterDataSize = 0;
                            var t = r.stxx.tickFromDate(e.DT),
                                n = new CIQ.EaseMachine(Math.easeOutCubic, 1e3),
                                i = r.stxx.chart.dataSegment.length;
                            n.run(function(e) {
                                e = Math.ceil(e);
                                var a = r.stxx.chart.dataSegment.length - e;
                                a <= 2 || e === i ? (n.stop(), r.stxx.chart.entryTick = t, r.stxx.chart.lockScroll = !0, r.stxx.chart.isScrollLocationChanged = !0) : r.stxx.chart.scroll = a
                            }, 0, i), r.stxx.draw()
                        } else r.startEpoch ? (r.stxx.chart.lockScroll = !0, r.stxx.chart.isScrollLocationChanged = !0) : (r.stxx.chart.lockScroll = !1, r.stxx.chart.isScrollLocationChanged = !1, r.stxx.home(), r.stxx.draw())
                    }, this.mainStore = t, this.chartStore = t.chart, Object(O.when)(function() {
                        return r.context
                    }, this.onContextReady)
                }
                return er(e, [{
                    key: "comparisonStore",
                    get: function() {
                        return this.mainStore.comparison
                    }
                }, {
                    key: "stxx",
                    get: function() {
                        return this.chartStore.stxx
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.chartStore.context
                    }
                }, {
                    key: "chartTypeStore",
                    get: function() {
                        return this.mainStore.chartType
                    }
                }, {
                    key: "timeperiodStore",
                    get: function() {
                        return this.mainStore.timeperiod
                    }
                }, {
                    key: "loader",
                    get: function() {
                        return this.mainStore.loader
                    }
                }]), er(e, [{
                    key: "updateProps",
                    value: function(e) {
                        var t = e.chartControlsWidgets,
                            r = e.chartStatusListener,
                            n = e.chartType,
                            i = e.clearChart,
                            a = e.endEpoch,
                            o = e.id,
                            s = e.importedLayout,
                            c = e.isAnimationEnabled,
                            l = void 0 === c || c,
                            u = e.isConnectionOpened,
                            h = e.isStaticChart,
                            d = e.granularity,
                            p = e.margin,
                            f = void 0 === p ? 0 : p,
                            m = e.onExportLayout,
                            y = e.removeAllComparisons,
                            b = e.scrollToEpoch,
                            g = e.scrollToEpochOffset,
                            v = void 0 === g ? 0 : g,
                            w = e.settings,
                            S = e.showLastDigitStats,
                            k = void 0 !== S && S,
                            x = e.startEpoch,
                            C = e.symbol,
                            O = e.zoom,
                            E = !1,
                            T = !1;
                        this.chartId = o, this.settings = w, this.isConnectionOpened = u, this.chartStatusListener = r, this.isStaticChart = h, this.symbol !== C && (this.symbol = C, T = !0, this.mainStore.chart && this.mainStore.chart.feed && this.mainStore.chart.feed.onMasterDataUpdate(this.scrollChartToLeft)), this.rootNode = this.mainStore.chart.rootNode, this.isAnimationEnabled = l, this.showLastDigitStats = k, this.scrollToEpochOffset = v, m !== this.onExportLayout && (this.onExportLayout = m, this.exportLayout()), i !== this.clearChart && (this.clearChart = i, this.cleanChart()), JSON.stringify(s) !== JSON.stringify(this.importedLayout) && (this.importedLayout = s, this.importLayout()), void 0 !== d && this.granularity !== d && (this.context && "second" === Object(me.b)(d).timeUnit && (this.mainStore.chartType.isCandle || n && this.mainStore.chartType.isTypeCandle(n)) && (n = "mountain", this.chartTypeStore.onChartTypeChanged && this.chartTypeStore.onChartTypeChanged(n)), E = !0, this.granularity = null === d ? void 0 : d), this.chartType !== n && this.context && (this.chartType = n, this.chartTypeStore.setType(n)), this.margin !== f && (this.margin = f), this.startEpoch === x && this.endEpoch === a || (this.startEpoch = x, this.endEpoch = a, h && this.stxx && this.granularity === this.mainStore.chart.granularity ? this.mainStore.chart.newChart() : this.mainStore.chart.feed && (this.importedLayout || E || this.scrollToEpoch || this.mainStore.chart.feed.onRangeChanged(!0))), y && this.comparisonStore.removeAll(), this.scrollToEpoch !== b && this.context && (this.scrollToEpoch = b, T || E ? this.mainStore.chart.feed.onMasterDataUpdate(this.scrollChartToLeft) : this.scrollChartToLeft()), this.zoom !== O && (this.zoom = +O, this.context && this.stxx && this.zoom && this.zoom), t !== this.chartControlsWidgets && (this.chartControlsWidgets = t, this.stxx && this.mainStore.chart.updateHeight()), this.stxx && (this.stxx.chart.panel.yAxis.drawCurrentPriceLabel = !this.endEpoch, this.stxx.preferences.currentPriceLine = !this.endEpoch, this.stxx.isAutoScale = this.settings && !1 !== w.isAutoScale, this.stxx.draw())
                    }
                }, {
                    key: "setChartClosed",
                    value: function(e) {
                        this.isChartClosed = e
                    }
                }, {
                    key: "setChartTheme",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.isChartClosed;
                        if (this.stxx.clearStyles(), this.stxx.setStyle("stx_grid", "color", be.a["".concat(e, "chartgrid")]), this.rootNode) {
                            if (this.rootNode.querySelector(".chartContainer").style.backgroundColor = be.a["".concat(e, "chartbg")], t) {
                                var r = "rgba(129, 133, 152, 0.35)";
                                this.stxx.setStyle("stx_mountain_chart", "borderTopColor", r), this.stxx.setStyle("stx_mountain_chart", "background-color", "transparent"), this.stxx.setStyle("stx_mountain_chart", "color", "transparent"), this.stxx.setStyle("stx_line_chart", "color", r), this.stxx.setStyle("stx_line_up", "color", r), this.stxx.setStyle("stx_line_down", "color", r), this.stxx.setStyle("stx_line_even", "color", r), this.stxx.setStyle("stx_bar_up", "color", r), this.stxx.setStyle("stx_bar_down", "color", r), this.stxx.setStyle("stx_bar_even", "color", r), this.stxx.setStyle("stx_candle_up", "color", be.a["".concat(e, "chartclosedcandle")]), this.stxx.setStyle("stx_candle_down", "color", be.a["".concat(e, "chartclosedcandle")]), this.stxx.setStyle("stx_candle_even", "color", be.a["".concat(e, "chartclosedcandle")]), this.stxx.setStyle("stx_candle_shadow_up", "color", r), this.stxx.setStyle("stx_candle_shadow_down", "color", r), this.stxx.setStyle("stx_candle_shadow_even", "color", r), this.stxx.setStyle("stx_hollow_candle_up", "color", be.a["".concat(e, "chartclosedcandle")]), this.stxx.setStyle("stx_hollow_candle_down", "color", be.a["".concat(e, "chartclosedcandle")]), this.stxx.setStyle("stx_hollow_candle_even", "color", be.a["".concat(e, "chartclosedcandle")]), this.stxx.setStyle("stx_baseline_up", "color", r), this.stxx.setStyle("stx_baseline_down", "color", r), this.stxx.setStyle("stx_baseline_even", "color", r), this.stxx.setStyle("stx_kagi_up", "color", r), this.stxx.setStyle("stx_kagi_down", "color", r), this.stxx.setStyle("stx_pandf_up", "color", r), this.stxx.setStyle("stx_pandf_down", "color", r), this.stxx.setStyle("stx_current_hr_down", "color", be.a["".concat(e, "candletextclosed")]), this.stxx.setStyle("stx_current_hr_up", "color", be.a["".concat(e, "candletextclosed")]), this.stxx.setStyle("stx_current_hr_down", "background-color", be.a["".concat(e, "candlebgclosed")]), this.stxx.setStyle("stx_current_hr_up", "background-color", be.a["".concat(e, "candlebgclosed")])
                            } else this.stxx.setStyle("stx_mountain_chart", "borderTopColor", be.a["".concat(e, "chartmountainborder")]), this.stxx.setStyle("stx_line_chart", "color", be.a["".concat(e, "chartmountainborder")]);
                            this.stxx.draw()
                        }
                    }
                }, {
                    key: "setOnPagination",
                    value: function(e) {
                        var t = e.end;
                        this.isOnPagination = !this.isOnPagination, this.paginationEndEpoch = this.isOnPagination ? t : null
                    }
                }, {
                    key: "setChartIsReady",
                    value: function(e) {
                        this.isChartReady !== e && (this.isChartReady = e, this.chartStatusListener && "function" == typeof this.chartStatusListener && this.chartStatusListener(e))
                    }
                }, {
                    key: "saveLayout",
                    value: function() {
                        if (this.chartId) {
                            var e = this.stxx.exportLayout(!0),
                                t = JSON.stringify(e);
                            CIQ.localStorageSetItem("layout-".concat(this.chartId), t)
                        }
                    }
                }, {
                    key: "restoreLayout",
                    value: function() {
                        var e = this,
                            t = Object(me.e)("layout-".concat(this.chartId));
                        if (!t || !t.symbols.length) return !1;
                        if (void 0 !== this.symbol && this.symbol !== t.symbols[0].symbol) {
                            var r = this.chartStore.activeSymbols.getSymbolObj(this.symbol);
                            t.symbols = [{
                                symbol: this.symbol,
                                symbolObject: r
                            }]
                        }
                        var n = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = t.symbols[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                var c = o.value,
                                    l = c.symbol,
                                    u = this.chartStore.activeSymbols.getSymbolObj(l);
                                c.symbolObject = u, c.parameters && (c.parameters.display = u.name, c.parameters.fillGaps = !0, c.parameters.gapDisplayStyle = !0)
                            }
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        if (void 0 !== this.granularity) {
                            var h = Object(me.b)(this.granularity);
                            t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))), n.forEach(function(t) {
                                        Jt(e, t, r[t])
                                    })
                                }
                                return e
                            }({}, t, h)
                        } else {
                            var d = t,
                                p = d.timeUnit,
                                f = d.interval,
                                m = d.periodicity,
                                y = p ? f : m;
                            this.chartStore.granularity = Object(me.a)(y, p || f)
                        }
                        return (this.startEpoch || this.endEpoch) && (delete t.span, delete t.range), void 0 !== this.chartType && (t.chartType = this.chartType), this.stxx.importLayout(t, {
                            managePeriodicity: !0,
                            cb: function() {
                                t.tension && (e.stxx.chart.tension = t.tension), e.restoreDrawings(e.stxx, e.stxx.chart.symbol), e.chartStore.loader && (e.chartStore.loader.hide(), e.setChartIsReady(!0), e.stxx.home()), e.chartStore.setMainSeriesDisplay(e.stxx.chart.symbolObject.name)
                            }
                        }), this.chartStore.updateCurrentActiveSymbol(), !0
                    }
                }, {
                    key: "saveDrawings",
                    value: function() {
                        if (this.chartId) {
                            var e = this.stxx.exportDrawings(),
                                t = this.stxx.chart.symbol;
                            0 === e.length ? CIQ.localStorage.removeItem("".concat(t, "-").concat(this.chartId)) : CIQ.localStorageSetItem("".concat(t, "-").concat(this.chartId), JSON.stringify(e))
                        }
                    }
                }, {
                    key: "restoreDrawings",
                    value: function() {
                        var e = Object(me.e)("".concat(this.stxx.chart.symbol, "-").concat(this.chartId));
                        e && (this.stxx.importDrawings(e), this.stxx.draw())
                    }
                }, {
                    key: "cleanChart",
                    value: function() {
                        if (this.clearChart) {
                            for (var e in this.stxx.chart.series) this.stxx.removeSeries(e);
                            for (var t in this.stxx.layout.studies) {
                                var r = this.stxx.layout.studies[t];
                                CIQ.Studies.removeStudy(this.stxx, r)
                            }
                            this.stxx.clearDrawings(), this.mainStore.crosshair.setCrosshairState(2)
                        }
                    }
                }, {
                    key: "importLayout",
                    value: function() {
                        var e = this;
                        this.stxx && this.importedLayout && Object.keys(this.importedLayout).length && (this.loader.show(), this.loader.setState("chart-data"), 0 === Object.keys(this.mainStore.chart.feed._activeStreams).length && (this.stxx.layout.interval = void 0), this.startEpoch = this.endEpoch = null, this.stxx.importLayout(this.importedLayout, {
                            managePeriodicity: !0,
                            preserveTicksAndCandleWidth: !0,
                            cb: function() {
                                e.importedLayout && e.importedLayout.series && e.importedLayout.series.forEach(function(t) {
                                    var r = e.chartStore.activeSymbols.getSymbolObj(t);
                                    e.mainStore.comparison.onSelectItem(r)
                                });
                                var t = e.importedLayout,
                                    r = t.timeUnit,
                                    n = t.interval,
                                    i = t.periodicity,
                                    a = r ? n : i,
                                    o = Object(me.a)(a, r || n);
                                if (e.chartStore.granularity = o, e.timeperiodStore.onGranularityChange && e.timeperiodStore.onGranularityChange(o), e.chartTypeStore.onChartTypeChanged) {
                                    var s = e.chartTypeStore.getChartTypeFromLayout(e.importedLayout);
                                    e.chartTypeStore.setChartTypeFromLayout(e.importedLayout), e.chartTypeStore.onChartTypeChanged(s)
                                }
                                e.stxx.changeOccurred("layout"), e.mainStore.studies.updateActiveStudies(), setTimeout(function() {
                                    e.importedLayout && e.importedLayout.drawings && (e.stxx.importDrawings(e.importedLayout.drawings), e.stxx.draw()), e.importedLayout && e.importedLayout.isDone && (e.importedLayout.previousMaxTicks && (e.stxx.setMaxTicks(e.importedLayout.previousMaxTicks), e.stxx.home(), delete e.importLayout.previousMaxTicks), e.importedLayout.isDone(), e.loader.hide())
                                }, 500)
                            }
                        }), this.mainStore.crosshair.setCrosshairState(this.importedLayout.crosshair), this.stxx.chart.lockScroll = !1, this.stxx.chart.entryTick = void 0, this.stxx.maxMasterDataSize = 5e3)
                    }
                }, {
                    key: "exportLayout",
                    value: function() {
                        if (this.onExportLayout && this.stxx) {
                            var e = this.stxx.exportLayout();
                            for (var t in e.drawings = this.stxx.exportDrawings(), e.series = [], this.stxx.chart.series) e.series.push(t);
                            e.previousMaxTicks = this.stxx.chart.maxTicks, this.onExportLayout(e)
                        }
                    }
                }, {
                    key: "scrollListener",
                    value: function(e) {
                        e.grab && this.stxx.chart.lockScroll && (this.stxx.chart.lockScroll = !1)
                    }
                }]), e
            }()).prototype, "granularity", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Dt = tr(Pt.prototype, "chartType", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), jt = tr(Pt.prototype, "startEpoch", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), At = tr(Pt.prototype, "startEpochMargin", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Nt = tr(Pt.prototype, "endEpoch", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), It = tr(Pt.prototype, "endEpochMargin", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), zt = tr(Pt.prototype, "symbol", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Lt = tr(Pt.prototype, "isConnectionOpened", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Mt = tr(Pt.prototype, "isChartReady", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Rt = tr(Pt.prototype, "chartStatusListener", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ht = tr(Pt.prototype, "settings", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Bt = tr(Pt.prototype, "showLastDigitStats", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ft = tr(Pt.prototype, "scrollToEpoch", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), qt = tr(Pt.prototype, "onExportLayout", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ut = tr(Pt.prototype, "clearChart", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Vt = tr(Pt.prototype, "importedLayout", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Wt = tr(Pt.prototype, "isOnPagination", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Qt = tr(Pt.prototype, "paginationEndEpoch", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Gt = tr(Pt.prototype, "isChartClosed", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Kt = tr(Pt.prototype, "isStaticChart", [O.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Yt = tr(Pt.prototype, "onContextReady", [kt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    var e = this;
                    return function() {
                        e.stxx.addEventListener("layout", e.saveLayout.bind(e)), e.stxx.addEventListener("symbolChange", e.saveLayout.bind(e)), e.stxx.addEventListener("drawing", e.saveDrawings.bind(e)), e.stxx.addEventListener("move", e.scrollListener.bind(e)), e.chartStore.feed.onStartPagination(e.setOnPagination.bind(e)), e.chartStore.feed.onPagination(e.setOnPagination.bind(e)), e.granularity = e.chartStore.granularity
                    }
                }
            }), tr(Pt.prototype, "updateProps", [xt], Object.getOwnPropertyDescriptor(Pt.prototype, "updateProps"), Pt.prototype), tr(Pt.prototype, "setChartClosed", [Ct], Object.getOwnPropertyDescriptor(Pt.prototype, "setChartClosed"), Pt.prototype), tr(Pt.prototype, "setChartTheme", [Ot], Object.getOwnPropertyDescriptor(Pt.prototype, "setChartTheme"), Pt.prototype), tr(Pt.prototype, "setOnPagination", [Et], Object.getOwnPropertyDescriptor(Pt.prototype, "setOnPagination"), Pt.prototype), tr(Pt.prototype, "setChartIsReady", [Tt], Object.getOwnPropertyDescriptor(Pt.prototype, "setChartIsReady"), Pt.prototype), Pt),
            lr = r(80),
            ur = r(18),
            hr = r(44);

        function dr(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }

        function pr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function fr(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var mr, yr, br, gr, vr, wr, Sr = (rr = O.action.bound, nr = O.action.bound, ir = O.action.bound, fr((ar = function() {
            function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), dr(this, "tableData", or, this), dr(this, "isTick", sr, this), this.mainStore = t, this.dialog = new hr.a(t), this.Dialog = this.dialog.connect(ur.a), Object(O.reaction)(function() {
                    return r.dialog.open
                }, this.loadTableData)
            }
            return function(e, t, r) {
                t && pr(e.prototype, t), r && pr(e, r)
            }(e, [{
                key: "setOpen",
                value: function(e) {
                    return this.dialog.setOpen(e)
                }
            }, {
                key: "loadTableData",
                value: function() {
                    var e = this;
                    this.open ? (this.stx.masterData.forEach(function(t) {
                        return e.updateTableData(t)
                    }), this.mainStore.chart.feed.onMasterDataUpdate(this.updateTableData)) : (this.mainStore.chart.feed.offMasterDataUpdate(this.updateTableData), this.tableData = [])
                }
            }, {
                key: "updateTableData",
                value: function(e) {
                    var t = e.DT,
                        r = e.Open,
                        n = e.High,
                        i = e.Low,
                        a = e.Close;
                    this.isTick = "tick" === this.mainStore.timeperiod.timeUnit;
                    var o = t.getFullYear(),
                        s = t.getMonth() + 1,
                        c = t.getDate(),
                        l = t.getHours(),
                        u = t.getMinutes(),
                        h = t.getSeconds(),
                        d = "".concat(o, "-").concat(s > 9 ? s : "0".concat(s), "-").concat(c > 9 ? c : "0".concat(c)),
                        p = "".concat(l > 9 ? l : "0".concat(l), ":").concat(u > 9 ? u : "0".concat(u), ":").concat(h > 9 ? h : "0".concat(h)),
                        f = "".concat(d, " ").concat(p),
                        m = this.tableData.length > 0 ? this.tableData[0] : {},
                        y = a - m.Close || 0,
                        b = "";
                    0 !== Math.sign(y) && (b = 1 === Math.sign(y) ? "up" : "down"), this.isTick && a ? this.tableData.unshift({
                        Date: f,
                        Close: a,
                        Change: Math.abs(y).toFixed(this.decimalPlaces),
                        Status: b
                    }) : !this.isTick && r && n && i && a && (m.Date === f ? (m.Close = a.toFixed(this.decimalPlaces), m.Change = Math.abs(a - this.tableData[1].Close).toFixed(this.decimalPlaces)) : this.tableData.unshift({
                        Date: f,
                        Open: r.toFixed(this.decimalPlaces),
                        High: n.toFixed(this.decimalPlaces),
                        Low: i.toFixed(this.decimalPlaces),
                        Close: a.toFixed(this.decimalPlaces),
                        Change: Math.abs(y).toFixed(this.decimalPlaces),
                        Status: b
                    })), this.tableData = this.tableData.slice(0)
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "open",
                get: function() {
                    return this.dialog.open
                }
            }, {
                key: "symbol",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol ? this.mainStore.chart.currentActiveSymbol : {}
                }
            }, {
                key: "decimalPlaces",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol.decimal_places
                }
            }]), e
        }()).prototype, "open", [O.computed], Object.getOwnPropertyDescriptor(ar.prototype, "open"), ar.prototype), fr(ar.prototype, "setOpen", [rr], Object.getOwnPropertyDescriptor(ar.prototype, "setOpen"), ar.prototype), or = fr(ar.prototype, "tableData", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }), sr = fr(ar.prototype, "isTick", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }), fr(ar.prototype, "symbol", [O.computed], Object.getOwnPropertyDescriptor(ar.prototype, "symbol"), ar.prototype), fr(ar.prototype, "decimalPlaces", [O.computed], Object.getOwnPropertyDescriptor(ar.prototype, "decimalPlaces"), ar.prototype), fr(ar.prototype, "loadTableData", [nr], Object.getOwnPropertyDescriptor(ar.prototype, "loadTableData"), ar.prototype), fr(ar.prototype, "updateTableData", [ir], Object.getOwnPropertyDescriptor(ar.prototype, "updateTableData"), ar.prototype), ar);

        function kr(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function xr(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function Cr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Or(e, t, r, n, i) {
            var a = {};
            return Object.keys(n).forEach(function(e) {
                a[e] = n[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
        }
        var Er = (mr = O.action.bound, yr = O.action.bound, br = O.action.bound, gr = O.action.bound, wr = Or((vr = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.count = 1e3, this.digits = [], this.latestData = [], this.symbolChanged = !1,
                    function(e, t, r, n) {
                        r && Object.defineProperty(e, t, {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                            writable: r.writable,
                            value: r.initializer ? r.initializer.call(n) : void 0
                        })
                    }(this, "bars", wr, this), this.mainStore = t
            }
            return function(e, t, r) {
                t && Cr(e.prototype, t), r && Cr(e, r)
            }(e, [{
                key: "changeSymbol",
                value: function() {
                    this.symbolChanged = !0
                }
            }, {
                key: "showLastDigitStats",
                value: function() {
                    var e = function(e) {
                        return function() {
                            var t = this,
                                r = arguments;
                            return new Promise(function(n, i) {
                                var a = e.apply(t, r);

                                function o(e) {
                                    xr(a, n, i, o, s, "next", e)
                                }

                                function s(e) {
                                    xr(a, n, i, o, s, "throw", e)
                                }
                                o(void 0)
                            })
                        }
                    }(regeneratorRuntime.mark(function e() {
                        var t, r, n = this;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.digits = [], this.bars = [], this.latestData = [], this.mainStore.chart && this.mainStore.chart.feed && !this.mainStore.state.showLastDigitStats && this.mainStore.chart.feed.offMasterDataUpdate(this.onMasterDataUpdate), !this.mainStore.state.showLastDigitStats) {
                                        e.next = 17;
                                        break
                                    }
                                    for (t = 0; t < 10; t++) this.digits.push(0), this.bars.push({
                                        height: 0,
                                        cName: ""
                                    });
                                    if (!(this.stx.masterData && this.stx.masterData.length >= this.count)) {
                                        e.next = 10;
                                        break
                                    }
                                    this.latestData = this.stx.masterData.slice(-this.count).map(function(e) {
                                        return e.Close.toFixed(n.decimalPlaces)
                                    }), e.next = 14;
                                    break;
                                case 10:
                                    return e.next = 12, this.api.getTickHistory({
                                        symbol: this.mainStore.chart.currentActiveSymbol.symbol,
                                        count: this.count
                                    });
                                case 12:
                                    r = e.sent, this.latestData = r && r.history ? r.history.prices : [];
                                case 14:
                                    this.latestData.forEach(function(e) {
                                        var t = (+e).toFixed(n.decimalPlaces).slice(-1);
                                        n.digits[t]++
                                    }), this.updateBars(), this.mainStore.chart.feed && this.mainStore.chart.feed.onMasterDataUpdate(this.onMasterDataUpdate);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onMasterDataUpdate",
                value: function(e) {
                    var t = e.Close;
                    if (this.symbolChanged) this.showLastDigitStats(), this.symbolChanged = !1;
                    else {
                        var r = (+this.latestData.shift()).toFixed(this.decimalPlaces).slice(-1),
                            n = (+t).toFixed(this.decimalPlaces),
                            i = n.slice(-1);
                        this.latestData.push(+n), this.digits[i]++, this.digits[r]--, this.updateBars()
                    }
                }
            }, {
                key: "updateBars",
                value: function() {
                    var e = this,
                        t = Math.min.apply(Math, kr(this.digits)),
                        r = Math.max.apply(Math, kr(this.digits));
                    this.digits.forEach(function(n, i) {
                        e.bars[i].height = 100 * n / e.count, e.bars[i].cName = n === t ? "min" : n === r ? "max" : ""
                    }), this.bars = this.bars.slice(0)
                }
            }, {
                key: "context",
                get: function() {
                    return this.mainStore.chart.context
                }
            }, {
                key: "stx",
                get: function() {
                    return this.context.stx
                }
            }, {
                key: "api",
                get: function() {
                    return this.mainStore.chart.api
                }
            }, {
                key: "decimalPlaces",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol.decimal_places
                }
            }, {
                key: "isVisible",
                get: function() {
                    return this.mainStore.state.showLastDigitStats
                }
            }, {
                key: "marketDisplayName",
                get: function() {
                    return this.mainStore.chart.currentActiveSymbol ? this.mainStore.chart.currentActiveSymbol.name : ""
                }
            }]), e
        }()).prototype, "bars", [O.observable], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }), Or(vr.prototype, "decimalPlaces", [O.computed], Object.getOwnPropertyDescriptor(vr.prototype, "decimalPlaces"), vr.prototype), Or(vr.prototype, "isVisible", [O.computed], Object.getOwnPropertyDescriptor(vr.prototype, "isVisible"), vr.prototype), Or(vr.prototype, "marketDisplayName", [O.computed], Object.getOwnPropertyDescriptor(vr.prototype, "marketDisplayName"), vr.prototype), Or(vr.prototype, "changeSymbol", [mr], Object.getOwnPropertyDescriptor(vr.prototype, "changeSymbol"), vr.prototype), Or(vr.prototype, "showLastDigitStats", [yr], Object.getOwnPropertyDescriptor(vr.prototype, "showLastDigitStats"), vr.prototype), Or(vr.prototype, "onMasterDataUpdate", [br], Object.getOwnPropertyDescriptor(vr.prototype, "onMasterDataUpdate"), vr.prototype), Or(vr.prototype, "updateBars", [gr], Object.getOwnPropertyDescriptor(vr.prototype, "updateBars"), vr.prototype), vr);
        var Tr = function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.notifier = new lr.a, this.favorites = Be.a.getInstance(), this.chart = new H.a(this), this.state = new cr(this), this.chartType = new B.a(this), this.studies = new F.a(this), this.comparison = new q.a(this), this.drawTools = new U.a(this), this.chartTitle = new V.a(this), this.timeperiod = new R.a(this), this.assetInformation = new $(this), this.comparisonList = new pe(this), this.view = new fe.a(this), this.crosshair = new Te(this), this.share = new Me(this), this.chartSetting = new Re.a(this), this.loader = new He.a, this.chartSize = new Ke(this), this.routing = new nt(this), this.currentSpot = new gt(this), this.drawingCursor = new Xt(this), this.chartTable = new Sr(this), this.lastDigitStats = new Er(this), this.bottomWidgetsContainer = new M(this)
            },
            Pr = r(81);

        function _r(e) {
            return (_r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Dr(e, t) {
            if (null == e) return {};
            var r, n, i = function(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
            return i
        }

        function jr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Ar(e, t) {
            return !t || "object" !== _r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Nr(e) {
            return (Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ir(e, t) {
            return (Ir = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var zr = function(e) {
                function t() {
                    var e, r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r = Ar(this, (e = Nr(t)).call.apply(e, [this].concat(i)))).mainStore = new Tr, r
                }
                return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Ir(e, t)
                    }(t, x.a.Component),
                    function(e, t, r) {
                        t && jr(e.prototype, t), r && jr(e, r)
                    }(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                r = Dr(e, ["children"]);
                            return x.a.createElement(C.Provider, this.mainStore, x.a.createElement(Pr.a, r, t))
                        }
                    }, {
                        key: "chart",
                        get: function() {
                            return this.mainStore.chart
                        }
                    }, {
                        key: "stx",
                        get: function() {
                            return this.chart.stxx
                        }
                    }]), t
            }(),
            Lr = r(33),
            Mr = r(34),
            Rr = r(35),
            Hr = r(38),
            Br = r(36);

        function Fr(e) {
            r.p = e
        }
        r.d(t, "setSmartChartsPublicPath", function() {
            return Fr
        }), r.d(t, "AssetInformation", function() {
            return Rr.a
        }), r.d(t, "Barrier", function() {
            return u.a
        }), r.d(t, "ChartSetting", function() {
            return w.a
        }), r.d(t, "ChartSize", function() {
            return g.a
        }), r.d(t, "ChartTitle", function() {
            return Mr.a
        }), r.d(t, "ChartTypes", function() {
            return d.a
        }), r.d(t, "Comparison", function() {
            return f.a
        }), r.d(t, "ComparisonList", function() {
            return Lr.a
        }), r.d(t, "createObjectFromLocalStorage", function() {
            return me.e
        }), r.d(t, "CrosshairToggle", function() {
            return y.a
        }), r.d(t, "DrawTools", function() {
            return v.a
        }), r.d(t, "Marker", function() {
            return Hr.a
        }), r.d(t, "PendingPromise", function() {
            return h.a
        }), r.d(t, "Share", function() {
            return S.a
        }), r.d(t, "SmartChart", function() {
            return zr
        }), r.d(t, "StudyLegend", function() {
            return p.a
        }), r.d(t, "Timeperiod", function() {
            return b.a
        }), r.d(t, "CurrentSpot", function() {
            return Br.a
        }), r.d(t, "Views", function() {
            return m.a
        }), r.d(t, "logEvent", function() {
            return De.d
        }), r.d(t, "LogCategories", function() {
            return De.b
        }), r.d(t, "LogActions", function() {
            return De.a
        });
        t.default = {
            AssetInformation: Rr.a,
            Barrier: u.a,
            ChartSetting: w.a,
            ChartSize: g.a,
            ChartTitle: Mr.a,
            ChartTypes: d.a,
            Comparison: f.a,
            ComparisonList: Lr.a,
            createObjectFromLocalStorage: me.e,
            CrosshairToggle: y.a,
            DrawTools: v.a,
            Marker: Hr.a,
            PendingPromise: h.a,
            setSmartChartsPublicPath: Fr,
            Share: S.a,
            SmartChart: zr,
            StudyLegend: p.a,
            Timeperiod: b.a,
            CurrentSpot: Br.a,
            Views: m.a,
            logEvent: De.d,
            LogCategories: De.b,
            LogActions: De.a
        }
    }]).default
});
//# sourceMappingURL=smartcharts.js.map


/***/ })

}]);