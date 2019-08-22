import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxDropDownButton from 'devextreme/ui/drop_down_button';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The DropDownButton is a button that opens a drop-down menu.
 */
export declare class DxDropDownButtonComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxDropDownButton;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Provides data for the drop-down menu.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>;
    /**
     * Specifies whether to wait until the drop-down menu is opened the first time to render its content.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the data field whose values should be displayed in the drop-down menu.
     */
    displayExpr: Function | string;
    /**
     * Specifies custom content for the drop-down field.
     */
    dropDownContentTemplate: any;
    /**
     * Configures the drop-down field.
     */
    dropDownOptions: DevExpress.ui.dxPopupOptions;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether users can use keyboard to focus the widget.
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
     * Specifies whether the widget changes its state when a user hovers the mouse pointer over it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies the button's icon.
     */
    icon: string;
    /**
     * Provides drop-down menu items.
     */
    items: Array<any | {
        badge?: string;
        disabled?: boolean;
        html?: string;
        icon?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for drop-down menu items.
     */
    itemTemplate: any;
    /**
     * Specifies which data field provides keys used to distinguish between the selected drop-down menu items.
     */
    keyExpr: string;
    /**
     * Specifies text or HTML markup displayed in the drop-down menu when it does not contain any items.
     */
    noDataText: string;
    /**
     * Specifies whether the drop-down menu is opened.
     */
    opened: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Contains the selected item's data. Available when useSelectMode is true.
     */
    selectedItem: any | number | string;
    /**
     * Contains the selected item's key and allows you to specify the initially selected item. Applies when useSelectMode is true.
     */
    selectedItemKey: number | string;
    showArrowIcon: boolean;
    /**
     * Specifies whether to split the button in two: one executes an action, the other opens and closes the drop-down menu.
     */
    splitButton: boolean;
    /**
     * Specifies how the button is styled.
     */
    stylingMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies the button's text. Applies only if useSelectMode is false.
     */
    text: string;
    /**
     * Specifies whether the widget stores the selected drop-down menu item.
     */
    useSelectMode: boolean;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed when the button is clicked or tapped. If splitButton is true, this function is executed for the action button only.
     */
    onButtonClick: EventEmitter<any>;
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
     * A function that is executed when a drop-down menu item is clicked.
     */
    onItemClick: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when an item is selected or selection is canceled. In effect when useSelectMode is true.
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
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the displayExprChange event.
     */
    displayExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the dropDownContentTemplateChange event.
     */
    dropDownContentTemplateChange: EventEmitter<any>;
    /**
     * A handler for the dropDownOptionsChange event.
     */
    dropDownOptionsChange: EventEmitter<DevExpress.ui.dxPopupOptions>;
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
     * A handler for the iconChange event.
     */
    iconChange: EventEmitter<string>;
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<any | {
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
    keyExprChange: EventEmitter<string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the openedChange event.
     */
    openedChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectedItemChange event.
     */
    selectedItemChange: EventEmitter<any | number | string>;
    /**
     * A handler for the selectedItemKeyChange event.
     */
    selectedItemKeyChange: EventEmitter<number | string>;
    /**
     * A handler for the showArrowIconChange event.
     */
    showArrowIconChange: EventEmitter<boolean>;
    /**
     * A handler for the splitButtonChange event.
     */
    splitButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the stylingModeChange event.
     */
    stylingModeChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
    /**
     * A handler for the useSelectModeChange event.
     */
    useSelectModeChange: EventEmitter<boolean>;
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
    protected _createInstance(element: any, options: any): DxDropDownButton;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxDropDownButtonModule {
}
