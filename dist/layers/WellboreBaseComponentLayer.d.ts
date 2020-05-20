import { Graphics, Texture, Point, SimpleRope } from 'pixi.js';
import { PixiLayer } from './base/PixiLayer';
import { HoleSizeLayerOptions, OnUpdateEvent, OnRescaleEvent, HoleObjectData, HoleSize, Casing, OnMountEvent } from '../interfaces';
export declare const StaticWellboreBaseComponentIncrement = 0.1;
export declare class WellboreBaseComponentLayer extends PixiLayer {
    options: HoleSizeLayerOptions;
    constructor(id?: string, options?: HoleSizeLayerOptions);
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(event: OnRescaleEvent | OnUpdateEvent): void;
    drawBigPolygon: (coords: Point[], t?: Texture) => Graphics;
    createRopeTextureBackground: (coords: Point[], texture: Texture, mask: Graphics) => SimpleRope;
    drawLine: (coords: Point[], lineColor: number, lineWidth?: number) => void;
    createTexure: (maxWidth: number, firstColor: string, secondColor: string, startPctOffset?: number) => Texture;
    generateHoleSizeData: (data: HoleSize | Casing) => HoleObjectData;
}
