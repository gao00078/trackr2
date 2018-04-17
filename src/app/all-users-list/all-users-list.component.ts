import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../providers/data.service';

@Component({
  selector: 'app-all-users-list',
  templateUrl: './all-users-list.component.html',
  styleUrls: ['./all-users-list.component.css']
})
export class AllUsersListComponent implements OnInit {
  private allUsers:User[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getUsersFromFirebase()
      .subscribe(
        (data)=> this.allUsers =data
      )
  }

}
