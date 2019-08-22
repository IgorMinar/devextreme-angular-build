/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoTabPanelOptions } from './base/tab-panel-options';
import { DxiItemComponent } from './item-dxi';
var DxoTabPanelOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoTabPanelOptionsComponent, _super);
    function DxoTabPanelOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'itemsChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'tabPanelOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoTabPanelOptionsComponent.prototype, "itemsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoTabPanelOptionsComponent.prototype, "selectedIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoTabPanelOptionsComponent.prototype, "selectedItemChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiItemComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoTabPanelOptionsComponent.prototype, "itemsChildren", null);
    DxoTabPanelOptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-tab-panel-options',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'animationEnabled',
                'dataSource',
                'deferRendering',
                'disabled',
                'elementAttr',
                'focusStateEnabled',
                'height',
                'hint',
                'hoverStateEnabled',
                'itemHoldTimeout',
                'items',
                'itemTemplate',
                'itemTitleTemplate',
                'loop',
                'noDataText',
                'onContentReady',
                'onDisposing',
                'onInitialized',
                'onItemClick',
                'onItemContextMenu',
                'onItemHold',
                'onItemRendered',
                'onOptionChanged',
                'onSelectionChanged',
                'onTitleClick',
                'onTitleHold',
                'onTitleRendered',
                'repaintChangesOnly',
                'rtlEnabled',
                'scrollByContent',
                'scrollingEnabled',
                'selectedIndex',
                'selectedItem',
                'showNavButtons',
                'swipeEnabled',
                'tabIndex',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoTabPanelOptionsComponent);
    return DxoTabPanelOptionsComponent;
}(DxoTabPanelOptions));
export { DxoTabPanelOptionsComponent };
var DxoTabPanelOptionsModule = /** @class */ (function () {
    function DxoTabPanelOptionsModule() {
    }
    DxoTabPanelOptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoTabPanelOptionsComponent
            ],
            exports: [
                DxoTabPanelOptionsComponent
            ],
        })
    ], DxoTabPanelOptionsModule);
    return DxoTabPanelOptionsModule;
}());
export { DxoTabPanelOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmVsLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvdGFiLXBhbmVsLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQW1EOUM7SUFBaUQsdURBQWtCO0lBNkIvRCxxQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FVVjtRQVJHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdkIsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7U0FDakMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUF6QkQsc0JBQWMsb0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxzREFBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFDRCxVQUFrQixLQUFLO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUhBO0lBbkJTO1FBQVQsTUFBTSxFQUFFOzBDQUFjLFlBQVk7b0VBQStKO0lBS3hMO1FBQVQsTUFBTSxFQUFFOzBDQUFzQixZQUFZOzRFQUFTO0lBSzFDO1FBQVQsTUFBTSxFQUFFOzBDQUFxQixZQUFZOzJFQUFNO0lBT2hEO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUMsQ0FBQzswQ0FDL0IsU0FBUzs7b0VBRTdCO0lBeEJRLDJCQUEyQjtRQWhEdkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsa0JBQWtCO2dCQUNsQixZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsUUFBUTtnQkFDUixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsbUJBQW1CO2dCQUNuQixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLFVBQVU7Z0JBQ1YsU0FBUztnQkFDVCxPQUFPO2FBQ1Y7cUJBM0NRLEVBQUU7U0E0Q2QsQ0FBQztRQThCZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BOUJuQywyQkFBMkIsQ0EyQ3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQTNDRCxDQUFpRCxrQkFBa0IsR0EyQ2xFO1NBM0NZLDJCQUEyQjtBQXFEeEM7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQVJwQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osMkJBQTJCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDJCQUEyQjthQUM1QjtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FBSTtJQUFELCtCQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b1RhYlBhbmVsT3B0aW9ucyB9IGZyb20gJy4vYmFzZS90YWItcGFuZWwtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXRhYi1wYW5lbC1vcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2FuaW1hdGlvbkVuYWJsZWQnLFxyXG4gICAgICAgICdkYXRhU291cmNlJyxcclxuICAgICAgICAnZGVmZXJSZW5kZXJpbmcnLFxyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpdGVtSG9sZFRpbWVvdXQnLFxyXG4gICAgICAgICdpdGVtcycsXHJcbiAgICAgICAgJ2l0ZW1UZW1wbGF0ZScsXHJcbiAgICAgICAgJ2l0ZW1UaXRsZVRlbXBsYXRlJyxcclxuICAgICAgICAnbG9vcCcsXHJcbiAgICAgICAgJ25vRGF0YVRleHQnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uSXRlbUNsaWNrJyxcclxuICAgICAgICAnb25JdGVtQ29udGV4dE1lbnUnLFxyXG4gICAgICAgICdvbkl0ZW1Ib2xkJyxcclxuICAgICAgICAnb25JdGVtUmVuZGVyZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblNlbGVjdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblRpdGxlQ2xpY2snLFxyXG4gICAgICAgICdvblRpdGxlSG9sZCcsXHJcbiAgICAgICAgJ29uVGl0bGVSZW5kZXJlZCcsXHJcbiAgICAgICAgJ3JlcGFpbnRDaGFuZ2VzT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzY3JvbGxCeUNvbnRlbnQnLFxyXG4gICAgICAgICdzY3JvbGxpbmdFbmFibGVkJyxcclxuICAgICAgICAnc2VsZWN0ZWRJbmRleCcsXHJcbiAgICAgICAgJ3NlbGVjdGVkSXRlbScsXHJcbiAgICAgICAgJ3Nob3dOYXZCdXR0b25zJyxcclxuICAgICAgICAnc3dpcGVFbmFibGVkJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9UYWJQYW5lbE9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9UYWJQYW5lbE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXRlbXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PHN0cmluZyB8IGFueSB8IHsgYmFkZ2U/OiBzdHJpbmcsIGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgaWNvbj86IHN0cmluZywgdGFiVGVtcGxhdGU/OiBhbnksIHRlbXBsYXRlPzogYW55LCB0ZXh0Pzogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZEluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWxlY3RlZEl0ZW1DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3RhYlBhbmVsT3B0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnaXRlbXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkSXRlbUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvVGFiUGFuZWxPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=