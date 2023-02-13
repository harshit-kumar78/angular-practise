import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpsalaryService {
  private randomSalary!: number;
  constructor() {
    this.randomSalary = Math.floor(Math.random() * 500);
  }
  getEmpSalary() {
    return this.randomSalary;
  }
}
