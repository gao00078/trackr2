import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private devices:Device[]=[
    new Device(1,"iPhone 5s-1","iOS","11.0.1",true),
    new Device(2,"iPhone 6s-1","iOS","11.0.1",true),
    new Device(3,"iPhone 7s-1","iOS","12.0.1",true),
    new Device(4,"iPhone 8s-1","iOS","13.0.1",false),
    new Device(5,"Huawei P10-1","Android","7.0",true)
  ];

  constructor() { }

  getDevices(){
    return this.devices;
  }

  getDevice(id:number){
    return this.devices.find((device)=>device.id ==id);
  }


}

export class Device{
  constructor(
    public id:number,
    public name:string,
    public os:string,
    public osVersion: string,
    public currentStatus: boolean,
  ){}
}

// export class User{
//   public id:number,
//
// }
