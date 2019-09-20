/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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
