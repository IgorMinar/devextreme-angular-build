/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
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
DxoPopupComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Output()
], DxoPopupComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output()
], DxoPopupComponent.prototype, "positionChange", void 0);
tslib_1.__decorate([
    Output()
], DxoPopupComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output()
], DxoPopupComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiToolbarItemComponent))
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
    tslib_1.__param(1, Host())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsicG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFFTixlQUFlLEVBQ2YsVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF1RDdELElBQWEsaUJBQWlCLEdBQTlCLHVCQUErQixTQUFRLGVBQWU7SUFrQ2xELFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBMUJELElBQWMsV0FBVztRQUNyQixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBSUQsSUFBSSxvQkFBb0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQUs7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQWlCSixDQUFBOztZQWZxRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO1lBQ0QsZ0JBQWdCLHVCQUFuQyxJQUFJOztBQTlCSDtJQUFULE1BQU0sRUFBRTt1REFBd0Q7QUFLdkQ7SUFBVCxNQUFNLEVBQUU7eURBQTZFO0FBSzVFO0lBQVQsTUFBTSxFQUFFO3dEQUFzQztBQUtyQztJQUFULE1BQU0sRUFBRTtzREFBdUQ7QUFPaEU7SUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUM7NkRBRzFEO0FBN0JRLGlCQUFpQjtJQXBEN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixNQUFNLEVBQUU7WUFDSixXQUFXO1lBQ1gsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixRQUFRO1lBQ1IsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixVQUFVO1lBQ1YsVUFBVTtZQUNWLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGFBQWE7WUFDYixlQUFlO1lBQ2YsV0FBVztZQUNYLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGVBQWU7WUFDZixZQUFZO1lBQ1osU0FBUztZQUNULGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsV0FBVztZQUNYLFVBQVU7WUFDVixPQUFPO1lBQ1AsZUFBZTtZQUNmLGNBQWM7WUFDZCxTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQS9DUSxFQUFFO0tBZ0RkLENBQUM7SUFtQ2UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtHQW5DTixpQkFBaUIsQ0FpRDdCO1NBakRZLGlCQUFpQjtBQTJEOUIsSUFBYSxjQUFjLEdBQTNCO0NBQStCLENBQUE7QUFBbEIsY0FBYztJQVIxQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7U0FDbEI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFJO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhvUG9wdXBPcHRpb25zIH0gZnJvbSAnLi9iYXNlL3BvcHVwLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlUb29sYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci1pdGVtLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1wb3B1cCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhbmltYXRpb24nLFxyXG4gICAgICAgICdjbG9zZU9uQmFja0J1dHRvbicsXHJcbiAgICAgICAgJ2Nsb3NlT25PdXRzaWRlQ2xpY2snLFxyXG4gICAgICAgICdjb250YWluZXInLFxyXG4gICAgICAgICdjb250ZW50VGVtcGxhdGUnLFxyXG4gICAgICAgICdkZWZlclJlbmRlcmluZycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZHJhZ0VuYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ21heEhlaWdodCcsXHJcbiAgICAgICAgJ21heFdpZHRoJyxcclxuICAgICAgICAnbWluSGVpZ2h0JyxcclxuICAgICAgICAnbWluV2lkdGgnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25IaWRkZW4nLFxyXG4gICAgICAgICdvbkhpZGluZycsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblJlc2l6ZScsXHJcbiAgICAgICAgJ29uUmVzaXplRW5kJyxcclxuICAgICAgICAnb25SZXNpemVTdGFydCcsXHJcbiAgICAgICAgJ29uU2hvd2luZycsXHJcbiAgICAgICAgJ29uU2hvd24nLFxyXG4gICAgICAgICdvblRpdGxlUmVuZGVyZWQnLFxyXG4gICAgICAgICdwb3NpdGlvbicsXHJcbiAgICAgICAgJ3Jlc2l6ZUVuYWJsZWQnLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAnc2hhZGluZycsXHJcbiAgICAgICAgJ3NoYWRpbmdDb2xvcicsXHJcbiAgICAgICAgJ3Nob3dDbG9zZUJ1dHRvbicsXHJcbiAgICAgICAgJ3Nob3dUaXRsZScsXHJcbiAgICAgICAgJ3RhYkluZGV4JyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd0aXRsZVRlbXBsYXRlJyxcclxuICAgICAgICAndG9vbGJhckl0ZW1zJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBEeG9Qb3B1cE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MucG9zaXRpb25Db25maWcgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3BvcHVwJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCB0b29sYmFySXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVG9vbGJhckl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sYmFySXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCB0b29sYmFySXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3Rvb2xiYXJJdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Bvc2l0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvUG9wdXBDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1BvcHVwQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1BvcHVwTW9kdWxlIHsgfVxyXG4iXX0=