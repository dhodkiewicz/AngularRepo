import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import * as $ from 'jquery'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})



export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
 config: any;
 

  constructor(private heroService: HeroService) { 
    


  }

  ngOnInit(): void {
    this.getHeroes();
  }


  ngAfterViewInit(): void{
    this.fadeIn();
  }
  

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  pageChanged(event: number){
    this.config.currentPage = event;
  }

fadeIn(){
    $(function() {
      $('.fly-in').each(function(i) {
        $(this).hide().delay(i * 300).fadeIn(1500);
    });
  });
}

  /**
   *  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
   * 
   */
}

function controls(pageChange: any) {
  throw new Error('Function not implemented.');
}
