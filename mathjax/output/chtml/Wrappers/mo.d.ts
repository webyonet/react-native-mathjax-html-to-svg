import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmo_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mo").CommonMo> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmo<N, T, D> extends CHTMLmo_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
    protected stretchHTML(chtml: N): void;
}
export {};
