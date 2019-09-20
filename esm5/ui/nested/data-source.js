var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPivotGridDataSource } from './base/pivot-grid-data-source';
import { DxiFieldComponent } from './field-dxi';
var DxoDataSourceComponent = (function (_super) {
    __extends(DxoDataSourceComponent, _super);
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
    DxoDataSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-data-source',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDataSourceComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoDataSourceComponent.propDecorators = {
        "fieldsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiFieldComponent; }),] },],
    };
    return DxoDataSourceComponent;
}(DxoPivotGridDataSource));
export { DxoDataSourceComponent };
var DxoDataSourceModule = (function () {
    function DxoDataSourceModule() {
    }
    DxoDataSourceModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoDataSourceComponent
                    ],
                    exports: [
                        DxoDataSourceComponent
                    ],
                },] },
    ];
    return DxoDataSourceModule;
}());
export { DxoDataSourceModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFvQkosMENBQXNCO0lBZTlELGdDQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQVNWO1FBUkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxrRUFBa0U7Z0JBQzNFLHlDQUF5QztnQkFDekMsd0ZBQXdGLENBQzNGLENBQUM7U0FDTDs7S0FDSjtJQXhCRCxzQkFBYywrQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDdkI7OztPQUFBOzBCQUlHLGtEQUFjOztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzthQUVyQyxVQUFtQixLQUFLO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OztnQkE5QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixPQUFPO3FCQUNWO2lCQUNKOzs7O2dCQXJCUSxnQkFBZ0IsdUJBcUNSLFFBQVEsWUFBSSxJQUFJO2dCQXJDeEIsZ0JBQWdCLHVCQXNDWixJQUFJOzs7bUNBVFosZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7O2lDQTVEeEQ7RUFxRDRDLHNCQUFzQjtTQUFyRCxzQkFBc0I7Ozs7O2dCQThCbEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGOzs4QkExRkQ7O1NBMkZhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB9IGZyb20gJy4vYmFzZS9waXZvdC1ncmlkLWRhdGEtc291cmNlJztcclxuaW1wb3J0IHsgRHhpRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kYXRhLXNvdXJjZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdmaWVsZHMnLFxyXG4gICAgICAgICdmaWx0ZXInLFxyXG4gICAgICAgICdvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvbkZpZWxkc1ByZXBhcmVkJyxcclxuICAgICAgICAnb25Mb2FkRXJyb3InLFxyXG4gICAgICAgICdvbkxvYWRpbmdDaGFuZ2VkJyxcclxuICAgICAgICAncmVtb3RlT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ3JldHJpZXZlRmllbGRzJyxcclxuICAgICAgICAnc3RvcmUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EYXRhU291cmNlQ29tcG9uZW50IGV4dGVuZHMgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGFTb3VyY2UnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpRmllbGRDb21wb25lbnQpKVxyXG4gICAgZ2V0IGZpZWxkc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlGaWVsZENvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKChjb25zb2xlKSAmJiAoY29uc29sZS53YXJuKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBuZXN0ZWQgXFwnZHhvLWRhdGEtc291cmNlXFwnIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkIGluIDE3LjIuICcgK1xyXG4gICAgICAgICAgICAgICAgJ1VzZSB0aGUgXFwnZGF0YVNvdXJjZVxcJyBvcHRpb24gaW5zdGVhZC4gJyArXHJcbiAgICAgICAgICAgICAgICAnU2VlOlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhci9ibG9iL21hc3Rlci9DSEFOR0VMT0cubWQjMTcuMi4zJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFTb3VyY2VNb2R1bGUgeyB9XHJcbiJdfQ==