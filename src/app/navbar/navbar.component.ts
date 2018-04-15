import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedinUser:string="";



  constructor(private authService:AuthService,
              private dataService:DataService
  ) { }



  ngOnInit() {
    if(this.authService.getCurrentUserEmail()){
      let currentUserEmail:string = this.authService.getCurrentUserEmail();
      this.loggedinUser = currentUserEmail.split('@')[0];
    }
  }

  onLogout(){
    this.authService.logout();
  }
  // userListCliked(){
  //   this.dataService.getAdminList();
  //
  // }

}
