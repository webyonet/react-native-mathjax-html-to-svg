import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGmsubsup, SVGmsub, SVGmsup } from './msubsup.js';
declare const SVGmunder_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/munderover").CommonMunder<SVGWrapper<any, any, any>>> & Constructor<SVGmsub<any, any, any>>;
export declare class SVGmunder<N, T, D> extends SVGmunder_base {
    static kind: string;
    static useIC: boolean;
    toSVG(parent: N): void;
}
declare const SVGmover_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/munderover").CommonMover<SVGWrapper<any, any, any>>> & Constructor<SVGmsup<any, any, any>>;
export declare class SVGmover<N, T, D> extends SVGmover_base {
    static kind: string;
    static useIC: boolean;
    toSVG(parent: N): void;
}
declare const SVGmunderover_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/munderover").CommonMunderover<SVGWrapper<any, any, any>>> & Constructor<SVGmsubsup<any, any, any>>;
export declare class SVGmunderover<N, T, D> extends SVGmunderover_base {
    static kind: string;
    static useIC: boolean;
    toSVG(parent: N): void;
}
export {};
