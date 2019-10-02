import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { Test2Component } from './test2/test2.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms'


// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


// Firebase modules 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth'; 

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'
import { EmployeeService } from './shared/employee.service';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    Test2Component,
    HomeComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [AngularFireDatabaseModule, AngularFirestoreModule,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}