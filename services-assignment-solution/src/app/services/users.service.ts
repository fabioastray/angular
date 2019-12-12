import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

    activeUsers: string[] = ['User 1', 'User 2', 'User 3'];
    inactiveUsers: string[] = ['User 4', 'User 5', 'User 6'];

    constructor(private counterService: CounterService) {}

    setToActive(index: number) {
        const user = this.inactiveUsers[index];
        this.activeUsers.push(user);
        this.inactiveUsers.splice(index, 1);

        this.counterService.incrementInactiveToActive();
    }

    setToInactive(index: number) {
        const user = this.activeUsers[index];
        this.inactiveUsers.push(user);
        this.activeUsers.splice(index, 1);

        this.counterService.incrementActiveToInactive();
    }
}
