import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private heroesUrl = 'api/heroes'

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    // return this.http.get<Hero[]>(this.heroesUrl)
    return of([])
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    const url = `${this.heroesUrl}/${id}`
    // return this.http.get<Hero>(url)
    return of({
      id: 1,
      name: 'Thanh'
    })
  }

  getPosts(): Observable<any> {
    return this.http.get('https://www.reddit.com/r/reactjs.json')
  }
}
