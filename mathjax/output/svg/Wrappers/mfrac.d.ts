import { SVGWrapper } from '../Wrapper.js';
import { SVGmo } from './mo.js';
declare const SVGmfrac_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mfrac").CommonMfrac> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmfrac<N, T, D> extends SVGmfrac_base {
    static kind: string;
    bevel: SVGmo<N, T, D>;
    toSVG(parent: N): void;
    protected makeFraction(display: boolean, t: number): void;
    protected makeAtop(display: boolean): void;
    protected makeBevelled(display: boolean): void;
}
export {};
