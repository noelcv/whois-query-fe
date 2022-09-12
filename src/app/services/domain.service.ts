import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDomainResult } from '../types/domainResult.interface';
import { IQuery } from '../types/domainQuery.interface';
import { IAppState } from '../store/states/app.state';
import { Store } from '@ngrx/store';
import { _USER_RUNTIME_CHECKS } from '@ngrx/store/src/tokens';

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  //TODO: set environment variable

  private BASE_URL = 'http://localhost:3000/whois';

  constructor(private http: HttpClient) {}

  public queryDomain(query: IQuery): Observable<IDomainResult> {

    const response = this.http
      .get(this.BASE_URL, { params: { sld: query.sld, tld: query.tld }, responseType: 'json' })
      .pipe(
        map((data) => {
          return data})
      );

    return response;
  }
}
