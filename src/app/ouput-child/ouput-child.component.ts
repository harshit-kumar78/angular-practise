import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ouput-child',
  templateUrl: './ouput-child.component.html',
  styleUrls: ['./ouput-child.component.css'],
})
export class OuputChildComponent {
  list: string[] = [];
  @Output('parent') dataEvt: EventEmitter<string[]> = new EventEmitter();

  passValue(value: string) {
    this.list.push(value);
    this.dataEvt.emit(this.list);
  }
}
