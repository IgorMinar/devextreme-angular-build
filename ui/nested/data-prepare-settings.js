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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
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
        { type: Component, args: [{
                    selector: 'dxo-data-prepare-settings',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoDataPrepareSettingsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoDataPrepareSettingsComponent.propDecorators = {
        "checkTypeForAllData": [{ type: Input },],
        "convertToAxisDataType": [{ type: Input },],
        "sortingMethod": [{ type: Input },],
    };
    return DxoDataPrepareSettingsComponent;
}(NestedOption));
export { DxoDataPrepareSettingsComponent };
var DxoDataPrepareSettingsModule = (function () {
    function DxoDataPrepareSettingsModule() {
    }
    DxoDataPrepareSettingsModule.decorators = [
        { type: NgModule, args: [{
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
export { DxoDataPrepareSettingsModule };
//# sourceMappingURL=data-prepare-settings.js.map