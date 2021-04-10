"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsdomAdaptor = void 0;
var HTMLAdaptor_js_1 = require("./HTMLAdaptor.js");
function jsdomAdaptor(JSDOM) {
    return new HTMLAdaptor_js_1.HTMLAdaptor(new JSDOM().window);
}
exports.jsdomAdaptor = jsdomAdaptor;
