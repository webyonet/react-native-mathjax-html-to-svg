import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLmspace_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mspace").CommonMspace> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmspace<N, T, D> extends CHTMLmspace_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
