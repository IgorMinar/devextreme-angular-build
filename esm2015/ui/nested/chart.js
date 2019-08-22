/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiSeriesComponent } from './series-dxi';
let DxoChartComponent = class DxoChartComponent extends NestedOption {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get barGroupPadding() {
        return this._getOption('barGroupPadding');
    }
    set barGroupPadding(value) {
        this._setOption('barGroupPadding', value);
    }
    get barGroupWidth() {
        return this._getOption('barGroupWidth');
    }
    set barGroupWidth(value) {
        this._setOption('barGroupWidth', value);
    }
    get barWidth() {
        return this._getOption('barWidth');
    }
    set barWidth(value) {
        this._setOption('barWidth', value);
    }
    get bottomIndent() {
        return this._getOption('bottomIndent');
    }
    set bottomIndent(value) {
        this._setOption('bottomIndent', value);
    }
    get commonSeriesSettings() {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value) {
        this._setOption('commonSeriesSettings', value);
    }
    get dataPrepareSettings() {
        return this._getOption('dataPrepareSettings');
    }
    set dataPrepareSettings(value) {
        this._setOption('dataPrepareSettings', value);
    }
    get equalBarWidth() {
        return this._getOption('equalBarWidth');
    }
    set equalBarWidth(value) {
        this._setOption('equalBarWidth', value);
    }
    get maxBubbleSize() {
        return this._getOption('maxBubbleSize');
    }
    set maxBubbleSize(value) {
        this._setOption('maxBubbleSize', value);
    }
    get minBubbleSize() {
        return this._getOption('minBubbleSize');
    }
    set minBubbleSize(value) {
        this._setOption('minBubbleSize', value);
    }
    get negativesAsZeroes() {
        return this._getOption('negativesAsZeroes');
    }
    set negativesAsZeroes(value) {
        this._setOption('negativesAsZeroes', value);
    }
    get palette() {
        return this._getOption('palette');
    }
    set palette(value) {
        this._setOption('palette', value);
    }
    get paletteExtensionMode() {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value) {
        this._setOption('paletteExtensionMode', value);
    }
    get series() {
        return this._getOption('series');
    }
    set series(value) {
        this._setOption('series', value);
    }
    get seriesTemplate() {
        return this._getOption('seriesTemplate');
    }
    set seriesTemplate(value) {
        this._setOption('seriesTemplate', value);
    }
    get topIndent() {
        return this._getOption('topIndent');
    }
    set topIndent(value) {
        this._setOption('topIndent', value);
    }
    get useAggregation() {
        return this._getOption('useAggregation');
    }
    set useAggregation(value) {
        this._setOption('useAggregation', value);
    }
    get valueAxis() {
        return this._getOption('valueAxis');
    }
    set valueAxis(value) {
        this._setOption('valueAxis', value);
    }
    get _optionPath() {
        return 'chart';
    }
    get seriesChildren() {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        this.setChildren('series', value);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "barGroupPadding", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "barGroupWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "barWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "bottomIndent", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "commonSeriesSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "dataPrepareSettings", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoChartComponent.prototype, "equalBarWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "maxBubbleSize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "minBubbleSize", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoChartComponent.prototype, "negativesAsZeroes", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "palette", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], DxoChartComponent.prototype, "paletteExtensionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "series", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "seriesTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], DxoChartComponent.prototype, "topIndent", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], DxoChartComponent.prototype, "useAggregation", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "valueAxis", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiSeriesComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoChartComponent.prototype, "seriesChildren", null);
DxoChartComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-chart',
        template: '',
        providers: [NestedOptionHost],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoChartComponent);
export { DxoChartComponent };
let DxoChartModule = class DxoChartModule {
};
DxoChartModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoChartComponent
        ],
        exports: [
            DxoChartComponent
        ],
    })
], DxoChartModule);
export { DxoChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU2xELElBQWEsaUJBQWlCLEdBQTlCLHVCQUErQixTQUFRLFlBQVk7SUF1Si9DLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExSkQsSUFBSSxlQUFlO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMs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LGNBQWMsR0FBM0I7Q0FBK0IsQ0FBQTtBQUFsQixjQUFjO0lBUjFCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGlCQUFpQjtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLGlCQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0LFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL3Nlcmllcy1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY2hhcnQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NoYXJ0Q29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyR3JvdXBQYWRkaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyR3JvdXBQYWRkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBQYWRkaW5nKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhcldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhcldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYm90dG9tSW5kZW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYm90dG9tSW5kZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYm90dG9tSW5kZW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvdHRvbUluZGVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vblNlcmllc1NldHRpbmdzKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25TZXJpZXNTZXR0aW5ncyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25TZXJpZXNTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFQcmVwYXJlU2V0dGluZ3MoKTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVByZXBhcmVTZXR0aW5ncyh2YWx1ZTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXF1YWxCYXJXaWR0aCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlcXVhbEJhcldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXF1YWxCYXJXaWR0aCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXF1YWxCYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heEJ1YmJsZVNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhCdWJibGVTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4QnViYmxlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhCdWJibGVTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluQnViYmxlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbkJ1YmJsZVNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5CdWJibGVTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbkJ1YmJsZVNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuZWdhdGl2ZXNBc1plcm9lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5lZ2F0aXZlc0FzWmVyb2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhbGV0dGUoKTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFsZXR0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbGV0dGUodmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhbGV0dGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXMoKTogYW55IHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzKHZhbHVlOiBhbnkgfCBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXNUZW1wbGF0ZSgpOiB7IGN1c3RvbWl6ZVNlcmllcz86IEZ1bmN0aW9uLCBuYW1lRmllbGQ/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXNUZW1wbGF0ZSh2YWx1ZTogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nlcmllc1RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdG9wSW5kZW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9wSW5kZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9wSW5kZW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RvcEluZGVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZUFnZ3JlZ2F0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZUFnZ3JlZ2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlQWdncmVnYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZUFnZ3JlZ2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVBeGlzKCk6IHsgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBudW1iZXIsIG1pbj86IG51bWJlciwgdHlwZT86IHN0cmluZywgdmFsdWVUeXBlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlQXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQXhpcyh2YWx1ZTogeyBpbnZlcnRlZD86IGJvb2xlYW4sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IG51bWJlciwgbWluPzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCB2YWx1ZVR5cGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVBeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY2hhcnQnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpU2VyaWVzQ29tcG9uZW50KSlcclxuICAgIGdldCBzZXJpZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpU2VyaWVzQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9DaGFydENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ2hhcnRDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2hhcnRNb2R1bGUgeyB9XHJcbiJdfQ==