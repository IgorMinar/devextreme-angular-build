import { EventEmitter } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoLoadingIndicatorComponent extends NestedOption {
    backgroundColor: string;
    font: DevExpress.viz.Font;
    show: boolean;
    text: string;
    enabled: boolean;
    /**
     * A handler for the showChange event.
     */
    showChange: EventEmitter<boolean>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoLoadingIndicatorModule {
}
