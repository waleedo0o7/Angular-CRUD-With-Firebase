import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, query, group, animateChild, animate, keyframes, state, stagger } from '@angular/animations';
import * as _ from 'lodash';

export const addItem =
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0,
      transform: 'translateY(30px)',
    })),
    transition('* <=> *', animate(200)),
  ])


@Component({
  selector: 'test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  animations: [addItem]
})

export class Test2Component implements OnInit {

  teams = {
    pot1: ['Liverpool', 'Chelsea', 'Barcelona', 'Bayern Munich', 'Juventus', 'Manchester City', 'Paris Saint-Germain', 'Zenit'],
    pot2: ['Real Madrid', 'Atletico Madrid', 'Borussia Dortmund', 'Napoli', 'Shakhtar Donetsk', 'Tottenham', 'Ajax', 'Benfica'],
    pot3: ['Lyon', 'Bayer Leverkusen', 'Salzburg', 'Olympiacos', 'Club Brugge', 'Valencia', 'Inter Milan', 'Dinamo Zagreb'],
    pot4: ['Lokomotiv Moscow', 'Genk', 'Galatasaray', 'RB Leipzig', 'Slavia Prague', 'Red Star Belgrade', 'Atalanta', 'Lille'],
  }

  splicedTeams = [
    ['Liverpool', 'Chelsea', 'Barcelona', 'Bayern Munich', 'Juventus', 'Manchester City', 'Paris Saint-Germain', 'Zenit'],
    ['Real Madrid', 'Atletico Madrid', 'Borussia Dortmund', 'Napoli', 'Shakhtar Donetsk', 'Tottenham', 'Ajax', 'Benfica'],
    ['Lyon', 'Bayer Leverkusen', 'Salzburg', 'Olympiacos', 'Club Brugge', 'Valencia', 'Inter Milan', 'Dinamo Zagreb'],
    ['Lokomotiv Moscow', 'Genk', 'Galatasaray', 'RB Leipzig', 'Slavia Prague', 'Red Star Belgrade', 'Atalanta', 'Lille'],
  ]

  selectedOneTeam:any;

  randomNumber: any;
  
  bigArray = [];

  getRandomItem() {

    var randomText = '' ;

    if (this.splicedTeams[1].length > 0) {

      randomText = this.splicedTeams[1][Math.floor(Math.random() * this.splicedTeams[1].length)];

      this.splicedTeams[1] = _.filter(this.splicedTeams[1], function (o) { return o != randomText; });

    }

      return randomText ;

    }

  group = [] ;

  getRandomGroup() {

    var randomText = ''; 

    if (this.splicedTeams[1].length > 0 ) {

      for (var i = 1; i <= 8; i++) {

        randomText = this.splicedTeams[1][Math.floor(Math.random() * this.splicedTeams[1].length)];

        this.splicedTeams[1] = _.filter(this.splicedTeams[1], function (o) { return o != randomText; });

        console.log(randomText);

      }

    }
    
  }

  getAllRandomGroups(){

    var randomTeam = '';

    for (var ix = 0; ix < this.splicedTeams.length; ix++) {

      if (this.splicedTeams[ix].length > 0) {

        var len = this.splicedTeams[ix].length;

        for (var i = 0; i < len; i++) {

          randomTeam = this.splicedTeams[ix][Math.floor(Math.random() * this.splicedTeams[ix].length)];

          this.splicedTeams[ix] = _.filter(this.splicedTeams[ix], function (o) { return o != randomTeam; });

          if ( ix == 0 ) {

            this.bigArray.push([randomTeam]);

          } else {

            this.bigArray[i].push(randomTeam)            

          }

        }

      }

    }
    console.log(this.bigArray);
  }

  hidebtnvar: Boolean = true;

  hidebtn(){

    this.hidebtnvar = false ;

  }


  constructor() {
  }

  ngOnInit() {

  }

}