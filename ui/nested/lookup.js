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
var DxoLookupComponent = (function (_super) {
    __extends(DxoLookupComponent, _super);
    function DxoLookupComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLookupComponent.prototype, "allowClearing", {
        get: function () {
            return this._getOption('allowClearing');
        },
        set: function (value) {
            this._setOption('allowClearing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLookupComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLookupComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLookupComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLookupComponent.prototype, "_optionPath", {
        get: function () {
            return 'lookup';
        },
        enumerable: true,
        configurable: true
    });
    DxoLookupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-lookup',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLookupComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoLookupComponent.propDecorators = {
        "allowClearing": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "displayExpr": [{ type: core_1.Input },],
        "valueExpr": [{ type: core_1.Input },],
    };
    return DxoLookupComponent;
}(nested_option_2.NestedOption));
exports.DxoLookupComponent = DxoLookupComponent;
var DxoLookupModule = (function () {
    function DxoLookupModule() {
    }
    DxoLookupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoLookupComponent
                    ],
                    exports: [
                        DxoLookupComponent
                    ],
                },] },
    ];
    return DxoLookupModule;
}());
exports.DxoLookupModule = DxoLookupModule;
//# sourceMappingURL=lookup.js.map