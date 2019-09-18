import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { Test2Component } from './test2/test2.component'; 
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'componentIn0' } },
  { path: 'employees', component: EmployeesComponent, data: { animation: 'componentIn1' } },
  { path: 'test2', component: Test2Component, data: { animation: 'componentIn2' } } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }