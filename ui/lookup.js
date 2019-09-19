var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener, ContentChildren, QueryList } from '@angular/core';

import DxLookup from 'devextreme/ui/lookup';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAnimationModule } from './nested/animation';
import { DxoHideModule } from './nested/hide';
import { DxoShowModule } from './nested/show';
import { DxiItemModule } from './nested/item-dxi';
import { DxoPositionModule } from './nested/position';
import { DxoAtModule } from './nested/at';
import { DxoBoundaryOffsetModule } from './nested/boundary-offset';
import { DxoCollisionModule } from './nested/collision';
import { DxoMyModule } from './nested/my';
import { DxoOffsetModule } from './nested/offset';
import { DxiItemComponent } from './nested/item-dxi';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxLookupComponent; }),
    multi: true
};
/**
 * The Lookup is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
 */
var DxLookupComponent = (function (_super) {
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
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
             */
        function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyButtonText", {
        get: /**
             * The text displayed on the Apply button.
             */
        function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyValueMode", {
        get: /**
             * Specifies the way an end-user applies the selected value.
             */
        function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cancelButtonText", {
        get: /**
             * The text displayed on the Cancel button.
             */
        function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cleanSearchOnOpening", {
        get: /**
             * Specifies whether or not the widget cleans the search box when the popup window is displayed.
             */
        function () {
            return this._getOption('cleanSearchOnOpening');
        },
        set: function (value) {
            this._setOption('cleanSearchOnOpening', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "clearButtonText", {
        get: /**
             * The text displayed on the Clear button.
             */
        function () {
            return this._getOption('clearButtonText');
        },
        set: function (value) {
            this._setOption('clearButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the drop-down menu if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "dataSource", {
        get: /**
             * Binds the widget to data.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the data field whose values should be displayed.
             */
        function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayValue", {
        get: /**
             * Returns the value currently displayed by the widget.
             */
        function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fieldTemplate", {
        get: /**
             * Specifies a custom template for the input field.
             */
        function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fullScreen", {
        get: /**
             * A Boolean value specifying whether or not to display the lookup in full-screen mode.
             */
        function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "grouped", {
        get: /**
             * A Boolean value specifying whether or not to group widget items.
             */
        function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "groupTemplate", {
        get: /**
             * Specifies a custom template for group captions.
             */
        function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "minSearchLength", {
        get: /**
             * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
             */
        function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "nextButtonText", {
        get: /**
             * The text displayed on the button used to load the next page from the data source.
             */
        function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "opened", {
        get: /**
             * Specifies whether or not the drop-down editor is displayed.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadingText", {
        get: /**
             * Specifies the text shown in the pullDown panel, which is displayed when the widget is scrolled to the bottom.
             */
        function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadMode", {
        get: /**
             * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
             */
        function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "placeholder", {
        get: /**
             * The text displayed by the widget when nothing is selected.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupHeight", {
        get: /**
             * Specifies the popup element's height. Applies only if fullScreen is false.
             */
        function () {
            return this._getOption('popupHeight');
        },
        set: function (value) {
            this._setOption('popupHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupWidth", {
        get: /**
             * Specifies the popup element's width. Applies only if fullScreen is false.
             */
        function () {
            return this._getOption('popupWidth');
        },
        set: function (value) {
            this._setOption('popupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "position", {
        get: /**
             * An object defining widget positioning options.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pulledDownText", {
        get: /**
             * Specifies the text displayed in the pullDown panel when the widget is pulled below the refresh threshold.
             */
        function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullingDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
             */
        function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullRefreshEnabled", {
        get: /**
             * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
             */
        function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "refreshingText", {
        get: /**
             * Specifies the text displayed in the pullDown panel while the widget is being refreshed.
             */
        function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchEnabled", {
        get: /**
             * Specifies whether the search box is visible.
             */
        function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchExpr", {
        get: /**
             * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
             */
        function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchMode", {
        get: /**
             * Specifies a comparison operation used to search widget items.
             */
        function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchPlaceholder", {
        get: /**
             * The text that is provided as a hint in the lookup's search bar.
             */
        function () {
            return this._getOption('searchPlaceholder');
        },
        set: function (value) {
            this._setOption('searchPlaceholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchTimeout", {
        get: /**
             * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
             */
        function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "selectedItem", {
        get: /**
             * Gets the currently selected item.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "shading", {
        get: /**
             * Specifies whether to shade the container when the lookup is active. Applies only if usePopover is false.
             */
        function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showCancelButton", {
        get: /**
             * Specifies whether to display the Cancel button in the lookup window.
             */
        function () {
            return this._getOption('showCancelButton');
        },
        set: function (value) {
            this._setOption('showCancelButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether or not to display the Clear button in the lookup window.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showDataBeforeSearch", {
        get: /**
             * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
             */
        function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showPopupTitle", {
        get: /**
             * A Boolean value specifying whether or not to display the title in the popup window.
             */
        function () {
            return this._getOption('showPopupTitle');
        },
        set: function (value) {
            this._setOption('showPopupTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "title", {
        get: /**
             * The title of the lookup window.
             */
        function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "titleTemplate", {
        get: /**
             * Specifies a custom template for the title.
             */
        function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "useNativeScrolling", {
        get: /**
             * Specifies whether or not the widget uses native scrolling.
             */
        function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "usePopover", {
        get: /**
             * Specifies whether or not to show lookup contents in a Popover widget.
             */
        function () {
            return this._getOption('usePopover');
        },
        set: function (value) {
            this._setOption('usePopover', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "value", {
        get: /**
             * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueExpr", {
        get: /**
             * Specifies which data field provides unique values to the widget's value.
             */
        function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
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
    DxLookupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-lookup',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxLookupComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxLookupComponent.propDecorators = {
        "validator": [{ type: ContentChild, args: [DxValidatorComponent,] },],
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "animation": [{ type: Input },],
        "applyButtonText": [{ type: Input },],
        "applyValueMode": [{ type: Input },],
        "cancelButtonText": [{ type: Input },],
        "cleanSearchOnOpening": [{ type: Input },],
        "clearButtonText": [{ type: Input },],
        "closeOnOutsideClick": [{ type: Input },],
        "dataSource": [{ type: Input },],
        "deferRendering": [{ type: Input },],
        "disabled": [{ type: Input },],
        "displayExpr": [{ type: Input },],
        "displayValue": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "fieldTemplate": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "fullScreen": [{ type: Input },],
        "grouped": [{ type: Input },],
        "groupTemplate": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "inputAttr": [{ type: Input },],
        "isValid": [{ type: Input },],
        "items": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "minSearchLength": [{ type: Input },],
        "name": [{ type: Input },],
        "nextButtonText": [{ type: Input },],
        "noDataText": [{ type: Input },],
        "opened": [{ type: Input },],
        "pageLoadingText": [{ type: Input },],
        "pageLoadMode": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "popupHeight": [{ type: Input },],
        "popupWidth": [{ type: Input },],
        "position": [{ type: Input },],
        "pulledDownText": [{ type: Input },],
        "pullingDownText": [{ type: Input },],
        "pullRefreshEnabled": [{ type: Input },],
        "refreshingText": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "searchEnabled": [{ type: Input },],
        "searchExpr": [{ type: Input },],
        "searchMode": [{ type: Input },],
        "searchPlaceholder": [{ type: Input },],
        "searchTimeout": [{ type: Input },],
        "selectedItem": [{ type: Input },],
        "shading": [{ type: Input },],
        "showCancelButton": [{ type: Input },],
        "showClearButton": [{ type: Input },],
        "showDataBeforeSearch": [{ type: Input },],
        "showPopupTitle": [{ type: Input },],
        "stylingMode": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "text": [{ type: Input },],
        "title": [{ type: Input },],
        "titleTemplate": [{ type: Input },],
        "useNativeScrolling": [{ type: Input },],
        "usePopover": [{ type: Input },],
        "validationError": [{ type: Input },],
        "validationMessageMode": [{ type: Input },],
        "value": [{ type: Input },],
        "valueChangeEvent": [{ type: Input },],
        "valueExpr": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onClosed": [{ type: Output },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onItemClick": [{ type: Output },],
        "onOpened": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onPageLoading": [{ type: Output },],
        "onPullRefresh": [{ type: Output },],
        "onScroll": [{ type: Output },],
        "onSelectionChanged": [{ type: Output },],
        "onTitleRendered": [{ type: Output },],
        "onValueChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "animationChange": [{ type: Output },],
        "applyButtonTextChange": [{ type: Output },],
        "applyValueModeChange": [{ type: Output },],
        "cancelButtonTextChange": [{ type: Output },],
        "cleanSearchOnOpeningChange": [{ type: Output },],
        "clearButtonTextChange": [{ type: Output },],
        "closeOnOutsideClickChange": [{ type: Output },],
        "dataSourceChange": [{ type: Output },],
        "deferRenderingChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "displayExprChange": [{ type: Output },],
        "displayValueChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "fieldTemplateChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "fullScreenChange": [{ type: Output },],
        "groupedChange": [{ type: Output },],
        "groupTemplateChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "inputAttrChange": [{ type: Output },],
        "isValidChange": [{ type: Output },],
        "itemsChange": [{ type: Output },],
        "itemTemplateChange": [{ type: Output },],
        "minSearchLengthChange": [{ type: Output },],
        "nameChange": [{ type: Output },],
        "nextButtonTextChange": [{ type: Output },],
        "noDataTextChange": [{ type: Output },],
        "openedChange": [{ type: Output },],
        "pageLoadingTextChange": [{ type: Output },],
        "pageLoadModeChange": [{ type: Output },],
        "placeholderChange": [{ type: Output },],
        "popupHeightChange": [{ type: Output },],
        "popupWidthChange": [{ type: Output },],
        "positionChange": [{ type: Output },],
        "pulledDownTextChange": [{ type: Output },],
        "pullingDownTextChange": [{ type: Output },],
        "pullRefreshEnabledChange": [{ type: Output },],
        "refreshingTextChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "searchEnabledChange": [{ type: Output },],
        "searchExprChange": [{ type: Output },],
        "searchModeChange": [{ type: Output },],
        "searchPlaceholderChange": [{ type: Output },],
        "searchTimeoutChange": [{ type: Output },],
        "selectedItemChange": [{ type: Output },],
        "shadingChange": [{ type: Output },],
        "showCancelButtonChange": [{ type: Output },],
        "showClearButtonChange": [{ type: Output },],
        "showDataBeforeSearchChange": [{ type: Output },],
        "showPopupTitleChange": [{ type: Output },],
        "stylingModeChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "textChange": [{ type: Output },],
        "titleChange": [{ type: Output },],
        "titleTemplateChange": [{ type: Output },],
        "useNativeScrollingChange": [{ type: Output },],
        "usePopoverChange": [{ type: Output },],
        "validationErrorChange": [{ type: Output },],
        "validationMessageModeChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "valueChangeEventChange": [{ type: Output },],
        "valueExprChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "onBlur": [{ type: Output },],
        "change": [{ type: HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: HostListener, args: ['onBlur', ['$event'],] },],
        "itemsChildren": [{ type: ContentChildren, args: [DxiItemComponent,] },],
    };
    return DxLookupComponent;
}(DxComponent));
export { DxLookupComponent };
var DxLookupModule = (function () {
    function DxLookupModule() {
    }
    DxLookupModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxLookupModule;
}());
export { DxLookupModule };
//# sourceMappingURL=lookup.js.map