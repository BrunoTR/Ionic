import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { baseURL } from 'src/shared/baseurl';
import { Dish } from 'src/shared/dish';
import { tap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(public http: HttpClient, private processHttp: ProcessHttpmsgService) { }
  getDishes() {
    this.http.get(baseURL + 'dishes')
        .pipe(
          tap(response => console.log(response)),
          catchError(err => this.processHttp.handleError(err))
        );
  }
  getDish() {
    this.http.get(baseURL + 'dishes/${id}')
        .pipe(
          tap(response => console.log(response)),
          catchError(err => this.processHttp.handleError(err))
        );
  }
  getFeaturedDish() {
    this.http.get(baseURL + 'dishes?featured=true')
        .pipe(
          map(res => res[0]),
          tap(response => console.log(response)),
          catchError(err => this.processHttp.handleError(err))
        );
  }
}
