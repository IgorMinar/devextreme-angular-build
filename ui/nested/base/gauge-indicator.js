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
import { NestedOption } from '../../../core/nested-option';
var DxoGaugeIndicator = (function (_super) {
    __extends(DxoGaugeIndicator, _super);
    function DxoGaugeIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoGaugeIndicator.prototype, "arrowLength", {
        get: function () {
            return this._getOption('arrowLength');
        },
        set: function (value) {
            this._setOption('arrowLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "baseValue", {
        get: function () {
            return this._getOption('baseValue');
        },
        set: function (value) {
            this._setOption('baseValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "beginAdaptingAtRadius", {
        get: function () {
            return this._getOption('beginAdaptingAtRadius');
        },
        set: function (value) {
            this._setOption('beginAdaptingAtRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "horizontalOrientation", {
        get: function () {
            return this._getOption('horizontalOrientation');
        },
        set: function (value) {
            this._setOption('horizontalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "indentFromCenter", {
        get: function () {
            return this._getOption('indentFromCenter');
        },
        set: function (value) {
            this._setOption('indentFromCenter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "length", {
        get: function () {
            return this._getOption('length');
        },
        set: function (value) {
            this._setOption('length', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "secondColor", {
        get: function () {
            return this._getOption('secondColor');
        },
        set: function (value) {
            this._setOption('secondColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "secondFraction", {
        get: function () {
            return this._getOption('secondFraction');
        },
        set: function (value) {
            this._setOption('secondFraction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "spindleGapSize", {
        get: function () {
            return this._getOption('spindleGapSize');
        },
        set: function (value) {
            this._setOption('spindleGapSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "spindleSize", {
        get: function () {
            return this._getOption('spindleSize');
        },
        set: function (value) {
            this._setOption('spindleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "verticalOrientation", {
        get: function () {
            return this._getOption('verticalOrientation');
        },
        set: function (value) {
            this._setOption('verticalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGaugeIndicator.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoGaugeIndicator;
}(NestedOption));
export { DxoGaugeIndicator };
//# sourceMappingURL=gauge-indicator.js.map