import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxCalendar from 'devextreme/ui/calendar';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxCalendarComponent; }),
    multi: true
};
/**
 * The Calendar is a widget that displays a calendar and allows an end user to select the required date within a specified date range.
 */
var DxCalendarComponent = /** @class */ (function (_super) {
    __extends(DxCalendarComponent, _super);
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
    DxCalendarComponent.ctorParameters = function () { return [
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
        ContentChild(DxValidatorComponent)
    ], DxCalendarComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "cellTemplate", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "dateSerializationFormat", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "disabledDates", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "firstDayOfWeek", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "maxZoomLevel", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "minZoomLevel", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "showTodayButton", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "width", null);
    __decorate([
        Input()
    ], DxCalendarComponent.prototype, "zoomLevel", null);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "cellTemplateChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "dateSerializationFormatChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "disabledDatesChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "firstDayOfWeekChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "maxChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "maxZoomLevelChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "minChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "minZoomLevelChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "showTodayButtonChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "zoomLevelChange", void 0);
    __decorate([
        Output()
    ], DxCalendarComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxCalendarComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxCalendarComponent.prototype, "touched", void 0);
    DxCalendarComponent = __decorate([
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
        __param(7, Inject(PLATFORM_ID))
    ], DxCalendarComponent);
    return DxCalendarComponent;
}(DxComponent));
var DxCalendarModule = /** @class */ (function () {
    function DxCalendarModule() {
    }
    DxCalendarModule = __decorate([
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxCalendarComponent, DxCalendarModule };
//# sourceMappingURL=devextreme-angular-ui-calendar.js.map
