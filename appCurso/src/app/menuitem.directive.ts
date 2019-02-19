import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding('class.itemOrange') private show: boolean = false;

  @HostListener('mouseover') onOver() {
    this.show = true;
  }

  @HostListener('mouseout') onOut() {
    this.show = false;
  }

}
