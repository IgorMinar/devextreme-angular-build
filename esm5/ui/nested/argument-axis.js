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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJndW1lbnQtYXhpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9hcmd1bWVudC1heGlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU92QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFTRiw0Q0FBWTtJQW1idEQsa0NBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBUVY7UUFORyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEOzBCQTNiRywyREFBcUI7O1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2FBRXBELFVBQTBCLEtBQWE7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMs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QUFLO3dDQVFMLEtBQUs7NEJBUUwsS0FBSztnQ0FRTCxLQUFLOzBDQVFMLEtBQUs7K0JBUUwsS0FBSzswQkFRTCxLQUFLO2lDQVFMLEtBQUs7NkJBUUwsS0FBSzsyQ0FRTCxLQUFLO2dDQVFMLEtBQUs7MkJBUUwsS0FBSzsrQkFRTCxLQUFLO3NDQVlMLE1BQU07bUNBTU4sZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7MENBUW5ELGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFDO21DQVExRCxlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs7bUNBMWR4RDtFQStDOEMsWUFBWTtTQUE3Qyx3QkFBd0I7Ozs7O2dCQWljcEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7cUJBQ3pCO2lCQUNGOztnQ0F2ZkQ7O1NBd2ZhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4aUJyZWFrQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhay1keGknO1xyXG5pbXBvcnQgeyBEeGlDb25zdGFudExpbmVDb21wb25lbnQgfSBmcm9tICcuL2NvbnN0YW50LWxpbmUtZHhpJztcclxuaW1wb3J0IHsgRHhpU3RyaXBDb21wb25lbnQgfSBmcm9tICcuL3N0cmlwLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1hcmd1bWVudC1heGlzJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Bcmd1bWVudEF4aXNDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZ2dyZWdhdGlvbkdyb3VwV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZ2dyZWdhdGlvbkdyb3VwV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBhZ2dyZWdhdGlvbkdyb3VwV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWdncmVnYXRpb25Hcm91cFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWdncmVnYXRpb25JbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhZ2dyZWdhdGlvbkludGVydmFsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWdncmVnYXRpb25JbnRlcnZhbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWdncmVnYXRpb25JbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RGVjaW1hbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dEZWNpbWFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RGVjaW1hbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RGVjaW1hbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcmd1bWVudFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcmd1bWVudFR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCBhcmd1bWVudFR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYXJndW1lbnRUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXhpc0RpdmlzaW9uRmFjdG9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYXhpc0RpdmlzaW9uRmFjdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXhpc0RpdmlzaW9uRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2F4aXNEaXZpc2lvbkZhY3RvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJyZWFrcygpOiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnJlYWtzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnJlYWtzKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnZpei5TY2FsZUJyZWFrPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYnJlYWtzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYnJlYWtTdHlsZSgpOiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdicmVha1N0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnJlYWtTdHlsZSh2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgbGluZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYnJlYWtTdHlsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNhdGVnb3JpZXMoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NhdGVnb3JpZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBjYXRlZ29yaWVzKHZhbHVlOiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2F0ZWdvcmllcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sb3InKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbnN0YW50TGluZXMoKTogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb25zdGFudExpbmVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29uc3RhbnRMaW5lcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBkaXNwbGF5QmVoaW5kU2VyaWVzPzogYm9vbGVhbiwgZXh0ZW5kQXhpcz86IGJvb2xlYW4sIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0gfCB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGRpc3BsYXlCZWhpbmRTZXJpZXM/OiBib29sZWFuLCBleHRlbmRBeGlzPzogYm9vbGVhbiwgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCB2YWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb25zdGFudExpbmVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29uc3RhbnRMaW5lU3R5bGUoKTogeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIGRhc2hTdHlsZT86IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB2aXNpYmxlPzogYm9vbGVhbiB9LCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb25zdGFudExpbmVTdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnN0YW50TGluZVN0eWxlKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBkYXNoU3R5bGU/OiBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgcG9zaXRpb24/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgZGFzaFN0eWxlPzogc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHZpc2libGU/OiBib29sZWFuIH0sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbnN0YW50TGluZVN0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzY3JldGVBeGlzRGl2aXNpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2NyZXRlQXhpc0RpdmlzaW9uTW9kZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVuZE9uVGljaygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbmRPblRpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRPblRpY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuZE9uVGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyaWQoKTogeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2dyaWQnKTtcclxuICAgIH1cclxuICAgIHNldCBncmlkKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JpZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvbGlkYXlzKCk6IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob2xpZGF5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvbGlkYXlzKHZhbHVlOiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG9saWRheXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3Zlck1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3Zlck1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBob3Zlck1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaG92ZXJNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaW52ZXJ0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaW52ZXJ0ZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBpbnZlcnRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaW52ZXJ0ZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsYWJlbCgpOiB7IGFsaWdubWVudD86IHN0cmluZywgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGRpc3BsYXlNb2RlPzogc3RyaW5nLCBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcsIGluZGVudEZyb21BeGlzPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCByb3RhdGlvbkFuZ2xlPzogbnVtYmVyLCBzdGFnZ2VyaW5nU3BhY2luZz86IG51bWJlciwgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiwgd29yZFdyYXA/OiBzdHJpbmcgfSB8IHsgY3VzdG9taXplSGludD86IEZ1bmN0aW9uLCBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xhYmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGFiZWwodmFsdWU6IHsgYWxpZ25tZW50Pzogc3RyaW5nLCBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZGlzcGxheU1vZGU/OiBzdHJpbmcsIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgaW5kZW50RnJvbUF4aXM/OiBudW1iZXIsIG92ZXJsYXBwaW5nQmVoYXZpb3I/OiBzdHJpbmcsIHJvdGF0aW9uQW5nbGU/OiBudW1iZXIsIHN0YWdnZXJpbmdTcGFjaW5nPzogbnVtYmVyLCB0ZXh0T3ZlcmZsb3c/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuLCB3b3JkV3JhcD86IHN0cmluZyB9IHwgeyBjdXN0b21pemVIaW50PzogRnVuY3Rpb24sIGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tQXhpcz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGFiZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2dhcml0aG1CYXNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbG9nYXJpdGhtQmFzZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvZ2FyaXRobUJhc2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG9nYXJpdGhtQmFzZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heCgpOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXgnKTtcclxuICAgIH1cclxuICAgIHNldCBtYXgodmFsdWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21heCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heFZhbHVlTWFyZ2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWF4VmFsdWVNYXJnaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtYXhWYWx1ZU1hcmdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhWYWx1ZU1hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbigpOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtaW4odmFsdWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yR3JpZCgpOiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWlub3JHcmlkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWlub3JHcmlkKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWlub3JHcmlkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWlub3JUaWNrKCk6IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5vclRpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5vclRpY2sodmFsdWU6IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5vclRpY2tDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbm9yVGlja0NvdW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWlub3JUaWNrQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWlub3JUaWNrQ291bnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5vclRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5vclRpY2tJbnRlcnZhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbm9yVGlja0ludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2tJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblZhbHVlTWFyZ2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWluVmFsdWVNYXJnaW4nKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5WYWx1ZU1hcmdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5WYWx1ZU1hcmdpbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblZpc3VhbFJhbmdlTGVuZ3RoKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblZpc3VhbFJhbmdlTGVuZ3RoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluVmlzdWFsUmFuZ2VMZW5ndGgodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pblZpc3VhbFJhbmdlTGVuZ3RoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29wYWNpdHknKTtcclxuICAgIH1cclxuICAgIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wYWNpdHknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwbGFjZWhvbGRlclNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwbGFjZWhvbGRlclNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBwbGFjZWhvbGRlclNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGxhY2Vob2xkZXJTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Bvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2luZ2xlV29ya2RheXMoKTogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NpbmdsZVdvcmtkYXlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlV29ya2RheXModmFsdWU6IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaW5nbGVXb3JrZGF5cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0cmlwcygpOiBBcnJheTxhbnkgfCB7IGNvbG9yPzogc3RyaW5nLCBlbmRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcsIGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCwgaG9yaXpvbnRhbEFsaWdubWVudD86IHN0cmluZywgdGV4dD86IHN0cmluZywgdmVydGljYWxBbGlnbm1lbnQ/OiBzdHJpbmcgfSwgcGFkZGluZ0xlZnRSaWdodD86IG51bWJlciwgcGFkZGluZ1RvcEJvdHRvbT86IG51bWJlciwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCB0ZXh0Pzogc3RyaW5nIH0sIHN0YXJ0VmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdHJpcHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzdHJpcHModmFsdWU6IEFycmF5PGFueSB8IHsgY29sb3I/OiBzdHJpbmcsIGVuZFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZywgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyLCBzdGFydFZhbHVlPzogRGF0ZSB8IG51bWJlciB8IHN0cmluZyB9IHwgeyBjb2xvcj86IHN0cmluZywgZW5kVmFsdWU/OiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nLCBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIHRleHQ/OiBzdHJpbmcgfSwgc3RhcnRWYWx1ZT86IERhdGUgfCBudW1iZXIgfCBzdHJpbmcgfT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0cmlwcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0cmlwU3R5bGUoKTogeyBsYWJlbD86IHsgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGhvcml6b250YWxBbGlnbm1lbnQ/OiBzdHJpbmcsIHZlcnRpY2FsQWxpZ25tZW50Pzogc3RyaW5nIH0sIHBhZGRpbmdMZWZ0UmlnaHQ/OiBudW1iZXIsIHBhZGRpbmdUb3BCb3R0b20/OiBudW1iZXIgfSB8IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250IH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc3RyaXBTdHlsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0cmlwU3R5bGUodmFsdWU6IHsgbGFiZWw/OiB7IGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBob3Jpem9udGFsQWxpZ25tZW50Pzogc3RyaW5nLCB2ZXJ0aWNhbEFsaWdubWVudD86IHN0cmluZyB9LCBwYWRkaW5nTGVmdFJpZ2h0PzogbnVtYmVyLCBwYWRkaW5nVG9wQm90dG9tPzogbnVtYmVyIH0gfCB7IGxhYmVsPzogeyBmb250PzogRGV2RXhwcmVzcy52aXouRm9udCB9IH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0cmlwU3R5bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aWNrKCk6IHsgY29sb3I/OiBzdHJpbmcsIGxlbmd0aD86IG51bWJlciwgb3BhY2l0eT86IG51bWJlciwgc2hpZnQ/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aWNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGljayh2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCBzaGlmdD86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aWNrSW50ZXJ2YWwoKTogbnVtYmVyIHwgc3RyaW5nIHwgeyBkYXlzPzogbnVtYmVyLCBob3Vycz86IG51bWJlciwgbWlsbGlzZWNvbmRzPzogbnVtYmVyLCBtaW51dGVzPzogbnVtYmVyLCBtb250aHM/OiBudW1iZXIsIHF1YXJ0ZXJzPzogbnVtYmVyLCBzZWNvbmRzPzogbnVtYmVyLCB3ZWVrcz86IG51bWJlciwgeWVhcnM/OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGlja0ludGVydmFsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGlja0ludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aWNrSW50ZXJ2YWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aXRsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB7IGFsaWdubWVudD86IHN0cmluZywgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIG1hcmdpbj86IG51bWJlciwgdGV4dD86IHN0cmluZywgdGV4dE92ZXJmbG93Pzogc3RyaW5nLCB3b3JkV3JhcD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0aXRsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0eXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVNYXJnaW5zRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZU1hcmdpbnNFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWVNYXJnaW5zRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVNYXJnaW5zRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Zpc2libGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXN1YWxSYW5nZSgpOiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXN1YWxSYW5nZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc3VhbFJhbmdlKHZhbHVlOiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXN1YWxSYW5nZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZpc3VhbFJhbmdlVXBkYXRlTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc3VhbFJhbmdlVXBkYXRlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZpc3VhbFJhbmdlVXBkYXRlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXN1YWxSYW5nZVVwZGF0ZU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3aG9sZVJhbmdlKCk6IERldkV4cHJlc3Mudml6LlZpelJhbmdlIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nIHwgRGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dob2xlUmFuZ2UnKTtcclxuICAgIH1cclxuICAgIHNldCB3aG9sZVJhbmdlKHZhbHVlOiBEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aG9sZVJhbmdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29ya2RheXNPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmtkYXlzT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdvcmtkYXlzT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29ya2RheXNPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29ya1dlZWsoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd29ya1dlZWsnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JrV2Vlayh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29ya1dlZWsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaXJzdFBvaW50T25TdGFydEFuZ2xlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpcnN0UG9pbnRPblN0YXJ0QW5nbGUnKTtcclxuICAgIH1cclxuICAgIHNldCBmaXJzdFBvaW50T25TdGFydEFuZ2xlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmaXJzdFBvaW50T25TdGFydEFuZ2xlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3JpZ2luVmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5WYWx1ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG9yaWdpblZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29yaWdpblZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGVyaW9kKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGVyaW9kJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BlcmlvZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXJ0QW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydEFuZ2xlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnRBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzdGFydEFuZ2xlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc3VhbFJhbmdlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzdWFsUmFuZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnZpei5WaXpSYW5nZSB8IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+PjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhcmd1bWVudEF4aXMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQnJlYWtDb21wb25lbnQpKVxyXG4gICAgZ2V0IGJyZWFrc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlCcmVha0NvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JyZWFrcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJyZWFrc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignYnJlYWtzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlDb25zdGFudExpbmVDb21wb25lbnQpKVxyXG4gICAgZ2V0IGNvbnN0YW50TGluZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQ29uc3RhbnRMaW5lQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29uc3RhbnRMaW5lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnN0YW50TGluZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2NvbnN0YW50TGluZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVN0cmlwQ29tcG9uZW50KSlcclxuICAgIGdldCBzdHJpcHNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpU3RyaXBDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdHJpcHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzdHJpcHNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3N0cmlwcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXN1YWxSYW5nZUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQXJndW1lbnRBeGlzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Bcmd1bWVudEF4aXNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQXJndW1lbnRBeGlzTW9kdWxlIHsgfVxyXG4iXX0=