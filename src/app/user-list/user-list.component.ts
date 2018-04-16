import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../providers/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[] = [];
  private paUsers: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsersFromFirebase()
      .subscribe(
      (data) => this.users = data
      )
    this.paUsers = this.dataService.getPaList();
    console.log(this.paUsers);
  }

  onPaLevel(id: number) {
    for (let user in this.users) {
      if (this.users[user].id == id) {
        this.paUsers.push(this.users[user]);
      }
    }

    this.dataService.storePaListToFirebase(this.paUsers)
      .subscribe(
        (response)=>console.log(response)
      ),
      (error)=>console.log(error)

  }

}
