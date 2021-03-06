import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxLookup from 'devextreme/ui/lookup';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoAnimationModule, DxoHideModule, DxoShowModule, DxiItemModule, DxoPositionModule, DxoAtModule, DxoBoundaryOffsetModule, DxoCollisionModule, DxoMyModule, DxoOffsetModule } from 'devextreme-angular/ui/nested';

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
const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxLookupComponent),
    multi: true
};
/**
 * The Lookup is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
 */
let DxLookupComponent = class DxLookupComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'cleanSearchOnOpeningChange' },
            { emit: 'clearButtonTextChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'displayValueChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'fullScreenChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'placeholderChange' },
            { emit: 'popupHeightChange' },
            { emit: 'popupWidthChange' },
            { emit: 'positionChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchPlaceholderChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'shadingChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showPopupTitleChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'usePopoverChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    get animation() {
        return this._getOption('animation');
    }
    set animation(value) {
        this._setOption('animation', value);
    }
    /**
     * The text displayed on the Apply button.
     */
    get applyButtonText() {
        return this._getOption('applyButtonText');
    }
    set applyButtonText(value) {
        this._setOption('applyButtonText', value);
    }
    /**
     * Specifies the way an end-user applies the selected value.
     */
    get applyValueMode() {
        return this._getOption('applyValueMode');
    }
    set applyValueMode(value) {
        this._setOption('applyValueMode', value);
    }
    /**
     * The text displayed on the Cancel button.
     */
    get cancelButtonText() {
        return this._getOption('cancelButtonText');
    }
    set cancelButtonText(value) {
        this._setOption('cancelButtonText', value);
    }
    /**
     * Specifies whether or not the widget cleans the search box when the popup window is displayed.
     */
    get cleanSearchOnOpening() {
        return this._getOption('cleanSearchOnOpening');
    }
    set cleanSearchOnOpening(value) {
        this._setOption('cleanSearchOnOpening', value);
    }
    /**
     * The text displayed on the Clear button.
     */
    get clearButtonText() {
        return this._getOption('clearButtonText');
    }
    set clearButtonText(value) {
        this._setOption('clearButtonText', value);
    }
    /**
     * Specifies whether to close the drop-down menu if a user clicks outside it.
     */
    get closeOnOutsideClick() {
        return this._getOption('closeOnOutsideClick');
    }
    set closeOnOutsideClick(value) {
        this._setOption('closeOnOutsideClick', value);
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
     * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
     */
    get deferRendering() {
        return this._getOption('deferRendering');
    }
    set deferRendering(value) {
        this._setOption('deferRendering', value);
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
     * Specifies the data field whose values should be displayed.
     */
    get displayExpr() {
        return this._getOption('displayExpr');
    }
    set displayExpr(value) {
        this._setOption('displayExpr', value);
    }
    /**
     * Returns the value currently displayed by the widget.
     */
    get displayValue() {
        return this._getOption('displayValue');
    }
    set displayValue(value) {
        this._setOption('displayValue', value);
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
     * Specifies a custom template for the input field.
     */
    get fieldTemplate() {
        return this._getOption('fieldTemplate');
    }
    set fieldTemplate(value) {
        this._setOption('fieldTemplate', value);
    }
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /**
     * A Boolean value specifying whether or not to display the lookup in full-screen mode.
     */
    get fullScreen() {
        return this._getOption('fullScreen');
    }
    set fullScreen(value) {
        this._setOption('fullScreen', value);
    }
    /**
     * A Boolean value specifying whether or not to group widget items.
     */
    get grouped() {
        return this._getOption('grouped');
    }
    set grouped(value) {
        this._setOption('grouped', value);
    }
    /**
     * Specifies a custom template for group captions.
     */
    get groupTemplate() {
        return this._getOption('groupTemplate');
    }
    set groupTemplate(value) {
        this._setOption('groupTemplate', value);
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
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /**
     * Specifies the attributes to be passed on to the underlying HTML element.
     */
    get inputAttr() {
        return this._getOption('inputAttr');
    }
    set inputAttr(value) {
        this._setOption('inputAttr', value);
    }
    /**
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    /**
     * An array of items displayed by the widget.
     */
    get items() {
        return this._getOption('items');
    }
    set items(value) {
        this._setOption('items', value);
    }
    /**
     * Specifies a custom template for items.
     */
    get itemTemplate() {
        return this._getOption('itemTemplate');
    }
    set itemTemplate(value) {
        this._setOption('itemTemplate', value);
    }
    /**
     * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
     */
    get minSearchLength() {
        return this._getOption('minSearchLength');
    }
    set minSearchLength(value) {
        this._setOption('minSearchLength', value);
    }
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    /**
     * The text displayed on the button used to load the next page from the data source.
     */
    get nextButtonText() {
        return this._getOption('nextButtonText');
    }
    set nextButtonText(value) {
        this._setOption('nextButtonText', value);
    }
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    get noDataText() {
        return this._getOption('noDataText');
    }
    set noDataText(value) {
        this._setOption('noDataText', value);
    }
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    get opened() {
        return this._getOption('opened');
    }
    set opened(value) {
        this._setOption('opened', value);
    }
    /**
     * Specifies the text shown in the pullDown panel, which is displayed when the widget is scrolled to the bottom.
     */
    get pageLoadingText() {
        return this._getOption('pageLoadingText');
    }
    set pageLoadingText(value) {
        this._setOption('pageLoadingText', value);
    }
    /**
     * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
     */
    get pageLoadMode() {
        return this._getOption('pageLoadMode');
    }
    set pageLoadMode(value) {
        this._setOption('pageLoadMode', value);
    }
    /**
     * The text displayed by the widget when nothing is selected.
     */
    get placeholder() {
        return this._getOption('placeholder');
    }
    set placeholder(value) {
        this._setOption('placeholder', value);
    }
    /**
     * Specifies the popup element's height. Applies only if fullScreen is false.
     */
    get popupHeight() {
        return this._getOption('popupHeight');
    }
    set popupHeight(value) {
        this._setOption('popupHeight', value);
    }
    /**
     * Specifies the popup element's width. Applies only if fullScreen is false.
     */
    get popupWidth() {
        return this._getOption('popupWidth');
    }
    set popupWidth(value) {
        this._setOption('popupWidth', value);
    }
    /**
     * An object defining widget positioning options.
     */
    get position() {
        return this._getOption('position');
    }
    set position(value) {
        this._setOption('position', value);
    }
    /**
     * Specifies the text displayed in the pullDown panel when the widget is pulled below the refresh threshold.
     */
    get pulledDownText() {
        return this._getOption('pulledDownText');
    }
    set pulledDownText(value) {
        this._setOption('pulledDownText', value);
    }
    /**
     * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
     */
    get pullingDownText() {
        return this._getOption('pullingDownText');
    }
    set pullingDownText(value) {
        this._setOption('pullingDownText', value);
    }
    /**
     * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
     */
    get pullRefreshEnabled() {
        return this._getOption('pullRefreshEnabled');
    }
    set pullRefreshEnabled(value) {
        this._setOption('pullRefreshEnabled', value);
    }
    /**
     * Specifies the text displayed in the pullDown panel while the widget is being refreshed.
     */
    get refreshingText() {
        return this._getOption('refreshingText');
    }
    set refreshingText(value) {
        this._setOption('refreshingText', value);
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
     * Specifies whether the search box is visible.
     */
    get searchEnabled() {
        return this._getOption('searchEnabled');
    }
    set searchEnabled(value) {
        this._setOption('searchEnabled', value);
    }
    /**
     * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
     */
    get searchExpr() {
        return this._getOption('searchExpr');
    }
    set searchExpr(value) {
        this._setOption('searchExpr', value);
    }
    /**
     * Specifies a comparison operation used to search widget items.
     */
    get searchMode() {
        return this._getOption('searchMode');
    }
    set searchMode(value) {
        this._setOption('searchMode', value);
    }
    /**
     * The text that is provided as a hint in the lookup's search bar.
     */
    get searchPlaceholder() {
        return this._getOption('searchPlaceholder');
    }
    set searchPlaceholder(value) {
        this._setOption('searchPlaceholder', value);
    }
    /**
     * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
     */
    get searchTimeout() {
        return this._getOption('searchTimeout');
    }
    set searchTimeout(value) {
        this._setOption('searchTimeout', value);
    }
    /**
     * Gets the currently selected item.
     */
    get selectedItem() {
        return this._getOption('selectedItem');
    }
    set selectedItem(value) {
        this._setOption('selectedItem', value);
    }
    /**
     * Specifies whether to shade the container when the lookup is active. Applies only if usePopover is false.
     */
    get shading() {
        return this._getOption('shading');
    }
    set shading(value) {
        this._setOption('shading', value);
    }
    /**
     * Specifies whether to display the Cancel button in the lookup window.
     */
    get showCancelButton() {
        return this._getOption('showCancelButton');
    }
    set showCancelButton(value) {
        this._setOption('showCancelButton', value);
    }
    /**
     * Specifies whether or not to display the Clear button in the lookup window.
     */
    get showClearButton() {
        return this._getOption('showClearButton');
    }
    set showClearButton(value) {
        this._setOption('showClearButton', value);
    }
    /**
     * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
     */
    get showDataBeforeSearch() {
        return this._getOption('showDataBeforeSearch');
    }
    set showDataBeforeSearch(value) {
        this._setOption('showDataBeforeSearch', value);
    }
    /**
     * A Boolean value specifying whether or not to display the title in the popup window.
     */
    get showPopupTitle() {
        return this._getOption('showPopupTitle');
    }
    set showPopupTitle(value) {
        this._setOption('showPopupTitle', value);
    }
    /**
     * Specifies how the widget's text field is styled.
     */
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
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
     * The read-only option that holds the text displayed by the widget input element.
     */
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    /**
     * The title of the lookup window.
     */
    get title() {
        return this._getOption('title');
    }
    set title(value) {
        this._setOption('title', value);
    }
    /**
     * Specifies a custom template for the title.
     */
    get titleTemplate() {
        return this._getOption('titleTemplate');
    }
    set titleTemplate(value) {
        this._setOption('titleTemplate', value);
    }
    /**
     * Specifies whether or not the widget uses native scrolling.
     */
    get useNativeScrolling() {
        return this._getOption('useNativeScrolling');
    }
    set useNativeScrolling(value) {
        this._setOption('useNativeScrolling', value);
    }
    /**
     * Specifies whether or not to show lookup contents in a Popover widget.
     */
    get usePopover() {
        return this._getOption('usePopover');
    }
    set usePopover(value) {
        this._setOption('usePopover', value);
    }
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    get validationError() {
        return this._getOption('validationError');
    }
    set validationError(value) {
        this._setOption('validationError', value);
    }
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    get validationMessageMode() {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value) {
        this._setOption('validationMessageMode', value);
    }
    /**
     * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies the DOM events after which the widget's value should be updated.
     */
    get valueChangeEvent() {
        return this._getOption('valueChangeEvent');
    }
    set valueChangeEvent(value) {
        this._setOption('valueChangeEvent', value);
    }
    /**
     * Specifies which data field provides unique values to the widget's value.
     */
    get valueExpr() {
        return this._getOption('valueExpr');
    }
    set valueExpr(value) {
        this._setOption('valueExpr', value);
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
    change(_) { }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    _createInstance(element, options) {
        return new DxLookup(element, options);
    }
    writeValue(value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) { this.change = fn; }
    registerOnTouched(fn) { this.touched = fn; }
    _createWidget(element) {
        super._createWidget(element);
        this.instance.on('focusOut', (e) => {
            this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
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
    ngOnInit() {
        super.ngOnInit();
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    }
};
DxLookupComponent.ctorParameters = () => [
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
    ContentChild(DxValidatorComponent)
], DxLookupComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxLookupComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "animation", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "applyButtonText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "applyValueMode", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "cancelButtonText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "cleanSearchOnOpening", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "clearButtonText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "closeOnOutsideClick", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "dataSource", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "deferRendering", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "displayExpr", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "displayValue", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "fieldTemplate", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "fullScreen", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "grouped", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "groupTemplate", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "height", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "hint", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "inputAttr", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "items", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "minSearchLength", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "name", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "nextButtonText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "noDataText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "opened", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "pageLoadingText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "pageLoadMode", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "placeholder", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "popupHeight", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "popupWidth", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "position", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "pulledDownText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "pullingDownText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "pullRefreshEnabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "refreshingText", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "searchEnabled", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "searchExpr", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "searchMode", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "searchPlaceholder", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "searchTimeout", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "selectedItem", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "shading", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "showCancelButton", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "showClearButton", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "showDataBeforeSearch", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "showPopupTitle", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "stylingMode", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "text", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "title", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "titleTemplate", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "useNativeScrolling", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "usePopover", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "validationMessageMode", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "value", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "valueChangeEvent", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "valueExpr", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "visible", null);
__decorate([
    Input()
], DxLookupComponent.prototype, "width", null);
__decorate([
    Output()
], DxLookupComponent.prototype, "onClosed", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onOpened", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onPageLoading", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onPullRefresh", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onScroll", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onSelectionChanged", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onTitleRendered", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "animationChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "applyButtonTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "applyValueModeChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "cancelButtonTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "cleanSearchOnOpeningChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "clearButtonTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "closeOnOutsideClickChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "dataSourceChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "deferRenderingChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "displayExprChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "displayValueChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "fieldTemplateChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "fullScreenChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "groupedChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "groupTemplateChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "inputAttrChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "itemsChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "itemTemplateChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "minSearchLengthChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "nextButtonTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "noDataTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "openedChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "pageLoadingTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "pageLoadModeChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "placeholderChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "popupHeightChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "popupWidthChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "positionChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "pulledDownTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "pullingDownTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "pullRefreshEnabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "refreshingTextChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "searchEnabledChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "searchExprChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "searchModeChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "searchPlaceholderChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "searchTimeoutChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "selectedItemChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "shadingChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "showCancelButtonChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "showClearButtonChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "showDataBeforeSearchChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "showPopupTitleChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "textChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "titleChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "titleTemplateChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "useNativeScrollingChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "usePopoverChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "validationMessageModeChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "valueChangeEventChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "valueExprChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxLookupComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxLookupComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxLookupComponent.prototype, "touched", void 0);
__decorate([
    ContentChildren(DxiItemComponent)
], DxLookupComponent.prototype, "itemsChildren", null);
DxLookupComponent = __decorate([
    Component({
        selector: 'dx-lookup',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            CUSTOM_VALUE_ACCESSOR_PROVIDER,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxLookupComponent);
let DxLookupModule = class DxLookupModule {
};
DxLookupModule = __decorate([
    NgModule({
        imports: [
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxiItemModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxLookupComponent
        ],
        exports: [
            DxLookupComponent,
            DxoAnimationModule,
            DxoHideModule,
            DxoShowModule,
            DxiItemModule,
            DxoPositionModule,
            DxoAtModule,
            DxoBoundaryOffsetModule,
            DxoCollisionModule,
            DxoMyModule,
            DxoOffsetModule,
            DxTemplateModule
        ]
    })
], DxLookupModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxLookupComponent, DxLookupModule };
//# sourceMappingURL=devextreme-angular-ui-lookup.js.map
