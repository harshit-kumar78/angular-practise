import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css'],
})
export class MotherComponent {
  @ViewChild(SonComponent) sonComponent!: SonComponent;

  constructor() {}
}
