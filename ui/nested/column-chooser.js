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
var DxoColumnChooserComponent = (function (_super) {
    __extends(DxoColumnChooserComponent, _super);
    function DxoColumnChooserComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoColumnChooserComponent.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "emptyPanelText", {
        get: function () {
            return this._getOption('emptyPanelText');
        },
        set: function (value) {
            this._setOption('emptyPanelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "_optionPath", {
        get: function () {
            return 'columnChooser';
        },
        enumerable: true,
        configurable: true
    });
    DxoColumnChooserComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-column-chooser',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoColumnChooserComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoColumnChooserComponent.propDecorators = {
        "allowSearch": [{ type: core_1.Input },],
        "emptyPanelText": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "mode": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
    };
    return DxoColumnChooserComponent;
}(nested_option_2.NestedOption));
exports.DxoColumnChooserComponent = DxoColumnChooserComponent;
var DxoColumnChooserModule = (function () {
    function DxoColumnChooserModule() {
    }
    DxoColumnChooserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoColumnChooserComponent
                    ],
                    exports: [
                        DxoColumnChooserComponent
                    ],
                },] },
    ];
    return DxoColumnChooserModule;
}());
exports.DxoColumnChooserModule = DxoColumnChooserModule;
//# sourceMappingURL=column-chooser.js.map