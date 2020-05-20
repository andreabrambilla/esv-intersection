import { Interpolator, Trajectory, ReferenceSystemOptions } from '../interfaces';
export declare class IntersectionReferenceSystem {
    options: ReferenceSystemOptions;
    path: number[][];
    projectedPath: number[][];
    projectedTrajectory: number[][];
    private _offset;
    displacement: number;
    depthReference: number;
    wellboreId: number;
    trajectoryOffset: number;
    interpolators: Interpolator;
    startVector: number[];
    endVector: number[];
    /**
     * Creates a common reference system that layers and other components can use
     * @param path (required) array of 3d coordinates: [x, y, z]
     * @param options (optional)
     * @param options.trajectoryAngle (optional) - trajectory angle in degrees, overrides the calculated value
     */
    constructor(path: number[][], options?: ReferenceSystemOptions);
    private setPath;
    /**
     * Map a length along the curve to intersection coordinates
     * @param length length along the curve
     */
    project(length: number): number[];
    /**
     * Map a displacement back to length along the curve
     */
    unproject(displacement: number): number;
    /**
     * Get the normalized displacement [0 - 1] of a specific length along the curve
     */
    getProjectedLength(length: number): number;
    /**
     * Get the trajectory position at a length along the curve
     */
    getPosition(length: number): number[];
    /**
     * Generate a set of coordinates along the trajectory of the curve
     */
    getTrajectory(steps: number, from?: number, to?: number): Trajectory;
    /**
     * Perform a curtain projection on a set of points in 3D
     * @param points
     * @param origin
     * @param offset
     * @returns {array}
     */
    static toDisplacement(points: number[][], offset?: number): number[][];
    /**
     * returns a normalized vector
     * @param interp interpolated curve
     * @param from number between 0 and 1
     * @param to number between 0 and 1
     */
    static getDirectionVector(interp: any, from: number, to: number): number[];
    get length(): number;
    get offset(): number;
    set offset(offset: number);
}
