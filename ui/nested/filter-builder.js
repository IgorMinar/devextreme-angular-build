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
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFilterBuilderOptions } from './base/filter-builder-options';
import { DxiCustomOperationComponent } from './custom-operation-dxi';
import { DxiFieldComponent } from './field-dxi';
var DxoFilterBuilderComponent = (function (_super) {
    __extends(DxoFilterBuilderComponent, _super);
    function DxoFilterBuilderComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterBuilderComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterBuilder';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderComponent.prototype, "customOperationsChildren", {
        get: function () {
            return this._getOption('customOperations');
        },
        set: function (value) {
            this.setChildren('customOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFilterBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-filter-builder',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'allowHierarchicalFields',
                        'customOperations',
                        'disabled',
                        'elementAttr',
                        'fields',
                        'filterOperationDescriptions',
                        'focusStateEnabled',
                        'groupOperationDescriptions',
                        'groupOperations',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'maxGroupLevel',
                        'onContentReady',
                        'onDisposing',
                        'onEditorPrepared',
                        'onEditorPreparing',
                        'onInitialized',
                        'onOptionChanged',
                        'onValueChanged',
                        'rtlEnabled',
                        'tabIndex',
                        'value',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFilterBuilderComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFilterBuilderComponent.propDecorators = {
        "valueChange": [{ type: Output },],
        "customOperationsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiCustomOperationComponent; }),] },],
        "fieldsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiFieldComponent; }),] },],
    };
    return DxoFilterBuilderComponent;
}(DxoFilterBuilderOptions));
export { DxoFilterBuilderComponent };
var DxoFilterBuilderModule = (function () {
    function DxoFilterBuilderModule() {
    }
    DxoFilterBuilderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFilterBuilderComponent
                    ],
                    exports: [
                        DxoFilterBuilderComponent
                    ],
                },] },
    ];
    return DxoFilterBuilderModule;
}());
export { DxoFilterBuilderModule };
//# sourceMappingURL=filter-builder.js.map