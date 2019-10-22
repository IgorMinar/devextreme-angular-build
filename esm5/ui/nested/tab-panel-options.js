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
    DxoTabPanelOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Output()
    ], DxoTabPanelOptionsComponent.prototype, "itemsChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoTabPanelOptionsComponent.prototype, "selectedIndexChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoTabPanelOptionsComponent.prototype, "selectedItemChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiItemComponent; }))
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
        tslib_1.__param(1, Host())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmVsLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsidGFiLXBhbmVsLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFFTixlQUFlLEVBQ2YsVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFtRDlDO0lBQWlELHVEQUFrQjtJQTZCL0QscUNBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBVVY7UUFSRyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ2pDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBekJELHNCQUFjLG9EQUFXO2FBQXpCO1lBQ0ksT0FBTyxpQkFBaUIsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHNEQUFhO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFDRCxVQUFrQixLQUFLO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUhBOztnQkFLaUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtnQkFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0lBekJIO1FBQVQsTUFBTSxFQUFFO29FQUF5TDtJQUt4TDtRQUFULE1BQU0sRUFBRTs0RUFBMkM7SUFLMUM7UUFBVCxNQUFNLEVBQUU7MkVBQXVDO0lBT2hEO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvRUFHbkQ7SUF4QlEsMkJBQTJCO1FBaER2QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLFdBQVc7Z0JBQ1gsb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sbUJBQW1CO2dCQUNuQixpQkFBaUI7Z0JBQ2pCLE9BQU87Z0JBQ1AsY0FBYztnQkFDZCxtQkFBbUI7Z0JBQ25CLE1BQU07Z0JBQ04sWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixvQkFBb0I7Z0JBQ3BCLFlBQVk7Z0JBQ1osaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2QsVUFBVTtnQkFDVixTQUFTO2dCQUNULE9BQU87YUFDVjtxQkEzQ1EsRUFBRTtTQTRDZCxDQUFDO1FBOEJlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0E5Qk4sMkJBQTJCLENBMkN2QztJQUFELGtDQUFDO0NBQUEsQUEzQ0QsQ0FBaUQsa0JBQWtCLEdBMkNsRTtTQTNDWSwyQkFBMkI7QUFxRHhDO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix3QkFBd0I7UUFScEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDJCQUEyQjthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDUCwyQkFBMkI7YUFDNUI7U0FDRixDQUFDO09BQ1csd0JBQXdCLENBQUk7SUFBRCwrQkFBQztDQUFBLEFBQXpDLElBQXlDO1NBQTVCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4b1RhYlBhbmVsT3B0aW9ucyB9IGZyb20gJy4vYmFzZS90YWItcGFuZWwtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXRhYi1wYW5lbC1vcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2FuaW1hdGlvbkVuYWJsZWQnLFxyXG4gICAgICAgICdkYXRhU291cmNlJyxcclxuICAgICAgICAnZGVmZXJSZW5kZXJpbmcnLFxyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpdGVtSG9sZFRpbWVvdXQnLFxyXG4gICAgICAgICdpdGVtcycsXHJcbiAgICAgICAgJ2l0ZW1UZW1wbGF0ZScsXHJcbiAgICAgICAgJ2l0ZW1UaXRsZVRlbXBsYXRlJyxcclxuICAgICAgICAnbG9vcCcsXHJcbiAgICAgICAgJ25vRGF0YVRleHQnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uSXRlbUNsaWNrJyxcclxuICAgICAgICAnb25JdGVtQ29udGV4dE1lbnUnLFxyXG4gICAgICAgICdvbkl0ZW1Ib2xkJyxcclxuICAgICAgICAnb25JdGVtUmVuZGVyZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblNlbGVjdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblRpdGxlQ2xpY2snLFxyXG4gICAgICAgICdvblRpdGxlSG9sZCcsXHJcbiAgICAgICAgJ29uVGl0bGVSZW5kZXJlZCcsXHJcbiAgICAgICAgJ3JlcGFpbnRDaGFuZ2VzT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzY3JvbGxCeUNvbnRlbnQnLFxyXG4gICAgICAgICdzY3JvbGxpbmdFbmFibGVkJyxcclxuICAgICAgICAnc2VsZWN0ZWRJbmRleCcsXHJcbiAgICAgICAgJ3NlbGVjdGVkSXRlbScsXHJcbiAgICAgICAgJ3Nob3dOYXZCdXR0b25zJyxcclxuICAgICAgICAnc3dpcGVFbmFibGVkJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9UYWJQYW5lbE9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9UYWJQYW5lbE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nIHwgYW55IHwgeyBiYWRnZT86IHN0cmluZywgZGlzYWJsZWQ/OiBib29sZWFuLCBodG1sPzogc3RyaW5nLCBpY29uPzogc3RyaW5nLCB0YWJUZW1wbGF0ZT86IGFueSwgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3RhYlBhbmVsT3B0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnaXRlbXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlbGVjdGVkSXRlbUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvVGFiUGFuZWxPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=