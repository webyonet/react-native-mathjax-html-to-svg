import { SVGWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGTextNode_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/TextNode").CommonTextNode> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGTextNode<N, T, D> extends SVGTextNode_base {
    static kind: string;
    static styles: StyleList;
    toSVG(parent: N): void;
}
export {};
