import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseover', ['$event']) 
  onMouseOver(evt: MouseEvent){
    this.renderer.addClass(this.el.nativeElement, 'border');
    this.renderer.addClass(this.el.nativeElement, 'border-danger');
  }

  @HostListener('mouseleave', ['$event']) 
  onMouseLeave(evt: MouseEvent){
    this.renderer.removeClass(this.el.nativeElement, 'border');
    this.renderer.removeClass(this.el.nativeElement, 'border-danger');
  }
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('test', el.nativeElement);
  }
}
