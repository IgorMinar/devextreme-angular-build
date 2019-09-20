"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var filter_builder_options_1 = require("./base/filter-builder-options");
var custom_operation_dxi_1 = require("./custom-operation-dxi");
var field_dxi_1 = require("./field-dxi");
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
        { type: core_1.Component, args: [{
                    selector: 'dxo-filter-builder',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
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
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFilterBuilderComponent.propDecorators = {
        "valueChange": [{ type: core_1.Output },],
        "customOperationsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return custom_operation_dxi_1.DxiCustomOperationComponent; }),] },],
        "fieldsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return field_dxi_1.DxiFieldComponent; }),] },],
    };
    return DxoFilterBuilderComponent;
}(filter_builder_options_1.DxoFilterBuilderOptions));
exports.DxoFilterBuilderComponent = DxoFilterBuilderComponent;
var DxoFilterBuilderModule = (function () {
    function DxoFilterBuilderModule() {
    }
    DxoFilterBuilderModule.decorators = [
        { type: core_1.NgModule, args: [{
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
exports.DxoFilterBuilderModule = DxoFilterBuilderModule;
//# sourceMappingURL=filter-builder.js.map