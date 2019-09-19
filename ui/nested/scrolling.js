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
var DxoScrollingComponent = (function (_super) {
    __extends(DxoScrollingComponent, _super);
    function DxoScrollingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoScrollingComponent.prototype, "columnRenderingMode", {
        get: function () {
            return this._getOption('columnRenderingMode');
        },
        set: function (value) {
            this._setOption('columnRenderingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "preloadEnabled", {
        get: function () {
            return this._getOption('preloadEnabled');
        },
        set: function (value) {
            this._setOption('preloadEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "rowRenderingMode", {
        get: function () {
            return this._getOption('rowRenderingMode');
        },
        set: function (value) {
            this._setOption('rowRenderingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "scrollByContent", {
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "scrollByThumb", {
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "showScrollbar", {
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "useNative", {
        get: function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollingComponent.prototype, "_optionPath", {
        get: function () {
            return 'scrolling';
        },
        enumerable: true,
        configurable: true
    });
    DxoScrollingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-scrolling',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoScrollingComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoScrollingComponent.propDecorators = {
        "columnRenderingMode": [{ type: Input },],
        "mode": [{ type: Input },],
        "preloadEnabled": [{ type: Input },],
        "rowRenderingMode": [{ type: Input },],
        "scrollByContent": [{ type: Input },],
        "scrollByThumb": [{ type: Input },],
        "showScrollbar": [{ type: Input },],
        "useNative": [{ type: Input },],
    };
    return DxoScrollingComponent;
}(NestedOption));
export { DxoScrollingComponent };
var DxoScrollingModule = (function () {
    function DxoScrollingModule() {
    }
    DxoScrollingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoScrollingComponent
                    ],
                    exports: [
                        DxoScrollingComponent
                    ],
                },] },
    ];
    return DxoScrollingModule;
}());
export { DxoScrollingModule };
//# sourceMappingURL=scrolling.js.map