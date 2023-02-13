import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

console.log('customer module loading');
@NgModule({
  declarations: [CustomerComponent, OneComponent, TwoComponent],
  imports: [CommonModule, CustomerRoutingModule],
  exports: [OneComponent, TwoComponent],
})
export class CustomerModule {}
