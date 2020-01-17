import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { baseURL } from 'src/shared/baseurl';
import { tap, catchError, map } from 'rxjs/operators';
import { Leader } from 'src/shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(public http: HttpClient, private processHttp: ProcessHttpmsgService) { }
  getLeaders() {
    return this.http.get<Leader[]>(baseURL + 'leaders')
        .pipe(
          tap(response => console.log('resposta leaders: ', response)),
          catchError(this.processHttp.handleError)
        );
  }
  getLeader(id: number) {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
        .pipe(
          tap(response => console.log('resposta leaders: ', response)),
          catchError(this.processHttp.handleError)
        );
  }
  getFeaturedLeader() {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true')
        .pipe(
          map(res => res[0]),
          tap(response => console.log('resposta leaders: ', response)),
          catchError(this.processHttp.handleError)
        );
  }
}
