/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
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
var DxSchedulerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxSchedulerComponent, _super);
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
         * Configures individual views.
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "accessKey", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "adaptivityEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "allDayExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "appointmentCollectorTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "appointmentTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "appointmentTooltipTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxSchedulerComponent.prototype, "cellDuration", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "crossScrollingEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "currentDate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "currentView", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxSchedulerComponent.prototype, "customizeDateNavigatorText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "dataCellTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "dateCellTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "dateSerializationFormat", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "descriptionExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "dropDownAppointmentTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "editing", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "endDateExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "endDateTimeZoneExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxSchedulerComponent.prototype, "endDayHour", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "firstDayOfWeek", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "focusStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "groupByDate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxSchedulerComponent.prototype, "groups", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "height", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxSchedulerComponent.prototype, "indicatorUpdateInterval", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "maxAppointmentsPerCell", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "noDataText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "recurrenceEditMode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "recurrenceExceptionExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "recurrenceRuleExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "remoteFiltering", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "resourceCellTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxSchedulerComponent.prototype, "resources", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxSchedulerComponent.prototype, "selectedCellData", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "shadeUntilCurrentTime", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "showAllDayPanel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "showCurrentTimeIndicator", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "startDateExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "startDateTimeZoneExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxSchedulerComponent.prototype, "startDayHour", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxSchedulerComponent.prototype, "tabIndex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "textExpr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "timeCellTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxSchedulerComponent.prototype, "timeZone", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "useDropDownViewSwitcher", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "views", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxSchedulerComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "width", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentAdded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentAdding", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentContextMenu", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentDblClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentDeleted", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentDeleting", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentFormCreated", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentFormOpening", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentRendered", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentUpdated", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentUpdating", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onCellClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onCellContextMenu", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onContentReady", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "accessKeyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "adaptivityEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "allDayExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "appointmentCollectorTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "appointmentTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "appointmentTooltipTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "cellDurationChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "crossScrollingEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "currentDateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "currentViewChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "customizeDateNavigatorTextChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "dataCellTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "dataSourceChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "dateCellTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "dateSerializationFormatChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "descriptionExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "dropDownAppointmentTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "editingChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "endDateExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "endDateTimeZoneExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "endDayHourChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "firstDayOfWeekChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "focusStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "groupByDateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "groupsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "hintChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "indicatorUpdateIntervalChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "maxChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "maxAppointmentsPerCellChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "minChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "noDataTextChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "recurrenceEditModeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "recurrenceExceptionExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "recurrenceRuleExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "remoteFilteringChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "resourceCellTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "resourcesChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "selectedCellDataChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "shadeUntilCurrentTimeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "showAllDayPanelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "showCurrentTimeIndicatorChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "startDateExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "startDateTimeZoneExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "startDayHourChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "tabIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "textExprChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "timeCellTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "timeZoneChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "useDropDownViewSwitcherChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "viewsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxSchedulerComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        ContentChildren(DxiResourceComponent),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxSchedulerComponent.prototype, "resourcesChildren", null);
    tslib_1.__decorate([
        ContentChildren(DxiViewComponent),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
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
        tslib_1.__param(7, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
            WatcherHelper,
            IterableDifferHelper, NestedOptionHost,
            TransferState, Object])
    ], DxSchedulerComponent);
    return DxSchedulerComponent;
}(DxComponent));
export { DxSchedulerComponent };
var DxSchedulerModule = /** @class */ (function () {
    function DxSchedulerModule() {
    }
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
    return DxSchedulerModule;
}());
export { DxSchedulerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvc2NoZWR1bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFZcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBR2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFP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QUNiLFNBQVM7OzZEQUU3QjtJQW5pQ1Esb0JBQW9CO1FBVmhDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFO2dCQUNQLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjthQUN2QjtTQUNKLENBQUM7UUE4aUNXLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpREFKSixVQUFVLEVBQVUsTUFBTSxFQUFnQixjQUFjO1lBQ2hELGFBQWE7WUFDdkIsb0JBQW9CLEVBQWMsZ0JBQWdCO1lBQ2pELGFBQWE7T0E1aUMzQixvQkFBb0IsQ0E2cUNoQztJQUFELDJCQUFDO0NBQUEsQUE3cUNELENBQTBDLFdBQVcsR0E2cUNwRDtTQTdxQ1ksb0JBQW9CO0FBbXNDakM7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQXBCN0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUNoQiwwQkFBMEI7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osb0JBQW9CO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFvQjtnQkFDcEIsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4U2NoZWR1bGVyIGZyb20gJ2RldmV4dHJlbWUvdWkvc2NoZWR1bGVyJztcclxuXHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuaW1wb3J0IHsgRHhvRWRpdGluZ01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2VkaXRpbmcnO1xyXG5pbXBvcnQgeyBEeGlSZXNvdXJjZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3Jlc291cmNlLWR4aSc7XHJcbmltcG9ydCB7IER4aVZpZXdNb2R1bGUgfSBmcm9tICcuL25lc3RlZC92aWV3LWR4aSc7XHJcblxyXG5pbXBvcnQgeyBEeGlSZXNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL3Jlc291cmNlLWR4aSc7XHJcbmltcG9ydCB7IER4aVZpZXdDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC92aWV3LWR4aSc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxlciBpcyBhIHdpZGdldCB0aGF0IHJlcHJlc2VudHMgc2NoZWR1bGVkIGRhdGEgYW5kIGFsbG93cyBhIHVzZXIgdG8gbWFuYWdlIGFuZCBlZGl0IGl0LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LXNjaGVkdWxlcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4U2NoZWR1bGVyQ29tcG9uZW50IGV4dGVuZHMgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgICBpbnN0YW5jZTogRHhTY2hlZHVsZXI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGFkYXB0cyB0byBzbWFsbCBzY3JlZW5zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFkYXB0aXZpdHlFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkYXB0aXZpdHlFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRhcHRpdml0eUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FkYXB0aXZpdHlFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCB3aG9zZSB2YWx1ZSBkZWZpbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBjb3JyZXNwb25kaW5nIGFwcG9pbnRtZW50IGlzIGFuIGFsbC1kYXkgYXBwb2ludG1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxsRGF5RXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbERheUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxEYXlFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbERheUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGFuIGFwcG9pbnRtZW50IGNvbGxlY3RvcidzIGN1c3RvbSB0ZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGFwcG9pbnRtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcHBvaW50bWVudFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXBwb2ludG1lbnRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcG9pbnRtZW50VGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXBwb2ludG1lbnRUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGFwcG9pbnRtZW50IHRvb2x0aXBzIGFuZCBhcHBvaW50bWVudHMgaW4gdGhlIGFwcG9pbnRtZW50IGNvbGxlY3RvcidzIGRyb3AtZG93biBsaXN0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgY2VsbCBkdXJhdGlvbiBpbiBtaW51dGVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNlbGxEdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NlbGxEdXJhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNlbGxEdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjZWxsRHVyYXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IGFuIGVuZC11c2VyIGNhbiBzY3JvbGwgdGhlIHZpZXcgaW4gYm90aCBkaXJlY3Rpb25zIGF0IHRoZSBzYW1lIHRpbWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3Jvc3NTY3JvbGxpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nyb3NzU2Nyb2xsaW5nRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNyb3NzU2Nyb2xsaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3Jvc3NTY3JvbGxpbmdFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGRhdGUgZGlzcGxheWVkIG9uIHRoZSBjdXJyZW50IHNjaGVkdWxlciB2aWV3IGJ5IGRlZmF1bHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VycmVudERhdGUoKTogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VycmVudERhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXJyZW50RGF0ZSh2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VycmVudERhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHZpZXcuIEFjY2VwdHMgdGhlIHZpZXcncyBuYW1lIG9yIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VycmVudFZpZXcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXJyZW50VmlldycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1cnJlbnRWaWV3KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1cnJlbnRWaWV3JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbWl6ZXMgdGhlIGRhdGUgbmF2aWdhdG9yJ3MgdGV4dC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21pemVEYXRlTmF2aWdhdG9yVGV4dCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21pemVEYXRlTmF2aWdhdG9yVGV4dCh2YWx1ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGFibGUgY2VsbHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YUNlbGxUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFDZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFDZWxsVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgdGhlIHdpZGdldCB0byBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLmR4U2NoZWR1bGVyQXBwb2ludG1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhU291cmNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVNvdXJjZSh2YWx1ZTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLmR4U2NoZWR1bGVyQXBwb2ludG1lbnQ+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhU291cmNlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZGF5IHNjYWxlIGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGVDZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRlQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0ZUNlbGxUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRlQ2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0ZS10aW1lIHZhbHVlcycgc2VyaWFsaXphdGlvbiBmb3JtYXQuIFVzZSBpdCBvbmx5IGlmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGUgZGF0YVNvdXJjZSBhdCBkZXNpZ24gdGltZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHdob3NlIHZhbHVlIGhvbGRzIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY29ycmVzcG9uZGluZyBhcHBvaW50bWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkZXNjcmlwdGlvbkV4cHIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkZXNjcmlwdGlvbkV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBkZXNjcmlwdGlvbkV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGVzY3JpcHRpb25FeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGFwcG9pbnRtZW50cyBpbiB0aGUgYXBwb2ludG1lbnQgY29sbGVjdG9yJ3MgZHJvcC1kb3duIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZHJvcERvd25BcHBvaW50bWVudFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Ryb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZWRpdGluZyBvcGVyYXRpb25zIGFuIGVuZC11c2VyIGNhbiBwZXJmb3JtIG9uIGFwcG9pbnRtZW50cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlZGl0aW5nKCk6IGJvb2xlYW4gfCB7IGFsbG93QWRkaW5nPzogYm9vbGVhbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4sIGFsbG93RHJhZ2dpbmc/OiBib29sZWFuLCBhbGxvd1Jlc2l6aW5nPzogYm9vbGVhbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWRpdGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRpbmcodmFsdWU6IGJvb2xlYW4gfCB7IGFsbG93QWRkaW5nPzogYm9vbGVhbiwgYWxsb3dEZWxldGluZz86IGJvb2xlYW4sIGFsbG93RHJhZ2dpbmc/OiBib29sZWFuLCBhbGxvd1Jlc2l6aW5nPzogYm9vbGVhbiwgYWxsb3dVcGRhdGluZz86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWRpdGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgZGVmaW5lcyB0aGUgZW5kaW5nIG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZERhdGVFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kRGF0ZUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbmREYXRlRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmREYXRlRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBkZWZpbmVzIHRoZSB0aW1lem9uZSBvZiB0aGUgYXBwb2ludG1lbnQgZW5kIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kRGF0ZVRpbWVab25lRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuZERhdGVUaW1lWm9uZUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbmREYXRlVGltZVpvbmVFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuZERhdGVUaW1lWm9uZUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBsYXN0IGhvdXIgb24gdGhlIHRpbWUgc2NhbGUuIEFjY2VwdHMgaW50ZWdlciB2YWx1ZXMgZnJvbSAwIHRvIDI0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZERheUhvdXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbmREYXlIb3VyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW5kRGF5SG91cih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbmREYXlIb3VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZmlyc3QgZGF5IG9mIGEgd2Vlay4gRG9lcyBub3QgYXBwbHkgdG8gdGhlIGFnZW5kYSB2aWV3LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlyc3REYXlPZldlZWsnKTtcclxuICAgIH1cclxuICAgIHNldCBmaXJzdERheU9mV2Vlayh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaXJzdERheU9mV2VlaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZ3JvdXAgYXBwb2ludG1lbnRzIGJ5IGRhdGUgZmlyc3QuIEFwcGxpZXMgb25seSBpZiBncm91cE9yaWVudGF0aW9uIGlzIFwiaG9yaXpvbnRhbFwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwQnlEYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyb3VwQnlEYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBCeURhdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwQnlEYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgcmVzb3VyY2Uga2luZHMgYnkgd2hpY2ggdGhlIHNjaGVkdWxlcidzIGFwcG9pbnRtZW50cyBhcmUgZ3JvdXBlZCBpbiBhIHRpbWV0YWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBncm91cHMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZ3JvdXBzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB0aW1lIGludGVydmFsIGJldHdlZW4gd2hlbiB0aGUgZGF0ZS10aW1lIGluZGljYXRvciBjaGFuZ2VzIGl0cyBwb3NpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGluZGljYXRvclVwZGF0ZUludGVydmFsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5kaWNhdG9yVXBkYXRlSW50ZXJ2YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF0ZXN0IGRhdGUgdGhlIHdpZGdldCBhbGxvd3MgeW91IHRvIHNlbGVjdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXgoKTogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWF4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4KHZhbHVlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBsaW1pdCBvZiBmdWxsLXNpemVkIGFwcG9pbnRtZW50cyBkaXNwbGF5ZWQgcGVyIGNlbGwuIEFwcGxpZXMgdG8gYWxsIHZpZXdzIGV4Y2VwdCBcImFnZW5kYVwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heEFwcG9pbnRtZW50c1BlckNlbGwoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhBcHBvaW50bWVudHNQZXJDZWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhBcHBvaW50bWVudHNQZXJDZWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoZSB3aWRnZXQgYWxsb3dzIHlvdSB0byBzZWxlY3QuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluKCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbih2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IG9yIEhUTUwgbWFya3VwIGRpc3BsYXllZCBieSB0aGUgd2lkZ2V0IGlmIHRoZSBpdGVtIGNvbGxlY3Rpb24gaXMgZW1wdHkuIEF2YWlsYWJsZSBmb3IgdGhlIEFnZW5kYSB2aWV3IG9ubHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbm9EYXRhVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25vRGF0YVRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBub0RhdGFUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ25vRGF0YVRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBlZGl0IG1vZGUgZm9yIHJlY3VycmluZyBhcHBvaW50bWVudHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVjdXJyZW5jZUVkaXRNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVjdXJyZW5jZUVkaXRNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVjdXJyZW5jZUVkaXRNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlY3VycmVuY2VFZGl0TW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBkZWZpbmVzIGV4Y2VwdGlvbnMgZm9yIHRoZSBjdXJyZW50IHJlY3VycmluZyBhcHBvaW50bWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWN1cnJlbmNlRXhjZXB0aW9uRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlY3VycmVuY2VFeGNlcHRpb25FeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgZGVmaW5lcyBhIHJlY3VycmVuY2UgcnVsZSBmb3IgZ2VuZXJhdGluZyByZWN1cnJpbmcgYXBwb2ludG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlY3VycmVuY2VSdWxlRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlY3VycmVuY2VSdWxlRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlY3VycmVuY2VSdWxlRXhwcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWN1cnJlbmNlUnVsZUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgZmlsdGVyaW5nIGlzIHBlcmZvcm1lZCBvbiB0aGUgc2VydmVyIG9yIGNsaWVudCBzaWRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlbW90ZUZpbHRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZW1vdGVGaWx0ZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCByZW1vdGVGaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlbW90ZUZpbHRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHJlc291cmNlIGhlYWRlcnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVzb3VyY2VDZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXNvdXJjZUNlbGxUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc291cmNlQ2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jlc291cmNlQ2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhbiBhcnJheSBvZiByZXNvdXJjZXMgYXZhaWxhYmxlIGluIHRoZSBzY2hlZHVsZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVzb3VyY2VzKCk6IEFycmF5PGFueSB8IHsgYWxsb3dNdWx0aXBsZT86IGJvb2xlYW4sIGNvbG9yRXhwcj86IHN0cmluZywgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiwgZGlzcGxheUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZywgZmllbGRFeHByPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgdXNlQ29sb3JBc0RlZmF1bHQ/OiBib29sZWFuLCB2YWx1ZUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZyB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVzb3VyY2VzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVzb3VyY2VzKHZhbHVlOiBBcnJheTxhbnkgfCB7IGFsbG93TXVsdGlwbGU/OiBib29sZWFuLCBjb2xvckV4cHI/OiBzdHJpbmcsIGRhdGFTb3VyY2U/OiBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlT3B0aW9ucyB8IHN0cmluZyB8IEFycmF5PGFueT4sIGRpc3BsYXlFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcsIGZpZWxkRXhwcj86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIHVzZUNvbG9yQXNEZWZhdWx0PzogYm9vbGVhbiwgdmFsdWVFeHByPzogRnVuY3Rpb24gfCBzdHJpbmcgfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jlc291cmNlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnRseSBzZWxlY3RlZCBjZWxscycgZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZENlbGxEYXRhKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlbGVjdGVkQ2VsbERhdGEnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZENlbGxEYXRhKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZWxlY3RlZENlbGxEYXRhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGFwcGx5IHNoYWRpbmcgdG8gY292ZXIgdGhlIHRpbWV0YWJsZSB1cCB0byB0aGUgY3VycmVudCB0aW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNoYWRlVW50aWxDdXJyZW50VGltZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaGFkZVVudGlsQ3VycmVudFRpbWUnKTtcclxuICAgIH1cclxuICAgIHNldCBzaGFkZVVudGlsQ3VycmVudFRpbWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NoYWRlVW50aWxDdXJyZW50VGltZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIFwiQWxsLWRheVwiIHBhbmVsJ3MgdmlzaWJpbGl0eS4gU2V0dGluZyB0aGlzIG9wdGlvbiB0byBmYWxzZSBoaWRlcyB0aGUgcGFuZWwgYWxvbmcgd2l0aCB0aGUgYWxsLWRheSBhcHBvaW50bWVudHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0FsbERheVBhbmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dBbGxEYXlQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dBbGxEYXlQYW5lbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0FsbERheVBhbmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgY3VycmVudCBkYXRlLXRpbWUgaW5kaWNhdG9yJ3MgdmlzaWJpbGl0eS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q3VycmVudFRpbWVJbmRpY2F0b3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0N1cnJlbnRUaW1lSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q3VycmVudFRpbWVJbmRpY2F0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgYW4gYXBwb2ludG1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnREYXRlRXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXJ0RGF0ZUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBzdGFydERhdGVFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXJ0RGF0ZUV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNvdXJjZSBpdGVtIGZpZWxkIHRoYXQgZGVmaW5lcyB0aGUgdGltZXpvbmUgb2YgdGhlIGFwcG9pbnRtZW50IHN0YXJ0IGRhdGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnREYXRlVGltZVpvbmVFeHByKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RhcnREYXRlVGltZVpvbmVFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnREYXRlVGltZVpvbmVFeHByKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXJ0RGF0ZVRpbWVab25lRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGZpcnN0IGhvdXIgb24gdGhlIHRpbWUgc2NhbGUuIEFjY2VwdHMgaW50ZWdlciB2YWx1ZXMgZnJvbSAwIHRvIDI0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXJ0RGF5SG91cigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXJ0RGF5SG91cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXJ0RGF5SG91cih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydERheUhvdXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGhlIGVsZW1lbnQgd2hlbiB0aGUgVGFiIGtleSBpcyB1c2VkIGZvciBuYXZpZ2F0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFiSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWJJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc291cmNlIGl0ZW0gZmllbGQgdGhhdCBob2xkcyB0aGUgc3ViamVjdCBvZiBhbiBhcHBvaW50bWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZXh0RXhwcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHRFeHByJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dEV4cHIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dEV4cHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aW1lIHNjYWxlIGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpbWVDZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aW1lQ2VsbFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGltZUNlbGxUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aW1lQ2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGltZXpvbmUgb2YgdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aW1lWm9uZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpbWVab25lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGltZVpvbmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGltZVpvbmUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgYSB1c2VyIGNhbiBzd2l0Y2ggdmlld3MgdXNpbmcgdGFicyBvciBhIGRyb3AtZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZURyb3BEb3duVmlld1N3aXRjaGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZURyb3BEb3duVmlld1N3aXRjaGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlRHJvcERvd25WaWV3U3dpdGNoZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZURyb3BEb3duVmlld1N3aXRjaGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgaW5kaXZpZHVhbCB2aWV3cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aWV3cygpOiBzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBhbnkgfCB7IGFnZW5kYUR1cmF0aW9uPzogbnVtYmVyLCBhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRlbXBsYXRlPzogYW55LCBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZT86IGFueSwgY2VsbER1cmF0aW9uPzogbnVtYmVyLCBkYXRhQ2VsbFRlbXBsYXRlPzogYW55LCBkYXRlQ2VsbFRlbXBsYXRlPzogYW55LCBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGVuZERheUhvdXI/OiBudW1iZXIsIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIHwgc3RyaW5nLCBncm91cEJ5RGF0ZT86IGJvb2xlYW4sIGdyb3VwT3JpZW50YXRpb24/OiBzdHJpbmcsIGdyb3Vwcz86IEFycmF5PHN0cmluZz4sIGludGVydmFsQ291bnQ/OiBudW1iZXIsIG1heEFwcG9pbnRtZW50c1BlckNlbGw/OiBudW1iZXIgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHJlc291cmNlQ2VsbFRlbXBsYXRlPzogYW55LCBzdGFydERhdGU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBzdGFydERheUhvdXI/OiBudW1iZXIsIHRpbWVDZWxsVGVtcGxhdGU/OiBhbnksIHR5cGU/OiBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZpZXdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlld3ModmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZyB8IGFueSB8IHsgYWdlbmRhRHVyYXRpb24/OiBudW1iZXIsIGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGU/OiBhbnksIGFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlPzogYW55LCBjZWxsRHVyYXRpb24/OiBudW1iZXIsIGRhdGFDZWxsVGVtcGxhdGU/OiBhbnksIGRhdGVDZWxsVGVtcGxhdGU/OiBhbnksIGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZT86IGFueSwgZW5kRGF5SG91cj86IG51bWJlciwgZmlyc3REYXlPZldlZWs/OiBudW1iZXIgfCBzdHJpbmcsIGdyb3VwQnlEYXRlPzogYm9vbGVhbiwgZ3JvdXBPcmllbnRhdGlvbj86IHN0cmluZywgZ3JvdXBzPzogQXJyYXk8c3RyaW5nPiwgaW50ZXJ2YWxDb3VudD86IG51bWJlciwgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbD86IG51bWJlciB8IHN0cmluZywgbmFtZT86IHN0cmluZywgcmVzb3VyY2VDZWxsVGVtcGxhdGU/OiBhbnksIHN0YXJ0RGF0ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHN0YXJ0RGF5SG91cj86IG51bWJlciwgdGltZUNlbGxUZW1wbGF0ZT86IGFueSwgdHlwZT86IHN0cmluZyB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlld3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBpcyB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyB3aWR0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGFwcG9pbnRtZW50IGlzIGFkZGVkIHRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRBZGRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGFuIGFwcG9pbnRtZW50IGlzIGFkZGVkIHRvIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRBZGRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gYXBwb2ludG1lbnQgaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIGF0dGVtcHRzIHRvIG9wZW4gdGhlIGJyb3dzZXIncyBjb250ZXh0IG1lbnUgZm9yIGFuIGFwcG9pbnRtZW50LiBBbGxvd3MgeW91IHRvIHJlcGxhY2UgdGhpcyBjb250ZXh0IG1lbnUgd2l0aCBhIGN1c3RvbSBjb250ZXh0IG1lbnUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gYXBwb2ludG1lbnQgaXMgZG91YmxlLWNsaWNrZWQgb3IgZG91YmxlLXRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREYmxDbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYW4gYXBwb2ludG1lbnQgaXMgZGVsZXRlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREZWxldGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgYW4gYXBwb2ludG1lbnQgaXMgZGVsZXRlZCBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREZWxldGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhlIG9uQXBwb2ludG1lbnRGb3JtT3BlbmluZyBvcHRpb24gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRGb3JtQ3JlYXRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGFuIGFwcG9pbnRtZW50IGRldGFpbHMgZm9ybSBpcyBvcGVuZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Rm9ybU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gYXBwb2ludG1lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50UmVuZGVyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGFwcG9pbnRtZW50IGlzIHVwZGF0ZWQgaW4gdGhlIGRhdGEgc291cmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25BcHBvaW50bWVudFVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhbiBhcHBvaW50bWVudCBpcyB1cGRhdGVkIGluIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRVcGRhdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHZpZXcgY2VsbCBpcyBjbGlja2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIGF0dGVtcHRzIHRvIG9wZW4gdGhlIGJyb3dzZXIncyBjb250ZXh0IG1lbnUgZm9yIGEgY2VsbC4gQWxsb3dzIHlvdSB0byByZXBsYWNlIHRoaXMgY29udGV4dCBtZW51IHdpdGggYSBjdXN0b20gY29udGV4dCBtZW51LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWRhcHRpdml0eUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhZGFwdGl2aXR5RW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWxsRGF5RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFsbERheUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXBwb2ludG1lbnRDb2xsZWN0b3JUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXBwb2ludG1lbnRUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXBwb2ludG1lbnRUb29sdGlwVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjZWxsRHVyYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjZWxsRHVyYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY3Jvc3NTY3JvbGxpbmdFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3Jvc3NTY3JvbGxpbmdFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXJyZW50RGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1cnJlbnREYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZSB8IG51bWJlciB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXJyZW50Vmlld0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGN1cnJlbnRWaWV3Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGN1c3RvbWl6ZURhdGVOYXZpZ2F0b3JUZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGdW5jdGlvbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhQ2VsbFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YUNlbGxUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5keFNjaGVkdWxlckFwcG9pbnRtZW50Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRlQ2VsbFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0ZUNlbGxUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRlc2NyaXB0aW9uRXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRlc2NyaXB0aW9uRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWRpdGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVkaXRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgeyBhbGxvd0FkZGluZz86IGJvb2xlYW4sIGFsbG93RGVsZXRpbmc/OiBib29sZWFuLCBhbGxvd0RyYWdnaW5nPzogYm9vbGVhbiwgYWxsb3dSZXNpemluZz86IGJvb2xlYW4sIGFsbG93VXBkYXRpbmc/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbmREYXRlRXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVuZERhdGVFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVuZERhdGVUaW1lWm9uZUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbmREYXRlVGltZVpvbmVFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVuZERheUhvdXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbmREYXlIb3VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpcnN0RGF5T2ZXZWVrQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlyc3REYXlPZldlZWtDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZ3JvdXBCeURhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cEJ5RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZ3JvdXBzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpbmRpY2F0b3JVcGRhdGVJbnRlcnZhbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGluZGljYXRvclVwZGF0ZUludGVydmFsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1heENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1heENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGUgfCBudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1heEFwcG9pbnRtZW50c1BlckNlbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWluQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWluQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZSB8IG51bWJlciB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBub0RhdGFUZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbm9EYXRhVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWN1cnJlbmNlRWRpdE1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWN1cnJlbmNlRWRpdE1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVjdXJyZW5jZUV4Y2VwdGlvbkV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWN1cnJlbmNlRXhjZXB0aW9uRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWN1cnJlbmNlUnVsZUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWN1cnJlbmNlUnVsZUV4cHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVtb3RlRmlsdGVyaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVtb3RlRmlsdGVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZXNvdXJjZUNlbGxUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlc291cmNlQ2VsbFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlc291cmNlc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlc291cmNlc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueSB8IHsgYWxsb3dNdWx0aXBsZT86IGJvb2xlYW4sIGNvbG9yRXhwcj86IHN0cmluZywgZGF0YVNvdXJjZT86IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8YW55PiwgZGlzcGxheUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZywgZmllbGRFeHByPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgdXNlQ29sb3JBc0RlZmF1bHQ/OiBib29sZWFuLCB2YWx1ZUV4cHI/OiBGdW5jdGlvbiB8IHN0cmluZyB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBydGxFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VsZWN0ZWRDZWxsRGF0YUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkQ2VsbERhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNoYWRlVW50aWxDdXJyZW50VGltZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNoYWRlVW50aWxDdXJyZW50VGltZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0FsbERheVBhbmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0FsbERheVBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q3VycmVudFRpbWVJbmRpY2F0b3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93Q3VycmVudFRpbWVJbmRpY2F0b3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHN0YXJ0RGF0ZUV4cHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGFydERhdGVFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHN0YXJ0RGF0ZVRpbWVab25lRXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0YXJ0RGF0ZVRpbWVab25lRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGFydERheUhvdXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGFydERheUhvdXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGFiSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0YWJJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0ZXh0RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRleHRFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRpbWVDZWxsVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aW1lQ2VsbFRlbXBsYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRpbWVab25lQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGltZVpvbmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdXNlRHJvcERvd25WaWV3U3dpdGNoZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VEcm9wRG93blZpZXdTd2l0Y2hlckNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlld3NDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aWV3c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IEFycmF5PHN0cmluZyB8IGFueSB8IHsgYWdlbmRhRHVyYXRpb24/OiBudW1iZXIsIGFwcG9pbnRtZW50Q29sbGVjdG9yVGVtcGxhdGU/OiBhbnksIGFwcG9pbnRtZW50VGVtcGxhdGU/OiBhbnksIGFwcG9pbnRtZW50VG9vbHRpcFRlbXBsYXRlPzogYW55LCBjZWxsRHVyYXRpb24/OiBudW1iZXIsIGRhdGFDZWxsVGVtcGxhdGU/OiBhbnksIGRhdGVDZWxsVGVtcGxhdGU/OiBhbnksIGRyb3BEb3duQXBwb2ludG1lbnRUZW1wbGF0ZT86IGFueSwgZW5kRGF5SG91cj86IG51bWJlciwgZmlyc3REYXlPZldlZWs/OiBudW1iZXIgfCBzdHJpbmcsIGdyb3VwQnlEYXRlPzogYm9vbGVhbiwgZ3JvdXBPcmllbnRhdGlvbj86IHN0cmluZywgZ3JvdXBzPzogQXJyYXk8c3RyaW5nPiwgaW50ZXJ2YWxDb3VudD86IG51bWJlciwgbWF4QXBwb2ludG1lbnRzUGVyQ2VsbD86IG51bWJlciB8IHN0cmluZywgbmFtZT86IHN0cmluZywgcmVzb3VyY2VDZWxsVGVtcGxhdGU/OiBhbnksIHN0YXJ0RGF0ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHN0YXJ0RGF5SG91cj86IG51bWJlciwgdGltZUNlbGxUZW1wbGF0ZT86IGFueSwgdHlwZT86IHN0cmluZyB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVJlc291cmNlQ29tcG9uZW50KVxyXG4gICAgZ2V0IHJlc291cmNlc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlSZXNvdXJjZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Jlc291cmNlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlc291cmNlc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigncmVzb3VyY2VzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpVmlld0NvbXBvbmVudClcclxuICAgIGdldCB2aWV3c0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWaWV3Q29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlld3MnKTtcclxuICAgIH1cclxuICAgIHNldCB2aWV3c0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmlld3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRBZGRlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50QWRkZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRBZGRpbmcnLCBlbWl0OiAnb25BcHBvaW50bWVudEFkZGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudENsaWNrJywgZW1pdDogJ29uQXBwb2ludG1lbnRDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudENvbnRleHRNZW51JywgZW1pdDogJ29uQXBwb2ludG1lbnRDb250ZXh0TWVudScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudERibENsaWNrJywgZW1pdDogJ29uQXBwb2ludG1lbnREYmxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdhcHBvaW50bWVudERlbGV0ZWQnLCBlbWl0OiAnb25BcHBvaW50bWVudERlbGV0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnREZWxldGluZycsIGVtaXQ6ICdvbkFwcG9pbnRtZW50RGVsZXRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRGb3JtQ3JlYXRlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50Rm9ybUNyZWF0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRGb3JtT3BlbmluZycsIGVtaXQ6ICdvbkFwcG9pbnRtZW50Rm9ybU9wZW5pbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRSZW5kZXJlZCcsIGVtaXQ6ICdvbkFwcG9pbnRtZW50UmVuZGVyZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnYXBwb2ludG1lbnRVcGRhdGVkJywgZW1pdDogJ29uQXBwb2ludG1lbnRVcGRhdGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2FwcG9pbnRtZW50VXBkYXRpbmcnLCBlbWl0OiAnb25BcHBvaW50bWVudFVwZGF0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxDbGljaycsIGVtaXQ6ICdvbkNlbGxDbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjZWxsQ29udGV4dE1lbnUnLCBlbWl0OiAnb25DZWxsQ29udGV4dE1lbnUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY2Nlc3NLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FkYXB0aXZpdHlFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxEYXlFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcHBvaW50bWVudENvbGxlY3RvclRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcHBvaW50bWVudFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhcHBvaW50bWVudFRvb2x0aXBUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY2VsbER1cmF0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjcm9zc1Njcm9sbGluZ0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2N1cnJlbnREYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXJyZW50Vmlld0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplRGF0ZU5hdmlnYXRvclRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFDZWxsVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGVDZWxsVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGVTZXJpYWxpemF0aW9uRm9ybWF0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkZXNjcmlwdGlvbkV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkcm9wRG93bkFwcG9pbnRtZW50VGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VkaXRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbmREYXRlRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZW5kRGF0ZVRpbWVab25lRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZW5kRGF5SG91ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlyc3REYXlPZldlZWtDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cEJ5RGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2luZGljYXRvclVwZGF0ZUludGVydmFsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heEFwcG9pbnRtZW50c1BlckNlbGxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21pbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbm9EYXRhVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVjdXJyZW5jZUVkaXRNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWN1cnJlbmNlRXhjZXB0aW9uRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVjdXJyZW5jZVJ1bGVFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZW1vdGVGaWx0ZXJpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Jlc291cmNlQ2VsbFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXNvdXJjZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkQ2VsbERhdGFDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NoYWRlVW50aWxDdXJyZW50VGltZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0FsbERheVBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Q3VycmVudFRpbWVJbmRpY2F0b3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXJ0RGF0ZUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXJ0RGF0ZVRpbWVab25lRXhwckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3RhcnREYXlIb3VyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0YWJJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGV4dEV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpbWVDZWxsVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpbWVab25lQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd1c2VEcm9wRG93blZpZXdTd2l0Y2hlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlld3NDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4U2NoZWR1bGVyKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnZ3JvdXBzJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3Jlc291cmNlcycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdzZWxlY3RlZENlbGxEYXRhJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3ZpZXdzJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnZGF0YVNvdXJjZScpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdncm91cHMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygncmVzb3VyY2VzJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3NlbGVjdGVkQ2VsbERhdGEnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygndmlld3MnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4aVJlc291cmNlTW9kdWxlLFxyXG4gICAgRHhpVmlld01vZHVsZSxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhTY2hlZHVsZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4U2NoZWR1bGVyQ29tcG9uZW50LFxyXG4gICAgRHhvRWRpdGluZ01vZHVsZSxcclxuICAgIER4aVJlc291cmNlTW9kdWxlLFxyXG4gICAgRHhpVmlld01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFNjaGVkdWxlck1vZHVsZSB7IH1cclxuIl19