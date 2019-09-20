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
var DxoFieldPanelComponent = (function (_super) {
    __extends(DxoFieldPanelComponent, _super);
    function DxoFieldPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFieldPanelComponent.prototype, "allowFieldDragging", {
        get: function () {
            return this._getOption('allowFieldDragging');
        },
        set: function (value) {
            this._setOption('allowFieldDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showColumnFields", {
        get: function () {
            return this._getOption('showColumnFields');
        },
        set: function (value) {
            this._setOption('showColumnFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showDataFields", {
        get: function () {
            return this._getOption('showDataFields');
        },
        set: function (value) {
            this._setOption('showDataFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showFilterFields", {
        get: function () {
            return this._getOption('showFilterFields');
        },
        set: function (value) {
            this._setOption('showFilterFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showRowFields", {
        get: function () {
            return this._getOption('showRowFields');
        },
        set: function (value) {
            this._setOption('showRowFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'fieldPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoFieldPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-field-panel',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFieldPanelComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFieldPanelComponent.propDecorators = {
        "allowFieldDragging": [{ type: core_1.Input },],
        "showColumnFields": [{ type: core_1.Input },],
        "showDataFields": [{ type: core_1.Input },],
        "showFilterFields": [{ type: core_1.Input },],
        "showRowFields": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
    };
    return DxoFieldPanelComponent;
}(nested_option_2.NestedOption));
exports.DxoFieldPanelComponent = DxoFieldPanelComponent;
var DxoFieldPanelModule = (function () {
    function DxoFieldPanelModule() {
    }
    DxoFieldPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFieldPanelComponent
                    ],
                    exports: [
                        DxoFieldPanelComponent
                    ],
                },] },
    ];
    return DxoFieldPanelModule;
}());
exports.DxoFieldPanelModule = DxoFieldPanelModule;
//# sourceMappingURL=field-panel.js.map