import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxFilterBuilder from 'devextreme/ui/filter_builder';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiCustomOperationComponent, DxiFieldComponent, DxiCustomOperationModule, DxiFieldModule, DxoFormatModule, DxoLookupModule, DxoFilterOperationDescriptionsModule, DxoGroupOperationDescriptionsModule } from 'devextreme-angular/ui/nested';

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
    useExisting: forwardRef(function () { return DxFilterBuilderComponent; }),
    multi: true
};
/**
 * The FilterBuilder widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
 */
var DxFilterBuilderComponent = /** @class */ (function (_super) {
    __extends(DxFilterBuilderComponent, _super);
    function DxFilterBuilderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowHierarchicalFieldsChange' },
            { emit: 'customOperationsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldsChange' },
            { emit: 'filterOperationDescriptionsChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupOperationDescriptionsChange' },
            { emit: 'groupOperationsChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxGroupLevelChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFilterBuilderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "allowHierarchicalFields", {
        /**
         * Specifies whether the widget can display hierarchical data fields.
         */
        get: function () {
            return this._getOption('allowHierarchicalFields');
        },
        set: function (value) {
            this._setOption('allowHierarchicalFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "customOperations", {
        /**
         * Configures custom filter operations.
         */
        get: function () {
            return this._getOption('customOperations');
        },
        set: function (value) {
            this._setOption('customOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "fields", {
        /**
         * Configures fields.
         */
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "filterOperationDescriptions", {
        /**
         * Specifies filter operation descriptions.
         */
        get: function () {
            return this._getOption('filterOperationDescriptions');
        },
        set: function (value) {
            this._setOption('filterOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "groupOperationDescriptions", {
        /**
         * Specifies group operation descriptions.
         */
        get: function () {
            return this._getOption('groupOperationDescriptions');
        },
        set: function (value) {
            this._setOption('groupOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "groupOperations", {
        /**
         * Specifies a set of available group operations.
         */
        get: function () {
            return this._getOption('groupOperations');
        },
        set: function (value) {
            this._setOption('groupOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "height", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "hint", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "maxGroupLevel", {
        /**
         * Specifies groups' maximum nesting level.
         */
        get: function () {
            return this._getOption('maxGroupLevel');
        },
        set: function (value) {
            this._setOption('maxGroupLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "value", {
        /**
         * Allows you to specify a filter.
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "visible", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "width", {
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
    DxFilterBuilderComponent.prototype.change = function (_) { };
    Object.defineProperty(DxFilterBuilderComponent.prototype, "customOperationsChildren", {
        get: function () {
            return this._getOption('customOperations');
        },
        set: function (value) {
            this.setChildren('customOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxFilterBuilderComponent.prototype._createInstance = function (element, options) {
        return new DxFilterBuilder(element, options);
    };
    DxFilterBuilderComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxFilterBuilderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxFilterBuilderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxFilterBuilderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxFilterBuilderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxFilterBuilderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFilterBuilderComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('customOperations', changes);
        this.setupChanges('fields', changes);
        this.setupChanges('groupOperations', changes);
    };
    DxFilterBuilderComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFilterBuilderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('customOperations');
        this._idh.doCheck('fields');
        this._idh.doCheck('groupOperations');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxFilterBuilderComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFilterBuilderComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxFilterBuilderComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxFilterBuilderComponent.ctorParameters = function () { return [
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
    ], DxFilterBuilderComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "allowHierarchicalFields", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "customOperations", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "fields", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "filterOperationDescriptions", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "groupOperationDescriptions", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "groupOperations", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "maxGroupLevel", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxFilterBuilderComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onEditorPrepared", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onEditorPreparing", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "allowHierarchicalFieldsChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "customOperationsChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "fieldsChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "filterOperationDescriptionsChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "groupOperationDescriptionsChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "groupOperationsChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "maxGroupLevelChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxFilterBuilderComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxFilterBuilderComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxFilterBuilderComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiCustomOperationComponent)
    ], DxFilterBuilderComponent.prototype, "customOperationsChildren", null);
    __decorate([
        ContentChildren(DxiFieldComponent)
    ], DxFilterBuilderComponent.prototype, "fieldsChildren", null);
    DxFilterBuilderComponent = __decorate([
        Component({
            selector: 'dx-filter-builder',
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
    ], DxFilterBuilderComponent);
    return DxFilterBuilderComponent;
}(DxComponent));
var DxFilterBuilderModule = /** @class */ (function () {
    function DxFilterBuilderModule() {
    }
    DxFilterBuilderModule = __decorate([
        NgModule({
            imports: [
                DxiCustomOperationModule,
                DxiFieldModule,
                DxoFormatModule,
                DxoLookupModule,
                DxoFilterOperationDescriptionsModule,
                DxoGroupOperationDescriptionsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxFilterBuilderComponent
            ],
            exports: [
                DxFilterBuilderComponent,
                DxiCustomOperationModule,
                DxiFieldModule,
                DxoFormatModule,
                DxoLookupModule,
                DxoFilterOperationDescriptionsModule,
                DxoGroupOperationDescriptionsModule,
                DxTemplateModule
            ]
        })
    ], DxFilterBuilderModule);
    return DxFilterBuilderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxFilterBuilderComponent, DxFilterBuilderModule };
//# sourceMappingURL=devextreme-angular-ui-filter-builder.js.map
