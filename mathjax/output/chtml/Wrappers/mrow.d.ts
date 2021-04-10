import { CHTMLWrapper, Constructor } from '../Wrapper.js';
declare const CHTMLmrow_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mrow").CommonMrow> & Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmrow<N, T, D> extends CHTMLmrow_base {
    static kind: string;
    toCHTML(parent: N): void;
}
declare const CHTMLinferredMrow_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mrow").CommonInferredMrow> & Constructor<CHTMLmrow<any, any, any>>;
export declare class CHTMLinferredMrow<N, T, D> extends CHTMLinferredMrow_base {
    static kind: string;
}
export {};
