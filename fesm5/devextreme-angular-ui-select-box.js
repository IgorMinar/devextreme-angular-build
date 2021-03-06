import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxSelectBox from 'devextreme/ui/select_box';
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
    useExisting: forwardRef(function () { return DxSelectBoxComponent; }),
    multi: true
};
/**
 * The SelectBox widget is an editor that allows an end user to select an item from a drop-down list.
 */
var DxSelectBoxComponent = /** @class */ (function (_super) {
    __extends(DxSelectBoxComponent, _super);
    function DxSelectBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
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
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'buttonsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'displayValueChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
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
            { emit: 'maxLengthChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'showSelectionControlsChange' },
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "acceptCustomValue", {
        /**
         * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "buttons", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "displayExpr", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "displayValue", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "dropDownButtonTemplate", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "fieldTemplate", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "grouped", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "groupTemplate", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "items", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "maxLength", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "minSearchLength", {
        /**
         * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "opened", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "openOnFieldClick", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "placeholder", {
        /**
         * The text that is provided as a hint in the select box editor.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchEnabled", {
        /**
         * Specifies whether to allow searching.
         */
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchExpr", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchMode", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchTimeout", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "showClearButton", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "showDataBeforeSearch", {
        /**
         * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
         */
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showDropDownButton", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "showSelectionControls", {
        /**
         * Specifies whether or not to display selection controls.
         */
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "spellcheck", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "value", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "valueChangeEvent", {
        /**
         * Specifies the DOM events after which the widget's value should be updated. Applies only if acceptCustomValue is set to true.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "valueExpr", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "width", {
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
    DxSelectBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxSelectBoxComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSelectBoxComponent.prototype._createInstance = function (element, options) {
        return new DxSelectBox(element, options);
    };
    DxSelectBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxSelectBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxSelectBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxSelectBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxSelectBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxSelectBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSelectBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxSelectBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSelectBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSelectBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSelectBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxSelectBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxSelectBoxComponent.ctorParameters = function () { return [
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
    ], DxSelectBoxComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "deferRendering", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "displayValue", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "dropDownButtonTemplate", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "fieldTemplate", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "groupTemplate", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "inputAttr", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "minSearchLength", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "noDataText", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "openOnFieldClick", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "searchEnabled", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "searchExpr", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "searchMode", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "searchTimeout", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "selectedItem", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "showClearButton", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "showDataBeforeSearch", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "showDropDownButton", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "showSelectionControls", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "spellcheck", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "stylingMode", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "text", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "valueExpr", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxSelectBoxComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onCustomItemCreating", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onCut", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onInput", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "buttonsChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "displayValueChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "dropDownButtonTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "fieldTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "groupedChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "groupTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "inputAttrChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "minSearchLengthChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "openOnFieldClickChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "searchEnabledChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "searchExprChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "searchModeChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "showDataBeforeSearchChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "showDropDownButtonChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "showSelectionControlsChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "stylingModeChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "textChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "valueExprChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxSelectBoxComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxSelectBoxComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxSelectBoxComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiButtonComponent)
    ], DxSelectBoxComponent.prototype, "buttonsChildren", null);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxSelectBoxComponent.prototype, "itemsChildren", null);
    DxSelectBoxComponent = __decorate([
        Component({
            selector: 'dx-select-box',
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
    ], DxSelectBoxComponent);
    return DxSelectBoxComponent;
}(DxComponent));
var DxSelectBoxModule = /** @class */ (function () {
    function DxSelectBoxModule() {
    }
    DxSelectBoxModule = __decorate([
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
                DxSelectBoxComponent
            ],
            exports: [
                DxSelectBoxComponent,
                DxiButtonModule,
                DxoOptionsModule,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxSelectBoxModule);
    return DxSelectBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxSelectBoxComponent, DxSelectBoxModule };
//# sourceMappingURL=devextreme-angular-ui-select-box.js.map
