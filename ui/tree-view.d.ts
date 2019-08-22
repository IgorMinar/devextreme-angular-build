import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTreeView from 'devextreme/ui/tree_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The TreeView widget is a tree-like representation of textual data.
 */
export declare class DxTreeViewComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeView;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether or not to animate item collapsing and expanding.
     */
    animationEnabled: boolean;
    /**
     * Allows you to load nodes. Applies if the dataStructure is "plain" and the dataSource and items are undefined.
     */
    createChildren: Function;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
    /**
     * Notifies the widget of the used data structure.
     */
    dataStructure: string;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
     */
    disabledExpr: Function | string;
    /**
     * Specifies the data field whose values should be displayed.
     */
    displayExpr: Function | string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether or not a user can expand all tree view items by the "*" hot key.
     */
    expandAllEnabled: boolean;
    /**
     * Specifies which data source field specifies whether an item is expanded.
     */
    expandedExpr: Function | string;
    /**
     * Specifies the event on which to expand/collapse a node.
     */
    expandEvent: string;
    /**
     * Specifies whether or not all parent nodes of an initially expanded node are displayed expanded.
     */
    expandNodesRecursive: boolean;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding node includes child nodes.
     */
    hasItemsExpr: Function | string;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * The time period in milliseconds before the onItemHold event is raised.
     */
    itemHoldTimeout: number;
    /**
     * An array of items displayed by the widget.
     */
    items: Array<DevExpress.ui.dxTreeViewItem>;
    /**
     * Specifies which data field contains nested items.
     */
    itemsExpr: Function | string;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies which data field provides keys for TreeView items.
     */
    keyExpr: Function | string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies the name of the data source item field for holding the parent key of the corresponding node.
     */
    parentIdExpr: Function | string;
    /**
     * Specifies the parent ID value of the root item.
     */
    rootValue: any;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A string value specifying available scrolling directions.
     */
    scrollDirection: string;
    /**
     * Configures the search panel.
     */
    searchEditorOptions: DevExpress.ui.dxTextBoxOptions;
    /**
     * Specifies whether the search panel is visible.
     */
    searchEnabled: boolean;
    /**
     * Specifies a data object's field name or an expression whose value is compared to the search string.
     */
    searchExpr: Function | Array<Function>;
    /**
     * Specifies a comparison operation used to search widget items.
     */
    searchMode: string;
    /**
     * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
     */
    searchTimeout: number;
    /**
     * Specifies the current search string.
     */
    searchValue: string;
    /**
     * Specifies the text displayed at the "Select All" check box.
     */
    selectAllText: string;
    /**
     * Specifies whether or not an item becomes selected if a user clicks it.
     */
    selectByClick: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
     */
    selectedExpr: Function | string;
    /**
     * Specifies item selection mode.
     */
    selectionMode: string;
    /**
     * Specifies whether or not to select nodes recursively.
     */
    selectNodesRecursive: boolean;
    /**
     * Specifies the current check boxes display mode.
     */
    showCheckBoxesMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies if the virtual mode is enabled.
     */
    virtualModeEnabled: boolean;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed when a collection item is clicked or tapped.
     */
    onItemClick: EventEmitter<any>;
    /**
     * A function that is executed when a tree view item is collapsed.
     */
    onItemCollapsed: EventEmitter<any>;
    /**
     * A function that is executed when a collection item is right-clicked or pressed.
     */
    onItemContextMenu: EventEmitter<any>;
    /**
     * A function that is executed when a tree view item is expanded.
     */
    onItemExpanded: EventEmitter<any>;
    /**
     * A function that is executed when a collection item has been held for a specified period.
     */
    onItemHold: EventEmitter<any>;
    /**
     * A function that is executed after a collection item is rendered.
     */
    onItemRendered: EventEmitter<any>;
    /**
     * A function that is executed when a tree view item is selected or selection is canceled.
     */
    onItemSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when the "Select All" check box value is changed. Applies only if showCheckBoxesMode is "selectAll" and selectionMode is "multiple".
     */
    onSelectAllValueChanged: EventEmitter<any>;
    /**
     * A function that is executed when a tree view item is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the animationEnabledChange event.
     */
    animationEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the createChildrenChange event.
     */
    createChildrenChange: EventEmitter<Function>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>>;
    /**
     * A handler for the dataStructureChange event.
     */
    dataStructureChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledExprChange event.
     */
    disabledExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the displayExprChange event.
     */
    displayExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the expandAllEnabledChange event.
     */
    expandAllEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the expandedExprChange event.
     */
    expandedExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the expandEventChange event.
     */
    expandEventChange: EventEmitter<string>;
    /**
     * A handler for the expandNodesRecursiveChange event.
     */
    expandNodesRecursiveChange: EventEmitter<boolean>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the hasItemsExprChange event.
     */
    hasItemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the itemHoldTimeoutChange event.
     */
    itemHoldTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<DevExpress.ui.dxTreeViewItem>>;
    /**
     * A handler for the itemsExprChange event.
     */
    itemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the itemTemplateChange event.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * A handler for the keyExprChange event.
     */
    keyExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the parentIdExprChange event.
     */
    parentIdExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the rootValueChange event.
     */
    rootValueChange: EventEmitter<any>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollDirectionChange event.
     */
    scrollDirectionChange: EventEmitter<string>;
    /**
     * A handler for the searchEditorOptionsChange event.
     */
    searchEditorOptionsChange: EventEmitter<DevExpress.ui.dxTextBoxOptions>;
    /**
     * A handler for the searchEnabledChange event.
     */
    searchEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the searchExprChange event.
     */
    searchExprChange: EventEmitter<Function | Array<Function>>;
    /**
     * A handler for the searchModeChange event.
     */
    searchModeChange: EventEmitter<string>;
    /**
     * A handler for the searchTimeoutChange event.
     */
    searchTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the searchValueChange event.
     */
    searchValueChange: EventEmitter<string>;
    /**
     * A handler for the selectAllTextChange event.
     */
    selectAllTextChange: EventEmitter<string>;
    /**
     * A handler for the selectByClickChange event.
     */
    selectByClickChange: EventEmitter<boolean>;
    /**
     * A handler for the selectedExprChange event.
     */
    selectedExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the selectNodesRecursiveChange event.
     */
    selectNodesRecursiveChange: EventEmitter<boolean>;
    /**
     * A handler for the showCheckBoxesModeChange event.
     */
    showCheckBoxesModeChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the virtualModeEnabledChange event.
     */
    virtualModeEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxTreeView;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxTreeViewModule {
}
