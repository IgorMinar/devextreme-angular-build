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
;
var DxTemplateHost = (function () {
    function DxTemplateHost() {
    }
    DxTemplateHost.prototype.setHost = function (host) {
        this.host = host;
    };
    DxTemplateHost.prototype.setTemplate = function (template) {
        this.host.setTemplate(template);
    };
    return DxTemplateHost;
}());
exports.DxTemplateHost = DxTemplateHost;
//# sourceMappingURL=template-host.js.map