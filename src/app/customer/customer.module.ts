import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

console.log('customer module loading');
@NgModule({
  declarations: [],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
