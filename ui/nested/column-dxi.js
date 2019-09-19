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
 * Build date: Thu Sep 19 2019
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
//# sourceMappingURL=column-dxi.js.map