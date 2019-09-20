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
var DxoBehaviorComponent = (function (_super) {
    __extends(DxoBehaviorComponent, _super);
    function DxoBehaviorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoBehaviorComponent.prototype, "allowSlidersSwap", {
        get: function () {
            return this._getOption('allowSlidersSwap');
        },
        set: function (value) {
            this._setOption('allowSlidersSwap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "animationEnabled", {
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "callValueChanged", {
        get: function () {
            return this._getOption('callValueChanged');
        },
        set: function (value) {
            this._setOption('callValueChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "manualRangeSelectionEnabled", {
        get: function () {
            return this._getOption('manualRangeSelectionEnabled');
        },
        set: function (value) {
            this._setOption('manualRangeSelectionEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "moveSelectedRangeByClick", {
        get: function () {
            return this._getOption('moveSelectedRangeByClick');
        },
        set: function (value) {
            this._setOption('moveSelectedRangeByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "snapToTicks", {
        get: function () {
            return this._getOption('snapToTicks');
        },
        set: function (value) {
            this._setOption('snapToTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBehaviorComponent.prototype, "_optionPath", {
        get: function () {
            return 'behavior';
        },
        enumerable: true,
        configurable: true
    });
    DxoBehaviorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-behavior',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoBehaviorComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoBehaviorComponent.propDecorators = {
        "allowSlidersSwap": [{ type: core_1.Input },],
        "animationEnabled": [{ type: core_1.Input },],
        "callValueChanged": [{ type: core_1.Input },],
        "manualRangeSelectionEnabled": [{ type: core_1.Input },],
        "moveSelectedRangeByClick": [{ type: core_1.Input },],
        "snapToTicks": [{ type: core_1.Input },],
    };
    return DxoBehaviorComponent;
}(nested_option_2.NestedOption));
exports.DxoBehaviorComponent = DxoBehaviorComponent;
var DxoBehaviorModule = (function () {
    function DxoBehaviorModule() {
    }
    DxoBehaviorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoBehaviorComponent
                    ],
                    exports: [
                        DxoBehaviorComponent
                    ],
                },] },
    ];
    return DxoBehaviorModule;
}());
exports.DxoBehaviorModule = DxoBehaviorModule;
//# sourceMappingURL=behavior.js.map