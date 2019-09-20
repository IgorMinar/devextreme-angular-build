"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var data_grid_column_dxi_1 = require("./base/data-grid-column-dxi");
var button_dxi_1 = require("./button-dxi");
var validation_rule_dxi_1 = require("./validation-rule-dxi");
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
        { type: core_1.Component, args: [{
                    selector: 'dxi-column',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
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
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiColumnComponent.propDecorators = {
        "filterValueChange": [{ type: core_1.Output },],
        "filterValuesChange": [{ type: core_1.Output },],
        "groupIndexChange": [{ type: core_1.Output },],
        "selectedFilterOperationChange": [{ type: core_1.Output },],
        "sortIndexChange": [{ type: core_1.Output },],
        "sortOrderChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "visibleIndexChange": [{ type: core_1.Output },],
        "buttonsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return button_dxi_1.DxiButtonComponent; }),] },],
        "columnsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return DxiColumnComponent; }),] },],
        "validationRulesChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return validation_rule_dxi_1.DxiValidationRuleComponent; }),] },],
    };
    return DxiColumnComponent;
}(data_grid_column_dxi_1.DxiDataGridColumn));
exports.DxiColumnComponent = DxiColumnComponent;
var DxiColumnModule = (function () {
    function DxiColumnModule() {
    }
    DxiColumnModule.decorators = [
        { type: core_1.NgModule, args: [{
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
exports.DxiColumnModule = DxiColumnModule;
//# sourceMappingURL=column-dxi.js.map