import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.css'],
})
export class InputOutputChildComponent {
  @Input() foods!: string[];
  @Output('delEvt') delete = new EventEmitter<number>();
  deleteFood(index: number) {
    this.delete.emit(index);
  }
}
