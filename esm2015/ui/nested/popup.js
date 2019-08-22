/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPopupOptions } from './base/popup-options';
import { DxiToolbarItemComponent } from './toolbar-item-dxi';
let DxoPopupComponent = class DxoPopupComponent extends DxoPopupOptions {
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
        return 'popup';
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
], DxoPopupComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoPopupComponent.prototype, "positionChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoPopupComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoPopupComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiToolbarItemComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoPopupComponent.prototype, "toolbarItemsChildren", null);
DxoPopupComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-popup',
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
], DxoPopupComponent);
export { DxoPopupComponent };
let DxoPopupModule = class DxoPopupModule {
};
DxoPopupModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoPopupComponent
        ],
        exports: [
            DxoPopupComponent
        ],
    })
], DxoPopupModule);
export { DxoPopupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXVEN0QsSUFBYSxpQkFBaUIsR0FBOUIsdUJBQStCLFNBQVEsZUFBZTtJQWtDbEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExQkQsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUlELElBQUksb0JBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQUs7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQWlCSixDQUFBO0FBNUNhO0lBQVQsTUFBTSxFQUFFO3NDQUFlLFlBQVk7dURBQTZCO0FBS3ZEO0lBQVQsTUFBTSxFQUFFO3NDQUFpQixZQUFZO3lEQUFnRDtBQUs1RTtJQUFULE1BQU0sRUFBRTtzQ0FBZ0IsWUFBWTt3REFBVTtBQUtyQztJQUFULE1BQU0sRUFBRTtzQ0FBYyxZQUFZO3NEQUE2QjtBQU9oRTtJQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQztzQ0FDL0IsU0FBUzs7NkRBRXBDO0FBN0JRLGlCQUFpQjtJQXBEN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixXQUFXO1lBQ1gsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixRQUFRO1lBQ1IsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixVQUFVO1lBQ1YsVUFBVTtZQUNWLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGFBQWE7WUFDYixlQUFlO1lBQ2YsV0FBVztZQUNYLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGVBQWU7WUFDZixZQUFZO1lBQ1osU0FBUztZQUNULGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsV0FBVztZQUNYLFVBQVU7WUFDVixPQUFPO1lBQ1AsZUFBZTtZQUNmLGNBQWM7WUFDZCxTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQS9DUSxFQUFFO0tBZ0RkLENBQUM7SUFtQ2UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQW5DbkMsaUJBQWlCLENBaUQ3QjtTQWpEWSxpQkFBaUI7QUEyRDlCLElBQWEsY0FBYyxHQUEzQjtDQUErQixDQUFBO0FBQWxCLGNBQWM7SUFSMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCO1NBQ2xCO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FBSTtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9Qb3B1cE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvcG9wdXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLWl0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXBvcHVwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FuaW1hdGlvbicsXHJcbiAgICAgICAgJ2Nsb3NlT25CYWNrQnV0dG9uJyxcclxuICAgICAgICAnY2xvc2VPbk91dHNpZGVDbGljaycsXHJcbiAgICAgICAgJ2NvbnRhaW5lcicsXHJcbiAgICAgICAgJ2NvbnRlbnRUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2RlZmVyUmVuZGVyaW5nJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdkcmFnRW5hYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdmdWxsU2NyZWVuJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAnbWF4V2lkdGgnLFxyXG4gICAgICAgICdtaW5IZWlnaHQnLFxyXG4gICAgICAgICdtaW5XaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkhpZGRlbicsXHJcbiAgICAgICAgJ29uSGlkaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uUmVzaXplJyxcclxuICAgICAgICAnb25SZXNpemVFbmQnLFxyXG4gICAgICAgICdvblJlc2l6ZVN0YXJ0JyxcclxuICAgICAgICAnb25TaG93aW5nJyxcclxuICAgICAgICAnb25TaG93bicsXHJcbiAgICAgICAgJ29uVGl0bGVSZW5kZXJlZCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJyxcclxuICAgICAgICAncmVzaXplRW5hYmxlZCcsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaGFkaW5nJyxcclxuICAgICAgICAnc2hhZGluZ0NvbG9yJyxcclxuICAgICAgICAnc2hvd0Nsb3NlQnV0dG9uJyxcclxuICAgICAgICAnc2hvd1RpdGxlJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd0aXRsZScsXHJcbiAgICAgICAgJ3RpdGxlVGVtcGxhdGUnLFxyXG4gICAgICAgICd0b29sYmFySXRlbXMnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Qb3B1cENvbXBvbmVudCBleHRlbmRzIER4b1BvcHVwT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwb3NpdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5wb3NpdGlvbkNvbmZpZyB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3BvcHVwJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCB0b29sYmFySXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVG9vbGJhckl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sYmFySXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCB0b29sYmFySXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3Rvb2xiYXJJdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Bvc2l0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvUG9wdXBDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1BvcHVwQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1BvcHVwTW9kdWxlIHsgfVxyXG4iXX0=