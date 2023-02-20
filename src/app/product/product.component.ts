import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() data!: number;
  @Output() dataChange = new EventEmitter<number>();
  itemPrice: number = 15;

  incQty() {
    this.data++;
    this.updateQty();
  }
  decQty() {
    if (this.data > 1) {
      this.data--;
      this.updateQty();
    }
  }
  updateQty() {
    this.dataChange.emit(this.data);
  }
}
