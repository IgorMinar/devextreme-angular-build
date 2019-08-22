/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiSeriesComponent } from './series-dxi';
var DxoChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoChartComponent, _super);
    function DxoChartComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoChartComponent.prototype, "barGroupPadding", {
        get: function () {
            return this._getOption('barGroupPadding');
        },
        set: function (value) {
            this._setOption('barGroupPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "barGroupWidth", {
        get: function () {
            return this._getOption('barGroupWidth');
        },
        set: function (value) {
            this._setOption('barGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "bottomIndent", {
        get: function () {
            return this._getOption('bottomIndent');
        },
        set: function (value) {
            this._setOption('bottomIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "dataPrepareSettings", {
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "equalBarWidth", {
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "maxBubbleSize", {
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "minBubbleSize", {
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "negativesAsZeroes", {
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "paletteExtensionMode", {
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "seriesTemplate", {
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "useAggregation", {
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "_optionPath", {
        get: function () {
            return 'chart';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
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
        ContentChildren(forwardRef(function () { return DxiSeriesComponent; })),
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
    return DxoChartComponent;
}(NestedOption));
export { DxoChartComponent };
var DxoChartModule = /** @class */ (function () {
    function DxoChartModule() {
    }
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
    return DxoChartModule;
}());
export { DxoChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU2xEO0lBQXVDLDZDQUFZO0lBdUovQywyQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBMUpELHNCQUFJLDhDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksNENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxDQUFDO2FBQ0QsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUs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O2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BeEpuQyxpQkFBaUIsQ0E4SjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlKRCxDQUF1QyxZQUFZLEdBOEpsRDtTQTlKWSxpQkFBaUI7QUF3SzlCO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBUjFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixpQkFBaUI7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsaUJBQWlCO2FBQ2xCO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0LFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL3Nlcmllcy1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY2hhcnQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NoYXJ0Q29tcG9uZW50IGV4dGVuZHMgTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyR3JvdXBQYWRkaW5nKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyR3JvdXBQYWRkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBQYWRkaW5nKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFyR3JvdXBXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYmFyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdiYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhcldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JhcldpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYm90dG9tSW5kZW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYm90dG9tSW5kZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYm90dG9tSW5kZW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2JvdHRvbUluZGVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbW1vblNlcmllc1NldHRpbmdzKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnKTtcclxuICAgIH1cclxuICAgIHNldCBjb21tb25TZXJpZXNTZXR0aW5ncyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb21tb25TZXJpZXNTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFQcmVwYXJlU2V0dGluZ3MoKTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YVByZXBhcmVTZXR0aW5ncyh2YWx1ZTogeyBjaGVja1R5cGVGb3JBbGxEYXRhPzogYm9vbGVhbiwgY29udmVydFRvQXhpc0RhdGFUeXBlPzogYm9vbGVhbiwgc29ydGluZ01ldGhvZD86IGJvb2xlYW4gfCBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhUHJlcGFyZVNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXF1YWxCYXJXaWR0aCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlcXVhbEJhcldpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXF1YWxCYXJXaWR0aCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZXF1YWxCYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heEJ1YmJsZVNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtYXhCdWJibGVTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4QnViYmxlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtYXhCdWJibGVTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluQnViYmxlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbkJ1YmJsZVNpemUnKTtcclxuICAgIH1cclxuICAgIHNldCBtaW5CdWJibGVTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ21pbkJ1YmJsZVNpemUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuZWdhdGl2ZXNBc1plcm9lcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5lZ2F0aXZlc0FzWmVyb2VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCduZWdhdGl2ZXNBc1plcm9lcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBhbGV0dGUoKTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFsZXR0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbGV0dGUodmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhbGV0dGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlRXh0ZW5zaW9uTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFsZXR0ZUV4dGVuc2lvbk1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXMoKTogYW55IHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzKHZhbHVlOiBhbnkgfCBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZXJpZXNUZW1wbGF0ZSgpOiB7IGN1c3RvbWl6ZVNlcmllcz86IEZ1bmN0aW9uLCBuYW1lRmllbGQ/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZXJpZXNUZW1wbGF0ZSh2YWx1ZTogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nlcmllc1RlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdG9wSW5kZW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9wSW5kZW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9wSW5kZW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RvcEluZGVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZUFnZ3JlZ2F0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZUFnZ3JlZ2F0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlQWdncmVnYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZUFnZ3JlZ2F0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVBeGlzKCk6IHsgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBudW1iZXIsIG1pbj86IG51bWJlciwgdHlwZT86IHN0cmluZywgdmFsdWVUeXBlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlQXhpcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQXhpcyh2YWx1ZTogeyBpbnZlcnRlZD86IGJvb2xlYW4sIGxvZ2FyaXRobUJhc2U/OiBudW1iZXIsIG1heD86IG51bWJlciwgbWluPzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCB2YWx1ZVR5cGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVBeGlzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY2hhcnQnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpU2VyaWVzQ29tcG9uZW50KSlcclxuICAgIGdldCBzZXJpZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpU2VyaWVzQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VyaWVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdzZXJpZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9DaGFydENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQ2hhcnRDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ2hhcnRNb2R1bGUgeyB9XHJcbiJdfQ==