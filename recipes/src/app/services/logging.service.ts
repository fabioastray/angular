import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(@Optional() private logType: string = 'log') {
    this.logType = logType ? logType : 'log';
  }

  log(...message: any) {
    console[this.logType](message);
  }
}
