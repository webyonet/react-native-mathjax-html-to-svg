import { SVGFontData, SVGCharOptions, SVGVariantData, SVGDelimiterData, DelimiterMap, CharMapMap } from '../FontData.js';
declare const TeXFont_base: import("mathjax-full/ts/output/common/FontData").FontDataClass<SVGCharOptions, SVGVariantData, SVGDelimiterData> & typeof SVGFontData;
export declare class TeXFont extends TeXFont_base {
    protected static defaultDelimiters: DelimiterMap<SVGDelimiterData>;
    protected static defaultChars: CharMapMap<SVGCharOptions>;
    protected static variantCacheIds: {
        [name: string]: string;
    };
    constructor();
}
export {};
