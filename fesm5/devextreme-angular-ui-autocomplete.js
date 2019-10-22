import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxAutocomplete from 'devextreme/ui/autocomplete';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiButtonComponent, DxiItemComponent, DxiButtonModule, DxoOptionsModule, DxiItemModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxAutocompleteComponent; }),
    multi: true
};
/**
 * The Autocomplete widget is a textbox that provides suggestions while a user types into it.
 */
var DxAutocompleteComponent = /** @class */ (function (_super) {
    __extends(DxAutocompleteComponent, _super);
    function DxAutocompleteComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'buttonsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayValueChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'maxItemCountChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'spellcheckChange' },
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "buttons", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "disabled", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "displayValue", {
        /**
         * Returns the value currently displayed by the widget.
         */
        get: function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "dropDownButtonTemplate", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "grouped", {
        /**
         * Specifies whether data items should be grouped.
         */
        get: function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "groupTemplate", {
        /**
         * Specifies a custom template for group captions.
         */
        get: function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "height", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "hint", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "isValid", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "items", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxItemCount", {
        /**
         * Specifies the maximum count of items displayed by the widget.
         */
        get: function () {
            return this._getOption('maxItemCount');
        },
        set: function (value) {
            this._setOption('maxItemCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxLength", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "minSearchLength", {
        /**
         * The minimum number of characters that must be entered into the text box to begin a search.
         */
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "name", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "opened", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "openOnFieldClick", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "placeholder", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchExpr", {
        /**
         * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
         */
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchMode", {
        /**
         * Specifies a comparison operation used to search widget items.
         */
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchTimeout", {
        /**
         * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
         */
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "selectedItem", {
        /**
         * Gets the currently selected item.
         */
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "showClearButton", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "showDropDownButton", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "spellcheck", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "text", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationError", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "value", {
        /**
         * Specifies the current value displayed by the widget.
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueChangeEvent", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueExpr", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "visible", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "width", {
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
    DxAutocompleteComponent.prototype.change = function (_) { };
    Object.defineProperty(DxAutocompleteComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAutocompleteComponent.prototype._createInstance = function (element, options) {
        return new DxAutocomplete(element, options);
    };
    DxAutocompleteComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxAutocompleteComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxAutocompleteComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxAutocompleteComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxAutocompleteComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxAutocompleteComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxAutocompleteComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxAutocompleteComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxAutocompleteComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxAutocompleteComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxAutocompleteComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxAutocompleteComponent.ctorParameters = function () { return [
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
    ], DxAutocompleteComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "displayValue", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "dropDownButtonTemplate", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "groupTemplate", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "maxItemCount", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "minSearchLength", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "openOnFieldClick", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "searchExpr", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "searchMode", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "searchTimeout", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "showClearButton", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "showDropDownButton", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "spellcheck", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "valueExpr", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxAutocompleteComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onClosed", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onOpened", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "displayValueChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "dropDownButtonTemplateChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "groupedChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "groupTemplateChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "maxItemCountChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "minSearchLengthChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "openOnFieldClickChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "searchExprChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "searchModeChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "showDropDownButtonChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "valueExprChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxAutocompleteComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxAutocompleteComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxAutocompleteComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxAutocompleteComponent.prototype, "buttonsChildren", null);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxAutocompleteComponent.prototype, "itemsChildren", null);
    DxAutocompleteComponent = __decorate([
        Component({
            selector: 'dx-autocomplete',
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
    ], DxAutocompleteComponent);
    return DxAutocompleteComponent;
}(DxComponent));
var DxAutocompleteModule = /** @class */ (function () {
    function DxAutocompleteModule() {
    }
    DxAutocompleteModule = __decorate([
        NgModule({
            imports: [
                DxiButtonModule,
                DxoOptionsModule,
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxAutocompleteComponent
            ],
            exports: [
                DxAutocompleteComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxAutocompleteModule);
    return DxAutocompleteModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxAutocompleteComponent, DxAutocompleteModule };
//# sourceMappingURL=devextreme-angular-ui-autocomplete.js.map
