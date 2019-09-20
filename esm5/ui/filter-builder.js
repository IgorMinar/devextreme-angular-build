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
import DxFilterBuilder from 'devextreme/ui/filter_builder';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiCustomOperationModule } from './nested/custom-operation-dxi';
import { DxiFieldModule } from './nested/field-dxi';
import { DxoFormatModule } from './nested/format';
import { DxoLookupModule } from './nested/lookup';
import { DxoFilterOperationDescriptionsModule } from './nested/filter-operation-descriptions';
import { DxoGroupOperationDescriptionsModule } from './nested/group-operation-descriptions';
import { DxiCustomOperationComponent } from './nested/custom-operation-dxi';
import { DxiFieldComponent } from './nested/field-dxi';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxFilterBuilderComponent; }),
    multi: true
};
/**
 * The FilterBuilder widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
 */
var DxFilterBuilderComponent = (function (_super) {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "allowHierarchicalFields", {
        get: /**
             * Specifies whether the widget can display hierarchical data fields.
             */
        function () {
            return this._getOption('allowHierarchicalFields');
        },
        set: function (value) {
            this._setOption('allowHierarchicalFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "customOperations", {
        get: /**
             * Configures custom filter operations.
             */
        function () {
            return this._getOption('customOperations');
        },
        set: function (value) {
            this._setOption('customOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "fields", {
        get: /**
             * Configures fields.
             */
        function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "filterOperationDescriptions", {
        get: /**
             * Specifies filter operation descriptions.
             */
        function () {
            return this._getOption('filterOperationDescriptions');
        },
        set: function (value) {
            this._setOption('filterOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "groupOperationDescriptions", {
        get: /**
             * Specifies group operation descriptions.
             */
        function () {
            return this._getOption('groupOperationDescriptions');
        },
        set: function (value) {
            this._setOption('groupOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "groupOperations", {
        get: /**
             * Specifies a set of available group operations.
             */
        function () {
            return this._getOption('groupOperations');
        },
        set: function (value) {
            this._setOption('groupOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "height", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "hint", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "maxGroupLevel", {
        get: /**
             * Specifies groups' maximum nesting level.
             */
        function () {
            return this._getOption('maxGroupLevel');
        },
        set: function (value) {
            this._setOption('maxGroupLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "value", {
        get: /**
             * Allows you to specify a filter.
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "visible", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "width", {
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
    DxFilterBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-filter-builder',
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
    DxFilterBuilderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxFilterBuilderComponent.propDecorators = {
        "validator": [{ type: ContentChild, args: [DxValidatorComponent,] },],
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "allowHierarchicalFields": [{ type: Input },],
        "customOperations": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "fields": [{ type: Input },],
        "filterOperationDescriptions": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "groupOperationDescriptions": [{ type: Input },],
        "groupOperations": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "maxGroupLevel": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "value": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onEditorPrepared": [{ type: Output },],
        "onEditorPreparing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onValueChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "allowHierarchicalFieldsChange": [{ type: Output },],
        "customOperationsChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "fieldsChange": [{ type: Output },],
        "filterOperationDescriptionsChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "groupOperationDescriptionsChange": [{ type: Output },],
        "groupOperationsChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "maxGroupLevelChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "onBlur": [{ type: Output },],
        "change": [{ type: HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: HostListener, args: ['onBlur', ['$event'],] },],
        "customOperationsChildren": [{ type: ContentChildren, args: [DxiCustomOperationComponent,] },],
        "fieldsChildren": [{ type: ContentChildren, args: [DxiFieldComponent,] },],
    };
    return DxFilterBuilderComponent;
}(DxComponent));
export { DxFilterBuilderComponent };
var DxFilterBuilderModule = (function () {
    function DxFilterBuilderModule() {
    }
    DxFilterBuilderModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxFilterBuilderModule;
}());
export { DxFilterBuilderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91aS9maWx0ZXItYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBR1osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBSVosZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLGVBQWUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkQsT0FBTyxFQUVILGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVB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Qzs2Q0FHakMsZUFBZSxTQUFDLDJCQUEyQjttQ0FRM0MsZUFBZSxTQUFDLGlCQUFpQjs7bUNBcmZ0QztFQXlHOEMsV0FBVztTQUE1Qyx3QkFBd0I7Ozs7O2dCQXlnQnBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixvQ0FBb0M7d0JBQ3BDLG1DQUFtQzt3QkFDbkMsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLDBCQUEwQjtxQkFDM0I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixvQ0FBb0M7d0JBQ3BDLG1DQUFtQzt3QkFDbkMsZ0JBQWdCO3FCQUNqQjtpQkFDRjs7Z0NBM29CRDs7U0E0b0JhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhGaWx0ZXJCdWlsZGVyIGZyb20gJ2RldmV4dHJlbWUvdWkvZmlsdGVyX2J1aWxkZXInO1xyXG5cclxuaW1wb3J0IHsgRHhWYWxpZGF0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9jdXN0b20tb3BlcmF0aW9uLWR4aSc7XHJcbmltcG9ydCB7IER4aUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmllbGQtZHhpJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZm9ybWF0JztcclxuaW1wb3J0IHsgRHhvTG9va3VwTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbG9va3VwJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmlsdGVyLW9wZXJhdGlvbi1kZXNjcmlwdGlvbnMnO1xyXG5pbXBvcnQgeyBEeG9Hcm91cE9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2dyb3VwLW9wZXJhdGlvbi1kZXNjcmlwdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgRHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZXN0ZWQvY3VzdG9tLW9wZXJhdGlvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL2ZpZWxkLWR4aSc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDVVNUT01fVkFMVUVfQUNDRVNTT1JfUFJPVklERVIgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER4RmlsdGVyQnVpbGRlckNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBGaWx0ZXJCdWlsZGVyIHdpZGdldCBhbGxvd3MgYSB1c2VyIHRvIGJ1aWxkIGNvbXBsZXggZmlsdGVyIGV4cHJlc3Npb25zIHdpdGggYW4gdW5saW1pdGVkIG51bWJlciBvZiBmaWx0ZXIgY29uZGl0aW9ucywgY29tYmluZWQgYnkgbG9naWNhbCBvcGVyYXRpb25zIHVzaW5nIHRoZSBVSS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1maWx0ZXItYnVpbGRlcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIENVU1RPTV9WQUxVRV9BQ0NFU1NPUl9QUk9WSURFUixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeEZpbHRlckJ1aWxkZXJDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeEZpbHRlckJ1aWxkZXI7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZChEeFZhbGlkYXRvckNvbXBvbmVudClcclxuICAgIHZhbGlkYXRvcjogRHhWYWxpZGF0b3JDb21wb25lbnQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaG9ydGN1dCBrZXkgdGhhdCBzZXRzIGZvY3VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWNjZXNzS2V5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjY2Vzc0tleScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjaGFuZ2VzIGl0cyBzdGF0ZSB3aGVuIGludGVyYWN0aW5nIHdpdGggYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY3RpdmVTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmVTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBkaXNwbGF5IGhpZXJhcmNoaWNhbCBkYXRhIGZpZWxkcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0hpZXJhcmNoaWNhbEZpZWxkcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0hpZXJhcmNoaWNhbEZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93SGllcmFyY2hpY2FsRmllbGRzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0hpZXJhcmNoaWNhbEZpZWxkcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGN1c3RvbSBmaWx0ZXIgb3BlcmF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjdXN0b21PcGVyYXRpb25zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyQ3VzdG9tT3BlcmF0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9tT3BlcmF0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbU9wZXJhdGlvbnModmFsdWU6IEFycmF5PERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyQ3VzdG9tT3BlcmF0aW9uPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9tT3BlcmF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgZmllbGRzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpZWxkcygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlckZpZWxkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmllbGRzKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4RmlsdGVyQnVpbGRlckZpZWxkPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBmaWx0ZXIgb3BlcmF0aW9uIGRlc2NyaXB0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnMoKTogeyBiZXR3ZWVuPzogc3RyaW5nLCBjb250YWlucz86IHN0cmluZywgZW5kc1dpdGg/OiBzdHJpbmcsIGVxdWFsPzogc3RyaW5nLCBncmVhdGVyVGhhbj86IHN0cmluZywgZ3JlYXRlclRoYW5PckVxdWFsPzogc3RyaW5nLCBpc0JsYW5rPzogc3RyaW5nLCBpc05vdEJsYW5rPzogc3RyaW5nLCBsZXNzVGhhbj86IHN0cmluZywgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nLCBub3RDb250YWlucz86IHN0cmluZywgbm90RXF1YWw/OiBzdHJpbmcsIHN0YXJ0c1dpdGg/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zKHZhbHVlOiB7IGJldHdlZW4/OiBzdHJpbmcsIGNvbnRhaW5zPzogc3RyaW5nLCBlbmRzV2l0aD86IHN0cmluZywgZXF1YWw/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuPzogc3RyaW5nLCBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmcsIGlzQmxhbms/OiBzdHJpbmcsIGlzTm90Qmxhbms/OiBzdHJpbmcsIGxlc3NUaGFuPzogc3RyaW5nLCBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmcsIG5vdENvbnRhaW5zPzogc3RyaW5nLCBub3RFcXVhbD86IHN0cmluZywgc3RhcnRzV2l0aD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBncm91cCBvcGVyYXRpb24gZGVzY3JpcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zKCk6IHsgYW5kPzogc3RyaW5nLCBub3RBbmQ/OiBzdHJpbmcsIG5vdE9yPzogc3RyaW5nLCBvcj86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cE9wZXJhdGlvbkRlc2NyaXB0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zKHZhbHVlOiB7IGFuZD86IHN0cmluZywgbm90QW5kPzogc3RyaW5nLCBub3RPcj86IHN0cmluZywgb3I/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgc2V0IG9mIGF2YWlsYWJsZSBncm91cCBvcGVyYXRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwT3BlcmF0aW9ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cE9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBncm91cE9wZXJhdGlvbnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2dyb3VwT3BlcmF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgZ3JvdXBzJyBtYXhpbXVtIG5lc3RpbmcgbGV2ZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4R3JvdXBMZXZlbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heEdyb3VwTGV2ZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhHcm91cExldmVsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heEdyb3VwTGV2ZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB5b3UgdG8gc3BlY2lmeSBhIGZpbHRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBpcyB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3aWRnZXQncyB3aWR0aC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgd2lkZ2V0IGlzIGRpc3Bvc2VkIG9mLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25EaXNwb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGFuIGVkaXRvciBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0b3JQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGFuIGVkaXRvciBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FZGl0b3JQcmVwYXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIGluIEphdmFTY3JpcHQgZnJhbWV3b3JrcyB0byBzYXZlIHRoZSB3aWRnZXQgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHdpZGdldCBvcHRpb24gaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCdzIHZhbHVlIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbGxvd0hpZXJhcmNoaWNhbEZpZWxkc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFsbG93SGllcmFyY2hpY2FsRmllbGRzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjdXN0b21PcGVyYXRpb25zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY3VzdG9tT3BlcmF0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyQ3VzdG9tT3BlcmF0aW9uPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpZWxkc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpZWxkc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3MudWkuZHhGaWx0ZXJCdWlsZGVyRmllbGQ+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgYmV0d2Vlbj86IHN0cmluZywgY29udGFpbnM/OiBzdHJpbmcsIGVuZHNXaXRoPzogc3RyaW5nLCBlcXVhbD86IHN0cmluZywgZ3JlYXRlclRoYW4/OiBzdHJpbmcsIGdyZWF0ZXJUaGFuT3JFcXVhbD86IHN0cmluZywgaXNCbGFuaz86IHN0cmluZywgaXNOb3RCbGFuaz86IHN0cmluZywgbGVzc1RoYW4/OiBzdHJpbmcsIGxlc3NUaGFuT3JFcXVhbD86IHN0cmluZywgbm90Q29udGFpbnM/OiBzdHJpbmcsIG5vdEVxdWFsPzogc3RyaW5nLCBzdGFydHNXaXRoPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZ3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cE9wZXJhdGlvbkRlc2NyaXB0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgYW5kPzogc3RyaW5nLCBub3RBbmQ/OiBzdHJpbmcsIG5vdE9yPzogc3RyaW5nLCBvcj86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwT3BlcmF0aW9uc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdyb3VwT3BlcmF0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZz4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGludENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhpbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbWF4R3JvdXBMZXZlbENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1heEdyb3VwTGV2ZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigndmFsdWVDaGFuZ2UnLCBbJyRldmVudCddKSBjaGFuZ2UoXykgeyB9XHJcbiAgICBASG9zdExpc3RlbmVyKCdvbkJsdXInLCBbJyRldmVudCddKSB0b3VjaGVkID0gKF8pID0+IHt9O1xyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudClcclxuICAgIGdldCBjdXN0b21PcGVyYXRpb25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbU9wZXJhdGlvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjdXN0b21PcGVyYXRpb25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdjdXN0b21PcGVyYXRpb25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpRmllbGRDb21wb25lbnQpXHJcbiAgICBnZXQgZmllbGRzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUZpZWxkQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmllbGRzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdmaWVsZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0b3JQcmVwYXJlZCcsIGVtaXQ6ICdvbkVkaXRvclByZXBhcmVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2VkaXRvclByZXBhcmluZycsIGVtaXQ6ICdvbkVkaXRvclByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3ZhbHVlQ2hhbmdlZCcsIGVtaXQ6ICdvblZhbHVlQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWNjZXNzS2V5Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhY3RpdmVTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93SGllcmFyY2hpY2FsRmllbGRzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjdXN0b21PcGVyYXRpb25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpZWxkc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2dyb3VwT3BlcmF0aW9uc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoaW50Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdob3ZlclN0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbWF4R3JvdXBMZXZlbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncnRsRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb25CbHVyJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4RmlsdGVyQnVpbGRlcihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmxvY2tlZFZhbHVlQ2hhbmdlRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmxvY2tlZFZhbHVlQ2hhbmdlRXZlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuY2hhbmdlID0gZm47IH1cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMudG91Y2hlZCA9IGZuOyB9XHJcblxyXG4gICAgX2NyZWF0ZVdpZGdldChlbGVtZW50OiBhbnkpIHtcclxuICAgICAgICBzdXBlci5fY3JlYXRlV2lkZ2V0KGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzT3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhlbHBlci5maXJlTmdFdmVudCgnb25CbHVyJywgW2VdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95V2lkZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdjdXN0b21PcGVyYXRpb25zJywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2ZpZWxkcycsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDaGFuZ2VzKCdncm91cE9wZXJhdGlvbnMnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdjdXN0b21PcGVyYXRpb25zJyk7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2ZpZWxkcycpO1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdncm91cE9wZXJhdGlvbnMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5jcmVhdGVJbnN0YW5jZU9uSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuY3JlYXRlSW5zdGFuY2UodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0xvb2t1cE1vZHVsZSxcclxuICAgIER4b0ZpbHRlck9wZXJhdGlvbkRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIER4b0dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeEZpbHRlckJ1aWxkZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4RmlsdGVyQnVpbGRlckNvbXBvbmVudCxcclxuICAgIER4aUN1c3RvbU9wZXJhdGlvbk1vZHVsZSxcclxuICAgIER4aUZpZWxkTW9kdWxlLFxyXG4gICAgRHhvRm9ybWF0TW9kdWxlLFxyXG4gICAgRHhvTG9va3VwTW9kdWxlLFxyXG4gICAgRHhvRmlsdGVyT3BlcmF0aW9uRGVzY3JpcHRpb25zTW9kdWxlLFxyXG4gICAgRHhvR3JvdXBPcGVyYXRpb25EZXNjcmlwdGlvbnNNb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhGaWx0ZXJCdWlsZGVyTW9kdWxlIHsgfVxyXG4iXX0=