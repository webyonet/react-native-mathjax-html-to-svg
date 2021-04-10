import { SVGWrapper } from '../Wrapper.js';
import { EventHandler } from '../../common/Wrappers/maction.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGmaction_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/maction").CommonMaction<SVGWrapper<any, any, any>>> & import("mathjax-full/ts/output/common/Wrapper").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmaction<N, T, D> extends SVGmaction_base {
    static kind: string;
    static styles: StyleList;
    static actions: Map<string, [import("mathjax-full/ts/output/common/Wrappers/maction").ActionHandler<SVGmaction<any, any, any>>, import("mathjax-full/ts/output/common/Wrappers/maction").ActionData]>;
    toSVG(parent: N): void;
    setEventHandler(type: string, handler: EventHandler): void;
}
export {};
