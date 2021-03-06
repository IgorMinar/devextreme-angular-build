import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxScheduler from 'devextreme/ui/scheduler';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var DxSchedulerComponent = /** @class */ (function (_super) {
    __extends(DxSchedulerComponent, _super);
    function DxSchedulerComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSchedulerComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "adaptivityEnabled", {
        /**
         * Specifies whether the widget adapts to small screens.
         */
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "allDayExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
         */
        get: function () {
            return this._getOption('allDayExpr');
        },
        set: function (value) {
            this._setOption('allDayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentCollectorTemplate", {
        /**
         * Specifies an appointment collector's custom template.
         */
        get: function () {
            return this._getOption('appointmentCollectorTemplate');
        },
        set: function (value) {
            this._setOption('appointmentCollectorTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTemplate", {
        /**
         * Specifies a custom template for appointments.
         */
        get: function () {
            return this._getOption('appointmentTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTooltipTemplate", {
        /**
         * Specifies a custom template for appointment tooltips and appointments in the appointment collector's drop-down list.
         */
        get: function () {
            return this._getOption('appointmentTooltipTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTooltipTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "cellDuration", {
        /**
         * Specifies cell duration in minutes.
         */
        get: function () {
            return this._getOption('cellDuration');
        },
        set: function (value) {
            this._setOption('cellDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "crossScrollingEnabled", {
        /**
         * Specifies whether or not an end-user can scroll the view in both directions at the same time.
         */
        get: function () {
            return this._getOption('crossScrollingEnabled');
        },
        set: function (value) {
            this._setOption('crossScrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "currentDate", {
        /**
         * Specifies a date displayed on the current scheduler view by default.
         */
        get: function () {
            return this._getOption('currentDate');
        },
        set: function (value) {
            this._setOption('currentDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "currentView", {
        /**
         * Specifies the currently displayed view. Accepts the view's name or type.
         */
        get: function () {
            return this._getOption('currentView');
        },
        set: function (value) {
            this._setOption('currentView', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "customizeDateNavigatorText", {
        /**
         * Customizes the date navigator's text.
         */
        get: function () {
            return this._getOption('customizeDateNavigatorText');
        },
        set: function (value) {
            this._setOption('customizeDateNavigatorText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dataCellTemplate", {
        /**
         * Specifies a custom template for table cells.
         */
        get: function () {
            return this._getOption('dataCellTemplate');
        },
        set: function (value) {
            this._setOption('dataCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dateCellTemplate", {
        /**
         * Specifies a custom template for day scale items.
         */
        get: function () {
            return this._getOption('dateCellTemplate');
        },
        set: function (value) {
            this._setOption('dateCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dateSerializationFormat", {
        /**
         * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
         */
        get: function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "descriptionExpr", {
        /**
         * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
         */
        get: function () {
            return this._getOption('descriptionExpr');
        },
        set: function (value) {
            this._setOption('descriptionExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", {
        /**
         * Specifies a custom template for appointments in the appointment collector's drop-down list.
         */
        get: function () {
            return this._getOption('dropDownAppointmentTemplate');
        },
        set: function (value) {
            this._setOption('dropDownAppointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "editing", {
        /**
         * Specifies which editing operations an end-user can perform on appointments.
         */
        get: function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDateExpr", {
        /**
         * Specifies the name of the data source item field that defines the ending of an appointment.
         */
        get: function () {
            return this._getOption('endDateExpr');
        },
        set: function (value) {
            this._setOption('endDateExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDateTimeZoneExpr", {
        /**
         * Specifies the name of the data source item field that defines the timezone of the appointment end date.
         */
        get: function () {
            return this._getOption('endDateTimeZoneExpr');
        },
        set: function (value) {
            this._setOption('endDateTimeZoneExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDayHour", {
        /**
         * Specifies the last hour on the time scale. Accepts integer values from 0 to 24.
         */
        get: function () {
            return this._getOption('endDayHour');
        },
        set: function (value) {
            this._setOption('endDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "firstDayOfWeek", {
        /**
         * Specifies the first day of a week. Does not apply to the agenda view.
         */
        get: function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "groupByDate", {
        /**
         * Specifies whether to group appointments by date first. Applies only if groupOrientation is "horizontal".
         */
        get: function () {
            return this._getOption('groupByDate');
        },
        set: function (value) {
            this._setOption('groupByDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "groups", {
        /**
         * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
         */
        get: function () {
            return this._getOption('groups');
        },
        set: function (value) {
            this._setOption('groups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "indicatorUpdateInterval", {
        /**
         * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
         */
        get: function () {
            return this._getOption('indicatorUpdateInterval');
        },
        set: function (value) {
            this._setOption('indicatorUpdateInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "max", {
        /**
         * The latest date the widget allows you to select.
         */
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "maxAppointmentsPerCell", {
        /**
         * Specifies the limit of full-sized appointments displayed per cell. Applies to all views except "agenda".
         */
        get: function () {
            return this._getOption('maxAppointmentsPerCell');
        },
        set: function (value) {
            this._setOption('maxAppointmentsPerCell', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "min", {
        /**
         * The earliest date the widget allows you to select.
         */
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty. Available for the Agenda view only.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceEditMode", {
        /**
         * Specifies the edit mode for recurring appointments.
         */
        get: function () {
            return this._getOption('recurrenceEditMode');
        },
        set: function (value) {
            this._setOption('recurrenceEditMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceExceptionExpr", {
        /**
         * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
         */
        get: function () {
            return this._getOption('recurrenceExceptionExpr');
        },
        set: function (value) {
            this._setOption('recurrenceExceptionExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceRuleExpr", {
        /**
         * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
         */
        get: function () {
            return this._getOption('recurrenceRuleExpr');
        },
        set: function (value) {
            this._setOption('recurrenceRuleExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "remoteFiltering", {
        /**
         * Specifies whether filtering is performed on the server or client side.
         */
        get: function () {
            return this._getOption('remoteFiltering');
        },
        set: function (value) {
            this._setOption('remoteFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resourceCellTemplate", {
        /**
         * Specifies a custom template for resource headers.
         */
        get: function () {
            return this._getOption('resourceCellTemplate');
        },
        set: function (value) {
            this._setOption('resourceCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resources", {
        /**
         * Specifies an array of resources available in the scheduler.
         */
        get: function () {
            return this._getOption('resources');
        },
        set: function (value) {
            this._setOption('resources', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "selectedCellData", {
        /**
         * Currently selected cells' data.
         */
        get: function () {
            return this._getOption('selectedCellData');
        },
        set: function (value) {
            this._setOption('selectedCellData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "shadeUntilCurrentTime", {
        /**
         * Specifies whether to apply shading to cover the timetable up to the current time.
         */
        get: function () {
            return this._getOption('shadeUntilCurrentTime');
        },
        set: function (value) {
            this._setOption('shadeUntilCurrentTime', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "showAllDayPanel", {
        /**
         * Specifies the "All-day" panel's visibility. Setting this option to false hides the panel along with the all-day appointments.
         */
        get: function () {
            return this._getOption('showAllDayPanel');
        },
        set: function (value) {
            this._setOption('showAllDayPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "showCurrentTimeIndicator", {
        /**
         * Specifies the current date-time indicator's visibility.
         */
        get: function () {
            return this._getOption('showCurrentTimeIndicator');
        },
        set: function (value) {
            this._setOption('showCurrentTimeIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDateExpr", {
        /**
         * Specifies the name of the data source item field that defines the start of an appointment.
         */
        get: function () {
            return this._getOption('startDateExpr');
        },
        set: function (value) {
            this._setOption('startDateExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDateTimeZoneExpr", {
        /**
         * Specifies the name of the data source item field that defines the timezone of the appointment start date.
         */
        get: function () {
            return this._getOption('startDateTimeZoneExpr');
        },
        set: function (value) {
            this._setOption('startDateTimeZoneExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDayHour", {
        /**
         * Specifies the first hour on the time scale. Accepts integer values from 0 to 24.
         */
        get: function () {
            return this._getOption('startDayHour');
        },
        set: function (value) {
            this._setOption('startDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "textExpr", {
        /**
         * Specifies the name of the data source item field that holds the subject of an appointment.
         */
        get: function () {
            return this._getOption('textExpr');
        },
        set: function (value) {
            this._setOption('textExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "timeCellTemplate", {
        /**
         * Specifies a custom template for time scale items.
         */
        get: function () {
            return this._getOption('timeCellTemplate');
        },
        set: function (value) {
            this._setOption('timeCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "timeZone", {
        /**
         * Specifies the timezone of the widget.
         */
        get: function () {
            return this._getOption('timeZone');
        },
        set: function (value) {
            this._setOption('timeZone', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "useDropDownViewSwitcher", {
        /**
         * Specifies whether a user can switch views using tabs or a drop-down menu.
         */
        get: function () {
            return this._getOption('useDropDownViewSwitcher');
        },
        set: function (value) {
            this._setOption('useDropDownViewSwitcher', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "views", {
        /**
         * Specifies and configures the views to be available in the view switcher.
         */
        get: function () {
            return this._getOption('views');
        },
        set: function (value) {
            this._setOption('views', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resourcesChildren", {
        get: function () {
            return this._getOption('resources');
        },
        set: function (value) {
            this.setChildren('resources', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "viewsChildren", {
        get: function () {
            return this._getOption('views');
        },
        set: function (value) {
            this.setChildren('views', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSchedulerComponent.prototype._createInstance = function (element, options) {
        return new DxScheduler(element, options);
    };
    DxSchedulerComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSchedulerComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('groups', changes);
        this.setupChanges('resources', changes);
        this.setupChanges('selectedCellData', changes);
        this.setupChanges('views', changes);
    };
    DxSchedulerComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSchedulerComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('groups');
        this._idh.doCheck('resources');
        this._idh.doCheck('selectedCellData');
        this._idh.doCheck('views');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSchedulerComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSchedulerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return DxSchedulerComponent;
}(DxComponent));
var DxSchedulerModule = /** @class */ (function () {
    function DxSchedulerModule() {
    }
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
    return DxSchedulerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSchedulerComponent, DxSchedulerModule };
//# sourceMappingURL=devextreme-angular-ui-scheduler.js.map
