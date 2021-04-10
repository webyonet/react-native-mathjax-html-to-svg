import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLmfenced_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mfenced").CommonMfenced> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmfenced<N, T, D> extends CHTMLmfenced_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
