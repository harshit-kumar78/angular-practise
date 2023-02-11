import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  @HostBinding('style.color') color!: string;
  constructor(private eleRe: ElementRef) {}
  ngOnInit(): void {
    this.color = 'blue';
  }

  @HostListener('click') onclick() {
    this.color = 'green';
  }
  @HostListener('mouseover') onOver() {
    this.color = 'pink';
  }
  @HostListener('mouseout') onOut() {
    this.color = 'yellow';
  }
}
