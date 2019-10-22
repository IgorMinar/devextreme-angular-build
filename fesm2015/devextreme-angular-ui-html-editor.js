import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, ContentChildren, Component, NgModule } from '@angular/core';
import DxHtmlEditor from 'devextreme/ui/html_editor';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';
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
const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxHtmlEditorComponent),
    multi: true
};
/**
 * [tags] ctp HtmlEditor is a WYSIWYG editor that allows you to format textual and visual content and to output it in HTML or Markdown. HtmlEditor is built on top of and requires Quill. #include common-ctp-note with { component: "HtmlEditor" }
 */
let DxHtmlEditorComponent = class DxHtmlEditorComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
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
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /**
     * Allows you to customize Quill and 3rd-party modules.
     */
    get customizeModules() {
        return this._getOption('customizeModules');
    }
    set customizeModules(value) {
        this._setOption('customizeModules', value);
    }
    /**
     * Specifies whether the widget responds to user interaction.
     */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
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
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
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
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
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
     * Specifies whether the editor's value is valid.
     */
    get isValid() {
        return this._getOption('isValid');
    }
    set isValid(value) {
        this._setOption('isValid', value);
    }
    /**
     * Configures media resizing.
     */
    get mediaResizing() {
        return this._getOption('mediaResizing');
    }
    set mediaResizing(value) {
        this._setOption('mediaResizing', value);
    }
    /**
     * Configures mentions.
     */
    get mentions() {
        return this._getOption('mentions');
    }
    set mentions(value) {
        this._setOption('mentions', value);
    }
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    /**
     * Specifies the text displayed when the input field is empty.
     */
    get placeholder() {
        return this._getOption('placeholder');
    }
    set placeholder(value) {
        this._setOption('placeholder', value);
    }
    /**
     * Specifies whether the editor is read-only.
     */
    get readOnly() {
        return this._getOption('readOnly');
    }
    set readOnly(value) {
        this._setOption('readOnly', value);
    }
    /**
     * Switches the widget to a right-to-left representation.
     */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /**
     * Configures the widget's toolbar.
     */
    get toolbar() {
        return this._getOption('toolbar');
    }
    set toolbar(value) {
        this._setOption('toolbar', value);
    }
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    get validationError() {
        return this._getOption('validationError');
    }
    set validationError(value) {
        this._setOption('validationError', value);
    }
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    get validationMessageMode() {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value) {
        this._setOption('validationMessageMode', value);
    }
    /**
     * Specifies the widget's value.
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
    }
    /**
     * Specifies in which markup language the value is stored.
     */
    get valueType() {
        return this._getOption('valueType');
    }
    set valueType(value) {
        this._setOption('valueType', value);
    }
    /**
     * Configures variables, which are placeholders to be replaced with actual values when processing text.
     */
    get variables() {
        return this._getOption('variables');
    }
    set variables(value) {
        this._setOption('variables', value);
    }
    /**
     * Specifies whether the widget is visible.
     */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
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
    change(_) { }
    get mentionsChildren() {
        return this._getOption('mentions');
    }
    set mentionsChildren(value) {
        this.setChildren('mentions', value);
    }
    _createInstance(element, options) {
        return new DxHtmlEditor(element, options);
    }
    writeValue(value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) { this.change = fn; }
    registerOnTouched(fn) { this.touched = fn; }
    _createWidget(element) {
        super._createWidget(element);
        this.instance.on('focusOut', (e) => {
            this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.setupChanges('mentions', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('mentions');
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
    ngOnInit() {
        super.ngOnInit();
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    }
};
DxHtmlEditorComponent.ctorParameters = () => [
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
let DxHtmlEditorModule = class DxHtmlEditorModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { DxHtmlEditorComponent, DxHtmlEditorModule };
//# sourceMappingURL=devextreme-angular-ui-html-editor.js.map
