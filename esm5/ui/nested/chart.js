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
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiSeriesComponent } from './series-dxi';
var DxoChartComponent = (function (_super) {
    __extends(DxoChartComponent, _super);
    function DxoChartComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoChartComponent.prototype, "barGroupPadding", {
        get: function () {
            return this._getOption('barGroupPadding');
        },
        set: function (value) {
            this._setOption('barGroupPadding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "barGroupWidth", {
        get: function () {
            return this._getOption('barGroupWidth');
        },
        set: function (value) {
            this._setOption('barGroupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "bottomIndent", {
        get: function () {
            return this._getOption('bottomIndent');
        },
        set: function (value) {
            this._setOption('bottomIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "dataPrepareSettings", {
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "equalBarWidth", {
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "maxBubbleSize", {
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "minBubbleSize", {
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "negativesAsZeroes", {
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "paletteExtensionMode", {
        get: function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "seriesTemplate", {
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "useAggregation", {
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "_optionPath", {
        get: function () {
            return 'chart';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-chart',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoChartComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoChartComponent.propDecorators = {
        "barGroupPadding": [{ type: Input },],
        "barGroupWidth": [{ type: Input },],
        "barWidth": [{ type: Input },],
        "bottomIndent": [{ type: Input },],
        "commonSeriesSettings": [{ type: Input },],
        "dataPrepareSettings": [{ type: Input },],
        "equalBarWidth": [{ type: Input },],
        "maxBubbleSize": [{ type: Input },],
        "minBubbleSize": [{ type: Input },],
        "negativesAsZeroes": [{ type: Input },],
        "palette": [{ type: Input },],
        "paletteExtensionMode": [{ type: Input },],
        "series": [{ type: Input },],
        "seriesTemplate": [{ type: Input },],
        "topIndent": [{ type: Input },],
        "useAggregation": [{ type: Input },],
        "valueAxis": [{ type: Input },],
        "seriesChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiSeriesComponent; }),] },],
    };
    return DxoChartComponent;
}(NestedOption));
export { DxoChartComponent };
var DxoChartModule = (function () {
    function DxoChartModule() {
    }
    DxoChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoChartComponent
                    ],
                    exports: [
                        DxoChartComponent
                    ],
                },] },
    ];
    return DxoChartModule;
}());
export { DxoChartModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDOztJQVNYLHFDQUFZO0lBdUovQywyQkFBZ0Msa0JBQ2hCO1FBRGhCLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztLQUM3RDswQkExSkcsOENBQWU7O1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7YUFFOUMsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDOzs7OzBCQUdHLDRDQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7OzBCQUdHLHVDQUFROztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzthQUV2QyxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7Ozs7MEJBR0csMkNBQVk7O1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O2FBRTNDLFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUM7Ozs7MEJBR0csbURBQW9COztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzthQUVuRCxVQUF5QixLQUFVO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEQ7Ozs7MEJBR0csa0RBQW1COztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzthQUVsRCxVQUF3QixLQUE2RztZQUNqSSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pEOzs7OzBCQUdHLDRDQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUFjO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7OzBCQUdHLDRDQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7OzBCQUdHLDRDQUFhOztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzthQUU1QyxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7OzBCQUdHLGdEQUFpQjs7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7YUFFaEQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9DOzs7OzBCQUdHLHNDQUFPOztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzthQUV0QyxVQUFZLEtBQTZCO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQUdHLG1EQUFvQjs7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7YUFFbkQsVUFBeUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xEOzs7OzBCQUdHLHFDQUFNOztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzthQUVyQyxVQUFXLEtBQXVCO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7OzBCQUdHLDZDQUFjOztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O2FBRTdDLFVBQW1CLEtBQXlEO1lBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7Ozs7MEJBR0csd0NBQVM7O1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O2FBRXhDLFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2Qzs7OzswQkFHRyw2Q0FBYzs7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzthQUU3QyxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7Ozs7MEJBR0csd0NBQVM7O1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O2FBRXhDLFVBQWMsS0FBb0g7WUFDOUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7Ozs7SUFHRCxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbEI7OztPQUFBOzBCQUlHLDZDQUFjOztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzthQUVyQyxVQUFtQixLQUFLO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OztnQkEzSkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDOzs7O2dCQVZRLGdCQUFnQix1QkFrS1IsUUFBUSxZQUFJLElBQUk7Z0JBbEt4QixnQkFBZ0IsdUJBbUtaLElBQUk7OztvQ0F2SlosS0FBSztrQ0FRTCxLQUFLOzZCQVFMLEtBQUs7aUNBUUwsS0FBSzt5Q0FRTCxLQUFLO3dDQVFMLEtBQUs7a0NBUUwsS0FBSztrQ0FRTCxLQUFLO2tDQVFMLEtBQUs7c0NBUUwsS0FBSzs0QkFRTCxLQUFLO3lDQVFMLEtBQUs7MkJBUUwsS0FBSzttQ0FRTCxLQUFLOzhCQVFMLEtBQUs7bUNBUUwsS0FBSzs4QkFRTCxLQUFLO21DQWNMLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDOzs0QkF6THpEO0VBMEN1QyxZQUFZO1NBQXRDLGlCQUFpQjs7Ozs7Z0JBZ0s3QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7O3lCQWpORDs7U0FrTmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGV2ZXh0cmVtZS1hbmd1bGFyXG4gKiBWZXJzaW9uOiAxOS4xLjZcbiAqIEJ1aWxkIGRhdGU6IEZyaSBTZXAgMjAgMjAxOVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgRGV2ZWxvcGVyIEV4cHJlc3MgSW5jLiBBTEwgUklHSFRTIFJFU0VSVkVEXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBtYXkgYmUgbW9kaWZpZWQgYW5kIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtc1xuICogb2YgdGhlIE1JVCBsaWNlbnNlLiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdCBmb3IgZGV0YWlscy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRGV2RXhwcmVzcy9kZXZleHRyZW1lLWFuZ3VsYXJcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dCxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhpU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXJpZXMtZHhpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHhvLWNoYXJ0JyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeG9DaGFydENvbXBvbmVudCBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhckdyb3VwUGFkZGluZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2Jhckdyb3VwUGFkZGluZycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhckdyb3VwUGFkZGluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJHcm91cFBhZGRpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBiYXJHcm91cFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyR3JvdXBXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhckdyb3VwV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYmFyR3JvdXBXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJhcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYmFyV2lkdGgnKTtcclxuICAgIH1cclxuICAgIHNldCBiYXJXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdiYXJXaWR0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJvdHRvbUluZGVudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2JvdHRvbUluZGVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGJvdHRvbUluZGVudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdib3R0b21JbmRlbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb21tb25TZXJpZXNTZXR0aW5ncygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbW1vblNlcmllc1NldHRpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tbW9uU2VyaWVzU2V0dGluZ3ModmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29tbW9uU2VyaWVzU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRhUHJlcGFyZVNldHRpbmdzKCk6IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZGF0YVByZXBhcmVTZXR0aW5ncycpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGFQcmVwYXJlU2V0dGluZ3ModmFsdWU6IHsgY2hlY2tUeXBlRm9yQWxsRGF0YT86IGJvb2xlYW4sIGNvbnZlcnRUb0F4aXNEYXRhVHlwZT86IGJvb2xlYW4sIHNvcnRpbmdNZXRob2Q/OiBib29sZWFuIHwgRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignZGF0YVByZXBhcmVTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGVxdWFsQmFyV2lkdGgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZXF1YWxCYXJXaWR0aCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVxdWFsQmFyV2lkdGgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VxdWFsQmFyV2lkdGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhCdWJibGVTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbWF4QnViYmxlU2l6ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IG1heEJ1YmJsZVNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbWF4QnViYmxlU2l6ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkJ1YmJsZVNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdtaW5CdWJibGVTaXplJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgbWluQnViYmxlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdtaW5CdWJibGVTaXplJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbmVnYXRpdmVzQXNaZXJvZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignbmVnYXRpdmVzQXNaZXJvZXMnKTtcclxuICAgIH1cclxuICAgIHNldCBuZWdhdGl2ZXNBc1plcm9lcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbmVnYXRpdmVzQXNaZXJvZXMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwYWxldHRlKCk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3BhbGV0dGUnKTtcclxuICAgIH1cclxuICAgIHNldCBwYWxldHRlKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdwYWxldHRlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGFsZXR0ZUV4dGVuc2lvbk1vZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdwYWxldHRlRXh0ZW5zaW9uTW9kZScpO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbGV0dGVFeHRlbnNpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3BhbGV0dGVFeHRlbnNpb25Nb2RlJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VyaWVzKCk6IGFueSB8IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlcmllcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllcyh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignc2VyaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VyaWVzVGVtcGxhdGUoKTogeyBjdXN0b21pemVTZXJpZXM/OiBGdW5jdGlvbiwgbmFtZUZpZWxkPzogc3RyaW5nIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3Nlcmllc1RlbXBsYXRlJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VyaWVzVGVtcGxhdGUodmFsdWU6IHsgY3VzdG9taXplU2VyaWVzPzogRnVuY3Rpb24sIG5hbWVGaWVsZD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdzZXJpZXNUZW1wbGF0ZScsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvcEluZGVudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3RvcEluZGVudCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvcEluZGVudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b3BJbmRlbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB1c2VBZ2dyZWdhdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd1c2VBZ2dyZWdhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IHVzZUFnZ3JlZ2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd1c2VBZ2dyZWdhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlQXhpcygpOiB7IGludmVydGVkPzogYm9vbGVhbiwgbG9nYXJpdGhtQmFzZT86IG51bWJlciwgbWF4PzogbnVtYmVyLCBtaW4/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIHZhbHVlVHlwZT86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd2YWx1ZUF4aXMnKTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZUF4aXModmFsdWU6IHsgaW52ZXJ0ZWQ/OiBib29sZWFuLCBsb2dhcml0aG1CYXNlPzogbnVtYmVyLCBtYXg/OiBudW1iZXIsIG1pbj86IG51bWJlciwgdHlwZT86IHN0cmluZywgdmFsdWVUeXBlPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3ZhbHVlQXhpcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2NoYXJ0JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVNlcmllc0NvbXBvbmVudCkpXHJcbiAgICBnZXQgc2VyaWVzQ2hpbGRyZW4oKTogUXVlcnlMaXN0PER4aVNlcmllc0NvbXBvbmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ3NlcmllcycpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcmllc0NoaWxkcmVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbignc2VyaWVzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBIb3N0KCkgcGFyZW50T3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCxcclxuICAgICAgICAgICAgQEhvc3QoKSBvcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvQ2hhcnRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER4b0NoYXJ0Q29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4b0NoYXJ0TW9kdWxlIHsgfVxyXG4iXX0=