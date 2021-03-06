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
DxiFieldComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZHhpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbImZpZWxkLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBMER4RSxJQUFhLGlCQUFpQixHQUE5Qix1QkFBK0IsU0FBUSxxQkFBcUI7SUFPeEQsWUFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVZELElBQWMsV0FBVztRQUNyQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBVUosQ0FBQTs7WUFQcUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtZQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7QUFSSixpQkFBaUI7SUF2RDdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osMkJBQTJCO1lBQzNCLFNBQVM7WUFDVCxlQUFlO1lBQ2YsV0FBVztZQUNYLFVBQVU7WUFDVixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLFFBQVE7WUFDUixNQUFNO1lBQ04sVUFBVTtZQUNWLDRCQUE0QjtZQUM1QixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsTUFBTTtZQUNOLFdBQVc7WUFDWCx3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLGVBQWU7WUFDZixVQUFVO1lBQ1YsWUFBWTtZQUNaLGNBQWM7WUFDZCxZQUFZO1lBQ1osZUFBZTtZQUNmLFdBQVc7WUFDWCxjQUFjO1lBQ2QsV0FBVztZQUNYLFdBQVc7WUFDWCxjQUFjO1lBQ2QsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osWUFBWTtZQUNaLFFBQVE7WUFDUixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixTQUFTO1lBQ1QsT0FBTztZQUNQLGlCQUFpQjtTQUNwQjtpQkFsRFEsRUFBRTtLQW1EZCxDQUFDO0lBUWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtHQVJOLGlCQUFpQixDQWM3QjtTQWRZLGlCQUFpQjtBQXdCOUIsSUFBYSxjQUFjLEdBQTNCO0NBQStCLENBQUE7QUFBbEIsY0FBYztJQVIxQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7U0FDbEI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFJO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4aUZpbHRlckJ1aWxkZXJGaWVsZCB9IGZyb20gJy4vYmFzZS9maWx0ZXItYnVpbGRlci1maWVsZC1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktZmllbGQnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicsXHJcbiAgICAgICAgJ2NhcHRpb24nLFxyXG4gICAgICAgICdjdXN0b21pemVUZXh0JyxcclxuICAgICAgICAnZGF0YUZpZWxkJyxcclxuICAgICAgICAnZGF0YVR5cGUnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZWRpdG9yVGVtcGxhdGUnLFxyXG4gICAgICAgICdmYWxzZVRleHQnLFxyXG4gICAgICAgICdmaWx0ZXJPcGVyYXRpb25zJyxcclxuICAgICAgICAnZm9ybWF0JyxcclxuICAgICAgICAnbG9va3VwJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ3RydWVUZXh0JyxcclxuICAgICAgICAnYWxsb3dDcm9zc0dyb3VwQ2FsY3VsYXRpb24nLFxyXG4gICAgICAgICdhbGxvd0V4cGFuZEFsbCcsXHJcbiAgICAgICAgJ2FsbG93RmlsdGVyaW5nJyxcclxuICAgICAgICAnYWxsb3dTb3J0aW5nJyxcclxuICAgICAgICAnYWxsb3dTb3J0aW5nQnlTdW1tYXJ5JyxcclxuICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgJ2FyZWFJbmRleCcsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUN1c3RvbVN1bW1hcnknLFxyXG4gICAgICAgICdjYWxjdWxhdGVTdW1tYXJ5VmFsdWUnLFxyXG4gICAgICAgICdkaXNwbGF5Rm9sZGVyJyxcclxuICAgICAgICAnZXhwYW5kZWQnLFxyXG4gICAgICAgICdmaWx0ZXJUeXBlJyxcclxuICAgICAgICAnZmlsdGVyVmFsdWVzJyxcclxuICAgICAgICAnZ3JvdXBJbmRleCcsXHJcbiAgICAgICAgJ2dyb3VwSW50ZXJ2YWwnLFxyXG4gICAgICAgICdncm91cE5hbWUnLFxyXG4gICAgICAgICdoZWFkZXJGaWx0ZXInLFxyXG4gICAgICAgICdpc01lYXN1cmUnLFxyXG4gICAgICAgICdwcmVjaXNpb24nLFxyXG4gICAgICAgICdydW5uaW5nVG90YWwnLFxyXG4gICAgICAgICdzZWxlY3RvcicsXHJcbiAgICAgICAgJ3Nob3dHcmFuZFRvdGFscycsXHJcbiAgICAgICAgJ3Nob3dUb3RhbHMnLFxyXG4gICAgICAgICdzaG93VmFsdWVzJyxcclxuICAgICAgICAnc29ydEJ5JyxcclxuICAgICAgICAnc29ydEJ5U3VtbWFyeUZpZWxkJyxcclxuICAgICAgICAnc29ydEJ5U3VtbWFyeVBhdGgnLFxyXG4gICAgICAgICdzb3J0aW5nTWV0aG9kJyxcclxuICAgICAgICAnc29ydE9yZGVyJyxcclxuICAgICAgICAnc3VtbWFyeURpc3BsYXlNb2RlJyxcclxuICAgICAgICAnc3VtbWFyeVR5cGUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd3b3JkV3JhcEVuYWJsZWQnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlGaWVsZENvbXBvbmVudCBleHRlbmRzIER4aUZpbHRlckJ1aWxkZXJGaWVsZCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpZWxkcyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpRmllbGRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4aUZpZWxkQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUZpZWxkTW9kdWxlIHsgfVxyXG4iXX0=