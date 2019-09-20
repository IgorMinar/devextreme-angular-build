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
import { DxoFormOptions } from './base/form-options';
import { DxiItemComponent } from './item-dxi';
var DxoFormComponent = (function (_super) {
    __extends(DxoFormComponent, _super);
    function DxoFormComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'formDataChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFormComponent.prototype, "_optionPath", {
        get: function () {
            return 'form';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-form',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'alignItemLabels',
                        'alignItemLabelsInAllGroups',
                        'colCount',
                        'colCountByScreen',
                        'customizeItem',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'formData',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'items',
                        'labelLocation',
                        'minColWidth',
                        'onContentReady',
                        'onDisposing',
                        'onEditorEnterKey',
                        'onFieldDataChanged',
                        'onInitialized',
                        'onOptionChanged',
                        'optionalMark',
                        'readOnly',
                        'requiredMark',
                        'requiredMessage',
                        'rtlEnabled',
                        'screenByWidth',
                        'scrollingEnabled',
                        'showColonAfterLabel',
                        'showOptionalMark',
                        'showRequiredMark',
                        'showValidationSummary',
                        'tabIndex',
                        'validationGroup',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFormComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoFormComponent.propDecorators = {
        "formDataChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
    };
    return DxoFormComponent;
}(DxoFormOptions));
export { DxoFormComponent };
var DxoFormModule = (function () {
    function DxoFormModule() {
    }
    DxoFormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoFormComponent
                    ],
                    exports: [
                        DxoFormComponent
                    ],
                },] },
    ];
    return DxoFormModule;
}());
export { DxoFormModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7O0lBaURSLG9DQUFjO0lBbUJoRCwwQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FRVjtRQU5HLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtTQUM3QixDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUF2QkQsc0JBQWMseUNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2pCOzs7T0FBQTswQkFJRywyQ0FBYTs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7YUFFcEMsVUFBa0IsS0FBSztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzs7Ozs7Z0JBL0RKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixNQUFNLEVBQUU7d0JBQ0osV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsNEJBQTRCO3dCQUM1QixVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixVQUFVO3dCQUNWLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixtQkFBbUI7d0JBQ25CLE9BQU87d0JBQ1AsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsU0FBUzt3QkFDVCxPQUFPO3FCQUNWO2lCQUNKOzs7O2dCQWxEUSxnQkFBZ0IsdUJBc0VSLFFBQVEsWUFBSSxJQUFJO2dCQXRFeEIsZ0JBQWdCLHVCQXVFWixJQUFJOzs7bUNBZlosTUFBTTtrQ0FNTixlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQzs7MkJBL0Z2RDtFQW9Gc0MsY0FBYztTQUF2QyxnQkFBZ0I7Ozs7O2dCQWlDNUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOzt3QkE1SEQ7O1NBNkhhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4b0Zvcm1PcHRpb25zIH0gZnJvbSAnLi9iYXNlL2Zvcm0tb3B0aW9ucyc7XHJcbmltcG9ydCB7IER4aUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzJyxcclxuICAgICAgICAnYWxpZ25JdGVtTGFiZWxzSW5BbGxHcm91cHMnLFxyXG4gICAgICAgICdjb2xDb3VudCcsXHJcbiAgICAgICAgJ2NvbENvdW50QnlTY3JlZW4nLFxyXG4gICAgICAgICdjdXN0b21pemVJdGVtJyxcclxuICAgICAgICAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZm9ybURhdGEnLFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICdoaW50JyxcclxuICAgICAgICAnaG92ZXJTdGF0ZUVuYWJsZWQnLFxyXG4gICAgICAgICdpdGVtcycsXHJcbiAgICAgICAgJ2xhYmVsTG9jYXRpb24nLFxyXG4gICAgICAgICdtaW5Db2xXaWR0aCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkVkaXRvckVudGVyS2V5JyxcclxuICAgICAgICAnb25GaWVsZERhdGFDaGFuZ2VkJyxcclxuICAgICAgICAnb25Jbml0aWFsaXplZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29wdGlvbmFsTWFyaycsXHJcbiAgICAgICAgJ3JlYWRPbmx5JyxcclxuICAgICAgICAncmVxdWlyZWRNYXJrJyxcclxuICAgICAgICAncmVxdWlyZWRNZXNzYWdlJyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3NjcmVlbkJ5V2lkdGgnLFxyXG4gICAgICAgICdzY3JvbGxpbmdFbmFibGVkJyxcclxuICAgICAgICAnc2hvd0NvbG9uQWZ0ZXJMYWJlbCcsXHJcbiAgICAgICAgJ3Nob3dPcHRpb25hbE1hcmsnLFxyXG4gICAgICAgICdzaG93UmVxdWlyZWRNYXJrJyxcclxuICAgICAgICAnc2hvd1ZhbGlkYXRpb25TdW1tYXJ5JyxcclxuICAgICAgICAndGFiSW5kZXgnLFxyXG4gICAgICAgICd2YWxpZGF0aW9uR3JvdXAnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9Gb3JtQ29tcG9uZW50IGV4dGVuZHMgRHhvRm9ybU9wdGlvbnMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgZm9ybURhdGFDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBmb3JtRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCBpdGVtc0NoaWxkcmVuKCk6IFF1ZXJ5TGlzdDxEeGlJdGVtQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignaXRlbXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVFdmVudEVtaXR0ZXJzKFtcclxuICAgICAgICAgICAgeyBlbWl0OiAnZm9ybURhdGFDaGFuZ2UnIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRm9ybU1vZHVsZSB7IH1cclxuIl19