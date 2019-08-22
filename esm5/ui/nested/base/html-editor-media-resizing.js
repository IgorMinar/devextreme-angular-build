/* tslint:disable:max-line-length */
import * as tslib_1 from "tslib";
import { NestedOption } from '../../../core/nested-option';
var DxoHtmlEditorMediaResizing = /** @class */ (function (_super) {
    tslib_1.__extends(DxoHtmlEditorMediaResizing, _super);
    function DxoHtmlEditorMediaResizing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoHtmlEditorMediaResizing.prototype, "allowedTargets", {
        get: function () {
            return this._getOption('allowedTargets');
        },
        set: function (value) {
            this._setOption('allowedTargets', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHtmlEditorMediaResizing.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoHtmlEditorMediaResizing;
}(NestedOption));
export { DxoHtmlEditorMediaResizing };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1lZGl0b3ItbWVkaWEtcmVzaXppbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXZleHRyZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS9uZXN0ZWQvYmFzZS9odG1sLWVkaXRvci1tZWRpYS1yZXNpemluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7O0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUczRDtJQUF5RCxzREFBWTtJQUFyRTs7SUFjQSxDQUFDO0lBYkcsc0JBQUksc0RBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUM7YUFDRCxVQUFtQixLQUFvQjtZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksK0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFDRCxVQUFZLEtBQWM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFJTCxpQ0FBQztBQUFELENBQUMsQUFkRCxDQUF5RCxZQUFZLEdBY3BFIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXHJcblxyXG5pbXBvcnQgeyBOZXN0ZWRPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL25lc3RlZC1vcHRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeG9IdG1sRWRpdG9yTWVkaWFSZXNpemluZyBleHRlbmRzIE5lc3RlZE9wdGlvbiB7XHJcbiAgICBnZXQgYWxsb3dlZFRhcmdldHMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignYWxsb3dlZFRhcmdldHMnKTtcclxuICAgIH1cclxuICAgIHNldCBhbGxvd2VkVGFyZ2V0cyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuX3NldE9wdGlvbignYWxsb3dlZFRhcmdldHMnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbignZW5hYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRPcHRpb24oJ2VuYWJsZWQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19