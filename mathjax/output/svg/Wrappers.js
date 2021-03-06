"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGWrappers = void 0;
var Wrapper_js_1 = require("./Wrapper.js");
var math_js_1 = require("./Wrappers/math.js");
var mrow_js_1 = require("./Wrappers/mrow.js");
var mi_js_1 = require("./Wrappers/mi.js");
var mo_js_1 = require("./Wrappers/mo.js");
var mn_js_1 = require("./Wrappers/mn.js");
var ms_js_1 = require("./Wrappers/ms.js");
var mtext_js_1 = require("./Wrappers/mtext.js");
var merror_js_1 = require("./Wrappers/merror.js");
var mspace_js_1 = require("./Wrappers/mspace.js");
var mpadded_js_1 = require("./Wrappers/mpadded.js");
var mphantom_js_1 = require("./Wrappers/mphantom.js");
var mfrac_js_1 = require("./Wrappers/mfrac.js");
var msqrt_js_1 = require("./Wrappers/msqrt.js");
var mroot_js_1 = require("./Wrappers/mroot.js");
var mfenced_js_1 = require("./Wrappers/mfenced.js");
var msubsup_js_1 = require("./Wrappers/msubsup.js");
var munderover_js_1 = require("./Wrappers/munderover.js");
var mmultiscripts_js_1 = require("./Wrappers/mmultiscripts.js");
var mtable_js_1 = require("./Wrappers/mtable.js");
var mtr_js_1 = require("./Wrappers/mtr.js");
var mtd_js_1 = require("./Wrappers/mtd.js");
var maction_js_1 = require("./Wrappers/maction.js");
var menclose_js_1 = require("./Wrappers/menclose.js");
var semantics_js_1 = require("./Wrappers/semantics.js");
var mglyph_js_1 = require("./Wrappers/mglyph.js");
var TeXAtom_js_1 = require("./Wrappers/TeXAtom.js");
var TextNode_js_1 = require("./Wrappers/TextNode.js");
exports.SVGWrappers = (_a = {},
    _a[math_js_1.SVGmath.kind] = math_js_1.SVGmath,
    _a[mrow_js_1.SVGmrow.kind] = mrow_js_1.SVGmrow,
    _a[mrow_js_1.SVGinferredMrow.kind] = mrow_js_1.SVGinferredMrow,
    _a[mi_js_1.SVGmi.kind] = mi_js_1.SVGmi,
    _a[mo_js_1.SVGmo.kind] = mo_js_1.SVGmo,
    _a[mn_js_1.SVGmn.kind] = mn_js_1.SVGmn,
    _a[ms_js_1.SVGms.kind] = ms_js_1.SVGms,
    _a[mtext_js_1.SVGmtext.kind] = mtext_js_1.SVGmtext,
    _a[merror_js_1.SVGmerror.kind] = merror_js_1.SVGmerror,
    _a[mspace_js_1.SVGmspace.kind] = mspace_js_1.SVGmspace,
    _a[mpadded_js_1.SVGmpadded.kind] = mpadded_js_1.SVGmpadded,
    _a[mphantom_js_1.SVGmphantom.kind] = mphantom_js_1.SVGmphantom,
    _a[mfrac_js_1.SVGmfrac.kind] = mfrac_js_1.SVGmfrac,
    _a[msqrt_js_1.SVGmsqrt.kind] = msqrt_js_1.SVGmsqrt,
    _a[mroot_js_1.SVGmroot.kind] = mroot_js_1.SVGmroot,
    _a[mfenced_js_1.SVGmfenced.kind] = mfenced_js_1.SVGmfenced,
    _a[msubsup_js_1.SVGmsub.kind] = msubsup_js_1.SVGmsub,
    _a[msubsup_js_1.SVGmsup.kind] = msubsup_js_1.SVGmsup,
    _a[msubsup_js_1.SVGmsubsup.kind] = msubsup_js_1.SVGmsubsup,
    _a[munderover_js_1.SVGmunder.kind] = munderover_js_1.SVGmunder,
    _a[munderover_js_1.SVGmover.kind] = munderover_js_1.SVGmover,
    _a[munderover_js_1.SVGmunderover.kind] = munderover_js_1.SVGmunderover,
    _a[mmultiscripts_js_1.SVGmmultiscripts.kind] = mmultiscripts_js_1.SVGmmultiscripts,
    _a[mtable_js_1.SVGmtable.kind] = mtable_js_1.SVGmtable,
    _a[mtr_js_1.SVGmtr.kind] = mtr_js_1.SVGmtr,
    _a[mtr_js_1.SVGmlabeledtr.kind] = mtr_js_1.SVGmlabeledtr,
    _a[mtd_js_1.SVGmtd.kind] = mtd_js_1.SVGmtd,
    _a[maction_js_1.SVGmaction.kind] = maction_js_1.SVGmaction,
    _a[menclose_js_1.SVGmenclose.kind] = menclose_js_1.SVGmenclose,
    _a[semantics_js_1.SVGsemantics.kind] = semantics_js_1.SVGsemantics,
    _a[semantics_js_1.SVGannotation.kind] = semantics_js_1.SVGannotation,
    _a[semantics_js_1.SVGannotationXML.kind] = semantics_js_1.SVGannotationXML,
    _a[semantics_js_1.SVGxml.kind] = semantics_js_1.SVGxml,
    _a[mglyph_js_1.SVGmglyph.kind] = mglyph_js_1.SVGmglyph,
    _a[TeXAtom_js_1.SVGTeXAtom.kind] = TeXAtom_js_1.SVGTeXAtom,
    _a[TextNode_js_1.SVGTextNode.kind] = TextNode_js_1.SVGTextNode,
    _a[Wrapper_js_1.SVGWrapper.kind] = Wrapper_js_1.SVGWrapper,
    _a);
