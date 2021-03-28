import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
// import { Subscriber} from "rxjs";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private _heroService: HeroService,
    private _messageService: MessageService
  ) {}
  // selectedHero: Hero;
  // heroes = HEROES;
  // heroes = this._heroService.getHeroes();
  selectedHero?: Hero;
  // onClick(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // getHeroes(): void {
  //   this.heroes = this._heroService.getHeroes();
  // }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  ngOnInit() {
    this.getHeroes();
  }
}
