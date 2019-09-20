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
import { DxoAnimationConfig } from './base/animation-config';
var DxoAnimationComponent = (function (_super) {
    __extends(DxoAnimationComponent, _super);
    function DxoAnimationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAnimationComponent.prototype, "_optionPath", {
        get: function () {
            return 'animation';
        },
        enumerable: true,
        configurable: true
    });
    DxoAnimationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-animation',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'duration',
                        'easing',
                        'enabled',
                        'maxPointCountSupported',
                        'hide',
                        'show',
                        'complete',
                        'delay',
                        'direction',
                        'from',
                        'staggerDelay',
                        'start',
                        'to',
                        'type'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoAnimationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    return DxoAnimationComponent;
}(DxoAnimationConfig));
export { DxoAnimationComponent };
var DxoAnimationModule = (function () {
    function DxoAnimationModule() {
    }
    DxoAnimationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoAnimationComponent
                    ],
                    exports: [
                        DxoAnimationComponent
                    ],
                },] },
    ];
    return DxoAnimationModule;
}());
export { DxoAnimationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2FuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBeUJsQix5Q0FBa0I7SUFPekQsK0JBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBR1Y7UUFGRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUFWRCxzQkFBYyw4Q0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDdEI7OztPQUFBOztnQkExQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE1BQU0sRUFBRTt3QkFDSixVQUFVO3dCQUNWLFFBQVE7d0JBQ1IsU0FBUzt3QkFDVCx3QkFBd0I7d0JBQ3hCLE1BQU07d0JBQ04sTUFBTTt3QkFDTixVQUFVO3dCQUNWLE9BQU87d0JBQ1AsV0FBVzt3QkFDWCxNQUFNO3dCQUNOLGNBQWM7d0JBQ2QsT0FBTzt3QkFDUCxJQUFJO3dCQUNKLE1BQU07cUJBQ1Q7aUJBQ0o7Ozs7Z0JBekJRLGdCQUFnQix1QkFpQ1IsUUFBUSxZQUFJLElBQUk7Z0JBakN4QixnQkFBZ0IsdUJBa0NaLElBQUk7O2dDQTlEakI7RUFzRDJDLGtCQUFrQjtTQUFoRCxxQkFBcUI7Ozs7O2dCQWdCakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGOzs2QkE3RUQ7O1NBOEVhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbkhvc3QgfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5pbXBvcnQgeyBEeG9BbmltYXRpb25Db25maWcgfSBmcm9tICcuL2Jhc2UvYW5pbWF0aW9uLWNvbmZpZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1hbmltYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnZHVyYXRpb24nLFxyXG4gICAgICAgICdlYXNpbmcnLFxyXG4gICAgICAgICdlbmFibGVkJyxcclxuICAgICAgICAnbWF4UG9pbnRDb3VudFN1cHBvcnRlZCcsXHJcbiAgICAgICAgJ2hpZGUnLFxyXG4gICAgICAgICdzaG93JyxcclxuICAgICAgICAnY29tcGxldGUnLFxyXG4gICAgICAgICdkZWxheScsXHJcbiAgICAgICAgJ2RpcmVjdGlvbicsXHJcbiAgICAgICAgJ2Zyb20nLFxyXG4gICAgICAgICdzdGFnZ2VyRGVsYXknLFxyXG4gICAgICAgICdzdGFydCcsXHJcbiAgICAgICAgJ3RvJyxcclxuICAgICAgICAndHlwZSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0FuaW1hdGlvbkNvbXBvbmVudCBleHRlbmRzIER4b0FuaW1hdGlvbkNvbmZpZyB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2FuaW1hdGlvbic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQW5pbWF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9BbmltYXRpb25Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvQW5pbWF0aW9uTW9kdWxlIHsgfVxyXG4iXX0=