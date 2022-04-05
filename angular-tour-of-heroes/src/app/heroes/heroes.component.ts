import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

//the decorator function that specifies the Angular metadata for the component
@Component({ // below are the meta data properties
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero; // the selected hero
  heroes: Hero[] = []; // declaration of an array list of heroes


/*
adds the HeroService to the constructor
When Angular creates the HeroesComponent, the D.I. system sets the heroService paramater to the singleton instance of HeroService
*/
  constructor(private heroService: HeroService, private messageService: MessageService) { }
//ngOnInit() is a lifecycle hook- calls shortly after creating the component- good place for initialization logic
  ngOnInit(): void {
    /*
    While you could call getHeroes() in the constructor, that's not the best practice.
    Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
     The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests 
     to a remote server as a real data service would.

Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing 
a HeroesComponent instance.
    */
   this.getHeroes();
  }

  /*
This will not work in a real application. You're getting away with it now because the service currently returns mock heroes.
 But soon the application will fetch heroes from a remote server, which is an inherently asynchronous operation.
 This would be a synchronous call- neeed to make async by using HttpClient.get() which returns an Observable

 The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. 
 The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  */
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  /*
  The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously,
   as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
   That won't work when the HeroService is actually making requests of a remote server.

getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
  */

onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}
}
