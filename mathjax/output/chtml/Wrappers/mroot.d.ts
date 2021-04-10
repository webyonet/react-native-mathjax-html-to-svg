import { CHTMLWrapper } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
declare const CHTMLmroot_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/mroot").CommonMroot>;
export declare class CHTMLmroot<N, T, D> extends CHTMLmroot_base {
    static kind: string;
    protected addRoot(ROOT: N, root: CHTMLWrapper<N, T, D>, sbox: BBox, H: number): void;
}
export {};
