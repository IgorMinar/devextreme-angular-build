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
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DxButton from 'devextreme/ui/button';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Button widget is a simple button that performs specified commands when a user clicks it.
 */
export declare class DxButtonComponent extends DxComponent implements OnDestroy {
    instance: DxButton;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
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
     * Specifies the icon to be displayed on the button.
     */
    icon: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies how the button is styled.
     */
    stylingMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies a custom template for the Button widget.
     */
    template: any;
    /**
     * The text displayed on the button.
     */
    text: string;
    /**
     * Specifies the button type.
     */
    type: string;
    /**
     * Specifies whether or not the button must submit an HTML form.
     */
    useSubmitBehavior: boolean;
    /**
     * Specifies the name of the validation group to be accessed in the click event handler.
     */
    validationGroup: string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A function that is executed when the Button is clicked or tapped.
     */
    onClick: EventEmitter<any>;
    /**
     * A function that is executed when the widget's content is ready and each time the content is changed.
     */
    onContentReady: EventEmitter<any>;
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
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
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
     * A handler for the iconChange event.
     */
    iconChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the stylingModeChange event.
     */
    stylingModeChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the templateChange event.
     */
    templateChange: EventEmitter<any>;
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
    /**
     * A handler for the typeChange event.
     */
    typeChange: EventEmitter<string>;
    /**
     * A handler for the useSubmitBehaviorChange event.
     */
    useSubmitBehaviorChange: EventEmitter<boolean>;
    /**
     * A handler for the validationGroupChange event.
     */
    validationGroupChange: EventEmitter<string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxButton;
    ngOnDestroy(): void;
}
export declare class DxButtonModule {
}
