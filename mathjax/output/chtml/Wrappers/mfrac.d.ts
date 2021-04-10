import { CHTMLWrapper } from '../Wrapper.js';
import { CHTMLmo } from './mo.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmfrac_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mfrac").CommonMfrac> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmfrac<N, T, D> extends CHTMLmfrac_base {
    static kind: string;
    static styles: StyleList;
    bevel: CHTMLmo<N, T, D>;
    toCHTML(parent: N): void;
    protected makeFraction(display: boolean, t: number): void;
    protected makeAtop(display: boolean): void;
    protected makeBevelled(display: boolean): void;
}
export {};
