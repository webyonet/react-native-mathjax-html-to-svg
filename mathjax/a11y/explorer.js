"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setA11yOption = exports.setA11yOptions = exports.ExplorerHandler = exports.ExplorerMathDocumentMixin = exports.ExplorerMathItemMixin = void 0;
var MathItem_js_1 = require("../core/MathItem.js");
var semantic_enrich_js_1 = require("./semantic-enrich.js");
var Options_js_1 = require("../util/Options.js");
var SerializedMmlVisitor_js_1 = require("../core/MmlTree/SerializedMmlVisitor.js");
var MJContextMenu_js_1 = require("../ui/menu/MJContextMenu.js");
var ke = require("./explorer/KeyExplorer.js");
var me = require("./explorer/MouseExplorer.js");
var TreeExplorer_js_1 = require("./explorer/TreeExplorer.js");
var Region_js_1 = require("./explorer/Region.js");
MathItem_js_1.newState('EXPLORER', 160);
function ExplorerMathItemMixin(BaseMathItem, toMathML) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.explorers = {};
            _this.attached = [];
            _this.restart = false;
            _this.refocus = false;
            _this.savedId = null;
            return _this;
        }
        class_1.prototype.explorable = function (document, force) {
            if (force === void 0) { force = false; }
            if (this.state() >= MathItem_js_1.STATE.EXPLORER)
                return;
            if (!this.isEscaped && (document.options.enableExplorer || force)) {
                var node = this.typesetRoot;
                var mml = toMathML(this.root);
                if (this.savedId) {
                    this.typesetRoot.setAttribute('sre-explorer-id', this.savedId);
                    this.savedId = null;
                }
                this.explorers = initExplorers(document, node, mml);
                this.attachExplorers(document);
            }
            this.state(MathItem_js_1.STATE.EXPLORER);
        };
        class_1.prototype.attachExplorers = function (document) {
            var e_1, _a;
            this.attached = [];
            try {
                for (var _b = __values(Object.keys(this.explorers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var explorer = this.explorers[key];
                    if (document.options.a11y[key]) {
                        explorer.Attach();
                        this.attached.push(explorer);
                    }
                    else {
                        explorer.Detach();
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.addExplorers(this.attached);
        };
        class_1.prototype.rerender = function (document, start) {
            var e_2, _a;
            if (start === void 0) { start = MathItem_js_1.STATE.RERENDER; }
            this.savedId = this.typesetRoot.getAttribute('sre-explorer-id');
            this.refocus = (window.document.activeElement === this.typesetRoot);
            try {
                for (var _b = __values(this.attached), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var explorer = _c.value;
                    if (explorer.active) {
                        this.restart = true;
                        explorer.Stop();
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _super.prototype.rerender.call(this, document, start);
        };
        class_1.prototype.updateDocument = function (document) {
            _super.prototype.updateDocument.call(this, document);
            this.refocus && this.typesetRoot.focus();
            this.restart && this.attached.forEach(function (x) { return x.Start(); });
            this.refocus = this.restart = false;
        };
        class_1.prototype.addExplorers = function (explorers) {
            var e_3, _a;
            if (explorers.length <= 1)
                return;
            var lastKeyExplorer = null;
            try {
                for (var _b = __values(this.attached), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var explorer = _c.value;
                    if (!(explorer instanceof ke.AbstractKeyExplorer))
                        continue;
                    explorer.stoppable = false;
                    lastKeyExplorer = explorer;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (lastKeyExplorer) {
                lastKeyExplorer.stoppable = true;
            }
        };
        return class_1;
    }(BaseMathItem));
}
exports.ExplorerMathItemMixin = ExplorerMathItemMixin;
function ExplorerMathDocumentMixin(BaseDocument) {
    var _a;
    return _a = (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                var ProcessBits = _this.constructor.ProcessBits;
                if (!ProcessBits.has('explorer')) {
                    ProcessBits.allocate('explorer');
                }
                var visitor = new SerializedMmlVisitor_js_1.SerializedMmlVisitor(_this.mmlFactory);
                var toMathML = (function (node) { return visitor.visitTree(node); });
                _this.options.MathItem = ExplorerMathItemMixin(_this.options.MathItem, toMathML);
                _this.explorerRegions = initExplorerRegions(_this);
                return _this;
            }
            class_2.prototype.explorable = function () {
                var e_4, _a;
                if (!this.processed.isSet('explorer')) {
                    if (this.options.enableExplorer) {
                        try {
                            for (var _b = __values(this.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var math = _c.value;
                                math.explorable(this);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    this.processed.set('explorer');
                }
                return this;
            };
            class_2.prototype.state = function (state, restore) {
                if (restore === void 0) { restore = false; }
                _super.prototype.state.call(this, state, restore);
                if (state < MathItem_js_1.STATE.EXPLORER) {
                    this.processed.clear('explorer');
                }
                return this;
            };
            return class_2;
        }(BaseDocument)),
        _a.OPTIONS = __assign(__assign({}, BaseDocument.OPTIONS), { enrichSpeech: 'shallow', enableExplorer: true, renderActions: Options_js_1.expandable(__assign(__assign({}, BaseDocument.OPTIONS.renderActions), { explorable: [MathItem_js_1.STATE.EXPLORER] })), a11y: {
                align: 'top',
                backgroundColor: 'Blue',
                backgroundOpacity: 20,
                braille: false,
                flame: false,
                foregroundColor: 'Black',
                foregroundOpacity: 100,
                highlight: 'None',
                hover: false,
                infoPrefix: false,
                infoRole: false,
                infoType: false,
                keyMagnifier: false,
                locale: 'en',
                magnification: 'None',
                magnify: '400%',
                mouseMagnifier: false,
                speech: true,
                speechRules: 'mathspeak-default',
                subtitles: true,
                treeColoring: false,
                viewBraille: false
            } }),
        _a;
}
exports.ExplorerMathDocumentMixin = ExplorerMathDocumentMixin;
function ExplorerHandler(handler, MmlJax) {
    if (MmlJax === void 0) { MmlJax = null; }
    if (!handler.documentClass.prototype.enrich && MmlJax) {
        handler = semantic_enrich_js_1.EnrichHandler(handler, MmlJax);
    }
    handler.documentClass = ExplorerMathDocumentMixin(handler.documentClass);
    return handler;
}
exports.ExplorerHandler = ExplorerHandler;
function initExplorerRegions(document) {
    return {
        speechRegion: new Region_js_1.LiveRegion(document),
        brailleRegion: new Region_js_1.LiveRegion(document),
        magnifier: new Region_js_1.HoverRegion(document),
        tooltip1: new Region_js_1.ToolTip(document),
        tooltip2: new Region_js_1.ToolTip(document),
        tooltip3: new Region_js_1.ToolTip(document)
    };
}
var allExplorers = {
    speech: function (doc, node) {
        var _a;
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var explorer = (_a = ke.SpeechExplorer).create.apply(_a, __spread([doc, doc.explorerRegions.speechRegion, node], rest));
        var _b = __read(doc.options.a11y.speechRules.split('-'), 2), domain = _b[0], style = _b[1];
        explorer.speechGenerator.setOptions({
            locale: doc.options.a11y.locale, domain: domain,
            style: style, modality: 'speech', cache: false
        });
        explorer.showRegion = 'subtitles';
        return explorer;
    },
    braille: function (doc, node) {
        var _a;
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var explorer = (_a = ke.SpeechExplorer).create.apply(_a, __spread([doc, doc.explorerRegions.brailleRegion, node], rest));
        explorer.speechGenerator.setOptions({ locale: 'nemeth', domain: 'default',
            style: 'default', modality: 'braille' });
        explorer.showRegion = 'viewBraille';
        return explorer;
    },
    keyMagnifier: function (doc, node) {
        var _a;
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return (_a = ke.Magnifier).create.apply(_a, __spread([doc, doc.explorerRegions.magnifier, node], rest));
    },
    mouseMagnifier: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ContentHoverer.create(doc, doc.explorerRegions.magnifier, node, function (x) { return x.hasAttribute('data-semantic-type'); }, function (x) { return x; });
    },
    hover: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.FlameHoverer.create(doc, null, node);
    },
    infoType: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ValueHoverer.create(doc, doc.explorerRegions.tooltip1, node, function (x) { return x.hasAttribute('data-semantic-type'); }, function (x) { return x.getAttribute('data-semantic-type'); });
    },
    infoRole: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ValueHoverer.create(doc, doc.explorerRegions.tooltip2, node, function (x) { return x.hasAttribute('data-semantic-role'); }, function (x) { return x.getAttribute('data-semantic-role'); });
    },
    infoPrefix: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ValueHoverer.create(doc, doc.explorerRegions.tooltip3, node, function (x) { return x.hasAttribute('data-semantic-prefix'); }, function (x) { return x.getAttribute('data-semantic-prefix'); });
    },
    flame: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return TreeExplorer_js_1.FlameColorer.create(doc, null, node);
    },
    treeColoring: function (doc, node) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return TreeExplorer_js_1.TreeColorer.create.apply(TreeExplorer_js_1.TreeColorer, __spread([doc, null, node], rest));
    }
};
function initExplorers(document, node, mml) {
    var e_5, _a;
    var explorers = {};
    try {
        for (var _b = __values(Object.keys(allExplorers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            explorers[key] = allExplorers[key](document, node, mml);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return explorers;
}
function setA11yOptions(document, options) {
    var e_6, _a;
    for (var key in options) {
        if (document.options.a11y[key] !== undefined) {
            setA11yOption(document, key, options[key]);
        }
    }
    try {
        for (var _b = __values(document.math), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            item.attachExplorers(document);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
exports.setA11yOptions = setA11yOptions;
function setA11yOption(document, option, value) {
    switch (option) {
        case 'magnification':
            switch (value) {
                case 'None':
                    document.options.a11y.magnification = value;
                    document.options.a11y.keyMagnifier = false;
                    document.options.a11y.mouseMagnifier = false;
                    break;
                case 'Keyboard':
                    document.options.a11y.magnification = value;
                    document.options.a11y.keyMagnifier = true;
                    document.options.a11y.mouseMagnifier = false;
                    break;
                case 'Mouse':
                    document.options.a11y.magnification = value;
                    document.options.a11y.keyMagnifier = false;
                    document.options.a11y.mouseMagnifier = true;
                    break;
            }
            break;
        case 'highlight':
            switch (value) {
                case 'None':
                    document.options.a11y.highlight = value;
                    document.options.a11y.hover = false;
                    document.options.a11y.flame = false;
                    break;
                case 'Hover':
                    document.options.a11y.highlight = value;
                    document.options.a11y.hover = true;
                    document.options.a11y.flame = false;
                    break;
                case 'Flame':
                    document.options.a11y.highlight = value;
                    document.options.a11y.hover = false;
                    document.options.a11y.flame = true;
                    break;
            }
            break;
        default:
            document.options.a11y[option] = value;
    }
}
exports.setA11yOption = setA11yOption;
var csPrefsSetting = {};
var csPrefsVariables = function (menu, prefs) {
    var e_7, _a;
    var srVariable = menu.pool.lookup('speechRules');
    var _loop_1 = function (pref) {
        if (csPrefsSetting[pref])
            return "continue";
        menu.factory.get('variable')(menu.factory, {
            name: 'csprf_' + pref,
            setter: function (value) {
                csPrefsSetting[pref] = value;
                srVariable.setValue('clearspeak-' +
                    sre.ClearspeakPreferences.addPreference(sre.Engine.DOMAIN_TO_STYLES['clearspeak'], pref, value));
            },
            getter: function () { return csPrefsSetting[pref] || 'Auto'; }
        }, menu.pool);
    };
    try {
        for (var prefs_1 = __values(prefs), prefs_1_1 = prefs_1.next(); !prefs_1_1.done; prefs_1_1 = prefs_1.next()) {
            var pref = prefs_1_1.value;
            _loop_1(pref);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (prefs_1_1 && !prefs_1_1.done && (_a = prefs_1.return)) _a.call(prefs_1);
        }
        finally { if (e_7) throw e_7.error; }
    }
};
var csSelectionBox = function (menu, locale) {
    var e_8, _a;
    var prefs = sre.ClearspeakPreferences.getLocalePreferences();
    var props = prefs[locale];
    if (!props) {
        var csEntry = menu.findID('Accessibility', 'Speech', 'Clearspeak');
        if (csEntry) {
            csEntry.disable();
        }
        return null;
    }
    csPrefsVariables(menu, Object.keys(props));
    var items = [];
    var _loop_2 = function (prop) {
        items.push({
            'title': prop,
            'values': props[prop].map(function (x) { return x.replace(RegExp('^' + prop + '_'), ''); }),
            'variable': 'csprf_' + prop
        });
    };
    try {
        for (var _b = __values(Object.getOwnPropertyNames(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var prop = _c.value;
            _loop_2(prop);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
    var sb = menu.factory.get('selectionBox')(menu.factory, {
        'title': 'Clearspeak Preferences',
        'signature': '',
        'order': 'alphabetic',
        'grid': 'square',
        'selections': items
    }, menu);
    return { 'type': 'command',
        'id': 'ClearspeakPreferences',
        'content': 'Select Preferences', 'action': function () { return sb.post(0, 0); } };
};
var csMenu = function (menu, sub) {
    var locale = menu.pool.lookup('locale').getValue();
    var box = csSelectionBox(menu, locale);
    var items = sre.ClearspeakPreferences.smartPreferences(menu.mathItem, locale);
    if (box) {
        items.splice(2, 0, box);
    }
    return menu.factory.get('subMenu')(menu.factory, {
        items: items,
        id: 'Clearspeak'
    }, sub);
};
MJContextMenu_js_1.MJContextMenu.DynamicSubmenus.set('Clearspeak', csMenu);
var iso = {
    'de': 'German',
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French'
};
var language = function (menu, sub) {
    var e_9, _a;
    var radios = [];
    try {
        for (var _b = __values(sre.Variables.LOCALES), _c = _b.next(); !_c.done; _c = _b.next()) {
            var lang = _c.value;
            if (lang === 'nemeth')
                continue;
            radios.push({ type: 'radio', id: lang,
                content: iso[lang] || lang, variable: 'locale' });
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    radios.sort(function (x, y) { return x.content.localeCompare(y.content, 'en'); });
    return menu.factory.get('subMenu')(menu.factory, {
        items: radios, id: 'Language'
    }, sub);
};
MJContextMenu_js_1.MJContextMenu.DynamicSubmenus.set('A11yLanguage', language);
