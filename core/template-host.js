/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Thu Sep 19 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
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
export { DxTemplateHost };
//# sourceMappingURL=template-host.js.map