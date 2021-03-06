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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
/**
 * The FileUploader widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
 */
export declare class DxFileUploaderComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxFileUploader;
    validator: DxValidatorComponent;
    /**
     * Specifies a file type or several types accepted by the widget.
     */
    accept: string;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies if an end user can remove a file from the selection and interrupt uploading.
     */
    allowCanceling: boolean;
    /**
     * Restricts file extensions that can be uploaded to the server.
     */
    allowedFileExtensions: Array<string>;
    /**
     * Specifies the chunk size in bytes. Applies only if uploadMode is "instantly" or "useButtons". Requires a server that can process file chunks.
     */
    chunkSize: number;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * The text displayed when the extension of the file being uploaded is not an allowed file extension.
     */
    invalidFileExtensionMessage: string;
    /**
     * The text displayed when the size of the file being uploaded is greater than the maxFileSize.
     */
    invalidMaxFileSizeMessage: string;
    /**
     * The text displayed when the size of the file being uploaded is less than the minFileSize.
     */
    invalidMinFileSizeMessage: string;
    /**
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * Specifies the text displayed on the area to which an end-user can drop a file.
     */
    labelText: string;
    /**
     * Specifies the maximum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
     */
    maxFileSize: number;
    /**
     * Specifies the minimum file size (in bytes) allowed for uploading. Applies only if uploadMode is "instantly" or "useButtons".
     */
    minFileSize: number;
    /**
     * Specifies whether the widget enables an end-user to select a single file or multiple files.
     */
    multiple: boolean;
    /**
     * Specifies the value passed to the name attribute of the underlying input element. Required to access uploaded files on the server.
     */
    name: string;
    /**
     * Gets the current progress in percentages.
     */
    progress: number;
    /**
     * Specifies whether the editor is read-only.
     */
    readOnly: boolean;
    /**
     * The message displayed by the widget when it is ready to upload the specified files.
     */
    readyToUploadMessage: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * The text displayed on the button that opens the file browser.
     */
    selectButtonText: string;
    /**
     * Specifies whether or not the widget displays the list of selected files.
     */
    showFileList: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The text displayed on the button that starts uploading.
     */
    uploadButtonText: string;
    /**
     * The message displayed by the widget when uploading is finished.
     */
    uploadedMessage: string;
    /**
     * The message displayed by the widget on uploading failure.
     */
    uploadFailedMessage: string;
    /**
     * Specifies headers for the upload request.
     */
    uploadHeaders: any;
    /**
     * Specifies the method for the upload request.
     */
    uploadMethod: string;
    /**
     * Specifies how the widget uploads files.
     */
    uploadMode: string;
    /**
     * Specifies a target Url for the upload request.
     */
    uploadUrl: string;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies a File instance representing the selected file. Read-only when uploadMode is "useForm".
     */
    value: Array<any>;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when a file segment is uploaded.
     */
    onProgress: EventEmitter<any>;
    /**
     * A function that is executed when the file upload is aborted.
     */
    onUploadAborted: EventEmitter<any>;
    /**
     * A function that is executed when a file is successfully uploaded.
     */
    onUploaded: EventEmitter<any>;
    /**
     * A function that is executed when an error occurs during the file upload.
     */
    onUploadError: EventEmitter<any>;
    /**
     * A function that is executed when the file upload is started.
     */
    onUploadStarted: EventEmitter<any>;
    /**
     * A function that is executed when one or several files are added to or removed from the selection.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    acceptChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    allowCancelingChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    allowedFileExtensionsChange: EventEmitter<Array<string>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    chunkSizeChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hintChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    invalidFileExtensionMessageChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    invalidMaxFileSizeMessageChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    invalidMinFileSizeMessageChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    labelTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    maxFileSizeChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    minFileSizeChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    multipleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    nameChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    progressChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    readyToUploadMessageChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    selectButtonTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    showFileListChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadButtonTextChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadedMessageChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadFailedMessageChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadHeadersChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadMethodChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    uploadUrlChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueChange: EventEmitter<Array<any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxFileUploader;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class DxFileUploaderModule {
}
