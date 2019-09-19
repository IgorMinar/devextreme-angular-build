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
var DxoLabelComponent = (function (_super) {
    __extends(DxoLabelComponent, _super);
    function DxoLabelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoLabelComponent.prototype, "connectorColor", {
        get: function () {
            return this._getOption('connectorColor');
        },
        set: function (value) {
            this._setOption('connectorColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "connectorWidth", {
        get: function () {
            return this._getOption('connectorWidth');
        },
        set: function (value) {
            this._setOption('connectorWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "font", {
        get: function () {
            return this._getOption('font');
        },
        set: function (value) {
            this._setOption('font', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "indent", {
        get: function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "horizontalAlignment", {
        get: function () {
            return this._getOption('horizontalAlignment');
        },
        set: function (value) {
            this._setOption('horizontalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "verticalAlignment", {
        get: function () {
            return this._getOption('verticalAlignment');
        },
        set: function (value) {
            this._setOption('verticalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "alignment", {
        get: function () {
            return this._getOption('alignment');
        },
        set: function (value) {
            this._setOption('alignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "customizeHint", {
        get: function () {
            return this._getOption('customizeHint');
        },
        set: function (value) {
            this._setOption('customizeHint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "displayMode", {
        get: function () {
            return this._getOption('displayMode');
        },
        set: function (value) {
            this._setOption('displayMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "indentFromAxis", {
        get: function () {
            return this._getOption('indentFromAxis');
        },
        set: function (value) {
            this._setOption('indentFromAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "overlappingBehavior", {
        get: function () {
            return this._getOption('overlappingBehavior');
        },
        set: function (value) {
            this._setOption('overlappingBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "rotationAngle", {
        get: function () {
            return this._getOption('rotationAngle');
        },
        set: function (value) {
            this._setOption('rotationAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "staggeringSpacing", {
        get: function () {
            return this._getOption('staggeringSpacing');
        },
        set: function (value) {
            this._setOption('staggeringSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "textOverflow", {
        get: function () {
            return this._getOption('textOverflow');
        },
        set: function (value) {
            this._setOption('textOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "wordWrap", {
        get: function () {
            return this._getOption('wordWrap');
        },
        set: function (value) {
            this._setOption('wordWrap', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "argumentFormat", {
        get: function () {
            return this._getOption('argumentFormat');
        },
        set: function (value) {
            this._setOption('argumentFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "connector", {
        get: function () {
            return this._getOption('connector');
        },
        set: function (value) {
            this._setOption('connector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "horizontalOffset", {
        get: function () {
            return this._getOption('horizontalOffset');
        },
        set: function (value) {
            this._setOption('horizontalOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "showForZeroValues", {
        get: function () {
            return this._getOption('showForZeroValues');
        },
        set: function (value) {
            this._setOption('showForZeroValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "verticalOffset", {
        get: function () {
            return this._getOption('verticalOffset');
        },
        set: function (value) {
            this._setOption('verticalOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "hideFirstOrLast", {
        get: function () {
            return this._getOption('hideFirstOrLast');
        },
        set: function (value) {
            this._setOption('hideFirstOrLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "indentFromTick", {
        get: function () {
            return this._getOption('indentFromTick');
        },
        set: function (value) {
            this._setOption('indentFromTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "useRangeColors", {
        get: function () {
            return this._getOption('useRangeColors');
        },
        set: function (value) {
            this._setOption('useRangeColors', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "showColon", {
        get: function () {
            return this._getOption('showColon');
        },
        set: function (value) {
            this._setOption('showColon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "radialOffset", {
        get: function () {
            return this._getOption('radialOffset');
        },
        set: function (value) {
            this._setOption('radialOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "shadow", {
        get: function () {
            return this._getOption('shadow');
        },
        set: function (value) {
            this._setOption('shadow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "useNodeColors", {
        get: function () {
            return this._getOption('useNodeColors');
        },
        set: function (value) {
            this._setOption('useNodeColors', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoLabelComponent.prototype, "_optionPath", {
        get: function () {
            return 'label';
        },
        enumerable: true,
        configurable: true
    });
    DxoLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-label',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoLabelComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoLabelComponent.propDecorators = {
        "connectorColor": [{ type: Input },],
        "connectorWidth": [{ type: Input },],
        "customizeText": [{ type: Input },],
        "font": [{ type: Input },],
        "format": [{ type: Input },],
        "indent": [{ type: Input },],
        "visible": [{ type: Input },],
        "horizontalAlignment": [{ type: Input },],
        "position": [{ type: Input },],
        "text": [{ type: Input },],
        "verticalAlignment": [{ type: Input },],
        "alignment": [{ type: Input },],
        "customizeHint": [{ type: Input },],
        "displayMode": [{ type: Input },],
        "indentFromAxis": [{ type: Input },],
        "overlappingBehavior": [{ type: Input },],
        "rotationAngle": [{ type: Input },],
        "staggeringSpacing": [{ type: Input },],
        "textOverflow": [{ type: Input },],
        "wordWrap": [{ type: Input },],
        "argumentFormat": [{ type: Input },],
        "backgroundColor": [{ type: Input },],
        "border": [{ type: Input },],
        "connector": [{ type: Input },],
        "horizontalOffset": [{ type: Input },],
        "showForZeroValues": [{ type: Input },],
        "verticalOffset": [{ type: Input },],
        "hideFirstOrLast": [{ type: Input },],
        "indentFromTick": [{ type: Input },],
        "useRangeColors": [{ type: Input },],
        "location": [{ type: Input },],
        "showColon": [{ type: Input },],
        "radialOffset": [{ type: Input },],
        "topIndent": [{ type: Input },],
        "shadow": [{ type: Input },],
        "useNodeColors": [{ type: Input },],
        "dataField": [{ type: Input },],
        "enabled": [{ type: Input },],
    };
    return DxoLabelComponent;
}(NestedOption));
export { DxoLabelComponent };
var DxoLabelModule = (function () {
    function DxoLabelModule() {
    }
    DxoLabelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoLabelComponent
                    ],
                    exports: [
                        DxoLabelComponent
                    ],
                },] },
    ];
    return DxoLabelModule;
}());
export { DxoLabelModule };
//# sourceMappingURL=label.js.map