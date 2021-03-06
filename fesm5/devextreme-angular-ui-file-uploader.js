import { __extends, __decorate, __param } from 'tslib';
import { TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { forwardRef, ElementRef, NgZone, Inject, PLATFORM_ID, ContentChild, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxTemplateHost, WatcherHelper, IterableDifferHelper, NestedOptionHost, DxComponent, DxIntegrationModule, DxTemplateModule } from 'devextreme-angular/core';

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
    useExisting: forwardRef(function () { return DxFileUploaderComponent; }),
    multi: true
};
/**
 * The FileUploader widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
 */
var DxFileUploaderComponent = /** @class */ (function (_super) {
    __extends(DxFileUploaderComponent, _super);
    function DxFileUploaderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
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
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFileUploaderComponent.prototype, "accept", {
        /**
         * Specifies a file type or several types accepted by the widget.
         */
        get: function () {
            return this._getOption('accept');
        },
        set: function (value) {
            this._setOption('accept', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "allowCanceling", {
        /**
         * Specifies if an end user can remove a file from the selection and interrupt uploading.
         */
        get: function () {
            return this._getOption('allowCanceling');
        },
        set: function (value) {
            this._setOption('allowCanceling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "allowedFileExtensions", {
        /**
         * Restricts file extensions that can be uploaded to the server.
         */
        get: function () {
            return this._getOption('allowedFileExtensions');
        },
        set: function (value) {
            this._setOption('allowedFileExtensions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "chunkSize", {
        /**
         * Specifies the chunk size in bytes. Applies only if uploadMode is "instantly" or "useButtons". Requires a server that can process file chunks.
         */
        get: function () {
            return this._getOption('chunkSize');
        },
        set: function (value) {
            this._setOption('chunkSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "height", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "hint", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "invalidFileExtensionMessage", {
        /**
         * The text displayed when the extension of the file being uploaded is not an allowed file extension.
         */
        get: function () {
            return this._getOption('invalidFileExtensionMessage');
        },
        set: function (value) {
            this._setOption('invalidFileExtensionMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "invalidMaxFileSizeMessage", {
        /**
         * The text displayed when the size of the file being uploaded is greater than the maxFileSize.
         */
        get: function () {
            return this._getOption('invalidMaxFileSizeMessage');
        },
        set: function (value) {
            this._setOption('invalidMaxFileSizeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "invalidMinFileSizeMessage", {
        /**
         * The text displayed when the size of the file being uploaded is less than the minFileSize.
         */
        get: function () {
            return this._getOption('invalidMinFileSizeMessage');
        },
        set: function (value) {
            this._setOption('invalidMinFileSizeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "isValid", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "labelText", {
        /**
         * Specifies the text displayed on the area to which an end-user can drop a file.
         */
        get: function () {
            return this._getOption('labelText');
        },
        set: function (value) {
            this._setOption('labelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "maxFileSize", {
        /**
         * Specifies the maximum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
         */
        get: function () {
            return this._getOption('maxFileSize');
        },
        set: function (value) {
            this._setOption('maxFileSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "minFileSize", {
        /**
         * Specifies the minimum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
         */
        get: function () {
            return this._getOption('minFileSize');
        },
        set: function (value) {
            this._setOption('minFileSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "multiple", {
        /**
         * Specifies whether the widget enables an end-user to select a single file or multiple files.
         */
        get: function () {
            return this._getOption('multiple');
        },
        set: function (value) {
            this._setOption('multiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "name", {
        /**
         * Specifies the value passed to the name attribute of the underlying input element. Required to access uploaded files on the server.
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "progress", {
        /**
         * Gets the current progress in percentages.
         */
        get: function () {
            return this._getOption('progress');
        },
        set: function (value) {
            this._setOption('progress', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "readyToUploadMessage", {
        /**
         * The message displayed by the widget when it is ready to upload the specified files.
         */
        get: function () {
            return this._getOption('readyToUploadMessage');
        },
        set: function (value) {
            this._setOption('readyToUploadMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "selectButtonText", {
        /**
         * The text displayed on the button that opens the file browser.
         */
        get: function () {
            return this._getOption('selectButtonText');
        },
        set: function (value) {
            this._setOption('selectButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "showFileList", {
        /**
         * Specifies whether or not the widget displays the list of selected files.
         */
        get: function () {
            return this._getOption('showFileList');
        },
        set: function (value) {
            this._setOption('showFileList', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadButtonText", {
        /**
         * The text displayed on the button that starts uploading.
         */
        get: function () {
            return this._getOption('uploadButtonText');
        },
        set: function (value) {
            this._setOption('uploadButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadedMessage", {
        /**
         * The message displayed by the widget when uploading is finished.
         */
        get: function () {
            return this._getOption('uploadedMessage');
        },
        set: function (value) {
            this._setOption('uploadedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadFailedMessage", {
        /**
         * The message displayed by the widget on uploading failure.
         */
        get: function () {
            return this._getOption('uploadFailedMessage');
        },
        set: function (value) {
            this._setOption('uploadFailedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadHeaders", {
        /**
         * Specifies headers for the upload request.
         */
        get: function () {
            return this._getOption('uploadHeaders');
        },
        set: function (value) {
            this._setOption('uploadHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMethod", {
        /**
         * Specifies the method for the upload request.
         */
        get: function () {
            return this._getOption('uploadMethod');
        },
        set: function (value) {
            this._setOption('uploadMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMode", {
        /**
         * Specifies how the widget uploads files.
         */
        get: function () {
            return this._getOption('uploadMode');
        },
        set: function (value) {
            this._setOption('uploadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadUrl", {
        /**
         * Specifies a target Url for the upload request.
         */
        get: function () {
            return this._getOption('uploadUrl');
        },
        set: function (value) {
            this._setOption('uploadUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "validationError", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "value", {
        /**
         * Specifies a File instance representing the selected file. Read-only when uploadMode is "useForm".
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "visible", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "width", {
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
    DxFileUploaderComponent.prototype.change = function (_) { };
    DxFileUploaderComponent.prototype._createInstance = function (element, options) {
        return new DxFileUploader(element, options);
    };
    DxFileUploaderComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxFileUploaderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxFileUploaderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxFileUploaderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxFileUploaderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxFileUploaderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFileUploaderComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('allowedFileExtensions', changes);
        this.setupChanges('value', changes);
    };
    DxFileUploaderComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFileUploaderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('allowedFileExtensions');
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxFileUploaderComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFileUploaderComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxFileUploaderComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxFileUploaderComponent.ctorParameters = function () { return [
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
    return DxFileUploaderComponent;
}(DxComponent));
var DxFileUploaderModule = /** @class */ (function () {
    function DxFileUploaderModule() {
    }
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
    return DxFileUploaderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DxFileUploaderComponent, DxFileUploaderModule };
//# sourceMappingURL=devextreme-angular-ui-file-uploader.js.map
