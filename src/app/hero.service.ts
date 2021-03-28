import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this._messageService.add("HeroeService: fetched heroes");
    return heroes;
  }
  constructor(private _messageService: MessageService) {}
}
