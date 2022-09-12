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


  constructor(
    private _domainService: DomainService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
