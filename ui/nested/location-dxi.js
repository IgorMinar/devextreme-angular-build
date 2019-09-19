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
var DxiLocationComponent = (function (_super) {
    __extends(DxiLocationComponent, _super);
    function DxiLocationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiLocationComponent.prototype, "lat", {
        get: function () {
            return this._getOption('lat');
        },
        set: function (value) {
            this._setOption('lat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "lng", {
        get: function () {
            return this._getOption('lng');
        },
        set: function (value) {
            this._setOption('lng', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "col", {
        get: function () {
            return this._getOption('col');
        },
        set: function (value) {
            this._setOption('col', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "colspan", {
        get: function () {
            return this._getOption('colspan');
        },
        set: function (value) {
            this._setOption('colspan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "row", {
        get: function () {
            return this._getOption('row');
        },
        set: function (value) {
            this._setOption('row', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "rowspan", {
        get: function () {
            return this._getOption('rowspan');
        },
        set: function (value) {
            this._setOption('rowspan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "screen", {
        get: function () {
            return this._getOption('screen');
        },
        set: function (value) {
            this._setOption('screen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "_optionPath", {
        get: function () {
            return 'location';
        },
        enumerable: true,
        configurable: true
    });
    DxiLocationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-location',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiLocationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiLocationComponent.propDecorators = {
        "lat": [{ type: Input },],
        "lng": [{ type: Input },],
        "col": [{ type: Input },],
        "colspan": [{ type: Input },],
        "row": [{ type: Input },],
        "rowspan": [{ type: Input },],
        "screen": [{ type: Input },],
    };
    return DxiLocationComponent;
}(CollectionNestedOption));
export { DxiLocationComponent };
var DxiLocationModule = (function () {
    function DxiLocationModule() {
    }
    DxiLocationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiLocationComponent
                    ],
                    exports: [
                        DxiLocationComponent
                    ],
                },] },
    ];
    return DxiLocationModule;
}());
export { DxiLocationModule };
//# sourceMappingURL=location-dxi.js.map