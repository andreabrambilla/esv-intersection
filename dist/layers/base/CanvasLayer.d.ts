import { Layer } from './Layer';
import { OnMountEvent, OnUpdateEvent, OnResizeEvent, OnRescaleEvent } from '../../interfaces';
export declare abstract class CanvasLayer extends Layer {
    ctx: CanvasRenderingContext2D;
    elm: HTMLElement;
    canvas: HTMLCanvasElement;
    onOpacityChanged(opacity: number): void;
    onOrderChanged(order: number): void;
    onInteractivityChanged(interactive: boolean): void;
    setVisibility(visible: boolean): void;
    updateStyle(visible?: boolean): void;
    onMount(event: OnMountEvent): void;
    onUnmount(): void;
    onResize(event: OnResizeEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    resetTransform(): void;
    setTransform(event: OnRescaleEvent): void;
    clearCanvas(): void;
}
