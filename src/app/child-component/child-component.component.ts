import { Component } from '@angular/core';
import { EmpsalaryService } from '../empsalary.service';

@Component({
  selector: 'app-child-component',
  // templateUrl: './child-component.component.html',
  providers: [],
  viewProviders: [],
  styleUrls: ['./child-component.component.css'],
  template: `<div class="info">
    <h3>child component salary => {{ randomSalary }}</h3>
  </div> `,
})
export class ChildComponentComponent {
  randomSalary!: number;
  constructor(private empService: EmpsalaryService) {
    this.randomSalary = this.empService.getEmpSalary();
  }
}
