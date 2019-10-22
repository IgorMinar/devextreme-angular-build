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
var DxoPopupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoPopupComponent, _super);
    function DxoPopupComponent(parentOptionHost, optionHost) {
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
    Object.defineProperty(DxoPopupComponent.prototype, "_optionPath", {
        get: function () {
            return 'popup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPopupComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoPopupComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
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
        ContentChildren(forwardRef(function () { return DxiToolbarItemComponent; }))
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
    return DxoPopupComponent;
}(DxoPopupOptions));
export { DxoPopupComponent };
var DxoPopupModule = /** @class */ (function () {
    function DxoPopupModule() {
    }
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
    return DxoPopupModule;
}());
export { DxoPopupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsicG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFFTixlQUFlLEVBQ2YsVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF1RDdEO0lBQXVDLDZDQUFlO0lBa0NsRCwyQkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FXVjtRQVRHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQTFCRCxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBSUQsc0JBQUksbURBQW9CO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7YUFDRCxVQUF5QixLQUFLO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUhBOztnQkFLaUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtnQkFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0lBOUJIO1FBQVQsTUFBTSxFQUFFOzJEQUF3RDtJQUt2RDtRQUFULE1BQU0sRUFBRTs2REFBNkU7SUFLNUU7UUFBVCxNQUFNLEVBQUU7NERBQXNDO0lBS3JDO1FBQVQsTUFBTSxFQUFFOzBEQUF1RDtJQU9oRTtRQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDLENBQUM7aUVBRzFEO0lBN0JRLGlCQUFpQjtRQXBEN0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osV0FBVztnQkFDWCxXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsZ0JBQWdCO2dCQUNoQixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osUUFBUTtnQkFDUixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixXQUFXO2dCQUNYLFNBQVM7Z0JBQ1QsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsT0FBTztnQkFDUCxlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsU0FBUztnQkFDVCxPQUFPO2FBQ1Y7cUJBL0NRLEVBQUU7U0FnRGQsQ0FBQztRQW1DZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BbkNOLGlCQUFpQixDQWlEN0I7SUFBRCx3QkFBQztDQUFBLEFBakRELENBQXVDLGVBQWUsR0FpRHJEO1NBakRZLGlCQUFpQjtBQTJEOUI7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFSMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4b1BvcHVwT3B0aW9ucyB9IGZyb20gJy4vYmFzZS9wb3B1cC1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpVG9vbGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXItaXRlbS1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tcG9wdXAnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYW5pbWF0aW9uJyxcclxuICAgICAgICAnY2xvc2VPbkJhY2tCdXR0b24nLFxyXG4gICAgICAgICdjbG9zZU9uT3V0c2lkZUNsaWNrJyxcclxuICAgICAgICAnY29udGFpbmVyJyxcclxuICAgICAgICAnY29udGVudFRlbXBsYXRlJyxcclxuICAgICAgICAnZGVmZXJSZW5kZXJpbmcnLFxyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2RyYWdFbmFibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2Z1bGxTY3JlZW4nLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdtYXhIZWlnaHQnLFxyXG4gICAgICAgICdtYXhXaWR0aCcsXHJcbiAgICAgICAgJ21pbkhlaWdodCcsXHJcbiAgICAgICAgJ21pbldpZHRoJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkRpc3Bvc2luZycsXHJcbiAgICAgICAgJ29uSGlkZGVuJyxcclxuICAgICAgICAnb25IaWRpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25SZXNpemUnLFxyXG4gICAgICAgICdvblJlc2l6ZUVuZCcsXHJcbiAgICAgICAgJ29uUmVzaXplU3RhcnQnLFxyXG4gICAgICAgICdvblNob3dpbmcnLFxyXG4gICAgICAgICdvblNob3duJyxcclxuICAgICAgICAnb25UaXRsZVJlbmRlcmVkJyxcclxuICAgICAgICAncG9zaXRpb24nLFxyXG4gICAgICAgICdyZXNpemVFbmFibGVkJyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3NoYWRpbmcnLFxyXG4gICAgICAgICdzaGFkaW5nQ29sb3InLFxyXG4gICAgICAgICdzaG93Q2xvc2VCdXR0b24nLFxyXG4gICAgICAgICdzaG93VGl0bGUnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3RpdGxlJyxcclxuICAgICAgICAndGl0bGVUZW1wbGF0ZScsXHJcbiAgICAgICAgJ3Rvb2xiYXJJdGVtcycsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1BvcHVwQ29tcG9uZW50IGV4dGVuZHMgRHhvUG9wdXBPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcG9zaXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnBvc2l0aW9uQ29uZmlnIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdwb3B1cCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlUb29sYmFySXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdG9vbGJhckl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVRvb2xiYXJJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbGJhckl0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbGJhckl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd0b29sYmFySXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwb3NpdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1BvcHVwQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Qb3B1cENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Qb3B1cE1vZHVsZSB7IH1cclxuIl19