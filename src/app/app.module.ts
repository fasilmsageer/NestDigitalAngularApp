import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregComponent } from './employeereg/employeereg.component';

const myRoute=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"/adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"/employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"/employeereg",
    component:EmployeeregComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    EmployeeloginComponent,
    EmployeeregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
