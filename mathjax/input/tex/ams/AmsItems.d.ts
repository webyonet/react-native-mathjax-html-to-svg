import { ArrayItem } from '../base/BaseItems.js';
export declare class MultlineItem extends ArrayItem {
    constructor(factory: any, ...args: any[]);
    get kind(): string;
    EndEntry(): void;
    EndRow(): void;
    EndTable(): void;
}
