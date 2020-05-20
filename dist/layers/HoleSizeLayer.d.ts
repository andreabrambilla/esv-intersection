import { WellboreBaseComponentLayer } from './WellboreBaseComponentLayer';
import { HoleSizeLayerOptions, OnMountEvent, OnUpdateEvent, OnRescaleEvent, HoleObjectData } from '..';
import { Texture } from 'pixi.js';
export declare class HoleSizeLayer extends WellboreBaseComponentLayer {
    options: HoleSizeLayerOptions;
    constructor(id?: string, options?: HoleSizeLayerOptions);
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(event: OnRescaleEvent | OnUpdateEvent): void;
    drawHoleSize: (holeObject: HoleObjectData, texture: Texture) => void;
}
