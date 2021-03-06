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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxScheduler from 'devextreme/ui/scheduler';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiResourceComponent } from 'devextreme-angular/ui/nested';
import { DxiViewComponent } from 'devextreme-angular/ui/nested';
/**
 * The Scheduler is a widget that represents scheduled data and allows a user to manage and edit it.
 */
export declare class DxSchedulerComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxScheduler;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether the widget adapts to small screens.
     */
    adaptivityEnabled: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
     */
    allDayExpr: string;
    /**
     * Specifies an appointment collector's custom template.
     */
    appointmentCollectorTemplate: any;
    /**
     * Specifies a custom template for appointments.
     */
    appointmentTemplate: any;
    /**
     * Specifies a custom template for appointment tooltips and appointments in the appointment collector's drop-down list.
     */
    appointmentTooltipTemplate: any;
    /**
     * Specifies cell duration in minutes.
     */
    cellDuration: number;
    /**
     * Specifies whether or not an end-user can scroll the view in both directions at the same time.
     */
    crossScrollingEnabled: boolean;
    /**
     * Specifies a date displayed on the current scheduler view by default.
     */
    currentDate: Date | number | string;
    /**
     * Specifies the currently displayed view. Accepts the view's name or type.
     */
    currentView: string;
    /**
     * Customizes the date navigator's text.
     */
    customizeDateNavigatorText: Function;
    /**
     * Specifies a custom template for table cells.
     */
    dataCellTemplate: any;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.dxSchedulerAppointment>;
    /**
     * Specifies a custom template for day scale items.
     */
    dateCellTemplate: any;
    /**
     * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
     */
    dateSerializationFormat: string;
    /**
     * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
     */
    descriptionExpr: string;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies a custom template for appointments in the appointment collector's drop-down list.
     */
    dropDownAppointmentTemplate: any;
    /**
     * Specifies which editing operations an end-user can perform on appointments.
     */
    editing: boolean | {
        allowAdding?: boolean;
        allowDeleting?: boolean;
        allowDragging?: boolean;
        allowResizing?: boolean;
        allowUpdating?: boolean;
    };
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies the name of the data source item field that defines the ending of an appointment.
     */
    endDateExpr: string;
    /**
     * Specifies the name of the data source item field that defines the timezone of the appointment end date.
     */
    endDateTimeZoneExpr: string;
    /**
     * Specifies the last hour on the time scale. Accepts integer values from 0 to 24.
     */
    endDayHour: number;
    /**
     * Specifies the first day of a week. Does not apply to the agenda view.
     */
    firstDayOfWeek: number | string;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies whether to group appointments by date first. Applies only if groupOrientation is "horizontal".
     */
    groupByDate: boolean;
    /**
     * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
     */
    groups: Array<string>;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
     */
    indicatorUpdateInterval: number;
    /**
     * The latest date the widget allows you to select.
     */
    max: Date | number | string;
    /**
     * Specifies the limit of full-sized appointments displayed per cell. Applies to all views except "agenda".
     */
    maxAppointmentsPerCell: number | string;
    /**
     * The earliest date the widget allows you to select.
     */
    min: Date | number | string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty. Available for the Agenda view only.
     */
    noDataText: string;
    /**
     * Specifies the edit mode for recurring appointments.
     */
    recurrenceEditMode: string;
    /**
     * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
     */
    recurrenceExceptionExpr: string;
    /**
     * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
     */
    recurrenceRuleExpr: string;
    /**
     * Specifies whether filtering is performed on the server or client side.
     */
    remoteFiltering: boolean;
    /**
     * Specifies a custom template for resource headers.
     */
    resourceCellTemplate: any;
    /**
     * Specifies an array of resources available in the scheduler.
     */
    resources: Array<any | {
        allowMultiple?: boolean;
        colorExpr?: string;
        dataSource?: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
        displayExpr?: Function | string;
        fieldExpr?: string;
        label?: string;
        useColorAsDefault?: boolean;
        valueExpr?: Function | string;
    }>;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Currently selected cells' data.
     */
    selectedCellData: Array<any>;
    /**
     * Specifies whether to apply shading to cover the timetable up to the current time.
     */
    shadeUntilCurrentTime: boolean;
    /**
     * Specifies the "All-day" panel's visibility. Setting this option to false hides the panel along with the all-day appointments.
     */
    showAllDayPanel: boolean;
    /**
     * Specifies the current date-time indicator's visibility.
     */
    showCurrentTimeIndicator: boolean;
    /**
     * Specifies the name of the data source item field that defines the start of an appointment.
     */
    startDateExpr: string;
    /**
     * Specifies the name of the data source item field that defines the timezone of the appointment start date.
     */
    startDateTimeZoneExpr: string;
    /**
     * Specifies the first hour on the time scale. Accepts integer values from 0 to 24.
     */
    startDayHour: number;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies the name of the data source item field that holds the subject of an appointment.
     */
    textExpr: string;
    /**
     * Specifies a custom template for time scale items.
     */
    timeCellTemplate: any;
    /**
     * Specifies the timezone of the widget.
     */
    timeZone: string;
    /**
     * Specifies whether a user can switch views using tabs or a drop-down menu.
     */
    useDropDownViewSwitcher: boolean;
    /**
     * Specifies and configures the views to be available in the view switcher.
     */
    views: string | Array<string | any | {
        agendaDuration?: number;
        appointmentCollectorTemplate?: any;
        appointmentTemplate?: any;
        appointmentTooltipTemplate?: any;
        cellDuration?: number;
        dataCellTemplate?: any;
        dateCellTemplate?: any;
        dropDownAppointmentTemplate?: any;
        endDayHour?: number;
        firstDayOfWeek?: number | string;
        groupByDate?: boolean;
        groupOrientation?: string;
        groups?: Array<string>;
        intervalCount?: number;
        maxAppointmentsPerCell?: number | string;
        name?: string;
        resourceCellTemplate?: any;
        startDate?: Date | number | string;
        startDayHour?: number;
        timeCellTemplate?: any;
        type?: string;
    }>;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed after an appointment is added to the data source.
     */
    onAppointmentAdded: EventEmitter<any>;
    /**
     * A function that is executed before an appointment is added to the data source.
     */
    onAppointmentAdding: EventEmitter<any>;
    /**
     * A function that is executed when an appointment is clicked or tapped.
     */
    onAppointmentClick: EventEmitter<any>;
    /**
     * A function that is executed when a user attempts to open the browser's context menu for an appointment. Allows you to replace this context menu with a custom context menu.
     */
    onAppointmentContextMenu: EventEmitter<any>;
    /**
     * A function that is executed when an appointment is double-clicked or double-tapped.
     */
    onAppointmentDblClick: EventEmitter<any>;
    /**
     * A function that is executed after an appointment is deleted from the data source.
     */
    onAppointmentDeleted: EventEmitter<any>;
    /**
     * A function that is executed before an appointment is deleted from the data source.
     */
    onAppointmentDeleting: EventEmitter<any>;
    /**
     * Use the onAppointmentFormOpening option instead.
     */
    onAppointmentFormCreated: EventEmitter<any>;
    /**
     * A function that is executed before an appointment details form is opened.
     */
    onAppointmentFormOpening: EventEmitter<any>;
    /**
     * A function that is executed when an appointment is rendered.
     */
    onAppointmentRendered: EventEmitter<any>;
    /**
     * A function that is executed after an appointment is updated in the data source.
     */
    onAppointmentUpdated: EventEmitter<any>;
    /**
     * A function that is executed before an appointment is updated in the data source.
     */
    onAppointmentUpdating: EventEmitter<any>;
    /**
     * A function that is executed when a view cell is clicked.
     */
    onCellClick: EventEmitter<any>;
    /**
     * A function that is executed when a user attempts to open the browser's context menu for a cell. Allows you to replace this context menu with a custom context menu.
     */
    onCellContextMenu: EventEmitter<any>;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    adaptivityEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    allDayExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    appointmentCollectorTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    appointmentTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    appointmentTooltipTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    cellDurationChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    crossScrollingEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    currentDateChange: EventEmitter<Date | number | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    currentViewChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    customizeDateNavigatorTextChange: EventEmitter<Function>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataCellTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.dxSchedulerAppointment>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dateCellTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dateSerializationFormatChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    descriptionExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dropDownAppointmentTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    editingChange: EventEmitter<boolean | {
        allowAdding?: boolean;
        allowDeleting?: boolean;
        allowDragging?: boolean;
        allowResizing?: boolean;
        allowUpdating?: boolean;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    endDateExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    endDateTimeZoneExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    endDayHourChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    firstDayOfWeekChange: EventEmitter<number | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    groupByDateChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    groupsChange: EventEmitter<Array<string>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hintChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    indicatorUpdateIntervalChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxChange: EventEmitter<Date | number | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxAppointmentsPerCellChange: EventEmitter<number | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minChange: EventEmitter<Date | number | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    recurrenceEditModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    recurrenceExceptionExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    recurrenceRuleExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    remoteFilteringChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    resourceCellTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    resourcesChange: EventEmitter<Array<any | {
        allowMultiple?: boolean;
        colorExpr?: string;
        dataSource?: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
        displayExpr?: Function | string;
        fieldExpr?: string;
        label?: string;
        useColorAsDefault?: boolean;
        valueExpr?: Function | string;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedCellDataChange: EventEmitter<Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    shadeUntilCurrentTimeChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showAllDayPanelChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showCurrentTimeIndicatorChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    startDateExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    startDateTimeZoneExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    startDayHourChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    textExprChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    timeCellTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    timeZoneChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    useDropDownViewSwitcherChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    viewsChange: EventEmitter<string | Array<string | any | {
        agendaDuration?: number;
        appointmentCollectorTemplate?: any;
        appointmentTemplate?: any;
        appointmentTooltipTemplate?: any;
        cellDuration?: number;
        dataCellTemplate?: any;
        dateCellTemplate?: any;
        dropDownAppointmentTemplate?: any;
        endDayHour?: number;
        firstDayOfWeek?: number | string;
        groupByDate?: boolean;
        groupOrientation?: string;
        groups?: Array<string>;
        intervalCount?: number;
        maxAppointmentsPerCell?: number | string;
        name?: string;
        resourceCellTemplate?: any;
        startDate?: Date | number | string;
        startDayHour?: number;
        timeCellTemplate?: any;
        type?: string;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    resourcesChildren: QueryList<DxiResourceComponent>;
    viewsChildren: QueryList<DxiViewComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxScheduler;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxSchedulerModule {
}
