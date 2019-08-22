import { EventEmitter, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFormOptions } from './base/form-options';
import { DxiItemComponent } from './item-dxi';
export declare class DxoFormComponent extends DxoFormOptions {
    /**
     * A handler for the formDataChange event.
     */
    formDataChange: EventEmitter<any>;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoFormModule {
}
