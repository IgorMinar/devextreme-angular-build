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
var DxoLegendComponent = (function (_super) {
    __extends(DxoLegendComponent, _super);
    function DxoLegendComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLegendComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "columnCount", {
        get: function () {
            return this._getOption('columnCount');
        },
        set: function (value) {
            this._setOption('columnCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "columnItemSpacing", {
        get: function () {
            return this._getOption('columnItemSpacing');
        },
        set: function (value) {
            this._setOption('columnItemSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "customizeHint", {
        get: function () {
            return this._getOption('customizeHint');
        },
        set: function (value) {
            this._setOption('customizeHint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "customizeItems", {
        get: function () {
            return this._getOption('customizeItems');
        },
        set: function (value) {
            this._setOption('customizeItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "horizontalAlignment", {
        get: function () {
            return this._getOption('horizontalAlignment');
        },
        set: function (value) {
            this._setOption('horizontalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "itemsAlignment", {
        get: function () {
            return this._getOption('itemsAlignment');
        },
        set: function (value) {
            this._setOption('itemsAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "itemTextFormat", {
        get: function () {
            return this._getOption('itemTextFormat');
        },
        set: function (value) {
            this._setOption('itemTextFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "itemTextPosition", {
        get: function () {
            return this._getOption('itemTextPosition');
        },
        set: function (value) {
            this._setOption('itemTextPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "markerSize", {
        get: function () {
            return this._getOption('markerSize');
        },
        set: function (value) {
            this._setOption('markerSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "rowCount", {
        get: function () {
            return this._getOption('rowCount');
        },
        set: function (value) {
            this._setOption('rowCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "rowItemSpacing", {
        get: function () {
            return this._getOption('rowItemSpacing');
        },
        set: function (value) {
            this._setOption('rowItemSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "verticalAlignment", {
        get: function () {
            return this._getOption('verticalAlignment');
        },
        set: function (value) {
            this._setOption('verticalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "hoverMode", {
        get: function () {
            return this._getOption('hoverMode');
        },
        set: function (value) {
            this._setOption('hoverMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLegendComponent.prototype, "_optionPath", {
        get: function () {
            return 'legend';
        },
        enumerable: true,
        configurable: true
    });
    DxoLegendComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-legend',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLegendComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoLegendComponent.propDecorators = {
        "backgroundColor": [{ type: Input },],
        "border": [{ type: Input },],
        "columnCount": [{ type: Input },],
        "columnItemSpacing": [{ type: Input },],
        "customizeHint": [{ type: Input },],
        "customizeItems": [{ type: Input },],
        "customizeText": [{ type: Input },],
        "font": [{ type: Input },],
        "horizontalAlignment": [{ type: Input },],
        "itemsAlignment": [{ type: Input },],
        "itemTextFormat": [{ type: Input },],
        "itemTextPosition": [{ type: Input },],
        "margin": [{ type: Input },],
        "markerSize": [{ type: Input },],
        "orientation": [{ type: Input },],
        "paddingLeftRight": [{ type: Input },],
        "paddingTopBottom": [{ type: Input },],
        "rowCount": [{ type: Input },],
        "rowItemSpacing": [{ type: Input },],
        "title": [{ type: Input },],
        "verticalAlignment": [{ type: Input },],
        "visible": [{ type: Input },],
        "hoverMode": [{ type: Input },],
        "position": [{ type: Input },],
    };
    return DxoLegendComponent;
}(NestedOption));
export { DxoLegendComponent };
var DxoLegendModule = (function () {
    function DxoLegendModule() {
    }
    DxoLegendModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoLegendComponent
                    ],
                    exports: [
                        DxoLegendComponent
                    ],
                },] },
    ];
    return DxoLegendModule;
}());
export { DxoLegendModule };
//# sourceMappingURL=legend.js.map