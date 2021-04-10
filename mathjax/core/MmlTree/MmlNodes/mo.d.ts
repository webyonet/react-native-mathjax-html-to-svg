import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlTokenNode, MmlNode, AttributeList } from '../MmlNode.js';
import { OperatorList, RangeDef } from '../OperatorDictionary.js';
export declare class MmlMo extends AbstractMmlTokenNode {
    static defaults: PropertyList;
    static RANGES: RangeDef[];
    static MMLSPACING: number[][];
    static OPTABLE: {
        [form: string]: OperatorList;
    };
    _texClass: number;
    get texClass(): number;
    set texClass(value: number);
    lspace: number;
    rspace: number;
    get kind(): string;
    get isEmbellished(): boolean;
    get hasNewLine(): boolean;
    coreParent(): MmlNode;
    coreText(parent: MmlNode): string;
    hasSpacingAttributes(): boolean;
    get isAccent(): boolean;
    setTeXclass(prev: MmlNode): MmlNode;
    adjustTeXclass(prev: MmlNode): MmlNode;
    setInheritedAttributes(attributes?: AttributeList, display?: boolean, level?: number, prime?: boolean): void;
    getForms(): [string, string, string];
    protected handleExplicitForm(forms: string[]): string[];
    protected getRange(mo: string): RangeDef;
}
