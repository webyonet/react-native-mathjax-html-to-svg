import { SVGWrapper } from '../Wrapper.js';
declare const SVGTeXAtom_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/TeXAtom").CommonTeXAtom> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGTeXAtom<N, T, D> extends SVGTeXAtom_base {
    static kind: string;
    toSVG(parent: N): void;
}
export {};
