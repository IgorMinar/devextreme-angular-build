/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { NestedOption } from 'devextreme-angular/core';
export declare abstract class DxoCalendarOptions extends NestedOption {
    accessKey: string;
    activeStateEnabled: boolean;
    cellTemplate: any;
    dateSerializationFormat: string;
    disabled: boolean;
    disabledDates: Function | Array<Date>;
    elementAttr: any;
    firstDayOfWeek: number | string;
    focusStateEnabled: boolean;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    isValid: boolean;
    max: Date | number | string;
    maxZoomLevel: string;
    min: Date | number | string;
    minZoomLevel: string;
    name: string;
    onDisposing: Function;
    onInitialized: Function;
    onOptionChanged: Function;
    onValueChanged: Function;
    readOnly: boolean;
    rtlEnabled: boolean;
    showTodayButton: boolean;
    tabIndex: number;
    validationError: any;
    validationMessageMode: string;
    value: Date | number | string;
    visible: boolean;
    width: number | Function | string;
    zoomLevel: string;
}
