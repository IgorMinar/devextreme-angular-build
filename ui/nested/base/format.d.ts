import { NestedOption } from '../../../core/nested-option';
export declare abstract class DxoFormat extends NestedOption {
    currency: string;
    formatter: Function;
    parser: Function;
    precision: number;
    type: string;
}
