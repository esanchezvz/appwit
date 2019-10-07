import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import * as SmoothScroll from 'smooth-scroll';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isFixed: boolean;
  collapsed = true;
  inViewport: string;

  constructor(
    private viewportScroller: ViewportScroller,
    // tslint:disable-next-line: variable-name
    public _viewportService: ViewportService
  ) {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 50,
      offset: 84,
      updateURL: false,
      easing: 'easeOutQuad',
      popstate: false
    });

    const scrollTop = new SmoothScroll('a.toTop', {
      speed: 50,
      offset: 0,
      updateURL: false,
      easing: 'easeOutQuad',
      popstate: false
    });
  }

  ngOnInit() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck(): void {
    this.inViewport = this._viewportService.isInViewport;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (offset > 50) {
      this.isFixed = true;
    } else if (offset <= 50) {
      this.isFixed = false;
    }
  }
}
