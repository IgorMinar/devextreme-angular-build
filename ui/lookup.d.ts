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
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxLookup from 'devextreme/ui/lookup';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The Lookup is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
 */
export declare class DxLookupComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxLookup;
    validator: DxValidatorComponent;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
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
     * The text displayed on the Apply button.
     */
    applyButtonText: string;
    /**
     * Specifies the way an end-user applies the selected value.
     */
    applyValueMode: string;
    /**
     * The text displayed on the Cancel button.
     */
    cancelButtonText: string;
    /**
     * Specifies whether or not the widget cleans the search box when the popup window is displayed.
     */
    cleanSearchOnOpening: boolean;
    /**
     * The text displayed on the Clear button.
     */
    clearButtonText: string;
    /**
     * Specifies whether to close the drop-down menu if a user clicks outside it.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>;
    /**
     * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the data field whose values should be displayed.
     */
    displayExpr: Function | string;
    /**
     * Returns the value currently displayed by the widget.
     */
    displayValue: string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies a custom template for the input field.
     */
    fieldTemplate: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * A Boolean value specifying whether or not to display the lookup in full-screen mode.
     */
    fullScreen: boolean;
    /**
     * A Boolean value specifying whether or not to group widget items.
     */
    grouped: boolean;
    /**
     * Specifies a custom template for group captions.
     */
    groupTemplate: any;
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
     * Specifies the attributes to be passed on to the underlying HTML element.
     */
    inputAttr: any;
    /**
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * An array of items displayed by the widget.
     */
    items: Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
     */
    minSearchLength: number;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * The text displayed on the button used to load the next page from the data source.
     */
    nextButtonText: string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    opened: boolean;
    /**
     * Specifies the text shown in the pullDown panel, which is displayed when the widget is scrolled to the bottom.
     */
    pageLoadingText: string;
    /**
     * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
     */
    pageLoadMode: string;
    /**
     * The text displayed by the widget when nothing is selected.
     */
    placeholder: string;
    /**
     * Specifies the popup element's height. Applies only if fullScreen is false.
     */
    popupHeight: number | Function | string;
    /**
     * Specifies the popup element's width. Applies only if fullScreen is false.
     */
    popupWidth: number | Function | string;
    /**
     * An object defining widget positioning options.
     */
    position: DevExpress.positionConfig;
    /**
     * Specifies the text displayed in the pullDown panel when the widget is pulled below the refresh threshold.
     */
    pulledDownText: string;
    /**
     * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
     */
    pullingDownText: string;
    /**
     * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
     */
    pullRefreshEnabled: boolean;
    /**
     * Specifies the text displayed in the pullDown panel while the widget is being refreshed.
     */
    refreshingText: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether the search box is visible.
     */
    searchEnabled: boolean;
    /**
     * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
     */
    searchExpr: Function | Array<Function>;
    /**
     * Specifies a comparison operation used to search widget items.
     */
    searchMode: string;
    /**
     * The text that is provided as a hint in the lookup's search bar.
     */
    searchPlaceholder: string;
    /**
     * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
     */
    searchTimeout: number;
    /**
     * Gets the currently selected item.
     */
    selectedItem: any;
    /**
     * Specifies whether to shade the container when the lookup is active. Applies only if usePopover is false.
     */
    shading: boolean;
    /**
     * Specifies whether to display the Cancel button in the lookup window.
     */
    showCancelButton: boolean;
    /**
     * Specifies whether or not to display the Clear button in the lookup window.
     */
    showClearButton: boolean;
    /**
     * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
     */
    showDataBeforeSearch: boolean;
    /**
     * A Boolean value specifying whether or not to display the title in the popup window.
     */
    showPopupTitle: boolean;
    /**
     * Specifies how the widget's text field is styled.
     */
    stylingMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The read-only option that holds the text displayed by the widget input element.
     */
    text: string;
    /**
     * The title of the lookup window.
     */
    title: string;
    /**
     * Specifies a custom template for the title.
     */
    titleTemplate: any;
    /**
     * Specifies whether or not the widget uses native scrolling.
     */
    useNativeScrolling: boolean;
    /**
     * Specifies whether or not to show lookup contents in a Popover widget.
     */
    usePopover: boolean;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
     */
    value: any;
    /**
     * Specifies the DOM events after which the widget's value should be updated.
     */
    valueChangeEvent: string;
    /**
     * Specifies which data field provides unique values to the widget's value.
     */
    valueExpr: Function | string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed once the drop-down editor is closed.
     */
    onClosed: EventEmitter<any>;
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
     * A function that is executed when a list item is clicked or tapped.
     */
    onItemClick: EventEmitter<any>;
    /**
     * A function that is executed once the drop-down editor is opened.
     */
    onOpened: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed before the next page is loaded.
     */
    onPageLoading: EventEmitter<any>;
    /**
     * A function that is executed when the "pull to refresh" gesture is performed on the drop-down item list. Supported in mobile themes only.
     */
    onPullRefresh: EventEmitter<any>;
    /**
     * A function that is executed on each scroll gesture performed on the drop-down item list.
     */
    onScroll: EventEmitter<any>;
    /**
     * A function that is executed when a list item is selected or selection is canceled.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A function that is executed when the drop-down list's title is rendered.
     */
    onTitleRendered: EventEmitter<any>;
    /**
     * A function that is executed after the widget's value is changed.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<{
        hide?: DevExpress.animationConfig;
        show?: DevExpress.animationConfig;
    }>;
    /**
     * A handler for the applyButtonTextChange event.
     */
    applyButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the applyValueModeChange event.
     */
    applyValueModeChange: EventEmitter<string>;
    /**
     * A handler for the cancelButtonTextChange event.
     */
    cancelButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the cleanSearchOnOpeningChange event.
     */
    cleanSearchOnOpeningChange: EventEmitter<boolean>;
    /**
     * A handler for the clearButtonTextChange event.
     */
    clearButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the closeOnOutsideClickChange event.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
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
     * A handler for the displayValueChange event.
     */
    displayValueChange: EventEmitter<string>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the fieldTemplateChange event.
     */
    fieldTemplateChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the fullScreenChange event.
     */
    fullScreenChange: EventEmitter<boolean>;
    /**
     * A handler for the groupedChange event.
     */
    groupedChange: EventEmitter<boolean>;
    /**
     * A handler for the groupTemplateChange event.
     */
    groupTemplateChange: EventEmitter<any>;
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
     * A handler for the inputAttrChange event.
     */
    inputAttrChange: EventEmitter<any>;
    /**
     * A handler for the isValidChange event.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    /**
     * A handler for the itemTemplateChange event.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * A handler for the minSearchLengthChange event.
     */
    minSearchLengthChange: EventEmitter<number>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the nextButtonTextChange event.
     */
    nextButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the openedChange event.
     */
    openedChange: EventEmitter<boolean>;
    /**
     * A handler for the pageLoadingTextChange event.
     */
    pageLoadingTextChange: EventEmitter<string>;
    /**
     * A handler for the pageLoadModeChange event.
     */
    pageLoadModeChange: EventEmitter<string>;
    /**
     * A handler for the placeholderChange event.
     */
    placeholderChange: EventEmitter<string>;
    /**
     * A handler for the popupHeightChange event.
     */
    popupHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the popupWidthChange event.
     */
    popupWidthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the positionChange event.
     */
    positionChange: EventEmitter<DevExpress.positionConfig>;
    /**
     * A handler for the pulledDownTextChange event.
     */
    pulledDownTextChange: EventEmitter<string>;
    /**
     * A handler for the pullingDownTextChange event.
     */
    pullingDownTextChange: EventEmitter<string>;
    /**
     * A handler for the pullRefreshEnabledChange event.
     */
    pullRefreshEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the refreshingTextChange event.
     */
    refreshingTextChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
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
     * A handler for the searchPlaceholderChange event.
     */
    searchPlaceholderChange: EventEmitter<string>;
    /**
     * A handler for the searchTimeoutChange event.
     */
    searchTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the selectedItemChange event.
     */
    selectedItemChange: EventEmitter<any>;
    /**
     * A handler for the shadingChange event.
     */
    shadingChange: EventEmitter<boolean>;
    /**
     * A handler for the showCancelButtonChange event.
     */
    showCancelButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showClearButtonChange event.
     */
    showClearButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showDataBeforeSearchChange event.
     */
    showDataBeforeSearchChange: EventEmitter<boolean>;
    /**
     * A handler for the showPopupTitleChange event.
     */
    showPopupTitleChange: EventEmitter<boolean>;
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
     * A handler for the titleChange event.
     */
    titleChange: EventEmitter<string>;
    /**
     * A handler for the titleTemplateChange event.
     */
    titleTemplateChange: EventEmitter<any>;
    /**
     * A handler for the useNativeScrollingChange event.
     */
    useNativeScrollingChange: EventEmitter<boolean>;
    /**
     * A handler for the usePopoverChange event.
     */
    usePopoverChange: EventEmitter<boolean>;
    /**
     * A handler for the validationErrorChange event.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * A handler for the validationMessageModeChange event.
     */
    validationMessageModeChange: EventEmitter<string>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<any>;
    /**
     * A handler for the valueChangeEventChange event.
     */
    valueChangeEventChange: EventEmitter<string>;
    /**
     * A handler for the valueExprChange event.
     */
    valueExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxLookup;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class DxLookupModule {
}
