import { OptionList } from '../../util/Options.js';
import { StyleList } from '../../util/StyleList.js';
export interface CharOptions {
    ic?: number;
    sk?: number;
    unknown?: boolean;
    smp?: number;
}
export declare type CharData<C extends CharOptions> = [number, number, number] | [number, number, number, C];
export declare type CharMap<C extends CharOptions> = {
    [n: number]: CharData<C>;
};
export declare type CharMapMap<C extends CharOptions> = {
    [name: string]: CharMap<C>;
};
export interface VariantData<C extends CharOptions> {
    linked: CharMap<C>[];
    chars: CharMap<C>;
}
export declare type VariantMap<C extends CharOptions, V extends VariantData<C>> = {
    [name: string]: V;
};
export declare type CssFontData = [string, boolean, boolean];
export declare type CssFontMap = {
    [name: string]: CssFontData;
};
export declare const enum DIRECTION {
    None = 0,
    Vertical = 1,
    Horizontal = 2
}
export declare const V = DIRECTION.Vertical;
export declare const H = DIRECTION.Horizontal;
export declare type DelimiterData = {
    dir: DIRECTION;
    sizes?: number[];
    variants?: number[];
    schar?: number[];
    stretch?: number[];
    HDW?: number[];
    min?: number;
    c?: number;
};
export declare type DelimiterMap<D extends DelimiterData> = {
    [n: number]: D;
};
export declare const NOSTRETCH: DelimiterData;
export declare type RemapData = string;
export declare type RemapMap = {
    [key: number]: RemapData;
};
export declare type RemapMapMap = {
    [key: string]: RemapMap;
};
export declare type SmpMap = {
    [c: number]: number;
};
export declare type SmpData = [number, number, number?, number?, number?];
export declare type FontParameters = {
    x_height: number;
    quad: number;
    num1: number;
    num2: number;
    num3: number;
    denom1: number;
    denom2: number;
    sup1: number;
    sup2: number;
    sup3: number;
    sub1: number;
    sub2: number;
    sup_drop: number;
    sub_drop: number;
    delim1: number;
    delim2: number;
    axis_height: number;
    rule_thickness: number;
    big_op_spacing1: number;
    big_op_spacing2: number;
    big_op_spacing3: number;
    big_op_spacing4: number;
    big_op_spacing5: number;
    surd_height: number;
    scriptspace: number;
    nulldelimiterspace: number;
    delimiterfactor: number;
    delimitershortfall: number;
    min_rule_thickness: number;
};
export declare class FontData<C extends CharOptions, V extends VariantData<C>, D extends DelimiterData> {
    static OPTIONS: OptionList;
    static defaultVariants: string[][];
    static defaultCssFonts: CssFontMap;
    protected static defaultCssFamilyPrefix: string;
    static VariantSmp: {
        [name: string]: SmpData;
    };
    static SmpRanges: number[][];
    static SmpRemap: SmpMap;
    static SmpRemapGreekU: SmpMap;
    static SmpRemapGreekL: SmpMap;
    protected static defaultAccentMap: {
        768: string;
        769: string;
        770: string;
        771: string;
        772: string;
        774: string;
        775: string;
        776: string;
        778: string;
        780: string;
        8594: string;
        8242: string;
        8243: string;
        8244: string;
        8245: string;
        8246: string;
        8247: string;
        8279: string;
        8400: string;
        8401: string;
        8406: string;
        8417: string;
        8432: string;
        8411: string;
        8412: string;
        8428: string;
        8429: string;
        8430: string;
        8431: string;
    };
    protected static defaultMoMap: {
        45: string;
    };
    protected static defaultMnMap: {
        45: string;
    };
    static defaultParams: FontParameters;
    protected static defaultDelimiters: DelimiterMap<any>;
    protected static defaultChars: CharMapMap<any>;
    protected static defaultSizeVariants: string[];
    protected variant: VariantMap<C, V>;
    protected delimiters: DelimiterMap<D>;
    protected sizeVariants: string[];
    protected cssFontMap: CssFontMap;
    cssFamilyPrefix: string;
    protected remapChars: RemapMapMap;
    params: FontParameters;
    styles: StyleList;
    static charOptions(font: CharMap<CharOptions>, n: number): CharOptions;
    constructor();
    createVariant(name: string, inherit?: string, link?: string): void;
    protected remapSmpChars(chars: CharMap<C>, name: string): void;
    protected smpChar(n: number): CharData<C>;
    createVariants(variants: string[][]): void;
    defineChars(name: string, chars: CharMap<C>): void;
    defineDelimiters(delims: DelimiterMap<D>): void;
    defineRemap(name: string, remap: RemapMap): void;
    getDelimiter(n: number): DelimiterData;
    getSizeVariant(n: number, i: number): string;
    getChar(name: string, n: number): CharData<C>;
    getVariant(name: string): V;
    getCssFont(variant: string): CssFontData;
    getFamily(family: string): string;
    getRemappedChar(name: string, c: number): string;
}
export interface FontDataClass<C extends CharOptions, V extends VariantData<C>, D extends DelimiterData> {
    OPTIONS: OptionList;
    defaultCssFonts: CssFontMap;
    defaultVariants: string[][];
    defaultParams: FontParameters;
    charOptions(font: CharMap<C>, n: number): C;
    new (...args: any[]): FontData<C, V, D>;
}
