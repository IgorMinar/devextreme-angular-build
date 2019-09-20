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
var location_dxi_1 = require("./location-dxi");
var DxiMarkerComponent = (function (_super) {
    __extends(DxiMarkerComponent, _super);
    function DxiMarkerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiMarkerComponent.prototype, "iconSrc", {
        get: function () {
            return this._getOption('iconSrc');
        },
        set: function (value) {
            this._setOption('iconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "onClick", {
        get: function () {
            return this._getOption('onClick');
        },
        set: function (value) {
            this._setOption('onClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "_optionPath", {
        get: function () {
            return 'markers';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "locationChildren", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this.setChildren('location', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiMarkerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-marker',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiMarkerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiMarkerComponent.propDecorators = {
        "iconSrc": [{ type: core_1.Input },],
        "location": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "locationChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return location_dxi_1.DxiLocationComponent; }),] },],
    };
    return DxiMarkerComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiMarkerComponent = DxiMarkerComponent;
var DxiMarkerModule = (function () {
    function DxiMarkerModule() {
    }
    DxiMarkerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiMarkerComponent
                    ],
                    exports: [
                        DxiMarkerComponent
                    ],
                },] },
    ];
    return DxiMarkerModule;
}());
exports.DxiMarkerModule = DxiMarkerModule;
//# sourceMappingURL=marker-dxi.js.map