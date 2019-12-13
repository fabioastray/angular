import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  @Input() users: string[];
  @Output() toActive = new EventEmitter<number>();

  setToActive(index: number) {
    this.toActive.emit(index);
  }
}
