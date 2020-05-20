import { GeomodelLayerOptions, OnUpdateEvent, OnRescaleEvent, OnMountEvent } from '../interfaces';
import { CanvasLayer } from './base/CanvasLayer';
export declare class GeomodelCanvasLayer extends CanvasLayer {
    rescaleEvent: OnRescaleEvent;
    surfaceAreasPaths: any[];
    surfaceLinesPaths: any[];
    maxDepth: number;
    constructor(id?: string, options?: GeomodelLayerOptions);
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(): void;
    colorToHexString(color: number): string;
    generateSurfaceAreasPaths(): void;
    generateSurfaceLinesPaths(): void;
    drawPolygonPath: (color: string, path: Path2D) => void;
    drawLinePath: (color: string, path: Path2D) => void;
    createPolygons: (data: any) => number[][];
    generatePolygonPath: (polygon: number[]) => Path2D;
    generateLinePaths: (s: any) => Path2D[];
}
