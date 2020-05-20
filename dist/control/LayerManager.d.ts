import { ZoomPanHandler } from './ZoomPanHandler';
import { Layer } from '../layers';
import { ScaleOptions } from '../interfaces';
import { Axis } from '../components';
import { IntersectionReferenceSystem } from './IntersectionReferenceSystem';
interface AxisOptions {
    xLabel: string;
    yLabel: string;
    unitOfMeasure: string;
}
export declare class LayerManager {
    private container;
    private layerContainer;
    private _zoomPanHandler;
    private layers;
    private _axis;
    private _svgContainer;
    /**
     * Handles layers and axis also holds a zoom and pan handler object
     * @param container root container
     * @param scaleOptions
     * @param axisOptions
     */
    constructor(container: HTMLElement, scaleOptions?: ScaleOptions, axisOptions?: AxisOptions);
    /**
     * Adds and mounts an array of layers
     * @param layers array of layers
     */
    addLayers(layers: Layer[]): LayerManager;
    /**
     * Gets all layers currently mounted
     */
    getLayers(): Layer[];
    /**
     * Clears data from all mounted layers
     */
    clearAllData(): LayerManager;
    /**
     * Adds the layer to the manager, and mounts it
     * @param layer Layer
     * @param params extra params to pass to the onUpdate method
     */
    addLayer(layer: Layer, params?: any): LayerManager;
    /**
     * Remove layer from manager, and unmounts it
     * @param layerId name of layer
     */
    removeLayer(layerId: string): LayerManager;
    getLayer(layerId: string): Layer;
    initLayer(layer: Layer, params?: any): LayerManager;
    showLayer(layerId: string): LayerManager;
    hideLayer(layerId: string): LayerManager;
    /**
     * Adjust layers, axis, and zoom according to inputted dimensions
     * @param width (required)
     * @param height (required)
     */
    adjustToSize(width: number, height: number): void;
    setReferenceSystem(irs: IntersectionReferenceSystem): void;
    showAxis(): LayerManager;
    hideAxis(): LayerManager;
    showAxisLabels(): LayerManager;
    hideAxisLabels(): LayerManager;
    setAxisOffset(x: number, y: number): LayerManager;
    setXAxisOffset(x: number): LayerManager;
    setYAxisOffset(y: number): LayerManager;
    setZoomLevelBoundary(zoomlevels: [number, number]): LayerManager;
    setMaxZoomLevel(zoomlevel: number): LayerManager;
    setMinZoomLevel(zoomlevel: number): LayerManager;
    get zoomPanHandler(): ZoomPanHandler;
    get axis(): Axis;
    private rescale;
    private createAxis;
}
export {};
