import { Container } from 'pixi.js';
import { PixiLayer } from './base/PixiLayer';
import { GeoModelData, GeomodelLayerOptions, OnUpdateEvent, OnRescaleEvent, OnMountEvent } from '../interfaces';
export declare class GeomodelLayerV2 extends PixiLayer {
    options: GeomodelLayerOptions;
    pixiContainer: Container;
    data: any;
    polygons: any;
    onMount(event: OnMountEvent): void;
    onUnmount(): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    cleanUpContainer(): void;
    createPolygons: (data: any) => number[][];
    generateAreaPolygon: (s: GeoModelData) => void;
    generateSurfaceLine: (s: any) => void;
}
