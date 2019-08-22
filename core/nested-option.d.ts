import { QueryList, ElementRef, Renderer2, EventEmitter } from '@angular/core';
export interface INestedOptionContainer {
    instance: any;
    isLinked: boolean;
    optionChangedHandlers: EventEmitter<any>;
}
export interface IOptionPathGetter {
    (): string;
}
export declare abstract class BaseNestedOption implements INestedOptionContainer, ICollectionNestedOptionContainer {
    protected _host: INestedOptionContainer;
    protected _hostOptionPath: IOptionPathGetter;
    private _collectionContainerImpl;
    protected _initialOptions: {};
    protected readonly abstract _optionPath: string;
    protected abstract _fullOptionPath(): string;
    constructor();
    protected _optionChangedHandler(e: any): void;
    protected _createEventEmitters(events: any): void;
    protected _getOption(name: string): any;
    protected _setOption(name: string, value: any): void;
    setHost(host: INestedOptionContainer, optionPath: IOptionPathGetter): void;
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): any;
    _filterItems(items: QueryList<BaseNestedOption>): BaseNestedOption[];
    readonly instance: any;
    readonly isLinked: boolean;
    readonly optionChangedHandlers: EventEmitter<any>;
}
export interface ICollectionNestedOptionContainer {
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): any;
}
export declare class CollectionNestedOptionContainerImpl implements ICollectionNestedOptionContainer {
    private _setOption;
    private _filterItems;
    private _activatedQueries;
    constructor(_setOption: Function, _filterItems?: Function);
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): void;
}
export declare abstract class NestedOption extends BaseNestedOption {
    setHost(host: INestedOptionContainer, optionPath: IOptionPathGetter): void;
    protected _fullOptionPath(): string;
}
export interface ICollectionNestedOption {
    _index: number;
    _value: Object;
}
export declare abstract class CollectionNestedOption extends BaseNestedOption implements ICollectionNestedOption {
    _index: number;
    protected _fullOptionPath(): string;
    readonly _value: {};
    readonly isLinked: boolean;
}
export interface IOptionWithTemplate extends BaseNestedOption {
    template: any;
}
export declare function extractTemplate(option: IOptionWithTemplate, element: ElementRef, renderer: Renderer2, document: any): void;
export declare class NestedOptionHost {
    private _host;
    private _optionPath;
    setHost(host: INestedOptionContainer, optionPath?: IOptionPathGetter): void;
    setNestedOption(nestedOption: BaseNestedOption): void;
}
