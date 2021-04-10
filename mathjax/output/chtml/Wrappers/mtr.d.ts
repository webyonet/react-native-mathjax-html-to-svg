import { CHTMLWrapper, Constructor } from '../Wrapper.js';
import { CHTMLmtd } from './mtd.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmtr_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mtr").CommonMtr<CHTMLmtd<any, any, any>>> & Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmtr<N, T, D> extends CHTMLmtr_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
declare const CHTMLmlabeledtr_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/mtr").CommonMlabeledtr<CHTMLmtd<any, any, any>>> & Constructor<CHTMLmtr<any, any, any>>;
export declare class CHTMLmlabeledtr<N, T, D> extends CHTMLmlabeledtr_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
