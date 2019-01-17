import { Injectable } from '@angular/core';
import { HttpResponseType, HttpService } from './http.service';
import { API } from '../api';
import { Observable } from 'rxjs';
import { TableListResponseType } from '../type/types';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';
import { map } from 'rxjs/operators';
import { Hero } from '../type/heroes';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  handleError: HandleError;

  constructor(
    private http: HttpService,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createErrorHandler('DataService');
  }


  getHeroes(): Observable<any> {
    return this.http.Get(API.heroes, {}, '请求英雄列表数据', {data: {list: []}})
      .pipe(map((res: HttpResponseType<TableListResponseType>) => {
        // 如果不使用 map 操作符，将返回 Observable<HttpResponseType>，因此这里需要将对应的字段值取出来
        return res.data.list;
      }));
  }

  getHero(id: string): Observable<Hero> {
    return this.getHeroes().pipe(
      map(heroes => heroes.find(hero => hero.id === +id))
    );
  }
}
