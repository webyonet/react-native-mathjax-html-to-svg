import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGscriptbase } from './scriptbase.js';
declare const SVGmsub_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/msubsup").CommonMsub<SVGWrapper<any, any, any>>> & Constructor<SVGscriptbase<any, any, any>>;
export declare class SVGmsub<N, T, D> extends SVGmsub_base {
    static kind: string;
    static useIC: boolean;
}
declare const SVGmsup_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/msubsup").CommonMsub<SVGWrapper<any, any, any>>> & Constructor<SVGscriptbase<any, any, any>>;
export declare class SVGmsup<N, T, D> extends SVGmsup_base {
    static kind: string;
    static useIC: boolean;
}
declare const SVGmsubsup_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/msubsup").CommonMsubsup<SVGWrapper<any, any, any>>> & Constructor<SVGscriptbase<any, any, any>>;
export declare class SVGmsubsup<N, T, D> extends SVGmsubsup_base {
    static kind: string;
    static useIC: boolean;
    toSVG(parent: N): void;
}
export {};
