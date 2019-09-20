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
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener, ContentChildren, QueryList } from '@angular/core';
import DxTextBox from 'devextreme/ui/text_box';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiButtonModule } from './nested/button-dxi';
import { DxoOptionsModule } from './nested/options';
import { DxiButtonComponent } from './nested/button-dxi';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxTextBoxComponent; }),
    multi: true
};
/**
 * The TextBox is a widget that enables a user to enter and edit a single line of text.
 */
var DxTextBoxComponent = (function (_super) {
    __extends(DxTextBoxComponent, _super);
    function DxTextBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
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
            { emit: 'buttonsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'maskChange' },
            { emit: 'maskCharChange' },
            { emit: 'maskInvalidMessageChange' },
            { emit: 'maskRulesChange' },
            { emit: 'maxLengthChange' },
            { emit: 'modeChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showMaskModeChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useMaskedValueChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTextBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "buttons", {
        get: /**
             * Allows you to add custom buttons to the input text field.
             */
        function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "mask", {
        get: /**
             * The editor mask that specifies the custom format of the entered string.
             */
        function () {
            return this._getOption('mask');
        },
        set: function (value) {
            this._setOption('mask', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskChar", {
        get: /**
             * Specifies a mask placeholder character.
             */
        function () {
            return this._getOption('maskChar');
        },
        set: function (value) {
            this._setOption('maskChar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskInvalidMessage", {
        get: /**
             * A message displayed when the entered text does not match the specified pattern.
             */
        function () {
            return this._getOption('maskInvalidMessage');
        },
        set: function (value) {
            this._setOption('maskInvalidMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskRules", {
        get: /**
             * Specifies custom mask rules.
             */
        function () {
            return this._getOption('maskRules');
        },
        set: function (value) {
            this._setOption('maskRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maxLength", {
        get: /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
        function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "mode", {
        get: /**
             * The "mode" attribute value of the actual HTML input element representing the text box.
             */
        function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "placeholder", {
        get: /**
             * The text displayed by the widget when the widget value is empty.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "readOnly", {
        get: /**
             * Specifies whether the editor is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether to display the Clear button in the widget.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "showMaskMode", {
        get: /**
             * Specifies when the widget shows the mask. Applies only if useMaskedValue is true.
             */
        function () {
            return this._getOption('showMaskMode');
        },
        set: function (value) {
            this._setOption('showMaskMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "spellcheck", {
        get: /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
        function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "useMaskedValue", {
        get: /**
             * Specifies whether the value should contain mask characters or not.
             */
        function () {
            return this._getOption('useMaskedValue');
        },
        set: function (value) {
            this._setOption('useMaskedValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "value", {
        get: /**
             * Specifies a value the widget displays.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "width", {
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
    DxTextBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxTextBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTextBoxComponent.prototype._createInstance = function (element, options) {
        return new DxTextBox(element, options);
    };
    DxTextBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxTextBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxTextBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxTextBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxTextBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxTextBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTextBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
    };
    DxTextBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTextBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTextBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTextBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxTextBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxTextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-text-box',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTextBoxComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxTextBoxComponent.propDecorators = {
        "validator": [{ type: ContentChild, args: [DxValidatorComponent,] },],
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "buttons": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "inputAttr": [{ type: Input },],
        "isValid": [{ type: Input },],
        "mask": [{ type: Input },],
        "maskChar": [{ type: Input },],
        "maskInvalidMessage": [{ type: Input },],
        "maskRules": [{ type: Input },],
        "maxLength": [{ type: Input },],
        "mode": [{ type: Input },],
        "name": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "showClearButton": [{ type: Input },],
        "showMaskMode": [{ type: Input },],
        "spellcheck": [{ type: Input },],
        "stylingMode": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "text": [{ type: Input },],
        "useMaskedValue": [{ type: Input },],
        "validationError": [{ type: Input },],
        "validationMessageMode": [{ type: Input },],
        "value": [{ type: Input },],
        "valueChangeEvent": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onChange": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onCopy": [{ type: Output },],
        "onCut": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onEnterKey": [{ type: Output },],
        "onFocusIn": [{ type: Output },],
        "onFocusOut": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onInput": [{ type: Output },],
        "onKeyDown": [{ type: Output },],
        "onKeyPress": [{ type: Output },],
        "onKeyUp": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPaste": [{ type: Output },],
        "onValueChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "buttonsChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "inputAttrChange": [{ type: Output },],
        "isValidChange": [{ type: Output },],
        "maskChange": [{ type: Output },],
        "maskCharChange": [{ type: Output },],
        "maskInvalidMessageChange": [{ type: Output },],
        "maskRulesChange": [{ type: Output },],
        "maxLengthChange": [{ type: Output },],
        "modeChange": [{ type: Output },],
        "nameChange": [{ type: Output },],
        "placeholderChange": [{ type: Output },],
        "readOnlyChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "showClearButtonChange": [{ type: Output },],
        "showMaskModeChange": [{ type: Output },],
        "spellcheckChange": [{ type: Output },],
        "stylingModeChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textChange": [{ type: Output },],
        "useMaskedValueChange": [{ type: Output },],
        "validationErrorChange": [{ type: Output },],
        "validationMessageModeChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "valueChangeEventChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "onBlur": [{ type: Output },],
        "change": [{ type: HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: HostListener, args: ['onBlur', ['$event'],] },],
        "buttonsChildren": [{ type: ContentChildren, args: [DxiButtonComponent,] },],
    };
    return DxTextBoxComponent;
}(DxComponent));
export { DxTextBoxComponent };
var DxTextBoxModule = (function () {
    function DxTextBoxModule() {
    }
    DxTextBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxiButtonModule,
                        DxoOptionsModule,
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxTextBoxComponent
                    ],
                    exports: [
                        DxTextBoxComponent,
                        DxiButtonModule,
                        DxoOptionsModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxTextBoxModule;
}());
export { DxTextBoxModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1ib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91aS90ZXh0LWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBR1osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBSVosZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLFNBQVMsTUFBTSx3QkFBd0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkQsT0FBTyxFQUVILGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFB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UUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO29DQUdqQyxlQUFlLFNBQUMsa0JBQWtCOzs2QkFud0J2QztFQW9Hd0MsV0FBVztTQUF0QyxrQkFBa0I7Ozs7O2dCQSt5QjlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQiwwQkFBMEI7cUJBQzNCO29CQUNELFlBQVksRUFBRTt3QkFDWixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzswQkFwNkJEOztTQXE2QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhUZXh0Qm94IGZyb20gJ2RldmV4dHJlbWUvdWkvdGV4dF9ib3gnO1xyXG5cclxuaW1wb3J0IHsgRHhWYWxpZGF0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeGlCdXR0b25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9idXR0b24tZHhpJztcclxuaW1wb3J0IHsgRHhvT3B0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL29wdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgRHhpQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvYnV0dG9uLWR4aSc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDVVNUT01fVkFMVUVfQUNDRVNTT1JfUFJPVklERVIgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER4VGV4dEJveENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBUZXh0Qm94IGlzIGEgd2lkZ2V0IHRoYXQgZW5hYmxlcyBhIHVzZXIgdG8gZW50ZXIgYW5kIGVkaXQgYSBzaW5nbGUgbGluZSBvZiB0ZXh0LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LXRleHQtYm94JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SX1BST1ZJREVSLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4VGV4dEJveENvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4VGV4dEJveDtcclxuXHJcbiAgICBAQ29udGVudENoaWxkKER4VmFsaWRhdG9yQ29tcG9uZW50KVxyXG4gICAgdmFsaWRhdG9yOiBEeFZhbGlkYXRvckNvbXBvbmVudDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBidXR0b25zIHRvIHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJ1dHRvbnMoKTogQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keFRleHRFZGl0b3JCdXR0b24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9ucyh2YWx1ZTogQXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keFRleHRFZGl0b3JCdXR0b24+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdidXR0b25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBwYXNzZWQgb24gdG8gdGhlIHVuZGVybHlpbmcgSFRNTCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlucHV0QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lucHV0QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlucHV0QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbnB1dEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVkaXRvcidzIHZhbHVlIGlzIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXNWYWxpZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzVmFsaWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lzVmFsaWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGVkaXRvciBtYXNrIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXN0b20gZm9ybWF0IG9mIHRoZSBlbnRlcmVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXNrKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWFzaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hc2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFzaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBtYXNrIHBsYWNlaG9sZGVyIGNoYXJhY3Rlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXNrQ2hhcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hc2tDaGFyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFza0NoYXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWFza0NoYXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBtZXNzYWdlIGRpc3BsYXllZCB3aGVuIHRoZSBlbnRlcmVkIHRleHQgZG9lcyBub3QgbWF0Y2ggdGhlIHNwZWNpZmllZCBwYXR0ZXJuLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hc2tJbnZhbGlkTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hc2tJbnZhbGlkTWVzc2FnZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hc2tJbnZhbGlkTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXNrSW52YWxpZE1lc3NhZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGN1c3RvbSBtYXNrIHJ1bGVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1hc2tSdWxlcygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21hc2tSdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hc2tSdWxlcyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXNrUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHlvdSBjYW4gZW50ZXIgaW50byB0aGUgdGV4dGJveC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhMZW5ndGgoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhMZW5ndGgnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhMZW5ndGgodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4TGVuZ3RoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBcIm1vZGVcIiBhdHRyaWJ1dGUgdmFsdWUgb2YgdGhlIGFjdHVhbCBIVE1MIGlucHV0IGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSB0ZXh0IGJveC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgdG8gYmUgYXNzaWduZWQgdG8gdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb2YgdGhlIHVuZGVybHlpbmcgSFRNTCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduYW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBieSB0aGUgd2lkZ2V0IHdoZW4gdGhlIHdpZGdldCB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGxhY2Vob2xkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVkaXRvciBpcyByZWFkLW9ubHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncmVhZE9ubHknKTtcclxuICAgIH1cclxuICAgIHNldCByZWFkT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVhZE9ubHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBDbGVhciBidXR0b24gaW4gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q2xlYXJCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NsZWFyQnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NsZWFyQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q2xlYXJCdXR0b24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZW4gdGhlIHdpZGdldCBzaG93cyB0aGUgbWFzay4gQXBwbGllcyBvbmx5IGlmIHVzZU1hc2tlZFZhbHVlIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd01hc2tNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd01hc2tNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd01hc2tNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dNYXNrTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGVja3MgdGhlIGlubmVyIHRleHQgZm9yIHNwZWxsaW5nIG1pc3Rha2VzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNwZWxsY2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3BlbGxjaGVjaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNwZWxsY2hlY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NwZWxsY2hlY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0J3MgdGV4dCBmaWVsZCBpcyBzdHlsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3R5bGluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdHlsaW5nTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxpbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0eWxpbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlYWQtb25seSBvcHRpb24gdGhhdCBob2xkcyB0aGUgdGV4dCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCBpbnB1dCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB2YWx1ZSBzaG91bGQgY29udGFpbiBtYXNrIGNoYXJhY3RlcnMgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZU1hc2tlZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZU1hc2tlZFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlTWFza2VkVmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZU1hc2tlZFZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsaWRhdGlvbiBlcnJvciB3aGVuIHVzaW5nIGEgY3VzdG9tIHZhbGlkYXRpb24gZW5naW5lLiBTaG91bGQgYmUgY2hhbmdlZCBhdCBydW50aW1lIGFsb25nIHdpdGggdGhlIGlzVmFsaWQgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25FcnJvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25FcnJvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25FcnJvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uRXJyb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgbWVzc2FnZSBhYm91dCB0aGUgdmFsaWRhdGlvbiBydWxlcyB0aGF0IGFyZSBub3Qgc2F0aXNmaWVkIGJ5IHRoaXMgZWRpdG9yJ3MgdmFsdWUgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgdmFsdWUgdGhlIHdpZGdldCBkaXNwbGF5cy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBET00gZXZlbnRzIGFmdGVyIHdoaWNoIHRoZSB3aWRnZXQncyB2YWx1ZSBzaG91bGQgYmUgdXBkYXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUNoYW5nZUV2ZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVDaGFuZ2VFdmVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQ2hhbmdlRXZlbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVDaGFuZ2VFdmVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0IGxvc2VzIGZvY3VzIGFmdGVyIHRoZSB0ZXh0IGZpZWxkJ3MgY29udGVudCB3YXMgY2hhbmdlZCB1c2luZyB0aGUga2V5Ym9hcmQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgaW5wdXQgaGFzIGJlZW4gY29waWVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db3B5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBpbnB1dCBoYXMgYmVlbiBjdXQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkN1dDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgRW50ZXIga2V5IGhhcyBiZWVuIHByZXNzZWQgd2hpbGUgdGhlIHdpZGdldCBpcyBmb2N1c2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FbnRlcktleTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0IGdldHMgZm9jdXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzSW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBsb3NlcyBmb2N1cy5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRm9jdXNPdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBlYWNoIHRpbWUgdGhlIHdpZGdldCdzIGlucHV0IGlzIGNoYW5nZWQgd2hpbGUgdGhlIHdpZGdldCBpcyBmb2N1c2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25JbnB1dDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHVzZXIgaXMgcHJlc3NpbmcgYSBrZXkgb24gdGhlIGtleWJvYXJkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIHJlbGVhc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQncyBpbnB1dCBoYXMgYmVlbiBwYXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblBhc3RlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciB0aGUgd2lkZ2V0J3MgdmFsdWUgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFjY2Vzc0tleUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjY2Vzc0tleUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGJ1dHRvbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBidXR0b25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nIHwgRGV2RXhwcmVzcy51aS5keFRleHRFZGl0b3JCdXR0b24+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRpc2FibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGludENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhpbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaW5wdXRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaW5wdXRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGlzVmFsaWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpc1ZhbGlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXNrQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWFza0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXNrQ2hhckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1hc2tDaGFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1hc2tJbnZhbGlkTWVzc2FnZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1hc2tJbnZhbGlkTWVzc2FnZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtYXNrUnVsZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtYXNrUnVsZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWF4TGVuZ3RoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4TGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG5hbWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBuYW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBsYWNlaG9sZGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcGxhY2Vob2xkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVhZE9ubHlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZWFkT25seUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dDbGVhckJ1dHRvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDbGVhckJ1dHRvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd01hc2tNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd01hc2tNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNwZWxsY2hlY2tDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzcGVsbGNoZWNrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdHlsaW5nTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0eWxpbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdXNlTWFza2VkVmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VNYXNrZWRWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsaWRhdGlvbkVycm9yQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsaWRhdGlvbkVycm9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbGlkYXRpb25NZXNzYWdlTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbGlkYXRpb25NZXNzYWdlTW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQ2hhbmdlRXZlbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZUV2ZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd2YWx1ZUNoYW5nZScsIFsnJGV2ZW50J10pIGNoYW5nZShfKSB7IH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ29uQmx1cicsIFsnJGV2ZW50J10pIHRvdWNoZWQgPSAoXykgPT4ge307XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpQnV0dG9uQ29tcG9uZW50KVxyXG4gICAgZ2V0IGJ1dHRvbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQnV0dG9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2J1dHRvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2hhbmdlJywgZW1pdDogJ29uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NvbnRlbnRSZWFkeScsIGVtaXQ6ICdvbkNvbnRlbnRSZWFkeScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb3B5JywgZW1pdDogJ29uQ29weScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjdXQnLCBlbWl0OiAnb25DdXQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZGlzcG9zaW5nJywgZW1pdDogJ29uRGlzcG9zaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2VudGVyS2V5JywgZW1pdDogJ29uRW50ZXJLZXknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNJbicsIGVtaXQ6ICdvbkZvY3VzSW4nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZm9jdXNPdXQnLCBlbWl0OiAnb25Gb2N1c091dCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2lucHV0JywgZW1pdDogJ29uSW5wdXQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5RG93bicsIGVtaXQ6ICdvbktleURvd24nIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5UHJlc3MnLCBlbWl0OiAnb25LZXlQcmVzcycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdrZXlVcCcsIGVtaXQ6ICdvbktleVVwJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Bhc3RlJywgZW1pdDogJ29uUGFzdGUnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAndmFsdWVDaGFuZ2VkJywgZW1pdDogJ29uVmFsdWVDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY2Nlc3NLZXlDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYnV0dG9uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdob3ZlclN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaW5wdXRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpc1ZhbGlkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXNrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXNrQ2hhckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWFza0ludmFsaWRNZXNzYWdlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtYXNrUnVsZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heExlbmd0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmFtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGxhY2Vob2xkZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3JlYWRPbmx5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdydGxFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Q2xlYXJCdXR0b25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dNYXNrTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3BlbGxjaGVja0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3R5bGluZ01vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0ZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd1c2VNYXNrZWRWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsaWRhdGlvbkVycm9yQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWxpZGF0aW9uTWVzc2FnZU1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZUV2ZW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb25CbHVyJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4VGV4dEJveChlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmxvY2tlZFZhbHVlQ2hhbmdlRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmxvY2tlZFZhbHVlQ2hhbmdlRXZlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuY2hhbmdlID0gZm47IH1cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMudG91Y2hlZCA9IGZuOyB9XHJcblxyXG4gICAgX2NyZWF0ZVdpZGdldChlbGVtZW50OiBhbnkpIHtcclxuICAgICAgICBzdXBlci5fY3JlYXRlV2lkZ2V0KGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzT3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhlbHBlci5maXJlTmdFdmVudCgnb25CbHVyJywgW2VdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdidXR0b25zJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnYnV0dG9ucycpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoZXJIZWxwZXIuY2hlY2tXYXRjaGVycygpO1xyXG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xyXG4gICAgICAgIHN1cGVyLmNsZWFyQ2hhbmdlZE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBpc1NldHVwID0gdGhpcy5faWRoLnNldHVwU2luZ2xlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGhpcy5faWRoLmdldENoYW5nZXMobmFtZSwgdmFsdWUpICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNTZXR1cCB8fCBpc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuX3NldE9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlT25Jbml0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5jcmVhdGVJbnN0YW5jZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4aUJ1dHRvbk1vZHVsZSxcclxuICAgIER4b09wdGlvbnNNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4VGV4dEJveENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhUZXh0Qm94Q29tcG9uZW50LFxyXG4gICAgRHhpQnV0dG9uTW9kdWxlLFxyXG4gICAgRHhvT3B0aW9uc01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRleHRCb3hNb2R1bGUgeyB9XHJcbiJdfQ==