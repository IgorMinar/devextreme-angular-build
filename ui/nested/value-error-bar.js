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
var DxoValueErrorBarComponent = (function (_super) {
    __extends(DxoValueErrorBarComponent, _super);
    function DxoValueErrorBarComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "displayMode", {
        get: function () {
            return this._getOption('displayMode');
        },
        set: function (value) {
            this._setOption('displayMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "edgeLength", {
        get: function () {
            return this._getOption('edgeLength');
        },
        set: function (value) {
            this._setOption('edgeLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "highValueField", {
        get: function () {
            return this._getOption('highValueField');
        },
        set: function (value) {
            this._setOption('highValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "lineWidth", {
        get: function () {
            return this._getOption('lineWidth');
        },
        set: function (value) {
            this._setOption('lineWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "lowValueField", {
        get: function () {
            return this._getOption('lowValueField');
        },
        set: function (value) {
            this._setOption('lowValueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoValueErrorBarComponent.prototype, "_optionPath", {
        get: function () {
            return 'valueErrorBar';
        },
        enumerable: true,
        configurable: true
    });
    DxoValueErrorBarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-value-error-bar',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoValueErrorBarComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoValueErrorBarComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "displayMode": [{ type: core_1.Input },],
        "edgeLength": [{ type: core_1.Input },],
        "highValueField": [{ type: core_1.Input },],
        "lineWidth": [{ type: core_1.Input },],
        "lowValueField": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
    };
    return DxoValueErrorBarComponent;
}(nested_option_2.NestedOption));
exports.DxoValueErrorBarComponent = DxoValueErrorBarComponent;
var DxoValueErrorBarModule = (function () {
    function DxoValueErrorBarModule() {
    }
    DxoValueErrorBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoValueErrorBarComponent
                    ],
                    exports: [
                        DxoValueErrorBarComponent
                    ],
                },] },
    ];
    return DxoValueErrorBarModule;
}());
exports.DxoValueErrorBarModule = DxoValueErrorBarModule;
//# sourceMappingURL=value-error-bar.js.map