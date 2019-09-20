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
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter } from '@angular/core';
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoDataSourceModule } from './nested/data-source';
import { DxiFieldModule } from './nested/field-dxi';
import { DxoFormatModule } from './nested/format';
import { DxoHeaderFilterModule } from './nested/header-filter';
import { DxoStoreModule } from './nested/store';
import { DxoExportModule } from './nested/export';
import { DxoFieldChooserModule } from './nested/field-chooser';
import { DxoTextsModule } from './nested/texts';
import { DxoFieldPanelModule } from './nested/field-panel';
import { DxoLoadPanelModule } from './nested/load-panel';
import { DxoScrollingModule } from './nested/scrolling';
import { DxoStateStoringModule } from './nested/state-storing';
/**
 * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
 */
var DxPivotGridComponent = (function (_super) {
    __extends(DxPivotGridComponent, _super);
    function DxPivotGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'allowExpandAllChange' },
            { emit: 'allowFilteringChange' },
            { emit: 'allowSortingChange' },
            { emit: 'allowSortingBySummaryChange' },
            { emit: 'dataFieldAreaChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'fieldChooserChange' },
            { emit: 'fieldPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'hideEmptySummaryCellsChange' },
            { emit: 'hintChange' },
            { emit: 'loadPanelChange' },
            { emit: 'rowHeaderLayoutChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollingChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnGrandTotalsChange' },
            { emit: 'showColumnTotalsChange' },
            { emit: 'showRowGrandTotalsChange' },
            { emit: 'showRowTotalsChange' },
            { emit: 'showTotalsPriorChange' },
            { emit: 'stateStoringChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPivotGridComponent.prototype, "allowExpandAll", {
        get: /**
             * Allows an end-user to expand/collapse all header items within a header level.
             */
        function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowFiltering", {
        get: /**
             * Allows a user to filter fields by selecting or deselecting values in the popup menu.
             */
        function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSorting", {
        get: /**
             * Allows an end-user to change sorting options.
             */
        function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSortingBySummary", {
        get: /**
             * Allows an end-user to sort columns by summary values.
             */
        function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataFieldArea", {
        get: /**
             * Specifies the area to which data field headers must belong.
             */
        function () {
            return this._getOption('dataFieldArea');
        },
        set: function (value) {
            this._setOption('dataFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "export", {
        get: /**
             * Configures client-side exporting.
             */
        function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldChooser", {
        get: /**
             * The Field Chooser configuration options.
             */
        function () {
            return this._getOption('fieldChooser');
        },
        set: function (value) {
            this._setOption('fieldChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldPanel", {
        get: /**
             * Configures the field panel.
             */
        function () {
            return this._getOption('fieldPanel');
        },
        set: function (value) {
            this._setOption('fieldPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "headerFilter", {
        get: /**
             * Configures the header filter feature.
             */
        function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hideEmptySummaryCells", {
        get: /**
             * Specifies whether or not to hide rows and columns with no data.
             */
        function () {
            return this._getOption('hideEmptySummaryCells');
        },
        set: function (value) {
            this._setOption('hideEmptySummaryCells', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "loadPanel", {
        get: /**
             * Specifies options configuring the load panel.
             */
        function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rowHeaderLayout", {
        get: /**
             * Specifies the layout of items in the row header.
             */
        function () {
            return this._getOption('rowHeaderLayout');
        },
        set: function (value) {
            this._setOption('rowHeaderLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "scrolling", {
        get: /**
             * A configuration object specifying scrolling options.
             */
        function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showBorders", {
        get: /**
             * Specifies whether the outer borders of the grid are visible or not.
             */
        function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnGrandTotals", {
        get: /**
             * Specifies whether to display the Grand Total column.
             */
        function () {
            return this._getOption('showColumnGrandTotals');
        },
        set: function (value) {
            this._setOption('showColumnGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnTotals", {
        get: /**
             * Specifies whether to display the Total columns.
             */
        function () {
            return this._getOption('showColumnTotals');
        },
        set: function (value) {
            this._setOption('showColumnTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowGrandTotals", {
        get: /**
             * Specifies whether to display the Grand Total row.
             */
        function () {
            return this._getOption('showRowGrandTotals');
        },
        set: function (value) {
            this._setOption('showRowGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowTotals", {
        get: /**
             * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
             */
        function () {
            return this._getOption('showRowTotals');
        },
        set: function (value) {
            this._setOption('showRowTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showTotalsPrior", {
        get: /**
             * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
             */
        function () {
            return this._getOption('showTotalsPrior');
        },
        set: function (value) {
            this._setOption('showTotalsPrior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "stateStoring", {
        get: /**
             * A configuration object specifying options related to state storing.
             */
        function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "texts", {
        get: /**
             * Strings that can be changed or localized in the PivotGrid widget.
             */
        function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "wordWrapEnabled", {
        get: /**
             * Specifies whether long text in header items should be wrapped.
             */
        function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPivotGridComponent.prototype._createInstance = function (element, options) {
        return new DxPivotGrid(element, options);
    };
    DxPivotGridComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPivotGridComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxPivotGridComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPivotGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPivotGridComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPivotGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-pivot-grid',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxPivotGridComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxPivotGridComponent.propDecorators = {
        "allowExpandAll": [{ type: Input },],
        "allowFiltering": [{ type: Input },],
        "allowSorting": [{ type: Input },],
        "allowSortingBySummary": [{ type: Input },],
        "dataFieldArea": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "export": [{ type: Input },],
        "fieldChooser": [{ type: Input },],
        "fieldPanel": [{ type: Input },],
        "headerFilter": [{ type: Input },],
        "height": [{ type: Input },],
        "hideEmptySummaryCells": [{ type: Input },],
        "hint": [{ type: Input },],
        "loadPanel": [{ type: Input },],
        "rowHeaderLayout": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "scrolling": [{ type: Input },],
        "showBorders": [{ type: Input },],
        "showColumnGrandTotals": [{ type: Input },],
        "showColumnTotals": [{ type: Input },],
        "showRowGrandTotals": [{ type: Input },],
        "showRowTotals": [{ type: Input },],
        "showTotalsPrior": [{ type: Input },],
        "stateStoring": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "texts": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "wordWrapEnabled": [{ type: Input },],
        "onCellClick": [{ type: Output },],
        "onCellPrepared": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onContextMenuPreparing": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onExported": [{ type: Output },],
        "onExporting": [{ type: Output },],
        "onFileSaving": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "allowExpandAllChange": [{ type: Output },],
        "allowFilteringChange": [{ type: Output },],
        "allowSortingChange": [{ type: Output },],
        "allowSortingBySummaryChange": [{ type: Output },],
        "dataFieldAreaChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "exportChange": [{ type: Output },],
        "fieldChooserChange": [{ type: Output },],
        "fieldPanelChange": [{ type: Output },],
        "headerFilterChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hideEmptySummaryCellsChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "loadPanelChange": [{ type: Output },],
        "rowHeaderLayoutChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "scrollingChange": [{ type: Output },],
        "showBordersChange": [{ type: Output },],
        "showColumnGrandTotalsChange": [{ type: Output },],
        "showColumnTotalsChange": [{ type: Output },],
        "showRowGrandTotalsChange": [{ type: Output },],
        "showRowTotalsChange": [{ type: Output },],
        "showTotalsPriorChange": [{ type: Output },],
        "stateStoringChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textsChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "wordWrapEnabledChange": [{ type: Output },],
    };
    return DxPivotGridComponent;
}(DxComponent));
export { DxPivotGridComponent };
var DxPivotGridModule = (function () {
    function DxPivotGridModule() {
    }
    DxPivotGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxoDataSourceModule,
                        DxiFieldModule,
                        DxoFormatModule,
                        DxoHeaderFilterModule,
                        DxoStoreModule,
                        DxoExportModule,
                        DxoFieldChooserModule,
                        DxoTextsModule,
                        DxoFieldPanelModule,
                        DxoLoadPanelModule,
                        DxoScrollingModule,
                        DxoStateStoringModule,
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxPivotGridComponent
                    ],
                    exports: [
                        DxPivotGridComponent,
                        DxoDataSourceModule,
                        DxiFieldModule,
                        DxoFormatModule,
                        DxoHeaderFilterModule,
                        DxoStoreModule,
                        DxoExportModule,
                        DxoFieldChooserModule,
                        DxoTextsModule,
                        DxoFieldPanelModule,
                        DxoLoadPanelModule,
                        DxoScrollingModule,
                        DxoStateStoringModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxPivotGridModule;
}());
export { DxPivotGridModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QtZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VpL3Bpdm90LWdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUlmLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sV0FBVyxNQUFNLDBCQUEwQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixD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MEI7cUJBQzNCO29CQUNELFlBQVksRUFBRTt3QkFDWixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLGdCQUFnQjtxQkFDakI7aUJBQ0Y7OzRCQW55QkQ7O1NBb3lCYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIE5nWm9uZSxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgSW5qZWN0LFxyXG5cclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgRG9DaGVjayxcclxuICAgIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmltcG9ydCBEeFBpdm90R3JpZCBmcm9tICdkZXZleHRyZW1lL3VpL3Bpdm90X2dyaWQnO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9EYXRhU291cmNlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBEeGlGaWVsZE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2ZpZWxkLWR4aSc7XHJcbmltcG9ydCB7IER4b0Zvcm1hdE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2Zvcm1hdCc7XHJcbmltcG9ydCB7IER4b0hlYWRlckZpbHRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2hlYWRlci1maWx0ZXInO1xyXG5pbXBvcnQgeyBEeG9TdG9yZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3N0b3JlJztcclxuaW1wb3J0IHsgRHhvRXhwb3J0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZXhwb3J0JztcclxuaW1wb3J0IHsgRHhvRmllbGRDaG9vc2VyTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmllbGQtY2hvb3Nlcic7XHJcbmltcG9ydCB7IER4b1RleHRzTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvdGV4dHMnO1xyXG5pbXBvcnQgeyBEeG9GaWVsZFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvZmllbGQtcGFuZWwnO1xyXG5pbXBvcnQgeyBEeG9Mb2FkUGFuZWxNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9sb2FkLXBhbmVsJztcclxuaW1wb3J0IHsgRHhvU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgRHhvU3RhdGVTdG9yaW5nTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvc3RhdGUtc3RvcmluZyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQaXZvdEdyaWQgaXMgYSB3aWRnZXQgdGhhdCBhbGxvd3MgeW91IHRvIGRpc3BsYXkgYW5kIGFuYWx5emUgbXVsdGktZGltZW5zaW9uYWwgZGF0YSBmcm9tIGEgbG9jYWwgc3RvcmFnZSBvciBhbiBPTEFQIGN1YmUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtcGl2b3QtZ3JpZCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4UGl2b3RHcmlkQ29tcG9uZW50IGV4dGVuZHMgRHhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgICBpbnN0YW5jZTogRHhQaXZvdEdyaWQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGFuIGVuZC11c2VyIHRvIGV4cGFuZC9jb2xsYXBzZSBhbGwgaGVhZGVyIGl0ZW1zIHdpdGhpbiBhIGhlYWRlciBsZXZlbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0V4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0V4cGFuZEFsbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0V4cGFuZEFsbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgYSB1c2VyIHRvIGZpbHRlciBmaWVsZHMgYnkgc2VsZWN0aW5nIG9yIGRlc2VsZWN0aW5nIHZhbHVlcyBpbiB0aGUgcG9wdXAgbWVudS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd0ZpbHRlcmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd0ZpbHRlcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFsbG93RmlsdGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd0ZpbHRlcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgYW4gZW5kLXVzZXIgdG8gY2hhbmdlIHNvcnRpbmcgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd1NvcnRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dTb3J0aW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dTb3J0aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1NvcnRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGFuIGVuZC11c2VyIHRvIHNvcnQgY29sdW1ucyBieSBzdW1tYXJ5IHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGxvd1NvcnRpbmdCeVN1bW1hcnkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dTb3J0aW5nQnlTdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGxvd1NvcnRpbmdCeVN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhcmVhIHRvIHdoaWNoIGRhdGEgZmllbGQgaGVhZGVycyBtdXN0IGJlbG9uZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhRmllbGRBcmVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YUZpZWxkQXJlYScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFGaWVsZEFyZWEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YUZpZWxkQXJlYScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyB0aGUgd2lkZ2V0IHRvIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEZXZFeHByZXNzLmRhdGEuUGl2b3RHcmlkRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5QaXZvdEdyaWREYXRhU291cmNlT3B0aW9ucyB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2RhdGFTb3VyY2UnKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhU291cmNlKHZhbHVlOiBEZXZFeHByZXNzLmRhdGEuUGl2b3RHcmlkRGF0YVNvdXJjZSB8IERldkV4cHJlc3MuZGF0YS5QaXZvdEdyaWREYXRhU291cmNlT3B0aW9ucyB8IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGNsaWVudC1zaWRlIGV4cG9ydGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBleHBvcnQoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgZmlsZU5hbWU/OiBzdHJpbmcsIGlnbm9yZUV4Y2VsRXJyb3JzPzogYm9vbGVhbiwgcHJveHlVcmw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXhwb3J0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXhwb3J0KHZhbHVlOiB7IGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgaWdub3JlRXhjZWxFcnJvcnM/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdleHBvcnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEZpZWxkIENob29zZXIgY29uZmlndXJhdGlvbiBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpZWxkQ2hvb3NlcigpOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgYXBwbHlDaGFuZ2VzTW9kZT86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbGF5b3V0PzogbnVtYmVyIHwgc3RyaW5nLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgYWxsRmllbGRzPzogc3RyaW5nLCBjb2x1bW5GaWVsZHM/OiBzdHJpbmcsIGRhdGFGaWVsZHM/OiBzdHJpbmcsIGZpbHRlckZpZWxkcz86IHN0cmluZywgcm93RmllbGRzPzogc3RyaW5nIH0sIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWVsZENob29zZXInKTtcclxuICAgIH1cclxuICAgIHNldCBmaWVsZENob29zZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBhcHBseUNoYW5nZXNNb2RlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBsYXlvdXQ/OiBudW1iZXIgfCBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBhbGxGaWVsZHM/OiBzdHJpbmcsIGNvbHVtbkZpZWxkcz86IHN0cmluZywgZGF0YUZpZWxkcz86IHN0cmluZywgZmlsdGVyRmllbGRzPzogc3RyaW5nLCByb3dGaWVsZHM/OiBzdHJpbmcgfSwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpZWxkQ2hvb3NlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBmaWVsZCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWVsZFBhbmVsKCk6IHsgYWxsb3dGaWVsZERyYWdnaW5nPzogYm9vbGVhbiwgc2hvd0NvbHVtbkZpZWxkcz86IGJvb2xlYW4sIHNob3dEYXRhRmllbGRzPzogYm9vbGVhbiwgc2hvd0ZpbHRlckZpZWxkcz86IGJvb2xlYW4sIHNob3dSb3dGaWVsZHM/OiBib29sZWFuLCB0ZXh0cz86IHsgY29sdW1uRmllbGRBcmVhPzogc3RyaW5nLCBkYXRhRmllbGRBcmVhPzogc3RyaW5nLCBmaWx0ZXJGaWVsZEFyZWE/OiBzdHJpbmcsIHJvd0ZpZWxkQXJlYT86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmaWVsZFBhbmVsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZmllbGRQYW5lbCh2YWx1ZTogeyBhbGxvd0ZpZWxkRHJhZ2dpbmc/OiBib29sZWFuLCBzaG93Q29sdW1uRmllbGRzPzogYm9vbGVhbiwgc2hvd0RhdGFGaWVsZHM/OiBib29sZWFuLCBzaG93RmlsdGVyRmllbGRzPzogYm9vbGVhbiwgc2hvd1Jvd0ZpZWxkcz86IGJvb2xlYW4sIHRleHRzPzogeyBjb2x1bW5GaWVsZEFyZWE/OiBzdHJpbmcsIGRhdGFGaWVsZEFyZWE/OiBzdHJpbmcsIGZpbHRlckZpZWxkQXJlYT86IHN0cmluZywgcm93RmllbGRBcmVhPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZpZWxkUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgaGVhZGVyIGZpbHRlciBmZWF0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlYWRlckZpbHRlcigpOiB7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCBzaG93UmVsZXZhbnRWYWx1ZXM/OiBib29sZWFuLCB0ZXh0cz86IHsgY2FuY2VsPzogc3RyaW5nLCBlbXB0eVZhbHVlPzogc3RyaW5nLCBvaz86IHN0cmluZyB9LCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoZWFkZXJGaWx0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBoZWFkZXJGaWx0ZXIodmFsdWU6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHNob3dSZWxldmFudFZhbHVlcz86IGJvb2xlYW4sIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlYWRlckZpbHRlcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gaGlkZSByb3dzIGFuZCBjb2x1bW5zIHdpdGggbm8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaWRlRW1wdHlTdW1tYXJ5Q2VsbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGlkZUVtcHR5U3VtbWFyeUNlbGxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGlkZUVtcHR5U3VtbWFyeUNlbGxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaWRlRW1wdHlTdW1tYXJ5Q2VsbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGEgaGludCB0aGF0IGFwcGVhcnMgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hpbnQnKTtcclxuICAgIH1cclxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIG9wdGlvbnMgY29uZmlndXJpbmcgdGhlIGxvYWQgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbG9hZFBhbmVsKCk6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2FkUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBsb2FkUGFuZWwodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgaW5kaWNhdG9yU3JjPzogc3RyaW5nLCBzaG93SW5kaWNhdG9yPzogYm9vbGVhbiwgc2hvd1BhbmU/OiBib29sZWFuLCB0ZXh0Pzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2FkUGFuZWwnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBsYXlvdXQgb2YgaXRlbXMgaW4gdGhlIHJvdyBoZWFkZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm93SGVhZGVyTGF5b3V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93SGVhZGVyTGF5b3V0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93SGVhZGVyTGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Jvd0hlYWRlckxheW91dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2hlcyB0aGUgd2lkZ2V0IHRvIGEgcmlnaHQtdG8tbGVmdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBydGxFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3J0bEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBydGxFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdydGxFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgY29uZmlndXJhdGlvbiBvYmplY3Qgc3BlY2lmeWluZyBzY3JvbGxpbmcgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzY3JvbGxpbmcoKTogeyBtb2RlPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Njcm9sbGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcm9sbGluZyh2YWx1ZTogeyBtb2RlPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Njcm9sbGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgb3V0ZXIgYm9yZGVycyBvZiB0aGUgZ3JpZCBhcmUgdmlzaWJsZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0JvcmRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0JvcmRlcnMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Qm9yZGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0JvcmRlcnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgR3JhbmQgVG90YWwgY29sdW1uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDb2x1bW5HcmFuZFRvdGFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q29sdW1uR3JhbmRUb3RhbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sdW1uR3JhbmRUb3RhbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDb2x1bW5HcmFuZFRvdGFscycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBUb3RhbCBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDb2x1bW5Ub3RhbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NvbHVtblRvdGFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDb2x1bW5Ub3RhbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDb2x1bW5Ub3RhbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgR3JhbmQgVG90YWwgcm93LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dSb3dHcmFuZFRvdGFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Um93R3JhbmRUb3RhbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Um93R3JhbmRUb3RhbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dSb3dHcmFuZFRvdGFscycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBUb3RhbCByb3dzLiBBcHBsaWVzIG9ubHkgaWYgcm93SGVhZGVyTGF5b3V0IGlzIFwic3RhbmRhcmRcIi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Um93VG90YWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dSb3dUb3RhbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Um93VG90YWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Um93VG90YWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGVyZSB0byBzaG93IHRoZSB0b3RhbCByb3dzIG9yIGNvbHVtbnMuIEFwcGxpZXMgb25seSBpZiByb3dIZWFkZXJMYXlvdXQgaXMgXCJzdGFuZGFyZFwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dUb3RhbHNQcmlvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dUb3RhbHNQcmlvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dUb3RhbHNQcmlvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93VG90YWxzUHJpb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBjb25maWd1cmF0aW9uIG9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMgcmVsYXRlZCB0byBzdGF0ZSBzdG9yaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0YXRlU3RvcmluZygpOiB7IGN1c3RvbUxvYWQ/OiBGdW5jdGlvbiwgY3VzdG9tU2F2ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgc2F2aW5nVGltZW91dD86IG51bWJlciwgc3RvcmFnZUtleT86IHN0cmluZywgdHlwZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdGF0ZVN0b3JpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZVN0b3JpbmcodmFsdWU6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0YXRlU3RvcmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudCB3aGVuIHRoZSBUYWIga2V5IGlzIHVzZWQgZm9yIG5hdmlnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0YWJJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RhYkluZGV4JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0cmluZ3MgdGhhdCBjYW4gYmUgY2hhbmdlZCBvciBsb2NhbGl6ZWQgaW4gdGhlIFBpdm90R3JpZCB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGV4dHMoKTogeyBjb2xsYXBzZUFsbD86IHN0cmluZywgZGF0YU5vdEF2YWlsYWJsZT86IHN0cmluZywgZXhwYW5kQWxsPzogc3RyaW5nLCBleHBvcnRUb0V4Y2VsPzogc3RyaW5nLCBncmFuZFRvdGFsPzogc3RyaW5nLCBub0RhdGE/OiBzdHJpbmcsIHJlbW92ZUFsbFNvcnRpbmc/OiBzdHJpbmcsIHNob3dGaWVsZENob29zZXI/OiBzdHJpbmcsIHNvcnRDb2x1bW5CeVN1bW1hcnk/OiBzdHJpbmcsIHNvcnRSb3dCeVN1bW1hcnk/OiBzdHJpbmcsIHRvdGFsPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RleHRzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dHModmFsdWU6IHsgY29sbGFwc2VBbGw/OiBzdHJpbmcsIGRhdGFOb3RBdmFpbGFibGU/OiBzdHJpbmcsIGV4cGFuZEFsbD86IHN0cmluZywgZXhwb3J0VG9FeGNlbD86IHN0cmluZywgZ3JhbmRUb3RhbD86IHN0cmluZywgbm9EYXRhPzogc3RyaW5nLCByZW1vdmVBbGxTb3J0aW5nPzogc3RyaW5nLCBzaG93RmllbGRDaG9vc2VyPzogc3RyaW5nLCBzb3J0Q29sdW1uQnlTdW1tYXJ5Pzogc3RyaW5nLCBzb3J0Um93QnlTdW1tYXJ5Pzogc3RyaW5nLCB0b3RhbD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0cycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgbG9uZyB0ZXh0IGluIGhlYWRlciBpdGVtcyBzaG91bGQgYmUgd3JhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB3b3JkV3JhcEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignd29yZFdyYXBFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd29yZFdyYXBFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhIHBpdm90IGdyaWQgY2VsbCBpcyBjbGlja2VkIG9yIHRhcHBlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBhIHBpdm90IGdyaWQgY2VsbCBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsUHJlcGFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHdpZGdldCdzIGNvbnRlbnQgaXMgcmVhZHkgYW5kIGVhY2ggdGltZSB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgY29udGV4dCBtZW51IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Db250ZXh0TWVudVByZXBhcmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgZGF0YSBpcyBleHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRXhwb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBkYXRhIGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSBhIGZpbGUgd2l0aCBleHBvcnRlZCBkYXRhIGlzIHNhdmVkIHRvIHRoZSB1c2VyJ3MgbG9jYWwgc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRmlsZVNhdmluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgaW4gSmF2YVNjcmlwdCBmcmFtZXdvcmtzIHRvIHNhdmUgdGhlIHdpZGdldCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgd2lkZ2V0IG9wdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbG93RXhwYW5kQWxsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dFeHBhbmRBbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbG93RmlsdGVyaW5nQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dGaWx0ZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFsbG93U29ydGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFsbG93U29ydGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dTb3J0aW5nQnlTdW1tYXJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhRmllbGRBcmVhQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YUZpZWxkQXJlYUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkYXRhU291cmNlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGF0YVNvdXJjZUNoYW5nZTogRXZlbnRFbWl0dGVyPERldkV4cHJlc3MuZGF0YS5QaXZvdEdyaWREYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLlBpdm90R3JpZERhdGFTb3VyY2VPcHRpb25zIHwgQXJyYXk8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50QXR0ckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGV4cG9ydENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGV4cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBpZ25vcmVFeGNlbEVycm9ycz86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmllbGRDaG9vc2VyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmllbGRDaG9vc2VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGFwcGx5Q2hhbmdlc01vZGU/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIGxheW91dD86IG51bWJlciB8IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGV4dHM/OiB7IGFsbEZpZWxkcz86IHN0cmluZywgY29sdW1uRmllbGRzPzogc3RyaW5nLCBkYXRhRmllbGRzPzogc3RyaW5nLCBmaWx0ZXJGaWVsZHM/OiBzdHJpbmcsIHJvd0ZpZWxkcz86IHN0cmluZyB9LCB0aXRsZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmaWVsZFBhbmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZmllbGRQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dGaWVsZERyYWdnaW5nPzogYm9vbGVhbiwgc2hvd0NvbHVtbkZpZWxkcz86IGJvb2xlYW4sIHNob3dEYXRhRmllbGRzPzogYm9vbGVhbiwgc2hvd0ZpbHRlckZpZWxkcz86IGJvb2xlYW4sIHNob3dSb3dGaWVsZHM/OiBib29sZWFuLCB0ZXh0cz86IHsgY29sdW1uRmllbGRBcmVhPzogc3RyaW5nLCBkYXRhRmllbGRBcmVhPzogc3RyaW5nLCBmaWx0ZXJGaWVsZEFyZWE/OiBzdHJpbmcsIHJvd0ZpZWxkQXJlYT86IHN0cmluZyB9LCB2aXNpYmxlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlYWRlckZpbHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlYWRlckZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHNob3dSZWxldmFudFZhbHVlcz86IGJvb2xlYW4sIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGlkZUVtcHR5U3VtbWFyeUNlbGxzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGlkZUVtcHR5U3VtbWFyeUNlbGxzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsb2FkUGFuZWxDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIGluZGljYXRvclNyYz86IHN0cmluZywgc2hvd0luZGljYXRvcj86IGJvb2xlYW4sIHNob3dQYW5lPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByb3dIZWFkZXJMYXlvdXRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByb3dIZWFkZXJMYXlvdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjcm9sbGluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgbW9kZT86IHN0cmluZywgdXNlTmF0aXZlPzogYm9vbGVhbiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dCb3JkZXJzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0JvcmRlcnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dDb2x1bW5HcmFuZFRvdGFsc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDb2x1bW5HcmFuZFRvdGFsc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0NvbHVtblRvdGFsc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dDb2x1bW5Ub3RhbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dSb3dHcmFuZFRvdGFsc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dHcmFuZFRvdGFsc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd1Jvd1RvdGFsc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dUb3RhbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dUb3RhbHNQcmlvckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dUb3RhbHNQcmlvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdGF0ZVN0b3JpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdGF0ZVN0b3JpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGN1c3RvbUxvYWQ/OiBGdW5jdGlvbiwgY3VzdG9tU2F2ZT86IEZ1bmN0aW9uLCBlbmFibGVkPzogYm9vbGVhbiwgc2F2aW5nVGltZW91dD86IG51bWJlciwgc3RvcmFnZUtleT86IHN0cmluZywgdHlwZT86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGV4dHNDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0c0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sbGFwc2VBbGw/OiBzdHJpbmcsIGRhdGFOb3RBdmFpbGFibGU/OiBzdHJpbmcsIGV4cGFuZEFsbD86IHN0cmluZywgZXhwb3J0VG9FeGNlbD86IHN0cmluZywgZ3JhbmRUb3RhbD86IHN0cmluZywgbm9EYXRhPzogc3RyaW5nLCByZW1vdmVBbGxTb3J0aW5nPzogc3RyaW5nLCBzaG93RmllbGRDaG9vc2VyPzogc3RyaW5nLCBzb3J0Q29sdW1uQnlTdW1tYXJ5Pzogc3RyaW5nLCBzb3J0Um93QnlTdW1tYXJ5Pzogc3RyaW5nLCB0b3RhbD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd29yZFdyYXBFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd29yZFdyYXBFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbENsaWNrJywgZW1pdDogJ29uQ2VsbENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxQcmVwYXJlZCcsIGVtaXQ6ICdvbkNlbGxQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGV4dE1lbnVQcmVwYXJpbmcnLCBlbWl0OiAnb25Db250ZXh0TWVudVByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWxsb3dFeHBhbmRBbGxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93RmlsdGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxvd1NvcnRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93U29ydGluZ0J5U3VtbWFyeUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YUZpZWxkQXJlYUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdleHBvcnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpZWxkQ2hvb3NlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmllbGRQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVhZGVyRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpZGVFbXB0eVN1bW1hcnlDZWxsc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbG9hZFBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3dIZWFkZXJMYXlvdXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0JvcmRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5HcmFuZFRvdGFsc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0NvbHVtblRvdGFsc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1Jvd0dyYW5kVG90YWxzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Um93VG90YWxzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93VG90YWxzUHJpb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXRlU3RvcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RleHRzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd29yZFdyYXBFbmFibGVkQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4UGl2b3RHcmlkKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0RhdGFTb3VyY2VNb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0hlYWRlckZpbHRlck1vZHVsZSxcclxuICAgIER4b1N0b3JlTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvRmllbGRDaG9vc2VyTW9kdWxlLFxyXG4gICAgRHhvVGV4dHNNb2R1bGUsXHJcbiAgICBEeG9GaWVsZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvTG9hZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsaW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFBpdm90R3JpZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhQaXZvdEdyaWRDb21wb25lbnQsXHJcbiAgICBEeG9EYXRhU291cmNlTW9kdWxlLFxyXG4gICAgRHhpRmllbGRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9IZWFkZXJGaWx0ZXJNb2R1bGUsXHJcbiAgICBEeG9TdG9yZU1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0ZpZWxkQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhvRmllbGRQYW5lbE1vZHVsZSxcclxuICAgIER4b0xvYWRQYW5lbE1vZHVsZSxcclxuICAgIER4b1Njcm9sbGluZ01vZHVsZSxcclxuICAgIER4b1N0YXRlU3RvcmluZ01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFBpdm90R3JpZE1vZHVsZSB7IH1cclxuIl19