import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeereg',
  templateUrl: './employeereg.component.html',
  styleUrls: ['./employeereg.component.css']
})
export class EmployeeregComponent {
  
  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  highestdeg=""
  yoexp=""
  doj=""
  username=""
  password=""
  confirmpassword=""

  constructor(private router:Router){}



  readempreg=()=>
  {
    let data:any={
      "empid":this.empid,
      "firstname":this.firstname,
      "lastname":this.lastname,
      "houseno":this.houseno,
      "housename":this.housename,
      "streetname":this.streetname,
      "pincode":this.pincode,
      "district":this.district,
      "state":this.state,
      "country":this.country,
      "mobile":this.mobile,
      "email":this.email,
      "parentname":this.parentname,
      "gender":this.gender,
      "highestdeg":this.highestdeg,
      "yoexp":this.yoexp,
      "doj":this.doj,
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.password
  }
    console.log(data)

    if (this.password==this.confirmpassword) {

      this.router.navigate(['/employeelogin'])
      
      
    } else {
      alert("invalid password")
      
    }
  }
}
