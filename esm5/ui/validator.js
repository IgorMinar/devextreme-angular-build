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
 * Build date: Fri Sep 20 2019
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
import DxValidator from 'devextreme/ui/validator';
import { DxComponentExtension } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { DxIntegrationModule } from '../core/integration';
import { DxTemplateModule } from '../core/template';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxoAdapterModule } from './nested/adapter';
import { DxiValidationRuleModule } from './nested/validation-rule-dxi';
import { DxiValidationRuleComponent } from './nested/validation-rule-dxi';
/**
 * A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
 */
var DxValidatorComponent = (function (_super) {
    __extends(DxValidatorComponent, _super);
    function DxValidatorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'validated', emit: 'onValidated' },
            { emit: 'adapterChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'nameChange' },
            { emit: 'validationGroupChange' },
            { emit: 'validationRulesChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxValidatorComponent.prototype, "adapter", {
        get: /**
             * An object that specifies what and when to validate, and how to apply the validation result.
             */
        function () {
            return this._getOption('adapter');
        },
        set: function (value) {
            this._setOption('adapter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "height", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "name", {
        get: /**
             * Specifies the editor name to be used in the validation default messages.
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationGroup", {
        get: /**
             * Specifies the validation group the editor will be related to.
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationRules", {
        get: /**
             * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
             */
        function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "width", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidatorComponent.prototype._createInstance = function (element, options) {
        return new DxValidator(element, options);
    };
    DxValidatorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidatorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('validationRules', changes);
    };
    DxValidatorComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxValidatorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('validationRules');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxValidatorComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxValidatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dx-validator',
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
    DxValidatorComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: DxTemplateHost, },
        { type: WatcherHelper, },
        { type: IterableDifferHelper, },
        { type: NestedOptionHost, },
        { type: TransferState, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    DxValidatorComponent.propDecorators = {
        "adapter": [{ type: Input },],
        "elementAttr": [{ type: Input },],
        "height": [{ type: Input },],
        "name": [{ type: Input },],
        "validationGroup": [{ type: Input },],
        "validationRules": [{ type: Input },],
        "width": [{ type: Input },],
        "onDisposing": [{ type: Output },],
        "onInitialized": [{ type: Output },],
        "onOptionChanged": [{ type: Output },],
        "onValidated": [{ type: Output },],
        "adapterChange": [{ type: Output },],
        "elementAttrChange": [{ type: Output },],
        "heightChange": [{ type: Output },],
        "nameChange": [{ type: Output },],
        "validationGroupChange": [{ type: Output },],
        "validationRulesChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "validationRulesChildren": [{ type: ContentChildren, args: [DxiValidationRuleComponent,] },],
    };
    return DxValidatorComponent;
}(DxComponentExtension));
export { DxValidatorComponent };
var DxValidatorModule = (function () {
    function DxValidatorModule() {
    }
    DxValidatorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DxoAdapterModule,
                        DxiValidationRuleModule,
                        DxIntegrationModule,
                        DxTemplateModule,
                        BrowserTransferStateModule
                    ],
                    declarations: [
                        DxValidatorComponent
                    ],
                    exports: [
                        DxValidatorComponent,
                        DxoAdapterModule,
                        DxiValidationRuleModule,
                        DxTemplateModule
                    ]
                },] },
    ];
    return DxValidatorModule;
}());
export { DxValidatorModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdWkvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBR2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0lBa0JoQyx3Q0FBb0I7SUEwSjFELDhCQUFZLFVBQXNCLEVBQUUsTUFBYyxFQUFFLFlBQTRCLEVB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Q2pCO2lCQUNGOzs0QkE1VEQ7O1NBNlRhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgTmdab25lLFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBJbmplY3QsXHJcblxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBEb0NoZWNrLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCBEZXZFeHByZXNzIGZyb20gJ2RldmV4dHJlbWUvYnVuZGxlcy9keC5hbGwnO1xyXG5cclxuaW1wb3J0IER4VmFsaWRhdG9yIGZyb20gJ2RldmV4dHJlbWUvdWkvdmFsaWRhdG9yJztcclxuXHJcblxyXG5pbXBvcnQgeyBEeENvbXBvbmVudEV4dGVuc2lvbiB9IGZyb20gJy4uL2NvcmUvY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHhUZW1wbGF0ZUhvc3QgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlLWhvc3QnO1xyXG5pbXBvcnQgeyBEeEludGVncmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9pbnRlZ3JhdGlvbic7XHJcbmltcG9ydCB7IER4VGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IFdhdGNoZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL3dhdGNoZXItaGVscGVyJztcclxuaW1wb3J0IHsgSXRlcmFibGVEaWZmZXJIZWxwZXIgfSBmcm9tICcuLi9jb3JlL2l0ZXJhYmxlLWRpZmZlci1oZWxwZXInO1xyXG5cclxuaW1wb3J0IHsgRHhvQWRhcHRlck1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL2FkYXB0ZXInO1xyXG5pbXBvcnQgeyBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSB9IGZyb20gJy4vbmVzdGVkL3ZhbGlkYXRpb24tcnVsZS1keGknO1xyXG5cclxuaW1wb3J0IHsgRHhpVmFsaWRhdGlvblJ1bGVDb21wb25lbnQgfSBmcm9tICcuL25lc3RlZC92YWxpZGF0aW9uLXJ1bGUtZHhpJztcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIHdpZGdldCB0aGF0IGlzIHVzZWQgdG8gdmFsaWRhdGUgdGhlIGFzc29jaWF0ZWQgRGV2RXh0cmVtZSBlZGl0b3JzIGFnYWluc3QgdGhlIGRlZmluZWQgdmFsaWRhdGlvbiBydWxlcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeC12YWxpZGF0b3InLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRHhUZW1wbGF0ZUhvc3QsXHJcbiAgICAgICAgV2F0Y2hlckhlbHBlcixcclxuICAgICAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgIEl0ZXJhYmxlRGlmZmVySGVscGVyXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFZhbGlkYXRvckNvbXBvbmVudCBleHRlbmRzIER4Q29tcG9uZW50RXh0ZW5zaW9uIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgaW5zdGFuY2U6IER4VmFsaWRhdG9yO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyB3aGF0IGFuZCB3aGVuIHRvIHZhbGlkYXRlLCBhbmQgaG93IHRvIGFwcGx5IHRoZSB2YWxpZGF0aW9uIHJlc3VsdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhZGFwdGVyKCk6IHsgYXBwbHlWYWxpZGF0aW9uUmVzdWx0cz86IEZ1bmN0aW9uLCBieXBhc3M/OiBGdW5jdGlvbiwgZm9jdXM/OiBGdW5jdGlvbiwgZ2V0VmFsdWU/OiBGdW5jdGlvbiwgcmVzZXQ/OiBGdW5jdGlvbiwgdmFsaWRhdGlvblJlcXVlc3RzQ2FsbGJhY2tzPzogYW55IHwgQXJyYXk8RnVuY3Rpb24+IH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2FkYXB0ZXInKTtcclxuICAgIH1cclxuICAgIHNldCBhZGFwdGVyKHZhbHVlOiB7IGFwcGx5VmFsaWRhdGlvblJlc3VsdHM/OiBGdW5jdGlvbiwgYnlwYXNzPzogRnVuY3Rpb24sIGZvY3VzPzogRnVuY3Rpb24sIGdldFZhbHVlPzogRnVuY3Rpb24sIHJlc2V0PzogRnVuY3Rpb24sIHZhbGlkYXRpb25SZXF1ZXN0c0NhbGxiYWNrcz86IGFueSB8IEFycmF5PEZ1bmN0aW9uPiB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdhZGFwdGVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgYXR0cmlidXRlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgd2lkZ2V0J3Mgcm9vdCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVsZW1lbnRBdHRyKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZWxlbWVudEF0dHInKTtcclxuICAgIH1cclxuICAgIHNldCBlbGVtZW50QXR0cih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdlbGVtZW50QXR0cicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZGdldCdzIGhlaWdodC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2hlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2hlaWdodCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGVkaXRvciBuYW1lIHRvIGJlIHVzZWQgaW4gdGhlIHZhbGlkYXRpb24gZGVmYXVsdCBtZXNzYWdlcy5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmFtZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmFtZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZhbGlkYXRpb24gZ3JvdXAgdGhlIGVkaXRvciB3aWxsIGJlIHJlbGF0ZWQgdG8uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsaWRhdGlvbkdyb3VwKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigndmFsaWRhdGlvbkdyb3VwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsaWRhdGlvbkdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbGlkYXRpb25Hcm91cCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiB2YWxpZGF0aW9uIHJ1bGVzIHRvIGJlIGNoZWNrZWQgZm9yIHRoZSBlZGl0b3Igd2l0aCB3aGljaCB0aGUgZHhWYWxpZGF0b3Igb2JqZWN0IGlzIGFzc29jaWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsaWRhdGlvblJ1bGVzKCk6IEFycmF5PERldkV4cHJlc3MudWkuUmVxdWlyZWRSdWxlIHwgRGV2RXhwcmVzcy51aS5OdW1lcmljUnVsZSB8IERldkV4cHJlc3MudWkuUmFuZ2VSdWxlIHwgRGV2RXhwcmVzcy51aS5TdHJpbmdMZW5ndGhSdWxlIHwgRGV2RXhwcmVzcy51aS5DdXN0b21SdWxlIHwgRGV2RXhwcmVzcy51aS5Db21wYXJlUnVsZSB8IERldkV4cHJlc3MudWkuUGF0dGVyblJ1bGUgfCBEZXZFeHByZXNzLnVpLkVtYWlsUnVsZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25SdWxlcyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5SZXF1aXJlZFJ1bGUgfCBEZXZFeHByZXNzLnVpLk51bWVyaWNSdWxlIHwgRGV2RXhwcmVzcy51aS5SYW5nZVJ1bGUgfCBEZXZFeHByZXNzLnVpLlN0cmluZ0xlbmd0aFJ1bGUgfCBEZXZFeHByZXNzLnVpLkN1c3RvbVJ1bGUgfCBEZXZFeHByZXNzLnVpLkNvbXBhcmVSdWxlIHwgRGV2RXhwcmVzcy51aS5QYXR0ZXJuUnVsZSB8IERldkV4cHJlc3MudWkuRW1haWxSdWxlPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbigndmFsaWRhdGlvblJ1bGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkZ2V0J3Mgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3dpZHRoJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd3aWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIHdpZGdldCBpcyBkaXNwb3NlZCBvZi5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG9uRGlzcG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCBpbiBKYXZhU2NyaXB0IGZyYW1ld29ya3MgdG8gc2F2ZSB0aGUgd2lkZ2V0IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgYWZ0ZXIgYSB3aWRnZXQgb3B0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFmdGVyIGEgdmFsdWUgaXMgdmFsaWRhdGVkLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25WYWxpZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYWRhcHRlckNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGFkYXB0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGFwcGx5VmFsaWRhdGlvblJlc3VsdHM/OiBGdW5jdGlvbiwgYnlwYXNzPzogRnVuY3Rpb24sIGZvY3VzPzogRnVuY3Rpb24sIGdldFZhbHVlPzogRnVuY3Rpb24sIHJlc2V0PzogRnVuY3Rpb24sIHZhbGlkYXRpb25SZXF1ZXN0c0NhbGxiYWNrcz86IGFueSB8IEFycmF5PEZ1bmN0aW9uPiB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnRBdHRyQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudEF0dHJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgaGVpZ2h0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgaGVpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgbmFtZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG5hbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsaWRhdGlvbkdyb3VwQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsaWRhdGlvbkdyb3VwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHZhbGlkYXRpb25SdWxlc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbGlkYXRpb25SdWxlc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PERldkV4cHJlc3MudWkuUmVxdWlyZWRSdWxlIHwgRGV2RXhwcmVzcy51aS5OdW1lcmljUnVsZSB8IERldkV4cHJlc3MudWkuUmFuZ2VSdWxlIHwgRGV2RXhwcmVzcy51aS5TdHJpbmdMZW5ndGhSdWxlIHwgRGV2RXhwcmVzcy51aS5DdXN0b21SdWxlIHwgRGV2RXhwcmVzcy51aS5Db21wYXJlUnVsZSB8IERldkV4cHJlc3MudWkuUGF0dGVyblJ1bGUgfCBEZXZFeHByZXNzLnVpLkVtYWlsUnVsZT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgd2lkdGhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB3aWR0aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKER4aVZhbGlkYXRpb25SdWxlQ29tcG9uZW50KVxyXG4gICAgZ2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlWYWxpZGF0aW9uUnVsZUNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbGlkYXRpb25SdWxlc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbigndmFsaWRhdGlvblJ1bGVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgdGVtcGxhdGVIb3N0OiBEeFRlbXBsYXRlSG9zdCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBfd2F0Y2hlckhlbHBlcjogV2F0Y2hlckhlbHBlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBfaWRoOiBJdGVyYWJsZURpZmZlckhlbHBlciwgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcclxuICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55KSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgdGVtcGxhdGVIb3N0LCBfd2F0Y2hlckhlbHBlciwgdHJhbnNmZXJTdGF0ZSwgcGxhdGZvcm1JZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ2Rpc3Bvc2luZycsIGVtaXQ6ICdvbkRpc3Bvc2luZycgfSxcclxuICAgICAgICAgICAgeyBzdWJzY3JpYmU6ICdpbml0aWFsaXplZCcsIGVtaXQ6ICdvbkluaXRpYWxpemVkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ29wdGlvbkNoYW5nZWQnLCBlbWl0OiAnb25PcHRpb25DaGFuZ2VkJyB9LFxyXG4gICAgICAgICAgICB7IHN1YnNjcmliZTogJ3ZhbGlkYXRlZCcsIGVtaXQ6ICdvblZhbGlkYXRlZCcgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnYWRhcHRlckNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnZWxlbWVudEF0dHJDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ2hlaWdodENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnbmFtZUNoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsaWRhdGlvbkdyb3VwQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWxpZGF0aW9uUnVsZXNDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3dpZHRoQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkaC5zZXRIb3N0KHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER4VmFsaWRhdG9yKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lXaWRnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cENoYW5nZXMoJ3ZhbGlkYXRpb25SdWxlcycsIGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ2hhbmdlcyhwcm9wOiBzdHJpbmcsIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIShwcm9wIGluIHRoaXMuX29wdGlvbnNUb1VwZGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faWRoLnNldHVwKHByb3AsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5faWRoLmRvQ2hlY2soJ3ZhbGlkYXRpb25SdWxlcycpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoZXJIZWxwZXIuY2hlY2tXYXRjaGVycygpO1xyXG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xyXG4gICAgICAgIHN1cGVyLmNsZWFyQ2hhbmdlZE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBpc1NldHVwID0gdGhpcy5faWRoLnNldHVwU2luZ2xlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGhpcy5faWRoLmdldENoYW5nZXMobmFtZSwgdmFsdWUpICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNTZXR1cCB8fCBpc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuX3NldE9wdGlvbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEeG9BZGFwdGVyTW9kdWxlLFxyXG4gICAgRHhpVmFsaWRhdGlvblJ1bGVNb2R1bGUsXHJcbiAgICBEeEludGVncmF0aW9uTW9kdWxlLFxyXG4gICAgRHhUZW1wbGF0ZU1vZHVsZSxcclxuICAgIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4VmFsaWRhdG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeFZhbGlkYXRvckNvbXBvbmVudCxcclxuICAgIER4b0FkYXB0ZXJNb2R1bGUsXHJcbiAgICBEeGlWYWxpZGF0aW9uUnVsZU1vZHVsZSxcclxuICAgIER4VGVtcGxhdGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeFZhbGlkYXRvck1vZHVsZSB7IH1cclxuIl19