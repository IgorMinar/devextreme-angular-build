"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var template_host_1 = require("./template-host");
var utils_1 = require("./utils");
var events = require("devextreme/events");
exports.DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var RenderData = (function () {
    function RenderData() {
    }
    return RenderData;
}());
exports.RenderData = RenderData;
var DxTemplateDirective = (function () {
    function DxTemplateDirective(templateRef, viewContainerRef, templateHost, renderer, zone) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.zone = zone;
        templateHost.setTemplate(this);
    }
    Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DxTemplateDirective.prototype.renderTemplate = function (renderData) {
        var _this = this;
        var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
            '$implicit': renderData.model,
            index: renderData.index
        });
        var container = utils_1.getElement(renderData.container);
        if (renderData.container) {
            childView.rootNodes.forEach(function (element) {
                _this.renderer.appendChild(container, element);
            });
        }
        return childView;
    };
    DxTemplateDirective.prototype.render = function (renderData) {
        var _this = this;
        var childView;
        if (this.zone.isStable) {
            childView = this.zone.run(function () {
                return _this.renderTemplate(renderData);
            });
        }
        else {
            childView = this.renderTemplate(renderData);
            // =========== WORKAROUND =============
            // https://github.com/angular/angular/issues/12243
            childView['detectChanges']();
            // =========== /WORKAROUND =============
        }
        childView.rootNodes.forEach(function (element) {
            if (element.nodeType === 1) {
                _this.renderer.addClass(element, exports.DX_TEMPLATE_WRAPPER_CLASS);
            }
            events.one(element, 'dxremove', function (_a, params) {
                if (!params || !params._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    };
    DxTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dxTemplate]'
                },] },
    ];
    /** @nocollapse */
    DxTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: template_host_1.DxTemplateHost, },
        { type: core_1.Renderer2, },
        { type: core_1.NgZone, },
    ]; };
    DxTemplateDirective.propDecorators = {
        "dxTemplateOf": [{ type: core_1.Input },],
    };
    return DxTemplateDirective;
}());
exports.DxTemplateDirective = DxTemplateDirective;
var DxTemplateModule = (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [DxTemplateDirective],
                    exports: [DxTemplateDirective]
                },] },
    ];
    return DxTemplateModule;
}());
exports.DxTemplateModule = DxTemplateModule;
//# sourceMappingURL=template.js.map