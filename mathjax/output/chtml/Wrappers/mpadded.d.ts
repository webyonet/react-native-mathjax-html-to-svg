import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmpadded_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mpadded").CommonMpadded> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmpadded<N, T, D> extends CHTMLmpadded_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
