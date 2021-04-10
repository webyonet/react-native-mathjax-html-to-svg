import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmtd_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mtd").CommonMtd> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmtd<N, T, D> extends CHTMLmtd_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
