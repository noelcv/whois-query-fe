import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { GetDomainResult } from 'src/app/store/actions/domain.actions';
import { selectedDomain } from 'src/app/store/selectors/domain.selectors';
import { IAppState } from 'src/app/store/states/app.state';
import { IQuery } from 'src/app/types/domainQuery.interface';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input()
  domainResult$ = this._store.pipe(select(selectedDomain)).subscribe((data) => {return data})
  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
  //TODO: add logic to listen for changes in store
  this._store.dispatch(new GetDomainResult())
  console.log(this.domainResult$, 'this domainResult$ inside search-results component')
  }

}
