import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDomainResult } from '../types/domainResult.interface';
import { IQuery } from '../types/domainQuery.interface';

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  //TODO: set environment variable

  private BASE_URL = 'http://localhost:3000/whois';

  constructor(private http: HttpClient) {}

  public queryDomain(query: IQuery): Observable<IDomainResult> {
    console.log(query, 'query in service');
    const response = this.http
      .get(this.BASE_URL, { params: { sld: query.sld, tld: query.tld }, responseType: 'json' })
      .pipe(
        map((data) => {
          console.log('beautiful data', data);
          return data})
      );

    return response;

    //TODO: dispatch action to NgRx store;
  }
}
