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
import * as tslib_1 from "tslib";
/* tslint:disable:max-line-length */
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, ContentChildren, forwardRef } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxoTextBoxOptions } from './base/text-box-options';
import { DxiButtonComponent } from './button-dxi';
var DxoSearchEditorOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxoSearchEditorOptionsComponent, _super);
    function DxoSearchEditorOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'textChange' },
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSearchEditorOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'searchEditorOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchEditorOptionsComponent.prototype, "buttonsChildren", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this.setChildren('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoSearchEditorOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Output()
    ], DxoSearchEditorOptionsComponent.prototype, "textChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DxoSearchEditorOptionsComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiButtonComponent; }))
    ], DxoSearchEditorOptionsComponent.prototype, "buttonsChildren", null);
    DxoSearchEditorOptionsComponent = tslib_1.__decorate([
        Component({
            selector: 'dxo-search-editor-options',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'accessKey',
                'activeStateEnabled',
                'buttons',
                'disabled',
                'elementAttr',
                'focusStateEnabled',
                'height',
                'hint',
                'hoverStateEnabled',
                'inputAttr',
                'isValid',
                'mask',
                'maskChar',
                'maskInvalidMessage',
                'maskRules',
                'maxLength',
                'mode',
                'name',
                'onChange',
                'onContentReady',
                'onCopy',
                'onCut',
                'onDisposing',
                'onEnterKey',
                'onFocusIn',
                'onFocusOut',
                'onInitialized',
                'onInput',
                'onKeyDown',
                'onKeyPress',
                'onKeyUp',
                'onOptionChanged',
                'onPaste',
                'onValueChanged',
                'placeholder',
                'readOnly',
                'rtlEnabled',
                'showClearButton',
                'showMaskMode',
                'spellcheck',
                'stylingMode',
                'tabIndex',
                'text',
                'useMaskedValue',
                'validationError',
                'validationMessageMode',
                'value',
                'valueChangeEvent',
                'visible',
                'width'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxoSearchEditorOptionsComponent);
    return DxoSearchEditorOptionsComponent;
}(DxoTextBoxOptions));
export { DxoSearchEditorOptionsComponent };
var DxoSearchEditorOptionsModule = /** @class */ (function () {
    function DxoSearchEditorOptionsModule() {
    }
    DxoSearchEditorOptionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxoSearchEditorOptionsComponent
            ],
            exports: [
                DxoSearchEditorOptionsComponent
            ],
        })
    ], DxoSearchEditorOptionsModule);
    return DxoSearchEditorOptionsModule;
}());
export { DxoSearchEditorOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWVkaXRvci1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbInNlYXJjaC1lZGl0b3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUVOLGVBQWUsRUFDZixVQUFVLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTZEbEQ7SUFBcUQsMkRBQWlCO0lBd0JsRSx5Q0FBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FTVjtRQVBHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDdEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBeEJELHNCQUFjLHdEQUFXO2FBQXpCO1lBQ0ksT0FBTyxxQkFBcUIsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDREQUFlO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFDRCxVQUFvQixLQUFLO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUhBOztnQkFLaUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtnQkFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0lBcEJIO1FBQVQsTUFBTSxFQUFFO3VFQUFrQztJQUtqQztRQUFULE1BQU0sRUFBRTt3RUFBbUM7SUFPNUM7UUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDOzBFQUdyRDtJQW5CUSwrQkFBK0I7UUExRDNDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osV0FBVztnQkFDWCxvQkFBb0I7Z0JBQ3BCLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDVixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsUUFBUTtnQkFDUixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxTQUFTO2dCQUNULE1BQU07Z0JBQ04sVUFBVTtnQkFDVixvQkFBb0I7Z0JBQ3BCLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxNQUFNO2dCQUNOLE1BQU07Z0JBQ04sVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsT0FBTztnQkFDUCxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsU0FBUztnQkFDVCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxpQkFBaUI7Z0JBQ2pCLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsdUJBQXVCO2dCQUN2QixPQUFPO2dCQUNQLGtCQUFrQjtnQkFDbEIsU0FBUztnQkFDVCxPQUFPO2FBQ1Y7cUJBckRRLEVBQUU7U0FzRGQsQ0FBQztRQXlCZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BekJOLCtCQUErQixDQXFDM0M7SUFBRCxzQ0FBQztDQUFBLEFBckNELENBQXFELGlCQUFpQixHQXFDckU7U0FyQ1ksK0JBQStCO0FBK0M1QztJQUFBO0lBQTRDLENBQUM7SUFBaEMsNEJBQTRCO1FBUnhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiwrQkFBK0I7YUFDaEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztPQUNXLDRCQUE0QixDQUFJO0lBQUQsbUNBQUM7Q0FBQSxBQUE3QyxJQUE2QztTQUFoQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBUdWUgT2N0IDIyIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeG9UZXh0Qm94T3B0aW9ucyB9IGZyb20gJy4vYmFzZS90ZXh0LWJveC1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLXNlYXJjaC1lZGl0b3Itb3B0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhY3RpdmVTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdidXR0b25zJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaGludCcsXHJcbiAgICAgICAgJ2hvdmVyU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnaW5wdXRBdHRyJyxcclxuICAgICAgICAnaXNWYWxpZCcsXHJcbiAgICAgICAgJ21hc2snLFxyXG4gICAgICAgICdtYXNrQ2hhcicsXHJcbiAgICAgICAgJ21hc2tJbnZhbGlkTWVzc2FnZScsXHJcbiAgICAgICAgJ21hc2tSdWxlcycsXHJcbiAgICAgICAgJ21heExlbmd0aCcsXHJcbiAgICAgICAgJ21vZGUnLFxyXG4gICAgICAgICduYW1lJyxcclxuICAgICAgICAnb25DaGFuZ2UnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uQ29weScsXHJcbiAgICAgICAgJ29uQ3V0JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkVudGVyS2V5JyxcclxuICAgICAgICAnb25Gb2N1c0luJyxcclxuICAgICAgICAnb25Gb2N1c091dCcsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbklucHV0JyxcclxuICAgICAgICAnb25LZXlEb3duJyxcclxuICAgICAgICAnb25LZXlQcmVzcycsXHJcbiAgICAgICAgJ29uS2V5VXAnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblBhc3RlJyxcclxuICAgICAgICAnb25WYWx1ZUNoYW5nZWQnLFxyXG4gICAgICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAgICAgJ3JlYWRPbmx5JyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3Nob3dDbGVhckJ1dHRvbicsXHJcbiAgICAgICAgJ3Nob3dNYXNrTW9kZScsXHJcbiAgICAgICAgJ3NwZWxsY2hlY2snLFxyXG4gICAgICAgICdzdHlsaW5nTW9kZScsXHJcbiAgICAgICAgJ3RhYkluZGV4JyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3VzZU1hc2tlZFZhbHVlJyxcclxuICAgICAgICAndmFsaWRhdGlvbkVycm9yJyxcclxuICAgICAgICAndmFsaWRhdGlvbk1lc3NhZ2VNb2RlJyxcclxuICAgICAgICAndmFsdWUnLFxyXG4gICAgICAgICd2YWx1ZUNoYW5nZUV2ZW50JyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIER4b1RleHRCb3hPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB0ZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWVtYmVyIHN1cHBvcnRzIHRoZSBpbnRlcm5hbCBpbmZyYXN0cnVjdHVyZSBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgZGlyZWN0bHkgZnJvbSB5b3VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnc2VhcmNoRWRpdG9yT3B0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlCdXR0b25Db21wb25lbnQpKVxyXG4gICAgZ2V0IGJ1dHRvbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQnV0dG9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2J1dHRvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAndGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc01vZHVsZSB7IH1cclxuIl19