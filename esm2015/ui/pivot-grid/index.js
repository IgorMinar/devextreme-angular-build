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
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxComponent, DxTemplateHost, DxIntegrationModule, DxTemplateModule, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxoDataSourceModule } from 'devextreme-angular/ui/nested';
import { DxiFieldModule } from 'devextreme-angular/ui/nested';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';
import { DxoHeaderFilterModule } from 'devextreme-angular/ui/nested';
import { DxoStoreModule } from 'devextreme-angular/ui/nested';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { DxoFieldChooserModule } from 'devextreme-angular/ui/nested';
import { DxoTextsModule } from 'devextreme-angular/ui/nested';
import { DxoFieldPanelModule } from 'devextreme-angular/ui/nested';
import { DxoLoadPanelModule } from 'devextreme-angular/ui/nested';
import { DxoScrollingModule } from 'devextreme-angular/ui/nested';
import { DxoStateStoringModule } from 'devextreme-angular/ui/nested';
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
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "allowExpandAll", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "allowFiltering", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "allowSorting", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "allowSortingBySummary", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "dataFieldArea", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "elementAttr", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "export", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "fieldChooser", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "fieldPanel", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "headerFilter", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "height", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "hideEmptySummaryCells", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "loadPanel", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "rowHeaderLayout", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "rtlEnabled", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "scrolling", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "showBorders", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "showColumnGrandTotals", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "showColumnTotals", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "showRowGrandTotals", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "showRowTotals", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "showTotalsPrior", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "stateStoring", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "tabIndex", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "texts", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "visible", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "width", null);
tslib_1.__decorate([
    Input()
], DxPivotGridComponent.prototype, "wordWrapEnabled", null);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onCellClick", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onCellPrepared", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onContentReady", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onContextMenuPreparing", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onDisposing", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onExported", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onExporting", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onFileSaving", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onInitialized", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "onOptionChanged", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "allowExpandAllChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "allowFilteringChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "allowSortingChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "allowSortingBySummaryChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "dataFieldAreaChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "dataSourceChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "disabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "elementAttrChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "exportChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "fieldChooserChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "fieldPanelChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "headerFilterChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "heightChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "hideEmptySummaryCellsChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "hintChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "loadPanelChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "rowHeaderLayoutChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "rtlEnabledChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "scrollingChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "showBordersChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "showColumnGrandTotalsChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "showColumnTotalsChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "showRowGrandTotalsChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "showRowTotalsChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "showTotalsPriorChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "stateStoringChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "tabIndexChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "textsChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "visibleChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "widthChange", void 0);
tslib_1.__decorate([
    Output()
], DxPivotGridComponent.prototype, "wordWrapEnabledChange", void 0);
DxPivotGridComponent = tslib_1.__decorate([
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
    tslib_1.__param(7, Inject(PLATFORM_ID))
], DxPivotGridComponent);
export { DxPivotGridComponent };
let DxPivotGridModule = class DxPivotGridModule {
};
DxPivotGridModule = tslib_1.__decorate([
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
export { DxPivotGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvcGl2b3QtZ3JpZC8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztBQUVILG9DQUFvQztBQUdwQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFHbkQsT0FBTyxFQUNILFdBQVcsRUFDWCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDaEIsTUFBTSx5QkFBeUIsQ0FBQztBQUVqQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFN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YztZQUNkLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtTQUMzQjtRQUNELFlBQVksRUFBRTtZQUNaLG9CQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsY0FBYztZQUNkLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csaUJBQWlCLENBQUk7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7IEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEluamVjdCxcclxuXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhQaXZvdEdyaWQgZnJvbSAnZGV2ZXh0cmVtZS91aS9waXZvdF9ncmlkJztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRHhDb21wb25lbnQsXHJcbiAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyLFxyXG4gICAgV2F0Y2hlckhlbHBlclxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IER4b0RhdGFTb3VyY2VNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhpRmllbGRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRm9ybWF0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0hlYWRlckZpbHRlck1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdG9yZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9FeHBvcnRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvRmllbGRDaG9vc2VyTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1RleHRzTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b0ZpZWxkUGFuZWxNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuaW1wb3J0IHsgRHhvTG9hZFBhbmVsTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZCc7XHJcbmltcG9ydCB7IER4b1Njcm9sbGluZ01vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9uZXN0ZWQnO1xyXG5pbXBvcnQgeyBEeG9TdGF0ZVN0b3JpbmdNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkJztcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBpdm90R3JpZCBpcyBhIHdpZGdldCB0aGF0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhbmQgYW5hbHl6ZSBtdWx0aS1kaW1lbnNpb25hbCBkYXRhIGZyb20gYSBsb2NhbCBzdG9yYWdlIG9yIGFuIE9MQVAgY3ViZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1waXZvdC1ncmlkJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgIFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhQaXZvdEdyaWRDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeFBpdm90R3JpZDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgYW4gZW5kLXVzZXIgdG8gZXhwYW5kL2NvbGxhcHNlIGFsbCBoZWFkZXIgaXRlbXMgd2l0aGluIGEgaGVhZGVyIGxldmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RXhwYW5kQWxsJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RXhwYW5kQWxsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBhIHVzZXIgdG8gZmlsdGVyIGZpZWxkcyBieSBzZWxlY3Rpbmcgb3IgZGVzZWxlY3RpbmcgdmFsdWVzIGluIHRoZSBwb3B1cCBtZW51LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93RmlsdGVyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FsbG93RmlsdGVyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxsb3dGaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93RmlsdGVyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBhbiBlbmQtdXNlciB0byBjaGFuZ2Ugc29ydGluZyBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93U29ydGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd1NvcnRpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1NvcnRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93U29ydGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgYW4gZW5kLXVzZXIgdG8gc29ydCBjb2x1bW5zIGJ5IHN1bW1hcnkgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsbG93U29ydGluZ0J5U3VtbWFyeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbGxvd1NvcnRpbmdCeVN1bW1hcnknKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd1NvcnRpbmdCeVN1bW1hcnkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FsbG93U29ydGluZ0J5U3VtbWFyeScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGFyZWEgdG8gd2hpY2ggZGF0YSBmaWVsZCBoZWFkZXJzIG11c3QgYmVsb25nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFGaWVsZEFyZWEoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkYXRhRmllbGRBcmVhJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YUZpZWxkQXJlYSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkYXRhRmllbGRBcmVhJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIHRoZSB3aWRnZXQgdG8gZGF0YS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhU291cmNlKCk6IERldkV4cHJlc3MuZGF0YS5QaXZvdEdyaWREYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLlBpdm90R3JpZERhdGFTb3VyY2VPcHRpb25zIHwgQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5QaXZvdEdyaWREYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLlBpdm90R3JpZERhdGFTb3VyY2VPcHRpb25zIHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVNvdXJjZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IHJlc3BvbmRzIHRvIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB3aWRnZXQncyByb290IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZWxlbWVudEF0dHIoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdlbGVtZW50QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVsZW1lbnRBdHRyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VsZW1lbnRBdHRyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY2xpZW50LXNpZGUgZXhwb3J0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cG9ydCgpOiB7IGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgaWdub3JlRXhjZWxFcnJvcnM/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdleHBvcnQnKTtcclxuICAgIH1cclxuICAgIHNldCBleHBvcnQodmFsdWU6IHsgZW5hYmxlZD86IGJvb2xlYW4sIGZpbGVOYW1lPzogc3RyaW5nLCBpZ25vcmVFeGNlbEVycm9ycz86IGJvb2xlYW4sIHByb3h5VXJsPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2V4cG9ydCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgRmllbGQgQ2hvb3NlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmllbGRDaG9vc2VyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBhcHBseUNoYW5nZXNNb2RlPzogc3RyaW5nLCBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBsYXlvdXQ/OiBudW1iZXIgfCBzdHJpbmcsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHRleHRzPzogeyBhbGxGaWVsZHM/OiBzdHJpbmcsIGNvbHVtbkZpZWxkcz86IHN0cmluZywgZGF0YUZpZWxkcz86IHN0cmluZywgZmlsdGVyRmllbGRzPzogc3RyaW5nLCByb3dGaWVsZHM/OiBzdHJpbmcgfSwgdGl0bGU/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkQ2hvb3NlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkQ2hvb3Nlcih2YWx1ZTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGFwcGx5Q2hhbmdlc01vZGU/OiBzdHJpbmcsIGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIGxheW91dD86IG51bWJlciB8IHN0cmluZywgc2VhcmNoVGltZW91dD86IG51bWJlciwgdGV4dHM/OiB7IGFsbEZpZWxkcz86IHN0cmluZywgY29sdW1uRmllbGRzPzogc3RyaW5nLCBkYXRhRmllbGRzPzogc3RyaW5nLCBmaWx0ZXJGaWVsZHM/OiBzdHJpbmcsIHJvd0ZpZWxkcz86IHN0cmluZyB9LCB0aXRsZT86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRDaG9vc2VyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGZpZWxkIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZpZWxkUGFuZWwoKTogeyBhbGxvd0ZpZWxkRHJhZ2dpbmc/OiBib29sZWFuLCBzaG93Q29sdW1uRmllbGRzPzogYm9vbGVhbiwgc2hvd0RhdGFGaWVsZHM/OiBib29sZWFuLCBzaG93RmlsdGVyRmllbGRzPzogYm9vbGVhbiwgc2hvd1Jvd0ZpZWxkcz86IGJvb2xlYW4sIHRleHRzPzogeyBjb2x1bW5GaWVsZEFyZWE/OiBzdHJpbmcsIGRhdGFGaWVsZEFyZWE/OiBzdHJpbmcsIGZpbHRlckZpZWxkQXJlYT86IHN0cmluZywgcm93RmllbGRBcmVhPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZpZWxkUGFuZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBmaWVsZFBhbmVsKHZhbHVlOiB7IGFsbG93RmllbGREcmFnZ2luZz86IGJvb2xlYW4sIHNob3dDb2x1bW5GaWVsZHM/OiBib29sZWFuLCBzaG93RGF0YUZpZWxkcz86IGJvb2xlYW4sIHNob3dGaWx0ZXJGaWVsZHM/OiBib29sZWFuLCBzaG93Um93RmllbGRzPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNvbHVtbkZpZWxkQXJlYT86IHN0cmluZywgZGF0YUZpZWxkQXJlYT86IHN0cmluZywgZmlsdGVyRmllbGRBcmVhPzogc3RyaW5nLCByb3dGaWVsZEFyZWE/OiBzdHJpbmcgfSwgdmlzaWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBoZWFkZXIgZmlsdGVyIGZlYXR1cmUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGVhZGVyRmlsdGVyKCk6IHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHNob3dSZWxldmFudFZhbHVlcz86IGJvb2xlYW4sIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlYWRlckZpbHRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlYWRlckZpbHRlcih2YWx1ZTogeyBhbGxvd1NlYXJjaD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgc2VhcmNoVGltZW91dD86IG51bWJlciwgc2hvd1JlbGV2YW50VmFsdWVzPzogYm9vbGVhbiwgdGV4dHM/OiB7IGNhbmNlbD86IHN0cmluZywgZW1wdHlWYWx1ZT86IHN0cmluZywgb2s/OiBzdHJpbmcgfSwgd2lkdGg/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVhZGVyRmlsdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBoaWRlIHJvd3MgYW5kIGNvbHVtbnMgd2l0aCBubyBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpZGVFbXB0eVN1bW1hcnlDZWxscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaWRlRW1wdHlTdW1tYXJ5Q2VsbHMnKTtcclxuICAgIH1cclxuICAgIHNldCBoaWRlRW1wdHlTdW1tYXJ5Q2VsbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hpZGVFbXB0eVN1bW1hcnlDZWxscycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgb3B0aW9ucyBjb25maWd1cmluZyB0aGUgbG9hZCBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2FkUGFuZWwoKTogeyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xvYWRQYW5lbCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvYWRQYW5lbCh2YWx1ZTogeyBlbmFibGVkPzogYm9vbGVhbiwgaGVpZ2h0PzogbnVtYmVyLCBpbmRpY2F0b3JTcmM/OiBzdHJpbmcsIHNob3dJbmRpY2F0b3I/OiBib29sZWFuLCBzaG93UGFuZT86IGJvb2xlYW4sIHRleHQ/OiBzdHJpbmcsIHdpZHRoPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2xvYWRQYW5lbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxheW91dCBvZiBpdGVtcyBpbiB0aGUgcm93IGhlYWRlci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByb3dIZWFkZXJMYXlvdXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3dIZWFkZXJMYXlvdXQnKTtcclxuICAgIH1cclxuICAgIHNldCByb3dIZWFkZXJMYXlvdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncm93SGVhZGVyTGF5b3V0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaGVzIHRoZSB3aWRnZXQgdG8gYSByaWdodC10by1sZWZ0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJ0bEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncnRsRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJ0bEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3J0bEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBjb25maWd1cmF0aW9uIG9iamVjdCBzcGVjaWZ5aW5nIHNjcm9sbGluZyBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNjcm9sbGluZygpOiB7IG1vZGU/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2Nyb2xsaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsaW5nKHZhbHVlOiB7IG1vZGU/OiBzdHJpbmcsIHVzZU5hdGl2ZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Nyb2xsaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBvdXRlciBib3JkZXJzIG9mIHRoZSBncmlkIGFyZSB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Qm9yZGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Qm9yZGVycycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dCb3JkZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Qm9yZGVycycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBHcmFuZCBUb3RhbCBjb2x1bW4uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0NvbHVtbkdyYW5kVG90YWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dDb2x1bW5HcmFuZFRvdGFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDb2x1bW5HcmFuZFRvdGFscyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0NvbHVtbkdyYW5kVG90YWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIFRvdGFsIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0NvbHVtblRvdGFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaG93Q29sdW1uVG90YWxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NvbHVtblRvdGFscyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd0NvbHVtblRvdGFscycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBHcmFuZCBUb3RhbCByb3cuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd1Jvd0dyYW5kVG90YWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dSb3dHcmFuZFRvdGFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dSb3dHcmFuZFRvdGFscyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd1Jvd0dyYW5kVG90YWxzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIFRvdGFsIHJvd3MuIEFwcGxpZXMgb25seSBpZiByb3dIZWFkZXJMYXlvdXQgaXMgXCJzdGFuZGFyZFwiLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dSb3dUb3RhbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1Jvd1RvdGFscycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dSb3dUb3RhbHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dSb3dUb3RhbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXJlIHRvIHNob3cgdGhlIHRvdGFsIHJvd3Mgb3IgY29sdW1ucy4gQXBwbGllcyBvbmx5IGlmIHJvd0hlYWRlckxheW91dCBpcyBcInN0YW5kYXJkXCIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd1RvdGFsc1ByaW9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1RvdGFsc1ByaW9yJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd1RvdGFsc1ByaW9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dUb3RhbHNQcmlvcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucyByZWxhdGVkIHRvIHN0YXRlIHN0b3JpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhdGVTdG9yaW5nKCk6IHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3N0YXRlU3RvcmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlU3RvcmluZyh2YWx1ZTogeyBjdXN0b21Mb2FkPzogRnVuY3Rpb24sIGN1c3RvbVNhdmU/OiBGdW5jdGlvbiwgZW5hYmxlZD86IGJvb2xlYW4sIHNhdmluZ1RpbWVvdXQ/OiBudW1iZXIsIHN0b3JhZ2VLZXk/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc3RhdGVTdG9yaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5ncyB0aGF0IGNhbiBiZSBjaGFuZ2VkIG9yIGxvY2FsaXplZCBpbiB0aGUgUGl2b3RHcmlkIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0ZXh0cygpOiB7IGNvbGxhcHNlQWxsPzogc3RyaW5nLCBkYXRhTm90QXZhaWxhYmxlPzogc3RyaW5nLCBleHBhbmRBbGw/OiBzdHJpbmcsIGV4cG9ydFRvRXhjZWw/OiBzdHJpbmcsIGdyYW5kVG90YWw/OiBzdHJpbmcsIG5vRGF0YT86IHN0cmluZywgcmVtb3ZlQWxsU29ydGluZz86IHN0cmluZywgc2hvd0ZpZWxkQ2hvb3Nlcj86IHN0cmluZywgc29ydENvbHVtbkJ5U3VtbWFyeT86IHN0cmluZywgc29ydFJvd0J5U3VtbWFyeT86IHN0cmluZywgdG90YWw/OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGV4dHMnKTtcclxuICAgIH1cclxuICAgIHNldCB0ZXh0cyh2YWx1ZTogeyBjb2xsYXBzZUFsbD86IHN0cmluZywgZGF0YU5vdEF2YWlsYWJsZT86IHN0cmluZywgZXhwYW5kQWxsPzogc3RyaW5nLCBleHBvcnRUb0V4Y2VsPzogc3RyaW5nLCBncmFuZFRvdGFsPzogc3RyaW5nLCBub0RhdGE/OiBzdHJpbmcsIHJlbW92ZUFsbFNvcnRpbmc/OiBzdHJpbmcsIHNob3dGaWVsZENob29zZXI/OiBzdHJpbmcsIHNvcnRDb2x1bW5CeVN1bW1hcnk/OiBzdHJpbmcsIHNvcnRSb3dCeVN1bW1hcnk/OiBzdHJpbmcsIHRvdGFsPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RleHRzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgdmlzaWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2aXNpYmxlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBsb25nIHRleHQgaW4gaGVhZGVyIGl0ZW1zIHNob3VsZCBiZSB3cmFwcGVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdvcmRXcmFwRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3b3JkV3JhcEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCB3b3JkV3JhcEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3dvcmRXcmFwRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgcGl2b3QgZ3JpZCBjZWxsIGlzIGNsaWNrZWQgb3IgdGFwcGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgcGl2b3QgZ3JpZCBjZWxsIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNlbGxQcmVwYXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBjb250ZXh0IG1lbnUgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51UHJlcGFyaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBhZnRlciBkYXRhIGlzIGV4cG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25FeHBvcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGRhdGEgaXMgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkV4cG9ydGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGEgZmlsZSB3aXRoIGV4cG9ydGVkIGRhdGEgaXMgc2F2ZWQgdG8gdGhlIHVzZXIncyBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25GaWxlU2F2aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFsbG93RXhwYW5kQWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxsb3dGaWx0ZXJpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd1NvcnRpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbGxvd1NvcnRpbmdCeVN1bW1hcnlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhRmllbGRBcmVhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLlBpdm90R3JpZERhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuUGl2b3RHcmlkRGF0YVNvdXJjZU9wdGlvbnMgfCBBcnJheTxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGVsZW1lbnRBdHRyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBleHBvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBmaWxlTmFtZT86IHN0cmluZywgaWdub3JlRXhjZWxFcnJvcnM/OiBib29sZWFuLCBwcm94eVVybD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWVsZENob29zZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFsbG93U2VhcmNoPzogYm9vbGVhbiwgYXBwbHlDaGFuZ2VzTW9kZT86IHN0cmluZywgZW5hYmxlZD86IGJvb2xlYW4sIGhlaWdodD86IG51bWJlciwgbGF5b3V0PzogbnVtYmVyIHwgc3RyaW5nLCBzZWFyY2hUaW1lb3V0PzogbnVtYmVyLCB0ZXh0cz86IHsgYWxsRmllbGRzPzogc3RyaW5nLCBjb2x1bW5GaWVsZHM/OiBzdHJpbmcsIGRhdGFGaWVsZHM/OiBzdHJpbmcsIGZpbHRlckZpZWxkcz86IHN0cmluZywgcm93RmllbGRzPzogc3RyaW5nIH0sIHRpdGxlPzogc3RyaW5nLCB3aWR0aD86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmaWVsZFBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBhbGxvd0ZpZWxkRHJhZ2dpbmc/OiBib29sZWFuLCBzaG93Q29sdW1uRmllbGRzPzogYm9vbGVhbiwgc2hvd0RhdGFGaWVsZHM/OiBib29sZWFuLCBzaG93RmlsdGVyRmllbGRzPzogYm9vbGVhbiwgc2hvd1Jvd0ZpZWxkcz86IGJvb2xlYW4sIHRleHRzPzogeyBjb2x1bW5GaWVsZEFyZWE/OiBzdHJpbmcsIGRhdGFGaWVsZEFyZWE/OiBzdHJpbmcsIGZpbHRlckZpZWxkQXJlYT86IHN0cmluZywgcm93RmllbGRBcmVhPzogc3RyaW5nIH0sIHZpc2libGU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlYWRlckZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgYWxsb3dTZWFyY2g/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIHNlYXJjaFRpbWVvdXQ/OiBudW1iZXIsIHNob3dSZWxldmFudFZhbHVlcz86IGJvb2xlYW4sIHRleHRzPzogeyBjYW5jZWw/OiBzdHJpbmcsIGVtcHR5VmFsdWU/OiBzdHJpbmcsIG9rPzogc3RyaW5nIH0sIHdpZHRoPzogbnVtYmVyIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaWRlRW1wdHlTdW1tYXJ5Q2VsbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkUGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGVuYWJsZWQ/OiBib29sZWFuLCBoZWlnaHQ/OiBudW1iZXIsIGluZGljYXRvclNyYz86IHN0cmluZywgc2hvd0luZGljYXRvcj86IGJvb2xlYW4sIHNob3dQYW5lPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZywgd2lkdGg/OiBudW1iZXIgfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcm93SGVhZGVyTGF5b3V0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBtb2RlPzogc3RyaW5nLCB1c2VOYXRpdmU/OiBib29sZWFuIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dCb3JkZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NvbHVtbkdyYW5kVG90YWxzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NvbHVtblRvdGFsc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dHcmFuZFRvdGFsc0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dSb3dUb3RhbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93VG90YWxzUHJpb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0YXRlU3RvcmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgY3VzdG9tTG9hZD86IEZ1bmN0aW9uLCBjdXN0b21TYXZlPzogRnVuY3Rpb24sIGVuYWJsZWQ/OiBib29sZWFuLCBzYXZpbmdUaW1lb3V0PzogbnVtYmVyLCBzdG9yYWdlS2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZW1iZXIgc3VwcG9ydHMgdGhlIGludGVybmFsIGluZnJhc3RydWN0dXJlIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBkaXJlY3RseSBmcm9tIHlvdXIgY29kZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRhYkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0c0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29sbGFwc2VBbGw/OiBzdHJpbmcsIGRhdGFOb3RBdmFpbGFibGU/OiBzdHJpbmcsIGV4cGFuZEFsbD86IHN0cmluZywgZXhwb3J0VG9FeGNlbD86IHN0cmluZywgZ3JhbmRUb3RhbD86IHN0cmluZywgbm9EYXRhPzogc3RyaW5nLCByZW1vdmVBbGxTb3J0aW5nPzogc3RyaW5nLCBzaG93RmllbGRDaG9vc2VyPzogc3RyaW5nLCBzb3J0Q29sdW1uQnlTdW1tYXJ5Pzogc3RyaW5nLCBzb3J0Um93QnlTdW1tYXJ5Pzogc3RyaW5nLCB0b3RhbD86IHN0cmluZyB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd29yZFdyYXBFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY2VsbENsaWNrJywgZW1pdDogJ29uQ2VsbENsaWNrJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2NlbGxQcmVwYXJlZCcsIGVtaXQ6ICdvbkNlbGxQcmVwYXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjb250ZW50UmVhZHknLCBlbWl0OiAnb25Db250ZW50UmVhZHknIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGV4dE1lbnVQcmVwYXJpbmcnLCBlbWl0OiAnb25Db250ZXh0TWVudVByZXBhcmluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdkaXNwb3NpbmcnLCBlbWl0OiAnb25EaXNwb3NpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZXhwb3J0ZWQnLCBlbWl0OiAnb25FeHBvcnRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdleHBvcnRpbmcnLCBlbWl0OiAnb25FeHBvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnZmlsZVNhdmluZycsIGVtaXQ6ICdvbkZpbGVTYXZpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnaW5pdGlhbGl6ZWQnLCBlbWl0OiAnb25Jbml0aWFsaXplZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcHRpb25DaGFuZ2VkJywgZW1pdDogJ29uT3B0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWxsb3dFeHBhbmRBbGxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93RmlsdGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGxvd1NvcnRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsbG93U29ydGluZ0J5U3VtbWFyeUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YUZpZWxkQXJlYUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGF0YVNvdXJjZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdleHBvcnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpZWxkQ2hvb3NlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZmllbGRQYW5lbENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGVhZGVyRmlsdGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpZGVFbXB0eVN1bW1hcnlDZWxsc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbG9hZFBhbmVsQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyb3dIZWFkZXJMYXlvdXRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbGluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0JvcmRlcnNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2x1bW5HcmFuZFRvdGFsc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0NvbHVtblRvdGFsc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd1Jvd0dyYW5kVG90YWxzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93Um93VG90YWxzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzaG93VG90YWxzUHJpb3JDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3N0YXRlU3RvcmluZ0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RleHRzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd29yZFdyYXBFbmFibGVkQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4UGl2b3RHcmlkKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENoYW5nZXMocHJvcDogc3RyaW5nLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKCEocHJvcCBpbiB0aGlzLl9vcHRpb25zVG9VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkaC5zZXR1cChwcm9wLCBjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2lkaC5kb0NoZWNrKCdkYXRhU291cmNlJyk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hlckhlbHBlci5jaGVja1dhdGNoZXJzKCk7XHJcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuY2xlYXJDaGFuZ2VkT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRPcHRpb24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGlzU2V0dXAgPSB0aGlzLl9pZGguc2V0dXBTaW5nbGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0NoYW5nZWQgPSB0aGlzLl9pZGguZ2V0Q2hhbmdlcyhuYW1lLCB2YWx1ZSkgIT09IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc1NldHVwIHx8IGlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICBzdXBlci5fc2V0T3B0aW9uKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0RhdGFTb3VyY2VNb2R1bGUsXHJcbiAgICBEeGlGaWVsZE1vZHVsZSxcclxuICAgIER4b0Zvcm1hdE1vZHVsZSxcclxuICAgIER4b0hlYWRlckZpbHRlck1vZHVsZSxcclxuICAgIER4b1N0b3JlTW9kdWxlLFxyXG4gICAgRHhvRXhwb3J0TW9kdWxlLFxyXG4gICAgRHhvRmllbGRDaG9vc2VyTW9kdWxlLFxyXG4gICAgRHhvVGV4dHNNb2R1bGUsXHJcbiAgICBEeG9GaWVsZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvTG9hZFBhbmVsTW9kdWxlLFxyXG4gICAgRHhvU2Nyb2xsaW5nTW9kdWxlLFxyXG4gICAgRHhvU3RhdGVTdG9yaW5nTW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeFBpdm90R3JpZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhQaXZvdEdyaWRDb21wb25lbnQsXHJcbiAgICBEeG9EYXRhU291cmNlTW9kdWxlLFxyXG4gICAgRHhpRmllbGRNb2R1bGUsXHJcbiAgICBEeG9Gb3JtYXRNb2R1bGUsXHJcbiAgICBEeG9IZWFkZXJGaWx0ZXJNb2R1bGUsXHJcbiAgICBEeG9TdG9yZU1vZHVsZSxcclxuICAgIER4b0V4cG9ydE1vZHVsZSxcclxuICAgIER4b0ZpZWxkQ2hvb3Nlck1vZHVsZSxcclxuICAgIER4b1RleHRzTW9kdWxlLFxyXG4gICAgRHhvRmllbGRQYW5lbE1vZHVsZSxcclxuICAgIER4b0xvYWRQYW5lbE1vZHVsZSxcclxuICAgIER4b1Njcm9sbGluZ01vZHVsZSxcclxuICAgIER4b1N0YXRlU3RvcmluZ01vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFBpdm90R3JpZE1vZHVsZSB7IH1cclxuIl19