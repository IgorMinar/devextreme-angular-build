/*!
 * devextreme-angular
 * Version: 19.1.6
 * Build date: Fri Sep 20 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DxDrawer from 'devextreme/ui/drawer';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Drawer is a dismissible or permanently visible panel used for navigation in responsive web application layouts.
 */
export declare class DxDrawerComponent extends DxComponent implements OnDestroy {
    instance: DxDrawer;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies the duration of the drawer's opening and closing animation (in milliseconds). Applies only if animationEnabled is true.
     */
    animationDuration: number;
    /**
     * Specifies whether to use an opening and closing animation.
     */
    animationEnabled: boolean;
    /**
     * Specifies whether to close the drawer if a user clicks or taps the view area.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
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
     * Specifies the drawer's width or height (depending on the drawer's position) in the opened state.
     */
    maxSize: number;
    /**
     * Specifies the drawer's width or height (depending on the drawer's position) in the closed state.
     */
    minSize: number;
    /**
     * Specifies whether the drawer is opened.
     */
    opened: boolean;
    /**
     * Specifies how the drawer interacts with the view in the opened state.
     */
    openedStateMode: string;
    /**
     * Specifies the drawer's position in relation to the view.
     */
    position: string;
    /**
     * Specifies the drawer's reveal mode.
     */
    revealMode: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to shade the view when the drawer is opened.
     */
    shading: boolean;
    /**
     * Specifies the target element associated with the drawer. Applies only when the openedStateMode is "overlap".
     */
    target: Element | JQuery;
    /**
     * Specifies the drawer's content.
     */
    template: any;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed before the widget is disposed of.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A function used in JavaScript frameworks to save the widget instance.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A function that is executed after a widget option is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the animationDurationChange event.
     */
    animationDurationChange: EventEmitter<number>;
    /**
     * A handler for the animationEnabledChange event.
     */
    animationEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the closeOnOutsideClickChange event.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
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
     * A handler for the maxSizeChange event.
     */
    maxSizeChange: EventEmitter<number>;
    /**
     * A handler for the minSizeChange event.
     */
    minSizeChange: EventEmitter<number>;
    /**
     * A handler for the openedChange event.
     */
    openedChange: EventEmitter<boolean>;
    /**
     * A handler for the openedStateModeChange event.
     */
    openedStateModeChange: EventEmitter<string>;
    /**
     * A handler for the positionChange event.
     */
    positionChange: EventEmitter<string>;
    /**
     * A handler for the revealModeChange event.
     */
    revealModeChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the shadingChange event.
     */
    shadingChange: EventEmitter<boolean>;
    /**
     * A handler for the targetChange event.
     */
    targetChange: EventEmitter<Element | JQuery>;
    /**
     * A handler for the templateChange event.
     */
    templateChange: EventEmitter<any>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxDrawer;
    ngOnDestroy(): void;
}
export declare class DxDrawerModule {
}
