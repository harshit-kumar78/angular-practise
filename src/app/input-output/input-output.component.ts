import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  foods: string[] = [];
  deletedFood!: string;
  passValue(value: string) {
    this.foods.push(value);
    console.log(this.foods);
  }

  removeFood(indexFood: number) {
    this.deletedFood = this.foods[indexFood];
    this.foods = this.foods.filter((value, index) => index != indexFood);
  }
}
