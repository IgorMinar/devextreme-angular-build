import { EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoPagingComponent extends NestedOption {
    enabled: boolean;
    pageIndex: number;
    pageSize: number;
    /**
     * A handler for the pageIndexChange event.
     */
    pageIndexChange: EventEmitter<number>;
    /**
     * A handler for the pageSizeChange event.
     */
    pageSizeChange: EventEmitter<number>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoPagingModule {
}
