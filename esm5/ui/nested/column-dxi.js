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
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiDataGridColumn } from './base/data-grid-column-dxi';
import { DxiButtonComponent } from './button-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
var DxiColumnComponent = (function (_super) {
    __extends(DxiColumnComponent, _super);
    function DxiColumnComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'filterValueChange' },
            { emit: 'filterValuesChange' },
            { emit: 'groupIndexChange' },
            { emit: 'selectedFilterOperationChange' },
            { emit: 'sortIndexChange' },
            { emit: 'sortOrderChange' },
            { emit: 'visibleChange' },
            { emit: 'visibleIndexChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiColumnComponent.prototype, "_optionPath", {
        get: function () {
            return 'columns';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "columnsChildren", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this.setChildren('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiColumnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-column',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'alignment',
                        'allowEditing',
                        'allowExporting',
                        'allowFiltering',
                        'allowFixing',
                        'allowGrouping',
                        'allowHeaderFiltering',
                        'allowHiding',
                        'allowReordering',
                        'allowResizing',
                        'allowSearch',
                        'allowSorting',
                        'autoExpandGroup',
                        'buttons',
                        'calculateCellValue',
                        'calculateDisplayValue',
                        'calculateFilterExpression',
                        'calculateGroupValue',
                        'calculateSortValue',
                        'caption',
                        'cellTemplate',
                        'columns',
                        'cssClass',
                        'customizeText',
                        'dataField',
                        'dataType',
                        'editCellTemplate',
                        'editorOptions',
                        'encodeHtml',
                        'falseText',
                        'filterOperations',
                        'filterType',
                        'filterValue',
                        'filterValues',
                        'fixed',
                        'fixedPosition',
                        'format',
                        'formItem',
                        'groupCellTemplate',
                        'groupIndex',
                        'headerCellTemplate',
                        'headerFilter',
                        'hidingPriority',
                        'isBand',
                        'lookup',
                        'minWidth',
                        'name',
                        'ownerBand',
                        'renderAsync',
                        'selectedFilterOperation',
                        'setCellValue',
                        'showEditorAlways',
                        'showInColumnChooser',
                        'showWhenGrouped',
                        'sortIndex',
                        'sortingMethod',
                        'sortOrder',
                        'trueText',
                        'type',
                        'validationRules',
                        'visible',
                        'visibleIndex',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiColumnComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiColumnComponent.propDecorators = {
        "filterValueChange": [{ type: Output },],
        "filterValuesChange": [{ type: Output },],
        "groupIndexChange": [{ type: Output },],
        "selectedFilterOperationChange": [{ type: Output },],
        "sortIndexChange": [{ type: Output },],
        "sortOrderChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "visibleIndexChange": [{ type: Output },],
        "buttonsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiButtonComponent; }),] },],
        "columnsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiColumnComponent; }),] },],
        "validationRulesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiValidationRuleComponent; }),] },],
    };
    return DxiColumnComponent;
}(DxiDataGridColumn));
export { DxiColumnComponent };
var DxiColumnModule = (function () {
    function DxiColumnModule() {
    }
    DxiColumnModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiColumnComponent
                    ],
                    exports: [
                        DxiColumnComponent
                    ],
                },] },
    ];
    return DxiColumnModule;
}());
export { DxiColumnModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWR4aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9jb2x1bW4tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUEwRTNCLHNDQUFpQjtJQXNFckQsNEJBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBZVY7UUFiRyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ2pDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQTlDRCxzQkFBYywyQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDcEI7OztPQUFBOzBCQUlHLCtDQUFlOztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzthQUV0QyxVQUFvQixLQUFLO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDOzs7OzBCQUdHLCtDQUFlOztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzthQUV0QyxVQUFvQixLQUFLO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDOzs7OzBCQUdHLHVEQUF1Qjs7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7YUFFOUMsVUFBNEIsS0FBSztZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDOzs7OztnQkEzSUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLFNBQVM7d0JBQ1Qsb0JBQW9CO3dCQUNwQix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0IscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLFNBQVM7d0JBQ1QsY0FBYzt3QkFDZCxTQUFTO3dCQUNULFVBQVU7d0JBQ1YsZUFBZTt3QkFDZixXQUFXO3dCQUNYLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixjQUFjO3dCQUNkLE9BQU87d0JBQ1AsZUFBZTt3QkFDZixRQUFRO3dCQUNSLFVBQVU7d0JBQ1YsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixVQUFVO3dCQUNWLE1BQU07d0JBQ04sV0FBVzt3QkFDWCxhQUFhO3dCQUNiLHlCQUF5Qjt3QkFDekIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLE1BQU07d0JBQ04saUJBQWlCO3dCQUNqQixTQUFTO3dCQUNULGNBQWM7d0JBQ2QsT0FBTztxQkFDVjtpQkFDSjs7OztnQkE1RVEsZ0JBQWdCLHVCQW1KUixRQUFRLFlBQUksSUFBSTtnQkFuSnhCLGdCQUFnQix1QkFvSlosSUFBSTs7O3NDQWxFWixNQUFNO3VDQUtOLE1BQU07cUNBS04sTUFBTTtrREFLTixNQUFNO29DQUtOLE1BQU07b0NBS04sTUFBTTtrQ0FLTixNQUFNO3VDQUtOLE1BQU07b0NBTU4sZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7b0NBUXBELGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDOzRDQVFwRCxlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSwwQkFBMEIsRUFBMUIsQ0FBMEIsQ0FBQzs7NkJBNUtqRTtFQThHd0MsaUJBQWlCO1NBQTVDLGtCQUFrQjs7Ozs7Z0JBMkY5QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjtxQkFDbkI7aUJBQ0Y7OzBCQWhORDs7U0FpTmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuL2Jhc2UvZGF0YS1ncmlkLWNvbHVtbi1keGknO1xyXG5pbXBvcnQgeyBEeGlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1jb2x1bW4nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWxpZ25tZW50JyxcclxuICAgICAgICAnYWxsb3dFZGl0aW5nJyxcclxuICAgICAgICAnYWxsb3dFeHBvcnRpbmcnLFxyXG4gICAgICAgICdhbGxvd0ZpbHRlcmluZycsXHJcbiAgICAgICAgJ2FsbG93Rml4aW5nJyxcclxuICAgICAgICAnYWxsb3dHcm91cGluZycsXHJcbiAgICAgICAgJ2FsbG93SGVhZGVyRmlsdGVyaW5nJyxcclxuICAgICAgICAnYWxsb3dIaWRpbmcnLFxyXG4gICAgICAgICdhbGxvd1Jlb3JkZXJpbmcnLFxyXG4gICAgICAgICdhbGxvd1Jlc2l6aW5nJyxcclxuICAgICAgICAnYWxsb3dTZWFyY2gnLFxyXG4gICAgICAgICdhbGxvd1NvcnRpbmcnLFxyXG4gICAgICAgICdhdXRvRXhwYW5kR3JvdXAnLFxyXG4gICAgICAgICdidXR0b25zJyxcclxuICAgICAgICAnY2FsY3VsYXRlQ2VsbFZhbHVlJyxcclxuICAgICAgICAnY2FsY3VsYXRlRGlzcGxheVZhbHVlJyxcclxuICAgICAgICAnY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUdyb3VwVmFsdWUnLFxyXG4gICAgICAgICdjYWxjdWxhdGVTb3J0VmFsdWUnLFxyXG4gICAgICAgICdjYXB0aW9uJyxcclxuICAgICAgICAnY2VsbFRlbXBsYXRlJyxcclxuICAgICAgICAnY29sdW1ucycsXHJcbiAgICAgICAgJ2Nzc0NsYXNzJyxcclxuICAgICAgICAnY3VzdG9taXplVGV4dCcsXHJcbiAgICAgICAgJ2RhdGFGaWVsZCcsXHJcbiAgICAgICAgJ2RhdGFUeXBlJyxcclxuICAgICAgICAnZWRpdENlbGxUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2VkaXRvck9wdGlvbnMnLFxyXG4gICAgICAgICdlbmNvZGVIdG1sJyxcclxuICAgICAgICAnZmFsc2VUZXh0JyxcclxuICAgICAgICAnZmlsdGVyT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ2ZpbHRlclR5cGUnLFxyXG4gICAgICAgICdmaWx0ZXJWYWx1ZScsXHJcbiAgICAgICAgJ2ZpbHRlclZhbHVlcycsXHJcbiAgICAgICAgJ2ZpeGVkJyxcclxuICAgICAgICAnZml4ZWRQb3NpdGlvbicsXHJcbiAgICAgICAgJ2Zvcm1hdCcsXHJcbiAgICAgICAgJ2Zvcm1JdGVtJyxcclxuICAgICAgICAnZ3JvdXBDZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdncm91cEluZGV4JyxcclxuICAgICAgICAnaGVhZGVyQ2VsbFRlbXBsYXRlJyxcclxuICAgICAgICAnaGVhZGVyRmlsdGVyJyxcclxuICAgICAgICAnaGlkaW5nUHJpb3JpdHknLFxyXG4gICAgICAgICdpc0JhbmQnLFxyXG4gICAgICAgICdsb29rdXAnLFxyXG4gICAgICAgICdtaW5XaWR0aCcsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICdvd25lckJhbmQnLFxyXG4gICAgICAgICdyZW5kZXJBc3luYycsXHJcbiAgICAgICAgJ3NlbGVjdGVkRmlsdGVyT3BlcmF0aW9uJyxcclxuICAgICAgICAnc2V0Q2VsbFZhbHVlJyxcclxuICAgICAgICAnc2hvd0VkaXRvckFsd2F5cycsXHJcbiAgICAgICAgJ3Nob3dJbkNvbHVtbkNob29zZXInLFxyXG4gICAgICAgICdzaG93V2hlbkdyb3VwZWQnLFxyXG4gICAgICAgICdzb3J0SW5kZXgnLFxyXG4gICAgICAgICdzb3J0aW5nTWV0aG9kJyxcclxuICAgICAgICAnc29ydE9yZGVyJyxcclxuICAgICAgICAndHJ1ZVRleHQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsaWRhdGlvblJ1bGVzJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3Zpc2libGVJbmRleCcsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQ29sdW1uQ29tcG9uZW50IGV4dGVuZHMgRHhpRGF0YUdyaWRDb2x1bW4ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyVmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJWYWx1ZXNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkRmlsdGVyT3BlcmF0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc29ydEluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc29ydEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNvcnRPcmRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNvcnRPcmRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb2x1bW5zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUJ1dHRvbkNvbXBvbmVudCkpXHJcbiAgICBnZXQgYnV0dG9uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlCdXR0b25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignYnV0dG9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQ29sdW1uQ29tcG9uZW50KSlcclxuICAgIGdldCBjb2x1bW5zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUNvbHVtbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdjb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyVmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclZhbHVlc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NvcnRJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydE9yZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlSW5kZXhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUNvbHVtbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpQ29sdW1uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUNvbHVtbk1vZHVsZSB7IH1cclxuIl19