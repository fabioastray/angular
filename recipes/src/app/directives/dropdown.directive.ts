import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') click(event: Event) {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event.target']) onClick(targetElement: HTMLElement) {
    if (!this.elRef.nativeElement.contains(targetElement)) {
      this.isOpen = false;
    }
  }

  constructor(private elRef: ElementRef) {}
}
