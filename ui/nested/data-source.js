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
var pivot_grid_data_source_1 = require("./base/pivot-grid-data-source");
var field_dxi_1 = require("./field-dxi");
var DxoDataSourceComponent = (function (_super) {
    __extends(DxoDataSourceComponent, _super);
    function DxoDataSourceComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        if ((console) && (console.warn)) {
            console.warn('The nested \'dxo-data-source\' component is deprecated in 17.2. ' +
                'Use the \'dataSource\' option instead. ' +
                'See:\nhttps://github.com/DevExpress/devextreme-angular/blob/master/CHANGELOG.md#17.2.3');
        }
        return _this;
    }
    Object.defineProperty(DxoDataSourceComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataSource';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataSourceComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoDataSourceComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-data-source',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'fields',
                        'filter',
                        'onChanged',
                        'onFieldsPrepared',
                        'onLoadError',
                        'onLoadingChanged',
                        'remoteOperations',
                        'retrieveFields',
                        'store'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDataSourceComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDataSourceComponent.propDecorators = {
        "fieldsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return field_dxi_1.DxiFieldComponent; }),] },],
    };
    return DxoDataSourceComponent;
}(pivot_grid_data_source_1.DxoPivotGridDataSource));
exports.DxoDataSourceComponent = DxoDataSourceComponent;
var DxoDataSourceModule = (function () {
    function DxoDataSourceModule() {
    }
    DxoDataSourceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDataSourceComponent
                    ],
                    exports: [
                        DxoDataSourceComponent
                    ],
                },] },
    ];
    return DxoDataSourceModule;
}());
exports.DxoDataSourceModule = DxoDataSourceModule;
//# sourceMappingURL=data-source.js.map