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
var DxoHeaderFilterComponent = (function (_super) {
    __extends(DxoHeaderFilterComponent, _super);
    function DxoHeaderFilterComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "groupInterval", {
        get: function () {
            return this._getOption('groupInterval');
        },
        set: function (value) {
            this._setOption('groupInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "showRelevantValues", {
        get: function () {
            return this._getOption('showRelevantValues');
        },
        set: function (value) {
            this._setOption('showRelevantValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "_optionPath", {
        get: function () {
            return 'headerFilter';
        },
        enumerable: true,
        configurable: true
    });
    DxoHeaderFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-header-filter',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoHeaderFilterComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoHeaderFilterComponent.propDecorators = {
        "allowSearch": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "groupInterval": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "searchMode": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "showRelevantValues": [{ type: core_1.Input },],
    };
    return DxoHeaderFilterComponent;
}(nested_option_2.NestedOption));
exports.DxoHeaderFilterComponent = DxoHeaderFilterComponent;
var DxoHeaderFilterModule = (function () {
    function DxoHeaderFilterModule() {
    }
    DxoHeaderFilterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoHeaderFilterComponent
                    ],
                    exports: [
                        DxoHeaderFilterComponent
                    ],
                },] },
    ];
    return DxoHeaderFilterModule;
}());
exports.DxoHeaderFilterModule = DxoHeaderFilterModule;
//# sourceMappingURL=header-filter.js.map