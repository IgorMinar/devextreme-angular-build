import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxScheduler from 'devextreme/ui/scheduler';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiResourceComponent, DxiViewComponent, DxoEditingModule, DxiResourceModule, DxiViewModule } from 'devextreme-angular/ui/nested';

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
__decorate([
    Input()
], DxSchedulerComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "adaptivityEnabled", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "allDayExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "appointmentCollectorTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "appointmentTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "appointmentTooltipTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "cellDuration", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "crossScrollingEnabled", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "currentDate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "currentView", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "customizeDateNavigatorText", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "dataCellTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "dateCellTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "dateSerializationFormat", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "descriptionExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "editing", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "endDateExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "endDateTimeZoneExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "endDayHour", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "firstDayOfWeek", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "groupByDate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "groups", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "height", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "hint", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "indicatorUpdateInterval", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "max", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "maxAppointmentsPerCell", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "min", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "recurrenceEditMode", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "recurrenceExceptionExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "recurrenceRuleExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "remoteFiltering", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "resourceCellTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "resources", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "selectedCellData", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "shadeUntilCurrentTime", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "showAllDayPanel", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "showCurrentTimeIndicator", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "startDateExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "startDateTimeZoneExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "startDayHour", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "textExpr", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "timeCellTemplate", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "timeZone", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "useDropDownViewSwitcher", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "views", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "visible", null);
__decorate([
    Input()
], DxSchedulerComponent.prototype, "width", null);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentAdded", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentAdding", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentClick", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentContextMenu", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentDblClick", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentDeleted", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentDeleting", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentFormCreated", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentFormOpening", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentRendered", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentUpdated", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onAppointmentUpdating", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onCellClick", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onCellContextMenu", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "adaptivityEnabledChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "allDayExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "appointmentCollectorTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "appointmentTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "appointmentTooltipTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "cellDurationChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "crossScrollingEnabledChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "currentDateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "currentViewChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "customizeDateNavigatorTextChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "dataCellTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "dateCellTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "dateSerializationFormatChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "descriptionExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "dropDownAppointmentTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "editingChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "endDateExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "endDateTimeZoneExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "endDayHourChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "firstDayOfWeekChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "groupByDateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "groupsChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "indicatorUpdateIntervalChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "maxChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "maxAppointmentsPerCellChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "minChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "recurrenceEditModeChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "recurrenceExceptionExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "recurrenceRuleExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "remoteFilteringChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "resourceCellTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "resourcesChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "selectedCellDataChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "shadeUntilCurrentTimeChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "showAllDayPanelChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "showCurrentTimeIndicatorChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "startDateExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "startDateTimeZoneExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "startDayHourChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "textExprChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "timeCellTemplateChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "timeZoneChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "useDropDownViewSwitcherChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "viewsChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxSchedulerComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiResourceComponent)
], DxSchedulerComponent.prototype, "resourcesChildren", null);
__decorate([
    ContentChildren(DxiViewComponent)
], DxSchedulerComponent.prototype, "viewsChildren", null);
DxSchedulerComponent = __decorate([
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
    __param(7, Inject(PLATFORM_ID))
], DxSchedulerComponent);
let DxSchedulerModule = class DxSchedulerModule {
};
DxSchedulerModule = __decorate([
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxSchedulerComponent, DxSchedulerModule };
//# sourceMappingURL=devextreme-angular-ui-scheduler.js.map
