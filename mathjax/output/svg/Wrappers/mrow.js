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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGinferredMrow = exports.SVGmrow = void 0;
var Wrapper_js_1 = require("../Wrapper.js");
var mrow_js_1 = require("../../common/Wrappers/mrow.js");
var mrow_js_2 = require("../../common/Wrappers/mrow.js");
var mrow_js_3 = require("../../../core/MmlTree/MmlNodes/mrow.js");
var SVGmrow = (function (_super) {
    __extends(SVGmrow, _super);
    function SVGmrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmrow.prototype.toSVG = function (parent) {
        var svg = (this.node.isInferred ? (this.element = parent) : this.standardSVGnode(parent));
        this.addChildren(svg);
    };
    SVGmrow.kind = mrow_js_3.MmlMrow.prototype.kind;
    return SVGmrow;
}(mrow_js_1.CommonMrowMixin(Wrapper_js_1.SVGWrapper)));
exports.SVGmrow = SVGmrow;
var SVGinferredMrow = (function (_super) {
    __extends(SVGinferredMrow, _super);
    function SVGinferredMrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGinferredMrow.kind = mrow_js_3.MmlInferredMrow.prototype.kind;
    return SVGinferredMrow;
}(mrow_js_2.CommonInferredMrowMixin(SVGmrow)));
exports.SVGinferredMrow = SVGinferredMrow;
