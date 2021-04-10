import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlBaseNode, MmlNode } from '../MmlNode.js';
export declare class TeXAtom extends AbstractMmlBaseNode {
    static defaults: PropertyList;
    texClass: number;
    get kind(): string;
    get arity(): number;
    get notParent(): boolean;
    setTeXclass(prev: MmlNode): MmlNode;
    adjustTeXclass(prev: MmlNode): MmlNode;
}
