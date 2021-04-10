import { SVGWrapper, Constructor } from '../Wrapper.js';
declare const SVGmrow_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mrow").CommonMrow> & Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmrow<N, T, D> extends SVGmrow_base {
    static kind: string;
    toSVG(parent: N): void;
}
declare const SVGinferredMrow_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mrow").CommonInferredMrow> & Constructor<SVGmrow<any, any, any>>;
export declare class SVGinferredMrow<N, T, D> extends SVGinferredMrow_base {
    static kind: string;
}
export {};
