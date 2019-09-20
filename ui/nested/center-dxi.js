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
var DxiCenterComponent = (function (_super) {
    __extends(DxiCenterComponent, _super);
    function DxiCenterComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiCenterComponent.prototype, "lat", {
        get: function () {
            return this._getOption('lat');
        },
        set: function (value) {
            this._setOption('lat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiCenterComponent.prototype, "lng", {
        get: function () {
            return this._getOption('lng');
        },
        set: function (value) {
            this._setOption('lng', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiCenterComponent.prototype, "_optionPath", {
        get: function () {
            return 'center';
        },
        enumerable: true,
        configurable: true
    });
    DxiCenterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-center',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiCenterComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiCenterComponent.propDecorators = {
        "lat": [{ type: core_1.Input },],
        "lng": [{ type: core_1.Input },],
    };
    return DxiCenterComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiCenterComponent = DxiCenterComponent;
var DxiCenterModule = (function () {
    function DxiCenterModule() {
    }
    DxiCenterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiCenterComponent
                    ],
                    exports: [
                        DxiCenterComponent
                    ],
                },] },
    ];
    return DxiCenterModule;
}());
exports.DxiCenterModule = DxiCenterModule;
//# sourceMappingURL=center-dxi.js.map