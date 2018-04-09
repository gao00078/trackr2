import { Component, OnInit } from '@angular/core';
import { Device, DataService } from '../providers/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  private deviceId:number;
  private device: Device;

  constructor(private routeInfo:ActivatedRoute,
              private dataService:DataService
  ) { }

  ngOnInit() {
    this.deviceId = this.routeInfo.snapshot.params["id"];
    this.device = this.dataService.getDevice(this.deviceId);
    console.log(this.device);
  }

}
