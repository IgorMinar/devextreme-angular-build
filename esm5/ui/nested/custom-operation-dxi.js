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
import { DxiFilterBuilderCustomOperation } from './base/filter-builder-custom-operation-dxi';
var DxiCustomOperationComponent = (function (_super) {
    __extends(DxiCustomOperationComponent, _super);
    function DxiCustomOperationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiCustomOperationComponent.prototype, "_optionPath", {
        get: function () {
            return 'customOperations';
        },
        enumerable: true,
        configurable: true
    });
    DxiCustomOperationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-custom-operation',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'calculateFilterExpression',
                        'caption',
                        'customizeText',
                        'dataTypes',
                        'editorTemplate',
                        'hasValue',
                        'icon',
                        'name'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiCustomOperationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxiCustomOperationComponent;
}(DxiFilterBuilderCustomOperation));
export { DxiCustomOperationComponent };
var DxiCustomOperationModule = (function () {
    function DxiCustomOperationModule() {
    }
    DxiCustomOperationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiCustomOperationComponent
                    ],
                    exports: [
                        DxiCustomOperationComponent
                    ],
                },] },
    ];
    return DxiCustomOperationModule;
}());
export { DxiCustomOperationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW9wZXJhdGlvbi1keGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvY3VzdG9tLW9wZXJhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQW1CNUMsK0NBQStCO0lBTzVFLHFDQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBVkQsc0JBQWMsb0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsa0JBQWtCLENBQUM7U0FDN0I7OztPQUFBOztnQkFwQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLDJCQUEyQjt3QkFDM0IsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLE1BQU07d0JBQ04sTUFBTTtxQkFDVDtpQkFDSjs7OztnQkFuQlEsZ0JBQWdCLHVCQTJCUixRQUFRLFlBQUksSUFBSTtnQkEzQnhCLGdCQUFnQix1QkE0QlosSUFBSTs7c0NBeERqQjtFQWdEaUQsK0JBQStCO1NBQW5FLDJCQUEyQjs7Ozs7Z0JBZ0J2QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7O21DQXZFRDs7U0F3RWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4aUZpbHRlckJ1aWxkZXJDdXN0b21PcGVyYXRpb24gfSBmcm9tICcuL2Jhc2UvZmlsdGVyLWJ1aWxkZXItY3VzdG9tLW9wZXJhdGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktY3VzdG9tLW9wZXJhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdjYWxjdWxhdGVGaWx0ZXJFeHByZXNzaW9uJyxcclxuICAgICAgICAnY2FwdGlvbicsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZVRleHQnLFxyXG4gICAgICAgICdkYXRhVHlwZXMnLFxyXG4gICAgICAgICdlZGl0b3JUZW1wbGF0ZScsXHJcbiAgICAgICAgJ2hhc1ZhbHVlJyxcclxuICAgICAgICAnaWNvbicsXHJcbiAgICAgICAgJ25hbWUnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnQgZXh0ZW5kcyBEeGlGaWx0ZXJCdWlsZGVyQ3VzdG9tT3BlcmF0aW9uIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnY3VzdG9tT3BlcmF0aW9ucyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlDdXN0b21PcGVyYXRpb25Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQ3VzdG9tT3BlcmF0aW9uTW9kdWxlIHsgfVxyXG4iXX0=