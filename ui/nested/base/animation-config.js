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
var DxoAnimationConfig = (function (_super) {
    __extends(DxoAnimationConfig, _super);
    function DxoAnimationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoAnimationConfig.prototype, "duration", {
        get: function () {
            return this._getOption('duration');
        },
        set: function (value) {
            this._setOption('duration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "easing", {
        get: function () {
            return this._getOption('easing');
        },
        set: function (value) {
            this._setOption('easing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "maxPointCountSupported", {
        get: function () {
            return this._getOption('maxPointCountSupported');
        },
        set: function (value) {
            this._setOption('maxPointCountSupported', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "hide", {
        get: function () {
            return this._getOption('hide');
        },
        set: function (value) {
            this._setOption('hide', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "show", {
        get: function () {
            return this._getOption('show');
        },
        set: function (value) {
            this._setOption('show', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "complete", {
        get: function () {
            return this._getOption('complete');
        },
        set: function (value) {
            this._setOption('complete', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "direction", {
        get: function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "from", {
        get: function () {
            return this._getOption('from');
        },
        set: function (value) {
            this._setOption('from', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "staggerDelay", {
        get: function () {
            return this._getOption('staggerDelay');
        },
        set: function (value) {
            this._setOption('staggerDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "start", {
        get: function () {
            return this._getOption('start');
        },
        set: function (value) {
            this._setOption('start', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "to", {
        get: function () {
            return this._getOption('to');
        },
        set: function (value) {
            this._setOption('to', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAnimationConfig.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoAnimationConfig;
}(NestedOption));
export { DxoAnimationConfig };
//# sourceMappingURL=animation-config.js.map