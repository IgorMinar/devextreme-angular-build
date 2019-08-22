/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoChartCommonAnnotationConfig } from './base/chart-common-annotation-config';
var DxoCommonAnnotationSettingsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoCommonAnnotationSettingsComponent, _super);
    function DxoCommonAnnotationSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCommonAnnotationSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'commonAnnotationSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoCommonAnnotationSettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-common-annotation-settings',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'allowDragging',
                'argument',
                'arrowLength',
                'arrowWidth',
                'axis',
                'border',
                'color',
                'customizeTooltip',
                'description',
                'font',
                'height',
                'image',
                'offsetX',
                'offsetY',
                'opacity',
                'paddingLeftRight',
                'paddingTopBottom',
                'series',
                'shadow',
                'text',
                'textOverflow',
                'tooltipEnabled',
                'type',
                'value',
                'width',
                'wordWrap',
                'x',
                'y'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxoCommonAnnotationSettingsComponent);
    return DxoCommonAnnotationSettingsComponent;
}(DxoChartCommonAnnotationConfig));
export { DxoCommonAnnotationSettingsComponent };
var DxoCommonAnnotationSettingsModule = /** @class */ (function () {
    function DxoCommonAnnotationSettingsModule() {
    }
    DxoCommonAnnotationSettingsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoCommonAnnotationSettingsComponent
            ],
            exports: [
                DxoCommonAnnotationSettingsComponent
            ],
        })
    ], DxoCommonAnnotationSettingsModule);
    return DxoCommonAnnotationSettingsModule;
}());
export { DxoCommonAnnotationSettingsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXVDdkY7SUFBMEQsZ0VBQThCO0lBT3BGLDhDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyw2REFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUpRLG9DQUFvQztRQXBDaEQsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixlQUFlO2dCQUNmLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixZQUFZO2dCQUNaLE1BQU07Z0JBQ04sUUFBUTtnQkFDUixPQUFPO2dCQUNQLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixNQUFNO2dCQUNOLFFBQVE7Z0JBQ1IsT0FBTztnQkFDUCxTQUFTO2dCQUNULFNBQVM7Z0JBQ1QsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsUUFBUTtnQkFDUixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsR0FBRztnQkFDSCxHQUFHO2FBQ047cUJBL0JRLEVBQUU7U0FnQ2QsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMsb0NBQW9DLENBY2hEO0lBQUQsMkNBQUM7Q0FBQSxBQWRELENBQTBELDhCQUE4QixHQWN2RjtTQWRZLG9DQUFvQztBQXdCakQ7SUFBQTtJQUFpRCxDQUFDO0lBQXJDLGlDQUFpQztRQVI3QyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osb0NBQW9DO2FBQ3JDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9DQUFvQzthQUNyQztTQUNGLENBQUM7T0FDVyxpQ0FBaUMsQ0FBSTtJQUFELHdDQUFDO0NBQUEsQUFBbEQsSUFBa0Q7U0FBckMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQ2hhcnRDb21tb25Bbm5vdGF0aW9uQ29uZmlnIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1hbm5vdGF0aW9uLWNvbmZpZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1jb21tb24tYW5ub3RhdGlvbi1zZXR0aW5ncycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhbGxvd0RyYWdnaW5nJyxcclxuICAgICAgICAnYXJndW1lbnQnLFxyXG4gICAgICAgICdhcnJvd0xlbmd0aCcsXHJcbiAgICAgICAgJ2Fycm93V2lkdGgnLFxyXG4gICAgICAgICdheGlzJyxcclxuICAgICAgICAnYm9yZGVyJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdjdXN0b21pemVUb29sdGlwJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICdmb250JyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaW1hZ2UnLFxyXG4gICAgICAgICdvZmZzZXRYJyxcclxuICAgICAgICAnb2Zmc2V0WScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdwYWRkaW5nTGVmdFJpZ2h0JyxcclxuICAgICAgICAncGFkZGluZ1RvcEJvdHRvbScsXHJcbiAgICAgICAgJ3NlcmllcycsXHJcbiAgICAgICAgJ3NoYWRvdycsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd0ZXh0T3ZlcmZsb3cnLFxyXG4gICAgICAgICd0b29sdGlwRW5hYmxlZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnd29yZFdyYXAnLFxyXG4gICAgICAgICd4JyxcclxuICAgICAgICAneSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc0NvbXBvbmVudCBleHRlbmRzIER4b0NoYXJ0Q29tbW9uQW5ub3RhdGlvbkNvbmZpZyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2NvbW1vbkFubm90YXRpb25TZXR0aW5ncyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzTW9kdWxlIHsgfVxyXG4iXX0=