/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiBreakComponent } from './break-dxi';
let DxoScaleComponent = class DxoScaleComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get allowDecimals() {
        return this._getOption('allowDecimals');
    }
    set allowDecimals(value) {
        this._setOption('allowDecimals', value);
    }
    get customMinorTicks() {
        return this._getOption('customMinorTicks');
    }
    set customMinorTicks(value) {
        this._setOption('customMinorTicks', value);
    }
    get customTicks() {
        return this._getOption('customTicks');
    }
    set customTicks(value) {
        this._setOption('customTicks', value);
    }
    get endValue() {
        return this._getOption('endValue');
    }
    set endValue(value) {
        this._setOption('endValue', value);
    }
    get label() {
        return this._getOption('label');
    }
    set label(value) {
        this._setOption('label', value);
    }
    get minorTick() {
        return this._getOption('minorTick');
    }
    set minorTick(value) {
        this._setOption('minorTick', value);
    }
    get minorTickInterval() {
        return this._getOption('minorTickInterval');
    }
    set minorTickInterval(value) {
        this._setOption('minorTickInterval', value);
    }
    get orientation() {
        return this._getOption('orientation');
    }
    set orientation(value) {
        this._setOption('orientation', value);
    }
    get scaleDivisionFactor() {
        return this._getOption('scaleDivisionFactor');
    }
    set scaleDivisionFactor(value) {
        this._setOption('scaleDivisionFactor', value);
    }
    get startValue() {
        return this._getOption('startValue');
    }
    set startValue(value) {
        this._setOption('startValue', value);
    }
    get tick() {
        return this._getOption('tick');
    }
    set tick(value) {
        this._setOption('tick', value);
    }
    get tickInterval() {
        return this._getOption('tickInterval');
    }
    set tickInterval(value) {
        this._setOption('tickInterval', value);
    }
    get horizontalOrientation() {
        return this._getOption('horizontalOrientation');
    }
    set horizontalOrientation(value) {
        this._setOption('horizontalOrientation', value);
    }
    get verticalOrientation() {
        return this._getOption('verticalOrientation');
    }
    set verticalOrientation(value) {
        this._setOption('verticalOrientation', value);
    }
    get aggregationGroupWidth() {
        return this._getOption('aggregationGroupWidth');
    }
    set aggregationGroupWidth(value) {
        this._setOption('aggregationGroupWidth', value);
    }
    get aggregationInterval() {
        return this._getOption('aggregationInterval');
    }
    set aggregationInterval(value) {
        this._setOption('aggregationInterval', value);
    }
    get breaks() {
        return this._getOption('breaks');
    }
    set breaks(value) {
        this._setOption('breaks', value);
    }
    get breakStyle() {
        return this._getOption('breakStyle');
    }
    set breakStyle(value) {
        this._setOption('breakStyle', value);
    }
    get categories() {
        return this._getOption('categories');
    }
    set categories(value) {
        this._setOption('categories', value);
    }
    get endOnTick() {
        return this._getOption('endOnTick');
    }
    set endOnTick(value) {
        this._setOption('endOnTick', value);
    }
    get holidays() {
        return this._getOption('holidays');
    }
    set holidays(value) {
        this._setOption('holidays', value);
    }
    get logarithmBase() {
        return this._getOption('logarithmBase');
    }
    set logarithmBase(value) {
        this._setOption('logarithmBase', value);
    }
    get marker() {
        return this._getOption('marker');
    }
    set marker(value) {
        this._setOption('marker', value);
    }
    get maxRange() {
        return this._getOption('maxRange');
    }
    set maxRange(value) {
        this._setOption('maxRange', value);
    }
    get minorTickCount() {
        return this._getOption('minorTickCount');
    }
    set minorTickCount(value) {
        this._setOption('minorTickCount', value);
    }
    get minRange() {
        return this._getOption('minRange');
    }
    set minRange(value) {
        this._setOption('minRange', value);
    }
    get placeholderHeight() {
        return this._getOption('placeholderHeight');
    }
    set placeholderHeight(value) {
        this._setOption('placeholderHeight', value);
    }
    get showCustomBoundaryTicks() {
        return this._getOption('showCustomBoundaryTicks');
    }
    set showCustomBoundaryTicks(value) {
        this._setOption('showCustomBoundaryTicks', value);
    }
    get singleWorkdays() {
        return this._getOption('singleWorkdays');
    }
    set singleWorkdays(value) {
        this._setOption('singleWorkdays', value);
    }
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    get valueType() {
        return this._getOption('valueType');
    }
    set valueType(value) {
        this._setOption('valueType', value);
    }
    get workdaysOnly() {
        return this._getOption('workdaysOnly');
    }
    set workdaysOnly(value) {
        this._setOption('workdaysOnly', value);
    }
    get workWeek() {
        return this._getOption('workWeek');
    }
    set workWeek(value) {
        this._setOption('workWeek', value);
    }
    get _optionPath() {
        return 'scale';
    }
    get breaksChildren() {
        return this._getOption('breaks');
    }
    set breaksChildren(value) {
        this.setChildren('breaks', value);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoScaleComponent.prototype, "allowDecimals", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "customMinorTicks", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "customTicks", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "endValue", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "label", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "minorTick", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "minorTickInterval", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoScaleComponent.prototype, "orientation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoScaleComponent.prototype, "scaleDivisionFactor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "startValue", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "tick", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "tickInterval", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoScaleComponent.prototype, "horizontalOrientation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoScaleComponent.prototype, "verticalOrientation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoScaleComponent.prototype, "aggregationGroupWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "aggregationInterval", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "breaks", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "breakStyle", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "categories", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoScaleComponent.prototype, "endOnTick", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "holidays", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoScaleComponent.prototype, "logarithmBase", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "marker", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "maxRange", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoScaleComponent.prototype, "minorTickCount", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "minRange", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoScaleComponent.prototype, "placeholderHeight", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoScaleComponent.prototype, "showCustomBoundaryTicks", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "singleWorkdays", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoScaleComponent.prototype, "type", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoScaleComponent.prototype, "valueType", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoScaleComponent.prototype, "workdaysOnly", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], DxoScaleComponent.prototype, "workWeek", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiBreakComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoScaleComponent.prototype, "breaksChildren", null);
DxoScaleComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-scale',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoScaleComponent);
export { DxoScaleComponent };
let DxoScaleModule = class DxoScaleModule {
};
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
export { DxoScaleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvc2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU92QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBU2hELElBQWEsaUJBQWlCLEdBQTlCLHVCQUErQixTQUFRLFlBQVk7SUF1Ui9DLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExUkQsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELElBQUksZ0JBQWdCO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBb0I7UUFDckMsSUFBSSxD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REMsS0FBSyxFQUFFOzs7Z0VBR1A7QUFNRDtJQURDLEtBQUssRUFBRTtzQ0FDYyxLQUFLOzZDQUdELEtBQUs7dURBRDlCO0FBTUQ7SUFEQyxLQUFLLEVBQUU7Ozs2Q0FHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7a0RBR1A7QUFNRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7c0NBQ1EsS0FBSzs2Q0FHRCxLQUFLO2lEQUR4QjtBQVlEO0lBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3NDQUMvQixTQUFTOzt1REFFOUI7QUFsUlEsaUJBQWlCO0lBTjdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBRHBCLEVBQUU7S0FFZCxDQUFDO0lBd1JlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0F4Um5DLGlCQUFpQixDQThSN0I7U0E5UlksaUJBQWlCO0FBd1M5QixJQUFhLGNBQWMsR0FBM0I7Q0FBK0IsQ0FBQTtBQUFsQixjQUFjO0lBUjFCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGlCQUFpQjtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLGlCQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0LFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpQnJlYWtDb21wb25lbnQgfSBmcm9tICcuL2JyZWFrLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zY2FsZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2NhbGVDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0RlY2ltYWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RGVjaW1hbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd0RlY2ltYWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0RlY2ltYWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9tTWlub3JUaWNrcygpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21NaW5vclRpY2tzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9tTWlub3JUaWNrcyh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY3VzdG9tTWlub3JUaWNrcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGN1c3RvbVRpY2tzKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2N1c3RvbVRpY2tzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9tVGlja3ModmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2N1c3RvbVRpY2tzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kVmFsdWUoKTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5kVmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBlbmRWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kVmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsYWJlbCgpOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBoaWRlRmlyc3RPckxhc3Q/OiBzdHJpbmcsIGluZGVudEZyb21UaWNrPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB1c2VSYW5nZUNvbG9ycz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhYmVsKHZhbHVlOiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBoaWRlRmlyc3RPckxhc3Q/OiBzdHJpbmcsIGluZGVudEZyb21UaWNrPzogbnVtYmVyLCBvdmVybGFwcGluZ0JlaGF2aW9yPzogc3RyaW5nLCB1c2VSYW5nZUNvbG9ycz86IGJvb2xlYW4sIHZpc2libGU/OiBib29sZWFuIH0gfCB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9udD86IERldkV4cHJlc3Mudml6LkZvbnQsIGZvcm1hdD86IERldkV4cHJlc3MudWkuZm9ybWF0IHwgc3RyaW5nLCBpbmRlbnRGcm9tVGljaz86IG51bWJlciwgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdXNlUmFuZ2VDb2xvcnM/OiBib29sZWFuLCB2aXNpYmxlPzogYm9vbGVhbiB9IHwgeyBjdXN0b21pemVUZXh0PzogRnVuY3Rpb24sIGZvbnQ/OiBEZXZFeHByZXNzLnZpei5Gb250LCBmb3JtYXQ/OiBEZXZFeHByZXNzLnVpLmZvcm1hdCB8IHN0cmluZywgb3ZlcmxhcHBpbmdCZWhhdmlvcj86IHN0cmluZywgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYWJlbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yVGljaygpOiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgdmlzaWJsZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbm9yVGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbm9yVGljayh2YWx1ZTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5vclRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5vclRpY2tJbnRlcnZhbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbm9yVGlja0ludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2tJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9yaWVudGF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3JpZW50YXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBvcmllbnRhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdvcmllbnRhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjYWxlRGl2aXNpb25GYWN0b3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY2FsZURpdmlzaW9uRmFjdG9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2NhbGVEaXZpc2lvbkZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY2FsZURpdmlzaW9uRmFjdG9yJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnRWYWx1ZSgpOiBudW1iZXIgfCBEYXRlIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGFydFZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhcnRWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhcnRWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpY2soKTogeyBjb2xvcj86IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfSB8IHsgY29sb3I/OiBzdHJpbmcsIG9wYWNpdHk/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpY2snKTtcclxuICAgIH1cclxuICAgIHNldCB0aWNrKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIsIHZpc2libGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciB9IHwgeyBjb2xvcj86IHN0cmluZywgb3BhY2l0eT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0aWNrSW50ZXJ2YWwnKTtcclxuICAgIH1cclxuICAgIHNldCB0aWNrSW50ZXJ2YWwodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpY2tJbnRlcnZhbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvcml6b250YWxPcmllbnRhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWxPcmllbnRhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvcml6b250YWxPcmllbnRhdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3Jpem9udGFsT3JpZW50YXRpb24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2ZXJ0aWNhbE9yaWVudGF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmVydGljYWxPcmllbnRhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZlcnRpY2FsT3JpZW50YXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmVydGljYWxPcmllbnRhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uR3JvdXBXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFnZ3JlZ2F0aW9uR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZ2dyZWdhdGlvbkdyb3VwV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZ2dyZWdhdGlvbkludGVydmFsKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FnZ3JlZ2F0aW9uSW50ZXJ2YWwnKTtcclxuICAgIH1cclxuICAgIHNldCBhZ2dyZWdhdGlvbkludGVydmFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZ2dyZWdhdGlvbkludGVydmFsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYnJlYWtzKCk6IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdicmVha3MnKTtcclxuICAgIH1cclxuICAgIHNldCBicmVha3ModmFsdWU6IEFycmF5PERldkV4cHJlc3Mudml6LlNjYWxlQnJlYWs+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdicmVha3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBicmVha1N0eWxlKCk6IHsgY29sb3I/OiBzdHJpbmcsIGxpbmU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JyZWFrU3R5bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBicmVha1N0eWxlKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nLCBsaW5lPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdicmVha1N0eWxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2F0ZWdvcmllcygpOiBBcnJheTxudW1iZXIgfCBzdHJpbmcgfCBEYXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2F0ZWdvcmllcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhdGVnb3JpZXModmFsdWU6IEFycmF5PG51bWJlciB8IHN0cmluZyB8IERhdGU+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjYXRlZ29yaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZW5kT25UaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VuZE9uVGljaycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuZE9uVGljayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZW5kT25UaWNrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG9saWRheXMoKTogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvbGlkYXlzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG9saWRheXModmFsdWU6IEFycmF5PERhdGUgfCBzdHJpbmcgfCBudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob2xpZGF5cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxvZ2FyaXRobUJhc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2dhcml0aG1CYXNlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nYXJpdGhtQmFzZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2dhcml0aG1CYXNlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFya2VyKCk6IHsgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfSwgc2VwYXJhdG9ySGVpZ2h0PzogbnVtYmVyLCB0ZXh0TGVmdEluZGVudD86IG51bWJlciwgdGV4dFRvcEluZGVudD86IG51bWJlciwgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXJrZXInKTtcclxuICAgIH1cclxuICAgIHNldCBtYXJrZXIodmFsdWU6IHsgbGFiZWw/OiB7IGN1c3RvbWl6ZVRleHQ/OiBGdW5jdGlvbiwgZm9ybWF0PzogRGV2RXhwcmVzcy51aS5mb3JtYXQgfCBzdHJpbmcgfSwgc2VwYXJhdG9ySGVpZ2h0PzogbnVtYmVyLCB0ZXh0TGVmdEluZGVudD86IG51bWJlciwgdGV4dFRvcEluZGVudD86IG51bWJlciwgdG9wSW5kZW50PzogbnVtYmVyLCB2aXNpYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXJrZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhSYW5nZSgpOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhSYW5nZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heFJhbmdlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB7IGRheXM/OiBudW1iZXIsIGhvdXJzPzogbnVtYmVyLCBtaWxsaXNlY29uZHM/OiBudW1iZXIsIG1pbnV0ZXM/OiBudW1iZXIsIG1vbnRocz86IG51bWJlciwgcXVhcnRlcnM/OiBudW1iZXIsIHNlY29uZHM/OiBudW1iZXIsIHdlZWtzPzogbnVtYmVyLCB5ZWFycz86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhSYW5nZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbm9yVGlja0NvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWlub3JUaWNrQ291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5vclRpY2tDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5vclRpY2tDb3VudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblJhbmdlKCk6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblJhbmdlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluUmFuZ2UodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHsgZGF5cz86IG51bWJlciwgaG91cnM/OiBudW1iZXIsIG1pbGxpc2Vjb25kcz86IG51bWJlciwgbWludXRlcz86IG51bWJlciwgbW9udGhzPzogbnVtYmVyLCBxdWFydGVycz86IG51bWJlciwgc2Vjb25kcz86IG51bWJlciwgd2Vla3M/OiBudW1iZXIsIHllYXJzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pblJhbmdlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGxhY2Vob2xkZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwbGFjZWhvbGRlckhlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBsYWNlaG9sZGVySGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BsYWNlaG9sZGVySGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0N1c3RvbUJvdW5kYXJ5VGlja3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0N1c3RvbUJvdW5kYXJ5VGlja3MnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q3VzdG9tQm91bmRhcnlUaWNrcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0N1c3RvbUJvdW5kYXJ5VGlja3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaW5nbGVXb3JrZGF5cygpOiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2luZ2xlV29ya2RheXMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaW5nbGVXb3JrZGF5cyh2YWx1ZTogQXJyYXk8RGF0ZSB8IHN0cmluZyB8IG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NpbmdsZVdvcmtkYXlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3R5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3R5cGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZVR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZVR5cGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZVR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVUeXBlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29ya2RheXNPbmx5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dvcmtkYXlzT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdvcmtkYXlzT25seSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29ya2RheXNPbmx5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd29ya1dlZWsoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd29ya1dlZWsnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JrV2Vlayh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd29ya1dlZWsnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzY2FsZSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlCcmVha0NvbXBvbmVudCkpXHJcbiAgICBnZXQgYnJlYWtzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJyZWFrQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnJlYWtzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnJlYWtzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdicmVha3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9TY2FsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU2NhbGVDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2NhbGVNb2R1bGUgeyB9XHJcbiJdfQ==