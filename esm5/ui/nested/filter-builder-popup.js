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
    DxoFilterBuilderPopupComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Output()
    ], DxoFilterBuilderPopupComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoFilterBuilderPopupComponent.prototype, "positionChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoFilterBuilderPopupComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoFilterBuilderPopupComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiToolbarItemComponent; }))
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
        tslib_1.__param(1, Host())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXItcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiZmlsdGVyLWJ1aWxkZXItcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFFTixlQUFlLEVBQ2YsVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF1RDdEO0lBQW9ELDBEQUFlO0lBa0MvRCx3Q0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FXVjtRQVRHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQTFCRCxzQkFBYyx1REFBVzthQUF6QjtZQUNJLE9BQU8sb0JBQW9CLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxnRUFBb0I7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQzthQUNELFVBQXlCLEtBQUs7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7O2dCQUtpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUE5Qkg7UUFBVCxNQUFNLEVBQUU7d0VBQXdEO0lBS3ZEO1FBQVQsTUFBTSxFQUFFOzBFQUE2RTtJQUs1RTtRQUFULE1BQU0sRUFBRTt5RUFBc0M7SUFLckM7UUFBVCxNQUFNLEVBQUU7dUVBQXVEO0lBT2hFO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLENBQUMsQ0FBQzs4RUFHMUQ7SUE3QlEsOEJBQThCO1FBcEQxQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLHFCQUFxQjtnQkFDckIsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLFFBQVE7Z0JBQ1IsTUFBTTtnQkFDTixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCxTQUFTO2dCQUNULGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsV0FBVztnQkFDWCxVQUFVO2dCQUNWLE9BQU87Z0JBQ1AsZUFBZTtnQkFDZixjQUFjO2dCQUNkLFNBQVM7Z0JBQ1QsT0FBTzthQUNWO3FCQS9DUSxFQUFFO1NBZ0RkLENBQUM7UUFtQ2UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQW5DTiw4QkFBOEIsQ0FpRDFDO0lBQUQscUNBQUM7Q0FBQSxBQWpERCxDQUFvRCxlQUFlLEdBaURsRTtTQWpEWSw4QkFBOEI7QUEyRDNDO0lBQUE7SUFBMkMsQ0FBQztJQUEvQiwyQkFBMkI7UUFSdkMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDhCQUE4QjthQUMvQjtZQUNELE9BQU8sRUFBRTtnQkFDUCw4QkFBOEI7YUFDL0I7U0FDRixDQUFDO09BQ1csMkJBQTJCLENBQUk7SUFBRCxrQ0FBQztDQUFBLEFBQTVDLElBQTRDO1NBQS9CLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeG9Qb3B1cE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvcG9wdXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLWl0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZpbHRlci1idWlsZGVyLXBvcHVwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FuaW1hdGlvbicsXHJcbiAgICAgICAgJ2Nsb3NlT25CYWNrQnV0dG9uJyxcclxuICAgICAgICAnY2xvc2VPbk91dHNpZGVDbGljaycsXHJcbiAgICAgICAgJ2NvbnRhaW5lcicsXHJcbiAgICAgICAgJ2NvbnRlbnRUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2RlZmVyUmVuZGVyaW5nJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdkcmFnRW5hYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdmdWxsU2NyZWVuJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAnbWF4V2lkdGgnLFxyXG4gICAgICAgICdtaW5IZWlnaHQnLFxyXG4gICAgICAgICdtaW5XaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkhpZGRlbicsXHJcbiAgICAgICAgJ29uSGlkaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uUmVzaXplJyxcclxuICAgICAgICAnb25SZXNpemVFbmQnLFxyXG4gICAgICAgICdvblJlc2l6ZVN0YXJ0JyxcclxuICAgICAgICAnb25TaG93aW5nJyxcclxuICAgICAgICAnb25TaG93bicsXHJcbiAgICAgICAgJ29uVGl0bGVSZW5kZXJlZCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJyxcclxuICAgICAgICAncmVzaXplRW5hYmxlZCcsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaGFkaW5nJyxcclxuICAgICAgICAnc2hhZGluZ0NvbG9yJyxcclxuICAgICAgICAnc2hvd0Nsb3NlQnV0dG9uJyxcclxuICAgICAgICAnc2hvd1RpdGxlJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd0aXRsZScsXHJcbiAgICAgICAgJ3RpdGxlVGVtcGxhdGUnLFxyXG4gICAgICAgICd0b29sYmFySXRlbXMnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9GaWx0ZXJCdWlsZGVyUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBEeG9Qb3B1cE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MucG9zaXRpb25Db25maWcgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbHRlckJ1aWxkZXJQb3B1cCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlUb29sYmFySXRlbUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdG9vbGJhckl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVRvb2xiYXJJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndG9vbGJhckl0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbGJhckl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd0b29sYmFySXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVpZ2h0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwb3NpdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0ZpbHRlckJ1aWxkZXJQb3B1cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvRmlsdGVyQnVpbGRlclBvcHVwQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0ZpbHRlckJ1aWxkZXJQb3B1cE1vZHVsZSB7IH1cclxuIl19