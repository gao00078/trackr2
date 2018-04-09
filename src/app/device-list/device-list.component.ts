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
    this.devices = this.dataService.getDevices();
    // console.log(this.devices);
  }

}
