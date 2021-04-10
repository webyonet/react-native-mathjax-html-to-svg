import { SVGWrapper } from '../Wrapper.js';
declare const SVGmtd_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mtd").CommonMtd> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmtd<N, T, D> extends SVGmtd_base {
    static kind: string;
    placeCell(x: number, y: number, W: number, H: number, D: number): [number, number];
    placeColor(x: number, y: number, W: number, H: number): void;
}
export {};
