/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener } from '@angular/core';
import DxCalendar from 'devextreme/ui/calendar';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxCalendarComponent; }),
    multi: true
};
/**
 * The Calendar is a widget that displays a calendar and allows an end user to select the required date within a specified date range.
 */
var DxCalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxCalendarComponent, _super);
    function DxCalendarComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'cellTemplateChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledDatesChange' },
            { emit: 'elementAttrChange' },
            { emit: 'firstDayOfWeekChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showTodayButtonChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'zoomLevelChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxCalendarComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "cellTemplate", {
        /**
         * Specifies a custom template for calendar cells.
         */
        get: function () {
            return this._getOption('cellTemplate');
        },
        set: function (value) {
            this._setOption('cellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "dateSerializationFormat", {
        /**
         * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
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
    Object.defineProperty(DxCalendarComponent.prototype, "disabled", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "disabledDates", {
        /**
         * Specifies dates to be disabled.
         */
        get: function () {
            return this._getOption('disabledDates');
        },
        set: function (value) {
            this._setOption('disabledDates', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "firstDayOfWeek", {
        /**
         * Specifies the first day of a week.
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
    Object.defineProperty(DxCalendarComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "height", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "hint", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "isValid", {
        /**
         * Specifies whether the editor's value is valid.
         */
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "max", {
        /**
         * The latest date the widget allows to select.
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
    Object.defineProperty(DxCalendarComponent.prototype, "maxZoomLevel", {
        /**
         * Specifies the maximum zoom level of the calendar.
         */
        get: function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "min", {
        /**
         * The earliest date the widget allows to select.
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
    Object.defineProperty(DxCalendarComponent.prototype, "minZoomLevel", {
        /**
         * Specifies the minimum zoom level of the calendar.
         */
        get: function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "name", {
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "readOnly", {
        /**
         * Specifies whether the editor is read-only.
         */
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "showTodayButton", {
        /**
         * Specifies whether or not the widget displays a button that selects the current date.
         */
        get: function () {
            return this._getOption('showTodayButton');
        },
        set: function (value) {
            this._setOption('showTodayButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "validationError", {
        /**
         * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
         */
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "validationMessageMode", {
        /**
         * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
         */
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "value", {
        /**
         * An object or a value specifying the date and time currently selected in the calendar.
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "visible", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "width", {
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
    Object.defineProperty(DxCalendarComponent.prototype, "zoomLevel", {
        /**
         * Specifies the current calendar zoom level.
         */
        get: function () {
            return this._getOption('zoomLevel');
        },
        set: function (value) {
            this._setOption('zoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    DxCalendarComponent.prototype.change = function (_) { };
    DxCalendarComponent.prototype._createInstance = function (element, options) {
        return new DxCalendar(element, options);
    };
    DxCalendarComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxCalendarComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxCalendarComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxCalendarComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxCalendarComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxCalendarComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxCalendarComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('disabledDates', changes);
    };
    DxCalendarComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxCalendarComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('disabledDates');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxCalendarComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxCalendarComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxCalendarComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    tslib_1.__decorate([
        ContentChild(DxValidatorComponent),
        tslib_1.__metadata("design:type", DxValidatorComponent)
    ], DxCalendarComponent.prototype, "validator", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "accessKey", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "activeStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "cellTemplate", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "dateSerializationFormat", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "disabledDates", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "firstDayOfWeek", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "focusStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "height", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "hoverStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "isValid", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "maxZoomLevel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "minZoomLevel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "name", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "readOnly", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "showTodayButton", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxCalendarComponent.prototype, "tabIndex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "validationError", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "validationMessageMode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "value", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxCalendarComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxCalendarComponent.prototype, "width", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxCalendarComponent.prototype, "zoomLevel", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "onValueChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "accessKeyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "activeStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "cellTemplateChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "dateSerializationFormatChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "disabledDatesChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "firstDayOfWeekChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "focusStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "hintChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "hoverStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "isValidChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "maxChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "maxZoomLevelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "minChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "minZoomLevelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "nameChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "readOnlyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "showTodayButtonChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "tabIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "validationErrorChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "validationMessageModeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "zoomLevelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxCalendarComponent.prototype, "onBlur", void 0);
    tslib_1.__decorate([
        HostListener('valueChange', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], DxCalendarComponent.prototype, "change", null);
    tslib_1.__decorate([
        HostListener('onBlur', ['$event']),
        tslib_1.__metadata("design:type", Object)
    ], DxCalendarComponent.prototype, "touched", void 0);
    DxCalendarComponent = tslib_1.__decorate([
        Component({
            selector: 'dx-calendar',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        tslib_1.__param(7, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
            WatcherHelper,
            IterableDifferHelper, NestedOptionHost,
            TransferState, Object])
    ], DxCalendarComponent);
    return DxCalendarComponent;
}(DxComponent));
export { DxCalendarComponent };
var DxCalendarModule = /** @class */ (function () {
    function DxCalendarModule() {
    }
    DxCalendarModule = tslib_1.__decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxCalendarComponent
            ],
            exports: [
                DxCalendarComponent,
                DxTemplateModule
            ]
        })
    ], DxCalendarModule);
    return DxCalendarModule;
}());
export { DxCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBWXBDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBR1osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBSWYsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5ELE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU90RSxJQUFNLDhCQUE4QixHQUFHO0lBQ25DLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVB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WUFBWTt1REFBTTtJQUdLO1FBQXhDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztxREFBYztJQUNsQjtRQUFuQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7O3dEQUFxQjtJQTFmL0MsbUJBQW1CO1FBWC9CLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFO2dCQUNQLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYiw4QkFBOEI7Z0JBQzlCLGdCQUFnQjtnQkFDaEIsb0JBQW9CO2FBQ3ZCO1NBQ0osQ0FBQztRQW1nQlcsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lEQUpKLFVBQVUsRUFBVSxNQUFNLEVBQWdCLGNBQWM7WUFDaEQsYUFBYTtZQUN2QixvQkFBb0IsRUFBYyxnQkFBZ0I7WUFDakQsYUFBYTtPQWpnQjNCLG1CQUFtQixDQWluQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpuQkQsQ0FBeUMsV0FBVyxHQWluQm5EO1NBam5CWSxtQkFBbUI7QUFpb0JoQztJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZDVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsMEJBQTBCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7Z0JBQ25CLGdCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25Jbml0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbnRlbnRDaGlsZCxcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgRHhDYWxlbmRhciBmcm9tICdkZXZleHRyZW1lL3VpL2NhbGVuZGFyJztcclxuXHJcbmltcG9ydCB7IER4VmFsaWRhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDVVNUT01fVkFMVUVfQUNDRVNTT1JfUFJPVklERVIgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER4Q2FsZW5kYXJDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2FsZW5kYXIgaXMgYSB3aWRnZXQgdGhhdCBkaXNwbGF5cyBhIGNhbGVuZGFyIGFuZCBhbGxvd3MgYW4gZW5kIHVzZXIgdG8gc2VsZWN0IHRoZSByZXF1aXJlZCBkYXRlIHdpdGhpbiBhIHNwZWNpZmllZCBkYXRlIHJhbmdlLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LWNhbGVuZGFyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Q2FsZW5kYXJDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeENhbGVuZGFyO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGQoRHhWYWxpZGF0b3JDb21wb25lbnQpXHJcbiAgICB2YWxpZGF0b3I6IER4VmFsaWRhdG9yQ29tcG9uZW50O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hvcnRjdXQga2V5IHRoYXQgc2V0cyBmb2N1cyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjY2Vzc0tleScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY2Nlc3NLZXknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBpbnRlcmFjdGluZyB3aXRoIGEgdXNlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY3RpdmVTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWN0aXZlU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciBjYWxlbmRhciBjZWxscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjZWxsVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjZWxsVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBjZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2VsbFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0ZS10aW1lIHZhbHVlIHNlcmlhbGl6YXRpb24gZm9ybWF0LiBVc2UgaXQgb25seSBpZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhlIHZhbHVlIGF0IGRlc2lnbiB0aW1lLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGVTZXJpYWxpemF0aW9uRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXQnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRlU2VyaWFsaXphdGlvbkZvcm1hdCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGRhdGVzIHRvIGJlIGRpc2FibGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkRGF0ZXMoKTogRnVuY3Rpb24gfCBBcnJheTxEYXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWREYXRlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkRGF0ZXModmFsdWU6IEZ1bmN0aW9uIHwgQXJyYXk8RGF0ZT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkRGF0ZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZmlyc3QgZGF5IG9mIGEgd2Vlay5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaXJzdERheU9mV2VlaygpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpcnN0RGF5T2ZXZWVrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlyc3REYXlPZldlZWsodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmlyc3REYXlPZldlZWsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBlZGl0b3IncyB2YWx1ZSBpcyB2YWxpZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lzVmFsaWQnKTtcclxuICAgIH1cclxuICAgIHNldCBpc1ZhbGlkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpc1ZhbGlkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGUgd2lkZ2V0IGFsbG93cyB0byBzZWxlY3QuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4KCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heCh2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSB6b29tIGxldmVsIG9mIHRoZSBjYWxlbmRhci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhab29tTGV2ZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhab29tTGV2ZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhab29tTGV2ZWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4Wm9vbUxldmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoZSB3aWRnZXQgYWxsb3dzIHRvIHNlbGVjdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW4oKTogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluKHZhbHVlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHpvb20gbGV2ZWwgb2YgdGhlIGNhbGVuZGFyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblpvb21MZXZlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblpvb21MZXZlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pblpvb21MZXZlbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5ab29tTGV2ZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSB1bmRlcmx5aW5nIEhUTUwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZWRpdG9yIGlzIHJlYWQtb25seS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWFkT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlYWRPbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWFkT25seScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGRpc3BsYXlzIGEgYnV0dG9uIHRoYXQgc2VsZWN0cyB0aGUgY3VycmVudCBkYXRlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dUb2RheUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93VG9kYXlCdXR0b24nKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93VG9kYXlCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dUb2RheUJ1dHRvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsaWRhdGlvbiBlcnJvciB3aGVuIHVzaW5nIGEgY3VzdG9tIHZhbGlkYXRpb24gZW5naW5lLiBTaG91bGQgYmUgY2hhbmdlZCBhdCBydW50aW1lIGFsb25nIHdpdGggdGhlIGlzVmFsaWQgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25FcnJvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25FcnJvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25FcnJvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uRXJyb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgbWVzc2FnZSBhYm91dCB0aGUgdmFsaWRhdGlvbiBydWxlcyB0aGF0IGFyZSBub3Qgc2F0aXNmaWVkIGJ5IHRoaXMgZWRpdG9yJ3MgdmFsdWUgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IG9yIGEgdmFsdWUgc3BlY2lmeWluZyB0aGUgZGF0ZSBhbmQgdGltZSBjdXJyZW50bHkgc2VsZWN0ZWQgaW4gdGhlIGNhbGVuZGFyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGN1cnJlbnQgY2FsZW5kYXIgem9vbSBsZXZlbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB6b29tTGV2ZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd6b29tTGV2ZWwnKTtcclxuICAgIH1cclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignem9vbUxldmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCdzIHZhbHVlIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjZWxsVGVtcGxhdGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjZWxsVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRlU2VyaWFsaXphdGlvbkZvcm1hdENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZERhdGVzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWREYXRlc0NoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgQXJyYXk8RGF0ZT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaXJzdERheU9mV2Vla0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpcnN0RGF5T2ZXZWVrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGlzVmFsaWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpc1ZhbGlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1heFpvb21MZXZlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1heFpvb21MZXZlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtaW5DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1pblpvb21MZXZlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1pblpvb21MZXZlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBuYW1lQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbmFtZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWFkT25seUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWRPbmx5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBydGxFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd1RvZGF5QnV0dG9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd1RvZGF5QnV0dG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0YWJJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbGlkYXRpb25FcnJvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbGlkYXRpb25FcnJvckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGUgfCBudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB6b29tTGV2ZWxDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB6b29tTGV2ZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd2YWx1ZUNoYW5nZScsIFsnJGV2ZW50J10pIGNoYW5nZShfKSB7IH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ29uQmx1cicsIFsnJGV2ZW50J10pIHRvdWNoZWQgPSAoXykgPT4ge307XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3ZhbHVlQ2hhbmdlZCcsIGVtaXQ6ICdvblZhbHVlQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NlbGxUZW1wbGF0ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0ZVNlcmlhbGl6YXRpb25Gb3JtYXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc2FibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZERhdGVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdlbGVtZW50QXR0ckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlyc3REYXlPZldlZWtDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpc1ZhbGlkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heFpvb21MZXZlbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWluQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtaW5ab29tTGV2ZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25hbWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlYWRPbmx5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93VG9kYXlCdXR0b25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWxpZGF0aW9uRXJyb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd6b29tTGV2ZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ29uQmx1cicgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pZGguc2V0SG9zdCh0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeENhbGVuZGFyKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5jaGFuZ2UgPSBmbjsgfVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy50b3VjaGVkID0gZm47IH1cclxuXHJcbiAgICBfY3JlYXRlV2lkZ2V0KGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLl9jcmVhdGVXaWRnZXQoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbignZm9jdXNPdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmZpcmVOZ0V2ZW50KCdvbkJsdXInLCBbZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2Rpc2FibGVkRGF0ZXMnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkaXNhYmxlZERhdGVzJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuY3JlYXRlSW5zdGFuY2VPbkluaXQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeENhbGVuZGFyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Q2FsZW5kYXJNb2R1bGUgeyB9XHJcbiJdfQ==