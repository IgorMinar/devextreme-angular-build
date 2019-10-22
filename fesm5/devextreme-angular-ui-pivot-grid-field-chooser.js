import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, Component, NgModule } from '@angular/core';
import DxPivotGridFieldChooser from 'devextreme/ui/pivot_grid_field_chooser';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxoHeaderFilterModule, DxoTextsModule } from 'devextreme-angular/ui/nested';

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
 * A complementary widget for the PivotGrid that allows you to manage data displayed in the PivotGrid. The field chooser is already integrated in the PivotGrid and can be invoked using the context menu. If you need to continuously display the field chooser near the PivotGrid widget, use the PivotGridFieldChooser widget.
 */
var DxPivotGridFieldChooserComponent = /** @class */ (function (_super) {
    __extends(DxPivotGridFieldChooserComponent, _super);
    function DxPivotGridFieldChooserComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowSearchChange' },
            { emit: 'applyChangesModeChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'layoutChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'stateChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "allowSearch", {
        /**
         * Specifies whether the field chooser allows searching in the "All Fields" section.
         */
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "applyChangesMode", {
        /**
         * Specifies when to apply changes made in the widget to the PivotGrid.
         */
        get: function () {
            return this._getOption('applyChangesMode');
        },
        set: function (value) {
            this._setOption('applyChangesMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "dataSource", {
        /**
         * The data source of a PivotGrid widget.
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "headerFilter", {
        /**
         * Configures the header filter feature.
         */
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "height", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "hint", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "layout", {
        /**
         * Specifies the field chooser layout.
         */
        get: function () {
            return this._getOption('layout');
        },
        set: function (value) {
            this._setOption('layout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "searchTimeout", {
        /**
         * Specifies a delay in milliseconds between when a user finishes typing in the field chooser's search panel, and when the search is executed.
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "state", {
        /**
         * The widget's state.
         */
        get: function () {
            return this._getOption('state');
        },
        set: function (value) {
            this._setOption('state', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "texts", {
        /**
         * Strings that can be changed or localized in the PivotGridFieldChooser widget.
         */
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "visible", {
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
    Object.defineProperty(DxPivotGridFieldChooserComponent.prototype, "width", {
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
    DxPivotGridFieldChooserComponent.prototype._createInstance = function (element, options) {
        return new DxPivotGridFieldChooser(element, options);
    };
    DxPivotGridFieldChooserComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPivotGridFieldChooserComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxPivotGridFieldChooserComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPivotGridFieldChooserComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPivotGridFieldChooserComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPivotGridFieldChooserComponent.ctorParameters = function () { return [
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
    ], DxPivotGridFieldChooserComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "allowSearch", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "applyChangesMode", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "headerFilter", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "layout", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "searchTimeout", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "state", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "texts", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxPivotGridFieldChooserComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "onContextMenuPreparing", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "allowSearchChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "applyChangesModeChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "headerFilterChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "layoutChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "stateChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "textsChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxPivotGridFieldChooserComponent.prototype, "widthChange", void 0);
    DxPivotGridFieldChooserComponent = __decorate([
        Component({
            selector: 'dx-pivot-grid-field-chooser',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxPivotGridFieldChooserComponent);
    return DxPivotGridFieldChooserComponent;
}(DxComponent));
var DxPivotGridFieldChooserModule = /** @class */ (function () {
    function DxPivotGridFieldChooserModule() {
    }
    DxPivotGridFieldChooserModule = __decorate([
        NgModule({
            imports: [
                DxoHeaderFilterModule,
                DxoTextsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxPivotGridFieldChooserComponent
            ],
            exports: [
                DxPivotGridFieldChooserComponent,
                DxoHeaderFilterModule,
                DxoTextsModule,
                DxTemplateModule
            ]
        })
    ], DxPivotGridFieldChooserModule);
    return DxPivotGridFieldChooserModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxPivotGridFieldChooserComponent, DxPivotGridFieldChooserModule };
//# sourceMappingURL=devextreme-angular-ui-pivot-grid-field-chooser.js.map
