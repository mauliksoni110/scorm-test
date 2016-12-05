! function() {
    "use strict";
    var t = "undefined" == typeof window ? global : window;
    if ("function" != typeof t.require) {
        var e = {},
            n = {},
            i = {},
            r = {}.hasOwnProperty,
            s = /^\.\.?(\/|$)/,
            o = function(t, e) {
                for (var n, i = [], r = (s.test(e) ? t + "/" + e : e).split("/"), o = 0, a = r.length; o < a; o++) n = r[o], ".." === n ? i.pop() : "." !== n && "" !== n && i.push(n);
                return i.join("/")
            },
            a = function(t) {
                return t.split("/").slice(0, -1).join("/")
            },
            u = function(e) {
                return function(n) {
                    var i = o(a(e), n);
                    return t.require(i, e)
                }
            },
            l = function(t, e) {
                var i = null;
                i = v && v.createHot(t);
                var r = {
                    id: t,
                    exports: {},
                    hot: i
                };
                return n[t] = r, e(r.exports, u(t), r), r.exports
            },
            c = function(t) {
                return i[t] ? c(i[t]) : t
            },
            h = function(t, e) {
                return c(o(a(t), e))
            },
            p = function(t, i) {
                null == i && (i = "/");
                var s = c(t);
                if (r.call(n, s)) return n[s].exports;
                if (r.call(e, s)) return l(s, e[s]);
                throw new Error("Cannot find module '" + t + "' from '" + i + "'")
            };
        p.alias = function(t, e) {
            i[e] = t
        };
        var f = /\.[^.\/]+$/,
            d = /\/index(\.[^\/]+)?$/,
            g = function(t) {
                if (f.test(t)) {
                    var e = t.replace(f, "");
                    r.call(i, e) && i[e].replace(f, "") !== e + "/index" || (i[e] = t)
                }
                if (d.test(t)) {
                    var n = t.replace(d, "");
                    r.call(i, n) || (i[n] = t)
                }
            };
        p.register = p.define = function(t, i) {
            if ("object" == typeof t)
                for (var s in t) r.call(t, s) && p.register(s, t[s]);
            else e[t] = i, delete n[t], g(t)
        }, p.list = function() {
            var t = [];
            for (var n in e) r.call(e, n) && t.push(n);
            return t
        };
        var v = t._hmr && new t._hmr(h, p, e, n);
        p._cache = n, p.hmr = v && v.wrap, p.brunch = !0, t.require = p
    }
}(),
function() {
    function t(t) {
        function e(e, n, i, r, s, o) {
            for (; s >= 0 && s < o; s += t) {
                var a = r ? r[s] : s;
                i = n(i, e[a], a, e)
            }
            return i
        }
        return function(n, i, r, s) {
            i = x(i, s, 4);
            var o = !j(n) && y.keys(n),
                a = (o || n).length,
                u = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = n[o ? o[u] : u], u += t), e(n, i, r, o, u, a)
        }
    }

    function e(t) {
        return function(e, n, i) {
            n = w(n, i);
            for (var r = _(e), s = t > 0 ? 0 : r - 1; s >= 0 && s < r; s += t)
                if (n(e[s], s, e)) return s;
            return -1
        }
    }

    function n(t, e, n) {
        return function(i, r, s) {
            var o = 0,
                a = _(i);
            if ("number" == typeof s) t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
            else if (n && s && a) return s = n(i, r), i[s] === r ? s : -1;
            if (r !== r) return s = e(c.call(i, o, a), y.isNaN), s >= 0 ? s + o : -1;
            for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t)
                if (i[s] === r) return s;
            return -1
        }
    }

    function i(t, e) {
        var n = C.length,
            i = t.constructor,
            r = y.isFunction(i) && i.prototype || a,
            s = "constructor";
        for (y.has(t, s) && !y.contains(e, s) && e.push(s); n--;) s = C[n], s in t && t[s] !== r[s] && !y.contains(e, s) && e.push(s)
    }
    var r = this,
        s = r._,
        o = Array.prototype,
        a = Object.prototype,
        u = Function.prototype,
        l = o.push,
        c = o.slice,
        h = a.toString,
        p = a.hasOwnProperty,
        f = Array.isArray,
        d = Object.keys,
        g = u.bind,
        v = Object.create,
        m = function() {},
        y = function(t) {
            return t instanceof y ? t : this instanceof y ? void(this._wrapped = t) : new y(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
    var x = function(t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    };
                case 4:
                    return function(n, i, r, s) {
                        return t.call(e, n, i, r, s)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        w = function(t, e, n) {
            return null == t ? y.identity : y.isFunction(t) ? x(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t)
        };
    y.iteratee = function(t, e) {
        return w(t, e, 1 / 0)
    };
    var b = function(t, e) {
            return function(n) {
                var i = arguments.length;
                if (i < 2 || null == n) return n;
                for (var r = 1; r < i; r++)
                    for (var s = arguments[r], o = t(s), a = o.length, u = 0; u < a; u++) {
                        var l = o[u];
                        e && void 0 !== n[l] || (n[l] = s[l])
                    }
                return n
            }
        },
        S = function(t) {
            if (!y.isObject(t)) return {};
            if (v) return v(t);
            m.prototype = t;
            var e = new m;
            return m.prototype = null, e
        },
        k = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        E = Math.pow(2, 53) - 1,
        _ = k("length"),
        j = function(t) {
            var e = _(t);
            return "number" == typeof e && e >= 0 && e <= E
        };
    y.each = y.forEach = function(t, e, n) {
        e = x(e, n);
        var i, r;
        if (j(t))
            for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
        else {
            var s = y.keys(t);
            for (i = 0, r = s.length; i < r; i++) e(t[s[i]], s[i], t)
        }
        return t
    }, y.map = y.collect = function(t, e, n) {
        e = w(e, n);
        for (var i = !j(t) && y.keys(t), r = (i || t).length, s = Array(r), o = 0; o < r; o++) {
            var a = i ? i[o] : o;
            s[o] = e(t[a], a, t)
        }
        return s
    }, y.reduce = y.foldl = y.inject = t(1), y.reduceRight = y.foldr = t(-1), y.find = y.detect = function(t, e, n) {
        var i;
        if (i = j(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n), void 0 !== i && i !== -1) return t[i]
    }, y.filter = y.select = function(t, e, n) {
        var i = [];
        return e = w(e, n), y.each(t, function(t, n, r) {
            e(t, n, r) && i.push(t)
        }), i
    }, y.reject = function(t, e, n) {
        return y.filter(t, y.negate(w(e)), n)
    }, y.every = y.all = function(t, e, n) {
        e = w(e, n);
        for (var i = !j(t) && y.keys(t), r = (i || t).length, s = 0; s < r; s++) {
            var o = i ? i[s] : s;
            if (!e(t[o], o, t)) return !1
        }
        return !0
    }, y.some = y.any = function(t, e, n) {
        e = w(e, n);
        for (var i = !j(t) && y.keys(t), r = (i || t).length, s = 0; s < r; s++) {
            var o = i ? i[s] : s;
            if (e(t[o], o, t)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(t, e, n, i) {
        return j(t) || (t = y.values(t)), ("number" != typeof n || i) && (n = 0), y.indexOf(t, e, n) >= 0
    }, y.invoke = function(t, e) {
        var n = c.call(arguments, 2),
            i = y.isFunction(e);
        return y.map(t, function(t) {
            var r = i ? e : t[e];
            return null == r ? r : r.apply(t, n)
        })
    }, y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    }, y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    }, y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    }, y.max = function(t, e, n) {
        var i, r, s = -(1 / 0),
            o = -(1 / 0);
        if (null == e && null != t) {
            t = j(t) ? t : y.values(t);
            for (var a = 0, u = t.length; a < u; a++) i = t[a], i > s && (s = i)
        } else e = w(e, n), y.each(t, function(t, n, i) {
            r = e(t, n, i), (r > o || r === -(1 / 0) && s === -(1 / 0)) && (s = t, o = r)
        });
        return s
    }, y.min = function(t, e, n) {
        var i, r, s = 1 / 0,
            o = 1 / 0;
        if (null == e && null != t) {
            t = j(t) ? t : y.values(t);
            for (var a = 0, u = t.length; a < u; a++) i = t[a], i < s && (s = i)
        } else e = w(e, n), y.each(t, function(t, n, i) {
            r = e(t, n, i), (r < o || r === 1 / 0 && s === 1 / 0) && (s = t, o = r)
        });
        return s
    }, y.shuffle = function(t) {
        for (var e, n = j(t) ? t : y.values(t), i = n.length, r = Array(i), s = 0; s < i; s++) e = y.random(0, s), e !== s && (r[s] = r[e]), r[e] = n[s];
        return r
    }, y.sample = function(t, e, n) {
        return null == e || n ? (j(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    }, y.sortBy = function(t, e, n) {
        return e = w(e, n), y.pluck(y.map(t, function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
                i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (n < i || void 0 === i) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var P = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = w(n, i), y.each(e, function(i, s) {
                var o = n(i, s, e);
                t(r, i, o)
            }), r
        }
    };
    y.groupBy = P(function(t, e, n) {
        y.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), y.indexBy = P(function(t, e, n) {
        t[n] = e
    }), y.countBy = P(function(t, e, n) {
        y.has(t, n) ? t[n]++ : t[n] = 1
    }), y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : j(t) ? y.map(t, y.identity) : y.values(t) : []
    }, y.size = function(t) {
        return null == t ? 0 : j(t) ? t.length : y.keys(t).length
    }, y.partition = function(t, e, n) {
        e = w(e, n);
        var i = [],
            r = [];
        return y.each(t, function(t, n, s) {
            (e(t, n, s) ? i : r).push(t)
        }), [i, r]
    }, y.first = y.head = y.take = function(t, e, n) {
        if (null != t) return null == e || n ? t[0] : y.initial(t, t.length - e)
    }, y.initial = function(t, e, n) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, y.last = function(t, e, n) {
        if (null != t) return null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e))
    }, y.rest = y.tail = y.drop = function(t, e, n) {
        return c.call(t, null == e || n ? 1 : e)
    }, y.compact = function(t) {
        return y.filter(t, y.identity)
    };
    var T = function(t, e, n, i) {
        for (var r = [], s = 0, o = i || 0, a = _(t); o < a; o++) {
            var u = t[o];
            if (j(u) && (y.isArray(u) || y.isArguments(u))) {
                e || (u = T(u, e, n));
                var l = 0,
                    c = u.length;
                for (r.length += c; l < c;) r[s++] = u[l++]
            } else n || (r[s++] = u)
        }
        return r
    };
    y.flatten = function(t, e) {
        return T(t, e, !1)
    }, y.without = function(t) {
        return y.difference(t, c.call(arguments, 1))
    }, y.uniq = y.unique = function(t, e, n, i) {
        y.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = w(n, i));
        for (var r = [], s = [], o = 0, a = _(t); o < a; o++) {
            var u = t[o],
                l = n ? n(u, o, t) : u;
            e ? (o && s === l || r.push(u), s = l) : n ? y.contains(s, l) || (s.push(l), r.push(u)) : y.contains(r, u) || r.push(u)
        }
        return r
    }, y.union = function() {
        return y.uniq(T(arguments, !0, !0))
    }, y.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, r = _(t); i < r; i++) {
            var s = t[i];
            if (!y.contains(e, s)) {
                for (var o = 1; o < n && y.contains(arguments[o], s); o++);
                o === n && e.push(s)
            }
        }
        return e
    }, y.difference = function(t) {
        var e = T(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(t) {
        for (var e = t && y.max(t, _).length || 0, n = Array(e), i = 0; i < e; i++) n[i] = y.pluck(t, i);
        return n
    }, y.object = function(t, e) {
        for (var n = {}, i = 0, r = _(t); i < r; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }, y.findIndex = e(1), y.findLastIndex = e(-1), y.sortedIndex = function(t, e, n, i) {
        n = w(n, i, 1);
        for (var r = n(e), s = 0, o = _(t); s < o;) {
            var a = Math.floor((s + o) / 2);
            n(t[a]) < r ? s = a + 1 : o = a
        }
        return s
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(t, e, n) {
        null == e && (e = t || 0, t = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), s = 0; s < i; s++, t += n) r[s] = t;
        return r
    };
    var M = function(t, e, n, i, r) {
        if (!(i instanceof e)) return t.apply(n, r);
        var s = S(t.prototype),
            o = t.apply(s, r);
        return y.isObject(o) ? o : s
    };
    y.bind = function(t, e) {
        if (g && t.bind === g) return g.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2),
            i = function() {
                return M(t, i, e, this, n.concat(c.call(arguments)))
            };
        return i
    }, y.partial = function(t) {
        var e = c.call(arguments, 1),
            n = function() {
                for (var i = 0, r = e.length, s = Array(r), o = 0; o < r; o++) s[o] = e[o] === y ? arguments[i++] : e[o];
                for (; i < arguments.length;) s.push(arguments[i++]);
                return M(t, n, this, this, s)
            };
        return n
    }, y.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (i <= 1) throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++) n = arguments[e], t[n] = y.bind(t[n], t);
        return t
    }, y.memoize = function(t, e) {
        var n = function(i) {
            var r = n.cache,
                s = "" + (e ? e.apply(this, arguments) : i);
            return y.has(r, s) || (r[s] = t.apply(this, arguments)), r[s]
        };
        return n.cache = {}, n
    }, y.delay = function(t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(t, e, n) {
        var i, r, s, o = null,
            a = 0;
        n || (n = {});
        var u = function() {
            a = n.leading === !1 ? 0 : y.now(), o = null, s = t.apply(i, r), o || (i = r = null)
        };
        return function() {
            var l = y.now();
            a || n.leading !== !1 || (a = l);
            var c = e - (l - a);
            return i = this, r = arguments, c <= 0 || c > e ? (o && (clearTimeout(o), o = null), a = l, s = t.apply(i, r), o || (i = r = null)) : o || n.trailing === !1 || (o = setTimeout(u, c)), s
        }
    }, y.debounce = function(t, e, n) {
        var i, r, s, o, a, u = function() {
            var l = y.now() - o;
            l < e && l >= 0 ? i = setTimeout(u, e - l) : (i = null, n || (a = t.apply(s, r), i || (s = r = null)))
        };
        return function() {
            s = this, r = arguments, o = y.now();
            var l = n && !i;
            return i || (i = setTimeout(u, e)), l && (a = t.apply(s, r), s = r = null), a
        }
    }, y.wrap = function(t, e) {
        return y.partial(e, t)
    }, y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }, y.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
            return i
        }
    }, y.after = function(t, e) {
        return function() {
            if (--t < 1) return e.apply(this, arguments)
        }
    }, y.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
        }
    }, y.once = y.partial(y.before, 2);
    var A = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t)) return [];
        if (d) return d(t);
        var e = [];
        for (var n in t) y.has(t, n) && e.push(n);
        return A && i(t, e), e
    }, y.allKeys = function(t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return A && i(t, e), e
    }, y.values = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
        return i
    }, y.mapObject = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), s = r.length, o = {}, a = 0; a < s; a++) i = r[a], o[i] = e(t[i], i, t);
        return o
    }, y.pairs = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = [e[r], t[e[r]]];
        return i
    }, y.invert = function(t) {
        for (var e = {}, n = y.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
        return e
    }, y.functions = y.methods = function(t) {
        var e = [];
        for (var n in t) y.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, y.extend = b(y.allKeys), y.extendOwn = y.assign = b(y.keys), y.findKey = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), s = 0, o = r.length; s < o; s++)
            if (i = r[s], e(t[i], i, t)) return i
    }, y.pick = function(t, e, n) {
        var i, r, s = {},
            o = t;
        if (null == o) return s;
        y.isFunction(e) ? (r = y.allKeys(o), i = x(e, n)) : (r = T(arguments, !1, !1, 1), i = function(t, e, n) {
            return e in n
        }, o = Object(o));
        for (var a = 0, u = r.length; a < u; a++) {
            var l = r[a],
                c = o[l];
            i(c, l, o) && (s[l] = c)
        }
        return s
    }, y.omit = function(t, e, n) {
        if (y.isFunction(e)) e = y.negate(e);
        else {
            var i = y.map(T(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(i, e)
            }
        }
        return y.pick(t, e, n)
    }, y.defaults = b(y.allKeys, !0), y.create = function(t, e) {
        var n = S(t);
        return e && y.extendOwn(n, e), n
    }, y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
    }, y.tap = function(t, e) {
        return e(t), t
    }, y.isMatch = function(t, e) {
        var n = y.keys(e),
            i = n.length;
        if (null == t) return !i;
        for (var r = Object(t), s = 0; s < i; s++) {
            var o = n[s];
            if (e[o] !== r[o] || !(o in r)) return !1
        }
        return !0
    };
    var O = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
        var r = h.call(t);
        if (r !== h.call(e)) return !1;
        switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        var s = "[object Array]" === r;
        if (!s) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(y.isFunction(o) && o instanceof o && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
        }
        n = n || [], i = i || [];
        for (var u = n.length; u--;)
            if (n[u] === t) return i[u] === e;
        if (n.push(t), i.push(e), s) {
            if (u = t.length, u !== e.length) return !1;
            for (; u--;)
                if (!O(t[u], e[u], n, i)) return !1
        } else {
            var l, c = y.keys(t);
            if (u = c.length, y.keys(e).length !== u) return !1;
            for (; u--;)
                if (l = c[u], !y.has(e, l) || !O(t[l], e[l], n, i)) return !1
        }
        return n.pop(), i.pop(), !0
    };
    y.isEqual = function(t, e) {
        return O(t, e)
    }, y.isEmpty = function(t) {
        return null == t || (j(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length)
    }, y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, y.isArray = f || function(t) {
        return "[object Array]" === h.call(t)
    }, y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return h.call(e) === "[object " + t + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }), y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    }, y.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === h.call(t)
    }, y.isNull = function(t) {
        return null === t
    }, y.isUndefined = function(t) {
        return void 0 === t
    }, y.has = function(t, e) {
        return null != t && p.call(t, e)
    }, y.noConflict = function() {
        return r._ = s, this
    }, y.identity = function(t) {
        return t
    }, y.constant = function(t) {
        return function() {
            return t
        }
    }, y.noop = function() {}, y.property = k, y.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e]
        }
    }, y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t),
            function(e) {
                return y.isMatch(e, t)
            }
    }, y.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = x(e, n, 1);
        for (var r = 0; r < t; r++) i[r] = e(r);
        return i
    }, y.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, y.now = Date.now || function() {
        return (new Date).getTime()
    };
    var X = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        L = y.invert(X),
        Y = function(t) {
            var e = function(e) {
                    return t[e]
                },
                n = "(?:" + y.keys(t).join("|") + ")",
                i = RegExp(n),
                r = RegExp(n, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
            }
        };
    y.escape = Y(X), y.unescape = Y(L), y.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n), y.isFunction(i) ? i.call(t) : i
    };
    var I = 0;
    y.uniqueId = function(t) {
        var e = ++I + "";
        return t ? t + e : e
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var D = /(.)^/,
        H = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        R = /\\|'|\r|\n|\u2028|\u2029/g,
        N = function(t) {
            return "\\" + H[t]
        };
    y.template = function(t, e, n) {
        !e && n && (e = n), e = y.defaults({}, e, y.templateSettings);
        var i = RegExp([(e.escape || D).source, (e.interpolate || D).source, (e.evaluate || D).source].join("|") + "|$", "g"),
            r = 0,
            s = "__p+='";
        t.replace(i, function(e, n, i, o, a) {
            return s += t.slice(r, a).replace(R, N), r = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(e.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        var u = function(t) {
                return o.call(this, t, y)
            },
            l = e.variable || "obj";
        return u.source = "function(" + l + "){\n" + s + "}", u
    }, y.chain = function(t) {
        var e = y(t);
        return e._chain = !0, e
    };
    var $ = function(t, e) {
        return t._chain ? y(e).chain() : e
    };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var n = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return l.apply(t, arguments), $(this, n.apply(y, t))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = o[t];
        y.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], $(this, n)
        }
    }), y.each(["concat", "join", "slice"], function(t) {
        var e = o[t];
        y.prototype[t] = function() {
            return $(this, e.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}.call(this);
var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : q[G.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function n(t) {
        return null != t && t == t.window
    }

    function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function r(e) {
        return "object" == t(e)
    }

    function s(t) {
        return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function o(t) {
        return "number" == typeof t.length
    }

    function a(t) {
        return M.call(t, function(t) {
            return null != t
        })
    }

    function u(t) {
        return t.length > 0 ? k.fn.concat.apply([], t) : t
    }

    function l(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function c(t) {
        return t in O ? O[t] : O[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function h(t, e) {
        return "number" != typeof e || X[l(t)] ? e : e + "px"
    }

    function p(t) {
        var e, n;
        return C[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), C[t] = n), C[t]
    }

    function f(t) {
        return "children" in t ? T.call(t.children) : k.map(t.childNodes, function(t) {
            if (1 == t.nodeType) return t
        })
    }

    function d(t, e, n) {
        for (S in e) n && (s(e[S]) || Z(e[S])) ? (s(e[S]) && !s(t[S]) && (t[S] = {}), Z(e[S]) && !Z(t[S]) && (t[S] = []), d(t[S], e[S], n)) : e[S] !== b && (t[S] = e[S])
    }

    function g(t, e) {
        return null == e ? k(t) : k(t).filter(e)
    }

    function v(t, n, i, r) {
        return e(n) ? n.call(t, i, r) : n
    }

    function m(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function y(t, e) {
        var n = t.className || "",
            i = n && n.baseVal !== b;
        return e === b ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
    }

    function x(t) {
        try {
            return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? k.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function w(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; n < i; n++) w(t.childNodes[n], e)
    }
    var b, S, k, E, _, j, P = [],
        T = P.slice,
        M = P.filter,
        A = window.document,
        C = {},
        O = {},
        X = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        L = /^\s*<(\w+|!)[^>]*>/,
        Y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        I = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        D = /^(?:body|html)$/i,
        H = /([A-Z])/g,
        R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        N = ["after", "prepend", "before", "append"],
        $ = A.createElement("table"),
        z = A.createElement("tr"),
        F = {
            tr: A.createElement("tbody"),
            tbody: $,
            thead: $,
            tfoot: $,
            td: z,
            th: z,
            "*": A.createElement("div")
        },
        B = /complete|loaded|interactive/,
        U = /^[\w-]*$/,
        q = {},
        G = q.toString,
        W = {},
        V = A.createElement("div"),
        K = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        Z = Array.isArray || function(t) {
            return t instanceof Array
        };
    return W.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var i, r = t.parentNode,
            s = !r;
        return s && (r = V).appendChild(t), i = ~W.qsa(r, e).indexOf(t), s && V.removeChild(t), i
    }, _ = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, j = function(t) {
        return M.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }, W.fragment = function(t, e, n) {
        var i, r, o;
        return Y.test(t) && (i = k(A.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(I, "<$1></$2>")), e === b && (e = L.test(t) && RegExp.$1), e in F || (e = "*"), o = F[e], o.innerHTML = "" + t, i = k.each(T.call(o.childNodes), function() {
            o.removeChild(this)
        })), s(n) && (r = k(i), k.each(n, function(t, e) {
            R.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
        })), i
    }, W.Z = function(t, e) {
        return t = t || [], t.__proto__ = k.fn, t.selector = e || "", t
    }, W.isZ = function(t) {
        return t instanceof W.Z
    }, W.init = function(t, n) {
        var i;
        if (!t) return W.Z();
        if ("string" == typeof t)
            if (t = t.trim(), "<" == t[0] && L.test(t)) i = W.fragment(t, RegExp.$1, n), t = null;
            else {
                if (n !== b) return k(n).find(t);
                i = W.qsa(A, t)
            } else {
            if (e(t)) return k(A).ready(t);
            if (W.isZ(t)) return t;
            if (Z(t)) i = a(t);
            else if (r(t)) i = [t], t = null;
            else if (L.test(t)) i = W.fragment(t.trim(), RegExp.$1, n), t = null;
            else {
                if (n !== b) return k(n).find(t);
                i = W.qsa(A, t)
            }
        }
        return W.Z(i, t)
    }, k = function(t, e) {
        return W.init(t, e)
    }, k.extend = function(t) {
        var e, n = T.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
            d(t, n, e)
        }), t
    }, W.qsa = function(t, e) {
        var n, r = "#" == e[0],
            s = !r && "." == e[0],
            o = r || s ? e.slice(1) : e,
            a = U.test(o);
        return i(t) && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : T.call(a && !r ? s ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, k.contains = A.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    } : function(t, e) {
        for (; e && (e = e.parentNode);)
            if (e === t) return !0;
        return !1
    }, k.type = t, k.isFunction = e, k.isWindow = n, k.isArray = Z, k.isPlainObject = s, k.isEmptyObject = function(t) {
        var e;
        for (e in t) return !1;
        return !0
    }, k.inArray = function(t, e, n) {
        return P.indexOf.call(e, t, n)
    }, k.camelCase = _, k.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function(t, e) {
        var n, i, r, s = [];
        if (o(t))
            for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && s.push(n);
        else
            for (r in t) n = e(t[r], r), null != n && s.push(n);
        return u(s)
    }, k.each = function(t, e) {
        var n, i;
        if (o(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1) return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1) return t; return t
    }, k.grep = function(t, e) {
        return M.call(t, e)
    }, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        q["[object " + e + "]"] = e.toLowerCase()
    }), k.fn = {
        forEach: P.forEach,
        reduce: P.reduce,
        push: P.push,
        sort: P.sort,
        indexOf: P.indexOf,
        concat: P.concat,
        map: function(t) {
            return k(k.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return k(T.apply(this, arguments))
        },
        ready: function(t) {
            return B.test(A.readyState) && A.body ? t(k) : A.addEventListener("DOMContentLoaded", function() {
                t(k)
            }, !1), this
        },
        get: function(t) {
            return t === b ? T.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return P.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function(t) {
            return e(t) ? this.not(this.not(t)) : k(M.call(this, function(e) {
                return W.matches(e, t)
            }))
        },
        add: function(t, e) {
            return k(j(this.concat(k(t, e))))
        },
        is: function(t) {
            return this.length > 0 && W.matches(this[0], t)
        },
        not: function(t) {
            var n = [];
            if (e(t) && t.call !== b) this.each(function(e) {
                t.call(this, e) || n.push(this)
            });
            else {
                var i = "string" == typeof t ? this.filter(t) : o(t) && e(t.item) ? T.call(t) : k(t);
                this.forEach(function(t) {
                    i.indexOf(t) < 0 && n.push(t)
                })
            }
            return k(n)
        },
        has: function(t) {
            return this.filter(function() {
                return r(t) ? k.contains(this, t) : k(this).find(t).size()
            })
        },
        eq: function(t) {
            return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !r(t) ? t : k(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !r(t) ? t : k(t)
        },
        find: function(t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? k(t).filter(function() {
                var t = this;
                return P.some.call(n, function(e) {
                    return k.contains(e, t)
                })
            }) : 1 == this.length ? k(W.qsa(this[0], t)) : this.map(function() {
                return W.qsa(this, t)
            }) : k()
        },
        closest: function(t, e) {
            var n = this[0],
                r = !1;
            for ("object" == typeof t && (r = k(t)); n && !(r ? r.indexOf(n) >= 0 : W.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
            return k(n)
        },
        parents: function(t) {
            for (var e = [], n = this; n.length > 0;) n = k.map(n, function(t) {
                if ((t = t.parentNode) && !i(t) && e.indexOf(t) < 0) return e.push(t), t
            });
            return g(e, t)
        },
        parent: function(t) {
            return g(j(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return g(this.map(function() {
                return f(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return T.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return g(this.map(function(t, e) {
                return M.call(f(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return k.map(this, function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var n = e(t);
            if (this[0] && !n) var i = k(t).get(0),
                r = i.parentNode || this.length > 1;
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                k(this[0]).before(t = k(t));
                for (var e;
                    (e = t.children()).length;) t = e.first();
                k(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
                var i = k(this),
                    r = i.contents(),
                    s = n ? t.call(this, e) : t;
                r.length ? r.wrapAll(s) : i.append(s)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                k(this).replaceWith(k(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var e = k(this);
                (t === b ? "none" == e.css("display") : t) ? e.show(): e.hide()
            })
        },
        prev: function(t) {
            return k(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return k(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = this.innerHTML;
                k(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                if (1 === this.nodeType)
                    if (r(t))
                        for (S in t) m(this, S, t[S]);
                    else m(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : b
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    m(this, t)
                }, this)
            })
        },
        prop: function(t, e) {
            return t = K[t] || t, 1 in arguments ? this.each(function(n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, e) {
            var n = "data-" + t.replace(H, "-$1").toLowerCase(),
                i = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== i ? x(i) : b
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var n = k(this),
                    i = v(this, t, e, n.offset()),
                    r = n.offsetParent().offset(),
                    s = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                "static" == n.css("position") && (s.position = "relative"), n.css(s)
            });
            if (!this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2) {
                var i, r = this[0];
                if (!r) return;
                if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[_(e)] || i.getPropertyValue(e);
                if (Z(e)) {
                    var s = {};
                    return k.each(e, function(t, e) {
                        s[e] = r.style[_(e)] || i.getPropertyValue(e)
                    }), s
                }
            }
            var o = "";
            if ("string" == t(e)) n || 0 === n ? o = l(e) + ":" + h(e, n) : this.each(function() {
                this.style.removeProperty(l(e))
            });
            else
                for (S in e) e[S] || 0 === e[S] ? o += l(S) + ":" + h(S, e[S]) + ";" : this.each(function() {
                    this.style.removeProperty(l(S))
                });
            return this.each(function() {
                this.style.cssText += ";" + o
            })
        },
        index: function(t) {
            return t ? this.indexOf(k(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return !!t && P.some.call(this, function(t) {
                return this.test(y(t))
            }, c(t))
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    E = [];
                    var n = y(this),
                        i = v(this, t, e, n);
                    i.split(/\s+/g).forEach(function(t) {
                        k(this).hasClass(t) || E.push(t)
                    }, this), E.length && y(this, n + (n ? " " : "") + E.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(e) {
                if ("className" in this) {
                    if (t === b) return y(this, "");
                    E = y(this), v(this, t, e, E).split(/\s+/g).forEach(function(t) {
                        E = E.replace(c(t), " ")
                    }), y(this, E.trim())
                }
            })
        },
        toggleClass: function(t, e) {
            return t ? this.each(function(n) {
                var i = k(this),
                    r = v(this, t, n, y(this));
                r.split(/\s+/g).forEach(function(t) {
                    (e === b ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === b ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                    this.scrollTop = t
                } : function() {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === b ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                    this.scrollLeft = t
                } : function() {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                    e = this.offsetParent(),
                    n = this.offset(),
                    i = D.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return n.top -= parseFloat(k(t).css("margin-top")) || 0, n.left -= parseFloat(k(t).css("margin-left")) || 0, i.top += parseFloat(k(e[0]).css("border-top-width")) || 0, i.left += parseFloat(k(e[0]).css("border-left-width")) || 0, {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || A.body; t && !D.test(t.nodeName) && "static" == k(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    }, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function(t) {
        var e = t.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        k.fn[t] = function(r) {
            var s, o = this[0];
            return r === b ? n(o) ? o["inner" + e] : i(o) ? o.documentElement["scroll" + e] : (s = this.offset()) && s[t] : this.each(function(e) {
                o = k(this), o.css(t, v(this, r, e, o[t]()))
            })
        }
    }), N.forEach(function(e, n) {
        var i = n % 2;
        k.fn[e] = function() {
            var e, r, s = k.map(arguments, function(n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : W.fragment(n)
                }),
                o = this.length > 1;
            return s.length < 1 ? this : this.each(function(t, e) {
                r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var a = k.contains(A.documentElement, r);
                s.forEach(function(t) {
                    if (o) t = t.cloneNode(!0);
                    else if (!r) return k(t).remove();
                    r.insertBefore(t, e), a && w(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, k.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
            return k(t)[e](this), this
        }
    }), W.Z.prototype = k.fn, W.uniq = j, W.deserializeValue = x, k.zepto = W, k
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function(t) {
        function e(t) {
            return t._zid || (t._zid = p++)
        }

        function n(t, n, s, o) {
            if (n = i(n), n.ns) var a = r(n.ns);
            return (v[e(t)] || []).filter(function(t) {
                return t && (!n.e || t.e == n.e) && (!n.ns || a.test(t.ns)) && (!s || e(t.fn) === e(s)) && (!o || t.sel == o)
            })
        }

        function i(t) {
            var e = ("" + t).split(".");
            return {
                e: e[0],
                ns: e.slice(1).sort().join(" ")
            }
        }

        function r(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function s(t, e) {
            return t.del && !y && t.e in x || !!e
        }

        function o(t) {
            return w[t] || y && x[t] || t
        }

        function a(n, r, a, u, c, p, f) {
            var d = e(n),
                g = v[d] || (v[d] = []);
            r.split(/\s/).forEach(function(e) {
                if ("ready" == e) return t(document).ready(a);
                var r = i(e);
                r.fn = a, r.sel = c, r.e in w && (a = function(e) {
                    var n = e.relatedTarget;
                    if (!n || n !== this && !t.contains(this, n)) return r.fn.apply(this, arguments)
                }), r.del = p;
                var d = p || a;
                r.proxy = function(t) {
                    if (t = l(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = d.apply(n, t._args == h ? [t] : [t].concat(t._args));
                        return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                    }
                }, r.i = g.length, g.push(r), "addEventListener" in n && n.addEventListener(o(r.e), r.proxy, s(r, f))
            })
        }

        function u(t, i, r, a, u) {
            var l = e(t);
            (i || "").split(/\s/).forEach(function(e) {
                n(t, e, r, a).forEach(function(e) {
                    delete v[l][e.i], "removeEventListener" in t && t.removeEventListener(o(e.e), e.proxy, s(e, u))
                })
            })
        }

        function l(e, n) {
            return !n && e.isDefaultPrevented || (n || (n = e), t.each(E, function(t, i) {
                var r = n[t];
                e[t] = function() {
                    return this[i] = b, r && r.apply(n, arguments)
                }, e[i] = S
            }), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
        }

        function c(t) {
            var e, n = {
                originalEvent: t
            };
            for (e in t) k.test(e) || t[e] === h || (n[e] = t[e]);
            return l(n, t)
        }
        var h, p = 1,
            f = Array.prototype.slice,
            d = t.isFunction,
            g = function(t) {
                return "string" == typeof t
            },
            v = {},
            m = {},
            y = "onfocusin" in window,
            x = {
                focus: "focusin",
                blur: "focusout"
            },
            w = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        m.click = m.mousedown = m.mouseup = m.mousemove = "MouseEvents", t.event = {
            add: a,
            remove: u
        }, t.proxy = function(n, i) {
            var r = 2 in arguments && f.call(arguments, 2);
            if (d(n)) {
                var s = function() {
                    return n.apply(i, r ? r.concat(f.call(arguments)) : arguments)
                };
                return s._zid = e(n), s
            }
            if (g(i)) return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
            throw new TypeError("expected function")
        }, t.fn.bind = function(t, e, n) {
            return this.on(t, e, n)
        }, t.fn.unbind = function(t, e) {
            return this.off(t, e)
        }, t.fn.one = function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        };
        var b = function() {
                return !0
            },
            S = function() {
                return !1
            },
            k = /^([A-Z]|returnValue$|layer[XY]$)/,
            E = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        t.fn.delegate = function(t, e, n) {
            return this.on(e, t, n)
        }, t.fn.undelegate = function(t, e, n) {
            return this.off(e, t, n)
        }, t.fn.live = function(e, n) {
            return t(document.body).delegate(this.selector, e, n), this
        }, t.fn.die = function(e, n) {
            return t(document.body).undelegate(this.selector, e, n), this
        }, t.fn.on = function(e, n, i, r, s) {
            var o, l, p = this;
            return e && !g(e) ? (t.each(e, function(t, e) {
                p.on(t, n, i, e, s)
            }), p) : (g(n) || d(r) || r === !1 || (r = i, i = n, n = h), (d(i) || i === !1) && (r = i, i = h), r === !1 && (r = S), p.each(function(h, p) {
                s && (o = function(t) {
                    return u(p, t.type, r), r.apply(this, arguments)
                }), n && (l = function(e) {
                    var i, s = t(e.target).closest(n, p).get(0);
                    if (s && s !== p) return i = t.extend(c(e), {
                        currentTarget: s,
                        liveFired: p
                    }), (o || r).apply(s, [i].concat(f.call(arguments, 1)))
                }), a(p, e, r, i, n, l || o)
            }))
        }, t.fn.off = function(e, n, i) {
            var r = this;
            return e && !g(e) ? (t.each(e, function(t, e) {
                r.off(t, n, e)
            }), r) : (g(n) || d(i) || i === !1 || (i = n, n = h), i === !1 && (i = S), r.each(function() {
                u(this, e, i, n)
            }))
        }, t.fn.trigger = function(e, n) {
            return e = g(e) || t.isPlainObject(e) ? t.Event(e) : l(e), e._args = n, this.each(function() {
                e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
            })
        }, t.fn.triggerHandler = function(e, i) {
            var r, s;
            return this.each(function(o, a) {
                r = c(g(e) ? t.Event(e) : e), r._args = i, r.target = a, t.each(n(a, e.type || e), function(t, e) {
                    if (s = e.proxy(r), r.isImmediatePropagationStopped()) return !1
                })
            }), s
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            t.fn[e] = function(t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e)
            }
        }), t.Event = function(t, e) {
            g(t) || (e = t, t = e.type);
            var n = document.createEvent(m[t] || "Events"),
                i = !0;
            if (e)
                for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), l(n)
        }
    }(Zepto),
    function(t) {
        function e(e, n, i) {
            var r = t.Event(n);
            return t(e).trigger(r, i), !r.isDefaultPrevented()
        }

        function n(t, n, i, r) {
            if (t.global) return e(n || y, i, r)
        }

        function i(e) {
            e.global && 0 === t.active++ && n(e, null, "ajaxStart")
        }

        function r(e) {
            e.global && !--t.active && n(e, null, "ajaxStop")
        }

        function s(t, e) {
            var i = e.context;
            return e.beforeSend.call(i, t, e) !== !1 && n(e, i, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, i, "ajaxSend", [t, e])
        }

        function o(t, e, i, r) {
            var s = i.context,
                o = "success";
            i.success.call(s, t, o, e), r && r.resolveWith(s, [t, o, e]), n(i, s, "ajaxSuccess", [e, i, t]), u(o, e, i)
        }

        function a(t, e, i, r, s) {
            var o = r.context;
            r.error.call(o, i, e, t), s && s.rejectWith(o, [i, e, t]), n(r, o, "ajaxError", [i, r, t || e]), u(e, i, r)
        }

        function u(t, e, i) {
            var s = i.context;
            i.complete.call(s, e, t), n(i, s, "ajaxComplete", [e, i]), r(i)
        }

        function l() {}

        function c(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == k ? "html" : t == S ? "json" : w.test(t) ? "script" : b.test(t) && "xml") || "text"
        }

        function h(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function p(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = h(e.url, e.data), e.data = void 0)
        }

        function f(e, n, i, r) {
            return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                url: e,
                data: n,
                success: i,
                dataType: r
            }
        }

        function d(e, n, i, r) {
            var s, o = t.isArray(n),
                a = t.isPlainObject(n);
            t.each(n, function(n, u) {
                s = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == s || "array" == s ? n : "") + "]"), !r && o ? e.add(u.name, u.value) : "array" == s || !i && "object" == s ? d(e, u, i, n) : e.add(n, u)
            })
        }
        var g, v, m = 0,
            y = window.document,
            x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            w = /^(?:text|application)\/javascript/i,
            b = /^(?:text|application)\/xml/i,
            S = "application/json",
            k = "text/html",
            E = /^\s*$/,
            _ = y.createElement("a");
        _.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
            if (!("type" in e)) return t.ajax(e);
            var i, r, u = e.jsonpCallback,
                l = (t.isFunction(u) ? u() : u) || "jsonp" + ++m,
                c = y.createElement("script"),
                h = window[l],
                p = function(e) {
                    t(c).triggerHandler("error", e || "abort")
                },
                f = {
                    abort: p
                };
            return n && n.promise(f), t(c).on("load error", function(s, u) {
                clearTimeout(r), t(c).off().remove(), "error" != s.type && i ? o(i[0], f, e, n) : a(null, u || "error", f, e, n), window[l] = h, i && t.isFunction(h) && h(i[0]), h = i = void 0
            }), s(f, e) === !1 ? (p("abort"), f) : (window[l] = function() {
                i = arguments
            }, c.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), y.head.appendChild(c), e.timeout > 0 && (r = setTimeout(function() {
                p("timeout")
            }, e.timeout)), f)
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: l,
            success: l,
            error: l,
            complete: l,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: S,
                xml: "application/xml, text/xml",
                html: k,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(e) {
            var n, r = t.extend({}, e || {}),
                u = t.Deferred && t.Deferred();
            for (g in t.ajaxSettings) void 0 === r[g] && (r[g] = t.ajaxSettings[g]);
            i(r), r.crossDomain || (n = y.createElement("a"), n.href = r.url, n.href = n.href, r.crossDomain = _.protocol + "//" + _.host != n.protocol + "//" + n.host), r.url || (r.url = window.location.toString()), p(r);
            var f = r.dataType,
                d = /\?.+=\?/.test(r.url);
            if (d && (f = "jsonp"), r.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (r.url = h(r.url, "_=" + Date.now())), "jsonp" == f) return d || (r.url = h(r.url, r.jsonp ? r.jsonp + "=?" : r.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(r, u);
            var m, x = r.accepts[f],
                w = {},
                b = function(t, e) {
                    w[t.toLowerCase()] = [t, e]
                },
                S = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1 : window.location.protocol,
                k = r.xhr(),
                j = k.setRequestHeader;
            if (u && u.promise(k), r.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", x || "*/*"), (x = r.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(x)), (r.contentType || r.contentType !== !1 && r.data && "GET" != r.type.toUpperCase()) && b("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers)
                for (v in r.headers) b(v, r.headers[v]);
            if (k.setRequestHeader = b, k.onreadystatechange = function() {
                    if (4 == k.readyState) {
                        k.onreadystatechange = l, clearTimeout(m);
                        var e, n = !1;
                        if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == S) {
                            f = f || c(r.mimeType || k.getResponseHeader("content-type")), e = k.responseText;
                            try {
                                "script" == f ? (0, eval)(e) : "xml" == f ? e = k.responseXML : "json" == f && (e = E.test(e) ? null : t.parseJSON(e))
                            } catch (i) {
                                n = i
                            }
                            n ? a(n, "parsererror", k, r, u) : o(e, k, r, u)
                        } else a(k.statusText || null, k.status ? "error" : "abort", k, r, u)
                    }
                }, s(k, r) === !1) return k.abort(), a(null, "abort", k, r, u), k;
            if (r.xhrFields)
                for (v in r.xhrFields) k[v] = r.xhrFields[v];
            var P = !("async" in r) || r.async;
            k.open(r.type, r.url, P, r.username, r.password);
            for (v in w) j.apply(k, w[v]);
            return r.timeout > 0 && (m = setTimeout(function() {
                k.onreadystatechange = l, k.abort(), a(null, "timeout", k, r, u)
            }, r.timeout)), k.send(r.data ? r.data : null), k
        }, t.get = function() {
            return t.ajax(f.apply(null, arguments))
        }, t.post = function() {
            var e = f.apply(null, arguments);
            return e.type = "POST", t.ajax(e)
        }, t.getJSON = function() {
            var e = f.apply(null, arguments);
            return e.dataType = "json", t.ajax(e)
        }, t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var r, s = this,
                o = e.split(/\s/),
                a = f(e, n, i),
                u = a.success;
            return o.length > 1 && (a.url = o[0], r = o[1]), a.success = function(e) {
                s.html(r ? t("<div>").html(e.replace(x, "")).find(r) : e), u && u.apply(s, arguments)
            }, t.ajax(a), this
        };
        var j = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(j(e) + "=" + j(n))
            }, d(i, e, n), i.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function(t) {
        t.fn.serializeArray = function() {
            var e, n, i = [],
                r = function(t) {
                    return t.forEach ? t.forEach(r) : void i.push({
                        name: e,
                        value: t
                    })
                };
            return this[0] && t.each(this[0].elements, function(i, s) {
                n = s.type, e = s.name, e && "fieldset" != s.nodeName.toLowerCase() && !s.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || s.checked) && r(t(s).val())
            }), i
        }, t.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach(function(e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }), t.join("&")
        }, t.fn.submit = function(e) {
            if (0 in arguments) this.bind("submit", e);
            else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function(t) {
        "__proto__" in {} || t.extend(t.zepto, {
            Z: function(e, n) {
                return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
            },
            isZ: function(e) {
                return "array" === t.type(e) && "__Z" in e
            }
        });
        try {
            getComputedStyle(void 0)
        } catch (e) {
            var n = getComputedStyle;
            window.getComputedStyle = function(t) {
                try {
                    return n(t)
                } catch (e) {
                    return null
                }
            }
        }
    }(Zepto),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, r) {
            t.Backbone = e(t, r, n, i)
        });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            e(t, exports, n)
        } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
    }(this, function(t, e, n, i) {
        var r = t.Backbone,
            s = [],
            o = (s.push, s.slice);
        s.splice;
        e.VERSION = "1.1.2", e.$ = i, e.noConflict = function() {
            return t.Backbone = r, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var a = e.Events = {
                on: function(t, e, n) {
                    if (!l(this, "on", t, [e, n]) || !e) return this;
                    this._events || (this._events = {});
                    var i = this._events[t] || (this._events[t] = []);
                    return i.push({
                        callback: e,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(t, e, i) {
                    if (!l(this, "once", t, [e, i]) || !e) return this;
                    var r = this,
                        s = n.once(function() {
                            r.off(t, s), e.apply(this, arguments)
                        });
                    return s._callback = e, this.on(t, s, i)
                },
                off: function(t, e, i) {
                    var r, s, o, a, u, c, h, p;
                    if (!this._events || !l(this, "off", t, [e, i])) return this;
                    if (!t && !e && !i) return this._events = void 0, this;
                    for (a = t ? [t] : n.keys(this._events), u = 0, c = a.length; u < c; u++)
                        if (t = a[u], o = this._events[t]) {
                            if (this._events[t] = r = [], e || i)
                                for (h = 0, p = o.length; h < p; h++) s = o[h], (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) && r.push(s);
                            r.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(t) {
                    if (!this._events) return this;
                    var e = o.call(arguments, 1);
                    if (!l(this, "trigger", t, e)) return this;
                    var n = this._events[t],
                        i = this._events.all;
                    return n && c(n, e), i && c(i, arguments), this
                },
                stopListening: function(t, e, i) {
                    var r = this._listeningTo;
                    if (!r) return this;
                    var s = !e && !i;
                    i || "object" != typeof e || (i = this), t && ((r = {})[t._listenId] = t);
                    for (var o in r) t = r[o], t.off(e, i, this), (s || n.isEmpty(t._events)) && delete this._listeningTo[o];
                    return this
                }
            },
            u = /\s+/,
            l = function(t, e, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
                    return !1
                }
                if (u.test(n)) {
                    for (var s = n.split(u), o = 0, a = s.length; o < a; o++) t[e].apply(t, [s[o]].concat(i));
                    return !1
                }
                return !0
            },
            c = function(t, e) {
                var n, i = -1,
                    r = t.length,
                    s = e[0],
                    o = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o);
                        return;
                    case 3:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o, a);
                        return;
                    default:
                        for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e);
                        return
                }
            },
            h = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(h, function(t, e) {
            a[e] = function(e, i, r) {
                var s = this._listeningTo || (this._listeningTo = {}),
                    o = e._listenId || (e._listenId = n.uniqueId("l"));
                return s[o] = e, r || "object" != typeof i || (r = this), e[t](i, r, this), this
            }
        }), a.bind = a.on, a.unbind = a.off, n.extend(e, a);
        var p = e.Model = function(t, e) {
            var i = t || {};
            e || (e = {}), this.cid = n.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(p.prototype, a, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(t) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return n.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, i) {
                var r, s, o, a, u, l, c, h;
                if (null == t) return this;
                if ("object" == typeof t ? (s = t, i = e) : (s = {})[t] = e, i || (i = {}), !this._validate(s, i)) return !1;
                o = i.unset, u = i.silent, a = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), h = this.attributes, c = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
                for (r in s) e = s[r], n.isEqual(h[r], e) || a.push(r), n.isEqual(c[r], e) ? delete this.changed[r] : this.changed[r] = e, o ? delete h[r] : h[r] = e;
                if (!u) {
                    a.length && (this._pending = i);
                    for (var p = 0, f = a.length; p < f; p++) this.trigger("change:" + a[p], this, h[a[p]], i)
                }
                if (l) return this;
                if (!u)
                    for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, n.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var i in this.attributes) e[i] = void 0;
                return this.set(e, n.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t) return !!this.hasChanged() && n.clone(this.changed);
                var e, i = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var s in t) n.isEqual(r[s], e = t[s]) || ((i || (i = {}))[s] = e);
                return i
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = this,
                    i = t.success;
                return t.success = function(n) {
                    return !!e.set(e.parse(n, t), t) && (i && i(e, n, t), void e.trigger("sync", e, n, t))
                }, D(this, t), this.sync("read", this, t)
            },
            save: function(t, e, i) {
                var r, s, o, a = this.attributes;
                if (null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                        validate: !0
                    }, i), r && !i.wait) {
                    if (!this.set(r, i)) return !1
                } else if (!this._validate(r, i)) return !1;
                r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse = !0);
                var u = this,
                    l = i.success;
                return i.success = function(t) {
                    u.attributes = a;
                    var e = u.parse(t, i);
                    return i.wait && (e = n.extend(r || {}, e)), !(n.isObject(e) && !u.set(e, i)) && (l && l(u, t, i), void u.trigger("sync", u, t, i))
                }, D(this, i), s = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === s && (i.attrs = r), o = this.sync(s, this, i), r && i.wait && (this.attributes = a), o
            },
            destroy: function(t) {
                t = t ? n.clone(t) : {};
                var e = this,
                    i = t.success,
                    r = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function(n) {
                        (t.wait || e.isNew()) && r(), i && i(e, n, t), e.isNew() || e.trigger("sync", e, n, t)
                    }, this.isNew()) return t.success(), !1;
                D(this, t);
                var s = this.sync("delete", this, t);
                return t.wait || r(), s
            },
            url: function() {
                var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || I();
                return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(t) {
                return this._validate({}, n.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate) return !0;
                t = n.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return !i || (this.trigger("invalid", this, i, n.extend(e, {
                    validationError: i
                })), !1)
            }
        });
        var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(f, function(t) {
            p.prototype[t] = function() {
                var e = o.call(arguments);
                return e.unshift(this.attributes), n[t].apply(n, e)
            }
        });
        var d = e.Collection = function(t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
                    silent: !0
                }, e))
            },
            g = {
                add: !0,
                remove: !0,
                merge: !0
            },
            v = {
                add: !0,
                remove: !1
            };
        n.extend(d.prototype, a, {
            model: p,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, n.extend({
                    merge: !1
                }, e, v))
            },
            remove: function(t, e) {
                var i = !n.isArray(t);
                t = i ? [t] : n.clone(t), e || (e = {});
                var r, s, o, a;
                for (r = 0, s = t.length; r < s; r++) a = t[r] = this.get(t[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], o = this.indexOf(a), this.models.splice(o, 1), this.length--, e.silent || (e.index = o, a.trigger("remove", a, this, e)), this._removeReference(a, e));
                return i ? t[0] : t
            },
            set: function(t, e) {
                e = n.defaults({}, e, g), e.parse && (t = this.parse(t, e));
                var i = !n.isArray(t);
                t = i ? t ? [t] : [] : n.clone(t);
                var r, s, o, a, u, l, c, h = e.at,
                    f = this.model,
                    d = this.comparator && null == h && e.sort !== !1,
                    v = n.isString(this.comparator) ? this.comparator : null,
                    m = [],
                    y = [],
                    x = {},
                    w = e.add,
                    b = e.merge,
                    S = e.remove,
                    k = !(d || !w || !S) && [];
                for (r = 0, s = t.length; r < s; r++) {
                    if (u = t[r] || {}, o = u instanceof p ? a = u : u[f.prototype.idAttribute || "id"], l = this.get(o)) S && (x[l.cid] = !0), b && (u = u === a ? a.attributes : u, e.parse && (u = l.parse(u, e)), l.set(u, e), d && !c && l.hasChanged(v) && (c = !0)), t[r] = l;
                    else if (w) {
                        if (a = t[r] = this._prepareModel(u, e), !a) continue;
                        m.push(a), this._addReference(a, e)
                    }
                    a = l || a, !k || !a.isNew() && x[a.id] || k.push(a), x[a.id] = !0
                }
                if (S) {
                    for (r = 0, s = this.length; r < s; ++r) x[(a = this.models[r]).cid] || y.push(a);
                    y.length && this.remove(y, e)
                }
                if (m.length || k && k.length)
                    if (d && (c = !0), this.length += m.length, null != h)
                        for (r = 0, s = m.length; r < s; r++) this.models.splice(h + r, 0, m[r]);
                    else {
                        k && (this.models.length = 0);
                        var E = k || m;
                        for (r = 0, s = E.length; r < s; r++) this.models.push(E[r])
                    }
                if (c && this.sort({
                        silent: !0
                    }), !e.silent) {
                    for (r = 0, s = m.length; r < s; r++)(a = m[r]).trigger("add", a, this, e);
                    (c || k && k.length) && this.trigger("sort", this, e)
                }
                return i ? t[0] : t
            },
            reset: function(t, e) {
                e || (e = {});
                for (var i = 0, r = this.models.length; i < r; i++) this._removeReference(this.models[i], e);
                return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function(t, e) {
                return this.add(t, n.extend({
                    at: this.length
                }, e))
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return this.add(t, n.extend({
                    at: 0
                }, e))
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function() {
                return o.apply(this.models, arguments)
            },
            get: function(t) {
                if (null != t) return this._byId[t] || this._byId[t.id] || this._byId[t.cid]
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t, e) {
                return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var n in t)
                        if (t[n] !== e.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function(t) {
                return n.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    i = this;
                return t.success = function(n) {
                    var r = t.reset ? "reset" : "set";
                    i[r](n, t), e && e(i, n, t), i.trigger("sync", i, n, t)
                }, D(this, t), this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? n.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var i = this,
                    r = e.success;
                return e.success = function(t, n) {
                    e.wait && i.add(t, e), r && r(t, n, e)
                }, t.save(null, e), t
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof p) return t;
                e = e ? n.clone(e) : {}, e.collection = this;
                var i = new this.model(t, e);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
            },
            _addReference: function(t, e) {
                this._byId[t.cid] = t, null != t.id && (this._byId[t.id] = t), t.collection || (t.collection = this), t.on("all", this._onModelEvent, this)
            },
            _removeReference: function(t, e) {
                this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, n, i) {
                ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var m = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(m, function(t) {
            d.prototype[t] = function() {
                var e = o.call(arguments);
                return e.unshift(this.models), n[t].apply(n, e)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function(t) {
            d.prototype[t] = function(e, i) {
                var r = n.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return n[t](this.models, r, i)
            }
        });
        var x = e.View = function(t) {
                this.cid = n.uniqueId("view"), t || (t = {}), n.extend(this, n.pick(t, b)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            w = /^(\S+)\s*(.*)$/,
            b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(x.prototype, a, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(t, n) {
                return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (!t && !(t = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (n.isFunction(i) || (i = this[t[e]]), i) {
                        var r = e.match(w),
                            s = r[1],
                            o = r[2];
                        i = n.bind(i, this), s += ".delegateEvents" + this.cid, "" === o ? this.$el.on(s, i) : this.$el.on(s, o, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(n.result(this, "el"), !1);
                else {
                    var t = n.extend({}, n.result(this, "attributes"));
                    this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className"));
                    var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
                    this.setElement(i, !1)
                }
            }
        }), e.sync = function(t, i, r) {
            var s = k[t];
            n.defaults(r || (r = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            if (r.url || (o.url = n.result(i, "url") || I()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                    model: o.data
                } : {}), r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                o.type = "POST", r.emulateJSON && (o.data._method = s);
                var a = r.beforeSend;
                r.beforeSend = function(t) {
                    if (t.setRequestHeader("X-HTTP-Method-Override", s), a) return a.apply(this, arguments)
                }
            }
            "GET" === o.type || r.emulateJSON || (o.processData = !1), "PATCH" === o.type && S && (o.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var u = r.xhr = e.ajax(n.extend(o, r));
            return i.trigger("request", i, u, r), u
        };
        var S = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            k = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        e.ajax = function() {
            return e.$.ajax.apply(e.$, arguments)
        };
        var E = e.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            _ = /\((.*?)\)/g,
            j = /(\(\?)?:\w+/g,
            P = /\*\w+/g,
            T = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(E.prototype, a, {
            initialize: function() {},
            route: function(t, i, r) {
                n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                var s = this;
                return e.history.route(t, function(n) {
                    var o = s._extractParameters(t, n);
                    s.execute(r, o), s.trigger.apply(s, ["route:" + i].concat(o)), s.trigger("route", i, o), e.history.trigger("route", s, i, o)
                }), this
            },
            execute: function(t, e) {
                t && t.apply(this, e)
            },
            navigate: function(t, n) {
                return e.history.navigate(t, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(T, "\\$&").replace(_, "(?:$1)?").replace(j, function(t, e) {
                    return e ? t : "([^/?]+)"
                }).replace(P, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(t, e) {
                var i = t.exec(e).slice(1);
                return n.map(i, function(t, e) {
                    return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                })
            }
        });
        var M = e.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            A = /^[#\/]|\s+$/g,
            C = /^\/+|\/+$/g,
            O = /msie [\w.]+/,
            X = /\/$/,
            L = /#.*$/;
        M.started = !1, n.extend(M.prototype, a, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(X, "");
                        t.indexOf(n) || (t = t.slice(n.length))
                    } else t = this.getHash();
                return t.replace(A, "")
            },
            start: function(t) {
                if (M.started) throw new Error("Backbone.history has already been started");
                M.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    r = document.documentMode,
                    s = O.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
                if (this.root = ("/" + this.root + "/").replace(C, "/"), s && this._wantsHashChange) {
                    var o = e.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = o.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                }
                this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var a = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), M.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function(t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e !== this.fragment && (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function(t) {
                return t = this.fragment = this.getFragment(t), n.any(this.handlers, function(e) {
                    if (e.route.test(t)) return e.callback(t), !0
                })
            },
            navigate: function(t, e) {
                if (!M.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                });
                var n = this.root + (t = this.getFragment(t || ""));
                if (t = t.replace(L, ""), this.fragment !== t) {
                    if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function(t, e, n) {
                if (n) {
                    var i = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(i + "#" + e)
                } else t.hash = "#" + e
            }
        }), e.history = new M;
        var Y = function(t, e) {
            var i, r = this;
            i = t && n.has(t, "constructor") ? t.constructor : function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, e);
            var s = function() {
                this.constructor = i
            };
            return s.prototype = r.prototype, i.prototype = new s, t && n.extend(i.prototype, t), i.__super__ = r.prototype, i
        };
        p.extend = d.extend = E.extend = x.extend = M.extend = Y;
        var I = function() {
                throw new Error('A "url" property or function must be specified')
            },
            D = function(t, e) {
                var n = e.error;
                e.error = function(i) {
                    n && n(t, i, e), t.trigger("error", t, i, e)
                }
            };
        return e
    }),
    function(t, e, n) {
        function i(t, n) {
            this.wrapper = "string" == typeof t ? e.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            };
            for (var i in n) this.options[i] = n[i];
            this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function r(t, n, i) {
            var r = e.createElement("div"),
                s = e.createElement("div");
            return i === !0 && (r.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
                s.className = "iScrollIndicator", "h" == t ? (i === !0 && (r.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), r.className = "iScrollHorizontalScrollbar") : (i === !0 && (r.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), r.className = "iScrollVerticalScrollbar"), r.style.cssText += ";overflow:hidden", n || (r.style.pointerEvents = "none"), r.appendChild(s), r
        }

        function s(n, i) {
            this.wrapper = "string" == typeof i.el ? e.querySelector(i.el) : i.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = n, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            };
            for (var r in i) this.options[r] = i[r];
            this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(t, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(t, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "mouseup", this))), this.options.fade && (this.wrapperStyle[a.style.transform] = this.scroller.translateZ, this.wrapperStyle[a.style.transitionDuration] = a.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
        }
        var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            },
            a = function() {
                function i(t) {
                    return o !== !1 && ("" === o ? t : o + t.charAt(0).toUpperCase() + t.substr(1))
                }
                var r = {},
                    s = e.createElement("div").style,
                    o = function() {
                        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, i = e.length; n < i; n++)
                            if (t = e[n] + "ransform", t in s) return e[n].substr(0, e[n].length - 1);
                        return !1
                    }();
                r.getTime = Date.now || function() {
                    return (new Date).getTime()
                }, r.extend = function(t, e) {
                    for (var n in e) t[n] = e[n]
                }, r.addEvent = function(t, e, n, i) {
                    t.addEventListener(e, n, !!i)
                }, r.removeEvent = function(t, e, n, i) {
                    t.removeEventListener(e, n, !!i)
                }, r.prefixPointerEvent = function(e) {
                    return t.MSPointerEvent ? "MSPointer" + e.charAt(9).toUpperCase() + e.substr(10) : e
                }, r.momentum = function(t, e, i, r, s, o) {
                    var a, u, l = t - e,
                        c = n.abs(l) / i;
                    return o = void 0 === o ? 6e-4 : o, a = t + c * c / (2 * o) * (l < 0 ? -1 : 1), u = c / o, a < r ? (a = s ? r - s / 2.5 * (c / 8) : r, l = n.abs(a - t), u = l / c) : a > 0 && (a = s ? s / 2.5 * (c / 8) : 0, l = n.abs(t) + a, u = l / c), {
                        destination: n.round(a),
                        duration: u
                    }
                };
                var a = i("transform");
                return r.extend(r, {
                    hasTransform: a !== !1,
                    hasPerspective: i("perspective") in s,
                    hasTouch: "ontouchstart" in t,
                    hasPointer: t.PointerEvent || t.MSPointerEvent,
                    hasTransition: i("transition") in s
                }), r.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion), r.extend(r.style = {}, {
                    transform: a,
                    transitionTimingFunction: i("transitionTimingFunction"),
                    transitionDuration: i("transitionDuration"),
                    transitionDelay: i("transitionDelay"),
                    transformOrigin: i("transformOrigin")
                }), r.hasClass = function(t, e) {
                    var n = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    return n.test(t.className)
                }, r.addClass = function(t, e) {
                    if (!r.hasClass(t, e)) {
                        var n = t.className.split(" ");
                        n.push(e), t.className = n.join(" ")
                    }
                }, r.removeClass = function(t, e) {
                    if (r.hasClass(t, e)) {
                        var n = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                        t.className = t.className.replace(n, " ")
                    }
                }, r.offset = function(t) {
                    for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, n -= t.offsetTop;
                    return {
                        left: e,
                        top: n
                    }
                }, r.preventDefaultException = function(t, e) {
                    for (var n in e)
                        if (e[n].test(t[n])) return !0;
                    return !1
                }, r.extend(r.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), r.extend(r.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(t) {
                            return t * (2 - t)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(t) {
                            return n.sqrt(1 - --t * t)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(t) {
                            var e = 4;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(t) {
                            var e = .22,
                                i = .4;
                            return 0 === t ? 0 : 1 == t ? 1 : i * n.pow(2, -10 * t) * n.sin((t - e / 4) * (2 * n.PI) / e) + 1
                        }
                    }
                }), r.tap = function(t, n) {
                    var i = e.createEvent("Event");
                    i.initEvent(n, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
                }, r.click = function(t) {
                    var n, i = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (n = e.createEvent("MouseEvents"), n.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), n._constructed = !0, i.dispatchEvent(n))
                }, r
            }();
        i.prototype = {
            version: "5.1.3",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), this._execEvent("destroy")
            },
            _transitionEnd: function(t) {
                t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function(t) {
                if ((1 == a.eventType[t.type] || 0 === t.button) && this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var e, i = t.touches ? t.touches[0] : t;
                    this.initiated = a.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this.options.snap || (this.isInTransition = !1, e = this.getComputedPosition(), this._translate(n.round(e.x), n.round(e.y))), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.options.snap || (this.isAnimating = !1), this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(t) {
                if (this.enabled && a.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, i, r, s, o = t.touches ? t.touches[0] : t,
                        u = o.pageX - this.pointX,
                        l = o.pageY - this.pointY,
                        c = a.getTime();
                    if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += u, this.distY += l, r = n.abs(this.distX), s = n.abs(this.distY), !(c - this.endTime > 300 && r < 10 && s < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (r > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= r + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            l = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            u = 0
                        }
                        u = this.hasHorizontalScroll ? u : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + u, i = this.y + l, (e > this.minScrollX || e < this.maxScrollX) && (e = this.options.bounce ? this.x + u / 3 : e > this.minScrollX ? this.minScrollX : this.maxScrollX), (i > this.minScrollY || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > this.minScrollY ? this.minScrollY : this.maxScrollY), this.directionX = u > 0 ? -1 : u < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function(t) {
                if (this.enabled && a.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    var e, i, r = (t.changedTouches ? t.changedTouches[0] : t, a.getTime() - this.startTime),
                        s = n.round(this.x),
                        o = n.round(this.y),
                        u = n.abs(s - this.startX),
                        l = n.abs(o - this.startY),
                        c = 0,
                        h = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(s, o), !this.moved) return this.options.tap && a.tap(t, this.options.tap), void(this.options.click && a.click(t));
                        if (this._events.flick && r < 200 && u < 100 && l < 100) return void this._execEvent("flick");
                        if (this.options.momentum && r < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: s,
                                duration: 0
                            }, i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: o,
                                duration: 0
                            }, s = e.destination, o = i.destination, c = n.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                            var p = this._nearestSnap(s, o);
                            this.currentPage = p, c = this.options.snapSpeed || n.max(n.max(n.min(n.abs(s - p.x), 1e3), n.min(n.abs(o - p.y), 1e3)), 300), s = p.x, o = p.y, this.directionX = 0, this.directionY = 0, h = this.options.bounceEasing
                        }
                        return s != this.x || o != this.y ? ((s > this.minScrollX || s < this.maxScrollX || o > this.minScrollY || o < this.maxScrollY) && (h = a.ease.quadratic), void this.scrollTo(s, o, c, h)) : void this._execEvent("scrollEnd")
                    }
                }
            },
            _resize: function() {
                var t = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling)
            },
            resetPosition: function(t) {
                var e = this.x,
                    n = this.y;
                return t = t || 0, !this.hasHorizontalScroll || this.x > this.minScrollX ? e = this.minScrollX : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > this.minScrollY ? n = this.minScrollY : this.y < this.maxScrollY && (n = this.maxScrollY), (e != this.x || n != this.y) && (this.scrollTo(e, n, t, this.options.bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.minScrollX = 0, this.minScrollY = 0, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(t, e) {
                this._events[t] || (this._events[t] = []), this._events[t].push(e)
            },
            off: function(t, e) {
                if (this._events[t]) {
                    var n = this._events[t].indexOf(e);
                    n > -1 && this._events[t].splice(n, 1)
                }
            },
            _execEvent: function(t) {
                if (this._events[t]) {
                    var e = 0,
                        n = this._events[t].length;
                    if (n)
                        for (; e < n; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(t, e, n, i) {
                t = this.x + t, e = this.y + e, n = n || 0, this.scrollTo(t, e, n, i)
            },
            scrollTo: function(t, e, n, i) {
                i = i || a.ease.circular, this.isInTransition = this.options.useTransition && n > 0, !n || this.options.useTransition && i.style ? (this._transitionTimingFunction(i.style), this._transitionTime(n), this._translate(t, e)) : this._animate(t, e, n, i.fn)
            },
            scrollToElement: function(t, e, i, r, s) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var o = a.offset(t);
                    o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, i === !0 && (i = n.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), r === !0 && (r = n.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= i || 0, o.top -= r || 0, o.left = o.left > this.minScrollX ? this.minScrollX : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = o.top > this.minScrollY ? this.minScrollY : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = void 0 === e || null === e || "auto" === e ? n.max(n.abs(this.x - o.left), n.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, s)
                }
            },
            _transitionTime: function(t) {
                if (t = t || 0, this.scrollerStyle[a.style.transitionDuration] = t + "ms", !t && a.isBadAndroid && (this.scrollerStyle[a.style.transitionDuration] = "0.001s"), this.indicators)
                    for (var e = this.indicators.length; e--;) this.indicators[e].transitionTime(t)
            },
            _transitionTimingFunction: function(t) {
                if (this.scrollerStyle[a.style.transitionTimingFunction] = t, this.indicators)
                    for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
            },
            _translate: function(t, e) {
                if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = n.round(t), e = n.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
            },
            _initEvents: function(e) {
                var n = e ? a.removeEvent : a.addEvent,
                    i = this.options.bindToWrapper ? this.wrapper : t;
                n(t, "orientationchange", this), n(t, "resize", this), this.options.click && n(this.wrapper, "click", this, !0), this.options.disableMouse || (n(this.wrapper, "mousedown", this), n(i, "mousemove", this), n(i, "mousecancel", this), n(i, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (n(this.wrapper, a.prefixPointerEvent("pointerdown"), this), n(i, a.prefixPointerEvent("pointermove"), this), n(i, a.prefixPointerEvent("pointercancel"), this), n(i, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this), n(i, "touchmove", this), n(i, "touchcancel", this), n(i, "touchend", this)), n(this.scroller, "transitionend", this), n(this.scroller, "webkitTransitionEnd", this), n(this.scroller, "oTransitionEnd", this), n(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var e, n, i = t.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (i = i[a.style.transform].split(")")[0].split(", "), e = +(i[12] || i[4]), n = +(i[13] || i[5])) : (e = +i.left.replace(/[^-\d.]/g, ""), n = +i.top.replace(/[^-\d.]/g, "")), {
                    x: e,
                    y: n
                }
            },
            _initIndicators: function() {
                function t(t) {
                    if (a.indicators)
                        for (var e = a.indicators.length; e--;) t.call(a.indicators[e])
                }
                var e, n = this.options.interactiveScrollbars,
                    i = "string" != typeof this.options.scrollbars,
                    o = [],
                    a = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: r("v", n, this.options.scrollbars),
                    interactive: n,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                    el: r("h", n, this.options.scrollbars),
                    interactive: n,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), o.push(e))), this.options.indicators && (o = o.concat(this.options.indicators));
                for (var u = o.length; u--;) this.indicators.push(new s(this, o[u]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollCancel", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollStart", function() {
                    t(function() {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function() {
                    t(function() {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function() {
                    t(function() {
                        this.refresh()
                    })
                }), this.on("destroy", function() {
                    t(function() {
                        this.destroy()
                    }), delete this.indicators
                })
            },
            _initWheel: function() {
                a.addEvent(this.wrapper, "wheel", this), a.addEvent(this.wrapper, "mousewheel", this), a.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    a.removeEvent(this.wrapper, "wheel", this), a.removeEvent(this.wrapper, "mousewheel", this), a.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            },
            _wheel: function(t) {
                if (this.enabled) {
                    t.preventDefault(), t.stopPropagation();
                    var e, i, r, s, o = this;
                    if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                            o._execEvent("scrollEnd"), o.wheelTimeout = void 0
                        }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, i = -t.deltaY);
                    else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in t) e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in t)) return;
                        e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i, i = 0), this.options.snap) return r = this.currentPage.pageX, s = this.currentPage.pageY, e > 0 ? r-- : e < 0 && r++, i > 0 ? s-- : i < 0 && s++, void this.goToPage(r, s);
                    r = this.x + n.round(this.hasHorizontalScroll ? e : 0), s = this.y + n.round(this.hasVerticalScroll ? i : 0), r > this.minScrollX ? r = this.minScrollX : r < this.maxScrollX && (r = this.maxScrollX), s > this.minScrollY ? s = this.minScrollY : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(r, s, 0)
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var t, e, i, r, s, o, a = 0,
                        u = 0,
                        l = 0,
                        c = this.options.snapStepX || this.wrapperWidth,
                        h = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (this.options.snap === !0)
                            for (i = n.round(c / 2), r = n.round(h / 2); l > -this.scrollerWidth;) {
                                for (this.pages[a] = [], t = 0, s = 0; s > -this.scrollerHeight;) this.pages[a][t] = {
                                    x: n.max(l, this.maxScrollX),
                                    y: n.max(s, this.maxScrollY),
                                    width: c,
                                    height: h,
                                    cx: l - i,
                                    cy: s - r
                                }, s -= h, t++;
                                l -= c, a++
                            } else
                                for (o = this.options.snap, t = o.length, e = -1; a < t; a++)(0 === a || o[a].offsetLeft <= o[a - 1].offsetLeft) && (u = 0, e++), this.pages[u] || (this.pages[u] = []), l = n.max(-o[a].offsetLeft, this.maxScrollX), s = n.max(-o[a].offsetTop, this.maxScrollY), i = l - n.round(o[a].offsetWidth / 2), r = s - n.round(o[a].offsetHeight / 2), this.pages[u][e] = {
                                    x: l,
                                    y: s,
                                    width: o[a].offsetWidth,
                                    height: o[a].offsetHeight,
                                    cx: i,
                                    cy: r
                                }, l > this.maxScrollX && u++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function() {
                    var t = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300),
                        e = n.abs(this.minScrollX / this.wrapperWidth),
                        i = n.abs(this.minScrollY / this.wrapperHeight),
                        r = n.abs(this.maxScrollX / this.wrapperWidth),
                        s = n.abs(this.maxScrollY / this.wrapperHeight);
                    this.goToPage(n.max(n.min(this.currentPage.pageX + this.directionX, r), e), n.max(n.min(this.currentPage.pageY + this.directionY, s), i), t)
                })
            },
            _nearestSnap: function(t, e) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var i = 0,
                    r = this.pages.length,
                    s = 0;
                if (n.abs(t - this.absStartX) < this.snapThresholdX && n.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (t > this.minScrollX ? t = this.minScrollX : t < this.maxScrollX && (t = this.maxScrollX), e > this.minScrollY ? e = this.minScrollY : e < this.maxScrollY && (e = this.maxScrollY); i < r; i++)
                    if (t >= this.pages[i][0].cx) {
                        t = this.pages[i][0].x;
                        break
                    }
                for (r = this.pages[i].length; s < r; s++)
                    if (e >= this.pages[0][s].cy) {
                        e = this.pages[0][s].y;
                        break
                    }
                return i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), s == this.currentPage.pageY && (s += this.directionY, s < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), e = this.pages[0][s].y), {
                    x: t,
                    y: e,
                    pageX: i,
                    pageY: s
                }
            },
            goToPage: function(t, e, i, r) {
                r = r || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
                var s = this.pages[t][e].x,
                    o = this.pages[t][e].y;
                i = void 0 === i ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(s - this.x), 1e3), n.min(n.abs(o - this.y), 1e3)), 300) : i, this.currentPage = {
                    x: s,
                    y: o,
                    pageX: t,
                    pageY: e
                }, this.scrollTo(s, o, i, r)
            },
            next: function(t, e) {
                var n = this.currentPage.pageX,
                    i = this.currentPage.pageY;
                n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, i++), this.goToPage(n, i, t, e)
            },
            prev: function(t, e) {
                var n = this.currentPage.pageX,
                    i = this.currentPage.pageY;
                n--, n < 0 && this.hasVerticalScroll && (n = 0, i--), this.goToPage(n, i, t, e)
            },
            _initKeys: function(e) {
                var n, i = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ("object" == typeof this.options.keyBindings)
                    for (n in this.options.keyBindings) "string" == typeof this.options.keyBindings[n] && (this.options.keyBindings[n] = this.options.keyBindings[n].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (n in i) this.options.keyBindings[n] = this.options.keyBindings[n] || i[n];
                a.addEvent(t, "keydown", this), this.on("destroy", function() {
                    a.removeEvent(t, "keydown", this)
                })
            },
            _key: function(t) {
                if (this.enabled) {
                    var e, i = this.options.snap,
                        r = i ? this.currentPage.pageX : this.x,
                        s = i ? this.currentPage.pageY : this.y,
                        o = a.getTime(),
                        u = this.keyTime || 0,
                        l = .25;
                    switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(n.round(e.x), n.round(e.y)), this.isInTransition = !1), this.keyAcceleration = o - u < 200 ? n.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? r += i ? 1 : this.wrapperWidth : s += i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? r -= i ? 1 : this.wrapperWidth : s -= i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            r = i ? this.pages.length - 1 : this.maxScrollX, s = i ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            r = 0, s = 0;
                            break;
                        case this.options.keyBindings.left:
                            r += i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            s += i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            r -= i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            s -= i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    if (i) return void this.goToPage(r, s);
                    r > this.minScrollX ? (r = this.minScrollX, this.keyAcceleration = 0) : r < this.maxScrollX && (r = this.maxScrollX, this.keyAcceleration = 0), s > this.minScrollY ? (s = this.minScrollY, this.keyAcceleration = 0) : s < this.maxScrollY && (s = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(r, s, 0), this.keyTime = o
                }
            },
            _animate: function(t, e, n, i) {
                function r() {
                    var p, f, d, g = a.getTime();
                    return g >= h ? (s.isAnimating = !1, s._translate(t, e), void(s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd"))) : (g = (g - c) / n, d = i(g), p = (t - u) * d + u, f = (e - l) * d + l, s._translate(p, f), void(s.isAnimating && o(r)))
                }
                var s = this,
                    u = this.x,
                    l = this.y,
                    c = a.getTime(),
                    h = c + n;
                this.isAnimating = !0, r()
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(t);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(t);
                        break;
                    case "keydown":
                        this._key(t);
                        break;
                    case "click":
                        t._constructed || (t.preventDefault(), t.stopPropagation())
                }
            }
        }, s.prototype = {
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t)
                }
            },
            destroy: function() {
                this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, a.prefixPointerEvent("pointerup"), this), a.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(e) {
                var n = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = n.pageX, this.lastPointY = n.pageY, this.startTime = a.getTime(), this.options.disableTouch || a.addEvent(t, "touchmove", this), this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this), this.options.disableMouse || a.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(t) {
                var e, n, i, r, s = t.touches ? t.touches[0] : t;
                a.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = s.pageX - this.lastPointX, this.lastPointX = s.pageX, n = s.pageY - this.lastPointY, this.lastPointY = s.pageY, i = this.x + e, r = this.y + n, this._pos(i, r), t.preventDefault(), t.stopPropagation()
            },
            _end: function(e) {
                if (this.initiated) {
                    if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                        var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            r = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - i.x), 1e3), n.min(n.abs(this.scroller.y - i.y), 1e3)), 300);
                        this.scroller.x == i.x && this.scroller.y == i.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = i, this.scroller.scrollTo(i.x, i.y, r, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(t) {
                t = t || 0, this.indicatorStyle[a.style.transitionDuration] = t + "ms", !t && a.isBadAndroid && (this.indicatorStyle[a.style.transitionDuration] = "0.001s")
            },
            transitionTimingFunction: function(t) {
                this.indicatorStyle[a.style.transitionTimingFunction] = t
            },
            refresh: function() {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var t = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0,
                    e = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = n.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = n.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = n.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = n.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
            },
            _pos: function(t, e) {
                t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? n.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? n.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
            },
            fade: function(t, e) {
                if (!e || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var n = t ? 250 : 500,
                        i = t ? 0 : 300;
                    t = t ? "1" : "0", this.wrapperStyle[a.style.transitionDuration] = n + "ms", this.fadeTimeout = setTimeout(function(t) {
                        this.wrapperStyle.opacity = t, this.visible = +t
                    }.bind(this, t), i)
                }
            }
        }, i.utils = a, "undefined" != typeof module && module.exports ? module.exports = i : t.IScroll = i
    }(window, document, Math),
    function() {
        function t(t) {
            var e, n = (t.length + 8 >> 6) + 1,
                i = [];
            for (e = 0; e < 16 * n; e++) i[e] = 0;
            for (e = 0; e < t.length; e++) i[e >> 2] |= t.charCodeAt(e) << 24 - 8 * (3 & e);
            return i[e >> 2] |= 128 << 24 - 8 * (3 & e), i[16 * n - 1] = 8 * t.length, i
        }

        function e(t) {
            var e, n = "0123456789abcdef",
                i = "";
            for (e = 0; e < 4 * t.length; e++) i += n.charAt(t[e >> 2] >> 8 * (3 - e % 4) + 4 & 15) + n.charAt(t[e >> 2] >> 8 * (3 - e % 4) & 15);
            return i
        }

        function n(t) {
            var e, n, a, u, l, c, h, p, f = [],
                d = 1732584193,
                g = 4023233417,
                v = 2562383102,
                m = 271733878,
                y = 3285377520;
            for (h = 0; h < t.length; h += 16) {
                for (e = d, n = g, a = v, u = m, l = y, p = 0; p < 80; p++) p < 16 ? f[p] = t[h + p] : f[p] = o(f[p - 3] ^ f[p - 8] ^ f[p - 14] ^ f[p - 16], 1), c = s(s(o(d, 5), i(p, g, v, m)), s(s(y, f[p]), r(p))), y = m, m = v, v = o(g, 30), g = d, d = c;
                d = s(d, e), g = s(g, n), v = s(v, a), m = s(m, u), y = s(y, l)
            }
            return [d, g, v, m, y]
        }

        function i(t, e, n, i) {
            return t < 20 ? e & n | ~e & i : t < 40 ? e ^ n ^ i : t < 60 ? e & n | e & i | n & i : e ^ n ^ i
        }

        function r(t) {
            return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? 2400959708 : 3395469782
        }

        function s(t, e) {
            var n = (65535 & t) + (65535 & e),
                i = (t >> 16) + (e >> 16) + (n >> 16);
            return i << 16 | 65535 & n
        }

        function o(t, e) {
            return t << e | t >>> 32 - e
        }

        function a(i) {
            return e(n(t(i)))
        }
        var u = this;
        "function" == typeof define ? define(function() {
            return a
        }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = a), exports.sha1 = a) : u.sha1 = a
    }.call(this),
    function(t) {
        "use strict";

        function e() {
            function t(n) {
                var r = this;
                return r instanceof t ? (n instanceof t ? (r.s = n.s, r.e = n.e, r.c = n.c.slice()) : i(r, n), void(r.constructor = t)) : void 0 === n ? e() : new t(n)
            }
            return t.prototype = f, t.DP = a, t.RM = u, t.E_NEG = h, t.E_POS = p, t
        }

        function n(t, e, n) {
            var i = t.constructor,
                s = e - (t = new i(t)).e,
                o = t.c;
            for (o.length > ++e && r(t, s, i.RM), o[0] ? n ? s = e : (o = t.c,
                    s = t.e + s + 1) : ++s; o.length < s; o.push(0));
            return s = t.e, 1 === n || n && (e <= s || s <= i.E_NEG) ? (t.s < 0 && o[0] ? "-" : "") + (o.length > 1 ? o[0] + "." + o.join("").slice(1) : o[0]) + (s < 0 ? "e" : "e+") + s : t.toString()
        }

        function i(t, e) {
            var n, i, r;
            for (0 === e && 1 / e < 0 ? e = "-0" : d.test(e += "") || s(NaN), t.s = "-" == e.charAt(0) ? (e = e.slice(1), -1) : 1, (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (i = e.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : n < 0 && (n = e.length), i = 0;
                "0" == e.charAt(i); i++);
            if (i == (r = e.length)) t.c = [t.e = 0];
            else {
                for (;
                    "0" == e.charAt(--r););
                for (t.e = n - i - 1, t.c = [], n = 0; i <= r; t.c[n++] = +e.charAt(i++));
            }
            return t
        }

        function r(t, e, n, i) {
            var r, o = t.c,
                a = t.e + e + 1;
            if (1 === n ? i = o[a] >= 5 : 2 === n ? i = o[a] > 5 || 5 == o[a] && (i || a < 0 || o[a + 1] !== r || 1 & o[a - 1]) : 3 === n ? i = i || o[a] !== r || a < 0 : (i = !1, 0 !== n && s("!Big.RM!")), a < 1 || !o[0]) i ? (t.e = -e, t.c = [1]) : t.c = [t.e = 0];
            else {
                if (o.length = a--, i)
                    for (; ++o[a] > 9;) o[a] = 0, a-- || (++t.e, o.unshift(1));
                for (a = o.length; !o[--a]; o.pop());
            }
            return t
        }

        function s(t) {
            var e = new Error(t);
            throw e.name = "BigError", e
        }
        var o, a = 20,
            u = 1,
            l = 1e6,
            c = 1e6,
            h = -7,
            p = 21,
            f = {},
            d = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
        f.abs = function() {
            var t = new this.constructor(this);
            return t.s = 1, t
        }, f.cmp = function(t) {
            var e, n = this,
                i = n.c,
                r = (t = new n.constructor(t)).c,
                s = n.s,
                o = t.s,
                a = n.e,
                u = t.e;
            if (!i[0] || !r[0]) return i[0] ? s : r[0] ? -o : 0;
            if (s != o) return s;
            if (e = s < 0, a != u) return a > u ^ e ? 1 : -1;
            for (s = -1, o = (a = i.length) < (u = r.length) ? a : u; ++s < o;)
                if (i[s] != r[s]) return i[s] > r[s] ^ e ? 1 : -1;
            return a == u ? 0 : a > u ^ e ? 1 : -1
        }, f.div = function(t) {
            var e = this,
                n = e.constructor,
                i = e.c,
                o = (t = new n(t)).c,
                a = e.s == t.s ? 1 : -1,
                u = n.DP;
            if ((u !== ~~u || u < 0 || u > l) && s("!Big.DP!"), !i[0] || !o[0]) return i[0] == o[0] && s(NaN), o[0] || s(a / 0), new n(0 * a);
            var c, h, p, f, d, g, v = o.slice(),
                m = c = o.length,
                y = i.length,
                x = i.slice(0, c),
                w = x.length,
                b = t,
                S = b.c = [],
                k = 0,
                E = u + (b.e = e.e - t.e) + 1;
            for (b.s = a, a = E < 0 ? 0 : E, v.unshift(0); w++ < c; x.push(0));
            do {
                for (p = 0; p < 10; p++) {
                    if (c != (w = x.length)) f = c > w ? 1 : -1;
                    else
                        for (d = -1, f = 0; ++d < c;)
                            if (o[d] != x[d]) {
                                f = o[d] > x[d] ? 1 : -1;
                                break
                            } if (!(f < 0)) break;
                    for (h = w == c ? o : v; w;) {
                        if (x[--w] < h[w]) {
                            for (d = w; d && !x[--d]; x[d] = 9);
                            --x[d], x[w] += 10
                        }
                        x[w] -= h[w]
                    }
                    for (; !x[0]; x.shift());
                }
                S[k++] = f ? p : ++p, x[0] && f ? x[w] = i[m] || 0 : x = [i[m]]
            } while ((m++ < y || x[0] !== g) && a--);
            return S[0] || 1 == k || (S.shift(), b.e--), k > E && r(b, u, n.RM, x[0] !== g), b
        }, f.eq = function(t) {
            return !this.cmp(t)
        }, f.gt = function(t) {
            return this.cmp(t) > 0
        }, f.gte = function(t) {
            return this.cmp(t) > -1
        }, f.lt = function(t) {
            return this.cmp(t) < 0
        }, f.lte = function(t) {
            return this.cmp(t) < 1
        }, f.sub = f.minus = function(t) {
            var e, n, i, r, s = this,
                o = s.constructor,
                a = s.s,
                u = (t = new o(t)).s;
            if (a != u) return t.s = -u, s.plus(t);
            var l = s.c.slice(),
                c = s.e,
                h = t.c,
                p = t.e;
            if (!l[0] || !h[0]) return h[0] ? (t.s = -u, t) : new o(l[0] ? s : 0);
            if (a = c - p) {
                for ((r = a < 0) ? (a = -a, i = l) : (p = c, i = h), i.reverse(), u = a; u--; i.push(0));
                i.reverse()
            } else
                for (n = ((r = l.length < h.length) ? l : h).length, a = u = 0; u < n; u++)
                    if (l[u] != h[u]) {
                        r = l[u] < h[u];
                        break
                    } if (r && (i = l, l = h, h = i, t.s = -t.s), (u = (n = h.length) - (e = l.length)) > 0)
                for (; u--; l[e++] = 0);
            for (u = e; n > a;) {
                if (l[--n] < h[n]) {
                    for (e = n; e && !l[--e]; l[e] = 9);
                    --l[e], l[n] += 10
                }
                l[n] -= h[n]
            }
            for (; 0 === l[--u]; l.pop());
            for (; 0 === l[0];) l.shift(), --p;
            return l[0] || (t.s = 1, l = [p = 0]), t.c = l, t.e = p, t
        }, f.mod = function(t) {
            var e, n = this,
                i = n.constructor,
                r = n.s,
                o = (t = new i(t)).s;
            return t.c[0] || s(NaN), n.s = t.s = 1, e = 1 == t.cmp(n), n.s = r, t.s = o, e ? new i(n) : (r = i.DP, o = i.RM, i.DP = i.RM = 0, n = n.div(t), i.DP = r, i.RM = o, this.minus(n.times(t)))
        }, f.add = f.plus = function(t) {
            var e, n = this,
                i = n.constructor,
                r = n.s,
                s = (t = new i(t)).s;
            if (r != s) return t.s = -s, n.minus(t);
            var o = n.e,
                a = n.c,
                u = t.e,
                l = t.c;
            if (!a[0] || !l[0]) return l[0] ? t : new i(a[0] ? n : 0 * r);
            if (a = a.slice(), r = o - u) {
                for (r > 0 ? (u = o, e = l) : (r = -r, e = a), e.reverse(); r--; e.push(0));
                e.reverse()
            }
            for (a.length - l.length < 0 && (e = l, l = a, a = e), r = l.length, s = 0; r;) s = (a[--r] = a[r] + l[r] + s) / 10 | 0, a[r] %= 10;
            for (s && (a.unshift(s), ++u), r = a.length; 0 === a[--r]; a.pop());
            return t.c = a, t.e = u, t
        }, f.pow = function(t) {
            var e = this,
                n = new e.constructor(1),
                i = n,
                r = t < 0;
            for ((t !== ~~t || t < -c || t > c) && s("!pow!"), t = r ? -t : t; 1 & t && (i = i.times(e)), t >>= 1, t;) e = e.times(e);
            return r ? n.div(i) : i
        }, f.round = function(t, e) {
            var n = this,
                i = n.constructor;
            return null == t ? t = 0 : (t !== ~~t || t < 0 || t > l) && s("!round!"), r(n = new i(n), t, null == e ? i.RM : e), n
        }, f.sqrt = function() {
            var t, e, n, i = this,
                o = i.constructor,
                a = i.c,
                u = i.s,
                l = i.e,
                c = new o("0.5");
            if (!a[0]) return new o(i);
            u < 0 && s(NaN), u = Math.sqrt(i.toString()), 0 === u || u === 1 / 0 ? (t = a.join(""), t.length + l & 1 || (t += "0"), e = new o(Math.sqrt(t).toString()), e.e = ((l + 1) / 2 | 0) - (l < 0 || 1 & l)) : e = new o(u.toString()), u = e.e + (o.DP += 4);
            do n = e, e = c.times(n.plus(i.div(n))); while (n.c.slice(0, u).join("") !== e.c.slice(0, u).join(""));
            return r(e, o.DP -= 4, o.RM), e
        }, f.mul = f.times = function(t) {
            var e, n = this,
                i = n.constructor,
                r = n.c,
                s = (t = new i(t)).c,
                o = r.length,
                a = s.length,
                u = n.e,
                l = t.e;
            if (t.s = n.s == t.s ? 1 : -1, !r[0] || !s[0]) return new i(0 * t.s);
            for (t.e = u + l, o < a && (e = r, r = s, s = e, l = o, o = a, a = l), e = new Array(l = o + a); l--; e[l] = 0);
            for (u = a; u--;) {
                for (a = 0, l = o + u; l > u;) a = e[l] + s[u] * r[l - u - 1] + a, e[l--] = a % 10, a = a / 10 | 0;
                e[l] = (e[l] + a) % 10
            }
            for (a && ++t.e, e[0] || e.shift(), u = e.length; !e[--u]; e.pop());
            return t.c = e, t
        }, f.toString = f.valueOf = f.toJSON = function() {
            var t = this,
                e = t.constructor,
                n = t.e,
                i = t.c.join(""),
                r = i.length;
            if (n <= e.E_NEG || n >= e.E_POS) i = i.charAt(0) + (r > 1 ? "." + i.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
            else if (n < 0) {
                for (; ++n; i = "0" + i);
                i = "0." + i
            } else if (n > 0)
                if (++n > r)
                    for (n -= r; n--; i += "0");
                else n < r && (i = i.slice(0, n) + "." + i.slice(n));
            else r > 1 && (i = i.charAt(0) + "." + i.slice(1));
            return t.s < 0 && t.c[0] ? "-" + i : i
        }, f.toExponential = function(t) {
            return null == t ? t = this.c.length - 1 : (t !== ~~t || t < 0 || t > l) && s("!toExp!"), n(this, t, 1)
        }, f.toFixed = function(t) {
            var e, i = this,
                r = i.constructor,
                o = r.E_NEG,
                a = r.E_POS;
            return r.E_NEG = -(r.E_POS = 1 / 0), null == t ? e = i.toString() : t === ~~t && t >= 0 && t <= l && (e = n(i, i.e + t), i.s < 0 && i.c[0] && e.indexOf("-") < 0 && (e = "-" + e)), r.E_NEG = o, r.E_POS = a, e || s("!toFix!"), e
        }, f.toPrecision = function(t) {
            return null == t ? this.toString() : ((t !== ~~t || t < 1 || t > l) && s("!toPre!"), n(this, t - 1, 2))
        }, o = e(), "function" == typeof define && define.amd ? define(function() {
            return o
        }) : "undefined" != typeof module && module.exports ? module.exports = o : t.Big = o
    }(this),
    function(t) {
        "use strict";
        if (t.DOMTokenList) {
            var e = document.createElement("a").classList,
                n = DOMTokenList.prototype,
                i = n.add,
                r = n.remove,
                s = n.toggle;
            e.add("c1", "c2");
            var o = function(t) {
                return function() {
                    var e, n = arguments;
                    for (e = 0; e < n.length; e += 1) t.call(this, n[e])
                }
            };
            e.contains("c2") || (n.add = o(i), n.remove = o(r)), e.toggle("c1", !0) || (n.toggle = function(t, e) {
                return void 0 === e ? s.call(this, t) : ((e ? i : r).call(this, t), !!e)
            })
        }
    }(window),
    function(t) {
        "use strict";
        var e = [],
            n = function(t, n) {
                var i;
                if (e.indexOf) return e.indexOf.call(t, n);
                for (i = 0; i < t.length; i++)
                    if (t[i] === n) return i;
                return -1
            },
            i = function(t) {
                var e = /[\u0009\u000A\u000C\u000D\u0020]/;
                if ("" === t || e.test(t)) throw new Error("Token must not be empty or contain whitespace.")
            },
            r = function(t, e) {
                var n, i = this,
                    r = [];
                if (t && e && (i.element = t, i.prop = e, t[e]))
                    for (r = t[e].replace(/^\s+|\s+$/g, "").split(/\s+/), n = 0; n < r.length; n++) i[n] = r[n];
                i.length = r.length
            };
        r.prototype = {
            add: function() {
                var t, n = this,
                    r = arguments;
                for (t = 0; t < r.length; t++) i(r[t]), n.contains(r[t]) || e.push.call(n, r[t]);
                n.element && (n.element[n.prop] = n)
            },
            contains: function(t) {
                return i(t), n(this, t) !== -1
            },
            item: function(t) {
                return this[t] || null
            },
            remove: function() {
                var t, r, s = arguments,
                    o = this;
                for (r = 0; r < s.length; r++) i(s[r]), t = n(o, s[r]), t !== -1 && e.splice.call(o, t, 1);
                o.element && (o.element[o.prop] = o)
            },
            toggle: function(t, e) {
                var n = this;
                return n.contains(t) ? !!e || (n.remove(t), !1) : e !== !1 && (n.add(t), !0)
            },
            toString: function() {
                return e.join.call(this, " ")
            }
        }, t.DOMTokenList = r
    }(window),
    function() {
        "use strict";
        "classList" in document.createElement("a") && !window.QUnit || Object.defineProperty(Element.prototype, "classList", {
            get: function() {
                return new DOMTokenList(this, "className")
            }
        })
    }(),
    function() {
        "use strict";
        if (!("relList" in document.createElement("a")) || window.QUnit) {
            var t, e = [HTMLAnchorElement, HTMLAreaElement, HTMLLinkElement],
                n = function() {
                    return new DOMTokenList(this, "rel")
                };
            for (t = 0; t < e.length; t++) Object.defineProperty(e[t].prototype, "relList", {
                get: n
            })
        }
    }(),
    function() {
        function t(t) {
            this.tokens = [], this.tokens.links = {}, this.options = t || l.defaults, this.rules = c.normal, this.options.gfm && (this.options.tables ? this.rules = c.tables : this.rules = c.gfm)
        }

        function e(t, e) {
            if (this.options = e || l.defaults, this.links = t, this.rules = h.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
            this.options.gfm ? this.options.breaks ? this.rules = h.breaks : this.rules = h.gfm : this.options.pedantic && (this.rules = h.pedantic)
        }

        function n(t) {
            this.options = t || {}
        }

        function i(t) {
            this.tokens = [], this.token = null, this.options = t || l.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
        }

        function r(t, e) {
            return t.replace(e ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function s(t) {
            return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(t, e) {
                return e = e.toLowerCase(), "colon" === e ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
            })
        }

        function o(t, e) {
            return t = t.source, e = e || "",
                function n(i, r) {
                    return i ? (r = r.source || r, r = r.replace(/(^|[^\[])\^/g, "$1"), t = t.replace(i, r), n) : new RegExp(t, e)
                }
        }

        function a() {}

        function u(t) {
            for (var e, n, i = 1; i < arguments.length; i++) {
                e = arguments[i];
                for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            return t
        }

        function l(e, n, s) {
            if (s || "function" == typeof n) {
                s || (s = n, n = null), n = u({}, l.defaults, n || {});
                var o, a, c = n.highlight,
                    h = 0;
                try {
                    o = t.lex(e, n)
                } catch (p) {
                    return s(p)
                }
                a = o.length;
                var f = function(t) {
                    if (t) return n.highlight = c, s(t);
                    var e;
                    try {
                        e = i.parse(o, n)
                    } catch (r) {
                        t = r
                    }
                    return n.highlight = c, t ? s(t) : s(null, e)
                };
                if (!c || c.length < 3) return f();
                if (delete n.highlight, !a) return f();
                for (; h < o.length; h++) ! function(t) {
                    return "code" !== t.type ? --a || f() : c(t.text, t.lang, function(e, n) {
                        return e ? f(e) : null == n || n === t.text ? --a || f() : (t.text = n, t.escaped = !0, void(--a || f()))
                    })
                }(o[h])
            } else try {
                return n && (n = u({}, l.defaults, n)), i.parse(t.lex(e, n), n)
            } catch (p) {
                if (p.message += "\nPlease report this to https://github.com/chjj/marked.", (n || l.defaults).silent) return "<p>An error occured:</p><pre>" + r(p.message + "", !0) + "</pre>";
                throw p
            }
        }
        var c = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: a,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            nptable: a,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            table: a,
            paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
            text: /^[^\n]+/
        };
        c.bullet = /(?:[*+-]|\d+\.)/, c.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, c.item = o(c.item, "gm")(/bull/g, c.bullet)(), c.list = o(c.list)(/bull/g, c.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + c.def.source + ")")(), c.blockquote = o(c.blockquote)("def", c.def)(), c._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", c.html = o(c.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, c._tag)(), c.paragraph = o(c.paragraph)("hr", c.hr)("heading", c.heading)("lheading", c.lheading)("blockquote", c.blockquote)("tag", "<" + c._tag)("def", c.def)(), c.normal = u({}, c), c.gfm = u({}, c.normal, {
            fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
        }), c.gfm.paragraph = o(c.paragraph)("(?!", "(?!" + c.gfm.fences.source.replace("\\1", "\\2") + "|" + c.list.source.replace("\\1", "\\3") + "|")(), c.tables = u({}, c.gfm, {
            nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
        }), t.rules = c, t.lex = function(e, n) {
            var i = new t(n);
            return i.lex(e)
        }, t.prototype.lex = function(t) {
            return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(t, !0)
        }, t.prototype.token = function(t, e, n) {
            for (var i, r, s, o, a, u, l, h, p, t = t.replace(/^ +$/gm, ""); t;)
                if ((s = this.rules.newline.exec(t)) && (t = t.substring(s[0].length), s[0].length > 1 && this.tokens.push({
                        type: "space"
                    })), s = this.rules.code.exec(t)) t = t.substring(s[0].length), s = s[0].replace(/^ {4}/gm, ""), this.tokens.push({
                    type: "code",
                    text: this.options.pedantic ? s : s.replace(/\n+$/, "")
                });
                else if (s = this.rules.fences.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: "code",
                lang: s[2],
                text: s[3] || ""
            });
            else if (s = this.rules.heading.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: "heading",
                depth: s[1].length,
                text: s[2]
            });
            else if (e && (s = this.rules.nptable.exec(t))) {
                for (t = t.substring(s[0].length), u = {
                        type: "table",
                        header: s[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: s[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: s[3].replace(/\n$/, "").split("\n")
                    }, h = 0; h < u.align.length; h++) /^ *-+: *$/.test(u.align[h]) ? u.align[h] = "right" : /^ *:-+: *$/.test(u.align[h]) ? u.align[h] = "center" : /^ *:-+ *$/.test(u.align[h]) ? u.align[h] = "left" : u.align[h] = null;
                for (h = 0; h < u.cells.length; h++) u.cells[h] = u.cells[h].split(/ *\| */);
                this.tokens.push(u)
            } else if (s = this.rules.lheading.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === s[2] ? 1 : 2,
                text: s[1]
            });
            else if (s = this.rules.hr.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: "hr"
            });
            else if (s = this.rules.blockquote.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: "blockquote_start"
            }), s = s[0].replace(/^ *> ?/gm, ""), this.token(s, e, !0), this.tokens.push({
                type: "blockquote_end"
            });
            else if (s = this.rules.list.exec(t)) {
                for (t = t.substring(s[0].length), o = s[2], this.tokens.push({
                        type: "list_start",
                        ordered: o.length > 1
                    }), s = s[0].match(this.rules.item), i = !1, p = s.length, h = 0; h < p; h++) u = s[h], l = u.length, u = u.replace(/^ *([*+-]|\d+\.) +/, ""), ~u.indexOf("\n ") && (l -= u.length, u = this.options.pedantic ? u.replace(/^ {1,4}/gm, "") : u.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && h !== p - 1 && (a = c.bullet.exec(s[h + 1])[0], o === a || o.length > 1 && a.length > 1 || (t = s.slice(h + 1).join("\n") + t, h = p - 1)), r = i || /\n\n(?!\s*$)/.test(u), h !== p - 1 && (i = "\n" === u.charAt(u.length - 1), r || (r = i)), this.tokens.push({
                    type: r ? "loose_item_start" : "list_item_start"
                }), this.token(u, !1, n), this.tokens.push({
                    type: "list_item_end"
                });
                this.tokens.push({
                    type: "list_end"
                })
            } else if (s = this.rules.html.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: this.options.sanitize ? "paragraph" : "html",
                pre: !this.options.sanitizer && ("pre" === s[1] || "script" === s[1] || "style" === s[1]),
                text: s[0]
            });
            else if (!n && e && (s = this.rules.def.exec(t))) t = t.substring(s[0].length), this.tokens.links[s[1].toLowerCase()] = {
                href: s[2],
                title: s[3]
            };
            else if (e && (s = this.rules.table.exec(t))) {
                for (t = t.substring(s[0].length), u = {
                        type: "table",
                        header: s[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: s[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: s[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                    }, h = 0; h < u.align.length; h++) /^ *-+: *$/.test(u.align[h]) ? u.align[h] = "right" : /^ *:-+: *$/.test(u.align[h]) ? u.align[h] = "center" : /^ *:-+ *$/.test(u.align[h]) ? u.align[h] = "left" : u.align[h] = null;
                for (h = 0; h < u.cells.length; h++) u.cells[h] = u.cells[h].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(u)
            } else if (e && (s = this.rules.paragraph.exec(t))) t = t.substring(s[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === s[1].charAt(s[1].length - 1) ? s[1].slice(0, -1) : s[1]
            });
            else if (s = this.rules.text.exec(t)) t = t.substring(s[0].length), this.tokens.push({
                type: "text",
                text: s[0]
            });
            else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
            return this.tokens
        };
        var h = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
            url: a,
            tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
            code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            del: a,
            text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
        };
        h._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, h._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, h.link = o(h.link)("inside", h._inside)("href", h._href)(), h.reflink = o(h.reflink)("inside", h._inside)(), h.normal = u({}, h), h.pedantic = u({}, h.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
        }), h.gfm = u({}, h.normal, {
            escape: o(h.escape)("])", "~|])")(),
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text: o(h.text)("]|", "~]|")("|", "|https?://|")()
        }), h.breaks = u({}, h.gfm, {
            br: o(h.br)("{2,}", "*")(),
            text: o(h.gfm.text)("{2,}", "*")()
        }), e.rules = h, e.output = function(t, n, i) {
            var r = new e(n, i);
            return r.output(t)
        }, e.prototype.output = function(t) {
            for (var e, n, i, s, o = ""; t;)
                if (s = this.rules.escape.exec(t)) t = t.substring(s[0].length), o += s[1];
                else if (s = this.rules.autolink.exec(t)) t = t.substring(s[0].length), "@" === s[2] ? (n = ":" === s[1].charAt(6) ? this.mangle(s[1].substring(7)) : this.mangle(s[1]), i = this.mangle("mailto:") + n) : (n = r(s[1]), i = n), o += this.renderer.link(i, null, n);
            else if (this.inLink || !(s = this.rules.url.exec(t))) {
                if (s = this.rules.tag.exec(t)) !this.inLink && /^<a /i.test(s[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(s[0]) && (this.inLink = !1), t = t.substring(s[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(s[0]) : r(s[0]) : s[0];
                else if (s = this.rules.link.exec(t)) t = t.substring(s[0].length), this.inLink = !0, o += this.outputLink(s, {
                    href: s[2],
                    title: s[3]
                }), this.inLink = !1;
                else if ((s = this.rules.reflink.exec(t)) || (s = this.rules.nolink.exec(t))) {
                    if (t = t.substring(s[0].length), e = (s[2] || s[1]).replace(/\s+/g, " "), e = this.links[e.toLowerCase()], !e || !e.href) {
                        o += s[0].charAt(0), t = s[0].substring(1) + t;
                        continue
                    }
                    this.inLink = !0, o += this.outputLink(s, e), this.inLink = !1
                } else if (s = this.rules.strong.exec(t)) t = t.substring(s[0].length), o += this.renderer.strong(this.output(s[2] || s[1]));
                else if (s = this.rules.em.exec(t)) t = t.substring(s[0].length), o += this.renderer.em(this.output(s[2] || s[1]));
                else if (s = this.rules.code.exec(t)) t = t.substring(s[0].length), o += this.renderer.codespan(r(s[2], !0));
                else if (s = this.rules.br.exec(t)) t = t.substring(s[0].length), o += this.renderer.br();
                else if (s = this.rules.del.exec(t)) t = t.substring(s[0].length), o += this.renderer.del(this.output(s[1]));
                else if (s = this.rules.text.exec(t)) t = t.substring(s[0].length), o += this.renderer.text(r(this.smartypants(s[0])));
                else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0))
            } else t = t.substring(s[0].length), n = r(s[1]), i = n, o += this.renderer.link(i, null, n);
            return o
        }, e.prototype.outputLink = function(t, e) {
            var n = r(e.href),
                i = e.title ? r(e.title) : null;
            return "!" !== t[0].charAt(0) ? this.renderer.link(n, i, this.output(t[1])) : this.renderer.image(n, i, r(t[1]))
        }, e.prototype.smartypants = function(t) {
            return this.options.smartypants ? t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : t
        }, e.prototype.mangle = function(t) {
            if (!this.options.mangle) return t;
            for (var e, n = "", i = t.length, r = 0; r < i; r++) e = t.charCodeAt(r), Math.random() > .5 && (e = "x" + e.toString(16)), n += "&#" + e + ";";
            return n
        }, n.prototype.code = function(t, e, n) {
            if (this.options.highlight) {
                var i = this.options.highlight(t, e);
                null != i && i !== t && (n = !0, t = i)
            }
            return e ? '<pre><code class="' + this.options.langPrefix + r(e, !0) + '">' + (n ? t : r(t, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? t : r(t, !0)) + "\n</code></pre>"
        }, n.prototype.blockquote = function(t) {
            return "<blockquote>\n" + t + "</blockquote>\n"
        }, n.prototype.html = function(t) {
            return t
        }, n.prototype.heading = function(t, e, n) {
            return "<h" + e + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + t + "</h" + e + ">\n"
        }, n.prototype.hr = function() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
        }, n.prototype.list = function(t, e) {
            var n = e ? "ol" : "ul";
            return "<" + n + ">\n" + t + "</" + n + ">\n"
        }, n.prototype.listitem = function(t) {
            return "<li>" + t + "</li>\n"
        }, n.prototype.paragraph = function(t) {
            return "<p>" + t + "</p>\n"
        }, n.prototype.table = function(t, e) {
            return "<table>\n<thead>\n" + t + "</thead>\n<tbody>\n" + e + "</tbody>\n</table>\n"
        }, n.prototype.tablerow = function(t) {
            return "<tr>\n" + t + "</tr>\n"
        }, n.prototype.tablecell = function(t, e) {
            var n = e.header ? "th" : "td",
                i = e.align ? "<" + n + ' style="text-align:' + e.align + '">' : "<" + n + ">";
            return i + t + "</" + n + ">\n"
        }, n.prototype.strong = function(t) {
            return "<strong>" + t + "</strong>"
        }, n.prototype.em = function(t) {
            return "<em>" + t + "</em>"
        }, n.prototype.codespan = function(t) {
            return "<code>" + t + "</code>"
        }, n.prototype.br = function() {
            return this.options.xhtml ? "<br/>" : "<br>"
        }, n.prototype.del = function(t) {
            return "<del>" + t + "</del>"
        }, n.prototype.link = function(t, e, n) {
            if (this.options.sanitize) {
                try {
                    var i = decodeURIComponent(s(t)).replace(/[^\w:]/g, "").toLowerCase()
                } catch (r) {
                    return ""
                }
                if (0 === i.indexOf("javascript:") || 0 === i.indexOf("vbscript:")) return ""
            }
            var o = '<a href="' + t + '"';
            return e && (o += ' title="' + e + '"'), o += ">" + n + "</a>"
        }, n.prototype.image = function(t, e, n) {
            var i = '<img src="' + t + '" alt="' + n + '"';
            return e && (i += ' title="' + e + '"'), i += this.options.xhtml ? "/>" : ">"
        }, n.prototype.text = function(t) {
            return t
        }, i.parse = function(t, e, n) {
            var r = new i(e, n);
            return r.parse(t)
        }, i.prototype.parse = function(t) {
            this.inline = new e(t.links, this.options, this.renderer), this.tokens = t.reverse();
            for (var n = ""; this.next();) n += this.tok();
            return n
        }, i.prototype.next = function() {
            return this.token = this.tokens.pop()
        }, i.prototype.peek = function() {
            return this.tokens[this.tokens.length - 1] || 0
        }, i.prototype.parseText = function() {
            for (var t = this.token.text;
                "text" === this.peek().type;) t += "\n" + this.next().text;
            return this.inline.output(t)
        }, i.prototype.tok = function() {
            switch (this.token.type) {
                case "space":
                    return "";
                case "hr":
                    return this.renderer.hr();
                case "heading":
                    return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                case "code":
                    return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                case "table":
                    var t, e, n, i, r, s = "",
                        o = "";
                    for (n = "", t = 0; t < this.token.header.length; t++) i = {
                        header: !0,
                        align: this.token.align[t]
                    }, n += this.renderer.tablecell(this.inline.output(this.token.header[t]), {
                        header: !0,
                        align: this.token.align[t]
                    });
                    for (s += this.renderer.tablerow(n), t = 0; t < this.token.cells.length; t++) {
                        for (e = this.token.cells[t], n = "", r = 0; r < e.length; r++) n += this.renderer.tablecell(this.inline.output(e[r]), {
                            header: !1,
                            align: this.token.align[r]
                        });
                        o += this.renderer.tablerow(n)
                    }
                    return this.renderer.table(s, o);
                case "blockquote_start":
                    for (var o = "";
                        "blockquote_end" !== this.next().type;) o += this.tok();
                    return this.renderer.blockquote(o);
                case "list_start":
                    for (var o = "", a = this.token.ordered;
                        "list_end" !== this.next().type;) o += this.tok();
                    return this.renderer.list(o, a);
                case "list_item_start":
                    for (var o = "";
                        "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
                    return this.renderer.listitem(o);
                case "loose_item_start":
                    for (var o = "";
                        "list_item_end" !== this.next().type;) o += this.tok();
                    return this.renderer.listitem(o);
                case "html":
                    var u = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                    return this.renderer.html(u);
                case "paragraph":
                    return this.renderer.paragraph(this.inline.output(this.token.text));
                case "text":
                    return this.renderer.paragraph(this.parseText())
            }
        }, a.exec = a, l.options = l.setOptions = function(t) {
            return u(l.defaults, t), l
        }, l.defaults = {
            gfm: !0,
            tables: !0,
            breaks: !1,
            pedantic: !1,
            sanitize: !1,
            sanitizer: null,
            mangle: !0,
            smartLists: !1,
            silent: !1,
            highlight: null,
            langPrefix: "lang-",
            smartypants: !1,
            headerPrefix: "",
            renderer: new n,
            xhtml: !1
        }, l.Parser = i, l.parser = i.parse, l.Renderer = n, l.Lexer = t, l.lexer = t.lex, l.InlineLexer = e, l.inlineLexer = e.output, l.parse = l, "undefined" != typeof module && "object" == typeof exports ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : this.marked = l
    }.call(function() {
        return this || ("undefined" != typeof window ? window : global)
    }()),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.written = e()
    }(this, function() {
        var t, e, n, i, r, s, o, a, u, l, c, h, p, f, d, g, v, m, y, x, w, b, S, k, E, _;
        return o = {
            EN: {
                noncaps: /^(an|and|as|at|be|but|by|has|in|if|nor|of|off|on|or|out|per|the|to|up|was)$/,
                cardinals: {
                    written: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
                },
                ordinals: {
                    written: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"],
                    rule: /((1{0,1}[123])|(\d))\b/,
                    suffixes: {
                        1: "st",
                        2: "nd",
                        3: "rd",
                        n: "th"
                    }
                }
            }
        }, e = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, n = function(t, n) {
            var i, r;
            return null == n && (n = o.EN.noncaps), "[object RegExp]" !== Object.prototype.toString.call(n) && (n = o[n].noncaps),
                function() {
                    var s, o, a, u;
                    for (a = t.split(/\s/g), u = [], i = s = 0, o = a.length; s < o; i = ++s) r = a[i], i > 0 && n.test(r) ? u.push(r) : u.push(e(r));
                    return u
                }().join(" ")
        }, a = function(t, e, n) {
            return "" + t + e + (n || t)
        }, r = function(t, e) {
            var n;
            return null == e && (e = ""),
                function() {
                    var e, i, r;
                    for (r = [], e = 0, i = t.length; e < i; e++) n = t[e], n && "string" == typeof n && r.push(n);
                    return r
                }().join(e)
        }, s = function(t) {
            return t.replace(/\s+/g, " ")
        }, i = /[-_\s]+|(!?[A-Z][a-z]*)/g, t = function(t) {
            var n, s;
            return r(function() {
                var r, o, a, u;
                for (a = t.split(i), u = [], n = r = 0, o = a.length; r < o; n = ++r) s = a[n], s && (0 === n ? u.push(s) : u.push(e(s)));
                return u
            }()), t.replace(/[\s_-]+(\w)/g, function(t, e) {
                return e.toUpperCase()
            })
        }, p = function(t, e) {
            return (e ? "-" : "") + r(t.split(i), "-").toLowerCase()
        }, S = function(t) {
            return r(t.split(i), "_").toLowerCase()
        }, h = function(t) {
            return r(t.split(i), " ")
        }, k = function(t, e, n) {
            var i, r, s;
            return null == e && (e = "span"), null == n && (n = {}), i = function() {
                var t;
                t = [];
                for (r in n) s = n[r], s && ("boolean" == typeof s && (s = r), "function" == typeof s.join && (s = s.join(" ")), t.push(" " + r + '="' + s + '"'));
                return t
            }(), a("<" + e + i.join("") + ">", t, "</" + e + ">")
        }, v = function(t, e, n) {
            var i, r, s, o, a, u;
            return null == n && (n = {}), o = n.more || "more", i = n.amp || "and", n.key && (t = function() {
                var e, i, r;
                for (r = [], e = 0, i = t.length; e < i; e++) a = t[e], "object" == typeof a && r.push(a[n.key]);
                return r
            }()), n.wrap && (t = function() {
                var e, i, r;
                for (r = [], e = 0, i = t.length; e < i; e++) u = t[e], r.push(k(u, n.wrap));
                return r
            }()), e < (s = t.length) && (r = s - e, n.quantify && (o = x(o, r, {
                numberless: !0
            })), n.written && (r = _(r, n.lang)), t = t.slice(0, e), t = t.concat(r + " " + o)), t.slice(0, -1).join(", ").concat(1 === t.length ? "" : " " + i + " ", t.slice(-1))
        }, f = function(t, e, n) {
            return null == t && (t = ""), null == e && (e = 10), null == n && (n = "­"), t.replace(new RegExp("(\\w{" + (e - 1) + "})(\\w)", "g"), function(t, e, i) {
                return e + n + i
            })
        }, x = function(t, e, n) {
            var i, r, s, o, a, u, l, c;
            return o = null != n ? n : {}, r = o.numberless, c = o.written, i = o.lang, s = o.plural, "string" != typeof t && (a = [t, e], e = a[0], t = a[1]), e = null != (u = e.length) ? u : e, l = 1 === e ? t : s || t + "s", c && (e = _(e, i)), e = r ? "" : e + " ", e + l
        }, _ = function(t, e, n) {
            var i, r;
            return null == e && (e = "EN"), null == n && (n = "m"), (i = null != (r = o[e]) ? r.cardinals.written[t - 1] : void 0) ? i[n] && i[n] || i : t
        }, w = function(t, e) {
            var n, i, r;
            return i = function() {
                switch (e) {
                    case "s":
                    case "single":
                        return ["‘", "’"];
                    case "a":
                    case "angle":
                    case "g":
                    case "guillemets":
                        return ["«", "»"];
                    case "!":
                        return ["¡", "!"];
                    case "?":
                        return ["¿", "?"];
                    default:
                        return ["“", "”"]
                }
            }(), n = i[0], r = i[1], a(n, t, r)
        }, d = function(t, e, n) {
            var i, r, s, a, u, l, c;
            return null == e && (e = {}), null == n && (n = "m"), r = o[e.lang || "EN"].ordinals, u = r.suffixes, s = r.rule, c = r.written, i = t.toString().match(s)[0], null != e.written && (l = c[+t - 1]) ? l[n] || l : (a = u[i] || u.n, a = a[n] || a, e.wrap && !l && ("boolean" == typeof e.wrap && (e.wrap = "sup"), a = k(a, e.wrap)), t + a)
        }, m = function(t, e, n, i) {
            return null == e && (e = ","), null == n && (n = 0), null == i && (i = "."), "number" == typeof e && (n = e), t = g(t), n > 0 && (t = t.toFixed(n)), i && (t = t.toString().replace(".", i)), t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e)
        }, y = function(t, e) {
            var n, i, r, s, o, a, u, l;
            return "object" == typeof e && (a = e, e = a.currency, l = a.wrap, n = a.decimals, i = a.delimiter, r = a.dot), null == e && (e = "$"), null == n && (n = 2), null == r && (r = "."), t = m(t, i, n, r), l && (u = t.split(r), o = u[0], s = u[1], t = o + k(s, l)), e + t
        }, g = function(t) {
            return "string" == typeof t && (t = t.replace(/[^\d\.]+/g, "") / ("%" === t.slice(-1) ? 100 : 1)), t <= 1 / 0 ? t : -1
        }, u = function(t, e) {
            return Array.apply(0, {
                length: e - t + 1
            }).map(function(e, n) {
                return n + t
            })
        }, c = function(t) {
            var e, n, i, r;
            for (null == t && (t = {}), r = u(161, 255).concat(u(338, 402)).concat(u(8211, 8230)).concat([8240, 8364, 8482]), n = 0, i = r.length; n < i; n++) e = r[n], t[e] = String.fromCharCode(e);
            return t
        }, l = function(t) {
            return a("&#", t.charCodeAt(0), ";")
        }, b = function(t, e) {
            return o[e] = t
        }, E = {
            camelCase: t,
            capitalize: e,
            capitalizeAll: n,
            cleanJoin: r,
            collapse: s,
            count: x,
            dasherize: p,
            dashify: p,
            enclose: a,
            glyph: l,
            glyphs: c,
            humanCase: h,
            hyphenate: f,
            hyphenCase: p,
            numerate: x,
            ordinal: d,
            parseNumber: g,
            prettyList: v,
            prettyNumber: m,
            prettyPrice: y,
            quantify: x,
            quote: w,
            setLanguage: b,
            slugify: S,
            snakeCase: S,
            titleCase: n,
            underscore: S,
            wrapInTag: k,
            writtenNumber: _
        }
    }),
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.jade = t()
        }
    }(function() {
        return function t(e, n, i) {
            function r(o, a) {
                if (!n[o]) {
                    if (!e[o]) {
                        var u = "function" == typeof require && require;
                        if (!a && u) return u(o, !0);
                        if (s) return s(o, !0);
                        var l = new Error("Cannot find module '" + o + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var c = n[o] = {
                        exports: {}
                    };
                    e[o][0].call(c.exports, function(t) {
                        var n = e[o][1][t];
                        return r(n ? n : t)
                    }, c, c.exports, t, e, n, i)
                }
                return n[o].exports
            }
            for (var s = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
            return r
        }({
            1: [function(t, e, n) {
                "use strict";

                function i(t) {
                    return null != t && "" !== t
                }

                function r(t) {
                    return (Array.isArray(t) ? t.map(r) : t && "object" == typeof t ? Object.keys(t).filter(function(e) {
                        return t[e]
                    }) : [t]).filter(i).join(" ")
                }

                function s(t) {
                    return a[t] || t
                }

                function o(t) {
                    var e = String(t).replace(u, s);
                    return e === "" + t ? t : e
                }
                n.merge = function l(t, e) {
                    if (1 === arguments.length) {
                        for (var n = t[0], r = 1; r < t.length; r++) n = l(n, t[r]);
                        return n
                    }
                    var s = t["class"],
                        o = e["class"];
                    (s || o) && (s = s || [], o = o || [], Array.isArray(s) || (s = [s]), Array.isArray(o) || (o = [o]), t["class"] = s.concat(o).filter(i));
                    for (var a in e) "class" != a && (t[a] = e[a]);
                    return t
                }, n.joinClasses = r, n.cls = function(t, e) {
                    for (var i = [], s = 0; s < t.length; s++) e && e[s] ? i.push(n.escape(r([t[s]]))) : i.push(r(t[s]));
                    var o = r(i);
                    return o.length ? ' class="' + o + '"' : ""
                }, n.style = function(t) {
                    return t && "object" == typeof t ? Object.keys(t).map(function(e) {
                        return e + ":" + t[e]
                    }).join(";") : t
                }, n.attr = function(t, e, i, r) {
                    return "style" === t && (e = n.style(e)), "boolean" == typeof e || null == e ? e ? " " + (r ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof e ? (JSON.stringify(e).indexOf("&") !== -1 && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"), e && "function" == typeof e.toISOString && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"), " " + t + "='" + JSON.stringify(e).replace(/'/g, "&apos;") + "'") : i ? (e && "function" == typeof e.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + t + '="' + n.escape(e) + '"') : (e && "function" == typeof e.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + t + '="' + e + '"')
                }, n.attrs = function(t, e) {
                    var i = [],
                        s = Object.keys(t);
                    if (s.length)
                        for (var o = 0; o < s.length; ++o) {
                            var a = s[o],
                                u = t[a];
                            "class" == a ? (u = r(u)) && i.push(" " + a + '="' + u + '"') : i.push(n.attr(a, u, !1, e))
                        }
                    return i.join("")
                };
                var a = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;"
                    },
                    u = /[&<>"]/g;
                n.escape = o, n.rethrow = function c(e, n, i, r) {
                    if (!(e instanceof Error)) throw e;
                    if (!("undefined" == typeof window && n || r)) throw e.message += " on line " + i, e;
                    try {
                        r = r || t("fs").readFileSync(n, "utf8")
                    } catch (s) {
                        c(e, null, i)
                    }
                    var o = 3,
                        a = r.split("\n"),
                        u = Math.max(i - o, 0),
                        l = Math.min(a.length, i + o),
                        o = a.slice(u, l).map(function(t, e) {
                            var n = e + u + 1;
                            return (n == i ? "  > " : "    ") + n + "| " + t
                        }).join("\n");
                    throw e.path = n, e.message = (n || "Jade") + ":" + i + "\n" + o + "\n\n" + e.message, e
                }, n.DebugItem = function(t, e) {
                    this.lineno = t, this.filename = e
                }
            }, {
                fs: 2
            }],
            2: [function(t, e, n) {}, {}]
        }, {}, [1])(1)
    });
var pipwerks = {};
if (pipwerks.UTILS = {}, pipwerks.debug = {
        isActive: !0
    }, pipwerks.SCORM = {
        version: null,
        handleCompletionStatus: !0,
        handleExitMode: !0,
        API: {
            handle: null,
            isFound: !1
        },
        connection: {
            isActive: !1
        },
        data: {
            completionStatus: null,
            exitStatus: null
        },
        debug: {}
    }, pipwerks.SCORM.isAvailable = function() {
        return !0
    }, pipwerks.SCORM.API.find = function(t) {
        for (var e = null, n = 0, i = 500, r = "SCORM.API.find", s = pipwerks.UTILS.trace, o = pipwerks.SCORM; !t.API && !t.API_1484_11 && t.parent && t.parent != t && n <= i;) n++,
            t = t.parent;
        if (o.version) switch (o.version) {
            case "2004":
                t.API_1484_11 ? e = t.API_1484_11 : s(r + ": SCORM version 2004 was specified by user, but API_1484_11 cannot be found.");
                break;
            case "1.2":
                t.API ? e = t.API : s(r + ": SCORM version 1.2 was specified by user, but API cannot be found.")
        } else t.API_1484_11 ? (o.version = "2004", e = t.API_1484_11) : t.API && (o.version = "1.2", e = t.API);
        return e ? (s(r + ": API found. Version: " + o.version), s("API: " + e)) : s(r + ": Error finding API. \nFind attempts: " + n + ". \nFind attempt limit: " + i), e
    }, pipwerks.SCORM.API.get = function() {
        var t = null,
            e = window,
            n = pipwerks.SCORM,
            i = n.API.find,
            r = pipwerks.UTILS.trace;
        return t = i(e), !t && e.parent && e.parent != e && (t = i(e.parent)), !t && e.top && e.top.opener && (t = i(e.top.opener)), !t && e.top && e.top.opener && e.top.opener.document && (t = i(e.top.opener.document)), t ? n.API.isFound = !0 : r("API.get failed: Can't find the API!"), t
    }, pipwerks.SCORM.API.getHandle = function() {
        var t = pipwerks.SCORM.API;
        return t.handle || t.isFound || (t.handle = t.get()), t.handle
    }, pipwerks.SCORM.connection.initialize = function() {
        var t = !1,
            e = pipwerks.SCORM,
            n = e.data.completionStatus,
            i = pipwerks.UTILS.trace,
            r = pipwerks.UTILS.StringToBoolean,
            s = e.debug,
            o = "SCORM.connection.initialize ";
        if (i("connection.initialize called."), e.connection.isActive) i(o + "aborted: Connection already active.");
        else {
            var a = e.API.getHandle(),
                u = 0;
            if (a) {
                switch (e.version) {
                    case "1.2":
                        t = r(a.LMSInitialize(""));
                        break;
                    case "2004":
                        t = r(a.Initialize(""))
                }
                if (t)
                    if (u = s.getCode(), null !== u && 0 === u) {
                        if (e.connection.isActive = !0, e.handleCompletionStatus && (n = e.status("get"))) {
                            switch (n) {
                                case "not attempted":
                                    e.status("set", "incomplete");
                                    break;
                                case "unknown":
                                    e.status("set", "incomplete")
                            }
                            e.save()
                        }
                    } else t = !1, i(o + "failed. \nError code: " + u + " \nError info: " + s.getInfo(u));
                else u = s.getCode(), i(null !== u && 0 !== u ? o + "failed. \nError code: " + u + " \nError info: " + s.getInfo(u) : o + "failed: No response from server.")
            } else i(o + "failed: API is null.")
        }
        return t
    }, pipwerks.SCORM.connection.terminate = function() {
        var t = !1,
            e = pipwerks.SCORM,
            n = e.data.exitStatus,
            i = e.data.completionStatus,
            r = pipwerks.UTILS.trace,
            s = pipwerks.UTILS.StringToBoolean,
            o = e.debug,
            a = "SCORM.connection.terminate ";
        if (e.connection.isActive) {
            var u = e.API.getHandle(),
                l = 0;
            if (u) {
                if (e.handleExitMode && !n)
                    if ("completed" !== i && "passed" !== i) switch (e.version) {
                        case "1.2":
                            t = e.set("cmi.core.exit", "suspend");
                            break;
                        case "2004":
                            t = e.set("cmi.exit", "suspend")
                    } else switch (e.version) {
                        case "1.2":
                            t = e.set("cmi.core.exit", "logout");
                            break;
                        case "2004":
                            t = e.set("cmi.exit", "normal")
                    }
                    if (t = e.save()) {
                        switch (e.version) {
                            case "1.2":
                                t = s(u.LMSFinish(""));
                                break;
                            case "2004":
                                t = s(u.Terminate(""))
                        }
                        t ? e.connection.isActive = !1 : (l = o.getCode(), r(a + "failed. \nError code: " + l + " \nError info: " + o.getInfo(l)))
                    }
            } else r(a + "failed: API is null.")
        } else r(a + "aborted: Connection already terminated.");
        return t
    }, pipwerks.SCORM.data.get = function(t) {
        var e = null,
            n = pipwerks.SCORM,
            i = pipwerks.UTILS.trace,
            r = n.debug,
            s = "SCORM.data.get('" + t + "') ";
        if (n.connection.isActive) {
            var o = n.API.getHandle(),
                a = 0;
            if (o) {
                switch (n.version) {
                    case "1.2":
                        e = o.LMSGetValue(t);
                        break;
                    case "2004":
                        e = o.GetValue(t)
                }
                if (a = r.getCode(), "" !== e || 0 === a) switch (t) {
                    case "cmi.core.lesson_status":
                    case "cmi.completion_status":
                        n.data.completionStatus = e;
                        break;
                    case "cmi.core.exit":
                    case "cmi.exit":
                        n.data.exitStatus = e
                } else i(s + "failed. \nError code: " + a + "\nError info: " + r.getInfo(a))
            } else i(s + "failed: API is null.")
        } else i(s + "failed: API connection is inactive.");
        return i(s + " value: " + e), String(e)
    }, pipwerks.SCORM.data.set = function(t, e) {
        var n = !1,
            i = pipwerks.SCORM,
            r = pipwerks.UTILS.trace,
            s = pipwerks.UTILS.StringToBoolean,
            o = i.debug,
            a = "SCORM.data.set('" + t + "') ";
        if (i.connection.isActive) {
            var u = i.API.getHandle(),
                l = 0;
            if (u) {
                switch (i.version) {
                    case "1.2":
                        n = s(u.LMSSetValue(t, e));
                        break;
                    case "2004":
                        n = s(u.SetValue(t, e))
                }
                n ? "cmi.core.lesson_status" !== t && "cmi.completion_status" !== t || (i.data.completionStatus = e) : (l = o.getCode(), r(a + "failed. \nError code: " + l + ". \nError info: " + o.getInfo(l)))
            } else r(a + "failed: API is null.")
        } else r(a + "failed: API connection is inactive.");
        return r(a + " value: " + e), n
    }, pipwerks.SCORM.data.save = function() {
        var t = !1,
            e = pipwerks.SCORM,
            n = pipwerks.UTILS.trace,
            i = pipwerks.UTILS.StringToBoolean,
            r = "SCORM.data.save failed";
        if (e.connection.isActive) {
            var s = e.API.getHandle();
            if (s) switch (e.version) {
                case "1.2":
                    t = i(s.LMSCommit(""));
                    break;
                case "2004":
                    t = i(s.Commit(""))
            } else n(r + ": API is null.")
        } else n(r + ": API connection is inactive.");
        return t
    }, pipwerks.SCORM.status = function(t, e) {
        var n = !1,
            i = pipwerks.SCORM,
            r = pipwerks.UTILS.trace,
            s = "SCORM.getStatus failed",
            o = "";
        if (null !== t) {
            switch (i.version) {
                case "1.2":
                    o = "cmi.core.lesson_status";
                    break;
                case "2004":
                    o = "cmi.completion_status"
            }
            switch (t) {
                case "get":
                    n = i.data.get(o);
                    break;
                case "set":
                    null !== e ? n = i.data.set(o, e) : (n = !1, r(s + ": status was not specified."));
                    break;
                default:
                    n = !1, r(s + ": no valid action was specified.")
            }
        } else r(s + ": action was not specified.");
        return n
    }, pipwerks.SCORM.debug.getCode = function() {
        var t = pipwerks.SCORM,
            e = t.API.getHandle(),
            n = pipwerks.UTILS.trace,
            i = 0;
        if (e) switch (t.version) {
            case "1.2":
                i = parseInt(e.LMSGetLastError(), 10);
                break;
            case "2004":
                i = parseInt(e.GetLastError(), 10)
        } else n("SCORM.debug.getCode failed: API is null.");
        return i
    }, pipwerks.SCORM.debug.getInfo = function(t) {
        var e = pipwerks.SCORM,
            n = e.API.getHandle(),
            i = pipwerks.UTILS.trace,
            r = "";
        if (n) switch (e.version) {
            case "1.2":
                r = n.LMSGetErrorString(t.toString());
                break;
            case "2004":
                r = n.GetErrorString(t.toString())
        } else i("SCORM.debug.getInfo failed: API is null.");
        return String(r)
    }, pipwerks.SCORM.debug.getDiagnosticInfo = function(t) {
        var e = pipwerks.SCORM,
            n = e.API.getHandle(),
            i = pipwerks.UTILS.trace,
            r = "";
        if (n) switch (e.version) {
            case "1.2":
                r = n.LMSGetDiagnostic(t);
                break;
            case "2004":
                r = n.GetDiagnostic(t)
        } else i("SCORM.debug.getDiagnosticInfo failed: API is null.");
        return String(r)
    }, pipwerks.SCORM.init = pipwerks.SCORM.connection.initialize, pipwerks.SCORM.get = pipwerks.SCORM.data.get, pipwerks.SCORM.set = pipwerks.SCORM.data.set, pipwerks.SCORM.save = pipwerks.SCORM.data.save, pipwerks.SCORM.quit = pipwerks.SCORM.connection.terminate, pipwerks.UTILS.StringToBoolean = function(t) {
        var e = typeof t;
        switch (e) {
            case "object":
            case "string":
                return /(true|1)/i.test(t);
            case "number":
                return !!t;
            case "boolean":
                return t;
            case "undefined":
                return null;
            default:
                return !1
        }
    }, pipwerks.UTILS.trace = function(t) {
        pipwerks.debug.isActive && window.console && window.console.log && window.console.log(t)
    }, "undefined" == typeof eventjs) var eventjs = {};
if (function(t) {
        "use strict";
        t.modifyEventListener = !1, t.modifySelectors = !1, t.configure = function(e) {
            isFinite(e.modifyEventListener) && (t.modifyEventListener = e.modifyEventListener), isFinite(e.modifySelectors) && (t.modifySelectors = e.modifySelectors), f === !1 && t.modifyEventListener && d(), g === !1 && t.modifySelectors && v()
        }, t.add = function(t, e, i, r) {
            return n(t, e, i, r, "add")
        }, t.remove = function(t, e, i, r) {
            return n(t, e, i, r, "remove")
        }, t.returnFalse = function(t) {
            return !1
        }, t.stop = function(t) {
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0, t.cancelBubbleCount = 0)
        }, t.prevent = function(t) {
            t && (t.preventDefault ? t.preventDefault() : t.preventManipulation ? t.preventManipulation() : t.returnValue = !1)
        }, t.cancel = function(e) {
            t.stop(e), t.prevent(e)
        }, t.blur = function() {
            var t = document.activeElement;
            if (t) {
                var e = document.activeElement.nodeName;
                "INPUT" !== e && "TEXTAREA" !== e && "true" !== t.contentEditable || t.blur && t.blur()
            }
        }, t.getEventSupport = function(t, e) {
            if ("string" == typeof t && (e = t, t = window), e = "on" + e, e in t) return !0;
            if (t.setAttribute || (t = document.createElement("div")), t.setAttribute && t.removeAttribute) {
                t.setAttribute(e, "");
                var n = "function" == typeof t[e];
                return "undefined" != typeof t[e] && (t[e] = null), t.removeAttribute(e), n
            }
        };
        var e = function(t) {
                if (!t || "object" != typeof t) return t;
                var n = new t.constructor;
                for (var i in t) t[i] && "object" == typeof t[i] ? n[i] = e(t[i]) : n[i] = t[i];
                return n
            },
            n = function(s, o, l, f, d, g) {
                if (f = f || {}, "[object Object]" === String(s)) {
                    var v = s;
                    if (s = v.target, delete v.target, !v.type || !v.listener) {
                        for (var m in v) {
                            var y = v[m];
                            "function" != typeof y && (f[m] = y)
                        }
                        var x = {};
                        for (var w in v) {
                            var m = w.split(","),
                                b = v[w],
                                S = {};
                            for (var k in f) S[k] = f[k];
                            if ("function" == typeof b) var l = b;
                            else {
                                if ("function" != typeof b.listener) continue;
                                var l = b.listener;
                                for (var k in b) "function" != typeof b[k] && (S[k] = b[k])
                            }
                            for (var E = 0; E < m.length; E++) x[w] = eventjs.add(s, m[E], l, S, d)
                        }
                        return x
                    }
                    o = v.type, delete v.type, l = v.listener, delete v.listener;
                    for (var w in v) f[w] = v[w]
                }
                if (s && o && l) {
                    if ("string" == typeof s && "ready" === o) {
                        if (!window.eventjs_stallOnReady) {
                            var _ = (new Date).getTime(),
                                j = f.timeout,
                                P = f.interval || 1e3 / 60,
                                T = window.setInterval(function() {
                                    (new Date).getTime() - _ > j && window.clearInterval(T), document.querySelector(s) && (window.clearInterval(T), setTimeout(function() {
                                        l()
                                    }, 1))
                                }, P);
                            return
                        }
                        o = "load", s = window
                    }
                    if ("string" == typeof s) {
                        if (s = document.querySelectorAll(s), 0 === s.length) return r("Missing target on listener!", arguments);
                        1 === s.length && (s = s[0])
                    }
                    var M, A = {};
                    if (s.length > 0 && s !== window) {
                        for (var C = 0, O = s.length; C < O; C++) M = n(s[C], o, l, e(f), d), M && (A[C] = M);
                        return i(A)
                    }
                    if ("string" == typeof o && (o = o.toLowerCase(), o.indexOf(" ") !== -1 ? o = o.split(" ") : o.indexOf(",") !== -1 && (o = o.split(","))), "string" != typeof o) {
                        if ("number" == typeof o.length)
                            for (var X = 0, L = o.length; X < L; X++) M = n(s, o[X], l, e(f), d), M && (A[o[X]] = M);
                        else
                            for (var w in o) M = "function" == typeof o[w] ? n(s, w, o[w], e(f), d) : n(s, w, o[w].listener, e(o[w]), d), M && (A[w] = M);
                        return i(A)
                    }
                    if (0 === o.indexOf("on") && (o = o.substr(2)), "object" != typeof s) return r("Target is not defined!", arguments);
                    if ("function" != typeof l) return r("Listener is not a function!", arguments);
                    var Y = f.useCapture || !1,
                        I = c(s) + "." + c(l) + "." + (Y ? 1 : 0);
                    if (t.Gesture && t.Gesture._gestureHandlers[o]) {
                        if (I = o + I, "remove" === d) {
                            if (!u[I]) return;
                            u[I].remove(), delete u[I]
                        } else if ("add" === d) {
                            if (u[I]) return u[I].add(), u[I];
                            if (f.useCall && !t.modifyEventListener) {
                                var D = l;
                                l = function(t, e) {
                                    for (var n in e) t[n] = e[n];
                                    return D.call(s, t)
                                }
                            }
                            f.gesture = o, f.target = s, f.listener = l, f.fromOverwrite = g, u[I] = t.proxy[o](f)
                        }
                        return u[I]
                    }
                    for (var H, R = a(o), E = 0; E < R.length; E++)
                        if (o = R[E], H = o + "." + I, "remove" === d) {
                            if (!u[H]) continue;
                            s[p](o, l, Y), delete u[H]
                        } else if ("add" === d) {
                        if (u[H]) return u[H];
                        s[h](o, l, Y), u[H] = {
                            id: H,
                            type: o,
                            target: s,
                            listener: l,
                            remove: function() {
                                for (var e = 0; e < R.length; e++) t.remove(s, R[e], l, f)
                            }
                        }
                    }
                    return u[H]
                }
            },
            i = function(t) {
                return {
                    remove: function() {
                        for (var e in t) t[e].remove()
                    },
                    add: function() {
                        for (var e in t) t[e].add()
                    }
                }
            },
            r = function(t, e) {
                "undefined" != typeof console && "undefined" != typeof console.error && console.error(t, e)
            },
            s = {
                msPointer: ["MSPointerDown", "MSPointerMove", "MSPointerUp"],
                touch: ["touchstart", "touchmove", "touchend"],
                mouse: ["mousedown", "mousemove", "mouseup"]
            },
            o = {
                MSPointerDown: 0,
                MSPointerMove: 1,
                MSPointerUp: 2,
                touchstart: 0,
                touchmove: 1,
                touchend: 2,
                mousedown: 0,
                mousemove: 1,
                mouseup: 2
            },
            a = (function() {
                t.supports = {}, window.navigator.msPointerEnabled && (t.supports.msPointer = !0), t.getEventSupport("touchstart") && (t.supports.touch = !0), t.getEventSupport("mousedown") && (t.supports.mouse = !0)
            }(), function() {
                return function(e) {
                    var n = document.addEventListener ? "" : "on",
                        i = o[e];
                    if (isFinite(i)) {
                        var r = [];
                        for (var a in t.supports) r.push(n + s[a][i]);
                        return r
                    }
                    return [n + e]
                }
            }()),
            u = {},
            l = 0,
            c = function(t) {
                return t === window ? "#window" : t === document ? "#document" : (t.uniqueID || (t.uniqueID = "e" + l++), t.uniqueID)
            },
            h = document.addEventListener ? "addEventListener" : "attachEvent",
            p = document.removeEventListener ? "removeEventListener" : "detachEvent";
        t.createPointerEvent = function(e, n, i) {
            var r = n.gesture,
                s = n.target,
                o = e.changedTouches || t.proxy.getCoords(e);
            if (o.length) {
                var a = o[0];
                n.pointers = i ? [] : o, n.pageX = a.pageX, n.pageY = a.pageY, n.x = n.pageX, n.y = n.pageY
            }
            var u = document.createEvent("Event");
            u.initEvent(r, !0, !0), u.originalEvent = e;
            for (var l in n) "target" !== l && (u[l] = n[l]);
            var c = u.type;
            t.Gesture && t.Gesture._gestureHandlers[c] && n.oldListener.call(s, u, n, !1)
        };
        var f = !1,
            d = function() {
                if (window.HTMLElement) {
                    var e = function(e) {
                        var i = function(i) {
                            var r = i + "EventListener",
                                s = e[r];
                            e[r] = function(e, r, o) {
                                if (t.Gesture && t.Gesture._gestureHandlers[e]) {
                                    var u = o;
                                    "object" == typeof o ? u.useCall = !0 : u = {
                                        useCall: !0,
                                        useCapture: o
                                    }, n(this, e, r, u, i, !0)
                                } else
                                    for (var l = a(e), c = 0; c < l.length; c++) s.call(this, l[c], r, o)
                            }
                        };
                        i("add"), i("remove")
                    };
                    navigator.userAgent.match(/Firefox/) ? (e(HTMLDivElement.prototype), e(HTMLCanvasElement.prototype)) : e(HTMLElement.prototype), e(document), e(window)
                }
            },
            g = !1,
            v = function() {
                var t = NodeList.prototype;
                t.removeEventListener = function(t, e, n) {
                    for (var i = 0, r = this.length; i < r; i++) this[i].removeEventListener(t, e, n)
                }, t.addEventListener = function(t, e, n) {
                    for (var i = 0, r = this.length; i < r; i++) this[i].addEventListener(t, e, n)
                }
            };
        return t
    }(eventjs), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        t.pointerSetup = function(t, e) {
            t.target = t.target || window, t.doc = t.target.ownerDocument || t.target, t.minFingers = t.minFingers || t.fingers || 1, t.maxFingers = t.maxFingers || t.fingers || 1 / 0, t.position = t.position || "relative", delete t.fingers, e = e || {}, e.enabled = !0, e.gesture = t.gesture, e.target = t.target, e.env = t.env, eventjs.modifyEventListener && t.fromOverwrite && (t.oldListener = t.listener, t.listener = eventjs.createPointerEvent);
            var n = 0,
                i = 0 === e.gesture.indexOf("pointer") && eventjs.modifyEventListener ? "pointer" : "mouse";
            return t.oldListener && (e.oldListener = t.oldListener), e.listener = t.listener, e.proxy = function(n) {
                e.defaultListener = t.listener, t.listener = n, n(t.event, e)
            }, e.add = function() {
                e.enabled !== !0 && (t.onPointerDown && eventjs.add(t.target, i + "down", t.onPointerDown), t.onPointerMove && eventjs.add(t.doc, i + "move", t.onPointerMove), t.onPointerUp && eventjs.add(t.doc, i + "up", t.onPointerUp), e.enabled = !0)
            }, e.remove = function() {
                e.enabled !== !1 && (t.onPointerDown && eventjs.remove(t.target, i + "down", t.onPointerDown), t.onPointerMove && eventjs.remove(t.doc, i + "move", t.onPointerMove), t.onPointerUp && eventjs.remove(t.doc, i + "up", t.onPointerUp), e.reset(), e.enabled = !1)
            }, e.pause = function(e) {
                !t.onPointerMove || e && !e.move || eventjs.remove(t.doc, i + "move", t.onPointerMove), !t.onPointerUp || e && !e.up || eventjs.remove(t.doc, i + "up", t.onPointerUp), n = t.fingers, t.fingers = 0
            }, e.resume = function(e) {
                !t.onPointerMove || e && !e.move || eventjs.add(t.doc, i + "move", t.onPointerMove), !t.onPointerUp || e && !e.up || eventjs.add(t.doc, i + "up", t.onPointerUp), t.fingers = n
            }, e.reset = function() {
                t.tracker = {}, t.fingers = 0
            }, e
        };
        var e = eventjs.supports;
        eventjs.isMouse = !!e.mouse, eventjs.isMSPointer = !!e.touch, eventjs.isTouch = !!e.msPointer, t.pointerStart = function(e, n, i) {
            var r = (e.type || "mousedown").toUpperCase();
            0 === r.indexOf("MOUSE") ? (eventjs.isMouse = !0, eventjs.isTouch = !1, eventjs.isMSPointer = !1) : 0 === r.indexOf("TOUCH") ? (eventjs.isMouse = !1, eventjs.isTouch = !0, eventjs.isMSPointer = !1) : 0 === r.indexOf("MSPOINTER") && (eventjs.isMouse = !1, eventjs.isTouch = !1, eventjs.isMSPointer = !0);
            var s = function(t, e) {
                var n = i.bbox,
                    r = a[e] = {};
                switch (i.position) {
                    case "absolute":
                        r.offsetX = 0, r.offsetY = 0;
                        break;
                    case "differenceFromLast":
                        r.offsetX = t.pageX, r.offsetY = t.pageY;
                        break;
                    case "difference":
                        r.offsetX = t.pageX, r.offsetY = t.pageY;
                        break;
                    case "move":
                        r.offsetX = t.pageX - n.x1, r.offsetY = t.pageY - n.y1;
                        break;
                    default:
                        r.offsetX = n.x1 - n.scrollLeft, r.offsetY = n.y1 - n.scrollTop
                }
                var s = t.pageX - r.offsetX,
                    o = t.pageY - r.offsetY;
                r.rotation = 0, r.scale = 1, r.startTime = r.moveTime = (new Date).getTime(), r.move = {
                    x: s,
                    y: o
                }, r.start = {
                    x: s,
                    y: o
                }, i.fingers++
            };
            i.event = e, n.defaultListener && (i.listener = n.defaultListener, delete n.defaultListener);
            for (var o = !i.fingers, a = i.tracker, u = e.changedTouches || t.getCoords(e), l = u.length, c = 0; c < l; c++) {
                var h = u[c],
                    p = h.identifier || 1 / 0;
                if (i.fingers) {
                    if (i.fingers >= i.maxFingers) {
                        var f = [];
                        for (var p in i.tracker) f.push(p);
                        return n.identifier = f.join(","), o
                    }
                    var d = 0;
                    for (var g in a) {
                        if (a[g].up) {
                            delete a[g], s(h, p), i.cancel = !0;
                            break
                        }
                        d++
                    }
                    if (a[p]) continue;
                    s(h, p)
                } else a = i.tracker = {}, n.bbox = i.bbox = t.getBoundingBox(i.target), i.fingers = 0, i.cancel = !1, s(h, p)
            }
            var f = [];
            for (var p in i.tracker) f.push(p);
            return n.identifier = f.join(","), o
        }, t.pointerEnd = function(t, e, n, i) {
            for (var r = t.touches || [], s = r.length, o = {}, a = 0; a < s; a++) {
                var u = r[a],
                    l = u.identifier;
                o[l || 1 / 0] = !0
            }
            for (var l in n.tracker) {
                var c = n.tracker[l];
                o[l] || c.up || (i && i({
                    pageX: c.pageX,
                    pageY: c.pageY,
                    changedTouches: [{
                        pageX: c.pageX,
                        pageY: c.pageY,
                        identifier: "Infinity" === l ? 1 / 0 : l
                    }]
                }, "up"), c.up = !0, n.fingers--)
            }
            if (0 !== n.fingers) return !1;
            var h = [];
            n.gestureFingers = 0;
            for (var l in n.tracker) n.gestureFingers++, h.push(l);
            return e.identifier = h.join(","), !0
        }, t.getCoords = function(e) {
            return "undefined" != typeof e.pageX ? t.getCoords = function(t) {
                return Array({
                    type: "mouse",
                    x: t.pageX,
                    y: t.pageY,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: t.pointerId || 1 / 0
                })
            } : t.getCoords = function(t) {
                var e = document.documentElement;
                return t = t || window.event, Array({
                    type: "mouse",
                    x: t.clientX + e.scrollLeft,
                    y: t.clientY + e.scrollTop,
                    pageX: t.clientX + e.scrollLeft,
                    pageY: t.clientY + e.scrollTop,
                    identifier: 1 / 0
                })
            }, t.getCoords(e)
        }, t.getCoord = function(e) {
            if ("ontouchstart" in window) {
                var n = 0,
                    i = 0;
                t.getCoord = function(t) {
                    var e = t.changedTouches;
                    return e && e.length ? {
                        x: n = e[0].pageX,
                        y: i = e[0].pageY
                    } : {
                        x: n,
                        y: i
                    }
                }
            } else "undefined" != typeof e.pageX && "undefined" != typeof e.pageY ? t.getCoord = function(t) {
                return {
                    x: t.pageX,
                    y: t.pageY
                }
            } : t.getCoord = function(t) {
                var e = document.documentElement;
                return t = t || window.event, {
                    x: t.clientX + e.scrollLeft,
                    y: t.clientY + e.scrollTop
                }
            };
            return t.getCoord(e)
        };
        var n = function(t, e) {
            var n = parseFloat(t.getPropertyValue(e), 10);
            return isFinite(n) ? n : 0
        };
        return t.getBoundingBox = function(t) {
                t !== window && t !== document || (t = document.body);
                var e = {},
                    i = t.getBoundingClientRect();
                e.width = i.width, e.height = i.height, e.x1 = i.left, e.y1 = i.top, e.scaleX = i.width / t.offsetWidth || 1, e.scaleY = i.height / t.offsetHeight || 1, e.scrollLeft = 0, e.scrollTop = 0;
                var r = window.getComputedStyle(t),
                    s = "border-box" === r.getPropertyValue("box-sizing");
                if (s === !1) {
                    var o = n(r, "border-left-width"),
                        a = n(r, "border-right-width"),
                        u = n(r, "border-bottom-width"),
                        l = n(r, "border-top-width");
                    e.border = [o, a, l, u], e.x1 += o, e.y1 += l, e.width -= a + o, e.height -= u + l
                }
                e.x2 = e.x1 + e.width, e.y2 = e.y1 + e.height;
                for (var c = r.getPropertyValue("position"), h = "fixed" === c ? t : t.parentNode; null !== h && h !== document.body && void 0 !== h.scrollTop;) {
                    var r = window.getComputedStyle(h),
                        c = r.getPropertyValue("position");
                    if ("absolute" === c);
                    else {
                        if ("fixed" === c) {
                            e.scrollTop -= h.parentNode.scrollTop, e.scrollLeft -= h.parentNode.scrollLeft;
                            break
                        }
                        e.scrollLeft += h.scrollLeft, e.scrollTop += h.scrollTop
                    }
                    h = h.parentNode
                }
                return e.scrollBodyLeft = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, e.scrollBodyTop = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, e.scrollLeft -= e.scrollBodyLeft, e.scrollTop -= e.scrollBodyTop, e
            },
            function() {
                var e, n = navigator.userAgent.toLowerCase(),
                    i = n.indexOf("macintosh") !== -1;
                e = i && n.indexOf("khtml") !== -1 ? {
                    91: !0,
                    93: !0
                } : i && n.indexOf("firefox") !== -1 ? {
                    224: !0
                } : {
                    17: !0
                }, (t.metaTrackerReset = function() {
                    eventjs.fnKey = t.fnKey = !1, eventjs.metaKey = t.metaKey = !1, eventjs.escKey = t.escKey = !1, eventjs.ctrlKey = t.ctrlKey = !1, eventjs.shiftKey = t.shiftKey = !1, eventjs.altKey = t.altKey = !1
                })(), t.metaTracker = function(n) {
                    var i = "keydown" === n.type;
                    27 === n.keyCode && (eventjs.escKey = t.escKey = i), e[n.keyCode] && (eventjs.metaKey = t.metaKey = i), eventjs.ctrlKey = t.ctrlKey = n.ctrlKey, eventjs.shiftKey = t.shiftKey = n.shiftKey, eventjs.altKey = t.altKey = n.altKey
                }
            }(), t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if (eventjs.MutationObserver = function() {
        var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            e = !t && function() {
                var t = document.createElement("p"),
                    e = !1,
                    n = function() {
                        e = !0
                    };
                if (t.addEventListener) t.addEventListener("DOMAttrModified", n, !1);
                else {
                    if (!t.attachEvent) return !1;
                    t.attachEvent("onDOMAttrModified", n)
                }
                return t.setAttribute("id", "target"), e
            }();
        return function(n, i) {
            if (t) {
                var r = {
                        subtree: !1,
                        attributes: !0
                    },
                    s = new t(function(t) {
                        t.forEach(function(t) {
                            i.call(t.target, t.attributeName)
                        })
                    });
                s.observe(n, r)
            } else e ? eventjs.add(n, "DOMAttrModified", function(t) {
                i.call(n, t.attrName)
            }) : "onpropertychange" in document.body && eventjs.add(n, "propertychange", function(t) {
                i.call(n, window.event.propertyName)
            })
        }
    }(), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.click = function(e) {
            e.gesture = e.gesture || "click", e.maxFingers = e.maxFingers || e.fingers || 1, e.onPointerDown = function(i) {
                t.pointerStart(i, n, e) && eventjs.add(e.target, "mouseup", e.onPointerUp)
            }, e.onPointerUp = function(i) {
                if (t.pointerEnd(i, n, e)) {
                    eventjs.remove(e.target, "mouseup", e.onPointerUp);
                    var r = i.changedTouches || t.getCoords(i),
                        s = r[0],
                        o = e.bbox,
                        a = t.getBoundingBox(e.target),
                        u = s.pageY - a.scrollBodyTop,
                        l = s.pageX - a.scrollBodyLeft;
                    if (l > o.x1 && u > o.y1 && l < o.x2 && u < o.y2 && o.scrollTop === a.scrollTop) {
                        for (var c in e.tracker) break;
                        var h = e.tracker[c];
                        n.x = h.start.x, n.y = h.start.y, e.listener(i, n)
                    }
                }
            };
            var n = t.pointerSetup(e);
            return n.state = "click", eventjs.add(e.target, "mousedown", e.onPointerDown), n
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.click = t.click, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.dbltap = t.dblclick = function(e) {
            e.gesture = e.gesture || "dbltap", e.maxFingers = e.maxFingers || e.fingers || 1;
            var n, i, r, s, o, a = 300;
            e.onPointerDown = function(l) {
                var c = l.changedTouches || t.getCoords(l);
                n && !i ? (o = c[0], i = (new Date).getTime() - n) : (s = c[0], n = (new Date).getTime(), i = 0, clearTimeout(r), r = setTimeout(function() {
                    n = 0
                }, a)), t.pointerStart(l, u, e) && (eventjs.add(e.target, "mousemove", e.onPointerMove).listener(l), eventjs.add(e.target, "mouseup", e.onPointerUp))
            }, e.onPointerMove = function(a) {
                if (n && !i) {
                    var u = a.changedTouches || t.getCoords(a);
                    o = u[0]
                }
                var l = e.bbox,
                    c = o.pageX - l.x1,
                    h = o.pageY - l.y1;
                c > 0 && c < l.width && h > 0 && h < l.height && Math.abs(o.pageX - s.pageX) <= 25 && Math.abs(o.pageY - s.pageY) <= 25 || (eventjs.remove(e.target, "mousemove", e.onPointerMove), clearTimeout(r), n = i = 0)
            }, e.onPointerUp = function(s) {
                if (t.pointerEnd(s, u, e) && (eventjs.remove(e.target, "mousemove", e.onPointerMove), eventjs.remove(e.target, "mouseup", e.onPointerUp)), n && i) {
                    if (i <= a) {
                        u.state = e.gesture;
                        for (var o in e.tracker) break;
                        var l = e.tracker[o];
                        u.x = l.start.x, u.y = l.start.y, e.listener(s, u)
                    }
                    clearTimeout(r), n = i = 0
                }
            };
            var u = t.pointerSetup(e);
            return u.state = "dblclick", eventjs.add(e.target, "mousedown", e.onPointerDown), u
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.dbltap = t.dbltap, eventjs.Gesture._gestureHandlers.dblclick = t.dblclick, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.dragElement = function(e, n) {
            t.drag({
                event: n,
                target: e,
                position: "move",
                listener: function(t, n) {
                    e.style.left = n.x + "px", e.style.top = n.y + "px", eventjs.prevent(t)
                }
            })
        }, t.drag = function(e) {
            e.gesture = "drag", e.onPointerDown = function(i) {
                t.pointerStart(i, n, e) && (e.monitor || (eventjs.add(e.doc, "mousemove", e.onPointerMove), eventjs.add(e.doc, "mouseup", e.onPointerUp))), e.onPointerMove(i, "down")
            }, e.onPointerMove = function(i, r) {
                if (!e.tracker) return e.onPointerDown(i);
                for (var s = (e.bbox, i.changedTouches || t.getCoords(i)), o = s.length, a = 0; a < o; a++) {
                    var u = s[a],
                        l = u.identifier || 1 / 0,
                        c = e.tracker[l];
                    c && (c.pageX = u.pageX, c.pageY = u.pageY, n.state = r || "move", n.identifier = l, n.start = c.start, n.fingers = e.fingers, "differenceFromLast" === e.position ? (n.x = c.pageX - c.offsetX, n.y = c.pageY - c.offsetY, c.offsetX = c.pageX, c.offsetY = c.pageY) : (n.x = c.pageX - c.offsetX, n.y = c.pageY - c.offsetY), e.listener(i, n))
                }
            }, e.onPointerUp = function(i) {
                t.pointerEnd(i, n, e, e.onPointerMove) && (e.monitor || (eventjs.remove(e.doc, "mousemove", e.onPointerMove), eventjs.remove(e.doc, "mouseup", e.onPointerUp)))
            };
            var n = t.pointerSetup(e);
            return e.event ? e.onPointerDown(e.event) : (eventjs.add(e.target, "mousedown", e.onPointerDown), e.monitor && (eventjs.add(e.doc, "mousemove", e.onPointerMove), eventjs.add(e.doc, "mouseup", e.onPointerUp))), n
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.drag = t.drag, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        var e = Math.PI / 180,
            n = function(t, e) {
                var n = 0,
                    i = 0,
                    r = 0;
                for (var s in e) {
                    var o = e[s];
                    o.up || (n += o.move.x, i += o.move.y, r++)
                }
                return t.x = n /= r, t.y = i /= r, t
            };
        return t.gesture = function(i) {
            i.gesture = i.gesture || "gesture", i.minFingers = i.minFingers || i.fingers || 2, i.onPointerDown = function(e) {
                var s = i.fingers;
                if (t.pointerStart(e, r, i) && (eventjs.add(i.doc, "mousemove", i.onPointerMove), eventjs.add(i.doc, "mouseup", i.onPointerUp)), i.fingers === i.minFingers && s !== i.fingers) {
                    r.fingers = i.minFingers, r.scale = 1, r.rotation = 0, r.state = "start";
                    var o = "";
                    for (var a in i.tracker) o += a;
                    r.identifier = parseInt(o), n(r, i.tracker), i.listener(e, r)
                }
            }, i.onPointerMove = function(s, o) {
                for (var a = i.bbox, u = i.tracker, l = s.changedTouches || t.getCoords(s), c = l.length, h = 0; h < c; h++) {
                    var p = l[h],
                        f = p.identifier || 1 / 0,
                        d = u[f];
                    d && (d.move.x = p.pageX - a.x1, d.move.y = p.pageY - a.y1)
                }
                if (!(i.fingers < i.minFingers)) {
                    var l = [],
                        g = 0,
                        v = 0;
                    n(r, u);
                    for (var f in u) {
                        var p = u[f];
                        if (!p.up) {
                            var m = p.start;
                            if (!m.distance) {
                                var y = m.x - r.x,
                                    x = m.y - r.y;
                                m.distance = Math.sqrt(y * y + x * x), m.angle = Math.atan2(y, x) / e
                            }
                            var y = p.move.x - r.x,
                                x = p.move.y - r.y,
                                w = Math.sqrt(y * y + x * x);
                            g += w / m.distance;
                            var b = Math.atan2(y, x) / e,
                                S = (m.angle - b + 360) % 360 - 180;
                            p.DEG2 = p.DEG1, p.DEG1 = S > 0 ? S : -S, "undefined" != typeof p.DEG2 && (S > 0 ? p.rotation += p.DEG1 - p.DEG2 : p.rotation -= p.DEG1 - p.DEG2, v += p.rotation), l.push(p.move)
                        }
                    }
                    r.touches = l, r.fingers = i.fingers, r.scale = g / i.fingers, r.rotation = v / i.fingers, r.state = "change", i.listener(s, r)
                }
            }, i.onPointerUp = function(e) {
                var n = i.fingers;
                t.pointerEnd(e, r, i) && (eventjs.remove(i.doc, "mousemove", i.onPointerMove), eventjs.remove(i.doc, "mouseup", i.onPointerUp)), n === i.minFingers && i.fingers < i.minFingers && (r.fingers = i.fingers, r.state = "end", i.listener(e, r))
            };
            var r = t.pointerSetup(i);
            return eventjs.add(i.target, "mousedown", i.onPointerDown), r
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.gesture = t.gesture, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.pointerdown = t.pointermove = t.pointerup = function(e) {
            if (e.gesture = e.gesture || "pointer", !e.target.isPointerEmitter) {
                var n = !0;
                e.onPointerDown = function(t) {
                    n = !1, i.gesture = "pointerdown", e.listener(t, i)
                }, e.onPointerMove = function(t) {
                    i.gesture = "pointermove", e.listener(t, i, n)
                }, e.onPointerUp = function(t) {
                    n = !0, i.gesture = "pointerup", e.listener(t, i, !0)
                };
                var i = t.pointerSetup(e);
                return eventjs.add(e.target, "mousedown", e.onPointerDown), eventjs.add(e.target, "mousemove", e.onPointerMove), eventjs.add(e.doc, "mouseup", e.onPointerUp), e.target.isPointerEmitter = !0, i
            }
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.pointerdown = t.pointerdown, eventjs.Gesture._gestureHandlers.pointermove = t.pointermove, eventjs.Gesture._gestureHandlers.pointerup = t.pointerup, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.shake = function(t) {
            var e = {
                    gesture: "devicemotion",
                    acceleration: {},
                    accelerationIncludingGravity: {},
                    target: t.target,
                    listener: t.listener,
                    remove: function() {
                        window.removeEventListener("devicemotion", l, !1)
                    }
                },
                n = 4,
                i = 1e3,
                r = 200,
                s = 3,
                o = (new Date).getTime(),
                a = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                u = {
                    x: {
                        count: 0,
                        value: 0
                    },
                    y: {
                        count: 0,
                        value: 0
                    },
                    z: {
                        count: 0,
                        value: 0
                    }
                },
                l = function(l) {
                    var c = .8,
                        h = l.accelerationIncludingGravity;
                    if (a.x = c * a.x + (1 - c) * h.x, a.y = c * a.y + (1 - c) * h.y, a.z = c * a.z + (1 - c) * h.z, e.accelerationIncludingGravity = a, e.acceleration.x = h.x - a.x, e.acceleration.y = h.y - a.y, e.acceleration.z = h.z - a.z, "devicemotion" === t.gesture) return void t.listener(l, e);
                    for (var p = "xyz", f = (new Date).getTime(), d = 0, g = p.length; d < g; d++) {
                        var v = p[d],
                            m = e.acceleration[v],
                            y = u[v],
                            x = Math.abs(m);
                        if (!(f - o < i) && x > n) {
                            var w = f * m / x,
                                b = Math.abs(w + y.value);
                            y.value && b < r ? (y.value = w, y.count++, y.count === s && (t.listener(l, e), o = f, y.value = 0, y.count = 0)) : (y.value = w, y.count = 1)
                        }
                    }
                };
            if (window.addEventListener) return window.addEventListener("devicemotion", l, !1), e
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.shake = t.shake, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        var e = Math.PI / 180;
        return t.swipe = function(n) {
            n.snap = n.snap || 90, n.threshold = n.threshold || 1, n.gesture = n.gesture || "swipe", n.onPointerDown = function(e) {
                t.pointerStart(e, i, n) && (eventjs.add(n.doc, "mousemove", n.onPointerMove).listener(e), eventjs.add(n.doc, "mouseup", n.onPointerUp))
            }, n.onPointerMove = function(e) {
                for (var i = e.changedTouches || t.getCoords(e), r = i.length, s = 0; s < r; s++) {
                    var o = i[s],
                        a = o.identifier || 1 / 0,
                        u = n.tracker[a];
                    u && (u.move.x = o.pageX, u.move.y = o.pageY, u.moveTime = (new Date).getTime())
                }
            }, n.onPointerUp = function(r) {
                if (t.pointerEnd(r, i, n)) {
                    eventjs.remove(n.doc, "mousemove", n.onPointerMove), eventjs.remove(n.doc, "mouseup", n.onPointerUp);
                    var s, o, a, u, l = {
                            x: 0,
                            y: 0
                        },
                        c = 0,
                        h = 0,
                        p = 0;
                    for (var f in n.tracker) {
                        var d = n.tracker[f],
                            g = d.move.x - d.start.x,
                            v = d.move.y - d.start.y;
                        c += d.move.x, h += d.move.y, l.x += d.start.x, l.y += d.start.y, p++;
                        var m = Math.sqrt(g * g + v * v),
                            y = d.moveTime - d.startTime,
                            u = Math.atan2(g, v) / e + 180,
                            o = y ? m / y : 0;
                        if ("undefined" == typeof a) a = u, s = o;
                        else {
                            if (!(Math.abs(u - a) <= 20)) return;
                            a = (a + u) / 2, s = (s + o) / 2
                        }
                    }
                    var x = n.gestureFingers;
                    n.minFingers <= x && n.maxFingers >= x && s > n.threshold && (l.x /= p, l.y /= p, i.start = l, i.x = c / p, i.y = h / p, i.angle = -(((a / n.snap + .5 >> 0) * n.snap || 360) - 360), i.velocity = s, i.fingers = x, i.state = "swipe", n.listener(r, i))
                }
            };
            var i = t.pointerSetup(n);
            return eventjs.add(n.target, "mousedown", n.onPointerDown), i
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.swipe = t.swipe, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.longpress = function(e) {
            return e.gesture = "longpress", t.tap(e)
        }, t.tap = function(e) {
            e.delay = e.delay || 500, e.timeout = e.timeout || 250, e.driftDeviance = e.driftDeviance || 10, e.gesture = e.gesture || "tap";
            var n, i;
            e.onPointerDown = function(s) {
                if (t.pointerStart(s, r, e)) {
                    if (n = (new Date).getTime(), eventjs.add(e.doc, "mousemove", e.onPointerMove).listener(s), eventjs.add(e.doc, "mouseup", e.onPointerUp), "longpress" !== e.gesture) return;
                    i = setTimeout(function() {
                        if (!(s.cancelBubble && ++s.cancelBubbleCount > 1)) {
                            var t = 0;
                            for (var n in e.tracker) {
                                var i = e.tracker[n];
                                if (i.end === !0) return;
                                if (e.cancel) return;
                                t++
                            }
                            e.minFingers <= t && e.maxFingers >= t && (r.state = "start", r.fingers = t, r.x = i.start.x, r.y = i.start.y, e.listener(s, r))
                        }
                    }, e.delay)
                }
            }, e.onPointerMove = function(n) {
                for (var i = e.bbox, r = n.changedTouches || t.getCoords(n), s = r.length, o = 0; o < s; o++) {
                    var a = r[o],
                        u = a.identifier || 1 / 0,
                        l = e.tracker[u];
                    if (l) {
                        var c = a.pageX - i.x1,
                            h = a.pageY - i.y1,
                            p = c - l.start.x,
                            f = h - l.start.y,
                            d = Math.sqrt(p * p + f * f);
                        if (!(c > 0 && c < i.width && h > 0 && h < i.height && d <= e.driftDeviance)) return eventjs.remove(e.doc, "mousemove", e.onPointerMove), void(e.cancel = !0)
                    }
                }
            }, e.onPointerUp = function(s) {
                if (t.pointerEnd(s, r, e)) {
                    if (clearTimeout(i), eventjs.remove(e.doc, "mousemove", e.onPointerMove), eventjs.remove(e.doc, "mouseup", e.onPointerUp), s.cancelBubble && ++s.cancelBubbleCount > 1) return;
                    if ("longpress" === e.gesture) return void("start" === r.state && (r.state = "end", e.listener(s, r)));
                    if (e.cancel) return;
                    if ((new Date).getTime() - n > e.timeout) return;
                    var o = e.gestureFingers;
                    e.minFingers <= o && e.maxFingers >= o && (r.state = "tap", r.fingers = e.gestureFingers, e.listener(s, r))
                }
            };
            var r = t.pointerSetup(e);
            return eventjs.add(e.target, "mousedown", e.onPointerDown), r
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.tap = t.tap, eventjs.Gesture._gestureHandlers.longpress = t.longpress, t
    }(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
"undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function(t) {
        "use strict";
        return t.wheelPreventElasticBounce = function(t) {
            t && ("string" == typeof t && (t = document.querySelector(t)), eventjs.add(t, "wheel", function(t, e) {
                e.preventElasticBounce(), eventjs.stop(t)
            }))
        }, t.wheel = function(t) {
            var e, n = t.timeout || 150,
                i = 0,
                r = {
                    gesture: "wheel",
                    state: "start",
                    wheelDelta: 0,
                    target: t.target,
                    listener: t.listener,
                    preventElasticBounce: function(t) {
                        var e = this.target,
                            n = e.scrollTop,
                            i = n + e.offsetHeight,
                            r = e.scrollHeight;
                        i === r && this.wheelDelta <= 0 ? eventjs.cancel(t) : 0 === n && this.wheelDelta >= 0 && eventjs.cancel(t), eventjs.stop(t)
                    },
                    add: function() {
                        t.target[o](u, s, !1)
                    },
                    remove: function() {
                        t.target[a](u, s, !1)
                    }
                },
                s = function(s) {
                    s = s || window.event, r.state = i++ ? "change" : "start", r.wheelDelta = s.detail ? s.detail * -20 : s.wheelDelta, t.listener(s, r), clearTimeout(e), e = setTimeout(function() {
                        i = 0, r.state = "end", r.wheelDelta = 0, t.listener(s, r)
                    }, n)
                },
                o = document.addEventListener ? "addEventListener" : "attachEvent",
                a = document.removeEventListener ? "removeEventListener" : "detachEvent",
                u = eventjs.getEventSupport("mousewheel") ? "mousewheel" : "DOMMouseScroll";
            return t.target[o](u, s, !1), r
        }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.wheel = t.wheel, t
    }(eventjs.proxy),
    function(t) {
        var e = function(t) {
            return new m(t)
        };
        e.version = "0.6.5", "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
            return e
        }) : t.typogr = e;
        var n = function(t, e) {
                return new RegExp(t, e)
            },
            i = /<(\/)?(pre|code|kbd|script|math|title)[^>]*>/i,
            r = e.amp = function(t) {
                var e = /(\s|&nbsp;)(&|&amp;|&\#38;)(\s|&nbsp;)/g,
                    n = /(<[^<]*>)?([^<]*)(<\/[^<]*>)?/g;
                if (t || "string" == typeof t) return t.replace(n, function(t, n, r, s) {
                    return n = n || "", s = s || "", n.match(i) ? n + r + s : (r = r.replace(e, '$1<span class="amp">&amp;</span>$3'), n + r + s)
                })
            },
            s = e.ord = function(t) {
                if (t || "string" == typeof t) {
                    var e, n = h(t),
                        r = [],
                        s = !1,
                        o = /(\d+)(st|nd|rd|th)/g;
                    return n.forEach(function(t) {
                        "tag" === t.type ? (r.push(t.txt), e = i.exec(t.txt), s = !(!e || void 0 !== e[1])) : s ? r.push(t.txt) : r.push(t.txt.replace(o, '$1<span class="ord">$2</span>'))
                    }), r.join("")
                }
            },
            o = e.initQuotes = function(t) {
                var e = n("(?:(?:<(?:p|h[1-6]|li|dt|dd)[^>]*>|^)\\s*(?:<(?:a|em|span|strong|i|b)[^>]*>\\s*)*)(?:(\"|&ldquo;|&#8220;)|('|&lsquo;|&#8216;))", "i");
                if (t || "string" == typeof t) return t.replace(e, function(t, e, n) {
                    var i = e ? "dquo" : "quo",
                        r = e ? e : n;
                    return [t.slice(0, t.lastIndexOf(r)), '<span class="', i, '">', r, "</span>"].join("")
                })
            },
            a = e.widont = function(t) {
                var e = "a|em|span|strong|i|b",
                    i = "(?:<(?:" + e + ")[^>]*?>)*?[^\\s<>]+(?:</(?:" + e + ")[^>]*?>)*?",
                    r = n("(\\s+" + i + "\\s+" + i + ")(?:\\s+)([^<>\\s]+(?:\\s*</(?:a|em|span|strong|i|b)[^>]*?>\\s*\\.*)*?(?:\\s*?</(?:p|h[1-6]|li|dt|dd)>|$))", "gi");
                return t.replace(r, "$1&nbsp;$2")
            },
            u = e.caps = function(t) {
                var e, r = h(t),
                    s = [],
                    o = !1,
                    a = n("((\\b[A-Z\\d]*[A-Z]\\d*[A-Z][A-Z\\d']*\\b)|(\\b[A-Z]+\\.\\s?(?:[A-Z]+\\.\\s?)+)(?:\\s|\\b|$))", "g");
                return r.forEach(function(t) {
                    "tag" === t.type ? (s.push(t.txt), e = i.exec(t.txt), o = !(!e || void 0 !== e[1])) : o ? s.push(t.txt) : s.push(t.txt.replace(a, function(t, e, n, i) {
                        var r, s;
                        return n ? '<span class="caps">%s</span>'.replace("%s", n) : (" " === i.slice(-1) ? (r = i.slice(0, -1), s = " ") : (r = i, s = ""), '<span class="caps">%s1</span>%s2'.replace("%s1", r).replace("%s2", s))
                    }))
                }), s.join("")
            };
        e.typogrify = function(t) {
            var e = t;
            return t.jquery && t.html && (e = t.html()), e = r(e), e = a(e), e = c(e), e = u(e), e = o(e), e = s(e)
        };
        var l, c = e.smartypants = function(t) {
                var e, n, r = h(t),
                    s = [],
                    o = [],
                    a = "",
                    u = "",
                    l = !1,
                    c = "";
                return r.forEach(function(t) {
                    if ("tag" === t.type) s.push(t.txt), null !== (u = i.exec(t.txt)) && (a = u[2].toLowerCase(), u[1] ? (o.length > 0 && a === o[o.length - 1] && o.pop(), 0 === o.length && (l = !1)) : (o.push(a), l = !0));
                    else {
                        if (n = t.txt, e = n.slice(-1), !l) switch (n = p(n), n = f(n), n = d(n), n = g(n)) {
                            case "'":
                                n = /\S/.test(c) ? "&#8217;" : "&#8216;";
                                break;
                            case '"':
                                n = /\S/.test(c) ? "&#8221;" : "&#8220;";
                                break;
                            default:
                                n = v(n)
                        }
                        c = e, s.push(n)
                    }
                }), s.join("")
            },
            h = e.tokenize = function(t) {
                for (var e, n = [], i = 0, r = /([^<]*)(<[^>]*>)/gi; null !== (e = r.exec(t));) {
                    var s = e[1],
                        o = e[2];
                    s && n.push({
                        type: "text",
                        txt: s
                    }), n.push({
                        type: "tag",
                        txt: o
                    }), i = r.lastIndex
                }
                return r.lastIndex <= t.length && ("." == t.slice(-1) && ".." != t.slice(-2) ? (n.push({
                    type: "text",
                    txt: t.slice(i, t.length - 1)
                }), n.push({
                    type: "text",
                    txt: t.slice(-1)
                })) : n.push({
                    type: "text",
                    txt: t.slice(i)
                })), n
            },
            p = e.smartEscapes = function(t) {
                return t.replace(/\\"/g, "&#34;").replace(/\\'/g, "&#39;").replace(/\\-/g, "&#45;").replace(/\\\./g, "&#46;").replace(/\\\\/g, "&#92;").replace(/\\`/g, "&#96;")
            },
            f = e.smartDashes = function(t) {
                return t.replace(/---/g, "&#8212;").replace(/--/g, "&#8211;")
            },
            d = e.smartEllipses = function(t) {
                return t.replace(/\.\.\./g, "&#8230;").replace(/\. \. \./g, "&#8230;")
            },
            g = e.smartBackticks = function(t) {
                return t.replace(/``/g, "&#8220;").replace(/''/g, "&#8221;")
            },
            v = e.smartQuotes = function(t) {
                var e = "[!\"#\\$\\%\\'()*+,-.\\/:;<=>?\\@\\[\\\\]\\^_`{|}~]",
                    i = "(?=%s\\B)".replace("%s", e),
                    r = "[^\\ \\t\\r\\n\\[\\{\\(\\-]",
                    s = "&#8211;|&#8212;",
                    o = n("(\\s|&nbsp;|--|&[mn]dash;|" + s + "|&#x201[34];)'(?=\\w)", "g"),
                    a = n("(" + r + ")'(?!\\s | s\\b | \\d)", "g"),
                    u = n("(" + r + ")'(?!\\s | s\\b)", "g"),
                    l = n("(\\s|&nbsp;|--|&[mn]dash;|" + s + '|&#x201[34];)"(?=\\w)', "g"),
                    c = n('"(?=\\s)', "g"),
                    h = n("(" + r + ')"', "g");
                return t.replace(n("^'%s".replace("%s", i), "g"), "&#8217;").replace(n('^"%s'.replace("%s", i), "g"), "&#8221;").replace(/"'(?=\w)/g, "&#8220;&#8216;").replace(/'"(?=\w)/g, "&#8216;&#8220;").replace(/\b'(?=\d{2}s)/g, "&#8217;").replace(o, "$1&#8216;").replace(a, "$1&#8217;").replace(u, "$1&#8217;$2").replace("'", "&#8217;").replace(l, "$1&#8220;").replace(c, "&#8221;").replace(h, "$1&#8221;").replace('"', "&#8220;")
            },
            m = function(t) {
                this._wrapped = t
            },
            y = function(t, n) {
                return n ? e(t).chain() : t
            },
            x = function(t, n) {
                m.prototype[t] = function() {
                    return y(n.call(e, this._wrapped), this._chain)
                }
            },
            w = function(t) {
                return !!(t && t.constructor && t.call && t.apply)
            };
        for (l in e) e.hasOwnProperty(l) && w(e[l]) && x(l, e[l]);
        m.prototype.chain = function() {
            return this._chain = !0, this
        }, m.prototype.value = function() {
            return this._wrapped
        }
    }(this),
    function() {
        _.mixin(window.written)
    }.call(this),
    function() {
        ! function() {
            var t;
            if ("undefined" != typeof _ && null !== _) return t = {
                average: function(t, e) {
                    return _.sum(t, e) / _.size(t)
                },
                median: function(t) {
                    var e, n;
                    return e = (t.length + 1) / 2, n = _.sortBy(t, _.identity), _.isInteger(e) ? n[e - 1] : _.sum(n.slice(e - 1.5, e + .5)) / 2
                },
                nearest: function(t, e, n) {
                    return null == n && (n = [-1, 999]), _.chain(t).map(function(t) {
                        return [t, Math.abs(t - e)]
                    }).reduce(function(t, e) {
                        return t[1] < e[1] ? t : e
                    }, n).first().value()
                },
                sum: function(t, e) {
                    var n;
                    return null == e && (e = "value"), n = _.isArray(t) && _.isNumber(t[0]) ? t : _.pluck(t, e), _.reduce(n, function(t, e) {
                        return t + e
                    })
                },
                factors: function(t) {
                    var e;
                    return function() {
                        var n, i;
                        for (i = [], e = n = 0; 0 <= t ? n <= t : n >= t; e = 0 <= t ? ++n : --n) _.isInteger(t / e) && i.push(t / e);
                        return i
                    }().reverse()
                },
                isInteger: function(t) {
                    return _.hasFactor(t, 1)
                },
                isEven: function(t) {
                    return _.hasFactor(t, 2)
                },
                isOdd: function(t) {
                    return !_.isEven(t)
                },
                hasFactor: function(t, e) {
                    return t % e === 0
                },
                limit: function(t, e, n) {
                    return null == n && (n = 0), e < n ? Math.max(Math.min(t, n), e) : e > n ? Math.min(Math.max(t, n), e) : e
                }
            }, _.mixin(t)
        }()
    }.call(this);