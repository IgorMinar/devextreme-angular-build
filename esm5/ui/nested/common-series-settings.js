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
import { DxoChartCommonSeriesSettings } from './base/chart-common-series-settings';
var DxoCommonSeriesSettingsComponent = (function (_super) {
    __extends(DxoCommonSeriesSettingsComponent, _super);
    function DxoCommonSeriesSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCommonSeriesSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'commonSeriesSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoCommonSeriesSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-common-series-settings',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'aggregation',
                        'area',
                        'argumentField',
                        'axis',
                        'bar',
                        'barOverlapGroup',
                        'barPadding',
                        'barWidth',
                        'border',
                        'bubble',
                        'candlestick',
                        'closeValueField',
                        'color',
                        'cornerRadius',
                        'dashStyle',
                        'fullstackedarea',
                        'fullstackedbar',
                        'fullstackedline',
                        'fullstackedspline',
                        'fullstackedsplinearea',
                        'highValueField',
                        'hoverMode',
                        'hoverStyle',
                        'ignoreEmptyPoints',
                        'innerColor',
                        'label',
                        'line',
                        'lowValueField',
                        'maxLabelCount',
                        'minBarSize',
                        'opacity',
                        'openValueField',
                        'pane',
                        'point',
                        'rangearea',
                        'rangebar',
                        'rangeValue1Field',
                        'rangeValue2Field',
                        'reduction',
                        'scatter',
                        'selectionMode',
                        'selectionStyle',
                        'showInLegend',
                        'sizeField',
                        'spline',
                        'splinearea',
                        'stack',
                        'stackedarea',
                        'stackedbar',
                        'stackedline',
                        'stackedspline',
                        'stackedsplinearea',
                        'steparea',
                        'stepline',
                        'stock',
                        'tagField',
                        'type',
                        'valueErrorBar',
                        'valueField',
                        'visible',
                        'width',
                        'argumentType',
                        'minSegmentSize',
                        'smallValuesGrouping',
                        'closed'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoCommonSeriesSettingsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoCommonSeriesSettingsComponent;
}(DxoChartCommonSeriesSettings));
export { DxoCommonSeriesSettingsComponent };
var DxoCommonSeriesSettingsModule = (function () {
    function DxoCommonSeriesSettingsModule() {
    }
    DxoCommonSeriesSettingsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoCommonSeriesSettingsComponent
                    ],
                    exports: [
                        DxoCommonSeriesSettingsComponent
                    ],
                },] },
    ];
    return DxoCommonSeriesSettingsModule;
}());
export { DxoCommonSeriesSettingsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcmllcy1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9jb21tb24tc2VyaWVzLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7SUE0RTdCLG9EQUE0QjtJQU85RSwwQ0FBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLHlEQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLHNCQUFzQixDQUFDO1NBQ2pDOzs7T0FBQTs7Z0JBN0VKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixhQUFhO3dCQUNiLE1BQU07d0JBQ04sZUFBZTt3QkFDZixNQUFNO3dCQUNOLEtBQUs7d0JBQ0wsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsUUFBUTt3QkFDUixRQUFRO3dCQUNSLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixPQUFPO3dCQUNQLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLE9BQU87d0JBQ1AsTUFBTTt3QkFDTixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixTQUFTO3dCQUNULGdCQUFnQjt3QkFDaEIsTUFBTTt3QkFDTixPQUFPO3dCQUNQLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxTQUFTO3dCQUNULGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsUUFBUTt3QkFDUixZQUFZO3dCQUNaLE9BQU87d0JBQ1AsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLFVBQVU7d0JBQ1YsVUFBVTt3QkFDVixPQUFPO3dCQUNQLFVBQVU7d0JBQ1YsTUFBTTt3QkFDTixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxPQUFPO3dCQUNQLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLFFBQVE7cUJBQ1g7aUJBQ0o7Ozs7Z0JBNUVRLGdCQUFnQix1QkFvRlIsUUFBUSxZQUFJLElBQUk7Z0JBcEZ4QixnQkFBZ0IsdUJBcUZaLElBQUk7OzJDQWpIakI7RUF5R3NELDRCQUE0QjtTQUFyRSxnQ0FBZ0M7Ozs7O2dCQWdCNUMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQ0FBZ0M7cUJBQ2pDO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQ0FBZ0M7cUJBQ2pDO2lCQUNGOzt3Q0FoSUQ7O1NBaUlhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWNvbW1vbi1zZXJpZXMtc2V0dGluZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tY29tbW9uLXNlcmllcy1zZXR0aW5ncycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhZ2dyZWdhdGlvbicsXHJcbiAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICdhcmd1bWVudEZpZWxkJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JhcicsXHJcbiAgICAgICAgJ2Jhck92ZXJsYXBHcm91cCcsXHJcbiAgICAgICAgJ2JhclBhZGRpbmcnLFxyXG4gICAgICAgICdiYXJXaWR0aCcsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2J1YmJsZScsXHJcbiAgICAgICAgJ2NhbmRsZXN0aWNrJyxcclxuICAgICAgICAnY2xvc2VWYWx1ZUZpZWxkJyxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdjb3JuZXJSYWRpdXMnLFxyXG4gICAgICAgICdkYXNoU3R5bGUnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGFyZWEnLFxyXG4gICAgICAgICdmdWxsc3RhY2tlZGJhcicsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ2Z1bGxzdGFja2Vkc3BsaW5lJyxcclxuICAgICAgICAnZnVsbHN0YWNrZWRzcGxpbmVhcmVhJyxcclxuICAgICAgICAnaGlnaFZhbHVlRmllbGQnLFxyXG4gICAgICAgICdob3Zlck1vZGUnLFxyXG4gICAgICAgICdob3ZlclN0eWxlJyxcclxuICAgICAgICAnaWdub3JlRW1wdHlQb2ludHMnLFxyXG4gICAgICAgICdpbm5lckNvbG9yJyxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdsaW5lJyxcclxuICAgICAgICAnbG93VmFsdWVGaWVsZCcsXHJcbiAgICAgICAgJ21heExhYmVsQ291bnQnLFxyXG4gICAgICAgICdtaW5CYXJTaXplJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ29wZW5WYWx1ZUZpZWxkJyxcclxuICAgICAgICAncGFuZScsXHJcbiAgICAgICAgJ3BvaW50JyxcclxuICAgICAgICAncmFuZ2VhcmVhJyxcclxuICAgICAgICAncmFuZ2ViYXInLFxyXG4gICAgICAgICdyYW5nZVZhbHVlMUZpZWxkJyxcclxuICAgICAgICAncmFuZ2VWYWx1ZTJGaWVsZCcsXHJcbiAgICAgICAgJ3JlZHVjdGlvbicsXHJcbiAgICAgICAgJ3NjYXR0ZXInLFxyXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcclxuICAgICAgICAnc2VsZWN0aW9uU3R5bGUnLFxyXG4gICAgICAgICdzaG93SW5MZWdlbmQnLFxyXG4gICAgICAgICdzaXplRmllbGQnLFxyXG4gICAgICAgICdzcGxpbmUnLFxyXG4gICAgICAgICdzcGxpbmVhcmVhJyxcclxuICAgICAgICAnc3RhY2snLFxyXG4gICAgICAgICdzdGFja2VkYXJlYScsXHJcbiAgICAgICAgJ3N0YWNrZWRiYXInLFxyXG4gICAgICAgICdzdGFja2VkbGluZScsXHJcbiAgICAgICAgJ3N0YWNrZWRzcGxpbmUnLFxyXG4gICAgICAgICdzdGFja2Vkc3BsaW5lYXJlYScsXHJcbiAgICAgICAgJ3N0ZXBhcmVhJyxcclxuICAgICAgICAnc3RlcGxpbmUnLFxyXG4gICAgICAgICdzdG9jaycsXHJcbiAgICAgICAgJ3RhZ0ZpZWxkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlRXJyb3JCYXInLFxyXG4gICAgICAgICd2YWx1ZUZpZWxkJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnYXJndW1lbnRUeXBlJyxcclxuICAgICAgICAnbWluU2VnbWVudFNpemUnLFxyXG4gICAgICAgICdzbWFsbFZhbHVlc0dyb3VwaW5nJyxcclxuICAgICAgICAnY2xvc2VkJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQ29tbW9uU2VyaWVzU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBEeG9DaGFydENvbW1vblNlcmllc1NldHRpbmdzIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY29tbW9uU2VyaWVzU2V0dGluZ3MnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0NvbW1vblNlcmllc1NldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Db21tb25TZXJpZXNTZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Db21tb25TZXJpZXNTZXR0aW5nc01vZHVsZSB7IH1cclxuIl19