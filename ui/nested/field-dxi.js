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
var filter_builder_field_dxi_1 = require("./base/filter-builder-field-dxi");
var DxiFieldComponent = (function (_super) {
    __extends(DxiFieldComponent, _super);
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
    DxiFieldComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-field',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiFieldComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxiFieldComponent;
}(filter_builder_field_dxi_1.DxiFilterBuilderField));
exports.DxiFieldComponent = DxiFieldComponent;
var DxiFieldModule = (function () {
    function DxiFieldModule() {
    }
    DxiFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiFieldComponent
                    ],
                    exports: [
                        DxiFieldComponent
                    ],
                },] },
    ];
    return DxiFieldModule;
}());
exports.DxiFieldModule = DxiFieldModule;
//# sourceMappingURL=field-dxi.js.map