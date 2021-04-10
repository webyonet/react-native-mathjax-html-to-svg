import { SVGWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGmath_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/math").CommonMath> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmath<N, T, D> extends SVGmath_base {
    static kind: string;
    static styles: StyleList;
    toSVG(parent: N): void;
    protected handleDisplay(): void;
    protected handleSpeech(): void;
    protected getTitleID(): string;
    setChildPWidths(recompute: boolean, w?: number, _clear?: boolean): boolean;
}
export {};
