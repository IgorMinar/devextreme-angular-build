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
import DxContextMenu from 'devextreme/ui/context_menu';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
/**
 * The ContextMenu widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
 */
export declare class DxContextMenuComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxContextMenu;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    animation: {
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    };
    /**
     * Specifies whether to close the ContextMenu if a user clicks outside it.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
     */
    cssClass: string;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
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
     * Holds an array of menu items.
     */
    items: Array<DevExpress.ui.dxContextMenuItem>;
    /**
     * Specifies which data field contains nested items.
     */
    itemsExpr: Function | string;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * An object defining widget positioning options.
     */
    position: DevExpress.positionConfig;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether or not an item becomes selected if a user clicks it.
     */
    selectByClick: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
     */
    selectedExpr: Function | string;
    /**
     * The selected item object.
     */
    selectedItem: any;
    /**
     * Specifies the selection mode supported by the menu.
     */
    selectionMode: string;
    /**
     * Specifies options for displaying the widget.
     */
    showEvent: string | {
        delay?: number;
        name?: string;
    };
    /**
     * Specifies options of submenu showing and hiding.
     */
    showSubmenuMode: string | {
        delay?: number | {
            hide?: number;
            show?: number;
        };
        name?: string;
    };
    /**
     * Specifies the direction at which submenus are displayed.
     */
    submenuDirection: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The target element associated with the context menu.
     */
    target: Element | JQuery;
    /**
     * A Boolean value specifying whether or not the widget is visible.
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
     * A function that is executed after the ContextMenu is hidden.
     */
    onHidden: EventEmitter<any>;
    /**
     * A function that is executed before the ContextMenu is hidden.
     */
    onHiding: EventEmitter<any>;
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
     * A function that is executed after a collection item is rendered.
     */
    onItemRendered: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed before the ContextMenu is positioned.
     */
    onPositioning: EventEmitter<any>;
    /**
     * A function that is executed when a collection item is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed before the ContextMenu is shown.
     */
    onShowing: EventEmitter<any>;
    /**
     * A function that is executed after the ContextMenu is shown.
     */
    onShown: EventEmitter<any>;
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
    animationChange: EventEmitter<{
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    cssClassChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    displayExprChange: EventEmitter<Function | string>;
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
    itemsChange: EventEmitter<Array<DevExpress.ui.dxContextMenuItem>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemsExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    positionChange: EventEmitter<DevExpress.positionConfig>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectByClickChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectedItemChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showEventChange: EventEmitter<string | {
        delay?: number;
        name?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showSubmenuModeChange: EventEmitter<string | {
        delay?: number | {
            hide?: number;
            show?: number;
        };
        name?: string;
    }>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    submenuDirectionChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    targetChange: EventEmitter<Element | JQuery>;
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
    protected _createInstance(element: any, options: any): DxContextMenu;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxContextMenuModule {
}
