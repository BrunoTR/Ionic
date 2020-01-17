import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Promotion } from 'src/shared/promotion';
import { baseURL } from 'src/shared/baseurl';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(public http: HttpClient, private processHttp: ProcessHttpmsgService) { }
  getPromotions() {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
        .pipe(
          tap(response => console.log('resposta promotions: ', response)),
          catchError(this.processHttp.handleError)
        );
  }
  getPromotion(id: number) {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
        .pipe(
          tap(response => console.log('resposta promotions: ', response)),
          catchError(this.processHttp.handleError)
        );
  }
  getFeaturedPromotion() {
    return this.http.get<Promotion>(baseURL + 'promotions?featured=true')
        .pipe(
          map(res => res[0]),
          tap(response => console.log('resposta promotions: ', response)),
          catchError(this.processHttp.handleError)
        );
  }
}
