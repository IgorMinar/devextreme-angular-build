import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxValidationSummary from 'devextreme/ui/validation_summary';
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
 * A widget for displaying the result of checking validation rules for editors.
 */
var DxValidationSummaryComponent = /** @class */ (function (_super) {
    __extends(DxValidationSummaryComponent, _super);
    function DxValidationSummaryComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'validationGroupChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxValidationSummaryComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxValidationSummaryComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxValidationSummaryComponent.prototype, "items", {
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
    Object.defineProperty(DxValidationSummaryComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxValidationSummaryComponent.prototype, "validationGroup", {
        /**
         * Specifies the validation group for which summary should be generated.
         */
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidationSummaryComponent.prototype._createInstance = function (element, options) {
        return new DxValidationSummary(element, options);
    };
    DxValidationSummaryComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidationSummaryComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('items', changes);
    };
    DxValidationSummaryComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxValidationSummaryComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxValidationSummaryComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxValidationSummaryComponent.ctorParameters = function () { return [
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
    ], DxValidationSummaryComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxValidationSummaryComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxValidationSummaryComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxValidationSummaryComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DxValidationSummaryComponent.prototype, "validationGroup", null);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        Output()
    ], DxValidationSummaryComponent.prototype, "validationGroupChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxValidationSummaryComponent.prototype, "itemsChildren", null);
    DxValidationSummaryComponent = __decorate([
        Component({
            selector: 'dx-validation-summary',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxValidationSummaryComponent);
    return DxValidationSummaryComponent;
}(DxComponent));
var DxValidationSummaryModule = /** @class */ (function () {
    function DxValidationSummaryModule() {
    }
    DxValidationSummaryModule = __decorate([
        NgModule({
            imports: [
                DxiItemModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxValidationSummaryComponent
            ],
            exports: [
                DxValidationSummaryComponent,
                DxiItemModule,
                DxTemplateModule
            ]
        })
    ], DxValidationSummaryModule);
    return DxValidationSummaryModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxValidationSummaryComponent, DxValidationSummaryModule };
//# sourceMappingURL=devextreme-angular-ui-validation-summary.js.map
