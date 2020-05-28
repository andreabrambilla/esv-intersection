import { computeNormals } from '../src/utils/vectorUtils';
import { Point } from 'pixi.js'

describe('Compute Normals', () => {
  //let elm: HTMLElement;
  beforeEach(() => {
    //elm = document.createElement('div');
  });

  afterEach(() => {
    //elm.remove();
  });

  it('should not compute normals an empty curve', () => {
    expect(computeNormals([])).toEqual(undefined);
  });
  it('should not compute normals an a single point', () => {
    expect(computeNormals([Point(1, 2)])
      ).toEqual(undefined);
  });
  it('should have two equal normals on a straight segment', () => {
    let normals = computeNormals([Point(1, 2), Point(3, 0)])
    expect(normals[0].x).toEqual(normals[1].x); 
    expect(normals[0].y).toEqual(normals[1].y);
    expect(normals[0].x).toEqual(Math.sqrt(2)); 
    expect(normals[0].y).toEqual(Math.sqrt(2));
  });
  
  //  expect(layer.order).toBeLessThan(parseInt(overlayZIndex, 10));
  
});
