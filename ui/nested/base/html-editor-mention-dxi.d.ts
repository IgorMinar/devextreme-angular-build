/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Tue Oct 22 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { CollectionNestedOption } from 'devextreme-angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiHtmlEditorMention extends CollectionNestedOption {
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | Array<string>;
    displayExpr: Function | string;
    itemTemplate: any;
    marker: string;
    minSearchLength: number;
    searchExpr: Function | Array<Function>;
    searchTimeout: number;
    template: any;
    valueExpr: Function | string;
}
