/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPopupOptions } from './base/popup-options';
import { DxiToolbarItemComponent } from './toolbar-item-dxi';
let DxoDropDownOptionsComponent = class DxoDropDownOptionsComponent extends DxoPopupOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'dropDownOptions';
    }
    get toolbarItemsChildren() {
        return this._getOption('toolbarItems');
    }
    set toolbarItemsChildren(value) {
        this.setChildren('toolbarItems', value);
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoDropDownOptionsComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoDropDownOptionsComponent.prototype, "positionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoDropDownOptionsComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoDropDownOptionsComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiToolbarItemComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoDropDownOptionsComponent.prototype, "toolbarItemsChildren", null);
DxoDropDownOptionsComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-drop-down-options',
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
], DxoDropDownOptionsComponent);
export { DxoDropDownOptionsComponent };
let DxoDropDownOptionsModule = class DxoDropDownOptionsModule {
};
DxoDropDownOptionsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoDropDownOptionsComponent
        ],
        exports: [
            DxoDropDownOptionsComponent
        ],
    })
], DxoDropDownOptionsModule);
export { DxoDropDownOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZHJvcC1kb3duLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXVEN0QsSUFBYSwyQkFBMkIsR0FBeEMsaUNBQXlDLFNBQVEsZUFBZTtJQWtDNUQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExQkQsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBSUQsSUFBSSxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksb0JBQW9CLENBQUMsS0FBSztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBaUJKLENBQUE7QUE1Q2E7SUFBVCxNQUFNLEVBQUU7c0NBQWUsWUFBWTtpRUFBNkI7QUFLdkQ7SUFBVCxNQUFNLEVBQUU7c0NBQWlCLFlBQVk7bUVBQWdEO0FBSzVFO0lBQVQsTUFBTSxFQUFFO3NDQUFnQixZQUFZO2tFQUFVO0FBS3JDO0lBQVQsTUFBTSxFQUFFO3NDQUFjLFlBQVk7Z0VBQTZCO0FBT2hFO0lBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO3NDQUMvQixTQUFTOzt1RUFFcEM7QUE3QlEsMkJBQTJCO0lBcER2QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osV0FBVztZQUNYLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixhQUFhO1lBQ2IsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osUUFBUTtZQUNSLE1BQU07WUFDTixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFVBQVU7WUFDVixXQUFXO1lBQ1gsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsVUFBVTtZQUNWLFVBQVU7WUFDVixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFVBQVU7WUFDVixhQUFhO1lBQ2IsZUFBZTtZQUNmLFdBQVc7WUFDWCxTQUFTO1lBQ1QsaUJBQWlCO1lBQ2pCLFVBQVU7WUFDVixlQUFlO1lBQ2YsWUFBWTtZQUNaLFNBQVM7WUFDVCxjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxVQUFVO1lBQ1YsT0FBTztZQUNQLGVBQWU7WUFDZixjQUFjO1lBQ2QsU0FBUztZQUNULE9BQU87U0FDVjtpQkEvQ1EsRUFBRTtLQWdEZCxDQUFDO0lBbUNlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FuQ25DLDJCQUEyQixDQWlEdkM7U0FqRFksMkJBQTJCO0FBMkR4QyxJQUFhLHdCQUF3QixHQUFyQztDQUF5QyxDQUFBO0FBQTVCLHdCQUF3QjtJQVJwQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiwyQkFBMkI7U0FDNUI7UUFDRCxPQUFPLEVBQUU7WUFDUCwyQkFBMkI7U0FDNUI7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBQUk7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9Qb3B1cE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvcG9wdXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLWl0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWRyb3AtZG93bi1vcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FuaW1hdGlvbicsXHJcbiAgICAgICAgJ2Nsb3NlT25CYWNrQnV0dG9uJyxcclxuICAgICAgICAnY2xvc2VPbk91dHNpZGVDbGljaycsXHJcbiAgICAgICAgJ2NvbnRhaW5lcicsXHJcbiAgICAgICAgJ2NvbnRlbnRUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2RlZmVyUmVuZGVyaW5nJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdkcmFnRW5hYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdmdWxsU2NyZWVuJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAnbWF4V2lkdGgnLFxyXG4gICAgICAgICdtaW5IZWlnaHQnLFxyXG4gICAgICAgICdtaW5XaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkhpZGRlbicsXHJcbiAgICAgICAgJ29uSGlkaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uUmVzaXplJyxcclxuICAgICAgICAnb25SZXNpemVFbmQnLFxyXG4gICAgICAgICdvblJlc2l6ZVN0YXJ0JyxcclxuICAgICAgICAnb25TaG93aW5nJyxcclxuICAgICAgICAnb25TaG93bicsXHJcbiAgICAgICAgJ29uVGl0bGVSZW5kZXJlZCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJyxcclxuICAgICAgICAncmVzaXplRW5hYmxlZCcsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaGFkaW5nJyxcclxuICAgICAgICAnc2hhZGluZ0NvbG9yJyxcclxuICAgICAgICAnc2hvd0Nsb3NlQnV0dG9uJyxcclxuICAgICAgICAnc2hvd1RpdGxlJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd0aXRsZScsXHJcbiAgICAgICAgJ3RpdGxlVGVtcGxhdGUnLFxyXG4gICAgICAgICd0b29sYmFySXRlbXMnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Ecm9wRG93bk9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9Qb3B1cE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcG9zaXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MucG9zaXRpb25Db25maWcgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkcm9wRG93bk9wdGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpVG9vbGJhckl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IHRvb2xiYXJJdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlUb29sYmFySXRlbUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Rvb2xiYXJJdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvb2xiYXJJdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndG9vbGJhckl0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncG9zaXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Ecm9wRG93bk9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0Ryb3BEb3duT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Ecm9wRG93bk9wdGlvbnNNb2R1bGUgeyB9XHJcbiJdfQ==