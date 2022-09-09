import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Query {
  sld: string;
  tld: string;
}

interface IDomainResult {
  domain: string;
}

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  //TODO: set environment variable

  private BASE_URL = 'http://localhost:3000/whois';

  constructor(private http: HttpClient) {}

  public queryDomain(query: Query): Observable<IDomainResult> {
    const response = this.http
      .get(this.BASE_URL, { params: { sld: query.sld, tld: query.tld } })
      .pipe(
        map((data) => {
          console.log("beautiful data", data)
          return data as IDomainResult})
      );

    return response;

    //TODO: dispatch action to NgRx store;
  }
}
