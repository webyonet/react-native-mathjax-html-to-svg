import { CheckType, BaseItem, StackItem } from '../StackItem.js';
export declare class AutoOpen extends BaseItem {
    get kind(): string;
    get isOpen(): boolean;
    toMml(): import("mathjax-full/ts/core/MmlTree/MmlNode").MmlNode;
    checkItem(item: StackItem): CheckType;
}
