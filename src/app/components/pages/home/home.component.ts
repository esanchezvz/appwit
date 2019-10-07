import { Component, OnInit, EventEmitter } from '@angular/core';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(public _viewportService: ViewportService) {}

  ngOnInit() {}

  updateViewportElement(event) {
    this._viewportService.updateViewportElement(event);
  }
}
