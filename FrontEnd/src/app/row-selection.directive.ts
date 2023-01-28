import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRowSelection]'
})
export class RowSelectionDirective {

  constructor(public el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(1);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(0);
  }
  
  public highlight(ok) {
    if(ok === 1) {
      //this.el.nativeElement.style.border = "solid black";
      this.el.nativeElement.style.fontWeight = "bold";
    } else {
      //this.el.nativeElement.style.border = "transparent";
      this.el.nativeElement.style.fontWeight = "normal";
    } 
  }

}
