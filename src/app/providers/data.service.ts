import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class DataService {
  private devices: Device[] = [];
  private pas: User[] = [];
  private admins: User[] = [];

  constructor(private http: Http) { }



  storeDevices(myDevices: Device[]) {
    return this.http.put("https://track1-a4311.firebaseio.com/devices.json",
      myDevices);
  }
  getDevicesFromFirebase() {
    return this.http.get("https://track1-a4311.firebaseio.com/devices.json")
      .map(
      (response: Response) => {
        // console.log(response);
        const data = response.json();
        // device-list组件创建的时候，这里的流被订阅，这里local devices被赋值。所以下面getDevice才能find
        this.devices = data;
        return data;
      }
      )
  }
  getDevices() {
    return this.devices;
  }

  getDevice(id: number) {
    return this.devices.find((device) => device.id == id);
  }

  storeUsers(users:User[]){
    return this.http.put("https://trackr-users.firebaseio.com/users.json" ,
      users);
  }

  getUsersFromFirebase(){
    return this.http.get("https://trackr-users.firebaseio.com/users.json")
      .map(
        (response: Response) =>{
          const data = response.json();
          return data;
        }
      )
  }

  getPaListFromFirebase() {
    return this.http.get("https://trackr-pa.firebaseio.com/pausers.json")
      .map(
      (response: Response) => {
        const data = response.json();
        this.pas = data;
        return data;
      }
      )
  }

  storePaListToFirebase(palist:User[]){
    return this.http.put("https://trackr-pa.firebaseio.com/pausers.json",
      palist);
  }
  storeAdminListToFirebase(adminList:User[]){
    return this.http.put("https://trackr-ad.firebaseio.com/adminusers.json",
      adminList);
  }

  getPaList() {
    return this.pas;
  }

  getAdminList() {
    return this.admins;
  }
  getAdminListFromFirebase() {
    return this.http.get("https://trackr-ad.firebaseio.com/adminusers.json")
      .map(
      (response: Response) => {
        const data = response.json();
        this.admins = data;
        return data;
      }
      )

  }



  // private devices:Device[]=[
  //   new Device(1,"iPhone 5s-1","iOS","11.0.1",true),
  //   new Device(2,"iPhone 6s-1","iOS","11.0.1",true),
  //   new Device(3,"iPhone 7s-1","iOS","12.0.1",true),
  //   new Device(4,"iPhone 8s-1","iOS","13.0.1",false),
  //   new Device(5,"Huawei P20-1","Android","7.0",true)
  // ];




}

export class Device {
  constructor(
    public id: number,
    public name: string,
    public os: string,
    public osVersion: string,
    public currentStatus: boolean,
  ) { }
}

export class User {
  constructor(
    public id: number,
    public email: string,
    public name: string
  ) { }
}

// export class User{
//   public id:number,
//
// }
