import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';

console.log('employee module loaded');
@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule],
})
export class EmployeeModule {}
