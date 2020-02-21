import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { GameControlAppState } from 'src/app/models/AppState';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

  @Output() appStateChange = new EventEmitter<GameControlAppState>();

  numbers: number[] = [];
  private intervalSubscription: Subscription;
  private appState: GameControlAppState;

  constructor() {
    this.appState = new GameControlAppState('even-odd-game', 'stopped');
  }

  ngOnInit() {
    this.appStateChange.emit(this.appState);
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  start() {
    const customObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 12) {
          observer.complete();
        }

        if (count > 8) {
          observer.error(new Error('Oh no, this is an error!'));
        }

        count ++;
      }, 1000);
    });

    // this.intervalSubscription = interval(1000).subscribe(count => this.numbers.push(count));
    this.intervalSubscription = customObservable
      .pipe(
        filter((count: number) => count % 1 === 0),
        map((count: number) => count + 1)
      )
      .subscribe(
        (count: number) => this.numbers.push(count),
        error => console.error(error),
        () => console.log('completed')
      );

    this.appState.setState('started');
    this.appStateChange.emit(this.appState);
  }

  clearInterval() {
    if (!this.intervalSubscription.closed) {
      this.intervalSubscription.unsubscribe();
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
    return this.numbers.length === 0 || !this.intervalSubscription;
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
