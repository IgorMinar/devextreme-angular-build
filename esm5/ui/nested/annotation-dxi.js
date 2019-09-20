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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiChartAnnotationConfig } from './base/chart-annotation-config-dxi';
var DxiAnnotationComponent = (function (_super) {
    __extends(DxiAnnotationComponent, _super);
    function DxiAnnotationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiAnnotationComponent.prototype, "_optionPath", {
        get: function () {
            return 'annotations';
        },
        enumerable: true,
        configurable: true
    });
    DxiAnnotationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-annotation',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiAnnotationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiAnnotationComponent;
}(DxiChartAnnotationConfig));
export { DxiAnnotationComponent };
var DxiAnnotationModule = (function () {
    function DxiAnnotationModule() {
    }
    DxiAnnotationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiAnnotationComponent
                    ],
                    exports: [
                        DxiAnnotationComponent
                    ],
                },] },
    ];
    return DxiAnnotationModule;
}());
export { DxiAnnotationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvYW5ub3RhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQXdDbEMsMENBQXdCO0lBT2hFLGdDQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBVkQsc0JBQWMsK0NBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ3hCOzs7T0FBQTs7Z0JBekNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixlQUFlO3dCQUNmLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixZQUFZO3dCQUNaLE1BQU07d0JBQ04sUUFBUTt3QkFDUixPQUFPO3dCQUNQLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixNQUFNO3dCQUNOLFFBQVE7d0JBQ1IsT0FBTzt3QkFDUCxNQUFNO3dCQUNOLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxTQUFTO3dCQUNULGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsTUFBTTt3QkFDTixPQUFPO3dCQUNQLE9BQU87d0JBQ1AsVUFBVTt3QkFDVixHQUFHO3dCQUNILEdBQUc7cUJBQ047aUJBQ0o7Ozs7Z0JBeENRLGdCQUFnQix1QkFnRFIsUUFBUSxZQUFJLElBQUk7Z0JBaER4QixnQkFBZ0IsdUJBaURaLElBQUk7O2lDQTdFakI7RUFxRTRDLHdCQUF3QjtTQUF2RCxzQkFBc0I7Ozs7O2dCQWdCbEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGOzs4QkE1RkQ7O1NBNkZhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlDaGFydEFubm90YXRpb25Db25maWcgfSBmcm9tICcuL2Jhc2UvY2hhcnQtYW5ub3RhdGlvbi1jb25maWctZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWFubm90YXRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWxsb3dEcmFnZ2luZycsXHJcbiAgICAgICAgJ2FyZ3VtZW50JyxcclxuICAgICAgICAnYXJyb3dMZW5ndGgnLFxyXG4gICAgICAgICdhcnJvd1dpZHRoJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY3VzdG9taXplVG9vbHRpcCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAnZm9udCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2ltYWdlJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ29mZnNldFgnLFxyXG4gICAgICAgICdvZmZzZXRZJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ3BhZGRpbmdMZWZ0UmlnaHQnLFxyXG4gICAgICAgICdwYWRkaW5nVG9wQm90dG9tJyxcclxuICAgICAgICAnc2VyaWVzJyxcclxuICAgICAgICAnc2hhZG93JyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3RleHRPdmVyZmxvdycsXHJcbiAgICAgICAgJ3Rvb2x0aXBFbmFibGVkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd3b3JkV3JhcCcsXHJcbiAgICAgICAgJ3gnLFxyXG4gICAgICAgICd5J1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQW5ub3RhdGlvbkNvbXBvbmVudCBleHRlbmRzIER4aUNoYXJ0QW5ub3RhdGlvbkNvbmZpZyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2Fubm90YXRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlBbm5vdGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlBbm5vdGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUFubm90YXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==