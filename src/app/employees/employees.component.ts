import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger,  transition,  style,  query,  group,  animateChild,  animate,  keyframes,  state,  stagger } from '@angular/animations';

import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';


export const addItem =
trigger('fadeInOut', [
  state('void', style({
    opacity: 0,
    transform: 'translateY(30px)',
  })),
  transition('* <=> *', animate(200)),
])

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [ addItem ]
})

export class EmployeesComponent implements OnInit {

  @ViewChild('FirebaseInput', { static: false }) FirebaseInput: ElementRef;


  listItem = [{ Id: 1,Name: 'list 1'}, { Id: 2, Name: 'list 2' }];
  list_order: number = 1;
 

  addItem() {
    this.list_order++;
    var lastItem = this.listItem[ this.listItem.length -1 ];
    var newlastItemID = lastItem.Id + 1;
    this.listItem.push({ Id: newlastItemID, Name: 'list ' + newlastItemID });
  }

  removeItem() {
    this.listItem.length -= 1;
  }

  removeThisItem(id){
    var index = this.listItem.findIndex(x => x.Id === id);
    this.listItem.splice(index,1)
  }

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {

  }


  ngAfterViewInit() {

  }
  
}