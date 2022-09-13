import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { environment } from 'src/environments/environment';
import { GetDomainResult } from './store/actions/domain.actions';
import { IAppState } from './store/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'whois-query-fe';
  apiUrl = environment.apiUrl
  domainResult$ = this._store.pipe(select('domain'))
  watchList$ = this._store.pipe(select('watchList'))

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {

  }

}
