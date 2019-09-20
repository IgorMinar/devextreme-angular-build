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
var nested_option_2 = require("../../core/nested-option");
var DxiResourceComponent = (function (_super) {
    __extends(DxiResourceComponent, _super);
    function DxiResourceComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiResourceComponent.prototype, "allowMultiple", {
        get: function () {
            return this._getOption('allowMultiple');
        },
        set: function (value) {
            this._setOption('allowMultiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "colorExpr", {
        get: function () {
            return this._getOption('colorExpr');
        },
        set: function (value) {
            this._setOption('colorExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "fieldExpr", {
        get: function () {
            return this._getOption('fieldExpr');
        },
        set: function (value) {
            this._setOption('fieldExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "useColorAsDefault", {
        get: function () {
            return this._getOption('useColorAsDefault');
        },
        set: function (value) {
            this._setOption('useColorAsDefault', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiResourceComponent.prototype, "_optionPath", {
        get: function () {
            return 'resources';
        },
        enumerable: true,
        configurable: true
    });
    DxiResourceComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-resource',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiResourceComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiResourceComponent.propDecorators = {
        "allowMultiple": [{ type: core_1.Input },],
        "colorExpr": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "displayExpr": [{ type: core_1.Input },],
        "fieldExpr": [{ type: core_1.Input },],
        "label": [{ type: core_1.Input },],
        "useColorAsDefault": [{ type: core_1.Input },],
        "valueExpr": [{ type: core_1.Input },],
    };
    return DxiResourceComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiResourceComponent = DxiResourceComponent;
var DxiResourceModule = (function () {
    function DxiResourceModule() {
    }
    DxiResourceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiResourceComponent
                    ],
                    exports: [
                        DxiResourceComponent
                    ],
                },] },
    ];
    return DxiResourceModule;
}());
exports.DxiResourceModule = DxiResourceModule;
//# sourceMappingURL=resource-dxi.js.map