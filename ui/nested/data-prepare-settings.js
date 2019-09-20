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
var DxoDataPrepareSettingsComponent = (function (_super) {
    __extends(DxoDataPrepareSettingsComponent, _super);
    function DxoDataPrepareSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "checkTypeForAllData", {
        get: function () {
            return this._getOption('checkTypeForAllData');
        },
        set: function (value) {
            this._setOption('checkTypeForAllData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "convertToAxisDataType", {
        get: function () {
            return this._getOption('convertToAxisDataType');
        },
        set: function (value) {
            this._setOption('convertToAxisDataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "sortingMethod", {
        get: function () {
            return this._getOption('sortingMethod');
        },
        set: function (value) {
            this._setOption('sortingMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataPrepareSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataPrepareSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoDataPrepareSettingsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-data-prepare-settings',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoDataPrepareSettingsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDataPrepareSettingsComponent.propDecorators = {
        "checkTypeForAllData": [{ type: core_1.Input },],
        "convertToAxisDataType": [{ type: core_1.Input },],
        "sortingMethod": [{ type: core_1.Input },],
    };
    return DxoDataPrepareSettingsComponent;
}(nested_option_2.NestedOption));
exports.DxoDataPrepareSettingsComponent = DxoDataPrepareSettingsComponent;
var DxoDataPrepareSettingsModule = (function () {
    function DxoDataPrepareSettingsModule() {
    }
    DxoDataPrepareSettingsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDataPrepareSettingsComponent
                    ],
                    exports: [
                        DxoDataPrepareSettingsComponent
                    ],
                },] },
    ];
    return DxoDataPrepareSettingsModule;
}());
exports.DxoDataPrepareSettingsModule = DxoDataPrepareSettingsModule;
//# sourceMappingURL=data-prepare-settings.js.map