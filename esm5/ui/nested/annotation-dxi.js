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
import { DxiChartAnnotationConfig } from './base/chart-annotation-config-dxi';
var DxiAnnotationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiAnnotationComponent, _super);
    function DxiAnnotationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiAnnotationComponent.prototype, "_optionPath", {
        get: function () {
            return 'annotations';
        },
        enumerable: true,
        configurable: true
    });
    DxiAnnotationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host }] },
        { type: NestedOptionHost, decorators: [{ type: Host }] }
    ]; };
    DxiAnnotationComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-annotation',
            template: '',
            providers: [NestedOptionHost],
            inputs: [
                'allowDragging',
                'argument',
                'arrowLength',
                'arrowWidth',
                'axis',
                'border',
                'color',
                'customizeTooltip',
                'description',
                'font',
                'height',
                'image',
                'name',
                'offsetX',
                'offsetY',
                'opacity',
                'paddingLeftRight',
                'paddingTopBottom',
                'series',
                'shadow',
                'text',
                'textOverflow',
                'tooltipEnabled',
                'type',
                'value',
                'width',
                'wordWrap',
                'x',
                'y'
            ],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host())
    ], DxiAnnotationComponent);
    return DxiAnnotationComponent;
}(DxiChartAnnotationConfig));
export { DxiAnnotationComponent };
var DxiAnnotationModule = /** @class */ (function () {
    function DxiAnnotationModule() {
    }
    DxiAnnotationModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiAnnotationComponent
            ],
            exports: [
                DxiAnnotationComponent
            ],
        })
    ], DxiAnnotationModule);
    return DxiAnnotationModule;
}());
export { DxiAnnotationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1keGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvdWkvbmVzdGVkLyIsInNvdXJjZXMiOlsiYW5ub3RhdGlvbi1keGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsb0NBQW9DO0FBRXBDLGlEQUFpRDtBQUVqRCxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFDSCxnQkFBZ0IsR0FDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQXdDOUU7SUFBNEMsa0RBQXdCO0lBT2hFLGdDQUFnQyxnQkFBa0MsRUFDbEQsVUFBNEI7UUFENUMsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFWRCxzQkFBYywrQ0FBVzthQUF6QjtZQUNJLE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBOztnQkFHaUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksSUFBSTtnQkFDRCxnQkFBZ0IsdUJBQW5DLElBQUk7O0lBUkosc0JBQXNCO1FBckNsQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNKLGVBQWU7Z0JBQ2YsVUFBVTtnQkFDVixhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osTUFBTTtnQkFDTixRQUFRO2dCQUNSLE9BQU87Z0JBQ1Asa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLE1BQU07Z0JBQ04sUUFBUTtnQkFDUixPQUFPO2dCQUNQLE1BQU07Z0JBQ04sU0FBUztnQkFDVCxTQUFTO2dCQUNULFNBQVM7Z0JBQ1Qsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixNQUFNO2dCQUNOLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxVQUFVO2dCQUNWLEdBQUc7Z0JBQ0gsR0FBRzthQUNOO3FCQWhDUSxFQUFFO1NBaUNkLENBQUM7UUFRZSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ3RCLG1CQUFBLElBQUksRUFBRSxDQUFBO09BUk4sc0JBQXNCLENBY2xDO0lBQUQsNkJBQUM7Q0FBQSxBQWRELENBQTRDLHdCQUF3QixHQWNuRTtTQWRZLHNCQUFzQjtBQXdCbkM7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQVIvQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osc0JBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogVHVlIE9jdCAyMiAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE5lc3RlZE9wdGlvbkhvc3QsXHJcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeGlDaGFydEFubm90YXRpb25Db25maWcgfSBmcm9tICcuL2Jhc2UvY2hhcnQtYW5ub3RhdGlvbi1jb25maWctZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhpLWFubm90YXRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWxsb3dEcmFnZ2luZycsXHJcbiAgICAgICAgJ2FyZ3VtZW50JyxcclxuICAgICAgICAnYXJyb3dMZW5ndGgnLFxyXG4gICAgICAgICdhcnJvd1dpZHRoJyxcclxuICAgICAgICAnYXhpcycsXHJcbiAgICAgICAgJ2JvcmRlcicsXHJcbiAgICAgICAgJ2NvbG9yJyxcclxuICAgICAgICAnY3VzdG9taXplVG9vbHRpcCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAnZm9udCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2ltYWdlJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgJ29mZnNldFgnLFxyXG4gICAgICAgICdvZmZzZXRZJyxcclxuICAgICAgICAnb3BhY2l0eScsXHJcbiAgICAgICAgJ3BhZGRpbmdMZWZ0UmlnaHQnLFxyXG4gICAgICAgICdwYWRkaW5nVG9wQm90dG9tJyxcclxuICAgICAgICAnc2VyaWVzJyxcclxuICAgICAgICAnc2hhZG93JyxcclxuICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgJ3RleHRPdmVyZmxvdycsXHJcbiAgICAgICAgJ3Rvb2x0aXBFbmFibGVkJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd3b3JkV3JhcCcsXHJcbiAgICAgICAgJ3gnLFxyXG4gICAgICAgICd5J1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpQW5ub3RhdGlvbkNvbXBvbmVudCBleHRlbmRzIER4aUNoYXJ0QW5ub3RhdGlvbkNvbmZpZyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2Fubm90YXRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlBbm5vdGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeGlBbm5vdGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUFubm90YXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==