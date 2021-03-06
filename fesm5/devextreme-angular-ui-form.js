import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { ElementRef, NgZone, Inject, PLATFORM_ID, Input, Output, ContentChildren, Component, NgModule } from '@angular/core';
import DxForm from 'devextreme/ui/form';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiItemComponent, DxoColCountByScreenModule, DxiItemModule, DxoLabelModule, DxiValidationRuleModule, DxoTabPanelOptionsModule, DxiTabModule, DxoButtonOptionsModule } from 'devextreme-angular/ui/nested';

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
 * The Form widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
 */
var DxFormComponent = /** @class */ (function (_super) {
    __extends(DxFormComponent, _super);
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
    DxFormComponent.ctorParameters = function () { return [
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
    ], DxFormComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "alignItemLabels", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "alignItemLabelsInAllGroups", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "colCount", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "colCountByScreen", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "customizeItem", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "formData", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "labelLocation", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "minColWidth", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "optionalMark", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "requiredMark", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "requiredMessage", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "screenByWidth", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "scrollingEnabled", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "showColonAfterLabel", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "showOptionalMark", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "showRequiredMark", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "showValidationSummary", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "validationGroup", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxFormComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "onEditorEnterKey", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "onFieldDataChanged", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "alignItemLabelsChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "alignItemLabelsInAllGroupsChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "colCountChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "colCountByScreenChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "customizeItemChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "formDataChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "itemsChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "labelLocationChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "minColWidthChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "optionalMarkChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "requiredMarkChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "requiredMessageChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "screenByWidthChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "scrollingEnabledChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "showColonAfterLabelChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "showOptionalMarkChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "showRequiredMarkChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "showValidationSummaryChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "validationGroupChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxFormComponent.prototype, "widthChange", void 0);
    __decorate([
        ContentChildren(DxiItemComponent)
    ], DxFormComponent.prototype, "itemsChildren", null);
    DxFormComponent = __decorate([
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
        __param(7, Inject(PLATFORM_ID))
    ], DxFormComponent);
    return DxFormComponent;
}(DxComponent));
var DxFormModule = /** @class */ (function () {
    function DxFormModule() {
    }
    DxFormModule = __decorate([
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxFormComponent, DxFormModule };
//# sourceMappingURL=devextreme-angular-ui-form.js.map
