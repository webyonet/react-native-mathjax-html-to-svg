import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGmsubsup } from './msubsup.js';
declare const SVGmmultiscripts_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mmultiscripts").CommonMmultiscripts<SVGWrapper<any, any, any>>> & Constructor<SVGmsubsup<any, any, any>>;
export declare class SVGmmultiscripts<N, T, D> extends SVGmmultiscripts_base {
    static kind: string;
    toSVG(parent: N): void;
    protected addScripts(x: number, u: number, v: number, isPre: boolean, i: number, n: number): number;
}
export {};
