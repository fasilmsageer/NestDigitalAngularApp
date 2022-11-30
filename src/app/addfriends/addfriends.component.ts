import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  constructor(private api:ApiService){}

  
  readValues=()=>
  {
    let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Friend Added Successfully")
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
        } else{
          alert("something went wrong")

        }
      }
    )
  }

}
