"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var validator_1 = require("devextreme/ui/validator");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var integration_1 = require("../core/integration");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adapter_1 = require("./nested/adapter");
var validation_rule_dxi_1 = require("./nested/validation-rule-dxi");
var validation_rule_dxi_2 = require("./nested/validation-rule-dxi");
/**
 * A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
 */
var DxValidatorComponent = (function (_super) {
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
        get: /**
             * An object that specifies what and when to validate, and how to apply the validation result.
             */
        function () {
            return this._getOption('adapter');
        },
        set: function (value) {
            this._setOption('adapter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "height", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "name", {
        get: /**
             * Specifies the editor name to be used in the validation default messages.
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationGroup", {
        get: /**
             * Specifies the validation group the editor will be related to.
             */
        function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationRules", {
        get: /**
             * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
             */
        function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "width", {
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
        return new validator_1.default(element, options);
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
    DxValidatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-validator',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxValidatorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxValidatorComponent.propDecorators = {
        "adapter": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "validationGroup": [{ type: core_1.Input },],
        "validationRules": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onValidated": [{ type: core_1.Output },],
        "adapterChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "validationGroupChange": [{ type: core_1.Output },],
        "validationRulesChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "validationRulesChildren": [{ type: core_1.ContentChildren, args: [validation_rule_dxi_2.DxiValidationRuleComponent,] },],
    };
    return DxValidatorComponent;
}(component_1.DxComponentExtension));
exports.DxValidatorComponent = DxValidatorComponent;
var DxValidatorModule = (function () {
    function DxValidatorModule() {
    }
    DxValidatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adapter_1.DxoAdapterModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxValidatorComponent
                    ],
                    exports: [
                        DxValidatorComponent,
                        adapter_1.DxoAdapterModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxValidatorModule;
}());
exports.DxValidatorModule = DxValidatorModule;
//# sourceMappingURL=validator.js.map