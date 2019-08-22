/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiFilterBuilderCustomOperation } from './base/filter-builder-custom-operation-dxi';
var DxiCustomOperationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiCustomOperationComponent, _super);
    function DxiCustomOperationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiCustomOperationComponent.prototype, "_optionPath", {
        get: function () {
            return 'customOperations';
        },
        enumerable: true,
        configurable: true
    });
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
    return DxiCustomOperationComponent;
}(DxiFilterBuilderCustomOperation));
export { DxiCustomOperationComponent };
var DxiCustomOperationModule = /** @class */ (function () {
    function DxiCustomOperationModule() {
    }
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
    return DxiCustomOperationModule;
}());
export { DxiCustomOperationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW9wZXJhdGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvY3VzdG9tLW9wZXJhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQW1CN0Y7SUFBaUQsdURBQStCO0lBTzVFLHFDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyxvREFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUpRLDJCQUEyQjtRQWhCdkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSiwyQkFBMkI7Z0JBQzNCLFNBQVM7Z0JBQ1QsZUFBZTtnQkFDZixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDVixNQUFNO2dCQUNOLE1BQU07YUFDVDtxQkFYUSxFQUFFO1NBWWQsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMsMkJBQTJCLENBY3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQWRELENBQWlELCtCQUErQixHQWMvRTtTQWRZLDJCQUEyQjtBQXdCeEM7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQVJwQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osMkJBQTJCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDJCQUEyQjthQUM1QjtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FBSTtJQUFELCtCQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpRmlsdGVyQnVpbGRlckN1c3RvbU9wZXJhdGlvbiB9IGZyb20gJy4vYmFzZS9maWx0ZXItYnVpbGRlci1jdXN0b20tb3BlcmF0aW9uLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1jdXN0b20tb3BlcmF0aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24nLFxyXG4gICAgICAgICdjYXB0aW9uJyxcclxuICAgICAgICAnY3VzdG9taXplVGV4dCcsXHJcbiAgICAgICAgJ2RhdGFUeXBlcycsXHJcbiAgICAgICAgJ2VkaXRvclRlbXBsYXRlJyxcclxuICAgICAgICAnaGFzVmFsdWUnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAnbmFtZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudCBleHRlbmRzIER4aUZpbHRlckJ1aWxkZXJDdXN0b21PcGVyYXRpb24ge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjdXN0b21PcGVyYXRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlDdXN0b21PcGVyYXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==