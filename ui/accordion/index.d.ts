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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxAccordion from 'devextreme/ui/accordion';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
/**
 * The Accordion widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
 */
export declare class DxAccordionComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxAccordion;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * A number specifying the time in milliseconds spent on the animation of the expanding or collapsing of a panel.
     */
    animationDuration: number;
    /**
     * Specifies whether all items can be collapsed or whether at least one item must always be expanded.
     */
    collapsible: boolean;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
    /**
     * Specifies whether to render the panel's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
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
    items: Array<string | any | {
        disabled?: boolean;
        html?: string;
        icon?: string;
        template?: any;
        text?: string;
        title?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies a custom template for item titles.
     */
    itemTitleTemplate: any;
    /**
     * Specifies which data field provides keys for widget items.
     */
    keyExpr: Function | string;
    /**
     * Specifies whether the widget can expand several items or only a single item at once.
     */
    multiple: boolean;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies whether to repaint only those elements whose data changed.
     */
    repaintChangesOnly: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * The index number of the currently selected item.
     */
    selectedIndex: number;
    /**
     * The selected item object.
     */
    selectedItem: any;
    /**
     * Specifies an array of currently selected item keys.
     */
    selectedItemKeys: Array<any>;
    /**
     * An array of currently selected item objects.
     */
    selectedItems: Array<any>;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
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
     * A function that is executed when a collection item is right-clicked or pressed.
     */
    onItemContextMenu: EventEmitter<any>;
    /**
     * A function that is executed when a collection item has been held for a specified period.
     */
    onItemHold: EventEmitter<any>;
    /**
     * A function that is executed after a collection item is rendered.
     */
    onItemRendered: EventEmitter<any>;
    /**
     * A function that is executed when an accordion item's title is clicked or tapped.
     */
    onItemTitleClick: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a collection item is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    animationDurationChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    collapsibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hintChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemHoldTimeoutChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemsChange: EventEmitter<Array<string | any | {
        disabled?: boolean;
        html?: string;
        icon?: string;
        template?: any;
        text?: string;
        title?: string;
        visible?: boolean;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemTitleTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    keyExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    multipleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    repaintChangesOnlyChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedItemChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedItemKeysChange: EventEmitter<Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedItemsChange: EventEmitter<Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxAccordion;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxAccordionModule {
}
