import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* Acordarse de registrar en app.module.ts como 'provider' */

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(){
    return HEROES;
  }

}
