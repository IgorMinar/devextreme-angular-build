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
import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxRadioGroup from 'devextreme/ui/radio_group';
import { DxValidatorComponent } from 'devextreme-angular/ui/validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent, DxTemplateHost, NestedOptionHost, IterableDifferHelper, WatcherHelper } from 'devextreme-angular/core';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
/**
 * The RadioGroup is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.
 */
export declare class DxRadioGroupComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxRadioGroup;
    validator: DxValidatorComponent;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Binds the widget to data.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the data field whose values should be displayed.
     */
    displayExpr: Function | string;
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
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * An array of items displayed by the widget.
     */
    items: Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies the radio group layout.
     */
    layout: string;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * Specifies whether the editor is read-only.
     */
    readOnly: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * Specifies the widget's value.
     */
    value: any;
    /**
     * Specifies which data field provides unique values to the widget's value.
     */
    valueExpr: Function | string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
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
     * A function that is executed after the widget's value is changed.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.CollectionWidgetItem | any>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    displayExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hintChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemsChange: EventEmitter<Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    layoutChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    nameChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    validationMessageModeChange: EventEmitter<string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueChange: EventEmitter<any>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    valueExprChange: EventEmitter<Function | string>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxRadioGroup;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class DxRadioGroupModule {
}
