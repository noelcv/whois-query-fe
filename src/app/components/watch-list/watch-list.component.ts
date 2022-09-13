import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs';
import { GetWatchList } from 'src/app/store/actions/domain.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { IWatchListState } from 'src/app/store/states/watchList.state';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  
  
  @Input()
  watchList$ = this._store.pipe(select('watchList'))
  xpto: IParsedDomain[] = []
  
  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.pipe(select('watchList')).subscribe( data => {
      console.log(data, 'data inside watch pipe on init')
      console.log(data.myWatchList, 'data inside myWatchList pipe on init')
      this.xpto = data.myWatchList
      console.log('this.xpto', this.xpto)
      }
    )
  }

}
