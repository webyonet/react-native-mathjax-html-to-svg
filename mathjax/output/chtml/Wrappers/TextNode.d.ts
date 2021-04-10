import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLTextNode_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/TextNode").CommonTextNode> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLTextNode<N, T, D> extends CHTMLTextNode_base {
    static kind: string;
    static autoStyle: boolean;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
