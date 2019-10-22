import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxValidator from 'devextreme/ui/validator';
import { DxComponentExtension, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiValidationRuleComponent, DxoAdapterModule, DxiValidationRuleModule } from 'devextreme-angular/ui/nested';

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
 * A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
 */
let DxValidatorComponent = class DxValidatorComponent extends DxComponentExtension {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'validated', emit: 'onValidated' },
            { emit: 'adapterChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'nameChange' },
            { emit: 'validationGroupChange' },
            { emit: 'validationRulesChange' },
            { emit: 'widthChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * An object that specifies what and when to validate, and how to apply the validation result.
     */
    get adapter() {
        return this._getOption('adapter');
    }
    set adapter(value) {
        this._setOption('adapter', value);
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
     * Specifies the widget's height.
     */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /**
     * Specifies the editor name to be used in the validation default messages.
     */
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    /**
     * Specifies the validation group the editor will be related to.
     */
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
    }
    /**
     * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
     */
    get validationRules() {
        return this._getOption('validationRules');
    }
    set validationRules(value) {
        this._setOption('validationRules', value);
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
    get validationRulesChildren() {
        return this._getOption('validationRules');
    }
    set validationRulesChildren(value) {
        this.setChildren('validationRules', value);
    }
    _createInstance(element, options) {
        return new DxValidator(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('validationRules', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('validationRules');
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
DxValidatorComponent.ctorParameters = () => [
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
], DxValidatorComponent.prototype, "adapter", null);
__decorate([
    Input()
], DxValidatorComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxValidatorComponent.prototype, "height", null);
__decorate([
    Input()
], DxValidatorComponent.prototype, "name", null);
__decorate([
    Input()
], DxValidatorComponent.prototype, "validationGroup", null);
__decorate([
    Input()
], DxValidatorComponent.prototype, "validationRules", null);
__decorate([
    Input()
], DxValidatorComponent.prototype, "width", null);
__decorate([
    Output()
], DxValidatorComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "onValidated", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "adapterChange", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "validationGroupChange", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "validationRulesChange", void 0);
__decorate([
    Output()
], DxValidatorComponent.prototype, "widthChange", void 0);
__decorate([
    ContentChildren(DxiValidationRuleComponent)
], DxValidatorComponent.prototype, "validationRulesChildren", null);
DxValidatorComponent = __decorate([
    Component({
        selector: 'dx-validator',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxValidatorComponent);
let DxValidatorModule = class DxValidatorModule {
};
DxValidatorModule = __decorate([
    NgModule({
        imports: [
            DxoAdapterModule,
            DxiValidationRuleModule,
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxValidatorComponent
        ],
        exports: [
            DxValidatorComponent,
            DxoAdapterModule,
            DxiValidationRuleModule,
            DxTemplateModule
        ]
    })
], DxValidatorModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxValidatorComponent, DxValidatorModule };
//# sourceMappingURL=devextreme-angular-ui-validator.js.map
