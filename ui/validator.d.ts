import { TransferState } from '@angular/platform-browser';
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxValidator from 'devextreme/ui/validator';
import { DxComponentExtension } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiValidationRuleComponent } from './nested/validation-rule-dxi';
/**
 * A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
 */
export declare class DxValidatorComponent extends DxComponentExtension implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxValidator;
    /**
     * An object that specifies what and when to validate, and how to apply the validation result.
     */
    adapter: {
        applyValidationResults?: Function;
        bypass?: Function;
        focus?: Function;
        getValue?: Function;
        reset?: Function;
        validationRequestsCallbacks?: any | Array<Function>;
    };
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies the editor name to be used in the validation default messages.
     */
    name: string;
    /**
     * Specifies the validation group the editor will be related to.
     */
    validationGroup: string;
    /**
     * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
     */
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
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
     * A function that is executed after a value is validated.
     */
    onValidated: EventEmitter<any>;
    /**
     * A handler for the adapterChange event.
     */
    adapterChange: EventEmitter<{
        applyValidationResults?: Function;
        bypass?: Function;
        focus?: Function;
        getValue?: Function;
        reset?: Function;
        validationRequestsCallbacks?: any | Array<Function>;
    }>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the validationGroupChange event.
     */
    validationGroupChange: EventEmitter<string>;
    /**
     * A handler for the validationRulesChange event.
     */
    validationRulesChange: EventEmitter<Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost, transferState: TransferState, platformId: any);
    protected _createInstance(element: any, options: any): DxValidator;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxValidatorModule {
}
