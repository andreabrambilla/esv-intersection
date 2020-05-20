import { Point } from 'pixi.js';
export declare const calcDist: (prev: number[], point: number[]) => number;
export declare const calcDistPoint: (prev: Point, point: Point) => number;
export declare const calcNormal: (p1: Point, p2: Point) => Point;
export declare const pointToArray: (p: Point) => [number, number];
export declare const arrayToPoint: (p: [number, number]) => Point;
export declare const convertToUnitVector: (vector: Point) => Point;
export declare const createNormal: (coords: Point[], offset: number) => Point[];
