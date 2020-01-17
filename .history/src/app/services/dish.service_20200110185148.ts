import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { baseURL } from 'src/shared/baseurl';
import { tap, catchError, map } from 'rxjs/operators';
import { Dish } from 'src/shared/dish';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(public http: HttpClient, private processHttp: ProcessHttpmsgService) { }
  logging() {
    console.log('menu2');
  }
  getDishes() {
    console.log('menu3');
    return this.http.get<Dish[]>(baseURL + 'dishes')
        .pipe(
          tap(response => console.log(response, 'resposta')),
          catchError(this.processHttp.handleError)
        );
  }
  getDish(id: number) {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
        .pipe(
          tap(response => console.log(response)),
          catchError(err => this.processHttp.handleError(err))
        );
  }
  getFeaturedDish() {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true')
        .pipe(
          map(res => res[0]),
          tap(response => console.log(response)),
          catchError(err => this.processHttp.handleError(err))
        );
  }
}
