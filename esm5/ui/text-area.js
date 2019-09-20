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
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener } from '@angular/core';
import DxTextArea from 'devextreme/ui/text_area';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxTextAreaComponent; }),
    multi: true
};
/**
 * The TextArea is a widget that enables a user to enter and edit a multi-line text.
 */
var DxTextAreaComponent = (function (_super) {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "autoResizeEnabled", {
        get: /**
             * A Boolean value specifying whether or not the auto resizing mode is enabled.
             */
        function () {
            return this._getOption('autoResizeEnabled');
        },
        set: function (value) {
            this._setOption('autoResizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "height", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "hint", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "isValid", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "maxHeight", {
        get: /**
             * Specifies the maximum height of the widget.
             */
        function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "maxLength", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "minHeight", {
        get: /**
             * Specifies the minimum height of the widget.
             */
        function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "name", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "placeholder", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "spellcheck", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "text", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "validationError", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "value", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "valueChangeEvent", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "visible", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "width", {
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
    DxTextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-text-area',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTextAreaComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxTextAreaComponent.propDecorators = {
        "validator": [{ type: ContentChild, args: [DxValidatorComponent,] },],
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "autoResizeEnabled": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "inputAttr": [{ type: Input },],
        "isValid": [{ type: Input },],
        "maxHeight": [{ type: Input },],
        "maxLength": [{ type: Input },],
        "minHeight": [{ type: Input },],
        "name": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "spellcheck": [{ type: Input },],
        "stylingMode": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "text": [{ type: Input },],
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
        "autoResizeEnabledChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "inputAttrChange": [{ type: Output },],
        "isValidChange": [{ type: Output },],
        "maxHeightChange": [{ type: Output },],
        "maxLengthChange": [{ type: Output },],
        "minHeightChange": [{ type: Output },],
        "nameChange": [{ type: Output },],
        "placeholderChange": [{ type: Output },],
        "readOnlyChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "spellcheckChange": [{ type: Output },],
        "stylingModeChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textChange": [{ type: Output },],
        "validationErrorChange": [{ type: Output },],
        "validationMessageModeChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "valueChangeEventChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "onBlur": [{ type: Output },],
        "change": [{ type: HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxTextAreaComponent;
}(DxComponent));
export { DxTextAreaComponent };
var DxTextAreaModule = (function () {
    function DxTextAreaModule() {
    }
    DxTextAreaModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxTextAreaModule;
}());
export { DxTextAreaModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdWkvdGV4dC1hcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFHWixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLFVBQVUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkQsT0FBTyxFQUVILGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUXZELElBQU0sOEJBQThCLEdBQUc7SUFDbkMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7Ozs7O0lB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S04sTUFBTTtvQ0FLTixNQUFNOytCQUtOLE1BQU07c0NBS04sTUFBTTttQ0FLTixNQUFNO3FDQUtOLE1BQU07cUNBS04sTUFBTTtzQ0FLTixNQUFNO21DQUtOLE1BQU07K0JBS04sTUFBTTswQ0FLTixNQUFNO2dEQUtOLE1BQU07Z0NBS04sTUFBTTsyQ0FLTixNQUFNO2tDQUtOLE1BQU07Z0NBS04sTUFBTTsyQkFFTixNQUFNOzJCQUdOLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ3RDLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzhCQWhwQnRDO0VBMEZ5QyxXQUFXO1NBQXZDLG1CQUFtQjs7Ozs7Z0JBOHBCL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsMEJBQTBCO3FCQUMzQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzsyQkFyd0JEOztTQXN3QmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uSW5pdCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb250ZW50Q2hpbGQsXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBEeFRleHRBcmVhIGZyb20gJ2RldmV4dHJlbWUvdWkvdGV4dF9hcmVhJztcclxuXHJcbmltcG9ydCB7IER4VmFsaWRhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IENVU1RPTV9WQUxVRV9BQ0NFU1NPUl9QUk9WSURFUiA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHhUZXh0QXJlYUNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBUZXh0QXJlYSBpcyBhIHdpZGdldCB0aGF0IGVuYWJsZXMgYSB1c2VyIHRvIGVudGVyIGFuZCBlZGl0IGEgbXVsdGktbGluZSB0ZXh0LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4LXRleHQtYXJlYScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIENVU1RPTV9WQUxVRV9BQ0NFU1NPUl9QUk9WSURFUixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFRleHRBcmVhQ29tcG9uZW50IGV4dGVuZHMgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgaW5zdGFuY2U6IER4VGV4dEFyZWE7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZChEeFZhbGlkYXRvckNvbXBvbmVudClcclxuICAgIHZhbGlkYXRvcjogRHhWYWxpZGF0b3JDb21wb25lbnQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIEJvb2xlYW4gdmFsdWUgc3BlY2lmeWluZyB3aGV0aGVyIG9yIG5vdCB0aGUgYXV0byByZXNpemluZyBtb2RlIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXV0b1Jlc2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXV0b1Jlc2l6ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhdXRvUmVzaXplRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXV0b1Jlc2l6ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyBoZWlnaHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGEgdXNlciBwYXVzZXMgb24gaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG92ZXJTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBob3ZlclN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIHBhc3NlZCBvbiB0byB0aGUgdW5kZXJseWluZyBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW5wdXRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW5wdXRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5wdXRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lucHV0QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZWRpdG9yJ3MgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpc1ZhbGlkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNWYWxpZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXNWYWxpZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4SGVpZ2h0KCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWF4SGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4SGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heEhlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgeW91IGNhbiBlbnRlciBpbnRvIHRoZSB0ZXh0Ym94LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heExlbmd0aCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heExlbmd0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heExlbmd0aCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhMZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkhlaWdodCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbkhlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbkhlaWdodCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5IZWlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSB1bmRlcmx5aW5nIEhUTUwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCB3aGVuIHRoZSB3aWRnZXQgdmFsdWUgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BsYWNlaG9sZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBlZGl0b3IgaXMgcmVhZC1vbmx5LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlYWRPbmx5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVhZE9ubHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JlYWRPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgY2hlY2tzIHRoZSBpbm5lciB0ZXh0IGZvciBzcGVsbGluZyBtaXN0YWtlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzcGVsbGNoZWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NwZWxsY2hlY2snKTtcclxuICAgIH1cclxuICAgIHNldCBzcGVsbGNoZWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzcGVsbGNoZWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBob3cgdGhlIHdpZGdldCdzIHRleHQgZmllbGQgaXMgc3R5bGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0eWxpbmdNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3R5bGluZ01vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdHlsaW5nTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdHlsaW5nTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZWFkLW9ubHkgb3B0aW9uIHRoYXQgaG9sZHMgdGhlIHRleHQgZGlzcGxheWVkIGJ5IHRoZSB3aWRnZXQgaW5wdXQgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaW5mb3JtYXRpb24gb24gdGhlIHZhbGlkYXRpb24gZXJyb3Igd2hlbiB1c2luZyBhIGN1c3RvbSB2YWxpZGF0aW9uIGVuZ2luZS4gU2hvdWxkIGJlIGNoYW5nZWQgYXQgcnVudGltZSBhbG9uZyB3aXRoIHRoZSBpc1ZhbGlkIG9wdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWxpZGF0aW9uRXJyb3IoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uRXJyb3InKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uRXJyb3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsaWRhdGlvbkVycm9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBob3cgdGhlIG1lc3NhZ2UgYWJvdXQgdGhlIHZhbGlkYXRpb24gcnVsZXMgdGhhdCBhcmUgbm90IHNhdGlzZmllZCBieSB0aGlzIGVkaXRvcidzIHZhbHVlIGlzIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWxpZGF0aW9uTWVzc2FnZU1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uTWVzc2FnZU1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsaWRhdGlvbk1lc3NhZ2VNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIHZhbHVlIHRoZSB3aWRnZXQgZGlzcGxheXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgRE9NIGV2ZW50cyBhZnRlciB3aGljaCB0aGUgd2lkZ2V0J3MgdmFsdWUgc2hvdWxkIGJlIHVwZGF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVDaGFuZ2VFdmVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlQ2hhbmdlRXZlbnQnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUNoYW5nZUV2ZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlQ2hhbmdlRXZlbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBpcyB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyB3aWR0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBsb3NlcyBmb2N1cyBhZnRlciB0aGUgdGV4dCBmaWVsZCdzIGNvbnRlbnQgd2FzIGNoYW5nZWQgdXNpbmcgdGhlIGtleWJvYXJkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGlucHV0IGhhcyBiZWVuIGNvcGllZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ29weTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgaW5wdXQgaGFzIGJlZW4gY3V0LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIEVudGVyIGtleSBoYXMgYmVlbiBwcmVzc2VkIHdoaWxlIHRoZSB3aWRnZXQgaXMgZm9jdXNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRW50ZXJLZXk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCBnZXRzIGZvY3VzLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Gb2N1c0luOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB3aWRnZXQgbG9zZXMgZm9jdXMuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkZvY3VzT3V0OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgZWFjaCB0aW1lIHRoZSB3aWRnZXQncyBpbnB1dCBpcyBjaGFuZ2VkIHdoaWxlIHRoZSB3aWRnZXQgaXMgZm9jdXNlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSB1c2VyIGlzIHByZXNzaW5nIGEga2V5IG9uIHRoZSBrZXlib2FyZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbktleVByZXNzOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgdXNlciByZWxlYXNlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbktleVVwOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgaW5wdXQgaGFzIGJlZW4gcGFzdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25QYXN0ZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCdzIHZhbHVlIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhdXRvUmVzaXplRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGF1dG9SZXNpemVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGlucHV0QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGlucHV0QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpc1ZhbGlkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXNWYWxpZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWF4SGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbWF4SGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG1heExlbmd0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1heExlbmd0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtaW5IZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5IZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbmFtZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5hbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGxhY2Vob2xkZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwbGFjZWhvbGRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWFkT25seUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWRPbmx5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBydGxFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcnRsRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc3BlbGxjaGVja0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNwZWxsY2hlY2tDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHN0eWxpbmdNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc3R5bGluZ01vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGFiSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0YWJJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0ZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWxpZGF0aW9uRXJyb3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWxpZGF0aW9uRXJyb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsaWRhdGlvbk1lc3NhZ2VNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsaWRhdGlvbk1lc3NhZ2VNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2VFdmVudENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlRXZlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3ZhbHVlQ2hhbmdlJywgWyckZXZlbnQnXSkgY2hhbmdlKF8pIHsgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignb25CbHVyJywgWyckZXZlbnQnXSkgdG91Y2hlZCA9IChfKSA9PiB7fTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NoYW5nZScsIGVtaXQ6ICdvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29weScsIGVtaXQ6ICdvbkNvcHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY3V0JywgZW1pdDogJ29uQ3V0JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlbnRlcktleScsIGVtaXQ6ICdvbkVudGVyS2V5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzSW4nLCBlbWl0OiAnb25Gb2N1c0luJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZvY3VzT3V0JywgZW1pdDogJ29uRm9jdXNPdXQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbnB1dCcsIGVtaXQ6ICdvbklucHV0JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2tleURvd24nLCBlbWl0OiAnb25LZXlEb3duJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2tleVByZXNzJywgZW1pdDogJ29uS2V5UHJlc3MnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAna2V5VXAnLCBlbWl0OiAnb25LZXlVcCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwYXN0ZScsIGVtaXQ6ICdvblBhc3RlJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3ZhbHVlQ2hhbmdlZCcsIGVtaXQ6ICdvblZhbHVlQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2F1dG9SZXNpemVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpbnB1dEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2lzVmFsaWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21heEhlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWF4TGVuZ3RoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtaW5IZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25hbWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BsYWNlaG9sZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWFkT25seUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3BlbGxjaGVja0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc3R5bGluZ01vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RhYkluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0ZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWxpZGF0aW9uRXJyb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlRXZlbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdvbkJsdXInIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEeFRleHRBcmVhKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5jaGFuZ2UgPSBmbjsgfVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy50b3VjaGVkID0gZm47IH1cclxuXHJcbiAgICBfY3JlYXRlV2lkZ2V0KGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLl9jcmVhdGVXaWRnZXQoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbignZm9jdXNPdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmZpcmVOZ0V2ZW50KCdvbkJsdXInLCBbZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuY3JlYXRlSW5zdGFuY2VPbkluaXQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFRleHRBcmVhQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeFRleHRBcmVhQ29tcG9uZW50LFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4VGV4dEFyZWFNb2R1bGUgeyB9XHJcbiJdfQ==