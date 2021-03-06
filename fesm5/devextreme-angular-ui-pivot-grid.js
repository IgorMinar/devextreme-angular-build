import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoDataSourceModule, DxiFieldModule, DxoFormatModule, DxoHeaderFilterModule, DxoStoreModule, DxoExportModule, DxoFieldChooserModule, DxoTextsModule, DxoFieldPanelModule, DxoLoadPanelModule, DxoScrollingModule, DxoStateStoringModule } from 'devextreme-angular/ui/nested';

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
/**
 * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
 */
var DxPivotGridComponent = /** @class */ (function (_super) {
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
        /**
         * Allows an end-user to expand/collapse all header items within a header level.
         */
        get: function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowFiltering", {
        /**
         * Allows a user to filter fields by selecting or deselecting values in the popup menu.
         */
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSorting", {
        /**
         * Allows an end-user to change sorting options.
         */
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSortingBySummary", {
        /**
         * Allows an end-user to sort columns by summary values.
         */
        get: function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataFieldArea", {
        /**
         * Specifies the area to which data field headers must belong.
         */
        get: function () {
            return this._getOption('dataFieldArea');
        },
        set: function (value) {
            this._setOption('dataFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "export", {
        /**
         * Configures client-side exporting.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldChooser", {
        /**
         * The Field Chooser configuration options.
         */
        get: function () {
            return this._getOption('fieldChooser');
        },
        set: function (value) {
            this._setOption('fieldChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldPanel", {
        /**
         * Configures the field panel.
         */
        get: function () {
            return this._getOption('fieldPanel');
        },
        set: function (value) {
            this._setOption('fieldPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "headerFilter", {
        /**
         * Configures the header filter feature.
         */
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hideEmptySummaryCells", {
        /**
         * Specifies whether or not to hide rows and columns with no data.
         */
        get: function () {
            return this._getOption('hideEmptySummaryCells');
        },
        set: function (value) {
            this._setOption('hideEmptySummaryCells', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "loadPanel", {
        /**
         * Specifies options configuring the load panel.
         */
        get: function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rowHeaderLayout", {
        /**
         * Specifies the layout of items in the row header.
         */
        get: function () {
            return this._getOption('rowHeaderLayout');
        },
        set: function (value) {
            this._setOption('rowHeaderLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "scrolling", {
        /**
         * A configuration object specifying scrolling options.
         */
        get: function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showBorders", {
        /**
         * Specifies whether the outer borders of the grid are visible or not.
         */
        get: function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnGrandTotals", {
        /**
         * Specifies whether to display the Grand Total column.
         */
        get: function () {
            return this._getOption('showColumnGrandTotals');
        },
        set: function (value) {
            this._setOption('showColumnGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnTotals", {
        /**
         * Specifies whether to display the Total columns.
         */
        get: function () {
            return this._getOption('showColumnTotals');
        },
        set: function (value) {
            this._setOption('showColumnTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowGrandTotals", {
        /**
         * Specifies whether to display the Grand Total row.
         */
        get: function () {
            return this._getOption('showRowGrandTotals');
        },
        set: function (value) {
            this._setOption('showRowGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowTotals", {
        /**
         * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
         */
        get: function () {
            return this._getOption('showRowTotals');
        },
        set: function (value) {
            this._setOption('showRowTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showTotalsPrior", {
        /**
         * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
         */
        get: function () {
            return this._getOption('showTotalsPrior');
        },
        set: function (value) {
            this._setOption('showTotalsPrior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "stateStoring", {
        /**
         * A configuration object specifying options related to state storing.
         */
        get: function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "texts", {
        /**
         * Strings that can be changed or localized in the PivotGrid widget.
         */
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "wordWrapEnabled", {
        /**
         * Specifies whether long text in header items should be wrapped.
         */
        get: function () {
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
    DxPivotGridComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "allowExpandAll", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "allowFiltering", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "allowSorting", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "allowSortingBySummary", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "dataFieldArea", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "export", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "fieldChooser", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "fieldPanel", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "headerFilter", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "hideEmptySummaryCells", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "loadPanel", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "rowHeaderLayout", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "scrolling", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "showBorders", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "showColumnGrandTotals", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "showColumnTotals", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "showRowGrandTotals", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "showRowTotals", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "showTotalsPrior", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "stateStoring", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "texts", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "width", null);
    __decorate([
        Input()
    ], DxPivotGridComponent.prototype, "wordWrapEnabled", null);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onCellClick", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onCellPrepared", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onContextMenuPreparing", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onExported", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onExporting", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onFileSaving", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "allowExpandAllChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "allowFilteringChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "allowSortingChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "allowSortingBySummaryChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "dataFieldAreaChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "exportChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "fieldChooserChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "fieldPanelChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "headerFilterChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "hideEmptySummaryCellsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "loadPanelChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "rowHeaderLayoutChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "scrollingChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "showBordersChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "showColumnGrandTotalsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "showColumnTotalsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "showRowGrandTotalsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "showRowTotalsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "showTotalsPriorChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "stateStoringChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "textsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridComponent.prototype, "wordWrapEnabledChange", void 0);
    DxPivotGridComponent = __decorate([
        Component({
            selector: 'dx-pivot-grid',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxPivotGridComponent);
    return DxPivotGridComponent;
}(DxComponent));
var DxPivotGridModule = /** @class */ (function () {
    function DxPivotGridModule() {
    }
    DxPivotGridModule = __decorate([
        NgModule({
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
        })
    ], DxPivotGridModule);
    return DxPivotGridModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxPivotGridComponent, DxPivotGridModule };
//# sourceMappingURL=devextreme-angular-ui-pivot-grid.js.map
