import { NestedOption } from '../../../core/nested-option';
export declare abstract class DxoButtonOptions extends NestedOption {
    accessKey: string;
    activeStateEnabled: boolean;
    disabled: boolean;
    elementAttr: any;
    focusStateEnabled: boolean;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    icon: string;
    onClick: Function;
    onContentReady: Function;
    onDisposing: Function;
    onInitialized: Function;
    onOptionChanged: Function;
    rtlEnabled: boolean;
    stylingMode: string;
    tabIndex: number;
    template: any;
    text: string;
    type: string;
    useSubmitBehavior: boolean;
    validationGroup: string;
    visible: boolean;
    width: number | Function | string;
}
