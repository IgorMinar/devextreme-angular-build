/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiChartAnnotationConfig } from './base/chart-annotation-config-dxi';
let DxiAnnotationComponent = class DxiAnnotationComponent extends DxiChartAnnotationConfig {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'annotations';
    }
};
DxiAnnotationComponent = tslib_1.__decorate([
    Component({
        selector: 'dxi-annotation',
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
            'name',
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
], DxiAnnotationComponent);
export { DxiAnnotationComponent };
let DxiAnnotationModule = class DxiAnnotationModule {
};
DxiAnnotationModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DxiAnnotationComponent
        ],
        exports: [
            DxiAnnotationComponent
        ],
    })
], DxiAnnotationModule);
export { DxiAnnotationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvYW5ub3RhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQXdDOUUsSUFBYSxzQkFBc0IsR0FBbkMsNEJBQW9DLFNBQVEsd0JBQXdCO0lBT2hFLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QixDQUFDO0NBVUosQ0FBQTtBQWRZLHNCQUFzQjtJQXJDbEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLGVBQWU7WUFDZixVQUFVO1lBQ1YsYUFBYTtZQUNiLFlBQVk7WUFDWixNQUFNO1lBQ04sUUFBUTtZQUNSLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLE1BQU07WUFDTixRQUFRO1lBQ1IsT0FBTztZQUNQLE1BQU07WUFDTixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixRQUFRO1lBQ1IsTUFBTTtZQUNOLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLE9BQU87WUFDUCxPQUFPO1lBQ1AsVUFBVTtZQUNWLEdBQUc7WUFDSCxHQUFHO1NBQ047aUJBaENRLEVBQUU7S0FpQ2QsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FSbkMsc0JBQXNCLENBY2xDO1NBZFksc0JBQXNCO0FBd0JuQyxJQUFhLG1CQUFtQixHQUFoQztDQUFvQyxDQUFBO0FBQXZCLG1CQUFtQjtJQVIvQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixzQkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxzQkFBc0I7U0FDdkI7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBQUk7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpQ2hhcnRBbm5vdGF0aW9uQ29uZmlnIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWFubm90YXRpb24tY29uZmlnLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1hbm5vdGF0aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FsbG93RHJhZ2dpbmcnLFxyXG4gICAgICAgICdhcmd1bWVudCcsXHJcbiAgICAgICAgJ2Fycm93TGVuZ3RoJyxcclxuICAgICAgICAnYXJyb3dXaWR0aCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRvb2x0aXAnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgJ2ZvbnQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdpbWFnZScsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICdvZmZzZXRYJyxcclxuICAgICAgICAnb2Zmc2V0WScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdwYWRkaW5nTGVmdFJpZ2h0JyxcclxuICAgICAgICAncGFkZGluZ1RvcEJvdHRvbScsXHJcbiAgICAgICAgJ3NlcmllcycsXHJcbiAgICAgICAgJ3NoYWRvdycsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd0ZXh0T3ZlcmZsb3cnLFxyXG4gICAgICAgICd0b29sdGlwRW5hYmxlZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnd29yZFdyYXAnLFxyXG4gICAgICAgICd4JyxcclxuICAgICAgICAneSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUFubm90YXRpb25Db21wb25lbnQgZXh0ZW5kcyBEeGlDaGFydEFubm90YXRpb25Db25maWcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhbm5vdGF0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQW5ub3RhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpQW5ub3RhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlBbm5vdGF0aW9uTW9kdWxlIHsgfVxyXG4iXX0=