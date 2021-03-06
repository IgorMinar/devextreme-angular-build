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
import { ElementRef, NgZone, QueryList, SimpleChanges, EventEmitter, OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { DxTemplateDirective } from './template';
import { IDxTemplateHost, DxTemplateHost } from './template-host';
import { EmitterHelper } from './events-strategy';
import { WatcherHelper } from './watcher-helper';
import { INestedOptionContainer, ICollectionNestedOption, ICollectionNestedOptionContainer } from './nested-option';
export declare const IS_PLATFORM_SERVER: string & {
    __not_a_string: never;
};
export declare abstract class DxComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, INestedOptionContainer, ICollectionNestedOptionContainer, IDxTemplateHost {
    protected element: ElementRef;
    private watcherHelper;
    private transferState;
    private platformId;
    private _initialOptions;
    protected _optionsToUpdate: any;
    private _collectionContainerImpl;
    eventHelper: EmitterHelper;
    optionChangedHandlers: EventEmitter<any>;
    templates: DxTemplateDirective[];
    instance: any;
    isLinked: boolean;
    changedOptions: {};
    createInstanceOnInit: boolean;
    widgetUpdateLocked: boolean;
    private _initTemplates();
    private _initEvents();
    private _initOptions();
    private _initPlatform();
    protected _createEventEmitters(events: any): void;
    _shouldOptionChange(name: string, value: any): boolean;
    clearChangedOptions(): void;
    protected _getOption(name: string): any;
    lockWidgetUpdate(): void;
    unlockWidgetUpdate(): void;
    protected _setOption(name: string, value: any): void;
    protected abstract _createInstance(element: any, options: any): any;
    protected _createWidget(element: any): void;
    protected _destroyWidget(): void;
    constructor(element: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, watcherHelper: WatcherHelper, transferState: TransferState, platformId: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    applyOptions(): void;
    setTemplate(template: DxTemplateDirective): void;
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): any;
}
export declare abstract class DxComponentExtension extends DxComponent {
    createInstance(element: any): void;
}
