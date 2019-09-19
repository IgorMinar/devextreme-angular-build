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
import { ElementRef, Renderer2, AfterViewInit, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { DxTemplateDirective } from '../../core/template';
import { IDxTemplateHost, DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiItemComponent } from './item-dxi';
export declare class DxiTabComponent extends CollectionNestedOption implements AfterViewInit, IDxTemplateHost {
    private renderer;
    private document;
    private element;
    alignItemLabels: boolean;
    badge: string;
    colCount: number;
    colCountByScreen: {
        lg?: number;
        md?: number;
        sm?: number;
        xs?: number;
    };
    disabled: boolean;
    icon: string;
    items: Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem | DevExpress.ui.dxFormButtonItem>;
    tabTemplate: any;
    template: any;
    title: string;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, renderer: Renderer2, document: any, templateHost: DxTemplateHost, element: ElementRef);
    setTemplate(template: DxTemplateDirective): void;
    ngAfterViewInit(): void;
}
export declare class DxiTabModule {
}
