import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSon]',
})
export class SonDirective implements AfterViewInit {
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.color = 'blue';
  }
  ngAfterViewInit(): void {
    this.eleRef.nativeElement.style.color = 'blue';
    this.eleRef.nativeElement.innerHTML = 'changed using directive';
  }
}
