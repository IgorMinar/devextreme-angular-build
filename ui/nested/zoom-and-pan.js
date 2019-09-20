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
var DxoZoomAndPanComponent = (function (_super) {
    __extends(DxoZoomAndPanComponent, _super);
    function DxoZoomAndPanComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "allowMouseWheel", {
        get: function () {
            return this._getOption('allowMouseWheel');
        },
        set: function (value) {
            this._setOption('allowMouseWheel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "allowTouchGestures", {
        get: function () {
            return this._getOption('allowTouchGestures');
        },
        set: function (value) {
            this._setOption('allowTouchGestures', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "argumentAxis", {
        get: function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "dragBoxStyle", {
        get: function () {
            return this._getOption('dragBoxStyle');
        },
        set: function (value) {
            this._setOption('dragBoxStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "dragToZoom", {
        get: function () {
            return this._getOption('dragToZoom');
        },
        set: function (value) {
            this._setOption('dragToZoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "panKey", {
        get: function () {
            return this._getOption('panKey');
        },
        set: function (value) {
            this._setOption('panKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoZoomAndPanComponent.prototype, "_optionPath", {
        get: function () {
            return 'zoomAndPan';
        },
        enumerable: true,
        configurable: true
    });
    DxoZoomAndPanComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-zoom-and-pan',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoZoomAndPanComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoZoomAndPanComponent.propDecorators = {
        "allowMouseWheel": [{ type: core_1.Input },],
        "allowTouchGestures": [{ type: core_1.Input },],
        "argumentAxis": [{ type: core_1.Input },],
        "dragBoxStyle": [{ type: core_1.Input },],
        "dragToZoom": [{ type: core_1.Input },],
        "panKey": [{ type: core_1.Input },],
        "valueAxis": [{ type: core_1.Input },],
    };
    return DxoZoomAndPanComponent;
}(nested_option_2.NestedOption));
exports.DxoZoomAndPanComponent = DxoZoomAndPanComponent;
var DxoZoomAndPanModule = (function () {
    function DxoZoomAndPanModule() {
    }
    DxoZoomAndPanModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoZoomAndPanComponent
                    ],
                    exports: [
                        DxoZoomAndPanComponent
                    ],
                },] },
    ];
    return DxoZoomAndPanModule;
}());
exports.DxoZoomAndPanModule = DxoZoomAndPanModule;
//# sourceMappingURL=zoom-and-pan.js.map