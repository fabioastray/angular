import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event.target']) onDocumentClick(target) {
    if (!this.elRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  constructor(private elRef: ElementRef) { }

}
