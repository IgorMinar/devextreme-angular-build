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
import { CollectionNestedOption } from '../../core/nested-option';
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
        { type: Component, args: [{
                    selector: 'dxi-center',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiCenterComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiCenterComponent.propDecorators = {
        "lat": [{ type: Input },],
        "lng": [{ type: Input },],
    };
    return DxiCenterComponent;
}(CollectionNestedOption));
export { DxiCenterComponent };
var DxiCenterModule = (function () {
    function DxiCenterModule() {
    }
    DxiCenterModule.decorators = [
        { type: NgModule, args: [{
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
export { DxiCenterModule };
//# sourceMappingURL=center-dxi.js.map