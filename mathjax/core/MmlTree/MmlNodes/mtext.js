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
exports.MmlMtext = void 0;
var MmlNode_js_1 = require("../MmlNode.js");
var MmlMtext = (function (_super) {
    __extends(MmlMtext, _super);
    function MmlMtext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texClass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
    }
    Object.defineProperty(MmlMtext.prototype, "kind", {
        get: function () {
            return 'mtext';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMtext.prototype, "isSpacelike", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    MmlMtext.defaults = __assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults);
    return MmlMtext;
}(MmlNode_js_1.AbstractMmlTokenNode));
exports.MmlMtext = MmlMtext;
