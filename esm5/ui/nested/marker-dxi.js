/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { Component, NgModule, Host, SkipSelf, Input, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiLocationComponent } from './location-dxi';
var DxiMarkerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DxiMarkerComponent, _super);
    function DxiMarkerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiMarkerComponent.prototype, "iconSrc", {
        get: function () {
            return this._getOption('iconSrc');
        },
        set: function (value) {
            this._setOption('iconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "onClick", {
        get: function () {
            return this._getOption('onClick');
        },
        set: function (value) {
            this._setOption('onClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "_optionPath", {
        get: function () {
            return 'markers';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMarkerComponent.prototype, "locationChildren", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this.setChildren('location', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DxiMarkerComponent.prototype, "iconSrc", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiMarkerComponent.prototype, "location", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function])
    ], DxiMarkerComponent.prototype, "onClick", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiMarkerComponent.prototype, "tooltip", null);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return DxiLocationComponent; })),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DxiMarkerComponent.prototype, "locationChildren", null);
    DxiMarkerComponent = tslib_1.__decorate([
        Component({
            selector: 'dxi-marker',
            template: '',
            providers: [NestedOptionHost],
            styles: ['']
        }),
        tslib_1.__param(0, SkipSelf()), tslib_1.__param(0, Host()),
        tslib_1.__param(1, Host()),
        tslib_1.__metadata("design:paramtypes", [NestedOptionHost,
            NestedOptionHost])
    ], DxiMarkerComponent);
    return DxiMarkerComponent;
}(CollectionNestedOption));
export { DxiMarkerComponent };
var DxiMarkerModule = /** @class */ (function () {
    function DxiMarkerModule() {
    }
    DxiMarkerModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DxiMarkerComponent
            ],
            exports: [
                DxiMarkerComponent
            ],
        })
    ], DxiMarkerModule);
    return DxiMarkerModule;
}());
export { DxiMarkerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLWR4aS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9tYXJrZXItZHhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFHcEMsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBQ0wsZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTdEQ7SUFBd0MsOENBQXNCO0lBK0MxRCw0QkFBZ0MsZ0JBQWtDLEVBQ2xELFVBQTRCO1FBRDVDLFlBRUksaUJBQU8sU0FHVjtRQUZHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztJQUM5RCxDQUFDO0lBbERELHNCQUFJLHVDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBQ0QsVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksd0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7YUFDRCxVQUFhLEtBQThEO1lBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUhBO0lBTUQsc0JBQUksdUNBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFDRCxVQUFZLEtBQWU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQzthQUNELFVBQVksS0FBb0Q7WUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBYywyQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxnREFBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDO2FBQ0QsVUFBcUIsS0FBSztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FIQTtJQXhDRDtRQURDLEtBQUssRUFBRTs7O3FEQUdQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztzREFHUDtJQU1EO1FBREMsS0FBSyxFQUFFOzBDQUNPLFFBQVE7aURBR0osUUFBUTtxREFEMUI7SUFNRDtRQURDLEtBQUssRUFBRTs7O3FEQUdQO0lBWUQ7UUFEQyxlQUFlLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDOzBDQUNoQyxTQUFTOzs4REFFaEM7SUExQ1Esa0JBQWtCO1FBTjlCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxFQUFFO1lBRVosU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBRHBCLEVBQUU7U0FFZCxDQUFDO1FBZ0RlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1DLGdCQUFnQjtZQUN0QyxnQkFBZ0I7T0FoRG5DLGtCQUFrQixDQXNEOUI7SUFBRCx5QkFBQztDQUFBLEFBdERELENBQXdDLHNCQUFzQixHQXNEN0Q7U0F0RFksa0JBQWtCO0FBZ0UvQjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVIzQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQjthQUNuQjtTQUNGLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTmdNb2R1bGUsXHJcbiAgICBIb3N0LFxyXG4gICAgU2tpcFNlbGYsXHJcbiAgICBJbnB1dCxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IER4aUxvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi1keGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktbWFya2VyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHN0eWxlczogWycnXSxcclxuICAgIHByb3ZpZGVyczogW05lc3RlZE9wdGlvbkhvc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeGlNYXJrZXJDb21wb25lbnQgZXh0ZW5kcyBDb2xsZWN0aW9uTmVzdGVkT3B0aW9uIHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaWNvblNyYygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2ljb25TcmMnKTtcclxuICAgIH1cclxuICAgIHNldCBpY29uU3JjKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2ljb25TcmMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsb2NhdGlvbigpOiBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvY2F0aW9uKHZhbHVlOiBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCB7IGxhdD86IG51bWJlciwgbG5nPzogbnVtYmVyIH0+KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsb2NhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9uQ2xpY2soKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ29uQ2xpY2snKTtcclxuICAgIH1cclxuICAgIHNldCBvbkNsaWNrKHZhbHVlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignb25DbGljaycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvb2x0aXAoKTogc3RyaW5nIHwgeyBpc1Nob3duPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sdGlwJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgdG9vbHRpcCh2YWx1ZTogc3RyaW5nIHwgeyBpc1Nob3duPzogYm9vbGVhbiwgdGV4dD86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCd0b29sdGlwJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnbWFya2Vycyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBEeGlMb2NhdGlvbkNvbXBvbmVudCkpXHJcbiAgICBnZXQgbG9jYXRpb25DaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpTG9jYXRpb25Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsb2NhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvY2F0aW9uQ2hpbGRyZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldENoaWxkcmVuKCdsb2NhdGlvbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgcGFyZW50T3B0aW9uSG9zdC5zZXROZXN0ZWRPcHRpb24odGhpcyk7XHJcbiAgICAgICAgb3B0aW9uSG9zdC5zZXRIb3N0KHRoaXMsIHRoaXMuX2Z1bGxPcHRpb25QYXRoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER4aU1hcmtlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpTWFya2VyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER4aU1hcmtlck1vZHVsZSB7IH1cclxuIl19