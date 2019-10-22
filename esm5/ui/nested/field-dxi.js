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
import { DxiFilterBuilderField } from './base/filter-builder-field-dxi';
var DxiFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiFieldComponent, _super);
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
    DxiFieldComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    DxiFieldComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-field',
            template: '',
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
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxiFieldComponent);
    return DxiFieldComponent;
}(DxiFilterBuilderField));
export { DxiFieldComponent };
var DxiFieldModule = /** @class */ (function () {
    function DxiFieldModule() {
    }
    DxiFieldModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiFieldComponent
            ],
            exports: [
                DxiFieldComponent
            ],
        })
    ], DxiFieldModule);
    return DxiFieldModule;
}());
export { DxiFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbImZpZWxkLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBMER4RTtJQUF1Qyw2Q0FBcUI7SUFPeEQsMkJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLDBDQUFXO2FBQXpCO1lBQ0ksT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFSSixpQkFBaUI7UUF2RDdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLDJCQUEyQjtnQkFDM0IsU0FBUztnQkFDVCxlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCxrQkFBa0I7Z0JBQ2xCLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsNEJBQTRCO2dCQUM1QixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsY0FBYztnQkFDZCx1QkFBdUI7Z0JBQ3ZCLE1BQU07Z0JBQ04sV0FBVztnQkFDWCx3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsZUFBZTtnQkFDZixVQUFVO2dCQUNWLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxjQUFjO2dCQUNkLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osUUFBUTtnQkFDUixvQkFBb0I7Z0JBQ3BCLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsYUFBYTtnQkFDYixTQUFTO2dCQUNULE9BQU87Z0JBQ1AsaUJBQWlCO2FBQ3BCO3FCQWxEUSxFQUFFO1NBbURkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BUk4saUJBQWlCLENBYzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWRELENBQXVDLHFCQUFxQixHQWMzRDtTQWRZLGlCQUFpQjtBQXdCOUI7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFSMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeGlGaWx0ZXJCdWlsZGVyRmllbGQgfSBmcm9tICcuL2Jhc2UvZmlsdGVyLWJ1aWxkZXItZmllbGQtZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWZpZWxkJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24nLFxyXG4gICAgICAgICdjYXB0aW9uJyxcclxuICAgICAgICAnY3VzdG9taXplVGV4dCcsXHJcbiAgICAgICAgJ2RhdGFGaWVsZCcsXHJcbiAgICAgICAgJ2RhdGFUeXBlJyxcclxuICAgICAgICAnZWRpdG9yT3B0aW9ucycsXHJcbiAgICAgICAgJ2VkaXRvclRlbXBsYXRlJyxcclxuICAgICAgICAnZmFsc2VUZXh0JyxcclxuICAgICAgICAnZmlsdGVyT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ2Zvcm1hdCcsXHJcbiAgICAgICAgJ2xvb2t1cCcsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICd0cnVlVGV4dCcsXHJcbiAgICAgICAgJ2FsbG93Q3Jvc3NHcm91cENhbGN1bGF0aW9uJyxcclxuICAgICAgICAnYWxsb3dFeHBhbmRBbGwnLFxyXG4gICAgICAgICdhbGxvd0ZpbHRlcmluZycsXHJcbiAgICAgICAgJ2FsbG93U29ydGluZycsXHJcbiAgICAgICAgJ2FsbG93U29ydGluZ0J5U3VtbWFyeScsXHJcbiAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICdhcmVhSW5kZXgnLFxyXG4gICAgICAgICdjYWxjdWxhdGVDdXN0b21TdW1tYXJ5JyxcclxuICAgICAgICAnY2FsY3VsYXRlU3VtbWFyeVZhbHVlJyxcclxuICAgICAgICAnZGlzcGxheUZvbGRlcicsXHJcbiAgICAgICAgJ2V4cGFuZGVkJyxcclxuICAgICAgICAnZmlsdGVyVHlwZScsXHJcbiAgICAgICAgJ2ZpbHRlclZhbHVlcycsXHJcbiAgICAgICAgJ2dyb3VwSW5kZXgnLFxyXG4gICAgICAgICdncm91cEludGVydmFsJyxcclxuICAgICAgICAnZ3JvdXBOYW1lJyxcclxuICAgICAgICAnaGVhZGVyRmlsdGVyJyxcclxuICAgICAgICAnaXNNZWFzdXJlJyxcclxuICAgICAgICAncHJlY2lzaW9uJyxcclxuICAgICAgICAncnVubmluZ1RvdGFsJyxcclxuICAgICAgICAnc2VsZWN0b3InLFxyXG4gICAgICAgICdzaG93R3JhbmRUb3RhbHMnLFxyXG4gICAgICAgICdzaG93VG90YWxzJyxcclxuICAgICAgICAnc2hvd1ZhbHVlcycsXHJcbiAgICAgICAgJ3NvcnRCeScsXHJcbiAgICAgICAgJ3NvcnRCeVN1bW1hcnlGaWVsZCcsXHJcbiAgICAgICAgJ3NvcnRCeVN1bW1hcnlQYXRoJyxcclxuICAgICAgICAnc29ydGluZ01ldGhvZCcsXHJcbiAgICAgICAgJ3NvcnRPcmRlcicsXHJcbiAgICAgICAgJ3N1bW1hcnlEaXNwbGF5TW9kZScsXHJcbiAgICAgICAgJ3N1bW1hcnlUeXBlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnd29yZFdyYXBFbmFibGVkJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpRmllbGRDb21wb25lbnQgZXh0ZW5kcyBEeGlGaWx0ZXJCdWlsZGVyRmllbGQge1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWVsZHMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUZpZWxkQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlGaWVsZENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlGaWVsZE1vZHVsZSB7IH1cclxuIl19