!function (t) { var e = {}; function n(o) { if (e[o]) return e[o].exports; var i = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports } n.m = t, n.c = e, n.d = function (t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) { return t[e] }.bind(null, i)); return o }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 3) }([function (t, e, n) { }, function (t, e, n) { t.exports = n.p + "favicon.ico" }, function (t, e) { !function (t, e) { "use strict"; if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", { get: function () { return this.intersectionRatio > 0 } }); else { var n = []; i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.USE_MUTATION_OBSERVER = !0, i.prototype.observe = function (t) { if (!this._observationTargets.some(function (e) { return e.element == t })) { if (!t || 1 != t.nodeType) throw new Error("target must be an Element"); this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections(), this._checkForIntersections() } }, i.prototype.unobserve = function (t) { this._observationTargets = this._observationTargets.filter(function (e) { return e.element != t }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance()) }, i.prototype.disconnect = function () { this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance() }, i.prototype.takeRecords = function () { var t = this._queuedEntries.slice(); return this._queuedEntries = [], t }, i.prototype._initThresholds = function (t) { var e = t || [0]; return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, n) { if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively"); return t !== n[e - 1] }) }, i.prototype._parseRootMargin = function (t) { var e = (t || "0px").split(/\s+/).map(function (t) { var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t); if (!e) throw new Error("rootMargin must be specified in pixels or percent"); return { value: parseFloat(e[1]), unit: e[2] } }); return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e }, i.prototype._monitorIntersections = function () { this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(t, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })))) }, i.prototype._unmonitorIntersections = function () { this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null)) }, i.prototype._checkForIntersections = function () { var e = this._rootIsInDom(), n = e ? this._getRootRect() : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }; this._observationTargets.forEach(function (i) { var r = i.element, s = a(r), c = this._rootContainsTarget(r), l = i.entry, d = e && c && this._computeTargetAndRootIntersection(r, n), u = i.entry = new o({ time: t.performance && performance.now && performance.now(), target: r, boundingClientRect: s, rootBounds: n, intersectionRect: d }); l ? e && c ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u) }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this) }, i.prototype._computeTargetAndRootIntersection = function (n, o) { if ("none" != t.getComputedStyle(n).display) { for (var i, r, s, c, d, u, h, f, m = a(n), p = l(n), g = !1; !g;) { var v = null, _ = 1 == p.nodeType ? t.getComputedStyle(p) : {}; if ("none" == _.display) return; if (p == this.root || p == e ? (g = !0, v = o) : p != e.body && p != e.documentElement && "visible" != _.overflow && (v = a(p)), v && (i = v, r = m, s = void 0, c = void 0, d = void 0, u = void 0, h = void 0, f = void 0, s = Math.max(i.top, r.top), c = Math.min(i.bottom, r.bottom), d = Math.max(i.left, r.left), u = Math.min(i.right, r.right), f = c - s, !(m = (h = u - d) >= 0 && f >= 0 && { top: s, bottom: c, left: d, right: u, width: h, height: f }))) break; p = l(p) } return m } }, i.prototype._getRootRect = function () { var t; if (this.root) t = a(this.root); else { var n = e.documentElement, o = e.body; t = { top: 0, left: 0, right: n.clientWidth || o.clientWidth, width: n.clientWidth || o.clientWidth, bottom: n.clientHeight || o.clientHeight, height: n.clientHeight || o.clientHeight } } return this._expandRectByRootMargin(t) }, i.prototype._expandRectByRootMargin = function (t) { var e = this._rootMarginValues.map(function (e, n) { return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100 }), n = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] }; return n.width = n.right - n.left, n.height = n.bottom - n.top, n }, i.prototype._hasCrossedThreshold = function (t, e) { var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, o = e.isIntersecting ? e.intersectionRatio || 0 : -1; if (n !== o) for (var i = 0; i < this.thresholds.length; i++) { var r = this.thresholds[i]; if (r == n || r == o || r < n != r < o) return !0 } }, i.prototype._rootIsInDom = function () { return !this.root || c(e, this.root) }, i.prototype._rootContainsTarget = function (t) { return c(this.root || e, t) }, i.prototype._registerInstance = function () { n.indexOf(this) < 0 && n.push(this) }, i.prototype._unregisterInstance = function () { var t = n.indexOf(this); -1 != t && n.splice(t, 1) }, t.IntersectionObserver = i, t.IntersectionObserverEntry = o } function o(t) { this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }, this.isIntersecting = !!t.intersectionRect; var e = this.boundingClientRect, n = e.width * e.height, o = this.intersectionRect, i = o.width * o.height; this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0 } function i(t, e) { var n, o, i, r = e || {}; if ("function" != typeof t) throw new Error("callback must be a function"); if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element"); this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, i = null, function () { i || (i = setTimeout(function () { n(), i = null }, o)) }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function (t) { return t.value + t.unit }).join(" ") } function r(t, e, n, o) { "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n) } function s(t, e, n, o) { "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n) } function a(t) { var e; try { e = t.getBoundingClientRect() } catch (t) { } return e ? (e.width && e.height || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e) : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } function c(t, e) { for (var n = e; n;) { if (n == t) return !0; n = l(n) } return !1 } function l(t) { var e = t.parentNode; return e && 11 == e.nodeType && e.host ? e.host : e } }(window, document) }, function (t, e, n) { "use strict"; n.r(e); n(0), n(1); function o(t) { return function (t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n } }(t) || function (t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } var i = function (t) { return t.charAt(0).toUpperCase() + t.slice(1) }, r = o([{ firstname: "camila", lastname: "lamarca", backgroundPosition: "center", desktopSize: "55%" }, { firstname: "carolina", lastname: "zancolli", backgroundPosition: "50% 30%", desktopSize: "50%" }, { firstname: "claudia", lastname: "cortinez", backgroundPosition: "center", desktopSize: "50%" }, { firstname: "florencia", lastname: "walter", backgroundPosition: "center", desktopSize: "60%" }, { firstname: "samuel", lastname: "lasso", backgroundPosition: "60% 70%", desktopSize: "60%" }, { firstname: "sol", lastname: "pochat", backgroundPosition: "center", desktopSize: "60%" }]).sort(function () { return Math.random() - .5 }); n(2); var s, a, c, l, d, u, h, f, m = .01 * window.innerHeight; document.documentElement.style.setProperty("--vh", "".concat(m, "px")), window.addEventListener("resize", function () { var t = .01 * window.innerHeight; document.documentElement.style.setProperty("--vh", "".concat(t, "px")) }), s = "", a = "", c = "", l = "", d = document.querySelector(".slider__content"), u = document.querySelector(".artist"), h = document.querySelector(".nav"), f = document.querySelector(".info__artists"), r.forEach(function (t, e) { s += '<div id="slide'.concat(e, '" data-id="').concat(e, '" class="slide ').concat(0 == e ? "show-slide" : "", '">\n                    <div class="slide__img" style="background-image:url(\'../hilo/img/').concat(t.firstname, " ").concat(t.lastname, '.png\');">\n                        <div class="slide__img slide__img--desktop" style="background-image:url(\'../hilo/img/').concat(t.firstname, " ").concat(t.lastname, ".png') !important;width:").concat(t.desktopSize, ';">\n                        </div>\n                    </div>\n                    <a href="../hilo/assets/').concat(i(t.firstname), " ").concat(i(t.lastname), '.pdf" class="slide__artist slide__artist--mobile" download>\n                        ').concat(t.firstname.toUpperCase(), " ").concat(t.lastname.toUpperCase(), '\n                    </a>\n                    <a href="../hilo/assets/').concat(i(t.firstname), " ").concat(i(t.lastname), '.pdf" class="slide__portfolio slide__portfolio--mobile" download>\n                        Portfolio\n                    </a>\n                </div > '), a += "<div class='artist__item' id='artist".concat(e, "'>\n                        <a href=\"../hilo/assets/").concat(i(t.firstname), " ").concat(i(t.lastname), '.pdf" class="artist__name" download>\n                        ').concat(t.firstname.toUpperCase(), " ").concat(t.lastname.toUpperCase(), '\n                        </a>\n                        <a href="../hilo/assets/').concat(i(t.firstname), " ").concat(i(t.lastname), '.pdf" class="artist__portfolio" download>\n                            Portfolio\n                        </a>\n                    </div>'), c += "<a href='#slide".concat(e, "' class='nav__item'>\n                        ").concat(i(t.lastname), "\n                   </a>"), l += '<a href="../hilo/assets/'.concat(i(t.firstname), " ").concat(i(t.lastname), '.pdf" class="info__second-page-text" download>\n                        ').concat(i(t.firstname), " ").concat(i(t.lastname), "\n                    </a>") }), d.innerHTML = s, u.innerHTML = a, h.innerHTML = c, f.innerHTML = '<h2 class="info__header">\n                            artists\n                        </h2>\n                        '.concat(l), window.addEventListener("load", function () { var t, e = document.querySelectorAll(".logo__wrapper"), n = document.querySelector(".container"), o = document.querySelector(".slider__content"), i = document.querySelector(".slider"), s = document.querySelectorAll(".slide"), a = document.querySelector(".d__cube"), c = (document.querySelector(".d__cube-face--back"), document.querySelector(".slider__wrapper")), l = 0, d = document.querySelector(".container__background--1"), u = document.querySelector(".container__background--2"), h = document.querySelector(".container__background--3"), f = document.querySelector(".intro"), m = document.querySelectorAll(".nav__item"), p = !0, g = document.querySelectorAll(".artist__item"), v = !1, _ = window.matchMedia("(max-width: 1024px),(min-device-width: 1024px) and (max-device-width: 1024px)\n    ,(device-width: 1366px) and (device-height: 1024px) "); function y() { f.style.animation = "initial", document.documentElement.style.setProperty("--edge-width", "5px"), f.removeEventListener("animationend", y) } function b() { clearInterval(t), o.classList.add("slider--slides-visible"), window.removeEventListener("click", b), window.removeEventListener("touchstart", b), o.removeEventListener("wheel", b) } function w(t) { m.forEach(function (t) { return t.classList.remove("scrolled") }), t.classList.add("scrolled") } !function () { if (_.matches) document.querySelector(".show-slide").style.animation = "initial", f.style.animation = "initial", h.style.animation = "initial", document.documentElement.style.setProperty("--edge-width", "5px"), k(); else { f.addEventListener("animationend", y); var t = document.querySelector(".show-slide"); t.addEventListener("animationend", function () { t.style.animation = "initial", L(0), k(), setTimeout(function () { i.classList.add("slider--big"), a.classList.add("d__cube--big") }, 2850) }) } window.addEventListener("click", b), window.addEventListener("touchstart", b), o.addEventListener("wheel", b) }(), e.forEach(function (t) { return t.addEventListener("click", function (t) { return n.classList.toggle("show-info") }) }), m.forEach(function (t) { t.addEventListener("click", function (e) { if (TweenLite) { e.preventDefault(); var n = parseInt(t.href.split("#slide")[1]), i = o.clientHeight * n; v = !0, TweenLite.to(o, 1, { scrollTo: i, onComplete: function () { return v = !1 } }), w(t) } }) }); var E = new IntersectionObserver(function (t, e) { t.forEach(function (t) { var e = g[parseInt(t.target.dataset.id)]; if (t.intersectionRatio >= .6) { g.forEach(function (t) { t.style.zIndex = "-1", t.style.opacity = "0" }), e.style.zIndex = "1", e.style.opacity = "1", l = parseInt(t.target.dataset.id); var n = s[l]; if (!n.classList.contains("show-slide")) document.querySelector(".show-slide").classList.remove("show-slide"), n.classList.add("show-slide"), setTimeout(L, 850, l); if (!v) w(document.querySelector("[href='#slide".concat(l, "']"))) } }) }, { threshold: .6 }); function I(t) { var e = document.querySelector(".show-slide"), n = parseInt(e.dataset.id); if (e) { var i = n > 0 ? n - 1 : s.length - 1, r = s[i]; e.classList.remove("show-slide"), TweenLite && TweenLite.to(o, 0, { scrollTo: o.clientHeight * i }), r.classList.add("show-slide"), setTimeout(L, 850, i) } } function T(t) { var e = document.querySelector(".show-slide"), n = parseInt(e.dataset.id); if (e) { var i = n < s.length - 1 ? n + 1 : 0, r = s[i]; e.classList.remove("show-slide"), TweenLite && setTimeout(function () { TweenLite.to(o, 0, { scrollTo: o.clientHeight * i }) }, 850), r.classList.add("show-slide"), setTimeout(L, 850, i) } } function L(t) { var e = r[t], n = "url('../hilo/img/".concat(e.firstname, " ").concat(e.lastname, ".png')"); p ? (u.style.backgroundImage = n, u.style.backgroundPosition = e.backgroundPosition, d.style.opacity = "0", u.style.opacity = "1") : (d.style.backgroundImage = n, d.style.backgroundPosition = e.backgroundPosition, d.style.opacity = "1", u.style.opacity = "0"), p = !p } function k() { t = setInterval(function () { T() }, 4e3) } function S() { clearInterval(t) } function R() { i.classList.toggle("slider--big"), a.classList.toggle("d__cube--big") } s.forEach(function (t) { return E.observe(t) }), c.addEventListener("click", R), window.addEventListener("keydown", function (t) { if (!t.defaultPrevented) { switch (t.key) { case "Up": I(), S(); case "ArrowUp": I(), S(); break; case "Down": T(), S(); case "ArrowDown": T(), S(); break; case " ": R(), S(); break; case "Esc": S(), R(); case "Escape": S(), R(); break; default: return }event.preventDefault() } }, !0) }) }]);
//# sourceMappingURL=script.js.map