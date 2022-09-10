import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { selectedDomain } from 'src/app/store/selectors/domain.selectors';
import { IAppState } from 'src/app/store/states/app.state';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input()
  domainResult$ = this._store.pipe(select(selectedDomain))

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
  //TODO: add logic to listen for changes in store
  //this.store.dispatch(new GetDomainResult)
  }

}
