import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlTokenNode } from '../MmlNode.js';
export declare class MmlMspace extends AbstractMmlTokenNode {
    static defaults: PropertyList;
    texClass: number;
    get kind(): string;
    get arity(): number;
    get isSpacelike(): boolean;
    get hasNewline(): boolean;
}
