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
 * Build date: Fri Sep 20 2019
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYXhpcy1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvdmFsdWUtYXhpcy1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBU0wseUNBQXNCO0lBbVo3RCwrQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FRVjtRQU5HLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtTQUNoQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7MEJBM1pHLGdEQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUFjO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxD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Q0FRTCxLQUFLO3NDQVFMLEtBQUs7NkNBUUwsS0FBSzs4QkFRTCxLQUFLO3lCQVFMLEtBQUs7NkJBUUwsS0FBSzswQkFRTCxLQUFLO2tDQVFMLEtBQUs7d0JBUUwsS0FBSztzQ0FRTCxLQUFLO21DQVFMLEtBQUs7d0JBUUwsS0FBSzs4QkFRTCxLQUFLOzhCQVFMLEtBQUs7bUNBUUwsS0FBSztzQ0FRTCxLQUFLO21DQVFMLEtBQUs7eUNBUUwsS0FBSzt3Q0FRTCxLQUFLO3lCQVFMLEtBQUs7NEJBUUwsS0FBSzt5QkFRTCxLQUFLO29DQVFMLEtBQUs7NkJBUUwsS0FBSzs2QkFRTCxLQUFLOzJCQVFMLEtBQUs7K0JBUUwsS0FBSztzQ0FRTCxLQUFLO3lCQVFMLEtBQUs7aUNBUUwsS0FBSzswQkFRTCxLQUFLO3lCQVFMLEtBQUs7d0NBUUwsS0FBSzs4QkFRTCxLQUFLOzRCQVFMLEtBQUs7Z0NBUUwsS0FBSzswQ0FRTCxLQUFLOytCQVFMLEtBQUs7MEJBUUwsS0FBSztzQ0FZTCxNQUFNO21DQU1OLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDOzBDQVFuRCxlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBd0IsRUFBeEIsQ0FBd0IsQ0FBQzttQ0FRMUQsZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7O2dDQTFieEQ7RUErQzJDLHNCQUFzQjtTQUFwRCxxQkFBcUI7Ozs7O2dCQWlhakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGOzs2QkF2ZEQ7O1NBd2RhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlCcmVha0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWstZHhpJztcclxuaW1wb3J0IHsgRHhpQ29uc3RhbnRMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9jb25zdGFudC1saW5lLWR4aSc7XHJcbmltcG9ydCB7IER4aVN0cmlwQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJpcC1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktdmFsdWUtYXhpcycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpVmFsdWVBeGlzQ29tcG9uZW50IGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RGVjaW1hbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dEZWNpbWFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RGVjaW1hbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RGVjaW1hbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhdXRvQnJlYWtzRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhdXRvQnJlYWtzRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9CcmVha3NFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhdXRvQnJlYWtzRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGF4aXNEaXZpc2lvbkZhY3RvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2F4aXNEaXZpc2lvbkZhY3RvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGF4aXNEaXZpc2lvbkZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdheGlzRGl2aXNpb25GYWN0b3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBicmVha3MoKTogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JyZWFrcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJyZWFrcyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy52aXouU2NhbGVCcmVhaz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JyZWFrcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJyZWFrU3R5bGUoKTogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnJlYWtTdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJyZWFrU3R5bGUodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JyZWFrU3R5bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjYXRlZ29yaWVzKCk6IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjYXRlZ29yaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY2F0ZWdvcmllcyh2YWx1ZTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NhdGVnb3JpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29sb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb25zdGFudExpbmVzKCk6IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29uc3RhbnRMaW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnN0YW50TGluZXModmFsdWU6IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgZGlzcGxheUJlaGluZFNlcmllcz86IGJvb2xlYW4sIGV4dGVuZEF4aXM/OiBib29sZWFuLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgdmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCB3aWR0aD86IG51bWJlciB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29uc3RhbnRMaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnN0YW50TGluZVN0eWxlKCk6IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnN0YW50TGluZVN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29uc3RhbnRMaW5lU3R5bGUodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnN0YW50TGluZVN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZE9uVGljaygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbmRPblRpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRPblRpY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuZE9uVGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyaWQoKTogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyaWQnKTtcclxuICAgIH1cclxuICAgIHNldCBncmlkKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JpZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGludmVydGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ludmVydGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaW52ZXJ0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ludmVydGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbGFiZWwoKTogeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGN1c3RvbWl6ZUhpbnQ/OiBGdW5jdGlvbiwgY3VzdG9taXplVGV4dD86IEZ1bmN0aW9uLCBkaXNwbGF5TW9kZT86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgcm90YXRpb25BbmdsZT86IG51bWJlciwgc3RhZ2dlcmluZ1NwYWNpbmc/OiBudW1iZXIsIHRleHRPdmVyZmxvdz86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4sIHdvcmRXcmFwPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xhYmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGFiZWwodmFsdWU6IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxvZ2FyaXRobUJhc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2dhcml0aG1CYXNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nYXJpdGhtQmFzZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2dhcml0aG1CYXNlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4KCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21heCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heCh2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4QXV0b0JyZWFrQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhBdXRvQnJlYWtDb3VudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heEF1dG9CcmVha0NvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heEF1dG9CcmVha0NvdW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4VmFsdWVNYXJnaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhWYWx1ZU1hcmdpbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heFZhbHVlTWFyZ2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heFZhbHVlTWFyZ2luJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluKCk6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbih2YWx1ZTogRGF0ZSB8IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWlub3JHcmlkKCk6IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5vckdyaWQnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5vckdyaWQodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vckdyaWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5vclRpY2soKTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbm9yVGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbm9yVGljayh2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbm9yVGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yVGlja0NvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWlub3JUaWNrQ291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5vclRpY2tDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2tDb3VudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yVGlja0ludGVydmFsKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbm9yVGlja0ludGVydmFsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWlub3JUaWNrSW50ZXJ2YWwodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbm9yVGlja0ludGVydmFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluVmFsdWVNYXJnaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5WYWx1ZU1hcmdpbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pblZhbHVlTWFyZ2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pblZhbHVlTWFyZ2luJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluVmlzdWFsUmFuZ2VMZW5ndGgoKTogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluVmlzdWFsUmFuZ2VMZW5ndGgnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5WaXN1YWxSYW5nZUxlbmd0aCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluVmlzdWFsUmFuZ2VMZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtdWx0aXBsZUF4ZXNTcGFjaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbXVsdGlwbGVBeGVzU3BhY2luZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG11bHRpcGxlQXhlc1NwYWNpbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbXVsdGlwbGVBeGVzU3BhY2luZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduYW1lJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduYW1lJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wYWNpdHknKTtcclxuICAgIH1cclxuICAgIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wYWNpdHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYW5lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFuZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFuZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBsYWNlaG9sZGVyU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BsYWNlaG9sZGVyU2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBsYWNlaG9sZGVyU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwbGFjZWhvbGRlclNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwb3NpdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Bvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncG9zaXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93WmVybygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93WmVybycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3daZXJvKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93WmVybycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0cmlwcygpOiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0cmlwcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0cmlwcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIsIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdHJpcHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdHJpcFN0eWxlKCk6IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0cmlwU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzdHJpcFN0eWxlKHZhbHVlOiB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdHJpcFN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3luY2hyb25pemVkVmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzeW5jaHJvbml6ZWRWYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN5bmNocm9uaXplZFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N5bmNocm9uaXplZFZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGljaygpOiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHNoaWZ0PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpY2sodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGlja0ludGVydmFsKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpY2tJbnRlcnZhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpY2tJbnRlcnZhbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGlja0ludGVydmFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgeyBhbGlnbm1lbnQ/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBtYXJnaW4/OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIHRleHRPdmVyZmxvdz86IHN0cmluZywgd29yZFdyYXA/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGl0bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndHlwZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndHlwZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlTWFyZ2luc0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVNYXJnaW5zRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlTWFyZ2luc0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlTWFyZ2luc0VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZVR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZVR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc3VhbFJhbmdlKCk6IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc3VhbFJhbmdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzdWFsUmFuZ2UodmFsdWU6IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc3VhbFJhbmdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzdWFsUmFuZ2VVcGRhdGVNb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzdWFsUmFuZ2VVcGRhdGVNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc3VhbFJhbmdlVXBkYXRlTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdob2xlUmFuZ2UoKTogRGV2RXhwcmVzcy52aXouVml6UmFuZ2UgfCBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2hvbGVSYW5nZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdob2xlUmFuZ2UodmFsdWU6IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dob2xlUmFuZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzdWFsUmFuZ2VDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXN1YWxSYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3ZhbHVlQXhpcyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlCcmVha0NvbXBvbmVudCkpXHJcbiAgICBnZXQgYnJlYWtzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJyZWFrQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnJlYWtzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnJlYWtzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdicmVha3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUNvbnN0YW50TGluZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgY29uc3RhbnRMaW5lc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlDb25zdGFudExpbmVDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb25zdGFudExpbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29uc3RhbnRMaW5lc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignY29uc3RhbnRMaW5lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpU3RyaXBDb21wb25lbnQpKVxyXG4gICAgZ2V0IHN0cmlwc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlTdHJpcENvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0cmlwcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0cmlwc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignc3RyaXBzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc3VhbFJhbmdlQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlWYWx1ZUF4aXNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aVZhbHVlQXhpc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlWYWx1ZUF4aXNNb2R1bGUgeyB9XHJcbiJdfQ==