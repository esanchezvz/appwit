import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  HostListener
} from '@angular/core';
import { ViewportService } from '../services/viewport.service';

@Directive({
  selector: '[appInViewPort]'
})
export class InViewPortDirective {
  @Output() inViewPort: EventEmitter<string> = new EventEmitter();
  elmID: string;

  constructor(
    private element: ElementRef,
    // tslint:disable-next-line: variable-name
    public _viewportService: ViewportService
  ) {
    this.elmID = this.element.nativeElement.id;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isInViewPort(this.element);
  }

  isInViewPort(el) {
    const rect = el.nativeElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const vertInView =
      rect.top <= windowHeight - 100 && rect.top + rect.height >= 0;
    const horInView =
      rect.left <= windowWidth - 100 && rect.left + rect.width >= 0;

    // this.elmID === 'nosotros' ? console.log(windowHeight, rect.height) : null;

    if (window.scrollY < 100) {
      this.inViewPort.emit(null);
    }
    if (vertInView && horInView && rect.top > 0) {
      this.inViewPort.emit(this.elmID);
    }
  }
}
