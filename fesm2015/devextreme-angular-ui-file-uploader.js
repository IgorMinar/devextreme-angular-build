import { __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent, DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
    useExisting: forwardRef(() => DxFileUploaderComponent),
    multi: true
};
/**
 * The FileUploader widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
 */
let DxFileUploaderComponent = class DxFileUploaderComponent extends DxComponent {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.touched = (_) => { };
        this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'progress', emit: 'onProgress' },
            { subscribe: 'uploadAborted', emit: 'onUploadAborted' },
            { subscribe: 'uploaded', emit: 'onUploaded' },
            { subscribe: 'uploadError', emit: 'onUploadError' },
            { subscribe: 'uploadStarted', emit: 'onUploadStarted' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowCancelingChange' },
            { emit: 'allowedFileExtensionsChange' },
            { emit: 'chunkSizeChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'invalidFileExtensionMessageChange' },
            { emit: 'invalidMaxFileSizeMessageChange' },
            { emit: 'invalidMinFileSizeMessageChange' },
            { emit: 'isValidChange' },
            { emit: 'labelTextChange' },
            { emit: 'maxFileSizeChange' },
            { emit: 'minFileSizeChange' },
            { emit: 'multipleChange' },
            { emit: 'nameChange' },
            { emit: 'progressChange' },
            { emit: 'readOnlyChange' },
            { emit: 'readyToUploadMessageChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectButtonTextChange' },
            { emit: 'showFileListChange' },
            { emit: 'tabIndexChange' },
            { emit: 'uploadButtonTextChange' },
            { emit: 'uploadedMessageChange' },
            { emit: 'uploadFailedMessageChange' },
            { emit: 'uploadHeadersChange' },
            { emit: 'uploadMethodChange' },
            { emit: 'uploadModeChange' },
            { emit: 'uploadUrlChange' },
            { emit: 'validationErrorChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    /**
     * Specifies a file type or several types accepted by the widget.
     */
    get accept() {
        return this._getOption('accept');
    }
    set accept(value) {
        this._setOption('accept', value);
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
     * Specifies if an end user can remove a file from the selection and interrupt uploading.
     */
    get allowCanceling() {
        return this._getOption('allowCanceling');
    }
    set allowCanceling(value) {
        this._setOption('allowCanceling', value);
    }
    /**
     * Restricts file extensions that can be uploaded to the server.
     */
    get allowedFileExtensions() {
        return this._getOption('allowedFileExtensions');
    }
    set allowedFileExtensions(value) {
        this._setOption('allowedFileExtensions', value);
    }
    /**
     * Specifies the chunk size in bytes. Applies only if uploadMode is "instantly" or "useButtons". Requires a server that can process file chunks.
     */
    get chunkSize() {
        return this._getOption('chunkSize');
    }
    set chunkSize(value) {
        this._setOption('chunkSize', value);
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
     * The text displayed when the extension of the file being uploaded is not an allowed file extension.
     */
    get invalidFileExtensionMessage() {
        return this._getOption('invalidFileExtensionMessage');
    }
    set invalidFileExtensionMessage(value) {
        this._setOption('invalidFileExtensionMessage', value);
    }
    /**
     * The text displayed when the size of the file being uploaded is greater than the maxFileSize.
     */
    get invalidMaxFileSizeMessage() {
        return this._getOption('invalidMaxFileSizeMessage');
    }
    set invalidMaxFileSizeMessage(value) {
        this._setOption('invalidMaxFileSizeMessage', value);
    }
    /**
     * The text displayed when the size of the file being uploaded is less than the minFileSize.
     */
    get invalidMinFileSizeMessage() {
        return this._getOption('invalidMinFileSizeMessage');
    }
    set invalidMinFileSizeMessage(value) {
        this._setOption('invalidMinFileSizeMessage', value);
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
     * Specifies the text displayed on the area to which an end-user can drop a file.
     */
    get labelText() {
        return this._getOption('labelText');
    }
    set labelText(value) {
        this._setOption('labelText', value);
    }
    /**
     * Specifies the maximum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
     */
    get maxFileSize() {
        return this._getOption('maxFileSize');
    }
    set maxFileSize(value) {
        this._setOption('maxFileSize', value);
    }
    /**
     * Specifies the minimum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
     */
    get minFileSize() {
        return this._getOption('minFileSize');
    }
    set minFileSize(value) {
        this._setOption('minFileSize', value);
    }
    /**
     * Specifies whether the widget enables an end-user to select a single file or multiple files.
     */
    get multiple() {
        return this._getOption('multiple');
    }
    set multiple(value) {
        this._setOption('multiple', value);
    }
    /**
     * Specifies the value passed to the name attribute of the underlying input element. Required to access uploaded files on the server.
     */
    get name() {
        return this._getOption('name');
    }
    set name(value) {
        this._setOption('name', value);
    }
    /**
     * Gets the current progress in percentages.
     */
    get progress() {
        return this._getOption('progress');
    }
    set progress(value) {
        this._setOption('progress', value);
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
     * The message displayed by the widget when it is ready to upload the specified files.
     */
    get readyToUploadMessage() {
        return this._getOption('readyToUploadMessage');
    }
    set readyToUploadMessage(value) {
        this._setOption('readyToUploadMessage', value);
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
     * The text displayed on the button that opens the file browser.
     */
    get selectButtonText() {
        return this._getOption('selectButtonText');
    }
    set selectButtonText(value) {
        this._setOption('selectButtonText', value);
    }
    /**
     * Specifies whether or not the widget displays the list of selected files.
     */
    get showFileList() {
        return this._getOption('showFileList');
    }
    set showFileList(value) {
        this._setOption('showFileList', value);
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
     * The text displayed on the button that starts uploading.
     */
    get uploadButtonText() {
        return this._getOption('uploadButtonText');
    }
    set uploadButtonText(value) {
        this._setOption('uploadButtonText', value);
    }
    /**
     * The message displayed by the widget when uploading is finished.
     */
    get uploadedMessage() {
        return this._getOption('uploadedMessage');
    }
    set uploadedMessage(value) {
        this._setOption('uploadedMessage', value);
    }
    /**
     * The message displayed by the widget on uploading failure.
     */
    get uploadFailedMessage() {
        return this._getOption('uploadFailedMessage');
    }
    set uploadFailedMessage(value) {
        this._setOption('uploadFailedMessage', value);
    }
    /**
     * Specifies headers for the upload request.
     */
    get uploadHeaders() {
        return this._getOption('uploadHeaders');
    }
    set uploadHeaders(value) {
        this._setOption('uploadHeaders', value);
    }
    /**
     * Specifies the method for the upload request.
     */
    get uploadMethod() {
        return this._getOption('uploadMethod');
    }
    set uploadMethod(value) {
        this._setOption('uploadMethod', value);
    }
    /**
     * Specifies how the widget uploads files.
     */
    get uploadMode() {
        return this._getOption('uploadMode');
    }
    set uploadMode(value) {
        this._setOption('uploadMode', value);
    }
    /**
     * Specifies a target Url for the upload request.
     */
    get uploadUrl() {
        return this._getOption('uploadUrl');
    }
    set uploadUrl(value) {
        this._setOption('uploadUrl', value);
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
     * Specifies a File instance representing the selected file. Read-only when uploadMode is "useForm".
     */
    get value() {
        return this._getOption('value');
    }
    set value(value) {
        this._setOption('value', value);
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
    _createInstance(element, options) {
        return new DxFileUploader(element, options);
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
        this.setupChanges('allowedFileExtensions', changes);
        this.setupChanges('value', changes);
    }
    setupChanges(prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }
    ngDoCheck() {
        this._idh.doCheck('allowedFileExtensions');
        this._idh.doCheck('value');
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
DxFileUploaderComponent.ctorParameters = () => [
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
], DxFileUploaderComponent.prototype, "validator", void 0);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "accept", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "accessKey", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "activeStateEnabled", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "allowCanceling", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "allowedFileExtensions", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "chunkSize", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "disabled", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "elementAttr", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "focusStateEnabled", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "height", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "hint", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "invalidFileExtensionMessage", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "invalidMaxFileSizeMessage", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "invalidMinFileSizeMessage", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "isValid", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "labelText", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "maxFileSize", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "minFileSize", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "multiple", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "name", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "progress", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "readOnly", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "readyToUploadMessage", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "rtlEnabled", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "selectButtonText", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "showFileList", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "tabIndex", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadButtonText", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadedMessage", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadFailedMessage", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadHeaders", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadMethod", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadMode", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "uploadUrl", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "validationError", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "value", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "visible", null);
__decorate([
    Input()
], DxFileUploaderComponent.prototype, "width", null);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onContentReady", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onDisposing", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onInitialized", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onProgress", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onUploadAborted", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onUploaded", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onUploadError", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onUploadStarted", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onValueChanged", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "acceptChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "allowCancelingChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "allowedFileExtensionsChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "chunkSizeChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "disabledChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "heightChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "hintChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "invalidFileExtensionMessageChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "invalidMaxFileSizeMessageChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "invalidMinFileSizeMessageChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "isValidChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "labelTextChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "maxFileSizeChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "minFileSizeChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "multipleChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "nameChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "progressChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "readOnlyChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "readyToUploadMessageChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "selectButtonTextChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "showFileListChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadButtonTextChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadedMessageChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadFailedMessageChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadHeadersChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadMethodChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadModeChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "uploadUrlChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "validationErrorChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "valueChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "visibleChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "widthChange", void 0);
__decorate([
    Output()
], DxFileUploaderComponent.prototype, "onBlur", void 0);
__decorate([
    HostListener('valueChange', ['$event'])
], DxFileUploaderComponent.prototype, "change", null);
__decorate([
    HostListener('onBlur', ['$event'])
], DxFileUploaderComponent.prototype, "touched", void 0);
DxFileUploaderComponent = __decorate([
    Component({
        selector: 'dx-file-uploader',
        template: '',
        providers: [
            DxTemplateHost,
            WatcherHelper,
            CUSTOM_VALUE_ACCESSOR_PROVIDER,
            NestedOptionHost,
            IterableDifferHelper
        ]
    }),
    __param(7, Inject(PLATFORM_ID))
], DxFileUploaderComponent);
let DxFileUploaderModule = class DxFileUploaderModule {
};
DxFileUploaderModule = __decorate([
    NgModule({
        imports: [
            DxIntegrationModule,
            DxTemplateModule,
            BrowserTransferStateModule
        ],
        declarations: [
            DxFileUploaderComponent
        ],
        exports: [
            DxFileUploaderComponent,
            DxTemplateModule
        ]
    })
], DxFileUploaderModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DxFileUploaderComponent, DxFileUploaderModule };
//# sourceMappingURL=devextreme-angular-ui-file-uploader.js.map
