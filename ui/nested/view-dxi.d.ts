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
import { NestedOptionHost } from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';
export declare class DxiViewComponent extends CollectionNestedOption {
    agendaDuration: number;
    appointmentCollectorTemplate: any;
    appointmentTemplate: any;
    appointmentTooltipTemplate: any;
    cellDuration: number;
    dataCellTemplate: any;
    dateCellTemplate: any;
    dropDownAppointmentTemplate: any;
    endDayHour: number;
    firstDayOfWeek: number | string;
    groupByDate: boolean;
    groupOrientation: string;
    groups: Array<string>;
    intervalCount: number;
    maxAppointmentsPerCell: number | string;
    name: string;
    resourceCellTemplate: any;
    startDate: Date | number | string;
    startDayHour: number;
    timeCellTemplate: any;
    type: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiViewModule {
}
