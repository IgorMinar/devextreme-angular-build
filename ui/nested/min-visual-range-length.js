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
var DxoMinVisualRangeLengthComponent = (function (_super) {
    __extends(DxoMinVisualRangeLengthComponent, _super);
    function DxoMinVisualRangeLengthComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "days", {
        get: function () {
            return this._getOption('days');
        },
        set: function (value) {
            this._setOption('days', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "hours", {
        get: function () {
            return this._getOption('hours');
        },
        set: function (value) {
            this._setOption('hours', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "milliseconds", {
        get: function () {
            return this._getOption('milliseconds');
        },
        set: function (value) {
            this._setOption('milliseconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "minutes", {
        get: function () {
            return this._getOption('minutes');
        },
        set: function (value) {
            this._setOption('minutes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "months", {
        get: function () {
            return this._getOption('months');
        },
        set: function (value) {
            this._setOption('months', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "quarters", {
        get: function () {
            return this._getOption('quarters');
        },
        set: function (value) {
            this._setOption('quarters', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "seconds", {
        get: function () {
            return this._getOption('seconds');
        },
        set: function (value) {
            this._setOption('seconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "weeks", {
        get: function () {
            return this._getOption('weeks');
        },
        set: function (value) {
            this._setOption('weeks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "years", {
        get: function () {
            return this._getOption('years');
        },
        set: function (value) {
            this._setOption('years', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinVisualRangeLengthComponent.prototype, "_optionPath", {
        get: function () {
            return 'minVisualRangeLength';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinVisualRangeLengthComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-min-visual-range-length',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMinVisualRangeLengthComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMinVisualRangeLengthComponent.propDecorators = {
        "days": [{ type: core_1.Input },],
        "hours": [{ type: core_1.Input },],
        "milliseconds": [{ type: core_1.Input },],
        "minutes": [{ type: core_1.Input },],
        "months": [{ type: core_1.Input },],
        "quarters": [{ type: core_1.Input },],
        "seconds": [{ type: core_1.Input },],
        "weeks": [{ type: core_1.Input },],
        "years": [{ type: core_1.Input },],
    };
    return DxoMinVisualRangeLengthComponent;
}(nested_option_2.NestedOption));
exports.DxoMinVisualRangeLengthComponent = DxoMinVisualRangeLengthComponent;
var DxoMinVisualRangeLengthModule = (function () {
    function DxoMinVisualRangeLengthModule() {
    }
    DxoMinVisualRangeLengthModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMinVisualRangeLengthComponent
                    ],
                    exports: [
                        DxoMinVisualRangeLengthComponent
                    ],
                },] },
    ];
    return DxoMinVisualRangeLengthModule;
}());
exports.DxoMinVisualRangeLengthModule = DxoMinVisualRangeLengthModule;
//# sourceMappingURL=min-visual-range-length.js.map