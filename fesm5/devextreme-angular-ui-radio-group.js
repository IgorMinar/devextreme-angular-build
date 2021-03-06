import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxRadioGroup from 'devextreme/ui/radio_group';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxRadioGroupComponent; }),
    multi: true
};
/**
 * The RadioGroup is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.
 */
var DxRadioGroupComponent = /** @class */ (function (_super) {
    __extends(DxRadioGroupComponent, _super);
    function DxRadioGroupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'layoutChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxRadioGroupComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "disabled", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "displayExpr", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "height", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "hint", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "isValid", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "items", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "layout", {
        /**
         * Specifies the radio group layout.
         */
        get: function () {
            return this._getOption('layout');
        },
        set: function (value) {
            this._setOption('layout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRadioGroupComponent.prototype, "name", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "validationError", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "value", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "valueExpr", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "visible", {
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
    Object.defineProperty(DxRadioGroupComponent.prototype, "width", {
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
    DxRadioGroupComponent.prototype.change = function (_) { };
    Object.defineProperty(DxRadioGroupComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxRadioGroupComponent.prototype._createInstance = function (element, options) {
        return new DxRadioGroup(element, options);
    };
    DxRadioGroupComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxRadioGroupComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxRadioGroupComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxRadioGroupComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxRadioGroupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRadioGroupComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxRadioGroupComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxRadioGroupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxRadioGroupComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxRadioGroupComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxRadioGroupComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxRadioGroupComponent.ctorParameters = function () { return [
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
    ], DxRadioGroupComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "displayExpr", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "layout", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "valueExpr", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxRadioGroupComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "displayExprChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "layoutChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "valueExprChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxRadioGroupComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxRadioGroupComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxRadioGroupComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxRadioGroupComponent.prototype, "itemsChildren", null);
    DxRadioGroupComponent = __decorate([
        Component({
            selector: 'dx-radio-group',
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
    ], DxRadioGroupComponent);
    return DxRadioGroupComponent;
}(DxComponent));
var DxRadioGroupModule = /** @class */ (function () {
    function DxRadioGroupModule() {
    }
    DxRadioGroupModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxRadioGroupComponent
            ],
            exports: [
                DxRadioGroupComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxRadioGroupModule);
    return DxRadioGroupModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxRadioGroupComponent, DxRadioGroupModule };
//# sourceMappingURL=devextreme-angular-ui-radio-group.js.map
