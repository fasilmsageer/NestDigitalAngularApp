import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregComponent } from './employeereg/employeereg.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"employeereg",
    component:EmployeeregComponent
  },
  {
    path:"viewcourse",
    component:ViewcourseComponent
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    EmployeeloginComponent,
    EmployeeregComponent,
    ViewcourseComponent,
    NavbarComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
