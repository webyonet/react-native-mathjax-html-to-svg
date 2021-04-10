import { CHTMLWrapper } from '../Wrapper.js';
import { EventHandler } from '../../common/Wrappers/maction.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmaction_base: import("mathjax-full/ts/output/common/Wrapper").Constructor<import("mathjax-full/ts/output/common/Wrappers/maction").CommonMaction<CHTMLWrapper<any, any, any>>> & import("mathjax-full/ts/output/common/Wrapper").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmaction<N, T, D> extends CHTMLmaction_base {
    static kind: string;
    static styles: StyleList;
    static actions: Map<string, [import("mathjax-full/ts/output/common/Wrappers/maction").ActionHandler<CHTMLmaction<any, any, any>>, import("mathjax-full/ts/output/common/Wrappers/maction").ActionData]>;
    toCHTML(parent: N): void;
    setEventHandler(type: string, handler: EventHandler): void;
}
export {};
