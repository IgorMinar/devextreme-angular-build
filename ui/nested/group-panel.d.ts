import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoGroupPanelComponent extends NestedOption {
    allowColumnDragging: boolean;
    emptyPanelText: string;
    visible: boolean | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoGroupPanelModule {
}
