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
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoShowSubmenuModeComponent = (function (_super) {
    __extends(DxoShowSubmenuModeComponent, _super);
    function DxoShowSubmenuModeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "_optionPath", {
        get: function () {
            return 'showSubmenuMode';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowSubmenuModeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-show-submenu-mode',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoShowSubmenuModeComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoShowSubmenuModeComponent.propDecorators = {
        "delay": [{ type: Input },],
        "name": [{ type: Input },],
    };
    return DxoShowSubmenuModeComponent;
}(NestedOption));
export { DxoShowSubmenuModeComponent };
var DxoShowSubmenuModeModule = (function () {
    function DxoShowSubmenuModeModule() {
    }
    DxoShowSubmenuModeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoShowSubmenuModeComponent
                    ],
                    exports: [
                        DxoShowSubmenuModeComponent
                    ],
                },] },
    ];
    return DxoShowSubmenuModeModule;
}());
export { DxoShowSubmenuModeModule };
//# sourceMappingURL=show-submenu-mode.js.map