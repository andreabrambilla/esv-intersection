import { OnMountEvent, OnUpdateEvent, OnRescaleEvent } from '..';
import { CompletionLayerOptions } from '../interfaces';
import { PixiLayer } from './base/PixiLayer';
import { Graphics } from 'pixi.js';
interface CompletionItem {
}
export declare class CompletionLayer extends PixiLayer {
    options: CompletionLayerOptions;
    constructor(id: string, options: CompletionLayerOptions);
    onMount(event: OnMountEvent): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(event: OnRescaleEvent | OnUpdateEvent): void;
    getShape(type: string): Graphics;
    getScale(type: string, length: number, width: number): {
        scaleX: number;
        scaleY: number;
    };
    getAngle(p1: {
        y: number;
        x: number;
    }, p2: {
        y: number;
        x: number;
    }): number;
    generateCompletionItem(wbp: any, data: any): CompletionItem;
    drawCompletionItem(item: any): void;
}
export {};
