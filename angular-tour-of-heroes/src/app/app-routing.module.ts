import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//configures the routes (views to display when a user clicks a link or pastes a URL into the browser address bar)
//Typical angular Route has two properties:
// -- the path : string that matches the URL in the browser address bar 
// -- component : the component that the router should create when navigating to the route
// this tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like
// localhost:4200/heroes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, // redirects on initial load
  { path: 'heroes', component: HeroesComponent }
];

/*
-- The @NgModule metadata initializes the router and starts it listening for browser location changes.
-- The following line adds the RouterModule to the AppRoutingModule 
imports array and configures it with the routes in one step by calling RouterModule.forRoot():
*/
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
/*
  The method is called forRoot() because you configure the router at the application's root level. 
  The forRoot() method supplies the service providers and directives needed for routing,
  and performs the initial navigation based on the current browser URL.
*/
export class AppRoutingModule { } // exports RouterModule so that way it's available throughout the application
