import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGmsqrt } from './msqrt.js';
import { BBox } from '../../../util/BBox.js';
declare const SVGmroot_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mroot").CommonMroot> & Constructor<SVGmsqrt<any, any, any>>;
export declare class SVGmroot<N, T, D> extends SVGmroot_base {
    static kind: string;
    protected addRoot(ROOT: N, root: SVGWrapper<N, T, D>, sbox: BBox, H: number): void;
}
export {};
