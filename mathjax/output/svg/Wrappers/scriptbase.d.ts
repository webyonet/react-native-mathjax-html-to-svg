import { SVGWrapper } from '../Wrapper.js';
declare const SVGscriptbase_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/scriptbase").CommonScriptbase<SVGWrapper<any, any, any>>> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGscriptbase<N, T, D> extends SVGscriptbase_base {
    static kind: string;
    static useIC: boolean;
    toSVG(parent: N): void;
}
export {};
