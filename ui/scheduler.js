"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var scheduler_1 = require("devextreme/ui/scheduler");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var editing_1 = require("./nested/editing");
var resource_dxi_1 = require("./nested/resource-dxi");
var view_dxi_1 = require("./nested/view-dxi");
var resource_dxi_2 = require("./nested/resource-dxi");
var view_dxi_2 = require("./nested/view-dxi");
/**
 * The Scheduler is a widget that represents scheduled data and allows a user to manage and edit it.
 */
var DxSchedulerComponent = (function (_super) {
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
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "adaptivityEnabled", {
        get: /**
             * Specifies whether the widget adapts to small screens.
             */
        function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "allDayExpr", {
        get: /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
             */
        function () {
            return this._getOption('allDayExpr');
        },
        set: function (value) {
            this._setOption('allDayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentCollectorTemplate", {
        get: /**
             * Specifies an appointment collector's custom template.
             */
        function () {
            return this._getOption('appointmentCollectorTemplate');
        },
        set: function (value) {
            this._setOption('appointmentCollectorTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTemplate", {
        get: /**
             * Specifies a custom template for appointments.
             */
        function () {
            return this._getOption('appointmentTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTooltipTemplate", {
        get: /**
             * Specifies a custom template for appointment tooltips and appointments in the appointment collector's drop-down list.
             */
        function () {
            return this._getOption('appointmentTooltipTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTooltipTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "cellDuration", {
        get: /**
             * Specifies cell duration in minutes.
             */
        function () {
            return this._getOption('cellDuration');
        },
        set: function (value) {
            this._setOption('cellDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "crossScrollingEnabled", {
        get: /**
             * Specifies whether or not an end-user can scroll the view in both directions at the same time.
             */
        function () {
            return this._getOption('crossScrollingEnabled');
        },
        set: function (value) {
            this._setOption('crossScrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "currentDate", {
        get: /**
             * Specifies a date displayed on the current scheduler view by default.
             */
        function () {
            return this._getOption('currentDate');
        },
        set: function (value) {
            this._setOption('currentDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "currentView", {
        get: /**
             * Specifies the currently displayed view. Accepts the view's name or type.
             */
        function () {
            return this._getOption('currentView');
        },
        set: function (value) {
            this._setOption('currentView', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "customizeDateNavigatorText", {
        get: /**
             * Customizes the date navigator's text.
             */
        function () {
            return this._getOption('customizeDateNavigatorText');
        },
        set: function (value) {
            this._setOption('customizeDateNavigatorText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dataCellTemplate", {
        get: /**
             * Specifies a custom template for table cells.
             */
        function () {
            return this._getOption('dataCellTemplate');
        },
        set: function (value) {
            this._setOption('dataCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dateCellTemplate", {
        get: /**
             * Specifies a custom template for day scale items.
             */
        function () {
            return this._getOption('dateCellTemplate');
        },
        set: function (value) {
            this._setOption('dateCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dateSerializationFormat", {
        get: /**
             * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
             */
        function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "descriptionExpr", {
        get: /**
             * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
             */
        function () {
            return this._getOption('descriptionExpr');
        },
        set: function (value) {
            this._setOption('descriptionExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", {
        get: /**
             * Specifies a custom template for appointments in the appointment collector's drop-down list.
             */
        function () {
            return this._getOption('dropDownAppointmentTemplate');
        },
        set: function (value) {
            this._setOption('dropDownAppointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "editing", {
        get: /**
             * Specifies which editing operations an end-user can perform on appointments.
             */
        function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDateExpr", {
        get: /**
             * Specifies the name of the data source item field that defines the ending of an appointment.
             */
        function () {
            return this._getOption('endDateExpr');
        },
        set: function (value) {
            this._setOption('endDateExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDateTimeZoneExpr", {
        get: /**
             * Specifies the name of the data source item field that defines the timezone of the appointment end date.
             */
        function () {
            return this._getOption('endDateTimeZoneExpr');
        },
        set: function (value) {
            this._setOption('endDateTimeZoneExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDayHour", {
        get: /**
             * Specifies the last hour on the time scale. Accepts integer values from 0 to 24.
             */
        function () {
            return this._getOption('endDayHour');
        },
        set: function (value) {
            this._setOption('endDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "firstDayOfWeek", {
        get: /**
             * Specifies the first day of a week. Does not apply to the agenda view.
             */
        function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "groupByDate", {
        get: /**
             * Specifies whether to group appointments by date first. Applies only if groupOrientation is "horizontal".
             */
        function () {
            return this._getOption('groupByDate');
        },
        set: function (value) {
            this._setOption('groupByDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "groups", {
        get: /**
             * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
             */
        function () {
            return this._getOption('groups');
        },
        set: function (value) {
            this._setOption('groups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "indicatorUpdateInterval", {
        get: /**
             * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
             */
        function () {
            return this._getOption('indicatorUpdateInterval');
        },
        set: function (value) {
            this._setOption('indicatorUpdateInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "max", {
        get: /**
             * The latest date the widget allows you to select.
             */
        function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "maxAppointmentsPerCell", {
        get: /**
             * Specifies the limit of full-sized appointments displayed per cell. Applies to all views except "agenda".
             */
        function () {
            return this._getOption('maxAppointmentsPerCell');
        },
        set: function (value) {
            this._setOption('maxAppointmentsPerCell', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "min", {
        get: /**
             * The earliest date the widget allows you to select.
             */
        function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty. Available for the Agenda view only.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceEditMode", {
        get: /**
             * Specifies the edit mode for recurring appointments.
             */
        function () {
            return this._getOption('recurrenceEditMode');
        },
        set: function (value) {
            this._setOption('recurrenceEditMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceExceptionExpr", {
        get: /**
             * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
             */
        function () {
            return this._getOption('recurrenceExceptionExpr');
        },
        set: function (value) {
            this._setOption('recurrenceExceptionExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceRuleExpr", {
        get: /**
             * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
             */
        function () {
            return this._getOption('recurrenceRuleExpr');
        },
        set: function (value) {
            this._setOption('recurrenceRuleExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "remoteFiltering", {
        get: /**
             * Specifies whether filtering is performed on the server or client side.
             */
        function () {
            return this._getOption('remoteFiltering');
        },
        set: function (value) {
            this._setOption('remoteFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resourceCellTemplate", {
        get: /**
             * Specifies a custom template for resource headers.
             */
        function () {
            return this._getOption('resourceCellTemplate');
        },
        set: function (value) {
            this._setOption('resourceCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resources", {
        get: /**
             * Specifies an array of resources available in the scheduler.
             */
        function () {
            return this._getOption('resources');
        },
        set: function (value) {
            this._setOption('resources', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "selectedCellData", {
        get: /**
             * Currently selected cells' data.
             */
        function () {
            return this._getOption('selectedCellData');
        },
        set: function (value) {
            this._setOption('selectedCellData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "shadeUntilCurrentTime", {
        get: /**
             * Specifies whether to apply shading to cover the timetable up to the current time.
             */
        function () {
            return this._getOption('shadeUntilCurrentTime');
        },
        set: function (value) {
            this._setOption('shadeUntilCurrentTime', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "showAllDayPanel", {
        get: /**
             * Specifies the "All-day" panel's visibility. Setting this option to false hides the panel along with the all-day appointments.
             */
        function () {
            return this._getOption('showAllDayPanel');
        },
        set: function (value) {
            this._setOption('showAllDayPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "showCurrentTimeIndicator", {
        get: /**
             * Specifies the current date-time indicator's visibility.
             */
        function () {
            return this._getOption('showCurrentTimeIndicator');
        },
        set: function (value) {
            this._setOption('showCurrentTimeIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDateExpr", {
        get: /**
             * Specifies the name of the data source item field that defines the start of an appointment.
             */
        function () {
            return this._getOption('startDateExpr');
        },
        set: function (value) {
            this._setOption('startDateExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDateTimeZoneExpr", {
        get: /**
             * Specifies the name of the data source item field that defines the timezone of the appointment start date.
             */
        function () {
            return this._getOption('startDateTimeZoneExpr');
        },
        set: function (value) {
            this._setOption('startDateTimeZoneExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDayHour", {
        get: /**
             * Specifies the first hour on the time scale. Accepts integer values from 0 to 24.
             */
        function () {
            return this._getOption('startDayHour');
        },
        set: function (value) {
            this._setOption('startDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "textExpr", {
        get: /**
             * Specifies the name of the data source item field that holds the subject of an appointment.
             */
        function () {
            return this._getOption('textExpr');
        },
        set: function (value) {
            this._setOption('textExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "timeCellTemplate", {
        get: /**
             * Specifies a custom template for time scale items.
             */
        function () {
            return this._getOption('timeCellTemplate');
        },
        set: function (value) {
            this._setOption('timeCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "timeZone", {
        get: /**
             * Specifies the timezone of the widget.
             */
        function () {
            return this._getOption('timeZone');
        },
        set: function (value) {
            this._setOption('timeZone', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "useDropDownViewSwitcher", {
        get: /**
             * Specifies whether a user can switch views using tabs or a drop-down menu.
             */
        function () {
            return this._getOption('useDropDownViewSwitcher');
        },
        set: function (value) {
            this._setOption('useDropDownViewSwitcher', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "views", {
        get: /**
             * Specifies and configures the views to be available in the view switcher.
             */
        function () {
            return this._getOption('views');
        },
        set: function (value) {
            this._setOption('views', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
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
        return new scheduler_1.default(element, options);
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
    DxSchedulerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-scheduler',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxSchedulerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxSchedulerComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "adaptivityEnabled": [{ type: core_1.Input },],
        "allDayExpr": [{ type: core_1.Input },],
        "appointmentCollectorTemplate": [{ type: core_1.Input },],
        "appointmentTemplate": [{ type: core_1.Input },],
        "appointmentTooltipTemplate": [{ type: core_1.Input },],
        "cellDuration": [{ type: core_1.Input },],
        "crossScrollingEnabled": [{ type: core_1.Input },],
        "currentDate": [{ type: core_1.Input },],
        "currentView": [{ type: core_1.Input },],
        "customizeDateNavigatorText": [{ type: core_1.Input },],
        "dataCellTemplate": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "dateCellTemplate": [{ type: core_1.Input },],
        "dateSerializationFormat": [{ type: core_1.Input },],
        "descriptionExpr": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "dropDownAppointmentTemplate": [{ type: core_1.Input },],
        "editing": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "endDateExpr": [{ type: core_1.Input },],
        "endDateTimeZoneExpr": [{ type: core_1.Input },],
        "endDayHour": [{ type: core_1.Input },],
        "firstDayOfWeek": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "groupByDate": [{ type: core_1.Input },],
        "groups": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "indicatorUpdateInterval": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "maxAppointmentsPerCell": [{ type: core_1.Input },],
        "min": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "recurrenceEditMode": [{ type: core_1.Input },],
        "recurrenceExceptionExpr": [{ type: core_1.Input },],
        "recurrenceRuleExpr": [{ type: core_1.Input },],
        "remoteFiltering": [{ type: core_1.Input },],
        "resourceCellTemplate": [{ type: core_1.Input },],
        "resources": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "selectedCellData": [{ type: core_1.Input },],
        "shadeUntilCurrentTime": [{ type: core_1.Input },],
        "showAllDayPanel": [{ type: core_1.Input },],
        "showCurrentTimeIndicator": [{ type: core_1.Input },],
        "startDateExpr": [{ type: core_1.Input },],
        "startDateTimeZoneExpr": [{ type: core_1.Input },],
        "startDayHour": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "textExpr": [{ type: core_1.Input },],
        "timeCellTemplate": [{ type: core_1.Input },],
        "timeZone": [{ type: core_1.Input },],
        "useDropDownViewSwitcher": [{ type: core_1.Input },],
        "views": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onAppointmentAdded": [{ type: core_1.Output },],
        "onAppointmentAdding": [{ type: core_1.Output },],
        "onAppointmentClick": [{ type: core_1.Output },],
        "onAppointmentContextMenu": [{ type: core_1.Output },],
        "onAppointmentDblClick": [{ type: core_1.Output },],
        "onAppointmentDeleted": [{ type: core_1.Output },],
        "onAppointmentDeleting": [{ type: core_1.Output },],
        "onAppointmentFormCreated": [{ type: core_1.Output },],
        "onAppointmentFormOpening": [{ type: core_1.Output },],
        "onAppointmentRendered": [{ type: core_1.Output },],
        "onAppointmentUpdated": [{ type: core_1.Output },],
        "onAppointmentUpdating": [{ type: core_1.Output },],
        "onCellClick": [{ type: core_1.Output },],
        "onCellContextMenu": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "adaptivityEnabledChange": [{ type: core_1.Output },],
        "allDayExprChange": [{ type: core_1.Output },],
        "appointmentCollectorTemplateChange": [{ type: core_1.Output },],
        "appointmentTemplateChange": [{ type: core_1.Output },],
        "appointmentTooltipTemplateChange": [{ type: core_1.Output },],
        "cellDurationChange": [{ type: core_1.Output },],
        "crossScrollingEnabledChange": [{ type: core_1.Output },],
        "currentDateChange": [{ type: core_1.Output },],
        "currentViewChange": [{ type: core_1.Output },],
        "customizeDateNavigatorTextChange": [{ type: core_1.Output },],
        "dataCellTemplateChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "dateCellTemplateChange": [{ type: core_1.Output },],
        "dateSerializationFormatChange": [{ type: core_1.Output },],
        "descriptionExprChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "dropDownAppointmentTemplateChange": [{ type: core_1.Output },],
        "editingChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "endDateExprChange": [{ type: core_1.Output },],
        "endDateTimeZoneExprChange": [{ type: core_1.Output },],
        "endDayHourChange": [{ type: core_1.Output },],
        "firstDayOfWeekChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "groupByDateChange": [{ type: core_1.Output },],
        "groupsChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "indicatorUpdateIntervalChange": [{ type: core_1.Output },],
        "maxChange": [{ type: core_1.Output },],
        "maxAppointmentsPerCellChange": [{ type: core_1.Output },],
        "minChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "recurrenceEditModeChange": [{ type: core_1.Output },],
        "recurrenceExceptionExprChange": [{ type: core_1.Output },],
        "recurrenceRuleExprChange": [{ type: core_1.Output },],
        "remoteFilteringChange": [{ type: core_1.Output },],
        "resourceCellTemplateChange": [{ type: core_1.Output },],
        "resourcesChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "selectedCellDataChange": [{ type: core_1.Output },],
        "shadeUntilCurrentTimeChange": [{ type: core_1.Output },],
        "showAllDayPanelChange": [{ type: core_1.Output },],
        "showCurrentTimeIndicatorChange": [{ type: core_1.Output },],
        "startDateExprChange": [{ type: core_1.Output },],
        "startDateTimeZoneExprChange": [{ type: core_1.Output },],
        "startDayHourChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textExprChange": [{ type: core_1.Output },],
        "timeCellTemplateChange": [{ type: core_1.Output },],
        "timeZoneChange": [{ type: core_1.Output },],
        "useDropDownViewSwitcherChange": [{ type: core_1.Output },],
        "viewsChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "resourcesChildren": [{ type: core_1.ContentChildren, args: [resource_dxi_2.DxiResourceComponent,] },],
        "viewsChildren": [{ type: core_1.ContentChildren, args: [view_dxi_2.DxiViewComponent,] },],
    };
    return DxSchedulerComponent;
}(component_1.DxComponent));
exports.DxSchedulerComponent = DxSchedulerComponent;
var DxSchedulerModule = (function () {
    function DxSchedulerModule() {
    }
    DxSchedulerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        editing_1.DxoEditingModule,
                        resource_dxi_1.DxiResourceModule,
                        view_dxi_1.DxiViewModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxSchedulerComponent
                    ],
                    exports: [
                        DxSchedulerComponent,
                        editing_1.DxoEditingModule,
                        resource_dxi_1.DxiResourceModule,
                        view_dxi_1.DxiViewModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxSchedulerModule;
}());
exports.DxSchedulerModule = DxSchedulerModule;
//# sourceMappingURL=scheduler.js.map