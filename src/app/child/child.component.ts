import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ChildComponent {
  @Input('userName') user: string = '';
}
