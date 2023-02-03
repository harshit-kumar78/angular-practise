import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SuperComponent } from './super/super.component';
import { SubComponent } from './sub/sub.component';
import { AComponent } from './a/a.component';
import { CComponent } from './c/c.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { DataService } from './data.service';
import { AddressService } from './address.service';
import { Agent1Component } from './agent1/agent1.component';
import { Agent2Component } from './agent2/agent2.component';
import { BusbookingService } from './busbooking.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ParentComponent,
    ChildComponent,
    SuperComponent,
    SubComponent,
    AComponent,
    CComponent,
    FormComponent,
    ReactiveFormComponent,
    RegistrationFormComponent,
    ComponentOneComponent,
    Agent1Component,
    Agent2Component,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
