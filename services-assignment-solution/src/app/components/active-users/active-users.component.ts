import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  
  @Input() users: string[];
  @Output() toInactive = new EventEmitter<number>();

  setToInactive(index: number) {
    this.toInactive.emit(index);
  }
}
