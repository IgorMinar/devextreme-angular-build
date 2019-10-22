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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
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
DxiAnnotationComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
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
    tslib_1.__param(1, Host())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiYW5ub3RhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQXdDOUUsSUFBYSxzQkFBc0IsR0FBbkMsNEJBQW9DLFNBQVEsd0JBQXdCO0lBT2hFLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFWRCxJQUFjLFdBQVc7UUFDckIsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztDQVVKLENBQUE7O1lBUHFELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7WUFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0FBUkosc0JBQXNCO0lBckNsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osZUFBZTtZQUNmLFVBQVU7WUFDVixhQUFhO1lBQ2IsWUFBWTtZQUNaLE1BQU07WUFDTixRQUFRO1lBQ1IsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsTUFBTTtZQUNOLFFBQVE7WUFDUixPQUFPO1lBQ1AsTUFBTTtZQUNOLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLFFBQVE7WUFDUixNQUFNO1lBQ04sY0FBYztZQUNkLGdCQUFnQjtZQUNoQixNQUFNO1lBQ04sT0FBTztZQUNQLE9BQU87WUFDUCxVQUFVO1lBQ1YsR0FBRztZQUNILEdBQUc7U0FDTjtpQkFoQ1EsRUFBRTtLQWlDZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtHQVJOLHNCQUFzQixDQWNsQztTQWRZLHNCQUFzQjtBQXdCbkMsSUFBYSxtQkFBbUIsR0FBaEM7Q0FBb0MsQ0FBQTtBQUF2QixtQkFBbUI7SUFSL0IsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osc0JBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asc0JBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQUFJO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhpQ2hhcnRBbm5vdGF0aW9uQ29uZmlnIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWFubm90YXRpb24tY29uZmlnLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1hbm5vdGF0aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FsbG93RHJhZ2dpbmcnLFxyXG4gICAgICAgICdhcmd1bWVudCcsXHJcbiAgICAgICAgJ2Fycm93TGVuZ3RoJyxcclxuICAgICAgICAnYXJyb3dXaWR0aCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRvb2x0aXAnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgJ2ZvbnQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdpbWFnZScsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICdvZmZzZXRYJyxcclxuICAgICAgICAnb2Zmc2V0WScsXHJcbiAgICAgICAgJ29wYWNpdHknLFxyXG4gICAgICAgICdwYWRkaW5nTGVmdFJpZ2h0JyxcclxuICAgICAgICAncGFkZGluZ1RvcEJvdHRvbScsXHJcbiAgICAgICAgJ3NlcmllcycsXHJcbiAgICAgICAgJ3NoYWRvdycsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd0ZXh0T3ZlcmZsb3cnLFxyXG4gICAgICAgICd0b29sdGlwRW5hYmxlZCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnd29yZFdyYXAnLFxyXG4gICAgICAgICd4JyxcclxuICAgICAgICAneSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUFubm90YXRpb25Db21wb25lbnQgZXh0ZW5kcyBEeGlDaGFydEFubm90YXRpb25Db25maWcge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhbm5vdGF0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQW5ub3RhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpQW5ub3RhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlBbm5vdGF0aW9uTW9kdWxlIHsgfVxyXG4iXX0=