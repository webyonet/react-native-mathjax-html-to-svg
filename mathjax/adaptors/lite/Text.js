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
exports.LiteComment = exports.LiteText = void 0;
var LiteText = (function () {
    function LiteText(text) {
        if (text === void 0) { text = ''; }
        this.value = text;
    }
    Object.defineProperty(LiteText.prototype, "kind", {
        get: function () {
            return '#text';
        },
        enumerable: false,
        configurable: true
    });
    return LiteText;
}());
exports.LiteText = LiteText;
var LiteComment = (function (_super) {
    __extends(LiteComment, _super);
    function LiteComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LiteComment.prototype, "kind", {
        get: function () {
            return '#comment';
        },
        enumerable: false,
        configurable: true
    });
    return LiteComment;
}(LiteText));
exports.LiteComment = LiteComment;
