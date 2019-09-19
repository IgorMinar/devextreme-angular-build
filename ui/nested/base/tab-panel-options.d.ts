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
import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoTabPanelOptions extends NestedOption {
    accessKey: string;
    activeStateEnabled: boolean;
    animationEnabled: boolean;
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItem>;
    deferRendering: boolean;
    disabled: boolean;
    elementAttr: any;
    focusStateEnabled: boolean;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    itemHoldTimeout: number;
    items: Array<string | any | {
        badge?: string;
        disabled?: boolean;
        html?: string;
        icon?: string;
        tabTemplate?: any;
        template?: any;
        text?: string;
        title?: string;
    }>;
    itemTemplate: any;
    itemTitleTemplate: any;
    loop: boolean;
    noDataText: string;
    onContentReady: Function;
    onDisposing: Function;
    onInitialized: Function;
    onItemClick: Function | string;
    onItemContextMenu: Function;
    onItemHold: Function;
    onItemRendered: Function;
    onOptionChanged: Function;
    onSelectionChanged: Function;
    onTitleClick: Function | string;
    onTitleHold: Function;
    onTitleRendered: Function;
    repaintChangesOnly: boolean;
    rtlEnabled: boolean;
    scrollByContent: boolean;
    scrollingEnabled: boolean;
    selectedIndex: number;
    selectedItem: any;
    showNavButtons: boolean;
    swipeEnabled: boolean;
    tabIndex: number;
    visible: boolean;
    width: number | Function | string;
}
