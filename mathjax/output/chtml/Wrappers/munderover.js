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
exports.CHTMLmunderover = exports.CHTMLmover = exports.CHTMLmunder = void 0;
var msubsup_js_1 = require("./msubsup.js");
var munderover_js_1 = require("../../common/Wrappers/munderover.js");
var munderover_js_2 = require("../../common/Wrappers/munderover.js");
var munderover_js_3 = require("../../common/Wrappers/munderover.js");
var munderover_js_4 = require("../../../core/MmlTree/MmlNodes/munderover.js");
var CHTMLmunder = (function (_super) {
    __extends(CHTMLmunder, _super);
    function CHTMLmunder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmunder.prototype.toCHTML = function (parent) {
        if (this.hasMovableLimits()) {
            _super.prototype.toCHTML.call(this, parent);
            this.adaptor.setAttribute(this.chtml, 'limits', 'false');
            return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var base = this.adaptor.append(this.adaptor.append(this.chtml, this.html('mjx-row')), this.html('mjx-base'));
        var under = this.adaptor.append(this.adaptor.append(this.chtml, this.html('mjx-row')), this.html('mjx-under'));
        this.baseChild.toCHTML(base);
        this.script.toCHTML(under);
        var basebox = this.baseChild.getBBox();
        var underbox = this.script.getBBox();
        var k = this.getUnderKV(basebox, underbox)[0];
        var delta = this.getDelta(true);
        this.adaptor.setStyle(under, 'paddingTop', this.em(k));
        this.setDeltaW([base, under], this.getDeltaW([basebox, underbox], [0, -delta]));
        this.adjustUnderDepth(under, underbox);
    };
    CHTMLmunder.kind = munderover_js_4.MmlMunder.prototype.kind;
    CHTMLmunder.useIC = true;
    CHTMLmunder.styles = {
        'mjx-over': {
            'text-align': 'left'
        },
        'mjx-munder:not([limits="false"])': {
            display: 'inline-table',
        },
        'mjx-munder > mjx-row': {
            'text-align': 'left'
        },
        'mjx-under': {
            'padding-bottom': '.1em'
        }
    };
    return CHTMLmunder;
}(munderover_js_1.CommonMunderMixin(msubsup_js_1.CHTMLmsub)));
exports.CHTMLmunder = CHTMLmunder;
var CHTMLmover = (function (_super) {
    __extends(CHTMLmover, _super);
    function CHTMLmover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmover.prototype.toCHTML = function (parent) {
        if (this.hasMovableLimits()) {
            _super.prototype.toCHTML.call(this, parent);
            this.adaptor.setAttribute(this.chtml, 'limits', 'false');
            return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var over = this.adaptor.append(this.chtml, this.html('mjx-over'));
        var base = this.adaptor.append(this.chtml, this.html('mjx-base'));
        this.script.toCHTML(over);
        this.baseChild.toCHTML(base);
        var overbox = this.script.getBBox();
        var basebox = this.baseChild.getBBox();
        var k = this.getOverKU(basebox, overbox)[0];
        var delta = this.getDelta();
        this.adaptor.setStyle(over, 'paddingBottom', this.em(k));
        this.setDeltaW([base, over], this.getDeltaW([basebox, overbox], [0, delta]));
        this.adjustOverDepth(over, overbox);
    };
    CHTMLmover.kind = munderover_js_4.MmlMover.prototype.kind;
    CHTMLmover.useIC = true;
    CHTMLmover.styles = {
        'mjx-mover:not([limits="false"])': {
            'padding-top': '.1em'
        },
        'mjx-mover:not([limits="false"]) > *': {
            display: 'block',
            'text-align': 'left'
        }
    };
    return CHTMLmover;
}(munderover_js_2.CommonMoverMixin(msubsup_js_1.CHTMLmsup)));
exports.CHTMLmover = CHTMLmover;
var CHTMLmunderover = (function (_super) {
    __extends(CHTMLmunderover, _super);
    function CHTMLmunderover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmunderover.prototype.toCHTML = function (parent) {
        if (this.hasMovableLimits()) {
            _super.prototype.toCHTML.call(this, parent);
            this.adaptor.setAttribute(this.chtml, 'limits', 'false');
            return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var over = this.adaptor.append(this.chtml, this.html('mjx-over'));
        var table = this.adaptor.append(this.adaptor.append(this.chtml, this.html('mjx-box')), this.html('mjx-munder'));
        var base = this.adaptor.append(this.adaptor.append(table, this.html('mjx-row')), this.html('mjx-base'));
        var under = this.adaptor.append(this.adaptor.append(table, this.html('mjx-row')), this.html('mjx-under'));
        this.overChild.toCHTML(over);
        this.baseChild.toCHTML(base);
        this.underChild.toCHTML(under);
        var overbox = this.overChild.getBBox();
        var basebox = this.baseChild.getBBox();
        var underbox = this.underChild.getBBox();
        var ok = this.getOverKU(basebox, overbox)[0];
        var uk = this.getUnderKV(basebox, underbox)[0];
        var delta = this.getDelta();
        this.adaptor.setStyle(over, 'paddingBottom', this.em(ok));
        this.adaptor.setStyle(under, 'paddingTop', this.em(uk));
        this.setDeltaW([base, under, over], this.getDeltaW([basebox, underbox, overbox], [0, -delta, delta]));
        this.adjustOverDepth(over, overbox);
        this.adjustUnderDepth(under, underbox);
    };
    CHTMLmunderover.kind = munderover_js_4.MmlMunderover.prototype.kind;
    CHTMLmunderover.useIC = true;
    CHTMLmunderover.styles = {
        'mjx-munderover:not([limits="false"])': {
            'padding-top': '.1em'
        },
        'mjx-munderover:not([limits="false"]) > *': {
            display: 'block'
        },
    };
    return CHTMLmunderover;
}(munderover_js_3.CommonMunderoverMixin(msubsup_js_1.CHTMLmsubsup)));
exports.CHTMLmunderover = CHTMLmunderover;
