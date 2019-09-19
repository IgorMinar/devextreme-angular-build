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
 * Build date: Thu Sep 19 2019
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
//# sourceMappingURL=scheduler.js.map