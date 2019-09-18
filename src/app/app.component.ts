import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  trigger,  transition,  style,  query,  animate,  group,  stagger} from '@angular/animations';
 
export const componentIn =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave

      group([
        
        query(':enter', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0, 
          }),
        ], { optional: true }),


        query(':leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
          }),
        ], { optional: true }),

        query(':enter', [
          animate('800ms ease', style({ opacity: 1 })),
        ], { optional: true }),


        query(':leave', [
          animate('800ms ease', style({ opacity: 0 })),
        ], { optional: true }),

        // query('.test-animation', style({ opacity: 0, transform: 'translateX(-40px)' }), { optional: true }),

        // query('.test-animation', stagger('500ms', [
        //   animate('800ms 0ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        // ]), { optional: true }),

      ]),
    ]),
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ componentIn ]
})


export class AppComponent implements OnInit {
  title = 'anguler-app'; 

  mydata:any[];
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
 

  ngOnInit() {
  }
  
}