import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../states/app.state';
import { GetDomainResult, EDomainActions } from '../actions/domain.actions';
import { DomainService } from 'src/app/services/domain.service';
import { IDomainResult } from 'src/app/types/domainResult.interface';
import { IQuery } from 'src/app/types/domainQuery.interface';
import { selectedDomain } from '../selectors/domain.selectors';

@Injectable()
export class DomainEffects {
  //TODO: replace logic here to grab after QueryEffects
  // getDomain$ = createEffect(() => this._actions$.pipe(
  //   ofType<GetDomainResult>(EDomainActions.GetDomainResult),
  //   switchMap((action) => this._domainService.queryDomain(action.payload)),
  //   switchMap((queryHttp: IDomainResult) => of(new GetDomainResult(queryHttp)))
  // ))

  // getDomain$ = createEffect(() => {
  //   return this._actions$.pipe(
  //     ofType<IDomainResult>(EDomainActions.GetDomainResult),
  //     map((action) => action.payload),
  //     withLatestFrom(this._store.pipe(select(selectedDomain))),
  //     switchMap(([query, domains]) => {
  //       const domain = domains.find(
  //         (d: IDomainResult) => d.domain === query.domain
  //       );
  //       if (domain) {
  //         return of(new GetDomainResult(domain));
  //       } else {
  //         return this._domainService.queryDomain(query).pipe(
  //           switchMap((domainQuery: IQuery) => {
  //             return of(new GetDomainResult(domainQuery));
  //           })
  //         );
  //       }
  //     })
  //   );
  // });

  constructor(
    private _domainService: DomainService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
