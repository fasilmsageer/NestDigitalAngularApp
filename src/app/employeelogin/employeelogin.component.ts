import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  empid=""
  password=""

  constructor(private router:Router){}



  reademplogin=()=>
  {
    let data:any={
      "empid":this.empid,
      "password":this.password
  }
    console.log(data)

    if (this.empid=="1122" && this.password=="12345") {

      this.router.navigate(['/addcourse'])
    
      
    } else {
      alert("invalid login")
      
    }
  }

}
