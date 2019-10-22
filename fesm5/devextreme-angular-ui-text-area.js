import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxTextArea from 'devextreme/ui/text_area';
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
    useExisting: forwardRef(function () { return DxTextAreaComponent; }),
    multi: true
};
/**
 * The TextArea is a widget that enables a user to enter and edit a multi-line text.
 */
var DxTextAreaComponent = /** @class */ (function (_super) {
    __extends(DxTextAreaComponent, _super);
    function DxTextAreaComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'autoResizeEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minHeightChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTextAreaComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "autoResizeEnabled", {
        /**
         * A Boolean value specifying whether or not the auto resizing mode is enabled.
         */
        get: function () {
            return this._getOption('autoResizeEnabled');
        },
        set: function (value) {
            this._setOption('autoResizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "height", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "hint", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "inputAttr", {
        /**
         * Specifies the attributes to be passed on to the underlying HTML element.
         */
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "isValid", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "maxHeight", {
        /**
         * Specifies the maximum height of the widget.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "maxLength", {
        /**
         * Specifies the maximum number of characters you can enter into the textbox.
         */
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "minHeight", {
        /**
         * Specifies the minimum height of the widget.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "name", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "placeholder", {
        /**
         * The text displayed by the widget when the widget value is empty.
         */
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "spellcheck", {
        /**
         * Specifies whether or not the widget checks the inner text for spelling mistakes.
         */
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "stylingMode", {
        /**
         * Specifies how the widget's text field is styled.
         */
        get: function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "text", {
        /**
         * The read-only option that holds the text displayed by the widget input element.
         */
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "validationError", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "value", {
        /**
         * Specifies a value the widget displays.
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
    Object.defineProperty(DxTextAreaComponent.prototype, "valueChangeEvent", {
        /**
         * Specifies the DOM events after which the widget's value should be updated.
         */
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "visible", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "width", {
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
    DxTextAreaComponent.prototype.change = function (_) { };
    DxTextAreaComponent.prototype._createInstance = function (element, options) {
        return new DxTextArea(element, options);
    };
    DxTextAreaComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxTextAreaComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxTextAreaComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxTextAreaComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxTextAreaComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxTextAreaComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTextAreaComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxTextAreaComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxTextAreaComponent.ctorParameters = function () { return [
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
    ], DxTextAreaComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "autoResizeEnabled", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "maxHeight", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "minHeight", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "spellcheck", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxTextAreaComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "autoResizeEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "minHeightChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxTextAreaComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxTextAreaComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxTextAreaComponent.prototype, "touched", void 0);
    DxTextAreaComponent = __decorate([
        Component({
            selector: 'dx-text-area',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost
            ]
        }),
        __param(6, Inject(PLATFORM_ID))
    ], DxTextAreaComponent);
    return DxTextAreaComponent;
}(DxComponent));
var DxTextAreaModule = /** @class */ (function () {
    function DxTextAreaModule() {
    }
    DxTextAreaModule = __decorate([
        NgModule({
            imports: [
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxTextAreaComponent
            ],
            exports: [
                DxTextAreaComponent,
                DxTemplateModule
            ]
        })
    ], DxTextAreaModule);
    return DxTextAreaModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxTextAreaComponent, DxTextAreaModule };
//# sourceMappingURL=devextreme-angular-ui-text-area.js.map
