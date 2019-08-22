import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoAnimationConfig extends NestedOption {
    duration: number;
    easing: string;
    enabled: boolean;
    maxPointCountSupported: number;
    hide: DevExpress.animationConfig;
    show: DevExpress.animationConfig;
    complete: Function;
    delay: number;
    direction: string;
    from: any | number | string;
    staggerDelay: number;
    start: Function;
    to: any | number | string;
    type: string;
}
