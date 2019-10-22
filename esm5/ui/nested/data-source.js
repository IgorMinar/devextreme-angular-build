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
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxoPivotGridDataSource } from './base/pivot-grid-data-source';
import { DxiFieldComponent } from './field-dxi';
var DxoDataSourceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoDataSourceComponent, _super);
    function DxoDataSourceComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        if ((console) && (console.warn)) {
            console.warn('The nested \'dxo-data-source\' component is deprecated in 17.2. ' +
                'Use the \'dataSource\' option instead. ' +
                'See:\nhttps://github.com/DevExpress/devextreme-angular/blob/master/CHANGELOG.md#17.2.3');
        }
        return _this;
    }
    Object.defineProperty(DxoDataSourceComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataSource';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataSourceComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoDataSourceComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiFieldComponent; }))
    ], DxoDataSourceComponent.prototype, "fieldsChildren", null);
    DxoDataSourceComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-data-source',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'fields',
                'filter',
                'onChanged',
                'onFieldsPrepared',
                'onLoadError',
                'onLoadingChanged',
                'remoteOperations',
                'retrieveFields',
                'store'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoDataSourceComponent);
    return DxoDataSourceComponent;
}(DxoPivotGridDataSource));
export { DxoDataSourceComponent };
var DxoDataSourceModule = /** @class */ (function () {
    function DxoDataSourceModule() {
    }
    DxoDataSourceModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoDataSourceComponent
            ],
            exports: [
                DxoDataSourceComponent
            ],
        })
    ], DxoDataSourceModule);
    return DxoDataSourceModule;
}());
export { DxoDataSourceModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLGVBQWUsRUFDZixVQUFVLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQW9CaEQ7SUFBNEMsa0RBQXNCO0lBZTlELGdDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQVNWO1FBUkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFO2dCQUMzRSx5Q0FBeUM7Z0JBQ3pDLHdGQUF3RixDQUMzRixDQUFDO1NBQ0w7O0lBQ0wsQ0FBQztJQXhCRCxzQkFBYywrQ0FBVzthQUF6QjtZQUNJLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksa0RBQWM7YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUNELFVBQW1CLEtBQUs7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7O2dCQUtpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFSYjtRQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDLENBQUM7Z0VBR3BEO0lBVlEsc0JBQXNCO1FBakJsQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixXQUFXO2dCQUNYLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixPQUFPO2FBQ1Y7cUJBWlEsRUFBRTtTQWFkLENBQUM7UUFnQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQWhCTixzQkFBc0IsQ0E0QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVCRCxDQUE0QyxzQkFBc0IsR0E0QmpFO1NBNUJZLHNCQUFzQjtBQXNDbkM7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQVIvQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osc0JBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB9IGZyb20gJy4vYmFzZS9waXZvdC1ncmlkLWRhdGEtc291cmNlJztcclxuaW1wb3J0IHsgRHhpRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kYXRhLXNvdXJjZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdmaWVsZHMnLFxyXG4gICAgICAgICdmaWx0ZXInLFxyXG4gICAgICAgICdvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvbkZpZWxkc1ByZXBhcmVkJyxcclxuICAgICAgICAnb25Mb2FkRXJyb3InLFxyXG4gICAgICAgICdvbkxvYWRpbmdDaGFuZ2VkJyxcclxuICAgICAgICAncmVtb3RlT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ3JldHJpZXZlRmllbGRzJyxcclxuICAgICAgICAnc3RvcmUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EYXRhU291cmNlQ29tcG9uZW50IGV4dGVuZHMgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGFTb3VyY2UnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpRmllbGRDb21wb25lbnQpKVxyXG4gICAgZ2V0IGZpZWxkc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlGaWVsZENvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKChjb25zb2xlKSAmJiAoY29uc29sZS53YXJuKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBuZXN0ZWQgXFwnZHhvLWRhdGEtc291cmNlXFwnIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkIGluIDE3LjIuICcgK1xyXG4gICAgICAgICAgICAgICAgJ1VzZSB0aGUgXFwnZGF0YVNvdXJjZVxcJyBvcHRpb24gaW5zdGVhZC4gJyArXHJcbiAgICAgICAgICAgICAgICAnU2VlOlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhci9ibG9iL21hc3Rlci9DSEFOR0VMT0cubWQjMTcuMi4zJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFTb3VyY2VNb2R1bGUgeyB9XHJcbiJdfQ==