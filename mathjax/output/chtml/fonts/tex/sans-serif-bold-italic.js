"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sansSerifBoldItalic = void 0;
var FontData_js_1 = require("../../FontData.js");
var sans_serif_bold_italic_js_1 = require("../../../common/fonts/tex/sans-serif-bold-italic.js");
exports.sansSerifBoldItalic = FontData_js_1.AddCSS(sans_serif_bold_italic_js_1.sansSerifBoldItalic, {
    0x131: { f: 'SSB' },
    0x237: { f: 'SSB' },
});
