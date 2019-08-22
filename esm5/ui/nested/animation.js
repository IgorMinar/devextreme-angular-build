/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoAnimationConfig } from './base/animation-config';
var DxoAnimationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoAnimationComponent, _super);
    function DxoAnimationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAnimationComponent.prototype, "_optionPath", {
        get: function () {
            return 'animation';
        },
        enumerable: true,
        configurable: true
    });
    DxoAnimationComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-animation',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'duration',
                'easing',
                'enabled',
                'maxPointCountSupported',
                'hide',
                'show',
                'complete',
                'delay',
                'direction',
                'from',
                'staggerDelay',
                'start',
                'to',
                'type'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoAnimationComponent);
    return DxoAnimationComponent;
}(DxoAnimationConfig));
export { DxoAnimationComponent };
var DxoAnimationModule = /** @class */ (function () {
    function DxoAnimationModule() {
    }
    DxoAnimationModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoAnimationComponent
            ],
            exports: [
                DxoAnimationComponent
            ],
        })
    ], DxoAnimationModule);
    return DxoAnimationModule;
}());
export { DxoAnimationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2FuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBeUI3RDtJQUEyQyxpREFBa0I7SUFPekQsK0JBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLDhDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUpRLHFCQUFxQjtRQXRCakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osVUFBVTtnQkFDVixRQUFRO2dCQUNSLFNBQVM7Z0JBQ1Qsd0JBQXdCO2dCQUN4QixNQUFNO2dCQUNOLE1BQU07Z0JBQ04sVUFBVTtnQkFDVixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsTUFBTTtnQkFDTixjQUFjO2dCQUNkLE9BQU87Z0JBQ1AsSUFBSTtnQkFDSixNQUFNO2FBQ1Q7cUJBakJRLEVBQUU7U0FrQmQsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMscUJBQXFCLENBY2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWRELENBQTJDLGtCQUFrQixHQWM1RDtTQWRZLHFCQUFxQjtBQXdCbEM7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVI5QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1oscUJBQXFCO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQW5pbWF0aW9uQ29uZmlnIH0gZnJvbSAnLi9iYXNlL2FuaW1hdGlvbi1jb25maWcnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tYW5pbWF0aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2R1cmF0aW9uJyxcclxuICAgICAgICAnZWFzaW5nJyxcclxuICAgICAgICAnZW5hYmxlZCcsXHJcbiAgICAgICAgJ21heFBvaW50Q291bnRTdXBwb3J0ZWQnLFxyXG4gICAgICAgICdoaWRlJyxcclxuICAgICAgICAnc2hvdycsXHJcbiAgICAgICAgJ2NvbXBsZXRlJyxcclxuICAgICAgICAnZGVsYXknLFxyXG4gICAgICAgICdkaXJlY3Rpb24nLFxyXG4gICAgICAgICdmcm9tJyxcclxuICAgICAgICAnc3RhZ2dlckRlbGF5JyxcclxuICAgICAgICAnc3RhcnQnLFxyXG4gICAgICAgICd0bycsXHJcbiAgICAgICAgJ3R5cGUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9BbmltYXRpb25Db21wb25lbnQgZXh0ZW5kcyBEeG9BbmltYXRpb25Db25maWcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhbmltYXRpb24nO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0FuaW1hdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvQW5pbWF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0FuaW1hdGlvbk1vZHVsZSB7IH1cclxuIl19