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
let DxoSearchEditorOptionsComponent = class DxoSearchEditorOptionsComponent extends DxoTextBoxOptions {
    constructor(parentOptionHost, optionHost) {
        super();
        this._createEventEmitters([
            { emit: 'textChange' },
            { emit: 'valueChange' }
        ]);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    get _optionPath() {
        return 'searchEditorOptions';
    }
    get buttonsChildren() {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this.setChildren('buttons', value);
    }
};
DxoSearchEditorOptionsComponent.ctorParameters = () => [
    { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
    { type: NestedOptionHost, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Output()
], DxoSearchEditorOptionsComponent.prototype, "textChange", void 0);
tslib_1.__decorate([
    Output()
], DxoSearchEditorOptionsComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiButtonComponent))
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
export { DxoSearchEditorOptionsComponent };
let DxoSearchEditorOptionsModule = class DxoSearchEditorOptionsModule {
};
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
export { DxoSearchEditorOptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWVkaXRvci1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyL3VpL25lc3RlZC8iLCJzb3VyY2VzIjpbInNlYXJjaC1lZGl0b3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSCxvQ0FBb0M7QUFFcEMsaURBQWlEO0FBRWpELE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUVOLGVBQWUsRUFDZixVQUFVLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUNILGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTZEbEQsSUFBYSwrQkFBK0IsR0FBNUMscUNBQTZDLFNBQVEsaUJBQWlCO0lBd0JsRSxZQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBeEJELElBQWMsV0FBVztRQUNyQixPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7SUFJRCxJQUFJLGVBQWU7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQWVKLENBQUE7O1lBYnFELGdCQUFnQix1QkFBckQsUUFBUSxZQUFJLElBQUk7WUFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0FBcEJIO0lBQVQsTUFBTSxFQUFFO21FQUFrQztBQUtqQztJQUFULE1BQU0sRUFBRTtvRUFBbUM7QUFPNUM7SUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUM7c0VBR3JEO0FBbkJRLCtCQUErQjtJQTFEM0MsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLE1BQU0sRUFBRTtZQUNKLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsU0FBUztZQUNULFVBQVU7WUFDVixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFFBQVE7WUFDUixNQUFNO1lBQ04sbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxTQUFTO1lBQ1QsTUFBTTtZQUNOLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsV0FBVztZQUNYLFdBQVc7WUFDWCxNQUFNO1lBQ04sTUFBTTtZQUNOLFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLE9BQU87WUFDUCxhQUFhO1lBQ2IsWUFBWTtZQUNaLFdBQVc7WUFDWCxZQUFZO1lBQ1osZUFBZTtZQUNmLFNBQVM7WUFDVCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsU0FBUztZQUNULGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsVUFBVTtZQUNWLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsY0FBYztZQUNkLFlBQVk7WUFDWixhQUFhO1lBQ2IsVUFBVTtZQUNWLE1BQU07WUFDTixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2QixPQUFPO1lBQ1Asa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxPQUFPO1NBQ1Y7aUJBckRRLEVBQUU7S0FzRGQsQ0FBQztJQXlCZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO0lBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO0dBekJOLCtCQUErQixDQXFDM0M7U0FyQ1ksK0JBQStCO0FBK0M1QyxJQUFhLDRCQUE0QixHQUF6QztDQUE2QyxDQUFBO0FBQWhDLDRCQUE0QjtJQVJ4QyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiwrQkFBK0I7U0FDaEM7UUFDRCxPQUFPLEVBQUU7WUFDUCwrQkFBK0I7U0FDaEM7S0FDRixDQUFDO0dBQ1csNEJBQTRCLENBQUk7U0FBaEMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZXN0ZWRPcHRpb25Ib3N0LFxyXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHhvVGV4dEJveE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvdGV4dC1ib3gtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zZWFyY2gtZWRpdG9yLW9wdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYnV0dG9ucycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2lucHV0QXR0cicsXHJcbiAgICAgICAgJ2lzVmFsaWQnLFxyXG4gICAgICAgICdtYXNrJyxcclxuICAgICAgICAnbWFza0NoYXInLFxyXG4gICAgICAgICdtYXNrSW52YWxpZE1lc3NhZ2UnLFxyXG4gICAgICAgICdtYXNrUnVsZXMnLFxyXG4gICAgICAgICdtYXhMZW5ndGgnLFxyXG4gICAgICAgICdtb2RlJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ29uQ2hhbmdlJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkNvcHknLFxyXG4gICAgICAgICdvbkN1dCcsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25FbnRlcktleScsXHJcbiAgICAgICAgJ29uRm9jdXNJbicsXHJcbiAgICAgICAgJ29uRm9jdXNPdXQnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25JbnB1dCcsXHJcbiAgICAgICAgJ29uS2V5RG93bicsXHJcbiAgICAgICAgJ29uS2V5UHJlc3MnLFxyXG4gICAgICAgICdvbktleVVwJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25QYXN0ZScsXHJcbiAgICAgICAgJ29uVmFsdWVDaGFuZ2VkJyxcclxuICAgICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaG93Q2xlYXJCdXR0b24nLFxyXG4gICAgICAgICdzaG93TWFza01vZGUnLFxyXG4gICAgICAgICdzcGVsbGNoZWNrJyxcclxuICAgICAgICAnc3R5bGluZ01vZGUnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd1c2VNYXNrZWRWYWx1ZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25FcnJvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmFsdWVDaGFuZ2VFdmVudCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9UZXh0Qm94T3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1lbWJlciBzdXBwb3J0cyB0aGUgaW50ZXJuYWwgaW5mcmFzdHJ1Y3R1cmUgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGRpcmVjdGx5IGZyb20geW91ciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ3NlYXJjaEVkaXRvck9wdGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gRHhpQnV0dG9uQ29tcG9uZW50KSlcclxuICAgIGdldCBidXR0b25zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUJ1dHRvbkNvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2J1dHRvbnMnKTtcclxuICAgIH1cclxuICAgIHNldCBidXR0b25zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdidXR0b25zJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlRXZlbnRFbWl0dGVycyhbXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3RleHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3ZhbHVlQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9TZWFyY2hFZGl0b3JPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9TZWFyY2hFZGl0b3JPcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1NlYXJjaEVkaXRvck9wdGlvbnNNb2R1bGUgeyB9XHJcbiJdfQ==