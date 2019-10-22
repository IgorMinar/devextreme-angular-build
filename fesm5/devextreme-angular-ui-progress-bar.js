import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxProgressBar from 'devextreme/ui/progress_bar';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
    useExisting: forwardRef(function () { return DxProgressBarComponent; }),
    multi: true
};
/**
 * The ProgressBar is a widget that shows current progress.
 */
var DxProgressBarComponent = /** @class */ (function (_super) {
    __extends(DxProgressBarComponent, _super);
    function DxProgressBarComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'complete', emit: 'onComplete' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showStatusChange' },
            { emit: 'statusFormatChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxProgressBarComponent.prototype, "disabled", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "height", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "hint", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "isValid", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "max", {
        /**
         * The maximum value the widget can accept.
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
    Object.defineProperty(DxProgressBarComponent.prototype, "min", {
        /**
         * The minimum value the widget can accept.
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
    Object.defineProperty(DxProgressBarComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "showStatus", {
        /**
         * Specifies whether or not the widget displays a progress status.
         */
        get: function () {
            return this._getOption('showStatus');
        },
        set: function (value) {
            this._setOption('showStatus', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "statusFormat", {
        /**
         * Specifies a format for the progress status.
         */
        get: function () {
            return this._getOption('statusFormat');
        },
        set: function (value) {
            this._setOption('statusFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "validationError", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "value", {
        /**
         * The current widget value.
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
    Object.defineProperty(DxProgressBarComponent.prototype, "visible", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "width", {
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
    DxProgressBarComponent.prototype.change = function (_) { };
    DxProgressBarComponent.prototype._createInstance = function (element, options) {
        return new DxProgressBar(element, options);
    };
    DxProgressBarComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxProgressBarComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxProgressBarComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxProgressBarComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxProgressBarComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxProgressBarComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxProgressBarComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxProgressBarComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        ContentChild(DxValidatorComponent)
    ], DxProgressBarComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "showStatus", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "statusFormat", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxProgressBarComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onComplete", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "maxChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "minChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "showStatusChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "statusFormatChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxProgressBarComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxProgressBarComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxProgressBarComponent.prototype, "touched", void 0);
    DxProgressBarComponent = __decorate([
        Component({
            selector: 'dx-progress-bar',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxProgressBarComponent);
    return DxProgressBarComponent;
}(DxComponent));
var DxProgressBarModule = /** @class */ (function () {
    function DxProgressBarModule() {
    }
    DxProgressBarModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxProgressBarComponent
            ],
            exports: [
                DxProgressBarComponent,
                DxTemplateModule
            ]
        })
    ], DxProgressBarModule);
    return DxProgressBarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxProgressBarComponent, DxProgressBarModule };
//# sourceMappingURL=devextreme-angular-ui-progress-bar.js.map
