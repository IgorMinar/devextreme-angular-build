/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiBreakComponent } from './break-dxi';
var DxoScaleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoScaleComponent, _super);
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
    DxoScaleComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "allowDecimals", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "customMinorTicks", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "customTicks", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "endValue", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "label", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "minorTick", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "minorTickInterval", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "orientation", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "scaleDivisionFactor", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "startValue", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "tick", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "tickInterval", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "horizontalOrientation", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "verticalOrientation", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "aggregationGroupWidth", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "aggregationInterval", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "breaks", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "breakStyle", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "categories", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "endOnTick", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "holidays", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "logarithmBase", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "marker", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "maxRange", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "minorTickCount", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "minRange", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "placeholderHeight", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "showCustomBoundaryTicks", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "singleWorkdays", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "type", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "valueType", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "workdaysOnly", null);
    tslib_1.__decorate([
        Input()
    ], DxoScaleComponent.prototype, "workWeek", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiBreakComponent; }))
    ], DxoScaleComponent.prototype, "breaksChildren", null);
    DxoScaleComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-scale',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoScaleComponent);
    return DxoScaleComponent;
}(NestedOption));
export { DxoScaleComponent };
var DxoScaleModule = /** @class */ (function () {
    function DxoScaleModule() {
    }
    DxoScaleModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoScaleComponent
            ],
            exports: [
                DxoScaleComponent
            ],
        })
    ], DxoScaleModule);
    return DxoScaleModule;
}());
export { DxoScaleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsic2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBR3BDLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNMLGVBQWUsRUFDZixVQUFVLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTaEQ7SUFBdUMsNkNBQVk7SUF1Ui9DLDJCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUExUkQsc0JBQUksNENBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsQ0FBQzthQUNELFVBQWtCLEtBQWM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwrQ0FBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQ0QsVUFBcUIsS0FBb0I7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFB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cURBR1A7SUFZRDtRQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDLENBQUM7MkRBR3BEO0lBbFJRLGlCQUFpQjtRQU43QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQURwQixFQUFFO1NBRWQsQ0FBQztRQXdSZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BeFJOLGlCQUFpQixDQThSN0I7SUFBRCx3QkFBQztDQUFBLEFBOVJELENBQXVDLFlBQVksR0E4UmxEO1NBOVJZLGlCQUFpQjtBQXdTOUI7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFSMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0LFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhpQnJlYWtDb21wb25lbnQgfSBmcm9tICcuL2JyZWFrLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zY2FsZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2NhbGVDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0RlY2ltYWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RGVjaW1hbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0RlY2ltYWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0RlY2ltYWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9tTWlub3JUaWNrcygpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21NaW5vclRpY2tzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9tTWlub3JUaWNrcyh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9tTWlub3JUaWNrcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbVRpY2tzKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbVRpY2tzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9tVGlja3ModmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbVRpY2tzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kVmFsdWUoKTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsYWJlbCgpOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBoaWRlRmlyc3RPckxhc3Q/OiBzdHJpbmcsIGluZGVudEZyb21UaWNrPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB1c2VSYW5nZUNvbG9ycz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhYmVsKHZhbHVlOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBoaWRlRmlyc3RPckxhc3Q/OiBzdHJpbmcsIGluZGVudEZyb21UaWNrPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB1c2VSYW5nZUNvbG9ycz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yVGljaygpOiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbm9yVGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbm9yVGljayh2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5vclRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5vclRpY2tJbnRlcnZhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbm9yVGlja0ludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2tJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9yaWVudGF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3JpZW50YXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBvcmllbnRhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcmllbnRhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjYWxlRGl2aXNpb25GYWN0b3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY2FsZURpdmlzaW9uRmFjdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2NhbGVEaXZpc2lvbkZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY2FsZURpdmlzaW9uRmFjdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnRWYWx1ZSgpOiBudW1iZXIgfCBEYXRlIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnRWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnRWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpY2soKTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpY2snKTtcclxuICAgIH1cclxuICAgIHNldCB0aWNrKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aWNrSW50ZXJ2YWwnKTtcclxuICAgIH1cclxuICAgIHNldCB0aWNrSW50ZXJ2YWwodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpY2tJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvcml6b250YWxPcmllbnRhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWxPcmllbnRhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvcml6b250YWxPcmllbnRhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3Jpem9udGFsT3JpZW50YXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2ZXJ0aWNhbE9yaWVudGF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmVydGljYWxPcmllbnRhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZlcnRpY2FsT3JpZW50YXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmVydGljYWxPcmllbnRhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uR3JvdXBXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZ2dyZWdhdGlvbkdyb3VwV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZ2dyZWdhdGlvbkludGVydmFsKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uSW50ZXJ2YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBhZ2dyZWdhdGlvbkludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZ2dyZWdhdGlvbkludGVydmFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYnJlYWtzKCk6IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdicmVha3MnKTtcclxuICAgIH1cclxuICAgIHNldCBicmVha3ModmFsdWU6IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdicmVha3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBicmVha1N0eWxlKCk6IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JyZWFrU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBicmVha1N0eWxlKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdicmVha1N0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2F0ZWdvcmllcygpOiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2F0ZWdvcmllcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhdGVnb3JpZXModmFsdWU6IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYXRlZ29yaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kT25UaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuZE9uVGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuZE9uVGljayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kT25UaWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG9saWRheXMoKTogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvbGlkYXlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG9saWRheXModmFsdWU6IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob2xpZGF5cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxvZ2FyaXRobUJhc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2dhcml0aG1CYXNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nYXJpdGhtQmFzZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2dhcml0aG1CYXNlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFya2VyKCk6IHsgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfSwgc2VwYXJhdG9ySGVpZ2h0PzogbnVtYmVyLCB0ZXh0TGVmdEluZGVudD86IG51bWJlciwgdGV4dFRvcEluZGVudD86IG51bWJlciwgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJrZXInKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJrZXIodmFsdWU6IHsgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfSwgc2VwYXJhdG9ySGVpZ2h0PzogbnVtYmVyLCB0ZXh0TGVmdEluZGVudD86IG51bWJlciwgdGV4dFRvcEluZGVudD86IG51bWJlciwgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXJrZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhSYW5nZSgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhSYW5nZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heFJhbmdlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhSYW5nZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yVGlja0NvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWlub3JUaWNrQ291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5vclRpY2tDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2tDb3VudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblJhbmdlKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblJhbmdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluUmFuZ2UodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pblJhbmdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGxhY2Vob2xkZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwbGFjZWhvbGRlckhlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBsYWNlaG9sZGVySGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BsYWNlaG9sZGVySGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0N1c3RvbUJvdW5kYXJ5VGlja3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0N1c3RvbUJvdW5kYXJ5VGlja3MnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q3VzdG9tQm91bmRhcnlUaWNrcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0N1c3RvbUJvdW5kYXJ5VGlja3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaW5nbGVXb3JrZGF5cygpOiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2luZ2xlV29ya2RheXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaW5nbGVXb3JrZGF5cyh2YWx1ZTogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpbmdsZVdvcmtkYXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZVR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZVR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29ya2RheXNPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmtkYXlzT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdvcmtkYXlzT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29ya2RheXNPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29ya1dlZWsoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd29ya1dlZWsnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JrV2Vlayh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29ya1dlZWsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzY2FsZSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlCcmVha0NvbXBvbmVudCkpXHJcbiAgICBnZXQgYnJlYWtzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJyZWFrQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnJlYWtzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnJlYWtzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdicmVha3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9TY2FsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU2NhbGVDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2NhbGVNb2R1bGUgeyB9XHJcbiJdfQ==