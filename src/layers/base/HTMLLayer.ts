import { select, Selection } from 'd3-selection';
import { Layer } from './Layer';
import { OnMountEvent, OnResizeEvent } from '../../interfaces';
import { DEFAULT_LAYER_HEIGHT, DEFAULT_LAYER_WIDTH } from '../../constants';

export abstract class HTMLLayer extends Layer {
  elm: Selection<HTMLElement, any, null, undefined>;

  onMount(event: OnMountEvent): void {
    super.onMount(event);
    const { elm } = event;
    const width = event.width || parseInt(elm.getAttribute('width'), 10) || DEFAULT_LAYER_WIDTH;
    const height = event.height || parseInt(elm.getAttribute('height'), 10) || DEFAULT_LAYER_HEIGHT;

    if (!this.elm) {
      this.elm = select(elm).append('div');
      this.elm.attr('id', `${this.id}`);
      this.elm.attr('class', 'html-layer');
    }
    const interactive = this.interactive ? 'auto' : 'none';
    this.elm
      .style('position', 'absolute')
      .style('height', `${height}px`)
      .style('width', `${width}px`)
      .style('opacity', this.opacity)
      .style('overflow', 'hidden')
      .style('pointer-events', interactive)
      .attr('z-index', this.order);
  }

  onUnmount(): void {
    super.onUnmount();
    this.elm.remove();
    this.elm = null;
  }

  onResize(event: OnResizeEvent): void {
    if (!this.elm) {
      return;
    }
    super.onResize(event);
    this.elm.style('height', `${event.height}px`).style('width', `${event.width}px`);
  }

  setVisibility(visible: boolean): void {
    super.setVisibility(visible);
    if (this.elm) {
      this.elm.attr('visibility', visible ? 'visible' : 'hidden');
    }
  }

  onOpacityChanged(opacity: number): void {
    if (this.elm) {
      this.elm.style('opacity', opacity);
    }
  }

  onOrderChanged(order: number): void {
    if (this.elm) {
      this.elm.attr('z-index', order);
    }
  }

  onInteractivityChanged(shouldBeInteractive: boolean): void {
    if (this.elm) {
      const interactive = shouldBeInteractive ? 'auto' : 'none';
      this.elm.style('pointer-events', interactive);
    }
  }
}
