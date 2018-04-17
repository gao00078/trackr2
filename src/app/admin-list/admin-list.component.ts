import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../providers/data.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  private admins:User[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.admins = this.dataService.getAdminList();
  }

}
