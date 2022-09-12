import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { IAppState } from 'src/app/store/states/app.state';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input()
  domainResult$ = this._store.pipe(select('domain'))
  displayUI$ = this._store.pipe(select('display'))

  addToWatchlist(domainResult$: any) {
    let payload = domainResult$.actionsObserver._value.payload
    console.log(payload, 'payload when clicking')
  }

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {

  }

}
