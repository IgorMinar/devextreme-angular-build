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
    DxiColumnComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
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
        ContentChildren(forwardRef(function () { return DxiButtonComponent; }))
    ], DxiColumnComponent.prototype, "buttonsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiColumnComponent_1; }))
    ], DxiColumnComponent.prototype, "columnsChildren", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiValidationRuleComponent; }))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQvIiwic291cmNlcyI6WyJjb2x1bW4tZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUVwQyxpREFBaUQ7QUFFakQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBRU4sZUFBZSxFQUNmLFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQ0gsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBMEVuRTtJQUF3Qyw4Q0FBaUI7SUFzRXJELDRCQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQWVWO1FBYkcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQzVCLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtTQUNqQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFD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ZCxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLE1BQU07Z0JBQ04sV0FBVztnQkFDWCxhQUFhO2dCQUNiLHlCQUF5QjtnQkFDekIsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCxVQUFVO2dCQUNWLE1BQU07Z0JBQ04saUJBQWlCO2dCQUNqQixTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsT0FBTzthQUNWO3FCQWxFUSxFQUFFO1NBbUVkLENBQUM7UUF1RWUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQXZFTixrQkFBa0IsQ0F5RjlCO0lBQUQseUJBQUM7O0NBQUEsQUF6RkQsQ0FBd0MsaUJBQWlCLEdBeUZ4RDtTQXpGWSxrQkFBa0I7QUFtRy9CO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBUjNCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asa0JBQWtCO2FBQ25CO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IFR1ZSBPY3QgMjIgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxufSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER4aURhdGFHcmlkQ29sdW1uIH0gZnJvbSAnLi9iYXNlL2RhdGEtZ3JpZC1jb2x1bW4tZHhpJztcclxuaW1wb3J0IHsgRHhpQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZHhpJztcclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktY29sdW1uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FsaWdubWVudCcsXHJcbiAgICAgICAgJ2FsbG93RWRpdGluZycsXHJcbiAgICAgICAgJ2FsbG93RXhwb3J0aW5nJyxcclxuICAgICAgICAnYWxsb3dGaWx0ZXJpbmcnLFxyXG4gICAgICAgICdhbGxvd0ZpeGluZycsXHJcbiAgICAgICAgJ2FsbG93R3JvdXBpbmcnLFxyXG4gICAgICAgICdhbGxvd0hlYWRlckZpbHRlcmluZycsXHJcbiAgICAgICAgJ2FsbG93SGlkaW5nJyxcclxuICAgICAgICAnYWxsb3dSZW9yZGVyaW5nJyxcclxuICAgICAgICAnYWxsb3dSZXNpemluZycsXHJcbiAgICAgICAgJ2FsbG93U2VhcmNoJyxcclxuICAgICAgICAnYWxsb3dTb3J0aW5nJyxcclxuICAgICAgICAnYXV0b0V4cGFuZEdyb3VwJyxcclxuICAgICAgICAnYnV0dG9ucycsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUNlbGxWYWx1ZScsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZURpc3BsYXlWYWx1ZScsXHJcbiAgICAgICAgJ2NhbGN1bGF0ZUZpbHRlckV4cHJlc3Npb24nLFxyXG4gICAgICAgICdjYWxjdWxhdGVHcm91cFZhbHVlJyxcclxuICAgICAgICAnY2FsY3VsYXRlU29ydFZhbHVlJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2NlbGxUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2NvbHVtbnMnLFxyXG4gICAgICAgICdjc3NDbGFzcycsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRleHQnLFxyXG4gICAgICAgICdkYXRhRmllbGQnLFxyXG4gICAgICAgICdkYXRhVHlwZScsXHJcbiAgICAgICAgJ2VkaXRDZWxsVGVtcGxhdGUnLFxyXG4gICAgICAgICdlZGl0b3JPcHRpb25zJyxcclxuICAgICAgICAnZW5jb2RlSHRtbCcsXHJcbiAgICAgICAgJ2ZhbHNlVGV4dCcsXHJcbiAgICAgICAgJ2ZpbHRlck9wZXJhdGlvbnMnLFxyXG4gICAgICAgICdmaWx0ZXJUeXBlJyxcclxuICAgICAgICAnZmlsdGVyVmFsdWUnLFxyXG4gICAgICAgICdmaWx0ZXJWYWx1ZXMnLFxyXG4gICAgICAgICdmaXhlZCcsXHJcbiAgICAgICAgJ2ZpeGVkUG9zaXRpb24nLFxyXG4gICAgICAgICdmb3JtYXQnLFxyXG4gICAgICAgICdmb3JtSXRlbScsXHJcbiAgICAgICAgJ2dyb3VwQ2VsbFRlbXBsYXRlJyxcclxuICAgICAgICAnZ3JvdXBJbmRleCcsXHJcbiAgICAgICAgJ2hlYWRlckNlbGxUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2hlYWRlckZpbHRlcicsXHJcbiAgICAgICAgJ2hpZGluZ1ByaW9yaXR5JyxcclxuICAgICAgICAnaXNCYW5kJyxcclxuICAgICAgICAnbG9va3VwJyxcclxuICAgICAgICAnbWluV2lkdGgnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAnb3duZXJCYW5kJyxcclxuICAgICAgICAncmVuZGVyQXN5bmMnLFxyXG4gICAgICAgICdzZWxlY3RlZEZpbHRlck9wZXJhdGlvbicsXHJcbiAgICAgICAgJ3NldENlbGxWYWx1ZScsXHJcbiAgICAgICAgJ3Nob3dFZGl0b3JBbHdheXMnLFxyXG4gICAgICAgICdzaG93SW5Db2x1bW5DaG9vc2VyJyxcclxuICAgICAgICAnc2hvd1doZW5Hcm91cGVkJyxcclxuICAgICAgICAnc29ydEluZGV4JyxcclxuICAgICAgICAnc29ydGluZ01ldGhvZCcsXHJcbiAgICAgICAgJ3NvcnRPcmRlcicsXHJcbiAgICAgICAgJ3RydWVUZXh0JyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25SdWxlcycsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd2aXNpYmxlSW5kZXgnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUNvbHVtbkNvbXBvbmVudCBleHRlbmRzIER4aURhdGFHcmlkQ29sdW1uIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyVmFsdWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNvcnRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc29ydE9yZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmlzaWJsZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb2x1bW5zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUJ1dHRvbkNvbXBvbmVudCkpXHJcbiAgICBnZXQgYnV0dG9uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlCdXR0b25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignYnV0dG9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQ29sdW1uQ29tcG9uZW50KSlcclxuICAgIGdldCBjb2x1bW5zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUNvbHVtbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbHVtbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2x1bW5zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdjb2x1bW5zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudCkpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvblJ1bGVzQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCd2YWxpZGF0aW9uUnVsZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmlsdGVyVmFsdWVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpbHRlclZhbHVlc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZ3JvdXBJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRGaWx0ZXJPcGVyYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NvcnRJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc29ydE9yZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlSW5kZXhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUNvbHVtbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpQ29sdW1uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUNvbHVtbk1vZHVsZSB7IH1cclxuIl19