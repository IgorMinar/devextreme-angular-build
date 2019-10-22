import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxHtmlEditor from 'devextreme/ui/html_editor';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
import { DxiMentionComponent, DxoMediaResizingModule, DxiMentionModule, DxoToolbarModule, DxiItemModule, DxoVariablesModule } from 'devextreme-angular/ui/nested';

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
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxHtmlEditorComponent; }),
    multi: true
};
/**
 * [tags] ctp HtmlEditor is a WYSIWYG editor that allows you to format textual and visual content and to output it in HTML or Markdown. HtmlEditor is built on top of and requires Quill. #include common-ctp-note with { component: "HtmlEditor" }
 */
var DxHtmlEditorComponent = /** @class */ (function (_super) {
    __extends(DxHtmlEditorComponent, _super);
    function DxHtmlEditorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'customizeModulesChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'mediaResizingChange' },
            { emit: 'mentionsChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'toolbarChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueTypeChange' },
            { emit: 'variablesChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxHtmlEditorComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "customizeModules", {
        /**
         * Allows you to customize Quill and 3rd-party modules.
         */
        get: function () {
            return this._getOption('customizeModules');
        },
        set: function (value) {
            this._setOption('customizeModules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "disabled", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "height", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "hint", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "isValid", {
        /**
         * Specifies whether the editor's value is valid.
         */
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "mediaResizing", {
        /**
         * Configures media resizing.
         */
        get: function () {
            return this._getOption('mediaResizing');
        },
        set: function (value) {
            this._setOption('mediaResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "mentions", {
        /**
         * Configures mentions.
         */
        get: function () {
            return this._getOption('mentions');
        },
        set: function (value) {
            this._setOption('mentions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "name", {
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "placeholder", {
        /**
         * Specifies the text displayed when the input field is empty.
         */
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "readOnly", {
        /**
         * Specifies whether the editor is read-only.
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "toolbar", {
        /**
         * Configures the widget's toolbar.
         */
        get: function () {
            return this._getOption('toolbar');
        },
        set: function (value) {
            this._setOption('toolbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "validationError", {
        /**
         * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
         */
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "validationMessageMode", {
        /**
         * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
         */
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "value", {
        /**
         * Specifies the widget's value.
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "valueType", {
        /**
         * Specifies in which markup language the value is stored.
         */
        get: function () {
            return this._getOption('valueType');
        },
        set: function (value) {
            this._setOption('valueType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "variables", {
        /**
         * Configures variables, which are placeholders to be replaced with actual values when processing text.
         */
        get: function () {
            return this._getOption('variables');
        },
        set: function (value) {
            this._setOption('variables', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxHtmlEditorComponent.prototype, "visible", {
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
    Object.defineProperty(DxHtmlEditorComponent.prototype, "width", {
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
    DxHtmlEditorComponent.prototype.change = function (_) { };
    Object.defineProperty(DxHtmlEditorComponent.prototype, "mentionsChildren", {
        get: function () {
            return this._getOption('mentions');
        },
        set: function (value) {
            this.setChildren('mentions', value);
        },
        enumerable: true,
        configurable: true
    });
    DxHtmlEditorComponent.prototype._createInstance = function (element, options) {
        return new DxHtmlEditor(element, options);
    };
    DxHtmlEditorComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxHtmlEditorComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxHtmlEditorComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxHtmlEditorComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxHtmlEditorComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxHtmlEditorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxHtmlEditorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('mentions', changes);
    };
    DxHtmlEditorComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxHtmlEditorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('mentions');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxHtmlEditorComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxHtmlEditorComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxHtmlEditorComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxHtmlEditorComponent.ctorParameters = function () { return [
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
        ContentChild(DxValidatorComponent)
    ], DxHtmlEditorComponent.prototype, "validator", void 0);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "accessKey", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "activeStateEnabled", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "customizeModules", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "elementAttr", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "focusStateEnabled", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "height", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "isValid", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "mediaResizing", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "mentions", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "readOnly", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "rtlEnabled", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "tabIndex", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "toolbar", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "validationError", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "validationMessageMode", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "valueType", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "variables", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "visible", null);
    __decorate([
        Input()
    ], DxHtmlEditorComponent.prototype, "width", null);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onContentReady", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onDisposing", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onFocusIn", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onFocusOut", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onValueChanged", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "customizeModulesChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "disabledChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "elementAttrChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "heightChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "hintChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "isValidChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "mediaResizingChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "mentionsChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "nameChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "placeholderChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "toolbarChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "valueChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "valueTypeChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "variablesChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "visibleChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "widthChange", void 0);
    __decorate([
        Output()
    ], DxHtmlEditorComponent.prototype, "onBlur", void 0);
    __decorate([
        HostListener('valueChange', ['$event'])
    ], DxHtmlEditorComponent.prototype, "change", null);
    __decorate([
        HostListener('onBlur', ['$event'])
    ], DxHtmlEditorComponent.prototype, "touched", void 0);
    __decorate([
        ContentChildren(DxiMentionComponent)
    ], DxHtmlEditorComponent.prototype, "mentionsChildren", null);
    DxHtmlEditorComponent = __decorate([
        Component({
            selector: 'dx-html-editor',
            template: '<ng-content></ng-content>',
            providers: [
                DxTemplateHost,
                WatcherHelper,
                CUSTOM_VALUE_ACCESSOR_PROVIDER,
                NestedOptionHost,
                IterableDifferHelper
            ]
        }),
        __param(7, Inject(PLATFORM_ID))
    ], DxHtmlEditorComponent);
    return DxHtmlEditorComponent;
}(DxComponent));
var DxHtmlEditorModule = /** @class */ (function () {
    function DxHtmlEditorModule() {
    }
    DxHtmlEditorModule = __decorate([
        NgModule({
            imports: [
                DxoMediaResizingModule,
                DxiMentionModule,
                DxoToolbarModule,
                DxiItemModule,
                DxoVariablesModule,
                DxIntegrationModule,
                DxTemplateModule,
                BrowserTransferStateModule
            ],
            declarations: [
                DxHtmlEditorComponent
            ],
            exports: [
                DxHtmlEditorComponent,
                DxoMediaResizingModule,
                DxiMentionModule,
                DxoToolbarModule,
                DxiItemModule,
                DxoVariablesModule,
                DxTemplateModule
            ]
        })
    ], DxHtmlEditorModule);
    return DxHtmlEditorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxHtmlEditorComponent, DxHtmlEditorModule };
//# sourceMappingURL=devextreme-angular-ui-html-editor.js.map
