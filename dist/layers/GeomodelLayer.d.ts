import { Graphics } from 'pixi.js';
import { PixiLayer } from './base/PixiLayer';
import { GeoModelData, GeomodelLayerOptions, OnUpdateEvent, OnRescaleEvent, OnMountEvent } from '../interfaces';
export declare class GeomodelLayer extends PixiLayer {
    options: GeomodelLayerOptions;
    graphics: Graphics;
    constructor(id?: string, options?: GeomodelLayerOptions);
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(): void;
    createPolygon: (data: any) => number[][];
    drawAreaPolygon: (s: GeoModelData) => void;
    drawSurfaceLine: (s: any) => void;
}
