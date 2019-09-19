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
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPivotGridDataSource } from './base/pivot-grid-data-source';
import { DxiFieldComponent } from './field-dxi';
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
        { type: Component, args: [{
                    selector: 'dxo-data-source',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
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
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoDataSourceComponent.propDecorators = {
        "fieldsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiFieldComponent; }),] },],
    };
    return DxoDataSourceComponent;
}(DxoPivotGridDataSource));
export { DxoDataSourceComponent };
var DxoDataSourceModule = (function () {
    function DxoDataSourceModule() {
    }
    DxoDataSourceModule.decorators = [
        { type: NgModule, args: [{
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
export { DxoDataSourceModule };
//# sourceMappingURL=data-source.js.map