/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoAnimationConfig } from './base/animation-config';
var DxoHideComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoHideComponent, _super);
    function DxoHideComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoHideComponent.prototype, "_optionPath", {
        get: function () {
            return 'hide';
        },
        enumerable: true,
        configurable: true
    });
    DxoHideComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-hide',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'complete',
                'delay',
                'direction',
                'duration',
                'easing',
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
    ], DxoHideComponent);
    return DxoHideComponent;
}(DxoAnimationConfig));
export { DxoHideComponent };
var DxoHideModule = /** @class */ (function () {
    function DxoHideModule() {
    }
    DxoHideModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoHideComponent
            ],
            exports: [
                DxoHideComponent
            ],
        })
    ], DxoHideModule);
    return DxoHideModule;
}());
export { DxoHideModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9oaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFxQjdEO0lBQXNDLDRDQUFrQjtJQU9wRCwwQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBVkQsc0JBQWMseUNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBSlEsZ0JBQWdCO1FBbEI1QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixVQUFVO2dCQUNWLE9BQU87Z0JBQ1AsV0FBVztnQkFDWCxVQUFVO2dCQUNWLFFBQVE7Z0JBQ1IsTUFBTTtnQkFDTixjQUFjO2dCQUNkLE9BQU87Z0JBQ1AsSUFBSTtnQkFDSixNQUFNO2FBQ1Q7cUJBYlEsRUFBRTtTQWNkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BUm5DLGdCQUFnQixDQWM1QjtJQUFELHVCQUFDO0NBQUEsQUFkRCxDQUFzQyxrQkFBa0IsR0FjdkQ7U0FkWSxnQkFBZ0I7QUF3QjdCO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBUnpCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixnQkFBZ0I7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0FuaW1hdGlvbkNvbmZpZyB9IGZyb20gJy4vYmFzZS9hbmltYXRpb24tY29uZmlnJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWhpZGUnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnY29tcGxldGUnLFxyXG4gICAgICAgICdkZWxheScsXHJcbiAgICAgICAgJ2RpcmVjdGlvbicsXHJcbiAgICAgICAgJ2R1cmF0aW9uJyxcclxuICAgICAgICAnZWFzaW5nJyxcclxuICAgICAgICAnZnJvbScsXHJcbiAgICAgICAgJ3N0YWdnZXJEZWxheScsXHJcbiAgICAgICAgJ3N0YXJ0JyxcclxuICAgICAgICAndG8nLFxyXG4gICAgICAgICd0eXBlJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvSGlkZUNvbXBvbmVudCBleHRlbmRzIER4b0FuaW1hdGlvbkNvbmZpZyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2hpZGUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0hpZGVDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0hpZGVDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvSGlkZU1vZHVsZSB7IH1cclxuIl19