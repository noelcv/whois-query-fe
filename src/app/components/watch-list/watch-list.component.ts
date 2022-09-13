import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { DisplayFavorites, DisplayResults } from 'src/app/store/actions/ui.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  
  @Input()
  watchList$ = this._store.pipe(select('watchList'))
  watchListUi: IParsedDomain[] = []
  
  watchListHandler() {
    this._store.dispatch(new DisplayResults(false))
    this._store.dispatch(new DisplayFavorites(true))
  }
  
  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.pipe(select('watchList')).subscribe( data => {
      this.watchListUi = data.myWatchList
      }
    )
  }

}
