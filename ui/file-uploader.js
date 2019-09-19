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
import { Component, NgModule, ElementRef, NgZone, PLATFORM_ID, Inject, Input, Output, EventEmitter, ContentChild, forwardRef, HostListener } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from './validator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DxFileUploaderComponent; }),
    multi: true
};
/**
 * The FileUploader widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
 */
var DxFileUploaderComponent = (function (_super) {
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
        get: /**
             * Specifies a file type or several types accepted by the widget.
             */
        function () {
            return this._getOption('accept');
        },
        set: function (value) {
            this._setOption('accept', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "allowCanceling", {
        get: /**
             * Specifies if an end user can remove a file from the selection and interrupt uploading.
             */
        function () {
            return this._getOption('allowCanceling');
        },
        set: function (value) {
            this._setOption('allowCanceling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "allowedFileExtensions", {
        get: /**
             * Restricts file extensions that can be uploaded to the server.
             */
        function () {
            return this._getOption('allowedFileExtensions');
        },
        set: function (value) {
            this._setOption('allowedFileExtensions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "chunkSize", {
        get: /**
             * Specifies the chunk size in bytes. Applies only if uploadMode is "instantly" or "useButtons". Requires a server that can process file chunks.
             */
        function () {
            return this._getOption('chunkSize');
        },
        set: function (value) {
            this._setOption('chunkSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "height", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "hint", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "invalidFileExtensionMessage", {
        get: /**
             * The text displayed when the extension of the file being uploaded is not an allowed file extension.
             */
        function () {
            return this._getOption('invalidFileExtensionMessage');
        },
        set: function (value) {
            this._setOption('invalidFileExtensionMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "invalidMaxFileSizeMessage", {
        get: /**
             * The text displayed when the size of the file being uploaded is greater than the maxFileSize.
             */
        function () {
            return this._getOption('invalidMaxFileSizeMessage');
        },
        set: function (value) {
            this._setOption('invalidMaxFileSizeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "invalidMinFileSizeMessage", {
        get: /**
             * The text displayed when the size of the file being uploaded is less than the minFileSize.
             */
        function () {
            return this._getOption('invalidMinFileSizeMessage');
        },
        set: function (value) {
            this._setOption('invalidMinFileSizeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "labelText", {
        get: /**
             * Specifies the text displayed on the area to which an end-user can drop a file.
             */
        function () {
            return this._getOption('labelText');
        },
        set: function (value) {
            this._setOption('labelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "maxFileSize", {
        get: /**
             * Specifies the maximum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
             */
        function () {
            return this._getOption('maxFileSize');
        },
        set: function (value) {
            this._setOption('maxFileSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "minFileSize", {
        get: /**
             * Specifies the minimum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
             */
        function () {
            return this._getOption('minFileSize');
        },
        set: function (value) {
            this._setOption('minFileSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "multiple", {
        get: /**
             * Specifies whether the widget enables an end-user to select a single file or multiple files.
             */
        function () {
            return this._getOption('multiple');
        },
        set: function (value) {
            this._setOption('multiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "name", {
        get: /**
             * Specifies the value passed to the name attribute of the underlying input element. Required to access uploaded files on the server.
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "progress", {
        get: /**
             * Gets the current progress in percentages.
             */
        function () {
            return this._getOption('progress');
        },
        set: function (value) {
            this._setOption('progress', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "readOnly", {
        get: /**
             * Specifies whether the editor is read-only.
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "readyToUploadMessage", {
        get: /**
             * The message displayed by the widget when it is ready to upload the specified files.
             */
        function () {
            return this._getOption('readyToUploadMessage');
        },
        set: function (value) {
            this._setOption('readyToUploadMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "selectButtonText", {
        get: /**
             * The text displayed on the button that opens the file browser.
             */
        function () {
            return this._getOption('selectButtonText');
        },
        set: function (value) {
            this._setOption('selectButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "showFileList", {
        get: /**
             * Specifies whether or not the widget displays the list of selected files.
             */
        function () {
            return this._getOption('showFileList');
        },
        set: function (value) {
            this._setOption('showFileList', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadButtonText", {
        get: /**
             * The text displayed on the button that starts uploading.
             */
        function () {
            return this._getOption('uploadButtonText');
        },
        set: function (value) {
            this._setOption('uploadButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadedMessage", {
        get: /**
             * The message displayed by the widget when uploading is finished.
             */
        function () {
            return this._getOption('uploadedMessage');
        },
        set: function (value) {
            this._setOption('uploadedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadFailedMessage", {
        get: /**
             * The message displayed by the widget on uploading failure.
             */
        function () {
            return this._getOption('uploadFailedMessage');
        },
        set: function (value) {
            this._setOption('uploadFailedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadHeaders", {
        get: /**
             * Specifies headers for the upload request.
             */
        function () {
            return this._getOption('uploadHeaders');
        },
        set: function (value) {
            this._setOption('uploadHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMethod", {
        get: /**
             * Specifies the method for the upload request.
             */
        function () {
            return this._getOption('uploadMethod');
        },
        set: function (value) {
            this._setOption('uploadMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMode", {
        get: /**
             * Specifies how the widget uploads files.
             */
        function () {
            return this._getOption('uploadMode');
        },
        set: function (value) {
            this._setOption('uploadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadUrl", {
        get: /**
             * Specifies a target Url for the upload request.
             */
        function () {
            return this._getOption('uploadUrl');
        },
        set: function (value) {
            this._setOption('uploadUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "value", {
        get: /**
             * Specifies a File instance representing the selected file. Read-only when uploadMode is "useForm".
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "visible", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "width", {
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
    DxFileUploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-file-uploader',
                    template: '',
                    providers: [
                        DxTemplateHost,
                        WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        NestedOptionHost,
                        IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxFileUploaderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxFileUploaderComponent.propDecorators = {
        "validator": [{ type: ContentChild, args: [DxValidatorComponent,] },],
        "accept": [{ type: Input },],
        "accessKey": [{ type: Input },],
        "activeStateEnabled": [{ type: Input },],
        "allowCanceling": [{ type: Input },],
        "allowedFileExtensions": [{ type: Input },],
        "chunkSize": [{ type: Input },],
        "disabled": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "focusStateEnabled": [{ type: Input },],
        "height": [{ type: Input },],
        "hint": [{ type: Input },],
        "hoverStateEnabled": [{ type: Input },],
        "invalidFileExtensionMessage": [{ type: Input },],
        "invalidMaxFileSizeMessage": [{ type: Input },],
        "invalidMinFileSizeMessage": [{ type: Input },],
        "isValid": [{ type: Input },],
        "labelText": [{ type: Input },],
        "maxFileSize": [{ type: Input },],
        "minFileSize": [{ type: Input },],
        "multiple": [{ type: Input },],
        "name": [{ type: Input },],
        "progress": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "readyToUploadMessage": [{ type: Input },],
        "rtlEnabled": [{ type: Input },],
        "selectButtonText": [{ type: Input },],
        "showFileList": [{ type: Input },],
        "tabIndex": [{ type: Input },],
        "uploadButtonText": [{ type: Input },],
        "uploadedMessage": [{ type: Input },],
        "uploadFailedMessage": [{ type: Input },],
        "uploadHeaders": [{ type: Input },],
        "uploadMethod": [{ type: Input },],
        "uploadMode": [{ type: Input },],
        "uploadUrl": [{ type: Input },],
        "validationError": [{ type: Input },],
        "value": [{ type: Input },],
        "visible": [{ type: Input },],
        "width": [{ type: Input },],
        "onContentReady": [{ type: Output },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onProgress": [{ type: Output },],
        "onUploadAborted": [{ type: Output },],
        "onUploaded": [{ type: Output },],
        "onUploadError": [{ type: Output },],
        "onUploadStarted": [{ type: Output },],
        "onValueChanged": [{ type: Output },],
        "acceptChange": [{ type: Output },],
        "accessKeyChange": [{ type: Output },],
        "activeStateEnabledChange": [{ type: Output },],
        "allowCancelingChange": [{ type: Output },],
        "allowedFileExtensionsChange": [{ type: Output },],
        "chunkSizeChange": [{ type: Output },],
        "disabledChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "focusStateEnabledChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "hintChange": [{ type: Output },],
        "hoverStateEnabledChange": [{ type: Output },],
        "invalidFileExtensionMessageChange": [{ type: Output },],
        "invalidMaxFileSizeMessageChange": [{ type: Output },],
        "invalidMinFileSizeMessageChange": [{ type: Output },],
        "isValidChange": [{ type: Output },],
        "labelTextChange": [{ type: Output },],
        "maxFileSizeChange": [{ type: Output },],
        "minFileSizeChange": [{ type: Output },],
        "multipleChange": [{ type: Output },],
        "nameChange": [{ type: Output },],
        "progressChange": [{ type: Output },],
        "readOnlyChange": [{ type: Output },],
        "readyToUploadMessageChange": [{ type: Output },],
        "rtlEnabledChange": [{ type: Output },],
        "selectButtonTextChange": [{ type: Output },],
        "showFileListChange": [{ type: Output },],
        "tabIndexChange": [{ type: Output },],
        "uploadButtonTextChange": [{ type: Output },],
        "uploadedMessageChange": [{ type: Output },],
        "uploadFailedMessageChange": [{ type: Output },],
        "uploadHeadersChange": [{ type: Output },],
        "uploadMethodChange": [{ type: Output },],
        "uploadModeChange": [{ type: Output },],
        "uploadUrlChange": [{ type: Output },],
        "validationErrorChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "onBlur": [{ type: Output },],
        "change": [{ type: HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxFileUploaderComponent;
}(DxComponent));
export { DxFileUploaderComponent };
var DxFileUploaderModule = (function () {
    function DxFileUploaderModule() {
    }
    DxFileUploaderModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return DxFileUploaderModule;
}());
export { DxFileUploaderModule };
//# sourceMappingURL=file-uploader.js.map