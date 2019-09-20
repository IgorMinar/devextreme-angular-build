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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { DxoButtonOptions } from './base/button-options';
var DxoOptionsComponent = (function (_super) {
    __extends(DxoOptionsComponent, _super);
    function DxoOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'options';
        },
        enumerable: true,
        configurable: true
    });
    DxoOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-options',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'icon',
                        'onClick',
                        'onContentReady',
                        'onDisposing',
                        'onInitialized',
                        'onOptionChanged',
                        'rtlEnabled',
                        'stylingMode',
                        'tabIndex',
                        'template',
                        'text',
                        'type',
                        'useSubmitBehavior',
                        'validationGroup',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoOptionsComponent;
}(DxoButtonOptions));
export { DxoOptionsComponent };
var DxoOptionsModule = (function () {
    function DxoOptionsModule() {
    }
    DxoOptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoOptionsComponent
                    ],
                    exports: [
                        DxoOptionsComponent
                    ],
                },] },
    ];
    return DxoOptionsModule;
}());
export { DxoOptionsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpL25lc3RlZC9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFtQ2hCLHVDQUFnQjtJQU9yRCw2QkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDtJQVZELHNCQUFjLDRDQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNwQjs7O09BQUE7O2dCQXBDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixRQUFRO3dCQUNSLE1BQU07d0JBQ04sbUJBQW1CO3dCQUNuQixNQUFNO3dCQUNOLFNBQVM7d0JBQ1QsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsVUFBVTt3QkFDVixVQUFVO3dCQUNWLE1BQU07d0JBQ04sTUFBTTt3QkFDTixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsU0FBUzt3QkFDVCxPQUFPO3FCQUNWO2lCQUNKOzs7O2dCQW5DUSxnQkFBZ0IsdUJBMkNSLFFBQVEsWUFBSSxJQUFJO2dCQTNDeEIsZ0JBQWdCLHVCQTRDWixJQUFJOzs4QkF4RWpCO0VBZ0V5QyxnQkFBZ0I7U0FBNUMsbUJBQW1COzs7OztnQkFnQi9CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3FCQUNwQjtpQkFDRjs7MkJBdkZEOztTQXdGYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRldmV4dHJlbWUtYW5ndWxhclxuICogVmVyc2lvbjogMTkuMS42XG4gKiBCdWlsZCBkYXRlOiBGcmkgU2VwIDIwIDIwMTlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE5IERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuICpcbiAqIFRoaXMgc29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkIGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXNcbiAqIG9mIHRoZSBNSVQgbGljZW5zZS4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHByb2plY3QgZm9yIGRldGFpbHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RldkV4cHJlc3MvZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaW5wdXQtcHJvcGVydHktZGVjb3JhdG9yICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vYmFzZS9idXR0b24tb3B0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1vcHRpb25zJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgICAgJ2FjY2Vzc0tleScsXHJcbiAgICAgICAgJ2FjdGl2ZVN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2ljb24nLFxyXG4gICAgICAgICdvbkNsaWNrJyxcclxuICAgICAgICAnb25Db250ZW50UmVhZHknLFxyXG4gICAgICAgICdvbkRpc3Bvc2luZycsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAnc3R5bGluZ01vZGUnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3RlbXBsYXRlJyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd1c2VTdWJtaXRCZWhhdmlvcicsXHJcbiAgICAgICAgJ3ZhbGlkYXRpb25Hcm91cCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b09wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEeG9CdXR0b25PcHRpb25zIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnb3B0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhvT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9PcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=