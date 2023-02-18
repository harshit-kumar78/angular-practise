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
import { ApiDataComponent } from './api-data/api-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ThreeComponent } from './three/three.component';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeModule } from './employee/employee.module';
import { JquerydemoComponent } from './jquerydemo/jquerydemo.component';
import { MotherComponent } from './mother/mother.component';
import { SonComponent } from './son/son.component';
import { SonDirective } from './son.directive';
import { LogoutComponent } from './logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './cookie/cookie.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { MypipesPipe } from './mypipes.pipe';
import { InputComponent } from './input/input.component';
import { InputChildComponent } from './input-child/input-child.component';

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
    ApiDataComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ThreeComponent,

    EmployeedetailsComponent,
    JquerydemoComponent,
    MotherComponent,
    SonComponent,
    SonDirective,
    LogoutComponent,
    CookieComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    MypipesPipe,
    InputComponent,
    InputChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule,
    // OrderModule,
    // EmployeeModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
