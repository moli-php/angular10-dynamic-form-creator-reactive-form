import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {
  @Input() defaultColor: string;
  @Input('appMyHighlight') myHighlightColor: string;

  @HostListener('mouseenter') onEnter() {
    this.changeHighlight(this.myHighlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onLeave() {
    this.changeHighlight(null);
  }

  constructor(private el: ElementRef) { 
  }

  private changeHighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
