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
var DxoHideEventComponent = (function (_super) {
    __extends(DxoHideEventComponent, _super);
    function DxoHideEventComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHideEventComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHideEventComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHideEventComponent.prototype, "_optionPath", {
        get: function () {
            return 'hideEvent';
        },
        enumerable: true,
        configurable: true
    });
    DxoHideEventComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-hide-event',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoHideEventComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoHideEventComponent.propDecorators = {
        "delay": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
    };
    return DxoHideEventComponent;
}(nested_option_2.NestedOption));
exports.DxoHideEventComponent = DxoHideEventComponent;
var DxoHideEventModule = (function () {
    function DxoHideEventModule() {
    }
    DxoHideEventModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoHideEventComponent
                    ],
                    exports: [
                        DxoHideEventComponent
                    ],
                },] },
    ];
    return DxoHideEventModule;
}());
exports.DxoHideEventModule = DxoHideEventModule;
//# sourceMappingURL=hide-event.js.map