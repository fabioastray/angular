import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './models/AppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  appState: AppState;

  onAppChange(event: AppState) {
    this.appState = event;
  }
}
