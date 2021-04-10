import { SVGWrapper } from '../Wrapper.js';
import { SVGinferredMrow } from './mrow.js';
declare const SVGmfenced_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mfenced").CommonMfenced> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmfenced<N, T, D> extends SVGmfenced_base {
    static kind: string;
    mrow: SVGinferredMrow<N, T, D>;
    toSVG(parent: N): void;
    protected setChildrenParent(parent: SVGWrapper<N, T, D>): void;
}
export {};
