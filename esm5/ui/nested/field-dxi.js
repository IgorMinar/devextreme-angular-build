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
import { DxiFilterBuilderField } from './base/filter-builder-field-dxi';
var DxiFieldComponent = (function (_super) {
    __extends(DxiFieldComponent, _super);
    function DxiFieldComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiFieldComponent.prototype, "_optionPath", {
        get: function () {
            return 'fields';
        },
        enumerable: true,
        configurable: true
    });
    DxiFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-field',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'calculateFilterExpression',
                        'caption',
                        'customizeText',
                        'dataField',
                        'dataType',
                        'editorOptions',
                        'editorTemplate',
                        'falseText',
                        'filterOperations',
                        'format',
                        'lookup',
                        'name',
                        'trueText',
                        'allowCrossGroupCalculation',
                        'allowExpandAll',
                        'allowFiltering',
                        'allowSorting',
                        'allowSortingBySummary',
                        'area',
                        'areaIndex',
                        'calculateCustomSummary',
                        'calculateSummaryValue',
                        'displayFolder',
                        'expanded',
                        'filterType',
                        'filterValues',
                        'groupIndex',
                        'groupInterval',
                        'groupName',
                        'headerFilter',
                        'isMeasure',
                        'precision',
                        'runningTotal',
                        'selector',
                        'showGrandTotals',
                        'showTotals',
                        'showValues',
                        'sortBy',
                        'sortBySummaryField',
                        'sortBySummaryPath',
                        'sortingMethod',
                        'sortOrder',
                        'summaryDisplayMode',
                        'summaryType',
                        'visible',
                        'width',
                        'wordWrapEnabled'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiFieldComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiFieldComponent;
}(DxiFilterBuilderField));
export { DxiFieldComponent };
var DxiFieldModule = (function () {
    function DxiFieldModule() {
    }
    DxiFieldModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiFieldComponent
                    ],
                    exports: [
                        DxiFieldComponent
                    ],
                },] },
    ];
    return DxiFieldModule;
}());
export { DxiFieldModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2ZpZWxkLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBMERqQyxxQ0FBcUI7SUFPeEQsMkJBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUFWRCxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDbkI7OztPQUFBOztnQkEzREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSiwyQkFBMkI7d0JBQzNCLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsa0JBQWtCO3dCQUNsQixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixVQUFVO3dCQUNWLDRCQUE0Qjt3QkFDNUIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixNQUFNO3dCQUNOLFdBQVc7d0JBQ1gsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2YsVUFBVTt3QkFDVixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFFBQVE7d0JBQ1Isb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxPQUFPO3dCQUNQLGlCQUFpQjtxQkFDcEI7aUJBQ0o7Ozs7Z0JBMURRLGdCQUFnQix1QkFrRVIsUUFBUSxZQUFJLElBQUk7Z0JBbEV4QixnQkFBZ0IsdUJBbUVaLElBQUk7OzRCQS9GakI7RUF1RnVDLHFCQUFxQjtTQUEvQyxpQkFBaUI7Ozs7O2dCQWdCN0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO2lCQUNGOzt5QkE5R0Q7O1NBK0dhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpRmlsdGVyQnVpbGRlckZpZWxkIH0gZnJvbSAnLi9iYXNlL2ZpbHRlci1idWlsZGVyLWZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1maWVsZCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRleHQnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdkYXRhVHlwZScsXHJcbiAgICAgICAgJ2VkaXRvck9wdGlvbnMnLFxyXG4gICAgICAgICdlZGl0b3JUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2ZhbHNlVGV4dCcsXHJcbiAgICAgICAgJ2ZpbHRlck9wZXJhdGlvbnMnLFxyXG4gICAgICAgICdmb3JtYXQnLFxyXG4gICAgICAgICdsb29rdXAnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndHJ1ZVRleHQnLFxyXG4gICAgICAgICdhbGxvd0Nyb3NzR3JvdXBDYWxjdWxhdGlvbicsXHJcbiAgICAgICAgJ2FsbG93RXhwYW5kQWxsJyxcclxuICAgICAgICAnYWxsb3dGaWx0ZXJpbmcnLFxyXG4gICAgICAgICdhbGxvd1NvcnRpbmcnLFxyXG4gICAgICAgICdhbGxvd1NvcnRpbmdCeVN1bW1hcnknLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJlYUluZGV4JyxcclxuICAgICAgICAnY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeScsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZVN1bW1hcnlWYWx1ZScsXHJcbiAgICAgICAgJ2Rpc3BsYXlGb2xkZXInLFxyXG4gICAgICAgICdleHBhbmRlZCcsXHJcbiAgICAgICAgJ2ZpbHRlclR5cGUnLFxyXG4gICAgICAgICdmaWx0ZXJWYWx1ZXMnLFxyXG4gICAgICAgICdncm91cEluZGV4JyxcclxuICAgICAgICAnZ3JvdXBJbnRlcnZhbCcsXHJcbiAgICAgICAgJ2dyb3VwTmFtZScsXHJcbiAgICAgICAgJ2hlYWRlckZpbHRlcicsXHJcbiAgICAgICAgJ2lzTWVhc3VyZScsXHJcbiAgICAgICAgJ3ByZWNpc2lvbicsXHJcbiAgICAgICAgJ3J1bm5pbmdUb3RhbCcsXHJcbiAgICAgICAgJ3NlbGVjdG9yJyxcclxuICAgICAgICAnc2hvd0dyYW5kVG90YWxzJyxcclxuICAgICAgICAnc2hvd1RvdGFscycsXHJcbiAgICAgICAgJ3Nob3dWYWx1ZXMnLFxyXG4gICAgICAgICdzb3J0QnknLFxyXG4gICAgICAgICdzb3J0QnlTdW1tYXJ5RmllbGQnLFxyXG4gICAgICAgICdzb3J0QnlTdW1tYXJ5UGF0aCcsXHJcbiAgICAgICAgJ3NvcnRpbmdNZXRob2QnLFxyXG4gICAgICAgICdzb3J0T3JkZXInLFxyXG4gICAgICAgICdzdW1tYXJ5RGlzcGxheU1vZGUnLFxyXG4gICAgICAgICdzdW1tYXJ5VHlwZScsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ3dvcmRXcmFwRW5hYmxlZCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRHhpRmlsdGVyQnVpbGRlckZpZWxkIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZmllbGRzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlGaWVsZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpRmllbGRDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpRmllbGRNb2R1bGUgeyB9XHJcbiJdfQ==