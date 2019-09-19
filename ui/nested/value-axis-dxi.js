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
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiBreakComponent } from './break-dxi';
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
var DxiValueAxisComponent = (function (_super) {
    __extends(DxiValueAxisComponent, _super);
    function DxiValueAxisComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'visualRangeChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiValueAxisComponent.prototype, "allowDecimals", {
        get: function () {
            return this._getOption('allowDecimals');
        },
        set: function (value) {
            this._setOption('allowDecimals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "autoBreaksEnabled", {
        get: function () {
            return this._getOption('autoBreaksEnabled');
        },
        set: function (value) {
            this._setOption('autoBreaksEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "axisDivisionFactor", {
        get: function () {
            return this._getOption('axisDivisionFactor');
        },
        set: function (value) {
            this._setOption('axisDivisionFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "breaks", {
        get: function () {
            return this._getOption('breaks');
        },
        set: function (value) {
            this._setOption('breaks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "breakStyle", {
        get: function () {
            return this._getOption('breakStyle');
        },
        set: function (value) {
            this._setOption('breakStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "categories", {
        get: function () {
            return this._getOption('categories');
        },
        set: function (value) {
            this._setOption('categories', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "constantLines", {
        get: function () {
            return this._getOption('constantLines');
        },
        set: function (value) {
            this._setOption('constantLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "constantLineStyle", {
        get: function () {
            return this._getOption('constantLineStyle');
        },
        set: function (value) {
            this._setOption('constantLineStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "discreteAxisDivisionMode", {
        get: function () {
            return this._getOption('discreteAxisDivisionMode');
        },
        set: function (value) {
            this._setOption('discreteAxisDivisionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "endOnTick", {
        get: function () {
            return this._getOption('endOnTick');
        },
        set: function (value) {
            this._setOption('endOnTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "grid", {
        get: function () {
            return this._getOption('grid');
        },
        set: function (value) {
            this._setOption('grid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "inverted", {
        get: function () {
            return this._getOption('inverted');
        },
        set: function (value) {
            this._setOption('inverted', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "logarithmBase", {
        get: function () {
            return this._getOption('logarithmBase');
        },
        set: function (value) {
            this._setOption('logarithmBase', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "maxAutoBreakCount", {
        get: function () {
            return this._getOption('maxAutoBreakCount');
        },
        set: function (value) {
            this._setOption('maxAutoBreakCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "maxValueMargin", {
        get: function () {
            return this._getOption('maxValueMargin');
        },
        set: function (value) {
            this._setOption('maxValueMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "minorGrid", {
        get: function () {
            return this._getOption('minorGrid');
        },
        set: function (value) {
            this._setOption('minorGrid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "minorTick", {
        get: function () {
            return this._getOption('minorTick');
        },
        set: function (value) {
            this._setOption('minorTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "minorTickCount", {
        get: function () {
            return this._getOption('minorTickCount');
        },
        set: function (value) {
            this._setOption('minorTickCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "minorTickInterval", {
        get: function () {
            return this._getOption('minorTickInterval');
        },
        set: function (value) {
            this._setOption('minorTickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "minValueMargin", {
        get: function () {
            return this._getOption('minValueMargin');
        },
        set: function (value) {
            this._setOption('minValueMargin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "minVisualRangeLength", {
        get: function () {
            return this._getOption('minVisualRangeLength');
        },
        set: function (value) {
            this._setOption('minVisualRangeLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "multipleAxesSpacing", {
        get: function () {
            return this._getOption('multipleAxesSpacing');
        },
        set: function (value) {
            this._setOption('multipleAxesSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "pane", {
        get: function () {
            return this._getOption('pane');
        },
        set: function (value) {
            this._setOption('pane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "placeholderSize", {
        get: function () {
            return this._getOption('placeholderSize');
        },
        set: function (value) {
            this._setOption('placeholderSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "showZero", {
        get: function () {
            return this._getOption('showZero');
        },
        set: function (value) {
            this._setOption('showZero', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "strips", {
        get: function () {
            return this._getOption('strips');
        },
        set: function (value) {
            this._setOption('strips', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "stripStyle", {
        get: function () {
            return this._getOption('stripStyle');
        },
        set: function (value) {
            this._setOption('stripStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "synchronizedValue", {
        get: function () {
            return this._getOption('synchronizedValue');
        },
        set: function (value) {
            this._setOption('synchronizedValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "tick", {
        get: function () {
            return this._getOption('tick');
        },
        set: function (value) {
            this._setOption('tick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "valueMarginsEnabled", {
        get: function () {
            return this._getOption('valueMarginsEnabled');
        },
        set: function (value) {
            this._setOption('valueMarginsEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "valueType", {
        get: function () {
            return this._getOption('valueType');
        },
        set: function (value) {
            this._setOption('valueType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "visualRange", {
        get: function () {
            return this._getOption('visualRange');
        },
        set: function (value) {
            this._setOption('visualRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "visualRangeUpdateMode", {
        get: function () {
            return this._getOption('visualRangeUpdateMode');
        },
        set: function (value) {
            this._setOption('visualRangeUpdateMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "wholeRange", {
        get: function () {
            return this._getOption('wholeRange');
        },
        set: function (value) {
            this._setOption('wholeRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "_optionPath", {
        get: function () {
            return 'valueAxis';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "breaksChildren", {
        get: function () {
            return this._getOption('breaks');
        },
        set: function (value) {
            this.setChildren('breaks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "constantLinesChildren", {
        get: function () {
            return this._getOption('constantLines');
        },
        set: function (value) {
            this.setChildren('constantLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiValueAxisComponent.prototype, "stripsChildren", {
        get: function () {
            return this._getOption('strips');
        },
        set: function (value) {
            this.setChildren('strips', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiValueAxisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-value-axis',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiValueAxisComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiValueAxisComponent.propDecorators = {
        "allowDecimals": [{ type: Input },],
        "autoBreaksEnabled": [{ type: Input },],
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
        "inverted": [{ type: Input },],
        "label": [{ type: Input },],
        "logarithmBase": [{ type: Input },],
        "max": [{ type: Input },],
        "maxAutoBreakCount": [{ type: Input },],
        "maxValueMargin": [{ type: Input },],
        "min": [{ type: Input },],
        "minorGrid": [{ type: Input },],
        "minorTick": [{ type: Input },],
        "minorTickCount": [{ type: Input },],
        "minorTickInterval": [{ type: Input },],
        "minValueMargin": [{ type: Input },],
        "minVisualRangeLength": [{ type: Input },],
        "multipleAxesSpacing": [{ type: Input },],
        "name": [{ type: Input },],
        "opacity": [{ type: Input },],
        "pane": [{ type: Input },],
        "placeholderSize": [{ type: Input },],
        "position": [{ type: Input },],
        "showZero": [{ type: Input },],
        "strips": [{ type: Input },],
        "stripStyle": [{ type: Input },],
        "synchronizedValue": [{ type: Input },],
        "tick": [{ type: Input },],
        "tickInterval": [{ type: Input },],
        "title": [{ type: Input },],
        "type": [{ type: Input },],
        "valueMarginsEnabled": [{ type: Input },],
        "valueType": [{ type: Input },],
        "visible": [{ type: Input },],
        "visualRange": [{ type: Input },],
        "visualRangeUpdateMode": [{ type: Input },],
        "wholeRange": [{ type: Input },],
        "width": [{ type: Input },],
        "visualRangeChange": [{ type: Output },],
        "breaksChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiBreakComponent; }),] },],
        "constantLinesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiConstantLineComponent; }),] },],
        "stripsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiStripComponent; }),] },],
    };
    return DxiValueAxisComponent;
}(CollectionNestedOption));
export { DxiValueAxisComponent };
var DxiValueAxisModule = (function () {
    function DxiValueAxisModule() {
    }
    DxiValueAxisModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiValueAxisComponent
                    ],
                    exports: [
                        DxiValueAxisComponent
                    ],
                },] },
    ];
    return DxiValueAxisModule;
}());
export { DxiValueAxisModule };
//# sourceMappingURL=value-axis-dxi.js.map