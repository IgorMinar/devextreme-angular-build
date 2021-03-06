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
import { NestedOption } from 'devextreme-angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoBoxOptions extends NestedOption {
    align: string;
    crossAlign: string;
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
    direction: string;
    disabled: boolean;
    elementAttr: any;
    height: number | Function | string;
    hoverStateEnabled: boolean;
    itemHoldTimeout: number;
    items: Array<string | any | {
        baseSize?: number | string;
        box?: DevExpress.ui.dxBoxOptions;
        disabled?: boolean;
        html?: string;
        ratio?: number;
        shrink?: number;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    itemTemplate: any;
    onContentReady: Function;
    onDisposing: Function;
    onInitialized: Function;
    onItemClick: Function | string;
    onItemContextMenu: Function;
    onItemHold: Function;
    onItemRendered: Function;
    onOptionChanged: Function;
    rtlEnabled: boolean;
    visible: boolean;
    width: number | Function | string;
}
