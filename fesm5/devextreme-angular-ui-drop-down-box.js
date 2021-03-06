import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxDropDownBox from 'devextreme/ui/drop_down_box';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiItemComponent, DxiButtonModule, DxoOptionsModule, DxoDropDownOptionsModule, DxoAnimationModule, DxoHideModule, DxoShowModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule, DxiToolbarItemModule, DxiItemModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxDropDownBoxComponent; }),
    multi: true
};
/**
 * The DropDownBox widget consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.
 */
var DxDropDownBoxComponent = /** @class */ (function (_super) {
    __extends(DxDropDownBoxComponent, _super);
    function DxDropDownBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
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
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'buttonsChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'dropDownOptionsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'maxLengthChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDropDownBoxComponent.prototype, "acceptCustomValue", {
        /**
         * Specifies whether the widget allows a user to enter a custom value.
         */
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "buttons", {
        /**
         * Allows you to add custom buttons to the input text field.
         */
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "contentTemplate", {
        /**
         * Specifies a custom template for the drop-down content.
         */
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "displayExpr", {
        /**
         * Specifies the data field whose values should be displayed.
         */
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "dropDownButtonTemplate", {
        /**
         * Specifies a custom template for the drop-down button.
         */
        get: function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "dropDownOptions", {
        /**
         * Configures the drop-down field which holds the content.
         */
        get: function () {
            return this._getOption('dropDownOptions');
        },
        set: function (value) {
            this._setOption('dropDownOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "fieldTemplate", {
        /**
         * Specifies a custom template for the text field. Must contain the TextBox widget.
         */
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "maxLength", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "opened", {
        /**
         * Specifies whether or not the drop-down editor is displayed.
         */
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "openOnFieldClick", {
        /**
         * Specifies whether a user can open the drop-down list by clicking a text field.
         */
        get: function () {
            return this._getOption('openOnFieldClick');
        },
        set: function (value) {
            this._setOption('openOnFieldClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "placeholder", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "showClearButton", {
        /**
         * Specifies whether to display the Clear button in the widget.
         */
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "showDropDownButton", {
        /**
         * Specifies whether the drop-down button is visible.
         */
        get: function () {
            return this._getOption('showDropDownButton');
        },
        set: function (value) {
            this._setOption('showDropDownButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "value", {
        /**
         * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "valueChangeEvent", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "valueExpr", {
        /**
         * Specifies which data field provides unique values to the widget's value.
         */
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxDropDownBoxComponent.prototype, "width", {
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
    DxDropDownBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxDropDownBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDropDownBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDropDownBoxComponent.prototype._createInstance = function (element, options) {
        return new DxDropDownBox(element, options);
    };
    DxDropDownBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxDropDownBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxDropDownBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxDropDownBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxDropDownBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxDropDownBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDropDownBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxDropDownBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDropDownBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxDropDownBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDropDownBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxDropDownBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxDropDownBoxComponent.ctorParameters = function () { return [
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
    ], DxDropDownBoxComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "contentTemplate", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "dropDownButtonTemplate", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "dropDownOptions", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "fieldTemplate", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "openOnFieldClick", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "showClearButton", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "showDropDownButton", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "valueExpr", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxDropDownBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "dropDownOptionsChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "fieldTemplateChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "openOnFieldClickChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "showDropDownButtonChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "valueExprChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxDropDownBoxComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxDropDownBoxComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxDropDownBoxComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxDropDownBoxComponent.prototype, "buttonsChildren", null);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxDropDownBoxComponent.prototype, "itemsChildren", null);
    DxDropDownBoxComponent = __decorate([
        Component({
            selector: 'dx-drop-down-box',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxDropDownBoxComponent);
    return DxDropDownBoxComponent;
}(DxComponent));
var DxDropDownBoxModule = /** @class */ (function () {
    function DxDropDownBoxModule() {
    }
    DxDropDownBoxModule = __decorate([
        NgModule({
            imports: [
                DxiButtonModule,
                DxoOptionsModule,
                DxoDropDownOptionsModule,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxiToolbarItemModule,
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxDropDownBoxComponent
            ],
            exports: [
                DxDropDownBoxComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxoDropDownOptionsModule,
                DxoAnimationModule,
                DxoHideModule,
                DxoShowModule,
                DxoPositionModule,
                DxoAtModule,
                DxoBoundaryOffsetModule,
                DxoCollisionModule,
                DxoMyModule,
                DxoOffsetModule,
                DxiToolbarItemModule,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxDropDownBoxModule);
    return DxDropDownBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxDropDownBoxComponent, DxDropDownBoxModule };
//# sourceMappingURL=devextreme-angular-ui-drop-down-box.js.map
