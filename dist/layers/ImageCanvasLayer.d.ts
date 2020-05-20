import { CanvasLayer } from './base/CanvasLayer';
import { OnUpdateEvent, OnMountEvent, OnRescaleEvent } from '../interfaces';
export declare class ImageLayer extends CanvasLayer {
    img: HTMLImageElement;
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(event: OnUpdateEvent): void;
}
