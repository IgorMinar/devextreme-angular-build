/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPopupOptions } from './base/popup-options';
import { DxiToolbarItemComponent } from './toolbar-item-dxi';
var DxoFilterBuilderPopupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoFilterBuilderPopupComponent, _super);
    function DxoFilterBuilderPopupComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFilterBuilderPopupComponent.prototype, "_optionPath", {
        get: function () {
            return 'filterBuilderPopup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFilterBuilderPopupComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoFilterBuilderPopupComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoFilterBuilderPopupComponent.prototype, "positionChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoFilterBuilderPopupComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoFilterBuilderPopupComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiToolbarItemComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxoFilterBuilderPopupComponent.prototype, "toolbarItemsChildren", null);
    DxoFilterBuilderPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-filter-builder-popup',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'animation',
                'closeOnBackButton',
                'closeOnOutsideClick',
                'container',
                'contentTemplate',
                'deferRendering',
                'disabled',
                'dragEnabled',
                'elementAttr',
                'focusStateEnabled',
                'fullScreen',
                'height',
                'hint',
                'hoverStateEnabled',
                'maxHeight',
                'maxWidth',
                'minHeight',
                'minWidth',
                'onContentReady',
                'onDisposing',
                'onHidden',
                'onHiding',
                'onInitialized',
                'onOptionChanged',
                'onResize',
                'onResizeEnd',
                'onResizeStart',
                'onShowing',
                'onShown',
                'onTitleRendered',
                'position',
                'resizeEnabled',
                'rtlEnabled',
                'shading',
                'shadingColor',
                'showCloseButton',
                'showTitle',
                'tabIndex',
                'title',
                'titleTemplate',
                'toolbarItems',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoFilterBuilderPopupComponent);
    return DxoFilterBuilderPopupComponent;
}(DxoPopupOptions));
export { DxoFilterBuilderPopupComponent };
var DxoFilterBuilderPopupModule = /** @class */ (function () {
    function DxoFilterBuilderPopupModule() {
    }
    DxoFilterBuilderPopupModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoFilterBuilderPopupComponent
            ],
            exports: [
                DxoFilterBuilderPopupComponent
            ],
        })
    ], DxoFilterBuilderPopupModule);
    return DxoFilterBuilderPopupModule;
}());
export { DxoFilterBuilderPopupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXItcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZmlsdGVyLWJ1aWxkZXItcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXVEN0Q7SUFBb0QsMERBQWU7SUFrQy9ELHdDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQVdWO1FBVEcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBMUJELHNCQUFjLHVEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBSUQsc0JBQUksZ0VBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQzthQUNELFVBQXlCLEtBQUs7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUF4QlM7UUFBVCxNQUFNLEVBQUU7MENBQWUsWUFBWTt3RUFBNkI7SUFLdkQ7UUFBVCxNQUFNLEVBQUU7MENBQWlCLFlBQVk7MEVBQWdEO0lBSzVFO1FBQVQsTUFBTSxFQUFFOzBDQUFnQixZQUFZO3lFQUFVO0lBS3JDO1FBQVQsTUFBTSxFQUFFOzBDQUFjLFlBQVk7dUVBQTZCO0lBT2hFO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLENBQUMsQ0FBQzswQ0FDL0IsU0FBUzs7OEVBRXBDO0lBN0JRLDhCQUE4QjtRQXBEMUMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixxQkFBcUI7Z0JBQ3JCLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsY0FBYztnQkFDZCxpQkFBaUI7Z0JBQ2pCLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixPQUFPO2dCQUNQLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxTQUFTO2dCQUNULE9BQU87YUFDVjtxQkEvQ1EsRUFBRTtTQWdEZCxDQUFDO1FBbUNlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FuQ25DLDhCQUE4QixDQWlEMUM7SUFBRCxxQ0FBQztDQUFBLEFBakRELENBQW9ELGVBQWUsR0FpRGxFO1NBakRZLDhCQUE4QjtBQTJEM0M7SUFBQTtJQUEyQyxDQUFDO0lBQS9CLDJCQUEyQjtRQVJ2QyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEJBQThCO2FBQy9CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDhCQUE4QjthQUMvQjtTQUNGLENBQUM7T0FDVywyQkFBMkIsQ0FBSTtJQUFELGtDQUFDO0NBQUEsQUFBNUMsSUFBNEM7U0FBL0IsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9Qb3B1cE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvcG9wdXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLWl0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZpbHRlci1idWlsZGVyLXBvcHVwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FuaW1hdGlvbicsXHJcbiAgICAgICAgJ2Nsb3NlT25CYWNrQnV0dG9uJyxcclxuICAgICAgICAnY2xvc2VPbk91dHNpZGVDbGljaycsXHJcbiAgICAgICAgJ2NvbnRhaW5lcicsXHJcbiAgICAgICAgJ2NvbnRlbnRUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2RlZmVyUmVuZGVyaW5nJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdkcmFnRW5hYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdmdWxsU2NyZWVuJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAnbWF4V2lkdGgnLFxyXG4gICAgICAgICdtaW5IZWlnaHQnLFxyXG4gICAgICAgICdtaW5XaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkhpZGRlbicsXHJcbiAgICAgICAgJ29uSGlkaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uUmVzaXplJyxcclxuICAgICAgICAnb25SZXNpemVFbmQnLFxyXG4gICAgICAgICdvblJlc2l6ZVN0YXJ0JyxcclxuICAgICAgICAnb25TaG93aW5nJyxcclxuICAgICAgICAnb25TaG93bicsXHJcbiAgICAgICAgJ29uVGl0bGVSZW5kZXJlZCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJyxcclxuICAgICAgICAncmVzaXplRW5hYmxlZCcsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaGFkaW5nJyxcclxuICAgICAgICAnc2hhZGluZ0NvbG9yJyxcclxuICAgICAgICAnc2hvd0Nsb3NlQnV0dG9uJyxcclxuICAgICAgICAnc2hvd1RpdGxlJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd0aXRsZScsXHJcbiAgICAgICAgJ3RpdGxlVGVtcGxhdGUnLFxyXG4gICAgICAgICd0b29sYmFySXRlbXMnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJCdWlsZGVyUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBEeG9Qb3B1cE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcG9zaXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MucG9zaXRpb25Db25maWcgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWx0ZXJCdWlsZGVyUG9wdXAnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpVG9vbGJhckl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IHRvb2xiYXJJdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlUb29sYmFySXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Rvb2xiYXJJdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2xiYXJJdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndG9vbGJhckl0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncG9zaXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyUG9wdXBDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJQb3B1cENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJCdWlsZGVyUG9wdXBNb2R1bGUgeyB9XHJcbiJdfQ==