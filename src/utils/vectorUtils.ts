import { Point } from 'pixi.js';

export const calcDist = (prev: number[], point: number[]): number => {
  const a = prev[0] - point[0];
  const b = prev[1] - point[1];

  return Math.sqrt(a * a + b * b);
};

export const calcDistPoint = (prev: Point, point: Point): number => {
  return calcDist([prev.x, prev.y], [point.x, point.y]);
};

export const calcNormal = (p1: Point, p2: Point): Point => {
  // if (p1 == null || p2 == null) {
  //   throw `Calculate normal null point: P1: ${p1} P2: ${p2}`;
  // }

  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  dx = dy === 0 ? 1 : dx;
  dy = dx === 0 ? 1 : dy;
  return new Point(-dy, dx);
};

export const pointToArray = (p: Point): [number, number] => [p.x, p.y];

export const arrayToPoint = (p: [number, number]): Point => new Point(p[0], p[1]);

export const convertToUnitVector = (vector: Point): Point => {
  const normSq = vector.x * vector.x + vector.y * vector.y;
  if(normSq < 1e-12) 
    return undefined;
  const div = 1 / Math.sqrt(normSq);
  const unitVector = new Point(div * vector.x, div * vector.y);
  return unitVector;
};


export const computeNormals = (curve: Point[]): Point[] => {
  // NOTE: we assume adjacent points are not overlapped
  if(curve.length < 2) 
     return undefined;
  const normals: Point[] = [];
  normals.push(convertToUnitVector(calcNormal(curve[0], curve[1])));

  // First pass: compute normals for each segment
  for(let i = 1; i < curve.length; i++) {
    normals.push(convertToUnitVector(calcNormal(curve[i-1], curve[i])));
  }

  // Second pass: average normals on consecutive segments
  for(let i = 1; i < curve.length - 1; i++) {
    normals[i].x = 0.5 * (normals[i].x + normals[i+1].x);
    normals[i].y = 0.5 * (normals[i].y + normals[i+1].y);
    normals[i] = convertToUnitVector(normals[i]);
  }

  return normals;
}


export const displace = (points: Point[], vectors: Point[], scale: number): Point[] => {
  const newPoints: Point[] = [];
  const num = Math.min(points.length, vectors.length);
  for(let i = 0; i < num; i++) {
    const p = points[i].clone();
    p.x += vectors[i].x * scale;
    p.y += vectors[i].y * scale;
    newPoints.push(p);
  }
  return newPoints;
}


export const createNormal = (coords: Point[], offset: number): Point[] => {
  // The name is very misleading
  // This mathod is left here just for backward compatibility for now
  return displace(coords, computeNormals(coords), offset)
};
