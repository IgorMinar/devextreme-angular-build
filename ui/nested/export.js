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
var DxoExportComponent = (function (_super) {
    __extends(DxoExportComponent, _super);
    function DxoExportComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoExportComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "fileName", {
        get: function () {
            return this._getOption('fileName');
        },
        set: function (value) {
            this._setOption('fileName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "formats", {
        get: function () {
            return this._getOption('formats');
        },
        set: function (value) {
            this._setOption('formats', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "printingEnabled", {
        get: function () {
            return this._getOption('printingEnabled');
        },
        set: function (value) {
            this._setOption('printingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "proxyUrl", {
        get: function () {
            return this._getOption('proxyUrl');
        },
        set: function (value) {
            this._setOption('proxyUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "allowExportSelectedData", {
        get: function () {
            return this._getOption('allowExportSelectedData');
        },
        set: function (value) {
            this._setOption('allowExportSelectedData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "customizeExcelCell", {
        get: function () {
            return this._getOption('customizeExcelCell');
        },
        set: function (value) {
            this._setOption('customizeExcelCell', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "excelFilterEnabled", {
        get: function () {
            return this._getOption('excelFilterEnabled');
        },
        set: function (value) {
            this._setOption('excelFilterEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "excelWrapTextEnabled", {
        get: function () {
            return this._getOption('excelWrapTextEnabled');
        },
        set: function (value) {
            this._setOption('excelWrapTextEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "ignoreExcelErrors", {
        get: function () {
            return this._getOption('ignoreExcelErrors');
        },
        set: function (value) {
            this._setOption('ignoreExcelErrors', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoExportComponent.prototype, "_optionPath", {
        get: function () {
            return 'export';
        },
        enumerable: true,
        configurable: true
    });
    DxoExportComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-export',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoExportComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoExportComponent.propDecorators = {
        "backgroundColor": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "fileName": [{ type: core_1.Input },],
        "formats": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "printingEnabled": [{ type: core_1.Input },],
        "proxyUrl": [{ type: core_1.Input },],
        "allowExportSelectedData": [{ type: core_1.Input },],
        "customizeExcelCell": [{ type: core_1.Input },],
        "excelFilterEnabled": [{ type: core_1.Input },],
        "excelWrapTextEnabled": [{ type: core_1.Input },],
        "ignoreExcelErrors": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
    };
    return DxoExportComponent;
}(nested_option_2.NestedOption));
exports.DxoExportComponent = DxoExportComponent;
var DxoExportModule = (function () {
    function DxoExportModule() {
    }
    DxoExportModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoExportComponent
                    ],
                    exports: [
                        DxoExportComponent
                    ],
                },] },
    ];
    return DxoExportModule;
}());
exports.DxoExportModule = DxoExportModule;
//# sourceMappingURL=export.js.map