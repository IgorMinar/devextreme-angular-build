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
import { Component, NgModule, Host, SkipSelf, Input, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiBreakComponent } from './break-dxi';
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
var DxoArgumentAxisComponent = (function (_super) {
    __extends(DxoArgumentAxisComponent, _super);
    function DxoArgumentAxisComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'visualRangeChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "aggregationGroupWidth", {
        get: function () {
            return this._getOption('aggregationGroupWidth');
        },
        set: function (value) {
            this._setOption('aggregationGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "aggregationInterval", {
        get: function () {
            return this._getOption('aggregationInterval');
        },
        set: function (value) {
            this._setOption('aggregationInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "allowDecimals", {
        get: function () {
            return this._getOption('allowDecimals');
        },
        set: function (value) {
            this._setOption('allowDecimals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "argumentType", {
        get: function () {
            return this._getOption('argumentType');
        },
        set: function (value) {
            this._setOption('argumentType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "axisDivisionFactor", {
        get: function () {
            return this._getOption('axisDivisionFactor');
        },
        set: function (value) {
            this._setOption('axisDivisionFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "breaks", {
        get: function () {
            return this._getOption('breaks');
        },
        set: function (value) {
            this._setOption('breaks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "breakStyle", {
        get: function () {
            return this._getOption('breakStyle');
        },
        set: function (value) {
            this._setOption('breakStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "categories", {
        get: function () {
            return this._getOption('categories');
        },
        set: function (value) {
            this._setOption('categories', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "constantLines", {
        get: function () {
            return this._getOption('constantLines');
        },
        set: function (value) {
            this._setOption('constantLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "constantLineStyle", {
        get: function () {
            return this._getOption('constantLineStyle');
        },
        set: function (value) {
            this._setOption('constantLineStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "discreteAxisDivisionMode", {
        get: function () {
            return this._getOption('discreteAxisDivisionMode');
        },
        set: function (value) {
            this._setOption('discreteAxisDivisionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "endOnTick", {
        get: function () {
            return this._getOption('endOnTick');
        },
        set: function (value) {
            this._setOption('endOnTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "grid", {
        get: function () {
            return this._getOption('grid');
        },
        set: function (value) {
            this._setOption('grid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "holidays", {
        get: function () {
            return this._getOption('holidays');
        },
        set: function (value) {
            this._setOption('holidays', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "hoverMode", {
        get: function () {
            return this._getOption('hoverMode');
        },
        set: function (value) {
            this._setOption('hoverMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "inverted", {
        get: function () {
            return this._getOption('inverted');
        },
        set: function (value) {
            this._setOption('inverted', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "logarithmBase", {
        get: function () {
            return this._getOption('logarithmBase');
        },
        set: function (value) {
            this._setOption('logarithmBase', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "maxValueMargin", {
        get: function () {
            return this._getOption('maxValueMargin');
        },
        set: function (value) {
            this._setOption('maxValueMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "minorGrid", {
        get: function () {
            return this._getOption('minorGrid');
        },
        set: function (value) {
            this._setOption('minorGrid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "minorTick", {
        get: function () {
            return this._getOption('minorTick');
        },
        set: function (value) {
            this._setOption('minorTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "minorTickCount", {
        get: function () {
            return this._getOption('minorTickCount');
        },
        set: function (value) {
            this._setOption('minorTickCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "minorTickInterval", {
        get: function () {
            return this._getOption('minorTickInterval');
        },
        set: function (value) {
            this._setOption('minorTickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "minValueMargin", {
        get: function () {
            return this._getOption('minValueMargin');
        },
        set: function (value) {
            this._setOption('minValueMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "minVisualRangeLength", {
        get: function () {
            return this._getOption('minVisualRangeLength');
        },
        set: function (value) {
            this._setOption('minVisualRangeLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "placeholderSize", {
        get: function () {
            return this._getOption('placeholderSize');
        },
        set: function (value) {
            this._setOption('placeholderSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "singleWorkdays", {
        get: function () {
            return this._getOption('singleWorkdays');
        },
        set: function (value) {
            this._setOption('singleWorkdays', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "strips", {
        get: function () {
            return this._getOption('strips');
        },
        set: function (value) {
            this._setOption('strips', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "stripStyle", {
        get: function () {
            return this._getOption('stripStyle');
        },
        set: function (value) {
            this._setOption('stripStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "tick", {
        get: function () {
            return this._getOption('tick');
        },
        set: function (value) {
            this._setOption('tick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "valueMarginsEnabled", {
        get: function () {
            return this._getOption('valueMarginsEnabled');
        },
        set: function (value) {
            this._setOption('valueMarginsEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "visualRange", {
        get: function () {
            return this._getOption('visualRange');
        },
        set: function (value) {
            this._setOption('visualRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "visualRangeUpdateMode", {
        get: function () {
            return this._getOption('visualRangeUpdateMode');
        },
        set: function (value) {
            this._setOption('visualRangeUpdateMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "wholeRange", {
        get: function () {
            return this._getOption('wholeRange');
        },
        set: function (value) {
            this._setOption('wholeRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "workdaysOnly", {
        get: function () {
            return this._getOption('workdaysOnly');
        },
        set: function (value) {
            this._setOption('workdaysOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "workWeek", {
        get: function () {
            return this._getOption('workWeek');
        },
        set: function (value) {
            this._setOption('workWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "firstPointOnStartAngle", {
        get: function () {
            return this._getOption('firstPointOnStartAngle');
        },
        set: function (value) {
            this._setOption('firstPointOnStartAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "originValue", {
        get: function () {
            return this._getOption('originValue');
        },
        set: function (value) {
            this._setOption('originValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "period", {
        get: function () {
            return this._getOption('period');
        },
        set: function (value) {
            this._setOption('period', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "startAngle", {
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "_optionPath", {
        get: function () {
            return 'argumentAxis';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "breaksChildren", {
        get: function () {
            return this._getOption('breaks');
        },
        set: function (value) {
            this.setChildren('breaks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "constantLinesChildren", {
        get: function () {
            return this._getOption('constantLines');
        },
        set: function (value) {
            this.setChildren('constantLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoArgumentAxisComponent.prototype, "stripsChildren", {
        get: function () {
            return this._getOption('strips');
        },
        set: function (value) {
            this.setChildren('strips', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoArgumentAxisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-argument-axis',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoArgumentAxisComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoArgumentAxisComponent.propDecorators = {
        "aggregationGroupWidth": [{ type: Input },],
        "aggregationInterval": [{ type: Input },],
        "allowDecimals": [{ type: Input },],
        "argumentType": [{ type: Input },],
        "axisDivisionFactor": [{ type: Input },],
        "breaks": [{ type: Input },],
        "breakStyle": [{ type: Input },],
        "categories": [{ type: Input },],
        "color": [{ type: Input },],
        "constantLines": [{ type: Input },],
        "constantLineStyle": [{ type: Input },],
        "discreteAxisDivisionMode": [{ type: Input },],
        "endOnTick": [{ type: Input },],
        "grid": [{ type: Input },],
        "holidays": [{ type: Input },],
        "hoverMode": [{ type: Input },],
        "inverted": [{ type: Input },],
        "label": [{ type: Input },],
        "logarithmBase": [{ type: Input },],
        "max": [{ type: Input },],
        "maxValueMargin": [{ type: Input },],
        "min": [{ type: Input },],
        "minorGrid": [{ type: Input },],
        "minorTick": [{ type: Input },],
        "minorTickCount": [{ type: Input },],
        "minorTickInterval": [{ type: Input },],
        "minValueMargin": [{ type: Input },],
        "minVisualRangeLength": [{ type: Input },],
        "opacity": [{ type: Input },],
        "placeholderSize": [{ type: Input },],
        "position": [{ type: Input },],
        "singleWorkdays": [{ type: Input },],
        "strips": [{ type: Input },],
        "stripStyle": [{ type: Input },],
        "tick": [{ type: Input },],
        "tickInterval": [{ type: Input },],
        "title": [{ type: Input },],
        "type": [{ type: Input },],
        "valueMarginsEnabled": [{ type: Input },],
        "visible": [{ type: Input },],
        "visualRange": [{ type: Input },],
        "visualRangeUpdateMode": [{ type: Input },],
        "wholeRange": [{ type: Input },],
        "width": [{ type: Input },],
        "workdaysOnly": [{ type: Input },],
        "workWeek": [{ type: Input },],
        "firstPointOnStartAngle": [{ type: Input },],
        "originValue": [{ type: Input },],
        "period": [{ type: Input },],
        "startAngle": [{ type: Input },],
        "visualRangeChange": [{ type: Output },],
        "breaksChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiBreakComponent; }),] },],
        "constantLinesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiConstantLineComponent; }),] },],
        "stripsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiStripComponent; }),] },],
    };
    return DxoArgumentAxisComponent;
}(NestedOption));
export { DxoArgumentAxisComponent };
var DxoArgumentAxisModule = (function () {
    function DxoArgumentAxisModule() {
    }
    DxoArgumentAxisModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoArgumentAxisComponent
                    ],
                    exports: [
                        DxoArgumentAxisComponent
                    ],
                },] },
    ];
    return DxoArgumentAxisModule;
}());
export { DxoArgumentAxisModule };
//# sourceMappingURL=argument-axis.js.map