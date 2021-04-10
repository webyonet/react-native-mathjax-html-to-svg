import { SVGWrapper } from '../Wrapper.js';
declare const SVGmpadded_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mpadded").CommonMpadded> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmpadded<N, T, D> extends SVGmpadded_base {
    static kind: string;
    toSVG(parent: N): void;
}
export {};
