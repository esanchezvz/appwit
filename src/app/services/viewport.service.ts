import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  isInViewport: string;

  constructor() {}

  updateViewportElement(elem: string) {
    this.isInViewport = elem;
  }

  getElementInViewport(): string {
    return this.isInViewport;
  }
}
