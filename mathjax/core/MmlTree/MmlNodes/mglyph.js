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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MmlMglyph = void 0;
var MmlNode_js_1 = require("../MmlNode.js");
var MmlMglyph = (function (_super) {
    __extends(MmlMglyph, _super);
    function MmlMglyph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texClass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
    }
    Object.defineProperty(MmlMglyph.prototype, "kind", {
        get: function () {
            return 'mglyph';
        },
        enumerable: false,
        configurable: true
    });
    MmlMglyph.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults), { alt: '', src: '', width: 'auto', height: 'auto', valign: '0em' });
    return MmlMglyph;
}(MmlNode_js_1.AbstractMmlTokenNode));
exports.MmlMglyph = MmlMglyph;
