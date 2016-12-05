! function() {
    "use strict";
    var t = "undefined" == typeof window ? global : window;
    if ("function" != typeof t.require) {
        var e = {},
            i = {},
            n = {},
            o = {}.hasOwnProperty,
            s = /^\.\.?(\/|$)/,
            r = function(t, e) {
                for (var i, n = [], o = (s.test(e) ? t + "/" + e : e).split("/"), r = 0, l = o.length; r < l; r++) i = o[r], ".." === i ? n.pop() : "." !== i && "" !== i && n.push(i);
                return n.join("/")
            },
            l = function(t) {
                return t.split("/").slice(0, -1).join("/")
            },
            a = function(e) {
                return function(i) {
                    var n = r(l(e), i);
                    return t.require(n, e)
                }
            },
            c = function(t, e) {
                var n = null;
                n = v && v.createHot(t);
                var o = {
                    id: t,
                    exports: {},
                    hot: n
                };
                return i[t] = o, e(o.exports, a(t), o), o.exports
            },
            d = function(t) {
                return n[t] ? d(n[t]) : t
            },
            u = function(t, e) {
                return d(r(l(t), e))
            },
            p = function(t, n) {
                null == n && (n = "/");
                var s = d(t);
                if (o.call(i, s)) return i[s].exports;
                if (o.call(e, s)) return c(s, e[s]);
                throw new Error("Cannot find module '" + t + "' from '" + n + "'")
            };
        p.alias = function(t, e) {
            n[e] = t
        };
        var h = /\.[^.\/]+$/,
            f = /\/index(\.[^\/]+)?$/,
            m = function(t) {
                if (h.test(t)) {
                    var e = t.replace(h, "");
                    o.call(n, e) && n[e].replace(h, "") !== e + "/index" || (n[e] = t)
                }
                if (f.test(t)) {
                    var i = t.replace(f, "");
                    o.call(n, i) || (n[i] = t)
                }
            };
        p.register = p.define = function(t, n) {
            if ("object" == typeof t)
                for (var s in t) o.call(t, s) && p.register(s, t[s]);
            else e[t] = n, delete i[t], m(t)
        }, p.list = function() {
            var t = [];
            for (var i in e) o.call(e, i) && t.push(i);
            return t
        };
        var v = t._hmr && new t._hmr(u, p, e, i);
        p._cache = i, p.hmr = v && v.wrap, p.brunch = !0, t.require = p
    }
}(),
function() {
    window;
    require.register("app.coffee", function(t, e, i) {
        var n, o, s;
        s = e("lib/touch"), o = e("lib/middleware"), n = {
            actions: o.actions,
            action: o.action,
            publish: o.publish,
            subscribe: o.subscribe,
            initialize: function(t) {
                var i, n, r;
                return s.initialize(), o.initialize(t), r = e("lib/router"), this.router = new r, i = o.actions("Analytics"), i.startTracking(), n = o.actions("Lesson"), n.open(), Backbone.history.start()
            }
        }, i.exports = window.Application = n
    }), require.register("engine/carousel/model.yaml", function(t, e, i) {
        i.exports = {
            title: "carousel",
            display: "Carousel",
            category: "Multiple Choice",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Ask a question"
                },
                answers: {
                    min: 2,
                    max: 8,
                    type: [{
                        content: {
                            type: "html"
                        },
                        correct: {
                            type: "boolean"
                        }
                    }]
                },
                randomize: {
                    type: "boolean",
                    "default": !1,
                    help: "Shuffle the order of carousel items from left to right\n"
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Swipe to select an answer"
                }
            },
            examples: [{
                title: "What's the correct answer?",
                answers: [{
                    content: "Answer 1"
                }, {
                    correct: !0,
                    content: "Answer 2.<br> This is the correct answer and it contains more text.\n"
                }, {
                    content: "Answer 3"
                }]
            }]
        }
    }), require.register("engine/carousel/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content-md-fill content-sm-ver"><div class="content-md-ver text-center"><h1 class="block-hor-xl fade-in">' + (null == (e = l) ? "" : e) + '</h1><div class="carousel-container block-hor-xl block-ver-lg hide-overflow"><div class="col-md-8 col-md-offset-2 col-sm-12"><div class="carousel slide-up delay-6"><div' + jade.attr("style", "width:" + 100 * n.length + "%;", !0, !1) + ' class="carousel-slider clearfix">'),
                    function() {
                        var t = n;
                        if ("number" == typeof t.length)
                            for (var o = 0, s = t.length; o < s; o++) {
                                var r = t[o];
                                i.push("<div" + jade.attr("data-is-correct", r.correct, !0, !1) + jade.attr("style", "width: " + 100 / n.length + "%;", !0, !1) + jade.cls(["carousel-item", "block-flex-ver", "block-md", r.correct ? "carousel-item-correct" : ""], [null, null, null, !0]) + '><div class="carousel-block block-md block-dk draggy draggy-ver delay-3"><div' + jade.cls(["carousel-btn", "btn", "btn-solid", "btn-block", r.content.length > 20 ? "btn-long" : ""], [null, null, null, null, !0]) + '><div class="text-center">' + (null == (e = r.content) ? "" : e) + "</div></div></div></div>")
                            } else {
                                var s = 0;
                                for (var o in t) {
                                    s++;
                                    var r = t[o];
                                    i.push("<div" + jade.attr("data-is-correct", r.correct, !0, !1) + jade.attr("style", "width: " + 100 / n.length + "%;", !0, !1) + jade.cls(["carousel-item", "block-flex-ver", "block-md", r.correct ? "carousel-item-correct" : ""], [null, null, null, !0]) + '><div class="carousel-block block-md block-dk draggy draggy-ver delay-3"><div' + jade.cls(["carousel-btn", "btn", "btn-solid", "btn-block", r.content.length > 20 ? "btn-long" : ""], [null, null, null, null, !0]) + '><div class="text-center">' + (null == (e = r.content) ? "" : e) + "</div></div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasContent" in n ? n.hasContent : "undefined" != typeof hasContent ? hasContent : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/carousel/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), o = e("views/components/draggy"), n = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.currentIndex = 0, i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n;
                return e = i.__super__.serialize.apply(this, arguments), t = e.answers, n = e.randomize, this.options.data.answers = e.hasContent = (t || []).filter(function(t) {
                    return t.content
                }), n && (e.hasContent = _.shuffle(e.hasContent)), e
            }, i.prototype.show = function(t) {
                var e, i;
                return null == t && (t = 0), e = this.el.querySelector(".carousel"), this.setEl(e.firstChild, "scroller"), i = -e.offsetWidth * (this.options.data.answers.length - 1), this.draggy = new o({
                    el: e,
                    minX: i,
                    maxX: 0,
                    lock: "y"
                }), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop), this.listenTo(this, "resize", this.onResize), this.draggy.reset({
                    x: -this.draggy.el.offsetWidth * t
                }), this.onResize()
            }, i.prototype.onDrag = function(t, e) {
                return this.transform(this.getEl("scroller"), {
                    x: this.getScrollDist(t),
                    transition: e ? "all 300ms" : ""
                }), this.updateChildren(t, e && "none")
            }, i.prototype.onDrop = function(t, e) {
                var i, n, o, s, r;
                return e ? (s = null != this.currentIndex ? "all 300ms" : "", this.currentIndex = Math.floor(-t.x / t.offset.width), this.transform(this.getEl("scroller"), {
                    x: this.getScrollDist(t),
                    transition: s
                }), this.updateChildren(t, s)) : (r = t.velocity.x, n = .9, i = r < -n ? "ceil" : r > n ? "floor" : "round", o = Math[i](Math.min(t.x / t.offset.width, 1)), t.reset({
                    x: o * t.offset.width
                }), "prompt" === this.currentState.state ? this.setState("touched") : void 0)
            }, i.prototype.updateChildren = function(t, e) {
                var i, n, o, s, r, l, a;
                for (s = t.offset.width, a = this.getEl("scroller").children, o = r = 0, l = a.length; r < l; o = ++r) {
                    if (n = a[o], !(i = n.querySelector(".btn"))) return;
                    e && (n.classList.toggle("active", o === this.currentIndex), this.transition(i, e, !0)), this.transform(i, {
                        scale: 1 - Math.abs(t.x + o * s) / s / 5,
                        opacity: 1 - Math.abs(t.x + o * s) / s
                    })
                }
            }, i.prototype.getScrollDist = function(t) {
                return "" + t.x / t.offset.width / this.options.data.answers.length * 100 + "%"
            }, i.prototype.isCorrect = function() {
                var t;
                return null != (null != (t = this.getEl("scroller")) ? t.children[this.currentIndex || 0].dataset.isCorrect : void 0)
            }, i.prototype.onResize = function() {
                var t, e, i;
                if (e = this.getEl("scroller")) return null != (i = this.draggy) && (i.options.minX = -this.draggy.el.offsetWidth * (this.options.data.answers.length - 1)), e.style.height = "", t = e.offsetHeight, e.style.height = "" + t + "px", t
            }, i.prototype.refresh = function(t) {
                var e, n, o, s, r, l, a;
                for (l = t.data.answers, o = s = 0, r = l.length; s < r; o = ++s) n = l[o].content, n && (null != (a = this.options.data.answers[o]) ? a.content : void 0) !== n && (e = o);
                return i.__super__.refresh.apply(this, arguments), this.currentIndex = null, this.show(e)
            }, i
        }(s), i.exports = n
    }), require.register("engine/categorise/model.yaml", function(t, e, i) {
        i.exports = {
            title: "categorise",
            display: "Categorise",
            category: "Multiple Choice",
            features: {
                stars: !0
            },
            model: {
                title: {
                    types: ["text", "image", "video", "audio"],
                    "default": "Which category?"
                },
                buttonText: {
                    type: "html",
                    "default": "",
                    display: "Answer"
                },
                categories: {
                    min: 2,
                    max: 2,
                    type: [{
                        text: {
                            type: "html"
                        },
                        correct: {
                            type: "boolean"
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag to the correct category"
                }
            },
            examples: [{
                title: "This statement...",
                buttonText: "...is correct",
                categories: [{
                    text: !0,
                    correct: !0
                }, {
                    text: !1,
                    correct: !1
                }],
                answer: {
                    text: "This statement is correct."
                }
            }, {
                title: "Is Product X type 1 or type 2?",
                buttonText: "Product X",
                categories: [{
                    text: "Type 1",
                    correct: !0
                }, {
                    text: "Type 2",
                    correct: !1
                }],
                answer: {
                    text: "Product X is type 1."
                }
            }]
        }
    }), require.register("engine/categorise/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s, r, l, a, c, d) {
                n["multi-content"] = e = function(n, o) {
                    this && this.block, this && this.attributes || {};
                    switch (o = o || t, o[n + "Type"]) {
                        case "image":
                            i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                            break;
                        case "video":
                            i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                            break;
                        case "audio":
                            i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                            break;
                        case "iframe":
                            i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                            var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                            s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                            break;
                        default:
                            i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                    }
                }, i.push('<div class="content text-center block-hor-xl"><div class="block-md"><h1 class="title slide-up delay-3 tight">'), n["multi-content"]("title"), i.push('</h1></div><div class="row block-ver-md"><div class="draggy-parent col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2"><div' + jade.attr("data-correct", r[0].correct, !0, !1) + jade.cls(["category", "slide-left", "delay-4", "droppy", "droppy-top", "droppy-" + r[0].correct], [null, null, null, null, null, !0]) + '><div class="droppy-child block-dk text-center text-lg"><div class="content-ver">' + (null == (e = r[0].text) ? "" : e) + '</div></div></div><div class="draggy fade-in delay-6"><div' + jade.cls(["btn", "btn-solid", "btn-block", "selectable", "draggy-btn", o], [null, null, null, null, null, !0]) + '><div class="btn-text">' + (null == (e = s) ? "" : e) + "</div></div></div><div" + jade.attr("data-correct", r[1].correct, !0, !1) + jade.cls(["category", "slide-right", "delay-4", "droppy", "droppy-bottom", "droppy-" + r[1].correct], [null, null, null, null, null, !0]) + '><div class="droppy-child block-dk text-center text-lg"><div class="content-ver">' + (null == (e = r[1].text) ? "" : e) + '</div></div></div></div></div></div><div class="slide-footer slide-up">'), c ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof d && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = d) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = l || "Continue") ? "" : e) + "</div></div>"), a && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "buttonClass" in o ? o.buttonClass : "undefined" != typeof buttonClass ? buttonClass : void 0, "buttonText" in o ? o.buttonText : "undefined" != typeof buttonText ? buttonText : void 0, "categories" in o ? o.categories : "undefined" != typeof categories ? categories : void 0, "continueBtnText" in o ? o.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in o ? o.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in o ? o.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in o ? o.prompt : "undefined" != typeof prompt ? prompt : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/categorise/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), o = e("views/components/draggy"), n = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.serialize = function() {
                var t, e;
                return t = i.__super__.serialize.apply(this, arguments), e = t.width > 375 ? 30 : 20, t.buttonText.length > e && (t.buttonClass = "btn-long"), t.categories = _.shuffle(t.categories), t
            }, i.prototype.events = function() {
                return {
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.show = function() {
                return this.setEl(this.el.querySelector(".draggy-btn"), "draggyBtn"), this.setEl(this.el.querySelector(".draggy-parent"), "draggyParent"), this.setEl(this.el.querySelectorAll(".droppy"), "droppies"), this.setEl(this.el.querySelectorAll(".droppy-child"), "droppyChild"), this.createDraggy()
            }, i.prototype.createDraggy = function() {
                var t, e;
                return e = this.getEl("draggyParent"), t = e.offsetHeight, this.draggy = new o({
                    el: this.el.querySelector(".draggy"),
                    lock: "x"
                }), this.draggy.el.classList.add("no-delay"), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop), this.listenTo(this, "resize", this.onResize), this.updateDroppyHeight()
            }, i.prototype.onDrag = function(t, e) {
                var i, n, o, s, r;
                for (this.index = t.y < 0 ? 0 : 1, r = this.getEl("droppies"), n = o = 0, s = r.length; o < s; n = ++o) i = r[n], i.classList.toggle("active", n === this.index);
                return this.transform(t.el, {
                    y: t.y,
                    scale: 1.05,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t, e) {
                var i;
                return e ? this.transform(t.el, {
                    y: t.y,
                    transition: "all 300ms"
                }) : (this.draggy.el.classList.add("draggy-drop"), this.moveDroppies(), this.currentDroppy = this.getEl("droppies")[this.index], i = (this.currentDroppy.offsetHeight - this.draggy.offset.height) / 2, t.y < 0 ? i = -i - t.offset.height / 2 : i += t.offset.height / 2, t.reset({
                    x: 0,
                    y: i
                })), this.setState("touched")
            }, i.prototype.moveDroppies = function() {
                var t, e, i, n, o, s, r;
                for (i = this.draggy.offset.height / 2, s = this.getEl("droppies"), r = [], e = n = 0, o = s.length; n < o; e = ++n) t = s[e], t.classList.add("no-delay"), r.push(this.transform(t, {
                    y: 0 === e ? i : -i,
                    transition: "all 300ms"
                }));
                return r
            }, i.prototype.updateDroppyHeight = function() {
                var t, e, i, n, o, s, r, l, a;
                for (this.draggy.getOffset(), l = this.getEl("droppies"), i = n = 0, s = l.length; n < s; i = ++n) t = l[i], t.firstChild.style.height = "";
                for (e = _.reduce(this.getEl("droppies"), function(t, e) {
                        return t > e.offsetHeight ? t : e.offsetHeight
                    }, this.draggy.offset.height), a = this.getEl("droppies"), i = o = 0, r = a.length; o < r; i = ++o) t = a[i], t.firstChild.style.height = "" + e + "px";
                return this.draggy.options.minY = -e - this.draggy.offset.height / 2, this.draggy.options.maxY = e + this.draggy.offset.height / 2
            }, i.prototype.isCorrect = function() {
                var t;
                return null != (null != (t = this.currentDroppy) ? t.dataset.correct : void 0)
            }, i.prototype.onRefresh = function() {
                var t, e, i, n, o;
                if (this.draggy)
                    for (this.draggy.el.classList.remove("no-delay"), o = this.getEl("droppies"), e = i = 0, n = o.length; i < n; e = ++i) t = o[e], t.classList.remove("no-delay");
                return this.show()
            }, i.prototype.onResize = function() {
                return this.updateDroppyHeight(), this.onDrop(this.draggy)
            }, i
        }(s), i.exports = n
    }), require.register("engine/chat/model.yaml", function(t, e, i) {
        i.exports = {
            title: "chat",
            display: "Chat",
            category: "Multiple Choice",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html"
                },
                message: {
                    content: {
                        type: "html"
                    },
                    sender: {
                        type: "html"
                    },
                    responder: {
                        type: "html",
                        "default": "You"
                    }
                },
                answers: {
                    correct: {
                        display: "Correct Answer",
                        type: "html"
                    },
                    incorrect: {
                        display: "Incorrect Answers",
                        type: [{
                            type: "html"
                        }],
                        min: 1,
                        max: 2
                    }
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap the best reply to the message"
                }
            },
            examples: [{
                message: {
                    sender: "The customer asks",
                    responder: "What's your answer?",
                    content: "Which product is the cheapest?"
                },
                answers: {
                    correct: "Product X is cheapest",
                    incorrect: ["Product Y is cheapest", "Product Z is cheapest"]
                },
                answer: {
                    takeaway: "Product X is cheapest",
                    text: "It's important to help the customer understand that Product X is in fact the cheapest product.\n"
                }
            }]
        }
    }), require.register("engine/chat/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c) {
                i.push('<div class="block-hor-xl block-ver-md content-ver text-md">'), a && i.push('<h2 class="fade-in">' + (null == (e = a) ? "" : e) + "</h2>"), i.push('<div class="row">'), r.content && (i.push('<div class="col-lg-10 col-sm-12">'), r.sender && i.push('<h4 class="fade-in block-ver-sm">' + (null == (e = r.sender) ? "" : e) + "</h4>"), i.push('<div class="chat-msg slide-up delay-1 pull-left"><div class="chat-msg-elli"> <span class="bullet delay-1">&bullet;</span><span class="bullet delay-2">&bullet;</span><span class="bullet delay-3">&bullet;</span></div><div class="chat-msg-text">' + (null == (e = r.content) ? "" : e) + "</div></div></div>")), r.responder && i.push('<h4 class="col-sm-12 block-ver-sm text-right chat-responder delay-4">' + (null == (e = r.responder) ? "" : e) + "</h4>"),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push('<div class="col-md-10 col-md-offset-2 col-sm-12"><div' + jade.cls(["chat-msg", "pull-right", "text-right", "selectable", "delay-" + r.delay + " " + (r.isCorrect ? " correct" : "incorrect")], [null, null, null, null, !0]) + ">" + (null == (e = r.text) ? "" : e) + "</div></div>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push('<div class="col-md-10 col-md-offset-2 col-sm-12"><div' + jade.cls(["chat-msg", "pull-right", "text-right", "selectable", "delay-" + r.delay + " " + (r.isCorrect ? " correct" : "incorrect")], [null, null, null, null, !0]) + ">" + (null == (e = r.text) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof l && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = l) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "allAnswers" in n ? n.allAnswers : "undefined" != typeof allAnswers ? allAnswers : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "message" in n ? n.message : "undefined" != typeof message ? message : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/chat/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .selectable": "selectAnswer",
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.allAnswers = _.shuffle(t.answers.incorrect.concat(t.answers.correct)), t.allAnswers = t.allAnswers.map(function(e, i) {
                    return {
                        text: typogr.typogrify(e || ""),
                        isCorrect: e === t.answers.correct,
                        delay: 6 + 2 * i
                    }
                }), t
            }, i.prototype.onRefresh = function() {
                return this.show(), this.resetChat(!0)
            }, i.prototype.resetChat = function(t) {
                var e, i, n, o, s, r = this;
                for (this.setState("prompt"), this.setState(!1, "show-msg"), e = t ? 0 : this.options.data.message.content ? 2100 : 300, s = this.getEl("answers"), n = 0, o = s.length; n < o; n++) i = s[n], i.classList.remove("active", "no-delay");
                return t && this.getEl("chatElli").classList.add("hide"), window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() {
                    return r.setState(!0, "show-msg"), r.getEl("chatElli").classList.remove("hide")
                }, e)
            }, i.prototype.show = function() {
                return this.setEl(this.el.querySelectorAll(".selectable"), "answers"), this.setEl(this.el.querySelector(".chat-msg-elli"), "chatElli"), this.resetChat()
            }, i.prototype.hide = function() {
                return this.setState(!1, "show-msg")
            }, i.prototype.selectAnswer = function(t) {
                var e, i, n, o;
                if ("complete" !== this.currentState.state) {
                    for (o = this.getEl("answers"), i = 0, n = o.length; i < n; i++) e = o[i], e.classList.remove("active");
                    return t.currentTarget.classList.add("active", "no-delay"), this.setEl(t.currentTarget, "selected"), this.setState("touched")
                }
            }, i.prototype.isCorrect = function() {
                var t, e;
                return null != (t = null != (e = this.getEl("selected")) ? e.classList.contains("correct") : void 0) && t
            }, i.prototype.adjustScore = function(t) {
                return t ? this.onCorrectAnswer() : this.onIncorrectAnswer()
            }, i
        }(o), i.exports = n
    }), require.register("engine/connect/model.yaml", function(t, e, i) {
        i.exports = {
            title: "connect",
            display: "Connect",
            category: "Relationships",
            features: {
                stars: !0
            },
            model: {
                title: {
                    types: ["text", "image", "video", "audio"],
                    "default": "Tap on our range to explore"
                },
                pairs: {
                    min: 2,
                    max: 4,
                    type: [{
                        left: {
                            types: ["text", "image"]
                        },
                        right: {
                            types: ["text", "image"]
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Draw a line between each pair"
                }
            },
            examples: [{
                title: "Match the products with their attributes",
                titleType: "text",
                pairs: [{
                    left: "Product X",
                    right: "The first product"
                }, {
                    left: "Product Y",
                    right: "The second one"
                }, {
                    left: "Product Z",
                    right: "The last product"
                }]
            }]
        }
    }), require.register("engine/connect/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s, r, l, a, c, d) {
                n["multi-content"] = e = function(n, o) {
                        this && this.block, this && this.attributes || {};
                        switch (o = o || t, o[n + "Type"]) {
                            case "image":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                                break;
                            case "video":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                                break;
                            case "audio":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                                break;
                            case "iframe":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                                var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                                s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                                break;
                            default:
                                i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                        }
                    }, i.push('<div class="full-screen connect-canvas-container"><canvas class="connect-canvas"></canvas></div><div class="block-hor-xl content-md-fill content-sm-ver text-center connect-boxes"><div class="content-md-ver"><h1 class="fade-in">'), n["multi-content"]("title"), i.push("</h1>"),
                    function() {
                        var t = l;
                        if ("number" == typeof t.length)
                            for (var e = 0, o = t.length; e < o; e++) {
                                var s = t[e];
                                i.push('<div class="row"><div' + jade.cls(["block-ver-sm", "col-sm-6", "col-lg-5", "col-lg-offset-1", "slide-right", "delay-" + (e + 4)], [null, null, null, null, null, !0]) + "><div" + jade.attr("data-index", s.index, !0, !1) + ' data-type="left" class="connect-box block-md block-dk block-flex-center display-flex">'), n["multi-content"]("content", s), i.push("</div></div><div" + jade.cls(["block-ver-sm", "col-sm-6", "col-lg-5", "slide-left", "delay-" + (e + 4)], [null, null, null, null, !0]) + "><div" + jade.attr("data-index", c[s.index].index, !0, !1) + ' data-type="right" class="connect-box block-md block-dk block-flex-center display-flex">'), n["multi-content"]("content", c[s.index]), i.push("</div></div></div>")
                            } else {
                                var o = 0;
                                for (var e in t) {
                                    o++;
                                    var s = t[e];
                                    i.push('<div class="row"><div' + jade.cls(["block-ver-sm", "col-sm-6", "col-lg-5", "col-lg-offset-1", "slide-right", "delay-" + (e + 4)], [null, null, null, null, null, !0]) + "><div" + jade.attr("data-index", s.index, !0, !1) + ' data-type="left" class="connect-box block-md block-dk block-flex-center display-flex">'), n["multi-content"]("content", s), i.push("</div></div><div" + jade.cls(["block-ver-sm", "col-sm-6", "col-lg-5", "slide-left", "delay-" + (e + 4)], [null, null, null, null, !0]) + "><div" + jade.attr("data-index", c[s.index].index, !0, !1) + ' data-type="right" class="connect-box block-md block-dk block-flex-center display-flex">'), n["multi-content"]("content", c[s.index]), i.push("</div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div><div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof a && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = a) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in o ? o.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in o ? o.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in o ? o.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "leftItems" in o ? o.leftItems : "undefined" != typeof leftItems ? leftItems : void 0, "prompt" in o ? o.prompt : "undefined" != typeof prompt ? prompt : void 0, "rightItems" in o ? o.rightItems : "undefined" != typeof rightItems ? rightItems : void 0, "undefined" in o ? o.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/connect/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d = {}.hasOwnProperty,
            u = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) d.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/slide"), o = e("views/components/draggy"), l = e("lib/draw/smooth-line"), s = e("lib/preload"), a = e("lib/device").dpi, n = function(t) {
            function i() {
                return c = i.__super__.constructor.apply(this, arguments)
            }
            return u(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, r, l, a;
                for (n = i.__super__.serialize.apply(this, arguments), this.options.data.pairs = n.pairs = _.filter(n.pairs, function(t) {
                        var e, i;
                        return e = t.left, i = t.right, e && i
                    }), a = ["left", "right"], r = 0, l = a.length; r < l; r++) e = a[r], s = function() {
                    var i, s, r, l;
                    for (r = n.pairs, l = [], o = i = 0, s = r.length; i < s; o = ++i) t = r[o], l.push({
                        content: t[e],
                        contentType: t[e + "Type"],
                        index: o
                    });
                    return l
                }(), n[e + "Items"] = _.shuffle(s);
                return n
            }, i.prototype.initialize = function() {
                var t;
                return i.__super__.initialize.apply(this, arguments), t = this.options.data.pairs, this.options.data.pairs = _.filter(t, function(t) {
                    var e, i;
                    return e = t.left, i = t.right, e && i
                })
            }, i.prototype.show = function() {
                var t, e, i, n, s, r;
                for (this.setEl(this.el.querySelectorAll(".connect-box"), "boxes"), t = this.el.querySelector("canvas"), this.onResize(t), this.draggy = new o({
                        el: t,
                        isParent: !0
                    }), this.onResize(), this.context = this.draggy.el.getContext("2d"), this.context.lineCap = "round", this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop), this.listenTo(this, "resize", this.onResize), this.pairs = [], this.context.clearRect(0, 0, this.draggy.el.width, this.draggy.el.height), s = this.getEl("boxes"), r = [], i = 0, n = s.length; i < n; i++) e = s[i], r.push(e.classList.remove("active", "complete"));
                return r
            }, i.prototype.onRefresh = function() {
                var t, e, i, n;
                for (n = this.getEl("boxes") || [], e = 0, i = n.length; e < i; e++) t = n[e], t.style.height = "", t.offsetHeight;
                return this.show()
            }, i.prototype.onResize = function() {
                var t, e = this;
                return t = this.el.querySelectorAll("img"), s.load(_.pluck(t, "src"), function(t) {
                    var i, n, o, s, r, l, c, d, u;
                    for (null == t && (t = []), c = e.getEl("boxes"), o = 0, r = c.length; o < r; o++) i = c[o], i.style.height = "";
                    for (n = _.reduce(e.getEl("boxes"), function(t, e) {
                            return e.offsetHeight > t ? e.offsetHeight : t
                        }, 0), d = e.getEl("boxes"), s = 0, l = d.length; s < l; s++) i = d[s], i.style.height = n + "px", i.classList.remove("active");
                    if (i = null != (u = e.draggy) ? u.el : void 0) return i.width = e.el.firstChild.offsetWidth * a, i.height = e.el.firstChild.offsetHeight * a
                })
            }, i.prototype.onDrag = function(t, e) {
                var i, n, o, s, r, c, d, u, p, h, f, m, v, g;
                if (window.clearTimeout(this.timeout), e)
                    for (f = this.el.firstChild.getBoundingClientRect(), r = f.left, c = f.top, this.line = new l([], window.getComputedStyle(this.el).color, 4 * a), this.activeBox = null, m = this.getEl("boxes"), o = d = 0, p = m.length; d < p; o = ++d) n = m[o], i = this.getBounds(n, {
                        x: -r,
                        y: -c
                    }), s = t.isWithin(i, 0), n.classList.toggle("active", s), s && (n.classList.remove("complete"), this.activeBox = n, this.removeActivePairs(n));
                else
                    for (v = this.el.firstChild.getBoundingClientRect(),
                        r = v.left, c = v.top, g = this.getEl("boxes"), u = 0, h = g.length; u < h; u++) n = g[u], this.activeBox && n !== this.activeBox && n.dataset.type !== this.activeBox.dataset.type && (i = this.getBounds(n, {
                        x: -r,
                        y: -c
                    }), s = t.isWithin(i, 0), n.classList.toggle("active", s));
                return this.addPoint(t)
            }, i.prototype.onDrop = function() {
                var t, e, i, n, o, s, r, c, d = this;
                if (t = function() {
                        var t, i, n, o;
                        for (n = this.getEl("boxes"), o = [], t = 0, i = n.length; t < i; t++) e = n[t], e.classList.contains("active") && o.push(e);
                        return o
                    }.call(this), 2 === t.length) {
                    for (o = 0, r = t.length; o < r; o++) i = t[o], i.classList.add("complete"), this.removeActivePairs(i);
                    this.pairs.push({
                        active: t,
                        line: new l(this.line.getPoints(), "rgba(0,0,0,.25)", 8 * a)
                    })
                }
                for (s = 0, c = t.length; s < c; s++) i = t[s], i.classList.remove("active");
                return this.drawLines(), (n = function() {
                    if (d.line.length() > 0) return d.line.remove(!0), d.drawLines(), d.timeout = window.setTimeout(n, 1e3 / 30)
                })(), this.pairs.length === this.options.data.pairs.length ? this.setState("touched") : this.setState("prompt")
            }, i.prototype.removeActivePairs = function(t) {
                var e, i, n, o, s, r;
                for (s = this.pairs, r = [], n = 0, o = s.length; n < o; n++) i = s[n], _.include(i.active, t) ? (this.pairs = _.without(this.pairs, i), r.push(function() {
                    var n, o, s, r;
                    for (s = i.active, r = [], n = 0, o = s.length; n < o; n++) e = s[n], e !== t && r.push(e.classList.remove("complete"));
                    return r
                }())) : r.push(void 0);
                return r
            }, i.prototype.addPoint = function(t) {
                var e, i;
                return e = t.x, i = t.y, this.line.add({
                    x: e * a,
                    y: i * a
                }), this.drawLines()
            }, i.prototype.drawLines = function() {
                var t, e, i, n;
                for (this.context.clearRect(0, 0, this.draggy.el.width, this.draggy.el.height), n = this.pairs, e = 0, i = n.length; e < i; e++) t = n[e].line, t.draw(this.context);
                return this.line.draw(this.context)
            }, i.prototype.showAnswer = function() {
                var t, e, n, o, s, r, l;
                for (r = this.pairs, o = 0, s = r.length; o < s; o++) l = r[o].active, e = l[0], n = l[1], t = !this.isMatch(e, n), e.classList.toggle("incorrect", t), n.classList.toggle("incorrect", t);
                return i.__super__.showAnswer.apply(this, arguments)
            }, i.prototype.isCorrect = function() {
                var t, e = this;
                return t = _.filter(this.pairs, function(t) {
                    var i, n, o;
                    return o = t.active, i = o[0], n = o[1], e.isMatch(i, n)
                }), t.length === this.options.data.pairs.length
            }, i.prototype.isMatch = function(t, e) {
                var i, n, o, s;
                return n = this.options.data.pairs[+t.dataset.index].right, s = this.options.data.pairs[+e.dataset.index].right, i = this.options.data.pairs[+t.dataset.index].left, o = this.options.data.pairs[+e.dataset.index].left, n === s || i === o
            }, i
        }(r), i.exports = n
    }), require.register("engine/construct-sentence/model.yaml", function(t, e, i) {
        i.exports = {
            title: "construct-sentence",
            display: "Sentence Construction",
            category: "Concepts",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Select the missing words in this sentence"
                },
                decoys: {
                    max: 3,
                    type: [{
                        type: "html",
                        "default": ""
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag in the words into order"
                }
            },
            examples: [{
                title: "Fill in the important information about Product X",
                decoys: ["Y"],
                answer: {
                    text: "Reinforce concepts by constructing the sentence in order."
                }
            }]
        }
    }), require.register("engine/construct-sentence/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l) {
                i.push('<div class="block-hor-xl text-center block-ver-md content-ver"><div class="row fade-in"><div class="col-lg-10 col-lg-offset-1 col-sm-12"><div class="block-ver-md block-box-sizing"><div class="block-dk content-fill block-sm content-fill"><div class="droppy-container content-fill"><div class="droppy-placeholder block-sm"><div class="block-dk content-fill"></div></div></div></div></div><div class="block-ver-md block-box-sizing"><div class="draggy-container block-dk content-fill block-sm">'),
                    function() {
                        var t = l;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push("<div" + jade.attr("data-word", s.word, !0, !1) + jade.attr("data-index", s.index, !0, !1) + ' class="draggy block-sm block-inline"><div' + jade.cls(["btn", "btn-sm", "btn-solid", "slide-up", "delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = s.word) ? "" : e) + "</div></div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push("<div" + jade.attr("data-word", s.word, !0, !1) + jade.attr("data-index", s.index, !0, !1) + ' class="draggy block-sm block-inline"><div' + jade.cls(["btn", "btn-sm", "btn-solid", "slide-up", "delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = s.word) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in n ? n.undefined : void 0, "words" in n ? n.words : "undefined" != typeof words ? words : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/construct-sentence/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), o = e("views/components/draggy"), r = e("lib/convert"), n = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, l;
                return t = i.__super__.serialize.apply(this, arguments), o = t.title, e = t.decoys, o = r.toText(o), this.words = o.trim().split(" "), null == e && (e = []), t.words = function() {
                    var t, e, i, o;
                    for (i = this.words, o = [], n = t = 0, e = i.length; t < e; n = ++t) s = i[n], o.push({
                        word: s,
                        index: n
                    });
                    return o
                }.call(this), t.words = (l = t.words).concat.apply(l, function() {
                    var t, i, n;
                    for (n = [], t = 0, i = e.length; t < i; t++) s = e[t], n.push({
                        word: s,
                        index: -1
                    });
                    return n
                }()), t.words = _.shuffle(t.words), t
            }, i.prototype.beforeShow = function() {
                return this.sizeElements()
            }, i.prototype.show = function() {
                var t, e, i;
                return this.draggies = function() {
                    var n, s, r, l;
                    for (r = this.el.querySelectorAll(".draggy"), l = [], i = n = 0, s = r.length; n < s; i = ++n) e = r[i], t = new o({
                        el: e
                    }), this.listenTo(t, "drag", this.onDrag), this.listenTo(t, "drop", this.onDrop), l.push(t);
                    return l
                }.call(this), this.resetDraggies(), this.listenTo(this, "resize", this.onResize)
            }, i.prototype.onRefresh = function() {
                return this.beforeShow(), i.__super__.onRefresh.apply(this, arguments)
            }, i.prototype.onDrag = function(t, e) {
                var i, n;
                return e && (this.droppy.bounds = this.droppy.el.getBoundingClientRect(), t.el.className = t.el.className.replace(/delay-\d/, ""), i = t.el.firstChild, this.droppy.placeholder.style.width = i.offsetWidth + "px", this.droppy.placeholder.style.height = i.offsetHeight + "px"), (n = t.isWithin(this.droppy.bounds, 60)) ? (t.isPositioned = !0, this.droppy.el.classList.add("active"), this.droppy.placeholder.classList.add("active")) : (t.isPositioned = !1, this.droppy.el.classList.remove("active"), this.droppy.placeholder.classList.remove("active")), this.rearrangeDraggies(this.draggiesInOrder(), t), this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t, e) {
                return e || (this.droppy.placeholder.classList.remove("active"), this.setState("touched"), t.isPositioned ? this.rearrangeDraggies(this.draggiesInOrder()) : t.reset({
                    x: 0,
                    y: 0
                })), this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    transition: "all 300ms"
                })
            }, i.prototype.rearrangeDraggies = function(t, e) {
                var i, n, o, s, r, l, a, c, d, u, p;
                for (r = this.droppy.bounds.width, o = 0, s = 0, p = [], n = c = 0, d = t.length; c < d; n = ++c) i = t[n], l = -i.offset.left + o + this.droppy.bounds.left, a = -i.offset.top + s + this.droppy.bounds.top, i.x === l && i.y === a || i === e || i.reset({
                    x: l,
                    y: a
                }), i === e && (l = o, a = s, this.transform(this.droppy.placeholder, {
                    x: l,
                    y: a
                })), o += i.offset.width, o >= r - ((null != (u = t[n + 1]) ? u.offset.width : void 0) || 0) ? (o = 0, p.push(s += i.offset.height)) : p.push(void 0);
                return p
            }, i.prototype.draggiesInOrder = function() {
                var t, e, i, n;
                return n = this.droppy.bounds, i = n.width, t = n.height, e = n.top, _.chain(this.draggies).where({
                    isPositioned: !0
                }).groupBy(function(t) {
                    return Math.floor(Math.max(t.y + t.offset.top, e) / t.offset.height)
                }).map(function(t, e) {
                    return t.sort(function(t, e) {
                        return t.offset.left + (t.x + t.offset.width / 2) - (e.offset.left + (e.x + e.offset.width / 2))
                    })
                }).flatten().value()
            }, i.prototype.showAnswer = function() {
                var t, e, n, o, s, r, l, a;
                for (i.__super__.showAnswer.apply(this, arguments), n = _.filter(this.draggies, function(t) {
                        return +(null != t ? t.el.dataset.index : void 0) < 0
                    }), t = _.clone(this.words), o = (l = _.chain(this.draggiesInOrder()).union(this.draggies)).without.apply(l, n).uniq().map(function(e, i) {
                        var n;
                        return n = t.indexOf(e.el.dataset.word), t[n] = void 0, {
                            draggy: e,
                            index: n
                        }
                    }).sortBy("index").pluck("draggy").value(), this.rearrangeDraggies(o), a = [], s = 0, r = n.length; s < r; s++) e = n[s], a.push(e.reset({
                    x: 0,
                    y: 0
                }));
                return a
            }, i.prototype.onResize = function() {
                var t = this;
                return window.setTimeout(function() {
                    return t.sizeElements(), t.resetDraggies()
                }, 300)
            }, i.prototype.sizeElements = function() {
                var t, e;
                return t = this.el.querySelector(".draggy-container"), e = this.el.querySelector(".droppy-container"), e.style.height = t.offsetHeight + t.firstChild.offsetHeight + "px", this.droppy = {
                    el: e,
                    placeholder: this.el.querySelector(".droppy-placeholder")
                }
            }, i.prototype.resetDraggies = function() {
                var t, e, i, n;
                if (this.draggies && this.droppy) {
                    for (this.droppy.bounds = this.droppy.el.getBoundingClientRect(), n = this.draggies, e = 0, i = n.length; e < i; e++) t = n[e], t.getOffset();
                    return this.rearrangeDraggies(this.draggiesInOrder())
                }
            }, i.prototype.isCorrect = function() {
                var t, e, i, n, o, s, r, l, a;
                for (e = _.filter(this.draggies, function(t) {
                        return +(null != t ? t.el.dataset.index : void 0) >= 0
                    }), o = this.draggiesInOrder(), s = o.length === e.length, r = -1, t = _.clone(this.words), n = l = 0, a = o.length; l < a; n = ++l) i = o[n], s = s && i.el.dataset.word === t.shift();
                return s
            }, i
        }(s), i.exports = n
    }), require.register("engine/construct/components/letters.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                i.push('<div class="block-md block-dk">'),
                    function() {
                        var t = n;
                        if ("number" == typeof t.length)
                            for (var o = 0, s = t.length; o < s; o++) {
                                var r = t[o];
                                i.push("<div" + jade.attr("data-letter", r.toLowerCase(), !0, !1) + ' class="letter btn btn-solid">' + (null == (e = r) ? "" : e) + "</div>")
                            } else {
                                var s = 0;
                                for (var o in t) {
                                    s++;
                                    var r = t[o];
                                    i.push("<div" + jade.attr("data-letter", r.toLowerCase(), !0, !1) + ' class="letter btn btn-solid">' + (null == (e = r) ? "" : e) + "</div>")
                                }
                            }
                    }.call(this), i.push("</div>")
            }.call(this, "undefined" in n ? n.undefined : void 0, "word" in n ? n.word : "undefined" != typeof word ? word : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/construct/model.yaml", function(t, e, i) {
        i.exports = {
            title: "construct",
            display: "Word Construction",
            category: "Concepts",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                words: {
                    min: 1,
                    max: 8,
                    type: [{
                        type: "html"
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Fill in the missing words"
                }
            },
            examples: [{
                title: "Fill in the missing words in this sentence.",
                subtitle: "",
                prompt: "Fill in the missing words",
                words: ["missing", "this"]
            }]
        }
    }), require.register("engine/construct/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c) {
                i.push('<div class="block-hor-xl content-md-fill content-sm-ver text-center"><div class="row content-md-ver"><div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0"><h1' + jade.cls(["statement", "fade-in", a], [null, null, !0]) + ">"),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var s = 0, r = n.length; s < r; s++) {
                                var l = n[s];
                                l.hidden ? (i.push("<span" + jade.attr("data-word", l.word.replace(/[^A-Z0-9]/gi, ""), !0, !1) + ' data-guess="" class="word-hidden">'), function() {
                                    var t = _.groupBy(l.word, o);
                                    if ("number" == typeof t.length)
                                        for (var n = 0, s = t.length; n < s; n++) {
                                            var r = t[n];
                                            i.push('<span class="letter-group text-nowrap">'),
                                                function() {
                                                    var t = r;
                                                    if ("number" == typeof t.length)
                                                        for (var n = 0, o = t.length; n < o; n++) {
                                                            var s = t[n];
                                                            s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                        } else {
                                                            var o = 0;
                                                            for (var n in t) {
                                                                o++;
                                                                var s = t[n];
                                                                s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                            }
                                                        }
                                                }.call(this), i.push("</span>")
                                        } else {
                                            var s = 0;
                                            for (var n in t) {
                                                s++;
                                                var r = t[n];
                                                i.push('<span class="letter-group text-nowrap">'),
                                                    function() {
                                                        var t = r;
                                                        if ("number" == typeof t.length)
                                                            for (var n = 0, o = t.length; n < o; n++) {
                                                                var s = t[n];
                                                                s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                            } else {
                                                                var o = 0;
                                                                for (var n in t) {
                                                                    o++;
                                                                    var s = t[n];
                                                                    s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                                }
                                                            }
                                                    }.call(this), i.push("</span>")
                                            }
                                        }
                                }.call(this), i.push("</span>")) : i.push("<span" + jade.cls(["word", l.klass], [null, !0]) + ">" + (null == (e = l.word) ? "" : e) + "</span>"), i.push(jade.escape(null == (e = " ") ? "" : e))
                            } else {
                                var r = 0;
                                for (var s in n) {
                                    r++;
                                    var l = n[s];
                                    l.hidden ? (i.push("<span" + jade.attr("data-word", l.word.replace(/[^A-Z0-9]/gi, ""), !0, !1) + ' data-guess="" class="word-hidden">'), function() {
                                        var t = _.groupBy(l.word, o);
                                        if ("number" == typeof t.length)
                                            for (var n = 0, s = t.length; n < s; n++) {
                                                var r = t[n];
                                                i.push('<span class="letter-group text-nowrap">'),
                                                    function() {
                                                        var t = r;
                                                        if ("number" == typeof t.length)
                                                            for (var n = 0, o = t.length; n < o; n++) {
                                                                var s = t[n];
                                                                s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                            } else {
                                                                var o = 0;
                                                                for (var n in t) {
                                                                    o++;
                                                                    var s = t[n];
                                                                    s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                                }
                                                            }
                                                    }.call(this), i.push("</span>")
                                            } else {
                                                var s = 0;
                                                for (var n in t) {
                                                    s++;
                                                    var r = t[n];
                                                    i.push('<span class="letter-group text-nowrap">'),
                                                        function() {
                                                            var t = r;
                                                            if ("number" == typeof t.length)
                                                                for (var n = 0, o = t.length; n < o; n++) {
                                                                    var s = t[n];
                                                                    s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                                } else {
                                                                    var o = 0;
                                                                    for (var n in t) {
                                                                        o++;
                                                                        var s = t[n];
                                                                        s.match(/[A-Z0-9]/gi) ? i.push("<span" + jade.attr("data-letter", s.toLowerCase(), !0, !1) + ' class="blank hidden-letter"><span class="letter-inner">' + jade.escape(null == (e = s) ? "" : e) + "</span></span>") : i.push(jade.escape(null == (e = s) ? "" : e))
                                                                    }
                                                                }
                                                        }.call(this), i.push("</span>")
                                                }
                                            }
                                    }.call(this), i.push("</span>")) : i.push("<span" + jade.cls(["word", l.klass], [null, !0]) + ">" + (null == (e = l.word) ? "" : e) + "</span>"), i.push(jade.escape(null == (e = " ") ? "" : e))
                                }
                            }
                    }.call(this), i.push('</h1></div></div></div><div class="word-letters block-xl"></div><div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof l && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = l) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "components" in n ? n.components : "undefined" != typeof components ? components : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "groupBy" in n ? n.groupBy : "undefined" != typeof groupBy ? groupBy : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "titleClass" in n ? n.titleClass : "undefined" != typeof titleClass ? titleClass : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/construct/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c = {}.hasOwnProperty,
            d = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) c.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), s = e("lib/convert"), r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), l = "0123456789".split(""), n = function(t) {
            function i() {
                return a = i.__super__.constructor.apply(this, arguments)
            }
            return d(i, t), i.prototype.template = e("./template"), i.prototype.templates = {
                letters: e("./components/letters")
            }, i.prototype.events = function() {
                return {
                    "iostap .letter": "selectLetter",
                    "iostap .word-hidden": "activateWord",
                    "iostap .word-letters": "selectContainer",
                    "iostap .btn-done": "showAnswer",
                    iostap: "deactivateWord"
                }
            }, i.prototype.show = function() {
                var t, e, i, n, o, s, r, l;
                for (this.setEl(this.el.querySelector(".word-letters"), "letters"), this.setEl(this.el.querySelector(".statement"), "statement"), this.setEl(this.el.querySelectorAll(".word-hidden"), "words"), r = this.getEl("words"), l = [], o = 0, s = r.length; o < s; o++) n = r[o], e = null, i = null, l.push(function() {
                    var o, s, r, l;
                    for (r = n.querySelectorAll(".letter-group"), l = [], o = 0, s = r.length; o < s; o++) t = r[o], null == e && (e = t.offsetTop), t.offsetTop !== e && (i.insertAdjacentText("beforeEnd", "-"), e = t.offsetTop), l.push(i = t);
                    return l
                }());
                return l
            }, i.prototype.serialize = function() {
                var t, e, n, o, r, l, a, c, d, u;
                for (e = i.__super__.serialize.apply(this, arguments), c = function() {
                        var t, i, n, o;
                        for (n = e.words, o = [], t = 0, i = n.length; t < i; t++) a = n[t], o.push(s.toText(a));
                        return o
                    }(), l = s.toText(e.title) || "", r = l.length, n = d = 0, u = c.length; d < u; n = ++d) a = c[n], l = l.replace(a, "{{" + n + "}}");
                return e.titleClass = r > 120 ? "text-lg" : "", e.groupBy = function(t, e, i) {
                    return i.length <= 5 ? "first" : i.length - e <= 4 ? "last" : Math.floor(e / 4)
                }, e.components = function() {
                    var e, i, n, s, r;
                    for (n = l.split(/\s/), r = [], e = 0, i = n.length; e < i; e++) t = n[e], o = +(null != (s = t.match(/\{\{(\d+)\}\}/)) ? s[1] : void 0), r.push({
                        klass: "delay-" + _.random(3) + " scale-" + _.sample(["down", "up"]),
                        word: c[o] || t,
                        hidden: null != c[o]
                    });
                    return r
                }(), e
            }, i.prototype.selectContainer = function(t) {
                return t.stopImmediatePropagation()
            }, i.prototype.deactivateWord = function(t) {
                var e, i, n, o, s, r = this;
                if (e = this.getEl("active")) {
                    for (s = [e, e.querySelector(".active")], n = 0, o = s.length; n < o; n++) i = s[n], null != i && i.classList.remove("active");
                    return this.elements.active = null, this.getEl("letters").classList.remove("active"), window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() {
                        return r.transform(r.getEl("statement"), {
                            y: 0
                        })
                    }, 150)
                }
            }, i.prototype.activateWord = function(t, e) {
                var i, n, o, s, a = this;
                if (null != t && t.stopImmediatePropagation(), null == e && (e = t.currentTarget), e !== this.getEl("active")) return this.deactivateWord(), this.setEl(e, "active"), e.classList.add("active"), this.activateNextLetter(e.dataset.guess.length), s = e.dataset.word.slice(e.dataset.guess.length), i = s.match(/^\d+$/) ? l : r, n = s.split(""), i = _.sample(i, _.random(1, 3)), o = _.shuffle(n.concat(i)), window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() {
                    var t;
                    return a.getEl("letters").innerHTML = a.templates.letters({
                        word: o
                    }), t = a.getEl("letters").firstChild.offsetHeight / 2, a.transform(a.getEl("statement"), {
                        y: -t
                    }), a.getEl("letters").classList.add("active")
                }, 300)
            }, i.prototype.selectLetter = function(t) {
                var e, i, n, o, s;
                return t.stopImmediatePropagation(), i = t.currentTarget, n = this.getEl("active").dataset.guess.length, e = this.getEl("active").querySelectorAll(".blank"), s = e.item(n), o = i.dataset.letter === s.dataset.letter, o && (this.getEl("active").dataset.guess += s.dataset.letter), i.dataset.letter.toLowerCase() === s.dataset.letter.toLowerCase() ? (s.classList.add("visible"), i.classList.add("disabled"), this.activateNextLetter(n + 1)) : (i.classList.add("incorrect"), window.setTimeout(function() {
                    return i.classList.remove("incorrect")
                }, 300)), this.getEl("active").dataset.guess.length === e.length && (this.getEl("active").classList.add("disabled"), n = _.indexOf(this.getEl("words"), this.getEl("active")) + 1, this.activateNextWord(n)), this.setState("touched")
            }, i.prototype.activateNextWord = function(t) {
                var e, i, n;
                return n = this.getEl("words"), e = n.item(t), i = function(t) {
                    return t.querySelectorAll(".visible").length < t.dataset.word.length
                }, e && i(e) ? this.activateWord(null, e) : (this.deactivateWord(), e = _.filter(n, i)[0], null != e ? this.activateWord(null, e) : void 0)
            }, i.prototype.activateNextLetter = function(t) {
                var e, i, n, o, s, r, l;
                for (null == t && (t = 0), e = this.getEl("active").querySelectorAll(".blank"), o = e.item(t), l = [], n = s = 0, r = e.length; s < r; n = ++s) i = e[n], l.push(i.classList.toggle("active", t === n));
                return l
            }, i.prototype.isCorrect = function() {
                var t, e;
                return t = this.el.querySelectorAll(".blank").length, e = this.el.querySelectorAll(".blank.visible").length, t === e
            }, i
        }(o), i.exports = n
    }), require.register("engine/dial/model.yaml", function(t, e, i) {
        i.exports = {
            title: "dial",
            display: "Dial",
            category: "Numbers",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Ask a question"
                },
                dial: {
                    min: {
                        type: "number",
                        "default": 0,
                        display: "Min. Value"
                    },
                    max: {
                        type: "number",
                        "default": 10,
                        display: "Max. Value"
                    },
                    prefix: {
                        type: "html",
                        "default": ""
                    },
                    suffix: {
                        type: "html",
                        "default": ""
                    },
                    increment: {
                        type: "number",
                        "default": 1
                    },
                    labels: {
                        type: "int",
                        min: 0,
                        max: 10,
                        "default": 4
                    },
                    decimals: {
                        type: "int",
                        min: 0,
                        max: 8,
                        "default": 0
                    }
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    value: {
                        type: "number",
                        "default": 5,
                        display: "Correct Value"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag to set the correct value"
                }
            },
            examples: [{
                title: "How many states have over 10% market share?",
                dial: {
                    min: 0,
                    max: 20,
                    labels: 4,
                    prefix: "",
                    suffix: ""
                },
                answer: {
                    value: 10,
                    takeaway: "There are 10 states with over 10% market share",
                    text: "We're a true market leader with 10 states.\n"
                }
            }]
        }
    }), require.register("engine/dial/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c, d, u, p) {
                i.push('<div class="block-xl content-fill"><div class="row content-lg-fill content-sm-ver content-md-ver"><div class="col-lg-6 col-sm-12 content-lg-ver block-ver-lg"><h1 class="text-lg-right text-center fade-in">' + (null == (e = u) ? "" : e) + '</h1></div><div class="col-lg-6 col-sm-12 content-lg-ver text-center"><div class="dial scale-up"><div class="dial-ring"></div><div class="dial-knob dial-knob-input"><div class="dial-knob-value dial-knob-input-value text-lg">Touch&nbsp;to&nbsp;rotate</div></div><div class="dial-knob dial-knob-answer"><div class="dial-knob-value dial-knob-answer-value text-lg">' + (null == (e = s.prefix) ? "" : e) + (null == (e = n.value) ? "" : e) + (null == (e = s.suffix) ? "" : e) + '</div></div><div class="dial-notches">'),
                    function() {
                        var e = new t(c);
                        if ("number" == typeof e.length)
                            for (var n = 0, o = e.length; n < o; n++) {
                                e[n];
                                i.push('<div class="dial-notch"></div>')
                            } else {
                                var o = 0;
                                for (var n in e) {
                                    o++;
                                    e[n];
                                    i.push('<div class="dial-notch"></div>')
                                }
                            }
                    }.call(this), i.push("</div>"), s.labels && (i.push('<div class="dial-labels">'), function() {
                        var t = a;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var r = t[n];
                                i.push('<div class="dial-label"><div class="dial-label-text">' + (null == (e = s.prefix) ? "" : e) + (null == (e = s.decimals ? r.toFixed(s.decimals) : r) ? "" : e) + (null == (e = s.suffix) ? "" : e) + "</div></div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var r = t[n];
                                    i.push('<div class="dial-label"><div class="dial-label-text">' + (null == (e = s.prefix) ? "" : e) + (null == (e = s.decimals ? r.toFixed(s.decimals) : r) ? "" : e) + (null == (e = s.suffix) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push("</div>")), i.push('</div></div></div></div><div class="slide-footer slide-up">'), l ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof d && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = d) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), r && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "Array" in n ? n.Array : "undefined" != typeof Array ? Array : void 0, "answer" in n ? n.answer : "undefined" != typeof answer ? answer : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "dial" in n ? n.dial : "undefined" != typeof dial ? dial : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "labelValues" in n ? n.labelValues : "undefined" != typeof labelValues ? labelValues : void 0, "notches" in n ? n.notches : "undefined" != typeof notches ? notches : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/dial/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/slide"), s = e("lib/prefix"), o = e("views/components/draggy"), n = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s;
                return t = i.__super__.serialize.apply(this, arguments), e = parseFloat(t.dial.increment, 10) || 1, o = parseFloat(t.dial.min, 10), n = parseFloat(t.dial.max, 10), t.notches = Math.round((n - o) / e), t.labels = _.nearest(_.factors(t.notches).map(function(t) {
                    return t
                }), t.dial.labels), t.labelValues = function() {
                    s = [];
                    for (var e = 0, i = t.labels; 0 <= i ? e < i : e > i; 0 <= i ? e++ : e--) s.push(e);
                    return s
                }.apply(this).map(function(i) {
                    var n;
                    return n = new Big(Math.round(i * t.notches / t.labels)), n = n.mul(e).add(t.dial.min)
                }), t
            }, i.prototype.show = function() {
                return this.setEl(this.el.querySelector(".dial"), "dial"), this.setEl(this.el.querySelector(".dial-knob-input"), "knob-input"), this.setEl(this.el.querySelector(".dial-knob-input-value"), "knob-input-value"), this.setEl(this.el.querySelector(".dial-knob-answer"), "knob-answer"), this.setEl(this.el.querySelector(".dial-knob-answer-value"), "knob-answer-value"), this.setEl(this.el.querySelector(".dial-knob-value"), "knob-value"), this.setEl(this.el.querySelectorAll(".dial-notch"), "notches"), this.setEl(this.el.querySelectorAll(".dial-label"), "labels"), this.rotateElements(this.getEl("notches")), this.rotateElements(this.getEl("labels")), this.draggy = new o({
                    el: this.getEl("dial"),
                    radius: this.getEl("dial").offsetWidth / 2,
                    isParent: !0
                }), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop)
            }, i.prototype.rotateElements = function(t) {
                var e, i, n, o, s;
                for (s = [], i = n = 0, o = t.length; n < o; i = ++n) e = t[i], s.push(this.transform(e, {
                    rotate: i / t.length * 360
                }));
                return s
            }, i.prototype.onDrag = function(t, e) {
                return this.currentValue = this.roundValue(t), this.labelEl(this.getEl("knob-value"), this.currentValue), this.transform(this.getEl("knob-input"), {
                    rotate: "" + t.t + "rad",
                    transition: e ? "all 300ms" : "none"
                }), this.transform(this.getEl("knob-input-value"), {
                    x: "-50%",
                    rotate: "" + -t.t + "rad",
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t, e) {
                var i;
                return i = this.roundPos(t), t.t === i || e ? (this.transform(this.getEl("knob-input"), {
                    rotate: "" + t.t + "rad",
                    transition: "all 300ms"
                }), this.transform(this.getEl("knob-input-value"), {
                    x: "-50%",
                    rotate: "" + -t.t + "rad",
                    transition: "all 300ms"
                }), null != this.currentValue ? this.setState("touched") : void 0) : t.reset({
                    t: i
                })
            }, i.prototype.roundValue = function(t) {
                var e, i, n, o, s, r, l;
                return l = this.options.data.dial, e = l.increment, n = l.min, i = l.max, s = i - n, o = Math.round(t.t / (2 * Math.PI) * s / e), r = o * e + n, e < 1 ? Math.round(1 * r / e) / (1 / e) : r
            }, i.prototype.roundPos = function(t) {
                var e, i, n, o, s, r;
                return r = this.options.data.dial, e = r.increment, n = r.min, i = r.max, s = (i - n) / e, o = Math.round(t.t / (2 * Math.PI) * s), 2 * Math.PI * (o / s)
            }, i.prototype.labelEl = function(t, e) {
                var i, n, o, s;
                return s = this.options.data.dial, n = s.prefix, o = s.suffix, i = s.decimals, i = parseFloat(i, 10) || 0, i > 0 && (e = parseFloat(e, 10).toFixed(i)), t.innerHTML = "" + n + e + o
            }, i.prototype.showAnswer = function() {
                return i.__super__.showAnswer.apply(this, arguments), this.animateAnswerKnob(), this.draggy.lock()
            }, i.prototype.isCorrect = function() {
                return this.currentValue === this.options.data.answer.value
            }, i.prototype.animateAnswerKnob = function() {
                var t, e, i, n;
                return n = this.options.data, t = n.answer, e = n.dial, i = (t.value - e.min) / (e.max - e.min), this.transform(this.getEl("knob-answer"), {
                    rotate: "" + this.draggy.t + "rad",
                    transition: "none"
                }), this.transform(this.getEl("knob-answer-value"), {
                    x: "-50%",
                    rotate: "-" + this.draggy.t + "rad",
                    transition: "none"
                }), this.getEl("knob-answer").offsetWidth, this.transform(this.getEl("knob-answer"), {
                    rotate: "" + i * Math.PI * 2 + "rad",
                    transition: this.draggy.locked ? "none" : "all 600ms"
                }), this.transform(this.getEl("knob-answer-value"), {
                    x: "-50%",
                    rotate: "-" + i * Math.PI * 2 + "rad",
                    transition: this.draggy.locked ? "none" : "all 600ms"
                })
            }, i
        }(r), i.exports = n
    }), require.register("engine/drag-to-match/model.yaml", function(t, e, i) {
        i.exports = {
            title: "drag-to-match",
            display: "Drag to Match",
            category: "Relationships",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                reject: {
                    type: "boolean",
                    "default": !1,
                    display: "Reject Answers",
                    help: "Images will go back to where they came from when placed incorrectly\n"
                },
                list: {
                    min: 2,
                    max: 4,
                    type: [{
                        image: {
                            display: "Left",
                            types: ["text", "image"]
                        },
                        name: {
                            display: "Right",
                            types: ["text", "image"],
                            "default": "Image 1"
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag the images to their labels"
                }
            },
            examples: [{
                title: "Match the product with its name",
                answer: {
                    takeaway: "Product X, Y and Z are best-sellers\n",
                    text: "The first is Product X, then Product Y and thirdly Product Z.\n"
                },
                list: [{
                    image: "img/examples/product-1.png",
                    imageType: "image",
                    name: "Product X"
                }, {
                    image: "img/examples/product-2.png",
                    imageType: "image",
                    name: "Product Y"
                }, {
                    image: "img/examples/product-3.png",
                    imageType: "image",
                    name: "Product Z"
                }]
            }, {
                title: "What color are the products?",
                reject: !0,
                answer: {
                    takeaway: "Product X and Z are blue/green, Product Y is yellow\n",
                    text: "The first is Product X, then Product Y and thirdly Product Z.\n"
                },
                list: [{
                    image: "img/examples/product-1.png",
                    imageType: "image",
                    name: "Blue/Green Products"
                }, {
                    image: "img/examples/product-2.png",
                    imageType: "image",
                    name: "Yellow Products"
                }, {
                    image: "img/examples/product-3.png",
                    imageType: "image",
                    name: "Blue/Green Products"
                }]
            }]
        }
    }), require.register("engine/drag-to-match/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s, r, l, a, c, d, u, p) {
                n["multi-content"] = e = function(n, o) {
                        this && this.block, this && this.attributes || {};
                        switch (o = o || t, o[n + "Type"]) {
                            case "image":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                                break;
                            case "video":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                                break;
                            case "audio":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                                break;
                            case "iframe":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                                var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                                s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                                break;
                            default:
                                i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                        }
                    }, i.push('<div class="block-ver-lg block-hor-xl content-fill text-center"><div' + jade.cls(["drag-to-match-outer", "content-fill", l ? "long-text" : "short-text"], [null, null, !0]) + '><h1 class="drag-to-match-title block-ver-md tight">' + (null == (e = u) ? "" : e) + '</h1><div class="drag-to-match-inner row block-ver-md block-box-sizing"><div class="col-sm-6 draggy-container slide-up content-fill"><div' + jade.cls(["draggies", "clearfix", "content-fill", a.length > 1 ? "text-right" : ""], [null, null, null, !0]) + ">"),
                    function() {
                        var t = a;
                        if ("number" == typeof t.length)
                            for (var e = 0, o = t.length; e < o; e++) {
                                var s = t[e];
                                i.push("<div" + jade.attr("style", "height: " + 100 / a.length + "%", !0, !1) + ' class="drag-to-match-item block-ver-sm block-box-sizing block-inline"><div class="content-fill block-dk block-sm"><div' + jade.attr("data-id", s.id, !0, !1) + jade.attr("data-name", s.name, !0, !1) + ' class="draggy">'), n["multi-content"]("image", s), i.push("</div></div></div>")
                            } else {
                                var o = 0;
                                for (var e in t) {
                                    o++;
                                    var s = t[e];
                                    i.push("<div" + jade.attr("style", "height: " + 100 / a.length + "%", !0, !1) + ' class="drag-to-match-item block-ver-sm block-box-sizing block-inline"><div class="content-fill block-dk block-sm"><div' + jade.attr("data-id", s.id, !0, !1) + jade.attr("data-name", s.name, !0, !1) + ' class="draggy">'), n["multi-content"]("image", s), i.push("</div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div><div class="col-sm-6 droppy-container slide-up content-fill"><div' + jade.cls(["droppies", "clearfix", "content-fill", c.length > 1 ? "text-left" : ""], [null, null, null, !0]) + ">"),
                    function() {
                        var t = c;
                        if ("number" == typeof t.length)
                            for (var e = 0, o = t.length; e < o; e++) {
                                var s = t[e];
                                i.push("<div" + jade.attr("style", "height: " + 100 / c.length + "%", !0, !1) + ' class="drag-to-match-item block-ver-sm block-box-sizing block-inline"><div' + jade.attr("data-name", s.name, !0, !1) + ' class="content-fill droppy block-sm block-dk"><div class="droppy-zone"></div>'), n["multi-content"]("name", s), i.push("</div></div>")
                            } else {
                                var o = 0;
                                for (var e in t) {
                                    o++;
                                    var s = t[e];
                                    i.push("<div" + jade.attr("style", "height: " + 100 / c.length + "%", !0, !1) + ' class="drag-to-match-item block-ver-sm block-box-sizing block-inline"><div' + jade.attr("data-name", s.name, !0, !1) + ' class="content-fill droppy block-sm block-dk"><div class="droppy-zone"></div>'), n["multi-content"]("name", s), i.push("</div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div></div><div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof d && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = d) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in o ? o.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in o ? o.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in o ? o.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "isLong" in o ? o.isLong : "undefined" != typeof isLong ? isLong : void 0, "list" in o ? o.list : "undefined" != typeof list ? list : void 0, "names" in o ? o.names : "undefined" != typeof names ? names : void 0, "prompt" in o ? o.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in o ? o.title : "undefined" != typeof title ? title : void 0, "undefined" in o ? o.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/drag-to-match/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/slide"), s = e("lib/prefix"), o = e("views/components/draggy"), n = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, r, l;
                for (t = i.__super__.serialize.apply(this, arguments), t.list = function() {
                        var i, n, s, r;
                        for (s = t.list, r = [], e = i = 0, n = s.length; i < n; e = ++i) o = s[e], r.push(_.extend({
                            id: e
                        }, o));
                        return r
                    }(), t.list = _.shuffle(t.list), t.names = _.chain(t.list).shuffle().filter(function(t, e, i) {
                        var n;
                        return n = t.name, _.pluck(i, "name").indexOf(n) === e
                    }).value(), n = !1, l = t.list, s = 0, r = l.length; s < r; s++) o = l[s], "text" !== o.nameType && "" !== o.nameType && o.nameType || (n = n || o.name.length > 32), "text" !== o.imageType && "" !== o.imageType || (n = n || o.image.length > 32);
                return t.isLong = n, t
            }, i.prototype.show = function() {
                var t, e;
                return this.listenTo(this, "resize", this.onResize), this.droppies = this.getElements(".droppy"), this.setHeight(), this.draggies = function() {
                    var i, n, s, r;
                    for (s = this.el.querySelectorAll(".draggy"), r = [], i = 0, n = s.length; i < n; i++) e = s[i], t = new o({
                        el: e
                    }), t.id = e.dataset.id, this.listenTo(t, "drag", this.onDrag), this.listenTo(t, "drop", this.onDrop), r.push(t);
                    return r
                }.call(this)
            }, i.prototype.setHeight = function() {
                var t, e, i;
                return e = this.el.querySelector(".drag-to-match-outer"), i = this.el.querySelector(".drag-to-match-title"), t = this.el.querySelector(".drag-to-match-inner"), t.style.height = e.offsetHeight - i.offsetHeight + "px"
            }, i.prototype.onDrag = function(t, e) {
                var i, n, o, s, r, l;
                for (e && (this.droppies = this.getElements(".droppy", this.droppies)), i = t.closest(_.pluck(this.droppies, "bounds")), l = this.droppies, o = s = 0, r = l.length; s < r; o = ++s) n = l[o], n.el.classList.toggle("active", o === i), n.isActive = o === i;
                return this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    scale: 1.25,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t) {
                var e, i, n, o, s, r, l, a, c;
                return c = t.offset, o = c.left, s = c.top, r = c.width, n = c.height, i = function() {
                    var t, e, n, o;
                    for (n = this.droppies, o = [], t = 0, e = n.length; t < e; t++) i = n[t], i.isActive && o.push(i);
                    return o
                }.call(this)[0], l = a = 0, i ? (e = i.bounds, l = Math.round(e.left + e.width / 2 - o - r / 2), a = Math.round(e.top + e.height / 2 - s - n / 2)) : t.isPositioned = !1, this.options.data.reject && (null != i ? i.el.dataset.name : void 0) !== t.el.dataset.name && (null != i && (i.isActive = !1), l = a = 0, i && (i.el.classList.add("incorrect"), window.setTimeout(function() {
                    return i.el.classList.remove("incorrect")
                }, 400))), t.x !== l || t.y !== a ? t.reset({
                    x: l,
                    y: a
                }) : (this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    transition: "all 300ms"
                }), this.checkAnswer(t)), this.setState(this.isTouched() ? "touched" : "prompt")
            }, i.prototype.onResize = function(t) {
                var e, i, n, o, s, r, l, a, c;
                for (a = this.droppies || [], o = 0, r = a.length; o < r; o++)
                    for (i = a[o], c = i.contains, s = 0, l = c.length; s < l; s++) n = c[s], e = this.getDraggyFromId(n), null != e && e.reset({
                        x: i.el.offsetLeft - e.el.offsetLeft,
                        y: i.el.offsetTop - e.el.offsetTop
                    });
                return this.setHeight()
            }, i.prototype.getDraggyFromId = function(t) {
                return _.findWhere(this.draggies, {
                    id: t
                })
            }, i.prototype.getElements = function(t, e) {
                var i, n, o, s, r, l, a, c, d, u, p;
                if (e) {
                    for (u = [], s = 0, l = e.length; s < l; s++) c = e[s], n = c.el, i = c.contains, u.push({
                        el: n,
                        contains: i,
                        bounds: n.getBoundingClientRect()
                    });
                    return u
                }
                for (d = this.el.querySelectorAll(t), p = [], o = r = 0, a = d.length; r < a; o = ++r) n = d[o], p.push({
                    el: n,
                    bounds: n.getBoundingClientRect(),
                    contains: []
                });
                return p
            }, i.prototype.resetDraggy = function(t) {
                return t.reset(), t.el.classList.remove("is-positioned"), t.isPositioned = !1
            }, i.prototype.checkAnswer = function(t) {
                var e, i, n, o, s, r;
                for (s = this.droppies, r = [], n = 0, o = s.length; n < o; n++) i = s[n], i.el.classList.remove("active"), e = _.include(i.contains, t.id), i.isActive ? (t.el.classList.add("is-positioned"), t.isPositioned = !0, i.contains.length > 0 && !e && this.isOnlyUnique() && (i.isActive = !1, this.resetDraggy(this.getDraggyFromId(i.contains[0]))), i.contains = _.uniq(i.contains.concat(t.id))) : e && (i.contains = _.without(i.contains, t.id)), r.push(i.el.classList.toggle("contains", i.contains.length > 0));
                return r
            }, i.prototype.isTouched = function() {
                var t, e;
                return e = function() {
                    var e, i, n, o;
                    for (n = this.draggies, o = [], e = 0, i = n.length; e < i; e++) t = n[e], t.isPositioned && o.push(t);
                    return o
                }.call(this), e.length === this.options.data.list.length
            }, i.prototype.isCorrect = function() {
                var t, e;
                return t = function() {
                    var t, i, n, o, s = this;
                    for (n = this.droppies, o = [], t = 0, i = n.length; t < i; t++) e = n[t], _.filter(e.contains, function(t) {
                        return e.el.dataset.name === s.getDraggyFromId(t).el.dataset.name
                    }).length === e.contains.length && o.push(e);
                    return o
                }.call(this), t.length === this.droppies.length
            }, i.prototype.showAnswer = function() {
                var t, e, n, o, s, r, l, a, c, d, u, p;
                for (i.__super__.showAnswer.apply(this, arguments), d = this.droppies, p = [], r = 0, a = d.length; r < a; r++) {
                    for (e = d[r], n = !0, u = e.contains, l = 0, c = u.length; l < c; l++) o = u[l], t = this.getDraggyFromId(o), s = e.el.dataset.name === t.el.dataset.name, t.el.classList.toggle("incorrect", !s), s || (n = !1);
                    p.push(e.el.classList.toggle("correct", n))
                }
                return p
            }, i.prototype.isOnlyUnique = function() {
                return _.chain(this.options.data.list).pluck("name").uniq().value().length === this.options.data.list.length
            }, i
        }(r), i.exports = n
    }), require.register("engine/exit/model.yaml", function(t, e, i) {
        i.exports = {
            title: "exit",
            display: "Exit Lesson",
            category: "Exit",
            model: {
                title: {
                    type: "html",
                    "default": "That's it!"
                },
                content: {
                    type: "html",
                    "default": "Nice work. You’ve reached the end of this lesson."
                },
                buttonText: {
                    type: "html",
                    "default": "Exit Lesson",
                    display: "Button CTA"
                }
            }
        }
    }), require.register("engine/exit/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="content-ver text-center"><div class="block-lg"><h1 class="slide-up">' + (null == (e = s) ? "" : e) + '</h1><h2 class="slide-up delay-1 tight">' + (null == (e = o) ? "" : e) + "</h2></div>"), n.webAccess || i.push('<div class="block-lg"><div class="btn btn-solid slide-up">' + (null == (e = t) ? "" : e) + "</div></div>"), i.push("</div>")
            }.call(this, "buttonText" in n ? n.buttonText : "undefined" != typeof buttonText ? buttonText : void 0, "config" in n ? n.config : "undefined" != typeof config ? config : void 0, "content" in n ? n.content : "undefined" != typeof content ? content : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/exit/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), o = Application.actions().Lesson, n = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .btn": "exit"
                }
            }, i.prototype.show = function() {
                return o.complete()
            }, i
        }(s), i.exports = n
    }), require.register("engine/expandable-list/model.yaml", function(t, e, i) {
        i.exports = {
            title: "expandable-list",
            display: "Expandable List",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Display a list of bullet points",
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                list: {
                    type: [{
                        title: {
                            type: "html"
                        },
                        content: {
                            type: "html"
                        }
                    }],
                    min: 1,
                    max: 6
                },
                focus: {
                    type: "boolean",
                    "default": !1,
                    help: "Only reveal one item at a time.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Tap to see more"
                }
            },
            examples: [{
                title: "Learn more about our product range",
                list: [{
                    title: "Product X",
                    content: "This is the original product in our line and is a great source of pride for the company.\n"
                }, {
                    title: "Product Y",
                    content: "Product Y was introduced to appeal to a broader customers base and was a great success.\n"
                }, {
                    title: "Product Z",
                    content: "Completing our range is Product Z. It appeals to old and new customers alike, making us a company for everyone.\n"
                }]
            }]
        }
    }), require.register("engine/expandable-list/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content-scroll content-fill block-hor-xl fade-in"><div class="content-scroll-inner block-ver-lg"><h1 class="text-center slide-up">' + (null == (e = l) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-10 col-md-offset-1"><div class="accordion">'),
                    function() {
                        var t = s;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var r = t[n],
                                    l = "middle";
                                0 === n && (l = "first"), n === s.length - 1 && (l = "last"), i.push("<div" + jade.cls(["item", "item-" + l], [null, !0]) + "><div" + jade.cls(["item-button", "btn", "btn-solid", "delay-" + n], [null, null, null, !0]) + '><div class="accordion-text text-left">' + (null == (e = r.title) ? "" : e) + '</div></div><div class="item-content block-dk"><div class="block-md"><div class="text-md">' + (null == (e = r.content) ? "" : e) + "</div></div></div></div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var r = t[n],
                                        l = "middle";
                                    0 === n && (l = "first"), n === s.length - 1 && (l = "last"), i.push("<div" + jade.cls(["item", "item-" + l], [null, !0]) + "><div" + jade.cls(["item-button", "btn", "btn-solid", "delay-" + n], [null, null, null, !0]) + '><div class="accordion-text text-left">' + (null == (e = r.title) ? "" : e) + '</div></div><div class="item-content block-dk"><div class="block-md"><div class="text-md">' + (null == (e = r.content) ? "" : e) + "</div></div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "list" in n ? n.list : "undefined" != typeof list ? list : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/expandable-list/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("../scrollable/view"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .item-button": "toggleItem",
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.list = _.filter(t.list, function(t) {
                    return t.title && t.content
                }), t.hasPrompt = !0, t
            }, i.prototype.show = function() {
                var t, e, i, n, o, s, r, l;
                for (this.setEl(this.el.querySelectorAll(".item"), "items"), this.setEl(this.el.querySelector(".content-scroll"), "scroller"), this.resetAlignment(!1), n = 0, this.itemsY = [], r = this.getEl("items"), e = o = 0, s = r.length; o < s; e = ++o) i = r[e], 0 === e ? this.itemsY[e] = 0 : (t = null != (l = i.previousElementSibling) ? l.lastChild : void 0) && (n -= (null != t ? t.offsetHeight : void 0) || 0, this.transform(i, {
                    y: n
                }), this.itemsY[e] = n);
                return this.setState("prompt"), this.listenTo(this, "resize", this.onResize)
            }, i.prototype.onResize = function() {
                var t, e, i, n, o;
                for (o = this.getEl("items"), t = i = 0, n = o.length; i < n; t = ++i) e = o[t], e.classList.remove("active"), this.transform(e.lastChild, {
                    scale: "1, 0",
                    opacity: 0
                });
                return this.show()
            }, i.prototype.toggleItem = function(t, e, i) {
                var n, o, s, r, l, a, c, d, u, p, h, f, m, v, g, y, b, x;
                if (null == i && (i = !0), n = (null != t ? t.currentTarget : void 0) || e, s = n.parentNode, o = s.lastChild, a = !s.classList.contains("active"), h = t || !i, this.setState("touched"), this.options.data.focus && i)
                    for (b = this.getEl("items"), m = 0, g = b.length; m < g; m++) u = b[m], u !== s && u.classList.contains("active") && (p = u.firstChild, this.toggleItem(null, p, !1));
                for (s.classList.toggle("active"), d = a ? 1 : 0, this.transform(o, {
                        scale: "1, " + d,
                        opacity: d,
                        transition: h ? "all 300ms" : ""
                    }), l = !1, f = o.offsetHeight * (a ? 1 : -1), null == this.itemsY && (this.itemsY = []), x = this.getEl("items"), r = v = 0, y = x.length; v < y; r = ++v) c = x[r], l && (null == this.itemsY[r] && (this.itemsY[r] = 0), this.transform(c, {
                    y: this.itemsY[r] + f,
                    transition: h ? "all 300ms" : ""
                }), this.itemsY[r] += f), c === s && (l = !0);
                return this.resetAlignment(h)
            }, i.prototype.resetAlignment = function(t) {
                var e, i, n, o, s, r, l, a, c, d;
                if (n = 0, l = this.getEl("scroller"), null != l && this.getEl("items").length) {
                    for (d = this.getEl("items"), o = a = 0, c = d.length; a < c; o = ++a) s = d[o], e = s.firstChild, n += e.offsetHeight, s.classList.contains("active") && (n += s.lastChild.offsetHeight);
                    return s.parentNode.style.height = n + "px", i = this.el.offsetHeight - l.firstChild.offsetHeight, r = Math.max(i / 2, 0), this.transform(l.firstChild, {
                        y: r,
                        transition: t ? "all 300ms" : ""
                    })
                }
            }, i.prototype.refresh = function(t) {
                var e, n, o, s, r, l;
                for (l = t.data.list, n = s = 0, r = l.length; s < r; n = ++s) o = l[n], _.isEqual(this.options.data.list[n], o) || (e = n);
                if (i.__super__.refresh.apply(this, arguments), null != e) return this.toggleItem(null, this.getEl("items")[e].firstChild)
            }, i
        }(o), i.exports = n
    }), require.register("engine/game-elevator/components/container.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r) {
                i.push('<div class="game-image-title text-center text-bold text-md">' + (null == (e = s) ? "" : e) + '</div><div class="game-box-inner row content-fill"><div class="col-md-4 col-sm-4 content-fill"><div class="block-dk content-fill"><div class="block-md game-image-container text-center"><img' + jade.attr("src", o, !0, !1) + ' class="game-image"/></div></div></div><div class="col-md-8 col-sm-8 content-fill"><div class="block-flex-ver text-md direction-column block-flex-hor">'),
                    function() {
                        var o = t;
                        if ("number" == typeof o.length)
                            for (var s = 0, r = o.length; s < r; s++) {
                                var l = o[s];
                                i.push("<div" + jade.attr("data-is-correct", n.indexOf(l) > -1, !0, !1) + jade.attr("data-index", s, !0, !1) + ' class="btn-attribute block-flex-child block-flex-ver"><h2 class="tight block-hor-lg btn-text">' + (null == (e = l) ? "" : e) + "</h2></div>")
                            } else {
                                var r = 0;
                                for (var s in o) {
                                    r++;
                                    var l = o[s];
                                    i.push("<div" + jade.attr("data-is-correct", n.indexOf(l) > -1, !0, !1) + jade.attr("data-index", s, !0, !1) + ' class="btn-attribute block-flex-child block-flex-ver"><h2 class="tight block-hor-lg btn-text">' + (null == (e = l) ? "" : e) + "</h2></div>")
                                }
                            }
                    }.call(this), i.push("</div></div></div>")
            }.call(this, "all" in n ? n.all : "undefined" != typeof all ? all : void 0, "correct" in n ? n.correct : "undefined" != typeof correct ? correct : void 0, "image" in n ? n.image : "undefined" != typeof image ? image : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-elevator/components/description.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                i.push('<div class="text-sm-center"><div class="text-md game-description">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push("<p>" + (null == (e = r) ? "" : e) + "</p>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push("<p>" + (null == (e = r) ? "" : e) + "</p>")
                                }
                            }
                    }.call(this), i.push('</div><div class="block-ver-md"><div class="btn btn-muted btn-continue">Continue</div></div></div>')
            }.call(this, "paragraphs" in n ? n.paragraphs : "undefined" != typeof paragraphs ? paragraphs : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-elevator/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-elevator",
            display: "The Elevator Game",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "How would you describe..?"
                },
                description: {
                    type: "html",
                    "default": "Which of these facts matches the product? Tap on the fact when the product is directly over the fact for the most points.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Tap the matching attributes"
                },
                images: {
                    min: 3,
                    max: 12,
                    type: [{
                        title: {
                            type: "html"
                        },
                        image: {
                            type: "image"
                        },
                        correct: {
                            min: 1,
                            max: 4,
                            type: [{
                                type: "html"
                            }]
                        },
                        incorrect: {
                            min: 0,
                            max: 4,
                            "default": null,
                            type: [{
                                type: "html"
                            }]
                        },
                        description: {
                            type: "html"
                        }
                    }],
                    help: "Add some correct and/or incorrect attributes to for the image. The total number of attributes should be 3 or 4.\n"
                },
                combine: {
                    type: "boolean",
                    display: "Mix all attributes together",
                    "default": !0,
                    help: "Use attributes of other images as incorrect options."
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 2e4,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 5e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 15e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                title: "How would you describe..?",
                description: "Which of these facts matches the product? Tap on the fact when the product is directly over the fact for the most points.\n",
                prompt: "Tap the matching attributes",
                images: [{
                    title: "Product X",
                    image: "img/examples/product-1.png",
                    correct: ["This is the very first, premier product in the range", "It’s Classic", "Cool blue packaging"],
                    description: "This is your chance to talk about the product or image. You can list all of its qualities, so everyone is excited and familiar with it.\n"
                }, {
                    title: "Product Y",
                    image: "img/examples/product-2.png",
                    correct: ["It’s the second product", "It’s our value pack", "Mustard yellow packaging"],
                    description: "This is your chance to talk about the product or image. You can list all of its qualities, so everyone is excited and familiar with it.\n"
                }, {
                    title: "Product Z",
                    image: "img/examples/product-3.png",
                    correct: ["It’s ultra-slim", "It’s mint green", "It’s new!"],
                    description: "This is your chance to talk about the product or image. You can list all of its qualities, so everyone is excited and familiar with it.\n"
                }]
            }]
        }
    }), require.register("engine/game-elevator/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = r) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), o = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = r) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", o ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), o && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing"><div class="full-screen content-fill"><div class="game-state row block-xl"><div class="col-md-6 col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-md-6 col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><h4 class="game-prompt block-sm text-md tight text-center">' + (null == (e = s) ? "" : e) + '</h4><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div><div class="content-fill block-hor-xl"><div class="game-box content-fill"></div></div></div>')
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-elevator/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c = {}.hasOwnProperty,
            d = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) c.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/base/game"), l = e("lib/preload"), o = e("lib/easie"), n = e("lib/device"), s = function(t) {
            function i() {
                return a = i.__super__.constructor.apply(this, arguments)
            }
            return d(i, t), i.prototype.template = e("./template"), i.prototype.templates = {
                container: e("./components/container"),
                description: e("./components/description")
            }, i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .goto-next": "next",
                    "iostap .btn-attribute": "checkAnswer",
                    "iostap .btn-continue": "hideDescription"
                }
            }, i.prototype.initializeData = function() {
                var t, e, n = this;
                return i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0), e = this.options.data.images, e = (e || []).filter(function(t) {
                    return null != t.image && _.compact(t.correct).length > 0
                }), e = e.map(function(t) {
                    var e, i, n, o;
                    for (o = ["correct", "incorrect"], i = 0, n = o.length; i < n; i++) e = o[i], t[e] = _.compact(t[e]);
                    return t
                }), this.setArray("variant", e), l.load(function() {
                    var i, n, o;
                    for (o = [], i = 0, n = e.length; i < n; i++) t = e[i].image, o.push(t);
                    return o
                }(), function(t) {
                    return null == t && (t = []), n.setArray("variant", _.reject(e, function(e, i) {
                        return _.include(t, e.image)
                    }))
                })
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-box"), "container")
            }, i.prototype.showNext = function(t) {
                var e, i, n, o, s, r, l, a, c = this;
                for (t || this.unpauseGame(), this.game.timer.timestamp = Date.now(), s = this.getRandom("variant"), e = s.correct, o = this.options.data.combine ? _.chain(this.getArray("variant")).without(s).pluck("correct").flatten().value() : s.incorrect, e = _.sample(e, 4), o = _.sample(o, 4 - e.length), this.getEl("container").innerHTML = this.templates.container({
                        title: s.title,
                        image: s.image,
                        correct: s.correct,
                        all: _.chain().union(e, o).shuffle().value()
                    }), this.setEl(this.getEl("container").querySelector(".game-image-container"), "image"), this.setEl(this.getEl("container").querySelectorAll(".btn-attribute"), "answers"), this.transform(this.getEl("image"), {
                        opacity: 0,
                        x: "-100%"
                    }), a = this.getEl("answers"), n = r = 0, l = a.length; r < l; n = ++r) i = a[n], this.transform(i, {
                    opacity: 0,
                    x: "100%"
                });
                return this.getEl("image").firstChild.complete ? this.onImageLoad() : this.getEl("image").firstChild.onload = function() {
                    return c.onImageLoad()
                }
            }, i.prototype.onImageLoad = function() {
                var t, e, i, n, o, s, r, l = this;
                for (t = this.getEl("image").parentNode.offsetHeight, n = this.getEl("image").offsetHeight, this.game.extra.set({
                        totalHeight: t - n,
                        imageHeight: n
                    }), this.getEl("container").classList.remove("hide-description"), this.transform(this.getEl("image"), {
                        opacity: 1,
                        transition: "all 300ms"
                    }), r = this.getEl("answers"), i = o = 0, s = r.length; o < s; i = ++o) e = r[i], this.transform(e, {
                    opacity: 1,
                    transition: "all 300ms " + 100 * i + "ms"
                });
                return this.game.extra.set({
                    animateImage: !1
                }), window.setTimeout(function() {
                    var t, n, o, s;
                    for (l.game.extra.set({
                            animateImage: !0
                        }), l.transition(l.getEl("image"), ""), o = l.getEl("answers"), s = [], i = t = 0, n = o.length; t < n; i = ++t) e = o[i], s.push(l.transition(e, ""));
                    return s
                }, 600)
            }, i.prototype.onTimerChange = function(t) {
                var e, n, o, s, r, l, a, c, d;
                if (i.__super__.onTimerChange.apply(this, arguments), this.game.extra.get("animateImage") && null != t.changed.remaining && null != this.getEl("image")) {
                    for (s = this.getPercent(), r = this.game.extra.get("totalHeight") * s, this.transform(this.getEl("image"), {
                            y: r
                        }), c = this.getEl("answers"), d = [], o = l = 0, a = c.length; l < a; o = ++l) n = c[o], n.classList.contains("selected") || (e = .4 * (1 - Math.abs(this.getDist(o, s))), d.push(n.style.backgroundColor = "rgba(255, 255, 255, " + e + ")"));
                    return d
                }
            }, i.prototype.checkAnswer = function(t) {
                var e, i, n, o, s, r;
                if (!this.game.timer.get("paused") && !this.getEl("container").classList.contains("hide-attributes")) return e = t.currentTarget, e.classList.add("selected"), r = e.dataset, o = r.isCorrect, i = r.index, n = _.chain(this.getEl("answers")).filter(function(t) {
                    return t.dataset.isCorrect && !t.classList.contains("selected")
                }).isEmpty().value(), o ? (s = this.getPercent(), this.onCorrectAnswer({
                    score: 500,
                    time: n ? 1e3 : 0,
                    bonus: this.getBonus(1e3, +i, s),
                    tally: !0
                })) : this.onIncorrectAnswer({
                    time: 1e3,
                    score: 500,
                    tally: !0
                }), n || !o ? this.showDescription() : void 0
            }, i.prototype.showDescription = function() {
                var t, e, i, o, s, r, l, a = this;
                for (l = this.getEl("answers"), o = s = 0, r = l.length; s < r; o = ++s) i = l[o], this.transform(i, {
                    opacity: 0,
                    x: "100%",
                    transition: "all 300ms " + 100 * o + "ms"
                });
                return this.getEl("container").classList.add("hide-attributes"), this.pauseGame(), e = this.templates.description({
                    paragraphs: this.data.variant.lastValue.description.split(/\n+/)
                }), t = this.getEl("answers").item(0).parentNode, window.setTimeout(function() {
                    var i, o, s, r, l, c, d, u;
                    return t.innerHTML = e, n.isSmallScreen() ? (u = 1.5, c = a.getEl("container").offsetHeight, l = t.firstChild.offsetHeight + a.getEl("image").offsetHeight * u, s = "100%", r = (c - l) / 2, i = "-29.5%", o = a.getEl("image").offsetHeight * u - t.firstChild.offsetTop + r) : (u = 1, d = 16, s = 0, r = t.firstChild.offsetTop - d, i = 0, o = 0), a.transform(a.getEl("image"), {
                        scale: u,
                        x: s,
                        y: r,
                        transition: "all 300ms"
                    }), a.transform(t, {
                        x: i,
                        y: o,
                        transition: "all 300ms"
                    })
                }, 600)
            }, i.prototype.hideDescription = function() {
                var t = this;
                return this.getEl("container").classList.add("hide-description"), window.setTimeout(function() {
                    return t.getEl("container").classList.remove("hide-attributes"), t.showNext(), t.game.timer.trigger("count", {
                        callback: function() {
                            return t.game.timer.trigger("start", {
                                callback: function() {
                                    return t.endGame()
                                }
                            })
                        }
                    })
                }, 600)
            }, i.prototype.getDuration = function() {
                return 3e3
            }, i.prototype.getPercent = function() {
                var t, e, i;
                return i = Date.now() - this.game.timer.timestamp, e = this.getDuration(), t = 2 * Math.PI, (1 - Math.sin(i * t / e)) / 2
            }, i.prototype.getDist = function(t, e) {
                return Math.abs(t / (this.getEl("answers").length - 1) - e)
            }, i.prototype.getBonus = function(t, e, i) {
                var n;
                return n = 1 - 2 * this.getDist(e, i), Math.floor(n * t)
            }, i
        }(r), i.exports = s
    }), require.register("engine/game-image-word-match/components/container.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="text-center content-fill"><div class="match-top"><div class="content-ver"><h4 class="match-prompt block-lg text-md">' + (null == (e = n) ? "" : e) + '</h4><div class="match-image-container block-md block-lt text-center"><img' + jade.attr("src", t.image, !0, !1) + ' class="match-image"/></div></div></div><div class="match-words clearfix text-lg">'),
                    function() {
                        var n = s;
                        if ("number" == typeof n.length)
                            for (var o = 0, r = n.length; o < r; o++) {
                                var l = n[o];
                                i.push("<div" + jade.attr("data-answer", l, !0, !1) + jade.attr("data-is-correct", l === t.title, !0, !1) + jade.cls(["btn-word", "text-center", "delay-" + o], [null, null, !0]) + ">" + (null == (e = l) ? "" : e) + "</div>")
                            } else {
                                var r = 0;
                                for (var o in n) {
                                    r++;
                                    var l = n[o];
                                    i.push("<div" + jade.attr("data-answer", l, !0, !1) + jade.attr("data-is-correct", l === t.title, !0, !1) + jade.cls(["btn-word", "text-center", "delay-" + o], [null, null, !0]) + ">" + (null == (e = l) ? "" : e) + "</div>")
                                }
                            }
                    }.call(this), i.push("</div></div>")
            }.call(this, "image" in n ? n.image : "undefined" != typeof image ? image : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in n ? n.undefined : void 0, "words" in n ? n.words : "undefined" != typeof words ? words : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-image-word-match/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-image-word-match",
            display: "Image/Word Match",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Match the image to the word"
                },
                description: {
                    type: "html",
                    "default": "Select the correct word related to the image. Speed and accuracy will score you the most points.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Select the word that matches the image"
                },
                images: {
                    min: 3,
                    max: 20,
                    type: [{
                        image: {
                            type: "image"
                        },
                        title: {
                            type: "html"
                        }
                    }]
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 2e4,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 5e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 15e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                images: [{
                    image: "img/examples/product-1.png",
                    title: "Product X"
                }, {
                    image: "img/examples/product-2.png",
                    title: "Product Y"
                }, {
                    image: "img/examples/product-3.png",
                    title: "Product Z"
                }],
                challenge_configuration: {
                    nb_stars: 3
                },
                title: "Match the image to the word",
                description: "Select the correct word related to the image. Speed and accuracy will score you the most points.\n",
                prompt: "Select the word that matches the image"
            }]
        }
    }), require.register("engine/game-image-word-match/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = s) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), o = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = s) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", o ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), o && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing full-screen"><div class="game-state row block-xl"><div class="col-md-6 col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-md-6 col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><div class="game-box block-xl content-fill"></div><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div>')
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-image-word-match/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/base/game"), r = e("./components/container"), s = e("lib/preload"), n = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .goto-next": "next",
                    "iostap  .btn-word": "checkAnswer"
                }
            }, i.prototype.initializeData = function() {
                var t, e = this;
                return i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0), t = _.filter(this.options.data.images, function(t) {
                    return t.title && "" !== t.title
                }), this.setArray(t, "images"), s.load(t.map(function(t) {
                    return t.image
                }), function(i) {
                    return e.setArray(_.reject(t, function(t) {
                        return i.indexOf(t.image) > -1
                    }), "images")
                })
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-box"), "container")
            }, i.prototype.startGame = function() {
                return this.game.timer.timestamp = Date.now(), i.__super__.startGame.apply(this, arguments)
            }, i.prototype.showNext = function(t) {
                var e;
                return e = this.getRandom("images"), this.game.timer.timestamp = Date.now(), this.getEl("container").innerHTML = r(_.extend({}, this.options.data, {
                    image: e,
                    words: _.chain(this.getArray("images")).pluck("title").without(e.title).uniq().sample(2).concat(e.title).shuffle().value()
                })), this.getEl("container").offsetTop, this.getEl("container").classList.remove("hidden")
            }, i.prototype.checkAnswer = function(t) {
                var e, i, n, o, s = this;
                if (!this.game.timer.get("paused")) return o = t.currentTarget.dataset, n = o.word, i = o.isCorrect, null != i ? (e = this.getBonus(this.game.timer.timestamp - Date.now()), this.onCorrectAnswer({
                    score: 500,
                    time: 1e3,
                    bonus: e,
                    tally: !0
                })) : this.onIncorrectAnswer({
                    time: 300,
                    bonus: e,
                    tally: !0
                }), this.getEl("container").classList.add("hidden"), window.setTimeout(function() {
                    return s.showNext()
                }, 1200)
            }, i
        }(o), i.exports = n
    }), require.register("engine/game-jeopardy/components/menu.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                var o = 12 / t.length,
                    s = "col-sm-" + o + " col-md-" + o;
                i.push('<div class="content-ver block-ver-md"><div class="row text-center">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, r = n.length; o < r; o++) {
                                var l = n[o];
                                i.push("<h2" + jade.cls(["tight", "game-category-title", s], [null, null, !0]) + '><div class="content-ver">' + (null == (e = l.title) ? "" : e) + "</div></h2>")
                            } else {
                                var r = 0;
                                for (var o in n) {
                                    r++;
                                    var l = n[o];
                                    i.push("<h2" + jade.cls(["tight", "game-category-title", s], [null, null, !0]) + '><div class="content-ver">' + (null == (e = l.title) ? "" : e) + "</div></h2>")
                                }
                            }
                    }.call(this), i.push('</div><div class="row text-center">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, r = n.length; o < r; o++) {
                                var l = n[o];
                                i.push("<div" + jade.cls(["game-category", s], [null, !0]) + '><div class="block-ver-sm">'),
                                    function() {
                                        var t = l.questions;
                                        if ("number" == typeof t.length)
                                            for (var n = 0, s = t.length; n < s; n++) {
                                                t[n];
                                                i.push("<div" + jade.attr("data-category", o, !0, !1) + jade.attr("data-question", n, !0, !1) + ' class="btn-question block-ver-sm"><div' + jade.cls(["block-md", "block-dk", "stars-" + (n + 1)], [null, null, !0]) + '><div class="text-lg">' + jade.escape(null == (e = 200 * (n + 1)) ? "" : e) + "</div></div></div>")
                                            } else {
                                                var s = 0;
                                                for (var n in t) {
                                                    s++;
                                                    t[n];
                                                    i.push("<div" + jade.attr("data-category", o, !0, !1) + jade.attr("data-question", n, !0, !1) + ' class="btn-question block-ver-sm"><div' + jade.cls(["block-md", "block-dk", "stars-" + (n + 1)], [null, null, !0]) + '><div class="text-lg">' + jade.escape(null == (e = 200 * (n + 1)) ? "" : e) + "</div></div></div>")
                                                }
                                            }
                                    }.call(this), i.push("</div></div>")
                            } else {
                                var r = 0;
                                for (var o in n) {
                                    r++;
                                    var l = n[o];
                                    i.push("<div" + jade.cls(["game-category", s], [null, !0]) + '><div class="block-ver-sm">'),
                                        function() {
                                            var t = l.questions;
                                            if ("number" == typeof t.length)
                                                for (var n = 0, s = t.length; n < s; n++) {
                                                    t[n];
                                                    i.push("<div" + jade.attr("data-category", o, !0, !1) + jade.attr("data-question", n, !0, !1) + ' class="btn-question block-ver-sm"><div' + jade.cls(["block-md", "block-dk", "stars-" + (n + 1)], [null, null, !0]) + '><div class="text-lg">' + jade.escape(null == (e = 200 * (n + 1)) ? "" : e) + "</div></div></div>")
                                                } else {
                                                    var s = 0;
                                                    for (var n in t) {
                                                        s++;
                                                        t[n];
                                                        i.push("<div" + jade.attr("data-category", o, !0, !1) + jade.attr("data-question", n, !0, !1) + ' class="btn-question block-ver-sm"><div' + jade.cls(["block-md", "block-dk", "stars-" + (n + 1)], [null, null, !0]) + '><div class="text-lg">' + jade.escape(null == (e = 200 * (n + 1)) ? "" : e) + "</div></div></div>")
                                                    }
                                                }
                                        }.call(this), i.push("</div></div>")
                                }
                            }
                    }.call(this), i.push("</div></div>")
            }.call(this, "categories" in n ? n.categories : "undefined" != typeof categories ? categories : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-jeopardy/components/question.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                i.push('<div class="content-ver text-center"><div class="text-md block-ver-lg"><h2>' + (null == (e = t.text) ? "" : e) + '</h2></div><div class="block-ver-md row"><div class="col-md-3 col-md-offset-3 col-sm-6"><div' + jade.attr("data-is-correct", !t["true"], !0, !1) + jade.attr("data-stars", n, !0, !1) + ' class="btn btn-solid btn-block btn-check">False</div></div><div class="col-md-3 col-sm-6"><div' + jade.attr("data-is-correct", t["true"], !0, !1) + jade.attr("data-stars", n, !0, !1) + ' class="btn btn-solid btn-block btn-check">True</div></div></div></div>')
            }.call(this, "question" in n ? n.question : "undefined" != typeof question ? question : void 0, "stars" in n ? n.stars : "undefined" != typeof stars ? stars : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-jeopardy/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-jeopardy",
            display: "Jeopardy",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Jeopardy"
                },
                description: {
                    type: "html",
                    "default": "How many stars can you earn? Choose questions from one of three topics. Harder questions will earn you more stars, but answer any question incorrectly and it’s game over!\n"
                },
                prompt: {
                    type: "html",
                    "default": "Select a question from any category"
                },
                categories: {
                    min: 3,
                    max: 3,
                    type: [{
                        title: {
                            type: "html",
                            display: "Category"
                        },
                        questions: {
                            min: 5,
                            max: 5,
                            type: [{
                                mix: {
                                    min: 1,
                                    max: 3,
                                    type: [{
                                        text: {
                                            type: "html"
                                        },
                                        "true": {
                                            type: "boolean",
                                            display: "Correct"
                                        }
                                    }]
                                }
                            }]
                        },
                        help: "Add at least five questions to each category, starting with the easiest worth 1 star.\n"
                    }]
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 2e4,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 1e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 9e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                title: "Jeopardy",
                description: "How many stars can you earn? Choose questions from one of three topics. Harder questions will earn you more stars, but answer any question incorrectly and it’s game over!\n",
                prompt: "Select a question from any category",
                categories: [{
                    title: "Category 1",
                    questions: [{
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }]
                }, {
                    title: "Category 2",
                    questions: [{
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }]
                }, {
                    title: "Category 3",
                    questions: [{
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }, {
                        mix: [{
                            text: "Question 1",
                            "true": !0
                        }, {
                            text: "Question 2",
                            "true": !1
                        }, {
                            text: "Question 3",
                            "true": !0
                        }]
                    }]
                }]
            }]
        }
    }), require.register("engine/game-jeopardy/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = r) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), o = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = r) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", o ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), o && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing"><div class="full-screen content-fill"><div class="game-state row block-xl"><div class="col-md-6 col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-md-6 col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div><div class="block-hor-xl content-fill"><div class="game-box content-fill"><div class="game-menu content-fill"></div><div class="game-question content-fill"></div></div></div><div class="slide-footer slide-up"><div class="slide-footer-prompt text-bold text-uppercase">' + (null == (e = s) ? "" : e) + "</div></div></div>")
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-jeopardy/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/base/game"), r = e("lib/preload"), n = e("lib/easie"), o = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.templates = {
                "default": e("./template"),
                menu: e("./components/menu"),
                question: e("./components/question")
            }, i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .goto-next": "next",
                    "iostap .btn-question": "showQuestion",
                    "iostap .btn-check": "checkAnswer"
                }
            }, i.prototype.initializeData = function() {
                var t;
                return i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0), t = this.options.data.categories, t = (t || []).filter(function(t) {
                    var e;
                    return 5 === (null != (e = t.questions) ? e.length : void 0)
                }), this.setArray("categories", t)
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-menu"), "menu"), this.setEl(this.el.querySelector(".game-question"), "question")
            }, i.prototype.showNext = function(t) {
                return this.getEl("menu").innerHTML = this.templates.menu({
                    categories: this.getArray("categories")
                }), this.setEl(this.getEl("menu").querySelectorAll(".btn-question"), "questions")
            }, i.prototype.showQuestion = function(t) {
                var e, i, n, o, s;
                if (!this.game.timer.get("paused")) return s = t.currentTarget.dataset, e = s.category, o = s.question, i = this.getArray("categories")[+e].questions[+o].mix, t.currentTarget.classList.add("question-answered"), this.getEl("question").innerHTML = this.templates.question({
                    question: _.sample(function() {
                        var t, e, o;
                        for (o = [], t = 0, e = i.length; t < e; t++) n = i[t], n.text && o.push(n);
                        return o
                    }()),
                    stars: +o + 1
                }), this.getEl("question").offsetLeft, this.el.classList.add("show-question")
            }, i.prototype.checkAnswer = function(t) {
                var e, i, n, o, s;
                if (!this.game.timer.get("paused") && this.el.classList.contains("show-question")) return this.el.classList.remove("show-question"), e = t.currentTarget, s = e.dataset, n = s.isCorrect, o = s.stars, i = _.chain(this.getEl("questions")).filter(function(t) {
                    return !t.classList.contains("question-answered")
                }).isEmpty().value(), n && this.onCorrectAnswer({
                    score: 200 * o,
                    time: 4e3,
                    tally: !0
                }), i || !n ? this.endGame() : void 0
            }, i
        }(s), i.exports = o
    }), require.register("engine/game-jumble/components/container.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l) {
                var a = "jumble-answer-" + l.toLowerCase(),
                    c = /[\s-]/.test(l) && l.length > 7;
                c && (a += " multiline"), i.push('<div class="text-center content-fill"><div class="jumble-top"><div class="content-ver"><div class="jumble-image-container block-md block-lt"><img' + jade.attr("src", o, !0, !1) + ' class="jumble-image content-ver"/><div class="jumble-mask"></div></div><div' + jade.cls(["jumble-answer", "block-ver-md", a], [null, null, !0]) + ">"),
                    function() {
                        var n = l;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o],
                                    a = t.indexOf(r);
                                /[\s-]/.test(r) ? c ? " " != r ? i.push('<div class="droppy-complete">' + jade.escape(null == (e = r) ? "" : e) + '</div><div class="line-br-sm"></div>') : i.push("<br/>") : i.push('<div class="droppy-complete">&nbsp;</div>') : a > -1 ? (t[a] = null, i.push('<div class="droppy-complete"><div class="letter">' + jade.escape(null == (e = r) ? "" : e) + "</div></div>")) : i.push("<div" + jade.attr("data-letter", r, !0, !1) + ' class="droppy"><div class="letter">&nbsp;</div></div>')
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o],
                                        a = t.indexOf(r);
                                    /[\s-]/.test(r) ? c ? " " != r ? i.push('<div class="droppy-complete">' + jade.escape(null == (e = r) ? "" : e) + '</div><div class="line-br-sm"></div>') : i.push("<br/>") : i.push('<div class="droppy-complete">&nbsp;</div>') : a > -1 ? (t[a] = null, i.push('<div class="droppy-complete"><div class="letter">' + jade.escape(null == (e = r) ? "" : e) + "</div></div>")) : i.push("<div" + jade.attr("data-letter", r, !0, !1) + ' class="droppy"><div class="letter">&nbsp;</div></div>')
                                }
                            }
                    }.call(this), i.push('</div></div></div><div class="jumble-letters block-md clearfix"><h4 class="jumble-prompt text-md-left block-sm">Drag the letters to the word above</h4>'),
                    function() {
                        var t = s;
                        if ("number" == typeof t.length)
                            for (var o = 0, r = t.length; o < r; o++) {
                                var l = t[o];
                                i.push("<div" + jade.attr("data-id", n[o], !0, !1) + jade.attr("data-letter", l, !0, !1) + jade.cls(["draggy", "bold", "draggy-" + o], [null, null, !0]) + '><div class="letter">' + jade.escape(null == (e = l) ? "" : e) + "</div></div>")
                            } else {
                                var r = 0;
                                for (var o in t) {
                                    r++;
                                    var l = t[o];
                                    i.push("<div" + jade.attr("data-id", n[o], !0, !1) + jade.attr("data-letter", l, !0, !1) + jade.cls(["draggy", "bold", "draggy-" + o], [null, null, !0]) + '><div class="letter">' + jade.escape(null == (e = l) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push("</div></div>")
            }.call(this, "complete" in n ? n.complete : "undefined" != typeof complete ? complete : void 0, "ids" in n ? n.ids : "undefined" != typeof ids ? ids : void 0, "image" in n ? n.image : "undefined" != typeof image ? image : void 0, "letters" in n ? n.letters : "undefined" != typeof letters ? letters : void 0, "undefined" in n ? n.undefined : void 0, "word" in n ? n.word : "undefined" != typeof word ? word : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-jumble/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-jumble",
            display: "Letter Jumble",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Letter Jumble"
                },
                description: {
                    type: "html",
                    "default": "Drag the letters to spell the words and reveal the image. Speed and accuracy will score you the most points.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Drag the letters to the word above"
                },
                words: {
                    min: 3,
                    max: 20,
                    type: [{
                        image: {
                            type: "image"
                        },
                        word: {
                            type: "html"
                        }
                    }]
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 2e4,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 5e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 15e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                title: "Letter Jumble",
                description: "Drag the letters to spell the words and reveal the image. Speed and accuracy will score you the most points.\n",
                prompt: "Snag the letters to the word above",
                words: [{
                    image: "img/examples/product-1.png",
                    word: "Classic"
                }, {
                    image: "img/examples/product-2.png",
                    word: "Value Pack"
                }, {
                    image: "img/examples/product-3.png",
                    word: "Ultra Slim"
                }],
                challenge_configuration: {
                    nb_stars: 3
                }
            }]
        }
    }), require.register("engine/game-jumble/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = s) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), o = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = s) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", o ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), o && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing full-screen"><div class="game-state row block-xl"><div class="col-md-6 col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-md-6 col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><div class="game-box block-xl content-fill"></div><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div>')
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-jumble/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c = {}.hasOwnProperty,
            d = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) c.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/base/game"), n = e("views/components/draggy"), r = e("./components/container"), l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), o = function(t) {
            function i() {
                return a = i.__super__.constructor.apply(this, arguments)
            }
            return d(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .goto-next": "next"
                }
            }, i.prototype.initializeData = function() {
                var t;
                return i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0), t = _.filter(this.options.data.words, function(t) {
                    return _.isString(t.word) && "" !== t.word
                }), this.setArray(t, "words")
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-box"), "container")
            }, i.prototype.startGame = function() {
                var t, e, n, o;
                for (this.displayMaskedImage(), this.game.timer.timestamp = Date.now(), o = this.draggies, e = 0, n = o.length; e < n; e++) t = o[e], t.unlock();
                return i.__super__.startGame.apply(this, arguments)
            }, i.prototype.showNext = function(t) {
                var e, i, o, s, a, c, d, u, p, h, f;
                for (f = this.getRandom("words"), h = f.word, c = f.image, h = h.toUpperCase(), u = this.getRandomLetters(_.without(h.split(""), " ")), i = this.getDifficulty(), this.game.timer.timestamp = Date.now(), e = function() {
                        var t;
                        for (t = []; u.length > i;) d = _.sample(u), p = _.filter(u, function(t, e, i) {
                            return i.indexOf(d) !== e
                        }), 0 !== _.intersection(u, p).length && (u = p, t.push(d));
                        return t
                    }(); u.length < Math.min(i + _.random(1, 2), 6);) u.push(_.sample(l));
                return a = function() {
                    var t, e, i;
                    for (i = [], t = 0, e = u.length; t < e; t++) d = u[t], i.push(Math.random().toString(16).slice(2));
                    return i
                }(), this.getEl("container").innerHTML = r({
                    ids: a,
                    word: h,
                    image: c,
                    letters: _.shuffle(u),
                    complete: e
                }), this.setEl(this.el.querySelector(".jumble-mask"), "mask"), this.droppies = this.getElements(".droppy"), this.draggies = function() {
                    var e, i, r, l;
                    for (r = this.el.querySelectorAll(".draggy"), l = [], e = 0, i = r.length; e < i; e++) s = r[e], o = new n({
                        el: s
                    }), this.listenTo(o, "drag", this.onDrag), this.listenTo(o, "drop", this.onDrop), t && o.lock(), l.push(o);
                    return l
                }.call(this), t || this.displayMaskedImage(), this.displayLetters(), this.displayDraggies(), this.getEl("container").offsetTop, this.transform(this.getEl("container"), {
                    opacity: 1,
                    transition: "opacity 300ms"
                })
            }, i.prototype.displayMaskedImage = function() {
                return this.transform(this.getEl("mask"), {
                    x: "-100%",
                    opacity: 1,
                    transition: "all 5000ms linear, opacity 300ms"
                })
            }, i.prototype.displayLetters = function() {
                var t, e, i, n, o, s;
                for (o = this.el.querySelectorAll(".jumble-answer, .jumble-letters"), s = [], i = 0, n = o.length; i < n; i++) t = o[i], s.push(function() {
                    var i, n, o, s;
                    for (o = t.querySelectorAll(".letter"), s = [], e = i = 0, n = o.length; i < n; e = ++i) t = o[e], this.transition(t, "all 300ms " + 50 * e + "ms", !0), s.push(t.classList.add("visible"));
                    return s
                }.call(this));
                return s
            }, i.prototype.displayDraggies = function() {
                var t, e, i, n, o;
                for (n = this.draggies, o = [], e = 0, i = n.length; e < i; e++) t = n[e], o.push(this.resetDraggy(t));
                return o
            }, i.prototype.getElements = function(t) {
                var e, i, n, o, s;
                for (o = this.el.querySelectorAll(t), s = [], i = 0, n = o.length; i < n; i++) e = o[i], s.push({
                    el: e,
                    bounds: e.getBoundingClientRect()
                });
                return s
            }, i.prototype.onDrag = function(t, e) {
                var i, n, o, s, r, l, a, c, d, u, p, h, f, m, v;
                for (e && (this.droppies = this.getElements(".droppy", this.droppies)), n = t.closest(_.pluck(this.droppies, "bounds")), i = this.droppies[n], f = this.droppies, r = d = 0, p = f.length; d < p; r = ++d) o = f[r], o.el.classList.toggle("active", r === n), o.isActive = r === n;
                for (t.el.classList.toggle("active-pos", i), m = this.draggies, u = 0, h = m.length; u < h; u++) s = m[u].el, s !== t.el && (l = s.dataset.id === (null != i ? i.el.dataset.contains : void 0), s.classList.toggle("hidden", l));
                if (v = i ? this.positionFromBounds(t, i.bounds) : t, a = v.x, c = v.y, this.transform(t.el, {
                        x: a,
                        y: c,
                        scale: i ? 1 : 1.4,
                        transition: e || i ? "all 300ms" : "none"
                    }), !e) return t.el.offsetLeft
            }, i.prototype.onDrop = function(t) {
                var e, i, n, o;
                return e = _.findWhere(this.droppies, {
                    isActive: !0
                }), e ? (o = this.positionFromBounds(t, e.bounds), i = o.x, n = o.y) : i = n = 0, t.x !== i || t.y !== n ? t.reset({
                    x: i,
                    y: n
                }) : (this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    transition: "all 300ms"
                }), this.updateDroppies(t), this.checkAnswer())
            }, i.prototype.updateDroppies = function(t) {
                var e, i, n, o, s, r;
                for (s = this.droppies, r = [], n = 0, o = s.length; n < o; n++) i = s[n], i.el.classList.remove("active"), e = i.el.dataset.contains === t.el.dataset.id, i.isActive ? (t.el.classList.add("is-positioned"), i.el.dataset.contains && !e && (i.isActive = !1, this.resetDraggy(this.getDraggy(i.el.dataset.contains))), r.push(i.el.dataset.contains = t.el.dataset.id)) : e ? r.push(delete i.el.dataset.contains) : r.push(void 0);
                return r
            }, i.prototype.positionFromBounds = function(t, e) {
                var i, n, o, s, r;
                return r = t.offset, n = r.left, o = r.top, s = r.width, i = r.height, {
                    x: Math.round(e.left + e.width / 2 - n - s / 2),
                    y: Math.round(e.top + e.height / 2 - o - i / 2)
                }
            }, i.prototype.resetDraggy = function(t) {
                return t.reset(), t.el.classList.remove("is-positioned", "hidden", "active-pos"), this.transform(t.el, {
                    rotate: _.random(-8, 8),
                    transition: "all 300ms"
                })
            }, i.prototype.checkAnswer = function() {
                var t, e, i, n, o, s, r, l, a = this;
                if (t = this.droppies.filter(function(t) {
                        return t.el.dataset.letter
                    }), e = t.filter(function(t) {
                        var e;
                        return e = a.getDraggy(t.el.dataset.contains), t.el.dataset.letter === (null != e ? e.el.dataset.letter : void 0)
                    }), t.length === e.length) {
                    for (l = this.draggies, s = 0, r = l.length; s < r; s++) n = l[s], n.undelegateEvents();
                    return i = this.game.timer.timestamp - Date.now(), o = 5e3 + 500 * this.getDifficulty(), this.onCorrectAnswer({
                        score: 1e3,
                        time: 3e3,
                        bonus: this.getBonus(i, null, o),
                        tally: !0
                    }), this.getEl("container").classList.add("correct"), this.transform(this.getEl("mask"), {
                        x: "-100%",
                        opacity: 0,
                        transition: "all 300ms"
                    }), this.transform(this.getEl("container"), {
                        opacity: 0,
                        transition: "opacity 300ms 600ms"
                    }), window.setTimeout(function() {
                        var t, e, i, n, o;
                        for (n = a.el.querySelectorAll(".letter"), o = [], e = 0, i = n.length; e < i; e++) t = n[e], o.push(t.classList.remove("visible"));
                        return o
                    }, 300), window.setTimeout(function() {
                        return a.showNext()
                    }, 1200)
                }
            }, i.prototype.getDraggy = function(t) {
                var e;
                return function() {
                    var i, n, o, s;
                    for (o = this.draggies, s = [], i = 0, n = o.length; i < n; i++) e = o[i], e.el.dataset.id === t && s.push(e);
                    return s
                }.call(this)[0]
            }, i.prototype.getDifficulty = function() {
                return Math.floor(_.limit(this.game.score.get("consecutive") / 1.6, 6, 1))
            }, i.prototype.getRandomLetters = function(t) {
                return _.chain(l).difference(t).sample(6 - t.length).value().concat(t)
            }, i
        }(s), i.exports = o
    }), require.register("engine/game-memory/components/tiles.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s) {
                n["multi-content"] = e = function(n, o) {
                        this && this.block, this && this.attributes || {};
                        switch (o = o || t, o[n + "Type"]) {
                            case "image":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                                break;
                            case "video":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                                break;
                            case "audio":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                                break;
                            case "iframe":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                                var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                                s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                                break;
                            default:
                                i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                        }
                    }, i.push('<div class="content-ver text-center">'),
                    function() {
                        var t = o;
                        if ("number" == typeof t.length)
                            for (var e = 0, s = t.length; e < s; e++) {
                                var r = t[e];
                                i.push("<div" + jade.attr("data-index", r.index, !0, !1) + ' class="tile block-sm"><div class="tile-content btn btn-solid"><div' + jade.cls(["tile-reveal", r.klass], [null, !0]) + ">"), n["multi-content"]("content", r), i.push("</div></div></div>")
                            } else {
                                var s = 0;
                                for (var e in t) {
                                    s++;
                                    var r = t[e];
                                    i.push("<div" + jade.attr("data-index", r.index, !0, !1) + ' class="tile block-sm"><div class="tile-content btn btn-solid"><div' + jade.cls(["tile-reveal", r.klass], [null, !0]) + ">"), n["multi-content"]("content", r), i.push("</div></div></div>")
                                }
                            }
                    }.call(this), i.push("</div>")
            }.call(this, "tiles" in o ? o.tiles : "undefined" != typeof tiles ? tiles : void 0, "undefined" in o ? o.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-memory/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-memory",
            display: "Memory",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "text",
                    "default": "Find the matching tiles"
                },
                description: {
                    type: "html",
                    "default": "Use your memory to find the matching tiles. Tap on a tile to select it and then tap it's matching pair.\n"
                },
                tiles: {
                    min: 2,
                    max: 4,
                    type: [{
                        left: {
                            types: ["text", "image"]
                        },
                        right: {
                            types: ["text", "image"]
                        }
                    }]
                },
                prompt: {
                    type: "text",
                    "default": "Tap a tile to select it"
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 2e4,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 5e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 8e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                tiles: [{
                    left: "Pig",
                    right: "Pink"
                }, {
                    left: "Cow",
                    right: "Brown"
                }, {
                    left: "Cat",
                    right: "Black, white, cream, ginger, brown & different assortments of the aforementioned (tortoiseshell)\n"
                }, {
                    left: "Polar Bear",
                    right: "White"
                }]
            }]
        }
    }), require.register("engine/game-memory/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = r) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), o = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = r) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", o ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), o && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing"><div class="content-fill full-screen"><div class="game-state row block-xl"><div class="col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><div class="game-tiles block-xl content-fill"></div><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div><div class="slide-footer slide-up"><div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div></div></div>")
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-memory/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/base/game"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.templates = {
                "default": e("./template"),
                tiles: e("./components/tiles")
            }, i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .tile": "selectTile",
                    "iostap .goto-next": "next"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.tiles = _.chain(t.tiles).map(function(t, e) {
                    var i, n, o, s;
                    return i = t.left, n = t.leftType, o = t.right, s = t.rightType, null != i && null != o ? [{
                        content: i,
                        contentType: n,
                        index: e
                    }, {
                        content: o,
                        contentType: s,
                        index: e
                    }] : []
                }).flatten().shuffle().each(function(t) {
                    return t.content.length > 20 ? t.klass = "text-sm" : t.content.length < 8 ? t.klass = "text-lg" : void 0
                }).value(), t
            }, i.prototype.initializeData = function() {
                return i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0)
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-tiles"), "container")
            }, i.prototype.enterGame = function() {
                return this.getEl("container").innerHTML = this.templates.tiles(this.serialize()), this.setEl(this.el.querySelectorAll(".tile"), "tiles"), this.elements.current = null, i.__super__.enterGame.apply(this, arguments)
            }, i.prototype.startGame = function() {
                return this.game.timer.timestamp = Date.now(), i.__super__.startGame.apply(this, arguments)
            }, i.prototype.selectTile = function(t) {
                var e, i;
                if (i = this.getEl("current"), e = t.currentTarget, !this.game.timer.get("paused") && !e.classList.contains("correct")) return e.classList.toggle("active"), i ? (e.classList.contains("active") && this.compareTiles(i, e), this.elements.current = null) : this.setEl(e, "current")
            }, i.prototype.compareTiles = function(t, e) {
                var i, n, o, s, r;
                if (t !== e && t.dataset.index === e.dataset.index ? (t.classList.add("correct"), e.classList.add("correct"), t.classList.add("active"), e.classList.add("active"), i = this.getEl("tiles"), n = function() {
                        var t, e, n;
                        for (n = [], t = 0, e = i.length; t < e; t++) r = i[t], r.classList.contains("correct") && n.push(r);
                        return n
                    }(), o = n.length === i.length, s = !0) : window.setTimeout(function() {
                        return t.classList.remove("active"), e.classList.remove("active")
                    }, 1e3), s && (this.onCorrectAnswer({
                        score: 1e3,
                        bonus: this.getBonus(Date.now() - this.game.timer.timestamp, 2e3, 9e3),
                        tally: !0
                    }), this.game.timer.timestamp = Date.now()), o) return window.setTimeout(_.bind(this.endGame, this), 1e3)
            }, i
        }(o), i.exports = n
    }), require.register("engine/game-next-in-order/components/options.jade", function(t, e, i) {
        var n = function(t) {
            var e = [],
                i = t || {};
            return function(t, i, n, o) {
                (function() {
                    var o = i;
                    if ("number" == typeof o.length)
                        for (var s = 0, r = o.length; s < r; s++) {
                            var l = o[s];
                            e.push('<div class="btn-image-container block-md"><img' + jade.attr("src", l, !0, !1) + jade.attr("data-is-correct", l === n[t[0]], !0, !1) + jade.cls(["btn-image", "delay-" + s], [null, !0]) + "/></div>")
                        } else {
                            var r = 0;
                            for (var s in o) {
                                r++;
                                var l = o[s];
                                e.push('<div class="btn-image-container block-md"><img' + jade.attr("src", l, !0, !1) + jade.attr("data-is-correct", l === n[t[0]], !0, !1) + jade.cls(["btn-image", "delay-" + s], [null, !0]) + "/></div>")
                            }
                        }
                }).call(this)
            }.call(this, "missing" in i ? i.missing : "undefined" != typeof missing ? missing : void 0, "options" in i ? i.options : "undefined" != typeof options ? options : void 0, "sequence" in i ? i.sequence : "undefined" != typeof sequence ? sequence : void 0, "undefined" in i ? i.undefined : void 0), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-next-in-order/components/sequence.jade", function(t, e, i) {
        var n = function(t) {
            var e = [],
                i = t || {};
            return function(t, i, n) {
                (function() {
                    var n = i;
                    if ("number" == typeof n.length)
                        for (var o = 0, s = n.length; o < s; o++) {
                            var r = n[o],
                                l = t.indexOf(o) > -1 ? "hidden" : "";
                            e.push("<div" + jade.cls(["pull-left", "delay-" + o], [null, !0]) + '><div class="block-sm"><div' + jade.cls(["next-img-container", "block-sm", "block-lt", l], [null, null, null, !0]) + "><img" + jade.attr("src", r, !0, !1) + ' class="next-img"/></div></div></div>')
                        } else {
                            var s = 0;
                            for (var o in n) {
                                s++;
                                var r = n[o],
                                    l = t.indexOf(o) > -1 ? "hidden" : "";
                                e.push("<div" + jade.cls(["pull-left", "delay-" + o], [null, !0]) + '><div class="block-sm"><div' + jade.cls(["next-img-container", "block-sm", "block-lt", l], [null, null, null, !0]) + "><img" + jade.attr("src", r, !0, !1) + ' class="next-img"/></div></div></div>')
                            }
                        }
                }).call(this)
            }.call(this, "missing" in i ? i.missing : "undefined" != typeof missing ? missing : void 0, "sequence" in i ? i.sequence : "undefined" != typeof sequence ? sequence : void 0, "undefined" in i ? i.undefined : void 0), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-next-in-order/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-next-in-order",
            display: "Next in Order",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "What comes next?"
                },
                description: {
                    type: "html",
                    "default": "Can you remember the correct order? Select the image that completes the following sequence.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Select the image that is next in order"
                },
                sequence: {
                    min: 3,
                    max: 9,
                    type: [{
                        type: "image"
                    }]
                },
                imposters: {
                    min: 3,
                    max: 9,
                    type: [{
                        type: "image"
                    }],
                    help: "Imposters are images that don't belong in the sequence."
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 2e4,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 5e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 15e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                title: "What comes next?",
                description: "Can you remember the correct order? Select the image that completes the following sequence.\n",
                prompt: "Select the image that is next in order",
                sequence: ["img/examples/product-1.png", "img/examples/product-2.png", "img/examples/product-3.png"]
            }]
        }
    }), require.register("engine/game-next-in-order/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = r) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), o = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = r) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", o ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), o && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing full-screen"><div class="game-state row block-xl"><div class="col-md-6 col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-md-6 col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><div class="block-xl content-fill"><div class="text-center content-fill game-box"><div class="next-top"><div class="content-ver"><h4 class="next-prompt block-lg text-md">' + (null == (e = s) ? "" : e) + '</h4><div class="next-sequence clearfix block-md block-dk"></div></div></div><div class="next-options"></div></div></div><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div>')
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-next-in-order/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c = {}.hasOwnProperty,
            d = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) c.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            u = [].slice;
        o = e("views/base/game"), l = e("./components/sequence"), r = e("./components/options"), s = e("lib/preload"), n = function(t) {
            function i() {
                return a = i.__super__.constructor.apply(this, arguments)
            }
            return d(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .goto-next": "next",
                    "iostap .btn-image": "checkAnswer"
                }
            }, i.prototype.initializeData = function() {
                var t, e, n, o, r, l, a, c = this;
                i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0), r = this.options.data, e = r.imposters, o = r.sequence, l = {
                    imposters: e,
                    sequence: o
                }, a = [];
                for (n in l) t = l[n], t = _.compact(t), this.setArray(n, t), a.push(s.load(t, function(e) {
                    return null == e && (e = []), c.setArray(n, _.without.apply(_, [t].concat(u.call(e))))
                }));
                return a
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-box"), "container"), this.setEl(this.el.querySelector(".next-sequence"), "sequence"), this.setEl(this.el.querySelector(".next-options"), "options")
            }, i.prototype.startGame = function() {
                return this.game.timer.timestamp = Date.now(), i.__super__.startGame.apply(this, arguments)
            }, i.prototype.showNext = function() {
                var t;
                return this.setArray("missing", _.chain(function() {
                    t = [];
                    for (var e = 0, i = this.getArray("sequence").length; 0 <= i ? e < i : e > i; 0 <= i ? e++ : e--) t.push(e);
                    return t
                }.apply(this)).sample(this.getDifficulty()).sortBy(_.identity).value()), this.continueSequence(!0)
            }, i.prototype.continueSequence = function(t) {
                var e, i, n, o = this;
                return this.game.timer.timestamp = Date.now(), e = _.extend({}, this.options.data, {
                    missing: this.getArray("missing"),
                    options: _.chain(this.getArray("missing").slice(1)).map(function(t) {
                        return o.getArray("sequence")[t]
                    }).concat(this.getArray("imposters")).sample(3).concat(this.getArray("sequence")[this.getArray("missing")[0]]).shuffle().value()
                }), this.getEl("options").innerHTML = r(e), t && (n = this.getEl("sequence"), n.innerHTML = l(e), this.$("img", n).first().one("load", function() {
                    return n.style.width = o.getArray("sequence").length * n.firstChild.offsetWidth + "px", o.transform(n, {
                        x: -i.offsetLeft - (i.offsetWidth - o.el.offsetWidth) / 2,
                        transition: "all 300ms"
                    })
                })), i = this.getEl("sequence").querySelectorAll(".hidden").item(0), i.classList.add("hidden-next"), this.transform(this.getEl("sequence"), {
                    x: -i.offsetLeft - (i.offsetWidth - this.el.offsetWidth) / 2,
                    transition: "all 300ms"
                }), this.setArray("missing", this.getArray("missing").slice(1)), this.getEl("container").offsetTop, this.getEl("container").classList.remove("hidden", "between")
            }, i.prototype.checkAnswer = function(t) {
                var e, i, n, o = this;
                if (e = this.el.querySelector(".hidden-next"), !this.game.timer.get("paused") && null != e) return n = t.currentTarget.dataset.isCorrect, i = 0 === this.getArray("missing").length, n ? this.onCorrectAnswer({
                    score: i ? 1e3 : 200,
                    time: i ? 3e3 : 500,
                    bonus: this.getBonus(this.game.timer.timestamp - Date.now(), 500),
                    tally: !0
                }) : this.onIncorrectAnswer({
                    time: 1e3,
                    tally: !0
                }), e.classList.remove("hidden", "hidden-next"), i || !n ? window.setTimeout(function() {
                    return o.getEl("container").classList.add("hidden"), window.setTimeout(function() {
                        return o.showNext()
                    }, 800)
                }, 500) : (this.getEl("container").classList.add("between"), window.setTimeout(function() {
                    return o.continueSequence()
                }, 800))
            }, i.prototype.getDifficulty = function() {
                var t;
                return t = this.game.score.get("consecutive"), Math.floor(_.limit((t + 1) / 2, this.getArray("sequence").length, 2))
            }, i
        }(o), i.exports = n
    }), require.register("engine/game-true-or-false/components/statement.jade", function(t, e, i) {
        var n = function(t) {
            var e = [],
                i = t || {};
            return function(t, i, n) {
                (function() {
                    var n = i;
                    if ("number" == typeof n.length)
                        for (var o = 0, s = n.length; o < s; o++) {
                            var r = n[o],
                                l = t.indexOf(o) > -1 ? "hidden" : "";
                            e.push("<div" + jade.cls(["pull-left", "delay-" + o], [null, !0]) + '><div class="block-sm"><div' + jade.cls(["next-img-container", "block-sm", "block-lt", l], [null, null, null, !0]) + "><img" + jade.attr("src", r, !0, !1) + ' class="next-img"/></div></div></div>')
                        } else {
                            var s = 0;
                            for (var o in n) {
                                s++;
                                var r = n[o],
                                    l = t.indexOf(o) > -1 ? "hidden" : "";
                                e.push("<div" + jade.cls(["pull-left", "delay-" + o], [null, !0]) + '><div class="block-sm"><div' + jade.cls(["next-img-container", "block-sm", "block-lt", l], [null, null, null, !0]) + "><img" + jade.attr("src", r, !0, !1) + ' class="next-img"/></div></div></div>')
                            }
                        }
                }).call(this)
            }.call(this, "missing" in i ? i.missing : "undefined" != typeof missing ? missing : void 0, "sequence" in i ? i.sequence : "undefined" != typeof sequence ? sequence : void 0, "undefined" in i ? i.undefined : void 0), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-true-or-false/model.yaml", function(t, e, i) {
        i.exports = {
            title: "game-true-or-false",
            display: "True or False",
            category: "Game",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "True or false?"
                },
                description: {
                    type: "html",
                    "default": "Which of these statements is true? Swipe the incorrect statements to the left and the correct answers to the right.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Swipe to answer"
                },
                statements: {
                    min: 3,
                    max: 30,
                    type: [{
                        text: {
                            type: "html"
                        },
                        "true": {
                            type: "boolean",
                            display: "Correct"
                        }
                    }]
                },
                falseText: {
                    display: "Incorrect",
                    type: "html",
                    "default": "False"
                },
                trueText: {
                    display: "Correct",
                    type: "html",
                    "default": "True"
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": 45e3,
                            display: "Time Limit (ms)"
                        }
                    },
                    stars: {
                        min: {
                            type: "int",
                            "default": 5e3,
                            display: "1 Star"
                        },
                        max: {
                            type: "int",
                            "default": 15e3,
                            display: "All Stars"
                        },
                        help: "Number of points required to earn stars."
                    }
                }
            },
            examples: [{
                title: "True or false?",
                prompt: "Swipe to answer",
                description: "Which of these statements is true? Swipe the incorrect statements to the left and the correct answers to the right.",
                falseText: "No sir!",
                trueText: "Yessum!",
                statements: [{
                    text: "Africa is the continent with the most countries",
                    "true": !0
                }, {
                    text: "Halley’s comet passes the Earth every 67 years",
                    "true": !1
                }, {
                    text: "The Amazon rainforest produces half the world’s oxygen supply",
                    "true": !0
                }]
            }]
        }
    }), require.register("engine/game-true-or-false/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = l) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = n) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>'), s = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = l) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", s ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), s && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div><div class="content-playing"><div class="content-fill full-screen"><div class="row content-fill"><div class="game-false col-sm-2 content-fill block-dk text-lg text-center"><h4 class="content-ver block-hor-lg">' + (null == (e = o) ? "" : e) + '</h4></div><div class="game-statement-container col-sm-8 content-fill"><div class="game-state row block-ver-xl"><div class="col-md-6 col-sm-6">Timer<div class="game-timer text-lg text-bold"></div></div><div class="col-md-6 col-sm-6 text-right">Score<div class="game-score text-lg text-bold"></div><div class="game-tally"></div></div></div><div class="content-ver text-sm text-center"><h1 class="game-statement block-lg"></h1></div></div><div class="game-true col-sm-2 content-fill block-dk text-lg text-center"><h4 class="content-ver block-hor-lg">' + (null == (e = a) ? "" : e) + '</h4></div></div><div class="game-stepper"></div><div class="game-progress"><div class="game-progress-bar"></div></div><div class="game-bonus-score"></div><div class="game-bonus-time"></div></div><div class="slide-footer slide-up"><div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div></div></div>")
            }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "falseText" in n ? n.falseText : "undefined" != typeof falseText ? falseText : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "trueText" in n ? n.trueText : "undefined" != typeof trueText ? trueText : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/game-true-or-false/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/base/game"), n = e("views/components/draggy"), o = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.templates = {
                "default": e("./template"),
                statement: e("./components/statement")
            }, i.prototype.events = function() {
                return {
                    "iostap .play-game": "enterGame",
                    "iostap .goto-next": "next"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.falseText = _.hyphenate(t.falseText), t.trueText = _.hyphenate(t.trueText), t
            }, i.prototype.initializeData = function() {
                return i.__super__.initializeData.apply(this, arguments), this.game.extra.set("fullscreen", !0), this.game.extra.set("sounds", !0), this.setArray("statements", _.filter(this.options.data.statements, function(t) {
                    return t.text
                }))
            }, i.prototype.initializeElements = function() {
                return i.__super__.initializeElements.apply(this, arguments), this.setEl(this.el.querySelector(".game-true"), "true"), this.setEl(this.el.querySelector(".game-false"), "false"), this.draggy = new n({
                    el: this.el.querySelector(".game-statement")
                }), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop)
            }, i.prototype.enterGame = function() {
                return i.__super__.enterGame.apply(this, arguments), this.draggy.lock()
            }, i.prototype.startGame = function() {
                return this.game.timer.timestamp = Date.now(), this.draggy.unlock(), i.__super__.startGame.apply(this, arguments)
            }, i.prototype.onDrag = function(t, e) {
                var i, n, o;
                if (!t.el.classList.contains("hidden")) return i = this.didMove(t), o = "right" === t.velocity.dir && i, n = "left" === t.velocity.dir && i, this.getEl("true").classList.toggle("active", o), this.getEl("false").classList.toggle("active", n), this.transform(t.el, {
                    x: t.x,
                    y: t.y / 1.2,
                    rotate: t.x * -t.y / 5e3,
                    transition: e ? "all 300ms" : ""
                })
            }, i.prototype.onDrop = function(t, e) {
                var i, n, o = this;
                if (e) return this.transform(t.el, {
                    x: t.x,
                    y: t.y
                });
                if (!t.el.classList.contains("hidden")) return i = this.didMove(t), i ? (n = this.el.offsetWidth * Math.abs(t.x) / t.x, t.reset({
                    x: n,
                    y: t.y
                }), this.transition(t.el, "all 300ms", !0), t.el.classList.add("hidden"), window.setTimeout(function() {
                    return "right" === t.velocity.dir === t.isTrue ? o.onCorrectAnswer({
                        score: 1e3,
                        time: 1e3,
                        bonus: o.getBonus(o.game.timer.timestamp - Date.now(), 500),
                        tally: !0
                    }) : o.onIncorrectAnswer({
                        time: 1e3,
                        score: 700,
                        bonus: 300,
                        tally: !0
                    }), o.transition(t.el, "", !0), t.reset(), o.showNext()
                }, 400)) : (this.transition(t.el, "all 300ms"), t.reset())
            }, i.prototype.didMove = function(t) {
                var e, i, n;
                return e = Math.abs(t.velocity.x) > .5, n = "right" === t.velocity.dir, i = "left" === t.velocity.dir, (n || i) && e
            }, i.prototype.showNext = function() {
                var t;
                return this.game.timer.timestamp = Date.now(), t = this.getRandom("statements"), this.getEl("true").classList.remove("active"), this.getEl("false").classList.remove("active"), this.draggy.el.innerHTML = t.text, this.draggy.isTrue = t["true"], this.draggy.el.offsetLeft, this.draggy.el.classList.remove("hidden")
            }, i
        }(s), i.exports = o
    }), require.register("engine/image-collection/model.yaml", function(t, e, i) {
        i.exports = {
            title: "image-collection",
            display: "Image Collection",
            category: "Content",
            description: "Tap on an image to see more detail",
            features: {
                narration: !0
            },
            model: {
                title: {
                    type: "html"
                },
                images: {
                    display: "List items",
                    type: [{
                        image: {
                            type: "image"
                        },
                        content: {
                            type: "html"
                        }
                    }],
                    min: 2,
                    max: 8
                },
                prompt: {
                    type: "html",
                    "default": "Tap each image for more details"
                },
                lightbox: {
                    type: "boolean",
                    "default": !1,
                    help: "Focus on the image by hiding other parts of the interface. If a background color is set, that color will be used.\n"
                },
                background: {
                    type: "html",
                    "default": "",
                    display: "Background color",
                    help: "This color (eg. “orange”, “#f90”, “rgb(255,160,0)”) will be used for the background in lightbox mode.\n"
                }
            },
            examples: [{
                title: "Example Image Collection",
                images: [{
                    image: "img/examples/product-1.png",
                    content: "This is the original product in our line and is a great source of pride for the company.\n"
                }, {
                    image: "img/examples/product-2.png",
                    content: "Product Y was introduced to appeal to a broader customers base and was a great success.\n"
                }, {
                    image: "img/examples/product-3.png",
                    content: "Completing our range is Product Z. It appeals to old and new customers alike, making us a company for everyone.\n"
                }]
            }]
        }
    }), require.register("engine/image-collection/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="block-hor-xl block-ver-lg content-fill text-center"><div class="tappies-parent content-fill"><div class="thumbnail-collection content-sm-ver content-md-ver content-lg-ver"><h1 class="title slide-down delay-3 tight">' + (null == (e = l) ? "" : e) + '</h1><div class="row tappies">');
                var c = "col-sm-12 col-lg-8 col-lg-offset-2",
                    d = "col-sm-6 col-lg-6";
                (function() {
                    var t = r;
                    if ("number" == typeof t.length)
                        for (var e = 0, n = t.length; e < n; e++) {
                            var o = t[e];
                            i.push("<div" + jade.attr("data-index", e, !0, !1) + jade.cls(["tappy", "content-fill", "slide-up", "block-ver-sm", "delay-" + (e + 1) + " " + (r.length >= 4 ? d : c)], [null, null, null, null, !0]) + '><div class="tappy-child content-fill"><div class="block-sm block-dk content-fill"><img' + jade.attr("src", o.image, !0, !1) + ' class="content-ver thumbnail"/></div></div></div>')
                        } else {
                            var n = 0;
                            for (var e in t) {
                                n++;
                                var o = t[e];
                                i.push("<div" + jade.attr("data-index", e, !0, !1) + jade.cls(["tappy", "content-fill", "slide-up", "block-ver-sm", "delay-" + (e + 1) + " " + (r.length >= 4 ? d : c)], [null, null, null, null, !0]) + '><div class="tappy-child content-fill"><div class="block-sm block-dk content-fill"><img' + jade.attr("src", o.image, !0, !1) + ' class="content-ver thumbnail"/></div></div></div>');
                            }
                        }
                }).call(this), i.push('</div></div></div><div class="details-parent content-fill">'),
                    function() {
                        var t = r;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push('<div class="image-details content-fill"><div class="content-ver"><img' + jade.attr("src", s.image, !0, !1) + ' class="image-full-size block-ver-md"/><div class="caption block-ver-md text-md">' + (null == (e = s.content) ? "" : e) + "</div></div></div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push('<div class="image-details content-fill"><div class="content-ver"><img' + jade.attr("src", s.image, !0, !1) + ' class="image-full-size block-ver-md"/><div class="caption block-ver-md text-md">' + (null == (e = s.content) ? "" : e) + "</div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "tappies" in n ? n.tappies : "undefined" != typeof tappies ? tappies : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/image-collection/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("lib/preload"), o = e("views/slide"), s = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .btn-done": "showAnswer",
                    "iostap .image-details": "hideDetails",
                    "iostap .tappy": "toggleThumbnail"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.tappies = _.filter(t.images || [], function(t) {
                    return t.image
                }), t.hasPrompt = !0, t
            }, i.prototype.onResize = function() {
                return this.setTappyHeight()
            }, i.prototype.show = function() {
                var t;
                return this.setEl(this.el.querySelector(".tappies-parent"), "parent"), this.setEl(this.el.querySelector(".tappies"), "tappies"), this.setEl(this.el.querySelector(".title"), "title"), this.setEl(this.el.querySelectorAll(".image-details"), "imageDetails"), this.listenTo(this, "resize", this.onResize), this.onResize(), this.toVisit = function() {
                    t = [];
                    for (var e = 0, i = this.serialize().tappies.length; 0 <= i ? e < i : e > i; 0 <= i ? e++ : e--) t.push(e);
                    return t
                }.apply(this)
            }, i.prototype.setTappyHeight = function() {
                var t, e, i, n, o, s, r, l, a;
                for (i = this.getEl("tappies").children.length, i >= 4 && (i = Math.ceil(i / 2)), n = this.getEl("parent").offsetHeight - this.getEl("title").offsetHeight, o = n / i, o = Math.min(o, 220), l = this.getEl("tappies").children, a = [], e = s = 0, r = l.length; s < r; e = ++s) t = l[e], a.push(t.style.height = "" + o + "px");
                return a
            }, i.prototype.limitImageSize = function(t) {
                var e, i, n, o, s;
                if (n = t.querySelector(".image-full-size"), s = t.querySelector(".caption"), e = t.offsetHeight - s.offsetHeight, i = t.offsetWidth, o = _.max([n.height / e, n.width / i]), o > 1) return n.style.height = "" + n.height / o + "px"
            }, i.prototype.toggleThumbnail = function(t) {
                return this.showDetails(t.currentTarget, !0)
            }, i.prototype.showDetails = function(t, e) {
                var i, n;
                return n = +t.dataset.index, i = this.getEl("imageDetails").item(n), this.toVisit = _.without(this.toVisit, n), this.setEl(i, "active-details"), _.isEmpty(this.toVisit) && this.setState("touched"), this.setState("active", "details"), this.showLightbox(), this.limitImageSize(i), t.classList.add("visited"), this.transform(i, {
                    opacity: 1,
                    transition: e ? "all 300ms" : ""
                })
            }, i.prototype.hideDetails = function() {
                var t;
                return t = this.getEl("active-details"), this.transform(t, {
                    opacity: 0,
                    scale: .9,
                    transition: "all 300ms"
                }), this.trigger("lightbox", !1), this.setState("inactive", "details")
            }, i.prototype.showLightbox = function() {
                if (this.options.data.lightbox) return this.trigger("lightbox", this.options.data.background || "#222", !0)
            }, i.prototype.refresh = function(t) {
                var e, n, o, s, r, l, a, c;
                if (t.data.images.length === this.options.data.images.length)
                    for (a = t.data.images, o = r = 0, l = a.length; r < l; o = ++r) n = a[o].content, n && (null != (c = this.options.data.images[o]) ? c.content : void 0) !== n && (e = o);
                if (i.__super__.refresh.apply(this, arguments), null != e && (s = this.getEl("tappies").children[e])) return this.showDetails(s, !1)
            }, i
        }(o), i.exports = s
    }), require.register("engine/image-gallery/model.yaml", function(t, e, i) {
        i.exports = {
            title: "image-gallery",
            display: "Image Gallery",
            category: "Content",
            features: {
                narration: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                images: {
                    min: 1,
                    max: 10,
                    type: [{
                        image: {
                            type: "image",
                            display: "Image"
                        },
                        caption: {
                            type: "html"
                        }
                    }]
                },
                prompt: {
                    type: "html",
                    "default": "Swipe to see more images"
                },
                lightbox: {
                    type: "boolean",
                    "default": !1,
                    help: "Focus on the image by hiding other parts of the interface. If a background color is set, that color will be used.\n"
                },
                background: {
                    type: "html",
                    "default": "",
                    display: "Background color",
                    help: "This color (eg. “orange”, “#f90”, “rgb(255,160,0)”) will be used for the background in lightbox mode.\n"
                }
            },
            examples: [{
                title: "Example Image Gallery",
                images: [{
                    image: "img/examples/product-1.png",
                    caption: "This is the original product in our line and is a great source of pride for the company.\n"
                }, {
                    image: "img/examples/product-2.png",
                    caption: "Product Y was introduced to appeal to a broader customers base and was a great success.\n"
                }, {
                    image: "img/examples/product-3.png",
                    caption: "Completing our range is Product Z. It appeals to old and new customers alike, making us a company for everyone.\n"
                }]
            }]
        }
    }), require.register("engine/image-gallery/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l) {
                i.push('<div class="content-fill slide-up block-xl"><div class="carousel content-fill delay-6 draggy block-ver-lg"><div' + jade.attr("style", "width:" + 100 * s.length + "%;", !0, !1) + ' class="carousel-slider content-fill clearfix">'),
                    function() {
                        var t = s;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var r = t[n];
                                i.push("<div" + jade.attr("style", "width: " + 100 / s.length + "%;", !0, !1) + ' class="carousel-item content-fill"><div class="row content-lg-fill content-sm-ver content-md-ver">');
                                var l = _.compact([r.image, r.caption]).length,
                                    a = 2 == l ? "col-lg-6" : "";
                                r.image && i.push("<div" + jade.cls(["col-sm-12", "content-lg-ver", a], [null, null, !0]) + "><img" + jade.attr("src", r.image, !0, !1) + ' class="img"/></div>'), r.caption && i.push("<div" + jade.cls(["col-sm-12", "content-lg-ver", "block-ver-lg", a], [null, null, null, !0]) + '><div class="caption text-center text-normal text-md">' + (null == (e = r.caption) ? "" : e) + "</div></div>"), i.push("</div></div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var r = t[n];
                                    i.push("<div" + jade.attr("style", "width: " + 100 / s.length + "%;", !0, !1) + ' class="carousel-item content-fill"><div class="row content-lg-fill content-sm-ver content-md-ver">');
                                    var l = _.compact([r.image, r.caption]).length,
                                        a = 2 == l ? "col-lg-6" : "";
                                    r.image && i.push("<div" + jade.cls(["col-sm-12", "content-lg-ver", a], [null, null, !0]) + "><img" + jade.attr("src", r.image, !0, !1) + ' class="img"/></div>'), r.caption && i.push("<div" + jade.cls(["col-sm-12", "content-lg-ver", "block-ver-lg", a], [null, null, null, !0]) + '><div class="caption text-center text-normal text-md">' + (null == (e = r.caption) ? "" : e) + "</div></div>"), i.push("</div></div>")
                                }
                            }
                    }.call(this), i.push("</div></div></div>"), s.length > 1 && (i.push('<div class="pagination">'), function() {
                        var t = s;
                        if ("number" == typeof t.length)
                            for (var e = 0, n = t.length; e < n; e++) {
                                t[e];
                                i.push('<div class="dot"></div>')
                            } else {
                                var n = 0;
                                for (var e in t) {
                                    n++;
                                    t[e];
                                    i.push('<div class="dot"></div>')
                                }
                            }
                    }.call(this), i.push("</div>")), i.push('<div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "images" in n ? n.images : "undefined" != typeof images ? images : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/image-gallery/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/slide"), n = e("views/components/draggy"), s = e("lib/preload"), o = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.currentIndex = 0, i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n;
                return t = i.__super__.serialize.apply(this, arguments), t.backgroundColor = this.backgroundColor = this.options.data.background ? this.options.data.background : this.options.data.lightbox ? "#222" : null != (e = t.config) && null != (n = e.colors) ? n.background : void 0, this.options.data.images = t.images = (t.images || []).filter(function(t) {
                    return t.image || t.caption.length > 0
                }), t.hasPrompt = t.images.length > 1, t
            }, i.prototype.beforeShow = function() {
                var t;
                return t = this.options.data.lightbox ? this.backgroundColor : "default", this.options.data.lightbox ? this.trigger("lightbox", t, !0) : this.trigger("lightbox", !1)
            }, i.prototype.onRefresh = function() {
                return i.__super__.onRefresh.apply(this, arguments), this.beforeShow()
            }, i.prototype.show = function(t) {
                var e, i, o, s;
                if (null == t && (t = 0), null != (s = this.draggy) && s.undelegateEvents(), this.draggy = null, !this.draggy) return e = this.el.querySelector(".carousel"), this.setEl(e.firstChild, "scroller"), this.options.data.images.length > 1 ? (this.setEl(this.el.querySelector(".pagination"), "pagination"), i = this.options.data.images.length - 1, o = -e.offsetWidth * i, this.draggy = new n({
                    el: e,
                    minX: o,
                    maxX: 0,
                    lock: "y"
                }), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop), this.draggy.reset({
                    x: -this.draggy.el.offsetWidth * Math.min(t, i)
                })) : this.getEl("scroller").firstChild.style.opacity = 1, this.listenTo(this, "resize", this.onResize), this.onResize(), this.limitImageSize()
            }, i.prototype.limitImageSize = function() {
                var t, e = this;
                return t = _.chain(this.options.data.images).pluck("image").compact().value(), s.load(t, function() {
                    var t, i, n, o, s, r, l, a, c, d, u, p;
                    for (u = e.getEl("scroller").children, p = [], i = c = 0, d = u.length; c < d; i = ++c) t = u[i], n = t.querySelector(".img"), n ? (n.style.height = "", a = t.querySelector(".caption"), o = t.offsetHeight, a && e.el.offsetWidth < 1024 && (o -= a.offsetHeight), r = n.height / o, l = n.width / t.offsetWidth, s = _.max([l, r]), s > 1 ? p.push(n.style.height = "" + n.height / s + "px") : p.push(void 0)) : p.push(void 0);
                    return p
                })
            }, i.prototype.onDrag = function(t, e) {
                var i;
                return i = e ? "all 300ms" : "none", this.transform(this.getEl("scroller"), {
                    x: this.getScrollDist(t),
                    transition: i
                }), this.updateChildren(t, i)
            }, i.prototype.onDrop = function(t, e) {
                var i, n, o, s, r, l, a, c, d, u;
                for (e ? (l = null != this.currentIndex ? "all 300ms" : "", this.currentIndex = Math.floor(-t.x / t.offset.width), this.transform(this.getEl("scroller"), {
                        x: this.getScrollDist(t),
                        transition: l
                    }), this.updateChildren(t, l)) : (a = t.velocity.x, s = .9, n = a < -s ? "ceil" : a > s ? "floor" : "round", r = Math[n](Math.min(t.x / t.offset.width, 1)), t.reset({
                        x: r * t.offset.width
                    })), u = this.getEl("pagination").children, o = c = 0, d = u.length; c < d; o = ++c) i = u[o], i.classList.toggle("active", o === this.currentIndex);
                if (this.currentIndex === this.options.data.images.length - 1) return this.setState("touched")
            }, i.prototype.updateChildren = function(t, e) {
                var i, n, o, s, r, l, a;
                for (o = t.offset.width, l = this.getEl("scroller").children, a = [], n = s = 0, r = l.length; s < r; n = ++s) i = l[n], e && (i.classList.toggle("active", n === this.currentIndex), this.transition(i, e, !0)), a.push(this.transform(i, {
                    scale: 1 - Math.abs(t.x + n * o) / o / 5,
                    opacity: 1 - Math.abs(t.x + n * o) / o
                }));
                return a
            }, i.prototype.getScrollDist = function(t) {
                return "" + t.x / t.offset.width / this.options.data.images.length * 100 + "%"
            }, i.prototype.onResize = function() {
                var t;
                if (this.limitImageSize(), t = this.getEl("scroller") && this.draggy) return this.draggy.options.minX = -this.draggy.el.offsetWidth * (this.options.data.images.length - 1), this.draggy.getOffset()
            }, i.prototype.refresh = function(t) {
                var e, n, o, s, r, l;
                for (l = t.data.images, n = s = 0, r = l.length; s < r; n = ++s) o = l[n], _.isEqual(o, this.options.data.images[n]) || (e = n);
                return i.__super__.refresh.apply(this, arguments), this.draggy && (this.draggy.undelegateEvents(), this.draggy = this.currentIndex = null), this.show(e)
            }, i
        }(r), i.exports = o
    }), require.register("engine/image-multiple-choice/model.yaml", function(t, e, i) {
        i.exports = {
            title: "image-multiple-choice",
            display: "Multiple Choice: Image",
            category: "Multiple Choice",
            features: {
                stars: !0
            },
            description: "Tap the correct image(s)",
            model: {
                title: {
                    types: ["text", "image", "audio", "video"],
                    "default": ""
                },
                selectable: {
                    display: "Number of selectable answers",
                    "default": 1,
                    type: "number"
                },
                answers: {
                    display: "List items",
                    type: [{
                        image: {
                            type: "image"
                        },
                        correct: {
                            type: "boolean"
                        }
                    }],
                    min: 2,
                    max: 8
                },
                reject: {
                    type: "boolean",
                    "default": !1,
                    display: "Reject Answers",
                    help: "Users will not be able to select incorrect answers.\n"
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap the correct answer"
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": -1,
                            display: "Time Limit (ms)"
                        }
                    }
                }
            },
            examples: [{
                title: "Which is the correct Product?",
                selectable: 1,
                reject: !1,
                answers: [{
                    image: "img/examples/product-1.png",
                    correct: !0
                }, {
                    image: "img/examples/product-2.png"
                }, {
                    image: "img/examples/product-3.png"
                }],
                answer: {
                    incorrect: "Not quite...",
                    correct: "That's correct!",
                    text: "Product X is correct.\n"
                },
                game: {
                    timer: {
                        limit: -1
                    }
                }
            }]
        }
    }), require.register("engine/image-multiple-choice/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s, r, l, a, c, d) {
                n["multi-content"] = e = function(n, o) {
                        this && this.block, this && this.attributes || {};
                        switch (o = o || t, o[n + "Type"]) {
                            case "image":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                                break;
                            case "video":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                                break;
                            case "audio":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                                break;
                            case "iframe":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                                var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                                s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                                break;
                            default:
                                i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                        }
                    }, i.push('<div class="block-ver-sm content-fill text-center block-hor-xl"><div class="tappies-parent content-fill row"><div class="content-ver clearfix">'), s && s.timer.limit > 0 && i.push('<div class="game-stepper text-lg text-bold"></div>'), i.push('<div class="col-sm-12 col-lg-5 content-lg-ver"><h1 class="title block-md slide-up delay-3 tight">'), n["multi-content"]("title"), i.push('</h1></div><div class="col-sm-12 col-lg-7 content-lg-ver">'),
                    function() {
                        var t = c;
                        if ("number" == typeof t.length)
                            for (var e = 0, n = t.length; e < n; e++) {
                                var o = t[e];
                                i.push("<div" + jade.cls(["tappy", "block-ver-sm", "delay-4", "selectable", e % 2 == 0 ? "slide-right" : "slide-left", o.correct ? "correct" : "incorrect"], [null, null, null, null, !0, !0]) + '><div class="block-dk tappy-child content-fill"><div class="col-sm-3 block-sm content-fill"><div class="number block-dk text-bold text-lg content-ver"></div></div><div class="col-sm-9 block-sm content-fill"><img' + jade.attr("src", o.image, !0, !1) + ' class="tappy-img content-ver"/></div></div></div>')
                            } else {
                                var n = 0;
                                for (var e in t) {
                                    n++;
                                    var o = t[e];
                                    i.push("<div" + jade.cls(["tappy", "block-ver-sm", "delay-4", "selectable", e % 2 == 0 ? "slide-right" : "slide-left", o.correct ? "correct" : "incorrect"], [null, null, null, null, !0, !0]) + '><div class="block-dk tappy-child content-fill"><div class="col-sm-3 block-sm content-fill"><div class="number block-dk text-bold text-lg content-ver"></div></div><div class="col-sm-9 block-sm content-fill"><img' + jade.attr("src", o.image, !0, !1) + ' class="tappy-img content-ver"/></div></div></div>')
                                }
                            }
                    }.call(this), i.push("</div></div></div></div>"), s && s.timer.limit > 0 && i.push('<div class="block-hor-xl"><div class="col-sm-12"><div class="game-progress"><div class="game-progress-bar"></div></div></div></div>'), i.push('<div class="slide-footer slide-up">'), l ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof a && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = a) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), r && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in o ? o.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "game" in o ? o.game : "undefined" != typeof game ? game : void 0, "hasNarration" in o ? o.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in o ? o.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in o ? o.prompt : "undefined" != typeof prompt ? prompt : void 0, "tappies" in o ? o.tappies : "undefined" != typeof tappies ? tappies : void 0, "undefined" in o ? o.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/image-multiple-choice/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("../multiple-choice-game/view"), s = e("lib/preload"), n = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.tappies = _.chain(t.answers).filter(function(t) {
                    return t.image
                }).shuffle().value(), t
            }, i.prototype.onRefresh = function() {
                return this.show()
            }, i.prototype.onResize = function() {
                return this.setTappyHeight()
            }, i.prototype.show = function() {
                var t, e, n, o, s;
                for (i.__super__.show.apply(this, arguments), this.setEl(this.el.querySelector(".tappies-parent"), "tappiesParent"), this.setEl(this.el.querySelectorAll(".tappy"), "tappies"), this.setEl(this.el.querySelector(".title"), "title"), this.listenTo(this, "resize", this.onResize), s = this.getEl("tappies"), e = n = 0, o = s.length; n < o; e = ++n) t = s[e], t.classList.add("no-delay");
                return this.setTappyHeight()
            }, i.prototype.setTappyHeight = function() {
                var t = this;
                return s.load(_.pluck(this.el.querySelectorAll("img"), "src"), function() {
                    var e, i, n, o, s, r, l, a, c, d;
                    for (o = t.getEl("tappiesParent"), n = t.getEl("tappies").length, t.el.offsetWidth >= 1024 ? (s = o.offsetHeight, o.firstChild.style.height = s + "px") : s = o.offsetHeight - t.getEl("title").offsetHeight, n >= 6 ? (o.classList.add("half-size"), r = s * (1 + n / 10) / n) : r = s / n, c = t.getEl("tappies"), d = [], i = l = 0, a = c.length; l < a; i = ++l) e = c[i], d.push(e.style.height = "" + r + "px");
                    return d
                })
            }, i
        }(o), i.exports = n
    }), require.register("engine/image-pair/model.yaml", function(t, e, i) {
        i.exports = {
            title: "image-pair",
            display: "Image Pairs",
            category: "Relationships",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "text",
                    "default": "Select the correct image in each group"
                },
                multi: {
                    type: "boolean",
                    "default": !1,
                    display: "Select more than one correct answer"
                },
                reject: {
                    type: "boolean",
                    "default": !1,
                    display: "Reject incorrect answers"
                },
                groups: {
                    display: "Pairs",
                    min: 1,
                    max: 4,
                    type: [{
                        images: {
                            min: 2,
                            max: 2,
                            type: [{
                                image: {
                                    type: "image"
                                },
                                correct: {
                                    type: "boolean"
                                }
                            }]
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "text",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "text",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "text",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "text",
                    "default": "Tap each correct image"
                }
            },
            examples: [{
                title: "Which is our first product?\n",
                multi: !0,
                groups: [{
                    images: [{
                        image: "img/examples/product-1.png",
                        correct: !0
                    }, {
                        image: "img/examples/product-2.png",
                        correct: !1
                    }]
                }, {
                    images: [{
                        image: "img/examples/product-2.png",
                        correct: !1
                    }, {
                        image: "img/examples/product-1.png",
                        correct: !0
                    }]
                }, {
                    images: [{
                        image: "img/examples/product-1.png",
                        correct: !0
                    }, {
                        image: "img/examples/product-1.png",
                        correct: !0
                    }]
                }, {
                    images: [{
                        image: "img/examples/product-2.png",
                        correct: !1
                    }, {
                        image: "img/examples/product-3.png",
                        correct: !1
                    }]
                }]
            }]
        }
    }), require.register("engine/image-pair/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c) {
                i.push('<div class="block-hor-xl block-ver-md content-fill content-sm-ver content-md-ver"><div class="row content-fill content-area text-center"><div class="col-sm-12 col-lg-6 content-lg-ver"><h1 class="title tight block-ver-md">' + (null == (e = a) ? "" : e) + '</h1></div><div class="col-sm-12 col-lg-6">'),
                    function() {
                        var t = n;
                        if ("number" == typeof t.length)
                            for (var e = 0, o = t.length; e < o; e++) {
                                var s = t[e];
                                i.push('<div class="row">'),
                                    function() {
                                        var t = _.shuffle(s.images);
                                        if ("number" == typeof t.length)
                                            for (var n = 0, o = t.length; n < o; n++) {
                                                var l = t[n];
                                                r = l.correct ? "correct" : "incorrect", r += 0 === n ? " left" : " right", i.push('<div class="col-sm-6 block-ver-sm slide-up hide-overflow block-box-sizing"><div' + jade.attr("data-correct", l.correct, !0, !1) + jade.attr("data-group", e, !0, !1) + jade.attr("data-image", n, !0, !1) + jade.cls(["image-container", "block-dk", "block-sm", "content-fill", r], [null, null, null, null, !0]) + "><img" + jade.attr("src", l.image, !0, !1) + ' class="img content-ver block"/></div></div>')
                                            } else {
                                                var o = 0;
                                                for (var n in t) {
                                                    o++;
                                                    var l = t[n];
                                                    r = l.correct ? "correct" : "incorrect", r += 0 === n ? " left" : " right", i.push('<div class="col-sm-6 block-ver-sm slide-up hide-overflow block-box-sizing"><div' + jade.attr("data-correct", l.correct, !0, !1) + jade.attr("data-group", e, !0, !1) + jade.attr("data-image", n, !0, !1) + jade.cls(["image-container", "block-dk", "block-sm", "content-fill", r], [null, null, null, null, !0]) + "><img" + jade.attr("src", l.image, !0, !1) + ' class="img content-ver block"/></div></div>')
                                                }
                                            }
                                    }.call(this), i.push("</div>")
                            } else {
                                var o = 0;
                                for (var e in t) {
                                    o++;
                                    var s = t[e];
                                    i.push('<div class="row">'),
                                        function() {
                                            var t = _.shuffle(s.images);
                                            if ("number" == typeof t.length)
                                                for (var n = 0, o = t.length; n < o; n++) {
                                                    var l = t[n];
                                                    r = l.correct ? "correct" : "incorrect", r += 0 === n ? " left" : " right", i.push('<div class="col-sm-6 block-ver-sm slide-up hide-overflow block-box-sizing"><div' + jade.attr("data-correct", l.correct, !0, !1) + jade.attr("data-group", e, !0, !1) + jade.attr("data-image", n, !0, !1) + jade.cls(["image-container", "block-dk", "block-sm", "content-fill", r], [null, null, null, null, !0]) + "><img" + jade.attr("src", l.image, !0, !1) + ' class="img content-ver block"/></div></div>')
                                                } else {
                                                    var o = 0;
                                                    for (var n in t) {
                                                        o++;
                                                        var l = t[n];
                                                        r = l.correct ? "correct" : "incorrect", r += 0 === n ? " left" : " right", i.push('<div class="col-sm-6 block-ver-sm slide-up hide-overflow block-box-sizing"><div' + jade.attr("data-correct", l.correct, !0, !1) + jade.attr("data-group", e, !0, !1) + jade.attr("data-image", n, !0, !1) + jade.cls(["image-container", "block-dk", "block-sm", "content-fill", r], [null, null, null, null, !0]) + "><img" + jade.attr("src", l.image, !0, !1) + ' class="img content-ver block"/></div></div>')
                                                    }
                                                }
                                        }.call(this), i.push("</div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof l && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = l) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "groups" in n ? n.groups : "undefined" != typeof groups ? groups : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "klass" in n ? n.klass : "undefined" != typeof klass ? klass : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/image-pair/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), o = e("lib/preload"), n = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .image-container": "selectImage",
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.show = function() {
                var t, e = this;
                return this.setEl(this.el.querySelectorAll(".image-container"), "images"), this.setEl(this.el.querySelector(".title"), "title"), this.setEl(this.el.querySelector(".content-area"), "parent"), this.setState(this.options.data.reject, "reject"), this.listenTo(this, "resize", this.onResize), t = _.chain(this.options.data.groups).pluck("images").flatten().pluck("image").value(), o.load(t, function() {
                    return e.onResize()
                })
            }, i.prototype.onResize = function() {
                var t, e, i, n, o, s, r, l, a, c, d, u;
                for (c = this.getEl("images"), s = 0, l = c.length; s < l; s++) i = c[s], i.parentNode.style.height = "";
                for (o = this.getEl("parent").offsetHeight, this.el.offsetWidth < 1024 && (o -= this.getEl("title").offsetHeight), t = this.options.data.groups.length, n = o / t, e = _.reduce(this.getEl("images"), function(t, e) {
                        return Math.min(t, e.offsetHeight)
                    }, n), this.getEl("parent").classList.toggle("content-fill", e === n), this.getEl("parent").classList.toggle("content-ver", e < n), d = this.getEl("images"), u = [], r = 0, a = d.length; r < a; r++) i = d[r], u.push(i.parentNode.style.height = e + "px");
                return u
            }, i.prototype.selectImage = function(t) {
                var e, i, n, o, s, r;
                if (e = t.currentTarget, this.options.data.reject && null == e.dataset.correct ? (n = !0, e.classList.add("show-incorrect"), window.setTimeout(function() {
                        return e.classList.remove("show-incorrect")
                    }, 500)) : e.classList.toggle("active"), !this.options.data.multi && !n)
                    for (r = this.getEl("images"), o = 0, s = r.length; o < s; o++) i = r[o], i !== e && i.dataset.group === e.dataset.group && i.classList.remove("active");
                return this.setState(this.isTouched() ? "touched" : "prompt")
            }, i.prototype.isTouched = function() {
                return !!this.options.data.multi || _.chain(this.getEl("images")).groupBy(function(t, e) {
                    return ~~(e / 2)
                }).map(function(t) {
                    return t.filter(function(t) {
                        return t.classList.contains("active")
                    })
                }).reduce(function(t, e) {
                    return t && e.length > 0
                }, !0).value()
            }, i.prototype.isCorrect = function() {
                return _.chain(this.getEl("images")).map(function(t) {
                    return t.classList.contains("active") === (null != t.dataset.correct)
                }).reduce(function(t, e) {
                    return t && e
                }, !0).value()
            }, i
        }(s), i.exports = n
    }), require.register("engine/image-waypoints/model.yaml", function(t, e, i) {
        i.exports = {
            title: "image-waypoints",
            display: "Image Waypoints",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Display an image and optional caption",
            model: {
                url: {
                    type: "image",
                    "default": "",
                    display: "Image"
                },
                waypoints: {
                    min: 1,
                    max: 20,
                    type: [{
                        region: {
                            type: "image-region",
                            "for": "url"
                        },
                        caption: {
                            type: "html",
                            "default": ""
                        }
                    }]
                },
                guided: {
                    type: "boolean",
                    "default": !1,
                    help: "Start on the first waypoint and only continue with Previous and Next buttons.\n"
                },
                appearance: {
                    waypointColor: {
                        display: "Waypoints Color",
                        type: "html",
                        "default": "White",
                        "enum": ["Black", "White"]
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap to explore the image"
                },
                lightbox: {
                    background: {
                        type: "html",
                        "default": "",
                        display: "Background Color",
                        help: 'This color (eg. "orange", "#f90", "rgb(255,160,0)") will be used for the background of the entire screen in lightbox mode.\n'
                    },
                    textColor: {
                        display: "Text Color",
                        type: "html",
                        "default": "White",
                        "enum": ["Black", "White"]
                    }
                }
            },
            examples: [{
                url: "img/examples/product-1-xl.png",
                guided: !0,
                waypoints: [{
                    region: {
                        xMin: 0,
                        xMax: 1,
                        yMin: 0,
                        yMax: 1
                    },
                    caption: "Caption 1"
                }, {
                    region: {
                        xMin: .4,
                        xMax: .8,
                        yMin: .2,
                        yMax: .3
                    }
                }, {
                    region: {
                        xMin: 0,
                        xMax: .5,
                        yMin: .3,
                        yMax: .4
                    }
                }, {
                    region: {
                        xMin: 0,
                        xMax: .3,
                        yMin: .5,
                        yMax: .6
                    }
                }]
            }, {
                url: "img/examples/product-1-xl.png",
                guided: !1,
                waypoints: [{
                    region: {
                        xMin: .4,
                        xMax: .8,
                        yMin: .2,
                        yMax: .3
                    },
                    caption: "Caption 1"
                }, {
                    region: {
                        xMin: 0,
                        xMax: .5,
                        yMin: .3,
                        yMax: .4
                    },
                    caption: "Caption 2"
                }, {
                    region: {
                        xMin: 0,
                        xMax: .3,
                        yMin: .5,
                        yMax: .6
                    }
                }]
            }]
        }
    }), require.register("engine/image-waypoints/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c) {
                i.push('<div class="content-fill hide-overflow"><div class="image-container content content-fill"><img' + jade.attr("src", a, !0, !1) + ' class="img"/>'), n || (i.push('<div class="waypoints">'), function() {
                        var t = c;
                        if ("number" == typeof t.length)
                            for (var e = 0, n = t.length; e < n; e++) {
                                var o = t[e];
                                i.push("<div" + jade.attr("style", "left: " + 100 * o.center.x + "%; top: " + 100 * o.center.y + "%", !0, !1) + jade.attr("data-index", e, !0, !1) + ' class="waypoint"></div>')
                            } else {
                                var n = 0;
                                for (var e in t) {
                                    n++;
                                    var o = t[e];
                                    i.push("<div" + jade.attr("style", "left: " + 100 * o.center.x + "%; top: " + 100 * o.center.y + "%", !0, !1) + jade.attr("data-index", e, !0, !1) + ' class="waypoint"></div>')
                                }
                            }
                    }.call(this), i.push("</div>")), i.push('</div><div class="navigation text-center"><div class="col-sm-12 text-center text-md caption block-lg"></div>'),
                    n && i.push('<div class="btn-container"><div class="col-sm-4 col-sm-offset-2 col-lg-3 col-lg-offset-3 block-ver-sm"><div class="prev-wp btn btn-block"></div></div><div class="col-sm-4 col-lg-3 block-ver-sm"><div class="next-wp btn btn-block"></div></div></div>'), i.push('</div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "guided" in n ? n.guided : "undefined" != typeof guided ? guided : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in n ? n.undefined : void 0, "url" in n ? n.url : "undefined" != typeof url ? url : void 0, "waypoints" in n ? n.waypoints : "undefined" != typeof waypoints ? waypoints : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/image-waypoints/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer",
                "iostap .prev-wp": "goToPrevWaypoint",
                "iostap .next-wp": "goToNextWaypoint",
                "iostap .waypoint": "tapWaypoint",
                iostap: "exitWaypoint"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s;
                for (t = i.__super__.serialize.apply(this, arguments), t.hasPrompt = !0, s = t.waypoints, n = 0, o = s.length; n < o; n++) e = s[n], e.center = this.getCenter(e.region);
                return t
            }, i.prototype.hide = function() {
                return this.exitWaypoint()
            }, i.prototype.onRefresh = function() {
                return this.show(!1)
            }, i.prototype.onResize = function() {
                return this.getEl("container").style.height = "", this.getEl("container").style.width = "", this.setDimensions()
            }, i.prototype.beforeShow = function() {
                if (this.options.data.guided) return this.showLightbox()
            }, i.prototype.setTextColor = function(t) {
                var e, i, n;
                if (e = null != t && null != (i = t.textColor) ? i.toLowerCase() : void 0) return this.el.style.color = null != t && null != (n = t.textColor) ? n.toLowerCase() : void 0
            }, i.prototype.setWaypointColor = function(t) {
                var e, i;
                if (e = null != t && null != (i = t.waypointColor) ? i.toLowerCase() : void 0) return this.el.classList.add("waypoint-" + e)
            }, i.prototype.setLightboxBackground = function(t) {
                return this.lightboxColor = (null != t ? t.background : void 0) || "#000"
            }, i.prototype.showLightbox = function() {
                return this.trigger("lightbox", this.lightboxColor, !0)
            }, i.prototype.show = function(t) {
                var e = this;
                return null == t && (t = !0), this.setEl(this.el.querySelector(".img"), "image"), this.setEl(this.el.querySelector(".caption"), "caption"), this.setEl(this.el.querySelector(".waypoints"), "waypoints"), this.setEl(this.el.querySelector(".navigation"), "navigation"), this.setEl(this.el.querySelector(".image-container"), "container"), this.setState("prompt"), this.setState(this.options.data.guided.toString(), "guided"), this.setTextColor(this.options.data.lightbox), this.setWaypointColor(this.options.data.appearance), this.setLightboxBackground(this.options.data.lightbox), this.listenTo(this, "resize", this.onResize), t || this.el.classList.add("no-transition"), this.getEl("image").complete ? this.setDimensions() : this.getEl("image").onload = function() {
                    return e.setDimensions()
                }
            }, i.prototype.setDimensions = function() {
                return this.setContainerDimensions(), this.el.classList.add("is-loaded"), this.doneSettingDimensions()
            }, i.prototype.doneSettingDimensions = function() {
                return this.options.data.guided && this.goToWaypoint(0), this.el.offsetLeft, this.el.classList.remove("no-transition")
            }, i.prototype.getCenter = function(t) {
                return {
                    x: (t.xMin + t.xMax) / 2,
                    y: (t.yMin + t.yMax) / 2
                }
            }, i.prototype.allWaypointsTapped = function() {
                return _.reduce(this.getEl("waypoints").children, function(t, e) {
                    return t && e.dataset.tapped
                }, !0)
            }, i.prototype.tapWaypoint = function(t) {
                if (t.stopImmediatePropagation(), this.goToWaypoint(+t.target.dataset.index), t.target.dataset.tapped = "true", this.allWaypointsTapped()) return this.setState("touched")
            }, i.prototype.goToPrevWaypoint = function(t) {
                return t.stopImmediatePropagation(), this.goToWaypoint(Math.max(this.currentIndex - 1, this.limits().min))
            }, i.prototype.goToNextWaypoint = function(t) {
                return t.stopImmediatePropagation(), this.goToWaypoint(Math.min(this.currentIndex + 1, this.limits().max))
            }, i.prototype.updateNextPrevButtons = function() {
                var t, e, i;
                if (this.options.data.guided && (i = this.limits(), e = i.min, t = i.max, this.el.classList.toggle("prev-disabled", this.currentIndex === e), this.el.classList.toggle("next-disabled", this.currentIndex === t), this.currentIndex === t)) return this.setState("touched")
            }, i.prototype.limits = function() {
                return {
                    min: 0,
                    max: this.options.data.waypoints.length - 1
                }
            }, i.prototype.goToWaypoint = function(t) {
                var e, i, n;
                return this.currentIndex = t, n = this.options.data.waypoints[this.currentIndex], i = n.region, e = n.caption, this.showLightbox(), this.updateNextPrevButtons(), this.scaleImage(i), this.toggleCaption(e)
            }, i.prototype.exitWaypoint = function() {
                if (!this.options.data.guided) return this.toggleCaption(), this.trigger("lightbox", !1), this.getEl("image").style.transform = ""
            }, i.prototype.scaleImage = function(t) {
                var e, i, n, o, s, r, l, a, c, d, u;
                return i = this.getEl("image"), u = this.getCenter(t), c = u.x, d = u.y, l = this.el.offsetWidth / i.width, r = this.el.offsetHeight / i.height, o = t.xMax - t.xMin, n = t.yMax - t.yMin, a = l / o, e = r / n, s = Math.min(a, e), this.transform(i, {
                    x: 100 * s * (.5 - c) + "%",
                    y: 100 * s * (.5 - d) + "%",
                    scale: s
                })
            }, i.prototype.toggleCaption = function(t) {
                return this.getEl("caption").classList.toggle("show-caption", null != t), null != t && (this.getEl("caption").innerHTML = t), null == t ? this.getEl("navigation").style.background = "transparent" : this.getEl("navigation").style.background = this.lightboxColor
            }, i.prototype.setContainerDimensions = function() {
                return this.getEl("container").style.height = "" + this.getEl("image").height + "px", this.getEl("container").style.width = "" + this.getEl("image").width + "px"
            }, i
        }(o), i.exports = n
    }), require.register("engine/image/model.yaml", function(t, e, i) {
        i.exports = {
            title: "image",
            display: "Simple Image",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Display an image and optional caption",
            model: {
                url: {
                    type: "image",
                    "default": "",
                    display: "Image"
                },
                size: {
                    type: "html",
                    "default": "80%",
                    "enum": ["initial", "zoom", "cover", "contain", "50%", "60%", "70%", "80%", "90%", "100%"]
                },
                caption: {
                    title: {
                        type: "html",
                        "default": ""
                    },
                    content: {
                        type: "html",
                        "default": ""
                    },
                    background: {
                        type: "html",
                        "default": "",
                        display: "Background color",
                        help: 'This color (eg. "orange", "#f90", "rgb(255,160,0)") will be used for the caption’s background, or in lightbox mode the background of the entire screen.\n'
                    },
                    textColor: {
                        display: "Text color",
                        type: "html",
                        "default": "White",
                        "enum": ["Black", "White"]
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap the image for more information"
                },
                tapAnywhere: {
                    type: "boolean",
                    display: "Tap anywhere to continue",
                    "default": !1,
                    help: "Let the user tap anywhere on the screen to continue to the next slide. This only applies if there is no caption.\n"
                },
                lightbox: {
                    type: "boolean",
                    "default": !0,
                    help: "Focus on the image by hiding other parts of the interface. If a background color is set, that color will be used.\n"
                }
            },
            examples: [{
                url: "img/examples/product-1.png",
                size: "contain",
                lightbox: !1,
                caption: {
                    title: "Product X",
                    content: "This is the original product in our line and is a great source of pride for the company.\n"
                }
            }]
        }
    }), require.register("engine/image/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c, d) {
                i.push("<div" + jade.cls(["img-container", "hide-overflow", a ? "full-screen" : "content-fill"], [null, null, !0]) + '><div class="img-scroller"><div' + jade.cls(["img", "zoom" === d ? "content" : ""], [null, !0]) + "></div></div></div>"), s && (i.push('<div class="text-center"><div' + jade.attr("style", "background-color: " + t + ";", !0, !1) + ' class="caption block-lg text-md">'), n.title && i.push("<p><strong>" + (null == (e = n.title) ? "" : e) + "</strong></p>"), n.content && i.push(null == (e = n.content) ? "" : e), i.push("</div></div>")), i.push('<div class="slide-footer slide-up">'), l ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof c && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = c) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), r && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "backgroundColor" in n ? n.backgroundColor : "undefined" != typeof backgroundColor ? backgroundColor : void 0, "caption" in n ? n.caption : "undefined" != typeof caption ? caption : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasCaption" in n ? n.hasCaption : "undefined" != typeof hasCaption ? hasCaption : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "lightbox" in n ? n.lightbox : "undefined" != typeof lightbox ? lightbox : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "size" in n ? n.size : "undefined" != typeof size ? size : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/image/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), s = e("views/components/zoom"), r = e("lib/device").dpi, n = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                var t, e;
                return t = {}, e = "zoom" === this.options.data.size ? "touch:tap" : "iostap", this.options.data.tapAnywhere && !this.hasCaption() ? t[e] = "showAnswer" : (t["iostap .btn-done"] = "showAnswer", t["" + e + " .img"] = "toggleCaption", t["" + e + " .caption"] = "toggleCaption"), t
            }, i.prototype.serialize = function() {
                var t, e, n, o;
                return t = i.__super__.serialize.apply(this, arguments), t.hasCaption = this.hasCaption(), t.tapAnywhere && !t.hasCaption ? (t.hasPrompt = !0, t.prompt = "Tap to continue") : t.hasCaption && (t.hasPrompt = !0), t.backgroundColor = this.backgroundColor = (null != (e = this.options.data.caption) ? e.background : void 0) ? this.options.data.caption.background : this.options.data.lightbox ? "#222" : null != (n = t.config) && null != (o = n.colors) ? o.background : void 0, t
            }, i.prototype.hasCaption = function() {
                var t, e;
                return (null != (t = this.options.data.caption) ? t.title : void 0) || (null != (e = this.options.data.caption) ? e.content : void 0)
            }, i.prototype.beforeShow = function() {
                var t, e;
                return this.setState("prompt"), t = this.options.data.lightbox ? this.backgroundColor : "default", this.el.classList.toggle("is-lightbox", this.options.data.lightbox), this.el.classList.toggle("has-background", null != (e = this.options.data.caption) ? e.background : void 0), this.options.data.lightbox ? this.trigger("lightbox", t, !0) : this.trigger("lightbox", !1), this.setTextColor()
            }, i.prototype.setTextColor = function() {
                var t, e;
                return this.el.style.color = null != (t = this.options.data.caption) && null != (e = t.textColor) ? e.toLowerCase() : void 0
            }, i.prototype.beforeHide = function() {
                return this.trigger("lightbox", !1)
            }, i.prototype.render = function() {
                return i.__super__.render.apply(this, arguments), this.loadImage()
            }, i.prototype.loadImage = function() {
                var t, e = this;
                return t = new Image, t.onload = function() {
                    return e.onImageLoad(t)
                }, t.src = this.options.data.url
            }, i.prototype.onRefresh = function() {
                return this.loadImage(), this.beforeShow(), this.delegateEvents()
            }, i.prototype.resetCaption = function() {
                return this.hasCaption() ? (this.el.classList.add("caption-true"), this.el.classList.remove("caption-false"), this.el.classList.remove("show-caption")) : (this.el.classList.remove("caption-true"), this.el.classList.add("caption-false"))
            }, i.prototype.onImageLoad = function(t) {
                var e;
                return "zoom" === this.options.data.size && this.createZoomer(t), e = this.el.querySelector(".img"), e.style.backgroundImage = 'url("' + this.options.data.url + '")', e.style.backgroundSize = function() {
                    switch (this.options.data.size) {
                        case "zoom":
                            return "contain";
                        default:
                            return this.options.data.size || "cover"
                    }
                }.call(this), window.setTimeout(function() {
                    return e.classList.add("is-loaded")
                }, 300)
            }, i.prototype.toggleCaption = function() {
                if (this.hasCaption()) return this.el.classList.toggle("show-caption"), this.setState("touched")
            }, i.prototype.createZoomer = function(t) {
                var e, i, n, o, l = this;
                return n = t.width, i = t.height, e = this.el.querySelector(".img"), e.style.width = n + "px", e.style.height = i + "px", o = new s({
                    el: this.el.firstChild,
                    contentWidth: n,
                    contentHeight: i,
                    maxScale: 1.75 / r
                }), this.listenTo(o, "zoom", this.onZoom), this.listenTo(this, "resize", function() {
                    return l.onResize(o, n, i)
                }), this.trigger("resize")
            }, i.prototype.onResize = function(t, e, i) {
                var n;
                return n = _.min([1, (this.el.offsetWidth - 40) / e, (this.el.offsetHeight - 40) / i]), t.options.minScale = n, t.getOffset(), t.set({
                    scale: t.options.minScale
                })
            }, i.prototype.onZoom = function(t) {
                return this.setState(t.isZoomed, "zoom")
            }, i.prototype.refresh = function(t) {
                var e;
                if (_.isEqual(t.caption, this.options.data.caption) || (e = !0), i.__super__.refresh.apply(this, arguments), e) return this.toggleCaption()
            }, i
        }(o), i.exports = n
    }), require.register("engine/list/model.yaml", function(t, e, i) {
        i.exports = {
            title: "list",
            display: "List Slide",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Display a list of bullet points",
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                list: {
                    type: [{
                        type: "html"
                    }],
                    min: 1,
                    max: 32
                }
            },
            examples: [{
                title: "A List Slide",
                list: ["Has a several points", "Displays each point with a bullet", "Is similar to a PowerPoint slide"]
            }]
        }
    }), require.register("engine/list/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c) {
                i.push('<div class="content content-scroll block-hor-xl pull-left"><div class="block-ver-xl"><h1 class="slide-up">' + (null == (e = a) ? "" : e) + '</h1><ul class="list">'),
                    function() {
                        var n = r;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var l = n[o];
                                i.push("<li" + jade.cls(["list-item", "slide-up", "delay-" + t.min(o, 10)], [null, null, !0]) + "><h2>" + (null == (e = l) ? "" : e) + "</h2></li>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var l = n[o];
                                    i.push("<li" + jade.cls(["list-item", "slide-up", "delay-" + t.min(o, 10)], [null, null, !0]) + "><h2>" + (null == (e = l) ? "" : e) + "</h2></li>")
                                }
                            }
                    }.call(this), i.push('</ul></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof l && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = l) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "Math" in n ? n.Math : "undefined" != typeof Math ? Math : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "list" in n ? n.list : "undefined" != typeof list ? list : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/list/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i
        }(o), i.exports = n
    }), require.register("engine/matrix/model.yaml", function(t, e, i) {
        i.exports = {
            title: "matrix",
            display: "Matrix",
            category: "Multiple Choice",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                columns: {
                    min: 2,
                    max: 3,
                    type: [{
                        title: {
                            type: "html",
                            "default": "",
                            display: "Column Title"
                        },
                        correct: {
                            display: "Correct Answer",
                            type: "html",
                            "default": ""
                        },
                        incorrect: {
                            display: "Incorrect Answers",
                            min: 1,
                            max: 2,
                            type: [{
                                type: "html"
                            }]
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": -1,
                            display: "Time Limit (ms)"
                        }
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap the correct answer in each column"
                }
            },
            examples: [{
                title: "Name the actor who played...",
                columns: [{
                    title: "Neo",
                    correct: "Keanu Reeves",
                    incorrect: ["Laurence Fishburne", "Carrie-Anne Moss"]
                }, {
                    title: "Trinity",
                    correct: "Carrie-Anne Moss",
                    incorrect: ["Keanu Reeves", "Laurence Fishburne"]
                }, {
                    title: "Morpheus",
                    correct: "Laurence Fishburne",
                    incorrect: ["Keanu Reeves", "Carrie-Anne Moss"]
                }],
                answer: {
                    takeaway: "The matrix template tests connected information",
                    text: "The matrix template is powerful addition to standard mulitple choice questions. You can even use it to talk about the Matrix movie!\n"
                }
            }]
        }
    }), require.register("engine/matrix/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c, d) {
                i.push('<div class="block-xl content-ver text-center content-sm-scroll"><h1 class="block-ver-sm fade-in">' + (null == (e = c) ? "" : e) + '</h1><div class="row">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push("<div" + jade.cls(["col-sm-12", "block-ver-sm", t.length > 2 ? "col-md-4" : "col-md-6"], [null, null, !0]) + "><div" + jade.cls(["block-dk", "block-sm", "fade-in", "delay-" + o], [null, null, null, !0]) + '><div class="block-sm text-bold text-md">' + (null == (e = r.title) ? "" : e) + "</div>"),
                                    function() {
                                        var t = r.all;
                                        if ("number" == typeof t.length)
                                            for (var n = 0, s = t.length; n < s; n++) {
                                                var a = t[n];
                                                i.push("<div" + jade.attr("data-column", o, !0, !1) + jade.attr("data-correct", a === r.correct, !0, !1) + ' class="selectable block-sm fade-in"><div' + jade.cls(["btn", "btn-solid", "btn-block", "slide-up", (l ? "btn-long" : "") + " delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = a || "&nbsp;") ? "" : e) + "</div></div>")
                                            } else {
                                                var s = 0;
                                                for (var n in t) {
                                                    s++;
                                                    var a = t[n];
                                                    i.push("<div" + jade.attr("data-column", o, !0, !1) + jade.attr("data-correct", a === r.correct, !0, !1) + ' class="selectable block-sm fade-in"><div' + jade.cls(["btn", "btn-solid", "btn-block", "slide-up", (l ? "btn-long" : "") + " delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = a || "&nbsp;") ? "" : e) + "</div></div>")
                                                }
                                            }
                                    }.call(this), i.push("</div></div>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push("<div" + jade.cls(["col-sm-12", "block-ver-sm", t.length > 2 ? "col-md-4" : "col-md-6"], [null, null, !0]) + "><div" + jade.cls(["block-dk", "block-sm", "fade-in", "delay-" + o], [null, null, null, !0]) + '><div class="block-sm text-bold text-md">' + (null == (e = r.title) ? "" : e) + "</div>"),
                                        function() {
                                            var t = r.all;
                                            if ("number" == typeof t.length)
                                                for (var n = 0, s = t.length; n < s; n++) {
                                                    var a = t[n];
                                                    i.push("<div" + jade.attr("data-column", o, !0, !1) + jade.attr("data-correct", a === r.correct, !0, !1) + ' class="selectable block-sm fade-in"><div' + jade.cls(["btn", "btn-solid", "btn-block", "slide-up", (l ? "btn-long" : "") + " delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = a || "&nbsp;") ? "" : e) + "</div></div>")
                                                } else {
                                                    var s = 0;
                                                    for (var n in t) {
                                                        s++;
                                                        var a = t[n];
                                                        i.push("<div" + jade.attr("data-column", o, !0, !1) + jade.attr("data-correct", a === r.correct, !0, !1) + ' class="selectable block-sm fade-in"><div' + jade.cls(["btn", "btn-solid", "btn-block", "slide-up", (l ? "btn-long" : "") + " delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = a || "&nbsp;") ? "" : e) + "</div></div>")
                                                    }
                                                }
                                        }.call(this), i.push("</div></div>")
                                }
                            }
                    }.call(this), i.push("</div></div>"), o && o.timer.limit > 0 && i.push('<div class="block-hor-xl"><div class="col-sm-12"><div class="game-progress"><div class="game-progress-bar"></div></div></div></div><div class="game-stepper text-lg text-bold"></div>'), i.push('<div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof a && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = a) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "columns" in n ? n.columns : "undefined" != typeof columns ? columns : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "game" in n ? n.game : "undefined" != typeof game ? game : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "isLong" in n ? n.isLong : "undefined" != typeof isLong ? isLong : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/matrix/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/base/game"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .selectable": "selectAnswer",
                "iostap .btn-done": "endGame"
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.columns = t.columns || [], t.isLong = _.chain(t.columns).map(function(t) {
                    return t.incorrect.concat(t.correct)
                }).flatten().sortBy(function(t) {
                    return t.length
                }).last().value().length > 10, t.columns = t.columns.map(function(t) {
                    return t.rx = /the above/i, t.all = _.shuffle(t.incorrect.concat(t.correct)), t.theAbove = _.findWhere(t.all, function(e) {
                        return t.rx.test(e)
                    }), t.theAbove && (t.all = _.without(t.all, t.theAbove).concat(t.theAbove)), t
                }), t
            }, i.prototype.render = function() {
                return i.__super__.render.apply(this, arguments), this.setEl(this.el.querySelectorAll(".selectable"), "answers"), this.setEl(this.el.querySelectorAll(".column"), "columns"), this.onTimerChange(this.game.timer)
            }, i.prototype.show = function() {
                var t, e, n, o;
                for (i.__super__.show.apply(this, arguments), this.setState("prompt"), o = this.getEl("answers"), e = 0, n = o.length; e < n; e++) t = o[e], t.classList.remove("active");
                return this.enterGame()
            }, i.prototype.endGame = function() {
                return i.__super__.endGame.apply(this, arguments), this.showAnswer(), this.adjustScore()
            }, i.prototype.selectAnswer = function(t) {
                var e, i, n, o, s, r, l;
                if ("complete" !== this.currentState.state) {
                    for (o = t.currentTarget, e = o.dataset.column, o.classList.add("active"), l = this.getEl("answers"), s = 0, r = l.length; s < r; s++) i = l[s], i.dataset.column === e && i !== o && i.classList.remove("active");
                    return n = function() {
                        var t, e, n, o;
                        for (n = this.getEl("answers"), o = [], t = 0, e = n.length; t < e; t++) i = n[t], i.classList.contains("active") && o.push(i);
                        return o
                    }.call(this), n.length === this.options.data.columns.length ? this.setState("touched") : void 0
                }
            }, i.prototype.isCorrect = function() {
                var t, e;
                return t = function() {
                    var t, i, n, o;
                    for (n = this.getEl("answers"), o = [], t = 0, i = n.length; t < i; t++) e = n[t], e.classList.contains("active") && e.dataset.correct && o.push(e);
                    return o
                }.call(this), t.length === this.options.data.columns.length
            }, i.prototype.adjustScore = function(t) {
                return t ? this.onCorrectAnswer() : this.onIncorrectAnswer()
            }, i
        }(n), i.exports = o
    }), require.register("engine/missing-word/model.yaml", function(t, e, i) {
        i.exports = {
            title: "missing-word",
            display: "Missing Word",
            category: "Concepts",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Select the missing words in this sentence"
                },
                words: {
                    min: 1,
                    max: 6,
                    type: [{
                        type: "html"
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag in the missing words"
                }
            },
            examples: [{
                title: "Fill in the important information about Product X",
                words: ["Fill", "Ignore", "important", "spooky", "Product X", "Product Y"],
                answer: {
                    text: "Use missing word to reinforce important messaging about Product X."
                }
            }]
        }
    }), require.register("engine/missing-word/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content-md block-hor-xl content-fill text-center"><div class="row content-md-ver content-sm-ver"><div class="col-md-10 col-md-offset-1 col-sm-12"><h1 class="fade-in">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push("<div" + jade.cls(["word", "slide-up", "delay-" + o], [null, null, !0]) + ">"), r.incorrect ? i.push("<div" + jade.attr("data-name", r.incorrect, !0, !1) + ' class="droppy"></div><span class="word-text">' + (null == (e = r.replaces) ? "" : e) + "</span>") : i.push(null == (e = r.replaces) ? "" : e), i.push("</div>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push("<div" + jade.cls(["word", "slide-up", "delay-" + o], [null, null, !0]) + ">"), r.incorrect ? i.push("<div" + jade.attr("data-name", r.incorrect, !0, !1) + ' class="droppy"></div><span class="word-text">' + (null == (e = r.replaces) ? "" : e) + "</span>") : i.push(null == (e = r.replaces) ? "" : e), i.push("</div>")
                                }
                            }
                    }.call(this), i.push('</h1></div><div class="col-sm-12"><div class="block-ver-lg block-hor-md block-dk">'),
                    function() {
                        var t = a;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push("<div" + jade.attr("data-name", s, !0, !1) + jade.cls(["draggy", "btn", "btn-sm", "btn-solid", "slide-up", "delay-" + n], [null, null, null, null, null, !0]) + ">" + (null == (e = s) ? "" : e) + "</div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push("<div" + jade.attr("data-name", s, !0, !1) + jade.cls(["draggy", "btn", "btn-sm", "btn-solid", "slide-up", "delay-" + n], [null, null, null, null, null, !0]) + ">" + (null == (e = s) ? "" : e) + "</div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "components" in n ? n.components : "undefined" != typeof components ? components : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in n ? n.undefined : void 0, "words" in n ? n.words : "undefined" != typeof words ? words : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/missing-word/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), n = e("views/components/draggy"), r = e("lib/convert"), o = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, l, a, c, d;
                return e = i.__super__.serialize.apply(this, arguments), l = e.title, d = e.words, l = r.toText(l), d = function() {
                    var t, e, i, s;
                    for (s = [], n = t = 0, e = d.length; t < e; n = ++t) c = d[n], a = c, c = r.toText(c), o = (null != (i = l.match(c)) ? i[0] : void 0) ? a : void 0, l = l.replace(c, "{{" + n + "}}"), s.push({
                        replaces: c,
                        incorrect: o
                    });
                    return s
                }(), e.components = function() {
                    var e, i, n, o, r, a, c;
                    for (n = l.trim().split(" "), c = [], e = 0, i = n.length; e < i; e++) t = n[e], s = +(null != (o = t.match(/\{\{(\d+)\}\}/)) ? o[1] : void 0), c.push({
                        incorrect: null != (r = d[s]) ? r.incorrect : void 0,
                        replaces: (null != (a = d[s]) ? a.replaces : void 0) || t
                    });
                    return c
                }(), e.words = _.shuffle(e.words), e
            }, i.prototype.show = function() {
                var t, e, i, o, s, r;
                if (this.draggies)
                    for (r = this.draggies, o = 0, s = r.length; o < s; o++) t = r[o], t.undelegateEvents();
                return this.draggies = function() {
                    var o, s, r, l;
                    for (r = this.el.querySelectorAll(".draggy"), l = [], i = o = 0, s = r.length; o < s; i = ++o) e = r[i], t = new n({
                        el: e
                    }), this.listenTo(t, "drag", this.onDrag), this.listenTo(t, "drop", this.onDrop), l.push(t);
                    return l
                }.call(this), this.droppies = this.getElements(".droppy", null), this.el.classList.add("ready")
            }, i.prototype.getElements = function(t, e) {
                var i, n, o, s, r, l, a, c, d, u, p;
                if (e) {
                    for (u = [], s = 0, l = e.length; s < l; s++) c = e[s], n = c.el, i = c.contains, u.push({
                        el: n,
                        contains: i,
                        bounds: n.getBoundingClientRect()
                    });
                    return u
                }
                for (d = this.el.querySelectorAll(t), p = [], o = r = 0, a = d.length; r < a; o = ++r) n = d[o], p.push({
                    el: n,
                    bounds: n.getBoundingClientRect(),
                    contains: []
                });
                return p
            }, i.prototype.onDrag = function(t, e) {
                var i, n, o, s, r, l;
                for (e && (this.droppies = this.getElements(".droppy", this.droppies)), i = t.closest(_.pluck(this.droppies, "bounds")), l = this.droppies, o = s = 0, r = l.length; s < r; o = ++s) n = l[o], n.el.classList.toggle("active", o === i), n.isActive = o === i;
                return e && (t.el.className = t.el.className.replace(/delay-\d/, "")), this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t) {
                var e, i, n, o, s, r, l, a, c;
                return c = t.offset, o = c.left, s = c.top, r = c.width, n = c.height, i = function() {
                    var t, e, n, o;
                    for (n = this.droppies, o = [], t = 0, e = n.length; t < e; t++) i = n[t],
                        i.isActive && o.push(i);
                    return o
                }.call(this)[0], l = a = 0, i ? (e = i.bounds, l = Math.round(e.left + e.width / 2 - o - r / 2), a = Math.round(e.top + e.height / 2 - s - n / 2)) : t.isPositioned = !1, this.options.data.reject && (null != i ? i.el.dataset.name : void 0) !== t.el.dataset.name && (null != i && (i.isActive = !1), l = a = 0), t.x !== l || t.y !== a ? t.reset({
                    x: l,
                    y: a
                }) : (this.transform(t.el, {
                    x: t.x,
                    y: t.y,
                    transition: "all 300ms"
                }), this.checkAnswer(t)), this.setState(this.isTouched() ? "touched" : "prompt")
            }, i.prototype.checkAnswer = function(t) {
                var e, i, n, o, s, r, l;
                for (r = this.droppies, l = [], o = 0, s = r.length; o < s; o++) i = r[o], i.el.classList.remove("active"), e = _.include(i.contains, t.cid), i.isActive ? (t.el.classList.add("is-positioned"), t.isPositioned = !0, n = this.getDraggyFromID(i.contains[0], t), i.contains.length > 0 && n && (i.isActive = !1, this.resetDraggy(n)), l.push(i.contains = _.uniq(i.contains.concat(t.cid)))) : e ? l.push(i.contains = _.without(i.contains, t.cid)) : l.push(void 0);
                return l
            }, i.prototype.showAnswer = function() {
                var t, e, n, o;
                for (o = this.draggies, e = 0, n = o.length; e < n; e++) t = o[e], t.lock();
                return i.__super__.showAnswer.apply(this, arguments)
            }, i.prototype.isTouched = function() {
                var t, e;
                return e = function() {
                    var e, i, n, o;
                    for (n = this.droppies, o = [], e = 0, i = n.length; e < i; e++) t = n[e], t.contains.length > 0 && o.push(t);
                    return o
                }.call(this), e.length === this.droppies.length
            }, i.prototype.getDraggyFromID = function(t, e) {
                return _.find(this.draggies, function(i) {
                    return i !== e && i.cid === t
                })
            }, i.prototype.resetDraggy = function(t) {
                return t.reset(), t.el.classList.remove("is-positioned"), t.isPositioned = !1
            }, i.prototype.isCorrect = function() {
                var t = this;
                return this.droppies.reduce(function(e, i, n) {
                    var o;
                    return e && (null != (o = t.getDraggyFromID(i.contains[0])) ? o.el.dataset.name : void 0) === i.el.dataset.name
                }, !0)
            }, i
        }(s), i.exports = o
    }), require.register("engine/multiple-choice-game/model.yaml", function(t, e, i) {
        i.exports = {
            title: "multiple-choice-game",
            display: "Multiple Choice",
            category: "Multiple Choice",
            features: {
                stars: !0
            },
            description: "Tap the correct answer(s)",
            model: {
                title: {
                    "default": "Your question",
                    types: ["text", "image", "video", "audio", "iframe"]
                },
                selectable: {
                    display: "Number of selectable answers",
                    "default": 1,
                    type: "number"
                },
                randomize: {
                    "default": !0,
                    type: "boolean",
                    help: 'Shuffle the answers, with those containing "the above" at the bottom.\n'
                },
                answers: {
                    min: 2,
                    max: 8,
                    type: [{
                        content: {
                            type: "html"
                        },
                        correct: {
                            type: "boolean"
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap the correct answer"
                },
                game: {
                    timer: {
                        limit: {
                            type: "number",
                            "default": -1,
                            display: "Time Limit (ms)"
                        }
                    }
                }
            },
            examples: [{
                title: "Can I do a simple true or false question?",
                titleType: "text",
                answers: [{
                    content: "True",
                    correct: !0
                }, {
                    content: "False"
                }],
                answer: {
                    text: "Definitely. True and false works exactly as you would expect.\n"
                }
            }, {
                title: "Does the template support verbose answers?",
                titleType: "text",
                answers: [{
                    correct: !0,
                    content: "Yes, the answers can be long and will still display nicely."
                }, {
                    content: "No, verbosity is not allowed as it complicates things."
                }, {
                    content: "No, it's boring to have long answers. No one will read them."
                }],
                answer: {
                    text: "We do of course we support long answers. They are not always necessary, but sometimes it's important to be specific and we always want to support your needs.\n"
                }
            }, {
                title: 'Which countries start with "A"?',
                titleType: "text",
                selectable: 3,
                prompt: "Tap on the correct answers",
                answers: [{
                    content: "Australia",
                    correct: !0
                }, {
                    content: "Afghanistan",
                    correct: !0
                }, {
                    content: "Armenia",
                    correct: !0
                }, {
                    content: "Africa"
                }, {
                    content: "France"
                }],
                answer: {
                    text: 'Australia, Afghanistan and Armenia all start with an "A". Can you name the other eight countries?\n'
                },
                game: {
                    timer: {
                        limit: 3e3
                    }
                }
            }, {
                title: "Which of these are true?",
                titleType: "text",
                answers: [{
                    content: "All of the above",
                    correct: !0
                }, {
                    content: "This"
                }, {
                    content: "That"
                }, {
                    content: "The other"
                }],
                randomize: !1,
                answer: {
                    takeaway: "All of the above are true",
                    text: 'It\'s possible to show incorrect answers in the specific order followed by a correct answer. Any answer that contains "the above" will be placed at the bottom of the list, random or not.\n'
                }
            }]
        }
    }), require.register("engine/multiple-choice-game/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s, r, l, a, c, d) {
                n["multi-content"] = e = function(n, o) {
                        this && this.block, this && this.attributes || {};
                        switch (o = o || t, o[n + "Type"]) {
                            case "image":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                                break;
                            case "video":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                                break;
                            case "audio":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                                break;
                            case "iframe":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                                var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                                s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                                break;
                            default:
                                i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                        }
                    }, i.push('<div class="block-hor-xl content-fill"><div class="row content-lg-fill content-sm-ver content-md-ver"><div class="col-lg-6 col-sm-12 content-lg-ver"><h1 class="slide-title text-lg-right text-md-center text-sm-center fade-in">'), n["multi-content"]("title"), i.push('</h1></div><div class="col-lg-6 col-sm-12 content-lg-ver">'), r && r.timer.limit > 0 && i.push('<div class="game-stepper text-lg text-bold"></div>'), i.push('<div class="block-md block-dk fade-in"><div class="block-hor-sm">'),
                    function() {
                        var t = o;
                        if ("number" == typeof t.length)
                            for (var n = 0, s = t.length; n < s; n++) {
                                var r = t[n];
                                i.push("<div" + jade.cls(["selectable", "block-ver-sm", "fade-in", r.correct ? "correct" : "incorrect"], [null, null, null, !0]) + "><div" + jade.cls(["btn", "btn-solid", "btn-block", "slide-up", (r.isLong ? "btn-long" : "") + " delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = r.content) ? "" : e) + "</div></div>")
                            } else {
                                var s = 0;
                                for (var n in t) {
                                    s++;
                                    var r = t[n];
                                    i.push("<div" + jade.cls(["selectable", "block-ver-sm", "fade-in", r.correct ? "correct" : "incorrect"], [null, null, null, !0]) + "><div" + jade.cls(["btn", "btn-solid", "btn-block", "slide-up", (r.isLong ? "btn-long" : "") + " delay-" + n], [null, null, null, null, !0]) + ">" + (null == (e = r.content) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push("</div></div></div></div></div>"), r && r.timer.limit > 0 && i.push('<div class="block-hor-xl"><div class="col-sm-12"><div class="game-progress"><div class="game-progress-bar"></div></div></div></div>'), i.push('<div class="slide-footer slide-up">'), a ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof c && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = c) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = s || "Continue") ? "" : e) + "</div></div>"), l && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "answers" in o ? o.answers : "undefined" != typeof answers ? answers : void 0, "continueBtnText" in o ? o.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "game" in o ? o.game : "undefined" != typeof game ? game : void 0, "hasNarration" in o ? o.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in o ? o.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in o ? o.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in o ? o.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/multiple-choice-game/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            a = [].slice;
        n = e("views/base/game"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .selectable": "selectAnswer",
                "iostap .btn-done": "endGame"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, r, l, c;
                return o = i.__super__.serialize.apply(this, arguments), r = _.max(o.answers, function(t) {
                    var e;
                    return (null != (e = t.content) ? e.length : void 0) || 0
                }), s = (null != (c = r.content) ? c.length : void 0) > Math.min(o.width / 16, 30), e = function() {
                    var e, i, n, r;
                    for (n = o.answers, r = [], e = 0, i = n.length; e < i; e++) t = n[e], r.push(_.extend({}, t, {
                        isLong: s,
                        bottom: /the above/i.test(t.content)
                    }));
                    return r
                }(), o.randomize && (e = _.shuffle(e)), n = _.where(e, {
                    bottom: !0
                }), l = _.without.apply(_, [e].concat(a.call(n))), o.answers = l.concat(n), o
            }, i.prototype.render = function() {
                return i.__super__.render.apply(this, arguments), this.setEl(this.el.querySelectorAll(".selectable"), "answers"), this.setEl([], "selected"), this.onTimerChange(this.game.timer)
            }, i.prototype.show = function() {
                var t, e, n, o;
                for (i.__super__.show.apply(this, arguments), this.setState("prompt"), o = this.getEl("answers") || [], e = 0, n = o.length; e < n; e++) t = o[e], t.classList.remove("active");
                return this.enterGame()
            }, i.prototype.endGame = function() {
                return i.__super__.endGame.apply(this, arguments), this.showAnswer(), this.adjustScore()
            }, i.prototype.selectAnswer = function(t) {
                var e, i, n;
                if ("complete" !== this.currentState.state && (i = this.getEl("selected"), e = t.currentTarget, 1 !== this.options.data.selectable || !e.classList.contains("active"))) return e.classList.toggle("active"), e.classList.contains("active") ? (i.length >= this.options.data.selectable && null != (n = i.shift()) && n.classList.remove("active"), i.push(e)) : i = _.without(i, e), this.setEl(i, "selected"), this.setState("touched")
            }, i.prototype.noDifference = function(t, e) {
                return _.chain(t).difference(e).isEmpty().value()
            }, i.prototype.isCorrect = function() {
                var t, e;
                return e = this.getEl("selected"), t = _.chain(this.getEl("answers")).filter(function(t) {
                    return t.classList.contains("correct")
                }).value(), this.noDifference(t, e) && this.noDifference(e, t)
            }, i.prototype.adjustScore = function(t) {
                return t ? this.onCorrectAnswer() : this.onIncorrectAnswer()
            }, i
        }(n), i.exports = o
    }), require.register("engine/number-picker/model.yaml", function(t, e, i) {
        i.exports = {
            title: "number-picker",
            display: "Number Picker",
            category: "Numbers",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Input number 5 in this sentence",
                    help: "Include the number or hashes (#) where the number will occur. The latter takes precendence.\n"
                },
                number: {
                    digits: {
                        type: "int",
                        "default": 2,
                        min: 1,
                        max: 4
                    },
                    min: {
                        type: "int",
                        "default": 0,
                        display: "Min. Value"
                    },
                    max: {
                        type: "int",
                        "default": 99,
                        display: "Max. Value"
                    },
                    prefix: {
                        type: "html",
                        "default": ""
                    },
                    suffix: {
                        type: "html",
                        "default": ""
                    },
                    initial: {
                        type: "int",
                        "default": 0
                    }
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    value: {
                        type: "number",
                        "default": 5,
                        display: "Correct Value"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap to select the correct number"
                }
            },
            examples: [{
                title: "Of the 3 top-selling brands, our portfolio has ##.",
                number: {
                    digits: 2,
                    max: 10,
                    min: 0,
                    initial: 0
                },
                answer: {
                    value: 3,
                    takeaway: "Our portfolio has 3 of the 3 top-selling brands"
                }
            }, {
                title: "At a cost of $99, our product is the cheapest",
                number: {
                    digits: 3,
                    max: 147,
                    min: 12,
                    initial: 99,
                    prefix: "$",
                    suffix: ","
                },
                answer: {
                    value: 99,
                    takeaway: "The product costs $99.00"
                }
            }]
        }
    }), require.register("engine/number-picker/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c, d, u) {
                i.push('<div class="block-xl content text-center">'), o && i.push('<h1 class="number-picker-title slide-down">' + (null == (e = o) ? "" : e) + "</h1>"), i.push("<div" + jade.cls(["number-pickers", "scale-up", a ? "pickers-sm" : ""], [null, null, !0]) + ">"), c.prefix && i.push('<div class="number-picker-prefix text-right text-xxl">' + (null == (e = c.prefix) ? "" : e) + "</div>"),
                    function() {
                        var n = new t(c.digits);
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                n[o];
                                i.push('<div class="number-picker block-dk"><div class="btn btn-solid btn-block text-sm number-picker-arr-up">&#9650;</div><div class="number-picker-nums"><div class="number-picker-nums-scroller">'),
                                    function() {
                                        var n = new t(11);
                                        if ("number" == typeof n.length)
                                            for (var o = 0, s = n.length; o < s; o++) {
                                                n[o];
                                                i.push('<div class="number-picker-num block-hor-md"><div class="text-xxl">' + jade.escape(null == (e = o % 10) ? "" : e) + "</div></div>")
                                            } else {
                                                var s = 0;
                                                for (var o in n) {
                                                    s++;
                                                    n[o];
                                                    i.push('<div class="number-picker-num block-hor-md"><div class="text-xxl">' + jade.escape(null == (e = o % 10) ? "" : e) + "</div></div>")
                                                }
                                            }
                                    }.call(this), i.push('</div></div><div class="btn btn-solid btn-block text-sm number-picker-arr-down">&#9660;</div></div>')
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    n[o];
                                    i.push('<div class="number-picker block-dk"><div class="btn btn-solid btn-block text-sm number-picker-arr-up">&#9650;</div><div class="number-picker-nums"><div class="number-picker-nums-scroller">'),
                                        function() {
                                            var n = new t(11);
                                            if ("number" == typeof n.length)
                                                for (var o = 0, s = n.length; o < s; o++) {
                                                    n[o];
                                                    i.push('<div class="number-picker-num block-hor-md"><div class="text-xxl">' + jade.escape(null == (e = o % 10) ? "" : e) + "</div></div>")
                                                } else {
                                                    var s = 0;
                                                    for (var o in n) {
                                                        s++;
                                                        n[o];
                                                        i.push('<div class="number-picker-num block-hor-md"><div class="text-xxl">' + jade.escape(null == (e = o % 10) ? "" : e) + "</div></div>")
                                                    }
                                                }
                                        }.call(this), i.push('</div></div><div class="btn btn-solid btn-block text-sm number-picker-arr-down">&#9660;</div></div>')
                                }
                            }
                    }.call(this), c.suffix && i.push('<div class="number-picker-suffix text-left text-xxl">' + (null == (e = c.suffix) ? "" : e) + "</div>"), i.push("</div>"), n && i.push('<h1 class="number-picker-title slide-up">' + (null == (e = n) ? "" : e) + "</h1>"), i.push('</div><div class="slide-footer slide-up">'), l ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof d && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = d) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = s || "Continue") ? "" : e) + "</div></div>"), r && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "Array" in n ? n.Array : "undefined" != typeof Array ? Array : void 0, "after" in n ? n.after : "undefined" != typeof after ? after : void 0, "before" in n ? n.before : "undefined" != typeof before ? before : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "isLong" in n ? n.isLong : "undefined" != typeof isLong ? isLong : void 0, "number" in n ? n.number : "undefined" != typeof number ? number : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/number-picker/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), o = e("views/components/picker"), n = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, r, l, a, c;
                return n = i.__super__.serialize.apply(this, arguments), c = n.title, s = n.number, t = n.answer, r = s.prefix, a = s.suffix, /\W#+\W/.test(c) ? e = c.split(/\W+#+\W+/) : (o = "" + r + t.value + a, o = null != o ? o.replace(/[\$\!]/g, function(t) {
                    return "\\" + t
                }) : void 0, l = new RegExp("\\s+" + o + "\\s+"), e = (c || "").split(l)), n.isLong = r.length + a.length > 5, n.before = e[0], n.after = e.slice(1).join(""), n
            }, i.prototype.show = function() {
                var t, e, i, n, s, r, l, a, c, d;
                for (this.setEl(this.el.querySelectorAll(".number-picker"), "pickers"), a = this.options.data.number, n = a.initial, t = a.digits;
                    ("" + n).length < t;) n = " " + n;
                for (this.pickers = function() {
                        var t, r, l, a;
                        for (l = this.getEl("pickers"), a = [], i = t = 0, r = l.length; t < r; i = ++t) e = l[i], s = new o({
                            el: e,
                            value: +("" + n).charAt(i)
                        }), this.listenTo(s, "change", this.onChange), a.push(s);
                        return a
                    }.call(this), c = this.pickers, d = [], r = 0, l = c.length; r < l; r++) s = c[r], d.push(this.onChange(s, null, !0));
                return d
            }, i.prototype.onChange = function(t, e, i) {
                var n, o;
                if (this.getTotal(), i || this.setState("touched"), i ? this.transform(t.scroller, {
                        y: t.offset.height * -t.value,
                        transition: "all 300ms"
                    }) : 0 === t.value && e ? (this.transform(t.scroller, {
                        y: t.offset.height * -10,
                        transition: "all 300ms"
                    }), n = 1) : (1 === t.value && e && (o = 0), 9 !== t.value || e || (o = t.offset.height * -10, n = -1), null != o && (this.transform(t.scroller, {
                        y: o,
                        transition: "none"
                    }), t.scroller.offsetWidth), this.transform(t.scroller, {
                        y: t.offset.height * -t.value,
                        transition: "all 300ms"
                    })), null != n) return this.cascadeFrom(t, n)
            }, i.prototype.getTotal = function() {
                var t, e, i, n, o, s, r;
                for (this.currentValue = + function() {
                        var t, e, n, o;
                        for (n = this.pickers, o = [], t = 0, e = n.length; t < e; t++) i = n[t], o.push(i.value);
                        return o
                    }.call(this).join(""), s = this.pickers, r = [], e = n = 0, o = s.length; n < o; e = ++n) i = s[e], t = Math.pow(10, this.pickers.length - e - 1), i.toggleUp(this.currentValue + t > this.options.data.number.max), r.push(i.toggleDown(this.currentValue - t < this.options.data.number.min));
                return r
            }, i.prototype.cascadeFrom = function(t, e) {
                var i, n;
                return i = this.pickers.indexOf(t), null != (n = this.pickers[i - 1]) ? n.setBy(e, !0) : void 0
            }, i.prototype.isCorrect = function() {
                return this.currentValue === this.options.data.answer.value
            }, i
        }(s), i.exports = n
    }), require.register("engine/pie-chart/model.yaml", function(t, e, i) {
        i.exports = {
            title: "pie-chart",
            display: "Pie Chart",
            category: "Numbers",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Ask a question"
                },
                pie: {
                    min: {
                        type: "number",
                        "default": 0,
                        display: "Min. Value"
                    },
                    max: {
                        type: "number",
                        "default": 100,
                        display: "Max. Value"
                    },
                    prefix: {
                        type: "html",
                        "default": ""
                    },
                    suffix: {
                        type: "html",
                        "default": "%"
                    },
                    increment: {
                        type: "number",
                        "default": 1
                    }
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    value: {
                        type: "number",
                        "default": 5,
                        display: "Correct Value"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag to set the correct value"
                }
            },
            examples: [{
                title: "What percentage of the market belongs to the product?",
                pie: {
                    min: 0,
                    max: 100,
                    labels: 4,
                    prefix: "",
                    suffix: "%",
                    increment: 1
                },
                answer: {
                    value: 26,
                    takeaway: "The product holds 26% market share",
                    text: "With so much market share held by this product, it's obviously the only choice for consumers in the know.\n"
                }
            }]
        }
    }), require.register("engine/pie-chart/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l) {
                i.push('<div class="block-xl content-lg-fill content-sm-ver content-md-ver"><div class="row content-lg-fill"><div class="col-lg-6 col-sm-12 content-lg-ver"><h1 class="text-lg-right text-md-center text-sm-center fade-in">' + (null == (e = l) ? "" : e) + '</h1></div><div class="col-lg-6 col-sm-12 content-lg-ver text-center">'), s || (s = {
                    min: 0,
                    max: 100
                });
                s.max - s.min;
                i.push('<div class="pie scale-up"><div class="pie-ring"></div><svg class="pie-ring-svg"><circle cx="50%" cy="50%" r="50%" class="pie-ring"></circle><circle cx="50%" cy="50%" r="50%" class="pie-ring pie-ring-input"></circle><circle cx="50%" cy="50%" r="50%" class="pie-ring pie-ring-answer"></circle></svg><div class="pie-ring-value text-xxl text-bold content"><div class="text-sm"><div class="text-sm">Touch to begin</div></div></div></div></div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "pie" in n ? n.pie : "undefined" != typeof pie ? pie : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/pie-chart/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/slide"), s = e("lib/prefix"), n = e("views/components/draggy"), o = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.show = function() {
                return this.setEl(this.el.querySelector(".pie"), "pie"), this.setEl(this.el.querySelector(".pie-ring-input"), "knob-input"), this.setEl(this.el.querySelector(".pie-ring-value"), "knob-value"), this.setEl(this.el.querySelector(".pie-ring-answer"), "knob-answer"), this.resetDashOffset(this.getEl("knob-input")), this.resetDashOffset(this.getEl("knob-answer")), this.createDraggy()
            }, i.prototype.createDraggy = function() {
                return this.draggy = new n({
                    el: this.getEl("pie"),
                    radius: this.getEl("pie").offsetWidth / 2,
                    isParent: !0
                }), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop)
            }, i.prototype.onDrag = function(t, e) {
                return this.currentValue = this.roundValue(t), this.labelEl(this.getEl("knob-value"), this.currentValue), this.transition(this.getEl("knob-input"), e ? "all 300ms" : "none"), this.offsetStrokeDash(this.getEl("knob-input"), t.t)
            }, i.prototype.onDrop = function(t, e) {
                var i;
                return i = this.roundPos(t), t.t === i || e ? (this.transition(this.getEl("knob-input"), "all 300ms"), this.offsetStrokeDash(this.getEl("knob-input"), t.t), null != this.currentValue ? this.setState("touched") : void 0) : t.reset({
                    t: i
                })
            }, i.prototype.resetDashOffset = function(t) {
                var e;
                return e = this.getEl("pie").offsetWidth * Math.PI, t.style.strokeDashoffset = e, t.style.strokeDasharray = [e, e].join(" "), this.circumference = e
            }, i.prototype.offsetStrokeDash = function(t, e) {
                var i, n;
                return n = -(e - 2 * Math.PI) / (2 * Math.PI), i = this.circumference * n, t.style.strokeDashoffset = "" + i + "px"
            }, i.prototype.roundValue = function(t) {
                var e, i, n, o, s, r, l;
                return l = this.options.data.pie, e = l.increment, n = l.min, i = l.max, s = (i - n) / e, o = Math.round(t.t / (2 * Math.PI) * s), r = o * e + n, e < 1 ? Math.round(1 * r / e) / (1 / e) : r
            }, i.prototype.roundPos = function(t) {
                var e, i, n, o, s, r;
                return r = this.options.data.pie, e = r.increment, n = r.min, i = r.max, s = (i - n) / e, o = Math.round(t.t / (2 * Math.PI) * s), 2 * Math.PI * (o / s)
            }, i.prototype.labelEl = function(t, e) {
                var i, n, o;
                return o = this.options.data.pie, i = o.prefix, n = o.suffix, t.innerHTML = "" + i + e + n
            }, i.prototype.showAnswer = function() {
                return i.__super__.showAnswer.apply(this, arguments), this.offsetStrokeDash(this.getEl("knob-answer"), this.draggy.t), this.animateAnswerKnob(this.getEl("knob-answer"))
            }, i.prototype.isCorrect = function() {
                return this.currentValue === this.options.data.answer.value
            }, i.prototype.animateAnswerKnob = function(t) {
                var e, i, n, o;
                return o = this.options.data, e = o.answer, n = o.pie, i = (e.value - n.min) / (n.max - n.min), t.offsetWidth, this.transition(t, "all 600ms"), this.offsetStrokeDash(t, i * Math.PI * 2)
            }, i
        }(r), i.exports = o
    }), require.register("engine/ratio/model.yaml", function(t, e, i) {
        i.exports = {
            title: "ratio",
            display: "Ratio",
            category: "Numbers",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Choose the correct ratios"
                },
                ratio: {
                    bars: {
                        min: 1,
                        max: 4,
                        type: [{
                            title: {
                                type: "html"
                            },
                            value: {
                                type: "number"
                            }
                        }]
                    },
                    total: {
                        type: "number",
                        "default": 100,
                        display: "Total Value of All Bars"
                    },
                    prefix: {
                        type: "html",
                        "default": ""
                    },
                    suffix: {
                        type: "html",
                        "default": "%"
                    },
                    increment: {
                        type: "number",
                        "default": 1
                    },
                    independent: {
                        type: "boolean",
                        "default": !1,
                        display: "Allow bars to move freely and total any number"
                    }
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag to set the correct value"
                }
            },
            examples: [{
                title: "What is the price of each product?",
                ratio: {
                    increment: 1,
                    prefix: "$5.",
                    suffix: "0",
                    total: 9,
                    independent: !0,
                    bars: [{
                        title: "Product X",
                        value: 7
                    }, {
                        title: "Product Y",
                        value: 2
                    }, {
                        title: "Product Z",
                        value: 5
                    }]
                },
                answer: {
                    text: "Ratio can be used to ask the same number question for several different items at once.\n"
                }
            }, {
                title: "What are the reported satisfaction levels for users of Product Z?",
                ratio: {
                    independent: !0,
                    increment: 20,
                    bars: [{
                        title: "Satisfaction levels",
                        value: 80
                    }]
                },
                answer: {
                    text: "Ratio can be used to ask a basic number question."
                }
            }, {
                title: "When making Product Y, what ratio of milk to water should you use?",
                ratio: {
                    suffix: "ml",
                    total: 30,
                    increment: 10,
                    bars: [{
                        title: "Milk",
                        value: 20
                    }, {
                        title: "Water",
                        value: 10
                    }]
                },
                answer: {
                    text: "You can use Ratio to ask questions about the ratio of one value in relation to another.\n"
                }
            }]
        }
    }), require.register("engine/ratio/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="block-xl content-lg-fill content-md-ver content-sm-ver"><div class="row content-md-fill"><div class="col-lg-6 col-sm-12 content-lg-ver block-ver-sm"><h1 class="text-lg-right text-md-center text-sm-center fade-in tight">' + (null == (e = l) ? "" : e) + '</h1></div><div class="col-lg-6 col-sm-12 content-lg-ver">'),
                    function() {
                        var t = r.bars;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push("<div" + jade.cls(["text-lg", "block-ver-sm", "slide-up", "delay-" + (n + 1)], [null, null, null, !0]) + '><div class="ratio-title block-ver-sm">' + (null == (e = s.title) ? "" : e) + '</div><div class="ratio"> <div class="ratio-bar-container block-dk"><div class="ratio-bar"></div></div><div class="ratio-value"> <div class="text-right ratio-value-amount">&hellip;</div></div></div></div>')
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push("<div" + jade.cls(["text-lg", "block-ver-sm", "slide-up", "delay-" + (n + 1)], [null, null, null, !0]) + '><div class="ratio-title block-ver-sm">' + (null == (e = s.title) ? "" : e) + '</div><div class="ratio"> <div class="ratio-bar-container block-dk"><div class="ratio-bar"></div></div><div class="ratio-value"> <div class="text-right ratio-value-amount">&hellip;</div></div></div></div>')
                                }
                            }
                    }.call(this), i.push('</div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "ratio" in n ? n.ratio : "undefined" != typeof ratio ? ratio : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/ratio/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), n = e("views/components/draggy"), o = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.show = function() {
                return this.listenTo(this, "resize", this.onResize), this.setEl(this.el.querySelectorAll(".ratio"), "bars"), this.createDraggies()
            }, i.prototype.onResize = function() {
                var t, e = this;
                if ((null != (t = this.draggies) ? t.length : void 0) > 0) return window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() {
                    var t, i, n, o, s, r, l, a;
                    for ("prompt" === e.currentState.state && (o = e.getEl("bars").item(0).offsetWidth, n = o / e.getEl("bars").length), l = e.draggies, a = [], i = s = 0, r = l.length; s < r; i = ++s) t = l[i], t.getOffset(), t.options.maxX = t.offset.totalWidth, n ? a.push(t.reset({
                        x: n
                    })) : a.push(void 0);
                    return a
                }, 600)
            }, i.prototype.serialize = function() {
                var t, e, n, o;
                return t = i.__super__.serialize.apply(this, arguments), o = t.ratio, n = o.total, e = o.increment, t.ratio.total = parseFloat(n, 10) || 100, t.ratio.increment = parseFloat(e, 10) || 1, t.ratio.bars = _.filter(t.ratio.bars, function(t) {
                    return t.title && t.value
                }), 1 === t.ratio.bars.length && (t.ratio.independent = !0), t
            }, i.prototype.createDraggies = function() {
                var t, e, i, o;
                return o = this.getEl("bars").item(0).offsetWidth || this.serialize().width, i = this.options.data.ratio.independent ? o / 2 : o / this.getEl("bars").length, this.draggies = function() {
                    var s, r, l, a;
                    for (l = this.getEl("bars"), a = [], s = 0, r = l.length; s < r; s++) e = l[s], t = new n({
                        el: e,
                        minX: 0,
                        maxX: o,
                        isParent: !0,
                        barElement: e.querySelector(".ratio-bar"),
                        valElement: e.querySelector(".ratio-value-amount")
                    }), this.listenTo(t, "drag", this.onDrag), this.listenTo(t, "drop", this.onDrop), t.reset({
                        x: i,
                        y: 0
                    }), a.push(t);
                    return a
                }.call(this), this.snapBars()
            }, i.prototype.onDrag = function(t, e) {
                if (this.currentDraggy = t, this.setState("touched"), this.renderDraggy(t, e), !this.options.data.ratio.independent) return this.updateDraggies(t, e)
            }, i.prototype.onDrop = function(t, e) {
                return e ? this.renderDraggy(t, !0) : this.snapBars()
            }, i.prototype.getPercent = function(t) {
                return Math.max(Math.min(t.x / t.offset.width || 0, 1), 1e-4);
            }, i.prototype.getLabel = function(t) {
                var e, i, n;
                return n = this.options.data.ratio, e = n.prefix, i = n.suffix, "" + e + this.getValue(t) + i
            }, i.prototype.getValue = function(t) {
                var e, i, n, o;
                return o = this.options.data.ratio, n = o.total, e = o.increment, i = this.getPercent(t), Math.round(n * i / e) * e
            }, i.prototype.renderDraggy = function(t, e) {
                return this.transform(t.options.barElement, {
                    scale: "" + this.getPercent(t) + ", 1",
                    transition: e ? "all 300ms" : ""
                }), t.options.valElement.innerHTML = this.getLabel(t)
            }, i.prototype.updateDraggies = function(t, e) {
                var i, n, o, s, r, l, a, c, d, u, p, h = this;
                for (a = 1 - this.getPercent(t), s = _.filter(this.draggies, function(e) {
                        return e !== t
                    }), n = _.reduce(s, function(t, e) {
                        return t + h.getPercent(e)
                    }, 0), p = [], o = d = 0, u = s.length; d < u; o = ++d) r = s[o], i = this.getPercent(r), l = i / n * a, c = l * r.offset.width, r.reset({
                    x: c
                }, {
                    silent: !0
                }), p.push(this.renderDraggy(r, e));
                return p
            }, i.prototype.snapBars = function() {
                var t, e, i, n, o, s, r, l, a, c;
                for (i = 0, n = this.options.data.ratio.total, a = this.draggies, c = [], e = r = 0, l = a.length; r < l; e = ++r) t = a[e], o = this.getValue(t), i += o, e !== this.draggies.length - 1 || this.options.data.ratio.independent || (o -= i - n), s = Math.floor(o / n * t.offset.width), c.push(t.reset({
                    x: s
                }));
                return c
            }, i.prototype.isCorrect = function() {
                var t = this;
                return _.chain(this.options.data.ratio.bars).filter(function(e, i) {
                    return e.value !== t.getValue(t.draggies[i])
                }).isEmpty().value()
            }, i.prototype.showAnswer = function() {
                var t, e, n, o, s, r, l, a, c, d;
                for (i.__super__.showAnswer.apply(this, arguments), c = this.options.data.ratio, t = c.bars, s = c.total, d = [], n = l = 0, a = t.length; l < a; n = ++l) r = t[n].value, e = this.draggies[n], o = this.getValue(e) === r, e.el.parentNode.classList.toggle("correct", o), e.el.parentNode.classList.toggle("incorrect", !o), d.push(e.reset({
                    x: e.offset.width * r / s
                }));
                return d
            }, i
        }(s), i.exports = o
    }), require.register("engine/reorder/model.yaml", function(t, e, i) {
        i.exports = {
            title: "reorder",
            display: "Reorder",
            category: "Relationships",
            features: {
                stars: !0
            },
            model: {
                title: {
                    "default": "Rank these items",
                    types: ["text", "image", "video", "audio"]
                },
                list: {
                    display: "List items",
                    type: [{
                        type: "html"
                    }],
                    min: 2,
                    max: 6
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Put the items in the correct order"
                }
            },
            examples: [{
                title: "Rank these cities by population",
                titleType: "text",
                list: ["Tokyo", "New York", "Sydney", "Paris"],
                answer: {
                    takeaway: "Tokyo has a population of over 13 million",
                    text: "Tokyo has almost nine million inhabitants in the city alone, and 13 million in the Greater Tokyo region. In fact, the number of residents in the Japanese capital is greater then the combined population of the next three largest cities Yokohama, Osaka and Nagoya.\n"
                }
            }, {
                title: "Order these brands by market share",
                titleType: "text",
                list: ["Nike", "Adidas", "Reebok"],
                answer: {
                    text: "According to several sources, Nike has more than 30% market share.\n"
                }
            }]
        }
    }), require.register("engine/reorder/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = {},
                o = t || {};
            return function(o, s, r, l, a, c, d, u) {
                n["multi-content"] = e = function(n, o) {
                        this && this.block, this && this.attributes || {};
                        switch (o = o || t, o[n + "Type"]) {
                            case "image":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><img' + jade.attr("src", o[n], !0, !1) + ' class="multi-content multi-content-image"/></div></div>');
                                break;
                            case "video":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><video' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-video block-dk"></video></div></div>');
                                break;
                            case "audio":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-media"><audio' + jade.attr("src", o[n], !0, !1) + ' webkit-playsinline="webkit-playsinline" controls="controls" class="multi-content multi-content-audio block-dk"></audio></div></div>');
                                break;
                            case "iframe":
                                i.push('<div class="multi-content-wrapper block-md block-lt"><div class="block-sm multi-content-iframe">');
                                var s = o[n].match(/<iframe[^<]*<\/iframe>/);
                                s && i.push(null == (e = s[0].replace(/ (width|height)=["'\d\w]+/g, "")) ? "" : e), i.push("</div></div>");
                                break;
                            default:
                                i.push('<span class="multi-content multi-content-text">' + (null == (e = o[n]) ? "" : e) + "</span>")
                        }
                    }, i.push('<div class="content-md block-hor-xl content-fill"><div class="row content-lg-fill content-sm-ver content-md-ver"><div class="col-lg-6 col-sm-12 content-lg-ver"><h1 class="text-lg-right text-md-center text-sm-center fade-in">'), n["multi-content"]("title"), i.push('</h1></div><div class="col-lg-6 col-sm-12 text-center content-lg-ver"><div class="draggy-container fade-in block-md block-dk"><div class="draggies">'),
                    function() {
                        var t = d;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push("<div" + jade.attr("data-index", a.indexOf(s), !0, !1) + ' class="draggy block-sm"><div' + jade.cls(["btn", "btn-solid", "btn-block", (l ? "btn-long" : "") + (a.length > 4 ? " btn-sm" : "")], [null, null, null, !0]) + ">" + (null == (e = s) ? "" : e) + "</div></div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push("<div" + jade.attr("data-index", a.indexOf(s), !0, !1) + ' class="draggy block-sm"><div' + jade.cls(["btn", "btn-solid", "btn-block", (l ? "btn-long" : "") + (a.length > 4 ? " btn-sm" : "")], [null, null, null, !0]) + ">" + (null == (e = s) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div></div><div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof c && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = c) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in o ? o.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in o ? o.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in o ? o.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "isLong" in o ? o.isLong : "undefined" != typeof isLong ? isLong : void 0, "list" in o ? o.list : "undefined" != typeof list ? list : void 0, "prompt" in o ? o.prompt : "undefined" != typeof prompt ? prompt : void 0, "shuffledList" in o ? o.shuffledList : "undefined" != typeof shuffledList ? shuffledList : void 0, "undefined" in o ? o.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/reorder/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        r = e("views/slide"), o = e("lib/prefix"), n = e("views/components/draggy"), s = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e;
                return t = i.__super__.serialize.apply(this, arguments), e = _.chain(t.list).sortBy("length").last().value(), t.isLong = (null != e ? e.length : void 0) > Math.min(t.width / 16, 30), t.shuffledList = _.shuffle(t.list || []), t
            }, i.prototype.show = function() {
                var t, e, i, o, s, r, l, a;
                if (this.listenTo(this, "resize", this.onResize), this.draggies) {
                    for (a = this.draggies, r = 0, l = a.length; r < l; r++) e = a[r], e.undelegateEvents();
                    this.draggies = null
                }
                return t = this.el.querySelectorAll(".draggy"), o = _.reduce(t, function(t, e) {
                    return t + e.offsetHeight
                }, 0), this.setEl(this.el.querySelector(".draggy-container"), "container"), this.getEl("container").firstChild.style.height = "" + o + "px", this.draggies = function() {
                    var r, l, a;
                    for (a = [], s = r = 0, l = t.length; r < l; s = ++r) i = t[s], e = new n({
                        el: i,
                        lock: "x",
                        minY: 0,
                        maxY: o - i.offsetHeight
                    }), this.listenTo(e, "drag", this.onDrag), this.listenTo(e, "drop", this.onDrop), e.el.style.opacity = 1, a.push(e);
                    return a
                }.call(this), this.resetDraggies(this.draggies), this.el.classList.add("ready")
            }, i.prototype.onDrag = function(t, e) {
                var i, n;
                return i = !1, n = this.getRanking(t), this.resetDraggies(this.draggiesInOrder(this.draggies), t), this.transform(t.el, {
                    y: t.y,
                    scale: 1.05,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t, e) {
                var i, n, o, s, r, l;
                return l = t.offset, n = l.left, s = l.top, r = l.width, i = l.height, o = this.getRanking(t), e ? this.transform(t.el, {
                    y: t.y,
                    transition: "all 300ms"
                }) : (this.resetDraggies(this.draggiesInOrder(this.draggies)), this.setState("touched"))
            }, i.prototype.draggiesInOrder = function(t) {
                var e, i;
                if (t && (e = null != (i = t[0]) ? i.el.parentNode.offsetHeight : void 0)) return _.clone(t).sort(function(t, i) {
                    return t.y + t.y / e * t.offset.height - (i.y + i.y / e * i.offset.height)
                })
            }, i.prototype.getRanking = function(t) {
                var e, i;
                return e = this.options.data.list.length, i = Math.floor(t.y / t.options.maxY * e), _.limit(i, 0, e - 1)
            }, i.prototype.getDraggyFromIndex = function(t) {
                var e;
                return function() {
                    var i, n, o, s;
                    for (o = this.draggies, s = [], i = 0, n = o.length; i < n; i++) e = o[i], e.el.dataset.index === t && s.push(e);
                    return s
                }.call(this)[0]
            }, i.prototype.getElements = function(t) {
                var e, i, n, o, s;
                for (o = this.el.querySelectorAll(t), s = [], i = 0, n = o.length; i < n; i++) e = o[i], s.push({
                    el: e,
                    bounds: e.getBoundingClientRect()
                });
                return s
            }, i.prototype.resetDraggy = function(t) {
                return t.reset(), t.el.classList.remove("is-positioned")
            }, i.prototype.resetDraggies = function(t, e) {
                var i, n, o, s, r, l, a;
                for (o = 0, l = t || [], a = [], i = s = 0, r = l.length; s < r; i = ++s) n = l[i], n !== e && n.reset({
                    y: o
                }), a.push(o += n.offset.height);
                return a
            }, i.prototype.isCorrect = function() {
                return _.chain(this.draggiesInOrder(this.draggies)).filter(function(t, e) {
                    return +t.el.dataset.index === e
                }).each(function(t) {
                    return t.el.classList.add("correct")
                }).size().value() === this.options.data.list.length
            }, i.prototype.showAnswer = function() {
                return i.__super__.showAnswer.apply(this, arguments), this.resetDraggies(_.sortBy(this.draggies, function(t) {
                    return +t.el.dataset.index
                }))
            }, i.prototype.onResize = function() {
                var t, e, i, n, o, s, r, l;
                if ((null != (r = this.draggies) ? r.length : void 0) > 0) {
                    for (n = this.draggies[0].el.offsetHeight, e = n * this.draggies.length, this.getEl("container").firstChild.style.height = "" + e + "px", l = this.draggies, i = o = 0, s = l.length; o < s; i = ++o) t = l[i], t.options.maxY = e - n, t.getOffset();
                    return this.resetDraggies(this.draggiesInOrder(this.draggies))
                }
            }, i
        }(r), i.exports = s
    }), require.register("engine/reveal/model.yaml", function(t, e, i) {
        i.exports = {
            title: "reveal",
            display: "Reveal",
            category: "Content",
            features: {
                narration: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Tap on our range to explore"
                },
                content: {
                    min: 1,
                    max: 4,
                    type: [{
                        title: {
                            type: "html"
                        },
                        description: {
                            type: "html"
                        }
                    }]
                },
                focus: {
                    type: "boolean",
                    "default": !1,
                    help: "Only reveal one peice of content at a time.\n"
                },
                prompt: {
                    type: "html",
                    "default": "Tap to find out more"
                }
            },
            examples: [{
                title: "Learn more about our product range",
                focus: !0,
                content: [{
                    title: "Product X",
                    description: "This is the original product in our line and is a great source of pride for the company.\n"
                }, {
                    title: "Product Y",
                    description: "Product Y was introduced to appeal to a broader customers base and was a great success.\n"
                }, {
                    title: "Product Z",
                    description: "Completing our range is Product Z. It appeals to old and new customers alike, making us a company for everyone.\n"
                }]
            }]
        }
    }), require.register("engine/reveal/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="block-hor-xl content-md-fill content-sm-ver"><div class="content-md-ver text-center"><h1 class="fade-in delay-3">' + (null == (e = l) ? "" : e) + '</h1><div class="row text-center">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o],
                                    l = 12 / t.length;
                                if (1 === t.length) var a = "col-md-8 col-md-offset-2 block-lg";
                                else var a = "block-ver-sm col-md-" + l + " delay-" + (o + 3);
                                i.push("<div" + jade.cls(["content-piece", "slide-up", "col-sm-12", a], [null, null, null, !0]) + '><div class="btn btn-solid btn-reveal"><div class="btn-reveal-title"><h2 class="tight content-ver block-md break-word">' + (null == (e = r.title) ? "" : e) + '</h2></div><div class="btn-reveal-desc block-ver-md block-hor-lg"><div class="content-ver">' + (null == (e = r.description || "&nbsp;") ? "" : e) + "</div></div></div></div>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o],
                                        l = 12 / t.length;
                                    if (1 === t.length) var a = "col-md-8 col-md-offset-2 block-lg";
                                    else var a = "block-ver-sm col-md-" + l + " delay-" + (o + 3);
                                    i.push("<div" + jade.cls(["content-piece", "slide-up", "col-sm-12", a], [null, null, null, !0]) + '><div class="btn btn-solid btn-reveal"><div class="btn-reveal-title"><h2 class="tight content-ver block-md break-word">' + (null == (e = r.title) ? "" : e) + '</h2></div><div class="btn-reveal-desc block-ver-md block-hor-lg"><div class="content-ver">' + (null == (e = r.description || "&nbsp;") ? "" : e) + "</div></div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "content" in n ? n.content : "undefined" != typeof content ? content : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/reveal/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-reveal": "toggleContent",
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.hasPrompt = !0, t
            }, i.prototype.show = function(t) {
                return null == t && (t = 300), this.listenTo(this, "resize", this.onResize), this.setEl(this.el.querySelectorAll(".btn-reveal"), "buttons"), this.resizeButtons()
            }, i.prototype.refresh = function(t) {
                var e, n, o, s, r, l, a;
                for (l = t.data.content, o = s = 0, r = l.length; s < r; o = ++s) n = l[o].description, (null != (a = this.options.data.content[o]) ? a.description : void 0) !== n && (e = o);
                return i.__super__.refresh.apply(this, arguments), this.resetButtons(e), this.resizeButtons()
            }, i.prototype.onResize = function() {
                return this.resetButtons(), window.setTimeout(_.bind(this.resizeButtons, this), 300)
            }, i.prototype.resetButtons = function(t) {
                var e, i, n, o, s, r;
                for (this.setEl(this.el.querySelectorAll(".btn-reveal"), "buttons"), null != t && (e = this.getEl("buttons").item(t), this.transition(e, "none", !0), e.classList.add("active")), s = this.getEl("buttons"), r = [], i = n = 0, o = s.length; n < o; i = ++n) e = s[i], e.style.height = "", e.offsetHeight, r.push(this.transition(e, ""));
                return r
            }, i.prototype.resizeButtons = function() {
                var t, e, i, n, o, s;
                for (e = _.reduce(this.getEl("buttons"), function(t, e) {
                        return Math.max(e.offsetHeight, e.firstChild.firstChild.offsetHeight, t)
                    }, 0), o = this.getEl("buttons"), s = [], i = 0, n = o.length; i < n; i++) t = o[i], s.push(t.style.height = "" + e + "px");
                return s
            }, i.prototype.toggleContent = function(t) {
                var e, i, n, o, s;
                if (this.setState("touched"), e = t.currentTarget, this.options.data.focus)
                    for (s = this.getEl("buttons"), n = 0, o = s.length; n < o; n++) i = s[n], i !== e && i.classList.remove("active");
                return e.classList.toggle("active")
            }, i
        }(o), i.exports = n
    }), require.register("engine/scrollable/model.yaml", function(t, e, i) {
        i.exports = {
            title: "scrollable",
            display: "Scrollable",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Display a long amount of content",
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                content: {
                    type: "html",
                    "default": ""
                },
                prompt: {
                    type: "html",
                    "default": "Scroll to see more"
                }
            },
            examples: [{
                title: "Scrolling Content",
                content: "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\nquis lectus metus, at posuere neque. Sed pharetra nibh eget orci\nconvallis at posuere leo convallis. Sed blandit augue vitae augue\nscelerisque bibendum. Vivamus sit amet libero turpis, non venenatis\nurna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus\naugue.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\nquis lectus metus, at posuere neque. Sed pharetra nibh eget orci\nconvallis at posuere leo convallis. Sed blandit augue vitae augue\nscelerisque bibendum. Vivamus sit amet libero turpis, non venenatis\nurna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus\naugue.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\nquis lectus metus, at posuere neque. Sed pharetra nibh eget orci\nconvallis at posuere leo convallis. Sed blandit augue vitae augue\nscelerisque bibendum. Vivamus sit amet libero turpis, non venenatis\nurna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus\naugue.\n"
            }]
        }
    }), require.register("engine/scrollable/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l) {
                i.push('<div class="content-md content-fill"><div class="content-scroll content-sm-scroll content-md-scroll block-ver-lg fade-in"><div class="content-scroll-inner hide-overflow block-hor-xl"><div class="row"><div class="col-sm-12 col-lg-10 col-lg-offset-1"><h1 class="text-center slide-down">' + (null == (e = l) ? "" : e) + '</h1><div class="text-md">' + (null == (e = t) ? "" : e) + '</div></div></div></div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "content" in n ? n.content : "undefined" != typeof content ? content : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/scrollable/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.buffer = 40, i.prototype.ignoreStateOnRefresh = !0, i.prototype.events = function() {
                return {
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.hasPrompt = !0, t
            }, i.prototype.show = function() {
                return this.setHeight(), this.listenTo(this, "resize", this.onResize)
            }, i.prototype.onScroll = function(t) {
                if (i.__super__.onScroll.apply(this, arguments), t.currentTarget.scrollTop >= this.scrollLimit) return this.setState("touched")
            }, i.prototype.onResize = function() {
                return this.setHeight()
            }, i.prototype.setHeight = function(t, e) {
                var i, n, o, s, r, l;
                if (i = this.el.querySelector(".content-scroll"), s = this.el.offsetHeight - 2 * i.firstChild.offsetTop, o = i.firstChild.offsetHeight, this.scrollLimit = o - s - this.buffer, n = !t && (null != (r = this.options.data.narration) ? r.audio_file : void 0) && (null != (l = this.options.data.narration) ? l.can_not_be_skipped : void 0), o <= s ? (n || this.setState("touched"), this.transform(i.firstChild, {
                        y: (s - o) / 2
                    })) : (this.transform(i.firstChild, {
                        y: 0,
                        transition: "all 300ms"
                    }), n || this.setState("prompt")), e) return i.scrollTop = e
            }, i.prototype.refresh = function() {
                var t, e;
                return e = this.el.querySelector(".content-scroll"), t = e.scrollTop, i.__super__.refresh.apply(this, arguments), this.setHeight(!1, t)
            }, i.prototype.onNarrationPause = function() {
                return this.setHeight()
            }, i.prototype.onNarrationComplete = function() {
                return this.setHeight(!0)
            }, i
        }(o), i.exports = n
    }), require.register("engine/slider/model.yaml", function(t, e, i) {
        i.exports = {
            title: "slider",
            display: "Slider",
            category: "Numbers",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": "Ask a question"
                },
                slider: {
                    min: {
                        type: "number",
                        "default": 0,
                        display: "Min. Value"
                    },
                    max: {
                        type: "number",
                        "default": 10,
                        display: "Max. Value"
                    },
                    prefix: {
                        type: "html",
                        "default": ""
                    },
                    suffix: {
                        type: "html",
                        "default": ""
                    },
                    increment: {
                        type: "number",
                        "default": 1
                    },
                    labels: {
                        type: "int",
                        min: 2,
                        max: 10,
                        "default": 3
                    },
                    decimals: {
                        type: "int",
                        min: 0,
                        max: 8,
                        "default": 0
                    }
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    value: {
                        type: "number",
                        display: "Correct Value"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Drag to set the correct value"
                }
            },
            examples: [{
                title: "What percent of customers responded in the survey?",
                slider: {
                    min: 85,
                    max: 100,
                    suffix: "%",
                    labels: 4
                },
                answer: {
                    text: "A huge amount of responses were contributed to the survey.",
                    value: 98
                }
            }, {
                title: "What is the new price of the product?",
                slider: {
                    min: 6.5,
                    increment: .25,
                    max: 11.5,
                    prefix: "$",
                    labels: 8,
                    decimals: 2
                },
                answer: {
                    value: 7.75,
                    text: "At $7.75, the product is now a lot cheaper!\n"
                }
            }, {
                title: "In which year was the product introduced?",
                slider: {
                    min: 1984,
                    max: 1990,
                    prefix: "",
                    labels: 3
                },
                answer: {
                    text: "The product is a true original from 1984!",
                    value: 1984
                }
            }]
        }
    }), require.register("engine/slider/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c, d, u, p, h) {
                i.push('<div class="block-hor-xl content-md-fill content-sm-ver"><div class="content-md-ver text-center"><h1>' + (null == (e = p) ? "" : e) + '</h1><div class="slider scale-up"><div class="slider-bar"></div><div class="slider-knob slider-knob-input"><div class="slider-knob-value text-md text-nowrap">Touch to slide</div></div><div class="slider-knob slider-knob-answer"><div class="slider-knob-value text-md text-nowrap">' + (null == (e = u.prefix) ? "" : e) + (null == (e = n.value) ? "" : e) + (null == (e = u.suffix) ? "" : e) + '</div></div><div class="slider-notches">'),
                    function() {
                        var e = new t(c + 1);
                        if ("number" == typeof e.length)
                            for (var n = 0, o = e.length; n < o; n++) {
                                e[n];
                                i.push("<div" + jade.attr("style", "left: " + n / c * 100 + "%;", !0, !1) + ' class="slider-notch"></div>')
                            } else {
                                var o = 0;
                                for (var n in e) {
                                    o++;
                                    e[n];
                                    i.push("<div" + jade.attr("style", "left: " + n / c * 100 + "%;", !0, !1) + ' class="slider-notch"></div>')
                                }
                            }
                    }.call(this), i.push("</div>"), u.labels && (i.push('<div class="slider-labels">'), function() {
                        var t = l;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push("<div" + jade.attr("style", "left: " + n / (a - 1) * 100 + "%;", !0, !1) + ' class="slider-label">' + (null == (e = u.prefix) ? "" : e) + (null == (e = u.decimals ? s.toFixed(u.decimals) : s) ? "" : e) + (null == (e = u.suffix) ? "" : e) + "</div>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push("<div" + jade.attr("style", "left: " + n / (a - 1) * 100 + "%;", !0, !1) + ' class="slider-label">' + (null == (e = u.prefix) ? "" : e) + (null == (e = u.decimals ? s.toFixed(u.decimals) : s) ? "" : e) + (null == (e = u.suffix) ? "" : e) + "</div>")
                                }
                            }
                    }.call(this), i.push("</div>")), i.push('</div></div></div><div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof d && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = d) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "Array" in n ? n.Array : "undefined" != typeof Array ? Array : void 0, "answer" in n ? n.answer : "undefined" != typeof answer ? answer : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "labelValues" in n ? n.labelValues : "undefined" != typeof labelValues ? labelValues : void 0, "labels" in n ? n.labels : "undefined" != typeof labels ? labels : void 0, "notches" in n ? n.notches : "undefined" != typeof notches ? notches : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "slider" in n ? n.slider : "undefined" != typeof slider ? slider : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/slider/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = e("views/components/draggy"), s = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer"
            }, i.prototype.serialize = function() {
                var t, e;
                return t = i.__super__.serialize.apply(this, arguments), t.slider.increment = parseFloat(t.slider.increment, 10) || 1, t.slider.min = parseFloat(t.slider.min, 10), t.slider.max = parseFloat(t.slider.max, 10), t.range = t.slider.max - t.slider.min, t.notches = Math.round(t.range / t.slider.increment), t.labels = _.nearest(_.factors(t.notches).map(function(t) {
                    return t + 1
                }), t.slider.labels), t.labelValues = function() {
                    e = [];
                    for (var i = 0, n = t.labels; 0 <= n ? i < n : i > n; 0 <= n ? i++ : i--) e.push(i);
                    return e
                }.apply(this).map(function(e) {
                    var i;
                    return i = new Big(Math.round(e * t.notches / (t.labels - 1))), i = i.mul(t.slider.increment).add(t.slider.min)
                }), t
            }, i.prototype.show = function() {
                return delete this.currentValue, this.setEl(this.el.querySelector(".slider"), "slider"), this.setEl(this.el.querySelector(".slider-knob-input"), "knob-input"), this.setEl(this.el.querySelector(".slider-knob-value"), "knob-value"), this.setEl(this.el.querySelector(".slider-knob-answer"), "knob-answer"), this.createDraggy(), this.draggy.reset({
                    x: this.draggy.offset.width / 2
                })
            }, i.prototype.createDraggy = function() {
                var t;
                return t = this.getEl("slider").offsetWidth, this.draggy = new n({
                    el: this.getEl("slider"),
                    minX: 0,
                    maxX: t,
                    lock: "y",
                    isParent: !0
                }), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop), this.listenTo(this, "resize", this.onResize)
            }, i.prototype.onDrag = function(t, e) {
                return this.currentValue = this.roundValue(t), this.labelEl(this.getEl("knob-value"), this.currentValue), this.transform(this.getEl("knob-input"), {
                    x: t.x,
                    scale: 1.25,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t, e) {
                var i;
                return i = this.roundPos(t), t.x === i || e ? (this.transform(this.getEl("knob-input"), {
                    x: t.x,
                    transition: "all 300ms"
                }), null != this.currentValue ? (this.labelEl(this.getEl("knob-value"), this.currentValue), this.setState("touched")) : void 0) : t.reset({
                    x: i
                })
            }, i.prototype.roundValue = function(t) {
                var e, i, n, o, s, r, l;
                return l = this.options.data.slider, e = l.increment, n = l.min, i = l.max, s = i - n, o = _.limit(t.x / t.offset.width, 0, 1) * s, o = Math.round(o / e), r = o * e + n, e < 1 ? Math.round(1 * r / e) / (1 / e) : r
            }, i.prototype.roundPos = function(t) {
                var e, i, n, o, s, r;
                return r = this.options.data.slider, e = r.increment, n = r.min, i = r.max, s = (i - n) / e, o = Math.round(Math.min(t.x / t.offset.width, 1) * s), t.offset.width * (o / s)
            }, i.prototype.onResize = function(t, e) {
                var i, n, o, s;
                return s = this.options.data.slider, n = s.min, i = s.max, o = (this.currentValue - n) / (i - n) || .5, this.draggy.reset({
                    x: o * this.draggy.el.offsetWidth
                }), this.animateAnswerKnob(this.getEl("knob-answer"))
            }, i.prototype.labelEl = function(t, e) {
                var i, n, o, s;
                return s = this.options.data.slider, n = s.prefix, o = s.suffix, i = s.decimals, i = parseFloat(i, 10) || 0, i > 0 && (e = parseFloat(e, 10).toFixed(i)), t.innerHTML = "" + n + e + o
            }, i.prototype.isCorrect = function() {
                return this.currentValue === this.options.data.answer.value
            }, i.prototype.showAnswer = function() {
                return i.__super__.showAnswer.apply(this, arguments), this.transform(this.getEl("knob-answer"), {
                    x: this.draggy.x
                }), this.animateAnswerKnob(this.getEl("knob-answer")), this.draggy.lock()
            }, i.prototype.animateAnswerKnob = function(t) {
                var e, i, n, o;
                return o = this.options.data, e = o.answer, n = o.slider, i = (e.value - n.min) / (n.max - n.min), t.offsetLeft, this.transform(t, {
                    x: i * this.draggy.offset.width,
                    transition: this.draggy.locked ? "none" : "all 600ms"
                })
            }, i
        }(o), i.exports = s
    }), require.register("engine/strikeout/model.yaml", function(t, e, i) {
        i.exports = {
            title: "strikeout",
            display: "Strike-out",
            category: "Concepts",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html"
                },
                subtitle: {
                    type: "html"
                },
                words: {
                    min: 1,
                    max: 8,
                    type: [{
                        incorrect: {
                            type: "html"
                        },
                        replaces: {
                            type: "html"
                        }
                    }]
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Cross out the incorrect words"
                }
            },
            examples: [{
                title: "Cross out the incorrect words from this sentence to make it correct",
                subtitle: "",
                prompt: "Cross out the incorrect words",
                words: [{
                    incorrect: "impudence",
                    replaces: "incorrect words"
                }, {
                    incorrect: "elephant",
                    replaces: "sentence"
                }, {
                    incorrect: "splendid",
                    replaces: "correct"
                }],
                answer: {
                    text: "You can use strike-out to get people thinking about your message."
                }
            }]
        }
    }), require.register("engine/strikeout/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="full-screen strikeout-canvas-container"><canvas class="strikeout-canvas"></canvas></div><div class="block-hor-xl content-md-fill content-sm-ver text-center strikeout-words"><div class="content-md-ver col-md-10 col-md-offset-1"><h1 class="fade-in">'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push("<div" + jade.attr("data-replaces", r.incorrect && r.replaces, !0, !1) + jade.cls(["word", r.incorrect && "word-incorrect"], [null, !0]) + "><div" + jade.cls([r.klass], [!0]) + ">" + (null == (e = r.incorrect || r.replaces) ? "" : e) + "</div></div>");
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push("<div" + jade.attr("data-replaces", r.incorrect && r.replaces, !0, !1) + jade.cls(["word", r.incorrect && "word-incorrect"], [null, !0]) + "><div" + jade.cls([r.klass], [!0]) + ">" + (null == (e = r.incorrect || r.replaces) ? "" : e) + "</div></div>")
                                }
                            }
                    }.call(this), i.push("</h1><h3>" + (null == (e = l) ? "" : e) + '</h3></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "components" in n ? n.components : "undefined" != typeof components ? components : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "subtitle" in n ? n.subtitle : "undefined" != typeof subtitle ? subtitle : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/strikeout/view.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d = {}.hasOwnProperty,
            u = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) d.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/slide"), n = e("views/components/draggy"), s = e("lib/draw/smooth-line"), l = e("lib/convert"), a = e("lib/device").dpi, r = function(t) {
            function i() {
                return c = i.__super__.constructor.apply(this, arguments)
            }
            return u(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t, e, n, o, s, r, a, c, d, u, p;
                for (e = i.__super__.serialize.apply(this, arguments), c = e.title, d = e.words, null == c && (c = ""), c = l.toText(c), d = function() {
                        var t, e, i, n;
                        for (n = [], t = 0, e = d.length; t < e; t++) i = d[t], r = i.replaces, o = i.incorrect, r && o && n.push({
                            replaces: l.toText(r),
                            incorrect: l.toText(o)
                        });
                        return n
                    }(), n = u = 0, p = d.length; u < p; n = ++u) r = d[n].replaces, a = new RegExp("\\b" + r + "\\b"), c = c.replace(a, "{{" + n + "}}");
                return e.components = function() {
                    var e, i, n, o, r, l, a;
                    for (n = c.split(/\s+/), a = [], e = 0, i = n.length; e < i; e++) t = n[e], s = +(null != (o = t.match(/\{\{(\d+)\}\}/)) ? o[1] : void 0), a.push({
                        klass: "delay-" + _.random(3) + " scale-" + _.sample(["down", "up"]),
                        incorrect: null != (r = d[s]) ? r.incorrect : void 0,
                        replaces: (null != (l = d[s]) ? l.replaces : void 0) || t
                    });
                    return a
                }(), e
            }, i.prototype.show = function() {
                var t, e, i, o, s, r;
                for (t = this.el.querySelector("canvas"), this.draggy = new n({
                        el: t,
                        isParent: !0
                    }), this.onResize(), this.context = this.draggy.el.getContext("2d"), this.context.lineCap = "round", this.setEl(this.el.querySelectorAll(".word"), "words"), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop), this.listenTo(this, "resize", this.onResize), this.context.clearRect(0, 0, this.draggy.el.width, this.draggy.el.height), s = this.getEl("words"), r = [], i = 0, o = s.length; i < o; i++) e = s[i], r.push(e.classList.remove("active", "complete"));
                return r
            }, i.prototype.onResize = function() {
                return this.draggy.el.width = this.el.firstChild.offsetWidth * a, this.draggy.el.height = this.el.firstChild.offsetHeight * a
            }, i.prototype.onDrag = function(t, e) {
                return window.clearTimeout(this.timeout), e && (this.line = new s([], window.getComputedStyle(this.el).color, 4 * a)), this.addPoint(t)
            }, i.prototype.onDrop = function(t, e) {
                var i, n, o, s, r, l, c, d, u, p, h, f, m, v, g, y, b = this;
                for (p = this.line.getPoints(), g = this.el.firstChild.getBoundingClientRect(), c = g.left, f = g.top, i = p.reduce(function(t, e) {
                        return t + e.x
                    }, 0) / p.length / a, n = p.reduce(function(t, e) {
                        return t + e.y
                    }, 0) / p.length / a, u = p.reduce(function(t, e) {
                        return t > e.x ? e.x : t
                    }, 1 / 0) / a, d = p.reduce(function(t, e) {
                        return t < e.x ? e.x : t
                    }, 0) / a, y = this.getEl("words"), m = 0, v = y.length; m < v; m++) r = y[m], o = this.getBounds(r, {
                    x: -c,
                    y: -f
                }), s = 20, l = (u - s < o.left && d + s > o.right || i > o.left && i < o.right) && n > o.top && n < o.bottom, r.classList.toggle("active", l), l && r.dataset.replaces && this.transform(r, {
                    opacity: 0,
                    scale: .8
                });
                return (h = function() {
                    if (b.line.length() > 0) return b.line.remove(!0), b.drawLines(), b.timeout = window.setTimeout(h, 1e3 / 30)
                })(), window.setTimeout(function() {
                    var t, e, i, n, o;
                    for (n = b.getEl("words"), o = [], e = 0, i = n.length; e < i; e++) r = n[e], r.classList.contains("active") && ((t = r.dataset.replaces) && (delete r.dataset.replaces, r.innerHTML = t, b.transform(r, {
                        y: 0,
                        opacity: 1
                    })), o.push(r.classList.remove("active", "word-incorrect")));
                    return o
                }, 600), this.setState("touched")
            }, i.prototype.addPoint = function(t) {
                var e, i;
                return e = t.x, i = t.y, this.line.add({
                    x: e * a,
                    y: i * a
                }), this.drawLines()
            }, i.prototype.drawLines = function() {
                return this.context.clearRect(0, 0, this.draggy.el.width, this.draggy.el.height), this.line.draw(this.context)
            }, i.prototype.isCorrect = function() {
                var t;
                return 0 === function() {
                    var e, i, n, o;
                    for (n = this.getEl("words"), o = [], e = 0, i = n.length; e < i; e++) t = n[e], t.dataset.replaces && o.push(t);
                    return o
                }.call(this).length
            }, i
        }(o), i.exports = r
    }), require.register("engine/table/model.yaml", function(t, e, i) {
        i.exports = {
            title: "table",
            display: "Table",
            category: "Content",
            description: "Display tabular information",
            features: {
                narration: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                caption: {
                    type: "html"
                },
                rows: {
                    min: 1,
                    max: 10,
                    type: [{
                        cells: {
                            min: 1,
                            max: 5,
                            type: [{
                                type: "html"
                            }]
                        }
                    }]
                },
                style: {
                    header: {
                        display: "Header Row",
                        type: "boolean",
                        "default": !0,
                        help: "Make the first row in the table a header."
                    },
                    condensed: {
                        type: "boolean",
                        "default": !1,
                        help: "Present more information by condensing the content."
                    },
                    "full-width": {
                        type: "boolean",
                        "default": !0,
                        help: "Stretch the table to the width of the device."
                    }
                }
            },
            examples: [{
                title: "Product Information",
                style: {
                    header: !0,
                    condensed: !1,
                    "full-width": !0
                },
                rows: [{
                    cells: ["Name", "Format", "Price"]
                }, {
                    cells: ["Product X", "Classic", "$6.50"]
                }, {
                    cells: ["Product Y", "Value Pack", "$8.50"]
                }, {
                    cells: ["Product Z", "Ultra Slim", "$12.00"]
                }],
                caption: "All information is up to date as of March 2016."
            }]
        }
    }), require.register("engine/table/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c, d, u, p, h) {
                i.push('<div class="content block-xl"><h1 class="text-center fade-in">' + (null == (e = p) ? "" : e) + '</h1><div class="table-container"><div class="table-wrapper"><table' + jade.cls(["table", "slide-up", n], [null, null, !0]) + "><tbody>"),
                    function() {
                        var t = d;
                        if ("number" == typeof t.length)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var s = t[n];
                                i.push('<tr class="table-row">'),
                                    function() {
                                        var t = a.cells;
                                        if ("number" == typeof t.length)
                                            for (var o = 0, r = t.length; o < r; o++) {
                                                var c = (t[o], s.cells[o] || "");
                                                u.header && 0 === n ? i.push('<th class="table-cell">' + (null == (e = c) ? "" : e) + "</th>") : i.push("<td" + jade.attr("align", l(c) && "right", !0, !1) + ' class="table-cell"><div' + jade.cls(["slide-up", "delay-" + n], [null, !0]) + ">" + (null == (e = c) ? "" : e) + "</div></td>")
                                            } else {
                                                var r = 0;
                                                for (var o in t) {
                                                    r++;
                                                    var c = (t[o], s.cells[o] || "");
                                                    u.header && 0 === n ? i.push('<th class="table-cell">' + (null == (e = c) ? "" : e) + "</th>") : i.push("<td" + jade.attr("align", l(c) && "right", !0, !1) + ' class="table-cell"><div' + jade.cls(["slide-up", "delay-" + n], [null, !0]) + ">" + (null == (e = c) ? "" : e) + "</div></td>")
                                                }
                                            }
                                    }.call(this), i.push("</tr>")
                            } else {
                                var o = 0;
                                for (var n in t) {
                                    o++;
                                    var s = t[n];
                                    i.push('<tr class="table-row">'),
                                        function() {
                                            var t = a.cells;
                                            if ("number" == typeof t.length)
                                                for (var o = 0, r = t.length; o < r; o++) {
                                                    var c = (t[o], s.cells[o] || "");
                                                    u.header && 0 === n ? i.push('<th class="table-cell">' + (null == (e = c) ? "" : e) + "</th>") : i.push("<td" + jade.attr("align", l(c) && "right", !0, !1) + ' class="table-cell"><div' + jade.cls(["slide-up", "delay-" + n], [null, !0]) + ">" + (null == (e = c) ? "" : e) + "</div></td>")
                                                } else {
                                                    var r = 0;
                                                    for (var o in t) {
                                                        r++;
                                                        var c = (t[o], s.cells[o] || "");
                                                        u.header && 0 === n ? i.push('<th class="table-cell">' + (null == (e = c) ? "" : e) + "</th>") : i.push("<td" + jade.attr("align", l(c) && "right", !0, !1) + ' class="table-cell"><div' + jade.cls(["slide-up", "delay-" + n], [null, !0]) + ">" + (null == (e = c) ? "" : e) + "</div></td>")
                                                    }
                                                }
                                        }.call(this), i.push("</tr>")
                                }
                            }
                    }.call(this), t && i.push('<tr class="table-row"><td' + jade.attr("colspan", a.cells.length, !0, !1) + ' align="center" class="table-cell"><small>' + (null == (e = t) ? "" : e) + "</small></td></tr>"), i.push('</tbody></table></div></div></div><div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof c && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = c) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "caption" in n ? n.caption : "undefined" != typeof caption ? caption : void 0, "classes" in n ? n.classes : "undefined" != typeof classes ? classes : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "isNumber" in n ? n.isNumber : "undefined" != typeof isNumber ? isNumber : void 0, "longestRow" in n ? n.longestRow : "undefined" != typeof longestRow ? longestRow : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "rows" in n ? n.rows : "undefined" != typeof rows ? rows : void 0, "style" in n ? n.style : "undefined" != typeof style ? style : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/table/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.isNumber = function(t) {
                    return /^[\.\,\d\$£€\%\-\s]+$/.test(t)
                }, t.longestRow = _.max(t.rows, function(t) {
                    return t.cells.length
                }), t.classes = _.chain(t.style).omit("scrollable", "header").reduce(function(t, e, i) {
                    return e ? t + (" table-" + i) : t
                }, "").value(), t
            }, i.prototype.beforeShow = function() {
                var t, e;
                return e = this.el.querySelector(".table"), t = e.parentNode, e.offsetWidth > t.offsetWidth ? (this.setState(!0, "scroll"), t.addEventListener("scroll", _.bind(this.onScroll, this)), this.onScroll({
                    target: t
                })) : this.setState(!1, "scroll")
            }, i.prototype.onRefresh = function() {
                return this.beforeShow()
            }, i.prototype.onScroll = function(t) {
                var e;
                return e = t.target, e.scrollLeft <= 0 ? this.setState("left", "scroll-pos") : e.scrollLeft >= e.scrollWidth - e.offsetWidth ? this.setState("right", "scroll-pos") : this.setState("between", "scroll-pos")
            }, i
        }(n), i.exports = o
    }), require.register("engine/tap-in-order/model.yaml", function(t, e, i) {
        i.exports = {
            title: "tap-in-order",
            display: "Tap in Order",
            category: "Relationships",
            features: {
                stars: !0
            },
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                list: {
                    display: "List items",
                    type: [{
                        type: "image"
                    }],
                    min: 2,
                    max: 6
                },
                reject: {
                    type: "boolean",
                    "default": !1,
                    display: "Reject Answers",
                    help: "Rejects answers tapped out of order.\n"
                },
                answer: {
                    text: {
                        type: "html",
                        "default": "",
                        display: "Answer Text"
                    },
                    correct: {
                        type: "html",
                        "default": "That's correct!",
                        display: "Correct Reinforcement"
                    },
                    incorrect: {
                        type: "html",
                        "default": "Not quite...",
                        display: "Incorrect Reinforcement"
                    },
                    takeaway: {
                        type: "html",
                        "default": "",
                        display: "Core Message"
                    }
                },
                prompt: {
                    type: "html",
                    "default": "Tap in the correct order"
                }
            },
            examples: [{
                title: "Tap in order",
                reject: !1,
                list: ["img/examples/product-1.png", "img/examples/product-2.png", "img/examples/product-3.png"],
                answer: {
                    incorrect: "Not quite...",
                    correct: "That's correct!",
                    text: "X, Y, then Z is the correct order.\n"
                }
            }]
        }
    }), require.register("engine/tap-in-order/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content content-fill text-center block-hor-xl slide-parent"><div class="tappies-parent content-fill"><div class="content-sm-ver content-md-ver content-lg-fill row"><div class="col-sm-12 col-lg-5 content-lg-ver"><h1 class="title block-md fade-in delay-3 tight">' + (null == (e = l) ? "" : e) + '</h1></div><div class="col-sm-12 col-lg-7 content-lg-ver">'),
                    function() {
                        var t = r;
                        if ("number" == typeof t.length)
                            for (var e = 0, n = t.length; e < n; e++) {
                                var o = t[e];
                                i.push("<div" + jade.attr("data-true-index", o.trueIndex, !0, !1) + jade.attr("data-original-index", e, !0, !1) + jade.cls(["tappy", "block-sm", "delay-4", e % 2 === 0 ? "slide-right" : "slide-left"], [null, null, null, !0]) + '><div class="block-dk tappy-child"><div class="col-sm-3"><div' + jade.attr("data-true-index", o.trueIndex, !0, !1) + jade.attr("data-original-index", e, !0, !1) + ' class="number block-dk text-bold text-lg content-ver"></div></div><div class="col-sm-9">'), o.image && i.push("<img" + jade.attr("src", o.image, !0, !1) + ' class="content-ver"/>'), i.push("</div></div></div>")
                            } else {
                                var n = 0;
                                for (var e in t) {
                                    n++;
                                    var o = t[e];
                                    i.push("<div" + jade.attr("data-true-index", o.trueIndex, !0, !1) + jade.attr("data-original-index", e, !0, !1) + jade.cls(["tappy", "block-sm", "delay-4", e % 2 === 0 ? "slide-right" : "slide-left"], [null, null, null, !0]) + '><div class="block-dk tappy-child"><div class="col-sm-3"><div' + jade.attr("data-true-index", o.trueIndex, !0, !1) + jade.attr("data-original-index", e, !0, !1) + ' class="number block-dk text-bold text-lg content-ver"></div></div><div class="col-sm-9">'), o.image && i.push("<img" + jade.attr("src", o.image, !0, !1) + ' class="content-ver"/>'), i.push("</div></div></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "tappies" in n ? n.tappies : "undefined" != typeof tappies ? tappies : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/tap-in-order/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    "iostap .tappy": "tappyTouch",
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.tappies = _.chain(t.list).filter(function(t) {
                    return t
                }).map(function(t, e) {
                    return {
                        image: t,
                        trueIndex: e
                    }
                }).shuffle().value(), t.isCorrect = this.isCorrect(), t
            }, i.prototype.show = function() {
                return this.rejectIncorrectAnswer(), this.initTapState(), this.setEl(this.el.querySelector(".tappies-parent"), "tappiesParent"), this.setEl(this.el.querySelectorAll(".tappy"), "tappies"), this.setEl(this.el.querySelector(".title"), "title"), this.setEl(this.el.querySelectorAll(".number"), "numbers"), this.refreshTappy()
            }, i.prototype.onResize = function() {
                return this.setTappyHeight()
            }, i.prototype.refreshTappy = function() {
                var t, e, i, n, o;
                for (o = this.getEl("tappies"), e = i = 0, n = o.length; i < n; e = ++i) t = o[e], t.classList.add("no-delay");
                return this.listenTo(this, "resize", this.onResize), this.setTappyHeight()
            }, i.prototype.onRefresh = function() {
                return this.show(), this.fillTaps()
            }, i.prototype.rejectIncorrectAnswer = function() {
                return this.reject = this.options.data.reject
            }, i.prototype.setTappyHeight = function() {
                var t, e, i, n, o, s, r, l, a, c;
                for (n = this.getEl("tappiesParent"), o = n.offsetHeight - this.getEl("title").offsetHeight, i = this.getEl("tappies").length, s = o / i, a = this.getEl("tappies"), c = [], e = r = 0, l = a.length; r < l; e = ++r) t = a[e], c.push(t.style.height = "" + s + "px");
                return c
            }, i.prototype.initTapState = function() {
                return this.tapsSoFar = []
            }, i.prototype.isCorrectSoFar = function() {
                var t;
                return t = function(t, e, i) {
                    return t && e === i.toString()
                }, this.tapsSoFar.reduce(t, !0)
            }, i.prototype.isCorrect = function() {
                return null == this.tapsSoFar && this.initTapState(), this.isCorrectSoFar() && this.tapsSoFar.length === this.options.data.list.length
            }, i.prototype.fillTap = function(t) {
                var e, i;
                return i = t.parentNode.parentNode.parentNode, e = this.tapsSoFar.indexOf(t.dataset.trueIndex), e > -1 ? (t.innerHTML = e + 1, i.classList.add("active"), i.dataset.filledIndex = e) : (t.innerHTML = "", i.classList.remove("active"), i.dataset.filledIndex = "")
            }, i.prototype.fillTaps = function() {
                var t, e, i, n, o, s;
                for (o = this.getEl("numbers"), s = [], t = i = 0, n = o.length; i < n; t = ++i) e = o[t], s.push(this.fillTap(e));
                return s
            }, i.prototype.showAnswer = function() {
                var t, e, n, o, s, r;
                if (i.__super__.showAnswer.apply(this, arguments), this.isCorrect()) return this.el.classList.add("correct-" + this.isCorrect()), this.el.classList.remove("correct-" + !this.isCorrect());
                for (s = this.getEl("tappies"), r = [], e = n = 0, o = s.length; n < o; e = ++n) t = s[e], t.dataset.filledIndex !== t.dataset.trueIndex ? r.push(t.classList.add("incorrect")) : r.push(t.classList.remove("incorrect"));
                return r
            }, i.prototype.keepTapsBefore = function(t) {
                var e;
                if (e = this.tapsSoFar.indexOf(t), e > 0) {
                    if (e > -1) return this.tapsSoFar = this.tapsSoFar.slice(0, e)
                } else if (0 === e) return this.tapsSoFar = []
            }, i.prototype.onRejected = function(t) {
                var e = this;
                return this.currentTappy.classList.add("incorrect"), window.setTimeout(function() {
                    return e.currentTappy.classList.remove("incorrect")
                }, 400)
            }, i.prototype.tappyTouch = function(t) {
                var e, i, n;
                return this.currentTappy = t.currentTarget, i = t.currentTarget.dataset.trueIndex, n = t.currentTarget.dataset.originalIndex, e = this.tapsSoFar.indexOf(i) !== -1, e ? this.keepTapsBefore(i) : this.tapsSoFar.push(i), this.isCorrectSoFar() || !this.reject ? this.fillTaps(this.getEl("numbers")[t.currentTarget.dataset.originalIndex]) : (this.keepTapsBefore(i), this.reject && this.onRejected()), this.setState("touched")
            }, i
        }(n), i.exports = o
    }), require.register("engine/text-and-images/model.yaml", function(t, e, i) {
        i.exports = {
            title: "text-and-images",
            display: "Text And Images",
            category: "Content",
            description: "Display rich content and images.",
            features: {
                narration: !0
            },
            model: {
                title: {
                    type: "html"
                },
                content: {
                    min: 1,
                    max: 10,
                    type: [{
                        text: {
                            type: "html"
                        },
                        image: {
                            type: "image",
                            display: "Image"
                        }
                    }]
                },
                prompt: {
                    type: "html",
                    "default": "Scroll to see more"
                }
            },
            examples: [{
                title: "About Product Z",
                content: [{
                    text: "Product Z is our third product in the Product line. It is three times as good as product X, but only takes up one third of the space. Don't believe us? See below:\n",
                    image: "img/examples/product-3.png"
                }, {
                    text: "Review the following interactive slides to learn more about Product Z.\n"
                }]
            }]
        }
    }), require.register("engine/text-and-images/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content-md content-fill"><div class="content-scroll content-sm-scroll content-md-scroll block-ver-lg fade-in"><div class="content-scroll-inner hide-overflow block-hor-xl"><div class="row"><div class="col-sm-12 col-lg-10 col-lg-offset-1"><h1 class="text-center slide-down">' + (null == (e = l) ? "" : e) + "</h1>"),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push("<div" + jade.cls(["fade-in", "delay-" + (o + 1)], [null, !0]) + ">"), r.text && i.push('<div class="text-md">' + (null == (e = r.text) ? "" : e) + "</div>"), r.image && i.push('<p class="text-center block-ver-md"><img' + jade.attr("src", r.image, !0, !1) + ' class="scrollable-image"/></p>'), i.push("</div>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push("<div" + jade.cls(["fade-in", "delay-" + (o + 1)], [null, !0]) + ">"), r.text && i.push('<div class="text-md">' + (null == (e = r.text) ? "" : e) + "</div>"), r.image && i.push('<p class="text-center block-ver-md"><img' + jade.attr("src", r.image, !0, !1) + ' class="scrollable-image"/></p>'), i.push("</div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "content" in n ? n.content : "undefined" != typeof content ? content : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/text-and-images/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("../scrollable/view"), n = e("lib/preload"), s = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.ignoreStateOnRefresh = !0, i.prototype.serialize = function() {
                var t, e, n, o, s;
                for (t = i.__super__.serialize.apply(this, arguments), s = t.content, n = 0, o = s.length; n < o; n++) e = s[n], e.text || delete e.text, e.image || delete e.image, e.text && !/^<p>/.test(e.text) && (e.text = written.wrapInTag(e.text, "p"));
                return t
            }, i.prototype.loadImages = function() {
                var t, e = this;
                return t = _.chain(this.serialize().content).pluck("image").compact().value(), n.load(t, function(t) {
                    return e.setHeight()
                })
            }, i.prototype.show = function() {
                return this.loadImages(), this.listenTo(this, "resize", this.onResize)
            }, i
        }(o), i.exports = s
    }), require.register("engine/text-sequence/model.yaml", function(t, e, i) {
        i.exports = {
            title: "text-sequence",
            display: "Text Sequence",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Display a sequence of text.",
            model: {
                title: {
                    type: "html",
                    "default": ""
                },
                content: {
                    min: 1,
                    max: 32,
                    type: [{
                        type: "html",
                        "default": ""
                    }]
                },
                prompt: {
                    type: "html",
                    "default": "Tap to read more"
                },
                label: {
                    type: "html",
                    "default": "Step",
                    help: "The label of each step in the sequence. eg. “Step 1 of 4”"
                }
            },
            examples: [{
                title: "About Product Y",
                stepTitle: "Step",
                content: ["Product Y builds on everything our customers loved about Product X", "It is the focus of the upcoming sales cycle", "You should mention Product Y to existing customers who enjoy Product X", "Product Y will have a discounted price at launch"]
            }]
        }
    }), require.register("engine/text-sequence/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a) {
                i.push('<div class="content-md block-hor-xl content-fill"><div class="steps-container block-ver-lg content-fill"><div class="steps text-center">'), l && i.push('<h1 class="tight block-ver-md fade-in delay-3">' + (null == (e = l) ? "" : e) + "</h1>"),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push('<h2 class="step fade-in tight block-ver-md">' + (null == (e = r) ? "" : e) + "</h2>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push('<h2 class="step fade-in tight block-ver-md">' + (null == (e = r) ? "" : e) + "</h2>")
                                }
                            }
                    }.call(this), i.push('</div></div></div><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = n || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "content" in n ? n.content : "undefined" != typeof content ? content : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/text-sequence/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.events = function() {
                return {
                    iostap: "onTap",
                    "iostap .btn-done": "showAnswer"
                }
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.content = _.compact(t.content), t.hasPrompt = !0, t
            }, i.prototype.beforeShow = function() {
                var t, e, i, n, o, s;
                for (this.setEl(this.el.querySelector(".step"), "current-step"), this.setEl(this.el.querySelector(".steps"), "steps"), this.setEl(this.el.querySelector(".slide-footer-prompt"), "prompt"), o = this.getEl("steps").children, s = [], e = i = 0, n = o.length; i < n; e = ++i) t = o[e], t.classList.remove("active"), s.push(this.transform(t, {
                    opacity: "",
                    transition: ""
                }));
                return s
            }, i.prototype.show = function(t) {
                if (this.getEl("steps")) return this.currentIndex = 0, this.initY = this.el.offsetHeight / 2 - this.getEl("steps").firstChild.offsetHeight, this.currY = this.initY, this.transform(this.getEl("steps"), {
                    y: this.currY,
                    transition: t ? "none" : "all 300ms"
                })
            }, i.prototype.onTap = function() {
                if (this.currentIndex < this.options.data.content.length && (this.currentIndex += 1, this.showNextStep(), this.currentIndex === this.options.data.content.length)) return this.setState("touched")
            }, i.prototype.showNextStep = function() {
                return this.transformSteps(), this.setPrompt()
            }, i.prototype.transformSteps = function() {
                var t, e, i, n, o, s, r, l;
                for (n = this.getEl("current-step"), n.classList.add("active"), o = n.offsetHeight / 2, this.currY -= o, this.currY < 0 && (this.currY -= o), l = this.getEl("steps").children, e = s = 0, r = l.length; s < r; e = ++s) t = l[e], (i = t.offsetTop / (this.initY - this.currY)) < 1 && this.transform(t, {
                    opacity: .5 + i / 2,
                    transition: "all 900ms"
                }), t === n && this.setEl(this.getEl("steps").children[e + 1], "current-step");
                return this.transform(this.getEl("steps"), {
                    y: this.currY
                })
            }, i.prototype.setPrompt = function() {
                return this.getEl("prompt").innerHTML = "" + this.options.data.label + " " + this.currentIndex + "\nof " + this.options.data.content.length
            }, i.prototype.refresh = function(t) {
                var e, n, o, s, r, l, a = this;
                for (l = t.data.content, n = s = 0, r = l.length; s < r; n = ++s) o = l[n], content && this.options.data.content[n] !== o && (e = n);
                if (t.data.title !== this.options.data.title && (e = -1), i.__super__.refresh.apply(this, arguments), null != e) {
                    for (this.beforeShow(), this.show(!0), this.el.classList.add("no-transition"); this.currentIndex <= e;) this.onTap();
                    return window.setTimeout(function() {
                        return a.transition(a.getEl("steps"), "all 300ms"), a.el.classList.remove("no-transition")
                    }, 1)
                }
                return this.beforeShow(), this.show()
            }, i
        }(n), i.exports = o
    }), require.register("engine/title/model.yaml", function(t, e, i) {
        i.exports = {
            title: "title",
            display: "Title Slide",
            category: "Content",
            features: {
                narration: !0
            },
            description: "Introduce your lesson",
            model: {
                title: {
                    type: "html",
                    "default": "A title slide"
                },
                subtitle: {
                    type: "html",
                    "default": "An optional subtitle",
                    required: !1
                },
                buttonText: {
                    type: "html",
                    display: "Button text",
                    "default": "OK, let's go!"
                },
                exitButton: {
                    type: "boolean",
                    "default": !1,
                    display: "Exit Button",
                    help: "Give users the option to leave the lesson from this slide."
                }
            }
        }
    }), require.register("engine/title/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l, a, c) {
                    i.push('<div class="content-ver text-center"><div class="block-lg"><h1 class="slide-up">' + (null == (e = c) ? "" : e) + '</h1><h2 class="slide-up delay-1 tight">' + (null == (e = a) ? "" : e) + '</h2></div><div class="block-lg"><div class="btn btn-solid btn-next slide-up delay-2">' + (null == (e = t) ? "" : e) + "</div></div></div>"), n.webAccess || (i.push('<div class="slide-footer slide-up">'), r ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof l && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = l) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = o || "Continue") ? "" : e) + "</div></div>"), s && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>"))
                }.call(this, "buttonText" in n ? n.buttonText : "undefined" != typeof buttonText ? buttonText : void 0, "config" in n ? n.config : "undefined" != typeof config ? config : void 0, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "subtitle" in n ? n.subtitle : "undefined" != typeof subtitle ? subtitle : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0),
                i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/title/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.continueBtnText = "Close Lesson", t.hasPrompt = !t.exitButton, t
            }, i.prototype.events = function() {
                return {
                    "iostap .btn-next": "next",
                    "iostap .btn-done": "exit"
                }
            }, i
        }(n), i.exports = o
    }), require.register("engine/video/model.yaml", function(t, e, i) {
        i.exports = {
            title: "video",
            display: "Video Slide",
            category: "Content",
            description: "Play a video",
            model: {
                title: {
                    type: "html",
                    "default": "Video"
                },
                url: {
                    type: "video",
                    "default": "video/example.mp4",
                    display: "Video"
                },
                stream: {
                    type: "boolean",
                    "default": !1,
                    display: "Play on Demand",
                    help: "Play this video on demand instead of downloading all at once. This is recommended for longer videos.\n"
                },
                autoplay: {
                    type: "boolean",
                    display: "Auto Play",
                    "default": !1,
                    help: "Start playing the video automatically when the user views this slide.\n"
                },
                autoprogress: {
                    type: "boolean",
                    display: "Auto Progress",
                    "default": !1,
                    help: "Continue to the next slide once this video is over.\n"
                },
                fullscreen: {
                    type: "boolean",
                    display: "Full Screen",
                    "default": !1,
                    help: "Show the video in full screen, allowing for orientation changes. This is recommended for longer videos.\n"
                }
            }
        }
    }), require.register("engine/video/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r, l) {
                i.push('<div class="slide-loader content"></div><div class="full-screen"><video' + jade.attr("src", l, !0, !1) + jade.attr("webkit-playsinline", !n, !0, !1) + ' class="video"></video></div><div class="content-fill"><div class="video-controls content"><div class="video-play"></div><div class="video-replay"></div></div><h2 class="video-error-msg content">Sorry, this video is<br/>unavailable at the moment.</h2><div class="slide-footer slide-up">'), s ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof r && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = r) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), o && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div></div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "fullscreen" in n ? n.fullscreen : "undefined" != typeof fullscreen ? fullscreen : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "url" in n ? n.url : "undefined" != typeof url ? url : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/video/view.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/video"), o = function(t) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return l(i, t), i.prototype.template = e("./template"), i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.continueBtnText = "Skip Video", t
            }, i.prototype.beforeShow = function() {
                return this.trigger("lightbox", "#111", !0)
            }, i.prototype.beforeHide = function() {
                return this.trigger("lightbox", !1)
            }, i.prototype.show = function() {
                return this.options.data.autoplay ? this.playVideo() : this.stopVideo()
            }, i.prototype.onVideoEnd = function() {
                return this.options.data.autoprogress && this.getEl("video").ended && (this.showAnswer(), this.options.data.fullscreen && this.getEl("video").remove()), i.__super__.onVideoEnd.apply(this, arguments)
            }, i
        }(n), i.exports = o
    }), require.register("engine/vimeo-video-embed/model.yaml", function(t, e, i) {
        i.exports = {
            title: "vimeo-video-embed",
            display: "Vimeo Video",
            category: "Content",
            description: "Display a video hosted on Vimeo",
            model: {
                title: {
                    type: "html"
                },
                videoId: {
                    type: "html",
                    display: "Video ID",
                    help: 'The ID of your video can be found by selecting the "share" option on Vimeo. eg. https://vimeo.com/87701971 is "87701971"\n'
                },
                autoplay: {
                    type: "boolean",
                    display: "Auto Play",
                    "default": !1,
                    help: "Start playing the video automatically when the user views this slide.\n"
                }
            },
            examples: [{
                videoId: "87701971"
            }]
        }
    }), require.register("engine/vimeo-video-embed/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="vimeo-content content-fill"><div class="slide-loader content"></div><div class="vimeo-player text-center content-fill"></div><img class="vimeo-thumb content-ver block"/><div class="video-controls content"><div class="video-play"></div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/vimeo-video-embed/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = e("lib/vimeo-api"), s = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer",
                iostap: "playVideo"
            }, i.prototype.serialize = function() {
                var t, e, n;
                return t = i.__super__.serialize.apply(this, arguments), t.continueBtnText = "Skip Video", t.videoId = null != t && null != (e = t.videoId.toString().match(/\d+$/)) ? e[0] : void 0, t.thumbnail = null != (n = this.videoData) ? n.thumbnail_large : void 0, t
            }, i.prototype.render = function() {
                var t, e = this;
                return i.__super__.render.apply(this, arguments), this.createPlayer(), t = function() {
                    return e.getEl("vimeo-thumb").removeEventListener("load", t), e.getEl("vimeo-thumb").classList.add("show"), e.setState("paused", "video")
                }, this.setEl(this.el.querySelector(".vimeo-thumb"), "vimeo-thumb"), this.getEl("vimeo-thumb").addEventListener("load", t)
            }, i.prototype.beforeShow = function() {
                if (this.trigger("lightbox", "#111", !0), this.options.data.autoplay) return this.playVideo()
            }, i.prototype.beforeHide = function() {
                var t;
                return window.clearTimeout(this.ensureTimeout), null != (t = this.player) && "function" == typeof t.pause && t.pause(), this.trigger("lightbox", !1)
            }, i.prototype.playVideo = function() {
                var t, e, i = this;
                if (null != this.player) {
                    try {
                        e = this.player.element.contentWindow.document.querySelector("video")
                    } catch (n) {
                        t = n, "undefined" != typeof console && null !== console && console.log(t)
                    }
                    return null != e ? e.paused ? e.play() : e.pause() : this.player.getPaused().then(function(t) {
                        return t ? i.player.play() : i.player.pause()
                    })
                }
                return this.ensure(function() {
                    return null != i.player
                }, function() {
                    return i.player.play()
                })
            }, i.prototype.createPlayer = function() {
                var t = this;
                return this.ensure(function() {
                    var t;
                    return null != (null != (t = window.Vimeo) ? t.Player : void 0)
                }, function() {
                    var e;
                    if (e = t.el.querySelector(".vimeo-player")) return t.player = new Vimeo.Player(e, {
                        id: t.serialize().videoId,
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                        title: !1,
                        portrait: !1,
                        byline: !1,
                        color: "ffffff"
                    }), t.player.on("ended", function() {
                        return t.showAnswer()
                    }), t.player.on("play", function() {
                        return t.setState("playing", "video")
                    }), t.player.on("pause", function() {
                        return t.setState("paused", "video")
                    }), t.player.on("loaded", function() {
                        return t.setState("paused", "video")
                    }), t.loadThumbnail()
                })
            }, i.prototype.onRefresh = function() {
                return window.clearTimeout(this.ensureTimeout), null != this.player ? this.player.loadVideo(this.serialize().videoId) : this.createPlayer(), this.setState("loading", "video"), this.getEl("vimeo-thumb").classList.remove("show"), this.beforeShow()
            }, i.prototype.showAnswer = function(t) {
                return this.player.element.remove(), null != t && t.stopImmediatePropagation(), i.__super__.showAnswer.apply(this, arguments)
            }, i.prototype.ensure = function(t, e) {
                var i, n = this;
                return (i = function() {
                    return t() ? e() : n.ensureTimeout = window.setTimeout(i, 100)
                })()
            }, i.prototype.loadThumbnail = function() {
                var t, e = this;
                return null != (t = this.request) && t.abort(), this.request = $.ajax({
                    type: "GET",
                    url: "http://vimeo.com/api/v2/video/" + this.serialize().videoId + ".json",
                    dataType: "json",
                    success: function(t) {
                        var i, n;
                        if (i = (null != t ? t : [])[0]) return e.videoData = i, null != (n = e.getEl("vimeo-thumb")) ? n.src = i.thumbnail_large : void 0
                    }
                })
            }, i
        }(n), i.exports = s
    }), require.register("engine/youtube-video-embed/model.yaml", function(t, e, i) {
        i.exports = {
            title: "youtube-video-embed",
            display: "YouTube Video",
            category: "Content",
            description: "Display a video hosted on YouTube",
            model: {
                title: {
                    type: "html"
                },
                videoId: {
                    type: "html",
                    display: "YouTube Video ID",
                    help: 'The ID of your video can be found by selecting the "share" option on YouTube. eg. https://youtu.be/MKJ9DlZohV0 is "MKJ9DlZohV0"\n'
                },
                autoplay: {
                    type: "boolean",
                    display: "Auto Play",
                    "default": !1,
                    help: "Start playing the video automatically when the user views this slide.\n"
                }
            },
            examples: [{
                videoId: "MKJ9DlZohV0"
            }]
        }
    }), require.register("engine/youtube-video-embed/template.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s, r) {
                i.push('<div class="yt-content content-fill"><div class="slide-loader content"></div><div class="yt-player text-center content-fill"></div><img' + jade.attr("src", "http://img.youtube.com/vi/" + r + "/maxresdefault.jpg", !0, !1) + ' class="yt-thumb content-ver block"/><div class="video-controls content"><div class="video-play"></div></div></div><div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0, "videoId" in n ? n.videoId : "undefined" != typeof videoId ? videoId : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("engine/youtube-video-embed/view.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = e("lib/youtube-api"), s = function(t) {
            function i() {
                return r = i.__super__.constructor.apply(this, arguments)
            }
            return a(i, t), i.prototype.template = e("./template"), i.prototype.events = {
                "iostap .btn-done": "showAnswer",
                iostap: "playVideo"
            }, i.prototype.serialize = function() {
                var t;
                return t = i.__super__.serialize.apply(this, arguments), t.continueBtnText = "Skip Video", t
            }, i.prototype.render = function() {
                return i.__super__.render.apply(this, arguments), this.player = null, this.waitForAPI()
            }, i.prototype.beforeShow = function() {
                if (this.trigger("lightbox", "#111", !0), this.setState("loading", "video"), this.options.data.autoplay) return this.playVideo()
            }, i.prototype.beforeHide = function() {
                var t;
                return window.clearTimeout(this.waitForAPITimeout), window.clearTimeout(this.checkForPlayerTimeout), null != (t = this.player) && "function" == typeof t.stopVideo && t.stopVideo(), this.trigger("lightbox", !1)
            }, i.prototype.waitForAPI = function() {
                var t, e = this;
                return window.clearTimeout(this.waitForAPITimeout), (t = function() {
                    var i;
                    return null != (null != (i = window.YT) ? i.Player : void 0) ? e.createPlayer() : e.waitForAPITimeout = window.setTimeout(t, 100)
                })()
            }, i.prototype.playVideo = function() {
                var t, e = this;
                return window.clearTimeout(this.checkForPlayerTimeout), (t = function() {
                    var i, n;
                    return null != (null != (i = e.player) ? i.playVideo : void 0) ? null != (n = e.player) && "function" == typeof n.playVideo ? n.playVideo() : void 0 : e.checkForPlayerTimeout = window.setTimeout(t, 100)
                })()
            }, i.prototype.createPlayer = function() {
                var t, e = this;
                return t = this.el.querySelector(".yt-player"), this.player = new YT.Player(t, {
                    videoId: this.options.data.videoId,
                    playerVars: {
                        autoplay: 0,
                        controls: 0,
                        modestbranding: 0,
                        showinfo: 0,
                        rel: 0
                    },
                    events: {
                        onReady: function() {
                            return e.setState("paused", "video")
                        },
                        onStateChange: function(t) {
                            switch (t.data) {
                                case YT.PlayerState.PLAYING:
                                    return e.setState("playing", "video");
                                case YT.PlayerState.PAUSED:
                                    return e.setState("paused", "video");
                                case YT.PlayerState.ENDED:
                                    return e.showAnswer()
                            }
                        }
                    }
                })
            }, i.prototype.onRefresh = function() {
                return this.beforeShow()
            }, i.prototype.showAnswer = function(t) {
                return null != t && t.stopImmediatePropagation(), i.__super__.showAnswer.apply(this, arguments)
            }, i
        }(n), i.exports = s
    }), require.register("lib/convert.coffee", function(t, e, i) {
        var n;
        n = document.createElement("div"), i.exports = {
            toText: function(t) {
                return n.innerHTML = t, n.textContent.replace(/\s+/g, " ")
            },
            toHTML: function(t) {
                return n.textContent = t, n.innerHTML
            }
        }
    }), require.register("lib/cookies.coffee", function(t, e, i) {
        var n;
        n = function() {
            var t, e, i, n, o, s, r;
            for (t = document.cookie.split(";").map(function(t) {
                    var e;
                    return t = t.trim(), e = t.split(/\=/), {
                        name: e[0],
                        value: decodeURIComponent(e[1])
                    }
                }), e = {}, o = 0, s = t.length; o < s; o++) r = t[o], i = r.name, n = r.value, i.match(/^webed/) && (e[i.replace("webed_", "")] = n);
            return e
        }, i.exports = {
            read: n
        }
    }), require.register("lib/data-processer.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u;
        o = {
            renderer: new window.marked.Renderer,
            gfm: !0,
            tables: !0,
            breaks: !1,
            pedantic: !1,
            sanitize: !1,
            smartLists: !0,
            smartypants: !0
        }, l = function(t, e, i) {
            var n, o, s, r, a;
            if (null == e || "object" != typeof t) return i(t, e);
            if ((Array.isArray || _.isArray)(t)) return t.map(function(t, n) {
                return l(t, e.type[0], i)
            });
            s = {};
            for (n in t) a = t[n], r = t["" + n + "Type"], o = e[n], r && null == o.type && (o.type = r), s[n] = l(a, o, i);
            return s
        }, n = function(t) {
            var e, i, n;
            try {
                return i = "function" == typeof t.split ? t.split(/\n\n|\<p[^\>]*\>/).length : void 0, n = window.marked(t.toString(), o), n = n.replace(/(^\s+|\s+$)/g, ""), i <= 1 && (n = n.replace(/\<\/?p[^\>]*\>/g, "")), n
            } catch (s) {
                return e = s, t
            }
        }, d = ["text", "html"], a = function(t) {
            return _.isArray(null != t ? t.types : void 0) ? !_.isEmpty(_.intersection(d, t.types)) : _.include(d, null != t ? t.type : void 0)
        }, c = function(t, e) {
            return a(e) ? n(t) : t
        }, u = {}, s = function(t, i) {
            var n, o, s, r;
            return n = sha1(JSON.stringify({
                data: t,
                type: i
            })), null != u[n] ? u[n] : (o = null != (r = e("engine/" + i + "/model")) ? r.model : void 0, s = _.extend(t, l(t, o, c)), u[n] = s, s)
        }, r = function(t) {
            var e, i, n, o;
            for (o = t.slides, i = 0, n = o.length; i < n; i++) e = o[i], e.data = s(e.data, e.type);
            return t
        }, i.exports = {
            one: s,
            all: r
        }
    }), require.register("lib/device.coffee", function(t, e, i) {
        var n;
        n = "ontouchstart" in window, i.exports = {
            dpi: window.devicePixelRatio || 1,
            ios: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            events: {
                pointer: {
                    isTouch: n,
                    start: n ? "touchstart" : "mousedown",
                    move: n ? "touchmove" : "mousemove",
                    end: n ? "touchend" : "mouseup"
                },
                resize: "onorientationchange" in window ? "orientationchange" : "resize"
            },
            isSmallScreen: function() {
                return window.innerWidth < 600
            }
        }
    }), require.register("lib/draw/catmull-rom-spline.coffee", function(t, e, i) {
        i.exports = function(t, e) {
            var i, n, o, s, r, l, a, c, d, u, p, h, f, m, v, g, y, b;
            for (null == e && (e = 32), t = [].concat(t), m = t.slice(0, 1); t.length > 3;) {
                for (c = 1 * t[3].x - 3 * t[2].x + 3 * t[1].x - t[0].x, d = 1 * t[3].y - 3 * t[2].y + 3 * t[1].y - t[0].y, u = 2 * t[0].x - 5 * t[1].x + 4 * t[2].x - t[3].x, p = 2 * t[0].y - 5 * t[1].y + 4 * t[2].y - t[3].y, v = 1 / e, g = v * v, y = v * g, i = .5 * (y * c + g * u + v * (t[2].x - t[0].x)), n = .5 * (y * d + g * p + v * (t[2].y - t[0].y)), o = 3 * y * c + g * u, s = 3 * y * d + g * p, r = 3 * y * c, l = 3 * y * d, h = t[1].x, f = t[1].y, a = b = 0; 0 <= e ? b < e : b > e; a = 0 <= e ? ++b : --b) h += i, f += n, i += o, n += s, o += r, s += l, m.push({
                    x: h,
                    y: f
                });
                t.shift()
            }
            return m
        }
    }), require.register("lib/draw/simplify.coffee", function(t, e, i) {
        var n, o, s, r, l, a;
        n = function(t, e) {
            var i, n;
            return i = t.x - e.x, n = t.y - e.y, i * i + n * n
        }, o = function(t, e, i) {
            var n, o, s, r, l;
            return r = e.x, l = e.y, n = i.x - r, o = i.y - l, 0 === n && 0 === o || (s = ((t.x - r) * n + (t.y - l) * o) / (n * n + o * o), s > 1 ? (r = i.x, l = i.y) : s > 0 && (r += n * s, l += o * s)), n = t.x - r, o = t.y - l, n * n + o * o
        }, a = function(t, e) {
            var i, o, s, r, l, a;
            for (s = t[0], i = [s], a = t.slice(1), r = 0, l = a.length; r < l; r++) o = a[r], n(o, s) > e && (i.push(o), s = o);
            return s !== o && i.push(o), i
        }, r = function(t, e, i, n, s) {
            var l, a, c, d, u, p;
            for (c = n, l = u = p = e + 1; p <= i ? u < i : u > i; l = p <= i ? ++u : --u) d = o(t[l], t[e], t[i]), d > c && (a = l, c = d);
            if (c > n && (a - e > 1 && r(t, e, a, n, s), s.push(t[a]), i - a > 1)) return r(t, a, i, n, s)
        }, l = function(t, e) {
            var i, n;
            return i = t.length - 1, n = t.slice(0, 1), r(t, 0, i, e, n), n.push(t[i]), n
        }, s = function(t, e, i) {
            var n;
            return null == e && (e = 1), t.length <= 2 ? t : (n = Math.pow(e, 2), t = i ? t : a(t, n), l(t, n))
        }, i.exports = s
    }), require.register("lib/draw/smooth-line.coffee", function(t, e, i) {
        var n, o, s;
        s = e("lib/draw/catmull-rom-spline"), n = e("lib/draw/simplify"), o = function() {
            function t(t, e, i) {
                this.points = null != t ? t : [], this.__color = e, this.__width = i
            }
            return t.prototype.add = function(t) {
                var e, i, o, s, r;
                return this.points.push(t), o = this.points.slice(-50, -1), s = this.points.slice(1, -o.length - 1), e = this.points.slice(0, 1), i = this.points.slice(-1), r = n(o, Math.pow(o.length, .3), !0), this.points = e.concat(s, r, i), this
            }, t.prototype.remove = function(t) {
                return t ? this.points.shift() : this.points.pop()
            }, t.prototype.length = function() {
                return this.points.length
            }, t.prototype.getSpline = function() {
                return s(this.points)
            }, t.prototype.getPoints = function() {
                return [].concat(this.points)
            }, t.prototype.draw = function(t, e) {
                var i, n, o, s, r, l, a;
                if (null == e && (e = !0), n = e ? this.getSpline() : this.points, this.__color && (t.strokeStyle = this.__color), this.__width && (t.lineWidth = this.__width), n.length > 1) {
                    for (t.beginPath(), i = r = 0, l = n.length; r < l; i = ++r) a = n[i], o = a.x, s = a.y, t[0 === i ? "moveTo" : "lineTo"](o, s);
                    return t.stroke()
                }
            }, t
        }(), i.exports = o
    }), require.register("lib/easie.coffee", function(t, e, i) {
        var n;
        n = {
            backIn: function(t, e, i, n, o) {
                return null == o && (o = 1.70158), i * (t /= n) * t * ((o + 1) * t - o) + e
            },
            backOut: function(t, e, i, n, o) {
                return null == o && (o = 1.70158), i * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e
            },
            backInOut: function(t, e, i, n, o) {
                return null == o && (o = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + e : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + e
            },
            bounceOut: function(t, e, i, n) {
                return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
            },
            bounceIn: function(t, e, i, o) {
                return i - n.bounceOut(o - t, 0, i, o) + e
            },
            bounceInOut: function(t, e, i, o) {
                return t < o / 2 ? .5 * n.bounceIn(2 * t, 0, i, o) + e : .5 * n.bounceOut(2 * t - o, 0, i, o) + .5 * i + e
            },
            circIn: function(t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
            },
            circOut: function(t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
            },
            circInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
            },
            cubicIn: function(t, e, i, n) {
                return i * (t /= n) * t * t + e
            },
            cubicOut: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e
            },
            cubicInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
            },
            elasticOut: function(t, e, i, n, o, s) {
                var r;
                return null == o && (o = null), null == s && (s = null), 0 === t ? e : 1 === (t /= n) ? e + i : (null == s && (s = .3 * n), null == o || o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), o * Math.pow(2, -10 * t) * Math.sin((t * n - r) * (2 * Math.PI) / s) + i + e)
            },
            elasticIn: function(t, e, i, n, o, s) {
                var r;
                return null == o && (o = null), null == s && (s = null), 0 === t ? e : 1 === (t /= n) ? e + i : (null == s && (s = .3 * n), null == o || o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), t -= 1, -(o * Math.pow(2, 10 * t)) * Math.sin((t * n - r) * (2 * Math.PI) / s) + e)
            },
            elasticInOut: function(t, e, i, n, o, s) {
                var r;
                return null == o && (o = null), null == s && (s = null), 0 === t ? e : 2 === (t /= n / 2) ? e + i : (null == s && (s = n * (.3 * 1.5)), null == o || o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), t < 1 ? -.5 * (o * Math.pow(2, 10 * (t -= 1))) * Math.sin((t * n - r) * (2 * Math.PI / s)) + e : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s) + i + e)
            },
            expoIn: function(t, e, i, n) {
                return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e
            },
            expoOut: function(t, e, i, n) {
                return t === n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
            },
            expoInOut: function(t, e, i, n) {
                return 0 === t ? e : t === n ? e + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * (t - 1)) + 2) + e
            },
            linearNone: function(t, e, i, n) {
                return i * t / n + e
            },
            linearIn: function(t, e, i, o) {
                return n.linearNone(t, e, i, o)
            },
            linearOut: function(t, e, i, o) {
                return n.linearNone(t, e, i, o)
            },
            linearInOut: function(t, e, i, o) {
                return n.linearNone(t, e, i, o)
            },
            quadIn: function(t, e, i, n) {
                return i * (t /= n) * t + e
            },
            quadOut: function(t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e
            },
            quadInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * ((t -= 1) * (t - 2) - 1) + e
            },
            quartIn: function(t, e, i, n) {
                return i * (t /= n) * t * t * t + e
            },
            quartOut: function(t, e, i, n) {
                return -i * ((t = t / n - 1) * t * t * t - 1) + e
            },
            quartInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
            },
            quintIn: function(t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e
            },
            quintOut: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e
            },
            quintInOut: function(t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
            },
            sineIn: function(t, e, i, n) {
                return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
            },
            sineOut: function(t, e, i, n) {
                return i * Math.sin(t / n * (Math.PI / 2)) + e
            },
            sineInOut: function(t, e, i, n) {
                return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
            }
        }, i.exports = n
    }), require.register("lib/element.coffee", function(t, e, i) {
        var n, o, s, r;
        n = e("lib/prefix"), o = function(t, e) {
            var i, n, o, s, r, l, a;
            return null == e && (e = {
                x: 0,
                y: 0
            }), a = t.getBoundingClientRect(), r = a.top, o = a.left, s = a.right, i = a.bottom, l = a.width, n = a.height, {
                top: r + e.y,
                left: o + e.x,
                right: s + e.x,
                bottom: i + e.y,
                width: l,
                height: n
            }
        }, s = function(t, e) {
            var i, o, s, l, a, c, d;
            if (null == t) return console.error("No element to style");
            if (_.isObject(e)) {
                if (a = e.x, c = e.y, d = e.z, s = e.scale, l = e.skew, o = e.rotate, i = e.opacity, null == a && (a = 0), null == c && (c = 0), null == d && (d = 0), null == l && (l = 0), null == s && (s = 1), null == o && (o = 0), "number" == typeof a && (a += "px"), "number" == typeof c && (c += "px"), "number" == typeof l && (l += "deg"), "number" == typeof o && (o += "deg"), t.style[n("transform")] = "translate3d(" + a + ", " + c + ", 0)\nskew(" + l + ")\nscale(" + s + ")\nrotate(" + o + ")", null != i && (t.style.opacity = i), null != e.transition) return r(t, e.transition)
            } else if (_.isString(e)) return t.style[n("transform")] = e
        }, r = function(t, e, i) {
            return null == t ? console.error("No element to style") : (t.style[n("transition")] = e, i ? t.offsetLeft : void 0)
        }, i.exports = {
            getBounds: o,
            transform: s,
            transition: r
        }
    }), require.register("lib/logger.coffee", function(t, e, i) {
        var n, o = [].slice;
        n = function() {
            function t() {
                var t, e, i, n, s;
                return i = arguments[0], n = arguments[1], e = arguments[2], t = 4 <= arguments.length ? o.call(arguments, 3) : [], null == i && (i = !1), null == n && (n = ""), null == e && (e = "#333"), i && ("undefined" != typeof console && null !== console && null != (s = console.log) && "function" == typeof s.bind ? s.bind.apply(s, [console, "%c %c" + n + "%c →", "background: " + e + ";       border-radius: 10px;       padding-left: 5px;       font-size: xx-small;       margin-right: 5px;", "color: #333;       font-weight: bold;", ""].concat(o.call(t))) : void 0) || function() {}
            }
            return t
        }(), i.exports = n
    }), require.register("lib/middleware.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p, h, f, m, v = [].slice;
        c = function(t) {
            return function(e) {
                var i, n, o, s;
                if (0 !== t.length) return n = t[0], s = t.slice(1, t.length), o = c(s), i = n.process || d(n.type, n.commands), null != e ? i(e, o) : void 0
            }
        }, d = function(t, e) {
            return function(i, n) {
                var o, s, r, l;
                return l = i.type, o = i.command, r = i.params, l === t ? (s = e(n)[o], n(null != s ? s.apply(null, r) : {
                    type: l,
                    command: o,
                    params: r
                })) : n({
                    type: l,
                    command: o,
                    params: r
                })
            }
        }, f = function(t, e, i) {
            var n, o, s;
            return o = document.createElement("IFRAME"), n = e(t, i), s = "gap-code://" + escape(unescape(encodeURIComponent(n))), o.setAttribute("src", s), document.documentElement.appendChild(o), o.parentNode.removeChild(o), o = null
        }, h = [], u = function(t) {
            var i, n, o, s, r, l;
            for (n = [], r = 0, l = t.length; r < l; r++) {
                s = t[r];
                try {
                    o = e(s), n.push(o)
                } catch (a) {
                    i = a, console.error("Error while requiring " + s, i)
                }
            }
            return h = n, Backbone.Events.on("publish", c(h))
        }, m = function(t, e, i) {
            return null == i && (i = "publish"),
                function() {
                    var n, o;
                    return o = 1 <= arguments.length ? v.call(arguments, 0) : [], n = i, "subscribe" === i && (n += ":" + t + ":" + e), Backbone.Events.trigger(n, {
                        type: t,
                        command: e,
                        params: o
                    })
                }
        }, a = {}, s = function(t, e) {
            var i, n, o, s, r, l, c;
            for (a = {}, c = [], r = 0, l = t.length; r < l; r++) n = t[r], null != n.type ? (o = n.type[0].toUpperCase() + n.type.slice(1), a[o] = {}, null != n.commands ? c.push(function() {
                var t, e;
                t = n.commands(), e = [];
                for (i in t) s = t[i], e.push(a[o][i] = m(n.type, i));
                return e
            }()) : c.push(void 0)) : c.push(void 0);
            return c
        }, p = function(t, i) {
            var n, o, r;
            return n = _.flatten(function() {
                var e;
                e = [];
                for (r in t) o = t[r], e.push(o);
                return e
            }()), s(n.map(e)), _.isString(i) ? u(t[i]) : _.isArray(i) ? u(i) : void 0
        }, o = function(t) {
            return null != t ? null != a ? a[t] : void 0 : a
        }, n = function(t) {
            return null == t && (t = "publish"),
                function(e) {
                    var i, n, o;
                    return o = e.split(/\:/), n = o[0], i = o[1], m(n, i, t)
                }
        }, l = {
            fit: ["lib/middleware/fit/analytics", "lib/middleware/fit/session", "lib/middleware/fit/sound", "lib/middleware/fit/backbone_event", "lib/middleware/fit/cdv_plugin"],
            browser: ["lib/middleware/session", "lib/middleware/ed/web_analytics", "lib/middleware/ed/web_lesson", "lib/middleware/browser/sound", "lib/middleware/browser/backbone_event", "lib/middleware/browser/webview"],
            app: ["lib/middleware/session", "lib/middleware/ed/analytics", "lib/middleware/ed/app_lesson", "lib/middleware/fit/sound", "lib/middleware/fit/backbone_event", "lib/middleware/fit/cdv_plugin", "lib/middleware/ed/webview"],
            scorm: ["lib/middleware/session", "lib/middleware/ed/scorm_analytics", "lib/middleware/ed/scorm_lesson", "lib/middleware/browser/sound", "lib/middleware/browser/backbone_event", "lib/middleware/browser/webview"]
        }, r = function(t) {
            var e;
            return null == t && (t = (null != (e = window.__) ? e.platform : void 0) || "browser"), _.isArray(t) && t.indexOf("lib/middleware/ed/analytics") > -1 && (t = "app"), p(l, t)
        }, i.exports = {
            process: c,
            run: f,
            initialize: r,
            actions: o,
            action: n(),
            publish: n("publish"),
            subscribe: n("subscribe")
        }
    }), require.register("lib/middleware/browser/backbone_event.coffee", function(t, e, i) {
        var n, o;
        o = function(t, e) {
            var i, n;
            return i = t.command, null != (n = window.parent) && "function" == typeof n.postMessage ? n.postMessage("Thomas:" + i, "*") : void 0
        }, n = function(t, e) {
            return "event" === (null != t ? t.type : void 0) ? o(t, null) : e(t)
        }, i.exports = {
            process: n,
            type: "backbone_event"
        }
    }), require.register("lib/middleware/browser/sound.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p, h, f, m, v, g;
        f = {}, n = {}, g = {}, r = !0, d = function(t) {
            return t = t.replace("system:", "/audio/"), t.match(/\.[^\.]+$/) ? t : "" + t + ".mp3"
        }, c = function(t, e) {
            return null == e && (e = f), e[t] ? e[t] : t.match("system:") ? r ? e[t] = new Audio(d(t)) : void 0 : e[t] = new Audio(d(t))
        }, h = function(t, e, i) {
            return null == i && (i = function() {}), c(t), i()
        }, p = function(t, e) {
            var i, n, o, s, r, l;
            return null == e && (e = function() {}), r = c(t), window.clearTimeout(g[t]), null != r && (i = $(r).off(), _.isFunction(e) || (l = e, o = l.onProgress, n = l.onComplete, e = l.cb, s = function() {
                return o(r.currentTime / r.duration)
            }, i.on("ended", n), i.on("timeupdate", s)), r.currentTime = 0, r.play()), e({
                name: t
            })
        }, u = function(t, e) {
            var i, o, s, r, l;
            if (null == e && (e = function() {}), null == n[t] && (n[t] = new Audio(d(t))), r = c(t), null != r) {
                if (i = c(t, n), o = r, s = 1e3 * o.duration, !(s > 0)) return;
                window.clearTimeout(g[t]), (l = function() {
                    return o.currentTime = 0, o.play(), o = o === r ? i : r, g[t] = window.setTimeout(l, s)
                })()
            }
            return e()
        }, m = function(t, e) {
            var i, o;
            return null == e && (e = function() {}), window.clearTimeout(g[t]), null != (i = c(t)) && i.pause(), null != (o = c(t, n)) && o.pause(), e()
        }, l = function(t, e, i) {
            var o, s, r;
            if (null == e && (e = 2e3), null == i && (i = .05), r = c(t), o = c(t, n), null != r) return u(t), o.volume = r.volume = 0, (s = function() {
                if (o.volume = r.volume = Math.min(r.volume + i, 1), r.volume < 1) return window.setTimeout(s, e / (1 / i))
            })()
        }, a = function(t, e, i) {
            var o, s, r;
            if (null == e && (e = 2e3), null == i && (i = .05), r = c(t), o = c(t, n), null != r) return (s = function() {
                return o.volume = r.volume = Math.max(r.volume - i, 0), r.volume > 0 ? window.setTimeout(s, e / (1 / i)) : (m(t), o.volume = r.volume = 1)
            })()
        }, v = function() {
            var t, e, i;
            i = [];
            for (t in f) e = f[t], i.push(e.pause());
            return i
        }, s = function() {
            return r = !1
        }, o = function(t) {
            return {
                preload: h,
                stop: m,
                play: p,
                stopAll: v,
                fadeIn: l,
                fadeOut: a,
                disableSystemSounds: s,
                loop: u,
                stopId: m,
                playId: p,
                loopId: u
            }
        }, i.exports = {
            type: "sound",
            commands: o
        }
    }), require.register("lib/middleware/browser/webview.coffee", function(t, e, i) {
        var n;
        n = function(t, e) {
            var i, n, o;
            return "url" === (null != t ? t.type : void 0) ? (o = t.params[0], i = o.target, n = o.url, 0 !== n.indexOf("http") && 0 !== n.indexOf("#") && (n = "http://" + n), window.open(n, i)) : e(t)
        }, i.exports = {
            process: n,
            type: "url"
        }
    }), require.register("lib/middleware/ed/analytics.coffee", function(t, e, i) {
        var n, o, s, r, l, a;
        a = function(t, e) {
            return Application.publish("event:view")(t)
        }, l = function(t) {
            return Application.publish("event:interaction")(t)
        }, r = function() {}, o = function() {}, s = function() {}, n = function(t) {
            return {
                trackInteraction: l,
                trackView: a,
                startTracking: o,
                stopTracking: s,
                trackEvent: r
            }
        }, i.exports = {
            type: "analytics",
            commands: n
        }
    }), require.register("lib/middleware/ed/app_lesson.coffee", function(t, e, i) {
        var n, o, s;
        o = function(t, e) {
            return Application.publish("event:completed")({})
        }, s = function() {}, n = function(t) {
            return {
                complete: o,
                open: s
            }
        }, i.exports = {
            type: "lesson",
            commands: n
        }
    }), require.register("lib/middleware/ed/scorm_analytics.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p;
        o = [], s = {}, a = function(t, e) {
            null == e && (e = function() {})
        }, p = function(t, e) {
            null == e && (e = function() {})
        }, d = function(t, e) {
            var i, n, r, l;
            if (null == e && (e = function() {}), o.push(t), null != t && null != (l = t.configuration) ? l.nb_stars : void 0) return n = t.name, r = t.configuration.nb_stars, i = t.game ? t.nb_stars_earned : t.correct ? r : 0, s[n] = {
                earned: i,
                total: r
            }
        }, u = function(t) {
            var e, i, n, o;
            return null == t && (t = 80), n = Object.values(s), e = n.reduce(function(t, e) {
                return t + e.earned
            }, 0), o = n.reduce(function(t, e) {
                return t + e.total
            }, 0), i = 100 * e / o, pipwerks.SCORM.set("cmi.core.score.raw", e), pipwerks.SCORM.set("cmi.core.score.min", 0), pipwerks.SCORM.set("cmi.core.score.max", o), pipwerks.SCORM.set("cmi.core.lesson_status", "completed"), i >= t ? pipwerks.SCORM.set("cmi.core.lesson_status", "passed") : pipwerks.SCORM.set("cmi.core.lesson_status", "failed")
        }, c = function() {}, r = function() {}, l = function() {}, n = function(t) {
            return {
                trackInteraction: d,
                trackView: p,
                startTracking: r,
                stopTracking: l,
                trackEvent: c,
                trackScoreAndCompletion: u
            }
        }, i.exports = {
            type: "analytics",
            commands: n
        }
    }), require.register("lib/middleware/ed/scorm_lesson.coffee", function(t, e, i) {
        var n, o, s, r, l;
        l = null, s = function() {
            return l = Date.now(), pipwerks.SCORM.init()
        }, r = function(t, e) {
            var i, n, o;
            return null == t && (t = ""), n = "", o = t.toString().length,
                o >= e ? t : (i = e - o + 1, new Array(i).join("0").substr(0, e - o) + t)
        }, o = function() {
            var t, e, i, n, o, s;
            return e = Date.now(), s = Math.floor((e - l) / 1e3), i = Math.floor(s / 3600), n = Math.floor((s - 3600 * i) / 60), o = s - 3600 * i + 60 * n, s = [r(i, 4), r(n, 2), r(o, 2)].join(":"), t = Application.actions("Analytics"), t.trackScoreAndCompletion(), pipwerks.SCORM.set("cmi.core.session_time", s), pipwerks.SCORM.quit()
        }, n = function(t) {
            return {
                complete: o,
                open: s
            }
        }, i.exports = {
            type: "lesson",
            commands: n
        }
    }), require.register("lib/middleware/ed/web_analytics.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d;
        n = e("../../cookies"), l = function(t, e) {
            var i;
            return null == e && (e = function() {}), i = n.read(), i.tracking ? $.ajax({
                type: "POST",
                url: "/tracking",
                data: {
                    event: t
                }
            }) : e()
        }, d = function(t, e) {
            var i, o;
            return null == e && (e = function() {}), i = {
                type: "view"
            }, o = t, o.name = (parseInt(o.name, 10) + 1).toString(), o = _.extend(o, i, n.read()), o.timestamp = Date.now(), l(o, e)
        }, c = function(t, e) {
            var i, o;
            return null == e && (e = function() {}), i = {
                type: "slide"
            }, o = _.extend(t, i, n.read()), o.timestamp = Date.now(), l(o, e)
        }, a = function() {}, s = function() {}, r = function() {}, o = function(t) {
            return {
                trackInteraction: c,
                trackView: d,
                startTracking: s,
                stopTracking: r,
                trackEvent: a
            }
        }, i.exports = {
            type: "analytics",
            commands: o
        }
    }), require.register("lib/middleware/ed/web_lesson.coffee", function(t, e, i) {
        var n, o, s, r, l;
        n = e("../../cookies"), r = function(t) {
            return function() {
                var e, i;
                if (e = n.read(), e.tracking) return i = e.lesson_id, $.ajax({
                    type: "POST",
                    url: "/events/lesson/" + t + "/" + i
                })
            }
        }, l = function() {
            return r("unlocked")(), r("opened")()
        }, s = r("completed"), o = function(t) {
            return {
                complete: s,
                open: l
            }
        }, i.exports = {
            type: "lesson",
            commands: o
        }
    }), require.register("lib/middleware/ed/webview.coffee", function(t, e, i) {
        var n, o, s, r, l;
        o = e("lib/middleware"), n = !0, s = function(t, e) {
            var i, n, o, s;
            return s = t.params[0], o = s.url, n = s.target, o.indexOf("//") === -1 && (o = "http://" + o), i = 'window.open("' + o + '", "' + n + '")'
        }, l = function(t, e) {
            return o.run(t, s, e)
        }, r = function(t, e) {
            return "url" === (null != t ? t.type : void 0) ? l(t, null) : e(t)
        }, i.exports = {
            process: r,
            type: "url"
        }
    }), require.register("lib/middleware/fit/analytics.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p, h;
        n = {
            ANDROID_APP_UID: "AppUID",
            ANONYMIZE_IP: "&aip",
            APP_ID: "&aid",
            APP_INSTALLER_ID: "&aiid",
            APP_NAME: "&an",
            APP_VERSION: "&av",
            CAMPAIGN_CONTENT: "&cc",
            CAMPAIGN_ID: "&ci",
            CAMPAIGN_KEYWORD: "&ck",
            CAMPAIGN_MEDIUM: "&cm",
            CAMPAIGN_NAME: "&cn",
            CAMPAIGN_SOURCE: "&cs",
            CLIENT_ID: "&cid",
            CURRENCY_CODE: "&cu",
            DESCRIPTION: "&cd",
            ENCODING: "&de",
            EVENT_ACTION: "&ea",
            EVENT_CATEGORY: "&ec",
            EVENT_LABEL: "&el",
            EVENT_VALUE: "&ev",
            EX_DESCRIPTION: "&exd",
            EX_FATAL: "&exf",
            FLASH_VERSION: "&fl",
            HIT_TYPE: "&t",
            HOSTNAME: "&dh",
            ITEM_CATEGORY: "&iv",
            ITEM_NAME: "&in",
            ITEM_PRICE: "&ip",
            ITEM_QUANTITY: "&iq",
            ITEM_SKU: "&ic",
            JAVA_ENABLED: "&je",
            LANGUAGE: "&ul",
            LOCATION: "&dl",
            NON_INTERACTION: "&ni",
            PAGE: "&dp",
            REFERRER: "&dr",
            SAMPLE_RATE: "&sf",
            SCREEN_COLORS: "&sd",
            SCREEN_NAME: "&cd",
            SCREEN_RESOLUTION: "&sr",
            SESSION_CONTROL: "&sc",
            SOCIAL_ACTION: "&sa",
            SOCIAL_NETWORK: "&sn",
            SOCIAL_TARGET: "&st",
            TIMING_CATEGORY: "&utc",
            TIMING_LABEL: "&utl",
            TIMING_VALUE: "&utt",
            TIMING_VAR: "&utv",
            TITLE: "&dt",
            TRACKING_ID: "&tid",
            TRANSACTION_AFFILIATION: "&ta",
            TRANSACTION_ID: "&ti",
            TRANSACTION_REVENUE: "&tr",
            TRANSACTION_SHIPPING: "&ts",
            TRANSACTION_TAX: "&tt",
            USE_SECURE: "useSecure",
            VIEWPORT_SIZE: "&vp"
        }, o = function(t, e, i) {
            return {
                type: "command",
                command: {
                    plugin: "navigator.analytics",
                    method: t,
                    parameters: e,
                    callback: i
                }
            }
        }, h = function(t) {
            return o("close", [], t)
        }, u = function(t) {
            return function(e) {
                return t(o("setTrackingId", [e]))
            }
        }, r = function(t, e, i) {
            return o("customDimension", [t, e], i)
        }, a = function(t, e) {
            var i, s, r;
            return (null != (s = window.__) ? s.needs_start_session : void 0) ? (i = {}, i[n.SESSION_CONTROL] = "start", null != (r = window.__) && (r.needs_start_session = !1), o("sendAppViewWithParams", [t, i], e)) : o("sendAppView", [t], e)
        }, c = function(t, e, i, n, s) {
            var r, l;
            return _.isBoolean(i) && (i = i ? "1" : "0"), null != i ? i = i.toString() : null != n && (i = n.toString()), null == n && (n = _.isNaN(+i) ? 1 : +i), r = [], _.isString(t) || r.push("`category` is not a string"), _.isString(e) || r.push("`action` is not a string"), _.isString(i) || r.push("`label` is not a string"), _.isNumber(n) || r.push("`value` is not a number"), r.length > 0 ? (l = "Tracking Event Error", console.groupCollapsed(l), console.log({
                category: t,
                action: e,
                label: i,
                value: n
            }), console.log(r.join(", ")), console.log('Examples:\n  @trackEvent\n    category: "Game Name"\n    action: "Score|Record"\n    label: "99999"\n    value: 99999\n\n  @trackEvent\n    category: "Accuracy"\n    action: "Select our brands"\n    label: "Brand 1"\n    value: 0 or 1   # (incorrect or correct)\n\n  @trackEvent\n    category: "Feedback"\n    action: "How do you rate your experience with this tool?"\n    label: "0 - 10"\n    value: 0 - 10\n\n  @trackEvent\n    category: "Insight"\n    action: "Order these products by..."\n    label: "Product 1"\n    value: 0 - length\n\n  @trackEvent\n    category: "Video"\n    action: "Play|Pause"\n    label: "Video Name"'), console.groupEnd(l), void 0) : o("sendEvent", [t, e, i, n], s)
        }, d = function(t) {
            return function() {
                var e, i, n, o, s, l, a;
                if (null != (null != (s = window.__) ? s.ga_dimensions : void 0)) {
                    for (l = window.__.ga_dimensions, a = [], i = n = 0, o = l.length; n < o; i = ++n) e = l[i], a.push(t(r(i + 1, e)));
                    return a
                }
            }
        }, l = function(t) {
            return o("dispatch", [], t)
        }, p = function(t) {
            return function() {
                var e, i, n;
                return e = (null != (i = window.__) ? i.trackingid : void 0) || "UA-62342164-1", null != (n = window.__) && (n.needs_start_session = !0), u(t)(e), d(t)()
            }
        }, s = function(t) {
            return {
                startTracking: p(t),
                dispatch: l,
                setAllDimensions: d(t),
                trackView: a,
                customDimension: r,
                setDimension: r,
                trackEvent: c,
                stopTracking: h
            }
        }, i.exports = {
            type: "analytics",
            commands: s
        }
    }), require.register("lib/middleware/fit/backbone_event.coffee", function(t, e, i) {
        var n, o, s, r, l;
        s = e("lib/middleware"), n = !0, o = function(t, e) {
            var i, o, s, r, l, a, c;
            return r = t.type, i = t.command, s = t.params, o = "Backbone.Events.trigger(", o += null != (null != (l = window.__) && null != (a = l.slidedeck) ? a.id : void 0) ? "'slidedeck:" + window.__.slidedeck.id + (":" + i + "'") : null != (null != (c = window.__) ? c.challenge : void 0) ? "'challenge:" + i + "'" : "'" + i + "'", _.isArray(s) && s.length > 0 && (o += ", " + JSON.stringify(s[0])), o += ");", n && console.log("BACKBONE", o), o
        }, l = function(t, e) {
            return s.run(t, o, e)
        }, r = function(t, e) {
            return "event" === (null != t ? t.type : void 0) ? l(t, null) : e(t)
        }, i.exports = {
            process: r,
            type: "backbone_event"
        }
    }), require.register("lib/middleware/fit/cdv_plugin.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p;
        r = e("lib/middleware"), n = !1, null == window.__ && (window.__ = {}), window.__.callbacks = {}, o = function() {
            var t;
            return t = 0,
                function() {
                    return ++t
                }
        }, a = function(t) {
            return "string" == typeof t ? '"' + t + '"' : JSON.stringify(t)
        }, s = function(t, e) {
            var i, o, s, r, l, c, d;
            return d = t.type, i = t.command, r = t.params, o = i.plugin + "." + i.method + "(", o += i.parameters.map(a).join(", "), null != i.callback && (c = p(i.callback, !0, e), s = p(i.callback, !1, e), l = 0 === i.parameters.length ? "" : ",", null != i.callback && (o += l + c + ", " + s)), o += ")", n && console.log("CDV PLUGIN ->", o), o
        }, c = function(t, e) {
            return r.run(t, s, e)
        }, d = function(t) {
            return "function(data) {    var str_data = JSON.stringify(data);    return window.IAB.executeScript({      code: 'window.__.callbacks[" + t + "](' + str_data + ')'    });  }"
        }, u = function(t) {
            try {
                t = JSON.parse(t)
            } catch (e) {}
            return t
        }, p = function(t, e, i) {
            var n;
            return null == e && (e = !0), n = i(),
                function(t, i) {
                    return __.callbacks[t] = function(t) {
                        return t = u(t), e ? i(null, t) : i(t, null)
                    }
                }(n, t), d(n)
        }, l = function(t) {
            return function(e, i) {
                return "command" === (null != e ? e.type : void 0) ? c(e, t) : i(e)
            }
        }, i.exports = {
            process: l(o()),
            type: "cdv_plugin"
        }
    }), require.register("lib/middleware/fit/session.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p, h, f, m, v, g, y, b, x, w, _, k, T, E, S, j, q = [].slice;
        n = null, o = null, S = {}, l = function(t) {
            return function(e, i) {
                return {
                    type: "command",
                    command: {
                        plugin: "session",
                        method: t,
                        parameters: e,
                        callback: i
                    }
                }
            }
        }, r = function(t) {
            return function() {
                var e;
                return e = 1 <= arguments.length ? q.call(arguments, 0) : [], {
                    type: "event",
                    command: t,
                    params: e
                }
            }
        }, j = function(t) {
            return t = null == window.__.slidedeck || "demo" === window.__.retailer.retailer ? "demo:" + t : [window.__.slidedeck.id, window.__.retailer.retailer, window.__.retailer.fullname, t].join(":")
        }, h = function(t) {
            return function(e) {
                var i, n, o, s, r;
                return n = e.category, i = e.action, s = e.label, r = e.value, null != window.__.slidedeck && "demo" !== window.__.retailer.retailer || (t = !1), o = j("" + n + ":" + i + ":" + s), t ? null != localStorage.getItem(o) : null != S[o]
            }
        }, m = function(t) {
            return function(e) {
                var i, n, o, s, r;
                return n = e.category, i = e.action, s = e.label, r = e.value, o = j("" + n + ":" + i + ":" + s), t ? localStorage.setItem(o, r) : S[o] = r
            }
        }, k = function(t) {
            return function() {
                var e;
                if (e = 1 <= arguments.length ? q.call(arguments, 0) : [], !h(t).apply(null, e)) return y.apply(null, e), m(t).apply(null, e)
            }
        }, y = function(t) {
            var e, i, o, s;
            return i = t.category, e = t.action, o = t.label, s = t.value, console.log("category", i), console.log("action", e), console.log("label", o), console.log("value", s), n.trackEvent(i, e, o, s)
        }, u = function(t, e) {
            return l("getScore")([t], e)
        }, w = function(t, e, i, n) {
            return null == n && (n = 0), k(!0)({
                category: t,
                action: e,
                label: i,
                value: n
            })
        }, _ = function(t, e, i) {
            return null == i && (i = 0), k(!0)({
                category: "Insight",
                action: t,
                label: e,
                value: i
            })
        }, b = function(t, e, i) {
            return null == i && (i = 0), k(!0)({
                category: "Feedback",
                action: t,
                label: e,
                value: i
            })
        }, T = function(t) {
            return function(e, i) {
                return null == i && (i = !1),
                    function(n, o, s) {
                        var r, l, a, c, d, u, p, f, m, v, g;
                        if (null == s && (s = []), !h(t)({
                                category: e,
                                action: n,
                                label: "Group"
                            })) {
                            if (i) {
                                for (v = [], a = c = 0, p = o.length; c < p; a = ++c) r = o[a], v.push(y({
                                    category: e,
                                    action: n,
                                    label: r,
                                    value: a + 1
                                }));
                                return v
                            }
                            for (d = 0, f = o.length; d < f; d++) r = o[d], y({
                                category: e,
                                action: n,
                                label: r,
                                value: 1
                            });
                            for (g = [], u = 0, m = s.length; u < m; u++) l = s[u], g.push(y({
                                category: e,
                                action: n,
                                label: l,
                                value: 0
                            }));
                            return g
                        }
                    }
            }
        }, x = function(t, e, i) {
            var n, o;
            return n = j(t), o = localStorage.getItem(n), null == o && (o = 1), y({
                category: t,
                action: "Game responses & Accuracy Round " + o,
                label: e,
                value: i
            })
        }, s = function(t) {
            return function(e, i) {
                var n, o, s;
                return n = j(e), o = localStorage.getItem(n), null == o && (o = 1), y({
                    category: e,
                    action: "No. of plays & Indv. scores  " + o,
                    label: i,
                    value: i
                }), s = {
                    outlet: window.__.retailer.retailername,
                    outlet_id: window.__.retailer.retailer,
                    rep: window.__.user.name,
                    rep_id: window.__.user.id,
                    fullname: window.__.retailer.fullname,
                    score: i,
                    game: e,
                    group: window.__.slidedeck.id,
                    leaderboard_group: window.__.retailer.leaderboard_group,
                    module: window.__.slidedeck.id,
                    gamename: e
                }, o++, localStorage.setItem(n, o), l("insertScore")([s, t])
            }
        }, p = function(t) {
            return t(null, {
                user: window.__.user,
                retailer: window.__.retailer
            })
        }, c = function(t) {
            return function() {
                return n.stopTracking(function() {
                    return t(r("endcall")())
                })
            }
        }, f = function() {
            var t;
            return n = Application.actions("Analytics"), t = Application.actions("Scores"), n.startTracking()
        }, g = m(!0), v = m(!1), E = function(t, e) {
            var i, n;
            return e ? (n = 1, i = "Yes") : (n = 0, i = "No"), _(t, i, n)
        }, d = function(t) {
            return l("getLeaderboards")([], t)
        }, a = function(t) {
            return {
                addUniqueScore: s(!1),
                addScore: s(!0),
                trackFeedback: b,
                trackGameAnswer: w,
                trackInsight: _,
                trackFeedbackSet: T(!0)("Feedback"),
                trackInsightOrderedSet: T(!0)("Insight", !0),
                trackYesNoInsight: E,
                trackGameAccuracy: x,
                getLeaderboard: d,
                getScore: u,
                exit: c(t),
                getUser: p,
                init: f,
                endCall: r("endcall")
            }
        }, i.exports = {
            type: "session",
            commands: a
        }
    }), require.register("lib/middleware/fit/sound.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c;
        o = function(t, e, i) {
            return {
                type: "command",
                command: {
                    plugin: "window.plugins.LowLatencyAudio",
                    method: t,
                    parameters: e,
                    callback: i
                }
            }
        }, c = {}, r = function(t) {
            var e, i, n;
            return n = /^system\:/, e = t.match(/\.[^\.]+$/) ? t : "" + t + ".mp3", i = e.match(n) ? (e = e.replace(n, ""), "" + (window.__.systemSoundsFolder || "") + e) : "" + (window.__.dirname || "") + e
        }, n = function(t, e) {
            return o("loop", [t], e)
        }, l = function(t, e) {
            var i, n, s, r;
            return null == e && (e = function() {}), _.isFunction(e) ? o("play", [t], e) : (r = e.onProgress, s = e.onComplete, n = e.cb, i = function(t, e) {
                if ("PLAY FINISHED" === e && s(), _.isNumber(e)) return r(e / 100)
            }, o("play", [t], i))
        }, a = function(t, e, i) {
            return null == i && (i = function() {}), c[e] ? i() : (c[e] = t, o("preloadAudio", [e, t, 1, 1], i))
        }, s = function(t) {
            return {
                preload: function(t, e) {
                    return a(r(t), t, e)
                },
                playId: function(t, e) {
                    return l(t, e)
                },
                play: function(e, i) {
                    var n;
                    return n = r(e), a(n, e, function() {
                        return t(l(e, i))
                    })
                },
                loopId: function(t, e) {
                    return n(t, e)
                },
                loop: function(e, i) {
                    var o;
                    return o = r(e), a(o, e, function() {
                        return t(n(e, i))
                    })
                },
                stop: function(t, e) {
                    return o("stop", [t], e)
                },
                stopId: function(t, e) {
                    return o("stop", [t], e)
                },
                fadeIn: function(e, i, n) {
                    var s;
                    return null == i && (i = 2e3), null == n && (n = .05), s = r(e), a(s, e, function() {
                        return t(o("fadeIn", [e, i, n]))
                    })
                },
                fadeOut: function(e, i, n) {
                    var s;
                    return null == i && (i = 2e3), null == n && (n = .05), s = r(e), a(s, e, function() {
                        return t(o("fadeOut", [e, i, n]))
                    })
                },
                stopAll: function() {
                    var t, e, i;
                    i = [];
                    for (t in c) e = c[t], i.push(o("stop", [t], function() {}));
                    return i
                }
            }
        }, i.exports = {
            type: "sound",
            commands: s
        }
    }), require.register("lib/middleware/session.coffee", function(t, e, i) {
        var n, o;
        o = function(t) {
            return t(null, null != ("undefined" != typeof __ && null !== __ ? __.slidedeck : void 0) ? __.slidedeck : {})
        }, n = function(t) {
            return {
                get: o
            }
        }, i.exports = {
            type: "session",
            commands: n
        }
    }), require.register("lib/prefix.coffee", function(t, e, i) {
        var n, o, s;
        o = document.createElement("div").style, n = function() {
            function t() {}
            return t.prototype.vendorPrefixes = {}, t.prototype._getVendorPrefixFor = function(t) {
                var e, i, n, s, r, l, a;
                for (n = t.substr(0, 1), e = n.toUpperCase(), a = [n, "webkit" + e, "Moz" + e, "ms" + e, "O" + e], r = 0, l = a.length; r < l; r++)
                    if (s = a[r], i = s + t.substr(1), i in o) return s.substr(0, s.length - 1);
                return !1
            }, t.prototype._camelCase = function(t) {
                return t.replace(/\-(\w)/gi, function(t, e) {
                    return e.toUpperCase()
                })
            }, t.prototype.prefix = function(t) {
                var e, i;
                return t = this._camelCase(t), e = this._getVendorPrefixFor(t), "" === e ? t : !!e && (null != (i = this.vendorPrefixes)[t] ? (i = this.vendorPrefixes)[t] : i[t] = e + t.charAt(0).toUpperCase() + t.substr(1))
            }, t
        }(), s = new n, i.exports = function(t) {
            return s.prefix(t)
        }
    }), require.register("lib/preload.coffee", function(t, e, i) {
        var n, o;
        n = new(e("lib/logger"))((!0), "PRELOADER", "#2FA8E3"), o = {
            load: function(t, e, i, o) {
                var s, r, l, a, c, d, u, p, h, f, m, v;
                if (null == t && (t = []), null == i && (i = 4), null == o && (o = 3e3), 0 === t.length) return "function" == typeof e ? e() : void 0;
                r = 0, l = [], s = !1, h = Date.now(), m = t.length, u = function() {
                    var t, e;
                    for (e = [], c = t = 0; 0 <= i ? t < i : t > i; c = 0 <= i ? ++t : --t) e.push(new Image);
                    return e
                }(), a = _.groupBy(t, function(t, e, n) {
                    return Math.floor(e / n.length * i)
                }), n("loading " + t.length + " image(s)"), p = function() {
                    var t, i, o, a;
                    for (window.clearTimeout(f), s = !0, t = Date.now() - h, "function" == typeof e && e(l), n("loaded " + r + "/" + m + " image(s) in " + t + "ms"), o = 0, a = u.length; o < a; o++) i = u[o], i.onload = null, i.onerror = null, "function" == typeof i.remove && i.remove();
                    return u = null
                }, v = function(e, i) {
                    var o, a, c, d;
                    return o = u[i], d = function(i, n) {
                        if (n || r++, r === t.length && p(), e.length > 0 && !s) return a()
                    }, c = function(t) {
                        return l.push(t.getAttribute("src")), n("✕ error loading " + t.getAttribute("src")), d(t, !0)
                    }, a = function() {
                        return o.src = e.shift()
                    }, o.onload = function() {
                        return d(this)
                    }, o.onerror = function() {
                        return c(this)
                    }, a()
                };
                for (c in a) d = a[c], v(d, c);
                return f = window.setTimeout(function() {
                    return p()
                }, o)
            },
            loadFromStylesheets: function() {
                var t, e, i, n, o, s;
                for (t = [], e = /(file|http)\:([^\)]+)(png|gif|jpeg|jpg)/, s = document.styleSheets, n = 0, o = s.length; n < o; n++) i = s[n], null != i.cssRules && (t = t.concat(Array.prototype.slice.call(i.cssRules).map(function(t) {
                    var i;
                    return null != (i = t.cssText.match(e)) ? i[0] : void 0
                }).filter(function(t, e, i) {
                    return t && i.indexOf(t) === e
                })));
                return this.load(t)
            }
        }, i.exports = o
    }), require.register("lib/router.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("views/main"), n = function(t) {
            function e() {
                return s = e.__super__.constructor.apply(this, arguments)
            }
            return l(e, t), e.prototype.initialize = function() {
                return this.mainView = new o({
                    el: "body"
                })
            }, e.prototype.routes = {
                "slide(/:index)(?:query)": "slide",
                "*default": "default"
            }, e.prototype["default"] = function() {
                return this.navigate("slide/1", !0)
            }, e.prototype.slide = function(t, e) {
                var i, n, o, s, r, l, a, c;
                for (null == e && (e = ""), o = {}, a = e.split("&"), r = 0, l = a.length; r < l; r++) n = a[r], n && (c = n.split("="), i = c[0], s = c[1], o[i] = function() {
                    try {
                        return JSON.parse(s)
                    } catch (t) {
                        s = t
                    }
                }());
                return this.mainView.display("slides", _.extend(o, {
                    index: t
                }))
            }, e
        }(Backbone.Router), i.exports = n
    }), require.register("lib/touch.coffee", function(t, e, i) {
        i.exports = {
            initialize: function() {
                var t, e, i, n, o, s, r, l, a, c, d, u, p, h, f, m, v, g, y, b, x;
                if (v = null, n = "ontouchstart" in window, x = n ? "touchstart" : "mousedown", b = n ? "touchmove" : "mousemove", y = n ? "touchend" : "mouseup", t = "__active", s = 50, r = !1, f = null, i = 20, o = Math.pow(window.innerHeight * window.innerWidth, .35), p = function(t) {
                        return "tagName" in t ? t : t.parentNode
                    }, u = function(t) {
                        var e, i, n;
                        for (e = t; e.parentNode && !(null != (i = e.dataset) ? i.touch : void 0);) e = e.parentNode;
                        return (null != e && null != (n = e.dataset) ? n.touch : void 0) ? e : t
                    }, h = function(t) {
                        var e;
                        for (e = !1; t.parentNode && n && !(e = e || t.scrollHeight > t.offsetHeight);) t = t.parentNode;
                        return e && t
                    }, m = function(e) {
                        var i, n, o, s, r, l;
                        if (e) {
                            for (i = v.el, r = []; i.parentNode && (i.classList.add(t), !i.dataset.nobubble);) r.push(i = i.parentNode);
                            return r
                        }
                        for (s = document.querySelectorAll("." + t), l = [], n = 0, o = s.length; n < o; n++) i = s[n], l.push(i.classList.remove(t));
                        return l
                    }, d = function(t) {
                        var i;
                        if (!v) return window.clearTimeout(f), i = p(t.target), i = u(i), v = {
                            el: i,
                            offset: i.getBoundingClientRect(),
                            scrollParent: h(i)
                        }, c(t), e(b, c, !1), e(y, a, !1)
                    }, c = function(t) {
                        var e, s, a, c, d, u, p, h, f, g, y, b;
                        if (v) return f = n ? t.touches[0] : t, e = f.clientX, s = f.clientY, g = v.offset, u = g.width, d = g.top, c = g.left, a = g.height, null == (p = v.offset).startX && (p.startX = e), null == (h = v.offset).startY && (h.startY = s), null == v.parentScrollY && (v.parentScrollY = null != (y = v.scrollParent) ? y.scrollTop : void 0), v.parentScrollY !== (null != (b = v.scrollParent) ? b.scrollTop : void 0) ? l() : (r = e > c - i && e < c + u + i && s > d - i && s < d + a + i && Math.abs(e - v.offset.startX) < o && Math.abs(s - v.offset.startY) < o, m(r))
                    }, a = function(t) {
                        var e, i, n, o;
                        if (v) return g(b, c, !1), g(y, a, !1), r && (t.preventDefault(), t.stopPropagation(), e = v.el, i = v.scrollParent, n = document.createEvent("Event"), n.initEvent("iostap", !0, !0), i ? (o = t.changedTouches[0], e = document.elementFromPoint(o.pageX, o.pageY) || e) : e.dispatchEvent(n), window.clearTimeout(f), f = window.setTimeout(function() {
                            if (m(!1), i) return e.dispatchEvent(n)
                        }, s)), v = null
                    }, l = function() {
                        if (v) return g(b, c, !1), g(y, a, !1), v = null, m(!1)
                    }, e = function(t, e, i) {
                        return null == i && (i = !1), window.addEventListener(t, e, i)
                    }, g = function(t, e, i) {
                        return null == i && (i = !1), window.removeEventListener(t, e, i)
                    }, "undefined" != typeof Backbone && null !== Backbone && Backbone.on("canceltap", l), e(x, d, !1), n) return e("touchcancel", l, !1)
            }
        }
    }), require.register("lib/vimeo-api.coffee", function(t, e, i) {
        var n;
        n = document.createElement("script"), n.src = "https://player.vimeo.com/api/player.js", document.head.appendChild(n, "beforeEnd")
    }), require.register("lib/youtube-api.coffee", function(t, e, i) {
        var n, o;
        window.onYouTubePlayerAPIReady = function() {
            return Backbone.trigger("youtubeplayerapiready")
        }, o = document.createElement("script"), n = window.location.protocol.replace("file", "http"), o.src = "" + n + "//www.youtube.com/player_api", document.head.appendChild(o, "beforeEnd")
    }), require.register("models/game/score.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("lib/easie"), o = function(t) {
            function e() {
                return s = e.__super__.constructor.apply(this, arguments)
            }
            return l(e, t), e.prototype.defaults = {
                turns: 0
            }, e.prototype.initialize = function() {
                return this.on("reset", this.resetScore, this), this.on("tally", this.tallyScore, this), this.on("change", this.getTotal, this)
            }, e.prototype.resetScore = function() {
                return window.clearTimeout(this.timeout), this.set({
                    score: 0,
                    bonus: 0,
                    total: 0,
                    correct: 0,
                    incorrect: 0,
                    consecutive: 0,
                    lastBonus: 0,
                    lastScore: 0
                })
            }, e.prototype.tallyScore = function(t) {
                var e, i, o, s, r, l, a, c, d, u, p, h, f, m, v = this;
                return i = t.callback, a = t.ms, h = t.tallyFrom, window.clearTimeout(this.timeout), m = this.attributes, e = m.bonus, u = m.score, c = m.record, f = m.total, u + e === f && f === c && null == h ? "function" == typeof i ? i() : void 0 : (p = Date.now(), o = 1e3 / 60, s = 0, l = h || 0, null == a && (a = 3e3), a = Math.min(a, Math.abs(l - (u + e)) || 1), r = a / o, (d = function() {
                    var t, a;
                    return a = _.limit(s / r || 0, 1), 0 <= a && a <= 1 || (a = 1), t = {
                        total: Math.round(n.quartInOut(a, l, e + u - l, 1))
                    }, null == h && (t.record = Math.max(t.total, c || 0)), v.set(t), s < r ? (v.timeout = window.setTimeout(d, o), s = Math.floor((Date.now() - p) / o)) : "function" == typeof i ? i() : void 0
                })())
            }, e.prototype.getTotal = function(t) {
                if (!(t.changed.total || null == t.changed.score && null == t.changed.bonus)) return this.set({
                    total: this.get("score") + this.get("bonus")
                })
            }, e.prototype.setBy = function(t, e) {
                var i, n, o, s;
                "string" == typeof t ? (i = t, t = {}, t[i] = e) : n = e;
                for (i in t) {
                    if (s = t[i], o = this.get(i), this.set(i, Math.max(o + s, 0), n), "lastBonus" === i || "lastScore" === i) return void("undefined" != typeof console && null !== console && "function" == typeof console.log && console.log("`lastBonus` & `lastScore` cannot be set"));
                    "bonus" === i && s > 0 && (this.set({
                        lastBonus: 0
                    }, {
                        silent: !0
                    }), this.set({
                        lastBonus: s
                    })), "score" === i && s > 0 && (this.set({
                        lastScore: 0
                    }, {
                        silent: !0
                    }), this.set({
                        lastScore: s
                    }))
                }
            }, e.prototype.destroy = function() {
                return window.clearTimeout(this.timeout), e.__super__.destroy.apply(this, arguments)
            }, e
        }(Backbone.Model), i.exports = o
    }), require.register("models/game/timer.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = window.requestAnimationFrame || window.webkitRequestAnimationFrame, o = window.cancelAnimationFrame || window.webkitCancelAnimationFrame, n = function(t) {
            function e() {
                return r = e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t), e.prototype.defaults = {
                limit: 5e3
            }, e.prototype.initialize = function() {
                if (this.get("limit") > 0) return this.on("start", this.trackTimer, this), this.on("reset", this.resetTimer, this), this.on("count", this.countDown, this), this.on("change", this.getTotal, this), this.on("stop", this.endTimer, this)
            }, e.prototype.resetTimer = function() {
                return this.set({
                    bonus: 0,
                    total: this.get("limit"),
                    remaining: this.get("limit"),
                    paused: !0
                })
            }, e.prototype.trackTimer = function(t) {
                var e, i, n = this;
                if (e = t.callback, this.get("limit") > 0) return this.set({
                    start: Date.now() - (this.get("total") - this.get("remaining")),
                    paused: !1
                }), this.clearTimers(), (i = function() {
                    var t, o, r, l, a, c;
                    return c = n.attributes, l = c.start, o = c.limit, r = c.remaining, a = c.total, t = c.interval, n.get("paused") ? n.set({
                        start: Date.now() - (o - r)
                    }) : n.set({
                        remaining: Math.max(a - (Date.now() - l), 0)
                    }), n.get("remaining") > 0 ? n.rafWrap = s(i) : n.timeout = window.setTimeout(e, 300)
                })()
            }, e.prototype.clearTimers = function() {
                return o(this.rafWrap), window.clearTimeout(this.timeout)
            }, e.prototype.endTimer = function() {
                return this.clearTimers(), this.set({
                    paused: !0
                })
            }, e.prototype.countDown = function(t) {
                var e, i, n, o, s, r = this;
                return e = t.callback, s = t.steps, n = t.ms, this.get("limit") <= 0 ? "function" == typeof e ? e() : void 0 : (this.set({
                    paused: !0
                }), i = s || 3, this.clearTimers(), (o = function() {
                    return r.set({
                        count: i
                    }), 0 === i ? e() : (r.timeout = window.setTimeout(o, n || 1200), i--)
                })())
            }, e.prototype.getTotal = function(t) {
                if (!t.changed.total) return this.set({
                    total: this.get("limit") + (this.get("bonus") || 0)
                })
            }, e.prototype.setBy = function(t, e) {
                var i, n, o, s;
                "string" == typeof t && (i = t, t = {}, t[i] = e), s = [];
                for (i in t) o = t[i], n = this.get(i), this.set(i, n + o), "bonus" === i && o > 0 ? (this.set({
                    lastBonus: 0
                }, {
                    silent: !0
                }), s.push(this.set({
                    lastBonus: o
                }))) : s.push(void 0);
                return s
            }, e.prototype.destroy = function() {
                return this.clearTimers(), e.__super__.destroy.apply(this, arguments)
            }, e
        }(Backbone.Model), i.exports = n
    }), require.register("templates/components/background.jade", function(t, e, i) {
        var n = function(t) {
            var e = [];
            return e.push('<div id="slides-background-wrap"><div id="slides-background"></div></div>'), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/engine/lesson-info.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o) {
                i.push('<div id="lesson-info" class="row block-hor-xl"><div class="col-md-6 col-sm-6"><div id="lesson-title"' + jade.cls([t.logo ? "has-logo" : ""], [!0]) + ">"), t.logo && i.push('<img id="lesson-info-img"' + jade.attr("src", t.logo, !0, !1) + "/>"), i.push('<div id="lesson-title-content" class="text-ellipsis"><span class="hidden-sm">Lesson<br /></span><strong>' + jade.escape(null == (e = o) ? "" : e) + '</strong></div></div></div><div class="col-md-4 text-center"><div id="stars-available"></div></div><div class="col-md-2 col-sm-6"><div id="lesson-pages" class="text-center"><strong id="page-number">1</strong> of <strong>' + jade.escape(null == (e = n.length) ? "" : e) + "</strong></div></div></div>")
            }.call(this, "config" in n ? n.config : "undefined" != typeof config ? config : void 0, "slides" in n ? n.slides : "undefined" != typeof slides ? slides : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/engine/multi-content.jade", function(t, e, i) {
        var n = function(t) {
            var e = [];
            return e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/engine/slide-answer.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div id="slide-answer-content" class="row">'), s = t.takeaway ? "col-md-6" : "col-md-8 col-md-offset-2", i.push("<div" + jade.cls(["col-sm-12", "text-md", s], [null, null, !0]) + "><div" + jade.cls([t.takeaway ? "" : " slide-answer-continue-padding"], [!0]) + "><p><strong>"), o ? i.push("Too Slow!") : i.push(null == (e = n ? t.correct : t.incorrect) ? "" : e), i.push("</strong></p>"), t.text && i.push(null == (e = t.text) ? "" : e), i.push("</div></div><div" + jade.cls(["col-sm-12", s], [null, !0]) + ">"), t.takeaway && i.push('<h2 id="slide-answer-takeaway" class="slide-answer-continue-padding text-center">' + (null == (e = t.takeaway) ? "" : e) + "</h2>"), i.push('</div><div id="slide-answer-continue" class="col-sm-12 col-md-12"><div class="btn btn-block btn-solid"> \nContinue</div></div></div>')
            }.call(this, "answer" in n ? n.answer : "undefined" != typeof answer ? answer : void 0, "isCorrect" in n ? n.isCorrect : "undefined" != typeof isCorrect ? isCorrect : void 0, "isTooSlow" in n ? n.isTooSlow : "undefined" != typeof isTooSlow ? isTooSlow : void 0, "klass" in n ? n.klass : "undefined" != typeof klass ? klass : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/engine/slide-footer.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="slide-footer slide-up">'), o ? (i.push('<div class="slide-footer-touched"><div class="btn btn-muted btn-done">OK, I\'m done</div></div>'), "string" == typeof s && i.push('<div class="slide-footer-prompt text-uppercase text-bold">' + (null == (e = s) ? "" : e) + "</div>")) : i.push('<div class="slide-footer-prompt"><div class="btn btn-muted btn-done">' + (null == (e = t || "Continue") ? "" : e) + "</div></div>"), n && i.push('<div class="slide-footer-narration"><div class="narration-progress btn btn-muted"><div class="narration-progress-bar"></div><div class="wave-ellipse"><span class="bullet delay-1 block-inline">&bullet;</span><span class="bullet delay-2 block-inline">&bullet;</span><span class="bullet delay-3 block-inline">&bullet;</span></div></div></div>'), i.push("</div>")
            }.call(this, "continueBtnText" in n ? n.continueBtnText : "undefined" != typeof continueBtnText ? continueBtnText : void 0, "hasNarration" in n ? n.hasNarration : "undefined" != typeof hasNarration ? hasNarration : void 0, "hasPrompt" in n ? n.hasPrompt : "undefined" != typeof hasPrompt ? hasPrompt : void 0, "prompt" in n ? n.prompt : "undefined" != typeof prompt ? prompt : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/engine/stars-available.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div class="text-nowrap">'),
                    function() {
                        var e = n.slice(0, 5);
                        if ("number" == typeof e.length)
                            for (var o = 0, s = e.length; o < s; o++) {
                                var r = e[o];
                                r || (r = {});
                                var l = "delay-" + t.min(o, 10);
                                r.complete && (l += " active"), l += n.length < 2 ? " text-xl" : n.length < 6 ? " text-lg" : " text-md bunched", i.push("<div" + jade.cls(["star", l], [null, !0]) + "></div>")
                            } else {
                                var s = 0;
                                for (var o in e) {
                                    s++;
                                    var r = e[o];
                                    r || (r = {});
                                    var l = "delay-" + t.min(o, 10);
                                    r.complete && (l += " active"), l += n.length < 2 ? " text-xl" : n.length < 6 ? " text-lg" : " text-md bunched", i.push("<div" + jade.cls(["star", l], [null, !0]) + "></div>")
                                }
                            }
                    }.call(this), i.push('</div><h4 class="text-bold text-nowrap"> ');
                var r = _.where(n, {
                    complete: !0
                }).length;
                i.push("You earned " + jade.escape(null == (e = r) ? "" : e) + " out of " + jade.escape(null == (e = s.quantify(n.length, "star")) ? "" : e) + "</h4>")
            }.call(this, "Math" in n ? n.Math : "undefined" != typeof Math ? Math : void 0, "stars" in n ? n.stars : "undefined" != typeof stars ? stars : void 0, "undefined" in n ? n.undefined : void 0, "written" in n ? n.written : "undefined" != typeof written ? written : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/engine/stars-earned.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                (function() {
                    var e = t.slice(0, 5);
                    if ("number" == typeof e.length)
                        for (var n = 0, o = e.length; n < o; n++) {
                            var s = e[n],
                                r = "delay-" + 2 * n;
                            t.length > 5 && (r += " bunched"), s.complete || (r += " active"), i.push("<div" + jade.cls(["star", r], [null, !0]) + "></div>")
                        } else {
                            var o = 0;
                            for (var n in e) {
                                o++;
                                var s = e[n],
                                    r = "delay-" + 2 * n;
                                t.length > 5 && (r += " bunched"), s.complete || (r += " active"), i.push("<div" + jade.cls(["star", r], [null, !0]) + "></div>")
                            }
                        }
                }).call(this);
                var o = t.filter(function(t) {
                        return t.complete
                    }).length,
                    s = t.length,
                    r = s - o;
                i.push('<h4 class="text-bold text-pre">'), o == s ? i.push("" + jade.escape(null == (e = o) ? "" : e) + " star" + jade.escape(null == (e = 1 === o ? "" : "s") ? "" : e) + " earned") : i.push("" + jade.escape(null == (e = r) ? "" : e) + " star" + jade.escape(null == (e = 1 === r ? "" : "s") ? "" : e) + " available"), i.push("</h4>")
            }.call(this, "stars" in n ? n.stars : "undefined" != typeof stars ? stars : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/game/intro.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                i.push('<div class="content-intro content-fill"><div class="block-lg text-center content"><div class="row block-md"><div class="col-sm-12 col-md-8 col-md-offset-2"><h1 class="tight">' + (null == (e = n) ? "" : e) + '</h1><div class="text-lg block-ver-lg">' + (null == (e = t) ? "" : e) + '</div></div></div><div class="btn btn-solid play-game">OK, I\'m ready!</div></div></div>')
            }.call(this, "description" in n ? n.description : "undefined" != typeof description ? description : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/game/outro.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o) {
                    n = t && t.nb_stars > 0, i.push('<div class="content-outro content-fill"><div class="block-lg text-center content"><h1>' + (null == (e = o) ? "" : e) + '</h1><div class="row"><div class="col-sm-12 col-md-8 col-md-offset-2"><div class="row"><div' + jade.cls(["col-sm-6", "col-md-4", "block-ver-md", n ? "" : "col-md-offset-2"], [null, null, null, !0]) + '><div class="block-md block-dk"><h4 class="white-dot-text bold-italic">Your score</h4><h1 class="game-total tight">?</h1></div></div><div class="col-sm-6 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your best</h4><h1 class="game-record tight">?</h1></div></div>'), n && i.push('<div class="col-sm-12 col-md-4 block-ver-md"><div class="block-md block-dk"><h4 class="grey-dot-text bold-italic">Your stars</h4><h1 class="game-stars tight">?<sup class="stars-total"></sup></h1></div></div>'), i.push('</div><div class="row block-ver-md"><div class="col-sm-12 col-md-8 col-md-offset-2 block-md"><div class="btn btn-solid btn-block play-game">Play Again</div></div></div></div></div></div><div class="slide-footer"><div class="btn btn-muted goto-next fade-in">Move On</div></div></div>')
                }.call(this, "challenge_configuration" in n ? n.challenge_configuration : "undefined" != typeof challenge_configuration ? challenge_configuration : void 0, "hasStars" in n ? n.hasStars : "undefined" != typeof hasStars ? hasStars : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0),
                i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/indicator.jade", function(t, e, i) {
        var n = function(t) {
            var e = [],
                i = t || {};
            return function(t) {
                e.push('<div id="indicator"><div id="inner"' + jade.attr("style", "left: " + 100 / t.length + "%;", !0, !1) + "></div></div>")
            }.call(this, "slides" in i ? i.slides : "undefined" != typeof slides ? slides : void 0), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/leaderboard/leaderboard-list.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n) {
                i.push('<table><thead><tr class="slide-up"><th class="rank">Rank</th><th class="score">Score</th><th class="name">Name</th><th class="retailer">Retailer</th></tr></thead><tbody>'),
                    function() {
                        var n = t;
                        if ("number" == typeof n.length)
                            for (var o = 0, s = n.length; o < s; o++) {
                                var r = n[o];
                                i.push('<tr class="slide-up"><td class="rank">' + jade.escape(null == (e = o) ? "" : e) + '</td><td class="score">' + jade.escape(null == (e = r.score) ? "" : e) + '</td><td class="name">' + jade.escape(null == (e = r.full_name) ? "" : e) + '</td><td class="retailer">' + jade.escape(null == (e = r.Store) ? "" : e) + "</td></tr>")
                            } else {
                                var s = 0;
                                for (var o in n) {
                                    s++;
                                    var r = n[o];
                                    i.push('<tr class="slide-up"><td class="rank">' + jade.escape(null == (e = o) ? "" : e) + '</td><td class="score">' + jade.escape(null == (e = r.score) ? "" : e) + '</td><td class="name">' + jade.escape(null == (e = r.full_name) ? "" : e) + '</td><td class="retailer">' + jade.escape(null == (e = r.Store) ? "" : e) + "</td></tr>")
                                }
                            }
                    }.call(this), i.push("</tbody></table>")
            }.call(this, "leaderboards" in n ? n.leaderboards : "undefined" != typeof leaderboards ? leaderboards : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/menu.jade", function(t, e, i) {
        var n = function(t) {
            var e = [];
            return e.push('<div id="menu-view"></div>'), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/components/pagination.jade", function(t, e, i) {
        var n = function(t) {
            var e = [],
                i = t || {};
            return function(t, i) {
                e.push('<div id="pagination">'),
                    function() {
                        var i = t;
                        if ("number" == typeof i.length)
                            for (var n = 0, o = i.length; n < o; n++) {
                                i[n];
                                e.push("<a" + jade.attr("href", "#slide/" + (n + 1), !0, !1) + ' class="page"></a>')
                            } else {
                                var o = 0;
                                for (var n in i) {
                                    o++;
                                    i[n];
                                    e.push("<a" + jade.attr("href", "#slide/" + (n + 1), !0, !1) + ' class="page"></a>')
                                }
                            }
                    }.call(this), e.push("</div>")
            }.call(this, "slides" in i ? i.slides : "undefined" != typeof slides ? slides : void 0, "undefined" in i ? i.undefined : void 0), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/main.jade", function(t, e, i) {
        var n = function(t) {
            var e = [];
            return e.push('<div id="content"><div id="inbound"></div><div id="outbound"></div></div>'), e.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("templates/slides.jade", function(t, e, i) {
        var n = function(t) {
            var e, i = [],
                n = t || {};
            return function(t, n, o, s) {
                i.push('<div id="slides-view-inner" class="block-ver-xl content-md-fill content-sm-fill">'), t.customCSS && i.push('<style id="custom-css">' + jade.escape(null == (e = t.customCSS) ? "" : e) + "</style>"), t.background && i.push('<div id="slides-background-wrap"><div id="slides-background"></div></div>'), i.push('<div id="lesson-info" class="row block-hor-xl"><div class="col-md-6 col-sm-6"><div id="lesson-title"' + jade.cls([t.logo ? "has-logo" : ""], [!0]) + ">"), t.logo && i.push('<img id="lesson-info-img"' + jade.attr("src", t.logo, !0, !1) + "/>"), i.push('<div id="lesson-title-content" class="text-ellipsis"><span class="hidden-sm">Lesson<br /></span><strong>' + jade.escape(null == (e = o) ? "" : e) + '</strong></div></div></div><div class="col-md-4 text-center"><div id="stars-available"></div></div><div class="col-md-2 col-sm-6"><div id="lesson-pages" class="text-center"><strong id="page-number">1</strong> of <strong>' + jade.escape(null == (e = n.length) ? "" : e) + '</strong></div></div></div><div class="block-ver-xl content-md-fill content-sm-fill"><div id="slides"><div id="slides-scroller">'),
                    function() {
                        var t = n;
                        if ("number" == typeof t.length)
                            for (var e = 0, o = t.length; e < o; e++) {
                                var s = t[e];
                                i.push("<div" + jade.cls(["slide", "slide-" + s.type], [null, !0]) + "></div>")
                            } else {
                                var o = 0;
                                for (var e in t) {
                                    o++;
                                    var s = t[e];
                                    i.push("<div" + jade.cls(["slide", "slide-" + s.type], [null, !0]) + "></div>")
                                }
                            }
                    }.call(this), i.push('</div></div></div><div id="slide-answer" class="block-xl"></div><div id="stars-earned" class="content text-center"></div>'), t.pagination && (i.push('<div id="pagination">'), function() {
                        var t = n;
                        if ("number" == typeof t.length)
                            for (var e = 0, o = t.length; e < o; e++) {
                                t[e];
                                i.push("<a" + jade.attr("href", "#slide/" + (e + 1), !0, !1) + ' class="page"></a>')
                            } else {
                                var o = 0;
                                for (var e in t) {
                                    o++;
                                    t[e];
                                    i.push("<a" + jade.attr("href", "#slide/" + (e + 1), !0, !1) + ' class="page"></a>')
                                }
                            }
                    }.call(this), i.push("</div>")), t.indicator && i.push('<div id="indicator"><div id="inner"' + jade.attr("style", "left: " + 100 / n.length + "%;", !0, !1) + "></div></div>"), i.push("</div>")
            }.call(this, "config" in n ? n.config : "undefined" != typeof config ? config : void 0, "slides" in n ? n.slides : "undefined" != typeof slides ? slides : void 0, "title" in n ? n.title : "undefined" != typeof title ? title : void 0, "undefined" in n ? n.undefined : void 0), i.join("")
        };
        "function" == typeof define && define.amd ? define([], function() {
            return n
        }) : "object" == typeof i && i && i.exports && (i.exports = n)
    }), require.register("views/base/game.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u, p, h, f = {}.hasOwnProperty,
            m = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) f.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        for (s = e("views/game"), p = Application.actions(), l = p.Sound, r = p.Session, n = p.Analytics, c = ["system:achievement", "system:new-star", "system:spin-win", "system:correct", "system:ready", "system:spinning", "system:game-music-slow", "system:spin-fail", "system:tally-score", "system:go", "system:spin-stop", "system:welcome", "system:incorrect", "system:spin-success"], d = 0, u = c.length; d < u; d++) a = c[d], l.preload(a, a);
        o = function(t) {
            function e() {
                return h = e.__super__.constructor.apply(this, arguments)
            }
            return m(e, t), e.prototype.show = function() {
                var t = this;
                return e.__super__.show.apply(this, arguments), this.initializeData(), this.initializeElements(), r.get(function(e, i) {
                    var n, o, s;
                    if (null != i.scores && (s = i.scores, n = t.options.name, o = null != (null != s ? s[n] : void 0) ? parseInt(s[n], 10) : null, null != o)) return t.game.score.set("record", o)
                })
            }, e.prototype.hide = function() {
                return e.__super__.hide.apply(this, arguments), l.stopAll()
            }, e.prototype.onRefresh = function() {
                if (e.__super__.onRefresh.apply(this, arguments), l.stopAll(), this.game.extra.get("fullscreen")) return this.trigger("lightbox", !1)
            }, e.prototype.initializeData = function() {}, e.prototype.initializeElements = function() {
                var t, e, i, n, o, s;
                for (t = ["timer", "progress-bar", "stepper", "score", "tally", "stars", "total", "record", "bonus-score", "bonus-time"], s = [], n = 0, o = t.length; n < o; n++) e = t[n], i = ".game-" + e, s.push(this.setEl(this.el.querySelector(i), e));
                return s
            }, e.prototype.onTimerChange = function(t) {
                var e, i, n, o, s, r, a, c, d = this;
                if (c = t.changed, a = c.remaining, i = c.count, o = c.lastBonus, r = c.paused, null != a && null != this.getEl("timer") && (s = t.get("limit"), e = a / 1e3, e = (e < 10 ? "0" : "") + e.toFixed(2) + "s", this.getEl("timer").innerHTML = e.replace(/^[0s\.]+/, function(t) {
                        return _.wrapInTag(t, "em", {
                            "class": "game-timer-muted"
                        })
                    })), null != a && null != this.getEl("progress-bar") && (n = this.game.timer.get("interval"), this.transform(this.getEl("progress-bar"), {
                        x: "" + -a / s * 100 + "%"
                    })), null != i && null != this.getEl("stepper") && (this.transition(this.getEl("stepper"), "all 100ms"), this.getEl("stepper").offsetLeft, this.transform(this.getEl("stepper"), {
                        scale: .75
                    }), this.el.classList.toggle("game-count-down", i > 0), window.setTimeout(function() {
                        return d.transition(d.getEl("stepper"), ""), d.transform(d.getEl("stepper"), {
                            scale: 1.25
                        }), i > 0 ? (d.getEl("stepper").style.opacity = 1, d.getEl("stepper").innerHTML = i, l.play("system:ready")) : (d.getEl("stepper").style.opacity = 0, d.getEl("stepper").innerHTML = "GO")
                    }, 120)), o > 0 && null != this.getEl("bonus-time") && this.showBonus({
                        el: this.getEl("bonus-time"),
                        x: "-2em",
                        html: "+" + _.quantify(o / 1e3, "second"),
                        delay: 400
                    }), null != r) return this.el.classList.toggle("game-paused", r)
            }, e.prototype.onScoreChange = function(t) {
                var e, i, n, o, s;
                if (s = t.changed, e = s.correct, o = s.total, n = s.record, i = s.lastBonus, null != n && null != this.getEl("record") && (this.getEl("record").innerHTML = _.prettyNumber(n), this.getEl("record").offsetLeft), null != o && null != this.getEl("total") && (this.getEl("total").innerHTML = this.getEl("score").innerHTML = _.prettyNumber(o)), i > 0 && null != this.getEl("bonus-score")) return this.showBonus({
                    el: this.getEl("bonus-score"),
                    x: "2em",
                    html: "+" + _.prettyNumber(i) + " points"
                })
            }, e.prototype.showBonus = function(t) {
                var e, i, n, o, s = this;
                return i = t.el, o = t.x, n = t.html, e = t.delay, i.innerHTML = n, this.transform(i, {
                    x: o,
                    transition: "none",
                    opacity: 0
                }), i.offsetLeft, this.transition(i, "", !0), window.setTimeout(function() {
                    return s.transform(i, {
                        x: 0,
                        opacity: 1
                    })
                }, 1 + (e || 0)), window.setTimeout(function() {
                    return s.transform(i, {
                        opacity: 0
                    })
                }, 1e3 + (e || 0))
            }, e.prototype.enterGame = function() {
                return e.__super__.enterGame.apply(this, arguments), l.stop("system:tally-score"), this.el.classList.add("disable-goto-next"), this.game.extra.get("fullscreen") && this.trigger("lightbox", !0), this.showNext(!0)
            }, e.prototype.startGame = function() {
                return this.game.extra.get("sounds") && l.fadeIn("system:game-music-slow"), e.__super__.startGame.apply(this, arguments)
            }, e.prototype.endGame = function() {
                if (this.game.extra.get("sounds") && (l.fadeOut("system:game-music-slow"), l.loop("system:tally-score")), e.__super__.endGame.apply(this, arguments), this.game.extra.get("fullscreen")) return this.trigger("lightbox", !1)
            }, e.prototype.afterAnimateScores = function() {
                var t, i, n, o, s, r;
                return this.game.extra.get("sounds") && (l.stop("system:tally-score"), l.play("system:spin-win")), this.el.classList.remove("disable-goto-next"), this.options.data && (s = this.options.data, n = s.game, t = s.challenge_configuration), (null != n ? n.stars : void 0) && (null != t ? t.nb_stars : void 0) && (r = this.calculateStarsEarned({
                    score: this.game.score.get("record"),
                    stars: this.options.data.challenge_configuration.nb_stars,
                    range: this.options.data.game.stars
                }), i = r.earned, o = r.total, this.getEl("stars").innerHTML = i + _.wrapInTag(" of " + o, "sup", {
                    "class": "stars-total"
                })), e.__super__.afterAnimateScores.apply(this, arguments)
            }, e.prototype.calculateStarsEarned = function(t) {
                var e, i, o, s, r, l, a, c, d;
                return a = t.score, c = t.stars, l = t.range, r = l.min, s = l.max, o = function() {
                    d = [];
                    for (var t = 0; 0 <= c ? t < c : t > c; 0 <= c ? t++ : t--) d.push(t);
                    return d
                }.apply(this).map(function(t) {
                    return (s - r) / (c - 1) * t + r
                }), i = _.chain(o).filter(function(t) {
                    return a >= t
                }).last().value(), e = o.indexOf(i) + 1, n.trackInteraction({
                    score: _.clone(this.game.score.attributes),
                    time: _.clone(this.game.timer.attributes),
                    name: this.options.name,
                    type: this.options.type,
                    nb_stars_earned: e,
                    configuration: this.options.data.challenge_configuration,
                    game: !0,
                    slideData: this.options.data
                }), {
                    earned: e,
                    total: c
                }
            }, e.prototype.onCorrectAnswer = function() {
                return this.game.extra.get("sounds") && l.play("system:correct"), e.__super__.onCorrectAnswer.apply(this, arguments)
            }, e.prototype.onIncorrectAnswer = function() {
                return this.game.extra.get("sounds") && l.play("system:incorrect"), e.__super__.onIncorrectAnswer.apply(this, arguments)
            }, e.prototype.showNext = function(t) {}, e.prototype.checkAnswer = function() {}, e.prototype.getBonus = function(t, e, i) {
                return null == e && (e = 1e3), null == i && (i = 5e3), Math.floor(Math.max(i - Math.abs(t), 0) * (e / i))
            }, e
        }(s), i.exports = o
    }), require.register("views/base/slide.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = Application.actions().Analytics, o = function(t) {
            function e() {
                return s = e.__super__.constructor.apply(this, arguments)
            }
            return l(e, t), e.prototype.refresh = function(t, e) {
                var i, n, o, s, r = this;
                return this.setState(!0, "refresh"), i = _.isEqual(_.omit(t.data, "answer"), _.omit(this.options.data, "answer")), i && (n = (null != (o = this.options.data.answer) ? o.incorrect : void 0) === (null != (s = t.data.answer) ? s.incorrect : void 0)), this.options.data = t.data, i && t.data.answer ? this.trigger("complete", this, {
                    isCorrect: n
                }) : (this.undelegateEvents(), this.render(t, e), this.delegateEvents(), this.trigger("refresh", this)), window.setTimeout(function() {
                    return r.setState(!1, "refresh")
                }, 0)
            }, e.prototype.reset = function() {
                return this.undelegateEvents(), this.render(), this.delegateEvents(), this.setState("prompt"), this.trigger("refresh", this)
            }, e.prototype.showAnswer = function() {
                var t, e, i, o, s;
                return this.options.data.answer ? (i = this.currentState.state, this.setState("complete"), t = this.isCorrect(), e = "prompt" === i && (null != (o = this.options.data.game) && null != (s = o.timer) ? s.limit : void 0) > 0, this.trigger("complete", this, {
                    isCorrect: t,
                    isTooSlow: e
                }), n.trackInteraction({
                    correct: t,
                    tooSlow: e,
                    configuration: this.options.data.challenge_configuration,
                    name: this.options.name,
                    type: this.options.type,
                    slideData: this.options.data
                })) : this.next()
            }, e.prototype.isCorrect = function() {
                return !0
            }, e.prototype.exit = function() {
                return Backbone.Events.trigger("application-exit")
            }, e.prototype.delegateEvents = function() {
                return e.__super__.delegateEvents.apply(this, arguments), this.toggleNonBubblingEvents("add"), this.listenTo(this, "refresh", this.onRefresh), this.listenTo(this, "narration-progress", this.onNarrationProgress), this.listenTo(this, "narration-pause", this.onNarrationComplete), this.listenTo(this, "narration-complete", this.onNarrationComplete)
            }, e.prototype.undelegateEvents = function() {
                var t, i, n, o, s, r;
                this.stopListening(), this.toggleNonBubblingEvents("remove");
                for (i in this)
                    for (t = this[i], _.isArray(t) || (t = [t]), r = _.compact(t), o = 0, s = r.length; o < s; o++) n = r[o], "function" == typeof n.undelegateEvents && n.undelegateEvents();
                return e.__super__.undelegateEvents.apply(this, arguments)
            }, e.prototype.toggleNonBubblingEvents = function(t) {
                var e, i, n, o, s;
                i = {
                    canplay: ["video.multi-content"],
                    scroll: [".content-scroll", ".content-sm-scroll", ".content-md-scroll", ".content-lg-scroll"]
                }, s = [];
                for (n in i) o = i[n], s.push(function() {
                    var i, s, r, l;
                    for (r = this.el.querySelectorAll(o.join(", ")), l = [], i = 0, s = r.length; i < s; i++) e = r[i], l.push(e["" + t + "EventListener"](n, this, !1));
                    return l
                }.call(this));
                return s
            }, e.prototype.handleEvent = function(t) {
                switch (t.type) {
                    case "scroll":
                        return this.onScroll(t);
                    case "canplay":
                        return this.onMediaCanPlay(t)
                }
            }, e.prototype.onScroll = function(t) {
                return this.trigger("scroll", t)
            }, e.prototype.onMediaCanPlay = function() {
                var t, e, i, n;
                return this.removeEventListener("canplay", this, !1), e = 180, i = this.videoHeight / this.videoWidth, t = i * this.offsetWidth, (t > e || 0 === t) && (t = e, n = e / i), this.style.width = "" + n + "px", this.style.height = "" + t + "px"
            }, e
        }(Backbone.View), i.exports = o
    }), require.register("views/base/slides.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u = {}.hasOwnProperty,
            p = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) u.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        c = Application.actions(), l = c.Sound, n = c.Analytics, r = e("views/components/slide-answer"), s = e("lib/preload"), a = e("lib/data-processer"), o = function(t) {
            function i() {
                return d = i.__super__.constructor.apply(this, arguments)
            }
            return p(i, t), i.prototype.templates = {
                starsAvailable: e("templates/components/engine/stars-available"),
                starsEarned: e("templates/components/engine/stars-earned"),
                slideAnswer: e("templates/components/engine/slide-answer")
            }, i.prototype.events = {
                "iostap #slide-answer-continue": "onContinue"
            }, i.prototype.initialize = function(t, e) {
                var i = this;
                if (e(), this.listenTo(this, "goToPage", this.onGoToPage), this.listenTo(this, "showView", this.onShowView), this.listenTo(Backbone.Events, "subscribe:event:new-star", this.onNewStar), this.listenTo(Backbone.Events, "application-exit", this.onExit), !t.cms) return this.request = $.ajax({
                    type: "GET",
                    url: "config.json",
                    dataType: "json",
                    success: function(e) {
                        return i.render(_.extend({}, t, a.all(e))), i.setElements(), s.loadFromStylesheets()
                    }
                })
            }, i.prototype.onExit = function() {
                return this.stopCurrentNarration(), this.stopTracking(), Application.publish("event:exit")({})
            }, i.prototype.refresh = function(t, e) {
                var i, n, o, s, r, c, d;
                for (null != (c = this.request) && c.abort(), window.clearTimeout(this.timeout), delete this.currentIndex, d = this.slideViews || [], s = 0, r = d.length; s < r; s++) o = d[s], o.undelegateEvents().remove();
                return i = {
                    withoutNarration: !0,
                    forceResize: !0
                }, "function" == typeof l.disableSystemSounds && l.disableSystemSounds(), n = _.extend(i, a.all(t), e), this.render(n), this.setElements()
            }, i.prototype.setCurrentState = function(t) {
                var e;
                return this.getCurrentSlide().setState(t), "complete" === t && null != (null != (e = this.getCurrentSlide().options.data) ? e.answer : void 0) ? this.onComplete(this.getCurrentSlide(), {
                    isCorrect: !0
                }) : this.slideAnswerView.toggle(!1)
            }, i.prototype.refreshCurrentView = function(t, e) {
                var i;
                if (null != this.currentIndex && (i = this.getCurrentSlide(), t.data = a.one(t.data, i.options.type), null != i && !_.isEqual(t.data, i.options.data))) return this.toggleViewInDOM(i, !0), i.withoutNarration = !0, i.refresh(t, e)
            }, i.prototype.createSlideViews = function() {
                var t, e, i, n, o, s;
                if (this.slideViews)
                    for (s = this.slideViews, n = 0, o = s.length; n < o; n++) i = s[n], i.off().undelegateEvents();
                if (this.setGlobalStyles(this.options), this.slideViews = function() {
                        var n, o, s, r;
                        for (s = this.el.querySelectorAll(".slide"), r = [], e = n = 0, o = s.length; n < o; e = ++n) t = s[e], i = this.createViewFor(t, this.options.slides[e]), i.on("lightbox", this.toggleLightbox, this), i.on("complete", this.onComplete, this), i.on("refresh", this.onRefresh, this), i.on("scroll", this.onScroll, this), r.push(i);
                        return r
                    }.call(this), this.options.debug) return this.logMenu()
            }, i.prototype.logMenu = function() {
                var t, i, n, o, s, r, l, a;
                for (t = new(e("lib/logger"))((!window.cordova), "MENU", "#2DB906"), l = this.slideViews, a = [], n = s = 0, r = l.length; s < r; n = ++s) {
                    for (i = l[n], o = i.options.name; o.length < 22;) o += " ";
                    a.push(t("" + o + " " + window.location.origin + "/#slide/" + (n + 1)))
                }
                return a
            }, i.prototype.createViewFor = function(t, i) {
                var n;
                return new(n = e("engine/" + i.type + "/view"))(this.optionsForView(t, i))
            }, i.prototype.getExtraConfig = function(t) {
                var e;
                return e = {
                    pagination: !1,
                    indicator: !0,
                    locked: !0,
                    webAccess: null != document.location.pathname.match(/\/lessons/)
                }, t.config = _.extend({}, e, t.config), t
            }, i.prototype.toggleLightbox = function(t, e) {
                var i, n;
                return null == e && (e = !1), this.el.classList.toggle("lightbox", t), this.el.classList.toggle("lightbox-strong", e), this.el.style.backgroundColor = "default" === t ? null != (i = this.options.config) && null != (n = i.colors) ? n.background : void 0 : "string" == typeof t ? t : this.options.config.colors.background
            }, i.prototype.toggleStars = function(t) {
                var e = this;
                if (null != this.slideViews[t]) return Application.actions("Session").get(function(i, n) {
                    var o, s, r, l, a, c, d, u, p, h, f, m, v, g;
                    return c = n.stars, o = n.alreadyCompleted, r = e.slideViews[t].options.data, s = null != c || (null != r && null != (u = r.challenge_configuration) ? u.nb_stars : void 0) ? null != (p = null != c && null != (h = c[t]) ? h.available : void 0) ? p : null != r && null != (f = r.challenge_configuration) ? f.nb_stars : void 0 : 0, l = (null != c && null != (m = c[t]) ? m.earned : void 0) || 0, d = s + l, a = null != (null != r && null != (v = r.game) && null != (g = v.stars) ? g.min : void 0), window.clearTimeout(e.starsTimeout), d > 0 ? e.starsTimeout = window.setTimeout(function() {
                        var t;
                        return e.slideStarsEl.innerHTML = e.templates.starsEarned({
                            stars: function() {
                                t = [];
                                for (var e = 0; 0 <= d ? e < d : e > d; 0 <= d ? e++ : e--) t.push(e);
                                return t
                            }.apply(this).map(function(t, e) {
                                return {
                                    complete: e < l
                                }
                            })
                        }), e.slideStarsEl.offsetLeft, e.slideStarsEl.classList.add("display"), e.starsTimeout = window.setTimeout(function() {
                            return e.slideStarsEl.classList.remove("display")
                        }, 2100)
                    }, 600) : e.slideStarsEl.classList.remove("display")
                })
            }, i.prototype.onComplete = function(t, e) {
                var i, n, o;
                return n = e.isCorrect, o = e.isTooSlow, i = t.options.data.answer, this.slideAnswerView.render({
                    isCorrect: n,
                    isTooSlow: o,
                    answer: i
                }), this.slideAnswerView.toggle(!0)
            }, i.prototype.onRefresh = function() {
                return this.setElements(), this.toggleStars(this.scroller.currentPage.pageX), this.slideAnswerView.toggle(!1)
            }, i.prototype.onContinue = function() {
                return this.slideAnswerView.toggle(!1), this.getCurrentSlide().next()
            }, i.prototype.onGoToPage = function(t, e, i) {
                return null == i && (i = {}), this.slideStarsEl && this.starsAlertEl && this.slideAnswerView || this.setElements(), this.toggleStars(t), this.toggleLightbox(!1), this.slideAnswerView.toggle(!1)
            }, i.prototype.onShowView = function(t) {
                return this.startTracking(t), this.playNarration(t), this.el.classList.remove("scroll-top", "scroll-bottom", "scroll-middle")
            }, i.prototype.onScroll = function(t) {
                var e, i;
                return e = t.currentTarget, i = function() {
                    switch (e.scrollTop) {
                        case 0:
                            return "top";
                        case e.scrollHeight - e.offsetHeight:
                            return "bottom";
                        default:
                            return "middle"
                    }
                }(), this.el.classList.toggle("scroll-top", "top" === i), this.el.classList.toggle("scroll-bottom", "bottom" === i), this.el.classList.toggle("scroll-middle", "middle" === i)
            }, i.prototype.goToPageFromCMS = function(t, e) {
                return this.toggleViewInDOM(this.slideViews[t], !0), this.slideViews[t].reset(), this.slideViews[t].withoutNarration = !0, this.goToPage(t, null, e)
            }, i.prototype.onNewStar = function(t) {
                var e, i, n, o = this;
                if (e = t.earned, n = t.total, i = t.score, window.clearTimeout(this.starAlertTimeout), i > 0) return this.starsAlertEl.classList.add("before-display"), this.starAlertTimeout = window.setTimeout(function() {
                    var t;
                    return o.starsAlertEl.innerHTML = o.templates.starsAvailable(_.extend({
                        _: _
                    }, {
                        stars: function() {
                            t = [];
                            for (var e = 0; 0 <= n ? e < n : e > n; 0 <= n ? e++ : e--) t.push(e);
                            return t
                        }.apply(this).map(function(t, e) {
                            return {
                                complete: e < i
                            }
                        })
                    })), o.starsAlertEl.offsetLeft, o.starsAlertEl.classList.add("display"), o.starAlertTimeout = window.setTimeout(function() {
                        return o.starsAlertEl.classList.remove("display", "before-display")
                    }, 2100)
                }, 300)
            }, i.prototype.setElements = function() {
                var t;
                return this.slideStarsEl = this.el.querySelector("#stars-available"), this.starsAlertEl = this.el.querySelector("#stars-earned"), null != (t = this.slideAnswerView) && t.undelegateEvents(), this.slideAnswerView = new r({
                    el: this.el.querySelector("#slide-answer")
                })
            }, i.prototype.setGlobalStyles = function(t) {
                var e;
                return _.extend(this.options, t), e = 0 !== this.el.getBoundingClientRect().left, this.setColors(e), this.setCustomCSS(), this.setBackgroundImage(e)
            }, i.prototype.setColors = function(t) {
                var e, i, n, o;
                if (null != (null != (n = this.options.config) ? n.colors : void 0) && (o = this.options.config.colors, i = o.text, e = o.background, this.el.className = this.el.className.replace(/theme-[\w-]+/, ""), this.options.config.colors.theme && this.el.classList.add("theme-" + this.options.config.colors.theme), this.el.style.color = i, this.el.style.backgroundColor = e, t)) return document.body.style.backgroundColor = e
            }, i.prototype.setCustomCSS = function() {
                var t, e, i;
                if (t = null != (e = this.options.config) ? e.customCSS : void 0) return null != (i = this.el.querySelector("#custom-css")) ? i.innerHTML = t : void 0
            }, i.prototype.setBackgroundImage = function(t) {
                var e, i, n;
                if (e = this.el.querySelector("#slides-background"), i = null != (null != (n = this.options.config) ? n.background : void 0) ? "url(" + this.options.config.background + ")" : "", null != e && (e.style.backgroundImage = i), t) return document.body.style.backgroundImage = i
            }, i.prototype.startTracking = function(t) {
                var e, i;
                return null == this.durations && (this.durations = {}), this.stopTracking(), e = t.getTrackingTitle() || (null != (i = t.options) ? i.name : void 0), this.durations[e] = Date.now()
            }, i.prototype.stopTracking = function() {
                var t, e, i, o, s;
                o = this.durations, s = [];
                for (e in o) i = o[e], t = Date.now() - i, delete this.durations[e], s.push(n.trackView({
                    name: e,
                    duration: t
                }));
                return s
            }, i.prototype.getCurrentSlide = function() {
                return this.slideViews[this.currentIndex]
            }, i.prototype.stopCurrentNarration = function() {
                if (null != this.narration) return l.stop(this.narration)
            }, i.prototype.playNarration = function(t) {
                var e, i, n, o = this;
                if (this.stopCurrentNarration(), window.clearTimeout(this.narrationTimeout), !t.withoutNarration && !this.options.withoutNarration) return e = null != t ? t.serialize() : void 0, i = (null != t ? t.narrationDelay : void 0) || 1500, this.narration = null != (n = e.narration) ? n.audio_file : void 0, this.narration ? (e.narration.can_not_be_skipped && (t.setState("narration"), t.trigger("narration-progress", 0)), this.narrationTimeout = window.setTimeout(function() {
                    return l.play(o.narration, {
                        cb: function() {},
                        onProgress: function(e) {
                            return t.trigger("narration-progress", e)
                        },
                        onComplete: function() {
                            return e.narration.progress_on_completion ? t.next() : t.trigger("narration-complete")
                        }
                    })
                }, i)) : void 0
            }, i
        }(Backbone.View), i.exports = o
    }), require.register("views/components/draggy.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("lib/easie"), s = e("lib/element").getBounds, r = e("lib/device").events.pointer, n = function(t) {
            function e() {
                return l = e.__super__.constructor.apply(this, arguments)
            }
            return c(e, t), e.prototype.initialize = function(t) {
                return this.options = t, this.x = this.el.dataset.x = 0, this.y = this.el.dataset.y = 0, this.velocity = {}, this.getOffset()
            }, e.prototype.events = function() {
                var t;
                return t = {}, t[r.start] = "onStart", t
            }, e.prototype.bindExtra = function() {
                return document.addEventListener(r.move, this, !1), document.addEventListener(r.end, this, !1)
            }, e.prototype.unbindExtra = function() {
                return document.removeEventListener(r.move, this, !1), document.removeEventListener(r.end, this, !1)
            }, e.prototype.handleEvent = function(t) {
                switch (t.type) {
                    case r.move:
                        t.preventDefault(), this.onMove(t);
                        break;
                    case r.end:
                        this.onEnd(t)
                }
            }, e.prototype.undelegateEvents = function() {
                return this.unbindExtra(), e.__super__.undelegateEvents.apply(this, arguments)
            }, e.prototype.onStart = function(t) {
                if (!this.locked) return this.options.allowPropagation || t.stopImmediatePropagation(), this.el.classList.add("active"), this.el.style.zIndex = 99, this.history = [], this.getOffset(), this.getStart(t), this.onMove(t), this.bindExtra()
            }, e.prototype.onMove = function(t) {
                var e, i;
                return e = r.isTouch ? t.touches[0] : t, i = this.constrain({
                    x: e.pageX - this.start.x,
                    y: e.pageY - this.start.y,
                    buffer: 20
                }), this.x = i.x, this.y = i.y, this.t = i.t, this.getVelocity(), this.trigger("drag", this, t.type === r.start), this.disableUserSelect()
            }, e.prototype.disableUserSelect = function() {
                return document.body.classList.add("disable-select")
            }, e.prototype.onEnd = function(t) {
                var e;
                return this.unbindExtra(), e = this.constrain({
                    x: this.x,
                    y: this.y,
                    buffer: 0
                }), this.x = e.x, this.y = e.y, this.t = e.t, this.el.dataset.x = this.x, this.el.dataset.y = this.y, this.el.dataset.t = this.t, this.el.classList.remove("active"), this.el.style.zIndex = "", this.trigger("drop", this), document.body.classList.remove("disable-select")
            }, e.prototype.getOffset = function() {
                var t, e, i, n, o, r, l;
                return l = this.el.getBoundingClientRect(), o = l.top, i = l.left, n = l.right, t = l.bottom, r = l.width, e = l.height, this.offset = s(this.el, {
                    x: this.options.isParent ? 0 : -this.x,
                    y: this.options.isParent ? 0 : -this.y
                })
            }, e.prototype.getStart = function(t) {
                var e;
                if (e = r.isTouch ? t.touches[0] : t, this.start = {
                        x: e.pageX - this.x,
                        y: e.pageY - this.y
                    }, this.options.isParent && (this.start.x += this.x + this.offset.left - e.pageX, this.start.y += this.y + this.offset.top - e.pageY), this.options.radius) return this.start.x += this.options.radius, this.start.y += this.options.radius
            }, e.prototype.getVelocity = function(t) {
                var e, i, n, o, s, r, l, a, c;
                return null == t && (t = 300), o = Date.now(), this.history.push({
                    x: this.x,
                    y: this.y,
                    timestamp: o
                }), n = this.history.filter(function(e) {
                    return o - e.timestamp < t
                }), c = function() {
                    var t, i, s, l;
                    for (s = ["x", "y"], l = [], t = 0, i = s.length; t < i; t++) e = s[t], r = n.reduce(function(t, i, n, o) {
                        var s;
                        return s = o[n - 1] || i, t + (s[e] - i[e])
                    }, 0), l.push(r / (o - n[0].timestamp));
                    return l
                }(), l = c[0], a = c[1], s = -Math.atan2(l, a), i = function() {
                    switch (Math.round(s / Math.PI * 2)) {
                        case 0:
                            return "up";
                        case 1:
                            return "right";
                        case 2:
                        case -2:
                            return "down";
                        case -1:
                            return "left";
                        default:
                            return "none"
                    }
                }(), this.velocity = {
                    x: l,
                    y: a,
                    t: s,
                    dir: i
                }
            }, e.prototype.constrain = function(t) {
                var e, i, n, o, s, r, l, a, c, d, u, p, h, f;
                return p = t.x, h = t.y, e = t.buffer, f = this.options, r = f.minX, l = f.minY, o = f.maxX, s = f.maxY, n = f.lock, a = f.radius, a ? (u = -Math.atan2(p, h) + Math.PI, i = Math.sqrt(p * p + h * h), i > a && (c = Math.abs(a * p / i), d = Math.abs(a * h / i), p = this.limit(p, -c, c, e), h = this.limit(h, -d, d, e))) : (p = "x" === n ? 0 : this.limit(p, r, o, e), h = "y" === n ? 0 : this.limit(h, l, s, e)), {
                    x: p,
                    y: h,
                    t: u
                }
            }, e.prototype.limit = function(t, e, i, n) {
                return null == e && (e = -(1 / 0)), null == i && (i = 1 / 0), t < e ? e - o.expoOut(e - t, 0, n, i - e) : t > i ? i + o.expoOut(t - i, 0, n, i - e) : t
            }, e.prototype.reset = function(t) {
                var e, i, n, o;
                return o = null != t ? t : {}, i = o.x, n = o.y, e = o.t, null != i || null != n || null == e ? (null == i && (i = 0), null == n && (n = 0), e = -Math.atan2(i, n) + Math.PI, e < 0 && (e += 2 * Math.PI)) : null != e && (i = Math.cos(e - Math.PI / 2) * this.options.radius, n = Math.sin(e - Math.PI / 2) * this.options.radius), this.el.dataset.t = this.t = e, this.el.dataset.x = this.x = i, this.el.dataset.y = this.y = n, this.trigger("drop", this, !0)
            }, e.prototype.lock = function() {
                return this.locked = !0, this.el.classList.add("locked")
            }, e.prototype.unlock = function() {
                return this.locked = !1, this.el.classList.remove("locked")
            }, e.prototype.isWithin = function(t, e) {
                var i, n, o, s, r;
                return null == e && (e = 0), this.options.isParent ? n = s = o = i = 0 : (r = this.offset, n = r.left, s = r.top, o = r.right, i = r.bottom), n + this.x > t.left - e && o + this.x < t.right + e && s + this.y > t.top - e && i + this.y < t.bottom + e
            }, e.prototype.isOver = function(t, e) {
                var i, n, o, s, r, l, a;
                return o = t.left, r = t.top, s = t.right, i = t.bottom, a = this.offset, l = a.width, n = a.height, o -= l, s += l, r -= n, i += n, this.isWithin({
                    left: o,
                    top: r,
                    right: s,
                    bottom: i
                }, e)
            }, e.prototype.closest = function(t) {
                var e, i;
                return e = {
                    xmin: this.offset.left + this.x,
                    xmax: this.offset.left + this.x + this.offset.width,
                    ymin: this.offset.top + this.y,
                    ymax: this.offset.top + this.y + this.offset.height
                }, null != (i = _.chain(t).map(function(t) {
                    return {
                        xmin: t.left,
                        xmax: t.left + t.width,
                        ymin: t.top,
                        ymax: t.top + t.height
                    }
                }).map(function(t, i) {
                    var n, o, s;
                    return o = Math.min(e.xmax, t.xmax) - Math.max(e.xmin, t.xmin), s = Math.min(e.ymax, t.ymax) - Math.max(e.ymin, t.ymin), o >= 0 && s >= 0 && (n = o * s), {
                        area: n,
                        index: i
                    }
                }).filter("area").sortBy("area").last().value()) ? i.index : void 0
            }, e.prototype.distanceTo = function(t, e, i) {
                var n, o, s, r, l, a, c, d, u, p, h;
                return p = null != i ? i : {}, n = p.fromCenter, r = p.offsetX, l = p.offsetY, h = this.offset, s = h.left, a = h.top, c = h.width, o = h.height, null == r && (r = n ? s + c / 2 : 0), null == l && (l = n ? a + o / 2 : 0), d = t - (this.x + r), u = e - (this.y + l), Math.sqrt(d * d + u * u)
            }, e
        }(Backbone.View), i.exports = n
    }), require.register("views/components/menu.coffee", function(t, e, i) {
        var n, o, s = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) s.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = function(t) {
            function e() {
                return o = e.__super__.constructor.apply(this, arguments)
            }
            return r(e, t), e.prototype.events = function() {}, e.prototype.show = function() {
                return this.el.classList.add("show")
            }, e.prototype.hide = function() {
                return this.el.classList.remove("show")
            }, e
        }(Backbone.View), i.exports = n
    }), require.register("views/components/picker.coffee", function(t, e, i) {
        var n, o, s = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) s.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = function(t) {
                function e() {
                    return o = e.__super__.constructor.apply(this, arguments)
                }
                return r(e, t), e.prototype.initialize = function(t) {
                    return this.options = t, this.value = this.el.dataset.value = this.options.value, this.scroller = this.el.querySelector(".number-picker-nums-scroller"), this.getOffset()
                }, e.prototype.events = function() {
                    return {
                        "iostap .number-picker-arr-up": "onTapUp",
                        "iostap .number-picker-arr-down": "onTapDown"
                    }
                }, e.prototype.setBy = function(t) {
                    var e;
                    return e = this.value + t, e > 9 && (e = 0), e < 0 && (e = 9), this.value = this.el.dataset.value = e, this.trigger("change", this, t > 0)
                }, e.prototype.onTapUp = function() {
                    return this.setBy(1, !0)
                }, e.prototype.onTapDown = function() {
                    return this.setBy(-1, !1)
                }, e.prototype.toggleUp = function(t) {
                    return this.el.classList.toggle("disabled-up", t)
                }, e.prototype.toggleDown = function(t) {
                    return this.el.classList.toggle("disabled-down", t)
                }, e.prototype.getOffset = function() {
                    var t;
                    return t = this.el.querySelector(".number-picker-nums"), this.offset = {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }, e
            }(Backbone.View),
            i.exports = n
    }), require.register("views/components/slide-answer.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c = {}.hasOwnProperty,
            d = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) c.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/components/draggy"), l = e("lib/element"), s = l.transform, r = l.transition, o = function(t) {
            function i() {
                return a = i.__super__.constructor.apply(this, arguments)
            }
            return d(i, t), i.prototype.template = e("templates/components/engine/slide-answer"), i.prototype.initialize = function() {
                return this.draggy = new n({
                    el: this.el,
                    lock: "x",
                    minY: 0,
                    maxY: this.el.offsetHeight,
                    isParent: !1,
                    allowPropagation: !0
                }), this.toggle(!1), this.listenTo(this.draggy, "drag", this.onDrag), this.listenTo(this.draggy, "drop", this.onDrop)
            }, i.prototype.render = function(t) {
                return null == t && (t = {}), t = _.extend({}, typogr, t), this.el.classList.toggle("has-takeaway", t.answer.takeaway), this.el.innerHTML = this.template(t), this.draggy.getOffset(), this.draggy.options.maxY = this.el.offsetHeight
            }, i.prototype.onDrag = function(t, e) {
                return s(t.el, {
                    y: t.y,
                    opacity: 1 - t.y / t.options.maxY / 6,
                    transition: e ? "all 300ms" : "none"
                })
            }, i.prototype.onDrop = function(t, e) {
                return e ? s(t.el, {
                    y: t.y,
                    opacity: 1,
                    transition: "all 300ms"
                }) : t.reset()
            }, i.prototype.toggle = function(t) {
                return t ? this.draggy.unlock() : this.draggy.lock(), r(this.el, "all 300ms " + (t ? 600 : 0) + "ms", !0), s(this.el, {
                    y: t ? 0 : "100%"
                })
            }, i.prototype.undelegateEvents = function() {
                return this.draggy.undelegateEvents(), this.draggy = null, i.__super__.undelegateEvents.apply(this, arguments)
            }, i
        }(Backbone.View), i.exports = o
    }), require.register("views/components/zoom.coffee", function(t, e, i) {
        var n, o, s, r, l = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) l.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("lib/element"), n = e("lib/easie"), s = function(t) {
            function e() {
                return r = e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t), e.prototype.initialize = function(t) {
                var e, i, n, o, s;
                return this.options = t, this.x = this.y = 0, this.getOffset(), null == (e = this.options).minScale && (e.minScale = .5), null == (i = this.options).maxScale && (i.maxScale = 1), null == (n = this.options).buffer && (n.buffer = .1), null == (o = this.options).contentWidth && (o.contentWidth = this.offset.width), null == (s = this.options).contentHeight && (s.contentHeight = this.offset.height), this.velocity = {}, this.scale = this.options.minScale, this.transform()
            }, e.prototype.events = function() {
                return {
                    "touch:gesture": "onGesture",
                    "touch:drag": "onDrag",
                    "touch:dbltap": "onDoubleTap"
                }
            }, e.prototype.transform = function(t) {
                var e, i, n, s, r, l, a, c;
                return c = this.options, a = c.minScale, r = c.maxScale, e = c.buffer, n = Math.max(this.scale, this.options.minScale), i = -(this.options.minScale - n) / n, t && (this.scale = Math.max(Math.min(this.scale, r), a), this.isZoomed = this.scale > a, l = this.options.contentWidth / 2 * this.scale, s = this.options.contentHeight / 2 * this.scale, this.x = Math.max(Math.min(this.x, l), -l), this.y = Math.max(Math.min(this.y, s), -s), this.trigger("zoom", this)), o.transform(this.el.firstChild, {
                    x: this.x * i,
                    y: this.y * i,
                    scale: this.scale,
                    transition: t ? "all 400ms" : "none"
                })
            }, e.prototype.getOffset = function() {
                var t, e, i, n, o, s, r;
                return r = this.el.getBoundingClientRect(), o = r.top, i = r.left, n = r.right, t = r.bottom, s = r.width, e = r.height, this.offset = {
                    top: o,
                    left: i,
                    right: n,
                    bottom: t,
                    width: s,
                    height: e
                }
            }, e.prototype.set = function(t) {
                var e, i, n, o;
                return e = t.scale, n = t.x, o = t.y, i = t.transition, null != e && (this.scale = e), null != n && (this.x = n), null != o && (this.y = o), this.transform(i)
            }, e.prototype.onDoubleTap = function(t) {
                var e, i, n, o, s, r, l;
                return i = t.detail, l = this.options, o = l.minScale, n = l.maxScale, e = l.buffer, s = i.x, r = i.y, this.scale === n ? this.scale = o : this.scale += Math.max((n - o) / 2, .2), this.x = s * this.scale, this.y = r * this.scale, this.transform(!0)
            }, e.prototype.onDrag = function(t) {
                var e, i, o, s, r, l, a, c, d, u, p, h, f, m, v, g, y, b, x, w, _, k = this;
                if (s = t.detail, _ = this.options, f = _.minScale, p = _.maxScale, e = _.buffer, x = s.x, w = s.y, g = s.start, y = s.state, r = x !== g.x || w !== g.y, "down" === y) return window.clearTimeout(this.momentum), this.origin = {
                    x: this.x - x,
                    y: this.y - w
                }, this.history = [];
                if (r) {
                    if (this.x = this.origin.x + x, this.y = this.origin.y + w, this.getVelocity(), "move" === y) return this.transform(!1);
                    if ("up" === y && (this.velocity.x || this.velocity.y)) return b = Date.now(), d = 400, c = 600, m = {
                        x: this.x,
                        y: this.y
                    }, h = this.options.contentWidth / 2 * this.scale, u = this.options.contentHeight / 2 * this.scale, i = this.x - this.velocity.x * this.scale * c, o = this.y - this.velocity.y * this.scale * c, l = Math.max(Math.min(i, h), -h) - m.x, a = Math.max(Math.min(o, u), -u) - m.y, (v = function() {
                        var t;
                        return t = Math.min(Date.now() - b, d), t < d ? (k.x = n.cubicOut(t, m.x, l, d), k.y = n.cubicOut(t, m.y, a, d), k.transform(!1), k.momentum = window.setTimeout(v, 1e3 / 60)) : k.transform(!0)
                    })()
                }
            }, e.prototype.onGesture = function(t) {
                var e, i, n, o, s, r, l, a, c, d, u;
                return i = t.detail, u = this.options, r = u.minScale, o = u.maxScale, e = u.buffer, c = i.x, d = i.y, l = i.scale, a = i.state, "start" === a ? (window.clearTimeout(this.momentum), this.origin = {
                    x: this.x - c,
                    y: this.y - d,
                    scale: this.scale - l
                }) : (this.x = this.origin.x + c, this.y = this.origin.y + d), s = r - e, n = o + e, this.scale = Math.max(Math.min(this.origin.scale + l, n), s), this.transform("end" === a)
            }, e.prototype.getVelocity = function(t) {
                var e, i, n, o, s, r, l;
                return null == t && (t = 200), n = Date.now(), this.history.push({
                    x: this.x,
                    y: this.y,
                    timestamp: n
                }), i = this.history.filter(function(e) {
                    return n - e.timestamp < t
                }), l = function() {
                    var t, s, r, l;
                    for (r = ["x", "y"], l = [], t = 0, s = r.length; t < s; t++) e = r[t], o = i.reduce(function(t, i, n, o) {
                        var s;
                        return s = o[n - 1] || i, t + (s[e] - i[e])
                    }, 0), l.push(o / (n - i[0].timestamp));
                    return l
                }(), s = l[0], r = l[1], this.velocity = {
                    x: s,
                    y: r
                }
            }, e
        }(Backbone.View), i.exports = s
    }), require.register("views/game.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("views/slide"), r = e("models/game/timer"), o = e("models/game/score"), n = function(t) {
            function e() {
                return l = e.__super__.constructor.apply(this, arguments)
            }
            return c(e, t), e.prototype.initialize = function() {
                return e.__super__.initialize.apply(this, arguments), this.el.classList.add("game-slide"), this.createModels()
            }, e.prototype.createModels = function() {
                var t, e, i, n, s, l;
                null == this.game && (this.game = {}), i = {
                    timer: r,
                    score: o,
                    extra: Backbone.Model
                }, l = [];
                for (e in i) t = i[e], null != (s = this.game[e]) && "function" == typeof s.destroy && s.destroy(), n = this.options.data.game[e] || {}, l.push(this.game[e] = new t(n));
                return l
            }, e.prototype.show = function() {
                return this.setState("intro", "game"), this.listenTo(this.game.timer, "change", this.onTimerChange), this.listenTo(this.game.score, "change", this.onScoreChange)
            }, e.prototype.hide = function() {
                var t;
                return this.stopListening(), null != (t = this.game.timer) && t.destroy(), this.trackEvent({
                    category: "Game",
                    action: "Record",
                    label: this.game.score.get("record")
                })
            }, e.prototype.onRefresh = function() {
                return this.createModels(), this.show(), this.preloadMedia()
            }, e.prototype.enterGame = function() {
                var t = this;
                return this.options.data || this.lock(), this.setState("playing", "game"), this.game.score.trigger("reset"), this.game.timer.trigger("reset"), this.game.timer.trigger("count", {
                    callback: function() {
                        return t.startGame()
                    }
                })
            }, e.prototype.startGame = function() {
                var t = this;
                return this.game.timer.trigger("start", {
                    callback: function() {
                        return t.endGame()
                    }
                })
            }, e.prototype.endGame = function() {
                var t = this;
                return this.setState("outro", "game"), window.setTimeout(function() {
                    return t.game.score.trigger("tally", {
                        callback: function() {
                            return t.afterAnimateScores()
                        }
                    })
                }, 0), this.game.timer.trigger("stop")
            }, e.prototype.pauseGame = function() {
                return this.game.timer.set({
                    paused: !0
                })
            }, e.prototype.unpauseGame = function() {
                return this.game.timer.set({
                    paused: !1
                })
            }, e.prototype.togglePaused = function() {
                return this.game.timer.set({
                    paused: !this.game.timer.get("paused")
                })
            }, e.prototype.afterAnimateScores = function() {
                return this.options.data || this.unlock(), this.trackEvent({
                    category: "Game",
                    action: "Score",
                    label: this.game.score.get("total")
                })
            }, e.prototype.onCorrectAnswer = function(t) {
                var e, i, n, o, s, r, l;
                if (l = null != t ? t : {}, n = l.sound, i = l.score, e = l.bonus, s = l.time, o = l.tally, !this.game.timer.get("paused")) return null == s && (s = 0), null == i && (i = 0), null == e && (e = 0), r = this.game.score.get("total"), this.game.timer.setBy({
                    bonus: s
                }), this.game.score.setBy({
                    consecutive: 1,
                    correct: 1
                }), this.game.score.setBy({
                    score: i,
                    bonus: e
                }, {
                    silent: null != o
                }), o ? this.game.score.trigger("tally", {
                    tallyFrom: r,
                    ms: 300
                }) : void 0
            }, e.prototype.onIncorrectAnswer = function(t) {
                var e, i, n, o, s, r, l;
                if (l = null != t ? t : {}, n = l.sound, i = l.score, e = l.bonus, s = l.time, o = l.tally, !this.game.timer.get("paused")) return null == s && (s = 0), null == i && (i = 0), null == e && (e = 0), r = this.game.score.get("total"), this.game.timer.setBy({
                    bonus: -s
                }), this.game.score.set({
                    consecutive: 0
                }), this.game.score.setBy({
                    score: -i,
                    bonus: -e,
                    incorrect: 1
                }, {
                    silent: null != o
                }), o ? this.game.score.trigger("tally", {
                    tallyFrom: r,
                    ms: 300
                }) : void 0
            }, e.prototype.onTimerChange = function(t) {}, e.prototype.onScoreChange = function(t) {}, e.prototype.setArray = function(t, e) {
                var i;
                return _.isString(t) && (i = [e, t], t = i[0], e = i[1]), null == this.data && (this.data = {}), this.data[e] = {
                    current: _.shuffle(t),
                    original: _.clone(t)
                }
            }, e.prototype.getArray = function(t) {
                return this.data[t].original
            }, e.prototype.getRandom = function(t) {
                return 0 === this.data[t].current.length && (this.data[t].current = _.chain(this.data[t].original).without(this.data[t].lastValue).shuffle().value().concat(this.data[t].lastValue)), this.data[t].lastValue = this.data[t].current.shift()
            }, e.prototype.getNext = function(t) {
                return 0 === this.data[t].current.length && (this.data[t].current = this.data[t].original), this.data[t].lastValue = this.data[t].current.shift()
            }, e
        }(s), i.exports = n
    }), require.register("views/main.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c, d, u = {}.hasOwnProperty,
            p = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) u.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        o = e("app"), c = e("templates/main"), s = r = a = null, l = "ontouchstart" in window, n = function(t) {
            function i() {
                return d = i.__super__.constructor.apply(this, arguments)
            }
            return p(i, t), i.prototype.currentClass = "none", i.prototype.views = {}, i.prototype.events = {
                "iostap a[href]": "navigateWithoutDelay",
                "click a[href]": "navigateWithoutDelay",
                mouseleave: "triggerMouseUp",
                touchmove: "onTouchMove"
            }, i.prototype.initialize = function() {
                return this.el.innerHTML = c(), r = this.el.querySelector("#inbound"), a = this.el.querySelector("#outbound"), s = this.el.querySelector("#content"), this.addGestures(), this.classForDeviceVersion(), this.onOrientationChange()
            }, i.prototype.classForDeviceVersion = function() {
                var t, e, i, n;
                i = $.os, n = [];
                for (t in i) e = i[t], e && "boolean" == typeof e && n.push(this.el.classList.add("device-" + t));
                return n
            }, i.prototype.navigateWithoutDelay = function(t) {
                var e = this;
                return t.currentTarget.hash ? window.setTimeout(function() {
                    var i, n;
                    if (!t.currentTarget.hash.match(/slide/) || (null != (i = e.currentView) && null != (n = i.scroller) ? n.enabled : void 0) !== !1) return o.router.navigate(t.currentTarget.hash, !0)
                }, 1) : (null != t && t.preventDefault(), Application.publish("url:open")({
                    url: t.currentTarget.getAttribute("href"),
                    target: "_system"
                }))
            }, i.prototype.display = function(t, e) {
                var i;
                return i = "" + t + "-active", this.currentClass === i ? this.currentView.display(function() {}, e) : (this.el.classList.remove("display", this.currentClass), this.el.classList.add(i), this.currentClass = i, this.transitionViews(t, e))
            }, i.prototype.transitionViews = function(t, i) {
                var n, o, s, l = this;
                for (n = e("./" + t), o = function(t) {
                        return l.afterDisplay(t)
                    }, this.undelegateEvents(), r.removeAttribute("id"), a.removeAttribute("id"), r.id = "outbound", a.id = "inbound", null != this.currentView && (this.currentView.stopListening(), this.currentView.undelegateEvents(), "function" == typeof(s = this.currentView).hide && s.hide()), this.views[t] && this.views[t].cid !== this.currentView.cid ? (this.currentView = this.views[t], this.currentView.display(o, i)) : (this.currentView = new n(i, o), this.currentView.el.classList.add("view"), this.currentView.undelegateEvents(), this.currentView.cache !== !1 && (this.views[t] = this.currentView)), null != i.preventScroll && (this.preventScroll = i.preventScroll), null != i.disableHistory && (this.currentView.disableHistory = i.disableHistory); a.lastChild;) a.removeChild(a.lastChild);
                return a.appendChild(this.currentView.el), window.addEventListener("orientationchange", function() {
                    return l.onOrientationChange()
                })
            }, i.prototype.afterDisplay = function(t) {
                var e = this;
                return window.clearTimeout(this.afterTimeout), this.afterTimeout = window.setTimeout(function() {
                    return e.el.classList.add("display"), t && t(), e.afterTransition()
                }, 10)
            }, i.prototype.afterTransition = function() {
                var t = this;
                return window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() {
                    return t.currentView.delegateEvents(), t.delegateEvents(), t.swapContainers()
                }, 600)
            }, i.prototype.swapContainers = function() {
                var t, e, i;
                for (t = a, e = r, r = t, a = e, i = []; a.lastChild;) i.push(a.removeChild(a.lastChild));
                return i
            }, i.prototype.onOrientationChange = function() {
                return this.el.classList.toggle("device-landscape", window.orientation % 180 !== 0), this.el.classList.toggle("device-portrait", window.orientation % 180 === 0)
            }, i.prototype.triggerMouseUp = function() {
                return this.$el.trigger("mouseup")
            }, i.prototype.onTouchMove = function(t) {
                var e;
                if (e = ".content-sm-scroll, .content-md-scroll, .content-lg-scroll", this.preventScroll && 0 === $(t.target).parents(e).size()) return t.preventDefault()
            }, i.prototype.addGestures = function() {
                var t, e, i, n, o, s, r = this;
                for (n = ["swipe", "gesture", "drag", "tap", "dbltap"], s = [], e = 0, i = n.length; e < i; e++) t = n[e], s.push(null != (o = window.eventjs) ? o.add(this.el, t, function(t, e) {
                    return "tap" === e.gesture ? r.ignoreNextTap ? r.ignoreNextTap = !1 : r.tapTimeout = window.setTimeout(function() {
                        return r.dispatchEvent(t, e)
                    }, 300) : ("dbltap" === e.gesture && (r.ignoreNextTap = !0), r.dispatchEvent(t, e))
                }) : void 0);
                return s
            }, i.prototype.dispatchEvent = function(t, e) {
                var i, n;
                if (window.clearTimeout(this.tapTimeout), e.fingers > 1 ? this.preventDrag = !0 : "down" === e.state && (this.preventDrag = !1), "drag" !== e.gesture || !this.preventDrag) return null != t.target && (this.touchTarget = t.target), n = "touch:" + (e.gesture || e.type), i = new CustomEvent(n, {
                    detail: _.extend({}, t, e),
                    bubbles: !0,
                    cancellable: !0
                }), this.touchTarget.dispatchEvent(i)
            }, i
        }(Backbone.View), i.exports = n
    }), require.register("views/slide.coffee", function(t, e, i) {
        var n, o, s, r, l, a, c = {}.hasOwnProperty,
            d = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) c.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = e("lib/element"), o = e("views/base/slide"), l = e("lib/device"), n = Application.actions().Analytics, r = function(t) {
            function e() {
                return a = e.__super__.constructor.apply(this, arguments)
            }
            return d(e, t), e.prototype.initialize = function(t) {
                return this.options = t, this.transform = s.transform, this.transition = s.transition, this.getBounds = s.getBounds, s
            }, e.prototype.lock = function(t, e) {
                return this.options.lock(t, e)
            }, e.prototype.unlock = function() {
                return this.options.unlock()
            }, e.prototype.next = function(t) {
                return this.options.next(_.isNumber(t) ? t : void 0)
            }, e.prototype.prev = function(t) {
                return this.options.prev(_.isNumber(t) ? t : void 0)
            }, e.prototype.trackEvent = function(t) {
                var e, i, o, s;
                return i = t.category, e = t.action, o = t.label, s = t.value, this.getTrackingTitle() && (i += " - " + this.getTrackingTitle()), n.trackEvent(i, e, o, s)
            }, e.prototype.trackOnce = function(t) {
                var e, i, n, o, s;
                if (i = t.category, e = t.action, o = t.label, s = t.value, null == this.tracked && (this.tracked = {}), n = "" + i + " - " + e, !this.tracked[n]) return this.trackEvent({
                    category: i,
                    action: e,
                    label: o,
                    value: s
                }), this.tracked[n] = o
            }, e.prototype.trackSetOnce = function(t) {
                var e, i, n, o;
                if (!(t.length < 0) && _.isObject(t[0]) && (null == this.tracked && (this.tracked = {}), i = "" + t[0].category + " - " + t[0].action, !this.tracked[i])) {
                    for (n = 0, o = t.length; n < o; n++) e = t[n], this.trackEvent(e);
                    return this.tracked[i] = t[0].label
                }
            }, e.prototype.getTrackingTitle = function() {
                return this.el.dataset.title || this.el.id
            }, e.prototype.setState = function(t, e) {
                return null == e && (e = "state"), null == this.currentState && (this.currentState = {}), "touched" === t && "narration" === this.currentState[e] ? this.hasInteracted = !0 : (this.el.classList.remove("" + e + "-" + this.currentState[e]), t !== !1 ? this.el.classList.add("" + e + "-" + (this.currentState[e] = t)) : void 0)
            }, e.prototype.setEl = function(t, e) {
                return null == this.elements && (this.elements = {}), this.elements[e] = t || document.createElement("div")
            }, e.prototype.getEl = function(t) {
                var e;
                return null != (e = this.elements) ? e[t] : void 0
            }, e.prototype.render = function(t, e) {
                var i, n, o, s = this;
                if (i = _.extend(this.serialize(e)), this.el.innerHTML = "function" == typeof(n = this.template || (null != (o = this.templates) ? o["default"] : void 0)) ? n(i) : void 0, this.ignoreStateOnRefresh || this.setState("prompt"), this.setEl(this.el.querySelector(".narration-progress-bar"), "narration-progress"), l.ios) return window.setTimeout(function() {
                    return s.preloadMedia()
                }, 400)
            }, e.prototype.preloadMedia = function() {
                var t, e, i, n, o, s;
                for (e = function(t) {
                        return t.target.removeEventListener("timeupdate", e, !1), t.target.pause(), t.target.volume = 1
                    }, o = this.el.querySelectorAll(".multi-content"), s = [], i = 0, n = o.length; i < n; i++) t = o[i], t.getAttribute("webkit-playsinline") ? ("AUDIO" === t.nodeName && (t.volume = 0, t.addEventListener("timeupdate", e, !1)), t.play(), "VIDEO" === t.nodeName ? s.push(t.pause()) : s.push(void 0)) : s.push(void 0);
                return s
            }, e.prototype.stopMedia = function() {
                var t, e, i, n, o, s, r, l, a;
                for (r = this.el.querySelectorAll("audio, video"), i = 0, o = r.length; i < o; i++) e = r[i], e.paused || e.pause();
                for (l = this.el.querySelectorAll("iframe"), a = [], n = 0, s = l.length; n < s; n++) t = l[n], a.push(t.parentNode.removeChild(t));
                return a
            }, e.prototype.serialize = function(t, e, i) {
                var n, o, s, r, l;
                return null == t && (t = {}), n = {
                    width: this.el.offsetWidth,
                    height: this.el.offsetHeight,
                    hasPrompt: null != (null != (o = this.options.data) ? o.prompt : void 0) && null != (null != (s = this.options.data) ? s.answer : void 0),
                    hasNarration: null != (r = this.options.data) && null != (l = r.narration) ? l.audio_file : void 0,
                    config: t
                }, _.extend(n, this.options.data)
            }, e.prototype.onRefresh = function() {
                return "function" == typeof this.show ? this.show() : void 0
            }, e.prototype.onNarrationProgress = function(t) {
                var e, i;
                return e = 0 === t ? 0 : Date.now() - this.narrationTimestamp, this.transform(this.getEl("narration-progress"), {
                    scale: "" + t + ", 1",
                    transition: "transform " + e + "ms linear"
                }), null != (i = this.getEl("narration-progress")) && i.offsetLeft, this.narrationTimestamp = Date.now()
            }, e.prototype.onNarrationComplete = function() {
                return this.hasInteracted ? (delete this.hasInteracted, this.setState(""), this.setState("touched")) : "narration" === this.currentState.state ? this.setState("prompt") : void 0
            }, e
        }(o), i.exports = r
    }), require.register("views/slides.coffee", function(t, e, i) {
        var n, o, s, r, l, a = {}.hasOwnProperty,
            c = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            d = [].slice;
        s = e("app"), r = e("lib/device").events, n = e("views/base/slides"), o = function(t) {
            function i() {
                return l = i.__super__.constructor.apply(this, arguments)
            }
            return c(i, t), i.prototype.id = "slides-view", i.prototype.template = e("templates/slides"), i.prototype.initialize = function() {
                var t = this;
                return i.__super__.initialize.apply(this, arguments), window.addEventListener(r.resize, function() {
                    return t.onResize()
                })
            }, i.prototype.render = function(t) {
                var e, i = this;
                return this.el.innerHTML = this.template(t), this.options = this.getExtraConfig(t), this.createSlideViews(), e = this.cleanIndex(t.index), this.options.title && (document.title = this.options.title), this.sizeContent(t.forceResize), window.setTimeout(function() {
                    return i.createScroller(t), i.goToPage(e, 0), window.setTimeout(function() {
                        return i.slideViews[0].trigger("resize")
                    }, 800)
                }, 1), Backbone.trigger("ready")
            }, i.prototype.display = function(t, e) {
                var i;
                return i = this.cleanIndex(e.index), i <= this.currentIndex && this.options.config.webAccess ? (s.router.navigate("slide/" + (this.currentIndex + 1)), void t()) : (this.currentIndex !== i && (this.toggleViewInDOM(this.slideViews[i], !0), this.slideViews[i].el.offsetWidth, this.goToPage(i, e.ms)), t())
            }, i.prototype.removeScroller = function() {
                return this.scroller.off("scrollEnd"), this.scroller.destroy()
            }, i.prototype.createScroller = function(t) {
                var e, i, n, o = this;
                if ((null != (i = this.options) && null != (n = i.config) ? n.fade : void 0) ? this.scroller = {
                        currentPage: {
                            pageX: 0
                        },
                        scroller: this.el.querySelector("#slides-scroller"),
                        goToPage: function(t) {
                            var e;
                            return e = o.scroller.currentPage.pageX, o.scroller.currentPage.pageX = t, o.onScrollEnd()
                        }
                    } : (null != this.scroller && this.removeScroller(), e = [], this.options.config.background && e.push({
                        el: "#slides-background-wrap",
                        resize: !1,
                        shrink: "clip",
                        listenY: !1,
                        speedRatioX: 1 / (this.slideViews.length - 1) * .5,
                        ignoreBoundaries: !0
                    }), this.options.config.indicator && e.push({
                        el: "#indicator",
                        resize: !0,
                        shrink: "clip",
                        listenY: !1,
                        ignoreBoundaries: !0
                    }), this.scroller = new IScroll(this.el.querySelector("#slides"), {
                        scrollX: !0,
                        scrollY: !1,
                        snap: !0,
                        tap: "scrolltap",
                        snapThreshold: .15,
                        momentum: !1,
                        resizePolling: 300,
                        eventPassthrough: !0,
                        indicators: e,
                        preventDefaultException: {
                            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|IFRAME)$/
                        }
                    }), this.scroller.on("scrollEnd", function() {
                        return o.onScrollEnd()
                    }), this.options.config.locked && this.toggleScroller(!1)), this.options.config.pagination && (this.pagination = this.el.querySelector("#pagination")), this.options.config.pageNumbers) return this.pageNumber = this.el.querySelector("#page-number")
            }, i.prototype.optionsForView = function(t, e) {
                var i = this;
                return null == e && (e = {}), _.extend({}, e, {
                    el: t,
                    lock: function() {
                        return i.toggleScroller.apply(i, [!1].concat(d.call(arguments)))
                    },
                    unlock: function() {
                        return i.toggleScroller(!0)
                    },
                    next: function(t) {
                        return i.goToPage(i.currentIndex + 1, t)
                    },
                    prev: function(t) {
                        return i.goToPage(i.currentIndex - 1, t)
                    }
                })
            }, i.prototype.goToPage = function(t, e) {
                var i, n, o, s, r, l, a;
                if (null == e && (e = 600), (t !== this.currentIndex || null != this.currentIndex) && 0 <= t && t < this.slideViews.length) {
                    if (s = this.slideViews[this.currentIndex], o = this.slideViews[t], this.trigger.apply(this, ["goToPage"].concat(d.call(arguments))), null != s && "function" == typeof s.beforeHide && s.beforeHide(), o.render({}, this.options.config), "function" == typeof o.beforeShow && o.beforeShow(), !(null != this.scroller && this.slideViews.length > 1)) return this.onScrollEnd();
                    if (l = this.scroller, r = l.wrapperWidth, i = l.maxScrollX, n = l.minScrollX, this.options.config.locked || n > (a = -t * r) && a > i || this.toggleScroller(!0), this.scroller.goToPage(t, 0, e), 0 === e) return this.onScrollEnd()
                }
            }, i.prototype.cleanIndex = function(t) {
                var e, i;
                return _.isNaN(+t) ? function() {
                    var n, o, s, r, l;
                    for (s = this.slideViews, l = [], e = n = 0, o = s.length; n < o; e = ++n) i = s[e], (null != (r = i.el) ? r.id : void 0) === t && l.push(e);
                    return l
                }.call(this)[0] || 0 : _.limit(t - 1, 0, this.slideViews.length - 1)
            }, i.prototype.onScrollEnd = function() {
                var t, e, i, n, o, r, l, a, c, d, u;
                if (t = +(null != (l = this.scroller) && null != (a = l.currentPage) ? a.pageX : void 0), !_.isNaN(t) && t !== this.currentIndex) {
                    for (c = this.slideViews, i = o = 0, r = c.length; o < r; i = ++o) n = c[i], this.options.config.fade ? (n.el.style.opacity = i === t ? 1 : 0, n.transition(n.el, "opacity 300ms"), e = i === t || i === this.currentIndex) : e = i - 1 <= t && t <= i + 1, this.toggleViewInDOM(n, e), null != (d = this.pagination) && d.children[i].classList.toggle("active", t === i), null != (u = this.pageNumber) && (u.innerHTML = t + 1);
                    if (null != this.currentIndex && this.hideView(this.slideViews[this.currentIndex]), this.showView(this.slideViews[t]), this.currentIndex = t, null == this.disableHistory) return s.router.navigate("slide/" + (t + 1), !0)
                }
            }, i.prototype.onResize = function() {
                var t = this;
                return window.clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(function() {
                    var e;
                    return t.sizeContent(!0), null != (e = t.scroller) && "function" == typeof e.refresh ? e.refresh() : void 0
                }, 100)
            }, i.prototype.toggleViewInDOM = function(t, e) {
                if (t.__isActive !== e) {
                    if (t.__isActive = e, e && t.el.parentNode !== this.scroller.scroller) return this.scroller.scroller.appendChild(t.el);
                    if (!e && t.el.parentNode === this.scroller.scroller) return this.scroller.scroller.removeChild(t.el)
                }
            }, i.prototype.hideView = function(t) {
                return t.el.classList.remove("active"), "function" == typeof t.undelegateEvents && t.undelegateEvents(), t.stopMedia(), "function" == typeof t.hide ? t.hide() : void 0
            }, i.prototype.showView = function(t) {
                return t.el.offsetWidth, t.el.classList.add("active"), "function" == typeof t.delegateEvents && t.delegateEvents(), "function" == typeof t.show && t.show(), this.trigger("showView", t)
            }, i.prototype.toggleScroller = function(t, e, i) {
                var n, o, s, r;
                if (null == i && (i = !0), !this.options.config.fade) switch (s = this.scroller, o = s.wrapperWidth, r = s.currentPage, n = r.pageX, e) {
                    case "left":
                    case "l":
                        return this.scroller.minScrollX = -o * n, this.scroller.options.bounce = i;
                    case "right":
                    case "r":
                        return this.scroller.maxScrollX = -o * n, this.scroller.options.bounce = i;
                    default:
                        return this.scroller.options.bounce = i, this.scroller.refresh(), this.scroller.enabled = t
                }
            }, i.prototype.sizeContent = function(t) {
                var e, i, n, o, s, r, l, a, c, d, u, p;
                if (null == t && (t = !1), (null != (c = this.scroller) ? c.wrapperWidth : void 0) !== this.el.offsetWidth || t) {
                    if (o = this.el.offsetWidth, this.options.config.fade)
                        for (d = this.slideViews, i = s = 0, l = d.length; s < l; i = ++s) n = d[i], n.el.style.width = o + "px";
                    else
                        for (e = this.el.querySelector("#slides-scroller"), e.style.width = o * this.slideViews.length + "px", u = this.slideViews, i = r = 0, a = u.length; r < a; i = ++r) n = u[i], n.el.style.width = o + "px", n.el.style.left = o * i + "px";
                    return (null != this.scroller || 1 === this.slideViews.length) && null != (p = this.slideViews[this.currentIndex]) ? p.trigger("resize", {
                        width: o
                    }) : void 0
                }
            }, i.prototype.stopListening = function() {
                var t = this;
                return window.removeEventListener(resizeEvt, function() {
                    return t.onResize()
                }), i.__super__.stopListening.apply(this, arguments)
            }, i
        }(n), i.exports = o
    }), require.register("views/video.coffee", function(t, e, i) {
        var n, o, s, r = {}.hasOwnProperty,
            l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = e("views/slide"), o = function(t) {
            function e() {
                return s = e.__super__.constructor.apply(this, arguments)
            }
            return l(e, t), e.prototype.events = function() {
                return {
                    "iostap .video": "toggleVideo",
                    "iostap .video-play": "playVideo",
                    "iostap .video-replay": "restartVideo",
                    "iostap .btn-done": "next"
                }
            }, e.prototype.render = function() {
                var t, i, n, o, s;
                for (this.unbindVideoEvents(), e.__super__.render.apply(this, arguments), this.initializeVideo(), this.listeners = {}, this.setState("loading", "video"), o = ["load", "timeupdate", "error"], s = [], i = 0, n = o.length; i < n; i++) t = o[i], this.listeners[t] = _.bind(this["onVideo" + _.capitalize(t)], this), s.push(this.getEl("video").addEventListener(t, this.listeners[t]));
                return s
            }, e.prototype.initializeVideo = function() {
                var t;
                return t = this.el.querySelector(".video"), this.setEl(t, "video")
            }, e.prototype.onVideoLoad = function() {
                return this.getEl("video").pause(), this.setState("paused", "video")
            }, e.prototype.onVideoError = function() {
                return this.setState("error", "video")
            }, e.prototype.onVideoTimeupdate = function() {
                if (this.getEl("video").currentTime === this.getEl("video").duration && this.getEl("video").ended) return this.onVideoEnd()
            }, e.prototype.toggleVideo = function() {
                return this.getEl("video").paused ? this.playVideo() : this.stopVideo()
            }, e.prototype.playVideo = function() {
                if ("error" !== this.currentState.video) return this.setState("playing", "video"), this.getEl("video").ended && this.getEl("video").load(), this.getEl("video").play(), this.trackEvent({
                    category: "Video",
                    action: "Play",
                    label: this.getVideoName()
                })
            }, e.prototype.stopVideo = function() {
                var t = this;
                if ("error" !== this.currentState.video) return this.getEl("video").pause(), this.trackEvent({
                    category: "Video",
                    action: "Pause",
                    label: this.getVideoName()
                }), window.setTimeout(function() {
                    return t.setState("paused", "video")
                }, 1)
            }, e.prototype.restartVideo = function() {
                return this.getEl("video").ended ? this.getEl("video").load() : this.getEl("video").currentTime = 0, this.playVideo()
            }, e.prototype.onVideoEnd = function() {
                return this.setState("paused", "video")
            }, e.prototype.getVideoName = function() {
                return this.getEl("video").src.split("/").slice(-1)[0]
            }, e.prototype.hide = function() {
                return this.getEl("video").pause(), this.onVideoEnd(), this.unbindVideoEvents()
            }, e.prototype.unbindVideoEvents = function() {
                var t, e, i;
                i = [];
                for (t in this.listeners) i.push(null != (e = this.getEl("video")) ? e.removeEventListener(t, this.listeners[t]) : void 0);
                return i
            }, e
        }(n), i.exports = o
    }), require.register("___globals___", function(t, e, i) {})
}(),

require("___globals___");