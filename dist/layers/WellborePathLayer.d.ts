import { SVGLayer } from './base/SVGLayer';
import { WellborepathLayerOptions, OnUpdateEvent, OnRescaleEvent } from '../interfaces';
export declare class WellborepathLayer extends SVGLayer {
    options: WellborepathLayerOptions;
    rescaleEvent: OnRescaleEvent;
    constructor(id?: string, options?: WellborepathLayerOptions);
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(): void;
    private renderWellborePath;
}
