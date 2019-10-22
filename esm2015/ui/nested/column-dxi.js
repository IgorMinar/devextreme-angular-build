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
import { Component, NgModule, Host, SkipSelf, Output, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxiDataGridColumn } from './base/data-grid-column-dxi';
import { DxiButtonComponent } from './button-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
let DxiColumnComponent = DxiColumnComponent_1 = class DxiColumnComponent extends DxiDataGridColumn {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'filterValueChange' },
            { emit: 'filterValuesChange' },
            { emit: 'groupIndexChange' },
            { emit: 'selectedFilterOperationChange' },
            { emit: 'sortIndexChange' },
            { emit: 'sortOrderChange' },
            { emit: 'visibleChange' },
            { emit: 'visibleIndexChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'columns';
    }
    get buttonsChildren() {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this.setChildren('buttons', value);
    }
    get columnsChildren() {
        return this._getOption('columns');
    }
    set columnsChildren(value) {
        this.setChildren('columns', value);
    }
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
};
DxiColumnComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "filterValueChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "filterValuesChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "groupIndexChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "selectedFilterOperationChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "sortIndexChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "sortOrderChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output()
], DxiColumnComponent.prototype, "visibleIndexChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiButtonComponent))
], DxiColumnComponent.prototype, "buttonsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiColumnComponent_1))
], DxiColumnComponent.prototype, "columnsChildren", null);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiValidationRuleComponent))
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
    tslib_1.__param(1, Host())
], DxiColumnComponent);
export { DxiColumnComponent };
let DxiColumnModule = class DxiColumnModule {
};
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
export { DxiColumnModule };
var DxiColumnComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJjb2x1bW4tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBRU4sZUFBZSxFQUNmLFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQ0gsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBMEVuRSxJQUFhLGtCQUFrQiwwQkFBL0Isd0JBQWdDLFNBQVEsaUJBQWlCO0lBc0VyRCxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ2pDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENB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eUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsZUFBZTtZQUNmLFdBQVc7WUFDWCxVQUFVO1lBQ1YsTUFBTTtZQUNOLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsY0FBYztZQUNkLE9BQU87U0FDVjtpQkFsRVEsRUFBRTtLQW1FZCxDQUFDO0lBdUVlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7R0F2RU4sa0JBQWtCLENBeUY5QjtTQXpGWSxrQkFBa0I7QUFtRy9CLElBQWEsZUFBZSxHQUE1QjtDQUFnQyxDQUFBO0FBQW5CLGVBQWU7SUFSM0IsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0JBQWtCO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1NBQ25CO0tBQ0YsQ0FBQztHQUNXLGVBQWUsQ0FBSTtTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhpRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuL2Jhc2UvZGF0YS1ncmlkLWNvbHVtbi1keGknO1xyXG5pbXBvcnQgeyBEeGlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1keGknO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1ydWxlLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4aS1jb2x1bW4nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWxpZ25tZW50JyxcclxuICAgICAgICAnYWxsb3dFZGl0aW5nJyxcclxuICAgICAgICAnYWxsb3dFeHBvcnRpbmcnLFxyXG4gICAgICAgICdhbGxvd0ZpbHRlcmluZycsXHJcbiAgICAgICAgJ2FsbG93Rml4aW5nJyxcclxuICAgICAgICAnYWxsb3dHcm91cGluZycsXHJcbiAgICAgICAgJ2FsbG93SGVhZGVyRmlsdGVyaW5nJyxcclxuICAgICAgICAnYWxsb3dIaWRpbmcnLFxyXG4gICAgICAgICdhbGxvd1Jlb3JkZXJpbmcnLFxyXG4gICAgICAgICdhbGxvd1Jlc2l6aW5nJyxcclxuICAgICAgICAnYWxsb3dTZWFyY2gnLFxyXG4gICAgICAgICdhbGxvd1NvcnRpbmcnLFxyXG4gICAgICAgICdhdXRvRXhwYW5kR3JvdXAnLFxyXG4gICAgICAgICdidXR0b25zJyxcclxuICAgICAgICAnY2FsY3VsYXRlQ2VsbFZhbHVlJyxcclxuICAgICAgICAnY2FsY3VsYXRlRGlzcGxheVZhbHVlJyxcclxuICAgICAgICAnY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUdyb3VwVmFsdWUnLFxyXG4gICAgICAgICdjYWxjdWxhdGVTb3J0VmFsdWUnLFxyXG4gICAgICAgICdjYXB0aW9uJyxcclxuICAgICAgICAnY2VsbFRlbXBsYXRlJyxcclxuICAgICAgICAnY29sdW1ucycsXHJcbiAgICAgICAgJ2Nzc0NsYXNzJyxcclxuICAgICAgICAnY3VzdG9taXplVGV4dCcsXHJcbiAgICAgICAgJ2RhdGFGaWVsZCcsXHJcbiAgICAgICAgJ2RhdGFUeXBlJyxcclxuICAgICAgICAnZWRpdENlbGxUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2VkaXRvck9wdGlvbnMnLFxyXG4gICAgICAgICdlbmNvZGVIdG1sJyxcclxuICAgICAgICAnZmFsc2VUZXh0JyxcclxuICAgICAgICAnZmlsdGVyT3BlcmF0aW9ucycsXHJcbiAgICAgICAgJ2ZpbHRlclR5cGUnLFxyXG4gICAgICAgICdmaWx0ZXJWYWx1ZScsXHJcbiAgICAgICAgJ2ZpbHRlclZhbHVlcycsXHJcbiAgICAgICAgJ2ZpeGVkJyxcclxuICAgICAgICAnZml4ZWRQb3NpdGlvbicsXHJcbiAgICAgICAgJ2Zvcm1hdCcsXHJcbiAgICAgICAgJ2Zvcm1JdGVtJyxcclxuICAgICAgICAnZ3JvdXBDZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdncm91cEluZGV4JyxcclxuICAgICAgICAnaGVhZGVyQ2VsbFRlbXBsYXRlJyxcclxuICAgICAgICAnaGVhZGVyRmlsdGVyJyxcclxuICAgICAgICAnaGlkaW5nUHJpb3JpdHknLFxyXG4gICAgICAgICdpc0JhbmQnLFxyXG4gICAgICAgICdsb29rdXAnLFxyXG4gICAgICAgICdtaW5XaWR0aCcsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICdvd25lckJhbmQnLFxyXG4gICAgICAgICdyZW5kZXJBc3luYycsXHJcbiAgICAgICAgJ3NlbGVjdGVkRmlsdGVyT3BlcmF0aW9uJyxcclxuICAgICAgICAnc2V0Q2VsbFZhbHVlJyxcclxuICAgICAgICAnc2hvd0VkaXRvckFsd2F5cycsXHJcbiAgICAgICAgJ3Nob3dJbkNvbHVtbkNob29zZXInLFxyXG4gICAgICAgICdzaG93V2hlbkdyb3VwZWQnLFxyXG4gICAgICAgICdzb3J0SW5kZXgnLFxyXG4gICAgICAgICdzb3J0aW5nTWV0aG9kJyxcclxuICAgICAgICAnc29ydE9yZGVyJyxcclxuICAgICAgICAndHJ1ZVRleHQnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndmFsaWRhdGlvblJ1bGVzJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3Zpc2libGVJbmRleCcsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQ29sdW1uQ29tcG9uZW50IGV4dGVuZHMgRHhpRGF0YUdyaWRDb2x1bW4ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpbHRlclZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEZpbHRlck9wZXJhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc29ydEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzb3J0T3JkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2NvbHVtbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQnV0dG9uQ29tcG9uZW50KSlcclxuICAgIGdldCBidXR0b25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJ1dHRvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2J1dHRvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBidXR0b25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdidXR0b25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlDb2x1bW5Db21wb25lbnQpKVxyXG4gICAgZ2V0IGNvbHVtbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQ29sdW1uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sdW1ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbHVtbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2NvbHVtbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50KSlcclxuICAgIGdldCB2YWxpZGF0aW9uUnVsZXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWxpZGF0aW9uUnVsZXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWxpZGF0aW9uUnVsZXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3ZhbGlkYXRpb25SdWxlcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmaWx0ZXJWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyVmFsdWVzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cEluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZEZpbHRlck9wZXJhdGlvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydEluZGV4Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzb3J0T3JkZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Zpc2libGVJbmRleENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQ29sdW1uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlDb2x1bW5Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQ29sdW1uTW9kdWxlIHsgfVxyXG4iXX0=