import { NestedOption } from '../../../core/nested-option';
export declare abstract class DxoPositionConfig extends NestedOption {
    at: string | {
        x?: string;
        y?: string;
    };
    boundary: Element | JQuery | Window;
    boundaryOffset: string | {
        x?: number;
        y?: number;
    };
    collision: string | {
        x?: string;
        y?: string;
    };
    my: string | {
        x?: string;
        y?: string;
    };
    of: Element | JQuery | Window;
    offset: string | {
        x?: number;
        y?: number;
    };
}
