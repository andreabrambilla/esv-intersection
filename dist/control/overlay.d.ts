import { Selection } from 'd3-selection';
import { OverlayCallbacks } from './interfaces';
declare class Overlay {
    elm: Selection<Element, unknown, null, undefined>;
    source: Element;
    elements: {
        [propName: string]: Element;
    };
    listeners: {
        [propName: string]: OverlayCallbacks;
    };
    enabled: boolean;
    constructor(caller: any, container: HTMLElement);
    create(key: string, callbacks?: OverlayCallbacks): HTMLElement;
    register(key: string, callbacks: OverlayCallbacks): void;
    remove(key: string): void;
    setZIndex(zIndex: number): void;
}
declare const overlay: (caller: any, container: HTMLElement) => Overlay;
export { overlay, Overlay };
