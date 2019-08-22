/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiFilterBuilderField } from './base/filter-builder-field-dxi';
let DxiFieldComponent = class DxiFieldComponent extends DxiFilterBuilderField {
    constructor(parentOptionHost, optionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'fields';
    }
};
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
export { DxiFieldComponent };
let DxiFieldModule = class DxiFieldModule {
};
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
export { DxiFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL2ZpZWxkLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBMER4RSxJQUFhLGlCQUFpQixHQUE5Qix1QkFBK0IsU0FBUSxxQkFBcUI7SUFPeEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FVSixDQUFBO0FBZFksaUJBQWlCO0lBdkQ3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLDJCQUEyQjtZQUMzQixTQUFTO1lBQ1QsZUFBZTtZQUNmLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixRQUFRO1lBQ1IsTUFBTTtZQUNOLFVBQVU7WUFDViw0QkFBNEI7WUFDNUIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLE1BQU07WUFDTixXQUFXO1lBQ1gsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2QixlQUFlO1lBQ2YsVUFBVTtZQUNWLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWTtZQUNaLGVBQWU7WUFDZixXQUFXO1lBQ1gsY0FBYztZQUNkLFdBQVc7WUFDWCxXQUFXO1lBQ1gsY0FBYztZQUNkLFVBQVU7WUFDVixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLFlBQVk7WUFDWixRQUFRO1lBQ1Isb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsU0FBUztZQUNULE9BQU87WUFDUCxpQkFBaUI7U0FDcEI7aUJBbERRLEVBQUU7S0FtRGQsQ0FBQztJQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0FSbkMsaUJBQWlCLENBYzdCO1NBZFksaUJBQWlCO0FBd0I5QixJQUFhLGNBQWMsR0FBM0I7Q0FBK0IsQ0FBQTtBQUFsQixjQUFjO0lBUjFCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGlCQUFpQjtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLGlCQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4aUZpbHRlckJ1aWxkZXJGaWVsZCB9IGZyb20gJy4vYmFzZS9maWx0ZXItYnVpbGRlci1maWVsZC1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktZmllbGQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicsXHJcbiAgICAgICAgJ2NhcHRpb24nLFxyXG4gICAgICAgICdjdXN0b21pemVUZXh0JyxcclxuICAgICAgICAnZGF0YUZpZWxkJyxcclxuICAgICAgICAnZGF0YVR5cGUnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZWRpdG9yVGVtcGxhdGUnLFxyXG4gICAgICAgICdmYWxzZVRleHQnLFxyXG4gICAgICAgICdmaWx0ZXJPcGVyYXRpb25zJyxcclxuICAgICAgICAnZm9ybWF0JyxcclxuICAgICAgICAnbG9va3VwJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ3RydWVUZXh0JyxcclxuICAgICAgICAnYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24nLFxyXG4gICAgICAgICdhbGxvd0V4cGFuZEFsbCcsXHJcbiAgICAgICAgJ2FsbG93RmlsdGVyaW5nJyxcclxuICAgICAgICAnYWxsb3dTb3J0aW5nJyxcclxuICAgICAgICAnYWxsb3dTb3J0aW5nQnlTdW1tYXJ5JyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZWFJbmRleCcsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUN1c3RvbVN1bW1hcnknLFxyXG4gICAgICAgICdjYWxjdWxhdGVTdW1tYXJ5VmFsdWUnLFxyXG4gICAgICAgICdkaXNwbGF5Rm9sZGVyJyxcclxuICAgICAgICAnZXhwYW5kZWQnLFxyXG4gICAgICAgICdmaWx0ZXJUeXBlJyxcclxuICAgICAgICAnZmlsdGVyVmFsdWVzJyxcclxuICAgICAgICAnZ3JvdXBJbmRleCcsXHJcbiAgICAgICAgJ2dyb3VwSW50ZXJ2YWwnLFxyXG4gICAgICAgICdncm91cE5hbWUnLFxyXG4gICAgICAgICdoZWFkZXJGaWx0ZXInLFxyXG4gICAgICAgICdpc01lYXN1cmUnLFxyXG4gICAgICAgICdwcmVjaXNpb24nLFxyXG4gICAgICAgICdydW5uaW5nVG90YWwnLFxyXG4gICAgICAgICdzZWxlY3RvcicsXHJcbiAgICAgICAgJ3Nob3dHcmFuZFRvdGFscycsXHJcbiAgICAgICAgJ3Nob3dUb3RhbHMnLFxyXG4gICAgICAgICdzaG93VmFsdWVzJyxcclxuICAgICAgICAnc29ydEJ5JyxcclxuICAgICAgICAnc29ydEJ5U3VtbWFyeUZpZWxkJyxcclxuICAgICAgICAnc29ydEJ5U3VtbWFyeVBhdGgnLFxyXG4gICAgICAgICdzb3J0aW5nTWV0aG9kJyxcclxuICAgICAgICAnc29ydE9yZGVyJyxcclxuICAgICAgICAnc3VtbWFyeURpc3BsYXlNb2RlJyxcclxuICAgICAgICAnc3VtbWFyeVR5cGUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd3b3JkV3JhcEVuYWJsZWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlGaWVsZENvbXBvbmVudCBleHRlbmRzIER4aUZpbHRlckJ1aWxkZXJGaWVsZCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpZWxkcyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpRmllbGRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUZpZWxkQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUZpZWxkTW9kdWxlIHsgfVxyXG4iXX0=