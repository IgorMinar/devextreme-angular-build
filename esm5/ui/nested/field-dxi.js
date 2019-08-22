/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2ZpZWxkLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBMER4RTtJQUF1Qyw2Q0FBcUI7SUFPeEQsMkJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7SUFDOUQsQ0FBQztJQVZELHNCQUFjLDBDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUpRLGlCQUFpQjtRQXZEN0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osMkJBQTJCO2dCQUMzQixTQUFTO2dCQUNULGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCxVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLGtCQUFrQjtnQkFDbEIsUUFBUTtnQkFDUixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sVUFBVTtnQkFDViw0QkFBNEI7Z0JBQzVCLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLHVCQUF1QjtnQkFDdkIsTUFBTTtnQkFDTixXQUFXO2dCQUNYLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixlQUFlO2dCQUNmLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixRQUFRO2dCQUNSLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsb0JBQW9CO2dCQUNwQixhQUFhO2dCQUNiLFNBQVM7Z0JBQ1QsT0FBTztnQkFDUCxpQkFBaUI7YUFDcEI7cUJBbERRLEVBQUU7U0FtRGQsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FSbkMsaUJBQWlCLENBYzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWRELENBQXVDLHFCQUFxQixHQWMzRDtTQWRZLGlCQUFpQjtBQXdCOUI7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFSMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpRmlsdGVyQnVpbGRlckZpZWxkIH0gZnJvbSAnLi9iYXNlL2ZpbHRlci1idWlsZGVyLWZpZWxkLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1maWVsZCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRleHQnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdkYXRhVHlwZScsXHJcbiAgICAgICAgJ2VkaXRvck9wdGlvbnMnLFxyXG4gICAgICAgICdlZGl0b3JUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2ZhbHNlVGV4dCcsXHJcbiAgICAgICAgJ2ZpbHRlck9wZXJhdGlvbnMnLFxyXG4gICAgICAgICdmb3JtYXQnLFxyXG4gICAgICAgICdsb29rdXAnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAndHJ1ZVRleHQnLFxyXG4gICAgICAgICdhbGxvd0Nyb3NzR3JvdXBDYWxjdWxhdGlvbicsXHJcbiAgICAgICAgJ2FsbG93RXhwYW5kQWxsJyxcclxuICAgICAgICAnYWxsb3dGaWx0ZXJpbmcnLFxyXG4gICAgICAgICdhbGxvd1NvcnRpbmcnLFxyXG4gICAgICAgICdhbGxvd1NvcnRpbmdCeVN1bW1hcnknLFxyXG4gICAgICAgICdhcmVhJyxcclxuICAgICAgICAnYXJlYUluZGV4JyxcclxuICAgICAgICAnY2FsY3VsYXRlQ3VzdG9tU3VtbWFyeScsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZVN1bW1hcnlWYWx1ZScsXHJcbiAgICAgICAgJ2Rpc3BsYXlGb2xkZXInLFxyXG4gICAgICAgICdleHBhbmRlZCcsXHJcbiAgICAgICAgJ2ZpbHRlclR5cGUnLFxyXG4gICAgICAgICdmaWx0ZXJWYWx1ZXMnLFxyXG4gICAgICAgICdncm91cEluZGV4JyxcclxuICAgICAgICAnZ3JvdXBJbnRlcnZhbCcsXHJcbiAgICAgICAgJ2dyb3VwTmFtZScsXHJcbiAgICAgICAgJ2hlYWRlckZpbHRlcicsXHJcbiAgICAgICAgJ2lzTWVhc3VyZScsXHJcbiAgICAgICAgJ3ByZWNpc2lvbicsXHJcbiAgICAgICAgJ3J1bm5pbmdUb3RhbCcsXHJcbiAgICAgICAgJ3NlbGVjdG9yJyxcclxuICAgICAgICAnc2hvd0dyYW5kVG90YWxzJyxcclxuICAgICAgICAnc2hvd1RvdGFscycsXHJcbiAgICAgICAgJ3Nob3dWYWx1ZXMnLFxyXG4gICAgICAgICdzb3J0QnknLFxyXG4gICAgICAgICdzb3J0QnlTdW1tYXJ5RmllbGQnLFxyXG4gICAgICAgICdzb3J0QnlTdW1tYXJ5UGF0aCcsXHJcbiAgICAgICAgJ3NvcnRpbmdNZXRob2QnLFxyXG4gICAgICAgICdzb3J0T3JkZXInLFxyXG4gICAgICAgICdzdW1tYXJ5RGlzcGxheU1vZGUnLFxyXG4gICAgICAgICdzdW1tYXJ5VHlwZScsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgJ3dvcmRXcmFwRW5hYmxlZCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRHhpRmlsdGVyQnVpbGRlckZpZWxkIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZmllbGRzJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlGaWVsZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpRmllbGRDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpRmllbGRNb2R1bGUgeyB9XHJcbiJdfQ==