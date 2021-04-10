import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLmi_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mi").CommonMi> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmi<N, T, D> extends CHTMLmi_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
