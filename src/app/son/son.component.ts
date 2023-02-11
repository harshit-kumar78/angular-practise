import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements AfterViewInit {
  @ViewChild('sonRef') sonRef!: ElementRef;
  @ViewChild(' emailRef') emailRef!: ElementRef;
  ngAfterViewInit(): void {
    this.sonRef.nativeElement.focus();
    this.sonRef.nativeElement.value = 'good morning';
    this.emailRef.nativeElement.style.backgroundColor = 'red';
    this.emailRef.nativeElement.value = 'hk@gmail.com';
  }
}
