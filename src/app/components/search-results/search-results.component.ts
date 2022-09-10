import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs';
import { GetDomainResult } from 'src/app/store/actions/domain.actions';
import { selectedDomain } from 'src/app/store/selectors/domain.selectors';
import { IAppState } from 'src/app/store/states/app.state';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input()
  domainResult$ = this._store.pipe(select(selectedDomain)).subscribe((data) => {
    console.log(data.domain, 'this is the data from the store in an amazing subscriber at search results component')
    return data.domain
  })

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
  //TODO: add logic to listen for changes in store
  console.log(this.domainResult$, 'this domainResult$ inside search-results component')
  }

}
