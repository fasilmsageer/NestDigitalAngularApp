import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeereg',
  templateUrl: './employeereg.component.html',
  styleUrls: ['./employeereg.component.css']
})
export class EmployeeregComponent {

  password=""
  confirmpassword=""

  constructor(private router:Router){}



  readempreg=()=>
  {
    let data:any={
      "password":this.password,
      "confirmpassword":this.password
  }
    console.log(data)

    if (this.password==this.confirmpassword) {

      this.router.navigate(['/employeelogin'])
      alert("valid password")
      
    } else {
      alert("invalid password")
      
    }
  }
}
