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
var DxiLayerComponent = (function (_super) {
    __extends(DxiLayerComponent, _super);
    function DxiLayerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiLayerComponent.prototype, "borderColor", {
        get: function () {
            return this._getOption('borderColor');
        },
        set: function (value) {
            this._setOption('borderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "borderWidth", {
        get: function () {
            return this._getOption('borderWidth');
        },
        set: function (value) {
            this._setOption('borderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "colorGroupingField", {
        get: function () {
            return this._getOption('colorGroupingField');
        },
        set: function (value) {
            this._setOption('colorGroupingField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "colorGroups", {
        get: function () {
            return this._getOption('colorGroups');
        },
        set: function (value) {
            this._setOption('colorGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "customize", {
        get: function () {
            return this._getOption('customize');
        },
        set: function (value) {
            this._setOption('customize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "elementType", {
        get: function () {
            return this._getOption('elementType');
        },
        set: function (value) {
            this._setOption('elementType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoveredBorderColor", {
        get: function () {
            return this._getOption('hoveredBorderColor');
        },
        set: function (value) {
            this._setOption('hoveredBorderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoveredBorderWidth", {
        get: function () {
            return this._getOption('hoveredBorderWidth');
        },
        set: function (value) {
            this._setOption('hoveredBorderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoveredColor", {
        get: function () {
            return this._getOption('hoveredColor');
        },
        set: function (value) {
            this._setOption('hoveredColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoverEnabled", {
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "maxSize", {
        get: function () {
            return this._getOption('maxSize');
        },
        set: function (value) {
            this._setOption('maxSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "minSize", {
        get: function () {
            return this._getOption('minSize');
        },
        set: function (value) {
            this._setOption('minSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "paletteSize", {
        get: function () {
            return this._getOption('paletteSize');
        },
        set: function (value) {
            this._setOption('paletteSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectedBorderColor", {
        get: function () {
            return this._getOption('selectedBorderColor');
        },
        set: function (value) {
            this._setOption('selectedBorderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectedBorderWidth", {
        get: function () {
            return this._getOption('selectedBorderWidth');
        },
        set: function (value) {
            this._setOption('selectedBorderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectedColor", {
        get: function () {
            return this._getOption('selectedColor');
        },
        set: function (value) {
            this._setOption('selectedColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "sizeGroupingField", {
        get: function () {
            return this._getOption('sizeGroupingField');
        },
        set: function (value) {
            this._setOption('sizeGroupingField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "sizeGroups", {
        get: function () {
            return this._getOption('sizeGroups');
        },
        set: function (value) {
            this._setOption('sizeGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "_optionPath", {
        get: function () {
            return 'layers';
        },
        enumerable: true,
        configurable: true
    });
    DxiLayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-layer',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiLayerComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiLayerComponent.propDecorators = {
        "borderColor": [{ type: Input },],
        "borderWidth": [{ type: Input },],
        "color": [{ type: Input },],
        "colorGroupingField": [{ type: Input },],
        "colorGroups": [{ type: Input },],
        "customize": [{ type: Input },],
        "dataField": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "elementType": [{ type: Input },],
        "hoveredBorderColor": [{ type: Input },],
        "hoveredBorderWidth": [{ type: Input },],
        "hoveredColor": [{ type: Input },],
        "hoverEnabled": [{ type: Input },],
        "label": [{ type: Input },],
        "maxSize": [{ type: Input },],
        "minSize": [{ type: Input },],
        "name": [{ type: Input },],
        "opacity": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteSize": [{ type: Input },],
        "selectedBorderColor": [{ type: Input },],
        "selectedBorderWidth": [{ type: Input },],
        "selectedColor": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "size": [{ type: Input },],
        "sizeGroupingField": [{ type: Input },],
        "sizeGroups": [{ type: Input },],
        "type": [{ type: Input },],
    };
    return DxiLayerComponent;
}(CollectionNestedOption));
export { DxiLayerComponent };
var DxiLayerModule = (function () {
    function DxiLayerModule() {
    }
    DxiLayerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiLayerComponent
                    ],
                    exports: [
                        DxiLayerComponent
                    ],
                },] },
    ];
    return DxiLayerModule;
}());
export { DxiLayerModule };
//# sourceMappingURL=layer-dxi.js.map