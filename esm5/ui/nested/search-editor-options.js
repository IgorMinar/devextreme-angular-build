/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
/* tslint:disable:use-input-property-decorator */
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
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
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoSearchEditorOptionsComponent.prototype, "textChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DxoSearchEditorOptionsComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiButtonComponent; })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWVkaXRvci1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGV2ZXh0cmVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWkvbmVzdGVkL3NlYXJjaC1lZGl0b3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBNkRsRDtJQUFxRCwyREFBaUI7SUF3QmxFLHlDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQVNWO1FBUEcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUF4QkQsc0JBQWMsd0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSw0REFBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFDRCxVQUFvQixLQUFLO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUhBO0lBZFM7UUFBVCxNQUFNLEVBQUU7MENBQWEsWUFBWTt1RUFBUztJQUtqQztRQUFULE1BQU0sRUFBRTswQ0FBYyxZQUFZO3dFQUFTO0lBTzVDO1FBREMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUMsQ0FBQzswQ0FDL0IsU0FBUzs7MEVBRS9CO0lBbkJRLCtCQUErQjtRQTFEM0MsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsRUFBRTtZQUVaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsU0FBUztnQkFDVCxVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixVQUFVO2dCQUNWLG9CQUFvQjtnQkFDcEIsV0FBVztnQkFDWCxXQUFXO2dCQUNYLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixPQUFPO2dCQUNQLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixTQUFTO2dCQUNULGlCQUFpQjtnQkFDakIsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixNQUFNO2dCQUNOLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLE9BQU87Z0JBQ1Asa0JBQWtCO2dCQUNsQixTQUFTO2dCQUNULE9BQU87YUFDVjtxQkFyRFEsRUFBRTtTQXNEZCxDQUFDO1FBeUJlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0F6Qm5DLCtCQUErQixDQXFDM0M7SUFBRCxzQ0FBQztDQUFBLEFBckNELENBQXFELGlCQUFpQixHQXFDckU7U0FyQ1ksK0JBQStCO0FBK0M1QztJQUFBO0lBQTRDLENBQUM7SUFBaEMsNEJBQTRCO1FBUnhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiwrQkFBK0I7YUFDaEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztPQUNXLDRCQUE0QixDQUFJO0lBQUQsbUNBQUM7Q0FBQSxBQUE3QyxJQUE2QztTQUFoQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvVGV4dEJveE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvdGV4dC1ib3gtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zZWFyY2gtZWRpdG9yLW9wdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYnV0dG9ucycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2lucHV0QXR0cicsXHJcbiAgICAgICAgJ2lzVmFsaWQnLFxyXG4gICAgICAgICdtYXNrJyxcclxuICAgICAgICAnbWFza0NoYXInLFxyXG4gICAgICAgICdtYXNrSW52YWxpZE1lc3NhZ2UnLFxyXG4gICAgICAgICdtYXNrUnVsZXMnLFxyXG4gICAgICAgICdtYXhMZW5ndGgnLFxyXG4gICAgICAgICdtb2RlJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ29uQ2hhbmdlJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkNvcHknLFxyXG4gICAgICAgICdvbkN1dCcsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25FbnRlcktleScsXHJcbiAgICAgICAgJ29uRm9jdXNJbicsXHJcbiAgICAgICAgJ29uRm9jdXNPdXQnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25JbnB1dCcsXHJcbiAgICAgICAgJ29uS2V5RG93bicsXHJcbiAgICAgICAgJ29uS2V5UHJlc3MnLFxyXG4gICAgICAgICdvbktleVVwJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25QYXN0ZScsXHJcbiAgICAgICAgJ29uVmFsdWVDaGFuZ2VkJyxcclxuICAgICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaG93Q2xlYXJCdXR0b24nLFxyXG4gICAgICAgICdzaG93TWFza01vZGUnLFxyXG4gICAgICAgICdzcGVsbGNoZWNrJyxcclxuICAgICAgICAnc3R5bGluZ01vZGUnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd1c2VNYXNrZWRWYWx1ZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25FcnJvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmFsdWVDaGFuZ2VFdmVudCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9UZXh0Qm94T3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0ZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzZWFyY2hFZGl0b3JPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUJ1dHRvbkNvbXBvbmVudCkpXHJcbiAgICBnZXQgYnV0dG9uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlCdXR0b25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignYnV0dG9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0ZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TZWFyY2hFZGl0b3JPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=