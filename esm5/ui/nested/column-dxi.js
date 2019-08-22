/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxiDataGridColumn } from './base/data-grid-column-dxi';
import { DxiButtonComponent } from './button-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
var DxiColumnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiColumnComponent, _super);
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
    DxiColumnComponent_1 = DxiColumnComponent;
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
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "filterValueChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "filterValuesChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "groupIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "selectedFilterOperationChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "sortIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "sortOrderChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxiColumnComponent.prototype, "visibleIndexChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiButtonComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiColumnComponent.prototype, "buttonsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiColumnComponent_1; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiColumnComponent.prototype, "columnsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiValidationRuleComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiColumnComponent.prototype, "validationRulesChildren", null);
    DxiColumnComponent = DxiColumnComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'dxi-column',
            template: '',
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
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxiColumnComponent);
    return DxiColumnComponent;
    var DxiColumnComponent_1;
}(DxiDataGridColumn));
export { DxiColumnComponent };
var DxiColumnModule = /** @class */ (function () {
    function DxiColumnModule() {
    }
    DxiColumnModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiColumnComponent
            ],
            exports: [
                DxiColumnComponent
            ],
        })
    ], DxiColumnModule);
    return DxiColumnModule;
}());
export { DxiColumnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9jb2x1bW4tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUEwRW5FO0lBQXdDLDhDQUFpQjtJQXNFckQsNEJBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUQ1QyxZQUVJLGlCQUFPLFNBZVY7UUFiRyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ2pDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMs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UCxlQUFlO2dCQUNmLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IseUJBQXlCO2dCQUN6QixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIscUJBQXFCO2dCQUNyQixpQkFBaUI7Z0JBQ2pCLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixpQkFBaUI7Z0JBQ2pCLFNBQVM7Z0JBQ1QsY0FBYztnQkFDZCxPQUFPO2FBQ1Y7cUJBbEVRLEVBQUU7U0FtRWQsQ0FBQztRQXVFZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQURtQyxnQkFBZ0I7WUFDdEMsZ0JBQWdCO09BdkVuQyxrQkFBa0IsQ0F5RjlCO0lBQUQseUJBQUM7O0NBQUEsQUF6RkQsQ0FBd0MsaUJBQWlCLEdBeUZ4RDtTQXpGWSxrQkFBa0I7QUFtRy9CO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBUjNCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asa0JBQWtCO2FBQ25CO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeGlEYXRhR3JpZENvbHVtbiB9IGZyb20gJy4vYmFzZS9kYXRhLWdyaWQtY29sdW1uLWR4aSc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWR4aSc7XHJcbmltcG9ydCB7IER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0aW9uLXJ1bGUtZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWNvbHVtbicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhbGlnbm1lbnQnLFxyXG4gICAgICAgICdhbGxvd0VkaXRpbmcnLFxyXG4gICAgICAgICdhbGxvd0V4cG9ydGluZycsXHJcbiAgICAgICAgJ2FsbG93RmlsdGVyaW5nJyxcclxuICAgICAgICAnYWxsb3dGaXhpbmcnLFxyXG4gICAgICAgICdhbGxvd0dyb3VwaW5nJyxcclxuICAgICAgICAnYWxsb3dIZWFkZXJGaWx0ZXJpbmcnLFxyXG4gICAgICAgICdhbGxvd0hpZGluZycsXHJcbiAgICAgICAgJ2FsbG93UmVvcmRlcmluZycsXHJcbiAgICAgICAgJ2FsbG93UmVzaXppbmcnLFxyXG4gICAgICAgICdhbGxvd1NlYXJjaCcsXHJcbiAgICAgICAgJ2FsbG93U29ydGluZycsXHJcbiAgICAgICAgJ2F1dG9FeHBhbmRHcm91cCcsXHJcbiAgICAgICAgJ2J1dHRvbnMnLFxyXG4gICAgICAgICdjYWxjdWxhdGVDZWxsVmFsdWUnLFxyXG4gICAgICAgICdjYWxjdWxhdGVEaXNwbGF5VmFsdWUnLFxyXG4gICAgICAgICdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJyxcclxuICAgICAgICAnY2FsY3VsYXRlR3JvdXBWYWx1ZScsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZVNvcnRWYWx1ZScsXHJcbiAgICAgICAgJ2NhcHRpb24nLFxyXG4gICAgICAgICdjZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdjb2x1bW5zJyxcclxuICAgICAgICAnY3NzQ2xhc3MnLFxyXG4gICAgICAgICdjdXN0b21pemVUZXh0JyxcclxuICAgICAgICAnZGF0YUZpZWxkJyxcclxuICAgICAgICAnZGF0YVR5cGUnLFxyXG4gICAgICAgICdlZGl0Q2VsbFRlbXBsYXRlJyxcclxuICAgICAgICAnZWRpdG9yT3B0aW9ucycsXHJcbiAgICAgICAgJ2VuY29kZUh0bWwnLFxyXG4gICAgICAgICdmYWxzZVRleHQnLFxyXG4gICAgICAgICdmaWx0ZXJPcGVyYXRpb25zJyxcclxuICAgICAgICAnZmlsdGVyVHlwZScsXHJcbiAgICAgICAgJ2ZpbHRlclZhbHVlJyxcclxuICAgICAgICAnZmlsdGVyVmFsdWVzJyxcclxuICAgICAgICAnZml4ZWQnLFxyXG4gICAgICAgICdmaXhlZFBvc2l0aW9uJyxcclxuICAgICAgICAnZm9ybWF0JyxcclxuICAgICAgICAnZm9ybUl0ZW0nLFxyXG4gICAgICAgICdncm91cENlbGxUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2dyb3VwSW5kZXgnLFxyXG4gICAgICAgICdoZWFkZXJDZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdoZWFkZXJGaWx0ZXInLFxyXG4gICAgICAgICdoaWRpbmdQcmlvcml0eScsXHJcbiAgICAgICAgJ2lzQmFuZCcsXHJcbiAgICAgICAgJ2xvb2t1cCcsXHJcbiAgICAgICAgJ21pbldpZHRoJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ293bmVyQmFuZCcsXHJcbiAgICAgICAgJ3JlbmRlckFzeW5jJyxcclxuICAgICAgICAnc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb24nLFxyXG4gICAgICAgICdzZXRDZWxsVmFsdWUnLFxyXG4gICAgICAgICdzaG93RWRpdG9yQWx3YXlzJyxcclxuICAgICAgICAnc2hvd0luQ29sdW1uQ2hvb3NlcicsXHJcbiAgICAgICAgJ3Nob3dXaGVuR3JvdXBlZCcsXHJcbiAgICAgICAgJ3NvcnRJbmRleCcsXHJcbiAgICAgICAgJ3NvcnRpbmdNZXRob2QnLFxyXG4gICAgICAgICdzb3J0T3JkZXInLFxyXG4gICAgICAgICd0cnVlVGV4dCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YWxpZGF0aW9uUnVsZXMnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAndmlzaWJsZUluZGV4JyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlDb2x1bW5Db21wb25lbnQgZXh0ZW5kcyBEeGlEYXRhR3JpZENvbHVtbiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJWYWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGZpbHRlclZhbHVlc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclZhbHVlc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZ3JvdXBJbmRleENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGdyb3VwSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEZpbHRlck9wZXJhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzb3J0SW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzb3J0SW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc29ydE9yZGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc29ydE9yZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2aXNpYmxlSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2NvbHVtbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQnV0dG9uQ29tcG9uZW50KSlcclxuICAgIGdldCBidXR0b25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJ1dHRvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2J1dHRvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBidXR0b25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdidXR0b25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlDb2x1bW5Db21wb25lbnQpKVxyXG4gICAgZ2V0IGNvbHVtbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQ29sdW1uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2NvbHVtbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50KSlcclxuICAgIGdldCB2YWxpZGF0aW9uUnVsZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uUnVsZXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uUnVsZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3ZhbGlkYXRpb25SdWxlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyVmFsdWVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cEluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZEZpbHRlck9wZXJhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydEluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0T3JkZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVJbmRleENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQ29sdW1uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlDb2x1bW5Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQ29sdW1uTW9kdWxlIHsgfVxyXG4iXX0=