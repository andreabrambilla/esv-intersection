import { WellboreBaseComponentLayer } from './WellboreBaseComponentLayer';
import { CasingLayerOptions, OnMountEvent, OnUpdateEvent, OnRescaleEvent, HoleObjectData } from '..';
import { Texture, Point } from 'pixi.js';
export declare class CasingLayer extends WellboreBaseComponentLayer {
    options: CasingLayerOptions;
    constructor(id?: string, options?: CasingLayerOptions);
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(event: OnRescaleEvent | OnUpdateEvent): void;
    drawHoleSize: (holeObject: HoleObjectData, defaultTexture: Texture) => void;
    generateShoe: (triangleSideShoe: Point[], offset: number) => Point[];
}
