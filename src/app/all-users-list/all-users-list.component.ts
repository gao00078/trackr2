import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../providers/data.service';

@Component({
  selector: 'app-all-users-list',
  templateUrl: './all-users-list.component.html',
  styleUrls: ['./all-users-list.component.css']
})
export class AllUsersListComponent implements OnInit {
   allUsers:User[]=[];
  private isAddFormHidden:boolean = true;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getUsersFromFirebase()
      .subscribe(
        (data)=> this.allUsers =data
      )
  }

  onDelete(id:number){
    // console.log(id);
    this.allUsers = this.allUsers.filter(user => user.id !=id);
    this.dataService.storeUsers(this.allUsers)
      .subscribe(
        (response)=>{
          // console.log(response)
}
      )
  }

}
