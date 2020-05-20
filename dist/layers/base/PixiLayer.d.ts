import { Application, Transform } from 'pixi.js';
import { Layer } from './Layer';
import { OnMountEvent, OnRescaleEvent, OnResizeEvent } from '../../interfaces';
export declare abstract class PixiLayer extends Layer {
    elm: HTMLElement;
    container: HTMLElement;
    ctx: Application;
    transform: Transform;
    onMount(event: OnMountEvent): void;
    onUnmount(): void;
    onResize(event: OnResizeEvent): void;
    onRescale(event: OnRescaleEvent): void;
    setTransform: (width: number, height: number, xScale: any, yScale: any) => any;
    updateStyle(visible?: boolean): void;
    setVisibility(visible: boolean): void;
    onOpacityChanged(opacity: number): void;
    onOrderChanged(order: number): void;
    onInteractivityChanged(interactive: boolean): void;
}
