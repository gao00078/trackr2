import { Component, OnInit } from '@angular/core';
import { Device, DataService } from '../providers/data.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  private devices: Device[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // this.devices = this.dataService.getDevices();
    // console.log(this.devices);
    this.dataService.getDevicesFromFirebase()
      .subscribe(
        (data) => this.devices = data
      )

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

}
