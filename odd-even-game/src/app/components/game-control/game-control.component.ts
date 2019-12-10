import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameControlAppState } from 'src/app/models/AppState';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() appStateChange = new EventEmitter<GameControlAppState>();

  numbers: number[] = [];
  private intervalRef: ReturnType<typeof setTimeout>;
  private appState: GameControlAppState;

  constructor() {
    this.appState = new GameControlAppState('even-odd-game', 'stopped');
  }

  ngOnInit() {
    this.appStateChange.emit(this.appState);
  }

  start() {
    this.intervalRef = setInterval(() => {
      this.numbers.push(this.numbers.length + 1);
    }, 1000);

    this.appState.setState('started');
    this.appStateChange.emit(this.appState);
  }

  clearInterval() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
  }

  stop() {
    this.clearInterval();
    this.appState.setState('stopped');
    this.appStateChange.emit(this.appState);
  }

  reset() {
    this.clearInterval();
    this.numbers = [];

    this.appState.setState('stopped');
    this.appStateChange.emit(this.appState);
  }

  disableStart() {
    return this.numbers.length > 0;
  }

  disableStop() {
    return this.numbers.length === 0 || !this.intervalRef;
  }

  disableReset() {
    return this.numbers.length === 0;
  }

  isEven(value: number) {
    return value % 2 === 0;
  }

  isOdd(value: number) {
    return value % 2 !== 0;
  }
}
