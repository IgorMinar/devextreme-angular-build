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
var DxiMenuItemComponent = (function (_super) {
    __extends(DxiMenuItemComponent, _super);
    function DxiMenuItemComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiMenuItemComponent.prototype, "action", {
        get: function () {
            return this._getOption('action');
        },
        set: function (value) {
            this._setOption('action', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMenuItemComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMenuItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'menuItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiMenuItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-menu-item',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiMenuItemComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiMenuItemComponent.propDecorators = {
        "action": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
    };
    return DxiMenuItemComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiMenuItemComponent = DxiMenuItemComponent;
var DxiMenuItemModule = (function () {
    function DxiMenuItemModule() {
    }
    DxiMenuItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiMenuItemComponent
                    ],
                    exports: [
                        DxiMenuItemComponent
                    ],
                },] },
    ];
    return DxiMenuItemModule;
}());
exports.DxiMenuItemModule = DxiMenuItemModule;
//# sourceMappingURL=menu-item-dxi.js.map