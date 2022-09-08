import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface Query {
  sld: string,
  tld: string
}

@Injectable({
  providedIn: 'root'
})

export class DomainService {
  //TODO: set environment variable
  private BASE_URL = "http://localhost:3000/whois"

  constructor(private http: HttpClient) {}

  queryDomain(query: Query): Observable<HttpResponse<Object>> {
    const response = this.http.get(this.BASE_URL, {
      params: {
        sld: query.sld,
        tld: query.tld
      }, observe: 'response'
    }).pipe(
      map((res: HttpResponse<Object>) => {
        console.log(res.body, 'res.body')
        return res
      }))
      //TODO: dispatch action to NgRx store;
    return response
  }
}
