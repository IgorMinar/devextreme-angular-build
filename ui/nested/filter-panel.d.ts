import { EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoFilterPanelComponent extends NestedOption {
    customizeText: Function;
    filterEnabled: boolean;
    texts: {
        clearFilter?: string;
        createFilter?: string;
        filterEnabledHint?: string;
    };
    visible: boolean;
    /**
     * A handler for the filterEnabledChange event.
     */
    filterEnabledChange: EventEmitter<boolean>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFilterPanelModule {
}
