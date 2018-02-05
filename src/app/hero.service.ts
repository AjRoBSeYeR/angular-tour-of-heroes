import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* Acordarse de registrar en app.module.ts como 'provider' */

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }

}
