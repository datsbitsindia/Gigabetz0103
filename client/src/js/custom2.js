"use strict";
(function (global) {
    function _ss() {
        function importMetadata() {
            for (var e = 0; e < _meta.length; ++e) _meta[e]();
        }
        function registerMetadataImporter(e) {
            _meta.push(e);
        }
        function dependency(e) {
            return _modules[e] != null ? _modules[e] : window[e];
        }
        function createType(e, t, n) {
            if (Array.isArray(t)) {
                var r = t[0],
                    i = t[1];
                return (i.$name = e), (i.$prototypeDescription = t[2]), (n[e] = i);
            }
            return t.constructor === Enum ? (n[e] = t) : t;
        }
        function setConstructorParams(e, t) {
            typeof t.$constructorParams == "function" && (t.$constructorParams = t.$constructorParams(e));
        }
        function setInheritance(e, t, n, r) {
            var i = (r && !r.$type && r(e)) || Object;
            if (i) {
                var s = function () {};
                (s.prototype = i.prototype), (t.prototype = new s()), (t.prototype.constructor = t);
            }
            n && extendType(t.prototype, n), (t.$base = i);
        }
        function defineClass(e, t, n, r, i) {
            return (e.$type = _classMarker), (e.$constructorParams = n), (e.$interfaces = i), [_classMarker, e, t, r];
        }
        function defineInterface(e, t) {
            return (e.$type = _interfaceMarker), (e.$interfaces = t), [_interfaceMarker, e];
        }
        function isClass(e) {
            return e.$type === _classMarker;
        }
        function isInterface(e) {
            return e.$type === _interfaceMarker;
        }
        function typeOf(e) {
            var t;
            try {
                t = e.constructor;
            } catch (n) {}
            return t || Object;
        }
        function type(e) {
            var t = e.indexOf("."),
                n = t > 0 ? _modules[e.substr(0, t)] : self,
                r = t > 0 ? e.substr(t + 1) : e;
            return n ? n[r] : null;
        }
        function typeName(e) {
            e instanceof Function || (e = e.constructor);
            if (e.$name) return e.$name;
            if (e.name) return e.name;
            for (var t = 0, n = _typeNames.length; t < n; t += 2) if (e === _typeNames[t]) return _typeNames[t + 1];
            return "Object";
        }
        function canAssign(e, t) {
            if (e === Object || e === t) return !0;
            if (t !== Date || (e !== IEquatable_$1 && e != IComparable_$1)) {
                if (t !== Array || (e !== IList && e != IList_$1)) {
                    if (e.$type === _classMarker) {
                        var n = t.$base;
                        while (n) {
                            if (e === n) return !0;
                            n = n.$base;
                        }
                    } else if (e.$type === _interfaceMarker) {
                        var n = t;
                        while (n) {
                            if (interfaceOf(n, e)) return !0;
                            n = n.$base;
                        }
                    }
                    return !1;
                }
                return !0;
            }
            return !0;
        }
        function interfaceOf(e, t) {
            if (e === t || e.$name === t.$name) return !0;
            var n = e.$interfaces;
            if (n) for (var r = 0, i = n.length; r < i; ++r) if (interfaceOf(n[r], t)) return !0;
            return !1;
        }
        function instanceOf(e, t) {
            if (!isValue(t)) return !1;
            if (e === Object || t instanceof e) return !0;
            var n = typeOf(t);
            return canAssign(e, n);
        }
        function canCast(e, t) {
            return instanceOf(t, e);
        }
        function safeCast(e, t) {
            return instanceOf(t, e) ? e : null;
        }
        function module(e, t, n) {
            var r = (_modules[e] = { $name: e }),
                i = {},
                s = [];
            if (n)
                for (var o in n) {
                    var u = createType(o, n[o], r);
                    u.$type == _classMarker && s.push([u, n[o][2], n[o][3]]), (i[o] = u);
                }
            if (t)
                for (var o in t) {
                    var u = createType(o, t[o], r);
                    u.$type == _classMarker && s.push([u, t[o][2], t[o][3]]);
                }
            for (var a = 0; a < s.length; ++a) {
                var f = s[a];
                setInheritance(r, f[0], f[1], f[2]);
            }
            for (var a = 0; a < s.length; ++a) {
                var f = s[a];
                setConstructorParams(r, f[0]);
            }
            return { registry: r, api: i };
        }
        function baseProperty(e, t) {
            var n = e.$base;
            return Object.getOwnPropertyDescriptor(n.prototype, t) || baseProperty(n, t);
        }
        function getConstructorParams(e) {
            return e.$constructorParams;
        }
        function createInstance(e, t) {
            var n = e.prototype,
                r = Object.create(n);
            return n.constructor.apply(r, t), r;
        }
        function getMembers(e) {
            return e ? [].concat(e.$members || [], getMembers(e.$base), getInterfaceMembers(e.$interfaces)) : [];
        }
        function getInterfaceMembers(e) {
            var t = [];
            if (e) for (var n = 0, r = e.length; n < r; ++n) t = t.concat(getMembers(e[n]));
            return t;
        }
        function copyArray(e, t, n, r, i) {
            function o(e, t) {
                return t >= 0 && t < e.length;
            }
            if (!Array.isArray(e) || !Array.isArray(n)) return;
            if (!o(e, t) || !o(n, r) || r + i > n.length || i > e.length - t) return;
            for (var s = 0; s < i; r++, t++, s++) n[r] = e[t];
        }
        function createFallbackFunction(e, t) {
            return function (n) {
                return typeof n[e] == "function" ? n[e].apply(n, Array.prototype.splice.call(arguments, 1)) : t.apply(null, arguments);
            };
        }
        function toArray(e) {
            return e ? (typeof e == "string" ? JSON.parse("(" + e + ")") : Array.prototype.slice.call(e)) : null;
        }
        function getRange(e, t, n) {
            return e.slice(t, n);
        }
        function clearKeys(e) {
            for (var t in e) delete e[t];
        }
        function keyExists(e, t) {
            return e[t] !== undefined;
        }
        function keyValueExists(e, t) {
            return e[t.key] === t.value;
        }
        function addKeyValue(e, t, n) {
            return (e[t] = n);
        }
        function keys(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            for (var n in e) t.push(n);
            return t;
        }
        function values(e) {
            if (Object.values) return Object.values(e);
            var t = [];
            for (var n in e) t.push(e[n]);
            return t;
        }
        function keyCount(e) {
            return keys(e).length;
        }
        function addRangeParams(e) {
            var t = arguments.slice(1);
            addRange(e, t);
        }
        function Dictionary_$2() {}
        function ArrayEnumerator(e) {
            var t = -1,
                n = e.length;
            (this.current = null),
                (this.moveNext = function () {
                    return t++, (this.current = getItem(e, t)), t < n;
                }),
                (this.reset = function () {
                    (t = -1), (this.current = null);
                });
        }
        function KeyedEnumerator(e, t) {
            var n = -1,
                r = t.length;
            (this.current = null),
                (this.moveNext = function () {
                    return n++, (this.current = { key: t[n], value: getItem(e, t[n]) }), n < r;
                }),
                (this.reset = function () {
                    (n = -1), (this.current = null);
                });
        }
        function enumerate(e) {
            return isValue(e) ? (typeof e.getEnumerator == "function" ? e.getEnumerator() : e.length !== undefined ? new ArrayEnumerator(e) : new KeyedEnumerator(e, keys(e))) : _nopEnumerator;
        }
        function ICollection() {}
        function ICollection_$1() {}
        function IReadOnlyCollection_$1() {}
        function IDictionary() {}
        function IDictionary_$2() {}
        function IReadOnlyDictionary_$2() {}
        function IList() {}
        function IList_$1() {}
        function IReadOnlyList_$1() {}
        function List_$1() {}
        function Queue() {
            (this.count = 0), (this._items = []), (this._offset = 0);
        }
        function _cleanQueue(e) {
            (e._items = e._items.slice(e._offset)), (e._offset = 0);
        }
        function Stack() {
            (this.count = 0), (this._items = []);
        }
        function DateTime(e, t, n, r, i, s, o) {
            var u = [];
            return (
                e != null && u.push(e),
                t != null && u.push(t - 1),
                n != null && u.push(n),
                r != null && u.push(r),
                i != null && u.push(i),
                s != null && u.push(s),
                o != null && u.push(o),
                new (Function.prototype.bind.apply(Date, [null].concat(u)))()
            );
        }
        function _bindList(e) {
            var t = function () {
                var t = arguments,
                    n = null;
                for (var r = 0, i = e.length; r < i; r++) n = t.length ? e[r].apply(null, t) : e[r].call(null);
                return n;
            };
            return (t._fnList = e), t;
        }
        function bind(e, t) {
            if (!t) return e;
            var n = null;
            return (e = typeof e == "string" ? t[(n = e)] : e), internalBind(e, t, n);
        }
        function baseBind(e, t) {
            if (!t) return e;
            var n = null;
            if (typeof e == "string") {
                (n = e), (e = t.constructor.$base.prototype[n]);
                if (!e) throw new Error("Unable to find '" + n + "' on any of the prototype hierarcy for " + t);
            }
            return internalBind(e, t, n);
        }
        function internalBind(e, t, n) {
            if (typeof e != "function") throw new Error("binding requires a function instance!");
            var r = n ? t.$$b || (t.$$b = {}) : null,
                i = r ? r[n] : null;
            return (
                i ||
                    ((i = function () {
                        return e.apply(t, arguments);
                    }),
                    r && (r[n] = i)),
                i
            );
        }
        function bindAdd(e, t) {
            if (!e) return t;
            if (!t) return e;
            var n = [].concat(e._fnList || e, t);
            return _bindList(n);
        }
        function bindSub(e, t) {
            if (!e) return null;
            if (!t) return e;
            var n = e._fnList || [e],
                r = n.indexOf(t);
            return r >= 0 ? (n.length === 1 ? null : ((n = r ? n.slice(0, r).concat(n.slice(r + 1)) : n.slice(1)), _bindList(n))) : e;
        }
        function bindExport(e, t, n, r) {
            (n = n || "__" + new Date().valueOf()), (r = r || self);
            var i = {
                name: n,
                detach: function () {
                    r[n] = _nop;
                },
                dispose: function () {
                    try {
                        delete r[n];
                    } catch (e) {
                        r[n] = undefined;
                    }
                },
            };
            return (
                (r[n] = t
                    ? e
                    : function () {
                          return i.dispose(), e.apply(null, arguments);
                      }),
                i
            );
        }
        function createEnumMap(e) {
            var t = {};
            for (var n in e) t[e[n]] = n;
            return { Values: t, Keys: e };
        }
        function Enum(e, t) {
            (Enum.map[e] = createEnumMap(t)), Object.defineProperty(this, "_name", { value: e, writable: !1, enumerable: !1 }), (this.map = t), Object.assign(this, t);
        }
        function EventArgs() {}
        function CancelEventArgs() {
            this.cancel = !1;
        }
        function setFormatter(e, t) {
            _formatters[e] = t;
        }
        function commaFormatNumber(e, t, n, r) {
            var i = null,
                s = e.indexOf(n);
            s > 0 && ((i = e.substr(s)), (e = e.substr(0, s)));
            var o = startsWith(e, "-");
            o && (e = e.substr(1));
            var u = 0,
                a = t[u],
                f = "";
            if (e.length < a) return (f = i ? e + i : e), o && (f = "-" + f), f;
            var l = e.length,
                f = "",
                c = !1;
            while (!c) {
                var h = a,
                    p = l - h;
                p < 0 && ((a += p), (h += p), (p = 0), (c = !0));
                if (!h) break;
                var d = e.substr(p, h);
                f.length ? (f = d + r + f) : (f = d), (l -= h), u < t.length - 1 && (u++, (a = t[u]));
            }
            return o && (f = "-" + f), i ? f + i : f;
        }
        function format(e) {
            var t = neutralCulture,
                n = e,
                r = Array.prototype.slice.call(arguments, 1);
            return (
                e.constructor != String && ((t = e), (n = r[0]), (r = r.slice(1))),
                n.replace(_formatPlaceHolderRE, function (e, n) {
                    var i = parseInt(n.substr(1), 10),
                        s = r[i];
                    if (!isValue(s)) return "";
                    var o = _formatters[typeName(s)];
                    if (o) {
                        var u = "",
                            a = n.indexOf(":");
                        a > 0 && (u = n.substring(a + 1, n.length - 1));
                        if (u && u != "i") return o(s, u, t);
                    }
                    return t == neutralCulture ? s.toString() : s.toLocaleString();
                })
            );
        }
        function createGenericType(e, t) {
            var n = getGenericConstructor(e, t),
                r = [null].concat(Array.prototype.slice.call(arguments).splice(2));
            return new (Function.prototype.bind.apply(n, r))();
        }
        function mapGenericType(e, t) {
            return e.IsGenericTypeDefinition ? e.makeGenericType(t) : e;
        }
        function getGenericConstructor(e, t) {
            if (!isValue(e)) return null;
            var n = createGenericConstructorKey(e, t);
            return _genericConstructorCache[n] || (_genericConstructorCache[n] = createGenericConstructorProxy(n, e, t)), _genericConstructorCache[n];
        }
        function createGenericConstructorProxy(e, t, n) {
            function r(e, n) {
                Object.defineProperty(u, e, {
                    get: function () {
                        return n ? n() : t[e];
                    },
                });
            }
            function i() {
                var e;
                return function () {
                    if (!e && t.$interfaces) {
                        e = [];
                        for (var r = 0; r < t.$interfaces.length; ++r) e.push(mapGenericType(t.$interfaces[r], n));
                    }
                    return e;
                };
            }
            function s() {
                var e;
                return function () {
                    if (!e && t.$constructorParams) {
                        e = [];
                        for (var r = 0; r < t.$constructorParams.length; ++r) {
                            var i = t.$constructorParams[r];
                            typeof i == "string" && (i = n[i]), e.push(mapGenericType(i, n));
                        }
                    }
                    return e;
                };
            }
            function o() {
                return n;
            }
            var u = namedFunction(e, function () {
                t.apply(this, Array.prototype.slice.call(arguments));
            });
            (u.IsGenericTypeDefinition = !0), (u.$name = e), (u.GenericTypeArguments = values(n || {})), (u.GenericTemplate = t), r("$type"), r("$members"), r("$interfaces", i()), r("$constructorParams", s()), r("$typeArguments", o);
            if (t.$base && t.$base.IsGenericTypeDefinition) {
                var a = t.$base.makeGenericType(n);
                chainPrototype(u, a);
            } else chainPrototype(u, t);
            return t.$prototypeDescription && extendType(u.prototype, t.$prototypeDescription), u;
        }
        function chainPrototype(e, t) {
            (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.$base = t);
        }
        function createGenericConstructorKey(e, t) {
            var n = getTypeName(e);
            return (
                (n += "ᐸ"),
                (n += Object.getOwnPropertyNames(t)
                    .map(function (e) {
                        return getTypeName(t[e]);
                    })
                    .join("ˏ")),
                (n += "ᐳ"),
                n
            );
        }
        function getTypeName(e) {
            try {
                return e.$name || e.constructor.$name || e.name;
            } catch (t) {
                return e && e.toString();
            }
        }
        function getTypeArgument(e, t, n) {
            if (!isValue(e) || emptyString(t)) return null;
            var r = e.$type ? e : e.constructor;
            if (n) while (r && r.GenericTemplate != n) r = r.$base;
            return isValue(r) && isValue(r.$typeArguments) ? r.$typeArguments[t] : null;
        }
        function getGenericTemplate(e, t, n) {
            function i(t, n) {
                Object.defineProperty(r, t, {
                    get: function () {
                        return n ? n() : e[t];
                    },
                });
            }
            function s() {
                var e;
                return function () {
                    if (!e) {
                        e = {};
                        for (var n = 0, r = t.length; n < r; ++n) e[t[n]] = null;
                    }
                    return e;
                };
            }
            function o() {
                return function () {
                    values(s()() || {});
                };
            }
            if (!isValue(e)) return null;
            n =
                n ||
                function (n) {
                    var r = {};
                    for (var i = 0, s = t.length; i < s; ++i) r[t[i]] = n[i];
                    return getGenericConstructor(e, r);
                };
            var r = { IsGenericTypeDefinition: !0, makeGenericType: n };
            return i("$type"), i("$name"), i("$interfaces"), i("$typeArguments", s()), i("GenericTypeArguments", o()), r;
        }
        function makeMappedGenericTemplate(e, t) {
            if (!isValue(e)) return null;
            var n = keys(t);
            return getGenericTemplate(e, n, function (r) {
                var i = {};
                for (var s = 0; s < n.length; ++s) {
                    var o = t[n[s]];
                    typeof o == "string" ? (i[n[s]] = r[o]) : (i[n[s]] = o);
                }
                return getGenericConstructor(e, i);
            });
        }
        function Guid() {}
        function _guidGetRand() {
            return (Math.random() * 4294967295) | 0;
        }
        function IDisposable() {}
        function IEnumerator() {}
        function IEnumerator_$1() {}
        function IEnumerable() {}
        function IEnumerable_$1() {}
        function IServiceProvider() {}
        function IEquatable_$1() {}
        function IComparable_$1() {}
        function ICloneable() {}
        function IComparer() {}
        function IComparer_$1() {}
        function IEqualityComparer() {}
        function IEqualityComparer_$1() {}
        function Lazy(e) {
            (this.factory = e), (this.isValueCreated = !1), (this.value = undefined);
        }
        function _nop() {}
        function isValue(e) {
            return e !== null && e !== undefined;
        }
        function _value(e) {
            for (var t = 2, n = e.length; t < n; t++) if (isValue(e[t])) return e[t];
            return null;
        }
        function value(e, t) {
            return isValue(e) ? e : isValue(t) ? t : _value(arguments);
        }
        function extendType(e, t) {
            for (var n in t) startsWith(n, "$get_") ? createPropertyGet(e, n.slice(5), t[n]) : startsWith(n, "$set_") ? createPropertySet(e, n.slice(5), t[n]) : (e[n] = t[n]);
            return e;
        }
        function parseBoolean(e) {
            return e.toLowerCase() == "true";
        }
        function parseRegExp(e) {
            if (e[0] == "/") {
                var t = e.lastIndexOf("/");
                if (t > 1) {
                    var n = e.substring(1, t),
                        r = e.substr(t + 1);
                    return new RegExp(n, r);
                }
            }
            return null;
        }
        function parseNumber(e) {
            return !e || !e.length ? 0 : e.indexOf(".") >= 0 || e.indexOf("e") >= 0 || endsWith(e, "f") || endsWith(e, "F") ? parseFloat(e) : parseInt(e, 10);
        }
        function parseDate(e) {
            var t = Date.parse(e);
            return isNaN(t) ? undefined : new Date(t);
        }
        function truncate(e) {
            return e >= 0 ? Math.floor(e) : Math.ceil(e);
        }
        function now() {
            return new Date();
        }
        function today() {
            var e = new Date();
            return new Date(e.getFullYear(), e.getMonth(), e.getDate());
        }
        function compareDates(e, t) {
            return e === t ? !0 : isValue(e) && isValue(t) ? e.getTime() == t.getTime() : !1;
        }
        function _popStackFrame(e) {
            if (!isValue(e.stack) || !isValue(e.fileName) || !isValue(e.lineNumber)) return;
            var t = e.stack.split("\n"),
                n = t[0],
                r = e.fileName + ":" + e.lineNumber;
            while (isValue(n) && n.indexOf(r) === -1) t.shift(), (n = t[0]);
            var i = t[1];
            if (!isValue(i)) return;
            var s = i.match(/@(.*):(\d+)$/);
            if (!isValue(s)) return;
            t.shift(), (e.stack = t.join("\n")), (e.fileName = s[1]), (e.lineNumber = parseInt(s[2], 10));
        }
        function error(e, t, n) {
            var r = new Error(e);
            if (t) for (var i in t) r[i] = t[i];
            return n && Object.defineProperty(r, "innerException", { value: n }), _popStackFrame(r), r;
        }
        function fail(message) {
            console.assert(!1, message), self.navigator && eval("debugger;");
        }
        function paramsGenerator(e, t) {
            return function () {
                var r = Array.prototype.slice,
                    i = r.call(arguments, 0, e);
                while (i.length < e) i.push(null);
                if (arguments.length == e + 1 && Array.isArray(arguments[e])) i.push(arguments[e]);
                else {
                    var s = r.call(arguments, e);
                    i.push(s);
                }
                return t.apply(this, i);
            };
        }
        function namedFunction(e, t) {
            return new Function("fn", "return function " + e + "(){ return fn.apply(this, arguments)}")(t);
        }
        function Nullable(e) {
            this.value = e;
        }
        function createReadonlyProperty(e, t, n) {
            return (
                Object.defineProperty(e, t, {
                    get: function () {
                        return n;
                    },
                    enumerable: !0,
                }),
                n
            );
        }
        function createPropertyGet(e, t, n) {
            Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: n });
        }
        function createPropertySet(e, t, n) {
            Object.defineProperty(e, t, { configurable: !0, enumerable: !0, set: n });
        }
        function defineProperty(e, t, n) {
            Object.defineProperty(e, t, { configurable: !0, enumerable: !0, writable: !0, value: n });
        }
        function initializeObject(e, t) {
            if (!isValue(e) || !isValue(t)) return e;
            for (var n in t) e[n] = t[n];
            return e;
        }
        function string(e, t) {
            return typeof t == "number" ? (t > 1 ? new Array(t + 1).join(e) : e) : Array.prototype.join.call(arguments, "");
        }
        function emptyString(e) {
            return !e || !e.length;
        }
        function whitespace(e) {
            return emptyString(e) || !e.replace(/^\s*/, "").length;
        }
        function compareStrings(e, t, n) {
            return (e = e || ""), (t = t || ""), n ? ((e = e.toUpperCase()), (t = t.toUpperCase())) : 0, e === t ? 0 : e < t ? -1 : 1;
        }
        function trim(e, t) {
            if (t || !String.prototype.trim) {
                t = t ? t.join("") : null;
                var n = t ? new RegExp("^[" + t + "]+|[" + t + "]+$", "g") : /^\s+|\s+$/g;
                return e.replace(n, "");
            }
            return e.trim();
        }
        function trimStart(e, t) {
            var n = t ? new RegExp("^[" + t.join("") + "]+") : /^\s+/;
            return e.replace(n, "");
        }
        function trimEnd(e, t) {
            var n = t ? new RegExp("[" + t.join("") + "]+$") : /\s+$/;
            return e.replace(n, "");
        }
        function startsWith(e, t) {
            return emptyString(t) ? !0 : emptyString(e) || t.length > e.length ? !1 : e.substr(0, t.length) == t;
        }
        function endsWith(e, t) {
            return emptyString(t) ? !0 : emptyString(e) || t.length > e.length ? !1 : e.substr(-t.length) == t;
        }
        function padLeft(e, t, n) {
            return e.length < t ? string(n || " ", t - e.length) + e : e;
        }
        function padRight(e, t, n) {
            return e.length < t ? e + string(n || " ", t - e.length) : e;
        }
        function removeString(e, t, n) {
            return !n || t + n > e.length ? e.substr(0, t) : e.substr(0, t) + e.substr(t + n);
        }
        function insertString(e, t, n) {
            return n ? (t ? e.substr(0, t) + n + e.substr(t) : n + e) : e;
        }
        function replaceString(e, t, n) {
            return e.split(t).join(n || "");
        }
        function StringBuilder(e) {
            (this._parts = isValue(e) && e !== "" ? [e] : []), (this.isEmpty = this._parts.length == 0);
        }
        typeof Object.assign != "function" &&
            Object.defineProperty(Object, "assign", {
                value: function (t, n) {
                    if (t === null || t === undefined) throw new TypeError("Cannot convert undefined or null to object");
                    var r = Object(t);
                    for (var i = 1; i < arguments.length; i++) {
                        var s = arguments[i];
                        if (s !== null && s !== undefined) for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o]);
                    }
                    return r;
                },
                writable: !0,
                configurable: !0,
            });
        var _modules = {},
            _meta = [],
            _genericConstructorCache = {},
            _classMarker = "class",
            _interfaceMarker = "interface",
            _typeNames = [Number, "Number", String, "String", Boolean, "Boolean", Array, "Array", Date, "Date", RegExp, "RegExp", Function, "Function"],
            removeAt = createFallbackFunction("removeAt", function (e, t) {
                return t >= 0 ? (e.splice(t, 1), !0) : !1;
            }),
            removeItem = createFallbackFunction("remove", function (e, t) {
                var n = e.indexOf(t);
                return n >= 0 ? (e.splice(n, 1), !0) : !1;
            }),
            contains = createFallbackFunction("contains", function (e, t) {
                return e.indexOf(t) >= 0;
            }),
            insert = createFallbackFunction("insert", function (e, t, n) {
                e.splice(t, 0, n);
            }),
            clear = createFallbackFunction("clear", function (e) {
                e.length = 0;
            }),
            addRange = createFallbackFunction("addRange", function (e, t) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) e.push(t[n]);
                    return;
                }
                while (t.moveNext()) e.push(t.current);
            }),
            getItem = createFallbackFunction("get_item", function (e, t) {
                return e[t];
            }),
            setItem = createFallbackFunction("set_item", function (e, t, n) {
                return (e[t] = n);
            }),
            _nopEnumerator = {
                current: null,
                moveNext: function () {
                    return !1;
                },
                reset: _nop,
            },
            Queue$ = {
                clear: function () {
                    (this._items.length = 0), (this._offset = 0), (this.count = 0);
                },
                contains: function (e) {
                    for (var t = this._offset, n = this._items.length; t <= n; t++) if (this._items[t] === e) return !0;
                    return !1;
                },
                dequeue: function () {
                    if (this.count) {
                        var e = this._items[this._offset];
                        return ++this._offset * 2 >= this._items.length && _cleanQueue(this), this.count--, e;
                    }
                    return undefined;
                },
                enqueue: function (e) {
                    this._items.push(e), this.count++;
                },
                getEnumerator: function () {
                    return this._offset != 0 && _cleanQueue(this), new Enumerator(this._items);
                },
                peek: function () {
                    return this._items.length ? this._items[this._offset] : undefined;
                },
            },
            Stack$ = {
                clear: function () {
                    (this._items.length = 0), (this.count = 0);
                },
                contains: function (e) {
                    for (var t = this.count - 1; t >= 0; t--) if (this._items[t] === e) return !0;
                    return !1;
                },
                getEnumerator: function () {
                    return new Enumerator(this._items.reverse());
                },
                peek: function () {
                    return this._items[this.count - 1];
                },
                push: function (e) {
                    this._items.push(e), this.count++;
                },
                pop: function () {
                    return this.count ? (this.count--, this._items.pop()) : undefined;
                },
            };
        createPropertyGet(DateTime, "Now", function () {
            return new Date();
        }),
            createPropertyGet(DateTime, "Today", function () {
                var e = DateTime.Now;
                return e.setHours(0, 0, 0, 0), e;
            }),
            (DateTime.Equals = function (e, t) {
                var n = DateTime._parseIfString(e),
                    r = DateTime._parseIfString(t);
                return n == null || r == null ? compareDates(n, r) : n.getTime() === r.getTime();
            }),
            (Date.prototype.equals = function (e) {
                return DateTime.Equals(this, e);
            }),
            (DateTime.CompareTo = function (e, t) {
                var n = DateTime._parseIfString(e),
                    r = DateTime._parseIfString(t);
                if (n == null || r == null) throw new Error("Cannot compare null Dates");
                var i = n.getTime(),
                    s = r.getTime();
                return i === s ? 0 : i < s ? -1 : 1;
            }),
            (Date.prototype.compareTo = function (e) {
                return DateTime.CompareTo(this, e);
            }),
            createPropertyGet(Date.prototype, "Year", function () {
                return DateTime.GetYear(this);
            }),
            (DateTime.GetYear = function (e) {
                return (e = DateTime._parseIfString(e)), e.getFullYear();
            }),
            createPropertyGet(Date.prototype, "Month", function () {
                return DateTime.GetMonth(this);
            }),
            (DateTime.GetMonth = function (e) {
                return (e = DateTime._parseIfString(e)), e.getMonth() + 1;
            }),
            createPropertyGet(Date.prototype, "Day", function () {
                return DateTime.GetDay(this);
            }),
            (DateTime.GetDay = function (e) {
                return (e = DateTime._parseIfString(e)), e.getDate();
            }),
            createPropertyGet(Date.prototype, "DayOfWeek", function () {
                return DateTime.GetDayOfWeek(this);
            }),
            (DateTime.GetDayOfWeek = function (e) {
                return (e = DateTime._parseIfString(e)), e.getDay();
            }),
            createPropertyGet(Date.prototype, "Hour", function () {
                return DateTime.GetHours(this);
            }),
            (DateTime.GetHours = function (e) {
                return (e = DateTime._parseIfString(e)), e.getHours();
            }),
            createPropertyGet(Date.prototype, "Minute", function () {
                return DateTime.GetMinutes(this);
            }),
            (DateTime.GetMinutes = function (e) {
                return (e = DateTime._parseIfString(e)), e.getMinutes();
            }),
            createPropertyGet(Date.prototype, "Second", function () {
                return DateTime.GetSeconds(this);
            }),
            (DateTime.GetSeconds = function (e) {
                return (e = DateTime._parseIfString(e)), e.getSeconds();
            }),
            createPropertyGet(Date.prototype, "Millisecond", function () {
                return DateTime.GetMilliseconds(this);
            }),
            (DateTime.GetMilliseconds = function (e) {
                return (e = DateTime._parseIfString(e)), e.getMilliseconds();
            }),
            (DateTime.AddMilliseconds = function (e, t) {
                var n = DateTime._parseIfString(e);
                return n == null ? new Date() : new Date(t + n.getTime());
            }),
            (DateTime.AddSeconds = function (e, t) {
                return DateTime.AddMilliseconds(e, t * 1e3);
            }),
            (DateTime.AddMinutes = function (e, t) {
                return DateTime.AddMilliseconds(e, t * 6e4);
            }),
            (DateTime.AddHours = function (e, t) {
                return DateTime.AddMilliseconds(e, t * 36e5);
            }),
            (DateTime.AddDays = function (e, t) {
                return DateTime.AddMilliseconds(e, t * 864e5);
            }),
            (DateTime.ToLongDateString = function (e) {
                return DateTime.ToStringFormatted(e, DateTime._getFormatter(culture.current.dtf.ld));
            }),
            (DateTime.ToLongTimeString = function (e) {
                return DateTime.ToStringFormatted(e, DateTime._getFormatter(culture.current.dtf.lt));
            }),
            (DateTime.ToShortDateString = function (e) {
                return DateTime.ToStringFormatted(e, DateTime._getFormatter(culture.current.dtf.sd));
            }),
            (DateTime.ToShortTimeString = function (e) {
                return DateTime.ToStringFormatted(e, DateTime._getFormatter(culture.current.dtf.st));
            }),
            (DateTime.ToStringFormatted = function (e, t) {
                return arguments.length === 1 ? DateTime.ToString(e) : ((e = DateTime._parseIfString(e)), format(culture.current, t, e));
            }),
            (DateTime.ToString = function (e) {
                return e == null ? "" : DateTime._parseIfString(e).toString();
            }),
            (DateTime.Parse = function (e) {
                return e == null ? null : DateTime._parseIfString(e);
            }),
            (DateTime._getFormatter = function (e) {
                return "{0:" + e + "}";
            }),
            (DateTime._parseIfString = function (e) {
                if (typeOf(e) === Date) return e;
                if (typeOf(e) === String) {
                    var t = e;
                    !endsWith(t, "z") && !endsWith(t, "Z") && (t += "Z");
                    var n = new Date(t);
                    return isNaN(n) && (n = DateTime._manuallyParseDateFromJsonString(e)), n;
                }
                return null;
            }),
            (DateTime._manuallyParseDateFromJsonString = function (e) {
                var t = e.split(new RegExp("\\D")),
                    n = new Array(7);
                for (var r = 0; r < 7; ++r) n[r] = t[r] == null ? 0 : parseInt(t[r]);
                return new Date(Date.UTC(n[0], n[1] - 1, n[2], n[3], n[4], n[5]));
            }),
            (Enum.prototype.toString = function () {
                return this._name;
            }),
            (Enum.prototype.valueOf = function () {
                return this._name;
            }),
            (Enum.map = {}),
            (Enum.getValues = function (e) {
                var t = Enum.map[e._name];
                return t && Object.values(t.Keys);
            }),
            (Enum.getNames = function (e) {
                var t = Enum.map[e._name];
                return t && Object.keys(t.Keys);
            }),
            (Enum.getName = function (e, t) {
                var n = Enum.map[e._name];
                return n && n.Values[t];
            }),
            (Enum.hasFlag = function (e, t) {
                return (e | t) === e;
            }),
            (Enum.isDefined = function (e, t) {
                var n = Enum.map[e._name];
                return isValue(n.Values[t]) || isValue(n.Keys[t]);
            }),
            (Enum.parse = function (e, t, n) {
                var r = Enum.map[e._name];
                if (r && n) for (var i in r.Keys) if (i.toLowerCase() == t.toLowerCase()) return r.Keys[i];
                return r && r.Keys[t];
            }),
            (EventArgs.Empty = new EventArgs());
        var _dateFormatRE = /'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g,
            _formatPlaceHolderRE = /(\{[^\}^\{]+\})/g,
            _formatters = {};
        (_formatters.Number = function (e, t, n) {
            var r = n.nf,
                i = "",
                s = -1;
            t.length > 1 && (s = parseInt(t.substr(1)));
            var o = t.charAt(0);
            switch (o) {
                case "d":
                case "D":
                    (i = parseInt(String(Math.abs(e))).toString()), s != -1 && (i = padLeft(i, s, "0")), e < 0 && (i = "-" + i);
                    break;
                case "x":
                case "X":
                    (i = parseInt(String(Math.abs(e))).toString(16)), o == "X" && (i = i.toUpperCase()), s != -1 && (i = padLeft(i, s, "0"));
                    break;
                case "e":
                case "E":
                    s == -1 ? (i = e.toExponential()) : (i = e.toExponential(s)), o == "E" && (i = i.toUpperCase());
                    break;
                case "f":
                case "F":
                case "n":
                case "N":
                    s == -1 && (s = r.dd), (i = e.toFixed(s).toString());
                    if (s && r.ds != ".") {
                        var u = i.indexOf(".");
                        i = i.substr(0, u) + r.ds + i.substr(u + 1);
                    }
                    if (o == "n" || o == "N") i = commaFormatNumber(i, r.gw, r.ds, r.gs);
                    break;
                case "c":
                case "C":
                    s == -1 && (s = r.curDD), (i = Math.abs(e).toFixed(s).toString());
                    if (s && r.curDS != ".") {
                        var u = i.indexOf(".");
                        i = i.substr(0, u) + r.curDS + i.substr(u + 1);
                    }
                    (i = commaFormatNumber(i, r.curGW, r.curDS, r.curGS)), e < 0 ? (i = t(n, r.curNP, i)) : (i = t(n, r.curPP, i));
                    break;
                case "p":
                case "P":
                    s == -1 && (s = r.perDD), (i = (Math.abs(e) * 100).toFixed(s).toString());
                    if (s && r.perDS != ".") {
                        var u = i.indexOf(".");
                        i = i.substr(0, u) + r.perDS + i.substr(u + 1);
                    }
                    (i = commaFormatNumber(i, r.perGW, r.perDS, r.perGS)), e < 0 ? (i = t(n, r.perNP, i)) : (i = t(n, r.perPP, i));
            }
            return i;
        }),
            (_formatters.Date = function (e, t, n) {
                if (t == "iso") return e.toISOString();
                if (t.charAt(0) == "i") {
                    var r = "String";
                    switch (t) {
                        case "id":
                            r = "DateString";
                            break;
                        case "it":
                            r = "TimeString";
                    }
                    return n == neutralCulture ? e["to" + r]() : e["toLocale" + r]();
                }
                var i = n.dtf;
                if (t.length == 1)
                    switch (t) {
                        case "f":
                            t = i.ld + " " + i.st;
                            break;
                        case "F":
                            t = i.dt;
                            break;
                        case "d":
                            t = i.sd;
                            break;
                        case "D":
                            t = i.ld;
                            break;
                        case "t":
                            t = i.st;
                            break;
                        case "T":
                            t = i.lt;
                            break;
                        case "g":
                            t = i.sd + " " + i.st;
                            break;
                        case "G":
                            t = i.sd + " " + i.lt;
                            break;
                        case "R":
                        case "r":
                            (i = neutralCulture.dtf), (t = i.gmt);
                            break;
                        case "u":
                            t = i.uni;
                            break;
                        case "U":
                            (t = i.dt), (e = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()));
                            break;
                        case "s":
                            t = i.sort;
                    }
                t.charAt(0) == "%" && (t = t.substr(1));
                var s = new StringBuilder();
                _dateFormatRE.lastIndex = 0;
                for (;;) {
                    var o = _dateFormatRE.lastIndex,
                        u = _dateFormatRE.exec(t);
                    s.append(t.slice(o, u ? u.index : t.length));
                    if (!u) break;
                    var a = u[0],
                        f = a;
                    switch (a) {
                        case "dddd":
                            f = i.day[e.getDay()];
                            break;
                        case "ddd":
                            f = i.sday[e.getDay()];
                            break;
                        case "dd":
                            f = padLeft(e.getDate().toString(), 2, "0");
                            break;
                        case "d":
                            f = e.getDate();
                            break;
                        case "MMMM":
                            f = i.mon[e.getMonth()];
                            break;
                        case "MMM":
                            f = i.smon[e.getMonth()];
                            break;
                        case "MM":
                            f = padLeft((e.getMonth() + 1).toString(), 2, "0");
                            break;
                        case "M":
                            f = e.getMonth() + 1;
                            break;
                        case "yyyy":
                            f = e.getFullYear();
                            break;
                        case "yy":
                            f = padLeft((e.getFullYear() % 100).toString(), 2, "0");
                            break;
                        case "y":
                            f = (e.getFullYear() % 100).toString();
                            break;
                        case "h":
                        case "hh":
                            (f = (e.getHours() % 12).toString()), f ? a == "hh" && (f = padLeft(f.toString(), 2, "0")) : (f = "12");
                            break;
                        case "HH":
                            f = padLeft(e.getHours().toString(), 2, "0");
                            break;
                        case "H":
                            f = e.getHours();
                            break;
                        case "mm":
                            f = padLeft(e.getMinutes().toString(), 2, "0");
                            break;
                        case "m":
                            f = e.getMinutes();
                            break;
                        case "ss":
                            f = padLeft(e.getSeconds().toString(), 2, "0");
                            break;
                        case "s":
                            f = e.getSeconds();
                            break;
                        case "t":
                        case "tt":
                            (f = e.getHours() < 12 ? i.am : i.pm), a == "t" && (f = f.charAt(0));
                            break;
                        case "fff":
                            f = padLeft(e.getMilliseconds().toString(), 3, "0");
                            break;
                        case "ff":
                            f = padLeft(e.getMilliseconds().toString(), 3).substr(0, 2);
                            break;
                        case "f":
                            f = padLeft(e.getMilliseconds().toString(), 3).charAt(0);
                            break;
                        case "z":
                            var l = e.getTimezoneOffset() / 60;
                            f = (l >= 0 ? "-" : "+") + Math.floor(Math.abs(l));
                            break;
                        case "zz":
                        case "zzz":
                            var l = e.getTimezoneOffset() / 60;
                            (f = (l >= 0 ? "-" : "+") + padLeft(Math.floor(Math.abs(l)).toString(), 2, "0")), a == "zzz" && (f += i.ts + padLeft(Math.abs(e.getTimezoneOffset() % 60).toString(), 2, "0"));
                            break;
                        default:
                            f.charAt(0) == "'" && (f = f.substr(1, f.length - 2).replace(/\\'/g, "'"));
                    }
                    s.append(f);
                }
                return s.toString();
            });
        var makeGenericType = paramsGenerator(1, function (e, t) {
                return !isValue(e) || !e.IsGenericTypeDefinition ? null : e.makeGenericType(t);
            }),
            neutralCulture = {
                name: "",
                nf: {
                    nan: "NaN",
                    neg: "-",
                    pos: "+",
                    negInf: "-Infinity",
                    posInf: "Infinity",
                    gw: [3],
                    dd: 2,
                    ds: ".",
                    gs: ",",
                    per: "%",
                    perGW: [3],
                    perDD: 2,
                    perDS: ".",
                    perGS: ",",
                    perPP: "{0} %",
                    perNP: "-{0} %",
                    cur: "$",
                    curGW: [3],
                    curDD: 2,
                    curDS: ".",
                    curGS: ",",
                    curNP: "(${0})",
                    curPP: "${0}",
                },
                dtf: {
                    am: "AM",
                    pm: "PM",
                    ds: "/",
                    ts: ":",
                    gmt: "ddd, dd MMM yyyy HH:mm:ss 'GMT'",
                    uni: "yyyy-MM-dd HH:mm:ssZ",
                    sort: "yyyy-MM-ddTHH:mm:ss",
                    dt: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    ld: "dddd, MMMM dd, yyyy",
                    sd: "M/d/yyyy",
                    lt: "h:mm:ss tt",
                    st: "h:mm tt",
                    day0: 0,
                    day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    sday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    mday: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    mon: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    smon: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                },
            },
            currentCulture = { name: "en-us", dtf: neutralCulture.dtf, nf: neutralCulture.nf },
            culture = { neutral: neutralCulture, current: currentCulture };
        Guid.NewGuid = function () {
            var e = _guidGetRand(),
                t = _guidGetRand(),
                n = _guidGetRand(),
                r = _guidGetRand(),
                i =
                    _guidHexMap[e & 255] +
                    _guidHexMap[(e >> 8) & 255] +
                    _guidHexMap[(e >> 16) & 255] +
                    _guidHexMap[(e >> 24) & 255] +
                    "-" +
                    _guidHexMap[t & 255] +
                    _guidHexMap[(t >> 8) & 255] +
                    "-" +
                    _guidHexMap[((t >> 16) & 15) | 64] +
                    _guidHexMap[(t >> 24) & 255] +
                    "-" +
                    _guidHexMap[(n & 63) | 128] +
                    _guidHexMap[(n >> 8) & 255] +
                    "-" +
                    _guidHexMap[(n >> 16) & 255] +
                    _guidHexMap[(n >> 24) & 255] +
                    _guidHexMap[r & 255] +
                    _guidHexMap[(r >> 8) & 255] +
                    _guidHexMap[(r >> 16) & 255] +
                    _guidHexMap[(r >> 24) & 255];
            return i;
        };
        var Guid$ = {},
            _guidHexMap = new Array(256);
        for (var i = 0; i < 256; ++i) _guidHexMap[i] = (i < 16 ? "0" : "") + i.toString(16);
        var Lazy$ = {
                $get_IsValueCreated: function () {
                    return this.isValueCreated;
                },
                $get_Value: function () {
                    return this.isValueCreated || ((this.value = this.factory()), (this.isValueCreated = !0)), this.value;
                },
            },
            extend = Object.assign;
        (Nullable.prototype.valueOf = function () {
            return this.value;
        }),
            (Nullable.prototype.toString = function () {
                return this.value;
            });
        var Nullable$ = {
                getValueOrDefault: function (e) {
                    return this.value || e;
                },
                $get_Value: function () {
                    return this.value;
                },
                $get_HasValue: function () {
                    return this.value !== undefined;
                },
            },
            StringBuilder$ = {
                append: function (e) {
                    return isValue(e) && e !== "" && (this._parts.push(e), (this.isEmpty = !1)), this;
                },
                appendLine: function (e) {
                    return this.append(e), this.append("\r\n"), (this.isEmpty = !1), this;
                },
                clear: function () {
                    (this._parts = []), (this.isEmpty = !0);
                },
                toString: function (e) {
                    return this._parts.join(e || "");
                },
            },
            $module = module("ss", null, {
                Attribute: defineClass(function () {}, {}, [], null, []),
                IServiceProvider: defineInterface(IServiceProvider),
                IDisposable: defineInterface(IDisposable),
                IEnumerable: defineInterface(IEnumerable),
                IEquatable_$1: defineInterface(IEquatable_$1),
                IComparable_$1: defineInterface(IComparable_$1),
                ICloneable: defineInterface(ICloneable),
                IEnumerable_$1: defineInterface(IEnumerable_$1, [IEnumerable]),
                IEnumerator: defineInterface(IEnumerator),
                IEnumerator_$1: defineInterface(IEnumerator_$1, [IEnumerator]),
                ICollection: defineInterface(ICollection, [IEnumerable]),
                ICollection_$1: defineInterface(ICollection_$1, [IEnumerable_$1, IEnumerable]),
                IReadOnlyCollection_$1: defineInterface(IReadOnlyCollection_$1, [IEnumerable_$1, IEnumerable]),
                IComparer: defineInterface(IComparer),
                IComparer_$1: defineInterface(IComparer_$1),
                IEqualityComparer: defineInterface(IEqualityComparer),
                IEqualityComparer_$1: defineInterface(IEqualityComparer_$1),
                Dictionary_$2: defineClass(Dictionary_$2, {}, [], null, [IDictionary, IDictionary_$2, IReadOnlyDictionary_$2]),
                IDictionary: defineInterface(IDictionary, [IEnumerable]),
                IDictionary_$2: defineInterface(IDictionary_$2, [IEnumerable_$1, IEnumerable]),
                IReadOnlyDictionary_$2: defineInterface(IReadOnlyDictionary_$2, [IEnumerable_$1, IEnumerable]),
                List_$1: defineClass(List_$1, Array, [], null, [IList, IList_$1, IReadOnlyList_$1]),
                IList: defineInterface(IList, [ICollection]),
                IList_$1: defineInterface(IList_$1, [ICollection_$1]),
                IReadOnlyList_$1: defineInterface(IReadOnlyList_$1, [IReadOnlyCollection_$1]),
                EventArgs: defineClass(EventArgs, {}, [], null),
                CancelEventArgs: defineClass(CancelEventArgs, {}, [], null),
                StringBuilder: defineClass(StringBuilder, StringBuilder$, [], null),
                Stack: defineClass(Stack, Stack$, [], null),
                Queue: defineClass(Queue, Queue$, [], null),
                Guid: defineClass(Guid, Guid$, [], null),
                DateTime: defineClass(DateTime, {}, [], null, [IEquatable_$1, IComparable_$1]),
                Lazy: defineClass(Lazy, Lazy$, [], null),
                Nullable: defineClass(Nullable, Nullable$, [], null),
                Enum: defineClass(Enum, {}, [], null),
                MemberType: new Enum("MemberType", { all: 191, constructor: 1, custom: 64, event: 2, field: 4, method: 8, nestedType: 128, property: 16, typeInfo: 32 }),
            });
        return extend($module.api, {
            version: "1.15.1",
            isValue: isValue,
            value: value,
            extend: extend,
            keys: keys,
            values: values,
            keyCount: keyCount,
            keyExists: keyExists,
            clearKeys: clearKeys,
            enumerate: enumerate,
            array: toArray,
            toArray: toArray,
            remove: removeItem,
            boolean: parseBoolean,
            regexp: parseRegExp,
            number: parseNumber,
            date: parseDate,
            truncate: truncate,
            now: now,
            today: today,
            compareDates: compareDates,
            error: error,
            string: string,
            emptyString: emptyString,
            whitespace: whitespace,
            format: format,
            setFormatter: setFormatter,
            commaFormatNumber: commaFormatNumber,
            compareStrings: compareStrings,
            startsWith: startsWith,
            endsWith: endsWith,
            padLeft: padLeft,
            padRight: padRight,
            trim: trim,
            trimStart: trimStart,
            trimEnd: trimEnd,
            insertString: insertString,
            removeString: removeString,
            replaceString: replaceString,
            bind: bind,
            baseBind: baseBind,
            bindAdd: bindAdd,
            bindSub: bindSub,
            bindExport: bindExport,
            paramsGenerator: paramsGenerator,
            namedFunction: namedFunction,
            createPropertyGet: createPropertyGet,
            createPropertySet: createPropertySet,
            createReadonlyProperty: createReadonlyProperty,
            defineProperty: defineProperty,
            copyArray: copyArray,
            module: module,
            modules: _modules,
            dependency: dependency,
            registerMetadataImporter: registerMetadataImporter,
            importMetadata: importMetadata,
            isClass: isClass,
            isInterface: isInterface,
            typeOf: typeOf,
            type: type,
            typeName: typeName,
            canCast: canCast,
            safeCast: safeCast,
            canAssign: canAssign,
            instanceOf: instanceOf,
            baseProperty: baseProperty,
            defineClass: defineClass,
            defineInterface: defineInterface,
            getConstructorParams: getConstructorParams,
            createInstance: paramsGenerator(1, createInstance),
            getMembers: getMembers,
            getGenericTemplate: getGenericTemplate,
            makeGenericType: makeGenericType,
            culture: culture,
            fail: fail,
            contains: contains,
            insert: insert,
            clear: clear,
            addRange: addRange,
            getItem: getItem,
            setItem: setItem,
            removeAt: removeAt,
            removeItem: removeItem,
            addKeyValue: addKeyValue,
            createGenericType: createGenericType,
            getGenericConstructor: getGenericConstructor,
            getTypeArgument: getTypeArgument,
            makeMappedGenericTemplate: makeMappedGenericTemplate,
            initializeObject: initializeObject,
        });
    }
    function _export() {
        var e = _ss();
        typeof exports == "object" ? e.extend(exports, e) : (global.ss = e);
    }
    global.define ? global.define("ss", [], _ss) : _export();
})(this);



jQuery(document).ready(function(){
          var owlCarousel = $('#carousel');
          owlCarousel.owlCarousel({
              autoplay: true,
              lazyLoad: true,
              loop: false,
              margin: 0,
               /*
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              */
              responsiveClass: true,
              autoHeight: true,
              autoplayTimeout: 7000,
              smartSpeed: 800,
              nav: true,
              dots:false,
              responsive: {
                  0: {
                    items: 1
                  },

                  600: {
                    items: 3
                  },

                  1024: {
                    items: 4
                  },

                  1366: {
                    items: 4
                  }
              }
          });

          // Go to the next item
          jQuery('.rightButton').click(function() {
              //owlCarousel.trigger('owl.prev');
              owlCarousel.trigger('next.owl.carousel');
          })
          // Go to the previous item
          jQuery('.leftButton').click(function() {
              //owlCarousel.trigger('owl.next');
               owlCarousel.trigger('prev.owl.carousel', [300]);
          })
      });







