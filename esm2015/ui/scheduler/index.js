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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import DxScheduler from 'devextreme/ui/scheduler';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxoEditingModule } from 'devextreme-angular/ui/nested';
import { DxiResourceModule } from 'devextreme-angular/ui/nested';
import { DxiViewModule } from 'devextreme-angular/ui/nested';
import { DxiResourceComponent } from 'devextreme-angular/ui/nested';
import { DxiViewComponent } from 'devextreme-angular/ui/nested';
/**
 * The Scheduler is a widget that represents scheduled data and allows a user to manage and edit it.
 */
let DxSchedulerComponent = class DxSchedulerComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'appointmentAdded', emit: 'onAppointmentAdded' },
            { subscribe: 'appointmentAdding', emit: 'onAppointmentAdding' },
            { subscribe: 'appointmentClick', emit: 'onAppointmentClick' },
            { subscribe: 'appointmentContextMenu', emit: 'onAppointmentContextMenu' },
            { subscribe: 'appointmentDblClick', emit: 'onAppointmentDblClick' },
            { subscribe: 'appointmentDeleted', emit: 'onAppointmentDeleted' },
            { subscribe: 'appointmentDeleting', emit: 'onAppointmentDeleting' },
            { subscribe: 'appointmentFormCreated', emit: 'onAppointmentFormCreated' },
            { subscribe: 'appointmentFormOpening', emit: 'onAppointmentFormOpening' },
            { subscribe: 'appointmentRendered', emit: 'onAppointmentRendered' },
            { subscribe: 'appointmentUpdated', emit: 'onAppointmentUpdated' },
            { subscribe: 'appointmentUpdating', emit: 'onAppointmentUpdating' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellContextMenu', emit: 'onCellContextMenu' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'allDayExprChange' },
            { emit: 'appointmentCollectorTemplateChange' },
            { emit: 'appointmentTemplateChange' },
            { emit: 'appointmentTooltipTemplateChange' },
            { emit: 'cellDurationChange' },
            { emit: 'crossScrollingEnabledChange' },
            { emit: 'currentDateChange' },
            { emit: 'currentViewChange' },
            { emit: 'customizeDateNavigatorTextChange' },
            { emit: 'dataCellTemplateChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dateCellTemplateChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'descriptionExprChange' },
            { emit: 'disabledChange' },
            { emit: 'dropDownAppointmentTemplateChange' },
            { emit: 'editingChange' },
            { emit: 'elementAttrChange' },
            { emit: 'endDateExprChange' },
            { emit: 'endDateTimeZoneExprChange' },
            { emit: 'endDayHourChange' },
            { emit: 'firstDayOfWeekChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupByDateChange' },
            { emit: 'groupsChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'indicatorUpdateIntervalChange' },
            { emit: 'maxChange' },
            { emit: 'maxAppointmentsPerCellChange' },
            { emit: 'minChange' },
            { emit: 'noDataTextChange' },
            { emit: 'recurrenceEditModeChange' },
            { emit: 'recurrenceExceptionExprChange' },
            { emit: 'recurrenceRuleExprChange' },
            { emit: 'remoteFilteringChange' },
            { emit: 'resourceCellTemplateChange' },
            { emit: 'resourcesChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedCellDataChange' },
            { emit: 'shadeUntilCurrentTimeChange' },
            { emit: 'showAllDayPanelChange' },
            { emit: 'showCurrentTimeIndicatorChange' },
            { emit: 'startDateExprChange' },
            { emit: 'startDateTimeZoneExprChange' },
            { emit: 'startDayHourChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textExprChange' },
            { emit: 'timeCellTemplateChange' },
            { emit: 'timeZoneChange' },
            { emit: 'useDropDownViewSwitcherChange' },
            { emit: 'viewsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether the widget adapts to small screens.
     */
    get adaptivityEnabled() {
        return this._getOption('adaptivityEnabled');
    }
    set adaptivityEnabled(value) {
        this._setOption('adaptivityEnabled', value);
    }
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
     */
    get allDayExpr() {
        return this._getOption('allDayExpr');
    }
    set allDayExpr(value) {
        this._setOption('allDayExpr', value);
    }
    /**
     * Specifies an appointment collector's custom template.
     */
    get appointmentCollectorTemplate() {
        return this._getOption('appointmentCollectorTemplate');
    }
    set appointmentCollectorTemplate(value) {
        this._setOption('appointmentCollectorTemplate', value);
    }
    /**
     * Specifies a custom template for appointments.
     */
    get appointmentTemplate() {
        return this._getOption('appointmentTemplate');
    }
    set appointmentTemplate(value) {
        this._setOption('appointmentTemplate', value);
    }
    /**
     * Specifies a custom template for appointment tooltips and appointments in the appointment collector's drop-down list.
     */
    get appointmentTooltipTemplate() {
        return this._getOption('appointmentTooltipTemplate');
    }
    set appointmentTooltipTemplate(value) {
        this._setOption('appointmentTooltipTemplate', value);
    }
    /**
     * Specifies cell duration in minutes.
     */
    get cellDuration() {
        return this._getOption('cellDuration');
    }
    set cellDuration(value) {
        this._setOption('cellDuration', value);
    }
    /**
     * Specifies whether or not an end-user can scroll the view in both directions at the same time.
     */
    get crossScrollingEnabled() {
        return this._getOption('crossScrollingEnabled');
    }
    set crossScrollingEnabled(value) {
        this._setOption('crossScrollingEnabled', value);
    }
    /**
     * Specifies a date displayed on the current scheduler view by default.
     */
    get currentDate() {
        return this._getOption('currentDate');
    }
    set currentDate(value) {
        this._setOption('currentDate', value);
    }
    /**
     * Specifies the currently displayed view. Accepts the view's name or type.
     */
    get currentView() {
        return this._getOption('currentView');
    }
    set currentView(value) {
        this._setOption('currentView', value);
    }
    /**
     * Customizes the date navigator's text.
     */
    get customizeDateNavigatorText() {
        return this._getOption('customizeDateNavigatorText');
    }
    set customizeDateNavigatorText(value) {
        this._setOption('customizeDateNavigatorText', value);
    }
    /**
     * Specifies a custom template for table cells.
     */
    get dataCellTemplate() {
        return this._getOption('dataCellTemplate');
    }
    set dataCellTemplate(value) {
        this._setOption('dataCellTemplate', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies a custom template for day scale items.
     */
    get dateCellTemplate() {
        return this._getOption('dateCellTemplate');
    }
    set dateCellTemplate(value) {
        this._setOption('dateCellTemplate', value);
    }
    /**
     * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
     */
    get dateSerializationFormat() {
        return this._getOption('dateSerializationFormat');
    }
    set dateSerializationFormat(value) {
        this._setOption('dateSerializationFormat', value);
    }
    /**
     * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
     */
    get descriptionExpr() {
        return this._getOption('descriptionExpr');
    }
    set descriptionExpr(value) {
        this._setOption('descriptionExpr', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies a custom template for appointments in the appointment collector's drop-down list.
     */
    get dropDownAppointmentTemplate() {
        return this._getOption('dropDownAppointmentTemplate');
    }
    set dropDownAppointmentTemplate(value) {
        this._setOption('dropDownAppointmentTemplate', value);
    }
    /**
     * Specifies which editing operations an end-user can perform on appointments.
     */
    get editing() {
        return this._getOption('editing');
    }
    set editing(value) {
        this._setOption('editing', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Specifies the name of the data source item field that defines the ending of an appointment.
     */
    get endDateExpr() {
        return this._getOption('endDateExpr');
    }
    set endDateExpr(value) {
        this._setOption('endDateExpr', value);
    }
    /**
     * Specifies the name of the data source item field that defines the timezone of the appointment end date.
     */
    get endDateTimeZoneExpr() {
        return this._getOption('endDateTimeZoneExpr');
    }
    set endDateTimeZoneExpr(value) {
        this._setOption('endDateTimeZoneExpr', value);
    }
    /**
     * Specifies the last hour on the time scale. Accepts integer values from 0 to 24.
     */
    get endDayHour() {
        return this._getOption('endDayHour');
    }
    set endDayHour(value) {
        this._setOption('endDayHour', value);
    }
    /**
     * Specifies the first day of a week. Does not apply to the agenda view.
     */
    get firstDayOfWeek() {
        return this._getOption('firstDayOfWeek');
    }
    set firstDayOfWeek(value) {
        this._setOption('firstDayOfWeek', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * Specifies whether to group appointments by date first. Applies only if groupOrientation is "horizontal".
     */
    get groupByDate() {
        return this._getOption('groupByDate');
    }
    set groupByDate(value) {
        this._setOption('groupByDate', value);
    }
    /**
     * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
     */
    get groups() {
        return this._getOption('groups');
    }
    set groups(value) {
        this._setOption('groups', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
     */
    get indicatorUpdateInterval() {
        return this._getOption('indicatorUpdateInterval');
    }
    set indicatorUpdateInterval(value) {
        this._setOption('indicatorUpdateInterval', value);
    }
    /**
     * The latest date the widget allows you to select.
     */
    get max() {
        return this._getOption('max');
    }
    set max(value) {
        this._setOption('max', value);
    }
    /**
     * Specifies the limit of full-sized appointments displayed per cell. Applies to all views except "agenda".
     */
    get maxAppointmentsPerCell() {
        return this._getOption('maxAppointmentsPerCell');
    }
    set maxAppointmentsPerCell(value) {
        this._setOption('maxAppointmentsPerCell', value);
    }
    /**
     * The earliest date the widget allows you to select.
     */
    get min() {
        return this._getOption('min');
    }
    set min(value) {
        this._setOption('min', value);
    }
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty. Available for the Agenda view only.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    /**
     * Specifies the edit mode for recurring appointments.
     */
    get recurrenceEditMode() {
        return this._getOption('recurrenceEditMode');
    }
    set recurrenceEditMode(value) {
        this._setOption('recurrenceEditMode', value);
    }
    /**
     * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
     */
    get recurrenceExceptionExpr() {
        return this._getOption('recurrenceExceptionExpr');
    }
    set recurrenceExceptionExpr(value) {
        this._setOption('recurrenceExceptionExpr', value);
    }
    /**
     * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
     */
    get recurrenceRuleExpr() {
        return this._getOption('recurrenceRuleExpr');
    }
    set recurrenceRuleExpr(value) {
        this._setOption('recurrenceRuleExpr', value);
    }
    /**
     * Specifies whether filtering is performed on the server or client side.
     */
    get remoteFiltering() {
        return this._getOption('remoteFiltering');
    }
    set remoteFiltering(value) {
        this._setOption('remoteFiltering', value);
    }
    /**
     * Specifies a custom template for resource headers.
     */
    get resourceCellTemplate() {
        return this._getOption('resourceCellTemplate');
    }
    set resourceCellTemplate(value) {
        this._setOption('resourceCellTemplate', value);
    }
    /**
     * Specifies an array of resources available in the scheduler.
     */
    get resources() {
        return this._getOption('resources');
    }
    set resources(value) {
        this._setOption('resources', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Currently selected cells' data.
     */
    get selectedCellData() {
        return this._getOption('selectedCellData');
    }
    set selectedCellData(value) {
        this._setOption('selectedCellData', value);
    }
    /**
     * Specifies whether to apply shading to cover the timetable up to the current time.
     */
    get shadeUntilCurrentTime() {
        return this._getOption('shadeUntilCurrentTime');
    }
    set shadeUntilCurrentTime(value) {
        this._setOption('shadeUntilCurrentTime', value);
    }
    /**
     * Specifies the "All-day" panel's visibility. Setting this option to false hides the panel along with the all-day appointments.
     */
    get showAllDayPanel() {
        return this._getOption('showAllDayPanel');
    }
    set showAllDayPanel(value) {
        this._setOption('showAllDayPanel', value);
    }
    /**
     * Specifies the current date-time indicator's visibility.
     */
    get showCurrentTimeIndicator() {
        return this._getOption('showCurrentTimeIndicator');
    }
    set showCurrentTimeIndicator(value) {
        this._setOption('showCurrentTimeIndicator', value);
    }
    /**
     * Specifies the name of the data source item field that defines the start of an appointment.
     */
    get startDateExpr() {
        return this._getOption('startDateExpr');
    }
    set startDateExpr(value) {
        this._setOption('startDateExpr', value);
    }
    /**
     * Specifies the name of the data source item field that defines the timezone of the appointment start date.
     */
    get startDateTimeZoneExpr() {
        return this._getOption('startDateTimeZoneExpr');
    }
    set startDateTimeZoneExpr(value) {
        this._setOption('startDateTimeZoneExpr', value);
    }
    /**
     * Specifies the first hour on the time scale. Accepts integer values from 0 to 24.
     */
    get startDayHour() {
        return this._getOption('startDayHour');
    }
    set startDayHour(value) {
        this._setOption('startDayHour', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Specifies the name of the data source item field that holds the subject of an appointment.
     */
    get textExpr() {
        return this._getOption('textExpr');
    }
    set textExpr(value) {
        this._setOption('textExpr', value);
    }
    /**
     * Specifies a custom template for time scale items.
     */
    get timeCellTemplate() {
        return this._getOption('timeCellTemplate');
    }
    set timeCellTemplate(value) {
        this._setOption('timeCellTemplate', value);
    }
    /**
     * Specifies the timezone of the widget.
     */
    get timeZone() {
        return this._getOption('timeZone');
    }
    set timeZone(value) {
        this._setOption('timeZone', value);
    }
    /**
     * Specifies whether a user can switch views using tabs or a drop-down menu.
     */
    get useDropDownViewSwitcher() {
        return this._getOption('useDropDownViewSwitcher');
    }
    set useDropDownViewSwitcher(value) {
        this._setOption('useDropDownViewSwitcher', value);
    }
    /**
     * Specifies and configures the views to be available in the view switcher.
     */
    get views() {
        return this._getOption('views');
    }
    set views(value) {
        this._setOption('views', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    get resourcesChildren() {
        return this._getOption('resources');
    }
    set resourcesChildren(value) {
        this.setChildren('resources', value);
    }
    get viewsChildren() {
        return this._getOption('views');
    }
    set viewsChildren(value) {
        this.setChildren('views', value);
    }
    _createInstance(element, options) {
        return new DxScheduler(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('groups', changes);
        this.setupChanges('resources', changes);
        this.setupChanges('selectedCellData', changes);
        this.setupChanges('views', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('groups');
        this._idh.doCheck('resources');
        this._idh.doCheck('selectedCellData');
        this._idh.doCheck('views');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
DxSchedulerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "accessKey", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "adaptivityEnabled", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "allDayExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "appointmentCollectorTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "appointmentTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "appointmentTooltipTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "cellDuration", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "crossScrollingEnabled", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "currentDate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "currentView", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "customizeDateNavigatorText", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "dataCellTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "dateCellTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "dateSerializationFormat", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "descriptionExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "editing", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "endDateExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "endDateTimeZoneExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "endDayHour", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "firstDayOfWeek", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "focusStateEnabled", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "groupByDate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "groups", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "height", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "indicatorUpdateInterval", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "max", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "maxAppointmentsPerCell", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "min", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "noDataText", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "recurrenceEditMode", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "recurrenceExceptionExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "recurrenceRuleExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "remoteFiltering", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "resourceCellTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "resources", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "selectedCellData", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "shadeUntilCurrentTime", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "showAllDayPanel", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "showCurrentTimeIndicator", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "startDateExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "startDateTimeZoneExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "startDayHour", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "tabIndex", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "textExpr", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "timeCellTemplate", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "timeZone", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "useDropDownViewSwitcher", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "views", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input()
], DxSchedulerComponent.prototype, "width", null);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentAdded", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentAdding", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentClick", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentContextMenu", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentDblClick", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentDeleted", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentDeleting", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentFormCreated", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentFormOpening", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentRendered", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentUpdated", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentUpdating", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onCellClick", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onCellContextMenu", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onContentReady", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "accessKeyChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "adaptivityEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "allDayExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "appointmentCollectorTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "appointmentTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "appointmentTooltipTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "cellDurationChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "crossScrollingEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "currentDateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "currentViewChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "customizeDateNavigatorTextChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "dataCellTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "dateCellTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "dateSerializationFormatChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "descriptionExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "dropDownAppointmentTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "editingChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "endDateExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "endDateTimeZoneExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "endDayHourChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "firstDayOfWeekChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "focusStateEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "groupByDateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "groupsChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "indicatorUpdateIntervalChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "maxChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "maxAppointmentsPerCellChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "minChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "noDataTextChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "recurrenceEditModeChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "recurrenceExceptionExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "recurrenceRuleExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "remoteFilteringChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "resourceCellTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "resourcesChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "selectedCellDataChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "shadeUntilCurrentTimeChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "showAllDayPanelChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "showCurrentTimeIndicatorChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "startDateExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "startDateTimeZoneExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "startDayHourChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "tabIndexChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "textExprChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "timeCellTemplateChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "timeZoneChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "useDropDownViewSwitcherChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "viewsChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output()
], DxSchedulerComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    ContentChildren(DxiResourceComponent)
], DxSchedulerComponent.prototype, "resourcesChildren", null);
tslib_1.__decorate([
    ContentChildren(DxiViewComponent)
], DxSchedulerComponent.prototype, "viewsChildren", null);
DxSchedulerComponent = tslib_1.__decorate([
    Component({
        selector: 'dx-scheduler',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    tslib_1.__param(7, Inject(PLATFORM_ID))
], DxSchedulerComponent);
export { DxSchedulerComponent };
let DxSchedulerModule = class DxSchedulerModule {
};
DxSchedulerModule = tslib_1.__decorate([
    NgModule({
        imports: [
            DxoEditingModule,
            DxiResourceModule,
            DxiViewModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxSchedulerComponent
        ],
        exports: [
            DxSchedulerComponent,
            DxoEditingModule,
            DxiResourceModule,
            DxiViewModule,
            DxTemplateModule
        ]
    })
], DxSchedulerModule);
export { DxSchedulerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvc2NoZWR1bGVyLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBR3BDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxPQUFPLEVBQ1AsYUFBYSxFQUNiLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFHbEQsT0FBTyxFQUNILFdBQVcsRUFDWCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDaEIsTUFBTSx5QkFBeUIsQ0FBQztBQUVqQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLaEU7O0dBRUc7QUFXSCxJQUFhLG9CQUFvQixHQUFqQywwQkFBa0MsU0FBUSxXQUFXO0lBeWlDakQsWUFBWSxVQUFzQixFQUFFLE1BQWMsRUFBRSxZQUE0QixFQUNo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TUFBTSxFQUFFOzREQUFzQztBQUtyQztJQUFULE1BQU0sRUFBRTsyRUFBc0Q7QUFLckQ7SUFBVCxNQUFNLEVBQUU7eURBQWtuQjtBQUtqbkI7SUFBVCxNQUFNLEVBQUU7MkRBQXNDO0FBS3JDO0lBQVQsTUFBTSxFQUFFO3lEQUF1RDtBQU1oRTtJQURDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQzs2REFHckM7QUFNRDtJQURDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQzt5REFHakM7QUFuaUNRLG9CQUFvQjtJQVZoQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRTtZQUNQLGNBQWM7WUFDZCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtTQUN2QjtLQUNKLENBQUM7SUE4aUNXLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQTdpQ25CLG9CQUFvQixDQTZxQ2hDO1NBN3FDWSxvQkFBb0I7QUFtc0NqQyxJQUFhLGlCQUFpQixHQUE5QjtDQUFrQyxDQUFBO0FBQXJCLGlCQUFpQjtJQXBCN0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQiwwQkFBMEI7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixvQkFBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCxvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsZ0JBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUFJO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4U2NoZWR1bGVyIGZyb20gJ2RldmV4dHJlbWUvdWkvc2NoZWR1bGVyJztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRHhDb21wb25lbnQsXHJcbiAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyLFxyXG4gICAgV2F0Y2hlckhlbHBlclxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IER4b0VkaXRpbmdNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpUmVzb3VyY2VNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpVmlld01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5cclxuaW1wb3J0IHsgRHhpUmVzb3VyY2VDb21wb25lbnQgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpVmlld0NvbXBvbmVudCB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsZXIgaXMgYSB3aWRnZXQgdGhhdCByZXByZXNlbnRzIHNjaGVkdWxlZCBkYXRhIGFuZCBhbGxvd3MgYSB1c2VyIHRvIG1hbmFnZSBhbmQgZWRpdCBpdC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1zY2hlZHVsZXInLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFNjaGVkdWxlckNvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4U2NoZWR1bGVyO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hvcnRjdXQga2V5IHRoYXQgc2V0cyBmb2N1cyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBhZGFwdHMgdG8gc21hbGwgc2NyZWVucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGFwdGl2aXR5RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZGFwdGl2aXR5RW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkYXB0aXZpdHlFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZGFwdGl2aXR5RW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgd2hvc2UgdmFsdWUgZGVmaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgY29ycmVzcG9uZGluZyBhcHBvaW50bWVudCBpcyBhbiBhbGwtZGF5IGFwcG9pbnRtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbERheUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxEYXlFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsRGF5RXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxEYXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhbiBhcHBvaW50bWVudCBjb2xsZWN0b3IncyBjdXN0b20gdGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciBhcHBvaW50bWVudHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXBwb2ludG1lbnRUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcG9pbnRtZW50VGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBvaW50bWVudFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FwcG9pbnRtZW50VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciBhcHBvaW50bWVudCB0b29sdGlwcyBhbmQgYXBwb2ludG1lbnRzIGluIHRoZSBhcHBvaW50bWVudCBjb2xsZWN0b3IncyBkcm9wLWRvd24gbGlzdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGNlbGwgZHVyYXRpb24gaW4gbWludXRlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjZWxsRHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZWxsRHVyYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBjZWxsRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VsbER1cmF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCBhbiBlbmQtdXNlciBjYW4gc2Nyb2xsIHRoZSB2aWV3IGluIGJvdGggZGlyZWN0aW9ucyBhdCB0aGUgc2FtZSB0aW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNyb3NzU2Nyb2xsaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjcm9zc1Njcm9sbGluZ0VuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBjcm9zc1Njcm9sbGluZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nyb3NzU2Nyb2xsaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBkYXRlIGRpc3BsYXllZCBvbiB0aGUgY3VycmVudCBzY2hlZHVsZXIgdmlldyBieSBkZWZhdWx0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1cnJlbnREYXRlKCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1cnJlbnREYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VycmVudERhdGUodmFsdWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1cnJlbnREYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgY3VycmVudGx5IGRpc3BsYXllZCB2aWV3LiBBY2NlcHRzIHRoZSB2aWV3J3MgbmFtZSBvciB0eXBlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1cnJlbnRWaWV3KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VycmVudFZpZXcnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXJyZW50Vmlldyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXJyZW50VmlldycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b21pemVzIHRoZSBkYXRlIG5hdmlnYXRvcidzIHRleHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHQoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHQodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVEYXRlTmF2aWdhdG9yVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRhYmxlIGNlbGxzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFDZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YUNlbGxUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhQ2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5keFNjaGVkdWxlckFwcG9pbnRtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5keFNjaGVkdWxlckFwcG9pbnRtZW50Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGRheSBzY2FsZSBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlQ2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0ZUNlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGVDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0ZUNlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGRhdGUtdGltZSB2YWx1ZXMnIHNlcmlhbGl6YXRpb24gZm9ybWF0LiBVc2UgaXQgb25seSBpZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhlIGRhdGFTb3VyY2UgYXQgZGVzaWduIHRpbWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB3aG9zZSB2YWx1ZSBob2xkcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvcnJlc3BvbmRpbmcgYXBwb2ludG1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGVzY3JpcHRpb25FeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGVzY3JpcHRpb25FeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVzY3JpcHRpb25FeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rlc2NyaXB0aW9uRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciBhcHBvaW50bWVudHMgaW4gdGhlIGFwcG9pbnRtZW50IGNvbGxlY3RvcidzIGRyb3AtZG93biBsaXN0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Ryb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoaWNoIGVkaXRpbmcgb3BlcmF0aW9ucyBhbiBlbmQtdXNlciBjYW4gcGVyZm9ybSBvbiBhcHBvaW50bWVudHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWRpdGluZygpOiBib29sZWFuIHwgeyBhbGxvd0FkZGluZz86IGJvb2xlYW4sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuLCBhbGxvd0RyYWdnaW5nPzogYm9vbGVhbiwgYWxsb3dSZXNpemluZz86IGJvb2xlYW4sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VkaXRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBlZGl0aW5nKHZhbHVlOiBib29sZWFuIHwgeyBhbGxvd0FkZGluZz86IGJvb2xlYW4sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuLCBhbGxvd0RyYWdnaW5nPzogYm9vbGVhbiwgYWxsb3dSZXNpemluZz86IGJvb2xlYW4sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VkaXRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGRlZmluZXMgdGhlIGVuZGluZyBvZiBhbiBhcHBvaW50bWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmREYXRlRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuZERhdGVFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW5kRGF0ZUV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kRGF0ZUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgZGVmaW5lcyB0aGUgdGltZXpvbmUgb2YgdGhlIGFwcG9pbnRtZW50IGVuZCBkYXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZERhdGVUaW1lWm9uZUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbmREYXRlVGltZVpvbmVFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW5kRGF0ZVRpbWVab25lRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmREYXRlVGltZVpvbmVFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbGFzdCBob3VyIG9uIHRoZSB0aW1lIHNjYWxlLiBBY2NlcHRzIGludGVnZXIgdmFsdWVzIGZyb20gMCB0byAyNC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmREYXlIb3VyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kRGF5SG91cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuZERheUhvdXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kRGF5SG91cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGZpcnN0IGRheSBvZiBhIHdlZWsuIERvZXMgbm90IGFwcGx5IHRvIHRoZSBhZ2VuZGEgdmlldy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaXJzdERheU9mV2VlaygpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpcnN0RGF5T2ZXZWVrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlyc3REYXlPZldlZWsodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlyc3REYXlPZldlZWsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGdyb3VwIGFwcG9pbnRtZW50cyBieSBkYXRlIGZpcnN0LiBBcHBsaWVzIG9ubHkgaWYgZ3JvdXBPcmllbnRhdGlvbiBpcyBcImhvcml6b250YWxcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cEJ5RGF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cEJ5RGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwQnlEYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cEJ5RGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHJlc291cmNlIGtpbmRzIGJ5IHdoaWNoIHRoZSBzY2hlZHVsZXIncyBhcHBvaW50bWVudHMgYXJlIGdyb3VwZWQgaW4gYSB0aW1ldGFibGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3Vwcyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIHdoZW4gdGhlIGRhdGUtdGltZSBpbmRpY2F0b3IgY2hhbmdlcyBpdHMgcG9zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2luZGljYXRvclVwZGF0ZUludGVydmFsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5kaWNhdG9yVXBkYXRlSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW5kaWNhdG9yVXBkYXRlSW50ZXJ2YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxhdGVzdCBkYXRlIHRoZSB3aWRnZXQgYWxsb3dzIHlvdSB0byBzZWxlY3QuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4KCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heCh2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbGltaXQgb2YgZnVsbC1zaXplZCBhcHBvaW50bWVudHMgZGlzcGxheWVkIHBlciBjZWxsLiBBcHBsaWVzIHRvIGFsbCB2aWV3cyBleGNlcHQgXCJhZ2VuZGFcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhBcHBvaW50bWVudHNQZXJDZWxsKCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWF4QXBwb2ludG1lbnRzUGVyQ2VsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heEFwcG9pbnRtZW50c1BlckNlbGwodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4QXBwb2ludG1lbnRzUGVyQ2VsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGUgd2lkZ2V0IGFsbG93cyB5b3UgdG8gc2VsZWN0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbigpOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtaW4odmFsdWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGV4dCBvciBIVE1MIG1hcmt1cCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCBpZiB0aGUgaXRlbSBjb2xsZWN0aW9uIGlzIGVtcHR5LiBBdmFpbGFibGUgZm9yIHRoZSBBZ2VuZGEgdmlldyBvbmx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5vRGF0YVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdub0RhdGFUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbm9EYXRhVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdub0RhdGFUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZWRpdCBtb2RlIGZvciByZWN1cnJpbmcgYXBwb2ludG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlY3VycmVuY2VFZGl0TW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlY3VycmVuY2VFZGl0TW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlY3VycmVuY2VFZGl0TW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWN1cnJlbmNlRWRpdE1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgZGVmaW5lcyBleGNlcHRpb25zIGZvciB0aGUgY3VycmVudCByZWN1cnJpbmcgYXBwb2ludG1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWN1cnJlbmNlRXhjZXB0aW9uRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlY3VycmVuY2VFeGNlcHRpb25FeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlY3VycmVuY2VFeGNlcHRpb25FeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGRlZmluZXMgYSByZWN1cnJlbmNlIHJ1bGUgZm9yIGdlbmVyYXRpbmcgcmVjdXJyaW5nIGFwcG9pbnRtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWN1cnJlbmNlUnVsZUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWN1cnJlbmNlUnVsZUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCByZWN1cnJlbmNlUnVsZUV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVjdXJyZW5jZVJ1bGVFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGZpbHRlcmluZyBpcyBwZXJmb3JtZWQgb24gdGhlIHNlcnZlciBvciBjbGllbnQgc2lkZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZW1vdGVGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVtb3RlRmlsdGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVtb3RlRmlsdGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZW1vdGVGaWx0ZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciByZXNvdXJjZSBoZWFkZXJzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlc291cmNlQ2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVzb3VyY2VDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCByZXNvdXJjZUNlbGxUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXNvdXJjZUNlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYW4gYXJyYXkgb2YgcmVzb3VyY2VzIGF2YWlsYWJsZSBpbiB0aGUgc2NoZWR1bGVyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlc291cmNlcygpOiBBcnJheTxhbnkgfCB7IGFsbG93TXVsdGlwbGU/OiBib29sZWFuLCBjb2xvckV4cHI/OiBzdHJpbmcsIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIGZpZWxkRXhwcj86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIHVzZUNvbG9yQXNEZWZhdWx0PzogYm9vbGVhbiwgdmFsdWVFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc291cmNlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc291cmNlcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBhbGxvd011bHRpcGxlPzogYm9vbGVhbiwgY29sb3JFeHByPzogc3RyaW5nLCBkYXRhU291cmNlPzogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+LCBkaXNwbGF5RXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nLCBmaWVsZEV4cHI/OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB1c2VDb2xvckFzRGVmYXVsdD86IGJvb2xlYW4sIHZhbHVlRXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXNvdXJjZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJyZW50bHkgc2VsZWN0ZWQgY2VsbHMnIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRDZWxsRGF0YSgpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RlZENlbGxEYXRhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRDZWxsRGF0YSh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRDZWxsRGF0YScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBhcHBseSBzaGFkaW5nIHRvIGNvdmVyIHRoZSB0aW1ldGFibGUgdXAgdG8gdGhlIGN1cnJlbnQgdGltZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaGFkZVVudGlsQ3VycmVudFRpbWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hhZGVVbnRpbEN1cnJlbnRUaW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hhZGVVbnRpbEN1cnJlbnRUaW1lKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaGFkZVVudGlsQ3VycmVudFRpbWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBcIkFsbC1kYXlcIiBwYW5lbCdzIHZpc2liaWxpdHkuIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gZmFsc2UgaGlkZXMgdGhlIHBhbmVsIGFsb25nIHdpdGggdGhlIGFsbC1kYXkgYXBwb2ludG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dBbGxEYXlQYW5lbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93QWxsRGF5UGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93QWxsRGF5UGFuZWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dBbGxEYXlQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGN1cnJlbnQgZGF0ZS10aW1lIGluZGljYXRvcidzIHZpc2liaWxpdHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dDdXJyZW50VGltZUluZGljYXRvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDdXJyZW50VGltZUluZGljYXRvcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXJ0RGF0ZUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydERhdGVFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnREYXRlRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydERhdGVFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGRlZmluZXMgdGhlIHRpbWV6b25lIG9mIHRoZSBhcHBvaW50bWVudCBzdGFydCBkYXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXJ0RGF0ZVRpbWVab25lRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXJ0RGF0ZVRpbWVab25lRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXJ0RGF0ZVRpbWVab25lRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydERhdGVUaW1lWm9uZUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBmaXJzdCBob3VyIG9uIHRoZSB0aW1lIHNjYWxlLiBBY2NlcHRzIGludGVnZXIgdmFsdWVzIGZyb20gMCB0byAyNC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGFydERheUhvdXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydERheUhvdXInKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydERheUhvdXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnREYXlIb3VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgaG9sZHMgdGhlIHN1YmplY3Qgb2YgYW4gYXBwb2ludG1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dEV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0RXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHRFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHRFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGltZSBzY2FsZSBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aW1lQ2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGltZUNlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpbWVDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGltZUNlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRpbWV6b25lIG9mIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGltZVpvbmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aW1lWm9uZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpbWVab25lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpbWVab25lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgdXNlciBjYW4gc3dpdGNoIHZpZXdzIHVzaW5nIHRhYnMgb3IgYSBkcm9wLWRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1c2VEcm9wRG93blZpZXdTd2l0Y2hlcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VEcm9wRG93blZpZXdTd2l0Y2hlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVzZURyb3BEb3duVmlld1N3aXRjaGVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1c2VEcm9wRG93blZpZXdTd2l0Y2hlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYW5kIGNvbmZpZ3VyZXMgdGhlIHZpZXdzIHRvIGJlIGF2YWlsYWJsZSBpbiB0aGUgdmlldyBzd2l0Y2hlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aWV3cygpOiBzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBhbnkgfCB7IGFnZW5kYUR1cmF0aW9uPzogbnVtYmVyLCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZT86IGFueSwgY2VsbER1cmF0aW9uPzogbnVtYmVyLCBkYXRhQ2VsbFRlbXBsYXRlPzogYW55LCBkYXRlQ2VsbFRlbXBsYXRlPzogYW55LCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGVuZERheUhvdXI/OiBudW1iZXIsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cEJ5RGF0ZT86IGJvb2xlYW4sIGdyb3VwT3JpZW50YXRpb24/OiBzdHJpbmcsIGdyb3Vwcz86IEFycmF5PHN0cmluZz4sIGludGVydmFsQ291bnQ/OiBudW1iZXIsIG1heEFwcG9pbnRtZW50c1BlckNlbGw/OiBudW1iZXIgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHJlc291cmNlQ2VsbFRlbXBsYXRlPzogYW55LCBzdGFydERhdGU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBzdGFydERheUhvdXI/OiBudW1iZXIsIHRpbWVDZWxsVGVtcGxhdGU/OiBhbnksIHR5cGU/OiBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZpZXdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlld3ModmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZyB8IGFueSB8IHsgYWdlbmRhRHVyYXRpb24/OiBudW1iZXIsIGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGU/OiBhbnksIGFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlPzogYW55LCBjZWxsRHVyYXRpb24/OiBudW1iZXIsIGRhdGFDZWxsVGVtcGxhdGU/OiBhbnksIGRhdGVDZWxsVGVtcGxhdGU/OiBhbnksIGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZT86IGFueSwgZW5kRGF5SG91cj86IG51bWJlciwgZmlyc3REYXlPZldlZWs/OiBudW1iZXIgfCBzdHJpbmcsIGdyb3VwQnlEYXRlPzogYm9vbGVhbiwgZ3JvdXBPcmllbnRhdGlvbj86IHN0cmluZywgZ3JvdXBzPzogQXJyYXk8c3RyaW5nPiwgaW50ZXJ2YWxDb3VudD86IG51bWJlciwgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbD86IG51bWJlciB8IHN0cmluZywgbmFtZT86IHN0cmluZywgcmVzb3VyY2VDZWxsVGVtcGxhdGU/OiBhbnksIHN0YXJ0RGF0ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHN0YXJ0RGF5SG91cj86IG51bWJlciwgdGltZUNlbGxUZW1wbGF0ZT86IGFueSwgdHlwZT86IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlld3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBpcyB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyB3aWR0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGFwcG9pbnRtZW50IGlzIGFkZGVkIHRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRBZGRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGFuIGFwcG9pbnRtZW50IGlzIGFkZGVkIHRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRBZGRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gYXBwb2ludG1lbnQgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIGF0dGVtcHRzIHRvIG9wZW4gdGhlIGJyb3dzZXIncyBjb250ZXh0IG1lbnUgZm9yIGFuIGFwcG9pbnRtZW50LiBBbGxvd3MgeW91IHRvIHJlcGxhY2UgdGhpcyBjb250ZXh0IG1lbnUgd2l0aCBhIGN1c3RvbSBjb250ZXh0IG1lbnUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gYXBwb2ludG1lbnQgaXMgZG91YmxlLWNsaWNrZWQgb3IgZG91YmxlLXRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREYmxDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYW4gYXBwb2ludG1lbnQgaXMgZGVsZXRlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREZWxldGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYW4gYXBwb2ludG1lbnQgaXMgZGVsZXRlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREZWxldGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhlIG9uQXBwb2ludG1lbnRGb3JtT3BlbmluZyBvcHRpb24gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRGb3JtQ3JlYXRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGFuIGFwcG9pbnRtZW50IGRldGFpbHMgZm9ybSBpcyBvcGVuZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Rm9ybU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gYXBwb2ludG1lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50UmVuZGVyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGFwcG9pbnRtZW50IGlzIHVwZGF0ZWQgaW4gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BcHBvaW50bWVudFVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhbiBhcHBvaW50bWVudCBpcyB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRVcGRhdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHZpZXcgY2VsbCBpcyBjbGlja2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIGF0dGVtcHRzIHRvIG9wZW4gdGhlIGJyb3dzZXIncyBjb250ZXh0IG1lbnUgZm9yIGEgY2VsbC4gQWxsb3dzIHlvdSB0byByZXBsYWNlIHRoaXMgY29udGV4dCBtZW51IHdpdGggYSBjdXN0b20gY29udGV4dCBtZW51LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWNjZXNzS2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhZGFwdGl2aXR5RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFsbERheUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjZWxsRHVyYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNyb3NzU2Nyb2xsaW5nRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1cnJlbnREYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZSB8IG51bWJlciB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VycmVudFZpZXdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFDZWxsVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFTb3VyY2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PERldkV4cHJlc3MudWkuZHhTY2hlZHVsZXJBcHBvaW50bWVudD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVDZWxsVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkZXNjcmlwdGlvbkV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiwgYWxsb3dEcmFnZ2luZz86IGJvb2xlYW4sIGFsbG93UmVzaXppbmc/OiBib29sZWFuLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZW5kRGF0ZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVuZERhdGVUaW1lWm9uZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVuZERheUhvdXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpcnN0RGF5T2ZXZWVrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdyb3VwQnlEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhpbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGluZGljYXRvclVwZGF0ZUludGVydmFsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhBcHBvaW50bWVudHNQZXJDZWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBub0RhdGFUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWN1cnJlbmNlRWRpdE1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlY3VycmVuY2VFeGNlcHRpb25FeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWN1cnJlbmNlUnVsZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW90ZUZpbHRlcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlc291cmNlQ2VsbFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXNvdXJjZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGFsbG93TXVsdGlwbGU/OiBib29sZWFuLCBjb2xvckV4cHI/OiBzdHJpbmcsIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIGZpZWxkRXhwcj86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIHVzZUNvbG9yQXNEZWZhdWx0PzogYm9vbGVhbiwgdmFsdWVFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENlbGxEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hhZGVVbnRpbEN1cnJlbnRUaW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0FsbERheVBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhcnREYXRlRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhcnREYXRlVGltZVpvbmVFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGFydERheUhvdXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0RXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGltZUNlbGxUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGltZVpvbmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHVzZURyb3BEb3duVmlld1N3aXRjaGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlld3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBhbnkgfCB7IGFnZW5kYUR1cmF0aW9uPzogbnVtYmVyLCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZT86IGFueSwgY2VsbER1cmF0aW9uPzogbnVtYmVyLCBkYXRhQ2VsbFRlbXBsYXRlPzogYW55LCBkYXRlQ2VsbFRlbXBsYXRlPzogYW55LCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGVuZERheUhvdXI/OiBudW1iZXIsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cEJ5RGF0ZT86IGJvb2xlYW4sIGdyb3VwT3JpZW50YXRpb24/OiBzdHJpbmcsIGdyb3Vwcz86IEFycmF5PHN0cmluZz4sIGludGVydmFsQ291bnQ/OiBudW1iZXIsIG1heEFwcG9pbnRtZW50c1BlckNlbGw/OiBudW1iZXIgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHJlc291cmNlQ2VsbFRlbXBsYXRlPzogYW55LCBzdGFydERhdGU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBzdGFydERheUhvdXI/OiBudW1iZXIsIHRpbWVDZWxsVGVtcGxhdGU/OiBhbnksIHR5cGU/OiBzdHJpbmcgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVJlc291cmNlQ29tcG9uZW50KVxyXG4gICAgZ2V0IHJlc291cmNlc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlSZXNvdXJjZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc291cmNlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc291cmNlc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigncmVzb3VyY2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpVmlld0NvbXBvbmVudClcclxuICAgIGdldCB2aWV3c0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWaWV3Q29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlld3MnKTtcclxuICAgIH1cclxuICAgIHNldCB2aWV3c0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmlld3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRBZGRlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50QWRkZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRBZGRpbmcnLCBlbWl0OiAnb25BcHBvaW50bWVudEFkZGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudENsaWNrJywgZW1pdDogJ29uQXBwb2ludG1lbnRDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudENvbnRleHRNZW51JywgZW1pdDogJ29uQXBwb2ludG1lbnRDb250ZXh0TWVudScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudERibENsaWNrJywgZW1pdDogJ29uQXBwb2ludG1lbnREYmxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudERlbGV0ZWQnLCBlbWl0OiAnb25BcHBvaW50bWVudERlbGV0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnREZWxldGluZycsIGVtaXQ6ICdvbkFwcG9pbnRtZW50RGVsZXRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRGb3JtQ3JlYXRlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50Rm9ybUNyZWF0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRGb3JtT3BlbmluZycsIGVtaXQ6ICdvbkFwcG9pbnRtZW50Rm9ybU9wZW5pbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRSZW5kZXJlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50UmVuZGVyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRVcGRhdGVkJywgZW1pdDogJ29uQXBwb2ludG1lbnRVcGRhdGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50VXBkYXRpbmcnLCBlbWl0OiAnb25BcHBvaW50bWVudFVwZGF0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxDbGljaycsIGVtaXQ6ICdvbkNlbGxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsQ29udGV4dE1lbnUnLCBlbWl0OiAnb25DZWxsQ29udGV4dE1lbnUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY2Nlc3NLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FkYXB0aXZpdHlFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxEYXlFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2VsbER1cmF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjcm9zc1Njcm9sbGluZ0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1cnJlbnREYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXJyZW50Vmlld0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFDZWxsVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGVDZWxsVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkZXNjcmlwdGlvbkV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VkaXRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbmREYXRlRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZW5kRGF0ZVRpbWVab25lRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZW5kRGF5SG91ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlyc3REYXlPZldlZWtDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cEJ5RGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2luZGljYXRvclVwZGF0ZUludGVydmFsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heEFwcG9pbnRtZW50c1BlckNlbGxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21pbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbm9EYXRhVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVjdXJyZW5jZUVkaXRNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWN1cnJlbmNlRXhjZXB0aW9uRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVjdXJyZW5jZVJ1bGVFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZW1vdGVGaWx0ZXJpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jlc291cmNlQ2VsbFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXNvdXJjZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkQ2VsbERhdGFDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NoYWRlVW50aWxDdXJyZW50VGltZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0FsbERheVBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Q3VycmVudFRpbWVJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXJ0RGF0ZUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXJ0RGF0ZVRpbWVab25lRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3RhcnREYXlIb3VyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGV4dEV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpbWVDZWxsVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpbWVab25lQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd1c2VEcm9wRG93blZpZXdTd2l0Y2hlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlld3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4U2NoZWR1bGVyKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZ3JvdXBzJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3Jlc291cmNlcycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzZWxlY3RlZENlbGxEYXRhJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3ZpZXdzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZGF0YVNvdXJjZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdncm91cHMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncmVzb3VyY2VzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3NlbGVjdGVkQ2VsbERhdGEnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygndmlld3MnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4aVJlc291cmNlTW9kdWxlLFxyXG4gICAgRHhpVmlld01vZHVsZSxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhTY2hlZHVsZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4U2NoZWR1bGVyQ29tcG9uZW50LFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4aVJlc291cmNlTW9kdWxlLFxyXG4gICAgRHhpVmlld01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFNjaGVkdWxlck1vZHVsZSB7IH1cclxuIl19