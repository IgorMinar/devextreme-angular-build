(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('devextreme/ui/file_uploader'), require('devextreme-angular/ui/validator'), require('@angular/forms'), require('devextreme-angular/core')) :
    typeof define === 'function' && define.amd ? define('devextreme-angular/ui/file-uploader', ['exports', '@angular/platform-browser', '@angular/core', 'devextreme/ui/file_uploader', 'devextreme-angular/ui/validator', '@angular/forms', 'devextreme-angular/core'], factory) :
    (global = global || self, factory((global['devextreme-angular'] = global['devextreme-angular'] || {}, global['devextreme-angular'].ui = global['devextreme-angular'].ui || {}, global['devextreme-angular'].ui['file-uploader'] = {}), global.ng.platformBrowser, global.ng.core, global.DxFileUploader, global['devextreme-angular'].ui.validator, global.ng.forms, global['devextreme-angular'].core));
}(this, function (exports, platformBrowser, core, DxFileUploader, validator, forms, core$1) { 'use strict';

    DxFileUploader = DxFileUploader && DxFileUploader.hasOwnProperty('default') ? DxFileUploader['default'] : DxFileUploader;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return DxFileUploaderComponent; }),
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
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: core$1.DxTemplateHost },
            { type: core$1.WatcherHelper },
            { type: core$1.IterableDifferHelper },
            { type: core$1.NestedOptionHost },
            { type: platformBrowser.TransferState },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        __decorate([
            core.ContentChild(validator.DxValidatorComponent)
        ], DxFileUploaderComponent.prototype, "validator", void 0);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "accept", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "accessKey", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "activeStateEnabled", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "allowCanceling", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "allowedFileExtensions", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "chunkSize", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "elementAttr", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "focusStateEnabled", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "height", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "hoverStateEnabled", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "invalidFileExtensionMessage", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "invalidMaxFileSizeMessage", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "invalidMinFileSizeMessage", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "isValid", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "labelText", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "maxFileSize", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "minFileSize", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "multiple", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "progress", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "readOnly", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "readyToUploadMessage", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "rtlEnabled", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "selectButtonText", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "showFileList", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "tabIndex", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadButtonText", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadedMessage", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadFailedMessage", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadHeaders", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadMethod", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadMode", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "uploadUrl", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "validationError", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "visible", null);
        __decorate([
            core.Input()
        ], DxFileUploaderComponent.prototype, "width", null);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onContentReady", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onDisposing", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onOptionChanged", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onProgress", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onUploadAborted", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onUploaded", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onUploadError", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onUploadStarted", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onValueChanged", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "acceptChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "accessKeyChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "activeStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "allowCancelingChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "allowedFileExtensionsChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "chunkSizeChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "disabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "elementAttrChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "focusStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "heightChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "hintChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "hoverStateEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "invalidFileExtensionMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "invalidMaxFileSizeMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "invalidMinFileSizeMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "isValidChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "labelTextChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "maxFileSizeChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "minFileSizeChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "multipleChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "nameChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "progressChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "readOnlyChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "readyToUploadMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "rtlEnabledChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "selectButtonTextChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "showFileListChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "tabIndexChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadButtonTextChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadedMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadFailedMessageChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadHeadersChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadMethodChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadModeChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "uploadUrlChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "validationErrorChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "valueChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "visibleChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "widthChange", void 0);
        __decorate([
            core.Output()
        ], DxFileUploaderComponent.prototype, "onBlur", void 0);
        __decorate([
            core.HostListener('valueChange', ['$event'])
        ], DxFileUploaderComponent.prototype, "change", null);
        __decorate([
            core.HostListener('onBlur', ['$event'])
        ], DxFileUploaderComponent.prototype, "touched", void 0);
        DxFileUploaderComponent = __decorate([
            core.Component({
                selector: 'dx-file-uploader',
                template: '',
                providers: [
                    core$1.DxTemplateHost,
                    core$1.WatcherHelper,
                    CUSTOM_VALUE_ACCESSOR_PROVIDER,
                    core$1.NestedOptionHost,
                    core$1.IterableDifferHelper
                ]
            }),
            __param(7, core.Inject(core.PLATFORM_ID))
        ], DxFileUploaderComponent);
        return DxFileUploaderComponent;
    }(core$1.DxComponent));
    var DxFileUploaderModule = /** @class */ (function () {
        function DxFileUploaderModule() {
        }
        DxFileUploaderModule = __decorate([
            core.NgModule({
                imports: [
                    core$1.DxIntegrationModule,
                    core$1.DxTemplateModule,
                    platformBrowser.BrowserTransferStateModule
                ],
                declarations: [
                    DxFileUploaderComponent
                ],
                exports: [
                    DxFileUploaderComponent,
                    core$1.DxTemplateModule
                ]
            })
        ], DxFileUploaderModule);
        return DxFileUploaderModule;
    }());

    exports.DxFileUploaderComponent = DxFileUploaderComponent;
    exports.DxFileUploaderModule = DxFileUploaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=devextreme-angular-ui-file-uploader.umd.js.map
