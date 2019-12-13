import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAutoclose]'
})
export class AutocloseDirective {

  @HostBinding('class.fade') fadeElement = false;

  constructor() {
    setTimeout(() => this.fadeElement = true, 3000);
  }
}
