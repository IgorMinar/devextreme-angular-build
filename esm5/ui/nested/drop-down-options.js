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
import { DxoPopupOptions } from './base/popup-options';
import { DxiToolbarItemComponent } from './toolbar-item-dxi';
var DxoDropDownOptionsComponent = (function (_super) {
    __extends(DxoDropDownOptionsComponent, _super);
    function DxoDropDownOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'heightChange' },
            { emit: 'positionChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDropDownOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'dropDownOptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDropDownOptionsComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoDropDownOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dxo-drop-down-options',
                    template: '',
                    styles: [''],
                    providers: [NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'animation',
                        'closeOnBackButton',
                        'closeOnOutsideClick',
                        'container',
                        'contentTemplate',
                        'deferRendering',
                        'disabled',
                        'dragEnabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'fullScreen',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'maxHeight',
                        'maxWidth',
                        'minHeight',
                        'minWidth',
                        'onContentReady',
                        'onDisposing',
                        'onHidden',
                        'onHiding',
                        'onInitialized',
                        'onOptionChanged',
                        'onResize',
                        'onResizeEnd',
                        'onResizeStart',
                        'onShowing',
                        'onShown',
                        'onTitleRendered',
                        'position',
                        'resizeEnabled',
                        'rtlEnabled',
                        'shading',
                        'shadingColor',
                        'showCloseButton',
                        'showTitle',
                        'tabIndex',
                        'title',
                        'titleTemplate',
                        'toolbarItems',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDropDownOptionsComponent.ctorParameters = function () { return [
        { type: NestedOptionHost, decorators: [{ type: SkipSelf }, { type: Host },] },
        { type: NestedOptionHost, decorators: [{ type: Host },] },
    ]; };
    DxoDropDownOptionsComponent.propDecorators = {
        "heightChange": [{ type: Output },],
        "positionChange": [{ type: Output },],
        "visibleChange": [{ type: Output },],
        "widthChange": [{ type: Output },],
        "toolbarItemsChildren": [{ type: ContentChildren, args: [forwardRef(function () { return DxiToolbarItemComponent; }),] },],
    };
    return DxoDropDownOptionsComponent;
}(DxoPopupOptions));
export { DxoDropDownOptionsComponent };
var DxoDropDownOptionsModule = (function () {
    function DxoDropDownOptionsModule() {
    }
    DxoDropDownOptionsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DxoDropDownOptionsComponent
                    ],
                    exports: [
                        DxoDropDownOptionsComponent
                    ],
                },] },
    ];
    return DxoDropDownOptionsModule;
}());
export { DxoDropDownOptionsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91aS9uZXN0ZWQvZHJvcC1kb3duLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQXVEWiwrQ0FBZTtJQWtDNUQscUNBQWdDLGtCQUNoQjtRQURoQixZQUVJLGlCQUFPLFNBV1Y7UUFURyxLQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0tBQzdEO0lBMUJELHNCQUFjLG9EQUFXO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1NBQzVCOzs7T0FBQTswQkFJRyw2REFBb0I7O1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzthQUUzQyxVQUF5QixLQUFLO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7OztnQkFwRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsTUFBTSxFQUFFO3dCQUNKLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLFVBQVU7d0JBQ1YsVUFBVTt3QkFDVixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxTQUFTO3dCQUNULGlCQUFpQjt3QkFDakIsVUFBVTt3QkFDVixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLE9BQU87d0JBQ1AsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFNBQVM7d0JBQ1QsT0FBTztxQkFDVjtpQkFDSjs7OztnQkF4RFEsZ0JBQWdCLHVCQTJGUixRQUFRLFlBQUksSUFBSTtnQkEzRnhCLGdCQUFnQix1QkE0RlosSUFBSTs7O2lDQTlCWixNQUFNO21DQUtOLE1BQU07a0NBS04sTUFBTTtnQ0FLTixNQUFNO3lDQU1OLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDOztzQ0FySDlEO0VBMkZpRCxlQUFlO1NBQW5ELDJCQUEyQjs7Ozs7Z0JBbUR2QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7O21DQXJKRDs7U0FzSmEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBkZXZleHRyZW1lLWFuZ3VsYXJcbiAqIFZlcnNpb246IDE5LjEuNlxuICogQnVpbGQgZGF0ZTogRnJpIFNlcCAyMCAyMDE5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxOSBEZXZlbG9wZXIgRXhwcmVzcyBJbmMuIEFMTCBSSUdIVFMgUkVTRVJWRURcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIG1heSBiZSBtb2RpZmllZCBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zXG4gKiBvZiB0aGUgTUlUIGxpY2Vuc2UuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGZvciBkZXRhaWxzLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZFeHByZXNzL2RldmV4dHJlbWUtYW5ndWxhclxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6dXNlLWlucHV0LXByb3BlcnR5LWRlY29yYXRvciAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5nTW9kdWxlLFxyXG4gICAgSG9zdCxcclxuICAgIFNraXBTZWxmLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IERldkV4cHJlc3MgZnJvbSAnZGV2ZXh0cmVtZS9idW5kbGVzL2R4LmFsbCc7XHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb25Ib3N0IH0gZnJvbSAnLi4vLi4vY29yZS9uZXN0ZWQtb3B0aW9uJztcclxuaW1wb3J0IHsgRHhvUG9wdXBPcHRpb25zIH0gZnJvbSAnLi9iYXNlL3BvcHVwLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBEeGlUb29sYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci1pdGVtLWR4aSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R4by1kcm9wLWRvd24tb3B0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBzdHlsZXM6IFsnJ10sXHJcbiAgICBwcm92aWRlcnM6IFtOZXN0ZWRPcHRpb25Ib3N0XSxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdhY2Nlc3NLZXknLFxyXG4gICAgICAgICdhbmltYXRpb24nLFxyXG4gICAgICAgICdjbG9zZU9uQmFja0J1dHRvbicsXHJcbiAgICAgICAgJ2Nsb3NlT25PdXRzaWRlQ2xpY2snLFxyXG4gICAgICAgICdjb250YWluZXInLFxyXG4gICAgICAgICdjb250ZW50VGVtcGxhdGUnLFxyXG4gICAgICAgICdkZWZlclJlbmRlcmluZycsXHJcbiAgICAgICAgJ2Rpc2FibGVkJyxcclxuICAgICAgICAnZHJhZ0VuYWJsZWQnLFxyXG4gICAgICAgICdlbGVtZW50QXR0cicsXHJcbiAgICAgICAgJ2ZvY3VzU3RhdGVFbmFibGVkJyxcclxuICAgICAgICAnZnVsbFNjcmVlbicsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgJ2hpbnQnLFxyXG4gICAgICAgICdob3ZlclN0YXRlRW5hYmxlZCcsXHJcbiAgICAgICAgJ21heEhlaWdodCcsXHJcbiAgICAgICAgJ21heFdpZHRoJyxcclxuICAgICAgICAnbWluSGVpZ2h0JyxcclxuICAgICAgICAnbWluV2lkdGgnLFxyXG4gICAgICAgICdvbkNvbnRlbnRSZWFkeScsXHJcbiAgICAgICAgJ29uRGlzcG9zaW5nJyxcclxuICAgICAgICAnb25IaWRkZW4nLFxyXG4gICAgICAgICdvbkhpZGluZycsXHJcbiAgICAgICAgJ29uSW5pdGlhbGl6ZWQnLFxyXG4gICAgICAgICdvbk9wdGlvbkNoYW5nZWQnLFxyXG4gICAgICAgICdvblJlc2l6ZScsXHJcbiAgICAgICAgJ29uUmVzaXplRW5kJyxcclxuICAgICAgICAnb25SZXNpemVTdGFydCcsXHJcbiAgICAgICAgJ29uU2hvd2luZycsXHJcbiAgICAgICAgJ29uU2hvd24nLFxyXG4gICAgICAgICdvblRpdGxlUmVuZGVyZWQnLFxyXG4gICAgICAgICdwb3NpdGlvbicsXHJcbiAgICAgICAgJ3Jlc2l6ZUVuYWJsZWQnLFxyXG4gICAgICAgICdydGxFbmFibGVkJyxcclxuICAgICAgICAnc2hhZGluZycsXHJcbiAgICAgICAgJ3NoYWRpbmdDb2xvcicsXHJcbiAgICAgICAgJ3Nob3dDbG9zZUJ1dHRvbicsXHJcbiAgICAgICAgJ3Nob3dUaXRsZScsXHJcbiAgICAgICAgJ3RhYkluZGV4JyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd0aXRsZVRlbXBsYXRlJyxcclxuICAgICAgICAndG9vbGJhckl0ZW1zJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJ1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRHJvcERvd25PcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgRHhvUG9wdXBPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGhlaWdodENoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGhlaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IEZ1bmN0aW9uIHwgc3RyaW5nPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHBvc2l0aW9uQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcG9zaXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZXZFeHByZXNzLnBvc2l0aW9uQ29uZmlnIHwgRnVuY3Rpb24gfCBzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgdmlzaWJsZUNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIHdpZHRoQ2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgd2lkdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBGdW5jdGlvbiB8IHN0cmluZz47XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IF9vcHRpb25QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiAnZHJvcERvd25PcHRpb25zJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IER4aVRvb2xiYXJJdGVtQ29tcG9uZW50KSlcclxuICAgIGdldCB0b29sYmFySXRlbXNDaGlsZHJlbigpOiBRdWVyeUxpc3Q8RHhpVG9vbGJhckl0ZW1Db21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCd0b29sYmFySXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCB0b29sYmFySXRlbXNDaGlsZHJlbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW4oJ3Rvb2xiYXJJdGVtcycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBASG9zdCgpIHBhcmVudE9wdGlvbkhvc3Q6IE5lc3RlZE9wdGlvbkhvc3QsXHJcbiAgICAgICAgICAgIEBIb3N0KCkgb3B0aW9uSG9zdDogTmVzdGVkT3B0aW9uSG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUV2ZW50RW1pdHRlcnMoW1xyXG4gICAgICAgICAgICB7IGVtaXQ6ICdoZWlnaHRDaGFuZ2UnIH0sXHJcbiAgICAgICAgICAgIHsgZW1pdDogJ3Bvc2l0aW9uQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd2aXNpYmxlQ2hhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGVtaXQ6ICd3aWR0aENoYW5nZScgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBwYXJlbnRPcHRpb25Ib3N0LnNldE5lc3RlZE9wdGlvbih0aGlzKTtcclxuICAgICAgICBvcHRpb25Ib3N0LnNldEhvc3QodGhpcywgdGhpcy5fZnVsbE9wdGlvblBhdGguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHhvRHJvcERvd25PcHRpb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEeG9Ecm9wRG93bk9wdGlvbnNDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHhvRHJvcERvd25PcHRpb25zTW9kdWxlIHsgfVxyXG4iXX0=