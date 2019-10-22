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
import { Component, NgModule, Host, SkipSelf } from '@angular/core';
import { NestedOptionHost, } from 'devextreme-angular/core';
import { DxiFilterBuilderCustomOperation } from './base/filter-builder-custom-operation-dxi';
var DxiCustomOperationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiCustomOperationComponent, _super);
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
    DxiCustomOperationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    DxiCustomOperationComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-custom-operation',
            template: '',
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
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxiCustomOperationComponent);
    return DxiCustomOperationComponent;
}(DxiFilterBuilderCustomOperation));
export { DxiCustomOperationComponent };
var DxiCustomOperationModule = /** @class */ (function () {
    function DxiCustomOperationModule() {
    }
    DxiCustomOperationModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiCustomOperationComponent
            ],
            exports: [
                DxiCustomOperationComponent
            ],
        })
    ], DxiCustomOperationModule);
    return DxiCustomOperationModule;
}());
export { DxiCustomOperationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW9wZXJhdGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiY3VzdG9tLW9wZXJhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQW1CN0Y7SUFBaUQsdURBQStCO0lBTzVFLHFDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYyxvREFBVzthQUF6QjtZQUNJLE9BQU8sa0JBQWtCLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7O2dCQUdpRCxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxJQUFJO2dCQUNELGdCQUFnQix1QkFBbkMsSUFBSTs7SUFSSiwyQkFBMkI7UUFoQnZDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLEVBQUU7WUFFWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osMkJBQTJCO2dCQUMzQixTQUFTO2dCQUNULGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixNQUFNO2FBQ1Q7cUJBWFEsRUFBRTtTQVlkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BUk4sMkJBQTJCLENBY3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQWRELENBQWlELCtCQUErQixHQWMvRTtTQWRZLDJCQUEyQjtBQXdCeEM7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQVJwQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osMkJBQTJCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDJCQUEyQjthQUM1QjtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FBSTtJQUFELCtCQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeGlGaWx0ZXJCdWlsZGVyQ3VzdG9tT3BlcmF0aW9uIH0gZnJvbSAnLi9iYXNlL2ZpbHRlci1idWlsZGVyLWN1c3RvbS1vcGVyYXRpb24tZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWN1c3RvbS1vcGVyYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnY2FsY3VsYXRlRmlsdGVyRXhwcmVzc2lvbicsXHJcbiAgICAgICAgJ2NhcHRpb24nLFxyXG4gICAgICAgICdjdXN0b21pemVUZXh0JyxcclxuICAgICAgICAnZGF0YVR5cGVzJyxcclxuICAgICAgICAnZWRpdG9yVGVtcGxhdGUnLFxyXG4gICAgICAgICdoYXNWYWx1ZScsXHJcbiAgICAgICAgJ2ljb24nLFxyXG4gICAgICAgICduYW1lJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgRHhpRmlsdGVyQnVpbGRlckN1c3RvbU9wZXJhdGlvbiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2N1c3RvbU9wZXJhdGlvbnMnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aUN1c3RvbU9wZXJhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpQ3VzdG9tT3BlcmF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUN1c3RvbU9wZXJhdGlvbk1vZHVsZSB7IH1cclxuIl19