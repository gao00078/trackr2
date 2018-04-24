import { Component, OnInit } from '@angular/core';
import { Device, DataService, User } from '../providers/data.service';
import {AuthService} from '../providers/auth.service';
import {AdminloginGuard} from '../guard/adminlogin.guard';
import {PaloginGuard} from '../guard/palogin.guard';
// import {Router} from "@angular/router";
import { Location } from '@angular/common';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  private show:boolean =true;

   isAdminLoggedin:boolean;
  // private adminList:User[]=[];
   isPaLoggedin:boolean;

   devices: Device[]=[];

  // private pas:User[]=[];
   title:string = null ;

  constructor(private dataService: DataService,
              // private authService: AuthService,
              private adminGuard: AdminloginGuard,
              private paGuard: PaloginGuard

  ) { }

  ngOnInit() {

    //initializaiton finish dataService http get requests
    this.dataService.getDevicesFromFirebase()
      .subscribe(
      (data) => {this.devices = data;
        // console.log(this.devices);
      }
      )
    this.dataService.getPaListFromFirebase()
      .subscribe(
        (data) =>{
          this.isPaLoggedin = this.paGuard.canActivate();

        }
      )
    this.dataService.getAdminListFromFirebase()
      .subscribe(
        (data) =>{
          this.isAdminLoggedin = this.adminGuard.canActivate();
          // console.log("isAdminLoggedin here");
          // console.log(this.isAdminLoggedin);

        }
      )

    // console.log("isPaLoggedin");
    // console.log(this.isPaLoggedin);
    //
    // console.log("isAdminLoggedin");
    // console.log(this.isAdminLoggedin);
    // this.adminList = this.dataService.getAdminList();
    //
    // console.log(this.adminList);
    // console.log(this.authService.getCurrentUserEmail());
    //
    // for (let admin in this.adminList) {
    //   if (this.adminList[admin].email == this.authService.getCurrentUserEmail()) {
    //     console.log("here");
    //     // this.isAdminLoggedin = true;
    //   }
    // }
    // console.log("there");


  }


  onDelete(id: number) {
    // console.log(id);
    // console.log(this.devices);
    // let newDevices:Device[];
    this.devices = this.devices.filter(device => device.id != id);
    // this.devices = newDevices;
    // console.log(newDevices);
    this.dataService.storeDevices(this.devices)
      .subscribe(
      (response) => {
        // console.log(response);
        // location.reload()
      },
      (error) => {
        // console.log(error)
      }
      )

  }
}
  // onSave(){
  //   this.dataService.storeDevices(this.devices)
  //   .subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // };
  // onGet(){
  //   this.dataService.getDevicesFromFirebase()
  //     .subscribe(
  //       (data) => {this.devices = data;
  //       console.log(this.devices)}
  //     )
  // }

  // private myDevices:Device[]=[
  //   new Device(1,"iPhone 5s-1","iOS","11.0.1",true),
  //   new Device(2,"iPhone 6s-1","iOS","11.0.1",true),
  //   new Device(3,"iPhone 7s-1","iOS","12.0.1",true),
  //   new Device(4,"iPhone 8s-1","iOS","13.0.1",false),
  //   new Device(5,"Huawei P20-1","Android","7.0",true)
  // ];
