import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmath_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/math").CommonMath> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmath<N, T, D> extends CHTMLmath_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
    protected handleDisplay(parent: N): void;
    protected handleInline(parent: N): void;
    setChildPWidths(recompute: boolean, w?: number, clear?: boolean): boolean;
}
export {};
