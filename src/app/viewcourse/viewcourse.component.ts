import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  constructor(private api:ApiService){
    api. fetchCourses().subscribe(
      (response)=>{
        this.loading = false
        console.log(response)
        this.data=response;
      }
    )
  }

  data:any=[]

  loading:boolean = true

}
