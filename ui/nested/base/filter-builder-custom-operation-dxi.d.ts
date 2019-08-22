import { CollectionNestedOption } from '../../../core/nested-option';
export declare abstract class DxiFilterBuilderCustomOperation extends CollectionNestedOption {
    calculateFilterExpression: Function;
    caption: string;
    customizeText: Function;
    dataTypes: Array<string>;
    editorTemplate: any;
    hasValue: boolean;
    icon: string;
    name: string;
}
