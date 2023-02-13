import { Component } from '@angular/core';
import { EmpsalaryService } from '../empsalary.service';

@Component({
  selector: 'app-parent-component',
  // templateUrl: './parent-component.component.html',
  providers: [],
  viewProviders: [EmpsalaryService],
  styleUrls: ['./parent-component.component.css'],
  template: `<div class="info">
    <h3>parent component salary=> {{ randomSalary }}</h3>
    <ng-content></ng-content>
    <h3>child component inside parent</h3>
    <app-child-component></app-child-component>
  </div> `,
})
export class ParentComponentComponent {
  //variable to store
  randomSalary!: number;
  constructor(private empService: EmpsalaryService) {
    this.randomSalary = this.empService.getEmpSalary();
  }
}
