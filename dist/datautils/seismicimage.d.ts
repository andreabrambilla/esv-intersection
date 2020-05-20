export declare function getSeismicInfo(seismic: any, trajectory: number[][]): any;
export declare function generateSeismicSliceImage(data: {
    datapoints: number[][];
    yAxisValues: number[];
}, trajectory: number[][], colormap: string[], isLeftToRight?: boolean): Promise<ImageBitmap>;
