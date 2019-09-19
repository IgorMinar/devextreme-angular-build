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
 * Build date: Thu Sep 19 2019
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
var DxFormComponent = (function (_super) {
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
    Object.defineProperty(DxFormComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabels", {
        get: /**
             * Specifies whether or not all root item labels are aligned.
             */
        function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabelsInAllGroups", {
        get: /**
             * Specifies whether or not item labels in all groups are aligned.
             */
        function () {
            return this._getOption('alignItemLabelsInAllGroups');
        },
        set: function (value) {
            this._setOption('alignItemLabelsInAllGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCount", {
        get: /**
             * The count of columns in the form layout.
             */
        function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCountByScreen", {
        get: /**
             * Specifies dependency between the screen factor and the count of columns in the form layout.
             */
        function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "customizeItem", {
        get: /**
             * Specifies a function that customizes a form item after it has been created.
             */
        function () {
            return this._getOption('customizeItem');
        },
        set: function (value) {
            this._setOption('customizeItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFormComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "formData", {
        get: /**
             * Provides the Form's data. Gets updated every time form fields change.
             */
        function () {
            return this._getOption('formData');
        },
        set: function (value) {
            this._setOption('formData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "height", {
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
    Object.defineProperty(DxFormComponent.prototype, "hint", {
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
    Object.defineProperty(DxFormComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "items", {
        get: /**
             * Holds an array of form items.
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
    Object.defineProperty(DxFormComponent.prototype, "labelLocation", {
        get: /**
             * Specifies the location of a label against the editor.
             */
        function () {
            return this._getOption('labelLocation');
        },
        set: function (value) {
            this._setOption('labelLocation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "minColWidth", {
        get: /**
             * The minimum column width used for calculating column count in the form layout.
             */
        function () {
            return this._getOption('minColWidth');
        },
        set: function (value) {
            this._setOption('minColWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "optionalMark", {
        get: /**
             * The text displayed for optional fields.
             */
        function () {
            return this._getOption('optionalMark');
        },
        set: function (value) {
            this._setOption('optionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "readOnly", {
        get: /**
             * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMark", {
        get: /**
             * The text displayed for required fields.
             */
        function () {
            return this._getOption('requiredMark');
        },
        set: function (value) {
            this._setOption('requiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMessage", {
        get: /**
             * Specifies the message that is shown for end-users if a required field value is not specified.
             */
        function () {
            return this._getOption('requiredMessage');
        },
        set: function (value) {
            this._setOption('requiredMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "screenByWidth", {
        get: /**
             * Specifies a function that categorizes screens by their width.
             */
        function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "scrollingEnabled", {
        get: /**
             * A Boolean value specifying whether to enable or disable form scrolling.
             */
        function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showColonAfterLabel", {
        get: /**
             * Specifies whether or not a colon is displayed at the end of form labels.
             */
        function () {
            return this._getOption('showColonAfterLabel');
        },
        set: function (value) {
            this._setOption('showColonAfterLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showOptionalMark", {
        get: /**
             * Specifies whether or not the optional mark is displayed for optional fields.
             */
        function () {
            return this._getOption('showOptionalMark');
        },
        set: function (value) {
            this._setOption('showOptionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showRequiredMark", {
        get: /**
             * Specifies whether or not the required mark is displayed for required fields.
             */
        function () {
            return this._getOption('showRequiredMark');
        },
        set: function (value) {
            this._setOption('showRequiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showValidationSummary", {
        get: /**
             * Specifies whether or not the total validation summary is displayed on the form.
             */
        function () {
            return this._getOption('showValidationSummary');
        },
        set: function (value) {
            this._setOption('showValidationSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFormComponent.prototype, "validationGroup", {
        get: /**
             * Gives a name to the internal validation group.
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
    Object.defineProperty(DxFormComponent.prototype, "visible", {
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
    Object.defineProperty(DxFormComponent.prototype, "width", {
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
    DxFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-form',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxFormComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxFormComponent.propDecorators = {
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "alignItemLabels": [{ type: Input },],
        "alignItemLabelsInAllGroups": [{ type: Input },],
        "colCount": [{ type: Input },],
        "colCountByScreen": [{ type: Input },],
        "customizeItem": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "formData": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "items": [{ type: Input },],
        "labelLocation": [{ type: Input },],
        "minColWidth": [{ type: Input },],
        "optionalMark": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "requiredMark": [{ type: Input },],
        "requiredMessage": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "screenByWidth": [{ type: Input },],
        "scrollingEnabled": [{ type: Input },],
        "showColonAfterLabel": [{ type: Input },],
        "showOptionalMark": [{ type: Input },],
        "showRequiredMark": [{ type: Input },],
        "showValidationSummary": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "validationGroup": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onEditorEnterKey": [{ type: Output },],
        "onFieldDataChanged": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "alignItemLabelsChange": [{ type: Output },],
        "alignItemLabelsInAllGroupsChange": [{ type: Output },],
        "colCountChange": [{ type: Output },],
        "colCountByScreenChange": [{ type: Output },],
        "customizeItemChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "formDataChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "itemsChange": [{ type: Output },],
        "labelLocationChange": [{ type: Output },],
        "minColWidthChange": [{ type: Output },],
        "optionalMarkChange": [{ type: Output },],
        "readOnlyChange": [{ type: Output },],
        "requiredMarkChange": [{ type: Output },],
        "requiredMessageChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "screenByWidthChange": [{ type: Output },],
        "scrollingEnabledChange": [{ type: Output },],
        "showColonAfterLabelChange": [{ type: Output },],
        "showOptionalMarkChange": [{ type: Output },],
        "showRequiredMarkChange": [{ type: Output },],
        "showValidationSummaryChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "validationGroupChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [DxiItemComponent,] },],
    };
    return DxFormComponent;
}(DxComponent));
export { DxFormComponent };
var DxFormModule = (function () {
    function DxFormModule() {
    }
    DxFormModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxFormModule;
}());
export { DxFormModule };
//# sourceMappingURL=form.js.map