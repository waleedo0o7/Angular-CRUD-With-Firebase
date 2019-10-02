import { Injectable } from '@angular/core';
import { Employee, Teams } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  formData : Employee;

  constructor( private firestore : AngularFirestore ) { }

  getEmployees(){
    return this.firestore.collection('employees').snapshotChanges()
  }

  getAllTeams() {
    return this.firestore.collection('teams').snapshotChanges()
  }

}


// export class TeamsService {

//   oneTeam : Teams;

//   constructor( private firestore2: AngularFirestore ) { 
//   }



// }