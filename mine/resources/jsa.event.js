(function() {
    "use strict";
    ! function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n;
        return b = 1, e = {}, d = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        }, c = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            touch: "click",
            orientationchange: "resize"
        }, f = /complete|loaded|interactive/, a.fn.on = function(b, c, d) {
            return null == c || "function" === a.toType(c) ? this.bind(b, c) : this.delegate(c, b, d)
        }, a.fn.off = function(b, c, d) {
            return null == c || "function" === a.toType(c) ? this.unbind(b, c) : this.undelegate(c, b, d)
        }, a.fn.ready = function(b) {
            return f.test(document.readyState) ? b.call(this, a) : a.fn.addEvent(document, "DOMContentLoaded", function() {
                return b.call(this, a)
            })
        }, a.fn.bind = function(a, b) {
            return this.each(function() {
                return m(this, a, b)
            })
        }, a.fn.unbind = function(a, b) {
            return this.each(function() {
                return n(this, a, b)
            })
        }, a.fn.delegate = function(b, c, d) {
            return this.each(function(e, f) {
                return m(f, c, d, b, function(c) {
                    return function(d) {
                        var e, h;
                        return h = a(d.target).closest(b, f).get(0), h ? (e = a.extend(g(d), {
                            currentTarget: h,
                            liveFired: f
                        }), c.apply(h, [e].concat([].slice.call(arguments, 1)))) : void 0
                    }
                })
            })
        }, a.fn.undelegate = function(a, b, c) {
            return this.each(function() {
                return n(this, b, c, a)
            })
        }, a.fn.trigger = function(b, c, d) {
            return "string" === a.toType(b) && (b = j(b, c)), null != d && (b.originalEvent = d), this.each(function() {
                return this.dispatchEvent(b)
            })
        }, a.fn.addEvent = function(a, b, c) {
            return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        }, a.fn.removeEvent = function(a, b, c) {
            return a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = null
        }, j = function(a, b) {
            var c;
            return c = document.createEvent("Events"), c.initEvent(a, !0, !0, null, null, null, null, null, null, null, null, null, null, null, null), b && (c.quoData = b), c
        }, m = function(b, c, d, f, g) {
            var j, k, m, n;
            return c = i(c), m = l(b), k = e[m] || (e[m] = []), j = g && g(d, c), n = {
                event: c,
                callback: d,
                selector: f,
                proxy: h(j, d, b),
                delegate: j,
                index: k.length
            }, k.push(n), a.fn.addEvent(b, n.event, n.proxy)
        }, n = function(b, c, d, f) {
            var g;
            return c = i(c), g = l(b), k(g, c, d, f).forEach(function(c) {
                return delete e[g][c.index], a.fn.removeEvent(b, c.event, c.proxy)
            })
        }, l = function(a) {
            return a._id || (a._id = b++)
        }, i = function(b) {
            var d;
            return d = ("function" == typeof a.isMobile ? a.isMobile() : void 0) ? b : c[b], d || b
        }, h = function(a, b, c) {
            var d;
            return b = a || b, d = function(a) {
                var d;
                return d = b.apply(c, [a].concat(a.data)), d === !1 && a.preventDefault(), d
            }
        }, k = function(a, b, c, d) {
            return (e[a] || []).filter(function(a) {
                return !(!a || b && a.event !== b || c && a.callback !== c || d && a.selector !== d)
            })
        }, g = function(b) {
            var c;
            return c = a.extend({
                originalEvent: b
            }, b), a.each(d, function(a, d) {
                return c[a] = function() {
                    return this[d] = function() {
                        return !0
                    }, b[a].apply(b, arguments)
                }, c[d] = function() {
                    return !1
                }
            }), c
        }
    }(Quo)
}).call(this);
