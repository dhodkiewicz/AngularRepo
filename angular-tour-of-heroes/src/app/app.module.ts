import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //ngModel lives within this import

import { AppComponent } from './app.component'; // the main application component
import { HeroesComponent } from './heroes/heroes.component'; // the Hero component
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // the Hero detail component
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module'; // implement messages component

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
