/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiFilterBuilderCustomOperation } from './base/filter-builder-custom-operation-dxi';
let DxiCustomOperationComponent = class DxiCustomOperationComponent extends DxiFilterBuilderCustomOperation {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'customOperations';
    }
};
DxiCustomOperationComponent = tslib_1.__decorate([
    Component({
        selector: 'dxi-custom-operation',
        template: '',
        providers: [NestedOptionHost],
        inputs: [
            'calculateFilterExpression',
            'caption',
            'customizeText',
            'dataTypes',
            'editorTemplate',
            'hasValue',
            'icon',
            'name'
        ],
        styles: ['']
    }),
    tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
], DxiCustomOperationComponent);
export { DxiCustomOperationComponent };
let DxiCustomOperationModule = class DxiCustomOperationModule {
};
DxiCustomOperationModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxiCustomOperationComponent
        ],
        exports: [
            DxiCustomOperationComponent
        ],
    })
], DxiCustomOperationModule);
export { DxiCustomOperationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW9wZXJhdGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvY3VzdG9tLW9wZXJhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQW1CN0YsSUFBYSwyQkFBMkIsR0FBeEMsaUNBQXlDLFNBQVEsK0JBQStCO0lBTzVFLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7Q0FVSixDQUFBO0FBZFksMkJBQTJCO0lBaEJ2QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osMkJBQTJCO1lBQzNCLFNBQVM7WUFDVCxlQUFlO1lBQ2YsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsTUFBTTtZQUNOLE1BQU07U0FDVDtpQkFYUSxFQUFFO0tBWWQsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FSbkMsMkJBQTJCLENBY3ZDO1NBZFksMkJBQTJCO0FBd0J4QyxJQUFhLHdCQUF3QixHQUFyQztDQUF5QyxDQUFBO0FBQTVCLHdCQUF3QjtJQVJwQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiwyQkFBMkI7U0FDNUI7UUFDRCxPQUFPLEVBQUU7WUFDUCwyQkFBMkI7U0FDNUI7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBQUk7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpRmlsdGVyQnVpbGRlckN1c3RvbU9wZXJhdGlvbiB9IGZyb20gJy4vYmFzZS9maWx0ZXItYnVpbGRlci1jdXN0b20tb3BlcmF0aW9uLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1jdXN0b20tb3BlcmF0aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24nLFxyXG4gICAgICAgICdjYXB0aW9uJyxcclxuICAgICAgICAnY3VzdG9taXplVGV4dCcsXHJcbiAgICAgICAgJ2RhdGFUeXBlcycsXHJcbiAgICAgICAgJ2VkaXRvclRlbXBsYXRlJyxcclxuICAgICAgICAnaGFzVmFsdWUnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAnbmFtZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudCBleHRlbmRzIER4aUZpbHRlckJ1aWxkZXJDdXN0b21PcGVyYXRpb24ge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjdXN0b21PcGVyYXRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==