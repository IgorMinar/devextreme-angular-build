import { EventEmitter } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoCalendarOptions } from './base/calendar-options';
export declare class DxoCalendarOptionsComponent extends DxoCalendarOptions {
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the zoomLevelChange event.
     */
    zoomLevelChange: EventEmitter<string>;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoCalendarOptionsModule {
}
