import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoFieldPanelComponent extends NestedOption {
    allowFieldDragging: boolean;
    showColumnFields: boolean;
    showDataFields: boolean;
    showFilterFields: boolean;
    showRowFields: boolean;
    texts: {
        columnFieldArea?: string;
        dataFieldArea?: string;
        filterFieldArea?: string;
        rowFieldArea?: string;
    };
    visible: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFieldPanelModule {
}
