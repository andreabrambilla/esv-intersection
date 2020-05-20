import { Point } from 'pixi.js';
import { HoleObjectData, NormalCoordsObject, Cement, Casing, HoleSize } from '..';
export declare const generateHoleCoords: (normalOffsetCoordsUp: any, normalOffsetCoordsDown: any) => any;
export declare const createNormalCoords: (s: HoleObjectData) => NormalCoordsObject;
export declare const actualPoints: (s: HoleObjectData) => Point[];
export declare const findCasing: (id: string, casings: any) => any;
export declare const isBetween: (top: number, bottom: number, itemBottom: number, itemTop: number) => boolean;
export declare const findIntersectingItems: (cement: Cement, parentCasing: Casing, casings: Casing[], holes: HoleSize[]) => HoleSize[];
