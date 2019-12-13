import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    toInactive = 0;
    toActive = 0;

    incrementActiveToInactive() {
        this.toInactive++;
    }

    incrementInactiveToActive() {
        this.toActive++;
    }
}
