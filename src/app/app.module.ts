import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';

const myRoute=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"/adminlogin",
    component:AdminLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    EmployeeloginComponent
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
