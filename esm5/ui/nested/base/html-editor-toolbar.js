/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { NestedOption } from '../../../core/nested-option';
var DxoHtmlEditorToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(DxoHtmlEditorToolbar, _super);
    function DxoHtmlEditorToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoHtmlEditorToolbar.prototype, "container", {
        get: function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHtmlEditorToolbar.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoHtmlEditorToolbar;
}(NestedOption));
export { DxoHtmlEditorToolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1lZGl0b3ItdG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RldmV4dHJlbWUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpL25lc3RlZC9iYXNlL2h0bWwtZWRpdG9yLXRvb2xiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJM0Q7SUFBbUQsZ0RBQVk7SUFBL0Q7O0lBY0EsQ0FBQztJQWJHLHNCQUFJLDJDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO2FBQ0QsVUFBYyxLQUF1QjtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLHVDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQ0QsVUFBVSxLQUE0RDtZQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQUlMLDJCQUFDO0FBQUQsQ0FBQyxBQWRELENBQW1ELFlBQVksR0FjOUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cclxuXHJcbmltcG9ydCB7IE5lc3RlZE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbmVzdGVkLW9wdGlvbic7XHJcblxyXG5pbXBvcnQgRGV2RXhwcmVzcyBmcm9tICdkZXZleHRyZW1lL2J1bmRsZXMvZHguYWxsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeG9IdG1sRWRpdG9yVG9vbGJhciBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgY29udGFpbmVyKCk6IEVsZW1lbnQgfCBKUXVlcnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPcHRpb24oJ2NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnRhaW5lcih2YWx1ZTogRWxlbWVudCB8IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignY29udGFpbmVyJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxEZXZFeHByZXNzLnVpLmR4SHRtbEVkaXRvclRvb2xiYXJJdGVtIHwgc3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignaXRlbXMnKTtcclxuICAgIH1cclxuICAgIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8RGV2RXhwcmVzcy51aS5keEh0bWxFZGl0b3JUb29sYmFySXRlbSB8IHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2l0ZW1zJywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==