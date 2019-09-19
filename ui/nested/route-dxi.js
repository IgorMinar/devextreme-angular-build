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
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiLocationComponent } from './location-dxi';
var DxiRouteComponent = (function (_super) {
    __extends(DxiRouteComponent, _super);
    function DxiRouteComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiRouteComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "locations", {
        get: function () {
            return this._getOption('locations');
        },
        set: function (value) {
            this._setOption('locations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "weight", {
        get: function () {
            return this._getOption('weight');
        },
        set: function (value) {
            this._setOption('weight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "_optionPath", {
        get: function () {
            return 'routes';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "locationsChildren", {
        get: function () {
            return this._getOption('locations');
        },
        set: function (value) {
            this.setChildren('locations', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiRouteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-route',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiRouteComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiRouteComponent.propDecorators = {
        "color": [{ type: Input },],
        "locations": [{ type: Input },],
        "mode": [{ type: Input },],
        "opacity": [{ type: Input },],
        "weight": [{ type: Input },],
        "locationsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiLocationComponent; }),] },],
    };
    return DxiRouteComponent;
}(CollectionNestedOption));
export { DxiRouteComponent };
var DxiRouteModule = (function () {
    function DxiRouteModule() {
    }
    DxiRouteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiRouteComponent
                    ],
                    exports: [
                        DxiRouteComponent
                    ],
                },] },
    ];
    return DxiRouteModule;
}());
export { DxiRouteModule };
//# sourceMappingURL=route-dxi.js.map