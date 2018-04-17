import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { DataService, User } from "../providers/data.service";
import { AuthService } from "../providers/auth.service";

@Injectable()
export class PaloginGuard implements CanActivate{

  private paList:User[] = [];
  constructor(private dataService:DataService,
              private authService:AuthService
              // private router:Router
  ) { }

  canActivate() {
    // this.dataService.getPaList()
    //   .subscribe(
    //     (data) =>{
    //       this.paList = data;
    //     }
    //   )
    this.paList = this.dataService.getPaList();
    console.log(this.paList);
    console.log(this.authService.getCurrentUserEmail());
    for(let pa in this.paList){
      if(this.paList[pa].email == this.authService.getCurrentUserEmail() ){
        // console.log("test?");
        // this.router.navigate(['./deviceadd']);
        return true;
      }
    }
    // console.log("there");

    return false;
    // return true;

  }

}
