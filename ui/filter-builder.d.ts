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
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnInit, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxFilterBuilder from 'devextreme/ui/filter_builder';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiCustomOperationComponent } from './nested/custom-operation-dxi';
import { DxiFieldComponent } from './nested/field-dxi';
/**
 * The FilterBuilder widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
 */
export declare class DxFilterBuilderComponent extends DxComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxFilterBuilder;
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
     * Specifies whether the widget can display hierarchical data fields.
     */
    allowHierarchicalFields: boolean;
    /**
     * Configures custom filter operations.
     */
    customOperations: Array<DevExpress.ui.dxFilterBuilderCustomOperation>;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures fields.
     */
    fields: Array<DevExpress.ui.dxFilterBuilderField>;
    /**
     * Specifies filter operation descriptions.
     */
    filterOperationDescriptions: {
        between?: string;
        contains?: string;
        endsWith?: string;
        equal?: string;
        greaterThan?: string;
        greaterThanOrEqual?: string;
        isBlank?: string;
        isNotBlank?: string;
        lessThan?: string;
        lessThanOrEqual?: string;
        notContains?: string;
        notEqual?: string;
        startsWith?: string;
    };
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies group operation descriptions.
     */
    groupOperationDescriptions: {
        and?: string;
        notAnd?: string;
        notOr?: string;
        or?: string;
    };
    /**
     * Specifies a set of available group operations.
     */
    groupOperations: Array<string>;
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
     * Specifies groups' maximum nesting level.
     */
    maxGroupLevel: number;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Allows you to specify a filter.
     */
    value: any;
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
     * A function that is executed after an editor is created.
     */
    onEditorPrepared: EventEmitter<any>;
    /**
     * A function that is executed before an editor is created.
     */
    onEditorPreparing: EventEmitter<any>;
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
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the allowHierarchicalFieldsChange event.
     */
    allowHierarchicalFieldsChange: EventEmitter<boolean>;
    /**
     * A handler for the customOperationsChange event.
     */
    customOperationsChange: EventEmitter<Array<DevExpress.ui.dxFilterBuilderCustomOperation>>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the fieldsChange event.
     */
    fieldsChange: EventEmitter<Array<DevExpress.ui.dxFilterBuilderField>>;
    /**
     * A handler for the filterOperationDescriptionsChange event.
     */
    filterOperationDescriptionsChange: EventEmitter<{
        between?: string;
        contains?: string;
        endsWith?: string;
        equal?: string;
        greaterThan?: string;
        greaterThanOrEqual?: string;
        isBlank?: string;
        isNotBlank?: string;
        lessThan?: string;
        lessThanOrEqual?: string;
        notContains?: string;
        notEqual?: string;
        startsWith?: string;
    }>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the groupOperationDescriptionsChange event.
     */
    groupOperationDescriptionsChange: EventEmitter<{
        and?: string;
        notAnd?: string;
        notOr?: string;
        or?: string;
    }>;
    /**
     * A handler for the groupOperationsChange event.
     */
    groupOperationsChange: EventEmitter<Array<string>>;
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
     * A handler for the maxGroupLevelChange event.
     */
    maxGroupLevelChange: EventEmitter<number>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<any>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: (_: any) => void;
    customOperationsChildren: QueryList<DxiCustomOperationComponent>;
    fieldsChildren: QueryList<DxiFieldComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxFilterBuilder;
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
export declare class DxFilterBuilderModule {
}
