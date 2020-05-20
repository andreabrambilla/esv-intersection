import { CanvasLayer } from './base/CanvasLayer';
import { GridLayerOptions, OnUpdateEvent, OnRescaleEvent } from '../interfaces';
export declare class GridLayer extends CanvasLayer {
    options: GridLayerOptions;
    private _offsetX;
    private _offsetY;
    constructor(id?: string, options?: GridLayerOptions);
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(event: OnRescaleEvent | OnUpdateEvent): void;
    private renderTicksX;
    private renderTicksY;
    private mapMinorTicks;
    get offsetX(): number;
    set offsetX(offset: number);
    get offsetY(): number;
    set offsetY(offset: number);
}
