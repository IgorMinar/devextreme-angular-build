/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import DxForm from 'devextreme/ui/form';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoColCountByScreenModule } from './nested/col-count-by-screen';
import { DxiItemModule } from './nested/item-dxi';
import { DxoLabelModule } from './nested/label';
import { DxiValidationRuleModule } from './nested/validation-rule-dxi';
import { DxoTabPanelOptionsModule } from './nested/tab-panel-options';
import { DxiTabModule } from './nested/tab-dxi';
import { DxoButtonOptionsModule } from './nested/button-options';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The Form widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
 */
var DxFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxFormComponent, _super);
    function DxFormComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editorEnterKey', emit: 'onEditorEnterKey' },
            { subscribe: 'fieldDataChanged', emit: 'onFieldDataChanged' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'alignItemLabelsChange' },
            { emit: 'alignItemLabelsInAllGroupsChange' },
            { emit: 'colCountChange' },
            { emit: 'colCountByScreenChange' },
            { emit: 'customizeItemChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'formDataChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'labelLocationChange' },
            { emit: 'minColWidthChange' },
            { emit: 'optionalMarkChange' },
            { emit: 'readOnlyChange' },
            { emit: 'requiredMarkChange' },
            { emit: 'requiredMessageChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showColonAfterLabelChange' },
            { emit: 'showOptionalMarkChange' },
            { emit: 'showRequiredMarkChange' },
            { emit: 'showValidationSummaryChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFormComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxFormComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabels", {
        /**
         * Specifies whether or not all root item labels are aligned.
         */
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabelsInAllGroups", {
        /**
         * Specifies whether or not item labels in all groups are aligned.
         */
        get: function () {
            return this._getOption('alignItemLabelsInAllGroups');
        },
        set: function (value) {
            this._setOption('alignItemLabelsInAllGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCount", {
        /**
         * The count of columns in the form layout.
         */
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCountByScreen", {
        /**
         * Specifies dependency between the screen factor and the count of columns in the form layout.
         */
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "customizeItem", {
        /**
         * Specifies a function that customizes a form item after it has been created.
         */
        get: function () {
            return this._getOption('customizeItem');
        },
        set: function (value) {
            this._setOption('customizeItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFormComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "formData", {
        /**
         * Provides the Form's data. Gets updated every time form fields change.
         */
        get: function () {
            return this._getOption('formData');
        },
        set: function (value) {
            this._setOption('formData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "height", {
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
    Object.defineProperty(DxFormComponent.prototype, "hint", {
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
    Object.defineProperty(DxFormComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "items", {
        /**
         * Holds an array of form items.
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
    Object.defineProperty(DxFormComponent.prototype, "labelLocation", {
        /**
         * Specifies the location of a label against the editor.
         */
        get: function () {
            return this._getOption('labelLocation');
        },
        set: function (value) {
            this._setOption('labelLocation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "minColWidth", {
        /**
         * The minimum column width used for calculating column count in the form layout.
         */
        get: function () {
            return this._getOption('minColWidth');
        },
        set: function (value) {
            this._setOption('minColWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "optionalMark", {
        /**
         * The text displayed for optional fields.
         */
        get: function () {
            return this._getOption('optionalMark');
        },
        set: function (value) {
            this._setOption('optionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "readOnly", {
        /**
         * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
         */
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMark", {
        /**
         * The text displayed for required fields.
         */
        get: function () {
            return this._getOption('requiredMark');
        },
        set: function (value) {
            this._setOption('requiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMessage", {
        /**
         * Specifies the message that is shown for end-users if a required field value is not specified.
         */
        get: function () {
            return this._getOption('requiredMessage');
        },
        set: function (value) {
            this._setOption('requiredMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "screenByWidth", {
        /**
         * Specifies a function that categorizes screens by their width.
         */
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "scrollingEnabled", {
        /**
         * A Boolean value specifying whether to enable or disable form scrolling.
         */
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showColonAfterLabel", {
        /**
         * Specifies whether or not a colon is displayed at the end of form labels.
         */
        get: function () {
            return this._getOption('showColonAfterLabel');
        },
        set: function (value) {
            this._setOption('showColonAfterLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showOptionalMark", {
        /**
         * Specifies whether or not the optional mark is displayed for optional fields.
         */
        get: function () {
            return this._getOption('showOptionalMark');
        },
        set: function (value) {
            this._setOption('showOptionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showRequiredMark", {
        /**
         * Specifies whether or not the required mark is displayed for required fields.
         */
        get: function () {
            return this._getOption('showRequiredMark');
        },
        set: function (value) {
            this._setOption('showRequiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showValidationSummary", {
        /**
         * Specifies whether or not the total validation summary is displayed on the form.
         */
        get: function () {
            return this._getOption('showValidationSummary');
        },
        set: function (value) {
            this._setOption('showValidationSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFormComponent.prototype, "validationGroup", {
        /**
         * Gives a name to the internal validation group.
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
    Object.defineProperty(DxFormComponent.prototype, "visible", {
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
    Object.defineProperty(DxFormComponent.prototype, "width", {
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
    Object.defineProperty(DxFormComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxFormComponent.prototype._createInstance = function (element, options) {
        return new DxForm(element, options);
    };
    DxFormComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFormComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('items', changes);
    };
    DxFormComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFormComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxFormComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "accessKey", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "activeStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "alignItemLabels", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "alignItemLabelsInAllGroups", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "colCount", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "colCountByScreen", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxFormComponent.prototype, "customizeItem", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "elementAttr", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "focusStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "formData", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "height", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "hoverStateEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], DxFormComponent.prototype, "items", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "labelLocation", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxFormComponent.prototype, "minColWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "optionalMark", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "readOnly", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "requiredMark", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "requiredMessage", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "rtlEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxFormComponent.prototype, "screenByWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "scrollingEnabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "showColonAfterLabel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "showOptionalMark", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "showRequiredMark", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "showValidationSummary", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], DxFormComponent.prototype, "tabIndex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxFormComponent.prototype, "validationGroup", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], DxFormComponent.prototype, "visible", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "width", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "onContentReady", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "onDisposing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "onEditorEnterKey", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "onFieldDataChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "onInitialized", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "onOptionChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "accessKeyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "activeStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "alignItemLabelsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "alignItemLabelsInAllGroupsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "colCountChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "colCountByScreenChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "customizeItemChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "disabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "elementAttrChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "focusStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "formDataChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "heightChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "hintChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "hoverStateEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "itemsChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "labelLocationChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "minColWidthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "optionalMarkChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "readOnlyChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "requiredMarkChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "requiredMessageChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "rtlEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "screenByWidthChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "scrollingEnabledChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "showColonAfterLabelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "showOptionalMarkChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "showRequiredMarkChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "showValidationSummaryChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "tabIndexChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "validationGroupChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "visibleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxFormComponent.prototype, "widthChange", void 0);
    tslib_1.__decorate([
        ContentChildren(DxiItemComponent),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxFormComponent.prototype, "itemsChildren", null);
    DxFormComponent = tslib_1.__decorate([
        Component({
            selector: 'dx-form',
            template: '',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        tslib_1.__param(7, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, NgZone, DxTemplateHost,
            WatcherHelper,
            IterableDifferHelper, NestedOptionHost,
            TransferState, Object])
    ], DxFormComponent);
    return DxFormComponent;
}(DxComponent));
export { DxFormComponent };
var DxFormModule = /** @class */ (function () {
    function DxFormModule() {
    }
    DxFormModule = tslib_1.__decorate([
        NgModule({
            imports: [
                DxoColCountByScreenModule,
                DxiItemModule,
                DxoLabelModule,
                DxiValidationRuleModule,
                DxoTabPanelOptionsModule,
                DxiTabModule,
                DxoButtonOptionsModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxFormComponent
            ],
            exports: [
                DxFormComponent,
                DxoColCountByScreenModule,
                DxiItemModule,
                DxoLabelModule,
                DxiValidationRuleModule,
                DxoTabPanelOptionsModule,
                DxiTabModule,
                DxoButtonOptionsModule,
                DxTemplateModule
            ]
        })
    ], DxFormModule);
    return DxFormModule;
}());
export { DxFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQVlwQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUVOLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUlaLGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxNQUFNLE1BQU0sb0JBQW9CLENBQUM7QUFHeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdC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cUIvQztTQXJxQlksZUFBZTtBQW1zQjVCO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBNUJ4QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AseUJBQXlCO2dCQUN6QixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsdUJBQXVCO2dCQUN2Qix3QkFBd0I7Z0JBQ3hCLFlBQVk7Z0JBQ1osc0JBQXNCO2dCQUN0QixtQkFBbUI7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsMEJBQTBCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGVBQWU7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZUFBZTtnQkFDZix5QkFBeUI7Z0JBQ3pCLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCx1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsWUFBWTtnQkFDWixzQkFBc0I7Z0JBQ3RCLGdCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4Rm9ybSBmcm9tICdkZXZleHRyZW1lL3VpL2Zvcm0nO1xyXG5cclxuXHJcbmltcG9ydCB7IER4Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeFRlbXBsYXRlSG9zdCB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUtaG9zdCc7XHJcbmltcG9ydCB7IER4SW50ZWdyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ludGVncmF0aW9uJztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgV2F0Y2hlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvd2F0Y2hlci1oZWxwZXInO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlckhlbHBlciB9IGZyb20gJy4uL2NvcmUvaXRlcmFibGUtZGlmZmVyLWhlbHBlcic7XHJcblxyXG5pbXBvcnQgeyBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvY29sLWNvdW50LWJ5LXNjcmVlbic7XHJcbmltcG9ydCB7IER4aUl0ZW1Nb2R1bGUgfSBmcm9tICcuL25lc3RlZC9pdGVtLWR4aSc7XHJcbmltcG9ydCB7IER4b0xhYmVsTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvbGFiZWwnO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5pbXBvcnQgeyBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUgfSBmcm9tICcuL25lc3RlZC90YWItcGFuZWwtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aVRhYk1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3RhYi1keGknO1xyXG5pbXBvcnQgeyBEeG9CdXR0b25PcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9uZXN0ZWQvYnV0dG9uLW9wdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgRHhpSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmVzdGVkL2l0ZW0tZHhpJztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9ybSB3aWRnZXQgcmVwcmVzZW50cyBmaWVsZHMgb2YgYSBkYXRhIG9iamVjdCBhcyBhIGNvbGxlY3Rpb24gb2YgbGFiZWwtZWRpdG9yIHBhaXJzLiBUaGVzZSBwYWlycyBjYW4gYmUgYXJyYW5nZWQgaW4gc2V2ZXJhbCBncm91cHMsIHRhYnMgYW5kIGNvbHVtbnMuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHgtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgSXRlcmFibGVEaWZmZXJIZWxwZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Rm9ybUNvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4Rm9ybTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNob3J0Y3V0IGtleSB0aGF0IHNldHMgZm9jdXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdhY2Nlc3NLZXknKTtcclxuICAgIH1cclxuICAgIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWNjZXNzS2V5JywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWN0aXZlU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FjdGl2ZVN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFjdGl2ZVN0YXRlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWN0aXZlU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCBhbGwgcm9vdCBpdGVtIGxhYmVscyBhcmUgYWxpZ25lZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhbGlnbkl0ZW1MYWJlbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYWxpZ25JdGVtTGFiZWxzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhbGlnbkl0ZW1MYWJlbHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IGl0ZW0gbGFiZWxzIGluIGFsbCBncm91cHMgYXJlIGFsaWduZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGlnbkl0ZW1MYWJlbHNJbkFsbEdyb3Vwcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvdW50IG9mIGNvbHVtbnMgaW4gdGhlIGZvcm0gbGF5b3V0LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbENvdW50KCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sQ291bnQnKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xDb3VudCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xDb3VudCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgZGVwZW5kZW5jeSBiZXR3ZWVuIHRoZSBzY3JlZW4gZmFjdG9yIGFuZCB0aGUgY291bnQgb2YgY29sdW1ucyBpbiB0aGUgZm9ybSBsYXlvdXQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sQ291bnRCeVNjcmVlbigpOiB7IGxnPzogbnVtYmVyLCBtZD86IG51bWJlciwgc20/OiBudW1iZXIsIHhzPzogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbENvdW50QnlTY3JlZW4nKTtcclxuICAgIH1cclxuICAgIHNldCBjb2xDb3VudEJ5U2NyZWVuKHZhbHVlOiB7IGxnPzogbnVtYmVyLCBtZD86IG51bWJlciwgc20/OiBudW1iZXIsIHhzPzogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbENvdW50QnlTY3JlZW4nLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgZnVuY3Rpb24gdGhhdCBjdXN0b21pemVzIGEgZm9ybSBpdGVtIGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY3VzdG9taXplSXRlbSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY3VzdG9taXplSXRlbScpO1xyXG4gICAgfVxyXG4gICAgc2V0IGN1c3RvbWl6ZUl0ZW0odmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjdXN0b21pemVJdGVtJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3aWRnZXQgcmVzcG9uZHMgdG8gdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdkaXNhYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHdpZGdldCdzIHJvb3QgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBlbGVtZW50QXR0cigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2VsZW1lbnRBdHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZWxlbWVudEF0dHIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZWxlbWVudEF0dHInLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgZm9jdXNlZCB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvY3VzU3RhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXNTdGF0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ZvY3VzU3RhdGVFbmFibGVkJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3ZpZGVzIHRoZSBGb3JtJ3MgZGF0YS4gR2V0cyB1cGRhdGVkIGV2ZXJ5IHRpbWUgZm9ybSBmaWVsZHMgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGZvcm1EYXRhKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZm9ybURhdGEnKTtcclxuICAgIH1cclxuICAgIHNldCBmb3JtRGF0YSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdmb3JtRGF0YScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgYSBoaW50IHRoYXQgYXBwZWFycyB3aGVuIGEgdXNlciBwYXVzZXMgb24gdGhlIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaGludCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaGludCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGNoYW5nZXMgaXRzIHN0YXRlIHdoZW4gYSB1c2VyIHBhdXNlcyBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3ZlclN0YXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhvdmVyU3RhdGVFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdob3ZlclN0YXRlRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyBhbiBhcnJheSBvZiBmb3JtIGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGl0ZW1zKCk6IEFycmF5PERldkV4cHJlc3MudWkuZHhGb3JtU2ltcGxlSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtR3JvdXBJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1UYWJiZWRJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1FbXB0eUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUJ1dHRvbkl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4Rm9ybVNpbXBsZUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUdyb3VwSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtVGFiYmVkSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtRW1wdHlJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1CdXR0b25JdGVtPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBsb2NhdGlvbiBvZiBhIGxhYmVsIGFnYWluc3QgdGhlIGVkaXRvci5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsYWJlbExvY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbGFiZWxMb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhYmVsTG9jYXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbGFiZWxMb2NhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWluaW11bSBjb2x1bW4gd2lkdGggdXNlZCBmb3IgY2FsY3VsYXRpbmcgY29sdW1uIGNvdW50IGluIHRoZSBmb3JtIGxheW91dC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5Db2xXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ21pbkNvbFdpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluQ29sV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWluQ29sV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgZGlzcGxheWVkIGZvciBvcHRpb25hbCBmaWVsZHMuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgb3B0aW9uYWxNYXJrKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignb3B0aW9uYWxNYXJrJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3B0aW9uYWxNYXJrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ29wdGlvbmFsTWFyaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhbGwgZWRpdG9ycyBvbiB0aGUgZm9ybSBhcmUgcmVhZC1vbmx5LiBBcHBsaWVzIG9ubHkgdG8gbm9uLXRlbXBsYXRlZCBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZWFkT25seScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlYWRPbmx5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZWFkT25seScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgZm9yIHJlcXVpcmVkIGZpZWxkcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCByZXF1aXJlZE1hcmsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyZXF1aXJlZE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCByZXF1aXJlZE1hcmsodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncmVxdWlyZWRNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgbWVzc2FnZSB0aGF0IGlzIHNob3duIGZvciBlbmQtdXNlcnMgaWYgYSByZXF1aXJlZCBmaWVsZCB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJlcXVpcmVkTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3JlcXVpcmVkTWVzc2FnZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHJlcXVpcmVkTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyZXF1aXJlZE1lc3NhZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoZXMgdGhlIHdpZGdldCB0byBhIHJpZ2h0LXRvLWxlZnQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcnRsRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdydGxFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcnRsRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigncnRsRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgYSBmdW5jdGlvbiB0aGF0IGNhdGVnb3JpemVzIHNjcmVlbnMgYnkgdGhlaXIgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2NyZWVuQnlXaWR0aCgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2NyZWVuQnlXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNjcmVlbkJ5V2lkdGgodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzY3JlZW5CeVdpZHRoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZm9ybSBzY3JvbGxpbmcuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2Nyb2xsaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdzY3JvbGxpbmdFbmFibGVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2Nyb2xsaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2Nyb2xsaW5nRW5hYmxlZCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgYSBjb2xvbiBpcyBkaXNwbGF5ZWQgYXQgdGhlIGVuZCBvZiBmb3JtIGxhYmVscy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93Q29sb25BZnRlckxhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dDb2xvbkFmdGVyTGFiZWwnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93Q29sb25BZnRlckxhYmVsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93Q29sb25BZnRlckxhYmVsJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgb3B0aW9uYWwgbWFyayBpcyBkaXNwbGF5ZWQgZm9yIG9wdGlvbmFsIGZpZWxkcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93T3B0aW9uYWxNYXJrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dPcHRpb25hbE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93T3B0aW9uYWxNYXJrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93T3B0aW9uYWxNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgcmVxdWlyZWQgbWFyayBpcyBkaXNwbGF5ZWQgZm9yIHJlcXVpcmVkIGZpZWxkcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93UmVxdWlyZWRNYXJrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nob3dSZXF1aXJlZE1hcmsnKTtcclxuICAgIH1cclxuICAgIHNldCBzaG93UmVxdWlyZWRNYXJrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93UmVxdWlyZWRNYXJrJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgdG90YWwgdmFsaWRhdGlvbiBzdW1tYXJ5IGlzIGRpc3BsYXllZCBvbiB0aGUgZm9ybS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93VmFsaWRhdGlvblN1bW1hcnkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2hvd1ZhbGlkYXRpb25TdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hvd1ZhbGlkYXRpb25TdW1tYXJ5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzaG93VmFsaWRhdGlvblN1bW1hcnknLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGhlIGVsZW1lbnQgd2hlbiB0aGUgVGFiIGtleSBpcyB1c2VkIGZvciBuYXZpZ2F0aW5nLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndGFiSW5kZXgnKTtcclxuICAgIH1cclxuICAgIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0YWJJbmRleCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyBhIG5hbWUgdG8gdGhlIGludGVybmFsIHZhbGlkYXRpb24gZ3JvdXAuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsaWRhdGlvbkdyb3VwKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvbkdyb3VwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvbkdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbGlkYXRpb25Hcm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmlzaWJsZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIHdpZHRoLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd3aWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignd2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgd2lkZ2V0J3MgY29udGVudCBpcyByZWFkeSBhbmQgZWFjaCB0aW1lIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSB3aWRnZXQgaXMgZGlzcG9zZWQgb2YuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRpc3Bvc2luZzogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgRW50ZXIga2V5IGhhcyBiZWVuIHByZXNzZWQgd2hpbGUgYW4gZWRpdG9yIGlzIGZvY3VzZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkVkaXRvckVudGVyS2V5OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSB2YWx1ZSBvZiBhIGZvcm1EYXRhIG9iamVjdCBmaWVsZCBpcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25GaWVsZERhdGFDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWNjZXNzS2V5Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWNjZXNzS2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFjdGl2ZVN0YXRlRW5hYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWxpZ25JdGVtTGFiZWxzQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgYWxpZ25JdGVtTGFiZWxzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBhbGlnbkl0ZW1MYWJlbHNJbkFsbEdyb3Vwc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBjb2xDb3VudENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNvbENvdW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGNvbENvdW50QnlTY3JlZW5DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjb2xDb3VudEJ5U2NyZWVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBsZz86IG51bWJlciwgbWQ/OiBudW1iZXIsIHNtPzogbnVtYmVyLCB4cz86IG51bWJlciB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGN1c3RvbWl6ZUl0ZW1DaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjdXN0b21pemVJdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RnVuY3Rpb24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZGlzYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBkaXNhYmxlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZWxlbWVudEF0dHJDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBlbGVtZW50QXR0ckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb2N1c1N0YXRlRW5hYmxlZENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZvY3VzU3RhdGVFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBmb3JtRGF0YUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGZvcm1EYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhpbnRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBoaW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhvdmVyU3RhdGVFbmFibGVkQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGl0ZW1zQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxEZXZFeHByZXNzLnVpLmR4Rm9ybVNpbXBsZUl0ZW0gfCBEZXZFeHByZXNzLnVpLmR4Rm9ybUdyb3VwSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtVGFiYmVkSXRlbSB8IERldkV4cHJlc3MudWkuZHhGb3JtRW1wdHlJdGVtIHwgRGV2RXhwcmVzcy51aS5keEZvcm1CdXR0b25JdGVtPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBsYWJlbExvY2F0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgbGFiZWxMb2NhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBtaW5Db2xXaWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1pbkNvbFdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIG9wdGlvbmFsTWFya0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9wdGlvbmFsTWFya0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZWFkT25seUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWRPbmx5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSByZXF1aXJlZE1hcmtDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZXF1aXJlZE1hcmtDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgcmVxdWlyZWRNZXNzYWdlQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVxdWlyZWRNZXNzYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHJ0bEVuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBydGxFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzY3JlZW5CeVdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2NyZWVuQnlXaWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPEZ1bmN0aW9uPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNjcm9sbGluZ0VuYWJsZWRDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JvbGxpbmdFbmFibGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93Q29sb25BZnRlckxhYmVsQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2hvd0NvbG9uQWZ0ZXJMYWJlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgc2hvd09wdGlvbmFsTWFya0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNob3dPcHRpb25hbE1hcmtDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNob3dSZXF1aXJlZE1hcmtDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93UmVxdWlyZWRNYXJrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBzaG93VmFsaWRhdGlvblN1bW1hcnlDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzaG93VmFsaWRhdGlvblN1bW1hcnlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHRhYkluZGV4Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGFiSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsaWRhdGlvbkdyb3VwQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsaWRhdGlvbkdyb3VwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZpc2libGVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB3aWR0aENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRHhpSXRlbUNvbXBvbmVudClcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCB0ZW1wbGF0ZUhvc3Q6IER4VGVtcGxhdGVIb3N0LFxyXG4gICAgICAgICAgICBwcml2YXRlIF93YXRjaGVySGVscGVyOiBXYXRjaGVySGVscGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIF9pZGg6IEl0ZXJhYmxlRGlmZmVySGVscGVyLCBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxyXG4gICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnkpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lLCB0ZW1wbGF0ZUhvc3QsIF93YXRjaGVySGVscGVyLCB0cmFuc2ZlclN0YXRlLCBwbGF0Zm9ybUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnY29udGVudFJlYWR5JywgZW1pdDogJ29uQ29udGVudFJlYWR5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdlZGl0b3JFbnRlcktleScsIGVtaXQ6ICdvbkVkaXRvckVudGVyS2V5JyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2ZpZWxkRGF0YUNoYW5nZWQnLCBlbWl0OiAnb25GaWVsZERhdGFDaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2luaXRpYWxpemVkJywgZW1pdDogJ29uSW5pdGlhbGl6ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3Vic2NyaWJlOiAnb3B0aW9uQ2hhbmdlZCcsIGVtaXQ6ICdvbk9wdGlvbkNoYW5nZWQnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FjY2Vzc0tleUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWN0aXZlU3RhdGVFbmFibGVkQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdhbGlnbkl0ZW1MYWJlbHNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2FsaWduSXRlbUxhYmVsc0luQWxsR3JvdXBzQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdjb2xDb3VudENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY29sQ291bnRCeVNjcmVlbkNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnY3VzdG9taXplSXRlbUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZGlzYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2VsZW1lbnRBdHRyQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdmb2N1c1N0YXRlRW5hYmxlZENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9ybURhdGFDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaGludENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnaG92ZXJTdGF0ZUVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2l0ZW1zQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdsYWJlbExvY2F0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdtaW5Db2xXaWR0aENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnb3B0aW9uYWxNYXJrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZWFkT25seUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAncmVxdWlyZWRNYXJrQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICdyZXF1aXJlZE1lc3NhZ2VDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3J0bEVuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3NjcmVlbkJ5V2lkdGhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Njcm9sbGluZ0VuYWJsZWRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dDb2xvbkFmdGVyTGFiZWxDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dPcHRpb25hbE1hcmtDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dSZXF1aXJlZE1hcmtDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Nob3dWYWxpZGF0aW9uU3VtbWFyeUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndGFiSW5kZXhDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbGlkYXRpb25Hcm91cENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmlzaWJsZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnd2lkdGhDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5faWRoLnNldEhvc3QodGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHhGb3JtKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ2l0ZW1zJywgY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDaGFuZ2VzKHByb3A6IHN0cmluZywgY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmICghKHByb3AgaW4gdGhpcy5fb3B0aW9uc1RvVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pZGguc2V0dXAocHJvcCwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICB0aGlzLl9pZGguZG9DaGVjaygnaXRlbXMnKTtcclxuICAgICAgICB0aGlzLl93YXRjaGVySGVscGVyLmNoZWNrV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcclxuICAgICAgICBzdXBlci5jbGVhckNoYW5nZWRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE9wdGlvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXNTZXR1cCA9IHRoaXMuX2lkaC5zZXR1cFNpbmdsZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRoaXMuX2lkaC5nZXRDaGFuZ2VzKG5hbWUsIHZhbHVlKSAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzU2V0dXAgfHwgaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRHhvQ29sQ291bnRCeVNjcmVlbk1vZHVsZSxcclxuICAgIER4aUl0ZW1Nb2R1bGUsXHJcbiAgICBEeG9MYWJlbE1vZHVsZSxcclxuICAgIER4aVZhbGlkYXRpb25SdWxlTW9kdWxlLFxyXG4gICAgRHhvVGFiUGFuZWxPcHRpb25zTW9kdWxlLFxyXG4gICAgRHhpVGFiTW9kdWxlLFxyXG4gICAgRHhvQnV0dG9uT3B0aW9uc01vZHVsZSxcclxuICAgIER4SW50ZWdyYXRpb25Nb2R1bGUsXHJcbiAgICBEeFRlbXBsYXRlTW9kdWxlLFxyXG4gICAgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhGb3JtQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeEZvcm1Db21wb25lbnQsXHJcbiAgICBEeG9Db2xDb3VudEJ5U2NyZWVuTW9kdWxlLFxyXG4gICAgRHhpSXRlbU1vZHVsZSxcclxuICAgIER4b0xhYmVsTW9kdWxlLFxyXG4gICAgRHhpVmFsaWRhdGlvblJ1bGVNb2R1bGUsXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUsXHJcbiAgICBEeGlUYWJNb2R1bGUsXHJcbiAgICBEeG9CdXR0b25PcHRpb25zTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4Rm9ybU1vZHVsZSB7IH1cclxuIl19