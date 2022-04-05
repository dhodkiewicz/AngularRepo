import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs' // implements import of Observable and 'of' symbols- for use with simulating data from a server w/ of()
import { MessageService } from './message.service'; // implements our message servace

/*
The @Injectable() decorator accepts a metadata object for the service, 
the same way the @Component() decorator did for your component classes.
The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.

** NOTE**
Need to make HeroService avail to the d.i. system before angular can inject it into the HeroesComponent by registering a provider
-A provider is something that can create or deliver a service; in this case it instantiates the HEroService class to provide the service

-To make sure HeroService can provide this service, register it with th einjector, which is the obj that is responsible for
choosing and injecting the provider where the app requires it.

**BY DEFAULT**- angular cli command ng generate service registers a provider with the root injector for your service by including provider metadata
that is providedIn: 'root' in the @Injectable() decorator

When provided at the root level, Angular creates a signle, shared instance of HeroService and injectsinto any class that asks for it. Registering the provider in
the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out to not be used after all
*/



@Injectable({ 
  providedIn: 'root'
})
export class HeroService {

  /*
  This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  */
  constructor(private messageService: MessageService) { }

  //method to return a list of mock heroes but in a way which simulates getting from a server
  getHeroes(): Observable<Hero[]>{
    const heroes = of (HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
