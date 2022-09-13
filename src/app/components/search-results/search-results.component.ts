import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { AddDomainToWatchList, GetWatchList } from 'src/app/store/actions/watchlist.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';
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
  displayFavorites$ = this._store.pipe(select('displayFavorites'));
  
  selectedDomain: IParsedDomain | undefined = undefined
  selectedFavorite$ = this._store.pipe(select('watchList')).subscribe( domain => {
    if (domain.selectedFavorite) {
    this.selectedDomain = domain.selectedFavorite}
  })
  

  addToWatchList(domainResult$: any) {
    let payload: string = domainResult$.actionsObserver._value.payload
    const objectToStore = domainMapper(payload)
    console.log(objectToStore)
    this._store.dispatch( new AddDomainToWatchList(objectToStore))
    this._store.dispatch( new GetWatchList())
  }

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {

  }

}
