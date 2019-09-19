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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DxMap from 'devextreme/ui/map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiCenterComponent } from './nested/center-dxi';
import { DxiMarkerComponent } from './nested/marker-dxi';
import { DxiRouteComponent } from './nested/route-dxi';
/**
 * The Map is an interactive widget that displays a geographic map with markers and routes.
 */
export declare class DxMapComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxMap;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether the widget automatically adjusts center and zoom option values when adding a new marker or route, or if a new widget contains markers or routes by default.
     */
    autoAdjust: boolean;
    /**
     * An object, a string, or an array specifying which part of the map is displayed at the widget's center using coordinates. The widget can change this value if autoAdjust is enabled.
     */
    center: string | Array<number | {
        lat?: number;
        lng?: number;
    }>;
    /**
     * Specifies whether or not map widget controls are available.
     */
    controls: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * A key used to authenticate the application within the required map provider.
     */
    key: string | {
        bing?: string;
        google?: string;
        googleStatic?: string;
    };
    /**
     * A URL pointing to the custom icon to be used for map markers.
     */
    markerIconSrc: string;
    /**
     * An array of markers displayed on a map.
     */
    markers: Array<any | {
        iconSrc?: string;
        location?: string | Array<number | {
            lat?: number;
            lng?: number;
        }>;
        onClick?: Function;
        tooltip?: string | {
            isShown?: boolean;
            text?: string;
        };
    }>;
    /**
     * The name of the current map data provider.
     */
    provider: string;
    /**
     * An array of routes shown on the map.
     */
    routes: Array<any | {
        color?: string;
        locations?: Array<any | {
            lat?: number;
            lng?: number;
        }>;
        mode?: string;
        opacity?: number;
        weight?: number;
    }>;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The type of a map to display.
     */
    type: string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * The map's zoom level. The widget can change this value if autoAdjust is enabled.
     */
    zoom: number;
    /**
     * A function that is executed when any location on the map is clicked or tapped.
     */
    onClick: EventEmitter<any>;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed when a marker is created on the map.
     */
    onMarkerAdded: EventEmitter<any>;
    /**
     * A function that is executed when a marker is removed from the map.
     */
    onMarkerRemoved: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A function that is executed when the map is ready.
     */
    onReady: EventEmitter<any>;
    /**
     * A function that is executed when a route is created on the map.
     */
    onRouteAdded: EventEmitter<any>;
    /**
     * A function that is executed when a route is removed from the map.
     */
    onRouteRemoved: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the autoAdjustChange event.
     */
    autoAdjustChange: EventEmitter<boolean>;
    /**
     * A handler for the centerChange event.
     */
    centerChange: EventEmitter<string | Array<number | {
        lat?: number;
        lng?: number;
    }>>;
    /**
     * A handler for the controlsChange event.
     */
    controlsChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the keyChange event.
     */
    keyChange: EventEmitter<string | {
        bing?: string;
        google?: string;
        googleStatic?: string;
    }>;
    /**
     * A handler for the markerIconSrcChange event.
     */
    markerIconSrcChange: EventEmitter<string>;
    /**
     * A handler for the markersChange event.
     */
    markersChange: EventEmitter<Array<any | {
        iconSrc?: string;
        location?: string | Array<number | {
            lat?: number;
            lng?: number;
        }>;
        onClick?: Function;
        tooltip?: string | {
            isShown?: boolean;
            text?: string;
        };
    }>>;
    /**
     * A handler for the providerChange event.
     */
    providerChange: EventEmitter<string>;
    /**
     * A handler for the routesChange event.
     */
    routesChange: EventEmitter<Array<any | {
        color?: string;
        locations?: Array<any | {
            lat?: number;
            lng?: number;
        }>;
        mode?: string;
        opacity?: number;
        weight?: number;
    }>>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the typeChange event.
     */
    typeChange: EventEmitter<string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the zoomChange event.
     */
    zoomChange: EventEmitter<number>;
    centerChildren: QueryList<DxiCenterComponent>;
    markersChildren: QueryList<DxiMarkerComponent>;
    routesChildren: QueryList<DxiRouteComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxMapModule {
}
