import { SVG } from '../svg.js';
import { CommonWrapperFactory } from '../common/WrapperFactory.js';
import { SVGWrapper, SVGWrapperClass } from './Wrapper.js';
import { SVGCharOptions, SVGDelimiterData, SVGFontData } from './FontData.js';
export declare class SVGWrapperFactory<N, T, D> extends CommonWrapperFactory<SVG<N, T, D>, SVGWrapper<N, T, D>, SVGWrapperClass, SVGCharOptions, SVGDelimiterData, SVGFontData> {
    static defaultNodes: {
        [kind: string]: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrapper").AnyWrapper>;
    };
    jax: SVG<N, T, D>;
}
