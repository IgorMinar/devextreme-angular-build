import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
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
