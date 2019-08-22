/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoButtonOptions } from './base/button-options';
var DxoOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoOptionsComponent, _super);
    function DxoOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'options';
        },
        enumerable: true,
        configurable: true
    });
    DxoOptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-options',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'disabled',
                'elementAttr',
                'focusStateEnabled',
                'height',
                'hint',
                'hoverStateEnabled',
                'icon',
                'onClick',
                'onContentReady',
                'onDisposing',
                'onInitialized',
                'onOptionChanged',
                'rtlEnabled',
                'stylingMode',
                'tabIndex',
                'template',
                'text',
                'type',
                'useSubmitBehavior',
                'validationGroup',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoOptionsComponent);
    return DxoOptionsComponent;
}(DxoButtonOptions));
export { DxoOptionsComponent };
var DxoOptionsModule = /** @class */ (function () {
    function DxoOptionsModule() {
    }
    DxoOptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoOptionsComponent
            ],
            exports: [
                DxoOptionsComponent
            ],
        })
    ], DxoOptionsModule);
    return DxoOptionsModule;
}());
export { DxoOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFtQ3pEO0lBQXlDLCtDQUFnQjtJQU9yRCw2QkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBVkQsc0JBQWMsNENBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBSlEsbUJBQW1CO1FBaEMvQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsUUFBUTtnQkFDUixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsTUFBTTtnQkFDTixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixNQUFNO2dCQUNOLE1BQU07Z0JBQ04sbUJBQW1CO2dCQUNuQixpQkFBaUI7Z0JBQ2pCLFNBQVM7Z0JBQ1QsT0FBTzthQUNWO3FCQTNCUSxFQUFFO1NBNEJkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BUm5DLG1CQUFtQixDQWMvQjtJQUFELDBCQUFDO0NBQUEsQUFkRCxDQUF5QyxnQkFBZ0IsR0FjeEQ7U0FkWSxtQkFBbUI7QUF3QmhDO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFSNUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0J1dHRvbk9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvYnV0dG9uLW9wdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tb3B0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhY3RpdmVTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAnb25DbGljaycsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3N0eWxpbmdNb2RlJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd0ZW1wbGF0ZScsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndXNlU3VibWl0QmVoYXZpb3InLFxyXG4gICAgICAgICd2YWxpZGF0aW9uR3JvdXAnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9PcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgRHhvQnV0dG9uT3B0aW9ucyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ29wdGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b09wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b09wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvT3B0aW9uc01vZHVsZSB7IH1cclxuIl19