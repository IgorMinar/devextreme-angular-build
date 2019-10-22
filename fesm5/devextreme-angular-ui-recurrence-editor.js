import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxRecurrenceEditor from 'devextreme/ui/recurrence_editor';
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
    useExisting: forwardRef(function () { return DxRecurrenceEditorComponent; }),
    multi: true
};
/**
 * A base class for editors.
 */
var DxRecurrenceEditorComponent = /** @class */ (function (_super) {
    __extends(DxRecurrenceEditorComponent, _super);
    function DxRecurrenceEditorComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "disabled", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "height", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "hint", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "isValid", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "validationError", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "value", {
        /**
         * Specifies the widget's value.
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "visible", {
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
    Object.defineProperty(DxRecurrenceEditorComponent.prototype, "width", {
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
    DxRecurrenceEditorComponent.prototype.change = function (_) { };
    DxRecurrenceEditorComponent.prototype._createInstance = function (element, options) {
        return new DxRecurrenceEditor(element, options);
    };
    DxRecurrenceEditorComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxRecurrenceEditorComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxRecurrenceEditorComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxRecurrenceEditorComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxRecurrenceEditorComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxRecurrenceEditorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRecurrenceEditorComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxRecurrenceEditorComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxRecurrenceEditorComponent.ctorParameters = function () { return [
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
    ], DxRecurrenceEditorComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxRecurrenceEditorComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxRecurrenceEditorComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxRecurrenceEditorComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxRecurrenceEditorComponent.prototype, "touched", void 0);
    DxRecurrenceEditorComponent = __decorate([
        Component({
            selector: 'dx-recurrence-editor',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxRecurrenceEditorComponent);
    return DxRecurrenceEditorComponent;
}(DxComponent));
var DxRecurrenceEditorModule = /** @class */ (function () {
    function DxRecurrenceEditorModule() {
    }
    DxRecurrenceEditorModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxRecurrenceEditorComponent
            ],
            exports: [
                DxRecurrenceEditorComponent,
                DxTemplateModule
            ]
        })
    ], DxRecurrenceEditorModule);
    return DxRecurrenceEditorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxRecurrenceEditorComponent, DxRecurrenceEditorModule };
//# sourceMappingURL=devextreme-angular-ui-recurrence-editor.js.map
