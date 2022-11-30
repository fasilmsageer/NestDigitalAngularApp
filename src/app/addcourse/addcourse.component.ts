import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  constructor(private api:ApiService){}


  readValue=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
    
    this.api.addCourses(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          alert("Course Added Successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseVenue=""
          this.courseDate=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }


}
