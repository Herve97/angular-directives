import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent'
  // @Input() highlightColor: string = '#044492'
  @Input('appBetterHighlight') highlightColor: string = '#044492'

  // Le HostBinding nous permet d'échapper à la notion du renderer pour modifier les propriétés CSS d'un élément HTML
  //
  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;
  @HostBinding('style.color') color: string = '#fff';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#22A19E');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
  }

  // Le HostListener nous permet d'utiliser le render afin de modifier certains propriétés CSS du DOM d'un élement HTML
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor
    this.color = '#fff'
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#22A19E');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor
    this.color = 'black'
  }

}
