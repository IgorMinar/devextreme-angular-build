import { QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoHtmlEditorToolbar } from './base/html-editor-toolbar';
import { DxiItemComponent } from './item-dxi';
export declare class DxoToolbarComponent extends DxoHtmlEditorToolbar {
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoToolbarModule {
}
