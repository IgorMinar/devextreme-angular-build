/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiFieldComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
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
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFvQmhEO0lBQTRDLGtEQUFzQjtJQWU5RCxnQ0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FTVjtRQVJHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFO2dCQUMzRSx5Q0FBeUM7Z0JBQ3pDLHdGQUF3RixDQUMzRixDQUFDO1FBQ04sQ0FBQzs7SUFDTCxDQUFDO0lBeEJELHNCQUFjLCtDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLGtEQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUNELFVBQW1CLEtBQUs7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFGRDtRQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDLENBQUM7MENBQy9CLFNBQVM7O2dFQUU5QjtJQVZRLHNCQUFzQjtRQWpCbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsV0FBVztnQkFDWCxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsT0FBTzthQUNWO3FCQVpRLEVBQUU7U0FhZCxDQUFDO1FBZ0JlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FoQm5DLHNCQUFzQixDQTRCbEM7SUFBRCw2QkFBQztDQUFBLEFBNUJELENBQTRDLHNCQUFzQixHQTRCakU7U0E1Qlksc0JBQXNCO0FBc0NuQztJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBUi9CLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixzQkFBc0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asc0JBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB9IGZyb20gJy4vYmFzZS9waXZvdC1ncmlkLWRhdGEtc291cmNlJztcclxuaW1wb3J0IHsgRHhpRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kYXRhLXNvdXJjZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdmaWVsZHMnLFxyXG4gICAgICAgICdmaWx0ZXInLFxyXG4gICAgICAgICdvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvbkZpZWxkc1ByZXBhcmVkJyxcclxuICAgICAgICAnb25Mb2FkRXJyb3InLFxyXG4gICAgICAgICdvbkxvYWRpbmdDaGFuZ2VkJyxcclxuICAgICAgICAncmVtb3RlT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ3JldHJpZXZlRmllbGRzJyxcclxuICAgICAgICAnc3RvcmUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EYXRhU291cmNlQ29tcG9uZW50IGV4dGVuZHMgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGFTb3VyY2UnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpRmllbGRDb21wb25lbnQpKVxyXG4gICAgZ2V0IGZpZWxkc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlGaWVsZENvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKChjb25zb2xlKSAmJiAoY29uc29sZS53YXJuKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBuZXN0ZWQgXFwnZHhvLWRhdGEtc291cmNlXFwnIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkIGluIDE3LjIuICcgK1xyXG4gICAgICAgICAgICAgICAgJ1VzZSB0aGUgXFwnZGF0YVNvdXJjZVxcJyBvcHRpb24gaW5zdGVhZC4gJyArXHJcbiAgICAgICAgICAgICAgICAnU2VlOlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhci9ibG9iL21hc3Rlci9DSEFOR0VMT0cubWQjMTcuMi4zJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFTb3VyY2VNb2R1bGUgeyB9XHJcbiJdfQ==