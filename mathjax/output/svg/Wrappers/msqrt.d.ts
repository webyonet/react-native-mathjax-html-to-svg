import { SVGWrapper } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
declare const SVGmsqrt_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/msqrt").CommonMsqrt> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmsqrt<N, T, D> extends SVGmsqrt_base {
    static kind: string;
    dx: number;
    toSVG(parent: N): void;
    protected addRoot(_ROOT: N, _root: SVGWrapper<N, T, D>, _sbox: BBox, _H: number): void;
}
export {};
