/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPivotGridDataSource } from './base/pivot-grid-data-source';
import { DxiFieldComponent } from './field-dxi';
let DxoDataSourceComponent = class DxoDataSourceComponent extends DxoPivotGridDataSource {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        if ((console) && (console.warn)) {
            console.warn('The nested \'dxo-data-source\' component is deprecated in 17.2. ' +
                'Use the \'dataSource\' option instead. ' +
                'See:\nhttps://github.com/DevExpress/devextreme-angular/blob/master/CHANGELOG.md#17.2.3');
        }
    }
    get _optionPath() {
        return 'dataSource';
    }
    get fieldsChildren() {
        return this._getOption('fields');
    }
    set fieldsChildren(value) {
        this.setChildren('fields', value);
    }
};
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiFieldComponent)),
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
export { DxoDataSourceComponent };
let DxoDataSourceModule = class DxoDataSourceModule {
};
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
export { DxoDataSourceModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFvQmhELElBQWEsc0JBQXNCLEdBQW5DLDRCQUFvQyxTQUFRLHNCQUFzQjtJQWU5RCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFDUixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLGtFQUFrRTtnQkFDM0UseUNBQXlDO2dCQUN6Qyx3RkFBd0YsQ0FDM0YsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBeEJELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFJRCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBZUosQ0FBQTtBQXBCRztJQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztzQ0FDL0IsU0FBUzs7NERBRTlCO0FBVlEsc0JBQXNCO0lBakJsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osUUFBUTtZQUNSLFFBQVE7WUFDUixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixPQUFPO1NBQ1Y7aUJBWlEsRUFBRTtLQWFkLENBQUM7SUFnQmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQWhCbkMsc0JBQXNCLENBNEJsQztTQTVCWSxzQkFBc0I7QUFzQ25DLElBQWEsbUJBQW1CLEdBQWhDO0NBQW9DLENBQUE7QUFBdkIsbUJBQW1CO0lBUi9CLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLHNCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLHNCQUFzQjtTQUN2QjtLQUNGLENBQUM7R0FDVyxtQkFBbUIsQ0FBSTtTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB9IGZyb20gJy4vYmFzZS9waXZvdC1ncmlkLWRhdGEtc291cmNlJztcclxuaW1wb3J0IHsgRHhpRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kYXRhLXNvdXJjZScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdmaWVsZHMnLFxyXG4gICAgICAgICdmaWx0ZXInLFxyXG4gICAgICAgICdvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvbkZpZWxkc1ByZXBhcmVkJyxcclxuICAgICAgICAnb25Mb2FkRXJyb3InLFxyXG4gICAgICAgICdvbkxvYWRpbmdDaGFuZ2VkJyxcclxuICAgICAgICAncmVtb3RlT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ3JldHJpZXZlRmllbGRzJyxcclxuICAgICAgICAnc3RvcmUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9EYXRhU291cmNlQ29tcG9uZW50IGV4dGVuZHMgRHhvUGl2b3RHcmlkRGF0YVNvdXJjZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGFTb3VyY2UnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpRmllbGRDb21wb25lbnQpKVxyXG4gICAgZ2V0IGZpZWxkc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlGaWVsZENvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKChjb25zb2xlKSAmJiAoY29uc29sZS53YXJuKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBuZXN0ZWQgXFwnZHhvLWRhdGEtc291cmNlXFwnIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkIGluIDE3LjIuICcgK1xyXG4gICAgICAgICAgICAgICAgJ1VzZSB0aGUgXFwnZGF0YVNvdXJjZVxcJyBvcHRpb24gaW5zdGVhZC4gJyArXHJcbiAgICAgICAgICAgICAgICAnU2VlOlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhci9ibG9iL21hc3Rlci9DSEFOR0VMT0cubWQjMTcuMi4zJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9EYXRhU291cmNlQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0RhdGFTb3VyY2VNb2R1bGUgeyB9XHJcbiJdfQ==