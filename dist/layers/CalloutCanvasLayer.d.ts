import { ScaleLinear } from 'd3-scale';
import { CanvasLayer } from './base/CanvasLayer';
import { OnUpdateEvent, Annotation, OnRescaleEvent, BoundingBox } from '../interfaces';
declare type Point = {
    x: number;
    y: number;
};
declare type Callout = {
    title: string;
    label: string;
    pos: Point;
    group: string;
    alignment: string;
    boundingBox: BoundingBox;
    dx: number;
    dy: number;
};
export declare class CalloutCanvasLayer extends CanvasLayer {
    rescaleEvent: OnRescaleEvent;
    isPanning: boolean;
    xRatio: number;
    callouts: Callout[];
    groupFilter: string[];
    setGroupFilter(filter: string[]): void;
    onUpdate(event: OnUpdateEvent): void;
    onRescale(event: OnRescaleEvent): void;
    render(): void;
    private renderAnnotation;
    private renderText;
    private renderPoint;
    private renderCallout;
    private renderLine;
    private getPosition;
    positionCallouts(annotations: Annotation[], isLeftToRight: boolean, xScale: ScaleLinear<number, number>, yScale: ScaleLinear<number, number>, scale: number, fontSize: number, offset?: number): Callout[];
    getAnnotationBoundingBox(title: string, label: string, pos: [number, number], xScale: ScaleLinear<number, number>, yScale: ScaleLinear<number, number>, height: number): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    chooseTopOrBottomPosition(nodes: Callout[], bottom: Callout[], top: Callout[]): void;
    adjustTopPositions(top: Callout[]): void;
    adjustBottomPositions(bottom: Callout[]): void;
}
export {};
