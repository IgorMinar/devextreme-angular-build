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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxNavBar from 'devextreme/ui/nav_bar';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The NavBar is a widget that navigates the application views.
 */
export declare class DxNavBarComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxNavBar;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
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
        badge?: string;
        disabled?: boolean;
        html?: string;
        icon?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies which data field provides keys for widget items.
     */
    keyExpr: Function | string;
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
     * Specifies whether or not an end-user can scroll tabs by swiping.
     */
    scrollByContent: boolean;
    /**
     * The index of the currently selected widget item.
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
    selectedItems: Array<string | number | any>;
    /**
     * Specifies whether the widget enables an end-user to select only a single item or multiple items.
     */
    selectionMode: string;
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
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a collection item is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
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
    itemsChange: EventEmitter<Array<string | any | {
        badge?: string;
        disabled?: boolean;
        html?: string;
        icon?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
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
     * A handler for the repaintChangesOnlyChange event.
     */
    repaintChangesOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollByContentChange event.
     */
    scrollByContentChange: EventEmitter<boolean>;
    /**
     * A handler for the selectedIndexChange event.
     */
    selectedIndexChange: EventEmitter<number>;
    /**
     * A handler for the selectedItemChange event.
     */
    selectedItemChange: EventEmitter<any>;
    /**
     * A handler for the selectedItemKeysChange event.
     */
    selectedItemKeysChange: EventEmitter<Array<any>>;
    /**
     * A handler for the selectedItemsChange event.
     */
    selectedItemsChange: EventEmitter<Array<string | number | any>>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
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
    protected _createInstance(element: any, options: any): DxNavBar;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxNavBarModule {
}
