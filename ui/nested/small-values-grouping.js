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
var DxoSmallValuesGroupingComponent = (function (_super) {
    __extends(DxoSmallValuesGroupingComponent, _super);
    function DxoSmallValuesGroupingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "groupName", {
        get: function () {
            return this._getOption('groupName');
        },
        set: function (value) {
            this._setOption('groupName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "threshold", {
        get: function () {
            return this._getOption('threshold');
        },
        set: function (value) {
            this._setOption('threshold', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "topCount", {
        get: function () {
            return this._getOption('topCount');
        },
        set: function (value) {
            this._setOption('topCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "_optionPath", {
        get: function () {
            return 'smallValuesGrouping';
        },
        enumerable: true,
        configurable: true
    });
    DxoSmallValuesGroupingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-small-values-grouping',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSmallValuesGroupingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSmallValuesGroupingComponent.propDecorators = {
        "groupName": [{ type: core_1.Input },],
        "mode": [{ type: core_1.Input },],
        "threshold": [{ type: core_1.Input },],
        "topCount": [{ type: core_1.Input },],
    };
    return DxoSmallValuesGroupingComponent;
}(nested_option_2.NestedOption));
exports.DxoSmallValuesGroupingComponent = DxoSmallValuesGroupingComponent;
var DxoSmallValuesGroupingModule = (function () {
    function DxoSmallValuesGroupingModule() {
    }
    DxoSmallValuesGroupingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSmallValuesGroupingComponent
                    ],
                    exports: [
                        DxoSmallValuesGroupingComponent
                    ],
                },] },
    ];
    return DxoSmallValuesGroupingModule;
}());
exports.DxoSmallValuesGroupingModule = DxoSmallValuesGroupingModule;
//# sourceMappingURL=small-values-grouping.js.map