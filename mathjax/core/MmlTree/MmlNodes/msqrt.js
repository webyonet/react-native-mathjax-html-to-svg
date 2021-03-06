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
exports.MmlMsqrt = void 0;
var MmlNode_js_1 = require("../MmlNode.js");
var MmlMsqrt = (function (_super) {
    __extends(MmlMsqrt, _super);
    function MmlMsqrt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texClass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
    }
    Object.defineProperty(MmlMsqrt.prototype, "kind", {
        get: function () {
            return 'msqrt';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMsqrt.prototype, "arity", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMsqrt.prototype, "linebreakContainer", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    MmlMsqrt.prototype.setTeXclass = function (prev) {
        this.getPrevClass(prev);
        this.childNodes[0].setTeXclass(null);
        return this;
    };
    MmlMsqrt.prototype.setChildInheritedAttributes = function (attributes, display, level, _prime) {
        this.childNodes[0].setInheritedAttributes(attributes, display, level, true);
    };
    MmlMsqrt.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
    return MmlMsqrt;
}(MmlNode_js_1.AbstractMmlNode));
exports.MmlMsqrt = MmlMsqrt;
