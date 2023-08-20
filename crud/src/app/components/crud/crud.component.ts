import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Employees } from 'src/crud.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  employees:Employees[] = [];
  newEmployees:Employees = {name:"", salary:0, companyName:"",}

  constructor(private service:CrudService) { }

  ngOnInit(): void {

    this.loadData();

  }
  loadData() {
    this.service.getAllData().subscribe((data)=>{
      this.employees = data.map((employee)=>({...employee, editing:false}));
    })
  }

  addData(){
    this.service.addAllData(this.newEmployees).subscribe(()=>{
      this.loadData();
      this.newEmployees = {name:"", salary:0,companyName:""}
    })
  }

  updateData(id:number,employees:Employees){
    this.service.updateAllData(id,employees).subscribe(()=>{
      this.loadData();
    })
  }

  deleteData(id:number){
    this.service.deleteAllData(id).subscribe(()=>{
      this.loadData();

    })
  }

}
