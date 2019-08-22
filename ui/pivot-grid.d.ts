import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
 */
export declare class DxPivotGridComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPivotGrid;
    /**
     * Allows an end-user to expand/collapse all header items within a header level.
     */
    allowExpandAll: boolean;
    /**
     * Allows a user to filter fields by selecting or deselecting values in the popup menu.
     */
    allowFiltering: boolean;
    /**
     * Allows an end-user to change sorting options.
     */
    allowSorting: boolean;
    /**
     * Allows an end-user to sort columns by summary values.
     */
    allowSortingBySummary: boolean;
    /**
     * Specifies the area to which data field headers must belong.
     */
    dataFieldArea: string;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.PivotGridDataSource | DevExpress.data.PivotGridDataSourceOptions | Array<any>;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures client-side exporting.
     */
    export: {
        enabled?: boolean;
        fileName?: string;
        ignoreExcelErrors?: boolean;
        proxyUrl?: string;
    };
    /**
     * The Field Chooser configuration options.
     */
    fieldChooser: {
        allowSearch?: boolean;
        applyChangesMode?: string;
        enabled?: boolean;
        height?: number;
        layout?: number | string;
        searchTimeout?: number;
        texts?: {
            allFields?: string;
            columnFields?: string;
            dataFields?: string;
            filterFields?: string;
            rowFields?: string;
        };
        title?: string;
        width?: number;
    };
    /**
     * Configures the field panel.
     */
    fieldPanel: {
        allowFieldDragging?: boolean;
        showColumnFields?: boolean;
        showDataFields?: boolean;
        showFilterFields?: boolean;
        showRowFields?: boolean;
        texts?: {
            columnFieldArea?: string;
            dataFieldArea?: string;
            filterFieldArea?: string;
            rowFieldArea?: string;
        };
        visible?: boolean;
    };
    /**
     * Configures the header filter feature.
     */
    headerFilter: {
        allowSearch?: boolean;
        height?: number;
        searchTimeout?: number;
        showRelevantValues?: boolean;
        texts?: {
            cancel?: string;
            emptyValue?: string;
            ok?: string;
        };
        width?: number;
    };
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies whether or not to hide rows and columns with no data.
     */
    hideEmptySummaryCells: boolean;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies options configuring the load panel.
     */
    loadPanel: {
        enabled?: boolean;
        height?: number;
        indicatorSrc?: string;
        showIndicator?: boolean;
        showPane?: boolean;
        text?: string;
        width?: number;
    };
    /**
     * Specifies the layout of items in the row header.
     */
    rowHeaderLayout: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A configuration object specifying scrolling options.
     */
    scrolling: {
        mode?: string;
        useNative?: boolean;
    };
    /**
     * Specifies whether the outer borders of the grid are visible or not.
     */
    showBorders: boolean;
    /**
     * Specifies whether to display the Grand Total column.
     */
    showColumnGrandTotals: boolean;
    /**
     * Specifies whether to display the Total columns.
     */
    showColumnTotals: boolean;
    /**
     * Specifies whether to display the Grand Total row.
     */
    showRowGrandTotals: boolean;
    /**
     * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
     */
    showRowTotals: boolean;
    /**
     * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
     */
    showTotalsPrior: string;
    /**
     * A configuration object specifying options related to state storing.
     */
    stateStoring: {
        customLoad?: Function;
        customSave?: Function;
        enabled?: boolean;
        savingTimeout?: number;
        storageKey?: string;
        type?: string;
    };
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Strings that can be changed or localized in the PivotGrid widget.
     */
    texts: {
        collapseAll?: string;
        dataNotAvailable?: string;
        expandAll?: string;
        exportToExcel?: string;
        grandTotal?: string;
        noData?: string;
        removeAllSorting?: string;
        showFieldChooser?: string;
        sortColumnBySummary?: string;
        sortRowBySummary?: string;
        total?: string;
    };
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * Specifies whether long text in header items should be wrapped.
     */
    wordWrapEnabled: boolean;
    /**
     * A function that is executed when a pivot grid cell is clicked or tapped.
     */
    onCellClick: EventEmitter<any>;
    /**
     * A function that is executed after a pivot grid cell is created.
     */
    onCellPrepared: EventEmitter<any>;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed before the context menu is rendered.
     */
    onContextMenuPreparing: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function that is executed after data is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A function that is executed before data is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A function that is executed before a file with exported data is saved to the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the allowExpandAllChange event.
     */
    allowExpandAllChange: EventEmitter<boolean>;
    /**
     * A handler for the allowFilteringChange event.
     */
    allowFilteringChange: EventEmitter<boolean>;
    /**
     * A handler for the allowSortingChange event.
     */
    allowSortingChange: EventEmitter<boolean>;
    /**
     * A handler for the allowSortingBySummaryChange event.
     */
    allowSortingBySummaryChange: EventEmitter<boolean>;
    /**
     * A handler for the dataFieldAreaChange event.
     */
    dataFieldAreaChange: EventEmitter<string>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.PivotGridDataSource | DevExpress.data.PivotGridDataSourceOptions | Array<any>>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<{
        enabled?: boolean;
        fileName?: string;
        ignoreExcelErrors?: boolean;
        proxyUrl?: string;
    }>;
    /**
     * A handler for the fieldChooserChange event.
     */
    fieldChooserChange: EventEmitter<{
        allowSearch?: boolean;
        applyChangesMode?: string;
        enabled?: boolean;
        height?: number;
        layout?: number | string;
        searchTimeout?: number;
        texts?: {
            allFields?: string;
            columnFields?: string;
            dataFields?: string;
            filterFields?: string;
            rowFields?: string;
        };
        title?: string;
        width?: number;
    }>;
    /**
     * A handler for the fieldPanelChange event.
     */
    fieldPanelChange: EventEmitter<{
        allowFieldDragging?: boolean;
        showColumnFields?: boolean;
        showDataFields?: boolean;
        showFilterFields?: boolean;
        showRowFields?: boolean;
        texts?: {
            columnFieldArea?: string;
            dataFieldArea?: string;
            filterFieldArea?: string;
            rowFieldArea?: string;
        };
        visible?: boolean;
    }>;
    /**
     * A handler for the headerFilterChange event.
     */
    headerFilterChange: EventEmitter<{
        allowSearch?: boolean;
        height?: number;
        searchTimeout?: number;
        showRelevantValues?: boolean;
        texts?: {
            cancel?: string;
            emptyValue?: string;
            ok?: string;
        };
        width?: number;
    }>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hideEmptySummaryCellsChange event.
     */
    hideEmptySummaryCellsChange: EventEmitter<boolean>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the loadPanelChange event.
     */
    loadPanelChange: EventEmitter<{
        enabled?: boolean;
        height?: number;
        indicatorSrc?: string;
        showIndicator?: boolean;
        showPane?: boolean;
        text?: string;
        width?: number;
    }>;
    /**
     * A handler for the rowHeaderLayoutChange event.
     */
    rowHeaderLayoutChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollingChange event.
     */
    scrollingChange: EventEmitter<{
        mode?: string;
        useNative?: boolean;
    }>;
    /**
     * A handler for the showBordersChange event.
     */
    showBordersChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnGrandTotalsChange event.
     */
    showColumnGrandTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnTotalsChange event.
     */
    showColumnTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showRowGrandTotalsChange event.
     */
    showRowGrandTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showRowTotalsChange event.
     */
    showRowTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showTotalsPriorChange event.
     */
    showTotalsPriorChange: EventEmitter<string>;
    /**
     * A handler for the stateStoringChange event.
     */
    stateStoringChange: EventEmitter<{
        customLoad?: Function;
        customSave?: Function;
        enabled?: boolean;
        savingTimeout?: number;
        storageKey?: string;
        type?: string;
    }>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textsChange event.
     */
    textsChange: EventEmitter<{
        collapseAll?: string;
        dataNotAvailable?: string;
        expandAll?: string;
        exportToExcel?: string;
        grandTotal?: string;
        noData?: string;
        removeAllSorting?: string;
        showFieldChooser?: string;
        sortColumnBySummary?: string;
        sortRowBySummary?: string;
        total?: string;
    }>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the wordWrapEnabledChange event.
     */
    wordWrapEnabledChange: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxPivotGrid;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPivotGridModule {
}
