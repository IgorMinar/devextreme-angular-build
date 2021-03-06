import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxLookup from 'devextreme/ui/lookup';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxLookupComponent; }),
    multi: true
};
/**
 * The Lookup is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
 */
var DxLookupComponent = /** @class */ (function (_super) {
    __extends(DxLookupComponent, _super);
    function DxLookupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLookupComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyButtonText", {
        /**
         * The text displayed on the Apply button.
         */
        get: function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyValueMode", {
        /**
         * Specifies the way an end-user applies the selected value.
         */
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cancelButtonText", {
        /**
         * The text displayed on the Cancel button.
         */
        get: function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cleanSearchOnOpening", {
        /**
         * Specifies whether or not the widget cleans the search box when the popup window is displayed.
         */
        get: function () {
            return this._getOption('cleanSearchOnOpening');
        },
        set: function (value) {
            this._setOption('cleanSearchOnOpening', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "clearButtonText", {
        /**
         * The text displayed on the Clear button.
         */
        get: function () {
            return this._getOption('clearButtonText');
        },
        set: function (value) {
            this._setOption('clearButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the drop-down menu if a user clicks outside it.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "dataSource", {
        /**
         * Binds the widget to data.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "deferRendering", {
        /**
         * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayExpr", {
        /**
         * Specifies the data field whose values should be displayed.
         */
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayValue", {
        /**
         * Returns the value currently displayed by the widget.
         */
        get: function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fieldTemplate", {
        /**
         * Specifies a custom template for the input field.
         */
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fullScreen", {
        /**
         * A Boolean value specifying whether or not to display the lookup in full-screen mode.
         */
        get: function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "grouped", {
        /**
         * A Boolean value specifying whether or not to group widget items.
         */
        get: function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "groupTemplate", {
        /**
         * Specifies a custom template for group captions.
         */
        get: function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "inputAttr", {
        /**
         * Specifies the attributes to be passed on to the underlying HTML element.
         */
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "isValid", {
        /**
         * Specifies whether the editor's value is valid.
         */
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "minSearchLength", {
        /**
         * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
         */
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "name", {
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "nextButtonText", {
        /**
         * The text displayed on the button used to load the next page from the data source.
         */
        get: function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "opened", {
        /**
         * Specifies whether or not the drop-down editor is displayed.
         */
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadingText", {
        /**
         * Specifies the text shown in the pullDown panel, which is displayed when the widget is scrolled to the bottom.
         */
        get: function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadMode", {
        /**
         * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
         */
        get: function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "placeholder", {
        /**
         * The text displayed by the widget when nothing is selected.
         */
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupHeight", {
        /**
         * Specifies the popup element's height. Applies only if fullScreen is false.
         */
        get: function () {
            return this._getOption('popupHeight');
        },
        set: function (value) {
            this._setOption('popupHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupWidth", {
        /**
         * Specifies the popup element's width. Applies only if fullScreen is false.
         */
        get: function () {
            return this._getOption('popupWidth');
        },
        set: function (value) {
            this._setOption('popupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "position", {
        /**
         * An object defining widget positioning options.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pulledDownText", {
        /**
         * Specifies the text displayed in the pullDown panel when the widget is pulled below the refresh threshold.
         */
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullingDownText", {
        /**
         * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
         */
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullRefreshEnabled", {
        /**
         * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
         */
        get: function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "refreshingText", {
        /**
         * Specifies the text displayed in the pullDown panel while the widget is being refreshed.
         */
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchEnabled", {
        /**
         * Specifies whether the search box is visible.
         */
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchExpr", {
        /**
         * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
         */
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchMode", {
        /**
         * Specifies a comparison operation used to search widget items.
         */
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchPlaceholder", {
        /**
         * The text that is provided as a hint in the lookup's search bar.
         */
        get: function () {
            return this._getOption('searchPlaceholder');
        },
        set: function (value) {
            this._setOption('searchPlaceholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchTimeout", {
        /**
         * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
         */
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "selectedItem", {
        /**
         * Gets the currently selected item.
         */
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "shading", {
        /**
         * Specifies whether to shade the container when the lookup is active. Applies only if usePopover is false.
         */
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showCancelButton", {
        /**
         * Specifies whether to display the Cancel button in the lookup window.
         */
        get: function () {
            return this._getOption('showCancelButton');
        },
        set: function (value) {
            this._setOption('showCancelButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showClearButton", {
        /**
         * Specifies whether or not to display the Clear button in the lookup window.
         */
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showDataBeforeSearch", {
        /**
         * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
         */
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showPopupTitle", {
        /**
         * A Boolean value specifying whether or not to display the title in the popup window.
         */
        get: function () {
            return this._getOption('showPopupTitle');
        },
        set: function (value) {
            this._setOption('showPopupTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "stylingMode", {
        /**
         * Specifies how the widget's text field is styled.
         */
        get: function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "text", {
        /**
         * The read-only option that holds the text displayed by the widget input element.
         */
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "title", {
        /**
         * The title of the lookup window.
         */
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "titleTemplate", {
        /**
         * Specifies a custom template for the title.
         */
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "useNativeScrolling", {
        /**
         * Specifies whether or not the widget uses native scrolling.
         */
        get: function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "usePopover", {
        /**
         * Specifies whether or not to show lookup contents in a Popover widget.
         */
        get: function () {
            return this._getOption('usePopover');
        },
        set: function (value) {
            this._setOption('usePopover', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationError", {
        /**
         * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
         */
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationMessageMode", {
        /**
         * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
         */
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "value", {
        /**
         * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueChangeEvent", {
        /**
         * Specifies the DOM events after which the widget's value should be updated.
         */
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueExpr", {
        /**
         * Specifies which data field provides unique values to the widget's value.
         */
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLookupComponent.prototype.change = function (_) { };
    Object.defineProperty(DxLookupComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLookupComponent.prototype._createInstance = function (element, options) {
        return new DxLookup(element, options);
    };
    DxLookupComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxLookupComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxLookupComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxLookupComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxLookupComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxLookupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLookupComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxLookupComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxLookupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxLookupComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxLookupComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxLookupComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxLookupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DxTemplateHost },
        { type: WatcherHelper },
        { type: IterableDifferHelper },
        { type: NestedOptionHost },
        { type: TransferState },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return DxLookupComponent;
}(DxComponent));
var DxLookupModule = /** @class */ (function () {
    function DxLookupModule() {
    }
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
    return DxLookupModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxLookupComponent, DxLookupModule };
//# sourceMappingURL=devextreme-angular-ui-lookup.js.map
