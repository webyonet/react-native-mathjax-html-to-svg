import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmglyph_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mglyph").CommonMglyph> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmglyph<N, T, D> extends CHTMLmglyph_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
