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
import { DxiBreakComponent } from './break-dxi';
var DxoScaleComponent = (function (_super) {
    __extends(DxoScaleComponent, _super);
    function DxoScaleComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoScaleComponent.prototype, "allowDecimals", {
        get: function () {
            return this._getOption('allowDecimals');
        },
        set: function (value) {
            this._setOption('allowDecimals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "customMinorTicks", {
        get: function () {
            return this._getOption('customMinorTicks');
        },
        set: function (value) {
            this._setOption('customMinorTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "customTicks", {
        get: function () {
            return this._getOption('customTicks');
        },
        set: function (value) {
            this._setOption('customTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minorTick", {
        get: function () {
            return this._getOption('minorTick');
        },
        set: function (value) {
            this._setOption('minorTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minorTickInterval", {
        get: function () {
            return this._getOption('minorTickInterval');
        },
        set: function (value) {
            this._setOption('minorTickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "scaleDivisionFactor", {
        get: function () {
            return this._getOption('scaleDivisionFactor');
        },
        set: function (value) {
            this._setOption('scaleDivisionFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "tick", {
        get: function () {
            return this._getOption('tick');
        },
        set: function (value) {
            this._setOption('tick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "horizontalOrientation", {
        get: function () {
            return this._getOption('horizontalOrientation');
        },
        set: function (value) {
            this._setOption('horizontalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "verticalOrientation", {
        get: function () {
            return this._getOption('verticalOrientation');
        },
        set: function (value) {
            this._setOption('verticalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "aggregationGroupWidth", {
        get: function () {
            return this._getOption('aggregationGroupWidth');
        },
        set: function (value) {
            this._setOption('aggregationGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "aggregationInterval", {
        get: function () {
            return this._getOption('aggregationInterval');
        },
        set: function (value) {
            this._setOption('aggregationInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "breaks", {
        get: function () {
            return this._getOption('breaks');
        },
        set: function (value) {
            this._setOption('breaks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "breakStyle", {
        get: function () {
            return this._getOption('breakStyle');
        },
        set: function (value) {
            this._setOption('breakStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "categories", {
        get: function () {
            return this._getOption('categories');
        },
        set: function (value) {
            this._setOption('categories', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "endOnTick", {
        get: function () {
            return this._getOption('endOnTick');
        },
        set: function (value) {
            this._setOption('endOnTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "holidays", {
        get: function () {
            return this._getOption('holidays');
        },
        set: function (value) {
            this._setOption('holidays', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "logarithmBase", {
        get: function () {
            return this._getOption('logarithmBase');
        },
        set: function (value) {
            this._setOption('logarithmBase', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "marker", {
        get: function () {
            return this._getOption('marker');
        },
        set: function (value) {
            this._setOption('marker', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "maxRange", {
        get: function () {
            return this._getOption('maxRange');
        },
        set: function (value) {
            this._setOption('maxRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minorTickCount", {
        get: function () {
            return this._getOption('minorTickCount');
        },
        set: function (value) {
            this._setOption('minorTickCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minRange", {
        get: function () {
            return this._getOption('minRange');
        },
        set: function (value) {
            this._setOption('minRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "placeholderHeight", {
        get: function () {
            return this._getOption('placeholderHeight');
        },
        set: function (value) {
            this._setOption('placeholderHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "showCustomBoundaryTicks", {
        get: function () {
            return this._getOption('showCustomBoundaryTicks');
        },
        set: function (value) {
            this._setOption('showCustomBoundaryTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "singleWorkdays", {
        get: function () {
            return this._getOption('singleWorkdays');
        },
        set: function (value) {
            this._setOption('singleWorkdays', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "valueType", {
        get: function () {
            return this._getOption('valueType');
        },
        set: function (value) {
            this._setOption('valueType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "workdaysOnly", {
        get: function () {
            return this._getOption('workdaysOnly');
        },
        set: function (value) {
            this._setOption('workdaysOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "workWeek", {
        get: function () {
            return this._getOption('workWeek');
        },
        set: function (value) {
            this._setOption('workWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "_optionPath", {
        get: function () {
            return 'scale';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "breaksChildren", {
        get: function () {
            return this._getOption('breaks');
        },
        set: function (value) {
            this.setChildren('breaks', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoScaleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-scale',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoScaleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoScaleComponent.propDecorators = {
        "allowDecimals": [{ type: Input },],
        "customMinorTicks": [{ type: Input },],
        "customTicks": [{ type: Input },],
        "endValue": [{ type: Input },],
        "label": [{ type: Input },],
        "minorTick": [{ type: Input },],
        "minorTickInterval": [{ type: Input },],
        "orientation": [{ type: Input },],
        "scaleDivisionFactor": [{ type: Input },],
        "startValue": [{ type: Input },],
        "tick": [{ type: Input },],
        "tickInterval": [{ type: Input },],
        "horizontalOrientation": [{ type: Input },],
        "verticalOrientation": [{ type: Input },],
        "aggregationGroupWidth": [{ type: Input },],
        "aggregationInterval": [{ type: Input },],
        "breaks": [{ type: Input },],
        "breakStyle": [{ type: Input },],
        "categories": [{ type: Input },],
        "endOnTick": [{ type: Input },],
        "holidays": [{ type: Input },],
        "logarithmBase": [{ type: Input },],
        "marker": [{ type: Input },],
        "maxRange": [{ type: Input },],
        "minorTickCount": [{ type: Input },],
        "minRange": [{ type: Input },],
        "placeholderHeight": [{ type: Input },],
        "showCustomBoundaryTicks": [{ type: Input },],
        "singleWorkdays": [{ type: Input },],
        "type": [{ type: Input },],
        "valueType": [{ type: Input },],
        "workdaysOnly": [{ type: Input },],
        "workWeek": [{ type: Input },],
        "breaksChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiBreakComponent; }),] },],
    };
    return DxoScaleComponent;
}(NestedOption));
export { DxoScaleComponent };
var DxoScaleModule = (function () {
    function DxoScaleModule() {
    }
    DxoScaleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoScaleComponent
                    ],
                    exports: [
                        DxoScaleComponent
                    ],
                },] },
    ];
    return DxoScaleModule;
}());
export { DxoScaleModule };
//# sourceMappingURL=scale.js.map