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
import { NestedOption } from '../../core/nested-option';
import { DxiRangeComponent } from './range-dxi';
var DxoRangeContainerComponent = (function (_super) {
    __extends(DxoRangeContainerComponent, _super);
    function DxoRangeContainerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoRangeContainerComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "paletteExtensionMode", {
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "ranges", {
        get: function () {
            return this._getOption('ranges');
        },
        set: function (value) {
            this._setOption('ranges', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "horizontalOrientation", {
        get: function () {
            return this._getOption('horizontalOrientation');
        },
        set: function (value) {
            this._setOption('horizontalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "verticalOrientation", {
        get: function () {
            return this._getOption('verticalOrientation');
        },
        set: function (value) {
            this._setOption('verticalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "_optionPath", {
        get: function () {
            return 'rangeContainer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoRangeContainerComponent.prototype, "rangesChildren", {
        get: function () {
            return this._getOption('ranges');
        },
        set: function (value) {
            this.setChildren('ranges', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoRangeContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-range-container',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoRangeContainerComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoRangeContainerComponent.propDecorators = {
        "backgroundColor": [{ type: Input },],
        "offset": [{ type: Input },],
        "orientation": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteExtensionMode": [{ type: Input },],
        "ranges": [{ type: Input },],
        "width": [{ type: Input },],
        "horizontalOrientation": [{ type: Input },],
        "verticalOrientation": [{ type: Input },],
        "rangesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiRangeComponent; }),] },],
    };
    return DxoRangeContainerComponent;
}(NestedOption));
export { DxoRangeContainerComponent };
var DxoRangeContainerModule = (function () {
    function DxoRangeContainerModule() {
    }
    DxoRangeContainerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoRangeContainerComponent
                    ],
                    exports: [
                        DxoRangeContainerComponent
                    ],
                },] },
    ];
    return DxoRangeContainerModule;
}());
export { DxoRangeContainerModule };
//# sourceMappingURL=range-container.js.map