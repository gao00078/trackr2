import { Component, OnInit } from '@angular/core';
import { Device, DataService } from '../providers/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  private deviceId:number;
  private device:Device;
  private devices:Device[];

  constructor(
    private routeInfo:ActivatedRoute,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.deviceId =this.routeInfo.snapshot.params["id"];
    this.device = this.dataService.getDevice(this.deviceId);
    // console.log(this.device);
    this.dataService.getDevicesFromFirebase()
      .subscribe(
        (data) => this.devices =data
      )
  }



  onSaveBtnClicked(value:any){
    // console.log(this.devices);
    // console.log(value);

    for(let device in this.devices){
      if(this.devices[device].id == this.device.id){
        this.devices[device].name = value.devicename;
        this.devices[device].os = value.os;
        this.devices[device].osVersion = value.osVersion;
      }
    }

    this.dataService.storeDevices(this.devices)
      .subscribe(
        (response) => console.log(response),
        (error)=> console.log(error)
      )

    // console.log(this.device.id);

  }

}
