import { Selection } from 'd3-selection';
import { Layer } from './Layer';
import { OnMountEvent, OnResizeEvent } from '../../interfaces';
export declare abstract class SVGLayer extends Layer {
    elm: Selection<SVGElement, any, null, undefined>;
    onMount(event: OnMountEvent): void;
    onUnmount(): void;
    onResize(event: OnResizeEvent): void;
    setVisibility(visible: boolean): void;
    onOpacityChanged(opacity: number): void;
    onOrderChanged(order: number): void;
    onInteractivityChanged(shouldBeInteractive: boolean): void;
}
