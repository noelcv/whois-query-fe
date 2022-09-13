import { Action } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';
import { IDomainResult } from 'src/app/types/domainResult.interface';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

export enum EUiActions {
  DisplayResults = '[Display Results] Show Result State',
  DisplayFavorites = '[Display Favorites] Show Favorites State',
}

//UI ACTIONS
export class DisplayResults implements Action {
  public readonly type = EUiActions.DisplayResults;
  constructor(public payload: boolean) {}
}

export class DisplayFavorites implements Action {
  public readonly type = EUiActions.DisplayFavorites;
  constructor(public payload: boolean) {}
}


export type UiActions = DisplayResults | DisplayFavorites;
