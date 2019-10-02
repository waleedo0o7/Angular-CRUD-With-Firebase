import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../app/shared/employee.service';
import { Employee , Teams } from '../../../app/shared/employee.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];

  teamsList: Teams[];
  oneList : Teams[];

  pot1: any;
  pot2: any;
  pot3: any;
  pot4: any;

  constructor(
    private service: EmployeeService, 
    private firestore: AngularFirestore, 
    private toastr: ToastrService 
    ) { }

  ngOnInit() {
    this.service.getEmployees().subscribe( actionArray => {
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Employee
      });
    });

    this.service.getAllTeams().subscribe( getDATA => {
      this.teamsList = getDATA.map( oneItem => {
        return{
          ...oneItem.payload.doc.data() } as Teams
      });

      this.pot1 = this.teamsList[0];
      this.pot2 = this.teamsList[1];
      this.pot3 = this.teamsList[2];
      this.pot4 = this.teamsList[3];

      console.log(this.pot1);

     });
  }

  onEdit( emp : Employee ){
    this.service.formData = Object.assign({}, emp) ;
  }

  onDelete(id:string){
    if(confirm("are you sure you want to delete this record?")){
      this.firestore.doc("employees/"+id).delete();
      this.toastr.warning('delete successful', "EMP . Register")
    }
  }

}
