import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxValidationSummary from 'devextreme/ui/validation_summary';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
let DxValidationSummaryComponent = class DxValidationSummaryComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
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
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
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
     * Specifies the validation group for which summary should be generated.
     */
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
    }
    get itemsChildren() {
        return this._getOption('items');
    }
    set itemsChildren(value) {
        this.setChildren('items', value);
    }
    _createInstance(element, options) {
        return new DxValidationSummary(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('items', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('items');
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
};
DxValidationSummaryComponent.ctorParameters = () => [
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
let DxValidationSummaryModule = class DxValidationSummaryModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxValidationSummaryComponent, DxValidationSummaryModule };
//# sourceMappingURL=devextreme-angular-ui-validation-summary.js.map
