"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListItem = exports.END = void 0;
exports.END = Symbol();
var ListItem = (function () {
    function ListItem(data) {
        if (data === void 0) { data = null; }
        this.next = null;
        this.prev = null;
        this.data = data;
    }
    return ListItem;
}());
exports.ListItem = ListItem;
var LinkedList = (function () {
    function LinkedList() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.list = new ListItem(exports.END);
        this.list.next = this.list.prev = this.list;
        this.push.apply(this, __spread(args));
    }
    LinkedList.prototype.toArray = function () {
        return Array.from(this);
    };
    LinkedList.prototype.isBefore = function (a, b) {
        return a < b;
    };
    LinkedList.prototype.push = function () {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                var data = args_1_1.value;
                var item = new ListItem(data);
                item.next = this.list;
                item.prev = this.list.prev;
                this.list.prev = item;
                item.prev.next = item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    LinkedList.prototype.pop = function () {
        var item = this.list.prev;
        if (item.data === exports.END) {
            return null;
        }
        this.list.prev = item.prev;
        item.prev.next = this.list;
        item.next = item.prev = null;
        return item.data;
    };
    LinkedList.prototype.unshift = function () {
        var e_2, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            for (var _b = __values(args.slice(0).reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var data = _c.value;
                var item = new ListItem(data);
                item.next = this.list.next;
                item.prev = this.list;
                this.list.next = item;
                item.next.prev = item;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    };
    LinkedList.prototype.shift = function () {
        var item = this.list.next;
        if (item.data === exports.END) {
            return null;
        }
        this.list.next = item.next;
        item.next.prev = this.list;
        item.next = item.prev = null;
        return item.data;
    };
    LinkedList.prototype.remove = function () {
        var e_3, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var map = new Map();
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item_1 = items_1_1.value;
                map.set(item_1, true);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var item = this.list.next;
        while (item.data !== exports.END) {
            var next = item.next;
            if (map.has(item.data)) {
                item.prev.next = item.next;
                item.next.prev = item.prev;
                item.next = item.prev = null;
            }
            item = next;
        }
    };
    LinkedList.prototype.clear = function () {
        this.list.next.prev = this.list.prev.next = null;
        this.list.next = this.list.prev = this.list;
        return this;
    };
    LinkedList.prototype[Symbol.iterator] = function () {
        var current = this.list;
        return {
            next: function () {
                current = current.next;
                return (current.data === exports.END ?
                    { value: null, done: true } :
                    { value: current.data, done: false });
            }
        };
    };
    LinkedList.prototype.reversed = function () {
        var _a;
        var current = this.list;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                current = current.prev;
                return (current.data === exports.END ?
                    { value: null, done: true } :
                    { value: current.data, done: false });
            },
            _a.toArray = function () {
                return Array.from(this);
            },
            _a;
    };
    LinkedList.prototype.insert = function (data, isBefore) {
        if (isBefore === void 0) { isBefore = null; }
        if (isBefore === null) {
            isBefore = this.isBefore.bind(this);
        }
        var item = new ListItem(data);
        var cur = this.list.next;
        while (cur.data !== exports.END && isBefore(cur.data, item.data)) {
            cur = cur.next;
        }
        item.prev = cur.prev;
        item.next = cur;
        cur.prev.next = cur.prev = item;
        return this;
    };
    LinkedList.prototype.sort = function (isBefore) {
        var e_4, _a;
        if (isBefore === void 0) { isBefore = null; }
        if (isBefore === null) {
            isBefore = this.isBefore.bind(this);
        }
        var lists = [];
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                lists.push(new LinkedList(item));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.list.next = this.list.prev = this.list;
        while (lists.length > 1) {
            var l1 = lists.shift();
            var l2 = lists.shift();
            l1.merge(l2, isBefore);
            lists.push(l1);
        }
        if (lists.length) {
            this.list = lists[0].list;
        }
        return this;
    };
    LinkedList.prototype.merge = function (list, isBefore) {
        var _a, _b, _c, _d, _e;
        if (isBefore === void 0) { isBefore = null; }
        if (isBefore === null) {
            isBefore = this.isBefore.bind(this);
        }
        var lcur = this.list.next;
        var mcur = list.list.next;
        while (lcur.data !== exports.END && mcur.data !== exports.END) {
            if (isBefore(mcur.data, lcur.data)) {
                _a = __read([lcur, mcur], 2), mcur.prev.next = _a[0], lcur.prev.next = _a[1];
                _b = __read([lcur.prev, mcur.prev], 2), mcur.prev = _b[0], lcur.prev = _b[1];
                _c = __read([list.list, this.list], 2), this.list.prev.next = _c[0], list.list.prev.next = _c[1];
                _d = __read([list.list.prev, this.list.prev], 2), this.list.prev = _d[0], list.list.prev = _d[1];
                _e = __read([mcur.next, lcur], 2), lcur = _e[0], mcur = _e[1];
            }
            else {
                lcur = lcur.next;
            }
        }
        if (mcur.data !== exports.END) {
            this.list.prev.next = list.list.next;
            list.list.next.prev = this.list.prev;
            list.list.prev.next = this.list;
            this.list.prev = list.list.prev;
            list.list.next = list.list.prev = list.list;
        }
        return this;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
