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
import { Component, NgModule, Host, SkipSelf, Input } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
var DxiLocationComponent = (function (_super) {
    __extends(DxiLocationComponent, _super);
    function DxiLocationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiLocationComponent.prototype, "lat", {
        get: function () {
            return this._getOption('lat');
        },
        set: function (value) {
            this._setOption('lat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "lng", {
        get: function () {
            return this._getOption('lng');
        },
        set: function (value) {
            this._setOption('lng', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "col", {
        get: function () {
            return this._getOption('col');
        },
        set: function (value) {
            this._setOption('col', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "colspan", {
        get: function () {
            return this._getOption('colspan');
        },
        set: function (value) {
            this._setOption('colspan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "row", {
        get: function () {
            return this._getOption('row');
        },
        set: function (value) {
            this._setOption('row', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "rowspan", {
        get: function () {
            return this._getOption('rowspan');
        },
        set: function (value) {
            this._setOption('rowspan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "screen", {
        get: function () {
            return this._getOption('screen');
        },
        set: function (value) {
            this._setOption('screen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLocationComponent.prototype, "_optionPath", {
        get: function () {
            return 'location';
        },
        enumerable: true,
        configurable: true
    });
    DxiLocationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxi-location',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiLocationComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxiLocationComponent.propDecorators = {
        "lat": [{ type: Input },],
        "lng": [{ type: Input },],
        "col": [{ type: Input },],
        "colspan": [{ type: Input },],
        "row": [{ type: Input },],
        "rowspan": [{ type: Input },],
        "screen": [{ type: Input },],
    };
    return DxiLocationComponent;
}(CollectionNestedOption));
export { DxiLocationComponent };
var DxiLocationModule = (function () {
    function DxiLocationModule() {
    }
    DxiLocationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxiLocationComponent
                    ],
                    exports: [
                        DxiLocationComponent
                    ],
                },] },
    ];
    return DxiLocationModule;
}());
export { DxiLocationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tZHhpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvbmVzdGVkL2xvY2F0aW9uLWR4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQVN4Qix3Q0FBc0I7SUErRDVELDhCQUFnQyxrQkFDaEI7UUFEaEIsWUFFSSxpQkFBTyxTQUdWO1FBRkcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEOzBCQWxFRyxxQ0FBRzs7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7YUFFbEMsVUFBUSxLQUFhO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7OzBCQUdHLHFDQUFHOztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzthQUVsQyxVQUFRLEtBQWE7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7Ozs7MEJBR0cscUNBQUc7O1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O2FBRWxDLFVBQVEsS0FBYTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQzs7OzswQkFHRyx5Q0FBTzs7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7YUFFdEMsVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OzBCQUdHLHFDQUFHOztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzthQUVsQyxVQUFRLEtBQWE7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7Ozs7MEJBR0cseUNBQU87O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O2FBRXRDLFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzs7OzswQkFHRyx3Q0FBTTs7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7YUFFckMsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7O0lBR0Qsc0JBQWMsNkNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3JCOzs7T0FBQTs7Z0JBbEVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUNoQzs7OztnQkFUUSxnQkFBZ0IsdUJBeUVSLFFBQVEsWUFBSSxJQUFJO2dCQXpFeEIsZ0JBQWdCLHVCQTBFWixJQUFJOzs7d0JBL0RaLEtBQUs7d0JBUUwsS0FBSzt3QkFRTCxLQUFLOzRCQVFMLEtBQUs7d0JBUUwsS0FBSzs0QkFRTCxLQUFLOzJCQVFMLEtBQUs7OytCQXZGVjtFQXNDMEMsc0JBQXNCO1NBQW5ELG9CQUFvQjs7Ozs7Z0JBd0VoQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjtxQkFDckI7aUJBQ0Y7OzRCQXJIRDs7U0FzSGEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOZ01vZHVsZSxcclxuICAgIEhvc3QsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmVzdGVkT3B0aW9uSG9zdCB9IGZyb20gJy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25OZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkeGktbG9jYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgc3R5bGVzOiBbJyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTmVzdGVkT3B0aW9uSG9zdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER4aUxvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29sbGVjdGlvbk5lc3RlZE9wdGlvbiB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGxhdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2xhdCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdsYXQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBsbmcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdsbmcnKTtcclxuICAgIH1cclxuICAgIHNldCBsbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignbG5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY29sKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignY29sJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2NvbCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbHNwYW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdjb2xzcGFuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sc3Bhbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdjb2xzcGFuJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcm93KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbigncm93Jyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3JvdycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHJvd3NwYW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdyb3dzcGFuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgcm93c3Bhbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCdyb3dzcGFuJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2NyZWVuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignc2NyZWVuJyk7XHJcbiAgICB9XHJcbiAgICBzZXQgc2NyZWVuKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ3NjcmVlbicsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBfb3B0aW9uUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gJ2xvY2F0aW9uJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgQEhvc3QoKSBwYXJlbnRPcHRpb25Ib3N0OiBOZXN0ZWRPcHRpb25Ib3N0LFxyXG4gICAgICAgICAgICBASG9zdCgpIG9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHBhcmVudE9wdGlvbkhvc3Quc2V0TmVzdGVkT3B0aW9uKHRoaXMpO1xyXG4gICAgICAgIG9wdGlvbkhvc3Quc2V0SG9zdCh0aGlzLCB0aGlzLl9mdWxsT3B0aW9uUGF0aC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeGlMb2NhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRHhpTG9jYXRpb25Db21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhpTG9jYXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==