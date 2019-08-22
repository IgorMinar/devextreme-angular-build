import { EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoSearchPanelComponent extends NestedOption {
    highlightCaseSensitive: boolean;
    highlightSearchText: boolean;
    placeholder: string;
    searchVisibleColumnsOnly: boolean;
    text: string;
    visible: boolean;
    width: number;
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSearchPanelModule {
}
