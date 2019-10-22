import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxValidator from 'devextreme/ui/validator';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponentExtension, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
var DxValidatorComponent = /** @class */ (function (_super) {
    __extends(DxValidatorComponent, _super);
    function DxValidatorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxValidatorComponent.prototype, "adapter", {
        /**
         * An object that specifies what and when to validate, and how to apply the validation result.
         */
        get: function () {
            return this._getOption('adapter');
        },
        set: function (value) {
            this._setOption('adapter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "height", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "name", {
        /**
         * Specifies the editor name to be used in the validation default messages.
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationGroup", {
        /**
         * Specifies the validation group the editor will be related to.
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationRules", {
        /**
         * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
         */
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "width", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidatorComponent.prototype._createInstance = function (element, options) {
        return new DxValidator(element, options);
    };
    DxValidatorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidatorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('validationRules', changes);
    };
    DxValidatorComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxValidatorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('validationRules');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxValidatorComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxValidatorComponent.ctorParameters = function () { return [
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
    return DxValidatorComponent;
}(DxComponentExtension));
var DxValidatorModule = /** @class */ (function () {
    function DxValidatorModule() {
    }
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
    return DxValidatorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxValidatorComponent, DxValidatorModule };
//# sourceMappingURL=devextreme-angular-ui-validator.js.map
