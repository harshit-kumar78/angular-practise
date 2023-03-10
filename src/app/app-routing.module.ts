import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
// import { PreloadingStrategy } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  //   {
  //     path: 'about',
  //     component: AboutComponent,
  //   },
  {
    path: 'about',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
  },
  {
    path: 'profile/:username/:userid',
    component: ProfileComponent,
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((mod) => mod.CustomerModule),
    component: CustomerComponent,
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((mod) => mod.OrderModule),
    component: OrderComponent,
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((mod) => mod.EmployeeModule),
    component: EmployeeComponent,
  },
  {
    path: 'employeedetails',
    component: EmployeedetailsComponent,
    outlet: 'employeelist',
  },
  {
    path: 'details',
    component: OrderComponent,
    outlet: 'employeelist',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
