import { Graphics, Texture, Point, SimpleRope } from 'pixi.js';
import { PixiLayer } from './base/PixiLayer';
import {
  HoleSizeLayerOptions,
  OnUpdateEvent,
  OnRescaleEvent,
  MDPoint,
  HoleObjectData,
  NormalCoordsObject,
  HoleSize,
  Casing,
  OnMountEvent,
} from '../interfaces';

export const StaticWellboreBaseComponentIncrement = 0.1;

export class WellboreBaseComponentLayer extends PixiLayer {
  options: HoleSizeLayerOptions;

  constructor(id?: string, options?: HoleSizeLayerOptions) {
    super(id, options);
    this.options = {
      ...options,
    };
    this.render = this.render.bind(this);
  }

  onMount(event: OnMountEvent): void {
    super.onMount(event);
  }

  onUpdate(event: OnUpdateEvent): void {
    super.onUpdate(event);
    this.ctx.stage.removeChildren();
    //this.render(event);
  }

  onRescale(event: OnRescaleEvent): void {
    super.onRescale(event);
    this.ctx.stage.position.set(event.transform.x, event.transform.y);
    this.ctx.stage.scale.set(event.xRatio, event.yRatio);
  }

  // Is overridden by extended well bore items layers (casing, hole)
  render(event: OnRescaleEvent | OnUpdateEvent): void {}

  drawBigPolygon = (coords: Point[], t?: Texture): Graphics => {
    const polygon = new Graphics();
    if (t != null) {
      polygon.beginTextureFill({ texture: t });
    } else {
      polygon.beginFill(0);
    }
    polygon.drawPolygon(coords);
    polygon.endFill();
    this.ctx.stage.addChild(polygon);

    return polygon;
  };

  createRopeTextureBackground = (coords: Point[], texture: Texture, mask: Graphics): SimpleRope => {
    const rope: SimpleRope = new SimpleRope(texture, coords);
    rope.mask = mask;
    this.ctx.stage.addChild(rope);

    return rope;
  };

  drawLine = (coords: Point[], lineColor: number, lineWidth = 1): void => {
    const DRAW_ALIGNMENT_INSIDE = 1;
    const startPoint = coords[0];
    const line = new Graphics();
    line.lineStyle(lineWidth, lineColor, undefined, DRAW_ALIGNMENT_INSIDE).moveTo(startPoint.x, startPoint.y);
    coords.map((p: Point) => line.lineTo(p.x, p.y));

    this.ctx.stage.addChild(line);
  };

  createTexure = (maxWidth: number, firstColor: string, secondColor: string, startPctOffset = 0): Texture => {
    const halfWayPct = 0.5;
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = maxWidth > 0 ? maxWidth : canvas.width; // TODO needs to grow with scale
    const canvasCtx = canvas.getContext('2d');

    const gradient = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, firstColor);
    gradient.addColorStop(halfWayPct - startPctOffset, secondColor);
    gradient.addColorStop(halfWayPct + startPctOffset, secondColor);
    gradient.addColorStop(1, firstColor);

    canvasCtx.fillStyle = gradient;
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    const t = Texture.from(canvas);
    return t;
  };

  generateHoleSizeData = (data: HoleSize | Casing): HoleObjectData => {

    const points: any = [];
    for (let i = data.start; i < data.start + data.length; 
            i += StaticWellboreBaseComponentIncrement) {
        const p = this.referenceSystem.project(i);
        points.push({ point: new Point(p[0], p[1]), md: i });
    }
    return { data: { ...data, diameter: data.diameter }, 
             points, 
             hasShoe: data.hasShoe, 
             innerDiameter: data.innerDiameter };

    // TODO: the starting point need to be the set of points where there is a change in size!
/*
    let samples: any = []
    samples.push({ arclength: data.start, 
                   point: this.referenceSystem.project(data.start)})

    // Somewhere downstream at least 3 points are required along the curve
    // so add also the mid point )as a temporary workaround
    samples.push({ arclength: data.start + 0.5 * data.length,
                   point: this.referenceSystem.project(data.start + 0.5 * data.length)})

    samples.push({ arclength: data.start + data.length,
                   point: this.referenceSystem.project(data.start + data.length)})

    // Loop for refining
    let i = 0
    const eps_squared = 2*2 // TODO: play around with this value
    while(i+1 < samples.length) {
        const al_mid = 0.5 * (samples[i].arclength + samples[i+1].arclength)
        const mid = {arclength: al_mid, point: this.referenceSystem.project(al_mid)}
        const avg = [0.5 * (samples[i].point[0] + samples[i+1].point[0]), 
                     0.5 * (samples[i].point[1] + samples[i+1].point[1])]
        const dx = mid.point[0] - avg[0]
        const dy = mid.point[1] - avg[1]
        const dsquared = dx*dx + dy*dy
        if(dx*dx + dy*dy > eps_squared) {
            // need to refine, add mid to the list and repeat
            samples.splice(i+1, 0, mid)
        } 
        else {
            // no need to refine, move on to the next point
            i++
        }
    }

    // extract points only
    const points: any = [];
    for (i = 0; i < samples.length; i++) {
      const { arclength, point } = samples[i]
      points.push({ point: new Point(point[0], point[1]), 
                    md: arclength
                  });
    }

    const out = { data: { ...data, diameter: data.diameter }, points, hasShoe: data.hasShoe, innerDiameter: data.innerDiameter };

    return out; */
  };
}
