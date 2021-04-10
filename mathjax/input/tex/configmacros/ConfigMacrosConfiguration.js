"use strict";
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
exports.ConfigMacrosConfiguration = void 0;
var Configuration_js_1 = require("../Configuration.js");
var Options_js_1 = require("../../../util/Options.js");
var SymbolMap_js_1 = require("../SymbolMap.js");
var Symbol_js_1 = require("../Symbol.js");
var NewcommandMethods_js_1 = require("../newcommand/NewcommandMethods.js");
var MACROSMAP = 'configmacros-map';
function configmacrosInit(config) {
    new SymbolMap_js_1.CommandMap(MACROSMAP, {}, {});
    config.append(Configuration_js_1.Configuration.local({ handler: { macro: [MACROSMAP] }, priority: 3 }));
}
function configmacrosConfig(_config, jax) {
    var e_1, _a;
    var macrosMap = jax.parseOptions.handlers.retrieve(MACROSMAP);
    var macros = jax.parseOptions.options.macros;
    try {
        for (var _b = __values(Object.keys(macros)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var cs = _c.value;
            var def = (typeof macros[cs] === 'string' ? [macros[cs]] : macros[cs]);
            var macro = Array.isArray(def[2]) ?
                new Symbol_js_1.Macro(cs, NewcommandMethods_js_1.default.MacroWithTemplate, def.slice(0, 2).concat(def[2])) :
                new Symbol_js_1.Macro(cs, NewcommandMethods_js_1.default.Macro, def);
            macrosMap.add(cs, macro);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.ConfigMacrosConfiguration = Configuration_js_1.Configuration.create('configmacros', {
    init: configmacrosInit,
    config: configmacrosConfig,
    options: { macros: Options_js_1.expandable({}) }
});
