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
import { DxoTabPanelOptions } from './base/tab-panel-options';
import { DxiItemComponent } from './item-dxi';
var DxoTabPanelOptionsComponent = (function (_super) {
    __extends(DxoTabPanelOptionsComponent, _super);
    function DxoTabPanelOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'itemsChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'tabPanelOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoTabPanelOptionsComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoTabPanelOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-tab-panel-options',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'animationEnabled',
                        'dataSource',
                        'deferRendering',
                        'disabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'itemHoldTimeout',
                        'items',
                        'itemTemplate',
                        'itemTitleTemplate',
                        'loop',
                        'noDataText',
                        'onContentReady',
                        'onDisposing',
                        'onInitialized',
                        'onItemClick',
                        'onItemContextMenu',
                        'onItemHold',
                        'onItemRendered',
                        'onOptionChanged',
                        'onSelectionChanged',
                        'onTitleClick',
                        'onTitleHold',
                        'onTitleRendered',
                        'repaintChangesOnly',
                        'rtlEnabled',
                        'scrollByContent',
                        'scrollingEnabled',
                        'selectedIndex',
                        'selectedItem',
                        'showNavButtons',
                        'swipeEnabled',
                        'tabIndex',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoTabPanelOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoTabPanelOptionsComponent.propDecorators = {
        "itemsChange": [{ type: Output },],
        "selectedIndexChange": [{ type: Output },],
        "selectedItemChange": [{ type: Output },],
        "itemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiItemComponent; }),] },],
    };
    return DxoTabPanelOptionsComponent;
}(DxoTabPanelOptions));
export { DxoTabPanelOptionsComponent };
var DxoTabPanelOptionsModule = (function () {
    function DxoTabPanelOptionsModule() {
    }
    DxoTabPanelOptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoTabPanelOptionsComponent
                    ],
                    exports: [
                        DxoTabPanelOptionsComponent
                    ],
                },] },
    ];
    return DxoTabPanelOptionsModule;
}());
export { DxoTabPanelOptionsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmVsLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvdGFiLXBhbmVsLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDOztJQW1ERywrQ0FBa0I7SUE2Qi9ELHFDQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQVVWO1FBUkcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN2QixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtTQUNqQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDN0Q7SUF6QkQsc0JBQWMsb0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUM7U0FDNUI7OztPQUFBOzBCQUlHLHNEQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzthQUVwQyxVQUFrQixLQUFLO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7OztnQkEzRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixRQUFRO3dCQUNSLE1BQU07d0JBQ04sbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLE9BQU87d0JBQ1AsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLE1BQU07d0JBQ04sWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixTQUFTO3dCQUNULE9BQU87cUJBQ1Y7aUJBQ0o7Ozs7Z0JBcERRLGdCQUFnQix1QkFrRlIsUUFBUSxZQUFJLElBQUk7Z0JBbEZ4QixnQkFBZ0IsdUJBbUZaLElBQUk7OztnQ0F6QlosTUFBTTt3Q0FLTixNQUFNO3VDQUtOLE1BQU07a0NBTU4sZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7O3NDQTNHdkQ7RUFzRmlELGtCQUFrQjtTQUF0RCwyQkFBMkI7Ozs7O2dCQTZDdkMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCwyQkFBMkI7cUJBQzVCO2lCQUNGOzttQ0ExSUQ7O1NBMklhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOnVzZS1pbnB1dC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvVGFiUGFuZWxPcHRpb25zIH0gZnJvbSAnLi9iYXNlL3RhYi1wYW5lbC1vcHRpb25zJztcclxuaW1wb3J0IHsgRHhpSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeG8tdGFiLXBhbmVsLW9wdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF0sXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgICAnYWNjZXNzS2V5JyxcclxuICAgICAgICAnYWN0aXZlU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnYW5pbWF0aW9uRW5hYmxlZCcsXHJcbiAgICAgICAgJ2RhdGFTb3VyY2UnLFxyXG4gICAgICAgICdkZWZlclJlbmRlcmluZycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZWxlbWVudEF0dHInLFxyXG4gICAgICAgICdmb2N1c1N0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ2l0ZW1Ib2xkVGltZW91dCcsXHJcbiAgICAgICAgJ2l0ZW1zJyxcclxuICAgICAgICAnaXRlbVRlbXBsYXRlJyxcclxuICAgICAgICAnaXRlbVRpdGxlVGVtcGxhdGUnLFxyXG4gICAgICAgICdsb29wJyxcclxuICAgICAgICAnbm9EYXRhVGV4dCcsXHJcbiAgICAgICAgJ29uQ29udGVudFJlYWR5JyxcclxuICAgICAgICAnb25EaXNwb3NpbmcnLFxyXG4gICAgICAgICdvbkluaXRpYWxpemVkJyxcclxuICAgICAgICAnb25JdGVtQ2xpY2snLFxyXG4gICAgICAgICdvbkl0ZW1Db250ZXh0TWVudScsXHJcbiAgICAgICAgJ29uSXRlbUhvbGQnLFxyXG4gICAgICAgICdvbkl0ZW1SZW5kZXJlZCcsXHJcbiAgICAgICAgJ29uT3B0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uU2VsZWN0aW9uQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uVGl0bGVDbGljaycsXHJcbiAgICAgICAgJ29uVGl0bGVIb2xkJyxcclxuICAgICAgICAnb25UaXRsZVJlbmRlcmVkJyxcclxuICAgICAgICAncmVwYWludENoYW5nZXNPbmx5JyxcclxuICAgICAgICAncnRsRW5hYmxlZCcsXHJcbiAgICAgICAgJ3Njcm9sbEJ5Q29udGVudCcsXHJcbiAgICAgICAgJ3Njcm9sbGluZ0VuYWJsZWQnLFxyXG4gICAgICAgICdzZWxlY3RlZEluZGV4JyxcclxuICAgICAgICAnc2VsZWN0ZWRJdGVtJyxcclxuICAgICAgICAnc2hvd05hdkJ1dHRvbnMnLFxyXG4gICAgICAgICdzd2lwZUVuYWJsZWQnLFxyXG4gICAgICAgICd0YWJJbmRleCcsXHJcbiAgICAgICAgJ3Zpc2libGUnLFxyXG4gICAgICAgICd3aWR0aCdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4b1RhYlBhbmVsT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIER4b1RhYlBhbmVsT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBpdGVtc0NoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nIHwgYW55IHwgeyBiYWRnZT86IHN0cmluZywgZGlzYWJsZWQ/OiBib29sZWFuLCBodG1sPzogc3RyaW5nLCBpY29uPzogc3RyaW5nLCB0YWJUZW1wbGF0ZT86IGFueSwgdGVtcGxhdGU/OiBhbnksIHRleHQ/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkSW5kZXhDaGFuZ2UgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHNlbGVjdGVkSXRlbUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAndGFiUGFuZWxPcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aUl0ZW1Db21wb25lbnQpKVxyXG4gICAgZ2V0IGl0ZW1zQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aUl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdpdGVtcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGl0ZW1zQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdpdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdpdGVtc0NoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRJbmRleENoYW5nZScgfSxcclxuICAgICAgICAgICAgeyBlbWl0OiAnc2VsZWN0ZWRJdGVtQ2hhbmdlJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeG9UYWJQYW5lbE9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b1RhYlBhbmVsT3B0aW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9UYWJQYW5lbE9wdGlvbnNNb2R1bGUgeyB9XHJcbiJdfQ==