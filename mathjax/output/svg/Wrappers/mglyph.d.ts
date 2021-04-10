import { SVGWrapper } from '../Wrapper.js';
declare const SVGmglyph_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mglyph").CommonMglyph> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmglyph<N, T, D> extends SVGmglyph_base {
    static kind: string;
    toSVG(parent: N): void;
}
export {};
