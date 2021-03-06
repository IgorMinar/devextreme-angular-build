import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxActionSheet from 'devextreme/ui/action_sheet';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxiItemModule } from 'devextreme-angular/ui/nested';

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
/**
 * The ActionSheet widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.
 */
var DxActionSheetComponent = /** @class */ (function (_super) {
    __extends(DxActionSheetComponent, _super);
    function DxActionSheetComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'cancelClick', emit: 'onCancelClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'cancelTextChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'targetChange' },
            { emit: 'titleChange' },
            { emit: 'usePopoverChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxActionSheetComponent.prototype, "cancelText", {
        /**
         * The text displayed in the button that closes the action sheet.
         */
        get: function () {
            return this._getOption('cancelText');
        },
        set: function (value) {
            this._setOption('cancelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "disabled", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "height", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "hint", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "itemHoldTimeout", {
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "items", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "showCancelButton", {
        /**
         * Specifies whether or not to display the Cancel button in action sheet.
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
    Object.defineProperty(DxActionSheetComponent.prototype, "showTitle", {
        /**
         * A Boolean value specifying whether or not the title of the action sheet is visible.
         */
        get: function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "target", {
        /**
         * Specifies the element the action sheet popover points at. Applies only if usePopover is true.
         */
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "title", {
        /**
         * The title of the action sheet.
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
    Object.defineProperty(DxActionSheetComponent.prototype, "usePopover", {
        /**
         * Specifies whether or not to show the action sheet within a Popover widget.
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
    Object.defineProperty(DxActionSheetComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the ActionSheet widget is visible.
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
    Object.defineProperty(DxActionSheetComponent.prototype, "width", {
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
    Object.defineProperty(DxActionSheetComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxActionSheetComponent.prototype._createInstance = function (element, options) {
        return new DxActionSheet(element, options);
    };
    DxActionSheetComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxActionSheetComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxActionSheetComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxActionSheetComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxActionSheetComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxActionSheetComponent.ctorParameters = function () { return [
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
        Input()
    ], DxActionSheetComponent.prototype, "cancelText", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "showCancelButton", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "showTitle", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "target", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "title", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "usePopover", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxActionSheetComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onCancelClick", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onItemHold", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onItemRendered", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "cancelTextChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "showCancelButtonChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "showTitleChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "targetChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "titleChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "usePopoverChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxActionSheetComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxActionSheetComponent.prototype, "itemsChildren", null);
    DxActionSheetComponent = __decorate([
        Component({
            selector: 'dx-action-sheet',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxActionSheetComponent);
    return DxActionSheetComponent;
}(DxComponent));
var DxActionSheetModule = /** @class */ (function () {
    function DxActionSheetModule() {
    }
    DxActionSheetModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxActionSheetComponent
            ],
            exports: [
                DxActionSheetComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxActionSheetModule);
    return DxActionSheetModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxActionSheetComponent, DxActionSheetModule };
//# sourceMappingURL=devextreme-angular-ui-action-sheet.js.map
