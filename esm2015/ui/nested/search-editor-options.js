/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoSearchEditorOptionsComponent.prototype, "textChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], DxoSearchEditorOptionsComponent.prototype, "valueChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => DxiButtonComponent)),
    tslib_1.__metadata("design:type", QueryList),
    tslib_1.__metadata("design:paramtypes", [Object])
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
    tslib_1.__param(1, Host()),
    tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
        NestedOptionHost])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWVkaXRvci1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3NlYXJjaC1lZGl0b3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBNkRsRCxJQUFhLCtCQUErQixHQUE1QyxxQ0FBNkMsU0FBUSxpQkFBaUI7SUF3QmxFLFlBQWdDLGdCQUFrQyxFQUNsRCxVQUE0QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDdEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF4QkQsSUFBYyxXQUFXO1FBQ3JCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBSUQsSUFBSSxlQUFlO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQWVKLENBQUE7QUFoQ2E7SUFBVCxNQUFNLEVBQUU7c0NBQWEsWUFBWTttRUFBUztBQUtqQztJQUFULE1BQU0sRUFBRTtzQ0FBYyxZQUFZO29FQUFTO0FBTzVDO0lBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3NDQUMvQixTQUFTOztzRUFFL0I7QUFuQlEsK0JBQStCO0lBMUQzQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsTUFBTSxFQUFFO1lBQ0osV0FBVztZQUNYLG9CQUFvQjtZQUNwQixTQUFTO1lBQ1QsVUFBVTtZQUNWLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsUUFBUTtZQUNSLE1BQU07WUFDTixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFNBQVM7WUFDVCxNQUFNO1lBQ04sVUFBVTtZQUNWLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsV0FBVztZQUNYLE1BQU07WUFDTixNQUFNO1lBQ04sVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixRQUFRO1lBQ1IsT0FBTztZQUNQLGFBQWE7WUFDYixZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixlQUFlO1lBQ2YsU0FBUztZQUNULFdBQVc7WUFDWCxZQUFZO1lBQ1osU0FBUztZQUNULGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixVQUFVO1lBQ1YsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsWUFBWTtZQUNaLGFBQWE7WUFDYixVQUFVO1lBQ1YsTUFBTTtZQUNOLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsU0FBUztZQUNULE9BQU87U0FDVjtpQkFyRFEsRUFBRTtLQXNEZCxDQUFDO0lBeUJlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBRG1DLGdCQUFnQjtRQUN0QyxnQkFBZ0I7R0F6Qm5DLCtCQUErQixDQXFDM0M7U0FyQ1ksK0JBQStCO0FBK0M1QyxJQUFhLDRCQUE0QixHQUF6QztDQUE2QyxDQUFBO0FBQWhDLDRCQUE0QjtJQVJ4QyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiwrQkFBK0I7U0FDaEM7UUFDRCxPQUFPLEVBQUU7WUFDUCwrQkFBK0I7U0FDaEM7S0FDRixDQUFDO0dBQ1csNEJBQTRCLENBQUk7U0FBaEMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b1RleHRCb3hPcHRpb25zIH0gZnJvbSAnLi9iYXNlL3RleHQtYm94LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tc2VhcmNoLWVkaXRvci1vcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2J1dHRvbnMnLFxyXG4gICAgICAgICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ2VsZW1lbnRBdHRyJyxcclxuICAgICAgICAnZm9jdXNTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpbnB1dEF0dHInLFxyXG4gICAgICAgICdpc1ZhbGlkJyxcclxuICAgICAgICAnbWFzaycsXHJcbiAgICAgICAgJ21hc2tDaGFyJyxcclxuICAgICAgICAnbWFza0ludmFsaWRNZXNzYWdlJyxcclxuICAgICAgICAnbWFza1J1bGVzJyxcclxuICAgICAgICAnbWF4TGVuZ3RoJyxcclxuICAgICAgICAnbW9kZScsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICdvbkNoYW5nZScsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25Db3B5JyxcclxuICAgICAgICAnb25DdXQnLFxyXG4gICAgICAgICdvbkRpc3Bvc2luZycsXHJcbiAgICAgICAgJ29uRW50ZXJLZXknLFxyXG4gICAgICAgICdvbkZvY3VzSW4nLFxyXG4gICAgICAgICdvbkZvY3VzT3V0JyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uSW5wdXQnLFxyXG4gICAgICAgICdvbktleURvd24nLFxyXG4gICAgICAgICdvbktleVByZXNzJyxcclxuICAgICAgICAnb25LZXlVcCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uUGFzdGUnLFxyXG4gICAgICAgICdvblZhbHVlQ2hhbmdlZCcsXHJcbiAgICAgICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgICAncmVhZE9ubHknLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAnc2hvd0NsZWFyQnV0dG9uJyxcclxuICAgICAgICAnc2hvd01hc2tNb2RlJyxcclxuICAgICAgICAnc3BlbGxjaGVjaycsXHJcbiAgICAgICAgJ3N0eWxpbmdNb2RlJyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd0ZXh0JyxcclxuICAgICAgICAndXNlTWFza2VkVmFsdWUnLFxyXG4gICAgICAgICd2YWxpZGF0aW9uRXJyb3InLFxyXG4gICAgICAgICd2YWxpZGF0aW9uTWVzc2FnZU1vZGUnLFxyXG4gICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgJ3ZhbHVlQ2hhbmdlRXZlbnQnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TZWFyY2hFZGl0b3JPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgRHhvVGV4dEJveE9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdGV4dENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmFsdWVDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnc2VhcmNoRWRpdG9yT3B0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlCdXR0b25Db21wb25lbnQpKVxyXG4gICAgZ2V0IGJ1dHRvbnNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpQnV0dG9uQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYnV0dG9ucycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJ1dHRvbnNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ2J1dHRvbnMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAndGV4dENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAndmFsdWVDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc01vZHVsZSB7IH1cclxuIl19