import { Component, OnInit } from '@angular/core';

import { UserService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onToActive($event: number) {
    this.userService.setToActive($event);
  }

  onToInactive($event: number) {
    this.userService.setToInactive($event);
  }

  toActiveCounter() {
    return this.counterService.toActive;
  }

  toInactiveCounter() {
    return this.counterService.toInactive;
  }
}
