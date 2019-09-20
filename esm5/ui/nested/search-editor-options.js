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
import { Component, NgModule, Host, SkipSelf, Output, EventEmitter, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoTextBoxOptions } from './base/text-box-options';
import { DxiButtonComponent } from './button-dxi';
var DxoSearchEditorOptionsComponent = (function (_super) {
    __extends(DxoSearchEditorOptionsComponent, _super);
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
    DxoSearchEditorOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-search-editor-options',
                    template: '',
                    styles: [''],
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
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoSearchEditorOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoSearchEditorOptionsComponent.propDecorators = {
        "textChange": [{ type: Output },],
        "valueChange": [{ type: Output },],
        "buttonsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiButtonComponent; }),] },],
    };
    return DxoSearchEditorOptionsComponent;
}(DxoTextBoxOptions));
export { DxoSearchEditorOptionsComponent };
var DxoSearchEditorOptionsModule = (function () {
    function DxoSearchEditorOptionsModule() {
    }
    DxoSearchEditorOptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoSearchEditorOptionsComponent
                    ],
                    exports: [
                        DxoSearchEditorOptionsComponent
                    ],
                },] },
    ];
    return DxoSearchEditorOptionsModule;
}());
export { DxoSearchEditorOptionsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWVkaXRvci1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL3NlYXJjaC1lZGl0b3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBNkRHLG1EQUFpQjtJQXdCbEUseUNBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBU1Y7UUFQRyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUF4QkQsc0JBQWMsd0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMscUJBQXFCLENBQUM7U0FDaEM7OztPQUFBOzBCQUlHLDREQUFlOztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzthQUV0QyxVQUFvQixLQUFLO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDOzs7OztnQkFoRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsU0FBUzt3QkFDVCxNQUFNO3dCQUNOLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsTUFBTTt3QkFDTixNQUFNO3dCQUNOLFVBQVU7d0JBQ1YsZ0JBQWdCO3dCQUNoQixRQUFRO3dCQUNSLE9BQU87d0JBQ1AsYUFBYTt3QkFDYixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixlQUFlO3dCQUNmLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsaUJBQWlCO3dCQUNqQixTQUFTO3dCQUNULGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixVQUFVO3dCQUNWLE1BQU07d0JBQ04sZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsT0FBTzt3QkFDUCxrQkFBa0I7d0JBQ2xCLFNBQVM7d0JBQ1QsT0FBTztxQkFDVjtpQkFDSjs7OztnQkE5RFEsZ0JBQWdCLHVCQXVGUixRQUFRLFlBQUksSUFBSTtnQkF2RnhCLGdCQUFnQix1QkF3RlosSUFBSTs7OytCQXBCWixNQUFNO2dDQUtOLE1BQU07b0NBTU4sZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7OzBDQWhIekQ7RUFnR3FELGlCQUFpQjtTQUF6RCwrQkFBK0I7Ozs7O2dCQXVDM0MsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiwrQkFBK0I7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUCwrQkFBK0I7cUJBQ2hDO2lCQUNGOzt1Q0E5SUQ7O1NBK0lhLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvVGV4dEJveE9wdGlvbnMgfSBmcm9tICcuL2Jhc2UvdGV4dC1ib3gtb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1zZWFyY2gtZWRpdG9yLW9wdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYnV0dG9ucycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2lucHV0QXR0cicsXHJcbiAgICAgICAgJ2lzVmFsaWQnLFxyXG4gICAgICAgICdtYXNrJyxcclxuICAgICAgICAnbWFza0NoYXInLFxyXG4gICAgICAgICdtYXNrSW52YWxpZE1lc3NhZ2UnLFxyXG4gICAgICAgICdtYXNrUnVsZXMnLFxyXG4gICAgICAgICdtYXhMZW5ndGgnLFxyXG4gICAgICAgICdtb2RlJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ29uQ2hhbmdlJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkNvcHknLFxyXG4gICAgICAgICdvbkN1dCcsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25FbnRlcktleScsXHJcbiAgICAgICAgJ29uRm9jdXNJbicsXHJcbiAgICAgICAgJ29uRm9jdXNPdXQnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25JbnB1dCcsXHJcbiAgICAgICAgJ29uS2V5RG93bicsXHJcbiAgICAgICAgJ29uS2V5UHJlc3MnLFxyXG4gICAgICAgICdvbktleVVwJyxcclxuICAgICAgICAnb25PcHRpb25DaGFuZ2VkJyxcclxuICAgICAgICAnb25QYXN0ZScsXHJcbiAgICAgICAgJ29uVmFsdWVDaGFuZ2VkJyxcclxuICAgICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAgICdyZWFkT25seScsXHJcbiAgICAgICAgJ3J0bEVuYWJsZWQnLFxyXG4gICAgICAgICdzaG93Q2xlYXJCdXR0b24nLFxyXG4gICAgICAgICdzaG93TWFza01vZGUnLFxyXG4gICAgICAgICdzcGVsbGNoZWNrJyxcclxuICAgICAgICAnc3R5bGluZ01vZGUnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICd1c2VNYXNrZWRWYWx1ZScsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25FcnJvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25NZXNzYWdlTW9kZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAndmFsdWVDaGFuZ2VFdmVudCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1NlYXJjaEVkaXRvck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9UZXh0Qm94T3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB0ZXh0Q2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgdGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSB2YWx1ZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHByb3RlY3RlZCBnZXQgX29wdGlvblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzZWFyY2hFZGl0b3JPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUJ1dHRvbkNvbXBvbmVudCkpXHJcbiAgICBnZXQgYnV0dG9uc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlCdXR0b25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdidXR0b25zJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9uc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignYnV0dG9ucycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICd0ZXh0Q2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2YWx1ZUNoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvU2VhcmNoRWRpdG9yT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9TZWFyY2hFZGl0b3JPcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=