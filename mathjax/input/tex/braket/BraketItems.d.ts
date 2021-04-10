import { CheckType, BaseItem, StackItem } from '../StackItem.js';
export declare class BraketItem extends BaseItem {
    get kind(): string;
    get isOpen(): boolean;
    checkItem(item: StackItem): CheckType;
    toMml(): import("mathjax-full/ts/core/MmlTree/MmlNode").MmlNode;
}
