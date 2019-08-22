import { EventEmitter, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoTextBoxOptions } from './base/text-box-options';
import { DxiButtonComponent } from './button-dxi';
export declare class DxoSearchEditorOptionsComponent extends DxoTextBoxOptions {
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<string>;
    protected readonly _optionPath: string;
    buttonsChildren: QueryList<DxiButtonComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSearchEditorOptionsModule {
}
