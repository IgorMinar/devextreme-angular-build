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
