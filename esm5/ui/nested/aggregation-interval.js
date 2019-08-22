/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
var DxoAggregationIntervalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoAggregationIntervalComponent, _super);
    function DxoAggregationIntervalComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "days", {
        get: function () {
            return this._getOption('days');
        },
        set: function (value) {
            this._setOption('days', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "hours", {
        get: function () {
            return this._getOption('hours');
        },
        set: function (value) {
            this._setOption('hours', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "milliseconds", {
        get: function () {
            return this._getOption('milliseconds');
        },
        set: function (value) {
            this._setOption('milliseconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "minutes", {
        get: function () {
            return this._getOption('minutes');
        },
        set: function (value) {
            this._setOption('minutes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "months", {
        get: function () {
            return this._getOption('months');
        },
        set: function (value) {
            this._setOption('months', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "quarters", {
        get: function () {
            return this._getOption('quarters');
        },
        set: function (value) {
            this._setOption('quarters', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "seconds", {
        get: function () {
            return this._getOption('seconds');
        },
        set: function (value) {
            this._setOption('seconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "weeks", {
        get: function () {
            return this._getOption('weeks');
        },
        set: function (value) {
            this._setOption('weeks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "years", {
        get: function () {
            return this._getOption('years');
        },
        set: function (value) {
            this._setOption('years', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAggregationIntervalComponent.prototype, "_optionPath", {
        get: function () {
            return 'aggregationInterval';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "days", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "hours", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "milliseconds", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "minutes", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "months", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "quarters", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "seconds", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "weeks", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxoAggregationIntervalComponent.prototype, "years", null);
    DxoAggregationIntervalComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-aggregation-interval',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoAggregationIntervalComponent);
    return DxoAggregationIntervalComponent;
}(NestedOption));
export { DxoAggregationIntervalComponent };
var DxoAggregationIntervalModule = /** @class */ (function () {
    function DxoAggregationIntervalModule() {
    }
    DxoAggregationIntervalModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoAggregationIntervalComponent
            ],
            exports: [
                DxoAggregationIntervalComponent
            ],
        })
    ], DxoAggregationIntervalModule);
    return DxoAggregationIntervalModule;
}());
export { DxoAggregationIntervalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24taW50ZXJ2YWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvYWdncmVnYXRpb24taW50ZXJ2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUdwQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTeEQ7SUFBcUQsMkRBQVk7SUErRTdELHlDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFsRkQsc0JBQUksaURBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7YUFDRCxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxrREFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQzthQUNELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHlEQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxvREFBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQzthQUNELFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLG1EQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO2FBQ0QsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUhBO0lBTUQsc0JBQUkscURBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxvREFBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQzthQUNELFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLGtEQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQ0QsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksa0RBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFDRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBYyx3REFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQTFFRDtRQURDLEtBQUssRUFBRTs7OytEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztnRUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7dUVBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O2tFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztpRUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7bUVBR1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O2tFQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztnRUFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzs7Z0VBR1A7SUFwRVEsK0JBQStCO1FBTjNDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFEcEIsRUFBRTtTQUVkLENBQUM7UUFnRmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFEbUMsZ0JBQWdCO1lBQ3RDLGdCQUFnQjtPQWhGbkMsK0JBQStCLENBc0YzQztJQUFELHNDQUFDO0NBQUEsQUF0RkQsQ0FBcUQsWUFBWSxHQXNGaEU7U0F0RlksK0JBQStCO0FBZ0c1QztJQUFBO0lBQTRDLENBQUM7SUFBaEMsNEJBQTRCO1FBUnhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiwrQkFBK0I7YUFDaEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztPQUNXLDRCQUE0QixDQUFJO0lBQUQsbUNBQUM7Q0FBQSxBQUE3QyxJQUE2QztTQUFoQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYWdncmVnYXRpb24taW50ZXJ2YWwnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxDb21wb25lbnQgZXh0ZW5kcyBOZXN0ZWRPcHRpb24ge1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXlzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF5cycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRheXModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF5cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaG91cnMnKTtcclxuICAgIH1cclxuICAgIHNldCBob3Vycyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3VycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbGxpc2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbGxpc2Vjb25kcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbGxpc2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaWxsaXNlY29uZHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWludXRlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbnV0ZXModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWludXRlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1vbnRocygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21vbnRocycpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1vbnRocyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtb250aHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBxdWFydGVycygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3F1YXJ0ZXJzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcXVhcnRlcnModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncXVhcnRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWNvbmRzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2Vjb25kcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlY29uZHModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Vjb25kcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdlZWtzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd2Vla3MnKTtcclxuICAgIH1cclxuICAgIHNldCB3ZWVrcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3ZWVrcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHllYXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigneWVhcnMnKTtcclxuICAgIH1cclxuICAgIHNldCB5ZWFycyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd5ZWFycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2FnZ3JlZ2F0aW9uSW50ZXJ2YWwnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0FnZ3JlZ2F0aW9uSW50ZXJ2YWxDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQWdncmVnYXRpb25JbnRlcnZhbE1vZHVsZSB7IH1cclxuIl19