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
import { CollectionNestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiTextEditorButton extends CollectionNestedOption {
    location: string;
    name: string;
    options: DevExpress.ui.dxButtonOptions;
    cssClass: string;
    hint: string;
    icon: string;
    onClick: Function | string;
    template: any;
    text: string;
    visible: boolean | Function;
}
