import { Component, OnInit } from '@angular/core';
import { User, DataService } from '../providers/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pa-list',
  templateUrl: './pa-list.component.html',
  styleUrls: ['./pa-list.component.css']
})
export class PaListComponent implements OnInit {
  private pas:User[] = [];
  private idnew:number;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getPaListFromFirebase()
      .subscribe(
        (data)=>{this.pas = data;
        console.log(this.pas);
        if(data !=null){
          let idArr:number[]=[];
          this.pas.forEach(item => idArr.push(item.id));
          this.idnew = idArr.pop()+1;
        }else{
          this.pas = [];
          this.idnew = 1;
        }

      }
      )
    // this.pas = this.dataService.getPaList();
  }
  onAddPa(form:NgForm){
    console.log(form.value.name);
    console.log(this.pas);

    this.pas.push(new User(this.idnew++,form.value.email, form.value.name));
    console.log(this.pas);

    this.dataService.storePaListToFirebase(this.pas)
      .subscribe(
        (response) => console.log(response)
      )
  }
  onDelete(id:number){
    console.log(id);
    this.pas = this.pas.filter(pa => pa.id !=id);
    this.dataService.storePaListToFirebase(this.pas)
    .subscribe(
      (response)=>console.log(response)
    )
  }

}
