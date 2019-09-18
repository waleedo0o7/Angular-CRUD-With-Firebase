import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../..//app/shared/employee.service';
import { Employee } from '../../../app/shared/employee.model';
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

  list:Employee[];

  constructor(private service: EmployeeService, private firestore: AngularFirestore, private toastr: ToastrService ) { }

  ngOnInit() {
    this.service.getEmployees().subscribe( actionArray => {
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Employee
      });
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
