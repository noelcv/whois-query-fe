import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { IAppState } from 'src/app/store/states/app.state';
import { domainMapper } from 'src/app/utils/domainMapper';


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
    let payload: string = domainResult$.actionsObserver._value.payload
    const objectToStore = domainMapper(payload)
    console.log(objectToStore)
  }

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {

  }

}
