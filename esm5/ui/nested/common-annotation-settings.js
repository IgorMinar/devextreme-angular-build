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
import { DxoChartCommonAnnotationConfig } from './base/chart-common-annotation-config';
var DxoCommonAnnotationSettingsComponent = (function (_super) {
    __extends(DxoCommonAnnotationSettingsComponent, _super);
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
    DxoCommonAnnotationSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-common-annotation-settings',
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
    DxoCommonAnnotationSettingsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoCommonAnnotationSettingsComponent;
}(DxoChartCommonAnnotationConfig));
export { DxoCommonAnnotationSettingsComponent };
var DxoCommonAnnotationSettingsModule = (function () {
    function DxoCommonAnnotationSettingsModule() {
    }
    DxoCommonAnnotationSettingsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoCommonAnnotationSettingsComponent
                    ],
                    exports: [
                        DxoCommonAnnotationSettingsComponent
                    ],
                },] },
    ];
    return DxoCommonAnnotationSettingsModule;
}());
export { DxoCommonAnnotationSettingsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvY29tbW9uLWFubm90YXRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQXVDN0Isd0RBQThCO0lBT3BGLDhDQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBVkQsc0JBQWMsNkRBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsMEJBQTBCLENBQUM7U0FDckM7OztPQUFBOztnQkF4Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLGVBQWU7d0JBQ2YsVUFBVTt3QkFDVixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osTUFBTTt3QkFDTixRQUFRO3dCQUNSLE9BQU87d0JBQ1Asa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLE1BQU07d0JBQ04sUUFBUTt3QkFDUixPQUFPO3dCQUNQLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxTQUFTO3dCQUNULGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsTUFBTTt3QkFDTixPQUFPO3dCQUNQLE9BQU87d0JBQ1AsVUFBVTt3QkFDVixHQUFHO3dCQUNILEdBQUc7cUJBQ047aUJBQ0o7Ozs7Z0JBdkNRLGdCQUFnQix1QkErQ1IsUUFBUSxZQUFJLElBQUk7Z0JBL0N4QixnQkFBZ0IsdUJBZ0RaLElBQUk7OytDQTVFakI7RUFvRTBELDhCQUE4QjtTQUEzRSxvQ0FBb0M7Ozs7O2dCQWdCaEQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQ0FBb0M7cUJBQ3JDO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQ0FBb0M7cUJBQ3JDO2lCQUNGOzs0Q0EzRkQ7O1NBNEZhLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vbkFubm90YXRpb25Db25maWcgfSBmcm9tICcuL2Jhc2UvY2hhcnQtY29tbW9uLWFubm90YXRpb24tY29uZmlnJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWNvbW1vbi1hbm5vdGF0aW9uLXNldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FsbG93RHJhZ2dpbmcnLFxyXG4gICAgICAgICdhcmd1bWVudCcsXHJcbiAgICAgICAgJ2Fycm93TGVuZ3RoJyxcclxuICAgICAgICAnYXJyb3dXaWR0aCcsXHJcbiAgICAgICAgJ2F4aXMnLFxyXG4gICAgICAgICdib3JkZXInLFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRvb2x0aXAnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgJ2ZvbnQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdpbWFnZScsXHJcbiAgICAgICAgJ29mZnNldFgnLFxyXG4gICAgICAgICdvZmZzZXRZJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ3BhZGRpbmdMZWZ0UmlnaHQnLFxyXG4gICAgICAgICdwYWRkaW5nVG9wQm90dG9tJyxcclxuICAgICAgICAnc2VyaWVzJyxcclxuICAgICAgICAnc2hhZG93JyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3RleHRPdmVyZmxvdycsXHJcbiAgICAgICAgJ3Rvb2x0aXBFbmFibGVkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd3b3JkV3JhcCcsXHJcbiAgICAgICAgJ3gnLFxyXG4gICAgICAgICd5J1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ29tbW9uQW5ub3RhdGlvblNldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgRHhvQ2hhcnRDb21tb25Bbm5vdGF0aW9uQ29uZmlnIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY29tbW9uQW5ub3RhdGlvblNldHRpbmdzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0NvbW1vbkFubm90YXRpb25TZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db21tb25Bbm5vdGF0aW9uU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdfQ==