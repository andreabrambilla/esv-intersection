import { CanvasLayer } from './base/CanvasLayer';
import { OnUpdateEvent, OnMountEvent, OnRescaleEvent } from '../interfaces';
export declare class SeismicCanvasLayer extends CanvasLayer {
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(): void;
}
