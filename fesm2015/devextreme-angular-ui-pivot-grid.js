import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxPivotGridComponent = class DxPivotGridComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Allows an end-user to expand/collapse all header items within a header level.
     */
    get allowExpandAll() {
        return this._getOption('allowExpandAll');
    }
    set allowExpandAll(value) {
        this._setOption('allowExpandAll', value);
    }
    /**
     * Allows a user to filter fields by selecting or deselecting values in the popup menu.
     */
    get allowFiltering() {
        return this._getOption('allowFiltering');
    }
    set allowFiltering(value) {
        this._setOption('allowFiltering', value);
    }
    /**
     * Allows an end-user to change sorting options.
     */
    get allowSorting() {
        return this._getOption('allowSorting');
    }
    set allowSorting(value) {
        this._setOption('allowSorting', value);
    }
    /**
     * Allows an end-user to sort columns by summary values.
     */
    get allowSortingBySummary() {
        return this._getOption('allowSortingBySummary');
    }
    set allowSortingBySummary(value) {
        this._setOption('allowSortingBySummary', value);
    }
    /**
     * Specifies the area to which data field headers must belong.
     */
    get dataFieldArea() {
        return this._getOption('dataFieldArea');
    }
    set dataFieldArea(value) {
        this._setOption('dataFieldArea', value);
    }
    /**
     * Binds the widget to data.
     */
    get dataSource() {
        return this._getOption('dataSource');
    }
    set dataSource(value) {
        this._setOption('dataSource', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /**
     * Configures client-side exporting.
     */
    get export() {
        return this._getOption('export');
    }
    set export(value) {
        this._setOption('export', value);
    }
    /**
     * The Field Chooser configuration options.
     */
    get fieldChooser() {
        return this._getOption('fieldChooser');
    }
    set fieldChooser(value) {
        this._setOption('fieldChooser', value);
    }
    /**
     * Configures the field panel.
     */
    get fieldPanel() {
        return this._getOption('fieldPanel');
    }
    set fieldPanel(value) {
        this._setOption('fieldPanel', value);
    }
    /**
     * Configures the header filter feature.
     */
    get headerFilter() {
        return this._getOption('headerFilter');
    }
    set headerFilter(value) {
        this._setOption('headerFilter', value);
    }
    /**
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies whether or not to hide rows and columns with no data.
     */
    get hideEmptySummaryCells() {
        return this._getOption('hideEmptySummaryCells');
    }
    set hideEmptySummaryCells(value) {
        this._setOption('hideEmptySummaryCells', value);
    }
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies options configuring the load panel.
     */
    get loadPanel() {
        return this._getOption('loadPanel');
    }
    set loadPanel(value) {
        this._setOption('loadPanel', value);
    }
    /**
     * Specifies the layout of items in the row header.
     */
    get rowHeaderLayout() {
        return this._getOption('rowHeaderLayout');
    }
    set rowHeaderLayout(value) {
        this._setOption('rowHeaderLayout', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * A configuration object specifying scrolling options.
     */
    get scrolling() {
        return this._getOption('scrolling');
    }
    set scrolling(value) {
        this._setOption('scrolling', value);
    }
    /**
     * Specifies whether the outer borders of the grid are visible or not.
     */
    get showBorders() {
        return this._getOption('showBorders');
    }
    set showBorders(value) {
        this._setOption('showBorders', value);
    }
    /**
     * Specifies whether to display the Grand Total column.
     */
    get showColumnGrandTotals() {
        return this._getOption('showColumnGrandTotals');
    }
    set showColumnGrandTotals(value) {
        this._setOption('showColumnGrandTotals', value);
    }
    /**
     * Specifies whether to display the Total columns.
     */
    get showColumnTotals() {
        return this._getOption('showColumnTotals');
    }
    set showColumnTotals(value) {
        this._setOption('showColumnTotals', value);
    }
    /**
     * Specifies whether to display the Grand Total row.
     */
    get showRowGrandTotals() {
        return this._getOption('showRowGrandTotals');
    }
    set showRowGrandTotals(value) {
        this._setOption('showRowGrandTotals', value);
    }
    /**
     * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
     */
    get showRowTotals() {
        return this._getOption('showRowTotals');
    }
    set showRowTotals(value) {
        this._setOption('showRowTotals', value);
    }
    /**
     * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
     */
    get showTotalsPrior() {
        return this._getOption('showTotalsPrior');
    }
    set showTotalsPrior(value) {
        this._setOption('showTotalsPrior', value);
    }
    /**
     * A configuration object specifying options related to state storing.
     */
    get stateStoring() {
        return this._getOption('stateStoring');
    }
    set stateStoring(value) {
        this._setOption('stateStoring', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Strings that can be changed or localized in the PivotGrid widget.
     */
    get texts() {
        return this._getOption('texts');
    }
    set texts(value) {
        this._setOption('texts', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /**
     * Specifies the widget's width.
     */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    /**
     * Specifies whether long text in header items should be wrapped.
     */
    get wordWrapEnabled() {
        return this._getOption('wordWrapEnabled');
    }
    set wordWrapEnabled(value) {
        this._setOption('wordWrapEnabled', value);
    }
    _createInstance(element, options) {
        return new DxPivotGrid(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }
    _setOption(name, value) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
};
DxPivotGridComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DxTemplateHost },
    { type: WatcherHelper },
    { type: IterableDifferHelper },
    { type: NestedOptionHost },
    { type: TransferState },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
let DxPivotGridModule = class DxPivotGridModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxPivotGridComponent, DxPivotGridModule };
//# sourceMappingURL=devextreme-angular-ui-pivot-grid.js.map
