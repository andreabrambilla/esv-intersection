import { WellboreBaseComponentLayer } from './WellboreBaseComponentLayer';
import { CementLayerOptions, OnUpdateEvent, OnRescaleEvent, Cement } from '..';
import { Texture } from 'pixi.js';
export declare class CementLayer extends WellboreBaseComponentLayer {
    options: CementLayerOptions;
    constructor(id?: string, options?: CementLayerOptions);
    onUpdate(event: OnUpdateEvent): void;
    render(event: OnRescaleEvent | OnUpdateEvent): void;
    createCementShapes(cement: Cement[], casings: any, holes: any): any;
    createTexture: () => Texture;
}
