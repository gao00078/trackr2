import { Component, OnInit } from '@angular/core';
import { Device, DataService } from '../providers/data.service';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

  private devices: Device[];
  private id:number;
  private currentStatus:boolean = false;
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getDevicesFromFirebase()
      .subscribe(
        (data) => {this.devices = data;
          // console.log(this.devices);
          // console.log(this.devices.length);
          let idArr:number[] = [];
          this.devices.forEach(item=> idArr.push(item.id));
          // console.log(idArr);
          // console.log(idArr.pop());
          this.id = idArr.pop()+1;
          // console.log(this.id - 1);
          // console.log(idArr);
        }
      )

  }
  onAddBtnClicked(value:any){

    this.devices.push(new Device(this.id, value.devicename, value.os, value.osVersion, this.currentStatus));
    console.log(this.devices);
    // console.log(value.devicename);
    this.dataService.storeDevices(this.devices)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )




  }

  // onSubmit(value:any){
  //   this.dataService.getDevicesFromFirebase()
  //     .subscribe(
  //       (data) => {this.devices = data;
  //         console.log(value);
  //
  //       }
  //     )
  // }

}
