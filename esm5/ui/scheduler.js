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
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DxScheduler from 'devextreme/ui/scheduler';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoEditingModule } from './nested/editing';
import { DxiResourceModule } from './nested/resource-dxi';
import { DxiViewModule } from './nested/view-dxi';
import { DxiResourceComponent } from './nested/resource-dxi';
import { DxiViewComponent } from './nested/view-dxi';
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
    DxSchedulerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-scheduler',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxSchedulerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxSchedulerComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "adaptivityEnabled": [{ type: Input },],
        "allDayExpr": [{ type: Input },],
        "appointmentCollectorTemplate": [{ type: Input },],
        "appointmentTemplate": [{ type: Input },],
        "appointmentTooltipTemplate": [{ type: Input },],
        "cellDuration": [{ type: Input },],
        "crossScrollingEnabled": [{ type: Input },],
        "currentDate": [{ type: Input },],
        "currentView": [{ type: Input },],
        "customizeDateNavigatorText": [{ type: Input },],
        "dataCellTemplate": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "dateCellTemplate": [{ type: Input },],
        "dateSerializationFormat": [{ type: Input },],
        "descriptionExpr": [{ type: Input },],
        "disabled": [{ type: Input },],
        "dropDownAppointmentTemplate": [{ type: Input },],
        "editing": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "endDateExpr": [{ type: Input },],
        "endDateTimeZoneExpr": [{ type: Input },],
        "endDayHour": [{ type: Input },],
        "firstDayOfWeek": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "groupByDate": [{ type: Input },],
        "groups": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "indicatorUpdateInterval": [{ type: Input },],
        "max": [{ type: Input },],
        "maxAppointmentsPerCell": [{ type: Input },],
        "min": [{ type: Input },],
        "noDataText": [{ type: Input },],
        "recurrenceEditMode": [{ type: Input },],
        "recurrenceExceptionExpr": [{ type: Input },],
        "recurrenceRuleExpr": [{ type: Input },],
        "remoteFiltering": [{ type: Input },],
        "resourceCellTemplate": [{ type: Input },],
        "resources": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectedCellData": [{ type: Input },],
        "shadeUntilCurrentTime": [{ type: Input },],
        "showAllDayPanel": [{ type: Input },],
        "showCurrentTimeIndicator": [{ type: Input },],
        "startDateExpr": [{ type: Input },],
        "startDateTimeZoneExpr": [{ type: Input },],
        "startDayHour": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "textExpr": [{ type: Input },],
        "timeCellTemplate": [{ type: Input },],
        "timeZone": [{ type: Input },],
        "useDropDownViewSwitcher": [{ type: Input },],
        "views": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onAppointmentAdded": [{ type: Output },],
        "onAppointmentAdding": [{ type: Output },],
        "onAppointmentClick": [{ type: Output },],
        "onAppointmentContextMenu": [{ type: Output },],
        "onAppointmentDblClick": [{ type: Output },],
        "onAppointmentDeleted": [{ type: Output },],
        "onAppointmentDeleting": [{ type: Output },],
        "onAppointmentFormCreated": [{ type: Output },],
        "onAppointmentFormOpening": [{ type: Output },],
        "onAppointmentRendered": [{ type: Output },],
        "onAppointmentUpdated": [{ type: Output },],
        "onAppointmentUpdating": [{ type: Output },],
        "onCellClick": [{ type: Output },],
        "onCellContextMenu": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "adaptivityEnabledChange": [{ type: Output },],
        "allDayExprChange": [{ type: Output },],
        "appointmentCollectorTemplateChange": [{ type: Output },],
        "appointmentTemplateChange": [{ type: Output },],
        "appointmentTooltipTemplateChange": [{ type: Output },],
        "cellDurationChange": [{ type: Output },],
        "crossScrollingEnabledChange": [{ type: Output },],
        "currentDateChange": [{ type: Output },],
        "currentViewChange": [{ type: Output },],
        "customizeDateNavigatorTextChange": [{ type: Output },],
        "dataCellTemplateChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "dateCellTemplateChange": [{ type: Output },],
        "dateSerializationFormatChange": [{ type: Output },],
        "descriptionExprChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "dropDownAppointmentTemplateChange": [{ type: Output },],
        "editingChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "endDateExprChange": [{ type: Output },],
        "endDateTimeZoneExprChange": [{ type: Output },],
        "endDayHourChange": [{ type: Output },],
        "firstDayOfWeekChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "groupByDateChange": [{ type: Output },],
        "groupsChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "indicatorUpdateIntervalChange": [{ type: Output },],
        "maxChange": [{ type: Output },],
        "maxAppointmentsPerCellChange": [{ type: Output },],
        "minChange": [{ type: Output },],
        "noDataTextChange": [{ type: Output },],
        "recurrenceEditModeChange": [{ type: Output },],
        "recurrenceExceptionExprChange": [{ type: Output },],
        "recurrenceRuleExprChange": [{ type: Output },],
        "remoteFilteringChange": [{ type: Output },],
        "resourceCellTemplateChange": [{ type: Output },],
        "resourcesChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectedCellDataChange": [{ type: Output },],
        "shadeUntilCurrentTimeChange": [{ type: Output },],
        "showAllDayPanelChange": [{ type: Output },],
        "showCurrentTimeIndicatorChange": [{ type: Output },],
        "startDateExprChange": [{ type: Output },],
        "startDateTimeZoneExprChange": [{ type: Output },],
        "startDayHourChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textExprChange": [{ type: Output },],
        "timeCellTemplateChange": [{ type: Output },],
        "timeZoneChange": [{ type: Output },],
        "useDropDownViewSwitcherChange": [{ type: Output },],
        "viewsChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "resourcesChildren": [{ type: ContentChildren, args: [DxiResourceComponent,] },],
        "viewsChildren": [{ type: ContentChildren, args: [DxiViewComponent,] },],
    };
    return DxSchedulerComponent;
}(DxComponent));
export { DxSchedulerComponent };
var DxSchedulerModule = (function () {
    function DxSchedulerModule() {
    }
    DxSchedulerModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxSchedulerModule;
}());
export { DxSchedulerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdWkvc2NoZWR1bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBR2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JB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QUtOLE1BQU07NENBS04sTUFBTTtzQ0FLTixNQUFNO2lDQUtOLE1BQU07aUNBS04sTUFBTTsrQkFLTixNQUFNO2tEQUtOLE1BQU07OEJBS04sTUFBTTtpREFLTixNQUFNOzhCQUtOLE1BQU07cUNBS04sTUFBTTs2Q0FLTixNQUFNO2tEQUtOLE1BQU07NkNBS04sTUFBTTswQ0FLTixNQUFNOytDQUtOLE1BQU07b0NBS04sTUFBTTtxQ0FLTixNQUFNOzJDQUtOLE1BQU07Z0RBS04sTUFBTTswQ0FLTixNQUFNO21EQUtOLE1BQU07d0NBS04sTUFBTTtnREFLTixNQUFNO3VDQUtOLE1BQU07bUNBS04sTUFBTTttQ0FLTixNQUFNOzJDQUtOLE1BQU07bUNBS04sTUFBTTtrREFLTixNQUFNO2dDQUtOLE1BQU07a0NBS04sTUFBTTtnQ0FLTixNQUFNO3NDQUtOLGVBQWUsU0FBQyxvQkFBb0I7a0NBUXBDLGVBQWUsU0FBQyxnQkFBZ0I7OytCQXBuQ3JDO0VBb0YwQyxXQUFXO1NBQXhDLG9CQUFvQjs7Ozs7Z0JBK3FDaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsMEJBQTBCO3FCQUMzQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzs0QkF0eENEOztTQXV4Q2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhTY2hlZHVsZXIgZnJvbSAnZGV2ZXh0cmVtZS91aS9zY2hlZHVsZXInO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9FZGl0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZWRpdGluZyc7XHJcbmltcG9ydCB7IER4aVJlc291cmNlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvcmVzb3VyY2UtZHhpJztcclxuaW1wb3J0IHsgRHhpVmlld01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3ZpZXctZHhpJztcclxuXHJcbmltcG9ydCB7IER4aVJlc291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvcmVzb3VyY2UtZHhpJztcclxuaW1wb3J0IHsgRHhpVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL3ZpZXctZHhpJztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVyIGlzIGEgd2lkZ2V0IHRoYXQgcmVwcmVzZW50cyBzY2hlZHVsZWQgZGF0YSBhbmQgYWxsb3dzIGEgdXNlciB0byBtYW5hZ2UgYW5kIGVkaXQgaXQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtc2NoZWR1bGVyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhTY2hlZHVsZXJDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeFNjaGVkdWxlcjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgYWRhcHRzIHRvIHNtYWxsIHNjcmVlbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWRhcHRpdml0eUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWRhcHRpdml0eUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhZGFwdGl2aXR5RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWRhcHRpdml0eUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHdob3NlIHZhbHVlIGRlZmluZXMgd2hldGhlciBvciBub3QgdGhlIGNvcnJlc3BvbmRpbmcgYXBwb2ludG1lbnQgaXMgYW4gYWxsLWRheSBhcHBvaW50bWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxEYXlFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsRGF5RXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbERheUV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsRGF5RXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYW4gYXBwb2ludG1lbnQgY29sbGVjdG9yJ3MgY3VzdG9tIHRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgYXBwb2ludG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcG9pbnRtZW50VGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcHBvaW50bWVudFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXBwb2ludG1lbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBvaW50bWVudFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgYXBwb2ludG1lbnQgdG9vbHRpcHMgYW5kIGFwcG9pbnRtZW50cyBpbiB0aGUgYXBwb2ludG1lbnQgY29sbGVjdG9yJ3MgZHJvcC1kb3duIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBjZWxsIGR1cmF0aW9uIGluIG1pbnV0ZXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2VsbER1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2VsbER1cmF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2VsbER1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NlbGxEdXJhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgYW4gZW5kLXVzZXIgY2FuIHNjcm9sbCB0aGUgdmlldyBpbiBib3RoIGRpcmVjdGlvbnMgYXQgdGhlIHNhbWUgdGltZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjcm9zc1Njcm9sbGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3Jvc3NTY3JvbGxpbmdFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3Jvc3NTY3JvbGxpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjcm9zc1Njcm9sbGluZ0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZGF0ZSBkaXNwbGF5ZWQgb24gdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHZpZXcgYnkgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXJyZW50RGF0ZSgpOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXJyZW50RGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1cnJlbnREYXRlKHZhbHVlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXJyZW50RGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgdmlldy4gQWNjZXB0cyB0aGUgdmlldydzIG5hbWUgb3IgdHlwZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXJyZW50VmlldygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1cnJlbnRWaWV3Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VycmVudFZpZXcodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VycmVudFZpZXcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9taXplcyB0aGUgZGF0ZSBuYXZpZ2F0b3IncyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0KCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21pemVEYXRlTmF2aWdhdG9yVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0KHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0YWJsZSBjZWxscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhQ2VsbFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YUNlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YUNlbGxUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PERldkV4cHJlc3MudWkuZHhTY2hlZHVsZXJBcHBvaW50bWVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PERldkV4cHJlc3MudWkuZHhTY2hlZHVsZXJBcHBvaW50bWVudD4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciBkYXkgc2NhbGUgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0ZUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGVDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRlQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGVDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBkYXRlLXRpbWUgdmFsdWVzJyBzZXJpYWxpemF0aW9uIGZvcm1hdC4gVXNlIGl0IG9ubHkgaWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoZSBkYXRhU291cmNlIGF0IGRlc2lnbiB0aW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgd2hvc2UgdmFsdWUgaG9sZHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb3JyZXNwb25kaW5nIGFwcG9pbnRtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rlc2NyaXB0aW9uRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlc2NyaXB0aW9uRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkZXNjcmlwdGlvbkV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgYXBwb2ludG1lbnRzIGluIHRoZSBhcHBvaW50bWVudCBjb2xsZWN0b3IncyBkcm9wLWRvd24gbGlzdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGljaCBlZGl0aW5nIG9wZXJhdGlvbnMgYW4gZW5kLXVzZXIgY2FuIHBlcmZvcm0gb24gYXBwb2ludG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVkaXRpbmcoKTogYm9vbGVhbiB8IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiwgYWxsb3dEcmFnZ2luZz86IGJvb2xlYW4sIGFsbG93UmVzaXppbmc/OiBib29sZWFuLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlZGl0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdGluZyh2YWx1ZTogYm9vbGVhbiB8IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiwgYWxsb3dEcmFnZ2luZz86IGJvb2xlYW4sIGFsbG93UmVzaXppbmc/OiBib29sZWFuLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlZGl0aW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBkZWZpbmVzIHRoZSBlbmRpbmcgb2YgYW4gYXBwb2ludG1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kRGF0ZUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbmREYXRlRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuZERhdGVFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuZERhdGVFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGRlZmluZXMgdGhlIHRpbWV6b25lIG9mIHRoZSBhcHBvaW50bWVudCBlbmQgZGF0ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbmREYXRlVGltZVpvbmVFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kRGF0ZVRpbWVab25lRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuZERhdGVUaW1lWm9uZUV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kRGF0ZVRpbWVab25lRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxhc3QgaG91ciBvbiB0aGUgdGltZSBzY2FsZS4gQWNjZXB0cyBpbnRlZ2VyIHZhbHVlcyBmcm9tIDAgdG8gMjQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kRGF5SG91cigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuZERheUhvdXInKTtcclxuICAgIH1cclxuICAgIHNldCBlbmREYXlIb3VyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuZERheUhvdXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBmaXJzdCBkYXkgb2YgYSB3ZWVrLiBEb2VzIG5vdCBhcHBseSB0byB0aGUgYWdlbmRhIHZpZXcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaXJzdERheU9mV2VlaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpcnN0RGF5T2ZXZWVrKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpcnN0RGF5T2ZXZWVrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2FuIGJlIGZvY3VzZWQgdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c1N0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmb2N1c1N0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb2N1c1N0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBncm91cCBhcHBvaW50bWVudHMgYnkgZGF0ZSBmaXJzdC4gQXBwbGllcyBvbmx5IGlmIGdyb3VwT3JpZW50YXRpb24gaXMgXCJob3Jpem9udGFsXCIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBCeURhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBCeURhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cEJ5RGF0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBCeURhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSByZXNvdXJjZSBraW5kcyBieSB3aGljaCB0aGUgc2NoZWR1bGVyJ3MgYXBwb2ludG1lbnRzIGFyZSBncm91cGVkIGluIGEgdGltZXRhYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwcygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cHMnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cHModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRpbWUgaW50ZXJ2YWwgYmV0d2VlbiB3aGVuIHRoZSBkYXRlLXRpbWUgaW5kaWNhdG9yIGNoYW5nZXMgaXRzIHBvc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW5kaWNhdG9yVXBkYXRlSW50ZXJ2YWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGluZGljYXRvclVwZGF0ZUludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2luZGljYXRvclVwZGF0ZUludGVydmFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGUgd2lkZ2V0IGFsbG93cyB5b3UgdG8gc2VsZWN0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heCgpOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXgnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXgodmFsdWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxpbWl0IG9mIGZ1bGwtc2l6ZWQgYXBwb2ludG1lbnRzIGRpc3BsYXllZCBwZXIgY2VsbC4gQXBwbGllcyB0byBhbGwgdmlld3MgZXhjZXB0IFwiYWdlbmRhXCIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heEFwcG9pbnRtZW50c1BlckNlbGwnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhBcHBvaW50bWVudHNQZXJDZWxsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heEFwcG9pbnRtZW50c1BlckNlbGwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhlIHdpZGdldCBhbGxvd3MgeW91IHRvIHNlbGVjdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW4oKTogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluKHZhbHVlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgb3IgSFRNTCBtYXJrdXAgZGlzcGxheWVkIGJ5IHRoZSB3aWRnZXQgaWYgdGhlIGl0ZW0gY29sbGVjdGlvbiBpcyBlbXB0eS4gQXZhaWxhYmxlIGZvciB0aGUgQWdlbmRhIHZpZXcgb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBub0RhdGFUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbm9EYXRhVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vRGF0YVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbm9EYXRhVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGVkaXQgbW9kZSBmb3IgcmVjdXJyaW5nIGFwcG9pbnRtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWN1cnJlbmNlRWRpdE1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWN1cnJlbmNlRWRpdE1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCByZWN1cnJlbmNlRWRpdE1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVjdXJyZW5jZUVkaXRNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGRlZmluZXMgZXhjZXB0aW9ucyBmb3IgdGhlIGN1cnJlbnQgcmVjdXJyaW5nIGFwcG9pbnRtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlY3VycmVuY2VFeGNlcHRpb25FeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCByZWN1cnJlbmNlRXhjZXB0aW9uRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWN1cnJlbmNlRXhjZXB0aW9uRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBkZWZpbmVzIGEgcmVjdXJyZW5jZSBydWxlIGZvciBnZW5lcmF0aW5nIHJlY3VycmluZyBhcHBvaW50bWVudHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVjdXJyZW5jZVJ1bGVFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVjdXJyZW5jZVJ1bGVFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVjdXJyZW5jZVJ1bGVFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlY3VycmVuY2VSdWxlRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBmaWx0ZXJpbmcgaXMgcGVyZm9ybWVkIG9uIHRoZSBzZXJ2ZXIgb3IgY2xpZW50IHNpZGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVtb3RlRmlsdGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlbW90ZUZpbHRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlbW90ZUZpbHRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVtb3RlRmlsdGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgcmVzb3VyY2UgaGVhZGVycy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNvdXJjZUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc291cmNlQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVzb3VyY2VDZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzb3VyY2VDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuIGFycmF5IG9mIHJlc291cmNlcyBhdmFpbGFibGUgaW4gdGhlIHNjaGVkdWxlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXNvdXJjZXMoKTogQXJyYXk8YW55IHwgeyBhbGxvd011bHRpcGxlPzogYm9vbGVhbiwgY29sb3JFeHByPzogc3RyaW5nLCBkYXRhU291cmNlPzogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxhbnk+LCBkaXNwbGF5RXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nLCBmaWVsZEV4cHI/OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB1c2VDb2xvckFzRGVmYXVsdD86IGJvb2xlYW4sIHZhbHVlRXhwcj86IEZ1bmN0aW9uIHwgc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNvdXJjZXMnKTtcclxuICAgIH1cclxuICAgIHNldCByZXNvdXJjZXModmFsdWU6IEFycmF5PGFueSB8IHsgYWxsb3dNdWx0aXBsZT86IGJvb2xlYW4sIGNvbG9yRXhwcj86IHN0cmluZywgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiwgZGlzcGxheUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZywgZmllbGRFeHByPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgdXNlQ29sb3JBc0RlZmF1bHQ/OiBib29sZWFuLCB2YWx1ZUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVzb3VyY2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGNlbGxzJyBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkQ2VsbERhdGEoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VsZWN0ZWRDZWxsRGF0YScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkQ2VsbERhdGEodmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlbGVjdGVkQ2VsbERhdGEnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gYXBwbHkgc2hhZGluZyB0byBjb3ZlciB0aGUgdGltZXRhYmxlIHVwIHRvIHRoZSBjdXJyZW50IHRpbWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hhZGVVbnRpbEN1cnJlbnRUaW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NoYWRlVW50aWxDdXJyZW50VGltZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNoYWRlVW50aWxDdXJyZW50VGltZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hhZGVVbnRpbEN1cnJlbnRUaW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgXCJBbGwtZGF5XCIgcGFuZWwncyB2aXNpYmlsaXR5LiBTZXR0aW5nIHRoaXMgb3B0aW9uIHRvIGZhbHNlIGhpZGVzIHRoZSBwYW5lbCBhbG9uZyB3aXRoIHRoZSBhbGwtZGF5IGFwcG9pbnRtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93QWxsRGF5UGFuZWwoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0FsbERheVBhbmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0FsbERheVBhbmVsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93QWxsRGF5UGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjdXJyZW50IGRhdGUtdGltZSBpbmRpY2F0b3IncyB2aXNpYmlsaXR5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDdXJyZW50VGltZUluZGljYXRvcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q3VycmVudFRpbWVJbmRpY2F0b3InKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q3VycmVudFRpbWVJbmRpY2F0b3IodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDdXJyZW50VGltZUluZGljYXRvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiBhbiBhcHBvaW50bWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGFydERhdGVFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhcnREYXRlRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXJ0RGF0ZUV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnREYXRlRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBkZWZpbmVzIHRoZSB0aW1lem9uZSBvZiB0aGUgYXBwb2ludG1lbnQgc3RhcnQgZGF0ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGFydERhdGVUaW1lWm9uZUV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydERhdGVUaW1lWm9uZUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydERhdGVUaW1lWm9uZUV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnREYXRlVGltZVpvbmVFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZmlyc3QgaG91ciBvbiB0aGUgdGltZSBzY2FsZS4gQWNjZXB0cyBpbnRlZ2VyIHZhbHVlcyBmcm9tIDAgdG8gMjQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnREYXlIb3VyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhcnREYXlIb3VyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnREYXlIb3VyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXJ0RGF5SG91cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB0aGF0IGhvbGRzIHRoZSBzdWJqZWN0IG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHRFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dEV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0RXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0RXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRpbWUgc2NhbGUgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGltZUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpbWVDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aW1lQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpbWVDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB0aW1lem9uZSBvZiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpbWVab25lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGltZVpvbmUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aW1lWm9uZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aW1lWm9uZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHVzZXIgY2FuIHN3aXRjaCB2aWV3cyB1c2luZyB0YWJzIG9yIGEgZHJvcC1kb3duIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdXNlRHJvcERvd25WaWV3U3dpdGNoZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndXNlRHJvcERvd25WaWV3U3dpdGNoZXInKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VEcm9wRG93blZpZXdTd2l0Y2hlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndXNlRHJvcERvd25WaWV3U3dpdGNoZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuZCBjb25maWd1cmVzIHRoZSB2aWV3cyB0byBiZSBhdmFpbGFibGUgaW4gdGhlIHZpZXcgc3dpdGNoZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlld3MoKTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgYW55IHwgeyBhZ2VuZGFEdXJhdGlvbj86IG51bWJlciwgYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZT86IGFueSwgYXBwb2ludG1lbnRUZW1wbGF0ZT86IGFueSwgYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGU/OiBhbnksIGNlbGxEdXJhdGlvbj86IG51bWJlciwgZGF0YUNlbGxUZW1wbGF0ZT86IGFueSwgZGF0ZUNlbGxUZW1wbGF0ZT86IGFueSwgZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlPzogYW55LCBlbmREYXlIb3VyPzogbnVtYmVyLCBmaXJzdERheU9mV2Vlaz86IG51bWJlciB8IHN0cmluZywgZ3JvdXBCeURhdGU/OiBib29sZWFuLCBncm91cE9yaWVudGF0aW9uPzogc3RyaW5nLCBncm91cHM/OiBBcnJheTxzdHJpbmc+LCBpbnRlcnZhbENvdW50PzogbnVtYmVyLCBtYXhBcHBvaW50bWVudHNQZXJDZWxsPzogbnVtYmVyIHwgc3RyaW5nLCBuYW1lPzogc3RyaW5nLCByZXNvdXJjZUNlbGxUZW1wbGF0ZT86IGFueSwgc3RhcnREYXRlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgc3RhcnREYXlIb3VyPzogbnVtYmVyLCB0aW1lQ2VsbFRlbXBsYXRlPzogYW55LCB0eXBlPzogc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aWV3cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpZXdzKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBhbnkgfCB7IGFnZW5kYUR1cmF0aW9uPzogbnVtYmVyLCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZT86IGFueSwgY2VsbER1cmF0aW9uPzogbnVtYmVyLCBkYXRhQ2VsbFRlbXBsYXRlPzogYW55LCBkYXRlQ2VsbFRlbXBsYXRlPzogYW55LCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGVuZERheUhvdXI/OiBudW1iZXIsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cEJ5RGF0ZT86IGJvb2xlYW4sIGdyb3VwT3JpZW50YXRpb24/OiBzdHJpbmcsIGdyb3Vwcz86IEFycmF5PHN0cmluZz4sIGludGVydmFsQ291bnQ/OiBudW1iZXIsIG1heEFwcG9pbnRtZW50c1BlckNlbGw/OiBudW1iZXIgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHJlc291cmNlQ2VsbFRlbXBsYXRlPzogYW55LCBzdGFydERhdGU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBzdGFydERheUhvdXI/OiBudW1iZXIsIHRpbWVDZWxsVGVtcGxhdGU/OiBhbnksIHR5cGU/OiBzdHJpbmcgfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZpZXdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhbiBhcHBvaW50bWVudCBpcyBhZGRlZCB0byB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50QWRkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhbiBhcHBvaW50bWVudCBpcyBhZGRlZCB0byB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50QWRkaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGFwcG9pbnRtZW50IGlzIGNsaWNrZWQgb3IgdGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BcHBvaW50bWVudENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciBhdHRlbXB0cyB0byBvcGVuIHRoZSBicm93c2VyJ3MgY29udGV4dCBtZW51IGZvciBhbiBhcHBvaW50bWVudC4gQWxsb3dzIHlvdSB0byByZXBsYWNlIHRoaXMgY29udGV4dCBtZW51IHdpdGggYSBjdXN0b20gY29udGV4dCBtZW51LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BcHBvaW50bWVudENvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGFwcG9pbnRtZW50IGlzIGRvdWJsZS1jbGlja2VkIG9yIGRvdWJsZS10YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGFwcG9pbnRtZW50IGlzIGRlbGV0ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50RGVsZXRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGFuIGFwcG9pbnRtZW50IGlzIGRlbGV0ZWQgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50RGVsZXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSBvbkFwcG9pbnRtZW50Rm9ybU9wZW5pbmcgb3B0aW9uIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Rm9ybUNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhbiBhcHBvaW50bWVudCBkZXRhaWxzIGZvcm0gaXMgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BcHBvaW50bWVudEZvcm1PcGVuaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGFwcG9pbnRtZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BcHBvaW50bWVudFJlbmRlcmVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhbiBhcHBvaW50bWVudCBpcyB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRVcGRhdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYW4gYXBwb2ludG1lbnQgaXMgdXBkYXRlZCBpbiB0aGUgZGF0YSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50VXBkYXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB2aWV3IGNlbGwgaXMgY2xpY2tlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciBhdHRlbXB0cyB0byBvcGVuIHRoZSBicm93c2VyJ3MgY29udGV4dCBtZW51IGZvciBhIGNlbGwuIEFsbG93cyB5b3UgdG8gcmVwbGFjZSB0aGlzIGNvbnRleHQgbWVudSB3aXRoIGEgY3VzdG9tIGNvbnRleHQgbWVudS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbENvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBjb250ZW50IGlzIHJlYWR5IGFuZCBlYWNoIHRpbWUgdGhlIGNvbnRlbnQgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29udGVudFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWNjZXNzS2V5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWNjZXNzS2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFkYXB0aXZpdHlFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWRhcHRpdml0eUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbERheUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxEYXlFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2VsbER1cmF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2VsbER1cmF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNyb3NzU2Nyb2xsaW5nRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNyb3NzU2Nyb2xsaW5nRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VycmVudERhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXJyZW50RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGUgfCBudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3VycmVudFZpZXdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXJyZW50Vmlld0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21pemVEYXRlTmF2aWdhdG9yVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0YUNlbGxUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFDZWxsVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0YVNvdXJjZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGFTb3VyY2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PERldkV4cHJlc3MudWkuZHhTY2hlZHVsZXJBcHBvaW50bWVudD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0ZUNlbGxUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVDZWxsVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkZXNjcmlwdGlvbkV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkZXNjcmlwdGlvbkV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVkaXRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHsgYWxsb3dBZGRpbmc/OiBib29sZWFuLCBhbGxvd0RlbGV0aW5nPzogYm9vbGVhbiwgYWxsb3dEcmFnZ2luZz86IGJvb2xlYW4sIGFsbG93UmVzaXppbmc/OiBib29sZWFuLCBhbGxvd1VwZGF0aW5nPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZW5kRGF0ZUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbmREYXRlRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbmREYXRlVGltZVpvbmVFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZW5kRGF0ZVRpbWVab25lRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbmREYXlIb3VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZW5kRGF5SG91ckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaXJzdERheU9mV2Vla0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpcnN0RGF5T2ZXZWVrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwQnlEYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBCeURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3Vwc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdyb3Vwc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZz4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGludENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhpbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaW5kaWNhdG9yVXBkYXRlSW50ZXJ2YWxDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1heEFwcG9pbnRtZW50c1BlckNlbGxDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhBcHBvaW50bWVudHNQZXJDZWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1pbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1pbkNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGUgfCBudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbm9EYXRhVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5vRGF0YVRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVjdXJyZW5jZUVkaXRNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVjdXJyZW5jZUVkaXRNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlY3VycmVuY2VFeGNlcHRpb25FeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVjdXJyZW5jZVJ1bGVFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVjdXJyZW5jZVJ1bGVFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlbW90ZUZpbHRlcmluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW90ZUZpbHRlcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVzb3VyY2VDZWxsVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXNvdXJjZUNlbGxUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZXNvdXJjZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXNvdXJjZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGFsbG93TXVsdGlwbGU/OiBib29sZWFuLCBjb2xvckV4cHI/OiBzdHJpbmcsIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIGZpZWxkRXhwcj86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIHVzZUNvbG9yQXNEZWZhdWx0PzogYm9vbGVhbiwgdmFsdWVFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkQ2VsbERhdGFDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENlbGxEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaGFkZVVudGlsQ3VycmVudFRpbWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaGFkZVVudGlsQ3VycmVudFRpbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dBbGxEYXlQYW5lbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dBbGxEYXlQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGFydERhdGVFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhcnREYXRlRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGFydERhdGVUaW1lWm9uZUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGFydERhdGVUaW1lWm9uZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3RhcnREYXlIb3VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3RhcnREYXlIb3VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGV4dEV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0RXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aW1lQ2VsbFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGltZUNlbGxUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aW1lWm9uZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRpbWVab25lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHVzZURyb3BEb3duVmlld1N3aXRjaGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdXNlRHJvcERvd25WaWV3U3dpdGNoZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpZXdzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlld3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBhbnkgfCB7IGFnZW5kYUR1cmF0aW9uPzogbnVtYmVyLCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZT86IGFueSwgY2VsbER1cmF0aW9uPzogbnVtYmVyLCBkYXRhQ2VsbFRlbXBsYXRlPzogYW55LCBkYXRlQ2VsbFRlbXBsYXRlPzogYW55LCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGVuZERheUhvdXI/OiBudW1iZXIsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cEJ5RGF0ZT86IGJvb2xlYW4sIGdyb3VwT3JpZW50YXRpb24/OiBzdHJpbmcsIGdyb3Vwcz86IEFycmF5PHN0cmluZz4sIGludGVydmFsQ291bnQ/OiBudW1iZXIsIG1heEFwcG9pbnRtZW50c1BlckNlbGw/OiBudW1iZXIgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHJlc291cmNlQ2VsbFRlbXBsYXRlPzogYW55LCBzdGFydERhdGU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBzdGFydERheUhvdXI/OiBudW1iZXIsIHRpbWVDZWxsVGVtcGxhdGU/OiBhbnksIHR5cGU/OiBzdHJpbmcgfT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlSZXNvdXJjZUNvbXBvbmVudClcclxuICAgIGdldCByZXNvdXJjZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpUmVzb3VyY2VDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNvdXJjZXMnKTtcclxuICAgIH1cclxuICAgIHNldCByZXNvdXJjZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3Jlc291cmNlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVZpZXdDb21wb25lbnQpXHJcbiAgICBnZXQgdmlld3NDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVmlld0NvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZpZXdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlld3NDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3ZpZXdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50QWRkZWQnLCBlbWl0OiAnb25BcHBvaW50bWVudEFkZGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50QWRkaW5nJywgZW1pdDogJ29uQXBwb2ludG1lbnRBZGRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRDbGljaycsIGVtaXQ6ICdvbkFwcG9pbnRtZW50Q2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRDb250ZXh0TWVudScsIGVtaXQ6ICdvbkFwcG9pbnRtZW50Q29udGV4dE1lbnUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnREYmxDbGljaycsIGVtaXQ6ICdvbkFwcG9pbnRtZW50RGJsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnREZWxldGVkJywgZW1pdDogJ29uQXBwb2ludG1lbnREZWxldGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50RGVsZXRpbmcnLCBlbWl0OiAnb25BcHBvaW50bWVudERlbGV0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50Rm9ybUNyZWF0ZWQnLCBlbWl0OiAnb25BcHBvaW50bWVudEZvcm1DcmVhdGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50Rm9ybU9wZW5pbmcnLCBlbWl0OiAnb25BcHBvaW50bWVudEZvcm1PcGVuaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50UmVuZGVyZWQnLCBlbWl0OiAnb25BcHBvaW50bWVudFJlbmRlcmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50VXBkYXRlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50VXBkYXRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudFVwZGF0aW5nJywgZW1pdDogJ29uQXBwb2ludG1lbnRVcGRhdGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsQ2xpY2snLCBlbWl0OiAnb25DZWxsQ2xpY2snIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbENvbnRleHRNZW51JywgZW1pdDogJ29uQ2VsbENvbnRleHRNZW51JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NvbnRlbnRSZWFkeScsIGVtaXQ6ICdvbkNvbnRlbnRSZWFkeScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhZGFwdGl2aXR5RW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWxsRGF5RXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXBwb2ludG1lbnRUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NlbGxEdXJhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3Jvc3NTY3JvbGxpbmdFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXJyZW50RGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VycmVudFZpZXdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhQ2VsbFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRhU291cmNlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRlQ2VsbFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGVzY3JpcHRpb25FeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlZGl0aW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZW5kRGF0ZUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VuZERhdGVUaW1lWm9uZUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VuZERheUhvdXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpcnN0RGF5T2ZXZWVrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBCeURhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2dyb3Vwc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWF4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhBcHBvaW50bWVudHNQZXJDZWxsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtaW5DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25vRGF0YVRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlY3VycmVuY2VFZGl0TW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlY3VycmVuY2VSdWxlRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVtb3RlRmlsdGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXNvdXJjZUNlbGxUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVzb3VyY2VzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZENlbGxEYXRhQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaGFkZVVudGlsQ3VycmVudFRpbWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dBbGxEYXlQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGFydERhdGVFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdGFydERhdGVUaW1lWm9uZUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXJ0RGF5SG91ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RleHRFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aW1lQ2VsbFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aW1lWm9uZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndXNlRHJvcERvd25WaWV3U3dpdGNoZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZpZXdzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeFNjaGVkdWxlcihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdkYXRhU291cmNlJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2dyb3VwcycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdyZXNvdXJjZXMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnc2VsZWN0ZWRDZWxsRGF0YScsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCd2aWV3cycsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2RhdGFTb3VyY2UnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZ3JvdXBzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3Jlc291cmNlcycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdzZWxlY3RlZENlbGxEYXRhJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3ZpZXdzJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0VkaXRpbmdNb2R1bGUsXHJcbiAgICBEeGlSZXNvdXJjZU1vZHVsZSxcclxuICAgIER4aVZpZXdNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4U2NoZWR1bGVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeFNjaGVkdWxlckNvbXBvbmVudCxcclxuICAgIER4b0VkaXRpbmdNb2R1bGUsXHJcbiAgICBEeGlSZXNvdXJjZU1vZHVsZSxcclxuICAgIER4aVZpZXdNb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhTY2hlZHVsZXJNb2R1bGUgeyB9XHJcbiJdfQ==