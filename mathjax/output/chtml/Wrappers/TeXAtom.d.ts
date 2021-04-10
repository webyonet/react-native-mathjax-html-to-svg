import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLTeXAtom_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/TeXAtom").CommonTeXAtom> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLTeXAtom<N, T, D> extends CHTMLTeXAtom_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
