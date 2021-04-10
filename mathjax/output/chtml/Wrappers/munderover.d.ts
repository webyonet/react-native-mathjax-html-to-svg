import { CHTMLWrapper, Constructor } from '../Wrapper.js';
import { CHTMLmsubsup, CHTMLmsub, CHTMLmsup } from './msubsup.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmunder_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/munderover").CommonMunder<CHTMLWrapper<any, any, any>>> & Constructor<CHTMLmsub<any, any, any>>;
export declare class CHTMLmunder<N, T, D> extends CHTMLmunder_base {
    static kind: string;
    static useIC: boolean;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
declare const CHTMLmover_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/munderover").CommonMover<CHTMLWrapper<any, any, any>>> & Constructor<CHTMLmsup<any, any, any>>;
export declare class CHTMLmover<N, T, D> extends CHTMLmover_base {
    static kind: string;
    static useIC: boolean;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
declare const CHTMLmunderover_base: Constructor<import("mathjax-full/ts/output/common/Wrappers/munderover").CommonMunderover<CHTMLWrapper<any, any, any>>> & Constructor<CHTMLmsubsup<any, any, any>>;
export declare class CHTMLmunderover<N, T, D> extends CHTMLmunderover_base {
    static kind: string;
    static useIC: boolean;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
