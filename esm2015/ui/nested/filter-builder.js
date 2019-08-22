/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoFilterBuilderOptions } from './base/filter-builder-options';
import { DxiCustomOperationComponent } from './custom-operation-dxi';
import { DxiFieldComponent } from './field-dxi';
let DxoFilterBuilderComponent = class DxoFilterBuilderComponent extends DxoFilterBuilderOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'filterBuilder';
    }
    get customOperationsChildren() {
        return this._getOption('customOperations');
    }
    set customOperationsChildren(value) {
        this.setChildren('customOperations', value);
    }
    get fieldsChildren() {
        return this._getOption('fields');
    }
    set fieldsChildren(value) {
        this.setChildren('fields', value);
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoFilterBuilderComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiCustomOperationComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoFilterBuilderComponent.prototype, "customOperationsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiFieldComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
], DxoFilterBuilderComponent.prototype, "fieldsChildren", null);
DxoFilterBuilderComponent = tslib_1.__decorate([
    Component({
        selector: 'dxo-filter-builder',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'accessKey',
            'activeStateEnabled',
            'allowHierarchicalFields',
            'customOperations',
            'disabled',
            'elementAttr',
            'fields',
            'filterOperationDescriptions',
            'focusStateEnabled',
            'groupOperationDescriptions',
            'groupOperations',
            'height',
            'hint',
            'hoverStateEnabled',
            'maxGroupLevel',
            'onContentReady',
            'onDisposing',
            'onEditorPrepared',
            'onEditorPreparing',
            'onInitialized',
            'onOptionChanged',
            'onValueChanged',
            'rtlEnabled',
            'tabIndex',
            'value',
            'visible',
            'width'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxoFilterBuilderComponent);
export { DxoFilterBuilderComponent };
let DxoFilterBuilderModule = class DxoFilterBuilderModule {
};
DxoFilterBuilderModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxoFilterBuilderComponent
        ],
        exports: [
            DxoFilterBuilderComponent
        ],
    })
], DxoFilterBuilderModule);
export { DxoFilterBuilderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvZmlsdGVyLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQXNDaEQsSUFBYSx5QkFBeUIsR0FBdEMsK0JBQXVDLFNBQVEsdUJBQXVCO0lBMkJsRSxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUEvQkQsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUlELElBQUksd0JBQXdCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksd0JBQXdCLENBQUMsS0FBSztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHRCxJQUFJLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBY0osQ0FBQTtBQWxDYTtJQUFULE1BQU0sRUFBRTtzQ0FBYyxZQUFZOzhEQUFNO0FBT3pDO0lBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO3NDQUMvQixTQUFTOzt5RUFFeEM7QUFNRDtJQURDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztzQ0FDL0IsU0FBUzs7K0RBRTlCO0FBdEJRLHlCQUF5QjtJQW5DckMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixVQUFVO1lBQ1YsYUFBYTtZQUNiLFFBQVE7WUFDUiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLDRCQUE0QjtZQUM1QixpQkFBaUI7WUFDakIsUUFBUTtZQUNSLE1BQU07WUFDTixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osVUFBVTtZQUNWLE9BQU87WUFDUCxTQUFTO1lBQ1QsT0FBTztTQUNWO2lCQTlCUSxFQUFFO0tBK0JkLENBQUM7SUE0QmUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTs2Q0FEbUMsZ0JBQWdCO1FBQ3RDLGdCQUFnQjtHQTVCbkMseUJBQXlCLENBdUNyQztTQXZDWSx5QkFBeUI7QUFpRHRDLElBQWEsc0JBQXNCLEdBQW5DO0NBQXVDLENBQUE7QUFBMUIsc0JBQXNCO0lBUmxDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLHlCQUF5QjtTQUMxQjtRQUNELE9BQU8sRUFBRTtZQUNQLHlCQUF5QjtTQUMxQjtLQUNGLENBQUM7R0FDVyxzQkFBc0IsQ0FBSTtTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvRmlsdGVyQnVpbGRlck9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvZmlsdGVyLWJ1aWxkZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLW9wZXJhdGlvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZpbHRlci1idWlsZGVyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2FsbG93SGllcmFyY2hpY2FsRmllbGRzJyxcclxuICAgICAgICAnY3VzdG9tT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmaWVsZHMnLFxyXG4gICAgICAgICdmaWx0ZXJPcGVyYXRpb25EZXNjcmlwdGlvbnMnLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2dyb3VwT3BlcmF0aW9uRGVzY3JpcHRpb25zJyxcclxuICAgICAgICAnZ3JvdXBPcGVyYXRpb25zJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnbWF4R3JvdXBMZXZlbCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkVkaXRvclByZXBhcmVkJyxcclxuICAgICAgICAnb25FZGl0b3JQcmVwYXJpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25WYWx1ZUNoYW5nZWQnLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0ZpbHRlckJ1aWxkZXJDb21wb25lbnQgZXh0ZW5kcyBEeG9GaWx0ZXJCdWlsZGVyT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWx0ZXJCdWlsZGVyJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudCkpXHJcbiAgICBnZXQgY3VzdG9tT3BlcmF0aW9uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjdXN0b21PcGVyYXRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY3VzdG9tT3BlcmF0aW9uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignY3VzdG9tT3BlcmF0aW9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpRmllbGRDb21wb25lbnQpKVxyXG4gICAgZ2V0IGZpZWxkc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlGaWVsZENvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignZmllbGRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9GaWx0ZXJCdWlsZGVyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0ZpbHRlckJ1aWxkZXJNb2R1bGUgeyB9XHJcbiJdfQ==