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
 * Build date: Fri Sep 20 2019
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdWkvbG9va3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFHWixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBRW5ELE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVuRCxPQUFPLEVBRUgsaUJBQWlCLEVBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQs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QWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDdEMsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztrQ0FHakMsZUFBZSxTQUFDLGdCQUFnQjs7NEJBOXpDckM7RUE0R3VDLFdBQVc7U0FBckMsaUJBQWlCOzs7OztnQkFxNEM3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLDBCQUEwQjtxQkFDM0I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzt5QkFsaEREOztTQW1oRGEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgRHhMb29rdXAgZnJvbSAnZGV2ZXh0cmVtZS91aS9sb29rdXAnO1xyXG5cclxuaW1wb3J0IHsgRHhWYWxpZGF0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBEeG9IaWRlTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvaGlkZSc7XHJcbmltcG9ydCB7IER4b1Nob3dNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9zaG93JztcclxuaW1wb3J0IHsgRHhpSXRlbU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuaW1wb3J0IHsgRHhvUG9zaXRpb25Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9wb3NpdGlvbic7XHJcbmltcG9ydCB7IER4b0F0TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYXQnO1xyXG5pbXBvcnQgeyBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2JvdW5kYXJ5LW9mZnNldCc7XHJcbmltcG9ydCB7IER4b0NvbGxpc2lvbk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2NvbGxpc2lvbic7XHJcbmltcG9ydCB7IER4b015TW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbXknO1xyXG5pbXBvcnQgeyBEeG9PZmZzZXRNb2R1bGUgfSBmcm9tICcuL25lc3RlZC9vZmZzZXQnO1xyXG5cclxuaW1wb3J0IHsgRHhpSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IENVU1RPTV9WQUxVRV9BQ0NFU1NPUl9QUk9WSURFUiA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHhMb29rdXBDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgTG9va3VwIGlzIGEgd2lkZ2V0IHRoYXQgYWxsb3dzIGFuIGVuZCB1c2VyIHRvIHNlYXJjaCBmb3IgYW4gaXRlbSBpbiBhIGNvbGxlY3Rpb24gc2hvd24gaW4gYSBkcm9wLWRvd24gbWVudS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC1sb29rdXAnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBDVVNUT01fVkFMVUVfQUNDRVNTT1JfUFJPVklERVIsXHJcbiAgICAgICAgTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICBJdGVyYWJsZURpZmZlckhlbHBlclxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhMb29rdXBDb21wb25lbnQgZXh0ZW5kcyBEeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIGluc3RhbmNlOiBEeExvb2t1cDtcclxuXHJcbiAgICBAQ29udGVudENoaWxkKER4VmFsaWRhdG9yQ29tcG9uZW50KVxyXG4gICAgdmFsaWRhdG9yOiBEeFZhbGlkYXRvckNvbXBvbmVudDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgd2lkZ2V0IHZpc2liaWxpdHkgYW5pbWF0aW9ucy4gVGhpcyBvYmplY3QgY29udGFpbnMgdHdvIGZpZWxkczogc2hvdyBhbmQgaGlkZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbmltYXRpb24oKTogeyBoaWRlPzogRGV2RXhwcmVzcy5hbmltYXRpb25Db25maWcsIHNob3c/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhbmltYXRpb24nKTtcclxuICAgIH1cclxuICAgIHNldCBhbmltYXRpb24odmFsdWU6IHsgaGlkZT86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnLCBzaG93PzogRGV2RXhwcmVzcy5hbmltYXRpb25Db25maWcgfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYW5pbWF0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBvbiB0aGUgQXBwbHkgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFwcGx5QnV0dG9uVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FwcGx5QnV0dG9uVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcGx5QnV0dG9uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhcHBseUJ1dHRvblRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSB3YXkgYW4gZW5kLXVzZXIgYXBwbGllcyB0aGUgc2VsZWN0ZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYXBwbHlWYWx1ZU1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhcHBseVZhbHVlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFwcGx5VmFsdWVNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2FwcGx5VmFsdWVNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBvbiB0aGUgQ2FuY2VsIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjYW5jZWxCdXR0b25UZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY2FuY2VsQnV0dG9uVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbmNlbEJ1dHRvblRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2FuY2VsQnV0dG9uVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIHdpZGdldCBjbGVhbnMgdGhlIHNlYXJjaCBib3ggd2hlbiB0aGUgcG9wdXAgd2luZG93IGlzIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjbGVhblNlYXJjaE9uT3BlbmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjbGVhblNlYXJjaE9uT3BlbmluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsZWFuU2VhcmNoT25PcGVuaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjbGVhblNlYXJjaE9uT3BlbmluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgb24gdGhlIENsZWFyIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjbGVhckJ1dHRvblRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjbGVhckJ1dHRvblRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBjbGVhckJ1dHRvblRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY2xlYXJCdXR0b25UZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGNsb3NlIHRoZSBkcm9wLWRvd24gbWVudSBpZiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgaXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2xvc2VPbk91dHNpZGVDbGljaygpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Nsb3NlT25PdXRzaWRlQ2xpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBjbG9zZU9uT3V0c2lkZUNsaWNrKHZhbHVlOiBib29sZWFuIHwgRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Nsb3NlT25PdXRzaWRlQ2xpY2snLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgdGhlIHdpZGdldCB0byBkYXRhLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRhdGFTb3VyY2UoKTogRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtIHwgYW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVNvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFTb3VyY2UodmFsdWU6IERldkV4cHJlc3MuZGF0YS5EYXRhU291cmNlIHwgRGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2VPcHRpb25zIHwgc3RyaW5nIHwgQXJyYXk8RGV2RXhwcmVzcy51aS5Db2xsZWN0aW9uV2lkZ2V0SXRlbSB8IGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2RhdGFTb3VyY2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVuZGVyIHRoZSBkcm9wLWRvd24gZmllbGQncyBjb250ZW50IHdoZW4gaXQgaXMgZGlzcGxheWVkLiBJZiBmYWxzZSwgdGhlIGNvbnRlbnQgaXMgcmVuZGVyZWQgaW1tZWRpYXRlbHkuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGVmZXJSZW5kZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGVmZXJSZW5kZXJpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBkZWZlclJlbmRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGVmZXJSZW5kZXJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCByZXNwb25kcyB0byB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc2FibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0YSBmaWVsZCB3aG9zZSB2YWx1ZXMgc2hvdWxkIGJlIGRpc3BsYXllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNwbGF5RXhwcigpOiBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGlzcGxheUV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNwbGF5RXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2Rpc3BsYXlFeHByJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNwbGF5VmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNwbGF5VmFsdWUnKTtcclxuICAgIH1cclxuICAgIHNldCBkaXNwbGF5VmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGlzcGxheVZhbHVlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBpbnB1dCBmaWVsZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaWVsZFRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZmllbGRUZW1wbGF0ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpZWxkVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZmllbGRUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNhbiBiZSBmb2N1c2VkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNTdGF0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c1N0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZm9jdXNTdGF0ZUVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdG8gZGlzcGxheSB0aGUgbG9va3VwIGluIGZ1bGwtc2NyZWVuIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZnVsbFNjcmVlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdmdWxsU2NyZWVuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZnVsbFNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZnVsbFNjcmVlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIEJvb2xlYW4gdmFsdWUgc3BlY2lmeWluZyB3aGV0aGVyIG9yIG5vdCB0byBncm91cCB3aWRnZXQgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZ3JvdXBlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZ3JvdXBlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIGdyb3VwIGNhcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGdyb3VwVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdncm91cFRlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZ3JvdXBUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdncm91cFRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3MgaGVpZ2h0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGVpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBhIGhpbnQgdGhhdCBhcHBlYXJzIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiB0aGUgd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdoaW50Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaGludCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdoaW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgY2hhbmdlcyBpdHMgc3RhdGUgd2hlbiBhIHVzZXIgcGF1c2VzIG9uIGl0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGhvdmVyU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaG92ZXJTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hvdmVyU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBwYXNzZWQgb24gdG8gdGhlIHVuZGVybHlpbmcgSFRNTCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlucHV0QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2lucHV0QXR0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlucHV0QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdpbnB1dEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVkaXRvcidzIHZhbHVlIGlzIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXNWYWxpZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzVmFsaWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2lzVmFsaWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgaXRlbXMgZGlzcGxheWVkIGJ5IHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXRlbXMoKTogQXJyYXk8YW55IHwgeyBkaXNhYmxlZD86IGJvb2xlYW4sIGh0bWw/OiBzdHJpbmcsIHRlbXBsYXRlPzogYW55LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8YW55IHwgeyBkaXNhYmxlZD86IGJvb2xlYW4sIGh0bWw/OiBzdHJpbmcsIHRlbXBsYXRlPzogYW55LCB0ZXh0Pzogc3RyaW5nLCB2aXNpYmxlPzogYm9vbGVhbiB9Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBpdGVtVGVtcGxhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXRlbVRlbXBsYXRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBlbnRlcmVkIGludG8gdGhlIHRleHQgYm94IHRvIGJlZ2luIGEgc2VhcmNoLiBBcHBsaWVzIG9ubHkgaWYgc2VhcmNoRW5hYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pblNlYXJjaExlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pblNlYXJjaExlbmd0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pblNlYXJjaExlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5TZWFyY2hMZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSB1bmRlcmx5aW5nIEhUTUwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgb24gdGhlIGJ1dHRvbiB1c2VkIHRvIGxvYWQgdGhlIG5leHQgcGFnZSBmcm9tIHRoZSBkYXRhIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuZXh0QnV0dG9uVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ25leHRCdXR0b25UZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbmV4dEJ1dHRvblRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmV4dEJ1dHRvblRleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgb3IgSFRNTCBtYXJrdXAgZGlzcGxheWVkIGJ5IHRoZSB3aWRnZXQgaWYgdGhlIGl0ZW0gY29sbGVjdGlvbiBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBub0RhdGFUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbm9EYXRhVGV4dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vRGF0YVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbm9EYXRhVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhlIGRyb3AtZG93biBlZGl0b3IgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdvcGVuZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wZW5lZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgc2hvd24gaW4gdGhlIHB1bGxEb3duIHBhbmVsLCB3aGljaCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgd2lkZ2V0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFnZUxvYWRpbmdUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncGFnZUxvYWRpbmdUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGFnZUxvYWRpbmdUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhZ2VMb2FkaW5nVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgbmV4dCBwYWdlIGlzIGxvYWRlZCB3aGVuIGEgdXNlciBzY3JvbGxzIHRoZSB3aWRnZXQgdG8gdGhlIGJvdHRvbSBvciB3aGVuIHRoZSBcIm5leHRcIiBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWdlTG9hZE1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWdlTG9hZE1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWdlTG9hZE1vZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGFnZUxvYWRNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBieSB0aGUgd2lkZ2V0IHdoZW4gbm90aGluZyBpcyBzZWxlY3RlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncGxhY2Vob2xkZXInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBwb3B1cCBlbGVtZW50J3MgaGVpZ2h0LiBBcHBsaWVzIG9ubHkgaWYgZnVsbFNjcmVlbiBpcyBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwb3B1cEhlaWdodCgpOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncG9wdXBIZWlnaHQnKTtcclxuICAgIH1cclxuICAgIHNldCBwb3B1cEhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BvcHVwSGVpZ2h0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgcG9wdXAgZWxlbWVudCdzIHdpZHRoLiBBcHBsaWVzIG9ubHkgaWYgZnVsbFNjcmVlbiBpcyBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwb3B1cFdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwb3B1cFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcG9wdXBXaWR0aCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BvcHVwV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IGRlZmluaW5nIHdpZGdldCBwb3NpdGlvbmluZyBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBvc2l0aW9uKCk6IERldkV4cHJlc3MucG9zaXRpb25Db25maWcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Bvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcG9zaXRpb24odmFsdWU6IERldkV4cHJlc3MucG9zaXRpb25Db25maWcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Bvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIHB1bGxEb3duIHBhbmVsIHdoZW4gdGhlIHdpZGdldCBpcyBwdWxsZWQgYmVsb3cgdGhlIHJlZnJlc2ggdGhyZXNob2xkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHB1bGxlZERvd25UZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncHVsbGVkRG93blRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBwdWxsZWREb3duVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwdWxsZWREb3duVGV4dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgc2hvd24gaW4gdGhlIHB1bGxEb3duIHBhbmVsIHdoaWxlIHRoZSBsaXN0IGlzIGJlaW5nIHB1bGxlZCBkb3duIHRvIHRoZSByZWZyZXNoIHRocmVzaG9sZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwdWxsaW5nRG93blRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwdWxsaW5nRG93blRleHQnKTtcclxuICAgIH1cclxuICAgIHNldCBwdWxsaW5nRG93blRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncHVsbGluZ0Rvd25UZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgc3VwcG9ydHMgdGhlIFwicHVsbCBkb3duIHRvIHJlZnJlc2hcIiBnZXN0dXJlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHB1bGxSZWZyZXNoRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwdWxsUmVmcmVzaEVuYWJsZWQnKTtcclxuICAgIH1cclxuICAgIHNldCBwdWxsUmVmcmVzaEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3B1bGxSZWZyZXNoRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgZGlzcGxheWVkIGluIHRoZSBwdWxsRG93biBwYW5lbCB3aGlsZSB0aGUgd2lkZ2V0IGlzIGJlaW5nIHJlZnJlc2hlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWZyZXNoaW5nVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlZnJlc2hpbmdUZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcmVmcmVzaGluZ1RleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVmcmVzaGluZ1RleHQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgc2VhcmNoIGJveCBpcyB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlYXJjaEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VhcmNoRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlYXJjaEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlYXJjaEVuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIGEgZGF0YSBzb3VyY2UgaXRlbSBmaWVsZCBvciBhbiBleHByZXNzaW9uIHdob3NlIHZhbHVlIGlzIGNvbXBhcmVkIHRvIHRoZSBzZWFyY2ggY3JpdGVyaW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlYXJjaEV4cHIoKTogRnVuY3Rpb24gfCBBcnJheTxGdW5jdGlvbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlYXJjaEV4cHInKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hFeHByKHZhbHVlOiBGdW5jdGlvbiB8IEFycmF5PEZ1bmN0aW9uPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VhcmNoRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBjb21wYXJpc29uIG9wZXJhdGlvbiB1c2VkIHRvIHNlYXJjaCB3aWRnZXQgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VhcmNoTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlYXJjaE1vZGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzZWFyY2hNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlYXJjaE1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgdGhhdCBpcyBwcm92aWRlZCBhcyBhIGhpbnQgaW4gdGhlIGxvb2t1cCdzIHNlYXJjaCBiYXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VhcmNoUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWFyY2hQbGFjZWhvbGRlcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlYXJjaFBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NlYXJjaFBsYWNlaG9sZGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdGltZSBkZWxheSwgaW4gbWlsbGlzZWNvbmRzLCBhZnRlciB0aGUgbGFzdCBjaGFyYWN0ZXIgaGFzIGJlZW4gdHlwZWQgaW4sIGJlZm9yZSBhIHNlYXJjaCBpcyBleGVjdXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWFyY2hUaW1lb3V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2VhcmNoVGltZW91dCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlYXJjaFRpbWVvdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VhcmNoVGltZW91dCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzZWxlY3RlZEl0ZW0nKTtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZEl0ZW0odmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VsZWN0ZWRJdGVtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIHNoYWRlIHRoZSBjb250YWluZXIgd2hlbiB0aGUgbG9va3VwIGlzIGFjdGl2ZS4gQXBwbGllcyBvbmx5IGlmIHVzZVBvcG92ZXIgaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hhZGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzaGFkaW5nJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hhZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hhZGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBDYW5jZWwgYnV0dG9uIGluIHRoZSBsb29rdXAgd2luZG93LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dDYW5jZWxCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NhbmNlbEJ1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNob3dDYW5jZWxCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dDYW5jZWxCdXR0b24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgdGhlIENsZWFyIGJ1dHRvbiBpbiB0aGUgbG9va3VwIHdpbmRvdy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q2xlYXJCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd0NsZWFyQnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0NsZWFyQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q2xlYXJCdXR0b24nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgZGlzcGxheXMgdW5maWx0ZXJlZCB2YWx1ZXMgdW50aWwgYSB1c2VyIHR5cGVzIGEgbnVtYmVyIG9mIGNoYXJhY3RlcnMgZXhjZWVkaW5nIHRoZSBtaW5TZWFyY2hMZW5ndGggb3B0aW9uIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dEYXRhQmVmb3JlU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dEYXRhQmVmb3JlU2VhcmNoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd0RhdGFCZWZvcmVTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3Nob3dEYXRhQmVmb3JlU2VhcmNoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgdGhlIHRpdGxlIGluIHRoZSBwb3B1cCB3aW5kb3cuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd1BvcHVwVGl0bGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1BvcHVwVGl0bGUnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93UG9wdXBUaXRsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2hvd1BvcHVwVGl0bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgd2lkZ2V0J3MgdGV4dCBmaWVsZCBpcyBzdHlsZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3R5bGluZ01vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzdHlsaW5nTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxpbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3N0eWxpbmdNb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50IHdoZW4gdGhlIFRhYiBrZXkgaXMgdXNlZCBmb3IgbmF2aWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RhYkluZGV4Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGFiSW5kZXgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlYWQtb25seSBvcHRpb24gdGhhdCBob2xkcyB0aGUgdGV4dCBkaXNwbGF5ZWQgYnkgdGhlIHdpZGdldCBpbnB1dCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0ZXh0JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgbG9va3VwIHdpbmRvdy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpdGxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndGl0bGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgdGl0bGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGl0bGVUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RpdGxlVGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZVRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3RpdGxlVGVtcGxhdGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWRnZXQgdXNlcyBuYXRpdmUgc2Nyb2xsaW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHVzZU5hdGl2ZVNjcm9sbGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VOYXRpdmVTY3JvbGxpbmcnKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VOYXRpdmVTY3JvbGxpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3VzZU5hdGl2ZVNjcm9sbGluZycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2hvdyBsb29rdXAgY29udGVudHMgaW4gYSBQb3BvdmVyIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1c2VQb3BvdmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3VzZVBvcG92ZXInKTtcclxuICAgIH1cclxuICAgIHNldCB1c2VQb3BvdmVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1c2VQb3BvdmVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsaWRhdGlvbiBlcnJvciB3aGVuIHVzaW5nIGEgY3VzdG9tIHZhbGlkYXRpb24gZW5naW5lLiBTaG91bGQgYmUgY2hhbmdlZCBhdCBydW50aW1lIGFsb25nIHdpdGggdGhlIGlzVmFsaWQgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25FcnJvcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25FcnJvcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25FcnJvcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uRXJyb3InLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGhvdyB0aGUgbWVzc2FnZSBhYm91dCB0aGUgdmFsaWRhdGlvbiBydWxlcyB0aGF0IGFyZSBub3Qgc2F0aXNmaWVkIGJ5IHRoaXMgZWRpdG9yJ3MgdmFsdWUgaXMgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25NZXNzYWdlTW9kZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIE1heSBiZSBhbiBvYmplY3QgaWYgZGF0YVNvdXJjZSBjb250YWlucyBvYmplY3RzIGFuZCB2YWx1ZUV4cHIgaXMgbm90IHNldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBET00gZXZlbnRzIGFmdGVyIHdoaWNoIHRoZSB3aWRnZXQncyB2YWx1ZSBzaG91bGQgYmUgdXBkYXRlZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUNoYW5nZUV2ZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsdWVDaGFuZ2VFdmVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlQ2hhbmdlRXZlbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsdWVDaGFuZ2VFdmVudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hpY2ggZGF0YSBmaWVsZCBwcm92aWRlcyB1bmlxdWUgdmFsdWVzIHRvIHRoZSB3aWRnZXQncyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZUV4cHIoKTogRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbHVlRXhwcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlRXhwcih2YWx1ZTogRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlRXhwcicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb25jZSB0aGUgZHJvcC1kb3duIGVkaXRvciBpcyBjbG9zZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgaW4gSmF2YVNjcmlwdCBmcmFtZXdvcmtzIHRvIHNhdmUgdGhlIHdpZGdldCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYSBsaXN0IGl0ZW0gaXMgY2xpY2tlZCBvciB0YXBwZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb25jZSB0aGUgZHJvcC1kb3duIGVkaXRvciBpcyBvcGVuZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgbmV4dCBwYWdlIGlzIGxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uUGFnZUxvYWRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIFwicHVsbCB0byByZWZyZXNoXCIgZ2VzdHVyZSBpcyBwZXJmb3JtZWQgb24gdGhlIGRyb3AtZG93biBpdGVtIGxpc3QuIFN1cHBvcnRlZCBpbiBtb2JpbGUgdGhlbWVzIG9ubHkuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblB1bGxSZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBlYWNoIHNjcm9sbCBnZXN0dXJlIHBlcmZvcm1lZCBvbiB0aGUgZHJvcC1kb3duIGl0ZW0gbGlzdC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGEgbGlzdCBpdGVtIGlzIHNlbGVjdGVkIG9yIHNlbGVjdGlvbiBpcyBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgZHJvcC1kb3duIGxpc3QncyB0aXRsZSBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uVGl0bGVSZW5kZXJlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHdpZGdldCdzIHZhbHVlIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhY2Nlc3NLZXlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhY2Nlc3NLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbmltYXRpb25DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBhbmltYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGhpZGU/OiBEZXZFeHByZXNzLmFuaW1hdGlvbkNvbmZpZywgc2hvdz86IERldkV4cHJlc3MuYW5pbWF0aW9uQ29uZmlnIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYXBwbHlCdXR0b25UZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYXBwbHlCdXR0b25UZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFwcGx5VmFsdWVNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYXBwbHlWYWx1ZU1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2FuY2VsQnV0dG9uVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNhbmNlbEJ1dHRvblRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2xlYW5TZWFyY2hPbk9wZW5pbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjbGVhblNlYXJjaE9uT3BlbmluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgY2xlYXJCdXR0b25UZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2xlYXJCdXR0b25UZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNsb3NlT25PdXRzaWRlQ2xpY2tDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjbG9zZU9uT3V0c2lkZUNsaWNrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGRhdGFTb3VyY2VDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkYXRhU291cmNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5kYXRhLkRhdGFTb3VyY2UgfCBEZXZFeHByZXNzLmRhdGEuRGF0YVNvdXJjZU9wdGlvbnMgfCBzdHJpbmcgfCBBcnJheTxEZXZFeHByZXNzLnVpLkNvbGxlY3Rpb25XaWRnZXRJdGVtIHwgYW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkZWZlclJlbmRlcmluZ0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRlZmVyUmVuZGVyaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNhYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc2FibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBkaXNwbGF5RXhwckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGRpc3BsYXlFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzcGxheVZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZGlzcGxheVZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZmllbGRUZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZpZWxkVGVtcGxhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9jdXNTdGF0ZUVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZnVsbFNjcmVlbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZ1bGxTY3JlZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGdyb3VwZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBncm91cGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBncm91cFRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZ3JvdXBUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoZWlnaHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBoaW50Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGludENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBob3ZlclN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpbnB1dEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBpbnB1dEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaXNWYWxpZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGlzVmFsaWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGl0ZW1zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxhbnkgfCB7IGRpc2FibGVkPzogYm9vbGVhbiwgaHRtbD86IHN0cmluZywgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHZpc2libGU/OiBib29sZWFuIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGl0ZW1UZW1wbGF0ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1UZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtaW5TZWFyY2hMZW5ndGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBtaW5TZWFyY2hMZW5ndGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbmFtZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5hbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbmV4dEJ1dHRvblRleHRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBuZXh0QnV0dG9uVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBub0RhdGFUZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbm9EYXRhVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBvcGVuZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvcGVuZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBhZ2VMb2FkaW5nVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBhZ2VMb2FkaW5nVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwYWdlTG9hZE1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwYWdlTG9hZE1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcGxhY2Vob2xkZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwbGFjZWhvbGRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwb3B1cEhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvcHVwSGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcG9wdXBXaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvcHVwV2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwb3NpdGlvbkNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGV2RXhwcmVzcy5wb3NpdGlvbkNvbmZpZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwdWxsZWREb3duVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHB1bGxlZERvd25UZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHB1bGxpbmdEb3duVGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHB1bGxpbmdEb3duVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBwdWxsUmVmcmVzaEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwdWxsUmVmcmVzaEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJlZnJlc2hpbmdUZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVmcmVzaGluZ1RleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcnRsRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJ0bEVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzZWFyY2hFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoRXhwckNoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uIHwgQXJyYXk8RnVuY3Rpb24+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaE1vZGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlYXJjaFBsYWNlaG9sZGVyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoUGxhY2Vob2xkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VhcmNoVGltZW91dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaFRpbWVvdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2VsZWN0ZWRJdGVtQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNoYWRpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaGFkaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q2FuY2VsQnV0dG9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NhbmNlbEJ1dHRvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd0NsZWFyQnV0dG9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NsZWFyQnV0dG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93RGF0YUJlZm9yZVNlYXJjaENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dEYXRhQmVmb3JlU2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93UG9wdXBUaXRsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dQb3B1cFRpdGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzdHlsaW5nTW9kZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN0eWxpbmdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGl0bGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0aXRsZVRlbXBsYXRlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGl0bGVUZW1wbGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB1c2VOYXRpdmVTY3JvbGxpbmdDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VOYXRpdmVTY3JvbGxpbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHVzZVBvcG92ZXJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB1c2VQb3BvdmVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWxpZGF0aW9uRXJyb3JDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWxpZGF0aW9uRXJyb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsaWRhdGlvbk1lc3NhZ2VNb2RlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsaWRhdGlvbk1lc3NhZ2VNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbHVlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2VFdmVudENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlRXZlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVFeHByQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVFeHByQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcblxyXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3ZhbHVlQ2hhbmdlJywgWyckZXZlbnQnXSkgY2hhbmdlKF8pIHsgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignb25CbHVyJywgWyckZXZlbnQnXSkgdG91Y2hlZCA9IChfKSA9PiB7fTtcclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihEeGlJdGVtQ29tcG9uZW50KVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHRlbXBsYXRlSG9zdDogRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3dhdGNoZXJIZWxwZXI6IFdhdGNoZXJIZWxwZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2lkaDogSXRlcmFibGVEaWZmZXJIZWxwZXIsIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXHJcbiAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSkge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBuZ1pvbmUsIHRlbXBsYXRlSG9zdCwgX3dhdGNoZXJIZWxwZXIsIHRyYW5zZmVyU3RhdGUsIHBsYXRmb3JtSWQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdjbG9zZWQnLCBlbWl0OiAnb25DbG9zZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2l0ZW1DbGljaycsIGVtaXQ6ICdvbkl0ZW1DbGljaycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdvcGVuZWQnLCBlbWl0OiAnb25PcGVuZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAncGFnZUxvYWRpbmcnLCBlbWl0OiAnb25QYWdlTG9hZGluZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdwdWxsUmVmcmVzaCcsIGVtaXQ6ICdvblB1bGxSZWZyZXNoJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3Njcm9sbCcsIGVtaXQ6ICdvblNjcm9sbCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdzZWxlY3Rpb25DaGFuZ2VkJywgZW1pdDogJ29uU2VsZWN0aW9uQ2hhbmdlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd0aXRsZVJlbmRlcmVkJywgZW1pdDogJ29uVGl0bGVSZW5kZXJlZCcgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICd2YWx1ZUNoYW5nZWQnLCBlbWl0OiAnb25WYWx1ZUNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbmltYXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FwcGx5QnV0dG9uVGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYXBwbHlWYWx1ZU1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NhbmNlbEJ1dHRvblRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2NsZWFuU2VhcmNoT25PcGVuaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjbGVhckJ1dHRvblRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Nsb3NlT25PdXRzaWRlQ2xpY2tDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RhdGFTb3VyY2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2RlZmVyUmVuZGVyaW5nQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdkaXNhYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzcGxheUV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2Rpc3BsYXlWYWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZpZWxkVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2ZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmdWxsU2NyZWVuQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdncm91cFRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hpbnRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hvdmVyU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpbnB1dEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2lzVmFsaWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpdGVtVGVtcGxhdGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ21pblNlYXJjaExlbmd0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmFtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmV4dEJ1dHRvblRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ25vRGF0YVRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ29wZW5lZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncGFnZUxvYWRpbmdUZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwYWdlTG9hZE1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3BsYWNlaG9sZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwb3B1cEhlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncG9wdXBXaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncG9zaXRpb25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3B1bGxlZERvd25UZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdwdWxsaW5nRG93blRleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3B1bGxSZWZyZXNoRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVmcmVzaGluZ1RleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaEV4cHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaE1vZGVDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NlYXJjaFBsYWNlaG9sZGVyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWFyY2hUaW1lb3V0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzZWxlY3RlZEl0ZW1DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NoYWRpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDYW5jZWxCdXR0b25DaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDbGVhckJ1dHRvbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2hvd0RhdGFCZWZvcmVTZWFyY2hDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dQb3B1cFRpdGxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdzdHlsaW5nTW9kZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RpdGxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0aXRsZVRlbXBsYXRlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd1c2VOYXRpdmVTY3JvbGxpbmdDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3VzZVBvcG92ZXJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbGlkYXRpb25FcnJvckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsaWRhdGlvbk1lc3NhZ2VNb2RlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2VFdmVudENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVFeHByQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb25CbHVyJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4TG9va3VwKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWxwZXIubG9ja2VkVmFsdWVDaGFuZ2VFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5jaGFuZ2UgPSBmbjsgfVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy50b3VjaGVkID0gZm47IH1cclxuXHJcbiAgICBfY3JlYXRlV2lkZ2V0KGVsZW1lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLl9jcmVhdGVXaWRnZXQoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbignZm9jdXNPdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGVscGVyLmZpcmVOZ0V2ZW50KCdvbkJsdXInLCBbZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2RhdGFTb3VyY2UnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnaXRlbXMnLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2hhbmdlcygnc2VhcmNoRXhwcicsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ2RhdGFTb3VyY2UnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnaXRlbXMnKTtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnc2VhcmNoRXhwcicpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoZXJIZWxwZXIuY2hlY2tXYXRjaGVycygpO1xyXG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xyXG4gICAgICAgIHN1cGVyLmNsZWFyQ2hhbmdlZE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBpc1NldHVwID0gdGhpcy5faWRoLnNldHVwU2luZ2xlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGhpcy5faWRoLmdldENoYW5nZXMobmFtZSwgdmFsdWUpICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNTZXR1cCB8fCBpc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuX3NldE9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmNyZWF0ZUluc3RhbmNlT25Jbml0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5jcmVhdGVJbnN0YW5jZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIER4b0FuaW1hdGlvbk1vZHVsZSxcclxuICAgIER4b0hpZGVNb2R1bGUsXHJcbiAgICBEeG9TaG93TW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b1Bvc2l0aW9uTW9kdWxlLFxyXG4gICAgRHhvQXRNb2R1bGUsXHJcbiAgICBEeG9Cb3VuZGFyeU9mZnNldE1vZHVsZSxcclxuICAgIER4b0NvbGxpc2lvbk1vZHVsZSxcclxuICAgIER4b015TW9kdWxlLFxyXG4gICAgRHhvT2Zmc2V0TW9kdWxlLFxyXG4gICAgRHhJbnRlZ3JhdGlvbk1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGUsXHJcbiAgICBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeExvb2t1cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhMb29rdXBDb21wb25lbnQsXHJcbiAgICBEeG9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBEeG9IaWRlTW9kdWxlLFxyXG4gICAgRHhvU2hvd01vZHVsZSxcclxuICAgIER4aUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9Qb3NpdGlvbk1vZHVsZSxcclxuICAgIER4b0F0TW9kdWxlLFxyXG4gICAgRHhvQm91bmRhcnlPZmZzZXRNb2R1bGUsXHJcbiAgICBEeG9Db2xsaXNpb25Nb2R1bGUsXHJcbiAgICBEeG9NeU1vZHVsZSxcclxuICAgIER4b09mZnNldE1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeExvb2t1cE1vZHVsZSB7IH1cclxuIl19